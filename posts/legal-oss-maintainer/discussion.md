# Discussion: legal-oss-maintainer

Working notes for the post on maintaining lq-ai, learning to maintain other people's code, and the long-term stewardship vision for legal open source.

## 2026-07-27 — Session 1: Idea → draft pitch

**Context**

Houfu proposed an article about contributing to legal open source: his experience working on lq-ai since end June 2026, especially learning to maintain other people's code, and a long-term vision — "my desire for a long term future lies in open source, not being the great guy with the greatest idea made for free, but mentoring and guiding legal open source project (maybe even from law firms) to long term sustainability."

**Key facts from Houfu (this session)**

- Started on lq-ai at the end of June 2026 (~1 month before this session).
- Repo: `legalquants/lq-ai` (LegalQuants community project).
- He built `houfu/lq-ai-maintainer` to support his maintainer activities — his words: "I *tried* to develop" it (state unclear; flagged as a question).

**What Claude did**

- Read Part 1 (`legal-oss-contribution` / "Lawyers Are Building. Just Not On Each Other's Code.", published 2026-05-11) and its discussion tail. Identified that this idea is effectively the Part 2 that post promised ("what works" + redlines lessons), with a stronger arc: the author of the "lawyers don't push to each other's code" diagnosis is now maintaining someone else's code.
- Invoked generate_a_pitch skill; read Voice Guide Part 4 (Lane 2 "Learning in Public" template fits).
- Asked the mandatory genuine-experience question. Houfu answered the factual part (timeline, repos) but not yet the emotional core — re-asked; still open.
- Attempted to verify repo data: `add_repo` failed for both repos (cross-owner tier limit for legalquants/lq-ai; no credential visibility on houfu/lq-ai-maintainer, possibly private). Public GitHub API and web pages are proxy-blocked in this session. Decision: do not route around network policy; all quantitative claims marked `[UNVERIFIED]` in pitch.md, numbers to come from Houfu directly.
- Drafted pitch.md (marked DRAFT pending approval) with: draft titles, ~180-word pitch with explicit `[EMOTIONAL CORE]` placeholder (not invented, per voice principle 8), provisional interrogation answers, must-link posts, suggested tags.

**Decisions (Claude's recommendations, pending Houfu)**

- Frame as explicit Part 2 of `lawyers-not-on-each-others-code` — the callback is earned. The originally promised Part 2 content (docassemble/courtlistener deep-dive) may be descoped in favour of lived lq-ai experience; needs explicit decision.
- Frame the "mentoring/stewardship future" as a hypothesis tested in public, not a conversion narrative — one month in is honeymoon territory (interrogation Q1).
- Framing risk flagged: post must not read as commentary on lq-ai code quality or a dig at law-firm OSS (interrogation Q3).

**Open questions (blocking pitch lock)**

1. Emotional core — the specific lq-ai moment driving the post
2. Lived numbers — PRs reviewed/merged, hours/week, how role came about
3. What lq-ai does + who else maintains it
4. State of lq-ai-maintainer
5. Part 2 framing confirmation
6. Target publish date / external hook

**Next steps**

- Houfu answers open questions → lock pitch → tags confirmed → outline → draft

## 2026-07-27 — Session 1 (cont.): Emotional core landed; Wei Lin pitch-stage consult

**Houfu's answer (the emotional core, verbatim in pitch.md)**

Not a success story. Double uncertainty: as contributor "don't know if my code is good"; as maintainer "don't know if this code is good". Wrote the agent (lq-ai-maintainer) to help, but "fable claims that there is no open source code review agent that can help a non technical audience". Few PRs coming through, response times below ideal, no release timeline. Believes foundations + governance help long term; "results will have to be seen". Asked: "Would that be interesting to my audience?"

**What Claude did**

- Rewrote the pitch (v2) around the double-uncertainty core and the honest non-success metrics; kept `[UNVERIFIED]` markers on all counts.
- Ran a **pitch-stage Wei Lin consult** (getting-feedback skill; single reviewer per routing table "learning in public / personal struggle"; explicitly NOT counted against the 2-round draft cap — noted here so the cap stays honest). Memory file passed and MEMORY_UPDATE appended.

**Wei Lin verdict**: Yes, unambiguously interesting — "the mess is the post"; a messy-middle maintainer diary is higher-trust than a success story. Title locked on his pick: "I Said Lawyers Don't Work on Each Other's Code. Then I Started."

**Wei Lin unique catches (carried into pitch.md as draft obligations)**: own the Part 1 "what works" pivot in one early sentence; scene treatment for the lq-ai-maintainer beat; protect load-bearing line "This isn't a success story, and I'm writing it anyway"; build the framework; real numbers not "few PRs" (+ does maintainer time replace own-project time?); stewardship stays hypothesis-under-test.

## 2026-07-27 — Session 1 (cont. 2): Part 1 callbacks + Mike status check

Houfu approved the pitch direction ("Yes let me get some details later") — lived numbers deferred, pitch effectively locked on direction pending those details. He then asked what Part 1 material can still be brought in, and whether to check if the Mike situation has changed.

**What Claude did**: news-level Mike status check (repo stats unavailable — session network policy blocks GitHub for out-of-scope repos). Findings + callback assessment written to `research.md`. Headlines: Mike still actively shipping (July 16 release), license still AGPL-3.0 (no announced change despite May permissive-switch musings), mikeoss.com positioning around BYO-API-key/local control. The "roots" metrics (external merged PRs, fork→contributor conversion) need repo data — flagged for Houfu to run the Part 1 `gh` queries locally or for a draft-time session with access.

**Recommendation recorded**: Mike day-90 revisit is the strongest callback (works regardless of outcome); close the LegalQuants infrastructure loop (Part 1 measured the absence, lq-ai attempts the presence); lived author-vs-maintainer callback; skip Harvey re-litigation. Open narrative question for Houfu: did lq-ai predate Part 1 / any causal link?

**Still open (blocking pitch lock)**

- Lived numbers (PRs, response times, hours/week, how role came about; whether maintainer time displaces own-project time)
- Exact framing of the "Fable said no such tool exists" exchange
- Tag confirmation (proposed: OpenSource, LegalTech, Programming, ± AI)
- Part 2 framing confirmation + target publish date
