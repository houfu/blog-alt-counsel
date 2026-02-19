---
title: "Two Files, One Workflow. No Code. Just Cowork."
slug: "two-files-one-workflow-no-code-just-cowork"
tags: ["LegalTech", "AI", "OpenSource", "Tutorial"]
status: scheduled
published_at: "2026-02-24T01:29:09.000Z"
ghost_id: 6995e87d7d346400014549a1
featured: false
github_folder: "connect-codraft-article"
---

I'll be honest: I thought Cowork was a poor man's Claude Code. A simplified version for non-coders. You get the comfortable chat interface of Claude or ChatGPT, but now you can install plugins and work on a bunch of documents. I showed in the [last post](https://alt-counsel.com/so-you-want-to-claude-cowork-the-legal-plugin-a-guide/) that you can run Cowork with Anthropic's legal plugin. You get NDA review and canned responses. Useful, but limited.

<!-- Ghost: bookmark card for Part 1 — "So you want to Claude Cowork the Legal Plugin?: A Guide" with caption "Read the previous post to get started on Claude Cowork." -->

Then I built CoDraft.

CoDraft is a contract generator tool I've been working on. The inspiration was [docassemble](https://docassemble.org) — a battle-tested open-source system for guided interviews and document assembly. It's a proper web application with Python, logic blocks, and structured interview flows. I'd used it before and thought: could I get Cowork to do even part of that — find a template, ask some questions, fill it in?

Version 1 is primarily two text files in a folder. That's the whole thing. No Python. No framework. Two text files. But when someone opens that folder in Cowork, they get a working workflow: ask Cowork to prepare an NDA, and it goes searching for an NDA template in your folder, and asks you questions in order to fill it. The best part: I created v1 using Cowork itself. Yes, that "comfortable" chat interface.

I had a mental model from docassemble: interviews, logic blocks, Python, real infrastructure. That's what document assembly requires. I expected to hit a wall somewhere in Cowork. Two text files later, it worked.

I hadn't been wrong about Cowork. The rules had changed, and I hadn't noticed.

In this post, I'll show you how it works — and how you can build your own workflow using nothing but Cowork's chat.

## What's inside CoDraft v1

CoDraft v1 is at its core two files. That's it.

```
codraft/
├── CLAUDE.md                    # Project instructions for Claude
├── .claude/
│   └── skills/
│       └── codraft/
│           └── SKILL.md         # The skill
```

### *`CLAUDE.md`* — the project instructions

This is a markdown file that sits in the root of the folder. When you open a folder in Cowork, it checks for a `CLAUDE.md` in the root and loads its contents into Claude's context before your first message. You don't configure this. You don't trigger it. You just open the folder, and Claude is already briefed.

Think of it like the first page of a matter folder — the one that tells a new team member: here's what this project is about, here's how we do things, here's what to watch out for. Except this briefing is for Claude, and it reads it every single time, without fail.

You can read it yourself. It's in English.

### *A skill* — the repeatable procedure

A skill is a markdown file that lives in a `.claude/skills/` subfolder. It defines a specific workflow Claude can run — like a standard operating procedure for a recurring task.

If `CLAUDE.md` is the briefing note, a skill is the checklist. It tells Claude: when someone asks for this, here's exactly how to do it, step by step.

That's the entire architecture. A briefing note and a checklist. Two text files that turn a folder into a workflow.

### *The difference between project instructions and a skill*

If they are all text files and meant to be read by Claude Cowork, what's the point in separating them and keeping the skill in a strange place like under a `.claude` folder?

It comes down to when they're read. Project instructions (`CLAUDE.md`) are always read — every session, automatically. Skills are only read when they're requested. You might only need to review a contract when someone asks to review one, so the skill should only be loaded then. But details like where your company is based or instructions not to give legal advice — those apply all the time. They belong in your project instructions.

## The folder is the program

This is what I missed when I dismissed Cowork as a "poor man's Claude Code."

In Claude Code, you write code that runs. A proper software project needs infrastructure around it: configuration files, directories for organising code, systems for tracking every change. That's unavoidable overhead when you're actually building software. Claude Code reads `CLAUDE.md` to understand your project, so it can act as your coding assistant in that environment.

However, if you think about it, none of the above is essential for Claude to be useful. What you really need is a way to tell Claude what to do and for Claude to remember how to do it. That's essentially your folder.

I called it a poor man's Claude Code. That was wrong. It's a stripped-down model. Claude Code for people who don't need to build software — just direct it. Claude Cowork is Zen.

<!-- Ghost: signup card -->

## Building it yourself: step by step

Let's create a legal chatbot that summarises contracts and does a preliminary flag of certain risks before legal review. You'll create a folder with a `CLAUDE.md` and one skill. By the end, you'll have a working Cowork workflow you can share with anyone on your team.

*Time required:* About 30 minutes (budget more if you want to iterate on the instructions).

*What you'll need:*
- Claude Cowork (Pro, Team, or Enterprise subscription)
- A folder on your computer

<!--members-only-->

### Step 1: Create your project folder

Create a new folder somewhere accessible. I'll call mine `my-first-chatbot` — call yours whatever makes sense. Now open the folder in Claude Cowork. If prompted, allow Cowork to make changes to this folder — this permission is required for any file writing to work. This time, we won't leave this interface to prepare our folder.

### Step 2: Write your Project Instructions (CLAUDE.md)

Here's what I typed:

```
I need help to create project instructions for this folder. I work in house and people send me contracts, so I am going to review them. If I ask to review a contract, you should activate a skill called "contract review". I will write that skill next.
```

![Claude Cowork processes our initial prompt.](https://www.alt-counsel.com/content/images/2026/02/cowork_process_our_initial_prompt.png)

Claude set it up as a contract review workspace with a trigger: any phrase like "review this contract" or "analyze this NDA" activates the contract-review skill automatically. It also added confidentiality rules (don't compare contents across files) and instructions for reading uploaded PDFs and Word docs. More than I'd have written from scratch. Remember this is GenAI, so your version may differ from mine in slight and significant ways. Check out the instructions and make sure it follows your intent.

For example, I wanted Claude to tell users that it does not give legal advice, and that it should refer to legal for such tasks. (This folder is going to be shared with others, so it's good to remind others that this doesn't replace legal review.) You could ask Claude nicely again to input this instruction, but it's probably faster for me to do this myself.

Because project instructions are very important, you can access the file and edit it directly from Cowork's interface. Click on the file in the right sidebar and add that instruction as a new bullet point under General Behaviour. Then save it.

![The location of the shortcut to edit your project instructions is highlighted.](https://www.alt-counsel.com/content/images/2026/02/location_of_claudemd_in_cowork_interface.png)

For solo counsels without coding experience, this is the revelation: you're not writing code. You're writing a briefing note that Claude can understand. The same skill you use to onboard a paralegal works here.

### Step 3: Create your skill

Claude will have created a placeholder skill file — if not, ask it to. Now flesh it out. Think in steps, describe what you want from the output, and give it success criteria. Imagine briefing a junior. Here's what I used:

```
Now let's work on the contract-review skill. You will be provided a contract by a user, and your task is to act like a lawyer. Be detailed and careful when reading the contract. I need you to produce a checklist of important points in the contract to ease the review of a lawyer in the legal department. This will be a table with the following headers: "S/N", "Issue", "Description" and "Possible Action". Some of the points I will be interested in are clauses which impose unlimited, significant liabilities on the company, the governing law, the jurisdiction and any non-solicitation and anti-competition clauses. If necessary ask the user further questions to clarify the background so that you can perform a thorough review. As this report will be read by a lawyer, you can be comprehensive and risk adverse as possible.
```

Claude gets to work once you enter the prompt. It will read the existing files and edit it. Once it is done, you will be able to read the file it created.

Claude produced a detailed 5-step skill: gather background context from the user, read the contract in full, review it against 19 categories (including liability, governing law, IP, and non-solicitation), produce a contract summary and issues table, and save the output as a Word doc. The full file is in the GitHub repo. That's the complete skill.

<!-- Ghost: toggle card — "A note on file paths"
You may notice lines in the skill that reference paths like /sessions/jolly-exciting-bardeen/mnt/.... These are session-specific — Cowork generates them for each conversation, and they will look different on your machine. If you copy this skill and it fails to read PDFs or Word documents, just ask Claude: "What is the path to the pdf skill in this session?" It will find and correct the paths for you.
-->

<!-- Ghost: toggle card — "Verify the file location"
After Claude creates the skill, ask it to confirm where it saved the file. In Cowork, only files inside your workspace folder persist between sessions — if the skill ends up one level above your workspace, it won't be there next time you open the folder. If Claude saved it to the wrong location, ask it to move the file into your workspace folder. Easy enough to catch, easy enough to fix.
-->

### Step 4: Test it with a real contract

Before you upload anything, a word on data. When you use Cowork, your files are processed by Anthropic's systems. Check [Anthropic's usage policy](https://www.anthropic.com/policies/usage-policy) for how your data is handled, and check with your organisation's AI usage policy before uploading confidential or client documents. For this tutorial, consider using a publicly available template or a non-sensitive document.

Let's put our new folder to the work. Start a new session (or a "New Task") in that folder. Then upload a contract and ask Claude Cowork to "review this". I will be using the [VIMA Model NDA](https://www.svca.org.sg/model-legal-documents) which we used in the first post.

Once the task starts, watch what happens. Claude Cowork reads your new skill file. Then, because of Step 1 in the skill, it asks clarifying questions about the contract context before diving in. (A point for improvement: questions about your company can be saved in the project instructions so you don't have to repeat them every time.)

![Cowork reads our new skill and asks some questions.](https://www.alt-counsel.com/content/images/2026/02/Cowork_reads_the_skill_file.png)

Now it engages in a conversation with the user to complete the task, including using Claude's DOCX skill to read the NDA. In my session, it located 15 issues, including some "unfilled" and choices that have to be made as required by the template. Here's a sample of what the output looked like:

| S/N | Issue | Description | Possible Action |
|-----|-------|-------------|-----------------|
| 2 | No Post-Termination Survival of Confidentiality Obligations | The NDA terminates on the earlier of completion of the Proposed Transaction or expiry of the term. There is no survival clause. Once the NDA terminates, the confidentiality obligations arguably fall away. | Negotiate insertion of a survival clause: "Clauses 2, 3, 4, 5, 6 and 9 shall survive the termination of this Agreement for a period of [3–5] years." |
| 5 | No Data Protection / PDPA Provisions | The NDA contains no data protection clause. Due diligence materials are likely to include personal data. Both parties are subject to the PDPA. | Request insertion of a PDPA-compliant data protection clause addressing obligations to handle personal data in accordance with PDPA and data breach notification obligations. |
| 10 | Non-Solicitation: One-Sided, Open Duration, Broad Scope | The non-solicitation clause restricts only the Receiving Party. Duration is blank. The restriction covers all employees, officers and directors of the Disclosing Party. | Negotiate a reasonable duration (6–12 months), mutuality, and limitation to senior employees rather than all staff. |

Because we instructed in the skill for the result to be saved as a word document, it saved the full review in the folder. Now AI has reviewed a document and given you a summary, which will save the legal department some time identifying the issues.

![The results of the NDA review presented by our new folder.](https://www.alt-counsel.com/content/images/2026/02/results_cowork.png)

That's it. Two files. A working workflow. No contract management system. No document automation platform. Two text files and 30 minutes of your time.

## What you can do from here

The contract review summary example is deliberately simple — a starting point, not a finished product. Here are ways to extend it:

- *Add more skills.* Each subfolder in `.claude/skills/` becomes a new slash command. You could add `/draft-response` for standard replies, `/extract-dates` for deadline tracking, or `/compare-clauses` for side-by-side analysis.
- *Add reference files.* Drop your standard playbooks, clause libraries, or regulatory guides into the folder. Reference them from your `CLAUDE.md` or skill files so Claude knows they're there. This is what CoDraft does — it includes templates that the skill references when assembling documents.

Enterprise contract management systems exist for a reason. Large teams with complex approval workflows, DMS (Document Management System) integrations, and compliance requirements need purpose-built tools. Two text files in a folder won't replace that. Neither approach is wrong — it depends on what you're building and what you'll actually use.

What workflow would you automate first? A contract review checklist? A standard response library? A playbook for recurring tasks? For resource-constrained practitioners, two text files might be enough to get started.
