#!/usr/bin/env node

/**
 * Workflow state CLI for posts/<folder>/.workflow.json — the tracked,
 * machine-written record of pitch checkpoints, audit/review rounds, length
 * audits, and gate overrides. Written by this CLI and by
 * .claude/hooks/workflow-gate.js; humans should not hand-edit it.
 *
 * Usage:
 *   node scripts/workflow-state.js checkpoint <folder> "<one-line verdict>"
 *   node scripts/workflow-state.js length-audit <folder>
 *   node scripts/workflow-state.js override <folder> <gate> "<reason>"
 *   node scripts/workflow-state.js show <folder>
 *
 * Gates: reviewer-round-cap | audit-round-cap
 *
 * The checkpoint binds to the CURRENT draft and pitch content (sha1), so it
 * self-invalidates when either file changes — it cannot be recorded once and
 * coasted on. Overrides record who asked and why; they are auditable in git.
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { findMainFile } = require('./lib/postfile');

const ROOT = path.join(__dirname, '..');
const POSTS_DIR = path.join(ROOT, 'posts');
const GATES = ['reviewer-round-cap', 'audit-round-cap'];

function sha1(buf) {
  return crypto.createHash('sha1').update(buf).digest('hex').slice(0, 12);
}

function statePath(folder) {
  return path.join(POSTS_DIR, folder, '.workflow.json');
}

function loadState(folder) {
  try {
    return JSON.parse(fs.readFileSync(statePath(folder), 'utf-8'));
  } catch {
    return { version: 1, pitch_checkpoint: null, audit_rounds: [], review_rounds: [], length_audit: null, overrides: [] };
  }
}

function saveState(folder, state) {
  fs.writeFileSync(statePath(folder), JSON.stringify(state, null, 2) + '\n');
}

function shas(folder) {
  const folderPath = path.join(POSTS_DIR, folder);
  const main = findMainFile(folderPath, folder);
  const draft = main ? sha1(fs.readFileSync(path.join(folderPath, main))) : null;
  const pitchFile = path.join(folderPath, 'pitch.md');
  const pitch = fs.existsSync(pitchFile) ? sha1(fs.readFileSync(pitchFile)) : null;
  return { main, draft, pitch };
}

function die(msg) {
  console.error(msg);
  process.exit(1);
}

const [cmd, folder, ...rest] = process.argv.slice(2);
if (!cmd || !folder) {
  die('Usage: workflow-state.js <checkpoint|length-audit|override|show> <folder> [...]');
}
if (!fs.existsSync(path.join(POSTS_DIR, folder))) die(`posts/${folder} does not exist`);

const state = loadState(folder);
const now = new Date().toISOString();
const { main, draft, pitch } = shas(folder);

switch (cmd) {
  case 'checkpoint': {
    const verdict = rest.join(' ').trim();
    if (!verdict) die('checkpoint needs a one-line verdict: what was compared and what was decided');
    if (!draft) die(`no main post file found in posts/${folder} — nothing to checkpoint`);
    state.pitch_checkpoint = { at: now, verdict, draft_sha: draft, pitch_sha: pitch };
    saveState(folder, state);
    console.log(`checkpoint recorded for posts/${folder} (draft ${draft}, pitch ${pitch || 'n/a'}): ${verdict}`);
    break;
  }
  case 'length-audit': {
    if (!draft) die(`no main post file found in posts/${folder}`);
    state.length_audit = { at: now, draft_sha: draft };
    saveState(folder, state);
    console.log(`length audit recorded for posts/${folder} (draft ${draft})`);
    break;
  }
  case 'override': {
    const gate = rest[0];
    const reason = rest.slice(1).join(' ').trim();
    if (!GATES.includes(gate)) die(`unknown gate "${gate}" — one of: ${GATES.join(', ')}`);
    if (!reason) die('override needs the user\'s stated reason — overrides are recorded and auditable');
    state.overrides.push({ gate, at: now, reason });
    saveState(folder, state);
    console.log(`override recorded for ${gate} on posts/${folder}: ${reason}`);
    break;
  }
  case 'show': {
    console.log(JSON.stringify({ folder, main, draft_sha: draft, pitch_sha: pitch, state }, null, 2));
    break;
  }
  default:
    die(`unknown command "${cmd}"`);
}
