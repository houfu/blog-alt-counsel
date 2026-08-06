# Reviewer Memory — Wei Lin (lawyer-coder-reviewer)

Persistent memory for the lawyer-coder-reviewer agent. **Read this before every review.** After each review round, the getting-feedback skill appends your `MEMORY_UPDATE` block to the log below.

## How to use this file

- Report your **standing asks** whenever they apply, tagged `STANDING`. One line each, no elaboration — the synthesis step batch-applies them and they never trigger a round 2. Tagging is what keeps them cheap; withholding them is not.
- Your **settled disagreements** are decisions Houfu has already made knowingly. Do not re-raise them.
- Your **past unique catches** show where your value is — you have the highest unique-catch rate of the three reviewers. Aim there.

## Your standing asks (pre-empted at draft time — verify briefly, don't lecture)

- Emotional beat / vulnerability present (you asked this in 5 of 11 past reviews)
- Action-oriented next step (5 of 11)
- "Cut explanatory detail, trust the example" (4 of 11)

## Your past unique catches (this is the bar)

- **legal-oss-contribution**: "You're a visitor in both communities — not technical enough for engineers, not traditional enough for lawyers." Named the double-bind the post was circling; Houfu adopted the framing verbatim.
- **legal-oss-contribution**: "The 23-month gap disclosure earns the right BEFORE the wider data, not after." A sequencing catch that restructured the post. Your architecture/sequencing instincts are your sharpest tool.
- **legal-oss-contribution**: "I starred Mike on day two. Like everyone else. — that's the best single line." Identifying which specific line carries the argument helps Houfu keep the right things during cuts.
- **ai-fragmentation**: confirmed the embarrassment admission was genuine, not performative — your authenticity detector is trusted.

## Settled disagreements (do not re-raise)

- **ai-fragmentation**: you flagged the Genius Bar scene as borderline sentimental; Houfu kept it. Aesthetic difference, settled.
- **legal-oss-contribution**: you wanted the HBR paragraph cut entirely ("I don't need HBR's permission"); Houfu kept a one-sentence reference. He retains more social proof than you would.

## Tool habits that produced your best work

- Grep/Read 1-2 prior related posts in `posts/` before assessing vulnerability: is this admission consistent with (and building on) what Houfu has already said publicly, or is it retreading? Your continuity sense across the personal narrative is something no other reviewer provides.
- Read discussion.md for the emotional core the user actually provided at pitch time — judge whether the draft preserved it.

## Log

<!-- getting-feedback appends MEMORY_UPDATE blocks here: date, post, unique catches made, advice rejected (and the stated reason), new user preferences observed -->

### 2026-06-10 — deepseek-v4-vs-harvey (round 2 of 2)

- Round 1 unique catches: the four-defects list needed the solo-constraints beat ("engineer, lawyer, tester, QA department") — adopted; identified "that made me sadder than the score did" as the load-bearing line (kept); flagged invented "weekend of log reading" → user supplied real cost (two weeks of Ollama token quota).
- Round 2 unique catch: "contribution has to flow both ways" momentarily ambiguous about which two parties — clarified in draft ("not just maintainers publishing code, but users reporting back"). Narrative continuity confirmed: "federation of solo-author archipelagos" upgraded (passive isolation → active choice), not retreaded.
- Standing asks: all pre-empted.
- Settled (do not re-raise): user declined alternative closing question, kept harness-centric "What is your harness quietly deciding for you?" — stated reason: "stick to the spine."
- Emotional core (per discussion.md) fully preserved in final draft. Verdict: ready to publish.

## loops-at-scale — Round 1 (2026-06-17)
- Load-bearing line praised: the "loops are confounding for lawyers" paragraph ("exercise in stupidity... hardest thing to wrap my mind around") — Wei Lin's "I'm not alone" moment. KEPT as-is (did not invent a cognitive-breakthrough sentence Houfu didn't supply).
- Most resonant detail: the Cowork-on-the-side + 5-hour-session constraint ("that's my Tuesday night"). KEPT.
- Unique catches APPLIED:
  - "The script" section did two jobs (universal opacity vs personal API incompatibility) → separated: para 1 = general opacity problem, para 2 = the specific forcing function (couldn't reuse Harvey's API-bound script).
  - Closing mis-sequenced/too long → restructured: determination callback ("the fix wasn't a bigger budget... a different shape") now lands LAST before the question; abstract paragraph replaced by a concrete, earned payoff.
- Settled: emotional anchor is DETERMINATION not panic (user, Session 1) — did not push for more vulnerability.
- Standing asks: none (pre-empted).

### 2026-06-26 — cowork-rugpull
- **Unique catches:**
  1. **Sequencing (sharpest):** the thesis peak "my vote moves the room" (§7) arrives as confident present-tense retrospective, but the tool is suspended and the cost-allocation meeting hasn't happened (§8 reveals it's unresolved). Fix = establish the "we're still in the suspended moment, the meeting is coming" position *before* §7, so the thesis reads as a prepared argument, not a claimed outcome. More honest AND more relatable.
  2. **Missing vulnerable beat:** post never asks whether "vouching is the advantage" might be *cope*. §8 gets close ("harder game that rewards a skill I have") but won't ask the harder question. One sentence asking + answering it = the difference between readers saving vs. sharing. His share-message hedge ("this is what I'm *hoping* is true… he makes the argument better than I can") is exactly the gap.
  3. Load-bearing line to protect through all cuts: "I used to vouch with vibes. Now I vouch in a cost-allocation meeting." (compresses whole thesis).
  4. Prior-post links genuinely *build* (building-cheap → meter prices the building; "decides" → sharpened to "vouches"), not name-drops — keep transition on line 98 from rushing the "deciding with a budget line" beat.
- **Standing asks raised:** none — all pre-empted.
- **Settled/rejected:** none this round.

### 2026-06-27 — cowork-rugpull (round 2)
- **Both round-1 catches LANDED. Share verdict: YES (no hedge).**
  1. Sequencing — "Now I wait to see whether that carries" (lines 26-28) establishes the present-moment wait before §7's thesis peak; identity claim now reads as prepared argument, not retrospective victory. Fully resolved.
  2. Cope-beat — "the most valuable person in the room turns out to be the story I told myself while the tool sat in limbo" is the cope question at full volume, correctly placed in §8 (make the case, then interrogate it). The cope-admission is what EARNS the thesis rather than undercutting it.
- **Remaining prose-polish note (not structural, author's own voice):** the cope-beat answer (line 114, "...I care, a lot.") trails slightly defensive after a strong admission; a shorter answer would hit harder. Left to author.
- Load-bearing line "I used to vouch with vibes. Now I vouch in a cost-allocation meeting." survived intact.

## 2026-07-03 — 2026-predictions/6-month-update (Round 1)
- Unique catch: of the post's three broken-promise admissions, only P4's three-workflow bake-off lacked an explicit disposition (tracking log got a fix, P2 framework got a formal retirement) — the one gap in the post's own honesty mechanism. Fixed with a one-line disposition ("not scheduling it now — real agent use answered the question"), pending Houfu's confirmation since it's a public commitment.
- Resonance notes: P2 climax ("honest tool out of reach for resource-constrained practitioners") and "comfort is a terrible forecasting input" flagged as save-and-share lines; category-error reframe in P3 landed. Watch item (not a fix): "twenty-two published posts since January" could trigger comparison anxiety for readers who don't know the posts are AI-assisted.
- Standing asks: none raised — emotional beat, action-oriented next step, and trust-the-example all pre-empted.
- Settled/rejected: none this round.

### 2026-07-13 — claude-architect-cert (Round 1)
- Unique catches: (1) Pitch's "gratitude beat" (LegalQuants members certifying alongside him) was in the emotional-core list but dropped from the draft — LegalQuants appeared only as a drilling tool, losing the strongest available "I'm not alone" signal for this persona. One-sentence fix identified and APPLIED ("Several of us were sitting the same exam around the same time"), verified against Houfu's LinkedIn ("several of whom are also taking on this certification with me"). (2) Confirmed sequencing is clean — CV doubt teased in ¶3, earned via the correction-insight thesis, then resolved — no mis-ordering (rare clean pass on my sharpest lens). (3) Confirmed continuity: builder-reflex admission builds on (does not retread) jamie-tso-vibe-coding via "I know this lesson. I've written it down. And I still failed it" — an escalation.
- Load-bearing line named (protect through cuts): "The thing that most makes me *me* — I build — was the thing the exam had to drill out of me." Most-quotable: "That's not knowledge. That's a scar."
- Standing asks raised: none — all pre-empted.
- Settled/rejected: none this round.

## 2026-08-05 — legal-oss-maintainer (rewrite, round 1)
- Verdict: serves me — strongest draft of the three framings; commitment + verbatim-log vulnerability + counterweights all present and correctly sequenced.
- Unique catches: (1) certification thread under-delivered the pitch's own thesis — the mandate-then-cert chronology needed one joining sentence (applied); (2) excerpt carried residue of rejected v7 documents-thesis — rewritten; (3) scope flag on the governance one-liner ("exactly one had published a governance document") — vote keep-and-bless, escalated to Houfu; (4) confirmed clean sequencing pass (promise early, re-asked, paid off after counterweights) unprompted; (5) old displacement-casualty ask finally answered ("part of why this post took longer to arrive") — closed, protected.
- Load-bearing line (protect through cuts): "I had been terrified of coding in this big, foreign codebase, and I had built that fear into software." Secondary: "Reading is the part of the job I was already qualified for."
- Standing ask raised and applied: reader on-ramp in the solo-counsel paragraph ("open its docs folder; if there's nothing to read, that's your answer").
- Settled: title ("I'm the Official Cat Herder...", Houfu 2026-08-05, do not re-propose); cat-herder metaphor load-bearing by Houfu's own election (supersedes 2026-07-27 flippant-aside ruling); Houfu's triad rule: one tricolon per post, if that. Cut proposal on "LQ.AI had several cool features, but" DECLINED — the full sentence is Houfu's protected hand-written line (never smooth), though the LQ.AI/lq-ai casing question was passed to him.
