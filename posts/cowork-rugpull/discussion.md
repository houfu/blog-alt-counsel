# Discussion Log: cowork-rugpull

## Session 1 — 2026-06-25 (PITCH)

### Origin
User pitched: legal tech providers facing rising token costs (Legora) switching to consumption-based pricing; Microsoft brought Cowork to GA with usage-based consumption. Conventional wisdom = "free buffet is over." User's contrarian take: short-sighted, because we still have to *pay to prove* legal use cases, and this makes the lawyer-builder even more valuable.

### Key decisions
- **Lane:** News Commentary with a Learning-in-Public vulnerability opening.
- **Personal hook (user's real experience):** User got *rugpulled by Cowork* — built a workflow around it, GA + usage-based pricing forces a rebuild. Can't abandon it because colleagues genuinely prefer using it. This adoption tension stays in the post. No names.
- **Thesis sharpened by user:** The lawyer-builder's value is not just judging whether a use case is worth the spend — it's **vouching** for it. Colleagues depend on the lawyer-builder to say "this is trustworthy and the right direction." An engineer can cost a workflow but can't carry professional trust; a lawyer can judge the work but lacks confidence to merge technical + professional. Only the lawyer-builder does both. Metering raises the stakes on that trust.

### Data verification (done at pitch, per workflow)
- Cowork GA confirmed June 16, 2026; usage-based "Copilot Credits" ($0.01/credit), metered on model use / context retrieval / tool calls / runtime; PayGo or P3 pre-commit; runs on Anthropic Opus 4.8 + Sonnet 4.6.
- Legora confirmed moving most-capable product (Agent Pro) off per-seat to consumption.
- **Caught a factual error in the original idea:** the "Microsoft didn't even do this with Copilot Studio" line is FALSE — Studio is already consumption-priced (same credits/$0.01, pooled, not per-seat). Reframed: use Studio as evidence of convergence, not a counterexample. Flagged to user; user agreed to drop the Studio-as-foil framing.

### Pitch interrogation (Step 3.6)
- Diagnosis tested and held (vouching, not just cost-judgment, is the lever).
- Differentiation: personal rugpull + contrarian "good for lawyer-builders" + trust sharpening + solo-counsel lens.
- Framing risk low (rugpull = fair comment on MS; colleagues anonymized).

### Tags
AI, LegalTech, SoloBuilder locked. Programming proposed as recommended 4th (groups with lawyer-coder posts) — pending user confirm.

### Must-link seeds
- when-building-gets-cheap (THE precursor — building cheap / knowing expensive)
- ai-wont-replace-you ("someone who decides" = the vouching lawyer-builder)
- jamie-tso-vibe-coding (optional, identity)

### Next step
Pitch approved + scaffolded. Awaiting user answers on: (1) 4th tag Programming?, (2) publish deadline?, (3) depth of personal rebuild detail. Then develop outline.

## Session 2 — 2026-06-25 (RESEARCH)

### Decisions from user
- **Tags final:** AI, LegalTech, SoloBuilder. **No Programming.**
- **Publish:** ASAP (news hook fresh — Cowork GA was 2026-06-16).
- **Rebuild details:** user will describe specifics later; outline can hold a slot for one concrete detail.

### Copilot Studio / meter — resolved honestly
User's lived experience: **Cowork is literally a toggle on a tab in the M365 chat app, and they never saw a meter when using Copilot or Studio.** So the original "Microsoft didn't even do this with Studio" instinct came from real experience — Studio's consumption was bundled/invisible to them, not absent. New framing (better than the retracted counterexample): *the meter appeared where there had never been a visible meter — same app, same toggle, now it's counting.* That concretises the "rugpull." Use this; drop the factual "Studio counterexample" claim.

### Research done (research.md written)
Key anchors: Artificial Lawyer "token price problem" (June 3) = the canonical buffet-over text ("no-one is going to subsidise … all you can eat"); Legora's own "makes cost legible client by client" framing = contrarian-positive; Cowork criticisms (bill shock, double-charge, volatility) + Lamanna "could not be offered on unlimited-use basis"; Phronesis/Liminal ROI-discipline thread = our spine; counterweight stats (600-CIO survey: 98% ROI pressure, only 51% can evaluate AI ROI; Leena AI consumption backfire) for the "neither is wrong" move. SG lens thin (Budget 2026, MinLaw GenAI guide) — supply ourselves.
- Source caveat: Artificial Lawyer + unfilteredbits Substack 403'd direct + Jina fetch; quotes from search-index snapshots, re-verify before verbatim use.

### Articles supplied by user (resolves the 403s) + outline built
User uploaded 4 PDFs. Now VERIFIED full text: Artificial Lawyer "token price problem" (Tromans, Jun 3) and Weijtmans "Legal AI Won't Be Priced Per Seat" (unfilteredbits). The Lawyer piece = hard paywall (headline only; bonus adjacent headline "Law's AI honeymoon is over" = mainstream-narrative corroboration). Axios DeepSeek = body didn't render (Lamanna line stays a cautious paraphrase).
- **Spine found:** Weijtmans' **"consumption is not outcome"** — you pay for work done, not work being right; spending thresholds are set against costs you can't foresee, not results you trust. This IS the thesis backbone: the meter prices compute, not trust; someone must stand in that gap and vouch — the lawyer-builder. A consumption-pricing skeptic accidentally made our case. CREDIT him (bookmark card).
- Other strong quotes: Curran (Jylo) "no-one is going to subsidise … all you can eat"; Innanen (Laverne) "middle men … resell tokens at a premium" + "innovation theatre"; Jones (Flank) "priced on the displacement, not the licence."
- **outline.md written** — 7 sections, ~9-min target. Section 5 has a [SLOT] for user's concrete Cowork-workflow detail + colleagues scene. Awaiting user OK on outline before WRITE.

### Two user-driven research/structure additions
1. **Raw-reaction layer (user flagged research too vendor/analyst-heavy).** Added research Finding 8: honest finding that Cowork-*specific* raw reactions are thin (mostly IT-governance/partner analysis + un-fetchable Windows Forum threads); the visceral meter-shock backlash is mostly the developer sibling GitHub Copilot (June 1: $29→$750, $180 day-1, "impossible to predict") — must be labeled as sibling, not Cowork. Two advisor lines that ARE our thesis: metered billing "rewards efficient, targeted automation while penalizing broad autonomous agent behavior," and "if Cowork saves hours of legal review, usage-based pricing may be easier to defend than another per-seat uplift."
2. **"Premature rug-pull" angle (user's, reconnects to original pitch's 'prove the use cases').** Now a load-bearing beat = outline §4. Argument: metering arrived mid-experiment, before legal use cases are proven; chicken-and-egg (meter demands ROI justification but taxes the experimentation that produces it). "Neither is wrong" engine = **premature for whom?** Premature for the market discovering value; overdue for vendor margins (they're bleeding on subsidized tokens). Pivot: proving didn't stop, it got a price tag → §5/§6 thesis. Outline renumbered to 8 sections.

## Session 3 — 2026-06-25 (BRAINSTORM unexpected benefits + WRITE)
- Ran brainstorming skill + Explore agent to mine prior posts for "unexpected lawyer-builder benefits." Strongest reusable threads: **when-building-gets-cheap** ("building cheap, knowing expensive" — the inverse setup; must-link) and **ai-wont-replace-you** ("the decider is the bottleneck; intentionality is the scarce thing" — identity anchor; must-link). Lighter support: jamie-tso (tool vs infra judgment), deepseek-v4-vs-harvey (harness > model), loops-at-scale (shape the work to the budget), legal-ai-autonomy (autonomy not efficiency).
- **User picked the unexpected angle: A + D, fused into "the meter is an honesty machine."** (A) the meter makes your good judgment legible — invisible intuition becomes a line item; (D) it makes everyone else's bad judgment/innovation-theatre visible — spray-and-pray comes with a receipt. Twist: a meter only tells the truth to someone who can read it = the lawyer-builder. Payoff line: "stop vouching with vibes, start vouching with receipts." Folded into outline §6 (no new section — keeps 8 beats).
- WRITE: read Voice Guide + sampled ai-wont-replace-you for live voice. Drafting cowork-rugpull.md now. Backlink plan: when-building-gets-cheap + ai-wont as internal bookmark cards; Weijtmans Substack as external card (the spine); Artificial Lawyer as inline link (respect 0-1 external-card guideline). §6 keeps [SLOT] for user's concrete Cowork-workflow scene.
