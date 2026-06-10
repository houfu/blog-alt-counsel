#!/usr/bin/env bash
#
# verify.sh — Repo health check for blog-alt-counsel
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


# ─── 1. Core files present ────────────────────────────────────────────────────
header "1. Core files present"
core_files=(
    "scripts/sync-from-ghost.js"
    "scripts/publish-lexical.js"
    "scripts/lint-posts.js"
    ".claude/hooks/pre-commit"
    ".claude/hooks/session-wrap.sh"
    ".claude/hooks/ghst-auth.sh"
    ".mcp.json"
    "docs/personas/marcus-tan-persona.md"
    "docs/personas/wei-lin-persona.md"
    "docs/personas/sarah-chen-persona.md"
    "docs/personas/memory/legal-tech-blog-reviewer.md"
    "docs/personas/memory/inhouse-lawyer-reviewer.md"
    "docs/personas/memory/lawyer-coder-reviewer.md"
    "docs/Houfu_Voice_Guide.md"
)
for f in "${core_files[@]}"; do
    if [ -f "$f" ]; then
        pass "$f"
    else
        fail "$f missing"
    fi
done


# ─── 2. package.json ──────────────────────────────────────────────────────────
header "2. package.json"
if node -e "JSON.parse(require('fs').readFileSync('package.json','utf8'))" 2>/dev/null; then
    pass "valid JSON"
else
    fail "invalid JSON"
fi

for script in "sync-ghost" "setup-hooks" "lint-posts" "verify"; do
    if node -e "const p=require('./package.json'); process.exit(p.scripts['$script']?0:1)" 2>/dev/null; then
        pass "npm run $script defined"
    else
        fail "npm run $script missing from package.json"
    fi
done


# ─── 3. Node.js syntax ────────────────────────────────────────────────────────
header "3. Node.js script syntax"
for f in scripts/*.js .claude/hooks/*.js; do
    if node --check "$f" 2>/dev/null; then
        pass "$f"
    else
        fail "$f — syntax error"
    fi
done


# ─── 4. No hardcoded secrets ─────────────────────────────────────────────────
header "4. No hardcoded secrets in tracked config"
if grep -rIlE "(jina_[a-zA-Z0-9]{20,}|sk-[a-zA-Z0-9]{20,}|ghp_[a-zA-Z0-9]{20,})" \
    --include="*.json" --include="*.js" --include="*.sh" --include="*.md" \
    .claude scripts docs .mcp.json 2>/dev/null | grep -q .; then
    fail "potential hardcoded API key found (jina_/sk-/ghp_ pattern) — use env vars"
else
    pass "no hardcoded API key patterns in config/scripts/docs"
fi

if [ -f ".claude/mcp.json" ]; then
    fail ".claude/mcp.json exists — MCP config belongs in .mcp.json at repo root"
else
    pass "no stray .claude/mcp.json"
fi


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


# ─── 6. Agent frontmatter ─────────────────────────────────────────────────────
header "6. Agent YAML frontmatter"
for f in .claude/agents/*.md; do
    name=$(head -8 "$f" | grep "^name:" | cut -d: -f2 | tr -d ' ')
    desc_lines=$(head -8 "$f" | grep -c "^description:" || true)
    if [ -n "$name" ] && [ "$desc_lines" -gt 0 ]; then
        if [ "$(basename "$f" .md)" = "$name" ]; then
            pass "$(basename "$f") — name: $name"
        else
            fail "$(basename "$f") — frontmatter name '$name' doesn't match filename"
        fi
    else
        fail "$(basename "$f") — missing name or description in frontmatter"
    fi
done


# ─── 7. Skill frontmatter ─────────────────────────────────────────────────────
header "7. Skills"
for dir in .claude/skills/*/; do
    skill=$(basename "$dir")
    f="$dir/SKILL.md"
    if [ ! -f "$f" ]; then
        fail "$skill — SKILL.md missing"
        continue
    fi
    if head -1 "$f" | grep -q "^---$" && head -8 "$f" | grep -q "^description:"; then
        pass "$skill — has frontmatter with description"
    else
        fail "$skill — SKILL.md missing YAML frontmatter (name/description)"
    fi
done


# ─── 8. Post lint ─────────────────────────────────────────────────────────────
header "8. Post folders (scripts/lint-posts.js)"
if node scripts/lint-posts.js > /tmp/lint-posts-out.txt 2>&1; then
    pass "lint-posts: $(tail -1 /tmp/lint-posts-out.txt)"
else
    fail "lint-posts found errors — run: node scripts/lint-posts.js"
fi


# ─── 9. Ghost connectivity (if available) ─────────────────────────────────────
header "9. Ghost connectivity"
if command -v ghst &> /dev/null; then
    if ghst auth status &> /dev/null; then
        pass "ghst authenticated"
    else
        warn "ghst installed but not authenticated (run .claude/hooks/ghst-auth.sh)"
    fi
else
    warn "ghst not installed — Ghost MCP tools unavailable (npm install -g @tryghost/ghst)"
fi


# ─── Summary ──────────────────────────────────────────────────────────────────
echo ""
echo "══════════════════════════════════════"
echo "  Passed:  $PASS"
echo "  Failed:  $FAIL"
if [ "$WARN" -gt 0 ]; then
echo "  Skipped: $WARN (environment-dependent)"
fi
echo "══════════════════════════════════════"

if [ "$FAIL" -gt 0 ]; then
    echo ""
    echo "FAILED — $FAIL check(s) need attention."
    echo ""
    exit 1
else
    echo ""
    echo "All automated checks passed."
    echo ""
fi
