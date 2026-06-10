#!/bin/bash
# Auto-authenticate ghst CLI if credentials are available and ghst is installed
# This runs on SessionStart to ensure the MCP server can connect to Ghost.
# Always exits 0 (non-blocking), but reports its outcome so a broken setup
# is visible at session start instead of failing silently later.

if ! command -v ghst &> /dev/null; then
  if [ -n "$GHOST_ADMIN_API_KEY" ]; then
    echo "ghst not installed but Ghost credentials are set — run: npm install -g @tryghost/ghst"
  else
    echo "ghst not installed — run: npm install -g @tryghost/ghst"
  fi
  exit 0
fi

# Check if already authenticated
if ghst auth status &> /dev/null; then
  exit 0
fi

if [ -z "$GHOST_SITE_URL" ] || [ -z "$GHOST_ADMIN_API_KEY" ]; then
  echo "ghst installed but not authenticated: GHOST_SITE_URL / GHOST_ADMIN_API_KEY not set (copy .env.example to .env)"
  exit 0
fi

if ghst auth login \
  --url "$GHOST_SITE_URL" \
  --staff-token "$GHOST_ADMIN_API_KEY" \
  --site alt-counsel \
  --non-interactive \
  --insecure-storage > /dev/null 2>&1; then
  echo "ghst authenticated for $GHOST_SITE_URL"
else
  echo "ghst auth login failed — check GHOST_SITE_URL and GHOST_ADMIN_API_KEY"
fi
exit 0
