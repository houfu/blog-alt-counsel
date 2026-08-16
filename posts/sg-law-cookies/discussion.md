# Discussion Notes: SG Law Cookies

**Post folder:** `posts/sg-law-cookies/`
**Started:** 2026-08-15
**Status:** PITCH phase — draft pitch written, awaiting user's emotional core and status facts

## Session 1: Pitch scaffolding (2026-08-15)

### Context

User asked for a new post about SG Law Cookies (cookies.zeeker.sg), described as "something I have
stowed for a while" and "a high concept front end to data.zeeker.sg". Opening message recorded
verbatim in `pitch.md`.

### What Claude did

Gathered grounding before proposing anything:

- **Repo archaeology.** Cookies appears in five existing post folders but is never the subject —
  always a supporting character ("proof the API worked", "an app built on top in a matter of
  weeks", the source of January data for year-in-review-2025). No prior post has Cookies as
  protagonist. That gap is the opportunity.
- **Public sources.** `github.com/houfu/sg_law_cookies` — Hugo static site, Python module,
  GitHub Actions on a daily schedule, uv for packaging, ~576 commits on master, 5 stars / 2 forks.
  README states inspiration from ICYMI Law; "coming" features listed as email/social distribution
  and expansion into commentaries and judgements.
- **Site behaviour** (via search excerpts only — see blocker below): daily digests delivered by a
  persona, "Your Amicus"; each post opens with a verse summary of the day's legal news.
- **Chronology check.** `prompt-engineering-to-skills/discussion.md` dates Cookies to **April 2023**,
  which is *earlier* than the data.zeeker.sg build (150+ hours, 2025). So the app predates the
  infrastructure it now consumes — the front end came first and was later rewired onto the API.
  This reframes the user's phrase "front end to data.zeeker.sg": accurate today, but not the
  origin story. Worth confirming with the user before it lands in prose.

### Blocker: egress

`cookies.zeeker.sg` is blocked by this environment's network egress proxy (403 on CONNECT, confirmed
against the proxy status endpoint). The Zeeker MCP server also errored. So the live site could not be
read directly, and no digest could be quoted first-hand. Facts above come from the GitHub README and
search excerpts. **The user needs to paste a sample digest (or screenshot) for the draft.**

### Proposed angle (NOT yet approved)

Thesis: the ambitious infrastructure needed constant tending; the small, opinionated app on top has
published daily since 2023 without attention — and that asymmetry is the lesson. Cookies is the
subject; data.zeeker.sg is the foil.

Recorded in `pitch.md` with the four interrogation answers pre-filled as proposals, including the
strongest counter-diagnosis: Cookies may have survived because it is **downstream and read-only**
(nothing to break) rather than because it is small and opinionated. If that is the true cause, the
post is about coupling, not concept, and the thesis must be reworded.

### User decisions

- Declined the structured angle/status question (AskUserQuestion) — kept the conversation in prose.
  Pitch was scaffolded with a recommended angle instead of stalling, with un-guessable facts marked
  `[HOUFU: …]` per the Voice Guide rule against inferring feelings.

### Open items carried forward

1. Emotional core — un-guessable, blocks the opening. Marked `[HOUFU: …]` in pitch.md.
2. Current status of Cookies (publishing / stalled / paused / being revived) — determines the close.
3. Running cost, readership signal, sample digest — needed for the numbers beats.
4. Confirm the April 2023 origin date and the "front end came first" chronology.

## Session 2: Correct repo, and a falsified thesis (2026-08-15)

### User correction

The repo I found is the **previous incarnation**. Current Cookies lives at `zeeker-sg/cookies`;
`houfu/sg_law_cookies` is the Hugo blog that preceded it. User asked for the old incarnation as
context, which turned out to be the most valuable source in the session.

### Access blocker: zeeker-sg/cookies

Cannot be reached from this session. `add_repo` refuses it: *"cross-tier adds are not supported in
v1: requested zeeker-sg/cookies but session already has repos from owner(s) [houfu]"*. An anonymous
clone also fails (prompts for credentials — it is private, or org-restricted). The stated remedies
are (a) start a new session with `zeeker-sg/cookies` as the initial source, or (b) work from pasted
material. Everything about **v2 is therefore unverified** and must not be asserted in prose.

### What the Hugo history actually shows

Cloned `houfu/sg_law_cookies` (public, anonymous read via the git proxy) and unshallowed it for
history. Verified facts are listed in `pitch.md` under "Verified facts". The headline items:

- 22 Mar 2023 first digest; **Your Amicus present from day one**; poem added 7 Apr 2023.
- 516 digests, weekdays, ending 30 Apr 2025. 576 commits.
- Continuous stack churn: GPT-3.5 → 4 → 4o → 4.1; LangChain → Rivet → Mirascope; Poetry → uv.
- **v1 scraped Singapore Law Watch RSS directly** — it was never a front end to data.zeeker.sg.
  That description applies to v2 only. Worth flagging to the user, since the original framing
  message describes Cookies as "a high concept front end to data.zeeker.sg".

### Thesis correction (the important one)

Session 1's proposed thesis — *the small front end survived because it was left alone* — is
**falsified**. The repo shows the opposite of neglect: two orchestration rewrites, four model
migrations, a packaging move, a directory restructure. This is why Step 3.5 exists; the claim was a
plausible hypothesis and the data killed it.

Replacement thesis, better evidenced by the same history: **the high concept was the only stable
layer.** The persona and the poem are unchanged from spring 2023 while every implementation detail
underneath was replaced at least once. Pitch rewritten in place (the superseded version is in git,
per the "one current contract" rule).

Live risk to the new thesis, recorded honestly: if the v2 rebuild changed the persona or dropped the
poem, the concept was not stable — it was merely the part not yet reached. This cannot be settled
without v2 access.

## Session 3: v2 found, and the second thesis dies too (2026-08-15)

### The access problem was my error

`zeeker-sg/cookies` does not exist. The repo is **`zeeker-sg/sg-law-cookies`**. GitHub answers a
404 on a private-or-nonexistent path by prompting for credentials, and I read that prompt as "this
repo is private" instead of checking the name. Listing the org's repos settled it in one call —
nine public repos, all Python. Lesson for future sessions: when a clone asks for a username,
enumerate the org before concluding anything about permissions. The `add_repo` cross-tier refusal
was real but irrelevant; the anonymous git proxy clones public repos regardless.

### Second thesis falsified

Session 2's thesis was *the high concept was the only stable layer* — the persona and poem holding
steady while the stack churned. v2 kills it: `grep -ril "amicus\|poem\|poet" src/` returns **zero
matches**. Your Amicus is gone. The poem is gone. The one voice-y, human thing about v1 did not
survive the rebuild.

So: two theses proposed, two falsified by evidence, both before drafting. That is the pitch
interrogation working as designed rather than failing — but it is worth noting that both wrong
guesses shared a flaw, which was inferring a *reason for survival* before establishing *what had
actually survived*.

### What actually survived: the word

Only the name and its metaphor persist from March 2023. And in v2 the metaphor stopped being
decoration and became the information architecture:

- A cookie is now formally *"the smallest unit of legal change"* — explicitly not a summary.
- Significance is priced like a bakery: pineapple tart = ACT ON, $0.60 = FRESH, $0.30 = TRACKING.
- Chocolate chips encode FOLIO concept count; round = news, hexagonal = judgments; a red dot means
  "still warm"; ochre threads mean shared doctrine that week.
- The About page tagline is *"signal, not summary — est. 2023, baked daily, no holidays"*, and the
  footer promises *"No raisins, ever."*

The eight mockups (`mockups/a-night-desk` … `h-counter-map`) show the design was genuinely searched
rather than assumed — and the two that shipped are the two that lean hardest on the name chosen
three years earlier.

### Third thesis (current)

**The word was the spec.** "Cookies" was picked in 2023 because bite-sized summaries sounded cute.
It is now a defined unit of legal change, and the metaphor specifies the product's visual and
sorting semantics. The naming decision outlived every technical decision — models, orchestration,
packaging, site generator, data source, and the definition of the unit itself.

This one is falsifiable in a way the user can settle: if the bakery framing was reverse-engineered
to fit the domain name rather than genuinely driving design choices, the thesis is decoration. The
eight mockups argue it was a real search, but Houfu knows.

### v2 facts worth carrying into the draft

Recorded in full under "Verified facts" in `pitch.md`. Notables: Anthropic `claude-sonnet-4-6` as
primary backend with tool use forcing schema conformance, Ollama `qwen3:8b` as the local cost-free
alternative, dual-host routing for news vs judgments, PRD cost estimate $50–200/month, and an
attribution posture that mirrors Zeeker's — source text used for extraction only, never republished,
every "read the source" link pointing at the original document rather than at Zeeker.

### Screenshot

User pasted the live counter-map view into chat (23 July, 17 cookies / 12 news / 5 judgments /
3 still warm). It is not on disk. **Needs to be committed to this folder as a compressed file
before publishing.**

## Session 4: The user's own framing lands the pitch (2026-08-15)

### What the user supplied

Three things Claude could not have reached, plus a proposed angle:

1. **The idiom came first.** *"I've always wanted this site to be about cookies so that idiom so to
   speak came first before anything. I wanted it to focus on the smell of the law, freshly baked
   coming out of the kitchen. So if you're into it you know what it is about without diving deep
   into it."* This **corrects Session 3's pitch**, which had guessed the name was picked casually
   because "bite-sized sounded cute" and only later became a spec. It was deliberate from the
   start. The design goal was instant legibility.
2. **The moment (emotional core).** *"I showed it off at the SCCE talk and it was an eye opening aha
   experience, quite a few people came up to me to ask how I did it."* Recorded verbatim in
   pitch.md. The load-bearing detail: they asked **how**, not **what** — the concept had already
   done the explaining.
3. **Status.** Running about a month, deliberately unannounced, *"because it was meant to be a
   workflow"* — built for himself, not shipped as a product.
4. **Method.** *"I mostly vibe code it based on a PRD I had workshopped and carefully design. This
   amount of detail can't be tuned based on a bakery, or a data website, or scruffing from a v1."*

### Angle decision

User proposed: *"I wonder if the way legal data will be turned into an application is a real
interesting part of this story."* Adopted as the **argument**, with Cookies kept as the **subject** —
the two are compatible, but the drift risk is recorded in the pitch's interrogation: the category
could promote itself to protagonist and demote Cookies to evidence. Guard written into the pitch:
every general claim must be earned from a specific Cookies decision, never the reverse.

Final thesis: **turning legal data into an application is no longer a data problem or a coding
problem — it is a concept problem, and the concept is the part you cannot vibe code.** This is the
third thesis; the first two were falsified by evidence (see Sessions 2 and 3), and this one is the
first to come from the user rather than from Claude's inference.

### PDF

User uploaded a Safari print of the 14 August 2026 daily page. **The body did not render** — only
the disclaimer and footer chrome extracted, and page rasters are blank, so the JS-driven content
was not captured. Usable facts from it: the page title format (*"Friday, 14 August 2026 — SG Law
Cookies"*) and confirmation the site was live on 14 Aug 2026. A PNG screenshot is still needed for
the post.

### Evidence against "just vibe coded"

Worth carrying into the draft as a defence of the method beat: the repo has **20 test files**
alongside the 961-line PRD and 553-line pipeline pseudocode. The claim is not that the code wrote
itself — it is that a carefully specified concept is what let generated code hold this much detail.

## Session 5: Draft v1 (2026-08-15)

**Voice reference:** `cowork-rugpull` — narrative-first pacing, plain first-person headings as claims,
argument carried in prose rather than bullets, bookmark cards standing alone with no lead-in.

Draft written to `sg-law-cookies.md`. **1,443 words against a 1,900 budget** — deliberately under.
The Voice Guide's most reliable rule is that Houfu cuts, so the draft leaves room for the reviewer
round rather than arriving at the cap.

Declared voice moves and where they land:

- *Specific numbers*: 22 March 2023, 516 weekdays, 30 April 2025, 961-line PRD, eight mockups,
  twenty test files. All verified from the two repos; none estimated.
- *Neither is wrong*: pure vibe coding versus pure specification, in the PRD section. A genuine
  binary, so the move is earned rather than forced.
- *Humour after the argument*: "No raisins, ever." lands after the encoding paragraph, not inside it.

Deliberate omissions:

- **No cost figure.** The PRD's $50–200/month is an estimate, not lived spend, and the Voice Guide
  requires numbers Houfu can stand behind. Left out entirely rather than hedged.
- **No image yet.** The counter-map screenshot is the natural anchor for the bakery section.
- **Backlinks partial.** Two of three must_link cards placed (`when-building-gets-cheap`,
  `from-one-source-to-three`); full curation belongs to the REVIEW phase.

Structure note: the opening states the payoff in the second paragraph ("the explaining had already
been done, three years earlier") rather than withholding it, per rule 1.1. The close is flat and
slightly open — the domain renewal line — rather than a mic-drop, per 2.6.

## Session 6: Pitch amended mid-draft — the dashboard angle (2026-08-15)

### What happened

Draft 1 was written and pushed. The user stopped the workflow before review and proposed a different
subject: *"would a story about how I wrote sg law cookies (or what it is) be more interesting than
what I see as a trend of legal dashboard. Previously dashboards ingested numerical data so it's easy
to compare trends but cookies basically rewrote a legal article or development into a cookie or a
smell and uses it to show change or development."*

Pitch rewritten in place as v5. Draft 1 survives in git; roughly half its prose is reusable.

### Which interrogation question should have caught this

**Question 4, "whose subject is this?"** — and it very nearly did. The v4 pitch recorded the exact
risk in writing: *"the user's suggested angle could promote the category to protagonist and demote
Cookies to evidence."* Claude then resolved that tension unilaterally in favour of Cookies-as-subject
and drafted on it, instead of putting the choice to the user. **The failure was not missing the
question; it was answering it alone.** When interrogation surfaces a genuine fork about what the post
is *about*, it belongs in front of the user before drafting, not in a frontmatter field.

Secondary failure, question 2: v4's differentiation answer was biographical — "nobody else can write
this, it's my three-year receipt trail." That is a reason the post is *authentic*, not a reason it is
*useful*. v5's answer is a taxonomy the reader can apply to any legal dashboard they meet.

### The user's question, and what changed because of it

User asked whether cost is the only benefit of the collapse. Claude proposed four; three entered the
pitch as a beat (the research skill's cap is three findings changing beats per session):

1. **Answers the question you didn't know to ask.** Search needs a query. This is the sharp local
   contrast with LawNet 4.0, which is SAL's AI *search* bet.
2. **No triage.** "Every cookie is published" — editorial products must select because attention is
   scarce; manufactured units have no such constraint, and the PRD says low significance is
   "meaningful in aggregate."
3. **Comparability across unlike sources.** A press release, an enforcement decision and a judgment
   arrive in the same shape, which is what makes shared-doctrine adjacency computable.

Fourth, logged but not a separate beat: **provenance is structural** — folded into beat 5 as one
clause, supported by the `zeeker-judgements` table's own "indexed but not distributed" note.

### The correction the draft must carry

Research falsified the strong version of the novelty claim. RegTech has manufactured units from
regulatory prose since 2013 (Corlytics: 120+ countries, 2,500+ regulators, AI classification and
summarisation). The defensible claim is about **price, scope and intent**, not invention. Recorded in
the pitch's diagnosis field because Marcus is primary audience and would catch an overclaim.

### Audience routing change

`primary_audience` stays **marcus** (he knows Lex Machina and would test the taxonomy). Secondary
moves from **wei-lin to sarah**: the post is no longer about identity or the solo-builder struggle,
and it now has a Monday-morning answer for a practitioner, which is Sarah's territory.

## Session 7: Draft v2 against pitch v5 (2026-08-15)

**Voice reference:** `cowork-rugpull` again — narrative-first, plain first-person headings, argument
in prose. New title and slug: *Legal Dashboards Count Win Rates. I Wanted One That Counts the Law.*
(`legal-dashboards-count-win-rates`).

**1,607 words against a 1,900 budget.** Under, deliberately, leaving room for the reviewer round.

What survived from draft 1: the SCCE opening, the counter-map description, the bakery encoding, the
protected idiom line, and the cookie-is-not-a-summary material — the last now promoted from a
mid-post section to the structural centre.

What was cut: the entire vibe-coding and PRD section, per the user's instruction that the post is not
about architecture. Also the "eight mockups" detail, which only made sense as evidence for the
design-process thesis.

What was added:

- The taxonomy beat — borrowed geography, borrowed citations, manufactured obligations — with all
  three credited rather than strawmanned.
- **The RegTech concession, placed early and stated flatly** ("So no, turning legal prose into
  structured units is not new, and I'd rather say that plainly than pretend I invented it"). The
  interrogation predicted Marcus would catch an overclaim; conceding it up front converts the
  weakness into a credibility move.
- The three benefits beyond cost, in prose rather than a list.
- The Singapore beat: LawNet's free judgment RSS, LawNet 4.0's AI search, and the 10,765-judgment
  catalogue figure pulled live from Zeeker.

**Late catch worth recording.** The first pass of draft 2 dropped v1 entirely, which lost the best
available evidence for the central claim. Restored as a short paragraph: 516 weekdays, the poem,
"same corpus, same jurisdiction, same author. Prose out, because prose was the only thing I could
make." The lint's thesis-keyword warning ("win rates" appearing once) is what surfaced the gap — the
mechanical check caught a substantive thinness, which is the argument for keeping it.

The pitch's spine now ships verbatim in the prose: *"Win rates were never what anyone actually
wanted to know. They were what we could count."*

## Session 8: Local session — live site read, and a deep adversarial research pass (2026-08-16)

Moved to the local machine, which restored the Jina MCP and unblocked the sites the remote egress
proxy had refused. Two rounds of work.

### Round 1 — read the live site for the first time

Every prior description of cookies.zeeker.sg came from repo templates plus one screenshot. Reading it
directly found a factual error in the draft: the PRD's illustration (a 40,000-word judgment "might
produce one cookie") is backwards in practice. Judgments are the *most* productive sources —
[2026] SGHC 166 produced four cookies across four areas of law. Draft now uses the real cluster.

Also declined to quote one live cookie: a Court of Three Judges disciplinary finding against a named
individual. Accurate and public, but not something to reproduce as decoration for a technology
argument. Logged in research.md so the call is visible rather than silent.

### Round 2 — deep pass, trying to break the central claim

The user asked for a deep Jina pass on the research. The claim most worth attacking was
"I couldn't find anyone doing this," since the post rests on it. Ran passage-level deep search plus
five parallel sweeps aimed squarely at counterexamples.

**The claim survived, but two findings changed the draft:**

1. **Singapore is well past search — a real correction.** SAL/IMDA have shipped **LawNet AI
   Summaries since October 2024**, headnote-structured (catchwords, facts, holdings), generated by
   IMDA's **GPT-Legal**, reaching ~75% of Singapore's legal professionals; tribunal decisions added
   January 2026; the Q&A independently tested by Resaro under the IMDA/AI Verify assurance sandbox.
   The draft's "they have search, I built the surface" was an understatement that SAL would rightly
   object to. Rewritten to a sharper and more defensible contrast: a headnote is *a document about a
   document* — one judgment in, one summary out, in a platform you open when you already have a case.
   The SGHC 166 example now does double duty, since LawNet gives one summary where the counter gives
   four routed signals.
2. **Pricing firmed.** "Low six figures" rested on a single blog. Now: enterprise deployments
   **$100,000–$500,000/year**, MetricStream from ~$75,000 and above $1M. Caveat recorded in
   research.md that monitoring-first tools start near $3K/yr — the category is not uniformly
   expensive, and the draft should not imply otherwise.

**Two new families found**, one added to the draft:

- **Darrow — manufactured exposure.** Ingests filings, incident reports and litigation patterns
  across 50+ exposure categories; $17bn exposure surfaced; May 2026 portfolio dashboard. Same
  machinery, different question: find me a case. Added as one clause, because omitting the closest
  commercial analogue would read as cherry-picking.
- **Hand-curated topic trackers** (Law360 Pulse, Orrick, White & Case, MultiState) — single-topic,
  lawyer-maintained tables. Logged only; they reinforce the argument and would cost length.

**Vocabulary note worth remembering:** in legal software "dashboard" mostly means *matter
management* — Bloomberg Law's product is literally Dashboard Legal. The post's title uses the word in
a sense most of the market does not.

Draft now 1,914 words against a 1,900 budget — at target, inside tolerance, and the length audit at
review should be treated as live rather than theoretical.

## Session 9: The ending, brainstormed properly (2026-08-16)

### Draft v3 rejected, restructured on the user's own five beats

The user read draft v2 and said plainly: "I still hate it." Diagnosis, recorded so it is not repeated:
Claude had researched its way into a **market-category analysis** — six families of legal dashboard,
Corlytics, Darrow, RegTech price ranges — when the user wanted a builder's show-and-tell with one
insight in the middle. The research was good; the article it produced was not the one asked for.

The user then supplied the structure directly as five numbered points, and draft v3 was written
against it: the bakery first, Zeeker as the kitchen, the innovation stated narrowly, Raymond Sun as a
fellow traveller, and a forward-looking close.

### Hand edits, reviewed

Four kept as-is, and one of them is the best line in the piece: **"User satisfaction rates (are you
happy with the court facilities or process even though you lost your case?)"** replacing "settlement
sums." It makes the argument by itself — a satisfaction survey is the reductio of measuring the
machinery instead of the law. Also kept: "and still is a work in progress" on Zeeker, and the merge
of the two metrics paragraphs.

Two were flagged and the user agreed:

1. **The peers paragraph** deleted the beat-2 spine (Cookies is the Zeeker showcase, the answer to
   "what can I do with all this data"). Its own content was strong and only he could write it, so the
   fix was to keep both — his peers/investment material now sets up the restored showcase line — plus
   repair a broken sentence ("I hope it would expanded and advanced").
2. **The aha sentence** sat before the evidence and had replaced the concrete payoff line. Moved
   after Friday's numbers and recombined with "Nobody in that room needed a legend."

### The ending: from moat to added capability

Claude first offered six forward-looking angles, all variants of "here is what comes next
technically" — too narrow, and the brainstorming skill's go-wide rule was applied late. Ten angles on
the second pass, including two deliberately wrong ones.

The user supplied the substance: lawyers assumed prose kept them safe from quantification; creativity
plus an LLM turns prose into factors cheaply and at scale; so law gets processed **by smell**, in
aggregate, where small effects invisible case-by-case become powerful.

Claude framed this as **"the moat that wasn't"** and the user corrected it: *"instead of a moat, im
thinking it as a frame of added capability. reading cookies can give you a deft sense of the law."*

**That correction is the important one and it is now a standing preference:** where a claim can be
framed either as a loss of protection or a gain in capability, Houfu takes the gain. It is additive
rather than defensive, it avoids telling the profession its safety is gone, and it lands the
solo-counsel return honestly — the faculty is worth most to whoever never had a research department.
It also answers the treatise objection cleanly: a treatise supplies knowledge, this supplies *sense*.

### Register: wondering, not declaring

The user's original note was "the future is this hahaha". Asked to pin the register, he chose:
*"hmmm, what does the future hold"*. This is also the honest register — Cookies is one month old, one
person, one jurisdiction, which does not support a prediction. The close now ends "I do not know yet."

### Applied

- New close written under the heading "I keep wondering what this gets us".
- **"deft sense of the law"** added to pitch `protected_lines` — the user's phrase, kept verbatim.
- Pitch thesis extended to cover the faculty claim; beat 5 rewritten with the register instruction.
- Post now **1,700 words against a 1,700 budget**, lint clean.

### Open, and blocking publication

`[HOUFU: ...]` marker left in the close: one real thing the weekly bake has surfaced — a repeated
doctrine, a run in one area, two sources touching the same concept. Claude declined to invent one.
If nothing has surfaced in the first month, saying so plainly is the better sentence and fits the
wondering register.

Also still open: SCCE naming and what people actually asked; the counter-map PNG for the folder.

## Parallel branch: the cloud session's draft v3 (merged 2026-08-17)

The notes below come from the cloud session that ran on this same branch before work moved to the
local machine. It produced an alternative 1,405-word draft (commit `1e5f543`) built on concrete days
rather than a dashboard survey. That draft was superseded by the five-beat bakery structure Houfu
dictated on 16 August, and the merge keeps our file. The notes are preserved because the diagnosis
they record — that a research-heavy draft had gone generic — is the same failure the local session
hit independently, and because that draft found archive material worth revisiting: the 31 January
2025 poem and the $396,000 kickback case beneath it.

## Session 8: Draft v3 — user rejected v2 as generic (2026-08-15)

### The user's call, and it was right

*"i don't see how this article follows the pitch. it feels way too generic. i think you're overly
focused on what you researched on dashboards."*

Measured before rewriting, and the numbers confirmed it. Draft v2 section balance:

| Section | Words |
|---|---|
| Opening (the talk) | 197 |
| What dashboards measure | 261 |
| Three ways around the problem | 275 |
| The unit is the invention | 361 |
| What it buys | 196 |
| Singapore | 150 |
| Close | 167 |

**536 words about other people's products before Cookies was described** — and then described in PRD
register ("every cookie carries the same fields"), never shown. The deeper defect: a 1,607-word post
arguing that legal developments can be turned into comparable units contained **zero concrete
examples of that happening**. No real day, no real cookie, no before-and-after.

This is Voice Guide 2.5 exactly — expository "blog voice", analysis arranged as titled argument
blocks instead of scene-before-analysis with the realization arriving along the way. It is listed in
the guide as the *recurring* drafting failure, and it recurred.

### What changed in v3

Rebuilt around the two concrete artefacts already available and previously unused:

1. **The 23 July counter**, from the screenshot the user pasted in session 4 — seventeen cookies,
   twelve news, five judgments, three still warm, employment two, privacy two, criminal two,
   telecommunications warm. The opening now describes a specific Thursday rather than a product.
   Best line in the draft is the flat one after it: *"Nobody asked what a red dot meant."*
2. **A real v1 digest**, quoted verbatim from the Hugo repo (31 January 2025) — the six-line poem
   plus the $396,000 / 57 workers / 24 weeks kickback case it summarised. This is the before-and-after
   in lived form: same corpus, same author, prose out because prose was all that could be made.

The dashboard research is now **one paragraph** (~180 words) inside a section framed as the author's
own wrong assumption ("I assumed for a long time that what stood between me and something better was
data"), rather than a 536-word survey. The RegTech concession survives in a single sentence, which is
all it needed.

New balance: 1,405 words, ~60% Cookies-specific.

### Still missing

**A real v2 cookie.** The draft illustrates the unit with a hypothetical ("can come out as a single
line about arbitral findings…") drawn from the PRD's own example, phrased hypothetically so it does
not misrepresent a published cookie as real. One actual cookie — headline, why-it-matters, tier —
pasted from the site would be the single highest-value addition left.

### Next steps

- User answers the three open questions → finalise pitch (title, thesis, emotional core, tags).
- Tag proposal pending intent check: `AI`, `LegalTech`, `zeeker`, `Singapore`. Ask whether
  `OpenSource` should replace `Singapore` — the repo is public code, and the registry reserves
  `OpenSource` for posts where the code itself is the point.
- Audience routing: `marcus` primary (open source project / post-mortem per the routing table),
  `wei-lin` secondary. Coverage note: all three reviewer memories were last touched within the same
  week, so no constituency is starved; routing is on content fit alone.
