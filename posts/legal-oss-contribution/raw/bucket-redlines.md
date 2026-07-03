# Bucket R: houfu/redlines as a small-repo counterexample (as of 2026-05-08)

## What redlines is

`redlines` is a Python library that compares two strings and produces structured "track-changes" output (JSON, Markdown, HTML, or rich terminal). Its origin use case was visualising LLM rewrites of legal text and legislation diffs (the PLUS Explorer Streamlit app, ChatGPT prompt-engineering courseware) — a small, focused tool for legal/text-comparison work that grew into a general diff utility used in agent pipelines.

## Headline metrics

| Metric | Count | Note |
|---|---|---|
| Stars | 156 | After ~4 years (created Feb 2022) |
| Forks | 18 | |
| Watchers (subscribers) | 2 | Genuinely tiny following |
| Contributors | 13 | 12 external + Houfu |
| Open issues | 7 | Mostly maintainer-authored roadmap |
| Closed issues (non-PR) | ~30+ | Triaged, not orphaned |
| Open PRs | 2 | |
| Merged PRs | 37 | |
| Closed-unmerged PRs | 4 | Rejected with reasoning, not silence |
| License | MIT | |
| Last push | 2026-03-28 | Active |
| Last release | v0.6.1, 2025-11-24 | 9 releases over 4 years |
| PyPI downloads | 219,844/month, 38,132/week | Real distribution |
| CI | GitHub Actions, Python 3.10–3.14 matrix | mypy + pytest |
| Docs | https://houfu.github.io/redlines (Sphinx, GH Pages) | Versioned, build-on-release |

## Issue/PR breakdown

37 merged, 4 closed-unmerged, 2 open. Of the 37 merged PRs, a meaningful minority come from external contributors: PRs #62 (FallenDeity, mypy coverage), #69 (abbasabro, four-issue fix), #72 (Kaos599, statistics module), #75 (riyadey27, Python version docs), #80–#81 (eduardocaetano0, Brazilian Portuguese translation), #53 (fasfsfgs, syntax-warning fix). The remaining majority are Houfu's own feature/release work.

The closed-unmerged PRs aren't ghosted — PR #71 (SrishJ23, error messages) shows ~8 comments of substantive review where Houfu rejects the PR because it deleted 393 lines of `processor.py` and reduced `redlines.py` from ~860 to ~223 lines, then explains why and points the contributor toward a smaller scope. The contributor thanks him for "patience and detailed reviews." That is what a closed PR is supposed to look like in healthy OSS.

## Contributor pattern

Top: `houfu` (95 contributions), `inteli5` (13), `abbasabro` (6), `FallenDeity` (3), `eduardocaetano0`/`Kaos599`/`tharun634` (2 each), six others (1 each). Houfu is ~70-75% of commits. The pattern is **maintainer-led with a steady trickle of one-shot or two-shot external contributors** — not a bus-factor-1 single-author project, but not a community-run project either. External PRs span code, docs, translation, and tests, suggesting the contribution surface is genuinely open beyond cosmetic changes.

External engagement style (visible in #64 PT-BR translation thread, #71 rejected error-message PR): Houfu replies within days, asks contributors how they plan to implement, gives concrete checklists ("Add a separate file with a dash with language, eg `CONTRIBUTING-PR.md`"), follows up when merged content is broken ("the file doesn't contain any content. Can I check what's going on?"), and attributes work back to contributors when asked.

## Documentation, distribution, real-world use

- **README**: bilingual (English + Brazilian Portuguese), explains what it does, who it's for, gives runnable Python and CLI examples, links to documentation, lists real downstream uses.
- **CONTRIBUTING.md**: Yes — the contributor-covenant style template, with bug-report and enhancement-request structure, response-time expectations ("we usually respond first within days"), and a question-asking flow.
- **Code_of_Conduct.md**: Yes.
- **Issue templates**: No `.github/ISSUE_TEMPLATE` directory found. Gap.
- **Tests**: 8 test files under `tests/` (covering CLI, JSON output, PDF, nupunkt processor, redline core, document, error messages, changes API).
- **CI**: `python-package.yml` runs mypy + pytest across Python 3.10/3.11/3.12/3.13/3.14 on every push and PR. `python-publish.yml` for PyPI release. `docs.yml` for documentation.
- **Distribution**: On PyPI as `redlines`, currently v0.6.1. **219,844 downloads in the last month, 38,132 in the last week** — meaningfully more usage than the 156 stars suggest. The package is depended on enough that GitHub code-search returns ~105 hits for `from redlines` in Python files.
- **Real-world use**: Cited in DeepLearning.AI's "ChatGPT Prompt Engineering for Developers" course (Lesson 6) and used in PLUS Explorer for legislation diffs.

## What makes this "real" open source

1. **External PRs are actually merged** — 7+ external contributors have merged code in, including non-trivial features (statistics module, mypy coverage, multi-issue fixes), not just typo fixes.
2. **PRs are reviewed substantively** — the PR #71 thread shows line-level critique ("processor.py has been deleted entirely (393 lines)") and a clear rejection rationale, not a 19-month silence. Closing a PR with reasons is more open than approving one with none.
3. **Issues function as a public roadmap** — #84 (PDF layout-aware extraction), #85 (diff-match-patch cleanup) are Houfu's own scoping issues filed publicly so anyone could pick them up. Closed-issue history (#54–#68) shows the project plans in the open.
4. **CI runs on every PR** across five Python versions with type-checking — external contributors get fast, automated feedback before a human reviews.
5. **The package ships** — 9 GitHub releases tagged, version 0.6.1 on PyPI, ~220K monthly downloads. It is downloaded and run, not just starred.

## What's small-and-honest about it

A 156-star repo with 220K monthly downloads is a usage-to-vanity ratio that flips Mike's profile (2,395 stars, ~zero merged external contributions). Redlines doesn't perform openness; it does the boring mechanics — reply within days, run CI on every PR, write a CONTRIBUTING.md, tag releases, version docs, ship to PyPI, attribute translators by name. None of that is glamorous and none of it requires a marketing budget. Mike and Harvey could do all of it tomorrow at far larger scale — they don't.

## Honest gaps

- **No issue templates.** Contributors have to guess the format from CONTRIBUTING.md prose.
- **2 watchers.** No active community subscribed to notifications; Houfu carries the entire triage load.
- **Long fallow periods.** v0.4.2 (Sep 2023) → v0.5 (Nov 2024) was a 14-month release gap. 2024 had effectively one release. The project ran on Houfu's bandwidth, not a community's.
- **No GOVERNANCE.md, no co-maintainers.** A bus factor of 1, even though external PRs land. If Houfu stops, redlines stops.
- **CONTRIBUTING.md is template-stock.** It's polite and correct, but it's not specific to redlines' actual contribution friction (e.g., "the processor abstraction is the part most likely to break — ask before refactoring it" — which would have prevented PR #71's wrong direction).
- **The 2025 burst (PRs #54–#83) is suspiciously concentrated.** Most external contributions happened in October–November 2025, possibly Hacktoberfest-driven (the PT-BR contributor explicitly cited Hacktoberfest). That's fine, but it means the "steady trickle" is partly seasonal noise.

## Source list

- `gh api repos/houfu/redlines` (headline metrics)
- `gh api 'search/issues?q=repo:houfu/redlines+is:pr+is:merged'` and counterparts
- `gh api 'repos/houfu/redlines/contributors?per_page=100&anon=true'`
- `gh api 'repos/houfu/redlines/pulls?state=closed&per_page=20'`
- `gh api 'repos/houfu/redlines/issues?state=closed&per_page=30'`
- `gh api 'repos/houfu/redlines/releases?per_page=10'`
- `gh api '/repos/houfu/redlines/contents/README.md'` (and CONTRIBUTING.md, .github/workflows, tests/)
- `gh api 'repos/houfu/redlines/issues/64/comments'` and `/issues/71/comments` (review-quality evidence)
- https://pypistats.org/packages/redlines (download counts)
- https://pypi.org/project/redlines/ (release info)
- `gh api 'search/code?q=%22from+redlines%22+language:python'` (downstream use)
