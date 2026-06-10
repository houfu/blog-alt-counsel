# Pitch: My agent worked around the tools I gave it

**Status:** Approved 10 June 2026
**Lane:** Learning in Public (Lane 2)
**Structure:** C opening (agent did the legal work, scored zero on packaging) → A spine (the benchmark measures the environment as much as the model) → B teaser (public benchmarks as free QA for your own agent stack)

## The pitch

I believed a stack of lawyer-made tools would beat a generic one. So I ran DeepSeek-v4-flash through Harvey's new Legal Agent Benchmark twice — 1,250 real legal tasks — once in the stock harness, once in my own stack built around adeu, a document tool written by a fellow lawyer-coder. My stack lost by 10 points. In 100 task folders, the agent had quietly routed around the tools I gave it and built its own Node.js document pipelines. In several zero-scoring tasks it did the legal work correctly — one complete 58KB memo — and lost every mark on packaging. The forensics changed how I read every AI benchmark: the score measured my harness engineering, not the model and not the legal tooling. Researchers just named this the "Binding Constraint Thesis" — the harness often matters more than the model. So before I blame anyone's code, I owe a fellow open-source lawyer proper attribution — and an upstream bug report, which is what open source community actually looks like. For solo counsels, the question isn't "which model is best?" It's "what harness produced that score?"

## Key constraints and notes

- **Adeu is not houfu's tool** — written by another open-source lawyer-coder. Be fair: the data shows most defects are harness/integration-level (completion signal, stability gate are the nanoclaw adapter), and adeu's fingerprints are on the biggest wins too. Bug report upstream planned once attribution is nailed down.
- **Honesty on the research timeline:** houfu found the Binding Constraint Thesis / HAL literature *after* the investigation, while writing this post — frame as "when I went looking for whether anyone had measured this, I found…"
- **Full-circle hook:** Bob Ambrogi's LawNext commentary on Harvey's LAB quotes houfu's legal OSS post ("federation of solo-author archipelagos," "Open Source theatre"). Running LAB on a non-Harvey stack and filing upstream bugs is the outside contribution that post said legal OSS lacks.
- **"Favours frontier models" reframe:** evidence supports "rewards polished harnesses" (which frontier labs have), not "rigged for frontier models." Harvey launched LAB without a leaderboard because submission normalization is unsolved.
- Source data: `investigation-summary.md`, `nanoclaw-vs-default-analysis.md`, `nanoclaw-vs-default-report.html`; research: `research.md`

## Tags

TBD — to be confirmed with tag-registry skill before publishing (ask intent first).
