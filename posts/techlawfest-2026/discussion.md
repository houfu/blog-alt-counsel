# Discussion Log: TechLaw.Fest 2026 Reflections

## Session 2026-09-12 — Branch scaffold + pitch research

**Context:** Houfu attended TechLaw.Fest 2026 (9–10 Sep) and wants to write his reflections. He
intends to write most of the prose himself and asked for two things: a scaffolded branch, and a
pitch finessed with research first.

**Setup:**
- Branch `techlawfest-2026` off `main`
- Folder `posts/techlawfest-2026/` with `pitch.md`, `research.md`, `discussion.md`

### Original pitch (Houfu's words, preserved verbatim in pitch.md)

Two "dark" takeaways: (1) junior lawyers at risk of being left behind while the focus stays on
personal productivity, ROI and security/harm prevention; (2) LawNet 4.0 has doubled down on adding
sources rather than rethinking strategy, with real A2J consequences as the global vendors move to
agentic products.

### Pitch-time verification (the CLAUDE.md rule: a pitch is a hypothesis, not a finding)

**Verified and safe to build on:**
- "11 years in" — correct, 11th edition. CJ Menon's 2025 keynote marked the tenth anniversary.
- The LawNet critique — **strongly** supported. Of the six LawNet items announced from the TLF 2026
  podium (Justice Kwek Mean Luck, Day 2), five are corpus expansion or corpus organisation. Not one
  is a workflow, drafting or agentic capability. The 2026 release notes say the same thing.
- "Global vendors moved on" — verified. Lexis shipped Protégé Work (May 2026); Thomson Reuters
  shipped fully agentic CoCounsel GA (Aug 2026).

**Corrected before it could do damage:**
- An early search result attributed the theme "With Everyone" (from a "We First" society speech) to
  TLF 2026. Wrong — it belongs to another event. The actual theme is **"From Foundation to Frontier:
  The Role of Law Amidst Change."** Caught by re-reading the source rather than trusting the snippet.
  Had this gone unchecked it would have become the post's central irony.

**Flagged as needing refinement — takeaway 1:**
The claim as framed is rebuttable in one sentence. Singapore's institutions talked about juniors
constantly in 2026: CJ Menon and Minister Tong co-lead an attrition-and-AI committee (Jan 2026); the
Mass Call address in April was titled "A Profession in Transition — Preparing and Supporting the Next
Generation"; reported figures include 1 in 3 new lawyers possibly quitting within three years and 92%
of new lawyers already using AI. Proposed refinement: the gap is not attention, it is that the
juniors conversation is **pastoral** (retention, wellbeing, billable hours) while the AI conversation
is **operational** (throughput, ROI, security), and nobody owns the question of how a junior acquires
judgment when the work that used to build it is the work being automated. **Awaiting Houfu's
confirmation that this matches what he actually saw.**

### Findings that changed the shape of the pitch

1. **The bridge between the two takeaways.** Thomson Reuters put agentic AI into 200+ law schools in
   Jan 2026 under the line "120,000+ future lawyers shouldn't meet agentic AI on their first day at
   work." LawNet ran a training workshop in July 2026 teaching *prompt engineering techniques for
   legal research* — the exact critique Houfu made in `lawyers-prompt-engineering-wrong` a year ago.
   One juxtaposition joins both takeaways and links to the predecessor post.
2. **The locked shelf.** LawNet's own Sep 2026 release notes: AI Search now draws on Academy
   Publishing books, but full book access "requires a valid purchase of the digital book or an
   Academy Library subscription." The AI grounds answers in sources the reader may not be able to
   open. Strongest A2J detail available, and it is LawNet's own documentation.
3. **The counter-case exists and should be paid.** LawNet's AI summaries flag low-confidence
   paragraphs yellow and unsourced terms red with footnotes to source; Search Logs exist because the
   team admits non-determinism. That is better-surfaced hallucination engineering than the global
   vendors show. This gives the "neither is wrong" move real material: LawNet optimised for
   verifiability, the vendors optimised for doing the work.
4. **LegalWeek Asia (new, not in the original pitch).** Announced 10 Sep 2026, during TLF itself:
   Law.com/ALM and SAL will launch LegalWeek Asia, inaugural 28–29 Sep 2027, with TechLaw.Fest
   serving as "an anchor to the core program." Material to the "11 years in, TLF remains strong"
   opening. Left **out of scope** pending Houfu's call — scope decisions are his.

### Framing risk (pitch-time check #3) — rated HIGH

"LawNet 4.0 sucks" targets a small, named, publicly identifiable team. Repo precedent:
`prompt-engineering-wrong` drew reviewer feedback that its TLF critique "borders on too critical,"
and the title was broadened from *TechLawFest Got Prompt Engineering Wrong* to *Lawyers Got Prompt
Engineering Wrong*. Recommendation recorded in the pitch: attack the strategy, never the execution or
the people; lead with credit; source every criticism to SAL's own published material. Houfu to
decide intensity.

### Status

`pitch.md` is **v1, not locked** — it carries seven `[HOUFU]` open questions, including the emotional
opening, which per the Voice Guide must come from his real experience and was deliberately left as a
marked placeholder rather than invented.

**Next:** Houfu answers the open questions, pitch is locked, then WRITE.

### Decisions — 2026-09-12 (Houfu, on the three scope questions)

1. **Takeaway 1 framing: pastoral vs operational gap.** Accepted the refinement. The post will concede
   plainly and early that the institutions *are* talking about juniors, then locate the gap in the
   disconnect rather than in absence. Added guard: the concession must appear in the draft itself, not
   only in the pitch — a reader who can rebut the premise by paragraph three stops reading.
2. **LawNet intensity: strategy critique with receipts.** The heat stays, the target moves. Lead with
   genuine credit (the yellow/red hallucination flagging, Search Logs), then dissent, with every
   criticism sourced to SAL's own podium or LawNet's own release notes. Rule recorded in beat 4: no
   adjectives doing work a citation should do.
3. **LegalWeek Asia: one line in the opening.** Sharpens "eleven years in and still strong" without
   spending budget or turning the post into three arguments. Explicitly out of scope as an argument;
   noted below as a candidate future post.

**Pitch is now v2** — scope locked, four `[HOUFU]` open questions remaining, all of which need lived
experience rather than research: the emotional opening, beat 2 specifics, a concrete LawNet task that
took too long, and whether to print LawNet pricing (2023 figure, must be re-verified).

### Candidate future post

**LegalWeek Asia / the ALM partnership.** From Sept 2027 TechLaw.Fest becomes an anchor track inside
Law.com's LegalWeek Asia (28–29 Sep 2027, Sands, 4,000+ expected). A regional conference built over
eleven editions and 26,000 participants being folded into a US event brand is its own argument about
what happens to local legal tech institutions at scale. Not this post.

## Session 2026-09-12 (cont.) — Descope to LawNet-only; peer-group research

**Houfu's question:** as a reader, should the post carry both takeaways or focus on LawNet?

**Recommendation given, and accepted: LawNet only.** Reasoning recorded because it should inform future
pitches:

1. **The two halves are not equally his.** The LawNet argument rests on evidence nobody else has
   assembled — SAL's own podium announcement read against LawNet's own changelog and its peers'. That is
   reporting. The juniors argument is assembled from the CJ's speeches, Axios and Chambers — sources any
   commentator can reach. Combining them means the weaker half borrows credibility from the stronger and
   the stronger pays in room.
2. **Cutting juniors makes the TechLaw.Fest framing load-bearing rather than decorative.** LawNet 4.0 was
   unveiled at TLF 2025; its second act was announced from the same podium at TLF 2026. The conference
   becomes the clock — a one-year report card — and Houfu is one of the few people who was in both rooms.
3. **The controversial take needs room to be fair.** Framing risk was rated HIGH and the chosen approach
   is strategy-critique-with-receipts, which only works if the credit section is genuinely paid. At 500
   words shared with another argument that credit reads as throat-clearing before the knife; at ~1,400 it
   reads as someone who actually looked. The fairness *is* the rhetorical strategy, and fairness costs
   words.
4. **Reader test:** a week later you remember "added books to its search box while the vendors made their
   products do the work," and the AI citing books you must buy to open. You do not remember the juniors
   section.

Houfu will structure the draft himself. Pitch v3 therefore carries **no beat-by-beat outline** — thesis,
scope, guardrails and an organised evidence inventory only. Noted as a preference worth repeating: when
he says he is writing it himself, hand over evidence and constraints, not a shape.

### Research round 2 — his two questions, both of which changed the argument

**"How many people have ever written about Singapore LawNet?"** Almost nobody. The only popular-register
critique found is [tomoe.asia (Jan 2023)](https://tomoe.asia/posts/2023-01-10-free-access-to-case-law-in-singapore)
on the cost of reading a State Court judgment. Academic ancestor: Loo & Findlay, "Digitised Justice: The
New Two Tiers?" (2022). Everything else is announcement coverage. Searches for LawNet criticism are
dominated by Fordham Law's `ir.lawnet.fordham.edu` repository URLs — the field is empty enough that an
unrelated American URL scheme outranks it. **This post would be close to the first public strategic
critique of LawNet.** That settles the differentiation question decisively.

**"Do other jurisdiction-specific apps have this strategy?"** No — and this reframed the critique. Every
comparable national provider responded to AI, none with corpus expansion:

- **UK Find Case Law** (National Archives) — opened the data: public API, Open Justice Licence permitting
  computational use.
- **AustLII** — non-profit charity; signed a LexisNexis agreement (29 Jul 2026) to build AI capability on
  its own data while keeping it free.
- **CanLII** — non-profit; shipped Search+ (Mar 2026) and AI plain-language summaries, with a published
  generative-AI policy framed on equitable access.
- **HKLII**, **SCC Online**, **LBox** — built or moved to workflow.

**Why this matters:** the weak argument is "LawNet should have built CoCounsel," which LawNet can rebut
in one sentence (different mission, thousands of engineers). The strong argument is that **LawNet's peer
group is AustLII and CanLII — both non-profits, both poorer, both of which found a route.** LawNet had
three exits and took none. That version has no easy answer, and it is fairer.

**Sharpest comparator is domestic:** SMU's SOLID (MinLaw-supported, open data, public API) and SMU's
Legora partnership for agentic AI in the law school, announced 9 Sep 2026 — TechLaw.Fest week. Same
country, same week, opposite bets. Also updates `budget-2026-lawyers-ai-drivers-seat`, which had SOLID
as two years away.

**Fairness checks recorded in the pitch:** CanLII litigated against Caseway AI over scraping, so corpus
protectiveness is not unique to LawNet; AustLII's route needed a vendor's money; LawNet carries statutory
obligations its peers do not.

### Candidate future post (2) — the juniors gap

The pastoral-vs-operational split: institutions talk about juniors constantly (CJ Menon's attrition
committee Jan 2026, the Mass Call address Apr 2026, the Legal Profession Symposium Jul 2026; 1 in 3 may
quit within three years; 92% already use AI), but that conversation is about retention and wellbeing
while the AI conversation is about throughput, and nobody owns how a junior acquires judgment when the
judgment-building work is what is being automated. **Wei Lin post, not a Marcus post** — identity and who
the profession is for. Research already gathered in `research.md` §3. Per series discipline, this is a
logged candidate, not a planned Part 2.

## Session 2026-09-12 (cont.) — Draft scaffold

Houfu asked for a small post to edit himself. Written to `techlawfest-2026.md`, **1,357 words against an
1,800 budget** — deliberately short, leaving ~450 words of room for the two things only he can write.

**What the scaffold does and does not do:**

- Writes out everything the receipts support: the six TLF 2026 announcements, the 2026 release-note
  pattern, the unfair-vs-fair comparison, the peer routes (UK / AustLII / CanLII / HKLII / SCC Online /
  LBox), the credit section, the A2J argument and the locked-shelf detail.
- **Does not write the opening.** Left as a marked HTML comment naming exactly what is needed — he was in
  the room in 2025 when 4.0 launched and in the room in 2026 for the sequel, and only he knows what that
  felt like. Voice Guide principle 8: the emotional core comes from him, and inventing it is the failure
  mode. A single flat placeholder line sits under the comment so the file reads, and carries the "bigger
  bookcase" thesis early.
- **Does not invent the lived evidence.** A marked gap where one concrete LawNet task that took too long
  should go. Flagged in-file as the thing that turns "clogged and dense" from an adjective into evidence.
- Three other HTML comments mark optional material (the SMU/SOLID domestic comparator), the close as a
  candidate rather than a fixed landing, and the backlink placement.

**Lint:** 0 errors, strict mode. Two advisory warnings remain and are structurally deliberate —
"verifiability" first appears at 62% depth because that is where the credit section sits, and "exits" at
47% because it is the payoff line. Both will move when he edits. `--fix` appended `?ref=` to the two
internal backlinks; those use full alt-counsel.com URLs so they render as bookmark cards per house style.

**Also fixed:** pitch.md v3 had renamed its contract section, so the linter could not locate it. Restored
the `## Pitch` heading and trimmed it to the one-paragraph, ≤200-word contract.

**Next:** Houfu edits. After his pass, record the pitch checkpoint (`workflow-state.js checkpoint`) — not
done now, since the checkpoint keys to draft content hash and his edits would invalidate it immediately.
Then lint, one audit round (audit-substance + audit-tone in one message), then reviewers. Per his
standing preference, all three reviewers, not the CLAUDE.md default of 1–2.

## Session 2026-09-12 (cont.) — Conference slides transcribed; LawNet 3.0 screenshot hunt

**Screenshot hunt — partial result.**

- **LawNet 4.0: solved.** LawNet's own release notes host 38 public screenshots and GIFs of the 4.0
  interface, covering search, results listing, preview, document details, references panel, AI summaries
  and the Q&A. No login needed.
- **LawNet 3.0 home pages: solved.** Wayback has 238 captures of lawnet.sg (Oct 2015 – May 2026). The
  Jan 2025 capture shows the pre-4.0 portal with two separate login boxes on one page. A 2011 capture
  carries the banner *"A Fresh New Look! LawNet — Providing Precedents, Pushing Frontiers"* — worth
  noting against TLF 2026's "From Foundation to **Frontier**" theme.
- **LawNet 3.0 search and judgment display: NOT available.** Houfu correctly identified these as the
  surfaces that matter. They were always behind a login, so Wayback never captured them. The library
  guides that documented them put their screenshots inside PowerPoint files — SMU's three `ld.php`
  content guides and NUS's `lib.nus.edu.sg/ilp/llb/*.pps` tutorials — and **none of those files are
  archived**. Only the guide pages are, and they carry no inline screenshots.
- **Consolation finding, and a usable one.** NUS's 2018 guide *describes* 3.0's judgment display in
  prose: case treatment was "indicated just above the case name by the words 'Following', 'Referring',
  'Distinguishing', etc.", with "Case References" on the left panel. In 4.0 the same information is five
  colour-coded numeric counters on the result card. Words to five coloured counters is a documented
  before/after supporting the density argument — in prose rather than pixels, but citable.

**Rights position on the images:** all are SAL copyright (both the Wayback captures of lawnet.sg and
LawNet's own release-note images). Use in a critical piece is an ordinary fair-dealing-for-criticism-
and-review case, but the call is Houfu's. Nothing committed to the repo; JPEGs held in session scratchpad.

**Conference slides.** Houfu added 9 photos to `photos/`, all taken 10 Sep 2026 between 15:47 and 15:59
— Day 2, one session, a research-backed proposal on practitioner sustainability. Transcribed in full to
`conference-slides.md` (slides 5, 6, 7, 12, 14, 15, 17, 18, 19).

Two findings change what is available to the posts:

1. **Slide 14 — independent evidence, from SAL's own stage.** "A number of interviewees had never heard
   of or accessed LawNet.com and LawNet AI." A year after the 4.0 launch. This converts "the strategy
   isn't landing" from Houfu's opinion into someone else's research finding, presented at TechLaw.Fest.
   The proposed remedy is a *communications* strategy — demos, how-to guides, incentives — which is
   itself telling: market the bookcase harder rather than ask what is on the shelves.
2. **Slides 18–19 — a capability roadmap written for LawNet by someone else.** Review/verify near-term,
   recommend edits, generate first draft long-term; plus a citation checker and a contract-review tool
   built on LawNet's existing Precedents function. The "three exits" argument arriving from the floor
   rather than the podium. Lets the post be constructive without demanding LawNet become CoCounsel.

**Slide 17** (junior lawyer training: 3-stage framework, training audit questionnaire, living
compendium) belongs to candidate post #2 and usefully complicates it — someone *does* own the question,
which is a better post than "nobody is thinking about this."

⚠️ **Attribution unknown.** No title slide or presenter name in the photos, and not guessed. Must be
established before anything is quoted — it matters for accuracy and for the framing-risk rule about not
criticising named people.

⚠️ **Survey numbers are unsafe to convert to percentages.** Sample size, population and methodology are
not visible in the photos.

## Session 2026-09-12 (cont.) — Houfu sets the arc; pipeline research; pitch v4

**Houfu's direction:** emphasise the strategy, then go to the emotional. "People have worked very hard
at 4.0. They managed to buy lunch for people to provide feedback... Clearly there are people invested in
LawNet's success, but the world has changed. Law schools will now use Harvey or Legora. Lexis and
Westlaw may push even harder." Final part: what is at stake from an access-to-justice viewpoint, where
young lawyers grow up in a world where LawNet is irrelevant.

**Research verdict: the prediction is already past tense, and it is Singapore-specific.**

- **June 2026** — NUS Law becomes the **first law school in Singapore to partner with Harvey**.
- **9 September 2026** — SMU's Yong Pung How School of Law joins **Legora's Legal AI Scholars Program**,
  first in Asia, announced on the **opening day of TechLaw.Fest 2026**.

Both Singapore law schools, three months apart. Every Singapore law student now trains on Harvey or
Legora, not on LawNet. Reuters (7 Apr 2026) reported the strategy as what it is: "AI startups court law
students in fight for lawyer market." Legora's own pitch to schools is that it reduces the training
burden on firms — a promise made to the employer about the student.

Incumbents confirmed pushing into Singapore too: Lexis+ with Protégé launched in Singapore and Malaysia
and won AI–Legal at the Singapore Business Review awards 2026; Thomson Reuters has a WongPartnership
collaboration across South East Asia plus Practical Law Asia.

**Why this matters structurally:** it converts the A2J argument from *cost* to *succession*. Not "can a
solo afford the better tool" but "a generation learns research on Harvey or Legora and meets LawNet only
as the place you fetch an SLR citation." **This folds the abandoned juniors takeaway back in as the
stake rather than as a second argument** — a better structure than the original two-takeaway pitch, and
arrived at by Houfu, not by the workflow.

**Drafted into his arc:** the strategy section (his two bullets turned to prose, originals preserved in
git), the emotional beat from his material, a new "The world already moved" section, and the A2J section
re-aimed at succession. Draft now **1,690 words against an 1,800 budget**, 0 lint errors.

**Pitch amended to v4 to follow the draft**, per the standing rule that his hand edits win. Recorded
there: his title is authoritative; credit has *moved* rather than disappeared (from product credit to
credit for effort and intent — the lunch, the feedback sessions), so the framing-risk guardrail is still
satisfied by a better route; thesis_keywords updated to `[bookcase, LawNet, peers, pipeline]`.

**Flagged to Houfu, not changed:** the title in frontmatter has a mismatched quote pair
(`“Will LawNet become Just A Bigger Bookcase?"` — curly open, straight close), which would publish both
characters literally.

## Session 2026-09-12 (cont.) — JLC attribution confirmed; both inserts written

**Attribution resolved.** Houfu identified the photos as the JLC presentation; the TechLaw.Fest 2026
programme (agenda rendered in an iframe, read via the browser) confirms:

> **"The Impact of AI On Legal Practice by JLC Honorary Team"** — Thursday 10 September 2026, 15:45 SGT,
> Tech Bytes Stage (Hibiscus Jr), Level 3. Speakers two presenters (names withheld), Justices' Law
> Clerks, Supreme Court of Singapore.

**JLC = Justices' Law Clerks**, not Junior Lawyers Committee — worth recording, since the obvious guess
is wrong. Session start 15:45 matches the photo timestamps 15:47–15:59, so the attribution is solid.

**Programme detail worth having:** LawNet Technology Services ran "Unlocking Deeper Legal Insights with
LawNet AI" on that same Tech Bytes Stage **twice** that afternoon — 14:00 (Kenta Kusano, Chief
Executive, as moderator) and 16:05 — with the JLC findings delivered in between. The finding that
practitioners had never heard of LawNet AI was sandwiched between two sessions about LawNet AI. Used as
one restrained sentence in the strategy section; it is structural irony, not mockery, and it makes the
point better than any adjective.

**Two inserts written, per Houfu's go-ahead:**

1. **Strategy section** — the JLC finding plus its proposed remedy (an *enhanced communications
   strategy*: demos, how-to guides, incentives), landing on "when the product is not landing, the
   instinct is to market the bookcase harder rather than ask what is on the shelves." This is the
   section's own title made literal.
2. **The close** — replaced the shrug ending. "Somebody did ask, as it turns out": the JLC roadmap
   (review/verify, recommend edits, generate first draft; citation checker then contract review on
   LawNet's Precedents function), followed by the distinction that the photos made available —
   **LawNet's verifiability is aimed at itself; a citation checker is aimed at you.** The close now
   lands on "the plan exists, two law clerks presented it on a side stage" rather than on a shrug.

⚠️ **Framing guard added to `conference-slides.md`:** The presenters are junior members of
the profession making a constructive proposal. The post credits them; their research must never be used
to embarrass them or their employer, and all criticism stays aimed at LawNet's strategy.

⚠️ **LENGTH: the draft is now 1,967 words against a 1,980 cap.** Thirteen words of headroom, and the
concrete-LawNet-task insert is still outstanding. This needs a decision before more is added: either
raise `word_budget` in pitch.md (and record why here) or find cuts first. Per the workflow's own rule,
the length audit comes *before* additive fixes, so flagged to Houfu rather than resolved unilaterally.

## Session 2026-09-12 (cont.) — Houfu's accuracy check on LawNet 4.0 vs LawNet.com

He asked whether LawNet 4.0 and LawNet.com are the same thing. They are not, and checking it turned up
three things that bear on the draft plus one error in a **published** post. Full detail in research.md §8.

- **4.0 is the version; lawnet.com is the domain** (which also carries Academy Library, the store and
  OpenLaw). **lawnet.sg is still live and does not redirect** — two platforms in parallel a year on, and
  `lawnet.com/migrate` is still up.
- **This gives a fairer read of the JLC finding.** They said interviewees had never accessed
  "LawNet.com" — if you never migrated off lawnet.sg you never saw 4.0. Part of the awareness gap is a
  migration gap. Fairer than "they failed to market it", and still an indictment of the strategy.
- ⚠️ **OpenLaw complicates the "locked bookcase" line.** LawNet: OpenLaw gives **free access to
  Singapore judgments from 1965**, and Free Resources gives the last 3 months across three court levels.
  LawNet does not hoard judgments. The draft needs one sentence of precision or a reader rebuts it in a
  line. The precision *strengthens* the argument: content is free, **capability** is paywalled, and
  there is still no API — a **half exit** toward the UK route rather than none of the three.
- **Pair Search** (Open Government Products, Hack for Public Good): free search over all Supreme Court
  judgments since 2000, all Hansard since 1955 and all current legislation, promoted by the Judiciary as
  an "AI Pair Search prototype". Another free domestic comparator.
- **Houfu is already on record** in the Singapore Law Gazette, "Breakfast, Eventually: Why Lawyers
  Should Build Their Own Tools", that LawNet "has no public interface to build against". Backlink
  candidate, and it shows consistency rather than opportunism.
- **Correction to research.md §6c:** SOLID's full launch is **Q1 2028**, per Houfu's own article. My
  earlier "it is now moving" overstated it; the SMU/Legora partnership is a separate thing.
- ⚠️ **Error in a published post:** `budget-2026-lawyers-ai-drivers-seat` cites LawNet as
  `https://www.lawnet.gov.sg/`. That domain **does not resolve**. Live broken citation, worth fixing on
  Ghost independently of this post.

Not changed in the draft — the OpenLaw fix is a judgment call on a section Houfu owns, and the length
budget is already at 1,967 of 1,980.

## Session 2026-09-14 — Straightening the ending

**Houfu:** "i've edited the post but i feel that i lost the plot at the ending and we are recycling
points. can you review it and straighten it out?"

His edits (committed verbatim first as `fb56ab2`): split the opening, rewrote the strategy reveal as
"LawNet will become a bookcase, nothing more, nothing less", moved the interface-density point up into
the year-of-shelving section, cut the whole strategy section, added the scraping-moat paragraph ("one guy
and his claw") and the early-career line.

**Diagnosis — why it lost the plot (a pattern worth remembering):**

1. **Deleting a section orphaned two payoffs.** The close still cited "the same JLC presentation" and
   "LawNet's verifiability is aimed at itself" after both setups were deleted. When Houfu cuts a whole
   section, scan the rest of the post for references into it.
2. **The ending walked away from the opening.** His opening frame — LawNet as the old friend who stood
   with him against large firms and their armies of interns — never came back. That image *is* the
   access-to-justice argument; the ending was reaching for it with borrowed language instead.
3. **Recycling:** next generation twice, vendors-agentic-vs-LawNet-catalogues three times, 10,000 users
   twice, the bookcase image six times.

**Verified before editing:** "these products were shown off at TechLaw.Fest" — true. LexisNexis had
Protégé live at Booth A05 with two sessions; Thomson Reuters demoed Westlaw Singapore with Deep Research
and CoCounsel Legal on 10 Sep. Accuracy nudge: Protégé predates the twelve-month window, so "shipped
Protégé" became "shipped a new generation of Protégé". "Claw" = OpenClaw (his agent, used on Zeeker);
linked to the published field notes post.

**Changes:** stake section rebuilt on the equaliser/army-of-interns frame; JLC re-introduced inside the
close; payoff re-anchored on his density paragraph; OpenLaw handled precisely in the peers section (half
of one route, none of the other two) replacing a kicker OpenLaw had made inaccurate; trailing backlink
lead-ins removed (API backlink moved into the peers section); close is now an appointment. Draft went
from 1,825 to ~1,640 words, resolving the open length decision without raising the budget.

**Flagged to Houfu, not changed:**
- **Restored** the lunch/feedback-sessions paragraph he explicitly asked for last round; it went out with
  the strategy section. Marked with a comment; his call whether the cut was deliberate.
- **Dropped "forcibly"** from "forcibly scraping legal materials off the official web pages". Zeeker's
  own documentation describes its collection as scraping, and "one guy and his claw" is him — "forcibly"
  would describe his own project as adversarial. One-word change to his prose, flagged for veto.
- **Lost:** the prompt-engineering backlink (it was a tacked-on lead-in with a recycled point). Easy to
  reinstate as a clause if he wants it.
- "judgements" in his opening — house/legal usage is "judgment". Left for him.

## Session 2026-09-25: Claude Doc, and the reframe from critique to a friend's worry

**Working copy moved to a Claude Doc** at Houfu's request: https://claude.ai/code/artifact/d059b4f1-4941-415f-8784-b73844738b56 . Edits there must be merged back into `techlawfest-2026.md` before audit/review. The lunch-paragraph flag moved from an HTML comment to a doc comment.

**User decision (reframe):** after reading the doc, Houfu wanted the emotional appeal to lead rather than "a comparison and a criticism of the direction it is going", and asked for the pitch to be reviewed before any change. On review he added that the critique must stay, firmly, at the end: "if this is the direction lawnet is going to take, it will clearly be left behind"; agentic AI workspaces create haves and have-nots; firms that can afford Harvey and "the now probably more expensive CoCounsel or Protege" will be fine, the have-nots "will rely on meat computers and be less able to attract younger talent"; "a foreboding future not just for LawNet but legal practice in general."

**Pitch v6** (rewritten into the generate_a_pitch fixed shape; v5 evidence inventory and guardrails parked in research.md §9): budget 1400; primary wei-lin, secondary sarah + marcus (all three still review); thesis keywords [LawNet, friend, bookcase, haves]; must_link cleared (both links went with the cut sections).

**Why the pitch was wrong / which check missed it:** framing risk. I recommended "strategy critique with receipts" and resolved the risk by construction, without asking whether Houfu wanted to be the one publishing the first public strategic critique of LawNet. For a named institution the author is fond of, ask about the relationship before picking the register.

**Draft changes (doc and repo file, identical):**
- Cut: release-notes paragraph, "That is a year of shelving.", the whole peers section (vendor comparison, UK/AustLII/CanLII/HKLII/SCC/LBox, three routes, OpenLaw/API + budget-2026 link), "The world already moved" (Reuters, incumbents, scraping moat + OpenClaw link), and the old stake section.
- Kept untouched: Houfu's opening, density paragraph, his early-career line (moved into the ending), the lunch paragraph, the JLC roadmap, the appointment close.
- "I did not want LawNet to become CoCounsel" → "turn into one of the global vendors" (CoCounsel is now introduced later).
- New section **Haves and have-nots**, built from his dictated words: equaliser callback; AI as the new army of interns (Protégé, agentic CoCounsel, both at TLF); firms that can pay will be fine, have-nots rely on meat computers (his phrase, kept); harder to hire (NUS–Harvey June, SMU–Legora 9 Sept); conditional firm verdict; foreboding for legal practice in general. Price claim kept hedged ("probably"), as he said it.
- 1,071 words vs 1,400 budget. Lint: 0 errors; advisory that "haves" first appears at 69% depth, which is by design (warm first, firm last).

**Still open for Houfu:** one real story of LawNet standing with him against a bigger firm (the opening's image has no scene yet); lunch paragraph keep/cut (doc comment); "judgements" spelling; title stays his unless he wants a warmer one.

## Session 2026-09-25 (cont.): Houfu's doc edits merged, branch cleaned, into review

**Branch:** the main checkout (on `skills-that-travel`, a different post) had an untracked `posts/techlawfest-2026/` holding the nine HEIC originals and a .DS_Store. Moved the HEICs into this branch's `photos/` (gitignored here via `*.HEIC`), removed the stray folder; the main checkout is clean. Post work lives in the worktree `.claude/worktrees/techlawfest-2026`.

**Doc → repo merge (doc rev 441), Houfu's own edits, kept verbatim:**
- The equaliser scene: up against a firm and its army of interns; "I could never match their output"; being a deft LawNet user, its citator functions; "it was never because I couldn't put my best case forward." This answers the long-open ask for a real story.
- New irony paragraph: litigants in person using ChatGPT; a prospective buyer cannot tell a litigant with ChatGPT from a firm with ChatGPT.
- "I am not interested in whether LawNet turns into one of the global vendors"; "and continue to do so".
- Law clerks anonymised: "a team of Justices' Law Clerks" (names removed — his call, consistent with the framing guard in conference-slides.md).
- Close: "I always wonder if it will be the last." (replaces "I hope it takes the law clerks up on it").
- Via comment thread: added "There may also be more passionate users of LawNet than the team expects." to the lunch paragraph (his idea, near his words). Lunch paragraph kept — flag resolved.

1,232 words vs 1,400. Lint 0 errors; "haves" first at 61% depth (by design). Pitch v6.1 amended to follow.

## Session 2026-09-25 (cont.): audit round 1 (the only one)

audit-substance + audit-tone, one message. Applied critical fixes only, all to Claude-drafted sentences:
- Cut the read/reads chiasmus ("Everything LawNet added... A citation checker reads the lawyer's work instead.") — a second jab before the final beat, breaking "warm first, firm last" (tone audit's IF ONE THING).
- Tricolon merged: "...content arranged more neatly. None of them does a piece of work for you."
- Cut Claude's "I said at the start... That was not nostalgia." lead-in — it duplicated Houfu's own "army of interns" line (flagged by both audits). His scene now follows "For a small firm, LawNet was the equaliser." directly.
- "the JLC Honorary Team's research" → "their research" (redundant acronym).
- "what it calls a fully agentic CoCounsel" — attributes vendor language.
- Verified "started in 1990 as a dial up network" against SAL's own 2007 article (research.md §10). No change.

Held for reviewers / Houfu: irony paragraph's link to the have-nots argument (substance IF ONE THING — his paragraph); glossing Harvey/CoCounsel/Protégé for non-specialists; "What I wanted" heading; lawnet.sg migration-gap clause for fairness; "judgements"; "What difference does ... have with".
1,180 words. Lint 0 errors.

## Session 2026-09-25 (cont.): reviewer round 1 (Wei Lin primary; Sarah, Marcus secondary)

Verdicts: all three "partly". Wei Lin — the emotion is real and the ending mostly earns it; verdict comes too early; builder angle absent (cut by design). Sarah — felt targeted not lectured; Harvey/Legora ungrounded. Marcus — differentiated and accurate (podium list verified); warm reframe costs the verdict some earned weight; the ChatGPT irony is the most original idea.

Applied (Claude-drafted sentences only):
- JLC line: "...LawNet.com and LawNet AI, the platform that came with 4.0. The old LawNet site is still running, which may explain some of that." (Marcus IF ONE THING; resolves Wei Lin's 75%-vs-never-heard contradiction; tone audit fairness note.)
- "Start-ups like Harvey and Legora sell the same kind of tool." (Sarah IF ONE THING; substance audit.)

Put to Houfu (his prose): para 5 verdict → question (Wei Lin IF ONE THING); cut "few would become skilled lawyers..." (Wei Lin + Marcus); irony paragraph bridge + "another piece of irony" + "have with" (Wei Lin, Sarah, substance audit); second "(What in the world is that?)" (all three); "Are blogs next?" (Wei Lin); "friend" once mid-post; "almost certainly" in the scene; "judgements".
OUT / follow-up: locked-shelf books detail and verifiability counter-case (Marcus); builder angle and Feb "impressive" continuity (Wei Lin); Harvey/CoCounsel prices (Sarah, unverified). Memory files updated.
