# Alt + Counsel Blog

A system of Claude Code agents and skills that automate the entire lifecycle of a Ghost blog post: pitch development, drafting, quality auditing, and publishing. Built for [alt-counsel.com](https://alt-counsel.com), a blog focused on legal technology for solo counsels and small teams.

## Quick Start

**Prerequisites:** Node.js >= 16, [Claude Code](https://docs.anthropic.com/en/docs/claude-code), a Ghost blog with Admin API access, [ghst CLI](https://github.com/TryGhost/ghst).

```bash
# Clone the repository
git clone https://github.com/houfu/blog-alt-counsel.git
cd blog-alt-counsel

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with your Ghost credentials (see Environment Variables below)

# Install git hooks
npm run setup-hooks

# Set up Ghost CLI and MCP integration
npm install -g @tryghost/ghst
ghst auth login --url $GHOST_SITE_URL --staff-token $GHOST_ADMIN_API_KEY --site alt-counsel
claude mcp add ghost -- ghst mcp stdio --tools all
```

## Environment Variables

Create a `.env` file from `.env.example` and fill in your values.

**Required:**

| Variable | Description |
|---|---|
| `GHOST_SITE_URL` | Your Ghost site URL (e.g. `https://yourblog.com`) |
| `GHOST_ADMIN_API_KEY` | Ghost Admin API key in `id:secret` format (also used as ghst staff token) |
| `GHOST_API_VERSION` | Ghost API version (e.g. `v6.0`) |

**Optional:**

| Variable | Description |
|---|---|
| `JINA_API_KEY` | Enables web search via Jina AI MCP server |

## Key npm Scripts

| Command | Description |
|---|---|
| `npm run sync-ghost <slug>` | Sync a published Ghost post back to the local repo |
| `npm run setup-hooks` | Install the pre-commit git hook |

## Ghost MCP Integration

Most Ghost CMS operations are handled via the **ghst MCP server**, which provides native tools directly in Claude Code. This includes searching posts, managing tags, viewing analytics, creating/updating posts, and managing members.

The MCP server is powered by [`@tryghost/ghst`](https://github.com/TryGhost/ghst), Ghost's official CLI tool. Once authenticated and registered as an MCP server, Claude Code can interact with Ghost without custom scripts.

**Custom scripts still used:**
- `scripts/publish-lexical.js` — Converts markdown posts to Ghost's lexical format with custom features (bookmark cards, GitHub footer, table conversion)
- `scripts/sync-from-ghost.js` — Syncs Ghost metadata back to local markdown frontmatter

## How It Works

The blog automation follows a five-phase workflow:

1. **PITCH** -- Define scope, direction, and tags for a new post.
2. **WRITE** -- Draft the content using Houfu's voice guide and structural patterns.
3. **REVIEW** -- Run quality checks: content audit, audience review, backlink curation, and proofreading.
4. **POST** -- Publish the draft to Ghost via `publish-lexical.js` or MCP tools.
5. **CHECK** -- Verify the published post and sync the repo.

Three audience reviewer personas provide targeted feedback during the review phase:

- **Marcus Tan** (Legal Tech Reviewer) -- Seasoned legal technologist evaluating technical depth and community value.
- **Sarah Chen** (Corporate Lawyer) -- Solo corporate lawyer testing for affordability and practical relevance.
- **Wei Lin** (Lawyer-Coder) -- Senior legal counsel who codes, checking for vulnerability and specificity.

See [CLAUDE.md](./CLAUDE.md) for the full workflow details, writing voice guide, and agent configuration.

## License

MIT (c) 2025 Ang Hou Fu. See [LICENSE](./LICENSE) for details.
