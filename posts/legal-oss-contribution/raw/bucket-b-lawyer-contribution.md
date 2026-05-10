# Bucket B: Do lawyers contribute code to OSS? (as of 2026-05-08)

## What the discourse says

The discourse splits cleanly into two narratives that both appear in print but rarely in the same article. The first is the celebratory "lawyer-on-GitHub" genre, exemplified by Joshua Tauberer's 2018 Ars Technica piece on submitting a pull request to fix a typo in the DC legal code (https://arstechnica.com/tech-policy/2018/11/how-i-changed-the-law-with-a-github-pull-request). That story is told as a milestone — "the first jurisdiction to combine [GitHub publishing] by … accepting a change from a member of the public" — but Tauberer himself flags that "no one should expect that editing the law on GitHub is going to become the new normal." The headline implies broad adoption; the body implies a one-off.

The second is a more skeptical thread, most visible on r/legaltech. In a 2025 thread asking why there are so few OSS legal projects, the top-voted answer is structural: "While a self-taught programmer can contribute to Linux, a non-lawyer contributing to 'open source legal' could face serious consequences if used" (https://www.reddit.com/r/legaltech/comments/1mhrl1x/serious_question_why_is_there_no_open_source_type). UPL risk and malpractice exposure get cited as the reason content-side OSS underperforms code-side OSS, but the same conversation also acknowledges that the actual code contributor pool is tiny — most legal-tech repos are maintained by one or two people, with the rest of the "community" stargazing.

There is a small but durable canon of "lawyers who code" lists — most famously dpp/lawyersongithub, an opt-in directory started in 2009 (https://github.com/dpp/lawyersongithub/blob/master/index.md). It lists roughly 40 lawyers and a handful of law students who claim to use GitHub. The directory itself is the evidence and the indictment: a decade-and-a-half of recruiting produced ~40 self-identified members, several of whom have made no public contributions in years.

## Named examples — exceptions or evidence

Active, consistent committers (small but real):
- **Damien Riehl** (@damienriehl): copyright attorney, ALEA Institute. Currently pushing to alea-institute/folio-api this week (May 2026); 13 public repos; bio reads "mediocre coder, good technology lawyer ... love supporting open source." His ALEA org has 30 repos including FOLIO (36 stars) — actual legal-ontology code, not just docs.
- **V. David Zvenyach** (@vdavez): former DC Council general counsel, 18F alum, author of *Coding for Lawyers*. Pushed multiple commits to makegov/tango-python on 2026-05-07 — a Python SDK for a government-tech API. Active maintainer, not just a curator.
- **Quinten Steenhuis** (@nonprofittechy): Suffolk LIT Lab director, lawyer + professor. **1,229 commits** to docassemble-AssemblyLine alone — by far the most lopsided contributor on the project. 114 public repos.
- **Bryce Willey** (@BryceStevenWilley) and **plocket**: 224 and 82 commits respectively to AssemblyLine — the rest of the working core.
- **David Colarusso** (@colarusso): Massachusetts bar, curator of QnA Markup. Listed on lawyersongithub, has shipped public legal-tech code.

Notable absence / "starred but didn't commit":
- **Jameson Dempsey**: Legal Hackers co-founder. GitHub account since 2009, only **5 public repos**, profile last updated 2019, **zero public events** in recent history. The exact "lawyer with account, not contributor" pattern.
- **Sarah Glassmeyer**: well-known legal-tech writer. **3 public repos**, profile last touched 2019. Contributes intellectually to the space; the public code trail is thin.

The pattern across the four LIT Lab AssemblyLine contributors is striking: the 80/20 rule shows up as more like 95/5. One lawyer (Steenhuis) has ten times the commits of the next person, and only ~9 humans show up in the contributor graph at all for what is arguably the flagship US legal-aid OSS project.

## Empirical / survey evidence

There is **no rigorous public quantitative measurement** of "what percentage of lawyers contribute to OSS." The closest things I could find:

- **Suffolk LIT Lab AssemblyLine contributor graph**: ~9 contributors total, dominated by one lawyer-developer. Public on GitHub but not framed as a survey.
- **The American Bar Foundation's *Legal Tech for Non-Lawyers* survey** (https://www.americanbarfoundation.org/wp-content/uploads/2023/04/report_us_digital_legal_tech_for_nonlawyers.pdf) catalogues legal-tech tools but does not measure lawyer-as-contributor.
- **Open Source Software Funding Report 2024** (https://opensourcefundingsurvey2024.com/) measures dollars contributed by orgs, not professional background of individual contributors. Lawyer-coders are not a tracked cohort anywhere I could surface.
- A 2024 FSE paper, *Exploring Software Licensing Issues Faced by Legal Practitioners* (https://ojcchar.github.io/files/29-fse24-license-legal.pdf), surveys lawyers about *advising on* OSS — not contributing to it.
- SSRN searches surfaced papers on OSS *licensing* and one on GitHub takedown notices, but nothing measuring lawyer participation rates as code contributors.

So: the empirical answer is that nobody has measured this rigorously. The available proxies (contributor graphs on flagship legal OSS, the lawyersongithub directory, recent activity on individual lawyer-coder accounts) all point the same direction — a very thin tail of active committers and a much larger pool of dormant accounts.

## Honest gaps

- **Private contribution invisible.** Lawyers at firms or in-house may push to private repos; we cannot see this.
- **Definition is squishy.** Does writing docassemble interview YAML count as "code"? Does authoring a legal-XML schema? The line between "lawyer using a tool" and "lawyer contributing code" is not crisp.
- **Sample bias on lawyersongithub.** Self-selecting opt-in list ≠ representative sample. The actual count of lawyer-coders on GitHub is almost certainly higher than 40, but we have no denominator.
- **Survivorship.** The active committers we found are the ones who survived. We can't see the lawyers who tried, hit a wall, and quietly stopped — though Houfu's own field notes (Bucket A) suggest this is common.
- **Anglosphere bias.** All sources surfaced are US/UK; ASEAN lawyer-coder activity is essentially invisible in this discourse.

## Source list

- https://arstechnica.com/tech-policy/2018/11/how-i-changed-the-law-with-a-github-pull-request — Tauberer's celebrated DC Code PR; the canonical "lawyer changes law on GitHub" story (and its caveat).
- https://github.com/dpp/lawyersongithub/blob/master/index.md — the lawyers-on-GitHub directory; ~40 self-identified members across 15+ years.
- https://github.com/SuffolkLITLab — Suffolk LIT Lab GitHub org; flagship legal-aid OSS, contributor graph dominated by one lawyer-coder.
- https://github.com/damienriehl — Damien Riehl's profile; active committer to legal-ontology code.
- https://github.com/vdavez — V. David Zvenyach's profile; active May 2026.
- https://github.com/jamesondempsey — Jameson Dempsey's profile; canonical example of dormant lawyer-coder account.
- https://github.com/sglassmeyer — Sarah Glassmeyer's profile; thin public code trail despite legal-tech profile.
- https://www.reddit.com/r/legaltech/comments/1mhrl1x/serious_question_why_is_there_no_open_source_type — community thread on UPL risk as a brake on legal OSS contribution.
- https://ojcchar.github.io/files/29-fse24-license-legal.pdf — FSE 2024 paper on lawyers and OSS licensing (advisory, not contributory).
- https://www.lpi.org/blog/2024/08/02/legal-linux-a-lawyer-in-open-source — Andrea Palumbo interview on being a lawyer in OSS communities (Italy/EU angle).
