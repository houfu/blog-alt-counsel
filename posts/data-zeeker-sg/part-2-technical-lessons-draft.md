---
title: "Building data.zeeker.sg: Technical Lessons"
date: TBD
draft: true
tags: [legal-tech, technical, datasette, sqlite, infrastructure, open-data]
---

**[Introduction section to be written]**

## Technical Architecture: Three Layers That Work Together

Building data.zeeker.sg taught me that modern infrastructure for legal data isn't just about collecting information - it's about **making that data immediately useful** to different audiences without requiring technical expertise.

The architecture has three layers:

1. **Data Layer** - CLI tool that handles scraping, database scaffolding, and deployment
2. **API Layer** - Datasette that turns SQLite into instant REST API + searchable interface
3. **UX Layer** - Canned queries that make legal research accessible without SQL knowledge

Each layer solved a specific problem. Together, they created infrastructure that runs automatically and serves both developers (who want APIs) and lawyers (who want answers).

Let me walk through what each layer does and why it matters.

---

### Layer 1: Data Layer - The CLI Tool

**The problem: Scaling legal data sources without chaos**

I started with one legal news aggregator, but I could already see the future problem: What happens when I want to add more sources?

Without standardization, each new source means:
- Writing custom scraping logic (RSS feeds, HTML parsing, APIs)
- Creating database tables with potentially different schemas
- Implementing error handling, logging, retry logic
- Setting up scheduling and deployment
- Maintaining N different Python scripts in N different ways

I built the zeeker CLI to solve this problem before it became unmanageable. **Standardize the pattern with one source, then scaling to many becomes trivial.**

**Why a CLI tool?**

Two critical reasons:

**1. Standardization across all data sources**

The CLI enforces one pattern for everything:
- **Same interface**: Every source implements `fetch_data()` - that's it
- **Same schema management**: Automatic table creation, type inference, conflict detection
- **Same error handling**: Built into the framework, not reimplemented for each source
- **Same metadata**: Every table gets the same tracking (last updated, record count, schema version)

I built one source this way. Adding the second, third, or fortieth source? Copy the template, write scraping logic, done. No reinventing infrastructure.

**2. Automation & Continuous Deployment**

CLI commands are scriptable:

```bash
# GitHub Actions workflow
zeeker build --sync-from-s3  # Incremental update
zeeker deploy                # Push to S3
```

Or schedule locally:
```bash
# Cron job: Daily at 2 AM
0 2 * * * cd /path/to/legal_news_sg && zeeker build && zeeker deploy
```

**Human-friendly commands + machine-friendly automation = sustainable infrastructure**

Without the CLI, continuous deployment means writing custom orchestration scripts. With the CLI, it's one line in a cron job or GitHub Action.

**The complete workflow:**

```bash
# 1. Initialize a new database project
uv run zeeker init legal_news_sg
cd legal_news_sg

# 2. Add a data resource (creates template with proper structure)
uv run zeeker add articles \
  --description "Singapore legal news articles" \
  --facets category --facets jurisdiction \
  --sort "published_date desc"

# 3. Implement your scraper in resources/articles.py
# (Screenshot will show the generated template)

# 4. Build the SQLite database
uv run zeeker build

# 5. Deploy to S3
uv run zeeker deploy
```

[Screenshot 1: `zeeker init` output and project structure]

[Screenshot 2: Generated `resources/articles.py` template]

**The resource-based architecture:**

Each data source is a Python module implementing one function:

```python
# resources/articles.py
from sqlite_utils.db import Table
from typing import Optional, List, Dict, Any

def fetch_data(existing_table: Optional[Table]) -> List[Dict[str, Any]]:
    """Fetch legal news articles from Singapore sources."""
    # Your scraping logic here (requests, BeautifulSoup, APIs, etc.)
    data = scrape_legal_news_sources()

    # Incremental updates: filter out existing records
    if existing_table:
        existing_ids = {row["id"] for row in existing_table.rows}
        data = [item for item in data if item["id"] not in existing_ids]

    return data
```

One source following this pattern. But the framework is ready: add more sources, all following the same pattern. Add error handling once in the framework, not N times in different scripts.

[Screenshot 3: `zeeker build` output showing progress and meta tables]

**SQLite as deployment artifact - The key insight:**

Traditional approach:
- Run database server (PostgreSQL, MySQL)
- Scrapers insert data into live database
- Worry about concurrent writes, connection pooling, backups
- Deploy database separately from application

Zeeker approach:
- Build SQLite file locally (`zeeker build` → `legal_news_sg.db`)
- Push file to S3 (`zeeker deploy` → S3 static storage)
- **Result**: No database server to maintain, atomic updates (new file replaces old), version history for free (S3 keeps old versions), cheap hosting (S3 storage costs, not running servers)

[Screenshot 4: `zeeker deploy` output and S3 bucket structure]

**Cost Comparison: Why This Architecture Matters**

Building infrastructure for a passion project means every dollar and every hour counts. Here's the real cost difference:

**Monthly Infrastructure Costs**

Traditional SQL Backend Approach:
- RDS PostgreSQL (small instance): $15-30/month
- Application server (API + web): $10-25/month
- **Scraper orchestration server** (running scrapers on schedule): $20-40/month
  - Can't use serverless efficiently - needs coordination
  - Needs always-on container or VM for cron jobs
  - Scales poorly as you add sources
- Backups, monitoring, security patches
- **Total: $45-95/month + ongoing DevOps overhead**

SQLite + S3 + GitHub Actions Approach (data.zeeker.sg):
- S3 storage (1GB database): $0.023/month
- S3 requests (reads via Datasette): ~$1-2/month
- Datasette hosting (single read-only container): $5-10/month
- **Scraper orchestration**: GitHub Actions free tier - serverless, zero cost
  - Runs `zeeker build && zeeker deploy` on schedule
  - No always-on infrastructure needed
  - Scales linearly with more sources
- **Total: $6-12/month, minimal maintenance**

**The infrastructure saving:** No server running 24/7 just to run scrapers. GitHub Actions executes when needed, shuts down when done. Whether you have 1 source or 40, costs stay flat.

**Developer Time: Adding a New Data Source**

Traditional approach (without standardized tooling):
- Write scraper script: 2-4 hours
- Write database migration: 1-2 hours
- Update API endpoints: 2-3 hours
- Update deployment scripts: 1-2 hours
- Test and debug: 2-3 hours
- **Total: 8-14 hours per new source**

With zeeker CLI:
- `zeeker add source_name`: 30 seconds
- Implement `fetch_data()` in generated template: 2-4 hours
- `zeeker build && zeeker deploy`: 2 minutes
- **Total: 2-4 hours per new source**

**I built 1 source with this pattern. But the architecture is ready:** If I scale to 40 sources (my original vision for comprehensive Singapore legal news coverage), that's 80-160 hours with standardization vs. 320-560 hours without it. **That's 240-400 hours saved** (6-10 weeks of full-time work) by building the right foundation first.

For a solo builder working evenings and weekends, designing for standardization upfront—even with just one source—is what makes future scaling feasible at all.

**Multi-machine sync for incremental updates:**

```bash
# Machine A: Initial build
zeeker build
zeeker deploy

# Machine B: Sync existing data, add new records
zeeker build --sync-from-s3  # Downloads existing DB first
zeeker deploy                # Uploads updated DB

# GitHub Actions: Daily automated updates
zeeker build --sync-from-s3  # Gets latest, adds new articles
zeeker deploy                # Pushes updated DB
```

Same commands work on your laptop, on a server, in CI/CD. That's the power of standardization.

**For coders:** Python-based CLI using Click, sqlite-utils for database operations, automatic schema detection and type inference, comprehensive pytest test coverage, modular command structure. Source: [github.com/houfu/zeeker](https://github.com/houfu/zeeker)

**For lawyers:** One command (`zeeker build && zeeker deploy`) updates all your legal news sources and publishes the update. Schedule it daily, and your legal database stays current without manual intervention. No database administration required. Start with one source, scale when you're ready.

**The output:** A single SQLite file in S3, containing structured data with proper schema, metadata tracking, and ready to be served. How does that file become a searchable API and web interface? That's where Datasette comes in.

---

### Layer 2: API Layer - Datasette

**The handoff: From SQLite file to live API**

Layer 1 produced a SQLite file deployed to S3. Now what? How do developers query this data? How do users browse it?

Building a REST API and admin interface from scratch would take weeks. You'd need to:
- Write API endpoints for every table
- Handle pagination, filtering, sorting
- Build a web interface
- Implement search functionality
- Write documentation

Enter Datasette.

**What is Datasette?**

Datasette is an open-source tool (by Simon Willison) that does one thing brilliantly: **turn any SQLite database into an instant API and web interface**.

You point it at a SQLite file. It gives you:
- **REST API** with automatic endpoint generation for every table
- **JSON responses** with automatic pagination
- **Web interface** for browsing and querying
- **Full-text search** (if tables have FTS5 indexes)
- **Faceted browsing** (filter by categories, dates, etc.)
- **SQL query interface** for power users
- **Zero code written**

**The deployment architecture:**

```bash
# Datasette configuration (simplified)
datasette serve \
  s3://your-bucket/latest/legal_news_sg.db \
  --metadata metadata.json \
  --port 8001
```

That's it. Datasette reads the SQLite file directly from S3 and serves it.

[Screenshot 5: Datasette web interface showing database homepage]

**What you get automatically:**

**1. REST API endpoints for every table:**

```bash
# Get all articles (paginated, default 100 per page)
GET https://data.zeeker.sg/legal_news_sg/articles.json

# Get specific article
GET https://data.zeeker.sg/legal_news_sg/articles/123.json

# Filter by category
GET https://data.zeeker.sg/legal_news_sg/articles.json?category=employment

# Full-text search
GET https://data.zeeker.sg/legal_news_sg/articles.json?_search=unfair+dismissal

# Sort by date, descending
GET https://data.zeeker.sg/legal_news_sg/articles.json?_sort_desc=published_date

# Combine filters
GET https://data.zeeker.sg/legal_news_sg/articles.json?category=employment&_sort_desc=published_date&_size=50
```

Every query parameter is automatically supported. No endpoint code written.

[Screenshot 6: Datasette API response (JSON) in browser or Postman]

**2. Interactive web interface:**

Browse tables, run searches, filter by facets, export to CSV/JSON - all generated automatically from your database schema. The facets you specified in `zeeker add articles --facets category` become clickable filters.

**3. Full-text search powered by SQLite FTS5:**

The zeeker CLI sets up FTS5 indexes automatically when you specify search fields:

```bash
# During resource creation
zeeker add articles --fts-fields title --fts-fields content
```

Datasette exposes the FTS5 search through both API and web interface. No Elasticsearch, no separate search infrastructure needed. SQLite's FTS5 is fast enough for hundreds of thousands of records.

**For coders:**
- Automatic OpenAPI-style documentation at `/database.json`
- Clean JSON responses with predictable structure
- Pagination, filtering, sorting built-in
- CORS support for JavaScript clients
- Plugin ecosystem (authentication, caching, custom SQL functions)
- Can embed as Python library or run as standalone service

**For lawyers:**
- Point-and-click interface for searching legal data
- No SQL knowledge required for basic searches
- Export results to CSV for further analysis in Excel
- Share filtered views via URL (bookmarkable searches)
- Fast search across all articles

[Screenshot 7: Datasette table view with facets and search]

**The continuous deployment flow:**

```
Scrapers (Python)
  → zeeker build (SQLite file)
  → zeeker deploy (S3)
  → Datasette reads from S3
  → API + Web UI automatically updated
```

When you run `zeeker deploy`, the new SQLite file replaces the old one in S3. Datasette can be configured to detect the change and reload. **Atomic updates with zero API downtime.**

**Why SQLite + Datasette works:**

SQLite files are:
- **Portable** - single file, easy to deploy
- **Fast** - optimized for read-heavy workloads (perfect for APIs)
- **Queryable** - full SQL support including FTS5
- **Cacheable** - CDNs can cache the entire database file
- **Versionable** - S3 versioning gives you time-travel for free

Datasette turns these SQLite advantages into developer and user advantages without requiring you to write any API code.

**Scaling characteristics:**

Because Datasette serves static database files:
- **Read performance scales horizontally** - add more containers, put CDN in front
- **No database connection pooling** - each container reads the file
- **No write concurrency issues** - updates happen via file replacement (zeeker deploy)
- **Cheap to scale** - static file serving is the cheapest compute pattern

For data.zeeker.sg with one source, a single container is plenty. If I scale to 40 sources with thousands of articles, I can add containers or put Cloudflare in front. The architecture scales without changing.

**The limitation:** This is read-only by design. No writes through the API. For a legal news database, that's perfect—scrapers write (via zeeker build), users read (via Datasette). Clear separation of concerns.

**For coders:** Source code at [github.com/simonw/datasette](https://github.com/simonw/datasette), extensive plugin ecosystem, can customize templates and styling.

**For lawyers:** Think of it as a specialized web server that speaks database. You get a professional API and search interface without hiring a backend developer.

**Next layer:** Datasette gives you power, but it still expects users to understand tables, fields, and filters. How do you make this accessible to lawyers who don't know what "faceted browsing" means? That's where canned queries come in (Layer 3).

---

### Layer 3: UX Layer - Making It Accessible Without SQL

**The handoff: From powerful API to lawyer-friendly interface**

Layer 2 gave us Datasette with automatic API endpoints and full-text search. But Datasette's default interface assumes technical users who understand tables, SQL, and APIs.

Lawyers and legal researchers don't think in SQL. They think in research questions: "Find all employment law cases from 2024" or "Show me trends in intellectual property mentions."

**The challenge: Bridge the technical-legal divide**

I needed to make the database accessible without requiring SQL knowledge, while keeping power available for those who want it.

The solution: Three layers of accessibility.

**1. Search-First Interface**

Most legal research starts with search, not browsing schemas.

The homepage puts search front and center:

[Screenshot 8: Homepage hero with search bar and Singapore Supreme Court image]

```html
<!-- Prominent search on landing page -->
<input type="search"
       placeholder="Search legal news, cases, decisions..."
       aria-label="Search legal data">
```

Global search powered by `datasette-search-all` plugin searches across all databases and tables simultaneously. Lawyers don't need to know which table contains what - just search everything.

**2. Use-Case Driven Query Examples**

Instead of "here are the SQL commands," I built a "How to Use" guide organized by actual legal research tasks:

[Screenshot 9: "How to Use" page showing common legal research tasks]

Each task includes:
- **The legal research goal** ("Track legal developments in IP law")
- **The method** (search or SQL)
- **Clickable examples** that actually work
- **Copy buttons** for the code

Example task: "Analyze Legal Topic Trends"

```sql
-- Clickable query that works immediately
SELECT strftime('%Y-%m', date) as month,
       COUNT(*) as mentions
FROM headlines
WHERE LOWER(text) LIKE '%employment%'
   OR LOWER(title) LIKE '%employment%'
GROUP BY month
ORDER BY month DESC
```

**The clever part:** Every query has a "🔗 Try This Query" button with pre-filled URL parameters. Lawyers can click and see results immediately, then modify the URL to change search terms.

[Screenshot 10: SQL query results with clickable example]

**3. JavaScript Enhancements for Usability**

Custom JavaScript adds accessibility features:

```javascript
// zeeker-enhanced.js (simplified)
class ZeekerEnhancer {
    setupFeatures() {
        this.addCopyButtons();      // One-click copy for SQL
        this.addKeyboardShortcuts(); // Power user shortcuts
        this.setupQueryHelpers();    // Inline SQL assistance
        this.setupScrollToTop();     // Long results navigation
    }
}
```

**Copy buttons everywhere:**
- SQL examples
- API endpoints
- Export URLs

Legal researchers can copy-paste without selecting text.

**4. Progressive Disclosure of Complexity**

The interface shows three access levels:

**Level 1: Search (No SQL required)**
```
🔍 Search box → Type "employment law" → Get results
Export as CSV for Excel analysis
```

**Level 2: Guided SQL (Copy-paste examples)**
```
📊 Pick a use case → Click "Try This Query"
Modify keywords in URL
```

**Level 3: Full SQL (For power users)**
```
💻 SQL Editor → Write custom queries
Full database access
```

Most lawyers stay at Level 1-2. Researchers and developers use Level 3.

**5. Professional Visual Design**

2182 lines of custom CSS transform Datasette from "developer tool" to "professional legal data platform":

[Screenshot 11: Custom styled database/table view with cards and stats]

- **Hero banner** with Singapore Supreme Court image (contextual branding)
- **Glassmorphic cards** (modern, professional aesthetic)
- **Breadcrumb navigation** (never get lost)
- **Database/table statistics** (understand scope at a glance)
- **Responsive design** (works on mobile for court/meeting reference)

**Custom plugins for polish:**

```python
# String manager plugin - centralized UI text
STRINGS = {
    'search_placeholder': 'Search across all legal databases...',
    'db_explore': 'Explore Data',
    'ui_immutable_data': 'Immutable Data'
}

# Template filters - better formatting
env.filters["pluralize"] = pluralize_filter  # "1 result" vs "5 results"
env.filters["filesizeformat"] = filesizeformat_filter  # "2.5 MB"
```

**6. Export-Friendly Everything**

Every view has export options visible:

```
/sglawwatch/headlines.csv    → Excel/Google Sheets
/sglawwatch/headlines.json   → Python/R/JavaScript
/sglawwatch.db               → Full database download
```

Lawyers can analyze in familiar tools (Excel). Developers can programmatically access.

**For coders:**
- Full SQL interface still available
- API endpoints documented
- JSON/CSV exports on every query
- Copy-paste curl examples on homepage

```bash
# From homepage
curl "https://data.zeeker.sg/-/search.json?q=contract+law"
```

**For lawyers:**
- Search without knowing table names
- Click pre-built queries for common tasks
- Export to Excel with one click
- Bookmark filtered searches (every search = shareable URL)
- No SQL required for 90% of use cases

**The measurement:**

Traditional Datasette: Requires understanding of relational databases, SQL syntax, API concepts.

Enhanced for legal: Can search, find trends, and export data with zero technical knowledge. SQL available when needed, invisible when not.

**For lawyers:** "It looks like a professional legal database, not a developer tool."

**For developers:** "It's still Datasette underneath - I can query anything I want."

Both audiences served by the same infrastructure.

**What this enabled:** Someone from a law firm could search legal news, export trends to Excel, and share filtered searches with colleagues—without emailing me for help. The interface guides them.

**Next section:** The three layers work together, but why did I choose this specific architecture over alternatives? That's where design decisions come in

---

## Design Decisions: Why This Architecture?

The three layers work together, but why these specific choices? Why SQLite instead of PostgreSQL? Why Datasette instead of building a custom API or using CKAN? Why static deployment instead of a live application server?

These weren't arbitrary decisions. Each choice optimized for a specific constraint: **solo builder, limited budget, legal documents (not just data), passion project sustainability.**

### Why SQLite Instead of PostgreSQL?

**The standard approach for web applications:**
- PostgreSQL database server
- Always-on, accepts writes
- Connection pooling, concurrent access
- Backup strategies, monitoring
- "Production-grade database"

**Why I chose SQLite:**

1. **Deployment as artifact:** SQLite is a single file. Build it locally, test it, deploy when ready. PostgreSQL is a running service—deploy means migrating data into production.

2. **Portability:** Copy a `.db` file anywhere. Version it in S3. Download for offline analysis. PostgreSQL requires connection credentials and network access.

3. **Cost:** SQLite = zero hosting cost (it's just a file). PostgreSQL = $15-30/month minimum for managed hosting, or maintaining your own server.

4. **Read-heavy optimization:** Legal research is 99.9% reads, 0.1% writes. SQLite excels at read-heavy workloads. PostgreSQL optimizes for concurrent writes I don't need.

5. **FTS5 full-text search:** SQLite's FTS5 extension provides excellent full-text search. No need for Elasticsearch or separate search infrastructure.

**The tradeoff:** Can't handle concurrent writes. For legal news where all writes happen via scheduled scraper runs (not user input), this limitation doesn't matter.

**For solo builders:** SQLite means I can develop on my laptop, test everything locally, and deploy only when ready. PostgreSQL means maintaining a production database from day one.

### Why Datasette Instead of Custom API?

**Building a custom REST API traditionally means:**
- Writing endpoint code for every table (`GET /articles`, `GET /articles/:id`, etc.)
- Implementing pagination, filtering, sorting
- Building search functionality
- Writing API documentation
- Handling authentication if needed
- Testing all endpoints
- Maintaining as schema evolves

**Conservative estimate:** 40-80 hours for basic CRUD API with search.

**Datasette provides all of this automatically:**
- REST API for every table (zero code)
- Pagination, filtering, sorting (built-in)
- Full-text search (if FTS5 indexes exist)
- Auto-generated documentation
- JSON/CSV exports (every endpoint)

**Time saved:** 40-80 hours. For a solo builder, that's 1-2 weeks of full-time work.

**The flexibility:** Datasette is unopinionated about schema. I design the database structure that makes sense for legal news, Datasette serves it.

### Why Datasette Instead of CKAN?

I have experience with CKAN as a librarian and data science enthusiast—it's excellent infrastructure. SMU might well choose CKAN for their legal database project, and for empirical legal research (case statistics, court data, demographic analysis), it would be the right choice.

But CKAN didn't fit legal news and legal documents. Here's why:

**CKAN is opinionated, Datasette is agnostic**

CKAN enforces a specific schema:
- Datasets (top-level containers)
- Resources (files attached to datasets)
- Organizations and groups
- Standardized metadata fields (title, publisher, license, format)
- Tags and categories

This schema is optimized for cataloging: "Here's a portal with 100 datasets. Browse metadata, filter by organization, download the CSV/shapefile you need."

Datasette is schema-agnostic:
- You design your database schema
- Datasette serves whatever tables/columns you create
- No prescribed structure
- You decide what makes sense for your data

**The use case mismatch**

CKAN's catalog model works brilliantly for:
- Crime statistics (CSV datasets)
- Geospatial court jurisdictions (shapefiles)
- Case outcome data (tabular datasets)
- Empirical research collections

Legal researchers browsing: "Which datasets cover employment law statistics? Download and analyze in R."

But legal news/documents need different access patterns:
- Full-text search within article content
- Find all mentions of specific statutes or cases
- Search across potentially millions of words
- Relevance ranking within documents

Legal researchers searching: "Find all articles mentioning 'unfair dismissal' in the last 6 months."

**Datasette's flexibility**

Because Datasette is agnostic, I could design the right schema:
- Tables for articles with full-text indexes (FTS5)
- Columns optimized for legal metadata (jurisdiction, category, publication date)
- Facets configured for how lawyers actually filter (by court level, legal area, date)

CKAN would force legal content into its dataset/resource model, which doesn't match how legal research works.

**The critical infrastructure difference**

CKAN is a live application with write operations:
- Users/admins POST data directly to production
- PostgreSQL database receives writes in real-time
- Data processing happens on the live server
- **If your cloud machine crashes during data upload or processing, you can corrupt your database**
- Requires robust infrastructure to handle concurrent writes safely
- Recovery means database backups and rollback procedures

Datasette + zeeker approach separates build from deployment:
- Build database locally or in GitHub Actions (safe, controlled environment)
- If build fails, retry—production unaffected
- Deploy finished SQLite file to S3 (atomic operation—succeeds or fails cleanly)
- Datasette is read-only in production (no write corruption risk)
- If deploy fails, previous version keeps serving
- **Cheap cloud instances work fine because production is just serving static files**

**For resource-constrained solo builders:** CKAN requires infrastructure that can safely handle live writes and data processing. If you're on a $5-10/month container that sometimes struggles, a crash during data upload can corrupt your database.

With Datasette, production is bulletproof—just serving a file. All the risky operations (scraping, data processing, database builds) happen elsewhere (locally, GitHub Actions). Deploy only when data is ready and validated.

**CKAN infrastructure requirements:**
- PostgreSQL + Solr + Redis + NGINX + supervisord
- Minimum 4GB RAM, multiple services
- Needs reliable infrastructure for safe writes
- Designed for institutional scale (hundreds of datasets, multiple organizations)
- **Right tool for institutions with proper infrastructure**

**Datasette infrastructure:**
- SQLite (whatever schema you design)
- Single service, read-only production
- Works fine on minimal infrastructure
- Build/process data anywhere, deploy finished product
- **Right tool for solo builders with budget constraints**

**Where each tool fits**

SMU building empirical legal database (court statistics, judgment outcomes, demographic analysis)? CKAN's catalog model and institutional credibility make sense. They'll have proper infrastructure.

Solo builder on a budget with unreliable cloud machines? Datasette's read-only production model means you can't corrupt production data no matter what happens.

**For data.zeeker.sg:** I can't afford robust infrastructure for safe live writes. Building locally, deploying static SQLite files means production is bulletproof even on cheap hosting. If something crashes, the worst case is a failed deploy—previous version keeps running.

This isn't about Datasette being "better"—it's about matching tool architecture to operational constraints. CKAN assumes institutional infrastructure. Datasette works even when your cloud machine sucks.

### Why Static Deployment?

**Traditional web application architecture:**
- Application server running 24/7
- Database server running 24/7
- Scrapers insert data into live database
- Users query live database
- Worry about concurrent access, caching, database load

**Data.zeeker.sg architecture:**
- Build SQLite file (locally or GitHub Actions)
- Deploy to S3 (static file hosting)
- Datasette reads from S3 (read-only)
- Scrapers never touch production

**Benefits of static deployment:**

1. **Atomic updates:** New database file replaces old one completely. Either the new version works, or the old version keeps serving. No partial updates, no corruption risk.

2. **Rollback for free:** S3 versioning keeps old database files. Issue with new data? Revert to previous version instantly.

3. **CDN-friendly:** Static files can be cached aggressively. Put CloudFlare in front for global distribution.

4. **Zero-downtime deploys:** Upload new file to S3, Datasette picks it up. No restart needed (or restart takes seconds).

5. **Disaster recovery:** Database is version-controlled in S3. Any failure? Redeploy from S3.

6. **Cheap scaling:** Serving static files is the cheapest compute pattern. Add more Datasette containers trivially—they all read the same file.

**The tradeoff:** No real-time user writes. For legal news (scrapers write, users read), this is perfect.

### Why This Architecture Enables Open Source Contribution

**The fundamental problem with monolithic data platforms:**

It's not just that traditional platforms are complex—it's that they're **monolithic**. Everyone's code lives in the same codebase.

**Monolithic contribution barriers:**

1. **Shared codebase conflicts:**
   - Your scraper code lives next to everyone else's scrapers
   - Merge conflicts when multiple people work simultaneously
   - Code review bottleneck (maintainer must review everything)

2. **Namespace collisions:**
   - Someone already named their function `parse_article()`
   - Can't use common variable names
   - Have to coordinate naming conventions

3. **Dependency hell:**
   - Your scraper needs `requests==2.31.0`
   - Someone else's scraper needs `requests==2.28.0`
   - Project uses one shared `requirements.txt`
   - Coordinate dependency upgrades across all contributors

4. **Testing interference:**
   - Your code might break someone else's tests
   - Can't merge until all tests pass
   - Even if your scraper works perfectly

5. **Deployment coordination:**
   - Can't deploy just your data source
   - Have to deploy the entire application
   - Your contribution is blocked by someone else's broken code
   - Release cycles and deployment windows

**Result:** Contributing means integrating into the monolith. High friction, slow feedback loops, maintainer bottleneck.

**The zeeker architecture: Isolated contribution**

Each contributor works in **complete isolation:**

```
# Contributor A's isolated project
legal_news_source/
├── pyproject.toml           # Their dependencies
├── resources/
│   └── articles.py          # Their code
└── legal_news_source.db     # Their output

# Contributor B's isolated project
court_decisions_source/
├── pyproject.toml           # Different dependencies, no conflict
├── resources/
│   └── decisions.py         # Their code
└── court_decisions.db       # Their output
```

**No code integration required:**

Contributors don't submit code to a shared repository. They submit:
- **A SQLite file** (the data)
- **Their project repository** (for transparency/reproducibility)

The main repository doesn't need to merge their code. It just needs to:
1. Download their `.db` file
2. Validate it (schema checks, data quality)
3. Deploy it to S3
4. Datasette automatically serves it

**Benefits of architectural isolation:**

1. **No merge conflicts:** Everyone works in separate projects
2. **No namespace collisions:** Your project, your names
3. **No dependency conflicts:** Each project has its own `pyproject.toml`
4. **No testing interference:** Your tests only test your code
5. **Independent deployment:** Deploy your database file without touching anyone else's
6. **Parallel development:** 10 contributors can work simultaneously without coordination

**The contribution workflow:**

```bash
# Contributor develops in isolation
git clone https://github.com/contributor/my-legal-source
cd my-legal-source
zeeker build
# Produces: my-legal-source.db

# Submit to main project
# Option 1: Send the .db file
# Option 2: Main project runs your build automatically (GitHub Actions)

# Main project deploys
aws s3 cp my-legal-source.db s3://bucket/latest/
# Datasette automatically serves the new database
# Zero code changes to production
```

**This is the architecture's killer feature for open source:**

It's not that "the CLI is simpler than PostgreSQL" (though it is). It's that the architecture **eliminates code integration entirely**. Contributors produce data files, not code to merge.

For open legal data infrastructure, this changes everything. A law student can contribute without being a software engineer. A lawyer can maintain their own data source without coordinating with other contributors.

The monolith is replaced by a constellation of independent data producers.

### Why This Architecture Works for Solo Builders

Putting it all together:

**Monthly cost breakdown:**
- S3 storage (1GB): $0.023
- S3 requests: $1-2
- Datasette hosting (single container): $5-10
- GitHub Actions (scrapers): Free tier
- **Total: $6-12/month**

**Developer time for new data sources:**
- With standardization (zeeker CLI): 2-4 hours per source
- Without standardization: 8-14 hours per source

**Maintenance burden:**
- Static deployment: Minimal (just monitor GitHub Actions)
- Traditional architecture: Significant (database backups, monitoring, security patches, scaling)

**Risk profile:**
- Static deployment: Production can't be corrupted (read-only)
- Traditional architecture: Database corruption risk, complex failure modes

**For passion projects with zero revenue:** This architecture is sustainable. Traditional architecture would burn me out on infrastructure maintenance alone.

---

## What Worked, What Didn't

### What Worked: Copy These

**SQLite FTS5 for full-text search:** Zero infrastructure. Fast enough for hundreds of thousands of documents. No Elasticsearch needed.

**Read-only production:** Datasette serves files, never writes. Cannot corrupt production. Simple rollback. For batch-updated data, this eliminates entire bug classes.

**Standardized resources:** One `fetch_data()` interface for all sources. First source: 150 hours. Second source: 2-4 hours. Standardization is force multiplication.

**S3 + static deployment:** SQLite file → S3 → Datasette. Atomic deploys, version history, cheap hosting ($0.02/month), CDN-friendly.

**Isolated contribution:** Each contributor works in separate projects, produces SQLite files. No merge conflicts, no dependency hell, no coordination needed.

**Architecture over effort:** These decisions reduce ongoing maintenance. Your limiting factor as a solo builder is time. Choose architectures that eliminate work.

### What Didn't Work: Avoid These

**Thinking monolithic instead of composable**

Early on, I considered building one integrated platform: custom scraper framework + custom database layer + custom API + custom frontend.

The mistake: "I need to build a complete legal data platform."

What I actually built: Composable pieces working together:
- Zeeker CLI (handles data production)
- SQLite (standard database format)
- S3 (standard file storage)
- Datasette (existing tool for serving databases)
- Standard web technologies (HTML/CSS/JS)

The lesson: Don't build what already exists. Think creatively about combining existing tools. Datasette already solves "API + web interface for SQLite"—why rebuild that? The CLI solves "standardize data production"—that's the novel part worth building.

For solo builders: Your competitive advantage isn't building everything yourself. It's creatively engineering solutions from composable pieces. Build only what's unique to your problem.

**Premature optimization - Multiple sources before validating one**

I designed the zeeker CLI to handle 40+ sources elegantly before proving anyone wanted even one source.

The mistake: "Build infrastructure that scales from day one."

What I should have done: Build one source. Announce it. See if anyone uses it. Then build source #2.

The lesson: Validate demand before optimizing for scale. One working, used source beats 40 sources nobody wants. Build for today, not for hypothetical future scale.

**Not thinking harder about where AI should help**

I spent 30-45 minutes per article on manual work:
- Reading articles
- Writing summaries
- Extracting metadata
- Categorizing topics

For 346 articles: **173-260 hours of manual curation**.

The mistake: "AI can't match human quality, so I'll do it manually."

What I should have done: AI-assisted workflow with human review:
- AI generates first-pass summary (2 minutes)
- AI extracts metadata (1 minute)
- Human reviews and corrects (5-10 minutes)
- Total: 10-15 minutes per article vs. 30-45 minutes

Same quality (human-reviewed), but 15-30 minutes saved per article. Over 346 articles: **100+ hours saved**.

The lesson: Don't ask "Can AI do this perfectly?" Ask "Can AI do 80% of this, letting me focus on the 20% that needs human judgment?" Use AI for the grunt work, humans for quality control.

**The pattern:** I optimized for things that didn't matter (building everything myself, scalability, perfect manual quality) and didn't optimize for what did matter (composing existing tools creatively, validating demand, reducing manual labor).

For solo builders: Think harder about where to spend your limited time. Compose, don't build everything. Use AI aggressively for repetitive work. Validate before scaling

---

## AI-Assisted Development: What Changed

I built data.zeeker.sg with extensive AI assistance. This wasn't revolutionary magic—it was a practical tool that changed what's feasible for a solo builder. Here's the honest assessment.

### What AI Handled Well

**Boilerplate and familiar patterns:** AI excels at code that follows established conventions. The zeeker CLI involved:
- Click command structure with argument parsing
- File operations (path handling, template rendering)
- S3 upload/download logic using boto3
- Schema validation patterns
- Error handling boilerplate

For these, AI generated 70-80% of working code. I reviewed, tested, refined.

**Test generation:** AI wrote tests alongside code. Not strict TDD (test-first), but tests came with the implementation. This kept quality high as code generated quickly.

**Complex but standard problems:** FTS5 setup, sqlite-utils integration, Datasette plugin hooks—AI knew these libraries better than I did. Generated working solutions on first or second try.

**Time impact:** Conservative estimate: AI reduced CLI development from 400-600 hours (traditional) to 150+ hours. That's 250-450 hours saved.

### What AI Enabled Architecturally

**Lower cost of experimentation:** Fast code generation meant I could try ambitious solutions without committing weeks of work.

**Example: CLI-first instead of incremental**

Traditional approach: Build one data source manually → copy-paste for source #2 → realize the pattern → refactor into CLI → migrate existing sources.

What I actually did: Jump straight to CLI that generates templates.

**Why this was feasible:** AI could generate:
- CLI command structure
- Template generation logic
- Resource scaffolding code
- Project initialization

Building this scaffolding manually would take weeks. With AI generating code fast, I could experiment: "What if I built the abstraction first?"

**The mindset shift:** Without AI, you ask "What's the minimum I need to build to validate this?" With AI, you can ask "What's the best architecture, even if it requires more scaffolding code?"

**More long-term planning becomes viable:** Because code generation is fast, you can build for the future without drowning in boilerplate. The CLI handles 40 sources even though I only built 1—that wasn't over-engineering, it was low-cost future-proofing.

**Caveat:** This only works if your architectural judgment is sound. AI makes it easy to build the wrong abstraction quickly. But if you know what good architecture looks like, AI removes the "but that's too much code to write" barrier.

### The Workflow That Made It Work

**Context preparation:**
- Convert codebase to markdown
- Load entire project into AI context
- Full codebase view helped AI understand the system architecture

**The tradeoff:** Full context = better suggestions, but frequently busted context limits. I had to start fresh conversations often, losing context continuity.

**The iteration loop:**
1. Describe what I needed
2. AI generates code + tests
3. I review and run tests
4. Fix issues, refine requirements
5. Repeat

**Tests as safety net:** AI-generated tests caught issues early. Code generated fast, tests kept it honest.

### Where Human Judgment Was Critical

**Architecture decisions:** AI suggested patterns, but I decided:
- Resource-based CLI structure
- SQLite as deployment artifact
- Read-only production model
- Isolated contribution architecture

AI explains tradeoffs. Humans choose based on constraints.

**Recognizing bad solutions:** AI sometimes hammers at problems in terrible ways. Example: AI might suggest complex state management when a simple rebuild works better. Or over-engineer error handling when failing fast is appropriate.

**You need engineer sense to recognize when AI is going down a bad path.** Tests help, but you need to see the whole picture. Ask: "Is this solving the right problem? Is this the simplest solution?"

**Domain understanding:** AI didn't know:
- What legal researchers need
- Whether lawyers can write SQL
- If the project has value
- How to prioritize features

Domain knowledge came from my legal background, not AI.

**Production debugging:** AI suggests generic fixes. Real issues require context:
- S3 permissions blocking Datasette
- FTS5 query syntax errors
- Schema conflicts from data changes

AI helps debug, but you need to understand the system.

### The Messy Reality

**Context limits:** Frequently hit. Solution: Start fresh conversations, rebuild context. Not ideal, but workable.

**Verification required:** AI makes mistakes. Every generated solution needs:
- Code review (does this make architectural sense?)
- Test verification (do tests actually cover edge cases?)
- Production testing (does it work with real data?)

**Not autopilot:** AI accelerates, doesn't replace judgment. You're still engineering, just faster.

**Where I should have used AI more:** Manual article curation (30-45 min/article). Should have been AI-first-pass → human-review (10-15 min/article). That mistake cost 100+ hours.

### What This Means for Solo Builders

**The change:** Infrastructure projects moved from "requires a team" to "feasible for one person with AI assistance."

**Not magic:** 150+ hours is still substantial. AI didn't make this trivial.

**Realistic equation:** AI handles boilerplate and familiar patterns. You handle architecture, domain knowledge, and quality judgment. Together: ambitious projects become feasible.

**Practical advice:** Use AI for code generation, but keep your engineer brain engaged. Tests help catch bugs. Your judgment catches bad architecture before it ships.

AI is a force multiplier on your effort, not a replacement for thinking.

---

## Conclusion

I built data.zeeker.sg to prove one person could create open legal data infrastructure. The technical lessons: it's feasible, but requires smart architectural choices.

**What worked:** SQLite + Datasette + standardization + AI assistance = sustainable solo infrastructure. Monthly cost: $6-12. Maintenance burden: minimal. Contribution barrier: low.

**What I'd do differently:** Use AI for curation from day one. Build one source, validate demand, then scale. Compose existing tools creatively instead of building everything.

**The bigger question remains:** Should I continue this project? In Part 1, I framed the decision: domain renewal arrives December, zero known users so far, institutions are also building legal data infrastructure.

The technical infrastructure works. The architecture is sound. But technical feasibility doesn't answer whether this should continue.

These lessons stand regardless: Solo builders in the AI era can build ambitious infrastructure. The architecture is proven. The question shifts from "can one person do this?" to "what should one person build?"

**Part 3 continues the series:** My decision about data.zeeker.sg's future, what I learned from exploring the institutional landscape, and what this means for solo builders when larger players enter your space.

---

**Update Log:**
- November 10, 2025: Complete draft with all three layers and supporting sections
