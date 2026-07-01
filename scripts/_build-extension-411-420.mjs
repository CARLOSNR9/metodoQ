import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(
  __dirname,
  "../src/data/dr-q-coexam-extension-411-420-questions.ts",
);

const META = {
  1: { examArea: "BÁSICAS", topic: "INMUNOLOGÍA", slug: "inmunologia", correct: "D" },
  2: { examArea: "BÁSICAS", topic: "INMUNOLOGÍA", slug: "inmunologia", correct: "C" },
  3: { examArea: "BÁSICAS", topic: "INMUNOLOGÍA", slug: "inmunologia", correct: "B" },
  4: { examArea: "BÁSICAS", topic: "INMUNOLOGÍA", slug: "inmunologia", correct: "B" },
  5: { examArea: "BÁSICAS", topic: "INMUNOLOGÍA", slug: "inmunologia", correct: "B" },
  6: { examArea: "BÁSICAS", topic: "INMUNOLOGÍA", slug: "inmunologia", correct: "B" },
  7: { examArea: "BÁSICAS", topic: "INMUNOLOGÍA", slug: "inmunologia", correct: "C" },
  8: { examArea: "BÁSICAS", topic: "INMUNOLOGÍA", slug: "inmunologia", correct: "B" },
  9: { examArea: "BÁSICAS", topic: "INMUNOLOGÍA", slug: "inmunologia", correct: "C" },
  10: { examArea: "BÁSICAS", topic: "INMUNOLOGÍA", slug: "inmunologia", correct: "C" },
};

function parseProfessorBlocks(raw) {
  const parts = raw.split(/(?:^|\n)Pregunta (\d+) –/);
  const blocks = {};
  for (let i = 1; i < parts.length; i += 2) {
    const num = Number(parts[i]);
    blocks[num] = parseBlock(parts[i + 1], num);
  }
  return blocks;
}

function parseBlock(body, num) {
  const bodyClean = body.replace(/^[^\n]+\n/, "");

  const optionsStart = bodyClean.search(/^A\. /m);
  const correctLineIdx = bodyClean.search(/^✅ Respuesta correcta:/m);
  if (optionsStart === -1 || correctLineIdx === -1) {
    throw new Error(`Could not parse statement/options for Pregunta ${num}`);
  }

  const statement = bodyClean.slice(0, optionsStart).trim();
  const optionsSection = bodyClean.slice(optionsStart, correctLineIdx);
  const options = [];
  for (const line of optionsSection.split("\n")) {
    const m = line.match(/^([A-D])\.\s*(.+)$/);
    if (m) options.push({ id: m[1], label: m[1], text: m[2].trim() });
  }
  if (options.length !== 4) {
    throw new Error(`Pregunta ${num}: expected 4 options, got ${options.length}`);
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

  let keyPoints;
  const cuandoMatch = bodyClean.match(
    /Cuando veas:\n([\s\S]*?)\nDebes pensar (?:en|primero):\n([\s\S]*?)\nTema: ([^\n]+)/,
  );
  if (cuandoMatch) {
    const cuando = cuandoMatch[1]
      .split("\n")
      .map((line) => line.replace(/^[•●]\s*/, "").trim())
      .filter(Boolean)
      .join(" ");
    keyPoints = [
      `Cuando veas: ${cuando}`,
      `Debes pensar en: ${cuandoMatch[2].trim()}`,
      `Tema: ${cuandoMatch[3].trim()}`,
    ];
  } else {
    const saberMatch = bodyClean.match(
      /Lo que debes saber para el examen\n([\s\S]*?)\nTema: ([^\n]+)/,
    );
    if (!saberMatch) throw new Error(`Missing keyPoints block for Pregunta ${num}`);
    const saberText = saberMatch[1]
      .split("\n")
      .map((line) => line.replace(/^[•●]\s*/, "").trim())
      .filter(Boolean)
      .join(" ");
    keyPoints = [
      `Cuando veas: ${saberText.split(/(?<=[.!?])\s+/)[0] || saberText}`,
      `Debes pensar en: ${saberText}`,
      `Tema: ${saberMatch[2].trim()}`,
    ];
  }

  const theoryMatch = bodyClean.match(
    /EXPLICACIÓN DEL PROFE:?\s*BY DR Q\n([\s\S]*?)(?:\n_{3,}\n\nPregunta |\n\nPregunta |\n*$)/,
  );
  let theoryContent = theoryMatch
    ? `EXPLICACIÓN DEL PROFE BY DR Q\n${theoryMatch[1].trim()}`
    : "";
  if (!theoryContent && explanation) {
    theoryContent = `EXPLICACIÓN DEL PROFE BY DR Q\n${explanation}`;
  }
  if (!theoryContent) {
    throw new Error(`Missing theoryContent for Pregunta ${num}`);
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
  path.join(__dirname, "professor-preguntas-411-420.txt"),
  "utf8",
);
const blocks = parseProfessorBlocks(raw);

const questions = [];
for (let n = 1; n <= 10; n++) {
  const prof = blocks[n];
  const meta = META[n];
  if (!prof) throw new Error(`Missing Pregunta ${n}`);
  questions.push({
    id: 410 + n,
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
 * Banco universal MetodoQ · Dr. Q — extensión coexam dr-q-411 a dr-q-420.
 * Bloque Básicas/Inmunología Pregunta 1–10 — adición neta al banco.
 */
export const DR_Q_COEXAM_EXTENSION_411_420_QUESTIONS: TrainingQuestion[] = [
${questions.map(renderQuestion).join(",\n")}
];
`;

fs.writeFileSync(outPath, fileContent, "utf8");
console.log(`Generated ${outPath} with ${questions.length} questions (dr-q-411 to dr-q-420)`);
