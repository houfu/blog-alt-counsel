# Outline: I Build Infrastructure. Jamie Vibe Codes Tools. Here's What I'm Missing.

**Target word count:** 2,500 words
**Tone:** Personal, introspective, actionable
**Key message:** Lawyers hesitate to vibe code because they apply infrastructure thinking to tool problems

---

## Section 1: The Comparison (500 words)

**Opening hook:** "I compared my GitHub to Jamie Tso's and felt unproductive."

**Specific claims:**
1. **My GitHub:** 70 repos, redlines library with 148 stars and 177K monthly downloads, top 10% of PyPI
2. **Jamie's GitHub:** 4 tools built in 2-3 months (Nov-Dec 2025), using vibe coding (TypeScript + LLMs)
3. **Initial reaction:** Felt less productive, wondered why I'm slower

**The realization:**
- Not a productivity problem—a philosophy problem
- I build infrastructure (permanent, for everyone)
- Jamie builds tools (disposable, for his team)

**Evidence to include:**
- RedlineNow: 5 commits in 2 days (Dec 6-7, 2025)
- Tabular_Review: 8 commits over 6 days (Nov 23, 2025)
- My redlines: Hundreds of commits over 3 years
- **30-90x velocity difference**

**Key quote from my blog:**
> "Every line of code is a long-term liability. Every 'yes' today means maintenance forever."

**Transition:** This velocity gap isn't about skill—it's about what we're building for.

---

## Section 2: Two Mindsets (600 words)

**Core claim:** There are two fundamentally different ways to approach building legal tech, and most lawyers unconsciously pick the wrong one.

### The Tool Mindset (Jamie's approach)

**Characteristics:**
- Solves MY problem THIS WEEK
- Ships when 5 colleagues say it works
- Quality bar: "Does it work?"
- If it breaks, rebuild it
- No tests, minimal infrastructure
- Development time: days to weeks

**Example:** RedlineNow
- First commit: Dec 6, 2025
- Latest commit: Dec 7, 2025
- Total commits: 5
- Done and shipped in 2 days
- 30 stars, 11 forks—it works for people

**Jamie's philosophy (from research):**
> "Pick one painful workflow, prototype fast, ship to 3-5 power users, iterate weekly."

### The Infrastructure Mindset (my approach)

**Characteristics:**
- Solves EVERYONE's problem for YEARS
- Ships when production-ready (top 10% quality)
- Quality bar: "Will this work in 5 years?"
- If it breaks, 177K users suffer
- Tests, documentation, API design
- Development time: months to years

**Example:** redlines library
- Hundreds of commits over 3 years
- Top 10% of PyPI
- 177K monthly downloads
- Proper API, documentation, tests
- People depend on it daily

**My philosophy (from my blog):**
> "Scope is your most important feature... I've been tempted by features that seem obvious. They remain open because I haven't found a way to implement them that preserves redlines' core reliability."

### Why Lawyers Default to Infrastructure Thinking

**Legal training emphasizes:**
1. Precedent and reliability
2. Edge cases and risk management
3. Professional responsibility
4. "What if someone sues?" thinking
5. Defensibility over speed

**Result:** Apply infrastructure standards to tool problems

**The paralysis questions:**
- "What if this needs to scale?"
- "What if others need this?"
- "What about edge cases?"
- "Should this be reusable?"

**Key insight:** These are the RIGHT questions for infrastructure, WRONG questions for tools.

**Transition:** Understanding the difference changes everything.

---

## Section 3: What Makes Jamie's Vibe Coding Work (500 words)

**Core claim:** Jamie ships 30-90x faster because he's optimized for a different goal.

### The Evidence from His Repos

**RedlineNow (instant redlines with AI summary):**
- 5 commits total
- Built in 2 days
- TypeScript + LLMs
- No tests, no CI/CD
- Ships when it works
- 30 stars, 11 forks (proves utility)

**SignaturePacketIDE (automated signature packets):**
- 5 commits total
- Similar velocity
- 20 stars, 14 forks (most forked—real usage in BigLaw)

**Tabular_Review (document analysis):**
- 8 commits
- 6 days of development
- Has Docker, but still no tests
- 14 stars, 4 forks

**Pattern identified:**
- Ship when it works
- No iterative refinement after launch
- Tools appear "done" after initial commits
- Infrastructure decisions avoided (no tests, minimal setup)

### What Vibe Coding Enables

**Technical process:**
1. Describe what you want in natural language
2. LLM generates TypeScript code
3. Test with 5 colleagues
4. Ship when they say it works
5. Move to next tool

**Why it's fast:**
- No infrastructure decisions (tests, CI/CD, deployment)
- No edge case handling (works for team's use case)
- No maintenance burden (rebuild if it breaks)
- No documentation (team knows how to use it)

**Jamie's build vs buy philosophy:**
> "Decide build vs buy with a checklist, not by defaulting to either path."

He asks: "Does vendor tool exist? No? Can I build in a weekend? Yes? Ship it."

### The Key Difference

**Jamie doesn't carry infrastructure weight.**

When building RedlineNow, he doesn't ask:
- ❌ "What if users have different file formats?"
- ❌ "What if this needs to scale to 1000 users?"
- ❌ "Should I write tests?"

He asks:
- ✅ "Does it redline the contracts my team reviews?"
- ✅ "Can I ship by Friday?"
- ✅ "Do 5 colleagues find it useful?"

**Transition:** I've been asking the wrong questions.

---

## Section 4: What I'm Missing (500 words)

**Core claim:** My unconscious infrastructure questions kill velocity on projects that need tool thinking.

### My Automatic Questions

**When I want to build a contract review helper:**

**I ask (infrastructure thinking):**
- "What if other firms need this?" → Start designing for everyone
- "What about edge cases?" → Catalog 47 contract types
- "Should this be reusable?" → Build library, not tool
- "What about security?" → Research SOC 2 compliance
- "How do I maintain this?" → Agonize over long-term liability

**Result:** 3 months of planning, nothing shipped.

**Jamie asks (tool thinking):**
- "Does it review MY contracts?"
- "Will it help THIS WEEK?"
- "Can 5 colleagues use it?"

**Result:** Shipped in 3 days, team uses it 20 times/week.

### The Mental Model Shift I Need

**Current assumption:** "If I'm building something, it should be done right (infrastructure standard)."

**New framework:**
- Building a TOOL? → Use tool standard (works for my team, disposable)
- Building INFRASTRUCTURE? → Use infrastructure standard (works for everyone, permanent)

**The problem:** I treat every project as infrastructure.

### Real Example: data.zeeker.sg

**What it is:** Singapore's first public legal news API
- 346 legal articles professionally summarized
- Full-text search, SQL interface, REST API
- Multiple export formats (JSON, CSV, SQLite)
- CC-BY-4.0 license for AI training

**Development:** 150+ hours over months

**Question:** Did this need infrastructure thinking?
- **Yes:** Public infrastructure, others depend on it, needs to work for years
- Correct application of infrastructure mindset

**Counter-example:** What if I just needed to analyze legal news for MY research?
- Tool mindset: Script that downloads 50 articles, does basic analysis, throws away
- Could build in a weekend with vibe coding
- Serves my immediate need

**The insight:** I applied infrastructure thinking correctly to data.zeeker.sg. But I apply it INCORRECTLY to internal tools that only I need.

### What This Costs Me

**Velocity:** 30-90x slower than Jamie on tools
**Projects:** Ideas die in planning phase (overthinking infrastructure questions)
**Impact:** Could have built 20 weekend tools instead of agonizing over 1 perfect library

**Personal reflection:**
> "I realized I've been building infrastructure when sometimes I just needed tools. The redlines library serves 177K monthly downloads—that's infrastructure, and worth the effort. But did I need to agonize over every feature request? Definitely not."

**Transition:** The solution is a decision framework.

---

## Section 5: Decision Framework (400 words)

**Core claim:** Ask 4 questions before starting. Your answers determine everything else.

### The 4 Questions

**Question 1: Who is this for?**
- My team only → TOOL
- Everyone / public → INFRASTRUCTURE

**Question 2: How long must it last?**
- This week/month → TOOL
- Years / indefinitely → INFRASTRUCTURE

**Question 3: What happens if it breaks?**
- I rebuild it → TOOL
- Others suffer → INFRASTRUCTURE

**Question 4: Am I solving my problem or everyone's?**
- My problem → TOOL
- Everyone's problem → INFRASTRUCTURE

### What To Do With Your Answers

**If answers are: my team, this week, rebuild, my problem**
→ **Build a TOOL with vibe coding**

**Approach:**
- TypeScript + LLMs (or Python + LLMs)
- Ship when 5 users say it works
- No tests, minimal infrastructure
- Rebuild if it breaks
- Velocity: days to weeks

**If answers are: everyone, years, others suffer, everyone's problem**
→ **Build INFRASTRUCTURE with traditional programming**

**Approach:**
- Proper language (Python, TypeScript)
- Tests, documentation, API design
- Handle edge cases
- Long-term maintenance plan
- Velocity: months (worth it for infrastructure)

### When I Should Vibe Code

**Examples of tool problems:**
- Contract review helper for my team's 3 contract types
- Signature packet generator for our deal process
- Document analysis for our quarterly reports
- Case law tracker for my practice area

**These need tool thinking:** Fast, disposable, team-specific.

### When I Should Build Infrastructure

**Examples:**
- redlines library (177K monthly downloads) ✅
- data.zeeker.sg (Singapore's legal data backbone) ✅
- prompt-engineering-lawyers (educational course) ✅

**These need infrastructure thinking:** Permanent, public, high quality.

### The Mindset Shift

**Old approach:** Default to infrastructure thinking for everything

**New approach:** Consciously choose tool vs infrastructure mindset BEFORE starting

**Jamie's advantage:** He naturally uses tool thinking for tool problems. He works in BigLaw where infrastructure already exists (IT department, compliance, tools). He fills gaps with disposable tools.

**My challenge:** I naturally default to infrastructure thinking because I've been building public infrastructure. Need to consciously switch to tool thinking for internal projects.

---

## Conclusion (150 words)

**Key takeaways:**

1. **The realization:** Jamie ships faster because he builds tools with tool thinking. I ship slower because I build infrastructure with infrastructure thinking. Neither is wrong.

2. **The problem:** Applying infrastructure thinking to tool problems kills velocity.

3. **The solution:** Ask the 4 questions, choose your mindset consciously.

4. **For my readers:** Most solo counsels need MORE tools, LESS infrastructure. You probably shouldn't carry the weight of 177K monthly downloads. Build tools for your team. Vibe code without guilt.

5. **My goal for 2026:** Keep building infrastructure where it matters (redlines, data.zeeker.sg). But for internal tools? Switch to tool thinking. Ship in weekends, not months.

**Final line:** "I compared my GitHub to Jamie's and felt unproductive. Now I realize I just need to ask: Am I building a tool or infrastructure? Everything else follows from that."

---

## Notes for Drafting

**Tone:**
- Honest and vulnerable (admitting to overthinking)
- Analytical (comparing approaches with evidence)
- Actionable (clear framework readers can use)
- Not defensive (Jamie's approach is valid, mine is valid, just different)

**Evidence to weave in:**
- Commit counts from repos
- Blog post quotes about my philosophy
- Jamie's public statements
- Specific examples (RedlineNow, data.zeeker.sg)

**Avoid:**
- Making it sound like one approach is "better"
- Technical jargon that loses lawyers
- Abstract philosophy without concrete examples
- Defensive tone about my slower velocity

**Key metaphor:** Tools vs infrastructure (physical world parallels)
- Hammer (tool) vs factory (infrastructure)
- Quick fix vs permanent solution
- Weekend project vs multi-year investment
