---
title: "Come Into the Bakery: What I Did With All That Legal Data"
slug: "come-into-the-bakery"
tags: ["AI", "LegalTech", "zeeker", "Singapore"]
status: draft
featured: false
github_folder: "sg-law-cookies"
---

I gave a talk at the SCCE last month, to compliance professionals, on compliance topics. Not a programming audience, and not a product demo. I wanted to show them something about how I build without walking anyone through code or taking the long technical way round, so I put SG Law Cookies on the screen and let it do the explaining.

So: imagine a neighbourhood Singapore bakery from a bygone era. Cream and red, a shop sign in Chinese characters, a unit number over the door like an old shophouse. Established 2023, baked daily, no holidays. Every weekday morning the trays come out, and what is on them is yesterday's law.

Round bakes are news. Hexagonal shortbread are judgments. A pineapple tart is something that may change what you do on Monday — a new test, a deadline, a precedent worth pleading around. A sixty-cent cookie is worth knowing this week. A thirty-cent cookie is routine output that still counts, and it rests on the cooling rack. The chocolate chips on each one are its legal concepts: more chips, more doctrine.

No raisins, ever.

There is also a counter map, which is the part people lean in at. Every area of law that saw activity that day is pressed as a kuih bangkit, sized by how much the day produced. A red dot means it is still warm. Threads running between them mean those areas shared doctrine that week.

Last Friday the oven opened at 5.33pm and turned out thirteen cookies: six from the news, seven from judgments, one pineapple tart, two left on the cooling rack. The busiest oven was public and administrative law, with four.

Nobody in that room needed a legend. That was the point of showing it.

## The kitchen behind the shop

The bakery is the easy half. It only works because there is a kitchen behind it, and the kitchen is Zeeker, which took years.

data.zeeker.sg curates Singapore's legal output every day — 10,765 judgments from the Supreme Court, the State Courts and below, 927 news headlines, 263 commentaries, 90 reference chapters, PDPC enforcement decisions, and the press releases coming out of the ministries and agencies. It indexes the full text of judgments for searching without republishing them, so every cookie points back at the original on the Judiciary's own site.

[From One Source to Three: When the Right Agent Showed Up](https://www.alt-counsel.com/from-one-source-to-three/?ref=come-into-the-bakery)

For a long time I could not answer the obvious question about any of it. What can I actually do with all this data now that I have it? A catalogue is not an answer. It is a shelf. Cookies is the Zeeker showcase — the thing that demonstrates what the shelf was for.

## What legal data has meant until now

Legal data has mostly meant metrics. Win rates by counsel. Motion grant rates before a particular judge. Time to disposition. Case counts broken down by subject matter. Settlement sums.

Those are important numbers and I am not being sniffy about them. If you are deciding whether to file in front of a particular judge, a grant rate is exactly what you want to know.

But look at what they describe. They describe the machinery around the law — how long it took, how often it worked, what it cost. Not one of them tells you what the law now says.

For that we have always had prose. Newsletters, alerts, feeds, client updates. I ran one myself: the first version of SG Law Cookies was a newsletter that went out for 516 weekdays from March 2023, summarising each day's legal news and opening with a six-line poem about sentencing appeals and money laundering prosecutions, because that amused me at the time. Same corpus, same jurisdiction, same author. Prose out, because prose was the only thing I could make.

What has been missing is anything in between. No way to take the content of the law — not the case counts, the actual developments — and organise it systematically into a page you can comprehend at a glance.

That is what a cookie is for. A cookie is the smallest unit of legal change that someone might need to act on, be aware of, or track. It is deliberately not a summary. A summary tries to compress a document faithfully; a cookie takes the signal out and leaves the rest, and how many you get depends on how many distinct propositions are in there rather than how long the document is.

Take one judgment from last Friday. [2026] SGHC 166 came out of the oven as four separate cookies, in four different areas of law: that silence and conduct can constitute fraudulent misrepresentation where a duty to correct exists; that damages for misrepresentation are limited to reliance loss rather than expectation loss; that piercing the corporate veil requires formal control as shareholder or director and not merely de facto influence; and that an individual's fraudulent misrepresentations can ground joint liability for unlawful means conspiracy with his company. One judgment, four propositions, four places on the counter.

Because every cookie has the same shape, a ministry press release, a data protection enforcement decision and a High Court judgment can sit side by side and be compared. That is the whole trick.

Singapore already has good machinery on either side of this. LawNet has published AI-generated summaries of unreported judgments since 2024, structured like the headnotes in the Singapore Law Reports, built on a model IMDA made for the job, and it reaches most of the profession. But a headnote is a document about a document: one judgment in, one summary out, waiting in a research platform for the day you already have that case in front of you. Ask it about SGHC 166 and you get one excellent summary of SGHC 166.

The counter is not trying to make you read. It does not want you to dive deep. It shows you the shape of the day and gets out of the way, and every cookie links to the original for the one or two that turn out to matter to you. The design brief was the smell of the law, freshly baked coming out of the kitchen, so that you know what it is about without diving deep into it.

## Raymond found a unit too

Raymond Sun published something this month that I have not been able to stop thinking about, called the live and breathing essay.

His Global AI Regulation Tracker has a page on enforcement trends that reads like an ordinary essay. Behind it, every statement in that essay is stored as its own record, carrying the source it rests on, the date it was last tested against that source, and the subject it answers for. Once a week a scheduled job checks his tracker for new entries, works out which statements those entries affect, and proposes revisions to only those. He accepts or rejects each one. The date on the page is the date the essay was last checked against the evidence, not the date somebody wrote it.

He has done the same thing I did and arrived somewhere completely different. He found a unit of legal change and turned it into a deliverable — his unit is a statement in an essay, and his deliverable is a document that never quietly goes stale. Mine is a cookie, and my deliverable is a counter you glance at over coffee.

Neither is wrong, and neither of us picked a general-purpose answer. He wanted writing that stays true. I wanted a day you can take in without reading. The unit follows from that, not the other way round.

## The future is this

Not "AI will read the law for you." That framing has been around for a decade and it keeps producing tools that answer questions you already knew to ask.

The interesting decision sits upstream of the technology, and it is a legal one: what counts as a unit of legal change in your world, and what it should turn into. A statement in a living document. A cookie on a counter. An obligation mapped to a control, which is what the compliance platforms have sold for years at six figures a year, and which is the right answer if a compliance department is who you serve.

[When Building Gets Cheap But Knowing Stays Expensive](https://www.alt-counsel.com/when-building-gets-cheap-but-knowing-stays-expensive/?ref=come-into-the-bakery)

For solo counsels and small teams, that is the encouraging part. You are not going to outbuild a vendor and you do not need to. But you know what the people you serve need to notice on a Tuesday morning, and that judgment is now most of the product rather than a garnish on top of it.

Cookies has been running quietly every weekday for a month, and I still think of it as my own workflow more than anything else. After the talk, though, I keep wondering what it would take to make it something other people could rely on. The oven is on either way.
