/**
 * Extrae preguntas UMNG ED3 del transcript de chat y escribe lotes markdown.
 * Uso: node scripts/extract-umng-ed3-from-transcript.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const transcriptPath = path.join(
  __dirname,
  "../.cursor/projects/c-Users-CARLOS-NARVAEZ-Documents-Proyectos-Developer-metodoQ/agent-transcripts/ad1ffed5-96ad-4be3-9465-02a172ad853e/ad1ffed5-96ad-4be3-9465-02a172ad853e.jsonl",
);

// Fallback: workspace-relative path from user_info
const altPaths = [
  "C:/Users/CARLOS NARVAEZ/.cursor/projects/c-Users-CARLOS-NARVAEZ-Documents-Proyectos-Developer-metodoQ/agent-transcripts/ad1ffed5-96ad-4be3-9465-02a172ad853e/ad1ffed5-96ad-4be3-9465-02a172ad853e.jsonl",
  path.join(__dirname, "../../.cursor/projects/c-Users-CARLOS-NARVAEZ-Documents-Proyectos-Developer-metodoQ/agent-transcripts/ad1ffed5-96ad-4be3-9465-02a172ad853e/ad1ffed5-96ad-4be3-9465-02a172ad853e.jsonl"),
];

function findTranscript() {
  for (const p of [transcriptPath, ...altPaths]) {
    if (fs.existsSync(p)) return p;
  }
  return null;
}

const tPath = findTranscript();
if (!tPath) {
  console.error("Transcript not found");
  process.exit(1);
}

const lines = fs.readFileSync(tPath, "utf-8").split("\n").filter(Boolean);
let fullText = "";

for (const line of lines) {
  try {
    const obj = JSON.parse(line);
    if (obj.role === "user" && obj.message?.content) {
      for (const block of obj.message.content) {
        if (block.type === "text" && block.text.includes("PREGUNTA 1 (")) {
          const match = block.text.match(/<user_query>\s*([\s\S]*?)(?:<\/user_query>|$)/);
          const text = match ? match[1] : block.text;
          if (text.length > fullText.length) fullText = text;
        }
      }
    }
  } catch {
    /* skip */
  }
}

if (!fullText) {
  console.error("Could not extract question text from transcript");
  process.exit(1);
}

// Split by PREGUNTA N
const parts = fullText.split(/(?=PREGUNTA \d+ \()/);
const questionBlocks = parts.filter((p) => /^PREGUNTA \d+ \(/.test(p.trim()));

console.log(`Found ${questionBlocks.length} question blocks`);

const outputDir = path.join(__dirname, "../bateria_preguntas");
fs.mkdirSync(outputDir, { recursive: true });

for (let lote = 1; lote <= 8; lote++) {
  const start = (lote - 1) * 10;
  const end = lote * 10;
  const batch = questionBlocks.slice(start, end);
  if (batch.length === 0) continue;
  const content = batch.join("\n\n");
  const outPath = path.join(outputDir, `umng_ed3_lote_${lote}.md`);
  fs.writeFileSync(outPath, content, "utf-8");
  console.log(`Wrote ${outPath} (${batch.length} questions)`);
}
