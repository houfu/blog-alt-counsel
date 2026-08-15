---
word_budget: 1900
budget_tolerance: 10
primary_audience: marcus
secondary_audience: [wei-lin]
thesis_keywords: [cookie, concept, legal data, application]
protected_lines:
  - "the smell of the law, freshly baked coming out of the kitchen"
voice: {lane: learning-in-public, moves: [specific-numbers, neither-is-wrong, humour-after-the-argument]}
interrogation: {diagnosis: "see below", differentiation: "see below", framing_risk: "see below", subject: "see below"}
must_link: [from-one-source-to-three, when-building-gets-cheap-but-knowing-stays-expensive, tool-vs-infrastructure-mindset]
tags: [AI, LegalTech, zeeker, Singapore]
target_date: ~
status: PITCH — awaiting approval to draft
---

# Pitch: sg-law-cookies

## Original framing (verbatim, never edited)

> Can you write a new post for me? I’m thinking about something I have stowed for a while, I.e. sg law cookies. It”s located at cookies.zeeker.sg and it’s a high concept front end to data.zeeker.sg

**Title:** *The Smell of the Law* (working — alternates: *No Raisins, Ever*, *They Asked How, Not What*)
**Thesis:** Turning legal data into an application is no longer a data problem or a coding problem — it is a concept problem, and the concept is the part you cannot vibe code.
**Spine:** People at the talk asked how I built it, not what it was — because the what was legible on sight.
**Emotional core (user's words):**

> "I showed it off at the SCCE talk and it was an eye opening aha experience, quite a few people came up to me to ask how I did it."

> "I've always wanted this site to be about cookies so that idiom so to speak came first before anything. I wanted it to focus on the smell of the law, freshly baked coming out of the kitchen. So if you're into it you know what it is about without diving deep into it."

## Pitch

I have been sitting on SG Law Cookies for about a month. It runs every weekday, and I did not announce it, because it was built as a workflow for me rather than a product for anyone else. Then I showed it at the SCCE talk and people came up afterwards to ask how I did it. Not what it was — they already knew what it was, from looking at it. That is the part worth writing about. The cookie idiom came first, back in 2023, before any of the code: I wanted the site to feel like the smell of the law coming freshly baked out of the kitchen, so that you know what it is without diving deep. Three years later that idiom is doing formal work. A cookie is now "the smallest unit of legal change." Significance is priced like a bake. Chocolate chips are legal concepts. Hexagons are judgments. I mostly vibe coded v2 — from a PRD I workshopped carefully, because this amount of detail cannot be derived from a bakery, a data website, or scruffing up v1.

## Beats

- **Open — the talk** (~250w): showing it at SCCE, people asking *how* rather than *what*. Flat, interior, payoff stated: the concept had done the explaining for me.
- **What people were looking at** (~300w): the counter map. Kuih bangkit as areas of law, size as the day's bake, red dot for still warm, ochre threads for shared doctrine. Screenshot carries this beat.
- **The idiom came first** (~250w): 2023, before any code — the smell of the law, freshly baked. Then what it cost to keep: Amicus and the poem did not survive v2.
- **From data to application** (~350w): the actual pipeline question. Zeeker holds the catalogue; a cookie is a signal extracted from it, not a summary of it. FOLIO grounding, three tiers, every cookie published. This is the beat the user flagged as the interesting part.
- **Neither is wrong** (~250w): pure vibe coding produces something that demos and collapses; pure specification produces nothing at all. The PRD is what let the vibe coding hold this much detail — 961 lines of it, and 20 test files.
- **What I'd tell a builder sitting on legal data** (~250w): the data is increasingly available and the code is increasingly cheap. The concept is the scarce part, and it is the part you have to bring yourself.
- **Close** (~200w): it has been running a month, unannounced, as a workflow. `[HOUFU: what now — keep it a workflow, or make it a product?]`

## Out of scope

- A v2 architecture tour. The PRD is 961 lines; take the design decision, not the pipeline.
- A FOLIO explainer beyond one sentence.
- Re-litigating the SMU / institutions decision — link and move on.
- A vibe-coding methodology post. The PRD point is one beat, not the thesis.

## Interrogation

1. **Diagnosis.** The user's framing — the concept came before the code, and the concept is what made it legible — is **corroborated by artefacts rather than taken on trust**: the name predates v2 by three years, and the eight explored mockups (night-desk, morning-paper, atlas, bakery, bakery-shopfront, bakery-lovecon, skyline, counter-map) show a real search that landed on the two leaning hardest on the 2023 idiom. Two earlier diagnoses were falsified before this one survived: *"it survived because it was left alone"* (killed by v1's continuous-maintenance history) and *"the high concept was the stable layer"* (killed by v2, where Amicus and the poem are gone). What would still contradict the current one: if the SCCE audience was asking "how" for reasons unrelated to legibility — how the *data* was obtained, say, rather than how the thing was made readable. `[HOUFU: worth a sentence on what they actually asked]`
2. **Differentiation.** Not another "I built an AI news summariser" or "I vibe coded an app" post. This has a three-year receipt trail across two incarnations, a 961-line PRD, eight rejected mockups, and a live audience reaction — arguing that the scarce input in legal data applications is the concept, not the data or the code.
3. **Framing risk.** Low, with three named parties to treat generously: **Singapore Law Watch / SAL** (v1's RSS source), **ICYMI Law** (v1's stated inspiration — credit explicitly), and **FOLIO**. Live sensitivities: (a) cookies concern real prosecutions and named parties, so any quoted example must be handled carefully; (b) the attribution posture — catalogue, extraction only, never republish, every "read the source" link pointing at the original rather than at Zeeker — is deliberate and should be stated accurately, not glossed; (c) `[HOUFU: is SCCE the right name to print, and is the audience fine being described?]`
4. **Whose subject is this?** The opening message's subject is SG Law Cookies and its key phrase is "high concept". This pitch keeps Cookies as subject and makes the concept the argument — closer to the original message than the two earlier versions were. One drift to watch: the user's suggested angle ("how legal data will be turned into an application") could promote the *category* to protagonist and demote Cookies to evidence. Guard: every general claim is earned from a specific Cookies decision, never the reverse.

## Verified facts

**v1 — `houfu/sg_law_cookies`**

- First digest **22 Mar 2023**; "Your Amicus" present day one; six-line poem from **7 Apr 2023**; newsletter from 28 Mar 2023.
- **516 digests**, weekdays, last **30 Apr 2025**. 576 commits.
- GPT-3.5-turbo-16k + GPT-4 → GPT-4 + GPT-4o-mini → GPT-4o → GPT-4.1/4.1-mini. LangChain → Rivet (21 Sep 2023) → Mirascope (3 May 2025). Poetry → uv.
- Scraped `singaporelawwatch.sg` RSS **directly** — v1 was never a front end to data.zeeker.sg.

**v2 — `zeeker-sg/sg-law-cookies`** (public; last commit 23 Jun 2026; live ~1 month, unannounced)

- PRD: *"The blog becomes one output among many. The pipeline and the database are the product."*
- A cookie is **"the smallest unit of legal change"**, explicitly not a summary. Tiers: act on / be aware of / track. *"Every cookie is published"* — significance sorts, never suppresses.
- FOLIO-grounded; sources only via data.zeeker.sg (`sglawwatch`, `sg-gov-newsrooms`, `zeeker-judgements`, `pdpc`).
- **Anthropic `claude-sonnet-4-6`** primary (tool use forces schema conformance); **Ollama `qwen3:8b`** local alternative; dual-host routing for news vs judgments.
- Visual encoding: pineapple tart = ACT ON, $0.60 = FRESH, $0.30 = TRACKING, chocolate chips = FOLIO concepts, round = news, hexagonal = judgments, red dot = still warm, ochre threads = shared doctrine. *"No raisins, ever."* Tagline: *"signal, not summary — est. 2023, baked daily, no holidays."*
- 961-line PRD, 553-line pipeline pseudocode, 8 mockups, 20 test files.
- PRD cost estimate **$50–200/month**; local Ollama path exists to make runs cost-free. `[UNVERIFIED: actual spend, and whether daily runs use Claude or Qwen]`

## Open questions

1. `[HOUFU]` **SCCE** — full name, date, and audience, and whether to name it. Also: what did people actually ask?
2. `[HOUFU]` **Actual monthly cost**, and Claude or local Qwen for the daily run.
3. **Images** — the counter-map screenshot needs to land in this folder as a file under 500 KB. The uploaded PDF did not render its body (Safari print of a JS-driven page), so a PNG is needed.
