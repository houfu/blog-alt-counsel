---
word_budget: 1800
budget_tolerance: 10
primary_audience: wei-lin
secondary_audience: [marcus]
thesis_keywords: ["coding agent", "lq-ai", "certification", "learning curve"]
protected_lines: []
voice: {lane: learning-in-public, moves: ["specific lived numbers", "one honest admission, stated once", "close on hope/appointment"]}
interrogation:
  diagnosis: "His framing: a mammoth job that truly benefits from a coding agent. Probed: the mammoth-ness is real in the data (374 PRs in ~3 months, huge docs, open backlog); the honest tension is that 'worth it' must survive the counterweights (agent at 0 stars, queue, displacement cost) — the post states them rather than hides them."
  differentiation: "Not another 'I built a coding agent' tutorial: the subject is choosing a mammoth on purpose — a lawyer pointing a fresh certification at a community-led legal AI product that doesn't exist anywhere else, and committing his year to it."
  framing_risk: "lq-ai/LegalQuants named positively (worth doing, community-led) — low risk. Contributor-concentration stats and the PR-burst contributor stay out of scope; SaifAlYounan never named (standing consent gate)."
  subject: "Checked against the 2026-08-04 verbatim: subject = his decision and commitment to build the agent for lq-ai. The pitch paragraph is that message, expanded. Not the tool's design (v6's failure), not the documents (v7's)."
must_link: ["lawyers-not-on-each-others-code", "the-unexpected-joys-of-open-source"]
tags: ["AI", "LegalTech", "OpenSource"]
target_date: ~
---

# Pitch: legal-oss-maintainer (rewrite)

## Original framing (verbatim, never edited)

> I've wanted to rewrite this article. The research is valuable but u don't think the others are

*(2026-08-04. Pitches v1–v7 and drafts 1–2 rejected wholesale; they live only in the history of branch `claude/legal-open-source-article-86vio3`. This pitch starts from zero; research.md is the only carried-over source.)*

## Emotional core (verbatim, 2026-08-04, never edited)

> fresh from getting my claude certification, i decided to build a coding agent for lq-ai. it's a mammoth job that would truly benefit from a coding agent -- huge docs, a focus on transparency and something cutting edge that doesn't exist today -- a truly community led product. it's been a tough learning curve, but i think it's worth doing it and i think i'm gonna focus on this for the rest of us

*Clarified same day: "for the rest of us" = typo for "for the rest of the year" — the commitment is time.*

**Title:** [deferred by Houfu 2026-08-04 — "lets think of it once we done the draft". Old title dropped.]
**Thesis:** The best use of a freshly certified skill is a project big enough to need it — and a truly community-led legal AI product, which doesn't exist anywhere else today, is worth the rest of his year.
**Spine:** It's been a tough learning curve, but it's worth doing — so I'm making it my focus for the rest of 2026.

## Pitch (approved 2026-08-04)

> At the start of July I passed Anthropic's architect certification. The first real thing I pointed it at wasn't a demo — it was somebody else's project. lq-ai is a community-led legal AI platform, barely three months old, and maintaining it is a mammoth job: the documentation is huge, the project's canon prizes transparency, and what it's trying to be — a truly community-led legal AI product — doesn't exist today. That's exactly the kind of job a coding agent is built for, so I built one. The learning curve has been rough. I threw my entire first build away on day two and kept only the spec. I had to ask what a canon map was. Twice I discovered I'd been careful about the wrong thing. But the agent now runs in production, signed, and it has already reviewed one of my own pull requests. This post is about picking a mammoth on purpose: why this project earned the skill I'd just certified, what the curve actually cost, and why I'm making it my focus for the rest of 2026.

## Beats (sum = 1,800)

- **The decision (~280).** Fresh from the cert, payoff stated early (this is my project for the rest of 2026). What lq-ai is, plainly.
- **Why this mammoth (~380).** A truly community-led legal AI product doesn't exist today; huge docs and a transparency canon; exactly the job a coding agent is for.
- **The learning curve (~450).** Day-2 reset (deleted everything except the spec); "what's a canon map"; twice careful about the wrong thing. One honest admission register, not a confession arc.
- **What it does now (~330).** In production, signed, reviewed his own PR; the block-writes hook blocking a live Claude session; counterweights stated (0 stars, open queue).
- **Worth it, and the commitment (~360).** Why the curve was the price and the project is worth it; solo-counsel return; close on the rest-of-year appointment — hope, not a kicker.

## Out of scope (named cuts — reviewer suggestions mapping here are declined by default)

- The contributor-concentration story (Kevin's 89%, the PR burst, SaifAlYounan — never named).
- The seven-repo governance measurement and the AI-vs-review-capacity thread (research §9) — a different post.
- Mike's day-90 arc.
- Stewardship as thesis (v6) and documents-as-thesis (v7). The corrections appear as learning-curve beats only.
- The agent's design internals (reversibility principle, finding contract) beyond what the learning curve needs.

## Verification notes

- Cert timing: CCA-F LinkedIn post live 2026-07-10; lq-maintainer-agent repo created 2026-07-10 — "fresh from" is literal.
- Verified in research.md: day-2 reset (§2), agent in production/signed/reviewed him (§8.5), 243-entry deferred backlog, lq-ai created 2026-05-08.
- "What's a canon map" + the 17 July correction: from the maintenance-log sweep recorded in pitch v7 (old branch, commit 93974a0) — re-verify quotes there at draft time.
- [UNVERIFIED] documentation size numbers (v7 claimed 94,678 lines / 255 files from a local repo read) — re-measure at draft time or stay qualitative.
- Sequencing note: the cert post (claude-architect-cert) is unpublished; "my certification" can't backlink to it yet. If it publishes first, add it to must_link.
