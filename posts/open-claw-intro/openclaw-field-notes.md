---
title: "OpenClaw Field Notes: A Lawyer Tries to Tame an Autonomous AI Agent"
slug: "openclaw-field-notes-lawyer"
tags: ["AI", "zeeker", "Tutorial", "CloudComputing"]
status: draft
featured: false
github_folder: "open-claw-intro"
---

I hit the token limit for the third time that week, and I closed my laptop.

I could *see* what OpenClaw could do for Zeeker, my open source legal data project. Automate the GitOps. Manage infrastructure. Handle the tedious DevOps work that's genuinely painful when you're one person. OpenClaw has 247,000+ GitHub stars. The creator got acquired by OpenAI within three months of launch. The hype is real.

But getting from "installed" to "useful" turned out to be a different journey entirely.

These are my field notes from the first few weeks of trying to make OpenClaw work for a real project. Not a review. Not a recommendation. Just an honest account of what happened when a lawyer tried to tame an autonomous AI agent.

## Why I'm Using Zeeker as My Test Subject

Let's get this out of the way first: I did not point OpenClaw at client work. The security concerns are well-documented. Cisco found that 26% of ClawHub skills contained vulnerabilities. OpenClaw's own maintainer warned it's "far too dangerous" for non-technical users. The Business Times Singapore just ran a feature last week on shadow AI risks.

So I picked something manageable. Zeeker is my open source project for Singapore legal data. It has real infrastructure needs — container orchestration, CI/CD pipelines, deployment automation — and I'm the only person maintaining it. If the agent messes something up, the blast radius is me.

## What Actually Makes OpenClaw Different

Before we go further, it's worth understanding why OpenClaw isn't just another AI chatbot. Three things set it apart.

**It's long-running.** Most AI tools wait for you to type something and then respond. OpenClaw has a "heartbeat" scheduler. You can set it to wake up every 30 minutes, check on objectives, and act autonomously. It keeps working while you sleep. That's a fundamentally different relationship with an AI tool.

**It has a skills system.** Think of skills as packaged automations — scripts with instructions that the agent can execute. There's a marketplace (ClawHub) where people share them. You can build your own. This is how OpenClaw goes from "general-purpose agent" to "agent that does *your* specific things."

**You interact through channels.** Not a web interface. Not a terminal. You talk to OpenClaw through WhatsApp, Telegram, Slack, or Discord. The idea is that your AI agent lives where you already communicate. In practice, this means you can check on a running task from your phone while you're in court.

These three things — long-running, extensible, channel-based — are what make OpenClaw genuinely interesting. It's not a smarter chatbot. It's an attempt at a digital coworker.

## The Setup Was Actually Nice

I'll give credit where it's due. The initial setup experience was smooth.

OpenClaw has setup wizards that walk you through configuration step by step. One of the most impressive moments was watching it scan my entire Zeeker codebase and build up an understanding of the project structure, the tech stack, the existing CI/CD setup. Within minutes, it had a working mental model of the project.

That first impression matters. It felt like onboarding a new colleague who actually reads the documentation.

But the smooth setup created a false sense of momentum. Because the *real* decisions came next.

## The Real Barriers: The Harness and Models

Here's where things got hard. Not "hard like a tricky coding problem" hard. Hard like "I don't have the right knowledge to make these decisions confidently" hard.

The mindset shift I had to make: stop thinking in terms of context engineering. With most AI tools, the game is about crafting the right prompt, managing the context window, setting up retrieval. With OpenClaw, the game is designing the *harness*. What machine am I running on? What model can I afford? What other agents surround it and how do they coordinate? It's a different kind of problem entirely.

**Where do you install it?** OpenClaw runs locally on your machine by default. But if you want it to be truly long-running — working while you sleep, that heartbeat scheduler doing its thing — your machine needs to stay on. (More on that in a moment.) You could run it on a cloud VM, but that means understanding cloud infrastructure, security groups, SSH access, and costs. You could self-host on a home server like Daimon Legal in Australia does, but that's another layer of knowledge.

**Which model do you connect?** OpenClaw supports Claude, GPT, DeepSeek, Gemini, and local models. Each has different costs, capabilities, and token limits. Running a local model means understanding model hosting — hardware requirements, quantisation, inference servers. Using an API means understanding pricing tiers and rate limits. I chose an API model and burned through tokens faster than I expected just *figuring out what to do*.

**What do you actually use it for?** This was the hardest question. Zeeker has dozens of things that could be automated. GitOps workflows. Infrastructure provisioning. CI/CD pipeline management. Monitoring and alerting. Documentation updates. Every one of these is a legitimate use case. But I wasn't sure which ones OpenClaw could actually handle well, and every failed experiment cost tokens.

Here's the uncomfortable truth: these aren't legal tech decisions. They're harness decisions — the kind of setup and plumbing that DevOps engineers handle with years of context. And if you're a lawyer — even a lawyer who codes — this knowledge gap is real.

Oh, and one practical tip: if you're running OpenClaw on a Mac, learn to love `caffeinate`. Run `caffeinate -i` in a terminal to prevent your Mac from sleeping while the agent works. I lost several long-running tasks before I figured this out. It's a tiny thing, but it matters.

## A Framework: From What You Have to What You Can Do

After a few frustrating weeks of scattered experiments, I went looking for a framework. Not because I'm naturally a framework person, but because I was burning tokens with no direction.

The one I found most useful works in three steps:

**Step 1: Audit what harness you already have.**

Don't start with what you *want* the agent to do. Start with what you've *got*. What machines can you run it on? What cloud accounts do you have? What APIs are already set up? What CI/CD pipelines exist? What's your realistic monthly budget for tokens and compute?

For me, this was a MacBook, a GitHub account with Actions, a small DigitalOcean setup for Zeeker, and maybe $50/month I was willing to spend experimenting.

**Step 2: Map what the agent could do with that harness.**

Given your actual setup — not the dream setup, the real one — what tasks are even possible? If you're running locally on a laptop, long-running overnight jobs aren't realistic unless you solve the "keep it awake" problem. If your budget is tight, token-heavy experimentation is off the table.

This step killed about half my wish list immediately. And that was actually helpful.

**Step 3: Match to realistic first tasks.**

From whatever survived Step 2, pick the thing that's:
- Repetitive enough that automating it saves real time
- Low-risk enough that failures won't break anything important
- Well-defined enough that you can tell if the agent did it correctly

For Zeeker, this pointed me toward a subset of the GitOps work — specific, repeatable tasks rather than the ambitious "manage all my infrastructure" vision I started with.

The other thing the framework made clear: you have to think long-term. You can't just install OpenClaw and throw a complex task at it on day one. You need to build up the agent's capabilities in a series of steps — start with simple skills, let it learn your codebase and workflows, layer on more complex automations over time. It's a long-term investment, not a quick win. And every step in that build-up costs tokens.

## Where I Am Now

I'm going to be honest: I haven't gotten this off the ground yet.

The framework helped me think clearly about what I need. The setup was smooth. The vision is clear. But actually getting from "I know what I want to automate" to "the agent is doing it reliably" — I'm not there. The harness decisions, the token costs of experimentation, the long build-up of agent capabilities — it all takes more time and knowledge than I expected.

I'm still at it. But I'm not going to pretend I have results to show.

## The Bigger Picture

Some people claim OpenClaw is perfect for solos. My Legal Academy has deployed it for over 400 US law firms at $25-85/month. Stephen Smith built a whole team of specialised agents on a Mac Mini. The marketing pitch is very much "anyone can do this."

I'm not so sure.

The harness knowledge alone — where to host, which model, how to manage tokens, how to define skills, how to build up capabilities incrementally — is a barrier that most lawyers won't clear easily. And I say this as someone who codes regularly and maintains open source projects. If it's hard for me, it's going to be harder for someone who doesn't live in a terminal or have an infrastructure team.

What I *am* sure about: the vision is compelling. OpenAI didn't acquire Peter Steinberger for fun. Autonomous agents that work while you sleep, that remember context across sessions, that you can message from your phone — that's where we're heading. The question isn't whether this will be useful. It's whether the current product is ready for people without dedicated teams to set up the harness.

For solo counsels and anyone trying this at home: keep watching this space. The ideas are genuinely exciting. But go in with your eyes open about what "getting started" actually requires. It's not just downloading an app.

I'm still plugging at it. More field notes to come.

## Bonus: Claude Dispatch and Remote Control

While experimenting with OpenClaw, I also tried Claude's dispatch feature and remote control. It's worth a brief comparison because they're tackling similar problems from very different angles.

Both products are in heavy development. Both are changing rapidly. I won't declare a winner because there isn't one yet.

What I will say: the product approaches are fundamentally different. OpenClaw gives you a fully autonomous agent where you own the entire harness — your machine, your model, your skills. Claude's approach keeps things closer to their ecosystem — more controlled, more integrated, but also more constrained.

Neither is wrong. They're building for different futures. Watch this space.
