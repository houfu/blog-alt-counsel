# Discussion Log: TechLaw.Fest 2026 Reflections

## Session 2026-09-12 — Branch scaffold + pitch research

**Context:** Houfu attended TechLaw.Fest 2026 (9–10 Sep) and wants to write his reflections. He
intends to write most of the prose himself and asked for two things: a scaffolded branch, and a
pitch finessed with research first.

**Setup:**
- Branch `techlawfest-2026` off `main`
- Folder `posts/techlawfest-2026/` with `pitch.md`, `research.md`, `discussion.md`

### Original pitch (Houfu's words, preserved verbatim in pitch.md)

Two "dark" takeaways: (1) junior lawyers at risk of being left behind while the focus stays on
personal productivity, ROI and security/harm prevention; (2) LawNet 4.0 has doubled down on adding
sources rather than rethinking strategy, with real A2J consequences as the global vendors move to
agentic products.

### Pitch-time verification (the CLAUDE.md rule: a pitch is a hypothesis, not a finding)

**Verified and safe to build on:**
- "11 years in" — correct, 11th edition. CJ Menon's 2025 keynote marked the tenth anniversary.
- The LawNet critique — **strongly** supported. Of the six LawNet items announced from the TLF 2026
  podium (Justice Kwek Mean Luck, Day 2), five are corpus expansion or corpus organisation. Not one
  is a workflow, drafting or agentic capability. The 2026 release notes say the same thing.
- "Global vendors moved on" — verified. Lexis shipped Protégé Work (May 2026); Thomson Reuters
  shipped fully agentic CoCounsel GA (Aug 2026).

**Corrected before it could do damage:**
- An early search result attributed the theme "With Everyone" (from a "We First" society speech) to
  TLF 2026. Wrong — it belongs to another event. The actual theme is **"From Foundation to Frontier:
  The Role of Law Amidst Change."** Caught by re-reading the source rather than trusting the snippet.
  Had this gone unchecked it would have become the post's central irony.

**Flagged as needing refinement — takeaway 1:**
The claim as framed is rebuttable in one sentence. Singapore's institutions talked about juniors
constantly in 2026: CJ Menon and Minister Tong co-lead an attrition-and-AI committee (Jan 2026); the
Mass Call address in April was titled "A Profession in Transition — Preparing and Supporting the Next
Generation"; reported figures include 1 in 3 new lawyers possibly quitting within three years and 92%
of new lawyers already using AI. Proposed refinement: the gap is not attention, it is that the
juniors conversation is **pastoral** (retention, wellbeing, billable hours) while the AI conversation
is **operational** (throughput, ROI, security), and nobody owns the question of how a junior acquires
judgment when the work that used to build it is the work being automated. **Awaiting Houfu's
confirmation that this matches what he actually saw.**

### Findings that changed the shape of the pitch

1. **The bridge between the two takeaways.** Thomson Reuters put agentic AI into 200+ law schools in
   Jan 2026 under the line "120,000+ future lawyers shouldn't meet agentic AI on their first day at
   work." LawNet ran a training workshop in July 2026 teaching *prompt engineering techniques for
   legal research* — the exact critique Houfu made in `lawyers-prompt-engineering-wrong` a year ago.
   One juxtaposition joins both takeaways and links to the predecessor post.
2. **The locked shelf.** LawNet's own Sep 2026 release notes: AI Search now draws on Academy
   Publishing books, but full book access "requires a valid purchase of the digital book or an
   Academy Library subscription." The AI grounds answers in sources the reader may not be able to
   open. Strongest A2J detail available, and it is LawNet's own documentation.
3. **The counter-case exists and should be paid.** LawNet's AI summaries flag low-confidence
   paragraphs yellow and unsourced terms red with footnotes to source; Search Logs exist because the
   team admits non-determinism. That is better-surfaced hallucination engineering than the global
   vendors show. This gives the "neither is wrong" move real material: LawNet optimised for
   verifiability, the vendors optimised for doing the work.
4. **LegalWeek Asia (new, not in the original pitch).** Announced 10 Sep 2026, during TLF itself:
   Law.com/ALM and SAL will launch LegalWeek Asia, inaugural 28–29 Sep 2027, with TechLaw.Fest
   serving as "an anchor to the core program." Material to the "11 years in, TLF remains strong"
   opening. Left **out of scope** pending Houfu's call — scope decisions are his.

### Framing risk (pitch-time check #3) — rated HIGH

"LawNet 4.0 sucks" targets a small, named, publicly identifiable team. Repo precedent:
`prompt-engineering-wrong` drew reviewer feedback that its TLF critique "borders on too critical,"
and the title was broadened from *TechLawFest Got Prompt Engineering Wrong* to *Lawyers Got Prompt
Engineering Wrong*. Recommendation recorded in the pitch: attack the strategy, never the execution or
the people; lead with credit; source every criticism to SAL's own published material. Houfu to
decide intensity.

### Status

`pitch.md` is **v1, not locked** — it carries seven `[HOUFU]` open questions, including the emotional
opening, which per the Voice Guide must come from his real experience and was deliberately left as a
marked placeholder rather than invented.

**Next:** Houfu answers the open questions, pitch is locked, then WRITE.

### Decisions — 2026-09-12 (Houfu, on the three scope questions)

1. **Takeaway 1 framing: pastoral vs operational gap.** Accepted the refinement. The post will concede
   plainly and early that the institutions *are* talking about juniors, then locate the gap in the
   disconnect rather than in absence. Added guard: the concession must appear in the draft itself, not
   only in the pitch — a reader who can rebut the premise by paragraph three stops reading.
2. **LawNet intensity: strategy critique with receipts.** The heat stays, the target moves. Lead with
   genuine credit (the yellow/red hallucination flagging, Search Logs), then dissent, with every
   criticism sourced to SAL's own podium or LawNet's own release notes. Rule recorded in beat 4: no
   adjectives doing work a citation should do.
3. **LegalWeek Asia: one line in the opening.** Sharpens "eleven years in and still strong" without
   spending budget or turning the post into three arguments. Explicitly out of scope as an argument;
   noted below as a candidate future post.

**Pitch is now v2** — scope locked, four `[HOUFU]` open questions remaining, all of which need lived
experience rather than research: the emotional opening, beat 2 specifics, a concrete LawNet task that
took too long, and whether to print LawNet pricing (2023 figure, must be re-verified).

### Candidate future post

**LegalWeek Asia / the ALM partnership.** From Sept 2027 TechLaw.Fest becomes an anchor track inside
Law.com's LegalWeek Asia (28–29 Sep 2027, Sands, 4,000+ expected). A regional conference built over
eleven editions and 26,000 participants being folded into a US event brand is its own argument about
what happens to local legal tech institutions at scale. Not this post.

## Session 2026-09-12 (cont.) — Descope to LawNet-only; peer-group research

**Houfu's question:** as a reader, should the post carry both takeaways or focus on LawNet?

**Recommendation given, and accepted: LawNet only.** Reasoning recorded because it should inform future
pitches:

1. **The two halves are not equally his.** The LawNet argument rests on evidence nobody else has
   assembled — SAL's own podium announcement read against LawNet's own changelog and its peers'. That is
   reporting. The juniors argument is assembled from the CJ's speeches, Axios and Chambers — sources any
   commentator can reach. Combining them means the weaker half borrows credibility from the stronger and
   the stronger pays in room.
2. **Cutting juniors makes the TechLaw.Fest framing load-bearing rather than decorative.** LawNet 4.0 was
   unveiled at TLF 2025; its second act was announced from the same podium at TLF 2026. The conference
   becomes the clock — a one-year report card — and Houfu is one of the few people who was in both rooms.
3. **The controversial take needs room to be fair.** Framing risk was rated HIGH and the chosen approach
   is strategy-critique-with-receipts, which only works if the credit section is genuinely paid. At 500
   words shared with another argument that credit reads as throat-clearing before the knife; at ~1,400 it
   reads as someone who actually looked. The fairness *is* the rhetorical strategy, and fairness costs
   words.
4. **Reader test:** a week later you remember "added books to its search box while the vendors made their
   products do the work," and the AI citing books you must buy to open. You do not remember the juniors
   section.

Houfu will structure the draft himself. Pitch v3 therefore carries **no beat-by-beat outline** — thesis,
scope, guardrails and an organised evidence inventory only. Noted as a preference worth repeating: when
he says he is writing it himself, hand over evidence and constraints, not a shape.

### Research round 2 — his two questions, both of which changed the argument

**"How many people have ever written about Singapore LawNet?"** Almost nobody. The only popular-register
critique found is [tomoe.asia (Jan 2023)](https://tomoe.asia/posts/2023-01-10-free-access-to-case-law-in-singapore)
on the cost of reading a State Court judgment. Academic ancestor: Loo & Findlay, "Digitised Justice: The
New Two Tiers?" (2022). Everything else is announcement coverage. Searches for LawNet criticism are
dominated by Fordham Law's `ir.lawnet.fordham.edu` repository URLs — the field is empty enough that an
unrelated American URL scheme outranks it. **This post would be close to the first public strategic
critique of LawNet.** That settles the differentiation question decisively.

**"Do other jurisdiction-specific apps have this strategy?"** No — and this reframed the critique. Every
comparable national provider responded to AI, none with corpus expansion:

- **UK Find Case Law** (National Archives) — opened the data: public API, Open Justice Licence permitting
  computational use.
- **AustLII** — non-profit charity; signed a LexisNexis agreement (29 Jul 2026) to build AI capability on
  its own data while keeping it free.
- **CanLII** — non-profit; shipped Search+ (Mar 2026) and AI plain-language summaries, with a published
  generative-AI policy framed on equitable access.
- **HKLII**, **SCC Online**, **LBox** — built or moved to workflow.

**Why this matters:** the weak argument is "LawNet should have built CoCounsel," which LawNet can rebut
in one sentence (different mission, thousands of engineers). The strong argument is that **LawNet's peer
group is AustLII and CanLII — both non-profits, both poorer, both of which found a route.** LawNet had
three exits and took none. That version has no easy answer, and it is fairer.

**Sharpest comparator is domestic:** SMU's SOLID (MinLaw-supported, open data, public API) and SMU's
Legora partnership for agentic AI in the law school, announced 9 Sep 2026 — TechLaw.Fest week. Same
country, same week, opposite bets. Also updates `budget-2026-lawyers-ai-drivers-seat`, which had SOLID
as two years away.

**Fairness checks recorded in the pitch:** CanLII litigated against Caseway AI over scraping, so corpus
protectiveness is not unique to LawNet; AustLII's route needed a vendor's money; LawNet carries statutory
obligations its peers do not.

### Candidate future post (2) — the juniors gap

The pastoral-vs-operational split: institutions talk about juniors constantly (CJ Menon's attrition
committee Jan 2026, the Mass Call address Apr 2026, the Legal Profession Symposium Jul 2026; 1 in 3 may
quit within three years; 92% already use AI), but that conversation is about retention and wellbeing
while the AI conversation is about throughput, and nobody owns how a junior acquires judgment when the
judgment-building work is what is being automated. **Wei Lin post, not a Marcus post** — identity and who
the profession is for. Research already gathered in `research.md` §3. Per series discipline, this is a
logged candidate, not a planned Part 2.
