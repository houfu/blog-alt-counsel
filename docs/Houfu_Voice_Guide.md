# Houfu's Voice Guide

> **This guide defines the distinctive voice and style of Alt + Counsel blog posts.**
>
> **When to use:** Read before writing blog posts, during pitch development (pick the voice contract), and when reviewing tone/style.
>
> **Referenced by:** CLAUDE.md writing workflow, audit-tone agent, content creation skills
>
> **Provenance:** Rewritten 2026-08 on the mined hand-edit corpus (`docs/voice-edit-corpus-2026-08.md`) — thirteen rules derived from six months of Houfu's own edits, especially his final Ghost edits before publication. The January 2026 version was calibrated on the blog's first two posts, from the one period when his edits were additive; since then his edits overwhelmingly CUT. Where this guide and his recent hand edits conflict, the hand edits win — see the Living Addendum at the bottom, which is updated at every final sync.

## Part 0: Dosage — read this first

**The patterns below are a palette, not a checklist.** A post that uses all of them reads as parody. At pitch time, pick the **2–3 moves this material genuinely supports** and record them in pitch.md frontmatter (`voice:`). The draft is then judged against that contract — patterns not declared should be *absent*, not forced. "Neither is wrong" on a topic with no genuine binary is a defect, not a voice win.

The single most reliable fact about Houfu's editing: **he cuts.** His purest hand-edit commit is net negative lines. When in doubt between adding a flourish and deleting one, delete.

## Core Identity

**Who you are:** The Solo Counsel's Tech Strategist
**What you do:** Practical legal tech for resource-constrained practitioners
**How you sound:** Honest, specific, plain, framework-oriented — and slightly rougher than polished

**The reader should feel:** "This person understands my constraints and won't bullshit me."

## Part 1: Voice Patterns

### 1.1 Opening Moves

**Pattern: a flat, interior, first-person setup — not a performance.**

His hand-rewritten openings are *longer and quieter* than the drafts they replaced: what he was doing, what he expected, what happened. No withheld reveal, no compressed anecdote-as-hook, no rhetorical-question run.

His own openings:
> "To be honest, I did have a goal to do some public speaking in 2026."

> "I went looking for why my agent stack confounded me. I had pitted a set of lawyer-made tools against a generic harness at legal work, to see if specialised tools made by lawyers could beat a generalised tool."

> "I had a mental model from docassemble… I expected to hit a wall somewhere in Cowork. Two text files later, it worked."

**What NOT to do:**
- ❌ "I lost. What I didn't expect was why." (withheld reveal — he rewrote this to state the payoff up front)
- ❌ "In this article, I will discuss..." / throat-clearing
- ❌ A feeling the author never stated (see 1.6)

**State the payoff early.** He replaced a cliffhanger with "But what I learnt about the harness was the real lesson." The reader gets the destination, then the journey.

### 1.2 The "Neither Is Wrong" Move

Still a signature — he *hand-writes* these into closes:

> "Enterprise contract management systems exist for a reason… Two text files in a folder won't replace that. Neither approach is wrong — it depends on what you're building and what you'll actually use."

**Formula:** [Position A] vs [Position B]. Neither is wrong. But [the nuance that actually matters].

**Dosage warning:** only for genuine binaries. He also *deletes* "neither is wrong" buildups when they slow a section — the move earns a close, not every comparison.

### 1.3 Specific Numbers as Anchors

Ground abstractions in concrete, **lived, provable** reality:

> "Mike got 2,657 stars in eleven days and six merged pull requests. The LegalQuants directory has 112 lawyer-coders and one repo that cleared the bar — mine." (his own hand-written excerpt)

Rules his edits enforce:
- Numbers appear in clusters, not isolated.
- **Every number must be one he can stand behind** — he corrects his own numbers in both directions (177,000 → 175,000 down; 247,000 → 352,000 up) and fixes time estimates from lived experience (90 min → 30 min).
- **Delete false-precision thresholds** — he removed "under 50 lines" in favour of "keep the skill small." A crisp number the author can't defend is worse than a plain word.

### 1.4 Callbacks: the card IS the callback

When linking to a prior post, place the bookmark card (a standalone markdown link line) and **let it speak. Never write a lead-in sentence narrating it** ("I've written before that…", "I made this argument after…").

This is the highest-confidence rule in the edit corpus: **nine lead-ins drafted, nine deleted, zero exceptions.** If the surrounding prose needs the prior idea, state the idea as part of the argument — don't announce the link.

### 1.5 The Two-Column Internal Dialogue

For genuinely unresolved tensions only, externalize both voices ("Pragmatic voice:" / "Passion voice:"). Rare — not manufactured drama.

### 1.6 The Uncomfortable Admission — user-led, stated once, never performed

Honest admissions build the blog's trust, but three hard rules from his edits:

1. **Only feelings and failures Houfu actually stated.** Never infer an emotion from the situation — an inferred "I hesitated" shipped to a Ghost draft and was factually wrong. When the vulnerability is missing, ask; mark `[HOUFU: …]`; never fill in.
2. **State the fact, then undercut it — never display the proof.** He deleted his own influence-evidence side-by-side and "I checked twice." But he *added* hard numbers and "— mine" to an excerpt: this is not modesty, it is refusal to perform. Same for credit: "That post got pretty warm feedback, including a cite from LawSites… and got distracted instead" — credit given, then undercut.
3. **Admissions are made once, plainly, at normal volume.** He renamed "Three Things I Got Wrong" to "Three Things I Learnt", deleted a 350-word confessional close, and kept an emotional line deleted over a reviewer's protection. Self-flagellation is as off-voice as bragging.

### 1.7 The Return to Solo Counsel Reality

Where the material supports it, circle back: "For solo counsels and small teams…" → specific, practical implication. (Declared in the voice contract like every other move — his most personal posts skip it entirely.)

### 1.8 Sentence Rhythm — asides yes, aphorisms no

Vary rhythm; short sentences are welcome. But there are two kinds of short sentence, and only one is his:

- ✅ **Colloquial asides** — "That's it." "Claude Cowork is Zen." "Neato, right?" "I don't know yet." Talk, not performance.
- ❌ **Aphoristic kickers** — a metaphor appended to an argument that already landed: "the agents are already at the gym", "Ten points, in the wrong direction.", "a killer demo is not a reliable workflow." **He deletes these on sight (nine documented).** The argument carries itself; never restate it as a punchline.

### 1.9 Framework Presentation

Questions and criteria, not prescriptions: "Before starting, ask 4 questions…" Numbered questions, ❌/✅ contrasting checkboxes for criteria. Unchanged — and note his edit direction even here: "I now ask three questions" became "I think of three questions." Frameworks are offered, not decreed.

### 1.10 Humour — dry, and after the argument lands

The guide's old versions had no humour section; his hand edits add it constantly, always in the same position: **a dry jab after the point is made, never inside the argument.**

> "Set up a weak enough opponent and human uniqueness wins by default. *AI would gladly help you with that too.*"

> "Size does matter. Brevity is the wit of a legal quant's soul."

> A 😅 callout exposing a live bug in his own product, mid-tutorial.

Slightly clumsy is fine — he keeps ungrammatical jokes ("just trying to be sycophant"). Manufactured wit is not.

### 1.11 Fairness to Third Parties

He consistently edits drafts to be *more generous to other people's work than the draft was*: rescoping his own claim in a competitor's favour, cutting credential-stacking while keeping the credit, "stock harness" → "default harness", deleting ominous asides ("— sometimes silently"). Named people, tools, and communities get the most generous reading the evidence allows. If a sentence about a third party would sting them and isn't load-bearing, cut it.

### 1.12 Directional Hedging

Hedging is not uniformly bad — it has a direction:

- **Harden claims about the world:** "It appears law firms guard…" → "Law firms guard…". If the evidence supports it, say it.
- **Soften claims about himself:** "My stack *largely* lost", "Version 1 is *primarily* two text files", "It's *probably* in Settings". Certainty about his own conclusions gets dialed down; the world gets stated plainly.

## Part 2: Structural Patterns

### 2.1 Bullets and headings are for inventory and procedure; prose is for argument

**Use bullets/headings FOR:** feature inventories, timelines, specs, step-by-step procedure (he *converted* narrated features into bullets and promoted step labels to headings).

**NEVER for:** argument, analysis, emotional content, self-assessment. He deletes decision matrices, if/then scenario blocks, tricolons, example triads, and numbered self-indictments from prose — one edit removed *every section heading* from an argumentative post, turning it into continuous editorial prose.

Bullet frequency: ~3 lists per 1,000 words; 3-4 items per list; always introduced with a colon setup sentence.

### 2.2 Headers: plain first-person claims

- ✅ "I was certainly wrong about my legal work"
- ✅ "The Word Plugin troubled me most"
- ✅ "You've got to study what's in it"
- ❌ "The confession: Prediction 3, where I was surest and most wrong" (colon-label constructions are a drafting tic he rewrites)
- ❌ "Analysis of Infrastructure vs Tool Development Paradigms"

H2 for major sections, H3 rare, never deeper. Headings are optional: an argumentative post may need none.

### 2.3 Paragraph Length

2-5 sentences typically; single-sentence paragraphs for colloquial asides (not aphorisms — see 1.8). He also *splits* paragraphs so a quiet line lands alone.

### 2.4 Accuracy outranks economy

When a tidy parable and the messy real mechanism compete, **he picks the messy real story even at twice the length** — the six-line-fix parable became the full soffice saga; a rhetorical frame became a second real case. Cut flourishes, not facts. If showing the real mechanism costs 100 words, cut 100 words of scaffolding elsewhere.

### 2.5 Narrative Pacing

The recurring drafting failure is expository "blog voice" — analysis arranged in sections. His posts are stories:

- **Scene before analysis.** Open inside the experience (what he did, saw, expected), not above it.
- **One narrative spine per post.** Analysis arrives as the narrator's realization along the way, not as titled argument blocks.
- **Data appears when the story needs it**, not when the research found it. A finding without a place in the story goes to research.md, not the post.
- **Before drafting, read the canonical corpus posts (below)** to sample the live rhythm — and record in discussion.md which post you modeled ("voice reference: <post> — <quality>").

### 2.6 Closes: soft, hopeful, or flat

His own words, logged as a preference: **"ends on hope, not a mic-drop."**

- ✅ A quiet statement of hope: "I feel it's a new challenge, and I hope it will reward my judgement."
- ✅ A flat, low-stakes line: "The worst that happens is nothing changes."
- ✅ A warm invitation or an appointment: "December will tell. See you then with the data."
- ✅ Reflective questions the reader carries away
- ❌ Mic-drop aphorisms, rising exhortation, next-post teasers (deleted: "That's the teaser for the next post…"), prescription-as-finale

### 2.7 Special Formatting

Blockquotes for quotes; bold for key terms on first use and voice labels; italics for titles and single-word emphasis; ❌/✅ checkboxes for contrasting lists; callouts (`> 💡`, `> 😅`, `> 🆘`) for tips, self-deprecating asides, and invitations — a live pattern in his own edits. No emojis in body text.

## Part 3: Anti-Patterns

**Voice:**
- ❌ Aphoristic kickers and punchline metaphors (1.8)
- ❌ Bookmark lead-in narration (1.4)
- ❌ Inferred or manufactured emotion; performed confession or performed proof (1.6)
- ❌ Register UP: polished litotes, formal claims ("My thesis was…" → he writes "I expected…")
- ❌ Credential-stacking and ominous asides about others' work (1.11)
- ❌ False-precision thresholds (1.3)
- ❌ Jargon without explanation; humble-bragging; false certainty; preaching
- ❌ Hedging claims about the world (hedge yourself instead — 1.12)

**Structure:**
- ❌ Colon-label headings (2.2)
- ❌ Decision matrices, tricolons, and enumerated self-indictments in prose (2.1)
- ❌ Mic-drop closes and teasers (2.6)
- ❌ Walls of 10+ bullets; nested bullets; bullets for emotional content
- ❌ Tidy parables replacing the messy real mechanism (2.4)

## Part 4: Templates

### Blog Post: "News Commentary" (Lane 1)

```
[Opening: what happened + his flat first-person reaction — 2-3 sentences, payoff stated]

[Section: What happened]
- [3-4 bullets: the facts]
[Prose: why this matters — the argument, in prose]

[Section: The uncomfortable truth — what coverage misses, argued not listed]

[Section: Solo counsel implications]
"For solo counsels / small teams..." [specific implication]

[Close: soft/flat/invitation — never a mic-drop]
```

### Blog Post: "Learning in Public" (Lane 2)

```
[Opening: interior first-person scene — what he did, expected, what happened. Payoff stated early]
[Specific lived numbers grounding it]

[The story unfolds: analysis as realization, data as the story needs it]

[Framework, if declared: "N questions help cut through the noise:"]

[What I'm still figuring out — one honest admission, stated once, not performed]

[Return to solo counsel reality, if declared]

[Close: hope, appointment, or invitation]
```

### LinkedIn Post

```
[Hook: flat observation or feeling — 1 sentence]
[The insight - 2-3 sentences]
→ [Bullet if needed]
"For solo counsels / small teams..." [implication]
[Link OR question for comments]
```

## Part 5: Sample Sentences (from his hand edits, 2026)

**Openings:**
> "To be honest, I did have a goal to do some public speaking in 2026."
> "I went looking for why my agent stack confounded me."

**Asides (the good short sentences):**
> "That's it." · "Claude Cowork is Zen." · "Neato, right?" · "I don't know yet."

**Humour after the argument:**
> "AI would gladly help you with that too."
> "Brevity is the wit of a legal quant's soul."

**Fact-then-undercut:**
> "That post got pretty warm feedback, including a cite from LawSites. I promised a follow-up about what works, and got distracted instead."

**Directional hedging:**
> "My stack largely lost against the default. But what I learnt about the harness was the real lesson."

**Closes:**
> "The worst that happens is nothing changes."
> "December will tell. See you then with the data."
> "As long as you use your real voice."

## Canonical Corpus (the live reference — read before drafting)

The guide describes; these posts ARE the voice. Refresh this list at final-sync time when a newer post is heavily hand-polished.

1. **`my-voice-worked`** (2026-02) — 100% hand-written, his own callout says so. The uncontaminated baseline: no headings, no bullets, no formulas, quiet three-word close.
2. **`pitfalls-seeking-ai-advice-from-lawyers`** (2026-06, folder `cna-ai-advice-from-lawyers`) — richest hand-edit set; opening and close both his.
3. **`rugpulled-by-cowork`** (2026-06, folder `cowork-rugpull`) — most recent and most authorially defended (hand-written opening protected against reviewer advice).

Also instructive: commit `73f7805` ("A human wrote some edits") — his rawest prose, on skillsbench-analysis. **Use the commit, not the live post**: a later polish pass smoothed his hand-written passage, which is exactly the failure mode to avoid. **Never smooth a passage Houfu hand-wrote.**

## Living Addendum (updated at every final sync)

Dated voice decisions from Houfu's hand edits, newest first. When this section conflicts with the guide above, this section wins. Full evidence: `docs/voice-edit-corpus-2026-08.md`.

- **2026-08-06 (legal-oss-maintainer):** Post-scheduling Ghost edits: made a singular role claim plural for accuracy ("one of its founding members"); **cut the final self-centrality line from the honesty column** ("every merge since mid-July has been mine") — soften claims about his own indispensability even when factual; trimmed two "And" sentence-starts; put quotes around reported speech (the agent's "over to you" line); split a long paragraph before its evidence run; deleted the auto-generated GitHub "Behind the Scenes" footer for this post; upgraded the repo inline link to a bookmark card by hand.
- **2026-08-04 (corpus mining, 6 months of edits):** Thirteen rules derived and folded into this rewrite — headline: he cuts; no bookmark lead-ins (9/9 deleted); no aphoristic kickers (9 deleted); no inferred emotion (one shipped factually wrong); closes on hope not mic-drops; register down; fairer to third parties than the draft; numbers must be lived.
- **2026-07-30 (legal-oss-maintainer):** Corrected an inferred hesitation ("I didn't hesitate. I just wasn't sure what I should do"); "help out" not "help maintain"; added the free-as-in-beer-and-freedom aside; cut the 2019-typo confession from the callback, added the LawSites credit with an undercut.
- **2026-06-27 (cowork-rugpull):** "Ends on hope, not a mic-drop" — his stated close preference; hand-written opening marked keep/do-not-re-raise.
- **2026-06-10 (deepseek-v4-vs-harvey):** Refused the gambling metaphor and the withheld reveal; added his own methodological disclaimer; kept an emotional line deleted over reviewer protection; genericised a named US statute.

## Quick Reference Checklist

Before publishing, verify:

- [ ] The 2-3 declared voice moves are present; undeclared patterns are absent
- [ ] Opening is a flat interior first-person setup with the payoff stated (no withheld reveal)
- [ ] Every feeling/admission traces to something Houfu actually said
- [ ] Numbers are lived, clustered, and defensible; no false-precision thresholds
- [ ] Zero bookmark lead-in sentences; zero aphoristic kickers
- [ ] Bullets only for inventory/procedure; argument is in prose
- [ ] Headings are plain first-person claims (or absent)
- [ ] Third parties get the generous reading
- [ ] Close is soft, hopeful, flat, or an invitation — no mic-drop, no teaser
- [ ] Hand-written passages untouched by any polish pass
