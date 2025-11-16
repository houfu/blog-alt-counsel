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

## Development Environment

This project runs in a containerized environment using Docker for consistency and isolation.

### Environment Variables

Always use environment variables when using the Ghost API: `GHOST_SITE_URL`, `GHOST_ADMIN_API_KEY`, `GHOST_API_VERSION`.
You can find them in the following places:
- As an environment variable
- Read the settings.json file

## Rich Content Elements for Ghost Blog Posts

When drafting articles for Ghost, consider incorporating these rich content elements to enhance readability and engagement:

### Basic Formatting
- **Headings** (h1-h6) - Structure content hierarchically
- **Paragraphs** - Standard text blocks with inline formatting (bold, italic, code)
- **Lists** - Bullet points and numbered lists for scannable content
- **Links** - Internal cross-references to other blog posts and external resources. Prefer bookmarks to inline links for key content and backlinks.

**IMPORTANT: NEVER use horizontal rules** (`---`, `***`, or `___`) **in final blog post content** (files that will be published to Ghost). These break the markdown to lexical conversion process. Use headings, spacing, or other formatting instead.

*Note: You CAN use horizontal rules as section dividers in draft/working documents (discussion.md, pitch.md, research.md, etc.) to organize content during the writing process.* 

### Rich Media
- **Images** - Screenshots, diagrams, illustrations with captions
- **Code Blocks** - Syntax-highlighted code examples (especially for technical posts about Python, JavaScript, legal tech implementations)

### Interactive Cards
- **Bookmark Cards** - Visually rich links to external articles, documentation, or resources
- **Toggle/Accordion** - Collapsible content for:
  - Table of Contents
  - FAQ sections
  - Optional deep-dive content
  - Long code examples or technical details

### When to Use Each Element

**Use Images when:**
- Showing UI/UX examples from legal tech tools
- Displaying data visualizations or charts
- Providing visual proof (screenshots of GitHub stats, tool outputs)
- Breaking up long text sections

**Use Code Blocks when:**
- Sharing implementation examples (Python, JavaScript, shell scripts)
- Showing configuration files or API responses
- Demonstrating command-line usage

**Use Bookmark Cards when:**
- Referencing external articles or documentation
- Linking to related blog posts with rich previews
- Citing sources with visual emphasis

**Use Toggles when:**
- Creating table of contents for long articles
- Hiding technical details that not all readers need
- Organizing FAQ sections
- Providing expandable code examples

**Place elements strategically:**
1. Images: After introducing concepts, before deep explanations
2. Code blocks: Within implementation sections, after explaining the concept
3. Bookmark cards: At article end for "Further Reading" or inline when citing key sources
4. Toggles: At article start (TOC), or hiding optional deep-dive content

## Task Management with TodoWrite

**CRITICAL: Use TodoWrite for ALL multi-step workflows, especially content creation.** This ensures quality checks are never skipped and progress is visible.

**Always create TodoWrite todos when:**
- Starting any blog post or newsletter workflow
- Beginning research or content quality work
- Working on tasks with 3+ steps
- Quality checks need to be tracked (content audit, legal review, etc.)

**Quality check todos are mandatory** - Include these in your todo list for content workflows:
- Content quality audit (using content-quality-auditor agent)
- Target audience review (using inhouse-lawyer-reviewer or legal-tech-blog-reviewer agent)
- Backlink curation
- Final proofreading before publishing

Mark todos as `in_progress` BEFORE starting work, and `completed` IMMEDIATELY after finishing. This keeps the user informed of progress.

## Skills Usage Policy

**CRITICAL: Always use skills when available for their intended purposes.** Do not wait for explicit user requests - proactively invoke the appropriate skill based on the task at hand.

Available skills and when to use them:
- **brainstorming** - Use at the START when ideas are vague or need refinement. Invoke automatically when user suggests a blog topic that needs development.
- **generate_a_pitch** - Use when creating a new post. Always invoke to create the pitch before drafting.
- **blog-research** - Use when fact-checking, gathering sources, finding statistics, or researching topics for posts.
- **note-taking** - Use throughout conversations to record progress and decisions in discussion.md files.
- **backlink_curating** - Use at final draft stage to find internal links to other blog posts.
- **getting-feedback** - Use when the user needs audience feedback on ideas or questions.
- **using-ghost-admin-api** - Use for all Ghost CMS operations (creating drafts, editing posts, accessing content).
- **searching_the_blog** - Use when questions involve past blog posts or content.

Do NOT ask "Would you like me to use the X skill?" - Just use it. The skills are designed to be invoked automatically as part of the natural workflow.

## Common Development Workflows

### 1. Create a new post

**Core phases: PITCH → WRITE → REVIEW → POST → CHECK**

1. **PITCH** - Define scope and direction (use `generate_a_pitch` skill)
2. **WRITE** - Draft the content
3. **REVIEW** - Quality checks and refinement:
   - Content quality audit (content-quality-auditor agent)
   - Target audience review (inhouse-lawyer-reviewer or legal-tech-blog-reviewer agent)
   - Backlink curation (backlink_curating skill)
4. **POST** - Publish to Ghost (use `using-ghost-admin-api` skill)
5. **CHECK** - Verify published post and sync repo (use `using-ghost-admin-api` skill)

**Throughout the process (use as needed):**
- **BRAINSTORM** (use `brainstorming` skill) - Refine pitch, overcome writer's block on difficult sections, develop structure
- **RESEARCH** (use `blog-research` skill) - Gather sources, facts, statistics (can happen before pitch, after pitch, or when outline is clear)

**Always:**
- Create TodoWrite todos at the start to track each phase
- Use `note-taking` skill to update discussion.md throughout the process
- Mark todos completed immediately after each step