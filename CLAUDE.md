# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is Ang Hou Fu's personal website (alt-counsel.ghost.io), a ghost-based blog and newsletter focused on legal technology, programming, and personal projects.

## Directory Structure
- `/temp/` - Temporary folder to store work in progress
- `/docs/` - Documentation for advanced Ghost workflows
  - `/docs/ghost-admin-api.md` - Ghost Admin API reference
  - `/docs/ghost-cards-reference.md` - Ghost cards for rich media reference
- `/.claude/` - Claude Code agents and configuration
- `/node_modules/` - Node.js dependencies (ignored by git)

## Development Environment

This project runs in a containerized environment using Docker for consistency and isolation.

### Getting Started

1. **Start the development environment:**
   ```bash
   docker-compose up -d
   ```

2. **Access the web terminal:**
   - Open http://localhost:7681 in your browser
   - Default credentials: `blogger:write123`

3. **Authenticate Claude Code (choose one method):**
   ```bash
   # Option 1: Set API key in docker-compose.yml
   # ANTHROPIC_API_KEY=your_api_key_here

   # Option 2: Interactive login (persists in volume)
   claude auth login
   ```

4. **Configure Ghost API and Claude Code:**
   - Copy `docker-compose.yml.example` to `docker-compose.yml`
   - Set Ghost credentials: `GHOST_SITE_URL`, `GHOST_ADMIN_API_KEY`
   - Optional: Set `ANTHROPIC_API_KEY` for Claude Code
   - Alternative for local Node.js: copy `.env.example` to `.env`

### Available Commands

#### Ghost API Tools
- `blog-token` - Generate JWT token for Ghost API
- `search-posts` - Search through blog posts (original)
- `search-posts-v2` - Enhanced search with @tryghost/admin-api (recommended)
- `create-post` - Create and publish Ghost posts
- `token-examples` - Show API usage examples
- `env-help` - Environment setup instructions

#### Claude Code Agents (after authentication)
- `new-post` - Generate blog post skeleton
- `audit-post` - Quality audit content
- `legal-review` - Legal tech focused review
- `corp-review` - Corporate lawyer perspective review

## Common Development Workflows

### 1. Create a new post

**Recommended workflow using enhanced tools:**
1. Figure out if it's meant to be a newsletter or blog post
2. Ask the user questions on what is description of the post to get a better idea of what is the post going to be about
3. Use the interactive post creator: `npm run create-post --interactive`
4. Or create from template: `npm run create-post --template newsletter --title "Title"`
5. Alternatively, create a draft in `/temp/` folder in markdown, then use `npm run create-post --file temp/post.md`

### 2. Search the blog based on a question or keyword

**Recommended approach using enhanced search:**
```bash
# Basic search
npm run search-v2 docassemble

# Advanced search with filters
npm run search-v2 "legal tech" --limit 10 --published --format simple
npm run search-v2 --tag javascript --featured
```

**Legacy approach (if needed):**
1. Download the latest posts data from the server for client side searching
2. Create the search logic and search across multiple fields
3. Display the results

### 3. Post to Ghost

When posting to Ghost, use the lexical format for content. Ghost's modern editor uses lexical JSON format rather than mobiledoc.

#### Recommended: Using the Post Creation Script

```bash
# Interactive post creation (easiest)
npm run create-post --interactive

# Quick post creation
npm run create-post --title "My Post" --content "Hello world" --publish

# From markdown file
npm run create-post --file post.md --tags "tech,legal" --featured

# Using templates
npm run create-post --template newsletter --title "Weekly Update"
npm run create-post --template tech --title "API Guide"

# Create draft
npm run create-post --title "Draft Post" --content "Work in progress..." --draft
```

#### Legacy: Manual API Calls

```bash
# Generate JWT token
TOKEN=$(node ghost_jwt.js --quiet)

# Create draft post with lexical content
curl -H "Authorization: Ghost $TOKEN" \
     -H "Accept-Version: v6.0" \
     -H "Content-Type: application/json" \
     -X POST \
     "https://alt-counsel.ghost.io/ghost/api/admin/posts/" \
     -d '{
       "posts": [{
         "title": "Post Title",
         "status": "draft",
         "newsletter": true,
         "excerpt": "Brief description of the post",
         "lexical": "LEXICAL_JSON_HERE"
       }]
     }'
```

#### Lexical Format Notes

* Use `lexical` field instead of `mobiledoc` for modern Ghost installations
* Lexical JSON structure contains a root object with children array
* Each child represents a paragraph, heading, list, or other content block
* Text formatting uses `format` field (0=normal, 1=italic, 2=bold, etc.)
* Always escape quotes properly in the JSON structure 

## Ghost Admin API Client

This project now includes enhanced Ghost API scripts using the official `@tryghost/admin-api` JavaScript client for improved authentication stability and simplified operations.

### Key Improvements

- ✅ **Automatic token management** - No more 5-minute JWT expiry issues
- ✅ **Promise-based API** - Clean async/await syntax
- ✅ **Built-in error handling** - Better error messages and retry logic
- ✅ **Advanced filtering** - Server-side Ghost API filters
- ✅ **90% less code** - Simplified operations

### Enhanced Scripts

#### Search Posts v2 (`search_posts_v2.js`)
```bash
# Basic usage
npm run search-v2 docassemble

# Advanced filtering
npm run search-v2 "legal tech" --limit 10 --published
npm run search-v2 --tag javascript --format simple
npm run search-v2 --author houfu --featured
npm run search-v2 --filter "published_at:>2024-01-01"

# Output formats: detailed (default), simple, json
npm run search-v2 --tag tech --format json
```

#### Post Creation (`create_post.js`)
```bash
# Interactive mode (recommended)
npm run create-post --interactive

# Quick creation
npm run create-post --title "My Post" --content "Hello world" --publish

# From markdown file
npm run create-post --file post.md --tags "tech,legal"

# Templates: blog, newsletter, tech, legal
npm run create-post --template newsletter --title "Weekly Update"

# Update existing post
npm run create-post --update POST_ID --publish
```

### Testing and Comparison

```bash
# Test the new API client
npm run test-api-client

# Compare old vs new approaches
npm run compare-api
```

## Ghost Admin API Authentication

### Setup for Claude Code

1. Get your Admin API Key from Ghost:

  * Go to Ghost Admin → Settings → Integrations
  * Create "Custom Integration" and copy the Admin API Key

2. Configure your Ghost credentials:

  * For Docker: Edit environment variables in `docker-compose.yml`
  * For local Node.js: Copy `.env.example` to `.env` and edit

### JWT Token Generation

Use the Node.js `ghost_jwt.js` script for all JWT token operations:

```bash
# Generate token with examples
node ghost_jwt.js --examples
# or use the alias:
blog-token --examples

# Get just the token (for scripting)
node ghost_jwt.js --quiet
# or:
blog-token --quiet

# Show HTTP headers for curl
node ghost_jwt.js --print-headers

# Environment variable setup help
node ghost_jwt.js --env-help
```

### Configuration Options

#### Option 1: Environment Variables (Recommended for Docker)
```bash
# Set in docker-compose.yml or .env file
GHOST_SITE_URL=https://your-site.ghost.io
GHOST_ADMIN_API_KEY=your_admin_api_key
GHOST_API_VERSION=v6.0
```

#### Local Node.js Setup
```bash
# Copy environment file
cp .env.example .env
# Edit .env with your Ghost credentials
```

### Common API Operations

```bash
# Search for posts containing specific terms
TOKEN=$(node ghost_jwt.js --quiet)
curl -H "Authorization: Ghost $TOKEN" \
     -H "Accept-Version: v6.0" \
     "https://alt-counsel.ghost.io/ghost/api/admin/posts/?filter=title:~docassemble,plaintext:~docassemble"

# Get all posts with tags
curl -H "Authorization: Ghost $TOKEN" \
     -H "Accept-Version: v6.0" \
     "https://alt-counsel.ghost.io/ghost/api/admin/posts/?include=tags"

# Get site information
curl -H "Authorization: Ghost $TOKEN" \
     -H "Accept-Version: v6.0" \
     "https://alt-counsel.ghost.io/ghost/api/admin/site/"
```

### Key Points

* Tokens expire in 5 minutes maximum
* Use HS256 algorithm with hex-decoded secret
* Admin API keys must be kept secure (server-side only)
* Never commit credentials to version control
* The application now uses Node.js instead of Python for better container compatibility
* Environment variables are preferred over settings files in the containerized setup

## Container Management

### Docker Commands

```bash
# Start the development environment
docker-compose up -d

# Stop the environment
docker-compose down

# View logs
docker-compose logs -f

# Rebuild after changes
docker-compose build --no-cache

# Execute commands inside container
docker-compose exec blog-terminal bash
```

### Persistent Data

The following data persists between container restarts:
- Claude Code configuration and agents
- Bash history
- NPM cache
- Your project files (mounted as volume)

### Security

- Web terminal protected with basic auth (`blogger:write123`)
- Container runs with minimal privileges
- Secrets managed via environment variables
- Appropriate security options enabled
- Always remove working files after posting a draft to ghost