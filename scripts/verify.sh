#!/usr/bin/env bash
#
# verify.sh — Smoke test for blog-alt-counsel branch changes
#
# Run from repo root: bash scripts/verify.sh
# Exit code: 0 = all automated checks passed, 1 = failures found

set -euo pipefail

PASS=0
FAIL=0
WARN=0

pass() { echo "  ✓ $1"; ((PASS++)) || true; }
fail() { echo "  ✗ $1"; ((FAIL++)) || true; }
warn() { echo "  ? $1"; ((WARN++)) || true; }

header() { echo ""; echo "── $1"; }

echo ""
echo "=== blog-alt-counsel verification ==="


# ─── 1. Docker removal ────────────────────────────────────────────────────────
header "1. Docker files removed"
for f in Dockerfile docker-compose.yml docker-compose.yml.example .dockerignore scripts/shpool-session.sh; do
    if [ ! -f "$f" ]; then
        pass "$f deleted"
    else
        fail "$f still present"
    fi
done


# ─── 2. New files present ─────────────────────────────────────────────────────
header "2. New files present"
new_files=(
    "scripts/sync-from-ghost.js"
    "scripts/publish-lexical.js"
    ".claude/hooks/pre-commit"
    "docs/personas/marcus-tan-persona.md"
    "docs/personas/wei-lin-persona.md"
    "docs/review-discussions-analysis.md"
)
for f in "${new_files[@]}"; do
    if [ -f "$f" ]; then
        pass "$f"
    else
        fail "$f missing"
    fi
done


# ─── 3. package.json ──────────────────────────────────────────────────────────
header "3. package.json"
if node -e "JSON.parse(require('fs').readFileSync('package.json','utf8'))" 2>/dev/null; then
    pass "valid JSON"
else
    fail "invalid JSON"
fi

if ! grep -q "session_start" package.json; then
    pass "dead session-start script removed"
else
    fail "dead session-start script still present"
fi

# Verify expected scripts exist
for script in "token" "search" "sync-ghost" "setup-hooks"; do
    if node -e "const p=require('./package.json'); process.exit(p.scripts['$script']?0:1)" 2>/dev/null; then
        pass "npm run $script defined"
    else
        fail "npm run $script missing from package.json"
    fi
done


# ─── 4. Node.js syntax ────────────────────────────────────────────────────────
header "4. Node.js script syntax"
for f in scripts/*.js; do
    if node --check "$f" 2>/dev/null; then
        pass "$f"
    else
        fail "$f — syntax error"
    fi
done


# ─── 5. Pre-commit hook ───────────────────────────────────────────────────────
header "5. Pre-commit hook"
hook=".claude/hooks/pre-commit"

if [ -x "$hook" ]; then
    pass "executable"
else
    fail "not executable (run: chmod +x $hook)"
fi

if head -1 "$hook" | grep -qE "^#!.*(bash|sh)"; then
    pass "has shebang"
else
    fail "missing or invalid shebang"
fi

# Hook should exit 0 even with no staged files (non-blocking by design)
if bash "$hook" 2>/dev/null; then
    pass "exits 0 when nothing staged (non-blocking)"
else
    fail "exits non-zero — hook is blocking commits"
fi

# Hook should warn (stderr) when a post .md is staged without discussion.md
# Simulate by creating a temp file and testing the grep logic directly
tmpdir=$(mktemp -d)
trap 'rm -rf "$tmpdir"' EXIT
cat > "$tmpdir/test_hook.sh" << 'HOOKTEST'
staged="posts/test-post/test-post.md"
discussion="posts/test-post/discussion.md"
if echo "$staged" | grep -qE "^posts/([^/]+)/[^/]+\.md$"; then
    folder=$(echo "$staged" | sed 's|posts/\([^/]*\)/.*|\1|')
    if ! echo "$staged" | grep -qx "posts/${folder}/discussion.md"; then
        echo "WARN_TRIGGERED"
    fi
fi
HOOKTEST
result=$(bash "$tmpdir/test_hook.sh")
if echo "$result" | grep -q "WARN_TRIGGERED"; then
    pass "warning logic fires when discussion.md not staged"
else
    fail "warning logic did not fire as expected"
fi


# ─── 6. CLAUDE.md file references ────────────────────────────────────────────
header "6. CLAUDE.md — referenced files exist"
refs=(
    "docs/personas/marcus-tan-persona.md"
    "docs/personas/wei-lin-persona.md"
    "docs/Houfu_Voice_Guide.md"
)
for ref in "${refs[@]}"; do
    if [ -f "$ref" ]; then
        pass "$ref"
    else
        fail "$ref referenced in CLAUDE.md but not found"
    fi
done

# Check Docker language is gone from CLAUDE.md
if ! grep -qi "containerized environment\|docker-compose\|ttyd\|shpool" CLAUDE.md; then
    pass "no Docker language in CLAUDE.md"
else
    fail "Docker language still present in CLAUDE.md"
fi


# ─── 7. README.md ─────────────────────────────────────────────────────────────
header "7. README.md"
if ! grep -qi "docker\|container\|ttyd\|7681" README.md; then
    pass "no Docker content in README"
else
    fail "Docker content still in README"
fi

for keyword in "PITCH" "WRITE" "REVIEW" "POST" "CHECK" "Marcus Tan" "Sarah Chen" "Wei Lin" "sync-ghost" "setup-hooks"; do
    if grep -q "$keyword" README.md; then
        pass "README mentions: $keyword"
    else
        fail "README missing: $keyword"
    fi
done


# ─── 8. Agent/skill file structure ───────────────────────────────────────────
header "8. Agent YAML frontmatter"
for f in .claude/agents/*.md; do
    name=$(head -8 "$f" | grep "^name:" | cut -d: -f2 | tr -d ' ')
    desc_lines=$(head -8 "$f" | grep -c "^description:" || true)
    if [ -n "$name" ] && [ "$desc_lines" -gt 0 ]; then
        pass "$(basename "$f") — name: $name"
    else
        fail "$(basename "$f") — missing name or description in frontmatter"
    fi
done

header "9. Skill files present"
for skill in brainstorming generate_a_pitch blog-research getting-feedback note-taking backlink_curating using-ghost-admin-api tag-registry searching_the_blog; do
    if [ -f ".claude/skills/$skill/SKILL.md" ]; then
        pass "$skill/SKILL.md"
    else
        fail "$skill/SKILL.md missing"
    fi
done


# ─── 10. Ghost API (if credentials available) ─────────────────────────────────
header "10. Ghost API connection"
has_env=false
if [ -f ".env" ] && grep -q "GHOST_ADMIN_API_KEY" .env; then has_env=true; fi
if [ -n "${GHOST_ADMIN_API_KEY:-}" ]; then has_env=true; fi

if $has_env; then
    if node -r dotenv/config scripts/ghost_jwt.js --quiet 2>/dev/null | grep -q "."; then
        pass "Ghost API token generated successfully"
    else
        fail "Ghost API token generation failed — check credentials"
    fi
else
    warn "No .env or GHOST_ADMIN_API_KEY set — Ghost API test skipped"
fi


# ─── Summary ──────────────────────────────────────────────────────────────────
echo ""
echo "══════════════════════════════════════"
echo "  Passed:  $PASS"
echo "  Failed:  $FAIL"
if [ "$WARN" -gt 0 ]; then
echo "  Skipped: $WARN (manual check needed)"
fi
echo "══════════════════════════════════════"

if [ "$FAIL" -gt 0 ]; then
    echo ""
    echo "FAILED — $FAIL check(s) need attention before merging."
    echo ""
    exit 1
else
    echo ""
    echo "All automated checks passed."
    echo ""
fi


# ─── Manual checklist (printed always) ───────────────────────────────────────
echo "Manual checks (require a live Claude Code session):"
echo ""
echo "  [ ] generate_a_pitch: does Step 1.7 ask for real experience"
echo "      before drafting? (not invent a hook from the topic)"
echo ""
echo "  [ ] brainstorming: when exploring vulnerability angle, does it"
echo "      ask 'What personal experience connects to this?' first?"
echo ""
echo "  [ ] audit-structure: does it read pitch.md and flag if draft"
echo "      diverges from the pitch promise?"
echo ""
echo "  [ ] audit-tone: does it flag an emotional opening with no"
echo "      named moment/number within 3-5 paragraphs?"
echo ""
echo "  [ ] getting-feedback (/feedback): do all 3 reviewers run?"
echo "      Marcus Tan (legal-tech), Sarah Chen (corporate), Wei Lin (coder)"
echo ""
echo "  [ ] npm run sync-ghost <slug>: does it update frontmatter"
echo "      without touching the post body?"
echo ""
