#!/usr/bin/env node

/**
 * Stop hook: in-session note-taking enforcement.
 *
 * When Claude finishes a turn having modified post content (main post file,
 * pitch, research) without touching that post's discussion.md, block the stop
 * once and instruct Claude to append the session/decision notes now — so the
 * user never has to ask. Fires at most once per post folder per session;
 * the SessionEnd wrap remains the backstop.
 *
 * Escape hatch: CLAUDE_HOOK_SKIP_NOTE_NAG=1
 */

const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function git(args, root) {
  try {
    return execFileSync('git', args, { cwd: root, encoding: 'utf-8', timeout: 10000 });
  } catch {
    return '';
  }
}

let input = '';
process.stdin.on('data', (d) => (input += d));
process.stdin.on('end', () => {
  if (process.env.CLAUDE_HOOK_SKIP_NOTE_NAG) process.exit(0);

  let data = {};
  try {
    data = JSON.parse(input);
  } catch {
    /* proceed with defaults */
  }
  // Never loop: if a Stop hook already continued this turn, let it stop.
  if (data.stop_hook_active) process.exit(0);

  const root = process.env.CLAUDE_PROJECT_DIR || process.cwd();
  const sessionId = data.session_id || 'nosession';
  const stateDir = path.join(root, '.claude', 'state');

  // -uall lists individual untracked files (a bare new folder shows as
  // "?? posts/folder/" otherwise and the per-file parsing below misses it)
  const status = git(['status', '--porcelain', '-uall', 'posts/'], root);

  const changed = new Map(); // folder -> { content: bool, notes: bool }
  const record = (file) => {
    const m = file.match(/^posts\/([^/]+)\/(.+)$/);
    if (!m) return;
    const [, folder, rest] = m;
    const entry = changed.get(folder) || { content: false, notes: false };
    if (rest === 'discussion.md') entry.notes = true;
    else if (/\.md$/.test(rest) && !/^(README|REVIEWS)/i.test(rest)) entry.content = true;
    changed.set(folder, entry);
  };
  for (const line of status.split('\n')) {
    if (line.trim()) record(line.slice(3).trim());
  }

  // A well-run session COMMITS its post work, leaving porcelain clean — the
  // v1 hole. Also count files committed since the session started (first
  // timestamp in the transcript; fall back to 6 hours).
  let since = '6 hours ago';
  const transcript = data.transcript_path || '';
  if (transcript && fs.existsSync(transcript)) {
    try {
      const head = fs.readFileSync(transcript, 'utf-8').split('\n', 5);
      for (const l of head) {
        try {
          const t = JSON.parse(l).timestamp;
          if (t) {
            since = t;
            break;
          }
        } catch {
          /* keep scanning */
        }
      }
    } catch {
      /* fall back to 6 hours */
    }
  }
  const committed = git(['log', `--since=${since}`, '--name-only', '--pretty=format:', '--', 'posts/'], root);
  for (const line of committed.split('\n')) {
    if (line.trim()) record(line.trim());
  }

  if (changed.size === 0) process.exit(0);

  const needNotes = [];
  for (const [folder, e] of changed) {
    if (!e.content || e.notes) continue;
    // discussion.md committed earlier this turn-batch also counts as noted
    const recentNote = git(['log', '--since=30 minutes ago', '--oneline', '--', `posts/${folder}/discussion.md`], root);
    if (recentNote.trim()) continue;
    // fire once per folder per session
    const marker = path.join(stateDir, `note-nag-${sessionId}-${folder}`);
    if (fs.existsSync(marker)) continue;
    try {
      fs.mkdirSync(stateDir, { recursive: true });
      fs.writeFileSync(marker, '');
    } catch {
      /* state failure shouldn't block stopping forever — skip */
      continue;
    }
    needNotes.push(folder);
  }

  if (needNotes.length === 0) process.exit(0);

  console.log(
    JSON.stringify({
      decision: 'block',
      reason: `Post content changed in ${needNotes.map((f) => `posts/${f}/`).join(', ')} but discussion.md was not updated. Before finishing: append a brief session/decision entry to each affected discussion.md (note-taking skill format) — especially USER DECISIONS made this session, including options rejected and the stated reasons. Then finish your turn. (This reminder fires once per post per session.)`,
    })
  );
  process.exit(0);
});
