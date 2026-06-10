# Post a draft to Ghost

Before posting to Ghost, always ensure content quality auditor has gone through the post, and the
human partner has confirmed that all required issues have been resolved.

When posting to Ghost, use the lexical format for content. Ghost's modern editor uses lexical JSON format rather than mobiledoc.

**Content Guidelines:**
- Do NOT use horizontal rules to organize posts - use headings, spacing, or other formatting instead
- Horizontal rules break markdown to lexical conversion and aren't part of alt-counsel's content style

## Building Lexical Content

**The only supported publishing path is `scripts/publish-lexical.js` at the repository root** (see "Recommended: Using the Post Creation Script" below). It converts markdown to lexical for you — in the normal workflow you never construct lexical JSON by hand.

The skill also bundles `scripts/ghost-lexical-single.js`, a fluent builder API for Ghost lexical JSON. **Treat it as reference documentation** for understanding the lexical node structure (e.g., when extending `publish-lexical.js`). Do NOT require it from per-post scripts — per-post publishing scripts are not allowed.

**For detailed reference:** See [/docs/ghost-lexical-format.md](../../../docs/ghost-lexical-format.md) for comprehensive documentation on Ghost's lexical format with real-world examples from actual blog posts.

### Basic Usage

```javascript
const { LexicalBuilder, text } = require('./.claude/skills/using-ghost-admin-api/scripts/ghost-lexical-single.js');

const content = new LexicalBuilder()
  .h1('My First Post')
  .paragraph('Hello, ', text.bold('world'), '!')
  .h2('Features')
  .bulletList(['Easy to use', 'One file', 'No dependencies'])
  .build();

console.log(JSON.stringify(content));
```

### Available Methods

The `LexicalBuilder` class provides methods for common content elements:

**Headings:**
- `.h1(content)`, `.h2(content)`, `.h3(content)`, `.h4(content)`, `.h5(content)`, `.h6(content)`

**Text blocks:**
- `.paragraph(...items)` - accepts plain text strings and formatted text objects

**Lists:**
- `.bulletList(items)` - creates unordered list
- `.numberedList(items)` - creates ordered list

**Media & Cards:**
- `.image(src, options)` - image card with optional caption, dimensions
- `.codeBlock(code, language, caption)` - code block with syntax highlighting
- `.bookmark(url, options)` - bookmark card with metadata
- `.signupCard(options)` - newsletter signup card
- `.toggle(heading, content)` - collapsible toggle/accordion

**IMPORTANT:** Do NOT use horizontal rules (`.hr()` or `.lineBreak()`) to organize posts in final drafts. Use headings, spacing, or other formatting instead. Horizontal rules are not part of alt-counsel's content style.

### Text Formatting

Use the `text` helper object to add formatting within paragraphs:

```javascript
.paragraph(
  'This is ',
  text.bold('bold text'),
  ' and this is ',
  text.italic('italic text'),
  ' and ',
  text.code('code'),
  '.'
)
```

Available text formatting:
- `text.normal(content)` - plain text
- `text.bold(content)` - bold
- `text.italic(content)` - italic
- `text.boldItalic(content)` - bold and italic
- `text.code(content)` - inline code
- `text.underline(content)` - underlined
- `text.strikethrough(content)` - strikethrough

## Adding Metadata

Once you have the lexical content, combine it with metadata to create a complete post.

### Auto-generating Missing Metadata

**Important:** When creating a draft, the skill should check if required metadata is missing and generate it automatically:

1. **Title**: If not provided, extract from the first heading (h1/h2) in the lexical content, or generate based on the post content
2. **Custom Excerpt**: If not provided, generate a concise 1-2 sentence summary from the post content (aim for ~250-299 characters)
3. **Tags**: If not provided or if tags need validation, **use the tag-registry skill** to:
   - Suggest 3-4 appropriate tags from the canonical registry
   - Validate that tags follow naming conventions
   - Ensure at least 1 Core Topic tag is included
   - Warn if proposing new tags not in the registry

Before creating the post, always verify these three fields exist and generate them if missing. For tags specifically, invoke the tag-registry skill to ensure consistency and prevent tag sprawl.

## Recommended: Using the Post Creation Script

The canonical publishing script is `scripts/publish-lexical.js` at the repository root. Always use this script — do NOT create per-post publishing scripts.

### Usage

```bash
node -r dotenv/config scripts/publish-lexical.js posts/{post-folder}/{post-file}.md
```

The script handles:
- Parsing markdown frontmatter (title, slug, tags, status, custom_excerpt, github_folder)
- Converting markdown to Ghost lexical JSON format
- Tables to HTML cards
- Bookmark card syntax to Ghost bookmark cards
- Adding GitHub footer automatically when `github_folder` is in frontmatter
- Skipping HTML comment placeholders (e.g., `<!-- 📸 SCREENSHOT -->`)
- **Local images**: `![alt](images/foo.png)` references that exist next to the markdown file are uploaded to Ghost automatically and rewritten to hosted URLs — no more `ghost_image_upload` + temp-copy workaround
- **Transient API failures** (418/429/5xx): retried with exponential backoff
- `--dry-run` flag: converts and prints the lexical JSON (and which images would be uploaded) without credentials or API calls — use it to preview before publishing

### Before running

Ensure your `.env` file has: `GHOST_SITE_URL`, `GHOST_ADMIN_API_KEY`, `GHOST_API_VERSION`

### After running

The script outputs the post ID and admin URL. Update the post's markdown frontmatter with the returned `post_id`.

### If the canonical script is missing a feature

Improve `scripts/publish-lexical.js` directly rather than creating a new per-post script.
