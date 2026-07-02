---
title: "Six Months In: Grading My 2026 Predictions (And the Log I Didn't Keep)"
slug: 2026-predictions-six-month-update
tags: [AI, LegalTech, Singapore, 2026Predictions]
status: draft
excerpt: "In January I made five testable predictions and promised to track them publicly all year. I made five predictions and then didn't keep the log. Here's the mid-year reckoning anyway — because the year kept its own record."
---

In January, I made five predictions about legal AI, gave each one a success criterion, and promised something most prediction posts never do: to track them publicly, month by month, in a repo anyone could watch. I even set a stake. If I chickened out of the December scorecard, $500 to a Singapore legal aid organisation and a public acknowledgment that I'd flaked.

So let me start with the most honest sentence in this post.

I didn't keep the log.

The tracking file I set up in January still has every "updates will appear here" placeholder exactly where I left it. No monthly usage percentages. No contract-review spreadsheet. No decision log. The public audit trail I promised has six months of silence in it.

That's a failure worth sitting with — and I'll come back to what it means. But it turns out I don't get to hide behind the missing log, because the year kept its own record. Between January and now I published twenty-two posts, and read back in order they *are* the tracking data. Not the clean quantitative version I promised. The messier, more honest version, where you can watch me change my mind in real time.

So here's the mid-year reckoning. Five predictions, graded from the trenches, using the receipts I actually left.

## Prediction 1: Agentic AI will actually work for document review

**The bet:** By the end of 2026 I'd complete routine contract reviews without ever opening Microsoft Word. Binary test: if I hand-write one edit in Word, it failed.

**Where it stands: not there yet — and I nearly conceded early.**

In April, Anthropic shipped Claude for Word, with contract review as the flagship use case. Native sidebar, tracked changes, the works. I installed it half-expecting to eat my prediction on the spot.

https://www.alt-counsel.com/word-on-claude-the-lawyers-greatest-legal-tech-tool-strikes-back/

The product is genuinely good — the strongest agentic editing I've seen inside Word. But writing that review clarified something I'd gotten muddled in January. My prediction was never about whether a good tool would *exist*. It was about whether the workflow would *transform* — AI precise enough to trust, adoption wide enough to mediate negotiations, tools friendly enough for any lawyer. A launch can't settle that. And the interface itself pulls you toward junior work: clause tweaks in a 300-character sidebar, when the strategic thinking lives somewhere you can see the whole transaction.

Then in June I ran a harder test than any product demo — I put an agent stack through Harvey's Legal Agent Benchmark, over 2,000 tasks.

https://www.alt-counsel.com/my-agent-did-the-legal-work-the-benchmark-gave-it-zero/

Somewhere in those results is a complete, correct legal memo that scored zero — because my agent saved it as raw markdown under a `.docx` name and the grader couldn't open it. The legal thinking was done. The delivery failed. That's the prediction in miniature: we can get AI to *do* the review; we can't yet get it to *hand back* reviewable work without me reaching for Word to fix what broke.

Six months in, I've still opened Word. Prediction 1 is leaning toward a miss — but a more interesting miss than I expected.

## Prediction 2: The jagged frontier problem won't get better

**The bet:** The problem was never that AI fails — it's that we can't predict *which* tasks it'll fail at. And that unpredictability wouldn't improve in 2026.

**Where it stands: this is looking like my strongest call.**

In January I flagged this as one of the two I was *most likely to fail at*, because it's the hardest to operationalise. Instead it's the one the evidence keeps confirming.

SkillsBench dropped in February — 7,308 agent runs measuring whether skills actually help. They do, on average, by 16 points. But 19% of tasks got *worse*, the worst by nearly 40 points, and models proved unable to write the very skills they benefit from using.

https://www.alt-counsel.com/skillsbench-analysis/

That's jaggedness with a sample size. Strong here, weak one task over, and no reliable way to know which in advance. My benchmark run said the same thing from the other direction: my lawyer-built stack *lost* to a generic one (74.8% vs 84.7%), but won on extraction and comparison while collapsing on long-form drafting. Same tools, opposite results, depending on the task. I called it "the jagged frontier vividly illustrated" — and I meant it.

Better models moved the frontier this year. They didn't remove it.

## Prediction 3: Real usage will stay under 20%

**The bet:** When I honestly tracked my *actual* meaningful AI use across my legal work, it would stay under 20% — claims of 52% adoption notwithstanding.

**Where it stands: I can't grade this honestly, and that's the whole point.**

This is the prediction I said I was *most confident* about. It's also the one I sabotaged — because the "honest monthly tracking" I promised is exactly the log I didn't keep. I don't have a number for you. I could reconstruct one from my calendar and pretend it was tracked contemporaneously. I won't. A made-up percentage in an accountability post is the exact theatre I said I'd call out in Prediction 5.

What I *can* say complicates the bet. In April I finally admitted in writing that almost every post I publish is now heavily AI-assisted end to end — and that the readers rewarded it, not punished it.

https://www.alt-counsel.com/three-years-100-members-and-an-experiment-in-plain-sight/

That's usage well north of 20% — but it's my *building and writing* life, not my legal-deliverable life, which is what the prediction was actually about. The gap between those two numbers is probably the real finding here, and I don't have it measured. So the honest mid-year grade on Prediction 3 is *incomplete*, and the reason it's incomplete tells you something true: even for someone who bet money on tracking, the friction of tracking was enough to stop me. Which, ironically, is the friction thesis the prediction was built on.

## Prediction 4: The hallucination paradox stays unsolved, but maybe manageable

**The bet:** You can't kill hallucinations without killing what makes LLMs useful. Unsolved in 2026 — but maybe made *manageable* through structure: citations, two-pass review, locked templates.

**Where it stands: partial, and the failure surface moved.**

I haven't run the clean three-workflow bake-off I described in January. But the benchmark work taught me something I didn't have in the original framing. Harvey's grader is all-pass — a memo that catches eight of ten risks scores as incomplete, because that's how partners actually review. Under that standard, the thing that sank my agents wasn't fabricated law. It was *packaging*: broken files, leaked format tokens, placeholder stubs shipped as final work.

So the manageable-hallucination thesis holds, but the sharpest risk in practice isn't the confident fake citation I worried about in January — it's the confident, well-formed output that's quietly wrong or quietly broken in ways an all-pass reviewer catches and a busy solo counsel might not. Structure helps. It doesn't solve. Leaning toward the prediction, with a revised sense of *what* needs managing.

## Prediction 5: Most AI adoption will be performative theatre

**The bet:** Most projects would be checkbox exercises. Real innovation would happen in isolated pockets. And I'd learn to tell them apart.

**Where it stands: leaning confirmed, with more texture than I expected.**

I flagged this as my other likely-to-fail prediction because I was "learning to spot theatre from scratch." Three posts this year sharpened the signal.

Budget 2026 put real government money behind legal AI — tax deductions, free tools, a Champions programme. Good, but I asked whether it was adoption *infrastructure* or a way to keep lawyers in the passenger seat.

https://www.alt-counsel.com/budget-2026-lawyers-ai-drivers-seat/

And when I actually went looking for the innovation pockets, I found them thinner than the announcements suggest — legal open source isn't a community yet, it's "a federation of solo-author archipelagos."

https://www.alt-counsel.com/lawyers-not-on-each-others-code/

But I also caught a real one, close to home: I submitted feedback on MinLaw's draft AI guide and watched two recommendations land in the final, near-verbatim. Real iteration, in public, changing something. That's the innovation signal, and it's rarer than the press releases imply. Prediction 5 is holding.

## The updated scorecard

In January I said I was most confident about #3 and #4, most likely to fail on #2 and #5. Six months in, the ranking flipped in the most instructive way:

- **#2 (jagged frontier)** — my supposed weakest bet — is my strongest.
- **#3 (usage under 20%)** — my most confident — is the one I broke by not measuring it.
- **#1** is leaning miss, #4 partial, #5 holding.

The lesson isn't in any single grade. It's that the prediction I was proudest of the *method* on is the one where the method failed, and the prediction I thought was too abstract to test kept proving itself without my help.

## What I'm doing about the log

The missing tracking is a real breach of what I promised, so here's the fix, not an excuse. I've back-filled the tracking file in the repo with what these six months actually showed, and for the back half of the year I'm dropping the fantasy of a perfect monthly spreadsheet in favour of something I'll actually sustain: a short entry appended whenever a post touches a prediction. Lower friction, same audit trail. If that's still theatre, you'll be able to see it — publicly, in the commits.

The $500 stake stands. The December scorecard stands. I'm on record now, twice.

See you in December with the data. All of it this time.
