# Research — From One Source to Three: When the Right Agent Showed Up

> **Last updated:** 2026-04-28. Lightweight research file. Scope: NanoClaw description, agent + channel pattern, data.zeeker.sg verification.

## 1. NanoClaw — what it is

### Source of truth

- **GitHub:** [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)
- **Author:** qwibitai (GitHub user)
- **License:** MIT
- **Released:** Reddit announcement Feb 13, 2026 (r/ClaudeCode)
- **Tagline (canonical):** *"An AI assistant that runs agents securely in their own containers. Lightweight, built to be easily understood and completely customized for your needs."*
- **Website:** [nanoclaw.dev](https://nanoclaw.dev)

### Creator's framing (from README — preserves the generous tone we want)

> "OpenClaw is an impressive project, but I wouldn't have been able to sleep if I had given complex software I didn't understand full access to my life. OpenClaw has nearly half a million lines of code, 53 config files, and 70+ dependencies. Its security is at the application level (allowlists, pairing codes) rather than true OS-level isolation."

This framing is important: NanoClaw's own README is *not* dismissive of OpenClaw — it acknowledges OpenClaw is "impressive" while making a case for a different shape of tool. That's the tone we want to mirror in the post.

### Six philosophy points (paraphrased from README)

1. **Small enough to understand** — one process, a handful of source files, no microservices
2. **Secure by isolation** — Linux containers with filesystem isolation; bash access is safe because commands run inside the container, not on the host
3. **Built for the individual user** — bespoke fork-and-modify, not a monolithic framework
4. **Customization = code changes** — no configuration sprawl; ask Claude Code to modify the code instead
5. **AI-native, hybrid by design** — install/onboarding is deterministic scripted; judgment work hands off to Claude Code
6. **Skills over features** — channel adapters (Discord, Slack, Telegram, WhatsApp...) install on demand via `/add-<channel>` skills

### Technical specifics relevant to the post

| Property | Value |
|---|---|
| Built on | Claude Agent SDK / Claude Code natively |
| Process model | Single Node host orchestrating per-session containers |
| Security model | Linux containers (Docker, with optional Apple Container or Docker Sandboxes micro-VM) — filesystem isolation, mounts only what's explicitly allowed |
| Credential model | Agents never hold raw API keys; outbound requests route through OneCLI's Agent Vault |
| Storage | Two SQLite files per session (`inbound.db`, `outbound.db`) — single-writer, no IPC |
| Channels supported | WhatsApp, Telegram, Discord, Slack, Teams, iMessage, Matrix, Google Chat, Webex, Linear, GitHub, WeChat, email — installed on demand |
| Scheduled tasks | Recurring jobs that run Claude and message back |
| Per-agent workspace | Each agent group has its own `CLAUDE.md`, memory, container |
| Configuration | None. Customization happens by asking Claude Code to modify the code |

### External coverage (for citations if needed)

- **Forbes (Mar 13, 2026):** *"Don't Trust AI Agents, Says OpenClaw's Security-First Alternative"* — covers the Docker/Apple Container integration. [Link](https://www.forbes.com/sites/gilpress/2026/03/13/dont-trust-ai-agents-says-nanoclaw-now-fully-integrated-with-docker)
- **TheNewStack (Mar 7, 2026):** *"NanoClaw can stuff each AI agent into its own Docker container"* — focuses on container isolation as differentiator. [Link](https://thenewstack.io/nanoclaw-containerized-ai-agents)
- **DataCamp (Apr 7, 2026):** *"NanoClaw vs OpenClaw: Choosing Your 2026 AI Agent Framework"* — comparison piece. [Link](https://www.datacamp.com/blog/nanoclaw-vs-openclaw)
- **DataCamp Tutorial (Apr 7, 2026):** *"NanoClaw Tutorial: Build a Lightweight Local-First Agent"* — implementation walkthrough.
- **TheNewStack (Feb 20, 2026):** *"NanoClaw's answer to OpenClaw is minimal code, maximum isolation"* — early coverage.
- **Till Freitag blog:** *"NanoClaw: The Lean Successor to OpenClaw"* — describes "an AI agent so lightweight it runs on a Raspberry Pi."

### Why this matters for the post

The "small enough to audit" + "container isolation" + "Claude Code-native" combination is exactly what fit Zeeker's needs:

- **Security** — agents in containers can't accidentally poison Zeeker's data the way OpenClaw's hallucinated-scraping incident did (Part 1 closing)
- **Small footprint** — Raspberry Pi-grade resource needs vs OpenClaw's heavier deployment
- **Claude Code-native** — user already uses Claude Code for thinking; NanoClaw integrates rather than competes with that workflow
- **Bespoke fork model** — fits Zeeker's actual project shape rather than forcing personal-assistant assumptions

### Important context for the "neither is wrong" framing

NanoClaw is positioned by its creator as solving a *different problem* than OpenClaw, not a *better* version of the same problem. OpenClaw is for users who want a polished general-purpose personal assistant. NanoClaw is for users who want to read every line of their agent and customize it to fit. Neither approach is wrong — they're shaped for different kinds of work and different relationships with AI.

## 2. Agent + channel pattern

### Claude Code Channels (the feature)

Claude Code has native channel-based access since early 2026:
- **DataCamp tutorial (Mar 27, 2026):** [Claude Code Channels With Discord: Step-by-Step Setup Guide](https://www.datacamp.com/tutorial/claude-code-channels)
- **MindStudio (Mar 21, 2026):** [Claude Code Channels: How to Connect Your AI Agent to Telegram](https://www.mindstudio.ai/blog/claude-code-channels-telegram-discord-setup)

Pattern: Claude Code session accessible from Discord/Telegram/Slack as a remote interface. Combined with `/remote-control` (mentioned in OpenClaw Field Notes Part 1's closing).

### Plan → Do → Feedback loop discourse

There's a small but live community discussion of this pattern:
- **GitHub (Apr 26, 2026):** [Chachamaru127/claude-code-harness](https://github.com/Chachamaru127/claude-code-harness) — *"Claude Code Dedicated Development Harness — Achieving High-Quality Development Through an Autonomous Plan→Work→Review Cycle"*
- **Reddit r/ClaudeCode (Mar 11, 2026):** *Building Your Own Agent Harness* — early discussion of the harness-as-loop framing
- **Composio dev (Jan 19, 2026):** *I'm Building My Own Coding Agent Harness* — pattern of "agent that can write code, test it locally, create GitHub issues, and notify Slack, all through a single, observable execution loop"

These confirm the loop framework is a real community pattern, not invented for this post. **Don't lean on these heavily** — the post's voice is user's experience, not citation-heavy. One light reference at most.

### Singapore/ASEAN angle

No Singapore/ASEAN-specific writing on the channel-as-workflow pattern surfaced in this round of search. ⚠️ Most discussion is US/global. The post's Singapore angle stays anchored in Zeeker (SG-specific data sources) rather than in the agent pattern itself.

## 3. data.zeeker.sg current state (verified)

Verified via WebFetch on 2026-04-28:

- **Three databases live:**
  - **SG Law Watch** — 7 tables (Singapore legal news, FAQs, reference materials)
  - **Zeeker Judgements** — 4 tables (court judgment data)
  - **SG Government Newsrooms** — 10 tables (press releases, speeches, parliamentary replies from SG ministries and judiciary)
- **Total: 21 tables** across the three databases
- **Access methods:** Full SQL query editor with schema reference, CSV/JSON export, JSON API for programmatic access, full-text search across databases
- **Licensing:** CC-BY-4.0
- **Tagline:** *"Public data, rendered legible"* / *"Bring your questions, leave with data"*
- **Navigation:** How to Use, Developers, About, Status

**November 2025 baseline (from Zeeker Part 2b):** 1 source live (legal news aggregator), 346 articles, 0 known active users.

**Net change in ~5 months:** From 1 source / 346 articles → 3 databases / 21 tables / live JSON API / full SQL access.

### Notable additions since November

The **Zeeker Judgements** database is the most significant addition — it's adjacent to SOLID's territory but as full-text/structured data rather than empirical metadata. November Zeeker Part 3 explicitly positioned data.zeeker.sg as complementary to SOLID ("they're building retrospective research infrastructure; I'm building current awareness"). The judgments dataset slightly narrows that gap — but as full-text content access, not as the empirical research dataset SOLID is building.

The **SG Government Newsrooms** dataset (10 tables — the largest of the three) reinforces the "current awareness" framing. Press releases, speeches, parliamentary replies are exactly the kind of real-time content the November pitch promised.

## 4. Open questions / gaps for user

These items came up during research that the user can answer faster than another search round:

1. **NanoClaw discovery story** — How did you find NanoClaw? (Reddit announcement? r/ClaudeCode? Forbes piece? word of mouth?) Useful for a one-line authentic detail in the post if relevant.

2. **Specific tasks NanoClaw is running on Zeeker** — The post will benefit from one or two concrete examples (e.g., "every morning at 6am, NanoClaw checks the Singapore Government RSS feeds and queues new items into the Zeeker pipeline"). Per Voice Guide: specific numbers/details as anchors. What's actually scheduled?

3. **The Discord workflow specifics** — What does "switch off when I can defer" look like in practice? E.g., do you get a single morning digest? A queue of items? Threaded conversations? One concrete daily-rhythm detail will make the post visceral.

4. **OneCLI / credential model** — NanoClaw mentions OneCLI's Agent Vault for credential security. Do you actually use this layer, or have you customized it? Worth knowing for accuracy.

5. **Fork model in practice** — NanoClaw's philosophy is "fork and customize via Claude Code." Have you actually forked and modified it for Zeeker, or are you running the trunk install? (If forked: that's an interesting detail; if not: the philosophy still landed for you, which is its own story.)

These are nice-to-haves, not blockers. Drafting can proceed with what we have, and these can be filled in during writing if you have quick answers.

## What's NOT in this research

Per the research brief's "skip" list:

- ❌ Deep dive into other OpenClaw alternatives (Nanobot, PicoClaw, MicroClaw, IronClaw, NemoClaw, MoltWorker, ZeroClaw — all real, all skipped — Part 1 covered this landscape)
- ❌ General agent harness theory
- ❌ SOLID research (covered in November Zeeker posts)
- ❌ Pat Veilleux / Stephen Smith / Daimon Legal (Part 1's territory; pulled from this post per "don't beat up OpenClaw")
- ❌ OpenClaw stability research refresh (Part 1 covered)
