#!/usr/bin/env node

/**
 * Fetch all tags from Ghost Admin API
 * Usage: node scripts/fetch_tags.js [--verbose]
 */

const GhostAdminAPI = require('@tryghost/admin-api');
const fs = require('fs');
const path = require('path');

// Load configuration from environment or settings.json
function loadConfig() {
  // Try environment variables first
  if (process.env.GHOST_SITE_URL && process.env.GHOST_ADMIN_API_KEY) {
    return {
      url: process.env.GHOST_SITE_URL,
      key: process.env.GHOST_ADMIN_API_KEY,
      version: process.env.GHOST_API_VERSION || 'v5.0'
    };
  }

  // Try settings.json
  const settingsPath = path.join(__dirname, '..', 'settings.json');
  if (fs.existsSync(settingsPath)) {
    const settings = JSON.parse(fs.readFileSync(settingsPath, 'utf8'));
    return {
      url: settings.GHOST_SITE_URL,
      key: settings.GHOST_ADMIN_API_KEY,
      version: settings.GHOST_API_VERSION || 'v5.0'
    };
  }

  throw new Error('Ghost API credentials not found. Set GHOST_SITE_URL and GHOST_ADMIN_API_KEY environment variables or create settings.json');
}

async function fetchAllTags(verbose = false) {
  const config = loadConfig();

  const api = new GhostAdminAPI({
    url: config.url,
    key: config.key,
    version: config.version
  });

  try {
    // Fetch all tags with post counts
    const tags = await api.tags.browse({
      limit: 'all',
      include: 'count.posts',
      order: 'count.posts DESC'
    });

    if (verbose) {
      console.log(`\nTotal tags: ${tags.length}\n`);
      console.log('Tags (sorted by post count):');
      console.log('=' .repeat(80));

      tags.forEach((tag, index) => {
        const postCount = tag.count?.posts || 0;
        console.log(`${(index + 1).toString().padStart(3)}. ${tag.name.padEnd(40)} [${postCount} posts] ${tag.slug}`);
      });
    } else {
      // JSON output for programmatic use
      const tagData = tags.map(tag => ({
        name: tag.name,
        slug: tag.slug,
        description: tag.description || '',
        postCount: tag.count?.posts || 0,
        visibility: tag.visibility
      }));

      console.log(JSON.stringify(tagData, null, 2));
    }

    return tags;
  } catch (error) {
    console.error('Error fetching tags:', error.message);
    throw error;
  }
}

// Parse command line arguments
const args = process.argv.slice(2);
const verbose = args.includes('--verbose') || args.includes('-v');

fetchAllTags(verbose)
  .then(() => process.exit(0))
  .catch(error => {
    console.error('Failed:', error.message);
    process.exit(1);
  });
