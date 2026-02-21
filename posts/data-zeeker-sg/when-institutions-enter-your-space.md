---
title: When Institutions Enter Your Passion Project Space
date: 2025-11-06T00:00:00.000Z
draft: true
tags:
  - LegalTech
  - zeeker
slug: when-institutions-enter-your-passion-project-space
status: published
post_id: 690e09fb88ddf30001db7e71
published_at: '2025-11-10T00:35:44.000Z'
feature_image: 'https://www.alt-counsel.com/content/images/2025/11/Pixar-s--Up--House.jpg'
custom_excerpt: >-
  Domain renewal: $110. But the real cost is over 150 hours and zero users. Now
  SMU is building what I tried solo. Here's my framework for deciding: continue,
  collaborate, or gracefully close.
---

My domain renewal invoice will arrive soon. Another two years of zeeker.sg: $110.

That's not the real cost. And the renewal isn't really the question.

**This post isn't a how-to guide.** I don't have answers yet—I'm working through the decision in real-time. But if you're a solo builder facing similar crossroads, maybe walking through my thinking process will help you navigate yours.

Ever since I was a law student, I dreamt of a world where judgments were _data_, and that it was accessible to everyone including poor students like me. That dream has taken me through sites like AustLII and several ways to collect data, from Wordpress, MongoDB, and ckan, and it definitely coursed through AI and technology.

data.zeeker.sg is my latest attempt. I built it. It works.

Then SMU Centre for Digital Law announced they're launching a legal database project. Institutional resources doing what I tried to do solo.

The pragmatic voice in my head says: Stop. Institutions can do this better.

But I'm still in love with this vision.

## What This Project Means to Me

This isn't just about data.zeeker.sg. It's about a full-stack vision for legal information infrastructure.

The idea: start from structured data and build whatever apps you can imagine on top. A daily aggregator that becomes a weekly podcast. An end-of-year review generator. A chatbot. An MCP server for Claude Code integration. More data sources—not just legal news, but judgments, legislation, regulatory notices. Eventually: AI-powered legal services. Maybe even rethink what a law firm could be if it's built on this kind of infrastructure.

That's the dream I've carried since law school. Not just making legal information accessible, but creating the foundation that lets anyone build tools on top of it.

But I never announced data.zeeker.sg. I kept thinking "needs more resources before it's ready." I built the infrastructure but waited for it to feel "complete enough" to share publicly. Zero known users because I never really tried to find them.

Now renewal forces the question: If I'm not willing to announce it, why am I maintaining it?

Is this vision still mine to pursue? Or have I been holding onto something I should let go?

## Why I Built This

Singapore's legal information exists, but it's scattered. Say you read a legal news article about a recent employment case. You want to read the actual judgment—that's in LawNet or a PDF somewhere. You want to check the statute it interpreted—that's on a different government site. You want to see related commentary—that's scattered across 40+ different legal blogs and news sources. For developers trying to build tools that connect these dots, it's a nightmare of different formats and scraping challenges. You can browse each source manually, but you can't build integrated tools that connect the pieces.

I wanted to see if one person could create infrastructure that used to require teams. GenAI made it feasible—Claude helped me build it all.

The technical reality: Over 150 hours across several months (mostly evenings and weekends while working full-time), I built Python scrapers that check 40+ legal news sources daily, store articles in a searchable database with full-text search, and serve them via a REST API. I collected 346 legal articles and proved the stack works. cookies.zeeker.sg demonstrates it—an app that consumes the API to summarize Singapore Law Watch headlines daily. The infrastructure runs: automatic updates, structured JSON data, machine-readable format.

I proved it's possible. One person can build this now.

But possible doesn't mean needed. I'm a lawyer who codes on the side. The vision is years ahead of my execution capacity.

## Then SMU Announced Their Project

SMU Centre for Digital Law is launching their legal database project. Hiring full-time staff for 3 years. "Singapore's first open empirical legal database."

I don't know what they're actually building yet. Their scope, their approach, their technical infrastructure—all unknown until their November 18 event.

But institutional resources doing what I tried to do solo changes the equation. It's not a competition, and I do think they have a better shot at succeeding where I failed.

## The Two Voices

Two voices keep arguing in my head:

![A two-column comparison showing pragmatic arguments for stopping the project versus passion-driven arguments for continuing it](two-voices-infographic.png)

**Pragmatic voice:** Over 150 hours with zero known users. Never validated demand. SMU has institutional backing and dedicated staff. You proved it's technically feasible—that's enough. Time to let it go.

**Passion voice:** I'm still in love with this vision. This is labour of love with different success criteria. Zero users might mean poor distribution, not bad vision. Institutions existing doesn't mean quit. I could pivot to apps while they handle infrastructure, or do complementary work.

I don't know which voice is right. That's why I need a framework.

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

-   November 7, 2025 (v3): Restructured intro/sections to eliminate repetition, improved accessibility (alt text), removed redundant paragraphs
-   November 7, 2025 (v2): Added infographic placeholder, resource reality check, concrete problem statement, technical context paragraph, "what shutting down means" section, updated series setup based on reviewer feedback
-   November 7, 2025 (v1): Structural improvements - added H3 headings, strengthened framework section, cut repetition, improved series setup
-   November 6, 2025: Rewrite focusing on introspection and decision-making process
-   November 4, 2025: Complete rewrite - shifted from decision narrative to framework approach
