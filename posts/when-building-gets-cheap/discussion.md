# Discussion: when-building-gets-cheap

> Retroactive stub (2026-06-10). This post was written and published directly
> on Ghost before development notes were standard; no session history exists.
> Local content was synced from Ghost after publication. Future edits should
> log sessions here per the note-taking skill format.

## Session: Automated Ghost Sync Sweep (2026-08-29)

### What Changed
Local frontmatter was missing `custom_excerpt` and `feature_image` entirely — both are present on the live Ghost record and have been added, matching Ghost exactly:
- `custom_excerpt`: the "In 2024, I spent hours crafting a 3-page prompt..." opening line.
- `feature_image`: `https://storage.ghost.io/.../2025/12/photo-1742633798961-b6a8dde3ef99.jpeg`.

Title, slug, status, tags, published_at, post_id, and featured all already matched Ghost — no change needed there.

### Content Drift Note
The retroactive stub above claims local content "was synced from Ghost after publication," but `when-building-gets-cheap.md` actually contains only a placeholder body (`<!-- Content not synced locally. Post was published directly in Ghost. -->`) — the real prose was never pulled in. The live Ghost post is a full ~1,300-word article (the M&A term sheet anecdote, the Sam Harden "Legal UI Revolution" reference, the "AI Eliminated the Wrong Constraint" and "Build and Measure" sections, a how-to walkthrough with screenshots, and a closing "Permission We've Been Waiting For" section). Per sync procedure this was not backfilled into the markdown body — only frontmatter was corrected. Found via an automated Ghost sync sweep.

## Session: Pulled live Ghost content into local markdown (2026-08-29)

### What Changed
Fetched the live lexical content for `when-building-gets-cheap-but-knowing-stays-expensive` via `ghost_post_get` and rebuilt the entire body from scratch (the placeholder comment noted above was replaced in full — this was a full pull, not a patch). Frontmatter was left untouched per sync-phase-2 scope.

The reconstructed body now contains:
- The full M&A term sheet / prompt-competition anecdote, including the two backlinks to `lawyers-prompt-engineering-wrong` and the recruitment-agency comparison-table anecdote ("thanks" client response).
- Both screenshot images (`Screenshot-2025-12-25-at-12.06.36---PM.png` and `Screenshot-2025-12-25-at-12.11.09---PM.png`), reproduced as bare `![]()` markdown since neither had alt text in Ghost.
- All four `## ` sections: "When Tools Take 30 Minutes to Finish, Everything Changes", "AI Eliminated the Wrong Constraint", "My 2026 Resolution: Build and Measure", "How to Build Your First Experimental Tool", plus the closing "The Permission We've Been Waiting For".
- The Sam Harden pull-quote (Ghost's "aside" card type, which has no local markdown equivalent) rendered as a plain paragraph with an explanatory HTML comment above it, per the sync conventions.
- The nested nested/sub-bullet list under "Start describing what you want in plain English" flattened into a single flat bullet list — the local markdown-to-lexical parser (`publish-lexical.js`) has no nested-list support (its bullet regex is anchored to line-start), so indentation would not have round-tripped correctly anyway.
- Inline links to `i-built-cli-tools-for-claude-code...` and `when-ai-makes-you-look-busy-not-productive` preserved as normal inline links (these are lexical `link` nodes with visible text, not `bookmark` nodes, so no bookmark-card conversion applies).
- Bold/italic formatting throughout preserved via lexical `format` bit flags (e.g. "AI made building cheap—but it didn't make validation cheap." as a fully-bold paragraph, `Living Will & Health Care Proxy Interactive Tool` as a bold list-item lead-in).

### Caveats
- Image 2's Ghost caption ("Leading GenAI interfaces often allow you to preview the output next to your chat, so you can give feedback easily to the AI. Once you're satisfied with it, you can download or publish it. (See the top right buttons for Claude)") has no local markdown syntax and was dropped from the body per the sync conventions — flagging here so the informative caption text isn't lost entirely.
- Post-sync `npm run lint-posts` shows 3 pre-existing warnings (missing pitch.md, 3 internal links missing `?ref=` query params, 2 images with empty alt text) — all warnings, no errors, and all reflect the actual state of the Ghost source rather than something introduced by this sync. Left as-is per scope (frontmatter/body sync only, not a content-quality pass).
- No typo-preservation exceptions were needed — the local body had no prior prose to compare against (it was placeholder-only).
