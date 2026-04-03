---
name: Using Ghost Admin API
description: Comprehensive draft and post access, creating, editing and analysis. When Claude needs to work with the Ghost Admin API to access content published on alt-counsel.com as Houfu's partner.
---

# Using Ghost Admin API

## Overview 

The user may ask you to create, edit or analyse posts on Houfu's alt-counsel.com blog.
Most Ghost operations are now handled via **ghst MCP tools** — native tools available directly in Claude Code.

## Workflow decision tree

* If there is already a separate SKILL that is used to perform the workflow, STOP and use that skill instead.
   * Example: `searching_the_blog` or `backlink_curating`
* **For reading/querying Ghost content** — use MCP tools directly (see quick reference below)
* **For posting a draft to Ghost from markdown** — use [creating_a_draft.md](creating_a_draft.md) (uses `publish-lexical.js` for custom lexical conversion)
* **For syncing Ghost post metadata back to local markdown (CHECK phase)** — run `npm run sync-ghost <slug>`

## MCP tools quick reference

| Operation | MCP Tool | Notes |
|---|---|---|
| Search posts | `ghost_search` | Full-text search across posts, pages, tags |
| List posts | `ghost_post_list` | Supports filter, status, limit, pagination |
| Get post by slug/id | `ghost_post_get` | Use `slug` or `id` parameter |
| Create post | `ghost_post_create` | For simple posts; use `publish-lexical.js` for markdown with custom features |
| Update post | `ghost_post_update` | By id or slug |
| Delete post | `ghost_post_delete` | Requires `confirm: true` |
| Publish post | `ghost_post_publish` | By id |
| Schedule post | `ghost_post_schedule` | By id, with `at` datetime |
| List tags | `ghost_tag_list` | All tags with metadata |
| Create tag | `ghost_tag_create` | Name required |
| Update/delete tag | `ghost_tag_update` / `ghost_tag_delete` | By id |
| Upload image | `ghost_image_upload` | Local file path |
| Site info | `ghost_site_info` | Title, URL, version |
| Settings | `ghost_setting_list` / `ghost_setting_get` | Site settings |
| Analytics overview | `ghost_stats_overview` | Visitors, pageviews, members, top content |
| Post analytics | `ghost_stats_post` | Per-post stats by id |
| Web traffic | `ghost_stats_web` / `ghost_stats_web_table` | Sources, locations, devices |
| Member growth | `ghost_stats_growth` | Member/revenue trends |
| Email analytics | `ghost_stats_email` | Newsletter performance |
| List members | `ghost_member_list` | With search and filter |
| List pages | `ghost_page_list` | Static pages |
| List newsletters | `ghost_newsletter_list` | Newsletter configuration |

## Reference Documentation

* **[ghost-lexical-complete-guide.md](ghost-lexical-complete-guide.md)** — Comprehensive guide to Ghost's lexical format with real-world examples. Use when constructing complex lexical structures for `publish-lexical.js`.

## Reminders

* Always announce that you are using this skill.
* MCP tools handle authentication automatically via the ghst CLI. No manual JWT generation needed.
* Documentation is sparse from Ghost. Always report problems so that we can figure out together how to fix them and improve our instructions.
