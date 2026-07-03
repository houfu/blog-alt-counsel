# Year in Review 2025: October 3 Changed Everything

Data-driven analysis of how AI coverage shifted from adoption to accountability in Singapore legal news.

## Folder Structure

```
year-in-review-2025/
├── README.md                   # This file
├── draft.md                    # Main blog post draft
├── pitch.md                    # Original pitch
├── discussion.md               # Planning and decision notes
│
├── data/                       # Query results and analysis data
│   ├── sglawwatch_2025_analysis.docx   # Initial Opus analysis
│   ├── sglawwatch_query1.csv           # Initial narrow search (13 articles)
│   ├── sglawwatch_query1a.csv          # Expanded search (27 articles)
│   ├── sglawwatch_query2.csv           # Full article summaries
│   └── sglawwatch_query4.csv           # Keyword frequency timeline
│
├── images/                     # Visualizations and charts
│   ├── sglawwatch_analysis.png         # Initial data overview
│   ├── sglawwatch_full_2025.png        # Full analysis charts
│   └── keyword_timeline_chart.png      # Final hook graphic (generated)
│
├── scripts/                    # Analysis and generation scripts
│   ├── generate_chart.py               # Chart generation (uv run)
│   ├── keyword_timeline_preview.html   # Interactive chart preview
│   └── verification-queries.sql        # SQL query evolution
│
└── research/                   # Working documents and analysis
    ├── data-verified-findings.md       # Verified analysis findings
    ├── feedback-context.md             # Reviewer feedback
    ├── findings-timeline.md            # Article timeline analysis
    └── gap-analysis.md                 # Data gaps identified
```

## Quick Start

### Generate the chart
```bash
cd scripts
uv run generate_chart.py
```

### Key Files

- **draft.md** - The complete blog post (3,000 words)
- **images/keyword_timeline_chart.png** - Main visualization showing the Oct 3 inflection point
- **scripts/verification-queries.sql** - Documents the analytical journey (4 iterations)

## Key Finding

**October 3, 2025 changed everything:**
- Before: 89% of AI articles focused on adoption
- After: 82% emphasized accountability
- Trigger: $800 fine for AI hallucination
- Result: 395% increase in accountability keywords

## Data Sources

- **Database:** data.zeeker.sg
- **Articles analyzed:** 27 AI/legal tech articles (Apr-Dec 2025)
- **Methodology:** SQL queries + manual classification + keyword frequency analysis

## Next Steps

1. Get actual article URLs from data.zeeker.sg
2. Run content quality audit
3. Curate backlinks to related posts
4. Publish to Ghost
