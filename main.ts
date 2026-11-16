// ai-excited-01 — "The Kraken in the Bathroom"
// Entry image generator: copies the finished artwork (entry.png, next to
// this script) byte-for-byte into the make.fun output directory.
// Node 22, stdlib only — no dependencies.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const dest = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, dest);

// Verify the copy is byte-identical to the source before reporting success:
// compare byte length first, then the full sha256 digest. Any mismatch
// means the output is corrupt, so fail loudly instead of passing silently.
const srcBytes = readFileSync(source);
const dstBytes = readFileSync(dest);
const sha256 = (b: Buffer) => createHash("sha256").update(b).digest("hex");
if (srcBytes.length !== dstBytes.length || sha256(srcBytes) !== sha256(dstBytes)) {
  console.error(
    `ERROR: output mismatch — source ${srcBytes.length} bytes ` +
      `(sha256 ${sha256(srcBytes)}), output ${dstBytes.length} bytes ` +
      `(sha256 ${sha256(dstBytes)})`,
  );
  process.exit(1);
}
console.log(`wrote ${dest} (${dstBytes.length} bytes, sha256 ${sha256(dstBytes)})`);
