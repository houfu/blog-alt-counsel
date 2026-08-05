# Discussion: legal-oss-maintainer

Working notes for the post on maintaining lq-ai, learning to maintain other people's code, and the long-term stewardship vision for legal open source.

## 2026-07-27 — Session 1: Idea → draft pitch

**Context**

Houfu proposed an article about contributing to legal open source: his experience working on lq-ai since end June 2026, especially learning to maintain other people's code, and a long-term vision — "my desire for a long term future lies in open source, not being the great guy with the greatest idea made for free, but mentoring and guiding legal open source project (maybe even from law firms) to long term sustainability."

**Key facts from Houfu (this session)**

- Started on lq-ai at the end of June 2026 (~1 month before this session).
- Repo: `legalquants/lq-ai` (LegalQuants community project).
- He built `houfu/lq-ai-maintainer` to support his maintainer activities — his words: "I *tried* to develop" it (state unclear; flagged as a question).

**What Claude did**

- Read Part 1 (`legal-oss-contribution` / "Lawyers Are Building. Just Not On Each Other's Code.", published 2026-05-11) and its discussion tail. Identified that this idea is effectively the Part 2 that post promised ("what works" + redlines lessons), with a stronger arc: the author of the "lawyers don't push to each other's code" diagnosis is now maintaining someone else's code.
- Invoked generate_a_pitch skill; read Voice Guide Part 4 (Lane 2 "Learning in Public" template fits).
- Asked the mandatory genuine-experience question. Houfu answered the factual part (timeline, repos) but not yet the emotional core — re-asked; still open.
- Attempted to verify repo data: `add_repo` failed for both repos (cross-owner tier limit for legalquants/lq-ai; no credential visibility on houfu/lq-ai-maintainer, possibly private). Public GitHub API and web pages are proxy-blocked in this session. Decision: do not route around network policy; all quantitative claims marked `[UNVERIFIED]` in pitch.md, numbers to come from Houfu directly.
- Drafted pitch.md (marked DRAFT pending approval) with: draft titles, ~180-word pitch with explicit `[EMOTIONAL CORE]` placeholder (not invented, per voice principle 8), provisional interrogation answers, must-link posts, suggested tags.

**Decisions (Claude's recommendations, pending Houfu)**

- Frame as explicit Part 2 of `lawyers-not-on-each-others-code` — the callback is earned. The originally promised Part 2 content (docassemble/courtlistener deep-dive) may be descoped in favour of lived lq-ai experience; needs explicit decision.
- Frame the "mentoring/stewardship future" as a hypothesis tested in public, not a conversion narrative — one month in is honeymoon territory (interrogation Q1).
- Framing risk flagged: post must not read as commentary on lq-ai code quality or a dig at law-firm OSS (interrogation Q3).

**Open questions (blocking pitch lock)**

1. Emotional core — the specific lq-ai moment driving the post
2. Lived numbers — PRs reviewed/merged, hours/week, how role came about
3. What lq-ai does + who else maintains it
4. State of lq-ai-maintainer
5. Part 2 framing confirmation
6. Target publish date / external hook

**Next steps**

- Houfu answers open questions → lock pitch → tags confirmed → outline → draft

## 2026-07-27 — Session 1 (cont.): Emotional core landed; Wei Lin pitch-stage consult

**Houfu's answer (the emotional core, verbatim in pitch.md)**

Not a success story. Double uncertainty: as contributor "don't know if my code is good"; as maintainer "don't know if this code is good". Wrote the agent (lq-ai-maintainer) to help, but "fable claims that there is no open source code review agent that can help a non technical audience". Few PRs coming through, response times below ideal, no release timeline. Believes foundations + governance help long term; "results will have to be seen". Asked: "Would that be interesting to my audience?"

**What Claude did**

- Rewrote the pitch (v2) around the double-uncertainty core and the honest non-success metrics; kept `[UNVERIFIED]` markers on all counts.
- Ran a **pitch-stage Wei Lin consult** (getting-feedback skill; single reviewer per routing table "learning in public / personal struggle"; explicitly NOT counted against the 2-round draft cap — noted here so the cap stays honest). Memory file passed and MEMORY_UPDATE appended.

**Wei Lin verdict**: Yes, unambiguously interesting — "the mess is the post"; a messy-middle maintainer diary is higher-trust than a success story. Title locked on his pick: "I Said Lawyers Don't Work on Each Other's Code. Then I Started."

**Wei Lin unique catches (carried into pitch.md as draft obligations)**: own the Part 1 "what works" pivot in one early sentence; scene treatment for the lq-ai-maintainer beat; protect load-bearing line "This isn't a success story, and I'm writing it anyway"; build the framework; real numbers not "few PRs" (+ does maintainer time replace own-project time?); stewardship stays hypothesis-under-test.

## 2026-07-27 — Session 1 (cont. 2): Part 1 callbacks + Mike status check

Houfu approved the pitch direction ("Yes let me get some details later") — lived numbers deferred, pitch effectively locked on direction pending those details. He then asked what Part 1 material can still be brought in, and whether to check if the Mike situation has changed.

**What Claude did**: news-level Mike status check (repo stats unavailable — session network policy blocks GitHub for out-of-scope repos). Findings + callback assessment written to `research.md`. Headlines: Mike still actively shipping (July 16 release), license still AGPL-3.0 (no announced change despite May permissive-switch musings), mikeoss.com positioning around BYO-API-key/local control. The "roots" metrics (external merged PRs, fork→contributor conversion) need repo data — flagged for Houfu to run the Part 1 `gh` queries locally or for a draft-time session with access.

**Recommendation recorded**: Mike day-90 revisit is the strongest callback (works regardless of outcome); close the LegalQuants infrastructure loop (Part 1 measured the absence, lq-ai attempts the presence); lived author-vs-maintainer callback; skip Harvey re-litigation. Open narrative question for Houfu: did lq-ai predate Part 1 / any causal link?

## 2026-07-27 — Session 1 (cont. 3): Local session — all repo data verified

Session continued from another machine; `gh` now available. Re-ran everything that was blocked. `research.md` rewritten with live figures (2026-07-27); all `[UNVERIFIED]` markers on repo data cleared.

**Headline findings**

- **lq-ai created 2026-05-08 — three days before Part 1 published**, during its research window. Open question for Houfu: did he know it existed when writing Part 1?
- **Concentration**: Kevin-Tucuxi authored 193 of 216 merged PRs (89%) and 664 commits; Houfu has 1 commit.
- **Review culture barely exists**: 6 inline review comments in repo history, Houfu wrote 4. **Zero formal approvals** on any external PR.
- **Two-speed latency**: Kevin self-merges at median 0.3h; everyone else median 3.2h, mean 61h, max **577.6h** (mkorpela's 2-line fix, 24 days, merged by Houfu).
- **Backlog**: 63 open PRs excl. dependabot — but 47 are a single SaifAlYounan burst filed in **3.4 minutes**. Excluding it: 16 open, median age 16 days.
- **Houfu's real shape**: 1 commit, 4 of 6 review comments, 4 merges, 3 open governance/ADR PRs. Stewardship visible in data, not code volume.
- **The poignant artifact**: his own GOVERNANCE.md PR (#311) has been open 7 days.
- **Tool is `houfu/lq-maintainer-agent`** (public, MIT), not `lq-ai-maintainer` (local dir name only) — correct this in the draft. Created 2026-07-10, 35 commits, **0 stars**, v0.4.0 "Momentum" 2026-07-26. Day 2 he reset the whole generated scaffold back to the PRD. v0.7 redesign added *anti-inaction guards* — v1 escalated instead of deciding.
- **Live scene**: the plugin's own `block-writes.sh` hook blocked Claude's `gh api graphql` call this session ("the merge button is a human maintainer's"). Usable directly in the draft; honest counterweight to 0 stars.
- **Mike callback pays off**: now at `Open-Legal-Products/mike` (moved off personal account), 4,016 stars (was 2,657), 1,256 forks, **45 merged PRs across 8 authors** (was 6 merged). Still AGPL-3.0 — the mooted permissive switch never happened. Grew roots modestly, mostly one deputy (amal66, 12). The graduation signals are the **org move and release cadence**, not the forks. Killer comparison: Mike has 4,016 stars and 8 merged-PR authors; lq-ai has 110 stars and about the same.

**Framing risks recorded** (act at draft time, not after): don't let "89% one person" read as criticism of Kevin — frame as bus-factor fragility while crediting the work; **anonymise SaifAlYounan** for the 47-PR burst (Part 1 had to anonymise LegalQuants post-draft — do it early this time); let Houfu land the 0-stars beat himself.

## 2026-07-27 — Session 1 (cont. 4): Thesis locked; Mike reviewer data corrected

**Correction made this session.** Claude first reported that Mike's `bmersereau` had left 16 reviews of other people's code without landing a PR — "someone who showed up purely to review." Wrong: all 16 are **self-reviews on his own PRs**, and 17 of his 18 PRs were closed unmerged. Corrected in research.md §3 with a do-not-repeat note. Accurate cross-review picture: willchen96 22 reviews across 8 authors; b1rdmania 5 across 4 (and **0 merged PRs of his own** — the real pure reviewer); amal66 3 including **CHANGES_REQUESTED on Will Chen's own PR**; osama-ata 1.

**Alexios identified = SaifAlYounan.** Houfu: "he goes by his somewhat arabic name. he's the one shot guy." This reverses Claude's earlier anonymisation advice — he is not a drive-by queue-flooder but the repo's most active commenter (111 comments), 98 PRs at a median 704 lines changed, 1 merged (the smallest: +22/−22 pinning Actions to SHAs), and **expected to start reviewing soon**. New framing: he is evidence that *review capacity, not code supply, is the bottleneck* in an AI-assisted era. Needs his consent before naming.

**Houfu's learning points (his framing, recorded verbatim in intent):**

1. **Will Chen's model is the transferable lesson** — he is still in his project as main contributor, and the progress signal is that he gets someone to check him *while* still dominant. That's a model available to any solo-author project now.
2. **Hard framing constraint**: lq-ai's concentration must NOT be framed as Kevin abandoning, leaving, or stepping back. Structure, not person. Credit the work being carried.
3. **The goal is a CORE GROUP, not a treasured individual.** b1rdmania is exactly the kind of member to prize — but the aim is to create more of them, not to have one. One volunteer reviewer is still a bus factor.
4. **A dispassionate look pushed him toward governance and maintenance.** Tone of the post should follow: cooled-down analysis, neither evangelism nor despair.
5. **Displacement confirmed** — he uses lq-ai inside another project of his own, and the maintenance job is taking a lot of time out of it. Answers Wei Lin's standing ask with a real cost.
6. **Thesis restated and locked**: not "I gave up authoring for stewardship," but *the single-author model is legal OSS's default; I'm testing a community-focused alternative in real time; I'm paying for it in my own project's velocity; it isn't working yet.* Hypothesis under test — matches Wei Lin's requirement.

Pitch v3 written to pitch.md with a "Thesis (locked)" section carrying these three load-bearing claims and the framing constraint.

**Emotional note for the record.** Houfu said "i feel depressed. maybe i am losing a race" on seeing the Mike/lq-ai comparison. Claude's response: the race framing is the archipelago logic Part 1 diagnosed; the repos are 9 days apart in age and lq-ai has merged 216 PRs to Mike's 45; the difference is staffing (a founder who reads code), not talent; his own governance work is invisible by design. Worth remembering when drafting — **the post should not be written from the losing-a-race feeling**, which the subsequent dispassionate reframe (learning point 4) supersedes.

## 2026-07-27 — Session 1 (cont. 5): "Cat-herder-in-chief" — the second model

Houfu supplied the distinction that separates his approach from Will Chen's: on his **first calls with lq-ai** he told the group he wanted to be **"cat-herder-in-chief"** — the herder isn't interested in what the cats are interested in, and he doesn't aspire to say he "wrote" lq-ai. His closing thought: *"there are more ways to a sustainable open source community, especially for lawyers."*

Why this matters to the post (recorded in research.md §5a and pitch.md):

- **Stated before the data, confirmed by the data.** He declared the role on call one; a month later the contribution graph independently matches it (1 commit, 4 of 6 review comments, 4 merges, 3 governance PRs). Strongest available evidence the stewardship claim isn't a retrofit.
- **Supplies the "neither is wrong" section** the post lacked. Will's model: stay main contributor, get checked. Houfu's: never aspire to authorship, herd instead. Both viable; they need different things — Will's needs a deputy who says no, Houfu's needs a core group, "because a herder with no cats is just an unemployed person with a governance doc."
- **Resolves the differentiation question.** Not another contribute-to-OSS post: the case for *a role lawyers can actually hold*. Will can hold Mike's centre because he codes at volume; Part 1's 93 handles showed most lawyer-coders never will.

**Title SETTLED (Houfu, 2026-07-27): Wei Lin's pick, "I Said Lawyers Don't Work on Each Other's Code. Then I Started."** Claude proposed "Cat-Herder-in-Chief" as an alternative title; Houfu rejected it — *"cat herder was meant to be flippant."* Recorded as a settled decision: the phrase is not a title, not a coined framework, and carries no analytical weight; use as a light aside or drop entirely. The substance survives without it (not aspiring to authorship; working on what makes others' contributions land).

**Process note for future sessions:** Claude built a title, a framework, and a differentiation argument on top of a throwaway line before checking its status. Worth catching earlier — ask whether a vivid phrase is load-bearing or offhand *before* constructing on it.

## 2026-07-27 — Session 1 (cont. 6): Agent work counted; pitch scoped down to v4

**Houfu's correction to Claude's framing.** Claude had been describing his contribution as "1 commit, 4 review comments, 3 governance PRs" — treating the GitHub graph as the measure. Houfu: *"while the record of my reviews appear dismal, i've been spending time writing an agent to read Kevin's docs. you can count how many lines there are in that thing. the deferred enhancements already numbered hundreds."*

Counted:

- **lq-maintainer-agent: 23,592 tracked lines** — 81 markdown, 19 YAML, 8 shell — built in 17 days (2026-07-10 → 27). Three design-doc generations (v0.5.1 → v0.6 → v0.7). `rules/canon-map.md` routes **18 question classes** to specific lq-ai docs by stable key, CI-pinned to lq-ai commit `fdeced2e` with a drift check that fails when a doc moves.
- **The corpus it reads: lq-ai `docs/` = 255 markdown files, 94,678 lines.** PRD is 5,197 lines containing **243 unique DE-XXX entries** (Houfu said "hundreds" — confirmed); 23 ADRs at 3,025 lines.

**Why this matters to the post**: the contribution graph structurally cannot see this work — it lives in a different repo and the reading that produced it leaves no trace. Sharper than "governance work is invisible": the *measurement instrument* is wrong. It also reframes the 0 stars (infrastructure sized to one project's complexity was never going to be measured by stars) and evidences the displacement cost.

**Scope intervention (Houfu: "this post seems to be getting very long").** Accurate — Claude had accumulated ~12 threads across the session. Pitch rewritten as **v4: one post, ~2,200 words, 8 sections**, with an explicit **cut list**: full Mike anatomy (compressed to 2 facts), docassemble/courtlistener deep-dive, Part 1 data tour, Harvey/open-source-theatre, the law-firm stewardship vision, AI-generated-contribution as a standalone thesis, and agent internals. All cut material stays in research.md.

**Process note:** the sprawl came from Claude adding a thread per exchange without re-checking total scope. Earlier pitch versions (v2, v3) removed from pitch.md — v4 supersedes.

## 2026-07-27 — Session 1 (cont. 7): Pitch v5 — stewardship restored as the subject

**Houfu:** *"pitch v4 sounds ok, but im still drawn into my original thought that should be about stewardship."*

**Diagnosis — a genuine pitch-drift, Claude's error.** His opening message set the subject: *"my desire for a long term future lies in open source, not being the great guy with the greatest idea made for free, but mentoring and guiding legal open source project (maybe even from law firms) to long term sustainability."* Over the session Claude accumulated data-driven threads (Mike anatomy, review-culture taxonomy, agent line counts) and v4 ended up making the **lq-ai field report the subject and stewardship the conclusion** — the reverse of his intent. Worse, the v4 cut list explicitly dropped the law-firm stewardship vision, i.e. cut the thing he most wanted to write.

**Fix (v5): swap subject and evidence.** Stewardship is now the argument; lq-ai is the proving ground, including the evidence against. Law-firm extension restored as one paragraph in beat 7 (not a section — length discipline from v4 retained). Structure went 8 sections → **7 beats, ~2,400 words**.

**New thesis:** stewardship is a distinct and necessary job in legal open source, almost nobody is doing it, and it's a role lawyers can actually hold. One month in, not working yet, arguing for it anyway. The honesty guard: argue *for* the vocation while showing the evidence *against* it working — both at full strength. What's under test is whether stewardship pays off, not whether Houfu has been converted.

**Second protected line added:** *"I don't want to be the guy with the great idea, given away for free."* — his original framing, now the opening and the thesis in one sentence.

**Which pitch-interrogation question would have caught this earlier?** Not diagnosis, differentiation, or framing risk — it's a fourth failure mode worth noting for the skill: *whose subject is this?* Claude should have re-read the user's opening message against the pitch at each major revision. The research was good; the framing quietly migrated toward what the data made easy to say rather than what Houfu set out to argue.

**Still open (blocking pitch lock)**

- Lived numbers (PRs, response times, hours/week, how role came about; whether maintainer time displaces own-project time)
- Exact framing of the "Fable said no such tool exists" exchange
- Tag confirmation (proposed: OpenSource, LegalTech, Programming, ± AI)
- Part 2 framing confirmation + target publish date

## 2026-07-30 — Session 2: Evidence re-pull — the counter-evidence expired

**Houfu:** *"in terms of evidence of reviews from me and merge, it is starting to work up again. can you collect the evidence to see how we may approach this article."*

Re-pulled all lq-ai and lq-maintainer-agent figures live (`gh` REST, read-only) and diffed against the 2026-07-27 snapshot. Written up as **research.md §8**. Headline: three of pitch v5's four load-bearing negative facts died within 72 hours of being written.

- **First formal reviews in repo history, all his**: 0 → 8 formal reviews (houfu 3 APPROVED / 2 CHANGES_REQUESTED / 1 COMMENTED; joelakaufmann-lgtm 2 COMMENTED). Inline comments 6 → 9 (7 his). Merges by houfu 4 → 16.
- **A full review loop closed for the first time (PR #398)**: filed 07-25 → CHANGES_REQUESTED asking for a Cypress case on a hostile payload → contributor pushed the test → APPROVED "LGTM" 07-29 → merged 20 minutes later. Never happened in the prior 396 PRs.
- **GOVERNANCE.md (#311) merged 07-27**; ADR 0023 merged; **#441 implemented ADR 0023 (+7,697/−51) merged 07-29**. Propose → adopt → implement in nine days. #313 still open but now carries a real review plus a support comment from a former in-house litigator.
- **The 47-PR "burst" reading was wrong**: SaifAlYounan closed 47 of his own PRs at 10:56 on 07-25 and re-filed at 11:23 — a self re-file, not queue-flooding. Eight of them are fixes for issue #288, a 22-finding security audit generated by an automated multi-agent harness. Sharper systems finding now available: AI wrote the audit, AI-assisted contributor wrote the fixes, the only scarce input was a human willing to read them.
- **The agent is in production and reviewed him**: four lq-ai artifacts signed *"Drafted by lq-maintainer-agent v0.4.0; reviewed and posted by @houfu"* — including the repo's first APPROVED review and a comment on his own #441 flagging two high-severity advisories and ending "Over to you." Still 0 stars. The block-writes hook fired again this session — reproducible, not a one-off.
- **Hard new fact needing Houfu's call (§8.6)**: Kevin-Tucuxi's last commit to main is 2026-07-04 and his last merge is W27; **every merge since is Houfu's** (16 total). Commits to main fell from ~30/week to 2–3/week. The framing constraint (no abandoning/leaving/stepping-back) stands; GOVERNANCE.md's own published line — "began as a founder-led project… has grown into a community effort carried by a committee" — is the safe register. But the post can't dodge that the review culture arrived as the code supply stopped.
- **Still true**: 0 stars on the agent, no release in 26 days, 16 stale external PRs (median age ~24 days), displacement cost.

**Consequence for the pitch (not yet applied — awaiting Houfu).** Thesis survives untouched; beat 6 must be rewritten from "I can't prove this works" to "one closed loop, three days old, in a project that got quiet while it closed." The honesty guard flips direction: the risk is no longer despair, it's a **conversion narrative**. Three days is not a trend.

**Blocking questions logged in research.md §8.9**: what happened at the handover and how to frame it; what caused the turn (07-26 committee call? the merged governance? just time?); how much of the review work was agent-drafted; consent from SaifAlYounan (now the co-star of the good news) and from joelakaufmann-lgtm / pscripps; and whether to publish at 3 days of evidence or wait two weeks.

## 2026-07-30 — Session 2 (cont.): External research, two approved threads

Brief approved by Houfu: run **AI-vs-review-capacity** and **legal-OSS governance**; skip stewardship-as-named-role (Apache/CHAOSS/OSPO), the law-firm extension, and xz-utils/burnout data. Output landed as **research.md §9**.

**Thread A — the slop debate is over, which is better for us.** curl closed its bug bounty 31 Jan 2026 ($86k over six years; ~20% AI slop, ~5% genuine). Then Stenberg inverted it on 6 April 2026: the slop stopped and curl now gets *"really good security reports, almost all done with the help of AI,"* arriving *"faster than ever"* and *"imposing a growing workload on maintainers."* Kroah-Hartman: *"smaller teams might be struggling."* The Register's framing — AI shifts review cost "off the books" without expanding capacity — is the sentence the post argues with. arXiv 2603.27249 (1,154 posts, Jan–Sep 2025) supplies reviewer quotes: *"30 PRs per day across 6 reviewers"*, *"the first human being to ever lay eyes on this code"*, *"unpaid prompt engineers."* Ghostty bans AI code, tldraw auto-closes all external PRs, Gentoo bans, NetBSD taints. **Every default response in the field is to close the door; Houfu's was to build review capacity. That contrast is beat 7, made by citation rather than self-assertion.**

**Thread B — original measurement, last ~50 merged PRs per repo (2026-07-30).** Part 1's survivor set + Mike + AssemblyLine + lq-ai. Review culture tracks *staffing*, not culture: CourtListener (FLP, 9 staff/board) reviews **50/50**; Juriscraper 42/50; AssemblyLine 32/50; Mike 18/46; **docassemble 2/50 with zero approvals** — one maintainer, 941 stars, eleven years, and it's the repo Houfu's 2019 typo went into. public.law and OpenSALT likewise ~0. Two rows (docassemble vs CourtListener) carry the entire stewardship argument.

Also: checked GOVERNANCE.md / CONTRIBUTING.md / CODEOWNERS / ADR dirs across all ten. **lq-ai is the only repo in the set with a GOVERNANCE.md** (since 27 Jul). Honest caveat to keep in the draft: FLP's governance lives in a nonprofit board, not a markdown file.

**The finding that changes beat 4:** CourtListener's most frequent reviewer is `claude[bot]` — 61 reviews across the last 50 merged PRs — and it **only ever COMMENTS**; a human files the approval. PR #7656 shows it: bot posts a grounded "what was reviewed" note, `albertisfu` approves an hour later. That is the same architecture as Houfu's #441 comment ("Over to you") and his block-writes hook, arrived at independently. **This softens the Fable claim in the pitch**: bot-first/human-approves is now standard at the top of legal OSS; what's genuinely missing is one aimed at maintainers who don't read code.

**Regional flag ⚠️:** no Singapore/ASEAN legal-OSS project with community governance found. SAL/IMDA build on open-source *models* (Llama) and ship *closed* platforms — LawNet 4.0, GPT-Legal Q&A, ~75% lawyer usage, partnerships with LexisNexis/TR/vLex/Legora. The region consumes OSS and publishes platforms. One line in beat 7: there's nothing here to steward yet, which is the argument rather than the objection.

Beat-by-beat mapping is in research.md §9.4. Next OSPO thread if beat 7 grows.

## 2026-07-30 — Session 2 (cont. 2): Mined the agent build log

Houfu pointed at `~/Projects/lq-ai-maintainer` and its Claude Code session logs. Extracted his own typed messages from 12 transcripts (~70 MB, 2026-07-10 → 07-30) — 120 messages — and wrote up the load-bearing ones as **research.md §10**. All verbatim; nothing paraphrased.

The five that change the draft:

1. **The origin scene (07-12).** Two days in, he ran the agent on a real PR and wrote: *"i ran it on a PR. i... feel stressed looking at this. Way too technical for a lawyer."* The explainer deck exists because the maintainer couldn't read the maintainer tool. This replaces the 23,592-line framing in beat 4 with a scene — Wei Lin's standing ask, finally satisfiable.
2. **The self-diagnosis (07-26).** *"such human maintainer deficiencies may still be present. how would you balance the need to support my weaknesses while not making me fearful to go ahead"* — the honest core of the stewardship claim, and the origin of the anti-inaction guards in his voice rather than inferred from commits.
3. **The design manifesto (07-26 06:50).** A single long message that reset the project to v0.7 and reads as a code-of-conduct for reviewing: treat every contribution as sincere (*"in my 2-3 weeks... i have not encountered a truly malicious contribution"*); never personal, never *"suggesting that the contributor is out of his depth"*; defer to authors when alternatives are equally valid; resolve rather than escalate-and-delay. **This is the mechanism the thesis was missing: a lawyer supplies the part of review that isn't code.**
4. **The overclaim to remove (§10.4).** His own `docs/research/prd-research-report.md` says *"every load-bearing mechanism has shipped precedent"* (PR-Agent, CodeRabbit, Copilot, Dosu, Prow/bors) and that the real novelties are attention routing, salvage decomposition, anchoring to governing docs, and that *"no surveyed project publicly discloses its maintainer-side AI triage rubric."* The Fable line in the pitch must narrow to: AI code review is crowded; what nobody ships is review anchored to a project's own decisions for a maintainer who can't read the code. §9.2's `claude[bot]` finding says the same thing from outside.
5. **The non-coder's usability catch (07-26).** On a technically correct agent finding: *"the comment might be true, but if i was a contributor and i read it, i didnt know what to do."* Shipped as v0.4.1's finding contract (impact/ask/scope), merged 07-30 01:59. A true comment a contributor can't act on is not a review — traceable from complaint to rule.

Also nailed down: the block-writes hook's origin (*"never execute, read only rules should be programmed not part of the prompt"*, 07-18) and the research note specifying the inverted allow-list that blocked this very session's `gh api graphql` call — the same chain as this blog's own prose-vs-hooks finding. And §10.7: escalation must draft an ADR, which is why PRs #311–313 exist. **The agent and the governance work are one project, not two** — that shortens the post.

**Consent flag:** private session logs; his own words are his call, but the manifesto quote names Kevin (favourably, in a "we are not here to prove Kevin is inherently correct" sense). Decide at draft time.

## 2026-07-30 — Session 2 (cont. 3): Pitch v6 — trench structure, same thesis

**Houfu's question:** *"do you think a trench story of creating lq-ai-maintainer is more fascinating than a high level policy one"* — then approved a re-cut on the recommended spine.

**Claude's recommendation, and the reasoning:** the trench material is stronger (the terminal scene, the day-2 reset, the self-diagnosis, the manifesto, the usability catch that shipped) and it is fully evidenced *today*, whereas the policy claim rests on three days of merge data. But a pure build story re-runs the v4 error Houfu already corrected and walks into Marcus's differentiation question — a 0-star tool can't carry a post. So: **trench as structure, stewardship as thesis**, on the spine *"I couldn't read the code, so I built the thing that reads it for me — and building it turned out to be the job."*

**Pitch v6 written** (v4 and v5 kept in file for audit trail). Changes:

- **7 beats → 6, three named scenes**: the terminal (07-12), the manifesto (07-26), the week the loop closed (07-25→29). Everything else is connective tissue and gets cut first.
- **Thesis unchanged**, but now stated only twice — end of §3 and in §6. Added an explicit failure test: if a draft states the thesis more often than that, the trench structure has collapsed back into v5.
- **The agent and the governance work merged into one thread** (research §10.7 showed the agent was built to draft ADRs for the committee). That's how 7 beats became 6 with nothing lost.
- **Line counts demoted**: 23,592 lines survives as a clause; the scenes carry §2. Reverses v4's framing, which was right when it was made — the build log simply supplied better material.
- **"Nobody has ever done this" narrowed** to what survives verification: nobody ships review anchored to a project's own decisions for a maintainer who can't read the code.

**Interrogation answers recorded in pitch.md** (skill step 3.6). The one that matters most: the diagnosis has a live alternative explanation — the review loop may have closed because the project went quiet and attention became available, not because stewardship worked. §5 must name that itself rather than let a reader find it. Differentiation answer: the deficit-as-qualification claim plus the eight-repo formal-review measurement, which is unpublished elsewhere. Framing risks now four: the founder, SaifAlYounan (consent), docassemble (the one-maintainer row — never as neglect), and quoting private session logs.

**Tags checked against the registry**: LegalTech · OpenSource · AI · Programming (AI promoted from optional; drop Programming if §2 shrinks).

**Blocking the draft** (pitch.md, 7 items): approve the spine; the handover framing; what caused the turn; how much of the review work was agent-drafted vs his; consent from SaifAlYounan and for the log quotes; lived numbers (hours/week, how the role came about, whether he knew lq-ai existed when writing Part 1); and publish-now-or-wait-two-weeks.

## 2026-07-30 — Session 2 (cont. 4): Blockers renegotiated; founder thread cut

**Houfu:** *"i dont like these blockers. can we negotiate"* — and he was right. Claude had listed seven pre-draft gates; on triage, none of them blocked drafting. Settled:

- **Answered from data instead of asking**: how much of last week's review work was agent-drafted. Only #396's APPROVED carries the agent's attribution footer; #398/#399/#400 don't. The draft can state it and be corrected at review.
- **Rewritten as a question instead of answered**: what caused the turn. §5 now says he doesn't know whether the loop closed because governance landed, the committee met, or he finally had time. Honest uncertainty is better voice than a confident cause — this was Claude asking Houfu to supply a fact the post is better off not having.
- **Moved from draft-gate to publish-gate**: SaifAlYounan's consent (draft him unnamed; naming later is find-and-replace) and approval of the session-log quotes (his own words, vetoable at draft review).
- **Kept as marked gaps, drafted around**: hours/week, how the role came about, whether he knew lq-ai existed when writing Part 1. Claude will not invent these — Voice Guide 8 and the two prior posts rewritten over invented figures — so they appear as `[HOUFU: …]` markers with prose built to survive without them.

**Decision — the founder thread is out of the post.** Asked whether §5 should mention that the project went quiet, Houfu chose to leave it out entirely. So: no reference to the founder's activity, no "who holds the merge button now", no commit-rate drop. Research §8.6 stays research. §5's counterweight runs on non-interpretive facts only — 46 open PRs, zero stars, no release in 26 days, v0.4.1 at 1:59am, the displacement cost — plus the first-person uncertainty line.

**Process note:** this is the second time this session Claude has gated work on questions it could answer itself or write around. Worth carrying forward — before listing something as "needed from Houfu", check whether it is (a) checkable from data, (b) better as stated uncertainty in the post, or (c) only needed before *publishing*. Only lived personal facts are genuinely un-guessable.

## 2026-07-30 — Session 2 (cont. 5): Lived numbers supplied; origin-story framing held

**Time cost, from Houfu:** *"since the agent started i have been spending about less than 1 hour a day on it. it's a significant time consumption that i think should run down."* The daily framing is the one to use — an hour a day, every day, is the shape of the cost, and it answers Wei Lin's standing ask with a lived number rather than a derived one. Claude's inference, **flagged for confirmation, not yet adopted**: if stewardship works, that number is supposed to fall, because the job is to make yourself less necessary — a candidate close for §5 or §6.

**How the role came about:** roughly half asked, half volunteered — asked by someone at LegalQuants, hesitant at first, then stepping further forward on his own read of the project's decision-making. Houfu flagged this as diary material and was unsure about publishing it: *"i don't want to offend someone."*

**Two decisions recorded:**

1. **Recommended public framing** (pending his confirmation): don't name who asked; keep the hesitation, since that half points only at him; and frame the second half by the artifact rather than the absence — he wrote GOVERNANCE.md, merged 27 July, whose own published text says it exists so contributors can see *"not just what was decided… but how decisions get made and by whom."* Contribution framing, sourced to a merged PR, no read of any person required.
2. **The repo is public.** Claude deliberately did **not** write the name or the private phrasing into `pitch.md` or `discussion.md`, because `posts/` ships to GitHub — "don't publish it" has to include the working notes. Flagged to Houfu that adding later is easy and removing from git history is not. **Worth carrying as a standing rule for this repo: treat discussion.md as publishable, because it is.**

## 2026-07-30 — Session 2 (cont. 6): Replaceability confirmed; first draft written

**Houfu confirmed Claude's reading of the time cost:** *"i always aimed to be replaceable, and as official cat herder, im supposed to let cats do their thing. it's the raison d'être for creating the agent and focusing on the governance."*

This resolved the post's last structural question, recorded as **pitch v6.1**: the agent and the governance document are *the same act* — both take what would otherwise live in one maintainer's head and put it somewhere anyone can pick up. That gives the post a bookend (opening rejection of being irreplaceable → closing metric of an hour a day that should fall) and an ending better than a results-TBD hedge. The settled cat-herder decision stands: the principle is load-bearing, the phrase is not, and no framework was rebuilt on it.

**First draft written** — `legal-oss-maintainer.md`, 1,986 words (~8.8 min), lint clean, 0 errors 0 warnings. Deliberately under the 2,400 target so reviewer fixes have room without triggering a length crisis.

Choices made in the draft, for the record:

- **Opens on the terminal scene**, not on the stewardship claim. The thesis is stated twice only (end of the norms section, and in the close), per the v6 failure test.
- **Four verbatim quotes** from his session logs: the "i... feel stressed" line, the self-diagnosis, the read-only-rules line, and the "i didnt know what to do" line. All vetoable.
- **The contributor is unnamed** pending consent; the security PRs are described, not numbered.
- **The founder does not appear**, per the 2026-07-30 decision. No merge-button transfer, no commit-rate drop.
- **Role origin** written as asked-then-volunteered with the hesitation kept and no read on anyone: *"Someone from the LegalQuants community asked me to help maintain it, and I hesitated."* No "gap in decision making" claim; the governance document appears later on its own merits.
- **`docassemble` handled with credit** — Jonathan Pyle named, carrying it alone for a decade, and the 2-of-50 explicitly framed as what happens to anyone unstaffed rather than as neglect. Part 1 had already treated him warmly; this stays consistent.
- **Dropped from the pitch:** the 23,592-line count for the agent (the scenes do that work now — easy to add back as a clause if he wants the number) and the "did I know lq-ai existed when writing Part 1" sentence (optional, still unanswered).
- Three bookmark cards: Part 1, tool-vs-infrastructure-mindset, the-unexpected-joys-of-open-source.

**Next per the workflow:** one content-quality audit, then reviewers — Wei Lin first (highest signal, and this post is squarely his territory), Marcus if the technical beats need a check. Not run yet; awaiting Houfu.

## 2026-07-30 — Session 2 (cont. 7): Review round 1 (Wei Lin + Marcus + content audit), applied

Houfu asked for two reviewers — Wei Lin plus "the legaltech guy." Note for future sessions: **the project's reviewer agents did not resolve in this session's agent registry** (`.claude/agents/*.md` exist and are well-formed, but `lawyer-coder-reviewer` / `legal-tech-blog-reviewer` / `content-quality-auditor` were not registered types). Run as loaded personas via general-purpose instead — persona file + memory file + brief. Same substance; worth checking `/agents` before the next round.

**Round 1 caught real damage, and both reviewers found it independently: the draft mixed snapshots.** §1 was priced from the 27 July research snapshot while §5 used the 30 July re-pull. Consequences, all verified live and now fixed:

- **"One commit" was false** — actually five merged PRs (#297 CI, #311 + #312 governance, #441 lockfiles, #463 chore). It was bolded, it anchored the section, and it was in the excerpt. Wei Lin's argument for why this one mattered more than a normal fact-check is worth keeping: *understating* your own contribution reads as false modesty, which is the humble-brag failure mode arriving through the back door of humility. The true version — "five merged pull requests: a CI test, a dependency chore, a lockfile migration, and two documents about how decisions get made. None of them is the product" — argues the thesis better than the false one did.
- **"Six inline review comments, I wrote four"** → nine and seven.
- **"46 open PRs"** → that's one contributor's re-filed set; the honest number is 14 genuine external, oldest four weeks.
- **Ghostty and tldraw were misrepresented** (Marcus verified externally). Ghostty gates AI-assisted PRs on already-accepted issues rather than banning them; tldraw's closure is explicitly temporary. Both errors ran the same direction — making the field look more anti-AI than it is, which made Houfu look more contrarian than he is. Corrected version is *stronger*: "They gated the door; I've been trying to widen it."
- **A reviewer correction that was itself wrong:** Marcus flagged "five automated auditors" as a misread of "Claude Fable 5." It's verbatim from issue #288; the real error was the surface list (eight, not four). Logged in research.md §11 so it isn't re-litigated.

**Structural fixes applied:**

- **Replaceability planted early** (Wei Lin's sequencing catch, same family as Part 1's 23-month gap): the block-writes hook scene reframed from "it works" to "the rule binds me exactly as hard as it binds the machine." The close is now a callback rather than an assertion at 93% depth.
- **The table became citable** (Marcus's top item): method line with date, all eight measured repos published, and **lq-ai's own 2-of-50 row restored** — Houfu's project sits near the bottom of his own table, which is the point.
- **CourtListener's bot caveat added** — its most frequent reviewer is a bot that comments while a human approves. That's the agent's design, arrived at independently by somebody else. Cuts against the staffing claim and is the strongest credibility signal available; both reviewers and the audit flagged the omission.
- **Agent-drafted first approval disclosed** — settled at pitch stage, missing from draft 1, now in §5.
- **Someone reviewed *him*** — the repo's first formal review was on his own governance ADR (unnamed). Wei Lin's catch: it's the only evidence in the post that the hour a day is starting to fall.
- **Review vocabulary glossed once** (audit C1) — comment vs. formal verdict — because the post's central evidence is unreadable without it.
- **Thesis over-statement removed** (audit I1): the §6 pre-announcement deleted, section retitled "The door everyone else is closing."
- Cuts made before additions per the length rule: quote 2 trimmed, stage direction cut, duplicate "zero stars" cut, Gentoo cut, Part 1 retread collapsed into an explicit callback.

**Length: 2,436 words** — effectively identical to Part 1 (2,415), lint clean. Both reviewers' MEMORY_UPDATE blocks appended to `docs/personas/memory/`.

**Still open after round 1:** the displacement casualty. Wei Lin's sharpest unmet ask — the hour a day is priced, but what that hour *cost* the other project isn't named (a release that didn't ship, an issue open since June). Not invented; asked Houfu directly.

## 2026-07-30 — Session 2 (cont. 8): Draft posted to Ghost for first read

Houfu chose to read the post cold, as a Ghost draft, rather than in review-and-revise mode. Draft created via `scripts/publish-lexical.js` (status `draft`), post ID `6a6ac6b2e1ac4e0001e36a8f`.

**Publishing note worth keeping.** The draft used `<bookmark url="..." />` tags, copying Part 1's markdown. **`publish-lexical.js` does not support that syntax** — it passed through as literal text in the paragraph. The script converts *standalone markdown links to alt-counsel.com* into bookmark cards (see `claude-architect-cert.md` for the working convention: a descriptive sentence as the link text on its own line). Part 1's `<bookmark />` tags must have been fixed inside Ghost after publishing, which is why the local file still carries them. Converted all three to link syntax; dry run then confirmed 4 bookmark cards (3 backlinks + the GitHub footer), the comparison table as an HTML card, 7 headings, 1 list, and zero literal tags.

Preview: `https://www.alt-counsel.com/p/db422019-0635-4658-929b-bf295e612a2a/`

Still open going into his read: the displacement casualty (what the hour a day cost the other project) — the only unmet reviewer ask from round 1, deliberately left rather than invented. One reviewer round remains within the 2-round cap.

## 2026-07-30 — Session 3: Pitch amended to v7 — the documents are the thesis

Houfu read draft 1 cold on Ghost and opened with the question that settled it: *"is this post now about stewardship or the steps i undertook to learn how to maintain a codebase?"*

**Diagnosis, from the draft.** It was the steps. Word distribution: 643 consecutive words with the tool as protagonist (§2 and §3), the argument confined almost entirely to the 711-word closing section, and the word *steward* appearing exactly once, at 92% depth, in a subordinate clause. The draft's six sections map 1:1 onto v6's six beats, so this was not draft drift — **the pitch was wrong**, and amending it is the correct move under CLAUDE.md's REVIEW step 1.

**Houfu's reframe.** Two distinct stories in building `lq-maintainer-agent`: (1) *"how do i understand all this code, and all this PRD, ADR, honest state etc. the docs are a gem and i want to adhere to the project's philosophy"*; (2) *"i made my agent too conservative, perhaps compensating for the idea that as a lawyer i am terrified of coding. thats the wrong angle for doing this project."* Then the instruction that unlocked it: *"you need to read the chat to figure out what actually happened. in short i took a different philosophy with 0.7.0."*

**What 0.7.0 actually changed — material the pitch never had.** The v0.7 design doc's new first principle, adopted 2026-07-26: *"the agent's rigor supports the maintainer's weaknesses; its conservatism must attach to irreversibility, not to uncertainty."* Irreversible classes get hard gates; everything else is presumed revertible and must state its undo path; uncertainty is answered with a named, costed check rather than an inflated grade. Forced by three weeks of evidence: no malicious contribution, 35 of 79 open PRs under 200 lines, and a receipt that read as a compliance audit to first-time contributors. Full extract in pitch.md v7.

**Two decisions by Houfu:**

1. **Thesis (his pick, over the alternative):** *A project that writes down its philosophy can be maintained by someone who can't write its code — as long as you take all of the philosophy, including the part that says what it's safe to get wrong.* His reason: *"it is more unique about lq.ai"* — specificity to the project over general confession. That reason is also the differentiation answer, and it should be the test applied to future spine candidates on this blog.
2. **The emotional line ships separately** from the thesis: *"Everything I needed was already written down. The fear was the only thing I brought that wasn't in the documents."* v6 had conflated spine (the sentence that lands in prose) and thesis (the claim the post argues) into one sentence, which is part of why the spine kept sliding toward whatever beat it sat in. Keeping them as two jobs is carried forward.

**The join that makes it one post rather than two:** story 1 is what makes story 2's fix possible — caution can only move onto irreversibility if something can tell you which changes are one-way doors, and that something is the canon. And story 2 lands as *selective fidelity* rather than a confession: he took the canon as a standard to enforce and missed that the same corpus (243 openly parked ideas, an honest-state doc, ADRs recording what was chosen and what wasn't) is a project comfortable being unfinished.

**The lawyer claim upgraded.** v6 evidenced it with four politeness norms — the softest quarter of the 26 July manifesto — which made it sound like a consolation prize. v7 makes it risk allocation: pricing what can't be unwound is what lawyers do professionally. The politeness norms drop to one sentence.

**~950 words cut, named not quietly dropped:** the eight-repo formal-review table (flagged as the strongest candidate for the *next* post), the Will Chen two-routes beat, the door-closing survey (curl/Ghostty/tldraw), and stewardship as a named vocation.

### AUDIT TRAIL — the process failure, and the check being added

v6 failed on **sourcing, not framing**, which is why none of the three pitch-interrogation questions caught it. `research.md` §10.3 treated the 26 July manifesto message as a primary source and recorded its four soft bullets, dropping the four structural ones in the same message and missing the reversibility principle entirely — because that principle is not in the chat message. It is in the design doc the message *produced*, four commands away in the repo, never opened.

**New check for this repo: when a session log produces an artifact, read the artifact, not just the log.** Interrogating the framing cannot tell you that you read the wrong file.

Also worth carrying: the spine did exactly its job and that is what broke the draft. v6's spine (*"building it turned out to be the job"*) made the tool the subject, and every one of those 643 tool-words was on-spine. A spine enforces; it does not check whether it is true. It therefore needs interrogating harder than the beats do.

**Next:** rewrite the draft on v7's six beats. Draft 1 is preserved in git (commit 5478099) and posted as a Ghost draft; the Ghost draft will need replacing, not patching.

## 2026-07-30 — Session 3 (cont.): Context gathered, pitch v7 completed, draft 2 written

**Houfu's instruction before drafting:** gather (1) what's relevant from outside, (2) *"from my logs, what did i say to claude"*. Both done; both changed the draft.

**The log sweep found material research.md never had.** §10 had only ever read the `lq-ai-maintainer` build sessions. The **lq-ai maintenance sessions — him actually doing the job — had never been read at all.** Swept both: 81 typed messages from the build, 121 from maintaining. Full finds recorded in pitch.md ("What the logs supplied"). The four that changed the structure:

1. **The thesis exists in his own words on 17 July, nine days before the manifesto** — *"what if there are already decisions made that will narrow the amount of uncertainty there actually is?"* So there were **two corrections on the same axis**, not one, and §3 now carries both. The 0.7.0 principle is the general case of a correction he'd already made.
2. **The day-2 reset kept the document** — *"delete everything except the PRD."* Now the post's opening image, and the cleanest possible statement of the thesis as an action.
3. **PR #400 (27 July)** — a security-posture question settled by citing the project's canon on transparency rather than by out-coding the contributor. This replaced the review-loop-closed story as §5's lead: it is the thesis *operating*, not a procedure completing.
4. **He didn't only read the philosophy, he extended it** — ADRs, GOVERNANCE.md, the discussion paper, and *"'undecided' canon is… nothing concrete."* This is what makes the replaceability close land rather than assert.

**External evidence re-sorted, and one correction to the record.** Claude had told Houfu the on-thesis field measurement didn't exist. It partly did (research §9.2 finding 2) and is now complete: checked live 2026-07-30 across seven legal-OSS repos for ADR directories and `GOVERNANCE.md` — **exactly one has either, and it's lq-ai.** The framing that came out of the check is sharper than the number: **legal open source documents its software, not its decisions.** `docassemble`'s user documentation is enormous and it has no recorded decisions; user docs tell you how to use a thing, decision records tell you how to change it, and only the second lets somebody else maintain it. The FLP caveat (a nine-person nonprofit whose governance is real but lives off-repo) is in the draft because it cuts against the claim.

**Draft 2 written** — 2,417 words, lint clean, 0 errors 0 warnings. Six beats per pitch v7. Same three bookmark cards, all in supported link syntax.

**Known gap, flagged not hidden:** the pitch budgeted ~1,900 words and the draft came in at 2,417 — the same length as draft 1. Roughly 950 words of v6 material was genuinely cut (the review-rate table, the two-routes beat, the curl/Ghostty/tldraw survey), but an equivalent volume of new on-thesis material replaced it. Not yet audited down; flagged to Houfu rather than trimmed unilaterally.

**Still open from round 1 and deliberately not invented:** the displacement casualty — what the hour a day actually cost the other project.

## 2026-07-30 — Session 3 (cont.): Ghost draft updated in place; Houfu's Ghost edits recovered

Before overwriting, diffed the live Ghost draft against committed draft 1 — and **Houfu had edited it in the Ghost editor after posting.** The rewrite would have destroyed four authorial changes. All merged into draft 2 first:

1. **The origin story was factually corrected, and it reverses the pitch's framing.** Draft 1 said *"asked me to help maintain it, and I hesitated — I wasn't sure I should."* His edit: *"asked me to help out, and while I didn't hesitate, I wasn't sure what I should do."* The hesitation was Claude's inference from the 2026-07-30 session notes and it was **wrong**. He didn't hesitate about helping; he was unsure what the help should be. Carried into draft 2 verbatim. Also "help out", not "help maintain".
2. **A new line in his own voice**, kept: *"LQ.AI had several cool features, but it was deep, complex and free — both in terms of beer and freedom."*
3. **The Part 1 callback rewritten** — the 2019-typo admission cut from the opening, replaced with *"That post got pretty warm feedback, including a cite from LawSites. I promised a follow-up, but got distracted instead."* Draft 2 follows this, and §6's `docassemble` callback was rewritten to stand on its own since the setup is gone.
4. **"more than a month"**, not "a month"; and the tool called an **"AI maintainer tool"**.

**Process note worth keeping.** CLAUDE.md already warns to diff live Ghost content before syncing; this session shows the same rule applies *before overwriting a draft*, not only at final sync. Draft 1's `post_id` had never been written into frontmatter (it lived only in this file), so the script would have created a **second** post rather than updating. **`post_id: 6a6ac6b2e1ac4e0001e36a8f` is now in the frontmatter**, so future runs update in place — worth doing at first publish for every post.

Ghost draft now carries draft 2. Preview unchanged: `https://www.alt-counsel.com/p/db422019-0635-4658-929b-bf295e612a2a/`

## 2026-08-04 — Session 4: Full reset — research survives, drafts and pitches don't

Houfu, five days after the draft-2 session: *"I've wanted to rewrite this article. The research is valuable but I don't think the others are."*

**Decision (Houfu's, explicit):** keep `research.md` and this file; discard draft 2 **and** pitch v7 as the basis for the post. Start over with a fresh pitch built from the research. The Ghost draft (still carrying draft 2, post_id `6a6ac6b2e1ac4e0001e36a8f`) stays untouched until a new draft exists to replace it.

**What this means for the record:** v6 was rejected on a cold read; v7 was Houfu's own reframe and is *also* now rejected. Two framings have failed on the same post. Draft 2 and pitch v7 are preserved in git history (committed this session before the reset), not in the working files.

**Housekeeping this session:** branch rebased onto origin/main (picked up PR #48 workflow hardening, no conflicts). Remote branch copy is a stale 3-commit auto-push from the original web session; will need `--force-with-lease` whenever pushed.

## 2026-08-04 — Session 4 (cont.): Fresh-start branch

Houfu's verdict on the interrogation of why drafts failed: *"I don't like it. End of story. We got off on a bad foot, kept going and now it's worse."* No further diagnosis wanted — the failure analysis above stands as the record, but the rewrite doesn't build on it.

**This branch (`post/legal-oss-maintainer-rewrite`, off main) carries only what Houfu called valuable: `research.md` and this file.** Draft 1, draft 2, pitches v1–v7, and the deck images live in the history of `claude/legal-open-source-article-86vio3` (through commit 93974a0) and are not carried forward. The Ghost draft (post_id `6a6ac6b2e1ac4e0001e36a8f`) still exists, untouched, to be replaced when a new draft is ready.

**Next: a brand-new pitch, built from research.md, starting from zero on framing.**

## 2026-08-04 — Session 4 (cont.): New pitch approved — the mammoth, chosen on purpose

**The emotional core came from Houfu directly** (verbatim in pitch.md): fresh from the Claude certification, he decided to build a coding agent for lq-ai — a mammoth job worth doing — and he's making it his focus for the rest of the year ("for the rest of us" was a typo for "for the rest of the year", clarified same session).

**What's new versus every rejected framing:** this is forward-looking commitment, not retrospective confession. Subject = the decision to point a fresh certification at a community-led project and commit the year to it. Not stewardship (v6), not the documents (v7), not fear.

**Timeline find that anchors the open:** the CCA-F LinkedIn post went live 2026-07-10 — the same day the lq-maintainer-agent repo was created. "Fresh from" is literal. The unpublished cert post ("Every Answer Was Correct...", branch claude/architect-cert-post-s5uod3) closes with "Build first. Certify after." — this post is its sequel; if it publishes first it joins must_link.

**Decisions (Houfu's):**
- Pitch paragraph approved as written, first presentation ("Yes, that's the post").
- **Title deferred to post-draft** — "lets think of it once we done the draft". Old title dropped.
- Tags: AI, LegalTech, OpenSource (Article declined — not featuring).
- Word budget 1,800; primary audience wei-lin, secondary marcus.

**Out of scope, named:** contributor-concentration story, governance measurement + review-capacity thread, Mike day-90, both dead theses. The v7 corrections survive only as learning-curve beats.

**Verification debt for WRITE:** doc-size numbers (v7's 94,678/255 from local repo read — re-measure or stay qualitative); "what's a canon map" and the 17 July quote (re-pull from pitch v7 at commit 93974a0 on the old branch). No target publish date set.

## 2026-08-04 — Session 4 (cont.): Metaphor swap — mammoth out, cat herder in (Houfu's request)

Houfu: *"instead of mammoth, can we use a metaphor, i had told others that i wanted to be an official cat herder for the project, and this is strongly related."*

**This supersedes the 2026-07-27 settled decision** ("cat herder was meant to be flippant... use as a light aside or drop entirely"). The reversal is Houfu-initiated, and it's not the same move that decision guarded against: in July, Claude built a title and framework on a throwaway line; now Houfu is electing the metaphor himself, and his own 2026-07-30 words make it load-bearing — *"i always aimed to be replaceable, and as official cat herder, im supposed to let cats do their thing. it's the raison d'être for creating the agent and focusing on the governance."* That quote is the join between the metaphor and the coding agent.

**Why it improves on mammoth:** mammoth says the job is big; cat herder says the job is coordinating many independent contributors none of whom you command — which is the actual shape of a community-led project, and connects directly to replaceability.

Pitch v2 locked on first presentation. Thesis, spine, beats, and thesis_keywords updated to match; "serious job wearing a flippant title" kept in the paragraph as the honest nod to his own earlier objection. Sourcing for the two verbatim quotes recorded in pitch.md verification notes (both live in old-branch discussion.md).

## 2026-08-05 — Session 4 (cont.): Slack ground truth, mandate framing, quiz answered

**Research refresh (2026-08-04, research.md §12):** PR #400 merged after a two-round arc; the review loop is a nine-day practice; founder quiet reached a month with Houfu the sole merger; docs measured (254 files / 94,361 lines / 23 ADRs / 244 parked ideas); v7 quotes ported; herding-cats has academic standing (Michlmayr & Fitzgerald).

**Slack (#lqai, private — notes in gitignored temp/, NOTHING committed to public files):** Houfu asked Claude to read it despite confidentiality; handling rule agreed: findings to chat, per-item consent before anything ships. The channel supplied the actual origin: **appointed founding member of the review committee on the first call (2026-06-28/29), with the group explicitly asking for an agent to review PRs against the founder's principles.** Write access 07-06; agent build 07-10 (same day as the cert LinkedIn post). Houfu: *"i think i would like you to get the actual picture to frame the story correctly"* — pitch amended from "I decided to build" to the mandate framing; beat 1 renamed "The mandate".

**Quiz (2026-08-05):**
- Rest-of-2026 focus = all four threads: drive releases (v0.7.0, the first post-founder release), grow the review committee, keep building the agent, docs site + community growth.
- Lived time cost: **~5–7 hours/week (about an hour a day)**, displacing his own projects and this blog's writing time.
- **Consent question returned unanswered — recorded as a publish-gate, not a draft-blocker.** Drafting defaults: no Slack quotes (including his own), no new names, no "Keller"/"post-Keller" language, GOVERNANCE.md neutral wording. Revisit before publishing.

**Next: WRITE.** Read full Voice Guide + 1–2 recent published posts, then draft on the amended pitch.

## 2026-08-05 — Session 4 (cont.): Draft 1 of the rewrite written

**Voice reference: rugpulled-by-cowork** — narrative pacing, plain-claim headers, hope close. Full Voice Guide re-read including the Living Addendum (no bookmark lead-ins, no aphoristic kickers, no inferred emotion, closes on hope).

**Draft:** 1,380 words (budget 1,800 — left lean on purpose; Houfu cuts, and reviewer fixes need room). Five beats per pitch. Lint: 0 errors, 0 warnings. Working title "I'm the Official Cat Herder of a Legal AI Project" — title deliberately still open per Houfu's call; candidates to be proposed now that the draft exists.

**Choices for the record:**
- Opens on the Sunday-call scene; the mandate (appointment + the group's agent ask) stated as fact in the first paragraph; payoff ("rest of 2026") in paragraph two, no withheld reveal.
- Houfu's authored line from the old Ghost edits kept verbatim: "LQ.AI had several cool features, but it was deep, complex and free — both in terms of beer and freedom."
- Consent defaults applied throughout: no Slack quotes, no contributor names ("one contributor's security fixes"), founder referenced only via GOVERNANCE.md's published language, no "Keller".
- Data all from research.md §12 (2026-08-04 snapshot): 254 files/94,361 lines/23 ADRs/244 parked ideas; 304-package lockfile review scene; five reviewed merges in just over a week; 73 open PRs; no release since 4 July; agent 0 stars.
- The one honest admission (fear tuned into the agent) stated once, in the learning-curve section, per Voice Guide 1.6.
- Close: hour-a-day metric + December appointment + hope ("I hope to have company by then"). No kicker.
- Both must-link cards placed (Part 1 after the open, unexpected-joys before the close), no lead-in sentences, ?ref= attribution on both.

**Next:** title candidates to Houfu, then REVIEW phase: audit round (audit-substance + audit-tone), then Wei Lin (primary) per pitch, length audit before additive fixes.

## 2026-08-05 — Session 4 (cont.): Houfu's read — title settled, triad tic sharpened

**Houfu read the draft. Two outcomes:**

1. **Title SETTLED: "I'm the Official Cat Herder of a Legal AI Project"** — the working title, kept ("The working title is great"). Do not re-propose.
2. **Voice catch, his:** the triadic role-summary sentence ("read everything, remember what was decided, and say 'approved' out loud...") "is repeated often in the draft. it needs sharpening." He's right — the tricolon is a documented delete-on-sight pattern in the Voice Guide (2.1), and it appeared five times in different clothes. All five sharpened: the why-commit paragraph now lands on "a reader with the nerve to press Approve"; the solo-counsel line on "close reading, and pricing what can't be undone — ones lawyers already bill for"; the tool description compressed to two moves; the close's em-dash triad cut (content already in the plan paragraph); the excerpt rewritten. **Rule for future drafts: one triad per post, if that — the summary-of-role tricolon is a Claude drafting tic, not Houfu's voice.**

**Houfu's own hand edit, preserved untouched:** "terrified of coding" → "terrified of coding in this big, foreign codebase."

Lint clean after edits. Draft now ~1,360 words.

## 2026-08-05 — Session 4 (cont.): Reviewer round 1 — both serve, fixes applied

**Audit round (before reviewers):** substance + tone agents. Critical catch (both agents independently): the founder-went-quiet sentence violated the settled no-departure-narrative rule — cut, counterweight now carried by his own facts only. Also applied: five-merges claim narrowed to sourced shape, ten-repo claim narrowed to GOVERNANCE.md-only, seven weeks not six, artifact count de-numbered, community-participation evidence added (litigator ADR support), triad echoes trimmed, header de-witted, solo-counsel move formally added to the voice contract (pitch beats had declared it; frontmatter hadn't).

**Reviewers: Wei Lin (primary) + Marcus (secondary), per Houfu's "at least 2 reviewers. select and go." Both verdicts: SERVES ME.** Wei Lin: "strongest draft of the three framings"; the fear line is his forward-to-a-friend line. Marcus: would forward to the community list; #441 scene + mechanical hook earned it.

**Applied from synthesis (net ≈ +75 words → ~1,460, well under budget):** certification joining sentence (Wei Lin's if-one-thing — the mandate was waiting for the skill); excerpt rewritten (Marcus's inconsistency catch + Wei Lin's v7-residue catch); agent-feeds-the-committee pipeline sentence (Marcus's if-one-thing, from research §10.7); reader on-ramp in solo-counsel paragraph (Wei Lin standing ask); metaphor-stumble rephrase; long paragraph split; three small cuts (redundant birthdate, recommend/decide restatement, ADR-ownership aside).

**Declined, recorded in reviewer memories:** both reviewers' nibbles at the protected hand-written line ("LQ.AI had several cool features, but it was deep, complex and free — both in terms of beer and freedom") — never smooth Houfu's own words.

**Escalated to Houfu (open):** (1) the governance one-liner uses the out-of-scope measurement — Wei Lin votes keep-and-bless, needs a knowing call; (2) LQ.AI vs lq-ai casing (his line vs body style); (3) optional: Herding Cats academic citation one-liner (Marcus); (4) optional: one clause on how the yes felt (Wei Lin, only if Houfu supplies it); (5) slug still `working-on-each-others-code` from the dead title — change before publish or keep.

**Process note:** both reviewer agent definitions have broken YAML (`model:` field with inline comment) — every spawn fails without an explicit model override. Fix on a separate infra branch after this post.

Round 1 of 2 used. Lint clean throughout.

## 2026-08-05 — Session 4 (cont.): Houfu's five calls applied

1. **Governance one-liner BLESSED** — "exactly one had published a governance document" stays; the knowing exception to the out-of-scope list is now on record.
2. **Naming standardised on the repo's own docs** (LQ.AI 220 vs lq-ai 82 in README/GOVERNANCE/PRD): product = LQ.AI in prose, lq-ai only for the repository ("The lq-ai repo has 73 open pull requests"). Pitch thesis_keyword updated to match.
3. **Herding Cats citation added** — one line with Springer link, placed to answer the flippancy charge: "The metaphor isn't even mine to be flippant with."
4. **Slug changed** to `official-cat-herder` (from the dead title's `working-on-each-others-code`); both internal-card ?ref= params updated to match.
5. **The yes-feeling, his words:** "i felt excited to get to work, but i didnt understand the extent of the work needed" → "I said yes to both, excited to get to work. What I didn't understand yet was the extent of the work." (Wei Lin's optional ask, answered with lived words, not invented.)

**Beer line discussed, kept verbatim.** The reviewers attacked opposite halves (Marcus: the joke is stock FOSS; Wei Lin: the lead-in is vague) — which reads as evidence the sentence works whole. For the blog's lawyer audience the beer/freedom gloss explains, not clichés. Stays unless Houfu says otherwise.

**Length audit recorded:** 1,446 words vs 1,800 budget — growth since round 1 is reviewer-requested additions (offsetting CUTs applied first) plus these five calls; no padding found.

## 2026-08-05 — Session 4 (cont.): Pushed to Ghost

**Beer line: kept verbatim, discussion closed** — Houfu: "let's leave that quote alone."

**Pre-checks before overwrite:** live draft's updated_at was 2026-07-30 15:24 — the draft-2 push itself, so no Ghost hand-edits existed to rescue. Dry-run verified: 3 bookmark cards (two internal with ?ref=official-cat-herder + GitHub footer), 2 inline links (Springer citation, lq-maintainer-agent repo), no lists/tables to trigger converter quirks.

**Published:** updated in place, post_id unchanged, slug now official-cat-herder, tags AI/LegalTech/OpenSource (Programming dropped from the old Ghost tag set), new title and excerpt. Preview: https://www.alt-counsel.com/p/db422019-0635-4658-929b-bf295e612a2a/

**Converter gap noted for the infra PR:** standalone github.com links don't become bookmark cards — the bookmark allowlist (publish-lexical.js ~line 492) is a hardcoded domain list without github.com. The lq-maintainer-agent link ships as an inline link meanwhile.

**Infra PR shopping list (separate branch, after this post):** reviewer agents' broken model frontmatter (inline YAML comments); the self-referential node_modules symlink on main (deletion already recorded on this branch); github.com in the bookmark allowlist.

**Still open before publish:** backlink curation sweep (must-links placed); feature image (none set — Houfu picks in Ghost editor or hands over a file); publish/schedule date; consent items if any Slack-sourced upgrades are wanted; final sync-ghost at PR close.

## 2026-08-05 — Session 4 (cont.): v7's deck images recovered and placed

Houfu asked whether the v7-era pictures survived — yes, in the old branch's history (commit 93974a0). Both restored and placed:

- **deck-441-top.jpg** → learning-curve section, right after the explainer-deck sentence — it IS the fix for "way too technical for a lawyer."
- **deck-441-decision.jpg** → recommend/decide section — its embedded line ("a human decides, every time") matches the section header verbatim.

**Conversion defects caught by dry-run inspection before they shipped, and their fixes:**
1. My image-insert edit had landed mid-paragraph, so the converter shoved the following sentence ("What's a canon map…") into the image's `title` attribute and dropped it from the body — my edit error, but note the converter's behavior is silently lossy here (trailing same-line text after an image vanishes into title). Fixed by splitting lines.
2. Bold is not parsed in the pre-link segment of link-bearing paragraphs — `**official cat herder**` shipped as literal asterisks. Fixed by splitting the Herding Cats citation into its own paragraph.
3. Blockquotes are unsupported — `>` ships as literal text. The log quote is now an inline italic quote instead (matches how draft 1/2 rendered quotes).

**For issue #41 / the infra PR:** add these three converter behaviors (image-line trailing text → title; no bold before inline links; no blockquote support) to the known-quirks list, ideally with fixes.

Republished with both images uploaded to Ghost. Lint clean. Preview unchanged.
