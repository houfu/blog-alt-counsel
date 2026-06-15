# Research: Thinking in Loops: Finding the Frontier Without a Frontier Budget

**Mode:** Exploratory (thesis mostly locked from pitch). Goal: ground the
framework, find vocabulary + authoritative sources, flag jurisdictional gaps.
**Date:** 2026-06-15

## Summary

Three threads support the post. (1) The "burst vs. paced loop" idea has formal
vocabulary — fan-out/fan-in / scatter-gather orchestration — and a documented
downside (stragglers, timeout budgets, aggregation cost). (2) The serious answer
to "how do I test what a model can do" is **capability elicitation** (METR) run
through a **standardized harness at scale** (Princeton HAL), which independently
arrives at the same burst shape and the same harness-matters finding as the
predecessor post. (3) The reason pacing *works* is mechanical: Anthropic's API
rate limiter is a continuously-replenishing token bucket, so bursts trip limits
while paced loops ride the refill. The legal-team angle is real but the
published material is US/enterprise-centric — that gap is the alt-counsel hook.

## Key Findings

### 1. Orchestration shape has names — and the burst shape has known costs 🌍
Fan-out/fan-in (a.k.a. scatter-gather) is the standard parallel-agent pattern: a
dispatcher distributes work to many agents, a gatherer recombines results.
Documented across Azure, AWS, Beam AI. But parallelism "bites back": the three
forces that eat fan-out gains are the **straggler bottleneck** (you wait for the
slowest agent), the **timeout budget**, and **aggregation cost**. This is the
nuance that keeps the post from cheerleading: a burst isn't free speed.
- **Source:** [6 Multi-Agent Orchestration Patterns for Production](https://beam.ai/agentic-insights/multi-agent-orchestration-patterns-production) — Beam AI, Apr 2026 · 🌍
- **Source:** [Parallelization and scatter-gather patterns](https://docs.aws.amazon.com/prescriptive-guidance/latest/agentic-ai-patterns/parallelization-and-scatter-gather-patterns.html) — AWS · 🌍
- **Source:** [Multi-Agent Fan-Out: When Parallelism Bites Back](https://pub.towardsai.net/multi-agent-fan-out-when-parallelism-bites-back-c42656dd4d2f) — Towards AI, May 2026 · 🌍 (straggler / timeout / aggregation)

### 2. Claude Code dynamic workflows = the burst shape, with a built-in cost warning (tool/authoritative)
A dynamic workflow is "a JavaScript script that orchestrates subagents at scale"
— **the script holds the loop, branching, and intermediate results**, so Claude's
context holds only the final answer. The docs' own framing supports the
*legibility* theme: a workflow "moves the plan into code" — repeatable, readable,
rerunnable. Concrete limits and cautions that match Houfu's run:
- **Up to 16 concurrent agents** (fewer on limited CPU); **1,000 agents/run** cap.
  (His screenshot showed 12/626 concurrent — i.e. riding the concurrency ceiling.)
- Quality patterns beyond raw scale: agents can **adversarially review each
  other** or draft from several angles before reporting.
- Cost caution, verbatim: "A workflow spawns many agents, so a single run can use
  meaningfully more tokens... Runs count toward your plan's usage and rate limits
  like any other session." Recommended mitigation: **"run the workflow on a small
  slice first"** to gauge spend.
- **Source:** [Orchestrate subagents at scale with dynamic workflows](https://code.claude.com/docs/en/workflows) — Claude Code Docs · tool

### 3. "How do I test the frontier?" already has a discipline: capability elicitation 🌍
METR's guidelines: the goal is a score "that represents the full capabilities of
the model... accessible with plausible amounts of enhancement" — i.e. give it the
**best available scaffolding** and run it. The load-bearing concept for this post
is their failure taxonomy:
- **Spurious bottlenecks** — easily fixable, *not* real capability limits.
- **Real bottlenecks** — no obvious fix.
- This is the formal name for the predecessor post's lesson: a zero from a memo
  saved under a broken `.docx` is a *spurious* bottleneck, not the law being
  wrong. Running at scale is how you separate the two.
- **Source:** [Guidelines for capability elicitation](https://metr.org/blog/2024-03-15-guidelines-for-capability-elicitation) — METR, Mar 2024 · 🌍
- **Context:** [Early lessons from evaluating frontier AI systems](https://www.aisi.gov.uk/blog/early-lessons-from-evaluating-frontier-ai-systems) — UK AISI, Oct 2024 · 🌍 ("a variety of capability elicitation techniques and model scaffolds are employed" to find the ceiling)

### 4. The formal eval world built the burst shape too — and found the harness dominates 🌍
Princeton's Holistic Agent Leaderboard (HAL) is a standardized, **cost-aware**
harness that "orchestrates parallel evaluations across hundreds of agents." Its
headline finding rhymes exactly with the predecessor post: bare-model,
vendor-scaffolded, and full-system results **diverge by 30–50 points**. So the
fan-out-of-hundreds-of-agents move Houfu made by hand is the same move the
reference infrastructure makes — and it confirms harness > model at research scale.
- **Source:** [Holistic Agent Leaderboard (HAL)](https://hal.cs.princeton.edu/) · 🌍
- **Source:** [The Missing Infrastructure for AI Agent Evaluation](https://arxiv.org/abs/2510.11977) — arXiv 2510.11977, Oct 2025 · 🌍 (already cited in predecessor as "21,730 rollouts, up to 48-point swing")
- **Summary:** [VerifyWise on HAL](https://verifywise.ai/ai-governance-library/agentic-evaluation/holistic-agent-leaderboard) · 🌍 ("results diverge by 30–50 points")

### 5. Why pacing actually works: the token bucket (tool/economics)
Anthropic's API rate limiting "uses the token bucket algorithm... your capacity
is continuously replenished up to your maximum limit, rather than being reset at
fixed intervals." Critically: **"Short bursts of requests can exceed the limit
and trigger rate limit errors."** This is the mechanical spine of the whole post:
a burst (626 agents at once) slams a ceiling; a paced loop (3–8 agents every 10
min) rides the continuous refill. The constraint isn't arbitrary — it's the
shape of the limiter.
- **Source:** [Rate limits](https://platform.claude.com/docs/en/api/rate-limits) — Claude API Docs · tool
- Real-world texture (heavy agentic users hitting **weekly** limits; "cron jobs
  run while you sleep" as the fix): [Reddit r/ClaudeAI on agentic 24/7 workflows](https://www.reddit.com/r/ClaudeAI/comments/1tcpxi2/) (May 2026); [The Real Cost of AI Agents: My $20/Day Wake-Up Call](https://medium.com/@srinumajji_45317/the-real-cost-of-ai-agents-my-20-day-wake-up-call-and-how-i-fixed-it-aeaf51ea4388) (Apr 2026). 🌍

### 6. Economics that reward pacing over bursting (context)
For anyone doing this on the API rather than a plan: batch processing roughly
halves token cost (e.g. Sonnet 4.6 ~$3/$15 → ~$1.50/$7.50 per MTok), and prompt
caching drops cached input reads to ~$0.30/MTok. Both reward spreading repeated
work over time rather than firing it all at once.
- **Source:** [Guide to Anthropic API Pricing](https://www.doit.com/blog/anthropic-api-pricing) — DoiT, May 2026 · 🌍

### 7. LLM-as-judge / self-judge: reliable, but with a caveat to disclose 🌍
The orchestration scored runs via `self_judge` (agents as LLM judges). LLM-as-judge
is the standard way to evaluate at scale, but reliability "varies substantially
across tasks and scoring scales." Worth one honest sentence rather than presenting
the scores as oracle truth — consistent with the blog's anti-false-certainty voice.
- **Source:** [A survey on LLM-as-a-judge](https://www.sciencedirect.com/science/article/pii/S2666675825004564) — ScienceDirect, Jun 2026 · 🌍
- **Source:** [Human-LLM Alignment Is Highest on 0-5 Grading Scale](https://arxiv.org/html/2601.03444v1) — arXiv, Jan 2026 · 🌍

## Jurisdictional Flags

- ⚠️ **Legal-AI-evaluation guidance is US/enterprise-centric.** Ironclad's "4 Cs"
  (criticality, confidentiality, complexity, comfort), Thomson Reuters' CoCounsel
  testing program, "87% of GCs now use AI" (up from 44%) — all assume in-house
  teams with budget and vendor relationships. The recurring admission is useful:
  *"Every legal team evaluating AI tools right now is doing it differently. There's
  no shared standard. No common framework"* (Laura Jeffords Greenberg, Feb 2026).
  That vacuum is the alt-counsel opening: a solo counsel has no eval team — but the
  orchestration tools to run their own eval now cost a weekend, not a budget line.
  - [How to Evaluate Legal AI Tools: The 4 Cs](https://ironcladapp.com/resources/articles/how-to-evaluate-legal-ai-tools) — Ironclad, Nov 2025 · ⚠️
  - [AI for In-House Legal Teams](https://swiftwaterco.com/insights/ai-for-in-house-legal-teams) — Swiftwater, Jun 2026 · ⚠️ (87% / 44% stat)
- 🌍 No Singapore/ASEAN-specific source found on running agent evaluations at
  scale. Treat the regional angle as *lived practitioner* (Houfu's own runs),
  not cited local data.

## Alt-Counsel Angle

The frontier labs answer "what can this model do?" by spending an afternoon and a
research budget fanning out thousands of rollouts through a polished harness (HAL,
LAB). The solo counsel can now ask the *same question* — but the affordable shape
of the answer is the paced loop, not the burst. The post's job: name the
orchestration choice, show the burst (legible but budget-hungry) and the paced
loop (legible *and* affordable) as two answers to one question, and hand the
reader the mindset shift that turns a frontier-lab method into a weekend one.

## Notes for drafting

- Lead the "test the frontier" section with capability elicitation (METR) — it
  reframes the question from chat-window to orchestration.
- Use the token-bucket fact as the hinge between the two shapes (this is the
  *why*, not just the *what*).
- Keep the self-judge caveat to one honest sentence (voice: no false certainty).
- HAL is the bridge back to the predecessor post (harness > model) — natural
  backlink anchor.
- Watch length: this is research-rich; the draft should cite ~4-5 of these, not
  all. Strongest: workflows doc, METR, HAL, rate-limits token bucket.
