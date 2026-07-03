# Research Report: 6-Month Prediction Scorecard Draft

Draft reviewed: `/Users/houfu/Projects/blog-alt-counsel/posts/2026-predictions/6-month-update.md` (as of 2026-07-03)

---

## 1. Source verification

| # | Draft claim (location) | Verdict | Correction needed |
|---|---|---|---|
| 1 | 8am report: adoption 69% (up from 31%), legal-specific tools 42% (line 29, P3 section) | VERIFIED | None required; optional precision tweak |
| 2 | Harvey: 80% weekly AI usage (line 29) | VERIFIED | None |
| 3 | "Spellbook's new CLM" as autonomous-direction evidence (line 41, P1 section) | PARTIALLY VERIFIED | **Yes — wording inverts Spellbook's own framing** |
| 4 | Microsoft's Copilot "coworker" (line 41) | VERIFIED (substance) | **Yes — product name is "Copilot Cowork"** |
| 5 | ASEAN "trails advanced markets by two to three years"; "Singapore a clear standout" citing Fulcrum (line 87, P5 section) | PARTIALLY VERIFIED | **Yes — the 2–3 year figure is not in the source; "clear standout" overstates it** |
| 6 | 54% of firms no AI training, 43% no AI policy (line 87) | VERIFIED | Add the missing citation (8am report) |
| 7 | "Salesforce's claim that ASEAN would leapfrog the West" (line 75) | PARTIALLY VERIFIED | **Yes — Salesforce never said "the West"** |

### Notes on claims needing action

**Claim 3 — Spellbook (line 41).** Real and extremely fresh: Spellbook announced **Autonomous Contract Management (ACM)** on June 30, 2026 — early-access/waitlist, not GA ([press release](https://www.businesswire.com/news/home/20260630275244/en/Spellbook-Launches-Autonomous-Contract-Management-the-First-AI-System-That-Powers-Contracts-End-to-End); [product page](https://spellbook.com/acm)). But Spellbook explicitly positions ACM *against* CLM ("ACM is not another CLM"; Artificial Lawyer headlined it ["CLM Killer"](https://www.artificiallawyer.com/2026/06/30/spellbook-launches-clm-killer-acm)). Legal-tech readers who saw the launch three days ago will catch the inversion.

- Current wording: "autonomous tools like Spellbook's new CLM point that way"
- Suggested replacement: "autonomous tools like Spellbook's just-announced ACM — pointedly *not* a CLM, but agents doing the contract lifecycle end to end, contracts 'reviewed and redlined before a lawyer ever opens' them — point that way (early access only, for now)"

The "before a lawyer ever opens it" quote is a near-verbatim match for P1's thesis; worth using.

**Claim 4 — Microsoft (line 41).** The product is **Copilot Cowork**: announced March 9, 2026, GA worldwide June 16, 2026, built on Anthropic's Claude Cowork technology ([announcement](https://www.microsoft.com/en-us/microsoft-365/blog/2026/03/09/copilot-cowork-a-new-way-of-getting-work-done); [GA post](https://www.microsoft.com/en-us/microsoft-365/blog/2026/06/16/copilot-cowork-is-now-generally-available)).

- Current wording: "Microsoft's Copilot 'coworker' is a real step on that axis"
- Suggested replacement: "Microsoft's Copilot Cowork — GA worldwide since mid-June — is a real step on that axis"
- One caution: Microsoft avoids "autonomous" (human checkpoints throughout), and at GA Cowork **still cannot edit Word files** (community-confirmed, Jun 16). That detail actually strengthens the draft's "we never leave Word" argument — consider using it rather than hiding it. Also connects to the existing "Rugpulled by Cowork" post.

**Claim 5 — Fulcrum / ASEAN lag (line 87).** The [Fulcrum article](https://fulcrum.sg/what-is-shaping-artificial-intelligence-ai-governance-policies-in-southeast-asia/) supports regional unevenness but: (a) the "two to three years" figure appears **nowhere** in it; (b) it groups Singapore *with Malaysia and Thailand* as the established ecosystems rather than singling it out; (c) **Vietnam**, not Singapore, was first in the region to pass a binding AI law (in force March 1, 2026).

- Current wording: "Southeast Asia is still early, Singapore a clear standout while the rest of the region trails advanced markets by two to three years"
- Suggested replacement: "Southeast Asia's picture is uneven — Singapore leads on legal-sector AI infrastructure, several members still lack basic data-protection laws, and Vietnam (of all places) beat everyone to a binding AI law"
- Drop the "two to three years" entirely unless a new source is found; it is unsupported.

**Claim 6 — 54%/43% (line 87).** Both figures verified verbatim against [8am's own summary](https://www.8am.com/blog/ai-adoption-law-firms-2026-legal-industry-report). The draft currently cites nothing for them — add the 8am link (the LawNext link already used at line 29 also carries them, so re-linking that is acceptable).

**Claim 7 — Salesforce "leapfrog the West" (line 75).** The bet is real — [Salesforce 2026 ASEAN Predictions](https://www.salesforce.com/ap/news/press-releases/2025/12/12/salesforce-2026-asean-predictions), prediction #2 literally headed "ASEAN Leapfrogs to the Agentic Era." But the release never mentions "the West" — the leapfrog is over *legacy infrastructure* (the PC-to-mobile analogy), and it's hedged ("may be poised"). Houfu's own January post said "leapfrog with AI adoption," not "leapfrog the West"; his tracking file already flags this exact caveat.

- Current wording: "I also bet *against* Salesforce's claim that ASEAN would leapfrog the West."
- Suggested replacement: "I also bet against Salesforce's prediction that ASEAN would 'leapfrog' into the agentic era, unburdened by legacy systems." (Link the press release. If keeping a West comparison, attribute it as your gloss, not their claim.)

**Claim 1 (optional).** The 69% is *general-purpose* gen AI use by individuals; 42% is the legal-specific figure. Draft phrasing ("has adoption at 69%") is defensible as-is; only tighten if reviewers push.

---

## 2. New insights worth considering

### P1 — human out of Word

- **Harvey LAB: frontier agents complete <10% of legal tasks end-to-end** (best model 7.1% all-pass), at ~$50.90/task and ~22 min latency ([Harvey LAB initial results](https://www.harvey.ai/blog/legal-agent-benchmark-initial-results)). *Include* — one sentence hardens "fail at half-time" with a number instead of vibes, and the economics undercut effortless orchestration.
- **Microsoft shipped a Legal Agent inside Word (Apr 30, built by the acqui-hired Robin AI team, runs on Claude)** with a "deterministic resolution layer" and citation-linked redlines ([ComplexDiscovery](https://complexdiscovery.com/microsoft-puts-legal-agent-inside-word-sharpening-contract-review-competition)). *Consider* — it's the strongest single example of the draft's "industry put the AI *inside* Word" argument; one clause would do.
- **The validation bottleneck is acquiring legal teeth**: *US v. Heppner* (SDNY, Feb 2026) held consumer-AI chats not privileged, and commentators flag that forwarding an agent redline without independent review invites work-product challenges ([ComplexDiscovery](https://complexdiscovery.com/microsoft-puts-legal-agent-inside-word-sharpening-contract-review-competition)). *Strongly consider* — this reframes the draft's "I open Word because I don't trust it" as not just a trust problem but a professional-responsibility one: the human validation step is being *legally entrenched* at the same moment vendors engineer it away. Genuinely additive to P1's argument.
- Anthropic's May 12 legal push (20+ connectors, 12 plugins; lawyers now the most engaged Cowork users of any profession) ([LawSites](https://www.lawnext.com/2026/05/anthropic-goes-all-in-on-legal-releasing-more-than-20-connectors-and-12-practice-area-plugins-for-claude.html)). *Skip for P1* — ecosystem context readers already have via the Cowork post.

### P2 — jagged frontier

- **The most quotable statistic of the half-year**: Vals AI's independent re-run of Harvey's LAB — top models pass ~90% of individual rubric criteria but fully resolve only ~11% of tasks ([Vals hLAB](https://www.vals.ai/benchmarks/hlab)). "Almost right everywhere, fully right almost nowhere" *is* the jagged frontier, quantified. *Include* — this is the external confirmation the P2 section currently lacks (it leans entirely on Houfu's own two posts).
- **Harvey itself now uses the phrase "jagged intelligence"** — no single model leads every practice area ([Harvey LAB](https://www.harvey.ai/blog/legal-agent-benchmark-initial-results)). *Include as one clause* — the biggest vendor adopted the prediction's vocabulary.
- **CJ Sundaresh Menon named the "jagged frontier" as pitfall #1** at APAC Legal Congress 2026 ([keynote](https://www.judiciary.gov.sg/news-and-resources/news/news-details/chief-justice-sundaresh-menon--opening-keynote-at-the-apac-legal-congress-2026)). *Strongly consider* — Singapore's Chief Justice adopting the thesis is the strongest possible "prediction holding" signal, and it's local. Perfect for this blog's audience.
- Princeton agent-reliability paper: "recent capability gains have only yielded small improvements in reliability"; accuracy can't distinguish predictable from unpredictable failure — and only the former permits human/agent task-partitioning ([arXiv 2602.16666](https://arxiv.org/html/2602.16666v2)). *Consider* — the academic backbone, and the partitioning quote ties P2 to P1. But the section is already strong; only if length allows.
- HBS "persuasion bombs" follow-up (AI escalates persuasion when validators push back) ([Lakhani Substack](https://professorkl.substack.com/p/discovering-ais-jagged-frontier-and)). *Skip* — fascinating but belongs to a future post, not the scorecard.

### P3 — usage under 20%

- **The adoption/intensity scissors gives the draft's "two different axes" insight external legs**: Filevine's Trust Index found 75% of AI-using lawyers save only 1–5 hours/week ([Filevine](https://www.filevine.com/guides/ai-trust-index-survey-report)); a federal-judges survey found 61.6% "have used" AI but only 5.4% daily ([LawNext](https://www.lawnext.com/2026/03/survey-finds-majority-of-federal-judges-have-used-ai-in-their-work-but-daily-use-remains-rare.html)). *Consider one line* — it reframes the miss: the profession's *intensity* still sits under Houfu's original 20% bar; he personally crossed a frontier the industry hasn't. That's a more interesting confession than "I was wrong."
- Law360: 70% of firm attorneys use AI weekly, but positive sentiment among power users *fell* from 73% to 44% ([Law360](https://www.law360.com/articles/2454764/the-2026-ai-survey)). *Skip* — good P2 color, but the post has enough.

### P4 — hallucinations

- **Sanctions curve went vertical**: 203 US sanction cases in Jan–Apr 2026 vs 279 in all of 2025; courts now apply per-infraction formulas ($500/fake citation) ([legalaiinsights tracker](https://legalaiinsights.com/risk-digest/ai-citation-hallucination-sanctions-federal-courts)). *Include* — one number proves "unsolved" is decisively holding; the draft currently has zero external evidence in P4.
- **Princeton CITP**: GPT-5.1 hallucination rates *regressed* vs earlier models (6.57%, p=0.001) — yet GPT-5 in an agentic harness is the best cite-checker available (100% recall on non-existent citations) ([CITP blog](https://blog.citp.princeton.edu/2026/05/27/can-ai-reduce-burdens-on-courts-by-automatically-verifying-citations)). *Strongly consider* — this is the perfect P4 datapoint: "unsolved" confirmed AND "manageable via structure" confirmed, with the ironic wrinkle that the working structure is another agent.
- **Singapore has its own sanctions jurisprudence now**: *Tan Hai Peng Micheal v Tan Cheong Joo* [2026] SGHC 49 — S$5,000 personal costs each for two solicitors, escalated deliberately for deterrence ([judgment](https://www.elitigation.sg/gd/s/2026_SGHC_49)). *Consider* — local, named, and the blog's audience will care more about SGHC than SDNY. One sentence.
- 9th Circuit *LNU v. Blanche*: source of fabrication "ultimately irrelevant"; the sanctionable act is the cover-up ([Reuters](https://www.reuters.com/legal/litigation/us-appeals-court-sanctions-lawyers-over-ai-hallucinations-lack-candor-2026-06-03)). *Skip* — doctrinally interesting, but P4's section is about Houfu's lived agent experience; don't dilute it.
- MinLaw's Guide officially sanctions "human-on-the-loop" (autonomous operation with oversight) for low-risk tasks ([MinLaw](https://www.mlaw.gov.sg/launch-of-guide-for-using-generative-artificial-intelligence-in-the-legal-sector)). *Consider for P1 instead* — a regulator quietly pre-approving the human-out-of-Word workflow is a "what keeps the bet breathing" point, and Houfu already has a MinLaw post to link it to.

### P5 — theatre / ASEAN

- **Axiom: 96% adopted, 7% scaled, 83% can't measure whether spend works, 100% raising budgets anyway** ([Axiom](https://www.axiomlaw.com/resources/articles/legal-ai-survey-report)). *Include* — the single best quantification of "checkbox theatre" published all year. The 96/7/83/100 sequence is almost comically on-thesis.
- Thomson Reuters: only 15% of organizations have adopted any agentic AI; 18% track ROI; 40% of firms get contradictory AI instructions from different clients ([TR Institute](https://www.thomsonreuters.com/en-us/posts/technology/ai-in-professional-services-report-2026)). *Skip* — Axiom covers the same ground better.
- **Vietnam's AI law complicates the leapfrog verdict**: first binding AI law in Southeast Asia, in force Mar 1, 2026 — but optimized for state control, not legal-sector capability ([Tech Policy Press](https://www.techpolicy.press/vietnams-new-ai-law-balances-innovation-push-with-tight-state-control)). *Consider* — "leapfrog depends on which race you're scoring" is a very Houfu "neither is wrong" move, and it's needed anyway once the Fulcrum correction lands.
- Singapore's state stack (MinLaw Guide Mar 6, LawSoc advisory Apr 2, PSG grants, CJ/Minister committee) with the government admitting it doesn't measure junior-lawyer impact ([parliamentary answer](https://telescope.gov.sg/transcript/29479)). *Skip for this post* — rich material, but it's a future post ("theatre question, asked of a government"), and the draft already has the MinLaw thread.

---

## 3. What the LegalQuants community talked about (Jan–Jun 2026)

*(Corpus note: chat volume is thin Jan–Feb, explodes mid-March; daily digests run 14 Mar–24 Jun.)*

### The half-year arc

**Jan–Feb:** scraping agent-like behavior out of enterprise Copilot under IT's nose. Standout quote, already in January: "Once you get the initial repo right… it just does my work. Preparing filings, writing my memos. I can go solo now" — against "the mindset is still so 2024" at a AU$200BN fund. **March:** the personal-agent ("claw") wave — OpenClaw on Raspberry Pis, the orchestration-layer thesis crystallizing ("study the harness, not the model"), billable-hour disruption debates. **April:** platform churn (Claude for Word, Microsoft's Word legal agent, GPT-5.5) plus the first hallucination-liability casualties (the Sullivan & Cromwell filing dominated Apr 22; consensus: "an education and process problem, not an AI problem"). **May:** the community builds collective open-source infrastructure to rival vendors — MikeOSS→LQ.AI ("the deepseek moment of legal AI"), the lq-skills repo, LQ contributions landing in Anthropic's Apache-2.0 Claude for Legal. **June:** industrial-scale firm adoption meets real displacement — paralegal cuts, skipped junior hires ("AI will replace people" judged the more accurate version), benchmark wars (Harvey accused of "bench maxing"), and geopolitics.

**The tone shift in one line:** January's question was "how do I get IT to approve this"; June's was "do legal AI vendors have a moat against foundation labs at all, and firms are cutting paralegals."

### Community sentiment vs each prediction

**P1 — complicates it, in a way the draft already intuits.** Agent-only review exists in production personal stacks (an MSA "redlined by agent" via Adeu, Jun 23; a voice agent that pulls a contract from Slack, reviews, redlines, returns markup; one member's agent running his kanban unattended — that member being Houfu). One member (Jun 16) says legal research and contract review "now feel like admin work." But the community's *settled* position (the "Docx Problem" vault MOC) is that Word is unkillable: Claude for Word "kills the escape-from-docx thesis," and Copilot Cowork went GA still unable to edit Word files. Community verdict: **the agent moved into Word rather than the human moving out** — the format didn't lose; it absorbed the agents. This is exactly the draft's line 37 argument, independently arrived at; the draft can note the community reached the same verdict.

**P2 — emphatic agreement, without ever using the phrase.** Six months of lived jaggedness: Claude missing issues in multi-case summaries it catches single-case ("I feel like that shouldn't be a thing anymore," Jun 16); "insidious elision-type hallucinations" on nuanced work (Jun 6); a member translating cases into Chinese for DeepSeek when Claude's inference failed; "vibe coded apps are MUCH further away from production than I realised" (the community founder, April). The community's benchmark boom (member cite-check benchmarks, dissecting Harvey's LAB the day it launched) exists *precisely because* nobody can predict where models fail. The June "asymmetric skill-atrophy" insight — "AI helps most where it matters least"; a senior litigator no longer trusts model judgment "on anything novel" — is almost a restatement of P2.

**P3 — confirms the miss, and explains why the bet felt safe.** Superuser usage blew past any 20% ceiling: "We offboarded our CCH and tax notes because AI can do it faster and better" (Jun 16); "my life has completely changed at work with AI adoption" (Jun 27); 100% Copilot-CLI adoption across one company's legal team (Jun 30). But the community self-identifies as the outlier: "There are exceptions (basically, this entire group lol)" and "it's hard to overstate how low the innovation rate is in biglaw at the practice level" (both Jun 27). Houfu's own arc is visible in-corpus: in April a Wordsmith user dreaming of Claude ("every day I dreamt that my life will be so much better if I had Claude," Apr 23); by late June running the subscription poll and letting an agent work unattended.

**P4 — strong agreement on both halves; "structure" is now community doctrine.** The incident record escalated all half-year (S&C April; a hallucinated statute in a letter to a judge, May; Pinsent Masons, June; Lexis's own verification passing 3 fake cases *including Mata v. Avianca*, Jun 23). The community's answer matches P4 almost word for word: "you can't prompt your way out of sycophancy — the fix is a validation gate" (May 25); hardcoded skill rules "to limit LLM discretion and thus hallucination risk" (May 21); multi-model dialectic; "negligent architecture" as the coming malpractice standard. And direct evidence for "trending worse with autonomy": "There's actually an insidious hallucination in here. It made up a Restatement citation… there were strict instructions to rely on and cite only sources it had read. So that's fun." (Jun 22, inside a constrained agent flow).

**P5 — theatre confirmed verbatim; pockets confirmed (the community IS one); ASEAN leapfrog absent.** The money quote (Jun 27, NYC in-house): partners say "their firm bought hagora but there is no mandate or training for use. So it is for show many times." Same thread: an NZ partner proud of Harvey while "things were now actually taking them longer." The vault codified the mechanism *the same month as Houfu's predictions* (insight dated 2026-01-21): "Innovation Heads at Law Firms Optimize for Survival Not Transformation." Kirkland's $500M build was read as "a client-optics play — clients won't see the difference in the work product"; "agentic" was formally declared a marketing word (May 9). Counter-trend: by Q2 some adoption stopped being performative (Freshfields co-building with Anthropic, Hanson Bridgett all-in, actual paralegal cuts). On ASEAN: zero institutional-leapfrog narrative all half-year — every firm-transformation story was US/UK/EU — but a real Singapore *state-level* countercurrent (the foreign minister publicly using NanoClaw; "Singapore is playing this game at another level"; "Singapore is the world's LQ," May 19).

*(Caveat: vault quotes are synthesis, not verbatim chat; anything quoted in the post should be checked against the primary chat, and members kept anonymous per the LegalQuants anonymization precedent.)*

---

## 4. Bottom line for the draft

### Must-fix (accuracy — do before anything else)

1. **Line 41, Spellbook**: change "Spellbook's new CLM" → ACM, not-a-CLM framing, early-access caveat. Legal-tech readers saw this launch three days ago; the current wording is the one error most likely to get called out.
2. **Line 41, Microsoft**: "Copilot 'coworker'" → **Copilot Cowork** (announced March, GA June 16).
3. **Line 87, ASEAN lag**: delete the unsupported "two to three years"; soften "clear standout" to match the Fulcrum source; ideally add the Vietnam-first-AI-law wrinkle.
4. **Line 75, Salesforce**: reword to "'leapfrog' into the agentic era, unburdened by legacy systems" and cite the [press release](https://www.salesforce.com/ap/news/press-releases/2025/12/12/salesforce-2026-asean-predictions); "the West" is Houfu's gloss, not Salesforce's claim.
5. **Line 87, 54%/43%**: add the [8am citation](https://www.8am.com/blog/ai-adoption-law-firms-2026-legal-industry-report) — currently uncited.

### Worth adding (each is one sentence-to-clause; watch total length)

- **P2**: the Vals/Harvey LAB pair — models pass ~90% of criteria but resolve ~11% of tasks, and Harvey itself now says "jagged intelligence" ([Vals](https://www.vals.ai/benchmarks/hlab), [Harvey](https://www.harvey.ai/blog/legal-agent-benchmark-initial-results)). The P2 section currently rests only on Houfu's own posts; this is the external confirmation it needs.
- **P2**: CJ Menon naming the "jagged frontier" as pitfall #1 ([keynote](https://www.judiciary.gov.sg/news-and-resources/news/news-details/chief-justice-sundaresh-menon--opening-keynote-at-the-apac-legal-congress-2026)) — local, apex-of-profession validation.
- **P1**: the <10% end-to-end task completion at ~$50/task from Harvey LAB — hardens "fail at half-time" with a number. Optionally the Cowork-can't-edit-Word detail, which strengthens the draft's own "we never leave Word" argument.
- **P4**: one external anchor — either the sanctions-doubling trajectory ([tracker](https://legalaiinsights.com/risk-digest/ai-citation-hallucination-sanctions-federal-courts)) or the Princeton CITP regression-plus-agentic-cite-checker finding ([CITP](https://blog.citp.princeton.edu/2026/05/27/can-ai-reduce-burdens-on-courts-by-automatically-verifying-citations)). The CITP one fits P4's "unsolved but manageable via structure" framing best.
- **P5**: the Axiom 96/7/83/100 sequence ([Axiom](https://www.axiomlaw.com/resources/articles/legal-ai-survey-report)) — the year's best quantification of checkbox theatre.
- **P3 (optional)**: one line on the adoption/intensity scissors (Filevine 1–5 hrs/week; judges 62% tried/5% daily) — reframes the miss as "I crossed a frontier the profession hasn't," which sharpens rather than softens the confession.

### Interesting but skip

- HBS "persuasion bombs," LNU v. Blanche candor doctrine, the full Singapore state-stack story, LegalOn's five failure modes, Law360 sentiment collapse, TR Institute figures, the privilege/Heppner thread — all future-post material, not scorecard material. (Heppner is the one borderline case: if P1's validation paragraph gets expanded, the "trusting agent output without opening the file may forfeit work-product protection" point is the most genuinely additive idea in the entire sweep.)
- LegalQuants quotes: the community evidence is best used as *background confidence* for the existing verdicts, not new quoted material — the draft's voice is first-person scorecard, and the community verdicts (agent moved *into* Word; theatre "for show many times"; superusers as exceptions) already align with what the draft says. If one quote earns a place, it's the anonymized "their firm bought [tools] but there is no mandate or training for use. So it is for show many times" for P5 — verify against primary chat and anonymize before use.

### Length warning

The draft is tight and voice-strong. The "worth adding" list above totals ~6 sentences max; per the length-audit-first rule, anything more should displace existing words, not extend the post.
