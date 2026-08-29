# Discussion Notes: Morning Briefing Tutorial

Blog-voice companion to the Law Gazette article *"Breakfast, Eventually: Why Lawyers Should Build
Their Own Tools"* (published, lawgazette.com.sg). Post folder created 2026-08-27 on branch
`post/morning-briefing-tutorial`.

## AUDIT TRAIL: Key Decision Points

### Decision: The frame is "I don't run this anymore", not a redline (2026-08-27, Session 1)

**Claude's Analysis:**
- Located the Gazette working project in Google Drive (`05 Writing & Content/Law Gazette Article/`).
  It already contains a COMPLETE 1,900-word tutorial dated 24 Jul, in Gazette register.
- So "fuller tutorial" could not mean more detail — it had to mean different content.
- Proposed a "redline" spine (skill file v1→v3 as successive marked-up drafts), on the grounds that
  every skill tutorial shows the finished skill and none show the failures.

**Claude's Recommendation:**
Redline spine, primary audience Wei Lin.

**User Decision:**
Supplied the missing frame himself: *"I don't run this skill because I have cookies."*

**Rationale:**
He built [SG Law Cookies](https://cookies.zeeker.sg) and it replaced the briefing skill in his actual
morning. The skill was scaffolding that did its job.

**Outcome:**
✅ Stronger than the redline alone. Disposability follows directly from the Gazette article's own
claim that being wrong is cheap for a market of one, and it lands on Wei Lin's defining anxiety
(guilt about abandoned side projects). Redline demoted from frame to spine.

### Decision: The "attachment" failure is cut (2026-08-27, Session 1)

**Claude's Analysis:**
- `LQ-Diary-workflow-digest-voice-and-builds (24 Jul).md` §3 preserves a three-failures arc, of which
  the Gazette published only two. The unpublished one: a missed consultation deadline "because the
  deadline sat in an attachment".
- Claude initially pitched it as the post's headline differentiator — genuinely unpublished material.
- Then noticed the SLW RSS feed carries title/description/category/pubDate only. A deadline "in an
  attachment" implies a pipeline that follows links out of the feed. Flagged as a possible
  attribution error and asked.

**Claude's Recommendation:**
Asked rather than assumed — offered cut / keep / write-around.

**User Decision:**
Cut it. It belongs to the earlier morning triage workflow, not the SLW briefing skill.

**Rationale:**
Accuracy. Putting another tool's failure in this tutorial would be exactly the unverified-pitch error
the workflow exists to prevent.

**Outcome:**
✅ Caught at PITCH, not after a draft existed. Replaced with the "padding / unsupported summary"
failure documented in the 24 Jul tutorial as breach two, which IS attested for this skill. Three
failures preserved, all three now belonging to the right tool. Recorded in pitch.md *Out of scope* so
it cannot be reinstated later.

### Decision: No correction of the published Gazette line (2026-08-27, Session 1)

**Claude's Analysis:**
Raised that the published sentence — *"The tool earns its keep regardless: each morning, a short
document arrives before the email is opened"* — sits awkwardly with the author no longer running the
tool, and offered four ways to handle it, including opening the blog post with the correction.

**User Decision:**
Declined. *"Earn its keep means it works. I never said it means I will use it forever."*

**Rationale:**
The two claims are different and only the first was made.

**Outcome:**
✅ Concern raised once, user's reading accepted, marked SETTLED in pitch.md *Out of scope* so no
reviewer round re-opens it. Post is framed as a sequel, not a correction.

### Decision: Pivot to a personal agent over Zeeker; SLW becomes the origin story (2026-08-29, Session 2)

**Claude's Analysis:**
- User proposed dropping the SLW-RSS scope and writing "a morning thing based on data.zeeker.sg".
- Claude's first framing ("build a Zeeker-backed morning briefing") was CORRECTED by the user:
  *"sg law cookies is zeeker backed, so this is a low powered formulation."* Cookies already is that.
- Reframed to the gap that actually exists: **Cookies is a broadcast, a skill is personal.** One tray
  for every reader vs. a Definitions clause naming one practice. Cookies cannot be personal (it has an
  audience); the RSS skill was personal but could only see today's headlines. Neither is personal AND
  deep. A Definitions clause run against 10,804 judgments + PDPC + newsrooms is both — and it is the
  literal enactment of the Gazette line about the correct number of users being one.
- Verified the capability instead of assuming it, and found it broken (see below).

**User Decision:**
Pivot. SLW material folds in as the origin story, not the whole post. Sequencing: fix Zeeker first,
then build, then write.

**Rationale:**
The SLW post's artifact is dead (not run, failures recalled from July). A personal Zeeker agent is
something that would be built, run and kept — observed failures instead of remembered ones.

**Outcome:**
⏸ PITCH on hold pending the Zeeker fix and the build. pitch.md kept but marked SUPERSEDED IN PART.

**Which pitch-time check would have caught this:** the DIFFERENTIATION question. The recorded answer
("it opens by admitting the author stopped") passed when the sharper question was available and
unasked — *why is this tutorial built on a generic public feed when the author maintains a better
source?* Claude let a serviceable answer stand instead of pushing to the best one. Logged so the
next pitch interrogation does not settle for the first adequate answer.

### Decision: Zeeker MCP defect found and routed off this branch (2026-08-29, Session 2)

**Claude's Analysis:**
Probed mcp.zeeker.sg against data.zeeker.sg directly before pitching a tutorial built on it:
- `data.zeeker.sg` healthy (Datasette 0.65.2, 0.11s). Direct FTS works: `judgments.json?_search=
  oppression` returns `[2026] SGHC 157`; `sglawwatch/headlines` and `pdpc/enforcement_decisions`
  likewise return rows for `_search=data`.
- MCP `search("oppression")` → 0 hits across every table, `failed_tables: 3`.
  MCP `search("data", databases=["pdpc"])` → `invalid_query: query syntax not supported`.
- `zeeker-judgements` never appears in the MCP's searched-table list at all — the largest table
  (10,804 rows) is absent from FTS auto-discovery.
- Unfiltered scans time out at the Datasette layer (HTTP 400 "SQL query took too long"), surfacing
  through MCP `query_table` as `upstream_unavailable`.
- Metadata calls (`list_tables`, `describe_table`) work, so the server looks healthy from outside.

**Outcome:**
✅ Filed as a separate task against ~/Projects/zeeker-mcp (task_21f57924), NOT on this blog branch —
per the standing rule that infra changes belong on their own PR. Verifying the capability before
pitching is what surfaced it; the earlier "verify data before locking the pitch" rule did its job.

### Decision: Pitch rewritten to a source-agnostic thesis (2026-08-29, Session 3)

**Claude's Analysis:**
The pitch had been through two framings and both were narrower than the user's actual intent.
Claude's v1 was "an RSS tutorial with a disposability frame". Claude's v2 was "an RSS act one plus
a Zeeker act two" — two builds stapled together, which is why the spine kept drifting.

**User Decision (verbatim):**
> ultimately, we want to write a skill that is able to query a website, be it a RSS or through an
> MCP, and get a morning briefing. The point about showing zeeker is that we are able to both
> achieve the point of a hyper personal skill yet reach a rich db like zeeker

**Rationale:**
The source is the VARIABLE; the contract is the CONSTANT. Zeeker is not a second tutorial — it is
the proof that hyper-personal and rich-database are not a trade-off. That is one argument with two
substrates, not two arguments.

**Outcome:**
✅ pitch.md rewritten in place (superseded versions deleted, not stacked — git holds the trail).
Thesis is now "the deliverable is the brief, not the tool"; spine is "The Definitions clause is the
constant. Everything else is plumbing." Beats restructured to 7, summing to the 2,800 budget.

**Diff from the superseded pitch:**
- Thesis: was "a tool can earn its keep and be thrown away" → now "the brief is the deliverable and
  can be repointed". Disposability demoted from thesis to opening admission.
- Spine: was "three wrong outputs, three amended clauses" → now the Definitions/plumbing line.
- Beats: was a single-substrate tutorial (7 beats, 1,900) → two substrates plus a seam (7 beats,
  2,800). The RSS three-failures beat survives at 600 words; the Zeeker beats are new.
- Added to Out of scope: "MCP-vs-RSS as an architecture debate" — they are substrates, not rivals.
- New interrogation answers throughout; differentiation is materially stronger (the SEAM, and the
  refused trade-off) than the previous "opens by admitting the author stopped".

**Which pitch-time check would have caught this earlier:** *test the diagnosis*. Claude twice built
on its own problem framing rather than probing what the user meant by "a fuller tutorial". The user
corrected the framing both times — first "sg law cookies is zeeker backed, so this is a low powered
formulation", then the governing scope above. Two corrections is one too many.

## WHAT CLAUDE DID (Contributions)

### Research
- Read the published Gazette article and the companion gist (the complete SKILL.md).
- Found the Gazette project folder, its CLAUDE.md, CHANGELOG.md, and the 24 Jul tutorial draft after
  the user asked whether the July work could be recovered. Session-transcript search was unavailable
  in this session type; filesystem grep found it instead.
- Confirmed no vibe-coded program survives anywhere on disk — the user confirmed it was ephemeral,
  run in a session "to get as close to the experience of agentic coding as I could get".
- Verified "at most 8 items" against the skill file. Flagged the signature number
  "3-page prompt → 45-line skill" as `[UNVERIFIED]` — the actual file is ~68 content lines — and kept
  it out of the pitch.

### Analysis
- Wrote the two-audience evaluation the user asked for (Law Gazette vs alt-counsel). Key finding: the
  Gazette must argue *that* lawyers should build and spends its first section doing so; alt-counsel
  readers arrive convinced, which frees ~400–500 words for the failures. This is a budget
  reallocation, not a re-voicing — and it is why *Permission to Build* is named in *Out of scope*.

### Writing
- `pitch.md` (106 lines, 168-word pitch paragraph, both inside caps).
- Copied `gazette-tutorial-draft-24jul.md` and `source-three-failures-arc.md` into the folder as
  source material.

## SESSIONS (Chronological Detail)

## Session 1: Brainstorm and pitch (2026-08-27)

### Context
User published the Law Gazette article and reported being told to make a fuller tutorial of it.

### What Claude Did
- Research: read article + gist; recovered the July working folder from Google Drive.
- Analysis: 8 angles generated, narrowed to 2; two-audience evaluation; three interrogation answers.
- Writing: pitch.md, this file.

### User Decisions
- Frame: "I don't run this skill because I have cookies."
- Cut the attachment failure (wrong tool).
- No correction of the Gazette line — "earns its keep" meant it worked.
- Post must link clearly to the Law Gazette article (bookmark card, no lead-in per R2).
- Title: user will write it. Marked PROVISIONAL in pitch.md; Claude is not to re-propose.

### Outcomes
- ✅ Pitch locked on substance; budget 1,900; primary audience wei-lin, secondary marcus.
- ✅ Tags [LegalTech, AI, Tutorial, Singapore]. `OpenSource` deliberately omitted — a SKILL.md is
  prose, not code, per the standing rule that OpenSource requires actual code.
- ❌ TodoWrite unavailable in this session; phases tracked in prose instead.
- Files: pitch.md, discussion.md, gazette-tutorial-draft-24jul.md, source-three-failures-arc.md

### Next Steps
Title from user, then WRITE. Read the Voice Guide + 1-2 recent published posts before drafting.
Watch the drift risk named in pitch.md: this must stay a tutorial, not become a post about
abandoning side projects with the tutorial as evidence.

## Session 2: Pivot to Zeeker (2026-08-29)

### Context
User returned, asked for status, then proposed pivoting from the SLW-RSS scope to something built on
data.zeeker.sg.

### What Claude Did
- Gathered status: branch intact, nothing committed, title still unsettled, lint clean.
- Argued the pivot both ways rather than agreeing; had the first framing corrected by the user.
- Probed the live Zeeker MCP against Datasette directly and found the search defect.
- Filed the defect as a separate task; recorded both decisions above.

### User Decisions
- Pivot to the personal-agent-over-Zeeker angle; SLW folds in as origin story.
- Sequence: fix Zeeker → build → write.

### Outcomes
- ⏸ PITCH on hold. Word budget (1,900) will need revisiting: it was sized for the SLW tutorial alone
  and now has to carry an origin story plus a new build.
- ❌ Claude's initial pivot framing was redundant with SG Law Cookies; corrected by the user.
- Files modified: pitch.md (status block), discussion.md

### Next Steps
Fix mcp.zeeker.sg search (task_21f57924). Then build the personal briefing skill against a healthy
MCP, watching for failures as they happen. Then re-pitch with a budget that fits both acts.

## Session 3: Budget raised, Zeeker fixed, skill built (2026-08-29)

### Context
User raised the word budget ("it's a tutorial, so loosen word count requirements") and reported
the MCP fix landed. Sequence reached its build step.

### What Claude Did
- Verified the fix rather than taking it on report: `zeeker-judgements.judgments` is back in FTS
  discovery (170 hits for "oppression"); PDPC scoped search returns 93 hits, `failed_tables: 0`.
  Residual: unfiltered scans still HTTP 400 at the Datasette layer; `failed_tables: 1` persists on
  unscoped search.
- Sampled 200 judgments and found the `subject_tags` taxonomy is real but dirty — 84 of 446 tags
  (19%) don't split on the em dash; case drift costs 6 tag hits but only 1 judgment of 200.
- Wrote `skill/SKILL.md` v1, ran its own obligations against the live server, and found two
  failures. Kept v1 as `skill/SKILL.v1.md` and wrote v2. Full detail in research.md.

### User Decisions
- word_budget 1900 → 2800, recorded as `budget_approved_by: houfu`.

### Outcomes
- ✅ Three defects found, all the same species — silence. This is now the post's spine, and unlike
  the SLW material it was observed this session rather than recalled from July.
- ✅ Discovered the linter's `stripToProse()` strips fenced code blocks, so the SKILL.md listing
  costs nothing against the budget — 2,800 is 2,800 words of argument.
- Files: pitch.md, research.md, skill/SKILL.md, skill/SKILL.v1.md, discussion.md

### Next Steps
Re-pitch thesis / spine / beats to the two-act shape, then WRITE. Re-run every number in
research.md at final draft — the corpus grows daily.

### Session 3 addendum: pitch rewrite (2026-08-29)
pitch.md rewritten in place to the source-agnostic thesis (see AUDIT TRAIL above). 114 lines,
170-word pitch paragraph, beats summing to 2,800. Title still PROVISIONAL — user's to settle.
Next: WRITE. Read the Voice Guide and 1-2 recent published posts before drafting; re-run the
research.md numbers at final draft.

## Session 4: Spine and outline drafted (2026-08-29)

### Context
Session opened with a repo-wide status gather. User chose the next move himself: *"yup we're here
to draft morning briefing. draft the spine and the outline, and i'll feedback to you what we need
to do."* Deliverable is the outline, not the draft.

### What Claude Did
- Read the full pitch, research.md, both SKILL versions, the 24 Jul Gazette draft,
  source-three-failures-arc.md, the whole discussion.md, and the Voice Guide.
- Voice reference: `come-into-the-bakery` — sampled for narrative-first pacing and for how it
  carries teaching material inside the story rather than in titled argument blocks.
- Wrote `outline.md`: spine, 8 sections with word budgets, material sources per section, and the
  standing risks carried into the draft.
- Proposed three changes to the pitch and flagged two defects in it. All five are OPEN — put to
  the user, not decided.

### Claude's Recommendations (all awaiting user decision)
1. **Sharpen the spine.** Protected line stays ("The Definitions clause is the constant. Everything
   else is plumbing."), but it only carries the portability limb. Proposed join: *Definitions says
   what you care about; Standard of Performance says what counts as an honest answer; everything
   between is plumbing.* Earned by the v1→v2 diff — Definitions barely moved between substrates,
   the Standard of Performance clause grew from three clauses to six. The finding: a richer source
   charges for its depth in honesty clauses.
2. **Reorder to a chronological spine.** The pitch's seven beats are topical (contract / substrate
   one / substrate two / new failures / seam) — the expository arrangement Voice Guide §2.5 names
   as the recurring drafting failure, and the same shape that keeps the pitch's own diagnosis risk
   alive. Chronology makes the two substrates share one argument structurally, because the argument
   is discovered in act one and tested in act two. Consequences: "substrate two" and "the new
   failures" collapse into one section; pitch beat 6 ("Swap the source, keep the contract", 400
   words) is deleted as a section and its thesis moves to the hinge as realisation.
3. **Print one skill file, not two** — Zeeker's SKILL.md in full, RSS shown only as the clauses
   under discussion.

### Defects found in the pitch
- **"Both versions failed, five years of tooling apart" — the number is wrong.** The two skills
  were written five *weeks* apart (24 Jul, 29 Aug); RSS 2.0 dates to 2002 and MCP to Nov 2024,
  which is 22 years. No reading supports "five". Voice Guide §1.3 requires defensible numbers.
- **"In exactly the same way: silently" is only clean for two of the three RSS failures.** The
  vague brief flagged everything — that is noise, not silence. Proposed replacement through-line:
  *a briefing you cannot audit by reading it*, which covers all six defects across both builds
  honestly, with vagueness demoted to the setup's "before" state.

### User Decisions
None yet — the five open questions (spine, through-line, one skill file or two, the "five years"
number, and the title) were put to the user at the end of the turn and are awaiting his feedback.

### Outcomes
- ✅ `outline.md` written; no draft started, no pitch edited. Pitch amendments 1–3 are proposals
  only and must not be applied to pitch.md until the user rules on them.
- ⚠ Open and unresolved, neither blocking the draft: research.md's numbers need re-running at final
  draft (the corpus grows daily), and `failed_tables: 1` on unscoped search is still undiagnosed.

### Next Steps
Await feedback on the five open decisions. Then amend pitch.md to whatever survives (logging which
pitch-time check would have caught each), and WRITE.

### Session 4 addendum: framing reset, pitch amended (2026-08-29)

### Context
User rejected the premise the first outline was built on.

**User Decision (verbatim):**
> the SLG article had different purposes: it was written for the general public of lawyers, so
> diving into something overly technical like how to actually build the thing was not included.
> this time we're going to dive deep into how to actually build the skill, but instead of using a
> boring thing like singaporelawwatch rss (which i chose because many lawyers in singapore are
> familiar with it) we're going to pick zeeker, a far richer and my own database

**Rationale (his):** the Gazette article's omissions were audience choices, not gaps. SLW's RSS was
picked for familiarity, not merit. The differentiator for this post is technical depth; the
substrate change follows from it, because a four-field feed cannot reward depth and 10,804
judgments can.

### What Claude Got Wrong
The first outline made the *seam* between two substrates the argument — RSS act one, Zeeker act
two, source-swapping as the point. That was Claude's differentiation answer, not the user's. The
recorded `differentiation` field said "this teaches the SEAM"; the user's actual answer is "the
Gazette couldn't go technical and this does."

**Which pitch-time check would have caught it:** DIFFERENTIATION again — and this is now the third
time on this pitch that Claude built on its own framing rather than the user's (Session 2 logged
"Claude let a serviceable answer stand"; Session 3 logged "Claude twice built on its own problem
framing"). The unasked question each time is the same one: *why is the user writing this, in his
words, rather than why is it interesting.* Recorded as a pattern, not a one-off.

### What Claude Did
- Rewrote `outline.md` to the deep-build shape: 8 sections, RSS demoted from act one to 250 words
  of compressed context that exists to make the Zeeker clauses legible.
- Amended `pitch.md` in place: `differentiation`, `framing_risk`, `subject`, `diagnosis`, the pitch
  paragraph, all beats, and two new Out-of-scope entries. Both protected lines survive and are
  placed. `word_budget` left at 2,800 — Houfu approved that figure and it is not Claude's to raise.
- Raised `framing_risk` LOW → MEDIUM. A Zeeker-only build is much closer to a product demo. Answered
  structurally: limits stated before Zeeker does argumentative work, three of five defects are
  Zeeker's own and carry ~1,000 words, and the final section hands the method to a reader with no
  Zeeker and no Singapore practice.

### Outcomes
- ✅ Beats re-cut to the build: reading the schema, `search` vs `query_table`, the Definitions clause
  against a dirty taxonomy, per-source cadences, the honesty clauses.
- ✅ Resolved from the earlier open list: the RSS/Zeeker structure question, three-failures-or-two
  (RSS compresses to the two attested failures), and one skill file printed rather than two.
- ✅ Cut "five years of tooling apart" to Out of scope — unsupportable on any reading.
- ⚠ Still open: word budget (2,800 held vs 3,200 proposed for the build sections), the title, and
  whether Marcus rises to co-primary now the post is a technical build with three observed defects.

### Next Steps
Houfu's call on budget and title. Then WRITE. Re-run every number in research.md first — every
figure in beats 3–6 is dated 2026-08-29 and the corpus grows daily. Diagnose or disclose the open
`failed_tables: 1`, since beat 6 cites `failed_tables` as an honesty mechanism.

### Session 4, third pass: subject settled — building against MCPs (2026-08-29)

**User Decision (verbatim):**
> we shouldnt be trying to expose zeeker's weaknesses. my attitude is that there's a bug then we
> should fix it. but perhaps what this tutorial should teach is that skills are different when they
> connect to an external source like Zeeker MCP (it is roughly the same thrust as the SLG article).
> This is not a product demo. We are teaching lawyers to build against MCPs

**Rationale (his):** bugs get fixed, not published. And the transferable lesson is not "look at a
rich database" but "here is what changes when your skill talks to a live server".

### What Claude Got Wrong
The second outline organised the post around five observed defects, three of them Zeeker's, on the
theory that a tutorial spending a third of its length on the author's own database failing could
not be read as a demo. That was an anti-demo *device* substituting for a subject — and it still
made Zeeker the subject, just in the negative. The user supplied the actual subject.

**Pattern, now three passes running:** Claude keeps reaching for a structural gimmick (the redline,
the seam, the defect tour) where the user keeps supplying a plain subject. The unasked question is
the same each time: what should a reader be able to DO afterwards. Logged alongside the Session 2
and Session 3 entries, which record the same failure with different names.

### What Claude Did
- Rewrote `outline.md` around **six differences between a feed-reading skill and an MCP-connected
  one**, each a property of MCPs generally, each demonstrated on Zeeker, each producing a clause:
  you interrogate the schema rather than read it; the source has several verbs answering different
  questions; structured data lets Definitions name a field; you are querying live infrastructure so
  every query must be constrained; a sweep can half-succeed and one server fronts several publishing
  rhythms; provenance and citations arrive with the data.
- Amended `pitch.md` again: diagnosis, differentiation, framing_risk, subject, thesis, the pitch
  paragraph and all beats. Added the standing instruction to `framing_risk` and an explicit
  "Exposing Zeeker's weaknesses" entry to Out of scope so no reviewer round reopens it.
- Lowered `framing_risk` MEDIUM → LOW. Demo risk is now answered by what the post is about rather
  than by self-criticism.
- **Withdrew the 3,200 budget request.** Losing the defect tour freed the room; beats sum to 2,800.

### Material now cut
- The 19% unparseable `subject_tags` audit — fixable at ingest, so it is a bug to fix. At most a
  generic tolerant-matching line survives, with no number attached.
- `failed_tables: 1` on unscoped search — the mechanism is taught, the open defect is not published.
- The whole "three of five defects are Zeeker's own" anti-demo device.

### Outcomes
- ✅ Subject is now the user's and stated in his own words in pitch.md.
- ✅ The RSS material becomes load-bearing rather than nostalgic: it is the baseline every difference
  is measured against, which is also why it survives at 300 words.
- ✅ Budget question closed at 2,800.
- ⚠ New diagnosis risk recorded: if the six differences turn out to be true of any external data
  source rather than of MCPs specifically, the post is about calling APIs and the framing must
  follow the truth. Watch for this at draft.

### Next Steps
Two open items, then WRITE. (1) Fix or leave the dirty `subject_tags` — if fixed at ingest the
generic matching line still stands. (2) `failed_tables: 1` is a publish blocker, not a draft
blocker, since beat 5 teaches `failed_tables` as an honesty mechanism. Title still unsettled and
Houfu's. Re-run every figure in research.md before drafting.

### Session 4, fourth pass: title settled (2026-08-29)

### Context
Spine and outline approved by the user. He then asked to brainstorm the title. Brainstorming skill
invoked; the retired working title was "Write the Brief. Swap the Source."

### What Claude Did
Went wide with eight angles before narrowing, including two deliberately weak ones. Sampled all 25
published titles first, which corrected a wrong assumption: **Houfu's titles do use imperatives**
("Come Into the Bakery", "Tell Me What the Watermark Does"), so an imperative title is house style,
not preachy. His most distinctive pattern is the two-part declarative with a hard stop ("AI Won't
Replace You. Someone Who Decides Will.").

Rejected on the way, with reasons worth keeping:
- **"How to Build a Legal Morning Briefing Skill with MCP"** — the generic register the blog exists
  to avoid; it will always be "another MCP tutorial" (Marcus's differentiation question).
- **"I Don't Run My Own Tutorial Anymore"** — the best hook on the list, and it promises the post
  the user already rejected. Disposability is an opening admission, not the thesis; the title would
  be writing a cheque beat 1 does not cash.

### User Decisions
1. **"Read the Server Like a Precedent"** — thrust approved, phrasing rejected: *"the main thrust is
   what i appreciated, but at first glance, it sounded kinda corny"*.
2. Diagnosis confirmed as **the simile**, not "read the server": *"it's the similie"*.
3. **TITLE SETTLED: "Read the Server Before You Draft."**

**Rationale:** the thrust he wanted is the continuity with the Law Gazette article — read the source
before you draft the contract, with the source now a live server. "Like a precedent" asked the
reader to accept a comparison before knowing what it was for, which is the clever-clever
construction the Voice Guide deletes on sight. The settled title is that same sentence with the
flourish cut off.

**Voice rule confirmed by this exchange:** similes and comparisons in titles read as corny to him.
Plain statement of the move beats the figure of speech. Consistent with the corpus finding that his
edits cut flourishes rather than add them.

### Outcomes
- ✅ Title written into pitch.md and outline.md. Open decisions on the outline reduced to the two
  Zeeker items.
- Noted, not asked as a blocker: the title does no discovery work — it names neither MCP nor
  briefings. A colon subtitle is available if he wants it later; several of his titles use one.

### Next Steps
Two items before WRITE: the dirty `subject_tags` (fix at ingest, or keep a generic tolerant-matching
line with no number), and `failed_tables: 1` (publish blocker, not a draft blocker). Re-run every
figure in research.md at draft.
