# How we compared two agent harnesses — an investigation summary

*Companion to `nanoclaw-vs-default-analysis.md`, which holds the full tables. This document explains what was done and how the conclusions were reached, for readers who weren't part of the analysis.*

## The setup

We ran the same language model (DeepSeek-v4-flash, via Ollama) through the harvey-labs legal benchmark twice, in two different agent environments:

- **Default harness** (1,251 tasks): the stock harvey-labs setup. The agent gets six tools (bash, read, write, edit, glob, grep) in a sandboxed workspace; document parsing uses Pandoc, MarkItDown, pandas, and pdfplumber; a run ends when the model stops calling tools.
- **Nanoclaw stack** (1,006 tasks): a custom environment running the same model inside a nanoclaw container, with two additional components — *Adeu* (an MCP tool chain used for document authoring) and *docling* (a document conversion/reading library). The nanoclaw adapter watches for a textual `STATUS: DONE` signal, falls back to checking whether expected deliverable files have appeared and stopped changing, and finally enforces a hard deadline.

The nanoclaw sweep covers a strict subset of the default sweep's tasks (the remaining 245 were deliberately skipped after a credit outage paused the run at task 1,007). Both runs used the same judge. Each benchmark task asks the agent to do real legal work — draft an agreement, identify issues in a contract, extract key terms — and is graded against 23–194 pass/fail rubric criteria.

## The question

Does the custom nanoclaw environment (with adeu and docling) help or hurt the agent — and if it hurts, why?

## What we did, in order

**1. Score comparison (CSV analysis).** The nanoclaw run scored worse across the board: criterion pass rate 74.8% vs 84.7%, strict all-pass 3.3% vs 4.7%, and 56 zero-score tasks vs 9. It lost in 20 of 21 practice areas and on 637 of 1,006 head-to-head tasks. It was also ~2.6× slower.

**2. Initial hypotheses — and corrections.** Early readings blamed run timeouts (every nanoclaw run recorded `raw_end_state: timeout`) and suspected a judge mismatch. Both readings were wrong: the judge was the same, and "timeout" only means the `STATUS: DONE` string was never seen — every run actually produced its expected deliverables (`benchmark_status: clean`) and exited via the deliverable-stability gate. This reframing surfaced the first real finding: **the model never emitted the textual completion signal in any of 1,007 runs**, so run duration was always decided by harness heuristics, never by the agent. By contrast, the default harness's in-band mechanism (model stops calling tools) worked in 1,133 of 1,133 runs.

**3. Raw output forensics.** With access to the actual run directories, we scanned every output .docx in both sweeps. The default harness produced 1,431 valid files out of 1,431. The nanoclaw produced 73 broken files out of 1,296, across 69 tasks, and those tasks average a 0.45 pass rate vs 0.76 for clean ones. The breakage splits into three distinct defects:

- **A non-escaping OOXML writer (41 files).** These files are complete — properly closed XML, finalized zip — but contain invalid markup: 35 have a literal `<0/>` junk tag (a leaked format token) and others have unescaped ampersands. File forensics rule out interruption; the writer ran to completion and simply writes invalid XML.
- **An unfinished two-stage workflow (28 files).** Some are tiny placeholder stubs — five literally read *"PLACEHOLDER - This file will be generated via the Adeu MCP tool chain"*. Others are complete, substantive memos (up to 58 KB) saved as raw text or markdown under a .docx filename: the legal work was finished, but the conversion to Word format never ran, so the judge couldn't read it and the task scored zero.
- **Interrupted in-place zip edits (4 files)**, where the zip's internal indexes disagree — a non-atomic rewrite cut off mid-flight.

We also found the agent improvising: 100 task output folders contain `node_modules/` and hand-written Node scripts (`build-docx.js`, `transform.js`) — the agent routing around the provided tooling to build its own document pipeline, leaving build debris in the graded deliverables folder.

**4. The premature-exit mechanism.** The stability gate ends a run when deliverables stop changing. If the agent stages a file early (a copied source document, a placeholder, a first draft) and then thinks for longer than the polling window, the run is killed mid-work. The zero-score tasks fit this signature: median wall time of just 241 seconds, 57% ending under 300s, and at least one deliverable that is verbatim the *input* document shipped as the "analysis."

**5. Area and work-type analysis.** Splitting the 1,006 shared tasks by work type showed drafting regresses most (−12.9 pp) and, crucially, still regresses −11.6 pp after excluding all broken-file tasks — so the nanoclaw authoring path produces genuinely worse drafts, beyond the outright broken ones. Identify-issues tasks show the opposite pattern: most of their regression disappears once broken files are excluded — their problem was packaging. Controlling each practice area for its work-type mix compressed most of the apparent area variation; the residual hotspots are funds and corporate-governance drafting (−33 and −28 pp cells). And the strict all-pass metric actually *favors* nanoclaw for extract and compare tasks — the stack is better at mechanical work and worse at composition.

## What we concluded

The score gap is real but almost entirely attributable to four engineering defects in the nanoclaw stack, not to the model and not to docling:

1. A completion signal with 0% model compliance (out-of-band text instead of a tool).
2. A deliverable-stability gate that kills runs that stage files early.
3. A document writer that doesn't escape XML and a non-atomic edit path.
4. A two-stage authoring workflow (placeholder → Adeu generation, or text → docx conversion) that sometimes never completes its second stage.

Three claims were tested and challenged along the way: *"the nanoclaw hurt scores"* (true, but the damage is specific and fixable, not inherent to custom environments); *"adeu had no impact"* (refuted — its fingerprints are on both the worst zeros and the biggest wins); and *"docling hurt the agent"* (unsupported — regression is uncorrelated with documents read, no failure mentions PDF parsing, and reading-heavy task types regressed least).

Perhaps the most important single insight: in several zero-scoring tasks the agent did the legal work correctly and lost all credit on packaging. The benchmark measures the environment as much as the model.

## Suggested follow-ups

Rerun only the ~125 broken or zero-score tasks after fixing the writer and the completion gate (about 10% of a sweep) to measure recovery; then, if component attribution still matters, run an ablation grid (nanoclaw bare / +docling / +adeu / +both) on a stratified sample that oversamples drafting tasks in funds and corporate governance.
