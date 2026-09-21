# Discussion Notes: skills-that-travel

## AUDIT TRAIL: Key Decision Points

### Decision: The angle is "environment", not craft or refusal (2026-09-21, Session 1)

**Claude's Analysis:**
- Generated 8 angles from the opening idea, including 2 flagged as wrong (straight five-skills roundup; Cowork release announcement).
- Shortlisted: refusal-as-thesis (#2), five design decisions to steal (#1), mentoring people who out-build you (#4).
- Checked overlap against prior posts: `lawyers-not-on-each-others-code` already owns "lawyers build but not together"; `official-cat-herder` owns the lq-ai commitment. So a generic "lawyers build differently" pitch had no room.

**Claude's Recommendation:**
Refusal-as-thesis (#2) with the five design decisions as evidence.

**User Decision:**
Picked #3 (lawyers build differently than vendors), then rejected all four offered vendor-contrast options: *"Need to brainstorm a bit more. But I think it's environment, which leads into our Cowork plugin."*

**Rationale:**
Environment is the thing the Cowork port actually tested, so it connects the admiration and the release into one argument instead of two.

**Outcome:**
✅ Claude re-opened exploration with six readings of "environment" (A–F). User chose D+B (declares what it needs / leaves what you keep) **and** F+A (meets you where you already work). Thesis locked: a skill is an agreement with an environment.

### Decision: Name Jamie Tso, disclose the residency (2026-09-21, Session 1)

**Claude's Analysis:**
- `git log` on the five skills in `lq-codex-for-legal`: Jamie Tso (10 commits), loxotolegal (4), JJ (1).
- Flagged the framing risk unprompted: admiration written from inside the LQ Residency reads as a friend plugging friends unless the mentor role is disclosed early.

**Claude's Recommendation:**
Name him and disclose; Houfu has written about Jamie before (`tool-vs-infrastructure-mindset`).

**User Decision:** Name Jamie, disclose the residency.

**Outcome:** ✅ Recorded in pitch frontmatter `interrogation.framing_risk`. Disclosure is a beat-1 requirement, not a footnote.

### Decision: Testers wanted, not a launch (2026-09-21, Session 1)

**Claude's Analysis:** The repo README states v0.2.0 is pre-release and nothing has been exercised in a live Cowork tenant. A "give it a try" close the work can't cash would contradict the blog's honest-assessment position.

**User Decision:** State it plainly — no live-tenant runs, no Copilot capacity, testers are the ask.

**Outcome:** ✅ Close beat is an invitation, and the same honesty supplies the post's counter-evidence beat.

## WHAT CLAUDE DID (Contributions)

### Research
- Read the five SKILL.md files in `lq-codex-for-legal` for the environment decisions each one makes.
- Verified every number before locking the pitch: 31 skills, 3 bundles, 14 capability probes, v0.2.0 tagged 2026-09-20, `read-redline` shipping probe-gated on P3.
- Checked prior-post overlap and collected backlink slugs.

### Writing
- 8 angles, then 6 readings of "environment"; pitch.md (175-word paragraph, 57 lines).

## WHAT WORKED / DIDN'T WORK

### Worked Well ✅
| What Claude Did | User Decision | Outcome |
|---|---|---|
| Offered 8 angles including 2 self-flagged as wrong | Picked a ninth thing (environment) | Better thesis than anything on the shortlist |
| Raised the residency disclosure before being asked | Name Jamie, disclose | Framing risk settled at pitch time, not after drafting |

### Didn't Work ❌
| What Claude Did | Problem | Lesson |
|---|---|---|
| Offered four vendor-contrast options (refusal, redlines, matter data, decoration) | All four were surface symptoms; the user's real distinction was the environment underneath them | Offer the layer under the symptom — ask what the examples have in common before asking which example is right |

## SESSIONS (Chronological Detail)

## Session 1: Brainstorm and pitch (2026-09-21)

### Context
Houfu proposed a post on the five LQ plugin skills he admires, plus an invitation to try the Cowork plugins he released.

### What Claude Did
- Research: located the five skills, verified counts against `lq-plugin-cowork`, checked authorship, read prior-post pitches for overlap.
- Analysis: 8 angles → 3 shortlisted → user redirect → 6 readings of "environment" → thesis.
- Writing: `pitch.md` (title *Good Skills Know Where They Live*, budget 1800, primary audience marcus, secondary wei-lin).

### User Decisions
- Angle #3, refocused on environment (D+B and F+A).
- Name Jamie Tso; disclose the LQ Residency mentor role.
- Testers-wanted close, stated plainly.

### Outcomes
- ✅ Pitch written with verified numbers and all four interrogation questions answered.
- ⚠️ Open: the opening scene is still `[HOUFU: which room, roughly when]` — the emotional core is the user's words but lacks one concrete scene.
- Files modified: `posts/skills-that-travel/pitch.md`, `posts/skills-that-travel/discussion.md`.

### Next Steps
Get the concrete scene, then WRITE. Draft reads the Voice Guide plus 1–2 recent published posts; pre-empts the standing reviewer asks (Marcus: differentiation and jargon defined; Wei Lin: honest admission and a concrete next step).
