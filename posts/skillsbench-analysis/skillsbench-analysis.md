---
title: "What 7,308 Agent Runs Taught Me About Writing Better Skills"
slug: "skillsbench-analysis"
tags: ["AI", "Programming", "CoDraft", "Article"]
status: published
featured: false
github_folder: "skillsbench-analysis"
custom_excerpt: "SkillsBench tested 84 tasks across 7,308 agent runs and found curated skills boost performance by 16pp — but 19% of tasks got worse. It is a great backdrop to the things I have learnt too."
post_id: "69a6d5c6a327510001324998"
published_at: "2026-03-04T04:05:06.000Z"
feature_image: "https://www.alt-counsel.com/content/images/2026/03/photo-1554825959-e9a6670d4f18.jpeg"
---

I thought I was getting good at writing skills. I’d built nine for this blog already and they were buzzing along nicely.

Then I started building Codraft — a contract generator workflow I’ve been building in Claude Cowork. It taught me there were still new things to learn and old habits to undo.

[Two Files, One Workflow. No Code. Just Cowork.](https://www.alt-counsel.com/two-files-one-workflow-no-code-just-cowork/)

One of CoDraft’s tasks is converting Word documents to PDF. In Cowork, you can’t install tools like `soffice`  to perform such conversions. Claude didn’t know this, so it wrote a skill that tried to use `soffice` anyway.

The result was a loop. The skill told Claude to use `soffice`. That failed. Claude tried random alternatives instead of stopping. I then updated the skill to say "don’t install `soffice`, just use the built-in tools." But the built-in tools also tried to call `soffice` under the hood. So Claude obeyed my instruction, hit the same wall, and started guessing again. From the outside, it looked like Cowork couldn’t convert documents — when it actually could.

That experience made me pay attention when [SkillsBench](https://arxiv.org/abs/2602.12670) dropped in February 2026. It's the first large-scale benchmark measuring whether Agent Skills actually improve performance — 84 tasks across 11 domains, 7,308 agent runs, three commercial agent harnesses (Claude Code, Gemini CLI, Codex CLI), seven frontier models. Not opinions about skills. Data.

The headline finding: curated skills improve performance by 16.2 percentage points (pp) on average. But 16 of 84 tasks got **worse** with skills. And AI-generated skills? On average, they made things worse too.

That matched my experience exactly. Not all of it was comfortable to read. The “less is more” finding stung — every prompt engineering course tells you to be detailed and specific, to lay it out as much as you can so that you control the model’s output. Instead you were drowning your AI agent in instructions it couldn’t use.

## What the Data Actually Shows

SkillsBench tested each task under three conditions: no skills, curated skills, and self-generated skills (where the model writes its own instructions before attempting the task). The results break some assumptions.

*Curated skills help — but not universally.* The average gain is +16.2pp, but that average hides enormous variation. Healthcare tasks improved by +51.9pp. Software engineering tasks? Just +4.5pp. For 16 tasks, skills actively hurt performance, with the worst case dropping 39.3pp.

The pattern matters: skills add the most value where models have the weakest priors. Healthcare has specialized workflows and brittle formats that models haven't seen enough of. Software engineering? Models have strong priors from massive training data — skills are more likely to conflict than help. 

Legal work maps closer to healthcare on this axis. Contract review against jurisdiction-specific statutes, PDPA compliance checks, document classification for Singapore regulatory filings — these are exactly the domains where models lack strong priors and a focused skill can add the most value.

*Self-generated skills are useless — or worse.* When models were prompted to generate their own procedural knowledge before solving tasks, the average effect was -1.3pp. Not helpful. Slightly harmful. Only one model (Opus 4.6) showed a modest positive effect (+1.4pp). Codex with GPT-5.2 degraded by -5.6pp.

*Less is more.* Two to three focused skills per task produced +20.0pp improvement. Four or more? Just +5.2pp. Compact skills (+18.9pp) outperformed comprehensive documentation (+5.7pp) by nearly 4 times. 

The models couldn't extract useful guidance from long, thorough instructions. Focused beat comprehensive every time.

## Three Things I Learnt

Reading the SkillsBench findings against my own experience, three patterns emerged where I'd made exactly the mistakes the data predicted.

### 1. I wrote skills for things Claude already knew

My CoDraft skill included step-by-step instructions for reading PDFs and DOCX files. Claude already has built-in capabilities for both. My skill didn't teach Claude anything new — it overrode Claude's existing knowledge with a more rigid, less capable version.

The SkillsBench data explains why this backfires. Tasks where skills hurt performance the most were ones where the model already had "strong priors." The skill introduces what the paper calls "conflicting guidance" — unnecessary complexity for tasks the model handles well without help.

The worst example in the benchmark: taxonomy-tree-merge, where skills dropped performance by 39.3 percentage points. The model already knew how to merge taxonomy trees. The skill got in the way.

[I Built CLI Tools for Claude Code. Here's What I Learned About Designing for AI Users](https://www.alt-counsel.com/i-built-cli-tools-for-claude-code-heres-what-i-learned-about-designing-for-ai-users/)

 The lesson wasn't just that my skill was wrong. It was that no skill was the right answer.

*The lesson:* Before writing a skill, run the task without one first. If the model already handles it well, you're not adding capability — you're adding confusion. Sometimes the best skill is no skill at all.

### 2. The longer the skill, the less it helps

CoDraft started out very simple. It just had to find variables and ask the user questions to fill them in. As I started considering new features, it started to blossom in size. With example templates, more instructions and more things to consider, executing a task started to slow down. You could literally watch the agent read my files. 

I imagined CoDraft to be distributed in email attachments and Teams and Slack messages. I wanted it small enough to share without thinking twice. At 185kb, it had grown unwieldy. When I started mowing down the numbers of lines in my skills by about 50%, I stumbled onto a startling discovery. The skills ran faster, without noticeable decreases in quality.

![black and white card on white table](https://images.unsplash.com/photo-1620046311691-5d93d65f69e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDF8fEZsb3BweXxlbnwwfHx8fDE3NzI1OTY0ODN8MA&ixlib=rb-4.1.0&q=80&w=2000)
I believe this is the best way to distribute software. (Photo by [Fernando Lavin](https://unsplash.com/@filmlav) / [Unsplash](https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit))

The SkillsBench data makes that clear too: compact skills (+18.9pp) outperform comprehensive documentation (+5.7pp) by nearly 4x. Agents struggle to extract relevant information from lengthy content. The finding is counterintuitive — more guidance should help, right? It doesn't.

The paper's explanation: context burden. Every additional instruction competes for the model's attention. After 2-3 focused procedures, you hit diminishing returns. Four or more skills per task dropped from +20.0pp to +5.2pp.

*The lesson:* Brevity isn’t just elegance. It’s performance. Make every word in your context count.

### 3. AI-generated skills can’t take you far

In my post on Cowork, I encouraged readers to take the plunge into writing their skills by asking Claude to write them for you. To be frank, I don’t write any of these skills by hand. I trusted AI to optimise itself. 

At some level, that advice is ridiculous. If AI can write all this stuff by itself, why doesn’t AI just do it already? This is the jagged frontier of AI capability — models can be expert-level at using skills but completely unable to write good ones. When the AI does not know, it cannot create out of thin air.

The SkillsBench data demonstrates this problem at scale. Self-generated skills produced -1.3pp on average — slightly worse than no skills at all. The paper's conclusion is blunt: "models cannot reliably author the procedural knowledge they benefit from consuming."

That's worth sitting with. The same model that benefits enormously from well-written skills (+16.2pp) cannot write those skills for itself. Generating skills and using skills are fundamentally different capabilities.

Does that mean humans are now absolutely necessary? I don’t think it means any human would make skills better. You need strong understanding of your models and the environment you are working on, as well as domain knowledge to make skills work. 

*The lesson:* AI can draft a starting point. But treating AI-generated skills as production-ready is a recipe for disappointment.

## The Model Gap Matters More Than You Think

One finding I was looking forward to reading more about: skills don't flatten the gap between models. They widen it.

| Config | No Skills | With Skills | Δ abs (pp) | g (%) |
|---|---|---|---|---|
| Gemini CLI + Flash | 31.3% | 48.7% | +17.4 | 25.3 |
| Claude Code + Opus 4.5 | 22.0% | 45.3% | +23.3 | 29.9 |
| Codex + GPT-5.2 | 30.6% | 44.7% | +14.1 | 20.3 |
| Claude Code + Opus 4.6 | 30.6% | 44.5% | +13.9 | 20.0 |
| Gemini CLI + Pro | 27.6% | 41.2% | +13.6 | 18.8 |
| Claude Code + Sonnet 4.5 | 17.3% | 31.8% | +14.5 | 17.5 |
| Claude Code + Haiku 4.5 | 11.0% | 27.7% | +16.7 | 18.8 |

The full picture is more interesting than any single harness. Gemini Flash actually had the highest absolute pass rate with skills (48.7%), while Claude Code + Opus 4.5 had the largest gain (+23.3pp). Harness design matters as much as model capability — the same model through different harnesses produces different results.

But zoom into the Claude Code rows, where I have personal experience. Opus 4.5 gained 23.3pp from skills. Haiku 4.5 gained 18.8pp. The absolute gap between them grew from 11pp (without skills) to 17.6pp (with skills). Better models extract more value from the same skills.

But here's the nuance: Haiku **with** skills (27.7%) outperformed Opus **without** skills (22.0%). The paper frames this as "smaller models with Skills can match larger models without them." That's the economic argument for investing in skill quality — good skills can partially compensate for model capacity limitations.

Neither conclusion is wrong. If you're optimizing for peak performance, better models win. If you're optimizing for cost, good skills let you use cheaper models. The right answer depends on your constraints.

For resource-constrained practitioners — solo counsels running Claude on a personal subscription — that second finding matters more. You might not have access to the most capable model. But well-crafted skills close the gap more than you'd expect.

## A Framework for Skill Decisions

The SkillsBench data and my own experience converge on a set of questions worth asking before writing any skill.

1. Does the model already do this well without a skill? Run the task without one first. If it works 80% of the time, a skill might hurt more than help.
2. Can you describe what the skill does in sentences? If you need paragraphs and pages, you have to think harder about the content and structure of the skill.
3. Is this procedural knowledge the model lacks, or general knowledge it already has? Skills work best for domain-specific workflows, not general capabilities.
4. Can you keep the skill small? The data strongly favors compact over comprehensive.
5. Does it include a working example? The paper found the biggest performance jump came from executable code examples and reference resources.
6. Are you telling the model **what to do**, or overriding **how it already works**? The first helps. The second usually hurts.
7. Have you tested with and without the skill? The paper calls this "paired evaluation" and considers it essential. Single-condition testing misses the interaction between skills and model capabilities.
8. Have you tested across models? A skill that works with Opus might perform differently for  Haiku, and if you plan to share them with others, you need to take that into account.

I hope this helps you build better skills. One thing I still haven't done: paired testing — running the same task with and without the skill to measure the difference. Have you? I'd genuinely like to know.
