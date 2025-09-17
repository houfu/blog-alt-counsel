# Alt + Counsel Blog

> *A lightweight collection of **Claude Code** subagents that automate the entire lifecycle of a Ghost‑blog post – from outline generation to quality control and publishing.*

> **TL;DR**: Create an outline → auto‑generate a draft → edit it with agents → publish as a Ghost “draft” → schedule or post.

---

## Table of Contents



---

## What Is This?

Alt + Counsel Blog is a toolkit that lets you write, edit, audit, and publish Ghost posts entirely from your terminal or a single HTTP request.  
The core idea: *Treat every step of the writing process as an agent that can be invoked, chained, or overridden.*

Key features:

- **Outline Generation** – Claude auto‑creates a topical outline from a keyword or brief.
- **Draft Creation** – Generates Markdown with structure, sub‑headings, and placeholder content.
- **Quality Control** – Spell‑check, grammar check, SEO audit, tone consistency, and plagiarism scan.
- **Backlink Search** – Finds authoritative sources to cite (via a simple web‑scraping subagent).
- **Ghost API Integration** – Pushes the final draft to Ghost as a *Draft* or *Published* post.

**NB**: I created this for my own blog, so you may need to adjust for your own content accordingly.

---

## 🐳 Containerized Development Environment

This project includes a fully containerized development environment with:
- **ttyd**: Web-based terminal access
- **Claude Code**: AI-powered development assistance  
- **Pure Node.js**: Simplified runtime (no Python dependencies)
- **Environment variable configuration**: Docker-friendly setup

### Quick Start

```bash
# Clone or navigate to the project
cd blog-alt-counsel

# Install Node.js dependencies
npm install

# Build and start the containerized environment
docker-compose up -d

# Access the web terminal
open http://localhost:7681
# Login: blogger / write123
```

### Enhanced Blog Automation Commands

Once connected to the web terminal:

```bash
# Authenticate Claude Code (choose one method):

# Option 1: Set API key in docker-compose.yml
# ANTHROPIC_API_KEY=your_api_key_here

# Option 2: Interactive login (persists in volume)
claude auth login

# Ghost API operations
blog-token              # Generate Ghost JWT token
search-posts           # Search existing blog posts
search-posts "AI law"   # Search for specific terms

# Blog content creation with Claude agents
new-post "AI contract automation"    # Generate post skeleton
audit-post                          # Quality audit
legal-review                        # Legal tech review
corp-review                         # Corporate lawyer review

# Development helpers
token-examples         # Show API usage examples
env-help              # Environment variable setup help
list-agents           # Show available Claude agents
```

### Configuration

Choose one of these two simple setup methods:

**Option 1: Docker Setup (Recommended)**
```bash
# Copy the example file
cp docker-compose.yml.example docker-compose.yml

# Edit docker-compose.yml and set your Ghost credentials in the environment section:
environment:
  - GHOST_SITE_URL=https://yourblog.com
  - GHOST_ADMIN_API_KEY=your_id:your_secret_hex
  - GHOST_API_VERSION=v6.0
```

**Option 2: Local Node.js Setup**
```bash
# Copy the environment file
cp .env.example .env

# Edit .env with your Ghost credentials
# Then run: node ghost_jwt.js or npm run token
```

### Cross-Device Blog Writing

The containerized environment is accessible from any device on your network:
- **Desktop**: `http://localhost:7681`
- **Mobile/Tablet**: `http://your-machine-ip:7681`
- **Optimized for touch**: Responsive terminal interface

### Benefits

- ✅ **Unified runtime**: Node.js only (no Python/uv complexity)
- ✅ **Pre-installed Claude Code**: No runtime installation delays
- ✅ **Persistent authentication**: Login once, works across restarts
- ✅ **Multi-architecture**: Works on x86_64 and ARM64 (Raspberry Pi)
- ✅ **Environment flexibility**: Docker-native configuration
- ✅ **Team-friendly**: Identical setup across all machines
- ✅ **AI-enhanced workflow**: Claude agents integrated into terminal

---

## License

MIT © 2025 Ang Hou Fu

See [LICENSE](./LICENSE) for details.

---

Happy writing! 🚀