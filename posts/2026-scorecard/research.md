# Research: How others' 2026 conclusions compare with Houfu's

**Date:** 2026-11-24
**Query:** What are other people concluding about legal AI in 2026, and how far do they align with the five full-time verdicts and the "context" through-line?
**Status:** ⚠️ UNVERIFIED — page fetches blocked by the session's network allowlist; all from web-search summaries. Open each URL before citing. Companion file: `posts/2026-predictions/research-scorecard-p5.md`.

## Summary

Others broadly agree on P1 (Word won) and P5 (theatre / ROI elusive; ASEAN cautious). P2, P3 and P4 are mixed. The sharpest disagreement is Ethan Mollick on P2: errors shrank, but the frontier stayed jagged — it moved into taste and judgment. Two points where Houfu is ahead of or apart from the field: business users running a legal agent themselves (no external examples found — vendors route business requests *to* lawyers), and context as the through-line (closest external support: clients asking firms for their data back).

## Alignment by prediction

| # | Houfu | Others | Key sources |
|---|---|---|---|
| 1 | Fail — Word's inertia won | **Aligns.** Claude for Word (beta Apr 10), Microsoft Legal Agent for Word (Apr 30), Harvey agents in Word (Sep 23); ILTA: M365 Copilot at 76% of 508 firms; accuracy concern fell 82% → 63% | [WinBuzzer](https://winbuzzer.com/2026/04/14/claude-for-word-brings-ai-contract-review-to-microsoft-offic-xcxwbn/), [Legal IT Insider](https://legaltechnology.com/2026/04/30/microsoft-releases-new-legal-agent-for-word), [LawSites/ILTA](https://www.lawnext.com/2026/09/which-ai-product-is-most-popular-among-law-firms-findings-of-iltas-tech-survey-may-surprise-you.html) |
| 1b | Business users run the agent | **Not found elsewhere.** Legora Intake (Oct 13) and Harvey Intake route business requests to lawyers; Microsoft's agent targets in-house counsel/legal ops | [Legora Intake](https://legora.com/newsroom/legora-launches-intake-an-agentic-front-door-for-in-house-legal-teams) |
| 2 | Wrong — models got predictable; evals next | **Mixed.** For: Simon Willison, "2026 in LLMs (so far)" (Sep 27) — dramatic open-weight improvement, Qwen 3.8 27B as his local starting point; built smevals (Jul 31); Stanford AI Index 2026 — public benchmarks saturating. Against: Ethan Mollick, "Fable 5.2 and Jagged AGI" (Nov 9) — no major errors, but jaggedness persists "around taste and judgment"; open-weight models underperform their benchmarks | [Willison](https://simonwillison.net/2026/Sep/27/2026-in-llms-so-far/), [smevals](https://simonwillison.net/2026/Jul/31/smevals/), [Mollick](https://www.oneusefulthing.org/p/fable-52-and-jagged-agi) |
| 3 | Wrong — 50–66%; may shift to clients | **Mixed / outlier.** Clio (Oct 26): 85% report some adoption; Artificial Lawyer (Jun 4): use concentrated in power users; ❓ Bloomberg Law via aggregator: 23% of in-house daily, 27% none in six months | [Clio](https://www.clio.com/about/press/2026-legal-trends-report/), [Artificial Lawyer](https://www.artificiallawyer.com/2026/06/04/token-costs-and-the-future-of-law-firm-ai-spend/) |
| 4 | Right — context made it manageable | **Mixed.** For: context engineering as successor to prompt engineering; arXiv 2608.14210 (Aug) — best legal RAG <10% hallucination, worst ~half; CJ Menon (Oct) — tool design/workflow/habits can make a sound tool unsafe. Against: Charlotin database 2,202 decisions by 19 Oct (~5.6/day; 872 by lawyers); Princeton CITP — legal hallucination rates "not consistently decreasing" across GPT models (date not found) | [arXiv](https://arxiv.org/abs/2608.14210), [Menon](https://en.prnasia.com/releases/apac/chief-justice-sundaresh-menon-highlights-the-importance-of-human-judgment-in-the-age-of-artificial-intelligence-553967.shtml), [HAQQ tracker](https://www.haqq.ai/blog/ai-legal-hallucination-audit), [Princeton CITP](https://blog.citp.princeton.edu/?p=19171) |
| 5 | Holding — theatre; ASEAN regulated | **Aligns.** Above the Law, "AI ROI For Law Firms: There's Not Any" (Sep); ILTA: cost/ROI in top-3 concerns (41%). **Salesforce's own regional MD (Sep 19): outside Singapore, "the cost of human labour is cheaper than the cost of AI."** Counter: ❓ Vietnam state legal-review AI platforms (Jul 7, weak vendor source) | [Above the Law](https://abovethelaw.com/2026/09/ai-roi-for-law-firms-theres-not-any/), [Techgoondu](https://www.techgoondu.com/2026/09/19/ai-is-a-harder-sell-in-asean-where-human-labour-can-be-cheaper-than-ai-salesforce/), [FPT/Futurum](https://futurumgroup.com/insights/fpt-is-bets-on-ai-powered-justice-as-aseans-legal-tech-moment-arrives/) |
| — | Through-line: work drifts to whoever holds the context | **Some support.** Law.com, "Threat or Opportunity? Clients Ask Law Firms for Their Data Back" (Aug 3) — clients want historical work back to feed their own AI (❓ author attribution conflicts); Artificial Lawyer "AI Sovereignty" (Jun 29). Partial counter: Solicitors Journal "judgement gap" — AI holds the information, humans hold the judgement | [Law.com](https://www.law.com/americanlawyer/2026/08/03/threat-or-opportunity-clients-ask-law-firms-for-their-data-back-/) |

## Top 3 candidates to change the draft (research-skill cap)

1. **Salesforce's own MD on ASEAN** — strongest, most generous-to-third-party evidence for P5: even the leapfrog predictor says labour is cheaper than AI outside Singapore.
2. **Mollick on P2** — the honest counterweight: errors shrank but jaggedness moved to taste and judgment. Also supports "write your own evals" (benchmarks can't see it).
3. **Law.com "clients ask for their data back"** — independent support for the context through-line.

## Available, not used

- Willison naming Qwen 3.8 27B as his local default (independent echo of Houfu's pick).
- Princeton CITP on non-decreasing legal hallucination rates; arXiv legal-RAG spread.
- Juro survey: 44% of in-house think they could halve outside counsel spend (vendor).
- Minister Tong (Apr): clients using AI will expect faster turnaround.

## Empty

Year-end 2026 retrospectives from Artificial Lawyer / LawSites / Legal IT Insider / Law.com (likely not yet published); anyone grading 2026 predictions; Stanford "measurement era" follow-up; "AI theatre" framing in legal; Singapore legal AI usage survey Sep–Nov; business users self-serving via a Copilot legal agent.
