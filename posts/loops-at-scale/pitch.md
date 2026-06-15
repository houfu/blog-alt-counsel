# Pitch: Thinking in Loops: Finding the Frontier Without a Frontier Budget

## Title

**Thinking in Loops: Finding the Frontier Without a Frontier Budget**

## Pitch (~190 words)

When my tokens ran out halfway through scoring the benchmark, I didn't feel
defeated — I felt determined to find another way. The experiment had me
orchestrating hundreds of agents to probe a question more people are quietly
asking: with all these new capabilities, how do I actually test the edge of
what models can do? You can't find it by chatting with one model in one window.
You have to run real work at scale — and grade it at scale — then read what
comes back. My last post argued the harness beats the model; this one is about
the next lever you control once the harness is set: the *shape* of the work in
time. I ran the same evaluation three ways — as a script (scale, but I couldn't
see inside), as a fan-out of 626 judge agents reporting to an orchestrator
(legible, but it drained the budget in a burst), and finally as a paced loop
polling for unevaluated runs every ten minutes, spreading the same work and the
same token cost evenly enough to finish. For solo counsels and small teams, that
paced loop is how frontier-scale work fits a non-frontier budget. The capability
is already here; the mindset shift is the unlock.

## Core message

At the frontier, once model and harness are settled, the lever you actually
control is **orchestration shape** — how you spread work across time. Burst
(fan-out) vs. paced loop are two answers to the same question, and the paced
loop is what lets a resource-constrained practitioner run frontier-*scale* work
on a non-frontier budget. "Thinking in loops" carries a double meaning: the
agent loop, and the `/loop` that paces the whole orchestra.

## The question this post answers

"With all these new capabilities, how do I test what the new frontier of what
models can do actually is?" Answer: you run real work at scale and grade it at
scale — and orchestration shape is what makes that affordable.

## The worked example (three shapes, one evaluation)

1. **Scripts** (the Harvey way) — orchestrate at scale, but opaque; hard to see
   inside or debug. *(Keep observational, not a dig — engaged Harvey positively
   in the predecessor post.)*
2. **Fan-out orchestra** — dynamic `Workflow`. Claude split 1,252 benchmark runs
   into **626 judge agents** (~2 runs each, Sonnet 4.6 as `self_judge`), ~12
   concurrent, two phases (Judge → Verify). Legible and debuggable, but a burst
   that drained the token budget.
3. **Paced loop** — `/loop` + the evaluator. Poll for unevaluated runs every 10
   minutes; 3–8 agents per tick, each batch finishing before the next round, a
   summary each round to stay clued in. Spread the same work and token/session
   cost evenly enough to finish.

## Data (verified from run screenshot, 2026-06-07)

- Workflow: `harvey-self-judge-all-runs`
- 1,252 benchmark runs scored; **626 judge agents** (Claude split the work in two)
- Judge model: Sonnet 4.6, `self_judge`; concurrency ~12; phases Judge → Verify
- Paced loop: poll every 10 min, 3–8 agents/tick
- *(All figures verified. No `[UNVERIFIED]` claims outstanding.)*

## Why this matters to readers

- **Emotional connection:** the resource squeeze everyone hits — running out of
  budget mid-experiment and having to think your way around it.
- **Practical unlock:** a concrete pattern (paced loop) that lets small teams run
  frontier-scale evaluation without a frontier-lab budget.
- **Permission/frame:** reframes "how do I test what AI can do" from a chat-window
  question into an orchestration question.

## Authenticity check

- True to experience ✓ — real benchmark, real token wall, real workflow.
- Tooling credit: `Workflow`/`/loop` are Anthropic's; narrating *use*, not
  authorship.
- No expertise overclaim; grounded in the lived experiment.

## Prior work (must-link)

1. **My Agent Did the Legal Work. The Benchmark Gave It Zero.** —
   `/my-agent-did-the-legal-work-the-benchmark-gave-it-zero/` — direct
   predecessor (harness > model). **Published.**
2. The prompt-engineering "think in new ways" post
   (`lawyers-prompt-engineering-wrong`) — thesis ancestor (loops as one of the
   new ways of thinking). **Still a draft** — idea-only unless published before
   this ships.

## Tags

- `AI`
- `LegalTech`

(Per intent: not `Agents`, not `OpenSource`, not `Article`/featured. Validate
canonical spelling via tag-registry before publishing.)

## Timeline

- Target: **this week.** Keep scope tight; ~9-min blog length.

## Audience

- Primary: lawyer-coders / legal technologists (Wei Lin + Marcus).
- Closing turn back to solo counsels and small teams.
