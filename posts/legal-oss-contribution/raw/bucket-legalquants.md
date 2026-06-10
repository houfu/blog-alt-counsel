# Bucket Q: legalquants.com directory — OSS reality check (as of 2026-05-08)

## What's in the directory

LegalQuants publishes **110 member entries** on its homepage. Each card has name, role, location, bio, tool list, "View profile →". The directory does **not** advertise GitHub usernames as a field — only Veronica Lopez surfaces a github.com URL, and only because she mentioned it in prose.

"Is this open source?" has to be answered by cross-referencing names and project titles against GitHub. The verifiable universe is **~6 of 110 members with non-trivial GitHub presence**, another ~5 with empty accounts, and ~99 publishing via Marketplace add-ins, Streamlit/Vercel/Replit demos, or member-page screenshots — not source code.

## Metrics table — most substantive repos

| # | full_name | created | last push | stars | forks | contribs | merged PRs | license | language | classification |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | jamietso/Tabular_Review | 2025-11-23 | 2026-01-27 | 52 | 20 | 3 | 2 | MIT | TS | Active solo |
| 2 | jamietso/RedlineNow | 2025-12-06 | 2025-12-07 | 38 | 15 | 1 | 0 | MIT | TS | Signaling |
| 3 | jamietso/SignaturePacketIDE | 2025-11-28 | 2026-01-04 | 24 | 17 | 1 | 0 | MIT | TS | Signaling |
| 4 | jamietso/ChartAI | 2025-12-05 | 2026-01-04 | 2 | 4 | 2 | 1 | MIT | TS | Individual portfolio |
| 5 | yuch85/contract-playbook-ai | 2025-12-05 | 2025-12-15 | 34 | 10 | 1 | 0 | (custom) | TS | Signaling |
| 6 | yuch85/word-ai-redliner | 2026-01-21 | 2026-04-29 | 26 | 6 | 2 | 0 | MIT | JS | Active solo |
| 7 | yuch85/superdoc-redlines | 2026-02-03 | 2026-02-11 | 21 | 6 | 1 | 0 | Apache-2.0 | JS | Signaling |
| 8 | yuch85/office-word-diff | 2026-01-21 | 2026-01-24 | 14 | 2 | 2 | 0 | Apache-2.0 | JS | Active solo |
| 9 | yuch85/sgcite | 2026-02-10 | 2026-02-11 | 4 | 1 | 2 | 0 | MIT | JS | Individual portfolio |
| 10 | veronica-builds/emilie | 2026-05-04 | 2026-05-04 | 23 | 9 | 2 | 0 | AGPL-3.0 | TS | Signaling (fork of Mike) |
| 11 | veronica-builds/Court-Decision-Extractor | — | 2026-05-01 | 1 | 1 | — | — | — | Py | Individual portfolio |
| 12 | veronica-builds/Court-Filing-Analyzer | — | 2026-04-24 | 1 | 0 | — | — | — | Py | Individual portfolio |
| 13 | terracottalabs/hkcr (Rocky Li) | 2026-01-10 | 2026-01-10 | 5 | 1 | 1 | 0 | MIT | TS | Individual portfolio |
| 14 | techie-ray/global-ai-reg-tracker-api-python (R. Sun) | — | 2025-03-23 | 1 | 0 | 1 | 0 | — | Py | Individual portfolio (API client; tracker itself is closed) |
| 15 | houfu/redlines | 2022-02-12 | 2026-03-28 | 156 | 18 | 13 | 37 | MIT | Py | Active solo (closest to "real") |

(Stopped at 16; everything past this either has no public repo, a generic-name github account collision, or a member-page-only project URL on Vercel/Replit/Marketplace.)

## Classification breakdown

Across ~16 substantive repos from ~6 distinct authors:

- **Thriving (≥5y, multi-contributor, >50 merged PRs):** 0
- **Active solo (maintainer-led, occasional external PRs, real distribution):** 4 — `houfu/redlines`, `yuch85/office-word-diff`, `yuch85/word-ai-redliner`, `jamietso/Tabular_Review`
- **Signaling (≤1 merged PR, mostly stars/forks):** 5 — `RedlineNow`, `SignaturePacketIDE`, `contract-playbook-ai`, `superdoc-redlines`, `emilie`
- **Individual portfolio (demos, hackathon code, near-zero stars):** 6+ — most of `veronica-builds/*`, `terracottalabs/hkcr`, `techie-ray/*`, `yuch85/sgcite`, `jamietso/ChartAI`
- **Stale / Corporate-published:** 0 visible (most repos <6 months old)

Dominant pattern: **demo-ware with prominent stars and minimal external contribution.** For the ~104 entries with no public repo, the question isn't "signaling?" — it's "did they ever intend to publish at all?"

## Aggregate signals

Across the 15 LQ-native repos (excluding `houfu/redlines` to isolate the cohort):

- **Medians:** 13 stars, 4 forks, 2 contributors, **0 merged PRs**
- **Repos ≥100 merged external PRs (FLP threshold):** 0
- **Repos ≥10 merged PRs:** 0
- **Repos on PyPI/npm as first-party publications:** 0 verified
- **Recent activity (last 90 days):** ~6 (Jamie Tso's set is now 5 months stale)
- **Created in the last 12 months:** 14 of 15

The headline: **of 110 directory members, exactly 1 (Houfu) maintains a repo with double-digit external merged PRs and meaningful package-registry distribution.** Two more (Jamie Tso, Yu Chou Teo) run active-solo repos with multi-thousand stars-of-attention but ≤2 merged PRs each.

## Conclusions

**LegalQuants is not a community-OSS ecosystem. It's a portfolio-display ecosystem.** The directory is structurally not built for OSS — no GitHub field, no license filter, no contribution graph, no shared repo namespace. Members get reputation from "X tools, Y forks, Z views on demo," not from merged PRs or downstream dependents. Legitimate community design — but not what we mean by "open source community."

**Where it sits between Mike/Harvey and redlines/FLP:** Closer to Mike than to FLP. `RedlineNow` and `SignaturePacketIDE` follow the Mike pattern exactly — MIT-licensed, public source, 38/24 stars, 15/17 forks, **zero merged PRs in 5 months**. Forks are bookmarks. `contract-playbook-ai`: 34 stars, 10 forks, 1 contributor, 0 merged PRs. The repos are technically open; the contribution surface is closed by neglect.

**Honest exceptions:** `houfu/redlines` (predates LegalQuants by 3 years, on PyPI with 13 contributors and 37 merged PRs — would exist regardless) and Yu Chou Teo's `office-word-diff` / `word-ai-redliner` (2 contributors each, recent pushes — early signs of active-solo onboarding). Neither approaches FLP. Both clear the redlines bar of "I will respond to PRs and reject them with reasoning." Everything else is too new to judge, or already showing the Mike pattern.

## Notable individual projects

- **`houfu/redlines`** — only repo in the LegalQuants orbit meeting the redlines/FLP bar of real distribution + responsive maintainer + multi-contributor history. 156 stars, 37 merged PRs, 13 contributors, 219K monthly PyPI downloads. Covered in `bucket-redlines.md`.
- **`yuch85/office-word-diff` + `word-ai-redliner`** — Office.js diff library + redliner add-in. 14+26 stars, 2 contributors each, recent activity. Most credible "becoming-active-solo" candidate from the LQ cohort. Worth watching.
- **`jamietso/Tabular_Review`** — LegalQuants founder's own MIT-licensed Harvey/Legora reproduction. 52 stars, 20 forks, **2 merged PRs in 5 months, 3 contributors total.** Canonical Mike-pattern: founder publishes, community forks for adoption, no one PRs back. 160K demo views translate into roughly zero upstream contributions.
- **`veronica-builds/emilie`** — 4-day-old AGPL-3.0 fork of Mike, 23 stars / 9 forks already. Fork-as-rebrand, not fork-as-contribution. No PRs back to Mike visible.

## Caveats

- **Username collisions are heavy.** `kevin-keller`, `anson-lai`, `Noam-Raz`, `DamienCharlotin`, `NikitaPolyakov`, `rocky-li`, `TristanTan`, `rubenstein` all exist as accounts but either have 0 public repos or belong to different people. LQ members either don't use GitHub publicly, use unguessable handles, or publish under firm-named orgs (Rocky Li → `terracottalabs` was a lucky search hit).
- **Microsoft Marketplace add-ins** (Anson Lai's Gemini for Office, Joshua Wong's Word add-ins, Sze Yao Tan's Offline Redactor) may have associated repos I couldn't find. Marketplace pages don't link to GitHub.
- **Hackathon code** (LQ001/LQ002 cohorts) plausibly lives on Replit/Vercel without GitHub mirrors. Counted as "no public repo."
- **Noam Raz's bio claims "open-sourced 28 tools"** — couldn't find one via name or username search. Either under an org I can't guess, or "open-sourced" means "shared on Vercel."

## Source list

Directory: <https://www.legalquants.com/#directory>. Repo URLs follow the standard `https://github.com/{owner}/{repo}` form for every entry in the metrics table.
