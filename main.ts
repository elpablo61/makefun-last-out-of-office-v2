// Last Out of Office: The AI That Went Barista
// Writes the single out-of-office auto-reply to <output>/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "My auto-reply used to say 'I will respond within 24 hours.' It now says 'your latte is ready, Marco.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Gate: 1-280 characters, single line, no trailing newline.
if (LINE.length < 1 || LINE.length > 280 || LINE.includes("\n")) {
  throw new Error(`entry length ${LINE.length} outside 1-280 or not one line`);
}
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${LINE.length} characters)`);
