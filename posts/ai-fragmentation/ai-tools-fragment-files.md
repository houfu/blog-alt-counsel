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

Then I opened my iPad to actually work.

Presentation drafts I'd been building through Claude Cowork? Stranded in a local folder. A blog post sitting at 30%? Same story. I went looking for files I was sure existed and kept hitting walls.

I checked Nextcloud. There it was — a sync error on my Mac that I'd missed. Or rather, it had shown a cryptic warning I hadn't investigated. Turns out the sync had silently broken weeks ago. The cause was almost funny: I'd used Cowork to build a reveal.js presentation, which spun up a local server and generated a `node_modules` folder. Thousands of tiny files, sitting inside my Nextcloud directory, choking the sync engine. One tool's artifacts broke another tool's backup chain.

Neither tool failed on its own. The *interaction* between them created the blind spot.

That's when I realised my problem was bigger than a broken sync.

## My mental model was wrong

I'd been carrying around a simple map of where my work lives. Code goes to GitHub. Documents go to Nextcloud. Two zones, both backed up. This worked for years.

But somewhere in the last few months, that map stopped being accurate — and I didn't notice.

When I actually sat down and traced where my files had ended up, the list was longer than I expected. Claude.ai conversations holding research and draft paragraphs that never made it into a document. A `~/.claude/` folder on my machine storing session histories, auto-memory, and todos — none of which syncs anywhere. A `~/Documents/Claude/Projects/` directory where Cowork quietly deposits its outputs. The sandboxed folder I'd pointed Cowork at for that reveal.js presentation. All local. All outside my backup chain.

And then there was the one that stung most. I'd been using Claude Code on the cloud for months, where it auto-commits and pushes to GitHub constantly. I'd trained myself to trust that my coding work was always saved. When I got `/remote` working on my local machine, the interface looked identical — same Claude Code, same commands, same feel. But commits weren't happening automatically. The familiar UX masked that my work was living somewhere entirely different.

I had a backup system. It just hadn't kept up with my tools.

## Six weeks between two new worlds

Here's the thing — I don't think this is a story about being careless. Claude Cowork shipped on January 12, 2026. Claude Code's Remote Control followed on February 25. Six weeks. Two entirely new environments where work can live, each with different persistence assumptions.

Our security and compliance instincts don't update that fast. Nobody's do.

A recent HBR study coined the term **"brain fry"** for this kind of cognitive overload — BCG and UC Riverside surveyed 1,488 workers and found that 14% of AI-using employees experience it. The most draining part wasn't using AI itself. It was the **oversight**: constantly supervising tools, managing outputs, switching between systems. Workers who monitored AI directly reported 19% greater information overload.

But what the study doesn't quite name is the layer underneath: the cognitive overhead isn't just about *using* AI tools. It's about managing the infrastructure around them. Where did that output go? Is this environment auto-saving? If this machine dies tomorrow, what's actually recoverable?

BCG's Matthew Kropp compared it to someone who just learned to drive being given a Ferrari. That's how it felt sitting on my iPad, realising how much I'd assumed.

## So what am I doing about it?

I'm still re-mapping. But the process has taught me that four questions help cut through the noise:

**1. Where do you *think* your work lives?**

Write it down. For me it was two zones: git and Nextcloud. The point isn't the answer — it's forcing yourself to articulate the mental model you're actually relying on. If you've never written it down, it's probably more outdated than you think.

**2. For each AI tool you use: which zone does it belong to?**

This is where the blind spots surface. Cowork saves to a local sandbox. Claude Code on the cloud auto-commits; locally it doesn't. ChatGPT conversations live on OpenAI's servers but aren't in your backup chain.

If the answer is "I'm not sure" — that's your blind spot.

**3. When did you last verify your backup actually works?**

Not "is it set up?" — "is it currently running?" My Nextcloud sync had been broken for weeks. The Mac client showed a warning, but not clearly enough to trigger action. Silent failures are the most dangerous kind.

**4. What changed in the last three months?**

New tools. New features. New environments you started using without thinking about where they store files. If you adopted anything new since your last backup check, your mental model is probably outdated. Mine was.

I don't have clean answers to all four yet. I still need to investigate what's in my own `~/.claude` folder and whether any of it contains work I'd want to recover. I'm writing about the problem while still being inside it.

## For solo counsels and small teams

If you're working without an IT department — and most of us are — this infrastructure management falls entirely on you. There's no sysadmin updating the backup policy when you adopt a new AI tool. There's no compliance team auditing whether your Cowork outputs are being preserved.

The question isn't "what's the best AI tool?" It's: **"do I know where my work actually is?"**

I wrote this post on my iPad, connected to Claude Code through Remote Control — the very tool whose persistence assumptions caught me off guard. The irony isn't lost on me.

I'm still re-mapping mine. If you haven't checked yours recently, now might be a good time.
