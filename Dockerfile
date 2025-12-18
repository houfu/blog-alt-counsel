# ============================================================================
# Stage 1: Build shpool binary
# ============================================================================
FROM rust:slim-bookworm AS shpool-builder

RUN apt-get update && apt-get install -y \
    pkg-config \
    libssl-dev \
    && rm -rf /var/lib/apt/lists/*

RUN cargo install shpool

# ============================================================================
# Stage 2: Final runtime image
# ============================================================================
FROM node:20-bookworm-slim

# Build arguments for GitOps
ARG REPO_URL
ARG BRANCH=main
ARG GITHUB_USERNAME
ARG GITHUB_PAT

# Install runtime dependencies only (no build tools!)
RUN apt-get update && apt-get install -y \
    curl \
    ca-certificates \
    git \
    vim \
    htop \
    tree \
    jq \
    && rm -rf /var/lib/apt/lists/*

# Copy shpool binary from builder stage
COPY --from=shpool-builder /usr/local/cargo/bin/shpool /usr/local/bin/shpool

# Install ttyd for web terminal (multi-architecture support)
RUN ARCH=$(uname -m) && \
    if [ "$ARCH" = "x86_64" ]; then \
        curl -Lo /usr/local/bin/ttyd https://github.com/tsl0922/ttyd/releases/latest/download/ttyd.x86_64; \
    elif [ "$ARCH" = "aarch64" ] || [ "$ARCH" = "arm64" ]; then \
        curl -Lo /usr/local/bin/ttyd https://github.com/tsl0922/ttyd/releases/latest/download/ttyd.aarch64; \
    else \
        echo "Unsupported architecture: $ARCH" && exit 1; \
    fi && \
    chmod +x /usr/local/bin/ttyd

# Install Claude Code during build for reliability and speed
RUN curl -fsSL https://claude.ai/install.sh | bash
# Note: Verification happens at runtime via aliases in .bashrc

# Set PATH to include Claude Code
ENV PATH="/root/.local/bin:$PATH"

# Set working directory
WORKDIR /workspace

# Setup git credentials BEFORE cloning (GitOps)
RUN git config --global credential.helper store && \
    git config --global --add safe.directory /workspace && \
    echo "https://${GITHUB_USERNAME}:${GITHUB_PAT}@github.com" > /root/.git-credentials

# Clone the repository instead of copying from workspace
RUN git clone --branch ${BRANCH} ${REPO_URL} .

# Install Node.js dependencies
RUN npm install

# Make scripts executable
RUN chmod +x scripts/ghost_jwt.js scripts/search_posts_v2.js scripts/create_post.js scripts/shpool-session.sh

# Copy shpool configuration
RUN mkdir -p /root/.config/shpool && \
    cp .config/shpool/config.toml /root/.config/shpool/config.toml

# Copy Claude MCP server configuration
RUN mkdir -p /root/.config/claude && \
    cp .claude/mcp.json /root/.config/claude/mcp.json

# Setup blog-specific shell environment, aliases and auto-navigation
RUN cat >> /root/.bashrc <<'BASHRC_EOF'
# Custom PS1 prompt
export PS1="\[\e[36m\]blog-alt-counsel\[\e[m\] \[\e[32m\]\w\[\e[m\] $ "

# Auto-navigate to /workspace in shpool sessions
if [ -n "$SHPOOL_SESSION_NAME" ] && [ "$PWD" != "/workspace" ] && [[ "$PWD" != /workspace/* ]]; then
    cd /workspace
fi

# Ensure PATH includes Claude Code and Cargo bins
export PATH="/root/.local/bin:/root/.cargo/bin:$PATH"

# Environment variables for blog automation (inherit from Docker environment)
export GHOST_SITE_URL="${GHOST_SITE_URL:-}"
export GHOST_ADMIN_API_KEY="${GHOST_ADMIN_API_KEY:-}"
export GHOST_API_VERSION="${GHOST_API_VERSION:-v6.0}"
export ANTHROPIC_API_KEY="${ANTHROPIC_API_KEY:-}"
export JINA_API_KEY="${JINA_API_KEY:-}"
export GITHUB_USERNAME="${GITHUB_USERNAME:-}"
export GITHUB_PAT="${GITHUB_PAT:-}"

# Blog automation aliases
alias blog-token="node scripts/ghost_jwt.js"
alias search-posts="node scripts/search_posts_v2.js"
alias list-agents="ls -la .claude/agents/"
alias list-skills="ls -la .claude/skills/"
alias ghost-docs="cat .claude/skills/using-ghost-admin-api/ghost-admin-api.md"

# Enhanced blog workflow aliases
alias token-headers="node scripts/ghost_jwt.js --print-headers"
alias token-examples="node scripts/ghost_jwt.js --examples"
alias token-quiet="node scripts/ghost_jwt.js --quiet"
alias env-help="node scripts/ghost_jwt.js --env-help"

# Claude Code blog automation aliases
alias audit-post="claude --agent .claude/agents/content-quality-auditor.md"
alias legal-review="claude --agent .claude/agents/legal-tech-blog-reviewer.md"
alias corp-review="claude --agent .claude/agents/corporate-lawyer-reviewer.md"

# Claude Code authentication aliases
alias claude-login="claude auth login"
alias claude-status="claude auth status"
alias claude-help="echo \"Claude Code is pre-installed! Set ANTHROPIC_API_KEY or run: claude auth login\""

# Development convenience aliases
alias ll="ls -la"
alias ..="cd .."
alias logs="docker-compose logs -f"

# shpool session management aliases
alias session-list="shpool list"
alias session-kill="shpool kill blog-workspace"
alias session-detach="shpool detach"

# Environment reload aliases (hybrid approach)
alias reload-env="set -a && source /workspace/.env && set +a && echo \"Environment reloaded from .env\""
alias reload-env-full="echo \"Detaching from shpool session. Reattach to get fresh Docker environment.\" && shpool detach"
alias reload-env-help="echo \"reload-env: Quick reload from .env file\" && echo \"reload-env-full: Full reset (detach and reattach for Docker env changes)\""
BASHRC_EOF

# Environment for blog automation
ENV PROJECT_ROOT="/workspace"
ENV NODE_ENV="development"

# Expose ttyd port
EXPOSE 7681

# Start with shpool session for persistence
CMD ["ttyd", "-p", "7681", "-i", "0.0.0.0", "/workspace/scripts/shpool-session.sh"]
