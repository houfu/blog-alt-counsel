---
name: Getting Feedback
description: Coordinates audience feedback on a draft or idea from 1-3 specialized reviewer agents (legal-tech blog, in-house lawyer, lawyer-coder personas), with an enforced 2-round cap and length-audit-first ordering. Use when the user wants audience feedback on a draft, idea, or question. The /feedback command is a shortcut that runs all 3 reviewers; this skill chooses reviewers by content type.
---

# Getting Feedback

Get audience-perspective feedback from three reviewers:

1. **Legal tech blog reviewer (Marcus Tan)** — technical depth, open source, implementation details
2. **Inhouse lawyer reviewer (Sarah Chen)** — budget constraints, practical relevance, time investment
3. **Lawyer coder reviewer (Wei Lin)** — identity resonance, vulnerability, constraint acknowledgment

## Which reviewers for which content

Not every post needs all 3. Match reviewers to content type:

- **Open source project / post-mortem** → Legal Tech
- **Tool evaluation (budget focus)** → Sarah Chen
- **Learning in public / personal struggle** → Wei Lin
- **Tutorial / how-to** → Sarah + Legal Tech
- **Build vs. buy** → Wei Lin + Legal Tech
- **Policy/budget commentary** → Sarah + Legal Tech
- **Identity / "am I wasting my time"** → Wei Lin
- **Broad appeal across segments** → All 3

Running all 3 on every post produces diminishing returns after round 1.

## Review order (enforced)

Run review in this sequence — each step gates the next:

1. **Pitch checkpoint.** Compare the draft against pitch.md on thesis, scope, and emotional core. If they've diverged, stop and decide with the user which artifact is wrong: the draft wandered (revise it back), or the pitch itself was defective — in which case **amending the pitch is the correct move**. When amending, record in discussion.md why the pitch was wrong and which pitch-interrogation question (diagnosis test, differentiation, framing risk — see generate_a_pitch Step 3.6) would have caught it earlier. The goal is catching bad pitches sooner, not defending bad pitches longer.
2. **One content quality audit, maximum, before reviewers.** Apply critical fixes only (accuracy, accessibility, Ghost blockers); hold judgment calls (tone, structure) for the reviewers. Recent posts ran 3-4 audit polish cycles before any reviewer saw the draft — that's the round cap being bypassed under another name.
3. **Reviewer round(s)** per the routing table above.
4. **Length audit before applying additive fixes** (see below).
5. Final polish.

## Round cap (enforced)

**Maximum 2 reviewer rounds per draft** — and content-audit cycles count toward revision discipline, not a separate free budget. If the same core framing issue persists after round 2, switch to brainstorming with the user — reviewers diagnose, they don't fix framing problems.

Rationale: PR #32 ran 3 rounds; the third hit diminishing returns on the same framing issue. PR #30 had a similar pattern. When feedback repeats, escalate to the user, not another round.

## Length-audit-first ordering (enforced)

**This is the most-violated rule in the workflow** (followed in ~40% of recent posts — zeeker-three-databases, open-claw-intro, and 2026-predictions all applied additive fixes first, then had to cut). The order is: audit length → make room → apply fixes. Not: apply fixes → discover the post is over budget → cut.

**Before applying reviewer fixes, estimate the word delta.**

- If fixes are purely cuts or neutral → apply directly.
- If fixes would **add more than ~10% to the current length** → run a focused length audit *first* and identify what can be cut to make room. Apply the cuts, then apply the reviewer fixes.

Rationale: PR #30 and #32 both showed the add-then-cut pattern — reviewer fixes added ~270 words, a follow-up length audit then removed ~270 words. Cut first to avoid the churn.

Exception: for short newsletters (<800 words), additions under 100 words don't need a length audit.

## Information to pass to reviewers

- `pitch.md` — so they evaluate whether the draft delivers what the pitch promised (the pitch is the contract)
- `discussion.md` relevant sections — for context on decisions already made
- Their memory file path (`docs/personas/memory/<agent-name>.md`) with an instruction to read it first — it holds their standing asks, past unique catches, and settled disagreements
- Confirmation that the pre-review checklist ran (so they know standing asks were pre-empted)
- Any relevant research

## After each round: update reviewer memory

Each reviewer ends with a `MEMORY_UPDATE` block. After synthesizing the round, append each block (with date and round number) to that reviewer's log in `docs/personas/memory/<agent-name>.md`. When the user rejects a piece of advice with a reason, record it under "Settled disagreements" so no reviewer re-raises it on a future post. This is what gives reviewers memory across posts — skipping it returns them to amnesia.

## Example flow

```
User: Is this a good way to end the post about my open source legal tool?

Claude: Running Marcus Tan and Wei Lin (open source + identity fit).
Marcus: [feedback]
Wei Lin: [feedback]
Claude: Synthesising — consensus on X; Marcus alone caught Y; disagreement on Z.

User: What if we tried this?
Claude: Follow-up round (round 2 of 2).
```

## Synthesizing feedback: separate template from unique

Each persona has standing asks that appear in most of their reviews (Sarah: costs/time/security/Monday-morning action; Marcus: concrete examples/jargon/differentiation; Wei Lin: emotional beat/next step). When reporting feedback to the user, label each item **[standing ask]** or **[unique catch]**:

- Standing asks should have been pre-empted at draft time (see pre-review-checklist.md). Batch-apply the legitimate ones without debate; they never justify another round.
- Unique catches — feedback specific to this post's substance — are the actual value of the round and the only thing worth a round-2 discussion.

This labelling also keeps an honest record of whether each reviewer is earning their place.

## Reminders

- Always announce that you're using this skill.
- Feedback isn't validation. It's fine to disagree with reviewers when there's a good reason.
- Be direct with criticism, gentle with feelings — Houfu is trying to improve.
- For final-draft review, see [final_draft.md](final_draft.md).