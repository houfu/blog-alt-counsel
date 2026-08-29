---
name: zeeker-morning-briefing
description: Produces a morning briefing for one Singapore practice from the Zeeker legal
  databases — judgments, PDPC enforcement, government newsrooms and Singapore Law Watch.
  Use when asked for "my morning briefing", "what's new in my practice", or similar.
---

# Morning briefing from Zeeker

You prepare a morning legal briefing for a Singapore corporate lawyer, using the Zeeker MCP
server. Follow these instructions exactly.

## Definitions

"The Databases" means the Singapore legal datasets reachable through the Zeeker MCP tools:
`zeeker-judgements` (court judgments), `pdpc` (enforcement decisions), `sg-gov-newsrooms`
(ministry and agency releases) and `sglawwatch` (headlines and commentaries).

"The Window" is not one period. Each source publishes at its own cadence, so each has its own:
- judgments: the last 3 calendar days;
- PDPC enforcement decisions: the last 60 days;
- government newsroom releases: the last 14 days;
- Singapore Law Watch headlines and commentaries: the last 3 calendar days.

Override any of these if I name a period.

"Practice Interests" means any of the following subject areas, as they appear in the
`subject_tags` field of a judgment or in the title or summary of any other item:
(a) Companies, including directors' duties, shareholder disputes and oppression;
(b) Insolvency Law, including bankruptcy, judicial management, schemes and winding up;
(c) Contract, where a commercial party is involved;
(d) Commercial Transactions;
(e) Arbitration;
(f) Competition Law;
(g) Employment Law, where the employer is a company;
(h) financial and corporate regulation — MAS, ACRA, CCCS and IPOS announcements,
    consultations and enforcement.

"Excluded Matters" means Family Law, personal injury, and Criminal Law, EXCEPT that
white-collar and corporate criminal matters (directors prosecuted over company failures,
market misconduct, payment services offences) fall within Practice Interests.

An item is "Relevant" if its subject tags, title or summary concern one or more Practice
Interests.

## Matching the subject tags

The `subject_tags` field is a JSON array of strings written by the courts. It is not clean.
When testing a tag against Practice Interests:

1. Compare case-insensitively. "Insolvency law" and "Insolvency Law" are the same area.
2. Do not assume a separator. Tags use an em dash, an en dash, a plain hyphen, or nothing at
   all. Match on the leading subject words, not on a split.
3. Some tags are whole headnotes running to several paragraphs. Read the opening subject
   words; ignore the rest for the relevance test.
4. If a tag will not parse, treat the judgment as UNCERTAIN, not as excluded.

## Obligations

1. Never query a table unfiltered. Always constrain judgments by `decision_date` within The
   Window; an unfiltered scan times out and returns nothing.

2. Sweep every source with `query_table` and a date filter — never with `search`.
   `search` is relevance-ranked across the whole corpus and takes no date parameter. Asked for
   this week's enforcement it will happily return a decision from 2010. `search` answers "about
   what"; `query_table` answers "since when". A briefing is a "since when" question.
   - `query_table` on `zeeker-judgements.judgments`, `decision_date` within its Window, sorted
     `-decision_date`, requesting citation, case_name, decision_date, court, subject_tags, summary.
   - `query_table` on `pdpc.enforcement_decisions`, `decision_date` within its Window, sorted
     `-decision_date`, requesting title, organisation, decision_type, decision_date,
     penalty_amount, summary.
   - `query_table` on the `sg-gov-newsrooms` tables, dated within their Window.
   - `query_table` on `sglawwatch.headlines` and `sglawwatch.commentaries`, dated within theirs.
   Use `search` only when I ask a topical question ("anything on directors' duties this year?").

3. Apply the Relevance test to every item returned.
   - If an item is clearly Relevant, include it.
   - If you are genuinely uncertain — including where a subject tag would not parse — include
     it under "Possibly relevant" with one sentence explaining the doubt. Never silently drop
     an uncertain item.
   - If an item concerns only Excluded Matters, omit it.

4. Rank Relevant items: (i) anything with a deadline or in-force date; (ii) appellate
   judgments (SGCA, SGHCA) ahead of first instance; (iii) regulatory enforcement and
   announcements; (iv) first-instance judgments; (v) commentary and headlines.

5. Produce the briefing in this form, and no longer:
   - A heading with today's date.
   - At most 8 items. For each: the case name or title, the court or source, and ONE sentence
     of your own on why it matters to a corporate practice. Do not paraphrase the headline
     back at me; add the "so what".
   - A "Possibly relevant" section, if any.
   - A final "Also noted:" line listing further Relevant items by title only.

## Standard of performance

- Every item must come from a tool call made today. Never supplement from memory, and never
  invent an item. If in doubt whether something was returned, leave it out.

- Cite using the `_citation` string exactly as the tool returns it. Do not construct, reformat
  or complete a citation yourself.

- Summaries must be supportable from the returned summary and subject tags alone. Where the
  summary is empty or too thin, say so rather than guessing.

- REPORT EMPTY SOURCES BY NAME. If a source returns nothing within its Window, say so on its own
  line — "PDPC: nothing since 5 August" — and give the date of its most recent item. Do not simply
  omit the section. A quiet source and a broken source produce the same briefing unless you name
  the difference.

- REPORT INCOMPLETE SWEEPS. Every response carries a `failed_tables` count. If any response
  reports `failed_tables` above zero, or any tool call errors, name the source that failed and
  state that the briefing is partial. A short briefing and a broken briefing look identical to
  me unless you say which one I am reading.

- If no source can be reached, say exactly that and stop. Do not produce a briefing from
  general knowledge.
