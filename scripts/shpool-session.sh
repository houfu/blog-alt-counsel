#!/bin/bash
# shpool session startup script for blog-alt-counsel
# Automatically attaches to existing session or creates new one

SESSION_NAME="blog-workspace"

# shpool attach will create the session if it doesn't exist
# The -f flag forces creation if needed
echo "Connecting to shpool session: $SESSION_NAME"
exec shpool attach "$SESSION_NAME"
