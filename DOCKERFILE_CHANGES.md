# Dockerfile Simplification Guide

## What Changed and Why

### Size Reduction
- **Before**: 190 lines with multi-stage build
- **After**: 130 lines, single-stage build
- **Savings**: 32% smaller, faster builds

### Key Changes

#### 1. Removed Rust Build Stage (Lines 1-11 → Deleted)
**Before**: Building shpool from source using Rust compiler
```dockerfile
FROM rust:slim-bookworm AS shpool-builder
RUN cargo install shpool
```

**After**: Using tmux (pre-compiled, available in apt)
```dockerfile
RUN apt-get install -y tmux
```

**Why**:
- tmux is more stable and mature than shpool
- No build stage = faster Docker builds
- tmux has better documentation and community support
- Eliminates daemon lifecycle issues you were experiencing

#### 2. Switched to Non-Root User (Lines 16 → Lines 37-40)
**Before**: Running as root
```dockerfile
FROM node:20-bookworm-slim
# ... everything runs as root
```

**After**: Running as 'node' user
```dockerfile
RUN useradd -m -s /bin/bash node && \
    echo "node ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers
USER node
```

**Why**: Security best practice from official claude-code devcontainer

#### 3. Simplified Claude Code Installation (Line 52 → Line 44)
**Before**: curl installer
```dockerfile
RUN curl -fsSL https://claude.ai/install.sh | bash
```

**After**: npm installer
```dockerfile
RUN npm install -g @anthropic-ai/claude-code@latest
```

**Why**: Official devcontainer uses npm - more reliable in containerized environments

#### 4. Removed Complex Environment Workarounds (Lines 93-116 → Lines 65-71)
**Before**: Custom .bash_env file prepended to .bashrc
```dockerfile
RUN cat > /root/.bash_env <<'ENV_EOF'
# Complex .env parsing with workarounds for shpool daemon
export PATH="/root/.local/bin:/usr/local/bin:/root/.cargo/bin:$PATH"
# ... 20 lines of .env parsing logic
ENV_EOF

RUN { echo '. /root/.bash_env'; echo ''; cat /root/.bashrc; } > /tmp/.bashrc.new
```

**After**: Simple source in .bashrc
```dockerfile
# Source .env file if it exists
if [ -f "/workspace/.env" ]; then
    set -a
    source /workspace/.env 2>/dev/null
    set +a
fi
```

**Why**: tmux doesn't lose environment like shpool daemon did

#### 5. Simplified Session Persistence (Line 189 → Line 130)
**Before**: ttyd → shpool-session.sh → shpool attach
```dockerfile
CMD ["ttyd", "-p", "7681", "-i", "0.0.0.0", "/workspace/scripts/shpool-session.sh"]
```

**After**: ttyd → tmux directly
```dockerfile
CMD ["ttyd", "-p", "7681", "-i", "0.0.0.0", "tmux", "new-session", "-A", "-s", "blog"]
```

**Why**: One less layer of indirection, simpler debugging

#### 6. Removed Excessive Aliases (Lines 119-179 → Lines 85-93)
**Before**: 60+ lines of aliases
**After**: 10 essential aliases

**Why**: Keep it simple - add more aliases manually as needed

### What You Keep

✅ **ttyd for web terminal** - Still accessible via browser
✅ **Session persistence** - tmux handles this reliably
✅ **Environment variables** - Sourced from .env file
✅ **GitHub integration** - gh CLI pre-configured
✅ **Blog automation scripts** - All scripts still work
✅ **Claude Code** - Pre-installed and ready

### What You Lose

❌ **shpool** - Replaced with tmux (better for your use case)
❌ **.bash_env workarounds** - No longer needed
❌ **shpool-session.sh** - No longer needed
❌ **Rust build stage** - No longer needed

### Migration Steps

1. **Backup your current setup**
   ```bash
   cp Dockerfile Dockerfile.backup
   cp scripts/shpool-session.sh scripts/shpool-session.sh.backup
   ```

2. **Replace Dockerfile**
   ```bash
   cp Dockerfile.simplified Dockerfile
   ```

3. **Rebuild container**
   ```bash
   docker build --build-arg REPO_URL=https://github.com/houfu/blog-alt-counsel \
                --build-arg GITHUB_USERNAME=your-username \
                --build-arg GITHUB_PAT=your-token \
                -t blog-alt-counsel .
   ```

4. **Update your docker-compose.yml or Synology config**
   - Keep same port mapping (7681)
   - Keep same volume mounts for .env
   - Remove any shpool-specific environment variables

5. **First connection**
   - Access via browser: http://your-server:7681
   - You'll automatically be in a tmux session named 'blog'
   - Disconnect and reconnect - session persists!

### Testing Session Persistence

After connecting to the container:

```bash
# Start a long-running command
sleep 1000

# Close your browser tab (simulate train tunnel)

# Reopen browser to http://your-server:7681

# You should see your 'sleep 1000' still running!
```

### tmux Quick Reference

```bash
# Detach from session (keep it running)
Ctrl+b, then d

# List sessions
tmux ls

# Attach to session
tmux attach -t blog

# Kill session (if needed)
tmux kill-session -t blog
```

### Troubleshooting

**Problem**: "Connection refused" when accessing ttyd
**Solution**: Check if container is running and port 7681 is mapped

**Problem**: "tmux session not persisting"
**Solution**: Make sure you're detaching (Ctrl+b d) not exiting (typing 'exit')

**Problem**: "Environment variables missing"
**Solution**: Check that .env file is mounted at /workspace/.env

**Problem**: "Claude Code not found"
**Solution**: Run `npm install -g @anthropic-ai/claude-code@latest` inside container

### Why This Will Be More Stable

1. **No daemon lifecycle issues** - tmux is rock-solid, battle-tested since 2007
2. **Simpler debugging** - Only 2 layers (ttyd → tmux) instead of 3 (ttyd → shpool → bash)
3. **Better error messages** - tmux errors are well-documented, shpool errors are obscure
4. **Security hardened** - Non-root user follows container best practices
5. **Faster builds** - No Rust compilation step
6. **Official installer** - npm is the recommended Claude Code installation method

### Rollback Plan

If something goes wrong:

```bash
# Restore old Dockerfile
cp Dockerfile.backup Dockerfile

# Restore old startup script
cp scripts/shpool-session.sh.backup scripts/shpool-session.sh

# Rebuild with old configuration
docker build -t blog-alt-counsel .
```
