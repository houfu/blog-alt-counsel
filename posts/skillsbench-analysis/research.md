# Research: SkillsBench Analysis Post

## Source: SkillsBench Paper (arXiv:2602.12670)
- **Authors:** Xiangyi Li et al. (Stanford, CMU, Berkeley, Oxford, BenchFlow)
- **Published:** February 13, 2026
- **URL:** https://arxiv.org/abs/2602.12670
- **Blog:** https://www.skillsbench.ai/blogs/introducing-skillsbench

### Scale & Methodology
- 84 tasks across 11 domains
- 7 agent-model configurations
- 7,308 valid trajectories
- 3 conditions: no skills, curated skills, self-generated skills
- 3 commercial agent harnesses: Claude Code, Gemini CLI, Codex CLI
- 7 frontier models: GPT-5.2, Claude Opus 4.5, Claude Opus 4.6, Claude Sonnet 4.5, Claude Haiku 4.5, Gemini 3 Pro, Gemini 3 Flash

### Key Findings

**1. Curated skills help significantly (+16.2pp average)**
- Domain variation: +4.5pp (Software Engineering) to +51.9pp (Healthcare)
- 16 of 84 tasks show negative deltas (skills hurt)
- Worst: taxonomy-tree-merge (-39.3pp), energy-ac-optimal-power-flow (-14.3pp)

**2. Self-generated skills don't work (-1.3pp average)**
- Only Opus 4.6 shows modest improvement (+1.4pp)
- Codex + GPT-5.2 degrades substantially (-5.6pp)
- Models cannot reliably author the procedural knowledge they benefit from consuming

**3. Less is more**
- 2-3 skills per task: +20.0pp (optimal)
- 4+ skills: +5.2pp (diminishing returns)
- Compact skills: +18.9pp
- Comprehensive documentation: +5.7pp (nearly 4x worse)

**4. Model comparison (with skills)**

| Config | No Skills | With Skills | Gain |
|---|---|---|---|
| Gemini CLI + Flash | 31.3% | 48.7% | +25.3pp |
| Claude Code + Opus 4.5 | 22.0% | 45.3% | +23.3pp |
| Codex + GPT-5.2 | 30.6% | 44.7% | +20.3pp |
| Claude Code + Opus 4.6 | 30.6% | 44.5% | +20.0pp |
| Gemini CLI + Pro | 27.6% | 41.2% | +18.8pp |
| Claude Code + Sonnet 4.5 | 17.3% | 31.8% | +17.5pp |
| Claude Code + Haiku 4.5 | 11.0% | 27.7% | +18.8pp |

**5. Failure modes**
- Skills conflict with strong model priors → negative delta
- "Format drift" in long trajectories reduces skill influence
- Models fail to recognize when specialized knowledge is needed
- Two trajectory-level failures: (a) models generate imprecise/incomplete procedures, (b) for high-domain tasks, models don't recognize need for specialized skills

**6. Harness matters**
- Some harnesses reliably retrieve and use skills
- Others acknowledge skill content but proceed without invoking
- Structured interfaces can introduce format drift

### Paper's Practitioner Recommendations
1. Don't blindly apply skills — evaluate per domain
2. Keep skills concise (2-3 focused procedures)
3. Include working examples (biggest performance jump)
4. Consider smaller models + good skills over larger models without
5. Always evaluate with and without skills (paired evaluation)

### Skills Ecosystem Stats
- 47,150 unique skills from 6,323 repositories (after dedup)
- Daily additions surged to 18,904 peak in January 2026

## Source: User's Codebase — Personal Experience with Skills

### The 9 Blog Skills
backlink_curating, blog-research, brainstorming, generate_a_pitch, getting-feedback, note-taking, searching_the_blog, tag-registry, using-ghost-admin-api

### Key Personal Experiences

**1. The 3-page prompt → 45-line skill shift (2024-2025)**
- 2024: 3-page M&A term sheet prompt for SAL/Microsoft competition. Disqualified for missing deadline.
- 2025: 45-line generate_a_pitch skill. Archived at /posts/prompt-engineering-wrong/2025-SKILL.md
- Quote: "Prompt engineering teaches you to write better instructions within someone else's system. Skills let you program the system itself."

**2. Hardcoded session paths in auto-generated skills**
- Claude in Cowork generated a skill with paths like `/sessions/jolly-exciting-bardeen/mnt/.skills/skills/pdf/SKILL.md`
- Works in one session, breaks for everyone else
- AI-generated = non-portable

**3. "Never reads the documentation" failure (ai-tools-for-agents)**
- Built `redlines guide` discovery command specifically for agents
- AGENT_GUIDE.md with schemas, examples, patterns
- "In my Claude Code sessions, it never uses it. Not once."
- "Claude would rather stab at the problem repeatedly based on what it thinks CLI tools should look like than find out what to do next."
- Hallucinated flags: `--output markdown` doesn't exist, actual command is `redlines markdown`

**4. The docassemble overclaim**
- Claude wrote "Template discovery, field interviews, document rendering — the whole pipeline?"
- User corrected: "CoDraft currently only implements one small part"
- Lesson: Skills need precision about scope

**5. Skill evolution: 45 lines → 100+ lines**
- generate_a_pitch grew from 45 lines to 100+ with added steps
- Added: TodoWrite step, Voice Guide step, Authenticity Check, Tag suggestion, Scaffolding
- Each addition came from a real failure (e.g., Claude inventing vulnerability → added authenticity check)

**6. What actually works in the blog skills**
- Clear trigger phrases in CLAUDE.md (not relying on discovery)
- Explicit numbered steps
- Success criteria defined upfront
- Progressive disclosure (load on demand, not everything at once)
- Non-hardcoded file paths

### User's Stated Experiences (from brainstorm, not yet in repo)
- Model variability between Opus and Sonnet when using same skills
- Conflicting skills: custom docx-to-pdf instruction conflicting with Claude's built-in capability
- AI-generated verbose skills producing little improvement
