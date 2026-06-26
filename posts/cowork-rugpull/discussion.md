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

## Session 4 — 2026-06-26 (PR #43 pull + research: Mike OSS cost graphic)
- Pulled PR #43 branch `claude/legal-tech-pricing-blog-d2q7fa`; remote had revised `cowork-rugpull.md` (47 ins / 51 del — slight tightening). No local content edits this session.
- **User research request:** find the graphic comparing **Mike OSS (mikeoss.com)** costs vs **Claude Cowork**. Traced it to a **Legal Nodes "scaffold" study**, reported in Artificial Lawyer (June 22, 2026): "The Legal AI Scaffold Changes Everything – Claude Study." Same model (Claude Opus 4.8) run through three scaffolds — raw Claude / Cowork / Mike. Mike scores *slightly lower* on quality but is **~60% cheaper per task than Cowork, ~90% cheaper than Claude** (figures from Mike's creator Will Chen). Thesis-relevant: it's the scaffold, not the model, that drives cost — directly supports the post's "consumption prices compute, not trust" spine and the lawyer-builder-as-judgment angle.
- Caveats for later use: the 60/90 numbers appear as **prose** in the AL piece, not yet confirmed as a published chart image; the actual visual likely lives in the original Legal Nodes study. mikeoss.com 403'd a plain fetch (use Jina reader if pulling the asset). Re-verify before citing verbatim.
- Potential post use: Mike OSS is a concrete BYO-key counterpoint to metered Cowork — a "the meter made the open-source option legible" data point. Not yet decided whether to fold into the draft; flagged for user.

### Edit: added Legal Nodes cost-per-task chart to draft
- Pulled the actual graphic from the AL article (Screenshot-2026-06-22-at-08.45.37) → saved as `legal-nodes-cost-per-task.png` in the folder. Cost per task: MikeOSS $0.30 / Cowork+Legal Plugin $0.80 / Claude Chat $2.80 (same model, Opus 4.8; ~10x spread by scaffold).
- Placed in §"This isn't just us" as a cost-differences-across-platforms remark (user's stated intent), with caption attributing Legal Nodes via Artificial Lawyer. Lint clean.
- **Open call for user:** caption is cost-only by request; the same study's quality leaderboard has MikeOSS *lowest* (72.7 vs Cowork 82.7 / Claude 75.6). Flagged whether to add a one-line honesty beat on the cost/quality tradeoff. Not yet added.

## Session 5 — 2026-06-27 (REVIEW: corporate + Wei Lin + content audit, then revise)
### Assessed user's hand-written changes to the opening
- User rewrote the open; flagged one real problem: line 26 said "use is suspended till further notice" but the back half (§7–§8) reads as active use ("we use it", "still rebuilding around the meter") — a continuity contradiction. Also line 28 "preparing my story about how I fought AI" was muddy (contradicts the embraced-AI framing), and line 32 grammar ("subscribed for this").
### Ran 3 reviewers (user asked for corporate; added Wei Lin mid-way; + content-quality-auditor)
- **Convergent (all): the suspended-vs-active contradiction.** Wei Lin's framing adopted: §7 thesis was retrospective-sounding when the reality is anticipatory.
- **User clarification (resolves it):** NOT dead-suspended. He has to pay for his own use, and he *already went to IT and said "Legal needs this, we want it implemented."* So the vouching act is real and live; only the outcome is open. This is the honest seam.
- **Wei Lin unique catch (highest signal):** post never asked whether "vouching is the advantage" might be *cope*. Added a beat in §8 ("I've made the case to IT, but I haven't sat in the meeting… I'm writing it from the waiting"). This is the save-vs-share line.
- **Sarah unique catch:** the cost chart I added invites "why not switch to the cheap MikeOSS?" and the $0.80 benchmark understates real metered bills (model cost only, not retrieval/tools/runtime; ~$165–195/mo at 30 medium tasks > $150 budget). Added a verdict paragraph: not a shopping list, MikeOSS is a builder tool, real bills run higher, the point is judgment about the machinery. Also defined "scaffold" on first use.
- **Sarah factual flag (KIV, not yet applied):** Microsoft billing docs cite a hard ~July 1 2026 cutoff to configure usage-based billing or lose access — "limbo" may need a date anchor. Verify before publish.
### Revisions applied (lint clean, ~net +150 words / ~7%)
- Opening: limbo + self-funded use + active IT vouching; line 28 reworked to the ironic-reversal beat ("ahead of the wave… then the wave changed shape"); line 32 grammar.
- §8: added the "is it cope?" honesty beat.
- After cost chart: added the "not a shopping list" verdict + scaffold definition.
- Reviewer MEMORY_UPDATE blocks appended to both memory files.
### Not yet done (next round candidates)
- Audit's opening-sequence note (hook buried under Microsoft preamble) — left to user; it's the part he hand-wrote and may want to own.
- Audit minor: unattributed "2026 survey" stat; trim the 3× "consumption is not outcome" near §"meter prices compute"; a couple of clichés. Hold for a polish pass (round 2 budget).

### User decisions (2026-06-27, end of review round 1)
- **Opening sequence: KEEP as hand-written.** User is fine with the Microsoft preamble before "I got rugpulled." Audit/Wei Lin's "invert the hook" suggestion is consciously declined — do not re-raise.
- **July 1 2026 cutoff: CONFIRMED真.** User verified Cowork had to be configured for usage-based billing or lose access. To be folded into the "limbo" framing as a date anchor — but HELD for the final polish pass, not now.
- **Sequencing of remaining work:** hold the final polish path (July 1 anchor, unattributed "2026 survey" stat, trim 3× "consumption is not outcome", clichés) until AFTER review round 2. Round 1 used; 1 round remaining.

## Session 6 — 2026-06-27 (REVIEW round 2 + final polish)
### Round 2 (both reviewers) — BOTH GREENLIT
- **Sarah (corporate): publish-ready.** Cost-chart verdict paragraph resolved her round-1 numbers concern. One new one-line catch: Singapore guidance named but unlinked → link MinLaw's Guide (applied).
- **Wei Lin (primary): SHARE it, no hedge.** Both his round-1 catches landed: the anticipatory sequencing ("Now I wait to see whether that carries") and the cope-beat ("the story I told myself while the tool sat in limbo"). His round-1 hedge ("this is what I'm hoping is true") is now closed — the post writes "from the middle of the wait, not the far side of a win." Minor prose note: the cope answer ("I care, a lot.") trails slightly defensive — left to author's voice.
### User's own edits this session (observed, kept)
- Reworked §8 cope answer in own voice ("I might still be wrong, but I think it'll tip… I care, a lot.") and trimmed the middlemen quote + survey stat + "watch the language" para (this incidentally cleared the audit's unattributed-2026-survey flag).
- Rewrote the closing (line 122) softer/more personal: "the end of seat pricing is the end of the party… I feel it's a new challenge, and I hope it will reward my judgement." Dropped the prior "It's the moment the room finally needs someone who can say what's worth keeping — and be believed." → new preference: ends on hope, not a mic-drop.
### Final polish applied (lint clean)
- July 1 2026 deadline anchor folded into the limbo line (confirmed: configure usage-based billing by 1 July or lose access).
- MinLaw GenAI Guide named + linked (line 66).
- Reviewer MEMORY_UPDATE blocks appended for both. Audit's repetition/cliché minors ("turning of the season"; 3× "consumption is not outcome") left as optional — both reviewers shipped without them; not blockers.
### Status: REVIEW complete (2/2 rounds). Draft publish-ready pending backlinks check + tag validation, then POST.

## Session 7 — 2026-06-27 (POST + CHECK/sync)
### Published to Ghost + scheduled by user
- Created Ghost draft via publish-lexical.js (uploaded cost chart image). User then, on Ghost: applied the recommended excerpt, added a feature image (top-down white gallery-surface flat-lay — ran with the cover concept), and **scheduled** the post for 2026-06-27T02:04:58Z. post_id 6a3eaaa719cc89000121ae77, slug rugpulled-by-cowork.
- **Dry-run caught the issue #41 converter quirk:** the mid-doc bullet list ("This isn't just us") relocated to the end of the doc. Fixed by converting bullets → prose. Also stripped literal `*…*` asterisks from the chart caption (italic-with-link doesn't convert).
- **Duplicate-draft mistake:** a second publish-lexical run (to push the excerpt) created a duplicate at slug `rugpulled-by-cowork-2` (post_id 6a3eaf6b19cc89000121ae95) because the original slug was taken by the scheduled post. MCP delete is blocked by safety flag — **USER TO DELETE the `rugpulled-by-cowork-2` draft manually in Ghost admin.** Lesson: once a slug is scheduled/taken, don't re-run publish-lexical to tweak metadata — edit on Ghost or set frontmatter before first publish.
### Sync-back (content + metadata) — user edits made in Ghost editor, merged to local
- Metadata (via sync-ghost): status→scheduled, + post_id, + published_at, + feature_image, custom_excerpt (no trailing period).
- Content edits merged by hand to match published:
  1. Limbo line trimmed → "and it comes with a deadline" (dropped the self-funding clause).
  2. Italicised *they would rather keep Cowork*.
  3. Curran quote → pull-aside (rendered as blockquote in md).
  4. Weijtmans link inlined on his name; standalone Substack bookmark card removed.
- **User removed the GitHub "Behind the Scenes" footer** on Ghost. Body matches (footer is auto-injected, not in md); github_folder left in frontmatter and FLAGGED — a re-publish would re-add the footer. Preference signal: this post ships without the GitHub footer.
