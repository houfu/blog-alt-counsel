---
title: "Good Skills Know Where They Live"
slug: "good-skills-know-where-they-live"
tags: ["LegalTech", "AI", "OpenSource", "MicrosoftOffice"]
status: draft
featured: false
github_folder: "skills-that-travel"
---

I build things. In most rooms I am in, that is my role — the one who has made the thing, or is about to.

Then I spent a stretch of this year around other lawyers who build. [HOUFU: the scene — which room, roughly when, and what you saw someone do that made you sit up.] The work was good. Not good-for-lawyers good. Specific in the way that only comes from someone who has actually done the job and been burned by it.

So I ran their skills on my own work. What I learnt wasn't that they were clever. Clever is cheap now. It was that the good ones know where they live.

Two disclosures first. I mentor in the LegalQuants Residency, so these are, in a real sense, my people. And I am the one who packaged these skills into Microsoft Cowork bundles — an unofficial adaptation nobody upstream asked for or supports. Discount the admiration accordingly, then read the specifics, because the specifics are checkable.

## What a skill is actually promising

A skill is a folder with a markdown file in it. You can read the whole thing in an afternoon, which is the part lawyers keep underestimating. There is no model inside, no service, no account.

Which means the interesting question is not whether a skill is smart. Any of us can write instructions that sound smart. The interesting question is what it assumes about the place it runs.

Three things separate the five I admire from the hundreds of prompt packs floating around LinkedIn. They declare what they need, so you can tell before you start whether it will work. They do the work where you already work, on the files you already have. And they leave behind artifacts that stay yours after the tool is gone.

That is an agreement with an environment, and most legal tech refuses to make it. The vendor posture is the opposite: the environment is theirs. You upload your documents into their system, do the work inside their interface, and the output lives in their database under their retention policy. It works, sometimes very well. But the arrangement is a tenancy. When the subscription ends, you do not take the room with you.

[Rugpulled by Cowork](https://www.alt-counsel.com/rugpulled-by-cowork/?ref=good-skills-know-where-they-live)

## Five that hold up their end

**read-redline** is the one I have run most, and the step that earns its place is the one before the work starts. It refuses to extract anything from a compare PDF until it has shown you the colour-to-role table and you have confirmed it — because, as the skill says plainly, a wrong role silently inverts every change. Then it writes that confirmation to disk as `calibration.confirmed.json`, hashed against the extract it approved. A confirmed calibration is an artifact, not a memory. A bare "continue" is not approval. Both the annotated copy and the issues list refuse to build without it. I have run it on my work laptop, which is the only honest test of any of this: a managed machine where I do not get to install what I like, and where the output has to be something a colleague can open. [HOUFU: one line on what the calibration table showed you — a colour you would have read backwards, or a confirmation that it was right.]

**wiki** draws a line I have not seen a vendor knowledge base draw: record reusable law and method, never the matter. No client facts, no party names, no matter numbers, not even matter-document titles. What you keep is the law you worked out and the method you used to work it out. It is ordinary markdown plus a small sidecar, readable in any editor and, in the skill's own words, useful without a particular host. If a registered wiki has moved, it tells you to reconnect it rather than quietly building a replacement — which is the behaviour of something that knows it is a guest on your disk.

**pressuretest** attacks a legal position against the documents you supply, and its design decision is what it does when the position survives. It hands back a Resilience Brief: the strongest supported route, plus a register of every attack it mounted and why each one failed. The skill states that this is not a lesser result, and that its job is to attack hard and adjudicate honestly, never to guarantee findings. A product built to always return something cannot say that. A null result looks like a broken feature when the environment is a subscription you have to justify.

**legaldesign** turns finished legal work into something a client can follow, and it is disciplined about what that means. Two approaches, and they must differ structurally — a different organising structure or reading path, not a cosmetic variation. No decorative eyebrow, no hero heading, no promotional copy. The output is one self-contained HTML file that opens in any browser with the editing intact, and the template export strips the matter out: descriptive placeholders, no private text, no source images, no matter-bearing metadata. You can hand the template to a colleague without handing over the client.

**my-lq-moment** is the odd one, and I have come around to it. It reviews the session you just had against a fixed rubric and tells you whether what you did was genuinely impressive. The design decision is the refusal: borderline means not earned, no credible receipt means no award, no participation trophies. It never publishes anything, ever. A celebration feature that can decline is making the same agreement as the other four — it treats you as part of the environment rather than a user to be retained.

## Then I moved all thirty-one into a house they were not built for

Reading a skill tells you what it claims. Moving it tells you what it needs.

Microsoft's Cowork works from your OneDrive rather than a local disk, and it does not document what environment a bundled script would run in. So the bundles ship no scripts at all. Every skill had to state what it actually depended on, and I had to decide, one by one, whether the promise survived without its machinery.

Thirty-one skills, three bundles, fourteen capability probes still waiting on answers from a live tenant.

Here is the part that complicates my own argument: fourteen of the thirty-one had to be adapted rather than ported, each with a stated risk tier saying how far its promise moved from the original. Eight were re-scoped so much that the description itself had to change. And `read-redline` — the skill I just praised for its calibration gate — ships probe-gated, announcing in its own reply that it cannot confirm it is able to see tracked changes until probe P3 comes back from a real tenant.

So no, these skills did not sail into a new environment untouched. That was never the claim. The claim is narrower and more useful: a skill that knows where it lives can tell you when it doesn't. Every one of those fourteen failed legibly — in a tier, in a card, in a sentence the lawyer reads before trusting the output. The alternative is the thing we have all used, which keeps working smoothly right up until it is confidently wrong about your redline.

[So you want to Claude Cowork the Legal Plugin?: A Guide](https://www.alt-counsel.com/so-you-want-to-claude-cowork-the-legal-plugin-a-guide/?ref=good-skills-know-where-they-live)

## For solo counsels, and an ask

If you have an IT department, environment is an abstraction. If you are the legal department, it is the whole game. It is a managed laptop you cannot install software on, a document store somebody else administers, and a licence renewal you find out about in an email. You are the person who discovers that the workspace you built your review process in has changed its pricing, or its retention, or its owner. Skills that keep the work in your own files and leave artifacts you can read without them are not a philosophical preference. They are the difference between switching tools and starting over.

Which brings me to the ask, and I would rather be plain about it than sell you something.

The three Cowork bundles are out at v0.2.0, and nothing in them has ever been run in a live Cowork tenant. Not one skill. My own Copilot access is sitting in billing limbo, so I cannot do it myself — which is a slightly humiliating thing to write under a post about knowing your environment.

You do not need admin rights or a terminal. Download one `.skill` file from the releases page, upload it in Cowork under Customize, then attach three short made-up documents that contradict each other and give it something to do. Never client material. Every skill has an open issue waiting for a result, and "it did nothing" is a useful answer.

[GitHub - houfu/lq-plugin-cowork: LegalQuants legal skills, adapted for Microsoft Cowork](https://github.com/houfu/lq-plugin-cowork)

The skills are Jamie Tso's and the community's, and the good decisions in them are theirs. What I did was carry them to a different house and write down what broke. If a few of you would try the door, we will find out whether they can actually live there.
