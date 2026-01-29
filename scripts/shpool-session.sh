#!/bin/bash
# shpool session startup script for blog-alt-counsel
# Automatically attaches to existing session or creates new one
#
# Note: Environment variables (PATH, API keys, etc.) are set inside the
# session shell via .bashrc, which sources /workspace/.env as a fallback.
# Setting them here would be unreliable — the shpool daemon may not
# propagate exports from the attaching process to the session shell.

SESSION_NAME="blog-workspace"

# Clean up stale shpool daemon socket on container restart
# This prevents "address already in use" errors
SHPOOL_SOCKET="/root/.local/share/shpool/shpool.socket"
if [ -e "$SHPOOL_SOCKET" ]; then
    if ! shpool list &>/dev/null; then
        echo "Cleaning up stale shpool socket..."
        rm -f "$SHPOOL_SOCKET"
    fi
fi

echo "Connecting to shpool session: $SESSION_NAME"
exec shpool attach "$SESSION_NAME"
