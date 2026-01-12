---
title: "I Build Infrastructure. Jamie Vibe Codes Tools. Here's What I'm Missing."
slug: "tool-vs-infrastructure-mindset"
tags: ["LegalTech", "Programming", "AI"]
status: draft
featured: false
github_folder: "jamie-tso-vibe-coding"
---

I compared my GitHub to Jamie Tso's and felt unproductive.

My profile: 70 repositories, a redlines library with 148 stars and 177,000 monthly downloads on PyPI, top 10% quality ranking. Years of work.

His profile: 4 tools built in 2-3 months using "vibe coding"—LLMs generating TypeScript code from natural language descriptions.

The velocity gap was stark. RedlineNow, his instant redline tool with AI summaries: 5 commits over 2 days in December 2025. Done. Shipped. Thirty stars and 11 forks.

My redlines library: hundreds of commits over 3 years. Continuous refinement, edge case handling, API documentation.

**30-90x velocity difference.**

My first reaction: What am I doing wrong?

Then I read my own blog post about the redlines library:

> "Every line of code is a long-term liability. Every 'yes' today means maintenance forever... Scope is your most important feature. I've been tempted by features that seem obvious. They remain open because I haven't found a way to implement them that preserves redlines' core reliability."

I realized: This isn't a productivity problem. It's a philosophy problem.

**I build infrastructure. Jamie builds tools.** Neither is wrong. But applying the wrong mindset to the wrong problem kills velocity.

## Two Mindsets

There are two fundamentally different ways to approach building legal tech. Most lawyers unconsciously pick the wrong one.

### The Tool Mindset

Jamie's approach optimizes for immediate utility.

**Characteristics:**
- Solves MY problem THIS WEEK
- Ships when 5 colleagues say it works
- Quality bar: "Does it work?"
- If it breaks, rebuild it
- Development time: days to weeks

Take RedlineNow:
- First commit: December 6, 2025
- Latest commit: December 7, 2025
- Total commits: 5
- No tests, no CI/CD, no edge case handling
- Ships when it redlines contracts for his Clifford Chance team

Done in 2 days. Thirty stars. Eleven forks. It works.

Or SignaturePacketIDE—automated signature packet generation for M&A deals. Five commits total. Twenty stars, fourteen forks. The most-forked project, proving real usage in BigLaw deal teams.

Jamie's philosophy, from interviews:

> "Pick one painful workflow, prototype fast, ship to 3-5 power users, iterate weekly... Decide build vs buy with a checklist, not by defaulting to either path."

He asks: "Does a vendor tool exist for this niche workflow? No? Can I build it in a weekend? Yes? Ship it."

### The Infrastructure Mindset

My approach optimizes for permanence.

**Characteristics:**
- Solves EVERYONE's problem for YEARS
- Ships when production-ready
- Quality bar: "Will this work in 5 years when 177K users depend on it?"
- If it breaks, thousands suffer
- Development time: months to years

The redlines library:
- Hundreds of commits over 3 years
- Comprehensive test suite
- API documentation hosted at houfu.github.io/redlines
- Published on PyPI with semantic versioning
- 177,000 monthly downloads
- Top 10% quality ranking

I wrote about this:

> "Scope is your most important feature... I've been tempted by features that seem obvious. I even opened issues for PDF, HTML, and Word document handling myself. They remain open because I haven't found a way to implement them that preserves redlines' core reliability—and that's the discipline narrow scope requires."

Or take data.zeeker.sg—Singapore's first public legal news API. One hundred fifty hours over months building:
- 346 legal articles professionally summarized
- Full-text search and SQL interface
- REST API with multiple export formats
- CC-BY-4.0 license for AI training
- Careful architectural decisions for sustainability

Infrastructure that serves researchers, journalists, and AI builders. Built to last years.

### Why Lawyers Default to Infrastructure Thinking

Legal training hammers certain habits into us:

1. **Precedent and reliability:** Every decision must withstand scrutiny
2. **Edge cases and risk management:** "What if someone sues?"
3. **Professional responsibility:** Your work affects real people
4. **Defensibility over speed:** Better late than wrong

These instincts serve us well in legal practice. They kill velocity in tool building.

When I think about building a contract review helper, my automatic questions:
- "What if other firms need this?" → Start designing for everyone
- "What about edge cases?" → Catalog 47 contract types
- "Should this be reusable?" → Build a library, not a tool
- "What about security compliance?" → Research SOC 2 requirements
- "How do I maintain this long-term?" → Agonize over technical debt

Result: Three months of planning. Nothing shipped.

Jamie asks different questions:
- "Does it review MY contracts?"
- "Will it help my team THIS WEEK?"
- "Can 5 colleagues use it?"

Result: Ships in 3 days. Team uses it 20 times per week.

**The paralysis comes from asking infrastructure questions about tool problems.**

## What Makes Jamie's Vibe Coding Work

Jamie ships 30-90x faster because he's optimized for a different goal.

Look at his repository patterns:

**RedlineNow:** 5 commits in 2 days, no tests, ships when it works, 30 stars
**SignaturePacketIDE:** 5 commits, similar velocity, 20 stars and 14 forks
**Tabular_Review:** 8 commits over 6 days, has Docker but no tests, 14 stars

**The pattern:** Ship when it works. No iterative refinement. Tools appear "done" after initial commits.

This is vibe coding in action:

1. Describe what you want in natural language
2. LLM generates TypeScript code
3. Test with 5 colleagues
4. Ship when they confirm it works
5. Move to next tool

Why is it fast?

**He avoids every infrastructure decision:**
- No tests (works for his team's use case)
- No CI/CD (deploys manually when needed)
- No edge case handling (team knows the constraints)
- No documentation (team understands context)
- No maintenance burden (rebuild if it breaks)

When building RedlineNow, Jamie doesn't ask:
- ❌ "What if users have different file formats?"
- ❌ "What if this needs to scale to 1,000 users?"
- ❌ "Should I write unit tests?"

He asks:
- ✅ "Does it redline the contracts my team reviews?"
- ✅ "Can I ship by Friday?"
- ✅ "Do 5 colleagues find it useful?"

**Jamie doesn't carry infrastructure weight.** His tools serve his Clifford Chance team. If they break, he fixes them for that team. No one else critically depends on them.

The fourteen forks on SignaturePacketIDE suggest others find value. But if Jamie stops maintaining it tomorrow, those teams can fork and maintain their own versions. No 177K users depending on daily reliability.

## What I'm Missing

My unconscious infrastructure questions kill velocity on projects that need tool thinking.

Real example: I wanted to build a contract review helper for my work.

**What I did (infrastructure thinking):**

First, I researched similar tools. Cataloged requirements from multiple firms. Designed a flexible architecture that could handle various contract types. Sketched out a plugin system for custom review rules. Investigated security compliance requirements.

Three months later: Comprehensive design document. Zero lines of working code.

**What I should have done (tool thinking):**

Weekend 1: Vibe code a script that reviews the 3 contract types I actually see weekly
Weekend 2: Test with my work, refine the prompts
Weekend 3: Share with 2 colleagues, incorporate feedback
Total: 3 weeks to working tool

If requirements change next year? Rebuild it in another weekend. Cost: 6 days of effort total. Benefit: 52 weeks of productivity.

### The Mental Model Shift I Need

My current assumption: "If I'm building something, it should be done right (infrastructure standard)."

The framework I need:
- Building a **TOOL**? → Tool standard (works for my team, disposable)
- Building **INFRASTRUCTURE**? → Infrastructure standard (works for everyone, permanent)

The problem: I treat every project as infrastructure.

Consider data.zeeker.sg again. Did that need infrastructure thinking?

**Yes:**
- Public infrastructure for Singapore's legal community
- Researchers, journalists, and AI builders depend on it
- Needs to work reliably for years
- My name and reputation attached

Infrastructure thinking was **correct** here. One hundred fifty hours well spent.

But what if I just needed to analyze legal news for MY research?

**Tool approach:**
- Weekend script that downloads 50 recent articles
- Basic keyword analysis and trend detection
- Throwaway code, serves immediate need
- Could vibe code in 2 days

I would have applied infrastructure thinking: proper data models, API design, error handling, documentation. Two months later, over-engineered solution for a simple problem.

### What This Costs Me

**Velocity:** 30-90x slower than Jamie on tools
**Projects:** Ideas die in planning phase (overthinking infrastructure questions)
**Impact:** Could have built 20 weekend tools instead of agonizing over 1 perfect library

The redlines library earned its infrastructure approach—177,000 monthly downloads justify the effort. data.zeeker.sg serves Singapore's legal community—worth the 150 hours.

But every internal tool doesn't need that standard.

I've been building infrastructure when I sometimes just needed tools.

## Decision Framework

Before starting your next project, ask 4 questions. Your answers determine everything else.

### The 4 Questions

**1. Who is this for?**
- My team only → TOOL
- Everyone / public → INFRASTRUCTURE

**2. How long must it last?**
- This week/month → TOOL
- Years / indefinitely → INFRASTRUCTURE

**3. What happens if it breaks?**
- I rebuild it → TOOL
- Others suffer → INFRASTRUCTURE

**4. Am I solving my problem or everyone's?**
- My problem → TOOL
- Everyone's problem → INFRASTRUCTURE

### What To Do With Your Answers

**If answers are: my team, this week, rebuild, my problem**
→ **Build a TOOL with vibe coding**

Approach:
- TypeScript or Python + LLMs
- Ship when 5 users say it works
- No tests, minimal infrastructure
- Rebuild if it breaks
- Velocity: days to weeks

**If answers are: everyone, years, others suffer, everyone's problem**
→ **Build INFRASTRUCTURE with traditional programming**

Approach:
- Proper engineering (tests, docs, API design)
- Handle edge cases thoughtfully
- Long-term maintenance plan
- Quality bar: production-ready
- Velocity: months (worth it for infrastructure)

### When I Should Vibe Code

**Tool problems I face:**
- Contract review helper for my team's 3 contract types
- Document comparison for quarterly board reports
- Case law tracker for my specific practice area
- Client intake form generator for our standard questions

These need tool thinking: Fast, disposable, team-specific. Perfect for vibe coding.

### When I Should Build Infrastructure

**Infrastructure I've built:**
- redlines library (177K monthly downloads, top 10% PyPI) ✅
- data.zeeker.sg (Singapore's legal data backbone) ✅
- prompt-engineering-lawyers course (educational infrastructure) ✅

These needed infrastructure thinking: Permanent, public, high quality standards. Traditional programming was correct.

### The Mindset Shift

**Old approach:** Default to infrastructure thinking for everything

**New approach:** Consciously choose tool vs infrastructure mindset BEFORE starting

**Jamie's advantage:** He naturally uses tool thinking for tool problems. He works at Clifford Chance—infrastructure already exists (IT department, compliance frameworks, enterprise tools). He fills gaps with disposable tools.

**My challenge:** I've been building public infrastructure (redlines, data.zeeker.sg) for Singapore's legal community. I naturally default to infrastructure thinking. Now I need to consciously switch to tool thinking for internal projects.

## Conclusion

I compared my GitHub to Jamie Tso's and felt unproductive.

The realization: Jamie ships faster because he builds tools with tool thinking. I ship slower because I build infrastructure with infrastructure thinking. **Neither is wrong.**

The problem: I've been applying infrastructure thinking to tool problems. That kills velocity.

The solution: Ask the 4 questions. Choose your mindset consciously.

**For solo counsels and small teams:** You probably need MORE tools, LESS infrastructure. You shouldn't carry the weight of 177,000 monthly downloads. Build tools for your team's immediate needs. Vibe code without guilt. Ship in weekends, not months.

**My goal for 2026:** Keep building infrastructure where it matters—redlines and data.zeeker.sg serve real needs that justify the effort. But for internal tools? Switch to tool thinking. Ship in weekends, not months.

The question that changes everything: **Am I building a tool or infrastructure?**

Everything else follows from that answer.
