# Pitch — From One Source to Three: When the Right Agent Showed Up

## Title

**Working title:** *From One Source to Three: When the Right Agent Showed Up*

**Alternates considered (in case the working title needs replacing later):**
- *Designing Zeeker in Loops*
- *Three Databases, One Discord Channel, Zero Heroics*
- *The Loop That Lets Me Close Zeeker Tabs at Night*

## Pitch (one paragraph)

When I published Part 1 of OpenClaw Field Notes in April, Zeeker had one data source live and 346 articles. Five months later, data.zeeker.sg has three databases — SG Law Watch, Zeeker Judgements, SG Government Newsrooms — 21 tables, a working JSON API, and a SQL editor anyone can use. This post is honest about how that happened. The visible work wasn't the hard part. The hard part was the invisible work: writing, planning, and researching every fix *before* anything visible happens. That cognitive overhead is the real solo builder tax, and it's what burns people out. The framework that made it sustainable was simple: design in loops. Plan, do, feedback, back to plan. The agent (NanoClaw, working through the Claude Code interface I already use for thinking) became a partner for the planning and doing. Discord became the persistent queue — every loop logged, every deferred item surfaced the next day. That's the layer that lets a solo builder switch off at night without losing track of open work. Part 1 admired the channel-based interface but called it a showpiece. Turns out it really is the workflow — paired with the right agent. Different harnesses for different shapes of work. Neither is wrong. But for ambitious projects with thousands of small moving parts, you need a harness that supports every part of the loop.

## Series fit

- **Primary:** data.zeeker.sg series Part 4. Closes the November 2025 cliffhanger ("I renewed the domain. I'm not done exploring.") with concrete evidence of what got built.
- **Secondary:** Quiet companion to OpenClaw Field Notes Part 1. Closes that cliffhanger generously by reference — *not* by litigating Part 1's frustrations.

## Core thesis

> Solo builders survive ambitious projects by designing in loops, not heroics — and the right agent harness needs to support every part of the loop.

Plan → Do → Feedback → back to Plan. Each phase needs the right tool. The agent handles plan + do. The channel layer (Discord) handles feedback persistence and lets you switch off.

## Anchor moment (locked)

> I pulled up data.zeeker.sg the other day and felt something I hadn't felt about this project in months: satisfaction. Not because it matches the vision I've carried since law school — it doesn't, not yet. But because for the first time, I believe I can actually get there. The site has three databases now, where five months ago there was one. That gap between "one" and "three" isn't really about code. It's about how I work.

**Why this opening works:** Feeling-first, not fact-first. Vulnerable admission inside the first three sentences ("not yet"). Specific numbers as anchors (1 → 3, five months). Sets up the thesis that follows (the gap is workflow, not code). Tonally restrained — not euphoria, conviction.

## Outline (locked — drafting against this)

**Gating:** Public preview ends after Section 3 (the framework). Sections 4-8 are members-only.

| § | Section | Length | Visibility | Notes |
|---|---|---|---|---|
| 1 | **Open: One Source to Three** | ~150w | Public | Anchor moment (looking at the site, renewed conviction, vision not fully there yet). |
| 2 | **The Invisible Work** | ~280w | Public | Solo builder cognitive tax — writing/planning/researching every fix before visible work. Specific Zeeker examples (HTML quirks, schema migrations, tracing bugs through Datasette/SQLite/S3). |
| 3 | **Design in Loops** | ~250w | Public | Plan → Do → Feedback → Plan framework. |
| **`<!--members-only-->` GATE** | | | | |
| 4 | **The Agent Role** | ~300w | Members | NanoClaw on a fork. User will expand the NanoClaw explanation during drafting; first draft is loose to leave room. Why it fit: Claude Code-native, container isolation, small enough to audit. |
| 5 | **The Discord Layer** | ~250w | Members | Persistent queue + daily reminders → ability to switch off. Quietly upgrades Part 1's "channel as showpiece" line to "channel as workflow." |
| 6 | **Different Harnesses, Different Shapes** | ~200w | Members | "Neither is wrong." Quote NanoClaw creator's own generous framing of OpenClaw. Different shapes for different work. |
| 7 | **What's Live Now** | ~150w + 2-3 screenshots | Members | The ship. Screenshots carry visual weight: (a) data.zeeker.sg landing page, (b) SQL editor view, (c) optional query result. Subscriber reward. |
| 8 | **Close: Loops Over Heroics** | ~200w | Members | Solo counsel takeaway. Invitation/question. |

**Total target:** ~1780 words + 2-3 screenshots. Public preview ~700w; members-only payoff ~1080w + screenshots.

**Gate logic:** A reader who reads the public preview understands (a) what was crushing me — the invisible work, (b) the framework that fixed it — design in loops. They're at peak curiosity about the *how*. Subscribing unlocks the implementation specifics, the screenshots proving the ship, and the takeaway.

**Screenshot plan (Section 7):**
- Required: Landing page screenshot showing the three databases (this is the hero proof-point image)
- Recommended: SQL editor screenshot showing the working interface
- Optional: A specific query/result that demonstrates real usefulness (e.g., search across SG Government Newsrooms)

User will provide screenshots; markdown will use placeholder image references that map to actual files in the post folder before publishing.

**Note re Voice Guide:** Houfu's voice typically uses 0-1 images per article. This post intentionally exceeds that because the building-in-public format calls for visible evidence of the ship. Concentrating screenshots in Section 7 keeps the rest of the post prose-driven.

## Length target

~2200–2400 words (~9–10 min read). Slightly longer than Part 1 because there's more material; still tight.

## Voice notes (per Houfu Voice Guide)

- **Lane 2 template:** Learning in Public.
- **Open with feeling, not fact.** Need to lock the anchor moment with the user before drafting.
- **Specific numbers as anchors:** 1 source → 3 databases, 346 articles → live API, 21 tables, $110 domain renewal (from November). Use these in clusters.
- **Vulnerable admission early:** the cognitive load of solo building, the fact that the visible ship is the easy part.
- **"Neither is wrong" move:** for the OpenClaw / NanoClaw contrast. Soft, not adversarial.
- **Frameworks over advice:** the loops framework as portable takeaway.
- **Return to solo counsel reality:** at the close.
- **Self-callback:** to Part 1 OpenClaw Field Notes (the channel showpiece line) and to November Zeeker post (the "I'm not done" decision).

## What stays OUT

- Pat Veilleux callback (too sharp for the generous tone we're going for).
- NanoClaw feature deep-dive (this is a Zeeker post, not a tool review).
- Any "OpenClaw broke" or "OpenClaw was wrong" language.
- Detailed comparison tables.
- Pitch on which agent is "best" — there is no best, just shape-fit.

## Tags (locked)

**Final tags:** AI, LegalTech, zeeker, SoloBuilder, Singapore

**Rationale:**
- **AI** — Core Topic (required). Agent/workflow is central.
- **LegalTech** — Core Topic (second, allowed when both central). Zeeker IS legal tech.
- **zeeker** — Specialized. Anchors series (4th post in zeeker tag).
- **SoloBuilder** — Professional Topics. Captures identity/audience.
- **Singapore** — Regional. SG legal data; SG-named databases.

**Considered and skipped:** OpenSource (not the post's purpose), Programming (SoloBuilder + LegalTech cover this), CloudComputing (workflow-focused, not cloud), SOLID (too tangential), datasette (too narrow).

At 5 tags — registry maximum. Per registry: anti-pattern flagged at 6+ as "overly specific, dilutes discoverability."

## Outstanding before drafting

1. ~~**Anchor moment**~~ — ✅ Locked above.
2. ~~**Tag intent**~~ — ✅ Locked above.
3. **Light NanoClaw research** — user said "you should probably research a bit more later" — focused look at NanoClaw before drafting (what it is, who makes it, what it actually does) so the post can describe it accurately without becoming a tool review.
4. **Light research on the Discord-as-workflow angle** — community writing on agent + channel patterns, especially Singapore/ASEAN angle if it exists. Avoid overlapping with Part 1's stability research.

## Authenticity check (per generate_a_pitch skill)

For each claim in the pitch:

- **"Three databases now where there was one"** — ✅ Verified against live data.zeeker.sg.
- **"Cognitive overhead is the real solo builder tax"** — ✅ User's own articulation.
- **"Plan → Do → Feedback → Plan as a sustainable framework"** — ✅ User's own articulation ("design in loops").
- **"Discord as persistent queue that lets you switch off"** — ✅ User's own articulation.
- **"Different harnesses for different shapes of work"** — ✅ User's own articulation ("nanoclaw is doing an infrastructure project so it's not sufficient to use the openclaw which assumes more as a 'personal' project").
- **"Not true to the vision yet but I believe I can get there"** — ✅ User's own articulation, captured verbatim in opening framing.

All emotional content sourced from user's real experience. No invented vulnerability.
