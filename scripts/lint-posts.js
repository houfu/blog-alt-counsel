#!/usr/bin/env node

/**
 * Lint post folders under posts/ for structure, frontmatter, and content rules.
 *
 * Usage: node scripts/lint-posts.js [--strict] [--fix] [folder ...]
 *   --strict    treat warnings as failures (use for new posts)
 *   --fix       apply safe autofixes (currently: append ?ref=<slug> to
 *               internal alt-counsel.com links that lack it)
 *   folder      limit to specific posts/<folder> names (default: all)
 *
 * Errors (always fail, exit 1):
 *   - invalid YAML frontmatter in the main post file
 *   - horizontal rules (---, ***, ___) in the body of a draft/scheduled post —
 *     these break the markdown-to-lexical conversion (see CLAUDE.md critical
 *     rules). Posts already published only get a warning, since their local
 *     copy may have been synced back from Ghost.
 *   - <bookmark> tags in a draft/scheduled post — publish-lexical.js does not
 *     support the syntax and passes it through as literal text (documented
 *     publish defect, 2026-07-30)
 *
 * Warnings (fail only with --strict):
 *   - no identifiable main post file
 *   - main file missing frontmatter, or missing title/status fields
 *   - main file not named after the folder
 *   - missing discussion.md or pitch.md
 *   - tags not found in the tag registry (exact match against the canonical list)
 *   - images larger than 500 KB
 *   - internal alt-counsel.com links missing ?ref=<slug> (measured adherence
 *     before this check: 3 of 25 links)
 *   - banned phrases (clichés / AI slop, ported from the audit-tone wordlist)
 *   - prose mechanics: undescriptive link text, bare-URL link text, unlabeled
 *     code fences, malformed tables (ported from audit-accessibility /
 *     audit-readability, which are retired as agents)
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

const { findMainFile } = require('./lib/postfile');
const { proseWords, sectionWords, headingSlug } = require('./lib/wordcount');

const ROOT = path.join(__dirname, '..');
const POSTS_DIR = path.join(ROOT, 'posts');
const TAGS_FILE = path.join(ROOT, '.claude/skills/tag-registry/tags.md');

const strict = process.argv.includes('--strict');
const fix = process.argv.includes('--fix');
const onlyFolders = process.argv.slice(2).filter((a) => !a.startsWith('--'));

// Canonical tags: exact match against `- **TagName** - ...` lines only, so a
// tag can't pass by appearing somewhere in the registry's prose.
function loadCanonicalTags() {
  if (!fs.existsSync(TAGS_FILE)) return null;
  const tags = new Set();
  for (const line of fs.readFileSync(TAGS_FILE, 'utf-8').split('\n')) {
    const m = line.match(/^- \*\*([^*]+)\*\*/);
    if (m) tags.add(m[1].trim());
  }
  return tags.size > 0 ? tags : null;
}
const canonicalTags = loadCanonicalTags();

// Clichés and AI-slop phrases, ported from the audit-tone checklist so the
// audit agents spend their round on judgment calls instead of grep work.
// Conservative list: only phrases that are near-certain defects in this blog.
const BANNED_PHRASES = [
  /game[- ]chang(er|ing)/i,
  /cutting[- ]edge/i,
  /paradigm shift/i,
  /think outside the box/i,
  /low[- ]hanging fruit/i,
  /move the needle/i,
  /rapidly evolving/i,
  /in today's (fast-paced |digital )?(landscape|world)/i,
  /it'?s no secret/i,
  /navigate the complexit/i,
  /delve into/i,
  /revolutioniz/i,
];

const BAD_LINK_TEXT = /^(click here|here|read more|this link|link|this)$/i;

let errors = 0;
let warnings = 0;
let fixes = 0;

function err(folder, msg) {
  console.log(`  ERROR  ${folder}: ${msg}`);
  errors++;
}
function warn(folder, msg) {
  console.log(`  warn   ${folder}: ${msg}`);
  warnings++;
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

// <bookmark url="..."/> is not supported by publish-lexical.js — it passes
// through as literal text in the published post. Use a standalone markdown
// link to alt-counsel.com instead (the converter turns those into cards).
function checkBookmarkTags(body, folder, file, status) {
  const lines = body.split('\n');
  let inCode = false;
  const hits = [];
  lines.forEach((line, i) => {
    if (/^```/.test(line.trim())) inCode = !inCode;
    if (!inCode && /<bookmark\b/i.test(line)) hits.push(i + 1);
  });
  if (hits.length > 0) {
    const msg =
      `${file} uses <bookmark> tag(s) at line(s) ${hits.join(', ')} — publish-lexical.js does not support this ` +
      `syntax and publishes it as literal text. Use a standalone markdown link to alt-counsel.com instead.`;
    if (status === 'draft' || status === 'scheduled') {
      err(folder, msg);
    } else {
      warn(folder, msg);
    }
  }
}

// Internal links need ?ref=<slug> so Ghost analytics attribute the traffic to
// the referring post. Autofixable with --fix.
function checkInternalLinkRefs(raw, body, folder, file, slug) {
  const lines = body.split('\n');
  let inCode = false;
  const missing = [];
  lines.forEach((line, i) => {
    if (/^```/.test(line.trim())) inCode = !inCode;
    if (inCode) return;
    for (const m of line.matchAll(/\]\((https?:\/\/(?:www\.)?alt-counsel\.com\/[^)]*)\)/g)) {
      if (!/[?&]ref=/.test(m[1])) missing.push({ line: i + 1, url: m[1] });
    }
  });
  if (missing.length === 0) return;

  if (fix && slug) {
    let fixed = raw;
    for (const { url } of missing) {
      const withRef = url.includes('?') ? `${url}&ref=${slug}` : `${url.replace(/\/?$/, '/')}?ref=${slug}`;
      fixed = fixed.split(`(${url})`).join(`(${withRef})`);
    }
    fs.writeFileSync(path.join(POSTS_DIR, folder, file), fixed);
    console.log(`  fixed  ${folder}: appended ?ref=${slug} to ${missing.length} internal link(s) in ${file}`);
    fixes += missing.length;
    return;
  }
  warn(
    folder,
    `${file} has ${missing.length} internal link(s) without ?ref=${slug || '<slug>'} at line(s) ` +
      `${missing.map((m) => m.line).join(', ')} — run with --fix to autofix`
  );
}

function checkBannedPhrases(body, folder, file) {
  const lines = body.split('\n');
  let inCode = false;
  const hits = [];
  lines.forEach((line, i) => {
    if (/^```/.test(line.trim())) inCode = !inCode;
    if (inCode) return;
    for (const re of BANNED_PHRASES) {
      const m = line.match(re);
      if (m) hits.push(`"${m[0]}" (line ${i + 1})`);
    }
  });
  if (hits.length > 0) {
    warn(folder, `${file} contains banned phrase(s): ${hits.join(', ')} — clichés/AI slop, rewrite in plain words`);
  }
}

// Mechanical prose checks ported from the retired audit-accessibility and
// audit-readability agents (whose findings were ~90% these).
function checkProseMechanics(body, folder, file) {
  const lines = body.split('\n');
  let inCode = false;
  const badLinks = [];
  const bareUrls = [];
  const unlabeledFences = [];
  const badTables = [];

  lines.forEach((line, i) => {
    const fence = line.trim().match(/^```(.*)$/);
    if (fence) {
      if (!inCode && fence[1].trim() === '') unlabeledFences.push(i + 1);
      inCode = !inCode;
      return;
    }
    if (inCode) return;

    for (const m of line.matchAll(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g)) {
      if (BAD_LINK_TEXT.test(m[1].trim())) badLinks.push(`line ${i + 1} ("${m[1]}")`);
      else if (/^https?:\/\//.test(m[1].trim())) bareUrls.push(i + 1);
    }

    // A table's header row must be followed by a |---| separator row
    if (/^\s*\|.*\|\s*$/.test(line) && !/^\s*\|[\s:|-]+\|\s*$/.test(line)) {
      const prev = i > 0 ? lines[i - 1] : '';
      const next = i + 1 < lines.length ? lines[i + 1] : '';
      const prevIsTable = /^\s*\|.*\|\s*$/.test(prev);
      const nextIsSeparator = /^\s*\|[\s:|-]+\|\s*$/.test(next);
      if (!prevIsTable && !nextIsSeparator) badTables.push(i + 1);
    }
  });

  if (badLinks.length > 0) {
    warn(folder, `${file} has undescriptive link text at ${badLinks.join(', ')} — say what the link is`);
  }
  if (bareUrls.length > 0) {
    warn(folder, `${file} uses a bare URL as link text at line(s) ${bareUrls.join(', ')} — use descriptive text`);
  }
  if (unlabeledFences.length > 0) {
    warn(folder, `${file} has code fence(s) without a language tag at line(s) ${unlabeledFences.join(', ')}`);
  }
  if (badTables.length > 0) {
    warn(folder, `${file} has table row(s) without a |---| header separator near line(s) ${badTables.join(', ')}`);
  }
}

// Mechanical checks the content-quality audit used to repeat on most posts
// (heading skips: 8/19 audited posts; missing alt text: 7/19; GitHub
// terminology: 4/19). Linting them frees the auditor for judgment calls.
function checkMechanicalDefects(body, folder, file) {
  const lines = body.split('\n');
  let inCode = false;
  let prevLevel = 0;
  const headingSkips = [];
  const missingAlt = [];
  let badGithub = 0;

  lines.forEach((line, i) => {
    if (/^```/.test(line.trim())) inCode = !inCode;
    if (inCode) return;

    const heading = line.match(/^(#{1,6})\s/);
    if (heading) {
      const level = heading[1].length;
      if (prevLevel > 0 && level > prevLevel + 1) headingSkips.push(`line ${i + 1} (h${prevLevel}->h${level})`);
      prevLevel = level;
    }

    for (const img of line.matchAll(/!\[([^\]]*)\]\(/g)) {
      if (img[1].trim() === '') missingAlt.push(i + 1);
    }

    // "Github"/"github" in prose (not URLs or code spans)
    const noUrls = line.replace(/\(https?:\/\/[^)]*\)|`[^`]*`|https?:\/\/\S+/g, '');
    badGithub += (noUrls.match(/\bGithub\b/g) || []).length;
  });

  if (headingSkips.length > 0) {
    warn(folder, `${file} skips heading levels: ${headingSkips.join(', ')}`);
  }
  if (missingAlt.length > 0) {
    warn(folder, `${file} has image(s) with empty alt text at line(s) ${missingAlt.join(', ')}`);
  }
  if (badGithub > 0) {
    warn(folder, `${file} spells "Github" (${badGithub}x) — house style is "GitHub"`);
  }
}

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * The pitch contract (workflow-audit-2026-08 Part 1). pitch.md frontmatter
 * declares word_budget / thesis_keywords / protected_lines; the body carries
 * exactly one "## Pitch" section of one paragraph, ≤200 words. Contract
 * checks are opt-in for legacy posts: they run only when pitch.md has
 * frontmatter, or the post is still draft/scheduled (no flag day).
 * Returns the pitch frontmatter (or null).
 */
function checkPitchContract(folderPath, folder, status) {
  const pitchPath = path.join(folderPath, 'pitch.md');
  if (!fs.existsSync(pitchPath)) return null;

  let parsed;
  try {
    parsed = matter(fs.readFileSync(pitchPath, 'utf-8'));
  } catch (e) {
    warn(folder, `pitch.md has invalid YAML frontmatter: ${e.message}`);
    return null;
  }
  const fm = parsed.data || {};
  const optedIn = Object.keys(fm).length > 0 || status === 'draft' || status === 'scheduled';
  if (!optedIn) return fm;

  if (!fm.word_budget) {
    warn(folder, 'pitch.md declares no word_budget — the draft has no length contract');
  }

  const content = parsed.content;
  const heads = [...content.matchAll(/^##\s+(.+)$/gm)];
  const idx = heads.findIndex((h) => /^Pitch\s*$/.test(h[1].trim()));
  if (idx === -1) {
    warn(
      folder,
      'pitch.md has no "## Pitch" section — the contract can\'t be located (current pitch under "## Pitch"; superseded versions belong in git history)'
    );
  } else {
    const dupes = heads.filter((h) => /^Pitch\b/i.test(h[1].trim())).length;
    if (dupes > 1) {
      warn(folder, `pitch.md has ${dupes} "## Pitch…" headings — keep ONE current pitch; git holds the history`);
    }
    const start = heads[idx].index + heads[idx][0].length;
    const end = idx + 1 < heads.length ? heads[idx + 1].index : content.length;
    const section = content.slice(start, end);
    const words = proseWords(section);
    const paras = section.trim().split(/\n\s*\n/).filter((p) => p.trim()).length;
    if (words > 200) {
      warn(folder, `the "## Pitch" section is ${words} words (contract: one paragraph, ≤200) — if the pitch needs sections, the scope isn't settled`);
    }
    if (paras > 1) {
      warn(folder, `the "## Pitch" section has ${paras} paragraphs (contract: one)`);
    }
  }

  const totalWords = proseWords(content);
  if (totalWords > 2500) {
    warn(folder, `pitch.md is ${totalWords} words overall — superseded versions and research belong in git history / research.md`);
  }
  return fm;
}

/**
 * Draft word budget gate. Warn above budget + tolerance (default 10%); ERROR
 * above +25% on draft/scheduled posts — the overrun that "flagged, not
 * enforced" shipped at +27.5% (legal-oss-maintainer draft 2). Raising the
 * budget in pitch.md is the legitimate escape: a deliberate, diffable act.
 */
function checkWordBudget(body, folder, file, status, pitchFm) {
  if (!pitchFm || !pitchFm.word_budget) return;
  const budget = Number(pitchFm.word_budget);
  if (!budget || budget <= 0) {
    warn(folder, `pitch.md word_budget "${pitchFm.word_budget}" is not a positive number`);
    return;
  }
  const tol = Number(pitchFm.budget_tolerance) || 10;
  const words = proseWords(body);
  const over = Math.round(((words - budget) / budget) * 100);
  if (over <= tol) return;

  const cap = Math.round(budget * (1 + tol / 100));
  const msg =
    `${file} is ${words} prose words against a ${budget}-word budget (+${over}%, cap ${cap}) — ` +
    `cut ${words - cap} words, or amend word_budget in pitch.md and record why in discussion.md`;
  if (over > 25 && (status === 'draft' || status === 'scheduled')) {
    err(folder, msg);
  } else {
    warn(folder, msg);
  }

  if (pitchFm.section_budgets && typeof pitchFm.section_budgets === 'object') {
    for (const s of sectionWords(body)) {
      const b = Number(pitchFm.section_budgets[headingSlug(s.heading)]);
      if (b && s.words > b * 1.25) {
        warn(folder, `section "${s.heading}" is ${s.words} words against its ${b}-word allocation (+${Math.round(((s.words - b) / b) * 100)}%)`);
      }
    }
  }
}

/**
 * Thesis presence + protected lines: mechanizes the divergence diagnosis that
 * previously required the author to read the draft cold ("steward" appearing
 * once at 92% depth, draft 1). Missing keyword / missing protected line is an
 * ERROR on draft/scheduled — the pitch is a contract; violating it silently
 * is the failure mode.
 */
function checkThesisPresence(body, folder, file, status, pitchFm) {
  if (!pitchFm) return;
  const blocking = status === 'draft' || status === 'scheduled';
  const report = blocking ? err : warn;

  for (const term of Array.isArray(pitchFm.thesis_keywords) ? pitchFm.thesis_keywords : []) {
    if (typeof term !== 'string' || !term.trim()) continue;
    const hits = [...body.matchAll(new RegExp(`\\b${escapeRe(term)}`, 'gi'))];
    if (hits.length === 0) {
      report(folder, `${file} never uses thesis keyword "${term}" declared in pitch.md — the draft is not about what the pitch promised`);
    } else {
      const depth = Math.round((hits[0].index / body.length) * 100);
      if (hits.length < 2 || depth > 50) {
        warn(
          folder,
          `thesis keyword "${term}": ${hits.length} occurrence(s), first at ${depth}% depth — the pitch's subject is arriving late or thin`
        );
      }
    }
  }

  for (const line of Array.isArray(pitchFm.protected_lines) ? pitchFm.protected_lines : []) {
    if (typeof line !== 'string' || !line.trim()) continue;
    if (!body.includes(line)) {
      report(
        folder,
        `${file} is missing a protected line from pitch.md: "${line.slice(0, 60)}${line.length > 60 ? '…' : ''}" — protected lines survive all cuts, or the pitch gets amended`
      );
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
    if (canonicalTags && Array.isArray(fm.tags)) {
      for (const tag of fm.tags) {
        if (typeof tag === 'string' && !canonicalTags.has(tag)) {
          warn(folder, `tag "${tag}" is not a canonical tag in the registry (tags.md) — exact match required`);
        }
      }
    }
  }

  const pitchFm = checkPitchContract(folderPath, folder, fm.status);
  checkWordBudget(parsed.content, folder, main, fm.status, pitchFm);
  checkThesisPresence(parsed.content, folder, main, fm.status, pitchFm);
  checkHorizontalRules(parsed.content, folder, main, fm.status);
  checkBookmarkTags(parsed.content, folder, main, fm.status);
  checkInternalLinkRefs(raw, parsed.content, folder, main, fm.slug || folder);
  checkBannedPhrases(parsed.content, folder, main);
  checkProseMechanics(parsed.content, folder, main);
  checkMechanicalDefects(parsed.content, folder, main);

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

if (fixes > 0) console.log(`\n${fixes} autofix(es) applied`);
console.log(`\n${errors} error(s), ${warnings} warning(s)`);
if (errors > 0 || (strict && warnings > 0)) process.exit(1);
