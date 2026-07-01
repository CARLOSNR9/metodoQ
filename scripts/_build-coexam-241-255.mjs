import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const coexamPath = path.join(__dirname, "../src/data/dr-q-coexam-questions.ts");
const professorPath = path.join(__dirname, "professor-preguntas-86-100.txt");
const outPath = path.join(__dirname, "update-coexam-241-255.mjs");

const META = {
  241: {
    examArea: "NEUROLOGÍA",
    topic: "NEUROLOGÍA",
    slug: "neurologia",
    correct: "B",
  },
  242: {
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    slug: "ginecologia_y_obstetricia",
    correct: "C",
  },
  243: {
    examArea: "BÁSICAS- ANATOMÍA - CIRUGÍA GENERAL",
    topic: "CIRUGÍA GENERAL",
    slug: "cirugia_general",
    correct: "B",
  },
  244: {
    examArea: "BÁSICAS-SEMIOLOGÍA - ONCOLOGÍA",
    topic: "ONCOLOGÍA",
    slug: "oncologia",
    correct: "C",
  },
  245: {
    examArea: "BÁSICAS- EMBRIOLOGÍA Y OBSTETRICIA",
    topic: "EMBRIOLOGÍA Y OBSTETRICIA",
    slug: "embriologia_y_obstetricia",
    correct: "B",
  },
  246: {
    examArea: "BÁSICAS-NEUROANATOMÍA",
    topic: "NEUROANATOMÍA",
    slug: "neuroanatomia",
    correct: "B",
  },
  247: {
    examArea: "MEDICINA INTERNA",
    topic: "MEDICINA INTERNA",
    slug: "medicina_interna",
    correct: "C",
  },
  248: {
    examArea: "PEDIATRÍA - INFECTOLOGÍA",
    topic: "INFECTOLOGÍA",
    slug: "infectologia",
    correct: "B",
  },
  249: {
    examArea: "BÁSICAS- FARMACOLOGÍA - ORTOPEDIA",
    topic: "ORTOPEDIA",
    slug: "ortopedia",
    correct: "C",
  },
  250: {
    examArea: "UROLOGÍA",
    topic: "UROLOGÍA",
    slug: "urologia",
    correct: "C",
  },
  251: {
    examArea: "HEMATOLOGÍA - URGENCIAS",
    topic: "URGENCIAS",
    slug: "urgencias",
    correct: "D",
  },
  252: {
    examArea: "HEMATOLOGÍA",
    topic: "HEMATOLOGÍA",
    slug: "hematologia",
    correct: "C",
  },
  253: {
    examArea: "NEFROLOGÍA",
    topic: "NEFROLOGÍA",
    slug: "nefrologia",
    correct: "B",
  },
  254: {
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    slug: "ginecologia_y_obstetricia",
    correct: "C",
  },
  255: {
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    slug: "ginecologia_y_obstetricia",
    correct: "C",
  },
};

function parseProfessorBlocks(raw) {
  const parts = raw.split(/(?:^|\n)PREGUNTA (\d+) \(/);
  const blocks = {};
  for (let i = 1; i < parts.length; i += 2) {
    const num = Number(parts[i]);
    const body = parts[i + 1];
    const id = num + 155;
    blocks[id] = parseBlock(body);
  }
  return blocks;
}

function parseBlock(body) {
  const correctLine = body.match(/✅ Respuesta correcta: ([^\n]+)/);
  const answerMatch = body.match(
    /✅ Respuesta correcta:[^\n]*\n([\s\S]*?)(?:\nLo que debes saber para el examen|\n*$)/,
  );
  const explanation =
    (answerMatch?.[1]?.trim() || correctLine?.[1]?.trim() || "").replace(
      /^[A-D]\.\s*/,
      "",
    );

  const cuandoMatch = body.match(
    /Cuando veas:\n([\s\S]*?)\nDebes pensar en:\n([\s\S]*?)\nTema: ([^\n]+)/,
  );
  let keyPoints = null;
  if (cuandoMatch) {
    const cuando = cuandoMatch[1]
      .split("\n")
      .map((line) => line.replace(/^•\s*/, "").trim())
      .filter(Boolean)
      .join(" ");
    keyPoints = [
      `Cuando veas: ${cuando}`,
      `Debes pensar en: ${cuandoMatch[2].trim()}`,
      `Tema: ${cuandoMatch[3].trim()}`,
    ];
  }

  const theoryMatch = body.match(
    /EXPLICACIÓN DEL PROFE BY DR Q\n([\s\S]*?)(?:\n\nPREGUNTA |\n*$)/,
  );
  const theoryContent = theoryMatch
    ? `EXPLICACIÓN DEL PROFE BY DR Q\n${theoryMatch[1].trim()}`
    : "";

  return { explanation, keyPoints, theoryContent };
}

function extractQuestionBlock(content, num) {
  const startRe = new RegExp(`  \\{\\r?\\n    id: "dr-q-${num}"`);
  const nextNum = num + 1;
  const endRe =
    nextNum <= 255
      ? new RegExp(`  \\{\\r?\\n    id: "dr-q-${nextNum}"`)
      : /  \},\r?\n\];/;
  const startMatch = content.match(startRe);
  const endMatch = content.match(endRe);
  if (!startMatch || !endMatch) {
    throw new Error(`Could not extract dr-q-${num} from coexam file`);
  }
  const block = content.slice(startMatch.index, endMatch.index);

  const difficultyMatch = block.match(/difficulty: "([^"]+)"/);
  const statementMatch = block.match(
    /statement:\s*\r?\n\s*"((?:\\.|[^"\\])*)",\r?\n\s*options:/,
  );
  const statementMatch2 = block.match(/statement: "((?:\\.|[^"\\])*)",\r?\n\s*options:/);
  const optionsMatch = block.match(/options: \[([\s\S]*?)\],\r?\n\s*correctOptionId:/);
  const explanationMatch = block.match(/explanation: "((?:\\.|[^"\\])*)",/);
  const keyPointsMatch = block.match(/keyPoints: \[([\s\S]*?)\],\r?\n\s*theoryContent:/);
  const theoryMatch = block.match(/theoryContent: `([\s\S]*?)`,\r?\n  \},/);

  const stmtRaw = statementMatch?.[1] ?? statementMatch2?.[1];
  if (!difficultyMatch || !stmtRaw || !optionsMatch) {
    throw new Error(`Could not parse fields for dr-q-${num}`);
  }

  const options = [];
  const optRe =
    /\{ id: "([A-D])", label: "[A-D]", text: "((?:\\.|[^"\\])*)" \}/g;
  let m;
  while ((m = optRe.exec(optionsMatch[1])) !== null) {
    options.push({
      id: m[1],
      label: m[1],
      text: m[2].replace(/\\"/g, '"').replace(/\\n/g, "\n"),
    });
  }

  let existingKeyPoints = null;
  if (keyPointsMatch) {
    existingKeyPoints = [];
    const kpRe = /"((?:\\.|[^"\\])*)"/g;
    let kp;
    while ((kp = kpRe.exec(keyPointsMatch[1])) !== null) {
      existingKeyPoints.push(kp[1].replace(/\\"/g, '"'));
    }
  }

  return {
    difficulty: difficultyMatch[1],
    statement: stmtRaw.replace(/\\n/g, "\n").replace(/\\"/g, '"'),
    options,
    explanation: explanationMatch
      ? explanationMatch[1].replace(/\\n/g, "\n").replace(/\\"/g, '"')
      : "",
    keyPoints: existingKeyPoints,
    theoryContent: theoryMatch ? theoryMatch[1] : "",
  };
}

function renderUpdateScript(questions) {
  const templatePath = path.join(__dirname, "update-coexam-180-193.mjs");
  const template = fs.readFileSync(templatePath, "utf8");
  const questionsJson = JSON.stringify(questions, null, 2);
  return template
    .replace(/const questions = \[[\s\S]*?\n\];/, `const questions = ${questionsJson};`)
    .replace(
      /const startMatch = content\.match\(\/  \\{\\r\?\\n    id: "dr-q-180"\/\);/,
      'const startMatch = content.match(/  \\{\\r?\\n    id: "dr-q-241"/);',
    )
    .replace(
      /const endMatch = content\.match\(\/  \\{\\r\?\\n    id: "dr-q-194"\/\);/,
      'const endMatch = content.match(/\\r?\\n\\];/);',
    )
    .replace(
      "Patched dr-q-180 through dr-q-193 (${questions.length} questions)",
      "Patched dr-q-241 through dr-q-255 (${questions.length} questions)",
    );
}

const raw = fs.readFileSync(professorPath, "utf8");
const profBlocks = parseProfessorBlocks(raw);
const coexamContent = fs.readFileSync(coexamPath, "utf8");

const questions = [];
for (let id = 241; id <= 255; id++) {
  const meta = META[id];
  const prof = profBlocks[id] ?? {};
  const existing = extractQuestionBlock(coexamContent, id);

  const explanation = prof.explanation?.trim() || existing.explanation;
  const keyPoints =
    prof.keyPoints ??
    (existing.keyPoints?.length === 3
      ? existing.keyPoints
      : (existing.keyPoints?.slice(0, 3) ?? [
          "Cuando veas: ver teoría.",
          "Debes pensar en: ver teoría.",
          "Tema: ver teoría.",
        ]));
  const theoryContent = prof.theoryContent?.trim() || existing.theoryContent;

  if (!theoryContent) {
    throw new Error(`Missing theoryContent for dr-q-${id}`);
  }

  questions.push({
    id,
    examArea: meta.examArea,
    topic: meta.topic,
    slug: meta.slug,
    difficulty: existing.difficulty,
    correctOptionId: meta.correct,
    explanation,
    keyPoints,
    theoryContent,
    statement: existing.statement,
    options: existing.options,
  });
}

fs.writeFileSync(outPath, renderUpdateScript(questions), "utf8");
console.log(`Generated ${outPath} with ${questions.length} questions`);
