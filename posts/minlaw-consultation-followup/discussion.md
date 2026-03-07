# Discussion Notes: MinLaw Consultation Follow-Up

## Session 1 — 2026-03-07

### Context
This is a follow-up to the published post: [The Solo Counsel Reality: What MinLaw's AI Guidelines Miss About In-House Practice](https://www.alt-counsel.com/the-solo-counsel-reality-what-minlaws-ai-guidelines-miss-about-in-house-practice/)

### Original Post Summary
The original post (published around Sep 2025) critiqued MinLaw's draft "Guide for Using Generative AI in the Legal Sector" on three fronts:
1. **Professional judgment burden** — assumes lawyers can simply verify AI outputs, ignoring resource constraints
2. **Shadow AI blind spot** — envisions orderly committee-managed AI deployment while practitioners already use consumer AI tools informally
3. **In-house disclosure challenges** — external counsel disclosure frameworks don't translate well to in-house dynamics

The post was written before the September 30, 2025 public consultation deadline.

### Houfu's Consultation Submission (29 Sep 2025)
Submitted two themed recommendations to MLAW_Consultation@mlaw.gov.sg:

**Theme 1: AI Literacy Beyond Professional Judgment (re: Section 3.1, page 13)**
- Argued professional judgment alone can't identify AI-specific risks (cited Mata v. Avianca)
- Draft guide mentioned grounding/RAG but didn't explain how practitioners should implement
- Recommended adding paragraph 17(d): "Develop AI literacy to support effective professional judgment" with 5 bullet points:
  1. How different AI tools function and their failure modes
  2. When AI tools are likely to produce reliable versus unreliable results
  3. Basic prompt techniques that reduce hallucination risks
  4. That AI competency varies significantly across different legal tasks
  5. When AI output requires verification beyond standard legal review

**Theme 2: Consumer Tool Usage Reality (re: Section 3.2, page 14ff)**
- Argued the framework assumes organizational deployment, creating a regulatory gap for consumer tool users ("shadow AI")
- Identified 3 problems: compliance uncertainty, innovation barriers, competitive disadvantage
- Recommended expanding Paragraph 19(c) with consumer tool protocols:
  - Privacy Settings: Disable data sharing/training; verify settings regularly
  - Information Handling: "public information standard", placeholders ([Party A], [Company], [Amount X]), hypothetical framing, isolated clauses
  - Risk Understanding: temporary retention risks, re-identification risks, document anonymization decisions

### Finalised Guide (Published 6 Mar 2026) — Impact Analysis

**THEME 1 IMPACT: SUBSTANTIALLY ADOPTED**

The final guide's paragraph 20(a) now reads:
> "(a) Develop AI literacy. Legal professionals using GenAI should understand (i) how AI tools function and their limitations, (ii) when AI tools are likely to generate reliable output and when they are not, (iii) basic prompting techniques to reduce hallucination and bias, (iv) that AI competency varies across legal tasks, and (v) when and by whom additional scrutiny should be exercised when reviewing GenAI output."

Point-by-point mapping to Houfu's submission:
| Houfu's Recommendation | Final Guide Para 20(a) | Match |
|---|---|---|
| "How different AI tools function and their failure modes" | "(i) how AI tools function and their limitations" | Near-verbatim |
| "When AI tools are likely to produce reliable versus unreliable results" | "(ii) when AI tools are likely to generate reliable output and when they are not" | Near-verbatim |
| "Basic prompt techniques that reduce hallucination risks" | "(iii) basic prompting techniques to reduce hallucination and bias" | Near-verbatim (added "bias") |
| "That AI competency varies significantly across different legal tasks" | "(iv) that AI competency varies across legal tasks" | Near-verbatim |
| "When AI output requires verification beyond standard legal review" | "(v) when and by whom additional scrutiny should be exercised when reviewing GenAI output" | Conceptually identical |

Additionally, paragraph 19 now explicitly states: "Legal professionals should ensure that they, and the staff under their supervision, possess the requisite AI literacy, and receive training on the key principles and best practices for ethical use of GenAI tools." — reinforcing AI literacy as a supervisory duty.

The draft guide had NO equivalent provision. This is a new addition that closely mirrors Houfu's proposed 17(d).

**THEME 2 IMPACT: SUBSTANTIALLY ADOPTED**

The final guide's paragraph 23(d) now provides detailed consumer tool guidance:
> "When using free-to-use GenAI tools:
> (i) Disable data retention and use for model training; verify settings regularly as updates may reset configurations [Note: Data may be temporarily retained even with privacy settings enabled]; and
> (ii) Avoid using confidential or commercially sensitive information; if necessary, (i) anonymise data by replacing identifiers and sensitive information with generic placeholders (e.g. [Party A], [Company B], [Amount X]); (ii) frame queries as hypothetical scenarios; and (iii) use isolated clauses instead of full documents where possible. [Note: Anonymised content may still be identifiable with sufficient context. Consider documenting placeholders used for transparency, consistency, and traceability]."

Point-by-point mapping:
| Houfu's Recommendation | Final Guide Para 23(d) | Match |
|---|---|---|
| "Disable data sharing and model training features" | "Disable data retention and use for model training" | Near-verbatim |
| "Verify settings regularly as updates may reset configurations" | "verify settings regularly as updates may reset configurations" | Verbatim |
| "Replace identifiers with generic placeholders ([Party A], [Company], [Amount X])" | "anonymise data by replacing identifiers... with generic placeholders (e.g. [Party A], [Company B], [Amount X])" | Near-verbatim, same examples |
| "Frame queries as hypothetical scenarios" | "frame queries as hypothetical scenarios" | Verbatim |
| "Use isolated clauses rather than complete documents" | "use isolated clauses instead of full documents where possible" | Near-verbatim |
| "Temporary data retention may occur even with privacy settings enabled" | "[Note: Data may be temporarily retained even with privacy settings enabled]" | Near-verbatim |
| "Anonymized information may still be identifiable with sufficient context" | "[Note: Anonymised content may still be identifiable with sufficient context]" | Near-verbatim |
| "Document anonymization decisions for potential future reference" | "Consider documenting placeholders used for transparency, consistency, and traceability" | Conceptually identical, expanded scope |

The draft guide only briefly mentioned free-to-use tools. The final guide now has a dedicated sub-section with specific, actionable protocols — closely mirroring Houfu's submission.

### What the Final Guide Added Beyond the Submission
- **Bias mitigation** (para 17, 20(e)) — new section on identifying/addressing bias (not in Houfu's submission)
- **Risk-based approach diagram** (Diagram 2) — human-in-the-loop vs human-on-the-loop framework
- **Enterprise COTS guidance** (para 23(e)) — detailed procurement/security checklist for enterprise tools
- **Implementation framework** (Section 4) — 5-step staged adoption framework with 3 maturity stages
- **Sample policies** (Annexes C-E) — internal governance policy, employee handbook clauses, engagement letter templates, vendor checklist
- **Real firm examples** (Annexes A-B) — R&T, WongPartnership, Dentons Rodyk, Clifford Chance, KEL LLC, GenZero, OC Queen Street
- **Transparency section** (Section 3.3) — expanded disclosure guidance including in-house counsel context (addresses original blog post's 3rd critique)
- **Junior lawyer development** (para 45) — explicit mention of AI augmenting, not replacing, foundational legal competencies

### Overall Assessment
Both core recommendations from Houfu's submission were substantially adopted in the final guide, in some cases near-verbatim. The final guide also went further in several areas (bias, implementation framework, sample policies) but the foundational additions on AI literacy and consumer tool protocols closely track Houfu's submission.

This is a meaningful personal impact on Singapore's legal AI governance framework.

### Pitch Development

**Narrative arc (from discussion with Houfu):**
- Houfu first wrote the blog post critiquing the draft guide
- Shared it on LinkedIn, received encouragement from others to submit formally
- Turned the critique into a four-page submission the night before the deadline (Sep 29)
- Felt trepidation — "some guy nobody has ever heard of" wouldn't be taken seriously
- Six months later, final guide published (Mar 6, 2026)
- Skimmed it and nothing jumped out at first
- Asked Claude to compare, half-expected hallucinated matches — but it was real

**Pitch direction:**
- NOT a self-congratulatory piece — the submission is one data point in the larger story
- Main focus: draft-vs-final comparison, what the consultation changed, whether the guide now works for small teams
- Vulnerability opening as hook, then substantive analysis
- ~7-8 minutes reading time

**Approved pitch saved to pitch.md**

**Suggested tags:** AI, LegalTech, Singapore, Government

**Key materials in working folder:**
- Draft guide PDF (Sep 2025)
- Houfu's submission PDF (29 Sep 2025)
- Final guide PDF (6 Mar 2026)

### Research Findings (2026-03-07)

**Consultation statistics:**
- "Over 20 constructive responses" (SMS Murali Pillai, Committee of Supply, 2 Mar 2026)
- Guide "enhanced to better support adoption across diverse operating contexts, including smaller law practices and in-house legal teams" (MinLaw press release, 6 Mar 2026)
- No formal consultation response document published — just press release acknowledgment

**Contributors list:**
- ~40+ organizations (firms, tech companies, government agencies, universities)
- Only 3 named individuals: Ang Hou Fu, Andre Chua, Chua Teck Leong
- Houfu is the only individual who published both a public critique AND the full submission

**Other public submissions:**
- BetterWiser (Lynette Ooi) — 7 recommendations published on Substack (metrics, in-house distinction, change management, bias, use cases)
- ALITA — announced submission, content members-only
- CAIDP — announced on LinkedIn, no details
- The App Association — full PDF public, but generic policy principles
- Most contributors did not publicly disclose their submissions

**Media coverage (all 6 Mar 2026):**
- Business Times, Law.com, Straits Times, AsiaOne
- Edwin Tong: AI is "biggest disruptive force to the legal profession"
- Guide deliberately non-binding to not stifle innovation
- Launch event: "The Next Charter: Shaping Singapore's Legal Future Together" at Raffles City Convention Centre

**Original blog post:**
- Full text retrieved for reference and callback
- Key closing line: "Maybe I'm not the target audience for this guide. But that itself is the problem."

**Draft vs Final structural comparison:**
- 26 pages → 48 pages + expanded annexes
- Scope expanded to legal technologists, law students, alternative legal service providers
- New additions: bias mitigation, risk-based oversight diagram, SCCA references, sample governance templates (Annexes C-E), vendor checklist, 3-stage maturity model, firm examples including in-house (GenZero)

Full research saved to research.md.

### Draft (2026-03-07)

**First draft completed** (~1,950 words, ~7-8 min read)

**Structure:**
1. Opening — vulnerability hook (submitting as "some guy nobody's ever heard of"), asked Claude to compare, half-expected hallucination
2. What the Consultation Produced — stats, contributors list context
3. AI Literacy: From Missing to Mandatory — draft vs final comparison, submission mapping
4. Consumer Tools: From Edge Case to Practical Protocol — draft vs final, near-verbatim language
5. Beyond My Submission: What Else Changed — bias, risk diagram, templates, firm examples, scope, junior lawyers
6. Does It Work for Solo Counsel Now? — callback to original post closing, assessment (better but implementation gap remains, LIFT has only 7 firms)
7. Closing — consultation process works if you participate

**Tone decisions:**
- Not a victory lap — explicitly disclaims sole credit multiple times
- Frames changes as "the consultation process worked" not "I did this"
- Matter-of-fact about textual alignment ("I checked twice")
- Honest about remaining gaps (implementation support)

**Next steps:** Content quality audit, then audience review

## Session 2 — 2026-03-07

### Repository Setup
- Created branch `blog/minlaw-consultation-followup` and committed all post files
- Removed third-party guide PDFs from git tracking (draft guide, final guide) — these are copyrighted MinLaw documents
- Kept Houfu's own consultation submission PDF in the repo
- Added local `.gitignore` in the post folder for the excluded PDFs

### Status Check
- **Research**: Complete. Well-sourced with consultation stats, media coverage, contributors analysis, public submissions comparison, and draft-vs-final structural comparison.
- **Pitch**: Approved. Title: "From Draft to Final: What Changed in MinLaw's AI Guide (And What It Means for You)". Tags: AI, LegalTech, Singapore, Government.
- **Draft**: First draft complete (~1,950 words, ~7-8 min read). Structure follows pitch arc: vulnerability opening → consultation stats → AI literacy comparison → consumer tools comparison → broader changes → solo counsel assessment → closing.

### Next steps
Content quality audit, then audience review (per reviewer routing table: Sarah + Legal Tech — this is policy/budget commentary with technical depth).

## Session 3 — 2026-03-07

### Draft Restructure
Houfu noted the first draft followed research results too closely rather than the pitch. Rewrote draft to make draft-vs-final comparison the backbone, with the personal submission as subplot (mentioned in 1-2 sentences per section) rather than centrepiece with forensic textual mapping.

### New Material Added
- **Edwin Tong speech** (Straits Times, 6 Mar 2026): "legally strong and digitally fluent" quote added as blockquote in AI Literacy section. Reinforces why AI literacy requirement matters — it's the practical expression of the minister's vision.
- **[2026] SGHC 49** — *Tan Hai Peng Micheal v Tan Cheong Joo* (6 Mar 2026, same day as guide launch): Two small-firm solicitors cited fictitious AI-generated case authorities. $5,000 personal costs each. Placed in "Does It Work for Solo Counsel Now?" section to illustrate that solo counsels are most exposed to AI risk and least equipped to manage it.
- Also researched CJ Menon's Opening of Legal Year 2026 speech (Jan 2026) — relevant paragraphs on AI literacy and skills degradation (paras 18, 20, 21, 24(c)) — but not used in draft.

### Audience Review (Round 1)
All three reviewers (Legal Tech, Corporate Lawyer, Lawyer-Coder) assessed the draft.

**Consensus:** Draft delivers on pitch promise. Close to publishable after light revision.

**Essential fixes identified:**
1. Add the "discovery moment" — the beat where Houfu asks Claude to compare and it turns out to be real (~40-60 words, end of opening)
2. Add one concrete action sentence in solo counsel section — point practitioners to most useful annex

**High-value fixes:**
3. Tighten "What Else Changed" — cut junior lawyer development, expand templates point
4. Consider removing Straits Times bookmark card (interrupts flow mid-argument)

**Optional:**
5. Trim Edwin Tong explanatory follow-up — let quote do more work
6. Rename "The Consultation Process Works" header (gives away conclusion)
7. Briefly explain what LIFT is

**Best line identified:** "A lawyer who doesn't know that AI confidently fabricates citations isn't exercising professional judgment — they're exercising professional trust."

### Reviewer Feedback Implemented (all 7 suggestions)
1. Added discovery moment — "asked Claude to compare... half-expecting hallucinated matches. It wasn't hallucinating."
2. Added concrete action sentence — "If you have two hours this month, start with paragraph 23(d)... then Annex C"
3. Tightened "What Else Changed" — cut junior lawyers, expanded templates, renamed to "Beyond the Submission: What the Guide Got Right on Its Own"
4. Removed Straits Times bookmark card (interrupted flow)
5. Trimmed Edwin Tong explanatory follow-up
6. Renamed closing header to "What I Keep Coming Back To"
7. Added LIFT explanation

### Content Quality Audit
Ran full 5-agent audit (accessibility, readability, structure, flow, tone). Key findings and fixes applied:
1. Removed repeated "written for firms with innovation labs" phrase (appeared twice in 4 sentences in "Does It Work" section)
2. Clarified 44% statistic attribution — changed to "citing estimates that" to signal it's the Minister citing a study
3. Split SGHC 49 paragraph into two — case facts separate from solo firm implication. "$5,000 out of pocket" now punches as its own paragraph
4. Converted SGHC 49 bookmark card to inline link — reduces external bookmark count to 1 (within Voice Guide)
5. Expanded LIFT acronym (Legal Industry Framework for Transformation)
6. Kept "ChatGPTs and Claudes" — Claude is a major GenAI tool practitioners use; changing it would be inaccurate

### Current Draft State
~2,000 words, ~8 min read. All reviewer and audit feedback implemented. Draft is publication-ready.

### Next steps
Backlink curation, then publish to Ghost.

## Session 4 — 2026-03-08

### Published to Ghost
- Posted draft to Ghost using `scripts/publish-lexical.js`
- Post ID: `69ac4d6a1fe4720001852e6b`
- Added `custom_excerpt` and `post_id` to frontmatter

### Houfu's Ghost Edits
Houfu edited the post directly in Ghost and scheduled it. Changes made:
- `featured: true`, `status: scheduled`
- Added bookmark card for original blog post after first paragraph
- Linked "the final guide landed" to MinLaw launch page
- Added "You know, just trying to be sycophant." to the Claude comparison sentence
- Added bookmark card for MinLaw launch page
- Removed "It wasn't hallucinating." standalone line
- Linked Murali Pillai speech to MinLaw parliamentary speech page
- Consumer tools section: replaced paraphrased summary with blockquote excerpt of actual paragraph 23(d) from the guide
- Trimmed "Again, some of this language..." paragraph (removed "I checked twice" and attribution disclaimer)
- Simplified "Beyond the Submission" intro
- Changed Budget 2026 inline link to bookmark card
- Removed final two bookmark cards and GitHub footer

### Repo Sync
- Synced local `draft.md` to match Ghost version
- Committed and pushed to `blog/minlaw-consultation-followup` branch
