# Bucket A: Mike fork sample (as of 2026-05-08)

Source: `gh api repos/willchen96/mike/forks?sort=newest&per_page=100`. First page only — 100 of 675 total forks.

## Top 10 forks by recent push

| # | full_name | pushed_at | ahead_by | behind_by | size_kb | stars | description |
|---|---|---|---|---|---|---|---|
| 1 | foolish-bandit/gary | 2026-05-07T23:40Z | 35 | 0 | 502 | 0 | OSS AI Legal Platform |
| 2 | CaliLuke/mike | 2026-05-07T22:42Z | 10 | 0 | 802 | 0 | OSS AI Legal Platform |
| 3 | skraptt/mikeTR | 2026-05-07T21:24Z | diverged | diverged | 1289 | 0 | OSS AI Legal Platform Turkish Version 1.0 |
| 4 | SegPar/ignia | 2026-05-07T20:53Z | 1 | 0 | 543 | 0 | IgnIA — AI Assistant for Certified MASC Mediators \| OSS fork of willchen96/mike (AGPL-3.0) |
| 5 | nforum/mike | 2026-05-07T20:14Z | 21 | 0 | 550 | 0 | OSS AI Legal Platform |
| 6 | kveton/mike | 2026-05-07T19:23Z | 0 | 0 | 544 | 0 | OSS AI Legal Platform |
| 7 | beautech-aero/legal-platform | 2026-05-07T19:03Z | 2 | 0 | 612 | 0 | OSS AI Legal Platform |
| 8 | clapointe-carbonleo/mike-legal | 2026-05-07T17:24Z | 21 | 0 | 510 | 0 | OSS AI Legal Platform |
| 9 | Chris-o-O/mike-intell | 2026-05-07T17:20Z | 0 | 0 | 388 | 0 | OSS AI Legal Platform |
| 10 | Azharsadique/mike | 2026-05-07T16:58Z | 5 | 0 | 393 | 0 | OSS AI Legal Platform |

`skraptt/mikeTR` returned `404 No common ancestor between main and skraptt:main` — they rewrote history (likely a hard reset to localise/reskin), so commits-ahead is unmeasurable but size jump (730 → 1289 kb) suggests substantial divergence.

## Aggregate fork activity distribution

Sample: first 100 forks of 675 total (newest-pushed first).

**Commits ahead of upstream `main`:**
- 0 ahead: **91** (87 untouched baseline + 4 with size changes but no commits on main)
- 1-9 ahead: **4** (SegPar/ignia, beautech-aero, jellz77, Azharsadique)
- 10+ ahead: **4** (foolish-bandit/35, nforum/21, clapointe-carbonleo/21, CaliLuke/10)
- Diverged history: **1** (skraptt/mikeTR — Turkish localisation, history rewritten)

**Recency of push:**
- Last 7 days: 13
- Last 30 days: 100 (the entire sample — repo only launched 2026-04-29)
- Older: 0

**Size as a proxy for any modification (size ≠ 730 kb baseline):**
- 87 forks identical to baseline (untouched since fork creation)
- 13 forks with non-baseline size

Of the 13 size-modified forks, only 8 actually have commits on main ahead of upstream. The other 4 (kveton, 1sbang, houdini479, Chris-o-O) changed size without changing main — possibly README edits, settings changes, or work on non-default branches not measured here.

Only ~1 in 25 forks (4 of 100) shows what could be called genuine divergence (10+ commits). Roughly 1 in 11 (9 of 100, including skraptt's diverged history) shows any commit activity at all.

## Diagnostic read

The dominant pattern is **bookmarking, not building**: 87% of the sampled forks are byte-identical to upstream and pushed at the moment of fork creation — classic "I'll come back to this" forks. Among the 13 forks with any modification, the active sub-pattern is **vibe-coded reskinning** (rename to "gary" / "ignia" / "mike-intell" / "mike-legal", keep upstream's "OSS AI Legal Platform" description, push 1-35 commits within a week of launch, attract zero stars). Only one fork (skraptt's Turkish port) and one repurposing (SegPar's mediation assistant) hint at substantively different intent — the rest read as private experiments rather than community contributions, which aligns with the headline 0-merged-PRs metric.

## Caveats

- Sample is 100 of 675 forks (~15%). The "newest push" sort biases toward the most recently active forks, so the 87% untouched-baseline figure is a *floor* — the older 575 forks are likely even more dormant.
- `ahead_by` only inspects the fork's `default_branch` (main) against upstream main. Forks doing work on feature branches register as 0-ahead. The 4 size-modified-but-0-ahead forks (kveton, 1sbang, houdini479, Chris-o-O) may fall here.
- skraptt/mikeTR's compare 404'd due to rewritten history; commit count unmeasurable.
- Descriptions are mostly the unedited upstream string ("OSS AI Legal Platform"), so they don't tell us much about intent. Reading READMEs would help but was out of scope/timebox.
- No correlation checked between fork-modification and stars — all top 10 had 0 stars, suggesting these are private experiments not promoted publicly.
