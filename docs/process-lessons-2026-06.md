# Process Lessons from Discussion Logs — June 2026

**Date**: 2026-06-10
**Scope**: All 24 discussion.md files, split into two passes:
- 11 posts developed after the Feb 2026 rules landed (ai-wont-replace-you through cna-ai-advice-from-lawyers) — tested whether the rules held
- The 8 largest/stalled posts the Feb review never covered (data-zeeker-sg, single-serving-bias, ai-tools-for-agents, year-in-review-2025, prompt-engineering-wrong, prompt-engineering-to-skills, contract-review-skill, redlines-top-10-percent)

Successor to `review-discussions-analysis.md` (2026-02-19), whose recommendations were institutionalized in CLAUDE.md and the getting-feedback skill.

## Part 1: Did the Feb 2026 rules hold?

| Rule | Adherence | Verdict |
|---|---|---|
| Genuine emotional experience (ask, don't invent) | ~95% | **Held.** Every recent post traces its emotional core to the user's real words. Keep doing this. |
| Verify claims before writing | 100% | **Held.** All recent posts show research → verify → caveat. |
| Canonical publish script | ~90% | Held, but **image upload is a known gap** — every post with images needed a `ghost_image_upload` MCP + temp-file-with-rewritten-paths workaround. |
| Publish last, sync once | ~85% | Mostly held. Post-scheduling Ghost edits by the user are routine and fine; the failure mode is *skipping* the final content sync. |
| Pitch is the contract | ~65% | **Leaking.** Pitches get amended retroactively after drift instead of gating it (zeeker-three-databases, ect-no-lawyers-zeeker amended 6+ times). |
| Max 2 reviewer rounds | ~60% | **Bypassed via audit hoarding** — 3-4 content-audit polish cycles before reviewers see the draft (open-claw-intro: 4+ cycles). |
| Length-audit before additive fixes | ~40% | **Most-violated rule.** Consistently run after applying fixes, as remediation (zeeker-three-databases Session 4 acknowledged the violation explicitly). |

**Fixes applied (2026-06-10)**: CLAUDE.md REVIEW phase now specifies an enforced order (pitch checkpoint → 1 audit max → reviewers → length audit → polish); getting-feedback skill and pre-review checklist updated to match.

## Part 2: New friction patterns (not covered by existing rules)

1. **Unverified pitch data** — year-in-review pitched "444 articles" (actual: 27); data-zeeker pitched "600 hours" from a LOC formula (actual: ~150 lived hours). Both forced full rewrites. *Fix applied: generate_a_pitch Step 3.5 (verify data, ask for lived numbers, mark `[UNVERIFIED]`).*
2. **The expository trap** — Claude drafts in analytical "blog voice"; the user's voice is narrative-first. ai-fragmentation lost a full draft to this. *Fix applied: WRITE phase now requires sampling 1-2 recent published posts, not just the Voice Guide.*
3. **Series over-planning** — contract-review-skill planned 5 episodes in depth, built zero; data-zeeker-sg's structure changed 4+ times across 11 sessions. *Fix applied: "Series Discipline" section in CLAUDE.md — publish Part 1 before planning Parts 2+, with descope red flags.*
4. **Late backlink curation** — links added as last-minute polish feel tacked on; reviewers repeatedly ask "isn't there a prior post on X?" *Fix applied: generate_a_pitch Step 3.7 seeds 2-3 must-link posts at pitch time.*
5. **Stale local status** — several posts published on Ghost in Oct-Nov 2025 still show `status: draft` (or no frontmatter) locally, making them look abandoned: prompt-engineering-wrong, redlines-top-10-percent, ai-tools-for-agents, prompt-engineering-to-skills. *Fix applied: CHECK phase "don't skip the final sync" rule; lint-posts surfaces missing status. Pending: run `npm run sync-ghost` for these slugs (needs Ghost access).*
6. **Operative-draft ambiguity** — ect-no-lawyers-zeeker accumulated draft.md/v2/v3/v4 and needed an explicit "draftv4 is operative" note. *Fix applied: posts/README.md standard — one main file named after the folder, git holds history.*
7. **Publishing infrastructure gaps** (open): `publish-lexical.js` has no image upload and no retry/backoff for Ghost API 418 errors. Both are repeat per-post time sinks. → Separate infra PR.
8. **Offline edits go unlogged** — user's vim/Ghost edits carry decisions (and typos) that should land in discussion.md as decision points, since they reveal voice preferences future drafts should follow. *Partially fixed via CHECK-phase guidance.*

## Part 3: What worked (keep doing)

- **Two reviewers in parallel** (Marcus + Wei Lin) beats one reviewer or all three — they surface different gaps (credibility vs. voice/intimacy).
- **Research-verify-then-draft** consistently beats draft-then-fact-check.
- **Pitch as emotional spine** (locked from the user's real moment) survives revision rounds intact.
- **Hard length targets** ("~6 min read", "1,650 words") force load-bearing decisions better than post-hoc trimming.
- **User chooses among 2-3 framing options Claude surfaces** — produces more conviction than Claude picking a frame.
- **Visuals planned in the pitch** (screenshot list, feature-image brief) prevents publish-day scrambles.

## Part 4: Agent usefulness audit (2026-06-10, second pass)

**Methodology caveat that governs this whole document:** discussion.md files are Claude's self-reports and tend to narrate feedback as valuable and process steps as justified. Judge agents by *outcomes* (did the post change, did the change stick), not by the narration. This second pass applied that lens.

### Correction to Part 1's "pitch drift" finding

Part 1 originally coded mid-draft pitch amendments as drift-discipline failures. Forensics on the actual pitch changes shows that's wrong: in the clear-cut cases the **pitch itself was defective** and amending it was correct. The real defect was upstream — nothing stress-tested the pitch before a full draft was spent on it:

| Post | Pitch defect | Catchable at pitch time by |
|---|---|---|
| single-serving-bias | Built on user's self-diagnosis ("abstraction bias") that was wrong | Probing the diagnosis ("does this actually explain the tension?") |
| year-in-review-2025 | "444 articles, gradual shift" — never queried | Running the SQL before locking the pitch |
| legal-oss-contribution | Named LegalQuants as anchor; read as an attack | "Could a named community read this as an attack?" |
| prompt-engineering-wrong | None — facts held; only tone was calibrated | N/A (good pitch) |

**Rule change applied:** the REVIEW-phase pitch checkpoint no longer forbids amendments; it requires recording *why the pitch was wrong and which interrogation question would have caught it*. generate_a_pitch gained Step 3.6 (diagnosis test, differentiation question, framing-risk question).

### Are the reviewers templated?

~70% of recorded reviewer advice is the persona's standing ask; ~20-30% is post-specific with high adoption:

| Agent | Verdict | Standing asks (frequency) | Best unique catches |
|---|---|---|---|
| Wei Lin | **Most useful, least templated** | emotional beat, next step (5/11) | "visitor in both communities" double-bind; disclosure-before-data sequencing (both restructured legal-oss-contribution) |
| Sarah Chen | Useful | costs/time (6/10), implementation reality (6/10), security, Monday-morning action | PDPA vs NDA ROI quantification ($660-1,110 vs $510/yr) justifying legal-plugin-guide's pivot; security-as-dealbreaker forcing prompt-engineering-wrong's compliance section |
| Marcus Tan | Useful, but **his best move belongs at pitch stage** | concrete examples (7/9), jargon (5/9) | "always 'another NDA guide'" differentiation catch — made post-draft when it should gate the pitch |
| content-quality-auditor | **Mostly templated (~90% mechanical)** | heading skips (8/19), repetition (9/19), alt text (7/19), long sentences (11/19), terminology (4/19) | pitch-divergence catch on legal-plugin-guide; 750-word redundant section in prompt-engineering-wrong |

**Changes applied:** lint-posts.js now checks heading skips, empty alt text, and GitHub spelling (plus the existing horizontal rules/frontmatter/image sizes), freeing the auditor for judgment calls; the auditor agent's brief now says so explicitly. CLAUDE.md's reviewer guide records the measured value per persona; WRITE phase pre-empts standing asks; getting-feedback synthesis labels feedback **[standing ask]** vs **[unique catch]**, and only unique catches justify a round 2. The labels also build a running record for re-checking whether each reviewer keeps earning its place.

### Churn check

Add-then-cut churn from reviewer advice is rarer than Part 1 implied — one clear case (prompt-engineering-wrong learning-curve detail added ~180w, user cut to ~40w). Most applied feedback sticks; rejected feedback is rejected for stated reasons. The reviewers are calibrated; the waste is in *when* they're consulted (too late for differentiation, after too many audit cycles) rather than *what* they say.

## Part 5: Stalled-post ground truth

Posts that looked abandoned in the repo were mostly published long ago and never synced:

| Post | Reality | Action |
|---|---|---|
| prompt-engineering-wrong | Published 2025-10-18, hand-edited in Ghost | Sync status + content back |
| prompt-engineering-to-skills | Published 2025-10-21 as newsletter | Sync; no separate main article needed |
| redlines-top-10-percent | Published 2025-10-27 | Sync status back |
| ai-tools-for-agents | Published 2025-11-01 | Sync status back |
| contract-review-skill | **Genuinely abandoned** — exhaustive 5-episode plan, nothing built | Archive, or descope to one skill + one build post |
| data-zeeker-sg | Parts 1-2 done; Part 3 was gated on the Nov 2025 SMU event | Confirm whether Part 3 still has an audience, else close the series consciously |
