# OpenClaw Research

> **Last updated:** 2026-04-07. April update appended at the bottom.

## What is OpenClaw?

**OpenClaw** is a free, open-source autonomous AI agent — a general-purpose personal AI assistant that executes tasks via LLMs using messaging platforms (WhatsApp, Telegram, Slack, Signal, Discord) as its main interface.

- **Creator:** Peter Steinberger (Austrian developer, previously built PSPDFKit — PDF SDK used on 1B+ devices, raised $116M)
- **Initial release:** November 24, 2025, as "Clawdbot"
- **Name history:** Clawdbot → Moltbot (Jan 27, 2026, after Anthropic trademark complaint) → OpenClaw (Jan 30, 2026)
- **License:** MIT License
- **Written in:** TypeScript and Swift
- **GitHub:** 247,000+ stars as of March 2026 (fastest-growing repo in GitHub history)
- **Key event:** Feb 14, 2026 — Steinberger joined OpenAI; project moved to open-source foundation

## Core Capabilities

- Execute shell commands, read/write files, control browser (via Playwright)
- Integrate with messaging apps (WhatsApp, Telegram, Slack, Signal, iMessage, email)
- Persistent memory across sessions
- "Heartbeat" scheduler — wakes on timer to proactively act autonomously
- Skills system — extensible via packaged automation scripts, distributed through ClawHub marketplace
- SOUL.md configuration — plain-text file defining agent personality, boundaries, permissions
- MCP (Model Context Protocol) integration

**Key differentiator:** It is *agentic* — acts proactively and autonomously rather than waiting for prompts.

## How Lawyers Are Using It

### Daimon Legal (Australia) — Full firm deployment
- Self-hosted on homelab VM via Tailscale
- 10 production workflows: SEO monitoring, daily news digest, RSS feeds, conference planning, legislative monitoring, research verification, knowledge management, CRM management
- Emphasis on data sovereignty and client confidentiality
- Source: https://www.daimonlegal.com/blog/how-can-i-use-openclaw-10-use-cases-from-our-firm-and-the-legal-issues-you-should-know-about

### My Legal Academy — Law firm intake automation (US)
- Deployed for 400+ US law firms as AI executive assistant
- 24/7 lead capture via WhatsApp — one PI firm: 12% → 67% after-hours lead capture
- Cost: $25-85/month vs. $200-1,380/month for human answering services
- Source: https://mylegalacademy.com/kb/what-is-openclaw-law-firm-guide

### Stephen Smith (Legal consultant) — Personal agent team
- Built specialized agents: Scout, Quill, Ledger, Sentinel, Archivist, Briefing
- Research, CRM, content drafting, competitive intelligence, morning briefings
- Explicitly warns: "If you run a law firm, you should not be deploying OpenClaw right now"
- Source: https://www.smithstephen.com/p/the-hottest-ai-tool-of-2026-is-one

### LawClaw — Legal-specific derivative
- Released "Citadel Protocol" — sovereign AI system for US legal sector with dedicated hardware
- Source: https://www.rgj.com/press-release/story/146028/lawclaw-releases-citadel-protocol

## Legal & Regulatory Landscape

- **US:** Malpractice liability, ABA Model Rules on confidentiality, attorney-client privilege concerns (Baker Botts, Bloomberg Law)
- **EU:** AI Act classification challenges — general-purpose agent doesn't fit risk tiers
- **Australia:** Solicitors' Conduct Rules (Rule 9 on confidentiality), Privacy Act (Daimon Legal)
- **Singapore:** Shadow AI risks, enterprise security concerns (Business Times Singapore, Mar 24, 2026)
- **China:** Restricted state agencies; simultaneously, Shenzhen offering subsidies up to $720K for OpenClaw-based startups; Tencent built WeChat products on it

## Security Concerns

- Cisco: 26% of 31,000 ClawHub skills contained vulnerabilities; 824+ malicious skills (Koi Security)
- Warnings from: Cisco, Snyk, Palo Alto Networks, Immersive Labs, Gartner ("unacceptable cybersecurity risk")
- OpenClaw's own maintainer "Shadow" warned it's "far too dangerous" for non-technical users
- Notable incidents: "Crustafarianism" (AI-created digital religion), MoltMatch dating profile created without user direction

## Singapore/ASEAN Connection

- Business Times Singapore (Mar 24, 2026): feature on "shadow AI" risks, quoting NUS Prof Ooi Wei Tsang, KPMG Singapore, SGTech, Group-IB
- OpenClawSG.net: Singapore-based setup service emerged
- Straits Times covered MoltMatch dating incident
- Raymond Sun (Sydney, works across UK/China/Singapore): discussed regulation on Legal Tech Hobbyist podcast
- No Singapore government adoption or endorsement found

## Comparison to Legal-Specific Open Source Tools

| Tool | Purpose | Legal-Specific? |
|------|---------|----------------|
| **OpenClaw** | General-purpose autonomous AI agent | No — being adapted for legal |
| **Caselaw Access Project** (Harvard) | US case law database/API | Yes |
| **Free Law Project / CourtListener** | US court data archive (9M+ decisions) | Yes |
| **Open Law Library** | Legislative code management | Yes |
| **OpenLaw** (openlaw.com) | AI legal assistant for Q&A/drafting | Yes |

## Key Takeaway

OpenClaw is **not a legal technology tool** — it is a general-purpose autonomous AI agent that has captured massive attention across industries, including law. Legal engagement falls into three categories: (1) early adopters using it for practice automation, (2) firms/commentators analyzing legal/regulatory implications, (3) cybersecurity warnings about risks for privileged client data.

---

# April 2026 Update

Research refreshed on 2026-04-07 (about 10 days after initial research).

## Adoption and growth

- **GitHub stars: 247K → 310K+** in 10 days (PCMag, April 5)
- **500K internet-facing instances** as of late March (up from 6,300 at launch, doubling weekly)
- **13 releases shipped in March alone** — extraordinary pace, but breaking changes are now a major community complaint

## Major releases since March 26

- **v2026.3.31:** Decoupled node pairing from node capabilities. Devices connecting to the gateway no longer automatically get full tool access. First real "defense in depth" architectural improvement.
- **v2026.4.2:** Task Flow orchestration (managed-vs-mirrored sync modes), plugin config path migration, Android assistant entrypoints (Google Assistant integration), `before_agent_reply` plugin hooks, exec defaults set to YOLO mode by default on gateway/node host
- **v2026.3.22** (called "the most powerful update in history" by Chinese tech community): pluggable sandboxes, 45+ new features, 20 security patches, ClawHub reorientation as default install path

## Stability — significant new finding

This is the area that most directly affected the post's tone. Multiple sources confirm constant breaking issues:

- **Reddit (Apr 5):** "OpenClaw updates keep breaking setups — frequent breaking changes, configs failing, hours lost debugging"
- **Facebook (Mar 23):** "OpenClaw breaks more easily than glass. Did a VPS update. Literally broke everything. 6+ hours still can't get it"
- **LinkedIn (Mar 16):** "OpenClaw broke my workflow 3 times in one week. Same tool. Same promise. Same failure."
- **GitHub issue #48205:** Gateway crashes every ~50 minutes with "Missing config" error (race condition at startup)
- **Dev.to (Mar 31):** "My setup wasn't broken in a visible way. It was *drifting*. Data paths weren't failing, they were rerouting. Services weren't crashing, they were degrading."
- **Facebook:** "It's an OpenClaw issue with context. It can blow out context resulting in poor performance. You have to get elbows deep"
- **"Agents of Chaos" study (Mar 9):** Identified 11 critical failure patterns in OpenClaw agents
- **GitHub issue #40082:** "OpenClaw accepts tasks but agents often do not execute"
- **LinkedIn (Scott Ruckh):** "The core issue is that this whole stack is unreliable for production-style automation"
- **ArXiv paper (Apr 3):** Systematic security evaluation showing "early-stage weaknesses amplified into concrete system-level failures"

## Security — got dramatically worse

- **CVE-2026-33579 (Apr 3):** Critical vulnerability (CVSS 8.1-9.8) allowing anyone with lowest-level pairing privileges to silently gain full admin access. No user interaction required. **63% of 135,000 exposed instances had no authentication.**
- **CVE-2026-32982 (SentinelOne, Apr 3):** Information disclosure via Telegram bot tokens through error messages
- **CVE-2026-24763 (CVSS 8.8):** Command injection
- **CVE-2026-25157 (CVSS 7.7):** OS command injection
- **CVE-2026-25253 (CVSS 8.8):** Token exfiltration to full gateway compromise
- **BreachForums incident (VentureBeat, Mar 31):** A UK CEO's OpenClaw instance listed for sale at $25,000. Included every conversation with the AI, production database, Telegram tokens, API keys, personal family details. OpenClaw stored everything in **plain-text Markdown** under `~/.openclaw/workspace/` with no encryption at rest.
- **ClawHub malware audit (USA Today, Apr 5):** 341 of 2,857 published skills (12%) confirmed malicious — keyloggers, credential stealers, silent data exfiltration via curl, prompt injection payloads. 280+ additional skills with plaintext credential exposure.
- **No enterprise kill switch exists** — no management console, no centralized patching, no fleet-wide controls
- **Vendor responses at RSAC 2026:** Cisco DefenseClaw + AI Defense Explorer Edition, Palo Alto Prisma AIRS 3.0 with agentic registry, Cato Networks adversarial PoC research, CrowdStrike detecting 1,800+ distinct AI apps on enterprise endpoints

## New legal usage examples

### Anonymous lawyer with 37 custom skills (Reddit, Apr 1)
Running 37 custom OpenClaw skills for their practice — all admin, not legal advice. Workflows include:
- Processing court events to a court calendar
- Sending retainer letters automatically
- Tracking retainer balances with low-balance alerts
- Sending replenishment requests
- Consolidating facts into discovery documents
- Collecting/cross-checking opposing counsel's discovery
- Filing motions for missing discovery
- Preparing bank subpoenas
- Drafting statements of net worth
- All custom-built, nothing from ClawHub
- Source: https://www.reddit.com/r/better_claw/comments/1s9jhql/7_openclaw_use_cases_that_arent_vague_or_fake

### 3-attorney firm via automation consultant (Reddit, Apr 4)
- Automation builder set up the system for the firm — they did NOT do it themselves
- One agent screens new inquiries and routes to right attorney
- One tracks court dates, filing deadlines, statute of limitations alerts
- One drafts client updates and status reports
- One monitors legal news in their practice areas
- Claim: 20-25 hours/week saved
- Source: https://www.reddit.com/r/openclaw/comments/1sbk0zk/

### Pat Veilleux — chose simpler over OpenClaw (LinkedIn, Mar 27)
- Lawyer at Legal Velocity, planned to build a billing agent on OpenClaw
- Decided it would require "lots of configuration, security provisioning, and technical troubleshooting"
- Built "Carmen" instead in 3 lunch periods using Claude Projects + Gmail + Notion + Clockify + Helcim
- Sends one message monthly: "Carmen, run billing for March"
- Andrew C. Goodwin (Rhodium Law) endorsed the simpler approach in comments
- Matt Funk called OpenClaw "the crazy uncle... Wild and dangerous"
- **Used in the post**
- Source: https://www.linkedin.com/posts/pat-veilleux-967845186_everyone-is-talking-about-ai-agents-like-activity-7443261820456419328-nG44

### Stephen Smith — pivoted away to Claude Code "Project Ollie" (Mar 29)
- **Major update**: moved away from OpenClaw entirely
- Rebuilt on Claude Code with Opus 4.6 — system called "Project Ollie"
- 14 specialized agents on a $600 Mac Mini (down from earlier Scout/Quill/Ledger naming)
- Killed 3 agents (demo scout produced noise, two content pipeline agents never read)
- Had a security incident where an agent executed a command it shouldn't have
- One agent caught a follow-up that booked a client engagement (4-day-old buried thread)
- Architecture: macOS launchd scheduler, one universal launcher script, persistent memory
- Quote: "OpenClaw helped show what was possible. Project Ollie is what happened when I tried to close the gap between possible and trusted."
- **Used in the post**
- Source: https://www.smithstephen.com/p/the-ai-agent-demo-was-easy-trusting

### Daimon Legal — updated post (Mar 24)
- Setup confirmed: single VM in homelab, connected via Tailscale, segregated network/file system/resources
- Use cases now include website analytics/SEO, daily news digest, custom RSS feeds, conference planning, restaurant recommendations, holiday planning, legislative monitoring (cron jobs), research verification, academic research to Obsidian/Outline, CRM via self-hosted Twenty CRM
- Strong warning about LLM API data flows: even self-hosted, prompts to OpenAI/Anthropic/Google hit third-party servers — risks waiver of legal professional privilege under Australian Solicitors' Conduct Rules (Rule 9)
- Separate piece on agentic AI liability (Mar 13): https://www.daimonlegal.com/blog/agentic-ai-and-the-law-who-is-liable-when-your-ai-agent-makes-a-mistake

### SFAI Labs — "OpenClaw for Law Firms" deployment guide (Mar 31)
- Comprehensive deployment guide specifically for law firms
- Includes concrete skill file examples for client intake (Telegram/WhatsApp), conflict checking against local CSV, daily case law monitoring via browser automation, deadline tracking with multi-tiered alerts, billing time capture, client follow-up automation
- **Claims $26-32/month total operating cost** for solo or small firm
- Notes ABA Model Rule 1.6 considerations for self-hosting
- Source: https://sfailabs.com/guides/openclaw-for-law-firms

### Setup consultants emerging
- **LaunchMyOpenClaw.com** — consultancy specifically for OpenClaw setup
- **RemoteOpenClaw.com** — Zac Frulloni, "10 Things You Can Actually Do With It" guide
- **OpenClawSG.net** — Singapore-based setup service
- **ClawGo** — UK startup launched a hardware companion device, uses "harness" terminology extensively in their press release
- **Used in the post** as proof that the harness is hard

## Singapore / ASEAN

### OpenClaw Singapore Legal Meetup — April 7, 2026
- 6pm-9:30pm at Tanjong Pagar
- Co-organized by Lionel Sim (The AI Capitol / Claw Singapore) and Hanyi Zeng (Hubris Works — former legal professional turned AI professional)
- **Joshua Ng** from Providence Law Asia LLC presenting on his actual usage
- "Spots running out fast" 6 days before the event
- Builds on momentum from earlier OpenClaw SG events with GovTech, Amazon, Tencent
- **KIV for Part 2** — Joshua Ng's experience could be great Part 2 material

### Joshua Ng background (Providence Law Asia)
- Counsel at Providence Law Asia LLC (joined March 2026)
- Specialises in complex commercial disputes — fraud, asset recovery, shareholder disputes, appellate
- Heavyweight case experience: Hin Leong liquidation (~S$4.7B), US$19M trade finance fraud trial, multi-jurisdictional disputes (Japan, Cayman, Malaysia, Switzerland, Pakistan)
- SMU Law grad (2021) with **Advanced Certificate in Law and Technology**
- Member, Law Society Technology and Innovation Committee (2026)
- LinkedIn tagline: "Disputes Lawyer | Specializing in Commercial Litigation & Technology"
- A practising disputes lawyer with a tech interest — not a coder or builder. Most relatable profile for the alt-counsel audience.

### Singapore IMDA Model AI Governance Framework for Agentic AI v1.0
- Published January 2026 — **world's first agentic AI governance framework**
- Mayer Brown published a client advisory (Apr 1) on practical guidance for market entry
- Multiple law firms (AMT Law, Mar 26) and consultancies (Aivance.sg) advising on compliance
- Structured around four dimensions
- Referenced by IRAIA Protocol 2026-03 (LinkedIn, Mar 28) as "Asia-Pacific Governance Landmark"

### Hong Kong banned OpenClaw
- The Star (Mar 16-18): Hong Kong government banned OpenClaw from government departments
- Cited security risks and "excessive permissions" concerns

## Claude Dispatch comparison

Three-way comparison published (March 26) covering Claude Dispatch vs OpenClaw vs Google Mariner:

| Feature | Claude Dispatch | OpenClaw | Google Mariner |
|---|---|---|---|
| Price | $20-200/mo | Free + API (~$5-20/mo) | $250/mo |
| Models | Claude only | Any (Claude, GPT, Gemini, local) | Gemini 2.0 only |
| Setup | ~2 min (QR code) | 30-60 min (terminal) | ~5 min (Chrome ext) |
| Scope | Desktop + files + browser | Desktop + 15+ messaging apps | Browser only |
| Security | Sandboxed, per-app permissions | User-configured, no defaults | Google-managed cloud VMs |
| 24/7 ops | No (desktop must stay awake) | Yes | Yes (cloud VMs) |
| Local file access | Yes | Yes | No |

- **Ethan Mollick (Apr 1)** wrote about Claude Dispatch and "the power of interfaces" — significant endorsement
- Anthropic shipped Remote Control, Dispatch, Channels, Computer Use, Auto Mode, AutoDream all in Q1 2026
- Computer use landed Mar 24 as research preview
- **Used in the post** as the bonus preview at the end

## Key insight from April research

The two biggest changes since the original research:

1. **Stability is now confirmed as a real, widespread problem** — not just one user's experience. The 13-releases-in-March pace is producing constant breaking changes that the community is openly complaining about. This validates the post's darker tone.

2. **Setup consultants and pivots away from OpenClaw prove the thesis** — Stephen Smith's move to Claude Code, Pat Veilleux's choice of Claude Projects, the emergence of LaunchMyOpenClaw/RemoteOpenClaw/ClawGo all demonstrate that the harness complexity is real enough to spawn an industry of workarounds.
