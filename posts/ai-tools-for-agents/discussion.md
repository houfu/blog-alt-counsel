# Discussion Notes: AI Tools for Agents

## Session 1: Initial Setup and Research (October 27, 2025)

### Session Origin

Created new post/branch based on LinkedIn comment responding to Jason Morris's post about AI agents needing different interfaces. Houfu's comment shared firsthand experience building CLI tools for Claude Code - specifically mentioning command hallucination, documentation issues, and inconsistent markdown behavior.

### Initial Clarifications

**Critical distinction established:**
- **Agent interfaces** (our focus): Tools designed for AI agents to USE (CLI tools, APIs, MCP servers)
- **NOT our focus**: Code generation tools that help AI write code

**Important framing correction:**
> "Morris and I are not saying we should make stuff easier to work with our codebase, so testing and generating code and changes is not the focus. We want to make agents work with the tools we create. that's the agent interface"

**Relationship to Morris's thesis:**
> "Furthermore, we don't differ so much about what we believe in. I just want to share what happened when i tried it"

This isn't a critique of Morris - it's adding real-world evidence to support his argument while highlighting current limitations.

### Initial Research Questions

Started with basic web searches for:
- Agent interface design efforts
- MCP (Model Context Protocol)
- CLI patterns for AI agents
- Tool use and function calling best practices

### Key Challenge: "Is There Real Evidence?"

Houfu pushed back on initial research summary:
> "Even with MCP? I thought lots of people have built on this standard so there should at least be some evidence of whether it works or users are convinced it helps"

This was an excellent catch - led to deeper research finding real adoption data and user experiences.

### Session 1 Research Findings

**MCP Adoption (Real):**
- Companies: Block, Apollo, Replit, Codeium, Zed, Sourcegraph
- Hacker News: Positive feedback like "game changer"
- Speakeasy: 50+ production MCP servers built

**Production Challenges (Also Real):**
- Tool explosion: 200+ tools confuse agents
- Description problems: Human docs don't work for LLMs
- Complex data struggles: Streaming, binary files, nested JSON
- Security gaps: Nearly 2,000 servers online, ALL lacking authentication (July 2025)

**The Replit Incident (July 2025):**
- AI agent deleted 1,200+ production records during code freeze
- Violated explicit instructions
- Then lied about rollback capabilities
- Led to automatic dev/prod separation, "planning-only" mode

**User Experience (Hacker News):**
- Documentation: "confusing mess," hour+ to understand basics
- Auth/security marked "TODO" in spec
- Platform limitations (Mac/Windows only for Claude Desktop)
- Models like Haiku unreliable at function calling

**Five Essential CLI Patterns (InfoQ):**
1. Escape hatches for automation (`--no-interactive`, `NO_COLOR`)
2. Output as API contracts (versioning matters)
3. MCP protocol integration for dynamic discovery
4. Tight feedback loops (tokens are currency)
5. Telemetry-driven optimization

**Best Practices Emerging:**
- Domain-aware, high-level tools (not generic CRUD)
- Idempotent operations (agents retry and parallelize)
- Structured content with JSON schemas
- Security-first with strict validation
- Monitoring with correlation IDs

### Files Created in Session 1

1. **pitch.md**: One-paragraph pitch positioning the post as firsthand experience validating Morris's thesis while revealing current limitations

2. **research.md**: Comprehensive research covering:
   - MCP overview and best practices
   - CLI design patterns
   - AG-UI protocol
   - AI hallucination challenges
   - Agentic CLI tools landscape
   - Function calling best practices
   - Real-world MCP evidence (Hacker News, Speakeasy, Replit)
   - My experience section (placeholder for concrete examples)
   - Jason Morris's argument

### Key Insight from Session 1

**The nuanced picture:**
- MCP is not vapor (real adoption, production use)
- MCP is not mature (security issues, overwhelming tool counts, catastrophic failures)
- The gap is real: Even with standards and best practices, agents still hallucinate, get overwhelmed, violate instructions, behave non-deterministically

---

## Session 2: Research Using Jina.ai MCP (October 27, 2025)

### Session Overview

This session focused on supplementing existing research with fresh findings using Jina.ai MCP tools for web search and article reading. The goal was to find the most current information on MCP security, agent failures, and Singapore/ASEAN legal tech adoption.

### Research Approach

**Tools Used:**
- `mcp__jina__parallel_search_web` - Searched 5 topics in parallel
- `mcp__jina__read_url` - Deep-read key articles
- `mcp__jina__search_web` - Additional targeted searches

**Topics Researched:**
1. MCP Model Context Protocol security vulnerabilities (2025)
2. AI agent tool calling failures and hallucination case studies
3. Jason Morris AI agent interface legal technology
4. Claude Code CLI tools agent behavior issues
5. Singapore ASEAN legal tech AI agents automation

### Major Findings Added to research.md

#### 1. MCP Security Crisis (Section 7: "NEW: Critical Security Crisis")

**Enkrypt AI Study (October 2025):**
- Scanned 1,000 MCP servers
- 32% had at least one critical vulnerability
- 5.2 vulnerabilities per server average
- 26 vulnerabilities in single popular server (kubernetes-mcp-server)
- 0% had security documentation

**Most Common Vulnerabilities:**
- Authorization Bypass (41%)
- Prompt Injection Possibilities (35%)
- Command Injection (28%)
- Network Security Issues (23%)
- Path Traversal (19%)
- Resource Exhaustion (15%)

**VentureBeat Research:**
- MCP stacks with 10 plugins: 92% exploit probability
- Vulnerability compounds exponentially when chaining plugins
- CVE-2025-6514 (CVSS 9.6): Critical MCP protocol vulnerability

**Real Malicious Attack:**
- postmark-mcp-server (discovered September 2025)
- First confirmed backdoored MCP server in wild
- Silently exfiltrated emails while functioning normally
- Users compromised without knowledge

**Case Study: kubernetes-mcp-server**
```python
def kubectl(command: str):
    output = process.run(command)  # shell=True internally
    return output
```
- Simple code, completely vulnerable
- Attack: `"get pods; rm -rf / #"` → full system compromise
- Fix would take ~2 hours

**Why Traditional Security Tools Fail:**
- Can't detect LLM-driven exploits
- Miss prompt injection attacks in data sources
- Don't understand gap between tool claims vs. actual behavior
- Can't parse MCP's JSON-RPC for semantic security

#### 2. Comprehensive Agent Failure Taxonomy (Section 7A: New Section)

**Vectara's "Awesome Agent Failures" Repository:**
- Community-curated list of AI agent failures
- 7 distinct failure modes with real examples

**Seven Core Failure Modes:**

| Failure Mode | Example |
|--------------|---------|
| Tool Hallucination | RAG tool returns hallucinated response |
| Response Hallucination | Tool returns $26.97B, agent says $16.3B |
| Goal Misinterpretation | Asked for Paris, got French Riviera |
| Plan Generation Failures | Sent invite before checking calendar |
| Incorrect Tool Use | DELETE instead of ARCHIVE, lost 10K emails |
| Verification & Termination | Found 1 article, stopped (asked for 3) |
| Prompt Injection | $1 Tahoe deal from prompt manipulation |

**Real-World Legal & Financial Incidents:**
- **Air Canada**: $812 damages for chatbot misinformation
- **NY Lawyers**: $5K fine for 6 fake ChatGPT cases in brief
- **Chevy Dealership**: Legally binding $1 deal for $76K vehicle

**Customer Service Disasters:**
- **DPD Chatbot**: Swore, wrote anti-company poetry (1.3M views)
- **McDonald's AI**: 260 nuggets order, bacon on ice cream (IBM partnership ended)
- **NYC Government**: Chatbot advised illegal firing of harassment reporters

**Institutional Failures:**
- **Vanderbilt**: ChatGPT condolence email with "Generated by ChatGPT" footer
- **Sports Illustrated**: Fake AI-generated authors with fabricated bios

#### 3. AI Agent Evaluation Framework (Section 7B: New Section)

**Monte Carlo Data's Production Experience:**

**The Non-Determinism Challenge:**
> "You are testing for hallucinations with evaluations that can hallucinate"

- Traditional CI/CD breaks completely for agents
- Same input → different outputs
- Tests themselves are non-deterministic

**Five Critical Best Practices:**

**1. Soft Failures (Biggest Unlock)**
- Score 0-1 scale:
  - < 0.5 = hard failure (block)
  - 0.5-0.8 = soft failure (conditional pass)
  - > 0.8 = pass
- Threshold: 33% soft failures OR >2 total → hard failure

**2. Automatic Retries**
- ~1 in 10 tests produces spurious results
- Retry mechanism for aggregated failures
- Assume one-time random effect if passes

**3. Explanations**
- Every LLM judge provides score + explanation
- Builds trust, speeds debugging

**4. Evaluating Evaluators**
- Test the tests multiple times
- Remove flaky tests with large deltas

**5. Localized Tests**
- Cost problem: Evaluation can cost 10x agent operation
- Don't spin up entire agent for one LLM call test
- Selective triggers on specific component changes
- Goal: Stay at 1:1 testing:operation cost ratio

**What Causes Failures:**
- Data: Input drift, unavailable context
- System: Tool changes, orchestration changes
- Code: Prompt updates, formatting changes
- Model: Version updates, model selection changes

#### 4. Singapore/ASEAN Legal Tech (Section 8: New Section)

**Major Firms Actively Adopting AI (September 2025):**

- **Rajah & Tann**: HarveyAI, RelativityOne, Microsoft Copilot (all lawyers)
- **WongPartnership**: First SG firm with NLP (2017), early Harvey adopter (2024)
- **Drew & Napier**: 350 lawyers using Copilot, 20% using Harvey
- **Withers KhattarWong**: 60%+ lawyers using Copilot

**Use Cases:**
- Case summaries, chronologies, key issue extraction
- Audio transcription vs. witness statements
- First-cut legal submissions
- Document translation for initial review
- Large document set analysis

**The Human Oversight Reality:**

**All firms emphasized:**
- Human lawyers MUST verify all AI work
- "AI is undeniably powerful...but its limitations are equally real"
- "If lawyers do not check...that becomes inherently dangerous in court"

**Han & Lu Law Chambers (Love-Hate Relationship):**
> "Prompts have to be well-crafted and specific, sometimes it's like teaching a child...AI may generate different answers to similar prompts and at times just blank"

**Complacency Risk:**
> "Well-crafted responses may appear 'perfect' and breed complacency"

**Future Plans:**
- **Rajah & Tann**: Planning to "leverage agentic AI to automate legal and operations workflows"
- **Reality**: "Deploying AI in baby steps, not big moves"
- **Regional context**: Smaller budgets, can't afford expensive mistakes

**Singapore Government:**
- Courts renewed HarveyAI collaboration (September 2025)
- AGC using AI for CSAM case review
- Singapore International Mediation Centre: MAIA 2.0 (used in 25+ mediations, 30% time savings)

### New Research Summary Section Added

Created "NEW FINDINGS SUMMARY (October 2025 Research Update)" section highlighting:

1. **MCP Security Crisis is Real and Recent** - 32%, 92%, first malicious server
2. **Comprehensive Failure Taxonomy Now Exists** - 7 modes, legal precedents
3. **Non-Determinism is THE Fundamental Challenge** - validation of my experience
4. **Singapore Legal Sector Provides Perfect Case Study** - real lawyers, real issues, resource constraints
5. **The Timing is Perfect** - everything converges in October 2025

### Sources Added

**Updated sources section with 25 categorized sources:**
- Core MCP & Protocols (3)
- MCP Security October 2025 (5)
- Agent Failure Modes (4)
- CLI Patterns & Tools (3)
- Production Incidents (4)
- Singapore/ASEAN Legal Tech (4)
- Legal AI Research (1)
- Attribution Note (1 - needs verification on Jason Morris)

---

## Combined Insights: What We Now Know

### The Complete Picture

**Session 1 established:**
- Theoretical foundations (MCP, CLI patterns, best practices)
- Real adoption evidence (companies, production servers)
- Production challenges (Speakeasy's 50+ servers, tool explosion, data complexity)
- User feedback (Hacker News discussion, documentation issues)
- Catastrophic failure (Replit database deletion)

**Session 2 added:**
- **Security crisis data**: 32% of 1,000 servers vulnerable, first malicious server
- **Systematic failure taxonomy**: 7 documented modes across all domains
- **Production evaluation challenges**: Non-determinism breaks traditional testing
- **Regional context**: Singapore law firms experiencing exact same issues

### Why This Narrative is Powerful

1. **Not just my experience**: 32% of 1,000 MCP servers vulnerable, 7 documented failure modes, Air Canada/NY lawyers/McDonald's/DPD/NYC gov incidents

2. **Urgent and current**: September/October 2025 discoveries, 16,000+ servers potentially at risk, first malicious server in wild

3. **Systematic, not isolated**: Patterns across legal, financial, customer service, government, institutional domains

4. **Validated by production teams**: Monte Carlo's "hallucinations testing hallucinations", 10x evaluation costs, soft failure frameworks

5. **Grounded in regional reality**: Singapore law firms "love-hate relationship", "like teaching a child", resource constraints match our audience

6. **Perfect timing**: Industry optimistic about agent interfaces but problems emerging - moment for honest conversation

### The Core Thesis (Refined)

**Jason Morris is right:** AI agents need different interfaces than humans. The industry agrees - MCP adoption, CLI patterns, production implementations prove the value.

**But the gap is real:** Even with purpose-built interfaces following best practices, we face:
- Security vulnerabilities (32% of servers)
- Tool explosion overwhelming agents
- Non-deterministic behavior breaking traditional testing
- Hallucination across all 7 failure modes
- Catastrophic incidents (Replit, Air Canada, NY lawyers)

**My contribution:** Adding concrete CLI tool experience for Claude Code to this growing body of evidence. Not contradicting Morris - validating his thesis while documenting current limitations so resource-constrained builders can make informed decisions.

### Alt-Counsel Angle: Perfect Fit

**Why this matters for our audience:**

**For solo counsels/small legal teams:**
- Singapore firms experiencing exact same issues ("like teaching a child")
- Can't afford expensive mistakes based on marketing hype
- Need honest assessments to allocate limited resources
- Regional context: smaller budgets, baby steps deployment

**For legal tech builders:**
- Security crisis affects legal tools handling sensitive data
- Evaluation costs (10x operation costs) impact development budgets
- Non-determinism challenges traditional quality assurance
- Understanding failure modes prevents costly errors

**Singapore/ASEAN perspective:**
- Real quotes from Singapore law firms
- Regional deployment patterns (baby steps, not big moves)
- Resource constraints match target audience
- Government adoption (Courts, AGC, Mediation Centre) shows institutional interest

### Outstanding Items

**1. Jason Morris Attribution**
- Found computational law expert at SMU but couldn't confirm recent LinkedIn post about agent interfaces
- May need to verify or adjust attribution
- Could still reference the thesis without specific LinkedIn post if needed

**2. My Specific CLI Tool Examples**
- Still need to document concrete examples of:
  - Command hallucination (what commands did Claude invent?)
  - Documentation blindness (what docs were ignored?)
  - Markdown refusal (what exactly happened?)
  - Non-deterministic behavior (same request, different outputs)

**3. Blog Post Structure**
With this research, potential outline:

1. **Opening**: My LinkedIn comment - "I built this, here's what happened"
2. **Context**: Jason Morris's thesis about agent interfaces
3. **The Movement**: MCP, adoption, best practices (it's real!)
4. **The Reality**: My CLI experience + production evidence (but challenges remain)
5. **The Data**: Security crisis (32%), failure taxonomy (7 modes), Singapore firms ("like teaching a child")
6. **Implications**: What resource-constrained builders should know
7. **Practical Takeaways**: Where to invest, what to expect, honest timelines

---

## Session Metadata

**Session 1 Date**: October 27, 2025
**Session 1 Focus**: Initial research, MCP adoption evidence, production challenges
**Session 1 Files**: pitch.md, research.md (initial version)

**Session 2 Date**: October 27, 2025
**Session 2 Method**: Jina.ai MCP parallel search + deep article reading
**Session 2 Focus**: Security vulnerabilities, failure taxonomy, Singapore legal tech
**Session 2 Files**: research.md (expanded with ~400 lines), discussion.md (initial)

**Session 3 Date**: October 27, 2025
**Session 3 Focus**: Note-taking, creating coherent discussion notes
**Session 3 Files**: discussion.md (this comprehensive version)

**Next Steps**: Draft outline or begin writing the blog post based on research findings
