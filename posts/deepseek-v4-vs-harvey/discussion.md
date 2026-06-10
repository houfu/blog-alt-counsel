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

## Session 1 (continued) — 10 June 2026: Merge main, round-2 reviews, publish-ready

- Merged origin/main (PR #39 repo refactor) into the blog branch at user's request: hardened publish-lexical.js (local image upload, 418 retry, --dry-run), lint-posts.js + hooks (pre-publish gate, reviewer memory gate), posts/README naming standard. Renamed main file → `deepseek-v4-vs-harvey.md` to satisfy the standard; lint clean.
- **Round 2 of 2 (final), memory-aware reviewers:**
  - **Marcus Tan**: all round-1 fixes landed; verified every load-bearing number against source data and research.md (all confirmed, incl. Opus 4.5 attribution). No new catches. "Nothing is publish-blocking."
  - **Wei Lin**: fixes landed ("turns the admission into the actual argument"); emotional core per discussion.md fully preserved; archipelago callback is an upgrade (passive isolation → active choice), not a retread. One cosmetic catch applied: "contribution has to flow both ways" clarified ("not just maintainers publishing code, but users reporting back"). Verdict: **ready to publish**.
- MEMORY_UPDATE blocks appended to both reviewer memory logs (docs/personas/memory/).
- Review phase CLOSED (2-round cap reached). Remaining: user manual sign-off → backlinks → tag confirm → publish.

## Session 1 (continued) — 10 June 2026: User read-through → substance revision + Anna Guo

User feedback after reading the draft: (1) reads like a diary (fine) but under-explains what Harvey LAB tests for and what his results actually show; (2) asked how Anna Guo's legal standards work bears on this.

**Applied:**
- Expanded LAB description in "What I actually ran": client-matter anatomy + the $458M Crestview M&A example (57 criteria, 9 planted issues) + "formatting matters for this story" setup.
- New section "Where my stack lost — and where it won": work-type breakdown (draft −12.9/−11.6 clean; identify −9.9→−4.7 excl. broken = packaging; extract/compare strict-all-pass wins), funds/corp-gov drafting hotspots (−33/−28), litigation/IP/trade-sanctions resilient; closing point — the breakdown beats the single number (tells you what to fix/keep). De-duplicated stats from "It wasn't the model" section accordingly.
- Anna Guo paragraph in "When someone shows you a benchmark score": LegalBenchmarks.ai (SG-based, human-judged, double-blind), general-purpose matched legal tools on accuracy, Failure Mode 5 (tools fail on file handling "not because of poor reasoning", silently) = harness thesis at product level. Research details appended to research.md (addendum).
- Note: Marcus had called the work-type breakdown "optional, save for rerun post" in round 1 — user's read-through overrode that; it's now in this post.

## Session 1 (continued) — 10 June 2026: User manual edits + completion-signal claim evaluation

**User's manual edits to the draft (in Ghost-editor style, direct to file):** softened the opening ("Everything else around it failed", "My stack largely lost against the default. But what I learnt about the harness was the real lesson"), added a CleanShot image after the intro (`CleanShot 2026-06-10 at 19.56.11.png` — verify file exists in folder before publish), rewrote the logs-section opener (gut reactions: bad model? bad adeu? bad nanoclaw? — test didn't isolate factors; enlisted Claude's "Fable" model for forensics), and started an unfinished sentence at the first-discovery paragraph ("If you've used My harness expected…") — left dangling, pending the claim discussion below.

**USER CLAIM EVALUATED (user asked, Claude assessed):** "The agent didn't say it was done because nanoclaw is a conversational agent — unlike the default harness, which as a tool-call loop could detect completion explicitly; my only option was to wait for output and pause."
- **Verdict: sound core, two qualifications.** (1) Architecturally correct — the default harness owns the loop and detects "no more tool calls" structurally; a conversational agent only exposes messages, so in-band loop signals were unavailable, forcing an out-of-band convention. This upgrades the post's framing: the defect was downstream of a *substrate choice* (conversational agent for unattended batch work), a purer illustration of the harness thesis than an unforced design slip. (2) Overreach a: "only option" is too strong — a finish/submit MCP tool was available in-band (adeu proves MCP plumbing worked); own analysis doc recommends exactly that fix. Overreach b: 0% compliance has a known cause — out-of-band string conventions aren't load-bearing for models (instruction buried as context grows, small model drops it); tool calls live in the model's action space. Category lesson, not bad luck.
- **Pending user decision:** whether Claude weaves the qualified version into the first-discovery passage and tidies the dangling fragment + typos in the new line-41 paragraph ("Deepseekv4-flash is terrible model", "As test did not isolate"). Not yet applied — user may still be mid-edit.

## Session 1 (continued) — 10 June 2026: User rewrite review + mechanical fixes

**User made substantial manual edits** (diary→substance balance, his own voice): new logs-section opener with Fable disclosure, conversational-agent completion-signal explanation, rewrote "It wasn't the model" with jagged-frontier framing and regrets, added his own Kevin Keller "harness is the floor" paragraph, rewrote the Adeu/bug-report section, cut the next-post teaser, added two CleanShot charts.

**Claude review flagged; USER DECISIONS:**
- Deleted "That made me sadder than the score did" (Wei Lin's do-not-cut line) → **user chose to keep it deleted.**
- Deleted the 0/1,007 STATUS: DONE stat → **user chose to keep it deleted.**
- Deleted Stark Law example (broke framework Q2 cross-ref) → **user chose to RESTORE this one** (now in the stability-gate paragraph).
- Kevin Keller research done earlier this session: found "The Harness Is the Floor, Not the Ceiling" (Medium, 8 Apr 2026; Keller = GC/inventor, Tucuxi, LegalQuants contributor); notes + BCT-vs-floor reconciliation in research.md addendum. User wrote his own version into the draft (line ~79); no citation link yet — consider bookmark at backlink stage.

**Mechanical fixes applied:** images renamed (spaces broke publish-lexical's upload regex): `CleanShot…19.56.11.png` → `nanoclaw-task-scatter.png`, `CleanShot…22.13.20.png` → `nanoclaw-worktype-breakdown.png`; both now proper `![alt](file)` markdown with descriptive alt text written from actual chart contents (scatter: red/blue triangles by wall clock × pass rate; breakdown: 7 work-type columns). Grammar: pitted, DeepSeek naming, "not all it's cut out to be", garbled completion-loop sentence, half-baked, turned out/degrade, jagged frontier glossed, head-to-head, "to blame", Adeu capitalisation standardised.

**Remaining before publish:** backlinks (legal OSS post + consider Keller/Ambrogi/Anna Guo links), tag confirm, cover image?, publish via publish-lexical.js (--dry-run first), sync once.

## AUDIT TRAIL

- 2026-06-10: Structure locked (C→A→B). Pitch approved by user. Adeu attribution correction recorded.
- 2026-06-10: Round-1 reviewer essentials applied (drafting-regression caveat, solo-constraints beat). Review stopped at round 1. Two-week token-quota cost grounded. Closing question locked (harness-centric). Operational/scorer material deferred to follow-up post.
