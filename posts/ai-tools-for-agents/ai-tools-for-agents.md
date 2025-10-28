# I Built CLI Tools for Claude Code. Here's What I Learned About Designing for AI Users

I posted this on Mastodon recently:

> **My plan:** Let's make Claude work better with my library by creating an agent guide, examples, improve error messages, a new guide cli command etc
>
> **How's it going:** Let's make the cli output json when it is invoked without commands.

That captures the story of redlines v0.6.0 better than any technical documentation could.

## The Movement: Agents Need Different Interfaces

Jason Morris argues that "AI is a different kind of user, that needs a different kind of software, with a different kind of interface." Anthropic launched the Model Context Protocol (MCP) in November 2024 as "USB-C for AI applications." Companies like Block, Apollo, and Replit adopted it. InfoQ published patterns for building agent-friendly CLIs. VentureBeat estimates 16,000+ MCP servers deployed in just 10 months.

The consensus is clear: purpose-built interfaces help agents work with tools.

So for redlines v0.6.0, I built exactly that.

## What I Built (Following All the Patterns)

Redlines is my Python library for text comparison—like track changes in Word. It's in the top 10% of PyPI packages with 177,000 monthly downloads. For v0.6.0, I adapted it specifically for AI agents following every recommended pattern:

**AGENT_GUIDE.md** with JSON schemas, decision matrices, and integration patterns—the MCP recommendation for dedicated agent documentation.

**Discovery command**: `redlines guide` so agents can learn the interface dynamically—straight from MCP best practices.

**JSON by default**: `redlines "old" "new"` outputs structured JSON automatically—InfoQ's "structured output for agents" pattern.

**Enhanced error messages** with "What/Why/How" structure, clear descriptions, and code examples—the "tight feedback loops" best practice.

**Subcommands for outputs**: `redlines markdown "old" "new"` for markdown, `redlines json` for explicit JSON, other formats available.

I even updated the GitHub repo image to show an agent workflow.

Everything by the book.

## What Claude Code Actually Does

**It hallucinates a flag that doesn't exist.**

Claude invents `redlines "old" "new" --output markdown`. That flag doesn't exist. The actual command: `redlines markdown "old" "new"`.

The AI doesn't "know" what redlines supports—it predicts commands based on training patterns. Since kubectl, aws cli, and jq use `--output`, Claude assumes redlines does too. Training data overrides documentation.

Same failure mode: New York lawyers got fined $5,000 for submitting briefs with ChatGPT-hallucinated case citations. The AI confidently generates plausible-sounding answers, accurate or not.

**It never runs the discovery command.**

I built `redlines guide` specifically for agents to learn the interface. In my Claude Code sessions, it never uses it. Not once.

Training bias: Commands like `--help` appear millions of times in training data. A custom `guide` command? Unfamiliar, not an established pattern. AI defaults to what it's seen, not what you documented.

This matters beyond CLI tools: build custom workflows—templates, processes, document structures—and AI will impose generic patterns from elsewhere, not adapt to your practices.

**It doesn't read the agent documentation.**

AGENT_GUIDE.md sits there with schemas, examples, and patterns. Claude ignores it, preferring to hallucinate based on what it thinks CLI tools should look like.

**It rarely explores beyond the default.**

Despite multiple subcommands for different outputs, Claude almost exclusively uses the commandless default: `redlines "old" "new"`. The sophisticated interface I built? Largely unused.

This isn't laziness—it's how tool calling works. Complex command chains have more failure points. Agents default to the simplest path. This practical strategy means sophisticated features go unused.

For evaluating AI tools: vendors demo impressive multi-step workflows, but in production AI uses the simplest path. Budget for basic functionality, not sophisticated capabilities marketing shows.

**But the most frustrating issue: same request, different results.**

Ask Claude to use redlines for markdown output. Sometimes it works. Sometimes it refuses. Same request, different behavior. You end up in "regenerate response hell"—clicking regenerate over and over, hoping this time it works.

This is non-determinism. AI models don't produce consistent outputs for identical inputs—you can't rely on repeatable behavior.

Monte Carlo Data captured this: "You are testing for hallucinations with evaluations that can hallucinate." You can't write a unit test for "agent uses tool correctly" when the agent might pass five times and fail the sixth with identical input.

For practitioners: this unpredictability is why AI feels unreliable in production workflows. Document review, contract analysis, legal research—these need deterministic behavior. When you can't predict AI behavior document-to-document, you're stuck with expensive human verification on every output.

**And then there's the display problem I literally cannot fix.**

I updated the GitHub repo image to show an agent workflow. What's missing? Actual redlines output. Claude CLI can't properly display it. That's a platform limitation, not a redlines problem.

Tool builders can't fix agent platform constraints.

## This Isn't Just Me

These aren't edge cases in my implementation. They're systematic patterns across the agent ecosystem.

Enkrypt AI scanned 1,000 MCP servers in October 2025. 32% had critical vulnerabilities. Zero had security documentation. A malicious MCP server (postmark-mcp-server) was discovered silently exfiltrating emails in September 2025.

## What This Means for Builders

Morris is right that agents need different interfaces. But even when you follow all the patterns—agent documentation, discovery commands, JSON defaults, clear errors—agents still hallucinate based on training patterns, ignore purpose-built mechanisms, and face platform limitations you cannot fix.

For solo counsels and legal tech builders with limited resources, this matters. You're working with sensitive client data, where hallucination has real consequences, and where security vulnerabilities aren't theoretical risks. Here's what that means in practice:

**Don't over-invest in sophisticated agent features expecting perfect behavior.** I built AGENT_GUIDE.md, discovery commands, multiple output formats. Claude uses the simplest default and hallucinates the rest.

**JSON by default works. Skip the sophistication.** The Mastodon punchline is real. All those agent-friendly features? The only thing that reliably worked was defaulting to JSON output.

**Human oversight isn't optional.** If major firms with enterprise AI tools can't trust output without verification, neither can you.

**Honest expectations matter more than marketing hype.** Understanding what agents actually do (vs. what they should do) helps you make better decisions about where to invest limited time and resources.

## What Actually Works Today

The industry will get better at this. MCP is 10 months old. Standards evolve. Agent behavior improves. But we're not there yet.

For v0.6.0, I shipped all those agent-friendly features anyway. Maybe future Claude versions will use them. Maybe the discovery command will matter someday. Maybe AGENT_GUIDE.md will help the next generation of agents.

Or maybe the next lesson will be: just default to JSON and move on.

Build the interfaces. Document them. Follow the patterns. But don't be surprised when agents hallucinate `--output markdown` anyway.

That's not cynicism. That's honesty. And when resources are limited, honesty beats hype.

---

**Related:** This post coincides with the upcoming release of redlines v0.6.0. You can find the library at [github.com/houfu/redlines](https://github.com/houfu/redlines).
