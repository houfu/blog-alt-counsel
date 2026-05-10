# Bucket L: What long-lived legal OSS actually does (as of 2026-05-08)

## Free Law Project — the foundation pattern

### Contribution flow

CourtListener is high-velocity and externally porous. Pulling 20 most-recent closed PRs (2026-04-30 to 2026-05-07): merges happen within days, often the same day. Authors include `MorganBennetDev`, `ERosendo`, `rachlllg`, `Brennan-Chesley-FLP`, `EstiShay`, `albertisfu`, `quevon24` — a mix of FLP staff/contractors and outside contributors all flagged `CONTRIBUTOR`, with `mlissner` (Mike Lissner, ED) reviewing. Conventional-commit prefixes (`feat(api):`, `fix(recap):`, `refactor(lib):`) are enforced — every PR signals scope. A `fast-review` label exists ("This item is accepted into an existing sprint") that wires PRs into staff sprint cadence rather than waiting in a queue.

Juriscraper is even more illustrative: 20 PRs closed in 9 days, dominated by two outside contributors (`grossir`, `MorganBennetDev`) shipping per-court fixes (`fix(idaho):`, `fix(nmariana):`, `fix(ca2_p):`). The per-court module structure means each PR is scoped to one file and one jurisdiction — contributors can own a court without learning the whole system.

### Onboarding artefacts

The CourtListener README is short and does two specific things. First, it points at the FLP volunteer page (not just "open an issue"). Second, it makes the standing offer:

> "please note that we assign every issue to *somebody*, so if you find an issue that looks interesting, just chime in and say you want to take it over. Usually we're happy to hand things off!"

That is mechanically describable: every issue has an owner, and that owner is presumed swappable. Spot-check of open `easy pickins` issues confirms it — most are assigned to `flooie`, `elisa-a-v`, or `mlissner`. `easy pickins` and `help wanted` are the curated GFI labels; `fast-review` signals sprint priority. The dev guide lives at `wiki.free.law/c/courtlistener/dev-guide` (Discourse-hosted, separate from the repo). There is no in-repo CONTRIBUTING.md — the front door is `free.law/volunteer/`.

### Off-GitHub infrastructure

The `freelawproject` org runs **55 public repos** with current activity (most updated within last 30 days). There's a Slack workspace with topic channels (`#librarians` is named on the volunteer page), a Discourse wiki, a blog at free.law publishing roadmap and post-mortem content, and the `freelawproject/free.law` site repo itself with 64 stars — the website is open-source too. Conference and policy presence is real: Mike Lissner appears regularly at legal-tech events.

### Governance + recognition

FLP is a 501(c)(3) with paid staff (Mike Lissner, ED, plus engineers visible in the PR stream as `MEMBER`). The volunteer page segments contributor types — Software Developer, Journalist, Librarian, Attorney, Fundraiser — with a different ask for each. Attribution is unfussy: PR authors are visible on commits; the volunteer page openly says "we have more work than we can ever complete" — framing volunteering as helping a real organisation that is staff-constrained, not building a portfolio.

## Docassemble — the single-maintainer + Slack pattern

### Contribution flow

Single maintainer (Jonathan Pyle, `jhpyle`). 20 most-recent closed PRs show three real outside contributors recurring — `nonprofittechy` (Quinten Steenhuis), `BryceStevenWilley`, `jpagh`, `jkelton` — plus dependabot churn. PRs merge in batches roughly weekly (e.g. five PRs all closed at `2026-05-04T02:19:51Z`). The CONTRIBUTING.md opens with a specific routing rule:

> "If you want to add an additional feature, first consider if the feature could be made available through an [add-on package]. If the feature turns out to be universally useful, it can be incorporated later into the core code."

That single sentence is doing real work: it says "your contribution probably doesn't belong in core" and points at a package ecosystem instead. Most extension lands as Docassemble packages, not core PRs — which keeps the core PR queue tractable for one maintainer.

### Onboarding artefacts

CONTRIBUTING.md is short but specific: how to add a code example (drop a YAML file in a named directory, screenshots auto-generate), how to test core changes (link to development.html), how documentation works (gh-pages branch). The README is two sentences pointing at the docs site and Slack. Front door is documentation, not GitHub.

### Off-GitHub infrastructure

The Slack workspace is **the** community surface. The support page lists Slack first, mailing list second, and explicitly invites private messages to Pyle. There's a curated tutorials section linking community-written installation guides (Quinten Steenhuis, Sam Harden, Richard Batstone, John Gibson, ttamg) — outside contributors who have shipped reusable docs are named on the official page. That's recognition without a formal contributors list.

### Governance + recognition

BSD-style benevolent-dictator. Pyle reviews everything. Recognition runs through the Slack and through tutorial attribution on docassemble.org. The community-vs-core split (packages stay community, useful things get pulled in later) is the governance mechanism.

## OpenSALT — the corporate-org + community pattern

### Contribution flow

Of the most recent 50 closed PRs, **49 are dependabot** and only one (PR #2183, "Change org to group in readme") came from a human — and that human (`jmarks`) is a `MEMBER`. External contribution is essentially zero. The core committers list in CONTRIBUTING.md (a "Community Participation Agreement") names nine individuals from PCG and partner orgs, frozen at September 2017.

### Onboarding artefacts

CONTRIBUTING.md is a governance charter, not a getting-started guide. It defines who can commit ("All pull requests must be approved and committed by a core committer"), how committee membership changes ("unanimous consent" to add, 75% to remove), and trademark policy. There is no "here's how to set up a dev env and submit your first PR" path beyond a Docker README.

### Off-GitHub infrastructure

`opensalt.org` exists; activity is low. No public Slack/forum equivalent to Docassemble or FLP surfaces.

### Governance + recognition

OpenSALT is the **counter-example**: corporate-backed (PCG), formally chartered, named committee, MIT licence, real product use in education-standards work — and yet contribution is closed by structure. Foundation-style governance without an open-contribution path produces a near-empty PR stream from outsiders.

## What's the same across the survivors (FLP + Docassemble)

Three patterns repeat. **One: a non-GitHub front door.** FLP routes through `free.law/volunteer/`; Docassemble routes through `docassemble.org` + Slack. The repo is the back office. **Two: explicit narrowing of scope per contribution.** FLP uses per-court Juriscraper modules and `easy pickins` labelling; Docassemble uses the package-vs-core split. Outsiders never face the whole codebase. **Three: a named human reachable in under a click.** Mike Lissner reviews PRs by name; Pyle invites Slack DMs by name. There is no "the maintainers" abstraction — there is a person.

## The gaps — what Mike/Harvey doesn't do

Mechanically describable practices visible in the survivors but absent in performative-open releases:

1. **Every issue has an assignee.** Not "issues are open for grabs" — explicitly owned, with the standing offer that ownership transfers on request. This signals the project is alive and that reviewers exist.
2. **A scope-narrowing structure** (per-court modules, per-package extension points) so a contributor can ship one fix without learning the whole system.
3. **A non-GitHub front door page** that segments contributors by type (developer, librarian, attorney, journalist) with a different ask for each.
4. **A named maintainer who is reachable.** The project page lists a person, not a generic email.
5. **Conventional commit / scope prefixes enforced on PRs** so the changelog reads like a roadmap and reviewers can triage by area.
6. **A curated GFI label that is actually curated** (FLP's `easy pickins` is filtered and most carry an assignee who's holding it open for handoff).
7. **A `fast-review` mechanism** that explicitly wires outside PRs into staff sprints rather than letting them age out.
8. **A community surface that isn't GitHub Issues** — Slack with named channels, Discourse wiki, mailing list. People show up there before they show up in the repo.
9. **A documentation site that *is* the project**, where the repo is secondary infrastructure (Docassemble pattern).
10. **Public attribution of community work** — Docassemble naming tutorial authors on its support page; FLP visibly merging outside-author PRs.

Mike's open-source releases (per Bucket A) showed none of these. Harvey's releases showed none of these.

## What can be copied tomorrow vs what takes years

**Tomorrow (hours of work):** Conventional commit prefixes. A curated `easy pickins` label with five real entries. A README that names a human and points to a contact channel. Every open issue assigned to somebody on the team. A short CONTRIBUTING.md that says "your change probably belongs in [extension surface] rather than core."

**This quarter (weeks of work):** A per-module/per-jurisdiction structure that scopes contribution. A non-GitHub front door page segmenting contributor types. A Slack or Discord with two-three topic channels and a named host who actually shows up.

**Years (relationship work):** A 501(c)(3) with paid coordinator capacity. A community of named tutorial authors who write *about* you for free. A PR stream where outside contributors out-ship staff in some repos (Juriscraper). Conference presence and a press kit. The reputation that gets a Slack invite accepted rather than ignored.

The first two buckets explain why most "we open-sourced our agent" releases die: nothing in the tomorrow column was done. The third bucket explains why FLP is hard to copy — but it's also what proves the first two columns are necessary, not sufficient.

## Source list

- `gh api repos/freelawproject/courtlistener/contents/README.md`
- `gh api repos/freelawproject/courtlistener/labels` (verified `easy pickins`, `fast-review`, `help wanted`)
- `gh api 'repos/freelawproject/courtlistener/pulls?state=closed&per_page=20'` (2026-04-30 to 2026-05-07 sample)
- `gh api 'repos/freelawproject/courtlistener/issues?state=open&per_page=15&labels=easy+pickins'`
- `gh api orgs/freelawproject` (55 public repos, blog https://free.law)
- `gh api 'repos/freelawproject/juriscraper/pulls?state=closed&per_page=20'` (per-court PR pattern)
- `gh api repos/jhpyle/docassemble/contents/README.md`
- `gh api repos/jhpyle/docassemble/contents/CONTRIBUTING.md`
- `gh api 'repos/jhpyle/docassemble/issues?state=closed&per_page=20'`
- `gh api repos/opensalt/opensalt/contents/README.md`
- `gh api repos/opensalt/opensalt/contents/CONTRIBUTING.md` (Community Participation Agreement, 2017)
- `gh api 'repos/opensalt/opensalt/pulls?state=closed&per_page=50'` (49/50 dependabot)
- https://free.law/volunteer/ (segmented contributor calls, Slack `#librarians`)
- https://docassemble.org/docs/support.html (Slack-first, named tutorial authors)
