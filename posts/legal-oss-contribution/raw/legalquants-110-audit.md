# LegalQuants 110-Member Audit — Substantively Used Public OSS

_Audit date: 2026-05-09. Criteria approved by user._

## Criteria

A LegalQuants member's GitHub project counts as **substantively used** if any single owned repo meets ALL of:

1. **Stars**: ≥100 on the repo
2. **Outside contributors**: ≥3 unique contributors total (≥2 non-owner)
3. **Release cadence**: tagged GitHub releases (`gh api repos/{owner}/{repo}/releases` returns ≥1) **OR** public package-registry presence (PyPI / npm / Maven Central / RubyGems / crates.io / Packagist) with at least one published version

Out of scope: forks, organisation repos where the member is a contributor but not the founder/maintainer, and non-public projects.

## Methodology

1. **Phase A** — captured 101 visible LegalQuants directory members (page header claims 112; 11 not visible in static markdown).
2. **Phase B (round 1)** — resolved GitHub handles for 32 members (31 verified + 1 probable). 69 marked NOT-FOUND.
3. **Phase B (round 2)** — retried 68 of the 69 NOT-FOUND members with deeper search (gh code search, multi-variant repo lookups, LegalQuants org contribution check, Substack/site cross-reference). Resolved an additional 5 verified + 4 probable. **Final totals: 36 verified + 5 probable + 60 NOT-FOUND = 41 resolved out of 101.**
4. **Phase C** — for each resolved handle, queried `gh api users/{h}/repos?type=owner` and identified top-starred owned repos. For repos crossing 100 stars, queried `/contributors` and `/releases` endpoints, and inspected for package-registry presence.
5. **Control**: `houfu/redlines` must PASS — confirmed.

## Top-starred owned repo per resolved handle

| # | Name | Handle | Top owned repo | Stars | Resolved in |
|---|---|---|---|---:|---|
| 1 | Jamie Tso | jamietso | Tabular_Review | 52 | round 1 |
| 2 | Raymond Sun | techie-ray | automatic-video-montage-editor | 25 | round 1 |
| 3 | David Rubenstein | tanko-r | awesome-legal-tech | 6 | round 2 |
| 5 | Ang Hou Fu | houfu | redlines | **156** | pre-resolved |
| 6 | Sam Clearwater | admiral-cs | license-comply | 1 | round 2 |
| 7 | Leon Delnawaz | leondelnawaz | UCT_analyser | 0 | round 1 |
| 8 | Yu Chou Teo | yuch85 | contract-playbook-ai | 34 | round 1 |
| 9 | Anson Lai | AnsonLai | MuseScore-Printer | **115** | round 1 |
| 10 | Artur Serov | sarturko-maker | vibe-legal-prototype | 23 | round 1 |
| 11 | Troy Zhaoyi Song | case-thread | Casethread | 5 | round 1 |
| 12 | Kevin Keller | Tucuxi-Inc | DocumentAnalyzer | 14 | round 1 |
| 15 | Elgar Weijtmans | Weijtmans | Prompting-guide-for-Lawyers | 1 | round 1 |
| 16 | Joshua Wong | joshwong197 | tomatotime | 0 | round 1 |
| 21 | Rocky Li | terracottalabs | hkcr | 5 | round 1 |
| 25 | Noam Raz | noamrazbuilds | vibe-check | 6 | round 1 |
| 26 | Sze Yao Tan | thegreatsze | the-murder-of-piplup | 0 | round 1 |
| 34 | Andrius Petrenas | AndriusPetrenas | UltimateLegalAILibrary | 2 | round 2 |
| 41 | David Liu | davidliudev | contract-review | 0 | round 2 |
| 42 | Dharma Sadasivan | DharmaSadasivan | (no owned repos visible) | — | round 2 (probable) |
| 43 | Emmanouil Leivadiotakis | RelentlessLeivas | tax-defense-strategist | 2 | round 1 |
| 44 | Enrico Ferraris | ebobferraris | privacy-center | 0 | round 1 |
| 51 | John Naoom | eternalBackPain | Case-Chat | 1 | round 1 |
| 54 | Ken Priore | KenPriore | MindtheGapVideos | 0 | round 1 |
| 57 | Leonard Hope | LeonardHope | Claude-Skill-for-Patent-Filing-QC | 7 | round 1 |
| 62 | Parth Sagdeo | parthsagdeo | caseciteparser | 6 | round 1 (probable) |
| 69 | Zachary Brenner | foolish-bandit | personal-site | 2 | round 1 |
| 70 | Alyssa Sones | ams-ca | local-rules-dashboard | 1 | round 1 |
| 72 | Antoine Louis | antoine-louis | (no owned repos visible) | — | round 1 |
| 76 | Drew Miller | drewmiller | client | 0 | round 2 (probable) |
| 82 | Ashley Winton | AshleyWinton | legal-compare-tool | 0 | round 2 (probable) |
| 84 | Rafal Stanislaw Fryc | rafal-fryc | Zwiad | 5 | round 1 |
| 85 | Ranjitha Rangaswamy | ranjitharangaswamy | RUSE | 0 | round 2 |
| 86 | Alexios vdSK | SaifAlYounan | ClaudeforWord | 4 | round 1 |
| 87 | Arjun Singh Chouhan | braveheartjun | Modern-Jurist | 0 | round 2 (probable) |
| 89 | Damien Charlotin | DC3044 | Hidden-Actors-IL | 0 | round 1 |
| 92 | Kevan Wee | kevanwee | mapmole | 3 | round 1 |
| 93 | Leona Zhang | zjing7843-prog | law-review-verifier | 5 | round 1 |
| 96 | Michael Paik | rolldabones | claude-cowork-legal-onboarding | 2 | round 1 |
| 97 | Oliver Schmidt-Prietz | oliverschmidtprietz | GDPR-Privacy-Notice-EU | 0 | round 1 |
| 98 | Rebecca Fordon | rlfordon | citation-verifier | 4 | round 1 |
| 99 | Richard Careaga | technocrat | Writing-your-first-Django-app | 7 | round 1 |
| 101 | Veronica Lopez | veronica-builds | emilie | 23 | pre-resolved |

## Repos crossing 100 stars

Only **two** owned repos across all resolved handles cross the ≥100 stars threshold:

### 1. houfu/redlines (control — expected PASS)

| Criterion | Value | Pass? |
|---|---|---|
| Stars | 156 | ✓ |
| Unique contributors (non-bot) | 12 (houfu + 11 external) | ✓ |
| Tagged GitHub releases | 9 | ✓ |
| Package-registry presence | PyPI: `redlines` v0.6.1, 12 releases | ✓ |
| **Verdict** | | **PASS** |

### 2. AnsonLai/MuseScore-Printer (non-legal candidate)

| Criterion | Value | Pass? |
|---|---|---|
| Stars | 115 | ✓ |
| Unique contributors (non-bot) | 4 (AnsonLai + 3 external) | ✓ |
| Tagged GitHub releases | 0 | ✗ |
| Package-registry presence | None — repo is `originalCode.js` (a console snippet); no `package.json`, no npm publication, no git tags | ✗ |
| **Verdict** | | **FAIL on release cadence** |

Note: MuseScore-Printer is a one-file JavaScript snippet for downloading sheet music from Musescore. It is also not a *legal*-OSS project. Even if release-cadence were waived, its relevance to the "lawyers contributing to legal OSS" claim is tangential.

## Verdict

**PASS count = 1 (houfu/redlines)** — survives both round 1 (32 resolved handles) and round 2 (41 resolved handles after retry pass).

The post's "exactly 1" claim is verified under user-confirmed criteria, with the following caveats:

1. **The audit checked 101 of 112 declared directory members** (89%). The 11 not visible in the static markdown render (page header says 112; only 101 visible) cannot be audited from this snapshot. If any of the missing 11 maintain a substantively-used project, the audit misses it.
2. **60 of 101 audited members remain NOT-FOUND** on GitHub after two resolution passes (Round 1: 69; Round 2 retry resolved 9 more). Their identities are mostly confirmed via LinkedIn / personal sites / LQ profile data, but no public GitHub handle could be cross-referenced. Private GitHub work, unlinked handles, and projects published only to Manus / Replit / commercial sites (not GitHub) are invisible to the audit.
3. **AnsonLai/MuseScore-Printer (115 stars) is a near-miss.** It would PASS if the user dropped the release-cadence requirement. It's a non-legal repo, but the criteria as written don't exclude non-legal projects. Worth surfacing.
4. **Bordering candidates (>50 stars but <100):**
   - jamietso/Tabular_Review (52)
   - AnsonLai/TeslaServiceManualScraper (67)
   These would PASS only if the bar dropped to 50 stars (Lenient threshold).
5. **The original "About six of the 110 have a verifiable, non-trivial public repo" claim** is consistent with this audit if "non-trivial" is read loosely (any owned repo with ≥5 stars produces ~10–12 candidates across the 41 resolved handles). The "exactly 1 substantively used" claim is the load-bearing one and it survives both verification rounds.
6. **Round 2 retry pass added 9 new resolutions** (5 verified + 4 probable). None of the new handles' top-starred repos cross 100 stars — the highest is `tanko-r/awesome-legal-tech` at 6 stars. The verdict was unchanged by the additional resolution work, which is itself a robustness check on the original finding.

## Cross-check against prior research

Prior 9-handle audit reconciliation:

| Handle | Prior research | This audit | Drift |
|---|---|---|---|
| jamietso | RedlineNow 38⭐ / Tabular_Review 52⭐ | confirmed (Tabular_Review 52⭐ top) | OK |
| yuch85 | contract-playbook-ai (Mike-pattern) | top: contract-playbook-ai 34⭐ | OK |
| veronica-builds | emilie (4-day-old fork of Mike) | top: emilie 23⭐ | OK; emilie aged from 4 days to ~3 weeks |
| terracottalabs | hkcr | top: hkcr 5⭐ | OK |
| techie-ray | global-ai-reg-tracker (LQ-listed) | top: automatic-video-montage-editor 25⭐ | New top surfaced; still <100 |
| houfu | redlines 156⭐ / 37 PRs / 13 contribs | redlines 156⭐ / 12 contribs / 9 releases | OK; contributor count drift small |

No material divergences.

## What this audit does NOT prove

- That **legal-tech lawyer-coders outside the LegalQuants directory** don't maintain substantively-used legal-OSS projects. (Active veterans like Damien Riehl, V. David Zvenyach, Quinten Steenhuis are not in this directory; they were covered in the prior 9-handle PR audit, which is a different question — outbound contribution, not substantively-used owned repos.)
- That redlines is the *best* legal-OSS repo, only that it's the only LegalQuants-member repo crossing the bar.
- That none of the 69 NOT-FOUND members has a substantively-used project. The audit can only confirm what's visible.

## Files cross-referenced

- Phase A: `posts/legal-oss-contribution/raw/legalquants-directory-110.md`
- Phase B: `posts/legal-oss-contribution/raw/legalquants-github-mapping.md`
- Phase C (this file)
