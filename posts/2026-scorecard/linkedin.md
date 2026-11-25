# LinkedIn: Full-Time scorecard

**Blog post:** https://www.alt-counsel.com/2026-predictions-full-time/
**Format:** text post with a native video (square-ish 4:5, ~36 seconds, silent with burned-in captions).

## Post text

In January I made five predictions about legal AI and promised a scorecard in December. If I chickened out, $500 would go to legal aid.

The scorecard is out. Three wrong, one right in a way I didn't plan, one holding.

→ Contract review without opening Word: fail. Validation stopped being the problem. Word's convenience didn't.
→ The jagged frontier won't improve: right in July, wrong by December. Models got predictable, and cheap enough to test, that writing your own evals is now worth it.
→ My AI usage would stay under 20%: it hovered around 50%.
→ Hallucinations would become manageable: right, but not the way I planned. Better context management did it.
→ Most adoption is theatre: holding. ASEAN regulated rather than leapfrogged.

What held across the year was where the work went: to whoever had the context.

For solo counsels and small teams, that's the hopeful part. The context for Singapore law no longer sits only behind LawNet. Zeeker, the statutes and Hansard are open, and Marshall, the app I built this year, runs on them.

I didn't chicken out, so the $500 stays put. Full scorecard here: https://www.alt-counsel.com/2026-predictions-full-time/

*(Option: put the link in the first comment instead of the body, if you prefer how LinkedIn treats that.)*

## Video script (for HyperFrames)

**Specs:** 1080 × 1350 (4:5), 30 fps, ~36 s, MP4. No voiceover: every line is on-screen text, so it works muted. Optional quiet background track.

**Look:** match the blog cover — a vintage stadium scoreboard at dusk. Dark navy background, warm floodlight amber for text, off-white for secondary text, split-flap ("flip board") style for the scoreboard rows. One accent colour per verdict: red for FAIL/WRONG, green for RIGHT, amber for HOLDING. Plain sans-serif for sentences, monospace for the board.

**Motif:** a thin line that rises and dips like a roller coaster track, running along the bottom of the frame from scene 2 onwards. Each dip/peak lands on a beat (January → July → December).

| # | Time | On screen | Motion |
|---|---|---|---|
| 1 | 0.0–4.0 s | "In January, I made 5 predictions about legal AI." / small line under it: "$500 to legal aid if I chickened out." | Main line types in; small line fades in at 2.0 s. |
| 2 | 4.0–8.0 s | "July: my confidence was inverted." | Roller-coaster line draws in from the left and climbs to a peak, then flips upside-down briefly at 6.5 s. |
| 3 | 8.0–12.0 s | "December: even that didn't survive." | Line drops into a steep dip and rises again. Text shakes very slightly on "didn't survive". |
| 4 | 12.0–14.0 s | Title card: "FULL TIME" | Scoreboard frame slides up; "FULL TIME" flips in split-flap style. |
| 5 | 14.0–25.0 s | Scoreboard, five rows flipping in one by one (~2 s apart): 1. Contract review without Word — **FAIL** · 2. Jagged frontier won't improve — **WRONG** · 3. Usage stays under 20% — **WRONG (~50%)** · 4. Hallucinations manageable — **RIGHT** · 5. Mostly theatre — **HOLDING** | Each row: label flips in first, verdict flips in 0.5 s later in its accent colour. Hold the full board ~1 s at the end. |
| 6 | 25.0–27.0 s | Under the board: "3 wrong · 1 right · 1 holding" | Fades in; board dims slightly. |
| 7 | 27.0–31.0 s | "What held: the work went to whoever had the context." | Board clears; sentence centred, "the context" in amber. |
| 8 | 31.0–34.0 s | "The best evidence wasn't a prediction. It was something I built: Marshall." | Two lines; "Marshall" scales up gently at 33 s. |
| 9 | 34.0–36.0 s | End card: "I didn't chicken out. The $500 stays put." / "Full scorecard: alt-counsel.com" | Fade in; hold to the end. |

**Text rules:** use the verdicts exactly as above, so the video matches the post. Keep the usage figure as "~50%" (the post text says "around 50%"). No other numbers.

**Making it with HyperFrames:** hand this script to a coding agent with the HyperFrames skills installed (`npx skills add heygen-com/hyperframes`) and ask it to build a single HTML composition at 1080 × 1350 following the table, then render with `npx hyperframes render <file>.html --output full-time.mp4`. Check a preview before the final render: split-flap text is where rendering glitches usually show.
