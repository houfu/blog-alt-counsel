---
title: "\"Where Is My Work?\" — How AI Tools Quietly Fragment Your Files"
slug: "ai-tools-fragment-files"
tags: ["AI", "LegalTech", "CloudComputing"]
status: draft
featured: false
github_folder: "ai-fragmentation"
---

I sent my laptop for repair last week and felt nothing. No anxiety, no scramble.

Git repos? All on GitHub. Documents? Nextcloud — my self-hosted cloud sync — handles those automatically. Claude conversations? Stored on Anthropic's servers. I even asked Claude to audit my files before I shipped the laptop off. Everything looked covered.

Then I opened my iPad to actually work.

Presentation drafts I'd been building through Claude Cowork — Anthropic's desktop AI agent that works with your local files? Stranded in a local folder. A blog post sitting at 30%? Same story. I went looking for files I was sure existed and kept hitting walls.

I checked Nextcloud. There it was — a sync error on my Mac that I'd missed. Or rather, it had shown a cryptic warning I hadn't investigated. Turns out the sync had silently broken weeks ago. The cause was almost funny: I'd used Cowork to build a reveal.js presentation, which spun up a local server and generated a `node_modules` folder. Thousands of tiny files, sitting inside my Nextcloud directory, choking the sync engine. One tool's artifacts broke another tool's backup chain.

Neither tool failed on its own. The *interaction* between them created the blind spot.

That's when I realised my problem was bigger than a broken sync.

## My mental model was wrong

I'd been carrying around a simple map of where my work lives. Code goes to GitHub. Documents go to Nextcloud. Two zones, both backed up. This worked for years.

But somewhere in the last few months, that map stopped being accurate — and I didn't notice. Sitting on the iPad, hitting wall after wall looking for files I was sure existed, I felt something I hadn't expected: not anger, but embarrassment. I'm a lawyer who builds with these tools daily. How did I miss this?

When I actually sat down and traced where my files had ended up, the list was longer than I expected. Claude.ai conversations holding research and draft paragraphs that never made it into a document. A `~/Documents/Claude/Projects/` directory where Cowork quietly deposits its outputs. The sandboxed folder I'd pointed Cowork at for that reveal.js presentation. All local. All outside my backup chain.

And then there's `~/.claude/` — a hidden folder on my machine that most users would never think to back up. It stores session histories from every Claude Code conversation, auto-memory files where Claude accumulates learnings about your projects, and todo lists from every work session. The official docs call it "ephemeral." But after months of Claude learning my coding patterns, my project architecture, my debugging preferences — that accumulated context isn't nothing. It's like losing a colleague's institutional knowledge of how you work. And none of it syncs anywhere.

And then there was the one that stung most. I'd been using Claude Code — Anthropic's AI coding agent — on the cloud for months, where it auto-commits and pushes to GitHub constantly. I'd trained myself to trust that my coding work was always saved. When I got `/remote` working on my local machine, the interface looked identical — same Claude Code, same commands, same feel. But commits weren't happening automatically. The familiar UX masked that my work was living somewhere entirely different.

I had a backup system. It just hadn't kept up with my tools.

## The tools are moving faster than our habits

Here's the thing — I don't think this is a story about being careless. Claude Cowork shipped on January 12, 2026. Claude Code's Remote Control followed on February 25. Six weeks. Two entirely new environments where work can live, each with different persistence assumptions.

Our security and compliance instincts don't update that fast. Nobody's do.

A recent [HBR study](https://hbr.org/2026/03/when-using-ai-leads-to-brain-fry) coined the term **"brain fry"** for this: the most draining part of using AI wasn't the AI itself — it was the oversight, the constant managing of where outputs go and what's saved where. That cognitive overhead concentrates at the seams between tools, where no single system tracks what another creates. It's exactly what happened to me.

## So what am I doing about it?

I'm still re-mapping. But the process has taught me that four questions help cut through the noise:

1. **Where do you *think* your work lives?** Write it down. For me it was two zones: git and Nextcloud. The point isn't the answer — it's forcing yourself to articulate the mental model you're actually relying on. If you've never written it down, it's probably more outdated than you think.

2. **For each AI tool you use: which zone does it belong to?** This is where the blind spots surface. Cowork saves to a local sandbox. Claude Code on the cloud auto-commits; locally it doesn't. ChatGPT conversations live on OpenAI's servers but aren't in your backup chain. If the answer is "I'm not sure" — treat it as local-only and unbackable until you can confirm otherwise. And remember to check for both your work product (documents, code, drafts) and tool state (session history, memory, settings) — losing them has different consequences.

3. **When did you last verify your backup actually works?** Not "is it set up?" — "is it currently running?" My Nextcloud sync had been broken for weeks. The Mac client showed a warning, but not clearly enough to trigger action. Silent failures are the most dangerous kind.

4. **What changed in the last three months?** New tools. New features. New environments you started using without thinking about where they store files. If you adopted anything new since your last backup check, your mental model is probably outdated. Mine was.

I don't have clean answers to all four yet. I'm writing about the problem while still being inside it.

## For solo counsels and small teams

If you're working without an IT department — and most of us are — this infrastructure management falls entirely on you. There's no sysadmin updating the backup policy when you adopt a new AI tool. There's no compliance team auditing whether your Cowork outputs are being preserved.

And for practitioners, this isn't just about lost work. It's about whether you can reconstruct what you produced and how. A research thread that exists only in a Claude conversation, a draft legal opinion that never left a local sandbox — if you can't recover the trail, you have a professional conduct problem, not just an inconvenience.

The question isn't "what's the best AI tool?" It's: **"do I know where my work actually is?"**

I wrote this post on my iPad, connected to Claude Code through Remote Control — the very tool whose persistence assumptions caught me off guard. The irony isn't lost on me.

I'm still re-mapping mine. If you haven't checked yours recently, now might be a good time.
