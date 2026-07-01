import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const coexamPath = path.join(__dirname, "../src/data/dr-q-coexam-questions.ts");
const professorPath = path.join(__dirname, "professor-preguntas-1-10.txt");
const outPath = path.join(__dirname, "update-coexam-156-165.mjs");

const META = {
  156: {
    examArea: "ENDOCRINOLOGÍA",
    topic: "ENDOCRINOLOGÍA",
    slug: "endocrinologia",
    correct: "B",
  },
  157: {
    examArea: "NEUROCIRUGÍA",
    topic: "NEUROCIRUGÍA",
    slug: "neurocirugia",
    correct: "C",
  },
  158: {
    examArea: "MEDICINA INTERNA - NEUMOLOGÍA",
    topic: "NEUMOLOGÍA",
    slug: "neumologia",
    correct: "C",
  },
  159: {
    examArea: "FISIOLOGÍA RENAL",
    topic: "FISIOLOGÍA RENAL",
    slug: "nefrologia",
    correct: "C",
  },
  160: {
    examArea: "FISIOLOGÍA RENAL",
    topic: "FISIOLOGÍA RENAL",
    slug: "nefrologia",
    correct: "C",
  },
  161: {
    examArea: "MEDICINA INTERNA - NEFROLOGÍA",
    topic: "NEFROLOGÍA",
    slug: "nefrologia",
    correct: "C",
  },
  162: {
    examArea: "NEFROLOGÍA",
    topic: "NEFROLOGÍA",
    slug: "nefrologia",
    correct: "B",
  },
  163: {
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    slug: "ginecologia_y_obstetricia",
    correct: "B",
  },
  164: {
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    slug: "ginecologia_y_obstetricia",
    correct: "B",
  },
  165: {
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    slug: "ginecologia_y_obstetricia",
    correct: "B",
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

  const theoryMatch = bodyClean.match(
    /EXPLICACIÓN DEL PROFE BY DR Q\n([\s\S]*?)(?:\n\nPREGUNTA |\n*$)/,
  );
  const theoryContent = theoryMatch
    ? `EXPLICACIÓN DEL PROFE BY DR Q\n${theoryMatch[1].trim()}`
    : "";

  return { statement, options, explanation, keyPoints, theoryContent };
}

function extractDifficulty(content, num) {
  const startRe = new RegExp(`  \\{\\r?\\n    id: "dr-q-${num}"`);
  const endRe = new RegExp(`  \\{\\r?\\n    id: "dr-q-${num + 1}"`);
  const startMatch = content.match(startRe);
  const endMatch = content.match(endRe);
  if (!startMatch || !endMatch) return "medium";
  const block = content.slice(startMatch.index, endMatch.index);
  const difficultyMatch = block.match(/difficulty: "([^"]+)"/);
  return difficultyMatch?.[1] ?? "medium";
}

function renderUpdateScript(questions) {
  const templatePath = path.join(__dirname, "update-coexam-180-193.mjs");
  const template = fs.readFileSync(templatePath, "utf8");
  const questionsJson = JSON.stringify(questions, null, 2);
  return template
    .replace(/const questions = \[[\s\S]*?\n\];/, `const questions = ${questionsJson};`)
    .replace(
      /const startMatch = content\.match\(\/  \\{\\r\?\\n    id: "dr-q-180"\/\);/,
      'const startMatch = content.match(/  \\{\\r?\\n    id: "dr-q-156"/);',
    )
    .replace(
      /const endMatch = content\.match\(\/  \\{\\r\?\\n    id: "dr-q-194"\/\);/,
      'const endMatch = content.match(/  \\{\\r?\\n    id: "dr-q-166"/);',
    )
    .replace(
      "Patched dr-q-180 through dr-q-193 (${questions.length} questions)",
      "Patched dr-q-156 through dr-q-165 (${questions.length} questions)",
    );
}

const raw = fs.readFileSync(professorPath, "utf8");
const profBlocks = parseProfessorBlocks(raw);
const coexamContent = fs.readFileSync(coexamPath, "utf8");

const questions = [];
for (let id = 156; id <= 165; id++) {
  const meta = META[id];
  const prof = profBlocks[id];
  if (!prof) {
    throw new Error(`Missing professor block for dr-q-${id}`);
  }
  if (!prof.theoryContent) {
    throw new Error(`Missing theoryContent for dr-q-${id}`);
  }
  if (!prof.keyPoints) {
    throw new Error(`Missing keyPoints for dr-q-${id}`);
  }

  questions.push({
    id,
    examArea: meta.examArea,
    topic: meta.topic,
    slug: meta.slug,
    difficulty: extractDifficulty(coexamContent, id),
    correctOptionId: meta.correct,
    explanation: prof.explanation,
    keyPoints: prof.keyPoints,
    theoryContent: prof.theoryContent,
    statement: prof.statement,
    options: prof.options,
  });
}

fs.writeFileSync(outPath, renderUpdateScript(questions), "utf8");
console.log(`Generated ${outPath} with ${questions.length} questions`);
