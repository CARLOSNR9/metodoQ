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
    obj.message?.content?.[0]?.text?.includes("llegaron nuevas preguntas para al")
  ) {
    text = obj.message.content[0].text;
  }
}
if (!text) throw new Error("User message not found in transcript");

const marker = "Pregunta 1 – Básicas, Inmunología";
const idx = text.indexOf(marker);
if (idx === -1) throw new Error("Pregunta 1 marker not found");
const content = text.slice(idx).trimEnd();

const out = path.join(__dirname, "professor-preguntas-411-420.txt");
fs.writeFileSync(out, content, "utf8");
console.log(`Wrote ${out} (${content.length} chars)`);
console.log("Pregunta count:", (content.match(/Pregunta \d+ –/g) || []).length);
