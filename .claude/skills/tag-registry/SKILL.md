# Tag Registry Skill

**Purpose**: Manage blog post tags consistently by suggesting tags from a canonical registry, preventing tag sprawl and maintaining naming consistency.

**When to use**: Automatically invoke this skill when:
- Creating a new blog post or newsletter (during pitch or draft phase)
- User asks for help choosing tags
- User mentions tags or tagging in any context
- Before publishing any post to Ghost

## Core Responsibilities

1. **Suggest appropriate tags** from the canonical registry based on post content
2. **Warn about new tags** that don't exist in the registry
3. **Prevent duplicates** by checking for similar existing tags
4. **Enforce limits** (3-4 tags maximum, at least 1 core topic tag)
5. **Normalize tag names** according to naming conventions

## How to Use This Skill

### Step 1: Read the Canonical Registry
Read `tags.md` to understand the current approved tags organized by category.

### Step 2: Analyze Post Content
Based on the post topic, title, and content (from pitch or draft), identify:
- Primary topic/theme (should map to a Core Topic tag)
- Technical elements (programming languages, tools, frameworks)
- Practice areas or legal domains
- Regional focus (if Singapore/ASEAN specific)

### Step 3: Suggest Tags
Suggest 3-4 tags from the registry:
- **At least 1 Core Topic tag** (e.g., LegalTech, AI, Programming)
- 1-2 specific technical or domain tags
- 1 regional tag if applicable (Singapore, ASEAN)

**Format your suggestion like this:**

```
Suggested tags for this post:
1. [Core Topic Tag] - Primary theme
2. [Technical/Domain Tag] - Specific area
3. [Technical/Domain Tag] - Additional context
4. [Regional Tag] (if applicable)

These tags were selected from the canonical registry.
```

### Step 4: Handle New Tag Requests

If the post content suggests a tag NOT in the registry:

```
⚠️  WARNING: Proposed tag "[NewTag]" is not in the canonical registry.

Similar existing tags:
- [ExistingTag1] - [description]
- [ExistingTag2] - [description]

Options:
1. Use existing similar tag instead
2. Create new tag (requires justification)

Before creating a new tag, ask yourself:
- Will this tag be reused for future posts?
- Is this specific enough to be useful but broad enough to apply to multiple posts?
- Does a similar tag already exist with different naming?
```

**Require explicit user confirmation** before proceeding with a new tag.

### Step 5: Validate Against Rules

Check that the suggested tags meet these criteria:
- ✅ Total of 3-4 tags (not more, not less)
- ✅ At least 1 Core Topic tag included
- ✅ Tags use proper naming convention (see `naming-standards.md`)
- ✅ No duplicate concepts
- ✅ All tags exist in registry OR user explicitly approved new tag

## Tag Naming Standards

Follow these conventions (detailed in `naming-standards.md`):
- **Multi-word concepts**: PascalCase (e.g., `LegalTech`, `ArtificialIntelligence`, `DocumentAutomation`)
- **Single words**: Lowercase (e.g., `programming`, `python`, `javascript`)
- **Proper nouns**: Proper case (e.g., `Singapore`, `ASEAN`, `Python`)
- **Acronyms**: All caps if commonly used (e.g., `AI`, `API`, `CLI`)
- **NO**: kebab-case, snake_case, or underscores

## Integration Points

### With `generate_a_pitch` skill
When a pitch is created, tags should be suggested early. Add a "Suggested Tags" section to the pitch.

### With `using-ghost-admin-api/creating_a_draft` skill
Before publishing a draft, validate that:
- Tags are from the canonical registry
- Tag count is within limits (3-4)
- Tag naming follows conventions

If validation fails, warn the user and suggest corrections.

## Tag Registry Maintenance

The canonical registry is stored in `tags.md`. It should be updated when:
- A new tag is explicitly approved by the user
- Tag usage patterns change significantly
- Tags need to be consolidated or deprecated

**Do NOT** automatically add tags to the registry. Always get user approval first.

## Example Usage

```markdown
# Post Pitch: "Building a CLI tool for contract review using Python"

## Suggested Tags

Based on the pitch content, I suggest these tags from the canonical registry:

1. **LegalTech** - Core topic (legal technology application)
2. **Python** - Technical implementation language
3. **CLI** - Tool/framework type
4. **DocumentAutomation** - Practice area

These 4 tags cover the main themes and will help readers find this post when searching for legal tech programming content.

All tags are from the canonical registry and follow naming conventions.
```

## Files in This Skill

- `SKILL.md` (this file) - Main skill instructions
- `tags.md` - Canonical tag registry organized by category
- `naming-standards.md` - Detailed tag naming conventions
- `validation-rules.md` - Rules for tag validation and suggestions

## Important Notes

- **Be strict about new tags**: Tag sprawl is the problem we're solving. Default to using existing tags.
- **Suggest, don't decide**: Present tag suggestions and rationale, let user confirm.
- **Think reusability**: Only approve new tags that will apply to multiple future posts.
- **Check aliases**: A tag might exist under a different name (see tag aliases in `tags.md`).

---

Remember: The goal is to maintain a clean, consistent, reusable tag taxonomy that helps readers discover related content without overwhelming them with too many tags.
