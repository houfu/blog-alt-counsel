# Discussion Notes: Thinking in Loops: Finding the Frontier Without a Frontier Budget

## AUDIT TRAIL: Key Decision Points

### Decision: Framing — "two shapes for the same work" (framework-first) (2026-06-15, Session 1)

**Claude's Analysis:**
- Offered three framings: (A) narrative learning-in-public, (B) framework-first
  "two shapes for the same work", (C) contrarian "legibility is the unlock".

**Claude's Recommendation:**
- Presented equally; no single recommendation.

**User Decision:**
- Chose **B (framework-first)**, with emotional anchor: when tokens ran out, felt
  **determined to find a way** (not panic/defeat).

**Rationale:**
- Wants the post to answer a question many people have: "with all these new
  capabilities, how do I test what the new frontier of what models can do is?"
  Framework-first scales to that question better than pure narrative.

**Outcome:**
- ✅ Pitch written around orchestration shape as the controllable lever.

### Decision: Scope arc = scripts → fan-out → paced loop (2026-06-15, Session 1)

**User Decision:**
- Three ways of running the work, in order: scripts (the Harvey way; scale but
  opaque) → fan-out orchestra via `Workflow` (legible, debuggable, but bursty) →
  paced loop via `/loop` + evaluator (legible AND sustainable on a budget).
- The orchestration shapes apply to the **evaluation/judging** stage (agents as
  LLM judges), not the benchmark task execution.

**Outcome:**
- ✅ Clean answer to "test the frontier": run work at scale AND grade it at scale.

## WHAT CLAUDE DID (Contributions)

### Research / Planning
- Read predecessor post (`my-agent-did-the-legal-work-the-benchmark-gave-it-zero`,
  harness > model) and prompt-engineering posts to anchor the follow-up.
- Verified run numbers from user screenshot (see Data below).
- Drafted pitch; ran authenticity / differentiation / framing-risk checks.

## SESSIONS (Chronological Detail)

## Session 1: Brainstorm + Pitch (2026-06-15)

### Context
New post: follow-up to the harness/benchmark post and thematic sequel to the
prompt-engineering "think in new ways" piece. "Loops" = one of the new ways.

### What Claude Did
- Brainstormed the angle; surfaced the three-shape arc and the "test the frontier"
  question as the spine.
- Verified data against user's run screenshot.
- Wrote `pitch.md`; created branch `blog/loops-at-scale` and post folder.

### User Decisions
- Title: **Thinking in Loops: Finding the Frontier Without a Frontier Budget**
- Framing B (framework-first); emotional anchor = determination at the token wall.
- Tags: **AI, LegalTech** only (intent: not Agents/OpenSource/Article).
- Timeline: **this week** — keep scope tight (~9-min blog).

### Data (verified from screenshot, dated 2026-06-07)
- Workflow `harvey-self-judge-all-runs`: 1,252 benchmark runs scored.
- Claude split the work into **626 judge agents** (~2 runs each), Sonnet 4.6
  `self_judge`, ~12 concurrent, phases Judge → Verify.
- Paced loop: poll unevaluated runs every 10 min, 3–8 agents/tick, summary each round.

### Outcomes
- ✅ Pitch locked; data fully verified (no UNVERIFIED claims).
- ⚠️ Prompt-engineering ancestor post is still a DRAFT — can only reference its
  idea, not backlink, unless published before this ships.
- Files created: `posts/loops-at-scale/pitch.md`, `discussion.md`

### Next Steps
- Outline → draft (read Voice Guide + 1-2 recent published posts first).
- Pre-empt reviewer asks (cost/time reality, jargon definitions, concrete next step).

## Session 2: Exploratory Research (2026-06-15)

### Context
User asked for exploratory research before outlining. Ran blog-research skill.

### What Claude Did
- Ran 8 web searches (orchestration patterns, Claude Code workflows, LLM-as-judge,
  rate limits/economics, capability elicitation, HAL, legal-team eval).
- Read 4 sources in full (Claude Code workflows doc, METR, rate-limits doc, partial
  fan-out article); saved findings to `research.md`.

### Key connections found (load-bearing for the draft)
- **METR "capability elicitation"** is the formal answer to "test the frontier";
  its **spurious vs. real bottleneck** taxonomy = the predecessor post's harness
  lesson (a broken-`.docx` zero is spurious, not the law being wrong).
- **Princeton HAL** is itself a fan-out harness ("parallel evaluations across
  hundreds of agents") and finds harness/scaffold swings of **30–50 points** —
  confirms harness > model at research scale; natural backlink to predecessor.
- **Token-bucket rate limiter** = the *mechanical why* pacing beats bursting:
  capacity replenishes continuously; "short bursts...trigger rate limit errors."
- Claude Code workflows doc: 16 concurrent / 1,000-agent caps (his run rode the
  ~12 concurrent ceiling); "moves the plan into code" supports the legibility theme;
  built-in cost caution ("run on a small slice first").

### Outcomes
- ✅ research.md written; thesis well-supported, vocabulary secured.
- ⚠️ Legal-AI-eval sources are US/enterprise-centric ("no shared standard yet") —
  flagged as the alt-counsel opening; no SG/ASEAN source on eval-at-scale.
- Files created: `posts/loops-at-scale/research.md`

### Next Steps (resume here)
- Develop the OUTLINE. Read Voice Guide + 1-2 recent published posts first.
- Draft should cite ~4-5 strongest sources only (workflows doc, METR, HAL,
  token-bucket), not all — watch length.
