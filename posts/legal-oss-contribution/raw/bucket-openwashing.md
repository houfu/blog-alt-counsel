# Bucket: Open-washing / performative open source literature

## Origin and definition

**Openwashing** was coined by Michelle Thorne on 19 March 2009 — verbatim: *"to spin a product or company as open, although it is not"* — modelled on "greenwashing" ([Thorne, 2009](https://michellethorne.cc/2009/03/openwashing); [Waugh & Carlisle-Johnston, 2022 PDF](https://library.concordia.ca/about/staff/forum/files/2022/2022_Waugh.pdf)). Heimstadt (2017, *Tech. Forecasting & Social Change* 125) sharpens it as **decoupling**: *"a mismatch between how the public expects information to be shared, and how an organization actually makes information available."* That's the register: a structural gap between signal and practice.

## The licence-shift case studies

- **HashiCorp / Terraform → BSL (Aug 2023).** [OpenTofu Manifesto](https://opentofu.org/manifesto) called BSL a *"poison pill"*, made *"with little or no advance notice or chance … to have any input."* Its positive standard — *"community-driven … where pull requests are regularly reviewed and accepted on their merit"* — names contribution-flow as part of openness, not just licence text. Linux Foundation took the fork.
- **Elastic → SSPL/Elastic License (Jan 2021).** MongoDB *"openly refers to themselves as a source available organisation and are explicit to the fact they are no longer open source"* ([Source Code Control](https://sourcecodecontrol.com/elasticsearch-moves-to-source-available-sspl)) — Elastic, by contrast, kept "open" framing.
- **MongoDB → SSPL (2018).** Kuhn (below) treats SSPL as canonical bad-faith: copyleft-shaped, drafted in secret, dropped on OSI as a *fait accompli*.
- **Redis → SSPL/RSALv2 (Mar 2024) → AGPLv3 (May 2025).** Valkey forked within days. Redis's return to AGPLv3 a year later is itself evidence the source-available pivot didn't deliver its promised moat ([InfoQ](https://www.infoq.com/news/2025/05/redis-agpl-license)).

## The "open source AI" definition fight

OSI is blunt: *"Llama 3.x is still not Open Source by any stretch of the imagination. Despite that, Meta keeps on falsely promoting Llama as 'Open Source.'"* OSI names the tactic as *"Meta's open washing"* ([OSI, Feb 2025](https://opensource.org/blog/metas-llama-license-is-still-not-open-source)). Llama fails OSD freedom 0, point 5 (Llama 4 excludes EU persons), and point 6 (field-of-endeavour restrictions).

Open Future's Llama-2 autopsy ([Keller, 2023](https://openfuture.eu/blog/the-mirage-of-open-source-ai-analyzing-metas-llama-2-release-strategy)) gives three damning specifics: the licence waives for everyone *except* competitors with >700M users (a moat dressed as a licence); downloads are gated — *"the model is not freely available for download. To do so, the user must fill out a short form with contact information"*; training data is undisclosed, described only as *"a new mix of publicly available data."* **The contact-form gate is the direct parallel to Harvey's biglaw-bench.**

Practitioner shorthand: **"open weights ≠ open source."** Emily Bender: *"Open-weight is not open source. Unless and until OpenAI is fully open about what is in their training data, they cannot claim to be open"* ([Bender, Apr 2025](https://www.linkedin.com/posts/ebender_open-weight-is-not-open-source-unless-and-activity-7313354628522262529-yLRx)).

## Practitioner critiques worth quoting

- **Drew DeVault, Mar 2022** ([source](https://drewdevault.com/blog/Open-source-is-defined-by-the-OSD)): *"Software for which the source code is available, but which does not meet the requirements of the open source definition, is rightfully called 'source available'. If you want a sexier brand for it, make one!"* And: *"There are many interests who would like to leverage that brand without meeting its obligations."*

- **Bradley M. Kuhn, Oct 2018** ([mirror](https://noise.getoto.net/2018/10/17/toward-community-oriented-public-transparent-copyleft-policy-planning-403)). The most useful line: *"Open-in-name-only licenses are now common, but seem like FLOSS licenses only to the most casual of readers."* Also: *"companies proposing their own licenses are now straightforward about their new FLOSS licenses' purposes: to maximize profits."* His charge that SSPL was drafted *"in secret … as a fait accompli"* maps onto closed-merge-gate openwashing — process opacity dressed as openness.

- **OSI *Maintainers* book (Oct 2025)** has the exact phrase: *"It's one thing to say 'all contributions are welcome', but that's Open Source theatre because honestly, it's likely not all are in every area as welcome as that"* ([PDF](https://opensource.org/wp-content/uploads/2025/10/osi_maintainers.pdf)). Cleanest cite for the contribution-flow dimension.

## The governance dimension — beyond licence

Openwashing isn't only licence text:

- **Closed contribution flow.** OSI's "Open Source theatre" framing; Kuhn on secret drafting; OpenTofu's *"pull requests … reviewed and accepted on their merit"* as what's denied.
- **Gated datasets / models.** Llama-2's contact-form gate is licence-compliant in form, governance-restrictive in practice. Hugging Face's "gated access" pattern has normalised it — most legal-AI benchmarks followed suit.
- **Training-data opacity.** Llama-2's *"new mix of publicly available data"* is the canonical evasion; OSAID exists to require *"transparency on training data and model details"* ([Medianama](https://www.medianama.com/2024/10/223-ai-model-open-source-initiative-defines-standards)).

Licence is the headline test; governance — who reviews, who's merged, what's downloadable, what data is disclosed — is where most performative-open behaviour now lives.

## Why this matters for legal OSS specifically

Legal OSS is exposed because the audience under-indexes on OSS literacy. Solo counsels and biglaw partners can't distinguish OSI-approved from source-available; they trust the word "open" in a press release. Both the Mike McConville fork drama and Harvey's biglaw-bench fit the patterns: public GitHub, permissive README, contribution-welcome language — while the *infrastructure* of open source (responsive review, external committers, full datasets, transparent governance) is absent. The licence is fine. What's hollow is everything around it. That gap — open-as-marketing vs open-as-practice — is what Thorne, Kuhn, DeVault, OSI and OpenTofu have been naming for fifteen years. Legal OSS is just arriving at the conversation late.

## Source list

- michellethorne.cc/2009/03/openwashing — Thorne 2009, original definition.
- library.concordia.ca/.../2022_Waugh.pdf — Lit review (Heimstadt, Moe).
- opensource.org/blog/metas-llama-license-is-still-not-open-source — OSI naming Meta "open washing" (Feb 2025).
- openfuture.eu/blog/the-mirage-of-open-source-ai... — Llama-2 autopsy; contact-form gate parallel.
- drewdevault.com/blog/Open-source-is-defined-by-the-OSD — Source-available rebranding critique.
- noise.getoto.net/.../toward-community-oriented...copyleft-policy-planning-403 — Kuhn "open-in-name-only".
- opensource.org/.../osi_maintainers.pdf — OSI Maintainers, "Open Source theatre" (Oct 2025).
- opentofu.org/manifesto — Community-driven OSS as the abandoned standard.
- infoq.com/news/2025/05/redis-agpl-license — Redis return to AGPLv3.
- linkedin.com/posts/ebender_open-weight-is-not-open-source... — Bender, open weights ≠ open source.
- medianama.com/2024/10/223-ai-model-open-source-initiative-defines-standards — OSAID training-data transparency.

**Flag:** No SSRN/arXiv anchor for *legal* OSS openwashing specifically. Heimstadt 2017 is the strongest peer-reviewed cite and is domain-general. Full URLs are linked inline above.
