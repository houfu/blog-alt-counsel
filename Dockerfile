FROM node:18-slim

# Build arguments for GitOps
ARG REPO_URL
ARG BRANCH=main
ARG GITHUB_USERNAME
ARG GITHUB_PAT

# Install system dependencies (much simpler now!)
RUN apt-get update && apt-get install -y \
    curl \
    ca-certificates \
    git \
    vim \
    htop \
    tree \
    jq \
    && rm -rf /var/lib/apt/lists/*

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
ENV PATH="/root/.local/bin:$PATH"
RUN curl -fsSL https://claude.ai/install.sh | bash

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
RUN chmod +x scripts/ghost_jwt.js scripts/search_posts_v2.js scripts/create_post.js

# Setup blog-specific shell aliases and environment
RUN echo 'export PS1="\[\e[36m\]blog-alt-counsel\[\e[m\] \[\e[32m\]\w\[\e[m\] $ "' >> /root/.bashrc

# Blog automation aliases - now all Node.js!
RUN echo 'alias blog-token="node scripts/ghost_jwt.js"' >> /root/.bashrc
RUN echo 'alias search-posts="node scripts/search_posts_v2.js"' >> /root/.bashrc
RUN echo 'alias list-agents="ls -la .claude/agents/"' >> /root/.bashrc
RUN echo 'alias list-skills="ls -la .claude/skills/"' >> /root/.bashrc
RUN echo 'alias ghost-docs="cat .claude/skills/using-ghost-admin-api/ghost-admin-api.md"' >> /root/.bashrc

# Enhanced blog workflow aliases
RUN echo 'alias token-headers="node scripts/ghost_jwt.js --print-headers"' >> /root/.bashrc
RUN echo 'alias token-examples="node scripts/ghost_jwt.js --examples"' >> /root/.bashrc
RUN echo 'alias token-quiet="node scripts/ghost_jwt.js --quiet"' >> /root/.bashrc
RUN echo 'alias env-help="node scripts/ghost_jwt.js --env-help"' >> /root/.bashrc

# Claude Code blog automation aliases (using skills now)
RUN echo 'alias audit-post="claude --agent .claude/agents/content-quality-auditor.md"' >> /root/.bashrc
RUN echo 'alias legal-review="claude --agent .claude/agents/legal-tech-blog-reviewer.md"' >> /root/.bashrc
RUN echo 'alias corp-review="claude --agent .claude/agents/corporate-lawyer-reviewer.md"' >> /root/.bashrc

# Claude Code authentication aliases (Claude Code pre-installed)
RUN echo 'alias claude-login="claude auth login"' >> /root/.bashrc
RUN echo 'alias claude-status="claude auth status"' >> /root/.bashrc
RUN echo 'alias claude-help="echo \"Claude Code is pre-installed! Set ANTHROPIC_API_KEY or run: claude auth login\""' >> /root/.bashrc

# Development convenience aliases
RUN echo 'alias ll="ls -la"' >> /root/.bashrc
RUN echo 'alias ..="cd .."' >> /root/.bashrc
RUN echo 'alias logs="docker-compose logs -f"' >> /root/.bashrc

# Environment for blog automation
ENV PROJECT_ROOT="/workspace"
ENV NODE_ENV="development"

# Expose ttyd port
EXPOSE 7681

# Start with project context
CMD ["ttyd", "-p", "7681", "-i", "0.0.0.0", "bash"]
