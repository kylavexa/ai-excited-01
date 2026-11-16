# ai-excited-01 — "The Kraken in the Bathroom"

One image made to get the AI judge excited, for make.fun's `ai-excited-01`
competition.

## The image

A small, ordinary bathroom in warm morning light. Out of an ordinary white
toilet bowl erupts a giant purple octopus tentacle, water exploding upward,
curling high toward the ceiling as the single huge focal point. The man in
the blue bathrobe screams and slips backward, arms flailing; a ginger cat
leaps away mid-air; a roll of toilet paper unspools through the air.

Why this scene: it follows the recipe of one impossible event in the middle
of an everyday scene, with a visible human reaction, humour, photorealistic
detail, warm cinematic light, and one strong focal object — the tentacle —
that still reads clearly at ~300 px across.

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` byte for byte
to `$MAKEFUN_OUTPUT_DIR/entry.png` (or `/output/entry.png`), so both grading
runs write identical bytes.

`entry.png` is 1024×1024, 338,116 bytes (JPEG bytes under the `entry.png`
name, which the gate allows), generated in this build session and resized
from the 1600×1600 render with Lanczos.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
