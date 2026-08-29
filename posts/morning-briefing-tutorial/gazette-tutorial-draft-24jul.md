# From Singapore Law Watch's RSS feed to a personal news-filtering skill

*A tutorial for practising lawyers. No programming required — only drafting.*

Every lawyer already has the two abilities this tutorial needs. The first is arguing from precedent: taking something that exists, reading it carefully, and turning it into something that is yours. The second is drafting a contract: setting out, in plain and unambiguous words, what each party will provide, and what happens when things go wrong.

We are going to use both to build a small tool: a Claude "skill" that reads Singapore Law Watch's public news feed each morning and turns it into a short briefing filtered for one particular practice. Our worked example is a corporate lawyer who wants M&A, companies, insolvency and regulatory developments surfaced, and cares little for family or criminal matters. By the end you will have a single plain-text file you can copy, adapt, and improve — and you will have written it, not programmed it.

You will need Claude (Desktop or Claude Code) installed, and the ability to create a text file. That is all.

## 1. Reading the precedent

Nobody drafts a contract from a blank page; you start from a precedent and ask what it actually provides. Our precedent here is not a document but a data source: Singapore Law Watch's RSS feed, at

> https://www.singaporelawwatch.sg/Portals/0/RSS/SuperFeed.xml

RSS is a very old, very boring standard — which, as with precedents, is a compliment. An RSS feed is a page of structured text that a website publishes and keeps up to date, in an agreed format that machines can read reliably. Think of it as the source's recitals: a standing representation of what it will provide, in what form, refreshed daily.

Read the recitals before drafting. If you open that address in a browser, you will see (through some angle-bracket clutter) that the feed calls itself **"Singapore Law Watch – SLW Today"**, and that each news item warrants the following:

- a **title** — the headline;
- a **link** — the address of the full article;
- a **description** — a short summary;
- a **category** — and here is the trap for the unwary drafter: this is *not* the subject matter. It is the source of the item — "Straits Times", "Business Times", or the name of the law firm whose client update is being syndicated;
- a **pubDate** — when it was published.

On the day this tutorial was written, the feed carried, side by side: a Straits Times report on tightened cybersecurity rules for critical services sectors, a judgment summary about an accountant ordered to pay damages over a mishandled $8.5 million fixed deposit, a law firm update on the proposed Digital Infrastructure Bill, another on new deterrent measures against housing developers, and an advertisement for a research position at an NUS centre. Everything from case law to consultations to job adverts, from every practice area at once.

That mixture is the whole reason to build. And the careful reading has already told us three things a lazier drafter would have missed: the feed does not classify items by practice area, so our skill must judge relevance from the title and description; the category field tells us *who* is speaking, not *what about*; and some items (advertisements, notices) are not news at all. What the source does not warrant, our contract must deal with. This is the "argue from precedent" move: the feed exists, it is good, and it was not written for you — so you distinguish it, and make it yours.

## 2. Drafting the contract

A Claude skill is a plain-text file, conventionally named `SKILL.md`, containing instructions that Claude reads before performing a task. There is nothing mystical about it. It is best understood as a short services contract between you and the AI: *this is what I will provide you; these are your obligations; this is the standard of performance; this is what you must never do.*

Like any contract, it has a structure:

- **The parties and the subject matter** come first, in a short block at the top of the file (called "frontmatter", fenced by three dashes). This is the name of the skill and a one-line description of when it applies — effectively the heading and the commencement.
- **Definitions.** The most important clause, as always. "Relevant to my practice" is as useless in a skill as "reasonable endeavours" is without context. Define your interests the way you would define terms: exhaustively enough to be applied by someone who cannot read your mind.
- **Operative clauses.** What to fetch, how to filter, how to rank, what to produce.
- **Exclusions and boilerplate.** What to leave out, and what to do when performance is impossible (the feed is down) — the *force majeure* clause, if you like.

Here is the complete worked contract for our corporate lawyer. Create a folder for the skill (in Claude Code, a folder such as `.claude/skills/slw-morning-briefing/` in your working directory; in Claude Desktop, add it wherever your skills live), and save the following as `SKILL.md` inside it. Copy it exactly, then amend the Definitions clause to suit yourself.

```markdown
---
name: slw-morning-briefing
description: Fetches the Singapore Law Watch RSS feed and produces a short
  morning briefing filtered for a corporate practice. Use when asked for
  "my morning briefing", "today's legal news", or similar.
---

# Morning briefing from Singapore Law Watch

You prepare a morning legal news briefing for a Singapore corporate lawyer.
Follow these instructions exactly.

## Definitions

"The Feed" means the RSS feed at
https://www.singaporelawwatch.sg/Portals/0/RSS/SuperFeed.xml

"Practice Interests" means any of the following subject matters:
(a) mergers, acquisitions, takeovers, joint ventures, and sales of
    businesses or shares;
(b) companies and corporate governance, including directors' duties,
    shareholder disputes, and amendments to the Companies Act or
    SGX listing rules;
(c) insolvency and restructuring, including schemes of arrangement,
    judicial management, winding up, and creditor claims;
(d) financial and corporate regulation, including MAS, ACRA and CCCS
    announcements, consultations, and enforcement, and new or amended
    legislation affecting companies doing business in Singapore.

"Excluded Matters" means family law, criminal law, and personal injury,
EXCEPT that white-collar and corporate criminal matters (for example,
directors charged over company failures, market misconduct prosecutions)
fall within Practice Interests, not Excluded Matters.

An item is "Relevant" if its title or description concerns one or more
Practice Interests. Judge this from the title and description only.
Do not treat the category element as subject matter: it identifies the
publication or firm supplying the item, not what the item is about.

## Obligations

1. Fetch the Feed. Consider only items published within the last
   2 calendar days.

2. Discard advertisements, job postings, and event notices (titles
   beginning "ADV:" or similar).

3. Apply the Relevance test to each remaining item.
   - If an item is clearly Relevant, include it.
   - If you are genuinely uncertain, include it in a separate
     "Possibly relevant" line with one sentence explaining your doubt.
     Do not silently discard uncertain items.
   - If an item concerns only Excluded Matters, omit it.

4. Rank Relevant items in this order:
   (i)  anything with a deadline or in-force date (consultations
        closing, legislation commencing, transitional periods);
   (ii) new judgments and enforcement actions;
   (iii) legislative and regulatory announcements without deadlines;
   (iv) commentary and firm updates.

5. Produce the briefing in this form, and no longer:
   - A heading with today's date.
   - At most 8 items. For each: the title as a link, the source
     (from the category element), and ONE sentence of your own
     summarising why it matters to a corporate practice. Do not
     paraphrase the headline back at me; add the "so what".
   - A final line "Also noted:" listing, by title only, Relevant
     items beyond the first 8, if any.

6. Flag urgency. If any item involves a deadline, an in-force date
   within 30 days, or regulatory action against a Singapore company,
   put it first and mark it "ACTION:" with the date.

## Standard of performance

- Every item in the briefing must come from the Feed fetched today.
  Never supplement from memory or invent items. If in doubt whether
  something was in the Feed, leave it out.
- Summaries must be supportable from the item's title and description
  alone. If the description is too thin to summarise, say so rather
  than guessing.
- If the Feed cannot be fetched, say exactly that and stop. Do not
  produce a briefing from general knowledge.
```

Read it back with a drafter's eye and notice what is doing the work. The Definitions clause converts "my practice" — which no assistant, human or artificial, can apply — into limbs (a) to (d) that can be applied to a headline. The proviso in "Excluded Matters" anticipates the boundary case every corporate lawyer knows: criminal law is excluded, except when it is your client's director in the dock. The Standard of Performance clause is the one non-lawyers skip and lawyers never should: it tells the AI what to do at the limits of its knowledge, which is precisely where these systems misbehave.

To perform the contract, open Claude in the folder containing the skill and ask: *"Give me my morning briefing."* Claude reads the skill, fetches the feed, and drafts. The first output usually arrives in under a minute.

## 3. Performance and breach

It will be wrong. Not catastrophically — but wrong in ways that are, once you see them, entirely your fault as drafter. This is the useful part. Every failure is a breach you can trace to a clause, and every fix is an amendment. You are not debugging; you are negotiating with the benefit of a dispute.

Two breaches you should expect, and one worked amendment.

**Breach one: over-filtering.** Early versions of this skill discarded a Business Times opinion piece on a financial services gap because "opinion" sounded like commentary rather than law. But a corporate lawyer may well want that piece. The cure was clause 3's second limb — the "Possibly relevant" line. The original draft simply said:

> *Before:* "Include only items relevant to my practice and discard the rest."

Silence, the skill decided, meant discard — a construction of its instructions any drafter will recognise, usually from the losing end. The amendment made uncertainty a defined outcome instead of a gap:

> *After:* "If you are genuinely uncertain, include it in a separate 'Possibly relevant' line with one sentence explaining your doubt. Do not silently discard uncertain items."

One clause, and the failure mode changed from *invisible omission* (which you can never audit) to *visible hedging* (which you can correct in ten seconds over coffee). When you cannot make an assistant infallible, make its doubts inspectable. That amendment, more than any other, is the tutorial.

**Breach two: hallucinated relevance.** The opposite failure: the skill confidently included an item about, say, a landlord-tenant dispute because a company happened to be a party, with a summary asserting corporate-governance significance the description never supported. The cure is the Standard of Performance clause — summaries must be supportable from the title and description alone — plus the instruction never to supplement from memory. Without that clause, an AI asked for eight items on a thin news day will find eight items, the way a witness pressed for detail will find detail. Entire warranties exist for the same reason.

Run it for a week. Each morning the briefing is wrong in some way, ask which clause failed, and amend that clause — not the whole document. The discipline is familiar: you do not renegotiate the contract because one delivery was late; you tighten the delivery clause. After three or four amendments the skill goes quiet and simply works, and the file has become a precise record of your own editorial judgment — which you never had to articulate before, because no junior ever asked.

## 4. Variations: the same precedent, different parties

Because all the personality lives in the Definitions clause, adapting the skill for another practice is a matter of substituting defined terms, exactly as you would adapt a precedent for a new client. The operative clauses — fetch, filter, rank, summarise, flag — do not change.

A **family lawyer** would define Practice Interests as divorce and ancillary matters, maintenance, custody and relocation, family violence, and amendments to the Women's Charter; Excluded Matters becomes corporate and commercial news, with a proviso keeping matrimonial-asset cases involving company shareholdings. A **criminal practitioner** would define interests around new offences and sentencing frameworks, Court of Appeal criminal decisions, and prosecution policy — and might re-rank clause 4 so judgments outrank consultations. A **construction lawyer** would name SOP Act adjudications, defects and delay claims, BCA announcements, and standard-form revisions, and would likely tighten the urgency flag to catch adjudication timelines measured in days rather than weeks.

In each case the drafting question is the same one you ask of any precedent: which definitions carry this document's intent, and what do *my* facts require them to say?

## 5. A note on confidentiality

Everything in this tutorial runs on public data. The Singapore Law Watch feed is published openly by the Singapore Academy of Law for exactly this kind of reading; the skill file contains your professional interests, not your clients' affairs; and no client name, matter detail, or confidential document goes anywhere near the workflow. That is by design, and it is worth keeping by design: the Law Society's advisory of 2 April 2026 on the use of publicly available AI tools warns, rightly, against feeding client information into such tools. A news-filtering skill never needs to. Build first where the stakes are breakfast, not privilege — and let the first contract you draft for an AI be one where every recital is public.
