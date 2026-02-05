---
title: "Making Claude's Legal Plugin Actually Yours"
slug: "claude-legal-plugin-guide"
tags: ["LegalTech", "OpenSource", "PDPA", "Tutorial"]
status: draft
featured: false
github_folder: "legal-plugin-guide"
---

I watched Thomson Reuters drop 16% in a single day. Legal tech Twitter split into camps: some declared the end of traditional practice, others dismissed the whole thing as overhyped. I spent the weekend doing neither. I installed Anthropic's legal plugin and tried to make it useful.

Here's what I found: the plugin is genuinely impressive. It's also not plug-and-play. The templates it ships with assume you're in the US or EU. The workflows assume you have playbooks ready to upload. For a Singapore solo counsel with limited time and no dedicated legal ops team, "install and go" isn't quite accurate.

But here's what no one's talking about: the plugin is open source. You can look inside. You can modify it. You can make it work for *your* jurisdiction, *your* practice, *your* constraints.

This guide walks through doing exactly that.

## What the Legal Plugin Actually Is

Let's clear up some confusion first.

The legal plugin is part of Claude Cowork's plugin ecosystem—11 open-source plugins that Anthropic released on January 30, 2026. It's not a standalone product. It runs inside Cowork, which is Anthropic's agentic desktop application (think: Claude Code for non-coders).

The plugin gives you five slash commands:
- `/review-contract` — clause-by-clause review against your playbook
- `/triage-nda` — quick categorization: auto-approve, review, or escalate
- `/vendor-check` — status check on vendor agreements
- `/brief` — daily briefings, topic research, incident response prep
- `/respond` — templated responses for DSARs, legal holds, common inquiries

And six skills that Claude draws on automatically: contract review, NDA triage, compliance navigation, canned responses, risk assessment, and meeting briefings.

The enterprise pitch is compelling: upload your playbooks, configure your risk tolerances, let Claude handle first-pass review. For teams with existing playbooks and dedicated legal ops, that's probably a weekend project.

For solo counsels? The `/review-contract` command alone requires a detailed playbook file specifying standard positions, acceptable ranges, and escalation triggers. That's not a weekend project—that's a multi-week documentation effort most of us haven't done.

So I started smaller.

## Why `/respond` Is the Right Starting Point

The `/respond` command does something simple: it generates templated responses for common legal requests. DSARs. Discovery holds. Vendor inquiries. The repetitive stuff that eats your time but doesn't require deep legal judgment.

Three reasons this is the right entry point:

**Lower barrier to entry.** Unlike contract review, you don't need a comprehensive playbook. You need templates for specific request types. One template at a time.

**Immediate value.** If you handle even three DSARs a month, a good template saves hours. The ROI is obvious and fast.

**It demonstrates the real power of open source.** The templates are just markdown files. No black box. No proprietary format. You can read them, copy them, modify them for your jurisdiction.

That last point matters. The plugin ships with templates that work fine for US/EU practitioners. For Singapore? The PDPA has different requirements than GDPR. Different timelines. Different exemptions. A template that doesn't account for that isn't just suboptimal—it's potentially non-compliant.

So let's fix that.

## Looking Inside: How Templates Actually Work

Before we create anything, let's understand what we're working with.

The legal plugin lives in your Cowork sandbox folder. The structure looks like this:

```
legal/
├── .claude-plugin/
│   └── plugin.json        # Plugin manifest
├── .mcp.json              # Tool connections
├── commands/
│   ├── review-contract/
│   ├── triage-nda/
│   ├── vendor-check/
│   ├── brief/
│   └── respond/           # This is where we're working
└── skills/
    ├── contract-review/
    ├── nda-triage/
    ├── compliance/
    ├── canned-responses/  # Template library lives here
    ├── legal-risk-assessment/
    └── meeting-briefing/
```

The `canned-responses` skill folder contains the template library. Inside, you'll find markdown files for different response types:

```
canned-responses/
├── SKILL.md               # Instructions Claude follows
├── templates/
│   ├── dsar-response.md
│   ├── legal-hold.md
│   ├── vendor-inquiry.md
│   └── discovery-request.md
```

Open `dsar-response.md`. You'll see something like:

```markdown
# Data Subject Access Request Response

## When to use
Responding to individual requests for access to personal data under GDPR Article 15.

## Template

Dear [Requester Name],

Thank you for your request dated [Date] regarding access to your personal data...

[Template continues with GDPR-specific language]
```

That's it. Markdown. Human-readable. Editable.

The `SKILL.md` file tells Claude how to use these templates—when to apply them, what variables to fill in, how to adapt tone. But the templates themselves are just text files.

## Creating a PDPA-Specific DSAR Template

Now let's create something useful: a template for responding to data access requests under Singapore's Personal Data Protection Act.

**Step 1: Create your template file**

In the `templates/` folder, create a new file called `pdpa-access-request.md`:

```markdown
# PDPA Access Request Response

## When to use
Responding to access requests under Singapore's Personal Data Protection Act 2012, Section 21.

## Key differences from GDPR
- 30-day response deadline (extendable to 60 days for complex requests)
- Can charge reasonable fee for access
- Different exemptions (e.g., Section 32 for evaluative purposes)

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

**Step 2: Update the skill instructions**

Open `canned-responses/SKILL.md` and add your new template to the list of available responses:

```markdown
## Available Templates

- dsar-response.md — GDPR data subject access requests
- pdpa-access-request.md — Singapore PDPA access requests
- legal-hold.md — Litigation hold notices
- vendor-inquiry.md — Standard vendor information requests
- discovery-request.md — E-discovery responses
```

**Step 3: Test it**

In Cowork, try: `/respond to a PDPA access request from John Tan dated February 3`

Claude should pull your new template, fill in the variables, and generate a response that actually fits Singapore law.

## What You Can Build Next

One template is a starting point. Here's what else makes sense for Singapore practitioners:

**PDPA response library:**
- Correction request response (Section 22)
- Withdrawal of consent acknowledgment (Section 16)
- Data breach notification (mandatory notification requirements)

**Singapore-specific legal holds:**
- References to Singapore court procedures
- Appropriate statutory retention periods
- Local custodian identification requirements

**Regulatory inquiry responses:**
- PDPC inquiry response template
- MAS regulatory inquiry framework
- ACRA compliance responses

Each of these follows the same pattern: create a markdown file, add jurisdiction-specific language, update the skill instructions. No coding. No API calls. Just text files you can version control, share with colleagues, or contribute back to the community.

## The Real Value of Open Source

The market reaction to Anthropic's legal plugin focused on disruption. Will it replace lawyers? Will it kill legal tech startups? Those are the wrong questions.

The right question: *Can I make this work for my practice?*

For enterprise tools, that question usually means: Can I afford the customization? Can I get on the vendor's roadmap? Can I wait 18 months for jurisdiction-specific features?

For open source tools, the question becomes: Can I read the files? Can I modify them? Can I share what I build?

The legal plugin ships with US/EU assumptions baked in. That's not a flaw—it's a starting point. The templates are markdown. The configurations are JSON. The whole thing is on GitHub. You can fork it, customize it, and make it actually useful for your jurisdiction.

For solo counsels and small legal teams, that's the real story. Not "AI will replace you" or "AI is overhyped." The story is: here's a tool you can inspect, modify, and own. Here's a foundation you can build on.

The PDPA template I walked through took about 20 minutes to create. It'll save me hours over the next year. And because it's just a markdown file, I can share it with every Singapore practitioner who wants it.

That's what open source means for legal practice. Not free software. Software you can make your own.
