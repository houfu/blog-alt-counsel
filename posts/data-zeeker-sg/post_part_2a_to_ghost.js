#!/usr/bin/env node

/**
 * Post part-2a-architecture.md to Ghost as a draft
 *
 * This script:
 * 1. Reads the markdown file and parses frontmatter
 * 2. Converts markdown to Ghost Lexical JSON
 * 3. Creates a draft post via Ghost Admin API
 *
 * Usage:
 *   node posts/data-zeeker-sg/post_part_2a_to_ghost.js
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const GhostAdminAPI = require('@tryghost/admin-api');

// Import the lexical builder
const { LexicalBuilder, text, Link, ListItem } = require(
  path.join(__dirname, '..', '..', '.claude', 'skills', 'using-ghost-admin-api', 'scripts', 'ghost-lexical-single.js')
);

const POST_FILE = path.join(__dirname, 'part-2a-architecture.md');

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

    // Blockquotes (including Ghost Editor Notes)
    if (trimmed.startsWith('> ')) {
      const quoteLines = [];
      while (i < lines.length && lines[i].trim().startsWith('> ')) {
        quoteLines.push(lines[i].trim().substring(2));
        i++;
      }
      // For now, keep as blockquote - user will manually convert Toggle/Callout cards
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
 * Build tags array from frontmatter tags plus extras
 */
function buildTags(frontMatterTags = []) {
  const extraTags = ['data.zeeker.sg', 'Architecture', 'Solo Builder'];

  const tagSet = new Set(
    [...frontMatterTags, ...extraTags]
      .map(tag => tag && tag.toString().trim())
      .filter(Boolean)
  );

  return Array.from(tagSet).map(name => ({ name }));
}

/**
 * Main function
 */
async function main() {
  console.log('📝 Posting Part 2a: Technical Architecture to Ghost as draft...\n');

  // Read and parse markdown file
  if (!fs.existsSync(POST_FILE)) {
    console.error(`❌ File not found: ${POST_FILE}`);
    process.exit(1);
  }

  const raw = fs.readFileSync(POST_FILE, 'utf8');
  const { data: frontMatter, content } = matter(raw);

  console.log(`✓ Read markdown file (${content.length} characters)`);

  // Convert to lexical
  const lexical = convertMarkdownToLexical(content.trim());
  console.log(`✓ Converted to Ghost Lexical format (${lexical.length} characters)`);

  // Prepare post data
  const title = frontMatter.title || 'Building data.zeeker.sg: Technical Architecture';
  const customExcerpt = "The complete technical stack behind Singapore's first public legal news API: zeeker CLI standardizes data collection, Datasette serves SQLite straight from S3, and canned queries make legal research accessible without SQL. Built solo, runs on $6-12/month, designed to scale from 1 to 40+ sources.";

  const postData = {
    title,
    slug: 'data-zeeker-sg-part-2a-architecture',
    status: 'draft',
    lexical,
    custom_excerpt: customExcerpt,
    tags: buildTags(frontMatter.tags),
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
    console.log('   2. Convert Toggle Cards: Table of Contents, CLI Workflow, JavaScript Enhancements, Visual Design');
    console.log('   3. Convert Callout Cards: Key Metrics, Cost Comparison, Developer Time Savings');
    console.log('   4. Add 11 screenshots (see ghost-editor-checklist.md)');
    console.log('   5. Remove all > **GHOST EDITOR NOTE** comments');
    console.log('   6. Review and publish when ready');

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
