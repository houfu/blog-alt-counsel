#!/usr/bin/env node

/**
 * Ghost Post Creation Script - Using @tryghost/admin-api
 *
 * Creates Ghost blog posts with support for:
 * - Markdown to Lexical conversion
 * - Draft/published status
 * - Tags and metadata
 * - Newsletter posts
 * - Featured posts
 * - Custom excerpts
 * - Scheduled publishing
 *
 * Usage:
 *   node create_post.js [options]
 *   npm run create-post [options]
 *
 * Examples:
 *   node create_post.js --title "My Post" --content "Hello world"
 *   node create_post.js --file post.md --tags "tech,legal" --draft
 *   node create_post.js --interactive
 *   node create_post.js --template newsletter --title "Weekly Update"
 */

const GhostAdminAPI = require('@tryghost/admin-api');
const { loadConfigFromEnv, loadConfigFromFile } = require('./ghost_jwt.js');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

/**
 * Initialize Ghost Admin API client
 */
function initializeGhostAPI() {
    try {
        // Try environment variables first
        let config = loadConfigFromEnv();
        if (!config) {
            // Fall back to settings.json
            config = loadConfigFromFile('settings.json');
        }

        const api = new GhostAdminAPI({
            url: config.site_url,
            key: config.admin_api_key,
            version: config.api_version || "v6.0"
        });

        console.error(`📡 Connected to ${config.site_url}`);
        return { api, config };
    } catch (error) {
        console.error('❌ Failed to initialize Ghost API:', error.message);
        console.error('💡 Make sure GHOST_SITE_URL and GHOST_ADMIN_API_KEY are set');
        process.exit(1);
    }
}

/**
 * Escape text for safe inclusion in JSON strings
 */
function escapeJsonString(text) {
    return text
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r')
        .replace(/\t/g, '\\t');
}

/**
 * Parse inline formatting (bold, italic, code, links)
 */
function parseInlineFormatting(text) {
    const children = [];
    let currentPos = 0;

    // Regex patterns for formatting
    const patterns = [
        { regex: /\*\*([^*]+)\*\*/g, format: 2, type: 'bold' },      // **bold**
        { regex: /\*([^*]+)\*/g, format: 1, type: 'italic' },        // *italic*
        { regex: /`([^`]+)`/g, format: 16, type: 'code' },           // `code`
        { regex: /\[([^\]]+)\]\(([^)]+)\)/g, format: 0, type: 'link' } // [text](url)
    ];

    // Find all matches and their positions
    const matches = [];
    patterns.forEach(pattern => {
        let match;
        while ((match = pattern.regex.exec(text)) !== null) {
            matches.push({
                start: match.index,
                end: match.index + match[0].length,
                text: match[1],
                url: match[2] || null,
                format: pattern.format,
                type: pattern.type,
                fullMatch: match[0]
            });
        }
    });

    // Sort matches by position
    matches.sort((a, b) => a.start - b.start);

    // Filter out overlapping matches (give priority to earlier ones)
    const validMatches = [];
    matches.forEach(match => {
        const overlaps = validMatches.some(existing =>
            match.start < existing.end && match.end > existing.start
        );
        if (!overlaps) {
            validMatches.push(match);
        }
    });

    // Build text nodes with formatting
    validMatches.forEach(match => {
        // Add text before match
        if (match.start > currentPos) {
            const beforeText = text.substring(currentPos, match.start);
            if (beforeText) {
                children.push({
                    detail: 0,
                    format: 0,
                    mode: "normal",
                    style: "",
                    text: beforeText,
                    type: "text",
                    version: 1
                });
            }
        }

        // Add formatted text
        if (match.type === 'link') {
            children.push({
                detail: 0,
                format: 0,
                mode: "normal",
                style: "",
                text: match.text,
                type: "link",
                url: match.url,
                version: 1
            });
        } else {
            children.push({
                detail: 0,
                format: match.format,
                mode: "normal",
                style: "",
                text: match.text,
                type: "text",
                version: 1
            });
        }

        currentPos = match.end;
    });

    // Add remaining text
    if (currentPos < text.length) {
        const remainingText = text.substring(currentPos);
        if (remainingText) {
            children.push({
                detail: 0,
                format: 0,
                mode: "normal",
                style: "",
                text: remainingText,
                type: "text",
                version: 1
            });
        }
    }

    // If no formatting found, return simple text node
    if (children.length === 0) {
        children.push({
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: text,
            type: "text",
            version: 1
        });
    }

    return children;
}

/**
 * Create a heading node
 */
function createHeading(text, level) {
    return {
        children: parseInlineFormatting(text),
        direction: "ltr",
        format: "",
        indent: 0,
        type: "heading",
        version: 1,
        tag: `h${level}`
    };
}

/**
 * Create a paragraph node
 */
function createParagraph(text) {
    return {
        children: parseInlineFormatting(text),
        direction: "ltr",
        format: "",
        indent: 0,
        type: "paragraph",
        version: 1
    };
}

/**
 * Create an HTML card node (for Ghost cards)
 */
function createHtmlCard(htmlContent) {
    return {
        type: "html",
        version: 1,
        html: htmlContent
    };
}

/**
 * Create a list node
 */
function createList(items, ordered = false) {
    return {
        children: items.map(item => ({
            children: parseInlineFormatting(item.text),
            direction: "ltr",
            format: "",
            indent: item.indent || 0,
            type: "listitem",
            version: 1,
            value: ordered ? item.number : undefined
        })),
        direction: "ltr",
        format: "",
        indent: 0,
        type: "list",
        version: 1,
        listType: ordered ? "number" : "bullet",
        start: 1,
        tag: ordered ? "ol" : "ul"
    };
}

/**
 * Create a quote node
 */
function createQuote(text) {
    return {
        children: parseInlineFormatting(text),
        direction: "ltr",
        format: "",
        indent: 0,
        type: "quote",
        version: 1
    };
}

/**
 * Convert markdown text to Ghost Lexical format - Enhanced Version
 */
function markdownToLexical(markdown) {
    const lines = markdown.split('\n');
    const children = [];
    let i = 0;

    while (i < lines.length) {
        const line = lines[i];
        const trimmedLine = line.trim();

        // Skip empty lines
        if (trimmedLine === '') {
            i++;
            continue;
        }

        // Ghost Cards (HTML comments)
        if (trimmedLine.startsWith('<!--kg-card-begin:')) {
            let cardHtml = '';
            while (i < lines.length && !lines[i].includes('<!--kg-card-end:')) {
                cardHtml += lines[i] + '\n';
                i++;
            }
            if (i < lines.length) {
                cardHtml += lines[i]; // Add the end comment
                children.push(createHtmlCard(cardHtml));
                i++;
            }
            continue;
        }

        // Headings (H1-H6)
        const headingMatch = trimmedLine.match(/^(#{1,6})\s+(.+)$/);
        if (headingMatch) {
            const level = headingMatch[1].length;
            const text = headingMatch[2];
            children.push(createHeading(text, level));
            i++;
            continue;
        }

        // Code blocks (fenced)
        if (trimmedLine.startsWith('```')) {
            const language = trimmedLine.substring(3).trim();
            let codeContent = '';
            i++; // Skip opening fence

            while (i < lines.length && !lines[i].trim().startsWith('```')) {
                codeContent += lines[i] + '\n';
                i++;
            }

            if (i < lines.length) {
                i++; // Skip closing fence
                // Create Ghost code card
                const codeCard = `<!--kg-card-begin: code-->\n\`\`\`${language}\n${codeContent.trim()}\n\`\`\`\n<!--kg-card-end: code-->`;
                children.push(createHtmlCard(codeCard));
            }
            continue;
        }

        // Blockquotes
        if (trimmedLine.startsWith('> ')) {
            let quoteText = trimmedLine.substring(2);
            i++;
            // Collect multiple quote lines
            while (i < lines.length && lines[i].trim().startsWith('> ')) {
                quoteText += ' ' + lines[i].trim().substring(2);
                i++;
            }
            children.push(createQuote(quoteText));
            continue;
        }

        // Lists (unordered and ordered)
        const unorderedMatch = trimmedLine.match(/^([-*+])\s+(.+)$/);
        const orderedMatch = trimmedLine.match(/^(\d+)\.\s+(.+)$/);

        if (unorderedMatch || orderedMatch) {
            const isOrdered = !!orderedMatch;
            const listItems = [];

            while (i < lines.length) {
                const currentLine = lines[i].trim();
                const currentUnordered = currentLine.match(/^([-*+])\s+(.+)$/);
                const currentOrdered = currentLine.match(/^(\d+)\.\s+(.+)$/);

                if ((isOrdered && currentOrdered) || (!isOrdered && currentUnordered)) {
                    const text = isOrdered ? currentOrdered[2] : currentUnordered[2];
                    const number = isOrdered ? parseInt(currentOrdered[1]) : undefined;
                    listItems.push({ text, number, indent: 0 });
                    i++;
                } else if (currentLine === '') {
                    i++;
                    // Check if next non-empty line continues the list
                    let nextLineIndex = i;
                    while (nextLineIndex < lines.length && lines[nextLineIndex].trim() === '') {
                        nextLineIndex++;
                    }
                    if (nextLineIndex >= lines.length) break;

                    const nextLine = lines[nextLineIndex].trim();
                    const nextUnordered = nextLine.match(/^([-*+])\s+(.+)$/);
                    const nextOrdered = nextLine.match(/^(\d+)\.\s+(.+)$/);
                    if (!(isOrdered && nextOrdered) && !(!isOrdered && nextUnordered)) {
                        break;
                    }
                } else {
                    break;
                }
            }

            if (listItems.length > 0) {
                children.push(createList(listItems, isOrdered));
            }
            continue;
        }

        // Horizontal rule
        if (trimmedLine.match(/^(-{3,}|\*{3,}|_{3,})$/)) {
            const hrCard = '<!--kg-card-begin: html--><hr><!--kg-card-end: html-->';
            children.push(createHtmlCard(hrCard));
            i++;
            continue;
        }

        // Regular paragraph
        if (trimmedLine) {
            children.push(createParagraph(trimmedLine));
        }

        i++;
    }

    return JSON.stringify({
        root: {
            children: children,
            direction: "ltr",
            format: "",
            indent: 0,
            type: "root",
            version: 1
        }
    });
}

/**
 * Create post templates
 */
function getPostTemplate(templateName) {
    const templates = {
        blog: {
            title: "New Blog Post",
            content: `# Welcome to your new post

This is a basic blog post template. You can write your content here using markdown syntax.

## Key Features

- Easy to read and write
- Supports formatting
- Great for technical content

## Getting Started

Start writing your content here...`,
            tags: ['blog'],
            newsletter: false
        },

        newsletter: {
            title: "Newsletter - [Date]",
            content: `# Weekly Newsletter

## What's New This Week

- Item 1
- Item 2
- Item 3

## Featured Content

Brief description of featured content...

## Links & Resources

- [Link 1](https://example.com)
- [Link 2](https://example.com)

---

Thanks for reading!

Best regards,
The Team`,
            tags: ['newsletter'],
            newsletter: true
        },

        tech: {
            title: "Technical Post",
            content: `# Technical Deep Dive

## Overview

Brief overview of the technical topic...

## Implementation

\`\`\`javascript
// Code example
function example() {
    console.log("Hello, world!");
}
\`\`\`

## Key Takeaways

- Point 1
- Point 2
- Point 3

## Conclusion

Summary and next steps...`,
            tags: ['tech', 'programming'],
            newsletter: false
        },

        legal: {
            title: "Legal Technology Update",
            content: `# Legal Technology Update

## Introduction

Current state of legal technology...

## Key Developments

### Technology Trends
- Trend 1
- Trend 2

### Regulatory Updates
- Update 1
- Update 2

## Practical Applications

How these changes affect practice...

## Conclusion

Summary and recommendations...`,
            tags: ['legal', 'technology'],
            newsletter: false
        }
    };

    return templates[templateName] || templates.blog;
}

/**
 * Interactive post creation
 */
async function createPostInteractively() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const question = (prompt) => new Promise(resolve => rl.question(prompt, resolve));

    try {
        console.log('📝 Interactive Post Creation');
        console.log('============================\n');

        const title = await question('Post title: ');
        const templateName = await question('Template (blog/newsletter/tech/legal) [blog]: ') || 'blog';
        const status = await question('Status (draft/published) [draft]: ') || 'draft';
        const tags = await question('Tags (comma-separated): ');
        const excerpt = await question('Custom excerpt (optional): ');
        const featured = await question('Featured post? (y/n) [n]: ');
        const newsletter = await question('Send as newsletter? (y/n) [n]: ');

        const template = getPostTemplate(templateName);

        const postData = {
            title: title || template.title,
            lexical: markdownToLexical(template.content),
            status: status,
            tags: tags ? tags.split(',').map(tag => ({ name: tag.trim() })) : template.tags.map(tag => ({ name: tag })),
            excerpt: excerpt || undefined,
            featured: featured.toLowerCase() === 'y',
            newsletter: newsletter.toLowerCase() === 'y' || template.newsletter
        };

        console.log('\n📋 Post Preview:');
        console.log('================');
        console.log(`Title: ${postData.title}`);
        console.log(`Status: ${postData.status}`);
        console.log(`Tags: ${postData.tags.map(t => t.name).join(', ')}`);
        console.log(`Featured: ${postData.featured}`);
        console.log(`Newsletter: ${postData.newsletter}`);

        const confirm = await question('\nCreate this post? (y/n): ');

        if (confirm.toLowerCase() === 'y') {
            return postData;
        } else {
            console.log('❌ Post creation cancelled');
            return null;
        }
    } finally {
        rl.close();
    }
}

/**
 * Create a Ghost post
 */
async function createPost(postData) {
    const { api, config } = initializeGhostAPI();

    try {
        console.error('✍️ Creating post...');

        // Validate required fields
        if (!postData.title) {
            throw new Error('Post title is required');
        }

        if (!postData.lexical && !postData.html) {
            throw new Error('Post content (lexical or html) is required');
        }

        // Create the post
        const createdPost = await api.posts.add(postData);

        console.log('\n✅ Post created successfully!');
        console.log('============================');
        console.log(`📝 Title: ${createdPost.title}`);
        console.log(`🆔 ID: ${createdPost.id}`);
        console.log(`📊 Status: ${createdPost.status}`);
        console.log(`🔗 URL: ${createdPost.url || 'Not available (draft)'}`);
        console.log(`📅 Created: ${new Date(createdPost.created_at).toLocaleString()}`);

        if (createdPost.tags && createdPost.tags.length > 0) {
            console.log(`🏷️ Tags: ${createdPost.tags.map(tag => tag.name).join(', ')}`);
        }

        if (createdPost.status === 'draft') {
            console.log(`\n💡 To publish this post later, use:`);
            console.log(`   node create_post.js --update ${createdPost.id} --publish`);
        }

        return createdPost;

    } catch (error) {
        console.error('❌ Failed to create post:', error.message);

        if (error.details) {
            console.error('Error details:', JSON.stringify(error.details, null, 2));
        }

        // Provide helpful error context
        if (error.message.includes('401') || error.message.includes('403')) {
            console.error('🔑 Authentication failed - check your API credentials');
        } else if (error.message.includes('422')) {
            console.error('📝 Validation error - check your post data format');
        }

        process.exit(1);
    }
}

/**
 * Update an existing post
 */
async function updatePost(postId, updates) {
    const { api } = initializeGhostAPI();

    try {
        console.error(`📝 Updating post ${postId}...`);

        const updatedPost = await api.posts.edit({
            id: postId,
            ...updates
        });

        console.log('✅ Post updated successfully!');
        console.log(`📝 Title: ${updatedPost.title}`);
        console.log(`📊 Status: ${updatedPost.status}`);
        console.log(`🔗 URL: ${updatedPost.url || 'Not available'}`);

        return updatedPost;

    } catch (error) {
        console.error('❌ Failed to update post:', error.message);
        process.exit(1);
    }
}

/**
 * Parse command line arguments
 */
function parseArgs() {
    const args = process.argv.slice(2);
    const options = {
        title: null,
        content: null,
        file: null,
        template: 'blog',
        status: 'draft',
        tags: [],
        excerpt: null,
        featured: false,
        newsletter: false,
        interactive: false,
        update: null,
        publish: false
    };

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];

        switch (arg) {
            case '--help':
            case '-h':
                printHelp();
                process.exit(0);
                break;

            case '--title':
            case '-t':
                options.title = args[++i];
                break;

            case '--content':
            case '-c':
                options.content = args[++i];
                break;

            case '--file':
            case '-f':
                options.file = args[++i];
                break;

            case '--template':
                options.template = args[++i];
                break;

            case '--draft':
                options.status = 'draft';
                break;

            case '--publish':
                options.status = 'published';
                options.publish = true;
                break;

            case '--scheduled':
                options.status = 'scheduled';
                options.published_at = args[++i];
                break;

            case '--tags':
                options.tags = args[++i].split(',').map(tag => tag.trim());
                break;

            case '--excerpt':
                options.excerpt = args[++i];
                break;

            case '--featured':
                options.featured = true;
                break;

            case '--newsletter':
                options.newsletter = true;
                break;

            case '--interactive':
            case '-i':
                options.interactive = true;
                break;

            case '--update':
            case '-u':
                options.update = args[++i];
                break;

            default:
                if (arg.startsWith('-')) {
                    console.error(`❌ Unknown option: ${arg}`);
                    console.error('Use --help for usage information');
                    process.exit(1);
                }
                break;
        }
    }

    return options;
}

/**
 * Print help information
 */
function printHelp() {
    console.log('Ghost Post Creation Script - Using @tryghost/admin-api');
    console.log('=====================================================');
    console.log('');
    console.log('Usage: node create_post.js [options]');
    console.log('');
    console.log('Content Options:');
    console.log('  --title, -t <title>      Post title');
    console.log('  --content, -c <text>     Post content (markdown)');
    console.log('  --file, -f <path>        Read content from markdown file');
    console.log('  --template <type>        Use template: blog, newsletter, tech, legal');
    console.log('  --excerpt <text>         Custom excerpt');
    console.log('');
    console.log('Publishing Options:');
    console.log('  --draft                  Create as draft (default)');
    console.log('  --publish                Publish immediately');
    console.log('  --scheduled <datetime>   Schedule for publication (ISO format)');
    console.log('');
    console.log('Metadata Options:');
    console.log('  --tags <tag1,tag2>       Comma-separated tags');
    console.log('  --featured               Mark as featured post');
    console.log('  --newsletter             Send as newsletter');
    console.log('');
    console.log('Interactive Mode:');
    console.log('  --interactive, -i        Interactive post creation');
    console.log('');
    console.log('Update Options:');
    console.log('  --update, -u <id>        Update existing post by ID');
    console.log('');
    console.log('Other Options:');
    console.log('  --help, -h               Show this help message');
    console.log('');
    console.log('Examples:');
    console.log('  node create_post.js --interactive');
    console.log('  node create_post.js --title "My Post" --content "Hello world" --publish');
    console.log('  node create_post.js --file post.md --tags "tech,legal" --featured');
    console.log('  node create_post.js --template newsletter --title "Weekly Update"');
    console.log('  node create_post.js --update 123abc --publish');
    console.log('');
    console.log('Environment Variables:');
    console.log('  GHOST_SITE_URL           Ghost site URL');
    console.log('  GHOST_ADMIN_API_KEY      Admin API key (id:secret)');
    console.log('  GHOST_API_VERSION        API version (default: v6.0)');
}

/**
 * Main execution function
 */
async function main() {
    const options = parseArgs();

    try {
        // Handle update mode
        if (options.update) {
            const updates = {};
            if (options.publish) updates.status = 'published';
            if (options.title) updates.title = options.title;
            if (options.content) updates.lexical = markdownToLexical(options.content);
            if (options.file) {
                const content = fs.readFileSync(options.file, 'utf8');
                updates.lexical = markdownToLexical(content);
            }

            await updatePost(options.update, updates);
            return;
        }

        // Interactive mode
        if (options.interactive) {
            const postData = await createPostInteractively();
            if (postData) {
                await createPost(postData);
            }
            return;
        }

        // Build post data
        let postData = {};

        // Content source priority: file > content > template
        if (options.file) {
            if (!fs.existsSync(options.file)) {
                console.error(`❌ File not found: ${options.file}`);
                process.exit(1);
            }
            const content = fs.readFileSync(options.file, 'utf8');
            postData.lexical = markdownToLexical(content);

            // Extract title from filename if not provided
            if (!options.title) {
                options.title = path.basename(options.file, path.extname(options.file))
                    .replace(/[-_]/g, ' ')
                    .replace(/\b\w/g, l => l.toUpperCase());
            }
        } else if (options.content) {
            postData.lexical = markdownToLexical(options.content);
        } else {
            // Use template
            const template = getPostTemplate(options.template);
            postData.lexical = markdownToLexical(template.content);
            if (!options.title) options.title = template.title;
            if (options.tags.length === 0) options.tags = template.tags;
            if (!options.newsletter && template.newsletter) options.newsletter = template.newsletter;
        }

        // Apply other options
        postData.title = options.title;
        postData.status = options.status;

        if (options.tags.length > 0) {
            postData.tags = options.tags.map(tag => ({ name: tag }));
        }

        if (options.excerpt) postData.excerpt = options.excerpt;
        if (options.featured) postData.featured = options.featured;
        if (options.newsletter) postData.newsletter = options.newsletter;
        if (options.published_at) postData.published_at = options.published_at;

        // Validate required fields
        if (!postData.title) {
            console.error('❌ Post title is required. Use --title or --interactive');
            process.exit(1);
        }

        await createPost(postData);

    } catch (error) {
        console.error('💥 Unexpected error:', error.message);
        process.exit(1);
    }
}

// Export for use as a module
module.exports = { createPost, updatePost, markdownToLexical, getPostTemplate };

// Run if called directly
if (require.main === module) {
    main();
}