---
title: "When Institutions Enter Your Passion Project Space"
date: 2025-11-06
draft: true
tags: [legal-tech, sustainability, solo-builders, passion-projects, open-data]
---

My domain renewal invoice will arrive soon. Another two years of zeeker.sg: $110.

That's not the real cost. And the renewal isn't really the question.

**This post isn't a how-to guide.** I don't have answers yet—I'm working through the decision in real-time. But if you're a solo builder facing similar crossroads, maybe walking through my thinking process will help you navigate yours.

Ever since I was a law student, I dreamt of a world where judgments were _data_, and that it was accessible to everyone including poor students like me. That dream has taken me through sites like AustLII and several ways to collect data, from Wordpress, MongoDB, and ckan, and it definitely coursed through AI and technology. 

data.zeeker.sg is my latest and closest attempt. Over 150 hours across several months building an API for legal information in Singapore the way I want it. I built the data pipeline, collected 346 legal articles, proved the technical stack works. Built one app on top (cookies.zeeker.sg), which summarizes Singapore Law Watch headlines. It works.

Then SMU Centre for Digital Law announced they're launching a legal database project. November 18, 2025. Hiring a full-time Research Engineer and Research Assistant for 3 years. Building "Singapore's first open empirical legal database."

Institutional resources doing what I tried to do solo.

The pragmatic voice in my head says: Stop. Zero known users. Institutions can do this better. Cut your losses.

But I'm still in love with this vision.

## What This Project Means to Me

This isn't just about data.zeeker.sg. It's about the full stack.

The idea is that we start from data and work out the apps that we can create from it. Given a set of unstructured documents, we can create a website that displays a list of them and download them, maybe search based on metadata. But if we have a richer set of data, we can create graphs and more. cookies.zeeker.sg could be a daily aggregator, but it can also create weekly podcasts and end of year reviews based on different topics and audiences.

The broader vision includes more. A chatbot. An MCP server for Claude Code integration. More data sources—not just legal news, but judgments, legislation, regulatory notices. Eventually: AI-powered legal services. Maybe even rethink what a law firm could be if it's built on this kind of infrastructure.

But I kept thinking "needs more resources before it's ready to announce."

So I built but never really announced it. Minimal user acquisition effort. Zero known users.

cookies.zeeker.sg had narrower scope—just summarize headlines—so I announced that one. But the data layer? Still waiting for it to feel "complete enough."

Now renewal forces the question: If I'm not willing to announce it, why am I maintaining it?

## Why I Built This

Singapore's legal information exists, but it's scattered. Say you read a legal news article about a recent employment case. You want to read the actual judgment—that's in LawNet or a PDF somewhere. You want to check the statute it interpreted—that's on a different government site. You want to see related commentary—that's scattered across 40+ different legal blogs and news sources. For developers trying to build tools that connect these dots, it's a nightmare of different formats and scraping challenges. For users, it's hard to even know what's actually out there unless you already know where to look. You can browse each source manually, but you can't build integrated tools that connect the pieces.

I wanted to see if one person could create infrastructure that used to require teams. GenAI made it feasible—Claude helped me build the data pipeline, the API, the search functionality. 150+ hours across several months, mostly evenings and weekends while doing my day job full-time.

Over those months, I built Python scrapers that check 40+ legal news sources daily, store articles in a searchable database with full-text search, and serve them via a REST API. cookies.zeeker.sg was proof it worked—an app that consumes the API to summarize headlines. The infrastructure is simple: automatic daily updates, structured JSON data, machine-readable format that any developer could build with.

I proved it's possible. You can build this solo now more than ever.

But possible doesn't mean needed. I never really validated demand. I built first, hoped to validate later. Kept waiting for the project to feel "complete enough" to announce.

I'm a lawyer who codes on the side. The vision is years ahead of my execution capacity.

## Then SMU Announced Their Project

November 18, 2025. SMU Centre for Digital Law is launching their legal database project. Hiring full-time staff for 3 years. "Singapore's first open empirical legal database."

I don't know what they're actually building yet. Their scope, their approach, their technical infrastructure—all unknown until the event.

But institutional resources doing what I tried to do solo changes the equation. Wow! It's not a competition, and I do think they have a better shot at succeeding where I failed.

## The Two Voices

Two voices keep arguing in my head:

![The Two Voices: Pragmatic vs. Passion - A comparison of arguments for stopping versus continuing the project. The pragmatic voice argues: 150+ hours with zero known users, never validated demand or announced properly, SMU has institutional backing with multi-year timeline and dedicated staff, the vision was always aspirational (tech-enabled law firm while practicing full-time?), you proved it's technically feasible and that's enough, time to let it go. The passion project voice argues: I'm still in love with this vision, this is labour of love not my day job so different success criteria apply, zero users might just mean poor distribution not bad vision, institutions existing doesn't automatically mean quit, I could pivot to focus on apps while they handle data infrastructure, or do complementary work with different data sources and audiences, 150 hours is sunk cost but the infrastructure exists and works.](two-voices-infographic.png)

I don't know which voice is right. That's why I need a framework.

But first, the reality check: it's not really about the $110 renewal. It's the ongoing maintenance burden—monthly monitoring, dependency updates when something breaks, the mental overhead of "should I finally announce this or let it go?" That's the real cost I'm weighing.

## A Framework for Deciding: Three Questions

When institutions enter your passion project space, three questions help cut through the noise.

### 1. Assess the Overlap

I need to understand what SMU is actually building. Until I attend their November 18 event, their scope, approach, and technical infrastructure remain unknown.

**Key questions:**
- What's their scope? Legal news like mine, or case law and empirical research?
- Who's their audience—researchers, developers, practitioners?
- What's their technical approach—APIs, bulk downloads, just a website?

Until I know their scope, I can't know if we're building the same thing or something adjacent.

### 2. Identify Remaining Gaps

Even with overlap, gaps might remain. Maybe they're comprehensive and I can be experimental. Maybe they target researchers and I target developers. Maybe they handle data infrastructure and I focus on the application layer. Or maybe there's complete overlap and I gracefully hand off.

### 3. Clarify Your Motivation

This is the hardest question. What am I actually trying to achieve?

## The Motivation Question

If this were a business, the answer would be clear. Zero users means stop or pivot. Institutions with more resources mean competitive threat. Find product-market fit or shut down.

But this is labour of love. My day job is for income. I build this because I want to see if it's possible, because I think Singapore needs it, because I'm still in love with the vision.

That changes what "should I continue?" means.

When I'm honest with myself: I don't know if anyone wants structured legal data APIs for Singapore. Am I building this because:

-   **Singapore needs it?** If SMU provides it, maybe my work is done. Mission accomplished, even if it wasn't my infrastructure that succeeded.
-   **I need it for my practice?** Then building for myself is enough. User count doesn't matter.
-   **I want to prove I can?** Already proved it. One person can build this now.
-   **I'm still exploring what's possible?** Then continue makes sense, regardless of users or institutions.

I think it's the last one. I'm exploring. But I'm not sure. I don't have a good answer yet.

## I Don't Know Yet

I'm attending the SMU Centre for Digital Law event on November 18. After that, I'll have information to actually decide.

Possible outcomes:

-   **Continue as-is** if gaps exist and I can fill them
-   **Modify approach** if overlap exists but complementary role possible
-   **Collaborate** if they want anything from what I built
-   **Hand off gracefully** if they're building what I envisioned
-   **Stop** if complete overlap makes continuation redundant

The domain renewal isn't until December. I have time. Server costs and all? I still have the resources to try.

What I know now: The question isn't about $110. It's about what I'm trying to achieve with this vision I've carried for years, and whether I'm building for the right reasons.

For other solo builders facing similar moments: when institutions and businesses enter your space, you'll face the same voices. Pragmatism says cut losses. Passion says keep going. The decision depends on what gaps remain and what you're actually trying to achieve.

I'm still working that out.

And if I do stop? I've thought about what that would actually mean. Open-source the code so others can learn from it. Offer the data pipeline to SMU if they want it. Write a proper post-mortem documenting what worked and what didn't. Archive it with dignity rather than just letting the domain expire. Shutting down doesn't have to mean failure—it can mean intentional closure of one chapter before starting the next.

---

_This is Part 1 of a 3-part series on building and potentially closing down data.zeeker.sg:_

-   _**Part 1: When Institutions Enter Your Space (this post)** - The decision framework and where I am now_
-   _**Part 2: Technical Lessons (coming soon)** - The full technical stack, what worked, what didn't, and how AI tools made solo infrastructure building feasible—for builders who want the implementation details_
-   _**Part 3: What I Learned at SMU + My Decision (coming after Nov 18)** - What they're building, how I decided, and what happened next_

Whether I continue or stop, the technical lessons from building this solo are worth sharing—what worked, what didn't, and how AI tools changed what's possible for single builders. And whatever I learn at SMU's event might help other solo builders navigate similar crossroads when institutions enter their space.

---

**Update Log:**

-   November 7, 2025 (v2): Added infographic placeholder, resource reality check, concrete problem statement, technical context paragraph, "what shutting down means" section, updated series setup based on reviewer feedback
-   November 7, 2025 (v1): Structural improvements - added H3 headings, strengthened framework section, cut repetition, improved series setup
-   November 6, 2025: Rewrite focusing on introspection and decision-making process
-   November 4, 2025: Complete rewrite - shifted from decision narrative to framework approach