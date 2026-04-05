# OpenClaw Research

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
