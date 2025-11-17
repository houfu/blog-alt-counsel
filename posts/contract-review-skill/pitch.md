# Building a Contract Review Skill for Claude Code: A Builder's Journal

## Pitch

A tutorial series documenting my journey building a contract review skill for Claude Code, written for lawyers who code. Rather than a polished "10 steps to mastery" guide, this is a real-time exploration of what Claude Code skills can do and how they work. Each post captures a development session - the experiments, the discoveries, the roadblocks, and the patterns that emerge. Through the lens of building a practical contract review assistant, readers will see concepts like progressive disclosure, file organization, token economics, and architecture patterns in action. The goal isn't to create production-ready legal tech, but to show lawyers how Skills provide a fundamentally different model for legal workflows - one that's portable, cost-efficient, and owned by you instead of enterprise vendors. The series is open-ended - I'll write as I build, and we'll discover the patterns together.

## Format

Build-in-public journal entries, published as I make progress on the skill.

## Target Audience

Lawyers who code - legal professionals with some programming experience who want to extend Claude Code for their practice. Particularly relevant for Singapore/ASEAN solo counsels and small teams seeking alternatives to expensive enterprise legal tech.

## Core Skill Focus

Contract Review Assistant that incorporates different patterns/activities as building blocks:
- Basic skill setup and file reading
- Contract analysis and information extraction (parties, dates, key terms)
- Checklist generation based on contract type
- Jurisdiction-specific logic (Singapore PDPA, governing law clauses)
- Web research integration
- File organization patterns (scripts/ vs references/ vs assets/)
- Token economics and cost measurement

## Approach

Document the actual development process, then collaboratively extract concepts and patterns during the writing phase. The technical depth is conceptual with examples - showing "what's possible" rather than deep debugging tutorials. Explore not just "how to build" but "why Skills work this way" - the two-message architecture, progressive disclosure, and why this model fits legal workflows better than traditional enterprise systems. Be honest about limitations (hallucinations, human oversight requirements) alongside capabilities.
