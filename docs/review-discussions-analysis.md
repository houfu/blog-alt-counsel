# Review of 5 Most Recent Discussion.md Files

**Date**: 2026-02-19
**Posts reviewed** (by most recent git commit):
1. connect-codraft-article (Feb 19) - 5 sessions
2. singapore-budget-ai-review (Feb 14) - 5 sessions
3. legal-plugin-guide (Feb 8) - 6 sessions
4. legal-ai-autonomy (Jan 21) - 5 sessions
5. jamie-tso-vibe-coding (Jan 15) - 6 sessions

## Key Findings

### 1. Claude Manufactures Vulnerability That Gets Rejected (4 of 5 posts)

In 4 of 5 posts, Claude suggested an emotional hook or vulnerability that the user rejected for something more authentic:

- **connect-codraft**: Claude suggested "overbuilding v0" vulnerability. User provided: "I underestimated Cowork — thought it was some poor man's Claude Code."
- **singapore-budget**: Claude framed vulnerability as external competition. User redirected to PM's own displacement warning.
- **legal-ai-autonomy**: Reviewers wanted "concrete workflow example." User found: "Fear forced me to compromise." Took 3 review rounds.
- **jamie-tso**: Claude framed as admiration. User's code investigation produced the critical realism shift.

**Recommendation**: Ask the user for their genuine emotional experience early in pitch phase. Stop constructing narratives around invented hooks.

### 2. Pitch-to-Draft Drift

- **legal-plugin-guide**: Approved pitch = PDPA DSAR. Draft = NDA review/triage. All three reviewers flagged it.
- **connect-codraft**: Used generic contract intake example (CoDraft files not available). User rewrote entirely with real files.

**Recommendation**: Add mandatory pitch compliance check before drafting. Compare outline to pitch point-by-point.

### 3. Reviewer Round Inflation

| Post | Rounds | Total Reviews |
|------|--------|---------------|
| connect-codraft | 3 | ~9 |
| legal-ai-autonomy | 3 | ~9 |
| singapore-budget | 1 | 3 |
| legal-plugin-guide | 2 | 6 |
| jamie-tso | 1 | 2 |

In legal-ai-autonomy, 3 rounds of reviews couldn't solve the core issue. A brainstorming session did. Reviewer patterns are also predictable: Sarah wants costs/practical steps, Wei Lin wants vulnerability, Legal Tech wants technical depth.

**Recommendation**: Cap at 2 reviewer rounds. If framing issues persist, switch to brainstorming with the user.

### 4. Publishing Script Fragmentation

Each post creates its own publishing script:
- jamie-tso: `publish-post.js` (HTML) then `post-to-ghost.js` (lexical)
- singapore-budget: `scripts/publish-lexical.js`
- connect-codraft: another `post-to-ghost.js`

Each rediscovers the same issues (tables, bookmark cards, GitHub footer).

**Recommendation**: Consolidate to one canonical script at `scripts/publish-lexical.js`. Stop creating per-post scripts.

### 5. Ghost Sync Is a Predictable Final Session

Every post: publish to Ghost -> user makes substantial edits in Ghost -> final session syncs back to markdown. This is significant overhead.

**Recommendation**: Either automate Ghost-to-markdown sync as a script, or accept Ghost as source of truth post-publish.

### 6. Claims and Assumptions Need Earlier Verification

- singapore-budget: Assumed a "Budget 2025" post existed (false)
- singapore-budget: "Declining digital adoption" claim was wrong
- connect-codraft: Overstated CoDraft as replicating docassemble's "whole pipeline"
- jamie-tso: "4 tools in 2 years" was actually "4 tools in 2-3 months"

**Recommendation**: Verify claims before writing them into drafts. Use searching_the_blog skill to check post history. Front-load verification.

### 7. User's Revision Sessions Are the Strongest Content

Best content consistently comes from user's own revisions:
- connect-codraft Session 3: "This session's substantive work was done by the user, not Claude"
- jamie-tso Session 3: User's code investigation produced critical realism shift
- legal-ai-autonomy Session 3: User surfaced "fear" framing

**Recommendation**: Claude's highest-value contributions are research, reviewer synthesis, quality audits, and publishing infrastructure. For emotional core and framing, give the user space to revise first.

## Summary of Recommendations

1. **Ask, don't invent** - Stop manufacturing vulnerability hooks; ask user for real experience early
2. **Pitch compliance check** - Compare draft outline to approved pitch before writing
3. **Cap reviewer rounds at 2** - Switch to brainstorming if framing issues persist
4. **One publishing script** - Consolidate into scripts/publish-lexical.js
5. **Automate Ghost sync** - Script the Ghost-to-markdown sync
6. **Verify before writing** - Check blog history, source data, scope claims before drafting
7. **Let the user lead on framing** - Focus Claude on research, synthesis, auditing, infrastructure
