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
