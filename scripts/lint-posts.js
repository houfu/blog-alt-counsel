#!/usr/bin/env node

/**
 * Lint post folders under posts/ for structure, frontmatter, and content rules.
 *
 * Usage: node scripts/lint-posts.js [--strict] [folder ...]
 *   --strict    treat warnings as failures (use for new posts)
 *   folder      limit to specific posts/<folder> names (default: all)
 *
 * Errors (always fail, exit 1):
 *   - invalid YAML frontmatter in the main post file
 *   - horizontal rules (---, ***, ___) in the body of a draft/scheduled post —
 *     these break the markdown-to-lexical conversion (see CLAUDE.md critical
 *     rules). Posts already published only get a warning, since their local
 *     copy may have been synced back from Ghost.
 *
 * Warnings (fail only with --strict):
 *   - no identifiable main post file
 *   - main file missing frontmatter, or missing title/status fields
 *   - main file not named after the folder
 *   - missing discussion.md or pitch.md
 *   - tags not found in the tag registry
 *   - images larger than 500 KB
 */

const fs = require('fs');
const path = require('path');

let matter;
try {
  matter = require('gray-matter');
} catch {
  console.error('Missing dependencies — run `npm install` first.');
  process.exit(1);
}

const ROOT = path.join(__dirname, '..');
const POSTS_DIR = path.join(ROOT, 'posts');
const TAGS_FILE = path.join(ROOT, '.claude/skills/tag-registry/tags.md');

// Supporting files that are never the main post file
const SUPPORT_FILES = /^(discussion|pitch|research|outline.*|examples|notes|README|REVIEWS.*|.*audit.*report.*)\.md$/i;
const DRAFT_VERSION = /^(draft)?v\d+.*\.md$/i;

const strict = process.argv.includes('--strict');
const onlyFolders = process.argv.slice(2).filter((a) => !a.startsWith('--'));

const registryText = fs.existsSync(TAGS_FILE) ? fs.readFileSync(TAGS_FILE, 'utf-8') : null;

let errors = 0;
let warnings = 0;

function err(folder, msg) {
  console.log(`  ERROR  ${folder}: ${msg}`);
  errors++;
}
function warn(folder, msg) {
  console.log(`  warn   ${folder}: ${msg}`);
  warnings++;
}

function findMainFile(folderPath, folder) {
  const mdFiles = fs
    .readdirSync(folderPath)
    .filter((f) => f.endsWith('.md') && !SUPPORT_FILES.test(f) && !DRAFT_VERSION.test(f));

  // Preferred: file named after the folder
  const slugNamed = mdFiles.find((f) => f === `${folder}.md`);
  if (slugNamed) return slugNamed;

  // Otherwise: any candidate with frontmatter containing a title
  const withTitle = mdFiles.filter((f) => {
    try {
      const fm = matter(fs.readFileSync(path.join(folderPath, f), 'utf-8'));
      return fm.data && fm.data.title;
    } catch {
      return false;
    }
  });
  if (withTitle.length === 1) return withTitle[0];
  if (withTitle.length > 1) return withTitle.sort()[0];

  // Last resort: single remaining candidate
  if (mdFiles.length === 1) return mdFiles[0];
  return null;
}

function checkHorizontalRules(body, folder, file, status) {
  const lines = body.split('\n');
  let inCode = false;
  const hits = [];
  lines.forEach((line, i) => {
    if (/^```/.test(line.trim())) inCode = !inCode;
    if (!inCode && /^\s*(-{3,}|\*{3,}|_{3,})\s*$/.test(line)) hits.push(i + 1);
  });
  if (hits.length > 0) {
    const msg = `${file} contains horizontal rule(s) at line(s) ${hits.join(', ')} — these break lexical conversion`;
    if (status === 'draft' || status === 'scheduled') {
      err(folder, msg);
    } else {
      warn(folder, msg);
    }
  }
}

function lintFolder(folder) {
  const folderPath = path.join(POSTS_DIR, folder);
  const files = fs.readdirSync(folderPath);

  if (!files.includes('discussion.md')) warn(folder, 'missing discussion.md');
  if (!files.includes('pitch.md')) warn(folder, 'missing pitch.md');

  const main = findMainFile(folderPath, folder);
  if (!main) {
    warn(folder, 'no identifiable main post file');
    return;
  }
  if (main !== `${folder}.md`) {
    warn(folder, `main file "${main}" is not named after the folder (expected ${folder}.md)`);
  }

  const raw = fs.readFileSync(path.join(folderPath, main), 'utf-8');
  let parsed;
  try {
    parsed = matter(raw);
  } catch (e) {
    err(folder, `${main} has invalid YAML frontmatter: ${e.message}`);
    return;
  }

  const fm = parsed.data || {};
  if (Object.keys(fm).length === 0) {
    warn(folder, `${main} has no frontmatter (expected title, slug, tags, status)`);
  } else {
    if (!fm.title) warn(folder, `${main} frontmatter missing "title"`);
    if (!fm.status) warn(folder, `${main} frontmatter missing "status"`);
    if (registryText && Array.isArray(fm.tags)) {
      for (const tag of fm.tags) {
        if (typeof tag === 'string' && !registryText.includes(tag)) {
          warn(folder, `tag "${tag}" not found in tag registry (tags.md)`);
        }
      }
    }
  }

  checkHorizontalRules(parsed.content, folder, main, fm.status);

  for (const f of files) {
    if (/\.(png|jpg|jpeg|gif|webp)$/i.test(f)) {
      const size = fs.statSync(path.join(folderPath, f)).size;
      if (size > 500 * 1024) {
        warn(folder, `image ${f} is ${Math.round(size / 1024)} KB (>500 KB — compress before publishing)`);
      }
    }
  }
}

const folders = fs
  .readdirSync(POSTS_DIR)
  .filter((f) => fs.statSync(path.join(POSTS_DIR, f)).isDirectory())
  .filter((f) => !f.startsWith('.'))
  .filter((f) => onlyFolders.length === 0 || onlyFolders.includes(f));

console.log(`Linting ${folders.length} post folder(s)...\n`);
folders.forEach(lintFolder);

console.log(`\n${errors} error(s), ${warnings} warning(s)`);
if (errors > 0 || (strict && warnings > 0)) process.exit(1);
