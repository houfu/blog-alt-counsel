#!/bin/bash

# Setup script for blog-alt-counsel (local Node.js project)
# Run once after cloning: bash setup.sh

echo "🚀 blog-alt-counsel Setup"
echo "========================"
echo ""

# 1. Node dependencies
if [ ! -d node_modules ]; then
    echo "📦 Installing npm dependencies..."
    npm install --no-audit --no-fund
else
    echo "✅ npm dependencies installed"
fi

# 2. Environment file
if [ -f .env ]; then
    echo "✅ .env exists"
else
    cp .env.example .env
    echo "📝 Created .env from .env.example — fill in your Ghost credentials:"
    echo "   GHOST_SITE_URL, GHOST_ADMIN_API_KEY, GHOST_API_VERSION, JINA_API_KEY"
fi

# 3. Pre-commit hook
npm run setup-hooks --silent

# 4. ghst CLI (powers the Ghost MCP server)
if command -v ghst &> /dev/null; then
    echo "✅ ghst installed"
    bash .claude/hooks/ghst-auth.sh
else
    echo "⚠️  ghst not installed — Ghost MCP tools won't work until you run:"
    echo "   npm install -g @tryghost/ghst"
fi

# 5. Claude Code
if command -v claude &> /dev/null; then
    echo "✅ Claude Code installed"
else
    echo "⚠️  Claude Code not found — install: https://code.claude.com/docs"
fi

echo ""
echo "🧪 Running repo health check..."
if bash scripts/verify.sh; then
    echo "🎉 Setup complete."
else
    echo "Some checks failed — see output above. Setup may still be usable."
fi
