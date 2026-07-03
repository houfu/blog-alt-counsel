---
title: "When No Lawyers Meets a 414-Fragment Employment Judgment"
slug: "ect-no-lawyers-zeeker"
tags: ["Law", "LegalTech", "Singapore", "zeeker"]
status: draft
visibility: public
featured: false
github_folder: "ect-no-lawyers-zeeker"
---

I saw it first on LinkedIn, huddled between conversations between leading employment lawyers in Singapore. That's when you know it's big. 

Employees had used their corporate benefits to spend on suspicious items like vitamins, supplements and skincare. One claimant had submitted 62 reimbursement claims worth nearly $10,000. There was a scheme to spend under $200 to avoid scrutiny. About 40 employees were dismissed after the internal review. Yet, the Employment Claims Tribunal (ECT) found that the employer had not proven dishonesty, recklessness, or wilful blindness. Those who had challenged their ex-employee in the ECT won competition and now wait for the results of an unavoidable appeal.

Justice served? I won't blame you for hesitating to answer. 

This case also happens to be the first case from the ECT that has released a written judgement since it was set up in 2017. This isn’t surprising -- the ECT was meant to be a low cost, speedy forum that prioritises settlement between parties. There are also no lawyers, as the judge is expected to be legally qualified to guide the parties.

So if you think that the first written judgment will be a great display of the benefits of most cases in the ECT, then you will have to contend 

## The first query, and the absence I did not expect

The lookup against the `judgments` table is structured. Conceptually:

```
zeeker.judgments where citation = "[2026] SGECT 1"
```

The literal MCP invocation is a typed function call the AI client makes for you; the line above is the request shape. The row came back with what I expected and one absence I did not.

- citation: [2026] SGECT 1
- case name: JGP v JGQ
- case number: ECT/11019/2024
- decision date: 15 May 2026
- subject tags: disciplinary procedures; discretionary bonuses; "wrongful dismissal"
- fragments: 414
- summary: not yet generated

The missing summary changed the next move.

If a generated summary had been there, I would have read it, formed a fast impression, and probably stopped. The absence forced me to do something better, which is search inside the judgment itself. Zeeker breaks each judgment into ordered fragments — roughly paragraph-level — and stores them in a `judgments_fragments` table keyed to the case's `source_url`. With 414 of those to choose from, I needed an entry point.

I picked a phrase reported elsewhere as something the tribunal had said.

## The paragraph that reframed the search

I ran a fragment search against the case's `source_url` for "act in-person". Three matches came back. The one that stopped me was paragraph [4].

In its own voice, the tribunal explained that these six cases had to be decided in a setting where parties are required to act in person. That meant the tribunal did not benefit from opposing counsel's arguments, especially on matters of law. It nevertheless considered it crucial to write a doctrinal exposition because the law needed clarification — given the volume of wrongful dismissal claims and the risk of inconsistent outcomes.

I read that paragraph twice.

The first time, I noticed what it said. The second time, I noticed what it admitted. A tribunal designed to be lawyer-light was producing a 414-fragment judgment because it had to, and was telling readers it was doing so without the help any contested court of law would have — opposing arguments.

That is not a complaint. The tribunal is naming the institutional setting. But naming it changes what the case is.

It is no longer just a wrongful dismissal claim about medical benefit abuse. It is also a record of what happens when a forum designed for simplicity has to administer doctrine, with parties operating largely from intuition.

The Zeeker workflow had paid for itself in ten minutes. I had not yet read a single comment from anyone.

## The two meanings

Paragraph [4] pointed at doctrine. I needed to find where the doctrine actually sits.

A second fragment query — this time against the judgment's annexes — surfaced A.48. There, the tribunal acknowledged that "wrongful dismissal" in Singapore now covers two different things. There is the common law action, which lives in the courts and depends on a breach of contract. There is the statutory claim under section 14(2) of the Employment Act, which lives in the ECT and asks whether the dismissal was without just cause or excuse.

Then a sentence I underlined: the boundaries between substance, process, forum, and remedy are not consistently understood.

That sentence is unusual in a tribunal-level judgment. It is the bench saying, mid-decision, that the underlying doctrinal map is not settled.

The case stopped being about whether claiming skincare was wrong. Whether the conduct was wrong was the easy question. The harder questions were which reason the employer had chosen to rely on, who bore the burden of proving it, what evidential standard applied, and which of the two "wrongful dismissal" doctrines was running.

Reading paragraph [4] and Annex A.48 in fifteen minutes, in the same window I was already in, is what Zeeker actually changes.

## What others said, once I went looking

Only at that point did I open a browser.

The labels surfaced by the fragments — wrongful dismissal, just cause or excuse, no-reasons dismissals, disciplinary procedure — gave me search vocabulary I would not have had after reading CNA. With those, I found the conversation that had already happened.

Nicholas Ngo, an employment lawyer, had posted on LinkedIn. His read was doctrinal: wrongful dismissal now lives in two places, the statutory test is "just cause or excuse", and the judgment raises hard questions about no-reasons dismissals and what an employer's silence now costs evidentially. His framing tracked what Annex A.48 had told me, with a practitioner overlay — silence costs you evidentially even when the statute does not require you to give reasons.

Clarence Ding, another employment lawyer, had posted disagreeing with the outcome. He thought the tribunal had erred and welcomed the employer's leave-to-appeal applications. But the part of his post I held onto was this: he still agreed that statutory wrongful dismissal had become complex and unclear and that more published judgments would help. Two lawyers, in public, disagreeing about the result. Both implicitly agreeing the doctrine is hard.

Outside the bar, the reaction was different. Chris J Reed, writing for a business audience, called the result a travesty and focused on the intuitive unfairness of claims involving vitamins and skincare. CNA gave the facts cleanly and explained the dishonesty-not-proven point. The Independent Singapore turned the story into a workplace-policy lesson.

By the time I was done reading, three frames were on my screen. The moral frame: they claimed skincare. The HR frame: policy controls failed. The legal frame: what reason did the employer give and what did they have to prove? All three are defensible. Only the third is the one the tribunal actually had to decide on.

## The thing I noticed half an hour in

What I was watching was a single judgment being read three different ways by three different communities, each defensible inside its own frame.

But that is not what I noticed. What I noticed was that one side of the case had arrived with the legal frame already loaded.

The employer's case, as the tribunal recorded it, was framed around serious breaches committed intentionally, wilfully, or dishonestly. That is not a vocabulary people reach for by accident. Somebody — a compliance lead, an HR director, in-house counsel, an outside employment firm — had picked the legal label that they thought matched the conduct. The investigation, the disciplinary process, and the dismissal letters were then built around that label. That is what "framing the file" means in a Singapore HR context.

The choice was not free. Picking "dishonest" set the evidential bar. The tribunal found that bar had not been cleared. Ms C had committed a lesser wrong — negligent reliance on practice, not dishonesty — and a lesser wrong was not just cause or excuse for dismissal.

<!-- HUMAN: An in-house anchor lands hardest here. Have you drafted a framing memo yourself? Watched the legal vocabulary enter an HR investigation before anyone realised it was a legal choice? Even one sentence of your own experience pulls this paragraph from observation to authority. AI cannot ghostwrite that line credibly. -->

The employee did not arrive with that machinery. There are safeguards before the gap matters in the hearing room — TADM mediation is compulsory, the CCT Friend Scheme is available with approval, unions can represent some members. But none of them exists to help a claimant work out which doctrine her claim sits under, what the employer chose to allege, or why that choice mattered for what she had to prove.

<!-- HUMAN: Singapore practitioners know which of these safeguards actually function in practice and which exist on paper. One calibrating sentence from your own reading — TADM, the Friend Scheme, union assistance — would do more here than the neutral listing. -->

For a solo counsel watching from the side, that asymmetry is the practical fact. It is also where Zeeker sits next to a paid tool like LawNet, not as a replacement, but as a different first hour. LawNet remains where I go for citator treatment and authority status — its tribunal-level coverage at the ECT level has historically been patchy, but for reported decisions it is the answer. <!-- HUMAN: One sentence here about your actual LawNet experience with ECT material would calibrate this better than I can. --> What Zeeker changed for me was the path from "I saw a headline" to "I know what the judgment is actually about", inside an AI workspace I already had open.

## Search, structure, compare, escalate — labelled afterwards

I have written four-verb research frameworks before. They rarely survive contact with a specific case. So instead of writing a fresh checklist, here are the labels for what the last hour actually was.

**Search.** I started with a citation, not a keyword. "[2026] SGECT 1" got me the row in one query. Without a citation, the next-best vocabulary is the judgment's own — but I did not have that vocabulary until paragraph [4] gave it to me.

**Structure.** Once paragraph [4] and Annex A.48 had landed, I had buckets — section 14(2) Employment Act, common law wrongful dismissal, Tripartite Guidelines, no-reasons-dismissal doctrine, burden of proof, evidential silence. None of these were mine. They came out of the case.

**Compare.** Ngo and Ding both spoke to the doctrine. Reading them after the fragments — instead of before — meant I could compare what they said against what the judgment had already given me. Before the fragments, I would have absorbed Ngo's framing as authoritative.

**Escalate.** What I still cannot answer from this session: will the leave-to-appeal applications succeed, and what would any superior court reasoning add? Does the discretionary-bonus reasoning extend to commission claims? Has the section 14(2) test been reconsidered anywhere since? Those are paid-database questions, citator questions, and advice questions. They are not first-pass questions. Zeeker was never going to answer them.

## What was actually different

The 2017 launch release said the ECT would not be a forum for complicated employment claims. [2026] SGECT 1 is a forum for exactly that. The tribunal is making the best of it. The lawyers are making the best of it on LinkedIn. The employees, mostly, made the best of it in person.

Access to a tribunal is not the same as access to its map.

For solo counsels and small legal teams sitting on the side, the hour above cost me nothing beyond an AI subscription I already had. That is not a revolution. It is a different first hour.

What you do with the hour you save is the part that still needs a lawyer.
