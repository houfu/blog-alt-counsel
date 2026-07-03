# SSRN academic anchors + secondary socials sweep

## Part 1: Academic anchors

### For Bucket B (lawyer participation in OSS)

**No strong empirical anchor found.** SSRN searches for "lawyer + open source + empirical contribution" and "attorney software developer contribution" returned papers about lawyers writing *about* OSS licensing, OSS as a legal-research subject (e.g., GitHub takedowns, vibe-coding liability), or proposals for open legal models (OpenJustice.ai, SSRN 4624814) — but no peer-reviewed empirical study of lawyers actually contributing code to OSS projects. Closest adjacent finding:

- *Why Do Firms Engage in Open-Source Software Development?* — SSRN 5698823 (Nov 2025).
  - URL: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5698823
  - One-line takeaway: Firms engage in OSS because it is "an unconventional contract where firms can attract non-employees as inexpensive labor" — useful framing for why law firms have *not* engaged: they don't see contributors as a labor pool.

The absence is itself the finding: legal-professional OSS participation has not been studied as an empirical phenomenon. Cite this gap rather than over-claim.

### For Bucket D (community onboarding for non-developers)

- *From First Patch to Long-Term Contributor: Evaluating Onboarding Recommendations for OSS Newcomers* — Bosu et al., IEEE Transactions on Software Engineering 2025 (arXiv:2407.04159).
  - URL: https://arxiv.org/abs/2407.04159
  - Takeaway: Of 15 commonly-cited newcomer onboarding recommendations from prior literature, only **four positively correlate** with successful first-patch acceptance across 1,155 GitHub projects; **four show significant negative associations**, and three are newcomer-specific (helpful early, harmful later). Generic "be welcoming" advice is empirically thin.

- *Characterizing the Roles of Contributors in Open-source Scientific Software Projects* — Milewicz, Pinto, Rodeghero (arXiv:2003.10572, 2020).
  - URL: https://arxiv.org/abs/2003.10572
  - Takeaway: Across seven OSS scientific projects + 72-developer survey, **senior research staff produced ~72% of commits on average** and dominated architectural files; **third-party contributors typically contributed for just one day**. Domain experts in scientific OSS act like core maintainers, not drive-by contributors — a useful structural parallel for what legal OSS could look like.

- *Linking Task-Level Characteristics to Long-Term Newcomer Retention* — arXiv:2603.27136 (2026).
  - URL: https://arxiv.org/abs/2603.27136
  - Takeaway: Large-scale empirical study of which "first issues" actually convert newcomers into retained contributors. Useful as a citation that the "good first issue" construct is studied, contested, and depends on task design — not magic.

### For Bucket E.2 (lawyer personality / profession culture)

**No strong Big-Five / Caliper empirical anchor found on SSRN** within the searches run. SSRN 3589151 ("Law") references a 22-scale personality instrument but is not lawyer-specific empirical work on Big Five. Two adjacent useful citations:

- *Cultures of Compliance* — SSRN 2840762.
  - URL: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2840762
  - Takeaway: Compliance-culture work explicitly identifies "regulators and enforcement lawyers whose incentives... lean decidedly in the direction of legal risk-aversion" — useful as a cited grounding that risk-aversion is a structural, not just stereotyped, feature of lawyer professional culture.

- *Identity, Friction, and Professional Codes of Conduct* — SSRN 5361438 (2025).
  - URL: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5361438
  - Takeaway: Codes of conduct in legal practice "often reflect a compliance-era legacy, emphasising control, risk aversion, and reputational protection over deliberative engagement." Same direction: risk aversion is institutionalised in legal professional norms.

Honest note: the lawyer-personality literature most cited in trade press (Larry Richard, Caliper Profile data showing lawyers low on resilience and sociability, high on skepticism) lives mostly outside SSRN — in *ABA Journal*, *Lawyer Brain*, and Hogan/Caliper white papers. Flag this as needing trade-press citation rather than SSRN.

### For plan context (fork / fragmentation governance)

- *Open Source, Modular Platforms, and the Challenge of Fragmentation* — Christopher S. Yoo, SSRN 2866666.
  - URL: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2866666
  - One-line takeaway (from search snippet): "To prevent excessive fragmentation, most open source projects rely on some form of strong formal governance. This comes as a surprise to many observers." Directly supports the plan's framing that fork-explosion without governance is the predictable failure mode for Mike-style launches.

- *Forking, Fragmentation, and Splintering* — Simcoe & Watson, *Strategy Science* 4(4) 2019 (SSRN 2862234).
  - URL: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2862234
  - Takeaway (from snippet): Examines miscoordination in network-effect markets and uses copyleft licensing + SSO governance as reference points for evaluating when forks are productive vs. destructive — peer-reviewed anchor for the "forks aren't free" intuition.

## Part 2: Secondary socials for Mike reception

### What I found

Lawyer-side LinkedIn reception is **dominantly enthusiastic but reveals exactly the gap Bucket A2 identified**: trade-press/lawyer commentary celebrates Mike as a vibe-shift moment ("Mike OSS just made open-source legal AI real" — Stephen Allen; "the most starred legal github repo to date" — Stoke Builder), while developer-leaning voices in the *same comment threads* push back hard on engineering substance. Rob Saccone (commenting on Jamie Tso's viral fork-celebration post): "Less forks and more contributions would create a lot more value here... I cannot say that Mike or any of the 200+ forks are ready for anything beyond a thought-provoking demo." John Benson, in the same thread: "It doesn't do the 'hard parts well' when the hard parts are things like deciding how to handle PDF conversion. It solved that by having all of OpenOffice as a required dependency that installs itself using a non-standard package manager... It's another to have RCEs in a tool that you tell people they can rely on in a critical area like the law."

Reddit r/legaltech is the most candid: top-voted comments treat Mike as a UI proof-of-concept and surface the structural objections — maintenance overhead, malpractice insurance ("Some insurers are starting to ask questions about AI tool usage"), SLA expectations, security audits — that LinkedIn celebration posts skip past. Bob Ambrogi's LawSites blog has not (yet) published a dedicated Mike piece as of this search; the only Ambrogi-adjacent reference is a comment-section mention by another user.

### Convergence with Bucket A2 finding

This **corroborates and sharpens** the Bucket A2 trade-press-vs-developer gap. The split is not across publications — it runs *within the same LinkedIn comment threads*. Lawyer-celebrants frame Mike as cultural permission; developer-commenters frame the same artefact as an attractive nuisance with RCE risk and 200+ unmaintained forks. The Reddit thread is where structural-skeptic lawyers and developers actually agree — that's the venue worth citing for "the gap closes when the conversation gets practical."

## Caveats / honest gaps

- **SSRN paywall / Cloudflare**: Direct abstract reads on SSRN papers were blocked by bot-protection; findings rely on search-snippet abstracts plus public IDEAS/RePEc indexing. Paper IDs and DOIs are correct; full abstracts should be re-pulled before citing in publication.
- **No empirical lawyer-OSS-contribution study exists** that I could locate. The honest move in the post is to name this gap, not paper over it.
- **Lawyer personality literature**: The Caliper / Big Five lawyer findings most often cited (Larry Richard's work) are not on SSRN. Consider citing Richard directly or via *ABA Journal* coverage rather than searching SSRN further.
- **Bob Ambrogi**: No dedicated LawSites post on Mike found in this sweep. If a piece appears later it would be worth a re-check, but I would not delay the post for it.
- **Mastodon / Twitter (X)**: Returned thin results; X had a few celebratory posts (@stokebuilder, @harshavardhan92) but no substantive critical engagement worth quoting beyond what LinkedIn and Reddit already provide.

## Source list

- https://arxiv.org/abs/2407.04159 (Bosu et al., onboarding recommendations)
- https://arxiv.org/abs/2003.10572 (Milewicz et al., scientific OSS contributor roles)
- https://arxiv.org/abs/2603.27136 (newcomer retention via task characteristics)
- https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5698823 (firm OSS engagement)
- https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2866666 (Yoo, fragmentation)
- https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2862234 (Simcoe & Watson, forking)
- https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2840762 (Cultures of Compliance)
- https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5361438 (Identity, Friction, Codes of Conduct)
- https://www.linkedin.com/posts/jttso_to-legal-tech-vendors-mikeoss-is-the-perfect-activity-7457432877379801088-yFNU (Jamie Tso fork post + Saccone/Benson critical comments)
- https://www.reddit.com/r/legaltech/comments/1szqrcf/the_first_open_source_competitor_to_legora_harvey (r/legaltech Mike thread)
- https://www.linkedin.com/posts/rsaccone_mike-open-source-legal-ai-platform-activity-7457416453600837632-Q79- (Saccone "visceral reactions" post)
- https://www.linkedin.com/posts/stokebuilder_mikeosscom-is-the-most-starred-legal-github-activity-7456108677884743680-OVmu (most-starred-legal-repo claim)
- https://www.artificiallawyer.com/2026/05/04/mike-the-open-source-legal-ai-platform-will-chen-interview (Will Chen interview, AL)
- https://www.nonbillable.co.uk/news/ex-big-law-associate-built-legal-ai-platform-going-viral (NonBillable framing piece)
