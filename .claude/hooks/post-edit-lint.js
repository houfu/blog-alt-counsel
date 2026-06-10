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
  if (findings.length === 0) process.exit(0);

  if (hasErrors) {
    console.error(`lint-posts found errors in posts/${m[1]} after this edit — fix before continuing:\n${findings.join('\n')}`);
    process.exit(2);
  }

  console.log(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: 'PostToolUse',
        additionalContext: `lint-posts warnings for posts/${m[1]} (non-blocking):\n${findings.join('\n')}`,
      },
    })
  );
  process.exit(0);
});
