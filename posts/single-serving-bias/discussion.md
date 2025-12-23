# Discussion Notes: The Single-Serving Software Bias

## AUDIT TRAIL: Key Decision Points

### Decision: Article Scope - Personal Resolution vs Industry Commentary (2025-12-23, Session 1)

**Claude's Analysis:**
- Identified three possible approaches: personal resolution, industry commentary, or thematic essay
- Presented trade-offs for each approach (intimacy vs. provocation vs. comprehensiveness)

**Claude's Recommendation:**
Asked user to choose which approach resonated

**User Decision:**
Personal approach - "what I'm going to try" in 2026

**Rationale:**
More authentic and actionable than broad industry critique

**Outcome:**
✅ Focused the pitch on personal experimentation and resolution

---

### Decision: Core Insight - Efficiency vs Impact Mindset (2025-12-23, Session 1)

**Claude's Analysis:**
- Initially thought the article was about avoiding over-engineering
- User clarified: the 3-page prompt might NOT have been wasteful
- Real insight: when creation cost is low, single-purpose tools are fine - don't need generalization

**Claude's Recommendation:**
Asked whether tension was about efficiency mindset vs impact mindset, or personal experimentation anxiety

**User Decision:**
Focus on efficiency mindset (A) - abstraction bias among both coders and lawyers

**Rationale:**
As someone who codes, user recognizes tendency to overvalue reusability. Lawyers also think in abstractions (precedents, templates). One-off work only feels justified for big matters/clients.

**Outcome:**
✅ Sharpened the pitch to address abstraction bias in both professions

---

### Decision: Add Capability Gap Angle (2025-12-23, Session 1)

**Claude's Analysis:**
- User added: "AI has advanced a lot but we have not applied its full capabilities"
- Expanded scope beyond just abstraction bias to include underutilization

**Claude's Recommendation:**
Revised pitch to include: AI can now build interactive tools, visualizations, custom demos - but we're still mostly using it for text

**User Decision:**
Approved revised pitch incorporating capability gap

**Rationale:**
Connects abstraction bias to concrete behavior - we're stuck in text generation mode because we undervalue one-off work

**Outcome:**
✅ Pitch now addresses both mindset (abstraction bias) and behavior (underutilizing AI capabilities)

## WHAT CLAUDE DID (Contributions)

### Research
- Searched for Sam Harden's Substack and identified "Team Do Something"
- Found initial article (Abundance in Non-Profit Land) but user corrected to different article
- Fetched "The Legal UI Revolution" article via Matter link
- Found and read user's previous writing about prompt competition experience
- Read "Lawyers Got Prompt Engineering Wrong" article
- Read "Why Prompt Engineering Felt Wrong" newsletter

### Analysis
- Identified connection between Sam Harden's "single-serving legal software" and user's prompt competition experience
- Recognized abstraction bias pattern across both coding and legal professions
- Connected to broader theme of underutilizing AI's interactive capabilities

### Writing
- Developed pitch through multiple iterations
- Refined from initial understanding (stop over-engineering) to nuanced insight (abstraction bias limits bespoke work)
- Final pitch emphasizes both coder and lawyer mindset, capability gap, and 2026 resolution

### Technical
- Created branch: `single-serving-bias`
- Created post folder: `/workspace/posts/single-serving-bias/`
- Saved pitch.md with refined pitch and key elements

## WHAT WORKED / DIDN'T WORK

### Worked Well ✅

| What Claude Did | User Decision | Outcome |
|-----------------|---------------|---------|
| Used brainstorming skill proactively | Allowed structured refinement | Clear pitch developed through Socratic questioning |
| Asked clarifying questions about scope | User chose personal approach | Focused direction established early |
| Searched blog for prompt competition history | Found detailed context | Better understanding of user's previous writing |
| Caught wrong article (Abundance vs Legal UI Revolution) | User corrected immediately | Found right inspiration source |
| Iteratively refined pitch based on feedback | User added abstraction bias + capability gap angles | Pitch evolved from simple to nuanced |

### Didn't Work ❌

| What Claude Did | Problem | Lesson |
|-----------------|---------|--------|
| Initially searched blog for Sam Harden references | Article was external, not in blog | Should have asked for clarification earlier |
| First pitch focused on over-engineering as mistake | Missed the nuance - user thought it was wasteful but might have been wrong | Need to probe deeper on user's actual insight |

## SESSIONS (Chronological Detail)

---

## Session 1: Brainstorming Single-Serving Software Article (2025-12-23)

### Context

User pitched article idea connecting:
- Sam Harden's article from a few weeks ago
- User's prompt competition piece from 2024
- New Year's resolution theme
- AI's ability to produce web pages, graphs, images easily
- Desire to refrain from over-engineering and find new ways to present work

### What Claude Did

**Research:**
1. Searched blog for "prompt competition" references - found discussion.md in prompt-engineering-to-skills folder
2. Searched for Sam Harden in blog - no results
3. Used WebSearch to find Sam Harden's Substack "Team Do Something"
4. Initially fetched wrong article (Abundance in Non-Profit Land)
5. User corrected with Matter link - fetched "The Legal UI Revolution" article
6. Read user's "Lawyers Got Prompt Engineering Wrong" article (prompt-engineering-wrong.md)
7. Read user's "Why Prompt Engineering Felt Wrong" newsletter

**Analysis:**
- Identified Sam Harden's article was about building interactive micro-tools in 30 minutes
- Connected to user's 3-page prompt competition experience
- Initially thought theme was "stop over-engineering"
- User clarified: they THOUGHT the 3-page prompt was wasteful (not reusable) but maybe that perspective was wrong
- Key insight: when creation cost is 30 minutes, single-purpose tools are viable

**Brainstorming Process:**
1. Asked what Sam Harden's article was about → user directed to search blog
2. Asked whether article was personal resolution vs industry commentary → user chose personal ("what I'm going to try")
3. Asked about specific experiments user was considering → user said "use the skill"
4. Presented three different approaches (personal resolution, industry commentary, thematic essay)
5. User clarified core insight: efficiency mindset vs impact mindset - as a coder, prone to thinking everything should be reusable
6. User added: abstraction thinking is prevalent for lawyers too - one-off work only valued for big matters/clients
7. User added: AI has advanced but we haven't applied full capabilities (still stuck in text generation mode)

**Writing:**
- First pitch draft: focused on "stop over-engineering"
- Revised after clarification: efficiency mindset vs impact mindset
- Final pitch: abstraction bias (coders + lawyers) + capability gap (underutilizing AI) + 2026 resolution

### User Decisions

**Decision 1: Article Scope**
- Chose personal approach ("what I'm going to try in 2026")
- Not industry commentary or broader critique
- Rationale: more authentic and actionable

**Decision 2: Core Tension**
- Focus on abstraction bias / efficiency mindset
- Both coders AND lawyers overvalue reusability
- One-off work only feels justified for big clients/matters
- Rationale: recognizes tendency from coding background, sees parallel in legal profession

**Decision 3: Add Capability Gap Angle**
- Include point about underutilizing AI's full capabilities
- We're still mostly using AI for text, not interactive tools/visualizations
- Rationale: connects mindset (abstraction bias) to behavior (stuck in text generation mode)

**Decision 4: Approved Final Pitch**
- Working title: "The Single-Serving Software Bias: Why Lawyers (and Coders) Undervalue One-Off Work"
- Core elements: 3-page prompt story, abstraction bias, status bias, capability gap, 2026 resolution
- Rationale: captures nuanced insight about how abstraction thinking limits bespoke work

### Outcomes

**✅ What worked:**
- Brainstorming skill structure helped refine vague idea into clear pitch
- Iterative questioning revealed deeper insight (not just "stop over-engineering" but "abstraction bias prevents us from utilizing AI's full capabilities")
- Reading past blog posts provided crucial context (prompt competition story already documented)
- Sam Harden's "Legal UI Revolution" article provided concrete inspiration (30-minute interactive tools)

**❌ What didn't:**
- Initially assumed Sam Harden article was in blog (was external)
- First understanding of insight was superficial (took several rounds to get to abstraction bias + capability gap)

**Files created:**
- `/workspace/posts/single-serving-bias/pitch.md` - Final pitch with key elements and references
- `/workspace/posts/single-serving-bias/discussion.md` - This file

**Branch created:**
- `single-serving-bias` - New branch for this post

### Next Steps

- Develop outline or start drafting based on pitch
- Consider concrete examples of single-serving tools user might build
- Connect to previous articles (Lawyers Got Prompt Engineering Wrong)
- Reference Sam Harden's "Legal UI Revolution" article

### Key References

**Sam Harden's Article:**
- Title: "The Legal UI Revolution: The era of single-serving software for lawyers and clients"
- URL: https://getmatter.com/email/57365556/?token=57365556%3A8tUKznEjWxpXoVqEE_MIXFuQEHB-sJ3u1RBcFXDpaSE
- Key point: Barrier to entry for building micro-tools has collapsed - can create interactive decision tools, visualizations, educational games in ~30 minutes

**User's Previous Work:**
- "Lawyers Got Prompt Engineering Wrong (And Why That Matters)" - documents the 3-page prompt competition experience (2024 SAL/Microsoft competition, M&A term sheet prompt, disqualified for missing deadline)
- "Why Prompt Engineering Felt Wrong (And What Skills Changed)" - newsletter supporting the article

### Questions/Considerations

- What specific single-serving tools will user commit to building in 2026?
- Should article include a quick demo/example built during writing?
- How to balance personal reflection vs actionable guidance for readers?
- Connection to previous articles - is this a continuation of the prompt engineering series, or standalone?

---

## Session 2: Research on Vibecoding Examples & Abstraction Bias (2025-12-23)

### Context

After creating the pitch, user requested research on:
1. Single-use tools created using vibecoding in Singapore (law-related preferred but not necessary)
2. Abstraction bias mindset in lawyers

### What Claude Did

**Research:**
1. Read trusted sources and regional considerations reference files
2. Conducted 8 web searches:
   - "vibecoding Singapore examples 2025"
   - "Rebecca Fordon vibecoding single-serving software"
   - "single-serving software Singapore legal tech 2025"
   - "Singapore legal tech hackathon micro-tools custom applications 2025"
   - "lawyers abstraction bias thinking precedents templates reusability"
   - "precedent mindset lawyers efficiency vs customization legal work"
   - "lawyers templates vs bespoke work generalization legal practice"
3. Fetched detailed content from Rebecca Fordon's Boolean game article

**Analysis:**
- Identified Rebecca Fordon as key source for legal single-serving software philosophy
- Found Singapore vibecoding ecosystem (hackathons, bootcamps, government support)
- Discovered abstract/concrete paradox in legal decision-making research
- Connected templates vs. bespoke work tension to user's abstraction bias theme

**Writing:**
- Created comprehensive research.md with findings organized by theme
- Included statistics, quotes, jurisdictional flags
- Highlighted alt-counsel angle (30-minute tool creation vs $50K platforms)
- Noted content gap: Singapore legal single-serving tools not publicly documented

### Key Findings

**Vibecoding Examples Found:**

1. **Rebecca Fordon's Legal Tools (US-based but globally applicable):**
   - Boolean search game: Built in 30 minutes using Google Gemini
   - Client intake form with point-in-polygon check against toxic plume map
   - Thanksgiving checklist app with reschedule feature
   - Philosophy: "Build specific, hard-coded app for particular case, validate time savings, THEN generalize"

2. **Singapore Hackathon (October 2025, 400+ participants):**
   - F**Yu.AI: AI productivity app that "bullies you into greatness"
   - RizzedIn: Dating site for career-minded individuals
   - AI whiteboarding tool using hand tracking (winner, $50K SGD prize)
   - Sponsors: OpenAI, Cursor, Anthropic, Google DeepMind

3. **Singapore Ecosystem:**
   - Major legal tech hackathon: SMU LIT (Sept 13-14, 2025)
   - Top 5 coding bootcamps with 90% job placement rates
   - Government tuition subsidies up to 90%
   - SGInnovate "Vibe Coding in Production" event (May 2025)

**Abstraction Bias Research:**

1. **Abstract/Concrete Paradox:**
   - Lawyers activate inconsistent intuitions depending on abstract vs. concrete framing
   - Even professional judges show this pattern
   - Concrete cases linked to affective empathy toward plaintiffs

2. **Case-Based vs. Rule-Based Reasoning:**
   - "The basic pattern of legal reasoning is reasoning by example. It is reasoning from case to case."
   - Humans don't think effectively in abstract principles
   - Better understanding when principles expressed as stories/cases

3. **Templates vs. Bespoke Tension:**
   - Templates save time (efficiency)
   - Must customize for each specific matter (customization requirement)
   - Ken Adams argues firms should "get out of template business" (commoditization)
   - Modern tools try to balance both

### User Decisions

**Decision 1: Research Focus**
- Asked for vibecoding examples in Singapore AND abstraction bias in lawyers
- Rationale: Need both concrete examples (what's possible) and theoretical foundation (why we resist)

### Outcomes

**✅ What worked:**
- Rebecca Fordon's work provided perfect examples of single-serving legal software
- Singapore hackathon demonstrated vibecoding ecosystem exists locally
- Abstract/concrete paradox research validates "lawyers think in abstractions" premise
- Template vs. bespoke research confirms the efficiency/customization tension

**Content Gaps Identified:**
- No publicly documented examples of Singapore lawyers building single-serving legal tools
- Could be opportunity for user to be early adopter in local context
- Or tools exist but not described using "single-serving" / "vibecoding" terminology

**Alt-Counsel Insights:**
- When creation cost = 30 minutes, solo counsels can build bespoke tools for ANY client (not just VIPs)
- Cost: $0.50-$5 API credits vs. months of development OR $50K platforms
- Singapore government support (subsidies, hackathons) makes learning accessible

**Files created:**
- `/workspace/posts/single-serving-bias/research.md` - Comprehensive research findings with statistics, quotes, jurisdictional flags

### Next Steps

- Review research findings with user
- Decide whether to include concrete examples in article (user's own experiments? Rebecca Fordon's examples?)
- Develop outline based on pitch + research
- Consider whether to build a single-serving tool as part of writing process (meta-demonstration)
