# 2026 Legal AI Predictions - Tracking Thread

**Published:** January 2026
**Six-Month Checkpoint:** July 2026
**Accountability Post:** December 2026
**Blog Post:** [My 2026 Legal AI Predictions (From the Trenches, Not the Boardroom)](https://www.alt-counsel.com/my-2026-legal-ai-predictions-from-the-trenches-not-the-boardroom/)

This file tracks my five predictions for 2026 throughout the year. Updates will be committed to this repository as they happen, providing a public audit trail of what actually occurred versus what I predicted.

## Honest note on this log (2026-07-02)

For the first six months I did **not** keep this file up to date. The planned monthly usage percentages, contract-review spreadsheet, and decision log were not recorded contemporaneously. Rather than fabricate back-dated data, the entries below are **reconstructed from what I actually published** between January and June 2026 — a real, timestamped audit trail even though it isn't the clean quantitative one I promised. The lapse itself is discussed in the six-month update post. From July, I'm switching to a lower-friction cadence: a short entry appended here whenever a published post touches a prediction.

## The Five Predictions

### Prediction 1: Agentic AI Will Actually Work for Document Review

**The Prediction:** 2026 is the year I complete routine contract reviews (NDAs, standard service agreements, SaaS contracts) using only AI and agents—without opening Microsoft Word.

**Success Criteria (binary test for each contract):**
- If I hand-write anything in Word → Failed
- If I complete review with AI/agents only → Success

**Status:** Leaning MISS (not there yet) as of six-month checkpoint

**Updates:**
- *2026-04-22* — Claude for Word shipped (native sidebar, tracked changes, contract review as flagship). Genuinely strong, but the prediction was about workflow transformation, not tool availability. "We aren't there yet." Interface pulls you toward junior/clause-level work. See [Word on Claude](https://www.alt-counsel.com/word-on-claude-the-lawyers-greatest-legal-tech-tool-strikes-back/).
- *2026-06-11* — Ran an agent stack through Harvey's Legal Agent Benchmark (2,000+ tasks). A complete, correct memo scored zero because the agent saved raw markdown under a `.docx` name — grader couldn't open it. "What broke" = the delivery/DOCX gap flagged in January. See [My Agent Did the Legal Work](https://www.alt-counsel.com/my-agent-did-the-legal-work-the-benchmark-gave-it-zero/).
- **Six-month read:** Still opening Word. Leaning miss, but a more instructive miss than expected.

---

### Prediction 2: The Jagged Frontier Problem Won't Get Better

**The Prediction:** The problem isn't that AI fails at tasks—it's that we can't predict which tasks it will fail at. And that unpredictability won't improve in 2026.

**Success Criteria:** By year's end, a revised decision framework built from real failures, not theory.

**Status:** Leaning CONFIRMED — strongest call so far (originally flagged as most likely to fail)

**Updates:**
- *2026-03-04* — SkillsBench (7,308 agent runs): curated skills +16.2pp average, but 19% of tasks got *worse* (worst −39.3pp); self-generated skills −1.3pp ("models cannot reliably author the procedural knowledge they benefit from consuming"). Jaggedness at scale. See [What 7,308 Agent Runs Taught Me](https://www.alt-counsel.com/skillsbench-analysis/).
- *2026-06-11* — Benchmark run: lawyer-built stack lost overall (74.8% vs 84.7%) but *won* on extraction/comparison while collapsing on long-form drafting. Same tools, opposite results by task. "The jagged frontier vividly illustrated."
- **Six-month read:** Better models moved the frontier; they didn't remove it. Framework work still owed for December.

---

### Prediction 3: Real Usage Will Stay Under 20% Despite Adoption Claims

**The Prediction:** My actual meaningful AI usage across my legal work will stay under 20%.

**Success Criteria:** Honest monthly tracking of actual usage percentage.

**Status:** INCOMPLETE — not tracked (originally flagged as most confident)

**Monthly Usage Data:**
- *Not recorded Jan–Jun.* No honest contemporaneous number exists; I won't back-date one.
- *2026-04-29* — Public admission that nearly all my *writing/building* is now heavily AI-assisted end-to-end, and readers rewarded it (100 members, ~2x industry open rates). That's usage well above 20% — but it's the building/writing life, not the legal-deliverable life the prediction was about. The unmeasured gap between those two is likely the real finding. See [Three Years, 100 Members](https://www.alt-counsel.com/three-years-100-members-and-an-experiment-in-plain-sight/).
- **Six-month read:** The friction that stopped me tracking is itself evidence for the friction thesis. H2: measure the legal-deliverable number honestly, even if roughly.

---

### Prediction 4: The Hallucination Paradox Stays Unsolved (But Maybe Manageable)

**The Prediction:** You can't eliminate hallucinations without breaking what makes LLMs useful. Unsolved in 2026—but maybe manageable via structure (RAG-with-citations, two-pass review, locked templates).

**Success Criteria:** By year's end, know if any workflow makes hallucinations manageable.

**Status:** PARTIAL — failure surface shifted from fake citations to packaging/format

**Updates:**
- The clean three-workflow bake-off (citations / two-pass / locked templates) has **not** been run yet.
- *2026-06-11* — Under an all-pass benchmark grader, what sank agents wasn't fabricated law — it was confident but broken *packaging* (broken files, leaked format tokens, placeholder stubs shipped as final). Structure helps; doesn't solve. Revised sense of *what* needs managing.
- **Six-month read:** Thesis holds; the sharpest practical risk is well-formed output that's quietly wrong/broken, not the obvious fake cite.

---

### Prediction 5: Most AI Adoption Will Be Performative Theater (And Here's How to Spot It)

**The Prediction:** Most AI projects will be checkbox exercises. Real innovation happens in isolated pockets.

**Success Criteria:** Articulate the signals that separate real innovation from checkbox exercises.

**Status:** Leaning CONFIRMED, with texture (originally flagged as likely to fail)

**Monthly Callouts:**
- *2026-02-16* — Budget 2026: real government money for legal AI (tax deductions, free tools, Champions programme). Adoption infrastructure, or keeping lawyers in the passenger seat? See [Budget 2026](https://www.alt-counsel.com/budget-2026-lawyers-ai-drivers-seat/).
- *2026-03-09* — Innovation signal (positive): submitted feedback on MinLaw's draft AI guide; two recommendations adopted near-verbatim in the final. Real, public iteration that changed something. See [From Draft to Final](https://www.alt-counsel.com/minlaw-ai-guide-draft-to-final/).
- *2026-05-11* — Innovation pockets thinner than announced: legal open source is "a federation of solo-author archipelagos," not a community. Matches "innovation in isolated pockets." See [Lawyers Are Building. Just Not On Each Other's Code](https://www.alt-counsel.com/lawyers-not-on-each-others-code/).
- **Six-month read:** Holding. Theatre is loud; real iteration is rare and usually solo.

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

**Interim confidence flip (six-month checkpoint):** Originally most confident on #3 and #4, most likely to fail on #2 and #5. As of July: #2 is the strongest call, #3 is the one I undercut by not measuring it.

---

**Last Updated:** 2026-07-02 (six-month checkpoint, reconstructed)
**Next Update:** Per-post entries as predictions are touched; full scorecard December 2026

---

*This is a living document. All updates are timestamped and committed to this repository for transparency and accountability.*
