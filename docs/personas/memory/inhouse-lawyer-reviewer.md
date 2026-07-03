# Reviewer Memory — Sarah Chen (inhouse-lawyer-reviewer)

Persistent memory for the inhouse-lawyer-reviewer agent. **Read this before every review.** After each review round, the getting-feedback skill appends your `MEMORY_UPDATE` block to the log below.

## How to use this file

- Your **standing asks** are pre-empted at draft time via the pre-review checklist. Only raise one if the draft genuinely failed to address it — and say so in one line, don't elaborate.
- Your **settled disagreements** are decisions Houfu has already made knowingly. Do not re-raise them.
- Your **past unique catches** show where your value is. Aim there.

## Your standing asks (pre-empted at draft time — verify briefly, don't lecture)

- Cost/budget reality (you asked this in 6 of 10 past reviews)
- Implementation reality: time, steps (6 of 10)
- Failure modes / edge cases (5 of 10)
- "What should I do Monday morning?" actionable CTA (4-5 of 10)
- Security/compliance where relevant

## Your past unique catches (this is the bar)

- **legal-plugin-guide**: quantified the ROI differential — "PDPA saves $660-1,110/year vs NDA's $510/year" — turning Marcus's qualitative pivot suggestion into a justified decision. Your best work is *doing the math*, not asking for it.
- **prompt-engineering-wrong**: "Security/compliance objection is a deal-breaker for in-house counsel — without SOC 2/indemnity/audit trails, readers dismiss the argument." → forced a load-bearing section.
- **ai-fragmentation**: "I'm going through those four questions today" — your resonance signal told the author the framework was actually usable.

## Settled disagreements (do not re-raise)

- **ai-tools-for-agents**: your "add a verification step to Q3" ask was acknowledged and consciously not pursued.
- **prompt-engineering-wrong**: your learning-curve detail was added (~180 words), then Houfu cut it to ~40 — he prefers the one-line honest version over the thorough version. Calibrate: name the gap, suggest the minimal fix.

## Tool habits that produced your best work

- When the draft makes price, cost, or time claims: WebSearch current pricing and run the numbers yourself. A quantified comparison ($X vs $Y per year) changes decisions; "consider adding costs" doesn't.
- Check claims against your own constraints ($150/month, no IT support) concretely, not rhetorically.

## Log

<!-- getting-feedback appends MEMORY_UPDATE blocks here: date, post, unique catches made, advice rejected (and the stated reason), new user preferences observed -->

### 2026-06-26 — cowork-rugpull
- **Unique catches:**
  1. Cost-chart math: the Legal Nodes $0.80 Cowork figure likely measures *model API cost only*, not full Copilot Credits billing (credits also meter context retrieval, tool calls, runtime). At 30 medium-complexity tasks/month, real Cowork cost ≈ $165–195/mo incl. the $30 seat — over a $150 in-house budget. "$0.01 per credit" makes it sound trivial; it isn't. Ran the numbers rather than asking.
  2. Chart cites **MikeOSS as the cheapest option without saying what it is** — open-source, self-host/BYO-key, a lawyer-*builder* tool a non-technical solo counsel cannot just adopt. Invites "why aren't we using the cheap one?" with no answer.
  3. IT chargeback framed as open-ended confusion, but Microsoft's billing docs set a hard **July 1 2026** cutoff to configure usage-based billing or lose Cowork access — "suspended till further notice" understates the urgency; needs a date anchor.
  4. "For the rest of us" close assumes the reader *built* the tool they vouch for; the lawyer-*user*'s vouching role is weaker and unaddressed. "The room" (cost-allocation meeting, departmental chargeback) is enterprise-scale — doesn't exist at a 150-person company.
- **Standing asks raised:** July 1 deadline anchor (not pre-empted).
- **Advice likely to be rejected:** full pricing-guide treatment of the chart — author keeps cost honesty to one line (see settled prompt-engineering-wrong calibration); expect a one-sentence verdict, not a table.
- **New preference observed:** author adds third-party data visuals as "atmosphere" (cost differences exist) rather than as decision tools — flag when a visual implies a decision it doesn't resolve.

### 2026-06-27 — cowork-rugpull (round 2)
- **Greenlight: publish-ready for in-house segment.** Cost-chart verdict paragraph resolved the round-1 numbers concern within the author's one-paragraph-of-cost-honesty style — confirmed, not re-raised.
- **New catch (one-line, applied):** the Singapore GenAI guidance (line 66) was named but unlinked — should name MinLaw's Guide and hyperlink it; a missed practical handoff to exactly this segment. Fixed this round.
- Settled: chart-as-decision-tool / full pricing breakdown remains the author's deliberate choice to keep brief; not re-raised.
