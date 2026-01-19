# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is Ang Hou Fu's personal website (alt-counsel.ghost.io), a ghost-based blog and newsletter focused on legal technology, programming, and personal projects.

### Blog Mission & Content Strategy
alt-counsel.com offers **alternative perspectives on legal technology and practice** specifically for solo counsels, small legal teams, and resource-constrained legal departments. Unlike typical legal tech content that assumes enterprise budgets and large teams, this blog focuses on:

- **Practical solutions for real constraints** - $50 solutions that replace $50K systems
- **Resource-conscious implementations** - Tools and workflows that work with limited budgets and time
- **Singapore/ASEAN legal context** - Regional insights with global applicability  
- **Builder-friendly content** - Serving both legal professionals and technical folks building legal solutions
- **Honest assessments** - What actually works vs. what's marketed to work

**Target Audience**: Solo counsels, small legal teams, in-house lawyers working with limited resources, and builders creating legal tech solutions.

**Brand Position**: "The Solo Counsel's Tech Strategist" - practical problem-solver who helps resource-constrained legal departments leverage technology for real impact.

## Directory Structure
- `/temp/` - Temporary folder
- '/posts/' - Place to store posts and work in progress
  - '{post-short-title}' - Each post is stored in its own folder using a short memorable title
    - '{post-title}.md' - This file contains the content of the post and some metadata
    - 'discussion.md' - This file stores the memories of claude involved in writing the post
    - 'pitch.md' - This file stores the pitch of the post used to create the post.
    - It also contains images, research documents and others relating to this post. 
- `/docs/` - Documentation for advanced Ghost workflows
  - `/docs/ghost-admin-api.md` - Ghost Admin API reference
  - `/docs/ghost-cards-reference.md` - Ghost cards for rich media reference
- `/.claude/` - Claude Code agents, skills and configuration
- `/node_modules/` - Node.js dependencies (ignored by git)

## Post Structure and Metadata

Each blog post markdown file includes YAML frontmatter with metadata fields:

```yaml
---
title: "Post Title"
slug: "url-slug"
tags: ["tag1", "tag2", "tag3"]
status: draft
featured: false
github_folder: "post-folder-name"  # Optional: folder name in /posts/ directory
---
```

### GitHub Integration

Posts can link to their source folder in the GitHub repository by adding the `github_folder` field to frontmatter. When this field is present, a GitHub footer section is automatically added when publishing the post with:

- Visual separator (horizontal rule)
- "View on GitHub" heading
- Explanatory text about open source content
- Rich bookmark card linking to the GitHub folder

**Example:**
```yaml
---
title: "My Post About Legal Tech"
github_folder: "prompt-engineering-wrong"
---
```

This will add a footer linking to:
`https://github.com/houfu/blog-alt-counsel/tree/main/posts/prompt-engineering-wrong`

**Note:** The `github_folder` field should contain only the folder name, not the full path.

## Development Environment

This project runs in a containerized environment using Docker for consistency and isolation.

### Environment Variables

Always use environment variables when using the Ghost API: `GHOST_SITE_URL`, `GHOST_ADMIN_API_KEY`, `GHOST_API_VERSION`.
You can find them in the following places:
- As an environment variable
- Read the settings.json file


## GitHub CLI Integration

The container includes GitHub CLI (\`gh\`) pre-installed and auto-configured:

### Available Aliases
- \`gh-status\` - Check GitHub authentication status
- \`gh-login\` - Interactive GitHub login
- \`gh-repo\` - View current repository information
- \`gh-pr-create\` - Create pull requests
- \`gh-issue-list\` - List repository issues

### Authentication
GitHub CLI is automatically configured using existing \`GITHUB_USERNAME\` and \`GITHUB_PAT\` environment variables. Manual login is also supported via \`gh auth login\`.



**Critical rules:**
- **NEVER use horizontal rules** (`---`, `***`, or `___`) in final blog post content (files that will be published to Ghost). These break the markdown to lexical conversion process. Use headings or spacing instead.
  - *Note: You CAN use horizontal rules in draft/working documents (discussion.md, pitch.md, research.md) to organize content during writing.*
- **Prefer bookmark cards over inline links** for key content and backlinks - they provide richer previews and visual emphasis.

**Available Ghost elements:** Images, code blocks, bookmark cards, toggles/accordions. See `docs/ghost-cards-reference.md` for detailed usage.

## Task Management with TodoWrite

**CRITICAL: Use TodoWrite for ALL multi-step workflows, especially content creation.** This ensures quality checks are never skipped and progress is visible.

**Always create TodoWrite todos when:**
- Starting any blog post or newsletter workflow
- Beginning research or content quality work
- Working on tasks with 3+ steps
- Quality checks need to be tracked (content audit, legal review, etc.)

**Quality check todos are mandatory** - Include these in your todo list for content workflows:
- Content quality audit (using content-quality-auditor agent)
- Target audience review (using inhouse-lawyer-reviewer, legal-tech-blog-reviewer, or lawyer-coder-reviewer agent, or /feedback command for all three)
- Backlink curation
- Final proofreading before publishing

Mark todos as `in_progress` BEFORE starting work, and `completed` IMMEDIATELY after finishing. This keeps the user informed of progress.

## Skills Usage Policy

**CRITICAL: Always use skills when available for their intended purposes.** Do not wait for explicit user requests - proactively invoke the appropriate skill based on the task at hand.

Available skills and when to use them:
- **brainstorming** - Use at the START when ideas are vague or need refinement. Invoke automatically when user suggests a blog topic that needs development.
- **generate_a_pitch** - Use when creating a new post. Always invoke to create the pitch before drafting.
- **tag-registry** - Use when suggesting tags for posts (during pitch or before publishing). Ensures tags are consistent with the canonical registry and prevents tag sprawl.
- **blog-research** - Use when fact-checking, gathering sources, finding statistics, or researching topics for posts.
- **note-taking** - Use throughout conversations to record progress and decisions in discussion.md files.
- **backlink_curating** - Use at final draft stage to find internal links to other blog posts.
- **getting-feedback** - Use when the user needs audience feedback on ideas or questions.
- **using-ghost-admin-api** - Use for all Ghost CMS operations (creating drafts, editing posts, accessing content).
- **searching_the_blog** - Use when questions involve past blog posts or content.

Do NOT ask "Would you like me to use the X skill?" - Just use it. The skills are designed to be invoked automatically as part of the natural workflow.

## Before Working on Posts

**CRITICAL: Always read discussion.md before working on any post-related task.** This ensures context awareness and prevents repetition across series posts.

**Pre-work checklist:**
- [ ] Read the post's `discussion.md` file (at least the last 2-3 sessions)
- [ ] For series work: Read all previously published parts
- [ ] Check what's already established in previous posts
- [ ] Identify what can be referenced vs. what needs re-explaining

**When to read discussion.md:**
- Before drafting new content
- Before making revisions
- Before adding to a series
- Before publishing to Ghost
- Before any substantial work on the post

**Why this matters:**
For series posts, each part should build on previous parts, not repeat them. Reading discussion.md helps you understand what's already been covered and maintain a holistic view across the entire series.

## Audience Reviewers Guide

The blog serves three overlapping but distinct audience segments:

### 1. Legal Tech Blog Reviewer
**Persona**: Seasoned legal technologist (10+ years, JD + significant programming)
**Use for**: Technical implementations, open source projects, honest post-mortems
**Key values**: Technical depth, community knowledge sharing, authenticity

### 2. Corporate Lawyer Reviewer (Sarah Chen)
**Persona**: Solo corporate lawyer at 150-person manufacturing company ($150/month budget)
**Use for**: Tool evaluations, budget-conscious solutions, pragmatic workflows
**Key values**: Affordability, realistic time estimates, practical relevance

### 3. Lawyer-Coder Reviewer
**Persona**: Senior Legal Counsel at Series B fintech (lawyer who codes, 5-10 hours/week side projects)
**Use for**: Personal project struggles, learning journeys, build vs. buy decisions, identity questions
**Key values**: Vulnerability, specificity, "I'm not alone" validation, frameworks for decision-making

**Full persona details**: `/docs/personas/wei-lin-persona.md`

### When to Use Each Reviewer

**Use individual reviewers** when content clearly targets one segment:
- **legal-tech-blog-reviewer**: "How I built an open source legal document parser"
- **corporate-lawyer-reviewer**: "Evaluating contract management tools under $200/month"
- **lawyer-coder-reviewer**: "Why I abandoned my side project after 150 hours"

**Use /feedback command (all three)** when:
- Content has broad appeal across segments
- You want comprehensive triangulated feedback
- Unsure which audience will resonate most

### Key Distinctions

**Technical Capability:**
- Legal Tech Reviewer: Seasoned practitioner, wants deep implementation details
- Sarah Chen: Non-technical, needs explanations for assumptions
- Lawyer-Coder: Self-taught coder, questions execution not capability

**Emotional State:**
- Legal Tech Reviewer: Confident veteran, values honest failures
- Sarah Chen: Pragmatic skeptic, values solutions that work
- Lawyer-Coder: Imposter syndrome, isolation, validation-seeking, guilt about unfinished projects

**Content Preferences:**
- Legal Tech Reviewer: Code, architecture, open source
- Sarah Chen: Affordability, practical steps, backup plans
- Lawyer-Coder: Vulnerability, specific numbers, constraint acknowledgment, decision frameworks

## Common Development Workflows

### 1. Create a new post

**Core phases: PITCH → WRITE → REVIEW → POST → CHECK**

1. **PITCH** - Define scope and direction (use `generate_a_pitch` skill)
   - Tags are suggested during pitch using `tag-registry` skill
2. **WRITE** - Draft the content
3. **REVIEW** - Quality checks and refinement:
   - Content quality audit (content-quality-auditor agent)
   - Target audience review (inhouse-lawyer-reviewer, legal-tech-blog-reviewer, or lawyer-coder-reviewer agent, or /feedback command for all three)
   - Backlink curation (backlink_curating skill)
   - Tag validation (use `tag-registry` skill to verify tags before publishing)
4. **POST** - Publish to Ghost (use `using-ghost-admin-api` skill)
5. **CHECK** - Verify published post and sync repo (use `using-ghost-admin-api` skill)

**Throughout the process (use as needed):**
- **BRAINSTORM** (use `brainstorming` skill) - Refine pitch, overcome writer's block on difficult sections, develop structure
- **RESEARCH** (use `blog-research` skill) - Gather sources, facts, statistics (can happen before pitch, after pitch, or when outline is clear)

**Always:**
- Create TodoWrite todos at the start to track each phase
- Use `note-taking` skill to update discussion.md throughout the process
- Mark todos completed immediately after each step
