---
word_budget: 1800
budget_tolerance: 10
primary_audience: marcus
secondary_audience: [wei-lin]
thesis_keywords: ["environment", "Cowork", "risk tier", "skill"]
protected_lines: []
voice:
  lane: learning-in-public
  moves:
    - "flat interior opening, payoff stated early"
    - "specific lived numbers (31 skills, 14 probes, 0 live-tenant runs)"
    - "close on invitation — testers wanted, not a launch"
interrogation:
  diagnosis: "His framing: these five are admirable, and the distinguishing thing is *environment*. Probed — is environment really the separator, or just quality? The port is the honest test, and it partly contradicts the clean version: 14 of 31 skills had to be re-scoped with a stated risk tier, and read-redline ships probe-gated because it cannot confirm it sees tracked changes until P3 comes back. The post states that rather than hiding it; 'movable' is a spectrum, not a badge."
  differentiation: "This will always be 'another five-skills roundup' unless the author has standing no one else has. He does: he is the person who moved all thirty-one skills into a host that cannot run their scripts, so he knows which design decisions survived contact with a different environment. Not 'lawyers should build' — legal-oss-contribution owns that ground."
  framing_risk: "Jamie Tso and LegalQuants named positively; Houfu discloses in the post that he mentors in the LQ Residency, early and plainly. The Cowork bundles are declared an unofficial, unsupported adaptation. Criticism of Cowork stays factual and probe-anchored. No vendor is named in the vendor contrast."
  subject: "Original message subject = the five skills he admires, plus an invitation to try the Cowork plugins. The pitch keeps both: the five skills are the subject, the port is the evidence and the ask. Drift to watch: the port becoming the protagonist."
must_link:
  - so-you-want-to-claude-cowork-the-legal-plugin-a-guide
  - tool-vs-infrastructure-mindset
  - rugpulled-by-cowork
tags: ["LegalTech", "AI", "OpenSource", "MicrosoftOffice"]
target_date: ~
---

# Pitch: skills-that-travel

## Original framing (verbatim, never edited)

> I'm thinking of a post that says about the five LQ plugin skills I admire — legal design, redline review, wiki, pressure test and my LQ moment. I've also released the plugins for Cowork so you should give it a try

**Title:** Good Skills Know Where They Live
**Thesis:** A legal AI skill is not a clever prompt — it is an agreement with an environment, and the five I admire are the ones that make that agreement explicitly enough to survive being moved.
**Spine:** A skill that only runs in one host isn't a skill, it's a feature.
**Emotional core (user's words):** "In a builder and I build. So it was a moment with all these other lawyers and they were really high quality." [HOUFU: which room, roughly when — a residency call, a review, a demo? One concrete scene.]

## Pitch

I build things, so I am used to being the one building in the room. Then I spent time among other lawyers who build, and their work was better than I expected. Reading their skills closely, and then moving all thirty-one of them into Cowork — a host that works from your OneDrive and never says what a bundled script would run in — taught me what separates a good legal AI skill from a clever prompt. A skill is an agreement with an environment. It declares what it needs, it works where you already work, and it leaves behind artifacts you keep after the tool is gone. Five make that agreement unusually well: legaldesign, read-redline, wiki, pressuretest, and my-lq-moment. Each keeps its promise by refusing something. The port is the test, and it is not a clean pass: fourteen skills had to be re-scoped at a stated risk tier, and one ships announcing what it cannot yet confirm. The bundles are out — unofficial, and never run in a live tenant. I need testers.

## Beats

- **The room** (250w) — I build; a room of lawyers who build, at a quality that surprised me. Disclosure: I mentor in the LQ Residency. Payoff stated up front: what I learned is that the good ones know where they live.
- **The agreement** (250w) — What "environment" means, concretely: declares its dependencies, meets you in your own files, leaves artifacts you keep. Contrast with the vendor posture — the work lives in their vault and you visit.
- **The five** (700w, ~140 each) — One environment decision per skill: legaldesign's two structurally different approaches and exports that open anywhere; read-redline's calibrate-before-extract and the confirmed calibration written as an artifact, not a memory; wiki's "reusable law and method, never the matter", plain Markdown usable without a host; pressuretest's Resilience Brief as a full result; my-lq-moment's "borderline means not earned".
- **The port as test** (350w) — 31 skills, 3 bundles, 14 capability probes, no scripts shipped. What survived, what needed a risk tier, read-redline shipping probe-gated on P3. The honest counter-evidence to my own thesis.
- **Testers wanted** (250w) — For solo counsels: why an environment-aware skill matters when you have no IT department. Nothing has been run in a live tenant; I have no Copilot capacity. Install one, type five prompts, file the result.

## Out of scope

- Install walkthrough and screenshots — `so-you-want-to-claude-cowork-the-legal-plugin-a-guide` already owns it; link, don't repeat.
- Cowork vs Claude Code as a product comparison — `rugpulled-by-cowork` owns it.
- The other twenty-six skills, and any tour of the three bundles.
- LQ Residency mechanics, mentee work, or anything from a mentoring call.
- A tutorial on how to write your own skill. This post argues a standard; it does not teach authoring.
- Named vendor criticism. The vendor contrast stays structural.
