---
title: "My agent worked around the tools I gave it"
slug: "my-agent-worked-around-the-tools-i-gave-it"
tags: ["AI", "LegalTech", "OpenSource"]
status: draft
featured: false
github_folder: "deepseek-v4-vs-harvey"
---

Somewhere in my benchmark results sits a complete legal memorandum. Fifty-eight kilobytes of finished work: issues identified, analysis done, recommendations made. Its score: zero.

Not zero because the law was wrong. Zero because my agent saved the memo as raw markdown under a `.docx` filename, the judge couldn't open it, and no criterion passed. The legal work was finished. Everything else around it failed. 

I found that memo because I went looking for why my agent stack confounded me. I had pitted a set of lawyer-made tools against a generic harness at legal work, to see if specialised tools made by lawyers could beat a generalised tool. I ran over 2,200 benchmark tasks to prove it.

My stack largely lost against the default. But what I learnt about the harness was the real lesson.

![Scatter plot of 1,006 benchmark tasks comparing my stack against the stock harness: each triangle is a task, red pointing down where my stack scored worse, blue pointing up where it improved, plotted by run time against pass rate. Red dominates.](nanoclaw-task-scatter.png)

## What I actually ran

Three weeks ago, Harvey open-sourced its Legal Agent Benchmark (LAB): around 1,250 tasks across 24 practice areas, graded against more than 75,000 expert-written rubric criteria. Each task is a partner-to-associate assignment, built around a client matter: a fifty-word instruction, a closed universe of documents (some relevant, some deliberately not), and a requirement to hand back reviewable work product. One corporate M&A task, for example, gives the agent a data room for a fictional $458 million acquisition and asks for a board-ready memo on change-of-control provisions — graded against 57 criteria covering nine issues planted across eight material contracts.

Grading is all-pass: a deal memo that catches eight of ten risks scores as incomplete, because that's how partners review work. The rubrics check facts, conclusions, citations, severity ratings, dollar amounts — and formatting. That last one matters for this story.

I ran the same model through it twice:

- **The stock harness** (1,251 tasks): LAB's default setup. Six generic tools — bash, read, write, edit, glob, grep — plus Pandoc (a document converter) and pdfplumber (a PDF reader).
- **My stack** (1,006 of the same tasks): the same model inside my nanoclaw container, wired to Adeu, an MCP document-authoring tool built by a fellow lawyer-coder, and docling, a library that converts PDFs and Office files into text an agent can read.

The model in both runs was DeepSeek-v4-flash through Ollama. Not a frontier model. Not a legal model. A model that costs approximately nothing — though "nothing" is doing some work there: each sweep exhausted a week of my Ollama token quota, so the experiment took two weeks of waiting for a benchmark that frontier labs run in an afternoon.

My theory was simple: tools made by lawyers, for legal documents, should beat bash and Pandoc at producing legal documents. The agent would redline with a proper redlining tool, author Word files with a proper authoring chain, and the generic setup would be left improvising.

The results: the stock harness passed 84.7% of rubric criteria. My stack passed 74.8%. The stock harness produced 9 zero-score tasks; mine produced 56. Mine was also 2.6 times slower.

Ten points, in the wrong direction.

## The logs said something stranger

Encountering these results, your gut tells you a lot of things. DeepSeek-v4-flash is a terrible model. Maybe Adeu is not all it's cut out to be. Maybe nanoclaw is not a good place to run your legal bot. As the test did not isolate any particular factor, a definitive conclusion may not be forthcoming. However, there were still lessons to be learnt when you look at the logs. To do this, I enlisted Claude's newest "Fable" model to dig into the details.

The first discovery: my agent never once told me it was done. In the default harness used by Harvey, the harness owns the agent loop: when the agent stops calling tools, the harness knows directly that the run is over. That worked in all 1,133 of its runs.

Nanoclaw is different — it's a conversational agent, and the runner I wrote could only watch its messages. So I relied on the model to emit a `STATUS: DONE` string. It didn't work, because models don't reliably conform to their instructions. Instead I opted to look for deliverables in its output, and once there were no changes, to deem it done. However, sometimes the agent was not done. As nanoclaw took longer, I evaluated half-baked work instead. In one Stark Law task, the run was cut so early that the "gap analysis" my agent shipped was the *input compliance program*, verbatim. The stock run scored 1.00 on that task. Mine scored 0.00.

Then there were the files themselves. The stock harness produced 1,431 valid Word documents out of 1,431. My stack produced 73 broken ones — files with unescaped XML and leaked format tokens, placeholder stubs that literally read "PLACEHOLDER - This file will be generated via the Adeu MCP tool chain", and finished memos saved as text under `.docx` names, like the 58 KB one that opened this post.

And the discovery that actually stung: in 100 task folders, my agent had quietly routed around the document tools I gave it. It wrote its own Node.js scripts — `build-docx.js`, `transform.js` — installed `node_modules` *inside the deliverables folder*, and built its own document pipeline from scratch rather than use the MCP chain I'd wired up for it.

I gave my agent lawyer-made tools, and it preferred to improvise its own.

## Where my stack lost — and where it won

LAB tags every task with the kind of work an associate would recognise: draft, review, analyze, identify issues, extract, compare, research. Splitting the 1,006 shared tasks that way turned one ten-point gap into three different stories:

- **Drafting regressed worst: −12.9 points** across 374 tasks — and still −11.6 with every broken file excluded. Whatever my stack does when authoring long documents, the judge consistently liked it less.
- **Identify-issues and analyze tasks lost mostly on packaging.** Excluding broken files cuts the identify regression from −9.9 to −4.7 points. The legal thinking was largely intact; the memos didn't survive delivery.
- **Extract and compare tasks flipped: my stack won.** More perfect-score extractions (3.2% vs 1.6%) and comparisons (7.0% vs 5.4%) than the stock harness managed.

![The same tasks split into seven columns by work type — draft, identify, review, analyze, extract, compare, research — with red triangles marking tasks where my stack declined and blue where it improved. Drafting shows the deepest regression: −12.9 points across 374 tasks.](nanoclaw-worktype-breakdown.png)

The pattern: my stack is better at mechanical work and worse at composition. And the composition damage concentrated exactly where a fragile authoring pipeline would compound — funds and corporate-governance drafting, the longest and most heavily structured documents in the benchmark, fell 33 and 28 points in those cells. Meanwhile litigation, IP, and trade-sanctions tasks barely noticed the change of harness.

A single leaderboard number would have flattened all of that into "your stack is worse." The breakdown says something far more useful: it tells me what to fix, what to keep, and where my stack is already the better environment.

## It wasn't the model. It wasn't the tools either.

Here's where the post I planned to write fell apart.

I was ready to claim that my nanoclaw stack would declare total victory over Harvey's basic harness. The way it turned out made me realise that the harness was made of many little things, and it was not exactly clear whether anything I decided to swap or add to it would improve or degrade the result. This was the jagged frontier — the idea that AI capability is unevenly distributed, strong in one spot and weak in the next — vividly illustrated for me.

The difficulties I encountered made it clear to me how difficult it could be when one person is the engineer, the lawyer, the tester, and the QA department. I have regrets over how this turned out and perhaps if I spent more time designing it carefully, I would receive firmer conclusions. 

When I went looking for whether anyone had measured this properly, I found a whole research field arriving at the same place. Princeton's Holistic Agent Leaderboard team ran 21,730 agent rollouts and found the *same model* swinging up to 48 percentage points depending on which scaffold wrapped it. A position paper published last month — bluntly titled "Stop Comparing LLM Agents Without Disclosing the Harness" — puts numbers on it: on SWE-bench Pro, a leading coding benchmark, six frontier models span just 4.9 points under a single locked harness, while one of them (Claude Opus 4.5) moves 9.5 points when you change only the harness around it.

Read that again: the gap between harnesses was twice the gap between the best and worst frontier models. My ten-point gap, on legal work, with the model held constant, is the same finding.

There is however another lens to look at this. I now have a path to improve the scores, and lots of techniques I haven’t tried yet -- skills, more tools and even thinking, which is essentially throwing more tokens at the problem. Such a path to improvement would also be available to an AI. This is why Kevin Keller called the harness the floor. Table stakes for any AI.

## When someone shows you a benchmark score

For solo counsels and small teams, this changes how to read every legal AI claim. Every benchmark score is jointly produced by a model and a harness, and the harness is the part nobody discloses. When a vendor says "our system scores X on legal tasks," the polish of their harness — the completion logic, the document writers, the retry behaviour, the packaging validation — is baked invisibly into X.

Harvey seems to understand this better than its marketing peers. LAB launched deliberately *without* a leaderboard, because Harvey says it first wants standards for normalising submissions. That's an admission worth noticing: nobody yet knows how to compare agent results fairly across different stacks. I'd put it more strongly. Benchmarks like this don't favour frontier *models* so much as they reward polished *harnesses* — which frontier labs and well-funded vendors have, and the rest of us have to build on weekends.

The same problem shows up at the product level, closer to home. Anna Guo, a Singapore-based in-house counsel, runs LegalBenchmarks.ai — double-blind evaluations of legal AI tools, scored by panels of practising lawyers rather than rubrics. Her findings rhyme with mine from the other side: general-purpose chatbots matched purpose-built legal tools on raw accuracy, and one of her six documented failure modes is tools failing "not because of poor reasoning but due to technical constraints" — file formats, upload limits, OCR — sometimes silently skipping content without telling the lawyer. The product world files that under usability. The agent world calls it the harness. Either way, the layer between the model and the legal work is deciding more than anyone discloses.

So before trusting any agent benchmark number, I now ask three questions:

1. **What harness produced this score?** Same model, different wrapper, ±10 points or more.
2. **Who decided when each run ended?** If the harness guesses, some runs died mid-thought — that's how a verbatim copy of an input document became my agent's "gap analysis."
3. **What happened to outputs that failed packaging?** A zero might be wrong law — or finished law in a file the judge couldn't open.

None of these appear on a leaderboard. All of them moved my results more than the model did.

## Before I blame anyone's code

Determining a winner in head-to-head battles isn't the only thing stressing a harness under Harvey LAB's 1,000-plus tests is good for.

While my integration is clearly to blame for some of the failures — my completion signal, my stability gate, my conversion step that never ran — there are other factors, such as Adeu, an open-source tool that allows AI agents to freely edit a document, including redlining.

While this needs further investigation, there is something intriguing about what’s going on behind the scenes. So here’s my plan: I plan to study further where Adeu appears to have failed and see if I can reproduce the error. Having used the open source tool, I am looking forward to contributing back: an upstream bug report with a thousand runs of forensics attached, instead of a vague complaint that it "didn't work."

I once wrote that legal open source is a federation of solo-author archipelagos — projects that never receive the outside contributions that would make them a community. Bob Ambrogi quoted that line back at me when LAB launched, asking whether Harvey's benchmark would leave room for outsiders to shape it. Fair question. But contribution has to flow both ways — not just maintainers publishing code, but users reporting back. A stranger running your tool through 1,006 legal tasks and filing detailed bugs is what the alternative to open-source theatre actually looks like. I'd rather be that stranger than another archipelago.

## The benchmark was the product

I set out to prove my stack was better and got something more useful: the most thorough QA report my agent has ever had, nearly free. Harvey built a 75,000-criterion test suite with frontier-lab research partners; running it cost me two weeks of Ollama token quota and a credit outage that cut my second sweep short. It found four real bugs in my harness that no amount of demo-driven tinkering would have surfaced, told me exactly which work types my stack is already good at, and handed me a fix list with measurable recovery criteria.

For now, the lesson I keep returning to is the one the 58 KB memo taught me. The work was good. The environment failed it. Every leaderboard score you've ever seen contains both, blended invisibly — and the same is true of your own agents.

What is your harness quietly deciding for you?
