---
title: "What 7,308 Agent Runs Taught Me About Writing Better Skills"
slug: "skillsbench-analysis"
tags: ["AI", "Programming", "CoDraft", "Article"]
status: draft
featured: false
github_folder: "skillsbench-analysis"
---

I thought I was getting good at writing skills. I've built nine of them for this blog alone — pitching posts, researching topics, curating backlinks, managing tags. Each one grew from a real frustration. Each one replaced something I used to do manually, badly.

Then my CoDraft project started failing on a task Claude could already do.

The skill told Claude to read a Word document by invoking a specific DOCX skill at a hardcoded path. Claude already knows how to read Word documents. My skill didn't add knowledge — it added a conflicting instruction that broke the workflow. The fix was deleting six lines.

That experience made me pay attention when SkillsBench dropped in February. It's the first large-scale benchmark measuring whether Agent Skills actually improve performance — 84 tasks across 11 domains, 7,308 agent runs, three commercial agent harnesses (Claude Code, Gemini CLI, Codex CLI), seven frontier models. Not opinions about skills. Data.

The headline finding: curated skills improve performance by 16.2 percentage points on average. But 16 of 84 tasks got *worse* with skills. And AI-generated skills? On average, they made things worse too.

That matched my experience exactly. Not all of it was comfortable to read.

## What the Data Actually Shows

SkillsBench tested each task under three conditions: no skills, curated skills, and self-generated skills (where the model writes its own instructions before attempting the task). The results break some assumptions.

**Curated skills help — but not universally.** The average gain is +16.2 percentage points, but that average hides enormous variation. Healthcare tasks improved by +51.9pp. Software engineering tasks? Just +4.5pp. For 16 tasks, skills actively hurt performance, with the worst case dropping 39.3 percentage points.

**Self-generated skills are useless — or worse.** When models were prompted to generate their own procedural knowledge before solving tasks, the average effect was -1.3pp. Not helpful. Slightly harmful. Only one model (Opus 4.6) showed a modest positive effect (+1.4pp). Codex with GPT-5.2 degraded by -5.6pp.

**Less is more.** This was the finding that hit hardest. Two to three focused skills per task produced +20.0pp improvement. Four or more? Just +5.2pp. Compact skills (+18.9pp) outperformed comprehensive documentation (+5.7pp) by nearly 4x.

The models couldn't extract useful guidance from long, thorough instructions. Focused beat comprehensive every time.

## Three Things I Got Wrong

Reading the SkillsBench findings against my own experience, three patterns emerged where I'd made exactly the mistakes the data predicted.

### 1. I wrote skills for things Claude already knew

My CoDraft skill included step-by-step instructions for reading PDFs and DOCX files. Claude already has built-in capabilities for both. My skill didn't teach Claude anything new — it overrode Claude's existing knowledge with a more rigid, less capable version.

The SkillsBench data explains why this backfires. Tasks where skills hurt performance the most were ones where the model already had "strong priors." The skill introduces what the paper calls "conflicting guidance" — unnecessary complexity for tasks the model handles well without help.

The worst example in the benchmark: taxonomy-tree-merge, where skills dropped performance by 39.3 percentage points. The model already knew how to merge taxonomy trees. The skill got in the way.

I had my own taxonomy-tree-merge moment. I just didn't have a benchmark to tell me.

**The lesson:** Before writing a skill, ask: does the model already do this well without one? If yes, you're not adding — you're overriding.

### 2. I made skills too comprehensive

My `generate_a_pitch` skill started as 45 lines. It worked beautifully. Over time, I added steps: a TodoWrite initialization step, a Voice Guide reading step, an authenticity check, tag suggestions, post scaffolding. It grew past 100 lines.

Each addition came from a real failure. Claude invented a vulnerability the user hadn't experienced? Add an authenticity check. Claude forgot to suggest tags? Add a tag step. Reasonable additions, each one.

But the SkillsBench data is clear: compact skills (+18.9pp) outperform comprehensive documentation (+5.7pp) by nearly 4x. Agents struggle to extract relevant information from lengthy content. The finding is counterintuitive — more guidance should help, right? It doesn't.

The paper's explanation: context burden. Every additional instruction competes for the model's attention. After 2-3 focused procedures, you hit diminishing returns. Four or more skills per task dropped from +20.0pp to +5.2pp.

I haven't pruned my 100-line skill yet. But I'm looking at it differently now.

**The lesson:** Growth isn't improvement. A skill that solves one problem well is worth more than a skill that addresses ten problems adequately.

### 3. I trusted AI-generated skills

When I first set up CoDraft in Cowork, Claude generated the initial skill for me. It was 192 lines of detailed instructions covering a 5-step contract review workflow across 19 categories. Looked impressive.

It also contained hardcoded session paths like `/sessions/jolly-exciting-bardeen/mnt/.skills/skills/pdf/SKILL.md`. That path works in exactly one session on exactly one machine. Anyone else copying the skill gets a broken workflow.

The SkillsBench data validates this at scale. Self-generated skills produced -1.3pp on average — slightly worse than no skills at all. The paper's conclusion is blunt: "models cannot reliably author the procedural knowledge they benefit from consuming."

That's worth sitting with. The same model that benefits enormously from well-written skills (+16.2pp) cannot write those skills for itself. Generating skills and using skills are fundamentally different capabilities.

**The lesson:** AI can draft a starting point. But treating AI-generated skills as production-ready is a recipe for brittle, non-portable, subtly broken workflows.

## The Model Gap Matters More Than You Think

One finding I didn't expect: skills don't flatten the gap between models. They widen it.

| Config | No Skills | With Skills | Gain |
|---|---|---|---|
| Claude Code + Opus 4.5 | 22.0% | 45.3% | +23.3pp |
| Claude Code + Sonnet 4.5 | 17.3% | 31.8% | +17.5pp |
| Claude Code + Haiku 4.5 | 11.0% | 27.7% | +18.8pp |

Opus 4.5 gained 23.3 percentage points from skills. Haiku 4.5 gained 18.8pp. The absolute gap between them grew from 11pp (without skills) to 17.6pp (with skills). Better models extract more value from the same skills.

But here's the nuance: Haiku *with* skills (27.7%) outperformed Opus *without* skills (22.0%). The paper frames this as "smaller models with Skills can match larger models without them." That's the economic argument for investing in skill quality — good skills can partially compensate for model capacity limitations.

Neither conclusion is wrong. If you're optimizing for peak performance, better models win. If you're optimizing for cost, good skills let you use cheaper models. The right answer depends on your constraints.

For resource-constrained practitioners — solo counsels running Claude on a personal subscription — that second finding matters more. You might not have access to the most capable model. But well-crafted skills close the gap more than you'd expect.

## A Framework for Skill Decisions

The SkillsBench data and my own experience converge on a set of questions worth asking before writing any skill.

**Before you write the skill:**

1. Does the model already do this well without a skill? Run the task without one first. If it works 80% of the time, a skill might hurt more than help.
2. Can you describe what the skill adds in one sentence? If you need a paragraph, it's probably too broad.
3. Is this procedural knowledge the model lacks, or general knowledge it already has? Skills work best for domain-specific workflows, not general capabilities.

**While writing the skill:**

4. Can you keep it under 50 lines? The data strongly favors compact over comprehensive.
5. Does it include a working example? The paper found the biggest performance jump came from executable code examples and reference resources.
6. Are you telling the model *what to do*, or overriding *how it already works*? The first helps. The second usually hurts.

**After deploying the skill:**

7. Have you tested with and without the skill? The paper calls this "paired evaluation" and considers it essential. Single-condition testing misses the interaction between skills and model capabilities.
8. Have you tested across models? A skill that works with Opus might fail with Haiku, or vice versa.

## What I'm Still Figuring Out

I have nine skills running this blog. Some of them are clearly better than others. The `tag-registry` skill is focused — look up tags, suggest canonical ones, prevent sprawl. It does one thing. The `generate_a_pitch` skill has grown into a mini-framework with seven steps and multiple sub-invocations.

The SkillsBench data suggests the tag registry is closer to the ideal. But the pitch skill's complexity came from real failures, not theoretical completeness. Every addition solved a problem that actually happened.

Maybe the answer isn't "keep it short" but "keep it focused." A 100-line skill that does one thing well might outperform a 30-line skill that tries to do three things. The paper tested line count and module count, but the relationship between the two isn't perfectly clear.

I also haven't solved the testing problem. The paper insists on paired evaluation — testing with and without skills. I've never done that systematically. I add a skill, it seems to work, I move on. That's anecdotal, not measured. The paper's 7,308 trajectories make my sample size look embarrassing.

For anyone building skills — whether for a blog workflow or a contract review pipeline or a legal research process — the data from SkillsBench is the first rigorous evidence we have. It confirms some intuitions (focused beats comprehensive), challenges others (more guidance doesn't mean better results), and raises questions I haven't answered yet (when exactly does a skill cross from helpful to harmful?).

The 45-line skill that replaced my 3-page prompt was one of the most satisfying things I've built. SkillsBench suggests that satisfaction wasn't misplaced — but that the instinct to keep adding to it might be.
