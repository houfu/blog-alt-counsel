# Discussion log: legal-oss-contribution

Working notes for the post on legal OSS contribution culture.

Plan: `~/.claude/plans/ok-now-you-got-idempotent-origami.md`

## AUDIT TRAIL

### 2026-05-08 — Session 1: Pitch direction and research planning

**What happened**

Started exploring a post on Mike (mikeoss.com), Will Chen's open-source legal AI platform — vibe-coded in two weeks, AGPL-3.0, viral launch on 2026-04-29. Initial framing was Mike-as-subject ("most starred legal repo, but the metrics tell a different story"). User redirected after first plan iteration: the post isn't about Will, it's about whether lawyers (even lawyer-coders) actually contribute code, what legal OSS has staying power, and how non-coder communities outside legal got their contribution culture started.

**Key decisions**

- **Subject pivot.** Mike is the trigger, not the subject. The post is about legal OSS contribution culture and what makes it stick.
- **Bucket structure (8 research buckets):** A (Mike anchor metrics), A2 (Mike reception temperature), B (lawyer contribution behaviour), C (staying-power legal OSS), D (cross-domain non-coder onboarding), E (legal-specific friction — including E.2 personality/culture sub-thread), F (when forks are healthy vs unhealthy). Bucket 7 (regional angle) dropped. Old Bucket 5 (AGPL implications) demoted to optional sidebar.
- **E.2 personality sub-thread** added at user's request: how lawyer culture/personality (Caliper / Larry Richard findings) impacts contribution proclivity. Guarded with a "kill it if pop-psychology" condition.
- **Bucket F** added at user's request: forks aren't inherently bad; the post needs to land the Mike-pattern critique without implying that forking is wrong.
- **Bucket A2 reception check** added at user's request: triangulate trade-press enthusiasm against developer/lawyer-coder reaction.
- **Reviewers:** Wei Lin (lawyer-coder) primary, Marcus Tan secondary. Skip Sarah Chen on round 1.
- **Sequence locked:** research before drafting. Voice/angle decisions parked for post-research.
- **Branch + folder:** `blog/legal-oss-contribution` cut from main; `posts/legal-oss-contribution/` created with empty `research.md` and this `discussion.md`.

**Anchor data captured (from initial gh api before the pivot)**

| Metric | Count | as of 2026-05-08 |
|---|---|---|
| Stars | 2,395 | |
| Forks | 675 | 28% fork-to-star ratio |
| Watchers | 34 | |
| Open issues | 19 | |
| Closed issues | 1 | |
| Open PRs | 16 | |
| Closed-not-merged PRs | 6 | |
| Merged PRs | **0** | |
| Last push to main | 2026-04-29 | (launch day) |
| License | AGPL-3.0 | |

Refresh on day-of-publish.

**Parked decisions (revisit after research lands)**

1. Tone register — empathetic / documentary / challenging
2. Personal disclosure — whether the opening admits user's own OSS contribution behaviour
3. Series fit — Part 2 of OpenClaw thread, sibling piece, or standalone
4. Length budget — long-read vs usual length
5. AGPL sidebar — promote to section, keep as call-out, or cut

**What's next**

Run Batch 1 in parallel: Mike fork sample (top 10 by recent push, ahead-by-N), legal OSS candidate contributor counts, Bucket B discourse search, HN thread + Artificial Lawyer interview reads.

### 2026-05-08 — Session 1 (cont.): Research executed, consolidated, Harvey angle added

**Batch 1 findings (4 parallel agents):**
- Bucket A (Mike forks): 91 of 100 sampled forks 0 commits ahead, 87 byte-identical. Bookmarking pattern, not contribution. 9% show any commit activity; 4% show ≥10 commits.
- Bucket A2 (reception): 3:1 skeptical-to-supportive on HN. Sharp split between trade-press celebration ("changes the negotiation") and developer skepticism ("vibe garbage", "200+ forks not ready for anything beyond a thought-provoking demo"). Will Chen's interview revealed: no contribution model articulated, considering relicensing away from AGPL, can't answer how vibe-coders would be organised.
- Bucket B (lawyer contribution): No peer-reviewed empirical study exists. Available proxies (lawyersongithub directory ~40 across 15 years, Suffolk LIT AssemblyLine 9 contribs with one carrying 1,229 commits, dormant lawyer-coder accounts of well-known names) all point the same direction. The absence of measurement is itself the citable finding.
- Bucket C (legal OSS staying power): 6 surviving candidates from 11. FLP cleanest "designed for non-traditional contributors" pattern (Juriscraper per-court module = 48 contribs, 983 PRs). Docassemble single-maintainer + Slack community. LexNLP shows the corporate-publish-as-artefact failure mode.

**Batch 2 findings (4 parallel agents):**
- Bucket D (cross-domain onboarding): Three transferable patterns — Wikipedia Teahouse + auto-mentor (since Feb 2025); Astropy effort labels + "How to justify your contribution" page; OSM/OpenNews contributor-type-not-artefact-type structuring (with "Lonely Coders Club" as direct solo-counsel analogue).
- Bucket E (legal friction): Strong sourcing throughout. Confidentiality anchored by *US v. Heppner* (S.D.N.Y. Feb 2026, Rakoff). UPL anchored by ABA's own Sept 2025 admission that GenAI/UPL is "unclear." Caliper percentiles (Skepticism 90th, Autonomy 89th, Sociability 12.8 vs 50, Resilience long-left-tail 30%, Urgency +20%) sourced to Larry Richard "Herding Cats" 2008. Confidence read: trade-press not peer-reviewed; direction well-attested across instruments, exact numbers should cite Richard.
- Bucket F (forks): Diagnostic frame complete — 4 healthy patterns, 4 unhealthy patterns, 4 diagnostic signals. Mike's 91/100 zero-commits-ahead is the structural signature of signaling-fork ecosystem; healthy default (ephemeral PR forks producing merged contributions) entirely absent.
- SSRN/socials: Strong anchors for Bucket D (Bosu et al. 2025 — only 4 of 15 onboarding recs work) and Bucket F (Yoo SSRN 2866666; Simcoe & Watson 2019). No peer-reviewed lawyer-OSS-contribution study exists. Mike socials sweep corroborated A2 — same LinkedIn comment threads have the trade-press-vs-developer split inline (Saccone, Benson critiques on Tso's celebration post).

**Batch 3 (Harvey comparator) — added at user's request:**
Powerful finding. Harvey ($11B valuation, professional engineering org, brand recognition) shows the SAME pattern as Mike despite ~1000x resource gap. Three original public repos:
- harvey-labs (LAB, 1 day old): 182 stars, 38 forks, 41 merged PRs all from Harvey staff, 2 unmerged drive-by external PRs
- biglaw-bench (19 months old, the longitudinal comparator): 143 stars, 18 forks, 1 merged PR (staff), no visible external contribs ever
- deep-research-starter (10 months idle): 10 stars, 1 fork, 0 PRs ever

LAB pre-bundles everything Mike lacked (CONTRIBUTING.md, tutorial, architecture doc, named research partners, brand) and still produces 0 real-PRs shape after one day. biglaw-bench at 19 months confirms this is the mature endpoint.

This sharpens the central argument materially. Bottleneck is **demand-side**, not supply-side. The "lawyers don't have a contribution culture" claim is much stronger when Harvey's well-resourced releases also fail to convert legal-OSS interest into contribution flow.

**Research consolidation:**
research.md now has 10 sections (Mike at a glance, Mike reception, Lawyer contribution behaviour, Legal OSS that has lasted, How other communities did it, Legal-specific friction, When forks are healthy vs unhealthy, Comparators including Harvey, Open questions, Source list). All raw findings preserved in `raw/bucket-*.md`.

**What's next**

Reconvene with user on parked decisions before drafting:
1. Tone register — empathetic / documentary / challenging
2. Personal disclosure — whether opening admits user's own contribution behaviour
3. Series fit — OpenClaw Part N / sibling / standalone
4. Length budget — long-read vs usual length
5. AGPL sidebar — keep or cut

The research now strongly supports the working thesis. The Harvey finding adds a new framing option: this isn't a Mike vs OSS Mike problem, it's a "legal practitioners don't yet contribute, regardless of who's offering the repo" problem.

### 2026-05-08 — Session 1 (cont.): Performative-open reframe + redlines counterexample

User pushed back on the "demand-side bottleneck" reading of Harvey:
> "Harvey wants to take advantage of the good vibes being altruistic and open without having to manage or satisfy a community. For lawyer coders is this what we really want?"

This is sharper. Harvey isn't *failing* to generate contribution — they're *succeeding at performative openness*. They get the reputational return on "we open-sourced this" without the cost of actually managing a community. The contribution graph isn't a bug; it's the design.

**Two parallel research streams added at user's request:**

1. **Open-washing literature.** Strong sources surfaced:
   - Michelle Thorne 2009 verbatim definition of "openwashing"
   - Heimstadt 2017 academic anchor — "decoupling" framing
   - OSI calling Meta's Llama "open washing" by name (Feb 2025)
   - **OSI Maintainers book Oct 2025 — "Open Source theatre"** — the exact phrase for the contribution-flow dimension
   - Drew DeVault, Bradley Kuhn quotable critiques
   - Llama-2's contact-form gate as direct parallel to Harvey's biglaw-bench
   - Practitioner shorthand: "open weights ≠ open source" (Bender)
   - License-shift case studies (Terraform/BSL, Elastic/SSPL, MongoDB/SSPL, Redis/SSPL→AGPL)

2. **redlines (Houfu's own repo) as practitioner counterexample.** The data flips the vanity-to-usage ratio:
   - 156 stars BUT **219,844 monthly PyPI downloads** (Mike has 2,395 stars and zero meaningful download equivalent)
   - 37 merged PRs across 13 contributors (12 external + Houfu)
   - PR #71 rejection thread is the model: line-level critique with reasoning, contributor thanks Houfu for "patience and detailed reviews"
   - 5 specific honest-OSS practices visible: external PRs actually merged; substantive review even when rejecting; issues function as public roadmap; CI matrix Python 3.10-3.14; the package ships (9 releases on PyPI)
   - Used in DeepLearning.AI's ChatGPT Prompt Engineering for Developers course
   - Honest gaps: no issue templates, 2 watchers, bus factor 1, 14-month release gap in 2024, October 2025 burst likely Hacktoberfest-driven

**Research.md restructured to 12 sections:**
1. Mike at a glance
2. Mike reception
3. Lawyer contribution behaviour
4. Legal OSS that has lasted
5. How other communities did it
6. Legal-specific friction
7. When forks are healthy vs unhealthy
8. **Performative open source — "Open Source theatre" (NEW)**
9. Comparators (with Harvey reframed through performative-open lens)
10. **What honest small-scale OSS looks like — redlines (NEW)**
11. Open questions
12. Source list (expanded with new bucket sources)

**Revised working thesis:**
> Mike and Harvey are doing the same thing in different registers — performing openness without committing to community. Mike performs founder-vibes; Harvey performs corporate philanthropy. Neither is asking us to organise. And lawyer-coders are accepting this trade — starring, forking, applauding — because it's comfortable. The question isn't whether legal OSS will get a contribution culture. It's whether we want one. Because if we keep rewarding performative openness, we'll keep getting it. Meanwhile, a 156-star repo run by a solo lawyer can run a more honest open-source project than a $11B vendor or a 2,000-starred viral launch — because honest OSS is unglamorous mechanics, not marketing posture.

**Practitioner agency arc:**
The post moves from observation (Mike pattern) → broader pattern (Harvey same shape) → diagnosis (this is performative-open, named for 15 years) → counterexample (redlines proves the resource excuse is hollow) → choice (lawyer-coders, what do you actually want?). The personal disclosure question is now nearly answered by the research itself: redlines is Houfu's own work, so the post grounds in his practice rather than pure analysis.

**Still parked:**
- Tone register (probably documentary-with-empathy, but the OSI "Open Source theatre" anchor licenses sharper)
- Series fit
- Length budget (this is now genuinely a long-read; ~2500-3500 words plausible)
- AGPL sidebar (probably absorbed into §8 performative-open coverage; doesn't need its own section)

### 2026-05-08 — Session 1 (cont.): Discovery of prior Jamie post + drafting Round 1

**Major course-correction finding: the prior Jamie Tso post is published.** January 2026's *"I Build Infrastructure. Jamie Vibe Codes Tools. Here's What I'm Missing."* already used the "I compared my GitHub to Jamie Tso's and felt unproductive" hook + redlines vs Jamie tools comparison. Position there: vibe-coded tools fine for disposable internal use; *"sustainability matters for community-serving OSS."* This new post is the natural sequel — picks up where that one left off.

**The genuine experience driving this post (per user):** the workshop floor gratification. *"I been handling workshops where I help legal counsel get used to using ai and I feel very gratified when I see them get it. They're building something. And I want to maintain that feeling in a community i am part of like lawyers."* The post becomes an invitation, not a critique. Houfu names his own complicity (23-month gap) before looking at anyone else's.

**Pitch landed and approved.** Working title: **"Lawyers Are Building. Just Not On Each Other's Code."**

**Round 1 draft completed at 3,373 words.** Followed Voice Guide Lane 2 ("Learning in Public") template.

**Round 1 reviews dispatched in parallel:**

*Wei Lin (lawyer-coder, primary):* Strong landing. *"I starred Mike on day two. Like everyone else."* called the best single line. The 23-month gap disclosure earns the right because it comes BEFORE the wider data, not after. **One unfulfilled pitch promise: imposter syndrome.** Friction section names it via Whelan but doesn't sit in it. Wei Lin's specific double-bind ("not technical enough for engineers, not traditional enough for lawyers; both communities treat me as a visitor") isn't there. Two-sentence add would close the gap.

*Marcus Tan (legal tech, secondary):* Data assembly genuinely impressive. FLP/Docassemble section is implementable. **Top fixes:** (1) *Heppner* citation does more rhetorical work than the case supports — the leap from "consumer AI chats" to "lawyer's OSS commits" is a stretch. (2) Harvey LAB data premature; let biglaw-bench carry the case. (3) Mike/Harvey temperature asymmetry — push harder on Harvey, softer on Mike. (4) AGPL implications for firms not delivered. (5) 2019 PCL Risk Type study citation vague.

**Content-quality-auditor BLOCK fixes applied (Round 1.5):**
- Date disambiguation: 23-month merged gap (supabase June 2024) vs 19-month open-unmerged (jefftriplett October 2024) — two distinct events made explicit
- "Neither is wrong" promoted to standalone structural beat, reframed around workshop-energy vs GitHub-graph (not Mike vs Harvey)
- Houfu's voice added to friction section (perfectionism in own PR history)
- OpenSALT trimmed
- Personality paragraph compressed
- Close tightened (commitment list collapsed)
- Tomorrow list reduced from 5 to 4 items
- Tool friction sentence added

### 2026-05-08 — Session 1 (cont.): External PR audit + course-correcting cuts + restructure

**Critical research finding:** Of 9 GitHub handles audited (5 LegalQuants core + 3 active veterans + Houfu): **0 have a merged PR to a non-self/non-org legal-OSS repo in the last 12 months.** LegalQuants core members (jamietso, veronica-builds, rocky-li, techie-ray) have literally 0 PRs anywhere on GitHub. Even active veterans (Riehl, Zvenyach, Steenhuis) concentrate ~95%+ in own org ecosystems. Houfu specifically: 128 of 137 lifetime PRs to own repos; last merged non-self was supabase/auth-py June 2024 = 23 months. **The cross-pollination thesis holds: legal-OSS is a federation of solo silos.**

**User's framing direction (collective vs individual):** *"if individuals were named in a collective sense rather than singling out, it would be easier to swallow."* Naming discipline applied: keep Will Chen, Tauberer, Kuhn, DeVault, Whelan, Larry Richard (public protagonists who wrote their own pieces); aggregate the rest into "the well-known legal-tech voices," "the LegalQuants founder's own repo," "Hacker News commenters."

**Restructure direction (user):** *"open then go to mike and then its criticisms. Show that this is roughly the real picture in legal tech 'oss' or whatever you want to call it. with graphs and statistics. remark about Harvey-labs and show how similar it is to 'open source washing'. pose some explanation of why this might be the case. Explain why it open source is important."*

This drove the major restructure into 8 sections with graphs/statistics as the spine.

**Cuts applied (preferring recent over older):**
- DROP: Heppner, ABA UPL, pro bono framing (per user: *"drop hepner and the ABA thing. i don't even know what the pro bono thing is for"*)
- DROP: Tauberer 2018 + lawyersongithub historical anchor (8 and 17 years old)
- DROP: Michelle Thorne 2009 origin paragraph (17 years old)
- DROP: Bradley Kuhn 2018 line (8 years old)
- DROP: Larry Richard's specific Caliper percentiles (2002/2008 vintage; keep direction only)
- COMPRESS: Mike criticisms from 350w to ~120w (symptom, not argument)
- COMPRESS: Detailed Mike fork stories from 80w to ~50w with collective framing
- COMPRESS: Mike Whelan imposter quote → Houfu-voiced double-bind sentence

**Final restructure target: ~1,650 words / 7-8 min reading time.** Sections 4 and 5 (the empirical "real picture" with graphs + Harvey/open-source-washing) are the load-bearing core (~1,050w). Everything else is compressed scaffold.

**6-section architecture (locked):**
1. Opening (200w) — workshop + personal gap, Mike trigger embedded
2. **CORE: Mike is the symptom; the data shows the disease** (700w + 3 graphs) — Mike folds in as trigger, expands to LegalQuants 1-of-110 + 9-handle audit + fork distribution
3. **CORE: Harvey LAB and open-source theatre** (350w) — biglaw-bench longitudinal + LAB just-launched + OSI naming
4. Why this might be (100w) — culture only, no structural friction
5. Why open source actually matters (200w) — stakes
6. Close + Part 2 hook (100w)

**Graph spec commissioned externally** (per user: *"i would be asking someone to make the graphs"*):
- Tier 1 (must-have): Stars vs Merged PRs across legal OSS · 9-handle audit table-as-image · Mike's fork distribution
- Tier 2 (Part 2 territory): OpenSALT 49:1, redlines contributor distribution, etc.

**Stats inventory file created:** `posts/legal-oss-contribution/stats-inventory.md` — comprehensive statistics catalog for graph commissioning.

**Final pitch updated** in pitch.md with the 2-parter framing, the 8 → 6 section restructure, and the visualization spec.

**Status: ready to draft Part 1 from the locked structure.**

### 2026-05-08 — Session 1 (cont.): Legalquants directory + long-lived deep-dive

User: "Let's dig out github projects from legalquants.com/#directory. Compare stars, contribution history, issues. Make conclusions. Also compare what happens with long-lived actively contributed law-related OSS projects and see what are the gaps."

**Two parallel research streams executed.**

**Legalquants directory (the killer empirical anchor):**
- 110 directory members
- ~6 with verifiable non-trivial GitHub presence
- **Exactly 1 (Houfu/redlines) maintains a repo with double-digit external merged PRs and meaningful package-registry distribution**
- Median across 15 LQ-native repos: 13 stars / 4 forks / 2 contributors / **0 merged PRs**
- Dominant pattern: Mike pattern at miniature
  - jamietso/RedlineNow: 38 stars, 15 forks, 0 merged PRs in 5 months
  - yuch85/contract-playbook-ai: 34 stars, 10 forks, 1 contributor, 0 merged PRs
  - jamietso/Tabular_Review (LegalQuants founder's own): 52 stars, 20 forks, 2 merged PRs in 5 months — even the directory's owner runs Mike-pattern OSS
- veronica-builds/emilie: 4-day-old AGPL fork of Mike — fork-as-rebrand, no PRs back

**Conclusion:** LegalQuants is not a community-OSS ecosystem; it's a portfolio-display ecosystem. 110 self-selecting lawyers-who-code, structurally not built for OSS. This is the strongest empirical evidence we have for the §3 thesis.

**Long-lived deep-dive (the constructive close):**

For FLP (CourtListener, Juriscraper) and Docassemble, the agent extracted *mechanically describable* practices that the survivors do and Mike/Harvey/legalquants don't:

1. Every issue has an assignee
2. Scope-narrowing structure (per-court modules, package-vs-core split)
3. Non-GitHub front door (free.law/volunteer, docassemble.org)
4. Named reachable maintainer
5. Conventional-commit prefixes enforced
6. Curated `easy pickins` label
7. `fast-review` mechanism wiring PRs into sprint cadence
8. Community surface beyond GitHub (Slack, Discourse)
9. Documentation site IS the project
10. Public attribution of community work

**OpenSALT reframed as counter-example.** OpenSALT was in the survivor set on metrics but the deeper read shows 49/50 most-recent PRs are dependabot; the lone human PR is from a `MEMBER`. CONTRIBUTING.md is a 2017-frozen Community Participation Agreement, not a getting-started guide. Foundation-style governance without an open contribution path = empty external PR stream. **Governance is necessary but not sufficient. Open contribution path is the load-bearing variable.**

**Copy-vs-takes-years framework** (the post conclusion):
- Tomorrow (hours): conventional-commit prefixes, curated GFI label, named-human README, every issue assigned, "your change probably belongs in extension surface" routing
- Quarter (weeks): per-module structure, segmented front-door page, Slack with named host
- Years (relationship work): 501(c)(3), unsolicited tutorial-writer community, outside contributors out-shipping staff, conference presence

**Killer line surfaced:** "Mike's release failed on the tomorrow column, not the years column."

**Research.md now has expanded §3 (legalquants empirical anchor), expanded §4 (mechanical practices + gaps + copy-vs-years framework), and OpenSALT reframed as counter-example.**

**The post structure is now visible:**
1. Open with feeling/personal disclosure (redlines vs Mike?)
2. Mike's signature pattern (data)
3. The empirical case: lawyers don't contribute (legalquants 1-of-110 anchor)
4. Mike + Harvey both performing openness (Open Source theatre framing, biglaw-bench gate)
5. The friction (privilege, UPL, billables, Caliper personality)
6. The fork diagnostic (healthy vs unhealthy)
7. What the survivors actually do (FLP/Docassemble specific practices)
8. The gaps + copy-vs-years framework
9. Close: lawyer-coders, what do we actually want?

This is a long-read for sure. ~3500-4500 words plausible.

### 2026-05-09 — Session 2: Census-verification audit of "1 of 110 LegalQuants" claim

**What happened**

User flagged a worry on the load-bearing claim in the Part 1 draft: *"About six of the 110 have a verifiable, non-trivial public repo"* and *"exactly one (Houfu/redlines) maintains a substantively used project."* User feared the prior research's conclusion was either wrong or biased by Claude's familiarity with redlines (sample-induced selection bias).

**Methodology**

Plan written to `~/.claude/plans/the-research-claims-that-crispy-hartmanis.md`. User-confirmed criteria: ≥100 stars, ≥3 unique contributors (≥2 non-owner), tagged GitHub releases OR public package-registry presence ("the redlines bar"). Behaviour: report findings, discuss before editing the post.

Four phases executed:
- **Phase A** — captured the LegalQuants directory via jina-mcp `read_url` of legalquants.com homepage. Page header claims 112 members; only 101 visible in static-render snapshot. Output: `raw/legalquants-directory-110.md`.
- **Phase B** — 3 parallel general-purpose agents resolved GitHub handles for all 101 members (~34 each). Result: 31 verified + 1 probable + 69 NOT-FOUND. Output: `raw/legalquants-github-mapping.md`.
- **Phase C** — `gh api` audit of all 32 resolved handles against the criteria. Output: `raw/legalquants-110-audit.md`.
- **Phase D** — research.md §3 expanded with census methodology + verdict; this audit-trail entry.

**Verdict: claim verified.**

Across all 32 resolved handles' owned repos, **only two crossed ≥100 stars**:
1. `houfu/redlines` (156⭐, 12 contributors, 9 releases, PyPI v0.6.1 with 12 releases) — **PASS** all criteria
2. `AnsonLai/MuseScore-Printer` (115⭐, 4 contributors, **0 releases, no package**) — **FAIL** on release cadence; also non-legal (sheet-music download snippet)

PASS count = 1. The post's "exactly 1" claim is verified.

**Caveats noted in the audit:**
- 11 of 112 directory members not visible in the static-render snapshot. If any of those maintain a substantively-used project, the audit misses it.
- 69 NOT-FOUND members had identities confirmed via LinkedIn/personal sites but no public GitHub handle cross-referenced. Private GitHub work is invisible by definition.
- AnsonLai/MuseScore-Printer is a near-miss — it would PASS if the user dropped the release-cadence requirement, though it is non-legal.
- Borderline candidates >50⭐ but <100⭐: `jamietso/Tabular_Review` (52), `AnsonLai/TeslaServiceManualScraper` (67) would PASS at the Lenient threshold (50⭐) but not at the Redlines bar.

**Why this verification matters**

The prior research was a *sampled* audit (9 handles + 15 LQ-native repos), not a census. The user's worry was structurally legitimate: a sample that included Houfu could under-detect other substantively-used projects. The census-level audit closes that gap. Of the 32 resolved handles (which expands the prior 9 by ~3.5x), no additional member crosses the bar. The "1" claim survives.

**What was NOT touched**

- The Part 1 draft (`lawyers-not-on-each-others-code.md`) was not edited. Per user direction, edits await user discussion of the verdict.
- The 9-handle outbound-PR audit was not re-run. That audit answers a different question (do lawyer-coders push to *each other's* code?) and was not the subject of this verification.

**Status: ready to discuss findings + decide on any draft revisions.**

#### Round 2 retry pass (same day, 2026-05-09)

User asked for a deeper retry on the 69 NOT-FOUND members. Two parallel general-purpose agents retried 68 of 69 (skipping AnonLQ — intentionally anonymous) using deeper techniques: gh code search, multi-variant repo lookups, LegalQuants-org contribution checks, Substack/personal-site cross-references, Manus/Replit hosted-project searches.

**Round 2 resolutions (9 new):**
- David Rubenstein → tanko-r (verified — gh bio "Real estate lawyer, tinkerer." + Seattle)
- Sam Clearwater → admiral-cs (verified — samclearwater.com directly links "View on GitHub" to repo license-comply)
- Andrius Petrenas → AndriusPetrenas (verified — UltimateLegalAILibrary README cites QueryLex directly)
- David Liu → davidliudev (verified — Notellect AI / Singapore, exact name+location match)
- Ranjitha Rangaswamy → ranjitharangaswamy (verified — gh bio "Lawyer", repos legally-lite-game and RUSE match LQ projects exactly)
- Dharma Sadasivan → DharmaSadasivan (probable — exact name match but 0 public repos)
- Drew Miller → drewmiller (probable — London + OOXML-Validator repo aligns with Tritium domain)
- Ashley Winton → AshleyWinton (probable — sole repo legal-compare-tool consistent with Mishcon partner)
- Arjun Singh Chouhan → braveheartjun (probable — sole repo Modern-Jurist exact-match to listed project)

**Round 2 audit:** Each new handle's top-starred repo queried via gh API. Highest star count across all 9: 6 stars (tanko-r/awesome-legal-tech). None crosses the 100-star threshold. **Verdict unchanged: PASS count = 1 (houfu/redlines).**

**Final totals (post round 2):**
- 36 verified + 5 probable + 60 NOT-FOUND = 41 of 101 visible members resolved
- 2 owned repos crossing ≥100 stars (`houfu/redlines` 156⭐, `AnsonLai/MuseScore-Printer` 115⭐)
- 1 repo passes all three criteria (`houfu/redlines`)

The retry pass functioned as a robustness check on the original verdict — expanding the resolved-handle pool from 32 to 41 (28% increase) without changing the pass count is a meaningful confirmation. Files updated: `raw/legalquants-github-mapping.md` (rows for the 9 newly resolved members), `raw/legalquants-110-audit.md` (round 2 audit columns + verdict notes).

### 2026-05-09 — Session 3: Brainstorm on LegalQuants framing + draft restructure + scatter chart

**Context**

User had been struggling with the post draft and was concerned that referencing LegalQuants by name read as an attack on a community of builders. They asked to brainstorm "how to write about LegalQuants in a way that doesn't make this sound like an attack."

**Major decision: drop LegalQuants from the post entirely**

*Claude's analysis*: presented four options for LQ's role in the post — empirical anchor (current); reframed as "different kind of community"; illustrative not central; drop entirely. Anonymity-vs-data tradeoff explored.

*Claude's recommendation*: option (B) "different kind of community" — would have used the *neither is wrong* move to validate LQ as a builder community without making it a proxy for legal-OSS contributor culture.

*User decision*: option (D) **drop entirely**. Use the 41-handle audit data and the Mike/Harvey case studies; let the empirical case be made without referencing the directory at all.

*Outcome*: ✅ post no longer references LegalQuants by name. The framing problem is gone.

**§3 + §5 fill**

User clarified the role of two empty sections after Mike:
- §3 ("The Mike pattern persists across many open-source legal projects") = the empirical case that author-led / low-merge activity is the legal-OSS default
- §5 ("What makes a project graduate from demo to codebase") = mechanism: how a project transcends "personal project / demo" status by accommodating users, with redlines as the lived specimen

User confirmed the **redlines bar** criteria for §3 chart and confirmed *behaviour: report findings, discuss before editing post*. Claude drafted both sections preserving the user's revised opening (workshop-frame, less personal-vulnerability) and added all Voice Guide moves: *neither is wrong* for personal-vs-community-codebase distinction; specific numbers (220K monthly downloads, 9 PyPI releases, 4 Python versions); vulnerable admission ("I'm muddling through"); return to solo counsel reality.

Final draft: **3,021 words**, 8 sections, 4 chart placeholders.

**§3 chart pivot — from 9-handle table-as-image to 45-handle scatter plot**

*User direction*: "I wish I could add more legalquants members. I expect it'd be a scatter plot with two axes. Lifetime PRs and lifetime non self merged. Let's build up stats inventory with this."

*Claude's work*:
- Queried `gh search prs` for all 41 resolved LegalQuants handles + 3 active veterans (45 total)
- Initial run had 13 transient API failures; retry pass with 1-second pacing resolved them all
- Built consolidated dataset: 22 of 45 (49%) at origin (0,0); 11 more (24%) filed PRs but 0 non-self merges; only 9 (20%) show substantial non-self engagement; combined "no peer merge ever" = 73%
- Saved raw data to `raw/lawyer-coder-pr-scatter.tsv`
- Updated chart placeholder in post: `nine-handles-peer-contribution.svg` → `lawyer-coder-pr-scatter.svg`
- Rewrote chart spec in `stats-inventory.md` with full 45-row data table, cluster patterns, visual rendering brief

**Identity upgrade: drewmiller (Drew Miller / Tritium)**

PR-history audit (16 PRs, 7 non-self merged) revealed multiple `TritiumLegal.Tritium` releases to microsoft/winget-pkgs and Homebrew/homebrew-cask in early 2026 — confirms identity match with the LQ profile (Tritium founder, London). Upgraded from probable → verified in `raw/legalquants-github-mapping.md`. Note that all 7 non-self merges are self-product packaging (publishing Tritium to package registries), not contributions to peer projects — flagged in the chart's per-handle notes.

**Files modified**
- `posts/legal-oss-contribution/lawyers-not-on-each-others-code.md` — full restructure (3,021w, 8 sections)
- `posts/legal-oss-contribution/stats-inventory.md` — `lawyer-coder-pr-scatter.svg` spec rewritten with 45-handle dataset; `harvey-biglaw-bench-vs-lab.svg` and `personal-vs-community-codebase.svg` specs added
- `posts/legal-oss-contribution/raw/lawyer-coder-pr-scatter.tsv` — new raw data file
- `posts/legal-oss-contribution/raw/legalquants-github-mapping.md` — drewmiller upgraded; summary table updated to 37 verified + 4 probable

**What's next**

User asked for the next chart: "For LAB I want this to be a bit more in-depth card display of main contribution stats." Will pull current biglaw-bench + LAB metrics and expand the `harvey-biglaw-bench-vs-lab.svg` spec into a richer info-card.

### 2026-05-09 — Session 4: Wedge beeswarm rebuild + affiliation discount + active-veteran additions

**Context**

User picked up the §3 supplementary scatter from session 3 and walked it through several iterations. The rectangular plot wasted half its area on the impossible upper-left triangle. The "y = x" diagonal label was confusing and read as if the line was a target dots could sit on (rather than a mathematical ceiling). The y-axis term "non-self merged PRs" was jargon for what we actually meant. And the gh-search 100-cap on the original measurement understated several handles' work.

Each iteration was a chart rebuild. Final form: a wedge-shaped beeswarm (1000×740, trapezoid frame 840 wide at base / 110 wide at apex) with an affiliation discount applied to ten outliers and the y-cap dropped from 100 to 20.

**Major changes from session 3 scatter**

1. **Plot frame: rectangle → trapezoid.** The data is heavily skewed (32 of 87 handles at non_self_per_year = 0). The wedge matches the data shape; a rectangle does not. Custom packer rewritten from spiral-to-centre to actively distribute dots across the wedge width at each y level. y = 0 carpet now spans 94% of the chart base.

2. **Diagonal removed.** With y-cap = 20 and x-cap = 110, the impossible region is now a small upper-left triangle. No "y = x" line; no rotated label. The y-axis bound carries the constraint implicitly.

3. **Y-axis renamed.** "Non-self merged PRs per year" → "External merged PRs per year (excl. affiliated orgs)". Title became "How often lawyer-coders contribute to repos they don't own or work for".

4. **Affiliation discount applied.** Ran `discount-affiliated-prs.py` (paginated `gh api graphql` for each outlier, bucketed merged PRs by `repo.owner.login`). Discounted affiliated-org work for 10 handles. Two simultaneous corrections: removing the gh-search 100-cap that the original methodology hit, and excluding affiliated work. For some handles the un-cap dominates (benbalter rises 1.63 → 11.46), for others the discount dominates (nonprofittechy drops 83 → 11). Both directions are real.

**Outliers list (final, with discounted rates)**

| Handle | Cohort | Discounted /yr | Affiliated orgs excluded |
|---|---|---:|---|
| nonprofittechy | AV | 11.46 | SuffolkLITLab, LemmaLegalConsulting |
| batemapf | LoG | 13.45 | 18F |
| benbalter | LoG | 11.46 | github, jekyll, licensee, wp-document-revisions, presidential-innovation-foundation |
| adelevie | LoG | 8.31 | 18F |
| dpp | LoG | 0.67 | lift, liftweb, spice-labs-inc |
| compleatang | LoG | 4.19 | eris-ltd, monax-io (no PRs to either; unchanged) |
| damienriehl | AV | 1.41 | alea-institute, sali-legal |
| mjbommar | AV | 1.47 | alea-institute, LexPredict, 273v |
| Gauntlet173 | AV | 2.25 | Lexpedite |
| colarusso | LoG | 0.24 | SuffolkLITLab |

**Cohort additions**

Two active veterans added during this session:

- **mjbommar** (Michael Bommarito) — ALEA Institute president, 273 Ventures CEO, former LexPredict cofounder. Verified via web search that he is *not* on SALI's board (vendor collaboration via 273v only); `sali-legal` PRs kept as external.
- **Gauntlet173** (Jason Morris) — Symbolium founder, built Blawx and Lexpedite. SMU CCLAW PRs kept as external (research collaborator, not staff).

Active veterans cohort grows n=3 → n=5. Daniel Hoadley considered and dropped per user direction ("he doesn't PR enough"). Colarusso (already in LawyersOnGitHub) re-queried and discounted; rate drops 1.42 → 0.24.

**Findings worth noting**

- benbalter's pre-discount 1.63/yr was a methodology artefact, not a real reading. Un-capped, his pre-discount rate is 31.87/yr; even after discounting GitHub Inc. plus four projects he created or led, 11.46/yr — genuine outward contribution.
- compleatang's 64 external PRs are all to bona-fide community projects (hyperledger, helm). The discount investigation strengthened his position; he's the surprise upside outlier.
- The headline cohort findings survive intact: 74% LegalQuants at zero (no LQ handles are discounted) and 90% LawyersOnGitHub with at least some external work (all discounted LoG handles still have non-zero post-discount rates).

**Files touched**

- `lawyer-coder-pr-beeswarm.svg` — new chart, multiple rebuilds; current version is the wedge with affiliation discount applied
- `outputs/gen_beeswarm.py` — generator script in Claude's workspace (not in post folder)
- `discount-affiliated-prs.py` — multi-handle discount query (saved to post folder)
- `query-new-handle.py` — single-handle query for adding new rows (saved to post folder)
- `affiliation-breakdown.txt` — saved output of the multi-handle query
- `raw/lawyer-coder-pr-scatter.tsv` — appended mjbommar and Gauntlet173 (rows 91 and 92)
- `stats-inventory.md` — new "Wedge beeswarm with affiliation discount" subsection added under the Charts section
- `discussion.md` — this entry

**What's next**

The beeswarm chart is in a stable state. The Harvey LAB info-card spec from the end of session 3 is still the open work item.

#### 2026-05-09 amendment: JSv4 added (active veteran)

After the markdown sync, user noted JSv4 was meant to be added to active veterans. Web-searched to identify him: **JSv4 = John Scrudato IV**, Senior Legal Engineering & Data Strategy Manager at Gunderson Dettmer, who leads the Open Cap Table Coalition's Technical Working Group as Gunderson's representative.

His breakdown is the most dramatic discount case in the dataset. Raw rate 55.62/yr (820 lifetime merged across 12.80 years; only mjbommar comes close on raw output). After excluding three affiliated orgs — `Open-Source-Legal` (638 PRs, his project home), `Open-Cap-Table-Coalition` (60, the consortium he leads technically), and `gunderson-dettmer` (5, direct employer) — he sits at 9 truly external PRs. Discounted rate **0.70/yr**.

The 9 external PRs are scattered single-digit contributions to community projects (run-llama, docling-project, allenai, django-treebeard, nlmatics, wsvincent, tstanislawek). He's a heavy producer of legal-tech open source, almost entirely within his employer's strategic interests.

Active veterans cohort: n=6 (was n=5). Total plottable handles: 88. Discount table: 11 entries.

#### 2026-05-09 amendment 2: ErichDylus added (active veteran)

Practising Maryland and DC attorney; Product Lead for LeXscroW within MetaLeX; founder of Varia Law and CamoText; past LexDAO member and API3DAO External General Counsel. Confirmed lawyer-coder (both qualifications visible on LinkedIn and personal site).

Two corrections needed before locking the discount: the script's first pass missed `MetaLex-Tech` (his employer; 32 PRs — turned out to be the largest non-self owner), and there was a case mismatch on `lexDAO` (script searched `LexDAO`/`lexdao`, actual login is `lexDAO` — 9 PRs uncaught). Both web-verified: MetaLeX search confirmed Erich is Product Lead there; his own `ErichDylus/Lawyers` repo tracks LexDAO members.

Final affiliated count: MetaLex-Tech (32) + lexDAO (9) + api3dao (8) + CamoText (6) = 55. Plus 1 self. External: 6 PRs over 6.91 years. **Discounted rate: 0.87/yr** (raw was 8.82/yr).

Same shape as JSv4 — heavy producer of legal-tech open source within his employer's strategic interests, near-zero contribution to truly external repos. With the added strength as a data point that Erich is a *practising attorney*, not just an engineering-titled handle. The post argument that "lawyers don't push to each other's code" is more directly served by him than by JSv4 or McDonough.

Active veterans cohort: n=7. Total plottable handles: 89. Discount table: 12 entries.

Files updated:
- `raw/lawyer-coder-pr-scatter.tsv` — appended ErichDylus
- `outputs/gen_beeswarm.py` — added ErichDylus to discount dict
- `lawyer-coder-pr-beeswarm.svg` — re-rendered
- `stats-inventory.md` — discount table extended; cohort additions section extended
- `discussion.md` — this amendment

#### 2026-05-09 amendment 3: mkorpela (LegalQuants) and KedalionDaimon (active veteran) added

User asked about Mikko Korpela. He was *not* in the original LegalQuants directory snapshot (only joined the LegalQuants GitHub org on 2026-05-08, the same day as our audit cutoff) but is now an LQ member. Added to the LegalQuants cohort.

Methodologically interesting: his discounted external rate is 2.77/yr, but the breakdown shows the bulk of his "external" PRs are to non-legal OSS — `langchain-ai` (23), `robocorp` (4), and other general-purpose dev tools. Robot Framework community work via `MarketSquare` (112 PRs) and `robotframework` (25 PRs) is discounted as affiliated, but the remaining 46 external PRs aren't legal-OSS contributions. He'd be a strong "general OSS contributor" data point, weak "legal-OSS contributor" data point. Caveat noted in stats-inventory.

KedalionDaimon (Nino Ivanov, Oracle Senior Legal Counsel, Vienna) added as active veteran. Confirmed lawyer. **Zero lifetime PRs against any public repo over 10 years on GitHub** — cleanest possible data point for the post's thesis. Plots at the origin alongside the LegalQuants carpet. No discount entry needed (raw = discounted = 0).

Cohort sizes after these adds: LegalQuants n=41 plottable, LawyersOnGitHub n=42 plottable, Active veterans n=8. Total: 91. Discount table: 13 entries.

#### 2026-05-09 amendment 4: danielhoadley and ryanmcdonough added (active veterans)

User reversed the earlier decision to skip Daniel Hoadley once the breakdown landed: he has 9 filed and 8 merged, **all 8 to `nationalarchives`** (his employer for the UK Find Case Law project). Post-discount: 0/yr. He plots at the origin alongside KedalionDaimon. The reason he was originally dropped ("he doesn't PR enough") turns out to align with the post's thesis — his entire merged-PR history is concentrated in his employer's strategic project, with zero truly external community contribution.

Ryan McDonough added as the third "engineer at a law firm" alongside JSv4 and mjbommar — Head of Legal Tech Engineering & AI at KPMG Law (UK), no bar admission visible. Suspected KPMG GitHub orgs (`KPMG`, `kpmg`, `KPMG-LLP-UK`, `KPMGUK`) all returned 0 PRs — so no discount applied; rate stays at 1.06/yr.

**Methodologically interesting finding for ryanmcdonough**: his 18 external PRs are spread across 14 different orgs (umbraco, JohnSnowLabs, RasaHQ, parse-community, zenorocha, etc.), 1-3 PRs each. That's a *genuinely diverse* community-contribution profile, structurally different from the discount-heavy outliers (JSv4, ErichDylus, etc.) who concentrate in 1-3 affiliated orgs. He's an actual broad-spectrum external contributor, even if his work isn't legal-OSS-specific.

Active veterans cohort: n=10 (was n=8). Total plottable handles: 93. Discount table: 14 entries.

Files updated:
- `raw/lawyer-coder-pr-scatter.tsv` — appended danielhoadley and ryanmcdonough
- `outputs/gen_beeswarm.py` — added danielhoadley to discount dict (ryanmcdonough needs no entry)
- `lawyer-coder-pr-beeswarm.svg` — re-rendered
- `stats-inventory.md` — discount table extended; cohort additions section extended
- `discussion.md` — this section

#### Pending / dropped from this batch

- **Bo Kinloch** — handle still unconfirmed; lawyer status unverified. Held until user provides handle.
- **Daniel Hoadley** — dropped earlier per user direction.

Files updated this amendment:
- `raw/lawyer-coder-pr-scatter.tsv` — appended mkorpela and KedalionDaimon
- `outputs/gen_beeswarm.py` — added mkorpela to discount dict (KedalionDaimon needs no entry)
- `lawyer-coder-pr-beeswarm.svg` — re-rendered
- `stats-inventory.md` — discount table extended; cohort sizes updated
- `discussion.md` — this section

Files updated:
- `raw/lawyer-coder-pr-scatter.tsv` — appended JSv4 (row 93)
- `outputs/gen_beeswarm.py` — added JSv4 to discount dict
- `lawyer-coder-pr-beeswarm.svg` — re-rendered
- `stats-inventory.md` — discount table extended; cohort additions section extended
- `discussion.md` — this amendment

### 2026-05-10 — Session 5: Audit, review, refresh, publish

**Context**

User opened the session with the post folder still untracked on `blog/legal-oss-contribution`. Goal: get from "draft + research + scripts on disk" to "draft on Ghost." All the content audit, mediation, audience review, number refresh, and publish work landed in this session.

**What Claude did**

- **Initial commit gathering.** Split untracked folder into 2 commits: planning (pitch + research + discussion), data (stats-inventory + scripts + raw/ buckets). Draft and visuals deliberately deferred (user wanted to prune unused visuals first; deleted `lawyer-coder-pr-scatter.svg` and `legal_oss_stat_grid_series.html` as orphans not referenced by the draft).
- **Solo-counsels section completion.** User had partial section ending mid-sentence ("For lawyer coders, even if becoming a..."). Drafted the completion using pitch's stakes blueprint, with workshop-callback and "Stars don't maintain code" punch close. User later overwrote with their own tighter version (commons + WWW analogy) — see decision below.
- **Content quality audit (round 1).** content-quality-auditor on 5 specialists in parallel. Key findings: line 79 garble ("It hardly The jury is out for me on this one."), missing pitch sections 3 (criticisms) and 4 (LegalQuants prose), weak solo-counsels section, opening delays personal hook by 5 paragraphs, plus copy errors (Github→GitHub, predilict, Courtlistner, "means"→"mean", em-dash inconsistencies).
- **Draft-vs-pitch mediation.** Surfaced 10 divergences in a structured table. User chose: keep current draft direction (drop HN reception, Tauberer, AssemblyLine, Thorne/Kuhn/DeVault), but ADD three things — Will Chen's licence/contribution ambiguity moved into "What makes a project graduate" section; LegalQuants 1-of-101 audit surfaced in lawyer-coder section with new-coder caveat; 2019 docs-typo gap added to opening. Amended `pitch.md` to reflect new structure (3,000w target, dropped sections noted, original preserved as audit trail).
- **Audience review round 1.** Marcus + Wei Lin in parallel. Convergent findings: solo-counsels weakest section, new-coder caveat condescending, "dark moments" vague, closing line works. Marcus-only crit: "5x typical OSS rate" uncited (most credibility risk), OSI quote attribution loose, Harvey framing should call staff-only PRs "expected behaviour for corporate research infrastructure." Wei Lin-only: opening sets wrong power dynamic, Caliper-before-redlines wrong order.
- **Round 1 fixes (10 edits).** Dropped "5x typical" claim; cut "Man, that sounds really rotten"; sharpened Harvey framing with the "expected behaviour" sentence; softened OSI quote to paraphrase; reframed new-coder caveat from "their contribution history is still being written" (deficit) to "the infrastructure for them to contribute to actually exists yet" (structural); softened "best place to practice" sequencing with forward-reference; reordered Caliper↔redlines frustration so personal admission leads, research confirms; cut "dark moments" (replaced with "I'd like to think my background sets me apart. Mostly, it doesn't."); rewrote solo-counsels section (skill-development lead, dropped WWW analogy, added "18 months no one reviewed your code" cost-of-isolation example per Wei Lin); tightened opening to bring 2019 admission to para 3.
- **Audience review round 2.** Both reviewers near-ship. Convergent push-back on the new closing — both missed "I starred Mike on day two. Like everyone else." Marcus's three blockers: closing, Harvey denominator, OSI attribution. Wei Lin: ship.
- **GitHub stats refresh.** Pulled live numbers via `gh` CLI. Mike moved significantly in 2 days (2,395→2,657 stars, 3→6 merged PRs, day 9→day 11). Harvey LAB now 43 PRs with 8 unique authors — confirmed user's "most of them" softening was correct. biglaw-bench unchanged.
- **Harvey LAB denominator.** User confirmed top 3 accounts (ngrupen=23, spencerp=12, JulioPereyra93=3, total 38) are Harvey staff/collaborators; bottom 5 (renantrendt, massublau, KilgoreHerring, ClemenceLanfranchi, Abid-cognida) are external one-off contributions. Updated draft: "43 merged pull requests — 38 of them from three Harvey engineers. The remaining five are one-off external contributions. Eight more external pull requests, filed since launch, are sitting open and unreviewed."
- **OSI attribution verified.** PDF live at `opensource.org/wp-content/uploads/2025/10/osi_maintainers.pdf` (HTTP 200, last-modified 2025-10-14). Actual title: "Supporting maintainers and protecting the Open Source ecosystem." Updated post to link the URL and call it "October 2025 maintainers report" rather than "*Maintainers* book." Quote remains paraphrased per user preference.
- **Backlink curation.** 3 bookmark cards inserted via `<bookmark url="..." />` syntax: `open-source-ai-and-why-october-matters` after the 2019 admission; `tool-vs-infrastructure-mindset` between author-vs-maintainer beat and Will Chen paragraph in "What makes a project graduate"; `the-unexpected-joys-of-open-source` after the redlines-frustration paragraph.
- **Publish.** `node -r dotenv/config scripts/publish-lexical.js` posted draft to Ghost. Post ID `6a009daff5b377000154ff9a`, status `draft`. Image placeholders still need swapping for actual uploads in Ghost editor.

**User decisions**

- **Closing line stays as workshop callback (not the "I starred Mike" line both reviewers wanted restored).** User's reasoning: the "starred it myself on Day 2" line already appears in the body at the start of "The shape across the field" section (line 59) — restoring it as the close would be repetition. Marcus's "no-ship without restore" verdict was based on not knowing this. Closing decision settled: workshop-callback close stays; round 2 closing concern is now moot.
- **Skipped Marcus's other polishes.** User declined: line 83 "11 weren't visible" clause, OSI attribution further softened (only the link-and-title fix applied), docassemble parenthetical cut. User said "I am not so keen on them."
- **Mike data refreshed to today's snapshot (day 11 / 2026-05-10).** Picked over freezing on a story-snapshot date. Numbers will keep moving until publish day.
- **Mike fork sample kept (87/100 byte-identical).** Did not re-run; added snapshot note in prose ("I sampled 100 of them at the day-nine mark, when the count was 675").

**Outcomes**

- ✅ Post drafted on Ghost. All round 1 fixes landed; round 2 ship-blockers resolved (Harvey denominator now precise; OSI citation verified+linked; closing decision settled by repetition argument).
- ✅ Pitch amended to match actual draft direction with the original preserved.
- ✅ Three backlinks distributed across opening / mid / late post.
- ⚠️ Image placeholders still bare-filename text — need uploading via Ghost editor before scheduling.
- ⚠️ `post_id: 6a009daff5b377000154ff9a` not yet in markdown frontmatter — pending sync-back after final Ghost edits.

**Files modified**

- `lawyers-not-on-each-others-code.md` — round 1 fixes, number refresh, OSI link, 3 bookmark cards
- `pitch.md` — structure-intent amended (2026-05-10 note), original preserved
- `discussion.md` — this entry
- Deleted: `lawyer-coder-pr-scatter.svg`, `legal_oss_stat_grid_series.html` (orphan visuals)

**Next steps**

- Upload 3 visuals (`mike-fork-mosaic.svg`, forest PNG, `lawyer-coder-pr-beeswarm.svg`) to Ghost editor with alt text
- Schedule publication when ready
- `npm run sync-ghost lawyers-not-on-each-others-code` once and add `post_id` to frontmatter
- Part 2 KIV (what `docassemble`/`courtlistener` do differently + lessons from `redlines`)
