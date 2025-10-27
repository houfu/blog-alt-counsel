# Pitch: Post 3 - "Building data.zeeker.sg: Technical Achievements and Lessons Learned"

## Working Title
"What I'd Do Differently: Technical Lessons from Building data.zeeker.sg"

## Core Argument
data.zeeker.sg worked technically - 100% uptime, fast queries, clean API, quality data. But some technical choices made the labor too high, while others were exactly right. Here's what the next legal data infrastructure project should copy, and what it should avoid.

## Target Audience
- Institutions like SMU building similar legal data projects
- Developers building legal data infrastructure
- Anyone considering a Datasette-based public data project
- Technical folks interested in legal tech architecture

## Structure (1200-1500 words)

### 1. What Worked: The Technical Wins (400-500 words)

#### Datasette + SQLite: The Right Foundation
**Why this was the right choice:**
- 80% of needed functionality out of the box
- Instant REST API generation
- Built-in SQL query interface
- Multiple export formats (JSON, CSV, SQLite)
- Minimal operational overhead
- Open source and well-documented

**What this enabled:**
- Deploy once, mostly forget
- No API code to write or maintain
- Users can query however they need
- Easy data dumps for preservation
- Low hosting costs (~$20/month)

**Lesson:** Don't build what you can generate. Datasette gave me an API, search interface, and admin UI for free.

#### Full-Text Search (FTS5)
**Implementation:**
- SQLite FTS5 on title, summary, and text fields
- Automatic index updates
- Fast search across all content

**Why it mattered:**
- Users expect search, not just SQL
- Legal research is inherently search-based
- Made the database actually usable for non-technical users

**Lesson:** Search is not optional for legal data. Build it from day one.

#### Structured Metadata Standards
**What I did:**
- Consistent schema across all articles
- Required fields: id, category, title, source_link, author, date, summary, text
- ISO 8601 dates
- Unique IDs (hash-based)
- Import timestamps for provenance

**Why it mattered:**
- Data quality remained high
- Easy to query and filter
- Clear provenance trail
- Machine-readable formats

**Lesson:** Define your schema early and enforce it strictly. Inconsistent metadata is technical debt you'll never pay off.

#### Open Licensing (CC-BY-4.0)
**Why this was right:**
- Permissive enough for AI training
- Requires attribution
- No barriers to use
- Clear legal terms

**Impact:**
- Users knew exactly what they could do
- No licensing questions to field
- Enabled unforeseen use cases

**Lesson:** If you want people to use it, make licensing crystal clear and permissive.

### 2. What Was Too Expensive: Where I'd Change Course (400-500 words)

#### Manual Curation at Scale
**What I did:**
- Read every article
- Write professional summaries for each
- Extract legal principles manually
- 30-45 minutes per article × 346 = 173-260 hours

**The problem:**
- Doesn't scale beyond solo effort
- Quality depends entirely on my availability
- Becomes a bottleneck for updates
- Burns out the curator

**What I'd do differently:**
- Start with AI-assisted summarization (GPT-4, Claude)
- Human review for quality, not creation from scratch
- Template-based extraction for structured data
- Could cut per-article time to 10-15 minutes

**Lesson:** Don't do manually what AI can do 80% as well. Save human effort for the 20% that matters.

#### Data Pipeline Complexity
**What I did:**
- Multiple data sources (Straits Times, Business Times, MinLaw, etc.)
- Different scraping approaches for each
- Manual imports initially, automated later
- Staging table (temp_headlines) before production

**The problem:**
- Each source is a maintenance burden
- Breaking changes in source websites
- Time spent debugging scrapers
- Complexity multiplies with each source

**What I'd do differently:**
- Start with ONE high-quality source
- Prove value before adding sources
- Consider RSS/API sources over scraping
- Budget for maintenance time explicitly

**Lesson:** Every data source is a long-term commitment. Add them deliberately, not opportunistically.

#### Feature Planning Without Implementation
**What I planned but never built:**
- Court decisions database
- Parliamentary debates
- Email alerts
- Advanced search with boolean operators
- User accounts and saved searches

**The problem:**
- Mental overhead of "should build this"
- Guilt about features users might want
- Roadmap becomes a todo list that never shrinks

**What I'd do differently:**
- Only plan features I'll build in next 2 weeks
- Resist adding to roadmap without removing something
- Accept that MVP is enough for proof-of-concept

**Lesson:** Unbuilt features are mental debt. Plan only what you'll actually build.

### 3. Architectural Decisions That Paid Off (200-300 words)

#### Portable Data Format (SQLite)
**Why this mattered:**
- Entire database is one file
- Easy backups (just copy the file)
- Easy to hand off to someone else
- No database server to maintain
- Can run locally for development

**The payoff:**
- Zero database administration
- Simple disaster recovery
- Easy data preservation
- Low operational complexity

#### Cloudflare for Security
**What this provided:**
- DDoS protection
- SSL certificates
- CDN for global delivery
- Basic rate limiting

**Why it mattered:**
- Public API needs protection
- Don't want to manage security myself
- Performance boost from CDN

**Lesson:** Use managed services for security and CDN. Don't DIY what you don't have to.

#### API-First Design
**What this means:**
- Everything accessible via API
- No feature only in UI
- JSON endpoints for all data

**Why it mattered:**
- Enabled unforeseen use cases
- Made data truly public
- Users could build on top of it

**Lesson:** If you're building public data infrastructure, API access is not optional.

### 4. The Sustainability Gap (200-250 words)

**What worked technically but not operationally:**

#### The Update Problem
- Data gets stale without regular updates
- Updates require ongoing curation labor
- No way to "set and forget"

**Technical solution that doesn't solve it:**
- Automation helps, but doesn't eliminate work
- Quality still requires human review
- Maintenance is forever

#### The Support Problem
- Users will have questions
- Some will find bugs
- Feature requests will come
- Someone has to respond

**No technical solution for this:**
- This is just ongoing work
- Requires sustained attention
- Can't be "finished"

**The lesson:** Technical excellence doesn't solve the sustainability problem. That's an organizational/institutional challenge.

### 5. Advice for the Next Builder (200-250 words)

**If you're building similar legal data infrastructure:**

**Do this:**
- ✅ Use Datasette + SQLite (or equivalent)
- ✅ Implement full-text search from day one
- ✅ Use AI-assisted curation, human review
- ✅ Start with one data source, prove value first
- ✅ Make data portable (SQLite, clear exports)
- ✅ Use managed services (Cloudflare, etc.)
- ✅ Open licensing (CC-BY-4.0)
- ✅ Document everything as you build

**Don't do this:**
- ❌ Manual curation at scale
- ❌ Multiple data sources before proving single source value
- ❌ Plan features you won't build this month
- ❌ Try to build institutional-scale infrastructure as individual
- ❌ Forget to plan your exit strategy

**The meta-lesson:**
Technical choices matter, but the bigger question is: who will sustain this? If the answer is "just me," build a prototype, not production infrastructure.

### 6. What's Preserved (100-150 words)

**For anyone who wants to fork or learn from this:**
- Full SQLite database dumps (CC-BY-4.0)
- 20-page technical documentation
- Visual documentation of the site
- This post series capturing lessons learned
- Clear licensing for all components

**What this enables:**
- Someone can fork the entire project
- Institutions can learn from what worked/didn't
- Data lives on even if site shuts down
- Technical decisions are explained

**The principle:** If you're going to shut down, do it in a way that preserves what was learned.

## Unique Angle
Most technical post-mortems are about failure (what broke, what went wrong). This is a post-mortem of technical **success** - it worked, but some choices made it unsustainable. The lessons are about right-sizing effort, not fixing bugs.

## Tone
- **Technical but accessible:** Code examples if needed, but clear explanations
- **Honest about trade-offs:** What worked AND what was too expensive
- **Generous with lessons:** Help the next builder avoid my mistakes
- **Pragmatic:** Focus on actionable advice

## Connection to Posts 1 & 2
- Post 1: "Here's how much work it was"
- Post 2: "Here's who should do this work"
- Post 3: "Here's how to do it better"

Complete arc from problem → solution → implementation guide.

## Who Needs This Post
**Primary audience:**
- SMU team building their legal database
- Any institution considering similar project
- Legal tech developers

**Secondary audience:**
- Developers interested in Datasette patterns
- Anyone building public data infrastructure
- Technical readers of alt-counsel

## Success Metrics
Post succeeds if:
- SMU team (or similar projects) finds it useful
- Saves someone from manual curation at scale
- Validates technical choices that worked
- Provides actionable "do this, not that" guidance
- Preserves technical knowledge for future builders

## Key Technical Details to Include
- Datasette configuration and customization
- SQLite FTS5 implementation
- Database schema design
- Data pipeline architecture
- AI-assisted curation approach (what I'd do differently)
- Cloudflare setup
- Export/preservation strategy

## Potential Challenges
- **Too technical for general audience:** Mitigate with clear explanations, focus on principles
- **Seems like humble-bragging:** Balance wins with honest mistakes
- **SMU might not want advice:** Frame as "what I learned" not "what you should do"

## Key Phrase to Capture the Essence
"data.zeeker.sg worked technically. Here's what to copy, what to avoid, and what AI could have done for me."

---

## Open Questions for Discussion
1. How much code/configuration detail to include?
2. Should I share the actual Datasette configuration files?
3. Include specific AI prompts I'd use for summarization?
4. Should I provide the SQLite schema as downloadable file?
5. How technical is too technical for alt-counsel audience?
