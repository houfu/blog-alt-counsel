# Research notes — legal-oss-maintainer

## Mike (mikeoss) status check, 2026-07-27

Part 1 froze Mike at day 11 (2026-05-10): 2,657 stars, 759 forks, 6 merged PRs, 87/100 sampled forks byte-identical. Question left open: "Where it goes from there is anyone's guess."

**What news coverage shows (~day 90):**

- **Still actively shipping, solo-author cadence.** A July 16, 2026 release added a document library, improved Excel/PowerPoint workflows, and refined review panels. July 25 content on open-source legal apps giving firms control over data/workflows/economics. Source: haqq.ai landscape piece surfaced via search; primary is mikeoss.com (blocked to direct fetch this session, 403).
- **License still AGPL-3.0** as of current search results — the May interview had Will Chen mulling a switch to permissive; no public announcement found of an actual change. Repo path seen: github.com/willchen96/mike, AGPL-3.0 license tab.
- **Positioning hardened**: mikeoss.com as a site, "bring your own Anthropic/Google API key, no subscription, no lock-in", local/intranet install pitch for small and mid-size firms. Trade press framing: "changes the negotiation" (Legal IT Insider), "end of legal's secret sauce" (Crutchfield on LawSites).

**What news CANNOT show (needs repo data — blocked in this session):**

- Merged external PRs since day 11 (the "roots" metric from Part 1)
- Watchers, open/closed PR flow, response times
- Whether any of the 750+ bookmark-forks converted into contributors
- Contributor count and whether anyone but Will Chen commits to main

→ Refresh via Houfu running the Part 1 `gh` queries locally, or a draft-time session with repo access. Until then any Mike claims in the draft are `[UNVERIFIED]` beyond the news items above.

**Sources:**

- https://www.artificiallawyer.com/2026/05/04/mike-the-open-source-legal-ai-platform-will-chen-interview/ (May, already cited in Part 1)
- https://www.lawnext.com/2026/05/ken-crutchfield-when-open-source-meets-legal-how-mikeoss-signals-the-end-of-legals-secret-sauce.html
- https://legaltechnology.com/2026/05/05/mike-oss-open-source-legal-ai-tool-changes-the-negotiation/
- https://www.legalfutures.co.uk/latest-news/meet-mike-the-open-source-ai-challenger-built-by-a-city-solicitor
- https://www.legalcheek.com/2026/05/ex-latham-associate-unveils-free-legal-ai-tool-mike-to-challenge-billion-dollar-tech-giants/
- https://www.haqq.ai/blog/legal-ai-open-source-moment (2026 legal-OSS landscape overview — possible broader source for the draft)
- https://mikeoss.com/ (403 to this session's fetcher; check manually)

## Part 1 callbacks worth bringing in (assessment, 2026-07-27)

1. **Mike day-11 → day-90 revisit — strongest available callback.** Works whichever way the data goes: still no roots → corroborates "stars don't maintain code" and contrasts with Houfu's choice to join someone else's project; real contributors materialized → honest counter-example, "neither is wrong" move, and a source of lessons for lq-ai.
2. **Close the LegalQuants loop.** Part 1: 1 of 101 LegalQuants repos cleared the bar; the question was whether "the infrastructure for them to contribute to actually exists yet. Right now, mostly, it doesn't." lq-ai IS that infrastructure being attempted — the community building the thing whose absence Part 1 measured. (Open question for Houfu: did lq-ai predate Part 1? Any causal link between the post and his role?)
3. **Author-vs-maintainer distinction, now lived.** Part 1 predicted the frustration ("Maintainer work is reading other people's code..."); the lived version adds the double uncertainty Part 1 didn't predict.
4. **Caliper traits** — optional one-liner: maintainer work as the anti-Caliper practice (feedback, sociability, tolerance for imperfect code).
5. **Leave out**: Harvey/open-source-theatre re-litigation (settled in Part 1; framing risk); full docassemble/courtlistener deep-dive (the pivot-owning sentence handles the promise; at most one line on governance/foundations as what those projects have that lq-ai is trying to lay).
