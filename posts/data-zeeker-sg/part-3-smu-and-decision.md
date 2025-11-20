---
title: "What I Learned at SMU's Legal Database Launch (And My Decision About data.zeeker.sg)"
date: 2025-11-20
draft: true
tags: [legal-tech, sustainability, solo-builders, passion-projects, open-data, SOLID, SMU, Singapore]
excerpt: "After 150+ hours building data.zeeker.sg, I attended SMU's SOLID database launch to see institutional legal data infrastructure in action. I applied my decision framework and made my choice: I'm continuing. Here's what I learned about when solo builders should persist alongside institutions."
---

My domain renewal invoice arrived last week. Another two years of zeeker.sg: $110.

In [Part 1](../when-institutions-enter-your-space/), I laid out the tension: I'd spent 150+ hours building data.zeeker.sg while working full-time as a lawyer. Zero known users. Then SMU Centre for Digital Law announced they're building legal data infrastructure with institutional resources—dedicated staff, 3-year funding, Ministry of Law backing.

Should I continue or stop?

I didn't have the answer then. I said I'd attend their November 18 launch event first, apply my three-question framework, then decide.

Yesterday, I attended. Today, I have my answer.

**I'm renewing the domain. I'm continuing.**

This post walks through what I learned at SMU's event, how I applied the decision framework from Part 1, and what this taught me about when solo builders should persist alongside institutions.

## What SMU Actually Announced

The event was at SMU's Yong Pung How School of Law. Roundtable discussions with local stakeholders and international experts. The announcement: **Singapore Open Legal Informatics Database (SOLID)**.

**What SOLID is:** Singapore's first open empirical legal database. Machine-readable datasets containing key statistical information about Singapore court decisions, statutes, legal scholarship, and court structures.

**Timeline:** Three-year project. Early database iteration Q4 2026, full public launch with website, API, and comprehensive documentation Q1 2028.

**Team:** Led by Assistant Professors Jerrold Soh (Principal Investigator) and Dirk Hartung (Co-Investigator), with research engineers and student assistants from SMU.

**Backing:** Ministry of Law support, institutional resources.

**Target users:** Researchers conducting social scientific studies, law firms and tech companies building legal AI systems, policymakers identifying systemic trends, law schools teaching legal data science.

Sitting in that room, listening to the professors talk about their three-year timeline, their phased approach, their stakeholder consultations—I felt validation, not competition.

## Applying the Framework: Three Questions

In Part 1, I laid out three questions for deciding whether to continue when institutions enter your space:

1. **Assess the overlap** - What are they actually building?
2. **Identify remaining gaps** - Where can solo builders still contribute?
3. **Clarify your motivation** - Why am I really doing this?

Let me walk through each.

### 1. Assess the Overlap: Different Paradigms

Here's what I realized they were building something fundamentally different. Not just different scope, but different paradigm.

**SOLID's paradigm: What legal scholars and social scientists want**

SOLID is designed for empirical research. Statistical analysis of judicial decisions. Training and evaluating legal AI on authoritative texts. Evidence-based policymaking. Academic legal data science.

Example SOLID queries:
- "How many employment discrimination cases were decided between 2015-2025?"
- "What patterns exist in High Court sentencing decisions?"
- "What's the average case length by court level?"

This is the researcher's lens: structured historical data enabling systematic study of how the legal system actually works. Quantitative analysis asking **"How many?"**

**data.zeeker.sg's paradigm: What GenAI builders and practitioners want**

I'm interested in what to feed my GenAI machine. Legal news articles, commentary, analysis—curated resources and free text that help AI systems understand current legal discussions. Daily summaries for busy practitioners. Real-time awareness of what's happening in Singapore law right now.

Example data.zeeker.sg queries:
- "What legal news happened today?"
- "Find articles mentioning AI regulation this week"
- "Summarize today's regulatory updates for me"

This is the builder's lens: real-time legal news feeds that AI can use, and that keep practitioners informed without manual work. Qualitative content asking **"What did it say?"**

**The complementary strengths:**

SOLID has institutional sustainability—3-year funding, dedicated staff, proper research methodology, stakeholder consultations. They'll do empirical research infrastructure right.

I can iterate fast and experiment freely. Built data.zeeker.sg in months working evenings and weekends. I can try things, fail quickly, pivot without committee approval while SOLID builds the empirical research foundation properly.

**Both paradigms are valid. Both serve real needs.** They're just asking different questions about what "legal data infrastructure" means.

As I noted in my research: SMU is still developing their vision. This is a work in progress. But the philosophical difference is real—they're optimizing for retrospective research, I'm optimizing for current awareness and AI applications.

### 2. Identify Remaining Gaps: What's Still Missing

Meeting with the project leader clarified this further.

**What SOLID covers:** Court decisions, statutes, legal scholarship, court structures—structured empirical data for research.

**What SOLID doesn't cover:** Daily legal news aggregation or full-text content. That's not their focus.

**The gap:** Legal news is scattered across 40+ sources—Singapore Law Watch, Law Gazette, legal blogs, firm newsletters, government announcements. No centralized database. No API. No machine-readable format.

data.zeeker.sg fills that gap. It's operational now. SOLID launches its early iteration Q4 2026—over a year away, full launch Q1 2028.

The overlap is minimal. We're complementary, not competing.

### 3. Clarify Motivation: I'm Not Done

This was the hardest question in Part 1. It remains the most important.

Someone on Mastodon gave me advice before I started this series:

> "I'm going to offer you some unsolicited advice that I think you absolutely need. Please announce and market your project. Get users, get feedback. Fail fast and fail often. Having a great perfect product that no one uses is a straight road to having no product. Don't be trapped in the dream that if you build it perfectly, they will come because perfect means different things to different people."

They continued:

> "And lastly, if you want to go fast, go alone. If you want to go far, go together. Get a team."

They were absolutely right.

But I also need to be honest about what "zero known users" actually means.

It doesn't mean I built something nobody wants. It means **I never tried to find out if anyone wants it.** I built the infrastructure, proved it works technically, then... waited. Waited for it to feel "complete enough." Waited for more features. Waited for it to look more impressive.

I didn't post about it on r/LegalTech. Didn't email the developers I know who might be interested. Didn't share it with Singapore's legal tech community. I built for 40+ sources but only implemented one, thinking "I'll announce when it's bigger."

cookies.zeeker.sg taught me differently—I built it with narrow scope, announced it, shipped it. It works because I defined "done" clearly and reached it.

data.zeeker.sg suffers from scope ambiguity. "Collection of databases" meant I never felt finished enough to announce.

SOLID won't even launch until Q4 2026—almost two years away. And they're announcing now, building in public, creating momentum. Meanwhile I've been sitting on operational infrastructure waiting for some undefined threshold of "ready."

If data.zeeker.sg were a business, the answer would be clear. Zero known users means stop or pivot hard. Institutions with more resources mean competitive threat. Find product-market fit or shut down.

But this is labour of love. Different success criteria.

**The real question for passion projects isn't "is this viable?" It's "am I done?"**

I'm not done.

data.zeeker.sg was never just about building one database. It was always about the full stack: data infrastructure → apps on top → AI-powered services → maybe eventually rethinking what a law firm could be when built on this foundation. I've been carrying this vision since law school—judgments as data, accessible to everyone.

SOLID's existence doesn't mean I should abandon that vision. It means the vision matters enough for institutions to invest serious resources. That's validation, not competition.

I'm not treating this as a startup that needs to find product-market fit or die. I'm treating it as an exploration: **what's possible when solo builders have access to GenAI tools? What legal infrastructure can one person create that used to require teams?**

## What Surprised Me

Going into the event, I expected to feel discouraged. Institutions doing what I tried to do solo—that should trigger "hand it off and move on," right?

Instead, I felt energized.

**Three things surprised me:**

**1. How much room there is for experimentation**

SOLID has a 3-year roadmap with stakeholder consultations and phased deployment. Proper methodology. As they should—they're building sustainable research infrastructure.

I can experiment with applications, try different content sources, build proof-of-concept tools, fail fast, and iterate. cookies.zeeker.sg proved this—built in weeks, demonstrates the API works. While they're doing empirical research right, I can explore what's possible at the application layer.

**2. The validation wasn't about me**

I realized I was approaching the event asking: "Did my work matter? Did I influence this?"

Wrong questions.

The right framing: We both independently concluded Singapore needs better legal data infrastructure. That validation isn't about my influence—it's about the vision itself being correct.

We arrived at the same insight from different angles. Solo builder and institution both saw the gap. Whether SMU knew about data.zeeker.sg or not (they probably didn't—zero users, never announced), that matters more than individual credit.

**3. I felt energized, not threatened**

The energy in that room—experts discussing legal data infrastructure, international comparisons to AustLII and CourtListener, Ministry of Law backing institutional work—it validated that this matters.

Different approaches can coexist. Institutional research infrastructure and solo builder experiments both have roles to play. Singapore's legal data ecosystem is big enough for complementary projects serving different needs.

## My Decision: Continuing With Eyes Open

My domain renewal invoice arrived. $110 for two years. Not a lot of money, but it forces the question: am I doing this or not?

I paid it.

**What this means in practice:**

**Not:** Competing with SOLID
**Instead:** Exploring application layer and experimentation

**Not:** Waiting for perfect validation before announcing
**Instead:** Sharing what works, documenting what doesn't, inviting contribution

**Not:** Building a business that needs ROI
**Instead:** Treating this as exploration and learning

## What Happens Next

I renewed the domain. I'm not done with this vision.

<!-- TODO: ADD SPECIFIC DEADLINES AND SUCCESS METRICS HERE
Both reviewers flagged this as critical:
- When will you announce? (Specific date)
- What does success look like? (10 users by when?)
- Decision checkpoint date (when will you evaluate if this worked?)
Example:
1. Announce by December 15, 2025
2. Document API by December 31, 2025
3. Get 10 users testing by February 28, 2026
4. Build one more app by March 31, 2026
5. Decision point April 2026: If <5 active users, pivot or close
-->

**What I'm committing to:**

1. **Finally announce data.zeeker.sg publicly** - No more "waiting until it's complete enough." It works. Time to share it.

2. **Document openly** - This series is part of that. Share what works, what doesn't, how it's built.

3. **Build one more app** - More tools like cookies.zeeker.sg that demonstrate what's possible with structured legal data.

4. **Get feedback** - Find out what people actually want

5. **Iterate or pivot** - Based on what I learn

**What I'm accepting:**

- This might never have users. That's okay for labour of love.
- Institutions will do empirical research better. That's their strength.
- I might hand this off someday. But not today—I'm not done exploring.
- Solo builder projects are fragile. If this breaks when I'm on vacation, that's a limitation I'm accepting.

If SOLID wants to collaborate—data sharing, complementary infrastructure, anything—I'm open. If other builders want to use the daily legal news data, even better. If it turns out the current awareness gap isn't actually a gap, I'll know and can close this chapter with dignity.

But I'm not closing it preemptively because institutions exist.

## For Other Solo Builders

If you're facing similar crossroads—institutions entering your passion project space—here's what helped:

**1. Do the research first.** I went to their event uncertain. Understanding their actual scope—not my assumptions about it—enabled the decision. Don't decide in a vacuum.

**2. Give yourself time.** The decision took 12 days from announcement to renewal. The urgency felt artificial. Time between the trigger and the commitment matters.

**3. Use the framework diagnostically.** The three questions from Part 1 helped structure my thinking. "Assess overlap, identify gaps, clarify motivation"—but ultimately "I'm not done exploring" is an emotional answer, not logical. For passion projects, that's valid.

Your situation might be different. Maybe institutional projects truly do overlap with yours completely. Maybe you discover your passion project was trying to solve a problem that doesn't actually exist. Maybe you realize you were building for ego, not for need.

But the framework gives you honest answers. And honest answers beat waiting in uncertainty.

## The Honest Acknowledgment

I don't know if anyone will use this. I don't know if it matters beyond my own learning. I don't know if I'll sustain it long-term or eventually hand it off.

What I know: Singapore needs better legal data infrastructure. SOLID will build empirical research foundation properly. data.zeeker.sg can explore content infrastructure and applications. Both matter.

And I'm not done exploring.

---

_This is Part 3 of a series on building and potentially closing down data.zeeker.sg:_

- _**Part 1: [When Institutions Enter Your Passion Project Space](/when-institutions-enter-your-space/)** - The decision framework and where I was_
- _**Part 2: [Building data.zeeker.sg: Technical Architecture](/data-zeeker-sg-part-2a-architecture/)** - The full technical stack and how it works_
- _**Part 3: What I Learned at SMU + My Decision (this post)** - What SOLID actually is and what I decided_

Whether you're facing similar crossroads or just following along—institutions entering your space doesn't automatically mean quit. It means honestly assess what they're building, what remains, and what you're trying to achieve. Then decide.

For me: the work continues. Time to find out if anyone else wants what I built.
