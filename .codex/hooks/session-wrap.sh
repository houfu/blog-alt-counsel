#!/usr/bin/env bash
#
# SessionEnd hook: auto-summarize the session into each affected post's
# discussion.md, then commit posts/** changes.
#
# Non-blocking: always exits 0. Any failure is logged to
# .claude/state/session-wrap.log and surfaced on stderr.

set -u

REPO_ROOT="$(git rev-parse --show-toplevel 2>/dev/null)" || exit 0
cd "$REPO_ROOT" || exit 0

STATE_DIR="$REPO_ROOT/.claude/state"
LOG_FILE="$STATE_DIR/session-wrap.log"
mkdir -p "$STATE_DIR" 2>/dev/null || exit 0

log() {
  printf '[%s] %s\n' "$(date -u +%Y-%m-%dT%H:%M:%SZ)" "$*" >> "$LOG_FILE"
}

warn() {
  printf 'session-wrap: %s\n' "$*" >&2
  log "$*"
}

# Guard: explicit escape hatch
if [[ -n "${CLAUDE_HOOK_SESSION_SKIP_WRAP:-}" ]]; then
  log "skipped via CLAUDE_HOOK_SESSION_SKIP_WRAP"
  exit 0
fi

# Guard: no claude CLI available — can't summarize
if ! command -v claude &> /dev/null; then
  log "skipped: claude binary not in PATH"
  exit 0
fi

# Guard: state file keyed on current HEAD + worktree hash
HEAD_SHA="$(git rev-parse HEAD 2>/dev/null || echo none)"
TREE_HASH="$(git status --porcelain posts/ 2>/dev/null | sha1sum | cut -c1-12)"
STATE_KEY="$STATE_DIR/last-wrap-$HEAD_SHA-$TREE_HASH"
if [[ -f "$STATE_KEY" ]]; then
  log "skipped: already wrapped this state ($HEAD_SHA/$TREE_HASH)"
  exit 0
fi

# Detect affected post folders (staged + unstaged + untracked under posts/)
mapfile -t CHANGED < <(git status --porcelain posts/ 2>/dev/null | awk '{print $NF}')
if [[ ${#CHANGED[@]} -eq 0 ]]; then
  log "no changes under posts/"
  touch "$STATE_KEY"
  exit 0
fi

declare -A FOLDERS=()
for f in "${CHANGED[@]}"; do
  if [[ "$f" =~ ^posts/([^/]+)/ ]]; then
    FOLDERS["${BASH_REMATCH[1]}"]=1
  fi
done

if [[ ${#FOLDERS[@]} -eq 0 ]]; then
  log "no posts/*/ folders in changes"
  touch "$STATE_KEY"
  exit 0
fi

# Guard: skip folder if a commit in the last 2 minutes already touched it
recent_commit_for() {
  local folder="$1"
  git log --since='2 minutes ago' --oneline -- "posts/$folder/" 2>/dev/null | head -1
}

for folder in "${!FOLDERS[@]}"; do
  if [[ -n "$(recent_commit_for "$folder")" ]]; then
    warn "skip $folder: commit within last 2 min"
    log "skip $folder: recent commit"
    continue
  fi

  POST_DIR="posts/$folder"
  DISCUSSION="$POST_DIR/discussion.md"
  DIFF_FILE="$STATE_DIR/diff-$folder.txt"
  STATUS_FILE="$STATE_DIR/status-$folder.txt"

  git diff -- "$POST_DIR" > "$DIFF_FILE" 2>/dev/null
  git status --porcelain -- "$POST_DIR" > "$STATUS_FILE" 2>/dev/null

  # Build the summarization prompt
  PROMPT=$(cat <<EOF
You are completing a session on the blog post at $POST_DIR.

Task: Append a new session entry to $DISCUSSION following the existing
format in that file. Keep it concise — one session entry, not a rewrite.

Steps:
1. Read $DISCUSSION to see the existing format (look at the most recent Session N entry).
2. Read $DIFF_FILE (uncommitted diff) and $STATUS_FILE (changed file list).
3. Determine the next Session number.
4. Append one new Session section with: Context (1-2 sentences), What Claude Did (bullets, factual), User Decisions (if any are visible in the diff), Files modified (list), Next Steps (if implied).
5. If the post has a top "AUDIT TRAIL" or "WHAT CLAUDE DID" section, only add to it if a decision was clearly made this session — do not invent decisions.

Constraints:
- Do NOT rewrite or restructure existing content.
- Do NOT add horizontal rules.
- Keep the new session entry under ~40 lines. Terse beats thorough.
- If $DISCUSSION does not exist yet, create it with the standard header and the first Session entry.
- Output a single line to stdout at the very end in this exact format:
  COMMIT_SUMMARY: <5-10 word summary of what happened>
EOF
  )

  log "summarizing $folder"
  SUMMARY_OUTPUT="$(claude -p --permission-mode acceptEdits "$PROMPT" 2>> "$LOG_FILE" || true)"
  COMMIT_SUMMARY="$(printf '%s\n' "$SUMMARY_OUTPUT" | grep -E '^COMMIT_SUMMARY:' | head -1 | sed 's/^COMMIT_SUMMARY:[[:space:]]*//')"
  COMMIT_SUMMARY="${COMMIT_SUMMARY:-session update}"

  rm -f "$DIFF_FILE" "$STATUS_FILE"

  # Re-check: does the folder still have changes after the summary run?
  if [[ -z "$(git status --porcelain -- "$POST_DIR" 2>/dev/null)" ]]; then
    log "$folder: no changes after summary, nothing to commit"
    continue
  fi

  # Stage and commit
  git add -- "$POST_DIR" 2>> "$LOG_FILE"

  COMMIT_MSG=$(cat <<EOF
Session notes: $folder — $COMMIT_SUMMARY

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
  )

  if git commit -m "$COMMIT_MSG" >> "$LOG_FILE" 2>&1; then
    warn "committed $folder: $COMMIT_SUMMARY"
    log "committed $folder"
  else
    warn "commit failed for $folder — see $LOG_FILE"
  fi
done

touch "$STATE_KEY"
exit 0
