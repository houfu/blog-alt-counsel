# Discussion: ECT No-Lawyers Zeeker Post

## AUDIT TRAIL: Key Decision Points

### Decision: Use [2026] SGECT 1 as access-to-justice trigger (2026-05-20)

**Codex's Analysis:**
- Verified the official eLitigation judgment for `JGP v JGQ [2026] SGECT 1`, dated 15 May 2026.
- Initially checked Zeeker MCP through full-text and URL search and incorrectly concluded the judgment was not indexed; this was later corrected by citation-column lookup.
- Found public commentary through Jina search: CNA, The Independent Singapore, Nicholas Ngo, Clarence Ding, Chris J Reed, and light Reddit/social reposting.

**Codex's Recommendation:**
Use the case not as a pure employment-law case note, but as a practical access-to-justice post: if even employment lawyers disagree about the judgment, the ECT’s in-person design may be carrying more complexity than ordinary claimants can reasonably handle.

**User Decision:**
User approved the pitch and asked specifically to research who else had commented on the case using Jina.

**Outcome:**
Initial pitch and research scaffold created.

## SESSIONS

### Session 1: Pitch approval and commentary research (2026-05-20)

### Context

The user wanted to test whether Codex could support a new blog post workflow and proposed a post about `[2026] SGECT 1`, ECT privacy/in-person design, possible invisible legal support for employers, and Zeeker MCP as a levelling tool.

### What Codex Did

- Used the pitch-generation, blog-research, brainstorming, and tag-registry guidance.
- Verified the official eLitigation judgment page.
- Checked Zeeker MCP for the judgment and confirmed it was not yet indexed.
- Used Jina MCP to search for public commentary and read accessible pages.
- Created the post folder with pitch, research notes, and this discussion file.

### Files Modified

- `posts/ect-no-lawyers-zeeker/pitch.md`
- `posts/ect-no-lawyers-zeeker/research.md`
- `posts/ect-no-lawyers-zeeker/discussion.md`

### Next Steps

- Confirm the post title and folder name.
- Research ECT representation rules and current statutory framework.
- Build a Zeeker demo once `[2026] SGECT 1` is indexed, or demonstrate adjacent-case discovery first.

### Session 2: Outline and subscription break planning (2026-05-20)

### Context

The user asked to work on an outline and consider where the post might break for subscription options.

### What Codex Did

- Read the existing discussion, pitch, and research notes before outlining.
- Created a proposed article structure that moves from public reaction, to legal complexity, to the ECT access-design problem, to a practical Zeeker workflow.
- Added three subscription break options and recommended keeping the main access-to-justice argument public while gating the applied Zeeker workflow if subscriber conversion is the goal.

### Files Modified

- `posts/ect-no-lawyers-zeeker/outline.md`
- `posts/ect-no-lawyers-zeeker/discussion.md`

### Next Steps

- Confirm whether the post should be fully public or use the public-analysis / members-only-workflow split.
- Research ECT representation rules before drafting.

### Session 3: Sharpened sections 3, 5, and 6 (2026-05-20)

### Context

The user agreed with the public-analysis / members-only-workflow split and asked whether more brainstorming was needed, suggesting focus on sections 3, 5, and 6.

### What Codex Did

- Recommended against broad brainstorming because the main angle was already clear.
- Added focused angle notes for the three load-bearing sections.
- Reframed section 3 as proof of legal complexity, section 5 as a Zeeker research-map demonstration, and section 6 as the reusable subscriber framework.

### Files Modified

- `posts/ect-no-lawyers-zeeker/outline.md`
- `posts/ect-no-lawyers-zeeker/discussion.md`

### Next Steps

- Research ECT representation rules and exceptions.
- Draft section 3 first, because it sets up the paywall and the need for the Zeeker workflow.

### Session 4: ECT representation and forum-design research (2026-05-20)

### Context

The next research gap was the actual ECT representation rules and public guidance, so the access-asymmetry argument would rest on the forum’s stated design.

### What Codex Did

- Used Jina to search and read Singapore Courts, TADM, and Singapore Statutes Online materials.
- Added research notes on the ECT no-lawyer rule, representation exceptions, TADM mediation, appeal-stage lawyer involvement, and the 2017 State Courts launch release.
- Identified the strongest source for the article’s irony: the 2017 launch release says ECT is simplified, lawyer-free, and not a forum for complicated employment claims; `[2026] SGECT 1` says wrongful dismissal law is layered, difficult, and unclear within the in-person tribunal setting.

### Files Modified

- `posts/ect-no-lawyers-zeeker/research.md`
- `posts/ect-no-lawyers-zeeker/outline.md`
- `posts/ect-no-lawyers-zeeker/discussion.md`

### Next Steps

- Confirm exact statutory wording only if the draft quotes legislation directly.
- Draft the public sections using `[2026] SGECT 1` paragraph 4 and the 2017 launch release as anchors.

### Decision: Use citation-column lookup for known cases (2026-05-20)

**User Decision:**
User pointed out that Zeeker lookup should use the `citation` column in the `judgments` table for known neutral citations, rather than relying on full-text search.

**Codex's Analysis:**
- Re-ran Zeeker lookup with `judgments.citation exact "[2026] SGECT 1"`.
- Confirmed that `JGP v JGQ [2026] SGECT 1` is indexed, with 414 fragments, extracted at `2026-05-19T21:09:29`.
- Confirmed the case has no generated summary yet, so the better workflow is citation lookup followed by fragment search.
- Retrieved paragraph 4 and Annex 3 / A.48 through `judgments_fragments`.

**Outcome:**
Corrected `research.md` and `outline.md`. The Zeeker workflow now starts with citation lookup, then fragment search, then adjacent-case discovery.

### Session 5: First draft with member split (2026-05-20)

### Context

After confirming the Zeeker fragment workflow, the user asked to continue. The next planned step was drafting the article with the agreed public-analysis / members-only-workflow split.

### What Codex Did

- Read the full Houfu Voice Guide before drafting.
- Created `draft.md` with frontmatter, public sections 1-4, a `<!--members-only-->` break, and members-only Zeeker workflow sections.
- Replaced the old claim-assessment framework with the safer “Search, Structure, Compare, Escalate” research workflow.
- Cleaned `outline.md` and `research.md` to remove the stale “not indexed yet” and four-question-framework planning artifacts.

### Files Modified

- `posts/ect-no-lawyers-zeeker/draft.md`
- `posts/ect-no-lawyers-zeeker/outline.md`
- `posts/ect-no-lawyers-zeeker/research.md`
- `posts/ect-no-lawyers-zeeker/discussion.md`

### Next Steps

- Review the draft for tone and legal-advice risk.
- Add backlinks and source links.

### Session 6: Intro reframed around factual case vs legal research (2026-05-20)

### Context

The user found the initial introduction too generic and clarified the key point: public frustration at benefit misuse may be understandable, but legal understanding requires more than a good factual case.

### What Codex Did

- Rewrote the introduction to start from the public reaction to medical-benefit misuse and then distinguish that from the legal question.
- Added the employee-side counterpart: an employee hoping to prove wrongful dismissal may have a sympathetic factual story, but still needs to deal with legal labels, evidence, forum limits, and remedies.
- Added a bridge into the Zeeker section: if understanding the legal architecture is necessary, research becomes part of access.

### Files Modified

- `posts/ect-no-lawyers-zeeker/draft.md`
- `posts/ect-no-lawyers-zeeker/discussion.md`

### Next Steps

- Add source links and backlinks.
- Review for legal-advice risk before feedback/audit.

### Decision: Access asymmetry is the emotional spine (2026-05-20)

**Codex's Analysis:**
- Asked the user which discomfort should drive the article: access asymmetry, tribunal design strain, tool opportunity, or the personal feeling that the judgment is complex even for lawyers.

**User Decision:**
The user chose access asymmetry. The subject ECT case should be used to show the irony: the ECT’s accessible, lawyer-light design is important, but the case also shows how one side may have hidden legal or HR support while employees generally do not.

**Outcome:**
Updated `outline.md` to make access asymmetry the emotional spine and to avoid arguing simplistically that ECT parties should have lawyers.

### Decision: Primary audience is solo counsel / small legal teams (2026-05-20)

**Codex's Analysis:**
- Asked whether the post should speak mainly to employees/union officers, small employers/HR teams, solo counsels/small legal teams, or legal tech readers.

**User Decision:**
The primary audience should be solo counsels and small legal teams interested in using Zeeker as a practical research tool.

**Outcome:**
Updated `outline.md` so the case remains the access-asymmetry problem, but the article’s reader promise is methodological: how a resource-constrained legal professional can move from a dense new judgment to a usable research map.

### Decision: Compare Zeeker with traditional research (2026-05-20)

**User Decision:**
The post should compare the Zeeker workflow with traditional methods such as a plain Lexis search.

**Outcome:**
Updated `outline.md` to add a fair comparison thread in the members-only workflow section. The comparison should frame Zeeker as a different first-pass research map, not as a replacement for paid legal databases or citator-backed authority checking.

### Decision: Zeeker value proposition is AI-native workflow, not authority replacement (2026-05-20)

**User Decision:**
Sharpen the value of Zeeker against paid legal search tools: Zeeker lets users bring public legal data into an AI tool they already own and know, such as ChatGPT, to search, summarise, translate, and structure research. But Zeeker does not promise authoritative completeness, and its scope is still being built.

**Outcome:**
Updated `outline.md` to frame Zeeker as an AI-native first-pass research layer. Paid databases remain stronger for citators, completeness, and final authority checking; Zeeker’s value is lower-friction research mapping in a familiar AI workspace.
