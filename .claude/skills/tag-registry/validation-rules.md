# Tag Validation Rules

**Purpose**: Define the rules for validating and suggesting tags to prevent tag sprawl and maintain consistency.

## Validation Workflow

When suggesting tags for a post, follow this process:

```
1. Analyze post content
   ↓
2. Identify potential tags (4-6 candidates)
   ↓
3. Check against canonical registry
   ↓
4. Apply validation rules
   ↓
5. Present 3-4 approved tags
   ↓
6. Handle any new tag requests
```

## Core Validation Rules

### Rule 1: Tag Count Limits

**Required**: Every post must have **3-4 tags**.

- ✅ 3 tags: Acceptable
- ✅ 4 tags: Ideal
- ❌ 2 tags: Too few, not enough discoverability
- ❌ 5+ tags: Too many, dilutes meaning

**Why**: 3-4 tags provide sufficient categorization without overwhelming readers or creating analysis paralysis.

**Enforcement**: Reject tag suggestions that don't meet this range. Ask user to add/remove tags.

### Rule 2: Core Topic Requirement

**Required**: At least **1 Core Topic tag** must be included.

Core Topic tags are:
- `LegalTech`
- `ArtificialIntelligence`
- `Programming`
- `Productivity`
- `Commentary`

**Why**: Core topics define the primary focus areas of the blog. Every post should align with at least one.

**Enforcement**: If no Core Topic tag is in the suggestion, add the most relevant one or flag it for user review.

### Rule 3: Registry Compliance

**Required**: All tags must exist in `tags.md` unless explicitly approved by user.

**Process for new tags**:
1. Warn that tag is not in registry
2. Suggest similar existing tags
3. Ask for justification
4. Require explicit user approval
5. Only then add to registry and use in post

**Enforcement**: Do not automatically create new tags. Always require user confirmation.

### Rule 4: No Duplicates or Near-Duplicates

**Required**: Check tag aliases in `tags.md` before suggesting.

**Example violations**:
- ❌ Suggesting both `AI` and `ArtificialIntelligence` (alias)
- ❌ Suggesting `legal-tech` when `LegalTech` exists (naming variant)
- ❌ Suggesting both `ContractReview` and `DocumentAutomation` when post isn't about both

**Enforcement**: Use alias mapping to normalize tags. Check that suggested tags represent distinct concepts.

### Rule 5: Naming Convention Compliance

**Required**: All tags must follow naming standards in `naming-standards.md`.

**Check**:
- Multi-word concepts use PascalCase
- Single words use lowercase (except proper nouns)
- Acronyms use all caps when standard
- No kebab-case, snake_case, or spaces

**Enforcement**: Automatically normalize tag names to standard format before suggesting.

## Advanced Validation Rules

### Rule 6: Reusability Test

**Before approving a new tag**, ask:
> "Will this tag apply to at least 3 future posts?"

**Examples**:
- ✅ `DocumentAutomation` - Yes, many posts could cover this
- ✅ `CLI` - Yes, multiple tool/project posts
- ❌ `PyMuPDFIntegration` - Too specific, unlikely to reuse
- ❌ `Contract-Review-Tool-v2` - Way too specific

**Enforcement**: Challenge overly specific new tag requests. Suggest broader alternatives.

### Rule 7: Regional Tag Specificity

**Use regional tags** (`Singapore`, `ASEAN`) **only when** content is specifically about that region.

**Examples**:
- ✅ "Singapore's new data protection law" → Use `Singapore`
- ✅ "ASEAN legal tech market overview" → Use `ASEAN`
- ❌ "How to build a CLI tool" (written in Singapore but not about Singapore) → No regional tag

**Why**: Regional tags should help readers find region-specific content, not just indicate author location.

**Enforcement**: Question regional tag suggestions if content isn't region-specific.

### Rule 8: Content Type Selectivity

**Use Content Type tags** (`Newsletter`, `Tutorial`, `CaseStudy`) **only when** the format is distinctive.

**Examples**:
- ✅ Weekly newsletter edition → Use `Newsletter`
- ✅ Step-by-step how-to guide → Use `Tutorial`
- ✅ Real implementation example with metrics → Use `CaseStudy`
- ❌ Regular blog post → No content type tag needed

**Why**: Content type tags are for filtering by format, not required for every post.

**Enforcement**: Only suggest content type tags when format is a key characteristic.

## Validation Checklist

Before finalizing tag suggestions, verify:

- [ ] **Total count**: 3-4 tags
- [ ] **Core topic**: At least 1 Core Topic tag included
- [ ] **Registry**: All tags exist in `tags.md` OR user approved new tag
- [ ] **No duplicates**: No aliases or concept overlaps
- [ ] **Naming**: All tags follow naming standards
- [ ] **Reusability**: Any new tags pass the "3+ posts" test
- [ ] **Regional**: Regional tags only for region-specific content
- [ ] **Content type**: Content type tags only when format is distinctive
- [ ] **Distinctness**: Each tag represents a different aspect of the post

## Handling Validation Failures

### Too Many Tags (5+)

**Message**:
```
⚠️  Too many tags suggested (5). Maximum is 4.

Please remove the least important tag(s):
1. [Tag1] - [reason it's important]
2. [Tag2] - [reason it's important]
...

Which tag should we remove?
```

### Too Few Tags (1-2)

**Message**:
```
⚠️  Only 2 tags suggested. Minimum is 3.

Consider adding:
- [Suggested Tag 1] - [why it fits]
- [Suggested Tag 2] - [why it fits]
```

### No Core Topic Tag

**Message**:
```
⚠️  No Core Topic tag included.

This post appears to be primarily about: [topic analysis]

Suggested Core Topic tag: [Tag]
- Alternatives: [Alt1], [Alt2]
```

### New Tag Requested

**Message**:
```
⚠️  Proposed tag "[NewTag]" is not in the canonical registry.

Similar existing tags:
- [ExistingTag1] - Used in X posts
- [ExistingTag2] - Used in Y posts

Do you want to:
1. Use [ExistingTag1] instead
2. Use [ExistingTag2] instead
3. Create new tag "[NewTag]" (requires justification)

If creating new tag, please confirm:
- Will this apply to 3+ future posts?
- Is there no existing tag that covers this?
```

### Naming Violation

**Message**:
```
⚠️  Tag "[wrong-format]" doesn't follow naming standards.

Did you mean: "[CorrectFormat]"?

See naming-standards.md for details.
```

## Edge Cases

### Borderline Core Topic Assignment

**Scenario**: Post could fit multiple Core Topics.

**Solution**: Choose the PRIMARY theme. If truly equal, use both (but stay within 4-tag limit).

**Example**: "Using AI for legal document automation"
- Both `ArtificialIntelligence` and `LegalTech` are core
- OK to use both if post equally emphasizes both aspects
- Then limit to 2 additional tags (e.g., `DocumentAutomation`, `Python`)

### Very Niche Technical Topic

**Scenario**: Post covers a very specific technical concept not in registry (e.g., "LangGraph").

**Solution**:
1. Check if broader tag exists (e.g., `Agents`, `AI`, `Programming`)
2. If very niche, propose new tag BUT with clear reusability justification
3. Require user confirmation
4. Document the tag with description for future use

### Tutorial vs. Regular Post

**Scenario**: Unclear if post qualifies as a `Tutorial`.

**Test**: Does it have step-by-step instructions that readers can follow?
- ✅ "How to build X: A step-by-step guide" → Tutorial
- ❌ "I built X and here's what I learned" → Not a tutorial (CaseStudy maybe)

## Summary: The Golden Rules

1. **3-4 tags always** (no more, no less)
2. **At least 1 Core Topic tag** (defines main theme)
3. **Registry first** (use existing tags unless strong reason for new)
4. **Naming standards** (PascalCase for multi-word, etc.)
5. **Reusability matters** (new tags must apply to 3+ future posts)
6. **Distinct concepts** (no duplicate meanings)
7. **User approval for new tags** (never auto-create)

---

**Remember**: The goal is to help readers discover related content through consistent, meaningful tags. When in doubt, err on the side of using existing tags.
