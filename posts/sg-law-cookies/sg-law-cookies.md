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

You can **borrow citations**. Case law is a network because judgments cite each other, so you can draw the graph without inventing anything — one study of European human rights case law built a network of 9,777 judgments and nearly 40,000 links. But a citation is a fact about a document, not a judgment about what changed.

Or you can **manufacture obligations**, which is the one that matters. Regulatory change management firms have been converting regulatory text into trackable requirements for over a decade. Corlytics has done it since 2013, across 120 countries and 2,500 regulators, using AI for classification, summarisation and mapping. So no, turning legal prose into structured units is not new, and I'd rather say that plainly than pretend I invented it.

What is new is the price and the purpose. That kind of platform starts in the low six figures a year, its unit is an obligation mapped to your internal controls, its buyer is a financial services compliance department, and its output is a queue of things to work through. None of which is wrong. It's just a different thing from what I wanted.

## The unit is the invention

A cookie is the smallest unit of legal change that someone might need to act on, be aware of, or track. It is deliberately not a summary. A summary tries to compress a source faithfully; a cookie extracts the signal and throws the rest away. A forty-thousand-word Court of Appeal judgment might yield exactly one. A single ministry press release might yield three. How many you get depends on how many distinct legal propositions are in there, not how long the document is.

Every cookie carries the same fields, whatever it came from — a headline, why it matters, a significance, and a set of legal concepts drawn from a standard ontology rather than labels I made up. That uniformity is the whole trick. A press release, a data protection enforcement decision and a High Court judgment come out the same shape, which means they can sit on the same surface and be compared.

Then you have to decide where they sit, and this is where the countable-unit problem comes back in a different form. Geography is given. Citations are given. There is no natural map of doctrine — no agreed distance between employment law and privacy — so if you want a space, you have to invent one, and an invented space needs a metaphor the reader already knows.

Mine has been a bakery since 2023. The idiom came first, before the scrapers, before the database, before I knew what would be in it: I wanted it to focus on the smell of the law, freshly baked coming out of the kitchen, so that you know what it is about without diving deep into it.

So the homepage is a counter. Each area of law that saw activity is a kuih bangkit, sized by the day's bake. A red dot means still warm. Threads between them mean those areas shared doctrine that week. Significance is priced like a bakery prices things — a pineapple tart is something you may need to act on, a thirty-cent cookie is routine output that still counts. Round bakes are news, hexagonal ones are judgments, and the chocolate chips are legal concepts.

No raisins, ever.

## What it buys beyond being cheap

The obvious benefit is that one person can now do this, and that's true — I'm one person, and so is Raymond. But cost is the least interesting of it.

A dashboard answers the question you didn't know to ask. Search needs a query, and a practitioner opening a browser on Monday morning doesn't have one. They have a vague worry that something moved last week in an area they cover.

It also removes the need to triage. Every cookie gets published; significance decides how prominent it is, never whether it appears. A human-edited digest has to select, because the editor's attention is the scarce input. A manufactured unit has no such constraint, and the routine output is where the patterns are — you only see a run of similar sentencing decisions if nobody quietly dropped them for being boring.

And because each cookie carries its source, everything links back to the original judgment or announcement. The catalogue underneath indexes the full text of judgments but doesn't republish them. In law that matters more than it sounds: it's the difference between a toy and something you'd act on.

[When Building Gets Cheap But Knowing Stays Expensive](https://www.alt-counsel.com/when-building-gets-cheap-but-knowing-stays-expensive/?ref=legal-dashboards-count-win-rates)

## Singapore has the feeds and the search. Nobody built the counter.

The raw material has been sitting in the open for years. LawNet publishes free RSS of the last three months of judgments from the Supreme Court, the State Courts and the Family Courts. My own catalogue at data.zeeker.sg now holds 10,765 judgments, 927 headlines, 263 commentaries and 90 reference chapters, alongside enforcement decisions and government newsroom releases.

[From One Source to Three: When the Right Agent Showed Up](https://www.alt-counsel.com/from-one-source-to-three/?ref=legal-dashboards-count-win-rates)

And the query tool exists too. The Academy of Law launched LawNet 4.0 at TechLaw.Fest last year, with an AI search engine built with IMDA that answers questions with sources drawn from Singapore case law and legislation. It is a serious piece of work and I expect to use it.

So we have the feeds, and we have the search. What nobody had built is the thing you look at — the surface that tells you there was something worth searching for.

## Neither one replaces the other

Search answers the question you bring it. A counter shows you the day you would not have thought to ask about. Neither is wrong, and I'd rather have both than argue about which is the real product.

For solo counsels and small teams, the practical version is this: you are not going to outspend a compliance platform, and you don't need to. The expensive part of a legal dashboard is no longer the data or the engineering. It's deciding what a unit of legal change is for the people you serve, and what it should look like when they glance at it. That's a judgment about practice, not about technology, and it happens to be the thing a working lawyer is best placed to make.

Mine has been running quietly every weekday for a month. I still think of it as my workflow rather than a product, but after the talk I keep wondering what it would take to make it something other people could rely on.
