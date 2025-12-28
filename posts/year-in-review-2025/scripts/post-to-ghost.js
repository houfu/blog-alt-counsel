#!/usr/bin/env node

/**
 * Post year-in-review draft to Ghost
 *
 * This script:
 * 1. Reads the draft.md file
 * 2. Converts markdown to Ghost Lexical JSON
 * 3. Creates a draft post via Ghost Admin API with tags and metadata
 *
 * Usage:
 *   node posts/year-in-review-2025/scripts/post-to-ghost.js
 */

const fs = require('fs');
const path = require('path');
const GhostAdminAPI = require('@tryghost/admin-api');

// Import the lexical builder
const { LexicalBuilder, text, Link, ListItem } = require(
  path.join(__dirname, '..', '..', '..', '.claude', 'skills', 'using-ghost-admin-api', 'scripts', 'ghost-lexical-single.js')
);

const POST_FILE = path.join(__dirname, '../draft.md');

/**
 * Initialize Ghost Admin API
 */
function initGhostAPI() {
  const siteUrl = process.env.GHOST_SITE_URL;
  const adminKey = process.env.GHOST_ADMIN_API_KEY;
  const apiVersion = process.env.GHOST_API_VERSION || 'v6.0';

  if (!siteUrl || !adminKey) {
    console.error('❌ Missing Ghost API credentials');
    console.error('Set GHOST_SITE_URL and GHOST_ADMIN_API_KEY environment variables');
    process.exit(1);
  }

  return new GhostAdminAPI({
    url: siteUrl,
    key: adminKey,
    version: apiVersion
  });
}

/**
 * Parse inline markdown formatting (bold, italic, code, links)
 */
function parseInlineContent(rawText) {
  if (!rawText) return [''];

  const parts = [];
  let remaining = rawText;

  // Pattern for: **bold**, *italic*, `code`, [text](url)
  const pattern = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/;

  while (remaining.length > 0) {
    const match = remaining.match(pattern);
    if (!match) {
      parts.push(remaining);
      break;
    }

    // Add text before match
    if (match.index > 0) {
      parts.push(remaining.slice(0, match.index));
    }

    const token = match[0];
    if (token.startsWith('**') && token.endsWith('**')) {
      parts.push(text.bold(token.slice(2, -2)));
    } else if (token.startsWith('*') && token.endsWith('*')) {
      parts.push(text.italic(token.slice(1, -1)));
    } else if (token.startsWith('`') && token.endsWith('`')) {
      parts.push(text.code(token.slice(1, -1)));
    } else if (token.startsWith('[')) {
      const closingBracket = token.indexOf(']');
      const linkText = token.slice(1, closingBracket);
      const url = token.slice(closingBracket + 2, -1);
      parts.push(Link.withText(url, linkText));
    }

    remaining = remaining.slice(match.index + token.length);
  }

  return parts;
}

/**
 * Collect list items from markdown lines
 */
function collectListItems(lines, startIndex, matcher) {
  const items = [];
  let i = startIndex;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();
    if (!trimmed) break;

    const match = trimmed.match(matcher);
    if (!match) break;

    const itemText = trimmed.replace(matcher, '$2').trim();
    items.push(new ListItem(parseInlineContent(itemText)));
    i++;
  }

  return { items, nextIndex: i };
}

/**
 * Convert markdown to Ghost Lexical format
 */
function convertMarkdownToLexical(markdown) {
  const builder = new LexicalBuilder();
  const lines = markdown.split('\n');
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip empty lines
    if (!trimmed) {
      i++;
      continue;
    }

    // Headings
    const headingMatch = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const headingText = headingMatch[2];
      builder.heading(level, parseInlineContent(headingText));
      i++;
      continue;
    }

    // Code blocks
    if (trimmed.startsWith('```')) {
      const language = trimmed.substring(3).trim();
      i++;
      const codeLines = [];
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      if (i < lines.length) {
        i++; // skip closing fence
      }
      builder.codeBlock(codeLines.join('\n'), language || '', '');
      continue;
    }

    // Blockquotes
    if (trimmed.startsWith('> ')) {
      const quoteLines = [];
      while (i < lines.length && lines[i].trim().startsWith('> ')) {
        quoteLines.push(lines[i].trim().substring(2));
        i++;
      }
      builder.paragraph(text.italic(quoteLines.join(' ')));
      continue;
    }

    // Unordered list
    const unorderedMatch = trimmed.match(/^([-*+])\s+(.+)$/);
    if (unorderedMatch) {
      const { items, nextIndex } = collectListItems(lines, i, /^([-*+])\s+(.+)$/);
      builder.bulletList(items);
      i = nextIndex;
      continue;
    }

    // Ordered list
    const orderedMatch = trimmed.match(/^(\d+)\.\s+(.+)$/);
    if (orderedMatch) {
      const { items, nextIndex } = collectListItems(lines, i, /^(\d+)\.\s+(.+)$/);
      builder.numberedList(items);
      i = nextIndex;
      continue;
    }

    // Horizontal rules - skip them (not used in Ghost posts)
    if (/^(-{3,}|\*{3,}|_{3,})$/.test(trimmed)) {
      i++;
      continue;
    }

    // Tables - convert to code block (markdown format)
    if (trimmed.startsWith('|')) {
      const tableLines = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i]);
        i++;
      }
      builder.codeBlock(tableLines.join('\n'), 'markdown', '');
      continue;
    }

    // Regular paragraph
    const paragraphLines = [trimmed];
    i++;
    while (i < lines.length) {
      const next = lines[i];
      const nextTrimmed = next.trim();
      if (
        !nextTrimmed ||
        nextTrimmed.startsWith('```') ||
        nextTrimmed.startsWith('#') ||
        nextTrimmed.startsWith('> ') ||
        nextTrimmed.startsWith('|') ||
        /^([-*+])\s+/.test(nextTrimmed) ||
        /^(\d+)\.\s+/.test(nextTrimmed) ||
        /^(-{3,}|\*{3,}|_{3,})$/.test(nextTrimmed)
      ) {
        break;
      }
      paragraphLines.push(nextTrimmed);
      i++;
    }

    builder.paragraph(...parseInlineContent(paragraphLines.join(' ')));
  }

  return JSON.stringify(builder.build());
}

/**
 * Main function
 */
async function main() {
  console.log('📝 Posting Year-in-Review 2025 to Ghost as draft...\n');

  // Read markdown file
  if (!fs.existsSync(POST_FILE)) {
    console.error(`❌ File not found: ${POST_FILE}`);
    process.exit(1);
  }

  const markdown = fs.readFileSync(POST_FILE, 'utf8');
  console.log(`✓ Read markdown file (${markdown.length} characters)`);

  // Convert to lexical
  const lexical = convertMarkdownToLexical(markdown.trim());
  console.log(`✓ Converted to Ghost Lexical format (${lexical.length} characters)`);

  // Prepare post data
  const title = "October 3 Changed Everything: How One $800 Fine Flipped Singapore's AI Coverage from Adoption to Accountability";
  const customExcerpt = "On October 3, 2025, a Singapore lawyer paid $800 after an AI hallucination reached court. That single sanction flipped legal coverage from 89% adoption focus to 82% accountability warnings in eight weeks.";

  const postData = {
    title,
    slug: 'year-in-review-2025-ai-accountability',
    status: 'draft',
    lexical,
    custom_excerpt: customExcerpt,
    tags: [
      { name: 'AI' },
      { name: 'LegalTech' },
      { name: 'Singapore' },
      { name: 'zeeker' }
    ],
    visibility: 'public',
    featured: false
  };

  console.log('\n📋 Post metadata:');
  console.log(`   Title: ${postData.title}`);
  console.log(`   Slug: ${postData.slug}`);
  console.log(`   Status: ${postData.status}`);
  console.log(`   Tags: ${postData.tags.map(t => t.name).join(', ')}`);
  console.log(`   Excerpt: ${customExcerpt.substring(0, 100)}...`);

  // Initialize API and create post
  const api = initGhostAPI();

  try {
    console.log('\n🚀 Creating draft post on Ghost...');
    const createdPost = await api.posts.add(postData);

    console.log('\n✅ Success! Draft created:');
    console.log(`   Post ID: ${createdPost.id}`);
    console.log(`   URL: ${createdPost.url || 'Not available (draft)'}`);
    console.log(`   Created: ${new Date(createdPost.created_at).toLocaleString()}`);

    console.log('\n📝 Next steps:');
    console.log('   1. Open the draft in Ghost editor');
    console.log('   2. Add chart image from images/ folder (with detailed alt text)');
    console.log('   3. Consider adding bookmark cards for 2-3 key backlinks');
    console.log('   4. Test anchor links if any');
    console.log('   5. Review and publish when ready');

  } catch (error) {
    console.error('\n❌ Failed to create post:', error.message);
    if (error.details) {
      console.error('Error details:', JSON.stringify(error.details, null, 2));
    }
    process.exit(1);
  }
}

main().catch(error => {
  console.error('💥 Unexpected error:', error);
  process.exit(1);
});
