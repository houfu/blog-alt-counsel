# Posts Folder Standard

Each post lives in its own folder named with a short, memorable slug. The standard layout for **new posts**:

```
posts/{post-short-title}/
├── {post-short-title}.md   ← main post file, named after the folder
├── discussion.md           ← session notes, decisions, audit trail
├── pitch.md                ← the approved pitch (the contract for the draft)
├── research.md             ← sources and citations (optional)
└── *.png / *.jpg           ← images, compressed to under 500 KB
```

## Rules

1. **Main file is named after the folder** (`{folder}.md`). Don't use `draft.md` — it's misleading once the post is scheduled or published.
2. **Frontmatter is required** on the main file: `title`, `slug`, `tags`, `status` at minimum. See CLAUDE.md "Post Structure and Metadata".
3. **No horizontal rules** (`---`, `***`, `___`) in the main post body — they break markdown-to-lexical conversion. Working documents (discussion.md, pitch.md, research.md) may use them freely.
4. **One draft, use git for history.** Don't keep `draftv2.md`, `draftv3.md`, `outlinev2.md` — git already has every version. Delete superseded files.
5. **Compress images** to under 500 KB before committing.
6. **No confidential material.** This is a public repository, and published posts link back to their folders via the GitHub footer. Term sheets, client documents, and anything marked confidential must never be committed.
7. **No per-post publishing scripts.** Use `scripts/publish-lexical.js`; improve the canonical script if a feature is missing.

## Linting

```bash
npm run lint-posts                      # all folders
node scripts/lint-posts.js --strict my-post   # strict mode for a new post
```

Errors fail CI; warnings are advisory (mostly legacy posts predating this standard).
