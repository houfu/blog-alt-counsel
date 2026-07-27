# Pitch: Legal OSS Maintainer (working title)

**Status: DRAFT v2 — Wei Lin pitch-stage consult done (verdict: yes, write it). Pending Houfu's approval + lived numbers.**

## Title

**"I Said Lawyers Don't Work on Each Other's Code. Then I Started."** (Wei Lin's pick: present-tense dramatic irony, rewards Part 1 readers without requiring them.)

Rejected: "One Month Maintaining Someone Else's Code" (status report, not a hook); "The Maintainer, Not the Genius" (states an unearned settled identity — keep as subhead/pull-quote candidate only).

## Pitch (draft v2, ~180 words)

In May I published data showing lawyer-coders don't work on each other's code — and admitted my last merged PR into someone else's legal-OSS repo was a docs typo from 2019. At the end of June, I crossed my own line: I started helping maintain lq-ai, the LegalQuants community project. One month in, here's the uncomfortable symmetry: as a contributor, I don't know if my code is good. As a maintainer, I don't know if their code is good. Nobody in the loop is sure. I built an agent to help — after being told no open-source code-review tool exists that serves a non-technical audience — and it hasn't rescued us: few PRs are landing `[UNVERIFIED — exact counts]`, response times are below ideal, and there's no release timeline. This isn't a success story, and I'm writing it anyway, because the honest middle is where legal open source actually lives. What I think will matter long-term isn't heroics; it's foundations — governance, review culture, the unglamorous stewardship I now suspect is my real future in open source. Results to be seen.

## Emotional core (from Houfu, 2026-07-27)

Verbatim: "I don't think this is going to be a plain success story. This project is hard to maintain both from a contributor (don't know if my code is good) and a maintainer story (don't know if this code is good). I wrote the agent to help but fable claims that there is no open source code review agent that can help a non technical audience. So very few PRs are coming through, response times are still below ideal and there has been no release timeline. I think the background and foundations including the governance will help long term but results will have to be seen."

## Open questions for Houfu (blocking)

1. ~~Emotional core~~ — ✅ answered 2026-07-27 (double uncertainty + honest non-success metrics; see above)
2. **Lived numbers** `[UNVERIFIED]` — PRs reviewed/merged since end June; typical response time; hours/week; how the maintainer role came about (asked? volunteered?).
2a. **The Fable claim** — clarify the exact exchange: Houfu asked Fable (the AI model) and it said no open-source code-review agent exists that can help a non-technical audience? Get the framing right before quoting it in the draft.
3. **lq-ai facts** `[UNVERIFIED]` — what lq-ai does; who else maintains it; Houfu's formal role. (GitHub access to legalquants/lq-ai and houfu/lq-ai-maintainer is blocked in this session — numbers must come from Houfu or a later session with repo access.)
4. **State of lq-ai-maintainer** — "tried to develop" suggests incomplete/abandoned/evolving. Which is it? (This could be the post's best vulnerable beat.)
5. **Scope decision** — frame explicitly as Part 2 of "Lawyers Are Building. Just Not On Each Other's Code."? (Recommended: yes.) Note: Part 2 as promised (docassemble/courtlistener lessons) may be descoped in favour of this lived experience — decide explicitly.
6. **Timeline** — any target publish date or external hook (talk, LegalQuants milestone)?

## Interrogation (Step 3.6, provisional)

1. **Test the diagnosis.** Claim: "my long-term future is mentoring/stewarding, not authoring." Probe: one month in is honeymoon territory — is this a finding or a hypothesis? Recommendation: the post should frame it as a hypothesis being tested in public ("What I'm still figuring out"), which is more honest and more on-voice than a conversion narrative.
2. **Differentiation.** "Another contributing-to-OSS post"? No — differentiators: (a) the author published the data diagnosing the problem first, then acted on it; (b) it's about *maintaining* someone else's code as a lawyer, not authoring; (c) AI-assisted maintainer tooling (lq-ai-maintainer) is a fresh, timely angle; (d) the sustainability-stewardship vision including law-firm projects.
3. **Framing risk.** Two live risks: (a) "learning to maintain other people's code" could read as commentary on lq-ai's code quality or its authors — keep the lens on Houfu's own limitations (Part 1 already established his frustration reading others' code is his wall, not theirs); (b) "guiding law firm projects to sustainability" could read as a dig at law-firm OSS (Harvey adjacency from Part 1). Needs a deliberate generosity of framing; flag at draft review.

## Prior work (must-link)

- `lawyers-not-on-each-others-code` — Part 1; the promise this post fulfils
- `the-unexpected-joys-of-open-source` — the redlines maintainer experience baseline
- `tool-vs-infrastructure-mindset` — author-vs-maintainer distinction groundwork

## Suggested tags (pending tag-intent confirmation)

- OpenSource (technical — the core subject; used on Part 1)
- LegalTech (core topic)
- Programming (core topic)
- AI (only if lq-ai-maintainer/AI-assisted maintenance becomes a major thread)

## Wei Lin pitch-stage consult (2026-07-27) — carry into draft

Verdict on "would my audience find a non-success story interesting?": **yes, unambiguously — "the mess is the post."** Don't wait for lq-ai to "work" before publishing.

Draft-stage obligations from his catches:

1. **Own the Part 1 pivot in one early sentence.** Part 1 promised "what works" (docassemble/courtlistener). This post delivers "what's not working yet." Say so plainly — e.g. "I'd planned to write about what works. One month into maintaining lq-ai, I don't have that post yet." — rather than pretending this was always the plan.
2. **Scene treatment for lq-ai-maintainer.** The built-the-agent-and-the-problem-persists beat is the sharpest builder-identity moment; don't leave it as a subordinate clause.
3. **Protect the load-bearing line:** "This isn't a success story, and I'm writing it anyway." Candidate opening or closing line; do not cut.
4. **Build the framework** ("what maintaining someone else's code actually asks of you") so readers leave with something actionable, not just Houfu's unresolved feeling.
5. **Real numbers, not "few PRs."** Also answer: is maintainer time *replacing* Houfu's own project time? That trade-off resonates.
6. **Keep stewardship as hypothesis-under-test.** Certainty after one month reads as humble-bragging.

## Format

Blog post, Lane 2 "Learning in Public" template. Target ~9 min read. Opens feeling-first with the lq-ai moment; "neither is wrong" move on author-dream vs maintainer-future; framework candidate: what maintaining someone else's code actually asks of you; closes on unresolved question (one month in, will this hold?).
