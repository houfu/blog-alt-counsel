# Tag Registry — Setup & Operations

For Claude Code workflow guidance, see `SKILL.md`. This file covers setup and human-driven tag operations.

## Files

| File | Purpose |
|------|---------|
| `SKILL.md` | Workflow instructions (Claude) |
| `tags.md` | Canonical registry — authoritative list |
| `naming-standards.md` | Naming conventions |
| `validation-rules.md` | Validation ruleset |
| `README.md` | This file |

## Ghost MCP tools (tag operations)

| Operation | MCP tool | CLI equivalent |
|---|---|---|
| List tags | `ghost_tag_list` | `ghst tag list` |
| Get by slug | `ghost_tag_get` | `ghst tag get --slug <slug>` |
| Create | `ghost_tag_create` | `ghst tag create --name "TagName"` |
| Update | `ghost_tag_update` | `ghst tag update <id>` |
| Delete | `ghost_tag_delete` | `ghst tag delete <id>` |

## Common tasks

**Add a new approved tag** — user approves → verify naming → add to `tags.md` → create on Ghost (`ghost_tag_create`) → log in `tags.md`.

**Check if a tag exists** — grep `tags.md` or `ghost_tag_list`.

**Merge duplicate tags** — `ghost_tag_list` to find source/target; `ghost_post_list` with `tag:<old-slug>` to find affected posts; `ghost_post_update` each post; `ghost_tag_delete` the old tag.

**Bulk consolidation (manual)**:

```bash
ghst tag list --limit all                        # survey
ghst post list --filter "tag:old-tag" --limit all
ghst post update <post-id> --tags "NewTag,OtherTag"
ghst tag delete <tag-id>
```

Then update `tags.md` (canonical list + aliases + maintenance log).

## Setup

```bash
npm install -g @tryghost/ghst
ghst auth login --url $GHOST_SITE_URL --staff-token $GHOST_ADMIN_API_KEY --site alt-counsel
claude mcp add ghost -- ghst mcp stdio --tools all
```

If "Tag not found" — Ghost slugs are lowercase with hyphens; try both slug and name.

---

Maintainer: Ang Hou Fu · Created 2025-11-17 · Updated 2026-04-17
