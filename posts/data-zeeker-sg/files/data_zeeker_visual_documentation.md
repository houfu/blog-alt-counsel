# data.zeeker.sg - Visual Documentation

Since screenshots are having rendering issues, this document provides detailed descriptions of what each page looks like, along with actual content captured.

---

## Homepage (https://data.zeeker.sg)

### Layout & Design
- Clean, minimal design with a professional appearance
- Supreme Court of Singapore image at the top
- Clear navigation menu: Home | Search All | How to Use | About
- White background with blue/professional color scheme
- Centered content with good readability

### Header Section
```
data.zeeker.sg
Explore Singapore legal data through search and SQL queries
```

### Main Content Areas

**Available Data Section**
- Title: "What's Here"
- Description: "Currently focusing on legal news data, with court decisions being added soon. All data is searchable and available through a full SQL interface."

**How to Use Section**
Four key features highlighted with icons:
- 🔍 Search - Full-text search across all legal documents
- 💻 SQL Queries - Write custom queries against the database
- 📊 Export Data - Download results as JSON or CSV
- ⚡ Updated Regularly - Data refreshes automatically

**For Developers Section**
- Title: "🔌 For Developers"
- Description: "Full REST API access to all data. Perfect for building tools or conducting research."

**Quick Examples Code Block:**
```bash
# Get all databases
curl https://data.zeeker.sg/.json

# Search all data
curl "https://data.zeeker.sg/-/search.json?q=contract+law"

# Custom SQL query
curl "https://data.zeeker.sg/[database]?sql=SELECT * FROM [table] LIMIT 10"
```

### Footer
- Links: Home | How to Use | About | Data Sources | Status
- License: CC-BY-4.0
- Copyright: © 2025 Zeeker - Singapore Legal Data Backbone
- Tagline: "Professional access to legal data for research, analysis, and AI applications"

---

## Database Page (https://data.zeeker.sg/sglawwatch)

### Page Structure
- Breadcrumb navigation: 🏠 Home → Sglawwatch
- Database name prominently displayed
- Export buttons: 📊 JSON | 📈 CSV | 🔍 Schema

### Database Statistics
- **6 tables** in the database
- **6,562 total rows** across all tables
- Data license clearly stated: CC-BY-4.0

### Available Tables Listed

1. **About_singapore_law** (40 records)
   - Columns: id, item_url, title, section, home_page, last_scraped, content_length
   - Actions: Explore | JSON | CSV

2. **About_singapore_law_fragments** (2,457 records)
   - Columns: id, item_id, fragment_order, content_text, char_count
   - Full-text search enabled
   - Actions: Explore | JSON | CSV

3. **Headlines** (346 records)
   - Columns: id, category, title, source_link, author, date, summary, text, imported_on
   - Full-text search enabled
   - Primary key: id
   - Actions: Explore | JSON | CSV

4. **Metadata** 
   - System metadata table
   - Actions: Explore | JSON | CSV

5. **Schema_versions** (2 records)
   - Columns: table_name, version, updated_at
   - Version tracking for database schema
   - Actions: Explore | JSON | CSV

6. **Temp_headlines** (3,716 records)
   - Working/staging table for headlines
   - Similar structure to main headlines table
   - Actions: Explore | JSON | CSV

### Example SQL Queries Shown
- View schema: `SELECT name, sql FROM sqlite_master WHERE type='table' ORDER BY name`
- Sample data: `SELECT * FROM "about_singapore_law" LIMIT 10`
- Record counts: `SELECT 'about_singapore_law' as table_name, COUNT(*) as record_count FROM "about_singapore_law" UNION ALL ...`

---

## Headlines Table View (https://data.zeeker.sg/sglawwatch/headlines)

### Page Header
- Title: "Headlines Table"
- Subtitle: "Professional access to headlines data from the sglawwatch database"
- Statistics badge: **346 total rows | 9 columns | 🔍 searchable**
- Export options: 📊 JSON | 📈 CSV | 💻 SQL

### Table Features
- Advanced search interface with dropdown filters:
  - Column selection (id, category, title, source_link, author, date, summary, text, imported_on)
  - Operator selection (=, !=, contains, ends with, starts with, >, ≥, <, ≤, like, not like, glob, in, not in, array contains, date, is null, is not null, is blank, is not blank)
  - Value input field
- "✎ View and edit SQL" button
- Suggested facets: category, date (date), imported_on (date)

### Sample Data Displayed

**Record 1:**
- **ID:** 00f0de68245a78cce60988464c398bb8
- **Title:** New Bill sets out formal process for workers to file workplace discrimination claims
- **Category:** Straits Times
- **Author:** Straits Times: Tay Hong Yi
- **Date:** 2025-10-15T00:01:00
- **Source:** https://www.singaporelawwatch.sg/Headlines/...
- **Summary:** "The Workplace Fairness (Dispute Resolution) Bill creates a mediation‑first, judge‑led adjudication pathway for discrimination claims—escalating unresolved matters to Employment Claims Tribunals (ECT) for claims up to $250,000..."

**Record 2:**
- **ID:** 01c81b032e879fed817153907628adba
- **Title:** Judge gives green light for S$810 million Thomson View en bloc sale
- **Category:** Business Times
- **Author:** Business Times: Jessie Lim
- **Date:** 2025-07-02T00:01:00
- **Summary:** "This article covers the High Court's approval of the S$810 million collective sale of Thomson View condominium, overcoming earlier legal hurdles..."

[Additional records follow similar pattern]

### Visual Design
- Clean table layout with alternating row colors for readability
- Each record is a card-style display with clear field labels
- Clickable links to source articles
- Timestamps in ISO 8601 format
- Professional typography and spacing

---

## SQL Query Interface (https://data.zeeker.sg/sglawwatch?sql=...)

### Interface Features
- Large text editor for SQL queries
- "Format SQL" button for query prettification
- Export options: "This data as json, CSV"
- Query execution is immediate (no submit button needed)

### Example Query Shown
```sql
SELECT * FROM headlines LIMIT 5
```

### Results Display
- Shows "Custom SQL query returning 5 rows (hide)"
- Results in clean table format with all columns visible
- Horizontal scrolling for wide tables
- Data displayed with proper formatting:
  - IDs shown in full
  - Dates in ISO format
  - Text fields properly wrapped
  - HTML entities properly escaped

### Sample Results Table Headers
```
id | category | title | source_link | author | date | summary | text | imported_on
```

### Example Row Data
```
id: a7e41923d1fee554a4a501e15d6ec785
category: Business Times
title: Ong Beng Seng given leave to go to Europe and US for medical and work purposes
source_link: https://www.singaporelawwatch.sg/Headlines/...
author: Business Times: Jessie Lim
date: 2025-04-25T00:01:00
summary: [Full professional summary]
text: [Complete article text]
imported_on: 2025-05-15T16:07:17.430568
```

### SQL Examples Section
Pre-built example queries with "🔗 Try This Query" buttons:
- View all tables and structure
- Count records in each table
- Sample data queries
- Custom query templates

---

## About Page (https://data.zeeker.sg/about)

### Page Title
"About Zeeker"
"Making Singapore legal data searchable and accessible to researchers and developers"

### Sections

**🎯 What This Is**
"Zeeker is a searchable database of Singapore legal information. Currently focused on legal news, with court decisions being added soon. Built for legal researchers, developers, and anyone who needs to search through Singapore legal data efficiently. All data is available through both a web interface and REST API."

**🛠️ What You Can Do**
Four capabilities listed with icons:
- 🔍 Full-Text Search: "Search across all legal documents with filtering and faceted navigation."
- 💻 SQL Interface: "Write custom SQL queries to analyze the data however you need."
- 📊 Export Data: "Download search results or query outputs as JSON, CSV, or SQLite files."
- 🔄 REST API: "Programmatic access to all data for building tools or conducting research."

**🔧 How It Works**
"Built on Datasette, an open-source tool for exploring and publishing data. Data is stored in SQLite databases and automatically updated from various sources."

**💼 Who Uses This**
Two primary user personas:

*👨‍💼 Legal Researchers*
- Track legal developments and trends
- Search for case references and precedents
- Analyze judicial patterns over time
- Export data for further analysis

*💻 Developers*
- Build legal technology applications
- Create monitoring and alert systems
- Integrate legal data into other tools
- Develop research and analysis workflows

**🚀 Get Started**
"Ready to explore Singapore legal data? Start with a search or dive into the SQL interface."
- Buttons: 🏠 Explore Data | 📊 API Documentation | 📋 Data Sources

### Visual Style
- Clean, modern design
- Icons used effectively to break up text
- Blue accent colors for links and buttons
- Good use of whitespace
- Professional but approachable tone

---

## Search Interface (https://data.zeeker.sg/-/search)

### Page Layout
- Simple, focused design
- Large search box prominently displayed
- "Search all tables" heading
- Minimal distractions

### Search Features (from JSON API)
- Full-text search across all indexed tables
- Returns results with relevance scoring
- Highlights matching text
- Shows which table each result is from
- Links to full records

---

## JSON API Response Examples

### Database List (/.json)
```json
{
  "sglawwatch": {
    "name": "sglawwatch",
    "hash": "187b6c1512ef4b1c4defc372ba9a4eeb0eeb0b706e8f65487faa1d17d8d9e363",
    "color": "187b6c",
    "path": "/sglawwatch",
    "tables_count": 6,
    "table_rows_sum": 6562,
    "show_table_row_counts": true,
    "hidden_table_rows_sum": 6164,
    "hidden_tables_count": 17,
    "views_count": 0,
    "private": false
  }
}
```

### Headlines Sample Data
```json
{
  "id": "c3bcd11af34088b1813b6ba5b5f13bf3",
  "category": "Straits Times",
  "title": "Chief Justice allows founder of site that ran fake KKH story to be called to the Bar",
  "source_link": "https://www.singaporelawwatch.sg/Headlines/...",
  "author": "Straits Times: Selina Lum",
  "date": "2025-08-09T00:01:00",
  "summary": "Chief Justice Menon allowed Wake Up Singapore founder Ariffin Sha to be called to the Bar despite an $8,000 criminal defamation conviction, finding the offence involved negligent failure to verify a fabricated KKH story rather than dishonesty...",
  "text": "Title: Chief Justice allows founder of site that ran fake KKH story to be called to the Bar\n\nURL Source: https://www.singaporelawwatch.sg/Headlines/..."
}
```

---

## Color Scheme & Branding

### Colors Used
- **Primary:** Professional blue (#187b6c based on database hash)
- **Background:** Clean white (#ffffff)
- **Text:** Dark gray/black for readability
- **Accents:** Blue for links and interactive elements
- **Borders:** Light gray for table borders and separators

### Typography
- Clean, modern sans-serif fonts
- Good hierarchy with clear headings
- Monospace fonts for code examples
- Readable body text size (likely 16px)

### Icons & Visual Elements
- Emoji icons used consistently (🔍 🏠 📊 💻 ⚡ etc.)
- Singapore Supreme Court building image on homepage
- Minimal use of images - focus on content
- Professional, data-focused aesthetic

---

## Mobile Responsiveness
- Layout adapts to smaller screens
- Navigation menu likely collapses on mobile
- Tables become horizontally scrollable
- Touch-friendly buttons and links

---

## Technical Details Visible

### URL Structure
- Clean, RESTful URLs
- `.json` suffix for API endpoints
- `.csv` suffix for CSV exports
- SQL queries in URL parameters
- Consistent naming conventions

### Performance
- Fast page loads
- Efficient database queries
- Proper indexing on searchable fields
- Cloudflare CDN for global delivery

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Descriptive link text
- Keyboard-navigable interface
- Good color contrast

---

## Key Differentiators

1. **Completely Open Access** - No login, no paywall, no API keys
2. **Multiple Interfaces** - Web UI, SQL editor, REST API
3. **Multiple Formats** - JSON, CSV, SQLite downloads
4. **Professional Summaries** - Not just raw data, but curated insights
5. **Developer-Friendly** - Well-documented, predictable API structure
6. **Permissive Licensing** - CC-BY-4.0 allows commercial use and AI training
7. **Singapore-Focused** - Fills a specific gap in the market
8. **Built on Open Source** - Datasette is transparent and widely trusted

---

## User Experience Highlights

- **Discoverability:** Easy to understand what data is available
- **Flexibility:** Multiple ways to access the same data
- **Transparency:** Clear data sources and licensing
- **Performance:** Fast queries and page loads
- **Documentation:** Good examples and instructions
- **Professional:** Design and content quality suitable for legal profession

---

This visual documentation captures the key elements of data.zeeker.sg as observed through browsing and API exploration. The site represents a professional, well-executed approach to making Singapore legal data accessible and useful.
