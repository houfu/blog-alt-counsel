---
title: "How I Rebuilt Harvey's Auto-Research Loop (And What I Learned About Legal Agent Design)"
tags: ["AI", "LegalTech", "Contracts", "Programming"]
series: "Auto-Optimising Legal Agents"
part: 1
---

# How I Rebuilt Harvey's Auto-Research Loop (And What I Learned About Legal Agent Design)

Harvey AI published an experiment where a generic agent iteratively improves its own scaffolding to score higher on legal tasks — rubric scores jumping from 41% to 88%. I read it and thought: *impressive, but do I actually understand how this works?* The best way I know to learn programming is to treat someone else's results like a worked sum — rebuild it and see what clicks. So I built a simplified version: a synthetic NDA with five issues designed to escalate from mechanical extraction to genuine legal judgment, an LLM judge, and an optimisation loop. I also haven't hand-coded anything in a while — this whole build is agent-assisted. Have my skills atrophied? The picture is more nuanced than that. I get to try more things, and the interesting work shifts to design: what makes a good issue gradient, what should a rubric actually measure. This post walks through the build.

## Series Plan

- **Post 1 (this post):** The build — how I designed and constructed the experiment
- **Post 2:** The results — what happened when I ran it, and what it means for lawyer supervision of AI
