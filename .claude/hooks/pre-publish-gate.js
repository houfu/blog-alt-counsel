#!/usr/bin/env node

/**
 * PreToolUse hook (Bash): gate publishing on a clean lint.
 *
 * When the command invokes scripts/publish-lexical.js, run lint-posts on the
 * target post folder first. Lint ERRORS (e.g. horizontal rules, which break
 * markdown-to-lexical conversion) deny the publish with the findings so they
 * get fixed before the post hits Ghost. Warnings do not block.
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

  const cmd = (data.tool_input && data.tool_input.command) || '';
  if (!cmd.includes('publish-lexical.js')) process.exit(0);

  const root = process.env.CLAUDE_PROJECT_DIR || process.cwd();
  const m = cmd.match(/posts\/([^/\s'"]+)\//);
  const args = [path.join(root, 'scripts/lint-posts.js')];
  if (m) args.push(m[1]);

  try {
    execFileSync('node', args, { encoding: 'utf-8', timeout: 30000 });
  } catch (e) {
    if (!e.stdout && !e.stderr) process.exit(0); // lint itself broke; don't block publishing
    const errors = ((e.stdout || '') + (e.stderr || ''))
      .split('\n')
      .filter((l) => /ERROR/.test(l))
      .join('\n');
    console.log(
      JSON.stringify({
        hookSpecificOutput: {
          hookEventName: 'PreToolUse',
          permissionDecision: 'deny',
          permissionDecisionReason: `Publish blocked — lint-posts found errors${m ? ` in posts/${m[1]}` : ''} (these break lexical conversion):\n${errors}\nFix them, re-run lint, then retry the publish.`,
        },
      })
    );
    process.exit(0);
  }
  process.exit(0);
});
