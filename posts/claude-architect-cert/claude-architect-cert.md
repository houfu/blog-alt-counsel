---
title: "Every Answer Was Correct. That's What Made It Hard."
slug: every-answer-was-correct
tags:
  - AI
  - Training
  - SoloBuilder
  - Singapore
status: draft
featured: false
github_folder: claude-architect-cert
custom_excerpt: >-
  I passed Anthropic's Claude Certified Architect exam and I'm probably the first
  lawyer in Singapore to hold it. Then I wondered if I could even put it on my CV.
  The exam was hard because every answer was correct — and the gaps it found were
  my builder habits, not my knowledge. Build first. Certify after.
---

Every answer in the exam was correct. That's what made it hard.

Last week I passed Anthropic's Claude Certified Architect – Foundations exam. As far as I can tell, I'm the first lawyer in Singapore to hold it. (If I'm wrong, say hi — we should talk.) It sounds like something to be proud of.

The quieter thought arrived right after: *can I even put this on my CV? Does the job it points to even exist here?*

I'll get to that doubt, because it's real and I haven't resolved it. But first I want to tell you about the exam itself, because it surprised me — and because what it found in me wasn't what I expected.

## The Kind of Question That Has No Wrong Answer

Let me show you the shape of it. Not a real question — the exam is under wraps, and honestly a made-up one carries the point better.

Your AI agent keeps forgetting key facts from earlier in the conversation. Do you:

- Switch to a stronger model?
- Increase the context window?
- Inline a structured object of the key facts at the start of every turn?

Read those three again. Every one of them is a thing a real builder reaches for. None is stupid. That's the whole trick.

**Switch to a stronger model.** Tempting, because a smarter model feels better at everything. But forgetting isn't a reasoning failure — it's an availability failure. If the fact has fallen out of the context, a smarter model still can't recall what isn't in front of it. You've spent more money and left the mechanism untouched.

**Increase the context window.** This is the trap, and it's the one most people pick. It feels obvious: more room, less forgetting. But models attend poorly to the middle of a long context — a fact being *present* isn't the same as it being *used*. And you haven't solved the overflow, only delayed it. More latency, more cost, same bug later.

**Inline a structured object of key facts every turn.** This is the answer. It guarantees the critical facts are always there and always positioned where the model will actually look. Working memory for the agent. Cheap, boring, deterministic. Nothing depends on the window being big enough or the model being clever enough.

Here's what makes it a judgment question instead of a knowledge question: the intuitive answer — bigger window — is the wrong one. And you only *know* it's wrong if you've watched an agent with a huge context window forget things anyway.

That's not knowledge. That's a scar.

Sixty questions like that. Two hours. Every option defensible, one option less dumb than the rest. There's nothing to memorise, because memorising doesn't help you when all the answers are already correct.

## Experience Got Me to 90%. Then It Failed Me.

I went in mostly on experience. Years of actually building things with Claude, agents, and MCP — the plumbing that lets an AI model call your tools. When I sat the practice paper cold, I was already hitting around 90%.

So the honest question is: if experience gets you to 90%, why bother with the last 10%? Why certify at all?

Because the last 10% wasn't knowledge I was missing. It was habits I'd built wrong.

Here's the one that kept catching me. As a builder, my reflex for any problem is to *build something*. A tool. A script. A new pipeline. It's the instinct that got me here. But it's also a distortion: sometimes the better move is to improve the tool you already have, or redesign the process so the problem stops existing. The exam kept handing me a scenario and watching me reach for the hammer when the right answer was to put the hammer down.

I've written before about this exact reflex — that [building has gotten cheap while knowing what to build stays expensive](https://www.alt-counsel.com/when-building-gets-cheap-but-knowing-stays-expensive/). I knew the lesson. I'd published the lesson. And I still fell for it under exam conditions, because a habit doesn't care what you believe.

That's the uncomfortable part. My single most defining trait — I'm a builder — was the thing the exam had to drill out of me.

## So Why Certify After You Can Already Do It?

Raw experience versus a certification. Neither is wrong. But experience has one blind spot it structurally cannot fix: it can't see its own bad habits. The very thing that makes you good — repetition, instinct, pattern-matching — is what quietly bakes in the mistakes.

That's the gap a good exam fills. Not "here are the basics." I had the basics. It's "here are the four places your instincts have gone wrong without you noticing."

What actually drilled me out of it was a tool from the LegalQuants community — a group of lawyers who build their own tech — that uses AI to hammer you on the principles you keep getting wrong. It kept surfacing my build-first reflex until I stopped reaching for it. Sit with that for a second: an AI tool, made by a community of AI builders, drilling a lawyer for an AI certification. The whole loop is the thing the certification is about.

That's the reframe I didn't expect. You don't certify to prove you can do the work. You certify to find out where doing the work has quietly made you worse.

## The Part I Didn't Put on LinkedIn

Now the doubt.

There is no "legal innovation engineer" role in Singapore. Not really. Legal-tech fluency shows up as an expectation bolted onto ordinary legal jobs, not as a title you can apply for. So I earned a credential for a job that doesn't exist here, from a certification that is only a few months old. On paper, that's a badge for nothing.

Except the skill underneath it is the single hardest thing to hire for in this country. Ninety-five percent of Singapore employers report AI skill gaps; AI application development sits at the very top of the hardest-to-fill list. The government is pouring money into closing exactly this gap — IMDA is subsidising AI upskilling for tens of thousands of professionals, and Budget 2026 hands out a 400% tax deduction on qualifying AI training.

So which is it — an asset or a vanity line? Honestly, both. The AI-certification market crossed four billion dollars this year, with more than 400 credentials competing for attention, and the sharpest criticism of all of them is true: a certificate validates exposure, not capability. It proves you understand the concepts. It does not prove you can apply them when the data is messy and the problem is ambiguous — which is the only thing the job ever asks.

The badge is uncashable for a title that doesn't exist yet. It points straight at the skill the market most desperately lacks. My bet — and it is a bet — is that the skill arrives before the title does.

## For Solo Counsels Wondering If AI Skills Can Be Certified

Here's the useful version, if you're a solo counsel or on a small team and you're eyeing one of these.

The knowledge is learnable. Anthropic's own preparation courses are free, and you could work through the concepts in a few focused evenings. That part is not the moat.

The judgment is the moat, and the judgment only comes from shipping something and watching it break. You cannot cram the scar that tells you a bigger context window won't fix your forgetting agent. You have to earn it.

So if you're deciding whether to chase the badge, get the order right. Build first — on real problems, with real stakes, until something you made fails in a way that teaches you. *Then* certify, if you want the mirror a good exam holds up to your habits.

Not to prove you can do it. To find out where your instincts have quietly gone wrong.

Build first. Certify after.
