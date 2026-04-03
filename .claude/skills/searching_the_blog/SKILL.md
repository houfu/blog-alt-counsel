---
name: Searching the Blog
description: Uncover insights and memories based on posts that I have already written
when_to_use: anytime when the partner has a question or request that concerns posts that are in the blog
---

# Searching the blog

## Overview

Search archived posts using the Ghost MCP tools.

**Core principle**: The human partner has maintained a blog for several years, so it contains a wealth of information and experience. It defines our human partner's personality online.

**Announce**: "I'm searching the blog for [topic]."

## When to use

Search when:

* Your human partner mentions "I wrote about this before"
* When writing about similar topics or issues
* To create a coherent timeline based on previous writing
* To find new ways to write about the same topic or issues (by avoiding old ones)

Don't search the blog when:

* The question is about the current post or materials concerning the current post
* The question concerns information that is not going to be found in a personal blog

## How to search

Based on the query or context, try to think of 2-3 angles to search so that you can comprehensively cover as much ground as possible.

**Primary tool:** `ghost_search` MCP tool

```
ghost_search(query: "your search term", limit: 10)
```

For parallel multi-angle searches, call the MCP tool multiple times in a single message:

```
ghost_search(query: "legal tech")
ghost_search(query: "solo counsel technology")  
ghost_search(query: "in-house lawyer tools")
```

**For filtering by status or tag**, use `ghost_post_list` with NQL filters:

```
ghost_post_list(filter: "tag:ai", status: "published", limit: 20)
ghost_post_list(filter: "published_at:>'2025-01-01'", status: "published")
```

Format all posts as a list with detailed information to answer the query.
