---
title: "Over 150 Hours, 346 Articles, Zero Known Users: Should I Renew?"
date: 2025-10-27
draft: true
tags: [legal-tech, sustainability, GenAI, data-infrastructure, opportunity-cost]
---

My DNS renewal invoice arrived last week. Another year of data.zeeker.sg: $30.

That's not the real cost.

I'm staring at git history showing 79 commits, 32,000 lines of code, over 150 hours across several months. Building Singapore's first public legal data API. Setting up automated pipelines to aggregate 346 legal news articles. Learning obscure legal and technical information I'll never use again.

And here's the part that keeps me up: I have no idea if anyone actually needs this.

No usage analytics. Minimal feedback. Just... silence.

## The Problem I Thought I Was Solving

Singapore's legal information is scattered. Want comprehensive case law? LawNet costs SGD 207/month. Want legal news? It's fragmented across 40+ sources, most behind paywalls. Want to build legal tech tools or train AI models? Good luck scraping data of questionable legality.

Legislation is actually fine - Singapore Statutes Online is comprehensive and free. But legal news? No free, centralized, structured database existed.

I saw the gap and thought: someone should build this. Then I thought: I can build this with GenAI. Then I stopped thinking and started building.

## What 600 Hours Built

data.zeeker.sg is Singapore's first free public API for legal news. 346 professionally curated articles with full-text search, JSON and CSV exports, CC-BY-4.0 licensing that permits AI training. No registration barriers. 100% uptime since launch.

I built it on Datasette and SQLite with GenAI assistance, exactly what I wished existed when I wanted to build legal tech tools. It works. It works well.

## Where the Time Went

I didn't track hours. The git history shows 79 commits across 36 evenings and weekends spanning May to September. Database design, data pipelines, infrastructure, deployment. Claude Code helped generate much of the code, but I still spent months of nights debugging, integrating, making it work.

The content isn't manually curated - I built automated RSS pipelines to aggregate legal news from multiple sources. Programming those pipelines to extract, process, and structure the data was most of the work.

Planning, research, deployment, failed experiments - all the work that doesn't show up in commits.

Over 150 hours across several months. Maybe more. I honestly don't know exactly.

## The Opportunity Cost

150+ hours of billable work. Or a dozen substantial blog posts. Or another legal tech product. Or just... not working evenings and weekends.

Instead, I became an expert in bankruptcy trustee procedures I'll never use, employment tribunal decisions that don't apply to my practice, regulatory notices from agencies I don't work with. And Datasette customization patterns I'll never need again.

Knowledge that served the project but serves nothing else. This is the hidden cost of building solo - you become an expert in things that only matter if the project continues.

## The Silence

I didn't build analytics. No tracking, no user accounts, no usage metrics. This was deliberate - I wanted zero barriers to access.

But it means I have no idea if anyone uses this. A few GitHub stars. Occasional questions via email. Some downloads. No evidence of regular users. No stories of how it helped someone. No validation that 600 hours produced value for anyone but me.

## The SMU Question

Then SMU Centre for Digital Law announced their legal database project.

Launching November 18, 2025. Hiring a full-time Research Engineer and Research Assistant for 3 years. Building "Singapore's first open empirical legal database."

**Institutional resources doing what I tried to do solo.**

This changes the calculation:
- If they're building comprehensive legal data infrastructure with proper funding...
- And I'm maintaining a side project on evenings and weekends...
- With no evidence anyone needs what I built...
- **Should I renew?**

Maybe data.zeeker.sg served its purpose: **proving the gap is real**. Institutions noticed. They're building something better with proper resources.

Maybe my 600 hours validated that this infrastructure matters, even if my implementation doesn't survive.

Or maybe I just spent 600 hours on something nobody wanted in the first place.

## The Real Question

It's not about the $30. It's about ongoing maintenance - monitoring, pipeline updates, the mental weight of "I should update this."

It's not about whether it works. data.zeeker.sg works great. 100% uptime, fast queries, clean data.

It's about whether solo builders should sustain institutional-scale infrastructure. GenAI made building feasible. "Feasible" and "sustainable" are different questions.

## What I'm Learning

GenAI makes building possible, not easy. 150+ hours across several months of nights and weekends - Claude Code helped, but someone still has to architect, integrate, debug, deploy. The barrier to entry dropped. The time cost didn't disappear.

"I can build this" doesn't mean "I should build this." Just because GenAI lets solo builders create institutional-scale infrastructure doesn't mean we should bear that burden.

I built first, validated later. Classic mistake. Months in, I still don't know if anyone needs this. That's not product development, that's hope-driven gambling.

And I never planned how to stop. If I'd set criteria at the start - "build it, run it 6 months, evaluate usage, then decide" - this would be easier. Instead, I have emotional attachment to sunk costs and no clear exit criteria.

## The Honest Question

Did I build data.zeeker.sg because Singapore needed it, or because I wanted to prove I could?

If it's the former: the SMU project suggests the need is being met by institutions with proper resources. My work is done.

If it's the latter: I proved it. 79 commits, 32,000 lines of code, 346 articles, 100% uptime. Point proven.

Either way, maybe it's time to let it go.

## What Happens Next

I'm attending the SMU event on November 18. I need to understand:
- What are they building?
- How does it compare to data.zeeker.sg?
- Is there complementary work, or complete overlap?
- Should I hand off what I built, or just shut it down gracefully?

After that event, I'll decide:
1. **Renew and continue** - if there's a clear complementary role
2. **Hand off to SMU** - if they want the data/infrastructure
3. **Shut down gracefully** - if it's redundant or unmaintained

What I know now: **Whatever I decide, I'm not discouraged.**

The work proved something: Singapore needs public legal data infrastructure. The fact that institutions are now building it validates the gap was real.

My 600 hours weren't wasted. They were reconnaissance. I explored territory and mapped what's needed.

Now institutions can do it properly with dedicated staff, sustainable funding, and long-term commitment.

**That's exactly how this should work.**

## Should I Renew?

I'll know after the SMU event on November 18. I need to see what they're building, whether there's overlap, whether there's a way to hand off what I built.

What I know now: the time wasn't wasted. It proved the gap is real. Institutions noticed. They're building something with proper resources.

Maybe that's exactly how this should work. Solo builders prove concepts. Institutions sustain them.

The real cost isn't $30. It's everything else I didn't build with those 150+ hours.

---

*This is part 1 of a 3-part series on building and potentially shutting down data.zeeker.sg:*
- *Part 1: Should I Renew? (this post)*
- *Part 2: Technical Lessons - What Worked and What I'd Do Differently (coming Nov 11)*
- *Part 3: What I Learned at SMU + My Decision (coming Nov 25)*

---

**Update Log:**
- October 27, 2025: Initial draft
