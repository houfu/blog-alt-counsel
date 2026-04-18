---
name: Note Taking
description: Record discussions in the posts folder on an ongoing basis when requested to, or at the end of significant events, like brainstorming, generating a pitch etc
---

# Note Taking

Maintain `posts/{post}/discussion.md` — an audit trail of decisions, Claude's contributions, and outcomes. Two audiences: Claude (quick context to avoid repetition across sessions) and the user (trace why any decision was made).

**Note:** The `SessionEnd` hook at `.claude/hooks/session-wrap.sh` auto-appends a session entry and commits when a session closes with uncommitted `posts/` changes. Invoke this skill explicitly when a *major decision* is made mid-session and you want it captured in the AUDIT TRAIL (not just the session log) — or when the user asks.

## Core principle

Attribute clearly: what Claude did → what user decided → why → what happened. A session entry without attribution is narrative filler.

## File structure

```markdown
# Discussion Notes: [Project Name]

## AUDIT TRAIL: Key Decision Points
[Decisions with attribution — added as they happen]

## WHAT CLAUDE DID (Contributions)
### Research / Writing / Quality Control / Technical
[Bullet lists, updated on milestones]

## WHAT WORKED / DIDN'T WORK
### Worked Well ✅
| What Claude Did | User Decision | Outcome |
### Didn't Work ❌
| What Claude Did | Problem | Lesson |

## SESSIONS (Chronological Detail)
[Session-by-session entries — appended; oldest stays at top]
```

## Before writing

Read the existing `discussion.md` first. Extract decisions already made (don't re-debate), coverage (don't repeat), and failures (don't retry).

## Session entry template

Append at the bottom of the SESSIONS section:

```markdown
## Session N: [Short Title] (YYYY-MM-DD)

### Context
[Why this session happened — 1–2 sentences]

### What Claude Did
- Research: [what]
- Analysis: [what]
- Writing: [what drafted/revised]
- Tools: [scripts/automation]

### User Decisions
- [What was decided and why]

### Outcomes
- ✅ Worked: [successes]
- ❌ Didn't: [failures]
- Files modified: [list]

### Next Steps
[What comes next]
```

Keep under ~40 lines. Terse beats thorough — the audit trail is the load-bearing record.

## Decision entry template

Use for *significant* decisions only (framing, scope, major revisions). Add to the AUDIT TRAIL section at the top:

```markdown
### Decision: [Title] (YYYY-MM-DD, Session N)

**Claude's Analysis:**
- [Research/analysis performed; options presented]

**Claude's Recommendation:**
[What Claude suggested and why]

**User Decision:**
[What the user actually decided — may differ from recommendation]

**Rationale:**
[Why the user made this choice]

**Outcome:**
✅/❌ [What happened as a result]
```

If Claude had no recommendation (presented options equally), state that explicitly. Do not invent one.

## When to invoke this skill explicitly

The SessionEnd hook handles routine session logging. Use `/note-taking` for:
- Major decisions that need to land in AUDIT TRAIL (not just SESSIONS)
- Series milestones (a part published, direction pivot)
- When `discussion.md` doesn't exist yet and you're creating it from scratch
- When the user asks

Don't use this skill to re-record what the hook already committed. Check `git log -- posts/{post}/discussion.md` first.

## For series work

Add these sections when working on Part N of a series:

```markdown
## WHAT'S BEEN COVERED
### Part 1 established: [bullets]
### Part 2 established: [bullets]

## SERIES STATE
- Part 1: PUBLISHED (date)
- Part 2: DRAFT
- Part 3: KIV

## SERIES LESSONS
- ✅ [What worked across parts]
- ❌ [What to avoid repeating]
```

## Good vs. bad

**Good:** "Decision: use '150+ hours' (Session 2). Claude found 79 commits across 36 days → revised from 600 to 150. User approved. Outcome: ✅ more credible."

**Bad:** "We decided to use 150 hours instead of 600." (Missing: what Claude did, why, what happened.)
