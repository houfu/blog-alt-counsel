---
word_budget: 2800
budget_approved_by: houfu  # 2026-08-29: "it's a tutorial. so loosen word count requirements"
budget_tolerance: 10
primary_audience: wei-lin
secondary_audience: [marcus]
thesis_keywords: ["morning briefing", "skill", "Definitions", "MCP"]
protected_lines:
  - "In the SLG article, the agent rewrote each time."  # amended by Houfu's hand edit 2026-08-30
  - "The Definitions clause is the constant. Everything else is plumbing."
voice:
  lane: learning-in-public
  moves: [uncomfortable-admission, specific-numbers, framework-presentation]
interrogation:
  diagnosis: >-
    Tested and revised four times. "Fuller tutorial" did not mean more detail (a complete 1,900-word
    tutorial already existed), did not mean a second tutorial on a different source, and did not
    mean a defect tour of the author's own database. The diagnosis that survived is the user's,
    given 2026-08-29: the Gazette article was written for lawyers generally and deliberately stopped
    short of the build; this post teaches lawyers to build skills against MCP servers, with Zeeker
    MCP as the worked example. Same thrust as the Gazette piece — read the source, then draft the
    contract — but the source is a live server with tools, and that changes the brief. CONTRADICTED
    IF the six differences in outline.md turn out to be true of any external data source rather than
    of MCPs specifically; if so the post is about calling APIs, not about MCP, and the title and
    framing must follow the truth.
  differentiation: >-
    Every skill tutorial teaches a finished skill against one tidy source. Almost none teach what
    changes when the skill talks to a live server: that the source has several verbs and picking the
    wrong one returns plausible garbage, that a sweep can half-succeed, that one server can front
    sources on different publishing rhythms, and that provenance and citations arrive with the data
    so the brief can forbid the skill from constructing them. Each of those produces a clause a
    feed-reading brief never needed. And there is a real legal MCP to demonstrate on, which almost
    no legal tutorial has.
  framing_risk: >-
    LOW, returned from MEDIUM on 2026-08-29 once the post stopped being organised around defects.
    Product-demo risk is answered by what the post is about rather than by self-criticism: every
    lesson is stated as a property of MCP servers and demonstrated on Zeeker, no section argues that
    Zeeker is good, and beat 7 hands the method to a reader with a different server and a different
    practice. STANDING INSTRUCTION from the user: "we shouldn't be trying to expose zeeker's
    weaknesses. my attitude is that there's a bug then we should fix it." Bugs get fixed, not
    published — the dirty subject_tags audit and the open failed_tables count are out of the post.
    Second watchpoint unchanged: must not read as "what the Law Gazette wouldn't print" — they cut
    for audience and length, not nerve, and beat 1 says so plainly.
  subject: >-
    Original message subject = a fuller tutorial of the Gazette article. Current subject = building
    a skill against an MCP server, taught in technical depth, with a morning briefing as the worked
    task and Zeeker MCP as the worked source. DRIFT RISK: with three of the author's own projects in
    frame (RSS skill, Cookies, Zeeker) this can become a portfolio tour, and with his own server as
    the substrate it can become a demo. The reader must end with THEIR Definitions clause pointed at
    THEIR server. Beat 7 is the guard.
must_link: [come-into-the-bakery, skillsbench-analysis, tool-vs-infrastructure-mindset]
source_article: "https://lawgazette.com.sg/practice/tech-talk/breakfast-eventually-why-lawyers-should-build-their-own-tools/"
source_artifact: "https://gist.github.com/houfu/6f7b197ff3f5b9fbc267bcf5e748f017"
tags: [LegalTech, AI, Tutorial, Singapore]
target_date: ~
---

# Pitch: morning-briefing-tutorial

## Original framing (verbatim, never edited)

> Howdy there. I published a article on the Singapore law gazette:
> https://lawgazette.com.sg/practice/tech-talk/breakfast-eventually-why-lawyers-should-build-their-own-tools/
>
> I've been told that I should make a fuller tutorial of it

**Governing scope, set by the user 2026-08-29 (verbatim):**

> ultimately, we want to write a skill that is able to query a website, be it a RSS or through an
> MCP, and get a morning briefing. The point about showing zeeker is that we are able to both
> achieve the point of a hyper personal skill yet reach a rich db like zeeker

**Framing reset, set by the user 2026-08-29 (verbatim):**

> the SLG article had different purposes: it was written for the general public of lawyers, so
> diving into something overly technical like how to actually build the thing was not included.
> this time we're going to dive deep into how to actually build the skill, but instead of using a
> boring thing like singaporelawwatch rss (which i chose because many lawyers in singapore are
> familiar with it) we're going to pick zeeker, a far richer and my own database

**Subject settled by the user 2026-08-29 (verbatim):**

> we shouldnt be trying to expose zeeker's weaknesses. my attitude is that there's a bug then we
> should fix it. but perhaps what this tutorial should teach is that skills are different when they
> connect to an external source like Zeeker MCP (it is roughly the same thrust as the SLG article).
> This is not a product demo. We are teaching lawyers to build against MCPs

**Title:** Read the Server Before You Draft  [SETTLED by Houfu 2026-08-29]
**Thesis:** An MCP does not just give your skill a better source. It gives it tools to choose
between, live infrastructure to be careful with, and status to report — so the brief grows clauses a
feed-reading skill never needed.
**Spine:** The Definitions clause is the constant. Everything else is plumbing.
**Emotional core (user's words):** "I don't run this skill because I have cookies."

## Pitch

A morning briefing skill is a plain-text file that says what your practice is and what counts as
done. I wrote one for the Law Gazette against Singapore Law Watch's RSS feed, for lawyers
generally, which left out how you actually build it. This is the version with the
building left in, and it connects to an MCP server rather than reading a feed — which changes the
brief more than the change of source does. A feed has one verb: fetch. A server has several that
look interchangeable and are not, so the brief must say which tool serves which obligation; I got
that wrong and was served a 2010 decision as this morning's news. A feed arrives or it doesn't, but
a sweep can half-succeed, so the brief must make the skill say when it only got part of the
picture. One server fronts sources on different rhythms, so a single window starves the slow ones
and nothing in the output says so. And provenance and citations arrive with the data, so the brief
can forbid the skill from ever constructing one. Six differences, six clauses. The Definitions
clause — the part that is actually your practice — barely moves.

## Beats

- **Open — why there is a second version.** The Gazette piece was for lawyers generally, so it
  stopped short of the build, and it ran on SLW's RSS because they already know that feed. Both
  deliberate. This one builds against an MCP server, and connecting to a live source changed the
  brief more than the change of source did. "I don't run this skill because I have cookies", stated
  once and immediately given its meaning. BOOKMARK CARDS, no lead-in sentences (R2). (250 words)
- **The baseline: what a feed-reading brief looked like.** Load-bearing, because every later
  difference is measured against it. The contract anatomy in one pass. RSS warrants four fields and
  `category` names the speaker, not the subject, so relevance had to be guessed from a headline —
  planted for beat 3 to resolve. The two failures that shaped the clauses. "In the SLG article,
  the agent rewrote each time."
  (300 words)
- **You interrogate an MCP; you don't read it.** Connecting to mcp.zeeker.sg. `list_databases` →
  `list_tables` → `describe_table` with real output — the same read-the-precedent move, new
  instrument. Typed columns, row counts, and `subject_tags` carrying the subject in the court's own
  words, so Definitions can name a field and MATCH rather than guess. Show the clause beside the RSS
  one it replaces. Depth and personalisation turn out not to be opposed. (450 words)
- **The tools answer different questions.** Six tools; two look like they do the same job. `search`
  is relevance-ranked and takes no date — by design, and its description says so. Asked for three
  days of enforcement it returned 2026-06-11, 2026-05-18, 2022-09-13 and 2010-11-23, a
  sixteen-year-old contempt-of-court media brief. The admission is about the drafter, not the
  server: I had read both descriptions and still wrote a clause assuming a date filter that was
  never there. `search` answers "about what"; `query_table` answers "since when". The new clause
  type: allocating obligations to tools. (500 words)
- **You are querying live infrastructure.** Constrain every query — an unbounded ask against a real
  database is a request that does not come back. A sweep can half-succeed, so the brief must make
  the skill name a partial sweep: a short briefing and a broken briefing look identical otherwise.
  And one server fronts sources on different rhythms, so a single window leaves the slow ones empty
  every morning with nothing to show for it. Ask each source for its most recent item before setting
  its window. (450 words)
- **Provenance comes with the data, so forbid inventing it.** A provenance block on every response,
  a `_citation` on every row. The clause: cite exactly what is returned, never construct or complete
  one — the strongest lawyerly argument for building against an MCP rather than scraping. The rest
  of the Standard of Performance clause, each line paired with the failure it answers. The finding:
  on RSS this clause was three lines, here it is six, and Definitions barely moved. Complete
  SKILL.md as a fenced block. (500 words)
- **Your own Definitions clause.** ONE worked substitution, in prose. The transfer to a reader with
  a different server and a different practice — the same six moves. Public data only and the Law
  Society advisory, in two or three sentences. (200 words)
- **Close.** Soft, flat or hopeful. (150 words)

## Out of scope

- **Persuading anyone that lawyers should build.** The Gazette's first section. This audience
  arrived convinced; the words go to the build.
- **Exposing Zeeker's weaknesses.** SETTLED 2026-08-29 by the user: bugs get fixed, not published.
  The dirty `subject_tags` audit (19% unparseable) and the open `failed_tables` count are OUT. The
  `failed_tables` *mechanism* is taught in beat 5 because it is a real MCP property and a good
  clause; the open defect is not published.
- **Re-teaching the contract anatomy at Gazette length.** Beat 2 is 300 words and exists to give
  beats 3–6 something to be different from.
- **A step-by-step install guide** for Claude Code / Codex / Cowork. Linked, not reprinted.
- **How Zeeker or Cookies is built.** Zeeker is the worked source, not the subject. One line and a
  backlink for Cookies.
- **The "attachment" failure.** CUT 2026-08-27 — belongs to the earlier morning triage workflow, not
  this skill. Do not reinstate.
- **Any correction of the published Gazette article.** "Earns its keep" meant it worked; perpetual
  use was never claimed. SETTLED.
- **MCP-vs-RSS as an architecture debate.** The feed is the baseline that makes the differences
  legible, not a rival being beaten.
- **"Five years of tooling apart."** CUT 2026-08-29 — the two skills are five weeks apart and RSS
  2.0 to MCP is 22 years. No reading supports the number.
