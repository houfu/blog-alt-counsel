---
title: "\"Where Is My Work?\" — How AI Tools Quietly Fragment Your Files"
slug: "ai-tools-fragment-files"
tags: ["AI", "LegalTech", "CloudComputing"]
status: draft
featured: false
github_folder: "ai-fragmentation"
---

I sent my laptop for repair last week and assumed I'd barely notice.

Git repos? All on GitHub. Documents? Nextcloud auto-syncs to the cloud. Claude conversations? Stored on Anthropic's servers. I even asked Claude to audit my files before I shipped the laptop off. Everything looked covered.

Then I opened my iPad to actually work — and discovered I was behind on everything.

Presentation drafts I'd been building through Claude Cowork? Stranded in a local folder. A blog post 30% done? Same. Nextcloud showed a sync error on my Mac, but I'd missed it — or rather, it had shown a cryptic warning I hadn't investigated. The sync had silently broken weeks ago.

The cause was almost funny: I'd used Cowork to build a reveal.js presentation, which spun up a local server and generated a `node_modules` folder. That folder — thousands of tiny files — sat inside my Nextcloud directory and choked the sync. One tool's artifacts broke another tool's backup chain. Neither failed on its own. The *interaction* between them created the blind spot.

## The invisible layer

Here's what I didn't appreciate until this happened: AI tools don't just help you work. They multiply the *places* where your work lives.

Before AI entered my workflow, I had a simple mental map. Code goes to GitHub. Documents go to Nextcloud. Two zones, both backed up. Done.

Now? My work is scattered across at least five or six environments:

- **Git repositories** on GitHub (code, blog drafts)
- **Nextcloud** (documents, presentations, notes)
- **Claude.ai conversations** (research, analysis, drafts that never left the chat)
- **`~/.claude/`** on my local machine (session histories, auto-memory, todos — none of which syncs anywhere)
- **`~/Documents/Claude/Projects/`** (Cowork outputs, local-only, no cloud sync)
- Whatever **sandboxed folder** I pointed Cowork at for a specific project

Each environment makes its own assumptions about persistence. GitHub auto-commits when I use Claude Code on the cloud. But when I got `/remote` working on my local machine, the interface looked identical — same Claude Code, same commands, same feel. Except commits weren't happening automatically. The familiar UX masked that my work was living somewhere entirely different.

## This is frontier pain

I'm not writing this as a cautionary tale about being careless. I had a backup system. It worked for years.

The problem is pace. Claude Cowork shipped on January 12, 2026. Claude Code's Remote Control followed on February 25. Six weeks. Two entirely new environments where work can live, each with different persistence assumptions — and I'm supposed to update my backup mental model in between?

A recent HBR study by Boston Consulting Group and UC Riverside coined the term **"brain fry"** for this kind of cognitive overload. They surveyed 1,488 workers and found that 14% of AI-using employees experience it. The most draining part wasn't using AI itself — it was the **oversight**: constantly supervising tools, managing outputs, switching between systems. Workers who monitored AI directly reported 19% greater information overload.

But here's what the study doesn't quite capture: the cognitive overhead isn't just about *using* AI tools. It's about managing the **infrastructure** around them. Where did that output go? Is this environment auto-saving? If my laptop dies tomorrow, what's actually recoverable?

BCG's Matthew Kropp compared it to someone who just learned to drive being given a Ferrari. That's exactly how it feels. The tools are powerful. The muscle memory for managing them safely hasn't caught up.

## Neither is wrong, but both are incomplete

You could argue I should have checked my Nextcloud sync more often. Fair. You could also argue that tools shouldn't silently break backup chains when they interact. Also fair.

Neither is wrong. But the real issue is that our security and compliance instincts — the habits we've built over years of working with files — were calibrated for a world with fewer moving parts. AI-augmented workflows have more environments, more assumptions, and more invisible dependencies than traditional ones. And they're changing faster than anyone's habits can keep up.

## Four questions to audit your own blind spots

I'm still re-mapping my own setup. But the process has taught me that four questions cut through the noise:

**1. Where do you *think* your work lives?**

Write it down. For me it was two zones: git and Nextcloud. Yours might be Dropbox and Google Drive, or OneDrive and a shared server. The point isn't the answer — it's forcing yourself to articulate the mental model you're actually relying on.

**2. For each AI tool you use: which zone does it belong to?**

This is where blind spots surface. Claude Cowork saves to a local sandbox. Claude Code on the cloud auto-commits; Claude Code locally doesn't (unless you set it up). ChatGPT conversations live on OpenAI's servers but aren't in your backup chain. Copilot suggestions are ephemeral.

If the answer is "I'm not sure" — that's your blind spot.

**3. When did you last verify your backup actually works?**

Not "is it set up?" — "did you check that it's currently running?" My Nextcloud sync had been broken for weeks. The Mac client showed a warning, but not clearly enough to trigger action. Silent failures are the most dangerous kind.

**4. What changed in the last three months?**

New AI tools. New features in existing tools. New environments you started using without thinking about where they store files. If you adopted anything new since your last backup check, your mental model is probably outdated.

I don't have clean answers to all four yet. I still need to investigate what's in my own `~/.claude` folder and whether any of it contains work I'd want to recover. That's an honest admission: I'm writing about the problem while still being inside it.

## For solo counsels and small teams

If you're working without an IT department — and most of us are — this infrastructure management falls entirely on you. There's no sysadmin updating the backup policy when you start using a new AI tool. There's no compliance team auditing whether your Cowork outputs are actually being preserved.

The question for practitioners isn't "what's the best AI tool?" It's: **"do I know where my work actually is?"**

I wrote this entire post on my iPad, connected to Claude Code through Remote Control. The irony isn't lost on me. The very fragmentation I'm describing is what makes this possible — and what makes it risky.

I'm still re-mapping mine. If you haven't checked yours recently, now might be a good time.
