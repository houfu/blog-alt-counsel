#!/usr/bin/env node

/**
 * Conversion test for scripts/publish-lexical.js — the first test coverage
 * the markdown-to-lexical converter has ever had. Runs offline (no Ghost
 * credentials needed) against tests/fixtures/sample-post.md and asserts the
 * lexical output contains the node types and content the blog relies on.
 *
 * Run: node tests/test-lexical.js   (or `npm test`)
 */

const fs = require('fs');
const path = require('path');

const { buildLexical, uploadLocalImages } = require('../scripts/publish-lexical.js');

let matter;
try {
  matter = require('gray-matter');
} catch {
  console.error('Missing dependencies — run `npm install` first.');
  process.exit(1);
}

const FIXTURE = path.join(__dirname, 'fixtures', 'sample-post.md');

let failures = 0;
function check(name, cond) {
  if (cond) {
    console.log(`  ✓ ${name}`);
  } else {
    console.log(`  ✗ ${name}`);
    failures++;
  }
}

function walk(node, visit) {
  visit(node);
  for (const child of node.children || []) walk(child, visit);
}

async function main() {
  const { data: frontmatter, content } = matter(fs.readFileSync(FIXTURE, 'utf-8'));
  const lexical = buildLexical(content, frontmatter);

  // Structure is valid, serializable JSON with a root
  const json = JSON.stringify(lexical);
  check('output serializes to JSON', typeof json === 'string' && json.length > 0);
  check('has root node', lexical.root && lexical.root.type === 'root');

  const types = {};
  const texts = [];
  const links = [];
  const formats = [];
  walk(lexical.root, (n) => {
    types[n.type] = (types[n.type] || 0) + 1;
    if (n.type === 'extended-text') {
      texts.push(n.text);
      formats.push(n.format);
    }
    if (n.type === 'link') links.push(n.url);
    if (n.type === 'bookmark') links.push(n.url);
  });
  const allText = texts.join(' ');

  // Block-level node coverage
  check('headings converted (h1 + h2)', types['extended-heading'] >= 3); // 2 fixture + 1 footer
  check('paragraphs converted', types['paragraph'] >= 4);
  check('bullet + numbered lists converted', types['list'] === 2 && types['listitem'] === 4);
  check('code block converted with language', types['codeblock'] === 1);
  check('table became an HTML card', types['html'] === 1);
  check('paywall marker converted', types['paywall'] === 1);
  check('images converted (local + remote)', types['image'] === 2);

  // Inline formatting
  check('bold format present', formats.includes(2));
  check('italic format present', formats.includes(1));
  check('inline code format present', formats.includes(16));

  // Links — including the line-leading link the old regex destroyed
  check('line-leading link survives as a link node', links.includes('https://example.com/leading'));
  check('mid-sentence link converted', links.includes('https://example.com/mid'));
  check('alt-counsel URL became a bookmark card', types['bookmark'] >= 1 && links.some((u) => u.includes('alt-counsel.com')));
  check('link text not leaked into plain text', !allText.includes('](https://example.com/leading'));

  // GitHub footer from github_folder frontmatter
  check('GitHub footer heading appended', allText.includes('Behind the Scenes'));
  check('GitHub footer bookmark targets the post folder', links.some((u) => u.includes('github.com/houfu/blog-alt-counsel/tree/main/posts/fixture-test')));

  // Table content escaped & present
  const htmlNode = [];
  walk(lexical.root, (n) => n.type === 'html' && htmlNode.push(n.html));
  check('table HTML contains header and cells', htmlNode[0] && htmlNode[0].includes('<th>Column A</th>') && htmlNode[0].includes('<td>cell 1</td>'));

  // uploadLocalImages: dry-run detects exactly the local image, leaves remote alone
  fs.writeFileSync(path.join(__dirname, 'fixtures', 'fixture-image.png'), Buffer.from([0x89, 0x50, 0x4e, 0x47]));
  try {
    const { uploads } = await uploadLocalImages(content, path.join(__dirname, 'fixtures'), { dryRun: true });
    check('dry-run detects the local image only', uploads.length === 1 && uploads[0].src === 'fixture-image.png');
  } finally {
    fs.unlinkSync(path.join(__dirname, 'fixtures', 'fixture-image.png'));
  }

  console.log(`\n${failures === 0 ? 'All conversion tests passed.' : `${failures} test(s) FAILED.`}`);
  process.exit(failures === 0 ? 0 : 1);
}

main().catch((e) => {
  console.error('Test run crashed:', e);
  process.exit(1);
});
