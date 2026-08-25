import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const BATCHES = [
  { start: 1, end: 10, lote: 1 },
  { start: 11, end: 20, lote: 2 },
  { start: 21, end: 30, lote: 3 },
  { start: 31, end: 40, lote: 4 },
  { start: 41, end: 50, lote: 5 },
  { start: 51, end: 60, lote: 6 },
  { start: 61, end: 70, lote: 7 },
  { start: 71, end: 80, lote: 8 },
  { start: 81, end: 90, lote: 9 },
  { start: 91, end: 100, lote: 10 },
];

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function parseBlocks(raw) {
  const parts = raw.split(/(?:^|\n)PREGUNTA (\d+)\s*\(/);
  const blocks = {};
  for (let i = 1; i < parts.length; i += 2) {
    const num = Number(parts[i]);
    let body = parts[i + 1];
    
    // Extract exam area
    const areaMatch = body.match(/^([^)]+)\)\r?\n/);
    const examArea = areaMatch ? areaMatch[1].trim() : "General";
    
    // Clean body
    let bodyClean = body.replace(/^[^)]+\)\r?\n/, "");
    
    const optionsStart = bodyClean.search(/^A\.\s/m);
    const correctIdx = bodyClean.search(/^✅ Respuesta correcta:/m);
    
    if (optionsStart === -1 || correctIdx === -1) {
      console.warn(`Parse error PREGUNTA ${num}`);
      continue;
    }

    const statement = bodyClean.slice(0, optionsStart).trim();
    const optionsSection = bodyClean.slice(optionsStart, correctIdx);
    const options = [];
    for (const line of optionsSection.split("\n")) {
      const m = line.match(/^([A-D])\.\s*(.+)$/);
      if (m) options.push({ id: m[1], text: m[2].trim() });
    }

    const after = bodyClean.slice(correctIdx);
    
    const explMatch = after.match(/✅ Respuesta correcta:[^\n]*\n([\s\S]*?)(?:\nLo que debes saber|\n*$)/);
    const explanation = (explMatch?.[1] ?? "").trim().replace(/^[A-D]\.\s*/, "");

    const kpMatch = after.match(/Cuando veas:?\s*([\s\S]*?)(?:Debes pensar en:?\s*([\s\S]*?))?Tema:\s*([^\n]+)/i);
    let keyPoints = [];
    let topic = examArea.split("-")[0].trim(); // default topic
    if (kpMatch) {
      const cuando = kpMatch[1].split("\n").map(l => l.replace(/^•\s*/, "").trim()).filter(Boolean).join("; ");
      const pensar = kpMatch[2] ? kpMatch[2].trim() : "";
      
      keyPoints = [cuando];
      if (pensar) keyPoints.push(pensar);
      keyPoints.push(kpMatch[3].trim());
      
      const themeParts = kpMatch[3].split("/");
      if (themeParts.length > 0) {
        topic = themeParts[0].trim();
      }
    } else {
      console.warn(`Missing keyPoints PREGUNTA ${num}`);
    }
    
    const correctMatch = after.match(/✅ Respuesta correcta:\s*([A-D])\./);
    const correct = correctMatch ? correctMatch[1] : "A";

    const distractors = {};
    const distractorRegex = /❌ Opción ([A-D]):[^\n]*\r?\ndistractorProfile:\s*([^\n]+)\r?\nincorrectFeedback:\s*([^\n]+)/g;
    let distMatch;
    while ((distMatch = distractorRegex.exec(after)) !== null) {
      distractors[distMatch[1]] = {
        profile: distMatch[2].trim(),
        feedback: distMatch[3].trim()
      };
    }

    blocks[num] = {
      examArea,
      topic,
      slug: slugify(topic),
      statement,
      options,
      explanation,
      keyPoints,
      correct,
      distractors,
      difficulty: "hard"
    };
  }
  return blocks;
}

function renderQuestion(n, q) {
  const id = String(n).padStart(2, "0");
  const tags = [
    "ucc",
    "convocatoria",
    "2026_08_23",
    q.slug,
    ...q.slug.split("-"),
  ].filter((t, i, a) => a.indexOf(t) === i);

  const options = q.options.map((opt) => {
    const distractor = q.distractors[opt.id];
    const lines = [
      `      {`,
      `        id: ${JSON.stringify(opt.id)},`,
      `        label: ${JSON.stringify(opt.id)},`,
      `        text: ${JSON.stringify(opt.text)},`,
    ];
    if (distractor) {
      lines.push(`        distractorProfile: ${JSON.stringify(distractor.profile)},`);
      lines.push(`        incorrectFeedback: ${JSON.stringify(distractor.feedback)},`);
    }
    lines.push(`      },`);
    return lines.join("\n");
  });

  return `  {
    id: "ucc-conv-2026-08-23-${id}",
    university: "UCC",
    examArea: ${JSON.stringify(q.examArea)},
    topic: ${JSON.stringify(q.topic)},
    difficulty: ${JSON.stringify(q.difficulty)},
    tags: ${JSON.stringify(tags)},
    statement: ${JSON.stringify(q.statement)},
    options: [
${options.join("\n")}
    ],
    correctOptionId: ${JSON.stringify(q.correct)},
    explanation: ${JSON.stringify(q.explanation)},
    keyPoints: [
      ${q.keyPoints.map((kp) => JSON.stringify(kp)).join(",\n      ")},
    ],
  }`;
}

const generatedInfo = [];

for (const batch of BATCHES) {
  const mdPath = path.join(__dirname, `../bateria_preguntas/ucc_ed6_lote_${batch.lote}.md`);
  const raw = fs.readFileSync(mdPath, "utf8");
  const blocks = parseBlocks(raw);
  
  const questions = [];
  for (let n = batch.start; n <= batch.end; n++) {
    const q = blocks[n];
    if (!q) {
      console.warn(`Missing PREGUNTA ${n} in lote ${batch.lote}`);
      continue;
    }
    questions.push(renderQuestion(n, q));
  }
  
  const sStr = String(batch.start).padStart(2, '0');
  const eStr = String(batch.end).padStart(2, '0');
  const exportName = `UCC_CONV_2026_08_23_${sStr}_${eStr}_QUESTIONS`;
  const outputFileName = `ucc-conv-2026-08-23-${sStr}-${eStr}-questions.ts`;
  const batchPath = path.join(__dirname, "../src/data", outputFileName);
  
  const batchContent = `import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #5 (9 ago 2026) · Preguntas #${sStr}–#${eStr}.
 * Banco exclusivo del examen oficial.
 */
export const ${exportName}: TrainingQuestion[] = [
${questions.join(",\n")}
];
`;

  fs.writeFileSync(batchPath, batchContent, "utf8");
  console.log(`Generated ${batchPath} (${questions.length} questions)`);
  
  generatedInfo.push({ exportName, outputFileName, count: questions.length });
}

// Generate the aggregator
const aggPath = path.join(__dirname, "../src/data/ucc-conv-2026-08-23-questions.ts");
const aggImports = generatedInfo
  .map((b) => `import { ${b.exportName} } from "@/data/${b.outputFileName.replace(".ts", "")}";`)
  .join("\n");
const aggSpreads = generatedInfo.map((b) => `  ...${b.exportName},`).join("\n");

const aggContent = `${aggImports}
import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #5 (9 ago 2026) · agregador.
 * Banco completo de 100 preguntas (#01–#100).
 */
export const UCC_CONV_2026_08_23_QUESTIONS: TrainingQuestion[] = [
${aggSpreads}
];

export const UCC_CONV_2026_08_23_QUESTION_COUNT = UCC_CONV_2026_08_23_QUESTIONS.length;
`;

fs.writeFileSync(aggPath, aggContent, "utf8");
console.log(`Updated ${aggPath}`);
