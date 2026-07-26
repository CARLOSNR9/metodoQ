import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputDir = path.join(__dirname, "../bateria_preguntas");
const outputDir = path.join(__dirname, "../src/data");

function parseFile(batchIndex) {
  const lot = batchIndex + 1;
  const filePath = path.join(inputDir, `edicion_4_lote_${lot}.md`);
  const content = fs.readFileSync(filePath, "utf-8");

  // Split by PREGUNTA
  const rawQuestions = content.split(/PREGUNTA \d+/).slice(1);
  const questions = [];

  let qNumber = batchIndex * 10;

  for (const raw of rawQuestions) {
    qNumber++;
    const qStr = String(qNumber).padStart(2, "0");
    const id = `ucc-conv-2026-07-26-${qStr}`;

    // Extract area/topic
    const areaMatch = raw.match(/^\s*\(([^)]+)\)/);
    let examArea = "General";
    let topic = "General";
    if (areaMatch) {
      examArea = areaMatch[1].trim();
      topic = examArea.split("-")[0].trim();
    }

    // Extract statement
    // The statement is everything between the area (or PREGUNTA) and "A. "
    const statementMatch = raw.match(/\)\s*\n+([\s\S]*?)\n+A\.\s+/);
    let statement = statementMatch ? statementMatch[1].trim() : "";

    // Extract options
    const options = [];
    const letters = ["A", "B", "C", "D"];
    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      const nextPattern = i < 3 ? `\\n${letters[i+1]}\\.\\s+` : `\\n✅`;
      const optRegex = new RegExp(`^${letter}\\.\\s+([\\s\\S]*?)(?=${nextPattern})`, "m");
      const optMatch = raw.match(optRegex);
      if (optMatch) {
        options.push({
          id: letter,
          label: letter,
          text: optMatch[1].trim(),
        });
      }
    }

    // Extract correct answer
    const correctMatch = raw.match(/✅ Respuesta correcta:\s*([A-D])\./);
    const correctOptionId = correctMatch ? correctMatch[1] : "A";

    // Extract standard explanation and key points
    const expStart = raw.indexOf(`✅ Respuesta correcta:`);
    const profeStart = raw.indexOf(`EXPLICACIÓN DEL PROFE BY DR Q`);
    const optionsStart = raw.indexOf(`❌ Opción`);

    let explanationBody = "";
    if (expStart !== -1 && profeStart !== -1) {
        // Extract everything after ✅ ... until "Lo que debes saber"
        const expMatch = raw.substring(expStart, profeStart).match(/✅ Respuesta correcta:[^\n]+\n+([\s\S]*?)(?=Lo que debes saber para el examen)/);
        explanationBody = expMatch ? expMatch[1].trim() : "";
    }

    let profeBody = "";
    if (profeStart !== -1) {
        const endProfe = optionsStart !== -1 ? optionsStart : raw.length;
        profeBody = raw.substring(profeStart + `EXPLICACIÓN DEL PROFE BY DR Q`.length, endProfe).trim();
    }

    const explanation = explanationBody + "\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** " + profeBody;

    // Extract distractors
    for (const opt of options) {
      if (opt.id === correctOptionId) continue;
      
      const distractorRegex = new RegExp(`❌ Opción ${opt.id}:[\\s\\S]*?\\* distractorProfile:\\s*([^\\n]+)\\n\\* incorrectFeedback:\\s*([^\\n]+)`);
      const distMatch = raw.match(distractorRegex);
      if (distMatch) {
        opt.distractorProfile = distMatch[1].trim();
        opt.incorrectFeedback = distMatch[2].trim();
      }
    }

    // keyPoints
    const kpMatch = raw.match(/Lo que debes saber para el examen\n([\s\S]*?)(?=\n---)/);
    const keyPoints = kpMatch ? kpMatch[1].trim().split("\n").map(s => s.trim()).filter(Boolean) : [];

    questions.push({
      id,
      university: "UCC",
      examArea,
      topic,
      difficulty: "hard",
      tags: ["ucc", "convocatoria", "2026_07_26"],
      statement,
      options,
      correctOptionId,
      explanation,
      keyPoints
    });
  }

  // Generate TS content
  const startNum = String(batchIndex * 10 + 1).padStart(2, "0");
  const endNum = String((batchIndex + 1) * 10).padStart(2, "0");
  const varName = `UCC_CONV_2026_07_26_${startNum}_${endNum}_QUESTIONS`;

  const tsContent = `import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #4 (26 jul 2026) · Preguntas #${startNum}–#${endNum}.
 */
export const ${varName}: TrainingQuestion[] = ${JSON.stringify(questions, null, 2)};
`;

  fs.writeFileSync(path.join(outputDir, `ucc-conv-2026-07-26-${startNum}-${endNum}-questions.ts`), tsContent);
  return { startNum, endNum, varName };
}

const vars = [];
for (let i = 0; i < 10; i++) {
  vars.push(parseFile(i));
}

// Generate index
let indexContent = vars.map(v => `import { ${v.varName} } from "@/data/ucc-conv-2026-07-26-${v.startNum}-${v.endNum}-questions";`).join("\n") + "\n\n";
indexContent += `import type { TrainingQuestion } from "@/lib/questions/types";\n\n`;
indexContent += `export const UCC_CONV_2026_07_26_QUESTIONS: TrainingQuestion[] = [\n`;
vars.forEach(v => {
  indexContent += `  ...${v.varName},\n`;
});
indexContent += `];\n\n`;
indexContent += `export const UCC_CONV_2026_07_26_QUESTION_COUNT = UCC_CONV_2026_07_26_QUESTIONS.length;\n`;

fs.writeFileSync(path.join(outputDir, `ucc-conv-2026-07-26-questions.ts`), indexContent);
console.log("Done generating TS files.");
