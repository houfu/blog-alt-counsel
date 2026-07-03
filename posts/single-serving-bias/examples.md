# Real-World Examples: Single-Serving Legal Work

This file captures concrete examples of bespoke/single-serving work for potential use in the article.

---

## Example 1: Contract Review Comparison Table

**Date:** 2025 (recent)
**Status:** Real client work, completed

### The Task

Review several competing firms' general terms for recruitment agency contracts. Formats varied significantly across contracts.

### Traditional Approach (What Would Have Been Done)

Email with narrative paragraphs comparing the contracts term by term.

Example of what this might look like:
```
Hi [Client],

I've reviewed the three recruitment agency contracts. Firm A's indemnity
clause is more favorable because... In comparison, Firm B's approach to
liability... Firm C takes a different position on...

Regarding termination provisions, Firm A requires 30 days notice while
Firm B...

[etc.]
```

### Bespoke Approach (What Was Actually Done)

Created a comparison table with:
- Key contract terms as rows
- Each firm as columns
- AI-generated summaries of each firm's position on each term
- Final column with overall comments/assessment for each term

Used AI to read each contract and populate the table with key points.

### Time Investment

**~1 hour total:**
- Developing the table structure/premise
- Fine-tuning the prompt to extract key points consistently
- Reviewing and refining AI summaries

### Why User Believed It Was Better

**A) Visual Comparison**
- All firms' positions on each term visible side-by-side at a glance
- No need to read through paragraphs to find comparisons

**B) Scannability**
- Client could quickly locate specific terms they cared about
- Table of contents functionality (row headers)

**C) Decision-Making Speed**
- Obvious which firm had better terms on each point
- Easier to identify deal-breakers or must-haves

**D) Completeness**
- Table structure ensured same points covered for each contract
- Narrative approach might accidentally skip comparing certain terms

### Client Reaction

**Polite acknowledgment** - Said "thanks" and moved on with their decision.

No explicit feedback on format. No questions about the presentation. Just used the analysis to proceed.

### Did User Ask for Feedback?

**No** - Considered asking ("Was this table format helpful?") but decided against it.

**Reason:** Didn't want to press the client or make them feel like they needed to evaluate the format choice. It was the user's experiment, not something to burden the client with.

### Would User Do It Again?

**Yes, absolutely** - Still believes table format is superior to narrative email.

**Constraint:** Time is the only barrier, not lack of validation.

If similar task came up and user had 1 hour available, would create table format again. If pressed for time (under 30 minutes available), might fall back to narrative email.

### What This Example Illustrates

**The Uncertainty Paradox:**
- User has strong rational reasons to believe bespoke is better (A-D above)
- Client reaction was neutral (polite "thanks")
- Can't validate without making client feel like test subject
- **User still believes it's better and would do it again**
- Time investment (1 hour) is the real constraint, not lack of validation

**Key Insight:**
- If creation time = 30 minutes instead of 60, user would do this even more readily
- Conviction about quality overrides need for explicit client validation
- But can't scale experimentation without reducing time investment

**Uncertainty That Remains:**
- Does the client actually make better/faster decisions with the table?
- Would they have preferred narrative email format?
- Do they even notice the format, or just consume the substance?
- Would they pay more for table format vs. narrative (if billing separately)?

**Questions This Raises for the Article:**

1. **Measurement Challenge:** How do you validate bespoke is better without making client feel like guinea pig?

2. **Permission Structure:** Is 1 hour "worth it" without validation? What if it were 30 minutes? 15 minutes?

3. **Feedback Mechanism:** What's a non-awkward way to ask "which format serves you better"?

4. **Time Threshold:** At what point does creation time drop low enough that you experiment freely without validation?

5. **Professional Judgment:** Is it okay to create bespoke work based on professional conviction (A-D reasons) even without client validation?

---

## Example 2: 3-Page M&A Term Sheet Prompt

**Date:** 2024
**Status:** Competition submission (2024 SAL/Microsoft Prompt Engineering Competition)
**Source:** Saved as PDF in `/workspace/posts/prompt-engineering-wrong/2024 - Prompt.pdf`

### The Task

Competition scenario: Prepare a comprehensive term sheet for acquisition of Showytunes Pte Ltd (local SME in entertainment technology) by Netcore Limited (multinational corporation).

**Specific concern:** Management particularly concerned about treatment of existing employees of target.

**Output requirement:** HTML page (not traditional Word document).

### Traditional Approach (What Would Have Been Done)

Standard M&A term sheet template:
- Word document with standard sections
- Generic clauses adapted for this deal
- Text-based format
- Minimal visualization
- Standard legal language

### Bespoke Approach (What Was Actually Created)

**3-page detailed prompt** instructing AI to create:

**0. Branding and Page Design**
- Custom SVG logo for Acquirer
- Brand and accent colors
- Responsive, modern HTML page design

**1. Basic Information**
- Key details of parties
- Nature of deal
- Specific concerns
- Relevant parties

**2. Executive Summary** (with chain-of-thought reasoning)
- Step 1: Generate industry outline and legal risks (in `<thinking>` tags)
- Step 2: Analyze acquirer's objectives, target's interests, concerns and countermeasures (in `<thinking>` tags)
- Step 3: Generate concise narrative summary highlighting benefits, risks, strategic value

**3. Deal Timeline**
- Step 1: Generate key milestones (in `<thinking>` tags)
- Step 2: Identify risky milestones (in `<thinking>` tags)
- Step 3: Output horizontal timeline with color-coded/emoji-highlighted risks and footnotes

**4. Key Agreement Terms** (with extensive chain-of-thought)
- Step 1: Industry legal/compliance risks outline (in `<thinking>` tags)
- Step 2: Party interests, unique aspects, risk mitigation strategies (in `<thinking>` tags)
- Step 3: List of 9 key terms including Purchase Price, Payment Terms, Employee Retention, IP Rights, etc. (in `<thinking>` tags)
- Step 4: For EACH term, generate clause + legal risks + countermeasures + risk level (in `<thinking>` tags)
- Step 5: Output 4-column table (S/N, Clause, Description, Key Legal Risks) with color-coded rows:
  - Red (High Risk)
  - Yellow (Neutral)
  - Green (Low Risk)
- Step 6: Verify output matches Steps 1-4 analysis

**5. Deep Dives**
- Dedicated section on employee retention (the specific concern)
- Risk mitigation strategies

**6. Acknowledgement**
- Signature section
- Non-binding disclaimer

**X. Final Requirements**
- Hide all `<thinking>` content
- Anonymize company identifiers
- Singapore jurisdiction (PDPA 2012, Companies Act 2004, Competition Act 2004, Employment Act 1968)
- Confidentiality notices, watermarks, classification levels

### Time Investment

**Unknown precisely, but significant** - developing 3 pages of detailed, structured prompt with:
- Multiple chain-of-thought steps
- Specific formatting requirements
- Visual design specifications
- Risk analysis frameworks

### Why User Believed It Was "Wasteful"

**Single-use nature:**
- Only works for THIS specific deal (Netcore acquiring Showytunes)
- Can't reuse for other M&A transactions without significant modification
- Deal-specific: entertainment technology sector, employee retention concern, Singapore jurisdiction
- Not a general-purpose M&A term sheet generator

**Time investment for one-off use:**
- 3 pages of carefully crafted instructions
- Multiple thinking steps designed for this scenario
- Specific requirements (HTML, SVG logo, color coding, etc.)

### But Was It Actually Wasteful?

**Innovations over traditional approach:**

**Visual/Interactive:**
- HTML page vs. Word document
- Custom branding and design
- Color-coded risk table (red/yellow/green)
- Horizontal timeline with visual risk indicators
- SVG logo creation

**Analytical Depth:**
- Chain-of-thought reasoning at each step
- Industry-specific risk analysis
- Party interest analysis
- Risk mitigation strategies
- Singapore legislation references

**Customization:**
- Dedicated deep dive on employee retention (the specific concern)
- Entertainment technology sector focus
- Balanced interests of both parties

**Client Experience:**
- More "impressive" than standard Word template
- Visual risk assessment at a glance
- Professional, modern presentation
- Scannable format

### What the Prompt Actually Produced

**Output:** 4-page HTML term sheet (not Word document)

**Visual Characteristics:**

**Layout & Design:**
- Clean, professional formatting with structured hierarchy
- "STRICTLY CONFIDENTIAL" headers on all pages
- Combination of numbered sections, tables, bullet points
- Logical information flow with distinct sections

**Visual Elements:**

1. **Timeline Diagram (Page 2):**
   - Shows 5 phases: Term Sheet → Due Diligence → SPA Signing → Closing → Integration
   - Timeline span: October 2024 to Q2 2025 (8 months)
   - Numbered circles (1-5) connected by lines
   - Warning symbols (⚠️) marking "High Risk" phases (Due Diligence and Closing)
   - Visual risk indicators embedded in timeline

2. **Risk-Coded Table (Page 3):**
   - 5 rows covering: Purchase Price, Payment Terms, Employee Retention, Intellectual Property, Data Protection
   - Color coding:
     - High Risk (red/pink rows)
     - Neutral Risk (yellow rows)
     - Low Risk (green/blue rows)
   - 4 columns: S/N, Clause, Description, Key Legal Risks
   - Legend explaining color coding

**Typography:**
- Professional sans-serif font
- Bold, larger section headers
- Redacted information shown as "[REDACTED]"
- Consistent spacing and indentation

**Content Included:**

**Transaction Details:**
- Acquirer: Netcore Limited (Singapore multinational)
- Target: Showytunes Pte Ltd (Singapore entertainment tech company)
- Deal Type: 100% share acquisition
- Primary Concern: Employee retention and integration (featured prominently throughout)

**Key Terms:**
- Purchase price in SGD with working capital adjustments (redacted amount)
- Payment: 80% cash at closing, 20% deferred earn-out based on revenue targets
- 24-month minimum employee retention period
- Full IP transfer including patents and trade secrets
- PDPA compliance requirements

**Legal Framework:**
- References Singapore's Competition Act 2004, PDPA 2012, Employment Act 1968
- Singapore jurisdiction-specific provisions

**Signature Section:**
- Dual signature blocks for both parties
- Non-binding disclaimer

**Overall Impression:** Sophisticated, corporate M&A appearance with clear risk highlighting and emphasis on employee retention aspect throughout. More visually engaging and scannable than traditional Word document template.

### Competition Outcome

**Disqualified for missing deadline** - never got to test whether the approach would have impressed judges or won the competition.

**What was never validated:**
- Would judges have been impressed by HTML format vs. Word?
- Did the timeline diagram communicate risks better than text?
- Was the color-coded risk table helpful or just "pretty"?
- Did the visual design make it easier to evaluate the deal?
- Would this have won over a well-executed traditional template?

### Would User Do It Again?

**Uncertain** - this is the example that triggered the article idea.

Initial reaction: "Felt wasteful - why build something that only works once?"

After Sam Harden's article: "Maybe the 'one-time use' criticism was wrong. If creation cost is low enough, single-serving is viable."

### What This Example Illustrates

**The Core Uncertainty:**
- Spent significant time creating highly customized, visual, interactive term sheet prompt
- Never got validation (disqualified before results)
- Still don't know if it was "better" than a template approach
- Felt wasteful because not reusable

**But Also:**
- Demonstrated capabilities AI can deliver (visual design, chain-of-thought, risk analysis)
- Showed what's POSSIBLE beyond standard templates
- Created something tailored to specific deal concerns
- Would have been "impressive" if it worked

**Key Insight:**
If this prompt could be created in 30 minutes instead of [unknown longer time], would the "wasteful" feeling disappear? Is reusability only important when creation cost is high?

**Uncertainty That Remains:**
- Would judges have been impressed by the HTML format vs. traditional Word doc?
- Did the visual risk coding add value or just "look pretty"?
- Was the chain-of-thought reasoning overkill or actually beneficial?
- Could a template have won the competition just as well?
- Should the time have been spent on a more generalizable M&A prompt framework?

**Questions This Raises for the Article:**

1. **Capability Gap:** The prompt shows AI can create visual, interactive, analytical outputs - but we default to text/documents. Why?

2. **Reusability Bias:** Is the "can't reuse it" criticism valid, or a holdover from when creation cost was high?

3. **Validation Without Deployment:** How do you know if bespoke is better when you never get to deploy it (competition disqualification)?

4. **Permission to Experiment:** Would you create this 3-page prompt for a REAL client deal, or only for a competition where "innovation" is explicitly valued?

5. **Time Threshold:** At what creation time does single-serving become obviously worth it? 30 minutes? 15 minutes? 5 minutes?

---

## Comparison: Example 1 vs. Example 2

| Aspect | Contract Review Table (Ex 1) | M&A Term Sheet Prompt (Ex 2) |
|--------|------------------------------|------------------------------|
| **Context** | Real client work | Competition submission |
| **Time** | ~1 hour | Unknown (significant) |
| **Output** | Table format | 3-page prompt → HTML page |
| **Validation** | Neutral client response | None (disqualified) |
| **Reusability** | Could reuse for similar contract reviews | Only for this specific M&A deal |
| **User Conviction** | Would absolutely do again | Felt wasteful, uncertain |
| **Constraint** | Time only | Time + uncertainty about value |
| **Innovation Level** | Moderate (table vs. email) | High (HTML, branding, visual risk coding) |
| **Client Feedback** | Didn't ask (didn't want to press) | N/A (never deployed) |

**Pattern:**
- Example 1: Deployed, neutral response, still believes it's better, would do again
- Example 2: Never deployed, no validation, felt wasteful, triggered article idea

**Key Difference:**
Example 1 was validated by DEPLOYMENT (client used it to make decision, even if response was neutral). Example 2 was never deployed, so couldn't even get neutral validation. The lack of ANY feedback makes uncertainty worse.

---

## Potential Examples from Research

From Rebecca Fordon's work (see research.md):
- Boolean search game (30 minutes)
- Client intake form with geographic validation
- Thanksgiving checklist app

These could be referenced as comparison points (US legal context) but Example 1 above is the user's own Singapore practice experience.
