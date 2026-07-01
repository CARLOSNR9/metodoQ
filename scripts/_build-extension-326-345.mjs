import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(
  __dirname,
  "../src/data/dr-q-coexam-extension-326-345-questions.ts",
);

const META = {
  1: {
    examArea: "ENDOCRINOLOGÍA",
    topic: "ENDOCRINOLOGÍA",
    slug: "endocrinologia",
    correct: "B",
  },
  2: {
    examArea: "NEUROCIRUGÍA",
    topic: "NEUROCIRUGÍA",
    slug: "neurocirugia",
    correct: "C",
  },
  3: {
    examArea: "MEDICINA INTERNA - NEUMOLOGÍA",
    topic: "NEUMOLOGÍA",
    slug: "neumologia",
    correct: "C",
  },
  4: {
    examArea: "FISIOLOGÍA RENAL",
    topic: "FISIOLOGÍA RENAL",
    slug: "nefrologia",
    correct: "C",
  },
  5: {
    examArea: "FISIOLOGÍA RENAL",
    topic: "FISIOLOGÍA RENAL",
    slug: "nefrologia",
    correct: "C",
  },
  6: {
    examArea: "MEDICINA INTERNA - NEFROLOGÍA",
    topic: "NEFROLOGÍA",
    slug: "nefrologia",
    correct: "C",
  },
  7: {
    examArea: "NEFROLOGÍA",
    topic: "NEFROLOGÍA",
    slug: "nefrologia",
    correct: "B",
  },
  8: {
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    slug: "ginecologia_y_obstetricia",
    correct: "B",
  },
  9: {
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    slug: "ginecologia_y_obstetricia",
    correct: "B",
  },
  10: {
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    slug: "ginecologia_y_obstetricia",
    correct: "B",
  },
  11: {
    examArea: "CIRUGÍA GENERAL",
    topic: "CIRUGÍA GENERAL",
    slug: "cirugia_general",
    correct: "A",
  },
  12: {
    examArea: "NEUROLOGÍA - URGENCIAS",
    topic: "NEUROLOGÍA",
    slug: "neurologia",
    correct: "B",
  },
  13: {
    examArea: "MEDICINA INTERNA - URGENCIAS",
    topic: "URGENCIAS",
    slug: "urgencias",
    correct: "B",
  },
  14: {
    examArea: "MEDICINA INTERNA - CUIDADO CRÍTICO",
    topic: "MEDICINA INTERNA",
    slug: "medicina_interna",
    correct: "B",
  },
  15: {
    examArea: "NEUMOLOGÍA",
    topic: "NEUMOLOGÍA",
    slug: "neumologia",
    correct: "A",
  },
  16: {
    examArea: "MEDICINA INTERNA - URGENCIAS",
    topic: "URGENCIAS",
    slug: "urgencias",
    correct: "A",
  },
  17: {
    examArea: "GASTROENTEROLOGÍA",
    topic: "GASTROENTEROLOGÍA",
    slug: "gastroenterologia",
    correct: "C",
  },
  18: {
    examArea: "CIRUGÍA GENERAL",
    topic: "CIRUGÍA GENERAL",
    slug: "cirugia_general",
    correct: "C",
  },
  19: {
    examArea: "GASTROENTEROLOGÍA",
    topic: "GASTROENTEROLOGÍA",
    slug: "gastroenterologia",
    correct: "C",
  },
  20: {
    examArea: "HEMATOLOGÍA",
    topic: "HEMATOLOGÍA",
    slug: "hematologia",
    correct: "B",
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

const prof1 = fs.readFileSync(
  path.join(__dirname, "professor-preguntas-1-10.txt"),
  "utf8",
);
const prof2 = fs.readFileSync(
  path.join(__dirname, "professor-preguntas-11-20.txt"),
  "utf8",
);
const blocks = {
  ...parseProfessorBlocks(prof1),
  ...parseProfessorBlocks(prof2),
};

const questions = [];
for (let n = 1; n <= 20; n++) {
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
 * Banco universal MetodoQ · Dr. Q — extensión coexam dr-q-326 a dr-q-345.
 * PREGUNTA 1–20 (Univalle/UdeA/Caldas/UCC Pasto/Unimilitar) — adición neta al banco.
 */
export const DR_Q_COEXAM_EXTENSION_326_345_QUESTIONS: TrainingQuestion[] = [
${questions.map(renderQuestion).join(",\n")}
];
`;

fs.writeFileSync(outPath, fileContent, "utf8");
console.log(`Generated ${outPath} with ${questions.length} questions (dr-q-326 to dr-q-345)`);
