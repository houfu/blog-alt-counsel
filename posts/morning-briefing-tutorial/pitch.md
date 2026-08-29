---
word_budget: 2800
budget_approved_by: houfu  # 2026-08-29: "it's a tutorial. so loosen word count requirements"
budget_tolerance: 10
# 2026-08-29 (2nd pass): a raise to 3,200 is proposed in outline.md for the build sections.
# NOT applied — 2,800 is what Houfu approved and beats below still sum to it.
primary_audience: wei-lin
secondary_audience: [marcus]
thesis_keywords: ["morning briefing", "skill", "Definitions", "source"]
protected_lines:
  - "I rewrote each time."
  - "The Definitions clause is the constant. Everything else is plumbing."
voice:
  lane: learning-in-public
  moves: [uncomfortable-admission, specific-numbers, framework-presentation]
interrogation:
  diagnosis: >-
    Tested and revised three times. "Fuller tutorial" did not mean more detail (a complete
    1,900-word tutorial already existed). Nor did it mean "rebuild it on Zeeker" as a second
    tutorial. The diagnosis that survived is the user's, given 2026-08-29: the Gazette article was
    written for lawyers generally, so it deliberately stopped short of how you actually build the
    thing, and it ran on SLW's RSS because Singapore lawyers already know that feed. This post goes
    technical, and goes at Zeeker because a richer source rewards depth. CONTRADICTED IF the build
    sections can be written without any of the observed defects — if the post is a clean
    walkthrough, the depth is decoration and the honest failures were the actual subject.
  differentiation: >-
    Depth, and the user said so directly: the Gazette piece could not go technical for its audience;
    this one does. Every skill tutorial shows a finished skill against a tidy source. This one reads
    the schema first, picks between two tools that look interchangeable and are not, writes a
    Definitions clause against a taxonomy the courts wrote by hand, and spends a third of its length
    on five observed defects — three of them in the author's own database. It also refuses the usual
    trade-off: bought tools give depth without personalisation, hand-rolled filters give
    personalisation without depth. The brief-as-contract gets both, and pays in honesty clauses.
  framing_risk: >-
    MEDIUM, raised from LOW on 2026-08-29 when the post became a Zeeker-only build. Product-demo
    risk is now the live one and is answered structurally, not with a disclaimer: (1) Zeeker's
    limits are stated in beat 3 BEFORE it does any argumentative work — one person, $12/month, real
    coverage gaps, unofficial, never "authoritative or complete"; (2) three of the five defects are
    Zeeker's own and carry ~1,000 words — a tutorial that spends a third of its length on how the
    author's database fails is not a demo; (3) beat 7 hands the method to a reader with no Zeeker
    and no Singapore practice. Second watchpoint unchanged: must not read as "what the Law Gazette
    wouldn't print" — they cut for audience and length, not nerve, and beat 1 says so plainly.
  subject: >-
    Original message subject = a fuller tutorial of the Gazette article. Current subject = actually
    building the briefing skill, in technical depth, against Zeeker. Still a tutorial, and the
    Gazette piece is the origin rather than the ceiling. DRIFT RISK: with three of the author's own
    projects in frame (RSS skill, Cookies, Zeeker) this can become a portfolio tour. The reader must
    end with THEIR Definitions clause, not an appreciation of his. Beat 7 is the guard.
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

**Title:** Write the Brief. Swap the Source.  [WORKING — the swap is no longer the centre of
gravity, so the title likely moves with the framing. Houfu's to settle.]
**Thesis:** The deliverable is the brief, not the tool. Read the source before you draft the clause,
then write down what you would accept as an honest answer — because the briefing looks the same
either way.
**Spine:** The Definitions clause is the constant. Everything else is plumbing.
**Emotional core (user's words):** "I don't run this skill because I have cookies."

## Pitch

A morning briefing skill is a plain-text file that says what your practice is and what counts as
done. I wrote one for the Law Gazette against Singapore Law Watch's RSS feed, for an audience of
lawyers generally, which meant leaving out how you actually build the thing. This is the version
with the building left in, and it runs against Zeeker, the Singapore legal database I maintain,
through its MCP server — because a four-field RSS feed cannot reward the depth and 10,804 judgments
can. The Definitions clause barely changes. Everything around it does. The feed gave you a headline
and a guess; the database gives you the court's own subject tags, so the clause can match instead of
guess. That is supposed to be the trade-off — bought tools have the depth, hand-rolled filters have
the personalisation — and it isn't one. But the depth is not free. Two tools look interchangeable
and one of them served a 2010 decision as this morning's news; one window across four sources leaves
an entire regulator permanently empty; a fifth of the court's own subject tags will not parse. Every
one of those produces a briefing that reads perfectly normally. Writing the clause that makes it
say otherwise is most of the craft.

## Beats

- **Open — why there is a second version.** The Gazette piece was for lawyers generally, so it
  stopped short of the build, and it ran on SLW's RSS because they already know that feed. Both
  deliberate. This one goes technical and goes at Zeeker — richer, and mine, which is why I can also
  show you where it breaks. "I don't run this skill because I have cookies", stated once and
  immediately given its meaning. BOOKMARK CARDS, no lead-in sentences (R2). (250 words)
- **What the Gazette version taught, compressed.** The contract anatomy in one pass — Definitions,
  Obligations, Standard of Performance. The `category` trap planted for beat 3 to resolve: RSS names
  the speaker, not the subject, so relevance had to be guessed from a headline. The two attested
  failures that shaped the clauses — the silent discard, and padding a thin day. "I rewrote each
  time." (250 words)
- **Reading the source, properly this time.** Connecting to mcp.zeeker.sg; `list_databases` →
  `list_tables` → `describe_table` with real output. 10,804 rows, the light columns, a provenance
  block, a `_citation` per row. `subject_tags` in the court's own words, so the clause can MATCH —
  the callback that resolves the `category` trap. Zeeker's limits stated here, before it does any
  argumentative work. (450 words)
- **The two tools that look interchangeable.** `search` versus `query_table`. v1 asked `search` for
  the last three days and got 2026-06-11, 2026-05-18, 2022-09-13 and 2010-11-23 — a sixteen-year-old
  contempt-of-court media brief served as today's news. The admission: I had read both tool
  descriptions and still assumed a date filter that was never there. `search` answers "about what";
  `query_table` answers "since when". Plus: never scan unfiltered — it times out. (450 words)
- **Writing the Definitions clause against real data.** Practice Interests written as they appear in
  `subject_tags`. Then the data fights back: 446 tag strings across 200 judgments, 84 of them (19%)
  will not split on the em dash, some are whole headnotes; case drift costs 6 tag hits and one
  judgment of 200 vanishes — small, and silent, and do not inflate it. The clause that survives
  contact. The transferable lesson: the first 8 rows were clean; the defect only appears at 200.
  (450 words)
- **What counts as an honest answer.** The Window is not one window — judgments daily, PDPC's most
  recent 24 days back, so one 3-day window leaves PDPC empty every morning and the briefing looks
  entirely normal. Four cadences. Then the honesty clauses, each with the failure it answers: name
  empty sources with a date, report `failed_tables`, cite `_citation` verbatim, never supplement
  from memory. The finding: on RSS this clause was three lines; here it is six. The complete
  SKILL.md ships as a fenced block. (550 words)
- **Your own Definitions clause.** ONE worked substitution, in prose. The transfer to a reader with
  no Zeeker and no Singapore practice — a schema, two tools, a hand-written taxonomy, same method.
  Public data only and the Law Society advisory, in two or three sentences. (250 words)
- **Close.** Soft, flat or hopeful. (150 words)

## Out of scope

- **Persuading anyone that lawyers should build.** The Gazette's first section. This audience
  arrived convinced; the words go to the build and the failures.
- **Re-teaching the contract anatomy at Gazette length.** Beat 2 is 250 words and exists only to
  make the Zeeker clauses legible. Anything that does not earn its place in beats 3–6 is cut.
- **A step-by-step install guide** for Claude Code / Codex / Cowork. Linked, not reprinted.
- **How Zeeker or Cookies is built.** Zeeker is the substrate in this post, not the subject. One
  line and a backlink for Cookies.
- **The "attachment" failure.** CUT 2026-08-27 — belongs to the earlier morning triage workflow,
  not this skill. Do not reinstate.
- **Any correction of the published Gazette article.** "Earns its keep" meant it worked; perpetual
  use was never claimed. SETTLED.
- **MCP-vs-RSS as an architecture debate.** They are two substrates for one contract, not rivals.
- **"Five years of tooling apart."** CUT 2026-08-29 — the two skills are five weeks apart and RSS
  2.0 to MCP is 22 years. No reading supports the number.
