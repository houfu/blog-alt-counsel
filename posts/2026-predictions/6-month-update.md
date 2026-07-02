---
title: "Half-Time on My 2026 Predictions: My Confidence Was Backwards"
slug: 2026-predictions-six-month-update
tags: [AI, LegalTech, Singapore, 2026Predictions]
status: draft
excerpt: "In January I ranked how confident I was in each of five predictions. Six months in, that ranking is almost perfectly inverted — the two I was surest of are my worst calls, and the prediction I nearly waved away as too abstract became the story of the year."
---

In January I made five predictions about legal AI, gave each a success criterion, and did one thing most prediction posts skip: I ranked my own confidence. Two I was *most confident* about. Two I flagged as *most likely to fail*.

Six months in, that ranking is almost perfectly inverted. The two I was surest of are my worst calls. One of the two I expected to fail became the story of the year.

That inversion — not any single grade — is what this halfway post is really about. Before the scorecard, one confession about the process and one correction to my own first draft.

The confession: I promised to track all of this publicly, month by month, in a repo anyone could watch. For most of it I leaned on my own published posts instead of a clean log — twenty-two since January, which turn out to be a serviceable audit trail even when I wasn't keeping the formal one.

The correction: an earlier version of this post said one prediction was "untracked, can't grade." That was laziness. I *did* keep the log that mattered. The number exists. It's just not the number I wanted — so let's open there.

## The confession: Prediction 3, where I was surest and most wrong

**The bet:** meaningful AI use across my legal work would stay **under 20%**. Friction is real, I said; the adoption headlines were inflated.

**Reality: north of 50%.**

My work log since May puts AI in more than half my tasks, on a strict bar for "meaningful" — not "asked a chatbot a question," but AI doing substantive work I'd otherwise do myself: reading, drafting, vetting, framing advice. On that demanding definition it still clears 50%. I didn't just miss. I missed in the *opposite direction*, on the prediction I'd have bet the house on.

But here's the part worth more than the mea culpa. Go back to how I argued it. I wrote *"Claims ≠ reality"* and set the industry's "adoption doubled to 52%" against my own "under 20%." Those were never the same axis. **52% was an adoption number — how many lawyers touch AI at all. My 20% was a usage-intensity number — how much of *my* work AI does.** You can be entirely right that vendor adoption claims are hype *and* personally run AI in half your tasks. The two don't contradict. I collapsed two different quantities into one bet, and it wasn't my arithmetic that lost — it was the friction thesis. I assumed workflow friction, client expectations, and post–October-3 caution would hold real usage down. By mid-2026 the tools had simply climbed inside the daily workflow, and the friction stopped being decisive.

I'll be honest about why this is the *confession* and not the headline: it continues a trend that was already nascent last year. Being wrong that AI usage would stay low, in 2026, is the least surprising way to be wrong. The [8am 2026 report](https://www.lawnext.com/2026/03/ai-adoption-among-legal-professionals-has-more-than-doubled-in-a-year-new-8am-report-finds-but-firms-lag-far-behind-individual-practitioners.html) has adoption at 69%; [Harvey](https://www.harvey.ai/blog/harvey-releases-study-on-how-mobile-and-ai-are-transforming-legal-work) reports 80% weekly usage. I doubted the trend and then became a data point for it. Humbling — but not the interesting story.

## The idea I lived with all year: Prediction 1, human out of Word

**The bet:** by year's end I'd complete routine contract reviews using only AI and agents, never opening Word.

**Reality: fail at half-time — and I've thought about this one more than any of the others.**

The prediction was never that a good tool would *exist*. It was about *orchestration*: agents operating the document while the human stays out of it entirely. Hold that definition, and the year's flood of Word plugins — Claude for Word the loudest of them — is not evidence *for* me. It's evidence *against*. If the industry's answer is "put the AI inside Word so the lawyer can drive it from a sidebar," then we never leave Word. That's the opposite of what I bet on.

https://www.alt-counsel.com/word-on-claude-the-lawyers-greatest-legal-tech-tool-strikes-back/

What keeps the bet breathing is the other direction of travel. The agent benchmarks suggest the do-it-without-the-human vision might genuinely be in reach, and autonomous tools like Spellbook's new CLM point that way. I always expected the real work to happen somewhere like Cowork, not Word — and Microsoft's Copilot "coworker" is a real step on that axis.

The wall I keep hitting isn't capability. It's *validation*. Even when an agent does the review, I open Word to check it — because I don't yet trust it enough not to. Until I can validate reliability without opening the file myself, the human hasn't actually left the app. So: fail. But this is the one I suspect I'll be arguing about all the way to December, and I'm not conceding it.

## The story of the year: Prediction 2, the jagged frontier

**The bet:** the problem was never that AI fails — it's that we can't predict *which* tasks it'll fail at, and that unpredictability wouldn't improve in 2026. I flagged this as one of my two *most likely to fail*, because it was the hardest to pin down.

**Reality: it's the prediction the evidence kept confirming — and I did not expect it to feature this heavily.**

It kept showing up whether I invited it or not. In February, SkillsBench put numbers on it: across 7,308 agent runs, curated skills helped by 16 points on average — but 19% of tasks got *worse*, and models proved unable to write the very skills they benefit from using.

https://www.alt-counsel.com/skillsbench-analysis/

Then my own benchmark run said it again from the inside: my lawyer-built stack lost overall but won on extraction and comparison while collapsing on long-form drafting. Same tools, opposite results, no reliable way to know in advance. Strong here, weak one task over.

https://www.alt-counsel.com/my-agent-did-the-legal-work-the-benchmark-gave-it-zero/

Here's where I owe you a correction on the *deliverable*, and I'd rather say it plainly than quietly drop it. In January I promised a "revised decision framework" — a way to know when to trust AI. **I'm retiring that promise.** A hand-waved rule ("use AI for low-stakes, catchable tasks") is useless when the real variable is context, and there are too many variables to fold into a checklist. The genuine lesson turned out to be about *harness design*, not evaluation — the reliability lives in how you build the agent's environment, not a decision tree you consult beforehand.

And the truly uncomfortable finding sits under the confirmed prediction. The only rigorous way to actually map the frontier is a benchmark on synthetic data. I ran one. It took two weeks and burned my entire compute quota. Which means the honest tool for navigating the jagged frontier is *out of reach for exactly the resource-constrained practitioners this blog is written for*. Being right about the frontier bought me nothing I can hand to a reader. That's a better thing to say than a framework I'd have to fake — and it's why this, not the big miss, is the story of the year.

## Prediction 4: half right, on the wrong half

**The bet:** hallucinations stay unsolved in 2026, but maybe become *manageable* through structure — RAG with citations, two-pass review, locked templates. Another one I was *most confident* about.

**Reality: the "unsolved" half holds. The "manageable" half is trending the wrong way — and I never ran the experiment.**

I'd love to report clean results from the three-workflow bake-off. I didn't do the work. What I have instead is less comfortable: the more I lean on autonomous agents, the *worse* the reliability problem gets, not the better. Every increment of autonomy widens the surface where things break — agents route around the tools I give them, ship confident output that's quietly wrong, and hand back finished legal work in a file nobody can open.

I aimed the paradox at the wrong target. I worried about the invented citation. The sharper 2026 risk is the well-formed deliverable that's subtly broken or subtly wrong, produced by an agent doing more and more on its own. Structure might still tame that — but six months of harder agent use has moved me toward pessimism, not comfort.

## Prediction 5: holding, with a twist

**The bet:** most AI adoption would be checkbox theatre; real innovation would live in isolated pockets. I also bet *against* Salesforce's claim that ASEAN would leapfrog the West. Another flagged-to-fail.

**Reality: holding.**

The innovation pockets were thinner than the press releases suggested — legal open source isn't a community, it's "a federation of solo-author archipelagos."

https://www.alt-counsel.com/lawyers-not-on-each-others-code/

I caught a genuine innovation signal close to home, though: I submitted feedback on MinLaw's draft AI guide and two recommendations landed in the final, near-verbatim. Real, public iteration that changed something.

https://www.alt-counsel.com/minlaw-ai-guide-draft-to-final/

On ASEAN: the region-wide leapfrog hasn't materialised. Southeast Asia is still early, Singapore a clear standout while the rest of the region trails advanced markets by two to three years ([regional picture](https://fulcrum.sg/what-is-shaping-artificial-intelligence-ai-governance-policies-in-southeast-asia/)). The barriers cited — no training at 54% of firms, no policy at 43% — are exactly the non-legacy constraints I said would matter more than being "unburdened by old systems." The twist I didn't see: Singapore leaping while the rest of ASEAN lags *is my own thesis in miniature* — innovation in isolated pockets. One deliverable here I *do* still intend to ship: the theatre-versus-innovation signals framework. Unlike the jagged-frontier one, I think that's real and tractable, and I've a few months to write it.

## The scorecard, and what the inversion taught me

| # | Prediction | January confidence | Half-time verdict |
|---|---|---|---|
| 1 | Doc review, human out of Word | Optimistic (stretch) | Fail — but still fighting |
| 2 | Jagged frontier won't improve | Most likely to fail | Confirmed — the story of the year |
| 3 | Usage stays under 20% | **Most confident** | Wrong, in the opposite direction |
| 4 | Hallucination manageable | **Most confident** | Half wrong; trending worse |
| 5 | Mostly theatre | Most likely to fail | Holding |

Read the confidence column against the verdict column. I was calibrated backwards. The predictions I'd have bet the house on are the two the year most thoroughly refuted; the ones I hedged as too hard to call are the ones that held.

I think I know why, and it isn't flattering. My confident predictions were the *comfortable* ones — they matched how I wanted 2026 to go: friction protecting us from over-reliance, structure taming the risk. My pessimistic predictions were the ones I'd already tested against reality and expected to lose. Comfort is a terrible forecasting input. The frontier doesn't care what would be convenient for me.

## What happens now

The tracking failure was real, so here's the fix and not the excuse. I've back-filled the repo with what these six months actually showed, and for the rest of the year I'm dropping the fantasy of a perfect monthly spreadsheet for something I'll sustain: a short entry appended whenever a post touches a prediction. Lower friction, same audit trail, public in the commits where you can check it.

Two deliverables stand where I left them: the theatre-versus-innovation framework (Prediction 5) I intend to ship; the jagged-frontier decision framework (Prediction 2) I'm formally retiring, and I've told you why.

The $500 stake stands. The December scorecard stands. If anything, being this wrong at half-time makes December more interesting — the story was never going to be "did he call it." It's watching a guy find out his instincts were inside-out, in public, with the receipts.

See you in December with the data. All of it this time.
