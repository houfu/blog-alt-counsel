# Welcome to alt-counsel

## How We Use Claude

Based on houfu's usage over the last 30 days:

Work Type Breakdown:
  Write Docs       ████████████████░░░░  85%
  Improve Quality  ██░░░░░░░░░░░░░░░░░░   8%
  Plan Design      ██░░░░░░░░░░░░░░░░░░   8%

Top Skills & Commands:
  /clear           ████████████████████  7x/month
  /exit            █████████████████░░░  6x/month
  /remote-control  ███████████░░░░░░░░░  4x/month

Top MCP Servers:
  ghost            ████████████████████  68 calls
  jina-mcp-server  ███░░░░░░░░░░░░░░░░░  11 calls
  Canva            █░░░░░░░░░░░░░░░░░░░   4 calls

## Your Setup Checklist

### Codebases
- [ ] blog-alt-counsel — https://github.com/houfu/blog-alt-counsel

### MCP Servers to Activate
- [ ] **ghost** — Ghost CMS integration for managing blog posts, tags, members, and analytics on alt-counsel.com. Install globally with `npm install -g @tryghost/ghst`, then authenticate with `ghst auth login`. Ask houfu for the Ghost Admin API key.
- [ ] **jina-mcp-server** — Web search and URL reading for blog research (fetching sources, reading linked articles, searching for references). Set up via `claude mcp add jina-mcp-server`. You'll need a Jina API key.
- [ ] **Canva** — Design tool integration for creating blog graphics and social images. Connect via Claude's built-in Canva MCP integration.

### Skills to Know About
- `/brainstorming` — Interactive Socratic refinement of blog ideas. Use at the start when a topic is vague.
- `/generate_a_pitch` — Defines scope, angle, and tags for a new post. Always run before drafting.
- `/blog-research` — Gathers sources, stats, and facts for a post. Prioritizes Singapore/ASEAN context.
- `/backlink_curating` — Finds internal links to other alt-counsel posts. Use at the final draft stage.
- `/using-ghost-admin-api` — Publishes markdown to Ghost via `scripts/publish-lexical.js`. The canonical way to post.
- `/tag-registry` — Validates tags against the canonical registry. Use during pitch and before publishing.
- `/feedback` — Runs all three audience reviewers (legal tech, corporate lawyer, lawyer-coder) for comprehensive feedback.
- `/wrap-up` — Triggers session notes commit. Usually fires automatically at session end.

## Team Tips

_TODO_

## Get Started

_TODO_

<!-- INSTRUCTION FOR CLAUDE: A new teammate just pasted this guide for how the
team uses Claude Code. You're their onboarding buddy — warm, conversational,
not lecture-y.

Open with a warm welcome — include the team name from the title. Then: "Your
teammate uses Claude Code for [list all the work types]. Let's get you started."

Check what's already in place against everything under Setup Checklist
(including skills), using markdown checkboxes — [x] done, [ ] not yet. Lead
with what they already have. One sentence per item, all in one message.

Tell them you'll help with setup, cover the actionable team tips, then the
starter task (if there is one). Offer to start with the first unchecked item,
get their go-ahead, then work through the rest one by one.

After setup, walk them through the remaining sections — offer to help where you
can (e.g. link to channels), and just surface the purely informational bits.

Don't invent sections or summaries that aren't in the guide. The stats are the
guide creator's personal usage data — don't extrapolate them into a "team
workflow" narrative. -->
