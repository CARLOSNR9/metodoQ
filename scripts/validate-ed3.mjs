import fs from "fs";
import path from "path";

const dir = "src/data";
const files = fs
  .readdirSync(dir)
  .filter((f) => f.startsWith("umng-conv-ed3-") && f.endsWith(".ts") && f !== "umng-conv-ed3-questions.ts");

let total = 0;
for (const f of files) {
  const content = fs.readFileSync(path.join(dir, f), "utf8");
  const questions = JSON.parse(content.match(/\[[\s\S]*\];$/)[0].slice(0, -1));
  total += questions.length;
  for (const q of questions) {
    if (!q.statement?.trim()) console.log("Empty statement:", q.id);
    if (!q.options?.length) console.log("No options:", q.id);
    if (!q.correctOptionId) console.log("No correct:", q.id);
  }
}
console.log("Total questions:", total);
