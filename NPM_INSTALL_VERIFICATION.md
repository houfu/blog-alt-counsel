# NPM Install Verification: Assumptions vs Reality

## Your Question

> "are you making assumptions about where npm will install the claude cli"

**Short answer: Yes, I was.** Thank you for catching that! Here's what I found after verifying against the official claude-code Dockerfile.

## What I Assumed (v2)

```dockerfile
USER node
RUN mkdir -p /home/node/.npm-global && \
    npm config set prefix '/home/node/.npm-global'
RUN npm install -g @anthropic-ai/claude-code@latest

# In .bashrc:
export PATH="/home/node/.npm-global/bin:$PATH"
```

**Assumptions I made:**
1. npm would respect the `npm config set prefix` command
2. Installing to `/home/node/.npm-global` would work
3. This would put the `claude` binary in `/home/node/.npm-global/bin`

**Was this approach valid?** Kind of. It's documented in the Node.js Docker best practices, but it's **not what the official claude-code devcontainer does**.

## What Actually Happens (Official Pattern)

I fetched the actual Dockerfile from https://github.com/anthropics/claude-code/blob/main/.devcontainer/Dockerfile

Here's what they do:

```dockerfile
# As root: create npm-global directory and chown to node
RUN mkdir -p /usr/local/share/npm-global && \
    chown -R node:node /usr/local/share

# Switch to node user
USER node

# Configure npm prefix using ENV (not npm config set!)
ENV NPM_CONFIG_PREFIX=/usr/local/share/npm-global
ENV PATH=$PATH:/usr/local/share/npm-global/bin

# Install Claude Code
RUN npm install -g @anthropic-ai/claude-code@${CLAUDE_CODE_VERSION}
```

## Key Differences

### Location

**My assumption:**
```
/home/node/.npm-global/bin/claude
```

**Official pattern:**
```
/usr/local/share/npm-global/bin/claude
```

### Configuration Method

**My assumption:**
```dockerfile
RUN npm config set prefix '/home/node/.npm-global'
```

This runs at **build time** and modifies npm's config file.

**Official pattern:**
```dockerfile
ENV NPM_CONFIG_PREFIX=/usr/local/share/npm-global
```

This sets an **environment variable** that npm respects. Cleaner and more explicit.

### Directory Creation

**My assumption:**
```dockerfile
USER node  # Already switched to node user
RUN mkdir -p /home/node/.npm-global  # node can create this
```

**Official pattern:**
```dockerfile
# As root:
RUN mkdir -p /usr/local/share/npm-global && \
    chown -R node:node /usr/local/share

# Then switch:
USER node
```

They create the directory as root in a system location, then grant ownership to node user.

## Why Does This Matter?

### 1. NPM Respects NPM_CONFIG_PREFIX

According to [npm documentation](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally), npm respects the `NPM_CONFIG_PREFIX` environment variable with highest priority.

This means:
- ✅ It overrides default prefix (`/usr/local`)
- ✅ It overrides `.npmrc` config files
- ✅ It's explicit and clear

### 2. System Location vs Home Directory

Using `/usr/local/share/npm-global`:
- ✅ Follows FHS (Filesystem Hierarchy Standard) for system-wide data
- ✅ Separates system-installed packages from user data
- ✅ Makes it clear these are "system" globals, not user-specific

Using `/home/node/.npm-global`:
- ⚠️ Mixes user data with system packages
- ⚠️ Less conventional location
- ✅ But also works fine according to [docker-node best practices](https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md)

### 3. ENV vs npm config set

Using `ENV NPM_CONFIG_PREFIX`:
- ✅ Declarative and explicit in Dockerfile
- ✅ Visible in `docker inspect`
- ✅ Can be overridden at runtime if needed

Using `npm config set prefix`:
- ⚠️ Hidden in npm's config file
- ⚠️ Less visible in Dockerfile
- ⚠️ Harder to override

## Verification

Here's how to verify the `claude` command is in the right place after building:

```bash
# Build the container
docker build -t blog-test .

# Run a test
docker run --rm blog-test which claude
# Should output: /usr/local/share/npm-global/bin/claude

# Check it works
docker run --rm blog-test claude --version
# Should output version number
```

## Would My Assumption Have Worked?

**Probably yes**, because:
- npm does respect `npm config set prefix`
- `/home/node/.npm-global` is writable by node user
- This is documented in nodejs/docker-node best practices

**But it's better to follow the official pattern** because:
- It's what claude-code officially uses
- It's tested and verified to work
- It uses environment variables (cleaner)
- It uses a more conventional location

## The Fixed Version (v3)

I created `Dockerfile.simplified-v3` which uses the **exact official pattern** for npm setup:

```dockerfile
# As root: create and chown
RUN mkdir -p /usr/local/share/npm-global && \
    chown -R node:node /usr/local/share

USER node

# Use ENV for npm prefix
ENV NPM_CONFIG_PREFIX=/usr/local/share/npm-global
ENV PATH=$PATH:/usr/local/share/npm-global/bin

# Install Claude
RUN npm install -g @anthropic-ai/claude-code@${CLAUDE_CODE_VERSION}
```

This is **verified** because it's copied directly from the official repository.

## Summary

| Aspect | My v2 Assumption | Official Pattern (v3) | Works? |
|--------|------------------|----------------------|--------|
| Location | `/home/node/.npm-global` | `/usr/local/share/npm-global` | Both work |
| Method | `npm config set prefix` | `ENV NPM_CONFIG_PREFIX` | Both work |
| Creation | As node user | As root, chown to node | Both work |
| Verified? | From docs, not tested | From official repo | v3 verified ✅ |

**Recommendation: Use v3** - It's the verified official pattern.

## Sources

- [Official claude-code Dockerfile](https://github.com/anthropics/claude-code/blob/main/.devcontainer/Dockerfile)
- [docker-node Best Practices](https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md)
- [npm: Resolving EACCES permissions errors](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally/)
- [sindresorhus/guides: npm global without sudo](https://github.com/sindresorhus/guides/blob/main/npm-global-without-sudo.md)
