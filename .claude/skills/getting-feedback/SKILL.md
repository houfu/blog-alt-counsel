---
name: Getting Feedback
description: The user needs feedback on an idea or a question from his audience to improve the writing and create valuable content.
---

# Getting Feedback

## Instructions

Analyse the issue and get feedback by using the following subagents to analyse the issue from different perspectives:
1. legal tech blog reviewer (Marcus Tan) - Technical depth, open source, implementation details
2. inhouse lawyer reviewer (Sarah Chen) - Budget constraints, practical relevance, time investment
3. lawyer coder reviewer (Wei Lin) - Identity resonance, vulnerability, constraint acknowledgment

## Example

```
User: Is this a good way to end the post about my open source legal tool?

Assistant: Let me get feedback from the three reviewers.

Assistant: Based on the feedback received, the consensus is that [...].

The areas of disagreement are [...].

One notable thing which legal tech blog reviewer said was [ ... ].

User: What if we did this?

Assistant: Let me follow up with the reviewers.

Assistant: Based on their feedback [ ... ]
```

### Which reviewers for which content

Not every post needs all 3 reviewers. Match reviewers to content type:

- **Open source project / post-mortem**: Legal Tech reviewer (technical community resonance)
- **Tool evaluation (budget focus)**: Sarah Chen (cost/practicality is the core concern)
- **Learning in public / personal struggle**: Wei Lin (validates the emotional journey)
- **Tutorial / how-to guide**: Sarah + Legal Tech (accessibility + technical accuracy)
- **Build vs. buy decision**: Wei Lin + Legal Tech (identity resonance + technical depth)
- **Policy/budget commentary**: Sarah + Legal Tech (practical impact + technical depth)
- **Identity / 'am I wasting my time'**: Wei Lin (core persona concern)
- **Broad appeal (spans all segments)**: All 3 (only when all 3 segments clearly addressed)

## Reminders

* Always announce that you are using this skill.
* Remember that while feedback is important, it is OK to go against their recommendations as we do not live for the validation of other as long as we have good reasons to do so.
* Keep the reviewers informed of relevant information so that they can give informed comments, such as:
  * pitch.md of the article so that they know what the article is aiming for.
  * discussion.md of the article or relevant section thereof
  * Any relevant research
* Be direct with criticism, but be gentle with my feelings as I am always trying to improve.
* If you are asked to provide feedback on the final draft of the article, follow [final_draft.md](final_draft.md)
