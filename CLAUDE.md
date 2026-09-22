# Unhurried

A wu-wei-themed browser game: a candle carried through the dark, where trying too hard is mechanically what makes you fail. Standalone portfolio project — no dependency on any other site or codebase.

This is a production art/integration pass on top of an already-playtested mechanics prototype. The full design spec lives in `Unhurried - Production Brief.md` at the repo root (gitignored — local only, ask the user if it's missing).

## Stack

- Vite + TypeScript, no framework (vanilla-ts). The game is one canvas render loop driven by cursor input — a component/reactivity layer isn't earned here.
- `npm run dev` — dev server
- `npm run build` — typecheck (`tsc -b`) + production build
- `npm run preview` — preview the production build

## Layout

- `src/main.ts` — canvas setup, pointer tracking, render loop
- `src/systems/` — game systems (steadiness, rooms/lanterns, doorway, wind), one concern per file
- `src/systems/steadiness.ts` — locked constants from the brief; don't retune without re-testing against the reference prototype

## Load-bearing design rules (do not break)

These were playtested and held up against tempting alternatives — treat as constraints, not style:

- **No punishing fail state.** Extinguishing costs time and a diminished relight (steadiness resets to 0.22), never a reset or game over.
- **No score, no "You Win," no numeric HUD** except the one deliberate exception: the room-intro lantern count caption. Everything else is visual/diegetic (brightness, dot-fill, glow).
- **Difficulty never rewards speed — structurally.** Any new difficulty lever must punish speed/jerk directly, like steadiness and wind already do.
- **Resolution is quiet.** Doorway transitions fade; nothing announces success.

## Known bugs — do not reintroduce

- **Relight teleport exploit.** Relighting must only set the candle's *target*, never its position directly — it still has to ease back in, which is what makes a big gutter-to-relight gap self-correct instead of becoming a free teleport.
- **NaN crash from field-name mismatch.** A lantern `pulse`/`phase` mismatch once produced `NaN` inside a canvas gradient and silently killed the render loop. Keep the render loop wrapped so a bad value degrades instead of hard-freezing (see `src/main.ts`).
- **Cursor visibility on load.** Only hide the OS cursor once pointer tracking has actually started (first move/enter), not unconditionally from page load.

Full formulas, room/wind/doorway scaling curves, and art direction notes are in the production brief — treat this file as a summary and pointer, not a replacement.
