# Workflow audit: model-agnostic redesign proposal (2026-08-04)

Three parallel deep-dive audits (skills/commands, agent definitions, scripts/hooks) evaluated
the content workflow against the behavioral profile of the newest Claude models (Opus 5 /
Fable 5) and Houfu's three design principles. This document is the merged, deconflicted
proposal. Status: **awaiting Houfu's approval — nothing applied yet.**

## The three principles (Houfu, 2026-08-04)

- **P1 — Pitch as length-gated spine.** A pitch is one paragraph under 200 words. It gates the
  article's scope AND length. The model judges every change — including reviewer suggestions —
  as in-scope or out-of-scope against the pitch.
- **P2 — Go big and go slow.** Expansive at brainstorming, research, and review-comment
  generation (within limits); constrained and budgeted at drafting.
- **P3 — Deterministic paths and scripts** over prose rules. Repo evidence: prose-only rules
  held 40–60% of the time; mechanical hooks held.

## The headline findings

1. **Nothing in the repo counts words or holds a machine-readable pitch contract.** The only
   length signal anywhere is a floor ("9 minutes reading time or more"). The current post
   shipped 27.5% over its (prose-only) budget and the overrun was "flagged, not enforced" in
   the same session it was written. Only 1 of 27 pitch.md files has frontmatter; the current
   one is 8,078 words — 40× the stated 200-word limit — because superseded versions stack.
2. **Reviewers filter their own findings at generation time.** All three reviewer agents carry
   "never create guilt / don't wish-list / frame as Consider-X" blocks that new models follow
   literally, suppressing recall. Control-group evidence: the best review round on record
   (2026-07-30) ran the reviewers as bare persona files — zero softening scaffolding — because
   the agent types failed to resolve. The agent files were bypassed and the review got better.
3. **The audit fan-out is legacy verification scaffolding.** 5 specialists + 1 orchestrator,
   with ~90% of historical findings now covered by lint-posts.js. Two specialist prompts
   contain shell/regex instructions that cannot execute (no Bash grant; broken BRE) and have
   silently returned nothing.
4. **Model pins contradict model-agnosticism.** Every reviewer is pinned `model: sonnet` —
   the highest-judgment step in the pipeline is permanently capped at 2026's mid-tier even
   when the session runs Fable/Opus 5.
5. **Several mechanical gates have holes**: the publish gate only watches Bash (ghst MCP
   publishing bypasses it entirely); the reviewer-memory gate is bypassed by persona-fallback
   spawns; `?ref=` on internal links runs at 12% adherence; `<bookmark>` tags survive in 4
   published posts' source.

## Part 1 — The P1 mechanism: pitch contract + budget gates

### 1a. pitch.md gets frontmatter (machine-readable contract)

```yaml
---
word_budget: 1900          # required for new posts; prose words of the main file
budget_tolerance: 10       # optional %, default 10
thesis_keywords: [documentation, irreversibility]   # 2-4 terms the post must be about
protected_lines:
  - "This isn't a success story, and I'm writing it anyway."
section_budgets: {}        # optional, per-H2-slug word allocations
interrogation: {diagnosis: "...", differentiation: "...", framing_risk: "...", subject: "..."}
must_link: [lawyers-not-on-each-others-code]
---
```

### 1b. pitch.md gets a fixed body shape

- Exactly one `## Pitch` section: **one paragraph, ≤200 words** (lint-checked).
- Required top section: `## Original framing (verbatim, never edited)` — the user's opening
  message, so drift can be checked against intent rather than against the previous pitch
  version (drift is cumulative; each version looks reasonable next to the one before).
- One-line fields: Title / Thesis (one sentence) / Spine (one sentence, distinct from thesis) /
  Emotional core (user's words) / Beats (3–7 bullets with word allocations summing to budget) /
  **Out of scope** (named cuts — reviewer suggestions mapping here are declined by default) /
  Prior work / Tags.
- Superseded versions are **deleted, not stacked** — git is the audit trail; discussion.md
  records why the pitch changed. (Lint warns when pitch.md exceeds ~2,500 words total.)
- Budget defaults: newsletters 900–1,200; blog posts 1,600–2,000, upper number is a CAP.
  Raising a budget is a deliberate act recorded in pitch.md frontmatter + discussion.md.
- **Migration rule:** contract checks apply only to pitches with frontmatter or posts still in
  draft. The 26 legacy pitches are skipped until touched. No flag day.

### 1c. Lint gates (new checks in scripts/lint-posts.js, on a shared scripts/lib/wordcount.js)

| Gate | Trigger | Severity |
|---|---|---|
| **Draft budget** | draft > budget+10% → warn; > budget+25% → **error** (fails CI, blocks publish via existing pre-publish-gate; surfaces live while drafting via existing post-edit-lint) | warn/error |
| **Pitch contract** | `## Pitch` missing, >200 words, >1 paragraph, no `word_budget`, file bloat | warn (error in --strict) |
| **Thesis presence** | a `thesis_keywords` term absent from the draft → **error**; <2 occurrences or first occurrence past 50% depth → warn (mechanizes the "steward once at 92% depth" diagnosis) | error/warn |
| **Protected lines** | a `protected_lines` string missing from the draft → **error** ("survives all cuts, or the pitch gets amended") | error |
| Section budgets | per-H2 overage report when `section_budgets` declared | advisory |

The word-count algorithm was calibrated against the failure log's hand counts: 2,423 vs 2,417
(0.25% drift) — safe to gate on.

### 1d. Scope judgment at synthesis (prompt-side half of P1)

Reviewer output tags every suggestion `SCOPE: IN | OUT` judged against pitch.md. The
getting-feedback synthesis step then applies the decision rule — remembering that reviewers
are constituencies, so the synthesis's first job is reporting **whether the post serves its
declared audience**, and only then processing suggestions:

- **Verdicts first.** Report each reviewer's serves-me verdict before any suggestion. A post
  that fails its `primary_audience`'s verdict has a framing problem, not a fixes problem —
  that goes to Houfu, not into edits.
- **Conflicts are presented, never averaged.** When constituencies want opposite things
  (Sarah wants steps, Wei Lin wants the mess kept), that is a "who is this post for"
  decision — Houfu's call, and often his "neither is wrong" material. Splitting the
  difference serves nobody.
- `IN` + unique catch → apply, weighting the primary audience's wants over secondary ones.
  `IN` + standing ask → batch-apply; never justifies a round 2.
- `OUT` → declined by default, presented in one collapsed list headed "Beyond the pitch —
  follow-up post material?" If an OUT want is genuinely better than what the pitch promised,
  that is a **pitch amendment** (REVIEW step 1), not a draft edit.
- Pitch silent → one-line scope question to Houfu.

## Part 2 — The P2 rebalance: go big / go slow per phase

| Phase | Direction | Change |
|---|---|---|
| brainstorming | **BIG** | "Propose 2-3 approaches" → generate 5–8 genuinely different angles (incl. 2 you think are wrong) before narrowing to 2–3. "Apply YAGNI ruthlessly" → "Generate generously, select ruthlessly — YAGNI applies to what survives the shortlist, not what you put on the table." |
| blog-research | **BIG in, SLOW out** | Uncap searches ("a thin evidence base costs a rewrite; an extra search costs a minute"); drop the brief-approval block. The cap moves to output: **max 3 findings may change the pitch's beats per session**; the rest land in research.md under "Available, not used." New step: **read the artifact, not the log** — when a chat message produced a design doc/ADR/commit, cite the artifact (the v6 failure). |
| review generation | **BIG** | Delete every generation-time suppressor: "Be gentle and polite" (feedback.md, final_draft.md), "Never create guilt," "Frame as Consider-X," "don't wish-list," and the memory files' "only raise a standing ask if the draft genuinely failed — don't elaborate." Replace with **honest, unfiltered reader reaction**: report every desire met or unmet, every want, plainly — do not perform satisfaction; the synthesis step filters. Every reviewer supplies **at least one CUT** (or justifies "fighting weight"). See "Reviewer role and output contract" below — the role is audience representative, not auditor. |
| review application | **SLOW** | Five synthesis gates, in order: collect all → scope gate (1d) → length gate (sum the ±N deltas; net >+10% → apply CUTs first) → template gate (standing asks batch-applied) → delivery gate (soften once, here, for Houfu — "the filter is in how you say it, never in what you found"). |
| pitch + drafting | **SLOW** | Part 1's contract and lint gates; blocker triage (Part 3c); 4th interrogation question (Part 3b). |
| note-taking | **SLOW** | One entry per session (update, don't append "(cont. N)" — eight compliant sub-entries made a non-compliant 369-line file); compress past ~250 lines; new section: **discussion.md is public** (posts/ ships to GitHub — never record names/private content the user hasn't agreed to publish). |

**Atomicity warning:** the "report everything" change and the synthesis filter must land
together. Removing the brakes without installing the catch reproduces the additive-churn
failure P2 exists to prevent.

### Reviewer role and output contract (replaces Essential/High-Value/Optional in all three agents)

**Role statement (Houfu, 2026-08-04): reviewers are NOT a secondary audit.** Each reviewer
is one of the blog's three chosen constituencies, and the review answers one question: *did
this post serve you — your desires, constraints, and preferences?* Sometimes all three can be
pleased at once; sometimes not, and knowing who a post leaves cold is precisely the signal.
Ideas and suggestions are a **bonus**, not the job. Fact-finding belongs to audit-substance
and blog-research, never to reviewers (standing memory rule, reaffirmed).

Output shape, in this order:

1. **Reader response — the product.** In persona voice: would you read past the first
   paragraph, finish it, save it, share it? What landed; what left you cold. Verdict:
   *serves me / partly / not really*, and why.
2. **Desires met and unmet**, judged against what the pitch promised YOUR constituency.
   Report unmet desires plainly — do not perform satisfaction, and do not withhold a want
   because the author may not be able to meet it (tag it AUTHOR-INPUT-NEEDED instead). The
   synthesis step filters; a reaction filtered here is lost for good.
3. **Ideas — the bonus.** Flat list: `[SCOPE: IN|OUT] [WISH|STANDING|CUT|KEEP] (±N words)`,
   with at least one CUT (or "draft is at fighting weight," justified in a sentence), then
   `TOTAL DELTA` and `IF ONE THING` closing lines. A factual problem you happen to notice
   may be flagged, but hunting them is not your role.
4. MEMORY_UPDATE block (unchanged).

Scope and desire become independent fields — today a strong out-of-scope want has nowhere to
go except "Optional," where it dies silently instead of becoming a follow-up post.

### Constituency coverage over time (new, from the role statement)

Houfu's aim is that no constituency is neglected for too long — reviewer selection is
portfolio balance, not only per-post fit. Light mechanism: `primary_audience:` in post
frontmatter (set at pitch time; values wei-lin / sarah / marcus), plus a small script or
verify.sh line reporting each constituency's last-served post and date. generate_a_pitch
surfaces the report during topic/pitch development so a neglected audience can tip a close
call. Survives sync-from-ghost (unknown frontmatter keys are preserved).

## Part 3 — Skill/prompt repairs (beyond the P1/P2 rewrites)

- **a. `/feedback` routing — driven by the pitch, not judged per run.** The pitch declares
  `primary_audience:` (and optional secondary) at pitch time; choosing reviewers IS choosing
  who the post is for, so it belongs with the scope decisions, not at review time. Bare
  `/feedback` reads the pitch frontmatter and runs the declared audience(s) — deterministic
  (P3), no content-type judgment call per run. `/feedback all` forces three (the
  broad-appeal case); `/feedback wei-lin|marcus|sarah` forces one. Secondary-audience
  reviewers may be added when their constituency hasn't been served recently (coverage
  report, above). Report template becomes per-reviewer-run, not fixed A/B/C blocks.
- **b. 4th pitch-interrogation question — "Whose subject is this?"** Check the pitch against
  the verbatim original framing message (not the previous version). Evidence: the same post
  drifted subject twice (v4 field-report-as-subject; v6 tool-as-protagonist). Plus preamble:
  "Interrogate the spine, not the beats — a wrong spine produces a draft that is internally
  perfect and about the wrong thing."
- **c. Blocker triage (new generate_a_pitch Step 3.8).** Before presenting an open question:
  (a) answerable from data? answer it; (b) better as stated uncertainty in the draft? write it;
  (c) publish-gate rather than draft-gate? defer it. Only lived personal facts genuinely block
  (mark `[HOUFU: …]`). Cap: 3 open questions per checkpoint. Evidence: 7 invented blockers,
  none real, twice in one session.
- **d. Todo scaffolding.** "Comprehensive todo list" → five phase-level todos (PITCH, WRITE,
  REVIEW, POST, CHECK); expand a phase only on reaching it.
- **e. Marcus's verification rule.** Resolve the contradiction between his file ("WebFetch
  primary sources") and his memory (Houfu: reviewers are NOT fact-checkers) with a narrow
  trigger: verify only (1) claims about a third party's conduct/policy, (2) differentiation
  claims about the outside world, (3) bolded/heading/excerpt numbers. Everything else: react
  as a reader.
- **f. Voice-check dedup.** Delete the duplicated Voice & Style blocks from Sarah's and
  Marcus's files (audit-tone owns voice; runs first). Tell: the one reviewer with no voice
  block (Wei Lin) has the highest unique-catch rate.
- **g. backlink_curating**: each bookmark card costs ~30–50 words against the budget; if at
  or over budget, propose which text the links replace.
- **h. Clean already:** tag-registry and using-ghost-admin-api need no changes — they are the
  model (deterministic checklists, explicit caps, decision trees).

## Part 4 — Right-sized audit fan-out (5 agents + orchestrator → 2 agents + linter)

- **Delete** audit-accessibility and audit-readability; port their real checks into
  lint-posts.js (`checkProseMechanics`: bad link text, bare URLs, unlabeled code fences,
  malformed tables; informational sentence/paragraph metrics). They were ~90% mechanical, and
  their prompt-embedded shell recipes never executed.
- **Merge** audit-flow + audit-structure → one `audit-substance` agent (progression,
  sequencing, repetition, example sufficiency, heading accuracy, unsupported claims). Remove
  its pitch-compliance section — pitch-drift detection has ONE owner: the pre-review
  checklist (M5 gate below).
- **Keep** audit-tone, trimmed: ~120 checkboxes → the 6 Houfu-voice judgment calls a script
  can't make; cliché/AI-slop wordlists move to lint (`checkBannedPhrases`); same flat output
  contract as reviewers.
- **Delete** content-quality-auditor. With a 2-agent fan-out there is nothing to orchestrate;
  getting-feedback launches both directly in one message.

### Model routing (revised 2026-08-04 per Houfu: budget Fable/Opus use; latency matters)

Model-agnostic here means every pin is a **deliberate, documented trade-off re-examined when
models change** — not "everything on the best model." The budgeting levers, in order of
impact: (1) the P3 gates themselves — every rewrite prevented is the largest Fable saving
available (the failure log's cost was two full drafts and seven pitch versions, not reviewer
tokens); (2) fewer spawns (audit fan-out 6 → 2) and capped rounds; (3) model tier per agent.
Note the synthesis/scope-filter step runs in the main session, so it gets the top model for
free — exactly where P1's judgment lives.

| Agent | Model | Why |
|---|---|---|
| lawyer-coder-reviewer (Wei Lin) | `inherit` | Highest measured unique-catch rate; judgment-heavy; usually run alone so cost is bounded |
| legal-tech-blog-reviewer (Marcus) | `sonnet` (keep pin, commented) | Best catches are verification (WebSearch, primary sources) — tool-use Sonnet handles; ~70% of output is templated regardless of model |
| inhouse-lawyer-reviewer (Sarah) | `sonnet` (keep pin, commented) | Best catch was pricing arithmetic + persona reaction; same reasoning |
| audit-substance (merged) | `sonnet` | Trimmed scope; fast first pass; review accuracy holds at lower tiers/effort per the Opus 5 guide |
| audit-tone | `haiku` or `sonnet` | After trim it is pattern-matching against a written guide |

CLAUDE.md note: every `model:` pin carries a one-line comment stating the trade-off. When a
new model generation lands, re-run the sweep (the Opus 5 guide's own advice) instead of
carrying pins forward untested. The known cost of the Sonnet pins: some catches a bigger
model would make are missed — accepted, with Wei Lin on the strong model as the hedge.

## Part 5 — The P3 enforcement layer (new mechanisms)

### 5a. Shared foundation
- `scripts/lib/wordcount.js` — proseWords / sectionWords / firstOccurrenceDepth (calibrated).
- `scripts/lib/postfile.js` — extract findMainFile(); three hooks currently re-derive it with
  three different regexes.
- `posts/<folder>/.workflow.json` — **tracked** (rounds span sessions; .claude/state is
  gitignored), machine-written via `scripts/workflow-state.js` (checkpoint / length-audit /
  override / show). Records pitch checkpoints, audit/review rounds keyed by draft-body sha,
  length audits, overrides with reasons.

### 5b. `workflow-gate.js` (new PreToolUse(Task) hook; retires reviewer-memory-gate.js)
- **Round caps, counted by the hook on spawn** (the model can't forget to increment):
  max 1 audit round, max 2 reviewer rounds per draft. Round boundary = draft sha changed —
  parallel fan-out shares one sha (one round); audit-hoarding polish cycles get distinct shas
  and are denied at the cap. Override only via the CLI with a recorded reason (same trust
  model as SKIP_SECRET_SCAN=1; auditable, not airtight).
- **Pitch-checkpoint precondition:** reviewer spawns denied until a checkpoint is recorded for
  the *current* draft sha + pitch sha (self-invalidates when either file changes). Turns
  "Houfu discovers drift reading cold" into "checked before any reviewer spawns."
- **Persona-fallback detector:** general-purpose spawn with a docs/personas/ brief = the
  2026-07-30 degraded mode. Deny once with instructions (check /agents, pass the memory file,
  add ACKNOWLEDGED-FALLBACK to proceed); fallback spawns come under the same memory + round
  rules that currently miss them entirely.
- Memory check tightened: require the specific agent's memory filename, not the bare substring.

### 5c. Length-audit-first (advisory, in post-edit-lint.js)
Warn when the draft grows >10% past the last review round's word count with no length audit
recorded. Advisory on purpose — blocking mid-revision edits would get the hook disabled; the
add-then-cut path instead terminates at M-budget's hard 25% publish block.

### 5d. Cheap wins with measured violation rates (do first)
- **`<bookmark>` tag lint** — error on draft/scheduled (documented publish defect; still in 4
  published posts' source).
- **`?ref=` on internal links** — warn + `--fix` autofix (22 of 25 links noncompliant; a
  memory rule at 12% adherence is the definition of a rule that should be a script).
- **post_id write-back** in publish-lexical.js on create + lint warning when
  published/scheduled without post_id (the second-Ghost-post near-miss). Infra branch.

### 5e. Existing-hook repairs (ranked)
1. **pre-publish-gate only watches Bash** — ghst MCP publishing (`ghost_post_create/update/
   publish/schedule`) bypasses the lint gate entirely. Add MCP matchers.
2. **stop-note-check misses committed work** (exits early on clean porcelain — precisely a
   well-run session); reuse session-wrap's commits-since-session-start detection.
3. **session-wrap macOS bugs**: GNU `date -d` and `sha1sum` don't exist on darwin (both fail
   silent); `git add -- posts/<folder>` can sweep unrelated in-flight changes into the notes
   commit.
4. **Tag lint is a substring match** against tags.md prose — parse the canonical list, match
   exactly.
5. **verify.sh additions**: hook-wiring self-check (settings.json commands resolve, .sh files
   parse); agent-reference cross-check (names referenced in CLAUDE.md/skills/commands resolve
   to .claude/agents files); strict-lint draft posts in CI.

### 5f. Stays prose, deliberately
"Read the artifact, not the log," "test the diagnosis," and "could a named person read this
as an attack" are judgments about whether you read the right thing — not mechanizable. The
`interrogation:` frontmatter block forces them to be answered on the record (lint warns when
empty); that checks the ritual happened, not that the answers were good. Fine trade.

## Part 6 — Voice guide review: why drift is widening

Observed (Houfu, 2026-08-04): agent drafting voice varies more post-to-post — "the post of
the day." Reviewed `/docs/Houfu_Voice_Guide.md` (450 lines, last updated January 2026)
against the drift.

**Workstream 0 — the edit corpus is mined (2026-08-04, results in
`voice-edit-corpus-2026-08.md`).** Per Houfu's direction, a dedicated agent mined his hand
edits — prioritizing final pre-publication Ghost edits — from discussion.md logs, git sync
commits, and live-Ghost-vs-local diffs. Results: **13 derived rules** (6 contradicting the
current guide, 2 filling gaps it lacks — humour and third-party fairness), an edit-location
heatmap (openings and closes are the heaviest-edited zones — exactly where the guide is most
prescriptive: **miscalibrated, not underspecified**), and the finding that the guide was
calibrated on the blog's first two posts, from the one period when his edits were additive
rather than cutting. Canonical corpus identified (my-voice-worked / cna-ai-advice /
cowork-rugpull, plus the raw `73f7805` commit). The guide rewrite in Phase 5 applies those
rules; the four structural causes below still govern the mechanism design.

Four structural causes of the drift, each with a fix:

1. **The guide defines moves, not dosage.** Nine voice patterns, no per-post selection rule.
   New models execute instructions at full strength, so a session either applies everything
   (pastiche — every opening a manufactured feeling, "neither is wrong" forced onto topics
   with no genuine binary) or applies whatever the material happens to invite (variance).
   *Fix:* a dosage preamble ("patterns are a palette, not a checklist — pick the 2–3 this
   material genuinely supports; a post that uses all nine reads as parody") plus a per-post
   **voice contract in pitch frontmatter**: `voice: {lane: learning-in-public, moves:
   [neither-is-wrong, specific-numbers]}` — chosen at pitch time, checked by audit-tone.
   Same P1 logic as the word budget: a scoped spine beats a global checklist.
2. **The exemplar corpus is frozen while the live voice moves.** All example quotes date
   from 2025–Jan 2026. Houfu's post-publish Ghost edits are documented as revealing voice
   preferences (CLAUDE.md CHECK step even mandates logging them) — but nothing feeds them
   back into the guide, so the guide and the live voice diverge and sessions vary by which
   target they weight. *Fix:* the guide names **3 canonical current posts** as the reference
   corpus, refreshed at final-sync time; notable Ghost-edit voice decisions get appended to
   a dated **"Living addendum"** changelog section in the guide. Closes a feedback loop the
   repo already half-built.
3. **Register capture by source material.** Data-heavy research produces analytical drafts
   (documented: ai-fragmentation lost a full draft to expository "blog voice";
   legal-oss-maintainer draft 1's 643 tool-protagonist words). The counter-rule — "read 1-2
   recent published posts before drafting" — is prose with unknown adherence. *Fix:* the
   WRITE step records one line in discussion.md: "voice reference: <post> — modeled its
   <quality>." Cheap, checkable after the fact, and forces the sampling to actually happen.
4. **The guide's structural gap is narrative pacing.** It calibrates sentences, paragraphs,
   and patterns but says nothing about story-first structure — precisely the recurring
   failure CLAUDE.md names. *Fix:* new Part 2.5 on narrative pacing: scene before analysis;
   one narrative spine per post; analysis arrives as the narrator's realization, not as
   sections of argument; data appears when the story needs it, not when the research found it.

**Mechanical floor (P3):** the guide's own numbers become advisory lint metrics — lists per
1,000 words (guide: ~3), paragraph sentence counts (2–5), presence of single-sentence punch
paragraphs, emoji-in-body ban. Frees audit-tone's judgment for what scripts can't measure.

## Expected effect on the work product

Predicted with confidence: **fewer wrong-subject drafts** (the most expensive documented
failure gets three independent detectors: verbatim original framing, the "whose subject is
this" question, thesis-keyword depth lint); **shorter, denser posts** (budget gate at draft
birth; reviewers must supply cuts, so revision tightens rather than inflates — which serves
the voice guide's preference for punch); **sharper reviews in fewer rounds** (report-
everything raises recall; scope-tagging stops out-of-scope catches derailing drafts, and the
"beyond the pitch" list becomes a standing pipeline of follow-up post ideas).

Known costs, accepted: longer raw reviewer output (Houfu reads the synthesis, not the raw
reports); occasional friction when the 25% budget error blocks a legitimately-better long
draft (escape = one deliberate budget amendment); thesis-keyword warnings will sometimes nag
on synonyms (only total absence errors); Sonnet-pinned reviewers will miss some catches a
bigger model would make (hedged by Wei Lin on the strong model).

Net: roughly the posts Houfu would write on his best day, with about one fewer full-draft
rewrite per difficult post, and Fable spend concentrated where his judgment operates — pitch
interrogation, drafting, synthesis.

## Build order

| Phase | Contents | Branch |
|---|---|---|
| 1. Foundation + cheap wins | wordcount/postfile libs; bookmark, ?ref (+--fix), banned-phrases lint; tag-lint exact match | infra |
| 2. P1 spine | pitch frontmatter schema + template in generate_a_pitch; budget/pitch-contract/thesis/protected-line lint gates | infra (scripts) + prompts |
| 3. P2 rebalance (atomic) | reviewer "report everything" + output contract + synthesis gates + /feedback routing + brainstorming/research rewrites | prompts |
| 4. Fan-out + routing | delete 3 audit files + orchestrator, create audit-substance, trim audit-tone, model: inherit | prompts |
| 5. Voice recalibration | corpus mined (done — voice-edit-corpus-2026-08.md) → rewrite guide on the 13 rules: fix the 6 contradictions, add humour + fairness sections, dosage preamble, Living addendum seeded from the catalog, narrative-pacing section, canonical corpus named (pull my-voice-worked + three-years live text into repo); voice contract field in pitch frontmatter; voice metrics + R2 bookmark-lead-in check to lint | prompts/docs |
| 6. Workflow gate | .workflow.json, workflow-state.js, workflow-gate.js (retire reviewer-memory-gate), length-audit check | infra |
| 7. Hardening | pre-publish MCP matchers, stop-note-check, session-wrap fixes, verify.sh additions, post_id write-back | infra |

Per CLAUDE.md, infra phases belong on their own branch/PR, separate from any blog-content PR.
