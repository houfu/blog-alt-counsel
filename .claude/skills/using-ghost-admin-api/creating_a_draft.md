# Post a draft to Ghost

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