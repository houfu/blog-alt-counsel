# Tag Registry Skill

**Status**: ✅ Skill created | ⏳ Initial audit pending

A skill to manage blog post tags consistently, prevent tag sprawl, and maintain a canonical tag registry.

## Quick Start

### For Claude Code

When working on blog posts, this skill is **automatically invoked** during:
- **Pitch phase** - Tags are suggested based on pitch content
- **Publishing phase** - Tags are validated before creating Ghost draft

See `SKILL.md` for detailed instructions.

### For Humans

To manually audit and consolidate tags:

1. **Set up Ghost API credentials** (if not already done):
   ```bash
   # Option 1: Environment variables
   export GHOST_SITE_URL="https://alt-counsel.ghost.io"
   export GHOST_ADMIN_API_KEY="your-admin-key"
   export GHOST_API_VERSION="v5.0"

   # Option 2: settings.json file
   cp settings.json.template settings.json
   # Edit settings.json with your credentials
   ```

2. **Fetch current tags**:
   ```bash
   node scripts/fetch_tags.js --verbose
   ```

3. **Review and plan consolidation**:
   - Check output for duplicates (e.g., "AI" vs "Artificial Intelligence")
   - Check for naming inconsistencies (e.g., "legal-tech" vs "LegalTech")
   - Identify overly specific tags that should be merged

4. **Test consolidation (dry run)**:
   ```bash
   node scripts/consolidate_tags.js --from "old-tag" --to "NewTag" --dry-run
   ```

5. **Execute consolidation**:
   ```bash
   node scripts/consolidate_tags.js --from "old-tag" --to "NewTag"
   ```

6. **Update the registry**:
   - Edit `tags.md` to reflect the canonical tags
   - Document any aliases in the aliases section
   - Update the maintenance log

## Files in This Skill

| File | Purpose |
|------|---------|
| `SKILL.md` | Main skill instructions for Claude Code |
| `tags.md` | Canonical tag registry (THE authoritative list) |
| `naming-standards.md` | Tag naming conventions and rules |
| `validation-rules.md` | Rules for validating and suggesting tags |
| `README.md` | This file - setup and usage guide |

## Helper Scripts

Located in `/workspace/scripts/`:

| Script | Purpose | Usage |
|--------|---------|-------|
| `fetch_tags.js` | Fetch all tags from Ghost blog | `node scripts/fetch_tags.js --verbose` |
| `consolidate_tags.js` | Merge duplicate/similar tags | `node scripts/consolidate_tags.js --from "AI" --to "ArtificialIntelligence" --dry-run` |

## Tag Naming Quick Reference

| Type | Format | Example |
|------|--------|---------|
| Multi-word concepts | PascalCase | `LegalTech`, `ArtificialIntelligence`, `ContractReview` |
| Single words | lowercase | `programming`, `python`, `javascript` |
| Proper nouns | Proper case | `Singapore`, `ASEAN`, `Python` (language) |
| Acronyms | ALL CAPS | `AI`, `API`, `CLI` |

**Avoid**: kebab-case, snake_case, spaces

See `naming-standards.md` for full details.

## Tag Selection Rules

- **3-4 tags per post** (not more, not less)
- **At least 1 Core Topic tag** (LegalTech, AI, Programming, Productivity, Commentary)
- **All tags must exist in registry** unless explicitly approved
- **No duplicate concepts** (check aliases)

See `validation-rules.md` for full rules.

## Initial Setup Workflow

**Status: Pending (waiting for Ghost API credentials)**

Once credentials are provided, follow these steps:

### Phase 1: Initial Audit (One-time)

1. **Fetch existing tags**:
   ```bash
   node scripts/fetch_tags.js --verbose > temp/current-tags.txt
   ```

2. **Analyze tags**:
   - Identify duplicates (e.g., "AI" vs "ArtificialIntelligence")
   - Find naming inconsistencies (e.g., "legal-tech" vs "LegalTech")
   - Spot overly specific tags (e.g., "PyMuPDFIntegration")
   - Check total tag count and distribution

3. **Create consolidation plan**:
   - Document which tags to merge
   - Define canonical names for each concept
   - Get user approval

4. **Execute consolidation** (with --dry-run first):
   ```bash
   # Example consolidations
   node scripts/consolidate_tags.js --from "AI" --to "ArtificialIntelligence" --dry-run
   node scripts/consolidate_tags.js --from "legal-tech" --to "LegalTech" --dry-run
   # ... review output ...

   # Execute for real
   node scripts/consolidate_tags.js --from "AI" --to "ArtificialIntelligence"
   node scripts/consolidate_tags.js --from "legal-tech" --to "LegalTech"
   ```

5. **Update registry**:
   - Edit `tags.md` with actual tag data
   - Document all canonical tags by category
   - Add aliases mapping
   - Update maintenance log

### Phase 2: Ongoing Usage

From this point forward, the tag-registry skill will:
- Suggest tags from the canonical registry
- Warn about new tags
- Validate naming conventions
- Prevent duplicates

## Integration Points

The tag-registry skill is integrated into the blog workflow at these points:

1. **generate_a_pitch skill** (Step 4):
   - Tags suggested based on pitch content
   - Included in `pitch.md`

2. **using-ghost-admin-api/creating_a_draft** (Metadata validation):
   - Tags validated before publishing
   - New tags require explicit approval

See CLAUDE.md for the complete workflow.

## Common Tasks

### Add a New Approved Tag

1. Get user approval for the new tag
2. Verify it follows naming standards
3. Add to appropriate category in `tags.md`
4. Document the date in maintenance log

### Check if a Tag Exists

Search `tags.md` or check aliases section.

### Merge Duplicate Tags

```bash
node scripts/consolidate_tags.js --from "DuplicateTag" --to "CanonicalTag" --dry-run
# Review output
node scripts/consolidate_tags.js --from "DuplicateTag" --to "CanonicalTag"
```

### See All Tags on Blog

```bash
node scripts/fetch_tags.js --verbose
```

### Get JSON of All Tags

```bash
node scripts/fetch_tags.js > tags-export.json
```

## Troubleshooting

### "Ghost API credentials not found"

Set `GHOST_SITE_URL`, `GHOST_ADMIN_API_KEY`, and `GHOST_API_VERSION` environment variables, or create `settings.json` with these values.

### "Tag not found"

The script searches by both slug and name. Try the exact slug format (e.g., "legal-tech" instead of "LegalTech").

### Consolidation Fails

- Check that both tags exist (or target will be created)
- Ensure you have write permissions on the Ghost blog
- Try with `--dry-run` first to see what will happen

## Next Steps

**Immediate (requires Ghost API credentials):**
1. Run initial tag audit with `fetch_tags.js`
2. Create consolidation plan based on actual tags
3. Execute consolidation with `consolidate_tags.js`
4. Update `tags.md` with real canonical registry

**Future Enhancements:**
- Add tag analytics (which tags drive most engagement?)
- Auto-suggest tags based on post content analysis
- Bulk tag updates across multiple posts
- Tag usage reports

---

**Maintainer**: Ang Hou Fu
**Created**: 2025-11-17
**Last Updated**: 2025-11-17
