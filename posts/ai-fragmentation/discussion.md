# Discussion Notes: "Where Is My Work?" — AI Fragmentation Blog Post

## AUDIT TRAIL: Key Decision Points

### Decision: Post Title and Format (2026-03-30, Session 1)

**Claude's Analysis:**
- Reviewed Voice Guide Part 4 templates
- Identified "Learning in Public" (Lane 2) as best fit — personal experience, tension, framework offering
- Assessed newsletter format (~6 min) as appropriate scope for the idea

**Claude's Recommendation:**
Title: "Where Is My Work?" — How AI Tools Quietly Fragment Your Files. Newsletter format.

**User Decision:**
Approved title and format.

**Rationale:**
Question-format title creates immediate reader identification. Newsletter length keeps scope manageable.

**Outcome:**
✅ Pitch approved after revisions.

### Decision: Remove SCCE Reference (2026-03-30, Session 1)

**Claude's Analysis:**
- Original pitch referenced "SCCE talk drafts" as example of lost work

**User Decision:**
Remove SCCE reference — hasn't publicly announced speaking engagement yet.

**Rationale:**
Avoid premature disclosure. Genericised to "presentation drafts."

**Outcome:**
✅ Revised pitch removes any identifying conference details.

### Decision: Add "Frontier Pain" Angle (2026-03-30, Session 1)

**Claude's Analysis:**
- User raised that Cowork and /remote shipped within weeks of each other
- Security/compliance mental models can't update at that pace

**User Decision:**
Include this as a key framing element — not just fragmentation, but the pace of change outstripping our habits.

**Rationale:**
Adds a systemic dimension beyond personal anecdote. Makes the post more broadly relevant.

**Outcome:**
✅ Strengthened the pitch's core argument.

### Decision: Rewrite Draft as Narrative (2026-03-30, Session 3)

**Claude's Analysis:**
- First draft had narrative opening but shifted to expository mode (bulleted lists, research citations, numbered framework)
- Proposed two alternatives: A) Full narrative (no structured section), B) Narrative spine with structured framework at end
- Recommended B as balancing story with practical takeaway

**Claude's Recommendation:**
Approach B — narrative spine with structured framework at the end

**User Decision:**
Chose B. Reason: "I am doing most of this myself, and the story is the angle I would have wrote this in, almost like a rant."

**Rationale:**
The user's natural writing voice is narrative/story-driven, not analytical. The first draft felt too much like Claude wrote it. The rewrite keeps the user's voice throughout while preserving the framework as a useful takeaway.

**Outcome:**
✅ Draft rewritten. Removed bulleted env list (woven into story), changed headers to personal voice ("My mental model was wrong", "So what am I doing about it?"), removed standalone "Neither is wrong" section, framework introduced as personal process not prescriptive advice.

### Decision: Framework Approach for Advice Section (2026-03-30, Session 1 Brainstorming)

**Claude's Analysis:**
- Proposed three framework approaches:
  - A) "Three questions to ask about every AI tool" — simple, repeatable, tool-agnostic
  - B) "Map your work zones and find the gaps" — built from user's actual mental model (git zone, Nextcloud zone), find where AI tools don't fit
  - C) "What I'm doing differently now" — honest field notes, not prescriptive
- Recommended B with C's honesty factor

**User Decision:**
Approved combined B+C approach: "Your mental model is outdated — here's how to update it." Four steps:
1. Name your zones (where you think your work lives)
2. List your AI tools and ask: which zone? "I'm not sure" = blind spot
3. Check for silent failures (verify sync/backup actually works)
4. Accept the map needs regular updating (tools keep shipping)

**Rationale:**
Framework grounded in user's real experience, not generic advice. Ends honestly — user hasn't fully re-mapped yet.

**Outcome:**
✅ Brainstorming complete. Ready for drafting.

## WHAT CLAUDE DID (Contributions)

### Research
- Read Voice Guide Part 4 (Templates) for pitch structure guidance
- Read canonical tag registry for tag suggestions
- HBR "Brain Fry" study — found BCG/UC Riverside research, key stats (14% brain fry, 19% info overload, 12% more fatigue from oversight)
- Cowork/Remote Control timeline — confirmed Jan 12 and Feb 25, 2026 (~6 weeks apart)
- Knowledge fragmentation data — McKinsey/Glean (3.6 hrs/day searching), Gartner (47% can't find info)
- .claude folder contents — session histories, memory, todos all local; Cowork projects in ~/Documents/Claude/Projects/
- Cowork VM architecture — Apple Virtualization Framework, virtiofs binding, ephemeral sessions, bricked workspace risks
- Blog archive search — found 14 candidates for backlinks, selected 3

### Writing
- Drafted 3 iterations of the pitch paragraph
- Iteration 1: Initial draft from user's idea brief
- Iteration 2: Added Claude Code cloud vs local blind spot (user feedback)
- Iteration 3: Added frontier pain / pace of change angle (user feedback)
- First full draft (~1100 words, expository style)
- Rewrote as narrative spine + structured framework (user preferred rant-like storytelling over exposition)
- Applied Wei Lin + Marcus Tan feedback (trimmed HBR, added emotional beat, compliance angle, strengthened framework)
- Rewrote Cowork section twice (technical → practical per final audit)
- Added 5 external research links and 3 internal backlinks
- Generated custom excerpt for Ghost

### Quality Control
- Ran authenticity check on all claims in pitch — all passed
- Verified no SCCE disclosure in final pitch
- Ran content quality audit (round 1) — 3 items flagged
- Ran Wei Lin and Marcus Tan audience reviews in parallel
- Ran final content quality audit — 3 minor items, all fixed
- Attempted Ghost publish — API unavailable (418), script confirmed working

### Brainstorming
- Proposed 3 framework approaches for advice section
- Refined into 4-step framework based on user's mental model experience

## WHAT WORKED / DIDN'T WORK

### Worked Well ✅
| What Claude Did | User Decision | Outcome |
|-----------------|---------------|---------|
| Drafted pitch from detailed brief | Approved with additions | Good base to iterate on |
| Asked for genuine experience moment | User shared "asked Claude to audit, assumed fine, discovered gaps when working" | Grounded the opening |
| Suggested removing SCCE | User flagged it first | Caught potential disclosure issue |
| Rewrote draft as narrative | User approved | Closer to natural voice |

### Didn't Work ❌
| What Claude Did | Problem | Lesson |
|-----------------|---------|--------|
| First draft in expository style | User felt it was too analytical, not their voice | User's natural style is narrative/rant — lean into story, not analysis |

## SESSIONS (Chronological Detail)

## Session 1: Pitch Development (2026-03-30)

### Context
User came with a well-developed blog idea about AI tools fragmenting where work lives. Triggered by real experience: laptop sent for repair, discovered backup gaps despite using git + Nextcloud + cloud platforms.

### What Claude Did
- Research: Read Voice Guide Part 4 templates, read tag registry
- Analysis: Identified "Learning in Public" template as best fit
- Writing: 3 pitch iterations incorporating user feedback
- Quality: Authenticity check on all claims, SCCE disclosure check
- Tags: Suggested AI, LegalTech, CloudComputing from canonical registry

### User Decisions
- Decision 1: Approved title "Where Is My Work?" — How AI Tools Quietly Fragment Your Files
- Decision 2: Remove SCCE reference to avoid premature disclosure
- Decision 3: Add Claude Code cloud vs local commit behavior as key blind spot
- Decision 4: Add "frontier pain" framing — tools ship faster than compliance instincts adapt
- Decision 5: Newsletter format (~6 min reading time)

### Key Details from User's Experience
- Laptop went for repair → restricted to iPad
- Asked Claude to audit files before sending laptop
- Assumed git + Nextcloud covered everything
- Discovered: presentation drafts missing, blog post 30% done stranded locally
- Claude Code cloud auto-commits; /remote locally does not — same UX, different persistence
- Cowork and /remote released within weeks of each other
- Connection to HBR "Brain Fry" research on cognitive overhead

### Outcomes
- ✅ Pitch approved
- ✅ Tags selected: AI, LegalTech, CloudComputing
- Files created: pitch.md, discussion.md
- Folder created: posts/ai-fragmentation/

### Next Steps
- Research: HBR "Brain Fry" article, Cowork/remote release timeline
- Draft the newsletter article
- Content quality audit
- Target audience review

## Session 2: Research & Brainstorming (2026-03-30)

### Context
Continuation of Session 1. Completed research phase and brainstormed the practical advice framework.

### What Claude Did
- Research: HBR "Brain Fry" study (BCG/UC Riverside, 1,488 workers, March 2026)
- Research: Confirmed Cowork (Jan 12) and Remote Control (Feb 25) timeline — ~6 weeks apart
- Research: Knowledge fragmentation data (McKinsey, Gartner, Glean)
- Research: .claude folder contents and Cowork local storage locations
- Research: Searched blog archive for related posts (found 5+ backlink candidates)
- Brainstorming: Proposed 3 framework approaches, refined to 4-step "update your mental model"
- Saved research.md with all findings, sources, and citations

### User Decisions
- Decision 1: Approved four-step "update your mental model" framework
- Decision 2: Post ends as "still in progress" journey — user hasn't fully re-mapped yet
- Decision 3: Nextcloud/node_modules interaction is a key story detail (tools don't fail individually — interactions create blind spots)
- Decision 4: User still needs to investigate own .claude folder — ongoing, not completed

### Key Story Details Added
- Nextcloud sync broke because Cowork-generated node_modules (from reveal.js presentation) couldn't be synced. Mac client showed error but didn't explain clearly. The *interaction* between tools created the blind spot.
- User's mental model had two zones: git/GitHub for code, Nextcloud for everything else. AI tools created locations that fit neither zone.
- The real vulnerability wasn't carelessness — the mental model was outdated because tools changed faster than the model was updated.
- Three invisible local stores not in the mental map: ~/.claude/, ~/Documents/Claude/Projects/, and Cowork sandbox folders

### Outcomes
- ✅ Research complete — saved to research.md
- ✅ Framework brainstormed and approved
- ✅ All story details captured
- Files created: research.md
- Files modified: discussion.md

### Next Steps
- Draft the newsletter article (~6 min, Learning in Public template)
- Content quality audit
- Target audience review (Wei Lin + Legal Tech recommended)
- Backlink curation

## Session 3: Drafting & Review Launch (2026-03-30)

### Context
Moved from brainstorming to drafting. First draft written, user requested narrative rewrite, then launched quality audit and audience reviews.

### What Claude Did
- Writing: First full draft (~1100 words) in expository style with bulleted lists and numbered sections
- Writing: Complete rewrite as narrative spine + structured framework after user feedback
- Analysis: Proposed two narrative approaches (full narrative vs narrative spine + framework)
- Quality: Launched 3 parallel review agents (content-quality-auditor, lawyer-coder-reviewer Wei Lin, legal-tech-blog-reviewer Marcus Tan)

### User Decisions
- Decision 1: First draft too expository — wanted narrative/rant-like style
- Decision 2: Chose approach B (narrative spine + structured framework) over full narrative
- Decision 3: Important context — post is being written on Claude Code on the web in a purpose-built environment; the irony is real, not constructed

### Key Insight for Future Writing
User's natural writing voice is storytelling/rant-like, not analytical. Future drafts should lead with narrative and weave analysis into the story rather than presenting it separately. "The story is the angle I would have wrote this in."

### Outcomes
- ✅ First draft completed
- ❌ First draft too expository — didn't match user's voice
- ✅ Narrative rewrite completed and approved
- ⏳ Quality audit and audience reviews running in background
- Files modified: ai-tools-fragment-files.md (2 versions), discussion.md

### Next Steps
- Review feedback from content-quality-auditor, Wei Lin, and Marcus Tan
- Apply revisions based on feedback
- Curate backlinks
- Publish to Ghost

## Session 4: Reviews, Revisions, Links & Publishing (2026-03-30)

### Context
Received all three review results (Wei Lin, Marcus Tan, content quality audit). Applied revisions, did additional Cowork research, added inline links and backlinks, ran final audit, and attempted Ghost publishing.

### What Claude Did
- Research: Cowork VM architecture (Apple Virtualization Framework, virtiofs binding, ephemeral session dirs)
- Research: .claude folder contents (session histories, auto-memory, todos, history.jsonl)
- Research: Blog archive search for backlinks (found 14 candidates, selected 3)
- Writing: Applied Wei Lin feedback (trimmed HBR section, added emotional beat, expanded ~/.claude/)
- Writing: Applied Marcus Tan feedback (synthesis sentence, strengthened Q2, added compliance angle)
- Writing: Rewrote Cowork section twice — first technical (VM detail), then practical (per final audit)
- Writing: Added inline research links (5 external) and backlinks (3 internal) throughout post
- Quality: Ran 2 content quality audits (round 1 + final round)
- Quality: Ran Wei Lin and Marcus Tan audience reviews in parallel
- Publishing: Attempted Ghost publish via canonical script — API returned 418 (unavailable)

### Review Feedback Summary

**Wei Lin (lawyer-coder):**
- Strong positive: opening hook, node_modules story, "still inside the problem" honesty
- Key fix: Cut HBR section to ~1 sentence (personal story is already legitimate)
- Key fix: Add emotional beat to "mental model was wrong" section
- Key fix: Give ~/.claude/ more weight
- Would bookmark and share with coding colleagues

**Marcus Tan (legal tech):**
- Strong positive: root cause analysis, UX-masking observation, specific dates, honest ending
- Key fix: Add synthesis sentence bridging HBR research and personal story
- Key fix: Strengthen Q2 with "treat as local-only" default
- Key fix: Add compliance/professional conduct dimension to solo counsel section
- "One revision away" from forwarding

**Final content quality audit:**
- Critical: Trim Cowork VM paragraph for newsletter audience
- Important: Fix Cowork introduction sentence structure
- Minor: Tighten closing from 3 beats to 1

### User Decisions
- Decision 1: Focus Cowork detail over ~/.claude/ — more interesting to target audience
- Decision 2: Approved all link placements (3 backlinks + 5 external research links)
- Decision 3: Approved publishing to Ghost

### Outcomes
- ✅ All reviewer feedback applied (round 1 — no round 2 needed)
- ✅ Final audit passed with 3 minor fixes applied
- ✅ 8 links added (5 external research, 3 internal backlinks)
- ✅ Custom excerpt generated
- ❌ Ghost API unavailable (418) — post ready to publish when accessible
- Files modified: ai-tools-fragment-files.md (multiple revisions), discussion.md

### Publishing Instructions
When Ghost API is available, run:
```bash
node -r dotenv/config scripts/publish-lexical.js posts/ai-fragmentation/ai-tools-fragment-files.md
```
Then run `npm run sync-ghost ai-tools-fragment-files` to sync metadata back.
