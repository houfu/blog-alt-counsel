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

On 18 November, I attended. Now, I have my answer.

**I'm renewing the domain. I'm continuing.**

This post walks through what I learned at SMU's event, how I applied the decision framework from Part 1, and what this taught me about when solo builders should persist alongside institutions.

## What SMU Announced

The event was at SMU's Yong Pung How School of Law. Roundtable discussions with local stakeholders and international experts. The announcement: **Singapore Open Legal Informatics Database (SOLID)**.

**What SOLID is:** Singapore's first open empirical legal database. Machine-readable datasets containing key statistical information about Singapore court decisions, statutes, legal scholarship, and court structures.

**Timeline:** Three-year project. Early database iteration Q4 2026, full public launch with website, API, and comprehensive documentation Q1 2028.

**Team:** Led by Assistant Professors Jerrold Soh (Principal Investigator) and Dirk Hartung (Co-Investigator), with research engineers and student assistants from SMU.

**Backing:** Ministry of Law support, institutional resources.

**Target users:** Researchers conducting social scientific studies, law firms and tech companies building legal AI systems, policymakers identifying systemic trends, law schools teaching legal data science.

Sitting in that room, listening to the professors talk about their three-year timeline, their phased approach, their stakeholder consultations—I felt validation, not competition.

## Applying the Framework: Three Questions

In Part 1, I laid out three questions for deciding whether to continue when institutions enter your space:

1. **Assess the overlap** What are they actually building?
2. **Identify remaining gaps** Where can solo builders still contribute?
3. **Clarify your motivation** Why am I really doing this?

Let me walk through each.

### 1. Assess the Overlap: Different Paradigms

Here's what I realized: they were building something fundamentally different. Not just different scope, but different paradigm.

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

**Both paradigms are valid. Both serve real needs.** They're just asking different questions about what "legal data infrastructure" means.

SMU is still developing their vision, so the differences may be more imagined than real. This is a work in progress. But the philosophical difference is real—they're optimizing for retrospective research, I'm optimizing for current awareness and AI applications.

### 2. Identify Remaining Gaps: What's Still Missing

Meeting with the project leader and attending the launch clarified this to me. The gap isn't about market needs. It's about experimentation space.

SOLID has institutional constraints. They're building for researchers, law firms, policymakers, law schools. Stakeholders. Committee approvals. Proper methodology over three years. As they should—they're building sustainable infrastructure.

I have solo builder freedom. I can build weird things.

Command-line legal agents that most lawyers would run from? I can try it. Daily news bots in formats nobody asked for? Sure. Experiments that might fail? That's the point.

data.zeeker.sg doesn't need to please everyone or serve validated market needs. It can look strange in the legal data spectrum. Some experiments will fail. Some might be too avant-garde to ever gain adoption.

But occasionally, weird experiments become mainstream. Someone tries something unconventional, it catches on, suddenly it's how everyone does it. That'd be really cool.

**The gap SOLID fills**: Sustainable empirical research infrastructure
**The gap I'm exploring**: What's possible when you're free to be weird

By the time SOLID launches in 2026, I'll have tried a dozen strange ideas. Most will fail. Maybe one becomes something. That's what solo builders can do—fail fast, experiment freely, discover what nobody knew they wanted.

cookies.zeeker.sg proved this. Built in weeks. Command-line tool. Most lawyers wouldn't touch it. But it works, and it demonstrates the infrastructure can enable unexpected things.

### 3. Clarify Motivation: I'm Not Done

This was the hardest question in Part 1. It remains the most important.

Someone on Mastodon gave me advice after I published Part 1:

> "I'm going to offer you some unsolicited advice that I think you absolutely need. Please announce and market your project. Get users, get feedback. Fail fast and fail often. Having a great perfect product that no one uses is a straight road to having no product. Don't be trapped in the dream that if you build it perfectly, they will come because perfect means different things to different people."

They continued:

> "And lastly, if you want to go fast, go alone. If you want to go far, go together. Get a team."

They were absolutely right.

But I also need to be honest about what "zero known users" actually means.

It doesn't mean I built something nobody wants. It means **I never tried to find out if anyone wants it.** I built the infrastructure, proved it works technically, then... waited. Waited for it to feel "complete enough." Waited for more features. Waited for it to look more impressive.

I didn't post about it on r/LegalTech. Didn't email the developers I know who might be interested. Didn't share it with Singapore's legal tech community. I built for 40+ sources but only implemented one, thinking "I'll announce when it's bigger."

cookies.zeeker.sg taught me differently. I built it with narrow scope, announced it, shipped it. It works because I defined "done" clearly and reached it.

data.zeeker.sg suffers from scope ambiguity. "Collection of databases" meant I never felt finished enough to announce.

SOLID won't even launch until Q4 2026. They're still over a year away. And they're announcing now, building in public, creating momentum. Meanwhile I've been sitting on operational infrastructure waiting for some undefined threshold of "ready."

If data.zeeker.sg were a business, the answer would be clear. Zero known users means stop or pivot hard. Institutions with more resources mean competitive threat. Find product-market fit or shut down.

But this is labour of love. Different success criteria.

**The real question for passion projects isn't "is this viable?" It's "am I done?"**

I'm not done.

data.zeeker.sg was never just about building one database. It was always about the full stack: data infrastructure → apps on top → AI-powered services → maybe eventually rethinking what a law firm could be when built on this foundation. I've been carrying this vision since law school—judgments as data, accessible to everyone.

SOLID's existence doesn't mean I should abandon that vision. It means the vision matters enough for institutions to invest serious resources. That's validation, not competition.

I'm not treating this as a startup that needs to find product-market fit or die. I'm treating it as an exploration: **what's possible when solo builders have access to GenAI tools? What legal infrastructure can one person create that used to require teams?**

## What Happens Next

I renewed the domain. I'm not done with this vision.

### The Technical Breakthrough: Chunking Legal Documents

Where I left off: I solved a finicky problem that's been blocking me for months.

Singapore court judgments can run 50-200 pages. Feeding entire judgments to AI systems works poorly—context windows get overwhelmed, retrieval becomes imprecise, and you lose the ability to pinpoint specific legal reasoning.

I needed to chunk them intelligently. Not naive paragraph splitting that breaks mid-argument. Not arbitrary token limits that slice through crucial analysis. Chunks that preserve legal context while enabling precise AI retrieval for RAG applications.

I figured it out. The implementation stores chunks in SQLite with metadata that preserves document structure, enables full-text search, and supports the vector similarity searches that AI applications need.

This is exactly the kind of GenAI-first thinking that differentiates from SOLID. They're optimizing for researchers downloading complete authoritative texts. I'm optimizing for AI systems that need structured, retrievable segments. Different paradigms, different data models.

### Q1 2026 Commitment: Ship Supreme Court Judgments

**Ship Singapore Supreme Court judgments.** One source, implemented completely. Chunked legal documents stored in SQLite, full-text searchable, API accessible through Datasette. Launch by end of March 2026.

Yes, this is essentially a New Year resolution from a lawyer who's notoriously bad at keeping them. The difference: I'm announcing it publicly, which means accountability. Also, unlike "exercise more" or "read that stack of law journals," this one has 150+ hours of sunk cost keeping me honest.

Then announce it—actually announce it this time. Write about it here on the blog, share it on Mastodon and social media, let people know it exists. No more "waiting until it's bigger."

### Three Experiments After Launch

**Three experiments I'm running once the foundation ships:**

1. **Smart legal alerts** - Let users define custom monitors ("new Supreme Court employment cases," "intellectual property judgments mentioning AI"). When data.zeeker.sg ingests matching content, send email notifications. Most legal alert systems cost $500+/month. Mine runs on $12/month infrastructure.

2. **Year in Review generator** - I already have thousands of Singapore legal news headers. Use them to generate annual summaries: "Here's what happened in Singapore law in 2025." Automated, AI-generated, released every January. Test whether this is valuable enough for practitioners to care. If nothing else, I'll have excellent material for breaking my New Year resolution to "write more regular blog posts."

3. **RAG-powered legal research bot** - I've been avoiding this because every legal tech demo is "chatbot using RAG." But with chunked judgments and news articles in SQLite, the infrastructure supports it naturally. If the first two experiments don't gain traction, prove the data layer works by building the obvious application.

These experiments share a pattern: **use the infrastructure to build things institutions won't.** Smart alerts and year-end summaries aren't research-grade scholarly tools. They're practitioner conveniences that don't justify institutional investment. That's the gap.

### On Teams and Viability

The Mastodon advice ended with "if you want to go far, go together. Get a team."

They're right. But not yet.

I can't recruit a team for a passion project running on love and $12/month. That's unsustainable for everyone involved. Solo builders can operate on passion and curiosity. Teams need purpose and viability.

**My commitment:** If these experiments prove valuable—if people actually use smart alerts, if the year-end reviews get traction, if the chatbot demonstrates real utility—then I'll know there's something worth building together. At that point, seek collaborators, consider sustainability models, think about what this becomes beyond solo experiments.

But I'm not recruiting for a vision. I'm recruiting for validated value. Q1 2026 experiments determine whether that exists.

## For Other Solo Builders

If you're facing similar crossroads, here's what helped:

**1. Do the research first.** I went to their event uncertain. Understanding their actual scope enabled the decision. Don't decide in a vacuum.

**2. Give yourself time.** The decision took 12 days from announcement to renewal. The urgency felt artificial. Time between the trigger and the commitment matters.

**3. Use the framework diagnostically.** The three questions from Part 1 helped structure my thinking. "Assess overlap, identify gaps, clarify motivation"—but ultimately "I'm not done exploring" is an emotional answer, not logical. For passion projects, that's valid.

Your situation might be different. Maybe institutional projects truly do overlap with yours completely. Maybe you discover your passion project was trying to solve a problem that doesn't actually exist. Maybe you realize you were building for ego, not for need.

But the framework gives you honest answers. And honest answers beat waiting in uncertainty.