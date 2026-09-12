---
word_budget: 1800
budget_tolerance: 10
primary_audience: marcus
secondary_audience: [sarah, wei]
thesis_keywords: [bookcase, LawNet, peers, pipeline]
protected_lines: []
voice: {lane: news-commentary, moves: [neither-is-wrong, specific-numbers, solo-counsel-return]}
interrogation: {diagnosis: "RESOLVED — peer group is AustLII/CanLII, not Thomson Reuters", differentiation: "RESOLVED — near-empty field; see prior art", framing_risk: "RESOLVED — strategy critique with receipts", subject: "LawNet only; juniors split out"}
must_link: [lawyers-prompt-engineering-wrong, budget-2026-lawyers-ai-drivers-seat, ect-no-lawyers-zeeker]
tags: [TechLawFest, LegalTech, AI, Singapore, Law]
target_date: ~
status: PITCH v4 — amended to follow Houfu's draft (2026-09-12). The draft leads.
---

# Pitch: techlawfest-2026

> **Note on this document.** Houfu is writing this one himself and will decide the structure. This pitch
> deliberately contains **no beat-by-beat outline**. It fixes the thesis, the scope and the guardrails,
> and then hands over an organised evidence inventory. Sequence it however it wants to be sequenced.

## Original framing (verbatim, never edited)

> 11 years in, TLF remains strong and I have taken real value in meeting friends new and old. However, I have 2 "dark" takeaways to explore. The excitement and fascination has moved on, as more people move on to adoption, several dangers to technology adoption are starting to surface for me. 1. junior lawyers are in danger of being left behind as focus remains on personal productivity, ROI and security/harm prevention; 2. My most controversial take: LawNet 4.0 sucks. I've waited for years for them to figure out how to respond to AI. In the few years it had a Q&A and adding more sources, it's become clogged and dense, doubling down on the more sources. Somebody had a chance to rethink LawNet's strategy and it turned out to be more of the same. This has real A2J concerns as LawNet used to be a local LexisNexis/WestLaw thing. While the big global companies moved on to Protege and CoCounsel, LawNet is still aiming to be a bigger book case.

**Scope change, 2026-09-12:** takeaway 1 (juniors) is split into its own future post. This post is LawNet
only. Reason recorded in discussion.md.

## Title

**Houfu's title (draft, authoritative):** *Will LawNet Become Just a Bigger Bookcase?*
(Earlier working titles kept for reference only: *The Bigger Bookcase* · *LawNet Had Three Exits*.)

## Thesis

LawNet 4.0 was unveiled at TechLaw.Fest 2025. A year later, from the same podium, its second act turned
out to be more content: books, ten statutes, podcasts, bulk downloads. Every comparable national legal
information provider met the AI era differently — the UK opened its data, AustLII partnered for
capability, CanLII built its own. **LawNet had three exits available and took none of them**, and because
it is the national utility rather than a vendor, that choice sets the ceiling for what an ordinary
Singapore practitioner can do.

## Pitch

A year ago LawNet 4.0 launched at this conference and I was ready to be convinced. This year, from the same stage, SAL announced what a year of work produced: the AI Q&A now covers all areas of law instead of just contract, Academy Publishing books are in the search index, ten statutes have been marked up, plus an annotations feature, a LegalOn partnership and a sentencing repository coming. Five of those six are more content. In the same twelve months LexisNexis shipped Protégé Work and Thomson Reuters shipped a fully agentic CoCounsel — but that comparison is unfair, and it is not the one that matters. The fair comparison is to LawNet's peers, the other national legal information providers, and it is worse. AustLII is a charity and it partnered with LexisNexis to build AI capability on its own data. CanLII is a non-profit and it shipped an AI research tool in March. The UK published its judgments with an open API and let others build. LawNet is better resourced than any of them, and what it built was a bigger bookcase.

## Evidence inventory

Organised by what each piece supports. Sequence as you like; everything below is verified and sourced in
`research.md`.

### A. What LawNet actually shipped — the receipts

**From SAL's own TLF 2026 podium** (Justice Kwek Mean Luck, Day 2): Q&A extended from contract law to all
areas · Academy Publishing books into Classic Search and AI Q&A · legislation extended to ten key
statutes (incl. Penal Code, Evidence Act) · AI-generated annotations of statutory provisions · LegalOn
Technologies partnership · revamped Sentencing Information and Research Repository next year.
**Five of six are corpus expansion or corpus organisation. None is workflow, drafting or agentic.**

**From LawNet's own 2026 release notes:** Sept — ten legislation, annotations (Companies Act only), books
in AI Search, downloadable book pages. May — bulk download of up to 50 documents, Regional Counsel
Podcasts, two more statutes, a book reading interface. Dec 2025 — journals/notices/commentaries in
Classic Search, books, **India Supreme Court cases** via SCC Online, AI summaries for tribunal decisions.

**The single sharpest detail** — LawNet's own September release note, on books now feeding AI Search:

> "access to the full book content requires a valid purchase of the digital book or an Academy Library
> subscription"

The AI grounds its answers in sources the reader may not be able to open. A bigger bookcase with some
shelves locked.

### B. The credit that must be paid first

This is the load-bearing fairness move, not a courtesy. Pay it properly and the critique becomes
unrebuttable; skip it and the piece reads as a hit.

- AI summaries flag **low-confidence paragraphs in yellow** and **terms absent from the source in red**,
  with paragraph footnotes back to source. That is better-surfaced hallucination engineering than either
  global vendor shows a user.
- **Search Logs** exist because the team states plainly that the AI "may produce different responses to
  similar queries" — an honest admission of non-determinism with an audit trail attached.
- AI search is **bundled into the basic subscription**, not sold as an AI upsell.
- Search is genuinely ~10× faster than 3.0; 95% of results inside two seconds.

**The neither-is-wrong formulation:** LawNet optimised for verifiability. The vendors optimised for doing
the work. Neither is wrong. But only one of those bets compounds — and a national utility that optimises
for verifiability while charging for access has to answer a question the vendors don't.

### C. The peer comparison — the part nobody else has assembled

| Who | What they are | What they did about AI |
|---|---|---|
| Find Case Law (UK National Archives) | State | Opened the data: free judgments, public API, Open Justice Licence permitting computational use |
| AustLII | Non-profit charity, UTS-hosted | Partnered — LexisNexis agreement (29 Jul 2026) to build AI capability on its own data, kept free |
| CanLII | Non-profit, profession-funded | Built it — Search+ AI tool (Mar 2026), AI plain-language summaries, published GenAI policy |
| HKLII | University (HKU) | Built an AI module, ML/NLP query classification |
| SCC Online (India) | Commercial | Conversational assistant over 4M+ judgments |
| LBox (Korea) | Commercial | Restructured into a workflow platform |
| **LawNet** | **Statutory body** | **Expanded the corpus** |

Prof Andrew Mowbray AM, AustLII's Executive Director, worth quoting:

> "'Free access to law' means something different in 2026 than it meant 30 years ago when we started
> AustLII. Our users have an expectation that AI will be used to enhance the research that they do."

**And the Singapore-internal comparator, which is sharper than any of them:** SMU's SOLID — MinLaw-
supported, open data, public API — and on 9 September 2026, during TechLaw.Fest week, SMU partnered with
Legora to put agentic AI in the law school. Same country, same week, opposite bets. This also updates
`budget-2026-lawyers-ai-drivers-seat`, which had SOLID as two years away.

### D. Why it is an A2J problem and not a product review

LawNet is not a vendor you can decline. ~10,000 users; **75%+ of Singapore lawyers in private practice**.
When Westlaw and Lexis go agentic and LawNet goes encyclopaedic, the local practitioner gets the weaker
tool by default, and the small shop gets it worst — a bigger bookcase is not help to a solo, it is more
to read. Prior art worth acknowledging: [tomoe.asia (2023)](https://tomoe.asia/posts/2023-01-10-free-access-to-case-law-in-singapore)
on what it costs to read a State Court judgment.

### E. Optional — the prompt-engineering thread

July 2026: LawNet ran a training workshop teaching "prompt engineering techniques for legal research."
January 2026: Thomson Reuters put agentic AI into 200+ law schools under the line *"120,000+ future
lawyers shouldn't meet agentic AI on their first day at work."* One clause, earns the backlink to
`lawyers-prompt-engineering-wrong`. **Do not expand into a section** — that is the other post.

## Out of scope

- **Juniors.** Split into its own post. Logged in discussion.md.
- **A UX teardown.** "Clogged and dense" is a real reaction but a list of annoyances is a different,
  smaller piece. Use your own experience as one concrete illustration, not as the argument.
- **LegalWeek Asia.** At most one line if the opening needs it. No argument built on it.
- **A prompt-engineering rerun.** One clause, per E.
- **Zeeker / Cookies as the answer.** One clause at most. The post loses its standing the moment it reads
  as a pitch for your own thing.

## Guardrails

1. **Differentiation — resolved, and it is the reason to publish.** There is almost no critical writing
   about LawNet anywhere. The only popular-register prior art found is the 2023 tomoe.asia piece on
   pricing. Searches for LawNet criticism are dominated by Fordham Law's repository URLs. **This would be
   close to the first public strategic critique of LawNet.** The differentiated asset is the release-note
   forensics plus the peer table — if either becomes vibes instead of receipts, the post loses its reason
   to exist.
2. **Framing risk — HIGH, handled by construction.** LawNet is a small, named, publicly identifiable
   team. Repo precedent: `prompt-engineering-wrong` drew "borders on too critical" feedback and the title
   was broadened off TechLawFest. Rules: credit first and properly (section B); every criticism cites
   SAL's podium or LawNet's release notes; **the target is the strategy, never the execution and never
   the people**; no adjective doing work a citation should do.
3. **The fair-comparison rule.** Do not argue LawNet should have built CoCounsel — it has an easy answer
   ("different mission, thousands of engineers"). Argue against AustLII and CanLII, which are *poorer*
   than LawNet and found a route. That version has no easy answer.
4. **Concede what is true.** CanLII sued Caseway AI over scraping, so corpus protectiveness is not unique
   to LawNet. AustLII's route needed a commercial vendor's money. LawNet carries statutory obligations
   its peers don't. Saying this costs three sentences and buys the whole argument.

## Open questions for Houfu

1. `[HOUFU]` **The opening.** Yours to write, and per the Voice Guide it has to come from your actual
   experience — I've left no placeholder to lean on. The natural hook is that you were in the room in
   2025 when 4.0 launched and in the room in 2026 when the sequel was announced, but only you know what
   that felt like.
2. `[HOUFU]` **One concrete LawNet task that took too long.** This is the piece I cannot supply and the
   post is materially weaker without it — it is what turns "clogged and dense" from an adjective into
   evidence.
3. `[HOUFU]` **Print pricing?** The SGD 206.92/month figure in the repo is from 2023 and must be
   re-verified before it appears.
4. `[HOUFU]` **Read the tomoe.asia piece?** It is the only real prior art. Worth linking, and worth
   knowing what it already said so you don't repeat it.

## Amendment log

### v4 — 2026-09-12: the pitch follows the draft

Houfu wrote the opening and set the arc. The pitch is amended to match the draft, not the other way
round. What changed:

1. **Title is his:** *Will LawNet Become Just a Bigger Bookcase?* The question form is better than the
   flat noun phrase — it grants that the answer isn't settled, which is the fair version of the
   argument.
2. **The opening is the "old friend" conceit** — LawNet as someone he knew as a law student, who stood
   with him against large firms with armies of interns, and whom he now only sees once a year at
   TechLaw.Fest. This does the work the old scaffold's placeholder could not, and it sets up the ravine
   line later: you only worry like this about someone you like.
3. **Credit has moved, not disappeared.** The scaffold paid credit to the *product* (yellow/red
   hallucination flagging, Search Logs). Houfu cut that and repurposed verifiability into the
   **diagnosis** — "an overemphasis on content, verifiability, the amount of disclaimers — lack of
   confidence in the product." Credit is now paid to **effort and intent** instead: people worked very
   hard on 4.0, ran feedback sessions, bought lunch to get practitioners in a room, and are genuinely
   invested. The framing-risk guardrail is therefore **still satisfied**, by a different and arguably
   better route — the piece is kind about the people and hard on the strategy, which is exactly the
   split it needed.
4. **New arc, replacing the scaffold's:** strategy → emotional (hard work, the lunch, the ravine) →
   the world already moved (NUS/Harvey, SMU/Legora, Lexis and Westlaw pushing into Singapore) → what is
   at stake (succession, not cost).
5. **The A2J argument is re-aimed.** It was about a solo not affording the better tool. It is now about
   **succession**: a generation that learns research on Harvey or Legora and meets LawNet only as the
   place you fetch an SLR citation. This folds the abandoned juniors takeaway back in as the *stake*,
   which is a better structure than the original two-takeaway pitch.
6. **thesis_keywords** updated to `[bookcase, LawNet, peers, pipeline]`. "verifiability" and "exits"
   were thin in the draft and "pipeline" is now load-bearing.

**Still open:** the concrete LawNet task that took too long (partially filled by the statute-annotations
observation in the strategy section), and whether to print pricing.
