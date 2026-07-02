---
title: "Half-Time on My 2026 Predictions: The Ones I Was Surest Of Are the Ones I Blew"
slug: 2026-predictions-six-month-update
tags: [AI, LegalTech, Singapore, 2026Predictions]
status: draft
excerpt: "In January I made five predictions and ranked how confident I was in each. Six months in, that ranking is almost perfectly inverted: the two I was surest of are my worst calls, and the two I expected to fail are holding. Here's the mid-year reckoning."
---

In January I made five predictions about legal AI, gave each a success criterion, and did one more thing most prediction posts skip: I ranked my own confidence. I said I was *most confident* about two of them and *most likely to fail* at two others.

Six months in, that ranking is almost perfectly inverted.

The two I was surest of are my worst calls. The two I flagged as most likely to fail are the ones holding up. That inversion is the real story of this halfway post — more than any individual grade, it's a lesson about how badly I read my own certainty.

Before the scorecard, one confession and one correction.

The confession: I promised to track all of this publicly, month by month, in a repo anyone could watch. For the reconstructed pieces I leaned on my own published posts instead of a clean log — twenty-two of them since January, which turn out to be a decent audit trail even when I wasn't keeping the formal one.

The correction to my own last draft of this post: I almost wrote that one prediction was "untracked, can't grade." That was me being lazy. I *did* keep a log at work. The number exists. It's just not the number I wanted.

Let's start there.

## Where I was overconfident

### Prediction 3: "Real usage will stay under 20%" — my most confident call, and my most wrong

**The bet:** When I honestly tracked meaningful AI use across my legal work, it would stay under 20% of my total. Friction is real, I said. Claims of surging adoption were inflated.

**Reality: north of 50%.**

My work log since May puts AI in more than half my tasks — and I'm using a strict bar for "meaningful." Not "asked a chatbot a question." I mean AI doing substantive work I'd otherwise have done myself: reading, drafting, vetting, framing advice. On that demanding definition, it still clears 50%.

I didn't just miss. I missed in the *opposite direction*, on the prediction I was proudest of.

And it gets worse, because in January I was sniffy about the industry's "adoption doubled to 52%" claim. The 2026 numbers came in higher — the [8am 2026 Legal Industry Report](https://www.lawnext.com/2026/03/ai-adoption-among-legal-professionals-has-more-than-doubled-in-a-year-new-8am-report-finds-but-firms-lag-far-behind-individual-practitioners.html) puts general-AI adoption among lawyers at 69%, more than double a year ago. Harvey reports [80% weekly usage](https://www.harvey.ai/blog/harvey-releases-study-on-how-mobile-and-ai-are-transforming-legal-work) across its base; Legora cites 80%+ daily usage among its customers. I doubted the trend, and then I became a data point for it.

One honest caveat, because this blog lives on them: those vendor numbers measure "used it this week," and mine measures "did meaningful work on this task." My >50% is a *stricter* test than their 80% — which, if anything, makes my miss cleaner, not softer. The friction I bet on was real in 2024. By mid-2026 the tools had climbed inside the daily workflow and the friction stopped being decisive.

### Prediction 4: "The hallucination paradox stays unsolved, but maybe manageable" — half right, on the wrong half

**The bet:** You can't kill hallucinations without killing what makes LLMs useful. Unsolved in 2026 — but maybe made *manageable* through structure: RAG with citations, two-pass review, locked templates. I named three workflows I'd test.

**Reality: the "unsolved" half holds. The "manageable" half is trending the wrong way — and I never ran the experiment.**

I'd love to report clean results from the three-workflow bake-off. I didn't do the work. What I have instead is more honest and less comfortable: the more I lean on autonomous agents, the *worse* the reliability problem gets, not the better.

That's the opposite of "manageable." Every increment of autonomy widens the surface where things break — and they break in ways that are hard to see. The agents route around the tools I give them, ship confident output that's quietly wrong, and — my favourite failure of the year — hand back finished legal work in a file nobody can open.

https://www.alt-counsel.com/my-agent-did-the-legal-work-the-benchmark-gave-it-zero/

The paradox I described was real; I just aimed it at the wrong target. I worried about the invented case citation. The sharper 2026 risk is the well-formed deliverable that's subtly broken or subtly wrong, produced by an agent doing more and more on its own. Structure might still tame that. But six months of using these agents harder has moved me toward pessimism, not comfort.

## Where I was too pessimistic

### Prediction 2: "The jagged frontier won't get better" — my strongest call, from my weakest hand

**The bet:** The problem was never that AI fails — it's that we can't predict *which* tasks it'll fail at, and that unpredictability wouldn't improve in 2026. I flagged this as one of my two most likely to fail, because it was the hardest to pin down.

**Reality: it's the prediction the evidence keeps confirming.**

In February, SkillsBench put numbers on it: across 7,308 agent runs, curated skills helped by 16 points on average — but 19% of tasks got *worse*, and models proved unable to write the very skills they benefit from using.

https://www.alt-counsel.com/skillsbench-analysis/

Then my own benchmark run said the same thing from the inside: my lawyer-built stack lost overall but won on extraction and comparison while collapsing on long-form drafting. Same tools, opposite results, no reliable way to know in advance. Strong here, weak one task over. The jagged frontier, vividly illustrated.

Here's where I owe you a correction on the *deliverable*, though. In January I promised a "revised decision framework" — a way to know when to trust AI. I no longer think I'll ship that, and I want to be honest about why rather than quietly drop it.

A hand-waved framework — "use AI for low-stakes, catchable tasks" — is useless when the real variable is context, and there are too many variables to reduce to a checklist. The genuine lesson turned out to be about *harness design*, not evaluation: the reliability lives in how you build the agent's environment, not in a decision tree you consult beforehand. And the only rigorous way to actually map the frontier is a benchmark on synthetic data — which I did, and which is *still too expensive and too hard for a resource-constrained practitioner to run on their own*. My run took two weeks and burned my entire compute quota.

So the uncomfortable finding under the confirmed prediction: the frontier is real, it's jagged, and the tool that maps it honestly is out of reach for exactly the readers this blog is written for. That's a better thing to say than a framework I'd have to fake.

### Prediction 5: "Most adoption is performative theatre" — holding, with a twist

**The bet:** Most AI projects would be checkbox exercises; real innovation would live in isolated pockets. I also bet *against* Salesforce's claim that ASEAN would leapfrog the West on adoption. Another one I flagged as likely to fail — I was learning to spot theatre from scratch.

**Reality: holding.**

When I went looking for the innovation pockets, they were thinner than the press releases suggested — legal open source isn't a community, it's "a federation of solo-author archipelagos."

https://www.alt-counsel.com/lawyers-not-on-each-others-code/

Budget 2026 put real government money behind legal AI, and I asked the theatre-or-substance question of the policy itself — infrastructure, or keeping lawyers in the passenger seat?

https://www.alt-counsel.com/budget-2026-lawyers-ai-drivers-seat/

And I caught a genuine innovation signal close to home: I submitted feedback on MinLaw's draft AI guide and two recommendations landed in the final, near-verbatim. Real, public iteration that changed something.

https://www.alt-counsel.com/minlaw-ai-guide-draft-to-final/

On the ASEAN sub-bet: the region-wide leapfrog hasn't materialised. Southeast Asia is still early; Singapore is a clear standout while the rest of the region trails more advanced markets by two to three years, and North America still leads in absolute maturity ([regional picture here](https://fulcrum.sg/what-is-shaping-artificial-intelligence-ai-governance-policies-in-southeast-asia/)). APAC is the fastest-*growing* region, which is catching up, not leaping ahead. And the barriers the reports cite — no training at 54% of firms, no policy at 43%, governance and readiness lagging — are exactly the non-legacy constraints I said would matter more than "unburdened by old systems."

The twist I didn't see coming: Singapore leaping ahead while the rest of ASEAN lags *is my own thesis in miniature*. Innovation in isolated pockets. The sub-bet doesn't just survive — it feeds the headline prediction. One caveat to keep myself honest: "leapfrog" is a slippery word. If it means "grow fastest," APAC qualifies. If it means "skip stages and overtake the West" — the version Salesforce was selling — it hasn't happened.

The one deliverable here I *do* still intend to ship: the theatre-versus-innovation signals framework. Unlike the jagged-frontier framework, this one I think is real and tractable. I've got a few months to write it down properly.

## The one I'm still fighting

### Prediction 1: "Agentic AI will actually work for document review" — fail, but I'm not conceding

**The bet:** By year's end I'd complete routine contract reviews using only AI and agents, never opening Word.

**Reality: fail at the halfway mark. But I read the miss differently now.**

The prediction was never that a good tool would *exist*. It was about *orchestration* — agents operating the document while the human stays out of it entirely. So the year's flood of Word plugins, Claude for Word among them, is not evidence *for* me. It's evidence *against*. If the industry's answer is "put the AI inside Word so the lawyer can drive it from a sidebar," then we never leave Word. That's the opposite of the future I bet on.

https://www.alt-counsel.com/word-on-claude-the-lawyers-greatest-legal-tech-tool-strikes-back/

What keeps the bet alive is the other direction: the agent benchmarks suggest the do-it-without-the-human vision might genuinely be in reach, and autonomous tools like Spellbook's new CLM point that way too. I always expected the real work to happen somewhere like Cowork, not Word — and Microsoft's Copilot "coworker" is a meaningful step on that axis.

The wall I keep hitting isn't capability. It's *validation*. Even when an agent does the review, I open Word to check it — because I don't yet trust it enough not to. Until I can validate reliability without opening the file myself, the human hasn't actually left the app.

So: fail. But I suspect, and I'm still holding out.

## The scorecard, and what the inversion taught me

| # | Prediction | January confidence | Half-time verdict |
|---|---|---|---|
| 1 | Doc review, human out of Word | Optimistic (stretch) | Fail — but still fighting |
| 2 | Jagged frontier won't improve | Most likely to fail | Confirmed — my strongest call |
| 3 | Usage stays under 20% | **Most confident** | Wrong, in the opposite direction |
| 4 | Hallucination manageable | **Most confident** | Half wrong; trending worse |
| 5 | Mostly theatre | Most likely to fail | Holding |

Read the confidence column against the verdict column. I was calibrated backwards. The predictions I'd have bet the house on — usage staying low, hallucinations becoming manageable — are the two the year has most thoroughly refuted. The ones I hedged as too hard to call are the ones that held.

I think I know why. My confident predictions were the *comfortable* ones — they matched how I wanted 2026 to go: friction protecting us from over-reliance, structure taming the risk. My pessimistic predictions were the ones I'd tested against reality and expected to lose. Comfort is a terrible forecasting input. The frontier doesn't care what would be convenient for me.

## What happens now

The tracking failure was real, so here's the fix and not the excuse. I've back-filled the repo with what these six months actually showed, and for the rest of the year I'm dropping the fantasy of a perfect monthly spreadsheet for something I'll sustain: a short entry appended whenever a post touches a prediction. Lower friction, same audit trail, public in the commits where you can check it.

Two deliverables still stand: the theatre-versus-innovation framework (Prediction 5) I intend to ship; the jagged-frontier decision framework (Prediction 2) I'm formally retiring, and I've told you why.

The $500 stake stands. The December scorecard stands. If anything, being this wrong at half-time makes December more interesting, not less — because now the story isn't "did he call it." It's "watch a guy find out his instincts were inside-out, in public, with the receipts."

See you in December with the data. All of it this time.
