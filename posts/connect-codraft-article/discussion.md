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

### Decision: Vulnerability arc completed with real insight from brainstorm (2026-02-19, Session 4)

**Claude's Analysis:**
- All three audience reviewers (Session 4) flagged missing emotional texture in vulnerability arc
- Draft said "The fact that it worked at all changed how I saw Cowork" but never explained *what* the shift felt like
- User provided screenshot from an actual brainstorm conversation showing the real moment

**Claude's Recommendation:**
Replace generic "changed how I saw Cowork" with specific texture from the brainstorm screenshot.

**User Decision:**
Approved. Key framing from screenshot: "I had a mental model from docassemble: interviews, logic blocks, Python, real infrastructure. I expected to hit a wall somewhere in Cowork. Two text files later, it worked. I hadn't been wrong about Cowork. The rules had changed, and I hadn't noticed."

**Rationale:**
- The actual insight is not "I was wrong" — it's "the rules changed and I didn't notice"
- Docassemble mental model is the correct contrast: real infrastructure expectations vs. two text files
- Specific and honest; couldn't be manufactured, came from user's genuine experience

**Outcome:**
✅ Vulnerability arc now complete. Reviewers' top "essential" fix addressed.

### Decision: Docassemble scope corrected mid-edit (2026-02-19, Session 4)

**Claude's Analysis:**
- Applied "CoDraft running" fix — wrote: "Template discovery, field interviews, document rendering — the whole pipeline?"
- This implies CoDraft replicates all of docassemble

**User Decision:**
Corrected immediately: "docassemble is a full, battle tested system and codraft currently only implements one small part."

**Outcome:**
✅ Both the intro description and CoDraft demo paragraph corrected to say "One small part of what docassemble can do." Docassemble described accurately as "battle-tested open-source system for automated legal documents."

### Decision: Post published as Ghost draft before screenshots added (2026-02-19, Session 4)

**Claude's Analysis:**
- Five screenshot HTML comment placeholders remain in draft
- Post is otherwise complete — all fixes applied, all reviewer feedback addressed

**User Decision:**
"Go straight to publish as a draft" — post to Ghost with screenshot placeholders, add screenshots in Ghost editor later.

**Rationale:**
- Screenshots can be added in Ghost editor directly
- No point delaying the draft creation
- Post ID will be saved to frontmatter for reference

**Outcome:**
✅ Draft created: post ID `6995e87d7d346400014549a1`. Admin URL: https://alt-counsel.ghost.io/ghost/#/editor/post/6995e87d7d346400014549a1

## WHAT CLAUDE DID (Contributions)

### Research
- Read legal-plugin-guide discussion.md for series context and Part 1 decisions
- Read contract-review-skill pitch for CoDraft background
- Read prompt-engineering-to-skills pitch for series context
- Read Houfu Voice Guide Part 4 (Templates) for pitch structure
- (Session 2) Read full Voice Guide before drafting
- (Session 2) Read Part 1 published post to avoid repetition and ensure bridge
- (Session 2) Searched for actual CoDraft v1 files — confirmed not in this repo
- (Session 2) Read research.md for technical accuracy on CLAUDE.md and skills
- (Session 4) Read brainstorm screenshot (vulnerability arc insight) provided by user

### Analysis
- Synthesized feedback across three reviewer rounds (9 total reviews)
- Identified key disagreements between reviewers (Sarah wouldn't click, others would)
- Extracted sharpest critique (Sarah's "gap problem") as the most actionable feedback
- Compared "Learning in Public" template to post concept — good fit
- (Session 2) Identified developer analogies (AGENTS.md, package.json) would alienate lawyer audience
- (Session 2) Translated technical concepts to lawyer-friendly analogies: briefing note, checklist, matter folder
- (Session 4) Ran content-quality-auditor agent; synthesized 13 actionable fixes
- (Session 4) Ran all three audience reviewers in parallel; identified 4 essential fixes
- (Session 4) Ran backlink curation; found 6 candidate posts

### Writing
- Drafted 3 pitch iterations, each incorporating reviewer feedback:
  1. "Beyond Plugins: Building Cowork Apps from Project Folders" — too developer-oriented
  2. "Turn a Project Folder into a Cowork Workflow" — better framing, missing vulnerability
  3. Final version — incorporates "poor man's Claude Code" vulnerability from user
- Created pitch.md with metadata, tags, and series context
- (Session 2) Drafted full blog post (~1,800 words) with tutorial structure
- (Session 2) Created contract intake workflow as concrete tutorial example
- (Session 2) Placed 6 screenshot markers throughout tutorial
- (Session 4) Applied 13 content quality audit fixes
- (Session 4) Applied 4 essential reviewer fixes (vulnerability arc, CoDraft demo, CLAUDE.md load mechanism, gasps removal)
- (Session 4) Fixed 3 Session 3 open issues (hardcoded path note, package.json jargon, neither-is-wrong closing)

### Quality Control
- Ran all three audience reviewers (legal-tech, corporate-lawyer, lawyer-coder) — twice
- Ran authenticity check on final pitch — all claims verified authentic
- Suggested tags from canonical registry (LegalTech, AI, OpenSource, Tutorial)
- (Session 3) Fetched and reviewed all user revisions; identified open issues in revised draft
- (Session 4) Full content quality audit via content-quality-auditor agent (13 fixes applied)
- (Session 4) Third round of all three audience reviewers; synthesized 4 essential + 3 high-value fixes

### Technical
- (Session 4) Created `post-to-ghost.js` with: table→HTML card conversion, screenshot comment skipping, GitHub footer as bookmark card
- (Session 4) Published post as Ghost draft (post ID `6995e87d7d346400014549a1`)

## WHAT WORKED / DIDN'T WORK

### Worked Well ✅
| What Claude Did | User Decision | Outcome |
|-----------------|---------------|---------|
| Ran three reviewers in parallel | User used feedback to refine scope | Led to "how Claude works inside a folder" focus |
| Surfaced Sarah's "gap problem" critique | User clarified CoDraft v1 = two files | Resolved scope concern entirely |
| Suggested "Turn a Project Folder into a Cowork Workflow" title | User approved | Final title |
| Suggested leading with outcome first | User incorporated | Pitch opens with CoDraft working, then explains why |
| (Session 4) Content quality audit flagged 13 issues | Applied all 13 fixes | Post substantially tightened |
| (Session 4) All three reviewers flagged incomplete vulnerability arc | User provided screenshot with real insight | Strongest section of the post now fully realised |
| (Session 4) Created post-to-ghost.js with table+screenshot handling | User ran it | Draft published successfully |

### Didn't Work ❌
| What Claude Did | Problem | Lesson |
|-----------------|---------|--------|
| Initial pitch: "Building Cowork Apps" | Too developer-oriented; Sarah wouldn't click | Avoid "building" language for non-technical audience |
| Suggested overbuilding vulnerability | Manufactured — user didn't actually overbuild | Don't invent vulnerabilities; ask user for their genuine experience |
| Title suggestions like "Two Files That Make a Folder Smart" | Too clever, unclear benefit | Keep titles functional and outcome-oriented |
| (Session 4) CoDraft demo wrote "whole pipeline" claim | Overstated scope vs. docassemble | Check scope claims with user before writing; CoDraft = one small part, not full docassemble |
| (Session 4) post-to-ghost.js used `builder._nodes` | `_nodes` doesn't exist; property is `nodes` | Check LexicalBuilder source before referencing internal state |

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

### Decision: Use lawyer-friendly analogies, not developer jargon (2026-02-17, Session 2)

**Claude's Analysis:**
- Research found AGENTS.md (60,000+ open source projects), `.github/copilot-instructions.md`, and `package.json` as analogies for the "folder as program" pattern
- These were included in research.md as supporting evidence

**Claude's Recommendation:**
Initially planned to use these developer analogies to show the pattern is established.

**User Decision:**
Rejected developer analogies for the post. "For a lawyer audience, the idea of AGENTS.md etc is relatively unheard of. The point was that this is a well established pattern." The data point (60,000+ projects) is useful as proof the pattern is legit, but the specific filenames mean nothing to lawyers.

**Rationale:**
- AGENTS.md, package.json, copilot-instructions.md are developer concepts — citing them replaces one unfamiliar concept with another
- The audience needs the *confidence* that the pattern is proven, not the technical details of how
- Better analogies: matter briefing note (for CLAUDE.md), standard operating procedure/checklist (for skills)

**Outcome:**
✅ Draft uses lawyer-friendly analogies throughout: "briefing note" for CLAUDE.md, "checklist" for skills, "matter folder" for the overall pattern. The 60,000+ projects stat is mentioned briefly as evidence without naming specific files.

### Decision: Tutorial example changed to real "my-first-chatbot" contract review (2026-02-18, Session 3)

**Claude's Analysis:**
- Session 2 draft used a generic, made-up contract intake example because actual CoDraft v1 files weren't in this repo
- Brainstorming session explored 4 directions: (A) contract summary, (B) clause checker, (C) CoDraft itself, (D) something more surprising
- User introduced a new constraint: tutorial would be created *through chat* — telling Claude to write the files, never leaving Cowork interface
- User confirmed: goal is pattern comprehension, not a take-home tool; output should be immediately visible

**Claude's Recommendation:**
Contract summary direction (Option A) — universally relatable, output immediately verifiable, different from Part 1's DSAR exercise.

**User Decision:**
Implemented a real contract review workflow (`my-first-chatbot`) built and run in Cowork. Used the VIMA NDA from Part 1 as the test document. Tutorial shows actual prompts typed, actual CLAUDE.md and SKILL.md that Claude generated, and actual output (15 issues found, saved as .docx).

**Rationale:**
- "Created through chat" reframes the tutorial: reader never opens a text editor
- Showing real prompts and real outputs is more honest than hypothetical examples
- Reusing the VIMA NDA from Part 1 creates continuity across the series
- Demonstrates pattern comprehension without requiring readers to understand file structure

**Outcome:**
✅ Tutorial completely rewritten with real files, real prompts, real output. `my-first-chatbot/` folder added to repo with CLAUDE.md, SKILL.md, and NDA_Review_2026-02-18.docx.

### Decision: Always-loaded vs. on-demand distinction made explicit (2026-02-18, Session 3)

**Claude's Analysis:**
- Session 2 draft explained CLAUDE.md as "briefing note" and skill as "checklist" — lawyer-friendly analogies
- The deeper question (why two files instead of one?) wasn't directly addressed

**Claude's Recommendation:**
Separate what's always loaded from what's loaded on demand. Frame this as context management, not just file organisation.

**User Decision:**
Added explicit "The difference between project instructions and a skill" section. CLAUDE.md = always read, applies at all times. Skill = only read when invoked, for task-specific procedures. Tied this to a practical point about context management as projects grow.

**Rationale:**
- This is the core architectural lesson of the post
- Lawyers understand the concept of "standing instructions" vs. "task-specific procedures"
- Context management angle is honest about why the pattern matters beyond convenience

**Outcome:**
✅ New section added between the two file explanations. Becomes the conceptual centrepiece of the mechanics explainer.

### Decision: Include screenshot placement for tutorial (2026-02-17, Session 2)

**Claude's Analysis:**
- User flagged need to think about screenshots for tutorial format
- Claude proposed 6 potential screenshot moments: folder structure, opening in Cowork, CLAUDE.md loading, slash command appearing, running the skill, before/after output

**User Decision:**
Agreed screenshots needed. Claude marked 6 placement spots in draft with HTML comments. User to capture actual screenshots from Cowork UI.

**Rationale:**
- Tutorial format needs visual aids for readers to follow along
- Screenshots at key "aha" moments help non-technical readers verify they're on track
- Actual screenshots must come from user since Claude can't access Cowork UI

**Outcome:**
✅ Draft includes 6 `<!-- 📸 SCREENSHOT -->` markers at key steps.

## Session 2: First Draft (2026-02-17)

### Context
User gave two key pieces of feedback before drafting:
1. Developer analogies (AGENTS.md, package.json) are meaningless to lawyer audience — use the *confidence* that the pattern is established, not the jargon
2. Need to plan screenshot placement for the tutorial format

### What Claude Did
- **Research**:
  - Re-read discussion.md, pitch.md, research.md for full context
  - Read Voice Guide (all 5 parts) before drafting
  - Read Part 1 post (legal-plugin-guide.md) to avoid repetition and ensure bridge
  - Searched for actual CoDraft v1 files — not in this repo (separate project)
  - Read contract-review-skill pitch for CoDraft background

- **Writing**:
  - Drafted full post (~1,800 words) following "Learning in Public" template
  - Opening: "poor man's Claude Code" vulnerability as approved in pitch
  - Used lawyer-friendly analogies: "briefing note" for CLAUDE.md, "checklist/procedure" for skills
  - Created concrete tutorial example: contract intake workflow (not CoDraft itself, since files aren't available)
  - Bridged from Part 1: "In the last post, you edited someone else's skill files. This post shows you how to create your own."
  - Included 6 screenshot placement markers as HTML comments
  - Closing "neither is wrong" move: enterprise tools vs. folder workflows

- **Voice Application**:
  - Opens with feeling (underestimating Cowork)
  - Specific numbers (two text files, 90 minutes, 60,000+ projects, $500-$2,000/month)
  - Vulnerable admission in paragraph one
  - Short paragraphs, varied rhythm
  - Return to solo counsel reality in closing
  - "Neither is wrong" framing at the end

### User Decisions
- **Decision 1**: Developer analogies replaced with lawyer-friendly ones
- **Decision 2**: Screenshot placements marked for user to capture

### Outcomes
- ✅ First draft completed
- Files created:
  - `/posts/connect-codraft-article/connect-codraft-article.md`
- Files updated:
  - `/posts/connect-codraft-article/discussion.md` (this file)

### Open Questions
- User needs to provide/confirm: actual CoDraft v1 file contents (draft uses a generic contract intake example instead)
- User needs to capture screenshots from Cowork UI
- Draft uses a made-up example (contract intake) since actual CoDraft files aren't in this repo — user may want to replace with real CoDraft content

### Next Steps
- User review of draft
- Replace generic example with actual CoDraft v1 content (if desired)
- Capture screenshots
- Content quality audit
- Target audience review
- Backlink curation
- Publish to Ghost

## Session 3: User Revision — Real Tutorial with Real Files (2026-02-18)

### Context
After Session 2's draft, user brainstormed the tutorial example with Claude (via chat). Key new constraint emerged: the tutorial should be created *through chat* — the user tells Cowork to write the files, never opening a text editor. Goal confirmed as pattern comprehension, not a take-home tool. Output must be immediately visible.

User then independently revised the entire draft and ran the tutorial exercise for real in Cowork, producing actual files and output.

### What Claude Did
- **Brainstorming**: Proposed 4 example directions (contract summary, clause checker, CoDraft itself, surprising option). Laid out tutorial flow step by step with screenshot placement suggestions.
- **Analysis**: Identified CLAUDE.md vs. skill split as the core teaching moment — "always-loaded context vs. on-demand procedure." Suggested this framing for the tutorial.
- **Notes**: Fetched and pulled latest changes; summarised all revisions; updated discussion.md with Session 3.

### What User Did (Independent Revision)
This session's substantive work was done by the user, not Claude. Key changes:

**Opening revised:**
- CoDraft described as "contract generator tool" (not generic document assembly)
- Added: "I created v1 using Cowork itself" — closes the loop on the vulnerability and sets up the tutorial
- Removed Claude's multi-paragraph opening; tighter and more direct

**New section added:**
- "The difference between project instructions and a skill" — explicit explanation of always-loaded vs. on-demand; context management framing

**"The folder is the program" section restructured:**
- Moved before the tutorial (not after) — establishes the conceptual framing first
- Rewritten to compare Claude Code's structure (package.json, src/, git) to Cowork's simpler paradigm
- New closing metaphor: "like passing your friends a floppy disk containing a PC game"
- Removed the "neither is wrong" enterprise comparison from closing

**Tutorial completely rewritten:**
- Time: 30 minutes (down from 90)
- No text editor required — everything done through Cowork chat
- Shows real prompts the user typed
- Shows actual CLAUDE.md and SKILL.md that Claude generated
- Uses VIMA NDA from Part 1 as test document
- Result: 15 issues found, output saved as NDA_Review_2026-02-18.docx
- Screenshot count: 4 markers (down from 6, more targeted)
- Added toggle/accordion for hidden files note on macOS/Windows (removed — replaced with inline note)

**Structure reordered:**
Old: Opening → What's inside → Why it works → Tutorial → What next → The folder is the program
New: Opening → What changed → What's inside → Why it works → The folder is the program → Tutorial → What next

### User Decisions
- **Decision 1**: Tutorial created through chat (Cowork writes the files, user never opens a text editor)
- **Decision 2**: Use real prompts and real outputs, not hypothetical examples
- **Decision 3**: Reuse VIMA NDA from Part 1 for continuity
- **Decision 4**: Always-loaded vs. on-demand distinction made explicit as its own section
- **Decision 5**: "The folder is the program" section moved before tutorial as conceptual setup
- **Decision 6**: Time estimate reduced to 30 minutes

### Outcomes
- ✅ Draft substantially revised — more authentic, more concrete, better structured
- ✅ Real files committed to repo
- Files created by user:
  - `my-first-chatbot/CLAUDE.md` (actual project instructions generated by Claude in Cowork)
  - `my-first-chatbot/.claude/skills/contract-review/SKILL.md` (actual skill generated by Claude in Cowork)
  - `my-first-chatbot/NDA_Review_2026-02-18.docx` (actual output from the tutorial run)
  - `Starting_screen_for_cowork.png`
  - `cowork_process_our_initial_prompt.png`
  - `location_of_claudemd_in_cowork_interface.png`
  - `Cowork_reads_the_skill_file.png`
  - `results_cowork.png`

### Open Questions / Issues Noted
- SKILL.md contains a hardcoded session path (`/sessions/jolly-exciting-bardeen/mnt/...`) in the file reading instructions — this will break for other users. May need a note in the post or a correction to the skill.
- The `package.json` reference in "The folder is the program" section may still be developer jargon — worth reviewing on next pass.
- No "neither is wrong" framing in the closing anymore — the post ends on a more open note ("What will you build today?"). Check whether this feels too abrupt for the target audience.

### Next Steps
- Review remaining developer jargon in the draft
- Address the hardcoded session path in SKILL.md (note in post or fix the file)
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

## Session 4: Full Review, Essential Fixes, and Ghost Publication (2026-02-19)

### Context
Continued from Session 3 which had identified 3 open issues in the revised draft. This session completed the post through the full REVIEW → POST pipeline.

### What Claude Did
- **Pre-work**: Checked todos (none), read discussion.md to understand Session 3 state and open issues
- **Fixes (Session 3 open issues)**:
  1. Added note after SKILL.md code block about hardcoded session path breaking for other users
  2. Rewrote "The folder is the program" paragraph to remove package.json/src/git jargon
  3. Added "neither is wrong" paragraph before final question — post now closes with genuine nuance
- **Content quality audit**: Ran content-quality-auditor agent. 13 actionable fixes applied:
  - "What changed" section → "Building vs. customising — and why it matters"
  - "Tens of thousands" → qualified claim ("Across open source repositories, hundreds of thousands...")
  - "Neato, right?" → "That's the part that genuinely surprised me."
  - Removed duplicate CTA question at end
  - Time estimate caveat added: "(budget more if you want to iterate on the instructions)"
  - Removed "(Duh!)" from permission explanation
  - "So let go of your fears" → "Most people who try it are surprised how far plain text gets them"
  - "fairly advanced prompting technique in order to" → "Time for a sophisticated prompting technique:"
  - Fixed typo "This the project" → "This is the project"
  - Added pre-code-block signal before SKILL.md: "It's a long file — feel free to skim..."
  - Added post-code-block re-entry paragraph
  - VIMA expansion added (Singapore's Venture Investment Model Agreement initiative)
  - DMS expansion added (Document Management System)
  - Series note added to intro (Part 2 context)
- **Audience review**: Ran all three reviewers in parallel; ran backlink curation simultaneously. Consensus:
  - Tutorial is the post's strongest section
  - Vulnerability arc incomplete — "changed that" never given texture
  - "Building vs. customising" section weakest (gasps line)
  - CoDraft never shown running
  - Closing needed better "neither is wrong" placement
- **Essential fixes (4 applied)**:
  1. **Vulnerability arc**: User provided screenshot from brainstorm conversation with real insight: "I hadn't been wrong about Cowork. The rules had changed, and I hadn't noticed." Applied verbatim + docassemble mental model framing
  2. **CoDraft running demo**: Added paragraph showing reader what happens when you open CoDraft folder in Cowork
  3. **CLAUDE.md load mechanism**: Added explicit explanation of automatic loading before first message
  4. **Gasps removal**: Replaced "I can hear gasps" with "The whole thing is text..."
- **Docassemble correction** (mid-edit): User corrected overstatement — CoDraft only implements "one small part" of docassemble's algorithm. Applied correction throughout
- **Technical**: Created `post-to-ghost.js` — handles markdown tables (→ HTML card), screenshot comments (skip), GitHub footer (bookmark card). Fixed `builder._nodes` → `builder.nodes` bug. Ran with `node -r dotenv/config`. Published successfully on second attempt.

### User Decisions
- **Decision 1**: Apply all 13 content quality audit fixes
- **Decision 2**: "Fix all the essentials" — four fixes from reviewer consensus
- **Decision 3**: Corrected docassemble scope mid-edit (CoDraft = one small part, not full pipeline)
- **Decision 4**: "Go straight to publish as a draft" — publish to Ghost with 5 screenshot placeholders still present; add screenshots in Ghost editor

### Outcomes
- ✅ All three Session 3 open issues resolved
- ✅ Content quality audit complete — 13 fixes applied
- ✅ All three audience reviewers run — 4 essential fixes applied
- ✅ Vulnerability arc complete and authentic
- ✅ Ghost draft published: post ID `6995e87d7d346400014549a1`
- Files created/modified:
  - `/posts/connect-codraft-article/connect-codraft-article.md` (extensively revised)
  - `/posts/connect-codraft-article/post-to-ghost.js` (new publishing script)

### Open Items Before Publishing
- Review backlink candidates (6 found — see backlink curation output)

## Session 5: Ghost → Repo Sync and Commit Prep (2026-02-19)

### Context
Post was scheduled in Ghost with major edits made in the Ghost editor (screenshots added, sections cut, content condensed). Needed to sync Ghost version back to local markdown and stage for commit.

### What Claude Did
- **Fetched Ghost post metadata**: Confirmed new title, slug, status, and published_at date via Admin API
- **Inspected Ghost HTML**: Found 4 uploaded screenshots and 1 Part 1 bookmark card; confirmed all screenshot HTML comment placeholders replaced
- **Updated local markdown** (`connect-codraft-article.md`):
  - Frontmatter: new title, new slug, `status: scheduled`, `published_at: 2026-02-24T01:29:09.000Z`
  - Replaced body to match Ghost version (see Ghost content changes below)
- **Updated discussion.md** with this Session 5 entry
- **Staged files** for user review before commit

### Ghost Content Changes (vs. Session 4 local markdown)

**Removed entirely:**
- Italic Part 1 series note at top (replaced by bookmark card in Ghost after first paragraph)
- "Building vs. customising — and why it matters" section
- "Why this works: the pattern behind it" section
- CoDraft running demo paragraph
- "How skills get discovered" subsection
- Full CLAUDE.md code block in Step 2 (replaced with descriptive paragraph)
- Full SKILL.md code block in Step 3 (replaced with 5-step summary)
- "Share the folder" and "Put it on GitHub" bullet points from closing
- "More importantly, we let Claude write most of the instructions here..." paragraph

**Changed:**
- docassemble description: "system for building automated legal documents" → "system for guided interviews and document assembly. It's a proper web application with Python"
- Final sentence of intro: "the same way" → "using nothing but Cowork's chat"
- "What's inside CoDraft v1" opening: now "CoDraft v1 is at its core two files. That's it." (was longer)
- Step 2 intro: "Time for a sophisticated prompting technique: asking Claude nicely." → "Here's what I typed:"
- Step 3 intro condensed from 3 paragraphs to 2 sentences
- "A note on file paths" and "Verify the file location" notes converted to Ghost toggle cards

**Added in Ghost:**
- Part 1 bookmark card (after first paragraph)
- 4 screenshot images: `cowork_process_our_initial_prompt.png`, `location_of_claudemd_in_cowork_interface.png`, `Cowork_reads_the_skill_file.png`, `results_cowork.png`
- `<!--members-only-->` divider before Step 1
- Signup card (after "The folder is the program" section)
- CTA card (after closing paragraph)
- GitHub footer bookmark card

### User Decisions
- **Decision 1**: Title finalised as "Two Files, One Workflow. No Code. Just Cowork." (changed from "Turn a Project Folder into a Cowork Workflow")
- **Decision 2**: Post scheduled for publication 2026-02-24T01:29:09.000Z
- **Decision 3**: Screenshots added directly in Ghost editor; significant sections cut for concision

### Outcomes
- ✅ Local markdown updated to match Ghost version
- ✅ discussion.md updated with Session 5
- ✅ Files staged for commit (user to review before committing)
