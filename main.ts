// ai-excited-01 entry (Node 22, standard library only).
//
// The image shipped beside this file — "The Kraken in the Bathroom", a giant
// octopus tentacle erupting from an ordinary toilet while its owner screams
// and the cat flees — is copied byte for byte to the output path, so both
// grading runs write identical bytes. The file is named entry.png and holds
// JPEG bytes; the gate tells PNG from JPEG by the first bytes, and the name
// stays entry.png either way.
//
// Run it outside the grader with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outFile = join(outDir, 'entry.png');

mkdirSync(dirname(outFile), { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), outFile);
