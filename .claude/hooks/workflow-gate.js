#!/usr/bin/env node

/**
 * PreToolUse hook (Task): the workflow gate. Replaces reviewer-memory-gate.js.
 *
 * Enforces, mechanically, the rules that held at 40-60% as prose:
 *   1. Round caps — max 2 reviewer rounds and 1 audit round per draft,
 *      counted BY THE HOOK on spawn, keyed to the draft body's content hash
 *      (posts/<folder>/.workflow.json). Parallel fan-out shares one hash and
 *      counts once; audit-polish cycles get distinct hashes and hit the cap.
 *      Override: node scripts/workflow-state.js override <folder> <gate> "<reason>".
 *   2. Pitch checkpoint precondition — reviewer spawns are denied until the
 *      CURRENT draft+pitch have a recorded checkpoint (REVIEW step 1). The
 *      checkpoint self-invalidates when either file changes.
 *   3. Reviewer memory — a reviewer spawned without its specific memory file
 *      in the prompt reviews with amnesia; denied with instructions.
 *   4. Persona-fallback detection — a general-purpose spawn with a
 *      docs/personas/ brief is the degraded mode that silently bypassed the
 *      old gate (2026-07-30). Denied once with instructions; proceed by
 *      adding ACKNOWLEDGED-FALLBACK to the prompt, which puts the spawn
 *      under the same memory + round rules.
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const REVIEWERS = ['inhouse-lawyer-reviewer', 'legal-tech-blog-reviewer', 'lawyer-coder-reviewer'];
const AUDITORS = ['audit-substance', 'audit-tone', 'content-quality-auditor', 'audit-flow', 'audit-structure', 'audit-readability', 'audit-accessibility'];
const GENERIC = ['general-purpose', 'claude', 'Explore', 'Plan'];
const PERSONA_HINT = /docs\/personas\//;

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

function sha1(buf) {
  return crypto.createHash('sha1').update(buf).digest('hex').slice(0, 12);
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

  const tool = data.tool_input || {};
  const agent = tool.subagent_type || '';
  const prompt = tool.prompt || '';

  const isFallback = GENERIC.includes(agent) && PERSONA_HINT.test(prompt);
  const isReviewer = REVIEWERS.includes(agent) || isFallback;
  const isAuditor = AUDITORS.includes(agent);
  if (!isReviewer && !isAuditor) process.exit(0);

  // 4. Persona fallback must be explicit, never silent
  if (isFallback && !prompt.includes('ACKNOWLEDGED-FALLBACK')) {
    deny(
      `This looks like a persona fallback: "${agent}" spawned with a docs/personas/ brief. If the reviewer agent types (${REVIEWERS.join(', ')}) failed to resolve, tell Houfu and check /agents — a non-resolving reviewer registry is itself a bug worth reporting, and silent fallback is how a review round degrades without anyone noticing (it happened 2026-07-30). If the fallback is deliberate, add the literal token ACKNOWLEDGED-FALLBACK to the prompt, pass the persona's memory file, and retry — the spawn then runs under the same memory and round-cap rules.`
    );
  }

  const root = process.env.CLAUDE_PROJECT_DIR || process.cwd();
  const m = prompt.match(/posts\/([A-Za-z0-9._-]+)\//);
  const folder = m && m[1];
  // No post folder in the prompt (idea-stage feedback, no draft yet): only the
  // memory rule applies to reviewers; rounds are counted per draft.
  let mainPath = null;
  if (folder) {
    try {
      const { findMainFile } = require(path.join(root, 'scripts/lib/postfile'));
      const folderPath = path.join(root, 'posts', folder);
      const main = findMainFile(folderPath, folder);
      if (main) mainPath = path.join(folderPath, main);
    } catch {
      /* postfile lib unavailable — skip round counting rather than block */
    }
  }

  // 3. Reviewer memory file must be passed (specific file, not the bare path)
  if (isReviewer) {
    const memoryFile = isFallback
      ? /personas\/memory\/(inhouse-lawyer|legal-tech-blog|lawyer-coder)-reviewer\.md/.test(prompt)
      : prompt.includes(`personas/memory/${agent}.md`);
    if (!memoryFile) {
      deny(
        `Reviewer spawn blocked: the prompt must reference the reviewer's own memory file (docs/personas/memory/${isFallback ? '<agent-name>' : agent}.md) and instruct the reviewer to read it first — otherwise it reviews with amnesia and repeats standing asks. Also pass pitch.md (the scope oracle) and relevant discussion.md context per the getting-feedback skill, then retry.`
      );
    }
  }

  if (!folder || !mainPath || !fs.existsSync(mainPath)) process.exit(0);

  const draftSha = sha1(fs.readFileSync(mainPath));
  const pitchFile = path.join(root, 'posts', folder, 'pitch.md');
  const pitchSha = fs.existsSync(pitchFile) ? sha1(fs.readFileSync(pitchFile)) : null;
  const stateFile = path.join(root, 'posts', folder, '.workflow.json');
  let state;
  try {
    state = JSON.parse(fs.readFileSync(stateFile, 'utf-8'));
  } catch {
    state = { version: 1, pitch_checkpoint: null, audit_rounds: [], review_rounds: [], length_audit: null, overrides: [] };
  }

  // 2. Pitch checkpoint precondition (reviewers only)
  if (isReviewer) {
    const cp = state.pitch_checkpoint;
    if (!cp || cp.draft_sha !== draftSha || (pitchSha && cp.pitch_sha !== pitchSha)) {
      deny(
        `Reviewer spawn blocked — no pitch checkpoint recorded for the CURRENT draft of posts/${folder}. REVIEW step 1 runs before any review: compare the draft against pitch.md (thesis, scope, emotional core, and the "## Original framing" block for subject drift), decide with Houfu whether the draft wandered or the pitch was wrong, then record it:\n  node scripts/workflow-state.js checkpoint ${folder} "<one-line verdict>"\nThe thesis-presence output of lint-posts is the evidence to bring to that comparison. The checkpoint self-invalidates when the draft or pitch changes.`
      );
    }
  }

  // 1. Round caps keyed to draft sha
  const kind = isReviewer ? 'review_rounds' : 'audit_rounds';
  const cap = isReviewer ? 2 : 1;
  const gateName = isReviewer ? 'reviewer-round-cap' : 'audit-round-cap';
  const rounds = state[kind] || [];
  const last = rounds[rounds.length - 1];
  const sameRound = last && last.draft_sha === draftSha;
  const n = sameRound ? last.n : (last ? last.n + 1 : 1);

  if (n > cap) {
    const overridden = (state.overrides || []).some((o) => o.gate === gateName && (!last || o.at > last.at));
    if (!overridden) {
      deny(
        `Round ${n} blocked — the cap is ${cap} ${isReviewer ? 'reviewer' : 'audit'} round(s) per draft, and rounds are counted by draft content hash in posts/${folder}/.workflow.json (last round ${last ? `${last.n} at ${last.at}` : 'n/a'}). Repeated feedback on the same framing issue means the pitch is wrong, not the draft — switch to brainstorming with Houfu instead of another round. If Houfu has explicitly asked for another round, record his reason first:\n  node scripts/workflow-state.js override ${folder} ${gateName} "<his reason>"\nthen retry.`
      );
    }
  }

  // Allowed: record the round (words at round time feeds the length-audit-first
  // advisory in post-edit-lint.js)
  let words = null;
  try {
    const { proseWords } = require(path.join(root, 'scripts/lib/wordcount'));
    const matter = require(path.join(root, 'node_modules/gray-matter'));
    words = proseWords(matter(fs.readFileSync(mainPath, 'utf-8')).content);
  } catch {
    /* optional */
  }
  if (sameRound) {
    last.at = new Date().toISOString();
    if (!last.agents.includes(agent)) last.agents.push(agent);
    if (isFallback && !last.fallback) last.fallback = true;
  } else {
    rounds.push({
      n,
      at: new Date().toISOString(),
      draft_sha: draftSha,
      ...(words != null ? { words } : {}),
      agents: [agent],
      ...(isFallback ? { fallback: true } : {}),
    });
  }
  state[kind] = rounds;
  try {
    fs.writeFileSync(stateFile, JSON.stringify(state, null, 2) + '\n');
  } catch {
    /* state write failure should not block the spawn */
  }
  process.exit(0);
});
