# Pitch: legal-oss-contribution (2-parter)

## Working title (Part 1)

**Lawyers Are Building. Just Not On Each Other's Code.**

(Subtitle option: "Part 1 — What Mike, Harvey, and the rest of us reveal about legal-tech 'open source.'")

## Pitch — Part 1 (single paragraph, ~190 words)

I run AI workshops for legal counsels and the moments I love most are when someone goes from "this seems risky" to "wait — I could build this myself." They start with prompts, chain them, sketch a tool for their team. I see a community starting. Then I open my own GitHub. My last merged pull request to someone else's legal-OSS repo was a docs typo on Docassemble — in 2019. I run a Python library with 156 stars and 220,000 monthly downloads. By the modest standards of legal open-source, I'm one of the lawyers who actually ships and maintains a project. I haven't pushed code to a peer's legal-OSS repo in nearly two years. Mike — the most viral legal-AI launch in recent memory — has 2,395 stars in nine days and zero merged pull requests. Of nine GitHub handles I audited from the LegalQuants directory and known active veterans, zero have a merged PR to a peer's legal-OSS repo in twelve months. Harvey's flagship benchmark, after nineteen months, has one merged PR — from staff. The OSI has a phrase for this. This is Part 1 of two: the diagnosis, the data, and what we lose if we keep calling this open source.

## Pitch — Part 2 (one-line preview)

> Part 2: What the legal-OSS projects that did build community actually do, and how much of it is hours of work, not years.

## Why this post earns its space

- **Genuine experience anchors it.** The workshop gratification is real, observable, repeated. The 23-month personal contribution gap is documented data, not speculation.
- **Documentary register, not callout.** Houfu is part of the community he's describing. Individual indictments stay collective ("the well-known legal-tech voices," "the LegalQuants founder's own repo," "Hacker News commenters"). Public protagonists who already wrote their own pieces (Will Chen, Tauberer, Whelan, Kuhn, DeVault) are named.
- **The data is the strongest asset.** This piece foregrounds the empirical anchor with graphs and statistics — not just prose claims. The 9-handle audit, the LegalQuants 1-of-110, the fork distribution, Harvey's 1-of-1-staff-PR over 19 months: all visualizable.
- **Stakes are explicit.** Part 1 ends with "why open source matters for solo counsels" — the workshop counsels need somewhere to go after they "get it"; the $50 alternative to $50K vendors requires sustained community; vendor independence and cumulative knowledge depend on contribution culture compounding rather than evaporating.
- **Builds on prior work, doesn't repeat it.** January 2026's "I Build Infrastructure. Jamie Vibe Codes Tools." argued vibe coding was fine for disposable internal tools but sustainability matters for community-serving OSS. This piece picks up there: what happens when vibe-coded tools get marketed as community-serving but lack the infrastructure for community.

## Structure intent — Part 1 (~3,000 words / 13-14 min)

> **Amended 2026-05-10** — original structure (8 sections, 3,150w) was reconciled with the actual draft after content audit. Audit-flagged sections that the user chose to drop are noted inline. The original structure is preserved below this section for audit trail.

The flow is linear and builds: specific case → field-wide picture → people-level picture → what graduation looks like → explanation → stakes.

1. **Opening — workshop floor → personal data gap** (~300w)
   - Workshop scene + the "they get it" moment
   - `redlines` as personal anchor, then the **2019 docs-typo to `docassemble`** admission as the vulnerable hook (the contribution gap that anchors the post)
   - Pivot: lawyer-coders need community → resolves into the Mike case
2. **Mike, in nine days** (~400w) — what Mike is, launch hype, day-9 metrics (2,395 stars, 3 merged PRs), the fork mosaic (87/100 byte-identical, 28% fork-to-star ratio)
3. **The shape across the field** (~500w)
   - Harvey `biglaw-bench` + LAB as the same shape at $11B scale
   - Forest PNG (7-project crown/roots comparison)
   - OSI "Open Source theatre" quote (October 2025 *Maintainers* book)
   - **Dropped vs original pitch:** Hacker News reception block (pile-on risk); Thorne 2009 / Kuhn / DeVault attributions (political detour)
4. **And the lawyer-coders themselves** (~400w)
   - **LegalQuants directory: 1 of 101 audited members clears the bar** (≥100 stars, multiple contributors, ongoing releases). The one is `redlines` — Houfu's own. Awkward but honest.
   - Caveat: many LQ members are recent arrivals to coding, often via AI tools. The chart shows "where a community of new coders, learning in public, stands today" — not "why aren't lawyer-coders contributing"
   - 93-handle PR audit + beeswarm
   - "Federation of solo-author archipelagos"
   - **Dropped vs original pitch:** Tauberer 2018 milestone, Suffolk LIT AssemblyLine 95/5
5. **What makes a project graduate from demo to codebase** (~350w) — *new section, not in original pitch*
   - Author vs maintainer leap: most coders releasing a first project don't realise how different the two roles are. Maintainer work is unpaid, often thankless.
   - **Will Chen's own ambiguity** — open licence question, contribution model unsettled. Framed charitably as "the maintainer work, done in public" (fairness anchor; replaces the "criticisms" section)
   - `docassemble` + `courtlistener` as positive examples; Pyle's 10-year service award
6. **Why this might be happening** (~400w) — confidentiality, UPL (ABA admission), employer IP restrictions, Caliper findings (lawyer dispositional traits), personal `redlines` frustration as supporting honest moment
7. **Why this matters for solo counsels** (~250w) — single focused stake: lawyer-coder skill development through community. Reading code, getting reviewed, learning conventions only happen in community. **Dropped vs original pitch:** the comprehensive 6-stake list (vendor abandonment, $50/$50K, cumulative knowledge, audit, etc.) — user chose tight focus over breadth
8. **Close + hook to Part 2** (~150w) — Part 2 will show what `docassemble`/`courtlistener` do differently and what `redlines` reveals about the work. *"I starred Mike on day two. Like everyone else."*

---

### Original structure (pre-amendment) — preserved for audit trail

Original target ~3,150w. Sections matched the structure in `discussion.md` rounds 1-3. Reconciled 2026-05-10 after content audit revealed pitch sections 3 (criticisms) and 4 (full LegalQuants + Tauberer + AssemblyLine) absent or compressed in draft, and an unplanned "What makes a project graduate" section present. User accepted draft direction on most divergences and asked for three additions: 2019 docs-typo gap to opening (#7); Will Chen ambiguity moved into "graduate" section (#2); LegalQuants 1-of-101 with new-coder caveat surfaced in lawyer-coder section (#3).

## Suggested visualizations / images

To deliver on "with graphs and statistics," candidate visuals:

1. **Stars-to-merged-PR ratio across legal OSS projects** — horizontal bar chart. Mike (2,395 / 0), Harvey biglaw-bench (143 / 1), Tabular_Review (52 / 2), redlines (156 / 37), Docassemble (941 / 452), CourtListener (911 / 2,786). Visually shows the inverted profiles.
2. **Mike's fork distribution** — pie or bar: 91 zero-commits-ahead / 4 with 1-9 / 4 with 10+ / 1 diverged. Punchline: "the forks aren't community formation."
3. **The 9-handle audit summary** — a simple table-as-image: handles down the side, columns for "Lifetime PRs," "Non-self merged," "Non-self merged in last 12 months." Visual emphasis on the column of zeros.
4. **Optional: lawyersongithub timeline** — 40 members accumulated over 15 years, contrasted with one quarter of redlines' contributor growth.

## Structure intent — Part 2 (~1,500 words / 7 min)

Drafted later, after Part 1 publishes:

1. **Re-anchor in Part 1 diagnosis** (~200w)
2. **What Free Law Project does** (~450w) — every-issue-assigned, per-court Juriscraper modules, conventional commits, segmented volunteer page, 501(c)(3)
3. **What Docassemble does** (~300w) — package-vs-core split, off-GitHub front door, Slack-first, named tutorial authors
4. **OpenSALT counter-example** (~100w) — governance ≠ open contribution path
5. **Tomorrow / quarter / years framework** (~350w) — the most actionable layer; "Mike's release failed on the tomorrow column, not the years column"
6. **Close + invitation** (~200w) — workshop counsel callback, personal commitment ("I'm starting with redlines: a curated good first issue label, a named human in the README, one outbound contribution")

## Naming discipline (from user direction)

| Named individually | Collective only |
|---|---|
| Will Chen (public interview, founder) | Active veteran lawyer-coders |
| Joshua Tauberer (wrote his own piece in Ars Technica) | LegalQuants members beyond the founder |
| Bradley Kuhn / Drew DeVault / Michelle Thorne (OSS commentators) | HN commenters (no handles) |
| Mike Whelan (wrote the imposter-syndrome piece himself) | Dormant lawyer-coder accounts |
| Larry Richard (cited researcher) | Specific Mike fork owners |
| Quinten Steenhuis (when AssemblyLine is named in Part 2) | LegalQuants founder by name (refer as "the LegalQuants founder's own repo") |

## Tag candidates

- **LegalTech** (Core Topic, required)
- **Programming** (Core Topic)
- **AI** (Mike/Harvey are AI launches; Core Topic)
- **OpenSource** — flagged for user confirmation (per memory: "OpenSource needs actual code"; this post is *about* OSS rather than shipping it)

## Voice template fit

Lane 2 ("Learning in Public") per Voice Guide Part 4:
- Personal feeling + vulnerable admission opening
- Specific numbers grounding the situation
- "Neither is wrong" pivot (workshop energy is real, contribution culture is empty)
- Framework section moves to Part 2; Part 1 closes with stakes + transition
- Uncomfortable admission about gaps (Houfu's own 23-month gap throughout)
- Return to solo counsel reality (Section 7 stakes + Section 8 close)
- Closing: invitation to Part 2, not lament
