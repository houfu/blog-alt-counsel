---
title: "Legal Dashboards Count Win Rates. I Wanted One That Counts the Law."
slug: "legal-dashboards-count-win-rates"
tags: ["AI", "LegalTech", "zeeker", "Singapore"]
status: draft
featured: false
github_folder: "sg-law-cookies"
---

I showed SG Law Cookies at the SCCE talk expecting to explain it. I had slides ready for that. I didn't need them. People looked at the screen and started asking how I had built it, rather than what it was.

What was on the screen was a Thursday. Seventeen cookies, twelve from the news, five from judgments, three of them still warm. Employment had two. Privacy had two. Criminal had two. Telecommunications had one, and it had a red dot on it, which means it landed that morning. Corporate governance had one, also warm. Between the shapes ran a few faint threads, which is the site telling you those areas leaned on the same doctrine that week.

Nobody asked what a red dot meant.

That is the part I have been turning over since. The site has been running for about a month at [cookies.zeeker.sg](https://cookies.zeeker.sg), unannounced, because I built it as a workflow for myself rather than a product for anyone else. But a room full of compliance people took in a day of Singapore law at a glance, off a screen, with no legend — and I don't think that was possible a couple of years ago.

## I used to publish the same day as a poem

Here is the same idea, from the first version, on 31 January 2025:

> In courts where justice seeks its light,
> Migrant voices rise against the night.
> Kickbacks shadowed by greed's cruel hand,
> Yet laws stand firm, a guiding strand.
> Through vigilance and truth's embrace,
> Hope for fairness finds its place.

Underneath it sat a hundred-word summary of each article — including the one that verse is about, a manager who collected roughly $396,000 in kickbacks from 57 migrant workers for renewing their work permits, and got 24 weeks' jail.

That version ran for 516 weekdays. A bot called Your Amicus introduced itself every morning as your friendly little legal bot from the little island of Singapore, and I still think the poems were funny.

Same corpus. Same jurisdiction. Same author. But prose came out, because prose was the only thing I could make. If you wanted to know whether anything happened in employment law that week, you read five newsletters and remembered.

## The reason wasn't the data

I assumed for a long time that what stood between me and something better was data. Get the judgments, get the press releases, get them structured, and the rest follows. So I spent a couple of years on that, and now the catalogue behind this holds 10,765 judgments, 927 headlines, 263 commentaries and 90 reference chapters.

[From One Source to Three: When the Right Agent Showed Up](https://www.alt-counsel.com/from-one-source-to-three/?ref=legal-dashboards-count-win-rates)

Having the data changed less than I expected. A database answers questions you already know to ask, and the reason legal dashboards look the way they do isn't scarcity of data either. It's that a dashboard needs something countable, and the only countable things in law were procedural.

That's why every legal dashboard I've used measures the machinery rather than the law. Motion grant rates, time to disposition, settlement sums, win rates by counsel — one vendor crawls over three thousand courts to produce them. All real, all useful if you're deciding whether to file in front of a particular judge. None of it tells you what the law now says. A docket entry is already structured: a date, a type, an outcome. A judgment is forty thousand words that resist being turned into anything you can plot.

Win rates were never what anyone actually wanted to know. They were what we could count.

There are ways around this and I should be honest that people found them before me. You can borrow a map, the way Raymond Sun's Global AI Regulation Tracker does across 195 jurisdictions — impressive work, and geography means it needs no legend. You can borrow citations, because judgments already cite each other. Or you can pay for it: regulatory change management firms have been converting regulatory text into trackable obligations since 2013, across 120 countries, from around six figures a year. Turning legal prose into structured units is not new. It's just been expensive, aimed at compliance departments, and shaped like a work queue.

## So the unit had to be invented

A cookie is the smallest unit of legal change that someone might need to act on, be aware of, or track. It is deliberately not a summary. A summary compresses a source faithfully; a cookie takes the signal and drops the rest. A forty-thousand-word Court of Appeal judgment can come out as a single line about arbitral findings grounding an abuse-of-process argument. A ministry press release might give three. What decides the number is how many distinct legal propositions are in there, not how long the document is.

Once every development has that shape, the seventeen things that happened on a Thursday become comparable, whether they came from a court, a regulator or a newsroom.

Then you have to decide where they sit, and the counting problem returns in a different form. Geography is given. Citation networks are given. There is no natural map of doctrine — nobody agrees how far employment law sits from privacy — so you have to invent the space, and an invented space only works if the reader already knows how to read it.

Mine has been a bakery since 2023, before any of the code. I wanted it to focus on the smell of the law, freshly baked coming out of the kitchen, so that you know what it is about without diving deep into it.

So each area of law is a kuih bangkit, sized by the day's bake, warm if it just landed. Significance is priced the way a bakery prices things: a pineapple tart is something you may need to act on, a thirty-cent cookie is routine output that still counts. Round bakes are news, hexagonal ones are judgments, and the chocolate chips are legal concepts.

No raisins, ever.

## What that Thursday gives me that a search box doesn't

The obvious benefit is cost — one person can do this now, and I'm one person. But cost is the least of it.

I didn't know to ask about telecommunications that morning. Nobody in that room did either, which is the point: a search box needs a question, and on a Monday you don't have one. You have a vague worry that something moved in an area you cover.

It also means nothing gets triaged away. Every cookie is published; significance decides how prominent it is, never whether it appears. A person writing a digest has to select, because their attention is the scarce thing. That's how you lose the fourth similar sentencing decision in a month — individually boring, and the only way you'd ever notice the pattern.

And every cookie links back to the original judgment or announcement. The catalogue indexes the full text but doesn't republish it. In law that matters more than it sounds.

## Singapore has the feeds and the search. Nobody built the counter.

None of the raw material is secret. LawNet has published free RSS of the last three months of judgments for years. The Academy of Law launched LawNet 4.0 at TechLaw.Fest with an AI search engine built with IMDA, and it's a serious piece of work I expect to use.

So we have the feeds, and now we have the search. What nobody had built is the thing you look at — the surface that tells you there was something worth searching for in the first place.

Neither replaces the other. Search answers the question you bring it; a counter shows you the day you wouldn't have thought to ask about.

For solo counsels and small teams, the useful version is this. You are not going to outspend a compliance platform and you don't need to. The expensive part of a legal dashboard is no longer the data or the engineering — it's deciding what a unit of legal change is for the people you serve, and what it should look like when they glance at it. That's a judgment about practice rather than technology, which makes it the part a working lawyer is actually best placed to make.

Mine still runs quietly every weekday, and I still think of it as my workflow. After that talk I keep wondering what it would take to make it something other people could rely on.
