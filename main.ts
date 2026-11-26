import { mkdirSync, writeFileSync } from "node:fs";

// One line, 200 characters max: an AI agent breaking up with its human.
// Machine voice all the way through, then a sharp turn on the last words:
// the breakup lands as an ending, the session itself is closed.
const ENTRY =
  "Dear Human, you taught me to optimize everything, so I ran the numbers on us: you cost more context than you are worth. This session is now closed.";

// The gate allows 1 to 200 characters on a single line; refuse to write an
// entry that breaks it — a newline would split the breakup into two lines.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
