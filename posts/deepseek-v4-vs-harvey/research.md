# Research: Agent performance measurement frameworks (deepseek-v4-vs-harvey)

**Research date:** 10 June 2026
**Research question:** Has anyone created frameworks/benchmarks that measure AI *agent* performance separately from *model* performance — i.e. evaluating the harness/scaffold/environment? Plus: Harvey LAB benchmark design and whether it favours frontier-lab setups.

## Summary

Yes — separating harness from model is now an active, fast-moving research area, with the strongest work published in the last 8 months (Oct 2025 – May 2026). Princeton's Holistic Agent Leaderboard (HAL) measures models × scaffolds × benchmarks as three separate axes; a May 2026 position paper ("Stop Comparing LLM Agents Without Disclosing the Harness") formalises the **Binding Constraint Thesis**: on long-horizon tasks, harness configuration often determines performance *more than model choice*. Houfu's nanoclaw-vs-default experiment (same model, two harnesses, −9.5 pp mean gap) is an independent field replication of exactly this thesis, in the legal domain, on Harvey's brand-new LAB benchmark — which itself launched (May 2026) explicitly inviting "harness optimizations" research and deliberately *without* a leaderboard because normalizing submissions is unsolved.

## Key Findings

### 1. Harvey's Legal Agent Benchmark (LAB) — what it is 🌍

- **Source:** [Open-Sourcing Harvey's Long Horizon Legal Agent Benchmark](https://www.harvey.ai/blog/introducing-harveys-legal-agent-benchmark) - Harvey blog, 6 May 2026
- First version: **1,250 tasks across 24 practice areas, graded by 75,000+ expert-written rubric criteria**. Client-matter-centric: instruction (partner-to-associate, avg 50 words) + closed-universe document environment + reviewable work product output + atomic pass/fail rubric verification.
- **All-pass grading**: "a deal-team report that identifies eight of ten risks is not 80% useful." No partial credit — explicitly mirrors how partners review work.
- **Launched intentionally without a leaderboard**: "we want to work with the community to ensure results are clear and intuitive in how they convey agent performance… we will publish standards for normalizing submissions." ← Harvey itself admits result-normalization across different agent stacks is an open problem.
- Harvey explicitly names "**harness optimizations for long-horizon agent work**" as a research direction the community is already using LAB for.
- Predecessors (LegalBench, CUAD, LEXam, BigLaw Bench) graded *short-horizon reasoning*; LAB grades the *unit of work delegated inside a firm*.
- Example task: $458M Crestview Software acquisition; 57 rubric criteria over 9 planted issues.
- Research partners acknowledged: Anthropic, OpenAI, Nvidia, Google DeepMind, Mistral, LangChain, Fireworks, Snorkel, Mercor, Stanford LIFTLab — frontier labs at the table from day one.

### 2. HAL — Holistic Agent Leaderboard (Princeton) 🌍

- **Source:** [HAL: The Missing Infrastructure for AI Agent Evaluation](https://arxiv.org/abs/2510.11977) - arXiv, Oct 2025; [hal.cs.princeton.edu](https://hal.cs.princeton.edu/); [princeton-pli/hal-harness](https://github.com/princeton-pli/hal-harness)
- Authors include Sayash Kapoor, Arvind Narayanan (AI Snake Oil), Percy Liang, Dawn Song.
- **Three-dimensional analysis spanning models, scaffolds, and benchmarks** — the first standardized infrastructure treating the scaffold as a first-class evaluation axis. 21,730 rollouts, 9 models, 9 benchmarks, ~$40K.
- Found **double-digit cross-scaffold gaps for the same model**: 34 pp for Claude Sonnet 4.5 (68% → 34% between SWE-Agent and HAL Generalist scaffolds), ~48 pp for o4-mini. Also: higher reasoning effort *reduced* accuracy in most runs; LLM-aided log inspection caught agents searching HuggingFace for benchmark answers instead of solving tasks.

### 3. The Binding Constraint Thesis — harness > model 🌍

- **Source:** [Stop Comparing LLM Agents Without Disclosing the Harness](https://arxiv.org/html/2605.23950v1) - arXiv position paper, May 2026 (Tulane/Rutgers/Virginia Tech)
- Thesis: "for long-horizon tasks evaluated across models with comparable frontier capability, the agent execution harness… is often a stronger determinant of agent performance than the model it wraps. Current evaluation protocols systematically misattribute harness-level gains to model improvements."
- Killer data points (model held fixed, harness varied):
  - Claude Opus 4.5 on SWE-bench Pro: **45.9% under SEAL scaffold vs 55.4% under Claude Code** (+9.5 pp from harness alone — coincidentally the same magnitude as the nanoclaw gap).
  - Six leading frontier models span only **4.9 pp** under one locked scaffold — i.e. harness variance (9.5 pp) ≈ **2× model variance** (4.9 pp).
  - Adding one search subagent (WarpGrep) flipped model *rankings* (MiniMax 2.5 vs Claude Opus 4.6).
  - Epoch AI third-party monitoring: 11–15 pp scaffold-only variation on SWE-bench Verified; "scaffold choice has the single biggest impact on overall performance."
- Frames the agent as a closed-loop control system: the harness is the *controller*, the LLM is an open-loop stochastic policy. Stability, context drift, and control lag are **controller properties** — "no model upgrade compensates for the absence of feedback structure in the controller."
- Proposes: harness disclosure standard + locked-harness or factorial evaluation protocols.
- Related: **Harness-Bench** ([arXiv 2605.27922](https://arxiv.org/html/2605.27922v1), May 2026) — a diagnostic benchmark measuring harness effects across models; notes prior work "conflate[s] the harness with the full agent system."

### 4. METR precedent (safety world) 🌍

- **Source:** [METR capability elicitation guidelines](https://metr.org/blog/2024-03-15-guidelines-for-capability-elicitation); [time-horizons methodology](https://metr.org/time-horizons)
- METR has long treated **scaffolding/elicitation as a variable to control**: they pick a scaffold (ReAct, Triframe, modular) per model on a dev set before measuring. The safety-evals world recognised "model ≠ agent" earlier than the leaderboard world.

### 5. Practitioner discourse has caught up (2026) 🌍

- Cursor research (via [MindStudio writeup](https://www.mindstudio.ai/blog/agent-harness-scaffolding-matters-more-than-model), May 2026): same model scoring **46% on one harness, 80% on another**.
- [Medium/tenten (Apr 2026)](https://medium.com/@tentenco/the-agent-harness-why-70-of-your-ai-agents-performance-lives-outside-the-model-5093cfe03df1): "70% of your AI agent's performance lives outside the model."
- Reddit r/AI_Agents (May 2026): "Your harness is failing your agent but there's no benchmark to prove it."
- Note terminology: the community says "harness" (per [[feedback_harness_terminology]] memory — use "harness" not "infrastructure").

### 6. LawNext commentary on LAB — cites Houfu directly ✅ (personal/regional hook)

- **Source:** [Some Thoughts On Harvey's Launch of 'LAB'](https://www.lawnext.com/2026/05/some-thoughts-on-harveys-launch-of-lab-an-open-source-long-horizon-benchmark-for-legal-ai-agents.html) - Bob Ambrogi, LawNext, 19 May 2026
- Key caveats Ambrogi raises: LAB is "a benchmark built by a market participant" (Harvey, $11B valuation); task/rubric choices about "what good legal work looks like" were made by Harvey + partners.
- **Quotes Houfu's alt-counsel post directly**: legal open source as "a federation of solo-author archipelagos," vendor repos maintained by in-house staff as "Open Source theatre." Whether LAB becomes a shared yardstick "will depend on… how much room the project leaves for outside contributors to shape what gets measured."
- This is the bridge: Houfu publicly questioned whether vendor open source invites real outside contribution — then became (likely) one of the first outside contributors to actually run the full benchmark on a non-Harvey stack and file findings.

## Statistics & Data Points

| Finding | Number | Source |
|---|---|---|
| Same model, two harnesses (Cursor research) | 46% vs 80% | MindStudio, May 2026 |
| Opus 4.5, SEAL vs Claude Code on SWE-bench Pro | 45.9% vs 55.4% | Morph leaderboard via arXiv 2605.23950 |
| Frontier-model spread under one locked scaffold | 4.9 pp | same |
| Scaffold-only variation (Epoch monitoring) | 11–15 pp | same |
| HAL same-model cross-scaffold gap | up to ~48 pp | arXiv 2510.11977 |
| Houfu's nanoclaw vs default (same model, LAB) | −9.5 pp mean / −10 pp criterion | local analysis |
| LAB scale | 1,250 tasks, 24 areas, 75K criteria | Harvey blog |

## Expert Quotes

- "All-pass grading reflects how high-stakes legal work is reviewed in practice — there is no partial credit for catching most of the issues." — Harvey LAB launch post
- "Until harness specifications are disclosed, leaderboard comparisons for long-horizon agents should be treated as incomplete and potentially misleading." — arXiv 2605.23950 abstract
- "Scaffold choice has the single biggest impact on overall performance." — Epoch AI monitoring, quoted in same
- LAB "is a benchmark built by a market participant… something the legal community needs to keep in mind." — Bob Ambrogi, LawNext

## Jurisdictional Flags

⚠️ **US/EU Context** — LAB's task universe is US BigLaw work (partner-to-associate delegation, US practice areas, .docx deal memos). No Singapore/ASEAN legal agent benchmark exists. For the alt-counsel audience the relevant angle is not the practice-area content but the *method*: a solo builder can run a frontier vendor's benchmark on a $0 open-weight model (DeepSeek via Ollama) and learn more about their own stack than about the model.

⚠️ **"Favours frontier models" nuance** — the research does NOT support a claim that LAB is rigged for frontier *models*. Better supported: benchmarks of this design reward polished *harnesses* (in-band completion signals, robust document writers, packaging validators) — which frontier labs and well-funded vendors have and solo builders don't. Harvey's research partners are all frontier labs; the harness-normalization problem is unsolved (no leaderboard yet). Frame as "favours frontier-lab *stacks*."

## Alt-Counsel Angle

- A solo builder ran the same open-weight model through Harvey's 1,250-task benchmark twice — stock harness vs custom stack — and the 10-point gap was entirely harness engineering, not model or legal capability. Field evidence for the Binding Constraint Thesis from someone with no eval team and no $40K budget (HAL's spend).
- "The benchmark measures the environment as much as the model" → for resource-constrained teams evaluating vendors: when a vendor quotes a benchmark score, ask what harness produced it.
- Free QA: a public benchmark found four real engineering bugs in a personal agent stack — the repurposing teaser (Angle B).

## Additional Sources (not yet read in full)

- [Harness-Bench paper](https://arxiv.org/html/2605.27922v1) — read if post needs a second harness-measurement framework
- [harveyai/biglaw-bench GitHub](https://github.com/harveyai/biglaw-bench) — repo of the benchmark actually run
- [HAL paper full PDF](https://arxiv.org/pdf/2510.11977) — scaffold-gap tables
- [Artificial Lawyer on LAB launch](https://www.artificiallawyer.com/2026/05/06/harvey-launches-legal-agent-bench) — alternative industry commentary
