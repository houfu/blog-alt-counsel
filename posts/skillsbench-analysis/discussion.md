# Discussion Notes: SkillsBench Analysis Post

## AUDIT TRAIL: Key Decision Points

### Decision: Post Angle — Practitioner's Framework, Not Paper Summary (2026-03-03, Session 1)

**Claude's Analysis:**
- Identified SkillsBench paper findings that map directly to user's codraft experiences
- Explored angle options: paper summary vs. practitioner framework vs. best practices guide
- Noted existing content arc: prompt-engineering-wrong → prompt-engineering-to-skills → contract-review-skill → ai-tools-for-agents → connect-codraft-article

**Claude's Recommendation:**
Frame as practitioner's framework grounded in both SkillsBench data and personal experience

**User Decision:**
Approved. Emphasized speaking from lived experience, not "what I wish I'd known" retrospective framing.

**Rationale:**
More authentic to Houfu's voice — experiential authority rather than hindsight regret. Caters to both newcomers and experienced builders.

**Outcome:**
Pitch approved after one revision for framing tone.

### Decision: Add CoDraft Tag to Registry (2026-03-03, Session 1)

**Claude's Analysis:**
- Found 1 existing post referencing CoDraft (connect-codraft-article)
- This post will be the second
- User confirmed more CoDraft posts are planned

**Claude's Recommendation:**
Create new CoDraft tag in Events & Communities category

**User Decision:**
Approved.

**Rationale:**
Sufficient reusability — existing post, this post, and confirmed future posts.

**Outcome:**
✅ Tag added to registry (46 → 47 tags). Log entry added.

## WHAT CLAUDE DID (Contributions)

### Research
- Searched existing posts for content arc (found 5 related posts on skills/agents)
- Checked CoDraft references across posts (found in 4 files)
- Read Voice Guide for pitch tone/structure
- Deep research into SkillsBench paper via web search (arXiv, HuggingFace, skillsbench.ai)
- Explored full codebase for personal experience data (9 skills, CoDraft, ai-tools-for-agents, prompt-engineering-wrong)
- Searched blog for backlink candidates (4 search queries)

### Writing
- Drafted initial pitch (revised once for framing tone)
- Created pitch.md with title, pitch paragraph, and suggested tags
- Drafted full post (~2,100 words) using Learning in Public template
- Revised draft incorporating feedback from 3 reviewers + content quality audit
- Added custom excerpt for Ghost publishing

### Quality Control
- Tag registry lookup and validation
- Added CoDraft tag with full registry maintenance (category, metadata, log)
- Content quality audit (5 specialist agents: accessibility, readability, tone, structure, flow)
- Legal Tech Blog reviewer (Marcus Tan) feedback
- Lawyer-Coder reviewer (Wei Lin) feedback
- Backlink curation: 3 internal links distributed across the post

### Post-Publish
- Synced Ghost HTML back to local markdown (Session 3)
- Verified all formatting, images, bookmark cards, and table match Ghost

## WHAT WORKED / DIDN'T WORK

### Worked Well
| What Claude Did | User Decision | Outcome |
|-----------------|---------------|---------|
| Drafted pitch with "wish I'd known" framing | User corrected to experiential framing | Revised pitch approved |
| Suggested 3 canonical tags + 1 new tag | User confirmed CoDraft tag needed | 4-tag set approved |
| First draft structure (Learning in Public template) | User approved | Structure held through revisions |
| Ran 3 reviewers in parallel | Reviewers aligned on key fixes | Efficient single-pass revision |
| Full model table (Marcus feedback) | Incorporated | More honest, more interesting analysis |
| Legal domain connection (Marcus feedback) | Incorporated | Made post directly actionable for legal tech audience |
| Expanded emotional weight (Wei Lin feedback) | Incorporated | Post went from "useful analysis" to "felt seen" |
| Closing question (all reviewers) | Incorporated | Opens conversation, matches Learning in Public template |

### Didn't Work
| What Claude Did | Problem | Lesson |
|-----------------|---------|--------|
| Initial pitch used "I wish I'd known" closing | Too retrospective/regretful for Houfu's voice | Frame from experience, not hindsight |
| First draft showed only Claude Code rows in model table | Selective framing — looked misleading | Always show full comparison data |
| First draft lacked emotional specificity | "Not comfortable to read" too vague | Name the specific discomfort |

## SESSIONS (Chronological Detail)

## Session 1: Brainstorming & Pitch Development (2026-03-03)

### Context
User has been working with SkillsBench paper (Li et al., 2026) and has personal experience with skills in codraft project. Wants to write about what makes skills work effectively.

### What Claude Did
- Research: Read Voice Guide, searched 5 related posts for content arc
- Analysis: Mapped user's codraft experiences to SkillsBench findings
- Writing: Drafted and revised pitch
- Tools: Tag registry lookup, created CoDraft tag, scaffolded post folder

### User Decisions
- Decision 1: Post angle should be practitioner's framework from lived experience, not paper summary or "what I wish I'd known"
- Decision 2: Audience is both newcomers and experienced builders — "best practices" accessible to all
- Decision 3: CoDraft tag approved for registry (more posts planned)
- Decision 4: Title approved: "What 7,308 Agent Runs Taught Me About Writing Better Skills"

### Key Experiences to Feature
1. **Model variability** — Significant differences between Opus and Sonnet when using same skills
2. **Conflicting skills** — Custom docx-to-pdf skill in codraft conflicted with Claude's built-in capability, causing repeated failures
3. **AI-generated verbose skills** — Produced little improvement and more variability

### SkillsBench Mappings
- Conflicting skills → 19% of tasks hurt by skills
- AI-generated skills → Self-generated skills failing
- Focused beats comprehensive → 2-3 focused skills beat comprehensive docs
- Model variability → Gap between models means testing matters

### Outcomes
- Pitch approved
- Tags approved: AI, Programming, CoDraft (new), Article
- Files created: posts/skillsbench-analysis/pitch.md, posts/skillsbench-analysis/discussion.md

### Next Steps
- Research: Deep dive into SkillsBench paper for specific data points
- Draft: Outline and write the post using Learning in Public template
- Review: Content quality audit + target audience feedback

## Session 2: Research, Draft, Review, and Backlinks (2026-03-03)

### Context
Continuation of Session 1. User shared SkillsBench blog link (skillsbench.ai, returned 403). Proceeded with web search and arxiv data.

### What Claude Did
- Research: 4 web searches extracting SkillsBench data (methodology, model comparison table, failure modes, domain breakdown, recommendations)
- Research: Full codebase exploration via subagent — found 10 relevant posts and all 9 blog skills with specific failure examples
- Writing: Drafted ~1,800 word post following Learning in Public template from Voice Guide
- Review: Ran 3 agents in parallel (content quality audit, Marcus Tan, Wei Lin)
- Revision: Single-pass incorporating all feedback (10 changes)
- Backlinks: Searched blog (4 queries), selected 3 posts distributed across the draft
- Publishing: Attempted Ghost API publish — blocked by 418 error (API connectivity issue)

### User Decisions
- Decision 1: Approved proceeding with web search data when skillsbench.ai returned 403
- Decision 2: Approved publishing to Ghost as draft

### Reviewer Feedback Summary

**Content Quality Audit (5 agents):** No critical issues. 4 important, 5 minor. Key fixes: link the paper, spell out "pp", close with question.

**Marcus Tan (Legal Tech):** "I'd forward this to the community." Key fixes: show full model table (not just Claude Code), add legal domain connection, clarify portability vs authoring distinction, cut summary paragraph, add closing question.

**Wei Lin (Lawyer-Coder):** "One draft revision away from sharing without caveats." Key fixes: expand emotional discomfort, name specific skills in "still figuring out," give CoDraft context, expand testing gap paragraph.

### Changes Made (Round 1 Revision)
1. Added CoDraft context sentence in opening
2. Expanded "not comfortable to read" into 3 specific sentences
3. Added legal domain paragraph (healthcare/SE variance → legal)
4. Full 7-row model table (was 3 Claude Code rows)
5. Added harness-matters observation
6. Clarified portability vs authoring capability in AI-generated section
7. Named `generate_a_pitch` as the specific worried-about skill
8. Expanded testing gap from 1 sentence to full paragraph
9. Added closing question
10. Cut "For anyone building skills" summary paragraph

### Backlinks Added
1. **Two Files, One Workflow** → opening paragraph (CoDraft context)
2. **I Built CLI Tools for Claude Code** → section 1 (strong priors callback)
3. **Lawyers Got Prompt Engineering Wrong** → closing (45-line skill origin)

### Outcomes
- ✅ Post fully drafted and revised (~2,100 words)
- ✅ All reviewer feedback incorporated in single pass
- ✅ 3 backlinks distributed across post
- ✅ Custom excerpt added
- ❌ Ghost API returning 418 — publish blocked
- Files modified: skillsbench-analysis.md
- Files created: research.md

### Next Steps
- Publish to Ghost when API is available: `node -r dotenv/config scripts/publish-lexical.js posts/skillsbench-analysis/skillsbench-analysis.md`
- Run `npm run sync-ghost skillsbench-analysis` after publishing
- Update frontmatter with post_id

## Session 3: Ghost Sync & PR Prep (2026-03-07)

### Context
Post was published to Ghost between sessions. User returned to sync local markdown with the Ghost published version and prepare for merging the feature branch.

### What Claude Did
- Fetched raw HTML from Ghost Admin API to compare against local markdown
- Identified all differences between Ghost and local versions
- Applied 7 categories of changes to match Ghost:
  1. Reworded CoDraft intro paragraph (inline link → bookmark card link)
  2. Replaced CLI tools inline link paragraph with bookmark card link
  3. Added floppy disk Unsplash image with caption (section 2)
  4. Updated table: added Δ abs (pp) and g (%) columns, corrected row order
  5. Flattened framework section (removed bold subheaders, made flat numbered list)
  6. Fixed bold/italic formatting throughout (bold→italic for section leads and lesson callouts, italic→bold for emphasis words)
  7. Small wording fixes ("I then updated" vs "I updated")
- Committed and pushed to `claude/check-branch-status-wMjzK`
- Drafted PR title and description for the main skillsbench branch

### User Decisions
- Decision 1: Approved syncing local markdown to match Ghost (Ghost is source of truth for published content)
- Decision 2: Merged the check-branch PR (#25) into the skillsbench feature branch

### Outcomes
- ✅ Local markdown now matches Ghost published version exactly
- ✅ PR #25 merged into skillsbench feature branch
- ✅ PR title/description drafted for main skillsbench branch
- Files modified: skillsbench-analysis.md (32 insertions, 33 deletions)

### Next Steps
- Create PR for main skillsbench feature branch (`claude/skillsbench-analysis-post-dYVDG`) → master
- Merge when ready
