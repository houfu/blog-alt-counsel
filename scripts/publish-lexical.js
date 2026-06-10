#!/usr/bin/env node

/**
 * Publish a markdown post to Ghost CMS with full lexical structure
 * Usage: node scripts/publish-lexical.js <path-to-markdown-file> [status] [--dry-run]
 *
 * Status options: draft (default), published
 * --dry-run: convert (including which local images WOULD be uploaded) and
 *            print the lexical JSON without touching the Ghost API. Needs no
 *            credentials — used by the CI conversion test.
 */

const fs = require('fs');
const path = require('path');

let matter, GhostAdminAPI;
try {
  matter = require('gray-matter');
  GhostAdminAPI = require('@tryghost/admin-api');
} catch (err) {
  console.error('Error: Missing dependencies — run `npm install` first.');
  console.error(`(${err.message})`);
  process.exit(1);
}

const dotenvPath = path.join(__dirname, '../.env');
require('dotenv').config({ path: dotenvPath });

const GHOST_SITE_URL = process.env.GHOST_SITE_URL;

// Credentials are only required when actually talking to Ghost — dry runs and
// the CI conversion test must work without a .env.
function getApi() {
  const key = process.env.GHOST_ADMIN_API_KEY;
  if (!GHOST_SITE_URL || !key) {
    console.error('Error: Missing Ghost API credentials');
    console.error('Please set GHOST_SITE_URL and GHOST_ADMIN_API_KEY in .env file');
    process.exit(1);
  }
  return new GhostAdminAPI({
    url: GHOST_SITE_URL,
    key: key,
    version: process.env.GHOST_API_VERSION || 'v6.0',
  });
}

// Retry transient Ghost API failures (418s and 5xx have repeatedly forced
// manual paste-into-Ghost workarounds — see docs/process-lessons-2026-06.md).
async function withRetry(label, fn, attempts = 4) {
  let lastErr;
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (err) {
      lastErr = err;
      const statusCode = err.response?.status || err.statusCode;
      const retriable =
        statusCode === 418 || statusCode === 429 || (statusCode >= 500 && statusCode < 600) || err.code === 'ECONNRESET' || err.code === 'ETIMEDOUT';
      if (!retriable || i === attempts - 1) throw err;
      const delay = 2000 * Math.pow(2, i);
      console.log(`   ${label} failed (${statusCode || err.code}); retrying in ${delay / 1000}s (${i + 2}/${attempts})...`);
      await new Promise((r) => setTimeout(r, delay));
    }
  }
  throw lastErr;
}

// ============================================================================
// FORMAT FLAGS
// ============================================================================

const FORMAT = {
  NORMAL: 0,
  ITALIC: 1,
  BOLD: 2,
  BOLD_ITALIC: 3,
  UNDERLINE: 4,
  STRIKETHROUGH: 8,
  CODE: 16,
  BOLD_CODE: 18,
};

function combineFormats(...flags) {
  return flags.reduce((acc, flag) => acc | flag, 0);
}

// ============================================================================
// LEXICAL NODE BUILDERS
// ============================================================================

function createTextNode(text, format = FORMAT.NORMAL) {
  return {
    type: 'extended-text',
    text: text,
    format: format,
    detail: 0,
    mode: 'normal',
    style: '',
    version: 1,
  };
}

function createParagraph(children = []) {
  return {
    type: 'paragraph',
    children: children,
    direction: 'ltr',
    format: '',
    indent: 0,
    version: 1,
  };
}

function createHeading(level, children = []) {
  return {
    type: 'extended-heading',
    tag: `h${level}`,
    children: children,
    direction: 'ltr',
    format: '',
    indent: 0,
    version: 1,
  };
}

function createList(listType, children = []) {
  return {
    type: 'list',
    listType: listType,
    start: 1,
    tag: listType === 'bullet' ? 'ul' : 'ol',
    children: children,
    direction: 'ltr',
    format: '',
    indent: 0,
    version: 1,
  };
}

function createListItem(value, children = []) {
  return {
    type: 'listitem',
    value: value,
    children: children,
    direction: 'ltr',
    format: '',
    indent: 0,
    version: 1,
  };
}

function createCodeBlock(code, language = '') {
  return {
    type: 'codeblock',
    version: 1,
    code: code,
    language: language,
    caption: '',
  };
}

function createImage(src, options = {}) {
  const node = {
    type: 'image',
    version: 1,
    src: src,
    alt: options.alt || '',
    title: options.title || '',
    caption: options.caption || '',
    cardWidth: options.cardWidth || 'regular',
  };
  if (options.width) node.width = options.width;
  if (options.height) node.height = options.height;
  if (options.href) node.href = options.href;
  return node;
}

function createBookmark(url, caption = '') {
  return {
    type: 'bookmark',
    version: 1,
    url: url,
    metadata: {
      url: url,
      title: null,
      description: null,
      author: null,
      publisher: null,
      thumbnail: null,
      icon: null,
    },
    caption: caption,
  };
}

function createHtmlCard(htmlContent) {
  return {
    type: 'html',
    version: 1,
    html: htmlContent,
  };
}

function createLineBreak() {
  return {
    type: 'linebreak',
    version: 1,
  };
}

function createPaywall() {
  return {
    type: 'paywall',
    version: 1,
  };
}

function createLinkNode(url, children = []) {
  return {
    type: 'link',
    url: url,
    children: children,
    direction: 'ltr',
    format: '',
    version: 1,
    rel: null,
    target: null,
    title: null,
  };
}

// ============================================================================
// MARKDOWN TO LEXICAL CONVERTER
// ============================================================================

class MarkdownToLexical {
  constructor(markdown) {
    this.markdown = markdown;
    this.nodes = [];
    this.currentList = null;
    this.listItems = [];
  }

  convert() {
    const lines = this.markdown.split('\n');
    let i = 0;
    
    while (i < lines.length) {
      const line = lines[i];
      
      // Skip empty lines at start
      if (line.trim() === '' && this.nodes.length === 0) {
        i++;
        continue;
      }
      
      // Check for members-only paywall marker
      if (line.trim() === '<!--members-only-->') {
        this.flushList();
        this.nodes.push(createPaywall());
        i++;
        continue;
      }

      // Check for thematic break / horizontal rule
      if (/^(-{3,}|\*{3,}|_{3,})$/.test(line.trim())) {
        this.nodes.push(createLineBreak());
        i++;
        continue;
      }
      
      // Check for heading
      const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
      if (headingMatch) {
        const level = headingMatch[1].length;
        const text = headingMatch[2].trim();
        this.nodes.push(createHeading(level, [createTextNode(text)]));
        i++;
        continue;
      }
      
      // Check for bullet list item
      const bulletMatch = line.match(/^[-*+]\s+(.+)$/);
      if (bulletMatch) {
        const text = bulletMatch[1];
        this.processListItem('bullet', text);
        i++;
        continue;
      }
      
      // Check for numbered list item
      const numberedMatch = line.match(/^(\d+)\.\s+(.+)$/);
      if (numberedMatch) {
        const text = numberedMatch[2];
        this.processListItem('number', text);
        i++;
        continue;
      }
      
      // Check for table
      if (line.includes('|') && this.isTableRow(line)) {
        const tableLines = [line];
        i++;
        // Skip header separator
        if (i < lines.length && /^[\s|:|-]+$/.test(lines[i].replace(/\|/g, '').trim())) {
          i++;
        }
        // Collect table rows
        while (i < lines.length && lines[i].includes('|')) {
          tableLines.push(lines[i]);
          i++;
        }
        this.processTable(tableLines);
        continue;
      }
      
      // Check for code block start
      if (line.startsWith('```')) {
        const language = line.slice(3).trim();
        const codeLines = [];
        i++;
        while (i < lines.length && !lines[i].startsWith('```')) {
          codeLines.push(lines[i]);
          i++;
        }
        this.nodes.push(createCodeBlock(codeLines.join('\n'), language));
        i++;
        continue;
      }
      
      // Check for image
      const imageMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)(.*)$/);
      if (imageMatch) {
        const alt = imageMatch[1];
        const src = imageMatch[2];
        const titleMatch = imageMatch[3].match(/"([^"]+)"/);
        const title = titleMatch ? titleMatch[1] : '';
        this.nodes.push(createImage(src, { alt, title }));
        i++;
        continue;
      }
      
      // Regular paragraph - collect lines until blank or special element
      if (line.trim() !== '') {
        let paragraphLines = [line];
        i++;
        while (i < lines.length && lines[i].trim() !== '' && 
               !lines[i].match(/^(-{3,}|\*{3,}|_{3,})$/) &&
               !lines[i].match(/^(#{1,6})\s+/) &&
               !lines[i].match(/^[-*+]\s+/) &&
               !lines[i].match(/^\d+\.\s+/) &&
               !lines[i].startsWith('```') &&
               !lines[i].includes('|')) {
          paragraphLines.push(lines[i]);
          i++;
        }
        this.nodes.push(this.parseInline(paragraphLines.join(' ')));
        continue;
      }
      
      i++;
    }
    
    // Flush remaining list
    this.flushList();
    
    return {
      root: {
        children: this.nodes,
        direction: 'ltr',
        format: '',
        indent: 0,
        type: 'root',
        version: 1,
      },
    };
  }

  isTableRow(line) {
    const parts = line.split('|').filter(p => p.trim() !== '');
    return parts.length >= 2 && !/^[\s|:|-]+$/.test(parts.join('').trim());
  }

  processTable(tableLines) {
    if (tableLines.length < 2) return;
    
    const rows = tableLines.map(line => 
      line.split('|')
          .filter(cell => cell !== undefined)
          .map(cell => cell.trim())
    );
    
    // Build HTML table
    let html = '<table>\n';
    
    // Header row
    html += '  <thead>\n    <tr>\n';
    rows[0].forEach(cell => {
      html += `      <th>${this.escapeHtml(cell)}</th>\n`;
    });
    html += '    </tr>\n  </thead>\n';
    
    // Body rows
    if (rows.length > 1) {
      html += '  <tbody>\n';
      for (let i = 1; i < rows.length; i++) {
        html += '    <tr>\n';
        rows[i].forEach(cell => {
          html += `      <td>${this.escapeHtml(cell)}</td>\n`;
        });
        html += '    </tr>\n';
      }
      html += '  </tbody>\n';
    }
    
    html += '</table>';
    
    // Wrap in HTML card
    this.nodes.push(createHtmlCard(html));
  }

  escapeHtml(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  processListItem(listType, text) {
    if (!this.currentList) {
      this.currentList = listType;
    }
    
    if (this.currentList !== listType) {
      this.flushList();
      this.currentList = listType;
    }
    
    const children = this.parseInline(text).children || [this.parseInline(text)];
    this.listItems.push({ type: listType, children, value: this.listItems.length + 1 });
  }

  flushList() {
    if (this.listItems.length === 0) return;
    
    const listType = this.currentList;
    const listChildren = this.listItems.map(item => 
      createListItem(item.value, item.children)
    );
    
    this.nodes.push(createList(listType, listChildren));
    this.listItems = [];
    this.currentList = null;
  }

  parseInline(text) {
    const children = [];
    let remaining = text;
    
    while (remaining.length > 0) {
      // Check for link [text](url) or [text](url "title").
      // Prefix is * not + — a link at the very start of a line/paragraph is
      // valid (the + version silently mangled line-leading links into text).
      const linkMatch = remaining.match(/^([^\[]*)\[([^\]]+)\]\(([^)\s]+)(?:\s+"([^"]+)")?\)/);
      
      // Check for bookmark card pattern: specific alt-counsel URLs or explicit bookmark request
      const bookmarkMatch = remaining.match(/^([^\[]*)\[([^\]]+)\]\(([^)]+)\)(?:\s+"([^"]+)")?/);
      
      if (bookmarkMatch && (
        bookmarkMatch[3].includes('alt-counsel.com') || 
        bookmarkMatch[3].includes('zeeker.sg') ||
        bookmarkMatch[3].includes('mLaw.gov.sg') ||
        bookmarkMatch[3].includes('enterprisesg.gov.sg') ||
        bookmarkMatch[3].includes('skillsfuture.sg') ||
        bookmarkMatch[3].includes('tesa.org.sg') ||
        bookmarkMatch[3].includes('sal.org.sg') ||
        bookmarkMatch[3].includes('lawnet.gov.sg') ||
        bookmarkMatch[3].includes('microsoft.com') ||
        bookmarkMatch[3].includes('harvey.ai')
      )) {
        // Convert to bookmark card, keep text as regular paragraph
        if (bookmarkMatch[1].trim()) {
          children.push(createTextNode(bookmarkMatch[1].trim()));
        }
        
        const url = bookmarkMatch[3];
        const title = bookmarkMatch[2];
        
        // Add bookmark card as separate node
        this.nodes.push(createParagraph(children));
        children.length = 0;
        
        this.nodes.push(createBookmark(url, title));
        
        remaining = remaining.slice(bookmarkMatch[0].length);
        if (remaining.startsWith(' ')) remaining = ' ' + remaining.slice(1).trim();
        continue;
      }
      
      // Inline link (not a bookmark card)
      if (linkMatch) {
        if (linkMatch[1].trim()) {
          children.push(createTextNode(linkMatch[1].trim()));
        }
        const url = linkMatch[3];
        const linkText = linkMatch[2];
        
        children.push(createLinkNode(url, [createTextNode(linkText)]));
        
        remaining = remaining.slice(linkMatch[0].length);
        if (remaining.startsWith(' ')) remaining = ' ' + remaining.slice(1).trim();
        continue;
      }
      
      // Check for inline code `code`
      const codeMatch = remaining.match(/^`([^`]+)`/);
      if (codeMatch) {
        children.push(createTextNode(codeMatch[1], FORMAT.CODE));
        remaining = remaining.slice(codeMatch[0].length);
        continue;
      }
      
      // Check for bold **text** or __text__
      const boldMatch = remaining.match(/^\*\*([^*]+)\*\*/) || remaining.match(/^__([^_]+)__/);
      if (boldMatch) {
        children.push(createTextNode(boldMatch[1], FORMAT.BOLD));
        remaining = remaining.slice(boldMatch[0].length);
        continue;
      }
      
      // Check for italic *text* or _text_
      const italicMatch = remaining.match(/^\*([^*]+)\*/) || remaining.match(/^_([^_]+)_/);
      if (italicMatch) {
        children.push(createTextNode(italicMatch[1], FORMAT.ITALIC));
        remaining = remaining.slice(italicMatch[0].length);
        continue;
      }
      
      // Plain text - find next special character
      const nextSpecial = remaining.search(/[`*_\[]/);
      if (nextSpecial === -1) {
        if (remaining.trim()) {
          children.push(createTextNode(remaining));
        }
        break;
      } else if (nextSpecial === 0) {
        // Special char at start, skip it
        children.push(createTextNode(remaining[0]));
        remaining = remaining.slice(1);
      } else {
        children.push(createTextNode(remaining.slice(0, nextSpecial)));
        remaining = remaining.slice(nextSpecial);
      }
    }
    
    return createParagraph(children);
  }
}

// ============================================================================
// LOCAL IMAGE UPLOAD
// ============================================================================

/**
 * Find local image references (![alt](relative-path)) whose files exist next
 * to the markdown file, upload them to Ghost, and rewrite the markdown to use
 * the hosted URLs. Kills the recurring manual workaround (ghost_image_upload
 * MCP + temp copy with rewritten paths) documented across multiple posts.
 *
 * In dry-run mode, only reports what would be uploaded.
 */
async function uploadLocalImages(content, baseDir, { dryRun = false, api = null } = {}) {
  const imageRefs = [...content.matchAll(/!\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)];
  const localImages = [];
  const seen = new Set();
  for (const ref of imageRefs) {
    const src = ref[1];
    if (/^https?:\/\//.test(src) || src.startsWith('data:')) continue;
    if (seen.has(src)) continue;
    seen.add(src);
    const abs = path.resolve(baseDir, decodeURIComponent(src));
    if (fs.existsSync(abs)) localImages.push({ src, abs });
  }

  if (localImages.length === 0) return { content, uploads: [] };

  const uploads = [];
  let updated = content;
  for (const img of localImages) {
    if (dryRun) {
      console.log(`   [dry-run] would upload local image: ${img.src}`);
      uploads.push({ src: img.src, url: '(dry-run)' });
      continue;
    }
    console.log(`   Uploading local image: ${img.src}`);
    const result = await withRetry(`image upload (${img.src})`, () => api.images.upload({ file: img.abs }));
    updated = updated.split(`(${img.src})`).join(`(${result.url})`);
    uploads.push({ src: img.src, url: result.url });
  }
  return { content: updated, uploads };
}

// ============================================================================
// BUILD LEXICAL (conversion + GitHub footer) — pure, testable
// ============================================================================

function buildLexical(content, frontmatter = {}) {
  const converter = new MarkdownToLexical(content);
  const lexicalContent = converter.convert();

  if (!frontmatter.github_folder) return lexicalContent;

  const githubUrl = `https://github.com/houfu/blog-alt-counsel/tree/main/posts/${frontmatter.github_folder}`;
  const footerNodes = [
    createLineBreak(),
    createHeading(3, [createTextNode('Behind the Scenes')]),
    createParagraph([createTextNode('See how this post evolved from initial pitch to final draft. Includes research sources, iterations, and decisions along the way.')]),
    createBookmark(githubUrl, `${frontmatter.github_folder} - blog-alt-counsel`),
  ];

  return {
    root: {
      ...lexicalContent.root,
      children: [...lexicalContent.root.children, ...footerNodes],
    },
  };
}

// ============================================================================
// MAIN PUBLISH FUNCTION
// ============================================================================

async function publishPost(filePath, status = 'draft', { dryRun = false } = {}) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data: frontmatter, content } = matter(fileContent);

    console.log('📝 Parsing post:', frontmatter.title || 'Untitled');
    console.log('   Slug:', frontmatter.slug || '(auto-generated)');
    console.log('   Tags:', frontmatter.tags?.join(', ') || '(none)');
    console.log('   Status:', status);
    console.log('   Featured:', frontmatter.featured || false);
    if (dryRun) console.log('   Mode: DRY RUN (no Ghost API calls)');

    const api = dryRun ? null : getApi();

    // Upload local images first so the converted lexical references hosted URLs
    const { content: contentWithImages, uploads } = await uploadLocalImages(content, path.dirname(filePath), { dryRun, api });
    if (uploads.length > 0) {
      console.log(`   ${uploads.length} local image(s) ${dryRun ? 'detected' : 'uploaded'}`);
    }

    // Convert markdown to lexical
    console.log('\n🔄 Converting markdown to lexical...');
    if (frontmatter.github_folder) console.log('   GitHub folder:', frontmatter.github_folder);
    const finalLexical = buildLexical(contentWithImages, frontmatter);

    if (dryRun) {
      console.log('\n--- LEXICAL JSON (dry run) ---');
      console.log(JSON.stringify(finalLexical));
      return null;
    }

    // Prepare post data
    const postData = {
      title: frontmatter.title || 'Untitled Post',
      lexical: JSON.stringify(finalLexical),
      status: status,
      visibility: frontmatter.visibility || 'public',
      featured: frontmatter.featured || false,
    };

    // Add optional fields
    if (frontmatter.slug) {
      postData.slug = frontmatter.slug;
    }

    if (frontmatter.custom_excerpt) {
      postData.custom_excerpt = frontmatter.custom_excerpt;
    }

    if (frontmatter.tags && Array.isArray(frontmatter.tags)) {
      postData.tags = frontmatter.tags.map(tag => ({ name: tag }));
    }

    if (frontmatter.published_at) {
      postData.published_at = frontmatter.published_at;
    }

    console.log('\n🚀 Publishing to Ghost...');

    let post;
    if (frontmatter.post_id) {
      // Update existing post — fetch it first to get updated_at
      console.log('   Updating existing post:', frontmatter.post_id);
      const existing = await withRetry('post read', () => api.posts.read({ id: frontmatter.post_id }));
      postData.updated_at = existing.updated_at;
      post = await withRetry('post update', () => api.posts.edit({ id: frontmatter.post_id, ...postData }));
    } else {
      post = await withRetry('post create', () => api.posts.add(postData));
    }

    console.log('\n✅ Post published successfully!');
    console.log('   Post ID:', post.id);
    console.log('   URL:', post.url);
    console.log('   Status:', post.status);
    console.log('   Admin URL:', `${GHOST_SITE_URL}/ghost/#/editor/post/${post.id}`);

    return post;

  } catch (error) {
    console.error('\n❌ Error publishing post:', error.message);
    if (error.context) {
      console.error('   Context:', error.context);
    }
    if (error.errors) {
      console.error('   Errors:', JSON.stringify(error.errors, null, 2));
    }
    if (error.response?.body) {
      console.error('   Response body:', JSON.stringify(error.response.body, null, 2));
    }
    console.error('\n   Full error:', JSON.stringify(error, null, 2));
    throw error;
  }
}

// ============================================================================
// CLI
// ============================================================================

if (require.main === module) {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const positional = args.filter((a) => !a.startsWith('--'));

  if (positional.length === 0) {
    console.error('Usage: node scripts/publish-lexical.js <path-to-markdown-file> [status] [--dry-run]');
    console.error('Status: draft (default), published');
    process.exit(1);
  }

  const filePath = path.resolve(positional[0]);
  const status = positional[1] || 'draft';

  if (!fs.existsSync(filePath)) {
    console.error(`Error: File not found: ${filePath}`);
    process.exit(1);
  }

  if (!['draft', 'published'].includes(status)) {
    console.error('Error: Status must be "draft" or "published"');
    process.exit(1);
  }

  publishPost(filePath, status, { dryRun })
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}

module.exports = { publishPost, MarkdownToLexical, buildLexical, uploadLocalImages, withRetry };
