# Environment Variable Handling in Simplified Dockerfile

## The Problem You Asked About

> "How are environment values like PATH and those I set in the docker-compose file dealt with here?"

Great question! The simplified Dockerfile has **two critical environment challenges**:

### Challenge 1: PATH with Non-Root User

**Original setup (root user):**
```dockerfile
RUN curl -fsSL https://claude.ai/install.sh | bash
ENV PATH="/root/.local/bin:$PATH"  # Added to Dockerfile
```
Claude Code installs to `/root/.local/bin`, PATH explicitly set.

**Simplified v1 (non-root user) - BROKEN:**
```dockerfile
USER node
RUN npm install -g @anthropic-ai/claude-code@latest
# PATH not configured! claude command won't work ❌
```

npm installs to `/home/node/.npm-global/bin` but this isn't in PATH by default.

### Challenge 2: Docker-Compose ENV Vars in tmux Sessions

**The flow:**
```
1. Container starts with docker-compose ENV vars
   ↓
2. ttyd process (has ENV vars)
   ↓
3. tmux creates NEW session (inherits ENV) ✅
   ↓
4. bash shell (has ENV vars) ✅

[You disconnect on train, later reconnect]

5. Container still running (ttyd has ENV vars)
   ↓
6. tmux ATTACHES to EXISTING session (has OLD ENV) ❌
   ↓
7. bash shell (still has OLD ENV) ❌
```

**Example scenario:**
1. You set `GHOST_ADMIN_API_KEY=abc123` in docker-compose.yml
2. Container starts, tmux session created, ENV has `abc123`
3. You disconnect on train
4. You update docker-compose.yml with `GHOST_ADMIN_API_KEY=xyz789`
5. You restart container and reconnect
6. tmux session STILL has `abc123` ❌

This is the exact problem your original Dockerfile solved with `.bash_env`!

## The Solution: Dockerfile.simplified-v2

### Fix 1: Configure npm Global Prefix

**Lines 51-52:**
```dockerfile
RUN mkdir -p /home/node/.npm-global && \
    npm config set prefix '/home/node/.npm-global'
```

This tells npm: "Install global packages to `/home/node/.npm-global/bin`"

**Line 94 in .bashrc:**
```bash
export PATH="/home/node/.npm-global/bin:$PATH"
```

Now `claude` command works!

### Fix 2: Entrypoint Script Captures Docker ENV

**Lines 154-174 - entrypoint.sh:**
```bash
# Capture current environment to a file
cat > /tmp/docker-env.sh <<ENV_EXPORT_EOF
export GHOST_SITE_URL="${GHOST_SITE_URL:-}"
export GHOST_ADMIN_API_KEY="${GHOST_ADMIN_API_KEY:-}"
export ANTHROPIC_API_KEY="${ANTHROPIC_API_KEY:-}"
# ... more vars
ENV_EXPORT_EOF
```

This runs **every time the container starts**, capturing docker-compose ENV vars to `/tmp/docker-env.sh`.

**Lines 96-100 in .bashrc:**
```bash
# Source docker-compose ENV vars (captured on container start)
if [ -f "/tmp/docker-env.sh" ]; then
    source /tmp/docker-env.sh 2>/dev/null
fi
```

Every bash shell (even in tmux) sources this file, getting fresh ENV!

### Fix 3: Three-Layer ENV Loading

The .bashrc loads environment in this priority order:

1. **PATH setup** (line 94) - Always needed first
2. **Docker-compose vars** (lines 96-100) - From `/tmp/docker-env.sh`
3. **Workspace .env file** (lines 102-107) - Can override docker-compose
4. **Defaults** (lines 109-112) - Fallbacks if nothing set

**Example:**
```yaml
# docker-compose.yml
environment:
  GHOST_SITE_URL: https://alt-counsel.ghost.io
  GHOST_ADMIN_API_KEY: secret123
```

```bash
# /workspace/.env
GHOST_API_VERSION=v7.0
```

**Result in shell:**
- `GHOST_SITE_URL` = https://alt-counsel.ghost.io (from docker-compose)
- `GHOST_ADMIN_API_KEY` = secret123 (from docker-compose)
- `GHOST_API_VERSION` = v7.0 (from .env file - overrides default)

## Visual Comparison

### Your Original Dockerfile
```
┌─────────────────────────────────────────┐
│ Docker-compose ENV vars                  │
│ (GHOST_SITE_URL, API_KEY, etc)          │
└──────────────┬──────────────────────────┘
               ↓
┌──────────────┴──────────────────────────┐
│ ttyd process                             │
└──────────────┬──────────────────────────┘
               ↓
┌──────────────┴──────────────────────────┐
│ shpool-session.sh                        │
│ (env vars lost here!)                    │
└──────────────┬──────────────────────────┘
               ↓
┌──────────────┴──────────────────────────┐
│ shpool daemon                            │
│ (more env vars lost!)                    │
└──────────────┬──────────────────────────┘
               ↓
┌──────────────┴──────────────────────────┐
│ bash sources .bash_env                   │
│ → Parses /workspace/.env manually        │
│ → Reconstructs env vars                  │
└──────────────────────────────────────────┘
```

**Workaround needed:** Complex 20-line .env parsing in .bash_env

### Simplified v2 Dockerfile
```
┌─────────────────────────────────────────┐
│ Docker-compose ENV vars                  │
│ (GHOST_SITE_URL, API_KEY, etc)          │
└──────────────┬──────────────────────────┘
               ↓
┌──────────────┴──────────────────────────┐
│ entrypoint.sh                            │
│ → Exports ENV to /tmp/docker-env.sh      │
└──────────────┬──────────────────────────┘
               ↓
┌──────────────┴──────────────────────────┐
│ ttyd process (has ENV)                   │
└──────────────┬──────────────────────────┘
               ↓
┌──────────────┴──────────────────────────┐
│ tmux session (may have stale ENV)        │
└──────────────┬──────────────────────────┘
               ↓
┌──────────────┴──────────────────────────┐
│ bash sources .bashrc                     │
│ → Sources /tmp/docker-env.sh (fresh!)    │
│ → Sources /workspace/.env (overrides)    │
└──────────────────────────────────────────┘
```

**Workaround needed:** None! Simple file sourcing.

## Testing ENV Handling

### Test 1: Verify claude Command Works
```bash
# After building and starting container
which claude
# Should show: /home/node/.npm-global/bin/claude

claude --version
# Should show version number
```

### Test 2: Verify Docker-Compose ENV Vars Load
```bash
# In your docker-compose.yml:
environment:
  GHOST_SITE_URL: https://test.example.com

# In container shell:
echo $GHOST_SITE_URL
# Should show: https://test.example.com
```

### Test 3: Verify ENV Persists Through Reconnection
```bash
# Set a test var in docker-compose.yml
environment:
  TEST_VAR: initial_value

# Start container, connect via browser
echo $TEST_VAR
# Shows: initial_value

# Update docker-compose.yml
environment:
  TEST_VAR: updated_value

# Restart container (docker-compose restart)

# Reconnect via browser (tmux attaches to old session)
echo $TEST_VAR
# Shows: updated_value ✅ (because .bashrc re-sources it!)
```

### Test 4: Verify .env File Override
```bash
# In docker-compose.yml:
environment:
  GHOST_API_VERSION: v6.0

# In /workspace/.env:
GHOST_API_VERSION=v7.0

# In shell:
echo $GHOST_API_VERSION
# Shows: v7.0 (.env overrides docker-compose)
```

## What About Non-Listed ENV Vars?

The entrypoint script only captures specific vars:
- GHOST_SITE_URL
- GHOST_ADMIN_API_KEY
- GHOST_API_VERSION
- ANTHROPIC_API_KEY
- GITHUB_USERNAME
- GITHUB_PAT
- PROJECT_ROOT
- NODE_ENV

**To add more vars**, edit the entrypoint script (lines 160-168):

```bash
export MY_CUSTOM_VAR="${MY_CUSTOM_VAR:-}"
```

Or just add them to `/workspace/.env` file (mounted volume).

## Why This Is Better Than Original

### Original Approach
❌ 20-line bash script to parse .env file
❌ Doesn't capture docker-compose vars, only .env file
❌ Complex string manipulation to strip quotes
❌ Runs on every shell startup (slow)
❌ Needed because shpool daemon lost ENV

### Simplified v2 Approach
✅ Simple file sourcing (2 lines)
✅ Captures both docker-compose vars AND .env file
✅ Standard bash sourcing (fast, reliable)
✅ Runs once on container start, sourced on shell start
✅ Works because tmux ENV is just stale, not lost

## Summary

**Your question:** "How are environment values like PATH and those I set in docker-compose file dealt with here?"

**Answer:**

1. **PATH**: Configured with npm prefix + explicit export in .bashrc
2. **Docker-compose vars**: Captured to `/tmp/docker-env.sh` on container start
3. **Reloading**: Every bash shell sources both docker-env.sh and .env file
4. **Priority**: PATH → docker-compose → .env → defaults

This ensures:
- `claude` command always works (PATH)
- Docker-compose ENV vars available in tmux (captured at start)
- .env file can override specific values (flexibility)
- Fresh ENV even after disconnections (sourced every shell)

The key insight: **tmux sessions have stale ENV, but we can reload it in .bashrc**. This is simpler than your original .bash_env approach because we don't need complex .env parsing - we just save the docker-compose vars once and source them.
