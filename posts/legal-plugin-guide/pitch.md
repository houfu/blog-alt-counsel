# Making Claude's Legal Plugin Actually Yours

## Pitch

Thomson Reuters dropped 16% the day Anthropic released its legal plugin. Legal tech Twitter split into doomsayers and dismissers. I spent the weekend actually using it. Here's what no one's talking about: the plugin is open source, which means you can look inside, modify it, and make it work for *your* jurisdiction. The `/respond` command ships with templates for DSARs and legal holds—but they're US/EU-centric. For a Singapore practitioner, that's a starting point, not a solution. This guide walks through creating your first custom template: a PDPA-specific data subject request response. No coding required—just markdown files you can read and edit. By the end, you'll understand how the plugin actually works, have something immediately useful, and see how to expand it for your practice. The real power of open source isn't free software. It's software you can make your own.

## Metadata

- **Type**: Blog post
- **Estimated reading time**: 7-9 minutes
- **Target audience**: Solo counsels, small legal teams, resource-constrained in-house lawyers

## Suggested Tags

1. **LegalTech** - Core topic (legal technology application)
2. **OpenSource** - Key theme (customization and transparency)
3. **PDPA** - Practice area (Singapore-specific template example)
4. **Tutorial** - Content type (step-by-step guide)

## Research Completed

- Claude Cowork launched January 12, 2026
- Legal plugin released February 2, 2026 (caused 16% Thomson Reuters drop)
- Plugin is open source on GitHub: anthropics/knowledge-work-plugins
- Key commands: /review-contract, /triage-nda, /vendor-check, /brief, /respond
- Existing guides are mostly high-level overviews; none focus on customization

## Authenticity Check

- [x] Based on actual use over the weekend
- [x] Singapore/PDPA angle is genuinely my context
- [x] "No coding required" is true—it's markdown files
- [x] Not claiming expertise in the plugin—learning in public

## Outline (Draft)

1. **Opening**: Market reaction + personal weekend experience
2. **What the plugin actually is**: Quick overview, dispel misconceptions
3. **The `/respond` command**: What it does, what templates it ships with
4. **Looking inside**: File structure, how templates work (markdown)
5. **Creating a PDPA DSAR template**: Step-by-step walkthrough
6. **What you can do next**: Ideas for expansion
7. **Closing**: The real value of open source for legal practitioners
