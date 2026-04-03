# Tag Registry Skill

**Status**: Active

A skill to manage blog post tags consistently, prevent tag sprawl, and maintain a canonical tag registry.

## Quick Start

### For Claude Code

When working on blog posts, this skill is **automatically invoked** during:
- **Pitch phase** - Tags are suggested based on pitch content
- **Publishing phase** - Tags are validated before creating Ghost draft

See `SKILL.md` for detailed instructions.

### For Humans

Tag management is now handled via **ghst MCP tools** in Claude Code. For manual operations, use the `ghst` CLI directly:

1. **Fetch current tags**:
   ```bash
   ghst tag list --limit all
   ```

2. **Review and plan consolidation**:
   - Check output for duplicates (e.g., "AI" vs "Artificial Intelligence")
   - Check for naming inconsistencies (e.g., "legal-tech" vs "LegalTech")
   - Identify overly specific tags that should be merged

3. **Consolidate tags** (manual multi-step process):
   ```bash
   # 1. Find posts with the old tag
   ghst post list --filter "tag:old-tag" --limit all

   # 2. For each post, update its tags (replace old with new)
   ghst post update <post-id> --tags "NewTag,OtherExistingTag"

   # 3. Delete the old tag
   ghst tag delete <tag-id>
   ```

4. **Update the registry**:
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

## Ghost MCP Tools for Tag Management

| Operation | MCP Tool | CLI Equivalent |
|-----------|----------|----------------|
| List all tags | `ghost_tag_list` | `ghst tag list` |
| Get tag by slug | `ghost_tag_get` | `ghst tag get --slug <slug>` |
| Create new tag | `ghost_tag_create` | `ghst tag create --name "TagName"` |
| Update tag | `ghost_tag_update` | `ghst tag update <id>` |
| Delete tag | `ghost_tag_delete` | `ghst tag delete <id>` |

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
4. Create on Ghost using `ghost_tag_create` MCP tool
5. Document the date in maintenance log

### Check if a Tag Exists

Search `tags.md` or use `ghost_tag_list` MCP tool to check Ghost directly.

### Merge Duplicate Tags

Use Claude Code with ghst MCP tools:
1. `ghost_tag_list` — find the source and target tags
2. `ghost_post_list` with filter `tag:<old-slug>` — find affected posts
3. `ghost_post_update` for each post — retag with the canonical tag
4. `ghost_tag_delete` — remove the old tag

### See All Tags on Blog

Use `ghost_tag_list` MCP tool or `ghst tag list --limit all` CLI command.

## Troubleshooting

### "Ghost MCP tools not available"

Ensure ghst is installed and authenticated:
```bash
npm install -g @tryghost/ghst
ghst auth login --url $GHOST_SITE_URL --staff-token $GHOST_ADMIN_API_KEY --site alt-counsel
```

Then add the MCP server to Claude Code:
```bash
claude mcp add ghost -- ghst mcp stdio --tools all
```

### "Tag not found"

Try searching by both slug and name. Ghost slugs use lowercase with hyphens.

## Maintainer

**Maintainer**: Ang Hou Fu
**Created**: 2025-11-17
**Last Updated**: 2026-04-03
