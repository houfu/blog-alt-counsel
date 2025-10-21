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

## Common Development Workflows

### 1. Create a new post

1. I will tell you that we should write a blog post or newsletter article. I might give you a brief or detailed idea I have.
2. Let us create a pitch based on my ideas, with additional brainstorming and feedback as required.
3. We will write a pitch and save it in a new folder in the '/posts/' folder.
4. Based on the pitch, we will draft an outline of the post.
5. We will work on the outline, either with you or by myself. We may research and refine the pitch and outline.
6. Once the post is completed, we will post it as a draft on my Ghost blog.

Always create TodoWrite todos for checklists so we can track our progress.

After each conversation, always update the 'discussion.md' of the post to record our progress.