# Bucket F: When forks are healthy vs unhealthy

Forks aren't automatically a problem. The OSS community broadly endorses forking — Dirk Hohndel (Linux Foundation) put it directly: "forks are good. Forks are one of the key things that open source licenses are for." The diagnostic question isn't *whether* a project has forks, but *what kind* of forks dominate and whether anything ever flows back upstream.

## Healthy fork patterns

### Ephemeral PR forks
The standard GitHub contribution flow: fork, branch, push a PR, fork goes dormant after merge (or gets deleted). These are the bread and butter of OSS — a fork is a working copy, not a statement. GitHub's own docs frame forking primarily as "a new repository that shares code... often used to iterate on ideas or changes before they are proposed back to the upstream repository." Source: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo

### Permanent governance forks
When a corporate licence change or governance failure forces the community out. **OpenTofu** forked Terraform in Aug 2023 after HashiCorp's BSL relicensing (1.2k forks, 28.5k stars, now under the Linux Foundation). **Forgejo** hard-forked Gitea in Feb 2024 after the Gitea trademark was placed under a for-profit company against community wishes — explicitly to put "the community in control." **MariaDB** forked MySQL after Oracle's Sun acquisition. Sources: https://opentofu.org/blog/opentofu-announces-fork-of-terraform | https://forgejo.org/2024-02-forking-forward | https://mariadb.org/is-mariadb-part-of-the-mysql-ecosystem

### Distribution forks
Long-lived forks that re-package the upstream for a different audience, with active upstreaming. GitHub's own "friendly forks" essay names `git-for-windows/git` (Windows-specific patches, many upstreamed back), CentOS (RHEL repackaged for community use), and MSYS2 (Cygwin variant). The defining trait: features flow *back* to upstream over time. Source: https://github.blog/developer-skills/github/the-friend-zone-friendly-forks-101

### Private customisation forks
Internal enterprise forks that carry org-specific patches (instrumentation, security policies, vendor integrations). `github/git` itself is one — a private friendly fork that powers GitHub's backend and serves as a staging ground for upstream contributions. The OpenSSF flags ungoverned enterprise forking as a risk, but a *managed* internal fork with an upstreaming discipline is normal infrastructure for any serious software org. Source: https://github.blog/developer-skills/github/the-friend-zone-friendly-forks-101

### Learning forks
Forks created to study, experiment, or run a tutorial locally. No competitive intent, no PR planned. The CMU "How Has Forking Changed in the Last 20 Years" study notes that maintainers generally accept these as fine — "forks are good if there is a reason," and personal-learning is a reason. The signal: they sit at zero commits ahead and nobody pretends otherwise. Source: https://www.cs.cmu.edu/~ckaestne/pdf/icse20-forks.pdf

## Unhealthy fork patterns

### Signaling forks
Forks created as social currency — to bookmark a repo, signal alignment with a tribe, or pad a contributor profile, with no intent to push code back. GitHub itself recommends Stars (not forks) as the bookmark mechanism, which means a zero-commit fork is using the wrong feature for the job. The "Six Million (Suspected) Fake Stars" research and Hacker News discussions on GitHub's "fake star economy" both point at the same underlying pattern: shallow engagement masquerading as adoption. Sources: https://gist.github.com/heathdutton/14dc1fd16db67eb272335f79367bf166 | https://news.ycombinator.com/item?id=47831621

### Abandoned forks
Started in earnest, then abandoned — a few commits, no PR, repo goes silent. The CMU/Zhou thesis on fork-based development documents that the majority of forks never produce a contribution and that "fork drift" leaves orphan branches that decay into security and maintenance liabilities. The Reddit r/opensource thread on "fork drift" gives the practitioner version: "people can paint themselves into a pretty bad corner doing this." Source: https://www.reddit.com/r/opensource/comments/1k7p81u/stop_forking_around_the_hidden_dangers_of_fork

### Vibe-coded re-skins
*[Houfu's coinage — not a recognised term in the literature]* Fork the repo, run an LLM over the prompt or branding, claim it as a different product. Closest documented analogue is the DeFi "fork explosion" pattern (Uniswap forks etc. that copy code, swap a logo, and ship as new protocols) and the broader Snyk/Checkmarx framing of LLM-resurrected dormant repositories being passed off as live projects. Coined here in this post. Source: https://www.opensourceforu.com/2025/06/the-rise-of-forking-in-blockchain-innovation-or-fragmentation

### Hostile forks
Rare. Competitively motivated, financially driven — a cloud provider or consultancy forks a project whose licence threatens their revenue. Jamie Allen's "Hostile Forks — It's All About The Money" is the canonical framing: "I cannot recall a hostile fork that wasn't financially motivated at its core." Source: https://shinolajla.medium.com/hostile-forks-its-all-about-the-money-0371efb6eaa5

## The diagnostic (signals to read)

- **Fork-to-merged-PR ratio** — healthy projects show meaningful PR throughput from forks. A high fork count with near-zero merged PRs from external forks means the forks are bookmarks.
- **Distribution of "ahead by N commits"** — in a working contribution culture, you see a long tail of forks at 1–50 commits ahead. A spike at *zero* is the signature of signaling.
- **Fraction of forks active in last 30 days** — abandoned-fork rate. Forgejo, OpenTofu, MariaDB all show steady cross-fork activity; bookmark forks show none.
- **Cross-fork PR flow** — do contributors in one fork open PRs against the upstream? Friendly-fork ecosystems (git-for-windows ↔ git/git) have visible flow. Pure bookmark ecosystems have none.

## Apply to Mike

Of 100 sampled Mike forks, 91 are 0 commits ahead, 87 byte-identical to the original, and 0 PRs from forks have been merged. That distribution is dominated almost entirely by **signaling forks** (with a smaller share of **abandoned** and possibly **vibe-coded re-skin** forks among the 9 that diverge). What's structurally absent is the healthy default: ephemeral PR forks that produce merged contributions. The fork count looks like adoption; the commit graph reveals it as bookmarking. This is what an unhealthy fork distribution looks like — not because forking is bad, but because *only one kind* of forking is happening.

## Source list

- https://opentofu.org/blog/opentofu-announces-fork-of-terraform
- https://forgejo.org/2024-02-forking-forward
- https://mariadb.org/is-mariadb-part-of-the-mysql-ecosystem
- https://github.blog/developer-skills/github/the-friend-zone-friendly-forks-101
- https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo
- https://shinolajla.medium.com/hostile-forks-its-all-about-the-money-0371efb6eaa5
- https://thenewstack.io/valkey-is-a-different-kind-of-fork (Hohndel "forks are good" quote)
- https://www.cs.cmu.edu/~ckaestne/pdf/icse20-forks.pdf
- https://www.reddit.com/r/opensource/comments/1k7p81u/stop_forking_around_the_hidden_dangers_of_fork
- https://gist.github.com/heathdutton/14dc1fd16db67eb272335f79367bf166
- https://news.ycombinator.com/item?id=47831621
- https://www.opensourceforu.com/2025/06/the-rise-of-forking-in-blockchain-innovation-or-fragmentation
