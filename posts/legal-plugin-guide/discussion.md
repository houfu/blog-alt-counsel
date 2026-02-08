# Discussion Notes: Making Claude's Legal Plugin Actually Yours

## AUDIT TRAIL: Key Decision Points

### Decision: Focus on `/respond` command, not `/review-contract` (2026-02-05, Session 1)

**Claude's Analysis:**
- Reviewed all 5 slash commands in legal plugin
- Analyzed setup complexity vs. value for solo counsels
- Identified that most guides focus on contract review (saturated angle)
- Found that `/respond` templates are markdown files (no coding required)

**Claude's Recommendation:**
Use `/respond` command as the tutorial focus because:
1. Lower setup complexity than contract review
2. Templates are expandable markdown files (demonstrates open source)
3. DSAR responses are high-pain, high-volume for small teams
4. Differentiates from every other guide

**User Decision:**
Approved. User specifically wanted an example that "people can expand on themselves" to demonstrate open source benefits.

**Rationale:**
The open source angle is the key differentiator. `/respond` with its markdown template library best demonstrates "look inside, modify, make it yours."

**Outcome:**
Pending - drafting post now.

### Decision: Use PDPA DSAR template as the practical example (2026-02-05, Session 1)

**Claude's Analysis:**
- Plugin ships with US/EU-centric templates
- Singapore practitioners need PDPA-specific responses
- DSAR (Data Subject Access Request) is common, templatable, high-pain

**Claude's Recommendation:**
Walk through creating a PDPA-specific DSAR response template as the hands-on example.

**User Decision:**
Approved (implicit in pitch approval).

**Rationale:**
- Grounds the tutorial in Houfu's actual jurisdiction
- Shows practical value of customization
- Demonstrates gap between "install plugin" and "make it useful"

**Outcome:**
✅ Validated by all three reviewers (Session 2). PDPA direction unanimously preferred over NDA approach.

### Decision: Hybrid approach - NDA appetizer + PDPA DSAR main course (2026-02-08, Session 2)

**Claude's Analysis:**
- Draft pivoted to NDA review/triage without explicit user approval
- All three reviewers unanimously preferred PDPA DSAR direction over NDA
- Legal Tech: "NDA will always be 'another NDA guide.' PDPA would be 'the guide for Singapore practitioners.'"
- Sarah (Corporate Lawyer): PDPA saves $660-1,110/year vs NDA saves $510/year
- Wei Lin (Lawyer-Coder): PDPA creates urgency to build; NDA is "bookmark for later"
- Current draft's NDA walkthrough has strong pedagogy (clear steps, good flow)

**Claude's Recommendation:**
Full pivot to PDPA DSAR, condense NDA demo to brief appetizer or move to separate post.

**User Decision:**
Hybrid approach: "Keep the NDA review in the first part as easy to follow and easy win. Instead of the contrived NDA table customisation, we can do the PDPA DSAR in that section instead."

**Rationale:**
- NDA review demo is pedagogically strong - shows plugin working quickly
- PDPA DSAR delivers on pitch promise and unique value
- Keep market context in opening but mention PDPA DSAR early
- Structure: Easy win (NDA demo) → Unique value (PDPA customization)

**Outcome:**
Pending - revising draft now.

## WHAT CLAUDE DID (Contributions)

### Research
- Web search: Claude Code legal plugin guides, existing coverage
- Web search: Claude Cowork legal plugin configuration
- Fetched GitHub repo: anthropics/knowledge-work-plugins structure and docs
- Identified market context: Thomson Reuters -16%, legal tech selloff
- Mapped all 5 slash commands and 6 skills in legal plugin
- Found existing guides are high-level overviews, none focus on customization

### Analysis
- Compared all plugin commands for solo counsel fit
- Evaluated setup complexity vs. immediate value
- Identified `/respond` as best vehicle for open source demonstration
- Developed progressive complexity recommendation (brief → respond → triage-nda)

### Writing
- Drafted initial pitch (contract review focus)
- Revised pitch to `/respond` + open source angle
- Suggested tags from canonical registry
- Drafted initial post version (NDA review + triage table customization)

### Quality Control
- Performed authenticity check on pitch
- Validated tags against registry
- Comprehensive three-reviewer feedback (legal-tech, corporate-lawyer, lawyer-coder)
- Standalone evaluation of draft vs pitch directions
- ROI analysis and differentiation assessment

## WHAT WORKED / DIDN'T WORK

### Worked Well ✅
| What Claude Did | User Decision | Outcome |
|-----------------|---------------|---------|
| Analyzed all 5 commands | User asked which to demonstrate | Led to `/respond` selection |
| Suggested progressive approach | User wanted expandable example | Confirmed open source angle |
| Proposed PDPA template example | Approved | Grounds tutorial in real jurisdiction |

### Didn't Work ❌
| What Claude Did | Problem | Lesson |
|-----------------|---------|--------|
| Drafted post with NDA triage table customization instead of PDPA DSAR | Deviated from pitch promise; all three reviewers flagged mismatch | Always deliver on pitch contract; don't pivot without user approval |

## SESSIONS (Chronological Detail)

## Session 2: Draft Revision and Audience Feedback (2026-02-08)

### Context
User requested audience reviews after making several updates to the draft. Claude discovered the draft had pivoted from the pitch's PDPA DSAR focus to NDA review/triage focus without explicit discussion.

### What Claude Did
- **Quality Control**:
  - Read current draft and compared to pitch
  - Identified major content shift from pitch promise
  - Launched all three audience reviewers in parallel (legal-tech, corporate-lawyer, lawyer-coder)
  - Synthesized comprehensive feedback across all reviewers
  - Re-ran reviews asking reviewers to evaluate draft standalone (ignoring pitch) and compare approaches

- **Analysis**:
  - Documented unanimous verdict: pitch direction (PDPA DSAR) is superior to draft direction (NDA)
  - Extracted unique insights each reviewer caught
  - Identified ROI calculations (Sarah: PDPA saves $660-1,110/year vs NDA saves $510/year)
  - Found emotional engagement difference (Wei Lin: PDPA creates urgency, NDA is "bookmark for later")
  - Compiled differentiation analysis (Legal Tech: no PDPA guides exist, dozens of NDA guides exist)

### User Decisions
- **Decision**: Pivot to hybrid approach - keep NDA review as "easy win appetizer," replace triage table customization with PDPA DSAR as main course
- **Rationale**:
  - NDA review demo is pedagogically strong (shows plugin in action quickly)
  - PDPA DSAR delivers on pitch promise and differentiation
  - Keep market context in opening but lead with PDPA angle
  - "Easy win" then "unique value" structure works better than full pivot

### Outcomes
- ✅ All three reviewers unanimously recommended PDPA direction
- ✅ Identified hybrid structure that preserves draft's strengths while delivering pitch promise
- ✅ Clear mandate: NDA as appetizer (~200-300 words), PDPA DSAR as centerpiece (~800-1000 words)
- Next: Draft the revised post with hybrid approach

### Next Steps
- Note up the revision plan
- Draft revised post with NDA appetizer + PDPA DSAR centerpiece
- Update opening to mention PDPA DSAR angle early

## Session 3: Refinement and Final Reviewer Feedback (2026-02-08)

### Context
User made several refinements including adding Step 3 "Customise it!" section showing regulatory validation against PDPC guide and letterhead branding. Claude ran all three reviewers again to evaluate refinements.

### What Claude Did
- **Quality Control**:
  - Reviewed user's refinements (Step 3 additions, broader audience framing, MacOS specifics)
  - Identified incomplete TextEdit instruction and typo
  - Launched all three reviewers in parallel for refined version
  - Synthesized unanimous positive feedback with actionable improvements

- **Writing**:
  - Fixed typo: "Singaporen" → "Singapore"
  - Completed TextEdit instruction with Plain Text mode guidance
  - Updated time estimate: 90 min → 2-2.5 hours
  - Moved vulnerability section earlier (after "What you'll need")
  - Added concrete validation results showing PDPC guide gaps caught
  - Reframed letterhead as "Bonus: Add Your Office Branding"
  - Softened technical claim about letterhead processing
  - Updated conclusion to reference earlier skepticism

### User Decisions
- **Decision**: Apply all essential and high-value fixes from reviewer feedback
- **Rationale**: Transform from "good tutorial" to "genuinely valuable guide"

### Outcomes
- ✅ All three reviewers gave positive assessments of Step 3 additions
- ✅ Sarah: "I would actually try this now" (major improvement)
- ✅ Legal Tech: "Delivers on pitch promise effectively"
- ✅ Wei Lin: Valued meta-prompting insight but wanted vulnerability earlier (now fixed)
- ✅ All essential fixes applied
- Next: Add screenshots and prepare for publishing

## Session 4: Content Quality Audit and Final Polish (2026-02-08)

### Context
User requested comprehensive content quality audit after all refinements were complete. Screenshots were in post folder ready for insertion.

### What Claude Did
- **Quality Control**:
  - Launched content-quality-auditor agent for 5-dimension review
  - Identified 11 screenshot placeholders needing proper markdown with alt text
  - Found heading hierarchy violations, inconsistent step numbering
  - Flagged readability issues (long sentences, passive voice)
  - Identified missing transitions and undefined jargon

- **Writing**:
  - Replaced all 11 screenshot placeholders with proper Ghost markdown and descriptive alt text
  - Fixed heading hierarchy: changed "Understanding the `/respond` command" from H3 to H2
  - Standardized step numbering: "Step 3: Customise it!" → "Step 3: Validate Against Regulatory Guidance"
  - Changed "Bonus" heading from H3 to H2 for consistency
  - Added explicit file attachment instructions (3.1, 3.2, 3.3 sub-steps)
  - Defined "meta-prompting" on first use with bold emphasis
  - Shortened long sentences (line 14, 47)
  - Changed passive voice to active ("can do this by opening" → "Open")
  - Made "Take note that" more direct and active
  - Added bridging sentence "This is where solo counsels get leverage"

### Outcomes
- ✅ All critical accessibility issues fixed (screenshots with alt text)
- ✅ All important structural issues resolved (headings, numbering, transitions)
- ✅ Readability improved (shorter sentences, active voice)
- ✅ Overall quality: Strong B+ / A- → Ready for publishing
- Next: Final proofread and publish to Ghost

## Session 5: Integration with "Prompt Engineering Wrong" Post (2026-02-08)

### Context
User asked Claude to review "Lawyers Got Prompt Engineering Wrong" post to see if concepts could strengthen the legal plugin guide.

### What Claude Did
- **Research**:
  - Searched blog for prompt engineering posts
  - Read "Lawyers Got Prompt Engineering Wrong" from local repo
  - Identified key concepts: decision-making logic, vendor vs DIY trade-off, security concerns

- **Analysis**:
  - Found strong conceptual alignment between posts
  - Identified opportunity to strengthen "Real Value" section with decision-making logic framing
  - Saw opportunity to address Sarah's security concerns with vendor trade-off context

- **Writing**:
  - Rewrote "Real Value" section (now "Encoding Your Decision-Making Logic")
  - Added concrete examples of what you encoded in PDPA template
  - Introduced paradigm shift framing: "write better instructions" → "program the system"
  - Added vendor comparison (Harvey, CoCounsel, Lawgeex)
  - Expanded opening skepticism note with security guidance and vendor trade-off
  - Added "Use public documents only" warning for data sensitivity

### Outcomes
- ✅ Strengthened conceptual framing with "decision-making logic" language
- ✅ Addressed Sarah's data security concerns upfront
- ✅ Connected to broader paradigm shift narrative from prompt engineering post
- ✅ Made value proposition clearer: control vs convenience trade-off
- Next: Final proofread and publish to Ghost

## Session 6: Final Proofread and Publishing (2026-02-08)

### Context
User requested final proofread and posting to Ghost as draft.

### What Claude Did
- **Quality Control**:
  - Final proofread of complete post
  - Fixed minor double-space typo in line 295

- **Publishing**:
  - Used Ghost Admin API via publish-post.js script
  - Installed missing dependencies (dotenv, gray-matter, @tryghost/admin-api)
  - Published post with all metadata from frontmatter
  - Verified GitHub footer auto-added from github_folder field

### Outcomes
- ✅ Post published as draft to Ghost
- ✅ Post ID: 69889ecefbb6fe0001120c15
- ✅ Admin URL: https://alt-counsel.ghost.io/ghost/#/editor/post/69889ecefbb6fe0001120c15
- ✅ All screenshots, metadata, and content successfully transferred
- Next: User to review in Ghost editor and publish when ready

## Session 1: Initial Research and Pitch Development (2026-02-05)

### Context
User wants to write a how-to guide about the Claude legal plugin for Claude Cowork. Goal: practical guide for lawyers, explore whether anyone has written similar guides.

### What Claude Did
- **Research**:
  - Searched for existing Claude Code/Cowork legal guides
  - Found multiple high-level articles but no practical setup guides
  - Fetched GitHub repo structure for anthropics/knowledge-work-plugins
  - Mapped plugin architecture: commands/, skills/, .mcp.json

- **Analysis**:
  - Compared all 5 slash commands for tutorial suitability
  - Evaluated from solo counsel perspective (setup complexity, immediate value)
  - Identified gap: no guides on customization/open source angle

- **Writing**:
  - Drafted initial pitch (general "getting it to work" angle)
  - Revised pitch to focus on `/respond` + open source customization
  - Created pitch.md with metadata and outline

- **Tools**:
  - Used tag-registry skill to suggest canonical tags
  - Created post folder structure

### User Decisions
- Decision 1: Focus on `/respond` command, not `/review-contract` (the expected choice)
- Decision 2: Emphasize open source expandability as key differentiator
- Decision 3: Use PDPA DSAR template as practical example
- Decision 4: Approved pitch and tags (LegalTech, OpenSource, PDPA, Tutorial)

### Outcomes
- ✅ Pitch approved with clear differentiation from existing guides
- ✅ Open source angle provides unique value proposition
- ✅ PDPA example grounds tutorial in real jurisdiction
- Files created:
  - `/posts/legal-plugin-guide/pitch.md`
  - `/posts/legal-plugin-guide/discussion.md`

### Next Steps
- Draft the blog post content
- Run content quality audit
- Get target audience feedback
- Curate backlinks
- Publish to Ghost

## KEY RESEARCH FINDINGS

### Market Context (Feb 2026)
- Claude Cowork launched January 12, 2026
- Legal plugin released February 2, 2026
- Caused 16% drop in Thomson Reuters stock
- Legal tech Twitter divided: doomsayers vs. dismissers

### Plugin Technical Details
- GitHub: anthropics/knowledge-work-plugins
- Structure: commands/, skills/, .mcp.json
- Legal plugin connects to: Slack, Box, Egnyte, Jira, Microsoft 365
- 5 commands: /review-contract, /triage-nda, /vendor-check, /brief, /respond
- 6 skills: contract-review, nda-triage, compliance, canned-responses, legal-risk-assessment, meeting-briefing

### Existing Guides (Gaps Identified)
- Rankings.io: General Claude for lawyers (PI focus)
- SuccessKnocks: Basic document review (surface level)
- AllAboutLawyer: Overview of features (no customization)
- Medium: General introduction
- **GAP**: No practical guide on customization, playbook setup, or jurisdiction-specific templates
