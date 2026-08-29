# Outline: Read the Server Before You Draft

Revised 2026-08-29 (Session 4, third pass). Working document — not published content.
Title settled by Houfu 2026-08-29.

**Subject, set by the user:** teaching lawyers to build skills against MCP servers. Zeeker MCP is
the worked example, not the subject. Same thrust as the Law Gazette article — read the source
before you draft, then write the contract — but the source is now a live server with tools, and
that changes the brief in specific, teachable ways.

**Standing instruction from the user (2026-08-29):** *"we shouldn't be trying to expose zeeker's
weaknesses. my attitude is that there's a bug then we should fix it."* Bugs get fixed, not
published. Nothing in this post is an audit of Zeeker.

Voice reference: `come-into-the-bakery`. Fenced code blocks are stripped by the linter's
`stripToProse()`, so schema output, tool calls and the full SKILL.md listing are free against the
word budget.

---

## What changed from the second outline

The second pass built the post around five observed defects, three of them Zeeker's, on the theory
that a tutorial spending a third of its length on the author's own database failing could not read
as a demo. The user rejected the premise: a bug is something to fix.

That was the wrong instinct anyway. It made Zeeker the subject — just in the negative. The post is
now about **what is different when a skill connects to an MCP server instead of reading a file**,
which is a lesson that transfers to any MCP, and Zeeker is simply the legal one available to
demonstrate on.

Two consequences: the defect tour is gone, and the RSS material becomes load-bearing rather than
nostalgic. Every difference the post teaches is measured against the feed-reading baseline, so §2
now has a job.

## The spine

**Protected lines both survive.** "The Definitions clause is the constant. Everything else is
plumbing." — and it resolves a tension the post creates rather than sitting inert: the plumbing is
exactly where MCP changes everything, and the good news is that plumbing is learnable once while
your judgment stays where it was. "I rewrote each time." lands in §2.

**The spine:**

> An MCP does not just give your skill a better source. It gives it tools to choose between, live
> infrastructure to be careful with, and status to report — so the brief grows clauses a
> feed-reading skill never needed.

**The finding, correctly attributed this time:** on RSS the Standard of Performance clause was three
lines. Against the MCP it is six. Not because the source is worse — because an MCP response can be
partial, can front several sources on different rhythms, and can describe its own provenance, none
of which a fetched feed can do. The Definitions clause barely moved.

## The six differences the post teaches

These are the content. Each is a property of MCPs generally, demonstrated on Zeeker, and each
produces a clause.

1. **You interrogate the source instead of reading it.** `list_databases` → `list_tables` →
   `describe_table` replaces opening a feed in a browser. Same precedent-reading move, new
   instrument. (§3)
2. **The source has verbs, and they answer different questions.** RSS has one: fetch. An MCP has
   several that look interchangeable and are not. The brief must say which tool serves which
   obligation — a clause type that does not exist in a feed-reading skill. (§4)
3. **The data is structured, so Definitions can name a field.** A headline forced a guess; a typed
   column and a real taxonomy let the clause match. Personalisation gets sharper as the source gets
   richer — the trade-off everyone assumes is not one. (§3)
4. **You are querying live infrastructure, not downloading a file.** Constrain every query; an
   unbounded ask against a real database returns nothing useful. (§5)
5. **A sweep can half-succeed.** A feed arrives or it doesn't. An MCP response carries status, so
   the brief can require the skill to say when it only got part of the picture — and one server can
   front several sources on different publishing rhythms, which means one window starves the slow
   ones silently. (§5)
6. **Provenance and citations come with the data.** Licence, attribution and a `_citation` per row.
   So the brief can forbid the skill from constructing a citation at all — the most lawyerly gain
   available from building against an MCP rather than scraping. (§6)

---

## Section outline (2,800 words — Houfu's approved budget, and it fits)

### 1. Why there is a second version (250)

Flat interior opening, payoff stated, no withheld reveal.

- The Gazette piece was written for lawyers generally, so it stopped short of how you actually build
  the thing, and it ran on Singapore Law Watch's RSS because most Singapore lawyers already know
  that feed. Both deliberate.
- This one builds against an MCP server, and connecting a skill to a live source changed the brief
  more than the change of source did.
- **Emotional core (user's words, protected):** "I don't run this skill because I have cookies."
  Once, at normal volume, then immediately given its meaning.
- BOOKMARK CARDS, no lead-in sentences (R2): the Gazette article; `come-into-the-bakery`.

**Do not** correct the published Gazette line. SETTLED (Session 1).

### 2. The baseline: what a feed-reading brief looked like (300)

Load-bearing. Every difference in §3–§6 is measured against this, so it earns its 300 words.

- The contract anatomy in one pass: Definitions, Obligations, Standard of Performance, and what to
  do when performance is impossible.
- Definitions is the clause that matters — "relevant to my practice" is as useless in a skill as
  "reasonable endeavours" without context.
- RSS warrants four fields, and `category` names the speaker, not the subject — so relevance had to
  be **guessed from a headline**. Planted for §3 to resolve.
- The two failures that shaped the clauses: the silent discard, and padding a thin day.
- **Protected line, standalone paragraph:** "I rewrote each time."

### 3. You interrogate an MCP; you don't read it (450)

- Connecting: `mcp.zeeker.sg/mcp`, no auth, no query logging, about five minutes. Name the clients.
- `list_databases` → `list_tables` → `describe_table`, with the real output in a fenced block. This
  IS the read-the-precedent move; only the instrument changed.
- What the reading gives you that a feed cannot: typed columns, row counts, and a taxonomy —
  `subject_tags` carries the subject in the court's own words. Show two or three real strings.
- **Guess becomes match.** The Definitions clause can now name a field: "as they appear in the
  `subject_tags` field". Show the clause beside the RSS one it replaces. This is difference 3, and
  it is the answer to the trade-off everyone assumes — depth and personalisation are not opposed.
- Zeeker introduced in one line, plainly and without a gap tour: a Singapore legal database I
  maintain, free, public data, no sign-up.

### 4. The tools answer different questions (500)

The most MCP-specific lesson in the post, and the section with the admission in it.

- A feed has one verb. This server has six tools, and two of them look like they do the same job.
- `search` is relevance-ranked across the corpus and takes no date parameter — **by design, and the
  tool description says so.** I asked it for the last three days of enforcement decisions and got
  back items from 2026-06-11, 2026-05-18, 2022-09-13 and 2010-11-23 — a sixteen-year-old
  contempt-of-court media brief, ready to be served as this morning's news.
- **The admission, and it is about the drafter, not the server** (Wei Lin's channel): the tool did
  exactly what it says. I had read both descriptions and still wrote a clause that assumed a date
  filter that was never there. Stated once, plainly, not performed.
- The rule that goes in the brief: `search` answers "about what"; `query_table` answers "since
  when". A briefing is a "since when" question. Keep `search` for topical asks.
- **The new clause type:** a feed-reading brief never had to allocate obligations to tools. This one
  does, obligation by obligation. Show it.

### 5. You are querying live infrastructure (450)

- Constrain every query. An unbounded ask against a real database is not a bigger version of a small
  one — it is a request that does not come back. Generic to every MCP sitting in front of real
  storage; state it as the rule, not as a complaint about any server.
- **A sweep can half-succeed.** A fetched feed arrives or it doesn't. An MCP response carries
  status, so a briefing can be built from three sources out of four and look completely normal. The
  clause: if a response reports a failed table or a call errors, name the source and say the
  briefing is partial. *A short briefing and a broken briefing look identical unless the brief makes
  the skill say which one you are reading.*
- **One server, several rhythms.** Judgments arrive daily; enforcement decisions do not. A single
  three-day window leaves the slow source empty every morning, and nothing about the briefing says
  so — an omitted section is indistinguishable from a quiet one. How you find out: ask each source
  for its most recent item before you set its window. Four cadences, and the clause that names an
  empty source with the date of its most recent item.

### 6. Provenance comes with the data, so forbid inventing it (500)

- Every response carries a provenance block — source, licence, attribution — and every row a
  `_citation` string. Nothing about a feed does this.
- The clause: cite using `_citation` exactly as returned; never construct, reformat or complete a
  citation. For a lawyer this is the strongest single argument for building against an MCP rather
  than scraping a site: the source vouches for itself, and the brief can make the skill lean on that
  instead of its memory.
- The rest of the Standard of Performance clause, each line paired with the failure it answers:
  summaries supportable from what was returned; never supplement from memory; if no source can be
  reached, say so and stop.
- **The finding, stated here:** on RSS this clause was three lines. Against the MCP it is six — and
  the Definitions clause barely moved. The protected line lands here.
- The complete SKILL.md as a fenced block (free against the budget).

### 7. Your own Definitions clause (200)

- ONE worked substitution, in prose. *(Voice Guide §2.1 — he deletes example triads.)*
- **The transfer, and this is the section that keeps the post from being about Zeeker:** a reader
  with a different MCP and a different practice does the same six things. Interrogate the schema.
  Find which tool answers "since when". Constrain the query. Make it report a partial sweep. Take
  the citations the server gives you. Put your judgment in Definitions.
- Public data only, two or three sentences: the skill file holds your professional interests, not
  your clients' affairs; the Law Society's 2 April 2026 advisory warns against feeding client
  information into publicly available tools, and a briefing skill never needs to.

### 8. Close (150)

Soft, flat or hopeful. No mic-drop, no aphoristic kicker, no teaser (§2.6).

Sections sum to 2,800.

---

## Material that is now OUT, and why

- **The 19% unparseable `subject_tags` audit.** Cut from the post's argument. See open decision 1 —
  it is fixable at ingest, and the user's instruction is that fixable things get fixed. What may
  survive is a single generic line in the matching clause (compare case-insensitively, don't assume
  a separator) with no audit and no number attached.
- **`failed_tables: 1` on unscoped search.** The *mechanism* is taught in §5 because it is a real
  MCP property and a good clause. The open defect is not published. See open decision 2.
- **"Three of five defects are Zeeker's own."** The whole anti-demo-by-self-criticism device is
  gone. The post is not about Zeeker, so it does not need to prove it is not a demo by attacking it.
- **"Five years of tooling apart."** Cut 2026-08-29 — unsupportable on any reading.

## Open decisions

1. **The dirty `subject_tags`.** Fix it at ingest and drop it from the post entirely, or keep a
   generic tolerant-matching line with no audit behind it? Recommend: fix, and keep the one-line
   clause. The number does not survive either way.
2. **`failed_tables: 1` on unscoped search — fix before publishing?** §5 teaches `failed_tables` as
   an honesty mechanism, which reads oddly if the server has an open one. Not a blocker for
   drafting; is a blocker for publishing.
3. **Budget: 2,800 holds.** The 3,200 raise proposed last pass is withdrawn — losing the defect tour
   freed the room, and the sections above sum to 2,800 exactly.

## Standing risks carried into the draft

- **Not a product demo.** Every lesson is stated as a property of MCPs and demonstrated on Zeeker;
  no section argues that Zeeker is good. §7 hands the method to someone with a different server.
- **Not a portfolio tour.** Three of the author's projects are in frame. §7 is the guard.
- **Not "what the Gazette wouldn't print."** They cut for audience and length, not nerve. §1 says so.
- **Re-run every figure at final draft** — everything in §3–§6 is dated 2026-08-29 and the corpus
  grows daily.
- Backlink curation is a later phase. Seeds: Gazette article and `come-into-the-bakery` in §1;
  `ect-no-lawyers-zeeker` and `tool-vs-infrastructure-mindset` around §3; `skillsbench-analysis`
  where §7 makes the point that the domain judgment is the part a model cannot supply.
