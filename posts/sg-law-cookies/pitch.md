---
word_budget: 1700
budget_tolerance: 10
primary_audience: marcus
secondary_audience: [sarah]
thesis_keywords: [cookie, unit, glance, Zeeker]
protected_lines:
  - "the smell of the law, freshly baked coming out of the kitchen"
voice: {lane: learning-in-public, moves: [specific-numbers, neither-is-wrong, solo-counsel-return]}
interrogation: {diagnosis: "user-supplied structure, see below", differentiation: "see below", framing_risk: "see below", subject: "see below"}
must_link: [when-building-gets-cheap-but-knowing-stays-expensive, from-one-source-to-three, year-in-review-2025-ai-accountability]
tags: [AI, LegalTech, zeeker, Singapore]
target_date: ~
status: PITCH v6 — user-dictated structure
---

# Pitch: sg-law-cookies

## Original framing (verbatim, never edited)

> Can you write a new post for me? I’m thinking about something I have stowed for a while, I.e. sg law cookies. It”s located at cookies.zeeker.sg and it’s a high concept front end to data.zeeker.sg

**Title:** *Come Into the Bakery* (working — alternates: *A Snapshot of the Legal Day*, *What I Did With All That Data*)
**Thesis:** Legal data has been metrics about the machinery of law; the content of the law stayed in prose, and the thing that was missing was a way to organise it systematically into a page you comprehend at a glance.
**Spine:** Cookies is the answer to the question Zeeker left me holding — what can I actually do with all this data now that I have it?
**Emotional core (user's words):**

> "I showed it off at the SCCE talk and it was an eye opening aha experience, quite a few people came up to me to ask how I did it."

> "I've always wanted this site to be about cookies so that idiom so to speak came first before anything. I wanted it to focus on the smell of the law, freshly baked coming out of the kitchen. So if you're into it you know what it is about without diving deep into it."

## Pitch

I showed SG Law Cookies at the SCCE talk last month because I wanted to establish a builder ethos without going into code. The room was compliance professionals there for compliance topics, not a programming audience and not a product demo, so the site had to do the explaining. It looks like a neighbourhood Singapore bakery from a bygone era, and every weekday it puts trays out: round bakes for news, hexagonal shortbread for judgments, a pineapple tart when something changes what you do on Monday. Behind that is the part that took years — data.zeeker.sg curating Singapore's legal output daily, and Cookies is its showcase, my answer to what I can actually do with all this data now that I have it. Legal data has mostly meant metrics: win rates, case counts by subject. Important numbers that say nothing about the content of the law. Past newsletters and feeds, we have had no way to organise that content systematically into a page this easy to take in — one that does not ask you to dive deep, and just shows you the day.

## Beats

- **1. The bakery** (~400w): SCCE, compliance audience, builder ethos without code. Put the reader inside the shop — colours, trays, the counter map with areas of law pressed as kuih bangkit. One real day: Friday 14 August, thirteen cookies.
- **2. The kitchen behind it** (~300w): Zeeker curates a range of Singapore legal data daily — 10,765 judgments and the rest. Cookies is the Zeeker showcase, answering what the data is *for*.
- **3. The real innovation** (~450w): legal data as metrics vs the content of the law. Beyond newsletters and feeds, no systematic organisation into a comprehensible page. The cookie as unit; SGHC 166 producing four; deliberately shallow, a snapshot rather than an invitation to dive.
- **4. Raymond found a unit too** (~300w): the live and breathing essay — statements wired to a dataset, refreshed weekly. Same move, different deliverable. Neither is wrong.
- **5. The future is this** (~250w): the design decision — what counts as a unit, what deliverable it becomes — is the argument worth having. Solo counsel return. Close on hope.

## Out of scope

- **The competitive taxonomy.** Six families of legal dashboard, Corlytics, Darrow, RegTech pricing. This was Claude's overreach in v5; at most one clause survives.
- The architecture of either project. No components, no stack.
- The vibe-coding and PRD story.
- A FOLIO explainer beyond one clause.

## Interrogation

1. **Diagnosis.** The structure is the user's, given as five numbered points, so it is not Claude's inference to test. The one claim needing care is "we have no way of systematically organising such data into a page this comprehensible." Narrower than v5's "nobody manufactures units from prose," and better: it is about **comprehension**, not extraction. RegTech extracts obligations but delivers a work queue; LawNet summarises judgments but one document at a time. Both are consistent with the claim and each earns a clause, not a section.
2. **Differentiation.** A working example anyone can open, plus the reason it exists — and a named peer arriving at the same insight by a different route. Not another "AI will read the law for you" piece.
3. **Framing risk.** **Raymond Sun** is now a fellow traveller rather than a taxonomy entry; describe his work accurately and admiringly. **SAL/IMDA** must be credited for LawNet AI Summaries rather than written around. **Named parties**: the live site carried a disciplinary finding against a named individual on the sample day — not quoted. SGHC 166 and 167 are used instead; parties unnamed.
4. **Whose subject is this?** Cookies is the subject again, with Zeeker as the kitchen behind it. v5 promoted the *category* to protagonist and buried Cookies under vendor analysis — the user's verdict was "I still hate it." Guard: if a paragraph could survive with Cookies deleted from it, it does not belong.

## Open questions

1. `[HOUFU]` **SCCE** — full name and whether to print it; what people actually asked afterwards.
2. `[HOUFU]` **Counter-map screenshot** as a PNG under 500 KB in this folder. This draft is written assuming one image in beat 1.
3. `[HOUFU]` **kuih bangkit vs kuih lapis** — the site legend says bangkit; draft follows the site.

