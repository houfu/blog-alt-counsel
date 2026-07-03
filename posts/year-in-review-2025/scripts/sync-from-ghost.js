#!/usr/bin/env node

/**
 * Sync published post from Ghost back to local markdown
 *
 * This script fetches the published version from Ghost and converts
 * the lexical JSON back to markdown for the local draft.md file.
 */

const fs = require('fs');
const path = require('path');
const GhostAdminAPI = require('@tryghost/admin-api');

const POST_ID = '69512c9acad1da0001e2595f';
const OUTPUT_FILE = path.join(__dirname, '../draft.md');

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
 * Convert lexical JSON node to markdown
 */
function nodeToMarkdown(node, depth = 0) {
  if (!node) return '';

  const type = node.type;
  let result = '';

  // Handle text nodes
  if (type === 'extended-text' || type === 'text') {
    let text = node.text || '';
    const format = node.format || 0;

    // Apply formatting
    if (format & 1) text = `*${text}*`;      // italic
    if (format & 2) text = `**${text}**`;    // bold
    if (format & 8) text = `\`${text}\``;    // code

    return text;
  }

  // Handle links
  if (type === 'link') {
    const linkText = node.children ? node.children.map(c => nodeToMarkdown(c)).join('') : '';
    return `[${linkText}](${node.url})`;
  }

  // Get children content
  const childrenText = node.children ? node.children.map(c => nodeToMarkdown(c, depth + 1)).join('') : '';

  // Handle different node types
  switch (type) {
    case 'extended-heading':
    case 'heading':
      const level = node.tag ? parseInt(node.tag.substring(1)) : 1;
      return '#'.repeat(level) + ' ' + childrenText + '\n\n';

    case 'paragraph':
      return childrenText + '\n\n';

    case 'extended-quote':
    case 'quote':
      return '> ' + childrenText + '\n\n';

    case 'code':
      const language = node.language || '';
      const code = node.code || '';
      return '```' + language + '\n' + code + '\n```\n\n';

    case 'list':
      if (node.listType === 'bullet') {
        return node.children.map(item => '- ' + nodeToMarkdown(item, depth)).join('') + '\n';
      } else {
        return node.children.map((item, i) => `${i + 1}. ` + nodeToMarkdown(item, depth)).join('') + '\n';
      }

    case 'listitem':
      return childrenText + '\n';

    case 'image':
      const alt = node.alt || '';
      const caption = node.caption || '';
      const src = node.src || '';
      let imgMarkdown = `![${alt}](${src})`;
      if (caption) {
        imgMarkdown += `\n*${caption}*`;
      }
      return imgMarkdown + '\n\n';

    default:
      return childrenText;
  }
}

/**
 * Convert lexical JSON to markdown
 */
function lexicalToMarkdown(lexicalJson) {
  const lexical = JSON.parse(lexicalJson);
  const root = lexical.root;

  if (!root || !root.children) {
    console.error('Invalid lexical JSON structure');
    return '';
  }

  return root.children.map(node => nodeToMarkdown(node)).join('');
}

async function main() {
  console.log('📥 Syncing published post from Ghost...\n');

  const api = initGhostAPI();

  try {
    // Fetch the published post
    console.log('Fetching post from Ghost API...');
    const post = await api.posts.read({ id: POST_ID }, { formats: ['lexical'] });

    console.log('✓ Retrieved post:', post.title);
    console.log('✓ Status:', post.status);
    console.log('✓ Published:', post.published_at || 'Not yet published');

    // Convert lexical to markdown
    console.log('\nConverting lexical to markdown...');
    const markdown = lexicalToMarkdown(post.lexical);

    // Write to file
    fs.writeFileSync(OUTPUT_FILE, markdown);
    console.log('✓ Saved to:', OUTPUT_FILE);
    console.log('✓ Length:', markdown.length, 'characters');

    console.log('\n✅ Sync complete!');
    console.log('\n📝 Changes to review:');
    console.log('   - Images added in Ghost editor are now referenced in markdown');
    console.log('   - Any formatting changes made in Ghost are now reflected');
    console.log('   - Review the updated draft.md and commit changes if appropriate');

  } catch (error) {
    console.error('\n❌ Failed to sync:', error.message);
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
