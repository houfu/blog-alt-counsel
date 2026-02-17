---
title: "Turn a Project Folder into a Cowork Workflow"
slug: "turn-a-project-folder-into-a-cowork-workflow"
tags: ["LegalTech", "AI", "OpenSource", "Tutorial"]
status: draft
featured: false
github_folder: "connect-codraft-article"
---

I'll be honest: I thought Cowork was a poor man's Claude Code. A simplified version for non-coders. Install a plugin, run some slash commands, get your output. That's it.

After writing the [last post](https://alt-counsel.com/so-you-want-to-claude-cowork-the-legal-plugin-a-guide/) about customising the legal plugin, I still thought that. You edit some template files, point Cowork at a folder, and it does its thing. Useful, but limited.

Then I built CoDraft.

CoDraft is a document assembly tool I've been working on. Version 1 is two text files in a folder. That's the whole thing. But when someone opens that folder in Cowork, they get a working workflow: a slash command, project context Claude reads automatically, and an AI that knows what to do without being told twice.

Two text files. A complete workflow. I wasn't simplifying Cowork. I was underestimating it.

## What changed

In the last post, you edited someone else's skill files. You took Anthropic's legal plugin, opened the templates, and made them work for your jurisdiction. That's valuable — but it's still working inside someone else's system.

This post is different. You're building from scratch.

Not "building an app." Not writing code. You're creating two text files that turn an ordinary folder into something Claude can work with as a structured workflow. Think of it this way: you're writing the briefing note that sits at the top of a new matter folder — except the reader isn't a colleague. It's Claude.

## What's inside CoDraft v1

The whole project is a single folder with two files:

<!-- 📸 SCREENSHOT: CoDraft v1 folder in Finder/Explorer showing just two files -->

**File 1: `CLAUDE.md`** — the project briefing

This is a markdown file that sits in the root of the folder. When you open the folder in Cowork, Claude reads it automatically at the start of every session. No commands needed. No setup. It just reads it.

Think of it like the first page of a matter folder — the one that tells a new team member: here's what this project is about, here's how we do things, here's what to watch out for. Except this briefing is for Claude, and it reads it every single time, without fail.

CoDraft's `CLAUDE.md` tells Claude:
- What CoDraft is (a document assembly tool)
- What types of documents it works with
- What conventions to follow when generating output
- What the folder structure looks like

**File 2: A skill** — the repeatable procedure

A skill is a markdown file that lives in a `.claude/skills/` subfolder. It defines a specific workflow Claude can run — like a standard operating procedure for a recurring task.

If `CLAUDE.md` is the briefing note, a skill is the checklist. It tells Claude: when someone asks for this, here's exactly how to do it, step by step.

CoDraft v1 has one skill: a slash command that assembles a document from templates and user inputs. When you type the command in Cowork, Claude follows the procedure defined in the skill file.

<!-- 📸 SCREENSHOT: The slash command appearing in Cowork's chat interface -->

That's the entire architecture. A briefing note and a checklist. Two text files that turn a folder into a workflow.

## Why this works: the pattern behind it

You might be wondering: is this pattern legit? Or is it a hack that happens to work?

It's legit. It's actually one of the most well-established patterns in software right now.

Every major AI coding tool — GitHub Copilot, Cursor, Gemini, Claude Code — has adopted the same approach: drop a markdown file into a project folder, and the AI reads it automatically. The file names differ (`CLAUDE.md`, `AGENTS.md`, `copilot-instructions.md`), but the principle is identical. Over 60,000 open source projects already use this pattern.

The reason it's everywhere? It solves a fundamental problem: AI has no memory between sessions. Every conversation starts from zero. A context file in the folder is the fix. It's external memory that loads automatically.

For solo counsels and small teams, this is the important bit: you don't need to learn a new framework or write code. You need to write a good briefing note. If you can write instructions that a new paralegal would understand on their first day, you can write a `CLAUDE.md`.

## Building it yourself: step by step

Let's build a simple version together. You'll create a folder with a `CLAUDE.md` and one skill. By the end, you'll have a working Cowork workflow you can share with anyone on your team.

**Time required:** About 90 minutes.

**What you'll need:**
- Claude Cowork (Pro, Team, or Enterprise subscription)
- A plain text editor (TextEdit on macOS, Notepad on Windows)
- A folder on your computer

### Step 1: Create your project folder

Create a new folder somewhere accessible. I'll call mine `my-first-workflow` — call yours whatever makes sense.

<!-- 📸 SCREENSHOT: Empty folder created in Finder/Explorer -->

Inside this folder, we're going to create two things: a `CLAUDE.md` file and a skill folder.

### Step 2: Write your CLAUDE.md

Create a new file in the folder root called `CLAUDE.md` (all caps, exactly like that — it's case-sensitive).

Open it in your text editor and write your project briefing. Here's the structure:

```markdown
# Project Name

## What this project does
[One or two sentences explaining the purpose]

## How to work in this project
[Conventions, preferences, and rules Claude should follow]

## Folder structure
[What lives where]
```

Here's a concrete example — a simple contract intake workflow:

```markdown
# Contract Intake Workflow

## What this project does
This folder helps process incoming contracts for review. When a new contract arrives, Claude summarises it, flags key dates and obligations, and generates a review checklist.

## How to work in this project
- Always check the contract type first (NDA, service agreement, vendor contract)
- Flag any governing law clause that isn't Singapore law
- Use plain English in summaries — no legalese
- Save all outputs to the /outputs subfolder

## Folder structure
- /contracts — incoming contracts to review
- /outputs — generated summaries and checklists
- /templates — checklist templates by contract type
```

Save the file. That's your briefing note done.

The key is being specific. "Summarise the contract" is vague. "Flag any governing law clause that isn't Singapore law" is specific. Claude follows specific instructions well. Vague ones, less so.

### Step 3: Create your skill

Now for the checklist — the repeatable procedure.

**3.1** Inside your project folder, create this subfolder structure:

```
.claude/skills/review-contract/
```

That's a folder called `.claude`, containing a folder called `skills`, containing a folder called `review-contract`. The folder name becomes your slash command — so this creates `/review-contract`.

<!-- 📸 SCREENSHOT: Folder structure showing .claude/skills/review-contract/ -->

<details>
<summary>Note about hidden folders</summary>

The `.claude` folder starts with a dot, which makes it a hidden folder on macOS. If you can't see it after creating it, press `Cmd + Shift + .` in Finder to show hidden files. On Windows, enable "Show hidden items" in File Explorer's View tab.
</details>

**3.2** Inside the `review-contract` folder, create a file called `SKILL.md`.

**3.3** Open `SKILL.md` and write your procedure:

```markdown
---
name: review-contract
description: Review an incoming contract and generate a summary with checklist
---

# Review Contract

## What to do
When the user provides a contract for review, follow these steps:

1. **Identify the contract type** (NDA, service agreement, vendor contract, employment, other)

2. **Extract key information:**
   - Parties involved
   - Effective date and term
   - Governing law and jurisdiction
   - Key obligations for each party
   - Termination provisions

3. **Flag risks:**
   - Governing law that isn't Singapore law
   - Unusual indemnification clauses
   - Automatic renewal provisions
   - Non-compete or exclusivity clauses
   - Liability caps (or lack thereof)

4. **Generate output:**
   - Save a summary to /outputs/[contract-name]-summary.md
   - Include a review checklist with items marked as ✅ acceptable or ⚠️ needs attention
```

Save the file.

### Step 4: Open it in Cowork

**4.1** Open Claude Cowork. Click `Work in a folder` and navigate to your project folder.

<!-- 📸 SCREENSHOT: Cowork showing the folder connected and CLAUDE.md being loaded -->

**4.2** Cowork reads your `CLAUDE.md` automatically. It now understands your project.

**4.3** You should see your skill available as a slash command. Type `/` and look for `review-contract`.

<!-- 📸 SCREENSHOT: Slash command menu showing the custom /review-contract command -->

**4.4** Drop a contract into the folder (or attach one to the chat) and invoke the command.

<!-- 📸 SCREENSHOT: The output — a contract summary with the review checklist -->

That's it. Two files. A working workflow.

## What you can do from here

The contract intake example is deliberately simple — a starting point, not a finished product. Here are ways to extend it:

**Add more skills.** Each subfolder in `.claude/skills/` becomes a new slash command. You could add `/draft-response` for standard replies, `/extract-dates` for deadline tracking, or `/compare-clauses` for side-by-side analysis.

**Add reference files.** Drop your standard playbooks, clause libraries, or regulatory guides into the folder. Reference them from your `CLAUDE.md` or skill files so Claude knows they're there. This is what CoDraft does — it includes templates that the skill references when assembling documents.

**Share the folder.** This is where the pattern gets powerful for teams. Zip the folder and send it to a colleague. They open it in Cowork, and they get the same workflow — same context, same slash commands, same conventions. No installation, no configuration, no IT support ticket. Just a folder.

**Put it on GitHub.** If you're comfortable with version control, the folder works as a repository. Your team clones it, opens it in Cowork, and everyone's working from the same playbook. Updates propagate when they pull.

## The folder is the program

This is what I missed when I dismissed Cowork as a "poor man's Claude Code."

In Claude Code, you write code that runs. In Cowork, you write instructions that Claude follows. The medium is different — code vs. plain text — but the result is the same: a folder that does something when you open it. A folder that encodes your judgment, your procedures, your way of working.

For solo counsels and small teams, this matters more than you might think. Enterprise legal tech gives you someone else's workflow at $500 to $2,000 a month. A Cowork folder gives you *your own* workflow at the cost of a Claude subscription and 90 minutes of thinking clearly about how you work.

Neither is wrong. But for practitioners who already know their processes and just need a way to scale them, two text files in a folder might be enough.

What workflow would you build first?
