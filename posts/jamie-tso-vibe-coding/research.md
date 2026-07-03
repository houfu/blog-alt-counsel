# Research: Jamie Tso's Vibe Coding Projects

**Date:** 2026-01-12
**Query:** Investigate Jamie Tso's vibe coding projects - who they are, what they've built, and whether there's enough material for an alt-counsel blog post
**Research Type:** Exploratory (feasibility assessment)
**Regional Focus:** Global with Singapore/ASEAN awareness

---

## Summary

**YES - There is substantial material for a post.** Jamie Tso is a Senior Associate at Clifford Chance Hong Kong who has built multiple open-source legal AI tools using "vibe coding" (using LLMs to generate code through natural language prompts). His work directly challenges the "must buy everything off-the-shelf" assumption and demonstrates that resource-constrained legal professionals can build sophisticated tools themselves. His projects are practical, open-source, and have been adopted internally at a major law firm and forked 100+ times on GitHub.

**Alt-counsel angle:** This is exactly our audience - practical, budget-conscious approaches to legal technology that work for solo counsels and small teams. Tso's projects cost essentially nothing except time and LLM API costs ($50 vs $50K systems).

---

## Who is Jamie Tso?

**Profile:**
- Senior Associate (Funds) at Clifford Chance, Hong Kong
- Graduated University of Hong Kong (LLB) 2018
- Admitted as solicitor in Hong Kong 2020
- Joined Clifford Chance as associate in 2022
- Started learning to code 5 years ago (on weekends and late nights)
- Built tools that went viral internally and were adopted by the firm

**Background story:**
Started exploring legal tech as a trainee about 5 years ago while working with investment funds. Wondered if he could build a tool to automate mapping retail fund prospectuses against regulatory requirements (Appendix C of Unit Trusts Code). Taught himself to code and began posting on LinkedIn to share his learning journey.

**Source:** [Jamie Tso on Vibe-Coding Legal AI](https://completeaitraining.com/news/jamie-tso-on-vibe-coding-legal-ai-build-vs-buy-open-source/)

---

## What is Vibe Coding?

**Definition:** "A nontraditional approach to building software-like tools through structured prompting rather than conventional programming" - an iterative process where users direct an LLM with natural language prompts to generate code.

**Origin:** Term coined by Andrej Karpathy, co-founder of OpenAI.

**Key characteristics:**
- User describes desired outcome, functionality, and aesthetic (the "vibe")
- AI generates the underlying code
- Allows lawyers without technical backgrounds to build practical solutions
- Fast, focused, and practical approach

**Examples of what lawyers are building:**
- Training games based on firm AI policies (Debevoise)
- Child support calculators created "simply by describing it into existence" in <10 minutes
- Document review tools as Microsoft Word add-ins built "in weeks, not years"

**Sources:**
- [Jamie Tso Interview: Vibe-Coding Your Own Legal AI Tools](https://www.artificiallawyer.com/2026/01/05/jamie-tso-interview-vibe-coding-your-own-legal-ai-tools/)
- [Vibe Coding for Lawyers: How to Do It and What You Need to Know](https://law.washu.edu/event/vibe-coding-for-lawyers-how-to-do-it-and-what-you-need-to-know/)
- [AI Use Cases for Lawyers, Part 1 – Vibe Coding a Training Game](https://www.debevoisedatablog.com/2025/09/02/ai-use-cases-for-lawyers-part-1-vibe-coding-a-training-game-for-a-new-policy/)

---

## Jamie Tso's Specific Projects

All projects available on GitHub at: https://github.com/jamietso

### 1. RedlineNow
- **Description:** Instant redline with AI summary
- **Technology:** TypeScript
- **GitHub Stats:** 30 stars, 11 forks
- **Use case:** Automated document comparison and change summarization

### 2. SignaturePacketIDE
- **Description:** Automated tool for extracting signature pages and generating packets for M&A and financing transactions using AI
- **Technology:** TypeScript
- **GitHub Stats:** 20 stars, 14 forks
- **Use case:** Automates creation of wet-ink signature packs for deals

### 3. Tabular_Review
- **Description:** Document analysis platform leveraging AI to extract structured data from unstructured documents with dynamic columns and analyst chat
- **Technology:** TypeScript
- **GitHub Stats:** 14 stars, 4 forks
- **Use case:** Can ingest unstructured documents, define dynamic extraction columns, and query data with integrated analyst chat

### 4. ChartAI
- **Description:** Uses advanced language models to parse entity relationships from legal documents and visualize complex corporate structures
- **Technology:** TypeScript
- **GitHub Stats:** 1 star, 1 fork
- **Use case:** Extract and visualize complex corporate structures from legal documents and text descriptions

**Impact:** "His open-source repos have been forked over a hundred times, and teams are using them end-to-end or as components inside other tools."

**Source:** [Jamie Tso GitHub Profile](https://github.com/jamietso)

---

## Build vs Buy Philosophy

### Tso's Approach

**Core insight:** "As LLMs write more of the 'first draft' code and coding agents improve, the cost of building high-quality internal tools drops."

**Decision framework:** "Decide build vs buy with a checklist, not by defaulting to either path."

**Recommended process:**
1. Pick one painful workflow with clear boundaries and measurable outcomes (hours saved, fewer handoffs, error reduction)
2. Prototype fast with no-code where possible
3. Ship to 3-5 power users
4. Iterate weekly

**Key observations:**
- "Expect more in-house building for niche workflows vendors won't prioritize"
- "Many practice groups have their own habits, so a smaller, well-fitted tool can deliver more value than a one-size-fits-all platform"
- Challenges the assumption that "firms must buy everything off-the-shelf"

**Open source philosophy:** Believes it's important to have open-source equivalents of legal AI tools so new entrants don't have to keep rebuilding the same baseline capabilities and can focus on genuinely differentiated innovation.

**Sources:**
- [Jamie Tso on Vibe-Coding Legal AI: Build vs Buy](https://completeaitraining.com/news/jamie-tso-on-vibe-coding-legal-ai-build-vs-buy-open-source/)
- [Lawyer x AI Builder Jamie Tso](https://lawwhatsnext.substack.com/p/lawyer-x-ai-builder-jamie-tso)

---

## Future Vision: Contract Simulation

**"Frontier bet":** Contract simulation - an app that "brings a contract to life" by:
- Spawning AI personas for each party
- Simulating how they'd argue a clause under different scenarios
- Stress-testing clauses across scenarios
- Exposing weak points before signing

**Broader vision:** Proposed concept of an open-source "legal AI operating system" built from first-principles that could democratize access to common technology workflows.

**Source:** [Jamie Tso Interview: Vibe-Coding Your Own Legal AI Tools](https://www.artificiallawyer.com/2026/01/05/jamie-tso-interview-vibe-coding-your-own-legal-ai-tools/)

---

## The Broader Vibe Coding Trend

### Cost Disruption

**Key finding:** "Solo practitioners and small firms can now build the same caliber of tools that previously required million-dollar budgets."

**Comparison:** "It might be cheaper and faster to build a point solution in-house with what are now mass-market tools, than to go through the beauty parade of evaluating that particular corner of legal tech, making a business case and then buying a platform."

### New Platforms for Lawyers

**Case.dev:** New platform designed to help lawyers develop their own legal tech products or customize pre-built options (launched January 2026). Addresses technical challenges like authentication, storage at scale, and AI model context windows.

**Thurgood.law:** AI coding assistant for non-technical users that lets you describe what you want in plain English and builds production-ready legal applications with no coding required.

### Governance Concerns

**"Stealth AI" problem:** Tools that look like personal projects but perform legal work and sit completely outside governance. This raises questions about:
- Data security
- Quality control
- Firm-wide adoption
- Version control
- Maintenance

**Source:** [The Rise of Vibe Coding: Why Legal Teams Are Quietly Building Their Own AI Tools](https://www.ryanmcdonough.co.uk/the-rise-of-vibe-coding-why-legal-teams-are-quietly-building-their-own-ai-tools-and-what-firms-should-do-about-it/)

### Limitations

**Reality check:** "When you reach a certain level of complexity, or risk, or monetary value, your vibe-coded solutions will start to creak and then break."

**Sources:**
- [Case.Dev Launches Legal Tech Vibe-Coding Platform](https://www.artificiallawyer.com/2026/01/07/case-dev-launches-legal-tech-vibe-coding-platform/)
- [How to Vibe Code on a Budget](https://www.kdnuggets.com/how-to-vibe-code-on-a-budget)

---

## Educational Response

### CLE Programs
- WashU Law hosting "Vibe Coding for Lawyers: How to Do It and What You Need to Know"
- New York State Bar Association offering "Agentic AI and Vibe Coding for Lawyers"
- Programs introducing lawyers with little or no technical background to vibe coding

**Trend:** Legal education is rapidly incorporating vibe coding as a practical skill for modern lawyers.

**Sources:**
- [Vibe Coding for Lawyers CLE - WashU Law](https://law.washu.edu/event/vibe-coding-for-lawyers-how-to-do-it-and-what-you-need-to-know/)
- [Agentic AI and Vibe Coding for Lawyers - NYSBA](https://nysba.org/products/agentic-ai-and-vibe-coding-for-lawyers/)

---

## Jurisdictional Flags

⚠️ **Regional Context - Hong Kong/Global**
Jamie Tso is based in Hong Kong at Clifford Chance, but his work has global applicability. His open-source tools are being used internationally. No Singapore-specific information found, but the principles and tools are regionally agnostic since they're built on globally available LLM APIs.

⚠️ **Educational Content - US-Centric**
The CLE programs and educational responses are primarily US-based (WashU Law, NYSBA). No equivalent Singapore Law Society or ASEAN bar association programs identified in this research.

⚠️ **Case.dev and Thurgood.law - New Platforms**
These platforms launched very recently (January 2026). Regional availability and pricing not yet established. Need to monitor whether they're accessible/useful for ASEAN practitioners.

---

## Alt-Counsel Angle

This material is **PERFECT** for alt-counsel's mission. Here's why:

### 1. Resource-Conscious Technology
- **$50 vs $50K principle:** Vibe coding uses LLM APIs (pennies to dollars per tool) instead of $50K+ enterprise legal tech subscriptions
- Solo practitioners can build tools that rival commercial products
- Open-source projects mean zero licensing costs

### 2. Practical Implementation Focus
- Tso's projects solve real workflow pain points: signature packets, redlining, document analysis
- "Pick one painful workflow" approach is exactly what resource-constrained teams need
- Built by a practicing lawyer, not a vendor - understands real constraints

### 3. Singapore/ASEAN Relevance
- While Tso is in Hong Kong, his approach applies globally
- Especially relevant for ASEAN where legal tech vendor ecosystem is less mature
- Open-source and build-your-own approaches more common in cost-sensitive markets

### 4. Challenge to Status Quo
- Questions the "must buy everything off-the-shelf" assumption
- Demonstrates that small teams can build what they need
- Empowers lawyers to solve their own technology problems

### 5. Builder-Friendly Content
- alt-counsel serves both legal professionals AND technical folks building legal solutions
- Tso is both - a lawyer who codes
- His GitHub repos serve as practical blueprints

---

## Potential Post Angles

### Option 1: Profile - "Meet the BigLaw Associate Building Open-Source Legal AI Tools"
Focus on Jamie Tso's story, projects, and philosophy. Humanize the "lawyer who codes" journey.

**Strengths:**
- Compelling personal narrative
- Concrete examples (4 real projects to discuss)
- Inspirational for alt-counsel audience

**Structure:**
1. Who is Jamie Tso
2. Why he started building
3. Deep dive into 2-3 key projects
4. Build vs buy philosophy
5. What resource-constrained lawyers can learn

### Option 2: Concept - "Vibe Coding: The $50 Alternative to $50K Legal Tech"
Focus on vibe coding as a movement/concept with Jamie Tso as primary example.

**Strengths:**
- Directly addresses alt-counsel's budget-conscious mission
- Broader applicability (not just about one person)
- Can include multiple examples beyond Tso

**Structure:**
1. What is vibe coding
2. Why it matters for solo counsels/small teams
3. Case study: Jamie Tso's projects
4. How to start vibe coding your own tools
5. Limitations and when to buy instead

### Option 3: Tutorial - "4 Legal AI Tools You Can Build This Weekend"
Practical guide using Tso's projects as templates.

**Strengths:**
- Actionable, hands-on content
- Serves both legal professionals and builders
- Could become a series

**Structure:**
1. Why build instead of buy
2. Project 1: Redlining tool (using RedlineNow as inspiration)
3. Project 2: Signature packet generator
4. Project 3: Document analysis tool
5. Getting started resources

### Option 4: Opinion - "Why BigLaw Associates Are Secretly Building Better Legal Tech Than Vendors"
Provocative take on the build vs buy shift happening in legal.

**Strengths:**
- Timely and controversial (good for engagement)
- Challenges vendor-centric legal tech narrative
- Aligns with alt-counsel's contrarian positioning

**Structure:**
1. The vibe coding phenomenon
2. Why it's happening now (LLM capabilities + cost drops)
3. Case studies (Tso, Debevoise, others)
4. Implications for legal tech vendors
5. What solo counsels should do about it

---

## Recommended Angle

**Recommendation: Option 2 - "Vibe Coding: The $50 Alternative to $50K Legal Tech"**

**Rationale:**
- Best balance of personal narrative (Tso's story) and practical applicability
- Directly addresses alt-counsel's core mission (resource-conscious legal tech)
- Broader than just a profile, more accessible than a tutorial
- Can reference all 4 of Tso's projects + broader trend
- Timely (January 2026 Artificial Lawyer interview, Case.dev launch)

**Target audience alignment:**
- Solo counsels: "You don't need $50K budgets to get sophisticated tools"
- Small teams: "Build what vendors won't prioritize for your niche"
- Builders: "Here are real projects to learn from/fork"

---

## Additional Sources for Follow-Up

### Primary Sources (attempted but 403 blocked)
- [Jamie Tso Interview: Vibe-Coding Your Own Legal AI Tools - Artificial Lawyer](https://www.artificiallawyer.com/2026/01/05/jamie-tso-interview-vibe-coding-your-own-legal-ai-tools/) - Would have full interview details
- [Lawyer x AI Builder Jamie Tso - Law://WhatsNext Podcast](https://lawwhatsnext.substack.com/p/lawyer-x-ai-builder-jamie-tso) - Likely has audio/more depth
- [Case.Dev Platform Launch - Artificial Lawyer](https://www.artificiallawyer.com/2026/01/07/case-dev-launches-legal-tech-vibe-coding-platform/) - More on emerging platforms

### GitHub Deep Dive Opportunities
- Each of Tso's 4 main projects has README files that could provide technical details
- Could analyze code to understand his approach
- Could try running the tools to provide firsthand experience

### Additional Context
- [Buy vs build: did vibe-coding kill legal tech? - Juro](https://juro.com/blog/did-vibe-coding-kill-legal-tech)
- [Build vs Buy: Adding AI to Your Legal Services Business](https://www.inquery.ai/post/build-vs-buy-decision-2025/)

---

## Research Notes

**Search strategy:**
- 8 web searches conducted focusing on: Jamie Tso + vibe coding, his projects, philosophy, GitHub work
- Web fetch attempted on 4 key articles (all returned 403 - sites blocking automated access)
- Successfully retrieved GitHub profile with project details
- Search results contained substantial quoted material and summaries

**Dead ends:**
- Artificial Lawyer articles blocked web fetch (but search results contained good excerpts)
- No Singapore-specific vibe coding examples found (but principle applies regionally)
- Limited technical depth available without accessing GitHub READMEs directly

**Strengths of research:**
- Very recent material (January 2026 articles)
- Multiple authoritative sources (Artificial Lawyer, law school CLEs, firm profiles)
- Concrete projects with metrics (GitHub stars/forks)
- Clear build vs buy framework

**Gaps:**
- Haven't tested any of the tools firsthand
- Limited direct quotes from Tso (403 errors on full articles)
- No cost/time estimates for building similar tools
- No Singapore/ASEAN-specific adoption examples

**Next steps if proceeding with post:**
1. Access GitHub READMEs for technical details of each project
2. Consider testing one tool to provide firsthand perspective
3. Search for Singapore Law Society or ASEAN bar association positions on lawyer-built tools
4. Look for governance frameworks for vibe-coded tools
5. Find cost comparisons (vibe coding vs commercial legal tech)

---

## Material Sufficiency Assessment

**VERDICT: YES - More than enough material for a substantial post**

**What we have:**
- ✅ Compelling protagonist (Jamie Tso) with clear background story
- ✅ 4 concrete projects with descriptions and impact metrics
- ✅ Clear philosophy (build vs buy framework)
- ✅ Broader trend context (vibe coding movement)
- ✅ Multiple angles to pursue
- ✅ Direct alignment with alt-counsel mission
- ✅ Timely (January 2026 coverage)

**What would strengthen the post (optional):**
- Testing one of his tools firsthand
- Direct quotes from full interviews (currently blocked)
- Singapore/ASEAN specific examples
- Cost/time analysis

**Ready to proceed to:** Pitch generation and outline development
