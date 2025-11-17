#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const GhostAdminAPI = require('@tryghost/admin-api');
const { LexicalBuilder, text, Link } = require('../../.claude/skills/using-ghost-admin-api/scripts/ghost-lexical-single.js');

// Read newsletter content
const content = fs.readFileSync('newsletter-part-2a.md', 'utf8');
const lines = content.split('\n');

// Extract title (remove "# Newsletter: " prefix)
const title = lines[0].replace('# Newsletter: ', '').trim();

// Build lexical content from markdown
const builder = new LexicalBuilder();

// Add content paragraphs
builder.paragraph(
  "I built Singapore's legal news API with architecture choices that fail textbook reviews: SQLite in production. Static files instead of live databases. Zero custom API code."
);

builder.paragraph(
  "The result? Infrastructure that scales from 1 to 40 sources at 2-4 hours per source (down from 8-14 hours), runs on $6-12/month (vs. $45-95 traditional), and enables non-developers to contribute data."
);

builder.paragraph(
  "Writing about it turned out harder than building it. Two reviewers, conflicting advice: \"5,200 words = never read\" vs. \"Don't cut depth—it's your differentiator.\" Three rewrites, one split into two posts, and finally accepting that for technical architecture, depth = credibility."
);

builder.h2("How it works");

builder.paragraph(
  "Legal data is 99.9% read-heavy. This unlocked an unconventional stack:"
);

builder.numberedList([
  "zeeker CLI standardizes scraping, database scaffolding, deployment—one pattern for all sources",
  "SQLite files as static artifacts deployed to S3 (not live databases)",
  "Datasette auto-generates the API from those files—zero custom code, instant REST endpoints",
  "Atomic updates via file replacement—corruption-proof, free rollback, zero downtime"
]);

builder.paragraph(
  "Architecture complexity matches actual requirements, not imagined scale."
);

builder.paragraph(
  text.bold("Unexpected benefit:"),
  " Contributors submit data files instead of code. No merge conflicts, no dependency hell, no testing interference. A law student can contribute without being a software engineer."
);

builder.h2("The writing challenge");

builder.paragraph(
  "Presenting technical architecture means serving two audiences—legal technologists who want every implementation detail, and lawyers who need \"should I even try this?\""
);

builder.paragraph(
  "I brainstormed three presentation approaches (Problem→Solution, Stack Walkthrough, Three Breakthroughs). Chose the stack walkthrough: Data Layer (CLI), API Layer (Datasette), UX Layer (canned queries). Then split the 45-minute original draft into Part 2a (architecture) and Part 2b (lessons). Better to separate concerns than force everyone through both."
);

builder.paragraph(
  "What I learned: For builders, depth = credibility. The solution to \"too long\" isn't cutting substance—it's better navigation."
);

builder.paragraph(
  text.bold("The full post"),
  " covers: three-layer architecture, design decisions with tradeoffs (SQLite vs PostgreSQL, Datasette vs CKAN, static vs live deployment), cost breakdowns, and why each choice works specifically for legal data's read-heavy patterns."
);

builder.paragraph(
  "Whether you're building legal infrastructure or evaluating vendor claims about what's \"necessary,\" these patterns help distinguish actual requirements from enterprise cargo-culting."
);

builder.paragraph(
  "Read the complete architecture: ",
  Link.withText("https://www.alt-counsel.com/data-zeeker-sg-part-2a-architecture/", "Building data.zeeker.sg: Technical Architecture")
);

// Build lexical JSON
const lexicalContent = builder.build();

// Initialize Ghost API
const api = new GhostAdminAPI({
  url: process.env.GHOST_SITE_URL || 'https://alt-counsel.ghost.io',
  key: process.env.GHOST_ADMIN_API_KEY || '68c59403de89380001211d23:7865995a641755b66747885e877bb757c1bee846b9f88b6cfd2f4c73c2c72202',
  version: 'v6.0'
});

// Create post with metadata
const postData = {
  title: title,
  lexical: JSON.stringify(lexicalContent),
  status: 'draft',
  custom_excerpt: 'Writing about the technical architecture of data.zeeker.sg turned out harder than building it. Two reviewers, conflicting advice, three rewrites, and finally accepting that depth = credibility.',
  tags: [
    { name: 'newsletter' },
    { name: 'zeeker' },
    { name: 'technical' },
    { name: 'architecture' }
  ],
  visibility: 'public',
  featured: false
};

console.log('Creating newsletter draft with LexicalBuilder...\n');

// Create the post
api.posts.add(postData)
  .then((response) => {
    console.log('✓ Newsletter draft created successfully!');
    console.log('─────────────────────────────────────');
    console.log('Post ID:', response.id);
    console.log('Title:', response.title);
    console.log('Status:', response.status);
    console.log('URL:', response.url);
    console.log('\nEdit URL:', `https://alt-counsel.ghost.io/ghost/#/editor/post/${response.id}`);
  })
  .catch((error) => {
    console.error('✗ Error creating draft:');
    console.error(error);
    process.exit(1);
  });
