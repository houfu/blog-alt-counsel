# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is Ang Hou Fu's personal website (alt-counsel.ghost.io), a ghost-based blog and newsletter focused on legal technology, programming, and personal projects.

### Blog Mission & Content Strategy
alt-counsel.com offers **alternative perspectives on legal technology and practice** specifically for solo counsels, small legal teams, and resource-constrained legal departments. Unlike typical legal tech content that assumes enterprise budgets and large teams, this blog focuses on:

- **Practical solutions for real constraints** - $50 solutions that replace $50K systems
- **Resource-conscious implementations** - Tools and workflows that work with limited budgets and time
- **Singapore/ASEAN legal context** - Regional insights with global applicability  
- **Builder-friendly content** - Serving both legal professionals and technical folks building legal solutions
- **Honest assessments** - What actually works vs. what's marketed to work

**Target Audience**: Solo counsels, small legal teams, in-house lawyers working with limited resources, and builders creating legal tech solutions.

**Brand Position**: "The Solo Counsel's Tech Strategist" - practical problem-solver who helps resource-constrained legal departments leverage technology for real impact.

## Directory Structure
- `/temp/` - Temporary folder (gitignored)
- `/posts/` - Place to store posts and work in progress (see `/posts/README.md` for the folder standard)
  - `{post-short-title}/` - Each post is stored in its own folder using a short memorable title
    - `{post-short-title}.md` - The post content with YAML frontmatter. **New posts: name the main file after the folder.** (Older posts vary; the linter warns on mismatches.)
    - `discussion.md` - This file stores the memories of claude involved in writing the post
    - `pitch.md` - This file stores the pitch of the post used to create the post.
    - It also contains images, research documents and others relating to this post.
- `/docs/` - Documentation and analysis
  - `/docs/personas/` - Full persona documents for the three audience reviewer agents
    - `marcus-tan-persona.md` - Legal Tech Blog Reviewer
    - `sarah-chen-persona.md` - In-house Lawyer Reviewer
    - `wei-lin-persona.md` - Lawyer-Coder Reviewer
    - `memory/<agent-name>.md` - Persistent reviewer memory (standing asks, unique catches, settled disagreements) — read by reviewers before each round, appended after
- `/scripts/` - Canonical Node/shell tooling (publish, sync, lint, verify)
- `/.claude/` - Claude Code agents, skills and configuration
- `/.mcp.json` - Project MCP server config (Jina, Ghost). **Never hardcode API keys here — reference env vars** (e.g. `${JINA_API_KEY}`).
- `/node_modules/` - Node.js dependencies (ignored by git)

## Post Structure and Metadata

Each blog post markdown file includes YAML frontmatter with metadata fields:

```yaml
---
title: "Post Title"
slug: "url-slug"
tags: ["tag1", "tag2", "tag3"]
status: draft
featured: false
github_folder: "post-folder-name"  # Optional: folder name in /posts/ directory
---
```

### GitHub Integration

Posts can link to their source folder in the GitHub repository by adding the `github_folder` field to frontmatter. When this field is present, a GitHub footer section is automatically added when publishing the post with:

- Visual separator (horizontal rule)
- "View on GitHub" heading
- Explanatory text about open source content
- Rich bookmark card linking to the GitHub folder

**Example:**
```yaml
---
title: "My Post About Legal Tech"
github_folder: "prompt-engineering-wrong"
---
```

This will add a footer linking to:
`https://github.com/houfu/blog-alt-counsel/tree/main/posts/prompt-engineering-wrong`

**Note:** The `github_folder` field should contain only the folder name, not the full path.

## Development Environment

This is a local Node.js project. Install dependencies with `npm install` and configure environment via a `.env` file.

### Ghost MCP Integration

Most Ghost CMS operations are handled via **ghst MCP tools** — native tools available directly in Claude Code. This includes searching posts, managing tags, viewing analytics, creating/updating posts, and managing members.

**Setup:**
```bash
npm install -g @tryghost/ghst
ghst auth login --url $GHOST_SITE_URL --staff-token $GHOST_ADMIN_API_KEY --site alt-counsel
claude mcp add ghost -- ghst mcp stdio --tools all
```

**Custom scripts still used:**
- `scripts/publish-lexical.js` — Markdown-to-lexical publishing with custom features (bookmark cards, GitHub footer, table conversion)
- `scripts/sync-from-ghost.js` — Syncs Ghost metadata back to local markdown frontmatter (`npm run sync-ghost <slug>`)
- `scripts/lint-posts.js` — Lints post folders: frontmatter, naming, horizontal rules, oversized images (`npm run lint-posts`, add `--strict` for new posts). Run it before publishing.
- `scripts/verify.sh` — Repo health check: file presence, script syntax, secret scan, agent/skill frontmatter, post lint (`npm run verify`). Runs in CI on every PR (`.github/workflows/verify.yml`).

**Searching the blog:**
- Use `ghost_search` MCP tool directly (full-text across posts, pages, tags).
- For filtered queries, use `ghost_post_list` with NQL filters (e.g., `filter: "tag:ai"`, `status: "published"`).
- When a query is ambiguous, run 2–3 parallel searches from different angles in a single message.

### Environment Variables

Ghost API credentials are needed for `publish-lexical.js`, `sync-from-ghost.js`, and ghst authentication:
- `GHOST_SITE_URL` — Your Ghost site URL
- `GHOST_ADMIN_API_KEY` — Admin API key in `id:secret` format (also used as ghst staff token)
- `GHOST_API_VERSION` — API version (e.g. `v6.0`)

Copy `.env.example` to `.env` and fill in your values.

### Claude Code Hooks

Hooks enforce the rules that prose alone didn't (discussion-log evidence: prose-only rules got 40-60% adherence; mechanical ones held). Wired in `.claude/settings.json`:

| Hook | Event | What it does |
|---|---|---|
| npm bootstrap | SessionStart | Installs node_modules if missing (Claude Code on the web) |
| `ghst-auth.sh` | SessionStart | Authenticates ghst CLI from `.env`; reports loudly if setup is broken |
| `pre-publish-gate.js` | PreToolUse (Bash) | **Denies** any `publish-lexical.js` run while the post has lint ERRORS (horizontal rules etc. that break lexical conversion) |
| `reviewer-memory-gate.js` | PreToolUse (Task) | **Denies** spawning an audience reviewer whose prompt doesn't reference its memory file (`docs/personas/memory/<agent>.md`) — no more amnesiac reviews |
| `post-edit-lint.js` | PostToolUse (Edit\|Write) | Lints a post folder right after its main file is edited: errors are fed back to fix immediately, warnings surface as context |
| `session-wrap.sh` | SessionEnd | Auto-appends session notes to affected `discussion.md` files via `claude -p`, then commits one `Session notes:` commit per session |

Session-wrap notes: trigger manually with `/wrap-up`; skip once with `CLAUDE_HOOK_SESSION_SKIP_WRAP=1`; debug log at `.claude/state/session-wrap.log` (gitignored).

### Pre-Commit Hook (git)

Install once with `npm run setup-hooks`. Two checks:

1. **Secret scan (BLOCKING)** — staged changes matching API-key patterns (`jina_`, `sk-`, `ghp_`, AWS, private keys) abort the commit. A real key was once committed to this public repo; this is the guard. Override a false positive with `SKIP_SECRET_SCAN=1 git commit ...`.
2. **Note-taking reminder (non-blocking)** — warns when post content is staged without `discussion.md`.


## GitHub CLI Integration

GitHub CLI (`gh`) is used for repository operations including creating pull requests and managing issues.

### Authentication
Run `gh auth login` to authenticate, or set `GITHUB_TOKEN` as an environment variable.



**Critical rules:**
- **NEVER use horizontal rules** (`---`, `***`, or `___`) in final blog post content (files that will be published to Ghost). These break the markdown to lexical conversion process. Use headings or spacing instead.
  - *Note: You CAN use horizontal rules in draft/working documents (discussion.md, pitch.md, research.md) to organize content during writing.*
- **Prefer bookmark cards over inline links** for key content and backlinks - they provide richer previews and visual emphasis.

**Available Ghost elements:** Images, code blocks, bookmark cards, toggles/accordions.

## Task Management with TodoWrite

**CRITICAL: Use TodoWrite for ALL multi-step workflows, especially content creation.** This ensures quality checks are never skipped and progress is visible.

**Always create TodoWrite todos when:**
- Starting any blog post or newsletter workflow
- Beginning research or content quality work
- Working on tasks with 3+ steps
- Quality checks need to be tracked (content audit, legal review, etc.)

**Quality check todos are mandatory** - Include these in your todo list for content workflows:
- Content quality audit (using content-quality-auditor agent)
- Target audience review (using inhouse-lawyer-reviewer, legal-tech-blog-reviewer, or lawyer-coder-reviewer agent, or /feedback command for all three)
- Backlink curation
- Final proofreading before publishing

Mark todos as `in_progress` BEFORE starting work, and `completed` IMMEDIATELY after finishing. This keeps the user informed of progress.

## Skills Usage Policy

**CRITICAL: Always use skills when available for their intended purposes.** Do not wait for explicit user requests - proactively invoke the appropriate skill based on the task at hand.

Available skills and when to use them:
- **brainstorming** - Use at the START when ideas are vague or need refinement. Invoke automatically when user suggests a blog topic that needs development.
- **generate_a_pitch** - Use when creating a new post. Always invoke to create the pitch before drafting. Ask about tag *intent* before suggesting tags.
- **tag-registry** - Use when suggesting tags for posts (during pitch or before publishing). Ensures tags are consistent with the canonical registry and prevents tag sprawl.
- **blog-research** - Use when fact-checking, gathering sources, finding statistics, or researching topics for posts. If `research.md` is >7 days old when drafting starts, refresh first.
- **note-taking** - The SessionEnd hook handles routine session logging automatically. Invoke this skill explicitly only for major decisions that need to land in the AUDIT TRAIL, series milestones, or when creating `discussion.md` from scratch.
- **backlink_curating** - Use at final draft stage to find internal links to other blog posts.
- **getting-feedback** - Use when the user needs audience feedback. Enforces 2-round cap and length-audit-first ordering.
- **using-ghost-admin-api** - Use for Ghost CMS operations. Most read/query operations use ghst MCP tools directly; use the skill for creating drafts from markdown via `publish-lexical.js`. Reference: `/docs/ghost-lexical-format.md`.
- **wrap-up** - Manually trigger the SessionEnd hook's commit + notes flow mid-session.

For blog search, use the `ghost_search` MCP tool directly (see "Searching the blog" in Ghost MCP Integration section).

Do NOT ask "Would you like me to use the X skill?" - Just use it. The skills are designed to be invoked automatically as part of the natural workflow.

## Before Working on Posts

**CRITICAL: Always read discussion.md before working on any post-related task.** This ensures context awareness and prevents repetition across series posts.

**Pre-work checklist:**
- [ ] Read the post's `discussion.md` file (at least the last 2-3 sessions)
- [ ] For series work: Read all previously published parts
- [ ] Check what's already established in previous posts
- [ ] Identify what can be referenced vs. what needs re-explaining

**When to read discussion.md:**
- Before drafting new content
- Before making revisions
- Before adding to a series
- Before publishing to Ghost
- Before any substantial work on the post

**Why this matters:**
For series posts, each part should build on previous parts, not repeat them. Reading discussion.md helps you understand what's already been covered and maintain a holistic view across the entire series.

### Series Discipline

**Complete and publish Part 1 before planning Parts 2+.** Detailed multi-part plans create false confidence and become traps: contract-review-skill planned a 5-episode series in depth and never built episode one; data-zeeker-sg's series structure changed 4+ times across 11 sessions.

Red flags that a series plan is becoming a trap — when you see them, explicitly ask the user "should we descope this to a single post?":
- The plan is comprehensive but Part 1 hasn't been drafted
- The series depends on an external event or someone else's decision
- The structure has already changed twice
- Planning sessions outnumber writing sessions

## Writing Voice & Style

**CRITICAL: Houfu's distinctive voice must be present in all blog content.** This voice is what differentiates alt-counsel from generic legal tech content.

### Voice Guide Reference

The comprehensive **Houfu Voice Guide** is available at `/docs/Houfu_Voice_Guide.md`. This 5-part guide defines:

1. **Voice Patterns** - Opening moves, "neither is wrong" framing, specific numbers, vulnerable admissions
2. **Structural Patterns** - Bullet point rules, paragraph length, header style
3. **Anti-Patterns** - What Houfu never does (jargon, humble-bragging, false certainty)
4. **Templates** - News commentary, learning in public, LinkedIn posts
5. **Quick Reference Checklist** - Pre-publishing verification

### When to Apply the Voice Guide

**During PITCH (generate_a_pitch skill):**
- Read Part 4 (Templates) to understand post structure
- Ensure title follows voice patterns (conversational, not academic)
- Check that pitch opens with feeling/vulnerability, not throat-clearing

**During WRITE (drafting content):**
- REQUIRED: Read the entire Voice Guide before drafting blog posts
- Reference Part 1 (Voice Patterns) while writing opening paragraphs
- Use Part 2 (Structural Patterns) for formatting decisions
- Apply Part 5 (Quick Reference Checklist) during self-review

**During REVIEW (quality checks):**
- The audit-tone agent will check voice consistency using the guide
- Target audience reviewers reference voice patterns in their feedback

### Content Type Distinctions

**Voice guide applies to:**
- Blog posts (full application)
- Newsletter articles (full application)
- LinkedIn posts (use Part 4 template)

**Voice guide does NOT apply to:**
- discussion.md files (working notes)
- pitch.md files (internal planning)
- research.md files (source collection)
- Technical documentation

### Key Voice Principles (Quick Reference)

If you need to write quickly without reading the full guide, these core principles maintain Houfu's voice:

1. **Open with feeling, not fact** - "I compared my GitHub to Jamie's and felt unproductive" (not "This article discusses...")

2. **Specific numbers as anchors** - "148 stars and 177,000 monthly downloads" (not "significant traction")

3. **Vulnerable admissions** - Admit gaps, failures, uncertainties early in the piece

4. **The "neither is wrong" move** - Resist binary framing, embrace nuance. Formula: [Position A] vs [Position B]. Neither is wrong. But [the nuance that actually matters].

5. **Return to solo counsel reality** - Every post circles back to resource-constrained practitioners: "For solo counsels and small teams..."

6. **Short paragraphs, varied rhythm** - 2-5 sentences typically, punch with single-sentence paragraphs after buildup

7. **Frameworks over advice** - Present questions/criteria, not prescriptions. "Before starting, ask 4 questions..." rather than "You should always..."

8. **User leads on vulnerability** — The emotional opening and core vulnerability must come from the user's real experience. Ask for it; don't invent it. Claude's role is to build the pitch from what the user provides, not to construct an emotional frame from the topic.

**Remember:** Professional tone doesn't mean boring. Houfu's voice is honest, specific, nuanced, and framework-oriented.

## Audience Reviewers Guide

The blog serves three overlapping but distinct audience segments:

### 1. Legal Tech Blog Reviewer (Marcus Tan)
**Persona**: Legal Technology Director, Singapore-based, 10+ years shipping production legal tech systems across ASEAN; speaks at conferences, contributes to open source
**Use for**: Technical implementations, open source projects, honest post-mortems
**Key values**: Technical depth, community knowledge sharing, authenticity — has a high bar and can tell if you've shipped something real

**Full persona details**: `/docs/personas/marcus-tan-persona.md`

### 2. In-house Lawyer Reviewer (Sarah Chen)
**Persona**: Solo corporate lawyer at 150-person manufacturing company ($150/month budget)
**Use for**: Tool evaluations, budget-conscious solutions, pragmatic workflows
**Key values**: Affordability, realistic time estimates, practical relevance
**Agent name**: `inhouse-lawyer-reviewer`

**Full persona details**: `/docs/personas/sarah-chen-persona.md`

### 3. Lawyer-Coder Reviewer (Wei Lin)
**Persona**: Senior Legal Counsel at Series B fintech (lawyer who codes, 5-10 hours/week side projects)
**Use for**: Personal project struggles, learning journeys, build vs. buy decisions, identity questions
**Key values**: Vulnerability, specificity, "I'm not alone" validation, frameworks for decision-making

**Full persona details**: `/docs/personas/wei-lin-persona.md`

### When to Use Each Reviewer

**Use individual reviewers** when content clearly targets one segment:
- **legal-tech-blog-reviewer**: "How I built an open source legal document parser"
- **inhouse-lawyer-reviewer**: "Evaluating contract management tools under $200/month"
- **lawyer-coder-reviewer**: "Why I abandoned my side project after 150 hours"

**Use /feedback command (all three)** when:
- Content has broad appeal across segments
- You want comprehensive triangulated feedback
- Unsure which audience will resonate most

**Default to 1-2 reviewers based on content type. Use all 3 only when content explicitly addresses all three audience segments. Running all 3 on every post produces diminishing returns after round 1.**

### Measured Reviewer Value (from discussion.md audit, 2026-06)

An evidence audit of every recorded review found ~70% of reviewer advice is templated per persona, ~20-30% is post-specific and high-adoption. Use them accordingly:

- **Wei Lin: highest signal (least templated).** Best unique catches are about design intent and sequencing ("the 23-month gap disclosure earns the right BEFORE the wider data"). Prefer Wei Lin when only one reviewer fits.
- **Marcus's best move belongs at PITCH, not draft.** His highest-value catch ever — "an NDA guide will always be 'another NDA guide'; what's different?" — forced an angle pivot after a full draft existed. Ask his differentiation question during pitch interrogation instead.
- **Sarah's template is predictable — pre-empt it.** Costs, time, security/compliance, "what do I do Monday morning": bake these into the draft (see WRITE phase), then use her round for the practitioner-reality catches only she makes.
- **When synthesizing feedback, separate template from unique.** Label which advice is the persona's standing ask vs. specific to this post. Only unique catches justify another round; standing asks should have been pre-empted and can be batch-applied without debate.
- **Reviewers have persistent memory** at `docs/personas/memory/<agent-name>.md` — standing asks, past unique catches, and settled disagreements (advice Houfu already rejected with reasons). Pass the file to the reviewer; append their `MEMORY_UPDATE` block after each round (the getting-feedback skill handles both). This is what stops re-litigation of settled calls across posts.

### Reviewer Routing Table

| Content Type | Recommended Reviewers | Rationale |
|---|---|---|
| Policy/budget commentary | Sarah + Legal Tech | Practical impact + technical depth |
| Tutorial / how-to guide | Sarah + Legal Tech | Accessibility + technical accuracy |
| Build vs. buy decision | Wei Lin + Legal Tech | Identity resonance + technical depth |
| Learning in public / personal struggle | Wei Lin | Validates the emotional journey |
| Open source project / post-mortem | Legal Tech | Technical community resonance |
| Tool evaluation (budget focus) | Sarah | Cost/practicality is the core concern |
| Identity / "am I wasting my time" | Wei Lin | Core persona concern |
| Broad appeal (spans all segments) | All 3 | Only when all 3 segments clearly addressed |

### Key Distinctions

**Technical Capability:**
- Legal Tech Reviewer: Seasoned practitioner, wants deep implementation details
- Sarah Chen: Non-technical, needs explanations for assumptions
- Lawyer-Coder: Self-taught coder, questions execution not capability

**Emotional State:**
- Legal Tech Reviewer: Confident veteran, values honest failures
- Sarah Chen: Pragmatic skeptic, values solutions that work
- Lawyer-Coder: Imposter syndrome, isolation, validation-seeking, guilt about unfinished projects

**Content Preferences:**
- Legal Tech Reviewer: Code, architecture, open source
- Sarah Chen: Affordability, practical steps, backup plans
- Lawyer-Coder: Vulnerability, specific numbers, constraint acknowledgment, decision frameworks

## Common Development Workflows

### 1. Create a new post

**Core phases: PITCH → WRITE → REVIEW → POST → CHECK**

1. **PITCH** - Define scope and direction (use `generate_a_pitch` skill)
   - Read Voice Guide Part 4 (Templates) before developing pitch
   - Tags are suggested during pitch using `tag-registry` skill
   - **Verify data before locking the pitch.** A pitch is a hypothesis, not a finding. If it contains numbers or claims (article counts, hours spent, adoption stats), check them against the actual data first — year-in-review's pitch said "444 articles" (actual: 27) and data-zeeker's said "600 hours" (actual: ~150); both forced full rewrites. For time estimates, ask the user for lived numbers — never derive them from lines of code.
   - **Interrogate the pitch before locking it.** Forensics on past pitch failures show they were catchable at pitch time with three questions: (1) *Test the diagnosis* — when the user offers a problem framing, probe it instead of building on it ("if all clients are unique, is abstraction bias really the tension?" would have saved single-serving-bias a full reframe). (2) *The differentiation question* — "this will always be 'another X guide'; what makes ours different?" (Marcus Tan's highest-value catch, made at draft stage on legal-plugin-guide when it belonged at pitch). (3) *The framing risk question* — "could a named person or community read this as an attack?" (legal-oss-contribution had to anonymize LegalQuants after drafting).
   - Identify 2-3 **must-link prior posts** the new post builds on or contradicts; note them in the pitch. Full backlink curation still happens at final draft, but seeding links at pitch time prevents last-minute, tacked-on linking.
2. **WRITE** - Draft the content
   - **CRITICAL: Read `/docs/Houfu_Voice_Guide.md` before writing blog posts**
   - **Also read 1-2 recent published posts** to sample the live voice (sentence rhythm, narrative-first pacing). Recurring failure: Claude drafts in expository/analytical "blog voice" and the user has to demand a narrative rewrite (ai-fragmentation lost a full draft to this).
   - Apply voice patterns from guide during drafting
   - **Pre-empt the predictable reviewer asks.** ~70% of recorded reviewer advice is the same per persona. Address it in the draft so review rounds are spent on post-specific catches, not templates: cost/time/budget reality and security-compliance where relevant (Sarah asks in 6/10 reviews), concrete examples and jargon defined on first use (Marcus, 7/9), an honest emotional beat and a concrete next step (Wei Lin, 5/11). The pre-review checklist in the getting-feedback skill covers these.
3. **REVIEW** - Quality checks and refinement, **in this order**:
   1. **Pitch checkpoint.** Before any review, compare the draft against the pitch on thesis, scope, and emotional core. If they've diverged, decide explicitly with the user: either the draft wandered (revise it back), or **the pitch was wrong — amending it is then the correct move, not a violation.** When amending, record in discussion.md *why the pitch was wrong and which pitch-time check would have caught it* (untested diagnosis? unverified data? framing risk?). That feedback loop is the point: a mid-draft pitch change means pitch interrogation failed, and the workflow should learn from it rather than hide it.
   2. **Run `npm run lint-posts <folder>` first, then one content quality audit** (content-quality-auditor agent — includes voice check via audit-tone). The linter now covers the audit's most-repeated mechanical findings (horizontal rules, heading skips, empty alt text, GitHub spelling, image sizes) — the audit should spend its round on judgment calls (semantic repetition, jargon, tone, example sufficiency), not re-reporting lintable defects. **Maximum 1 audit round before reviewers see the draft.** Audit hoarding — 3-4 polish cycles before any reviewer input — is how the round cap gets bypassed (open-claw-intro ran 4+ cycles this way).
   3. **Target audience review** (inhouse-lawyer-reviewer, legal-tech-blog-reviewer, or lawyer-coder-reviewer agent, or /feedback command for all three)
   4. **Length audit BEFORE applying additive reviewer fixes** — this ordering is the most-violated rule (followed in ~40% of recent posts). If reviewer fixes would add >~10% length, find the cuts first, then apply the fixes.
   5. Backlink curation (backlink_curating skill)
   6. Tag validation (use `tag-registry` skill to verify tags before publishing)
   - **Review round limit**: Maximum 2 rounds of reviewer feedback — and audit cycles count toward revision discipline, not a separate free budget. If the same core framing issue persists after 2 rounds, switch to brainstorming with the user instead — reviewers diagnose, they don't fix framing problems.
4. **POST** - Publish to Ghost (use `using-ghost-admin-api` skill)
   - Always use `scripts/publish-lexical.js` — do not create per-post publishing scripts. Improve the canonical script if a feature is missing.
   - **Infra changes belong on a separate branch.** If `publish-lexical.js` or other scripts need improvements, commit those on their own PR — not on the blog PR. PR #26 mixed 17 commits of content + script changes and became unreadable.
5. **CHECK** - Verify published post and sync repo (use `using-ghost-admin-api` skill)
   - Use `npm run sync-ghost <slug>` to sync Ghost metadata back to local markdown frontmatter automatically.
   - **Publish last, sync once.** Edit freely on Ghost after publishing; run `sync-ghost` only once when closing the PR. Avoid per-edit sync-back commits (four of the last five PRs had this churn).
   - **Expect post-scheduling Ghost edits.** Houfu routinely polishes prose in the Ghost editor after scheduling. At the final sync, also diff the live content against the local file, merge the edits back so the repo matches what's published, and log notable edits in discussion.md as user decisions (they reveal voice preferences future drafts should follow).
   - **Don't skip the final sync.** Several older posts (prompt-engineering-wrong, redlines-top-10-percent, ai-tools-for-agents) were published on Ghost months ago but their local frontmatter still says draft or is missing — making them look abandoned. The repo should always know a post's true status.

### Commit discipline

- **One commit per meaningful change** — the SessionEnd hook produces one `Session notes:` commit per Claude session. Manual commits should reflect logically stable units (draft complete, reviewer round applied, backlinks added), not every edit.
- **Avoid auto-named branches** — `claude/<descriptor>` branches from exploratory sessions fragment PR history. If a session's work belongs to an existing blog PR, land it there.

**Throughout the process (use as needed):**
- **BRAINSTORM** (use `brainstorming` skill) - Refine pitch, overcome writer's block on difficult sections, develop structure
- **RESEARCH** (use `blog-research` skill) - Gather sources, facts, statistics (can happen before pitch, after pitch, or when outline is clear)

**Always:**
- Create TodoWrite todos at the start to track each phase
- Use `note-taking` skill to update discussion.md throughout the process
- Mark todos completed immediately after each step
