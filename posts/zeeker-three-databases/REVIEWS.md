# Reviewer Feedback — Round 1

> Two parallel reviews on the v1 draft (post-Round-1-audit). Both reviewers flagged write-tool unavailability; condensed findings saved here for audit trail.

## Wei Lin (lawyer-coder-reviewer)

### Top reaction
"Reading this on the MRT at 7:40am and I nearly missed my stop." The "invisible work" framing hit specifically — named something Wei Lin has felt for two years but never seen articulated. The triple "also" in "also working full-time, also writing this blog, also trying to have a life" is "my sentence."

### What works
- "Felt something I hadn't felt about this project in months: satisfaction" — restrained, "months" doing quiet work
- Specific tool chain (Datasette → SQLite → S3) signals real builder, not reconstructed
- "Heroics scale to about three weeks before something cracks" — most quotable line in public preview
- "I was wrong about that" callback to Part 1 — trust-building self-correction
- "Neither is wrong / wrong-shape problem" — generous and useful, not tribal
- Closing question "What's your loop?" — opens door without begging

### What needs work
- **Conviction in opening not yet earned by public section.** "I believe I can actually get there" lands without evidence inside the public preview. Public section explains framework but never shows it working.
- **Loops framework portable but not actionable.** "Plan → Do → Feedback" understood conceptually, but the *transition* between phases unclear. How do I know when planning is done?
- **Discord section underdescribed for effort.** "Friday evening, Monday morning" image is good but Wei Lin doesn't know if this is "an hour" or "a weekend integration project." Tease vs actionable.
- **"Vision since law school" mentioned twice but never unpacked.** Even 4-6 words of specific content would make conviction land.
- **NanoClaw section: architectural answer, no first-success-moment.** Wants one sentence on what it felt like the first time the loop ran without the old failure recurring.

### Top 3 priorities
1. **Add one concrete loops anchor in Section 3 before the gate (~50w).** Show the framework working once. Make conviction earned, not asserted.
2. **Place Discord setup on effort spectrum (~30w).** "An hour" vs "weekend project" — single sentence transforms tease into actionable.
3. **Give law school vision one clause of specificity (~15w, twice).** Tells reader what's actually being built.

### Subscribe based on public preview alone?
**Yes, with friction.** The "invisible work" framing alone is worth subscribing for. But loops framework abstraction means Wei Lin can't be certain members content delivers genuine specificity. Recommendation 1 fix would convert to "subscribe faster, with more confidence."

---

## Marcus Tan (legal-tech-blog-reviewer)

### Top reaction
"This is the rarer third kind: someone who admitted the failure in Part 1, kept going quietly, shipped something real, and came back with an explanation that's more about workflow than celebration." Loops-not-heroics is "basically PDCA with an agent in the Do phase" but applied with enough Zeeker-specific texture to read as earned. SOLID positioning is the detail that proved the author actually knows the Singapore legal data landscape.

### Has he shipped?
**Yes.** The schema specificity (SG Law Watch 7, Zeeker Judgements 4, SG Government Newsrooms 10 — 21 tables total) tracks with someone who designed and debugged real table structure. The Part 1 failure callback (hallucinated data, trying to create resource from hallucination) is the kind of detail that gets suppressed in marketing and remembered vividly by the person who lived it.

### Technical accuracy
- **NanoClaw description: broadly accurate**, with "a handful of source files" doing unquantified work. "Small enough to read in a sitting" more defensible.
- **Process topology unresolved.** "Runs as its own agent process; I manage and direct it through Claude Code" — confusing for developers. Subprocess? Separate process Claude Code messages? Service exposing interface? Author flagged this as planned expansion; expansion should specifically address process topology.
- **Container isolation argument breezy.** Part 1 failure was *semantic* (hallucination); container isolation solves *structural* (filesystem access). These solve different problems. As written, careful reader could argue stated problem hasn't been addressed by stated solution.
- **Discord deferral mechanism missing.** "Gets logged and surfaces again the next morning" describes UX without describing mechanism. Even "via a scheduled Discord message" gives technical reader something to reason about.
- **"Harness has a shape" thesis: workshop-slideable.** Generalises beyond OpenClaw vs NanoClaw cleanly.
- **SOLID positioning accurate.** Author isn't overclaiming proximity to SOLID's empirical metadata territory.

### What needs work
- NanoClaw process topology gap (most important)
- Discord deferral mechanism (one sentence of HOW)
- Container/hallucination distinction (clarifying sentence)
- Close slightly too clean — naming one unresolved item would maintain earned credibility

### Top 3 priorities
1. **Resolve NanoClaw process topology in one tight paragraph.** Author has flagged expanding this — expansion should address topology specifically, not just add background.
2. **Add one sentence of mechanism to Discord deferral flow.** Distinguishes real workflow from aspirational description.
3. **Disambiguate container isolation from semantic hallucination prevention.** "Containers don't prevent hallucinations; they prevent hallucinations from cascading into parts of the system I didn't intend to expose" — makes argument technically sound.

### Worth-paying-for assessment (gated sections 4-8)
**Mostly yes.** Sections 5, 6, 7 earn the gate clearly. Section 4 partial-earns pending the planned topology expansion. Section 8 close does its job; one unresolved item would feel as honest as the rest.

**Verdict:** Would forward to Singapore legal tech community Discord with note that NanoClaw description is marked for expansion.

---

## Synthesis & Edit Plan

### Convergent feedback (both reviewers)
- **Discord mechanism gap:** Wei Lin (effort), Marcus (mechanism). Single sentence covers both.
- **Section 4 has gaps:** Wei Lin (no first-success moment), Marcus (process topology, container/hallucination).

### Divergent feedback
- Wei Lin loved the close; Marcus thought it slightly too clean. **Resolution:** Don't change close — Wei Lin's reaction is the target audience signal.
- Wei Lin wants vision specificity; Marcus didn't flag this. **Resolution:** Apply Wei Lin's fix (small, additive, voice-aligned).

### Edits to apply (Round 1 reviewer fixes)

**MUST (high agreement, high impact):**
1. Section 5: Add Discord mechanism + effort sentence (~30w) — addresses Wei Lin #2 + Marcus #2
2. Section 4: Add container vs hallucination distinction (~25w) — Marcus #3
3. Section 3: Add concrete loops anchor sentence (~40w) — Wei Lin #1

**SHOULD (light, voice-aligned):**
4. Open: Add vision clause (~10w) — Wei Lin #3
5. Section 4: "handful of source files" → "small enough to read in a sitting" — Marcus

**DEFER (to user expansion as already flagged):**
- NanoClaw process topology paragraph (Marcus #1, Wei Lin first-success). User said they want to expand the NanoClaw explanation — this is exactly that expansion.

**SKIP:**
- Close additions (Marcus's "name one unresolved" suggestion). Wei Lin liked the close as-is; closing question still works.

### Net word count impact
- Additions: ~105w (mostly compensated by Round 1 audit's closing trim of ~80w)
- Post should land at ~1700w, still under 1780w target
- Public preview goes from 480w → ~520w (better fit for subscription preview)
