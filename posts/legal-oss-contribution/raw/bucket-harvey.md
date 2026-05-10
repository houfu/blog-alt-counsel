# Bucket H: Harvey's OSS performance (as of 2026-05-08)

## What Harvey has released as "open source"

The `harveyai` GitHub org holds **7 repos**, but only **3 are Harvey-original** (the other 4 are upstream forks for internal use: `react-doc-viewer`, `pdfplumber`, `teams-ai`, `Recognizers-Text`). The originals:

1. **`harveyai/biglaw-bench`** (created 2024-08-24) — A "framework" for evaluating LLMs on legal tasks. The repo holds a README and a handful of sample task/rubric files; the **full dataset is gated** ("contact Harvey directly"). Last push 2026-03-17. No license file.
2. **`harveyai/deep-research-starter`** (created 2025-07-02) — Starter code for OpenAI's Deep Research API. MIT licensed. Single push, single contributor, 10 stars, 1 fork.
3. **`harveyai/harvey-labs`** (created 2026-03-30, public 2026-05-07) — Legal Agent Benchmark (LAB). 1,250 tasks across 24 practice areas, all-pass rubric grading, executable harness. **MIT licensed, dataset actually included.** This is the real one.

There is no Harvey SDK, no model weights, no Harvey product code. The pre-2026 "BigLaw Bench" public repo was effectively a research artefact wrapper around a closed dataset; LAB is a much more substantial release one day before this research date.

## Metrics table

| Repo | Created | Last push | Stars | Forks | Contribs | Merged PRs | Open PRs | License | External contribs? | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| harveyai/harvey-labs | 2026-03-30 | 2026-05-08 | 182 | 38 | 3 (all Harvey staff) | 41 | 4 | MIT | 2 unmerged drive-bys | Active, 1 day post-launch |
| harveyai/biglaw-bench | 2024-08-24 | 2026-03-17 | 143 | 18 | 3 (all Harvey staff) | 1 | 0 | none | None visible | Inactive (~7 wk since last push) |
| harveyai/deep-research-starter | 2025-07-02 | 2025-07-02 | 10 | 1 | 1 (Harvey staff) | 0 | 0 | MIT | None | Abandoned (10 months idle) |

Contributor accounts identified as Harvey staff via the LAB blog acknowledgements: `spencerp` (Spencer Poff, technical lead), `ngrupen` (Nick Grupen), `JulioPereyra93` (Julio Pereyra, task design lead), `GabrielPereyra` (co-founder), `annazhang-harvey` (employer field), `ClemenceLanfranchi`, `SandyYuan`, `massublau`, `KilgoreHerring`, `benjibc` (all listed/credited in Harvey blog or carrying Harvey email patterns). Of 52 PRs in `harvey-labs`, **only 2 are from `NONE`-association external accounts** (PRs #46 and #49) — both filed within ~24 hours of public launch and **both still open, unreviewed**.

## How Harvey framed the releases

**LAB (May 7, 2026)** is positioned as a **community benchmark**, not a product. The blog explicitly invites "lawyers, law firms, legal technologists, agent researchers, and AI labs" to contribute tasks, audit rubrics, and improve the harness. There is a CONTRIBUTING.md, a tutorial, an architecture doc, and a research-partner list (Artificial Analysis is publicly named). Notably, Harvey launched **without a leaderboard**, deferring it pending "community feedback" — a research-artefact framing that signals patience over PR-cycle marketing.

**BigLaw Bench (Aug 2024 → Mar 2026 updates)** was framed earlier and more thinly: a "public-facing version of our internal dataset" with the **full dataset withheld behind a contact form**. The blog posts (Sep 2024, Mar 2026) read as benchmark-marketing — "Harvey's systems substantially outperform other LLMs on source score" — and the repo is essentially a sample folder. This is closer to a **published artefact / marketing benchmark** (LexNLP-pattern) than an open project.

The **deep-research-starter** has no announcement; it was a one-shot demo posted around the OpenAI Deep Research launch and never touched again.

## Community engagement signals

- **HN/Reddit chatter is near-zero.** No HN thread for the LAB launch (1 day old). No Reddit thread that I could find for either `harvey-labs` or `biglaw-bench`. The only Harvey-on-HN traffic is the 2026-03-25 funding announcement (2 points). LinkedIn carried the LAB launch (Winston Weinberg's post, Artificial Analysis partnership post) — corporate channels, not developer channels.
- **External PR flow is essentially zero.** Of 52 LAB PRs, 50 are by COLLABORATOR/CONTRIBUTOR accounts (Harvey staff or pre-invited partners). The 2 truly external PRs both arrived in the 24-hour post-launch buzz window: `kevanwee` (Singapore trademark tasks, an interesting contribution) and `elliotvaucher` (Harbor adapter). Neither has been reviewed yet.
- **Issue engagement is also near-zero.** `harvey-labs` has 0 closed issues and 0 open issues filed by externals. `biglaw-bench` has 1 open issue across 19 months of public life.
- **Forks-to-merged-PR ratio:** harvey-labs 38 forks → 0 external merged PRs (∞); biglaw-bench 18 forks → 1 merged PR (18:1, and that 1 was Harvey staff). The LexNLP/CUAD pattern: forks accumulate as bookmarks, contributions don't flow back.

## Pattern read

**Same pattern as Mike, despite a ~1000x resource gap.** Harvey has $11B in valuation, a professional engineering org, brand recognition strong enough that "open-source Harvey clones" are a recognised genre, and explicit corporate goodwill toward community contribution (CONTRIBUTING.md, named research partners, legal-community outreach). And yet `harvey-labs` after one day shows the early signature of every legal OSS release I've inventoried: stars accumulate fast (182 → on track to outpace Mike's ~150), forks accumulate, and external contribution is two unreviewed drive-bys. `biglaw-bench` after 19 months is the mature endpoint of that trajectory: 143 stars, 18 forks, **one** external-looking PR ever, all real activity from three Harvey employees.

This **sharpens** the post's argument considerably. Bucket F established that the fork-without-PR pattern is structural to legal OSS (Mike's 22 forks → 0 PRs is normal for the domain). Harvey is the strongest possible counter-test: if a well-resourced vendor with brand recognition can't generate contribution flow either, the bottleneck is **not** Mike's vibe-coded solo launch, his AGPL choice, his lack of marketing, or his unfamiliar identity. The bottleneck is on the **demand side** — legal practitioners and legal-tech engineers don't (yet) have a contribution culture, regardless of who's offering the repo. Harvey LAB even pre-bundles the things Mike was missing (CONTRIBUTING.md, tutorial, architecture doc, named partners, brand) and still gets the same 0-real-PRs shape.

The complication: LAB is **one day old**. It's possible that 6 months from now it accumulates real community PRs as research labs run benchmarks and submit task families. But `biglaw-bench` is the longitudinal data point — 19 months, same shape — and that's the more honest comparator. Harvey's OSS is closer to a **published-artefact-with-community-aspirations** pattern than open-washing (the LAB code is real and useful) but functionally the contribution graph looks identical to Mike's.

## Caveats

- I'm calling staff/external on the contributor list using the LAB acknowledgements blog + author_association heuristics. `KilgoreHerring`, `SandyYuan`, `massublau`, `benjibc` could conceivably be external invited collaborators rather than employees; their COLLABORATOR association suggests at minimum direct repo access, which is a Harvey-internal signal regardless.
- LAB is 1 day old at this snapshot. The fair longitudinal comparator is `biglaw-bench`, not LAB.
- Harvey may have additional OSS releases under personal accounts (e.g., research papers with code on individual GitHubs) that I haven't enumerated. I checked `Harvey-Ai`, `harveyai`, `harvey-engineering`, `harvey` — only `harveyai` is the company.
- I could not find any HN/Reddit critique of the LAB release; this could be early timing, or could indicate the developer community simply isn't watching legal OSS releases. Both reads support the central argument.

## Source list

- https://github.com/harveyai (org listing)
- https://github.com/harveyai/harvey-labs
- https://github.com/harveyai/biglaw-bench
- https://github.com/harveyai/deep-research-starter
- https://www.harvey.ai/blog/introducing-harveys-legal-agent-benchmark (LAB launch post, May 7 2026)
- https://www.harvey.ai/blog/biglaw-bench-sources (Sep 2024)
- https://www.harvey.ai/blog/introducing-big-law-bench-research (Mar 11 2026)
- https://www.linkedin.com/posts/harvey-ai_today-we-are-launching-legal-agent-benchmark-activity-7457814955451396097-HygW
- https://www.linkedin.com/posts/winston-weinberg_were-excited-to-announce-the-open-source-activity-7457815019313840128-6PZp
- gh api `repos/harveyai/{harvey-labs,biglaw-bench,deep-research-starter}` and contributor/PR/issue search endpoints (run 2026-05-08)
