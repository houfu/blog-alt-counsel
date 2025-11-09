#!/bin/bash
# tmux session startup script for blog-alt-counsel
# Automatically attaches to existing session or creates new one

SESSION_NAME="blog-workspace"

# Check if tmux session exists
if tmux has-session -t "$SESSION_NAME" 2>/dev/null; then
    echo "Reconnecting to existing tmux session: $SESSION_NAME"
    exec tmux attach-session -t "$SESSION_NAME"
else
    echo "Creating new tmux session: $SESSION_NAME"
    exec tmux new-session -s "$SESSION_NAME"
fi
