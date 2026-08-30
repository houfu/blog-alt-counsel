---
title: "Read the Server Before You Draft"
slug: "read-the-server-before-you-draft"
tags: ["LegalTech", "AI", "Tutorial", "Singapore"]
status: draft
featured: false
github_folder: "morning-briefing-tutorial"
---

I was pretty chuffed when the I saw my article was published in the August version of the Singapore Law Gazette. It was about building your own morning briefing: I wanted to introduce agentic coding to a wider range of lawyers and showed them what was possible with AI today. So I went for the simplest, most familiar slice possible: a plain-text skill file that tells an AI assistant what your practice is and what counts as done. It ran against Singapore Law Watch's RSS feed, because most Singapore lawyers already know that feed.

[Breakfast, Eventually: Why Lawyers Should Build Their Own Tools](https://lawgazette.com.sg/practice/tech-talk/breakfast-eventually-why-lawyers-should-build-their-own-tools/)

Strangely, for an article that tries to extol the virtues of agentic coding, no coding actually takes place. If you read this blog regularly enough, you would guess that running a text file skill against an RSS file seems pretty quaint. The scent that my ambitions went far beyond that were wafting through the pages when I introduced SG Law Cookies. Beyond creating a traditional Singaporean bakery that baked *kuih bangkit* based on the significance of the legal update, it also connects through Zeeker’s rich and varied data repository.  

[Come Into the Bakery: What I Did With All That Legal Data](https://www.alt-counsel.com/come-into-the-bakery/?ref=read-the-server-before-you-draft)

The main thesis of my Singapore Law Gazette article in my view was that lawyers should build, and pay attention, to hyper-local, hyper-personal AI services. SG Law Cookies is pretty much a showcase of Zeeker’s dataset, so it emphasises its range. That doesn’t make sense to a lawyer trying to mould the data into a service he can appreciate, so there’s also a gap here. 

So *this* tutorial had to be written. 

## What a feed-reading brief looked like

A skill is a plain-text file, conventionally named `SKILL.md`, that the assistant reads before it starts work. Read it as a short services contract. Definitions, so the terms mean something. Obligations, so there is something to perform. A standard of performance, so you know what you are entitled to. And a clause for when performance is impossible.

Definitions is the clause that carries your practice. "Relevant to my practice" is as useless in a skill as "reasonable endeavours" is without context, so you write it out in limbs: companies and directors' duties, insolvency, commercial contract, arbitration, employment where the employer is a company. Then the proviso every corporate lawyer knows — criminal law is excluded, except when it is your client's director in the dock.

The feed version had to work with what RSS warrants: a title, a link, a description, a `category` and a publication date. The `category` is a trap. It names the newspaper or the firm supplying the item, not the subject. So the brief could only guess relevance from a headline, and it guessed badly twice. First it dropped a Business Times opinion piece on a financial services gap, because "opinion" sounded like commentary rather than law; silence, the skill had decided, meant discard. Then, on a thin news day, asked for eight items, it found eight — asserting a corporate significance the description never supported.

In the SLG article, the agent rewrote each time.

Both fixes landed in the same two clauses. Uncertain items go in a "Possibly relevant" line with one sentence of doubt, rather than disappearing. Summaries must be supportable from the title and description alone. Nothing I amended was ever about RSS.

## You interrogate an MCP; you don't read it

To proceed on this tutorial, you’re going to need a skill reading, MCP connecting client. Claude Code obviously works and so does Codex. The desktop versions should be able to do so with some configuration. If you want to know whether your AI client supports it or how to set it up, you should just ask it. 

Connecting is the short part. For Claude Code:

```bash
claude mcp add --transport http zeeker https://mcp.zeeker.sg/mcp
```

Other clients take the same URL in their MCP settings. For zeeker, there is no sign-up and no API key; you are rate-limited to 60 calls a minute, which no briefing will ever approach.

Now stop. Before you write a single clause, ask the server what it has. This is the same move as reading a precedent before you draft from it, and it is the step people skip. Three of the six tools exist only for this: `list_databases`, `list_tables` and `describe_table`.

Asking what is there at all returns five databases: court judgments, PDPC enforcement decisions and guidance, newsroom releases from eight ministries and agencies, Singapore Law Watch headlines and commentaries, and the daily extractions behind SG Law Cookies.

Then go down a level. `list_tables` gives you row counts and a one-line description per table, and `describe_table` gives you the schema. Asking about the judgments table returns, among other things:

```json
{
  "row_count": 10804,
  "light_columns": ["citation", "case_name", "case_numbers", "decision_date",
                    "court", "subject_tags", "source_url", "pdf_url", "summary"],
  "available_columns": ["...", "content_text", "court_summary", "created_at",
                        "fragment_count", "extracted_at"],
  "url_keyed": true,
  "supports_fragments": true,
  "description": "Singapore court judgments with summary, parties, and citation.
                  Full judgment text is indexed for search but not distributed;
                  read the full judgment at source_url."
}
```

Three things in that output change how you draft. There are 10,804 judgments, so any obligation that says "look at everything" is already wrong. There is a light column set distinct from the available set, so you can ask for the nine columns a briefing needs and leave the full judgment text where it is. And there is a column called `subject_tags`.

That column is the reason to build here rather than on a feed. It carries the subject in the court's own words:

```text
"Insolvency Law — Bankruptcy — Statutory demand — Setting aside of statutory demand"
"Arbitration — Award — Recourse against award — Breach of natural justice"
"Contract — Termination"
```

The feed's `category` told you who was speaking. This tells you what the case is about. So the Definitions clause stops guessing and starts matching a field:

```markdown
"Practice Interests" means any of the following subject areas, as they appear
in the `subject_tags` field of a judgment or in the title or summary of any
other item:
(a) Companies, including directors' duties, shareholder disputes and oppression;
(b) Insolvency Law, including bankruptcy, judicial management and winding up;
(c) Contract, where a commercial party is involved;
(d) Arbitration.
```

Those tags are written by hand, one judgment at a time, and they are not uniform. Some use an em dash, some an en dash, some no separator at all, and a few run to several paragraphs. Your matching clause should compare case-insensitively, match on the leading subject words rather than splitting on a separator, and treat a tag it cannot parse as uncertain rather than excluded. That is ordinary care with hand-written data, and you would extend the same courtesy to a headnote.

Zeeker, for the avoidance of doubt, is a Singapore legal database I maintain and it is public and free.

[The Judgment, Not the Summary: How Zeeker MCP Can Change the Way you do Legal Research](https://www.alt-counsel.com/ect-no-lawyers-zeeker/?ref=read-the-server-before-you-draft)

## The tools answer different questions

A feed has one verb: fetch. This server has six, and knowing which is which is most of the drafting:

- `list_databases`, `list_tables` and `describe_table` tell you what exists and what shape it is in. You use them while writing the brief, not while running it.
- `query_table` retrieves rows by filter and sort. Thirteen operators, including `gte` and `lte` on a date, `contains` and `startswith` on text.
- `search` runs full-text search across every indexed table at once.
- `fetch` returns a single row when you already have its URL.

Two of those look like they do the same job. Choosing wrong is the mistake I actually made, and it is the one worth your attention, because the output does not look like an error. It looks like a briefing.

The first version of my brief said: use `search`, scoped to the PDPC database, for enforcement decisions in the last three days. That reads like a reasonable instruction. Here is what `search` says about itself:

> Results are relevance-ranked: BM25 scoring within each source table, then reciprocal-rank fusion merges the per-table rankings into one list.

No date parameter. There never was one. Ask it for enforcement and it returns, in this order:

```text
2026-06-11   Tanjong Katong Road South Sinkhole: Enforcement Actions To Be Taken
2022-09-13   Reply to Parliamentary Question on strengthening disclosure
2010-11-23   Media Brief - Contempt of Court Proceedings against Mr Alan ...
2026-07-13   Antitrust developments and enforcement activity in South-east Asia
2026-05-18   Three Online Retailers Caught Using False Urgency Tactics
```

Third result: a media brief from November 2010, ready to be served as this morning's news. The tool did exactly what its description says it does. I had read that description and still wrote a clause that assumed a filter which was never there.

Nothing there is broken. Relevance ranking is what full-text search is for, and if you ask "has anything ever been said about enforcement", that list is a good answer. It is simply not the question a briefing asks.

The rule that went into the brief, and the one I would put in yours: **`search` answers "about what"; `query_table` answers "since when". A briefing is a "since when" question.** Keep `search` for the topical asks you make by hand — "anything on directors' duties this year?" — and sweep with `query_table`, which takes filters and a sort:

```json
{
  "database": "zeeker-judgements",
  "table": "judgments",
  "filters": [{"column": "decision_date", "op": "gte", "value": "2026-08-26"}],
  "sort": "-decision_date",
  "columns": ["citation", "case_name", "decision_date", "court", "subject_tags"]
}
```

This is a clause type a feed-reading brief never needed. When the source has one verb, the obligation is just "fetch the feed". When it has six, the brief has to allocate obligations to tools, obligation by obligation, and say which tool is wrong for which job.

There is a habit worth forming here, and it is the only reason I caught this at all. Before you trust a clause, perform it yourself once. Ask the assistant to run that obligation and show you the raw rows, then look at the dates. Not the summaries, not whether the items seem plausible — the dates. A wrongly drafted sweep returns real cases with real citations about the right subject, and the only thing marking it out is that one of them is from 2010. Every check that matters here is that boring: are these the right dates, are these all the sources, is this everything.

## You are querying live infrastructure

A feed is a file you download. A server is something you ask, and it can be asked badly.

Constrain every query. An unbounded request against 10,804 rows is not a bigger version of a small one; it is a request that does not come back. So the first obligation in the brief is that no table is ever queried without a date filter.

Done properly, a morning briefing is a handful of calls: one per source, each returning a few dozen rows of light columns. That is why the rate limit never comes near mattering, and it is also the shape you want for a different reason. A small, dated, explicit query is one you can reproduce by hand when the output looks wrong, which you will want to do in the first week.

Then there is the rhythm problem, which is the one that cost me a working briefing without ever looking broken. Judgments arrive most days — the most recent when I built this was dated 28 August, the day before. PDPC enforcement decisions do not. The most recent was 5 August, twenty-four days earlier. A single three-day window across both sources means the PDPC section returns nothing every single morning, and nothing about the output tells you that. An omitted section and a quiet section produce the same document.

You find this out by asking each source, before you set any window at all, when it last published anything:

```json
{"database": "pdpc", "table": "enforcement_decisions",
 "sort": "-decision_date", "limit": 3}
```

Three rows, no filter, sorted newest first. Do it once per source and write the answers down; it takes about two minutes and it is the difference between a window you chose and a window you assumed.

So "The Window" stops being one period and becomes four: judgments over three days, PDPC over sixty, government newsrooms over fourteen, Singapore Law Watch over three. Then the clause that makes the difference visible — an empty source is named, with the date of its most recent item. "PDPC: nothing since 5 August" is a sentence you can act on. An absent section is not.

The same reasoning covers partial failure. Every response from this server carries a count of the tables it could not reach, so a sweep across four sources can succeed on three and look completely normal. The brief has to say what to do about that: name the source that failed and state that the briefing is partial. A short briefing and a broken briefing are the same document unless the brief makes the assistant tell you which one you are reading.

## Provenance comes with the data

Every response carries a provenance block — source, licence, attribution — and every row carries a citation string, already formatted:

```text
Reformd Pte Ltd v Kopigi Pte Ltd [2026] SGHC 175 (SGHC, 2026-08-28)
  — https://www.elitigation.sg/gd/s/2026_SGHC_175
```

Nothing about an RSS feed does this, and for a lawyer it is the strongest practical argument for building against an MCP rather than scraping a website. The citation is not something your assistant assembles from parts it half-remembers. It arrives with the row. So the brief can forbid the assembly outright: cite using the string exactly as returned, never construct, reformat or complete one.

The provenance block does the same job one level up. It names the source, the licence and the required attribution on every response, which means that when a summary from a morning briefing ends up in a note to a client, you already know the terms it came under and whether it can be quoted. Note also what the table description said: the full judgment text is indexed for search but not distributed. Your briefing links to the Judiciary's own copy rather than passing around someone else's. That is a good property to inherit and a bad one to lose, and it is the kind of thing you only find out by reading the schema first.

That clause sits alongside the rest of the standard of performance, and each of the others answers a specific way the output can go quietly wrong. Every item must come from a call made today, because an assistant that knows a great deal about Singapore company law can furnish a plausible morning briefing without querying anything at all. Summaries must be supportable from what the tools actually returned, because asked for eight items on a thin day it will find eight — the same reason entire agreement clauses exist. And if no source can be reached, it should say exactly that and stop, rather than falling back on general knowledge, which is the failure that looks most like success.

Which is where the interesting comparison lands. In the feed version, the standard of performance ran to three clauses. Here it runs to six, and the three new ones are all consequences of talking to a live server rather than reading a file: name empty sources, report incomplete sweeps, cite what you were given. The Definitions clause — the part that is actually your practice, your judgment, the thing no model can supply for you — barely moved between the two.

The Definitions clause is the constant. Everything else is plumbing.

Here is the whole file.

```markdown
---
name: zeeker-morning-briefing
description: Produces a morning briefing for one Singapore practice from the Zeeker
  legal databases — judgments, PDPC enforcement, government newsrooms and Singapore
  Law Watch. Use when asked for "my morning briefing", "what's new in my practice".
---

# Morning briefing from Zeeker

You prepare a morning legal briefing for a Singapore corporate lawyer, using the
Zeeker MCP server. Follow these instructions exactly.

## Definitions

"The Databases" means the Singapore legal datasets reachable through the Zeeker MCP
tools: `zeeker-judgements` (court judgments), `pdpc` (enforcement decisions),
`sg-gov-newsrooms` (ministry and agency releases) and `sglawwatch` (headlines and
commentaries).

"The Window" is not one period. Each source publishes at its own cadence, so each
has its own:
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
white-collar and corporate criminal matters (directors prosecuted over company
failures, market misconduct, payment services offences) fall within Practice Interests.

An item is "Relevant" if its subject tags, title or summary concern one or more
Practice Interests.

## Matching the subject tags

The `subject_tags` field is a JSON array of strings written by the courts. When
testing a tag against Practice Interests:

1. Compare case-insensitively. "Insolvency law" and "Insolvency Law" are the same area.
2. Do not assume a separator. Tags use an em dash, an en dash, a plain hyphen, or
   nothing at all. Match on the leading subject words, not on a split.
3. Some tags are whole headnotes running to several paragraphs. Read the opening
   subject words; ignore the rest for the relevance test.
4. If a tag will not parse, treat the judgment as UNCERTAIN, not as excluded.

## Obligations

1. Never query a table unfiltered. Always constrain by date within The Window; an
   unfiltered scan times out and returns nothing.

2. Sweep every source with `query_table` and a date filter — never with `search`.
   `search` is relevance-ranked across the whole corpus and takes no date parameter.
   Asked for this week's enforcement it will happily return a decision from 2010.
   `search` answers "about what"; `query_table` answers "since when". A briefing is a
   "since when" question.
   - `query_table` on `zeeker-judgements.judgments`, `decision_date` within its Window,
     sorted `-decision_date`, requesting citation, case_name, decision_date, court,
     subject_tags, summary.
   - `query_table` on `pdpc.enforcement_decisions`, `decision_date` within its Window,
     sorted `-decision_date`, requesting title, organisation, decision_type,
     decision_date, penalty_amount, summary.
   - `query_table` on the `sg-gov-newsrooms` tables, dated within their Window.
   - `query_table` on `sglawwatch.headlines` and `sglawwatch.commentaries`, dated
     within theirs.
   Use `search` only when I ask a topical question.

3. Apply the Relevance test to every item returned.
   - If an item is clearly Relevant, include it.
   - If you are genuinely uncertain — including where a subject tag would not parse —
     include it under "Possibly relevant" with one sentence explaining the doubt.
     Never silently drop an uncertain item.
   - If an item concerns only Excluded Matters, omit it.

4. Rank Relevant items: (i) anything with a deadline or in-force date; (ii) appellate
   judgments (SGCA, SGHCA) ahead of first instance; (iii) regulatory enforcement and
   announcements; (iv) first-instance judgments; (v) commentary and headlines.

5. Produce the briefing in this form, and no longer:
   - A heading with today's date.
   - At most 8 items. For each: the case name or title, the court or source, and ONE
     sentence of your own on why it matters to a corporate practice. Do not paraphrase
     the headline back at me; add the "so what".
   - A "Possibly relevant" section, if any.
   - A final "Also noted:" line listing further Relevant items by title only.

## Standard of performance

- Every item must come from a tool call made today. Never supplement from memory, and
  never invent an item. If in doubt whether something was returned, leave it out.

- Cite using the `_citation` string exactly as the tool returns it. Do not construct,
  reformat or complete a citation yourself.

- Summaries must be supportable from the returned summary and subject tags alone.
  Where the summary is empty or too thin, say so rather than guessing.

- REPORT EMPTY SOURCES BY NAME. If a source returns nothing within its Window, say so
  on its own line — "PDPC: nothing since 5 August" — and give the date of its most
  recent item. Do not simply omit the section. A quiet source and a broken source
  produce the same briefing unless you name the difference.

- REPORT INCOMPLETE SWEEPS. If any response reports a failed table, or any tool call
  errors, name the source that failed and state that the briefing is partial.

- If no source can be reached, say exactly that and stop. Do not produce a briefing
  from general knowledge.
```

Save it as `SKILL.md` in your client's skills folder, open the client, and ask for your morning briefing.

## Writing your own Definitions clause

Everything with your name on it lives in one clause, so adapting this is a substitution exercise, exactly as you would adapt a precedent for a new client. A construction lawyer would define Practice Interests around adjudication under the Security of Payment Act, defects and delay claims, BCA announcements and standard-form revisions, would move Excluded Matters to cover corporate and commercial news, and would tighten the urgency ranking, because adjudication timelines are measured in days rather than weeks. The obligations do not change at all.

If your server is not this one, the six moves are still the same. Interrogate the schema before you draft. Find out which tool answers "since when" and which answers "about what". Constrain every query. Ask each source when it last published anything, before you decide how far back to look. Make the brief report a partial sweep. Take the citations the server gives you instead of letting them be assembled. Then put your own judgment in Definitions, which is the part no model can write for you.

[What 7,308 Agent Runs Taught Me About Writing Better Skills](https://www.alt-counsel.com/skillsbench-analysis/?ref=read-the-server-before-you-draft)

One note on confidentiality. All of this runs on public data. The databases are public, the skill file holds your professional interests rather than your clients' affairs, and no matter name or document goes near the workflow. The Law Society's advisory of 2 April 2026 warns against feeding client information into publicly available AI tools, and a briefing skill never needs to. Build first where the stakes are breakfast.

## The same server carries two layers

There is a second decision hiding in all of this, and it is worth making on purpose rather than by default.

Everything above points the brief at raw judgments, where you own the relevance test and the assistant writes the "so what" from a summary. But the same server also carries the `sg-law-cookies` database, which is the layer behind the bakery: each row is a single proposition rather than a whole case, and it arrives with `significance` already rated and a `why_it_matters` already written. Both of those sit outside the light column set, so you have to name them in `columns` to get them — the same allow-list you met when reading the judgments schema.

Point your brief there instead and two things change at once. The unit gets finer, so one judgment can surface as three propositions and only the one that touches your practice reaches you. And the judgement calls you had been drafting clauses to make — is this significant, why does it matter — are inherited rather than made.

That is the trade, and it is the question to ask of any derived layer anywhere: how much of the judgment am I delegating to the source, and am I comfortable with who made it? Where the raw layer costs you drafting effort, the baked layer costs you a say. Neither is wrong. The one thing I would not do is choose without noticing you chose.

If you want the finer unit without inheriting the ratings, `folio_areas` is the middle path. It carries FOLIO identifiers — an open legal taxonomy rather than anything of mine — so your Definitions clause can match on a standard that will outlive any one database.

## What you end up with

The first briefing you get will be wrong somewhere. That is the useful part, and it is why the standard of performance clause matters more than it looks: a briefing that reports its own gaps can be corrected in ten seconds over coffee, and one that does not can only be trusted or ignored.

Run it for a week. Each time it is wrong, ask which clause failed and amend that clause rather than the whole document. After three or four amendments the file goes quiet and simply works, and what you are left with is a precise written record of your own editorial judgment — which you have probably never had to set down before, because no junior ever asked you to.

Mine is retired now, and I still think it was worth the fortnight.
