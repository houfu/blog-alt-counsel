---
title: 'Come Into the Bakery: What I Did With All That Legal Data'
slug: come-into-the-bakery
tags:
  - AI
  - LegalTech
  - zeeker
  - Singapore
custom_excerpt: >-
  Legal data has meant win rates and disposition times — the machinery around
  the law, never what the law now says. So I baked Singapore's legal day into
  something you take in at a glance, and I'm still wondering what a glance can
  give you.
status: published
featured: false
github_folder: sg-law-cookies
post_id: 6a81e4c75e82c50001b41c91
published_at: '2026-08-17T01:57:16.000Z'
feature_image: >-
  https://images.unsplash.com/photo-1499889808931-317a0255c0e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDZ8fG92ZW58ZW58MHx8fHwxNzg2OTE3MzY1fDA&ixlib=rb-4.1.0&q=80&w=2000
---

I gave a talk at the SCCE Singapore Regional last month, to compliance professionals, on compliance topics. I wanted to show them something about how I build without walking anyone through code, so I put [SG Law Cookies](https://cookies.zeeker.sg) on the screen and let it do the explaining. It is free, with nothing to sign up for.

![The front-page of SG Law Cookies on 14 August 2026](https://storage.ghost.io/c/33/4e/334edc26-d66c-4112-a0d8-6528c3cd17c4/content/images/2026/08/CleanShot-2026-08-17-at-06.05.23.png)

So: imagine a neighbourhood Singapore bakery from a bygone era. Cream and red, a shop sign in Chinese characters, a unit number over the door like an old shophouse. Established 2023, baked daily, no holidays. Every weekday morning the trays come out, and what is on them is yesterday's law. A sixty-cent cookie is worth knowing this week. A thirty-cent cookie is routine output that still counts, and it rests on the cooling rack.

![The counter map on 14 August 2026, showing the Kuih Bangkit display of cookies](https://storage.ghost.io/c/33/4e/334edc26-d66c-4112-a0d8-6528c3cd17c4/content/images/2026/08/CleanShot-2026-08-17-at-06.17.53.png)

There is also a counter map, which is the part people lean in at. Every area of law that saw activity that day is pressed as a kuih bangkit, sized by how much the day produced. A red dot means it is still warm. Threads running between them mean those areas shared doctrine that week.

No raisins, ever.

Last Friday the oven opened at 5.33pm and turned out thirteen cookies: six from the news and seven from judgments — one of them a pineapple tart, two left on the cooling rack. The busiest oven was public and administrative law, with four. That was a quiet day — seventeen is nearer typical, and I expect it to climb as the extraction gets more thorough.

Nobody in that room needed a legend. It was an aha moment for the audience, and quite a few people came up after the talk to ask how I did it.

## The kitchen behind the shop

The bakery is the easy half. It only works because there is a kitchen behind it, and the kitchen is Zeeker, which took years and still is a work in progress.

[data.zeeker.sg](https://data.zeeker.sg) curates Singapore's legal output every day — 10,765 judgments from the Supreme Court, the State Courts and below, 927 news headlines, 263 commentaries, 90 reference chapters, PDPC enforcement decisions, and the press releases coming out of the ministries and agencies. It indexes the full text of judgments for searching without republishing them, so every cookie points back at the original on the Judiciary's own site.

[From One Source to Three: When the Right Agent Showed Up](https://www.alt-counsel.com/from-one-source-to-three/?ref=come-into-the-bakery)

Many peers have said to me that Singapore's legal data infrastructure leaves much to be desired. I agree, and I acted on it. But investment demands returns, and for a long time I could not answer the obvious question about any of it: what can I actually do with all this data now that I have it? A catalogue is not an answer. It is a shelf. SG Law Cookies is the Zeeker showcase — one of the ways I am using my own legal data, and I hope it advances the conversation on this issue rather than just adding to it.

## What legal data has meant until now

Legal data has mostly meant metrics. Win rates by counsel. Motion grant rates before a particular judge. Time to disposition. Case counts broken down by subject matter. User satisfaction rates (are you happy with the court facilities or process even though you lost your case?).

Those are important numbers and I am not being sniffy about them. But look at what they describe. They describe the machinery around the law — how long it took, how often it worked, what it cost. Not one of them tells you what the law now says.

For that we have always had prose. Newsletters, alerts, feeds, client updates. I ran one myself: the first version of SG Law Cookies was a newsletter that went out for 516 weekdays from March 2023, summarising each day's legal news and opening with a six-line poem about sentencing appeals and money laundering prosecutions, because that was what large language models were capable of at the time. Same corpus, same jurisdiction, same author. Prose out, because prose was the only thing I could make.

![A daily digest from the first version of SG Law Cookies](https://storage.ghost.io/c/33/4e/334edc26-d66c-4112-a0d8-6528c3cd17c4/content/images/2026/08/CleanShot-2026-08-17-at-06.32.01.png)

What has been missing is anything in between. No way to take the content of the law — not the case counts, the actual developments — and organise it systematically into a page you can comprehend at a glance.

## The cookie as the unit

That is what a cookie is for. A cookie is the smallest unit of legal change that someone might need to act on, be aware of, or track. It is deliberately not a summary. A summary tries to compress a document faithfully; a cookie takes the signal out and leaves the rest, and how many you get depends on how many distinct propositions are in there rather than how long the document is.

Take one judgment from last Friday. [2026] SGHC 166 came out of the oven as four separate cookies, in four different areas of law: that silence and conduct can constitute fraudulent misrepresentation where a duty to correct exists; that damages for misrepresentation are limited to reliance loss rather than expectation loss; that piercing the corporate veil requires formal control as shareholder or director and not merely de facto influence; and that an individual's fraudulent misrepresentations can ground joint liability for unlawful means conspiracy with his company. One judgment, four propositions, four places on the counter. [2026] SGHC 167, decided the same day, produced three more — two in real property, one in trusts.

Because every cookie has the same shape, a ministry press release, a data protection enforcement decision and a High Court judgment can sit side by side and be compared.

Singapore already has good machinery on either side of this. LawNet has published AI-generated summaries of unreported judgments since 2024, structured like the headnotes in the Singapore Law Reports, built on a model IMDA made for the job, and it reaches most of the profession. But a headnote is a document about a document: one judgment in, one summary out, waiting in a research platform for the day you already have that case in front of you. Ask it about [2026] SGHC 166 and you get one excellent summary of [2026] SGHC 166.

Compliance platforms have been manufacturing units out of regulatory prose for over a decade — Corlytics since 2013. Enterprise deployments run to six figures a year, though monitoring-first tools start nearer three thousand. Either way it is a queue to work through, not a page anyone glances at.

[The Judgment, Not the Summary: How Zeeker MCP Can Change the Way you do Legal Research](https://www.alt-counsel.com/ect-no-lawyers-zeeker/?ref=come-into-the-bakery)

The counter is not trying to make you read. It shows you the shape of the day and gets out of the way. The design brief was the smell of the law, freshly baked coming out of the kitchen, so that you know what it is about without diving deep into it.

## Raymond found a unit too

Raymond Sun published something this month that I have not been able to stop thinking about, called [the live and breathing essay](https://www.techieray.com/LiveAndBreathingEssay).

His Global AI Regulation Tracker, built solo and now reaching more than 41,000 users across 195-odd jurisdictions, has a page on enforcement trends that reads like an ordinary essay. Behind it, every statement in that essay is stored as its own record, carrying the source it rests on, the date it was last tested against that source, and the subject it answers for. Once a week a scheduled job checks his tracker for new entries, works out which statements those entries affect, and proposes revisions to only those. He accepts or rejects each one. The date on the page is the date the essay was last checked against the evidence, not the date somebody wrote it.

He has done the same thing I did and arrived somewhere completely different. He found a unit of legal change and turned it into a deliverable — his unit is a statement in an essay, and his deliverable is a document that never quietly goes stale. Mine is a cookie, and my deliverable is a counter you glance at over coffee.

Neither is wrong, and neither of us picked a general-purpose answer. He wanted writing that stays true. I wanted a day you can take in without reading. The unit follows from that, not the other way round.

## I keep wondering what this gets us

Not "AI will read the law for you." That framing has been around for a decade and it keeps producing tools that answer questions you already knew to ask.

There is a kind of knowledge senior practitioners have that nobody teaches. A feel for where the law is moving — reading a new decision and sensing, before you have worked out why, that it sits oddly against something from two months ago. It comes from reading everything for years, which is why it tends to belong to people with either a long career or a research department behind them.

What I have been wondering, since the talk and while brainstorming novel uses of my data, is whether a counter can hand you some of that cheaply.

Not the knowledge. A sense. The design is built for it: the cooling rack keeps the routine decisions nobody would put in a newsletter, the weekly bake looks for doctrine that turned up in two unrelated places, and an area of law that stays warm several days running is visible without anyone having decided in advance that it mattered. Small things, individually not worth reporting, legible only in aggregate.

A sense is not an opinion, and it is nowhere near advice. It tells you where to look, which is why every cookie links to the original and why the site says plainly that these are machine-made signals with the occasional burnt edge.

Having operated the site for more than a month, I can see the methodology and the site still need some refinement. For example, the requirement to cover everything Zeeker collects creates an overview that might lack detail. Also, while FOLIO gives a nice framework for classifying news and issues by subject matter, it is built primarily around the United States, so some headers do not match.

The subtler problem is not accuracy. Holdings come out of the text, so a cookie rarely overstates one. The question is whether the machine picked the findings that actually matter, and that is a matter of opinion — which is exactly what a project like this should be running evals on, and does not yet.

[When Building Gets Cheap But Knowing Stays Expensive](https://www.alt-counsel.com/when-building-gets-cheap-but-knowing-stays-expensive/?ref=come-into-the-bakery)

So there’s still some work to do. But if a deft sense of the law is something you can pick up by glancing rather than by reading for twenty years, that would matter most to the people who never had the reading time — which is most of us.

I do not know yet. The oven is on either way.
