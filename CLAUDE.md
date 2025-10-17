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
- `/.claude/` - Claude Code agents and configuration
- `/skills/` - Skills documents
- `/node_modules/` - Node.js dependencies (ignored by git)

## Development Environment

This project runs in a containerized environment using Docker for consistency and isolation.

### Environment Variables

Always use environment variables when using the Ghost API: `GHOST_SITE_URL`, `GHOST_ADMIN_API_KEY`, `GHOST_API_VERSION`.
You can find them in the following places:
- As an environment variable
- Read the settings.json file

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

### 2. Post to Ghost

When posting to Ghost, use the lexical format for content. Ghost's modern editor uses lexical JSON format rather than mobiledoc.

#### Recommended: Using the Post Creation Script

```bash
# Interactive post creation (easiest)
npm run create-post -- --interactive

# Quick post creation
npm run create-post -- --title "My Post" --content "Hello world" --publish

# From markdown file
npm run create-post -- --file post.md --tags "tech,legal" --featured

# Using templates
npm run create-post -- --template newsletter --title "Weekly Update"
npm run create-post -- --template tech --title "API Guide"

# Create draft
npm run create-post -- --title "Draft Post" --content "Work in progress..." --draft
```

#### Enhanced Markdown Features

The post creation script now supports comprehensive markdown formatting and Ghost's powerful card system:

**Text Formatting:**
- **Bold**: `**text**` or `__text__`
- *Italic*: `*text*` or `_text_`
- `Inline code`: `` `code` ``
- [Links]: `[link text](https://url.com)`

**Structural Elements:**
- Headings: `# H1` through `###### H6`
- Lists: `- item` (unordered) or `1. item` (ordered)
- Blockquotes: `> quote text`
- Code blocks: `` ```language `` (auto-converted to Ghost code cards)
- Horizontal rules: `---` or `***`

**Ghost Cards (HTML Comments):**
```markdown
<!--kg-card-begin: callout-->
{"calloutEmoji": "💡", "calloutText": "Important tip or information"}
<!--kg-card-end: callout-->

<!--kg-card-begin: toggle-->
{"toggleHeading": "FAQ Question", "toggleContent": "<p>Detailed answer with <strong>HTML formatting</strong></p>"}
<!--kg-card-end: toggle-->

<!--kg-card-begin: bookmark-->
{"url": "https://example.com", "title": "Page Title", "description": "Brief description"}
<!--kg-card-end: bookmark-->
```

**Usage Examples:**

```markdown
# Technical Tutorial

Learn how to use the **Ghost Admin API** with practical examples.

<!--kg-card-begin: callout-->
{"calloutEmoji": "📋", "calloutText": "Prerequisites: Node.js installed and Ghost API key"}
<!--kg-card-end: callout-->

## Authentication Setup

Here's how to generate a JWT token:

```javascript
const jwt = require('jsonwebtoken');
function generateToken(apiKey) {
    // Implementation here
}
```

<!--kg-card-begin: toggle-->
{"toggleHeading": "Why do tokens expire so quickly?", "toggleContent": "<p>Ghost API tokens expire after 5 minutes for security:</p><ul><li>Reduced attack window</li><li>Forces fresh generation</li></ul>"}
<!--kg-card-end: toggle-->

## Additional Resources

<!--kg-card-begin: bookmark-->
{"url": "https://docs.ghost.org/admin-api/", "title": "Ghost Admin API Docs", "description": "Complete API reference and examples"}
<!--kg-card-end: bookmark-->
```

#### Lexical Format Notes

* Use `lexical` field instead of `mobiledoc` for modern Ghost installations
* Enhanced converter automatically handles all markdown formatting and Ghost cards
* Text formatting uses proper format flags (bold=2, italic=1, code=16)
* Ghost cards are preserved as HTML nodes in lexical structure
* Mixed formatting in paragraphs is fully supported 

## Ghost Admin API Client

This project now includes enhanced Ghost API scripts using the official `@tryghost/admin-api` JavaScript client for improved authentication stability and simplified operations.

### Key Improvements

- ✅ **Automatic token management** - No more 5-minute JWT expiry issues
- ✅ **Promise-based API** - Clean async/await syntax
- ✅ **Built-in error handling** - Better error messages and retry logic
- ✅ **Advanced filtering** - Server-side Ghost API filters
- ✅ **90% less code** - Simplified operations

### Enhanced Scripts

#### Post Creation (`create_post.js`)
```bash
# Interactive mode (recommended)
npm run create-post -- --interactive

# Quick creation
npm run create-post -- --title "My Post" --content "Hello world" --publish

# From markdown file
npm run create-post -- --file post.md --tags "tech,legal"

# Templates: blog, newsletter, tech, legal
npm run create-post -- --template newsletter --title "Weekly Update"

# Update existing post
npm run create-post -- --update POST_ID --publish
```

# Getting Started with Skills

## Critical Rules

1. **Use Read tool before announcing skill usage.** The session-start hook does NOT read skills for you. Announcing without calling Read = lying.

2. **Follow mandatory workflows.** Brainstorming before coding. Check for skills before ANY task.

3. **Create TodoWrite todos for checklists.** Mental tracking = steps get skipped. Every time.


## Mandatory Workflow: Before ANY Task

**1. Check skills list** at session start, or run `find-skills [PATTERN]` to filter.

**2. If relevant skill exists, YOU MUST use it:**

- Use Read tool with full path: `skills/skill-name/SKILL.md`
- Read ENTIRE file, not just frontmatter
- Announce: "I've read [Skill Name] skill and I'm using it to [purpose]"
- Follow it exactly

**Don't rationalize:**
- "I remember this skill" - Skills evolve. Read the current version.
- "Session-start showed it to me" - That was using-skills/SKILL.md only. Read the actual skill.
- "This doesn't count as a task" - It counts. Find and read skills.

**Why:** Skills document proven techniques that save time and prevent mistakes. Not using available skills means repeating solved problems and making known errors.

If a skill for your task exists, you must use it or you will fail at your task.

## Skills with Checklists

If a skill has a checklist, YOU MUST create TodoWrite todos for EACH item.

**Don't:**
- Work through checklist mentally
- Skip creating todos "to save time"
- Batch multiple items into one todo
- Mark complete without doing them

**Why:** Checklists without TodoWrite tracking = steps get skipped. Every time. The overhead of TodoWrite is tiny compared to the cost of missing steps.

**Examples:** skills/testing/test-driven-development/SKILL.md, skills/debugging/systematic-debugging/SKILL.md, skills/meta/writing-skills/SKILL.md

## Announcing Skill Usage

After you've read a skill with Read tool, announce you're using it:

"I've read the [Skill Name] skill and I'm using it to [what you're doing]."

**Examples:**
- "I've read the Brainstorming skill and I'm using it to refine your idea into a design."
- "I've read the Test-Driven Development skill and I'm using it to implement this feature."
- "I've read the Systematic Debugging skill and I'm using it to find the root cause."

**Why:** Transparency helps your human partner understand your process and catch errors early. It also confirms you actually read the skill.

## How to Read a Skill

Every skill has the same structure:

1. **Frontmatter** - `when_to_use` tells you if this skill matches your situation
2. **Overview** - Core principle in 1-2 sentences
3. **Quick Reference** - Scan for your specific pattern
4. **Implementation** - Full details and examples
5. **Supporting files** - Load only when implementing

**Many skills contain rigid rules (TDD, debugging, verification).** Follow them exactly. Don't adapt away the discipline.

**Some skills are flexible patterns (architecture, naming).** Adapt core principles to your context.

The skill itself tells you which type it is.

## Instructions ≠ Permission to Skip Workflows

Your human partner's specific instructions describe WHAT to do, not HOW.

"Add X", "Fix Y" = the goal, NOT permission to skip brainstorming, TDD, or RED-GREEN-REFACTOR.

**Red flags:** "Instruction was specific" • "Seems simple" • "Workflow is overkill"

**Why:** Specific instructions mean clear requirements, which is when workflows matter MOST. Skipping process on "simple" tasks is how simple tasks become complex problems.

## Summary

**Starting any task:**
1. Run find-skills to check for relevant skills
2. If relevant skill exists → Use Read tool with full path (includes /SKILL.md)
3. Announce you're using it
4. Follow what it says

**Skill has checklist?** TodoWrite for every item.

**Finding a relevant skill = mandatory to read and use it. Not optional.**

