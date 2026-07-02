# 2026 Predictions — Discussion Log

## Session: 2026-07-02 — 6-month update, "bringing stuff up to speed"

### Where we are
- Original post: **"My 2026 Legal AI Predictions (From the Trenches, Not the Boardroom)"** — published 2026-01-08, 1,869 words. Tags: AI, LegalTech, Singapore, 2026Predictions.
- Slug: `my-2026-legal-ai-predictions-from-the-trenches-not-the-boardroom`
- The post made **5 testable predictions** with public accountability: monthly tracking committed to this repo (referenced as PR #8), monthly blog updates tagged #2026Predictions, and a **December 2026 scorecard**. Stakes: if I chicken out, $500 to a Singapore legal aid org + public acknowledgment.

### The honest problem
`tracking-2026.md` was set up in January but **never filled in** — every "Updates" / "Monthly Usage Data" section is still a placeholder. The formal decision log (#2), monthly usage percentages (#3), contract-review spreadsheet (#1), and theater/innovation callouts (#5) were **not kept**. So the promised hard data doesn't exist in the repo.

**BUT** — the 6 months of published posts ARE a real, timestamped audit trail. Reconstructing from them below.

### The 5 predictions (recap)
1. **Agentic AI will actually work for document review** — complete routine contract reviews (NDA/service/SaaS) using only AI/agents, never opening Word. Binary test per contract.
2. **The jagged frontier won't get better** — unpredictability of *which* tasks fail won't improve. Deliver a revised, honest decision framework by year-end.
3. **Real usage stays under 20%** — actual meaningful AI use in legal work, tracked monthly.
4. **Hallucination paradox stays unsolved but maybe manageable** — testing RAG-with-citations, two-pass review, locked templates.
5. **Most adoption is performative theater** — monthly callouts of theater vs. real innovation signals.
- Most confident: #3, #4. Most likely to fail: #2, #5.

### Reconstructed evidence from posts published Jan 8 – Jun 27 (23 posts, incl. original)
- **P1 (agentic doc review / no Word):**
  - 2026-02-09 "So you want to Claude Cowork the Legal Plugin" — Anthropic legal plugin, jurisdiction templates (PDPA DSAR)
  - 2026-02-24 "Two Files, One Workflow. No Code. Just Cowork." — CoDraft
  - 2026-04-22 "Word on Claude" *(tagged 2026Predictions)* — Claude for Word arrives; genuinely good, but interface shapes thinking. Complicates the "never open Word" premise.
  - 2026-06-11 "My Agent Did the Legal Work. The Benchmark Gave It Zero." — agent produced a complete memo but saved raw markdown under a .docx name → unopenable. **Concrete "what broke": the DOCX/WYSIWYG gap P1 flagged.**
  - 2026-06-27 "I Got Rugpulled by Cowork" — contract tool + the compute meter
- **P2 (jagged frontier):**
  - 2026-03-04 "What 7,308 Agent Runs Taught Me About Writing Better Skills" — SkillsBench: +16pp from skills, but **19% of tasks got worse**. Direct jaggedness evidence.
  - 2026-06-11 "My Agent Did the Legal Work" — perfect legal reasoning, zero score on format. Jaggedness in the flesh.
  - 2026-06-18 "Thinking in Loops: Finding the Frontier Without a Frontier Budget"
- **P3 (usage under 20%):**
  - 2026-04-29 "Three years, 100 members" — "Almost every piece I publish is heavily AI-assisted... haven't written any without it for a long time." NB: writing ≠ legal deliverables, but tension worth addressing.
  - 2026-01-22 "Legal AI's Real Value: Autonomy, Not Automation"
- **P4 (hallucination manageable):**
  - contract-review-skill work; benchmark posts; format/QA failures
- **P5 (theater vs innovation):**
  - 2026-02-16 "Budget 2026 Tells Lawyers to Use AI" — govt money; adoption infrastructure vs passenger seat
  - 2026-03-09 "From Draft to Final: MinLaw AI Guide" — my feedback adopted near-verbatim
  - 2026-05-11 "Lawyers Are Building. Just Not On Each Other's Code." — federation of solo archipelagos; real building vs theater
  - 2026-06-02 "Commentary: Pitfalls of Seeking AI Advice From Lawyers"

### Meta-observation (candidate angle for the update)
Failing to keep the tracking log is *itself* a finding: tracking has friction too (speaks to P3's "friction is real"), and it's a live test of P5 — was the accountability structure real iteration or my own bit of theater? The blog's brand is honest, "includes what broke" — so leading with "I dropped the formal log; here's what I did instead" is on-brand, not a weakness to hide.

### Houfu's comments (2026-07-02, walking through predictions one by one)

**Prediction 1 — verdict: FAIL at 6 months, but still holding out for December.**
- Key reframe: the prediction rests on **orchestration** — agents use the Word app, the *human* does not. The bet is not "AI in Word," it's "human out of Word."
- Therefore the *slew* of Word plugins (Claude for Word + many others) that put AI *inside* Word for the human to use is **fatal to the prediction's spirit**: "If AI is meant to be used in the Word app, we are not leaving the Word app."
- Counter-signal keeping it alive: agent benchmarks suggest the agents-do-it / human-doesn't vision "might be in reach." **Spellbook's new autonomous CLM** points the same (orchestration) direction.
- Houfu personally expected the work to happen in a **Cowork**-like environment. **Microsoft Copilot "coworker"** is an important development on that axis.
- Current blocker (besides cost): **validation** — to confirm the agent is reliable, he still has to open the file in Word to check it. That's why it's a fail right now.
- TODO at revision: external refs to verify if they go in the post — Spellbook autonomous CLM, Copilot coworker, the "slew of Word plugins." Offered blog-research/web-search; awaiting go-ahead.

**Prediction 2 — verdict: CONFIRMED / strong, but the promised deliverable is being abandoned-and-redefined.**
- Looks strong *because* it was unexpected (his flagged-to-fail bet became his best call). Benchmark work + **local-model advances** (DeepSeek-v4-flash on Ollama) made it worthwhile and exciting.
- Will **not** deliver the January "revised decision framework." Reasons:
  - Hand-waving a compliance/decision framework is meaningless — "too many variables" (echoes Jan admission: too simplistic, it's context not task type).
  - The real learning is about **designing a great harness, not an eval framework**.
  - A **synthetic-data benchmark** is the nearest rigorous method to map the frontier, but "still too hard for a resource-restrained person to carry out on their own" (LAB run = 2 weeks, exhausted Ollama quota).
- On-brand irony to surface in the post: the only rigorous way to map the jagged frontier is an eval his own resource-constrained audience can't run.

### Deep-read findings (voice + concrete detail)
- **"Word on Claude" (Apr 22) is already a P1 mid-course update.** His own verdict: "The prediction was never about tool availability... We aren't there yet." Claude for Word = a step, not the chapter. "December will tell." → P1 leaning MISS/not-yet, with nuance (interface signals junior vs senior work).
- **"My Agent Did the Legal Work" (Jun 11):** ran Harvey's LAB (~2,200 tasks). His lawyer-made stack LOST to the generic harness (74.8% vs 84.7%), 56 zero-score tasks, mostly on *packaging/format* not law. Explicitly: "This was the jagged frontier... vividly illustrated." Strong P2 + P4(format QA) evidence.
- **SkillsBench (Mar 4):** +16.2pp avg but 19% of tasks WORSE (−39.3pp worst); self-generated skills −1.3pp ("models cannot author the procedural knowledge they benefit from consuming"); less-is-more. Direct P2 confirmation.
- **"Three years, 100 members" (Apr 29):** "Almost every piece I publish is heavily AI-assisted... haven't written any without it for a long time." His *writing* usage ≈ near-total. P3 was about *legal deliverables*, not writing — but the tension is real and must be addressed head-on.
- **P5 texture:** Budget 2026 (govt money, passenger seat), Lawyers Not On Each Other's Code (federation of solo archipelagos = real building is rare/isolated, matches "innovation in isolated pockets"), MinLaw draft-to-final (his feedback adopted = real iteration beats theater).

### Interim call (my read, for Houfu to confirm/override)
- P1: leaning **not-yet / miss** (tool arrived, workflow hasn't transformed)
- P2: leaning **confirmed** — strongest call so far
- P3: **can't grade honestly** — I didn't keep the number. The lapse is itself the story.
- P4: **partial** — manageable-via-structure, not solved; format is the live failure surface
- P5: leaning **confirmed** with texture
- Original confidence was: most confident #3,#4; most likely to fail #2,#5. Plot twist: #2 is looking like the strongest, #3 is the one I sabotaged by not tracking.

### Decisions taken (AskUserQuestion tool failed twice; proceeding on defaults, Houfu to redirect)
1. Missing data → **qualitative + honest**, no invented numbers (esp. P3 %).
2. Framing → **honest "I dropped the formal log, here's what the year recorded anyway."**
3. Scope → **interim scorecard, ~1,700w** (matches original length).
4. Back-fill tracking-2026.md → **yes**, so the public repo trail is real again.
- Draft written to `6-month-update.md` (NOT posted to Ghost — awaiting review).
