---
name: Getting Feedback
description: The user needs feedback on an idea or a question from his audience to improve the writing and create valuable content.
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

## Round cap (enforced)

**Maximum 2 audit rounds per draft.** If the same core framing issue persists after round 2, switch to brainstorming with the user — reviewers diagnose, they don't fix framing problems.

Rationale: PR #32 ran 3 rounds; the third hit diminishing returns on the same framing issue. PR #30 had a similar pattern. When feedback repeats, escalate to the user, not another round.

## Length-audit-first ordering (enforced)

**Before applying reviewer fixes, estimate the word delta.**

- If fixes are purely cuts or neutral → apply directly.
- If fixes would **add more than ~10% to the current length** → run a focused length audit *first* and identify what can be cut to make room. Apply the cuts, then apply the reviewer fixes.

Rationale: PR #30 and #32 both showed the add-then-cut pattern — reviewer fixes added ~270 words, a follow-up length audit then removed ~270 words. Cut first to avoid the churn.

Exception: for short newsletters (<800 words), additions under 100 words don't need a length audit.

## Information to pass to reviewers

- `pitch.md` — so they evaluate whether the draft delivers what the pitch promised (the pitch is the contract)
- `discussion.md` relevant sections — for context on decisions already made
- Any relevant research

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

## Reminders

- Always announce that you're using this skill.
- Feedback isn't validation. It's fine to disagree with reviewers when there's a good reason.
- Be direct with criticism, gentle with feelings — Houfu is trying to improve.
- For final-draft review, see [final_draft.md](final_draft.md).