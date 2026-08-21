# Research: Claude Watermarking

**Last updated:** 2026-08-21 (session 2 — primary sources now VERIFIED)
**Status:** Anthropic's own pages and the AI Act text have been read directly. Quotes below are verbatim from primary sources unless marked otherwise. One claim carried in the session-1 draft of this file was **wrong and has been corrected** — see "Correction" below.

## The news, in one line

From **2 August 2026**, Claude models embed an imperceptible, machine-readable watermark in generated text, and signed C2PA provenance metadata in generated image files. Announced publicly ~11 August 2026. No opt-out.

## How it actually works

Anthropic uses a version of Google DeepMind's **SynthID-Text** (published in *Nature*, 2024).

**It is not hidden characters.** Anthropic, verbatim:

> "Nothing is added to the text and there are no hidden characters."

**What it actually is — and Anthropic's framing is sharper than the press coverage.** It does not bias the model toward particular words. It changes *how the dice are rolled*:

> "instead of using an arbitrary random number generator to pick the next word, watermarking uses the key and a few words that come before to settle what word the model should pick."

Underneath, that is SynthID's **tournament sampling**: sample `2^m` candidates from the model's normal distribution; pseudorandom `g` functions (seeded by the watermark key plus the preceding H tokens) score each token 0/1; run `m` layers of pairwise knockouts; emit the survivor. Over enough tokens, watermarked text carries systematically higher `g` values. Detection is a statistical test on that mean — not a lookup for a marker.

Consequences:
- The mark lives **in the word choices themselves**, so it survives copy-paste, reformatting, and conversion to plain text.
- It is **diffuse**. No single sentence "contains" it.
- Detection is **probabilistic and length-dependent**.
- To a reader, watermarked and unwatermarked responses are indistinguishable.

### The entropy insight — the best material in this file

Anthropic's own stated limitations are, read together, one idea: **the watermark can only exist where the model had a choice.** Their list:

- sparse watermarking on **factual passages**
- poor effectiveness on **small samples**
- minimal detection in **proofread text**
- **negligible presence in code**
- complete removal through **full rewrites**

Factual passages, boilerplate and code are low-entropy — the next token is close to forced, so there is no freedom to encode a signal into. Free-flowing prose is high-entropy, and carries a strong mark.

**The counterintuitive result for lawyers:** the watermark is *weakest* exactly where legal writing is most formulaic (a quoted statute, a standard indemnity, a definitions clause) and *strongest* exactly where the prose is most freely composed — the advocacy, the narrative, the client note. The signal tracks stylistic freedom, not legal substance. Worth stating plainly: watermark strength is a measure of how much room the model had, not of how much the model contributed.

*(No legal-sector piece found so far develops this. Artificial Lawyer mentions "reduced watermarking in factual passages" once, as an accuracy worry, and moves on.)*

### What a positive result actually means

Anthropic, verbatim:

> "It cannot distinguish 'Claude wrote this' from 'Claude heavily edited this.'"

And from the Help Centre: a detected mark "provides a signal that content was processed by Claude, but is **not fully conclusive**" — while the *absence* of a mark does not establish that content wasn't AI-generated (heavy editing, older models).

On identification, verbatim:

> "There's nothing in the watermark, or its key, that would allow anyone to recover any information about the user."

The marks do not identify a specific individual, organisation or chat session.

### Detection tooling — not shipped

> "We will soon be offering a watermark detection API."

Forthcoming, not available. **No false-positive rate is published on either page.** The academic literature flags this as unresolved: a Bayesian posterior score has no frequentist calibration, so there is no principled way to set a threshold guaranteeing, say, at most one false accusation in 10,000 documents.

So today the mark is a transparency promise that nobody outside Anthropic can exercise.

## Coverage — verified

- **Surfaces (Help Centre, verbatim):** marking runs "across **Claude Platform (API)**, Claude, Claude Code, Claude Cowork, and Claude Tag", worldwide. **The API is explicitly included** — so every Claude-powered legal tool inherits this, whether or not its vendor mentions it.
- **Models:** "Claude models launched on or after August 2, 2026 will support machine-readable marking at launch." Earlier models fall in an EU transition period; Anthropic says it is "working to add watermarking for those models as well."
- **Opt-out:** neither primary page documents one. Press reporting says none exists on any plan including enterprise. *(Treat "no opt-out" as press-sourced, not Anthropic-stated.)*
- **Files:** `.svg`, `.png`, `.jpg` get signed **C2PA** provenance metadata. Unlike the text watermark this **is** strippable — format conversion, re-saving in a non-C2PA tool, or a screenshot removes it.

## Why now: the EU AI Act — and a correction

The EU **Code of Practice** was signed July 2026; **Article 50** transparency obligations became applicable **2 August 2026**, the same day marking began. That timing is the whole explanation.

**Article 50(2), verbatim:**

> "Providers of AI systems, including general-purpose AI systems, generating synthetic audio, image, video or text content, shall ensure that the outputs of the AI system are marked in a machine-readable format and detectable as artificially generated or manipulated."

### ⚠️ Correction to session 1

Session 1 recorded, from a search-engine summary of legal-sector commentary, that "Article 50 prohibits deliberately removing or altering AI markings, so stripping a mark off something you file turns a passive fact into an affirmative act with intent." That was flagged as needing verification. **It does not survive verification.**

Reading Article 50 directly: **it contains no prohibition on removing, altering or stripping AI markings.** It obliges *providers* to apply markings. It does not bind downstream users, and it does not address tampering with a mark once applied. A lawyer who strips a watermark is not breaching Article 50 — Article 50 does not speak to them at all.

This is worth keeping in the post rather than quietly dropping: a confident, specific, legally-flavoured claim about the watermark, circulating in legal commentary, that is not in the text. It is the same failure mode as the consumer panic, wearing a suit.

*(Fairness note: other duties may bite — Art. 50(4) deployer disclosure for deepfakes, professional conduct rules, candour to the court, client engagement terms. The narrow correct claim is only that **Art. 50 itself** imposes no anti-removal duty. Don't overclaim in the other direction.)*

Also note Art. 50's exemptions from the marking duty: systems performing an "assistive function for standard editing" or not "substantially alter[ing] the input data".

**Jurisdiction:** this is an EU-driven obligation applied globally. Singapore has no equivalent mandate. Flagged as EU-centric — the SG/ASEAN angle is that regional practitioners inherit an EU compliance artefact they had no say in, delivered through a US vendor.

## The backlash — a catalogue of misconceptions

Raw material for the teaching structure. Each fear maps to a wrong mental model.

| What people said | What's actually true |
|---|---|
| "It's hidden characters — I'll strip them" | Nothing is added; no characters exist to strip. Removal tools that appeared within days mostly work by *paraphrasing*, i.e. rewriting your text. |
| "This is surveillance / traceable to me" | Nothing in the watermark or its key can recover information about the user. |
| "It'll catch me using AI at work or school" | It flags Claude *involvement*, including a proofread of your own writing. It shows neither authorship nor proportion. |
| "Anthropic is policing users" | It is EU AI Act compliance. Anthropic ships no ability to see who generated what. |
| "Detection = proof" | "Not fully conclusive." Length-limited, no published calibration, and the detection API hasn't shipped. |
| **"Stripping it breaches Art. 50"** *(the lawyers' version)* | **Art. 50 has no anti-removal provision. It binds providers, not users.** |

Reaction coverage: TechCrunch (users angry it will "catch them" at jobs and classes), Inc. (subscriber backlash), The Next Web (removal tools spawned within days), kingy.ai ("Why I Cancelled Claude Over Its Invisible Watermark"), The New Stack ("survives copy-paste, but not the real dev workflow").

## Prior legal-sector coverage (the differentiation problem)

- **Artificial Lawyer** — "Claude's Watermarks and their Legal Sector Impact" (17 Aug 2026). *Read in full.* Angle: disclosure friction where clients ban AI or judges are sceptical; AI-driven pricing cuts becoming visible to opponents; watermark persistence as clauses are recycled into new contracts, producing mixed signatures across templates; unverified worry about whether word-choice changes hurt legal precision. Concludes watermarks are "largely benign" and shift responsibility to the model makers. **Does not** develop the entropy point, and **repeats** the Art. 50 removal error.
- **Legal IT Insider** — "Claude's text watermark — Does it matter in an AI output world?"
- **nonbillable.co.uk** — "Claude is getting a watermark. That could matter for every law firm using AI"
- **smithstephen.com** — "The Claude Watermark Is Real. The Thing You're Worried About Isn't." Closest to a plain debunk; our post must go past that.

**Where the gap is:** everyone has covered *what the watermark does to you*. Nobody has used it to explain *how the model works* — that sampling is probabilistic, that entropy is the medium the watermark is written in, and that this is why it behaves so unintuitively. That is the tutorial.

## Sources

Primary (verified this session):
- Anthropic, "How Claude's text watermarking works" — https://www.anthropic.com/news/claude-text-watermark
- Anthropic Help Centre, "How Claude marks AI-generated content" — https://support.claude.com/en/articles/16266773-how-claude-marks-ai-generated-content
- EU AI Act Article 50 — https://artificialintelligenceact.eu/article/50/

Technical:
- "Scalable watermarking for identifying large language model outputs", *Nature* (2024) — https://www.nature.com/articles/s41586-024-08025-4
- "On Google's SynthID-Text LLM Watermarking System: Theoretical Analysis and Empirical Validation" — https://arxiv.org/html/2603.03410v2

Press / reaction:
- TechCrunch, 11 Aug 2026 — https://techcrunch.com/2026/08/11/anthropic-says-it-will-watermark-text-generated-by-its-ai-models/
- TechCrunch, 15 Aug 2026 — https://techcrunch.com/2026/08/15/anthropic-shares-more-details-about-how-claudes-new-watermarks-will-work/
- TechCrunch, 12 Aug 2026 (backlash) — https://techcrunch.com/2026/08/12/some-claude-users-are-mad-that-anthropics-new-watermarks-will-catch-them-cheating-at-their-jobs-classes/
- Fortune, 11 Aug 2026 — https://fortune.com/2026/08/11/anthropic-claude-watermark-ai-text-police-ai-slop/
- Forbes (Roeloffs), 11 Aug 2026 — https://www.forbes.com/sites/maryroeloffs/2026/08/11/claude-will-put-invisible-watermarks-on-ai-text-and-images-and-the-internet-isnt-happy/
- The New Stack — https://thenewstack.io/anthropic-claude-text-watermark/

Legal sector:
- Artificial Lawyer, 17 Aug 2026 — https://www.artificiallawyer.com/2026/08/17/claudes-watermarks-and-their-legal-sector-impact/
- Legal IT Insider — https://legaltechnology.com/claudes-text-watermark-does-it-matter-in-an-ai-output-world/

## Open questions — status

1. ~~Is the API watermarked?~~ **RESOLVED: yes, explicitly — "Claude Platform (API)".**
2. ~~Detection API shipped? Published false-positive rate?~~ **RESOLVED: not shipped ("soon"); no rate published.**
3. ~~Does Art. 50 prohibit removing markings?~~ **RESOLVED: no. Session-1 claim corrected above.**
4. ~~Older models covered?~~ **RESOLVED: not yet; EU transition period, Anthropic "working to add" it.**
5. **STILL OPEN:** what happens when Claude edits a user-supplied document (Claude for Word tracked changes)? Anthropic says proofread text carries minimal signal, which suggests light edits barely register — but the proportion question is unanswered and matters for the "did you use AI on this contract" scenario.
6. **NEW:** does the watermark meaningfully degrade output quality? Artificial Lawyer raises it; no empirical evidence either way. Probably unanswerable — flag as unknown rather than speculate.
