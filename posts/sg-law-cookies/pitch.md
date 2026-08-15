---
word_budget: 1800
budget_tolerance: 10
primary_audience: marcus
secondary_audience: [wei-lin]
thesis_keywords: [front end, unattended, high concept, zeeker]
protected_lines: []
voice: {lane: learning-in-public, moves: [specific-numbers, neither-is-wrong, humour-after-the-argument]}
interrogation: {diagnosis: "PROPOSED — see below", differentiation: "PROPOSED — see below", framing_risk: "PROPOSED — see below", subject: "PROPOSED — see below"}
must_link: [from-one-source-to-three, what-i-learned-at-smus-legal-database-launch-and-my-decision-about-data-zeeker-sg-2, year-in-review-2025-ai-accountability]
tags: [AI, LegalTech, zeeker, Singapore]
target_date: ~
status: DRAFT PITCH — awaiting user's emotional core and status confirmation
---

# Pitch: sg-law-cookies

## Original framing (verbatim, never edited)

> Can you write a new post for me? I’m thinking about something I have stowed for a while, I.e. sg law cookies. It”s located at cookies.zeeker.sg and it’s a high concept front end to data.zeeker.sg

**Title:** *The Front End That Kept Shipping* (working — alternates: *Three Years of Cookies*, *Your Amicus Never Took a Day Off*)
**Thesis:** The ambitious infrastructure needed constant tending; the small, opinionated app on top of it has published every day since 2023 without me — and that asymmetry is the lesson.
**Spine:** SG Law Cookies is the part of Zeeker that survived being ignored.
**Emotional core (user's words):** `[HOUFU: needed — what made you want to write about Cookies now? "Stowed" is doing a lot of work. Shelved, or quietly running and never written up?]`

## Pitch

`[DRAFT — pending the emotional core, which will change the opening and possibly the thesis]`

I built SG Law Cookies in April 2023, before writing a daily AI-generated publication was a normal thing to do. It reads Singapore legal news, summarises it in bite-sized pieces, and delivers it through a persona called Your Amicus — who, for reasons that made sense at the time, opens each digest with a poem about money laundering prosecutions. It is the least serious thing I have built and the only one that has shipped every single day for three years without me touching it. Meanwhile data.zeeker.sg — the real infrastructure, 150+ hours, four databases, an API, the thing I actually wrote about — needed constant tending and had close to zero known readers. This post is about that asymmetry. Not "small is better than ambitious"; both are doing work. But when a solo builder asks what to spend the next weekend on, the answer that keeps proving itself is the opinionated front end, not another table. `[HOUFU: current status of Cookies — still publishing daily?]`

## Beats

- **Open — what I actually did** (~200w): the moment that made me pull Cookies back up. `[HOUFU: needed]`
- **What Cookies is** (~250w): Hugo + Python + GitHub Actions, daily digest, Your Amicus persona, the poem. Show one real digest.
- **Why "high concept" was a design decision, not a joke** (~300w): a persona and a fixed format are constraints; constraints are what let a generative pipeline run unsupervised without drifting into slop.
- **The asymmetry** (~350w): three years unattended vs. 150+ hours tended. Real numbers: commits, running cost, publishing streak, readership. `[HOUFU: costs + analytics]`
- **Neither is wrong** (~250w): infrastructure earns the API and the reuse; the front end earns the reader. What each is actually for.
- **What I'd tell a solo builder** (~250w): ship the opinionated front end first; the boring layer can come after — mine did.
- **Close** (~200w): what happens to Cookies now. `[HOUFU: decision — revive, leave running, retire?]`

## Out of scope

- A rebuild or roadmap for Cookies. This is a report, not an announcement.
- Re-litigating the SMU / institutions decision — link `from-one-source-to-three` and move on.
- A tutorial on the scraping stack. `zeeker-three-databases` covered the architecture.
- Prompt-level detail on the summarisation chain unless one example proves the constraint point.

## Interrogation (proposed answers — confirm or correct)

1. **Diagnosis.** Proposed diagnosis is "the front end survives because it's small and opinionated." What would contradict it: Cookies may have survived because it's *downstream and read-only* — it has no ingestion to break. If that's the real reason, the post is about coupling, not concept, and the thesis needs rewording.
2. **Differentiation.** Everyone has a "we built an AI news summariser" post. Almost nobody has one that has run daily since **April 2023** — before this was a normal thing to build — and can show the receipts. The three-year unattended streak is the differentiator, not the summariser.
3. **Framing risk.** Low. Named third parties: SAL / Singapore Law Watch as the upstream source (must be described accurately and generously — Cookies depends on their feed), and ICYMI Law as the stated inspiration. Give ICYMI explicit credit rather than implying originality.
4. **Whose subject is this?** The original message's subject is *SG Law Cookies*. This pitch keeps it as subject; data.zeeker.sg is the foil, not the protagonist. Watch for drift — the previous four Zeeker posts all made the infrastructure the protagonist, and that gravity is real.

## Open questions (max 3)

1. **Emotional core** — un-guessable, blocks the opening. What made you want to write this now?
2. **Status of Cookies today** — still publishing daily / stalled / paused / being revived? Changes the close.
3. **Numbers I can't reach** — the egress proxy blocks `cookies.zeeker.sg` from this environment. Need from you: monthly running cost, any readership signal, and a pasted sample digest (or screenshot) to quote.
