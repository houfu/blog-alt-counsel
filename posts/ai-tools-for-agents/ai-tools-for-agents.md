# I Built CLI Tools for Claude Code. Here's What I Learned About Designing for AI Users

I posted this on Mastodon recently:

> **My plan:** Let's make Claude work better with my library by creating an agent guide, examples, improve error messages, a new guide cli command etc
>
> **How's it going:** Let's make the cli output json when it is invoked without commands.

That captures the story of redlines v0.6.0 better than any technical documentation could.

## The Movement: Agents Need Different Interfaces

Jason Morris argues that "AI is a different kind of user, that needs a different kind of software, with a different kind of interface." The industry agrees. Anthropic launched the Model Context Protocol (MCP) in November 2024 as "USB-C for AI applications." Companies like Block, Apollo, and Replit adopted it. InfoQ published patterns for building agent-friendly CLIs. VentureBeat estimates 16,000+ MCP servers deployed in just 10 months.

The consensus is clear: purpose-built interfaces help agents work with tools.

So for redlines v0.6.0, I built exactly that.

## What I Built (Following All the Patterns)

Redlines is my Python library for text comparison—like track changes in Word. It's in the top 10% of PyPI packages with 177,000 monthly downloads. For v0.6.0, I adapted it specifically for AI agents following every recommended pattern:

**AGENT_GUIDE.md** with JSON schemas, decision matrices, and integration patterns. This is the MCP recommendation: dedicated agent documentation.

**Discovery command**: `redlines guide` so agents can learn the interface dynamically. Again, straight from MCP best practices.

**JSON by default**: `redlines "old" "new"` outputs structured JSON automatically. InfoQ's CLI pattern: "structured output for agents."

**Enhanced error messages** with "What/Why/How" structure, clear descriptions, and code examples. Best practice: "tight feedback loops."

**Subcommands for outputs**: `redlines markdown "old" "new"` for markdown, `redlines json` for explicit JSON, other formats available. Clear, documented interface.

I even updated the GitHub repo image to show an agent workflow.

Everything by the book.

## What Claude Code Actually Does

**It hallucinates a flag that doesn't exist.**

Claude consistently invents `redlines "old" "new" --output markdown` when it wants markdown output. That flag doesn't exist. The actual command is `redlines markdown "old" "new"`.

Why does this happen? Claude is pattern-matching against tools like `kubectl` and `aws cli` that use `--output`. My documentation clearly shows the subcommand pattern, but Claude uses patterns from its training data instead.

**It never runs the discovery command.**

I built `redlines guide` specifically for agents to learn the interface. Based on the trail of commands in my Claude Code sessions, it never uses it. Not once.

**It doesn't read the agent documentation.**

AGENT_GUIDE.md sits there with schemas, examples, and integration patterns. Claude appears to ignore it entirely, preferring to hallucinate based on what it thinks CLI tools should look like.

**It rarely explores beyond the default.**

Despite multiple subcommands for different outputs, Claude almost exclusively uses the commandless default: `redlines "old" "new"`. The sophisticated interface I built? Largely unused.

**And then there's the display problem I literally cannot fix.**

I updated the GitHub repo image to show an agent workflow. You know what's missing from that image? Actual redlines output. Why? Claude CLI can't properly display the formatted output. That's not a redlines problem. That's a platform limitation.

There's only so much tool builders can do when the agent platform itself has fundamental constraints.

## This Isn't Just Me

I could write this off as my specific implementation, except the broader evidence shows these aren't edge cases. They're systematic patterns across the entire agent ecosystem:

**Security crisis (October 2025):** Enkrypt AI scanned 1,000 MCP servers. 32% had critical vulnerabilities. Zero had security documentation. A malicious MCP server (postmark-mcp-server) was discovered silently exfiltrating emails in September 2025.

**Agent failure taxonomy:** Vectara documents seven distinct failure modes across all domains. Air Canada paid $812 in damages for chatbot misinformation. New York lawyers got fined $5,000 for submitting ChatGPT-generated fake cases. McDonald's AI drive-through ordered 260 chicken nuggets and added bacon to ice cream before IBM ended the partnership.

**Production testing breaks:** Monte Carlo Data reports that traditional CI/CD doesn't work for agents. "You are testing for hallucinations with evaluations that can hallucinate." Evaluation costs can run 10x the cost of running the agent itself.

**Singapore law firms experience this now:** Major firms like Rajah & Tann and WongPartnership are actively deploying AI, but all emphasize the same thing: human lawyers must verify everything. Han & Lu Law Chambers describes it as a "love-hate relationship"—"sometimes it's like teaching a child...AI may generate different answers to similar prompts and at times just blank."

They're deploying AI "in baby steps, not big moves." That's the ASEAN reality: smaller budgets than Silicon Valley, regional constraints, and practical constraints that demand honest assessments over marketing hype.

## What This Means for Builders

Morris is right. Agents need different interfaces. The industry is building them. MCP adoption is real, not vapor.

But the gap is also real.

Even when you follow all the patterns—agent documentation, discovery commands, JSON defaults, clear errors—agents still hallucinate based on training patterns. They ignore purpose-built discovery mechanisms. They don't read agent-specific documentation. And sometimes the platform itself has limitations you cannot fix.

For solo counsels and legal tech builders with limited resources, this matters. You're working with sensitive client data, where hallucination has real consequences, and where security vulnerabilities aren't theoretical risks. Here's what that means in practice:

**Don't over-invest in sophisticated agent features expecting perfect behavior.** I built AGENT_GUIDE.md, discovery commands, multiple output formats. Claude uses the simplest default and hallucinates the rest.

**JSON by default works. Skip the sophistication.** The Mastodon punchline is real. All those agent-friendly features? The only thing that reliably worked was defaulting to JSON output.

**Human oversight isn't optional.** Singapore law firms deploying Harvey AI and Microsoft Copilot across hundreds of lawyers still emphasize: verify everything. If major firms with enterprise tools can't trust AI alone, neither can you.

**Honest expectations matter more than marketing hype.** Understanding what agents actually do (vs. what they should do) helps you make better decisions about where to invest limited time and resources.

## What Actually Works Today

Keep it simple. JSON output by default. Clear, structured responses. Human verification always.

The industry will get better at this. MCP is 10 months old. Standards evolve. Agent behavior improves. But we're not there yet.

For v0.6.0, I shipped all those agent-friendly features anyway. Maybe future Claude versions will use them. Maybe the discovery command will matter someday. Maybe AGENT_GUIDE.md will help the next generation of agents.

Or maybe the next lesson will be: just default to JSON and move on.

For now, that's where we are. Build the interfaces. Document them. Follow the patterns. But don't be surprised when agents hallucinate `--output markdown` anyway.

That's not cynicism. That's honesty. And for solo practitioners with limited resources, honesty is more valuable than hype.

---

**Related:** This post coincides with the upcoming release of redlines v0.6.0. You can find the library at [github.com/houfu/redlines](https://github.com/houfu/redlines).
