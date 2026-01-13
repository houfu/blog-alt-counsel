#!/usr/bin/env node

/**
 * Consolidate and merge duplicate Ghost tags
 * Usage: node scripts/consolidate_tags.js --from "old-tag" --to "NewTag" [--dry-run]
 *
 * This script will:
 * 1. Find all posts tagged with the "from" tag
 * 2. Replace it with the "to" tag
 * 3. Delete the old tag
 */

const GhostAdminAPI = require('@tryghost/admin-api');
const { loadConfigFromEnv, loadConfigFromDotEnv, loadConfigFromFile } = require('./ghost_jwt.js');
const fs = require('fs');

// Load configuration using shared functions
function loadConfig() {
  // Try environment variables first
  let config = loadConfigFromEnv();
  if (config) {
    return {
      url: config.site_url,
      key: config.admin_api_key,
      version: config.api_version || 'v6.0'
    };
  }

  // Try .env file
  if (fs.existsSync('.env')) {
    try {
      config = loadConfigFromDotEnv('.env');
      return {
        url: config.site_url,
        key: config.admin_api_key,
        version: config.api_version || 'v6.0'
      };
    } catch (error) {
      // Continue to try settings.json
    }
  }

  // Try settings.json
  try {
    config = loadConfigFromFile('settings.json');
    return {
      url: config.site_url,
      key: config.admin_api_key,
      version: config.api_version || 'v6.0'
    };
  } catch (error) {
    throw new Error('Ghost API credentials not found. Set GHOST_SITE_URL and GHOST_ADMIN_API_KEY environment variables, create .env file, or create settings.json');
  }
}

// Parse command line arguments
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    from: null,
    to: null,
    dryRun: false
  };

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--from' && i + 1 < args.length) {
      options.from = args[++i];
    } else if (args[i] === '--to' && i + 1 < args.length) {
      options.to = args[++i];
    } else if (args[i] === '--dry-run') {
      options.dryRun = true;
    } else if (args[i] === '--help') {
      console.log(`
Usage: node scripts/consolidate_tags.js --from "old-tag" --to "NewTag" [--dry-run]

Options:
  --from <tag>     Tag to replace (slug or name)
  --to <tag>       Replacement tag (slug or name)
  --dry-run        Show what would happen without making changes
  --help           Show this help message

Example:
  node scripts/consolidate_tags.js --from "AI" --to "ArtificialIntelligence" --dry-run
  node scripts/consolidate_tags.js --from "legal-tech" --to "LegalTech"
`);
      process.exit(0);
    }
  }

  if (!options.from || !options.to) {
    console.error('Error: Both --from and --to are required');
    console.error('Use --help for usage information');
    process.exit(1);
  }

  return options;
}

async function consolidateTags(fromTag, toTag, dryRun = false) {
  const config = loadConfig();
  const api = new GhostAdminAPI({
    url: config.url,
    key: config.key,
    version: config.version
  });

  try {
    console.log(`\n${'='.repeat(80)}`);
    console.log(`Tag Consolidation: "${fromTag}" → "${toTag}"`);
    console.log(`Mode: ${dryRun ? 'DRY RUN (no changes)' : 'LIVE (will modify posts)'}`);
    console.log(`${'='.repeat(80)}\n`);

    // Find the source tag
    console.log(`1. Looking for tag "${fromTag}"...`);
    const allTags = await api.tags.browse({ limit: 'all' });
    const sourceTag = allTags.find(t =>
      t.slug === fromTag || t.name === fromTag ||
      t.slug.toLowerCase() === fromTag.toLowerCase() ||
      t.name.toLowerCase() === fromTag.toLowerCase()
    );

    if (!sourceTag) {
      console.error(`❌ Tag "${fromTag}" not found`);
      return;
    }

    console.log(`✅ Found tag: "${sourceTag.name}" (slug: ${sourceTag.slug})`);

    // Find or create the target tag
    console.log(`\n2. Looking for target tag "${toTag}"...`);
    let targetTag = allTags.find(t =>
      t.slug === toTag || t.name === toTag ||
      t.slug.toLowerCase() === toTag.toLowerCase() ||
      t.name.toLowerCase() === toTag.toLowerCase()
    );

    if (targetTag) {
      console.log(`✅ Target tag exists: "${targetTag.name}" (slug: ${targetTag.slug})`);
    } else {
      console.log(`⚠️  Target tag "${toTag}" doesn't exist`);
      if (!dryRun) {
        console.log(`   Creating new tag "${toTag}"...`);
        targetTag = await api.tags.add({ name: toTag });
        console.log(`✅ Created: "${targetTag.name}" (slug: ${targetTag.slug})`);
      } else {
        console.log(`   [DRY RUN] Would create tag "${toTag}"`);
        // Create a mock target for dry run
        targetTag = { id: 'mock-id', name: toTag, slug: toTag.toLowerCase() };
      }
    }

    // Find all posts with the source tag
    console.log(`\n3. Finding posts tagged with "${sourceTag.name}"...`);
    const posts = await api.posts.browse({
      limit: 'all',
      filter: `tag:${sourceTag.slug}`,
      include: 'tags'
    });

    console.log(`✅ Found ${posts.length} posts with tag "${sourceTag.name}"`);

    if (posts.length === 0) {
      console.log(`\n⚠️  No posts to update. Cleaning up empty tag...`);
      if (!dryRun) {
        await api.tags.delete({ id: sourceTag.id });
        console.log(`✅ Deleted tag "${sourceTag.name}"`);
      } else {
        console.log(`   [DRY RUN] Would delete tag "${sourceTag.name}"`);
      }
      return;
    }

    // Update posts
    console.log(`\n4. Updating posts...`);
    let updated = 0;
    let skipped = 0;

    for (const post of posts) {
      const postTags = post.tags || [];
      const hasSourceTag = postTags.some(t => t.id === sourceTag.id);
      const hasTargetTag = postTags.some(t => t.id === targetTag.id);

      if (!hasSourceTag) {
        console.log(`   ⏭️  Skipping "${post.title}" (doesn't have source tag)`);
        skipped++;
        continue;
      }

      // Remove source tag, add target tag if not already present
      const newTags = postTags
        .filter(t => t.id !== sourceTag.id)
        .map(t => ({ id: t.id }));

      if (!hasTargetTag && targetTag.id !== 'mock-id') {
        newTags.push({ id: targetTag.id });
      }

      if (dryRun) {
        console.log(`   [DRY RUN] Would update "${post.title}"`);
        console.log(`             Current tags: ${postTags.map(t => t.name).join(', ')}`);
        console.log(`             New tags: ${postTags.filter(t => t.id !== sourceTag.id).map(t => t.name).join(', ')}${hasTargetTag ? '' : ', ' + targetTag.name}`);
        updated++;
      } else {
        try {
          await api.posts.edit({
            id: post.id,
            tags: newTags,
            updated_at: post.updated_at
          });
          console.log(`   ✅ Updated "${post.title}"`);
          updated++;
        } catch (error) {
          console.error(`   ❌ Failed to update "${post.title}": ${error.message}`);
        }
      }
    }

    console.log(`\n5. Cleanup...`);
    if (!dryRun) {
      console.log(`   Deleting old tag "${sourceTag.name}"...`);
      await api.tags.delete({ id: sourceTag.id });
      console.log(`   ✅ Deleted tag "${sourceTag.name}"`);
    } else {
      console.log(`   [DRY RUN] Would delete tag "${sourceTag.name}"`);
    }

    // Summary
    console.log(`\n${'='.repeat(80)}`);
    console.log('Summary:');
    console.log(`  Posts updated: ${updated}`);
    console.log(`  Posts skipped: ${skipped}`);
    console.log(`  Mode: ${dryRun ? 'DRY RUN (no actual changes made)' : 'LIVE (changes committed)'}`);
    console.log(`${'='.repeat(80)}\n`);

    if (dryRun) {
      console.log('✨ Run without --dry-run to apply these changes');
    } else {
      console.log('✅ Tag consolidation complete!');
    }

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    throw error;
  }
}

// Main execution
const options = parseArgs();
consolidateTags(options.from, options.to, options.dryRun)
  .then(() => process.exit(0))
  .catch(error => {
    console.error('Failed:', error.message);
    process.exit(1);
  });
