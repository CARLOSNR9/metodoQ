import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const jsonlPath =
  "C:/Users/USUARIO/.cursor/projects/d-ProyectosDeveloper-Metodoq/agent-transcripts/ff7e44b8-8459-4e8f-874c-c08d975a25f4/ff7e44b8-8459-4e8f-874c-c08d975a25f4.jsonl";

const jsonl = fs.readFileSync(jsonlPath, "utf8");
const lines = jsonl.split("\n").filter(Boolean);
let text = "";
for (const line of lines) {
  const obj = JSON.parse(line);
  if (
    obj.role === "user" &&
    obj.message?.content?.[0]?.text?.includes("llegaron 30 preguntas nuevas")
  ) {
    text = obj.message.content[0].text;
    break;
  }
}
if (!text) throw new Error("User message not found in transcript");

const marker = "PREGUNTA 1 (HEMATOLOGÍA)";
const idx = text.indexOf(marker);
if (idx === -1) throw new Error("PREGUNTA 1 marker not found");
let content = text.slice(idx).trimEnd();

const out = path.join(__dirname, "professor-preguntas-381-410.txt");
fs.writeFileSync(out, content, "utf8");
console.log(`Wrote ${out} (${content.length} chars)`);
console.log("PREGUNTA count:", (content.match(/PREGUNTA \d+/g) || []).length);
