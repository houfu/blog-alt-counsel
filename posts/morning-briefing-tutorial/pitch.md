---
word_budget: 2800
budget_approved_by: houfu  # 2026-08-29: "it's a tutorial. so loosen word count requirements"
budget_tolerance: 10
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
    Tested and revised twice. "Fuller tutorial" did not mean more detail (a complete 1,900-word
    tutorial already existed). Nor did it mean "rebuild it on Zeeker" — the user killed that:
    *"sg law cookies is zeeker backed, so this is a low powered formulation."* The diagnosis that
    survived is his: the skill is source-agnostic, and Zeeker's job is to prove that hyper-personal
    and rich-database are not a trade-off. CONTRADICTED IF the two substrates turn out to teach
    different lessons — watch for this at draft; if the RSS and Zeeker halves don't share one
    argument, the post is two posts.
  differentiation: >-
    Every skill tutorial teaches one source. This teaches the SEAM — the same contract pointed at a
    public RSS feed and at a full legal database, with observed failures from both. And it refuses
    the usual trade-off: bought tools give depth without personalisation, hand-rolled filters give
    personalisation without depth. The brief-as-contract gets both.
  framing_risk: >-
    LOW, two watchpoints. (1) Zeeker is the author's own project and Cookies published two posts
    ago; this must not read as a product demo. Mitigation: the method is the subject, Zeeker is the
    worked example, and its gaps are stated (19% unparseable tags, unfiltered scans still 400).
    (2) Must not read as "what the Law Gazette wouldn't print" — they cut for length, not nerve.
  subject: >-
    Original message subject = a fuller tutorial of the Gazette article. Current subject = writing a
    briefing skill that can point at any source. Still a tutorial, and the Gazette piece is now the
    origin rather than the ceiling. DRIFT RISK: with three of the author's own projects in frame
    (RSS skill, Cookies, Zeeker) this can become a portfolio tour. The reader must end with THEIR
    Definitions clause, not an appreciation of his.
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

**Title:** Write the Brief. Swap the Source.  [WORKING — chosen 2026-08-29; Houfu may still settle a final]
**Thesis:** The deliverable is the brief, not the tool — write it once as a contract and you can
point it at a public feed or a full legal database without it stopping being yours.
**Spine:** The Definitions clause is the constant. Everything else is plumbing.
**Emotional core (user's words):** "I don't run this skill because I have cookies."

## Pitch

A morning briefing skill is a plain-text file that says what your practice is and what counts as
done. I wrote one for the Law Gazette against Singapore Law Watch's RSS feed, and I don't run it
anymore — I have cookies. That is not the failure it sounds like. The brief was always the
deliverable, and a brief can be repointed. So here it is twice: once at a public feed any lawyer
anywhere can read, and once at Zeeker, the Singapore legal database I maintain, through its MCP
server. The Definitions clause barely changes. Everything around it does. The feed gives you a
headline and a guess; the database gives you the court's own subject tags, so the clause can match
instead of guess. That is supposed to be the trade-off — bought tools have the depth, hand-rolled
filters have the personalisation — and it isn't one. Both versions failed, five years of tooling
apart, in exactly the same way: silently. Fixing that is most of the craft.

## Beats

- **Open — I don't run the first one.** The admission, flat; what a briefing skill is; the post is
  openly a companion to the Gazette piece — origin in the first paragraph, BOOKMARK CARD, no
  lead-in sentence (R2). They cut for length, not nerve. (250 words)
- **The contract.** Definitions / Obligations / Standard of performance, and why this shape is
  source-agnostic: only the fetch clause knows where the data comes from. (400 words)
- **Substrate one: a public feed.** What RSS actually warrants — title, description, `category`,
  pubDate — and the `category` trap: it names the speaker, not the subject, so relevance must be
  guessed from a headline. The three failures: vagueness, padding a thin day, silence-as-discard.
  "I rewrote each time." (600 words)
- **Substrate two: a real database.** Same contract, richer source. `subject_tags` carries the
  court's own taxonomy, so Definitions can MATCH rather than GUESS — this is where hyper-personal
  meets rich-database, and the trade-off dissolves. Owned honestly: one person, $12/month, gaps.
  (500 words)
- **The new failures, observed this week.** `search` takes no date and served a 2010 item as
  today's news; one Window across four cadences leaves PDPC permanently empty; 19% of subject tags
  don't parse. Same species as the RSS failures — silence. (500 words)
- **Swap the source, keep the contract.** What changes (the fetch clause) and what doesn't (all of
  it); adapting Definitions to another practice; why this runs on public data only and stays clear
  of the Law Society advisory. The complete SKILL.md ships as the linked artifact. (400 words)
- **Close.** It earned its keep, then I repointed it. (150 words)

## Out of scope

- **Persuading anyone that lawyers should build.** The Gazette's first section. This audience
  arrived convinced; the words go to the failures.
- **A step-by-step install guide** for Claude Code / Codex / Cowork. Linked, not reprinted.
- **How Zeeker or Cookies is built.** Zeeker is a source in this post, not a subject. One line and
  a backlink for Cookies.
- **The "attachment" failure.** CUT 2026-08-27 — belongs to the earlier morning triage workflow,
  not this skill. Do not reinstate.
- **Any correction of the published Gazette article.** "Earns its keep" meant it worked; perpetual
  use was never claimed. SETTLED.
- **MCP-vs-RSS as an architecture debate.** They are two substrates for one contract, not rivals.
