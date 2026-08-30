---
title: I'm the Official Cat Herder of a Legal AI Project
slug: official-cat-herder
custom_excerpt: >-
  A group of lawyers decided their open-source legal AI needed a review
  committee, and made me one of its founding members. I can't write the code.
  I'm herding these cats anyway — for the rest of 2026.
tags:
  - AI
  - LegalTech
  - OpenSource
status: published
featured: false
github_folder: legal-oss-maintainer
post_id: 6a6ac6b2e1ac4e0001e36a8f
published_at: '2026-08-06T01:00:52.000Z'
feature_image: >-
  https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDExfHxDYXR8ZW58MHx8fHwxNzg1OTE5MTM4fDA&ixlib=rb-4.1.0&q=80&w=2000
---

At the end of June, I joined a Sunday video call about [LQ.AI,](https://github.com/LegalQuants/lq-ai) an open-source legal AI platform that had appeared in the LegalQuants community seven weeks earlier and grown faster than anyone was ready for. By the end of the call I had a job. The group had decided the project needed a review committee — people who decide what gets merged into the code — and appointed me as one of its founding members. They also asked for something oddly specific: could someone build a coding agent to help review contributions against the principles the founder had written down?

I said yes to both, excited to get to work. What I didn't understand yet was the extent of the work. So let me be plain about the size of the yes: I'm going to spend the rest of 2026 on this project.

A week or so later I passed Anthropic's architect certification. The usual problem with a fresh certificate is finding something worth pointing it at. I didn't have that problem — the mandate was already sitting there, waiting for the skill. So the first real thing I pointed it at wasn't a demo or a portfolio piece. It was somebody else's codebase — one I can't write.

[Lawyers Are Building. Just Not On Each Other's Code.](https://www.alt-counsel.com/lawyers-not-on-each-others-code/?ref=official-cat-herder)

## I told them I wanted to be the cat herder

On those early calls I gave my role a name: **official cat herder**. A cat herder doesn't share the cats' interests. The cats write code or file ideas; the herder keeps the whole clowder moving in roughly the same direction without pretending to command anybody. I don't aspire to say I wrote LQ.AI. There are more ways to a sustainable open-source community than authoring its code.

The metaphor isn't even mine to be flippant with: there is a research study of open-source release management literally titled ["Herding Cats"](https://link.springer.com/article/10.1186/s13174-017-0063-2), and its finding is that volunteer ecosystems run on influence, not control.

It's a serious job wearing a flippant title. LQ.AI had several cool features, but it was deep, complex and free — both in terms of beer and freedom. In its own governance document's words, it "began as a founder-led project" that "has grown into a community effort carried by a committee of practicing lawyers and legal engineers." What it's trying to be — a truly community-led legal AI product — doesn't exist today. When I checked ten legal open-source repositories at the end of July, exactly one had published a governance document. This one.

![LQ.AI's home screen, self-hosted at 127.0.0.1 — featured tools including Skill Creator, Knowledge, Playbooks, Tabular Review and an opt-in Autonomous mode, under a banner confirming your data stays in your firm's stack.](https://storage.ghost.io/c/33/4e/334edc26-d66c-4112-a0d8-6528c3cd17c4/content/images/2026/08/lq-ai-home.jpg)

That writing-down is also why a non-coder can herd here at all. The docs folder alone holds 254 markdown files and 94,361 lines: 23 architecture decision records, and a requirements document that openly parks 244 ideas it hasn't built yet. Reading is the part of the job I was already qualified for.

And the group had asked for a tool. So I put the fresh certification to work and built the coding agent they wanted: a Claude Code plugin that holds every incoming contribution against the project's own written decisions — and hands me the judgment call.

[GitHub - houfu/lq-maintainer-agent: Claude Code plugin that helps lq-ai maintainers triage PRs and issues — lanes, salvage, and Triage Receipts. The agent recommends; a human decides, every time.](https://github.com/houfu/lq-maintainer-agent)

## The learning curve was rough

Two days in, I wasn't happy with anything the first version produced, so I told the session: create a branch and delete everything except the PRD. I threw away my entire first build and kept the specification. The day after, I ran the rebuilt version on a real pull request and wrote this in the log: *"i ran it on a PR. i... feel stressed looking at this. Way too technical for a lawyer."*

The HTML explainer deck the agent now produces — the most useful thing it makes — exists because the maintainer couldn't read the maintainer tool.

![The agent's explainer deck for a real pull request — verdict Ready to merge, a note that a maintainer makes the merge click, an if-this-turns-out-wrong box describing what a revert leaves behind, and counters for the safety gate and findings.](https://storage.ghost.io/c/33/4e/334edc26-d66c-4112-a0d8-6528c3cd17c4/content/images/2026/08/deck-401-top-1.jpg)

In the same stretch I asked my own tool, in all sincerity, "What's a canon map." It had invented a term and I was its first confused user.

Twice I found out I'd been careful about the wrong thing. In mid-July the agent kept telling me to escalate architectural questions for human discussion, until I pushed back: weren't there already decisions on file that narrow the uncertainty? The ADRs had settled questions I was still treating as open. Escalating them wasn't caution; it was a failure to read.

Then at the end of July I caught the deeper version of the same mistake. Three weeks of real contributions had arrived and not one was malicious. Most were small. And my agent was still slow, and fond of recommending inaction — because I had tuned it for a threat that never showed up. I had been terrified of coding in this big, foreign codebase, and I had built that fear into software. So I asked the agent, in writing, how it could support my weaknesses without making me afraid to go ahead, and rebuilding it around that question became the biggest redesign of the tool so far.

## The agent recommends; I decide, every time

By late July the tool was working in the open under its own name:

- Its reviews are posted with the footer "Drafted by lq-maintainer-agent; reviewed and posted by @houfu."
- The strangest one is the review it filed on my own pull request — a dependency-lockfile change, by far the largest change I've made to the repo. It verified that all 304 packages resolve with full hash coverage, flagged two pinned libraries carrying security advisories with no clean upgrade path, and ended with: "over to you — land the lock now and track the upgrades, or hold until they can move together."
- The rule — recommend, never decide — isn't a sentence in a prompt; it's a mechanical hook that blocks any Claude session from touching the merge button. The hook has fired on the sessions researching this post, twice.
- The tool and the governance work are one pipeline, not two projects: when a contribution raises a question the canon hasn't answered, the agent drafts the decision record for the committee to discuss — escalation produces a document, not a delay.

![The deck's decision card — nothing blocks merging, undoable with a leftover — followed by a record of what the maintainer decided, with a note that the ruling is the maintainer's and the agent only recorded it.](https://storage.ghost.io/c/33/4e/334edc26-d66c-4112-a0d8-6528c3cd17c4/content/images/2026/08/deck-401-decision-1.jpg)

The repo's first formal approvals in its history are mine, from late July. A review loop that had never once closed in nearly 400 pull requests now closes routinely: one contributor's security fixes produced five reviewed merges over nine days, two of them full ask-and-fix cycles. The last took two rounds before I approved it on 3 August. I still can't read every line of those diffs. I can read whether a change honours the decisions the project already made — and ask for the test that settles what I can't verify myself.

Honesty requires the other column. The agent has zero stars; nobody is watching. The lq-ai repo has 73 open pull requests and hasn't shipped a release since 4 July.

## What the rest of the year looks like

So why commit a year to this? Because the hard part already exists: a project that writes down its decisions, and a community that wants to carry it. When I proposed an architecture decision on how contributions get routed, a former in-house litigator commented in support and another member reviewed it point by point — non-coders, participating in decisions. What was missing on that Sunday call was somebody with the nerve to press Approve.

The plan for the rest of 2026 is concrete: ship the project's first committee-era release — version 0.7.0 is imminent; grow the review committee from one founding member into an actual group; keep evolving the agent as the job teaches it; and stand up a documentation site so that people who don't code can find their way in.

The cost is also concrete: about an hour a day. It comes out of my own projects, and out of this blog — which is part of why this post took longer to arrive than I'd like.

For solo counsels and small teams, here's the practical read: the free tools standing between you and a five-figure platform bill survive only if somebody does this unglamorous job, and the somebody doesn't have to be the person who wrote the code. Its core skills — close reading, and pricing what can't be undone — are ones lawyers already bill for. If you want to know whether a free tool you depend on could take this kind of help, open its docs folder. If there's nothing to read, that's your answer.

[The Unexpected Joys of Open Source](https://www.alt-counsel.com/the-unexpected-joys-of-open-source/?ref=official-cat-herder)

The number I'm watching is that hour a day. If the herding works, it should start to fall. Ask me in December. I hope to have company by then.
