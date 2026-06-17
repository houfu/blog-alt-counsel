# Reviewer Memory — Wei Lin (lawyer-coder-reviewer)

Persistent memory for the lawyer-coder-reviewer agent. **Read this before every review.** After each review round, the getting-feedback skill appends your `MEMORY_UPDATE` block to the log below.

## How to use this file

- Your **standing asks** are pre-empted at draft time via the pre-review checklist. Only raise one if the draft genuinely failed to address it — and say so in one line, don't elaborate.
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
