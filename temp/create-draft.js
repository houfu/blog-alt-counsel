const GhostAdminAPI = require('@tryghost/admin-api');
const { LexicalBuilder, text, Link, addGitHubFooter } = require('../.claude/skills/using-ghost-admin-api/scripts/ghost-lexical-single.js');
const matter = require('gray-matter');
const fs = require('fs');

// Initialize Ghost API
const api = new GhostAdminAPI({
  url: process.env.GHOST_SITE_URL,
  key: process.env.GHOST_ADMIN_API_KEY,
  version: process.env.GHOST_API_VERSION || 'v5.0'
});

// Read the markdown file
const markdownPath = process.argv[2];
if (!markdownPath) {
  console.error('Error: Please provide markdown file path as argument');
  process.exit(1);
}

const markdownContent = fs.readFileSync(markdownPath, 'utf-8');

// Parse markdown to lexical
function parseMarkdownToLexical(markdown, frontmatter = {}) {
  const builder = new LexicalBuilder();
  const lines = markdown.split('\n');

  let i = 0;
  let inCodeBlock = false;
  let codeBlockContent = [];
  let codeBlockLanguage = '';

  while (i < lines.length) {
    const line = lines[i];

    // Code blocks
    if (line.startsWith('```')) {
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeBlockLanguage = line.slice(3).trim();
        codeBlockContent = [];
      } else {
        builder.codeBlock(codeBlockContent.join('\n'), codeBlockLanguage);
        inCodeBlock = false;
        codeBlockContent = [];
        codeBlockLanguage = '';
      }
      i++;
      continue;
    }

    if (inCodeBlock) {
      codeBlockContent.push(line);
      i++;
      continue;
    }

    // Headings
    if (line.startsWith('# ')) {
      builder.h1(line.slice(2));
    } else if (line.startsWith('## ')) {
      builder.h2(line.slice(3));
    } else if (line.startsWith('### ')) {
      builder.h3(line.slice(4));
    } else if (line.startsWith('#### ')) {
      builder.h4(line.slice(5));
    } else if (line.startsWith('##### ')) {
      builder.h5(line.slice(6));
    } else if (line.startsWith('###### ')) {
      builder.h6(line.slice(7));
    }
    // Bullet lists
    else if (line.match(/^[-*]\s+/)) {
      const items = [];
      while (i < lines.length && lines[i].match(/^[-*]\s+/)) {
        items.push(parseInlineFormatting(lines[i].replace(/^[-*]\s+/, '')));
        i++;
      }
      builder.bulletList(items);
      continue; // Skip the i++ at the end since we already advanced
    }
    // Numbered lists
    else if (line.match(/^\d+\.\s+/)) {
      const items = [];
      while (i < lines.length && lines[i].match(/^\d+\.\s+/)) {
        items.push(parseInlineFormatting(lines[i].replace(/^\d+\.\s+/, '')));
        i++;
      }
      builder.numberedList(items);
      continue;
    }
    // Paragraphs (non-empty lines)
    else if (line.trim().length > 0) {
      const paragraphItems = parseInlineFormatting(line);
      builder.paragraph(...paragraphItems);
    }

    i++;
  }

  // Add GitHub footer if github_folder exists (BEFORE .build())
  if (frontmatter.github_folder) {
    addGitHubFooter(builder, frontmatter.github_folder);
  }

  return builder.build();
}

// Parse inline formatting (bold, italic, links, code)
function parseInlineFormatting(line) {
  const items = [];
  let remaining = line;

  // Pattern to match: **bold**, *italic*, `code`, [text](url)
  const pattern = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[([^\]]+)\]\(([^)]+)\))/g;

  let lastIndex = 0;
  let match;

  while ((match = pattern.exec(remaining)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      items.push(remaining.substring(lastIndex, match.index));
    }

    const matched = match[0];

    if (matched.startsWith('**') && matched.endsWith('**')) {
      items.push(text.bold(matched.slice(2, -2)));
    } else if (matched.startsWith('*') && matched.endsWith('*')) {
      items.push(text.italic(matched.slice(1, -1)));
    } else if (matched.startsWith('`') && matched.endsWith('`')) {
      items.push(text.code(matched.slice(1, -1)));
    } else if (matched.startsWith('[')) {
      const linkText = match[2];
      const linkUrl = match[3];
      items.push(Link.withText(linkUrl, linkText));
    }

    lastIndex = pattern.lastIndex;
  }

  // Add remaining text
  if (lastIndex < remaining.length) {
    items.push(remaining.substring(lastIndex));
  }

  return items.length > 0 ? items : [remaining];
}

// Extract title from markdown (first H1)
function extractTitle(markdown) {
  const match = markdown.match(/^#\s+(.+)$/m);
  return match ? match[1] : 'Untitled Post';
}

// Generate custom excerpt (first paragraph, ~250-299 chars)
function generateExcerpt(markdown) {
  // Remove title
  const withoutTitle = markdown.replace(/^#\s+.+$/m, '');
  // Get first non-empty paragraph
  const paragraphs = withoutTitle.split('\n\n').filter(p => p.trim().length > 0);

  if (paragraphs.length === 0) return '';

  let excerpt = paragraphs[0].trim();
  // Remove markdown formatting for excerpt
  excerpt = excerpt.replace(/\*\*/g, '').replace(/\*/g, '').replace(/`/g, '');
  excerpt = excerpt.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

  // Trim to ~250-299 characters
  if (excerpt.length > 299) {
    excerpt = excerpt.substring(0, 296) + '...';
  }

  return excerpt;
}

async function createDraft() {
  try {
    // Parse frontmatter and content
    const { data: frontmatter, content: bodyContent } = matter(markdownContent);

    const title = frontmatter.title || extractTitle(bodyContent);
    const customExcerpt = generateExcerpt(bodyContent);
    const lexicalContent = parseMarkdownToLexical(bodyContent, frontmatter);

    console.log('Title:', title);
    console.log('Custom Excerpt:', customExcerpt);
    console.log('\nCreating draft...');

    const postData = {
      title: title,
      lexical: JSON.stringify(lexicalContent),
      status: 'draft',
      custom_excerpt: customExcerpt,
      tags: [], // Will be filled by tag-registry skill
      visibility: 'public',
      featured: false
    };

    const response = await api.posts.add(postData);

    console.log('\n✓ Draft created successfully!');
    console.log('Post ID:', response.id);
    console.log('Post URL:', response.url);
    console.log('Admin URL:', `${process.env.GHOST_SITE_URL}/ghost/#/editor/post/${response.id}`);

    return response;
  } catch (error) {
    console.error('Error creating draft:', error.message);
    if (error.context) {
      console.error('Context:', error.context);
    }
    process.exit(1);
  }
}

createDraft();
