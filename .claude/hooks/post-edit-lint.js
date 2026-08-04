#!/usr/bin/env node

/**
 * PostToolUse hook (Edit|Write): lint a post folder right after its main
 * post file is edited, so defects (horizontal rules, heading skips, empty
 * alt text) surface at write time instead of publish time.
 *
 * - lint ERRORS  -> exit 2 (stderr is fed back to Claude to fix now)
 * - lint warnings -> additionalContext JSON (non-blocking, visible to Claude)
 * - anything else (working docs, non-post files, parse issues) -> silent exit 0
 */

const { execFileSync } = require('child_process');
const path = require('path');

let input = '';
process.stdin.on('data', (d) => (input += d));
process.stdin.on('end', () => {
  let data;
  try {
    data = JSON.parse(input);
  } catch {
    process.exit(0);
  }

  const filePath = (data.tool_input && data.tool_input.file_path) || '';
  if (!filePath) process.exit(0);

  const root = process.env.CLAUDE_PROJECT_DIR || process.cwd();
  const rel = path.relative(root, filePath);
  const m = rel.match(/^posts\/([^/]+)\/[^/]+\.md$/);
  if (!m) process.exit(0);

  // Working documents may legitimately contain horizontal rules etc.
  const base = path.basename(rel);
  if (/^(discussion|pitch|research|outline|notes|README|REVIEWS)/i.test(base)) process.exit(0);

  let out = '';
  let hasErrors = false;
  try {
    out = execFileSync('node', [path.join(root, 'scripts/lint-posts.js'), m[1]], {
      encoding: 'utf-8',
      timeout: 30000,
    });
  } catch (e) {
    if (!e.stdout && !e.stderr) process.exit(0); // lint itself broke; don't block editing
    hasErrors = true;
    out = (e.stdout || '') + (e.stderr || '');
  }

  const findings = out.split('\n').filter((l) => /ERROR|warn/.test(l));

  if (hasErrors) {
    console.error(`lint-posts found errors in posts/${m[1]} after this edit — fix before continuing:\n${findings.join('\n')}`);
    process.exit(2);
  }

  // Length-audit-first advisory (the most-violated prose rule, ~40% adherence):
  // when the draft has grown >10% past the last reviewer round with no length
  // audit recorded since, surface it while the additions are being made — not
  // after. Advisory only; the word-budget lint error is the hard stop.
  let ordering = '';
  try {
    const fs = require('fs');
    const { proseWords } = require(path.join(root, 'scripts/lib/wordcount'));
    const matter = require(path.join(root, 'node_modules/gray-matter'));
    const state = JSON.parse(fs.readFileSync(path.join(root, 'posts', m[1], '.workflow.json'), 'utf-8'));
    const rounds = state.review_rounds || [];
    const last = rounds[rounds.length - 1];
    if (last && last.words) {
      const words = proseWords(matter(fs.readFileSync(filePath, 'utf-8')).content);
      const auditStale = !state.length_audit || state.length_audit.at < last.at;
      if (last.draft_sha && words > last.words * 1.1 && auditStale) {
        ordering =
          `\nlength-audit-first: the draft has grown ${words - last.words} words (+${Math.round(((words - last.words) / last.words) * 100)}%) since reviewer round ${last.n} with no length audit recorded — this is the add-then-cut pattern. Apply the reviewers' CUT findings first, then the additions, and record: node scripts/workflow-state.js length-audit ${m[1]}`;
      }
    }
  } catch {
    /* no workflow state — nothing to advise */
  }

  if (findings.length === 0 && !ordering) process.exit(0);

  console.log(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: 'PostToolUse',
        additionalContext: `lint-posts warnings for posts/${m[1]} (non-blocking):\n${findings.join('\n')}${ordering}`,
      },
    })
  );
  process.exit(0);
});
