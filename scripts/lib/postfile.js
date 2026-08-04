/**
 * Shared main-post-file resolution for posts/<folder>/.
 *
 * Extracted from lint-posts.js so hooks stop re-deriving the main file with
 * divergent regexes (post-edit-lint, pre-publish-gate, workflow-gate all need
 * the same answer).
 */

const fs = require('fs');
const path = require('path');

let matter;
try {
  matter = require('gray-matter');
} catch {
  matter = null;
}

// Supporting files that are never the main post file
const SUPPORT_FILES = /^(discussion|pitch|research|outline.*|examples|notes|README|REVIEWS.*|.*audit.*report.*)\.md$/i;
const DRAFT_VERSION = /^(draft)?v\d+.*\.md$/i;

function findMainFile(folderPath, folder) {
  const mdFiles = fs
    .readdirSync(folderPath)
    .filter((f) => f.endsWith('.md') && !SUPPORT_FILES.test(f) && !DRAFT_VERSION.test(f));

  // Preferred: file named after the folder
  const slugNamed = mdFiles.find((f) => f === `${folder}.md`);
  if (slugNamed) return slugNamed;

  // Otherwise: any candidate with frontmatter containing a title
  if (matter) {
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
  }

  // Last resort: single remaining candidate
  if (mdFiles.length === 1) return mdFiles[0];
  return null;
}

/** True when a filename is a working document, never published content. */
function isSupportFile(basename) {
  return SUPPORT_FILES.test(basename) || DRAFT_VERSION.test(basename);
}

module.exports = { findMainFile, isSupportFile, SUPPORT_FILES, DRAFT_VERSION };
