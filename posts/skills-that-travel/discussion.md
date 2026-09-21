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

### Decision: Emotional core moved from watching to first-hand use (2026-09-21, Session 1)

**Claude's Analysis:**
Step 1.7 asks for the genuine experience. Claude asked it as a multiple-choice question; Houfu picked "watching them get built" from the offered options. Two exchanges later, unprompted: *"I have tried it to be honest."* He had run the skills himself — `read-redline` and the companion-shaped ones.

**User Decision:** The opening is first-hand use, not spectating.

**Rationale:** He ran them; the admiration is a user's, and that is stronger ground than a spectator's.

**Outcome:**
✅ pitch.md emotional core amended in place before drafting, so no draft was lost.
⚠️ **Lesson for the pitch workflow:** the vulnerability question should be asked open-ended. Offering four plausible options pulled him toward the most plausible one rather than the true one. Step 1.7 says "ask ONE question" — it does not say "offer options", and options are the failure mode here.

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

## Session 1: Brainstorm, pitch and first draft (2026-09-21)

### Context
Houfu proposed a post on the five LQ plugin skills he admires, plus an invitation to try the Cowork plugins he released.

### What Claude Did
- Research: located the five skills, verified counts against `lq-plugin-cowork`, checked authorship, read prior-post pitches for overlap, searched the disk for artifacts from his runs (none found).
- Analysis: 8 angles → 3 shortlisted → user redirect → 6 readings of "environment" → thesis.
- Writing: `pitch.md` (title *Good Skills Know Where They Live*, budget 1800, marcus primary / wei-lin secondary), then the first draft at 1,445 words.
- Voice prep: Voice Guide Part 0/1/4 plus openings of `official-cat-herder` and `rugpulled-by-cowork`.

### User Decisions
- Angle #3, refocused on environment (D+B and F+A).
- Name Jamie Tso; disclose the LQ Residency mentor role.
- Testers-wanted close, stated plainly.
- Post lives on its own branch (`skills-that-travel`, off `main`), not on `techlawfest-2026` — avoids a second unrelated post in that PR.

### Outcomes
- ✅ Draft written, lint clean (0 errors, 0 warnings after `--fix` appended `?ref=` to two backlinks).
- ✅ Beat 4 keeps the counter-evidence: 14 of 31 skills re-scoped at a risk tier, `read-redline` probe-gated on P3. The thesis is argued and then strained on purpose.
- ⚠️ Draft is 1,445 of 1,800 words. The gap is where Houfu's lived facts go — two `[HOUFU: …]` markers, deliberately not invented: the opening scene, and what `read-redline` caught on his run.
- 🔧 `thesis_keywords` swapped "risk tier" → "artifact": the linter flagged risk tier appearing once at 70% depth, and on inspection it is evidence in one beat, not what the post is about. "Artifact" is the load-bearing term.
- 🔍 Claude searched the local disk for artifacts from his skill runs and found none; Houfu: *"they're on my work computer"*. Turned into material rather than a dead end — the draft now names the managed work machine as the real environment (no installs, output must open for colleagues), and the solo-counsel beat gained the same concrete frame. Draft 1,445 → 1,533 words.
- Files modified: `pitch.md`, `skills-that-travel.md`, `discussion.md`.

### Next Steps
Houfu fills the two markers. Then REVIEW in order: `npm run lint-posts`, one audit round (audit-substance + audit-tone in a single message), then all three reviewers per his standing preference, then length audit before applying additive fixes, backlinks, tags.
