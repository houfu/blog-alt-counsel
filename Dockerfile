FROM node:18-slim

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

# Install ttyd for web terminal
RUN curl -Lo /usr/local/bin/ttyd https://github.com/tsl0922/ttyd/releases/latest/download/ttyd.x86_64 \
    && chmod +x /usr/local/bin/ttyd

# Note: Claude Code installation moved to runtime setup
# This ensures the container builds reliably
ENV PATH="/root/.local/bin:$PATH"

# Set working directory
WORKDIR /workspace

# Copy package.json first for better Docker layer caching
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy project files
COPY . /workspace/

# Make scripts executable
RUN chmod +x ghost_jwt.js search_posts.js

# Setup blog-specific shell aliases and environment
RUN echo 'export PS1="\[\e[36m\]blog-alt-counsel\[\e[m\] \[\e[32m\]\w\[\e[m\] $ "' >> /root/.bashrc

# Blog automation aliases - now all Node.js!
RUN echo 'alias blog-token="node ghost_jwt.js"' >> /root/.bashrc
RUN echo 'alias search-posts="node search_posts.js"' >> /root/.bashrc
RUN echo 'alias list-agents="ls -la .claude/agents/"' >> /root/.bashrc
RUN echo 'alias ghost-docs="cat docs/ghost-admin-api.md"' >> /root/.bashrc

# Enhanced blog workflow aliases
RUN echo 'alias token-headers="node ghost_jwt.js --print-headers"' >> /root/.bashrc
RUN echo 'alias token-examples="node ghost_jwt.js --examples"' >> /root/.bashrc
RUN echo 'alias token-quiet="node ghost_jwt.js --quiet"' >> /root/.bashrc
RUN echo 'alias env-help="node ghost_jwt.js --env-help"' >> /root/.bashrc

# Claude Code blog automation aliases
RUN echo 'alias new-post="claude --agent .claude/agents/blog-skeleton-generator.md"' >> /root/.bashrc
RUN echo 'alias audit-post="claude --agent .claude/agents/content-quality-auditor.md"' >> /root/.bashrc
RUN echo 'alias legal-review="claude --agent .claude/agents/legal-tech-blog-reviewer.md"' >> /root/.bashrc
RUN echo 'alias corp-review="claude --agent .claude/agents/corporate-lawyer-reviewer.md"' >> /root/.bashrc

# Claude Code setup aliases (since we install at runtime)
RUN echo 'alias setup-claude="curl -fsSL https://claude.ai/install.sh | bash && echo \"Claude Code installed! Run: claude auth login\""' >> /root/.bashrc
RUN echo 'alias install-claude="setup-claude"' >> /root/.bashrc
RUN echo 'alias claude-help="echo \"Run setup-claude to install Claude Code, then claude auth login to authenticate\""' >> /root/.bashrc

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
