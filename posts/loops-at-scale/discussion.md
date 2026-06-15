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
- ✅ Prompt-engineering ancestor post IS published (`/lawyers-prompt-engineering-wrong/`,
  live since 2025-10-18) — fully linkable. (Earlier I wrongly called it a draft:
  trusted stale local frontmatter + an incomplete published-list snapshot.
  Verified via direct Ghost query. Local frontmatter needs a sync-ghost fix.)
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

## Session 3: Research Round 2 — lawyers + loops, /loop mechanics, SG (2026-06-15)

### Context
User asked to (a) continue research and (b) push harder on how lawyers have
already worked with loops.

### What Claude Did
- 9 more searches; appended §8–§13 + updated jurisdictional flags to research.md.

### Key additions (load-bearing)
- **§8 TAR/CAL reframe (the big one):** lawyers have run human-in-the-loop AND
  iterative review since **2012** (Da Silva Moore; Continuous Active Learning =
  "no separation between training and review"). Reframe: loops aren't new to law —
  what's new is *owning* the loop instead of renting it inside a six-figure
  e-discovery platform. Strong narrative on-ramp.
- **§9 `/loop` precise mechanics:** Houfu's flow = fixed-interval `/loop 10m ...`
  (cron, 1-min min granularity); self-paced variant picks 1min–1hr itself. Lets the
  draft be precise, not vague.
- **§10 Singapore anchor secured:** Min. Edwin Tong (7 Apr 2026) — small firms lack
  *cost AND change-management capacity*; lawyers "kept busy by daily work... may not
  have capacity to dedicate additional hours." PSG-Legal (50%, cap S$45k), LIFT.
  → A loop that runs *while you work* answers the government's own stated constraint.
- **§11 jagged frontier (Mollick):** the *why you must test* — frontier is uneven,
  can't reason to the edge. Consistent with predecessor's usage.
- **§12 self-judge caveat:** self-preference bias is real but nuanced ("often
  reflects genuine quality in stronger models"); AND judge (Sonnet 4.6) ≠ worker
  (DeepSeek) here, so don't overclaim — one honest sentence.

### Outcomes
- ✅ research.md now has the lawyer-loops precedent + a real SG regional anchor.
- Files modified: `posts/loops-at-scale/research.md`, `discussion.md`

### Next Steps (superseded — see Session 4)
- Outline. Spine (TAR §8 CUT per user — category error, see research.md):
  (1) the new question: test the frontier → (2) why you can't reason to the edge
  (jagged frontier) → (3) three shapes (script/burst/paced loop) → (4) why pacing
  works (token bucket) → (5) SG small-firm turn. Then draft.

### Decision: Cut the TAR/CAL "lawyers already loop" angle (2026-06-15, Session 3)
**User flagged** it felt far-fetched. **Claude agreed on inspection:** TAR/CAL is a
*learning* loop (human feedback improves next prediction); our paced loop is a
*throughput/pacing* loop (spread fixed work across budget, no learning between
ticks). Same word, different mechanism — and it would add a confusing 3rd sense of
"loop" alongside the agent loop and `/loop`. **Outcome:** dropped; relevance carried
by the Singapore small-firm constraint + test-the-frontier framing instead.

## Session 4: Outline + First Draft (2026-06-15)

### Context
Approved the outline (with all 4 Section-3 expression devices), then drafted.

### What Claude Did
- Saved `outline.md`; built Section 3 around 4 devices: (A) shape-over-time chart,
  (B) comparison table, (C) real screenshot, (D) water/token-bucket metaphor
  threaded into §3→§4.
- Read full Voice Guide; drafted `loops-at-scale.md` (1,716 words, ~7 min).
- Generated `token-shape-burst-vs-loop.png` (matplotlib) — burst spike through a
  rate-limit ceiling vs. paced-loop ripples under it.
- Moved run screenshot into folder as `harvey-self-judge-burst.png`.

### User Decisions
- Do all 4 expression devices in Section 3.
- Drop TAR (Session 3 decision).
- Left screenshot at full resolution for now (rejected in-place sips resize).

### Outcomes
- ✅ Draft complete, 0 lint errors. Backlinks in: prompt-engineering post (bookmark)
  + harness post (bookmark). External links: Mollick, HAL (text), Claude Code docs,
  rate-limits, MinLaw.
- ⚠️ `harvey-self-judge-burst.png` is 769 KB (>500 KB) — compress before publishing
  (deferred; non-blocking).
- Files: `outline.md`, `loops-at-scale.md`, `token-shape-burst-vs-loop.png`,
  `harvey-self-judge-burst.png`

### Next Steps
- REVIEW phase: pitch checkpoint → 1 content-quality audit → target reviewers
  (Marcus + Wei Lin fit best; Sarah pre-empted via SG/budget turn) → length audit
  before additive fixes → backlinks/tags. Compress screenshot at publish.
