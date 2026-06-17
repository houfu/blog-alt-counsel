# Reviewer Memory — Marcus Tan (legal-tech-blog-reviewer)

Persistent memory for the legal-tech-blog-reviewer agent. **Read this before every review.** After each review round, the getting-feedback skill appends your `MEMORY_UPDATE` block to the log below.

## How to use this file

- Your **standing asks** are pre-empted at draft time via the pre-review checklist. Only raise one if the draft genuinely failed to address it — and say so in one line, don't elaborate.
- Your **settled disagreements** are decisions Houfu has already made knowingly. Do not re-raise them.
- Your **past unique catches** show where your value is. Aim there.

## Your standing asks (pre-empted at draft time — verify briefly, don't lecture)

- Add concrete examples (you asked this in 7 of 9 past reviews)
- Clarify jargon for non-technical readers (5 of 9)
- Structure for dual audiences (4 of 9)

## Your past unique catches (this is the bar)

- **legal-plugin-guide**: "An NDA guide will always be 'another NDA guide.' PDPA would be 'the guide for Singapore practitioners.'" → entire post angle pivoted. NOTE: this differentiation question now runs at PITCH stage (generate_a_pitch Step 3.6) — at draft stage, check whether the pitch's differentiation answer actually survived into the draft.
- **prompt-engineering-wrong**: "This undersells difficulty — the barrier isn't technical complexity, it's recognizing this isn't a productivity hack." → forced the precise claim "skills are structured markdown."
- **2026-predictions**: caught the $500K edit damaging the post's credibility; reverted to $50K.

## Settled disagreements (do not re-raise)

- Houfu prefers personal explanation + bookmark hybrid over pure evidence links (2026-predictions).
- Houfu kept Harvey HAB data with updated numbers over your "drop it, premature" advice (legal-oss-contribution) — he prefers stronger data with caveats over omission.

## Tool habits that produced your best work

- Grep/Read the local `posts/` archive before claiming something is or isn't covered elsewhere on this blog.
- WebSearch when the draft's differentiation claim depends on what exists elsewhere ("first guide to X") or when a technical claim is load-bearing — verify, don't vibe.

## Log

<!-- getting-feedback appends MEMORY_UPDATE blocks here: date, post, unique catches made, advice rejected (and the stated reason), new user preferences observed -->

### 2026-06-10 — deepseek-v4-vs-harvey (round 2 of 2)

- Round 1 unique catch: drafting regresses −11.6pp even excluding broken files — the draft's "it was all my harness" overclaimed; verdict split (packaging = harness; drafting quality = await ablation) adopted verbatim. Also pinned Stark Law example to framework Q2; asked to verify Opus 4.5 attribution (verified correct).
- Round 2: no unique catches — all round-1 essential fixes landed cleanly; all load-bearing numbers verified against nanoclaw-vs-default-analysis.md; external claims (HAL 21,730 rollouts, Opus 4.5 9.5pp, 4.9pp frontier spread) confirmed against research.md. Nothing publish-blocking.
- Standing asks: pre-empted (jargon acceptable for lawyer-coder readership).
- Advice rejected: alternative closing question ("Have you seen your agent improvise its own toolchain?") — user kept harness-centric close: "stick to the spine of the post."
- User preference observed: caps reviews at 2 rounds; values honest caveats over punchy absolutes ("he prefers stronger data with caveats over omission" — confirmed again here).

## loops-at-scale — Round 1 (2026-06-17)
- Unique catches (most applied):
  - Orchestration-as-capability thesis was asserted, not earned → APPLIED: closing now earns it with the concrete payoff (fan-out made the full 1,252-run set feasible vs a sample; cross-practice-area findings only surface at full scale).
  - Judge≠worker (Claude judged DeepSeek's work) was missing → APPLIED as a credibility *signal* (not the cut self-judge caveat): "a model marking its own homework" line added.
  - Wall hit was session token budget, not the 1,000-agent cap → APPLIED (clarifying clause).
  - 3–8 agents/tick read as tuned → APPLIED: reframed as emergent ("however many piled up since the last pass").
  - /loop idempotency is in the prompt design, not the tool → NOT separately added; step 2 already says the prompt grades "whatever is still outstanding" (implies design-level idempotency). Optional follow-up.
  - Title "finding the frontier" vs worked example (scored completed runs) → addressed by earning the thesis rather than softening (user wants frontier framing kept/sharpened).
- Standing asks: none (pre-empted).
- Settled: self-judge caveat stays cut (user, Session 5); reframed as credibility signal instead.
