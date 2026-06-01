# Discussion: Commentary — The Pitfalls of Seeking AI Advice From Lawyers

## AUDIT TRAIL

- **2026-06-01** — Pitch session. Post conceived as a News Commentary responding
  to Mark Yeo's CNA piece. Locked the "two guiding lights" spine (Professional
  Judgement + AI Literacy), tied to Houfu's upcoming SCCE Singapore talk
  (10 July 2026). Branch: `blog/cna-ai-advice-from-lawyers`.

## Session log

### 2026-06-01 — Pitch developed

**What the post is.** A response to Mark Yeo, "Commentary: AI should spur lawyers
to rethink their value to clients" (CNA, 1 Jun 2026). Houfu's frame: professionals
need *two* guiding lights for AI — professional judgement and AI literacy. Yeo has
the first, not the second.

**Houfu's two real reactions (the authentic core):**
1. Frustration at the repeated word "chatbot" — the real capability is agentic
   (agents search via MCP, draft, act). Yeo cites "Claude Legal" then flattens AI
   back to a "chatbot... only ever a tool." The contradiction is in his own piece.
2. "Agape" at Yeo's fix — clients using AI to prep summaries/gap-analysis to
   forward to lawyers. At scale this overwhelms lawyers: the human in the loop
   becomes the human bottleneck.

**Connecting tissue:** both reactions are the same literacy gap in two costumes.
Picture AI as a chatbot and the "humans are unique" claims land easy and the
"clients brief lawyers better" fix sounds lovely. Picture agents at scale and
both fall apart.

**The talk.** Title: "What AI Demands of Compliance Professionals: The Discussion
We Are Not Having." Date: 10 July 2026. Venue: SCCE Singapore Regional. The slide
`images/two-guiding-lights.png` (two lights + car on road) is the visual spine.
More slides expected from Houfu.

**Open decisions:**
- Tags: AI, Law, Compliance, Singapore (working set). Pending: `Article`
  (featured?) and `Law` vs `LegalTech`.
- Research items logged in pitch.md (Claude Legal reality + $830B selloff; human
  "uniqueness" research; Yeo's cited cases/stats). The "are we unique?" claim must
  be backed before we assert it — hold "neither is wrong" nuance if mixed.

**Tags confirmed:** AI, Law, LegalTech, Compliance, Singapore. No `Article`
(not featured). User wanted Law *and* LegalTech.

**Human-uniqueness angle — research secured + the reframe.** Houfu cites two
sycophancy sources in the talk (Cheng et al. arXiv:2510.01395; "Programmed to
Please," AI & Ethics 2026). The reframe these unlock: Yeo treats AI as the
dangerous yes-man and the human lawyer as the safe corrective. The research
double-crosses that frame:
- Humans *are* less sycophantic (AI affirms ~50% more) — so uniqueness is real
  but a matter of **degree, not kind**. Validation bias is a human universal;
  the non-sycophantic lawyer is fighting human nature, not exempt from it.
- People **prefer** the sycophant (rate it higher, trust it more, reuse it). So
  Yeo's hope that "clients will seek what AI can't provide" inverts: clients are
  incentivised to route *around* the lawyer who challenges them.
- The frontier risk Yeo misses entirely: sycophancy erodes the *user's own*
  judgment (less self-correction, more conviction of rightness). Hallucination
  and privilege are 2023 concerns; this is the one literacy would flag.
- Guard rail: the "just prompt it to be critical" fix only *masks* sycophancy.
  Literacy is not a one-prompt cure — keep that nuance.

Number to reconcile: slide says 49%, paper abstract says "50% more." Check body.

**THE ENGINE (Houfu's talk thesis — the death spiral of skills).** The talk is
*not* aimed at Mark's article; it's broader. Its core: AI use triggers a death
spiral of professional skills — you check less, scrutinise less, rubber-stamp
more, *feel good about it* (sycophancy is the anaesthetic), and lose the skills
that keep you sharp. The post borrows the talk's frame (two guiding lights) and
the sycophancy research, but its job is critiquing Mark specifically.

**How the death spiral guts Mark's argument (the post's intellectual core):**
- Mark assumes human judgment is a **durable, fixed differentiator** ("clients
  will seek what AI cannot provide"). The death spiral says judgment is a
  **perishable skill**, not an endowment.
- The way professionals actually use AI erodes the exact muscle Mark says makes
  us irreplaceable. The danger isn't AI *replacing* judgment — it's AI
  *hollowing it out* while we keep the title and the confident feeling.
- Mark's "human in the loop" is presented as the safeguard; the research says
  the human in the loop is the thing being quietly degraded, with sycophancy
  making the decline feel like competence.
- "Are we unique?" answer with teeth: judgment is real and somewhat distinctive,
  but it's use-it-or-lose-it — and "you're human, therefore safe" is precisely
  the complacency that starts the spiral. AI literacy is what lets you see the
  spiral and engineer friction against it; professional judgment alone can't,
  because the spiral *feels* like competence.

**Claude Legal nuance (Houfu's domain knowledge — use, but phrase carefully).**
Two versions. February = prompt-based, the one Mark leans on (tied to the selloff
he cites). April = a system of MCPs grounded in legal data, not just prompts.
The irony to exploit: the agentic architecture is *specifically a response to*
Mark's two pillars — it grounds against **hallucination** (connects to real legal
sources instead of generating from weights) and tries to **encode
judgment/verification into a workflow.** Mark is warning about hallucination and
venerating judgment while the frontier tool already engineers both away — and he
tried the older version, or none. Phrase via architecture (what MCP-grounded
agents do), not over-precise version dates/numbers we can't verify. Number
decision: use paper's headline "~50% more than humans" (not 49%).

**Outline approved (2026-06-01):** 7 sections — (1) the wince + slide + two
guiding lights; (2) the tell: chatbot vs agent + Claude Legal irony; (3) the
punching bag; (4) are we really unique? sycophancy + death spiral [core];
(5) the overwhelm trap; (6) what literacy actually changes; (7) solo counsel
reality + close.

**Draft v1 written** to `draft.md` (~1,700 words). Houfu then revised it and added
material — see below.

### 2026-06-01 — Houfu's revisions + new research

**Houfu's edits to draft v1:**
- Opening concession reworded: "If one were to imagine a legal professional, this
  is what we would call a legal professional" (kept the respect, dropped "sharper
  than mine").
- The Tell: added the concrete **CourtListener MCP** detail — when Claude's legal
  capability shipped it connected to CourtListener (full text of US legislation
  and cases), so the agent is grounded in real sources, available to any
  subscriber. Sharpens the hallucination irony.
- Are We Unique?: added the inversion line — clients won't seek you to tell them
  they're wrong; you'll be *fighting to convince them you're right*. Added the
  "all tools look like a hammer / a real artisan encodes judgment" turn.
- Added four talk slides: `syncophancy.png` (note: filename misspelled on disk;
  reference matches), `ratifying.png`, `irreplaceable.png`, `less-reliable.png`.
- Fixed a broken image tag on the less-reliable slide (was `![l...`).

**New research added (in the talk too): METR developer-productivity RCT.**
"Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer
Productivity" (METR, 10 Jul 2025).
<https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- 16 experienced OSS devs, 246 real issues, RCT (AI-allowed vs disallowed),
  frontier models (Cursor Pro + Claude 3.5/3.7 Sonnet).
- Core result: devs took **19% longer** with AI — but **believed AI sped them up
  20%** (forecast 24% beforehand). The perception gap is the load-bearing point.
- Used in The Overwhelm Trap to rebut Mark's assumption that AI improves
  "resource-intensive tasks" (document review, legal research). Citation verified
  accurate against source.
- Caveat to keep honest: METR explicitly does NOT claim AI fails to help most
  devs / other domains; it's experienced devs on familiar large codebases. Don't
  overgeneralise to "AI makes everyone slower." Current draft phrasing is fine
  (specific to the study population) but watch reviewer flags.

**Open flow question for auditors:** METR perception-gap evidence sits in The
Overwhelm Trap, one section after the death spiral it most naturally supports.
Decide placement after audit-flow weighs in.

**Next step:** content-quality audit + audience review (Marcus + Wei Lin).

### 2026-06-01 — Review round 1 (4 reviewers) + fixes applied

Ran content-quality-auditor + all three audience reviewers (Marcus/legal-tech,
Wei Lin/lawyer-coder, Sarah Chen/in-house — user asked for the third). Strong
convergence.

**Consensus findings:**
1. "The Overwhelm Trap" was the weak link — all four flagged it. The "pretty
   dainty" sentence stopped three reviewers cold; "in the research I cite for the
   talk" read as a placeholder; the verbose parenthetical rambled.
2. METR study was misplaced — it's the empirical anchor for "you feel sharper the
   whole way down" (death-spiral section), not the overwhelm section.
3. Missing a concrete Monday-morning action (Sarah: "motivation without method").
4. MCP needed one plain-language line for non-technical readers (Sarah got
   talked over).
5. Post diagnosed the spiral from *outside* it — needed a real "I do this too"
   (Wei Lin + Sarah; voice-guide principle 8).
6. **Marcus flagged the CourtListener claim as factually shaky** (the technical
   pillar): Anthropic doesn't bundle CourtListener into every subscription; it's
   a Free Law Project MCP the user configures; "really does know" overclaims
   (grounding shifts hallucination, doesn't end it); CourtListener is mainly US
   case law.

**Fixes applied (round 1):**
- Reframed CourtListener accurately per Houfu's domain knowledge: Claude for
  Legal walks you through a *curated, verified watchlist* (CourtListener is one
  selectable source) *before* the agent runs — which doubles as the post's
  concrete example of "encoding judgment into a workflow." Softened "really does
  know" + added "it can still misread what it pulls."
- Moved METR to the death-spiral section with an explicit dev≠legal caveat
  ("I won't pretend the numbers transfer cleanly — but the human pattern
  travels"). Named the study (METR, 2025).
- Added Houfu's real "I do this too": building the talk in reveal.js, 250 slides,
  leaning on AI, the recurring rubber-stamp worry, "I own the content."
- Rewrote/tightened "The Overwhelm Trap" (~280→~150 words); cut "dainty" + the
  rambling parenthetical; kept the ten-clients / risk-averse logic + complaint
  risk.
- Added Sarah's concrete Monday rep to the close (write the clause you'd flag
  before reading the AI's review).
- Added MCP analogy ("asking what someone remembers vs handing them the files").
- Anchored the death spiral to contract review / due diligence / compliance, not
  cross-examination.
- Voice polish: cut "Sit with that for a second"; "neither is simply safe /
  neither is simply dangerous" punch; varied "human in the loop"; tightened the
  line-60 sentence.
- Renamed image `syncophancy.png` → `sycophancy.png` + fixed alt text to convey
  the finding.
- Caught and removed a reviewer-name leak ("Marcus is right") from the prose.

Number check: in-text figure is "roughly 50%" (aligned to the paper). The 49%
slide isn't quoted in text, so no visible discrepancy.

**Review rounds used: 1 of 2.** Draft now ~1,500 words / ~7 min.

**Next step:** backlink curation, then tag validation, then publish to Ghost.

### 2026-06-01 — Backlinks + published to Ghost (draft)

**Backlinks added (4, as bookmark cards, distributed):**
- The Tell → `ect-no-lawyers-zeeker` (Zeeker MCP — homegrown analog to CourtListener grounding).
- Are We Unique? → `singapore-court-rules-on-ai-hallucination-...` ("professional judgment isn't enough").
- What Literacy Changes → `openclaw-field-notes-lawyer` ("the hard part is the harness, not the prompt").
- For the Solo Counsel → `the-solo-counsel-reality-what-minlaws-ai-guidelines-...`.
All confirmed published/live. Also added an inline link to Mark's CNA source on
first mention (it's a response piece; it should link its target).

**Publishing note (infra gap logged):** `publish-lexical.js` does NOT upload
local images — it embeds the relative path as-is. Workaround used: uploaded the 5
slides via `ghost_image_upload` MCP, then published a temp copy of the draft
(`temp/cna-publish.md`, since deleted) with `images/` paths rewritten to the
hosted storage.ghost.io URLs. `draft.md` keeps local paths for the repo/GitHub.
**TODO (separate infra branch):** add local-image upload to publish-lexical.js so
this manual step isn't needed. Do NOT do it on this blog branch.

**Published draft:**
- Post ID: 6a1d364cb509320001938862
- Preview: https://www.alt-counsel.com/p/76199956-2832-4d1f-bbd1-7c3c5246aef4/
- Admin: https://alt-counsel.ghost.io/ghost/#/editor/post/6a1d364cb509320001938862
- Status: draft, not featured, tags AI/Law/LegalTech/Compliance/Singapore.

**Remaining:** Houfu to review the Ghost draft (check image rendering + bookmark
cards). Sync metadata back once, only when closing the PR (`npm run sync-ghost
pitfalls-seeking-ai-advice-from-lawyers`). Publish/schedule when ready.

### 2026-06-01 — Excerpt + cover image, scheduled, closing the PR

**Excerpt + cover photo finalised.** Wrote the custom excerpt (the "aiming a very
good argument at old technology — and missing the real threat" framing) and a
cover-image prompt that extends the post's own visual thesis: a lone car driving
at night with only **one working headlight** — the capable driver (professional
judgement) advancing confidently into the dark with only half the road lit
(missing AI literacy). Both now live on Ghost.

**Scheduled to publish.** Houfu reviewed the Ghost draft and scheduled it for
**2026-06-02 00:04 SGT**.

**Sync done (once, at PR close):** `npm run sync-ghost` pulled metadata back into
`draft.md` frontmatter — `status: scheduled`, `post_id`, `published_at`,
`feature_image` (hosted cover), `custom_excerpt`, and Ghost's tag ordering. Body
keeps local `images/` paths by design (see the publish-lexical infra gap above).

**Content sync (manual — `sync-ghost` only does frontmatter).** Houfu made
substantive prose edits directly in the Ghost editor after scheduling. Pulled the
live lexical via `ghost_post_get` and hand-merged the changes back into
`draft.md` so the repo matches what's published. Notable edits:
- Opening: "wrong about much" → "made some mistake"; specimen line reworded to
  "this commentary is a great specimen for what I am about to talk about soon."
- Added a hyperlink to the SCCE Singapore Regional conference page.
- The Tell: "engineer both away" → "engineer a solution for both problems."
- Punching Bag: added "AI would gladly help you with that too."
- Death spiral: cut the "contract review / due diligence / cross-examination"
  sentence; cut the METR "software isn't legal work… numbers transfer" caveat.
- Overwhelm Trap: "For" → "From one diligent client"; split the long paragraph
  after "inviting a complaint."
- **What Literacy Changes: rewrote the closing paragraph and REMOVED the OpenClaw
  bookmark card** (own outcomes / AI supports framing replaces the friction-design
  list + harness line).
- Solo Counsel: cut "or simply charging more for your judgment"; removed the
  "judgment is real… agents are already at the gym" line; rewrote the Monday rep
  to a reflective "think deeply about its costs / you always have a choice"
  prompt; final line "stop being able to do the thing the title is for" → "stop
  being a lawyer."

**Ghost-only elements NOT represented in `draft.md`** (no clean markdown form;
post is already scheduled so not republishing): a **members paywall break** after
"driving with one headlight on," a **caption on the two-guiding-lights image**
("One of the key slides in my deck…"), and **visibility = members**. Noted here
so the source/Ghost divergence is intentional and documented.

**Next:** commit + PR to `main`. Infra TODO (local-image upload in
publish-lexical.js) stays off this branch — separate infra PR.
