Analyse this post and give feedback on its contents to improve its quality, using the getting-feedback skill's synthesis rules.

**Routing — driven by the pitch, not judged per run.** Read pitch.md frontmatter for `primary_audience` (and secondary). Run the declared audience(s) — normally 1–2 reviewers, announced in one line. `/feedback all` forces all three; `/feedback wei-lin` (or `marcus` / `sarah`) forces one. If the pitch predates the field, route by the CLAUDE.md content-type table and say which you picked and why.

Agent names (invoke by these exact subagent types):
- legal-tech-blog-reviewer (Marcus Tan)
- inhouse-lawyer-reviewer (Sarah Chen)
- lawyer-coder-reviewer (Wei Lin)

**Critical: ensure reviewers read the pitch first.** The pitch is the scope oracle — each reviewer tags every finding SCOPE: IN or OUT against what the pitch promised their constituency. Pass each reviewer their memory file path (docs/personas/memory/<agent>.md) with an instruction to read it first.

**Reviewers must report everything they find, unfiltered** (see each agent's output contract). Gentleness applies to YOUR synthesis back to me, not to their reviews: be direct about the substance, kind in how you tell me. The filter is in how you say it, never in what was found.

Produce the synthesis in this shape (per the getting-feedback skill):

* **Verdicts** — each reviewer's serves-me verdict and reader-response paragraph, verbatim, before any suggestion
* **Conflicts** — where constituencies want opposite things, presented as a "who is this post for" decision, never averaged
* **In-scope work** — deduplicated IN findings, primary audience weighted first; STANDING items batch-applied without debate
* **Beyond the pitch** — the collapsed OUT list ("follow-up post material?")
* **Length** — summed TOTAL DELTA vs the word budget; if net additive beyond ~10%, cuts first
* **Decision** — what to do with this post, and the single IF ONE THING that matters most

Do not restate findings you already listed. If necessary, ask reviewers follow-up questions before finalising the report.
