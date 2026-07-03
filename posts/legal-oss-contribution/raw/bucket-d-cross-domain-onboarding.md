# Bucket D: Cross-domain non-coder onboarding patterns

What other communities figured out about onboarding non-developers — described mechanically, not as platitudes.

## Pattern 1: The Teahouse — a separate, low-stakes question space (not the main dev list)

- **Exemplar:** Wikipedia Teahouse (en.wikipedia.org), launched 2012, now standard newcomer infrastructure. Mentorship is a related-but-distinct system: since February 2025, **every new English Wikipedia account is auto-assigned a volunteer mentor** via the Growth Team's mentor dashboard.
- **How it works:** The Teahouse is a deliberately separate forum from the main help desks and policy talk pages. The visual design is different (warm colours, host photos), the social norms are explicit ("be friendly"), and host volunteers are recruited specifically to answer beginner questions in a non-confrontational tone. Mentorship layers on top: a newcomer's homepage shows a named mentor with a personal intro; mentors get a dashboard listing their assigned mentees and recent edits. Mentors can pause, quit, or set a "claim manually" mode. Volume expectation is published openly (0–6 questions per week per mentor) so volunteering is calibrated, not open-ended.
- **Why it transfers to legal:** Legal OSS today routes everyone — first-time docs typo-fixer, senior maintainer, drive-by user — through the same GitHub issue queue, where the dominant tone is "is this a real bug?". A separate "ask anything" space (Slack channel, GitHub Discussions category, or even a pinned issue), staffed by named greeters with calibrated time commitments, would let lawyers ask "is this even the right tool for me?" without filing a bug-shaped issue. The auto-assign-a-mentor mechanic is the move worth stealing — friction goes from *find a mentor* to *opt out of one*.
- **Sources:** https://diff.wikimedia.org/2012/03/05/wikipedia-teahouse-a-warm-welcome-for-new-editors ; https://en.wikipedia.org/wiki/Wikipedia:Mentorship

## Pattern 2: Effort-labelled issues + an "academic justification" page

- **Exemplar:** Astropy. Confirmed live on GitHub: `astropy/astropy` carries labels `good first issue`, `Package-novice`, `Effort-low`, `Effort-medium`, `Effort-high`, and `Docs` (verified via `gh api repos/astropy/astropy/labels`).
- **How it works:** Two moves stack. First, issues are dual-labelled — by domain difficulty (`Package-novice` = no prior knowledge of the package) and by time cost (`Effort-low` ≈ a few hours; `Effort-medium` ≈ a few days; `Effort-high` ≈ longer). A scientist with two free hours on a Friday can filter for exactly that. Second, the contribute page has a section literally titled **"For academics: How to justify your contribution"** — it equates open-source work with peer review and committee service, giving researchers institutional language to defend the time. Once a PR merges you are "officially an Astropy contributor and eligible to be included on the author list of future publications" — credit is named and explicit.
- **Why it transfers to legal:** Lawyers' biggest blocker isn't capability, it's billable-hour or chargeable-time accounting. A legal OSS project that (a) tags issues with realistic time estimates and (b) publishes a "How to justify this to your firm or GC" section — citing pro bono credit, CPD/CLE relevance, or thought-leadership equivalence — translates a vague "contribute when you can" into something a senior associate can actually put on a timesheet category.
- **Source:** https://www.astropy.org/contribute.html

## Pattern 3: A recognised non-coder contribution column, governance and credit attached

- **Exemplar:** Astropy's contribute page lists feedback, bug reports, mailing-list discussion, docs, **affiliated package development**, and financial contribution as parallel — not subordinate — paths. Formal project roles ("sub-package maintainer", coordination committee) are open to people whose track record is "participating actively in activities related to the role" via "mailing lists or Slack, or other contributions as defined by a particular role" — not just commits. OpenStreetMap's `How_to_contribute` page is structured the same way: Contribute map data, Develop software, Join and organise, Promote, Support, Report issues, Translate, Maintain this wiki, Donate — nine categories, only one of which is code.
- **How it works:** The pattern isn't "we also accept docs PRs" (every project says that). It's that the **contribute page itself is structured around contributor types, not artefact types**, and governance roles are reachable from non-code paths. OSM's Core Software Development Facilitator (a paid coordination role, not a coder role) signals the same thing at the foundation level (https://blog.openstreetmap.org/2025/04/28/meet-the-new-core-software-development-facilitator). OpenNews/NICAR adds the social layer: the **Lonely Coders Club** Slack and the **Code Buddies** session at NICAR exist explicitly for "journalists on small teams, who are often the only person in their newsroom working in data and code" — peer-coaching, not maintainer-help.
- **Why it transfers to legal:** Solo counsels reading a legal OSS README see "Installation / Build / Tests / License" and correctly conclude the project isn't for them. Restructuring the front door around contributor types — *I'm a practitioner who can validate clauses; I'm a researcher who can write commentary; I'm a paralegal who can curate test data* — changes who self-selects in. The "Lonely Coders Club" framing is the closest cross-domain analogue to alt-counsel's solo-counsel audience: a peer space defined by *organisational isolation*, not skill level.
- **Sources:** https://www.astropy.org/contribute.html ; https://wiki.openstreetmap.org/wiki/How_to_contribute ; https://source.opennews.org/articles/buddying-news-nerd-community

## Patterns considered and dropped

- **"Have a CONTRIBUTING.md."** Generic. Every project has one. The mechanically distinctive move is *what's in it* (effort labels, justification language, contributor-type structure), not its existence.
- **GSoC / Outreachy as the answer.** OpenAstronomy runs GSoC and it works (https://openastronomy.org/gsoc/contributor_guidelines.html), but it's a once-a-year, application-gated programme. Useful as a supplement, not the on-ramp. Wikipedia's *automatic* mentor assignment scales better and is cheaper to copy.
- **"Translate the docs" as the canonical first contribution.** OSM and Wikipedia rely heavily on translation, but translation in legal is jurisdictional, not linguistic — a Singapore lawyer reviewing US-drafted clauses isn't translating, they're localising substance. Worth flagging as a *related* pattern; not a clean transfer.
- **Slack/Discord communities by themselves.** The OpenNews piece is clear that Slacks work *because* they have named channels (`#helpme`, `#questions`, `#seeking-feedback`) with peer-coaching norms — not because Slack is magic. Without the channel structure and the named-greeter pattern, "we have a Slack" is the same as "we have a CONTRIBUTING.md".

## Source list

- https://diff.wikimedia.org/2012/03/05/wikipedia-teahouse-a-warm-welcome-for-new-editors
- https://en.wikipedia.org/wiki/Wikipedia:Mentorship
- https://en.wikipedia.org/wiki/Wikipedia:Teahouse
- https://www.astropy.org/contribute.html
- https://wiki.openstreetmap.org/wiki/How_to_contribute
- https://blog.openstreetmap.org/2025/04/28/meet-the-new-core-software-development-facilitator
- https://source.opennews.org/articles/buddying-news-nerd-community
- https://openastronomy.org/gsoc/contributor_guidelines.html
- GitHub label confirmation: `gh api repos/astropy/astropy/labels` — confirms `good first issue`, `Package-novice`, `Effort-low/medium/high`, `Docs` labels are live
