# Research: Claude Watermarking

**Last updated:** 2026-08-22 (session 2 — primary sources now VERIFIED)
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

## Attack research — the asymmetry (verified against the primary source)

Jovanović, Gloaguen & Vechev, **ETH Zürich SRI Lab**, 20 Dec 2024 — "Probing Google DeepMind's SynthID-Text Watermark" (https://www.sri.inf.ethz.ch/blog/probingsynthid).

⚠️ **A search-engine summary of this work conflated two schemes and got it backwards.** The widely-repeated "80%+ success forging watermarks onto human text for under $50" figure is from watermark-*stealing* work against **standard Red-Green / KGW** schemes — **not** SynthID-Text. The actual SynthID-Text numbers are close to the opposite. Verified directly:

| Attack | Against SynthID-Text | Against KGW / Red-Green |
|---|---|---|
| **Spoofing** (forge the mark onto human writing) | **4%** with 30k black-box queries; **15%** at 90k | 80%+ |
| **Scrubbing** (remove the mark) | **>90%** by paraphrase alone; near-total with stealing assistance | lower — SynthID is *worse* here |

Caveats the authors state: they "did not attempt to optimize the algorithm specifically for this case" for spoofing, and they tested on **Llama2-7B locally, not a deployed system**. So these are indicative, not measurements of Claude.

**The asymmetry this establishes — probably the thesis of the post:**

> The watermark is **easy to remove and hard to fake.**

Which inverts the entire panic:
- Anyone who actively wants to evade it can, trivially, by paraphrasing — and Anthropic itself says full rewrites destroy it.
- Anyone afraid of being *framed* — human writing forced to test positive — is worrying about the attack that demonstrably doesn't work well against this scheme.

So the watermark reliably catches exactly one group: **people who weren't trying to hide anything.** That is the signature of a compliance artifact, not an enforcement mechanism. Every fear in the backlash requires it to be the reverse.

Note this is also *mechanically* downstream of the entropy point: paraphrasing works because it re-rolls every token choice the watermark was written into.

## Copyright — the second ridiculous argument

Two distinct claims circulating, both weak:

**1. "The watermark proves it's AI, so you lose copyright."** The US Copyright Office's Part 2 report (Jan 2025) holds that copyrightability turns on **human authorship**, with wholly AI-generated material unprotectable. But the watermark cannot speak to the thing the test actually turns on: it shows *processing*, not authorship, cannot distinguish "Claude wrote this" from "Claude edited this," and says nothing about proportion. It is evidence of contact, offered against a question about contribution. Anthropic states it "says nothing about ownership or authorship and does not change a user's rights under the terms."

**2. "Removing it violates DMCA §1202 (copyright management information)."** The mirror image of the Art. 50 error. Problems: §1202 CMI means information identifying the work's **title, author, copyright owner, terms** — and Anthropic is explicit that the watermark "carries no identifying information" and cannot be traced to any person or organisation. It identifies nobody, so it is hard to call it CMI. §1202(b) also requires knowing the removal will "induce, enable, facilitate, or conceal **infringement**" — and Anthropic assigns output rights to the user, so there is typically no infringement to conceal. Statutory damages are $2,500–$25,000 per violation, which is why the theory gets repeated despite being weak.

**Pattern worth naming in the post:** the legal profession produced *two* confident, statute-citing prohibition theories — EU Art. 50 and DMCA §1202 — about removing a mark that identifies nobody and can be erased by paraphrase. Same failure mode as the consumer panic, better dressed.

## Additional prior coverage found
- Search Engine Journal — "What A Claude Watermark Can & Can't Tell You About Authorship" (covers the authorship point).
- UNU C3 — "Provenance, Not Proof: What Claude's Watermark Actually Tells You" (closest framing found to the provenance/proof distinction).
- Security Boulevard — "Claude's Watermark Won't Derank You. Bad Content Will."

These occupy the "provenance ≠ proof" ground. **Still unoccupied: the entropy explanation, the remove/fake asymmetry, and the two failed legal theories.**

## Testing "easy to remove" — what is and isn't testable (2026-08-22)

Houfu asked to test the removal claim. **It cannot be tested — by us or by anyone outside Anthropic — and that is itself the finding.**

### Why the direct test is impossible

There is no public detector. Anthropic has shipped no detection API (still "soon" as of 22 Aug, per a Nature piece quoting an Anthropic spokesperson) and has published **no true-positive rate, no false-positive rate, no minimum length, and no confidence thresholds**. Without a detector there is no before/after measurement, so no removal claim about Claude output is currently falsifiable in public. Existing third-party "AI detectors" perform writing-style classification, not watermark verification.

This cuts both ways and should be stated that way in the post: "easy to remove" is *also* something the people selling removal cannot demonstrate.

Best available evidence remains indirect, and must be labelled as such:
- ETH Zürich: >90% scrub by paraphrase — but on **Llama2-7B locally**, not deployed Claude.
- Anthropic's own admission that full rewrites destroy the mark.

*(A TechTimes piece, "Four Cents Strips Claude Watermark; Anthropic Detection API Confirms Evasion Oracle", 12 Aug, asserts a successful removal test. It returned HTTP 403 and could not be read. Given that no detection API is public, treat the headline as unverified — do not cite it.)*

### The test that IS possible, and its result

The removal industry that appeared within days is built on **the exact misconception this post is about**. Several of the top-ranked "Claude watermark remover / checker" tools (cudekai, overchat, StealthGPT, claudewatermark.com, claudewatermark.rip, favtutor, chatgptwatermarkremover.org, plus GitHub repos) describe their method as detecting and stripping **zero-width Unicode characters** — "JavaScript regular expressions to detect and remove zero-width characters"; checkers that "list every known invisible character they find, with its codepoint and position."

Anthropic: *"Nothing is added to the text and there are no hidden characters."*

**Experiment run 2026-08-22.** Scanned every Claude-generated file in this post folder for invisible codepoints (U+200B–U+200F, U+2060–U+206F, U+FE00–U+FE0F, U+E0000–U+E007F, U+FEFF, U+00AD, U+180E, U+2800):

| File | Characters | Hidden/zero-width found |
|---|---|---|
| research.md | 20,701 | 0 |
| discussion.md | 13,933 | 0 |
| pitch.md | 6,248 | 0 |
| **Total** | **40,882** | **0** |

The scan initially flagged 4 × U+FE0F. All four were traced to emoji variation selectors attached to `⚠` (U+26A0) that Claude typed deliberately — not watermark artefacts. Net: **zero hidden characters**.

**What this establishes:** the character-stripping removers are scanning for something that is not there. They will report "clean," and the user will believe they removed a watermark they never touched. The tools that *do* alter the text work by structural rewrite — i.e. paraphrasing — which is exactly what Anthropic says destroys the mark. So the industry splits into tools that do nothing and tools that replace your writing.

Caveat to state honestly: this scan proves Claude output carries no hidden characters. It proves **nothing** about whether the statistical watermark is present or removable, because nobody can measure that yet. That limit is the point.

### Still worth doing before drafting
Visit two or three of those tools directly and record what they actually claim and do, rather than relying on search-engine descriptions of them. **Requires the user's go-ahead** — it means pasting text into third-party services.

## Open questions — status

1. ~~Is the API watermarked?~~ **RESOLVED: yes, explicitly — "Claude Platform (API)".**
2. ~~Detection API shipped? Published false-positive rate?~~ **RESOLVED: not shipped ("soon"); no rate published.**
3. ~~Does Art. 50 prohibit removing markings?~~ **RESOLVED: no. Session-1 claim corrected above.**
4. ~~Older models covered?~~ **RESOLVED: not yet; EU transition period, Anthropic "working to add" it.**
5. **STILL OPEN:** what happens when Claude edits a user-supplied document (Claude for Word tracked changes)? Anthropic says proofread text carries minimal signal, which suggests light edits barely register — but the proportion question is unanswered and matters for the "did you use AI on this contract" scenario.
6. **NEW:** does the watermark meaningfully degrade output quality? Artificial Lawyer raises it; no empirical evidence either way. Probably unanswerable — flag as unknown rather than speculate.

## Not an EU story: the industry-wide picture (verified session 3, 2026-08-22)

**User steer:** the EU AI Act is not a subject of this post. One line only — watermarking is what every model company is going to do, and China is doing it with less hesitation. Verification below turns that instinct into something stronger.

### Claude is late, not first

**Google shipped SynthID-Text across Gemini on 23 October 2024** — nearly two years before Anthropic, using the same underlying technique Anthropic adopted. Reported at scale: across ~20 million Gemini responses, watermarked and unwatermarked outputs showed no significant difference in user thumbs-up/thumbs-down rates. The backlash Anthropic absorbed in August 2026 did not happen to Google in October 2024, for a mechanism of the same kind.

*Post value: the outrage tracks the announcement, not the capability. People have been using watermarked model output for two years without noticing, which is itself evidence the mark is imperceptible — the exact claim they refuse to believe.*

### OpenAI still hasn't shipped text watermarking

As of August 2026: images only (SynthID plus C2PA Content Credentials, across ChatGPT, Codex and the API). Text watermarking researched, never deployed. So the field is genuinely split — not "everyone already does this."

### China: mandated, and stronger than Anthropic's

**Measures for Labeling AI-Generated Synthetic Content** — CAC with MIIT, Ministry of Public Security and NRTA — **effective 1 September 2025**, eleven months before Anthropic began marking. Covers text, image, video and audio. Two required layers:

- **Explicit labels** — visible on-screen text or graphics.
- **Implicit labels** — digital watermark or metadata embedded in the file, carrying **the service provider's name and a content identifier**.

Distribution platforms (WeChat, Douyin, Weibo have implemented) must detect and reinforce labelling, classifying content as confirmed / possible / suspected AI-generated.

**The beat this gives the post:** what users feared Claude's watermark was — an embedded identifier that ties content back to a source, with platforms scanning for it — is a real deployed regime. It is simply not this one. Anthropic's mark carries no recoverable information about the user; China's implicit label carries the provider name and a content ID by regulation. The fear is not paranoid in general. It is misaddressed.

### Sources (this section)

- China Law Translate, "Measures for Labeling of AI-Generated Synthetic Content" — https://www.chinalawtranslate.com/en/ai-labeling/
- Loeb & Loeb, "China's AI-Labeling Measures and Mandatory National Standards Take Effect September 1" — https://www.loeb.com/en/insights/publications/2025/03/chinas-ai-labeling-measures-and-mandatory-national-standards-take-effect-september-1
- Covington Inside Privacy, "China Releases New Labeling Requirements for AI-Generated Content" — https://www.insideprivacy.com/international/china/china-releases-new-labeling-requirements-for-ai-generated-content/
- AI Weekly, "DeepMind's SynthID-Text watermark ran live across Gemini" — https://aiweekly.co/alerts/deepminds-synthid-text-watermark-ran-live-across-gemini
- aidetectors.io, "Does ChatGPT Watermark Text? OpenAI's 2026 Status" — https://www.aidetectors.io/blog/chatgpt-digital-footprint-watermarks-2026

*(Chinese-regime details are from English-language law-firm summaries and China Law Translate, not the Chinese original. Adequate for a one-paragraph comparison; do not build a compliance claim on it.)*

## Anthropic's watermarking FAQ — verified primary source (added 2026-08-23)

**Source:** https://www.anthropic.com/news/claude-text-watermark, published **14 Aug 2026**. Announced on X by @AnthropicAI on 14 Aug as "an FAQ to answer some of the questions we've received about watermarking." Fetched and read directly — not a search summary.

**Why this page matters structurally:** Anthropic wrote a FAQ *because of the reaction*. The page is, in effect, the vendor's own catalogue of the misconceptions circulating — which makes it a primary source about the reaction, not only about the mechanism.

### Verified quotes

| Claim | Exact wording |
|---|---|
| Reason | "we, along with several other major AI providers, are implementing this change to comply with the EU AI Act" |
| Instrument | Signed the **"EU Code of Practice on Transparency of AI-Generated Content" in July 2026**, with **"around 190 total signatories"** |
| Quality | "does not have any practical impact on the quality or content of Claude's outputs" |
| Perceptibility | "The difference between watermarked and un-watermarked text will not be distinguishable to readers" |
| Hidden characters | "Nothing is added to the text and there are no hidden characters" |
| Cost | "Watermarking doesn't require extra tokens, and will not be more expensive" |
| Identification | carries "no identifying information and can't be traced to a specific person, organization, or chat" |
| Not Claude-only | "Watermarking won't be specific to Claude" |
| Mechanism | a version of **SynthID-Text** (Google DeepMind, Nature 2024); changes "the source of the randomness used to pick among words" |
| Detector ceiling | "can only answer the question **'What is the likelihood this was partly written by Claude?'**"; "doesn't confirm whether the text was human-written"; "can't tell whether the text was written by a different AI" |
| Entropy, in their words | "sparser on factual passages where there are fewer choices that can be made without decreasing the accuracy" |
| Detection API | "We will soon be offering a watermark detection API. We're in the process of working out the details of its implementation." |
| Removal | "Light editing probably won't remove the watermark completely; a complete rewrite where every word is replaced will." |

### Two corrections to our own working assumptions

**1. "Switch models" has a better answer than the one we had.** The locked pitch answered Houfu's first instinct with a stylistic conjecture — weaker models are lower-entropy and more stereotyped, so you trade a cryptographic mark for a stylistic tell. Plausible, but unevidenced. The actual answer is in the FAQ and is much stronger: **~190 signatories to a July 2026 EU Code of Practice, and "watermarking won't be specific to Claude."** There is no un-watermarked major provider to switch to. Prefer the evidenced answer; the stylistic-tell point can survive as a secondary line, labelled as conjecture.

**2. "Easy to remove" needs narrowing.** Anthropic: "**Light editing probably won't remove the watermark completely**; a complete rewrite where every word is replaced will." ETH Zürich's >90% scrub figure is for **paraphrase**, on Llama2-7B, not deployed Claude. So the accurate claim is *rewriting* removes it, not *editing*. The old pitch's protected line "easy to remove and hard to fake" overstates the removal half and should not be carried forward unexamined.

### Also new

- The instrument is a **Code of Practice signed by ~190 parties**, not only Art. 50 itself. This is the evidenced form of the user's earlier steer that "watermarking is what every model company is going to do" — keep it to a line, per that steer.
- Detector ceiling is "**partly** written by Claude" — the vendor's own words cap what any future detection API can deliver. This is the strongest available refutation of the vindication reaction, and it needs no argument from us.

## Thariq Shihipar's explainer artifact — provenance (added 2026-08-23)

- **"Same Words, Different Dice"** — https://claude.ai/code/artifact/803916fd-3bc1-465f-8738-d4ece6fc5071
- **Author:** Thariq Shihipar (@trq212), who **works at Anthropic** (his own announcement: joined to build "demos and prototypes that highlight new capabilities").
- **Source post:** https://x.com/trq212/status/2088721023223132213 — 4:14 AM, **16 Aug 2026**, ~1.7M views, quote-tweeting Anthropic's FAQ announcement. His framing is modest and should be honoured: *"Watermarking without quality loss is a bit unintuitive, doesn't feel like it should work. I made this artifact with Claude to help me understand how it works, sharing in case it's helpful."*
- **Content seen so far** (rendered in browser; full text not extractable — cross-origin sandboxed iframe): header "Why Watermarking doesn't affect quality"; section 01 "Claude doesn't generate the same output for the same input" — Claude writes a word at a time, and where several continuations are equally good (a **high-entropy** choice) a random number decides; each decision becomes context, so an early fork sends the whole answer down a different path. Interactive: *Generate again* shows the split; clicking a highlighted choice shows the roads not taken. Explorer modes include **Creative prose** and **Factual recall**.
- **Status caveat — important.** claude.ai's own banner reads "Content is user-generated and unverified." It is one Anthropic employee's personal learning aid, not Anthropic documentation, and its headline claim (no quality impact) is a claim made by someone at the company that shipped the feature. **Use it to teach the intuition; cite the Gemini ~20M-response data to evidence the quality claim.** A post about people over-reading signals must not promote a demo into evidence.

### A third reaction pole, found in the replies

Responses to the FAQ and the artifact include people asserting the watermark visibly degrades output:
- Nick Dobos (https://x.com/NickADobos/status/2088350712359256440), on Anthropic's quality claim: "This is a lie. You literally say you change the wording"
- Shane Killian (https://x.com/shanedk/status/2089117409143566745): "I really don't get how anyone can't immediately see that the watermarked version is quite definitively worse"

**Unverified — read via search results, thread replies not yet fetched directly. Do not quote in the draft until read in the thread itself** (this post has already taken two corrections from search-summary conflation).

**Why it matters:** a third pole alongside dread and glee — people who look at two samples drawn from equally-ranked continuations and confidently see one as worse. **But be fair:** "equally good by the model's own scoring" is not identical to "equally good to a human reader," so the objection is arguable, not merely ignorant. And these are named real people — per the CLAUDE.md framing-risk rule, characterise the reaction without making specimens of individuals.

## Verified 2026-08-24 (session 6 — two citations the draft was relying on without sources)

### 1. The Co-Authored-By floor: 4% of public GitHub commits
- **Source:** SemiAnalysis, "Claude Code is the Inflection Point" — https://newsletter.semianalysis.com/p/claude-code-is-the-inflection-point
- **Figure:** Claude Code accounted for **~4% of all public GitHub commits**, measured by the `Co-Authored-By: Claude` trailer, tracked through **2 February 2026** (~135,000 commits/day). SemiAnalysis projects 20%+ of daily commits by end-2026.
- **Explicitly a floor, in the source's own framing:** the trailer is opt-out (many developers disable it) and private repositories are not measured. The draft's "called that a floor" is the source's characterisation, not ours.
- **⚠️ Staleness caveat:** later third-party trackers (coremention.com, serpsculpt.com — both low-quality, not primary) put the share nearer **9.7% by mid-2026**. The draft therefore dates the figure ("SemiAnalysis put it at 4% in February") rather than presenting it as current. Do not un-date it. If a fresher SemiAnalysis number appears before publish, use it.
- Note: this is a DIFFERENT 4% from the one already in this file's removal/spoofing table (4% spoofing success at 30k black-box queries). Do not conflate.

### 2. Anthropic's support article contradicts the announcement page
- **Source:** https://support.claude.com/en/articles/16266773-how-claude-marks-ai-generated-content (fetched 2026-08-24)
- **Verbatim:** "When a supported Claude model generates text, it weaves an imperceptible watermark directly into the text itself."
- **Verbatim:** "You won't see it, and it doesn't change the meaning, quality, or readability of Claude's response."
- **Verbatim:** "Because the watermark is part of the text, it will travel with the text when it's copied and pasted elsewhere, and may persist through some editing."
- **Why it matters:** this is the added-object reading, published by Anthropic, and it sits against the announcement page's "Nothing is added to the text and there are no hidden characters." The support page never states the mechanism. Beat 6 now uses this as a fairness concession — people who landed on the hidden-tag picture may well have read a real Anthropic page and drawn the reasonable conclusion from it.

## Re-verification sweep 2026-08-24 (Jina key rotated; all load-bearing claims re-checked against primary sources)

**Everything the draft relies on held. No corrections needed.** Details:

### Anthropic announcement — all five quotes re-confirmed verbatim (live page, re-fetched)
https://www.anthropic.com/news/claude-text-watermark — "Nothing is added to the text and there are no hidden characters"; "no identifying information and can't be traced to a specific person, organization, or chat"; "one can only answer the question 'What is the likelihood this was partly written by Claude?'"; "sparser on factual passages where there are fewer choices"; "Light editing probably won't remove the watermark completely; a complete rewrite where every word is replaced will." The mechanism sentence the draft quotes ("instead of using an arbitrary random number generator... uses the key and a few words that come before") is also verbatim.

### Gemini / SynthID-Text quality claim — corroborated by three independent sources
Nature, "Scalable watermarking for identifying large language model outputs," 23 Oct 2024 (https://www.nature.com/articles/s41586-024-08025-4), plus IEEE Spectrum and MIT Technology Review same-day. ~20 million Gemini responses; no significant difference in thumbs-up/thumbs-down between watermarked and unwatermarked. Oct 2024 → Aug 2026 = **22 months**, so the draft's arithmetic is right. This is the best-sourced claim in the post and correctly carries the degradation refutation.

### SemiAnalysis 4% — confirmed as a February 2026 figure, correctly dated in the draft
"Claude Code is the Inflection Point," published **5 Feb 2026**. No credible newer SemiAnalysis number exists; the ~9.7% figure circulating traces only to low-quality third-party trackers (coremention, serpsculpt) and should not be used. Note the figure is publicly contested (r/ClaudeCode "calling bull" thread argues it overstates productive impact) — the draft's framing survives this, because it attributes the number and uses it only as an opt-out floor, not as a productivity claim.

### ⚠️ NEW — a limitation the draft does not currently mention: detection needs length
From the same announcement page, verbatim: *"Detecting a watermark also doesn't work well on small samples, where there are fewer word choices and thus less information to go on. As a passage increases in length, confidence about Claude's involvement increases too."*

And on proofreading, verbatim: *"If you hand Claude a piece of writing and ask it to edit only the grammar and punctuation and nothing else, the watermark can only live in the handful of corrections, which might be too few to register."*

**Why this matters for the draft.** The post tells the reader the detector returns a probability, but never that the probability depends on passage length. For the glee pole this is a second, independent reason the capability isn't what people celebrated — a short email or a paragraph may simply be too small to register. It is also the direct answer to a practitioner question the post currently leaves open ("can this catch my three-sentence email?" — no). Suggested as a ~25-word addition to the glee pass; not applied, flagged for the user's decision. Headroom exists (draft 1,926 of a 2,145 ceiling).

**Note:** this corrects a widely-repeated assumption that any Claude involvement, even a spellcheck pass, leaves a usable mark. Anthropic says the opposite. Do not let the draft imply otherwise.

### Session-5 open item CLOSED: the Shihipar artifact is not obtainable by tooling
`Artifact action:"read"` on https://claude.ai/code/artifact/803916fd-3bc1-465f-8738-d4ece6fc5071 now returns a definitive reason rather than failing silently: *"this artifact is served to you as a public (non-member) reader, and reading public artifacts that way is not enabled yet."* This is a platform limitation, not a fetch problem — stop retrying it. If the content is ever wanted, Houfu must open it and save it manually. Per the pitch's evidence rules the artifact is a teaching aid and never evidence, and the Gemini data already carries the quality claim, so **this is not a blocker and the post does not need it.**

## Two independent sources found 2026-08-24 (Jina restored) — both corroborate, neither contradicts

### Sebastian Raschka, "How Claude Watermarks AI-Generated Text" (22 Aug 2026)
https://magazine.sebastianraschka.com/p/claude-watermarking — 52 slides + 48-minute walkthrough by a serious ML author.

**Independently validates the draft's mechanism explanation, in the same shape the draft uses.** Text → logits → sampling, with the sampling step controlled by the watermarking key; his worked example is two interchangeable tokens ("gray" vs "overcast") decided by key-derived scores — which is precisely the draft's "words the model was already willing to write, decided by a loaded coin." He names the algorithm **tournament sampling**, and confirms detection "requires the secret key and the watermarking functions," corroborating the draft's no-public-detector position.

**Use:** this is the answer if a technical reader challenges beat 4. It is also the citation for Marcus's OUT-of-scope wish to name "tournament sampling" — the term is now attested outside the DeepMind paper.

### andrea saez, "Putting Claude's watermarking to the test" (17 Aug 2026)
https://dreasays.substack.com/p/putting-claudes-watermarking-to-the

**This is the strong evidence for the length-dependency point flagged earlier today.** Verbatim:
- "The statistical confidence behind watermark detection depends on having enough tokens with real candidate diversity to build a pattern from. **Short outputs don't provide enough volume**, and shorter content often has only one plausible next token at each step."
- "**Short outputs, a tweet, a headline, a two-sentence reply, simply don't give the statistics room to work.** You need volume for the pattern to become improbable-by-chance rather than merely unusual."
- "**Low-entropy content (like short LinkedIn posts) is watermark-resistant almost by accident.**"
- "**Long-form content is where this works best.**"
- On removal, consistent with the draft's Anthropic ceiling: getting below threshold "generally takes rewriting most of the piece, translating it, or otherwise touching a large share of the actual word choices, not just light copyediting."
- On detectors: "Anthropic hasn't published the exact scheme... there is no way of currently building a viable detector."

**Why this matters beyond the length point:** saez arrives independently at the draft's central thesis — that the mark exists only where entropy does — and reaches it by testing rather than by reading. "Watermark-resistant almost by accident" is the same insight the post builds its refutations on, from a different direction. Corroboration, not competition.

### ⚠️ Honest note on the pitch's differentiation claim
`interrogation.differentiation` (written 23 Aug) claims the entropy explanation as unoccupied territory — "existing coverage all occupies 'provenance is not proof'." **That is now only partly true, and both of these pre-date the pitch** (17 and 22 Aug); the first research sweep simply missed them. Raschka is a technical teardown for ML readers; saez is a practitioner stress-test. **Neither does what this post does** — the misreading as the specimen, aimed at lawyers, with AI literacy as the payload — so the differentiation holds. But the post is no longer the only place to learn the mechanism, and any claim to be *first* or *only* on the mechanism would now be wrong. The draft makes no such claim; keep it that way.
