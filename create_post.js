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
 * Convert markdown text to Ghost Lexical format
 */
function markdownToLexical(markdown) {
    // Simple markdown to lexical converter
    // This is a basic implementation - for production use, consider a proper markdown parser

    const lines = markdown.split('\n');
    const children = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        if (line === '') {
            // Empty line
            continue;
        } else if (line.startsWith('# ')) {
            // H1 Heading
            children.push({
                children: [{
                    detail: 0,
                    format: 0,
                    mode: "normal",
                    style: "",
                    text: line.substring(2),
                    type: "text",
                    version: 1
                }],
                direction: "ltr",
                format: "",
                indent: 0,
                type: "heading",
                version: 1,
                tag: "h1"
            });
        } else if (line.startsWith('## ')) {
            // H2 Heading
            children.push({
                children: [{
                    detail: 0,
                    format: 0,
                    mode: "normal",
                    style: "",
                    text: line.substring(3),
                    type: "text",
                    version: 1
                }],
                direction: "ltr",
                format: "",
                indent: 0,
                type: "heading",
                version: 1,
                tag: "h2"
            });
        } else if (line.startsWith('### ')) {
            // H3 Heading
            children.push({
                children: [{
                    detail: 0,
                    format: 0,
                    mode: "normal",
                    style: "",
                    text: line.substring(4),
                    type: "text",
                    version: 1
                }],
                direction: "ltr",
                format: "",
                indent: 0,
                type: "heading",
                version: 1,
                tag: "h3"
            });
        } else {
            // Regular paragraph
            children.push({
                children: [{
                    detail: 0,
                    format: 0,
                    mode: "normal",
                    style: "",
                    text: line,
                    type: "text",
                    version: 1
                }],
                direction: "ltr",
                format: "",
                indent: 0,
                type: "paragraph",
                version: 1
            });
        }
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