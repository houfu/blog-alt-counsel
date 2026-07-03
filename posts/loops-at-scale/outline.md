# Outline: Thinking in Loops: Finding the Frontier Without a Frontier Budget

**Target:** ~9-min blog (~1,900–2,200 words). Narrative-first, feeling-first open.
**Sources (5):** prompt-engineering post · harness post + HAL · Mollick jagged
frontier · Claude Code workflows + `/loop` docs · Anthropic token-bucket. Self-judge
= one honest sentence.
**Backlinks:** harness post (predecessor), prompt-engineering post.
**No horizontal rules** (Ghost lexical). Tables OK (publish script converts them).

## Hook — the token wall (~150 words)
Mid-way through scoring the benchmark, tokens ran out. The feeling wasn't defeat —
it was determination to find another way. That's where the lesson lives: when you
run real AI work at scale, the model isn't what you're really choosing. The *shape*
of the work is.

## 1. The question everyone's actually asking (~250 words)
"With all these new capabilities, how do I test what these models can actually *do*
now?" You can't find the edge from one chat window — you run real work, and grade
it, at scale.
- Backlink: prompt-engineering post ("we said think in new ways; here's one").

## 2. Why you can't reason your way to the edge (~250 words)
The frontier is *jagged* (Mollick) — capability is uneven, strong here, weak one
task over. You can't predict where a model breaks; you observe it widely. And any
score is jointly produced by model + harness.
- Backlink: harness post. Source: Mollick jagged frontier; HAL (30–50pt swings) as
  the run-it-at-scale proof.

## 3. Same work, three shapes (THE HEART, ~600 words + visuals)
The eval — scoring 1,252 runs — run three ways. Uses ALL FOUR expression devices:

### Prose spine (the three shapes)
- **Scripts (the Harvey way):** real scale, but opaque — can't see inside or debug
  easily. *(Observational, not a dig.)*
- **The burst (dynamic `Workflow`):** Claude split 1,252 runs into 626 judge agents
  reporting to an orchestrator — legible, debuggable, "the plan moved into code."
  Ran ~12 at a time; drained the budget fast.
- **→ the token wall → determination.**
- **The paced loop (`/loop 10m`):** poll for unevaluated runs every 10 min, 3–8
  judge agents a tick, each batch done before the next, a summary each round. Same
  work, spread evenly over time.
- One honest sentence: self-judge caveat (judge Sonnet 4.6 ≠ worker DeepSeek;
  LLM-judges aren't oracles).
- Source: Claude Code workflows doc (16-concurrent cap, cost warning, "moves the
  plan into code"); `/loop` doc (fixed-interval mechanic).

### Device A — "shape over time" chart (CENTERPIECE VISUAL) [ASSET: create SVG]
Tokens/min (y) vs. time (x), with a dashed "rate-limit ceiling." Burst = one tall
spike punching through the ceiling then dying; paced loop = small humps riding under
it. Place right after introducing the burst→loop contrast. This shows the thesis
before it's explained.
- TODO asset: `token-shape-burst-vs-loop.svg` (match predecessor's chart style).

### Device B — comparison table (THE FRAMEWORK)
| | Scripts (the Harvey way) | Burst (`Workflow`) | Paced loop (`/loop`) |
|---|---|---|---|
| Who holds the plan | the script | an orchestrator | the scheduler |
| Can you see inside? | barely | yes — agent by agent | yes — a summary each tick |
| Shape over time | opaque | one tall spike | steady ripples |
| Hits the wall? | maybe | fast | rides under it |
| Fits when | already battle-tested | budget + want speed | time/budget is the constraint |

### Device C — the real screenshot (AUTHENTICITY) [ASSET: have it]
`harvey-self-judge-all-runs` capture — 626 agents, 12 running, rest queued — IS the
burst in the wild. Source: `~/Desktop/CleanShot 2026-06-07 at 00.51.40.png` (copy
into folder). Pair with a one-line loop-tick summary as the contrast. Needs alt text.

### Device D — water / token-bucket metaphor (CONNECTIVE TISSUE, §3→§4)
Introduce in §3: the burst tips the whole bucket at once and it overflows (wasted,
rate-limited); the paced loop is a tap dripping at the refill rate. Don't reveal the
mechanism yet — let it pay off in §4. One image only; no competing metaphors.

## 4. Why pacing actually works — the token bucket (~250 words)
Payoff of Device D: the rate limiter literally *is* a continuously-replenishing
token bucket. Verbatim: "Short bursts of requests can exceed the limit and trigger
rate limit errors." A burst slams the ceiling; a paced loop rides the refill. The
constraint isn't arbitrary — it's the *shape* of the limiter, and the loop matches
it. (The water metaphor from §3 now explains itself.)
- Source: Anthropic rate-limits doc.

## 5. The choice is the shape (FRAMEWORK, ~250 words)
Once model + harness are settled, orchestration shape is the lever you control.
Burst when you have budget and want speed; pace when tokens, rate limits, or your
own attention bind. Neither is wrong — two answers to one question. ("Neither is
wrong" move.)

## 6. What this means for solo counsels and small teams (SINGAPORE TURN, ~250 words)
Frontier labs answer "what can this model do?" with an afternoon and a research
budget. You can ask the same question — the affordable shape is the paced loop.
Singapore's Minister for Law: small firms lack not just cost but *time and
capacity* — "kept busy by daily work… may not have the capacity to dedicate
additional hours." A loop that runs *while you work* answers exactly that.
Frontier-scale evaluation on a non-frontier budget.
- Source: Edwin Tong / MinLaw (7 Apr 2026).

## Close — callback (~120 words)
Back to the token wall. The capability is already here; the mindset shift is the
unlock. End on a question echoing the predecessor's closer:
*"The model isn't the only thing you're choosing. What shape is your work running in?"*

## Length control
- §3 is the giant; visuals (A/B/C) carry weight that prose would otherwise spend, so
  they help, not hurt, length.
- If long: compress §2 (jagged frontier) into §1.

## Asset checklist
- [ ] `token-shape-burst-vs-loop.svg` — create (shape-over-time chart, Device A)
- [ ] Copy screenshot into folder + alt text (Device C)
- [ ] Verify table renders via publish-lexical dry-run before publishing
