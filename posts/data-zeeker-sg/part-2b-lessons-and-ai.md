---
title: "Building data.zeeker.sg: Lessons from AI-Assisted Development"
date: TBD
draft: true
tags: [legal-tech, ai-development, solo-builder, lessons-learned]
series: "data.zeeker.sg decision series"
series_part: "2b"
---

**[Introduction to be written]**

**What this post covers:**
- What worked brilliantly (and what to copy)
- What didn't work (and what to avoid)
- How AI-assisted development changed solo building
- Practical advice for solo builders in the AI era

**Who should read this:** Solo builders, legal technologists considering AI assistance, anyone wondering what's realistic for one person to build.

**Context:** Part 2a covered the technical architecture. This post covers the practical lessons from building it.

---

## What Worked, What Didn't

### What Worked: Copy These

**SQLite FTS5 for full-text search:** Zero infrastructure. Fast enough for hundreds of thousands of documents. No Elasticsearch needed.

**Read-only production:** Datasette serves files, never writes. Cannot corrupt production. Simple rollback. For batch-updated data, this eliminates entire bug classes.

**Standardized resources:** One `fetch_data()` interface for all sources. First source: 150 hours. Second source: 2-4 hours. Standardization is force multiplication.

**S3 + static deployment:** SQLite file → S3 → Datasette. Atomic deploys, version history, cheap hosting ($0.02/month), CDN-friendly.

**Isolated contribution:** Each contributor works in separate projects, produces SQLite files. No merge conflicts, no dependency hell, no coordination needed.

**Architecture over effort:** These decisions reduce ongoing maintenance. Your limiting factor as a solo builder is time. Choose architectures that eliminate work.

### What Didn't Work: Avoid These

**Thinking monolithic instead of composable**

Early on, I considered building one integrated platform: custom scraper framework + custom database layer + custom API + custom frontend.

The mistake: "I need to build a complete legal data platform."

What I actually built: Composable pieces working together:
- Zeeker CLI (handles data production)
- SQLite (standard database format)
- S3 (standard file storage)
- Datasette (existing tool for serving databases)
- Standard web technologies (HTML/CSS/JS)

The lesson: Don't build what already exists. Think creatively about combining existing tools. Datasette already solves "API + web interface for SQLite"—why rebuild that? The CLI solves "standardize data production"—that's the novel part worth building.

**For solo builders:** Your competitive advantage isn't building everything yourself. It's creatively engineering solutions from composable pieces. Build only what's unique to your problem.

**Example comparison:**

**Monolithic approach (what I almost did):**
- Custom web framework: 80-120 hours
- Custom API layer: 40-80 hours
- Custom admin interface: 60-100 hours
- Custom search implementation: 40-60 hours
- **Total: 220-360 hours of reinventing wheels**

**Composable approach (what I actually did):**
- Zeeker CLI (novel standardization): 150 hours
- Datasette (off-the-shelf): 0 hours of development
- Custom UX layer (the differentiator): 40-60 hours
- **Total: 190-210 hours, focused on unique value**

The composable approach saved 30-150 hours while delivering better functionality (Datasette is more mature than anything I'd build in 80 hours).

---

**Premature optimization - Multiple sources before validating one**

I designed the zeeker CLI to handle 40+ sources elegantly before proving anyone wanted even one source.

The mistake: "Build infrastructure that scales from day one."

What I should have done: Build one source. Announce it. See if anyone uses it. Then build source #2.

The lesson: Validate demand before optimizing for scale. One working, used source beats 40 sources nobody wants. Build for today, not for hypothetical future scale.

**The reality check:**

After 6+ months:
- 1 data source live (legal news aggregator)
- 346 articles collected and curated
- 0 known active users
- 0 requests for additional sources
- 0 external contributions

I built infrastructure for 40 sources. The market validated demand for 0.

**What I should have done instead:**

1. **Week 1-2:** Build manual scraper, no CLI. Just prove the concept works.
2. **Week 3-4:** Announce it. Share on legal tech communities. Gauge interest.
3. **Week 5-8:** If people use it, build CLI for source #2. If nobody uses it, stop or pivot.

The CLI is well-architected. But I optimized for scaling a product that nobody asked for. The right time to build the CLI would have been when I had 5+ users asking "Can you add court decisions?" or "I want to contribute a new source."

**For solo builders:** Your architectural instincts might be correct, but your market validation should come first. Perfect infrastructure for an unused product is still unused.

---

**Not thinking harder about where AI should help**

I spent 30-45 minutes per article on manual work:
- Reading articles
- Writing summaries
- Extracting metadata
- Categorizing topics

For 346 articles: **173-260 hours of manual curation**.

The mistake: "AI can't match human quality, so I'll do it manually."

What I should have done: AI-assisted workflow with human review:
- AI generates first-pass summary (2 minutes)
- AI extracts metadata (1 minute)
- Human reviews and corrects (5-10 minutes)
- Total: 10-15 minutes per article vs. 30-45 minutes

Same quality (human-reviewed), but 15-30 minutes saved per article. Over 346 articles: **100+ hours saved**.

**Why I didn't do this:**

I was using AI heavily for code development, but I had a mental block about using AI for content curation. I thought:
- "Legal content needs human judgment"
- "AI might misunderstand legal nuances"
- "Manual curation ensures quality"

All true, but I missed the key insight: **AI doesn't need to be perfect, it needs to be a useful first draft.**

**What the workflow should have been:**

```python
# AI-assisted curation workflow
for article in articles:
    # AI does the grunt work (2-3 minutes)
    summary = ai.generate_summary(article.content)
    metadata = ai.extract_metadata(article.content)
    categories = ai.suggest_categories(article.content)

    # Human does the judgment (5-10 minutes)
    review_and_correct(summary, metadata, categories)
    approve_or_reject(article)
```

**The savings:**
- Manual: 30-45 min/article × 346 articles = 173-260 hours
- AI-assisted: 10-15 min/article × 346 articles = 58-87 hours
- **Time saved: 115-173 hours (nearly 3-4 weeks of full-time work)**

**The pattern:** I optimized for things that didn't matter (building everything myself, scalability, perfect manual quality) and didn't optimize for what did matter (composing existing tools creatively, validating demand, reducing manual labor).

**For solo builders:** Think harder about where to spend your limited time. Compose, don't build everything. Use AI aggressively for repetitive work. Validate before scaling.

---

## AI-Assisted Development: What Changed

I built data.zeeker.sg with extensive AI assistance. This wasn't revolutionary magic—it was a practical tool that changed what's feasible for a solo builder. Here's the honest assessment.

### What AI Handled Well

**Boilerplate and familiar patterns:** AI excels at code that follows established conventions. The zeeker CLI involved:
- Click command structure with argument parsing
- File operations (path handling, template rendering)
- S3 upload/download logic using boto3
- Schema validation patterns
- Error handling boilerplate

For these, AI generated 70-80% of working code. I reviewed, tested, refined.

**Test generation:** AI wrote tests alongside code. Not strict TDD (test-first), but tests came with the implementation. This kept quality high as code generated quickly.

**Example workflow:**

```
Me: "I need a command that initializes a new zeeker project with
     a standard directory structure."

AI: [Generates Click command + file operations + tests]

Me: [Reviews code, runs tests, finds edge case with existing directories]

Me: "Handle the case where the directory already exists"

AI: [Updates code with proper error handling + additional tests]

Me: [Approves and commits]
```

This cycle took 15-30 minutes per command. Writing it manually would have taken 2-4 hours per command.

**Complex but standard problems:** FTS5 setup, sqlite-utils integration, Datasette plugin hooks—AI knew these libraries better than I did. Generated working solutions on first or second try.

**Example:** Setting up FTS5 full-text search indexes required understanding sqlite-utils' `enable_fts()` method, column selection, tokenizer configuration. AI generated correct implementation immediately. Manually, this would have required reading documentation, experimentation, and debugging—probably 3-4 hours. AI: 10 minutes.

**Time impact:** Conservative estimate: AI reduced CLI development from 400-600 hours (traditional) to 150+ hours. That's 250-450 hours saved.

### What AI Enabled Architecturally

**Lower cost of experimentation:** Fast code generation meant I could try ambitious solutions without committing weeks of work.

**Example: CLI-first instead of incremental**

Traditional approach: Build one data source manually → copy-paste for source #2 → realize the pattern → refactor into CLI → migrate existing sources.

What I actually did: Jump straight to CLI that generates templates.

**Why this was feasible:** AI could generate:
- CLI command structure
- Template generation logic
- Resource scaffolding code
- Project initialization

Building this scaffolding manually would take weeks. With AI generating code fast, I could experiment: "What if I built the abstraction first?"

**The mindset shift:** Without AI, you ask "What's the minimum I need to build to validate this?" With AI, you can ask "What's the best architecture, even if it requires more scaffolding code?"

**More long-term planning becomes viable:** Because code generation is fast, you can build for the future without drowning in boilerplate. The CLI handles 40 sources even though I only built 1—that wasn't over-engineering, it was low-cost future-proofing.

**Caveat:** This only works if your architectural judgment is sound. AI makes it easy to build the wrong abstraction quickly. But if you know what good architecture looks like, AI removes the "but that's too much code to write" barrier.

**The double-edged sword:**

AI enabled me to build CLI infrastructure for 40 sources when I had 0 validated users. The architecture is sound, but I built it too early. AI amplified both my good judgment (the architecture) and my premature optimization (building before validating).

**Lesson:** AI makes it easy to build the "right" architecture quickly. But "right" architecture for an unvalidated product is still premature optimization. AI doesn't change the need for market validation—it just makes it easier to over-build before you validate.

### The Workflow That Made It Work

**Context preparation:**
- Convert codebase to markdown
- Load entire project into AI context
- Full codebase view helped AI understand the system architecture

**The tradeoff:** Full context = better suggestions, but frequently hit context limits. I had to start fresh conversations often, losing context continuity.

**The iteration loop:**
1. Describe what I needed
2. AI generates code + tests
3. I review and run tests
4. Fix issues, refine requirements
5. Repeat

**Tests as safety net:** AI-generated tests caught issues early. Code generated fast, tests kept it honest.

**Example of tests catching AI mistakes:**

```python
# AI generated this function
def sync_from_s3(bucket, key, local_path):
    s3.download_file(bucket, key, local_path)
    return True

# AI also generated this test
def test_sync_from_s3_missing_file():
    result = sync_from_s3("bucket", "missing.db", "local.db")
    # Test failed: NoSuchKey exception not handled
```

The test revealed the missing error handling immediately. Without tests, I'd discover this bug in production. AI generating tests alongside code created a feedback loop that caught mistakes early.

### Where Human Judgment Was Critical

**Architecture decisions:** AI suggested patterns, but I decided:
- Resource-based CLI structure
- SQLite as deployment artifact
- Read-only production model
- Isolated contribution architecture

AI explains tradeoffs. Humans choose based on constraints.

**Example conversation:**

```
Me: "Should I use PostgreSQL or SQLite for this project?"

AI: "Here are the tradeoffs:
     PostgreSQL: Better for concurrent writes, ACID guarantees, scalability
     SQLite: Simpler deployment, portable files, excellent for read-heavy...

     What are your constraints?"

Me: "Solo builder, limited budget, read-heavy workload, need portable deploys"

AI: "SQLite is better for your constraints. Here's how to set it up..."
```

AI provided the analysis. I made the decision based on my specific situation (solo builder, passion project, no budget for database hosting).

**Recognizing bad solutions:** AI sometimes goes down terrible paths. Example: AI might suggest complex state management when a simple rebuild works better. Or over-engineer error handling when failing fast is appropriate.

**You need engineering sense to recognize when AI is going down a bad path.** Tests help, but you need to see the whole picture. Ask: "Is this solving the right problem? Is this the simplest solution?"

**Real example:**

AI suggested implementing incremental updates with complex change tracking—track which articles changed, compute diffs, update only changed records. This would require:
- Change detection logic
- Diff computation
- Partial update handling
- State synchronization

I recognized this was over-engineering. The simple solution: rebuild the entire database from scratch each time. SQLite builds are fast (346 articles in ~5 seconds). Why add complexity for marginal performance gains?

**The lesson:** AI will happily build complex solutions to simple problems. You need to ask "Is this necessary?" and recognize when simpler approaches work.

**Domain understanding:** AI didn't know:
- What legal researchers need
- Whether lawyers can write SQL
- If the project has value
- How to prioritize features

Domain knowledge came from my legal background, not AI.

**Production debugging:** AI suggests generic fixes. Real issues require context:
- S3 permissions blocking Datasette
- FTS5 query syntax errors
- Schema conflicts from data changes

AI helps debug, but you need to understand the system.

### The Messy Reality

**Context limits:** Frequently hit. Solution: Start fresh conversations, rebuild context. Not ideal, but workable.

**Verification required:** AI makes mistakes. Every generated solution needs:
- Code review (does this make architectural sense?)
- Test verification (do tests actually cover edge cases?)
- Production testing (does it work with real data?)

**Not autopilot:** AI accelerates, doesn't replace judgment. You're still engineering, just faster.

**Where I should have used AI more:** Manual article curation (30-45 min/article). Should have been AI-first-pass → human-review (10-15 min/article). That mistake cost 100+ hours.

**The pattern of mistakes:**

Things I used AI for:
- ✅ Code generation (saved 250-450 hours)
- ✅ Test generation (saved debugging time)
- ✅ Boilerplate/scaffolding (enabled better architecture)

Things I didn't use AI for but should have:
- ❌ Content curation (cost 100+ hours of manual work)
- ❌ Documentation generation (cost 20-30 hours)
- ❌ Migration script generation (cost 10-15 hours)

I had mental blocks about using AI for "human judgment" tasks like content curation, but didn't realize AI + human review would be faster than pure manual work.

### What This Means for Solo Builders

**The change:** Infrastructure projects moved from "requires a team" to "feasible for one person with AI assistance."

**Not magic:** 150+ hours is still substantial. AI didn't make this trivial.

**Realistic equation:** AI handles boilerplate and familiar patterns. You handle architecture, domain knowledge, and quality judgment. Together: ambitious projects become feasible.

**Practical advice:** Use AI for code generation, but keep your engineering brain engaged. Tests help catch bugs. Your judgment catches bad architecture before it ships.

**AI amplifies your effort, not replaces thinking.**

**The success equation for solo builders in the AI era:**

```
AI-assisted development =
    Fast code generation (AI)
    + Sound architecture (human)
    + Domain knowledge (human)
    + Tests as safety net (AI generates, human reviews)
```

**What changed:**
- **Before AI:** Solo builders limited to simple CRUD apps or spending 6-12 months on infrastructure
- **With AI:** Solo builders can build sophisticated infrastructure in 3-4 months, but still need strong architectural judgment

**What didn't change:**
- Need for domain knowledge (understanding your users)
- Need for market validation (building what people want)
- Need for engineering judgment (recognizing bad solutions)

**The trap:** AI makes it easy to build sophisticated infrastructure quickly. This is great if you're building the right thing. It's dangerous if you're building before validating demand.

I built excellent infrastructure for a product with zero validated users. AI enabled me to over-build efficiently. That's not a win.

**Advice for solo builders using AI:**

1. **Use AI aggressively for repetitive work:** Code generation, boilerplate, tests, documentation. Save hundreds of hours.

2. **Keep architectural judgment human:** AI suggests patterns. You decide based on your constraints (budget, time, skills, scale).

3. **Validate before you build:** AI makes it easy to build quickly. This doesn't change the need to validate demand first. Build MVPs, not scalable infrastructure.

4. **Use AI for content work too:** Don't just use AI for code. Use it for curation, summarization, documentation—any repetitive task. AI + human review beats pure manual work.

5. **Tests are your safety net:** AI-generated tests catch AI-generated bugs. Always generate tests alongside code.

6. **Know when to say no:** AI will happily build complex solutions. You need to recognize when simpler approaches work.

---

## Conclusion

Building data.zeeker.sg taught me what solo builders can achieve in the AI era—and what we still can't.

**What worked:**
- Composing existing tools creatively (Datasette, SQLite, S3)
- Using AI for boilerplate and scaffolding (saved 250-450 hours)
- Standardized architecture (2-4 hours per source vs. 8-14 hours)
- Static deployment (bulletproof production, minimal maintenance)

**What didn't work:**
- Building monolithic platform instead of composable pieces
- Optimizing for 40 sources before validating 1 user
- Manual curation instead of AI-assisted workflow (cost 100+ hours)

**The AI reality:**
- Reduces code development time by 60-70%
- Enables ambitious architecture without drowning in boilerplate
- Still requires strong engineering judgment
- Doesn't eliminate need for market validation
- Can amplify premature optimization

**For solo builders in the AI era:**

Infrastructure projects that previously required teams are now feasible for individuals. But feasibility doesn't equal desirability. The bottleneck shifted from "can I build this?" to "should I build this?"

AI removes the coding barrier. It doesn't remove the need for:
- Domain knowledge (understanding your users)
- Market validation (confirming demand before building)
- Architectural judgment (choosing simple over complex)
- Product sense (building what matters)

**The honest assessment:**

I built excellent infrastructure efficiently. The architecture is sound. The code is well-tested. The costs are sustainable ($6-12/month).

But I built it before validating anyone wanted it. AI made it easy to build quickly, which made it easy to over-build before validating.

That's the lesson: AI is a force multiplier on effort, not a replacement for validation.

**Part 3 addresses the decision:** After exploring what SMU is building, understanding the institutional landscape, and recognizing my premature optimization, what should I do with data.zeeker.sg?

The technical infrastructure works. The architecture is proven. The question remains: should it continue?

---

**Related in this series:**
- Part 1: The Decision Dilemma (when institutions enter your space)
- Part 2a: Technical Architecture (the three-layer system)
- Part 3: My Decision and What I Learned (coming next)

---

**Update Log:**
- November 11, 2025: Split from combined Part 2, focused on lessons and AI development
