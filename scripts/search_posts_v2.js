#!/usr/bin/env node

/**
 * Ghost Posts Search Script v2 - Using @tryghost/admin-api
 *
 * Improved version using the official Ghost Admin API client for:
 * - More stable authentication
 * - Better error handling
 * - Simplified code structure
 * - Advanced search capabilities
 *
 * Usage:
 *   node search_posts_v2.js [search_term] [options]
 *   npm run search-v2 [search_term] [options]
 *
 * Examples:
 *   node search_posts_v2.js docassemble
 *   node search_posts_v2.js "legal tech" --limit 10
 *   node search_posts_v2.js --tag javascript --published
 *   node search_posts_v2.js --help
 */

const GhostAdminAPI = require('@tryghost/admin-api');
const { loadConfigFromEnv, loadConfigFromFile } = require('./ghost_jwt.js');

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
 * Search posts using Ghost Admin API filters
 */
async function searchPosts(searchOptions = {}) {
    const { api, config } = initializeGhostAPI();

    try {
        console.error(`🔍 Searching posts in ${config.site_url}...`);

        // Build API query parameters
        const queryParams = {
            limit: searchOptions.limit || 'all',
            include: 'tags,authors',
            ...searchOptions.apiFilters
        };

        // Add status filter (published by default, unless specified)
        if (searchOptions.status) {
            queryParams.filter = queryParams.filter
                ? `${queryParams.filter}+status:${searchOptions.status}`
                : `status:${searchOptions.status}`;
        } else if (!searchOptions.includeDrafts) {
            queryParams.filter = queryParams.filter
                ? `${queryParams.filter}+status:published`
                : 'status:published';
        }

        // Fetch posts using the API
        console.error(`📥 Fetching posts with filters...`);
        const posts = await api.posts.browse(queryParams);

        console.error(`📚 Retrieved ${posts.length} posts from Ghost API`);

        // Apply client-side text search if needed
        let filteredPosts = posts;
        if (searchOptions.searchTerm) {
            filteredPosts = posts.filter(post => {
                const searchText = [
                    post.title || '',
                    post.plaintext || '',
                    post.excerpt || '',
                    post.custom_excerpt || '',
                    post.tags?.map(tag => tag.name).join(' ') || ''
                ].join(' ').toLowerCase();

                return searchText.includes(searchOptions.searchTerm.toLowerCase());
            });
        }

        // Display results
        displaySearchResults(filteredPosts, searchOptions);

        return filteredPosts;

    } catch (error) {
        console.error('❌ Search failed:', error.message);

        // Provide helpful error context
        if (error.message.includes('401') || error.message.includes('403')) {
            console.error('🔑 Authentication failed - check your API credentials');
        } else if (error.message.includes('400')) {
            console.error('📝 Invalid search parameters - check your filter syntax');
        }

        process.exit(1);
    }
}

/**
 * Display search results in a formatted way
 */
function displaySearchResults(posts, searchOptions) {
    const { searchTerm, format = 'detailed' } = searchOptions;

    console.log(`\n🎯 Found ${posts.length} posts${searchTerm ? ` matching "${searchTerm}"` : ''}:\n`);

    if (posts.length === 0) {
        console.log('💭 No posts found. Try adjusting your search criteria.');
        return;
    }

    posts.forEach((post, index) => {
        if (format === 'simple') {
            console.log(`${index + 1}. ${post.title}`);
            console.log(`   ${post.url || 'No URL'}\n`);
        } else if (format === 'json') {
            console.log(JSON.stringify(post, null, 2));
        } else {
            // Detailed format (default)
            console.log(`📄 ${index + 1}. ${post.title}`);
            console.log(`   🔗 URL: ${post.url || 'No URL'}`);
            console.log(`   📅 Published: ${post.published_at ? new Date(post.published_at).toLocaleDateString() : 'Draft'}`);
            console.log(`   👤 Author: ${post.primary_author?.name || 'Unknown'}`);
            console.log(`   🏷️  Tags: ${post.tags?.map(tag => tag.name).join(', ') || 'None'}`);
            console.log(`   📊 Status: ${post.status}`);

            if (post.excerpt) {
                console.log(`   📝 Excerpt: ${post.excerpt.substring(0, 150)}${post.excerpt.length > 150 ? '...' : ''}`);
            }

            // Show context if searching for specific term
            if (searchTerm && post.plaintext) {
                const content = post.plaintext.toLowerCase();
                const searchLower = searchTerm.toLowerCase();
                const index = content.indexOf(searchLower);
                if (index !== -1) {
                    const start = Math.max(0, index - 80);
                    const end = Math.min(content.length, index + 80);
                    console.log(`   🎯 Context: ...${post.plaintext.substring(start, end)}...`);
                }
            }
            console.log('');
        }
    });

    // Summary statistics
    if (format === 'detailed' && posts.length > 1) {
        const publishedCount = posts.filter(p => p.status === 'published').length;
        const draftCount = posts.filter(p => p.status === 'draft').length;
        const allTags = [...new Set(posts.flatMap(p => p.tags?.map(t => t.name) || []))];

        console.log('📊 Summary:');
        console.log(`   Published: ${publishedCount}, Drafts: ${draftCount}`);
        console.log(`   Unique tags: ${allTags.slice(0, 10).join(', ')}${allTags.length > 10 ? '...' : ''}`);
    }
}

/**
 * Parse command line arguments
 */
function parseArgs() {
    const args = process.argv.slice(2);
    const options = {
        searchTerm: null,
        limit: null,
        format: 'detailed',
        status: null,
        includeDrafts: false,
        apiFilters: {}
    };

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];

        switch (arg) {
            case '--help':
            case '-h':
                printHelp();
                process.exit(0);
                break;

            case '--limit':
            case '-l':
                options.limit = parseInt(args[++i]);
                if (isNaN(options.limit) || options.limit < 1) {
                    console.error('❌ Limit must be a positive number');
                    process.exit(1);
                }
                break;

            case '--format':
            case '-f':
                options.format = args[++i];
                if (!['detailed', 'simple', 'json'].includes(options.format)) {
                    console.error('❌ Format must be: detailed, simple, or json');
                    process.exit(1);
                }
                break;

            case '--published':
                options.status = 'published';
                break;

            case '--drafts':
                options.status = 'draft';
                break;

            case '--all':
                options.includeDrafts = true;
                break;

            case '--tag':
                const tagName = args[++i];
                if (tagName) {
                    options.apiFilters.filter = options.apiFilters.filter
                        ? `${options.apiFilters.filter}+tag:${tagName}`
                        : `tag:${tagName}`;
                }
                break;

            case '--author':
                const authorSlug = args[++i];
                if (authorSlug) {
                    options.apiFilters.filter = options.apiFilters.filter
                        ? `${options.apiFilters.filter}+author:${authorSlug}`
                        : `author:${authorSlug}`;
                }
                break;

            case '--featured':
                options.apiFilters.filter = options.apiFilters.filter
                    ? `${options.apiFilters.filter}+featured:true`
                    : 'featured:true';
                break;

            case '--filter':
                const customFilter = args[++i];
                if (customFilter) {
                    options.apiFilters.filter = options.apiFilters.filter
                        ? `${options.apiFilters.filter}+${customFilter}`
                        : customFilter;
                }
                break;

            default:
                if (!arg.startsWith('-') && !options.searchTerm) {
                    options.searchTerm = arg;
                } else if (arg.startsWith('-')) {
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
    console.log('Ghost Posts Search v2 - Using @tryghost/admin-api');
    console.log('==================================================');
    console.log('');
    console.log('Usage: node search_posts_v2.js [search_term] [options]');
    console.log('');
    console.log('Arguments:');
    console.log('  search_term              Text to search for in posts (title, content, tags)');
    console.log('');
    console.log('Options:');
    console.log('  --limit, -l <number>     Maximum number of posts to return');
    console.log('  --format, -f <format>    Output format: detailed, simple, json (default: detailed)');
    console.log('  --published              Only show published posts (default)');
    console.log('  --drafts                 Only show draft posts');
    console.log('  --all                    Include both published and draft posts');
    console.log('  --tag <name>             Filter by tag name');
    console.log('  --author <slug>          Filter by author slug');
    console.log('  --featured               Only show featured posts');
    console.log('  --filter <expression>    Custom Ghost API filter expression');
    console.log('  --help, -h               Show this help message');
    console.log('');
    console.log('Examples:');
    console.log('  node search_posts_v2.js docassemble');
    console.log('  node search_posts_v2.js "legal tech" --limit 5');
    console.log('  node search_posts_v2.js --tag javascript --published');
    console.log('  node search_posts_v2.js --author houfu --format simple');
    console.log('  node search_posts_v2.js --filter "published_at:>2024-01-01"');
    console.log('  node search_posts_v2.js --featured --format json');
    console.log('');
    console.log('Environment Variables:');
    console.log('  GHOST_SITE_URL           Ghost site URL');
    console.log('  GHOST_ADMIN_API_KEY      Admin API key (id:secret)');
    console.log('  GHOST_API_VERSION        API version (default: v6.0)');
    console.log('');
    console.log('Configuration:');
    console.log('  Uses environment variables if available, otherwise falls back to settings.json');
}

/**
 * Main execution function
 */
async function main() {
    const options = parseArgs();

    // Default search term if none provided
    if (!options.searchTerm && !options.apiFilters.filter && !options.status) {
        console.error('💡 No search criteria provided. Use --help for usage information.');
        console.error('   Example: node search_posts_v2.js docassemble');
        process.exit(1);
    }

    await searchPosts(options);
}

// Export for use as a module
module.exports = { searchPosts, initializeGhostAPI };

// Run if called directly
if (require.main === module) {
    main().catch(error => {
        console.error('💥 Unexpected error:', error);
        process.exit(1);
    });
}