import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(
  __dirname,
  "../src/data/dr-q-coexam-extension-381-410-questions.ts",
);

const META = {
  1: { examArea: "HEMATOLOGÍA", topic: "HEMATOLOGÍA", slug: "hematologia", correct: "B" },
  2: { examArea: "NEUMOLOGÍA", topic: "NEUMOLOGÍA", slug: "neumologia", correct: "B" },
  3: { examArea: "MEDICINA PREVENTIVA - NEUMOLOGÍA", topic: "NEUMOLOGÍA", slug: "neumologia", correct: "C" },
  4: { examArea: "MEDICINA INTERNA - NEUMOLOGÍA", topic: "NEUMOLOGÍA", slug: "neumologia", correct: "C" },
  5: { examArea: "ORTOPEDIA - ONCOLOGÍA", topic: "ORTOPEDIA", slug: "ortopedia", correct: "C" },
  6: { examArea: "ORTOPEDIA - ONCOLOGÍA", topic: "ORTOPEDIA", slug: "ortopedia", correct: "B" },
  7: { examArea: "ORTOPEDIA - PEDIATRÍA", topic: "ORTOPEDIA", slug: "ortopedia", correct: "B" },
  8: { examArea: "CARDIOLOGÍA", topic: "CARDIOLOGÍA", slug: "cardiologia", correct: "C" },
  9: { examArea: "CARDIOLOGÍA", topic: "CARDIOLOGÍA", slug: "cardiologia", correct: "A" },
  10: { examArea: "CIRUGÍA GENERAL", topic: "CIRUGÍA GENERAL", slug: "cirugia_general", correct: "C" },
  11: { examArea: "CIRUGÍA GENERAL", topic: "CIRUGÍA GENERAL", slug: "cirugia_general", correct: "B" },
  12: { examArea: "CIRUGÍA GENERAL", topic: "CIRUGÍA GENERAL", slug: "cirugia_general", correct: "C" },
  13: { examArea: "CIRUGÍA GENERAL - TRAUMA", topic: "CIRUGÍA GENERAL", slug: "cirugia_general", correct: "C" },
  14: { examArea: "CIRUGÍA GENERAL - TRAUMA", topic: "CIRUGÍA GENERAL", slug: "cirugia_general", correct: "C" },
  15: { examArea: "PEDIATRÍA - NUTRICIÓN", topic: "PEDIATRÍA", slug: "pediatria", correct: "B" },
  16: { examArea: "PEDIATRÍA - NUTRICIÓN", topic: "PEDIATRÍA", slug: "pediatria", correct: "C" },
  17: { examArea: "PEDIATRÍA - NEUMOLOGÍA", topic: "PEDIATRÍA", slug: "pediatria", correct: "B" },
  18: { examArea: "PEDIATRÍA - INFECTOLOGÍA", topic: "PEDIATRÍA", slug: "pediatria", correct: "B" },
  19: { examArea: "GINECOLOGÍA - ENFERMEDADES DE TRANSMISIÓN SEXUAL", topic: "GINECOLOGÍA Y OBSTETRICIA", slug: "ginecologia_y_obstetricia", correct: "B" },
  20: { examArea: "GINECOLOGÍA Y OBSTETRICIA - DIABETES GESTACIONAL", topic: "GINECOLOGÍA Y OBSTETRICIA", slug: "ginecologia_y_obstetricia", correct: "B" },
  21: { examArea: "GINECOLOGÍA Y OBSTETRICIA - DIABETES GESTACIONAL", topic: "GINECOLOGÍA Y OBSTETRICIA", slug: "ginecologia_y_obstetricia", correct: "B" },
  22: { examArea: "GINECOLOGÍA Y OBSTETRICIA - PROMOCIÓN Y MANTENIMIENTO DE LA SALUD", topic: "GINECOLOGÍA Y OBSTETRICIA", slug: "ginecologia_y_obstetricia", correct: "C" },
  23: { examArea: "GINECOLOGÍA Y OBSTETRICIA - CÁNCER DE CUELLO UTERINO", topic: "GINECOLOGÍA Y OBSTETRICIA", slug: "ginecologia_y_obstetricia", correct: "C" },
  24: { examArea: "GINECOLOGÍA Y OBSTETRICIA - TAMIZACIÓN DE CÁNCER DE CUELLO UTERINO", topic: "GINECOLOGÍA Y OBSTETRICIA", slug: "ginecologia_y_obstetricia", correct: "C" },
  25: { examArea: "GINECOLOGÍA Y OBSTETRICIA - TAMIZACIÓN DE CÁNCER DE CUELLO UTERINO", topic: "GINECOLOGÍA Y OBSTETRICIA", slug: "ginecologia_y_obstetricia", correct: "C" },
  26: { examArea: "GINECOLOGÍA Y OBSTETRICIA - RUPTURA PREMATURA DE MEMBRANAS PRETÉRMINO", topic: "GINECOLOGÍA Y OBSTETRICIA", slug: "ginecologia_y_obstetricia", correct: "B" },
  27: { examArea: "URGENCIAS - TRAUMA CRANEOENCEFÁLICO", topic: "URGENCIAS", slug: "urgencias", correct: "C" },
  28: { examArea: "URGENCIAS - TRAUMA CRANEOENCEFÁLICO", topic: "URGENCIAS", slug: "urgencias", correct: "C" },
  29: { examArea: "PSIQUIATRÍA - URGENCIAS PSIQUIÁTRICAS", topic: "PSIQUIATRÍA", slug: "psiquiatria", correct: "C" },
  30: { examArea: "PSIQUIATRÍA - ESQUIZOFRENIA", topic: "PSIQUIATRÍA", slug: "psiquiatria", correct: "C" },
};

function parseProfessorBlocks(raw) {
  const parts = raw.split(/(?:^|\n)PREGUNTA (\d+) \(/);
  const blocks = {};
  for (let i = 1; i < parts.length; i += 2) {
    const num = Number(parts[i]);
    blocks[num] = parseBlock(parts[i + 1], num);
  }
  return blocks;
}

function parseBlock(body, num) {
  const bodyClean = body.replace(/^[^)]+\)\r?\n/, "");

  const optionsStart = bodyClean.search(/^A\. /m);
  const correctLineIdx = bodyClean.search(/^✅ Respuesta correcta:/m);
  if (optionsStart === -1 || correctLineIdx === -1) {
    throw new Error(`Could not parse statement/options for PREGUNTA ${num}`);
  }

  const statement = bodyClean.slice(0, optionsStart).trim();
  const optionsSection = bodyClean.slice(optionsStart, correctLineIdx);
  const options = [];
  for (const line of optionsSection.split("\n")) {
    const m = line.match(/^([A-D])\.\s*(.+)$/);
    if (m) options.push({ id: m[1], label: m[1], text: m[2].trim() });
  }
  if (options.length !== 4) {
    throw new Error(`PREGUNTA ${num}: expected 4 options, got ${options.length}`);
  }

  const afterCorrect = bodyClean.slice(correctLineIdx);
  const answerMatch = afterCorrect.match(
    /✅ Respuesta correcta:[^\n]*\n([\s\S]*?)(?:\n_{3,}|\nLo que debes saber para el examen|\n*$)/,
  );
  const correctLine = afterCorrect.match(/✅ Respuesta correcta: ([^\n]+)/);
  const explanation =
    (answerMatch?.[1]?.trim() || correctLine?.[1]?.trim() || "").replace(
      /^[A-D]\.\s*/,
      "",
    );

  const cuandoMatch = bodyClean.match(
    /Cuando veas:\n([\s\S]*?)\nDebes pensar (?:en|primero):\n([\s\S]*?)\nTema: ([^\n]+)/,
  );
  if (!cuandoMatch) throw new Error(`Missing keyPoints block for PREGUNTA ${num}`);
  const cuando = cuandoMatch[1]
    .split("\n")
    .map((line) => line.replace(/^[•●]\s*/, "").trim())
    .filter(Boolean)
    .join(" ");
  const keyPoints = [
    `Cuando veas: ${cuando}`,
    `Debes pensar en: ${cuandoMatch[2].trim()}`,
    `Tema: ${cuandoMatch[3].trim()}`,
  ];

  const theoryMatch = bodyClean.match(
    /EXPLICACIÓN DEL PROFE:?\s*BY DR Q\n([\s\S]*?)(?:\n_{3,}\n\nPREGUNTA |\n\nPREGUNTA |\n*$)/,
  );
  let theoryContent = theoryMatch
    ? `EXPLICACIÓN DEL PROFE BY DR Q\n${theoryMatch[1].trim()}`
    : "";
  if (!theoryContent && explanation) {
    theoryContent = `EXPLICACIÓN DEL PROFE BY DR Q\n${explanation}`;
  }
  if (!theoryContent) {
    throw new Error(`Missing theoryContent for PREGUNTA ${num}`);
  }

  return { statement, options, explanation, keyPoints, theoryContent };
}

function escapeTemplate(str) {
  return str.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

function renderQuestion(q) {
  const options = q.options
    .map(
      (opt) =>
        `      { id: "${opt.id}", label: "${opt.label}", text: ${JSON.stringify(opt.text)} },`,
    )
    .join("\n");
  const keyPoints = q.keyPoints.map((kp) => `      ${JSON.stringify(kp)},`).join("\n");
  const tags = [
    "dr-q", "universal", "metodoq", "univalle", "udea", "caldas", "ucc_pasto", "unimilitar", q.slug,
  ].map((t) => JSON.stringify(t)).join(",");

  return `  {
    id: "dr-q-${q.id}",
    examArea: ${JSON.stringify(q.examArea)},
    topic: ${JSON.stringify(q.topic)},
    difficulty: ${JSON.stringify(q.difficulty)},
    tags: [${tags}],
    statement: ${JSON.stringify(q.statement)},
    options: [
${options}
    ],
    correctOptionId: "${q.correctOptionId}",
    explanation: ${JSON.stringify(q.explanation)},
    keyPoints: [
${keyPoints}
    ],
    theoryContent: \`${escapeTemplate(q.theoryContent)}\`,
  }`;
}

const raw = fs.readFileSync(
  path.join(__dirname, "professor-preguntas-381-410.txt"),
  "utf8",
);
const blocks = parseProfessorBlocks(raw);

const questions = [];
for (let n = 1; n <= 30; n++) {
  const prof = blocks[n];
  const meta = META[n];
  if (!prof) throw new Error(`Missing PREGUNTA ${n}`);
  questions.push({
    id: 380 + n,
    examArea: meta.examArea,
    topic: meta.topic,
    slug: meta.slug,
    difficulty: "medium",
    correctOptionId: meta.correct,
    ...prof,
  });
}

const fileContent = `import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Banco universal MetodoQ · Dr. Q — extensión coexam dr-q-381 a dr-q-410.
 * Bloque multi-universidad PREGUNTA 1–30 — adición neta al banco.
 */
export const DR_Q_COEXAM_EXTENSION_381_410_QUESTIONS: TrainingQuestion[] = [
${questions.map(renderQuestion).join(",\n")}
];
`;

fs.writeFileSync(outPath, fileContent, "utf8");
console.log(`Generated ${outPath} with ${questions.length} questions (dr-q-381 to dr-q-410)`);
