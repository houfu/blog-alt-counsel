---
title: "Read the Server Before You Draft"
slug: "read-the-server-before-you-draft"
tags: ["LegalTech", "AI", "Tutorial", "Singapore"]
status: draft
featured: false
github_folder: "morning-briefing-tutorial"
---

I was pretty chuffed when my article was published in the August version of the Singapore Law Gazette. I wanted to introduce agentic coding to a wider range of lawyers and showed them what was possible with AI today. So I went for the simplest, most familiar slice possible: a plain-text skill file that tells an AI assistant what your practice is and what counts as done, then creates a morning briefing out of that. It ran against Singapore Law Watch's RSS feed, because most Singapore lawyers already know that feed.

[Breakfast, Eventually: Why Lawyers Should Build Their Own Tools](https://lawgazette.com.sg/practice/tech-talk/breakfast-eventually-why-lawyers-should-build-their-own-tools/)

Strangely, for an article that tries to extol the virtues of agentic coding, no coding actually takes place. If you read this blog regularly enough, you would guess that running a text file skill against an RSS file seems pretty quaint to me. The scent that my ambitions went far beyond that were wafting between the lines when I introduced SG Law Cookies. Beyond creating a traditional Singaporean bakery that baked *kuih bangkit* based on the significance of the legal update, it also connects through Zeeker’s rich and varied data repository of the latest legal information.  

[Come Into the Bakery: What I Did With All That Legal Data](https://www.alt-counsel.com/come-into-the-bakery/?ref=read-the-server-before-you-draft)

The main thesis of my Singapore Law Gazette article in my view was that lawyers should build, and pay attention, to hyper-local, hyper-personal AI services. SG Law Cookies is pretty much a showcase of Zeeker’s dataset, so it emphasises its range. That doesn’t make sense to a lawyer trying to mould the data into a service he can appreciate, so there’s also a gap here. 

So *this* tutorial had to be written. 

## What a feed-reading brief looked like

A skill is a plain-text file, conventionally named `SKILL.md`, that the assistant reads before it starts work. Read it as a short services contract. Definitions, so the terms mean something. For the sake of simplicity, I borrowed many well known legal terms to explain the process to lawyers who read the SLG.

* Think of a skill like a short services contract. The skill tells the agent what you are providing and what you need the agent to get, and then the output you expect the AI agent to get.
* This is a tad underrated. Like a contract, the terms or words used in a skill are very important. Large language models are able to read and self correct typos in your prompts, but frontier models take your instructions very seriously.
* Specificity is a crucial element. "Relevant to my practice" is as useless in a skill as "reasonable endeavours" is without context, so you write it out in limbs: companies and directors' duties, insolvency, commercial contract, arbitration, employment where the employer is a company. Then the proviso every corporate lawyer knows — criminal law is excluded, except when it is your client's director in the dock.
* As much as the previous, restraint is becoming a special skill in providing instructions to an agent. Telling an agent to find 8 articles on a slow news day might seem an impossible task. An agent might be forced to come up with *anything*, that is hallucinate, just to fulfil an instruction. The best contract drafters know how to employ ambiguity strategically. Your goal is not just to constrain the agent, but to lead it to produce its best work.

Every time we encountered a problem, the agent rewrote it. The promise of agentic coding is that you don’t need to read code, and at some level, database and API schemas fade into the background too. Hence, we focused on what we need to provide the agent — our judgement. 

*Fun behind the scenes facts*: To write the SLG article, I tried several techniques about working with agents which I acquired over the last few months. Obvious things first, I didn’t write any code. I pointed an agent to the task to create a Singapore Law Watch reading skill. Then I asked it to review its work and draw out lessons. Have it run a few times, and I had a verifiable narrative describing the trials of writing this skill. A loop, neat! 

## Send the agent in first

To proceed on this tutorial, you’re going to need a skill reading, MCP connecting client. Claude Code works and so does Codex. The desktop versions of these tools can connect to the MCP with some configuration. If you want to know whether your AI client supports it or how to set it up, you should just ask it. 

Connecting is the short part. For Claude Code:

```bash
claude mcp add --transport http zeeker https://mcp.zeeker.sg/mcp
```

Other clients take the same URL in their MCP settings. Zeeker is a Singapore legal database I maintain, and it is public and free: no sign-up, no API key, 60 calls a minute, which no briefing will ever approach. Both clients above need a paid plan of their own, though — that is the only thing here that costs anything.

Now stop. Before you write a single instruction, find out what the server actually has. This is the step people skip.

You will not be typing any of it yourself. You write a sentence in English, the agent decides which tools to call, and your actual work is reading what comes back. So the first move is a prompt, not a command:

```text
You're connected to the zeeker MCP. Before I write anything, show me what is
in there — the databases, the tables in each, and the full schema of the
judgments table. List the columns; don't summarise them.
```

Underneath that sentence, three of the six tools do all the work and exist only for this moment: `list_databases`, `list_tables` and `describe_table`. They never appear in the finished brief, because surveying the ground is not the job of producing a briefing.

What comes back first is five databases: court judgments, PDPC enforcement decisions and guidance, newsroom releases from eight ministries and agencies, Singapore Law Watch headlines and commentaries, and the daily extractions behind SG Law Cookies. Then, one level down, the part worth slowing over — the judgments schema:

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

Three things in that output change how you draft. There are 10,804 judgments, so anything that tells the agent to "look at everything" is already wrong. There is a light column set distinct from the available set, so you can ask for the nine columns a briefing needs and leave the full judgment text where it is. And there is a column called `subject_tags`.

That column is the reason to build here rather than on a feed. It carries the subject in the court's own words:

```text
"Insolvency Law — Bankruptcy — Statutory demand — Setting aside of statutory demand"
"Arbitration — Award — Recourse against award — Breach of natural justice"
"Contract — Termination"
```

The feed's `category` told you who was speaking. This tells you what the case is about. So what you count as relevant stops guessing and starts matching a field:

```markdown
"Practice Interests" means any of the following subject areas, as they appear
in the `subject_tags` field of a judgment or in the title or summary of any
other item:
(a) Companies, including directors' duties, shareholder disputes and oppression;
(b) Insolvency Law, including bankruptcy, judicial management and winding up;
(c) Contract, where a commercial party is involved;
(d) Arbitration.

(Abridged — the finished file below runs to eight limbs plus exclusions.)
```

Those tags are written by hand, one judgment at a time, and they are not uniform. Some use an em dash, some an en dash, some no separator at all, and a few run to several paragraphs. Your matching rule should compare case-insensitively, match on the leading subject words rather than splitting on a separator, and treat a tag it cannot parse as uncertain rather than excluded. That is ordinary care with hand-written data.

[The Judgment, Not the Summary: How Zeeker MCP Can Change the Way you do Legal Research](https://www.alt-counsel.com/ect-no-lawyers-zeeker/?ref=read-the-server-before-you-draft)

## The tools answer different questions

A feed has one verb: fetch. This server has six, and knowing which is which is most of the drafting:

- `list_databases`, `list_tables` and `describe_table` say what exists and what shape it is in. They get used while you are surveying, not while the briefing runs.
- `query_table` retrieves rows by filter and sort. Thirteen operators, including `gte` and `lte` on a date, `contains` and `startswith` on text.
- `search` runs full-text search across every indexed table at once.
- `fetch` returns a single row when you already have its URL.

Two of those look like they do the same job, and here is what matters: you are not the one choosing between them each morning. Your brief chooses, once, in writing, and the agent does exactly what it says for as long as you leave it there. A badly written instruction does not fail once. It runs again every morning until you notice.

The first version of my brief said: use `search`, scoped to the PDPC database, for enforcement decisions in the last three days. That reads like a reasonable instruction. Here is what `search` says about itself:

> Results are relevance-ranked: BM25 scoring within each source table, then reciprocal-rank fusion merges the per-table rankings into one list.

No date parameter. There never was one. So the agent, obeying my instruction to the letter, called `search` and got back, in this order:

```text
2026-06-11   Tanjong Katong Road South Sinkhole: Enforcement Actions To Be Taken
2022-09-13   Reply to Parliamentary Question on strengthening disclosure
2010-11-23   Media Brief - Contempt of Court Proceedings against Mr Alan ...
2026-07-13   Antitrust developments and enforcement activity in South-east Asia
2026-05-18   Three Online Retailers Caught Using False Urgency Tactics
```

Third result: a media brief from November 2010, ready to be served as this morning's news. The tool did exactly what its description says. I had read that description and still wrote an instruction assuming a filter which was never there.

The rule that went into the brief, and the one I would put in yours: **`search` answers "about what"; `query_table` answers "since when". A briefing is a "since when" question.** Keep `search` for the topical asks you make by hand, and sweep with `query_table`. Amend the instruction and the agent's call changes shape underneath it:

```json
{
  "database": "zeeker-judgements",
  "table": "judgments",
  "filters": [{"column": "decision_date", "op": "gte", "value": "2026-08-26"}],
  "sort": "-decision_date",
  "columns": ["citation", "case_name", "decision_date", "court", "subject_tags"]
}
```

This is a kind of instruction a feed-reading brief never needed. One verb, and it is just "fetch the feed". Six, and the brief has to say which tool serves which job, and which tool is wrong for it.

Which brings me to the habit, and it is the only reason I caught any of this. The agent will not tell you it was handed a bad instruction; it will carry one out and hand you a tidy document. So make it show its work:

```text
Before you write the briefing, show me every tool call you're about to make
and what each one returned. Just the calls and the raw rows.
```

Then look at the dates. Not the summaries, not whether the items seem plausible — the dates, the sources, the count. A wrongly drafted sweep returns real cases with real citations about the right subject, and the only thing marking it out is that one is from 2010. You are not writing code here. You are reading a transcript and checking it against what you asked for.

## You are querying live infrastructure

A feed is a file you download. A server is something you ask, and it can be asked badly.

Constrain every query. An unbounded request against 10,804 rows simply times out. So the first thing the brief says is that no table is ever queried without a date filter.

Done properly, a morning briefing is a handful of calls: one per source, a few dozen rows of light columns each.

Then there is the rhythm problem, which is the one that cost me a working briefing without ever looking broken. Judgments arrive most days — the most recent when I built this was dated 28 August, the day before. PDPC enforcement decisions do not. The most recent was 5 August, twenty-four days earlier. A single three-day window across both sources means the PDPC section returns nothing every single morning, and nothing about the output tells you that. An omitted section and a quiet section produce the same document.

You find this out before you set any window at all, and again it is one sentence:

```text
For each source I'm about to sweep, tell me the date of its most recent item.
```

The agent runs four unfiltered, three-row, newest-first queries and hands you four dates. It takes a minute, and it is the difference between a window you chose and a window you assumed.

So "The Window" stops being one period and becomes four: judgments over three days, PDPC over sixty, government newsrooms over fourteen, Singapore Law Watch over three. Then the line that makes the difference visible — an empty source is named, with the date of its most recent item. "PDPC: nothing since 5 August" is a sentence you can act on.

The same reasoning covers partial failure. Every response from this server carries a count of the tables it could not reach, so a sweep across four sources can succeed on three and look completely normal. The brief has to say what to do about that: name the source that failed, and say the briefing is partial.

## Provenance comes with the data

Every response carries a provenance block — source, licence, attribution — and every row carries a citation string, already formatted:

```text
Reformd Pte Ltd v Kopigi Pte Ltd [2026] SGHC 175 (SGHC, 2026-08-28)
  — https://www.elitigation.sg/gd/s/2026_SGHC_175
```

Nothing about an RSS feed does this. For a lawyer it is the strongest practical argument for building against a server that bundles provenance with the row, rather than scraping a site and assembling the reference yourself. The citation is not something your assistant assembles from parts it half-remembers. It arrives with the row. So the brief can forbid the assembly outright: cite using the string exactly as returned, never construct, reformat or complete one.

The provenance block does the same job one level up, naming the source, the licence and the required attribution on every response — so when a line from a briefing ends up in a note to a client, you know the terms it came under. Note too what the schema said: full judgment text is indexed but not distributed, so your briefing links to the Judiciary's own copy rather than passing around someone else's. That is a good property to inherit, and you only find it by reading the schema first.

The other rules about honesty answer the same shape of problem: an assistant that knows a great deal about Singapore company law can furnish a plausible briefing without querying anything, and asked for eight items on a thin day it will find eight.

Which is where the comparison lands. In the feed version, three instructions covered what counted as an honest answer. Here it takes six, and the three new ones all follow from talking to a live server rather than reading a file: name empty sources, report incomplete sweeps, cite what you were given.

Your judgment is the constant. Everything else is plumbing.

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

The columns named for `pdpc`, `sg-gov-newsrooms` and `sglawwatch` came from the same survey, run once per database. Save the file in your client's skills folder — `~/.claude/skills/` for Claude Code — then open the client and ask for your morning briefing.

## The same server carries two layers

There is a second decision hiding in all of this, and it is worth making on purpose rather than by default.

Everything above points the brief at raw judgments, where you own the relevance test and the agent writes the "so what" from a summary. But the same server carries the `sg-law-cookies` database, the layer behind the bakery: each row is a single proposition rather than a whole case, arriving with `significance` already rated and a `why_it_matters` already written. Both sit outside the light column set, so you name them in `columns` to get them — the same allow-list you met in the judgments schema.

Point your brief there and two things change at once. The unit gets finer, so one judgment can surface as three propositions and only the one touching your practice reaches you. And the calls you had been writing instructions to make — is this significant, why does it matter — are inherited rather than made.

That is the trade, and the question to ask of any derived layer anywhere: how much of the judgment am I delegating, and am I comfortable with who made it? Both are defensible. The one thing I would not do is choose without noticing you chose.

If you want the finer unit without inheriting the ratings, `folio_areas` is the middle path. It carries FOLIO identifiers — an open legal taxonomy rather than anything of mine — so what you count as relevant can match on a standard that will outlive any one database.

## Making it yours

Everything with your name on it lives in one place, so adapting this is a substitution exercise. A construction lawyer would define `Practice Interests` around adjudication under the Security of Payment Act, defects and delay claims, BCA announcements and standard-form revisions, would move `Excluded Matters` to cover corporate and commercial news, and would tighten the urgency ranking, because adjudication timelines are measured in days rather than weeks. Nothing else changes at all.

If your server is not this one, the six moves are still the same. Interrogate the schema before you draft. Find out which tool answers "since when" and which answers "about what". Constrain every query. Ask each source when it last published anything, before you decide how far back to look. Make the brief report a partial sweep. Take the citations the server gives you instead of letting them be assembled. Then write down what you actually care about, which is the part no model can write for you.

[What 7,308 Agent Runs Taught Me About Writing Better Skills](https://www.alt-counsel.com/skillsbench-analysis/?ref=read-the-server-before-you-draft)

One note on confidentiality. All of this runs on public data. The databases are public, the skill file holds your professional interests rather than your clients' affairs, and no matter name or document goes near the workflow. [The Law Society's advisory of 2 April 2026](https://www.lawsociety.org.sg/law-society-advisory-on-the-use-of-publicly-available-ai-tools-pdf-link) warns against feeding client information into publicly available AI tools, and a briefing skill never needs to. Build first where the stakes are breakfast.

## What you end up with

The first briefing you get will be wrong somewhere. That is the useful part, and it is why the rules about reporting gaps matter more than they look: a briefing that reports its own gaps can be corrected in ten seconds over coffee, and one that does not can only be trusted or ignored.

Run it for a week. Each time it is wrong, ask which instruction failed and amend that one rather than the whole document. After three or four amendments the file goes quiet and simply works, and what you are left with is a precise written record of your own editorial judgment — which you have probably never had to set down before, because no junior ever asked you to.

Mine is retired now — Cookies does that job for me — and I still think it was worth the fortnight it took to write.
