---
word_budget: 1900
budget_tolerance: 10
primary_audience: marcus
secondary_audience: [sarah]
thesis_keywords: [dashboard, win rates, unit, glance]
protected_lines:
  - "the smell of the law, freshly baked coming out of the kitchen"
voice: {lane: learning-in-public, moves: [specific-numbers, neither-is-wrong, humour-after-the-argument]}
interrogation: {diagnosis: "see below", differentiation: "see below", framing_risk: "see below", subject: "see below"}
must_link: [when-building-gets-cheap-but-knowing-stays-expensive, from-one-source-to-three, year-in-review-2025-ai-accountability]
tags: [AI, LegalTech, zeeker, Singapore]
target_date: ~
status: PITCH v5 — dashboard angle, awaiting approval
---

# Pitch: sg-law-cookies

## Original framing (verbatim, never edited)

> Can you write a new post for me? I’m thinking about something I have stowed for a while, I.e. sg law cookies. It”s located at cookies.zeeker.sg and it’s a high concept front end to data.zeeker.sg

**Title:** *Legal Dashboards Count Win Rates. I Wanted One That Counts the Law.*
**Thesis:** Legal dashboards have always plotted the countable shell around the law — motions, durations, win rates — because a unit had to be countable to be plotted; an LLM can now manufacture a unit out of legal prose, which makes the substance of the law dashboardable for the first time.
**Spine:** Win rates were never what anyone wanted to know. They were what we could count.
**Emotional core (user's words):**

> "I showed it off at the SCCE talk and it was an eye opening aha experience, quite a few people came up to me to ask how I did it."

> "I've always wanted this site to be about cookies so that idiom so to speak came first before anything. I wanted it to focus on the smell of the law, freshly baked coming out of the kitchen. So if you're into it you know what it is about without diving deep into it."

## Pitch

Every legal dashboard I have ever used measures the machinery around the law rather than the law. Motion grant rates, time to disposition, settlement sums, win rates by counsel — all of it real, all of it useful, none of it telling you what the law now says. That was never a failure of imagination. A dashboard needs a unit it can count, and until recently the only countable things in law were procedural: dockets, dates, dollars. The substance stayed in prose, which is why it stayed in newsletters. What changed is that a model can now rewrite a judgment or a press release into a fixed shape — a headline, why it matters, a significance, a set of legal concepts — so that two unlike developments become comparable. Once every development has the same shape, you can plot it. That is what SG Law Cookies is: 10,765 judgments and counting, baked daily into a counter you read at a glance. The cheapest part was the code. The expensive part was deciding what a unit of legal change actually is.

## Beats

- **Open — the talk** (~250w): showing it, people asking how rather than what. Payoff stated: they were reading a dashboard nobody had to explain.
- **What legal dashboards have always measured** (~300w): win rates, motion grant rates, durations, 3,124+ courts crawled. The container, not the contents — and why that was the only option.
- **Three ways to cheat the problem** (~250w): borrow geography (Ray Sun, IAPP), borrow citations (EuCaseNet), or manufacture obligations (Corlytics, CUBE — low six figures a year). The honest precedent, credited properly.
- **The unit is the invention** (~350w): a cookie is the smallest unit of legal change, not a summary. Tiers, FOLIO concepts, every cookie published. Then the space it sits in — kuih bangkit, warmth, threads — and why an invented space needs a metaphor people can already read.
- **What it buys beyond being cheap** (~300w): answers the question you didn't know to ask; no triage, because attention is no longer the scarce input; comparability across unlike sources; provenance that links back to the original.
- **Singapore has search and feeds, not a surface** (~250w): LawNet 4.0 is AI search; LawNet publishes three months of judgment RSS. The raw material and the query tool both exist. Nobody built the thing you look at.
- **Close** (~200w): neither is wrong — search answers what you ask, a counter shows what you didn't. Flat, hopeful, no teaser.

## Out of scope

- **The architecture.** Explicitly ruled out by the user. No component diagrams, no stack walkthrough.
- The vibe-coding and PRD story. It was the centre of draft 1; it is now at most one clause.
- Ray Sun's live-and-breathing-essay pattern as a subject. He appears once, generously, as a borrowed-axis example.
- A FOLIO explainer beyond one sentence.
- Re-litigating the SMU decision.

## Interrogation

1. **Diagnosis.** The user's diagnosis — dashboards ingested numerical data, cookies rewrite prose into a comparable unit — **survives checking, with one correction the draft must carry.** Manufacturing units from legal prose is not new: Corlytics has done exactly this since 2013 across 120+ countries and 2,500+ regulators, using AI for "document classification, summarisation, and mapping." What is new is the price (enterprise contracts start in the low six figures), the scope (all legal output, not just regulation), and the intent (a surface to look at, not a compliance queue). If the post claims novelty it did not earn, Marcus will catch it and be right to.
2. **Differentiation.** Not "I built a thing." A taxonomy nobody has written down — legal dashboards sorted by the unit they plot — with a worked example, live numbers, and an honest account of the incumbent that got there first. The reader leaves with a way to classify any legal dashboard they meet.
3. **Framing risk.** Moderate, and all manageable. **Ray Sun** must be credited generously and accurately — his tracker is a real achievement at 41,000+ users, and "borrowed geography" is a description of a sound design choice, not a criticism; wording matters. **Corlytics, CUBE, Ascent** must not be strawmanned: their unit fits their buyer. **SAL/LawNet** must be treated as complementary, not as a foil that failed — they published the feeds this project consumes. And **PDPC enforcement decisions and judgments concern named parties**, so any quoted cookie needs care.
4. **Whose subject is this?** This is the change from v4, made deliberately with the user rather than by Claude. The subject is now **the category** — how legal data becomes something you look at — with Cookies as the worked example. The user's opening message named Cookies as the subject, so this is a genuine shift; it is sanctioned, not drift. Guard retained: every general claim must be earned from a specific Cookies decision.

## Open questions

1. `[HOUFU]` **SCCE** — full name, date, audience, and whether to print it. What did people actually ask?
2. `[HOUFU]` **Actual monthly cost**, and whether daily runs use Claude or the local Qwen. Needed only if the post quotes a figure; it can ship without one.
3. **Counter-map screenshot** as a PNG under 500 KB in this folder.

## Key evidence (full detail in research.md)

- Litigation analytics measures win rates, motion grant rates, durations; one vendor crawls 3,124+ courts across 13 countries.
- Ray Sun's tracker: 195+ jurisdictions, 41,000+ users, built solo. IAPP's AI tracker: chart, map and directory, updated 3 Feb 2026.
- Corlytics: since 2013, 120+ countries, 2,500+ regulators, "converts regulatory text into trackable requirements." Enterprise RegTech from low six figures a year.
- data.zeeker.sg, queried live 15 Aug 2026: **10,765 judgments**, 927 headlines, 263 commentaries, 90 reference chapters, plus PDPC and government newsroom tables. Judgments are indexed but not redistributed.
- SAL launched **LawNet 4.0** AI search at TechLaw.Fest 2025; LawNet publishes free RSS of the last three months of judgments.
