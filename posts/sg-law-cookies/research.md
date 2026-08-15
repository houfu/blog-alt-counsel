# Research: Are there other legal dashboards like SG Law Cookies?

**Date:** 2026-08-15
**Question under test:** Legal dashboards have plotted countable proxies (win rates, durations, spend)
because those were the only units available. LLMs now manufacture units from legal prose, making
dashboards of legal *substance* possible. Is that true, and is anyone else doing it?

## Summary

The contrast the user spotted holds, but the honest answer is sharper than "nobody else is doing
this." Manufacturing units from legal prose is **not** new — enterprise RegTech has converted
regulatory text into trackable obligations for years, at six-figure contracts. What is new is the
cost collapse, the extension beyond regulation to a jurisdiction's whole legal output, and treating
the result as something to **look at** rather than a queue to work through. Existing legal
visualisations almost all borrow their axis from somewhere the data already had structure:
dockets, geography, or citations.

## Key findings

Legal dashboards sort into four families by **what unit they plot**.

### 1. Countable docket events — the win-rate family 🌍

Litigation analytics measures the procedural shell around the law, because dockets are already
structured metadata.

- Win rates, case duration and motion success are computed automatically; judge analytics covers
  active case counts, average case length, overall motion grant rate, practice-area breakdown, and
  motion success split by plaintiff vs defendant.
- Coverage is industrial: one vendor cites AI crawlers monitoring **3,124+ courts across 13
  countries**, reconciled against PACER and the National Center for State Courts.
- **Source:** [Lex Machina](https://www.lexisnexis.com/en-us/products/lex-machina.page),
  [Trellis Judge Analytics](https://trellis.law/feature/judge-analytics),
  [Premonition](https://premonition.ai/),
  [Legaltech Hub — Litigation Analytics](https://www.legaltechnologyhub.com/topics/data/litigation-analytics/)
- **Why it matters to the post:** none of these tell you *what the law now says*. They tell you how
  the machinery around it behaved. This is the contrast the post is built on.

### 2. Borrowed geography — the tracker family 🌍

Legal developments attached to a map. The space pre-exists, so no legend is needed.

- **Ray Sun's Global AI Regulation Tracker** — interactive world map, launched May 2023, all 195+
  jurisdictions by Feb 2025, 41,000+ active users, built solo. Adds a governance library, country
  comparison, live newsfeed, chatbot and export.
  ([techieray.com](https://www.techieray.com/GlobalAIRegulationTracker),
  [beSpacific](https://www.bespacific.com/global-ai-regulation-tracker/))
- **IAPP Global AI Law and Policy Tracker** — "compiled into a chart, map and directory," last
  updated 3 Feb 2026; IAPP also maintains the Global Privacy Law and DPA Directory.
  ([IAPP](https://iapp.org/resources/article/global-ai-legislation-tracker))
- **Why it matters:** the unit is *a jurisdiction's status*, not a legal development. Geography does
  the design work for free.

### 3. Borrowed structure — the citation-network family 🌍

Case law as a graph, where the edges come free because judgments cite each other.

- EuCaseNet presents network graphs for EU case law; one ECHR study built a citation network of
  **9,777 nodes and 39,582 links**, combining topic modelling with citation analysis.
- Commercial/consumer versions exist: Intellegal's "Citation Map" for Philippine case law draws a
  case's web of authority — cases cited, statutes applied, principles turned on — clickable to source.
- **Source:** [Combining topic modelling and citation network analysis (ECHR)](https://arxiv.org/pdf/2401.16429),
  [LeCNet citation benchmark](https://aclanthology.org/2025.justnlp-main.4.pdf),
  [Intellegal visual digest & citation map](https://intellegal.ai/philippines/blog/visual-digest-citation-map-philippine-case-law)
- **Why it matters:** still a countable feature. A citation is a fact about the document, not a
  judgment about what changed.

### 4. Manufactured obligations — RegTech, the real precedent ⚠️

**This is the closest existing thing, and the post must not pretend otherwise.**

- Corlytics runs an end-to-end regulatory risk platform, founded 2013, capturing events across
  **120+ countries and 2,500+ regulatory authorities**, and "uses AI to handle document
  classification, summarisation, and mapping."
- CUBE, Ascent and FinregE do horizon scanning across regulators plus "obligations management to
  **convert regulatory text into trackable requirements**."
- **Source:** [Corlytics](https://www.corlytics.com/solutions/regulatory-obligations-management/),
  [RegTech Analyst roundup](https://regtechanalyst.com/10-regtech-solutions-helping-firms-keep-pace-with-regulatory-change/),
  [FinregE horizon scanning](https://finreg-e.com/compliance-services/regulatory-horizon-scanning/)
- **Where it differs from Cookies:** the unit is an *obligation* mapped to internal policies and
  controls; the audience is financial-services compliance; the output is an alerting and workflow
  queue, not a designed visual surface; and the scope is regulation, not judgments, enforcement
  decisions and news together.

### 5. What nobody appears to be doing 🔍

No established product category surfaced for **LLM-derived units of substantive legal change,
plotted on a designed space, across a whole jurisdiction's output.** A targeted search for case-law
trend dashboards built on LLM-generated insight returned surveys of LLM legal *tasks* (retrieval,
summarisation, judgment prediction) and no dashboard category. Treat this as "not found," not as
proof of absence — absence of evidence in four searches is weak evidence.

## The catalogue Cookies bakes from (verified via Zeeker MCP, 15 Aug 2026)

Queried live rather than taken from the PRD. These are the real numbers behind "processes the
entire legal output of Singapore every day."

| Database | Contents | Licence |
|---|---|---|
| `zeeker-judgements` | **10,765 judgments** (High Court, Court of Appeal, subordinate courts), plus paragraph-level fragments | CC-BY-4.0 |
| `sglawwatch` | **927 headlines**, **263 commentaries**, **90 reference chapters** (+2,454 fragments) | CC-BY-4.0 |
| `pdpc` | 6 tables — enforcement decisions and advisory guidelines | CC-BY-4.0 |
| `sg-gov-newsrooms` | 8 tables — judiciary, AGC, MinLaw, CCCS, IPOS, PDPC, MOM press releases | All rights reserved |

**Note for the draft:** the judgments table description states that full text is *"indexed for search
but not distributed; read the full judgment at source_url."* That matches the v2 attribution posture
in the PRD exactly — extraction only, never republication. Worth one sentence, because it is the
answer to the obvious objection about summarising other people's copyrighted material.

**Caveat:** full-text search through the MCP returned zero rows with `failed_tables` set on both
attempts, so FTS was degraded at the time of checking. The table listings and row counts above came
back clean.

## Live site verified first-hand (16 Aug 2026, via Jina from local session)

Earlier sessions described the site from repo templates and one screenshot because the egress proxy
blocked it. Read directly now. Corrections and additions:

**The PRD's illustration is backwards in practice.** The PRD says a 40,000-word Court of Appeal
judgment "might produce one cookie." The live site shows judgments are the *most* productive
sources. On Fri 14 Aug 2026, **[2026] SGHC 166 produced four cookies across four areas of law**:

- fraud and economic torts — silence and conduct can constitute fraudulent misrepresentation where a duty to correct exists
- contract — damages for misrepresentation limited to reliance loss, not expectation loss
- corporate — piercing the corporate veil requires formal control as shareholder or director, not de facto influence
- fraud and economic torts — an individual's fraudulent misrepresentations can ground joint liability for unlawful means conspiracy with his company

[2026] SGHC 167 similarly produced three (real property ×2, trusts ×1). News headlines produce one
each. **Draft corrected** — the real cluster is far better evidence for source-decoupling than the
PRD's hypothetical.

**One day's actual output (Fri 14 Aug 2026):** oven opened 17:33 SGT; 13 cookies; 6 news, 7
judgments; 1 pineapple tart (ACT ON), 10 fresh, 2 on the cooling rack. Busiest oven: public and
administrative law ×4. Eleven areas of law active. Header furniture: "est. 2023 · baked daily, no
holidays", "新加坡法律饼干店", "#01-LAW", "SELF SERVICE · 自助服务", "FRESH BATCH · 17:33 SGT",
"NEW INGREDIENT: HC/ORC 1222/2025", "thank you — come again tomorrow".

**The pineapple tart that day** was "SGX introduces Global Listing Board to facilitate dual listings
with Nasdaq," with a why-it-matters line aimed at capital markets and IPO advisers.

**Editorial call — one cookie deliberately not quoted.** The same day carried "Court of Three Judges
strikes off Pritam Singh for dishonesty." It is accurate and public, but the post should not
reproduce a disciplinary finding against a named individual as decoration for a technology argument.
The SGHC 166 cluster makes the point better anyway, and its parties are unnamed. This is the
named-parties sensitivity the pitch flagged, arriving in concrete form.

**Ray Sun's paper read in full** (techieray.substack.com, via Jina): confirms the PDF. Five
components, JSON mesh, weekly Cloud Scheduler run, human accept/reject. Cited as
Sun, R. (2026), *The Live and Breathing Essay*, v1.0, 3 August 2026. Still out of scope — the post
takes the dashboard trend, not the architecture.

## Statistics and data points

| Data point | Value | Source |
|---|---|---|
| Courts monitored by one litigation-analytics vendor | 3,124+ across 13 countries | Premonition |
| Ray Sun's tracker jurisdictions / users | 195+ / 41,000+ active | techieray.com |
| IAPP AI tracker last updated | 3 Feb 2026 | IAPP |
| Corlytics coverage | 120+ countries, 2,500+ regulators | Corlytics |
| Enterprise RegTech contract floor | **low six figures per year** | Changeflow pricing analysis |
| ECHR citation network study size | 9,777 nodes, 39,582 links | arXiv 2401.16429 |

## Jurisdictional flags

- ⚠️ Categories 1 and 4 are overwhelmingly **US/EU and financial-services centric**. Litigation
  analytics depends on PACER-style docket infrastructure that Singapore does not have in the same
  form; RegTech pricing assumes a compliance department.
- ✅ **Singapore's institutional move is AI search, not dashboards.** SAL unveiled **LawNet 4.0** at
  TechLaw.Fest 2025 — an AI search engine built with IMDA that answers questions with sources drawn
  from Singapore case law and legislation. From 1 Oct 2025, SAL agreements with LexisNexis, Thomson
  Reuters, vLex and Legora extend global access to Singapore judgments.
  ([SAL](https://sal.org.sg/articles/singapore-academy-of-law-signs-global-content-partnerships-to-expand-worldwide-access-of-singapore-law-and-unveils-ai-powered-lawnet-4-0-at-techlaw-fest-2025/))
- ✅ **LawNet publishes free RSS feeds of the last three months of judgments** from the Supreme
  Court, State Courts, and Family and Juvenile Courts — the raw material sitting in the open.
  ([LawNet free resources](https://www.lawnet.sg/lawnet/web/lawnet/free-resources))
- **The gap this leaves:** Singapore has search and it has feeds. Nobody has built the glanceable
  surface. That is a defensible claim for a Singapore-focused post.

## Alt-counsel angle

The unit-manufacturing capability is not the story — RegTech has had it for a decade. **The price
is the story.** Converting legal prose into trackable, comparable units used to require a six-figure
contract and a compliance department to consume the output. It now runs on one person's weekend and
a local model, which changes who gets to decide what the units are and what they look like.

That reframes the post's takeaway for solo counsels: the interesting question is no longer whether
you can afford regulatory intelligence, but whether you can *design* it — because the design is now
the only expensive part.

## Available, not used

Logged so it does not silently expand the pitch:

- The academic citation-network literature is deep (knowledge graphs, similar-case recommendation,
  Vietnamese and Hungarian legal graphs). Interesting, but it argues a different point and would add
  a thread rather than replace one.
- LawNet 4.0's AI search and the SAL global content partnerships could support a whole post on
  institutional vs solo tooling in Singapore. Out of scope here; note for a future pitch.
- Ray Sun's "Live and Breathing Essay" architecture (v1.0, 3 Aug 2026) — the self-updating essay.
  Related to the trend, but it is an *essay-maintenance* pattern, not a dashboard, and the user has
  explicitly said the post is not about architecture.

## Additional sources

- [Legaltech Hub — Litigation Analytics topic page](https://www.legaltechnologyhub.com/topics/data/litigation-analytics/)
- [ABA — Top 5 most important judicial analytics metrics](https://www.americanbar.org/groups/journal/articles/2021/top-5-most-important-judicial-analytics-metrics/)
- [Changeflow — what regulatory change management software actually costs](https://changeflow.com/learn/regulatory-change-management-software-pricing)
- [Chartis vendor spotlight, Regulatory Intelligence Solutions 2025 (Corlytics)](https://www.corlytics.com/wp-content/uploads/2026/01/Chartis_Corlytics_RegIntell-2025-Spotlight.pdf)
