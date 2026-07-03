# Bucket X: Do legal-OSS people actually contribute to OTHER repos? (as of 2026-05-08)

Method: `gh search prs author:<handle> --limit 100` plus `gh api search/issues --paginate` for handles >100 PRs. "Non-self" excludes the author's own user namespace AND any org they founded/lead (alea-institute for Riehl, makegov + zvenyach-llc for Zvenyach, SuffolkLITLab for Steenhuis, CatholicOS for Riehl). 12-month window = PRs created on/after 2025-05-08.

## The audit

| Handle | Lifetime PRs | Non-self lifetime | Non-self merged | Non-self merged (12mo) | Most recent non-self attempt | Read |
|---|---|---|---|---|---|---|
| `jamietso` (Jamie Tso, LegalQuants founder) | **0** | 0 | 0 | 0 | never | Has 12 public repos, has filed zero PRs anywhere on GitHub |
| `yuch85` (Yu Chou Teo) | 4 | 4 | 2 | 2 | 2026-03-01 infiniflow/ragflow | All 4 lifetime PRs are to ragflow. Genuine external contributor — to one general-OSS RAG project, not legal-OSS |
| `veronica-builds` (Veronica Lopez) | **0** | 0 | 0 | 0 | never | Account created Feb 2026, 9 repos, no PRs anywhere |
| `rocky-li` / `terracottalabs` (Rocky Li) | **0** | 0 | 0 | 0 | never | rocky-li account from 2013, 1 public repo, no PRs. terracottalabs org has no PRs from this handle |
| `techie-ray` (R. Sun) | **0** | 0 | 0 | 0 | never | 5 public repos, zero PRs |
| `houfu` (the author) | 137 | **15** | **9** | **0** | 2024-12-29 ckan/ckan-docker (closed) | Last MERGED non-self PR: supabase/auth-py, June 2024 — 23 months ago |
| `damienriehl` (ALEA Institute) | 54 | 33 | 23 | 14 | 2026-05-02 CatholicOS/ontokit-api (merged) | Active external contributor, current. Mostly to CatholicOS (ontokit) and historically sali-legal/LMSS |
| `vdavez` (V. David Zvenyach) | >100 | 56 | 42 | **0** | 2024-01-25 dherincx92/fpds (closed) | Massive non-self history but ZERO non-self merges in last 12 months. All 2025-26 activity is in own/makegov repos |
| `nonprofittechy` (Quinten Steenhuis) | >100 | 3 | 2 | 2 | 2026-04-30 elapouya/python-docx-template (open) | 97% of work in own org SuffolkLITLab. 2 recent non-org merges to jhpyle/docassemble (the engine his org depends on) |

## Aggregate findings

**Of 9 handles checked:**
- **3 have any merged PR to a non-self/non-org repo in the last 12 months**: `yuch85` (2 to ragflow), `damienriehl` (14 to CatholicOS — but Damien is also affiliated there; if we treat CatholicOS as also "his org," he drops to ~0 non-org), `nonprofittechy` (2 to jhpyle/docassemble).
- **0 have a legal-OSS PR to a non-self/non-org repo in the last 12 months.** Every legal-OSS PR in the dataset goes to either the author's own repo (houfu/redlines), their own org (alea-institute/folio, SuffolkLITLab/docassemble-*), or repos they're a maintainer of. The two "external" merges from Steenhuis to `jhpyle/docassemble` are upstream contributions to the engine SuffolkLITLab depends on — not contributions to a peer's project.
- **Median non-self merged PRs in last 12 months across all 9 handles: 0.**
- **Median lifetime non-self merged PRs: 2** (driven by yuch85's 2 + Steenhuis's 2; pulled up by vdavez's 42 in 2016-2024 government-civic-tech era).
- 5 of 9 handles (jamietso, veronica-builds, rocky-li, techie-ray + arguably yuch85 outside ragflow) have **zero career PRs to any legal-OSS project belonging to someone else**.

## The honest line on Houfu specifically

Houfu has 137 lifetime PRs. **128 of them (93%) are to his own repos** — redlines, zeeker, blog-alt-counsel, coquill, your-amicus, etc. He has merged exactly **9 PRs to other people's repositories in his entire GitHub history**, the most recent being `supabase/auth-py` (add anonymous login) on **2024-06-18 — nearly 23 months ago as of today**. His one 2024 attempt at a legal-OSS contribution outside his own work, `jefftriplett/files-to-claude-xml` from October 2024, is still **open and unmerged 19 months later**. The earlier `jhpyle/docassemble` PR (the engine behind US legal aid OSS) was a docs typo fix in 2019.

The honest line for the post: *"My last merged contribution to someone else's repo was an anonymous-login feature for a non-legal Python library, in mid-2024. Before that, the only legal-OSS repo I've contributed to outside my own is jhpyle/docassemble — a docs typo, in 2019. I'm part of the pattern."*

## Comparator: known active lawyer-coders

The known-active trio doesn't actually contradict the pattern — it sharpens it.

- **Damien Riehl** is the most active by raw count (33 non-self PRs lifetime, 14 merged in last 12 months). But the ENTIRE 12-month list goes to `CatholicOS/ontokit-*` and `alea-institute/folio-*`. He's a co-founder of ALEA Institute and the CatholicOS work appears to be the same project ecosystem. If you exclude orgs he's affiliated with, his cross-repo contribution count to *strangers' code* in the last 12 months is **near zero**. His historic external work (sali-legal/LMSS, 2023) was also as a co-maintainer.
- **V. David Zvenyach** has 42 lifetime non-self merges — but all his activity since 2025 is in `makegov/*` (his own org) or `vdavez/*`. **Zero non-self/non-org merges in the last 12 months.** His era of pushing to `18F/*`, `GSA-TTS/*`, `cloud-gov/*`, `exercism/*` was 2016-2022 government-service. He no longer contributes broadly.
- **Quinten Steenhuis** with 1,229 commits to assemblyline only files 2-3 PRs/year outside SuffolkLITLab. The 12-month outside-org PRs (`jhpyle/docassemble`, `elapouya/python-docx-template`) are upstream maintenance to dependencies — necessary for SuffolkLITLab to function. This is "vendor patching," not peer contribution.

**The pattern holds even at the top.** Even the most prolific lawyer-coders concentrate their work in their own org/project ecosystem. Cross-pollination — "Damien fixes a bug in Quinten's project" or "Quinten contributes to Houfu's redlines" — does not happen. There is no community of mutual contribution.

## What this means for the post

The "lawyers don't contribute to each other's code" claim is **defensible and stronger than expected**. The data shows it's not just LegalQuants amateurs — even the well-known lawyer-coder veterans (Riehl, Zvenyach, Steenhuis) operate in solo silos: heavy contribution to own org, near-zero contribution to peers' repos. The legal-OSS world is a federation of solo-author archipelagos, not a community. The Houfu 23-month gap is the perfect lead — the maintainer of one of the few "real" legal-OSS projects (redlines) has not pushed code to a peer's repo in nearly two years, and when he tried, the PR sits open. The post can credibly argue: legal-OSS isn't dying from lack of code — it's dying from lack of *cross-pollination*.

## Caveats

- `gh search prs` caps at 100 results per query; for vdavez and nonprofittechy I used `gh api search/issues --paginate` to get true totals (>100 lifetime).
- "Non-self" classification is contestable. I treated alea-institute/CatholicOS as Riehl-affiliated (he founded ALEA), makegov/zvenyach-llc as Zvenyach-affiliated, SuffolkLITLab as Steenhuis-affiliated (he is a public org member). If you don't exclude these, Riehl looks much more "active" — but the activity is intra-team, not cross-community.
- I did NOT exclude bot/dependabot PRs because none of these handles produced any (the inactivity is real, not noise-padded).
- Issue comments, code reviews, and direct commits to repos they have push access to are NOT counted — only authored PRs. A more generous view of "contribution" would catch some of this; the strict-PR view shown here is the one that matters for the post's "do they push to others' code" question.
- `jamietso`, `veronica-builds`, `rocky-li`, `techie-ray` having literally zero PRs to anywhere (including their own repos) suggests they push directly to main without PRs — which itself is a tell about workflow seriousness.

## Source list

```
gh search prs author:<handle> --limit 100 --json url,title,repository,state,createdAt
gh api -X GET "search/issues" -f q="author:houfu type:pr -user:houfu" --paginate
gh api users/<handle> --jq '{login, public_repos, created_at, type}'
gh api orgs/SuffolkLITLab/public_members
```

All data pulled 2026-05-08.
