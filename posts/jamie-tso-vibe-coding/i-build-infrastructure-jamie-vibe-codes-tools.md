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

The velocity gap was stark. RedlineNow, his instant redline tool: 5 commits over 2 days in December 2025. Done. Shipped. Thirty stars and 11 forks.

My redlines library: hundreds of commits over 3 years.

**30-90x velocity difference.**

My first reaction: What am I doing wrong?

Then I read my own blog post about the redlines library:

> "Every line of code is a long-term liability. Every 'yes' today means maintenance forever... Scope is your most important feature. I've been tempted by features that seem obvious. They remain open because I haven't found a way to implement them that preserves redlines' core reliability."

I realized: This isn't a productivity problem. It's a question of what we're building for—and how long it needs to last.

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

I wrote about this ([What Top 10% Actually Means](https://www.alt-counsel.com/what-top-10-actually-means-for-a-lawyer-who-codes/)):

> "Scope is your most important feature... I've been tempted by features that seem obvious. I even opened issues for PDF, HTML, and Word document handling myself. They remain open because I haven't found a way to implement them that preserves redlines' core reliability—and that's the discipline narrow scope requires."

Or take [data.zeeker.sg](https://www.alt-counsel.com/data-zeeker-sg-part-2a-architecture/)—Singapore's first public legal news API. One hundred fifty hours over months building:

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

**Result:** Three months of planning. Nothing shipped.

Jamie asks different questions:

- "Does it review MY contracts?"
- "Will it help my team THIS WEEK?"
- "Can 5 colleagues use it?"

**Result:** Ships in 3 days. Team uses it 20 times per week.

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

**Why is it fast?** He avoids every infrastructure decision. When building RedlineNow, Jamie doesn't ask:

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

My infrastructure questions slow me down on projects meant to be disposable—but they're necessary for projects meant to last.

Real example: I wanted to build a contract review helper for my work.

**What I did (infrastructure thinking):**

First, I researched similar tools. Designed a flexible architecture for multiple contract types. Investigated security compliance. Sketched a plugin system for custom rules.

Three months later: Comprehensive design document. Zero working code.

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

But what if I just needed to analyze legal news for MY research? A weekend script that downloads 50 recent articles with basic keyword analysis—throwaway code serving immediate needs. I would have applied infrastructure thinking: proper data models, API design, error handling. Two months later, over-engineered solution for a simple problem.

### What This Costs Me

**Velocity:** 30-90x slower than Jamie on tools. Ideas die in planning phase. Could have built 20 weekend tools instead of agonizing over 1 perfect library.

The redlines library earned its infrastructure approach—177,000 monthly downloads justify the effort. data.zeeker.sg serves Singapore's legal community—worth the 150 hours.

But I've been building infrastructure when I sometimes just needed tools.

## The Maintenance Reality I've Learned

But here's what the vibe coding narrative doesn't tell you.

I run firm-wide IT infrastructure using Docker and stable software choices. Even with best practices, maintenance isn't zero—it's a few hours per year. That's sustainable. That's manageable.

When I examined RedlineNow, Jamie's instant redline tool, it uses diff-match-patch—a library Google abandoned years ago. When dependencies break, these tools will stop working. Jamie will rebuild or abandon them. That's fine for internal BigLaw tools built for immediate needs.

But for open source contributions serving the community? Sustainability matters.

My redlines library takes months to build because I choose maintained dependencies. I spend a few hours yearly on maintenance because I design for stability. I say no to features because every yes is a long-term liability.

That's not infrastructure thinking slowing me down. That's the cost of building things that last—things 177,000 monthly users can depend on.

Jamie's approach works for disposable internal tools. Mine works for sustainable open source. Neither is wrong, but for community contributions, there's only one choice.

I wrote about [why prompt engineering shifted from turn-by-turn prompts to reusable frameworks](https://www.alt-counsel.com/lawyers-prompt-engineering-wrong/)—this is the same shift from disposable to sustainable thinking.

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

**4b. How long must this work?**
- This week/month, then rebuild or abandon → TOOL
- Years, with community depending on it → INFRASTRUCTURE (choose maintained dependencies)

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

Fast, disposable, team-specific—perfect for vibe coding.

### When I Should Build Infrastructure

**Infrastructure I've built:**
- redlines library (177K monthly downloads, top 10% PyPI) ✅
- data.zeeker.sg (Singapore's legal data backbone) ✅
- prompt-engineering-lawyers course (educational infrastructure) ✅

Permanent, public, high quality—traditional programming was correct.

### The Mindset Shift

**Old approach:** Default to infrastructure thinking for everything

**New approach:** Consciously choose tool vs infrastructure mindset BEFORE starting

**Jamie's advantage:** He naturally uses tool thinking for tool problems. Works at Clifford Chance where infrastructure already exists—he fills gaps with disposable tools.

**My challenge:** Building public infrastructure for Singapore's legal community, I default to infrastructure thinking. Need to consciously switch for internal projects.

## Conclusion

I compared my GitHub to Jamie Tso's and felt unproductive.

The realization: Jamie ships faster because he builds tools with tool thinking. I ship slower because I build infrastructure with infrastructure thinking. **Neither is wrong.**

The problem: I've been applying infrastructure thinking to tool problems. That kills velocity.

The solution: Ask the 4 questions. Choose your mindset consciously.

**For solo counsels and small teams:** You probably need MORE tools, LESS infrastructure. You shouldn't carry the weight of 177,000 monthly downloads. Build tools for your team's immediate needs. Vibe code without guilt. Ship in weekends, not months.

**My goal for 2026:** Keep building infrastructure where it matters—redlines and data.zeeker.sg serve real needs that justify the effort. I built [CLI tools for Claude Code agents](https://www.alt-counsel.com/claude-code-cli-tools-for-ai-agents/) following this principle. But for internal tools? Switch to tool thinking. Ship in weekends, not months.

For internal tools you'll rebuild or abandon? Jamie's approach works. For open source serving the community? Infrastructure thinking is the only sustainable choice. The question isn't "should I think like Jamie" but "what am I building and for whom?"

The question that changes everything: **Am I building a tool or infrastructure?**

Everything else follows from that answer.
