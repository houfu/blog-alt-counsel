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

### Next steps

- User answers the three open questions → finalise pitch (title, thesis, emotional core, tags).
- Tag proposal pending intent check: `AI`, `LegalTech`, `zeeker`, `Singapore`. Ask whether
  `OpenSource` should replace `Singapore` — the repo is public code, and the registry reserves
  `OpenSource` for posts where the code itself is the point.
- Audience routing: `marcus` primary (open source project / post-mortem per the routing table),
  `wei-lin` secondary. Coverage note: all three reviewer memories were last touched within the same
  week, so no constituency is starved; routing is on content fit alone.
