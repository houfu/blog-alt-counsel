---
title: "Legal Dashboards Count Win Rates. I Wanted One That Counts the Law."
slug: "legal-dashboards-count-win-rates"
tags: ["AI", "LegalTech", "zeeker", "Singapore"]
status: draft
featured: false
github_folder: "sg-law-cookies"
---

I showed SG Law Cookies at the SCCE talk expecting to explain it. I had slides ready for that. I didn't need them. People looked at the screen and started asking how I had built it, rather than what it was.

It took me a while to work out why that felt like something. They were reading a dashboard, and nobody had to teach them the legend.

The site has been running for about a month at [cookies.zeeker.sg](https://cookies.zeeker.sg), unannounced, because I built it as a workflow for myself rather than a product for anyone else. Every weekday it reads what Singapore's courts, regulators and ministries put out, and turns the day into something I can take in at a glance.

The interesting part isn't the site. It's that a dashboard like this wasn't really possible until recently, and the reason has almost nothing to do with data or code.

## Every legal dashboard I've used measures the machinery, not the law

Motion grant rates. Time to disposition. Settlement sums. Win rates by counsel, by court, by judge. One litigation analytics vendor advertises crawlers running across 3,124 courts in 13 countries, reconciled against the public docket systems.

That work is real and I don't want to be sniffy about it. If you are deciding whether to file a motion in front of a particular judge, a grant rate is exactly what you want.

But notice what all of it is. It is the procedural shell around the law: how long things took, how often they succeeded, what they cost. Not one of those numbers tells you what the law now says. For that you still read a newsletter written by a person.

Or in my case, by a bot. The first version of SG Law Cookies ran for 516 weekdays from March 2023, and it was a newsletter: a summary of each day's legal news, opened by a six-line poem about sentencing appeals and money laundering prosecutions, because that amused me at the time. Same corpus, same jurisdiction, same author. Prose out, because prose was the only thing I could make.

That was never a failure of imagination. A dashboard needs a unit it can count, and until recently the only countable things in law were procedural. A docket entry is already structured — a date, a type, an outcome. A judgment is forty thousand words of prose that resists being turned into anything you can plot.

Win rates were never what anyone actually wanted to know. They were what we could count.

## Three ways around the problem, and one of them is a real business

People have found ways around this, and they are worth knowing before anyone claims novelty.

You can **borrow geography**. Raymond Sun's Global AI Regulation Tracker maps AI regulation across 195 or so jurisdictions and has reached over 41,000 users, built solo, which is a genuinely impressive thing to have made. The IAPP does something similar for AI and privacy law with a chart, a map and a directory. The map already exists in the reader's head, so nothing needs explaining. The unit is a jurisdiction's status.

You can **borrow citations**. Judgments cite each other, so the graph draws itself — one study of European human rights case law mapped 9,777 judgments and nearly 40,000 links. But a citation is a fact about a document, not a judgment about what changed.

Or you can **manufacture obligations**, which is the one that matters. Regulatory change management firms have been converting regulatory text into trackable requirements for over a decade. Corlytics has done it since 2013, across 120 countries and 2,500 regulators, using AI for classification, summarisation and mapping. So no, turning legal prose into structured units is not new, and I'd rather say that plainly than pretend I invented it.

What is new is the price and the purpose. Enterprise deployments of that kind run somewhere between $100,000 and $500,000 a year, the unit is an obligation mapped to your internal controls, the buyer is a compliance department, and the output is a queue of things to work through. Darrow does something adjacent for the plaintiffs' bar, reading filings and incident reports across dozens of exposure categories to find cases before they are filed. None of which is wrong. They are just pointed at different questions than mine — what must we comply with, and what can we sue over.

## The unit is the invention

A cookie is the smallest unit of legal change that someone might need to act on, be aware of, or track. It is deliberately not a summary. A summary tries to compress a source faithfully; a cookie extracts the signal and throws the rest away, and how many you get depends on how many distinct legal propositions a document contains rather than how long it is.

Take one judgment from last Friday. [2026] SGHC 166 came out of the oven as four separate cookies, sitting in four different areas of law: that silence and conduct can constitute fraudulent misrepresentation where a duty to correct exists; that damages for misrepresentation are limited to reliance loss rather than expectation loss; that piercing the corporate veil requires formal control as shareholder or director and not merely de facto influence; and that an individual's fraudulent misrepresentations can ground joint liability for unlawful means conspiracy with his company. One judgment, four propositions, four places on the counter.

A newsletter would have given you one paragraph about a case.

Every cookie carries the same fields, whatever it came from — a headline, why it matters, a significance, and a set of legal concepts drawn from a standard ontology rather than labels I made up. That uniformity is the whole trick. A press release, a data protection enforcement decision and a High Court judgment come out the same shape, which means they can sit on the same surface and be compared.

Then you have to decide where they sit. Geography is given. Citations are given. There is no natural map of doctrine — no agreed distance between employment law and privacy — so you have to invent the space, and an invented space needs a metaphor the reader already knows.

Mine has been a bakery since 2023. The idiom came first, before the scrapers, before the database, before I knew what would be in it: I wanted it to focus on the smell of the law, freshly baked coming out of the kitchen, so that you know what it is about without diving deep into it.

So the homepage is a counter. Each area of law that saw activity is a kuih bangkit, sized by the day's bake. A red dot means still warm. Threads between them mean those areas shared doctrine that week. Significance is priced like a bakery prices things — a pineapple tart is something you may need to act on, a thirty-cent cookie is routine output that still counts. Round bakes are news, hexagonal ones are judgments, and the chocolate chips are legal concepts.

No raisins, ever.

Last Friday the oven opened at 5.33pm and turned out thirteen cookies: six from the news, seven from judgments, one pineapple tart, two left on the cooling rack. Busiest oven, public and administrative law, with four. That is the entire legal day.

## What it buys beyond being cheap

The obvious benefit is that one person can now do this, and that's true — I'm one person, and so is Raymond. But cost is the least interesting of it.

A dashboard answers the question you didn't know to ask. Search needs a query, and a practitioner opening a browser on Monday morning doesn't have one. They have a vague worry that something moved last week in an area they cover.

It also removes the need to triage. Every cookie gets published; significance decides how prominent it is, never whether it appears. A human-edited digest has to select, because the editor's attention is the scarce input. A manufactured unit has no such constraint, and the routine output is where the patterns are — you only see a run of similar sentencing decisions if nobody quietly dropped them for being boring.

And because each cookie carries its source, everything links back to the original judgment or announcement. The catalogue underneath indexes the full text of judgments but doesn't republish them. In law that matters more than it sounds: it's the difference between a toy and something you'd act on.

[When Building Gets Cheap But Knowing Stays Expensive](https://www.alt-counsel.com/when-building-gets-cheap-but-knowing-stays-expensive/?ref=legal-dashboards-count-win-rates)

## Singapore built everything except the thing you look at

The raw material has been sitting in the open for years. LawNet publishes free RSS of the last three months of judgments from the Supreme Court, the State Courts and the Family Courts. My own catalogue at data.zeeker.sg now holds 10,765 judgments, 927 headlines, 263 commentaries and 90 reference chapters, alongside enforcement decisions and government newsroom releases.

[From One Source to Three: When the Right Agent Showed Up](https://www.alt-counsel.com/from-one-source-to-three/?ref=legal-dashboards-count-win-rates)

The institutions are also well past search. LawNet has been publishing AI-generated summaries of unreported judgments since 2024, structured like the headnotes in the Singapore Law Reports — catchwords, facts, holdings — using GPT-Legal, a model IMDA built for the job and which reaches something like three-quarters of the profession. Tribunal decisions were added at the start of this year, and LawNet 4.0 put an AI search engine on top. This is careful, well-governed work and I expect to keep using it.

But look at the shape of it. A headnote is a document about a document: one judgment in, one summary out, sitting in a research platform you open when you already have a case in front of you. Ask LawNet about SGHC 166 and you get one excellent summary of SGHC 166. My counter got four cookies out of it and filed them under four different areas of law, next to a press release and an enforcement decision from the same morning.

So we have the feeds, the summaries and the search. What nobody had built is the thing you look at — the surface that tells you there was something worth searching for.

## Neither one replaces the other

Search answers the question you bring it. A counter shows you the day you would not have thought to ask about. Neither is wrong, and I'd rather have both than argue about which is the real product.

For solo counsels and small teams, the practical version is this: you are not going to outspend a compliance platform, and you don't need to. The expensive part of a legal dashboard is no longer the data or the engineering. It's deciding what a unit of legal change is for the people you serve, and what it should look like when they glance at it. That's a judgment about practice, not about technology, and it happens to be the thing a working lawyer is best placed to make.

Mine has been running quietly every weekday for a month. I still think of it as my workflow rather than a product, but after the talk I keep wondering what it would take to make it something other people could rely on.
