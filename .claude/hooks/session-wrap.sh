#!/usr/bin/env bash
#
# SessionEnd hook: auto-summarize the session into each affected post's
# discussion.md, then commit.
#
# v2 (2026-06): the v1 hook never produced a single commit in repo history.
# Root causes fixed here:
#   1. v1 only looked at UNCOMMITTED changes under posts/ — but good sessions
#      commit their work, so the hook found a clean tree and exited. v2
#      detects folders touched this session: uncommitted changes PLUS commits
#      made since the session started (derived from the transcript).
#   2. v1 skipped any folder with a commit in the last 2 minutes — i.e. it
#      skipped exactly the sessions that ended properly. v2 skips a folder
#      only if discussion.md itself was updated this session (notes exist).
#   3. v1 summarized only the git diff. Decisions live in the conversation —
#      v2 passes the session transcript to claude -p so user decisions,
#      rejections, and preferences get captured.
#
# Non-blocking: always exits 0. Failures logged to .claude/state/session-wrap.log.

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

# Parse hook input from stdin: transcript_path, session_id
HOOK_INPUT="$(cat 2>/dev/null || true)"
TRANSCRIPT=""
SESSION_ID=""
if [[ -n "$HOOK_INPUT" ]] && command -v node &> /dev/null; then
  TRANSCRIPT="$(printf '%s' "$HOOK_INPUT" | node -e 'let d="";process.stdin.on("data",c=>d+=c).on("end",()=>{try{process.stdout.write(JSON.parse(d).transcript_path||"")}catch{}})' 2>/dev/null)"
  SESSION_ID="$(printf '%s' "$HOOK_INPUT" | node -e 'let d="";process.stdin.on("data",c=>d+=c).on("end",()=>{try{process.stdout.write(JSON.parse(d).session_id||"")}catch{}})' 2>/dev/null)"
fi

# Session start: first timestamp in the transcript; fallback 6 hours ago
SESSION_START=""
if [[ -n "$TRANSCRIPT" && -f "$TRANSCRIPT" ]] && command -v node &> /dev/null; then
  SESSION_START="$(head -5 "$TRANSCRIPT" | node -e 'let d="";process.stdin.on("data",c=>d+=c).on("end",()=>{for(const l of d.split("\n")){try{const t=JSON.parse(l).timestamp;if(t){process.stdout.write(t);return}}catch{}}})' 2>/dev/null)"
fi
SESSION_START="${SESSION_START:-$(date -u -d '6 hours ago' +%Y-%m-%dT%H:%M:%SZ 2>/dev/null || echo '6 hours ago')}"

# Guard: dedupe per session
STATE_KEY="$STATE_DIR/last-wrap-${SESSION_ID:-$(git status --porcelain posts/ 2>/dev/null | sha1sum | cut -c1-12)}"
if [[ -f "$STATE_KEY" ]]; then
  log "skipped: already wrapped session ${SESSION_ID:-unknown}"
  exit 0
fi

# Affected folders = uncommitted changes under posts/ + folders committed this session
declare -A FOLDERS=()
while IFS= read -r f; do
  [[ "$f" =~ ^posts/([^/]+)/ ]] && FOLDERS["${BASH_REMATCH[1]}"]=1
done < <(git status --porcelain posts/ 2>/dev/null | awk '{print $NF}')
while IFS= read -r f; do
  [[ "$f" =~ ^posts/([^/]+)/ ]] && FOLDERS["${BASH_REMATCH[1]}"]=1
done < <(git log --since="$SESSION_START" --name-only --pretty=format: -- posts/ 2>/dev/null)

if [[ ${#FOLDERS[@]} -eq 0 ]]; then
  log "no posts/ activity this session"
  touch "$STATE_KEY"
  exit 0
fi

# Skip a folder only if its discussion.md was already updated this session
notes_taken_for() {
  local folder="$1"
  # uncommitted edit to discussion.md counts
  if git status --porcelain -- "posts/$folder/discussion.md" 2>/dev/null | grep -q .; then
    return 0
  fi
  # commit touching discussion.md this session counts
  if git log --since="$SESSION_START" --oneline -- "posts/$folder/discussion.md" 2>/dev/null | grep -q .; then
    return 0
  fi
  return 1
}

for folder in "${!FOLDERS[@]}"; do
  if notes_taken_for "$folder"; then
    log "skip $folder: discussion.md already updated this session"
    continue
  fi

  POST_DIR="posts/$folder"
  DISCUSSION="$POST_DIR/discussion.md"
  CONTEXT_FILE="$STATE_DIR/context-$folder.txt"

  {
    echo "== Uncommitted diff =="
    git diff -- "$POST_DIR" 2>/dev/null
    echo "== Uncommitted status =="
    git status --porcelain -- "$POST_DIR" 2>/dev/null
    echo "== Commits this session (since $SESSION_START) =="
    git log --since="$SESSION_START" --stat -- "$POST_DIR" 2>/dev/null
  } > "$CONTEXT_FILE"

  TRANSCRIPT_INSTRUCTION=""
  if [[ -n "$TRANSCRIPT" && -f "$TRANSCRIPT" ]]; then
    TRANSCRIPT_INSTRUCTION="3. Read the session transcript at $TRANSCRIPT (JSONL — if large, read the tail in chunks). Extract USER DECISIONS: choices made, options rejected and why, preferences expressed, reframes requested. These conversation-level decisions matter MORE than the diff — they are the part no file change captures."
  fi

  PROMPT=$(cat <<EOF
You are completing a session on the blog post at $POST_DIR.

Task: Append a new session entry to $DISCUSSION following the existing
format in that file. Keep it concise — one session entry, not a rewrite.

Steps:
1. Read $DISCUSSION to see the existing format (look at the most recent Session N entry).
2. Read $CONTEXT_FILE (uncommitted diff + commits made this session).
$TRANSCRIPT_INSTRUCTION
4. Determine the next Session number.
5. Append one new Session section with: Context (1-2 sentences), What Claude Did (bullets, factual), User Decisions (from the transcript — include rejected options and stated reasons; do NOT invent decisions), Files modified (list), Next Steps (if implied).

Constraints:
- Do NOT rewrite or restructure existing content.
- Do NOT add horizontal rules.
- Keep the new session entry under ~40 lines. Terse beats thorough.
- If $DISCUSSION does not exist yet, create it with a standard header and the first Session entry.
- Output a single line to stdout at the very end in this exact format:
  COMMIT_SUMMARY: <5-10 word summary of what happened>
EOF
  )

  log "summarizing $folder (session start: $SESSION_START)"
  SUMMARY_OUTPUT="$(claude -p --permission-mode acceptEdits "$PROMPT" 2>> "$LOG_FILE" || true)"
  COMMIT_SUMMARY="$(printf '%s\n' "$SUMMARY_OUTPUT" | grep -E '^COMMIT_SUMMARY:' | head -1 | sed 's/^COMMIT_SUMMARY:[[:space:]]*//')"
  COMMIT_SUMMARY="${COMMIT_SUMMARY:-session update}"

  rm -f "$CONTEXT_FILE"

  # Commit whatever the summary run produced (discussion.md and any dirty files)
  if [[ -z "$(git status --porcelain -- "$POST_DIR" 2>/dev/null)" ]]; then
    log "$folder: no changes after summary, nothing to commit"
    continue
  fi

  git add -- "$POST_DIR" 2>> "$LOG_FILE"

  COMMIT_MSG=$(cat <<EOF
Session notes: $folder — $COMMIT_SUMMARY

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
  )

  if git commit -m "$COMMIT_MSG" >> "$LOG_FILE" 2>&1; then
    warn "committed $folder: $COMMIT_SUMMARY"
  else
    warn "commit failed for $folder — see $LOG_FILE"
  fi
done

touch "$STATE_KEY"
exit 0
