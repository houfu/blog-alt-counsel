# Discussion Notes: Harvey Auto-Research Build (Post 1)

## AUDIT TRAIL: Key Decision Points

### Decision: Split into two posts (2026-04-11, Session 1)

**Claude's Analysis:**
- Original idea was a single long post covering build + results + critique
- User had two competing opening angles: Harvey critique vs learning-by-building
- Both angles pull in different directions within one post

**Claude's Recommendation:**
Suggested combining both angles using "neither is wrong" framing — open with curiosity that leads to building

**User Decision:**
Split into two posts instead. Post 1 = the build (learning in public). Post 2 = the results (critique/analysis).

**Rationale:**
Clean separation of concerns. Post 1 can publish before experiment finishes. Each post has a clear single angle.

**Outcome:**
TBD — series in progress

### Decision: "Worked sum" framing for learning angle (2026-04-11, Session 1)

**Claude's Analysis:**
- User said the best way to learn programming is to implement solutions to problems
- Harvey's post provides a "worked sum" — shows it's possible, so you rebuild it to understand it

**User Decision:**
Approved "worked sum" metaphor as the core framing for Post 1.

**Rationale:**
Concrete, relatable metaphor. Many readers have asked how user learns programming — this answers that question through demonstration.

**Outcome:**
TBD

### Decision: Include agent-assisted programming thread (2026-04-11, Session 1)

**Claude's Analysis:**
- User noted they haven't hand-coded in a while
- Asked whether skills have atrophied

**User Decision:**
Include as secondary thread. The answer is nuanced — user gets to try more things, interesting work shifts to design decisions.

**Rationale:**
Genuine vulnerability that resonates with audience. Not the main thesis but enriches the post.

**Outcome:**
TBD

## WHAT CLAUDE DID (Contributions)

### Research
- Fetched and summarised Harvey AI's "Auto-Research for Legal Agents" post via Jina
- Read Voice Guide Parts 1-5 for pitch development
- Reviewed tag registry for tag suggestions
- Retrieved all 38 Programming-tagged posts from Ghost for backlink candidates
- Read full text of "So you want to code? (Lawyer Edition)" (2022) and "I Build Infrastructure. Jamie Vibe Codes Tools." (2026) for callback material
- Read experiment codebase: PRD, CLAUDE.md, README, PROJECT.md, ROADMAP.md, STATE.md, all source code, session transcripts
- Read Opus conversation transcript (conversation_b4790de0.json) — the design conversation that produced the PRD

### Writing
- Drafted pitch (two iterations — first without agent-assisted angle, then revised to include it)

### Quality Control
- Suggested tags: AI, LegalTech, Contracts, Programming (all from canonical registry)

### Technical
- Scaffolded post folder: posts/harvey-auto-research-build/
- Created pitch.md with frontmatter and series plan

## WHAT WORKED / DIDN'T WORK

### Worked Well
| What Claude Did | User Decision | Outcome |
|-----------------|---------------|---------|
| Suggested combining both angles in one post | User split into two posts instead — cleaner | Better separation of concerns |
| Asked for personal hook | User provided "worked sum" and agent-assisted coding angles | Strong dual-thread pitch |
| Retrieved old programming posts for callbacks | User identified which are callbacks vs companions | Clear relationship map for the post |
| Summarised Opus transcript in detail | User confirmed accuracy | Full design journey available for outline |

### Didn't Work
| What Claude Did | Problem | Lesson |
|-----------------|---------|--------|
| Initially planned experiment build as part of workflow | User clarified experiment is in separate codebase | Focus on presentation only |

## SESSIONS (Chronological Detail)

## Session 1: Pitch Development (2026-04-11)

### Context
User shared Harvey AI's "Auto-Research for Legal Agents" post and a detailed idea for a response article. The idea included building a simplified version of Harvey's loop applied to NDA review with 5 embedded issues of escalating difficulty.

### What Claude Did
- Research: Fetched Harvey post content, read Voice Guide
- Analysis: Identified the idea as well-formed, noted two competing opening angles
- Writing: Drafted pitch (two versions)
- Tools: Scaffolded post folder, created pitch.md

### User Decisions
- Split into two posts (build + results)
- "Worked sum" metaphor as core framing
- Agent-assisted programming as secondary thread
- Experiment built separately — Claude focuses on presentation
- Approved pitch with both threads included

### Outcomes
- Files created: pitch.md, discussion.md
- Pitch approved
- Tags confirmed: AI, LegalTech, Contracts, Programming

### Next Steps
- Develop outline for Post 1
- User continues building experiment in separate codebase
- Draft when outline is approved (may need to wait for experiment design details for NDA walkthrough section)

## Session 2: Research & Context Gathering (2026-04-12)

### Context
User returned to gather material for the outline. Needed to understand the full story of how the experiment was designed and built — from initial Opus conversation through GSD implementation.

### What Claude Did
- Research: Retrieved all 38 Programming-tagged posts from Ghost
- Research: Read full text of "So you want to code?" (2022) and "I Build Infrastructure. Jamie Vibe Codes Tools." (2026) for callback/companion material
- Research: Read full experiment codebase (PRD, source code, planning docs, session transcripts)
- Research: Read Opus conversation transcript (conversation_b4790de0.json) — the design conversation that produced the PRD
- Analysis: Identified which old posts are relevant callbacks vs companion pieces
- Analysis: Summarised the three-layer build process (Opus design → GSD execution → agent-assisted coding)

### User Decisions
- "So you want to code?" (2022) is a callback moment, not the frame — Tip 2 (follow interests) still holds, Tip 4 (coding with agents) is the new thread
- The vibe coding post ("I Build Infrastructure...") is the primary companion piece, not the 2022 post
- This post is a companion to the AI harness/vibe coding post, not a follow-up to the 2022 coding advice post
- User noted "So you want to code?" Tip 1 (realistic ambitions) should have been in the vibe coding post, not relevant here

### Key Findings from Research

**The Opus conversation (April 8-11) revealed the design process:**
1. Started with "Let's be critical about this" — critique of Harvey's claims
2. User's key insight: extraction vs judgment distinction ("Common issues which are easy are like flagging abnormal or long confidentiality periods. Tougher tasks are probably more like detecting non solicitation or peculiar carve outs.")
3. User consistently pushed toward simplicity — rejected agent SDK, rejected optimizer seeing the NDA, trimmed 5 issues to 4
4. Thesis crystallized mid-conversation: "It's visceral because the thesis is that the agent loop doesn't do squat if human (or AI) write crappy playbooks"
5. The playbook tension IS the finding — precise judgment playbook = text matching (solved for the judge), vague playbook = judge accepts confident nonsense
6. User course-corrected PRD scope: "the prd should focus on the code we are going to make for the harness"

**The GSD build (April 11-12) across 5 phases:**
- Phase 1: Foundation (config, models, NDA, rubric, playbook, Output A/B)
- Phase 2: Agent & Judge (retry logic, JSON parsing, model switch from qwen2.5:32b to gemma4:26b)
- Phase 3: Pre-loop gate (Output A vs B — gap=5.0, all from judgment category, decision=go)
- Phase 4: Optimiser (300-word limit, banned vocabulary, feedback sorted worst-first)
- Phase 5: Main loop (incremental writes, pre-loop gate integration)

**User's role throughout:** Legal content (NDA, outputs, playbook vagueness), strategic constraints (model choice, threshold, scope), design judgment. Claude handled architecture and implementation.

**Three layers of "how I built it":**
1. Opus conversation — designed the experiment through critique → concrete proposal → simplification
2. GSD workflow — Claude Code executed the PRD across 5 phases
3. The coding itself — agent-assisted throughout, user's work was design judgment not syntax

### Outcomes
- Full context gathered for outline development
- Companion piece relationship to vibe coding post established
- Callback to "So you want to code?" identified (one beat, not a section)

### Next Steps
- Develop outline for Post 1 using all gathered material
