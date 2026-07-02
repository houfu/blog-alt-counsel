# 2026 Legal AI Predictions - Tracking Thread

**Published:** January 2026
**Six-Month Checkpoint:** July 2026
**Accountability Post:** December 2026
**Blog Post:** [My 2026 Legal AI Predictions (From the Trenches, Not the Boardroom)](https://www.alt-counsel.com/my-2026-legal-ai-predictions-from-the-trenches-not-the-boardroom/)

This file tracks my five predictions for 2026 throughout the year. Updates will be committed to this repository as they happen, providing a public audit trail of what actually occurred versus what I predicted.

## Honest note on this log (2026-07-02)

For the first six months I did **not** keep *this file* up to date. Most entries below are **reconstructed from what I actually published** between January and June 2026 — a real, timestamped audit trail even though it isn't the clean version I promised. One exception: I *did* keep a usage log at work (Prediction 3), so that number is real, not reconstructed. From July, I'm switching to a lower-friction cadence: a short entry appended here whenever a published post touches a prediction.

## The Five Predictions

### Prediction 1: Agentic AI Will Actually Work for Document Review

**The Prediction:** 2026 is the year I complete routine contract reviews (NDAs, standard service agreements, SaaS contracts) using only AI and agents—without opening Microsoft Word.

**Success Criteria (binary test for each contract):**
- If I hand-write anything in Word → Failed
- If I complete review with AI/agents only → Success

**Status:** FAIL at six-month checkpoint — but still holding out for December

**Updates:**
- *2026-04-22* — Claude for Word shipped. Genuinely strong, but the prediction was about *orchestration* (agents operate Word, human stays out), not tool availability. The wave of human-in-Word plugins is evidence *against* the bet, not for it: if AI lives inside Word, we never leave Word. See [Word on Claude](https://www.alt-counsel.com/word-on-claude-the-lawyers-greatest-legal-tech-tool-strikes-back/).
- *2026-06-11* — Agent stack through Harvey's LAB: a complete, correct memo scored zero because it was saved as raw markdown under a `.docx` name. See [My Agent Did the Legal Work](https://www.alt-counsel.com/my-agent-did-the-legal-work-the-benchmark-gave-it-zero/).
- **Six-month read:** The blocker isn't capability, it's *validation* — I still open Word to confirm the agent is reliable, so the human hasn't left the app. Counter-signal keeping hope alive: agent benchmarks + autonomous tools (Spellbook CLM, Copilot "coworker", Cowork-style environments) point toward the human-out orchestration I actually bet on. Fail now; holding out.

---

### Prediction 2: The Jagged Frontier Problem Won't Get Better

**The Prediction:** The problem isn't that AI fails at tasks—it's that we can't predict which tasks it will fail at. And that unpredictability won't improve in 2026.

**Success Criteria:** By year's end, a revised decision framework built from real failures, not theory. **(Deliverable RETIRED — see below.)**

**Status:** CONFIRMED — strongest call so far (originally flagged as most likely to fail)

**Updates:**
- *2026-03-04* — SkillsBench (7,308 agent runs): curated skills +16.2pp average, but 19% of tasks got *worse* (worst −39.3pp); self-generated skills −1.3pp ("models cannot reliably author the procedural knowledge they benefit from consuming"). Jaggedness at scale. See [What 7,308 Agent Runs Taught Me](https://www.alt-counsel.com/skillsbench-analysis/).
- *2026-06-11* — Benchmark run: lawyer-built stack lost overall (74.8% vs 84.7%) but *won* on extraction/comparison while collapsing on long-form drafting. Same tools, opposite results by task. "The jagged frontier vividly illustrated."
- **Six-month read:** Better models moved the frontier; they didn't remove it. **Retiring the promised decision framework:** a hand-waved rule is useless when the real variable is context (too many variables); the genuine lesson is *harness design*, not evaluation; and the only rigorous way to map the frontier — a synthetic-data benchmark — is still too costly for a resource-constrained practitioner to run (my run: 2 weeks, whole compute quota).

---

### Prediction 3: Real Usage Will Stay Under 20% Despite Adoption Claims

**The Prediction:** My actual meaningful AI usage across my legal work will stay under 20%.

**Success Criteria:** Honest monthly tracking of actual usage percentage.

**Status:** MISS — decisively, and in the opposite direction (originally flagged as MOST confident)

**Monthly Usage Data:**
- *Since May 2026 (real work log):* **AI involved in >50% of tasks**, on a strict "meaningful work" bar — reading, drafting, vetting, framing advice (not "asked a chatbot a question"). Predicted <20%; actual >50%.
- Benchmark vs market: [8am 2026](https://www.lawnext.com/2026/03/ai-adoption-among-legal-professionals-has-more-than-doubled-in-a-year-new-8am-report-finds-but-firms-lag-far-behind-individual-practitioners.html) puts genl-AI adoption at 69% (up from 31%); [Harvey](https://www.harvey.ai/blog/harvey-releases-study-on-how-mobile-and-ai-are-transforming-legal-work) 80% weekly; Legora 80%+ daily. My >50% is a *stricter* (task-level, meaningful) metric than their "used it this week," so it isn't apples-to-apples — but it lands in the same regime. In Jan I doubted the "adoption doubled to 52%" claim; I became a data point for it.
- **Six-month read:** The friction I bet on was real in 2024; by mid-2026 the tools climbed into the daily workflow and friction stopped being decisive. My most confident prediction is my most wrong.

---

### Prediction 4: The Hallucination Paradox Stays Unsolved (But Maybe Manageable)

**The Prediction:** You can't eliminate hallucinations without breaking what makes LLMs useful. Unsolved in 2026—but maybe manageable via structure (RAG-with-citations, two-pass review, locked templates).

**Success Criteria:** By year's end, know if any workflow makes hallucinations manageable.

**Status:** HALF WRONG — "unsolved" confirmed; "manageable" trending the WRONG way (originally flagged as most confident)

**Updates:**
- The clean three-workflow bake-off (citations / two-pass / locked templates) was **not** run. Didn't do the work.
- Real signal instead: the more I lean on **autonomous agents**, the *worse* reliability gets, not better. Each increment of autonomy widens the surface where things break — agents route around given tools, ship confident-but-quietly-wrong output, hand back finished work in unopenable files. See [My Agent Did the Legal Work](https://www.alt-counsel.com/my-agent-did-the-legal-work-the-benchmark-gave-it-zero/) and [OpenClaw Field Notes](https://www.alt-counsel.com/openclaw-field-notes-lawyer/).
- **Six-month read:** I aimed the paradox at the wrong target — worried about the invented citation; the sharper 2026 risk is the well-formed deliverable that's subtly broken/wrong from an agent doing more on its own. Structure *might* still tame it, but six months of harder agent use has moved me toward pessimism, not comfort.

---

### Prediction 5: Most AI Adoption Will Be Performative Theater (And Here's How to Spot It)

**The Prediction:** Most AI projects will be checkbox exercises. Real innovation happens in isolated pockets.

**Success Criteria:** Articulate the signals that separate real innovation from checkbox exercises.

**Status:** Leaning CONFIRMED, with texture (originally flagged as likely to fail). ASEAN-leapfrog sub-bet: **grading my way.** Signals framework: **still to ship.**

**Monthly Callouts:**
- *2026-02-16* — Budget 2026: real government money for legal AI (tax deductions, free tools, Champions programme). Adoption infrastructure, or keeping lawyers in the passenger seat? See [Budget 2026](https://www.alt-counsel.com/budget-2026-lawyers-ai-drivers-seat/).
- *2026-03-09* — Innovation signal (positive): submitted feedback on MinLaw's draft AI guide; two recommendations adopted near-verbatim in the final. Real, public iteration that changed something. See [From Draft to Final](https://www.alt-counsel.com/minlaw-ai-guide-draft-to-final/).
- *2026-05-11* — Innovation pockets thinner than announced: legal open source is "a federation of solo-author archipelagos," not a community. Matches "innovation in isolated pockets." See [Lawyers Are Building. Just Not On Each Other's Code](https://www.alt-counsel.com/lawyers-not-on-each-others-code/).
- **ASEAN-leapfrog sub-bet (bet AGAINST Salesforce):** region-wide leapfrog hasn't materialised — SEA still early, Singapore a standout while the rest lags advanced markets 2–3 years; North America still leads absolute maturity; APAC only fastest-*growing*. The barriers cited (54% no training, 43% no policy, governance/readiness lagging) are the non-legacy constraints I predicted. Twist: Singapore leaping while the rest lags IS my "isolated pockets" thesis. Caveat: "leapfrog" = grow-fastest (APAC yes) vs overtake-the-West (no, the version Salesforce sold). Sources: [8am 2026](https://www.lawnext.com/2026/03/ai-adoption-among-legal-professionals-has-more-than-doubled-in-a-year-new-8am-report-finds-but-firms-lag-far-behind-individual-practitioners.html), [FULCRUM SEA governance](https://fulcrum.sg/what-is-shaping-artificial-intelligence-ai-governance-policies-in-southeast-asia/).
- **Six-month read:** Holding. Theatre is loud; real iteration is rare and usually solo. The theatre-vs-innovation signals framework is the one deliverable I still intend to write (a few months left).

## How to Follow Along

**This Repository:**
- Watch this file for updates through the rest of 2026
- Six-month update post: `posts/2026-predictions/6-month-update.md`

**Blog:**
- Updates published as blog posts tagged #2026Predictions
- Subscribe at [alt-counsel.com](https://www.alt-counsel.com)

## Accountability Commitment

**What success looks like:** I don't chicken out when December 2026 arrives.

**If I do:** $500 to a legal aid organization in Singapore and public acknowledgment.

**December 2026 Scorecard will include:**
- What I predicted vs. what actually happened
- What I learned from being wrong
- The data I can honestly assemble (and an accounting of what I failed to track)

**Interim confidence flip (six-month checkpoint):** My January confidence was inverted. Most confident on #3 and #4 → both wrong (#3 decisively, opposite direction; #4 on the "manageable" half). Most likely to fail on #2 and #5 → both holding (#2 my strongest call). Only #1 tracks my January doubt (optimistic, still failing). Lesson: my confident predictions were the *comfortable* ones.

---

**Last Updated:** 2026-07-02 (six-month checkpoint, reconstructed)
**Next Update:** Per-post entries as predictions are touched; full scorecard December 2026

---

*This is a living document. All updates are timestamped and committed to this repository for transparency and accountability.*
