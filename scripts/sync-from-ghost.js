#!/usr/bin/env node

/**
 * Sync Ghost post metadata back to local markdown frontmatter
 * Usage: node -r dotenv/config scripts/sync-from-ghost.js <slug-or-post-id>
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const GhostAdminAPI = require('@tryghost/admin-api');

const GHOST_SITE_URL = process.env.GHOST_SITE_URL;
const GHOST_ADMIN_API_KEY = process.env.GHOST_ADMIN_API_KEY;
const GHOST_API_VERSION = process.env.GHOST_API_VERSION || 'v6.0';

if (!GHOST_SITE_URL || !GHOST_ADMIN_API_KEY) {
  console.error('Error: Missing Ghost API credentials.');
  console.error('Set GHOST_SITE_URL and GHOST_ADMIN_API_KEY in .env or environment.');
  process.exit(1);
}

const api = new GhostAdminAPI({
  url: GHOST_SITE_URL,
  key: GHOST_ADMIN_API_KEY,
  version: GHOST_API_VERSION
});

function isGhostId(arg) {
  return /^[a-f0-9]{24}$/.test(arg);
}

async function fetchPost(arg) {
  const include = 'tags';
  if (isGhostId(arg)) {
    return api.posts.read({ id: arg, include });
  }
  return api.posts.read({ slug: arg, include });
}

function findLocalFile(ghostSlug, ghostId) {
  const postsDir = path.join(__dirname, '..', 'posts');
  if (!fs.existsSync(postsDir)) {
    return null;
  }

  const folders = fs.readdirSync(postsDir).filter(f =>
    fs.statSync(path.join(postsDir, f)).isDirectory()
  );

  // Scan all markdown files (excluding discussion.md, pitch.md, research.md, etc.)
  const candidates = [];
  for (const folder of folders) {
    const folderPath = path.join(postsDir, folder);
    const mdFiles = fs.readdirSync(folderPath).filter(f =>
      f.endsWith('.md') && !['discussion.md', 'pitch.md', 'research.md', 'outline.md'].includes(f)
    );

    for (const mdFile of mdFiles) {
      const filePath = path.join(folderPath, mdFile);
      try {
        const content = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(content);
        candidates.push({ filePath, folder, mdFile, frontmatter: data });
      } catch {
        // Skip files that fail to parse
      }
    }
  }

  // Primary: frontmatter slug matches
  const bySlug = candidates.find(c => c.frontmatter.slug === ghostSlug);
  if (bySlug) return bySlug.filePath;

  // Secondary: frontmatter post_id or ghost_id matches
  const byId = candidates.find(c =>
    c.frontmatter.post_id === ghostId || c.frontmatter.ghost_id === ghostId
  );
  if (byId) return byId.filePath;

  // Fallback: filename resembles slug
  const byFilename = candidates.find(c => {
    const stem = c.mdFile.replace(/\.md$/, '');
    return stem === ghostSlug || ghostSlug.includes(stem) || stem.includes(ghostSlug.split('-').slice(0, 3).join('-'));
  });
  if (byFilename) return byFilename.filePath;

  // Not found — print available folders
  console.error(`No matching local file found for slug "${ghostSlug}" (id: ${ghostId}).`);
  console.error('\nAvailable post folders:');
  for (const folder of folders) {
    console.error(`  posts/${folder}/`);
  }
  return null;
}

function buildNewFrontmatter(existing, ghost) {
  const updated = { ...existing };
  updated.title = ghost.title;
  updated.slug = ghost.slug;
  updated.status = ghost.status;
  updated.post_id = ghost.id;

  if (ghost.published_at) {
    updated.published_at = ghost.published_at;
  }
  if (ghost.tags && ghost.tags.length > 0) {
    updated.tags = ghost.tags.map(t => t.name);
  }
  if (ghost.feature_image) {
    updated.feature_image = ghost.feature_image;
  }
  if (ghost.custom_excerpt) {
    updated.custom_excerpt = ghost.custom_excerpt;
  }

  return updated;
}

function printDiff(oldFm, newFm) {
  const allKeys = new Set([...Object.keys(oldFm), ...Object.keys(newFm)]);
  let changes = 0;

  for (const key of allKeys) {
    const oldVal = JSON.stringify(oldFm[key]);
    const newVal = JSON.stringify(newFm[key]);
    if (oldVal !== newVal) {
      if (oldVal === undefined) {
        console.log(`  + ${key}: ${newVal}`);
      } else {
        console.log(`  ~ ${key}: ${oldVal} -> ${newVal}`);
      }
      changes++;
    }
  }

  if (changes === 0) {
    console.log('  (no changes)');
  }
  return changes;
}

async function main() {
  const arg = process.argv[2];
  if (!arg) {
    console.error('Usage: node -r dotenv/config scripts/sync-from-ghost.js <slug-or-post-id>');
    process.exit(1);
  }

  console.log(`Fetching post from Ghost: ${arg}`);
  let post;
  try {
    post = await fetchPost(arg);
  } catch (err) {
    console.error(`Failed to fetch post: ${err.message}`);
    process.exit(1);
  }

  console.log(`Found: "${post.title}" (${post.slug})\n`);

  const localPath = findLocalFile(post.slug, post.id);
  if (!localPath) {
    process.exit(1);
  }

  console.log(`Local file: ${localPath}\n`);

  const fileContent = fs.readFileSync(localPath, 'utf-8');
  const { data: oldFrontmatter, content: body } = matter(fileContent);

  const newFrontmatter = buildNewFrontmatter(oldFrontmatter, post);

  console.log('Frontmatter changes:');
  const changes = printDiff(oldFrontmatter, newFrontmatter);

  if (changes > 0) {
    const updatedFile = matter.stringify(body, newFrontmatter);
    fs.writeFileSync(localPath, updatedFile, 'utf-8');
    console.log(`\nUpdated: ${localPath}`);
  } else {
    console.log('\nNo updates needed.');
  }

  console.log('\nReminder: Content changes made in Ghost editor are NOT synced automatically.');
  console.log('Review and manually update the post markdown body if substantial edits were made in Ghost.');
}

main();
