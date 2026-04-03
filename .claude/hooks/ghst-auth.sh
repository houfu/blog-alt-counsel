#!/bin/bash
# Auto-authenticate ghst CLI if credentials are available and ghst is installed
# This runs on SessionStart to ensure the MCP server can connect to Ghost

if ! command -v ghst &> /dev/null; then
  echo "ghst not installed — run: npm install -g @tryghost/ghst"
  exit 0
fi

# Check if already authenticated
if ghst auth status &> /dev/null; then
  exit 0
fi

# Authenticate using env vars
if [ -n "$GHOST_SITE_URL" ] && [ -n "$GHOST_ADMIN_API_KEY" ]; then
  ghst auth login \
    --url "$GHOST_SITE_URL" \
    --staff-token "$GHOST_ADMIN_API_KEY" \
    --site alt-counsel \
    --non-interactive \
    --insecure-storage 2>/dev/null
fi
