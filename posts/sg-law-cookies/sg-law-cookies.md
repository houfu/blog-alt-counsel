---
title: "I Vibe Coded a Bakery for Singapore Law. The Concept Was the Hard Part."
slug: "i-vibe-coded-a-bakery-for-singapore-law"
tags: ["AI", "LegalTech", "zeeker", "Singapore"]
status: draft
featured: false
github_folder: "sg-law-cookies"
---

I showed SG Law Cookies at the SCCE talk expecting to explain it. I had slides ready for that. I didn't need them. People looked at the screen and understood what they were looking at, and afterwards several of them came up to ask how I built it rather than what it was.

That was the eye-opening part, and it took me a while to work out why it happened. The explaining had already been done, three years earlier, by the decision to call the thing cookies.

The site has been running for about a month at [cookies.zeeker.sg](https://cookies.zeeker.sg). I haven't announced it, because I didn't build it to be announced. I built it as a workflow — something that tells me what happened in Singapore law each day, so I don't have to go and find out. That it works for other people is a discovery I made in a room, not a plan I had.

It is also the most complete answer I have to a question I've been circling for three years: what does it actually take to turn legal data into an application someone would use? Not a database. Not an API. An application. The answer turned out to have very little to do with the data or the code.

## The site is a bakery, and that isn't decoration

Every weekday it bakes. The homepage is a counter map: every area of law that saw activity that day, drawn as a kuih bangkit, sized by how much the day produced. Telecommunications had one. Criminal had two. A red dot means it's still warm. Ochre threads between them mean those areas shared doctrine that week.

Elsewhere on the site the encoding keeps going. Significance is priced the way a bakery prices its bakes: a pineapple tart is something you may need to act on, a sixty-cent cookie is worth knowing this week, a thirty-cent cookie is routine output that still counts and sits on the cooling rack. The chocolate chips on a cookie are its legal concepts — more chips, more doctrine. Round bakes are news. Hexagonal shortbread are judgments.

No raisins, ever.

I could have shipped all of that as a legend: *node size = document count, edge = shared taxonomy term, colour = recency*. It would have been the same data and the same code. What it would have cost is the thing that happened in the room — a lawyer glancing at a screen and knowing, without being told, that a big warm shape means something happened today in an area they care about.

## The idiom came before the code

I have always wanted this site to be about cookies. The idiom came first, before anything — before the scrapers, before the database, before I knew what would be in it. I wanted it to focus on the smell of the law, freshly baked coming out of the kitchen. If you're into that, you know what it is about without diving deep into it.

That was 2023. The first version went up on 22 March that year, and it was a much smaller idea: a bot called Your Amicus that read Singapore Law Watch every weekday, summarised each article in about a hundred words, and — because it amused me — opened with a six-line poem about the day's sentencing appeals and money laundering prosecutions. It ran for 516 weekdays and stopped on 30 April 2025.

Almost none of it survived. Amicus is gone. The poem is gone. The summariser went from GPT-3.5 to GPT-4 to GPT-4o, and now the extraction runs on Claude, with a local Qwen model as the cost-free alternative when I want it. The orchestration went from LangChain to a Rivet graph to Mirascope. Hugo became a Python site generator. Scraping Singapore Law Watch's RSS directly became querying my own catalogue.

The word is the only thing I never rewrote. And by the second version it had stopped being a name and started being a specification.

## A cookie stopped being a summary

Here is the part I think is genuinely interesting, and it isn't the bakery.

In the first version, a cookie was a summary of an article. One article in, one summary out. That is the obvious thing to build when you have a feed of legal news, and it is what most people build.

A cookie is now the smallest unit of legal change that someone might need to act on, be aware of, or track. It is explicitly not a summary. A summary tries to compress a source faithfully; a cookie extracts the signal and discards the rest. A forty-thousand-word Court of Appeal judgment might produce exactly one: *the Court of Appeal holds that arbitral findings can ground abuse-of-process arguments in subsequent litigation.* A single press release might produce three. The number of cookies depends on how many distinct legal propositions the document contains, not how long it is.

That redefinition is what turned a catalogue into an application. data.zeeker.sg holds the raw material — headlines, government newsrooms, judgments, enforcement decisions. Having that is necessary and nowhere near sufficient. A database answers questions you already know to ask. A practitioner opening a browser at 9am doesn't have a query; they have a vague worry that something happened yesterday that concerns them.

[From One Source to Three: When the Right Agent Showed Up](https://www.alt-counsel.com/from-one-source-to-three/?ref=i-vibe-coded-a-bakery-for-singapore-law)

Getting from one to the other meant deciding what the unit is, what makes one item more significant than another, and what "today" means when a judgment's decision date is months before the day it surfaces. None of those are data questions or coding questions. Every cookie is published, incidentally — significance decides prominence, never inclusion. I did not want to build a thing that quietly dropped the boring output, because the boring output is where patterns live.

## I vibe coded it, from a PRD I didn't vibe

I should be honest about how the code got written, because it's the question I actually got asked.

I mostly vibe coded it. I described what I wanted and let the model build it, and I did not hand-write most of what is in that repository.

What I did not vibe code was the specification. The PRD runs to 961 lines and I workshopped it carefully before any of this existed. I explored eight different visual concepts before the bakery shopfront won — a night desk, a morning paper, an atlas, a skyline, and four others. That amount of detail cannot be derived from a bakery, or from a data website, or by scruffing up the first version and hoping.

Pure vibe coding gives you something that demos beautifully on a Tuesday and collapses the first time a real judgment arrives with a weird structure. Pure specification gives you a very fine document and no website. Neither is wrong. But the ratio matters more than either: the model can absorb an enormous amount of detail if you have actually decided the detail, and it will invent something plausible and shallow if you haven't. The repository has twenty test files. I didn't write most of them either. I did decide what had to be true.

## What I'd tell someone sitting on legal data

The two things people assume are hard are getting cheaper every month. Legal data in Singapore is more available than it was three years ago, and I have spent enough hours on that problem to say so with feeling. Code is cheaper still.

[When Building Gets Cheap But Knowing Stays Expensive](https://www.alt-counsel.com/when-building-gets-cheap-but-knowing-stays-expensive/?ref=i-vibe-coded-a-bakery-for-singapore-law)

The scarce input is the concept — knowing what a unit is, what makes it matter, and what a person should feel when they look at the screen for two seconds. That is the part no model brings you, and it is also the part you are most likely to skip, because it doesn't feel like building. It feels like sitting around deciding what to call things.

For solo counsels and small teams, that's the encouraging half of this. You are not going to out-engineer a vendor. But you know what a working lawyer needs to notice on a Tuesday morning, and that knowledge is now most of the product rather than a nice-to-have on top of it.

It's still just my workflow. It runs every weekday whether or not anyone visits, and for now that's enough — though after the talk I find myself wondering what it would take to make it something people could rely on rather than something I happen to publish. I renewed the domain, so I suppose I'll find out.
