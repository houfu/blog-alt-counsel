# Outline: morning-briefing-tutorial

Drafted 2026-08-29 (Session 4). Working document — not published content.
Voice reference read before drafting: `come-into-the-bakery` (narrative-first pacing, teaching
material carried inside the story rather than in argument blocks) + Voice Guide §2.5, §1.4, §1.8.

Budget: 2,800 words ±10% (2,520–3,080). Fenced code blocks are stripped by the linter's
`stripToProse()`, so the SKILL.md listing costs nothing against the count.

---

## The spine

**Pitch's declared spine (protected line):**

> The Definitions clause is the constant. Everything else is plumbing.

**Proposed sharpening — needs Houfu's call.** The protected line stays, but it is doing only half
the work. The post has two limbs and they need to meet:

- **Limb A (portability).** The Definitions clause says what you care about. It survives the swap.
- **Limb B (craft).** Every defect found in either build produced *a briefing that looks fine*.
  The Standard of Performance clause is what makes the output auditable.

The join: **Definitions says what you care about; Standard of Performance says what counts as an
honest answer. Everything between them is plumbing.**

And the non-obvious finding that earns the seam, supported by the actual v1→v2 diff: the
Definitions clause barely moved between substrates, but **the Standard of Performance clause grew**
— from three clauses on RSS to six on Zeeker. A richer source does not just give you more; it gives
you more ways to come back empty without saying so. One feed either fetches or it doesn't. Four
databases on four cadences with a `failed_tables` counter and a dirty taxonomy have four new ways
to hand you a document that reads normally.

That is the refused trade-off with teeth: you get depth *and* personalisation, and you pay for it
in honesty clauses.

**Through-line for the failures (replaces the pitch's "silently"):** *the failure mode is always a
briefing you cannot audit by reading it.* Strictly more accurate than "silence" — see Open
Decision 2, where failure 1 (flagged everything) is noise, not silence, and breaks the pitch's
current claim.

## The narrative shape

The pitch's seven beats are topical — contract / substrate one / substrate two / new failures /
the seam. That is the expository "blog voice" arrangement Voice Guide §2.5 names as the recurring
drafting failure, and it is also what makes the pitch's own diagnosis risk live ("if the RSS and
Zeeker halves don't share one argument, the post is two posts").

**Recommended: one chronological spine.** Same material, ordered as it happened, with the analysis
arriving as realisation. This structurally guarantees the two substrates share one argument,
because the argument is *discovered* in act one and *tested* in act two.

Two beats also collapse: in the pitch, "substrate two" and "the new failures" are the same event.
Repointing the brief and running it are one movement, not two.

The pitch's beat 6 ("Swap the source, keep the contract", 400 words) is deleted as a section. It is
a recap of an argument the reader has just watched happen — a titled argument block after the
story already made the point. Its live content (adapting Definitions, public data only) moves to
§7; its thesis is delivered at §4, the hinge, where it is a realisation rather than a summary.

---

## Section outline

### 1. I don't run the first one (280 words)

Flat interior opening, payoff stated. No withheld reveal.

- The admission, once, at normal volume: I wrote a morning briefing skill, published a tutorial
  about it in the Law Gazette, and I don't run it. I have cookies now.
- **Emotional core (user's words, protected):** "I don't run this skill because I have cookies."
- Immediately: that is not the failure it sounds like. The brief was always the deliverable and a
  brief can be repointed. State the destination here.
- Origin declared in the first paragraph. BOOKMARK CARD to the Gazette article. **No lead-in
  sentence** (R2 — 9/9 deleted).
- BOOKMARK CARD: `come-into-the-bakery` (must_link) — the card is the callback, no narration.
- What a briefing skill is, in one or two sentences: a plain-text file that says what your practice
  is and what counts as done.

**Do not:** correct the published Gazette line. SETTLED (discussion.md, Session 1) — "earns its
keep" meant it worked, perpetual use was never claimed. Framed as sequel, not correction.

### 2. What the brief actually was (420 words)

The anatomy — taught here because the reader needs it before the failures mean anything, and
because a tutorial owes it. Procedure, so bullets are permitted (§2.1).

- A skill file read as a short services contract: parties and subject matter (frontmatter),
  Definitions, Obligations, Standard of Performance, and what to do when performance is impossible.
- The one that matters: Definitions. "Relevant to my practice" is as useless in a skill as
  "reasonable endeavours" without context. Limbs (a)–(d) that someone who cannot read your mind
  can apply to a headline.
- The proviso every corporate lawyer knows: criminal law excluded, *except* when it is your
  client's director in the dock.
- Standard of Performance is the clause non-lawyers skip: it tells the system what to do at the
  limits of its knowledge, which is exactly where it misbehaves.
- Source: `gazette-tutorial-draft-24jul.md` §2. Compress hard — the Gazette version spends 500
  words on the contract metaphor; here it earns ~420 because the reader arrived convinced.

**Out of scope reminder:** no persuading anyone that lawyers should build (Gazette §1). This
audience arrived convinced; the words go to the failures.

### 3. What the feed would warrant, and the three failures (620 words)

- Read the precedent: SLW's RSS feed warrants title, link, description, `category`, pubDate.
- **The `category` trap** — it names the speaker ("Straits Times", a firm's client update), not the
  subject. So relevance has to be *guessed* from a headline. Plant this deliberately: it is the
  setup for §4's hinge.
- The failures, from `source-three-failures-arc.md` and the Gazette draft's breaches:
  1. **Vague.** "Review the morning's updates and flag what is material." It flagged everything —
     technically defensible, entirely useless. *(See Open Decision 2: this is the "before" state,
     not a peer failure. Recommend compressing to two sentences inside the setup.)*
  2. **Silent discard.** It dropped a Business Times opinion piece on a financial services gap
     because "opinion" sounded like commentary rather than law. Silence, the skill decided, meant
     discard — a construction any drafter will recognise, usually from the losing end. Cure:
     "Possibly relevant" with one sentence of doubt. The failure mode changed from invisible
     omission to visible hedging.
  3. **Padding a thin day.** Asked for eight items on a thin news day it found eight, asserting
     corporate-governance significance the description never supported — the way a witness pressed
     for detail will find detail. Cure: summaries supportable from title and description alone,
     never supplement from memory.
- **Protected line, standalone one-line paragraph:** "I rewrote each time."
- The realisation that becomes the spine: every wrong output was a mirror held up to something I
  had not examined. The system was not getting smarter; my instructions were getting clearer. And
  each fix landed in the same two clauses — Definitions or Standard of Performance. Nothing I ever
  amended was about RSS.
- BOOKMARK CARD candidate: `skillsbench-analysis` (must_link) — the domain judgment is the part a
  model cannot write for you. Card only, no lead-in.

### 4. The hinge: guess or match (280 words)

The turn. Delivered as realisation at the moment of repointing, not as a thesis statement.

- Why I wanted it back and did not rewrite it: Cookies is a broadcast — one tray for every reader.
  A brief is personal. Neither is a substitute for the other.
- The received trade-off, stated plainly so it can be refused: bought tools have the depth,
  hand-rolled filters have the personalisation, pick one.
- The reason it isn't one: `subject_tags` carries the court's own taxonomy in the court's own
  words — "Insolvency Law — Bankruptcy — Statutory demand — Setting aside of statutory demand",
  "Arbitration — Award — Recourse against award — Breach of natural justice". The Definitions
  clause can **match** instead of guess. Callback to §3's `category` trap.
- Zeeker owned honestly *here*, before it does any work in the argument: one person, $12/month,
  real coverage gaps, unofficial. Never "authoritative or complete" (CLAUDE.md mandatory caveats).
- BOOKMARK CARD candidate: `tool-vs-infrastructure-mindset` (must_link).

### 5. Repointing it (330 words)

- What changed: the fetch clause, and only the fetch clause. Show the diff in words —
  Definitions (a)–(h) is recognisably the same clause; The Window became four windows; Obligations
  swapped a feed URL for four tables.
- What did not change: the relevance test, the ranking, the "Possibly relevant" limb, the
  at-most-eight shape, the never-supplement-from-memory rule.
- Print the Zeeker `SKILL.md` here as a fenced block (free against the budget). Do NOT reprint the
  RSS skill in full — link the Gazette piece and the gist. *(Open Decision 3.)*

### 6. What happened when I ran it (500 words)

The three defects, all observed 2026-08-29 by running the skill's own obligations against the live
server — not reasoned about. Source: `research.md`. **Re-run every number at final draft.**

1. **The brief instructed a capability the tool does not have.** v1 said "`search` scoped to `pdpc`
   for enforcement in The Window". `search` takes no date parameter. Asked for the last three days
   it returned items dated 2026-06-11, 2026-05-18, 2022-09-13 and **2010-11-23** — a sixteen-year-old
   contempt-of-court media brief, relevance-ranked and undated, ready to be served as this
   morning's news. The admission that goes with it: I had read both tool descriptions and still
   assumed a date filter that was never there. The v2 clause: `search` answers "about what";
   `query_table` answers "since when". A briefing is a "since when" question.
2. **One Window does not fit four sources.** Judgments arrive daily. PDPC's most recent enforcement
   decision was 2026-08-05 — 24 days earlier. So the PDPC sweep returns nothing every morning and
   the briefing looks entirely normal, because an omitted section is indistinguishable from a quiet
   one. Cure: per-source cadences, plus a clause requiring empty sources to be named with the date
   of their most recent item — "PDPC: nothing since 5 August".
3. **The taxonomy is real and dirty.** 446 tag strings across 200 judgments: 371 em dash, 56 en
   dash, 28 no dash at all. 84 of 446 (19%) don't split on the em dash. Case drift costs 6 tag hits
   and **one judgment of 200 disappears from the briefing entirely** — the honest version is "small,
   and silent". Do not inflate. The first 8 rows I fetched were uniformly clean; the defect only
   appears at 200. Cure: match on leading subject words, compare case-insensitively, and treat an
   unparseable tag as UNCERTAIN rather than excluded.
- The join back to §3: same species, five weeks and one tooling generation apart. Every one of
  these produces a briefing that reads normally. And that is why the Standard of Performance clause
  grew from three clauses to six — the richer source bought depth and personalisation, and charged
  for it in honesty clauses.

### 7. Your Definitions clause (250 words)

- The substitution exercise: ONE worked adaptation, not three. *(Voice Guide §2.1 — he deletes
  example triads. The Gazette's family/criminal/construction trio becomes one, in prose.)*
- The drafting question, which is the same one you ask of any precedent: which definitions carry
  this document's intent, and what do my facts require them to say?
- Public data only, 2–3 sentences: the feed is published openly; the skill file holds your
  professional interests, not your clients' affairs; the Law Society's 2 April 2026 advisory warns
  against feeding client information into publicly available tools, and a briefing skill never
  needs to. Build first where the stakes are breakfast, not privilege.
- **The drift guard (pitch, `subject`):** the reader must end with THEIR Definitions clause, not an
  appreciation of mine. Three of my own projects are in frame; this section is the one that stops
  it being a portfolio tour.

### 8. Close (150 words)

- It earned its keep, then I repointed it.
- Soft / flat / hopeful. No mic-drop, no aphoristic kicker, no teaser (§2.6).
- Candidate register: what I have now is two files five weeks apart that disagree about almost
  everything except what I care about.

---

## Open decisions — need Houfu's call

1. **Adopt the sharpened spine?** Protected line stays; the addition is "Definitions says what you
   care about; Standard of Performance says what counts as an honest answer" plus the finding that
   the honesty clause grew 3→6 while Definitions held. This is a pitch amendment, so it gets logged
   in discussion.md with which pitch-time check would have caught it.

2. **Three failures in act one, or two?** The pitch's claim is that both builds failed "in exactly
   the same way: silently". Failure 1 (vague brief flagged everything) is *noise*, not silence, so
   the claim is currently only clean for two of three. Recommend: keep all three but demote
   vagueness to the setup's "before" state, and change the through-line to "a briefing you cannot
   audit by reading it", which covers all six defects across both builds honestly.

3. **Reprint one skill file or both?** Recommend the Zeeker `SKILL.md` in full (new, and it holds
   the interesting clauses), RSS shown only as the clauses under discussion, with the Gazette piece
   and the gist carrying the rest. Also: confirm which skill the gist
   (`source_artifact`) actually contains — if it is the RSS one, we may want a second gist.

4. **"Five years of tooling apart" — cut or fix.** The pitch paragraph says both versions failed
   "five years of tooling apart". The two skills were written five *weeks* apart (24 Jul, 29 Aug);
   RSS 2.0 dates to 2002 and MCP to Nov 2024, which is 22 years, not five. No reading supports the
   number. Voice Guide §1.3: every number must be defensible. Recommend "five weeks and one tooling
   generation apart", or drop the interval.

5. **Title.** Still PROVISIONAL — "Write the Brief. Swap the Source." Houfu's to settle.

## Standing risks carried into the draft

- **Not a Zeeker demo.** The method is the subject; Zeeker is the worked example and its gaps are
  stated in §4 before it does any argumentative work.
- **Not a portfolio tour.** Three of his own projects are in frame (RSS skill, Cookies, Zeeker).
  §7 is the guard.
- **Not "what the Gazette wouldn't print."** They cut for length, not nerve.
- **Re-run every number in research.md at final draft** — the corpus grows daily.
- Backlink curation is a later phase; must_link placements above are seeds, not the final set.
  `ect-no-lawyers-zeeker` and `from-one-source-to-three` are additional candidates for §4/§5.
