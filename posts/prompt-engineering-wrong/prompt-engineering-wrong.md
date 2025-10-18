---
title: "Lawyers Got Prompt Engineering Wrong (And Why That Matters)"
slug: "lawyers-prompt-engineering-wrong"
tags: ["legal-tech", "AI", "Singapore", "prompt-engineering", "agents"]
status: draft
featured: True
---

# Lawyers Got Prompt Engineering Wrong (And Why That Matters)

[**LinkedIn image: 2024 vs 2025 - From 3-page prompts to reusable frameworks**]

This isn't about productivity tips. It's about a fundamental architectural shift that happened in September 2025.

## The Inflection Point (September 2025)

At TechLawFest 2025, Singapore's premier legal tech event, the standing-room-only workshop was "Unlocking the Power of Prompt Engineering with Generative AI." The Singapore Academy of Law and Singapore Corporate Counsel Association taught lawyers how to write better prompts. The Ministry of Law's official guide endorsed this approach: "Refine prompts to introduce clearer constraints... Document best practices to guide users in crafting more effective prompts."

Meanwhile, the technology was shifting underneath them.

On September 9, Anthropic announced Claude could create and edit files. Someone [reverse engineered it](https://claude.ai/share/0fe5a9c0-4e5a-42a1-9df7-c5b7636dad92) and found a sophisticated system called "Skills"—reusable frameworks, not one-time prompts.

On September 18, Simon Willison finally formalized what "agent" means: "An LLM agent runs tools in a loop to achieve a goal." One week after TechLawFest taught prompt engineering.

On October 17, Anthropic made Skills available to everyone. Domain-specific expertise could now be encoded as composable, reusable systems.

TechLawFest taught what lawyers needed for chat-based tools—but the technology landscape was shifting beneath them. 

## Two Paradigms - Chat vs Agents

Here's the same task—generating a term sheet for a cross-border acquisition—using both approaches.

### 2024: The 3-Page Prompt

I needed Claude to generate a comprehensive M&A term sheet. I wrote a 3-page prompt with step-by-step instructions:

**Context section:** "You are a legal advisor to the acquirer. Acquirer: Netcore Limited, a multinational corporation with a significant presence in Singapore. Target: Showytunes Pte Ltd..."

**Task section:** "Prepare a comprehensive term sheet for this acquisition. Output the term sheet in the form of a HTML page."

**Approach section:** "Be innovative and creative. Aim to impress your client. Balance the interests of both parties. Use formal legal language..."

Then 6 major sections, each with multi-step instructions. Executive Summary alone had three steps from industry analysis to final output. Key Agreement Terms had six steps including verification checkpoints. Three pages of procedural instructions. Every step specified. Every output format defined.

This worked. Claude produced an excellent term sheet. But I had to write this entire prompt every time I needed a term sheet, adjusting company names and specific concerns case-by-case.

I wrote this for a 2024 SAL/Microsoft prompt writing competition—a diligent student following the manual. GCES framework, mind-blowing formatting, the works. I wasn't proud of it—three pages of painstaking detail felt excessive. Ironically, I was disqualified for missing the deadline. (Took too much time perfecting the prompt?)

### 2025: The Reusable Skill

Now I have a "Generate a pitch" skill (one of many). It's 45 lines defining principles and process:

```markdown
---
name: Generate a pitch
description: Define the scope of an article or newsletter
when_to_use: at the beginning of drafting an article or newsletter
---

## Overview
A pitch is a critical step in writing a blog that ensures that the aim
of the post is clear and within a manageable scope. At the start of the
writing process, your human partner is likely to be excited with fresh ideas.
Your role is to refine and distil that energy into a single paragraph
of not more than 150-200 words.

## Success criteria
The pitch is perfect when:
1. It can be used to develop an outline of a suitable length...
2. It should be obvious that the final product will be engaging...
3. It should be possible to see what kinds of research are needed...
4. It should be in a narrative form...

## The process
### Step 1: An idea
The human partner has suggested an idea which is suitable for developing
a pitch. If it is still too vague, use "skills/brainstorming"...

### Step 2: Develop the pitch
From the idea, generate a pitch. You must imagine that we are in an
elevator with our readers...

### Step 3: Scaffold the post
- Create the folder structure using the title
- Save the pitch in that folder under the file "pitch.md"
- Save the discussion using "skills/note-taking"...
```

Now when I tell Claude Code "I want to write about prompt engineering," the agent:
1. Reads the "generate_a_pitch" skill
2. Reads the "brainstorming" skill
3. Asks clarifying questions following the Socratic method
4. Generates a pitch following success criteria
5. Creates folder structure
6. Saves files in the right places
7. Updates discussion.md automatically

I didn't specify those steps this time. The skill framework guides the agent through the process autonomously. The agent adapts the framework to the specific writing task.

## Why Agents Change Everything

The critical difference isn't tool access. Harvey can search LexisNexis. ChatGPT can search the web. Both have tools.

The difference is **who controls the decision-making logic**.

Think about contract review. Every legal team has different needs:
- Some need aggressive redlining because they're risk-averse
- Some need balanced reviews because they want deals to close
- Some need different approaches for different counterparties
- Some need to escalate certain issues immediately, others can be flagged for later

There are three approaches to solving this:

**1. Chat-based tools (ChatGPT, Claude.ai):**
Every time you review a contract, you write a prompt explaining your approach. "Review this NDA. We're risk-averse so flag all deviations. Focus on IP and confidentiality duration."

You're programming the logic each time, via prompts.

**2. Persistent context tools (Custom GPTs, Claude Projects):**
You write your instructions once: "You are an NDA reviewer for a risk-averse legal team. Always flag deviations from standard terms. Pay special attention to IP and confidentiality duration."

Now you just upload contracts and say "review this."

This is better—you automated the prompt building. But you're still just writing a better initial prompt. The custom GPT can't change course when it encounters issues. It can't check if the counterparty is in your approved vendors list and adjust its approach. It can't search your template library to verify deviations. It applies the same static instructions every time, regardless of context.

**3. Enterprise vendor tools (Harvey, CoCounsel):**
The vendor builds predetermined workflows. Harvey decides when to search LexisNexis and how to structure results. CoCounsel decides how to analyze depositions.

If their workflow matches your needs, great. If not, you adapt to their system or pay for customization.

This works—when vendors get it right, they make serious money. But you're working within their decision-making framework.

**Here's what changed with agent skills:**

You now have access to powerful models AND the ability to program the decision-making yourself.

Example: I need to draft blog posts. My workflow is specific:
- Start with brainstorming (Socratic method, multiple rounds)
- Generate pitch (150-200 words, must have narrative structure)
- Only then create outline
- Save everything in structured folders
- Update discussion log after each session

I could write this as a detailed prompt each time. Or I could use a vendor tool that has "content creation workflow" and adapt my process to theirs.

Instead, I wrote skills:
- `brainstorming` skill: defines when to probe deeper vs. when to move forward
- `generate_a_pitch` skill: defines success criteria and process
- `note-taking` skill: defines what to capture and where to save it

The agent reads the relevant skills and executes my workflow logic. Not a vendor's predetermined workflow. Mine.

**Why this matters for legal work:**

Legal work requires context-specific judgment:

*When reviewing an NDA:*
- Is this a quick mutual NDA with a trusted vendor? Be general, focus on major red flags.
- Is this with a new startup where we're the stronger party? Be specific about IP clauses.
- Is this with a Fortune 500 where they won't budge? Flag issues but don't suggest redlines they'll reject.

A vendor tool makes these decisions once, builds their workflow, and sells it to everyone. You write prompts to work within their logic.

With skills, you encode your firm's judgment. Here's a simple starter skill you could actually use:

```markdown
---
name: NDA Quick Review
description: Review NDAs against standard terms
when_to_use: When reviewing mutual NDAs for quick deals
---

## What to Check

### Critical Clauses (Must Review)
1. **Confidentiality Period**: Should be 2-3 years from disclosure
2. **Definition of Confidential Information**: Must exclude publicly available info
3. **Return/Destruction**: Must include obligation to return/destroy at end
4. **No IP Transfer**: Confirm receiving confidential info doesn't grant IP rights

### Red Flags (Escalate if Found)
- Exclusivity or non-compete language
- Unilateral NDA (we disclose, they don't)
- Indemnification beyond standard confidentiality breach
- Survival period over 5 years

## Output Format
Create a summary with:
- Pass/Flag status for each critical clause
- List of any red flags found
- Recommendation: Approve / Request changes / Escalate
```

**How to use this:** Save it as `nda-review.md` in your skills folder. When you ask Claude Code to review an NDA, it reads this skill, checks the clauses you specified, and formats output your way. You just wrote your firm's NDA review logic once - now it applies to every NDA.

**This is the paradigm shift:**

Not that agents have tools (vendors provide tools too).

But that you control the decision-making logic. You decide when to be specific vs. general. You encode your judgment about your practice, your clients, your risk tolerance.

Prompt engineering teaches you to write better instructions within someone else's system. Skills let you program the system itself.

Prompt engineering frameworks help you write better prompts for predetermined systems. But when you can program the decision-making yourself, you need to think like a system designer, not a prompt writer.

## The Trade-Offs

For resource-constrained legal teams, the choice between vendor tools and custom skills comes down to two questions: What can you afford? And what risks can you accept?

### Economics

Vendor tools charge per seat, per month. A vendor might charge $50/user/month for contract review—$600/year for a solo counsel, $6,000/year for a 10-person team.

Custom skills cost your time upfront to design and debug, then run on API credits (typically $20-50/month regardless of team size). For solo counsels, they could run on your personal Claude subscription.

The economics shift when you control the system. But economics isn't the only consideration.

### Security and Compliance

**Let's address the elephant in the room:** Vendor tools come with enterprise support, guaranteed uptime SLAs, and dedicated compliance teams. Custom skills require more self-reliance.

This matters. If you're in a regulated industry, handling sensitive client data, or need to explain your AI usage to a board, vendor tools have operational advantages.

**The trade-off:** Vendor tools provide dedicated account teams, enterprise support SLAs, and help navigating compliance frameworks. Custom skills require self-service support and building your own compliance documentation.

**Practical guidance:**

1. **Don't use custom skills for highly sensitive work initially.** Start with internal workflows that don't touch client data: legal ops, matter management, internal research, template drafting.

2. **Understand your confidentiality obligations.** When client data goes to any third-party API (Anthropic, Harvey, CoCounsel), you're trusting their security. Anthropic has SOC 2 Type II certification. Read their terms. Some firms require vendor contracts with specific indemnification clauses—Anthropic's enterprise plans offer this, but API-only access might not meet your firm's vendor management requirements.

3. **Start with low-risk use cases.** If a skill produces bad analysis for an internal memo, that's a learning experience. If it produces bad analysis for client-facing work, that's a liability. Build confidence on low-stakes tasks first.

4. **Know when vendor tools are the right answer.** If your organization needs dedicated account teams, guaranteed SLAs, or help explaining AI usage to regulators, vendor tools provide operational support that DIY approaches can't match. When things break, you call your account manager—not troubleshoot yourself. For mission-critical workflows, that infrastructure matters. Use prompt engineering to work effectively within those systems.

**The honest answer:** For solo counsels and small teams working on internal processes, custom skills are manageable. For large firms, regulated industries, or client-facing work requiring compliance certification, vendor tools make more sense—at least until you build confidence with skills on lower-risk tasks.

Don't use custom skills for everything. Use them where the risk/reward makes sense for your practice.

## What This Means for You

Singapore's legal establishment is teaching prompt engineering to get lawyers comfortable with GenAI. For chat-based tools, it still works. But September 2025 changed the game.

If you care enough about prompts to learn frameworks—if you attended that standing-room-only workshop—you already have the mindset to build systems.

**The real choice isn't between prompt engineering and agent skills.** It's between working within vendor systems versus building your own.

**What you should actually do:**

1. **Learn prompt engineering for chat tools** - If you use ChatGPT or Claude.ai conversationally, GCES and CO-STAR help. Don't ignore them.

2. **But also learn system design for agents** - Understand how skills work. Experiment with Claude.ai. Build one custom workflow for a task you do repeatedly.

3. **Start small, think reusable** - Don't build a complex system immediately. Pick one workflow (contract review, research memo, client intake) and encode your judgment as a skill.

4. **Recognize the paradigm difference** - Prompts optimize within constraints. Skills program decision-making. The skills you learn for one don't transfer to the other.

## Conclusion

The lawyers at that standing-room-only TechLawFest workshop weren't wrong to attend. Learning prompt engineering isn't a mistake—it's just incomplete preparation for what's coming.

September 2025 was the inflection point. The technology shifted from tools you prompt to systems you program. Singapore's legal establishment will catch up eventually. The question is whether you wait for institutional guidance or start building now.

For solo counsels and small legal teams, this matters more than it does for big firms. You can't outspend them on vendor tools. But you can outbuild them by encoding your specific expertise into reusable systems that work exactly how you need them to.

The standing-room-only workshop taught you how to write better prompts. Now it's time to learn how to build better systems.

---

## References

1. Simon Willison, "I think 'agent' may finally have a widely enough agreed upon definition to be useful jargon now," September 18, 2025. https://simonwillison.net/2025/Sep/18/agents/

2. TechLawFest 2025 Program, "Unlocking the Power of Prompt Engineering with Generative AI," September 10-11, 2025. Singapore Academy of Law and Singapore Corporate Counsel Association.

3. Anthropic, "Claude can now create and use files," September 9, 2025. https://www.anthropic.com/news/create-files

4. Anthropic, "Equipping Agents for the Real World with Agent Skills," October 2025. https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills

5. Ministry of Law, Singapore, "Guide for Using Generative AI in the Legal Sector," September 2025 (Draft for Public Consultation).

6. Singapore Academy of Law and Microsoft Corporation, "Prompt Engineering for Lawyers," 2024.

7. GitHub, "Copilot coding agent is now generally available," September 25, 2025. https://github.blog/changelog/2025-09-25-copilot-coding-agent-is-now-generally-available/

8. Microsoft, "Vibe working: Introducing Agent Mode and Office Agent in Microsoft 365 Copilot," September 29, 2025. https://www.microsoft.com/en-us/microsoft-365/blog/2025/09/29/vibe-working-introducing-agent-mode-and-office-agent-in-microsoft-365-copilot/
