#!/bin/bash

# Setup script for blog-alt-counsel containerized environment
# Run this after starting the container to complete Claude Code setup

echo "🚀 blog-alt-counsel Setup"
echo "========================"

# Check if we're in a container
if [[ -f /.dockerenv ]]; then
    echo "✅ Running inside container"
else
    echo "📋 This script is designed to run inside the Docker container"
    echo "   Access via: docker-compose exec blog-terminal bash"
    echo "   Or web terminal: http://localhost:7681"
fi

echo ""

# Check if Claude Code is installed (should be pre-installed in container)
if command -v claude &> /dev/null; then
    echo "✅ Claude Code is pre-installed"

    # Check if authenticated
    if claude auth status &> /dev/null; then
        echo "✅ Claude Code is authenticated"
        echo "🎉 Setup complete! Try: new-post \"test post\""
    else
        echo "🔑 Claude Code needs authentication"
        echo ""
        echo "Choose one authentication method:"
        echo "   Option 1: Set API key in docker-compose.yml:"
        echo "   ANTHROPIC_API_KEY=your_api_key_here"
        echo ""
        echo "   Option 2: Interactive login (persists in volume):"
        echo "   claude auth login"
    fi
else
    echo "⚠️  Claude Code not found (should be pre-installed)"
    echo ""
    echo "💡 Troubleshooting:"
    echo "1. Rebuild container: docker-compose build --no-cache"
    echo "2. Manual install: curl -fsSL https://claude.ai/install.sh | bash"
    echo "3. Continue without Claude Code (Ghost API tools still work)"
fi

echo ""
echo "🧪 Testing Ghost API setup..."

# Test Ghost configuration
if node ghost_jwt.js --quiet &> /dev/null; then
    echo "✅ Ghost JWT generation works"
else
    echo "⚠️  Ghost JWT generation needs configuration"
    echo "   Check environment variables or settings.json"
    echo "   Run: env-help for setup instructions"
fi

echo ""
echo "📋 Available Commands:"
echo "========================"
echo "Ghost API:"
echo "  blog-token       Generate Ghost JWT token"
echo "  search-posts     Search blog posts"
echo "  token-examples   Show API usage examples"
echo "  env-help         Environment variable setup"
echo ""
echo "Claude Code (after authentication):"
echo "  new-post         Generate blog post skeleton"
echo "  audit-post       Quality audit content"
echo "  legal-review     Legal tech review"
echo "  corp-review      Corporate lawyer review"
echo ""
echo "Setup:"
echo "  setup-claude     Install Claude Code"
echo "  claude-help      Show Claude setup instructions"
echo ""
echo "🎯 Next Steps:"
echo "1. If Claude Code isn't installed: setup-claude"
echo "2. Authenticate: claude auth login"
echo "3. Test: blog-token && new-post \"test post\""
echo "4. Start blogging! 🚀"
