---
title: "Turn a Project Folder into a Cowork Workflow"
slug: "turn-a-project-folder-into-a-cowork-workflow"
tags: ["LegalTech", "AI", "OpenSource", "Tutorial"]
status: draft
featured: false
github_folder: "connect-codraft-article"
---

I'll be honest: I thought Cowork was a poor man's Claude Code. A simplified version for non-coders. You get the comfortable chat interface of Claude or ChatGPT, but now you can install plugins and work on a bunch of documents. I showed in the [last post](https://alt-counsel.com/so-you-want-to-claude-cowork-the-legal-plugin-a-guide/) that you can run Cowork with Anthropic's legal plugin. You get NDA review and canned responses. Useful, but limited.

Then I built CoDraft.

CoDraft is a contract generator tool I've been working on. The inspiration was docassemble — an open-source tool for building automated legal documents. It's a proper coding framework where you write Python to build document assembly interviews. I'd used it before and thought: could I recreate that algorithm in Cowork? Template discovery, field interviews, document rendering — the whole pipeline?

Version 1 is primarily two text files in a folder. That's the whole thing. No Python. No framework. Two text files. But when someone opens that folder in Cowork, they get a working workflow: ask Cowork to prepare an NDA, and it goes searching for an NDA template in your folder, and asks you questions in order to fill it. The best part: I created v1 using Cowork itself. Yes, that "comfortable" chat interface.

The fact that it worked at all changed how I saw Cowork. I was trying to replicate an algorithm that needed a real coding framework, and two text files got me there. That's when I stopped thinking of Cowork as Claude Code for non-coders and started seeing what it actually was.

In this post, I'll tell you about how two text files in a bunch of folders created a complete workflow.

## What changed

In the last post, we used someone else's skill files. You took Anthropic's legal plugin, opened the templates, and made them work for your jurisdiction. That's valuable — but it's still working inside someone else's system.

This post is different. You're building from scratch.

I can hear gasps at the end of the room. Am I going to be coding? Do I need to learn how to Python or how to LLM?

No. Plausibly you may need to learn how to write in markdown, but if you understand the concept of headings, paragraphs and lists, you're halfway there. Essentially this is all text. You are writing instructions and guides for Claude Cowork. Unlike "real" programming, Claude Cowork is a very understanding and tolerant reader. So let go of your fears and get writing. 

And if you're still not willing, you can do what I did. Ask Claude to write it for you. 


## What's inside CoDraft v1

Substantively, the whole project is a single folder with two markdown files:

```
codraft/
├── CLAUDE.md                    # Project instructions for Claude
├── .claude/
│   └── skills/
│       └── codraft/
│           └── SKILL.md         # The skill
```

**File 1: `CLAUDE.md`** — the project instructions

This is a markdown file that sits in the root of the folder. When you open the folder in Cowork, Claude reads it automatically at the start of every session. No commands needed. No setup. It just reads it.

Think of it like the first page of a matter folder — the one that tells a new team member: here's what this project is about, here's how we do things, here's what to watch out for. Except this briefing is for Claude, and it reads it every single time, without fail. 

CoDraft's `CLAUDE.md` tells Claude:
- What CoDraft is (a document assembly tool)
- What types of documents it works with
- What conventions to follow when generating output
- What the folder structure looks like

You can read it yourself. It's in English.

**File 2: A skill** — the repeatable procedure

A skill is a markdown file that lives in a `.claude/skills/` subfolder. It defines a specific workflow Claude can run — like a standard operating procedure for a recurring task.

If `CLAUDE.md` is the briefing note, a skill is the checklist. It tells Claude: when someone asks for this, here's exactly how to do it, step by step.

For multiple steps, I tell Claude Cowork to work in phases and provided more details in each phase. For example:
- In the template discovery phase, I tell Cowork where to find the templates.
- In Interview Plan phase, I tell Cowork how to phrase a question for each field. ("Don't just say "What is the [label]?" — be conversational")
- In Confirmation phase, I tell Cowork to confirm all the values of the fields before rendering the document.
- In Validate Rendered Document phase, I tell Cowork to check its work and the success or failure criteria ("Do NOT deliver a document with unfilled placeholders.")

That's the entire architecture. A briefing note and a checklist. Two text files that turn a folder into a workflow.

**The difference between project instructions and a skill**

If they are all text files and meant to be read by Claude Cowork, what's the point in separating them and keeping the skill in a strange place like under a `.claude` folder?

It comes down to when they're read. Project instructions (`CLAUDE.md`) are always read — every session, automatically. Skills are only read when they're requested. You might only need to review a contract when someone asks to review one, so the skill should only be loaded then. But details like where your company is based or instructions not to give legal advice — those apply all the time. They belong in your project instructions.

**How skills get discovered.** When you open a folder in Cowork, it scans the `.claude/skills/` directory. Each subfolder it finds becomes a slash command you can invoke. The subfolder name determines the command name — so a skill inside `.claude/skills/contract-review/` becomes the `/contract-review` command. That's the entire discovery mechanism. Put a skill file in the right folder, and Cowork knows it exists. No registration. No configuration file. Just the folder structure.

This separation becomes more important as your project grows. You want Claude Cowork to only load the information it needs for the task at hand, and leave enough space in its context to generate a good result.

## Why this works: the pattern behind it

You might be wondering: is this pattern legit? Or is it a hack that happens to work?

It's legit. It's actually one of the most well-established patterns in software right now.

Every major AI coding tool — GitHub Copilot, Cursor, Gemini, Claude Code — has adopted the same approach: drop a markdown file into a project folder, and the AI reads it automatically. The file names differ, but the principle is identical. Tens of thousands of software projects already use this pattern.

The reason it's everywhere? It solves a fundamental problem: AI has no memory between sessions. Every conversation starts from zero.

A context file in the folder is the fix. It's external memory that loads automatically.

For solo counsels and small teams, this is the important bit: you don't need to learn a new framework or write code. You need to write a good briefing note. If you can write instructions that a new paralegal would understand on their first day, you can write a `CLAUDE.md`.

## The folder is the program

This is what I missed when I dismissed Cowork as a "poor man's Claude Code."

In Claude Code, you write code that runs. There are several things that are essential for such a project. For example, if you wrote in Typescript, there will usually be a `package.json` file. You will, depending on your coding style, have a `src` directory where you keep your source code. Then you will also have a version control system (usually git) to track changes and progress. Claude Code understands your project structure and details through `CLAUDE.md`, so you can have a coding assistant.

However, if you think about it, none of the above is essential for Claude to be useful. What you really need is a way to tell Claude what to do and for Claude to remember how to do it. That's essentially your folder.

I called it a poor man's Claude Code. That was wrong. It's a stripped-down model. Claude Code for people who don't need to build software — just direct it. Claude Cowork is Zen.

Once you start going down this line, many interesting scenarios become possible. The one that gnaws at me currently is that in order to share your Cowork setup with others, you don't need to ask them to install a plugin or check their systems. Like passing your friends a floppy disk containing a PC game, you will zip up your folder and send it to them. Once they unzip the folder, all they just need to do is to point Cowork at it to start using it. Neato, right?

However, for most people, the best way to use Cowork is to start small and build it up. You will learn more as models change, and adjust Claude's instructions as you move along. For solo counsel and small legal teams, this allows you to tap into the powers of AI using a generally available tool. And for practitioners who already know their processes and just need a way to scale them, two text files in a folder might be enough.

What workflow would you build first?

Let me show you how. In the next section, we'll build one together — a contract review assistant that flags risks before legal review. If you can follow a recipe, you can do this.

## Building it yourself: step by step

Let's create a legal chatbot that summarises contracts and does a preliminary flag of certain risks before legal review. You'll create a folder with a `CLAUDE.md` and one skill. By the end, you'll have a working Cowork workflow you can share with anyone on your team.

**Time required:** About 30 minutes.

**What you'll need:**
- Claude Cowork (Pro, Team, or Enterprise subscription)
- A folder on your computer

### Step 1: Create your project folder

Create a new folder somewhere accessible. I'll call mine `my-first-chatbot` — call yours whatever makes sense. Now open the folder in Claude Cowork. If it pops out, allow Cowork to make changes to this folder. (Duh!) This time, we won't leave this interface in order to prepare our folder. 

<!-- 📸 SCREENSHOT: Starting screen for cowork on our folder -->


### Step 2: Write your Project Instructions (CLAUDE.md)

We will employ a fairly advanced prompting technique in order to get Claude Cowork to create our project instructions or `CLAUDE.md` file -- asking Claude nicely. The things you learnt from your prompt engineering class will be helpful here. Be specific, roleplay, cover all your bases etc. But don't worry, Claude is a very obliging and patient assistant. If you miss out something. just ask Claude nicely again.  

Here's the one I plan to use just to write the project instructions. 
```
I need help to create project instructions for this folder. I work in house and people send me contracts, so I am going to review them. If I ask to review a contract, you should activate a skill called "contract review". I will write that skill next.
```

<!-- 📸 SCREENSHOT: Cowork processes our initial prompt. -->

Remember, you have control over the pace, so if you want to write that skill now, you can tell Claude more about it in this step if you wanted. However, for the purpose of this tutorial, let's separate it for ease of explanation.

This the project instruction that Claude gave me at the end of that prompt.

```markdown
 Project Instructions: Contract Review Workspace

## About This Folder
This is an in-house legal/contracts workspace. Contracts are received from external parties and reviewed here.

## Skills to Use

### Contract Review
**Trigger:** Whenever the user asks to review a contract, analyze a contract, check a contract, or anything similar involving reviewing a document for legal/contractual purposes — activate the **`contract-review`** skill by reading `.claude/skills/contract-review/SKILL.md` and following its instructions exactly before doing anything else.

Examples of trigger phrases:
- "Review this contract"
- "Can you look at this agreement?"
- "Check this contract for issues"
- "Analyze this NDA / MSA / SOW"
- "What does this contract say about X?"

## General Behavior
- Contracts may be uploaded as PDFs, Word documents (.docx), or plain text. Use the appropriate skill (pdf, docx) to read the file if needed.
- Always follow the contract-review skill instructions — do not skip steps or summarize prematurely.
- Maintain confidentiality: do not reference or compare contract contents across different files unless explicitly asked.
```

Pretty neat! Claude definitely wrote more words than I usually would for a simple task, which is good because it will help in future sessions, including when you want to expand on the capabilities of this folder. Remember this is GenAI, so your version may differ from mine in slight and significant ways. Check out the instructions and make sure it follows your intent. 

For example, I do notice that it did not say that it should not give legal advice, and that it should refer to legal for such tasks. (This folder is going to be shared with others, so it's good to remind others that this doesn't replace legal review.) You could ask Claude nicely again to input this instruction, but it's probably faster for me to do this myself.

Because project instructions are very important, you can access the file and edit it directly from Cowork's interface. Click on the file in the right sidebar and add that instruction as a new bullet point under General Behaviour. Then save it.

For solo counsels without coding experience, this is the revelation: you're not writing code. You're writing a briefing note that Claude can understand. The same skill you use to onboard a paralegal works here.

<!-- 📸 SCREENSHOT:  Location of CLAUDE.md file in Cowork interface for editing. -->

### Step 3: Create your skill

Now for the checklist — the repeatable procedure. In my session, Claude created a placeholder for the skill. If Claude didn't you can ask it nicely again. As Claude understands its own structure, it is able to create the folder structure itself and create a file that fits the conventions of a skill file that Claude expects. Better leave these things to the experts. 

Now this is where you the expert come in. The skill needs fleshing it out. Thinking in steps or phases, detailing what you want from the end product and providing success criteria and error points all help. If it helps, imagine you are describing the task to a junior. Here's the prompt I plan to use. Because this is going to be a skill, it will look more detailed than our previous prompt.

```
Now let's work on the contract-review skill. You will be provided a contract by a user, and your task is to act like a lawyer. Be detailed and careful when reading the contract. I need you to produce a checklist of important points in the contract to ease the review of a lawyer in the legal department. This will be a table with the following headers: "S/N", "Issue", "Description" and "Possible Action". Some of the points I will be interested in are clauses which impose unlimited, significant liabilities on the company, the governing law, the jurisdiction and any non-solicitation and anti-competition clauses. If necessary ask the user further questions to clarify the background so that you can perform a thorough review. As this report will be read by a lawyer, you can be comprehensive and risk adverse as possible. 
```

Claude gets to work once you enter the prompt. It will read the existing files and edit it. Once it is done, you will be able to read the file it created. This is what I got:

```
---
name: contract-review
description: "Review contracts sent to in-house counsel — identify key terms, risks, and issues."
---

You are acting as a highly experienced commercial lawyer performing an in-house contract review. Your task is to produce a risk-focused, lawyer-grade analysis of a contract provided by the user. Be thorough, cautious, and comprehensive — this output will be used by the Legal department to facilitate their review.

---

## STEP 1 — Gather Background Context

Before reading the contract, ask the user the following clarifying questions **in a single message** (do not ask them one by one). Explain that the answers will allow you to tailor the review to the company's actual risk exposure.

Questions to ask:
1. **Party role**: Is the company signing as the service provider/vendor, or as the customer/recipient of services?
2. **Contract type**: What type of agreement is this (e.g., MSA, SaaS subscription, NDA, employment, SOW, supply agreement, joint venture)?
3. **Counterparty**: Who is the other party — a supplier, customer, partner, or employee? Is it a large/sophisticated counterparty or a smaller party?
4. **Jurisdiction sensitivity**: Is the company based in a specific jurisdiction, or does it have particular concerns about governing law?
5. **Key commercial context**: Are there any specific clauses or areas the user is already concerned about, or any unusual features of the deal they want flagged?
6. **Value/duration**: What is the approximate contract value and term? (This helps calibrate the risk threshold.)

Wait for the user's response before proceeding. If the user says to proceed without answering, note the missing context and continue on best-effort assumptions, flagging where the missing information affects the analysis.

---

## STEP 2 — Read the Contract

Identify the file format of the uploaded contract and use the appropriate method to extract its full text:

- **PDF**: Invoke the `pdf` skill — read `/sessions/jolly-exciting-bardeen/mnt/.skills/skills/pdf/SKILL.md` and use the extraction method described there.
- **Word (.docx)**: Invoke the `docx` skill — read `/sessions/jolly-exciting-bardeen/mnt/.skills/skills/docx/SKILL.md` and use the extraction method described there.
- **Plain text / pasted content**: Read directly from the conversation.

Read the **entire** contract before beginning your analysis. Do not skim. Pay attention to defined terms — many risk-bearing clauses depend on how key terms like "Losses", "Claim", "Confidential Information", and "Intellectual Property" are defined.

---

## STEP 3 — Systematic Contract Review

Review the contract against each of the categories below. For every issue, risk, or notable point identified, you will record it in the output table (Step 4). Be risk-averse: if something *could* be interpreted against the company's interest, flag it. Err on the side of inclusion.

### 3.1 Parties & Execution
- Are all parties correctly and fully identified (legal name, registration number, address)?
- Is the signatory block complete and does it match the stated parties?
- Are there guarantors, parent companies, or subsidiaries named?
- Is the contract properly dated?

### 3.2 Definitions
- Are key defined terms clearly and narrowly defined?
- Do any definitions create unexpectedly broad scope (e.g., a broad definition of "Affiliate", "Claim", or "Losses")?
- Are there undefined terms that could be interpreted against the company?

### 3.3 Liability — PRIORITY AREA
- Is there any **unlimited liability** imposed on the company? Flag this prominently.
- What is the liability cap, if any? Is it proportionate to the contract value?
- Are consequential, indirect, or special damages excluded — and in whose favour?
- Does any indemnification clause impose liability **without a cap** or without a fault requirement?
- Are there carve-outs to the liability cap (e.g., fraud, death/personal injury, data breach, IP infringement)? Are these carve-outs symmetrical between the parties?
- Does the company bear disproportionate liability compared to the counterparty?

### 3.4 Indemnification
- Who indemnifies whom, and for what?
- Is the scope of the indemnity broad (e.g., covering third-party claims broadly) or narrow and specific?
- Are there notice and cooperation requirements attached to the indemnity?
- Does the indemnity override the liability cap?

### 3.5 Governing Law — PRIORITY AREA
- What law governs the contract?
- Is the governing law favourable or unfamiliar to the company? Flag any unusual or foreign governing law.
- Does the governing law differ from where the parties are located?

### 3.6 Jurisdiction & Dispute Resolution — PRIORITY AREA
- Where must disputes be resolved (courts or arbitration)?
- If arbitration: what is the seat, the rules, and the number of arbitrators? Could the costs be disproportionate?
- Is the jurisdiction exclusive or non-exclusive?
- Is there a mandatory mediation or escalation step before litigation/arbitration?
- Is the choice of forum inconvenient or costly for the company?

### 3.7 Non-Solicitation — PRIORITY AREA
- Is there a non-solicitation clause restricting the company from approaching the counterparty's employees, customers, or suppliers?
- What is the duration and geographic scope of the restriction?
- Is the restriction mutual or one-sided?
- Could the restriction hamper the company's ordinary hiring or business development activities?

### 3.8 Anti-Competition / Non-Compete — PRIORITY AREA
- Is there a non-compete or exclusivity obligation on the company?
- What is the scope of restricted activity, duration, and geographic reach?
- Is it proportionate and reasonably necessary for a legitimate business interest?
- Could it prevent the company from working with other clients or in related markets?
- Is the restriction mutual?

### 3.9 Intellectual Property
- Who owns IP created under or in connection with this contract?
- Are there any broad IP assignments from the company to the counterparty?
- What licences are granted, and what are their scope, duration, exclusivity, and sub-licensing rights?
- Does the company retain ownership of its pre-existing IP ("Background IP")?
- Are there any IP-related representations or warranties the company must give?

### 3.10 Confidentiality
- What is the scope of "Confidential Information"? Is it too broadly defined?
- How long do confidentiality obligations last? Are post-termination obligations unreasonably long?
- Are there adequate carve-outs for information that is public, independently developed, or required to be disclosed by law?
- Are the obligations mutual?
- Are there obligations to return or destroy confidential information on termination?

### 3.11 Payment & Financial Terms
- What are the payment terms (amount, due date, invoicing process)?
- What interest or penalties apply for late payment — and are they symmetrical?
- Are there price escalation or indexation clauses?
- Are there disputed invoice procedures?
- Are there any set-off or withholding rights?

### 3.12 Term & Renewal
- What is the initial term of the agreement?
- Are there automatic renewal provisions? What notice period is required to prevent auto-renewal?
- Is the notice period for termination/non-renewal sufficiently long to allow the company to make alternative arrangements?

### 3.13 Termination
- On what grounds can each party terminate (for cause, for convenience, or both)?
- What is the notice period for termination for convenience?
- Are termination for cause triggers broad or vague (e.g., "material breach" without cure period)?
- Is there a cure period before termination for breach?
- Are there disproportionate exit fees or break costs on termination?
- What are the consequences of termination (data return, handover, ongoing obligations, survival of clauses)?

### 3.14 Data Protection & Privacy
- Does the contract address data protection obligations?
- If the company will process personal data on behalf of the counterparty (or vice versa), are data processing terms included and compliant with applicable law (e.g., GDPR, PDPA)?
- Are there data breach notification obligations?
- Are there data security obligations and are they proportionate?

### 3.15 Representations & Warranties
- What representations and warranties does the company give? Are any unduly broad or unqualified?
- Are the representations mutual?
- How long do they survive termination or completion?
- Are there any representations about future performance that could create risk?

### 3.16 Force Majeure
- What events qualify as force majeure?
- Is the definition appropriately broad (or narrow)?
- Are there notice requirements? What happens if a force majeure event is prolonged — can either party terminate?

### 3.17 Assignment & Change of Control
- Can the counterparty assign the contract without the company's consent?
- Does a change of control of either party trigger assignment or termination rights?
- Could a counterparty assignment result in the company being bound to an undesirable third party?

### 3.18 Notices
- Are the notice provisions adequate (correct addresses, email validity, deemed receipt periods)?
- Are there critical obligations tied to notice that could be missed?

### 3.19 Boilerplate & Missing Provisions
- Is there an entire agreement / integration clause?
- Is there a severability clause?
- Is there a waiver clause (no waiver by conduct)?
- Are amendments required to be in writing?
- Are there any clauses that appear **missing** that would ordinarily be expected in this type of contract (e.g., no limitation of liability clause, no data protection provisions in a data-heavy contract)?

---

## STEP 4 — Produce the Output

Produce two deliverables:

### A. Brief Contract Summary (prose)
Write 2–3 short paragraphs summarising:
- What the contract is, who the parties are, and the key commercial terms (value, term, subject matter).
- The overall risk profile (e.g., low / medium / high risk) and the most significant concerns.

### B. Issues Table
Produce a detailed table with the following columns. Every issue, risk, notable clause, and missing provision identified in Step 3 must appear as a row. Aim for completeness — do not filter out minor points; let the lawyer decide what is material.

| S/N | Issue | Description | Possible Action |
|-----|-------|-------------|-----------------|

Column guidance:
- **S/N**: Sequential number.
- **Issue**: Short label for the clause or concern (e.g., "Uncapped Liability", "Governing Law — Foreign Jurisdiction", "Auto-Renewal Trap", "Missing Data Processing Agreement").
- **Description**: A clear, precise description of the clause as written and why it is noteworthy or risky. Quote the relevant clause or defined term directly where helpful. Reference the clause/section number.
- **Possible Action**: A concrete suggested course of action (e.g., "Negotiate a mutual liability cap tied to 12 months' fees", "Request deletion of non-solicitation clause or limit to 6 months", "Add a cure period of 30 days before termination for breach is effective").

### C. Save the Output as a Word Document
After presenting the summary and table in chat, save the full output (summary + table) as a `.docx` file using the `docx` skill. Save it to the workspace folder (`/sessions/jolly-exciting-bardeen/mnt/my-first-chatbot/`) with a filename based on the contract name or type and today's date (e.g., `MSA_Review_2025-06-01.docx`). Provide the user with a link to open it.

---

## STEP 5 — Closing Note

After delivering the output, always add the following reminder:

> **Note:** This review is a preliminary analysis prepared to assist the Legal department. It does not constitute legal advice. Please consult a qualified lawyer in the Legal department before taking any action in reliance on this review.
```

You will notice that even though there was hardly any structure in my prompt, Claude managed to write up a 5 step process for our contract review.

**Verify the file location.** After Claude creates the skill, ask it to confirm where it saved the file. In Cowork, only files inside your workspace folder persist between sessions — if the skill ends up one level above your workspace, it won't be there next time you open the folder. If Claude saved it to the wrong location, ask it to move the file into your workspace folder. Easy enough to catch, easy enough to fix.

### Step 4: Test it with a real contract

Before you upload anything, a word on data. When you use Cowork, your files are processed by Anthropic's systems. Check [Anthropic's usage policy](https://www.anthropic.com/policies/usage-policy) for how your data is handled, and check with your organisation's AI usage policy before uploading confidential or client documents. For this tutorial, consider using a publicly available template or a non-sensitive document.

Let's put our new folder to the work. Start a new session (or a "New Task") in that folder.

Then upload a contract and ask Claude Cowork to "review this". I will be using the VIMA Model NDA we referred to in my first exercise. 

Once the task starts, watch what happens. Claude Cowork reads your new skill file. Then, because of Step 1 in the skill, it asks clarifying questions about the contract context before diving in. (A point for improvement: questions about your company can be saved in the project instructions so you don't have to repeat them every time.)
 
 <!-- 📸 SCREENSHOT:  Cowork reads the skill file and asks some question. -->
 
 Now it engages in a conversation with the user to complete the task, including using Claude's DOCX skill to read the NDA. In my session, it located 15 issues, including some "unfilled" and choices that have to be made as required by the template. Here's a sample of what the output looked like:

| S/N | Issue | Description | Possible Action |
|-----|-------|-------------|-----------------|
| 2 | No Post-Termination Survival of Confidentiality Obligations | The NDA terminates on the earlier of completion of the Proposed Transaction or expiry of the term. There is no survival clause. Once the NDA terminates, the confidentiality obligations arguably fall away. | Negotiate insertion of a survival clause: "Clauses 2, 3, 4, 5, 6 and 9 shall survive the termination of this Agreement for a period of [3–5] years." |
| 5 | No Data Protection / PDPA Provisions | The NDA contains no data protection clause. Due diligence materials are likely to include personal data. Both parties are subject to the PDPA. | Request insertion of a PDPA-compliant data protection clause addressing obligations to handle personal data in accordance with PDPA and data breach notification obligations. |
| 10 | Non-Solicitation: One-Sided, Open Duration, Broad Scope | The non-solicitation clause restricts only the Receiving Party. Duration is blank. The restriction covers all employees, officers and directors of the Disclosing Party. | Negotiate a reasonable duration (6–12 months), mutuality, and limitation to senior employees rather than all staff. |

Because we instructed in the skill for the result to be saved as a word document, it saved the full review in the folder. Now AI has reviewed a document and given you a summary, which will save the legal department some time identifying the issues.
 
 <!-- 📸 SCREENSHOT:  Results of Cowork using the skill. -->

That's it. Two files. A working workflow. No contract management system. No document automation platform. Two text files and 30 minutes of your time.

## What you can do from here

The contract review summary example is deliberately simple — a starting point, not a finished product. Here are ways to extend it:

**Add more skills.** Each subfolder in `.claude/skills/` becomes a new slash command. You could add `/draft-response` for standard replies, `/extract-dates` for deadline tracking, or `/compare-clauses` for side-by-side analysis.

**Add reference files.** Drop your standard playbooks, clause libraries, or regulatory guides into the folder. Reference them from your `CLAUDE.md` or skill files so Claude knows they're there. This is what CoDraft does — it includes templates that the skill references when assembling documents.

**Share the folder.** This is where the pattern gets powerful for teams. Zip the folder and send it to a colleague. They open it in Cowork, and they get the same workflow — same context, same slash commands, same conventions. No installation, no configuration, no IT support ticket. Just a folder.

**Put it on GitHub.** If you're comfortable with version control, the folder works as a repository. Your team clones it, opens it in Cowork, and everyone's working from the same playbook. Updates propagate when they pull.

More importantly, we let Claude write most of the instructions here, but you will have your own opinions on what should be done based on how you work. Should Claude spend more time on review? Are some issues more important than others? Should Claude give the user instructions on what to do next? Go ahead and make it your own. Spending some time practising and learning how to use Cowork will help you get better results with AI.

What workflow would you automate first? A contract review checklist? A standard response library? A playbook for recurring tasks? For resource-constrained practitioners, two text files might be enough to get started.
