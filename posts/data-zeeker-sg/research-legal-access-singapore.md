# Research: Public Legal Information Access in Singapore

**Research Date:** October 27, 2025
**Topic:** Free vs. paid access to Singapore legal information
**Purpose:** Understand the landscape data.zeeker.sg was trying to improve

---

## Executive Summary

Singapore has a **mixed landscape** for legal information access. While **statutes are freely available** through Singapore Statutes Online, **case law access is fragmented**: free options exist but with significant limitations (3-month windows, limited search, coverage gaps), while comprehensive access requires expensive subscriptions to LawNet. **Legal news is scattered** across multiple sources with no centralized, structured database - the gap data.zeeker.sg tried to fill.

---

## Key Findings

### 1. LawNet - The Premium Option

**What it is:**
- Service of Singapore Academy of Law and LawNet Technology Services
- Comprehensive legal research platform
- Primary paid option for Singapore legal professionals

**Pricing (Significant Barrier):**
- **Pay-per-use:** SGD 57.53 for first 30 minutes, SGD 8 per additional 30 minutes
- **Monthly subscription:** SGD 206.92 (~USD 155)
- **Context:** One blog post described pay-per-use as "9 Filet-o-Fish meals" to illustrate the cost burden

**Regional Context:** ✅ Singapore-specific

**Source:** [Getting judgments for free in Singapore](https://tomoe.asia/posts/2023-01-10-free-access-to-case-law-in-singapore/) - January 2023

---

### 2. Free Case Law Options (Limited)

#### LawNet Free Resources
- **Coverage:** Last 3 months only
- **Courts:** Supreme Court, State Courts, Family Court, Juvenile Court
- **Limitation:** Historical research impossible; subject-matter research severely constrained
- **URL:** https://www.lawnet.sg/lawnet/web/lawnet/free-resources

#### Singapore Law Watch (Best Free Option)
- **Publisher:** Singapore Academy of Law
- **Coverage:**
  - Supreme Court: 2000 - present
  - IPOS: 2018 - present
  - PDPC: 2018 - present
- **Access:** Completely free, no registration required
- **URL:** https://www.singaporelawwatch.sg/Judgments
- **Additional:** Daily email, RSS feeds, mobile apps

#### Singapore Courts Official Website
- **Coverage:** Written judgments from Singapore Courts
- **Feature:** AI Pair Search prototype for Supreme Court judgments
- **URL:** https://www.judiciary.gov.sg/judgments

#### CommonLII
- **Coverage:** State Court judgments from 2006 onwards
- **Limitation:** More limited than Supreme Court coverage

**Regional Context:** ✅ All Singapore-specific

---

### 3. Free Legislation Access (Comprehensive)

#### Singapore Statutes Online (SSO)
- **Provider:** Attorney-General's Chambers
- **Cost:** Completely free
- **Coverage:**
  - Current legislation
  - Historical versions
  - Revised editions
  - Acts, Subsidiary Legislation, Bills
- **Important Note:** Unofficial version; not authoritative text
- **Enhancement:** PLUS Project modernizing text and design
- **URL:** https://sso.agc.gov.sg/

**Assessment:** Legislation access is NOT the problem - statutes are freely available. The gaps are in case law and legal news.

**Regional Context:** ✅ Singapore-specific

---

### 4. Legal News Landscape (Fragmented)

#### Singapore Law Watch (News)
- **Content:** Legal news headlines, commentaries (last 3 months), legislation updates
- **Sources:** Curated from 40+ sources
- **Updates:** Daily
- **Access:** Free website, daily email, RSS, mobile apps

#### Other Sources (Scattered)
- Straits Times (paywall)
- Business Times (paywall)
- Ministry of Law announcements (free but not centralized)
- Various government agency updates
- Law firm newsletters

**The Gap:** No free, centralized, **structured database** of legal news with:
- Machine-readable format
- API access
- Professional summaries
- Full-text search
- Historical coverage beyond 3 months

**This is exactly what data.zeeker.sg tried to provide.**

---

### 5. Access Barriers & Frustrations

From the January 2023 blog post by nondescryptid:

**Time Restrictions:**
> "Free resources typically show only recent judgments, limiting research by subject matter"

**Search Functionality Gaps:**
> "Results lack excerpts showing keyword context"

**Physical Barriers:**
> "NLB's library access requires in-person visits with single-user restrictions"

**Coverage Gaps:**
> "State Court judgments have worse coverage than Supreme Court decisions"

**Equity Concerns:**
> "Litigants-in-person already face disadvantages without counsel—paid-access barriers exacerbate inequality. Judgments should be open for public viewing since courts receive taxpayer funding."

**Regional Context:** ✅ Singapore-specific concerns

**Source:** [Getting judgments for free in Singapore](https://tomoe.asia/posts/2023-01-10-free-access-to-case-law-in-singapore/) - January 2023

---

## What Was Missing (data.zeeker.sg's Niche)

### The Specific Gap

**Free case law:** Exists but fragmented, time-limited, poor search
**Free legislation:** Comprehensive via SSO
**Free legal news:** Scattered across 40+ sources, no centralization, no API

**What didn't exist before data.zeeker.sg:**

1. ✗ **Centralized legal news database** with structured data
2. ✗ **REST API** for programmatic access to Singapore legal news
3. ✗ **Full-text search** across curated legal news
4. ✗ **Machine-readable format** suitable for AI training
5. ✗ **Professional summaries** extracting key legal principles
6. ✗ **Open licensing** (CC-BY-4.0) for reuse
7. ✗ **Historical coverage** beyond 3-month windows

### What data.zeeker.sg Provided

- 346 legal news articles with professional summaries
- REST API with JSON/CSV export
- Full-text search (SQLite FTS5)
- CC-BY-4.0 licensed data
- Coverage from April 2025 onwards (7 months)
- Aggregation from multiple paywalled and free sources

---

## Alt-Counsel Angle: Resource-Constrained Perspective

### For Solo Counsels / Small Teams

**Problem:**
- Can't afford SGD 206/month LawNet subscription
- Need legal news for client alerts, staying current
- Want to build legal tech but lack structured data

**Existing Free Options:**
- Singapore Law Watch: Great for browsing, poor for systematic research
- 3-month windows: Useless for subject-matter research
- No API access: Can't build tools on top

**What data.zeeker.sg Offered:**
- Free alternative to paid legal news aggregation
- API for building automation/alerts
- Structured data for analysis
- No registration barriers

### For Legal Tech Builders

**Problem:**
- Want to build Singapore legal AI/tools
- Need training data and structured content
- Can't afford expensive data licensing

**Existing Free Options:**
- Web scraping (legally questionable, fragile)
- Manual curation (doesn't scale)
- Pay for LawNet (expensive, restrictive licensing)

**What data.zeeker.sg Offered:**
- CC-BY-4.0 licensed data (AI training permitted)
- Clean, structured format
- Professional quality summaries
- REST API for easy integration

---

## Jurisdictional Flags

⚠️ **Singapore-specific context:** This entire research is Singapore-focused. Legal information access varies dramatically by jurisdiction:

- **US:** PACER for federal courts (paid), state court access varies widely
- **UK:** BAILII (free), but commercial databases dominate professional use
- **Australia:** AustLII (free, comprehensive)
- **Singapore:** Mixed model with significant free options but gaps remain

Singapore is **better than US** for free access (no PACER fees, free statutes), but **worse than Australia** (AustLII is more comprehensive than Singapore's free options).

---

## Statistics & Data Points

- **LawNet pricing:** SGD 57.53 per session (first 30 min) or SGD 206.92/month
- **Singapore Law Watch coverage:** 2000+ for Supreme Court, 2018+ for IPOS/PDPC
- **Free time windows:** 3 months for LawNet free resources, Singapore Law Watch news
- **Sources aggregated:** 40+ sources for Singapore Law Watch
- **data.zeeker.sg coverage:** 346 articles over 7 months (April-October 2025)

---

## Key Takeaways for Blog Post

1. **The problem is real:** Legal information in Singapore is fragmented, with significant gaps in free access to legal news and structured data

2. **Free options exist but are limited:** 3-month windows, no API, poor search functionality

3. **Cost barrier is significant:** SGD 206/month for comprehensive access via LawNet

4. **The gap data.zeeker.sg filled:** Centralized, structured, API-accessible legal news with professional summaries - this didn't exist before

5. **Equity concerns are documented:** Third-party blog posts from 2023 already identified access barriers as problematic

6. **Singapore context matters:** This is a Singapore-specific problem with Singapore-specific solutions

---

## Sources

1. **LawNet Official:** https://www.lawnet.sg/lawnet/web/lawnet/free-resources
2. **Singapore Law Watch:** https://www.singaporelawwatch.sg/
3. **Singapore Statutes Online:** https://sso.agc.gov.sg/
4. **Singapore Courts:** https://www.judiciary.gov.sg/judgments
5. **nondescryptid blog post:** https://tomoe.asia/posts/2023-01-10-free-access-to-case-law-in-singapore/ (January 2023)
6. **NUS LibGuides:** https://libguides.nus.edu.sg/Singaporelaw/databases
7. **Jerrold Soh LinkedIn Post (SMU Centre for Digital Law Project Announcement):** https://www.linkedin.com/posts/jerroldsoh_the-smu-centre-for-digital-law-has-started-activity-7386283268515495937-FyP_ (October 21, 2025)
   - Announces SMU's 3-year project to build "Singapore's first open empirical legal database"
   - Hiring Research Engineer and Research Assistant for 2-3 years
   - Launch event scheduled for November 18, 2025
   - Inspired by international efforts and research challenges sourcing legal datasets
   - Will function like data.gov but for legal research (cases, statutes, scholarly works)

---

## Additional Research Needed

- [ ] Current pricing for LawNet (confirm if still SGD 206.92/month in 2025)
- [ ] Statistics on who uses Singapore Law Watch vs. paid options
- [ ] Any recent initiatives to improve public access to legal information
- [ ] Comparison with what SMU is planning to build (after Nov 18 event)

---

**Research compiled:** October 27, 2025
**For:** data.zeeker.sg blog post series
**Next step:** Use this to frame "the problem I tried to solve" in Post 1
