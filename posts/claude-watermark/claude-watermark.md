---
title: Tell Me What the Watermark Does and I'll Tell You What You Think an LLM Is
slug: what-the-watermark-does
tags:
  - AI
  - LegalTech
  - Programming
status: scheduled
featured: false
github_folder: claude-watermark
post_id: 6a8c4ae500ae3500010e5cb4
published_at: '2026-08-25T01:25:13.000Z'
feature_image: >-
  https://storage.ghost.io/c/33/4e/334edc26-d66c-4112-a0d8-6528c3cd17c4/content/images/2026/08/Watermark-cover.png
custom_excerpt: >-
  Three camps argued about Claude's watermark in its first week, and each
  described a different imaginary object. Working out what it actually does
  turns out to be a decent test of what you think a language model is.
---

Anthropic announcing that Claude's text would now carry a watermark seemed like a watershed moment at first. As I saw the response streaming in, I wondered whether this was the moment when people would abandon Claude in favour of another provider. As long as you don't use a provider who watermarks AI output, you'd be fine right?

As someone who uses AI a lot to write and code, I can feel the anxiety, the fear and the anger. But the more I tried to seat my feelings with my understanding of how large language models worked, I realised my reaction was wrong. This post goes into detail about what the watermarking really means. Maybe you will learn something new too?

## We were all imagining the same thing

Within days of the announcement, three reactions showed up, loud and mostly online.

1. One camp was **afraid**. Watermarking sounded like tracking — a mark quietly identifying who wrote what, sitting there for an employer, a school, a platform to find. Cancel-my-subscription posts followed.
2. A second camp was **thrilled**. Finally, a way to catch AI writing and call it out — a tool that would let anyone prove what came from a machine and shame it for it. Detection sounded like a verdict.
3. A third camp reported something quieter and stranger: the writing itself had gotten worse. **People were certain the prose had been altered, flattened, nudged by an invisible hand.**

Three reactions, pointing three different directions, and one misreading underneath all of them: each assumed the watermark was something **added** — a tag slipped in for the dread, a proof stamped in for the delight, a distortion baked in for the complaint.

There was one scenario which was not based purely on emotions: **If you have an engagement letter which forbids the use of AI in your work product, are you now in danger**? This is a professional angle, so the stakes are much more concrete.

## Nothing was added

On 14 August, Anthropic [published a page](https://www.anthropic.com/news/claude-text-watermark) answering the reaction directly, and its first move is to name the object question head-on:

> Nothing is added to the text and there are no hidden characters.

That's a testable claim, so I tested the closest thing I had — every Claude-generated file sitting in this post's own working folder, scanned for the usual hiding places: zero-width spaces, variation selectors, the invisible Unicode that some "watermark remover" tools claim to strip out. 40,882 characters. Zero hidden characters found.

The same page rules out a few other half-formed guesses. It isn't a Claude-only feature — Anthropic signed an [EU Code of Practice on transparency](https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content) alongside around 190 signatories in July. In the end, if you wish to use a provider with a decent reputation, you would not be able to escape it.

So if nothing was inserted, what actually changed?

## The die, not the words

Every time a language model writes a word, it isn't retrieving the one correct answer. Most people understand that large language models are "probabilistic" as opposed to deterministic. However, they have not ventilated what "probabilistic" really means.

Probabilistic means that the AI is sampling from a list of words it considers plausible, weighted by how likely each one seems given everything written so far. But the choice is real: given the same sentence, the model could legitimately continue several different ways and still be right.

Watermarking changes what happens at that moment of choice. This is how Anthropic describes what they are doing:

> instead of using an arbitrary random number generator to pick the next word, watermarking uses the key and a few words that come before to settle what word the model should pick.

The technique, a version of [Google DeepMind's SynthID-Text](https://www.nature.com/articles/s41586-024-08025-4) — what DeepMind calls [tournament sampling](https://magazine.sebastianraschka.com/p/claude-watermarking) — doesn't push the model toward particular words. It swaps the coin flip that decides among words the model was already willing to write for a coin loaded by a hidden key. Each small push is invisible on its own. Add enough of them up, and a detector that knows the key can tell, statistically, that the choices lean a certain way.

That single fact — the mark lives in **how the model rolls its dice**, not in what gets written — explains what the watermark can and can't do, because a die can only be loaded where there was more than one face to land on. The technical word for that is entropy: a measure of how much genuine choice sits at a given word. I found this Claude Artifact written by an Anthropic Engineer as very useful in telling you what words with high entropy are.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Watermarking without quality loss is a bit unintuitive, doesn&#39;t feel like it should work.<br><br>I made this artifact with Claude to help me understand how it works, sharing in case it&#39;s helpful. <a href="https://t.co/hEPeCHgGRM">https://t.co/hEPeCHgGRM</a> <a href="https://t.co/ALReoOH6tB">pic.twitter.com/ALReoOH6tB</a></p>&mdash; Thariq (@trq212) <a href="https://x.com/trq212/status/2088721023223132213?ref_src=twsrc%5Etfw">August 15, 2026</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

Once you have a sense of where the AI gets more freedom, certain jobs become more susceptible to this kind of watermarking:

* A persuasive paragraph, a client email finding its own words, creative forms of writing – the AI has a free hand in crafting this output so its watermark, or signature becomes much stronger.
* A quoted statute, a boilerplate indemnity clause, a line of code which must follow the programming language's syntax – the AI needs to be correct, and its mark barely registers.

Anthropic states this directly: the watermark runs "sparser on factual passages where there are fewer choices that can be made without decreasing the accuracy."

![A colour-coded passage of prose with most words highlighted as high-entropy](https://storage.ghost.io/c/33/4e/334edc26-d66c-4112-a0d8-6528c3cd17c4/content/images/2026/08/CleanShot-2026-08-24-at-23.35.01.png)

*Creative prose shows a high concentration of high entropy words. (Source: the artifact referred to above)*

It also explains why the mark survives copying and reformatting but not rewriting. Paraphrasing doesn't touch a single word the model already committed to — it re-rolls all of them. Anthropic's own ceiling on that: "Light editing probably won't remove the watermark completely; a complete rewrite where every word is replaced will."

None of this is a tag. It's a bias in a probability distribution, and that bias only exists because the model had somewhere else it could have gone.

## Watch the three reactions come apart

Now go back to the three reactions from the first week.

The dread doesn't survive it. Nothing about who was asking enters into which of several acceptable words got picked. There's no name, no account, no chat history riding along in the pattern. Anthropic states this as plainly as it states anything: the mark carries "no identifying information and can't be traced to a specific person, organization, or chat." What can be inferred is that a text was probably processed by Claude at some point. Who did the processing isn't in there to find.

The glee doesn't survive it either. A lean spread across thousands of small choices was never going to hand back a verdict — only a probability that the lean is there at all. So the best evidence you are going to get is that based on "probability", this is *likely* to be written with AI. It also needs room to work: a small sample size, like a short email or a message, is not likely to give a determination with high confidence. Some of that hope was pointed at a real question: whether AI-generated writing can hold copyright is, genuinely, an open question in law right now. It was never going to be decided just because you can tell when Claude wrote something.

Meanwhile, the people who don't mind being caught have been telling you all along. In this blog's own repository, 46% of commits carry a "Co-Authored-By: Claude" trailer — a mark that's optional and trivially strippable, and developers leave it in anyway. Across public GitHub, [SemiAnalysis put it at 4% in February 2026,](https://newsletter.semianalysis.com/p/claude-code-is-the-inflection-point) and called that a floor: the trailer is opt-out, and private repositories aren't counted at all. Nobody made them disclose. They just weren't worried about it.

The degradation claim is the one I can't fully close the door on. The mechanism only tells us that watermarked and unwatermarked continuations are drawn from words the model already ranked as equally good. But for legal writing, that might be concerning, as certain words have different imports which AI may not be aware of. However, I do reckon that if you were prepared to let an AI write your contract or your submission, you were prepared for such risks anyway. The model's ranking says two versions are equivalent; a reader's eye might say otherwise.

But there is some evidence that the impact of word choices are not impressive: Google has been running the same underlying scheme across Gemini since October 2024 — about twenty-two months, [roughly twenty million responses](https://www.nature.com/articles/s41586-024-08025-4) — with no measurable shift in how people rated the answers. Whether AI writing has a sound of its own is worth taking seriously. It just isn't a question this mechanism can answer.

## The panic is the specimen

None of the three reactions were foolish to have. They were reactions to an object that made emotional sense. The error was in the misreading, not the feeling: reacting to the object before checking whether that object was the one that actually shipped.

Same failure, different specifics: react to the thing you assume is there, rather than the thing the provider actually described in writing. The FAQ answers the same imagined object over and over, one reply at a time.

[Lawyers Got Prompt Engineering Wrong (And Why That Matters)](https://www.alt-counsel.com/lawyers-prompt-engineering-wrong/)

In fairness to the people who got it wrong, some of them did read a page. Anthropic's [support article](https://support.claude.com/en/articles/16266773-how-claude-marks-ai-generated-content) says the model "weaves an imperceptible watermark directly into the text itself," and that "because the watermark is part of the text, it will travel with the text when it's copied and pasted elsewhere." Read only that, and the hidden-tag picture is a reasonable place to land. The announcement page says nothing was added. Both pages are Anthropic's.

The reflex worth building isn't "trust the vendor." It's narrower than that: read what they actually claimed before arguing with it, all of it, and treat a gap between the description and the mechanism as the thing worth chasing. For a solo counsel with no research department and no time to run down every claim about a new AI feature, that's a cheap habit — cheaper than a policy memo, and it would have caught more of this panic than any checklist, because the next misread feature won't look anything like this one. You won't do it for everything. Most of this never reaches you, and the week it does you'll be busy. It's for the ones that actually land on your desk.

[From Draft to Final: What Changed in MinLaw's AI Guide (And What It Means for You)](https://www.alt-counsel.com/minlaw-ai-guide-draft-to-final/?ref=claude-watermark)

The watermark itself is close to the least interesting thing here. What stuck with me is how much confident reaction one FAQ could absorb, all of it describing a version of the feature Anthropic never shipped. There'll be another one of these. Some new capability will get announced, and three camps will have decided what it does before anyone reads the page. I don't expect to get the read right every time either. I'd like to at least get better at noticing when I'm reacting to something I haven't checked.
