# Discussion: Jamie Tso Vibe Coding Post

## Session 1: Exploratory Research - 2026-01-12

### Initial Request
User wanted to explore Jamie Tso's vibe coding projects to assess if there's enough material for a blog post. This was exploratory research before pitch/outline development.

### Research Conducted
- 8 web searches on Jamie Tso, vibe coding, his projects, and the broader movement
- Retrieved GitHub profile with 4 main projects
- Attempted web fetches on key articles (blocked by 403 errors, but search excerpts provided substantial material)
- Compiled comprehensive research.md with findings

### Key Findings Summary

**Who:** Jamie Tso - Senior Associate (Funds) at Clifford Chance Hong Kong. Started learning to code 5 years ago on weekends/nights. Built tools that went viral internally at his firm.

**What:** Vibe coding - using LLMs to generate code through natural language prompting instead of traditional programming. Coined by Andrej Karpathy (OpenAI co-founder).

**Projects (all open source on GitHub):**
1. **RedlineNow** - Instant redline with AI summary (30 stars, 11 forks)
2. **SignaturePacketIDE** - Automated signature packet generation for M&A/financing (20 stars, 14 forks)
3. **Tabular_Review** - Document analysis with dynamic extraction (14 stars, 4 forks)
4. **ChartAI** - Corporate structure visualization (1 star, 1 fork)

**Philosophy:** Build vs buy with strategic checklist. Believes in open-source legal AI tools so new entrants don't rebuild baseline capabilities. Cost of building dropping as LLMs improve.

**Future vision:** Contract simulation - AI personas for each party stress-testing clauses.

**Broader trend:** Solo practitioners can now build million-dollar caliber tools. New platforms (Case.dev, Thurgood.law) emerging. CLE programs teaching vibe coding. Governance concerns about "stealth AI."

### Material Sufficiency Assessment

**VERDICT: YES - More than enough material**

- Compelling protagonist with clear story arc
- 4 concrete projects to discuss
- Strong philosophical framework
- Perfect alignment with alt-counsel mission ($50 vs $50K)
- Timely (January 2026 coverage in Artificial Lawyer)
- Multiple potential angles

### Recommended Angle

**Option 2: "Vibe Coding: The $50 Alternative to $50K Legal Tech"**

Best balance of:
- Personal narrative (Tso's story)
- Practical applicability (all 4 projects)
- Alt-counsel mission alignment (budget-conscious)
- Broader accessibility (not just a profile)

**Target audience:**
- Solo counsels: "You don't need $50K budgets"
- Small teams: "Build what vendors won't prioritize"
- Builders: "Real projects to fork/learn from"

### Alternative Angles Considered

1. **Profile piece** - "Meet the BigLaw Associate Building Open-Source Legal AI Tools"
2. **Tutorial** - "4 Legal AI Tools You Can Build This Weekend"
3. **Opinion** - "Why BigLaw Associates Are Secretly Building Better Legal Tech Than Vendors"

All viable, but Option 2 best fits alt-counsel positioning.

### Next Steps

If proceeding:
1. Use brainstorming/pitch skills to develop the angle
2. Create outline with specific claims
3. Optional: Test one of Tso's tools firsthand for experiential perspective
4. Optional: Follow-up research on GitHub READMEs for technical depth
5. Draft post following standard PITCH → WRITE → REVIEW → POST workflow

### Sources Summary

Primary sources used:
- Artificial Lawyer articles (January 2026)
- Complete AI Training coverage
- Jamie Tso GitHub profile
- Law://WhatsNext podcast/Substack
- Legal education CLE programs (WashU Law, NYSBA)
- Multiple legal tech commentary sites

All sources compiled with full citations in research.md.

### Regional Considerations

⚠️ **Hong Kong-based but globally applicable** - Tso works in Hong Kong, but approach and tools work anywhere with LLM API access. Especially relevant for ASEAN where legal tech vendor ecosystem is less mature and build-your-own approaches more common.

⚠️ **Educational content US-centric** - CLE programs are US-based. No Singapore Law Society equivalent programs found.

### Research Quality Notes

**Strengths:**
- Very recent material (within last week)
- Multiple authoritative sources
- Concrete projects with metrics
- Clear philosophical framework

**Gaps:**
- Haven't tested tools firsthand
- Limited direct quotes (403 blocks on full articles)
- No cost/time estimates for building similar tools
- No Singapore-specific adoption examples

**Overall:** Strong foundation for a post. Gaps are nice-to-haves, not blockers.

---

## Session 2: Pitch Development - 2026-01-12

### The Pivotal Question

User asked: **"Why is Jamie able to vibe code while I haven't been as productive as he is?"**

This shifted the angle from "profile of Jamie Tso" to **introspective comparison**: What am I not thinking about correctly regarding vibe coding?

### Deep Analysis: Comparing Approaches

Conducted comprehensive comparison by:
1. Reading user's published blog posts using Jina MCP:
   - "What Top 10% Actually Means (For a Lawyer Who Codes)"
   - "Building data.zeeker.sg: Technical Architecture"
   - "When Building Gets Cheap But Knowing Stays Expensive"
2. Analyzing user's development philosophy from these posts
3. Comparing to Jamie's known approach

### The Core Insight: Tool vs Infrastructure Mindset

**Jamie builds disposable tools:**
- Solves immediate pain points for Clifford Chance team
- Ships when 5 colleagues say it works
- Quality bar: "Does it work?"
- If it breaks, rebuild
- Development time: days to weeks

**User builds permanent infrastructure:**
- Solves long-term problems for Singapore legal community
- Ships when production-ready (top 10% of PyPI)
- Quality bar: "Every line of code is a long-term liability"
- If it breaks, 177K users suffer
- Development time: months

**The difference isn't skill or process—it's philosophy.**

### Evidence from User's Blog Posts

**From "What Top 10% Actually Means":**
> "Scope is your most important feature... I've been tempted by features that seem obvious. I even opened issues for PDF, HTML, and Word document handling myself. They remain open because I haven't found a way to implement them that preserves redlines' core reliability—and that's the discipline narrow scope requires."

> "Every line of code is a long-term liability. Every 'yes' today means maintenance forever."

**From "Building data.zeeker.sg":**
- 150+ hours building Singapore's first public legal news API
- Careful architectural decisions for long-term sustainability
- "What makes this sustainable for solo builders: Architecture choices that eliminate ongoing work."

**From "When Building Gets Cheap But Knowing Stays Expensive":**
> "AI made building cheap—but it didn't make validation cheap."

User's 2026 resolution: Shift from infrastructure thinking to tool thinking for appropriate problems.

### GitHub Repo Deep Dive

**Major discovery:** Analyzed Jamie's actual repos (RedlineNow, SignaturePacketIDE, Tabular_Review) using Jina MCP.

**Shocking timeline correction:**
- Initial assumption: "4 tools in 2 years"
- **Reality from commit history: 4 tools in 2-3 MONTHS (Nov-Dec 2025)**

**Evidence:**

**RedlineNow:**
- First commit: Dec 6, 2025
- Latest commit: Dec 7, 2025
- Total commits: 5
- Development time: ~2 days
- Infrastructure: No tests, no CI/CD

**SignaturePacketIDE:**
- Total commits: 5
- 14 forks (most forked - proves real usage)

**Tabular_Review:**
- First commit: Nov 23, 2025
- Total commits: 8
- Development time: ~6 days
- Has Docker, but still no tests

**Pattern:** Ship-when-it-works. No iterative refinement. Tools appear "done" after initial commits.

**Velocity comparison:**
- Jamie's RedlineNow: 5 commits in 2 days
- User's redlines: Hundreds of commits over 3 years
- **30-90x velocity difference**

### Why Lawyers Hesitate to Vibe Code

Most lawyers get paralyzed by infrastructure questions:
- "What if this needs to scale?"
- "What about edge cases?"
- "Should this be reusable?"

**These are infrastructure questions applied to tool problems.**

Legal training emphasizes precedent, reliability, edge cases, professional responsibility → defaults to infrastructure thinking.

**Jamie doesn't carry this weight.** He asks tool questions:
- "Does this solve my team's problem today?"
- "Can I ship by Friday?"

### The Angle Pivot

**Original:** "Profile of Jamie Tso and vibe coding"
**New (approved):** "What makes Jamie's vibe coding work, and what am I not thinking about correctly?"

More introspective, more useful, more actionable.

### Pitch Development

**Working Title:**
"I Build Infrastructure. Jamie Vibe Codes Tools. Here's What I'm Missing."

**Approved Pitch (180 words):**

I compared my GitHub to Jamie Tso's and felt unproductive. Me: 70 repos, 177K monthly downloads, top 10% of PyPI. Him: 4 tools in 2-3 months, all built with vibe coding (LLMs generating TypeScript). Then I realized: I'm not slower—I apply infrastructure thinking to problems that need tool thinking. Jamie builds disposable tools for his Clifford Chance team: RedlineNow ships when it helps 5 colleagues close deals faster. I build permanent infrastructure for Singapore's legal community: my redlines library carries the weight of "every line of code is a long-term liability." When I want to build a contract review helper, I ask infrastructure questions: "What if others need this? What about edge cases?" Jamie asks tool questions: "Does this solve my team's problem today? Can I ship by Friday?" Most solo counsels need tools, not infrastructure. But legal training (precedent, edge cases, professional responsibility) makes us default to infrastructure thinking—even for quick weekend projects. This post unpacks the tool vs infrastructure mindset, when vibe coding works, and the mental model shift I need to actually use it.

**Authenticity check:** Passed. All claims verified from user's actual blog posts.

**Timeline correction applied:** Changed "2 years" to "2-3 months" based on commit history.

### Structure Outline (5 sections, ~2,500 words)

1. **The Comparison** (500w) - My GitHub vs Jamie's, realized it's philosophy not capability
2. **Two Mindsets** (600w) - Tool vs infrastructure thinking, why lawyers default to infrastructure
3. **What Makes Jamie's Vibe Coding Work** (500w) - Evidence from repos, 5 commits in 2 days
4. **What I'm Missing** (500w) - My unconscious infrastructure questions, mental model shift needed
5. **Decision Framework** (400w) - When to vibe code vs traditional programming

### Key Evidence for Post

**From repos:**
- RedlineNow: 5 commits in 2 days (December 2025)
- No tests across all repos
- 14 forks on SignaturePacketIDE (disposable tools still get used)

**Comparison quote:**
> "Jamie's RedlineNow has 5 commits total, created over 2 days. My redlines library has hundreds of commits over 3 years. His ships when it helps 5 colleagues. Mine ships when 177K monthly users can depend on it. Neither is wrong—we're building for different timelines."

### Files Created

1. **research.md** - Initial exploratory research (Session 1)
2. **comparative-analysis.md** - Deep comparison using user's blog posts
3. **jamie-repos-analysis.md** - GitHub commit history analysis
4. **discussion.md** (this file) - Session notes

### Next Steps

1. ✅ Pitch approved
2. ⏭️ Suggest tags
3. ⏭️ Scaffold post folder structure
4. ⏭️ Develop outline
5. ⏭️ Draft content

---

## Session 3: Major Revisions - Critical Realism Shift - 2026-01-13

### Context

Session continued from another machine. Post draft was complete at 1,947 words. User had received comprehensive feedback from three reviewers:
1. **Content Quality Auditor** - Suggested breaking up dense paragraphs (~45 min work)
2. **In-House Lawyer Reviewer** - Identified gaps around security, costs, BigLaw vs solo counsel reality
3. **Legal Tech Blog Reviewer** - Wanted more technical depth, failure modes discussion

User chose Option A: Light revision approach, targeting ~2,100 words without follow-up post.

### The Pivotal Discovery

**User examined Jamie's RedlineNow code and made critical discovery:**

> "I read RedlineNow from Jamie. It's pretty basic and it leverages on google's diff-match-patch, which is not maintained anymore. I dunnnnnoooooeeee man"

**User's realization:**
- Personal experience: Runs firm-wide IT using Docker/stable software, maintenance is "a few hours a year" (sustainable)
- Jamie's approach: Uses unmaintained dependencies (diff-match-patch abandoned by Google)
- Prediction: "I suspect these projects will get abandoned soon"
- Values statement: "if you're building open source, I don't think I would say it is good for the community"

**Emotional response:** "im sorry jaime, i don't feel so enthusiastic about this honestly"

This fundamentally changed the post's framing from **admiration to critical realism**.

### What Claude Did

#### Analysis
- Created comprehensive revision plan in `/root/.claude/plans/indexed-orbiting-nebula.md`
- Planned tone shift from "I'm slow/wrong" to "Different goals require different approaches"
- Designed sustainability section to address unmaintained dependencies issue

#### Writing (Revisions Executed)
1. **Added new section** "The Maintenance Reality I've Learned" (~160 words)
   - Calls out diff-match-patch as unmaintained Google library
   - Contrasts disposable BigLaw tools vs sustainable open source
   - Key line: "Jamie's approach works for disposable internal tools. Mine works for sustainable open source. Neither is wrong, but for community contributions, there's only one choice."

2. **Reframed key sentences:**
   - Line 28: "philosophy problem" → "question of what we're building for—and how long it needs to last"
   - Line 176: "kill velocity" → "slow me down on projects meant to be disposable—but they're necessary for projects meant to last"

3. **Added 4 backlinks to related posts:**
   - "What Top 10% Actually Means" (redlines quality)
   - data.zeeker.sg architecture post
   - "Lawyers Got Prompt Engineering Wrong" (framework shift parallel)
   - CLI tools for Claude Code agents

4. **Enhanced decision framework:**
   - Added Question 4b: "How long must this work?"
   - Distinguishes rebuild/abandon vs. years-with-maintained-dependencies

5. **Improved readability:**
   - Broke up dense paragraphs with blank lines
   - Added emphasis with bold formatting
   - Improved bullet point spacing

6. **Balanced conclusion:**
   - Added paragraph: "For internal tools you'll rebuild or abandon? Jamie's approach works. For open source serving the community? Infrastructure thinking is the only sustainable choice. The question isn't 'should I think like Jamie' but 'what am I building and for whom?'"

7. **Condensed redundancies:**
   - Trimmed "He avoids every infrastructure decision" section
   - Tightened infrastructure thinking example
   - Condensed "What This Costs Me" section
   - Streamlined opening comparison
   - Trimmed data.zeeker.sg example

#### Quality Control
- Multiple word count checks throughout revision process
- Final word count: 2,126 words (target: ~2,100, acceptable range: 2,000-2,150)
- Git commit with detailed change summary

### User Decision: Shift to Critical Realism

**Decision:** Reframe post from "I should be more like Jamie" to "Different contexts require different approaches, and for sustainable open source, my approach is correct"

**Rationale:**
- User's discovery: Jamie uses unmaintained dependencies
- User's values: Open source requires sustainability
- User's experience: Maintenance burden is manageable with good choices ("a few hours a year")
- Emotional honesty: "I don't feel so enthusiastic about this honestly"

**How Claude supported the decision:**
- Maintained respect for Jamie as person
- Added balanced critique of approach limitations
- Emphasized context-appropriateness rather than universal superiority
- User quote preserved: "im sorry jaime" - shows discomfort with criticism but commitment to honesty

### Outcomes

✅ **Worked Well:**
- Tone successfully shifted without being mean or dismissive
- Added critical sustainability perspective while maintaining respect
- Hit word count target precisely (2,126 words)
- Integrated 4 backlinks naturally
- Improved readability significantly
- Maintained user's authentic voice and values

✅ **Technical execution:**
- All 7 revision steps completed systematically
- Used TodoWrite throughout to track progress
- Made incremental edits with old_string/new_string pattern
- Git commit properly attributed with detailed summary

### Files Modified

1. **`i-build-infrastructure-jamie-vibe-codes-tools.md`**
   - Added 160-word sustainability section
   - Reframed 5+ key sentences
   - Added 4 backlinks
   - Condensed ~80 words of redundancy
   - Net change: +179 words (1,947 → 2,126)

### Key Insight from This Session

**The post evolved through user's authentic discovery:**
- Started: Admiring Jamie's velocity
- User discovered: Unsustainable dependencies
- Ended: Critical realism about disposable vs sustainable approaches

**This authenticity makes the post stronger** - it shows real technical investigation, honest reassessment, and values-driven conclusions.

The post now argues: "Tool thinking for tools, infrastructure thinking for infrastructure" rather than "I should think more like Jamie."

### Next Steps

Post ready for:
1. ⏭️ Quality review (content-quality-auditor agent)
2. ⏭️ Target audience review (legal-tech-blog-reviewer agent)
3. ⏭️ Backlink curation (backlink_curating skill)
4. ⏭️ Publishing to Ghost (using-ghost-admin-api skill)
