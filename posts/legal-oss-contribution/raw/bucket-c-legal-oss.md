# Bucket C: Staying-power legal OSS (as of 2026-05-08)

## Comparison table

| Project | Repo | Created | Last push | Stars | Forks | Contributors | Merged PRs | License | Governance | Status |
|---|---|---|---|---:|---:|---:|---:|---|---|---|
| Docassemble | jhpyle/docassemble | 2015-04-18 | 2026-05-04 | 941 | 304 | 43 | 452 | MIT | Single-maintainer (Jonathan Pyle, personal account); large user community via Slack and docassemble.org | Active |
| CourtListener | freelawproject/courtlistener | 2014-07-25 | 2026-05-07 | 911 | 239 | ~125 | 2,786 | AGPL (NOASSERTION on metadata) | Org-led non-profit (Free Law Project); explicit "Getting Involved" doc, every issue assigned to a person, dedicated volunteer page | Active |
| Juriscraper (FLP) | freelawproject/juriscraper | 2014-08-08 | 2026-05-07 | 573 | 154 | 48 | 983 | BSD-2-Clause | Same Free Law Project umbrella; per-court scrapers structured to invite scoped contributions | Active |
| RECAP browser ext. | freelawproject/recap-chrome | 2013-03-24 | 2026-02-19 | 75 | 34 | 21 | 357 | GPL-3.0 | Free Law Project; recap-chrome is the contributor-facing repo (the `freelawproject/recap` issue tracker repo has 19 stars and minimal activity) | Active |
| OpenSALT | opensalt/opensalt | 2016-10-28 | 2026-05-07 | 43 | 26 | 29 | 593 | MIT | Org-led (PCG Education + community); CASE standards alignment tool — education/policy adjacent more than core legal | Active |
| Public.law (open-gov-crawlers) | public-law/open-gov-crawlers | 2019-03-15 | 2026-02-11 | 77 | 8 | 3 | 153 | none declared | Single-maintainer dominant (Robb Shecter); open scraping framework | Active but thin contributor base |
| LexNLP | LexPredict/lexpredict-lexnlp | 2017-09-30 | 2024-05-27 | 776 | 200 | 10 | 13 | AGPL-3.0 | Corporate-released (LexPredict, now Epiq); README treats it as a published library, not a contribution destination | Stale (>12 months since push, but borderline; included for context) |

## Dropped from the candidate set

- **A2J Author** — no first-party OSS repo. CCALI/a2jdat (the document assembly add-on) exists but has 3 stars, 1 fork, single contributor; the core authoring tool is not on GitHub.
- **OpenLaw** — `openlawteam/openlaw` returns 404 (deleted/private). The remaining org repos (`openlaw-core`, `openlaw-client`, `openlaw-elements`) had their last pushes in 2021; openlaw-core has 109 stars, 15 contributors, 207 merged PRs but no activity in ~5 years. Project is effectively dormant.
- **Hyperledger Sawtooth** — moved to hyperledger-archives in 2023; the surviving sibling Hyperledger Cacti exists but it is general-purpose blockchain interop, not a legal OSS project. Out of scope.
- **LawAtlas / RWJF** — only `legalscienceio/monqcle_lawatlas` exists (0 stars, 0 forks, single 2017 commit, no license). The actual product is a hosted SaaS, not OSS.
- **CourtBot (Code for America)** — last push 2022-09; downstream forks (codeforbtv/courtbot-vt last push 2022-10, codeforsanjose/courtbot 2023-09, boisebrigade archived) are also stale. The codefortulsa/courtbot-* family had a 2025-11 push but is small (would need a separate look if revisited).
- **Atticus / Upsolve / Alabama Court Forms** — no matching legal OSS repos found under those names. `jh2633/Atticus_Legal` is a 2016 hackathon prototype; "upsolve" search returns competitive-programming tools, not the legal aid Upsolve (their org isn't on GitHub publicly under that name).

## Notes per surviving candidate

**Docassemble** is the outlier on solo maintainership: a User account, not an org, yet 43 distinct contributors and 452 merged PRs. The README is intentionally minimal — onboarding lives off-GitHub on docassemble.org and a Slack community. Contribution culture is moderated through documentation and synchronous chat rather than issue triage. "help wanted" label exists; no GFI label.

**Free Law Project (CourtListener + Juriscraper + recap-chrome)** is the clearest "designed for non-traditional contributors" pattern. CourtListener's README explicitly says "we assign every issue to *somebody*, so if you find an issue that looks interesting, just chime in" — this is unusual onboarding language. Juriscraper's per-court module structure means a contributor can own a single jurisdiction's scraper without understanding the whole system; this likely explains the 48 contributors / 983 PRs. recap-chrome is a smaller surface (browser extension) but consistently active. Foundation-style governance under a 501(c)(3).

**OpenSALT** has the highest PR-to-contributor ratio in the set (593 merged PRs, 29 contributors → ~20 PRs/contributor), suggesting a few sustained contributors rather than long-tail community. It's also borderline on scope — it implements an IMS Global education-standards spec, so "legal" is more about regulatory/policy data than legal practice. Worth flagging in the post as adjacent.

**Public.law** is single-maintainer at the limit: 3 contributors total. Useful as a counterpoint — long-lived (2019), active (2026), but contribution culture isn't really there yet. The org distributes work across many small Ruby/Python repos rather than one monolith.

**LexNLP** is the corporate-release pattern: 776 stars but only 10 contributors and 13 merged PRs — it was open-sourced as a publication, not as a community. Last push May 2024 makes it borderline-stale at ~12 months; including it shows that "popular" and "has contribution culture" diverge.

## Caveats

- Contributor counts come from `?per_page=100&anon=true` which caps at 100. For courtlistener (~125) and docassemble (~43 confirmed via Link header pagination, where last page = 43) the true counts use the Link header. Other counts are accurate where the single page returned <100.
- "Merged PRs" via `search/issues` includes external and maintainer PRs combined — it's a proxy for activity, not external-contribution volume specifically.
- License field shows "NOASSERTION" for CourtListener because GitHub doesn't recognize their AGPL declaration in metadata; the README confirms AGPL.
- I could not confirm whether RECAP itself uses a different "main" repo than recap-chrome — the `freelawproject/recap` repo is explicitly an issue-tracker stub. Treating recap-chrome as the contributor-facing artifact is a reasonable inference but unverified.
- `public-law` org has no LICENSE file in `open-gov-crawlers`; the org's other repos use MIT but this one is unverified.
- "Governance" descriptions are inferred from README + org structure, not from formal governance docs in most cases.
