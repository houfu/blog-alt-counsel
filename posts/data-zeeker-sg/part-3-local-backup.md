---
title: "What I Learned at SMU's Legal Database Launch (And My Decision About data.zeeker.sg)"
date: 2025-11-20
draft: true
tags: [legal-tech, open-data, solo-builders, passion-projects, data.zeeker.sg]
---

The waiting is over. On November 18, I attended SMU Centre for Digital Law's launch of SOLID—Singapore Open Legal Informatics Database. I've been carrying the question since Part 1: when institutions enter your passion project space, should you continue or step aside?

I have my answer now.

## What SOLID Actually Is

SOLID is Singapore's first open empirical legal database. It will compile machine-readable datasets of Singapore court decisions, statutes, legal scholarship, and court structures. Public website, API access, full documentation. Led by two Assistant Professors with research engineers and student assistants. Three-year project backed by the Ministry of Law.

The timeline: early release in Q4 2026, full launch in Q1 2028.

The scope: empowering researchers to conduct social scientific studies of Singapore's legal system, helping law firms and tech companies build and evaluate legal AI systems, enabling policymakers to identify systemic trends.

This is institutional backing done right. Dedicated team, sustainable funding, long-term commitment.

And here's what I realized: they're not building what I built.

## Applying the Framework

In Part 1, I laid out three questions for deciding whether to continue when institutions enter your space:

1. **Assess the overlap** - What are they actually building?
2. **Identify remaining gaps** - What still needs doing?
3. **Clarify your motivation** - What am I actually trying to achieve?

Let me work through them.

### 1. Assess the Overlap: Minimal

**What SOLID focuses on:**
- Case law and judicial decisions
- Statutes and legislation
- Legal scholarship
- Court structures and institutional data

**What data.zeeker.sg focuses on:**
- Daily legal news from 40+ sources
- Current awareness and real-time updates
- Aggregated legal journalism
- Machine-readable format for AI applications

Different data sources. Different temporal focus (retrospective vs. real-time). Different use cases.

**SOLID answers questions like:** "How many employment discrimination cases were decided between 2015-2025?" "What patterns exist in High Court sentencing decisions?"

**data.zeeker.sg answers questions like:** "What legal news happened today?" "Summarize this week's regulatory updates for me." "What's trending in Singapore legal discussions?"

The overlap is minimal. We're complementary, not competing.

### 2. Identify Gaps: A Philosophical Difference

This is where it gets interesting. SOLID and data.zeeker.sg represent different paradigms about what legal data infrastructure should prioritize.

**SOLID's paradigm: What legal scholars and social scientists want**

From Assistant Professor Jerrold Soh's announcement: "Singapore's legal system is internationally recognised for its openness and digital maturity, but home-grown computational research and tools focused on Singapore law remain limited."

SOLID is designed for empirical research. Statistical analysis of judicial decisions. Training and evaluating legal AI on authoritative texts. Evidence-based policymaking. Academic legal data science.

This is the researcher's lens: structured historical data enabling systematic study of how the legal system actually works.

**data.zeeker.sg's paradigm: What GenAI builders and practitioners want**

I'm interested in what to feed my GenAI machine. Legal news articles, commentary, analysis—curated resources and free text that help AI systems understand current legal discussions. Daily summaries for busy practitioners. Real-time awareness of what's happening in Singapore law right now.

This is the builder's lens: real-time legal news feeds that AI can use, and that keep practitioners informed without manual work.

Both paradigms are valid. Both serve real needs. They're just asking different questions about what "legal data infrastructure" means.

As I noted in my research: SMU is still developing their vision. This is a work in progress. But the philosophical difference is real—they're optimizing for retrospective research, I'm optimizing for current awareness and AI applications.

### 3. Clarify Motivation: I'm Not Done

Someone on Mastodon gave me advice when I posted about this dilemma:

> "I'm going to offer you some unsolicited advice that I think you absolutely need. Please announce and market your project. Get users, get feedback. Fail fast and fail often. Having a great perfect product that no one uses is a straight road to having no product. Don't be trapped in the dream that if you build it perfectly, they will come because perfect means different things to different people."

They continued:

> "And lastly, if you want to go fast, go alone. If you want to go far, go together. Get a team."

They were absolutely right.

I realized: I'm not done with this vision.

But I also need to be honest about what "zero known users" actually means.

It doesn't mean I built something nobody wants. It means **I never tried to find out if anyone wants it.** I built the infrastructure, proved it works technically, then... waited. Waited for it to feel "complete enough." Waited for more features. Waited for it to look more impressive.

I didn't post about it on r/LegalTech. Didn't email the developers I know who might be interested. Didn't share it with Singapore's legal tech community. I built for 40+ sources but only implemented one, thinking "I'll announce when it's bigger."

cookies.zeeker.sg taught me differently—I built it with narrow scope, announced it, shipped it. It works because I defined "done" clearly and reached it.

data.zeeker.sg suffers from scope ambiguity. "Collection of databases" meant I never felt finished enough to announce.

The Mastodon advice was right: "Don't wait for perfect. Announce and get feedback. Fail fast."

SOLID won't even launch until Q4 2026—almost two years away. And they're announcing now, building in public, creating momentum. Meanwhile I've been sitting on operational infrastructure waiting for some undefined threshold of "ready."

data.zeeker.sg was never just about building one database. It was always about the full stack: data infrastructure → apps on top → AI-powered services → maybe eventually rethinking what a law firm could be when built on this foundation. I've been carrying this vision since law school—judgments as data, accessible to everyone.

SOLID's existence doesn't mean I should abandon that vision. It means the vision matters enough for institutions to invest serious resources. That's validation, not competition.

I'm not treating this as a startup that needs to find product-market fit or die. I'm treating it as an exploration: **what's possible when solo builders have access to GenAI tools? What legal infrastructure can one person create that used to require teams?**

My domain renewal invoice arrived. $110 for two years. Not a lot of money, but it forces the question: am I doing this or not?

I paid it.

## What This Means: Different Approaches Can Coexist

The real validation isn't that we're building the same thing—we're not. The validation is that multiple people believe open legal data infrastructure matters enough to invest resources. SMU brings institutional backing: professors, research engineers, Ministry of Law support, a three-year timeline building retrospective research infrastructure. I bring solo builder experiments: evenings and weekends, Claude Code assistance, serverless architecture, $6/month hosting building current awareness infrastructure. Maybe others I don't even know about yet.

Singapore's legal data ecosystem is big enough for complementary projects serving different needs.

## The Decision: Time to Announce

Here's what crystallized it for me.

Sitting in the SMU launch event, listening to the professors talk about their three-year timeline, their phased approach, their stakeholder consultations—I realized they were building something fundamentally different. Not just different scope, but different paradigm. They're asking "what do scholars need to study the legal system empirically?" I'm asking "what do practitioners and AI builders need for current awareness?"

Both questions matter. But they're not the same question.

The decision isn't about stepping aside for institutions to take over. The decision is about finally announcing what I built and seeing who else believes this matters.

I've been trapped in "wait for complete" while proving it's technically feasible. But feasibility isn't the question anymore. SOLID proved institutions think structured legal data infrastructure is worth investing in. I proved solo builders can actually build it now with modern tools.

The real question is: does anyone want daily legal news infrastructure? Machine-readable aggregation of Singapore legal journalism? APIs for building current awareness applications?

I don't know. I have zero known users because I never really tried to find them.

Time to find out.

SOLID will take care of the retrospective research infrastructure. They're positioned to do it properly with sustained institutional support. I can focus on the current awareness piece—daily legal news, real-time aggregation, feeding GenAI applications. Test if anyone actually wants this. Build apps on top if they do. Iterate based on feedback.

And if it turns out nobody wants it? At least I'll know. Better than waiting another two years wondering if I should announce while the vision sits operational but invisible.

## What Happens Next

I renewed the domain. I'm not done with zeeker's visions.

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

Next steps:
1. **Actually announce data.zeeker.sg** - Stop waiting for "complete enough"
2. **Document the API** - Make it easy for developers to try
3. **Build one more app** - Prove the infrastructure enables things
4. **Get feedback** - Find out what people actually want
5. **Iterate or pivot** - Based on what I learn

If SOLID wants to collaborate—data sharing, complementary infrastructure, anything—I'm open. If other builders want to use the daily legal news data, even better. If it turns out the current awareness gap isn't actually a gap, I'll know and can close this chapter with dignity.

But I'm not closing it preemptively because institutions exist.

## The Bigger Lesson

When institutions enter your passion project space, the question isn't "should I step aside?" The question is "what are they actually building, and what remains?"

For me: minimal overlap, different needs, vision I'm not done with yet. Your answers might differ—maybe overlap is complete, maybe the gap doesn't exist, maybe you're building for ego not need.

But the framework gives you honest answers. And honest answers beat waiting in uncertainty.

_This is Part 3 of a series on building and potentially closing down data.zeeker.sg:_

- _**Part 1: [When Institutions Enter Your Passion Project Space](/when-institutions-enter-your-space/)** - The decision framework and where I was_
- _**Part 2: [Building data.zeeker.sg: Technical Architecture](/data-zeeker-sg-part-2a-architecture/)** - The full technical stack and how it works_
- _**Part 3: What I Learned at SMU + My Decision (this post)** - What SOLID actually is and what I decided_

Whether you're facing similar crossroads or just following along—institutions entering your space doesn't automatically mean quit. It means honestly assess what they're building, what remains, and what you're trying to achieve. Then decide.

For me: the work continues. Time to find out if anyone else wants what I built.
