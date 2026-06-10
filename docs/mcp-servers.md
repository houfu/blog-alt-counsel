# MCP Servers Configuration

This project uses Model Context Protocol (MCP) servers to extend Claude Code's capabilities.

**Location:** `.mcp.json` at the repository root (the standard project-scope location Claude Code reads).

**Security rule:** Never hardcode API keys in `.mcp.json` — it is committed to a public repository. Reference environment variables with `${VAR_NAME}` syntax and keep the actual values in `.env` (gitignored).

## Configured MCP Servers

### Ghost (ghst)

Provides Ghost CMS operations: search, post CRUD, tags, stats, members.

**Setup:**
```bash
npm install -g @tryghost/ghst
```
Authentication happens automatically at session start via `.claude/hooks/ghst-auth.sh` using `GHOST_SITE_URL` and `GHOST_ADMIN_API_KEY` from `.env`.

### Jina AI Server

Provides web search, URL reading, image search, and other Jina AI capabilities.

**Available tools:**
- `mcp__jina__read_url` - Extract and convert web content to markdown
- `mcp__jina__search_web` - Search the web for information
- `mcp__jina__search_images` - Search for images
- `mcp__jina__search_arxiv` - Search academic papers
- `mcp__jina__expand_query` - Expand search queries for better results
- `mcp__jina__sort_by_relevance` - Rerank documents by relevance

**Setup:**

1. Get a Jina API key from https://jina.ai/
2. Add it to your `.env` file:
   ```
   JINA_API_KEY=your_api_key_here
   ```
   `.mcp.json` references it as `${JINA_API_KEY}`.

## Adding New MCP Servers

1. Edit `.mcp.json` and add your server configuration:
   ```json
   {
     "mcpServers": {
       "your-server": {
         "command": "command-to-run",
         "args": ["arg1", "arg2"],
         "env": {
           "API_KEY": "${YOUR_API_KEY}"
         }
       }
     }
   }
   ```

2. Add any required environment variables to your `.env` file (never the literal key in `.mcp.json`)

3. Update permissions in `.claude/settings.local.json` if needed

4. Document the new server in this file

## References

- [Model Context Protocol Specification](https://modelcontextprotocol.io/)
- [Jina MCP Server](https://github.com/jina-ai/mcp-server-jina)
