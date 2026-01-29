#!/bin/bash
# shpool session startup script for blog-alt-counsel
# Automatically attaches to existing session or creates new one

SESSION_NAME="blog-workspace"

# Clean up stale shpool daemon socket on container restart
# This prevents "address already in use" errors
SHPOOL_SOCKET="/root/.local/share/shpool/shpool.socket"
if [ -e "$SHPOOL_SOCKET" ]; then
    # Check if the socket is actually in use
    if ! shpool list &>/dev/null; then
        echo "Cleaning up stale shpool socket..."
        rm -f "$SHPOOL_SOCKET"
    fi
fi

# Export environment variables so they're inherited by shpool session
# Priority order:
# 1. Docker environment variables (from docker-compose.yml)
# 2. Local .env file (if exists, for quick development overrides)

# First, export Docker environment variables
export GHOST_SITE_URL="${GHOST_SITE_URL}"
export GHOST_ADMIN_API_KEY="${GHOST_ADMIN_API_KEY}"
export GHOST_API_VERSION="${GHOST_API_VERSION}"
export GITHUB_USERNAME="${GITHUB_USERNAME}"
export GITHUB_PAT="${GITHUB_PAT}"
export JINA_API_KEY="${JINA_API_KEY}"
export ANTHROPIC_API_KEY="${ANTHROPIC_API_KEY}"
export PATH="/root/.local/bin:/usr/local/bin:/root/.cargo/bin:$PATH"

# Then, source .env file if it exists (allows local overrides)
if [ -f "/workspace/.env" ]; then
    echo "Loading environment from /workspace/.env"
    set -a  # Mark variables for export
    source /workspace/.env
    set +a  # Unmark
fi

# shpool attach will create the session if it doesn't exist
# The -f flag forces creation if needed
echo "Connecting to shpool session: $SESSION_NAME"
exec shpool attach "$SESSION_NAME"
