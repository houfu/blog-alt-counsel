---
title: I'm the Official Cat Herder of a Legal AI Project
slug: working-on-each-others-code
custom_excerpt: >-
  A committee of lawyers appointed me to review code I can't write. The project
  had written itself down, and that turned out to be enough. I'm herding these
  cats for the rest of 2026.
tags:
  - AI
  - LegalTech
  - OpenSource
status: draft
featured: false
github_folder: legal-oss-maintainer
post_id: 6a6ac6b2e1ac4e0001e36a8f
---

At the end of June, I joined a Sunday video call about lq-ai, an open-source legal AI platform that had appeared in the LegalQuants community seven weeks earlier and grown faster than anyone was ready for. By the end of the call I had a job. The group had decided the project needed a review committee — people who decide what gets merged into the code — and appointed me its founding member. They also asked for something oddly specific: could someone build a coding agent to help review contributions against the principles the founder had written down?

I said yes to both, and I want to be plain about the size of the yes: I'm going to spend the rest of 2026 on this project.

A week or so later I passed Anthropic's architect certification. The first real thing I pointed it at wasn't a demo or a portfolio piece. It was somebody else's codebase — one I can't write.

[I Said Lawyers Don't Work on Each Other's Code](https://www.alt-counsel.com/lawyers-not-on-each-others-code/?ref=working-on-each-others-code)

## I told them I wanted to be the cat herder

On those early calls I gave my role a name: **official cat herder**. A cat herder isn't interested in what the cats are interested in. The cats write code or file ideas; the herder keeps the whole clowder moving in roughly the same direction without pretending to command anybody. I don't aspire to say I wrote lq-ai. There are more ways to a sustainable open-source community than authoring its code.

It's a serious job wearing a flippant title. LQ.AI had several cool features, but it was deep, complex and free — both in terms of beer and freedom. It was born in May 2026 and, in its own governance document's words, "began as a founder-led project" that "has grown into a community effort carried by a committee of practicing lawyers and legal engineers." What it's trying to be — a truly community-led legal AI product — doesn't exist today. When I checked ten legal open-source repositories at the end of July, exactly one had published a governance document. This one.

That writing-down is also why a non-coder can herd here at all. The docs folder alone holds 254 markdown files and 94,361 lines: 23 architecture decision records, and a requirements document that openly parks 244 ideas it hasn't built yet. Reading is the part of the job I was already qualified for.

And the group had asked for a tool. So I put the fresh certification to work and built the coding agent they wanted: a Claude Code plugin that holds every incoming contribution against the project's own written decisions — and hands me the judgment call.

[lq-maintainer-agent on GitHub](https://github.com/houfu/lq-maintainer-agent)

## The learning curve was rough

Two days in, I wasn't happy with anything the first version produced, so I told the session: create a branch and delete everything except the PRD. I threw away my entire first build and kept the specification. The day after, I ran the rebuilt version on a real pull request and wrote this in the log:

> "i ran it on a PR. i... feel stressed looking at this. Way too technical for a lawyer."

The HTML explainer deck the agent now produces — the most useful thing it makes — exists because the maintainer couldn't read the maintainer tool. In the same stretch I asked my own tool, in all sincerity, "What's a canon map." It had invented a term and I was its first confused user.

Twice I found out I'd been careful about the wrong thing. In mid-July the agent kept telling me to escalate architectural questions for human discussion, until I pushed back: weren't there already decisions on file that narrow the uncertainty? The ADRs had settled questions I was still treating as open. Escalating them wasn't caution; it was a failure to read. Then at the end of July I caught the deeper version of the same mistake. Three weeks of real contributions had arrived and not one was malicious. Most were small. And my agent was still slow, and fond of recommending inaction — because I had tuned it for a threat that never showed up. I had been terrified of coding in this big, foreign codebase, and I had built that fear into software. So I asked the agent, in writing, how it could support my weaknesses without making me afraid to go ahead, and rebuilding it around that question became the biggest redesign of the tool so far.

## The agent recommends; I decide, every time

By late July the tool was working in the open under its own name: its reviews are posted with the footer "Drafted by lq-maintainer-agent; reviewed and posted by @houfu." The strangest one is the review it filed on my own pull request — a dependency-lockfile change, by far the largest change I've made to the repo. It verified that all 304 packages resolve with full hash coverage, flagged two pinned libraries carrying security advisories with no clean upgrade path, and ended with: over to you — land the lock now and track the upgrades, or hold until they can move together. It recommends; it never decides. And that rule isn't a sentence in a prompt; it's a mechanical hook that blocks any Claude session from touching the merge button. The hook has fired on the sessions researching this post, twice.

The repo's first formal approvals in its history are mine, from late July. A review loop that had never once closed in nearly 400 pull requests now closes routinely: one contributor's security fixes produced five reviewed merges over nine days, two of them full ask-and-fix cycles. The last took two rounds before I approved it on 3 August. I still can't read every line of those diffs. I can read whether a change honours the decisions the project already made — and ask for the test that settles what I can't verify myself.

Honesty requires the other column. The agent has zero stars; nobody is watching. lq-ai has 73 open pull requests and hasn't shipped a release since 4 July. And every merge since mid-July has been mine.

## What the rest of the year looks like

So why commit a year to this? Because the hard part already exists: a project that writes down its decisions, and a community that wants to carry it. When I proposed an architecture decision on how contributions get routed, a former in-house litigator commented in support and another member reviewed it point by point — non-coders, participating in decisions. What was missing on that Sunday call was somebody with the nerve to press Approve.

The plan for the rest of 2026 is concrete: ship the project's first committee-era release — version 0.7.0 is imminent, and the release-process ADR is mine; grow the review committee from one founding member into an actual group; keep evolving the agent as the job teaches it; and stand up a documentation site so that people who don't code can find their way in.

The cost is also concrete: about an hour a day. It comes out of my own projects, and out of this blog — which is part of why this post took longer to arrive than I'd like.

For solo counsels and small teams, here's the practical read: the free tools standing between you and a five-figure platform bill survive only if somebody does this unglamorous job, and the somebody doesn't have to be the person who wrote the code. Its core skills — close reading, and pricing what can't be undone — are ones lawyers already bill for.

[The Unexpected Joys of Open Source](https://www.alt-counsel.com/the-unexpected-joys-of-open-source/?ref=working-on-each-others-code)

The number I'm watching is that hour a day. If the herding works, it should start to fall. Ask me in December. I hope to have company by then.
