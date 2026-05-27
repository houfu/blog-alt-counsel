---
title: "The Forum That Said You Don't Need a Lawyer Just Explained Everything"
slug: "ect-no-lawyers-zeeker"
tags: ["Law", "LegalTech", "Singapore", "zeeker"]
status: draft
visibility: public
featured: false
github_folder: "ect-no-lawyers-zeeker"
post_id: "6a16d7581475040001ada4a9"
---

I saw it first on LinkedIn huddled between conversations between leading employment lawyers in Singapore. That's when you know it's big.

When lawyers are publicly arguing about a tribunal decision, it usually means the case touched something harder than the facts. About 40 employees in this case were dismissed following an internal medical-benefit review. Eight challenged their dismissals at the Employment Claims Tribunal. Six won. On the face of it, that’s a stunning result.  

The judgment that decided those six cases — `JGP v JGQ [2026] SGECT 1` — is the first published ECT written grounds since the tribunal launched in 2017. At 414 paragraphs, it is also one of the most legally dense documents a Court other than the higher courts would produce. The tribunal tried to set out in painstaking detail the process and the legal framework concerning unfair dismissals.

Most people who believe they are unfairly dismissed would not read this judgment — remember, no lawyers are allowed there. Am I going to succeed? Is it even worth trying? How do I prepare? Should I subscribe to LawNet? What they face is a wall of text in doctrinal language.

I wondered if Zeeker could provide a better way.

## What three communities saw

The facts, quickly: employees had submitted medical-benefit claims for vitamins, supplements, and skincare. One had filed 62 reimbursement claims worth nearly $10,000. There was evidence of a practice of keeping claims under $200 to avoid scrutiny. About 40 employees were dismissed. Eight challenged. Six succeeded. The employer has filed applications seeking leave to appeal all six decisions.

Three communities read that result three different ways.

The general public and business commentators focused on the conduct. They claimed skincare. The intuitive reaction — and Chris J Reed called it plainly, a travesty — was that the outcome was wrong.

HR and compliance readers focused on the process. The employer's internal controls had failed. Policies were unclear and inconsistently enforced.

Employment lawyers focused on something else entirely. Nicholas Ngo explained on LinkedIn that "wrongful dismissal" in Singapore now lives in two different legal frameworks — a statutory claim at the ECT under section 14(2) of the Employment Act, and a common law claim in the courts — and that the tribunal was working through how burden of proof, evidential silence, and no-reasons dismissals operate under the statutory test. Clarence Ding disagreed with the outcome but agreed the law is hard and that more published judgments are needed.

Two lawyers, publicly, both saying the doctrine is unclear. Disagreeing about the result.

Only the third frame is what the tribunal actually decided. The question was never whether the conduct was wrong. It was whether the employer had proven the specific reason it had chosen to rely on — dishonesty — and whether a lesser wrong, negligent reliance on practice, was just cause or excuse for dismissal.

That distinction is invisible unless you can read the judgment.

## What the ECT was built for

The ECT launched on 1 April 2017. The State Courts release at the time was explicit: the tribunal would be low-cost, speedy, and lawyer-free. It also said ECT would not be a forum for complicated employment claims. That was the design rationale.

`[2026] SGECT 1` explains, in paragraph [4], what the same forum manages in practice nine years later.

Tribunal Magistrate Jared Kang noted that the six related cases had to be decided in a setting where parties are required to act in person. That meant the tribunal did not benefit from opposing counsel's arguments, especially on matters of law. He nevertheless felt it was crucial to write a doctrinal exposition — because the law needs clarification, and the volume of wrongful dismissal claims creates real risk of inconsistent outcomes.

414 paragraphs. No opposing counsel. Written anyway.

In Annex A.48, the tribunal put it plainly: the label "wrongful dismissal" now covers two different things. The common law action. The statutory claim. And then, mid-decision: the boundaries between substance, process, forum, and remedy are not consistently understood.

That sentence, in a tribunal judgment, is unusual. It is the bench saying the underlying map is unsettled.

Neither the ECT's design nor the tribunal's candour is wrong. The ECT may be the only forum some employees can realistically use. But "no lawyers in the room" was never the same as "no legal complexity in the file." The 2017 launch assumed the two would track each other.

They don't.

There is also an asymmetry the design never named. JGQ — the employer in this case — is a company. Companies facing ECT claims often have HR teams who have already reviewed the file, in-house counsel who advised on the dismissal process, or external employment lawyers retained after the complaint was filed. None of that advice appears in the tribunal record because there are no lawyers in the room. But it shaped what was in the file before the hearing. The 2017 design removed lawyers from view. It did not remove them from the picture.

## The information gap

Someone who just received a dismissal letter and wants to understand what they walked into needs to know, at minimum:

- What reason did the employer give for dismissal?
- What did the employer need to prove about that reason?
- Which framework applies — ECT or the courts?
- What remedy is actually available?

What they find by Googling: MOM guidance, HR blog posts, a CNA article about skincare. None of that is the tribunal speaking in its own voice.

The judgment is publicly available at eLitigation. It is also a 414-paragraph document written in doctrinal language, where the key paragraph on institutional constraint sits at [4], and the two-framework problem sits in Annex A.48. Finding the document and understanding what it says are two different things.

Zeeker — a Singapore legal database I built — closes that gap. And the way it does it is specific.

[When Institutions Enter Your Passion Project Space](https://www.alt-counsel.com/when-institutions-enter-your-passion-project-space/)

<!--members-only-->

## What you can actually ask

The Zeeker MCP (Model Context Protocol) server connects Singapore legal data to an AI workspace you already have open — Claude, ChatGPT, or any MCP-capable client. MCP is a connector standard that lets AI tools query external databases directly, without copying and pasting documents. The queries are in plain language. The answers land in plain language.

Here is what the workflow actually looks like, starting from the citation. Once the connector is set up — a one-time step that takes about five minutes — the research workflow itself runs in under fifteen.

**Installing the connector**

Hook up your Claude Desktop app to the Zeeker MCP by adding it as a new connector under 1) Customize, 2) Connectors and 3) click the plus sign to add a connector. Use the url: `https://mcp.zeeker.sg/mcp`.

![Adding the Zeeker MCP connector in Claude Desktop](https://storage.ghost.io/c/33/4e/334edc26-d66c-4112-a0d8-6528c3cd17c4/content/images/2026/05/Add-MCP.gif)

**For other clients**: The Zeeker MCP is a Remote MCP with the url `https://mcp.zeeker.sg/mcp`. You will probably need to add a custom MCP server. Currently, no passwords or authentication are needed to access it — and Zeeker does not log your queries.

**Retrieve the case**

Once you have access to Zeeker MCP, you can use natural language to search the database. 

```
I'm trying to get the case with the citation [2026] SGECT 1 on zeeker.
```

The quality of results depends on the model you use. Claude Sonnet — available on the standard $20/month Claude plan — handles citation lookups and fragment retrieval well. Claude Opus, available on higher-tier plans, performs better on complex multi-step reasoning, such as comparing several cases and synthesising an argument across them.

What comes back: case name (JGP v JGQ), case number (ECT/11019/2024), decision date (15 May 2026), subject tags (disciplinary procedures, discretionary bonuses, wrongful dismissal), a source URL, and 414 fragments. Zeeker breaks each judgment into numbered fragments — roughly paragraph-aligned chunks — which makes targeted retrieval possible without feeding the entire document to the model at once.

[Building data.zeeker.sg: Technical Architecture](https://www.alt-counsel.com/data-zeeker-sg-part-2a-architecture/)

![Zeeker citation lookup result for JGP v JGQ [2026] SGECT 1](https://storage.ghost.io/c/33/4e/334edc26-d66c-4112-a0d8-6528c3cd17c4/content/images/2026/05/zeeker-citation-lookup.png)

Most of the data (like citations and subject tags) comes from what is in the official link, but enriching that data is something I am continuously working on. For example, I’ve been generating summaries for judgments using AI — it does the job, but it is still a work in progress (there are more than 10,000 judgments to go through).

Once the data is available in Claude.ai or another MCP-capable client, it is straightforward to present it in more readable ways.

![Claude presenting the case data in a readable summary](https://storage.ghost.io/c/33/4e/334edc26-d66c-4112-a0d8-6528c3cd17c4/content/images/2026/05/claude-case-summary-display.png)

**Ask what the employer needed to prove**

The Zeeker MCP provides access to the full judgment as searchable fragments, so you can ask targeted questions rather than reading all 414 paragraphs. The query is plain language — something like "What did the employer need to prove to justify dismissal in this case?"

![Fragment search result: what the employer needed to prove for just cause](https://storage.ghost.io/c/33/4e/334edc26-d66c-4112-a0d8-6528c3cd17c4/content/images/2026/05/zeeker-just-cause-fragment-search.png)

The fragment retrieval returns the tribunal's working definition of "just cause or excuse": the employer must prove that dismissal was justified by the conduct actually alleged, to the applicable standard. The conduct alleged was dishonesty. The tribunal found that bar unmet — the employee had committed a lesser wrong, negligent reliance on practice, not dishonesty — and a lesser wrong was not just cause or excuse for dismissal. That is the answer to the question most people actually had about this case, in the tribunal's own words.

**Ask what arguments are more successful than others in Singapore**

A potential litigant who encounters this judgment may want to get straight to the point: is this case helpful to my situation? With the judgment text available through Zeeker, Claude can give a detailed account of how it applies to a specific question.

![Claude's assessment of how the case applies to a potential claimant](https://storage.ghost.io/c/33/4e/334edc26-d66c-4112-a0d8-6528c3cd17c4/content/images/2026/05/claude-case-helpfulness-analysis.png)

Two things stand out in the response. First, Claude defers parts of the analysis to “a lawyer or employment law specialist.” Zeeker includes a disclaimer that its content is not legal advice; Claude adds its own. This is appropriate — knowing what the tribunal decided is not the same as knowing whether you will win. Second, the response flags a “practical reality”: the monetary remedy for wrongful dismissal at the ECT is capped and may be limited. That is worth knowing before filing, and it has not changed with this judgment.

**Ask what adjacent cases look like**

A single judgment, however detailed, is not the whole picture. A key legal research skill is locating similar cases and reasoning about them — applying the precedent, or distinguishing it. From a claimant’s perspective, this all feeds one underlying question: will I win?

Zeeker can surface similar cases through natural language. I asked: “Are there any other materials similar to this case that might be helpful to my situation?”

![Similar wrongful dismissal cases surfaced by Zeeker](https://storage.ghost.io/c/33/4e/334edc26-d66c-4112-a0d8-6528c3cd17c4/content/images/2026/05/zeeker-similar-cases-search.png)

Zeeker returned five recent cases relating to wrongful and unfair dismissal, plus recent law firm commentary on the area. After a follow-up prompt asking for a direct comparison to my hypothetical, the AI worked through the cases and offered a structured assessment — which arguments were likely to succeed, and which faced headwinds. These are not predictions. They are the right questions to bring into the first hour of any ECT matter.

## Comparing Zeeker with what’s out there

**Paid databases like LawNet, WestLaw, LexisNexis**

LawNet and its competitors have depth and longevity behind them — comprehensive data, tested design, institutional credibility. Zeeker is 1 guy and his claw. That gap in coverage is real and I am not going to pretend otherwise.

What Zeeker has that LawNet does not: MCP access. There is currently no way to connect LawNet into Claude in the way Zeeker connects. That is a meaningful practical difference — LawNet users work with legal data in one window and AI in another, which is exactly how hallucinations creep in. Zeeker with AI integration is more flexible and more hallucination-prone than LawNet without AI integration. That is not a bug in either design. It is the actual trade-off, and it will matter more as AI adoption in legal practice grows.

Zeeker is also free. LawNet requires either a subscription or a trip to a public library. Zeeker is a proof of concept and pricing has not been decided — free for now because it is still being built.

[What I Learned at SMU's Legal Database Launch (And My Decision About zeeker.sg)](https://www.alt-counsel.com/what-i-learned-at-smus-legal-database-launch-and-my-decision-about-data-zeeker-sg-2/)

**Searching the web**

Claude and ChatGPT can search the open web directly. For basic context — news coverage, MOM guidance, law firm articles — that works. For legal reasoning, it tends to go wrong.

The web does not understand court hierarchy, how to resolve conflicts between cases, or what *stare decisis* means in practice. If you use a web search to construct legal arguments, it is easy to end up with authoritative-sounding claims a court would not accept. Zeeker is a curated index of sources selected for authority — judgments, practice directions, and legal commentary. It is far from complete. But it has a better chance of giving you the right legal landscape than a general web search, and that gap will widen as Zeeker’s coverage grows.

## Access isn't just entry to the room

The ECT gave employees somewhere to go without hiring a lawyer. That matters, and it was deliberately designed to matter.

But the first published ECT judgment exists because the tribunal decided the doctrine was unclear enough that it needed to say so in public, at length, without adversarial submissions to help it work through the law. The same institutional design that kept lawyers out of the room required the tribunal to do more of the explanatory work itself.

That work is now 414 paragraphs long. It is publicly available. And you can ask it questions.

For solo counsels and small legal teams, the first pass on a dense new judgment — what framework applies, what the employer needed to prove, where the adjacent cases sit — now costs an AI subscription you already have. That is not a revolution. It is the forum's own reasoning, made accessible.

What you do with the map still needs a lawyer. What you do with the blank page no longer does.

*Note: the employer has filed applications for leave to appeal all six decisions. Check the appeal status before relying on the outcome in your own matter.*
