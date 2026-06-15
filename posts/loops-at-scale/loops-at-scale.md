---
title: "Thinking in Loops: Finding the Frontier Without a Frontier Budget"
slug: thinking-in-loops-frontier-budget
tags: ["AI", "LegalTech"]
status: draft
featured: false
github_folder: loops-at-scale
---

Three days into scoring the benchmark, my tokens ran out.

I didn't feel defeated. I felt determined to find another way — which, in hindsight, is the only reason I have anything worth writing here. I was running more than a thousand AI agents to answer a single question, and the wall I hit taught me something I keep coming back to.

When you run real AI work at scale, the model isn't the thing you're really choosing. The shape of the work is.

## The question you can't answer from a chat window

Every few weeks there's a new model, a new capability, a new score. Underneath the noise, the people I talk to keep asking the same quiet question: with all of this, how do I actually know what these models can do for *my* work?

You can't find out from a single chat window. One clever prompt tells you the model can do the thing once, on a good day, when you're watching. It doesn't tell you whether it holds up across a hundred real matters with the messy documents and the deadlines. For that you have to give it real work, at scale, and grade what comes back.

A while ago I argued that lawyers had learned prompt engineering at exactly the wrong moment — that the tools had quietly shifted from things you prompt to systems that run in loops, and that we needed new ways of thinking to keep up.

[Lawyers Got Prompt Engineering Wrong (And Why That Matters)](https://www.alt-counsel.com/lawyers-prompt-engineering-wrong/)

Thinking in loops is one of those new ways. This post is what it looked like when I actually tried it.

## You can't reason your way to the edge

The reason you have to *test*, rather than read the spec sheet, is that AI capability is jagged.

Ethan Mollick and his co-authors named this the [jagged technological frontier](https://www.oneusefulthing.org/p/the-shape-of-ai-jaggedness-bottlenecks): AI is brilliant at one task and surprisingly hopeless at another that looked just as hard. The boundary is invisible until you cross it. So you can't predict where a model breaks — you can only watch it work across a lot of tasks and see where it falls off.

And even when you do test, the number you get back isn't the model's score. It's the model *plus the harness* — the wrapper of tools, retries, and packaging around it. I learned that the expensive way last month, when a finished legal memo scored zero because my agent saved it under a broken filename.

[My Agent Did the Legal Work. The Benchmark Gave It Zero.](https://www.alt-counsel.com/my-agent-did-the-legal-work-the-benchmark-gave-it-zero/)

I'm not the only one. Princeton's Holistic Agent Leaderboard ran tens of thousands of agent rollouts and found the *same model* swinging by 30 to 50 points depending on the scaffold wrapped around it. So "what can this model do?" is really "what can this model do, in this harness, graded this way?" The only honest way to answer it is to run a lot of work and look hard at the results.

Which brings me back to the wall.

## Same work, three shapes

Here is the work I was actually doing. I had 1,252 finished benchmark runs — legal tasks an agent had already completed — and I needed every one scored against the rubric. Tedious, mechanical, and far too much to read myself.

I ended up doing that identical job three different ways. The difference between them is the whole point.

**Scripts.** The obvious way to grade a thousand things is to write a script that loops through them. This is how Harvey, who built the benchmark, runs it — and scripts can orchestrate enormous scale. But a script is a black box while it runs. When something goes wrong at run 800, it tells you very little; you're reading logs after the fact, not watching the work happen. For a job I didn't fully trust yet, that opacity bothered me.

**The burst.** So I reached for a dynamic workflow instead — a [Claude Code feature](https://code.claude.com/docs/en/workflows) where, rather than doing the job itself, Claude writes a small program that hands the work out to a fleet of subagents and supervises them. It split my 1,252 runs into 626 judge agents, each scoring about two runs, running a dozen at a time.

This was the opposite of a black box. I could open any single agent and watch it reason about a run. As the documentation puts it, a workflow "moves the plan into code" — the orchestration becomes something you can read, rerun, and inspect. The work had become legible.

![A Claude Code workflow scoring the benchmark: a run titled "harvey-self-judge-all-runs" fanning out 626 judge agents, with a dozen actively running and the rest queued, each showing its token use and tool calls.](harvey-self-judge-burst.png)

It was glorious. It was also a flood. Six hundred agents firing as fast as the system allowed is like tipping a full bucket of water out at once — most of the capacity you're paying for just sloshes over the side. Three days in, the bucket was empty. My tokens ran out.

**The paced loop.** That was the moment I had a choice: wait for a bigger budget, or change the shape of the work.

So I set a loop running. Every ten minutes, check for runs that hadn't been scored yet, and spin up a few agents — three to eight — to grade them. Each small batch finished before the next began, and each round left me a one-line summary so I could watch progress while I got on with other things. Same 1,252 runs. Same agents. Same judge. A completely different shape in time.

Drawn against the limit, the two shapes look like this:

![A chart of token use over time against a dashed rate-limit ceiling. The burst is a single tall spike that punches through the ceiling and collapses; the paced loop is a row of small, even humps that ride comfortably underneath it.](token-shape-burst-vs-loop.png)

One honest caveat: I had the agents grade the runs themselves — an LLM acting as judge. That's a useful instrument, not an oracle, and I trust the pattern across a thousand runs far more than any single score. But the shape of *how* I ran them is what this post is about, and on that the three approaches sort cleanly:

| | Scripts | Burst (`Workflow`) | Paced loop (`/loop`) |
|---|---|---|---|
| Who holds the plan | the script | an orchestrator | the scheduler |
| Can you see inside? | barely | yes, agent by agent | yes, a summary each tick |
| Shape over time | opaque | one tall spike | steady ripples |
| Hits the wall? | maybe | fast | rides under it |
| Fits when | already battle-tested | budget, and you want speed | time or budget is the constraint |

## Why the slow way works

The loop isn't slower out of patience. It works because the limit I hit has a shape, and the loop matches it.

Anthropic's API, like most, enforces its limits with a [token bucket](https://platform.claude.com/docs/en/api/rate-limits). Your capacity refills continuously, drip by drip, up to a maximum — it isn't handed back to you in one lump each hour. The documentation is blunt about what that means for a flood: "Short bursts of requests can exceed the limit and trigger rate limit errors."

That's the whole story in one image. The burst empties the bucket and slams into the ceiling. The loop sips at the rate the bucket refills. Same water, same bucket — one shape overflows and stalls, the other rides the refill and finishes.

Once you see it that way, pacing stops feeling like a compromise. It's just the shape that fits the constraint.

## The shape is the decision

Once you've settled on a model and built a decent harness, the shape of the work is the lever still in your hands — and it's a real decision, not a default.

Burst when you have budget to spend and you want the answer now. Pace when tokens, rate limits, or your own attention are the thing in short supply. The burst gave me legibility and speed right up until it gave me an empty tank. The loop gave up the speed and kept everything else.

Neither is wrong. But choosing the wrong shape for your constraint is how you end up three days in with nothing scored — or how you wait a week for an answer you could have had in an afternoon.

## For the rest of us

The frontier labs answer "what can this model do?" in an afternoon, with a research budget and rate limits the rest of us will never see. For everyone else, the same question is now answerable too — the tools to run and grade work at scale are sitting in a CLI. But the shape that fits a small operation isn't the burst. It's the loop.

This isn't an abstract worry. Singapore's Minister for Law, pressed on why smaller firms struggle to adopt AI, [put it plainly](https://www.mlaw.gov.sg/written-reply-by-minister-on-supporting-law-firms-adopt-ai): enabling adoption "is not only about addressing cost," because many lawyers "are kept busy by their daily work, and may not have the capacity to dedicate additional hours" to it. The constraint isn't only money. It's time and attention.

A loop that runs while you work is a direct answer to exactly that. You don't sit and supervise a flood; you set a cadence, check the summary between matters, and let it grind through the budget you actually have. That is frontier-scale evaluation on a non-frontier budget.

For solo counsels and small teams, this is the part worth internalising. You will not win by buying the biggest burst. You win by knowing the question is testable at all, and by shaping the work so it fits the resources you have rather than the ones you wish you had.

My tokens ran out three days into the benchmark, and the fix wasn't a bigger budget or a better model. It was a different shape. The capability was already there — I just had to stop pouring it out all at once.

The model isn't the only thing you're choosing. What shape is your work running in?
