import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const coexamPath = path.join(__dirname, "../src/data/dr-q-coexam-questions.ts");
const transcriptPath = path.join(
  "C:/Users/USUARIO/.cursor/projects/d-ProyectosDeveloper-Metodoq/agent-transcripts/ff7e44b8-8459-4e8f-874c-c08d975a25f4/ff7e44b8-8459-4e8f-874c-c08d975a25f4.jsonl",
);
const outPath = path.join(__dirname, "update-coexam-194-206.mjs");

const META = {
  194: {
    examArea: "MEDICINA PREVENTIVA Y SALUD PÚBLICA",
    topic: "MEDICINA PREVENTIVA Y SALUD PÚBLICA",
    slug: "medicina_preventiva_y_salud_publica",
    correct: "A",
  },
  195: {
    examArea: "CARDIOLOGÍA",
    topic: "CARDIOLOGÍA",
    slug: "cardiologia",
    correct: "C",
  },
  196: {
    examArea: "NEFROLOGÍA",
    topic: "NEFROLOGÍA",
    slug: "nefrologia",
    correct: "C",
  },
  197: {
    examArea: "PEDIATRÍA",
    topic: "PEDIATRÍA",
    slug: "pediatria",
    correct: "B",
  },
  198: {
    examArea: "NEUROLOGÍA",
    topic: "NEUROLOGÍA",
    slug: "neurologia",
    correct: "B",
  },
  199: {
    examArea: "UROLOGÍA",
    topic: "UROLOGÍA",
    slug: "urologia",
    correct: "B",
  },
  200: {
    examArea: "NEFROLOGÍA",
    topic: "NEFROLOGÍA",
    slug: "nefrologia",
    correct: "B",
  },
  201: {
    examArea: "MEDICINA INTERNA - INFECTOLOGÍA",
    topic: "INFECTOLOGÍA",
    slug: "infectologia",
    correct: "B",
  },
  202: {
    examArea: "PEDIATRÍA - CARDIOLOGÍA PEDIÁTRICA",
    topic: "CARDIOLOGÍA PEDIÁTRICA",
    slug: "cardiologia_pediatrica",
    correct: "A",
  },
  203: {
    examArea: "NEUROCIRUGÍA - URGENCIAS",
    topic: "URGENCIAS",
    slug: "urgencias",
    correct: "B",
  },
  204: {
    examArea: "PEDIATRÍA - CARDIOLOGÍA",
    topic: "CARDIOLOGÍA",
    slug: "cardiologia",
    correct: "B",
  },
  205: {
    examArea: "NEUROLOGÍA",
    topic: "NEUROLOGÍA",
    slug: "neurologia",
    correct: "B",
  },
  206: {
    examArea: "PEDIATRÍA",
    topic: "PEDIATRÍA",
    slug: "pediatria",
    correct: "B",
  },
};

function loadProfessorText() {
  const lines = fs.readFileSync(transcriptPath, "utf8").trim().split("\n");
  for (const line of lines) {
    const parsed = JSON.parse(line);
    const text = parsed?.message?.content?.[0]?.text ?? "";
    if (text.includes("PREGUNTA 39 (MEDICINA PREVENTIVA") && text.includes("PREGUNTA 51")) {
      const match = text.match(/<user_query>\nmas preguntas:\n([\s\S]*)<\/user_query>/);
      if (match) return match[1];
      const idx = text.indexOf("mas preguntas:\nPREGUNTA 39");
      if (idx >= 0) return text.slice(idx + "mas preguntas:\n".length);
    }
  }
  throw new Error("Could not find professor content in transcript");
}

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
  const answerMatch = body.match(
    /✅ Respuesta correcta:[^\n]*\n([\s\S]*?)\nLo que debes saber para el examen/,
  );
  const explanation = answerMatch ? answerMatch[1].trim() : "";

  const cuandoMatch = body.match(
    /Cuando veas:\n([\s\S]*?)\nDebes pensar en:\n([\s\S]*?)\nTema: ([^\n]+)/,
  );
  let cuando = "";
  let debes = "";
  let tema = "";
  if (cuandoMatch) {
    cuando = cuandoMatch[1]
      .split("\n")
      .map((line) => line.replace(/^•\s*/, "").trim())
      .filter(Boolean)
      .join(" ");
    debes = cuandoMatch[2].trim();
    tema = cuandoMatch[3].trim();
  }

  const theoryMatch = body.match(/EXPLICACIÓN DEL PROFE BY DR Q\n([\s\S]*?)(?:\n\nPREGUNTA |\n*$)/);
  const theoryContent = theoryMatch
    ? `EXPLICACIÓN DEL PROFE BY DR Q\n${theoryMatch[1].trim()}`
    : "";

  return {
    explanation,
    keyPoints: [
      `Cuando veas: ${cuando}`,
      `Debes pensar en: ${debes}`,
      `Tema: ${tema}`,
    ],
    theoryContent,
  };
}

function extractQuestionBlock(content, num) {
  const startRe = new RegExp(`  \\{\\r?\\n    id: "dr-q-${num}"`);
  const nextNum = num + 1;
  const endRe =
    nextNum <= 206
      ? new RegExp(`  \\{\\r?\\n    id: "dr-q-${nextNum}"`)
      : /  \{\r?\n    id: "dr-q-207"/;
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
  const optionsMatch = block.match(/options: \[([\s\S]*?)\],\r?\n\s*correctOptionId:/);
  if (!difficultyMatch || !statementMatch || !optionsMatch) {
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

  return {
    difficulty: difficultyMatch[1],
    statement: statementMatch[1].replace(/\\n/g, "\n").replace(/\\"/g, '"'),
    options,
  };
}

function renderUpdateScript(questions) {
  const templatePath = path.join(__dirname, "update-coexam-180-193.mjs");
  const template = fs.readFileSync(templatePath, "utf8");
  const questionsJson = JSON.stringify(questions, null, 2);
  return template
    .replace(/const questions = \[[\s\S]*?\n\];/, `const questions = ${questionsJson};`)
    .replace(
      /const endMatch = content\.match\(\/  \\{\\r\?\\n    id: "dr-q-194"\/\);/,
      'const endMatch = content.match(/  \\{\\r?\\n    id: "dr-q-207"/);',
    )
    .replace(
      /const startMatch = content\.match\(\/  \\{\\r\?\\n    id: "dr-q-180"\/\);/,
      'const startMatch = content.match(/  \\{\\r?\\n    id: "dr-q-194"/);',
    )
    .replace(
      "Patched dr-q-180 through dr-q-193 (${questions.length} questions)",
      "Patched dr-q-194 through dr-q-206 (${questions.length} questions)",
    );
}

const raw = loadProfessorText();
const profBlocks = parseProfessorBlocks(raw);
const coexamContent = fs.readFileSync(coexamPath, "utf8");

const questions = [];
for (let id = 194; id <= 206; id++) {
  const meta = META[id];
  const prof = profBlocks[id];
  const existing = extractQuestionBlock(coexamContent, id);
  if (!prof?.theoryContent) {
    throw new Error(`Missing professor content for dr-q-${id}`);
  }
  questions.push({
    id,
    examArea: meta.examArea,
    topic: meta.topic,
    slug: meta.slug,
    difficulty: existing.difficulty,
    correctOptionId: meta.correct,
    explanation: prof.explanation,
    keyPoints: prof.keyPoints,
    theoryContent: prof.theoryContent,
    statement: existing.statement,
    options: existing.options,
  });
}

fs.writeFileSync(outPath, renderUpdateScript(questions), "utf8");
console.log(`Generated ${outPath} with ${questions.length} questions`);
