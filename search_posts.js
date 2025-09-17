const jwt = require('jsonwebtoken');
const https = require('https');
const fs = require('fs');

/**
 * Load Ghost configuration from environment variables or settings.json
 * Environment variables take precedence for Docker-friendly configuration
 */
function loadConfig() {
    // Try environment variables first (Docker-friendly)
    const envConfig = {
        site_url: process.env.GHOST_SITE_URL,
        admin_api_key: process.env.GHOST_ADMIN_API_KEY,
        api_version: process.env.GHOST_API_VERSION || 'v6.0'
    };
    
    // Check if we have required environment variables
    if (envConfig.site_url && envConfig.admin_api_key) {
        // Derive admin_api_url if not explicitly set
        envConfig.admin_api_url = process.env.GHOST_ADMIN_API_URL || 
                                   `${envConfig.site_url}/ghost/api/admin`;
        
        console.error('📡 Using configuration from environment variables');
        return { ghost: envConfig };
    }
    
    // Fall back to settings.json
    try {
        const settings = require('./settings.json');
        console.error('📄 Using configuration from settings.json');
        return settings;
    } catch (error) {
        console.error('❌ Error: No valid configuration found');
        console.error('');
        console.error('Either set environment variables:');
        console.error('  export GHOST_SITE_URL="https://yourblog.com"');
        console.error('  export GHOST_ADMIN_API_KEY="your_id:your_secret"');
        console.error('');
        console.error('Or create settings.json with your Ghost credentials');
        process.exit(1);
    }
}

// Load configuration
const settings = loadConfig();

// Validate configuration
if (!settings.ghost || !settings.ghost.admin_api_key || !settings.ghost.site_url) {
    console.error('❌ Error: Invalid Ghost configuration');
    console.error('Required: admin_api_key and site_url');
    process.exit(1);
}

// Split the key to get ID and secret
const [id, secret] = settings.ghost.admin_api_key.split(':');

if (!id || !secret) {
    console.error('❌ Error: Admin API key must be in format "id:secret"');
    process.exit(1);
}

// Create JWT token
const token = jwt.sign({}, Buffer.from(secret, 'hex'), {
    keyid: id,
    algorithm: 'HS256',
    expiresIn: '5m',
    audience: '/admin/'
});

// Function to make HTTPS request
function makeRequest(url) {
    return new Promise((resolve, reject) => {
        const req = https.get(url, {
            headers: {
                'Authorization': `Ghost ${token}`,
                'Content-Type': 'application/json',
                'Accept-Version': settings.ghost.api_version || 'v6.0'
            }
        }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                if (res.statusCode === 200) {
                    resolve(JSON.parse(data));
                } else {
                    reject(new Error(`HTTP ${res.statusCode}: ${data}`));
                }
            });
        });
        req.on('error', reject);
    });
}

// Function to search posts with customizable search term
function searchInPosts(posts, searchTerm = 'docassemble') {
    return posts.filter(post => {
        const searchText = (post.title + ' ' + post.plaintext + ' ' + post.excerpt).toLowerCase();
        return searchText.includes(searchTerm.toLowerCase());
    });
}

// Fetch all posts and search
async function searchPosts(searchTerm = 'docassemble') {
    try {
        console.log(`🔍 Searching posts in ${settings.ghost.site_url}...`);
        
        let allPosts = [];
        let page = 1;
        let hasMore = true;
        
        // Determine the API URL
        const apiUrl = settings.ghost.admin_api_url || 
                      `${settings.ghost.site_url}/ghost/api/admin`;
        
        while (hasMore) {
            const url = `${apiUrl}/posts/?limit=15&page=${page}&include=tags`;
            console.error(`📄 Fetching page ${page}...`);
            
            const response = await makeRequest(url);
            allPosts = allPosts.concat(response.posts);
            
            if (response.meta.pagination.pages <= page) {
                hasMore = false;
            } else {
                page++;
            }
        }
        
        console.error(`📚 Found ${allPosts.length} total posts`);
        
        // Search for specified term in posts
        const matchingPosts = searchInPosts(allPosts, searchTerm);
        
        console.log(`Found ${matchingPosts.length} posts mentioning "${searchTerm}":`);
        
        matchingPosts.forEach(post => {
            console.log(`\n- Title: ${post.title}`);
            console.log(`  URL: ${post.url}`);
            console.log(`  Published: ${new Date(post.published_at).toLocaleDateString()}`);
            console.log(`  Tags: ${post.tags?.map(tag => tag.name).join(', ') || 'None'}`);
            
            // Show excerpt with search term context
            const content = post.plaintext.toLowerCase();
            const searchLower = searchTerm.toLowerCase();
            const index = content.indexOf(searchLower);
            if (index !== -1) {
                const start = Math.max(0, index - 100);
                const end = Math.min(content.length, index + 100);
                console.log(`  Context: ...${post.plaintext.substring(start, end)}...`);
            }
        });
        
        return matchingPosts;
        
    } catch (error) {
        console.error('❌ Error:', error.message);
        
        // Provide helpful debugging information
        if (error.message.includes('401') || error.message.includes('403')) {
            console.error('');
            console.error('🔑 Authentication failed. Check your:');
            console.error('  - GHOST_ADMIN_API_KEY (or settings.json admin_api_key)');
            console.error('  - GHOST_SITE_URL (or settings.json site_url)');
        } else if (error.message.includes('ENOTFOUND') || error.message.includes('ECONNREFUSED')) {
            console.error('');
            console.error('🌐 Network error. Check your:');
            console.error('  - Internet connection');
            console.error('  - GHOST_SITE_URL is correct and accessible');
        }
        
        process.exit(1);
    }
}

// Allow command line usage with custom search term
const searchTerm = process.argv[2] || 'docassemble';

if (require.main === module) {
    searchPosts(searchTerm);
}

// Export for use as a module
module.exports = { searchPosts, loadConfig };
