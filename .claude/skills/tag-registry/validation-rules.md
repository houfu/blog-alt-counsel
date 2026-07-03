# Tag Validation Rules

Rules for validating and suggesting tags. Keeps the taxonomy consistent and prevents sprawl.

## Workflow

1. Analyze post content
2. Identify 4–6 candidate tags
3. Check against `tags.md`
4. Apply rules below
5. Present 3–4 approved tags
6. Handle any new-tag requests

## Core rules

### Rule 1 — Tag count: 3 to 4

- ✅ 3 tags: acceptable
- ✅ 4 tags: ideal
- ❌ 2 or fewer: too few, weak discoverability
- ❌ 5+: dilutes meaning

Reject suggestions outside this range; ask the user to add/remove.

### Rule 2 — At least one Core Topic tag

Core Topics: `LegalTech`, `ArtificialIntelligence`, `Programming`, `Productivity`, `Commentary`.

Every post aligns to at least one. If none are suggested, flag for user review or add the most relevant.

### Rule 3 — Registry compliance

All tags must exist in `tags.md` unless the user explicitly approves a new one.

For new-tag requests: warn → suggest similar existing tags → ask for justification → require explicit approval → only then update `tags.md`.

Never auto-create tags.

### Rule 4 — No duplicates or near-duplicates

Check aliases in `tags.md` before suggesting.

Violations:
- ❌ `AI` + `ArtificialIntelligence` (alias)
- ❌ `legal-tech` when `LegalTech` exists (naming variant)
- ❌ `ContractReview` + `DocumentAutomation` when the post isn't about both

Normalize via alias map. Each tag must represent a distinct concept.

### Rule 5 — Naming conventions

Follow `naming-standards.md`:
- Multi-word → PascalCase
- Single words → lowercase (except proper nouns)
- Acronyms → all caps when standard
- No kebab-case, snake_case, spaces

Normalize automatically before suggesting.

## Advanced rules

### Rule 6 — Reusability test

Before approving a new tag: "Will this apply to at least 3 future posts?"

- ✅ `DocumentAutomation`, `CLI`, `Agents` — broad enough
- ❌ `PyMuPDFIntegration`, `ContractReviewToolV2` — too specific

Challenge narrow requests; suggest broader alternatives.

### Rule 7 — Regional tags

`Singapore` / `ASEAN` only when content is *about* that region, not just authored there.

- ✅ "Singapore's new data protection law" → `Singapore`
- ❌ "How to build a CLI tool" (written in Singapore but not about it) → no regional tag

### Rule 8 — Content-type tags

`Newsletter`, `Tutorial`, `CaseStudy` only when the format is distinctive.

- ✅ Step-by-step how-to → `Tutorial`
- ✅ Real implementation with metrics → `CaseStudy`
- ❌ Regular commentary post → no content-type tag

## Validation checklist

- [ ] Count: 3–4
- [ ] Core Topic: ≥1 included
- [ ] Registry: all tags present OR new-tag approved
- [ ] No duplicate concepts
- [ ] Naming: follows standards
- [ ] Reusability: any new tags pass "3+ posts" test
- [ ] Regional: only when region-specific
- [ ] Content type: only when format is distinctive

## Failure messages

### Too many tags (5+)
```
⚠️  Too many tags (5). Maximum is 4.
Remove the least important. Which tag should we drop?
```

### Too few tags (1–2)
```
⚠️  Only 2 tags. Minimum is 3.
Consider adding:
- [Suggested Tag 1] — [why it fits]
- [Suggested Tag 2] — [why it fits]
```

### No Core Topic tag
```
⚠️  No Core Topic tag. Primary theme appears to be: [analysis].
Suggested Core Topic tag: [Tag] (alts: [Alt1], [Alt2]).
```

### New tag requested
```
⚠️  "[NewTag]" is not in the registry.

Similar existing tags:
- [ExistingTag1] — used in X posts
- [ExistingTag2] — used in Y posts

Options:
1. Use [ExistingTag1]
2. Use [ExistingTag2]
3. Create "[NewTag]" — confirm it applies to 3+ future posts and no existing tag covers it
```

### Naming violation
```
⚠️  Tag "[wrong-format]" doesn't follow naming standards.
Did you mean "[CorrectFormat]"? See naming-standards.md.
```

## Edge cases

**Borderline Core Topic** — choose the primary theme. If equally balanced, use both (stay ≤4 total). Example: "Using AI for legal document automation" may warrant both `ArtificialIntelligence` and `LegalTech`.

**Niche technical topic** (e.g., LangGraph) — check for broader tag first (`Agents`, `AI`, `Programming`). If truly niche AND likely to recur, propose new tag with reusability justification. User approval required.

**Tutorial vs. regular post** — tutorial has explicit step-by-step instructions readers can follow. "How I built X and what I learned" is a CaseStudy (if metrics) or no content-type tag (if reflection).

## Golden rules

1. 3–4 tags always
2. ≥1 Core Topic tag
3. Registry first
4. Naming standards
5. Reusability matters for new tags
6. Distinct concepts — no overlap
7. User approval required for new tags

When in doubt, prefer existing tags.
