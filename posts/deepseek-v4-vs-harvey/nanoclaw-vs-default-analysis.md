# DeepSeek-v4-flash: default harness vs nanoclaw (adeu + docling)

Comparison of two harvey-labs sweeps with the same model (`ollama/deepseek-v4-flash:cloud`) and same judge. Default harness: 1,251 tasks. Nanoclaw stack: 1,006 tasks (a strict subset; the remaining 245 were deliberately not run — credit outage pause at 1,007).

## Headline results

| Metric | Default | Nanoclaw |
|---|---|---|
| Criterion-level pass rate | 84.7% | 74.8% |
| Mean per-task pass rate | 0.838 | 0.743 |
| Strict all-pass rate | 4.7% | 3.3% |
| Median wall clock | 194 s | 496 s |
| Zero-score tasks | 9 | 56 |
| Valid .docx outputs | 1,431 / 1,431 (100%) | 1,223 / 1,296 (94.4%) |
| Completion signal observed | 1,133 / 1,133 (in-band: model stops calling tools) | 0 / 1,007 (out-of-band `STATUS: DONE` string) |

Head-to-head on the 1,006 shared tasks: nanoclaw worse on 637, better on 348, tied on 21. Median difference −2.5 pp; mean −9.5 pp (dragged by catastrophic zeros).

## Completion mechanism

- The default harness ends a run when the model stops calling tools. This worked in 1,133/1,133 runs (`finished_cleanly: true`, median 15 turns).
- The nanoclaw adapter expects an out-of-band `STATUS: DONE` string, falling back to a deliverable byte-stability gate, then a hard deadline. The model emitted the string **zero times in 1,007 runs** (`terminal_status_seen: false`, `completion_signal: ""` everywhere).
- The stability gate has a premature-exit failure mode: any deliverable created early (copied source doc, placeholder, first draft) that stays byte-stable longer than the poll window ends the run. The 56 zero-score tasks have median wall of 241 s and 57% ended under 300 s — fast exits, not slow failures. Example: the Stark Law task shipped the *source compliance program* verbatim as its "gap analysis" (default run scored 1.00; nanoclaw 0.00).
- Runs that hit the ~1,200 s hard deadline (n=43) average 0.53 pass rate.

## Docx forensics (raw output scan)

73 broken .docx across 69 tasks in nanoclaw; 0 in 1,431 default outputs. Tasks with broken docx average **0.452** pass rate vs 0.764 for clean tasks. Three distinct defects:

1. **Non-escaping OOXML writer (41 files) — ran to completion, wrote it wrong.** All 41 end with a proper `</w:document>` and a finalized zip; 35 contain a literal `<0/>` junk tag (format-token leak) at positions scattered from 1%–100% of the document; the rest have unescaped `&` in body text. File forensics rule out interruption.
2. **Unfinished workflow (28 files) — work done, never packaged.** Two sub-types: tiny placeholder stubs (12–143 bytes; five literally read *"PLACEHOLDER - This file will be generated via the Adeu MCP tool chain"*), and complete memos up to 58 KB saved as raw text/markdown under a .docx filename. In the latter, the legal work was finished — only the format conversion never ran.
3. **Interrupted in-place zip edit (4 files).** Central directory and local headers disagree — a non-atomic rewrite cut off mid-flight.

Workspace pollution: 100 task output directories contain `node_modules/`; 138 stray build scripts (`build-docx.js`, `transform.js`, etc.); 21 tasks shipped intermediate variants (`_clean`, `_processed`, `test-edit.docx`). Agents frequently improvised their own Node docx pipelines inside the deliverables folder; those tasks average 0.681.

## By work type (1,006 shared tasks)

| Work type | n | Default pr | Nanoclaw pr | Δ (pp) | Nanoclaw win rate | Δ excl. broken docx |
|---|---|---|---|---|---|---|
| draft | 374 | 0.873 | 0.744 | −12.9 | 26.7% | −11.6 |
| identify | 165 | 0.734 | 0.635 | −9.9 | 39.4% | −4.7 |
| research | 11 | 0.845 | 0.750 | −9.5 | 18.2% | −1.1 |
| review | 102 | 0.848 | 0.770 | −7.8 | 32.4% | −4.9 |
| analyze | 99 | 0.866 | 0.792 | −7.4 | 41.4% | −2.5 |
| extract | 126 | 0.835 | 0.768 | −6.7 | 39.7% | −7.0 |
| compare | 129 | 0.841 | 0.793 | −4.8 | 44.2% | −4.0 |

Conclusions:

- **Drafting carries the regression, and not because of file corruption.** Broken-docx incidence in draft tasks is only 4.3%; excluding them, drafting still regresses −11.6 pp — the worst of any type. The nanoclaw authoring path produces genuinely worse drafted documents, beyond the outright broken ones.
- **Identify-issues tasks are the opposite: their regression is mostly packaging.** Broken docx hits 13.3% of identify tasks (the placeholder stubs are nearly all `*-issues-memorandum.docx`), and excluding them cuts identify's regression from −9.9 to −4.7 pp. Same for analyze (14.1% broken; −7.4 → −2.5 pp).
- **Identify is the model's hardest work type in both harnesses** (0.734 / 0.635) — a model property, not a harness property.
- **Strict all-pass flips sign for mechanical work types.** Nanoclaw *beats* default on perfect-task rate for extract (3.2% vs 1.6%) and compare (7.0% vs 5.4%), while collapsing on identify (0.6% vs 4.2%) and draft (3.5% vs 6.1%). For extraction/comparison work, the nanoclaw stack is arguably the better environment.

## By practice area, adjusted for work-type mix

Raw per-area regressions range from −17.7 pp (funds) to +8.9 (structured finance, n=1). Adjusting each area for its work-type composition (expected Δ given global per-type means):

| Area | n | Actual Δ | Expected from mix | Residual area effect |
|---|---|---|---|---|
| funds-asset-management | 39 | −17.7 | −10.4 | **−7.3** |
| corporate-governance | 97 | −16.0 | −8.9 | **−7.1** |
| bankruptcy-restructuring | 36 | −15.3 | −9.7 | −5.6 |
| insurance | 27 | −12.3 | −8.6 | −3.7 |
| employment-labor | 39 | −12.8 | −9.4 | −3.4 |
| corporate-ma | 159 | −12.6 | −9.9 | −2.7 |
| ... | | | | |
| intellectual-property | 132 | −4.4 | −9.0 | +4.5 |
| international-trade-sanctions | 41 | −3.3 | −8.8 | +5.5 |
| energy-natural-resources | 28 | −2.2 | −9.1 | +6.9 |
| litigation-dispute-resolution | 52 | −3.5 | −10.4 | +7.0 |

Conclusions:

- **Most of the apparent practice-area variation is work-type mix.** The raw spread (~26 pp) compresses to roughly ±7 pp residual once verb composition is controlled.
- **But real area effects remain.** Funds and corporate governance underperform their mix by ~7 pp — driven by catastrophic drafting cells: funds × draft is −33.3 pp (n=20, default baseline 0.912) and corporate-governance × draft is −28.4 pp (n=32, baseline 0.886). These are long, heavily structured governance/fund documents — exactly where a fragile authoring pipeline compounds.
- **Litigation, energy, trade-sanctions, and IP are nanoclaw-resilient** (+4.5 to +7.0 pp above expectation). Notable cells: IP × analyze +2.6 pp and energy × identify +2.6 pp — the only positive cells with n≥8; banking-finance × draft and trade-sanctions × draft are near-parity (−2 pp), showing nanoclaw drafting *can* match default in some domains.
- **Worst non-draft cell: environmental-esg × identify (−25.3 pp, n=11)** — stub-placeholder territory.

## Overall attribution

The −9.5 pp mean gap decomposes into: (1) a real drafting-quality penalty in the nanoclaw authoring path (~−11.6 pp across 358 clean draft tasks); (2) broken packaging — non-escaping OOXML writer, unfilled Adeu placeholders, text-as-docx — concentrated in identify/analyze memo tasks; (3) premature exits from the deliverable-stability gate; (4) a completion signal with 0% model compliance shaping every run's duration. None of the evidence implicates docling's read side: regression is uncorrelated with documents read (r = 0.007), no fail reasoning mentions PDF, and reading-heavy work types regress least.

## Recommended next steps

1. Replace the `STATUS: DONE` text signal with a finish tool (or add a minimum-turn floor / longer stability window).
2. Fix the OOXML writer's escaping and the format-token leak; make in-place edits atomic.
3. Ensure the text-to-docx conversion step always runs; validate deliverables with a docx parser before run end.
4. Re-run only the 69 broken-docx tasks + 56 zero-score tasks (~10% of a sweep) to measure recovery.
5. If validating components: ablation grid (nanoclaw bare / +docling / +adeu / +both) on a 100-task stratified sample, oversampling draft tasks in funds and corporate governance.
