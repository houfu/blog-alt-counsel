---
word_budget: 1800
budget_tolerance: 10
primary_audience: marcus
secondary_audience: [wei-lin]
thesis_keywords: [high concept, incarnation, stable interface, zeeker]
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

**Title:** *Your Amicus Outlived the Stack* (working — alternates: *The Poem Was the Only Thing That Stayed*, *Two Incarnations of a Legal News Bot*)
**Thesis:** The high concept — a persona and a poem — was the only stable thing about SG Law Cookies; everything underneath it was replaced at least once, and that's what made replacing it cheap.
**Spine:** The concept was the interface. The stack was disposable.
**Emotional core (user's words):** `[HOUFU: needed — what made you want to write about Cookies now? "Stowed" is doing a lot of work. Shelved, or quietly running and never written up?]`

## Pitch

`[DRAFT — pending the emotional core, which will change the opening]`

On 22 March 2023 I published the first SG Law Cookies: a bot called Your Amicus introducing itself as "your friendly little legal bot from the little island of Singapore." Two weeks later I made it open every digest with a six-line poem about the day's legal news — sentencing appeals, kickback prosecutions, money laundering, in verse. That was the whole high concept, and it has not changed since. Everything under it has. The summariser went from GPT-3.5 to GPT-4 to GPT-4o to GPT-4.1. The orchestration went from LangChain to a Rivet graph to Mirascope. Packaging went from Poetry to uv. The site went from Hugo to a rebuild in a different repo. The source went from scraping Singapore Law Watch's RSS directly to consuming my own API at data.zeeker.sg. Two years, 516 digests, and the only load-bearing decision I never revisited was the silly one. That's the argument: pick a concept narrow enough to survive its own implementation.

## Beats

- **Open — what I actually did** (~200w): the moment that made me pull Cookies back up. `[HOUFU: needed]`
- **The first cookie** (~250w): 22 March 2023, Your Amicus, and the poem two weeks later. Quote a real digest — the migrant-worker kickback one reads well against its own verse.
- **Everything I replaced** (~350w): the verified swap list (models, LangChain → Rivet → Mirascope, Poetry → uv, Hugo → v2, RSS → API). Each swap was cheap because the output contract never moved.
- **Why the concept held** (~300w): a persona plus a fixed format is a spec. It's what let me change the engine without renegotiating what the thing *is* — and what kept generated output from drifting into slop.
- **Neither is wrong** (~200w): infrastructure earns reuse; the concept earns the reader. `[HOUFU: v2 detail — what did the rebuild actually change?]`
- **What I'd tell a solo builder** (~250w): decide the concept before the stack; the concept is the part you can't refactor.
- **Close** (~200w): what happens to Cookies now. `[HOUFU: decision — revive, leave running, retire?]`

## Out of scope

- A rebuild or roadmap for Cookies. This is a report, not an announcement.
- Re-litigating the SMU / institutions decision — link `from-one-source-to-three` and move on.
- A tutorial on the scraping stack. `zeeker-three-databases` covered the architecture.
- Prompt-level detail on the summarisation chain unless one example proves the constraint point.

## Interrogation (proposed answers — confirm or correct)

1. **Diagnosis.** The first proposed diagnosis — "the small front end survived because it was left alone" — was **falsified by the git history**: the Hugo repo shows continuous maintenance (model migrations, two orchestration rewrites, a packaging move). It was never unattended. The surviving diagnosis is narrower and better evidenced: the *concept* was stable while the implementation churned. What would still contradict it: if the v2 rebuild in `zeeker-sg/cookies` changed the persona or dropped the poem, the concept wasn't stable after all — it was just the part I hadn't got to yet. **Needs v2 access to confirm.**
2. **Differentiation.** Everyone has a "we built an AI news summariser" post. This one has a two-year receipt trail showing which decisions turned out to be load-bearing and which were disposable — with dated commits behind every swap. The evidence is the differentiator, not the summariser.
3. **Framing risk.** Low. Named third parties: Singapore Law Watch / SAL as the upstream RSS source (describe accurately and generously — Cookies depends on that feed and republishes summaries of it), and ICYMI Law as the README's stated inspiration. Credit ICYMI explicitly rather than implying originality. One genuine sensitivity: the digests summarise real prosecutions and named defendants — quote the migrant-worker kickback example carefully.
4. **Whose subject is this?** The original message's subject is *SG Law Cookies*, and the phrase used is "high concept". This pitch now makes the high concept itself the subject, which is closer to the opening message than the first draft was (that one made the data/app asymmetry the subject and Cookies the evidence). data.zeeker.sg is a foil in one beat only.

## Verified facts (git history, `houfu/sg_law_cookies`)

- First commit **23 March 2023**; first digest dated **22 March 2023**. "Your Amicus" is present from day one.
- The six-line poem starts **7 April 2023** — about two weeks in. Email newsletter added **28 March 2023**.
- **516 digests**, weekdays only, last one **30 April 2025**. 576 commits total.
- Model line: GPT-3.5-turbo-16k + GPT-4 (Apr 2024) → GPT-4 + GPT-4o-mini (Aug 2024) → GPT-4o (May 2025) → **GPT-4.1 / GPT-4.1-mini** (final state).
- Orchestration: LangChain → "Basic rivet support" (**21 Sep 2023**) → **LangChain removed for Mirascope, 3 May 2025** — the repo's last substantive commit.
- Packaging Poetry → **uv** (2 May 2025), alongside a directory restructure and a DigitalOcean deploy fix.
- Final pipeline: two calls — a 100-word structured summary per article (temp 0.4) and one ≤6-line poem over the day's summaries (temp 0.8).
- **v1 scraped `singaporelawwatch.sg` RSS directly.** It was never a front end to data.zeeker.sg — that is a v2 property.

## Open questions (max 3)

1. **Emotional core** — un-guessable, blocks the opening. What made you want to write this now?
2. **v2 access** — `zeeker-sg/cookies` can't be reached from this session (see discussion.md). Need either a new session rooted on that repo, or you paste: what the rebuild changed, whether the persona and poem survived it, and its current publishing status.
3. **Running cost and any readership signal** (newsletter subscribers, visits) — the numbers beats need at least one.
