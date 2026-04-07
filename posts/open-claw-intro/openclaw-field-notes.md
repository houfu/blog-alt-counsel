---
title: 'OpenClaw Field Notes: A Lawyer Tries to Tame an Autonomous AI Agent'
slug: openclaw-field-notes-lawyer
tags:
  - AI
  - zeeker
  - Tutorial
  - CloudComputing
status: scheduled
featured: false
github_folder: open-claw-intro
post_id: 69d52da6aa301f0001bc3d73
published_at: '2026-04-08T00:15:09.000Z'
feature_image: >-
  https://images.unsplash.com/photo-1555564946-67d9945bf3d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDMzfHxsb2JzdGVyJTIwfGVufDB8fHx8MTc3NTU3OTY4Mnww&ixlib=rb-4.1.0&q=80&w=2000
custom_excerpt: >-
  Turns out the hard part isn't prompt engineering. It's designing the harness —
  a problem most lawyers, even lawyer-coders, aren't equipped to solve yet.
---

When I entered `/new` to restart OpenClaw for the third time one morning, I knew I had enough.

I could *see* what OpenClaw could do for Zeeker, my open source legal data project — automate the GitOps (using Git to manage infrastructure and deployments), handle the tedious DevOps work that's genuinely painful when you're one person. The trial and errors, the constant restarts and model churn were the price of figuring out OpenClaw. 247,000+ GitHub stars and a community that won't stop talking about it. The hype has weight.

But getting from "installed" to "useful" turned out to be a different journey entirely.

These are my field notes from the first few weeks of trying to make OpenClaw work for a real project. Not a review. Not a recommendation. Just an honest account of what happened when a lawyer tried to tame an autonomous AI agent.

## Why I'm Using Zeeker as My Test Subject

Let's get this out of the way first: I did not point OpenClaw at client work. The security concerns are well-documented. Cisco found that 26% of 31,000 ClawHub skills contained vulnerabilities. OpenClaw's own maintainer warned it's "far too dangerous" for non-technical users. The Business Times Singapore recently ran a feature on shadow AI risks with NUS, KPMG Singapore, and SGTech all weighing in. That conversation is happening here too, and it's not hypothetical.

So I picked something manageable. Zeeker is my open source project for Singapore legal data. It has real infrastructure needs — container orchestration, CI/CD pipelines (the automated systems that build and deploy code), deployment automation — and I'm the only person maintaining it. If the agent messes something up, the blast radius is me.

<bookmark url="https://www.alt-counsel.com/data-zeeker-sg-part-2a-architecture/" />

## What Actually Makes OpenClaw Different

Before we go further, it's worth understanding why OpenClaw isn't just another AI chatbot. Three things set it apart.

**It's long-running.** Most AI tools wait for you to type something and then respond. OpenClaw has a "heartbeat" scheduler. You can set it to wake up every 30 minutes, check on objectives, and act autonomously. It keeps working while you sleep. That's a fundamentally different relationship with an AI tool.

**It has a skills system.** Skills are packaged automations the agent can execute. There's a marketplace (ClawHub) where people share them. You can build your own. This is how OpenClaw goes from "general-purpose agent" to "agent that does *your* specific things." I wrote about why skills changed how I think about prompt engineering — that mental model carries directly into agent work.

<bookmark url="https://www.alt-counsel.com/why-prompt-engineering-felt-wrong-and-what-skills-changed/" />

**You interact through channels.** Not a web interface. Not a terminal. You talk to OpenClaw through WhatsApp, Telegram, Slack, or Discord. The idea is that your AI agent lives where you already communicate. In practice, this means you can check on a running task from your phone while you're in court.

These three things — long-running, extensible, channel-based — are what make OpenClaw genuinely interesting. It's not a smarter chatbot. It's an attempt at a digital coworker.

## Where Things Got Hard

The initial setup was genuinely smooth — wizards, automatic codebase scanning, a working mental model of Zeeker within minutes. It felt like onboarding a new colleague who actually reads the documentation. That first impression creates a false sense of momentum. Because the *real* decisions come next.

The mindset shift I had to make: stop thinking in terms of context engineering. With most AI tools, the game is about crafting the right prompt, managing the context window, setting up retrieval. With OpenClaw, the game is designing the *harness*. What machine am I running on? What model can I afford? What other agents surround it and how do they coordinate? It's a different kind of problem entirely.

**Where do you install it?** OpenClaw runs locally on your machine by default. But if you want it to be truly long-running — working while you sleep, that heartbeat scheduler doing its thing, talk to it meaningfully on your phone — your machine needs to stay on. Practical tip: if you're on a Mac, learn to love `caffeinate`. Run `caffeinate -i` in a terminal to prevent your Mac from sleeping while the agent works. You could run it on a cloud VM instead, but that means understanding cloud infrastructure, security groups, remote access, and costs. You could self-host on a home server like [Daimon Legal in Australia](https://www.daimonlegal.com/blog/how-can-i-use-openclaw-10-use-cases-from-our-firm-and-the-legal-issues-you-should-know-about) does, but that's still another layer of knowledge.

**Which model do you connect?** OpenClaw supports Claude, GPT, Qwen, GLM, Gemini, and local models. Each has different costs, capabilities, and token limits. Running a model locally means understanding hardware requirements and how to host it on your machine. Using a cloud API means understanding pricing tiers and rate limits. I chose an API model and burned through tokens faster than I expected just *figuring out what to do*.

**What do you actually use it for?** This was the hardest question. Zeeker has dozens of things that could be automated. GitOps workflows. Infrastructure provisioning. CI/CD pipeline management. Monitoring and alerting. Documentation updates. Every one of these is a legitimate use case. But I wasn't sure which ones OpenClaw could actually handle well, and every failed experiment cost time and tokens.

> Here's the uncomfortable truth: these aren't legal tech decisions. They're harness decisions — the kind of setup and plumbing that DevOps engineers handle with years of learning. And if you're a lawyer — even a lawyer who codes — this knowledge gap is real.

**And then there's stability.** This is the part that really got to me. OpenClaw shipped 13 releases in March alone. That sounds impressive until you realise what it means in practice: constant breaking changes. Reddit threads are full of people spending hours debugging after updates. A GitHub issue reports the gateway crashing every 50 minutes. One Facebook user put it bluntly: "OpenClaw breaks more easily than glass."

I tried using Claude Code as a routing layer in front of OpenClaw — the idea being that Claude Code would dispatch the right task to the right OpenClaw skill based on what I asked. In theory, a clean separation: Claude as the brain, OpenClaw as the hands. It kept breaking. Not in dramatic ways. In quiet, frustrating ways where things just stopped working and you're not sure why.

I was at a Claude Code meetup last month where everyone was buzzing about what they'd built with OpenClaw. Impressive demos. Advanced workflows. And I kept thinking: how? The computing power alone for what they were showing must have been enormous. My best guess is they were burning through Opus API credits at a rate most of us can't sustain. The demos look magical. The daily reality is different.

## A Framework: From What You Have to What You Can Do

After a few frustrating weeks of scattered experiments, I went looking for a framework. Not because I'm naturally a framework person, but because I had free time while installing OpenClaw again.

The one I found most useful works in three steps:

**Step 1: Audit what harness you already have.**

Don't start with what you *want* the agent to do. Start with what you've *got*. What machines can you run it on? What cloud accounts do you have? What APIs are already set up? What CI/CD pipelines exist? What's your realistic monthly budget for tokens and compute?

For me, I had a virtual private server that's always on to hold the agent. I had access to Claude, and I managed to figure out how to get this MacBook to run Gemma 4 27B. If my MacBook is turned off or goes to sleep, I might want to run an Ollama plan (Ollama is software for running AI models locally on your own machine). And the question I keep coming back to: is $20 a month too much for this?

**Step 2: Map what the agent could do with that harness.**

Given your actual setup — not the dream setup, the real one — what tasks are even possible? If you're running locally on a laptop, long-running overnight jobs aren't realistic unless you solve the "keep it awake" problem. If your budget is tight, token-heavy experimentation is off the table.

This step killed about half my wish list immediately. And that was actually helpful.

**Step 3: Match to realistic first tasks.**

From whatever survived Step 2, pick the thing that's:
- Repetitive enough that automating it saves real time
- Low-risk enough that failures won't break anything important
- Well-defined enough that you can tell if the agent did it correctly

For Zeeker, this pointed me toward a subset of the GitOps work — specific, repeatable tasks rather than the ambitious "manage all my infrastructure" vision I started with.

## Where I Am Now

I'm going to be honest: I haven't gotten this off the ground yet.

The framework helped me think clearly about what I need. The setup was smooth. The vision is clear. But actually getting from "I know what I want to automate" to "the agent is doing it reliably" — I'm not there.

The short tasks worked. I got OpenClaw to set up cron jobs, clone repositories, and handle one-shot GitOps operations on Zeeker. That part was encouraging. Then I tried to push it into the long-running scraping work that Zeeker actually needs — and that's where it broke. The agent started hallucinating data partway through a scrape, then tried to create a Zeeker resource based on that hallucinated data. For a project whose entire value proposition is "trustworthy Singapore legal data," that's an unacceptable failure mode. Not "broken in a way I can fix." Broken in a way that would poison the data I'm trying to publish.

Each failed run was an evening I won't get back. The harness decisions, the token costs of experimentation, the stability issues, the long build-up of agent capabilities — it all takes more time and knowledge than I expected.

I'll give credit where it's due: the channel-based interface is the one piece that consistently impresses. The LegalQuants built LQClaw for onboarding — and when people see they can chat with an AI agent through WhatsApp or Discord instead of some developer-facing terminal, their eyes light up. That interface is the showpiece. But a killer demo is not a reliable workflow.

I'm still at it. But I'm not going to pretend I have results to show.

## The Bigger Picture

Some people claim OpenClaw is perfect for solos. The community tells a more complicated story.

[My Legal Academy](https://mylegalacademy.com/kb/what-is-openclaw-law-firm-guide) claims to have deployed it for over 400 US law firms at $25-85/month. That sounds encouraging.

Then there's [Stephen Smith](https://www.smithstephen.com/p/the-ai-agent-demo-was-easy-trusting), who built a whole team of specialised agents on a Mac Mini — and then moved away from OpenClaw entirely, rebuilding on Claude Code because he couldn't close "the gap between possible and trusted."

[Pat Veilleux](https://www.linkedin.com/posts/pat-veilleux-967845186_everyone-is-talking-about-ai-agents-like-activity-7443261820456419328-nG44), a lawyer at Legal Velocity, evaluated OpenClaw for billing automation. He decided it needed "lots of configuration, security provisioning, and technical troubleshooting." Then he built something simpler with Claude Projects instead. Three lunch breaks.

That one stung when I read it. He saw what I was only starting to see, and he pivoted faster. I wrote about this exact pattern a while ago — infrastructure thinking versus tool thinking. Pat picked the tool path. I'm still in the infrastructure trap.

<bookmark url="https://www.alt-counsel.com/tool-vs-infrastructure-mindset/" />

Meanwhile, setup consultants like LaunchMyOpenClaw and RemoteOpenClaw have sprung up specifically because most people can't do this on their own.

The marketing pitch is "anyone can do this." Some deployments are working. The vision is real. Neither claim is entirely wrong. But the gap between what OpenClaw is marketed as and what it currently requires — that's the thing most coverage doesn't talk about.

The ideas behind autonomous agents are compelling. Agents that work while you sleep, that remember context across sessions, that you can message from your phone — that's a real vision of where we're heading. But the current product is not ready for people without dedicated teams to set up the harness. 

For solo counsels and anyone trying this at home: go in with your eyes wide open about what "getting started" actually requires. It's not just downloading an app.

The burst of excitement meanwhile has created many alternatives. For lawyers who already have a Claude Code subscription, you now have tantalising opportunities:
* Dispatch allows you to send tasks from the Claude mobile app to your computer's Cowork (as long as you flick that "keep Computer awake" switch in Claude Desktop Settings).
* Cowork can also run tasks on a schedule (again, as long as you keep your computer awake). These tasks remember permissions, so you can run and check on them later.
* Channels pushes webhooks, alerts, and chat messages into a Claude Code session. Together with `/remote-control`, you get great access to a Claude Code session from anywhere.

But that's a story for Part 2.

If you've gotten further than I have, I'd genuinely like to know how.
