# Outline: TechLawFest Got Prompt Engineering Wrong (And Why That Matters)

**Target length:** 1500-2500 words
**Tone:** Contrarian, direct, critical
**Target audience:** Resource-constrained legal teams, particularly Singapore lawyers

---

## Section 1: The Inflection Point (September 2025)
**Purpose:** Establish the timing and significance of the paradigm shift

### Opening Hook
- Your LinkedIn image: 2024 vs 2025 comparison (3-page prompts → reusable frameworks)
- This isn't about productivity tips - it's about a fundamental architectural shift

### The Timeline
- **September 10-11, 2025**: TechLawFest runs "Unlocking the Power of Prompt Engineering with Generative AI" workshop (twice)
  - Singapore Academy of Law + Singapore Corporate Counsel Association
  - Teaching Goal-Context-Expectations-Source (GCES) framework
  - Focus: "chat-based generative AI tools"

- **September 1-30, 2025**: Ministry of Law releases official "Guide for Using Generative AI in the Legal Sector" for public consultation
  - References SAL/Microsoft "Prompt Engineering for Lawyers" guide (2024)
  - Endorses GCES framework
  - Explicitly promotes TechLawFest as place to learn emerging tech
  - Acknowledges agentic tools exist (Harvey, CoCounsel) BUT implementation guidance still assumes prompt-engineering approach

- **September 18, 2025**: Simon Willison publishes blog post formalizing agent definition
  - "An LLM agent runs tools in a loop to achieve a goal"
  - After years of dismissing "agent" as hopelessly ambiguous
  - ONE WEEK after TechLawFest

- **September 25, 2025**: GitHub Copilot coding agent goes GA
  - TWO WEEKS after TechLawFest
  - Available to all paid Copilot subscribers

### The Problem Statement
- TechLawFest taught lawyers to perfect ChatGPT prompts at the exact moment the industry shifted to agent-based tools
- This isn't a minor timing issue - it's teaching the wrong mental model for tools that work fundamentally differently
- The official legal establishment (government, SAL, major firms) is trying to bridge both paradigms but hasn't grasped the implications

**Word count target:** 300-400 words

---

## Section 2: Two Paradigms - Chat vs Agents
**Purpose:** Explain the technical difference in concrete terms lawyers can understand

### The Chat-Based Paradigm (2024)
**What it is:**
- Turn-by-turn conversation with LLM
- User crafts prompt → AI responds → user validates → next prompt
- Single response per interaction
- User responsible for breaking down complex tasks

**Optimized frameworks:**
- CO-STAR (Context, Objective, Style, Tone, Audience, Response)
- GCES (Goal, Context, Expectations, Source)
- Both designed for single-turn or short conversational exchanges

**What lawyers learned:**
- How to structure effective prompts
- How to provide context and examples
- How to specify format and tone
- How to iterate through refinement

**Tools that fit this model:**
- ChatGPT (free and Plus)
- Claude.ai conversational interface
- Microsoft Copilot for Word/Outlook
- General-purpose chat interfaces

### The Agent-Based Paradigm (2025)
**What it is:**
- Simon Willison's definition: "An LLM agent runs tools in a loop to achieve a goal"
- Autonomous multi-step execution
- Self-correcting through iteration
- Runs until task complete or blocked

**Key differences:**
- **Not reactive** - doesn't wait for user validation at each step
- **Has tools** - can read files, run commands, search, edit code
- **Loops autonomously** - continues iterating until success or failure
- **Self-validates** - checks own work, reruns tests, fixes errors

**What this requires from users:**
- Broader thinking upfront about goals and constraints
- Framework design, not prompt crafting
- Reusable patterns and guidelines
- Trust in autonomous iteration

**Tools that fit this model:**
- Claude Code
- Cursor (agent mode)
- GitHub Copilot (agent mode, GA Sept 25, 2025)
- Agentic IDEs and coding assistants

### The Middle Ground: Custom GPTs and Gems
**Why they matter:**
- Persistent instructions and context
- Simple step up from conversation
- BUT: Still fundamentally reactive, not autonomous
- User still drives the conversation turn-by-turn

**Where they fit:**
- Bridge between paradigms
- Good for standardizing chat interactions
- Not true agents by Simon's definition

### The Critical Insight
The skills are not transferable. GCES framework won't help you design effective Claude Code skills. CO-STAR won't make Cursor more productive. The mental model is different.

**Word count target:** 500-600 words

---

## Section 3: Why Agents Change Everything
**Purpose:** Explain the implications at the architectural level

### From Prompts to Frameworks
**The 2024 approach:**
- Each task needs a carefully crafted prompt
- 3-page documents specifying context, examples, constraints
- One-time use for specific situations
- Optimization through prompt refinement

**The 2025 approach:**
- Design reusable frameworks that apply across scenarios
- Think in systems, not conversations
- Define boundaries and principles upfront
- Let the agent iterate within those constraints

### The Loop Changes Everything
**Why autonomous iteration matters:**

1. **Self-correction capability**
   - Agent runs tests, sees failures, fixes code, reruns
   - No user intervention needed for standard errors
   - Can try multiple approaches until one works

2. **Multi-step reasoning**
   - Agent breaks down complex tasks independently
   - Searches for context when needed
   - Combines information from multiple sources
   - Builds comprehensive solutions iteratively

3. **Tool orchestration**
   - Reads files to understand context
   - Searches codebase for patterns
   - Runs commands to verify assumptions
   - Edits multiple files in sequence
   - Tests changes and iterates

### Real Example: Your Evolution
**2024 approach:**
- Writing detailed 3-page prompts for each coding task
- Specifying exact steps and requirements
- Providing examples and context
- Validating each output before proceeding

**2025 approach:**
- Building reusable skills framework for Claude Code
- Each skill defines principles and patterns
- Agent reads skill, applies to any relevant task
- Iterates autonomously within skill guidelines
- You write the skill once, use it everywhere

### What This Means for Legal Work
The difference isn't just coding. Any complex, multi-step legal task benefits from agents:
- Multi-document review and synthesis
- Contract analysis against playbooks
- Legal research across jurisdictions
- Document drafting with multiple dependencies

Chat-based tools require you to orchestrate. Agent-based tools orchestrate themselves.

**Word count target:** 400-500 words

---

## Section 4: Case Study - From 3-Page Prompts to Reusable Skills
**Purpose:** Concrete example of the paradigm shift in action

### The Before State (2024)
**Your workflow with ChatGPT/Claude chat:**
- Start each coding session with detailed prompt
- Include project context, coding standards, requirements
- Provide examples of desired patterns
- Specify error handling approaches
- 3 pages per task
- Effective but not scalable

**Why it worked for chat-based tools:**
- Gave the model all context in one shot
- Specified exactly what you wanted
- Minimized hallucinations through examples
- Standard best practice for 2024

### The Transition Challenge
**When you moved to Claude Code:**
- Initial instinct: write detailed prompts like before
- Problem: Agent needs broader guidance, not step-by-step instructions
- The agent will iterate - it needs principles, not procedures
- 3-page prompts became counterproductive

### The After State (2025)
**Your current workflow with Claude Code:**
- Built library of reusable skills
- Each skill defines patterns and principles
- Agent reads relevant skills before starting
- Applies framework to current task
- Iterates autonomously within guidelines

**Example skills you've built:**
- Brainstorming workflow (Socratic method, iterative refinement)
- Code review patterns (what to check, common issues)
- Testing approach (when to test, how to verify)
- Documentation standards (structure, tone, completeness)

**The productivity gain:**
- Write skill once, use everywhere
- No need to repeat context
- Agent adapts framework to situation
- You focus on problem, agent handles implementation

### The Key Realization
You're no longer crafting prompts - you're designing systems. The skill is what you would have put in the 3-page prompt, but structured as reusable guidelines instead of one-time instructions.

**Word count target:** 350-450 words

---

## Section 5: Reality Check for Legal Teams
**Purpose:** Direct guidance on what to do instead, with critical edge

### What TechLawFest Got Wrong
**The workshop taught:**
- GCES framework for chat-based tools
- How to craft better prompts
- Techniques for single-turn interactions
- Optimization through prompt refinement

**The problem:**
- This is 2024 thinking
- The tools that actually matter for legal professionals (Harvey, CoCounsel, legal research agents) are moving toward agentic architecture
- Even the Ministry of Law guide acknowledges Harvey and CoCounsel exist, then teaches prompt-engineering techniques designed for ChatGPT

**The tension:**
The establishment knows agentic tools exist but doesn't understand they require different thinking. Ministry of Law guide (Sept 2025) says "Refine prompts to introduce clearer constraints... Document best practices to guide users in crafting more effective prompts" while recommending Harvey and CoCounsel.

That's like teaching people to ride horses when you're selling them cars.

### What to Focus On Instead

**1. Understand which tools are actually agents**
- Not everything called an "AI tool" is agent-based
- Chat interfaces (ChatGPT, Claude.ai, Copilot in Word) = conversational
- Task completion tools (Harvey workflows, CoCounsel tasks, legal research agents) = increasingly agentic
- Know the difference before investing training time

**2. Learn framework thinking, not prompt crafting**
- If the tool iterates autonomously, it needs principles not procedures
- Design reusable guidelines and patterns
- Think systems, not conversations
- Build once, apply everywhere

**3. Test for agent behavior**
- Does it iterate without asking permission?
- Can it self-correct errors?
- Does it orchestrate multiple steps independently?
- If yes → agent thinking. If no → prompt thinking.

**4. Stop perfecting ChatGPT prompts**
- Unless ChatGPT is your primary tool (it probably shouldn't be)
- CO-STAR and GCES are useful for chat interfaces
- But they won't help with agentic tools
- Time spent mastering prompt frameworks for chat = time not spent learning agent-based workflows

**5. For resource-constrained teams specifically**
- You can't afford to learn the wrong paradigm
- Agent-based tools offer bigger productivity gains
- But only if you think differently about how to use them
- Prompt engineering workshops optimized for tools you shouldn't be using

### The Uncomfortable Truth
Singapore's legal establishment - government, SAL, major firms, TechLawFest - is a step behind. The Ministry of Law guide is well-intentioned and thorough, but it's trying to apply 2024 frameworks to 2025 tools.

This isn't about criticizing individuals. The workshop facilitators are doing their best. But the institutional knowledge hasn't caught up to the architectural shift that happened in September 2025.

### What This Means for You
**If you attended TechLawFest's prompt engineering workshop:**
- The skills you learned are useful for ChatGPT and similar chat tools
- They are NOT useful for agent-based tools
- Don't assume "I learned prompt engineering" means you know how to use Harvey, CoCounsel, or legal research agents effectively

**If you're choosing tools for your team:**
- Ask whether the tool is conversational or agentic
- Match your learning investment to the tool architecture
- Don't learn GCES framework for tools that need system design thinking

**If you're building AI literacy programs:**
- Separate chat-based tools from agent-based tools
- Teach different approaches for each
- Don't assume prompt engineering is universal

### The Path Forward
1. Acknowledge the paradigm shift happened (September 2025)
2. Understand which tools you actually use are agents
3. Learn framework design for agentic tools
4. Keep prompt engineering for chat interfaces
5. Stop treating all AI tools as interchangeable

The lawyers who figure this out in 2025 will have a massive advantage over those still perfecting their CO-STAR prompts in 2026.

**Word count target:** 600-700 words

---

## Conclusion: The Real Lesson
**Purpose:** End with forward-looking challenge

TechLawFest 2025 wasn't wrong to teach prompt engineering. It was wrong to teach it as universal AI literacy when the tools that matter most are moving beyond prompts.

The real question: How many more years will Singapore's legal establishment teach 2024 techniques while the industry operates on 2025 architecture?

For resource-constrained teams, this matters more than you think. You can't afford to learn the wrong thing twice.

**Word count target:** 100-150 words

---

## Total Estimated Word Count: 2,250-2,800 words
(Target range: 1,500-2,500 words - may need to trim during drafting)

---

## Key Sources to Cite

1. **Simon Willison blog post** (Sept 18, 2025) - agent definition
2. **TechLawFest 2025 program** - workshop details
3. **Ministry of Law guide** (Sept 2025) - official government position
4. **SAL/Microsoft "Prompt Engineering for Lawyers"** (2024) - GCES framework
5. **GitHub Copilot agent GA announcement** (Sept 25, 2025)
6. **Your LinkedIn image** (visual evidence of evolution)

---

## Structural Notes

**Opening:** Start with the visual (LinkedIn image), then hit them with the timing
**Build:** Section 1 establishes inflection point → Section 2 explains technical difference → Section 3 shows implications
**Pivot:** Section 4 makes it concrete with your personal evolution
**Land:** Section 5 delivers the critical reality check with specific guidance

**Tone maintenance:**
- Section 1: Factual, timeline-driven
- Section 2: Educational, clear distinctions
- Section 3: Analytical, showing why it matters
- Section 4: Personal, relatable
- Section 5: Critical but constructive, direct challenge to establishment

**The contrarian edge lives in Section 5** - that's where you directly challenge TechLawFest, Ministry of Law, and the Singapore legal establishment. Sections 1-4 build the credible foundation so Section 5 lands with authority.
