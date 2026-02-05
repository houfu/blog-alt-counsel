---
title: "Making Claude's Legal Plugin Actually Yours"
slug: "claude-legal-plugin-guide"
tags: ["LegalTech", "OpenSource", "PDPA", "Tutorial"]
status: draft
featured: false
github_folder: "legal-plugin-guide"
---

This guide walks you through installing Claude Cowork, setting up the legal plugin, and creating your first custom template. By the end, you'll have a working PDPA-specific response template and understand how to build more.

**Time required:** 30-45 minutes for setup; 20 minutes per custom template

**What you'll need:**
- A computer running macOS or Windows
- A Claude Pro, Team, or Enterprise subscription
- A text editor (VS Code, Notepad, TextEdit—anything works)

## What is Claude Cowork?

Claude Cowork is Anthropic's desktop application for running AI-powered workflows. Think of it as Claude with superpowers: it can read files on your computer, execute multi-step tasks, and work with specialized plugins.

If you've heard of Claude Code (the terminal-based coding tool), Cowork is its friendlier sibling—designed for knowledge workers who want AI assistance without writing code.

[SCREENSHOT: Claude Cowork main interface showing Chat, Code, and Cowork tabs]

## What are Plugins?

Plugins are pre-built skill packages that teach Claude how to do specific jobs. Anthropic released 11 open-source plugins covering areas like sales, marketing, finance, and—most relevant to us—legal work.

Each plugin includes:
- **Commands**: Actions you trigger explicitly (like `/review-contract`)
- **Skills**: Knowledge Claude draws on automatically when relevant
- **Connectors**: Integrations with tools like Slack, Box, or Microsoft 365

The legal plugin specifically includes commands for contract review, NDA triage, legal briefings, and templated responses.

## Step 1: Install Claude Cowork

**1.1** Go to [claude.ai/download](https://claude.ai/download) and download the desktop app for your operating system.

[SCREENSHOT: Download page showing macOS and Windows options]

**1.2** Install the application:
- **macOS**: Open the .dmg file and drag Claude to your Applications folder
- **Windows**: Run the installer and follow the prompts

**1.3** Open Claude and sign in with your account. You need a Pro, Team, or Enterprise subscription—Cowork isn't available on the free tier.

[SCREENSHOT: Sign-in screen]

**1.4** Once signed in, you'll see three tabs at the top: **Chat**, **Code**, and **Cowork**. Click **Cowork**.

[SCREENSHOT: Main interface with Cowork tab highlighted]

## Step 2: Install the Legal Plugin

**2.1** In Cowork, click the **Plugins** button in the sidebar (or go to Settings → Plugins).

[SCREENSHOT: Cowork sidebar with Plugins button highlighted]

**2.2** You'll see the plugin marketplace. Find **Legal** in the list and click **Install**.

[SCREENSHOT: Plugin marketplace showing Legal plugin with Install button]

**2.3** The plugin will download and activate automatically. You should see a confirmation message.

[SCREENSHOT: Installation confirmation]

**2.4** To verify it's working, type `/legal` in the Cowork chat. You should see the available legal commands:
- `/review-contract`
- `/triage-nda`
- `/vendor-check`
- `/brief`
- `/respond`

[SCREENSHOT: Slash command menu showing legal plugin commands]

## Step 3: Try the /respond Command

Before we customize anything, let's see what the plugin can do out of the box.

**3.1** In Cowork, type:

```
/respond to a data subject access request from Jane Smith dated January 15
```

**3.2** Claude will generate a response using the built-in GDPR template.

[SCREENSHOT: Generated DSAR response]

This works fine for EU practitioners. But notice the template assumes GDPR—Article 15, one-month timeline, no mention of fees. For Singapore's PDPA, we need something different.

## Step 4: Find the Plugin Files

Here's where open source becomes practical. The legal plugin isn't a black box—it's a folder of files you can read and edit.

**4.1** Open your Cowork sandbox folder:
- **macOS**: `~/Library/Application Support/Claude/cowork/plugins/legal/`
- **Windows**: `%APPDATA%\Claude\cowork\plugins\legal\`

**Tip:** In Cowork, you can also type `/open plugin folder legal` to open it directly.

[SCREENSHOT: File explorer showing legal plugin folder]

**4.2** You'll see this structure:

```
legal/
├── .claude-plugin/
│   └── plugin.json
├── .mcp.json
├── commands/
│   ├── review-contract/
│   ├── triage-nda/
│   ├── vendor-check/
│   ├── brief/
│   └── respond/
└── skills/
    ├── contract-review/
    ├── nda-triage/
    ├── compliance/
    ├── canned-responses/    ← This is where templates live
    ├── legal-risk-assessment/
    └── meeting-briefing/
```

**4.3** Navigate to `skills/canned-responses/templates/`. This folder contains the response templates:

```
templates/
├── dsar-response.md
├── legal-hold.md
├── vendor-inquiry.md
└── discovery-request.md
```

[SCREENSHOT: Templates folder contents]

**4.4** Open `dsar-response.md` in your text editor. You'll see a markdown file with sections for "When to use," "Template," and "Variables."

[SCREENSHOT: dsar-response.md open in text editor]

This is all it is—a text file. No special format. No proprietary encoding. Just markdown you can read and edit.

## Step 5: Create a PDPA Template

Now let's create a template for Singapore's Personal Data Protection Act.

**5.1** In the `templates/` folder, create a new file called `pdpa-access-request.md`.

[SCREENSHOT: Creating new file in templates folder]

**5.2** Copy this content into the file:

```markdown
# PDPA Access Request Response

## When to use
Responding to access requests under Singapore's Personal Data Protection Act 2012, Section 21.

## Key differences from GDPR
- 30-day response deadline (extendable to 60 days for complex requests)
- Organization can charge a reasonable fee for access
- Different exemptions apply (e.g., Section 32 for evaluative purposes)

## Template

Dear [Requester Name],

Thank you for your request dated [Request Date] to access your personal data held by [Organization Name].

We acknowledge receipt of your request under Section 21 of the Personal Data Protection Act 2012 (PDPA).

**Timeline**: We will respond to your request within 30 days from the date of this acknowledgment. If we require additional time due to the complexity of your request, we will notify you of the extension.

**Fee**: [If applicable: A fee of S$[Amount] is required to process this request, reflecting the reasonable costs of responding. / No fee is required for this request.]

**Scope of response**: We will provide you with:
- Personal data about you that is in our possession or control
- Information about how your data has been used or disclosed in the past year

**Exemptions**: Please note that certain data may be excluded from disclosure under Section 32 of the PDPA, including data subject to legal privilege or data that could reveal personal data about other individuals.

If you have questions about this process, please contact [Contact Person] at [Contact Email].

Yours sincerely,
[DPO Name]
Data Protection Officer
[Organization Name]

## Variables
- Requester Name
- Request Date
- Organization Name
- Amount (if fee applicable)
- Contact Person
- Contact Email
- DPO Name

## Notes for Claude
- Always verify the request date to calculate 30-day deadline
- Check if organization charges access fees (policy-dependent)
- Flag if request appears to fall under Section 32 exemptions
- Suggest scheduling follow-up reminder at day 25 if response not sent
```

**5.3** Save the file.

[SCREENSHOT: Saved pdpa-access-request.md file]

## Step 6: Register Your Template

Claude needs to know your new template exists.

**6.1** In the `skills/canned-responses/` folder, open `SKILL.md`.

[SCREENSHOT: SKILL.md location in folder structure]

**6.2** Find the "Available Templates" section and add your new template:

```markdown
## Available Templates

- dsar-response.md — GDPR data subject access requests
- pdpa-access-request.md — Singapore PDPA access requests
- legal-hold.md — Litigation hold notices
- vendor-inquiry.md — Standard vendor information requests
- discovery-request.md — E-discovery responses
```

**6.3** Save the file.

[SCREENSHOT: Updated SKILL.md with new template listed]

## Step 7: Test Your Template

**7.1** Go back to Cowork. You may need to reload the plugin:
- Type `/reload plugin legal` or
- Close and reopen Cowork

**7.2** Now try your new template:

```
/respond to a PDPA access request from John Tan dated February 3
```

**7.3** Claude should generate a response using your PDPA template—with the 30-day timeline, fee provisions, and Section 32 exemptions.

[SCREENSHOT: Generated PDPA response using custom template]

If it works, congratulations—you've just customized an AI legal tool for your jurisdiction.

## Troubleshooting

**Template not appearing?**
- Check the filename matches exactly what you added to SKILL.md
- Make sure the file is saved in the `templates/` folder (not one level up)
- Try `/reload plugin legal` to refresh

**Claude using wrong template?**
- Be specific in your request: "PDPA access request" not just "access request"
- Check your "When to use" section clearly distinguishes from other templates

**Can't find the plugin folder?**
- Use `/open plugin folder legal` in Cowork
- On macOS, the Library folder is hidden by default—press Cmd+Shift+G in Finder and paste the path

## What to Build Next

You've learned the pattern: create a markdown file, define when to use it, write the template, register it in SKILL.md. Here are ideas for expanding your template library:

**More PDPA templates:**
- Correction request response (Section 22)
- Withdrawal of consent acknowledgment (Section 16)
- Data breach notification

**Corporate counsel templates:**
- Employment offer letter (Singapore Employment Act compliance)
- Vendor quote acknowledgment
- Contract review status update
- Board resolution for director appointments

**Singapore-specific legal holds:**
- References to local court procedures
- Statutory retention periods
- Local custodian identification

Each template takes about 20 minutes once you know the pattern. The legal research to get the content right may take longer—but you only do that once per template type.

## Going Further

**Share your templates.** The plugin is open source. If you create templates that would help other Singapore practitioners, consider contributing them back to the community on GitHub.

**Connect external tools.** The `.mcp.json` file in the plugin folder configures integrations with Slack, Box, Jira, and Microsoft 365. That's a topic for another guide.

**Explore other commands.** We focused on `/respond` because it has the lowest barrier to entry. Once you're comfortable, `/triage-nda` and `/brief` are natural next steps—they use similar file-based configuration.

The real value here isn't any single template. It's understanding that these AI tools aren't black boxes you're locked out of. They're folders of text files you can read, modify, and make your own.

That's what open source means for legal practice.
