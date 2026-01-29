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
    gh \
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

# Install Claude Code using the official native installer (recommended method)
# npm installation is deprecated - using curl installer instead
RUN curl -fsSL https://claude.ai/install.sh | bash && \
    export PATH="/root/.local/bin:$PATH" && \
    claude --version

# Set PATH to include Claude Code binary and npm global binaries
ENV PATH="/root/.local/bin:/usr/local/bin:$PATH"

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

# Note: .env file should be mounted at runtime via volume
# In Synology Container Manager: Add volume mapping for .env file
# Host path: /path/to/your/.env -> Container path: /workspace/.env

# Make scripts executable
RUN chmod +x scripts/ghost_jwt.js scripts/search_posts_v2.js scripts/create_post.js scripts/shpool-session.sh

# Copy shpool configuration
RUN mkdir -p /root/.config/shpool && \
    cp .config/shpool/config.toml /root/.config/shpool/config.toml

# Copy Claude MCP server configuration
RUN mkdir -p /root/.config/claude && \
    cp .claude/mcp.json /root/.config/claude/mcp.json

# Setup blog-specific shell environment
# Critical env setup (PATH, API keys) is written to /root/.bash_env and
# prepended to .bashrc so it runs BEFORE the non-interactive guard
# ([ -z "$PS1" ] && return). This ensures shpool sessions always have
# correct PATH and environment regardless of shell type.
RUN cat > /root/.bash_env <<'ENV_EOF'
# PATH: Claude Code binary, npm global binaries, Cargo bins
export PATH="/root/.local/bin:/usr/local/bin:/root/.cargo/bin:$PATH"

# Source .env as fallback when Docker ENV was not inherited
# (happens when shpool daemon loses environment during auto-daemonization)
if [ -f "/workspace/.env" ]; then
    while IFS='=' read -r key value; do
        [[ "$key" =~ ^#.*$ || -z "$key" ]] && continue
        value="${value%\"}"
        value="${value#\"}"
        value="${value%\'}"
        value="${value#\'}"
        if [ -z "${!key}" ]; then
            export "$key=$value"
        fi
    done < /workspace/.env
fi
export GHOST_API_VERSION="${GHOST_API_VERSION:-v6.0}"
ENV_EOF

# Prepend .bash_env sourcing to .bashrc (before the non-interactive guard)
RUN { echo '. /root/.bash_env'; echo ''; cat /root/.bashrc; } > /tmp/.bashrc.new && \
    mv /tmp/.bashrc.new /root/.bashrc

# Append interactive-only setup (PS1, aliases, navigation)
RUN cat >> /root/.bashrc <<'BASHRC_EOF'
# Custom PS1 prompt
export PS1="\[\e[36m\]blog-alt-counsel\[\e[m\] \[\e[32m\]\w\[\e[m\] $ "

# Auto-navigate to /workspace in shpool sessions
if [ -n "$SHPOOL_SESSION_NAME" ] && [ "$PWD" != "/workspace" ] && [[ "$PWD" != /workspace/* ]]; then
    cd /workspace
fi

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

# GitHub CLI aliases and configuration
alias gh-status="gh auth status"
alias gh-login="gh auth login"
alias gh-repo="gh repo view"
alias gh-pr-create="gh pr create"
alias gh-issue-list="gh issue list"

# Auto-configure GitHub CLI if credentials are available
if [ -n "$GITHUB_USERNAME" ] && [ -n "$GITHUB_PAT" ]; then
    # Configure gh CLI with existing credentials
    echo "${GITHUB_PAT}" | gh auth login --with-token
    gh config set git_protocol https
fi


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
