---
title: "My agent worked around the tools I gave it"
slug: "my-agent-worked-around-the-tools-i-gave-it"
tags: ["AI", "LegalTech", "OpenSource"]
status: draft
featured: false
github_folder: "deepseek-v4-vs-harvey"
---

Somewhere in my benchmark results sits a complete legal memorandum. Fifty-eight kilobytes of finished work: issues identified, analysis done, recommendations made. Its score: zero.

Not zero because the law was wrong. Zero because my agent saved the memo as raw markdown under a `.docx` filename, the judge couldn't open it, and no criterion passed. The legal work was finished. The packaging failed.

I found that memo because I went looking for why my agent stack lost a bet I was sure it would win. I believed a set of lawyer-made tools would beat a generic harness at legal work. I ran over 2,200 benchmark tasks to prove it.

I lost. What I didn't expect was why.

## What I actually ran

Three weeks ago, Harvey open-sourced its Legal Agent Benchmark (LAB): around 1,250 tasks across 24 practice areas, graded against more than 75,000 expert-written rubric criteria. Each task is a partner-to-associate assignment — draft this agreement, find the issues in this data room — and the agent must hand back reviewable work product. Grading is all-pass: a deal memo that catches eight of ten risks scores as incomplete, because that's how partners review work.

I ran the same model through it twice:

- **The stock harness** (1,251 tasks): LAB's default setup. Six generic tools — bash, read, write, edit, glob, grep — plus Pandoc (a document converter) and pdfplumber (a PDF reader).
- **My stack** (1,006 of the same tasks): the same model inside my nanoclaw container, wired to adeu, an MCP document-authoring tool built by a fellow lawyer-coder, and docling, a library that converts PDFs and Office files into text an agent can read.

The model in both runs was DeepSeek-v4-flash through Ollama. Not a frontier model. Not a legal model. A model that costs approximately nothing — though "nothing" is doing some work there: each sweep exhausted a week of my Ollama token quota, so the experiment took two weeks of waiting for a benchmark that frontier labs run in an afternoon.

My theory was simple: tools made by lawyers, for legal documents, should beat bash and Pandoc at producing legal documents. The agent would redline with a proper redlining tool, author Word files with a proper authoring chain, and the generic setup would be left improvising.

The results: the stock harness passed 84.7% of rubric criteria. My stack passed 74.8%. The stock harness produced 9 zero-score tasks; mine produced 56. Mine was also 2.6 times slower.

Ten points, in the wrong direction.

## The logs said something stranger

My first instinct was the obvious one: maybe DeepSeek just can't do legal work in my environment, or maybe the judge was unfair. Both readings were wrong, and I only found out because I stopped looking at scores and started reading run logs — over a thousand of them.

The first discovery: my agent never once told me it was done. My harness expected the model to emit a `STATUS: DONE` string when it finished. In 1,007 runs (a credit outage paused the sweep at the 1,007th), the model emitted it exactly zero times. Every single run ended because my harness guessed — either deliverable files stopped changing, or a hard deadline hit. The stock harness doesn't ask the model to announce anything: the run simply ends when the model stops calling tools, and that worked in all 1,133 of its runs. My completion mechanism had a 0% compliance rate, and I didn't know until I checked.

That guessing had a failure mode. The "files stopped changing" gate kills a run when deliverables look stable — which also describes an agent that staged a draft early and is quietly thinking. My 56 zero-score tasks have a median wall time of 241 seconds. They weren't slow failures. They were killed mid-thought. The dead completion signal is funny in a bleak way; this one is worse. I built that gate to be careful, and it spent a thousand runs terminating work in progress. In one Stark Law task, the run was cut so early that the "gap analysis" my agent shipped was the *input compliance program*, verbatim. The stock run scored 1.00 on that task. Mine scored 0.00.

Then there were the files themselves. The stock harness produced 1,431 valid Word documents out of 1,431. My stack produced 73 broken ones — files with unescaped XML and leaked format tokens, placeholder stubs that literally read "PLACEHOLDER - This file will be generated via the Adeu MCP tool chain", and finished memos saved as text under `.docx` names, like the 58 KB one that opened this post.

And the discovery that actually stung: in 100 task folders, my agent had quietly routed around the document tools I gave it. It wrote its own Node.js scripts — `build-docx.js`, `transform.js` — installed `node_modules` *inside the deliverables folder*, and built its own document pipeline from scratch rather than use the MCP chain I'd wired up for it.

I gave my agent lawyer-made tools, and it preferred to improvise its own. That made me sadder than the score did.

## It wasn't the model. It wasn't the tools either.

Here's where the post I planned to write fell apart.

The model did the legal work. In the zero-score tasks I audited, the analysis was frequently done and sometimes done well — it just never survived packaging. And the lawyer-made tooling wasn't the villain either: adeu's fingerprints are on my biggest wins as well as my worst zeros, and on mechanical work my stack actually *beat* the stock harness — more perfect-score extraction tasks (3.2% vs 1.6%) and comparison tasks (7.0% vs 5.4%). Docling, my document reader, was fully exonerated: regression had no correlation with how many documents a task read.

The model isn't wrong. The tools aren't wrong. Most of what lost me ten points was the layer I built around them: a completion signal the model never used, a stability gate that killed thinking agents, a writer that produced invalid XML, and a two-stage authoring workflow that sometimes never ran its second stage. Four engineering defects, all mine, all invisible in the score.

These are also exactly the defects you'd predict when one person is the engineer, the lawyer, the tester, and the QA department. Nobody rubber-ducked my completion logic. No test suite validated my document writer before it ran a thousand tasks. Frontier labs have teams for this. I had a container that worked in my demos.

One honest caveat, because my own data demands it: even with every broken file excluded, documents *drafted* through my stack still scored 11.6 points worse than the stock harness's. I can't yet separate how much of that is my authoring pipeline versus the tools versus the model's fit with them — that's what an ablation rerun is for. On packaging, the verdict is in: that was me. On drafting quality, the verdict isn't in yet.

When I went looking for whether anyone had measured this properly, I found a whole research field arriving at the same place. Princeton's Holistic Agent Leaderboard team ran 21,730 agent rollouts and found the *same model* swinging up to 48 percentage points depending on which scaffold wrapped it. A position paper published last month — bluntly titled "Stop Comparing LLM Agents Without Disclosing the Harness" — puts numbers on it: on SWE-bench Pro, a leading coding benchmark, six frontier models span just 4.9 points under a single locked harness, while one of them (Claude Opus 4.5) moves 9.5 points when you change only the harness around it.

Read that again: the gap between harnesses was twice the gap between the best and worst frontier models.

My ten-point gap, on legal work, with the model held constant, is the same finding. I just got there by accident — and the researchers have a name for it: the harness, not the model, is often the binding constraint.

## When someone shows you a benchmark score

For solo counsels and small teams, this changes how to read every legal AI claim. Every benchmark score is jointly produced by a model and a harness, and the harness is the part nobody discloses. When a vendor says "our system scores X on legal tasks," the polish of their harness — the completion logic, the document writers, the retry behaviour, the packaging validation — is baked invisibly into X.

Harvey seems to understand this better than its marketing peers. LAB launched deliberately *without* a leaderboard, because Harvey says it first wants standards for normalising submissions. That's an admission worth noticing: nobody yet knows how to compare agent results fairly across different stacks. I'd put it more strongly. Benchmarks like this don't favour frontier *models* so much as they reward polished *harnesses* — which frontier labs and well-funded vendors have, and the rest of us have to build on weekends.

So before trusting any agent benchmark number, I now ask three questions:

1. **What harness produced this score?** Same model, different wrapper, ±10 points or more.
2. **Who decided when each run ended?** If the harness guesses, some runs died mid-thought — that's how a verbatim copy of an input document became my agent's "gap analysis."
3. **What happened to outputs that failed packaging?** A zero might be wrong law — or finished law in a file the judge couldn't open.

None of these appear on a leaderboard. All of them moved my results more than the model did.

## Before I blame anyone's code

There's one more place this lesson applies, and it's the reason this post isn't called "lawyer-made tools don't work."

Adeu is another lawyer-coder's open-source project. My first instinct after the loss was that the tooling had failed me. The forensics say otherwise: most of the damage came from my integration — my completion signal, my stability gate, my conversion step that never ran. Whatever share belongs to the tool itself, I can't separate it from my own engineering until I rerun the broken tasks with my defects fixed. Blaming the tool now would repeat the exact mistake the benchmark made about the model: reading a composite score as a verdict on one component.

So the plan is attribution first. Fix my four defects — starting with the obvious one, replacing the text-based done signal with a proper finish tool — rerun the ~125 broken and zero-score tasks (about 10% of a sweep), and then file what I owe the maintainer: an upstream bug report with a thousand runs of forensics attached, instead of a vague complaint that it "didn't work."

I once wrote that legal open source is a federation of solo-author archipelagos — projects that never receive the outside contributions that would make them a community. Bob Ambrogi quoted that line back at me when LAB launched, asking whether Harvey's benchmark would leave room for outsiders to shape it. Fair question. But contribution has to flow both ways — not just maintainers publishing code, but users reporting back. A stranger running your tool through 1,006 legal tasks and filing detailed bugs is what the alternative to open-source theatre actually looks like. I'd rather be that stranger than another archipelago.

## The benchmark was the product

I set out to prove my stack was better and got something more useful: the most thorough QA report my agent has ever had, nearly free. Harvey built a 75,000-criterion test suite with frontier-lab research partners; running it cost me two weeks of Ollama token quota and a credit outage that cut my second sweep short. It found four real bugs in my harness that no amount of demo-driven tinkering would have surfaced, told me exactly which work types my stack is already good at, and handed me a fix list with measurable recovery criteria.

That's the teaser for the next post: how to use someone else's benchmark as your own test suite. (And, when the rerun is done, whether my ten points come back.)

For now, the lesson I keep returning to is the one the 58 KB memo taught me. The work was good. The environment failed it. Every leaderboard score you've ever seen contains both, blended invisibly — and the same is true of your own agents.

What is your harness quietly deciding for you?
