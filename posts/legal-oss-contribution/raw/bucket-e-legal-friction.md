# Bucket E: Legal-specific friction to OSS contribution

## E.1 — Structural friction

### Confidentiality / privilege

Anything a lawyer learned through client work is presumptively confidential, and the moment you push it through a third-party system you risk waiver. The most concrete recent illustration is the Southern District of New York's ruling in *United States v. Heppner* — a question of first impression — where Judge Rakoff held that a defendant's chats with a publicly available, non-enterprise generative AI tool were "not protected by attorney-client privilege or the work product doctrine," and that "sharing privileged information with a generative AI system is equivalent to sharing it with any third party — privilege is waived" (Husch Blackwell, *Heppner v. Claude: The First Privilege Waiver by AI Ruling*, Feb 2026). The implication for OSS contribution is direct: a lawyer who wants to commit a prompt, an eval set, or a fine-tuning corpus that was *derived* from client work has to be confident none of that material carries the client's matter with it — and most lawyers, faced with that uncertainty, will simply not commit.

### Professional regulation (UPL and code-as-advice)

ABA Model Rule 5.5 prohibits practising "law in a jurisdiction in violation of the regulation of the legal profession in that jurisdiction, or assist[ing] another in doing so" — and U.S. courts have repeatedly held that *software itself* can commit unauthorized practice of law when it crosses from information into advice. As Relativity's "Can Software Engage in the Unauthorized Practice of Law" notes, federal bankruptcy courts have joined a growing line of cases addressing exactly that question, and the ABA's Sept 2025 *Law Practice Magazine* concedes "Whether GenAI legal tools are an unauthorized practice of law (UPL) is unclear" and proposes a Texas-style statutory carve-out precisely because the ambiguity is chilling. For a lawyer publishing an open-source legal agent, "is this just a tool, or am I (or my repo) practising law in a jurisdiction I'm not admitted in?" is a real question with no clean answer.

### Billable hours economics

The standard pro bono benchmark — Model Rule 6.1's aspirational 50 hours/year, or the Pro Bono Institute Challenge's 3–5% of billable time — already absorbs nearly all of a firm lawyer's discretionary professional time, and "OSS contribution" is not a recognised category of pro bono. NALP data shows most firms cap pro bono credit at 50–100 hours; the Pro Bono Institute's 2025 report counted ~4.93 million pro bono hours from U.S. firms in 2024 (LeanLaw, Nov 2025). Time spent shipping a public repo is, in this accounting, neither billable nor creditable — it competes with both client work and the one charitable bucket the profession already recognises.

### Tool friction (briefer)

Lawyers' default toolchain is Word, Outlook, a DMS, and a billing system — git, GitHub, package managers and CI are not in the muscle memory. Even a motivated contributor has to climb a tooling hill before the first PR, which compounds every other friction in this bucket.

## E.2 — Personality and professional culture

### Caliper / Larry Richard findings

The most-cited empirical claim about lawyer personality comes from Dr. Larry Richard, who profiled 1,000+ lawyers (with Caliper Corp. and Altman Weil) and reported five traits where lawyers diverge sharply from the general public. Specific numbers from his "Herding Cats: The Lawyer Personality Revealed" (LawPRO Magazine, 2008, condensing the 2002 original): **Skepticism averages around the 90th percentile** in larger firms; **Autonomy averages the 89th percentile**; **Sociability** in the Caliper/Altman Weil "excellent lawyers" sub-sample averaged **12.8% vs. 50% for the general public**; **Resilience** (ego strength) is in the lower half for "nearly all" lawyers profiled, "with the average being 30 per cent" and a long left tail into the bottom decile; Urgency runs roughly 20% above the lay average. This is **trade-press summary, not peer-reviewed** — Caliper is a commercial instrument, the Altman Weil study was a consulting study, and the 2008 LawPRO piece is the most accessible primary source most writers cite. A Bucerius Law School replication attempt with younger lawyers (2018) found the pattern weaker for millennials — they were *more* sociable and *less* autonomous than Richard's cohort — which suggests the trait gap is real but generationally moving. Independent corroboration on the risk-aversion piece comes from Psychological Consultancy Ltd. (2019, n=105 vs. 11,900 control), who found legal professionals heavily over-represented in the "Wary" Risk Type and under-represented in "Adventurous," with above-average scores on Methodical, Perfectionistic, Apprehensive and Mistrusting subthemes.

### Profession-shaped behaviours

- **Perfectionism**: Williams & Connolly's own attorney-wellness piece (Law360, 2021) calls perfectionism a "disease" in law; the ABA's *Law Practice Today* (2019) frames it as a productivity tax — "the dread of failure promotes procrastination, excessive nitpicking, and undue risk aversion." OSS culture's "ship a rough thing, iterate in public" default cuts directly against this.
- **Hierarchy / credentialism**: the profession's status signals (firm, school, partner-track, bar admission) don't translate into OSS, where a 19-year-old maintainer can have more authority than a 20-year partner. The credential floor that legitimises a lawyer's voice is exactly what doesn't apply on GitHub.
- **Adversarial framing**: Richard notes that the trained-in skeptical/adversarial stance "may all be performed more effectively in a climate of trust, acceptance and collaboration" but lawyers "use… stronger personality traits across all situations, rather than turning them on and off at will." OSS reviews require trust-by-default; a lawyer's defaults are the opposite.
- **Risk aversion as a job requirement**: Hogan Assessments' lawyer-personality whitepaper observes "lawyers tend to be extremely risk averse… [which] explains their insistence on the." It's not a flaw — it is what clients pay for. But the same trait makes "publish your half-working code under your real name" feel pathological.

### Confidence read

E.2 is suggestive, not proven. Larry Richard's data is the most-cited evidence and is genuinely large-sample, but it sits in trade press, was produced inside a consulting practice, and uses a proprietary instrument (Caliper) rather than the academic Big Five. The 2018 Bucerius follow-up and the 2019 PCL Risk Type study point in the same direction with smaller samples. Daicoff's 1997 *Lawyer, Know Thyself* (~40 years of empirical literature reviewed) and a 2026 *Personality and Individual Differences* "120-year big data analysis" of how lawyers are *described* both add weight, but neither is a clean Big-Five replication of Richard's specific Caliper numbers. Honest framing for the post: the *direction* (high skepticism, high autonomy, low sociability, low resilience, high risk-aversion) is well-attested across multiple instruments and decades; the *exact percentiles* should be cited to Richard specifically and not generalised as "the science says."

## E.3 — Imposter syndrome

The lawyer-coder (or legal technologist) imposter problem is well-articulated by Mike Whelan, Jr. — practising lawyer, now at Casetext — in "LegalTech Imposter Syndrome" (UMKC Law & Tech Review, May 2019, republished on LinkedIn). Whelan describes imposter syndrome first as a generic feature of being a lawyer ("a Scarlet Letter we must all tuck neatly under our blazers and pantsuits"), then as a *second*, sharper layer that hits when a lawyer enters tech: "What's a regular lawyer like me to do that could compare to the work of these incredible legal technologists?" His diagnosis — "Law firm culture often promotes competition, showy indications of status, and layers of faking it" — names the specific obstacle to OSS contribution: a culture that punishes visible incompetence collides with a craft (shipping public code) that *requires* visible incompetence as the entry fee.

## Source list

- https://www.practicepro.ca/wp-content/uploads/2017/06/2008-03-richard-herding-cats.pdf — Larry Richard, "Herding Cats" (LawPRO 2008 condensed). Primary source for all Caliper percentile numbers cited above.
- https://www.huschblackwell.com/newsandinsights/heppner-v-claude-the-first-privilege-waiver-by-ai-rulingwhat-lawyers-and-clients-must-know — Husch Blackwell on *US v. Heppner* (S.D.N.Y., Judge Rakoff), Feb 2026 — first U.S. ruling that AI chats waive privilege. Cited for confidentiality.
- https://www.law-school.de/forschung-fakultaet/institute-und-zentren/center-on-the-legal-profession/blog-legal-trends/artikel/are-lawyers-really-like-cats — Bucerius Law School (2018), partial replication of Richard with younger lawyers. Used for the generational caveat.
- https://www.psychological-consultancy.com/wp-content/uploads/Do-Lawyers-have-a-Risk-Type-LAv2.pdf — PCL "Do Legal Professionals Have a Risk Type?" (2019), n=105 vs. 11,900 control. Independent risk-aversion / perfectionism corroboration.
- https://www.linkedin.com/pulse/legaltech-imposter-syndrome-umkc-law-tech-review-mike-whelan-jr- — Mike Whelan, Jr., "LegalTech Imposter Syndrome" (UMKC Law & Tech Review, 2019). E.3 quotable source.
- https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_5_5_unauthorized_practice_of_law_multijurisdictional_practice_of_law — ABA Model Rule 5.5 text. Cited for UPL framing.
- https://www.relativity.com/blog/data-law-update-can-software-engage-in-the-unauthorized-practice-of-law — Relativity, "Can Software Engage in UPL" — primer on courts treating software itself as potentially UPL.
- https://www.americanbar.org/groups/law_practice/resources/law-practice-magazine/2025/september-october-2025/ai-for-legal-use — ABA *Law Practice Magazine* (Sept 2025) on UPL ambiguity for GenAI legal tools.
- http://www.hoganassessments.com/sites/default/files/Lawyer_Personality_12.1_0.pdf — Hogan Assessments lawyer personality whitepaper. Cited on risk aversion.
- https://www.americanbar.org/groups/law_practice/resources/law-practice-today/2019/reining-in-perfectionism — ABA *Law Practice Today* on lawyer perfectionism.
- https://www.leanlaw.co/blog/how-to-handle-pro-bono-costs-can-you-pay-filing-fees-from-the-operating-account — LeanLaw (Nov 2025) citing Pro Bono Institute 2025 Report's 4.93M hours figure.
- https://papers.ssrn.com/sol3/papers.cfm?abstract_id=140308 — Daicoff, *Lawyer, Know Thyself* (1997 SSRN). Background literature review on lawyer personality empirics.
