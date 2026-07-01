import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(
  __dirname,
  "../src/data/dr-q-coexam-extension-346-355-questions.ts",
);

const META = {
  21: {
    examArea: "REUMATOLOGÍA",
    topic: "REUMATOLOGÍA",
    slug: "reumatologia",
    correct: "B",
  },
  22: {
    examArea: "DERMATOLOGÍA",
    topic: "DERMATOLOGÍA",
    slug: "dermatologia",
    correct: "B",
  },
  23: {
    examArea: "REUMATOLOGÍA - ORTOPEDIA",
    topic: "REUMATOLOGÍA",
    slug: "reumatologia",
    correct: "B",
  },
  24: {
    examArea: "INFECTOLOGÍA - UROLOGÍA",
    topic: "INFECTOLOGÍA",
    slug: "infectologia",
    correct: "C",
  },
  25: {
    examArea: "UROLOGÍA",
    topic: "UROLOGÍA",
    slug: "urologia",
    correct: "C",
  },
  26: {
    examArea: "PEDIATRÍA - NEUROPEDIATRÍA",
    topic: "PEDIATRÍA",
    slug: "pediatria",
    correct: "C",
  },
  27: {
    examArea: "PEDIATRÍA - NEUMOLOGÍA",
    topic: "PEDIATRÍA",
    slug: "pediatria",
    correct: "B",
  },
  28: {
    examArea: "PEDIATRÍA - OTORRINOLARINGOLOGÍA",
    topic: "PEDIATRÍA",
    slug: "pediatria",
    correct: "C",
  },
  29: {
    examArea: "CIRUGÍA GENERAL - TRAUMA",
    topic: "CIRUGÍA GENERAL",
    slug: "cirugia_general",
    correct: "C",
  },
  30: {
    examArea: "CIRUGÍA GENERAL - GASTROENTEROLOGÍA",
    topic: "GASTROENTEROLOGÍA",
    slug: "gastroenterologia",
    correct: "C",
  },
};

function parseProfessorBlocks(raw) {
  const parts = raw.split(/(?:^|\n)PREGUNTA (\d+) \(/);
  const blocks = {};
  for (let i = 1; i < parts.length; i += 2) {
    const num = Number(parts[i]);
    blocks[num] = parseBlock(parts[i + 1]);
  }
  return blocks;
}

function parseBlock(body) {
  const bodyClean = body.replace(/^[^)]+\)\r?\n/, "");
  const optionsStart = bodyClean.search(/^A\. /m);
  const correctLineIdx = bodyClean.search(/^✅ Respuesta correcta:/m);
  if (optionsStart === -1 || correctLineIdx === -1) {
    throw new Error("Could not parse statement/options from professor block");
  }

  const statement = bodyClean.slice(0, optionsStart).trim();
  const optionsSection = bodyClean.slice(optionsStart, correctLineIdx);
  const options = [];
  for (const line of optionsSection.split("\n")) {
    const m = line.match(/^([A-D])\.\s*(.+)$/);
    if (m) {
      options.push({ id: m[1], label: m[1], text: m[2].trim() });
    }
  }
  if (options.length !== 4) {
    throw new Error(`Expected 4 options, got ${options.length}`);
  }

  const afterCorrect = bodyClean.slice(correctLineIdx);
  const answerMatch = afterCorrect.match(
    /✅ Respuesta correcta:[^\n]*\n([\s\S]*?)(?:\nLo que debes saber para el examen|\n*$)/,
  );
  const correctLine = afterCorrect.match(/✅ Respuesta correcta: ([^\n]+)/);
  const explanation =
    (answerMatch?.[1]?.trim() || correctLine?.[1]?.trim() || "").replace(
      /^[A-D]\.\s*/,
      "",
    );

  const cuandoMatch = bodyClean.match(
    /Cuando veas:\n([\s\S]*?)\nDebes pensar en:\n([\s\S]*?)\nTema: ([^\n]+)/,
  );
  if (!cuandoMatch) throw new Error("Missing keyPoints block");
  const cuando = cuandoMatch[1]
    .split("\n")
    .map((line) => line.replace(/^•\s*/, "").trim())
    .filter(Boolean)
    .join(" ");
  const keyPoints = [
    `Cuando veas: ${cuando}`,
    `Debes pensar en: ${cuandoMatch[2].trim()}`,
    `Tema: ${cuandoMatch[3].trim()}`,
  ];

  const theoryMatch = bodyClean.match(
    /EXPLICACIÓN DEL PROFE BY DR Q\n([\s\S]*?)(?:\n\nPREGUNTA |\n*$)/,
  );
  if (!theoryMatch) throw new Error("Missing theoryContent");
  const theoryContent = `EXPLICACIÓN DEL PROFE BY DR Q\n${theoryMatch[1].trim()}`;

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

  const keyPoints = q.keyPoints
    .map((kp) => `      ${JSON.stringify(kp)},`)
    .join("\n");

  const tags = [
    "dr-q",
    "universal",
    "metodoq",
    "univalle",
    "udea",
    "caldas",
    "ucc_pasto",
    "unimilitar",
    q.slug,
  ]
    .map((t) => JSON.stringify(t))
    .join(",");

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
  path.join(__dirname, "professor-preguntas-21-30.txt"),
  "utf8",
);
const blocks = parseProfessorBlocks(raw);

const questions = [];
for (let n = 21; n <= 30; n++) {
  const prof = blocks[n];
  const meta = META[n];
  if (!prof) throw new Error(`Missing PREGUNTA ${n}`);
  questions.push({
    id: 325 + n,
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
 * Banco universal MetodoQ · Dr. Q — extensión coexam dr-q-346 a dr-q-355.
 * PREGUNTA 21–30 (Univalle/UdeA/Caldas/UCC Pasto/Unimilitar) — adición neta al banco.
 */
export const DR_Q_COEXAM_EXTENSION_346_355_QUESTIONS: TrainingQuestion[] = [
${questions.map(renderQuestion).join(",\n")}
];
`;

fs.writeFileSync(outPath, fileContent, "utf8");
console.log(`Generated ${outPath} with ${questions.length} questions (dr-q-346 to dr-q-355)`);
