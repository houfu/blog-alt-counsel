---
title: 'From One Source to Three: When the Right Agent Showed Up'
slug: from-one-source-to-three
tags:
  - AI
  - LegalTech
  - zeeker
  - SoloBuilder
  - Singapore
status: draft
featured: false
github_folder: zeeker-three-databases
---

I pulled up data.zeeker.sg the other day and felt something I hadn't felt about this project in months: satisfaction.

Not because it matches the vision I've carried since law school — Singapore legal data, machine-readable, accessible to anyone who needs it. It doesn't, not yet. But because for the first time, I believe I can actually get there.

The site has three databases now, where five months ago there was one. That gap between "one" and "three" isn't really about code. It's about how I work.

## The Invisible Work

When I published Part 1 of OpenClaw Field Notes in April, Zeeker had one source live and 346 articles. I admitted I hadn't gotten the autonomous agent off the ground. I closed with: "I'm not going to pretend I have results to show."

<bookmark url="https://www.alt-counsel.com/openclaw-field-notes-lawyer/" />

What I didn't admit clearly enough was *why*.

The visible work — writing scrapers, configuring databases, deploying to S3 — that's the part most builders talk about. It's the part you can show in a screencast. It's the part AI tooling has gotten genuinely good at.

The visible work isn't what burns solo builders out.

The hard part is everything around it. Every new data source means tracing the HTML quirks of yet another website. Every schema decision means thinking through migrations. Every weird production bug means walking the chain from Datasette to SQLite to S3 (the tools that actually serve the site) to figure out which layer broke. And before any of that visible work happens, you have to *write the plan*. Research the options. Articulate the problem clearly enough that you can act on it.

That's the real solo builder tax. And it's invisible — to your colleagues, to your readers, mostly even to yourself.

I had been carrying all of that in my head while also working full-time, also writing this blog, also trying to have a life. The visible work was fine. The invisible work was crushing me.

## Design in Loops, Not Heroics

The thing that changed wasn't a tool. It was a discipline.

Plan. Do. Feedback. Back to plan.

Each phase of the loop needs the right kind of help. Planning needs a thinking partner who can help you draft options, weigh trade-offs, sketch failure modes. Doing needs an executor that can run the plan without supervision. Feedback needs a place — a queue, a log, a reminder — that holds open items so you don't have to.

The discipline is: at any moment, only one phase is active. The rest are queued. You're not holding everything in your head simultaneously.

For solo builders, this isn't just a productivity tip. It's the difference between a project that grows and a project that quietly dies because the founder ran out of bandwidth. Heroics scale to about three weeks before something cracks. Loops scale indefinitely — but only if the right tools support each phase.

The first time I ran a complete loop — planned a new ingestion task, dispatched it to the agent, got the result back through Discord while I was at dinner — I added a data source in one evening. The same kind of work used to fragment across three weeks of context-switching. That's when I knew the discipline wasn't theoretical.

That's the part I had to figure out.

<!--members-only-->

## The Agent That Runs the Loop

The agent running the Plan and Do phases of my loop is [NanoClaw](https://github.com/qwibitai/nanoclaw) — specifically, my fork of it.

NanoClaw is an open source AI assistant built directly on Anthropic's Claude Agent SDK. Its philosophy is "small enough to understand": a single Node.js process, small enough to read in a sitting, no microservices or sprawling configuration. Each agent runs in its own Linux container (a lightweight isolated environment) with filesystem isolation — meaning the agent can only touch directories I explicitly mount. The codebase is small enough to fork and customise without drowning.

NanoClaw runs as its own agent process; I manage and direct it through the Claude Code interface I already use for everything else.

Three things made it fit Zeeker specifically.

**It uses the Claude Code interface I already use for thinking.** When I want NanoClaw to tackle something specific, I direct it from within Claude Code — the same environment where I already plan, debug, and read Zeeker's code. There's no mode-switching, no separate dashboard to learn.

**Container isolation made it safe to give Zeeker access.** Part 1 ended with the agent hallucinating data partway through a scrape, then trying to create a Zeeker resource based on that hallucinated data. For a project whose entire value is "trustworthy Singapore legal data," that was disqualifying. With NanoClaw, the agent runs in a Docker container that can only see what I've explicitly mounted. Containers don't stop the agent from hallucinating — nothing does. But they bound the blast radius. A confused run can no longer reach into Zeeker's published artefacts and corrupt them on the way down. I sleep better.

**The fork model fits a project, not a person.** I started with the standard install, then forked it for Zeeker — letting me shape the agent around what the project actually needs, rather than around what a generic autonomous-assistant template assumes. The customisation isn't config files. It's code changes, made by asking Claude Code to modify my fork directly. Small enough that this is safe.

## The Discord Layer

Plan and Do are only two-thirds of the loop. Feedback is the part most builders skip — and it's where solo projects die.

NanoClaw connects to Discord. So does Claude Code, via the Channels feature.

What this means in practice: every loop has a destination. When NanoClaw finishes a task, it reports back through Discord. When something fails, the failure lands in Discord. When I defer an item, NanoClaw's scheduler logs it and posts it back to the channel the next morning, threaded against the original conversation — so I find it without searching.

Setting this up wasn't a weekend project. Discord support is built into NanoClaw — adding it is a single command in the install flow, not a separate integration to wire up.

Discord becomes the persistent queue that lets me switch off.

This is the bit that took me a while to understand. In Part 1, I admired the channel-based interface but called it "a showpiece, not a workflow." Watching people demo agents on WhatsApp impressed me; using one daily didn't.

I was wrong about that. The channel really is the workflow — once paired with the right agent and the right loop discipline.

The change isn't that I do more work. It's that I trust the loop to hold what I'm not actively working on. I close the laptop on Friday evening. Monday morning, I check Discord. The deferred items are there, waiting. Some have moved forward on their own. The rest are queued for me to tackle when I'm fresh.

That's the layer that makes solo building sustainable. Not the agent alone. The agent plus the queue.

## Different Harnesses, Different Shapes

NanoClaw's own creator put the comparison generously in the project's README:

> "OpenClaw is an impressive project, but I wouldn't have been able to sleep if I had given complex software I didn't understand full access to my life."

That framing is right. OpenClaw isn't a worse tool. It's a tool shaped for a different kind of work — a polished general-purpose personal assistant for users who want a digital coworker that just works out of the box. That's a real and legitimate need.

NanoClaw is shaped differently. It assumes you want to read the code, fork it, and customise it to fit your specific project. It assumes the agent is a tool for *building*, not a coworker to live with. That's also a real and legitimate need — and it's the one I have.

Neither is wrong. But agent harnesses encode assumptions about the kind of project you're running. OpenClaw assumed personal-assistant. Zeeker is data infrastructure. The mismatch wasn't anyone's fault. It was just a wrong-shape problem.

If you're a solo builder evaluating an agent harness, the question isn't "which one is best?" It's "which one is shaped for the kind of work I'm actually doing?"

## What's Live Now

Here's where Zeeker stands today:

![data.zeeker.sg landing page showing three databases — SG Law Watch, Zeeker Judgements, and SG Government Newsrooms — where five months ago there was one](zeeker-landing-page.png)

Three databases now host the data:

- **SG Law Watch** (7 tables) — Singapore legal news, FAQs, reference materials
- **Zeeker Judgements** (4 tables) — Court judgment data
- **SG Government Newsrooms** (10 tables) — Press releases, speeches, parliamentary replies from Singapore ministries and the judiciary

![Zeeker SQL editor with schema sidebar and query input — the working interface any reader can use at data.zeeker.sg](zeeker-sql-editor.png)

There's a full SQL query editor with schema reference, CSV and JSON export, a JSON API for programmatic access, and full-text search across databases. The data is published under CC-BY-4.0 (free to use with attribution).

In November, I wrote that data.zeeker.sg was complementary to SMU's SOLID project — they were building empirical research infrastructure (statistical metadata about court decisions); I was building current awareness. Adding the Judgements database narrows that gap a little, but only as full-text content access. The empirical metadata layer is still SOLID's territory, and I think it should be.

<bookmark url="https://www.alt-counsel.com/what-i-learned-at-smus-legal-database-launch-and-my-decision-about-data-zeeker-sg-2/" />


The November post ended with: *"I renewed the domain. I'm not done exploring."*

Five months later, that exploration has visible output. Not the full vision yet. But evidence that the rest is reachable.

## Loops Over Heroics

For solo counsels, small legal teams, anyone trying to build something ambitious without a team to lean on:

The work that breaks you isn't the visible work. It's the writing, planning, researching that has to happen *before* any visible work begins. That's the cognitive overhead nobody talks about, and it's what kills most solo projects.

You don't fix it with heroics. You fix it with loops.

I'm not done with Zeeker. The site has three databases where five months ago it had one. The vision isn't fully realised. But for the first time since law school, I believe I can get there.

What's your loop?
