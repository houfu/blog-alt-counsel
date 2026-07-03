---
title: Lawyers Are Building. Just Not On Each Other's Code.
slug: lawyers-not-on-each-others-code
custom_excerpt: >-
  Mike got 2,657 stars in eleven days and six merged pull requests. The
  LegalQuants directory has 112 lawyer-coders and one repo that cleared the bar
  — mine. Legal open source isn't a community yet. It's a federation of
  solo-author archipelagos.
tags:
  - OpenSource
  - LegalTech
  - Programming
  - AI
status: scheduled
featured: false
github_folder: legal-oss-contribution
post_id: 6a009daff5b377000154ff9a
published_at: '2026-05-11T01:15:11.000Z'
feature_image: >-
  https://images.unsplash.com/photo-1626118439040-97551af4c74c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDI2fHxpc2xhbmRzfGVufDB8fHx8MTc3ODQyNTUxN3ww&ixlib=rb-4.1.0&q=80&w=2000
---

Lately I've been asked to speak more to in-house counsel about using AI in legal departments. The format I picked was not a lecture or a workshop. Instead, we would ask a small group of lawyers to bring down their laptops. It's a small group so it's possible (and something I would ask for) that they would complain about how little they understand, and how difficult it is for them to keep up with what's changing.

The moment I find most gratifying is when they "get" it. I am not asking them to vibe code a web app or leave with a result. Sometimes they understand how to prompt or a way to make AI work better for them. But ultimately, I want them to know what's possible and that they can do it too. I want to share that feeling of freedom, and that code makes it possible.

For me, the way I've sustained that feeling is through coding and open source — I've maintained [redlines](https://github.com/houfu/redlines) since 2021. The honest version, though, is that my own outbound contribution record is dismal. The last pull request I got merged into someone else's legal-OSS repo was a docs typo on `docassemble` — in 2019. Almost two years before I'd even started `redlines`. So when I describe the rest of the field, know I'm describing the same wall I keep hitting.

<bookmark url="https://www.alt-counsel.com/open-source-ai-and-why-october-matters/" />

However, let's face it — lawyer-coders are at a massive disadvantage. For one, this ain't our main rodeo. But more relevantly, we have few chances to practice it. Writing code is viable. Reviewing code that you don't write and bringing all that in line with a project shared with others? Unheard of.

So I fear that many of the folks who have tasted freedom will soon get frustrated. We need others who would comment objectively on our code and ideas. We need others who would encourage us when we get stuck and get us looking in the right direction. In short, we need *community*. It's a long journey, and for a very long while, it was very lonely for me.

These feelings of frustration, of reckoning with our limitations, were brought strongly to the fore again with what may be the biggest legal open source event in years.

## Mike, in eleven days

You may have seen [Mike](https://github.com/willchen96/mike) on your timeline. It is — by current count — the most viral legal-AI launch I can remember. A former BigLaw associate, Will Chen, vibe-coded an open-source legal AI platform in two weeks, released it under AGPL-3.0, and watched it [hit 1,000 stars in seventy-two hours](https://www.artificiallawyer.com/2026/05/04/mike-the-open-source-legal-ai-platform-will-chen-interview/). Trade press celebrated. LinkedIn lit up. Twitter and Reddit remonstrated.

By day eleven (as of 10 May), the metrics looked like this:

| Metric | Count |
|---|---:|
| Stars | 2,657 |
| Forks | 759 |
| Watchers | 36 |
| Open issues | 29 |
| Open pull requests | 10 |
| Closed-not-merged PRs | 16 |
| Merged pull requests | 6 |
| Last push to main | 10 May |

To explain briefly:

- If you like a project, the least you can do is to **star** it. You just need to press a button. On the other hand, if you want to know whether there are new releases or the like, you have to **watch** it.
- When you **fork** an open source project, you create a copy of the project for yourself. Whatever changes you make stays in your fork.
- If you want to contribute back to the original project, you open a **pull request** to ask the original project to accept your changes.
- If the original project approves, your pull request is **merged** and your work becomes part of the main project for everyone who uses it. Sometimes your change is rejected or you don't want to contribute any more, so your pull request is closed.

Looking closely at what the forks actually are reveals a more nuanced picture. Mike's fork count has grown past 750 since launch. I sampled 100 of them at the day-nine mark, when the count was 675, to see some fascinating results.

mike-fork-mosaic.svg

Eighty-seven of the hundred are byte-identical to upstream. Four more are size-modified with no commits at all. Of the remaining nine, eight are some number of commits ahead — most by single digits. The last one is a Turkish localisation that has diverged enough to be its own thing. Across the ten *most* active forks, total stars: zero. These forks weren't contributors-in-waiting. They were bookmarks — a way of saying *I'm interested* without committing to anything.

## The shape across the field

I'm not picking on Mike because I think it's not a "real" open-source project, or because vibe-coded code is bad code. I starred it myself on Day 2 of its launch, like everyone else. The reason I highlighted Mike is that it has a recognisable shape, and once you find it, you start to see parallels in LegalTech open source. 

Including at the other end of the resource spectrum.

Harvey, the $11 billion proprietary legal AI vendor which also shares a name with a TV character, has been releasing things as "open source" too. Their `biglaw-bench` repo is **twenty-one months old**, has 145 stars, and exactly **one merged pull request** — a README link fix from a Harvey researcher. The full benchmark dataset is gated behind a contact form. Their just-launched [Legal Agent Benchmark (LAB)](https://github.com/harveyai/harvey-labs) has 43 merged pull requests — 38 of them from three Harvey engineers. The remaining five are one-off external contributions. Eight more external pull requests, filed since launch, are sitting open and unreviewed.

None of this is anomalous behaviour for corporate research infrastructure. Staff PRs get merged because the team has bandwidth and incentive to maintain the project. External PRs sit open because onboarding outside contributors to the evaluation logic of a proprietary benchmark isn't the team's job. That's the expected pattern. It's also the reason calling it open source is a stretch.

Stack a few of these next to each other and the same shape resolves at every scale.

How seven legal-OSS projects compare on popularity, effort, and outside engagement.png

The crown of each tree is stars. The depth of the roots is total merged pull requests. The colour of the roots is what fraction of those merges came from outside the maintainer's circle — grey for none, red for a real community.

Mike is a giant crown over no roots at all. Harvey LAB and `biglaw-bench` have crowns and a few thin grey roots: pull requests do get merged, but the people merging are the same people writing them. 

For large, well-funded organisations who can pay for their own engineering team, releasing code for free or expecting others to contribute raises questions. The Open Source Initiative used a phrase for it in their [October 2025 maintainers report](https://opensource.org/wp-content/uploads/2025/10/osi_maintainers.pdf): ***"Open Source theatre"*** — the welcome mat is rolled out, but in practice not every kind of contribution is equally welcome in every area.

There is a place for corporate-released benchmarks that anchor research without inviting outside committers. They just aren't *community* artefacts. The jury is out for me on this one.

## And the lawyer-coders themselves

That's the project-level picture. The people-level picture is, if anything, sharper.

The LegalQuants directory — a self-selected community of practising lawyer-coders — has 112 listed members. I audited 101 of them against a bar I'd set: at least 100 stars, multiple contributors, and ongoing releases. Only one repo cleared it — mine, which makes this awkward to write.

Before that lands too hard: many LegalQuants members are recent arrivals to coding, often through AI tools. The bar I set rewards years of compounding work — releases, reviewers, sustained reach. The audit isn't asking "why haven't they done it?" It's asking whether the *infrastructure* for them to contribute to actually exists yet. Right now, mostly, it doesn't.

I broadened the search to include the `lawyersongithub` list and a small set of active veterans I or others already know of. Ninety-three handles in total. For each, I asked one question: how often do they file pull requests that get merged into a repo they don't own and aren't affiliated with — once you take out their employer, the foundation they sit on the board of, and the projects they founded?

lawyer-coder-pr-beeswarm.svg

Almost everyone is on the floor. The rare lawyers who *do* contribute outwards at scale (a handful of green dots near the apex) are almost all developers-who-became-lawyers, not lawyers-who-learned-to-code. The irony is that the best place to practice open source skills isn't on legal projects — though, as we'll see, that's only part of why lawyer-coders aren't contributing.

Even at the top, lawyer-coders don't push to each other's projects. Every island is held by its own maintainer. Legal open-source isn't a community yet. It's a federation of solo-author archipelagos.

## What makes a project graduate from demo to codebase

When people get into open source, they imagine strangers respectfully using their code and thanking them for it. This rarely happens. GitHub is a graveyard of broken dreams and abandoned code.

Most coders releasing their first project don't realise how different being an *author* is from being a *maintainer*. Author work is the fun part — designing, building, shipping. Maintainer work is reading other people's code, defending the project's choices for the hundredth time, deciding which licence to keep, deciding what counts as in-scope. It's a lot of work, mostly unpaid, often thankless.

<bookmark url="https://www.alt-counsel.com/tool-vs-infrastructure-mindset/" />

Will Chen, to his credit, has been candid that he's working through this. In [his interview with Artificial Lawyer](https://www.artificiallawyer.com/2026/05/04/mike-the-open-source-legal-ai-platform-will-chen-interview/) he framed Mike's contribution model as an open question and said he was considering switching from AGPL-3.0 to a more permissive licence. That's not failure — that's the maintainer work, done in public.

I'd suggest the difference between a personal project and an open source project is *sustained outside contributions*. 

If you referred to the right side of the tree and roots diagram, I highlighted two open source legal projects — a contract and document generator named `docassemble` and Free Law Project's famous `courtlistener`. They've been going for years with sustained contributions from others.

The impact of such projects extends beyond GitHub. `docassemble` is used in for-profit and non-profit projects. `docassemble`'s creator and sole maintainer Jonathan Pyle received a "10 year service award" for his contributions this year at Suffolk University's LITCon.

https://www.youtube.com/live/Po7JwzrYVhE?si=i5hoNBdvd5RUIwwk&t=317

(Full disclosure, I am a daily `docassemble` user and one time I did propose a tiny fix to the `docassemble` docs which Jonathan Pyle fixed.) 

## Why this might be happening

Few legal-OSS projects ever crossed that line and stayed there. I wouldn’t suggest that every project you would like to open source should aim for that too. However legal open source faces many headwinds and produces too little to even be relevant to law firms or departments.

If you ask any lawyer who can code, there are several problems that make contributing to open source difficult. Parlaying your professional experience risks confidentiality breaches. There is an open question of unlicensed practice. It appears law firms and other employers jealously guard their employee’s contributions by way of employment contracts and IP restrictions, even if evidently companies such as Harvey do see the benefit of contributing to a community via open source. 

If you ask **me**, the biggest obstacle of a lawyer coder contributing to an open source project is not so much the "coder" part of that sentence, but the "lawyer" part of it. While maintaining `redlines` I've found myself frustrated reading other people's code, questioning what the point of the changes is and where the whole thing is going. I'd like to think my background sets me apart. Mostly, it doesn't. It's been a long and lonely journey.

<bookmark url="https://www.alt-counsel.com/the-unexpected-joys-of-open-source/" />

There's research that explains the pattern. Larry Richard's Caliper studies show that lawyers trend towards high skepticism, low resilience, high risk-aversion, and low default sociability — traits that predispose lawyers to go it alone, demand error-free work, and resist feedback. These traits make it hard to be part of a project, let alone one that asks us to share time and expertise for free.

The result, for many lawyer coders, is that an open source project ends up as an individual showcase — proof of capability for a crowd that treats any coding ability as exotic. Where it goes from there is anyone's guess.

## Why this matters for solo counsels

For lawyer coders, even if becoming a (likely-not-well-remunerated) open source maintainer isn't your goal, this still matters. The skills you can practice in isolation are a small subset of the skills that keep you sharp. Reading code you didn't write, having yours reviewed, learning the conventions of a project bigger than your own — these only happen in community. They aren't practised in your law firm or your law department either. Open source is the only place to do it.

That isolation has a real cost. If you've built something alone for eighteen months and no one has ever reviewed your code, you don't know whether your judgment is improving or whether you're entrenching the same blind spots. You feel like you're learning. You may be compounding habits the next set of eyes would have flagged in an afternoon. Most lawyer-coders I know — myself included — sit somewhere in that uncertainty.

For solo counsels and small firms, the infrastructure side matters too: free, stable, community-maintained tools are what stand between $30/month that almost works and $50K vendor lock-in. But that infrastructure only exists if a community sustains it. Stars and forks won't.

## What's coming in Part 2

I've spent this post laying out the diagnosis: the Mike pattern, the shape across the field, the Harvey comparator, the lawyer-coder data, the demo-to-codebase line, and the friction that makes contribution genuinely hard.

What I haven't said yet is what works. We have good examples in `docassemble` and `courtlistener` to look at, and I think my own experience maintaining `redlines` provides a useful counterpart to what does and doesn't work.

For now, I will keep thinking back to that small group of lawyers I met who found freedom in AI and code, and wonder if they can sustain it. As someone who has walked that path before, it’s going to be difficult but I hope the community we have today has a better chance of making it. 
