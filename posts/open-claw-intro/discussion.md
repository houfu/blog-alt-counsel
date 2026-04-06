# Discussion Notes: OpenClaw Field Notes

## AUDIT TRAIL: Key Decision Points

### Decision: Post format — journal/field notes (2026-03-26, Session 1)

**Claude's Analysis:**
- Presented 3 approaches: Field Notes journal, "Steps I Wish I'd Known" guide, "Promise vs Token Limit" essay
- Each had different strengths for the content

**Claude's Recommendation:**
No strong preference — presented all three equally

**User Decision:**
Field Notes format, because "maybe at some point I'd get something cool to share" — sets up a natural series.

**Rationale:**
Journal format allows Part 1 now (honest setup struggle) with follow-ups when breakthroughs happen. Fits learning-in-public style.

**Outcome:**
✅ Approved — pitch built on this format

### Decision: Use Zeeker as test project, not client work (2026-03-26, Session 1)

**User Decision:**
Security concerns led to choosing own open source project (Zeeker) for OpenClaw experiments rather than client data.

**Rationale:**
Manageable risk — no client confidentiality issues. Practical test bed for GitOps automation.

### Decision: Tags — AI, zeeker, Tutorial, CloudComputing (2026-03-26, Session 1)

**Claude's Analysis:**
- Initially suggested AI, OpenSource, zeeker, Article
- User corrected: Article is for featured content, not this; OpenSource doesn't fit since no coding is involved

**User Decision:**
Approved AI, zeeker, Tutorial, CloudComputing after Claude surfaced wider options including SoloBuilder, Docker, Programming.

**Rationale:**
Tutorial fits the practical walkthrough format. CloudComputing covers the GitOps/infrastructure angle.

### Decision: Use "harness" terminology (2026-04-06, Session 3)

**User Decision:**
Replace "infrastructure" with "harness" when referring to the agent's running environment (machine, model, surrounding agents).

**Rationale:**
"Harness" is the common term in the agent community. "Infrastructure" still used for Zeeker's actual CI/CD and deployment setup.

### Decision: Cut Results section — admit not working yet (2026-04-06, Session 3)

**Claude's Analysis:**
- Presented two options: shorten results to be more honest, or cut entirely and fold into closing
- Recommended option B (cut entirely)

**User Decision:**
Option B — cut "Results So Far", replace with honest "Where I Am Now" section admitting it hasn't gotten off the ground yet.

**Rationale:**
User still hasn't gotten OpenClaw working. Honesty is stronger than fabricated or vague results. The post is field notes from someone still figuring it out — that IS the story.

**Outcome:**
✅ Post is more authentic and the thesis ("great for solos is premature") is stronger when the author — a lawyer who codes — admits they haven't cracked it

## WHAT CLAUDE DID (Contributions)

### Research
- Searched blog for existing OpenClaw content (none found)
- Web research on OpenClaw: history, features, legal adoption, security concerns, Singapore/ASEAN connection
- Updated research (April 2026): new CVEs, BreachForums incident, IMDA framework, Claude dispatch comparisons
- Researched Google Mariner (decided to exclude from post)
- Saved comprehensive research to research.md

### Writing
- Drafted pitch (approved by user)
- Drafted full post (~5-6 min read)
- Revised: harness terminology, mindset shift paragraph, cut results, added build-up point
- Saved pitch.md with suggested tags

### Quality Control
- Ran authenticity check on pitch — all claims grounded in user's real experience

## WHAT WORKED / DIDN'T WORK

### Worked Well ✅
| What Claude Did | User Decision | Outcome |
|-----------------|---------------|---------|
| Presented 3 post approaches | Chose field notes for series potential | Natural format for ongoing experiments |
| Asked about personal experience for vulnerability hook | User shared token limit frustration | Authentic emotional anchor for the piece |
| Brainstorming with focused questions | User shaped the content direction | Pitch grounded in real experience |

### Didn't Work ❌
| What Claude Did | Problem | Lesson |
|-----------------|---------|--------|
| Suggested Article + OpenSource tags | Article is for featured; no coding = not OpenSource | Ask about tag intent, don't assume from topic surface |

## SESSIONS (Chronological Detail)

## Session 1: Brainstorming and Pitch (2026-03-26)

### Context
User wants to write about OpenClaw — an autonomous AI agent they've been experimenting with on the Zeeker project for GitOps/infrastructure automation.

### What Claude Did
- Research: Comprehensive web research on OpenClaw (history, features, legal adoption, security, Singapore connection); searched blog for existing content (none)
- Analysis: Presented 3 post format options; ran authenticity check on pitch
- Writing: Drafted and saved pitch
- Tools: Created post folder, saved research.md, pitch.md

### User Decisions
- Format: Field notes/journal (series potential)
- Test subject: Zeeker project (security-conscious choice)
- Content scope: Setup experience, framework for deciding what to automate, caffeinate tip, Claude dispatch comparison
- Emotional hook: Frustration of seeing potential but hitting token limits
- Tags: AI, zeeker, Tutorial, CloudComputing

### Key Details from User
- OpenClaw setup was smooth — wizards, codebase scanning impressed
- Difficulty started with: deciding what to automate first (competing needs), uncertainty about capabilities, running out of tokens
- Token limits were the main frustration — slowed ability to experiment
- Found a mental framework for deciding what to automate (sought it out because needed one)
- Claude dispatch comparison: both in heavy development, different product approaches, watch this space
- Wants to use `caffeinate` on macOS as a practical tip

### Files Created
- `posts/open-claw-intro/research.md` — comprehensive OpenClaw research
- `posts/open-claw-intro/pitch.md` — approved pitch with tags

### Next Steps
- Develop outline for the post
- Draft content (read Voice Guide first)
- Quality checks and review

## Session 2: Outline Development (2026-03-26)

### Context
Developing the outline from approved pitch. User refined structure significantly during discussion.

### What Claude Did
- Analysis: Proposed initial 7-section outline based on pitch
- Writing: Iterated outline 3 times based on user feedback
- Saved final outline to pitch.md

### User Decisions
- Combine context/origin into focused "what's different" section (long-running, skills, channel-based) — readers want to know why they should care, not origin story
- Setup section should be personal narrative about big decisions (where to install, which model, what to use it for), not step-by-step tutorial
- Setup decisions and framework are connected — the infrastructure/model knowledge required IS the barrier, which feeds into the framework
- Framework: start from what infrastructure you have → map what agent could do → match to realistic tasks
- Key thesis: claims that OpenClaw is "great for solos" are premature — the infrastructure knowledge required is a real barrier for lawyers, lawyer-builders, and anyone trying this at home
- But still hopeful — user is continuing to experiment, and the vision is compelling (OpenAI acquired the creator for a reason)
- Claude dispatch + remote control as bonus section, not main comparison

### Key Insight from User
The "great for solos" marketing vs. reality tension is the heart of the post. Some sources claim $25-85/month and a Mac Mini is all you need. User's experience: the infrastructure and model decisions alone require knowledge most lawyers don't have. This isn't just about solos — it's about anyone without an infra team.

### Files Modified
- `posts/open-claw-intro/pitch.md` — updated with final outline and refined pitch

### Next Steps
- Draft content (read Voice Guide first)
- Quality checks and review

## Session 3: Draft, Research Update, and Revisions (2026-04-06)

### Context
Returning after ~10 days. Drafted the full post, updated research, then revised based on user's evolving experience with OpenClaw.

### What Claude Did
- Writing: Drafted full post (~5-6 min read) following Voice Guide and Learning in Public template
- Research: Updated OpenClaw research — significant new developments in security (CVE-2026-33579, BreachForums incident), Singapore regulation (IMDA agentic AI framework), and Claude dispatch comparisons
- Research: Investigated Google Mariner for potential three-way comparison (decided to leave out)
- Revisions: Replaced "infrastructure" with "harness" throughout (user's preferred term)
- Revisions: Added mindset shift paragraph — context engineering vs. harness thinking
- Revisions: Cut "Results So Far" section, replaced with honest "Where I Am Now" (user hasn't gotten it working yet)
- Revisions: Added long-term capability build-up point to framework section

### User Decisions
- Use "harness" not "infrastructure" for the agent setup/environment (infrastructure still used for Zeeker's actual infra)
- Key insight: the mindset shift is from context engineering to harness design — not just model/prompt, but the agents around it
- Cut "Results" section — user hasn't gotten OpenClaw working yet, honesty is better than fabricated results
- Leave out Google Mariner — not relevant enough for this post's scope
- Agent capabilities need to be built up incrementally over a series of steps — another underappreciated barrier
- Updated research confirms thesis is even stronger: security situation worse, harness demands real

### Key Insights from User
1. **Harness over infrastructure**: The common term in the agent community is "harness" — the machine, model, surrounding agents, and how they coordinate
2. **Context engineering → harness design**: The mindset shift required is bigger than most people realise. It's not about prompts and context windows anymore
3. **Long-term build-up**: You can't throw complex tasks at an agent day one. You need to build capabilities incrementally, and every step costs tokens
4. **Honesty about results**: User still hasn't gotten OpenClaw off the ground — the post is stronger for admitting this

### Research Updates (April 2026)
- OpenClaw stars: 247K → 310K+ in 10 days
- CVE-2026-33579: Critical admin takeover, 63% of instances had no auth
- BreachForums: UK CEO's entire OpenClaw workspace sold for $25K (plain-text markdown storage)
- 500K internet-facing instances (up from 247K)
- Singapore IMDA: World's first agentic AI governance framework
- Hong Kong: Banned OpenClaw from government departments
- Claude dispatch: Three-way comparison published (vs OpenClaw vs Mariner), Ethan Mollick endorsement
- OpenClaw v2026.3.31: Decoupled node capabilities (security improvement)
- OpenClaw v2026.4.2: Task Flow orchestration shipped

### Files Modified
- `posts/open-claw-intro/openclaw-field-notes.md` — full draft, then revised (harness terminology, mindset shift, cut results, added build-up point)

### Next Steps
- Update research.md with April findings
- Content quality audit
- Target audience review (Wei Lin + Legal Tech reviewer)
- Backlink curation
- Publish to Ghost
