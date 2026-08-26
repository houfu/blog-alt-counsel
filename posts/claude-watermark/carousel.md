# LinkedIn carousel — how Claude's watermark works (8 pages)

Format: 1080x1350 (4:5). One idea per page, teaching deck.
Source post: https://www.alt-counsel.com/what-the-watermark-does/
Production: laid out as design artboards in `carousel/`, transposed by hand
into Canva. Canva is the published artefact — `carousel/claude-watermark-carousel.pdf`
is the export that goes up. This file records what shipped.

## Design rule for this deck

**Teach, don't argue.** No qualifiers, no "I think", no rebuttals. The point
lands by sequence — page 4 shows where the mark lives, page 5 shows the same
picture in a contract, page 6 names why that matters. The reader draws the
conclusion; the deck doesn't state it.

Target: **under 35 words a page.** If a page needs a paragraph, it's two pages.

**Pages 2 and 5 must match exactly** — same keycap treatment, same pressed key.
Page 2 is harmless (the weather). Page 5 is a contract clause. The deck turns
on the reader recognising the second picture as the first.

## Page 1 — Cover

**Tell me what the watermark does and I'll tell you what you think an LLM is.**

How Claude's watermark actually works, in 8 slides.

*(purple field · footer: ALT+ keycap, alt-counsel.com, CC BY-NC-ND)*

## Page 2 — How a model picks a word

**The weather today is cold and ______.**

`overcast` · `dull` · `grey`

All three are fine. The model rolls a die.

**[VISUAL: three keycaps, "dull" pressed]**

## Page 3 — What watermarking changed

**It loads the die.**

The words don't change. The one that gets picked is steered by a hidden key.

Do that a thousand times and the picks form a pattern.

*(purple field)*

## Page 4 — The mark needs choices to hide in

**Strong** — a client email. A covering letter. An argument. Free prose.
*The model had room to move.*

**Weak** — a quoted statute. A defined term. Boilerplate. Code.
*The model had one right answer.*

More freedom, stronger mark.

## Page 5 — Same picture, inside a contract

**The Contractor shall use its ______ endeavours.**

`best` · `reasonable`

It might look the same to the model. Does it look the same to you?

**[VISUAL: identical keycap treatment to page 2 — two keys, one pressed]**

## Page 6 — "Equally good" means equally good to the model

condition ≠ warranty
guarantee ≠ indemnity
terminate ≠ rescind

The model ranks probability. The lawyer makes a judgement.

*(purple field)*

## Page 7 — What the watermark can't do

It can't name you.

It can't prove who wrote something.

It can't work on a short passage.

No detector has been released as yet.

## Page 8 — In the post

**Three things this doesn't settle.**

1. Your engagement letter bans AI. Are you in breach?
2. Anthropic's two pages describe two different features.
3. Why 46% of this blog's commits admit Claude helped.

*(purple field · footer: Full post → alt-counsel.com/what-the-watermark-does)*

The deck gives the mechanism away for free. This page is the gap between what
the deck taught and what the post still owns: the professional-exposure
question, the contradiction between Anthropic's own two pages, and the
disclosure evidence.

## Cut in Canva, and why it matters

The original page 4 — **"Nothing was added. No hidden characters. No tracking
code. 40,882 characters of Claude output scanned. Found: none."** — was dropped
for length. Worth knowing what went with it: it was the only original empirical
work in the deck, and it was the page that answered the single most common fear
(is there a tracking code sitting in my text?). As shipped, page 3 says a hidden
key steers the picks and nothing afterwards tells the reader that nothing was
inserted. If a v2 gets made, this is the page to put back. The caption should
carry the claim in the meantime.

## Fixes outstanding in the Canva file

* Last page URL reads `alt-counsel.com/what the watermark-does` — space where
  the first hyphen belongs.
* Purple field doesn't reach the edge on the cover (white strip, left) and on
  page 8 (white strip, right).
* Page 7's cloud graphics sit under the black display type and eat the counters
  on "prove" and "passage".
* Page 4: "Boilerplate. Code" is missing its full stop.
