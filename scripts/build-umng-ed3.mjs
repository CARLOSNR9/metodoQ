/**
 * Genera el banco UMNG Simulacro 3 (ED3) desde markdown en bateria_preguntas/umng_ed3_lote_*.md
 * Uso: node scripts/build-umng-ed3.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputDir = path.join(__dirname, "../bateria_preguntas");
const outputDir = path.join(__dirname, "../src/data");

function parseAreaTopic(headerLine) {
  const m = headerLine.match(/\(([^)]+)\)/);
  if (!m) return { examArea: "MEDICINA GENERAL", topic: "General" };
  const parts = m[1].split("/").map((s) => s.trim());
  return {
    examArea: parts[0]?.toUpperCase() ?? "MEDICINA GENERAL",
    topic: (parts[1] ?? parts[0] ?? "General").toUpperCase(),
  };
}

function parseQuestionBlock(raw, qNumber) {
  const qStr = String(qNumber).padStart(2, "0");
  const id = `umng-conv-ed3-${qStr}`;

  const headerMatch = raw.match(/^\s*\(([^)]+)\)/m);
  const { examArea, topic } = headerMatch
    ? parseAreaTopic(`(${headerMatch[1]})`)
    : { examArea: "MEDICINA GENERAL", topic: "General" };

  const statementMatch = raw.match(/\)\s*\n([\s\S]*?)\nA\.\s+/);
  const statement = statementMatch ? statementMatch[1].trim() : raw.split("\nA. ")[0].trim();

  const options = [];
  const letters = ["A", "B", "C", "D"];
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    const nextPattern = i < 3 ? `\\n${letters[i + 1]}\\.\\s+` : `\\n1\\.\\s+RESPUESTA`;
    const optRegex = new RegExp(`^${letter}\\.\\s+([\\s\\S]*?)(?=${nextPattern})`, "m");
    const optMatch = raw.match(optRegex);
    if (optMatch) {
      options.push({ id: letter, label: letter, text: optMatch[1].trim() });
    }
  }

  const correctMatch = raw.match(/✅ Respuesta correcta:\s*([A-D])\./);
  const correctOptionId = correctMatch ? correctMatch[1] : "A";

  // Incorrect feedback from section 3
  for (const opt of options) {
    if (opt.id === correctOptionId) continue;
    const distRegex = new RegExp(
      `${opt.id}\\.\\s*❌\\s*Incorrecta\\.\\s*([\\s\\S]*?)(?=\\n[ABCD]\\.\\s*(?:❌|✔)|\\n4\\.\\s+TRAMPA|$)`,
      "m",
    );
    const distMatch = raw.match(distRegex);
    if (distMatch) {
      opt.incorrectFeedback = distMatch[1].trim().replace(/\s+/g, " ").slice(0, 500);
    }
  }

  const reasoningMatch = raw.match(
    /2\. RAZONAMIENTO CLÍNICO\s*\n([\s\S]*?)(?=\n3\. ANÁLISIS)/,
  );
  const correctAnalysisMatch = raw.match(
    new RegExp(
      `${correctOptionId}\\.\\s*✔\\s*Correcta\\.\\s*([\\s\\S]*?)(?=\\n[ABCD]\\.\\s*(?:❌|✔)|\\n4\\.\\s+TRAMPA|$)`,
      "m",
    ),
  );
  const trampaMatch = raw.match(/4\. TRAMPA DEL EXAMEN\s*\n([\s\S]*?)(?=\n5\. PERLA|$)/);
  const perlaMatch = raw.match(/5\. PERLA PARA RECORDAR\s*\n([\s\S]*?)(?=EXPLICACIÓN DEL PROFE|$)/);
  const profeMatch = raw.match(/EXPLICACIÓN DEL PROFE BY DR Q\s*\n([\s\S]*?)$/);

  let explanationParts = [];
  if (reasoningMatch) explanationParts.push(reasoningMatch[1].trim());
  if (correctAnalysisMatch) explanationParts.push(correctAnalysisMatch[1].trim());
  if (trampaMatch) explanationParts.push(`**Trampa del examen:** ${trampaMatch[1].trim()}`);

  let explanation = explanationParts.join("\n\n");
  if (profeMatch) {
    explanation += `\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\n${profeMatch[1].trim()}`;
  }

  const keyPoints = [];
  if (perlaMatch) {
    const lines = perlaMatch[1]
      .trim()
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);
    for (const line of lines) {
      keyPoints.push(line.replace(/^[-•]\s*/, ""));
    }
  }
  if (keyPoints.length === 0 && perlaMatch) {
    keyPoints.push(perlaMatch[1].trim().slice(0, 200));
  }

  return {
    id,
    university: "UMNG",
    examArea,
    topic,
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed3"],
    statement,
    options,
    correctOptionId,
    explanation,
    keyPoints,
  };
}

function parseLoteFile(loteIndex) {
  const filePath = path.join(inputDir, `umng_ed3_lote_${loteIndex}.md`);
  if (!fs.existsSync(filePath)) {
    console.warn(`Skip: ${filePath} not found`);
    return null;
  }
  const content = fs.readFileSync(filePath, "utf-8");
  const blocks = content.split(/PREGUNTA \d+/).slice(1);
  const startQ = (loteIndex - 1) * 10 + 1;
  const questions = blocks.map((block, i) => parseQuestionBlock(block, startQ + i));

  const startNum = String((loteIndex - 1) * 10 + 1).padStart(2, "0");
  const endNum = String(loteIndex * 10).padStart(2, "0");
  const varName = `UMNG_CONV_ED3_${startNum}_${endNum}_QUESTIONS`;

  const tsContent = `import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UMNG — Edición #3 (Simulacro 3) · Preguntas #${startNum}–#${endNum}.
 */
export const ${varName}: TrainingQuestion[] = ${JSON.stringify(questions, null, 2)};
`;

  const outPath = path.join(outputDir, `umng-conv-ed3-${startNum}-${endNum}-questions.ts`);
  fs.writeFileSync(outPath, tsContent);
  console.log(`Wrote ${outPath} (${questions.length} questions)`);
  return { startNum, endNum, varName, count: questions.length };
}

const vars = [];
for (let i = 1; i <= 10; i++) {
  const result = parseLoteFile(i);
  if (result) vars.push(result);
}

if (vars.length === 0) {
  console.error("No lot files found. Create bateria_preguntas/umng_ed3_lote_1.md … umng_ed3_lote_10.md");
  process.exit(1);
}

let indexContent = vars
  .map(
    (v) =>
      `import { ${v.varName} } from "./umng-conv-ed3-${v.startNum}-${v.endNum}-questions";`,
  )
  .join("\n");
indexContent += `\n\nimport type { TrainingQuestion } from "@/lib/questions/types";\n\n`;
indexContent += `/**\n * Banco completo de preguntas para el Simulacro 3 (UMNG-ED3).\n */\n`;
indexContent += `export const UMNG_CONV_ED3_QUESTIONS: TrainingQuestion[] = [\n`;
for (const v of vars) {
  indexContent += `  ...${v.varName},\n`;
}
indexContent += `];\n\nexport const UMNG_CONV_ED3_QUESTION_COUNT = UMNG_CONV_ED3_QUESTIONS.length;\n`;

fs.writeFileSync(path.join(outputDir, "umng-conv-ed3-questions.ts"), indexContent);
console.log(`Done. Total batches: ${vars.length}, questions: ${vars.reduce((s, v) => s + v.count, 0)}`);
