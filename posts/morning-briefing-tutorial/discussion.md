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

### Session 4, fifth pass: failed_tables diagnosed (2026-08-29)

### Context
User asked whether `failed_tables: 1` might be transient. Tested against the live server rather
than reasoned about.

### What Claude Did
Probed mcp.zeeker.sg and data.zeeker.sg directly over JSON-RPC and Datasette JSON.

- **Isolated the table.** 26 tables exist; 18 report hits on an unscoped search. Scoping the search
  per database put `failed_tables: 1` in `zeeker-judgements` alone, and within it only
  `judgments_fragments` fails — `judgments` and `_zeeker_provenance` both return 200.
- **Reproduced the failure and its cure.** Direct FTS on `judgments_fragments` returns HTTP 400
  "SQL query took too long" on a cold index, failing in 1.1–1.9s, then 200 in 0.05–0.4s once warm.
  Ruled out page size (`_size=20` warm is fine) and the row count (`_nocount=1` made no difference).
  After the index was thoroughly warm, cold search terms that had failed began succeeding.
- **Confirmed end to end.** With the index warm, the MCP's own unscoped search returned
  `failed_tables: 0` and 19 tables reporting, `judgments_fragments` among them with 113 hits. One
  run in the same batch failed again after a pause — warmth decays.

### Finding
Not a data or schema defect. A cold-index interaction with Datasette's SQL time limit, on exactly
one table. Transient in the precise sense that it clears when the index is cached and returns when
it is not — which means it will show up most mornings, because a briefing runs once a day on a cold
index.

### Outcomes
- ✅ No longer a publish blocker. Routed to the zeeker-mcp side (candidate fixes: raise
  `sql_time_limit_ms`, warm the FTS index on deploy or schedule, or drop fragments tables from
  unscoped search). Infra work stays off this branch per the standing rule.
- ✅ **The post does not mention it.** Beat 5 teaches the mechanism generically; naming an open
  defect on the author's own server is exactly what the user ruled out.
- ⚠ **Accuracy constraint for drafting:** this failure would never reach the daily briefing, because
  the brief sweeps with `query_table` and confines `search` to topical asks. Beat 5 must not imply
  that the briefing was silently short because of it. The clause is justified by sweeps being able
  to half-succeed in general, not by this instance.

### Next Steps
One open item before WRITE: the dirty `subject_tags`. Then re-run every figure in research.md and
draft.

### Session 4, sixth pass: last open item closed (2026-08-29)

**User Decision:** on the dirty `subject_tags` — *"leave it"*. Not normalising separators at ingest.

**Consequence for the post:** the tags stay inconsistent, so the matching clause in beat 5 has to
cope with them, and it is written as ordinary care with hand-written data — compare
case-insensitively, do not assume a separator, match on the leading subject words, treat an
unparseable tag as UNCERTAIN rather than excluded. **No number, no audit, no count of what fails**,
consistent with the standing instruction that the post is not an audit of Zeeker.

### Outcomes
- ✅ PITCH phase complete. Spine and outline approved, title settled, both blockers closed
  (`failed_tables` diagnosed as a transient cold-index timeout and routed off this branch;
  `subject_tags` left as is). Nothing outstanding before WRITE.
- research.md figures are stamped 2026-08-29 and are current as of today; re-verify if drafting
  slips to another day.

### Next Steps
WRITE. Read the Voice Guide and `come-into-the-bakery` before drafting; 2,800 words across the
eight beats in pitch.md.

## Session 5: First draft written (2026-08-29)

### Context
User cleared the draft with one steer: *"go ahead. remember this is a tutorial. not a narrative
story or an opinion."*

### How that changed the drafting
The outline had been written with narrative pacing in mind — Voice Guide §2.5, analysis arriving as
realisation. That guidance is for the argumentative lanes, not this one. The draft was written in
tutorial register instead, modelled on the Gazette piece's own structure: second person for
instruction, first person only for what was actually done and found, procedure in bullets where
bullets belong, and no story arc. The emotional core ("I don't run the first one anymore") is two
sentences of context in the opening rather than a frame.

### Figures re-verified live before drafting
Every number in the post was re-run against mcp.zeeker.sg and data.zeeker.sg on 2026-08-29, not
taken from research.md:
- judgments row count 10,804 — confirmed via `describe_table`.
- Most recent judgment 2026-08-28; most recent PDPC enforcement decision 2026-08-05 (24 days) —
  both confirmed via `query_table`.
- The stale-`search` example reproduced exactly: `search("enforcement")` unscoped returns
  2026-06-11, 2022-09-13, **2010-11-23** (AGC media brief on contempt of court proceedings),
  2026-07-13, 2026-05-18. The 2010 item is the third result. Real and reproducible today.
- Real `subject_tags` strings, a real `_citation`, and the actual `search` and `query_table` tool
  descriptions pulled from `tools/list` rather than paraphrased.
- Five databases, not four (the `list_databases` tool description says four — a stale doc string on
  the Zeeker side, deliberately not mentioned in the post).

### Length
First pass came in at 2,031 words against a 2,800 budget — below the 2,520 floor. The gaps were in
the sections a tutorial reader needs most, and the fix was content rather than padding: the six
tools were never actually named, the five databases and their differing licences were missing, the
"perform the clause yourself before trusting it" habit was missing, and the standard-of-performance
walkthrough had been compressed to a single sentence. Final: **2,731 words**, lint clean.

### Outcomes
- ✅ Draft at `morning-briefing-tutorial.md`. `npm run lint-posts`: 0 errors, 0 warnings.
- ✅ Both protected lines placed: "I rewrote each time." stands alone in §2; "The Definitions clause
  is the constant. Everything else is plumbing." closes §6 where the 3→6 clause growth is stated.
- ✅ Bookmark cards placed with no lead-in narration (R2): Gazette and `come-into-the-bakery` in the
  opening, `ect-no-lawyers-zeeker` at the end of §3, `skillsbench-analysis` in §7.
- ✅ Standing instruction honoured — no Zeeker defect appears. The `search` mis-selection is written
  as a drafting error ("the tool did exactly what its description says"), and the subject_tags
  inconsistency appears as a matching-clause instruction with no number and no audit.
- Trimmed the pitch paragraph twice to satisfy the ≤200-word contract.

### Next Steps
REVIEW, in order: pitch checkpoint, then the two audit agents in one message (audit-substance and
audit-tone), then reviewers per `primary_audience: wei-lin`, then the length audit before applying
any additive fixes, then backlinks and tag validation.

## Session 6: Cookies layer section added; protected line amended (2026-08-30)

### Context
User asked which was more interesting — interrogating the whole Zeeker MCP (as drafted) or pointing
the brief at the `sg-law-cookies` database to recreate the Cookies experience — for a lay lawyer and
for his own objectives.

### What Claude Did
Read the source before answering, per the post's own advice, and found a blocking fact: the
`sg-law-cookies` database on the MCP held 45 cookies spanning 26 May to 8 June 2026, while
cookies.zeeker.sg served a front page dated 29 August with judgments through the 28th. The live
bakery was current; the MCP's copy had stopped in June. A learner following a cookies-only tutorial
would have built a briefing that returned nothing on day one.

### Claude's Recommendation
Keep the whole-MCP interrogation as the spine; give cookies a short closing section. Reasons given:
- **Lay-lawyer interest favours cookies** — `significance` and `why_it_matters` already exist as
  columns, so the two judgement calls the brief currently drafts clauses to make are handed over;
  the unit is finer (one judgment surfaces as several propositions); and the bakery image has
  already landed with an audience.
- **His objectives favour the raw layer**, and the argument came from his own hand edit: he had
  written that Cookies "is pretty much a showcase of Zeeker's dataset… That doesn't make sense to a
  lawyer trying to mould the data into a service he can appreciate." Closing that gap by pointing
  the tutorial at the showcase works against him, and narrows transferability toward a product demo.

### User Decisions
1. **Keep the short closing section.** *"let's keep the short closing section."*
2. **He is fixing the cookies sync himself** — *"i am actually fixing it now anyway"*. Consistent
   with the standing rule that bugs get fixed rather than published.

### What went into the post
New section, "The same server carries two layers" (291 words), placed between the Definitions
adaptation and the close. It carries **no volatile figures** — no row counts, no date ranges —
because the underlying data was being changed as it was written. It describes schema, which is
stable: `significance` and `why_it_matters` sit outside the light column set, so they must be named
in `columns`, which reinforces the light/available lesson from beat 3. The framing is a design
question rather than a second tutorial: how much judgment are you delegating to the source, and are
you comfortable with who made it. `folio_areas` is offered as the middle path because FOLIO is an
open standard and therefore transfers off Zeeker entirely.

Deliberately omitted: the staleness, and the count of cookies with no `primary_area`. Both are audit
numbers about the author's own database, which the standing instruction rules out — and the first
would have been false by publication anyway.

### Protected line amended
Houfu's hand edits changed "I rewrote each time." to "In the SLG article, the agent rewrote each
time." The post-edit lint hook caught the divergence and blocked. Resolved the correct way round:
**his edit stands and pitch.md was amended** to match, per the rule that protected lines survive all
cuts or the pitch gets amended. Never smooth a passage he hand-wrote.

### Outcomes
- ✅ 3,036 words, inside the 2,800 +/-10% budget (ceiling 3,080). Lint clean.
- ⚠ Close to the ceiling. Any additive reviewer fix now needs cuts found first — which is the
  standing ordering rule, and it now genuinely binds.

### Next Steps
REVIEW: pitch checkpoint, then audit-substance and audit-tone in one message, then Wei Lin, then the
length audit before applying any additive fixes, then backlinks and tags.

## Session 7: Reframed to how agentic building actually works (2026-08-30)

**User Decision (verbatim):**
> the tutorial explains every step in detail, but is that how agentic coding will go? what actually
> will happen is that the user will provide a prompt, and we will see what is going underneath it

### The problem, accepted
The draft read like a manual — run `list_databases`, then `describe_table`, then send this
`query_table` payload — which is not what anyone does. In practice the lawyer writes a sentence, the
agent decides which tools to call, and the work is reading what came back.

Evidence the critique was right, from the draft itself: exactly one paragraph already had the
correct model ("Ask the assistant to run that obligation and show you the raw rows"). Everything
around it had drifted into manual mode. The fix was to make the post consistent with that paragraph
rather than treat it as an exception. His own hand-written opening had already set the frame —
*"for an article that tries to extol the virtues of agentic coding, no coding actually takes place"*.

### What changed
Prompt-first across the build sections. Prompts go in fenced blocks, so they cost nothing against
the word budget; the prose around them was rewritten in place rather than added to.

- **Heading:** "You interrogate an MCP; you don't read it" → **"Send the agent in first"**. The old
  heading asserted the manual model in three words.
- **Survey step** is now a plain-English prompt, with the three discovery tools described as what
  runs *underneath* it and never appears in the finished brief.
- **The tool-selection lesson got stronger, not weaker.** You are not choosing between `search` and
  `query_table` each morning — your brief chooses once, in writing, and the agent obeys it for as
  long as you leave it there. "A badly drafted clause is not a mistake you catch in the moment. It
  is a standing instruction." The 2010 result is now the agent faithfully executing a bad clause.
- **The verification habit is promoted to the section's spine** and given its own prompt: make the
  agent show every tool call and the raw rows before it writes anything. Closing line names what the
  skill actually is — "you are not writing code, you are reading a transcript and asking whether it
  is what you asked for."
- **Cadence discovery** became one sentence to the agent instead of four hand-written queries.

### Outcomes
- ✅ 3,061 words, inside the 3,080 cap. Lint clean. Held in budget by trimming the provenance
  paragraph and the "reproduce by hand" aside, both of which had gone slack.
- ✅ The reframe sharpens the pitch's differentiation rather than departing from it: almost no skill
  tutorial shows the loop of prompt → read the transcript → amend the clause.
- ⚠ **19 words of headroom.** Any additive reviewer fix now requires cuts found first. The
  length-audit-first rule is fully binding.
- Left alone deliberately: his hand-written passages, and the six-moves list in the adaptation
  section, which already reads correctly in the agentic frame ("interrogate the schema", "ask each
  source") and did not need touching.

### Next Steps
REVIEW: pitch checkpoint, then audit-substance and audit-tone in one message, then Wei Lin, then the
length audit before any additive fix, then backlinks and tags.

## Session 8: Legal comparisons excised from the body (2026-08-30)

**User Decision (verbatim):**
> excise the corny comparisons to legal terms scattered throughout the tutorial. i explained why i
> used it in the SLG, which was part of the narratove but not so much the tutorial. there's no need
> to repeat it here except the intro

### Rationale
His rewritten intro now owns the device explicitly — "For the sake of simplicity, I borrowed many
well known legal terms to explain the process to lawyers who read the SLG" — and treats it as a past
choice being explained. Repeating the analogy downstream was the corniness.

### What was cut (four, the complete set)
Grepped the body for legal-analogy constructions and found exactly four:
1. "This is the same move as reading a precedent before you draft from it" — the survey step.
2. "and you would extend the same courtesy to a headnote" — the tag-matching paragraph.
3. "— the same reason entire agreement clauses exist" — the standard-of-performance walkthrough.
4. "exactly as you would adapt a precedent for a new client" — the adaptation section.

### What was deliberately kept
- **The intro bullets** (his), untouched — the carve-out he named.
- **Artifact names**, which are not comparisons: Definitions, Obligations, Standard of performance,
  "clause", "the brief". These are what the parts of a SKILL.md are actually called in this post.
- **"whole headnotes running to several paragraphs"** inside the SKILL.md listing — literal and
  accurate; the courts' `subject_tags` genuinely are headnotes, not a simile.
- **"because no junior ever asked you to"** in the close — an analogy to supervising a junior rather
  than a legal-term comparison, so outside the instruction as given. Flagged to him rather than cut
  unilaterally.

### Length
His new intro material (the four bullets plus the behind-the-scenes paragraph) pushed the draft to
3,199 words, well past the 3,080 cap. The four excisions recovered ~40. The remaining ~90 were taken
out of **Claude's prose, not his** — tightening in the survey step, the verification habit, the
handful-of-calls paragraph, the three-to-six comparison and the two-layers section. Final: 3,096,
inside cap.

### Protected line re-synced (second time)
His §2 rewrite changed the line again — "In the SLG article, the agent rewrote each time." became
"Every time we encountered a problem, the agent rewrote it." The lint hook blocked; pitch.md was
amended to track the hand edit, same resolution as last session. The rule is holding: the draft's
hand-written line wins, the pitch follows.

### Outcomes
- ✅ 3,096 words, inside cap. Lint clean.
- ⚠ Budget is now structurally tight. Twice in two sessions his additions have pushed past the cap
  and been absorbed by trimming Claude's prose. There is not a third round of that available —
  the next addition needs either a real cut elsewhere or an amended `word_budget`, which is his.

### Next Steps
REVIEW: pitch checkpoint, then audit-substance and audit-tone in one message, then Wei Lin, then the
length audit, then backlinks and tags.

## Session 9: Artifact names excised from the prose (2026-08-30)

**User Decision (verbatim):**
> Don't touch my intro bullets, but excise the "artifcat names", even if we had used them in a skill.
> I mentioned in my intro that choice of words is important, but to an agent, i believe the
> definitions, obligations stuff have limited impact. perhaps which should strenghtened what i am
> trying to say there.
> You don't need to rewrite the skill even if it uses legal drafting terms

### Rationale (his)
The words you choose matter to an agent; the legal document *structure* — labelling sections
Definitions, Obligations, Standard of Performance — probably does not. It was presentation for
lawyer readers of the SLG piece. Prose that leans on that structure as if it were doing work
undercuts the point his intro is making about specificity.

### What was done
Twenty-two replacements across the body, none inside his intro bullets and none inside the SKILL.md
listing, which he explicitly exempted. The listing keeps its legal headings; only the prose stopped
borrowing them.

- "the Definitions clause" → "what you count as relevant" / "the part that carries your judgment"
- "clause" → instruction, rule, line, depending on what it actually is
- "obligation" → what the brief says
- "the standard of performance" → "what counts as an honest answer" / "the rules about reporting gaps"
- Heading "Writing your own Definitions clause" → **"Making it yours"**

### The 3→6 finding got truer
It had been counting *clauses*, which is structural — exactly the thing he says does not reach the
agent. Restated as substance: "In the feed version, three instructions covered what counted as an
honest answer. Here it takes six." Same finding, no longer resting on section labels.

### Protected line and spine amended (third amendment)
The spine line was "The Definitions clause is the constant. Everything else is plumbing." — it could
not survive the instruction, since it is built entirely on an artifact name. Amended to:

> **Your judgment is the constant. Everything else is plumbing.**

Plainer, and it says what the original meant without the scaffolding. `thesis_keywords` updated from
"Definitions" to "judgment", since the former no longer appears in the prose. Recorded here because
this is the pitch's declared spine, not just a line — if he wants it back in some other form, this
is the entry to argue with.

### Outcomes
- ✅ 22/22 replacements applied; zero artifact names left in prose; SKILL.md listing untouched.
- ✅ Lint clean, inside budget.
- Kept, as before and still flagged: "because no junior ever asked you to" in the close. Not an
  artifact name and not a legal-term comparison.

### Next Steps
REVIEW: pitch checkpoint, then audit-substance and audit-tone in one message, then Wei Lin, then the
length audit, then backlinks and tags.

### Settled: the "junior" line stays (2026-08-30)

**User Decision:** *"you can leave the junior thing alone."*

The close keeps "…a precise written record of your own editorial judgment — which you have probably
never had to set down before, because no junior ever asked you to." Raised twice by Claude during
the two excision passes and declined both times. SETTLED — reviewers should not re-open it.

Boundary this establishes, worth carrying to future posts: the objection was to **borrowed legal
vocabulary doing explanatory work** — precedents, headnotes, entire agreement clauses, Definitions
and Obligations as section labels. An observation drawn from how practice actually works is not the
same thing and stays.
