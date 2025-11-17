# Tag Naming Standards

**Purpose**: Ensure all tags follow consistent naming conventions for readability and discoverability.

## The Rules

### 1. Multi-Word Concepts: PascalCase

Use PascalCase (capitalize first letter of each word, no spaces or separators) for multi-word technical or domain concepts.

**Examples:**
- ✅ `LegalTech`
- ✅ `ArtificialIntelligence`
- ✅ `ContractReview`
- ✅ `DocumentAutomation`
- ✅ `WebDevelopment`
- ✅ `LegalResearch`

**Don't use:**
- ❌ `legal-tech` (kebab-case)
- ❌ `legal_tech` (snake_case)
- ❌ `legaltech` (all lowercase, hard to read)
- ❌ `Legal Tech` (spaces break URLs/slugs)

**Why**: PascalCase is readable without separators, looks professional, and works well in URLs when Ghost converts to slugs.

### 2. Single Words: Lowercase

For single-word tags (especially common terms), use all lowercase.

**Examples:**
- ✅ `programming`
- ✅ `productivity`
- ✅ `python` (language name, even though normally capitalized)
- ✅ `javascript`

**Exception**: Proper nouns and acronyms (see below)

**Don't use:**
- ❌ `Programming` (unnecessary capitalization)
- ❌ `PROGRAMMING` (overly aggressive)

**Why**: Lowercase single words are conventional for tags/slugs and easier to type.

### 3. Proper Nouns: Proper Case

For geographic names, company names, and other proper nouns, use standard proper case.

**Examples:**
- ✅ `Singapore`
- ✅ `ASEAN`
- ✅ `Python` (when referring to the language as a proper noun)
- ✅ `JavaScript` (official spelling with internal caps)

**Why**: Proper nouns should maintain their conventional spelling.

### 4. Acronyms: All Caps (When Commonly Used)

For well-known acronyms, use all capitals.

**Examples:**
- ✅ `AI`
- ✅ `API`
- ✅ `CLI`
- ✅ `PDF`
- ✅ `ASEAN`

**Don't use:**
- ❌ `Api` (looks amateurish)
- ❌ `Ai` (not standard)

**Why**: Common acronyms are conventionally capitalized and immediately recognizable.

### 5. Abbreviations: Avoid Unless Standard

Don't abbreviate unless the abbreviation is more common than the full term.

**Examples:**
- ✅ `AI` (more common than "Artificial Intelligence" in tags)
- ✅ `API` (standard abbreviation)
- ✅ `CLI` (standard abbreviation)
- ❌ `ContRev` (not standard, spell out `ContractReview`)
- ❌ `DocAuto` (not standard, spell out `DocumentAutomation`)
- ❌ `SG` (use `Singapore` for clarity)

**Why**: Non-standard abbreviations hurt discoverability and readability.

## Special Cases

### Compound Terms with Acronyms

When an acronym is part of a compound term, integrate it naturally:

**Examples:**
- ✅ `LegalAI` (legal + AI)
- ✅ `APIDesign` (API + design)
- ✅ `CLITools` (CLI + tools)

**Don't use:**
- ❌ `Legal-AI`
- ❌ `LegalAi`

### Technical Terms with Internal Caps

Respect the conventional spelling of technical terms:

**Examples:**
- ✅ `JavaScript` (not Javascript or javascript in compound)
- ✅ `TypeScript`
- ✅ `OpenAI` (if referring to the company)

### Hyphenated Concepts

Convert hyphens to PascalCase:

**Examples:**
- ✅ `DocumentAutomation` (not document-automation)
- ✅ `ContractReview` (not contract-review)
- ✅ `LegalTech` (not legal-tech)

**Why**: Ghost converts tags to slugs anyway, so internal consistency matters more than slug format.

## Validation Checklist

Before approving a new tag, verify:

- [ ] Does it follow one of the naming conventions above?
- [ ] Is it readable without separators?
- [ ] Is the capitalization consistent with similar existing tags?
- [ ] If it's an acronym, is it commonly recognized?
- [ ] If it's multi-word, is it PascalCase?
- [ ] Does it avoid unnecessary abbreviations?

## Common Mistakes to Avoid

| ❌ Wrong | ✅ Correct | Rule Violated |
|---------|-----------|---------------|
| legal-tech | LegalTech | No kebab-case |
| legal_tech | LegalTech | No snake_case |
| legaltech | LegalTech | PascalCase for multi-word |
| Legal Tech | LegalTech | No spaces |
| Ai | AI | Acronyms in caps |
| Programming | programming | Single words lowercase |
| ContractRev | ContractReview | No non-standard abbreviations |
| SG | Singapore | Spell out for clarity |
| Api | API | Acronyms in caps |

## Tag Slug Behavior

**Note**: Ghost automatically generates URL-friendly slugs from tag names:
- `LegalTech` → slug: `legaltech`
- `ArtificialIntelligence` → slug: `artificialintelligence`
- `Contract Review` → slug: `contract-review`

This is fine! The internal tag name (what we control) is what matters for consistency and readability in the Ghost admin and on tag pages.

## Examples by Category

### Core Topics
- `LegalTech` (multi-word PascalCase)
- `ArtificialIntelligence` (multi-word PascalCase)
- `programming` (single word lowercase)

### Technical Topics
- `Python` (proper noun, language name)
- `JavaScript` (proper noun with internal caps)
- `CLI` (common acronym)
- `API` (common acronym)

### Practice Areas
- `ContractReview` (multi-word PascalCase)
- `DocumentAutomation` (multi-word PascalCase)
- `LegalResearch` (multi-word PascalCase)

### Regional
- `Singapore` (proper noun)
- `ASEAN` (acronym)

### Content Types
- `Newsletter` (single word, capitalized as proper type)
- `Tutorial` (single word)

---

**Remember**: Consistency is more important than perfection. When in doubt, check existing similar tags in `tags.md`.
