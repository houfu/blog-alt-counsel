---
title: "Budget 2026 Tells Lawyers to Use AI. But Are We in the Driver's Seat?"
slug: "budget-2026-lawyers-ai-drivers-seat"
tags: ["Singapore Legal", "Legal Technology", "AI", "Budget 2026", "Government Policy"]
status: draft
featured: false
github_folder: "singapore-budget-ai-review"
---

PM Wong named legal as one of the first professions needing AI transition support in Budget 2026. Right after warning that AI will displace white-collar jobs.

I watched the speech and felt... grateful? Nervous? Both.

The government is putting real money behind this. 400% tax deductions on AI spending. Free premium tools for training. A Champions of AI programme. TeSA (TechSkills Accelerator) extended to lawyers. The message is clear: AI is coming for your work, and we'll help you adapt.

But something nags at me.

## Credit Where Due

Budget season is a great time to take stock of all the initiatives that are ongoing. To be fair, there's a lot going on. Budget 2026 delivers:

| Initiative | Details | Link |
|------------|---------|------|
| **400% Tax Deduction** | On qualifying AI expenses (capped at $50,000/year) under expanded Enterprise Innovation Scheme | [Enterprise Innovation Scheme](https://www.enterprisesg.gov.sg/) |
| **Champions of AI Programme** | For firms seeking comprehensive AI transformation | [MinLaw AI](https://www.mlaw.gov.sg/) |
| **Expanded PSG-Legal (Productivity Solutions Grant)** | Covering wider range of digital and AI-enabled solutions, 70% government co-payment | [PSG-Legal](https://www.mlaw.gov.sg/) |
| **TeSA Extension** | Specifically to accountancy and legal professions | [TeSA](https://www.tesa.org.sg/) |
| **Free Premium AI Tools** | Six months' access for workers who enrol in selected AI courses | [SkillsFuture](https://www.skillsfuture.sg/) |

And this sits on top of initiatives already in motion:

| Initiative | Details | Link |
|------------|---------|------|
| **LIFT Pilot** | Deploying legaltech consultants directly into law firms | [LIFT](https://www.mlaw.gov.sg/) |
| **Legal Technology Platform** | Microsoft Copilot integration for law firms | [Microsoft Singapore](https://www.microsoft.com/en-sg/) |
| **Judiciary + Harvey AI** | Case summarisation for Small Claims Tribunals | [Harvey AI](https://www.harvey.ai/) |

The professional bodies have been active too:

| Initiative | Details | Link |
|------------|---------|------|
| **MinLaw GenAI Guide** | Establishes "lawyer in the loop" principle (Sept 2025 public consultation) | [MinLaw](https://www.mlaw.gov.sg/) |
| **SAL + Microsoft Prompt Engineering Guide** | Free, Creative Commons-licensed, accessed 1,500+ times | [SAL](https://www.sal.org.sg/) |
| **LawNet 4.0** | AI-powered legal research trained on Singapore's legal context, serving 10,000+ users | [LawNet](https://www.lawnet.gov.sg/) |

And at the Opening of the Legal Year (OLY) 2026, a **new committee co-led by CJ Sundaresh Menon and Law Minister Edwin Tong** was established to address AI's impact on legal work — with representation from the judiciary, AGC, MinLaw, SAL, Law Society, SCCA, and academia.

That is a coordinated, well-funded, serious effort. I mean it when I say credit where due.

## So what if every lawyer had a Premium AI tool?

Here's a thought experiment. Imagine tomorrow, every lawyer in Singapore gets a premium AI tool. I am not talking about a crummy six month subscription to ChatGPT Plus. We are talking about Harvey, CoCounsel, whatever the flavour of the month is. Real LegalTech. Licences paid. Training done. Desktop icons gleaming.

What would actually happen?

If global data is any guide: not much. Clio's 2025 Legal Trends Report says 79% of legal professionals "use AI." But dig deeper. The American Bar Association's 2025 Legal Industry Report — surveying 2,800+ professionals — found only 31% of lawyers and 21% of firms actually use generative AI. For firms with 50 or fewer lawyers — which is most of Singapore's legal profession — gen AI adoption sits at roughly 20%.

And the barriers are real. 56% of lawyers cite data privacy and confidentiality as their top concern before uploading anything. Only 33% of firms have policies telling lawyers *how* to use AI.

Then there's the hallucination problem. Even the best bespoke legal AI tools — Lexis+ AI, CoCounsel — hallucinate 17-33% of the time, according to Stanford's Human-Centered AI Institute benchmarking. General-purpose chatbots? 58-82% on legal queries. [1]

So giving everyone the tool doesn't mean everyone uses it. Using it doesn't mean using it well. And using it well still means checking every output because the tool might be making things up.

Law Society president Prof Tan Cheng Han raised exactly this at the Opening of the Legal Year 2026: AI will "reduce demand for routine legal work typically undertaken by junior lawyers." And if lawyers can't access or understand these tools effectively, "this affects their clients' access to justice."

The tool is not the transformation. The tool is the starting point.

## What's Not on the Menu

Here's what I keep looking for and can't find: an innovation ecosystem.

Everything above is adoption infrastructure. It helps lawyers *use* AI tools that someone else built. Learn prompting techniques that someone else designed. Follow guidelines that someone else wrote.

Neither is wrong. You can't run before you walk. But adoption infrastructure without an innovation ecosystem means lawyers stay in the passenger seat. Permanently.

Three things I keep coming back to:

1. Open legal data with APIs for experimentation
2. A visible builder community
3. Curiosity vs compliance

**Open legal data with APIs for experimentation.** When I built [data.zeeker.sg](https://data.zeeker.sg) — a platform for structured Singapore legal data — I used my own time and money. Validated my idea, but also frustrated me — I'd built something useful, but it was just me and my laptop.

When SMU announced SOLID, I felt a mix of validation and frustration — validation that someone else was thinking about this, frustration that I'd spent 6 months building the same thing.

LawNet 4.0 has AI-powered search (impressive), but no publicly available APIs for developers to build on. The SMU SOLID database project promises open legal data with APIs — target launch: Q1 2028. That's two years away.

If I wanted to experiment with Singapore legal data today — build a prototype, test an idea, see if something works — I'd have to build the data infrastructure first. I did. Most lawyers won't.

**A visible builder community.** How many lawyers in Singapore are actually building with AI? Not using it — *building*. Writing code, prototyping tools, sharing what works and what doesn't. I've looked. Legal tech meetups exist. TechLaw.Fest is excellent. The SMU LIT Hackathon brings students together. But a practising-lawyer builder community? Where lawyers share code, debug together, iterate in public?

I can't find one.

94 legal tech startups in Singapore, according to Tracxn. But lawyer-founded ones? Alpha LegalTech (2020) and LegalComet (acquired by Rajah & Tann, 2018) are the notable examples. The ecosystem is consumption-focused. Lawyers buy tools. They don't build them.

**Curiosity vs compliance.** SAL and Microsoft published a prompt engineering guide — free, Creative Commons-licensed. I downloaded it. Tried to follow it. Too cumbersome, too time-consuming for my workflow. I dropped it.

Then I got curious about how LLMs actually work under the hood. System prompts. Token prediction. What's really happening underneath the chatbot interface. Nobody told me to learn this. I just wanted to know.

That knowledge translated fast. I could pick up Claude Code and other cutting-edge tools because I understood what was underneath. I could look at legal tech products and tell which ones were just wrappers and which ones were doing something real.

One was compliance — someone else's framework for someone else's workflow. The other was curiosity — my own questions, on my own terms. I dropped the guide. The understanding I use every day.

## The Uncomfortable Part

Follow the PM's own logic for a moment.

1. AI will displace white-collar jobs. The PM said it. The fear is official.

2. Government responds — train lawyers to use vendor tools. Subsidise adoption. Write guidelines.

3. Lawyers become skilled consumers of whatever Harvey, or Microsoft, or the next platform offers.

4. When AI actually reshapes the legal profession — and it will — lawyers have no agency over how it happens. They can use the tools. They can't shape them. They can't build alternatives. They can't even experiment freely, because the data isn't open and the builder community doesn't exist.

The PM warned about displacement. The response makes lawyers more efficient passengers.

I don't think this is anyone's fault. Building adoption infrastructure is the rational first step. But if adoption is where we stop — if the innovation ecosystem never gets built, if open data stays locked behind web interfaces, if there's no support for lawyers who want to build — then we've answered the PM's warning with a plan that confirms it.

## What This Means for You

For solo counsels and small legal teams, this is especially sharp.

You probably can't afford the premium tier of most legal AI tools. You might qualify for PSG-Legal subsidies, but the tools on offer are vendor-selected, vendor-designed. PSG-Legal's 70% co-pay and $50K tax deduction cap? Those thresholds assume firms spending $500K+ on AI. Most solo counsels won't hit them. These programmes are aimed at larger corporations, not individual spending. Six months of free premium tools? Nice. But what happens after? Renewal pricing for tools that cost $800-1,200/seat/month — and most small firms don't have that cash flow.

If the vendor pivots, you pivot. Microsoft changes Copilot pricing from $30 to $50/seat next quarter? You can't switch. Your workflow history is locked in. Your team's prompts are locked in. You're stuck with whatever the vendor decides to charge. If the vendor's AI hallucinates — and at 17-33% for even bespoke tools, it will — you're the one who catches the consequences.

The Budget 2026 measures genuinely help. Take the tax deductions. Take the free training. Read SAL's prompt engineering guide — it's good, and it's free.

But also: start tinkering. You don't need to write code. Spend an hour understanding what a system prompt actually does. Ask a colleague what they've tried with AI — and share what you've tried. Attend a legal tech meetup. Try automating your most repetitive task with whatever tools you already have. Build a prompt library for your specific practice area, even if it's just a shared document.

You don't need a free weekend. You need thirty minutes of curiosity.

The lawyers who'll thrive aren't the ones who adopt AI fastest. They're the ones who understand it deeply enough to shape how it works for them.

That's the difference between the passenger seat and the driver's seat.

**Footnotes**

[1] Varun Magesh et al., "Hallucination-Free? Assessing the Reliability of Leading AI Legal Research Tools," *Journal of Empirical Legal Studies* (2025), https://dho.stanford.edu/wp-content/uploads/Legal_RAG_Hallucinations.pdf
