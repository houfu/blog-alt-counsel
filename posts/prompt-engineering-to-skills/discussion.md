# Discussion Notes: Why Prompt Engineering Felt Wrong (And What Skills Changed)

## Session 1: Initial Planning (2025-10-19)

### Context
- Just completed long article: "Lawyers Got Prompt Engineering Wrong (And Why That Matters)"
- Want to advertise it through newsletter
- Newsletter should be personal, diary-style rather than announcement-style

### Key Decisions Made

**Title Direction:**
- Focus on "The Importance of Thinking in Loops"
- Highlights the paradigm shift (technical + mindset)

**Newsletter Purpose:**
- Drive readers to the full article
- Make them realize tools work differently now
- Personal reflection rather than marketing announcement

**Tone & Style:**
- Personal, diary-style ("like writing to a colleague over coffee")
- Share the journey from 3-page prompts to building skills
- Reflective, slightly confessional
- "Here's what I got wrong, here's what I learned"

**Length Philosophy:**
- As long as needed to provide value (400-600 words likely)
- Length should serve value, not arbitrary limits
- Better engaging and complete than artificially short

**Success Criteria:**
Readers should:
1. Connect with the personal story
2. Understand the shift (loops vs. one-shot)
3. Want to click through to full article

### Story Elements to Include
- The 3-page prompt competition experience (2024)
- TechLawFest workshop that bothered you
- The realization about September 2025 changes
- The 45-line skill that replaced the 3-page prompt
- Personal "aha moment" about thinking in loops

### Next Steps
- Taking notes before drafting
- Will develop outline/structure next

### Questions/Considerations
- How personal to get about the competition failure?
- Balance between personal story and technical explanation?
- Where to place the link to full article?

---

## Session 2: Refinement and Feedback (2025-10-19)

### Title Evolution
**Original:** "The Importance of Thinking in Loops"
**Final:** "Why Prompt Engineering Felt Wrong (And What Skills Changed)"

**Reasoning:**
- Original title was too technical/explainer-focused
- New title emphasizes permission-giving and validates reader instincts
- Links prompt engineering (familiar) to skills (new concept)
- More aligned with emotional hook

### Three Personal Stories Clarified

**Story 1: TechLawFest (September 2025)**
- Standing-room-only workshop teaching COSTAR and GCES frameworks
- Felt anxious ("am I doing this wrong?") but also confident (using AI daily for big things)
- Didn't use those frameworks at all
- **Same month the tools changed** - September 9 (Skills reverse-engineered), September 18 (agents defined)

**Story 2: Competition Failure (2024)**
- SAL/Microsoft prompt writing competition
- Wrote 3-page M&A term sheet prompt following GCES framework
- Disqualified for missing deadline (spent too much time perfecting it)
- Not proud of it (felt excessive) but thought it would showcase expertise
- **This was "rock bottom" moment**

**Story 3: Building Skills (After TechLawFest, Sept-Oct 2025)**
- Following Simon Willison → saw GitHub repos about agents
- Connected it to problems faced with prompts
- Built skills yourself → "magic"
- 45-line skill replaced 3-page prompt

**Emotional arc:** Failure (2024) → Dissonance (Sept 2025) → Revelation (Oct 2025)

### Angle Refinement

**Core insight:** Not "I learned the old way then learned the new way"
**Better:** "I failed doing it the 'right' way, felt weird not using what everyone else was learning, then discovered I was accidentally ahead of the curve"

**Focus:** Emotional connection (#1) + Permission to experiment (#4)
- Validation: "You're not alone in feeling confused"
- Permission: "You don't need to follow the crowd"

### Feedback from Review Agents

**Both reviewers wanted:**
1. Value proposition more concrete (not abstract)
2. One concrete example of what "skills" means
3. Remove "magic" reference (sounds like overpromising)
4. Connect to resource constraints and time pressure

**Inhouse lawyer concerns:**
- "What problem does this solve for me?"
- "What's my ROI?"
- "Is this technical? Do I need to code?"
- Need time investment vs. return clarity

**Legal tech reviewer concerns:**
- "Will I get implementation details?"
- "Is this actionable or theoretical?"
- Want community/knowledge-sharing angle

### Top 3 Deliverables (Option A)

**1. A Working Example You Can Copy**
- Complete NDA review skill (ready to save and use)
- Exact format: what to check, red flags, output
- No coding required
- Proof this is actionable

**2. Economics Breakdown**
- Vendor: $50/user/month = $600/year solo, $6,000/year for 10-person team
- Skills: $20-50/month regardless of team size
- Time vs. cost trade-off

**3. Three-Way Decision Framework**
- Chat tools (ChatGPT, Claude.ai) - when to use
- Vendor tools (Harvey, CoCounsel) - when they make sense
- Custom skills - when to build your own
- Self-assessment: "Is this right for MY practice?"

### Newsletter Structure Elements

1. **TechLawFest moment** - Anxious feeling in standing-room-only workshop
2. **Timing reveal** - Tools changed that exact month (September 2025)
3. **Personal discovery** - Simon Willison → agent patterns → connected to problems
4. **Concrete example** - "Instead of writing prompts each time, I now have reusable skills"
5. **Signal three deliverables** - Tease NDA skill, economics, framework
6. **Permission statement** - "If you felt like prompt engineering didn't fit, your instinct was right"
7. **Strong CTA** - "Get the NDA skill, see cost breakdown, figure out if this is right for you"
8. **NO technical details** - Save for article, create curiosity only

### Key Revisions to Pitch

- Added explicit "What the Full Article Delivers" section
- Updated success criteria to be specific about deliverables
- Softened "your instinct was right" to "if you felt this way, your instinct was right"
- Added concrete example requirement
- Removed vague "magic" references in favor of specific outcomes

### Folder renamed
- From: `newsletter-thinking-in-loops`
- To: `prompt-engineering-to-skills`

### Ready for Drafting
- Pitch refined with specific value propositions
- Three deliverables clearly identified
- Emotional arc understood
- Feedback incorporated
- Notes complete

---

## Session 3: Revision and Quality Control (2025-10-20)

### Context
Working on the "What Changed in September" section which felt incomplete. The section mentioned Simon Willison and agents but didn't connect to the actual workflow problems that skills solve.

### Key Problem Identified
User said: "When I returned to the real world, my problems were how to persist agent memory, how to ensure the agent used workflows regularly and precisely, how to fit an ever-increasing amount of workflows in any particular project."

The issue wasn't about learning better prompting frameworks (GCES/COSTAR) - it was about architectural problems:
1. **Persistence** - Agent memory doesn't persist across sessions
2. **Precision** - Need workflows to run reliably, not creatively
3. **Scaling** - Growing number of workflows hitting context limits

### Major Revision to "What Changed in September"

**OLD VERSION:**
- Vague about technology shift
- Mentioned Simon Willison and GitHub repos without clear connection
- Didn't articulate specific problems being solved

**NEW VERSION (Lines 29-45):**
- Opens with three concrete problems as bold questions
- Each problem has a relatable pain point
- Then connects these problems to the solution (persistent skill systems)
- Clear payoff: "encode your judgment once, run it forever"

This revision makes the architectural shift concrete instead of abstract.

### First Round Feedback from Reviewers

**Legal Tech Reviewer Concerns:**
1. "What changed in September" needs more technical clarity
2. 45-line skill vs 3-page prompt comparison needs concrete example
3. Economics should be more provocative ($6,000/year vs $50/month sticker shock)
4. Simon Willison reference creates credibility gate
5. Add "what this isn't" signal to prevent vendor comparison confusion

**In-House Lawyer Concerns:**
1. "September 2025" feels unverifiable - what specifically changed?
2. Missing: what happens when this breaks? (API changes, debugging, maintenance)
3. "No coding required" contradicts "GitHub repos" and "45-line skill"
4. Economics needs total cost breakdown (API + time investment)
5. Missing reality check: "Should I even start with this if I'm not using AI yet?"
6. Data privacy concerns: how to satisfy confidentiality obligations?

**Consensus Issues:**
- Both wanted more specificity about September timeline
- Both skeptical of "no coding required"
- Both wanted clarity on trade-offs

### Checking Against Published Article

Reviewed the full published article (`prompt-engineering-wrong.md`) and found:
- **September timeline IS specific**: Sept 9 (Skills reverse-engineered), Sept 18 (agents defined), Oct 17 (Skills released)
- **Technical architecture thoroughly explained**: Lines 100-204 with detailed NDA skill example
- **Economics fully covered**: $50/user/month vendor vs $20-50/month custom skills
- **Security/compliance addressed**: Lines 218-238 cover SOC 2, when NOT to use custom skills
- **Who this is for/isn't for**: Lines 228-237 provide clear guidance

**Conclusion:** Most reviewer concerns are addressed in the article. Newsletter just needs to signal these topics are covered.

### Three Critical Fixes Applied

**Fix 1: September Timeline Accuracy**
- OLD: "that same month—September 2025—the tools changed underneath all of us"
- NEW: "that same month—September 2025—the technology was shifting. Skills were being reverse-engineered, agents were being defined. By October, everything changed."
- **Rationale:** More accurate - September was the lead-up, October was the Skills release

**Fix 2: Remove "No Coding Required" Oversell**
- OLD: "No coding required. If you can write a checklist, you can build a skill."
- NEW: "If you can write a checklist in markdown format, you can build a skill."
- **Rationale:** Honest about needing to understand markdown/YAML format, but emphasizes low barrier

**Fix 3: Signal Article Covers Practical Concerns**
- ADDED: "I break down the security considerations, time investment, and when vendor tools make more sense than DIY."
- **Rationale:** Reassures skeptical in-house lawyer that article addresses trade-offs, not just hype

### Second Round Feedback - Both Reviewers Approved

**Legal Tech Reviewer:** "Ship it. Newsletter is 85% → ready to publish."
- Timeline fix handles temporal confusion elegantly
- "Markdown format" is honest and accurate
- Acknowledging trade-offs removes major click-through barrier
- Minor polish: could emphasize "total" and "regardless of team size" more clearly

**In-House Lawyer:** "Much stronger. Would click through with cautious interest."
- Timeline is more honest and verifiable
- "Markdown format" sets realistic expectations
- Security/time investment language builds trust
- Would invest 10-15 minutes reading full article
- Minor suggestion: change "copy and use today" to "adapt for your practice"

### Quality Control Fixes

**Fix 4: "Copy and use today" → "Adapt for your practice"**
- Line 57: More honest about customization needed
- Addresses in-house lawyer's concern about company-specific clauses

**Fix 5: "Mind-blowing formatting" → "Elaborate formatting requirements"**
- Line 19: Less marketing-y, more humble tone

**Fix 6: "After the euphoria" → "After TechLawFest ended"**
- Line 29: Removes tonal inconsistency with anxiety

**Fix 7: Add "popular" to COSTAR/GCES**
- Line 9: Provides context for unfamiliar readers

**Fix 8: Hedge vendor pricing claim**
- Line 59: "Many vendor tools charge around..." instead of definitive claim

**Fix 9: Simplify deliverable #3**
- Lines 61-62: Shorter sentence for better scannability
- Changed "I break down" → "I explain" to avoid word repetition

### Final Newsletter Status

**Published as Draft on Ghost:**
- Title: "Why Prompt Engineering Felt Wrong (And What Skills Changed)"
- URL: https://www.alt-counsel.com/p/5bc2d548-50af-4676-be25-cccc04213d99/
- Post ID: 68f63f362794b400011def6e
- Status: draft
- Tags: LegalTech, AI, Newsletter

**Quality Control Assessment:** Newsletter is publication-ready
- Emotional arc works perfectly
- Technical requirements honestly stated
- Promises substance without overselling
- Both reviewers confirmed they would click through
- All critical issues resolved

### Key Learnings from This Session

1. **Newsletter vs Article Roles**: Newsletter validates emotions and creates curiosity. Article delivers technical depth. Don't conflate them.

2. **Honesty Builds Trust**: Removing "no coding required" and replacing with "markdown format" set realistic expectations and increased credibility with skeptical audience.

3. **Signal Coverage of Concerns**: When article thoroughly addresses concerns (security, economics, trade-offs), newsletter should explicitly signal this coverage.

4. **Reviewer Feedback Validation**: Both reviewer personas (legal tech blog reviewer + in-house lawyer) provide complementary perspectives - one technical, one practical. Both are valuable.

5. **Timeline Accuracy Matters**: For a lawyer audience, specific claims need to be verifiable. "Technology was shifting... by October, everything changed" grounds the narrative without making unverifiable claims.

### Final Publication Details

**Post Status:** Scheduled for publication
- Title: "Why Prompt Engineering Felt Wrong (And What Skills Changed)"
- URL: https://www.alt-counsel.com/p/5bc2d548-50af-4676-be25-cccc04213d99/
- Post ID: 68f63f362794b400011def6e
- Status: scheduled
- Scheduled for: October 21, 2025, 8:42 AM
- Tags: LegalTech, AI, Newsletter

**Final Excerpt (revised):**
"I sat in a standing-room-only prompt engineering workshop feeling anxious—not because I was behind, but because I don't use any of these frameworks. Turns out my instinct was right. That same month, the technology shifted from prompts to persistent agent skills."

**Backlinks Discussed:**
- Introducing: Prompt Engineering for Lawyers (May 2023)
- Beyond the Harvey Drama: The Real Lessons for Solo Counsel (Sept 2025)
- Singapore Court Rules on AI Hallucination (Oct 2025)
- Optional: Lawyers take a crash course in the perils of ChatGPT (May 2023)
- Optional: Building SG Law Cookies (Apr 2023)

**External Links Discussed:**
- Simon Willison's agent definition (Sept 18, 2025) - considered but user to decide

**Cover Photo Ideas:**
Search terms suggested for Unsplash:
- "person thinking alone" or "confused professional" (emotional hook)
- "crossroads" or "turning point" (transformation)
- "blueprint" or "framework structure" (systems thinking)

**Newsletter Complete and Scheduled for Publication**
