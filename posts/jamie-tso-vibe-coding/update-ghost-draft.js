#!/usr/bin/env node

/**
 * Update Jamie Tso post on Ghost with proper lexical formatting
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const GhostAdminAPI = require('@tryghost/admin-api');

// Import the lexical builder
const { LexicalBuilder, text, Link, ListItem } = require(
  path.join(__dirname, '..', '..', '.claude', 'skills', 'using-ghost-admin-api', 'scripts', 'ghost-lexical-single.js')
);

const POST_FILE = path.join(__dirname, 'i-build-infrastructure-jamie-vibe-codes-tools.md');
const POST_ID = '6966f4c3b20ad70001e1ddb4';

/**
 * Initialize Ghost Admin API
 */
function initGhostAPI() {
  const siteUrl = process.env.GHOST_SITE_URL;
  const adminKey = process.env.GHOST_ADMIN_API_KEY;
  const apiVersion = process.env.GHOST_API_VERSION || 'v6.0';

  if (!siteUrl || !adminKey) {
    console.error('❌ Missing Ghost API credentials');
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

    // Horizontal rules - skip them (not used in Ghost posts per guidelines)
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
 * Add GitHub footer to markdown content
 */
function addGitHubFooter(markdown, githubFolder) {
  if (!githubFolder) return markdown;

  const repoUrl = `https://github.com/houfu/blog-alt-counsel/tree/main/posts/${githubFolder}`;

  return markdown + `\n\n## View on GitHub\n\nThis post is open source. View the source files, discussion notes, and revision history on GitHub.\n\n[View on GitHub](${repoUrl})`;
}

/**
 * Main function
 */
async function main() {
  console.log('📝 Updating Jamie Tso post on Ghost with proper lexical formatting...\n');

  // Read markdown file
  if (!fs.existsSync(POST_FILE)) {
    console.error(`❌ File not found: ${POST_FILE}`);
    process.exit(1);
  }

  const fileContent = fs.readFileSync(POST_FILE, 'utf8');
  const { data: frontmatter, content } = matter(fileContent);

  console.log(`✓ Read markdown file (${content.length} characters)`);
  console.log(`✓ Title: ${frontmatter.title}`);

  // Add GitHub footer
  const contentWithFooter = addGitHubFooter(content, frontmatter.github_folder);

  // Convert to lexical
  const lexical = convertMarkdownToLexical(contentWithFooter.trim());
  console.log(`✓ Converted to Ghost Lexical format (${lexical.length} characters)`);

  // Get current post to get updated_at
  const api = initGhostAPI();

  try {
    console.log('\n🔍 Fetching current post...');
    const currentPost = await api.posts.read({ id: POST_ID });
    console.log(`✓ Current post updated_at: ${currentPost.updated_at}`);

    // Prepare update data
    const updateData = {
      lexical,
      updated_at: currentPost.updated_at  // Required to prevent conflicts
    };

    console.log('\n🚀 Updating post on Ghost...');
    const updatedPost = await api.posts.edit({ id: POST_ID, ...updateData });

    console.log('\n✅ Success! Post updated:');
    console.log(`   Post ID: ${updatedPost.id}`);
    console.log(`   Title: ${updatedPost.title}`);
    console.log(`   Slug: ${updatedPost.slug}`);
    console.log(`   Status: ${updatedPost.status}`);
    console.log(`   Admin URL: https://alt-counsel.ghost.io/ghost/#/editor/post/${updatedPost.id}`);
    console.log('\n📝 Please review the post in Ghost editor to verify formatting.');

  } catch (error) {
    console.error('\n❌ Failed to update post:', error.message);
    if (error.details) {
      console.error('Error details:', JSON.stringify(error.details, null, 2));
    }
    if (error.context) {
      console.error('Context:', error.context);
    }
    process.exit(1);
  }
}

main().catch(error => {
  console.error('💥 Unexpected error:', error);
  process.exit(1);
});
