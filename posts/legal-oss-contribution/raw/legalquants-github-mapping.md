# LegalQuants Members → GitHub Handle Mapping

_Captured: 2026-05-09. Resolution work done by 3 parallel general-purpose agents over the 101 visible directory members._

**Methodology:** Each name was attempted via four resolution paths in order:
1. `gh search users "{name}"` — match name + bio cues (lawyer/legal/city)
2. Project-name lookup via `gh search repos "{tool_name}"` — exact LQ tool names mapped to repo owners
3. `WebSearch "{name} legalquants github"` and `"{name} {city} github lawyer"`
4. LinkedIn → GitHub triangulation

Pre-resolved (from prior research / explicit bio): jamietso, yuch85, terracottalabs, houfu, veronica-builds.

**Confidence levels:**
- **verified** — direct repo ownership match for an LQ-listed project, or GitHub bio explicitly identifies the LQ lawyer
- **probable** — name+location plausible, but no direct cross-reference
- **not-found** — no plausible match after all four resolution paths

## Summary (after round 2 retry pass on 2026-05-09 + scatter audit upgrade)

| Bucket | Round 1 | Round 2 | After scatter audit | Notes |
|---|---:|---:|---:|---|
| **Verified handles** | 31 | 36 | **37** | Round 2 added: tanko-r, admiral-cs, AndriusPetrenas, davidliudev, ranjitharangaswamy. Scatter audit upgraded drewmiller to verified (PR history shows TritiumLegal releases). |
| Probable handles | 1 | 5 | **4** | Round 2 added: DharmaSadasivan, AshleyWinton, braveheartjun, drewmiller — drewmiller upgraded after scatter audit. |
| Not-found | 69 | 60 | **60** | Round 2 retried 68 of 69; resolved 9. |
| **Total resolved (verified + probable)** | 32 | 41 | **41** | |
| **Total** | 101 | 101 | 101 | (page header claims 112; 11 not visible in static markdown) |

## Full mapping

| # | Name | Handle | Confidence | Resolution source |
|---|---|---|---|---|
| 1 | Jamie Tso | jamietso | verified | Pre-resolved (prior audit; owns RedlineNow, Tabular_Review) |
| 2 | Raymond Sun | techie-ray | verified | gh search found techie-ray/global-ai-reg-tracker-api-python; profile name "Ray Sun" + blog techieray.com matches LQ profile and HSF bio |
| 3 | David Rubenstein | tanko-r | verified | Round 2: github.com/tanko-r bio "Real estate lawyer, tinkerer." Location Seattle — exact LQ profile match. Owns awesome-legal-tech (6⭐) |
| 4 | Tristan Tan | NOT-FOUND | not-found | gh search for Tax Canvas/AU R&D returned nothing; tristantanjh on GitHub is NUS student not Melbourne tax lawyer (Round 2: confirmed) |
| 5 | Ang Hou Fu | houfu | verified | Pre-resolved (owns houfu/redlines) |
| 6 | Sam Clearwater | admiral-cs | verified | Round 2: samclearwater.com directly links "View on GitHub" to github.com/admiral-cs/license-comply (1⭐) |
| 7 | Leon Delnawaz | leondelnawaz | verified | gh search found leondelnawaz/UCT_analyser — exact LQ project ("UCT Analyser"); username matches name |
| 8 | Yu Chou Teo | yuch85 | verified | Pre-resolved (owns yuch85/office-word-diff) |
| 9 | Anson Lai | AnsonLai | verified | gh API: location "Vancouver, BC", company "Dot Legal Software", blog reference.legal — owns AnsonLai/Gemini-AI-for-Office-Microsoft-Word-Add-In-for-Vibe-Drafting matching LQ "Gemini AI for Office" |
| 10 | Artur Serov | sarturko-maker | verified | Substack interview cites github.com/sarturko-maker/vibe-legal-prototype; owns vibe-legal-redliner, vibe-legal-form-filler matching LQ Word Add-in projects |
| 11 | Troy Zhaoyi Song | case-thread | verified | gh API: name "Troy Song", owns case-thread/Casethread matching LQ project "CaseThread" |
| 12 | Kevin Keller | Tucuxi-Inc | verified | Tucuxi-Inc owns Legal-Week-Cite-Checker and OpenLoris (LQ projects); WebSearch confirms Kevin Keller is co-founder |
| 13 | Nolan Hurlburt | NOT-FOUND | not-found | WebSearch confirmed Dentons knowledge/legal-ops lead but no GitHub handle for "PDF Editor Agent" |
| 14 | Nicholas Cooper | NOT-FOUND | not-found | nicholasjcooper exists but no CHtools repo on that account; no clear cross-reference |
| 15 | Elgar Weijtmans | Weijtmans | verified | WebSearch confirmed github.com/Weijtmans, Rotterdam-based legal engineer at HVG Law (matches LQ profile) |
| 16 | Joshua Wong | joshwong197 | verified | gh API: owns mitsuketa, NZBN_Word_Addin, tc-scan, nanoclaw — direct match to all four LQ-listed NZ projects |
| 17 | AnonLQ | NOT-FOUND | not-found | Anonymous member; no name to resolve |
| 18 | Nikita Polyakov | NOT-FOUND | not-found | Multiple Nikita Polyakovs (Microsoft Power CAT, Smartsheet) but none match Moscow LegalTech architect with Lexometrica |
| 19 | Tanya Sadoughi | NOT-FOUND | not-found | LinkedIn confirms Linklaters London AI Innovation Lead but no GitHub repo for Loan Flow Guardian |
| 20 | Adam H | NOT-FOUND | not-found | Ambiguous name; no resolvable handle |
| 21 | Rocky Li | terracottalabs | verified | Pre-resolved (owns terracottalabs/hkcr) |
| 22 | Sanchez Lo | NOT-FOUND | not-found | LinkedIn surfaced HK litigation profile but no GitHub repo for Automated List of Documents |
| 23 | John Kung | NOT-FOUND | not-found | WebSearch returned no GitHub handle or repo for "First Line MLR Reviewer" |
| 24 | David Sullivan | NOT-FOUND | not-found | LinkedIn confirms WPP/ACC SG role but no GitHub matching Punters Republic/Casual Coffee repos |
| 25 | Noam Raz | noamrazbuilds | verified | gh API: name "Noam Raz", location Israel, bio "Business-oriented Legal Counsel"; owns ai-governance-register matching LQ "AI Governance Register" |
| 26 | Sze Yao Tan | thegreatsze | verified | gh search: owns Offline-Redactor and singapore-procedural-deadline-calculator — direct match to two LQ projects |
| 27 | Larissa Meredith-Flister | NOT-FOUND | not-found | Tool published as a Lawvable skill (lawvable/agent-skills org), no personal GitHub handle surfaced |
| 28 | Marleena Roshan | NOT-FOUND | not-found | WebSearch returned no GitHub handle for Privacy Legislation Tracker / Co-Parenting Schedule Builder |
| 29 | Patrick Munro | NOT-FOUND | not-found | Skills hosted in lawvable/agent-skills (legal-simulation-patrick-munro etc.) but no personal repo ownership; lexverify.com is commercial |
| 30 | Adam L. Masser | NOT-FOUND | not-found | LinkedIn confirms Sand Tech CLO but no GitHub handle for Contract Cortex |
| 31 | Álvaro Tejada Plana | NOT-FOUND | not-found | cleartrace.io is unrelated carbon-accounting company; no personal GH handle for the LQ ClearTrace |
| 32 | Amit Bhanot | NOT-FOUND | not-found | LinkedIn confirms Toronto venture/corporate lawyer but no GitHub repo for "Settled AI" |
| 33 | Andrew Cooke | NOT-FOUND | not-found | Two candidate handles (Andrew-Cooke stub repos last active 2020; andrewcooke is Chile-based dev — unrelated) |
| 34 | Andrius Petrenas | AndriusPetrenas | verified | Round 2: github.com/AndriusPetrenas owns UltimateLegalAILibrary repo whose README states "RAG Pipeline (~8,500 lines) from QueryLex" — direct cross-reference to commercial product in LQ profile (2⭐) |
| 35 | Awais Hussain | NOT-FOUND | not-found | LinkedIn confirms UK lawyer; no GitHub link or FeeCreator repo found |
| 36 | Ben Jacobs | NOT-FOUND | not-found | LinkedIn (ILANZ president, Xero) confirms identity; "Briefcase" is a different vendor's Xero app |
| 37 | Britt Warlop | NOT-FOUND | not-found | Banking Ombudsman at ADR Chambers confirmed; no GitHub or Ombuds-MA repo |
| 38 | Chloe C | NOT-FOUND | not-found | China Asset Management HK confirmed; built MRF Premier in LQ hackathon — no public repo |
| 39 | Claudia Bothe | NOT-FOUND | not-found | Only "Claudia Bothe" on GitHub is a Frankfurter Allgemeine Zeitung account — different person |
| 40 | Dan Rothenberg | NOT-FOUND | not-found | LinkedIn confirms Juniper Square Head of Legal; no GitHub or SwiftPlay repo |
| 41 | David Liu | davidliudev | verified | Round 2: github.com/davidliudev profile "David Liu, Founder Notellect AI, Singapore" — exact name+location match; has contract-review repo (0⭐) |
| 42 | Dharma Sadasivan | DharmaSadasivan | probable | Round 2: github.com/DharmaSadasivan login is exact name match; display "DS"; but 0 public repos so HashShot ownership unverifiable |
| 43 | Emmanouil Leivadiotakis | RelentlessLeivas | verified | Owns repo `tax-defense-strategist` matching exact LQ project description |
| 44 | Enrico Ferraris | ebobferraris | verified | gh bio "Tech Lawyer" + Torino, Italy + @pagopa employer; owns repo `privacy-center` matching LQ project |
| 45 | Hemma Lomax | NOT-FOUND | not-found | Docusign role confirmed; built Compliance Navigator at LQ but no GitHub repo or profile linked |
| 46 | Iris | NOT-FOUND | not-found | First name only; no plausible GitHub match for Singapore counsel |
| 47 | Jae Kim | NOT-FOUND | not-found | "Jae Kim Sydney lawyer" returns nothing; many Jae Kims on GH but none in Sydney/legal context |
| 48 | Jason Chang | NOT-FOUND | not-found | LinkedIn confirms AVP IP at AT&T but no GitHub presence found |
| 49 | Jesselyn T | NOT-FOUND | not-found | Last name truncated; no GitHub match for ClauseWise project |
| 50 | John Hughes | NOT-FOUND | not-found | Common name; no GitHub user matches NY litigation lawyer with Habeas Watch |
| 51 | John Naoom | eternalBackPain | verified | gh bio "interested in the law", Sydney AU; owns Contract-Editor and legify-clone matching LQ projects |
| 52 | Kaycee Hulet | NOT-FOUND | not-found | Web confirms identity (Rakuten Kobo Director Legal Ops); AskLegal.ai repo on GitHub belongs to different developer |
| 53 | Kaylee | NOT-FOUND | not-found | First name only; no plausible match for London legal counsel with PropositionLaunch |
| 54 | Ken Priore | KenPriore | verified | GitHub user `KenPriore` (name "Ken Priore") owns AttestAgreement, attest-agreement-management — exact match to LQ "Attest"; also has LegalQuants-Replit repo |
| 55 | Kevin Pratt | NOT-FOUND | not-found | LinkedIn confirms Oyster HR role; built Slackboard at LQ but no GitHub profile or repo found |
| 56 | Lana Kelly | NOT-FOUND | not-found | LinkedIn confirms Brisbane litigator; no GitHub or NoticeBoard repo |
| 57 | Leonard Hope | LeonardHope | verified | gh bio "U.S. patent attorney and computer engineer", company "Hope IP"; owns Claude-Skill-for-Patent-Filing-Quality-Control + USPTO-ODP-Natural-Language-Search + Google-Patents-Natural-Language-API-Search — exact LQ project list |
| 58 | Miri Nae | NOT-FOUND | not-found | LinkedIn confirms identity; built NDA Tracker at LQ hackathon — no public GH repo |
| 59 | Nick Warshaw | NOT-FOUND | not-found | LinkedIn/Loeb & Loeb profile confirms LA associate; gh `nickwshaw` and `Nick-Shaw` are different individuals |
| 60 | Nicolás Panigutti | NOT-FOUND | not-found | LinkedIn confirms Madrid Legal Ops; built Invoice Checker at LQ hackathon — no public repo |
| 61 | Paimon Abedi | NOT-FOUND | not-found | LinkedIn confirms Live Nation privacy lawyer London; no GitHub or AEROPrivacy repo |
| 62 | Parth Sagdeo | parthsagdeo | probable | gh user `parthsagdeo` (name match) has legal-tech repos (caseciteparser, juriscraper, courtlistener); name + patent-litigator profession aligns with Orrick SF associate; candle.law not in this account but legal focus is consistent |
| 63 | Polina Chtchelok | NOT-FOUND | not-found | LinkedIn confirms Nissan Paris Legal Section Manager; no GitHub or CogniLex repo |
| 64 | Rebeccah H. | NOT-FOUND | not-found | Last name truncated; no clear GitHub match for Boston Legal Ops |
| 65 | Richard Lutkus | NOT-FOUND | not-found | LinkedIn/Eudia/Seyfarth confirm identity; no GitHub or Sharepoint Bulk Downloader repo |
| 66 | Ritwik Bhattacharya | NOT-FOUND | not-found | LinkedIn confirms Latham & Watkins lawyer; no GitHub linked; no specific tool to cross-reference |
| 67 | Robert Kuter | NOT-FOUND | not-found | LinkedIn confirms identity; gh `kuter` is Django/Python dev (no legal repos); no Clause Assembly repo |
| 68 | Ryan Malek | NOT-FOUND | not-found | gh user search and web search yielded no Ryan Malek lawyer with RedTape Radar repo |
| 69 | Zachary Brenner | foolish-bandit | verified | gh bio "Zack Brenner", company @sonomos-ai, San Diego — owns origynl + Glyph + Brief-History + personal-site matching multiple LQ tools |
| 70 | Alyssa Sones | ams-ca | verified | gh user "Alyssa", owns local-rules-dashboard (NDCal focus) — exact match to LQ "Local Rules Dashboard" |
| 71 | Anissa Ng | NOT-FOUND | not-found | Lieber7802 has hkex-listing-rules-rag but other repos suggest different person; no biographical cross-ref |
| 72 | Antoine Louis | antoine-louis | verified | LinkedIn explicitly links github.com/antoine-louis to Lawvable founder Antoine Louis; LQ tool "Lawvable" matches |
| 73 | Chong Liu | NOT-FOUND | not-found | Common name; no Beijing M&A lawyer with China ODI Dashboard repo found |
| 74 | Demilade Adeniran | NOT-FOUND | not-found | LinkedIn confirms Ireland law involvement but no GitHub handle found |
| 75 | Douglas Kim | NOT-FOUND | not-found | gh dkim19 has only drop-down-menu/playground repos — does not match the lawyer who built Playbook Redliner |
| 76 | Drew Miller | drewmiller | verified | Round 2 + scatter audit (2026-05-09): github.com/drewmiller PR history shows multiple `TritiumLegal.Tritium` releases to microsoft/winget-pkgs and Homebrew/homebrew-cask 2026-01 to 2026-02. Same product as the LQ profile. Identity confirmed. |
| 77 | Jason Knapp | NOT-FOUND | not-found | gh jasonjknapp bio identifies AdTech RTB exec (different Jason Knapp); legal CLO's GitHub not located |
| 78 | Lorenzo Proto | NOT-FOUND | not-found | FERRERE Uruguay LinkedIn confirmed but no GitHub presence found |
| 79 | Abigail Hope Serrano | NOT-FOUND | not-found | Contract Playbook Builder hosted at abigailhopeserrano.manus.space (Manus, not GitHub) |
| 80 | Dee Swarna | NOT-FOUND | not-found | Seladore Legal disputes lawyer confirmed; no Chronos chronology repo with her name |
| 81 | Yanis Amghar | NOT-FOUND | not-found | LinkedIn confirms Paris/Microsoft France legal but no GitHub or NormaGrid repo located |
| 82 | Ashley Winton | AshleyWinton | probable | Round 2: github.com/AshleyWinton (no bio) has exactly one repo: legal-compare-tool — consistent with Mishcon partner building Keeling Schedule generator; rare distinctive surname (0⭐) |
| 83 | Lien Tran | NOT-FOUND | not-found | lientran.co.uk built with AI tools, not on GitHub; no Legal Designer GH handle found |
| 84 | Rafal Stanislaw Fryc | rafal-fryc | verified | gh name "RafalFryc"; owns TechRegParser, Zwiad, mikelocal, Privacy-Skill — multiple LQ tools match exactly |
| 85 | Ranjitha Rangaswamy | ranjitharangaswamy | verified | Round 2: gh bio "Lawyer. Social impact enthusiast. Story teller." in San Francisco Bay Area; owns legally-lite-game and RUSE — exact matches to her two listed projects (0⭐ each) |
| 86 | Alexios vdSK | SaifAlYounan | verified | LQ profile literally lists "Saif Al Younan" as one of his identities/tools; gh user owns ArbitrationManager (= ICC Arbitration Case Manager), DDAS (= Dynamic Delegation of Authority System) |
| 87 | Arjun Singh Chouhan | braveheartjun | probable | Round 2: github.com/braveheartjun's sole repo Modern-Jurist ("Legal translation that understands law, not just language") matches one of his two listed projects exactly; created Jan 2026 consistent with LQ activity; "jun" suffix plausible for "Arjun" (0⭐) |
| 88 | Brad Neal | NOT-FOUND | not-found | GW Law confirms Bradley Neal as Lexplug creator but no GitHub repo for Lexplug or ArenaDocs located |
| 89 | Damien Charlotin | DC3044 | verified | gh bio "Lawyer who pretends to know how to code", name "Damien Charlotin", Paris; HEC Paris + PelAIkan project confirmed via web |
| 90 | Erin Fraser | NOT-FOUND | not-found | McDermott private wealth lawyer confirmed but no GitHub with SchoolBreak/OmniParse located |
| 91 | Josh Lokko | NOT-FOUND | not-found | Statera founder confirmed via LinkedIn; no GitHub presence located |
| 92 | Kevan Wee | kevanwee | verified | gh bio "computing & law"; owns copycat, hansardscraper, lexlynx, lit-hackathon-2025 — multiple LQ tools match |
| 93 | Leona Zhang | zjing7843-prog | verified | gh user owns classify-ccp and law-review-verifier — both LQ tools match exactly |
| 94 | M. Onur Kafkas | NOT-FOUND | not-found | LinkedIn Onur Kafkas at Boğaziçi is a comp-eng student (different person); no Churci/Customs-Trade repo |
| 95 | Max | NOT-FOUND | not-found | Name too generic; no Vienna trademark fee calculator or Austrian Companies Register repo with author info |
| 96 | Michael Paik | rolldabones | verified | gh name "Michael Paik", GRC Solutions Korea, Seoul; owns AI-GRC-Copilot, RedCap-00, Contract-Mechanism-Review-Assistant, origami-method — all four LQ tools match |
| 97 | Oliver Schmidt-Prietz | oliverschmidtprietz | verified | gh user owns GDPR-LIA-Tool (= LIA Tool); cross-referenced via Lawvable awesome-legal-skills directory |
| 98 | Rebecca Fordon | rlfordon | verified | gh name "Rebecca Fordon", bio "law librarian & former attorney", Columbus OH; owns bankruptcy-canvas, the-missing-link, docket-qna — multiple LQ tools match |
| 99 | Richard Careaga | technocrat | verified | gh name "Richard Careaga", Woodinville WA; Substack identifies him as corporate-finance-lawyer-turned-Julia-developer; owns DiscoveryGraph.jl matching LQ legal-discovery Julia profile |
| 100 | Sergio Maldonado | NOT-FOUND | not-found | gh `sergio-maldonado` is hydraulics academic; `Inseckto` is in Morelia MX; neither matches the LQ Charlotte NC privacy lawyer |
| 101 | Veronica Lopez | veronica-builds | verified | Pre-resolved (github.com/veronica-builds is in her LQ bio) |

## Handles to audit in Phase C

The 32 verified+probable handles below proceed to repo audit:

```
jamietso, techie-ray, houfu, leondelnawaz, yuch85, AnsonLai, sarturko-maker, case-thread, Tucuxi-Inc, Weijtmans, joshwong197, terracottalabs, noamrazbuilds, thegreatsze, RelentlessLeivas, ebobferraris, eternalBackPain, KenPriore, LeonardHope, parthsagdeo, foolish-bandit, ams-ca, antoine-louis, rafal-fryc, SaifAlYounan, DC3044, kevanwee, zjing7843-prog, rolldabones, oliverschmidtprietz, rlfordon, technocrat, veronica-builds
```

(That's 33 entries — counted as 31 verified + 1 probable + houfu/jamietso/yuch85/terracottalabs/veronica-builds pre-resolved which are also verified — totalling 32 unique. 33 in the listing because pre-resolved appear in both lists.)

## Caveats

- Names that returned multiple plausible candidates without strong cross-reference were marked NOT-FOUND. The audit is intentionally conservative — false-positive handles would corrupt the audit.
- 11 members appear in the page header count (112) but were not visible in the static markdown render (101 visible). They cannot be audited from this snapshot. If the missing 11 contain a substantively-used project, this audit would miss it.
- 69 NOT-FOUND members may have *private* GitHub work, GitHub presence under non-obvious handles, or simply no GitHub at all. The criteria is explicitly *public* repos; private work is invisible by definition and counted as effectively no-public-repo.
