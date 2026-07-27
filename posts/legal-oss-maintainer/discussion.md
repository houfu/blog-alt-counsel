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
