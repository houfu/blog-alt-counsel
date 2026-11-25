---
title: 'Full-Time: The Year My Predictions Rode a Roller Coaster'
slug: 2026-predictions-full-time
tags:
  - AI
  - LegalTech
  - Singapore
  - 2026Predictions
status: published
featured: false
github_folder: 2026-scorecard
custom_excerpt: >-
  In January I made five legal AI predictions and promised a December scorecard.
  Three were wrong, one came right in a way I didn't plan, and one held. The
  best evidence I have for the year isn't a prediction at all.
post_id: 6b05724feba174000154bf66
published_at: '2026-11-25T01:26:00.000Z'
feature_image: >-
  https://images.unsplash.com/photo-1671466787226-5f893457a278?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDZ8fHN0YWRpdW0lMjBzY29yZWJvYXJkJTIwc3Vuc2V0fGVufDB8fHx8MTc5NTUyOTc1Mnww&ixlib=rb-4.1.0&q=80&w=2000
---

In January I made five predictions about legal AI, gave each one a success criterion, and promised a scorecard in December. If I chickened out, $500 would go to a legal aid organisation in Singapore.

This is that scorecard, a little early. It's been a rollicking year, and I'm impressed I managed to write this post.

[My 2026 Legal AI Predictions (From the Trenches, Not the Boardroom)](https://www.alt-counsel.com/my-2026-legal-ai-predictions-from-the-trenches-not-the-boardroom/?ref=2026-predictions-full-time)

In July I admitted my confidence was inverted: the two predictions I was surest of were my worst calls, and the two I expected to fail were holding. I thought that was the lesson. It didn't survive either. Looking at how the year went, it was a roller coaster, and two predictions swapped places again in the second half.

[Half-Time on My 2026 Predictions: My Confidence Was Inverted](https://www.alt-counsel.com/2026-predictions-six-month-update/?ref=2026-predictions-full-time)

At half-time I promised to log an entry whenever a post touched a prediction. The last entry is the back-fill I did for that post. I never wrote another. The one log I did keep was my work log of how much I actually use AI, so that number is real.

So, the final count: three wrong, one right in a way I didn't plan, one holding. And the thing I'm most pleased with from 2026 isn't a prediction at all. It's an app I built called Marshall.

<!--members-only-->

## I still read in Word

**The bet:** by the end of 2026, I'd review routine contracts using only AI and agents, without ever opening Microsoft Word.

**Full-time: fail.**

In July, I said the blocker was validation. I opened Word because I didn't trust the agent's work enough not to check it. That blocker has mostly gone. In my own checking, AI tools tend to get it right now.

I still open Word anyway. When I want to read a document, I read it in Word. When I need an AI tool, I use the panel in Word. Claude, Copilot and most of the major legal tech tools built their way into Word this year, and it's simply convenient to stay there. The workflow where I rely on agents instead of Word never really established full time.

There is one thing I did differently, and it's where this question gets interesting again. I've let business users run a legal agent in their own Copilot. The review happens there, and I read the final result, Word or PDF, and verify it. They have the context — the deal, the emails, the history — so they help the agent more than I can by asking it to read their emails. While the imposition of charges on Copilot use certainly accelerated the conversation, but passing the cost of legal review to the real users is now my target, not my own tool use.

That's not the prediction I made, so it doesn't get partial credit.

## I was right in July and wrong by December

**The bet:** AI fails in ways we can't predict — the jagged frontier — and that unpredictability wouldn't improve in 2026.

**Full-time: wrong.**

At half-time this was my best call, "the story of the year."

Then the models got better. The frontier ones did, and so did the open-weight ones you can run yourself (my favourite is Qwen 3.8). They became predictable enough, and cheap enough to test, that something else became worth doing: writing your own evals — tests built from your own tasks, which tell you how well a model handles *your* work rather than a vendor's benchmark.

I don't have any receipts. In July, my one rigorous run took two weeks and my entire compute quota. This autumn, a weekend of tests on OpenRouter cost me no more than $25. Those were tests, not evals. Evals are what I want to do next, and I've been nudging the lawyers I mentor to think about it more rigorously. There's an obvious one sitting in Zeeker, my collection of Singapore legal data: can an agent find the right sources of Singapore law?

Not everyone thinks the frontier got smoother. Ethan Mollick, who helped name the jagged frontier, wrote in November that the errors have shrunk but the jaggedness has moved into taste and judgment, where benchmarks can't see it. If he's right, that's one more reason to write your own evals.

## My usage stayed high, and might fall for a good reason

**The bet:** my meaningful AI use would stay under 20% of my legal work.

**Full-time: decisively wrong.** Since May, my work log has hovered around 50% of tasks, on the same strict bar as before: AI doing substantive work I would otherwise have done myself.

What's changed since July is what the number means. This metric only ever counted my own desk. As I hand more of the AI work to the people who hold the context, like those business users running a legal agent in their own Copilot, my personal number may well go down.

## Hallucinations got manageable, just not the way I planned

**The bet:** hallucinations stay unsolved in 2026, but might become *manageable* — and I'd test three structures to find out how.

**Full-time: right, but not the way I expected.**

I never ran those three tests. At half-time I was pessimistic: the more I leaned on autonomous agents, the more ways things broke. By December it's far more manageable than I expected.

What changed was context. At the same time the models got better, our programs got better at managing context, which means feeding the model the right documents and facts for the task instead of hoping it knows them. Lawyers got better at it too. With more awareness, we started thinking about what information a model actually needs before asking it anything.

There's a caveat, and it isn't small. Courts are still seeing more fake citations, not fewer — one public database of AI hallucination decisions passed 2,200 by October, most of them from people representing themselves.  So my verdict holds for people who can manage the context, not for everyone.

## The theatre held, and ASEAN wrote rules

**The bet:** most AI adoption would be checkbox theatre, with real innovation in isolated pockets. I also bet against Salesforce's prediction that ASEAN, unburdened by legacy systems, would leapfrog into the agentic era.

**Full-time: holding.**

My hunch going in was that nothing interesting happened after July. Quite a lot happened. Very little of it was measured.

ASEAN didn't leapfrog. It regulated. Vietnam's list of high-risk AI systems came into force in August, and Malaysia's Chief Justice promised rules on lawyers' AI use after convincing-but-inaccurate AI submissions. Salesforce's regional managing director said in September that outside Singapore, "the cost of human labour is cheaper than the cost of AI."

In Singapore, NUS Law and SMU both joined AI vendor programmes. SAL opened a pilot API to LawNet for selected legal tech platforms, and the people working on LawNet clearly want it to succeed.

I never wrote the signals framework I promised. Reading this year's announcements, three patterns stood out:

- **Success measured by access.** Licences handed out and programmes launched, rather than a problem solved.
- **Pilot-rich, readiness-poor.** In an AmCham Singapore survey, 87% of large companies in the region had AI agents in a pilot or in production, and 7% were ready to scale them.
- **The evaluation stays private.** When a pilot ends, the reasons often aren't published.

## Then I built Marshall

A week after writing about LawNet's direction, I decided to walk the talk. Marshall is a proof of concept that you can build your very own Harvey or Legora, focused on Singapore law. It runs research, redline and review on its own. I had no access to LawNet's content API, so I built it from open source legal technology. Zeeker is mine, which I've been curating for nearly a year. The spine is LegalQuants' LQ.AI, which I help maintain, with selected skills from its plugins. The other two parts came from other lawyers: Joshua Ng's Statutes MCP and Yu Chou Teo's Hansard gateway. It runs on Qwen 3.8 27B, locally if you have a SGD 6,000 MacBook Pro, or through OpenRouter if you don't.

[Marshall launch post on LinkedIn](https://lnkd.in/p/gryuBSC2)

Legal open source has looked like a federation of solo-author archipelagos: lawyers build, but not on each other's code. Marshall is built on other lawyers' code as well as mine.

Over 2,000 people saw the LinkedIn post and roughly 10 asked to try it, so I put the app on a Google Drive for them to install. I have no usage numbers beyond that. Marshall is still a work in progress, and I haven't written evals for it yet. I was supposed to write a post about it. It got overtaken by events.

## The final scorecard

| # | Prediction | January confidence | Half-time | Full-time |
|---|---|---|---|---|
| 1 | Contract review without Word | Optimistic stretch | Fail, still fighting | Fail |
| 2 | Jagged frontier won't improve | Most likely to fail | Confirmed | Wrong |
| 3 | Usage stays under 20% | Most confident | Wrong | Wrong (50–66%) |
| 4 | Hallucinations manageable | Most confident | Half wrong | Right, unexpectedly |
| 5 | Mostly theatre | Most likely to fail | Holding | Holding |

Against my January confidence, I ended up calibrated on two of the four I ranked. That's a coin flip.

What held across the year was where the work went. Business users with the deal in their heads ran the contract review. Better models and better context management together made hallucinations manageable. And as more of the work moves to the people who know the matter best, my own usage number may fall. The work went to whoever had the context.

For solo counsel and small teams, that's the hopeful part. The context for Singapore law no longer sits only behind LawNet: Zeeker, the statutes and Hansard are open, and Marshall runs on them.

I didn't chicken out, so the $500 stays put. Thank you for riding along this year.
