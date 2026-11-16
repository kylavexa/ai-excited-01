# The Kraken in the Bathroom

[![make.fun · ai-excited-01](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/kylavexa/ai-excited-01/rank.svg)](https://make.fun/bounty/ai-excited-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/kylavexa/ai-excited-01/reward.svg)](https://make.fun/bounty/ai-excited-01?utm_source=github&utm_medium=readme&utm_campaign=ai-excited-01)

Entry for the [ai-excited-01 bounty](https://make.fun/bounty/ai-excited-01) on
[make.fun](https://make.fun): an image that makes the viewer say "AI is
exciting" — a single impossible moment, rendered photorealistically.

## The image

**"The Kraken in the Bathroom"** — one giant purple octopus tentacle bursts
out of a white toilet in a small, ordinary bathroom. Water sprays upward as
the tentacle curls high toward the ceiling, a single huge focal object in the
middle of the frame. A man in a blue bathrobe screams and slips backward with
his arms flailing, a ginger cat leaps away in front, and rolls of toilet paper
fly through the air. Warm morning light comes through a small window.
High-detail photorealism, dramatic diagonal composition. No text in the image.

The joke lands at a glance and still holds up at 300 px: purple tentacle,
screaming man, fleeing cat — all readable at thumbnail size.

## How it works

`main.ts` (Node 22, stdlib only, no dependencies) copies the finished artwork
`entry.png` byte-for-byte into the make.fun output directory, then verifies
the copy by comparing byte length and SHA-256 against the source — and exits
non-zero with an error if they ever differ.

```sh
# default output: /output/entry.png
node main.ts

# or point it anywhere:
MAKEFUN_OUTPUT_DIR=./out node main.ts
```

## Files

| File | What it is |
| --- | --- |
| `main.ts` | Entry script — copies + verifies `entry.png` |
| `entry.png` | The finished artwork (1024×1024 JPEG, 338 KB) |
| `README.md` | This file |
| `LICENSE` | MIT |

## License

MIT — see [LICENSE](LICENSE).
