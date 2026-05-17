import fs from "fs";

const content = fs.readFileSync("src/components/demo/demo-view.tsx", "utf8");
const startMarker = "const demoQuestions: DemoQuestion[] = [";
const endMarker = "];\n\nexport function DemoView";
const start = content.indexOf(startMarker);
const end = content.indexOf(endMarker);

if (start < 0 || end < 0) {
  console.error("markers not found", start, end);
  process.exit(1);
}

const body = content.slice(start + startMarker.length, end + 1);
const header = `import type { TrainingQuestion } from "@/lib/questions/types";\n\nexport const FALLBACK_QUESTIONS: TrainingQuestion[] = `;
fs.writeFileSync("src/data/fallback-questions.ts", header + body);
console.log("OK", body.length, "chars");
