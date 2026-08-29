# Research: Zeeker as a briefing substrate

All figures below were produced live on 2026-08-29 against mcp.zeeker.sg and data.zeeker.sg.
Reproduce before publishing — the corpus grows daily.

## MCP capability (verified working after task_21f57924)

Six tools: `search`, `query_table`, `fetch`, `list_databases`, `list_tables`, `describe_table`.

| Check | Result |
|---|---|
| `search("oppression")` | 170 hits in `zeeker-judgements.judgments`, `failed_tables: 1` |
| `search("personal data protection breach penalty", databases=["pdpc"])` | 93 hits, `failed_tables: 0` |
| `query_table` judgments, `decision_date >= 2026-08-01`, sorted | fast, correct, returns 2026-08-28 items |
| Unfiltered scan `judgments.json?_size=200` (direct Datasette) | **HTTP 400 "SQL query took too long"** — still open |

`zeeker-judgements.judgments`: 10,804 rows. Light columns: citation, case_name, case_numbers,
decision_date, court, subject_tags, source_url, pdf_url, summary. `url_keyed`, `supports_fragments`.

Every response carries a `provenance` block (source, license CC-BY-4.0, attribution) and each row a
`_citation` string. Citations come free — the skill never has to construct one.

## THE FINDING: subject_tags is a real taxonomy, and it is dirty

This is the substrate that makes a personal briefing possible at all. The RSS feed's `category`
named the publication; `subject_tags` names the subject, in the court's own words:

    "Insolvency Law — Bankruptcy — Statutory demand — Setting aside of statutory demand..."
    "Arbitration — Award — Recourse against award — Breach of natural justice"
    "Contract — Termination"

A Definitions clause can therefore MATCH rather than GUESS. That is the whole argument for
rebuilding the briefing on Zeeker instead of RSS.

But at scale the field is inconsistent. Sample: 446 tag strings across 200 judgments
(2026-06-03 .. 2026-08-28), fetched via query_table with a date filter.

**Separator drift — the substantial one.**

| Separator | Tag strings |
|---|---|
| em dash `—` | 371 |
| en dash `–` | 56 |
| no dash at all | 28 |

84 of 446 (19%) fail to split on the em dash. At least one string mixes a hyphen and an en dash
in the same tag ("Family Law - Variation – Child Maintenance - Variation of consent order...").
Some "tags" are entire multi-paragraph headnotes with embedded newlines, not short labels.

**Case drift — real but small.** Case-sensitive `startswith` against a corporate practice
(Companies / Insolvency Law / Employment Law / Contract / Arbitration / Competition Law /
Commercial Transactions):

| Area | case-sensitive | case-insensitive | silently dropped |
|---|---|---|---|
| Insolvency Law | 8 | 12 | 4 |
| Employment Law | 21 | 23 | 2 |
| (others) | — | — | 0 |

6 tag hits dropped; **1 judgment of 200 disappears from the briefing entirely.** Do not inflate
this number in the draft — the honest version is "small, and silent", and silence is the point.

**Why it matters for the post:** the first 8 rows fetched were uniformly clean em dashes. The
defect only appears at 200. This is the act-one lesson recurring one level up — reading the source
still does half the build, it just takes more rows to read. And the failure mode is the same
species as the RSS silent-discard: the briefing does not report what it missed.

## Court distribution (same 200-row sample)

SGHC 54, SGFC 27, SGDC 25, SGHCR 20, SGMC 12, SGHCI 11, SGCA 11, SGECT 10, SGSCT 9, SGHCF 8,
SGHCA 6, SGYC 4, SGPHC 3. A practice-relevance clause can rank on court seniority, which the RSS
feed could not support at all.

## Open / to verify before publishing

- `failed_tables: 1` persists on unscoped `search`. Which table, and does it matter?
- Unfiltered scans still 400 at the Datasette layer (lower-priority item in task_21f57924).
- Re-run every number above at final draft; the corpus grows daily.

## The build: v1 failures, observed 2026-08-29

Both found by running the skill's own obligations against the live server, not by reasoning
about them. `skill/SKILL.v1.md` is kept beside `skill/SKILL.md` for the redline.

**Failure 1 — the brief instructed a capability the tool does not have.**
v1 Obligation 2 said "`search` scoped to `pdpc` for enforcement in The Window". `search` takes
no date parameter; only `query_table` has `filters`. Asked for the last 3 days it returned items
dated 2026-06-11, 2026-05-18, 2022-09-13 and **2010-11-23** — a sixteen-year-old contempt-of-court
media brief, relevance-ranked and undated, ready to be served as this morning's news.

The lesson, and the v2 clause: `search` answers "about what"; `query_table` answers "since when".
A briefing is a "since when" question. I had read both tool descriptions and still assumed a
date filter that was never there.

**Failure 2 — one Window does not fit four sources.**
v1 applied a single 3-day window to everything. Judgments arrive daily (2026-08-28 the day before
this session). PDPC's most recent enforcement decision is **2026-08-05, 24 days earlier**. So the
PDPC sweep would return nothing every morning, and the briefing would look entirely normal,
because an omitted section is indistinguishable from a quiet one.

v2 gives each source its own cadence (judgments 3 days, PDPC 60, newsrooms 14, SLW 3) and adds a
Standard-of-Performance clause requiring empty sources to be named with the date of their most
recent item: "PDPC: nothing since 5 August".

**All three defects found so far are the same species: silence.** The dirty `subject_tags` above,
the undated search, the permanently-empty source. None of them announces itself; each produces a
briefing that looks fine. That is the through-line from the RSS skill's silent discard, and it is
the post's argument.
