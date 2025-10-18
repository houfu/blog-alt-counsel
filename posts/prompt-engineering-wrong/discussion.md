# Discussion Log: TechLawFest Got Prompt Engineering Wrong

## Discussion - 2025-10-16

### Context
Houfu shared a LinkedIn image contrasting his 2024 approach (writing 3-page prompts for each task) with his 2025 approach (building reusable frameworks that apply to any scenario). He felt this evolution was newsletter-worthy.

### Brainstorming Process

**Initial direction:** I initially thought this was a productivity story, but Houfu clarified it's actually a **mindset shift piece** (Option C from brainstorming).

**Key insight revealed:** The core issue isn't just about saving time - it's about how **prompting has evolved due to agents**. As Simon Willison defines them, agents are "LLMs run in a loop to complete tasks." This architectural shift requires thinking broader and building frameworks rather than crafting turn-by-turn prompts.

**TechLawFest 2025 context:** Houfu observed significant interest in prompt engineering at TechLawFest 2025, but noted that many lawyers are "stuck in the old ways" - still learning 2024-style prompt crafting when the tools that matter now (Claude Code, Cursor) work differently.

**Approach selection:** From three structural approaches, Houfu chose **Approach 3: The Inflection Point**, with a critical edge positioning TechLawFest as representing where lawyers *are* (outdated), not where they need to be.

**Tone decision:** Houfu identified as a "contrarian" and chose to write with a direct, critical voice (Option C): "Most lawyers at TechLawFest are learning the wrong thing at the wrong time - here's what to focus on instead."

### Decisions Made

1. **Primary angle:** Technical shift (agent architecture) as foundation → practical implications for legal professionals
2. **Positioning:** Contrarian reality check, not encouraging or accommodating
3. **Working title:** "TechLawFest Got Prompt Engineering Wrong (And Why That Matters)"
4. **Structure:** 5 sections from inflection point → two paradigms → technical why → case study → practical guide
5. **Target outcome:** Get resource-constrained legal teams to stop perfecting ChatGPT prompts and start building frameworks for agent-based tools

### Next Steps
- Develop outline based on approved pitch
- Draft the newsletter article
- Consider including the LinkedIn image as visual illustration of the evolution

---

## Discussion - 2025-10-17

### Research Phase Completion

**Major sources added to research-sources.md:**

1. **Singapore Academy of Law "Prompt Engineering for Lawyers" guide (2024)**
   - Co-authored with Microsoft Corporation
   - 15-page official guide teaching GCES framework (Goal-Context-Expectations-Source)
   - Explicitly focused on "chat-based generative AI tools"
   - No mention of agents or autonomous loops
   - This is THE official guide being taught to Singapore lawyers

2. **TechLawFest 2025 Program (Sept 10-11, 2025)**
   - Session 1B: "Unlocking the Power of Prompt Engineering with Generative AI"
   - Ran TWICE (Day 1 and Day 2) at 11:00AM-12:00PM in Saraca Ballroom
   - Presented by SAL and Singapore Corporate Counsel Association
   - Hands-on workshop teaching GCES framework
   - Perfect timing: just ONE WEEK before Simon Willison's agent definition (Sept 18)

3. **Ministry of Law "Guide for Using Generative AI in the Legal Sector" (Sept 2025)**
   - Official government guidance for entire Singapore legal sector
   - Draft for public consultation Sept 1-30 (overlapping with TechLawFest Sept 10-11)
   - 26 pages + annex with contributions from major firms, SAL, courts, law society
   - **Critical tension identified**: Guide acknowledges agentic tools exist (Harvey, CoCounsel explicitly mentioned in use cases) BUT implementation guidance (Section 4.4) still assumes prompt-engineering approach: "Refine prompts to introduce clearer constraints... Document best practices to guide users in crafting more effective prompts"
   - Explicitly promotes TechLawFest as place to learn emerging technologies
   - References SAL/Microsoft guide and endorses GCES framework

**Key Finding - The Paradigm Gap:**
The Singapore legal establishment (government, SAL, major firms) knows agentic tools exist but the training/implementation guidance is still rooted in the chat-based, turn-by-turn interaction model. They're teaching prompt-crafting techniques for tools that need framework-design thinking.

**Timeline Significance:**
- Sept 1-30, 2025: Ministry of Law guide public consultation
- Sept 10-11, 2025: TechLawFest teaches GCES for chat-based tools (twice)
- Sept 18, 2025: Simon Willison formalizes agent definition
- Sept 25, 2025: GitHub Copilot agent goes GA

All within 25 days. TechLawFest taught the 2024 paradigm literally ONE WEEK before the 2025 shift became formalized.

### Outline Development

**Created comprehensive 5-section outline (2,250-2,800 words, will trim to 1,500-2,500 during drafting):**

1. **Section 1: The Inflection Point (300-400 words)**
   - Opens with LinkedIn image
   - Lays out September 2025 timeline with precision
   - Establishes the problem: TechLawFest taught wrong mental model at exactly wrong time

2. **Section 2: Two Paradigms (500-600 words)**
   - Technical explanation: chat-based vs agent-based architecture
   - CO-STAR/GCES frameworks vs framework-design thinking
   - Custom GPTs/Gems as middle ground
   - Critical insight: skills don't transfer between paradigms

3. **Section 3: Why Agents Change Everything (400-500 words)**
   - Autonomous loops enable self-correction
   - Multi-step reasoning and tool orchestration
   - From prompts to frameworks (reusable systems)
   - Implications for legal work

4. **Section 4: Case Study (350-450 words)**
   - Houfu's personal evolution: 3-page prompts → reusable skills
   - Concrete example of paradigm shift in action
   - Makes abstract concepts relatable

5. **Section 5: Reality Check (600-700 words)**
   - **This is where the contrarian edge lives**
   - Direct critique of TechLawFest and Ministry of Law guide
   - The uncomfortable truth: Singapore legal establishment is a step behind
   - Specific actionable guidance: what to do instead
   - Key metaphor: "Teaching people to ride horses when you're selling them cars"

**Strategic Decisions:**

1. **Ministry of Law guide is the smoking gun**: Perfect evidence of paradigm gap - acknowledges Harvey/CoCounsel (agents) then teaches prompt-refinement techniques (chat)

2. **Build credibility before critique**: Sections 1-4 establish facts, technical foundation, and personal evidence. Section 5 delivers the critical challenge with earned authority.

3. **Constructive criticism**: Section 5 doesn't just criticize - it provides specific guidance on what legal teams should do instead

4. **Target the system, not individuals**: "This isn't about criticizing individuals. The workshop facilitators are doing their best. But the institutional knowledge hasn't caught up to the architectural shift."

### Key Quotes for Article

**From Ministry of Law guide Section 4.4:**
"Refine prompts to introduce clearer constraints, contextual details, and instructions to steer model responses towards higher quality results. Document best practices to guide users in crafting more effective prompts."

This perfectly captures the paradigm gap - official guidance teaching prompt-crafting for tools that need framework thinking.

**From SAL/Microsoft guide:**
"This guide provides fundamental prompt engineering techniques that are helpful across various **chat-based generative AI tools**"

Makes the chat-based assumption explicit.

**Simon Willison (Sept 18, 2025):**
"An LLM agent runs tools in a loop to achieve a goal"

Simple, definitive, widely accepted definition that emerged right after TechLawFest.

### Files Created/Updated

1. `/posts/prompt-engineering-wrong/pitch.md` - Approved pitch
2. `/posts/prompt-engineering-wrong/discussion.md` - This file (conversation log)
3. `/posts/prompt-engineering-wrong/research-sources.md` - Comprehensive citations with 10 major source categories
4. `/posts/prompt-engineering-wrong/outline.md` - Detailed 5-section structure with word counts

### Ready for Next Session

**Status:** Research complete, outline approved, ready to draft

**Next steps:**
1. Draft article section by section following outline
2. Integrate LinkedIn image (decide placement)
3. Add proper citations to research sources
4. Review for contrarian tone consistency
5. Trim to target word count (1,500-2,500)

**Key decision pending:** Should LinkedIn image open the article (visual hook) or appear in Section 4 (case study context)?

---

## Discussion - 2025-10-18

### Drafting Session - Section 1 and 2

**Context:**
Houfu began drafting the article. He rewrote Section 1 (The Inflection Point) with better storytelling - added vivid details like "standing room only" at TechLawFest's prompt engineering workshop despite it being "hidden far away from lunch...in a long linear room that felt disorientating."

**Key revision to Section 1:**
- Changed title from "TechLawFest Got Prompt Engineering Wrong" to "Lawyers Got Prompt Engineering Wrong" - broader scope
- Added timeline detail: Sept 9 - Anthropic announced file creation/editing, someone reverse-engineered it and found "Skills"
- Added: Oct 17 - Anthropic made Skills available to all products
- Stronger contrast: "Things couldn't be more different at the forefront of this technology"
- Made the inflection point more dramatic by showing what lawyers were learning vs. what the industry was building

**Section 2 rewrite - "Show don't tell" approach:**
Houfu requested using his actual LinkedIn examples rather than abstract definitions. I drafted Section 2 using:
- **2024 example:** His 3-page M&A term sheet prompt with detailed step-by-step instructions (Context → Task → Approach → 6 sections with multi-step procedures)
- **2025 example:** His "Generate a pitch" skill (45 lines defining principles, success criteria, and process framework)

**Key insight from the examples:**
The 3-page prompt tells Claude *how* to do each step. The skill tells Claude Code *what makes good output* and lets the agent figure out how to achieve it.

**Important edit by Houfu:**
Changed final line from "GCES framework helps you write better 3-page prompts" to "Prompting formulas help you write better 3-page prompts. Prompt libraries let you see how to write a prompt for each new situation. But it doesn't help you design skills that agents can apply autonomously across scenarios."

This edit makes a critical distinction:
- Prompting formulas (GCES, CO-STAR) = better individual prompts
- Prompt libraries = examples for reference
- Neither helps with agent skill design

**Microsoft Copilot clarification:**
I researched Microsoft Copilot's status and found it has TWO modes as of Sept 2025:
1. Traditional chat-based Copilot (what existed during TechLawFest, what SAL guide taught)
2. Agent Mode (announced Sept 29, THREE WEEKS after TechLawFest)
3. Office Agent (chat-based with deeper research, powered by Anthropic models)

This timing is perfect for the article - TechLawFest taught prompt engineering for chat-based Copilot, then Microsoft announced Agent Mode three weeks later, further proving the paradigm gap.

**Uploaded materials:**
Houfu uploaded the actual source files from his LinkedIn post:
- `2024 - Prompt.pdf` - The 3-page M&A term sheet prompt
- `2025-SKILL.md` - The "Generate a pitch" skill

These concrete examples replace abstract explanations and make the paradigm shift tangible.

**Progress:**
- Section 1: Completed by Houfu with vivid storytelling
- Section 2: Drafted using actual examples, shows concrete difference between prompts vs. skills
- Changed to "show don't tell" approach throughout

**Next steps:**
- Continue with remaining sections using concrete examples
- Maintain the "show don't tell" approach
- Keep contrarian edge while building credibility through specifics

---

## Discussion - 2025-10-18 (continued)

### Section 3 Development - Understanding the Core Paradigm Shift

**Initial challenge:**
I initially drafted Section 3 focusing on tool access (file system access, running commands, etc.) as the distinguishing feature. Houfu correctly pushed back - this isn't about feature sets since both paradigms can have tools (Harvey has LexisNexis search, ChatGPT has web search, Skills can call APIs).

**Key insight from Houfu:**
"We decide when to use tools and how to chain them together. Because enterprise context differs greatly, and the matters you deal with can have various possibilities. A lawyer needs to be able to know when he can be specific and when he can be general. Good vendors know where to pitch and that makes them a lot of money when they succeed. But now I have access to a very powerful model and the ability to customise how I can use it."

**The real paradigm shift: Control over decision-making logic**

The difference isn't what tools exist, but **who controls the decision-making architecture**:
- Chat-based: You decide via prompts each time
- Custom GPTs: You write static instructions once (automates prompt building)
- Vendor tools: Vendor decides the workflow logic
- Agent + Skills: You program the decision-making logic yourself

**Critical distinction about Custom GPTs:**
Houfu clarified: "Custom GPT can't make decisions I think it's more like change course when it encounters issues."

This is the precise limitation - Custom GPTs apply static instructions. They can't:
- Check if counterparty is in approved vendors list and adjust approach
- Search template library to verify deviations
- Adapt based on what they discover during execution

**Legal-specific insight:**
Legal work requires context-specific judgment - when to be aggressive vs. balanced, when to be specific vs. general. This varies by:
- Counterparty relationship (trusted vendor vs. new startup vs. Fortune 500)
- Deal importance
- Firm's risk tolerance
- Specific matter type

Vendors build one workflow and sell to everyone. Skills let you encode YOUR firm's judgment into the decision-making logic.

**Example NDA Review Skill added:**
Shows conditional logic - check approved_vendors.csv, apply different review modes (balanced vs. strict) based on context, escalate specific clauses based on your firm's risk tolerance.

**Key line:**
"Prompt engineering teaches you to write better instructions within someone else's system. Skills let you program the system itself."

**Three-tier framework established:**
1. Chat-based tools - Program logic each time via prompts
2. Persistent context (Custom GPTs) - Static instructions, can't adapt when encountering issues
3. Enterprise vendors - Vendor's predetermined workflow
4. Agent + Skills - You control the decision-making logic

**Section 4 simplified:**
Houfu removed the entire "Before/Transition/After" case study section and replaced with:
- "Eagle eyed observers may recognise the prompt in 2024 -- I wrote it for a Prompt Writing competition organised by the Singapore Academy of Law and Microsoft."
- Key realization: "I'm no longer crafting prompts - I'm designing systems."

This keeps the personal connection but removes repetitive explanation since the paradigm shift is already clearly shown in Section 2.

**Progress:**
- Section 3: Rewritten to focus on control over decision-making logic, not feature sets
- Added three-tier framework (chat → custom GPT → vendor → agent+skills)
- Clarified Custom GPT limitation: can't change course when encountering issues
- Section 4: Simplified to avoid repetition

**Next:**
- Section 5 (Reality Check) needs drafting
- Final review for flow and contrarian tone

---

## Discussion - 2025-10-18 (Quality Control & Final Edits)

### Reviewer Feedback Analysis

**Two specialist reviewers provided feedback:**

1. **In-house counsel reviewer** (target audience perspective)
2. **Legal tech blog reviewer** (content quality perspective)

**Critical gaps identified:**

1. **Security/compliance objection (deal-breaker):**
   - In-house counsel immediately thought: "But vendor tools have SOC 2, indemnity, audit trails"
   - Missing discussion would cause readers to dismiss entire argument
   - Added comprehensive "But What About Security and Compliance?" section with honest trade-offs

2. **Learning curve oversold:**
   - Original claim: "If you can write a detailed prompt, you can write a skill"
   - Reviewer: "This undersells the difficulty and sets false expectations"
   - Fixed: "Skills are structured markdown with metadata - there's a learning curve, but it's not programming. The barrier isn't technical complexity. It's recognizing this isn't a productivity hack. Skills require time to design, test, and debug."

3. **NDA example was pseudocode, not usable:**
   - Original had code-like syntax that wasn't executable
   - Reviewer: "Missing: A concrete first step... Show me a legal workflow that's actually simple"
   - Replaced with actual usable skill file with YAML frontmatter, specific review criteria, and "How to use this" instructions

4. **TechLawFest critique too harsh:**
   - Legal tech reviewer: "Borders on too critical... TechLawFest critique could be sharper while staying constructive"
   - Changed framing from "got it wrong" to "taught what lawyers needed for chat-based tools—but the technology landscape was shifting beneath them"
   - Made it a "missed opportunity" rather than a mistake

5. **Repetition across sections:**
   - Both reviewers identified ~150-200 words of repetitive content
   - Three specific sections flagged for cutting

### Quality Audit & Critical Error Fixes

**Word count check:** 3,797 words (target: ~3,000)

**Critical errors found:**
1. **Typo** (line 242): "wit this" → "with this"
2. **Date phrasing** (line 13): "It's September 2025" → "In September 2025, what were..."
3. **Grammar** (line 17): "high powered teams will run" → "high-powered teams ran"

**Sections identified for trimming (~750 words total):**
1. Lines 39-53: 2024 example details (~150 words)
2. Lines 232-242: Personal competition story (~200 words)
3. Lines 265-277: "What Prompt Engineering Actually Gets You" (~180 words)
4. Lines 287-303: "What you could build" examples (~120 words)
5. Lines 333-346: Vendor vs. custom comparison lists (~100 words)

### Final Editing Session

**User requested:** "1 and 3" (fix critical errors + trim sections)

**Changes made:**

1. **Fixed critical errors:**
   - Corrected typo, date phrasing, grammar issues

2. **Trimmed 554 words (3,797 → 3,243 words):**
   - Removed competition backstory (kept core insight only)
   - Deleted "What Prompt Engineering Actually Gets You" section (redundant)
   - Condensed "What you could build" from two detailed lists to one paragraph
   - Reduced 2024 example from 14 lines to 4 lines
   - Condensed vendor/custom comparison from two lists to one sentence
   - Trimmed repetitive passages in conclusion

**Security section additions:**
- Acknowledged vendor advantages (SOC 2, indemnity, audit trails)
- Provided honest trade-offs between vendor tools vs. custom skills
- Added practical risk management guidance (5 specific points)
- Clarified when vendor tools are the right answer

**NDA skill improvement:**
- Changed from pseudocode to actual usable markdown skill
- Added YAML frontmatter (name, description, when_to_use)
- Provided specific review criteria and red flags
- Included "How to use this" instructions

**Tone adjustments:**
- Softened TechLawFest critique from "got it wrong" to "missed opportunity"
- Maintained contrarian edge while being constructive
- Added honest acknowledgment of when vendor tools make sense

### Final Status

**Word count:** 3,243 words (down from 3,797)
**Structure:** Complete with all 5 sections plus security discussion
**Quality:** Critical errors fixed, repetition removed, concrete examples included
**Tone:** Constructive contrarian - critical but actionable

**Ready for:** Posting as draft on Ghost

**Next steps:**
1. Take notes (this entry)
2. Post as draft on Ghost

---

## Discussion - 2025-10-18 (Final Streamlining and Publication)

### Context

After posting the draft to Ghost, we identified significant repetition issues in the article. The post was at 3,243 words but felt repetitive - the same points about "control decision-making logic," "prompts vs systems," and "resource-constrained teams" appeared in multiple sections.

### Analysis of Repetition

**Major problems identified:**

1. **Section 4 "Case Study"** was entirely redundant:
   - Restated points already made in Sections 2 and 3
   - The "3-page prompt" story was already told in Section 2
   - No new information, just circular restatement

2. **Section 5 "The Missed Opportunity"** had heavy repetition:
   - Opening paragraphs restated Section 3's thesis about decision-making logic
   - "What You're Leaving on the Table" subsection repeated examples from Section 3
   - "The Barrier Isn't Technical" mixed learning curve discussion with economics

3. **Conclusion repeated economics message** that was already stated in the economics section

### Streamlining Process (Step by Step)

**Step 1:** Removed Section 4 "Case Study - From 3-Page Prompts to Reusable Skills" entirely
- Deleted "A 3 page prompt is a prompt gone astray" subsection
- Deleted "From prompts to systems" subsection
- Removed ~400 words of pure repetition

**Step 2:** Renamed Section 5 from "The Missed Opportunity" to "The Trade-Offs"
- Changed opening from repetitive thesis restatement to focused questions: "What can you afford? And what risks can you accept?"

**Step 3:** Deleted "What You're Leaving on the Table" subsection
- Removed repetition of "program decision-making logic" (Section 3's point)
- Removed duplicate contract review/research examples

**Step 4:** Condensed "Economics" subsection
- Cut from ~250 words to ~80 words
- Focused purely on pricing comparison
- Removed repetitive "systems" language
- Added transition: "But economics isn't the only consideration"

**Step 5:** Updated "Security and Compliance" section
- Changed heading from "But What About Security and Compliance?" to "Security and Compliance"
- Corrected inaccurate claims about certifications (Anthropic also has SOC 2 Type II)
- Reframed trade-offs around enterprise support vs self-service, not certifications

**Step 6:** Removed duplicate "Why this matters" paragraph from conclusion
- Economics already covered in Economics section
- Final conclusion paragraph already makes this point

**Result:** Reduced from 3,243 words to 2,520 words (723-word reduction, 22% shorter)

### Adding Back the Competition Story

After streamlining, we evaluated what to restore:

**Decided to add back:** Condensed competition story (50 words)
- Placed in Section 2 right after the 3-page prompt example
- Added personal credibility (actual SAL competition entry)
- Included ironic payoff (disqualified for taking too long)
- Brief enough not to derail flow

**Decided to keep cut:** Inflection Point storytelling details
- Vivid but didn't advance the argument
- "Standing room only" point already made

**New word count after addition:** 2,567 words

### Final Adjustments to Match Published Version

After manual editing in Ghost, the published version had three key differences:

1. **Removed "What Changed?" subsection** (lines 100-114)
   - The comparison table of 2024 vs 2025 approaches
   - Redundant - the examples already show the difference
   - Saved another ~75 words

2. **Added "Conclusion" as proper heading**
   - Changed from separator line to H2 heading

3. **Minor wording improvements:**
   - "2024 SAL/Microsoft" (added year for clarity)
   - Improved punctuation in competition story

4. **Added backlinks** (in Ghost, not markdown):
   - Link to "Introducing: Prompt Engineering for Lawyers"
   - Link to "Beyond the Harvey Drama"
   - External bookmark cards for Simon Willison and Anthropic posts

### Final Published Version Stats

**Word count:** ~2,492 words (down from 3,797 original)
**Reduction:** 1,305 words cut (34% reduction)
**Structure:** 5 main sections (down from 7)

**Sections:**
1. The Inflection Point (September 2025)
2. Two Paradigms - Chat vs Agents
3. Why Agents Change Everything
4. The Trade-Offs (Economics + Security/Compliance)
5. What This Means for You + Conclusion

### Key Decisions

**What worked:**
- Removing entire repetitive sections rather than trying to salvage them
- Focusing Economics and Security subsections on their specific topics
- Keeping concrete examples (3-page prompt, NDA skill) while cutting abstract restatements
- Adding condensed competition story for personal credibility

**What we learned:**
- The article's strength was in the concrete examples, not in restating the thesis
- Each section should introduce NEW information or perspective
- Repetition creeps in when you try to "make sure readers get it" - trust the examples
- Word count reduction improved clarity and punch

### Publication

**Published:** October 18, 2025
**URL:** https://www.alt-counsel.com/lawyers-prompt-engineering-wrong/
**Status:** Live, manually edited in Ghost to match streamlined structure
**Ghost post ID:** 68f386ab49c45f0001131422 (original draft, unable to programmatically update)

**Local file updated** to match published version with all changes documented.
