#!/usr/bin/env node

/**
 * PreToolUse hook (Bash + ghst MCP post tools): gate publishing on a clean lint.
 *
 * Bash path: when the command invokes scripts/publish-lexical.js, run
 * lint-posts on the target post folder first. Lint ERRORS (e.g. horizontal
 * rules, which break markdown-to-lexical conversion) deny the publish with
 * the findings so they get fixed before the post hits Ghost. Warnings do not
 * block.
 *
 * MCP path: mcp__ghost__ghost_post_create / ghost_post_update calls that
 * carry a post BODY (html/lexical/markdown/mobiledoc) bypass every check the
 * canonical script performs (lint gate, bookmark conversion, image upload,
 * post_id write-back) — deny those with a pointer to publish-lexical.js.
 * Metadata-only operations (title, tags, status, schedule) pass through.
 */

const { execFileSync } = require('child_process');
const path = require('path');

const BODY_FIELDS = ['html', 'lexical', 'markdown', 'mobiledoc'];

function deny(reason) {
  console.log(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: 'PreToolUse',
        permissionDecision: 'deny',
        permissionDecisionReason: reason,
      },
    })
  );
  process.exit(0);
}

function hasBodyField(obj, depth = 0) {
  if (!obj || typeof obj !== 'object' || depth > 3) return false;
  for (const [k, v] of Object.entries(obj)) {
    if (BODY_FIELDS.includes(k) && typeof v === 'string' && v.trim() !== '') return true;
    if (typeof v === 'object' && hasBodyField(v, depth + 1)) return true;
  }
  return false;
}

let input = '';
process.stdin.on('data', (d) => (input += d));
process.stdin.on('end', () => {
  let data;
  try {
    data = JSON.parse(input);
  } catch {
    process.exit(0);
  }

  const toolName = data.tool_name || '';
  if (/^mcp__ghost__ghost_post_(create|update)$/.test(toolName)) {
    if (hasBodyField(data.tool_input)) {
      deny(
        `Post-body ${toolName.endsWith('create') ? 'creation' : 'update'} via ghst MCP bypasses the publish gate (lint, bookmark-card conversion, local image upload, post_id write-back). Use the canonical path instead:\n  node scripts/publish-lexical.js posts/<folder>/<file>.md [draft|published]\nMetadata-only changes (title, tags, status, excerpt, schedule) are fine via MCP — retry without the body field.`
      );
    }
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
