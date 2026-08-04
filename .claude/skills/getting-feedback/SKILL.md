---
name: Getting Feedback
description: Coordinates audience feedback on a draft or idea from 1-3 specialized reviewer agents (legal-tech blog, in-house lawyer, lawyer-coder personas), with an enforced 2-round cap and length-audit-first ordering. Use when the user wants audience feedback on a draft, idea, or question. The /feedback command routes by the pitch's declared primary_audience; this skill holds the synthesis rules.
---

# Getting Feedback

Get audience-perspective feedback from up to three reviewers:

1. **Legal tech blog reviewer (Marcus Tan)** — legal technologists and lawyers who ship
2. **Inhouse lawyer reviewer (Sarah Chen)** — solo counsels with real budgets and no IT
3. **Lawyer coder reviewer (Wei Lin)** — lawyer-coders building on nights and weekends

**Reviewers are constituencies, not auditors.** Each reviewer is one of the blog's three target audiences, and their review answers: *did this post serve me?* Their reader-response verdict is the product; their suggestions are a bonus. They are instructed to report EVERYTHING unfiltered — the filtering happens here, at synthesis, not in their heads.

## Which reviewers

**Routing is decided at pitch time, not review time.** pitch.md frontmatter declares `primary_audience` (and optional secondary). Run the declared audience(s) — normally 1-2 reviewers. Run all 3 only when the user asks, or the pitch declares all three (genuine broad appeal).

**Portfolio balance:** Houfu's aim is that no constituency is neglected for too long. When a secondary audience hasn't been served in a while, say so — it can justify adding their reviewer to the round, or tip the next post's topic.

If the pitch predates the `primary_audience` field, fall back to the CLAUDE.md routing table by content type and say which you picked and why, in one sentence.

## Review order (enforced)

1. **Pitch checkpoint.** Compare the draft against pitch.md on thesis, scope, and emotional core — and against the `## Original framing` block for subject drift. If they've diverged, stop and decide with the user which artifact is wrong: the draft wandered (revise it back), or the pitch was defective — in which case **amending the pitch is the correct move** (record in discussion.md which interrogation question would have caught it). Record the checkpoint with `node scripts/workflow-state.js checkpoint <folder> "<verdict>"` — the workflow gate blocks reviewer spawns until the current draft has one. The thesis-presence lint output is the evidence to bring to this comparison.
2. **Lint, then one content audit, maximum, before reviewers.** `npm run lint-posts <folder>` first (it now covers word budget, thesis presence, mechanical prose defects). Then the two audit agents — audit-substance and audit-tone, launched in one message. Apply critical fixes only; hold judgment calls for the reviewers.
3. **Reviewer round(s)** per the routing above. Pass each reviewer: pitch.md (the scope oracle), relevant discussion.md sections, their memory file path with an instruction to read it first, and any relevant research.
4. **Synthesis** (below) — this is where filtering happens.
5. Final polish.

## Synthesis: this is where filtering happens

Reviewers report everything. You do the filtering, in this order:

1. **Verdicts first.** Report each reviewer's serves-me verdict and reader-response paragraph before any suggestion. A post that fails its primary audience's verdict has a framing problem, not a fixes problem — that goes to Houfu, not into edits.
2. **Conflicts are presented, never averaged.** When constituencies want opposite things, that is a "who is this post for" decision — Houfu's call, and often his "neither is wrong" material. Splitting the difference serves nobody.
3. **Scope gate.** Group findings by the reviewer's SCOPE field. IN-scope findings are the round's work, weighting the primary audience's wants over secondary ones. OUT-of-scope findings go to Houfu in a single collapsed list headed "Beyond the pitch — follow-up post material?" — do not silently discard them; OUT findings are how pitch defects and next posts get discovered. If an OUT want is genuinely better than what the pitch promised, that is a **pitch amendment** (step 1), not a draft edit.
4. **Length gate.** Sum the reviewers' TOTAL DELTA lines. If the net is positive by more than ~10% of current length (or the draft is already at its word_budget cap), apply the CUT findings first, then the additions. You have the cuts — every reviewer was required to supply them. This is the length-audit-first rule with the cuts pre-collected.
5. **Template gate.** STANDING findings are batch-applied without discussion and never justify a round 2. WISH/CUT/KEEP findings specific to this post are the round's value.
6. **Delivery gate.** Now soften — once, here. Be direct about the substance and kind about the person. The reviewers were told not to filter so that nothing was lost upstream; the filter is in how you say it, never in what was found.

## Round cap (enforced mechanically)

**Maximum 2 reviewer rounds per draft, 1 audit round** — counted by the workflow gate keyed to the draft's content hash, so audit-polish cycles count as rounds and parallel fan-out counts once. If the same core framing issue persists after round 2, switch to brainstorming with the user — reviewers diagnose, they don't fix framing problems. If Houfu explicitly asks for another round, record it: `node scripts/workflow-state.js override <gate> "<his reason>"`.

## After each round: update reviewer memory

Each reviewer ends with a `MEMORY_UPDATE` block. Append each block (with date and round number) to that reviewer's log in `docs/personas/memory/<agent-name>.md`. When the user rejects advice with a reason, record it under "Settled disagreements" so no reviewer re-raises it.

**Compact while appending:** keep the last 3 posts' log entries verbatim; for anything older, promote genuinely reusable catches into "Past unique catches" or "Settled disagreements" and delete the log entry. The top matter is what the reviewer acts on; the log is only raw material for it.

## Example flow

```
User: Is this a good way to end the post about my open source legal tool?

Claude: pitch.md declares primary_audience: marcus, secondary wei-lin — running both.
Marcus: [reader response + verdict + findings]
Wei Lin: [reader response + verdict + findings]
Claude: Verdicts — Marcus: serves me; Wei Lin: partly (the close asserts what it hasn't earned).
        In-scope: [...]. Beyond the pitch (follow-up material?): [...]. Net delta +40 words, within budget.
```

## Reminders

- Always announce that you're using this skill.
- Feedback isn't validation. It's fine to disagree with reviewers when there's a good reason — record the disagreement in their memory file.
- For final-draft review, see [final_draft.md](final_draft.md).
