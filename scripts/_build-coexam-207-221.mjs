import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const coexamPath = path.join(__dirname, "../src/data/dr-q-coexam-questions.ts");
const professorPath = path.join(__dirname, "professor-preguntas-52-66.txt");
const outPath = path.join(__dirname, "update-coexam-207-221.mjs");

const META = {
  207: {
    examArea: "GASTROENTEROLOGÍA",
    topic: "GASTROENTEROLOGÍA",
    slug: "gastroenterologia",
    correct: "B",
  },
  208: {
    examArea: "ENDOCRINOLOGÍA",
    topic: "ENDOCRINOLOGÍA",
    slug: "endocrinologia",
    correct: "B",
  },
  209: {
    examArea: "CARDIOLOGÍA",
    topic: "CARDIOLOGÍA",
    slug: "cardiologia",
    correct: "C",
  },
  210: {
    examArea: "PEDIATRÍA - ALERGOLOGÍA",
    topic: "ALERGOLOGÍA",
    slug: "alergologia",
    correct: "C",
  },
  211: {
    examArea: "DERMATOLOGÍA",
    topic: "DERMATOLOGÍA",
    slug: "dermatologia",
    correct: "B",
  },
  212: {
    examArea: "MEDICINA INTERNA - TOXICOLOGÍA",
    topic: "TOXICOLOGÍA",
    slug: "toxicologia",
    correct: "B",
  },
  213: {
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    slug: "ginecologia_y_obstetricia",
    correct: "B",
  },
  214: {
    examArea: "NEUROLOGÍA",
    topic: "NEUROLOGÍA",
    slug: "neurologia",
    correct: "B",
  },
  215: {
    examArea: "NEUROLOGÍA",
    topic: "NEUROLOGÍA",
    slug: "neurologia",
    correct: "B",
  },
  216: {
    examArea: "NEUROLOGÍA",
    topic: "NEUROLOGÍA",
    slug: "neurologia",
    correct: "C",
  },
  217: {
    examArea: "NEUROLOGÍA",
    topic: "NEUROLOGÍA",
    slug: "neurologia",
    correct: "A",
  },
  218: {
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    slug: "ginecologia_y_obstetricia",
    correct: "D",
  },
  219: {
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    slug: "ginecologia_y_obstetricia",
    correct: "C",
  },
  220: {
    examArea: "ORTOPEDIA Y TRAUMATOLOGÍA",
    topic: "ORTOPEDIA Y TRAUMATOLOGÍA",
    slug: "ortopedia_y_traumatologia",
    correct: "A",
  },
  221: {
    examArea: "ORTOPEDIA Y TRAUMATOLOGÍA",
    topic: "ORTOPEDIA Y TRAUMATOLOGÍA",
    slug: "ortopedia_y_traumatologia",
    correct: "D",
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
    nextNum <= 221
      ? new RegExp(`  \\{\\r?\\n    id: "dr-q-${nextNum}"`)
      : /  \{\r?\n    id: "dr-q-222"/;
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
      'const startMatch = content.match(/  \\{\\r?\\n    id: "dr-q-207"/);',
    )
    .replace(
      /const endMatch = content\.match\(\/  \\{\\r\?\\n    id: "dr-q-194"\/\);/,
      'const endMatch = content.match(/  \\{\\r?\\n    id: "dr-q-222"/);',
    )
    .replace(
      "Patched dr-q-180 through dr-q-193 (${questions.length} questions)",
      "Patched dr-q-207 through dr-q-221 (${questions.length} questions)",
    );
}

const raw = fs.readFileSync(professorPath, "utf8");
const profBlocks = parseProfessorBlocks(raw);
const coexamContent = fs.readFileSync(coexamPath, "utf8");

const questions = [];
for (let id = 207; id <= 221; id++) {
  const meta = META[id];
  const prof = profBlocks[id] ?? {};
  const existing = extractQuestionBlock(coexamContent, id);

  const explanation =
    prof.explanation?.trim() || existing.explanation;
  const defaultKeyPoints207 = [
    "Cuando veas: Hematemesis y melena en paciente con AINEs. Vaso visible no sangrante en endoscopia. Anemia y taquicardia.",
    "Debes pensar en: Forrest IIa, Glasgow-Blatchford alto riesgo, úlcera péptica por AINE.",
    "Tema: Hemorragia digestiva alta y clasificación de Forrest.",
  ];
  const keyPoints =
    prof.keyPoints ??
    (id === 207
      ? defaultKeyPoints207
      : existing.keyPoints?.length === 3
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
