# Discussion Notes: Turn a Project Folder into a Cowork Workflow

## AUDIT TRAIL: Key Decision Points

### Decision: Focus on how Cowork reads project folders, not "building apps" (2026-02-16, Session 1)

**Claude's Analysis:**
- Initial pitch framed post as "Building Cowork Apps from Project Folders"
- Ran all three audience reviewers in parallel
- Sarah Chen (corporate lawyer) wouldn't click — "building apps" sounds like developer work
- Legal Tech reviewer: concept interesting but scope too ambitious
- Wei Lin (lawyer-coder): cautiously interested but unclear on "so what"

**Claude's Recommendation:**
Reframe as "Turn a Project Folder into a Cowork Workflow" — less intimidating, clearer benefit.

**User Decision:**
Approved reframe. Clarified that post should explain how Claude works inside a folder. CoDraft v1 has only one skill and a CLAUDE.md — "so it should be doable."

**Rationale:**
- "Building apps" alienates non-technical readers
- "How Claude works inside a folder" is the real educational goal
- CoDraft v1's simplicity (two files) makes the post concrete and followable

**Outcome:**
✅ Title changed. Scope narrowed to mechanics explainer with CoDraft v1 as example.

### Decision: Vulnerability framing — "poor man's Claude Code" angle (2026-02-16, Session 1)

**Claude's Analysis:**
- All three reviewers flagged missing vulnerability in pitch
- Wei Lin specifically wanted: "Did you overbuild v0 before realizing v1 just needed two files?"
- Claude suggested overbuilding narrative as the vulnerability

**Claude's Recommendation:**
Add vulnerability about overbuilding CoDraft v0 before stripping back to two files.

**User Decision:**
Rejected Claude's suggestion. Provided own framing: the real vulnerability is underestimating Cowork itself. User thought Cowork was "some poor man's Claude Code... Claude Code trying to be for non-coders." Building CoDraft v1 changed that — you're distributing a program with text files in a folder. There's a lot you can do with it, all without leaving the Cowork interface.

**Rationale:**
- Claude's overbuilding narrative was manufactured — user didn't actually overbuild v0
- The genuine insight is about *underestimating* a tool, not overbuilding a project
- "Poor man's Claude Code" is honest, specific, and relatable to the audience

**Outcome:**
✅ Pitch rewritten with authentic vulnerability. Much stronger than Claude's suggestion.

### Decision: Simplified scope — CoDraft v1 is just two files (2026-02-16, Session 1)

**Claude's Analysis:**
- Sarah Chen flagged a "gap problem": plugin post was "edit existing files," this post jumps to "create from scratch"
- All three reviewers wanted time estimates and scope clarity
- Previous pitch didn't specify CoDraft's actual complexity

**Claude's Recommendation:**
Include a minimal example and time estimate (~90 minutes).

**User Decision:**
Clarified that CoDraft v1 is literally one skill and one CLAUDE.md file. "It should be doable."

**Rationale:**
- Two files resolves Sarah's gap concern entirely
- Makes the post concrete: readers can see exactly what's involved
- Matches the "learning in public" template: specific, grounded, achievable

**Outcome:**
✅ Post scope narrowed. Pitch now leads with "Version 1 is two text files in a folder."

## WHAT CLAUDE DID (Contributions)

### Research
- Read legal-plugin-guide discussion.md for series context and Part 1 decisions
- Read contract-review-skill pitch for CoDraft background
- Read prompt-engineering-to-skills pitch for series context
- Read Houfu Voice Guide Part 4 (Templates) for pitch structure

### Analysis
- Synthesized feedback across three reviewer rounds (9 total reviews)
- Identified key disagreements between reviewers (Sarah wouldn't click, others would)
- Extracted sharpest critique (Sarah's "gap problem") as the most actionable feedback
- Compared "Learning in Public" template to post concept — good fit

### Writing
- Drafted 3 pitch iterations, each incorporating reviewer feedback:
  1. "Beyond Plugins: Building Cowork Apps from Project Folders" — too developer-oriented
  2. "Turn a Project Folder into a Cowork Workflow" — better framing, missing vulnerability
  3. Final version — incorporates "poor man's Claude Code" vulnerability from user
- Created pitch.md with metadata, tags, and series context

### Quality Control
- Ran all three audience reviewers (legal-tech, corporate-lawyer, lawyer-coder) — twice
- Ran authenticity check on final pitch — all claims verified authentic
- Suggested tags from canonical registry (LegalTech, AI, OpenSource, Tutorial)

## WHAT WORKED / DIDN'T WORK

### Worked Well ✅
| What Claude Did | User Decision | Outcome |
|-----------------|---------------|---------|
| Ran three reviewers in parallel | User used feedback to refine scope | Led to "how Claude works inside a folder" focus |
| Surfaced Sarah's "gap problem" critique | User clarified CoDraft v1 = two files | Resolved scope concern entirely |
| Suggested "Turn a Project Folder into a Cowork Workflow" title | User approved | Final title |
| Suggested leading with outcome first | User incorporated | Pitch opens with CoDraft working, then explains why |

### Didn't Work ❌
| What Claude Did | Problem | Lesson |
|-----------------|---------|--------|
| Initial pitch: "Building Cowork Apps" | Too developer-oriented; Sarah wouldn't click | Avoid "building" language for non-technical audience |
| Suggested overbuilding vulnerability | Manufactured — user didn't actually overbuild | Don't invent vulnerabilities; ask user for their genuine experience |
| Title suggestions like "Two Files That Make a Folder Smart" | Too clever, unclear benefit | Keep titles functional and outcome-oriented |

## SESSIONS (Chronological Detail)

## Session 1: Pitch Development (2026-02-16)

### Context
User wants to write the second post in a Cowork series. Part 1 ("Making Claude's Legal Plugin Actually Yours") covered customising registry plugins with a PDPA DSAR template. Part 2 should connect to CoDraft, the document assembly tool the user has been building.

### What Claude Did
- **Research**:
  - Read legal-plugin-guide discussion.md (6 sessions of context, published as Ghost draft)
  - Read contract-review-skill pitch (CoDraft background)
  - Read prompt-engineering-to-skills pitch (series context)
  - Read Houfu Voice Guide Part 4 (Templates) for pitch structure

- **Writing**:
  - Drafted initial pitch: "Beyond Plugins: Building Cowork Apps from Project Folders"
  - Revised to: "Turn a Project Folder into a Cowork Workflow" after reviewer feedback
  - Final revision incorporating user's "poor man's Claude Code" vulnerability

- **Quality Control**:
  - Round 1: Ran corporate lawyer reviewer (Sarah Chen) on initial pitch
  - Round 2: Ran all three reviewers on revised pitch
  - Synthesized consensus and disagreements across reviewers
  - Authenticity check on final pitch — all claims verified
  - Tag suggestion from canonical registry

### User Decisions
- **Decision 1**: Post should explain how Claude works inside a folder (not "building apps")
- **Decision 2**: Vulnerability is underestimating Cowork ("poor man's Claude Code"), not overbuilding
- **Decision 3**: CoDraft v1 = one skill + one CLAUDE.md — keeps scope achievable
- **Decision 4**: Approved title "Turn a Project Folder into a Cowork Workflow"
- **Decision 5**: Approved tags: LegalTech, AI, OpenSource, Tutorial

### Outcomes
- ✅ Pitch approved after 3 iterations
- ✅ Authentic vulnerability sourced from user's genuine experience
- ✅ Scope simplified to match CoDraft v1's actual structure
- ✅ All three reviewers' key concerns addressed
- Files created:
  - `/posts/connect-codraft-article/pitch.md`
  - `/posts/connect-codraft-article/discussion.md`

### Next Steps
- Develop outline of the article
- Research: How Cowork reads CLAUDE.md and skill files (technical details)
- Draft the post
- Content quality audit
- Target audience review
- Backlink curation
- Publish to Ghost

## KEY RESEARCH FINDINGS

### Series Context
- Part 1: "Making Claude's Legal Plugin Actually Yours" — published as Ghost draft (post ID: 69889ecefbb6fe0001120c15)
- Part 1 focus: Customising registry plugins, editing templates, PDPA DSAR
- Part 2 bridge: "In the last post, you edited someone else's skill files. This post shows you how to create your own."

### CoDraft v1 Structure
- One skill file (slash command)
- One CLAUDE.md file (project context for Claude)
- Together: a complete Cowork workflow that works when you open the folder

### Reviewer Insights (Key Takeaways)
- **Sarah Chen**: Won't click on "building apps" — needs outcome-focused framing
- **Legal Tech**: Lead with the surprising simplicity, then explain mechanics
- **Wei Lin**: Needs vulnerability to feel validated; wants time estimate and decision framework
- **All three**: Missing "so what" — connect mechanics to what readers can DO after
