const fs = require('fs');
const path = require('path');

const transcriptPath = "C:\\Users\\CARLO\\.gemini\\antigravity-ide\\brain\\e99ec606-e376-48a2-bbac-cdeb8c9bbd94\\.system_generated\\logs\\transcript_full.jsonl";

let userInput = "";
const lines = fs.readFileSync(transcriptPath, 'utf8').split('\n');
for (const line of lines) {
    if (!line) continue;
    try {
        const data = JSON.parse(line);
        if (data.type === "USER_INPUT") {
            if (data.content && data.content.includes("Pregunta 1 – Cardiología")) {
                userInput = data.content;
                break;
            }
        }
    } catch (e) {}
}

if (!userInput) {
    console.error("Could not find user input in transcript.");
    process.exit(1);
}

// Split by "Pregunta " followed by a number
const questionsRaw = userInput.split(/Pregunta \d+\s*[-–]\s*/).filter(q => q.trim().length > 50);

const parsedQuestions = [];
for (let i = 0; i < questionsRaw.length; i++) {
    const qText = questionsRaw[i];
    
    // Extract topic
    const qLines = qText.split('\n');
    const headerLine = qLines[0];
    
    let topic = headerLine.trim();
    let difficulty = "hard";
    
    const topicMatch = headerLine.match(/(.*?)\s*\((.*?)\)/);
    if (topicMatch) {
        topic = topicMatch[1].trim();
        const diffRaw = topicMatch[2].trim().toLowerCase();
        if (diffRaw.includes("media")) difficulty = "medium";
        if (diffRaw.includes("baja")) difficulty = "easy";
    }

    // Rest of the text
    const textContent = qLines.slice(1).join('\n');
    
    // Extract statement
    const statementMatch = textContent.match(/([\s\S]*?)\nA\./);
    const statement = statementMatch ? statementMatch[1].trim() : "";
    
    // Extract options
    const options = [];
    const letters = ['A', 'B', 'C', 'D', 'E'];
    for (const letter of letters) {
        const optRegex = new RegExp(`^${letter}\\.\\s*([\\s\\S]*?)(?=\\n[A-E]\\.|\\n✅|$)`, 'm');
        const optMatch = textContent.match(optRegex);
        if (optMatch) {
            options.push({
                id: letter,
                label: letter,
                text: optMatch[1].trim()
            });
        }
    }
    
    // Extract correct option
    const correctMatch = textContent.match(/✅\s*Respuesta correcta[:\s]*([A-E])/);
    const correctOptionId = correctMatch ? correctMatch[1] : "A";
    
    // Extract "Lo que debes saber para el examen"
    const loQueMatch = textContent.match(/Lo que debes saber para el examen([\s\S]*?)Tema:/);
    const loQueDebesSaber = loQueMatch ? loQueMatch[1].trim() : "";
    
    // Extract Dr Q explanation
    const drQMatch = textContent.match(/EXPLICACIÓN DEL PROFE BY DR Q([\s\S]*)/);
    const drQText = drQMatch ? drQMatch[1].trim() : "";
    
    const explanationParts = [];
    if (loQueDebesSaber) {
        explanationParts.push(`**Lo que debes saber para el examen:**\n${loQueDebesSaber}`);
    }
    
    parsedQuestions.push({
        id: `dr-q-eval1-${i+1}`,
        examArea: topic,
        topic: topic,
        difficulty: difficulty,
        tags: ["dr-q", "evaluacion-1", "pro"],
        statement: statement,
        options: options,
        correctOptionId: correctOptionId,
        explanation: explanationParts.join('\n\n'),
        theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q\n\n${drQText}`
    });
}

const tsContent = `import type { TrainingQuestion } from "@/lib/questions/types";

export const DR_Q_EVAL_1_QUESTIONS: TrainingQuestion[] = ${JSON.stringify(parsedQuestions, null, 2)};
`;

const outputPath = "d:\\ProyectosDeveloper\\Metodoq\\src\\data\\evaluaciones\\evaluacion-dr-q.ts";
fs.writeFileSync(outputPath, tsContent, "utf8");

console.log(`Successfully extracted ${parsedQuestions.length} questions to ${outputPath}`);
