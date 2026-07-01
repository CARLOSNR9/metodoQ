import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const coexamPath = path.join(__dirname, "../src/data/dr-q-coexam-questions.ts");
const RESTORE_COMMIT = "5f0648f";

const oldContent = execSync(
  `git show ${RESTORE_COMMIT}:src/data/dr-q-coexam-questions.ts`,
  { encoding: "utf8" },
);

function extractBlock(content, num) {
  const startRe = new RegExp(`  \\{\\r?\\n    id: "dr-q-${num}"`);
  const endRe = new RegExp(`  \\{\\r?\\n    id: "dr-q-${num + 1}"`);
  const startMatch = content.match(startRe);
  const endMatch = content.match(endRe);
  if (!startMatch || !endMatch) {
    throw new Error(`Could not extract dr-q-${num} from commit ${RESTORE_COMMIT}`);
  }
  return content.slice(startMatch.index, endMatch.index);
}

const restoredBlocks = [];
for (let num = 156; num <= 175; num++) {
  restoredBlocks.push(extractBlock(oldContent, num));
}

const content = fs.readFileSync(coexamPath, "utf8");
const startMatch = content.match(/  \{\r?\n    id: "dr-q-156"/);
const endMatch = content.match(/  \{\r?\n    id: "dr-q-176"/);
if (!startMatch || !endMatch) {
  throw new Error("Could not find patch boundaries dr-q-156 / dr-q-176");
}

const rendered = restoredBlocks.join("\n");
const newContent =
  content.slice(0, startMatch.index) + rendered + content.slice(endMatch.index);
fs.writeFileSync(coexamPath, newContent, "utf8");
console.log(
  `Restored dr-q-156 through dr-q-175 from commit ${RESTORE_COMMIT}`,
);
