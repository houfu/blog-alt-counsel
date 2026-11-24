---
title: "Full-Time: The Year My Predictions Rode a Roller Coaster"
slug: "2026-predictions-full-time"
tags: ["AI", "LegalTech", "Singapore", "2026Predictions"]
status: draft
featured: false
github_folder: "2026-scorecard"
custom_excerpt: "In January I made five legal AI predictions and promised a December scorecard. Three were wrong, one came right in a way I didn't plan, and one held. The best evidence I have for the year isn't a prediction at all."
---

In January I made five predictions about legal AI, gave each one a success criterion, and promised a scorecard in December. If I chickened out, $500 would go to a legal aid organisation in Singapore.

This is that scorecard, a little early. It's been a rollicking year, and I'm impressed I managed to write this post at all.

[My 2026 Legal AI Predictions (From the Trenches, Not the Boardroom)](https://www.alt-counsel.com/my-2026-legal-ai-predictions-from-the-trenches-not-the-boardroom/?ref=2026-predictions-full-time)

In July I admitted my confidence was inverted: the two predictions I was surest of were my worst calls, and the two I expected to fail were holding. I thought that was the lesson. It didn't survive either. Looking at how the year went, it was a roller coaster, and two predictions swapped places again in the second half.

[Half-Time on My 2026 Predictions: My Confidence Was Inverted](https://www.alt-counsel.com/2026-predictions-six-month-update/?ref=2026-predictions-full-time)

So, the final count: three wrong, one right in a way I didn't plan, one holding. And the most interesting thing I can report from 2026 isn't a prediction at all. It's an app I built called Marshall.

One confession, then I'll move on. At half-time I promised to log an entry whenever a post touched a prediction. That log stopped on 2 July, again. The one log I did keep was my work log of how much I actually use AI, so that number is real.

<!--members-only-->

## I still read in Word

**The bet:** by the end of 2026, I'd review routine contracts using only AI and agents, without ever opening Microsoft Word.

**Full-time: fail.**

In July, I said the blocker was validation. I opened Word because I didn't trust the agent's work enough not to check it. That blocker has mostly gone. AI tools tend to get it right now.

I still open Word anyway. When I want to read a document, I read it in Word. When I need an AI tool, I use the panel in Word. Claude, Copilot and most of the major legal tech tools built their way into Word this year, and it's simply convenient to stay there. The workflow where I rely on agents instead of Word never really established itself.

The tools I was waiting for even arrived. Copilot Cowork can now edit Word files, and Spellbook's autonomous contract product went on general release in October. [VERIFY] I still read in Word.

There is one thing I did differently, and it's where this question gets interesting again. I've let business users run a legal agent in their own Copilot. The review happens there, and I read the result in Word and verify it. They have the context — the deal, the emails, the history — so they help the agent more than I can by asking it to read their emails.

[I Got Rugpulled by Cowork](https://www.alt-counsel.com/rugpulled-by-cowork/?ref=2026-predictions-full-time)

That's not the prediction I made, so it doesn't get partial credit. Plain fail.

## I was right in July and wrong by December

**The bet:** AI fails in ways we can't predict — the jagged frontier — and that unpredictability wouldn't improve in 2026.

**Full-time: wrong.**

At half-time this was my best call, "the story of the year." I retired the decision framework I'd promised, because the only rigorous way to map the frontier was a benchmark that took me two weeks and my entire compute quota.

Then the models got better. The frontier ones did, and so did the open-weight ones you can run yourself (my favourite is Qwen 3.8). They became predictable enough that something else became worth doing: writing your own evals — tests built from your own tasks, which tell you how well a model handles *your* work rather than a vendor's benchmark.

I'll be honest about the receipts. I don't have any. The closest I came was a weekend of tests on OpenRouter that cost me no more than $25. Those were tests, not evals. Evals are what I want to do next, and I've been nudging the lawyers I mentor to think about it more rigorously. There's an obvious one sitting in Zeeker: can an agent find the right sources of Singapore law?

Not everyone thinks the frontier got smoother. Ethan Mollick, who helped name the jagged frontier, wrote in November that the errors have shrunk but the jaggedness has moved into taste and judgment, where benchmarks can't see it. [VERIFY] If he's right, that's one more reason to write your own evals.

## My usage stayed high, and might fall for a good reason

**The bet:** my meaningful AI use would stay under 20% of my legal work.

**Full-time: decisively wrong.** Since May, my work log has hovered between 50% and 66% of tasks, on the same strict bar as before: AI doing substantive work I would otherwise have done myself.

What's changed since July is what the number means. This metric only ever counted my own desk. As more of the AI use moves from me to the people I work with, like those business users running a legal agent in their own Copilot, my personal number may well go down.

That wouldn't mean less AI. It would mean the work moved.

## Hallucinations got manageable, just not the way I planned

**The bet:** hallucinations stay unsolved in 2026, but might become *manageable* — and I'd test three structures to find out how.

**Full-time: right, but not the way I expected.**

I never ran those three tests. At half-time I was pessimistic: the more I leaned on autonomous agents, the more ways things broke. By December it's far more manageable than I expected.

What changed was context. At the same time the models got better, our programs got better at managing context, which means feeding the model the right documents and facts for the task instead of hoping it knows them. Lawyers got better at it too. With more awareness, we started thinking about what information a model actually needs before asking it anything.

There's a caveat, and it isn't small. Courts are still seeing more fake citations, not fewer — one public database of AI hallucination decisions passed 2,200 by October, most of them from people representing themselves. [VERIFY] Manageable, then, for those who can manage context. Not yet for everyone.

[Will LawNet become Just A Bigger Bookcase?](https://www.alt-counsel.com/the-bigger-bookcase/?ref=2026-predictions-full-time)

## The theatre held, and ASEAN wrote rules

**The bet:** most AI adoption would be checkbox theatre, with real innovation in isolated pockets. I also bet against Salesforce's prediction that ASEAN, unburdened by legacy systems, would leapfrog into the agentic era.

**Full-time: holding.**

My hunch going in was that nothing interesting happened after July. Quite a lot happened. Very little of it was measured.

ASEAN didn't leapfrog. It regulated. Vietnam's list of high-risk AI systems came into force in August, Malaysia's Chief Justice promised rules on lawyers' AI use after convincing-but-inaccurate AI submissions, and ASEAN signed its first binding digital economy agreement in November. [VERIFY] Even Salesforce's regional managing director said in September that outside Singapore, "the cost of human labour is cheaper than the cost of AI." [VERIFY] The data tells the same story. Singapore is a genuine outlier, with about 64% of working-age people using generative AI against 33% in the US, but most of the rest of Southeast Asia sits between 13% and 28%. [VERIFY] Among large companies in the region, 87% have AI agents in a pilot or in production, and 7% say they're ready to scale them. [VERIFY]

Singapore had access deals rather than outcomes. NUS Law signed up with its third AI vendor in five months, SMU joined Legora's programme, and new AI training tracks for lawyers launched without published targets. The interesting moves came from institutions: courts disregarding evidence when a party couldn't explain how much it relied on AI, and SAL opening a pilot API to LawNet. [VERIFY]

I never wrote the signals framework I promised. But a year of watching left me with three signals I keep coming back to:

- **Success measured by access.** Licences handed out and programmes launched, rather than a problem solved.
- **Pilot-rich, readiness-poor.** Lots of trials, few that anyone is prepared to scale.
- **The evaluation stays private.** If a pilot stops and nobody publishes why, treat the announcement as the product.

## Then I built Marshall

The most interesting thing in my own pocket of innovation this year didn't come from a prediction.

A week after complaining about LawNet's direction, I decided to walk the talk. Marshall is a proof of concept that you can build your very own Harvey or Legora, focused on Singapore law. I had no access to LawNet's content API, so I built it from open source legal technology: Zeeker, which I've been curating for nearly a year, Joshua Ng's Statutes MCP, Yu Chou Teo's Hansard gateway, and LegalQuants' LQ.AI as the spine, with selected skills from its plugins. It runs on Qwen 3.8 27B.

[HOUFU: LinkedIn launch post URL — carries the credits]

That part matters more than it sounds. Legal open source has looked like a federation of solo-author archipelagos: lawyers build, but not on each other's code. Marshall is built almost entirely on other lawyers' code.

[Lawyers Are Building. Just Not On Each Other's Code.](https://www.alt-counsel.com/lawyers-not-on-each-others-code/?ref=2026-predictions-full-time)

The LinkedIn post got about 3,000 views and roughly 10 people asked to try it, so I put the app on a Google Drive for them to install. I don't know how many did. I didn't build in a way to count, so by my own second signal, I can't prove Marshall is more than a demo either. I was supposed to write a post about it. It got overtaken by events.

## The final scorecard

| # | Prediction | January confidence | Half-time | Full-time |
|---|---|---|---|---|
| 1 | Contract review without Word | Optimistic stretch | Fail, still fighting | Fail |
| 2 | Jagged frontier won't improve | Most likely to fail | Confirmed | Wrong |
| 3 | Usage stays under 20% | Most confident | Wrong | Wrong (50–66%) |
| 4 | Hallucinations manageable | Most confident | Half wrong | Right, unexpectedly |
| 5 | Mostly theatre | Most likely to fail | Holding | Holding |

In July I decided comfort was a terrible forecasting input. By December, even the inversion had inverted. My confidence ended up predicting nothing at all.

What did hold, across most of the year, was where the work went. Business users with the deal in their heads ran the contract review. Context, not structure, made hallucinations manageable. My own usage number may fall because the work is moving to whoever knows the matter best. The work went to whoever had the context — and most of the time, that wasn't me.

For solo counsel and small teams, that's the hopeful part. Marshall was built without waiting for anyone's API, on a weekend budget, from parts other lawyers gave away. You don't need to wait to be given access.

I didn't chicken out, so the $500 stays put. Thank you for riding along this year.
