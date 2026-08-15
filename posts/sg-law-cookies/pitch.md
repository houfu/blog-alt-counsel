---
word_budget: 1800
budget_tolerance: 10
primary_audience: marcus
secondary_audience: [wei-lin]
thesis_keywords: [cookie, metaphor, signal, FOLIO]
protected_lines: []
voice: {lane: learning-in-public, moves: [specific-numbers, neither-is-wrong, humour-after-the-argument]}
interrogation: {diagnosis: "see below", differentiation: "see below", framing_risk: "see below", subject: "see below"}
must_link: [from-one-source-to-three, what-i-learned-at-smus-legal-database-launch-and-my-decision-about-data-zeeker-sg-2, year-in-review-2025-ai-accountability]
tags: [AI, LegalTech, zeeker, Singapore]
target_date: ~
status: DRAFT PITCH — awaiting user's emotional core
---

# Pitch: sg-law-cookies

## Original framing (verbatim, never edited)

> Can you write a new post for me? I’m thinking about something I have stowed for a while, I.e. sg law cookies. It”s located at cookies.zeeker.sg and it’s a high concept front end to data.zeeker.sg

**Title:** *The Word Was the Spec* (working — alternates: *No Raisins, Ever*, *What a Cookie Turned Out to Mean*)
**Thesis:** I picked "cookies" in 2023 because bite-sized legal news sounded cute; three years later the word is a formal unit of legal change, and the metaphor I chose casually ended up specifying the product.
**Spine:** The name was the only thing I never rewrote, and it quietly became the design brief.
**Emotional core (user's words):** `[HOUFU: needed — what made you want to write about Cookies now? "Stowed" is doing a lot of work.]`

## Pitch

In March 2023 I built a bot called Your Amicus that read Singapore Law Watch every weekday, summarised each article in 100 words, and — because it amused me — opened with a six-line poem about the day's sentencing appeals. I called it SG Law Cookies because the summaries were bite-sized. That was the whole reasoning. Since then I have replaced every part of it. The poem is gone, and so is Amicus. GPT-3.5 became GPT-4, then GPT-4o, then Claude and a local Qwen. LangChain became a Rivet graph became Mirascope. Hugo became a Python site generator. Scraping Singapore Law Watch's RSS became querying my own catalogue at data.zeeker.sg. Even the unit changed: a cookie is no longer a summary of an article but "the smallest unit of legal change" — FOLIO-tagged, priced by significance, act on or be aware of or track. The only thing I never rewrote was the word. And the word turned out to be the specification: pineapple tarts are high-significance signals, chocolate chips are legal concepts, hexagons are judgments. No raisins, ever.

## Beats

- **Open — what I actually did** (~200w): the moment that made me pull Cookies back up. `[HOUFU: needed]`
- **The first cookie** (~250w): 22 Mar 2023, Your Amicus, the poem two weeks later. Quote the real verse; it's better evidence than describing it.
- **Everything I replaced** (~300w): the dated swap list. Models, orchestration, packaging, site generator, data source — and then the unit itself. Two years, 516 digests, and none of it was the thing that lasted.
- **What a cookie means now** (~350w): the v2 definition — signal not summary, three tiers, FOLIO grounding. The bakery is no longer decoration: significance is priced like a bake, chips encode doctrine, shape encodes source type, a red dot means still warm.
- **Neither is wrong** (~250w): v1 was warm and read like a person; v2 is rigorous and reads like an instrument. The poem could not have survived FOLIO grounding, and FOLIO grounding could not have been built in 2023.
- **What I'd tell a solo builder** (~250w): the metaphor is the cheapest durable decision you'll make, and the one you're least likely to revisit. Pick it like a spec, because it will become one.
- **Close** (~200w): what happens to Cookies now. `[HOUFU: still publishing? what's next?]`

## Out of scope

- A v2 architecture tour. The PRD is 961 lines; this post takes the design decision, not the pipeline.
- Re-litigating the SMU / institutions decision — link `from-one-source-to-three` and move on.
- A FOLIO explainer beyond one sentence.
- Anything about Zeeker's own roadmap. Cookies is the subject this time, not the infrastructure.

## Interrogation

1. **Diagnosis.** Two earlier diagnoses were falsified by evidence, in order. (a) *"The small front end survived because it was left alone"* — killed by the v1 git history, which shows continuous maintenance. (b) *"The high concept was the stable layer"* — killed by v2, where the persona and the poem are gone entirely (zero matches for "amicus" or "poem" in `zeeker-sg/sg-law-cookies`). What survives the evidence is narrower and truer: only the **name and its metaphor** persisted, and the metaphor became load-bearing. What would still contradict it: if the bakery framing in v2 was reverse-engineered to fit the domain name rather than genuinely constraining design choices — a question only Houfu can answer, and the eight mockups suggest it was a real search.
2. **Differentiation.** Not "I built an AI news summariser." This is a three-year, two-incarnation record of one product where the naming decision outlasted every technical decision — with dated commits, a 961-line PRD, and eight rejected mockups as receipts. Nobody else can write it.
3. **Framing risk.** Low. Third parties to treat generously: **Singapore Law Watch / SAL** (the v1 RSS source), **ICYMI Law** (the README's stated inspiration — credit explicitly), and **FOLIO**. Two live sensitivities: (a) digests summarise real prosecutions and named defendants, so quote the sample verse and the migrant-worker kickback cookie carefully; (b) the v2 attribution posture (catalogue, never republish, always link the original) is deliberate and should be stated accurately rather than glossed.
4. **Whose subject is this?** The opening message's subject is SG Law Cookies, and its key phrase is "high concept". This pitch makes the high concept the subject and treats data.zeeker.sg as the supply line, matching the original framing. Earlier drafts drifted toward making the infrastructure the protagonist — the gravity of the four prior Zeeker posts. Watch for it.

## Verified facts

**v1 — `houfu/sg_law_cookies`** (public, cloned and unshallowed)

- First commit **23 Mar 2023**; first digest **22 Mar 2023**. "Your Amicus" present on day one.
- Six-line poem added **7 Apr 2023**; email newsletter **28 Mar 2023**.
- **516 digests**, weekdays only, last one **30 Apr 2025**. 576 commits.
- Models: GPT-3.5-turbo-16k + GPT-4 (Apr 2024) → GPT-4 + GPT-4o-mini (Aug 2024) → GPT-4o → **GPT-4.1 / GPT-4.1-mini**.
- Orchestration: LangChain → Rivet (**21 Sep 2023**) → **Mirascope (3 May 2025**, the repo's last substantive commit).
- Poetry → **uv** (2 May 2025). Final pipeline: 100-word structured summary per article (temp 0.4) + one ≤6-line poem over the day (temp 0.8).
- **Scraped `singaporelawwatch.sg` RSS directly** — v1 was never a front end to data.zeeker.sg.

**v2 — `zeeker-sg/sg-law-cookies`** (public; last commit 23 Jun 2026)

- Repositioned in the PRD from a blog to a "legal signal platform": *"The blog becomes one output among many. The pipeline and the database are the product."*
- **A cookie is "the smallest unit of legal change"** — explicitly *not* a summary. Tiers: act on / be aware of / track. Significance sorts, never suppresses: *"Every cookie is published."*
- **FOLIO-grounded**; sources arrive only via data.zeeker.sg (`sglawwatch`, `sg-gov-newsrooms`, `zeeker-judgements`, `pdpc`).
- LLM backends: **Anthropic `claude-sonnet-4-6`** primary (tool use forces schema conformance), **Ollama `qwen3:8b`** local alternative, with dual-host routing for news vs judgments.
- **Eight mockups explored**: night-desk, morning-paper, atlas, bakery, bakery-shopfront, bakery-lovecon, skyline, counter-map. The shipped site is the shopfront plus counter map.
- Visual encoding (About page): pineapple tart = ACT ON, $0.60 cookie = FRESH, $0.30 cookie = TRACKING, chocolate chips = FOLIO concepts, round = news, hexagonal = judgments, red dot = still warm, ochre threads = shared doctrine. *"No raisins, ever."*
- PRD cost estimate **$50–200/month**; the local Ollama path exists to make runs cost-free. `[UNVERIFIED: actual spend]`

## Open questions

1. **Emotional core** — un-guessable, blocks the opening. What made you want to write this now?
2. **Actual running cost**, versus the PRD's $50–200/month estimate — and is it running on Claude or local Qwen day to day?
3. **Images** — the counter-map screenshot needs to land in this folder as a file (under 500 KB) before publishing.
