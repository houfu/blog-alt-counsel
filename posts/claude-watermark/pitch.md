---
word_budget: 1900
budget_tolerance: 10
primary_audience: marcus
secondary_audience: [wei-lin]
thesis_keywords: ["watermark", "detection", "co-authorship"]
protected_lines:
  - "It was never going to be decided just because you can tell when Claude wrote something."
  - "easy to remove and hard to fake"
voice:
  lane: news-commentary
  moves: [opening-move-flat-first-person, specific-numbers-as-anchors, return-to-solo-counsel]
interrogation:
  diagnosis: "User's framing — the reaction exposes buried misconceptions — was tested and held, then strengthened. The misconceptions are symmetrical: users fear a tracker that carries no identifying information, would-be detectors over-read a signal that shows processing not authorship, and lawyers invented two statutory prohibitions that aren't in the statutes. It would be contradicted if the watermark were robust and identifying; measured, it is neither (4% spoof resistance broken vs >90% scrub success; no identifying information)."
  differentiation: "Existing coverage (Artificial Lawyer, Legal IT Insider, UNU, Search Engine Journal, smithstephen) all occupies 'provenance is not proof'. Unoccupied and ours: the entropy explanation (the mark exists only where the model had a choice), the remove/fake asymmetry, the two failed legal theories, and the co-authorship attitude contrast anchored on a lived 46%."
  framing_risk: "Beat 5 can read as 'if this bothers you, you're just an AI sceptic' — unfair to lawyers whose constraint is contractual, not attitudinal (client AI bans, hostile judges, engagement terms). Mitigation: keep the user's own hedge, concede those cases explicitly, aim the observation at free-floating fretting. Separately: correct Artificial Lawyer's Art. 50 error as a claim, do not dunk on the outlet (Voice Guide 1.11)."
  subject: "Original message's subject — what the watermark reaction reveals about buried misconceptions — is still this pitch's subject. One deliberate change, made by the user: tutorial mode is demoted from the post's form to its evidence, with the standalone explainer reserved for a possible LinkedIn carousel. Subject intact."
must_link: ["my-voice-worked", "lawyers-prompt-engineering-wrong"]
tags: ["AI", "LegalTech", "Copyright", "Programming"]
target_date: 2026-08-27
---

# Pitch: claude-watermark

## Original framing (verbatim, never edited)

> I want to write an article about claude watermarking. it's an issue that highlights what people buried misconceptions are like. it's a great tutorial i think to teach and figure out what's going on

**Title:** The Watermark Only Catches People Who Weren't Hiding
**Thesis:** Claude's watermark is easy to remove and hard to fake, so it reliably catches only the people who weren't hiding anything — which makes it a compliance artifact, not the enforcement mechanism the panic imagines.
**Spine:** The watermark only exists where the model had a choice.

**Emotional core (user's words):**

> "I looked at it at first and my first comment is that people would try other models."

> "it was always somewhat discernible but now Claude can help determine it"

> "I suppose this is in fact an undecided but it was never gonna be decided just because you can tell when Claude wrote something"

> "Another observation I find in coding is that Claude coauthor GitHub contributions are very prevalent. This may be an attitude difference so if you're fretting I feel it's because you are not well disposed to the whole idea of Claude or Ai co authoring your content."

## Pitch

When Anthropic started watermarking Claude's output, my first thought was that people would just switch models. Then it occurred to me a weaker model would be easier to spot, not harder — and that most of the panic assumes the watermark works in a way it doesn't. It isn't hidden characters. It's a bias in which words Claude picks, which means it only exists where the model had a choice: strong in free prose, near-absent in a quoted statute. Researchers probing the scheme found it easy to remove — over 90% by paraphrase — and hard to fake, at 4%. So it catches one group reliably: people who weren't hiding. Meanwhile lawyers have produced two confident prohibition theories, under the EU AI Act and the DMCA, about removing a mark that identifies nobody. Neither survives reading the statute. And 46% of the commits in my own blog repo already say Claude co-wrote them. Developers volunteer an attribution they could delete. If the watermark bothers you, the watermark may not be what's bothering you.

## Beats

- **Switch models, then** — my first reaction, and why it fails: weaker models are lower-entropy and more stereotyped, so you trade a cryptographic mark for a stylistic tell. (250)
- **What it actually is** — not hidden characters; a change to how the next word is chosen. The mark exists only where the model had a choice, which is why it's sparse in statute quotes and boilerplate and strong in free prose. (300)
- **Easy to remove, hard to fake** — >90% scrub by paraphrase, 4% spoof (ETH Zürich, on SynthID-Text specifically; the widely-quoted 80% figure is a different scheme). Therefore: it only catches the honest. (350)
- **Two prohibitions that aren't there** — Art. 50 binds providers, not users, and says nothing about removal; DMCA §1202 needs CMI that identifies someone, and this identifies nobody. Plus the copyright-holder question: genuinely open, and detection doesn't move it. (400)
- **The attitude turn** — 46% of my commits say Claude co-wrote them; ~4% of all public GitHub commits carry the trailer, and that's a floor because it's opt-out. Developers volunteer what lawyers fear. Concede the real constraints before making the point. (300)
- **For solo counsels, and the close** — what actually changes for a small team; it was always discernible, now it's legible. (300)

## Out of scope

- A how-to for detecting or removing watermarks.
- A full tutorial on transformer sampling — reserved for a possible LinkedIn carousel, not planned here.
- A law-firm AI-policy checklist (the post everyone else wrote).
- Adjudicating Anthropic's motives, for or against.
- C2PA image provenance beyond one contrast line.
- Predicting how the copyright-holder question resolves.
