# Discussion: deepseek-v4-vs-harvey

Working notes for "My agent worked around the tools I gave it."

## Session 1 — 10 June 2026: Brainstorm, research, pitch approved

**What happened:**
- Created branch `blog/deepseek-v4-vs-harvey`; copied source material into post folder: `investigation-summary.md`, `nanoclaw-vs-default-analysis.md`, `nanoclaw-vs-default-report.html` (from ~/Documents/results-nanoclaw).
- **The underlying experiment:** houfu ran DeepSeek-v4-flash (via Ollama) through Harvey's Legal Agent Benchmark (LAB, ~1,250 tasks) twice — stock harness (1,251 tasks) vs custom nanoclaw stack with adeu + docling (1,006 tasks, subset). Nanoclaw lost: 74.8% vs 84.7% criterion pass rate, 56 vs 9 zero-score tasks, 2.6× slower. Forensics attributed the gap to four harness engineering defects (completion signal with 0% model compliance, premature-exit stability gate, non-escaping OOXML writer, unfinished two-stage authoring workflow) — not the model, not docling.

**Brainstormed angles (user chose structure):**
- **C opening:** agent did the legal work correctly (58KB complete memo) and scored zero on packaging.
- **A spine:** the benchmark measures the environment as much as the model.
- **B teaser:** public benchmarks as free QA for your own agent stack.

**User's vulnerability (his words, paraphrased):** he totally believed lawyer-made tools like adeu would have an advantage over stock tools; clear now there's a lot of work to do; even on redline tasks the agent couldn't do well with adeu; the agent working around his MCP made him "a bit sad."

**Key correction from user:** adeu is written by *another* open-source coder-lawyer, not houfu. Be fair to the maintainer — he plans to file an upstream bug report after nailing down attribution. Saved to Claude memory (`project_adeu_attribution.md`). This became a strength of the pitch: "attribute before blaming" mirrors the post's main lesson at a second level.

**Research (saved in research.md):**
- User asked: has anyone built a framework to measure *agent* (vs model) performance? Answer: yes, active field — HAL (Princeton, Oct 2025, models × scaffolds × benchmarks, up to ~48pp same-model swings); "Stop Comparing LLM Agents Without Disclosing the Harness" (arXiv, May 2026, Binding Constraint Thesis — harness variance ~2× model variance among frontier models); Harness-Bench (May 2026); METR scaffolding precedent.
- Houfu's −9.5pp result is an independent legal-domain replication of the Binding Constraint Thesis on a three-week-old benchmark.
- **Full-circle find:** Bob Ambrogi's LawNext commentary on LAB (19 May 2026) quotes houfu's legal OSS post ("federation of solo-author archipelagos," "Open Source theatre") when questioning whether outside contributors will shape LAB.
- Reframe agreed: LAB doesn't "favour frontier models" per se — it rewards polished *harnesses*, which frontier labs have and solo builders don't. Harvey launched LAB without a leaderboard because submission normalization is unsolved.

**Decisions:**
- Pitch approved (~195 words) and saved in pitch.md. Lane 2 "Learning in Public" template.
- Honesty note: houfu found the harness-vs-model literature *after* the investigation — draft must frame it as "when I went looking, I found…", not as something he knew during the work.
- Tags deferred — ask intent before suggesting (per feedback memory).

**Next steps:**
1. Confirm tags (ask user about tag intent).
2. Draft the post (read full Voice Guide first).
3. Quality audit → audience review (Wei Lin + Marcus Tan, max 2 rounds, length audit first) → backlinks (legal OSS post is a known candidate) → publish via publish-lexical.js.
4. KIV for the post or follow-up: upstream bug report to adeu maintainer; possible rerun of ~125 broken/zero tasks after fixes; ablation grid (nanoclaw bare / +docling / +adeu / +both).

## Session 1 (continued) — 10 June 2026: Draft, audit, round-1 reviews

- Outline approved by user (7 sections, Lane 2 template). Tags: AI + LegalTech + OpenSource (user steer: "AI" leads; OpenSource flagged as borderline but the contribution arc is load-bearing).
- Draft complete (~2,000 words). Content quality audit: no structural issues; fixed "2,257 tasks" framing (same 1,006 tasks run twice → "over 2,200 runs"), glossed in-band signal jargon, named SWE-bench Pro / Claude Opus 4.5, "Stark Law task", "killed mid-thought" (avoids legal meaning of "execution"), docling descriptor.
- Round-1 reviews (cap is 2 rounds; recommendation: stop at 1):
  - **Wei Lin**: vulnerability lands; "sadder than the score" = best line, do not cut. Essential fix applied: solo-constraints beat at the four-defects moment ("engineer, lawyer, tester, QA department").
  - **Marcus Tan** (7.5→9 with fix): essential fix applied — drafting regresses −11.6pp even excluding broken files, so verdict split: packaging = mine; drafting quality = not in until ablation. Verified Opus 4.5 attribution is correct in source paper.
  - Skipped as optional/beyond scope: work-type win analysis, bug-report anatomy (both saved for rerun post).
- **User corrections:** investigation took **two weeks — each sweep exhausted a week of Ollama token quota** (replaced invented "weekend of log reading"; now in two places in draft). Closing question stays harness-centric ("What is your harness quietly deciding for you?") — user: "stick to the spine."

**KIV for the follow-up post (B teaser, "benchmark as your own test suite"):** the *operational* story user flagged — there are more components, e.g. the Claude scorer (LLM judge); a lot of work and learning in managing agents in a loop; runs monitored by AI agents; computer on all day for two weeks. That's the running-the-benchmark post, distinct from this reading-the-results post. Also KIV: rerun ~125 broken/zero tasks after fixes, ablation grid, upstream adeu bug report.

**Remaining before publish:** user manual review of draft → backlink curation (legal OSS post = known candidate; Ambrogi LawNext piece as external card) → tag validation → publish via publish-lexical.js.

## AUDIT TRAIL

- 2026-06-10: Structure locked (C→A→B). Pitch approved by user. Adeu attribution correction recorded.
- 2026-06-10: Round-1 reviewer essentials applied (drafting-regression caveat, solo-constraints beat). Review stopped at round 1. Two-week token-quota cost grounded. Closing question locked (harness-centric). Operational/scorer material deferred to follow-up post.
