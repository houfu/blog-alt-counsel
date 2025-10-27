# Git History Analysis for data.zeeker.sg

**Analysis Date:** October 26, 2025
**Repositories Analyzed:**
- https://github.com/houfu/zeeker (backend/framework)
- https://github.com/houfu/zeeker-datasette (deployment/frontend)

## Raw Statistics

### zeeker (Backend Framework)
- **Total commits:** 53
- **Lines added:** 31,783
- **Lines deleted:** 9,952
- **Net lines of code:** 21,831
- **Unique days worked:** 21 days
- **Date range:** June 9, 2025 - September 3, 2025 (3 months)
- **Most active days:** Aug 10 (9 commits), Aug 23 (7 commits), Jun 22 (5 commits)

### zeeker-datasette (Deployment)
- **Total commits:** 26
- **Lines added:** 33,003
- **Lines deleted:** 22,366
- **Net lines of code:** 10,637
- **Unique days worked:** 15 days
- **Date range:** May 15, 2025 - August 23, 2025 (3.5 months)
- **Most active days:** Jun 6 (5 commits), Jun 8 (4 commits), Jun 9 (3 commits)

### Combined Totals
- **Total commits:** 79
- **Total lines added:** 64,786
- **Total lines deleted:** 32,318
- **Net lines of code:** 32,468
- **Unique days worked:** ~36 days (accounting for overlap)

## Time Estimates

### Method 1: Industry Standard (Lines of Code)
**Assumption:** Professional developers average 50-100 lines of productive code per hour

- **Conservative (100 LOC/hour):** 32,468 / 100 = **~325 hours**
- **Realistic (75 LOC/hour):** 32,468 / 75 = **~433 hours**
- **With refactoring (50 LOC/hour):** 32,468 / 50 = **~650 hours**

Note: This includes test code, documentation, and refactoring visible in commits

### Method 2: Commit Session Analysis
**Days with multiple commits suggest intensive coding sessions**

Based on commit patterns:
- **21 intensive days on zeeker** (5-9 commits/day): ~4-6 hours each = 84-126 hours
- **15 intensive days on zeeker-datasette** (3-5 commits/day): ~3-5 hours each = 45-75 hours
- **Additional days with 1-2 commits**: ~20 days × 2 hours = 40 hours

**Estimated total:** 170-240 hours

### Method 3: Project Phase Estimation
Based on commit messages showing distinct phases:

1. **Initial setup & architecture** (May-June): 40-60 hours
2. **Core feature development** (June-August): 80-120 hours
3. **Testing & refactoring** (August): 40-60 hours
4. **Deployment & infrastructure** (August-September): 30-40 hours
5. **Maintenance & bug fixes** (ongoing): 20-30 hours

**Estimated total:** 210-310 hours

## Synthesis: Estimated Coding Time

**Conservative estimate:** 170-240 hours (based on commit sessions)
**Mid-range estimate:** 210-310 hours (based on project phases)
**Maximum estimate:** 325-433 hours (based on LOC, including all refactoring)

## What's NOT Captured in Git History

These estimates ONLY cover code committed to GitHub. They do NOT include:

1. **Content curation time:**
   - Reading 346 articles
   - Writing summaries
   - Quality control
   - Data validation
   - **Estimated:** 173-260 hours (30-45 min × 346 articles)

2. **Design & planning:**
   - Architecture decisions
   - API design
   - Schema design
   - Feature planning
   - **Estimated:** 20-40 hours

3. **Research & learning:**
   - Datasette documentation
   - SQLite FTS5 research
   - Legal domain research
   - GenAI integration testing
   - **Estimated:** 20-40 hours

4. **Operations & maintenance:**
   - Deployment setup
   - DNS configuration
   - Cloudflare setup
   - Monitoring
   - Bug investigation
   - **Estimated:** 20-30 hours

5. **Documentation:**
   - Writing README files
   - Creating project reports
   - Visual documentation
   - **Estimated:** 10-20 hours (based on 20-page report)

## Total Time Investment Estimate

| Category | Conservative | Mid-range | Maximum |
|----------|-------------|-----------|---------|
| Coding (from git) | 170 hours | 270 hours | 430 hours |
| Content curation | 173 hours | 215 hours | 260 hours |
| Planning & design | 20 hours | 30 hours | 40 hours |
| Research & learning | 20 hours | 30 hours | 40 hours |
| Operations | 20 hours | 25 hours | 30 hours |
| Documentation | 10 hours | 15 hours | 20 hours |
| **TOTAL** | **413 hours** | **585 hours** | **820 hours** |

## Realistic Estimate for Blog Post

Based on this analysis, a reasonable range to cite is:

**"I spent 400-600 hours building data.zeeker.sg"**

Breaking it down:
- ~250-300 hours on coding and technical infrastructure
- ~175-215 hours on content curation (346 articles)
- ~75-85 hours on planning, research, operations, and documentation

This is more conservative than the "250-350 hours" initially estimated, which likely only accounted for content curation, not the full technical development.

## Key Insight

The git history reveals that the **coding effort was substantial** - not just "a weekend project with GenAI." While GenAI may have assisted with code generation and content summarization, the architecture, integration, testing, and refinement still required hundreds of hours of skilled work.

**The lesson:** GenAI makes certain tasks faster, but building production-quality infrastructure still requires significant time investment.
