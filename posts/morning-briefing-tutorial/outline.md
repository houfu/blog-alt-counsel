# Outline: morning-briefing-tutorial

Revised 2026-08-29 (Session 4, second pass) after the user reset the framing:

> the SLG article had different purposes: it was written for the general public of lawyers, so
> diving into something overly technical like how to actually build the thing was not included.
> this time we're going to dive deep into how to actually build the skill, but instead of using a
> boring thing like singaporelawwatch rss (which i chose because many lawyers in singapore are
> familiar with it) we're going to pick zeeker, a far richer and my own database

Working document — not published content. Voice reference: `come-into-the-bakery` (narrative-first
pacing; teaching material carried inside the story, not in titled argument blocks).

Fenced code blocks are stripped by the linter's `stripToProse()`, so tool output, table schemas and
the full SKILL.md listing cost nothing against the word budget. This matters a lot for a deep
build — the prose budget buys explanation, and the listings are free.

---

## What changed from the first outline

The first pass built a two-substrate narrative: RSS act one, Zeeker act two, and the *seam* between
them as the argument. That was Claude's differentiation answer, not the user's. The user's actual
differentiator is **the Gazette article couldn't go technical and this one does** — the substrate
change is a consequence of going deep (Zeeker rewards depth; RSS was chosen for familiarity and has
four fields), not the point in itself.

So the RSS material is demoted from act one to compressed context — it exists to make the Zeeker
clauses legible, not for its own sake — and the body of the post becomes the actual build.

## The spine

**Protected lines both survive.** "The Definitions clause is the constant. Everything else is
plumbing." still governs, and is still demonstrated by the compressed RSS contrast in §2 plus the
clause being rewritten against `subject_tags` in §5. "I rewrote each time." lands in §2.

**The spine, stated for this shape:**

> Read the source before you draft the clause. Then write down what you would accept as an honest
> answer — because the briefing looks the same either way.

**The finding that pays for the depth**, and it holds up against the actual v1→v2 diff: the
Definitions clause barely moved between substrates, but the Standard of Performance clause grew
from three clauses to six. A richer source does not just give you more. It gives you more ways to
come back empty without saying so. One RSS feed either fetches or it doesn't. Four databases on
four cadences, with a `failed_tables` counter and a taxonomy the courts wrote by hand, have four
new ways to hand you a document that reads normally.

That is the refused trade-off with teeth: depth *and* personalisation, paid for in honesty clauses.

**Through-line for every defect in the post:** *a briefing you cannot audit by reading it.* This
replaces the pitch's "silently", which was only clean for two of the three RSS failures (the vague
brief flagged everything — that is noise, not silence). The replacement covers all five defects
across both builds honestly.

## The demo risk, and the answer to it

Building exclusively on the author's own database raises the product-demo risk the pitch rated LOW.
It is no longer low, and the outline answers it structurally rather than with a disclaimer:

- Zeeker's limits are stated in §3, *before* it does any argumentative work — one person,
  $12/month, real coverage gaps, unofficial, never "authoritative or complete".
- Three of the post's five defects are Zeeker's own, given ~1,000 words. A tutorial that spends a
  third of its length on how the author's database fails is not a demo.
- §7 hands the method to a reader who has no Zeeker and no Singapore practice.

---

## Section outline (2,800 words — the approved budget)

### 1. Why there is a second version (250)

Flat interior opening, payoff stated, no withheld reveal.

- The Gazette piece was written for lawyers generally, so it stopped short of how you actually
  build the thing, and it ran on Singapore Law Watch's RSS feed because most Singapore lawyers
  already know it. Both were deliberate choices, not omissions.
- This one goes technical, and it goes at Zeeker — richer, and mine, which is also why I can show
  you where it breaks.
- **Emotional core (user's words, protected):** "I don't run this skill because I have cookies."
  Stated once, at normal volume, and immediately given its meaning: the brief was the deliverable,
  and a brief can be repointed.
- BOOKMARK CARDS, no lead-in sentences (R2 — 9/9 deleted): the Gazette article; `come-into-the-bakery`.

**Do not** correct the published Gazette line. SETTLED (discussion.md Session 1).

### 2. What the Gazette version taught, compressed (250)

Exists so the Zeeker clauses are legible. Not a recap for its own sake — cut anything that does not
earn its place in §3–§7.

- The contract anatomy in one pass: Definitions, Obligations, Standard of Performance, and what to
  do when performance is impossible.
- Definitions is the clause that matters — "relevant to my practice" is as useless in a skill as
  "reasonable endeavours" without context.
- **The `category` trap**, planted deliberately for §3 to resolve: RSS warrants title, link,
  description, `category`, pubDate — and `category` names the speaker (a newspaper, a firm's client
  update), not the subject. Relevance had to be *guessed* from a headline.
- The two failures that shaped the clauses: the silent discard (a Business Times opinion piece
  dropped because "opinion" sounded like commentary rather than law — silence, the skill decided,
  meant discard) and padding a thin day (asked for eight items it found eight, asserting
  significance the description never supported).
- **Protected line, standalone paragraph:** "I rewrote each time."
- Source: `gazette-tutorial-draft-24jul.md` §2–§3. Compress hard.

### 3. Reading the source, properly this time (450)

The deep build starts. The lawyer's move — read the precedent before you draft — done with real
tooling instead of a browser.

- Connecting: `mcp.zeeker.sg/mcp`, no auth, no query logging, about five minutes to install; three
  live databases. Name the clients it works in.
- `list_databases` → `list_tables` → `describe_table`, with the actual output in a fenced block.
- What the reading tells you: `zeeker-judgements.judgments` holds 10,804 rows; the light columns
  (citation, case_name, decision_date, court, subject_tags, source_url, summary); every response
  carries a provenance block with licence and attribution, and every row a `_citation` string — so
  the skill never has to construct a citation, which becomes a clause in §6.
- **Guess becomes match.** `subject_tags` carries the court's own taxonomy in the court's own words.
  Show three real strings: "Insolvency Law — Bankruptcy — Statutory demand — Setting aside of
  statutory demand"; "Arbitration — Award — Recourse against award — Breach of natural justice";
  "Contract — Termination". Callback to §2's `category` trap. This is the whole reason to build here.
- **Zeeker owned honestly, here, before it does any work in the argument** (CLAUDE.md mandatory
  caveats): one person, $12/month, real coverage gaps, unofficial, never authoritative or complete.

### 4. The two tools that look interchangeable (450)

The sharpest technical beat in the post, and the one with the best admission attached.

- Six tools. Two of them look like they do the same job: `search` and `query_table`.
- What v1's clause said: "`search` scoped to `pdpc` for enforcement in The Window." `search` takes
  no date parameter — only `query_table` has `filters`.
- What came back when I asked for the last three days: items dated 2026-06-11, 2026-05-18,
  2022-09-13 and **2010-11-23** — a sixteen-year-old contempt-of-court media brief, relevance-ranked
  and undated, ready to be served as this morning's news.
- **The admission** (Wei Lin's channel): I had read both tool descriptions and still assumed a date
  filter that was never there. Stated once, plainly, not performed.
- The rule that goes in the brief: `search` answers "about what"; `query_table` answers "since
  when". A briefing is a "since when" question. Keep `search` for topical asks.
- The companion obligation: never scan a table unfiltered. It times out at the Datasette layer
  (HTTP 400) and returns nothing — still open as of writing.

### 5. Writing the Definitions clause against real data (450)

- Practice Interests (a)–(h), written *as they appear in* `subject_tags` rather than as a lawyer
  would say them out loud. Show the clause.
- Then the data fights back. 446 tag strings across 200 judgments (2026-06-03 – 2026-08-28):
  371 em dash, 56 en dash, 28 with no dash at all. **84 of 446 (19%) do not split on the em dash.**
  Some "tags" are whole multi-paragraph headnotes with embedded newlines.
- Case drift: 6 tag hits dropped, and **one judgment of 200 disappears from the briefing entirely.**
  Honest framing — small, and silent. `research.md` says explicitly: do not inflate this number.
- The clause that survives contact: compare case-insensitively, do not assume a separator, match on
  the leading subject words, and treat an unparseable tag as UNCERTAIN rather than excluded.
- **The teaching point, and it is the transferable one:** the first eight rows I fetched were
  uniformly clean em dashes. The defect only appears at 200. Reading the source still does half the
  build — it just takes more rows than you think to have read it.

### 6. What counts as an honest answer (550)

The Standard of Performance clause, and the payoff of the spine. Includes the Window material.

- **The Window is not one window.** Judgments arrive daily — 2026-08-28 the day before the build.
  PDPC's most recent enforcement decision was 2026-08-05, twenty-four days earlier. A single
  three-day window leaves PDPC empty every morning, and the briefing looks entirely normal, because
  an omitted section is indistinguishable from a quiet one. How you find this out: ask each source
  for its most recent item before you set its cadence. Four cadences: judgments 3 days, PDPC 60,
  newsrooms 14, SLW 3.
- The honesty clauses, each with the failure it answers:
  - name empty sources with the date of their most recent item — "PDPC: nothing since 5 August";
  - report `failed_tables` above zero and say the briefing is partial — a short briefing and a
    broken briefing look identical unless you say which one I am reading;
  - cite using `_citation` verbatim, never construct one;
  - never supplement from memory; if no source can be reached, say so and stop.
- **The finding, stated here:** on RSS this clause was three lines. Here it is six. The richer
  source bought depth and personalisation and charged for it in honesty clauses.
- The complete Zeeker `SKILL.md` as a fenced block (free against the budget).

### 7. Your own Definitions clause (250)

- ONE worked substitution, in prose. *(Voice Guide §2.1 — he deletes example triads; the Gazette's
  family / criminal / construction trio becomes one.)*
- The transfer: a reader with no Zeeker and no Singapore practice still has a source with a schema,
  a tool that answers "about what" and one that answers "since when", and a taxonomy someone wrote
  by hand. The method is the same. **This section is the guard against a portfolio tour.**
- Public data only, 2–3 sentences: the skill file holds your professional interests, not your
  clients' affairs; the Law Society's 2 April 2026 advisory warns against feeding client
  information into publicly available tools, and a briefing skill never needs to.

### 8. Close (150)

Soft, flat, or hopeful. No mic-drop, no aphoristic kicker, no teaser (§2.6).

---

## If the budget goes to 3,200

The build sections are where a deep tutorial gets thin at 2,800. The extra 400 buys:

- **§6 splits.** "The Window is not one window" becomes its own 350-word section, and the honesty
  clauses get 450 to themselves rather than sharing.
- **§3 gains 50** for the connection walkthrough, which is otherwise compressed to near-instruction.

Nothing new is invented; two sections that are currently fused get room to be read separately.
Recommend it — but the budget is Houfu's, and 2,800 is what he approved.

## Open decisions

1. **Word budget: hold 2,800, or raise to 3,200?** Code listings are free against the count, so
   this is purely how much explanation the build gets. See above for what the 400 buys.
2. **Title.** Still PROVISIONAL — "Write the Brief. Swap the Source." The swap is no longer the
   post's centre of gravity, so the title probably needs to move with it. Houfu's to settle.
3. **Does Marcus rise to co-primary?** `primary_audience: wei-lin`, `secondary: [marcus]` was set
   when this was a narrative about disposability. A deep build with three observed defects is
   squarely Marcus's routing (open source project / post-mortem → legal-tech reviewer). Wei Lin
   still owns the admission in §4. Flagging, not changing — routing is a pitch-time declaration.

RESOLVED this session, previously open: the RSS/Zeeker structure question (user's framing reset
settles it), the three-failures-or-two question (RSS compresses to two attested failures in §2),
and whether to reprint one skill file or both (one — Zeeker's, in §6).

## Standing risks carried into the draft

- **Re-run every number in `research.md` at final draft** — the corpus grows daily, and every figure
  in §3–§6 is dated 2026-08-29.
- **Not "what the Gazette wouldn't print."** They cut for length and audience, not nerve — and the
  user has now said so directly. §1 says it plainly.
- **`failed_tables: 1` on unscoped search is still undiagnosed**, and §6 cites `failed_tables` as an
  honesty mechanism. Either diagnose it before publishing or state that it is open.
- **"Five years of tooling apart" is cut** — the two skills are five weeks apart (24 Jul, 29 Aug),
  and RSS 2.0 to MCP is 22 years. No reading supports the number.
- Backlink curation is a later phase. Seeds: Gazette article and `come-into-the-bakery` in §1;
  `skillsbench-analysis` where the domain judgment in §5 is the part a model cannot write for you;
  `tool-vs-infrastructure-mindset` and `ect-no-lawyers-zeeker` around §3.
