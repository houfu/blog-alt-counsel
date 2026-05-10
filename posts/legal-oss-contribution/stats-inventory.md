# Statistics Inventory — Legal OSS Contribution Post

_Comprehensive numbers pulled from research.md and all raw/bucket-*.md files. Organized for graph commissioning. As of 2026-05-08._

---

## 1. Mike (`willchen96/mike`) — the trigger

### Headline metrics

| Metric | Value | Notes |
|---|---:|---|
| Stars | 2,395 | "most starred legal repo to date" (founder's claim) |
| Forks | 675 | 28% fork-to-star ratio (typical OSS <5%) |
| Watchers | 34 | The number that should embarrass everyone |
| Open issues | 19 | |
| Closed issues | 1 | |
| Open PRs | 16 | |
| Closed-not-merged PRs | 6 | |
| **Merged PRs** | **0** | |
| Days since launch | 9 | |
| Last push to main | Launch day | |
| Repo size | 730 KB | |
| License | AGPL-3.0 | Founder considering relicensing |

### Mike's growth trajectory (3 data points — the "viral but flat" arc)

| Time after launch | Stars | Forks | Source |
|---|---:|---:|---|
| 72 hours (per Will's interview) | 1,000+ | 300+ | Will Chen, Artificial Lawyer interview |
| 9 days (current) | 2,395 | 675 | gh api 2026-05-08 |
| Compounding behaviour | Stars 2.4× | Forks 2.25× | Roughly proportional |

→ Average of ~266 stars/day. **Zero merged PRs in any of those days.**

### Mike's fork distribution (sample n=100 of 675)

| Activity level | Count |
|---|---:|
| 0 commits ahead of upstream | **91** |
| Of which byte-identical to upstream | 87 |
| Of which size-modified but 0 ahead | 4 |
| 1-9 commits ahead | 4 |
| 10+ commits ahead (genuine divergence) | 4 |
| Diverged history (Turkish localisation) | 1 |
| **Pushed in last 30 days** | 100 (entire sample) |
| **Pushed in last 7 days** | 13 |

### Top 10 most active forks (descending by recent push)

| # | Fork | Commits ahead | Size (KB) | Stars |
|---|---|---:|---:|---:|
| 1 | foolish-bandit/gary | 35 | 502 | 0 |
| 2 | CaliLuke/mike | 10 | 802 | 0 |
| 3 | skraptt/mikeTR | diverged | 1,289 | 0 |
| 4 | SegPar/ignia | 1 | 543 | 0 |
| 5 | nforum/mike | 21 | 550 | 0 |
| 6 | kveton/mike | 0 | 544 | 0 |
| 7 | beautech-aero/legal-platform | 2 | 612 | 0 |
| 8 | clapointe-carbonleo/mike-legal | 21 | 510 | 0 |
| 9 | Chris-o-O/mike-intell | 0 | 388 | 0 |
| 10 | Azharsadique/mike | 5 | 393 | 0 |

→ Note: 0 stars across all 10 most-active forks.

### Mike reception

- HN thread: 208 points, 113 comments
- HN sentiment: ~3:1 skeptical-to-supportive
- Launch venue: LinkedIn (Will Chen's post + Stoke Builder + others)
- Trade-press coverage: 3+ articles (Artificial Lawyer, Legal IT Insider, Pasquale Pillitteri) — none critical

---

## 2. Harvey OSS — the comparator

### `harveyai` GitHub org

- Total public repos: 7
- Harvey-original: **3** (others are upstream forks for internal use)
- Total stars across 3 originals: ~335
- Total forks: ~57
- Total unique contributors: 3 (all Harvey staff)
- Total merged PRs: 42
- External merged PRs: 0
- External drive-by PRs (unmerged): 2

### Three Harvey OSS repos detail

| Repo | Created | Last push | Stars | Forks | Contribs | Merged PRs | Open PRs | License | External? |
|---|---|---|---:|---:|---:|---:|---:|---|---|
| harvey-labs (LAB) | 2026-03-30 | 2026-05-08 | 182 | 38 | 3 (staff) | 41 | 4 | MIT | 2 unmerged drive-bys |
| biglaw-bench | 2024-08-24 | 2026-03-17 | 143 | 18 | 3 (staff) | **1** | 0 | none | None visible |
| deep-research-starter | 2025-07-02 | 2025-07-02 | 10 | 1 | 1 (staff) | 0 | 0 | MIT | None |

### LAB launch-day specifics

- 1,250 tasks across 24 practice areas
- 41 PRs merged in launch period — **0 from external accounts, 41 from staff/pre-invited collaborators**
- 2 truly external PRs filed in launch buzz window: kevanwee (Singapore trademark tasks), elliotvaucher (Harbor adapter) — **both unreviewed**
- 50 of 52 LAB PRs from COLLABORATOR/CONTRIBUTOR association (i.e., not random external)

### biglaw-bench longitudinal (the honest comparator)

- 19 months public
- 143 stars accumulated
- 18 forks accumulated
- **1 staff-only merged PR**
- 0 open PRs
- 1 open issue across the 19 months
- Full dataset withheld behind contact form

### Harvey reception

- HN traffic on Harvey OSS: zero threads found
- Reddit r/legaltech threads on Harvey OSS: zero found
- Launch venues: corporate blog + LinkedIn (Winston Weinberg, Artificial Analysis partnership post)
- One named LinkedIn comment: Rob Saccone — *"Less forks and more contributions would create a lot more value here... I cannot say that Mike or any of the 200+ forks are ready for anything beyond a thought-provoking demo."*

---

## 3. LegalQuants directory — the empirical anchor

### Directory composition

- Total directory members: **110**
- Members with verifiable non-trivial public GitHub: **~6**
- Members with empty GitHub accounts: ~5
- Members publishing via Marketplace add-ins / Streamlit / Vercel / Replit only: ~99
- Members surfacing a github URL in their LegalQuants bio: 1 (Veronica Lopez)

### LQ-native repos sampled (n=15 substantive)

| Author | Repo | Stars | Forks | Contribs | Merged PRs | Classification |
|---|---|---:|---:|---:|---:|---|
| jamietso (LQ founder) | Tabular_Review | 52 | 20 | 3 | 2 | Active solo |
| jamietso | RedlineNow | 38 | 15 | 1 | 0 | Signaling |
| jamietso | SignaturePacketIDE | 24 | 17 | 1 | 0 | Signaling |
| jamietso | ChartAI | 2 | 4 | 2 | 1 | Individual portfolio |
| yuch85 | contract-playbook-ai | 34 | 10 | 1 | 0 | Signaling |
| yuch85 | word-ai-redliner | 26 | 6 | 2 | 0 | Active solo |
| yuch85 | superdoc-redlines | 21 | 6 | 1 | 0 | Signaling |
| yuch85 | office-word-diff | 14 | 2 | 2 | 0 | Active solo |
| yuch85 | sgcite | 4 | 1 | 2 | 0 | Individual portfolio |
| veronica-builds | emilie | 23 | 9 | 2 | 0 | Signaling (fork of Mike) |
| veronica-builds | Court-Decision-Extractor | 1 | 1 | — | — | Individual portfolio |
| veronica-builds | Court-Filing-Analyzer | 1 | 0 | — | — | Individual portfolio |
| terracottalabs | hkcr | 5 | 1 | 1 | 0 | Individual portfolio |
| techie-ray | global-ai-reg-tracker-api-python | 1 | 0 | 1 | 0 | Individual portfolio |
| **houfu** | **redlines** | **156** | **18** | **13** | **37** | **Active solo (closest to "real")** |

### LQ aggregate (excluding redlines, n=15)

- **Median: 13 stars / 4 forks / 2 contributors / 0 merged PRs**
- Repos crossing FLP merged-PR threshold (≥100): **0**
- Repos crossing 10 merged PRs: **0**
- Repos on PyPI / npm as first-party publication: **0** verified
- Repos with recent activity (last 90 days): ~6
- Repos created in the last 12 months: 14 of 15

### LQ classification breakdown (the visual)

| Classification | Count | % of substantive repos |
|---|---:|---:|
| Thriving (≥5y, multi-contrib, >50 PRs) | 0 | 0% |
| Active solo (maintainer-led, occasional ext PRs, real distribution) | 4 | 25% |
| Signaling (≤1 merged PR, mostly stars/forks) | 5 | 31% |
| Individual portfolio (demos, hackathon, near-zero stars) | 6+ | 38% |
| Stale/Corporate-published | 0 | 0% |

→ Headline: **of 110 directory members, exactly 1 (Houfu) maintains a repo with double-digit external merged PRs and meaningful package-registry distribution.**

---

## 4. The 9-handle external PR audit — the killer table

| Handle | Lifetime PRs | Non-self lifetime | Non-self merged | Non-self merged (12 mo) | Most recent attempt |
|---|---:|---:|---:|---:|---|
| jamietso (LQ founder) | **0** | 0 | 0 | 0 | never |
| yuch85 | 4 | 4 | 2 | 2 | 2026-03-01 ragflow (general) |
| veronica-builds | **0** | 0 | 0 | 0 | never |
| rocky-li / terracottalabs | **0** | 0 | 0 | 0 | never |
| techie-ray | **0** | 0 | 0 | 0 | never |
| **houfu** | **137** | **15** | **9** | **0** | 2024-12-29 ckan-docker (closed) |
| damienriehl (active veteran) | 54 | 33 | 23 | 14 | 2026-05-02 (own org) |
| vdavez (active veteran) | >100 | 56 | 42 | **0** | 2024-01-25 (closed) |
| nonprofittechy (active veteran) | >100 | 3 | 2 | 2 | 2026-04-30 (vendor patching) |

### Aggregate

- **Of 9 handles audited: 0 have a merged PR to a non-self/non-org *legal*-OSS repo in the last 12 months**
- 5 of 9 have **zero career PRs to any legal-OSS project belonging to someone else**
- Median non-self merged PRs in last 12 months: **0**
- Median lifetime non-self merged PRs: 2

### Houfu's lifetime non-self PR history (all 15 attempts)

| Date | Repo | State |
|---|---|---|
| 2024-12-29 | ckan/ckan-docker | closed unmerged |
| 2024-10-21 | jefftriplett/files-to-claude-xml | **open unmerged** (19+ months) |
| 2024-06-18 | supabase/auth-py | **MERGED** (last merged contribution) |
| 2023-05-15 | sebastiandres/streamlit_book | merged |
| 2020-03-03 | bitwarden/help | merged |
| 2019-10-20 | GoogleChrome/rendertron | merged |
| 2019-10-17 | guptarohit/freshpaper | merged |
| 2019-10-16 | timrodz/vscode-light-switch | closed unmerged |
| 2019-10-13 | bostrt/quikey | merged |
| 2019-10-12 | jhpyle/docassemble | merged (the 2019 docs typo) |
| 2018-12-19 | ecatkins/xpdf_python | open (still!) |
| 2018-11-03 | tunnelvisionlabs/antlr4ts | merged |
| 2018-09-15 | angular/angular | closed unmerged |
| 2018-05-03 | ngxs/store | merged |
| 2017-12-27 | angular/angularfire | merged |

Total: 15 attempts, 9 merged. The 9 merged contributions across an entire GitHub history.

→ **Possible visual: a timeline showing 9 dots over 9 years, ending in a 23-month silence.**

---

## 5. The long-lived legal OSS comparison set

### The full table — survivors only

| Project | Created | Last push | Stars | Forks | Contribs | Merged PRs | License | Governance |
|---|---|---|---:|---:|---:|---:|---|---|
| Docassemble | 2015-04-18 | 2026-05-04 | 941 | 304 | 43 | 452 | MIT | Single-maintainer + Slack |
| CourtListener (FLP) | 2014-07-25 | 2026-05-07 | 911 | 239 | ~125 | **2,786** | AGPL | 501(c)(3) |
| Juriscraper (FLP) | 2014-08-08 | 2026-05-07 | 573 | 154 | 48 | 983 | BSD-2 | 501(c)(3) |
| RECAP browser (FLP) | 2013-03-24 | 2026-02-19 | 75 | 34 | 21 | 357 | GPL-3.0 | 501(c)(3) |
| OpenSALT | 2016-10-28 | 2026-05-07 | 43 | 26 | 29 | 593 | MIT | Corporate (PCG) |
| Public.law | 2019-03-15 | 2026-02-11 | 77 | 8 | 3 | 153 | none | Single-maintainer |
| LexNLP | 2017-09-30 | 2024-05-27 | 776 | 200 | 10 | 13 | AGPL-3.0 | Corporate-released |

### Dropped from candidate set (the cautionary cases)

| Project | Status | Notes |
|---|---|---|
| A2J Author | No first-party OSS repo | |
| OpenLaw | Dormant 5 years (last push 2021) | At peak: 109 stars, 15 contribs, 207 merged PRs |
| Hyperledger Sawtooth | Archived 2023 | |
| LawAtlas / RWJF | Single 2017 commit | Hosted SaaS, not OSS |
| CourtBot (Code for America) | Last push 2022 | |
| Atticus / Upsolve / Alabama Court Forms | No matching OSS | |

### OpenSALT — the counter-example detail (Part 2 material but data lives here)

- 593 lifetime merged PRs
- Of most recent 50 closed PRs: **49 dependabot, 1 human (jmarks, MEMBER)**
- Core committers list frozen at September 2017 (9 individuals)
- **Visual: 49:1 pie. Visceral.**

### Free Law Project — `freelawproject` org

- 55 public repos in org
- Juriscraper: outside contributors (`grossir`, `MorganBennetDev`) **out-shipped staff** in 9 days (per gh api 2026-04-30 to 2026-05-07 sample)
- 20 PRs closed in 9 days; 2 of the top contributors were `CONTRIBUTOR` association (i.e., outside)

---

## 6. redlines — the practitioner counterexample

### Vanity-vs-usage inversion

| Metric | Mike | Tabular_Review | Harvey biglaw-bench | redlines |
|---|---:|---:|---:|---:|
| Stars | 2,395 | 52 | 143 | 156 |
| Merged PRs | 0 | 2 | 1 (staff) | **37** |
| Contributors | (not measurable) | 3 | 3 (staff) | **13** |
| **PyPI monthly downloads** | n/a | n/a | n/a | **219,844** |
| Years active | 0.02 | 0.4 | 1.6 | **4** |

→ The headline ratio: 156 stars / 220K monthly downloads → flips Mike's 2,395 stars / no equivalent download metric.

### redlines internals

- Watchers: 2
- Open issues: 7
- Closed issues (non-PR): ~30+
- Open PRs: 2
- Merged PRs: 37
- Closed unmerged PRs: 4
- 9 GitHub releases over 4 years
- v0.6.1 latest (2025-11-24)
- CI matrix: Python 3.10/3.11/3.12/3.13/3.14
- ~105 hits for `from redlines` in Python files (downstream use)

### redlines contributor distribution (the inverse of Mike)

| Contributor | Commits |
|---|---:|
| houfu | 95 |
| inteli5 | 13 |
| abbasabro | 6 |
| FallenDeity | 3 |
| eduardocaetano0 | 2 |
| Kaos599 | 2 |
| tharun634 | 2 |
| Six others | 1 each |

→ ~70-75% Houfu / ~25-30% external contributors. Healthy small-OSS distribution.

---

## 7. Friction data — the explanation

_Per user direction: dropping Heppner, ABA UPL, and pro bono framing. The post will not lean on structural friction (privilege, regulation, billable economics). The "why this might be happening" section is now culture- and identity-focused only._

### Personality data (older, deprioritise but available)

Larry Richard (Caliper, n=1,000+ lawyers, original 2002 / condensed 2008):

| Trait | Lawyer percentile / value | Lay average |
|---|---:|---:|
| Skepticism | ~90th | 50th |
| Autonomy | ~89th | 50th |
| Sociability | 12.8% | 50% |
| Resilience | ~30% (long left tail) | 50% |
| Urgency | +20% | baseline |

PCL Risk Type Study 2019 (n=105 lawyers vs 11,900 control):
- Over-represented in "Wary" Risk Type
- Under-represented in "Adventurous"
- Above-average on Methodical, Perfectionistic, Apprehensive, Mistrusting

→ **Possible (but old) visual: lawyer personality radar chart.** Probably skip — Caliper data is 2002 vintage.

---

## 8. Cross-domain onboarding (Part 2 territory but data lives here)

### Bosu et al. 2025 (IEEE TSE 2025, arXiv:2407.04159)

- 1,155 GitHub projects analyzed
- Of 15 commonly-cited newcomer onboarding recommendations: **only 4 positively correlate** with first-patch acceptance
- 4 show **significant negative associations**
- 3 are newcomer-specific (helpful early, harmful later)

→ **Stat callout, no graph needed.** Powerful one-liner: *"Of the 15 'best practices' for onboarding new contributors, only 4 actually work."*

### Milewicz et al. 2020 (arXiv:2003.10572)

- 7 OSS scientific projects + 72-developer survey
- Senior research staff produce **~72% of commits** on average
- Third-party contributors typically contribute for **just one day**

→ Suggests legal OSS could expect a similar shape if it had any structure at all.

### lawyersongithub directory

- ~40 self-identified members
- Accumulated over **15+ years** (started 2009)

→ Older anchor; deprioritise per the cut list.

### AssemblyLine 95/5 distribution

- 9 humans in contributor graph
- 1 lawyer (Steenhuis) carrying 1,229 commits
- Next: BryceStevenWilley 224, plocket 82
- Real 80/20 → 95/5

---

## 9. Open-washing literature — recency-prioritised

### Recent and load-bearing

- OSI *Maintainers* book, **October 2025** — coined "Open Source theatre"
- OSI naming Meta's Llama "open washing", **February 2025**
- Emily Bender on open weights, **April 2025** — *"Open-weight is not open source"*
- OSAID definition fight, **2024-2025** ongoing

### Older (deprioritise)

- Drew DeVault, March 2022 — "source available... if you want a sexier brand"
- Bradley Kuhn, October 2018 — "open-in-name-only"
- Michelle Thorne, March 2009 — coined "openwashing"

### License-shift case studies (timeline visual potential)

- 2018 — MongoDB → SSPL
- 2021 — Elastic → SSPL/Elastic License
- 2023 — HashiCorp/Terraform → BSL → OpenTofu fork
- 2024 — Redis → SSPL/RSALv2 → Valkey fork
- 2025 — Redis returns to AGPLv3

→ **Possible visual: "What used to be 'open source' moves to 'source available' — a timeline."** Older but illustrative.

---

## 10. Statistics we have but didn't fully exploit

These weren't surfaced in the current draft — worth considering:

1. **Mike at 72 hours vs 9 days** — viral but flat. 1,000+ stars at 72hr → 2,395 at 9 days. PRs merged across all of those days: **0**.

2. **Harvey LAB launch-day ratio** — 1,250 tasks contributed by 3 staff before launch. External contribution after launch: 2 unreviewed PRs. Pre-launch:post-launch contribution ratio: ∞.

3. **OpenSALT 49:1 dependabot ratio** — visceral pie chart for Part 2.

4. **redlines vs Mike PyPI delta** — 156 stars / 220,000 monthly downloads vs Mike's 2,395 stars / no comparable runtime user metric. 1,400× usage-per-star inversion.

5. **The "0 stars across top 10 most-active forks" detail** — even the people *building on Mike* aren't being noticed.

6. **Watchers count — 34** — the people who care enough to be notified. Reframes 2,395 stars as performative.

7. **Mike fork compounding** — at 72 hr there were 300+ forks; at 9 days 675 forks. Forks doubled in 6 days. Merged PRs: 0.

8. **FLP Juriscraper outside-vs-staff ratio** in the last 9 days — outside contributors (grossir, MorganBennetDev) out-shipped staff. The healthy fork pattern in the wild.

9. **Houfu's 9-merged-PR-over-9-years timeline** — 9 dots across 9 years, ending in 23-month silence. Personal data visual.

---

## Charts referenced in Part 1 draft (post-aligned spec — 2026-05-09)

The Part 1 draft (`lawyers-not-on-each-others-code.md`) has four chart placeholders. Each filename is the bare `.svg` placeholder in the post. Specs below.

### `mike-fork-mosaic.svg` (§2 — Mike, in nine days)

**Job**: Visualise Mike's fork distribution to drive home that 91 of 100 sampled forks are byte-identical bookmarks, not contributions.

**Type**: Mosaic / treemap (preferred), or stacked horizontal bar.

**Data** (from §1 above):
- 87 byte-identical forks (largest tile)
- 4 size-modified but 0 commits ahead
- 4 with 1-9 commits ahead
- 4 with 10+ commits (genuine divergence)
- 1 diverged history (Turkish localisation)

**Caption suggestion**: *"Mike has 675 forks. I sampled the most recently active 100. 87 are byte-identical to upstream. 4 have meaningful divergence."*

### `legal-oss-stars-vs-merges.svg` (§3 — The Mike pattern persists)

**Job**: Show the structural shape across legal-OSS repos: stars (popularity, easy) vs merged-non-author pull requests (community engagement, hard). The visual punchline: most lawyer-built launches accumulate stars without accumulating external contributions — exactly Mike's shape. A few projects break the pattern (redlines as a modest exception, FLP/Docassemble at scale).

**Type**: Horizontal grouped bar chart, log scale on the count axis. Two bars per repo: one for stars, one for merged-non-author PRs.

**Axes**:
- **Y**: Repo names (anonymised where the post does not name them)
- **X**: Counts (log scale to fit 0 → 2,800)

**Two bars per row**:
- **Stars** — repo's GitHub star count
- **Merged non-author PRs** — pull requests merged into the repo where the author is NOT the repo owner / not on the maintainer team. This is the load-bearing column: it measures actual community contribution, not popularity.

**Reference structure**: a horizontal line or shading band separating "Mike-pattern" repos (top of chart, big star bar / tiny merge bar) from "community-pattern" repos (bottom of chart, both bars proportional).

**Data** (queried 2026-05-09 via `gh api` and `gh api graphql`):

| Repo (anonymise as marked) | Stars | Merged total | Merged non-author | Notes |
|---|---:|---:|---:|---|
| Mike (`willchen96/mike`) | **2,535** | 3 | **2** | both from one external contributor (fayerman-source) — invited collaborator |
| Harvey LAB (`harveyai/harvey-labs`) | **219** | 41 | **0** | all 41 from staff or pre-invited research collaborators |
| Harvey biglaw-bench (`harveyai/biglaw-bench`) | **145** | 1 | **0** | the one merged PR is a README link fix from a Harvey researcher |
| Anonymous lawyer-built repo A (jamietso/Tabular_Review) | 53 | 2 | **2** | external — community of two |
| Anonymous lawyer-built repo B (jamietso/RedlineNow) | 39 | 0 | **0** | |
| Anonymous lawyer-built repo C (yuch85/contract-playbook-ai) | 34 | 0 | **0** | |
| Anonymous lawyer-built repo D (yuch85/word-ai-redliner) | 26 | 0 | **0** | |
| Anonymous lawyer-built repo E (veronica-builds/emilie) | 23 | 0 | **0** | fork-as-rebrand of Mike |
| Anonymous lawyer-built repo F (AnsonLai/Gemini-AI-for-Office) | 16 | 0 | **0** | |
| **`houfu/redlines`** (the modest counterexample) | **156** | 37 | **~12** | external community of 12, capped at 100 most-recent |
| LexPredict / `lexpredict-lexnlp` (older corporate-led) | 776 | 13 | ~few | mostly LexPredict employees; corporate-publish pattern |
| `jhpyle/docassemble` (community survivor — Part 2 territory) | **942** | **453** | **many** | Jonathan Pyle + 43 contributors over 10 years |
| `freelawproject/courtlistener` (community survivor — Part 2 territory) | **911** | **2,798** | **many** | top external committers: Colinstarger (44 of last 100), voutilad (18), davidxia (15) |

**Visual suggestions**:
- Group rows into three visual bands (with shading or section dividers):
  1. **Mike pattern, vibe-coded launches** (Mike, Harvey LAB, biglaw-bench, anonymous lawyer-built A–F): stars >> merged-non-author. *"Performative open."*
  2. **Modest counterexample** (redlines): stars and merged-non-author both visible. *"Honest small-scale OSS."*
  3. **Community-pattern survivors** (Docassemble, CourtListener): both bars long. *"Part 2 covers what they do differently."*
- Bold or colour-emphasise the stars bar where merged-non-author = 0, to make the absence visceral.
- For the named survivors at the bottom (Docassemble, CourtListener), use long bars that visually "earn" the comparison — the reader should see both the star count *and* the merged-PR count are large.
- For Mike at the top, the star bar should run nearly the full chart width; the merged-non-author bar should be a barely-visible sliver.

**Anonymity note**: Mike, Harvey LAB, biglaw-bench, redlines, Docassemble, and CourtListener are named in the post text — keep them named in the chart. The 6 lawyer-built repos labelled A–F are not named in the post; render them anonymously ("Vibe-coded launch A," "Hackathon output B," etc.) to match.

**Caption suggestion**: *"Stars are not contributions. Most lawyer-built legal-OSS repos accumulate stars without accumulating outside committers. The two projects that did — Docassemble and Free Law Project's CourtListener — earned that ratio over a decade. Part 2 looks at how."*

**Source data**: queried 2026-05-09 via `gh api repos/{owner}/{name}` and `gh api graphql` for PR-author breakdowns. Merged-non-author counts are within the GraphQL 100-node cap for the most-recent merged PRs; for repos with > 100 merged PRs lifetime (Docassemble 453, CourtListener 2,798, AssemblyLine 458), the displayed merged-non-author count is a lower bound — the actual external-contributor share is at least as high as what the first 100 nodes show.

---

### Supplementary: handle-level scatter data

The handle-level scatter data we collected for an earlier version of this chart (90 handles across LegalQuants, LawyersOnGitHub, and active veterans, with profile-age-normalised PR rates) lives in `raw/lawyer-coder-pr-scatter.tsv`. It's not used for the §3 chart any more, but the data is rigorous and may be useful for:
- A supplementary chart in Part 2 (showing the cohort distribution as part of the "what survivors do differently" diagnosis)
- A standalone post on the lawyer-coder population
- Cross-reference verification when the post claim about "the broader landscape" is challenged

Key finding from that scatter: 74% of LegalQuants handles file zero non-self merged PRs per year (age-normalised); 90% of LawyersOnGitHub handles do at least some non-self contribution per year — but the LawyersOnGitHub cohort skews developer-first (Lift creator, 18F alumni, GitHub Inc. employees), so the contrast reflects population type more than year-of-cohort.

The detailed handle-level data table, cluster analysis, and rate-axes visual brief that supported that earlier scatter spec remain documented below in the supplementary block (data is preserved for reuse but is no longer the §3 chart).

**Data table** (from gh API queries, 2026-05-09):

| Handle (anonymise in chart) | Category | Lifetime PRs | Non-self merged | Notes |
|---|---|---:|---:|---|
| jamietso | LQ founder | 0 | 0 | |
| techie-ray | LQ member | 0 | 0 | |
| houfu | The author | **137** | **10** | |
| leondelnawaz | LQ member | 0 | 0 | |
| yuch85 | LQ member | 4 | 2 | non-self merges all to ragflow (general OSS) |
| AnsonLai | LQ member | 18 | 0 | all to own repos |
| sarturko-maker | LQ member | 0 | 0 | |
| case-thread | LQ member | 0 | 0 | |
| Tucuxi-Inc | LQ member (org) | 0 | 0 | |
| Weijtmans | LQ member | 7 | 3 | |
| joshwong197 | LQ member | 15 | 0 | all to own repos |
| terracottalabs | LQ member (org) | 0 | 0 | |
| noamrazbuilds | LQ member | 1 | 0 | |
| thegreatsze | LQ member | 0 | 0 | |
| RelentlessLeivas | LQ member | 0 | 0 | |
| ebobferraris | LQ member | 3 | 3 | small but on diagonal |
| eternalBackPain | LQ member | 4 | 0 | |
| KenPriore | LQ member | 0 | 0 | |
| LeonardHope | LQ member | **39** | 0 | all to own repos — far below diagonal |
| parthsagdeo | LQ member | 0 | 0 | |
| foolish-bandit | LQ member | **141** | **1** | mostly own repos — far below diagonal |
| ams-ca | LQ member | 0 | 0 | |
| antoine-louis | LQ member | 0 | 0 | |
| rafal-fryc | LQ member | 13 | 0 | all to own repos |
| SaifAlYounan | LQ member | 1 | 0 | |
| DC3044 | LQ member | 0 | 0 | |
| kevanwee | LQ member | 26 | 3 | |
| zjing7843-prog | LQ member | 1 | 0 | |
| rolldabones | LQ member | 0 | 0 | |
| oliverschmidtprietz | LQ member | 0 | 0 | |
| rlfordon | LQ member | 11 | 3 | |
| technocrat | LQ member | 10 | 3 | |
| veronica-builds | LQ member | 0 | 0 | |
| tanko-r | LQ member | 12 | 0 | all to own repos |
| admiral-cs | LQ member | 0 | 0 | |
| AndriusPetrenas | LQ member | 0 | 0 | |
| davidliudev | LQ member | 2 | 0 | |
| ranjitharangaswamy | LQ member | 5 | 0 | |
| DharmaSadasivan | LQ member (probable) | 0 | 0 | |
| drewmiller | LQ member | 16 | 7 | all 7 are self-product packaging (winget-pkgs, homebrew-cask for own product Tritium) |
| AshleyWinton | LQ member (probable) | 0 | 0 | |
| braveheartjun | LQ member (probable) | 0 | 0 | |
| **damienriehl** | Active veteran | **54** | **44** | all 44 to own/affiliated org (ALEA Institute) |
| **vdavez** | Active veteran | **282** | **208** | mix of own org and external; closest to diagonal |
| **nonprofittechy** | Active veteran | **1000+** | **1000+** | at the gh search cap; LIT/Suffolk/FLP committer |

**Cluster patterns on rate axes** (derived 2026-05-09 from `raw/lawyer-coder-pr-scatter.tsv`, 90 handles).

The rate axes change the visible story in one critical way: **age normalisation removes the "older accounts win by default" bias**. Even after that adjustment, the LegalQuants cohort still clusters near origin while the LawyersOnGitHub cohort spreads up and to the right.

**Per-cohort rate distribution (n=87 usable data; 3 dead accounts as faded markers)**

| Cohort | n | At origin (0/yr filed) | Inward (filed but 0 non-self) | Some non-self (<25% rate) | Substantial non-self (≥25%) |
|---|---:|---:|---:|---:|---:|
| **LegalQuants** | 42 | **20 (48%)** | **11 (26%)** | 3 (7%) | **6 (14%)** |
| **LawyersOnGitHub** | 42 (+3 dead) | 1 (2%) | 0 (0%) | 3 (7%) | **38 (90%)** |
| **Active veterans** | 3 | 0 | 0 | 0 | 3 (100%) |

Read across: **74% of LegalQuants members have zero non-self merged PRs per year**, vs **2% of LawyersOnGitHub members**. Reversed. The two cohorts are doing structurally different things.

**Top LegalQuants per-year rates** (still modest in absolute terms even at the cohort top):

| Handle | PRs/yr filed | Non-self/yr merged | Years on GitHub |
|---|---:|---:|---:|
| yuch85 | 2.72 | 1.36 | 1.47 |
| houfu (the author) | 13.76 | 1.00 | 9.96 |
| foolish-bandit | 104.44 | 0.74 | 1.35 |
| drewmiller | 1.28 | 0.56 | 12.46 (self-product packaging) |
| ebobferraris | 0.49 | 0.49 | 6.12 (on diagonal) |
| kevanwee | 2.50 | 0.29 | 10.38 |
| rlfordon | 1.03 | 0.28 | 10.69 |
| Weijtmans | 0.54 | 0.23 | 12.99 |
| technocrat | 0.59 | 0.18 | 17.07 |

**Top LawyersOnGitHub per-year rates**:

| Handle | PRs/yr filed | Non-self/yr merged | Years on GitHub | Notable |
|---|---:|---:|---:|---|
| batemapf | 31.41 | 8.19 | 11.97 | 18F alum (gov-tech) |
| rschiang | 8.53 | 6.98 | 14.18 | Taiwan FLOSS advocate |
| anseljh | 9.00 | 5.88 | 13.77 | IP litigator who codes |
| adelevie | 45.36 | 5.66 | 16.97 | 18F alum |
| dpp | 7.89 | 5.56 | 17.99 | wrote Lift framework |
| compleatang | 5.17 | 4.19 | 15.28 | Eris Industries CEO |
| maacl | 5.13 | 3.38 | 17.15 | |
| tieguy | 9.89 | 3.10 | 15.17 | Luis Villa, OSS lawyer |
| nzeltzer | 2.28 | 1.88 | 12.74 | |
| benbalter | 76.67 | 1.63 | 15.97 | works AT GitHub Inc. |

**Active-veteran outliers**:

| Handle | PRs/yr filed | Non-self/yr merged | Notes |
|---|---:|---:|---|
| nonprofittechy | 83.54 | 83.54 | LIT/Suffolk/FLP — at gh search cap |
| vdavez | 21.58 | 15.91 | active May 2026 |
| damienriehl | 5.43 | 4.43 | all to own affiliated org (ALEA Institute) |

**Dead accounts** (3 — render as faded markers): 3dIP, vzvenyach, joshuasbailes. The LawyersOnGitHub directory was last updated 2019-06-24 and these handles have been deleted in the 7 years since — itself a finding about the older directory.

**Caveat**: the rate metric is generous to recently-joined accounts. yuch85's 1.36/yr non-self rate is computed over 1.47 years total — a small denominator. foolish-bandit's 104 PRs/yr is over 1.35 years on GitHub, which makes the rate look heroic but is really "many PRs in one short stretch, mostly to own repos." Render rates with care; for handles with <2 years of tenure, consider an asterisk.

**Visual suggestions**:
- Plot all 87 active dots + 3 faded markers for deleted accounts. Reference line: y = x diagonal.
- **Three-colour cohort coding** with a legend:
  - 🟦 **LegalQuants** (active-2026 directory, lawyers learning to code; median 5.1 years on GitHub)
  - 🟩 **LawyersOnGitHub** (frozen-2019 directory; many were developers first; median 14.8 years)
  - 🟧 **Active veterans** (in neither directory; outlier volumes)
- Anonymous anchor points labelled inline: *"the author"* (houfu) so the reader has a calibration point. Optionally a labelled cluster *"18F alumni"* (batemapf, adelevie, benbalter, joshuasbailes) near the upper-right to explain the gov-tech outlier cluster.
- Annotation callouts:
  - *"74% of LegalQuants members file zero non-self merged PRs per year — even after age normalisation."*
  - *"90% of LawyersOnGitHub members do at least some non-self contribution per year — but they're a different kind of lawyer-coder, mostly developers first."*
- Optional: separate small-multiple panels for the two cohorts side-by-side, each with its own diagonal. Helps the reader see the two distributions cleanly.
- **Tenure caveat marker**: render dots for handles with <2 years on GitHub with an asterisk or open marker — their per-year rate is computed on a small denominator and may not reflect sustained behaviour.

**Caption suggestion**: *"Each dot is a lawyer-coder I could find via two public directories of self-identifying lawyer-coders, with axes adjusted for how long each account has been on GitHub. The diagonal is what 'every PR you file goes elsewhere and gets merged' would look like. The 2026 cohort (blue) clusters near origin. The 2009-2019 cohort (green) spreads up and right — but they're a different population: developers who became lawyers, not lawyers who learned to code."*

**Anonymity note**: post text keeps these anonymous. The chart should too — render dots without handle labels, except for "the author" anchor and optionally the "18F alumni" cluster annotation. The full handle-level data lives in `raw/lawyer-coder-pr-scatter.tsv` for verification.

**Source data**: `raw/lawyer-coder-pr-scatter.tsv` (90 rows; columns: handle, population, created_at, years_active, lifetime_prs, lifetime_merged, lifetime_non_self_merged, prs_per_year, non_self_per_year). Pulled via `gh api graphql` queries on 2026-05-09. The non-self count is capped at 100 for handles with >100 lifetime merged PRs (dpp, batemapf, adelevie, benbalter, nonprofittechy) — meaning their per-year non-self rate is a lower bound. Profile creation dates pulled separately via `user(login: $login) { createdAt }`.

---

### Supplementary: wedge beeswarm with affiliation discount (built 2026-05-09 later)

The handle-level data above was rebuilt as a wedge-shaped beeswarm rather than a square scatter. Chart: `lawyer-coder-pr-beeswarm.svg`. Two methodological corrections were applied at the same time, and both are real findings:

1. **The original gh-search 100-cap was removed via paginated `user.pullRequests` queries.** Five handles (dpp, batemapf, adelevie, benbalter, nonprofittechy) had their lifetime non-self merged counts hit the cap; un-capped, their numbers are substantially higher.
2. **An affiliation discount was applied to outliers whose merges concentrate in orgs they're affiliated with** — employer, board role, founded products. This excludes work that is "outward" by repo-owner check but isn't outward in the sense the post argues for.

#### Why a wedge

The data is heavily skewed: 32 of 87 handles sit at non-self rate = 0 (the carpet), with progressively fewer dots at higher rates. A rectangular plot wastes ~50% of its area on the upper region where almost no dot can sit. A trapezoidal frame (840 px wide at the base, 110 px wide at the apex) matches the data shape: dots at the bottom spread across the full width, dots at the top stack near the centre line. The packer was rewritten to actively distribute dots across the available wedge width at each y level rather than clustering near the centre.

#### Affiliation discount table

Affiliated org logins excluded per handle (queried 2026-05-09 via `gh api graphql` with pagination):

| Handle | Cohort | Affiliated org logins excluded | Raw non-self/yr | Post-discount /yr |
|---|---|---|---:|---:|
| nonprofittechy | AV | SuffolkLITLab, LemmaLegalConsulting | 83.54 (capped) | **11.46** |
| batemapf | LoG | 18F | 8.19 (capped) | **13.45** |
| benbalter | LoG | github, jekyll, licensee, wp-document-revisions, presidential-innovation-foundation | 1.63 (capped) | **11.46** |
| adelevie | LoG | 18F | 5.66 (capped) | **8.31** |
| dpp | LoG | lift, liftweb, spice-labs-inc | 5.56 (capped) | **0.67** |
| compleatang | LoG | eris-ltd, monax-io | 4.19 | **4.19** |
| damienriehl | AV | alea-institute, sali-legal | 4.43 | **1.41** |
| mjbommar | AV | alea-institute, LexPredict, 273v | 4.71 | **1.47** |
| Gauntlet173 | AV | Lexpedite | 14.24 | **2.25** |
| colarusso | LoG | SuffolkLITLab | 1.42 | **0.24** |
| JSv4 | AV | Open-Source-Legal, Open-Cap-Table-Coalition, gunderson-dettmer | 55.62 | **0.70** |
| ErichDylus | AV | MetaLex-Tech, lexDAO, api3dao, CamoText | 8.82 | **0.87** |
| mkorpela | LQ | MarketSquare, robotframework, dealfluence | 11.28 | **2.77** |
| danielhoadley | AV | nationalarchives | 0.66 | **0.00** |
| ryanmcdonough | AV | (none — KPMG variants returned 0 PRs) | 1.06 | **1.06** |

Notable findings from the breakdown:

- benbalter's pre-discount 1.63/yr was a cap artefact. Un-capped he runs 31.87/yr raw. Even after discounting GitHub Inc. plus four projects he created or led (Jekyll, Licensee, WP-Document-Revisions, Presidential Innovation Fellows), his post-discount rate of 11.46/yr makes him a genuine outward contributor at scale.
- compleatang held up under scrutiny — 0 PRs to either Eris-related org, 64 PRs to genuinely external community projects (hyperledger-archives, helm, etc.). The discount investigation strengthened his position rather than weakening it.
- For the active veterans whose contributions concentrate in their own orgs (damienriehl 21/44 to ALEA; mjbommar 28/98 to ALEA + 14 to LexPredict + 13 to 273v; nonprofittechy 1169/1452 to Suffolk LIT), the affiliation discount drops their rates substantially. The post's "lawyer-coders mostly contribute to their own orgs, not each other's" framing is sharpened, not weakened.

The cohort callouts (74% LegalQuants at zero, 90% LawyersOnGitHub with at least some) survive intact — no LQ handles are discounted, and all five LoG handles in the discount list still have non-zero post-discount rates.

#### Cohort additions

Two active veterans added to the dataset alongside the original three (damienriehl, vdavez, nonprofittechy):

- **mjbommar** (Michael Bommarito) — ALEA Institute president, 273 Ventures CEO, former LexPredict cofounder. 16.98 years on GitHub, 126 filed, 98 merged, 80 raw non-self.
- **Gauntlet173** (Jason Morris) — Symbolium founder (Blawx, Lexpedite). 11.10 years, 165 filed, 162 merged, 158 raw non-self.
- **JSv4** (John Scrudato IV) — Senior Legal Engineering & Data Strategy Manager at Gunderson Dettmer; leads the Open Cap Table Coalition's Technical Working Group. 12.80 years, 938 filed, 820 merged. The most striking discount in the dataset: raw 55.62/yr drops to 0.70/yr once Open-Source-Legal (his project home), the OCTC (Gunderson's coalition representation), and gunderson-dettmer (his employer) are excluded. Of 820 lifetime merged PRs, 9 are to truly external repos.
- **ErichDylus** (Erich Dylus) — practising attorney (Maryland and DC), founder of Varia Law and CamoText, Product Lead for LeXscroW within MetaLeX, ex-LexDAO member, ex-API3DAO External General Counsel. 6.91 years, 67 filed, 62 merged. After excluding MetaLex-Tech (employer), lexDAO, api3dao, and CamoText, 6 PRs to truly external repos remain. Raw 8.82/yr → discounted 0.87/yr. Same shape as JSv4 but with the additional credential of being a qualified lawyer the whole time.
- **mkorpela** (Mikko Korpela) — added to the LegalQuants cohort. Joined the LegalQuants GitHub org on 2026-05-08 (after the directory snapshot used for the original audit, hence absent from `legalquants-directory-110.md`). Helsinki-based, works at Dealfluence (DOCX redlining tool, Adeu). 16.58 years on GitHub, 1,782 contributions in the last year — heavily active, but his outward contribution is mostly to *Robot Framework* (testing tool) projects under `MarketSquare` and `robotframework` orgs, not legal-OSS. After discounting those two community orgs plus dealfluence (employer), 46 external PRs remain, mostly to `langchain-ai` (23) and other general-OSS projects. Raw 11.28/yr → discounted 2.77/yr. **Caveat: the 2.77/yr does not represent contribution to legal-OSS specifically. Most of his external work is general-purpose dev tooling.**
- **KedalionDaimon** (Nino Ivanov) — Senior Legal Counsel at Oracle (Vienna). 10.02 years on GitHub, **0 lifetime PRs filed against any public repo**. Confirmed lawyer (banking / capital markets / corporate / contract law). The cleanest possible data point for the post's thesis: a senior counsel at a major tech company who maintains a GitHub presence but has never publicly pushed code anywhere. Plotted at the origin. No discount entry needed (raw and discounted both 0).
- **danielhoadley** (Daniel Hoadley) — UK legal-informatics, led the National Archives' Find Case Law project. 12.19 years, 9 filed, 8 merged. **All 8 lifetime merged PRs are to `nationalarchives`** — that's his employer's project. After discount, 0 truly external PRs. Plots at the origin alongside KedalionDaimon. Earlier dropped from the active-veteran candidate list with the comment "doesn't PR enough" — added in here precisely because his pattern (heavy producer, all to employer) is the same finding the post argues for.
- **ryanmcdonough** (Ryan McDonough) — Head of Legal Tech Engineering & AI at KPMG Law. 16.97 years on GitHub. *Not* a qualified lawyer (engineering-titled role; included on the JSv4/mjbommar precedent of "active veteran legal-tech contributor regardless of bar admission"). 44 filed, 24 merged, 18 raw non-self. KPMG GitHub orgs queried (`KPMG`, `kpmg`, `KPMG-LLP-UK`, `KPMGUK`) — *all returned 0 PRs* — so no discount applied; rate stays at 1.06/yr. Methodologically interesting: his 18 external PRs are spread across 14 different orgs (umbraco, JohnSnowLabs, RasaHQ, parse-community, zenorocha, etc.), 1-3 PRs each. That's a *genuinely diverse* contribution profile, structurally different from the discount-heavy outliers, who concentrate in 1-3 affiliated orgs.

Final cohort sizes: LegalQuants n=43 (41 plottable; 2 NA org accounts excluded), LawyersOnGitHub n=45 (42 plottable; 3 NA dead accounts excluded), Active veterans n=10 — total 93 plottable handles.

Daniel Hoadley was considered and dropped per user direction ("he doesn't PR enough").

#### Chart label changes

- **Title**: "How often lawyer-coders contribute to repos they don't own or work for"
- **Y-axis**: "External merged PRs per year (excl. affiliated orgs)" (was: "Non-self merged PRs per year")
- **Subtitle line 3**: "Affiliated orgs (own employer, board roles, founded projects) excluded for {n} outliers" (count is dynamic from the discount-table length)
- **Footer**: methodology footnote referencing the discount

The y = x diagonal in the original scatter is *gone* — at y_cap = 20, almost the entire impossible region is squeezed into a small upper-left triangle and the diagonal added more confusion than insight.

#### Caption suggestion

> Each dot is a self-identifying lawyer-coder. Vertical position is the rate of pull requests they filed that got merged into a repo they don't own and aren't affiliated with (employer, board role, founded projects), per year on GitHub. Affiliated-org work is excluded for ten outliers where it materially affects the count. Most of the dots — including most of the ones who self-identify as legal-tech builders — sit on the bottom edge.

#### Supporting scripts (in post folder)

- `discount-affiliated-prs.py` — queries each handle's merged PRs, buckets by repo owner, prints affiliation breakdown. Used to derive the discount values above.
- `query-new-handle.py` — queries a single handle (createdAt, lifetime PRs, merged breakdown) and outputs a TSV row plus a pre-computed discount entry. Used for adding mjbommar, Gauntlet173, and refining colarusso.
- `affiliation-breakdown.txt` — saved output of the multi-handle discount query.

### `harvey-biglaw-bench-vs-lab.svg` (§4 — Harvey LAB and "Open Source theatre")

**Job**: Two-card comparison anchoring the "jury still out on LAB; verdict already in on biglaw-bench" framing. Each card is a more in-depth contribution-stats display than a basic metrics table — it shows headline numbers, contribution-flow breakdown, infrastructure markers, and a verdict.

**Type**: Two side-by-side info-cards (or stacked on mobile). Each card has 4 stacked sections: *Vital stats* / *Contribution flow* / *Infrastructure* / *Verdict*.

**Data** (queried 2026-05-09 from `gh api repos/harveyai/biglaw-bench` and `gh api repos/harveyai/harvey-labs`):

#### Card A — biglaw-bench (Verdict: locked in)

**Vital stats**
- Created: 2024-08-24 (~21 months ago)
- Last push: 2026-03-17 (~7 weeks ago)
- ⭐ Stars: **145**
- 🍴 Forks: **18**
- 👁️ Watchers: **31**
- 📂 Open issues: 1 (sole issue: a 2025-03 request for "Access to full dataset")

**Contribution flow**
- Total PRs ever filed: **2**
- Merged from Harvey staff: **1** (Anna Zhang, Oct 2025 — README link fix)
- Merged from external: **0**
- Closed unmerged from external: 1 (pavanyellow Dec 2024 — README typo fix)
- Unique external authors who have attempted ever: **1**
- External PR success rate: **0%**
- Total contributors: **3** (all Harvey staff)

**Infrastructure**
- README: yes
- CONTRIBUTING.md: **no**
- License: **none** (default copyright)
- Tagged GitHub releases: **0**
- Package registry: none
- Dataset access: **gated behind contact form**
- Wiki: enabled

**Verdict**: 🔒 **Locked in — 21 months in.** One README link fix from staff. One drive-by typo PR closed unmerged. Dataset gated. Pattern has had two years to set; the contribution graph has not moved.

#### Card B — harvey-labs / LAB (Verdict: jury out)

**Vital stats**
- Created: 2026-03-30 (~6 weeks ago)
- Last push: 2026-05-08 (yesterday)
- ⭐ Stars: **217**
- 🍴 Forks: **42**
- 👁️ Watchers: **5**
- 📂 Open issues: 8

**Contribution flow**
- Total PRs ever filed: **55**
- Merged from Harvey staff/invited collaborators: **41**
- Merged from external: **0**
- **Open from external**: 5 (filed in the launch buzz window — awaiting review; oldest 2 days)
- Closed unmerged from external: 0
- Unique external authors who have attempted: **4** (kevanwee, charlieoneill11, Abid-cognida, renantrendt)
- External PR review status: **pending — none reviewed yet**
- Total unique contributors: **13** (9 staff/invited, 4 external; only 9 with merged commits)

**Infrastructure**
- README: yes
- CONTRIBUTING.md: **yes**
- License: **MIT**
- Tagged GitHub releases: **0**
- Package registry: pyproject.toml present (`uv.lock`) — not yet published to PyPI
- Dataset access: **open**
- Tutorial doc: yes
- Architecture doc: yes
- Named research partners: yes

**Verdict**: ⏳ **Jury still out — 6 weeks in.** CONTRIBUTING.md present. 5 external PRs awaiting review. The comparison with biglaw-bench closes at ~12 months — that's when we'll know whether LAB is the new shape or the old shape with new packaging.

#### Footer comparison row (optional)

| What separates "verdict locked" from "jury out" | biglaw-bench | LAB |
|---|---|---|
| Months since launch | 21 | 1.5 |
| External PRs merged | 0 | 0 |
| External PRs awaiting review | 0 | 5 |
| External authors who have attempted | 1 | 4 |
| Maintainer responsiveness window | "we'll know in 12 months" | (closed — pattern set) |

**Caption suggestion**: *"At 21 months, `biglaw-bench` has produced one merged pull request from Harvey staff and the dataset is still gated. LAB is six weeks old, has external PRs awaiting review, and the verdict isn't in yet. The longer-running comparator is the one that should give us pause."*

**Visual suggestions**:
- Two cards, equal width, with the same section structure (Vital stats / Contribution flow / Infrastructure / Verdict). Identical row labels make differences pop.
- Use traffic-light colour for the verdict footer: red lock for biglaw-bench, amber clock for LAB.
- Bold the load-bearing numbers in the Contribution flow section: external merged 0/0, external PRs awaiting 0/5, external success rate 0%/(pending).
- Ensure the *21 months / 6 weeks* age delta is visually unmistakable.

**Anonymity / naming note**: external author handles are public on the repo; naming them in the chart is fine but optional. For the post the names don't matter — what matters is the count (4 external authors, 0 merged, 5 awaiting).

### `personal-vs-community-codebase.svg` (§5 — graduate from demo to codebase)

**Job**: Show the infrastructure delta between a typical Mike-pattern repo and a community codebase. Use redlines as the lived specimen.

**Type**: Feature-matrix comparison table-as-image (two columns of checkboxes/values).

**Data**:

| Infrastructure marker | Typical Mike-pattern repo | redlines |
|---|---|---|
| CONTRIBUTING.md | none | yes |
| `good first issue` label (curated) | none | partial |
| Tagged GitHub releases | 0 | 9 |
| Public package registry | none | PyPI v0.6.1 (12 releases) |
| CI matrix (multi-version) | none | Python 3.10–3.14 |
| Monthly downloads | not measurable | 220,000 |
| Unique external contributors | 0–1 | 12 |
| Maintainer last commit | 2–6 months ago | active (within last 30 days) |
| Issues respond-to-time | indefinite | days, sometimes hours |

**Caption suggestion**: *"The gap between a personal project and a community codebase isn't talent. It's the unglamorous mechanics of accommodating users."*

---

## Recommended graph commission spec — priority order

For the post's spine. Each visualization listed with the data it draws from above and the rhetorical job it does.

### TIER 1 — Must-have (the post's data spine)

**Graph A: Stars vs Merged PRs across legal OSS** (Section 4 anchor)

Type: Horizontal grouped bar chart, log scale.

Axes: Y = project name, X = count (stars and merged PRs as two bars per project, log scale).

Data:

| Project | Stars | Merged PRs |
|---|---:|---:|
| Mike | 2,395 | 0 |
| LexNLP | 776 | 13 |
| Tabular_Review | 52 | 2 |
| Harvey biglaw-bench | 143 | 1 |
| **redlines** | **156** | **37** |
| **Docassemble** | **941** | **452** |
| **CourtListener** | **911** | **2,786** |

Shading: green for "real ratio," red/grey for "performative open."

Caption: *"Stars are not contributions. Two projects with similar star counts can have radically different community shapes."*

**Graph B: 9-handle audit** (Section 4 anchor)

Type: Table-as-image with column-of-zeros highlighted.

Data: The 9-handle table from §4 above, anonymised handles ("LegalQuants member A/B/C," "Active veteran A/B/C," "Houfu").

Caption: *"Of nine GitHub handles audited, zero have a merged pull request to a peer's legal-OSS repo in the last twelve months."*

**Graph C: Mike's fork distribution** (Section 4 supporting visual)

Type: Stacked horizontal bar OR donut chart.

Data: 91 / 4 / 4 / 1 from §1 above.

Caption: *"Mike has 675 forks. I sampled the most recently active 100. 87 of them are byte-identical to upstream."*

### TIER 2 — Strong if budget allows

**Graph D: LegalQuants classification breakdown**

Type: Pie or donut chart.

Data: 0 thriving / 4 active solo / 5 signaling / 6+ portfolio (n=15 substantive repos).

Caption: *"Of 110 LegalQuants directory members, ~6 maintain a substantive public repo. Of those repos, the dominant pattern is signaling, not building."*

**Graph E: Houfu's 9-merged-PR-over-9-years timeline**

Type: Sparse timeline / dot plot.

Data: 9 merged-PR dates from §4 above, with the 23-month gap to today highlighted.

Caption: *"Nine merged contributions to other people's repositories in my entire GitHub history. The last one was twenty-three months ago."*

**Graph F: Mike's 72hr → 9-day trajectory**

Type: Two-line chart (stars and forks growing) overlaid with a flat line (merged PRs at zero).

Data: (0, 0, 0) → (3 days, 1000, 300) → (9 days, 2395, 675), merged PRs = 0 throughout.

Caption: *"Mike's stars and forks compounded for nine days. The merged-pull-request line never moved."*

### TIER 3 — Nice-to-have (Part 2 territory)

**Graph G: OpenSALT 49:1 dependabot ratio** — visceral Part 2 visual.

**Graph H: redlines contributor distribution** — the inverse of Mike, Part 2 territory.

**Graph I: License-shift timeline** — 2018 MongoDB → 2025 Redis returns to AGPL. Older material but illustrates the openwashing trend visually.

---

## Stat callouts (no graph, prose-emphasis treatment)

These deserve pull-quote / stat-card treatment:

> **0 of 9** GitHub handles audited have a merged pull request to a peer's legal-OSS repo in the last twelve months.

> **1 of 110** LegalQuants directory members maintains a repo with double-digit external merged PRs and meaningful package-registry distribution.

> **49 of 50** of OpenSALT's most recent closed pull requests are dependabot. (Part 2)

> **2,786 vs 0** — CourtListener's merged PR count vs Mike's, both with comparable stars.

> **Of the 15 "best practices" for onboarding new contributors, only 4 actually work.** (Bosu et al. 2025)

> _(Pro bono callout removed per user direction.)_

---

## Gaps in the research (statistics we *could* go get)

Surfaced for completeness — Houfu can decide whether any are worth going back for:

1. **Per-PR analysis of Mike's 22 closed PRs** — we have aggregate counts but not the content. Would let us say e.g. "of the 6 closed-not-merged, X were security fixes that went unanswered."
2. **Harvey biglaw-bench's 1 merged PR** — what was it? Probably trivial; would either confirm or surprise.
3. **Time-to-first-response benchmark** — legal OSS PRs vs scientific OSS PRs vs general OSS PRs. Would require sampling.
4. **AGPL adoption rate in legal OSS vs other domains** — could be quick gh search.
5. **Lawyer GitHub population vs general developer population** — denominator question. Hard.
6. **Daily Mike growth (not just 72hr / 9 day)** — would need GitHub star history API. Cheap if relevant.
7. **Singapore / ASEAN-specific legal OSS contribution data** — dropped earlier (Bucket 7), worth revisiting if Singapore framing matters.
8. **Comparative metrics for civic tech adjacent (Code for America, USDS)** — different domain but might illustrate "the lawyer-coder gap" by contrast.
