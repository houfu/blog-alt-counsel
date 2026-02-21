---
title: "How I Built Singapore's Legal Data API with \"Wrong\" Technology"
slug: "how-i-built-singapores-legal-data-api-with-wrong-technology"
tags: ["newsletter", "zeeker", "technical", "architecture"]
status: sent
published_at: "2025-11-17T13:25:32.000Z"
post_id: "691b215de40e8100018920f1"
email_only: true
visibility: public
---

# Newsletter: How I Built Singapore's Legal News API with "Wrong" Technology

**Subject line:** SQLite in production: 40 data sources, $6/month, zero regrets
**Word count:** ~380 words

---

I built Singapore's legal news API with architecture choices that fail textbook reviews: SQLite in production. Static files instead of live databases. Zero custom API code.

The result? Infrastructure that scales from 1 to 40 sources at 2-4 hours per source (down from 8-14 hours), runs on $6-12/month (vs. $45-95 traditional), and enables non-developers to contribute data.

Writing about it turned out harder than building it. Two reviewers, conflicting advice: "5,200 words = never read" vs. "Don't cut depth—it's your differentiator." Three rewrites, one split into two posts, and finally accepting that for technical architecture, depth = credibility.

**How it works:**

Legal data is 99.9% read-heavy. This unlocked an unconventional stack:

1. **zeeker CLI** standardizes scraping, database scaffolding, deployment—one pattern for all sources
2. **SQLite files as static artifacts** deployed to S3 (not live databases)
3. **Datasette auto-generates the API** from those files—zero custom code, instant REST endpoints
4. **Atomic updates** via file replacement—corruption-proof, free rollback, zero downtime

Architecture complexity matches actual requirements, not imagined scale.

**Unexpected benefit:** Contributors submit data files instead of code. No merge conflicts, no dependency hell, no testing interference. A law student can contribute without being a software engineer.

**The writing challenge:**

Presenting technical architecture means serving two audiences—legal technologists who want every implementation detail, and lawyers who need "should I even try this?"

I brainstormed three presentation approaches (Problem→Solution, Stack Walkthrough, Three Breakthroughs). Chose the stack walkthrough: Data Layer (CLI), API Layer (Datasette), UX Layer (canned queries). Then split the 45-minute original draft into Part 2a (architecture) and Part 2b (lessons). Better to separate concerns than force everyone through both.

What I learned: For builders, depth = credibility. The solution to "too long" isn't cutting substance—it's better navigation.

**The full post** covers: three-layer architecture, design decisions with tradeoffs (SQLite vs PostgreSQL, Datasette vs CKAN, static vs live deployment), cost breakdowns, and why each choice works specifically for legal data's read-heavy patterns.

Whether you're building legal infrastructure or evaluating vendor claims about what's "necessary," these patterns help distinguish actual requirements from enterprise cargo-culting.

Read the complete architecture: https://www.alt-counsel.com/data-zeeker-sg-part-2a-architecture/

---

Houfu
