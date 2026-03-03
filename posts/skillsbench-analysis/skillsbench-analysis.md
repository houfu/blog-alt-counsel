---
title: "What 7,308 Agent Runs Taught Me About Writing Better Skills"
slug: "skillsbench-analysis"
tags: ["AI", "Programming", "CoDraft", "Article"]
status: draft
featured: false
github_folder: "skillsbench-analysis"
---

I thought I was getting good at writing skills. I've built nine of them for this blog alone — pitching posts, researching topics, curating backlinks, managing tags. Each one grew from a real frustration. Each one replaced something I used to do manually, badly.

Then my [CoDraft project](https://www.alt-counsel.com/two-files-one-workflow-no-code-just-cowork/) — a contract review workflow I've been building in Claude Cowork — started failing on a task Claude could already do.

The skill told Claude to read a Word document by invoking a specific DOCX skill at a hardcoded path. Claude already knows how to read Word documents. My skill didn't add knowledge — it added a conflicting instruction that broke the workflow. The fix was deleting six lines.

That experience made me pay attention when [SkillsBench](https://arxiv.org/abs/2602.12670) dropped in February 2026. It's the first large-scale benchmark measuring whether Agent Skills actually improve performance — 84 tasks across 11 domains, 7,308 agent runs, three commercial agent harnesses (Claude Code, Gemini CLI, Codex CLI), seven frontier models. Not opinions about skills. Data.

The headline finding: curated skills improve performance by 16.2 percentage points (pp) on average. But 16 of 84 tasks got *worse* with skills. And AI-generated skills? On average, they made things worse too.

That matched my experience exactly. Not all of it was comfortable to read. The "less is more" finding stung — I'd spent months making my skills longer, more thorough, more comprehensive. The self-generated skills finding was worse. I'd shipped one of those. It was 192 lines of instructions that looked impressive and broke for everyone except me.

## What the Data Actually Shows

SkillsBench tested each task under three conditions: no skills, curated skills, and self-generated skills (where the model writes its own instructions before attempting the task). The results break some assumptions.

**Curated skills help — but not universally.** The average gain is +16.2pp, but that average hides enormous variation. Healthcare tasks improved by +51.9pp. Software engineering tasks? Just +4.5pp. For 16 tasks, skills actively hurt performance, with the worst case dropping 39.3pp.

The pattern matters: skills add the most value where models have the weakest priors. Healthcare has specialized workflows and brittle formats that models haven't seen enough of. Software engineering? Models have strong priors from massive training data — skills are more likely to conflict than help. Legal work maps closer to healthcare on this axis. Contract review against jurisdiction-specific statutes, PDPA compliance checks, document classification for Singapore regulatory filings — these are exactly the domains where models lack strong priors and a focused skill can add the most value.

**Self-generated skills are useless — or worse.** When models were prompted to generate their own procedural knowledge before solving tasks, the average effect was -1.3pp. Not helpful. Slightly harmful. Only one model (Opus 4.6) showed a modest positive effect (+1.4pp). Codex with GPT-5.2 degraded by -5.6pp.

**Less is more.** This was the finding that hit hardest. Two to three focused skills per task produced +20.0pp improvement. Four or more? Just +5.2pp. Compact skills (+18.9pp) outperformed comprehensive documentation (+5.7pp) by nearly 4x.

The models couldn't extract useful guidance from long, thorough instructions. Focused beat comprehensive every time.

## Three Things I Got Wrong

Reading the SkillsBench findings against my own experience, three patterns emerged where I'd made exactly the mistakes the data predicted.

### 1. I wrote skills for things Claude already knew

My CoDraft skill included step-by-step instructions for reading PDFs and DOCX files. Claude already has built-in capabilities for both. My skill didn't teach Claude anything new — it overrode Claude's existing knowledge with a more rigid, less capable version.

The SkillsBench data explains why this backfires. Tasks where skills hurt performance the most were ones where the model already had "strong priors." The skill introduces what the paper calls "conflicting guidance" — unnecessary complexity for tasks the model handles well without help.

The worst example in the benchmark: taxonomy-tree-merge, where skills dropped performance by 39.3 percentage points. The model already knew how to merge taxonomy trees. The skill got in the way.

I had my own taxonomy-tree-merge moment. I just didn't have a benchmark to tell me. (I'd already seen a version of this when [building CLI tools for Claude Code](https://www.alt-counsel.com/i-built-cli-tools-for-claude-code-heres-what-i-learned-about-designing-for-ai-users/) — Claude ignored the documentation I wrote and hallucinated flags based on training data patterns. Strong priors override instructions.)

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

It also contained hardcoded session paths like `/sessions/jolly-exciting-bardeen/mnt/.skills/skills/pdf/SKILL.md`. That path works in exactly one session on exactly one machine. Anyone else copying the skill gets a broken workflow. That's a portability failure — a failure mode the benchmark doesn't directly test, but one that matters in practice.

What the SkillsBench data *does* validate at scale is the authoring problem. Self-generated skills produced -1.3pp on average — slightly worse than no skills at all. The paper's conclusion is blunt: "models cannot reliably author the procedural knowledge they benefit from consuming."

That's worth sitting with. The same model that benefits enormously from well-written skills (+16.2pp) cannot write those skills for itself. Generating skills and using skills are fundamentally different capabilities.

**The lesson:** AI can draft a starting point. But treating AI-generated skills as production-ready is a recipe for brittle, non-portable, subtly broken workflows.

## The Model Gap Matters More Than You Think

One finding I didn't expect: skills don't flatten the gap between models. They widen it.

| Config | No Skills | With Skills | Gain |
|---|---|---|---|
| Gemini CLI + Flash | 31.3% | 48.7% | +25.3pp |
| Claude Code + Opus 4.5 | 22.0% | 45.3% | +23.3pp |
| Codex + GPT-5.2 | 30.6% | 44.7% | +20.3pp |
| Claude Code + Opus 4.6 | 30.6% | 44.5% | +20.0pp |
| Gemini CLI + Pro | 27.6% | 41.2% | +18.8pp |
| Claude Code + Haiku 4.5 | 11.0% | 27.7% | +18.8pp |
| Claude Code + Sonnet 4.5 | 17.3% | 31.8% | +17.5pp |

The full picture is more interesting than any single harness. Gemini Flash actually had the highest absolute pass rate with skills (48.7%), while Claude Code + Opus 4.5 had the largest gain (+23.3pp). Harness design matters as much as model capability — the same model through different harnesses produces different results.

But zoom into the Claude Code rows, where I have personal experience. Opus 4.5 gained 23.3pp from skills. Haiku 4.5 gained 18.8pp. The absolute gap between them grew from 11pp (without skills) to 17.6pp (with skills). Better models extract more value from the same skills.

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

I have nine skills running this blog. The one I'm most worried about is `generate_a_pitch`. It started as 45 focused lines and now has seven steps, multiple sub-skill invocations, an authenticity check, a tag validation step, and a post scaffolding step. It does one thing — generate a pitch — but it orchestrates five other concerns along the way. Every addition came from a real failure. I still haven't pruned it, because I can point to the specific incident that justified each addition.

The SkillsBench data suggests my `tag-registry` skill is closer to the ideal: look up tags, suggest canonical ones, prevent sprawl. One thing. The pitch skill's complexity came from real problems, not theoretical completeness. But maybe that's the trap — the paper's 4x difference between compact and comprehensive isn't about intentions. It's about what models can actually hold in context.

I also haven't solved the testing problem. The paper insists on paired evaluation — testing with and without skills — and considers it essential. I've never done that. Not once. I add a skill, it seems to work, I move on. The paper ran 7,308 trajectories with deterministic verifiers. My testing methodology is "did it seem better this time?" That gap between rigorous evaluation and weekend-builder guesswork is something I think about but haven't bridged. When you're building alone in the evenings, "run it both ways and compare" competes with "ship it and move on." Ship usually wins.

The [45-line skill that replaced my 3-page prompt](https://www.alt-counsel.com/lawyers-prompt-engineering-wrong/) was one of the most satisfying things I've built. SkillsBench suggests that satisfaction wasn't misplaced — but that the instinct to keep adding to it might be.

Have you been building skills? I'd genuinely like to know: which ones helped, which ones got in the way, and whether anyone has actually done the paired testing I keep avoiding.
