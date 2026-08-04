# The Ghost-edit voice corpus (mined 2026-08-04)

Evidence base for the Voice Guide revision (see `workflow-audit-2026-08.md` Part 6).
Sources: all 32 `posts/*/discussion.md`; full git history with per-commit diffs; live-Ghost
vs local prose diffs for 11 of the 14 most recent published posts. Attribution was strict:
a delta counts as Houfu's only when made via the GitHub web editor under his own identity,
explicitly logged as hand-merged from his Ghost editing, or found live-on-Ghost differing
from a local file that predates publication. (`houfu <houfu@outlook.sg>` is Claude Code's
commit identity and was excluded.)

## Headline finding

**The January 2026 Voice Guide is calibrated on the blog's first two posts** — nearly every
sample sentence traces to `jamie-tso-vibe-coding` (Jan 2026) or `data-zeeker-sg` (Dec 2025).
`jamie-tso` is the one post where Houfu's hand edits were ADDITIVE; on every substantial
2026 post since, he almost exclusively **cuts**. The purest sample commit (`73f7805`,
GitHub web editor, message "A human wrote some edits") is net −6 lines.

**The guide's most-templated zones produce its most-rewritten output.** Openings (~20
deltas) and closes (~18) are the two heaviest edit zones — and the two zones where the
guide is most prescriptive (§1.1 Opening Moves; the Templates' closing formulas). The
guidance is not underspecified; it is miscalibrated.

## The thirteen derived rules

Each cites the delta catalog (below / in the mining report). CONFIRMS / EXTENDS /
CONTRADICTS refers to the current Voice Guide.

| # | Rule | Evidence | vs Guide |
|---|---|---|---|
| R1 | Never append an aphoristic kicker — the argument carries itself. His own short sentences survive because they are colloquial asides ("That's it."), not metaphorical conclusions ("the agents are already at the gym" — deleted). | 9 deltas | CONTRADICTS §1.8, §2.3, Part 5 punch sentences |
| R2 | Never write a lead-in sentence introducing a bookmark card — the card's title IS the callback. | 9/9 deleted, zero exceptions — highest-confidence rule in the corpus | CONTRADICTS §1.4 Self-Quote/Callback |
| R3 | Never write a feeling he hasn't stated; inferred emotion gets corrected to a truer, duller fact (the legal-oss "hesitated" reversal; "Three Things I Got Wrong" → "Learnt"; a 350-word confessional close deleted outright). | 8 deltas | CONTRADICTS §1.1/§1.6 as executed; CONFIRMS CLAUDE.md principle 8 |
| R4 | State the fact, then undercut it — never display the proof (deleted his own influence-evidence side-by-side; deleted "I checked twice."; but ADDED hard numbers + "— mine" to an excerpt). Not modesty — refusal to perform. | 5 deltas | NEW |
| R5 | Tidy parable → messy real mechanism, even at 2× length. Accuracy outranks economy. | 5 deltas | EXTENDS §1.3 |
| R6 | Bullets and headings for inventory and procedure; prose for argument. He deletes decision matrices, tricolons, and numbered self-indictments from prose — and converts feature narration INTO bullets. | 6+ deltas both directions | CONFIRMS §2.1, sharpened |
| R7 | Register goes down, never up; clumsier is acceptable ("the big boys", "stabbing", "Neato, right?", ungrammatical jokes kept). | 8 deltas | CONTRADICTS Part 5 polish level |
| R8 | Dry humour arrives AFTER the argument lands, never inside it. | 5 deltas | NEW — the guide has no humour section |
| R9 | Closes end soft, hopeful, or flat: no mic-drop, no teaser, no rising exhortation. His own words (cowork-rugpull note): "ends on hope, not a mic-drop." | 7 deltas | CONTRADICTS Quick-Reference "ends with question OR recommendation" |
| R10 | Hedging is directional: harden claims about the world ("It appears" deleted), soften claims about himself ("largely lost", "I think of" not "I now ask"). | 10+ deltas | EXTENDS Part 3's flat anti-hedging rule |
| R11 | Be fairer to other people's work than the draft is (docassemble rescoped in ITS favour; "stock" → "default"; credential-stacking cut but credit kept). | 8 deltas | NEW; confirms the pitch framing-risk question |
| R12 | Numbers must be lived and provable; false-precision thresholds get deleted ("under 50 lines"), and his corrections go in both directions (177k→175k down, 247k→352k up). His own $50K→$500K error (reviewer-reverted) shows the rule binds him too. | 7 deltas | CONFIRMS §1.3, adds provenance |
| R13 | Colon-label headings ("The confession: Prediction 3…") become plain first-person claims ("I was certainly wrong about my legal work"). | 5 deltas | EXTENDS §2.4 |

## Edit-location heatmap (where drafting is weakest)

1. **Openings (~20 deltas)** — every substantially-edited post. He rejects the withheld
   reveal, the compressed anecdote, the rhetorical-question run, and inferred emotion, in
   favour of a longer, flatter, more interior first-person setup.
2. **Closes (~18)** — teasers and mic-drops cut; reordered so the quiet line lands last;
   prescription replaced with reflection or invitation.
3. **Bookmark lead-ins (~9)** — 100% deletion rate. Should simply stop being drafted.
4. **Data passages (~8)** — almost exclusively cuts: caveats, SQL, proof displays,
   credential appositives. He shrinks the evidence display and trusts the reader.
5. **Emotional beats (~6)** — cut or factually corrected, never merely softened.

## Canonical corpus (living reference for the guide)

1. **`my-voice-worked`** (2026-02-05, members-only) — the only 100%-hand-written post
   (his own callout says so). The uncontaminated baseline: no headings, no bullets, no
   formulas, colloquial imperfection, quiet three-word close. **Local file is a stub —
   pull the live text into the repo.**
2. **`pitfalls-seeking-ai-advice-from-lawyers`** (2026-06-02) — richest delta set: 13
   merged Ghost edits + 3 further unsynced live cuts; opening and close both hand-rewritten.
3. **`rugpulled-by-cowork`** (2026-06-27) — most recent and most authorially defended
   (hand-written opening explicitly protected against reviewer advice: "do not re-raise").

Also pull: `three-years-100-members-and-an-experiment-in-plain-sight` (2026-04-29, no local
markdown — almost certainly written straight into Ghost; likely a second pure sample).

**Anti-recommendation:** `skillsbench-analysis` live post. Commit `73f7805` is his rawest
hand-written prose — but Claude's audit smoothed his roughest paragraph three days later
(`768f4b4`), so the live post no longer represents him. **Use the commit, not the post.**
That sequence — Houfu hand-writes, Claude's polish pass reverts him — is the drift
mechanism in miniature.

## Immediate actionables (independent of the guide rewrite)

- **Live typo:** `every-answer-was-correct` currently shows "some0ne" (introduced during a
  Ghost hand edit) — fix on Ghost.
- **Seven published posts carry unsynced Ghost edits** — the repo does not match the live
  site. Run the final-sync merge for each (list in the mining report's Tier A).
- **Converter spacing defects live on 4 posts** (issue #41 class): "againstSalesforce",
  "--MinLaw's Guide", "NanoClaw--", "Claude Opus,performs".
- **backlink_curating + drafting rules:** stop drafting bookmark lead-in sentences (R2) —
  the highest-confidence, most mechanical change available.
