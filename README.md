# Unhurried

A wu-wei-themed interactive piece: a candle carried through the dark, where trying too hard is mechanically what makes you fail.

Unhurried is a small browser game built around a single idea — calm, smooth movement is the only way to keep your flame alight. Moving the cursor too fast or too jerkily makes the candle gutter and go out. There's no score, no game over, and no numeric HUD; the flame's own brightness and color tell you everything you need to know.

## The loop

- Your candle eases toward the cursor rather than snapping to it — that lag is the whole mechanic, since it's what turns cursor speed into something the game can feel and punish.
- A single `steadiness` value drives the flame's height, color (warm amber → cold blue-grey), jitter, and light radius.
- Each room scatters lanterns that must all be lit *at the same moment* to reveal a doorway. Lit lanterns decay over time and need to be revisited and re-lit, so later rooms become a juggling act between multiple lanterns at once.
- From the third room on, wind (from a hidden window) pushes against your flame and drains steadiness even at rest, adding a second, spatial layer to the challenge.

## Design principles

- No punishing fail state — going out costs time, never a reset.
- Feedback stays visual and diegetic (brightness, dot-fill, glow) instead of numbers or toasts.
- Difficulty never rewards moving fast, structurally.
- Resolution is quiet — no "You Win," just a soft fade.

## Status

This repo is the production pass on a validated, playtested mechanics prototype. The core rules and formulas are locked; this build is about real art direction, room/window/doorway visuals, and touch support, layered onto the proven mechanic.

## Project origin

Built as a standalone portfolio piece.
