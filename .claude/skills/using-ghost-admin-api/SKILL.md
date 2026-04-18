---
name: Using Ghost Admin API
description: Comprehensive draft and post access, creating, editing and analysis. When Claude needs to work with the Ghost Admin API to access content published on alt-counsel.com as Houfu's partner.
---

# Using Ghost Admin API

Most Ghost operations use the **ghst MCP tools** directly. Use this skill to route to the one custom script still needed (`publish-lexical.js` for markdown → lexical with bookmark cards, GitHub footer, table conversion).

## Decision tree

- Post a draft from markdown → [`creating_a_draft.md`](creating_a_draft.md) (uses `publish-lexical.js`)
- Sync Ghost post metadata back to local markdown (CHECK phase) → `npm run sync-ghost <slug>`
- Backlink curation → use the `backlink_curating` skill
- Everything else (read/query/update/stats) → MCP tools below

## MCP tools quick reference

| Operation | MCP Tool | Notes |
|---|---|---|
| Search posts | `ghost_search` | Full-text across posts, pages, tags |
| List posts | `ghost_post_list` | Supports filter, status, limit |
| Get post | `ghost_post_get` | By `slug` or `id` |
| Create / update / delete | `ghost_post_create` / `ghost_post_update` / `ghost_post_delete` | Delete needs `confirm: true` |
| Publish / schedule | `ghost_post_publish` / `ghost_post_schedule` | Schedule takes `at` datetime |
| Tags | `ghost_tag_list` / `_create` / `_update` / `_delete` | |
| Image upload | `ghost_image_upload` | Local file path |
| Site / settings | `ghost_site_info` / `ghost_setting_list` / `ghost_setting_get` | |
| Stats | `ghost_stats_overview` / `_post` / `_web` / `_growth` / `_email` | |
| Members, pages, newsletters | `ghost_member_list` / `ghost_page_list` / `ghost_newsletter_list` | |

## Reference

- [/docs/ghost-lexical-format.md](../../../docs/ghost-lexical-format.md) — comprehensive lexical format reference. Consult when constructing complex lexical structures for `publish-lexical.js`.

## Reminders

- Announce that you're using this skill.
- MCP tools handle auth via the ghst CLI; no manual JWT needed.
- Ghost docs are sparse — report any surprises so we can improve these instructions.
