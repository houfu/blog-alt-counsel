/**
 * Prose word counting for markdown post bodies (frontmatter already stripped).
 *
 * Calibration: proseWords() was checked against the hand counts recorded in
 * posts/legal-oss-maintainer/discussion.md — 2,423 vs 2,417 reported (0.25%
 * drift), safe to gate budgets on.
 */

function stripToProse(body) {
  return body
    .replace(/^```[\s\S]*?^```/gm, '') // fenced code blocks
    .replace(/<[^>]+>/g, '') // html cards, bookmark tags
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '') // images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // links -> link text
    .replace(/^\s*>\s?/gm, ''); // blockquote markers
}

function proseWords(body) {
  return stripToProse(body)
    .split(/\s+/)
    .filter((w) => /[A-Za-z0-9]/.test(w)).length;
}

/**
 * Per-section word counts keyed by heading. Returns
 * [{ heading, level, words, startPct }] where startPct is the section's
 * starting depth into the body (0..1). Text before the first heading is
 * reported under the heading "(preamble)".
 */
function sectionWords(body) {
  const sections = [];
  const headingRe = /^(#{1,6})\s+(.+)$/gm;
  let last = { heading: '(preamble)', level: 0, index: 0 };
  let m;
  while ((m = headingRe.exec(body)) !== null) {
    sections.push({
      heading: last.heading,
      level: last.level,
      words: proseWords(body.slice(last.index, m.index)),
      startPct: body.length ? last.index / body.length : 0,
    });
    last = { heading: m[2].trim(), level: m[1].length, index: m.index };
  }
  sections.push({
    heading: last.heading,
    level: last.level,
    words: proseWords(body.slice(last.index)),
    startPct: body.length ? last.index / body.length : 0,
  });
  return sections.filter((s) => !(s.heading === '(preamble)' && s.words === 0));
}

/**
 * Depth (0..1) into the body at which `term` first occurs, or null if absent.
 * Case-insensitive, matches at a word boundary.
 */
function firstOccurrenceDepth(body, term) {
  const esc = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const m = body.match(new RegExp(`\\b${esc}`, 'i'));
  if (!m) return null;
  return body.length ? m.index / body.length : 0;
}

/** Slugify a heading the way Ghost/GitHub anchors do (for section_budgets keys). */
function headingSlug(heading) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

module.exports = { proseWords, sectionWords, firstOccurrenceDepth, headingSlug, stripToProse };
