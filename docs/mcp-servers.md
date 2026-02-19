# MCP Servers Configuration

This project uses Model Context Protocol (MCP) servers to extend Claude Code's capabilities.

## Configured MCP Servers

### Jina AI Server
**Location:** `.claude/mcp.json`

Provides web search, URL reading, image search, and other Jina AI capabilities.

**Available tools:**
- `mcp__jina__read_url` - Extract and convert web content to markdown
- `mcp__jina__search_web` - Search the web for information
- `mcp__jina__search_images` - Search for images
- `mcp__jina__search_arxiv` - Search academic papers
- `mcp__jina__expand_query` - Expand search queries for better results
- `mcp__jina__sort_by_relevance` - Rerank documents by relevance
- And more (see tool descriptions in Claude Code)

**Setup:**

1. Get a Jina API key from https://jina.ai/

2. Set the environment variable:
   ```bash
   export JINA_API_KEY=your_api_key_here
   ```

3. In the Docker container, add to your `.env` file:
   ```
   JINA_API_KEY=your_api_key_here
   ```

4. Claude Code will automatically load the MCP server configuration from `.claude/mcp.json`

## Adding New MCP Servers

To add a new MCP server:

1. Edit `.claude/mcp.json` and add your server configuration:
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

2. Add any required environment variables to your `.env` file

3. Update permissions in `.claude/settings.local.json` if needed

4. Document the new server in this file

## References

- [Model Context Protocol Specification](https://modelcontextprotocol.io/)
- [Jina MCP Server](https://github.com/jina-ai/mcp-server-jina)
