# Research: Turn a Project Folder into a Cowork Workflow

**Date:** February 16, 2026
**Post:** Connect-Codraft Article
**Researcher:** Claude (opencode)

---

## Summary

This research covers three areas for the codraft article: (1) legal thought leaders' reactions to Cowork, (2) technical accuracy about how CLAUDE.md and skills work, and (3) the "folder as program" pattern analogies. Key findings: Bob Ambrogi has written about Cowork's legal plugin, technical documentation confirms CLAUDE.md auto-loads at session start, and VS Code's `.github/copilot-instructions.md` and `AGENTS.md` provide strong analogies for the folder-as-program pattern.

---

## Key Findings

### 1. Legal Thought Leaders on Cowork

**Bob Ambrogi (LawSites/LawNext) - Primary Coverage**

Bob Ambrogi has written extensively about Cowork's legal plugin, positioning it as a significant development in the legal tech landscape:

**Source:** [Anthropic's Legal Plugin for Claude Cowork May Be the Opening Salvo](https://www.lawnext.com/2026/02/anthropics-legal-plugin-for-claude-cowork-may-be-the-opening-salvo-in-a-competition-between-foundation-models-and-legal-tech-incumbents.html)
- **Date:** February 3, 2026
- **Regional Context:** ✅ Global (US-focused but relevant to all markets)

**Key Points:**
- Cowork launched Jan 12, 2026 as "Claude Code for the rest of your work"
- Anthropic added legal plugin Jan 30, 2026 with 11 starter plugins (marketing, finance, customer support, sales, legal)
- Legal plugin features: `/review-contract`, `/triage-nda`, `/vendor-check`, `/brief`, `/respond`
- Plugin connects to Slack, Box, Egnyte, Jira, Microsoft 365
- Market reaction: Legal tech stocks (Thomson Reuters, RELX, Wolters Kluwer) dropped sharply after announcement
- Plugin is open source, allowing customization without vendor lock-in
- Legal tech vendors' ace in the hole: proprietary datasets and subject-matter expertise

**Regional Context:** ⚠️ US/EU-centric market reaction, but the technology itself is globally applicable

**Jordan Furlong - No Cowork-Specific Coverage**

Search results show Jordan Furlong writing about AI and legal tech generally, but no specific mentions of Cowork since launch. His recent work focuses on:
- AI compressing legal tasks and diminishing associate leverage
- Legal profession identity crisis with generative AI
- Law firm profitability and AI adoption

**Regional Context:** ✅ Global legal tech analyst, but no Cowork-specific content found

**Casey Flaherty - No Cowork-Specific Coverage**

Search results show Casey Flaherty's work on legal tech competency audits and L.E.G.A.L. for GenAI, but no Cowork-specific coverage. His focus remains on:
- Technology competency audits for law firms
- Legal tech assessment and evaluation
- GenAI in law workflows

**Regional Context:** ✅ Global legal tech consultant, but no Cowork-specific content found

**Singapore Legal Tech Voices - Emerging Coverage**

**Vinova SG - Comprehensive Cowork Coverage**

Vinova SG, a Singapore-based IT solutions company, has published extensive coverage of Claude Cowork:

**Source:** [V-Techtips: How To Best Implement Claude Cowork for Enterprise and Professional Workflows](https://vinova.sg/v-techtips-how-to-best-implement-claude-cowork-for-enterprise-and-professional-workflows)
- **Date:** February 11, 2026
- **Regional Context:** ✅ Singapore/ASEAN (Vinova SG is headquartered in Singapore)

**Key Points:**
- Cowork marks shift from "Copy-Paste AI" to "Execution AI"
- Gartner predicts 40% of enterprise apps will embed autonomous agents by end of 2026
- Cowork uses sandboxed micro-VM (Apple Virtualization Framework) with strict folder-permission model
- Agent handles complex tasks like expense reporting, saving 4-10 hours per task
- Maximize efficiency by batching tasks to avoid 15-second VM startup delay
- Max 20x plans offer 900+ messages per five hours

**Subscription Tiers:**
- Claude Pro: $20/month (~45 messages/5 hours) - Occasional automation
- Claude Max 5x: $100/month (~225+ messages/5 hours) - Daily project work
- Claude Max 20x: $200/month (~900+ messages/5 hours) - Heavy users

**Cowork Task Lifecycle:**
1. Intent and Scope Analysis - scans approved folder, identifies file types
2. Planning and Task Decomposition - breaks high-level goal into subtasks
3. Parallel Execution and Sub-agents - "hub-and-spoke" model with ephemeral sub-agents
4. Real-time Monitoring and Steering - live logs and progress bars
5. Final Delivery and Change Logs - writes results to local filesystem

**Skills and MCP:**
- Skills stored directly in folders with SKILL.md as entry point
- Progressive disclosure - only loads full instructions when task needs them
- MCP (Model Context Protocol) acts as universal bridge to external tools
- Skills can include real code (Python/JavaScript) executed in secure sandbox

**Memory Files:**
- CLAUDE.md: Project blueprint (maps, API rules, decision logs)
- CONTEXT.md: User personalization (tone, formatting, role info)
- Local memory stored in folders, not cloud - keeps data private
- Update files whenever major changes occur

**Agent Teams (Feb 2026):**
- Sub-agents: Temporary workers, "hub-and-spoke" model, report to lead agent
- Agent Teams: Collaborative network, peer-to-peer messaging via Mailbox protocol, self-coordinating via shared task list
- Choose sub-agents for "doing" tasks, agent teams for "thinking" and coordination

**Browser Automation:**
- "Teach Claude" feature for recording web tasks
- Build-test-verify loop for developers
- Claude Opus 4.6 can work directly inside Microsoft Office (PowerPoint, Excel)

**Security:**
- Indirect prompt injection risk - AI reads files/websites with hidden malicious instructions
- "Wood chipper" effect - AI misinterprets command and deletes important files
- Environment hardening: dedicated workspace folder, credential blacklisting, permission-with-safeguards
- Regular backup cadence recommended

**Pro Roadmap (2026):**
- Phase 1: Environment Hardening (dedicated sandboxes, persistent context, pre-execution backup)
- Phase 2: Workflow Orchestration (batch tasks, leverage specialists, monitor token burn)
- Phase 3: Verification and Archival (review execution logs, verify before moving work)

**Regional Context:** ✅ Singapore/ASEAN-relevant, but focused on enterprise workflows

**LegalAI.guide - Legal Professional Tutorial Series**

**Source:** [Tutorial 01: Claude for Legal Professionals Overview](https://www.legalai.guide/docs/beginner/01-overview)
- **Date:** February 2026 (based on content)
- **Regional Context:** ✅ Global, but relevant to Singapore legal professionals

**Key Points:**
- Tutorial series teaches legal professionals Claude workflows with practical guardrails
- Claude for Legal Professionals Overview covers:
  - Flexibility: Works across any legal task, not locked into predefined workflows
  - Customizability: Create own playbooks, skills, and automations
  - Cost-Effectiveness: Pro plan at ~$20/month vs. $1,000+/month for enterprise legal AI
  - Integration Ecosystem: Connect to 400+ tools via MCP
  - Local-First Option: Cowork runs on desktop, keeping sensitive data local

**Legal Plugin Workflows:**
- `/review-contract`: Clause-by-clause review with risk flags and redline suggestions
- `/triage-nda`: NDA screening workflows
- `/vendor-check`, `/brief`, `/respond`: Common legal operations
- All outputs should be reviewed by licensed attorneys

**Skills for Repeatable Legal Work:**
- Use Skills when: consistent drafting style, standard clause review checklists, repeatable QA, team-specific playbooks
- Don't create Skill too early for one-off tasks - start with normal prompts, promote to Skill only when workflow repeats

**Tutorial Levels:**
- Beginner (Tutorials 02-04): No technical skills required
- Intermediate (Tutorials 05-07): Basic familiarity with Claude required
- Advanced (Tutorials 08-10): Some technical comfort required
- Expert (Tutorials 11-12): Developer skills or IT support recommended

**Regional Context:** ✅ Global tutorial series, but applicable to Singapore legal professionals

**Singapore Legal Tech Coverage - General AI Adoption**

Singapore legal tech coverage focuses on AI adoption generally:
- Singapore Courts collaborating with HarveyAI
- LawNet AI-generated case summaries
- Legal automation in Singapore law firms
- AI-powered search engine (GPT-Legal Q&A) for Singapore legal context
- AI chatbot for property deals (Maia)
- Singapore legal sector embracing AI - GLI reports new alliances for ethical AI use

**Regional Context:** ✅ Singapore/ASEAN-relevant AI trends, but no Cowork-specific content yet

**Alt-Counsel Angle:**
- Cowork's open-source legal plugin is particularly relevant for resource-constrained legal departments
- The ability to customize without vendor lock-in aligns with alt-counsel's budget-conscious mission
- Market reaction shows legal tech incumbents are threatened, validating the "folder as program" pattern's disruptive potential

---

### 2. Technical Accuracy: How CLAUDE.md and Skills Work

**CLAUDE.md Auto-Discovery and Loading**

**Source:** [CLAUDE.md Context Files | Agent Factory](https://agentfactory.panaversity.org/docs/General-Agents-Foundations/general-agents/claude-md-context-files)
- **Date:** February 2026 (based on content)
- **Regional Context:** ✅ Global technical documentation

**Key Technical Details:**

1. **Auto-Loading Mechanism:**
   - CLAUDE.md is a markdown file placed in project root
   - Claude Code automatically detects and reads CLAUDE.md at the start of every session
   - No manual commands required - automatic on session start
   - File must be named exactly `CLAUDE.md` (case-sensitive)
   - File must be in project root (same level as `.git`, `package.json`, etc.)

2. **How It Works Behind the Scenes:**
   - LLMs are "stateless" - no memory between calls
   - Claude Code treats file system as external memory
   - CLAUDE.md ensures Claude's first action in any session is reading context
   - Pattern: Stateless LLM + File System Access = Persistent state through files
   - CLAUDE.md = Orientation guide Claude reads first

3. **Context Persistence:**
   - Every session starts with CLAUDE.md loaded automatically
   - One-time setup (10-15 minutes) provides automatic benefit forever
   - No context friction - Claude understands project without re-explanation
   - Team alignment - new team members read CLAUDE.md to understand project

4. **CLAUDE.md Structure:**
   - Project Overview (what the project does)
   - Technology Stack (languages, frameworks, databases)
   - Directory Structure (layout showing where code lives)
   - Coding Conventions (style, naming, patterns)
   - Key Commands (common commands to run the project)
   - Important Notes (gotchas, dependencies, security)

**Skills Discovery and Loading**

**Source:** [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)
- **Date:** February 2026 (based on content)
- **Regional Context:** ✅ Global technical documentation

**Key Technical Details:**

1. **Skill Structure:**
   - Skills are directories with `SKILL.md` as entry point
   - Each skill is a folder with SKILL.md (required) + optional supporting files
   - Supporting files: templates, examples, scripts, reference docs
   - Reference supporting files from SKILL.md so Claude knows what they contain

2. **Skill Discovery:**
   - Skills are discovered from `.claude/skills/` directories
   - Automatic discovery from nested directories (monorepo support)
   - Example: editing file in `packages/frontend/` also looks for skills in `packages/frontend/.claude/skills/`
   - Skills defined in `.claude/skills/` within directories added via `--add-dir` are loaded automatically

3. **Skill Locations and Priority:**
   - Enterprise: managed settings (all users in organization)
   - Personal: `~/.claude/skills/<skill-name>/SKILL.md` (all projects)
   - Project: `.claude/skills/<skill-name>/SKILL.md` (this project only)
   - Plugin: `<plugin>/skills/<skill-name>/SKILL.md` (where plugin is enabled)
   - Priority: enterprise > personal > project
   - Plugin skills use `plugin-name:skill-name` namespace to avoid conflicts

4. **Skill Invocation:**
   - Create SKILL.md with instructions
   - Claude adds it to its toolkit
   - Claude uses skills when relevant, or invoke directly with `/skill-name`
   - Skills follow Agent Skills open standard, works across multiple AI tools

5. **Skill Frontmatter:**
   - `name`: Display name (defaults to directory name)
   - `description`: What skill does and when to use (recommended)
   - `disable-model-invocation`: Only you can invoke (for workflows with side effects)
   - `user-invocable`: Only Claude can invoke (for background knowledge)
   - `allowed-tools`: Tools Claude can use without permission
   - `context: fork`: Run in isolated subagent context
   - `agent`: Which subagent type to use

**Cowork Folder Access**

**Source:** [Anthropic's New Claude Cowork Is an AI Agent for Your Computer's Files](https://www.cnet.com/tech/services-and-software/cowork-for-claude-can-tap-into-a-folder-on-your-computer-and-organize-its-contents)
- **Date:** January 13, 2026
- **Regional Context:** ✅ Global technical documentation

**Key Technical Details:**

1. **Cowork Folder Access:**
   - Users give Claude access to a computer folder
   - Cowork can read, edit, and create files in that workspace
   - Cowork can also use folder data to create new projects
   - Works with Claude Chrome extension for browser access
   - Connects to connectors for other apps (Slack, Box, Egnyte, Jira, Microsoft 365)

2. **Security:**
   - Claude can't edit anything to which it hasn't been given access
   - Cowork runs in virtual machine environment
   - Anthropic warns about prompt-injection attacks
   - Built defenses against unintended actions

3. **Use Cases:**
   - Organizing files, renaming items to match conventions
   - Reading files to create spreadsheets or other documents
   - Example: folder with receipts → Cowork organizes files and creates expense spreadsheet

**Alt-Counsel Angle:**
- Technical accuracy is critical for the "you already know this pattern" angle
- CLAUDE.md auto-loading demonstrates the pattern is well-established
- Skills discovery mechanism shows the pattern scales to complex workflows
- Cowork's folder access enables the "folder as program" pattern to work across teams

---

### 3. The "Folder as Program" Pattern - Analogies

**VS Code Custom Instructions**

**Source:** [Use custom instructions in VS Code](https://code.visualstudio.com/docs/copilot/customization/custom-instructions)
- **Date:** February 4, 2026
- **Regional Context:** ✅ Global technical documentation

**Key Analogies:**

1. **`.github/copilot-instructions.md` Pattern:**
   - Automatically applies to all chat requests in workspace
   - Stored within workspace (not user-level)
   - Describes coding standards, architecture decisions, conventions
   - Example: naming conventions, error handling, documentation standards

2. **`AGENTS.md` Pattern:**
   - Universal standard for AI coding agents
   - Created by OpenAI, adopted by 60,000+ open source projects
   - Works across all AI coding tools (Cursor, GitHub Copilot, Gemini CLI, etc.)
   - VS Code automatically detects AGENTS.md in workspace root
   - Can apply to all chat requests or specific subfolders (experimental)

3. **File-Based Instructions:**
   - `.instructions.md` files with `applyTo` glob patterns
   - Conditionally apply based on file type or location
   - Example: different conventions for frontend vs backend code
   - Stored in workspace or user profile

4. **CLAUDE.md Compatibility:**
   - VS Code automatically detects CLAUDE.md file
   - Applies as always-on instructions
   - Searches for CLAUDE.md in: workspace root, `.claude` folder, user home, local variant
   - Useful if using Claude Code alongside VS Code

**GitHub `.github` Folder Pattern**

**Source:** [GitHub Documentation - Dependabot Configuration](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configuring-dependabot-version-updates)
- **Date:** February 2026
- **Regional Context:** ✅ Global technical documentation

**Key Analogies:**

1. **`.github` Directory Convention:**
   - Standard location for GitHub-specific configuration
   - Dependabot enabled by committing `dependabot.yml` to `.github` directory
   - Other `.github` files: workflows, actions, policies
   - Convention: folder name indicates purpose (`.github/copilot-instructions.md`, `.github/workflows/`)

2. **Workspace Settings:**
   - VS Code workspace settings can be stored in `.vscode/settings.json`
   - Settings apply to specific workspace
   - Can be shared with team via version control
   - Example: `.vscode/settings.json` for project-specific editor configurations

**Package.json Pattern**

**Source:** [npm Docs - package.json](https://docs.npmjs.com/cli/v10/configuring-npm/package-json)
- **Date:** April 23, 2025
- **Regional Context:** ✅ Global technical documentation

**Key Analogies:**

1. **Package Configuration:**
   - `package.json` defines project metadata, dependencies, scripts
   - Standard for JavaScript/Node.js projects
   - `files` field describes what gets included when package is installed
   - `workspaces` field for monorepo management

2. **pnpm Workspaces:**
   - `pnpm-workspace.yaml` defines workspace structure
   - Automatically looks for workspace definitions in root `package.json`
   - Packages definitions in `pnpm-workspace.yaml`
   - Example: `packages/frontend/`, `packages/backend/`

**Monorepo Patterns**

**Source:** [Medium - NPM Workspaces: Managing Multi-Package Projects](https://medium.com/@ruben.alapont/npm-workspaces-managing-multi-package-projects-28538fe40d1d)
- **Date:** August 24, 2024
- **Regional Context:** ✅ Global technical documentation

**Key Analogies:**

1. **Monorepo Structure:**
   - Single repository containing multiple related projects
   - Each project has its own `package.json`
   - Shared configuration via root `package.json` or workspace config
   - Benefits: shared dependencies, unified versioning, easier coordination

2. **Workspace Configuration:**
   - `package.json` at root defines workspaces
   - Each subfolder can have its own `package.json`
   - Shared scripts, dependencies, build processes
   - Example: `packages/frontend/`, `packages/backend/`, `packages/shared/`

**The Pattern: Config Files That Make Folders "Smart"**

**Synthesis of Analogies:**

1. **Established Pattern:**
   - `.github/` folder: GitHub-specific configuration
   - `.vscode/` folder: VS Code workspace settings
   - `package.json`: Project metadata and dependencies
   - `pnpm-workspace.yaml`: Monorepo structure
   - `.instructions.md`: AI coding guidelines

2. **Common Characteristics:**
   - Text files in folder root
   - Define behavior, conventions, or configuration
   - Automatically discovered and applied
   - Shared across team via version control
   - Enable folder to be "smart" or "aware"

3. **Application to Cowork:**
   - `.claude/` folder: Cowork-specific configuration
   - `CLAUDE.md`: Project context and orientation
   - `.claude/skills/`: Custom skills for specific workflows
   - Makes folder "smart" by defining AI behavior

**Alt-Counsel Angle:**
- The pattern is well-established across multiple tools and ecosystems
- Readers already understand `.github/`, `package.json`, VS Code settings
- This validates the "you already know this pattern" angle
- The pattern scales from simple configuration to complex AI workflows
- Particularly relevant for solo counsels and small teams who need to share workflows

**The "Digital Employee" Concept (Vinova SG)**

**Source:** [Forget "Chatbots"—2026 is the Year of the "Digital Employee"](https://vinova.sg/forget-chatbots-is-the-year-of-the-ai-digital-employee)
- **Date:** February 15, 2026
- **Regional Context:** ✅ Singapore/ASEAN

**Key Points:**
- 2026 marks shift from "assistive" AI chatbots to "agentic" digital employees
- Gartner: 40% of enterprise apps feature autonomous agents (up from 5% last year)
- Digital employees are "Read-Write" systems executing complex workflows
- SuperWorker concept: humans orchestrate teams of digital agents for 5x-10x productivity gains
- 92% of organizations lack visibility into their AI identities (Shadow AI crisis)
- MCP is the "USB-C port for AI" - universal standard for agentic orchestration
- Agent System of Record (ASOR): Workday introduced this to treat digital employees as distinct entities
- Sales and Revenue Operations lead in digital worker deployment
- Construction, Healthcare, Manufacturing also adopting digital employees rapidly
- EU AI Act 2026 establishes corporate liability for agent actions

**Relevance to Folder-as-Program Pattern:**
- Digital employees use "progressive disclosure" - only load relevant skills when needed
- Skills stored in folders with SKILL.md as entry point
- MCP enables seamless integration with external tools and data sources
- Local memory (CLAUDE.md, CONTEXT.md) keeps data private and secure
- Agent Teams enable collaboration between specialized agents
- Security hardening requires dedicated sandboxes and permission safeguards

**Regional Context:** ✅ Singapore/ASEAN-relevant, but focused on enterprise workflows

---

## Statistics & Data Points

### Cowork Launch and Adoption
- **Launch Date:** January 12, 2026
- **Legal Plugin Launch:** January 30, 2026
- **Market Reaction:** Legal tech stocks (Thomson Reuters, RELX, Wolters Kluwer) dropped sharply after legal plugin announcement
- **Plugin Count:** 11 starter plugins (marketing, finance, customer support, sales, legal, etc.)
- **Legal Plugin Features:** 5 slash commands (`/review-contract`, `/triage-nda`, `/vendor-check`, `/brief`, `/respond`)
- **Integrations:** Slack, Box, Egnyte, Jira, Microsoft 365

### Singapore/ASEAN Coverage
- **Vinova SG:** Comprehensive enterprise-focused Cowork guide (Feb 2026)
- **LegalAI.guide:** Legal professional tutorial series (Feb 2026)
- **Gartner Prediction:** 40% of enterprise apps will embed autonomous agents by end of 2026
- **Cowork Security:** Sandbox micro-VM with Apple Virtualization Framework, strict folder-permission model
- **Agent Teams:** Released Feb 2026, supports peer-to-peer messaging via Mailbox protocol
- **Browser Automation:** "Teach Claude" feature for web task recording, Claude Opus 4.6 native Office support

### CLAUDE.md Usage
- **Setup Time:** 10-15 minutes to write CLAUDE.md
- **Auto-Loading:** Automatic at session start, no manual commands
- **File Size:** Typical CLAUDE.md is 1-3 KB
- **Context Budget:** Scales dynamically at 2% of context window, fallback 16,000 characters
- **Skill Discovery:** Automatic from `.claude/skills/` directories, including nested directories (monorepo support)

### VS Code Custom Instructions
- **AGENTS.md Adoption:** 60,000+ open source projects
- **Instruction Files:** `.github/copilot-instructions.md`, `.instructions.md`, `AGENTS.md`, `CLAUDE.md`
- **File-Based Instructions:** Apply based on glob patterns (`applyTo: "**"`)
- **Instruction Priority:** Personal > Repository (`.github/copilot-instructions.md` or `AGENTS.md`) > Organization

### Legal Tech Market
- **Plugin Open Source:** Yes - allows customization without vendor lock-in
- **Legal Tech Stocks:** Dropped after Cowork legal plugin announcement
- **Vendors' Advantage:** Proprietary datasets and subject-matter expertise

---

## Expert Quotes

### Bob Ambrogi
> "For the first time, a foundation-model company is packaging a legal workflow product directly into its platform, rather than merely supplying an API to legal-tech vendors."

> "It is, however, an opening salvo in what is likely to change the competitive landscape over the next couple of years."

> "Legal tech vendors have one ace in the hole that the foundation companies cannot easily replicate, and that is the potent and powerful combination of proprietary datasets and subject-matter expertise."

### Anthropic Documentation
> "CLAUDE.md is a simple markdown file placed in your project root that Claude Code automatically loads at the start of every session."

> "Skills extend what Claude can do. Create a `SKILL.md` file with instructions, and Claude adds it to its toolkit."

> "When you work with files in subdirectories, Claude Code automatically discovers skills from nested `.claude/skills/` directories."

### VS Code Documentation
> "Custom instructions enable you to define common guidelines and rules that automatically influence how AI generates code and handles other development tasks."

> "AGENTS.md is a simple markdown file (similar to CLAUDE.md) that provides project-specific guidance to **any** AI coding agent."

> "VS Code automatically detects a `.github/copilot-instructions.md` Markdown file in the root of your workspace and applies the instructions in this file to all chat requests within this workspace."

---

## Jurisdictional Flags

### US/EU-Centric Content
- **Market Reaction:** Legal tech stock drops reported in US/EU markets (The Guardian, Bloomberg, Reuters)
- **Legal Tech Incumbents:** Thomson Reuters, RELX, Wolters Kluwer are US/EU-based companies
- **Plugin Integrations:** Slack, Box, Egnyte, Jira, Microsoft 365 are primarily US/EU tools
- **Anthropic:** US-based company

**Regional Differences:**
- Cowork itself is platform-agnostic and applicable globally
- Legal plugin features are relevant to all legal jurisdictions
- Market reaction may differ in Singapore/ASEAN (less mature legal tech market)
- Singapore legal tech adoption is growing but still behind US/EU

**Alt-Counsel Angle:**
- Cowork's open-source nature makes it accessible regardless of jurisdiction
- Folder-as-program pattern works the same in Singapore/ASEAN
- Resource-constrained legal departments benefit most from customizable, open-source solutions

---

## Alt-Counsel Angle

### Resource-Constrained Legal Departments
- **Budget-Friendly:** Cowork is $100/month (Claude Max subscription), but the folder-as-program pattern enables sharing workflows across teams
- **Customizable:** Open-source legal plugin allows customization without vendor lock-in
- **Accessible:** No enterprise contracts required - just a folder and text files

### Solo Counsel and Small Teams
- **Workflow Distribution:** Share workflows via folder structure (CLAUDE.md + skills)
- **No Technical Lift:** Text files are easy to create, edit, and share
- **Team Alignment:** New team members read CLAUDE.md to understand project

### Builder-Friendly Content
- **Pattern Recognition:** Readers already understand `.github/`, `package.json`, VS Code settings
- **Technical Depth:** Clear documentation on how CLAUDE.md and skills work
- **Practical Implementation:** CoDraft v1 example (one skill + one CLAUDE.md)

### Honest Assessment
- **Market Disruption:** Legal tech incumbents are threatened, validating the pattern's potential
- **Blind Spots:** Legal tech vendors still have proprietary datasets advantage
- **Resource Constraints:** Solo counsels can leverage this pattern without enterprise budgets

---

## Additional Sources

### Technical Documentation
- [Extend Claude with skills - Claude Code Docs](https://code.claude.com/docs/en/skills)
- [CLAUDE.md Context Files | Agent Factory](https://agentfactory.panaversity.org/docs/General-Agents-Foundations/general-agents/claude-md-context-files)
- [Use custom instructions in VS Code](https://code.visualstudio.com/docs/copilot/customization/custom-instructions)
- [Anthropic's New Claude Cowork Is an AI Agent for Your Computer's Files](https://www.cnet.com/tech/services-and-software/cowork-for-claude-can-tap-into-a-folder-on-your-computer-and-organize-its-contents)
- [npm Docs - package.json](https://docs.npmjs.com/cli/v10/configuring-npm/package-json)

### Legal Tech Coverage
- [Anthropic's Legal Plugin for Claude Cowork May Be the Opening Salvo](https://www.lawnext.com/2026/02/anthropics-legal-plugin-for-claude-cowork-may-be-the-opening-salvo-in-a-competition-between-foundation-models-and-legal-tech-incumbents.html)

### Legal Tech Leaders
- [Jordan Furlong Substack](https://jordanfurlong.substack.com/)
- [Casey Flaherty LinkedIn](https://www.linkedin.com/in/dcaseyflaherty/)
- [Bob Ambrogi LawSites](https://www.lawnext.com/)

### Singapore/ASEAN Coverage
- [V-Techtips: How To Best Implement Claude Cowork for Enterprise and Professional Workflows - Vinova SG](https://vinova.sg/v-techtips-how-to-best-implement-claude-cowork-for-enterprise-and-professional-workflows)
- [Forget "Chatbots"—2026 is the Year of the "Digital Employee" - Vinova SG](https://vinova.sg/forget-chatbots-is-the-year-of-the-ai-digital-employee)
- [Tutorial 01: Claude for Legal Professionals Overview - LegalAI.guide](https://www.legalai.guide/docs/beginner/01-overview)
- [LawTech.Asia](https://lawtech.asia/)
- [Singapore Computer Society Legaltech](https://www.scs.org.sg/articles/legaltech-an-unstoppable-rising-force)
- [Singapore Academy of Law Legal Technology Vision](https://sal.org.sg/wp-content/uploads/2025/03/Legal-Technology-Vision-final-for-print.pdf)
- [The Rise of Agentic Systems and the Strategic Redesign of Legal Work - Singapore Law Gazette](https://lawgazette.com.sg/practice/tech-talk/the-rise-of-agentic-systems-and-the-strategic-redesign-of-legal-work)
- [AI-powered search engine to help Singapore lawyers with legal research - Straits Times](https://www.straitstimes.com/singapore/ai-powered-search-engine-to-help-singapore-lawyers-with-legal-research)

---

## Research Notes

### What We Found
- Bob Ambrogi has written about Cowork's legal plugin, positioning it as a significant market disruption
- Technical documentation confirms CLAUDE.md auto-loads at session start, skills are discovered from `.claude/skills/` directories
- VS Code's `.github/copilot-instructions.md`, `AGENTS.md`, and `.instructions.md` provide strong analogies for the folder-as-program pattern
- The pattern is well-established across multiple tools and ecosystems (GitHub, VS Code, npm, pnpm)
- **NEW:** Vinova SG (Singapore-based IT company) published comprehensive Cowork guide (Feb 2026)
- **NEW:** LegalAI.guide tutorial series for legal professionals (Feb 2026)
- **NEW:** Singapore legal tech coverage focuses on AI adoption generally, but no Cowork-specific content yet

### What We Didn't Find
- Jordan Furlong or Casey Flaherty have not written about Cowork specifically
- Singapore legal tech voices have not covered Cowork (yet)
- No specific Cowork technical deep-dives beyond Anthropic documentation and general tutorials

### Research Gaps
- More detailed technical documentation on Cowork's folder discovery mechanism
- More legal thought leader coverage of Cowork (especially Singapore/ASEAN voices)
- Real-world examples of teams using Cowork with custom skills and CLAUDE.md

### Follow-Up Research
- ✅ Singapore/ASEAN legal tech coverage of Cowork - Vinova SG and LegalAI.guide found
- Look for technical deep-dives on Cowork's folder access and security
- Find examples of teams using Cowork with custom skills and CLAUDE.md