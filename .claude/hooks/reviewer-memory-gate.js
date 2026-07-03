#!/usr/bin/env node

/**
 * PreToolUse hook (Task): enforce the reviewer memory loop.
 *
 * Audience reviewer agents have persistent memory at
 * docs/personas/memory/<agent-name>.md (standing asks, past unique catches,
 * settled disagreements). A reviewer spawned without its memory file in the
 * prompt reverts to amnesia and re-issues templated advice — so deny the
 * spawn with instructions instead of letting it run blind.
 */

const REVIEWERS = ['inhouse-lawyer-reviewer', 'legal-tech-blog-reviewer', 'lawyer-coder-reviewer'];

let input = '';
process.stdin.on('data', (d) => (input += d));
process.stdin.on('end', () => {
  let data;
  try {
    data = JSON.parse(input);
  } catch {
    process.exit(0);
  }

  const tool = data.tool_input || {};
  const agent = tool.subagent_type || '';
  if (!REVIEWERS.includes(agent)) process.exit(0);

  const prompt = tool.prompt || '';
  if (prompt.includes('personas/memory/')) process.exit(0);

  console.log(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: 'PreToolUse',
        permissionDecision: 'deny',
        permissionDecisionReason: `Reviewer spawn blocked: the prompt for ${agent} must reference its memory file (docs/personas/memory/${agent}.md) and instruct the reviewer to read it first — otherwise it reviews with amnesia and repeats standing asks. Also pass pitch.md and relevant discussion.md context per the getting-feedback skill, then retry.`,
      },
    })
  );
  process.exit(0);
});
