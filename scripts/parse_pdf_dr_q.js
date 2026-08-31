const fs = require('fs');
const pdf = require('pdf-parse');

const pdfPath = "C:\\Users\\CARLO\\.gemini\\antigravity-ide\\brain\\e99ec606-e376-48a2-bbac-cdeb8c9bbd94\\media__1787293717996.pdf";

let dataBuffer = fs.readFileSync(pdfPath);

pdf(dataBuffer).then(function(data) {
    const userInput = data.text;
    
    // Split by "Pregunta " followed by a number
    const questionsRaw = userInput.split(/Pregunta \d+\s*[-–]\s*/i).filter(q => q.trim().length > 50);

    console.log("Raw user input length: ", userInput.length);
    console.log("Found questionsRaw count: ", questionsRaw.length);

    const parsedQuestions = [];
    for (let i = 0; i < questionsRaw.length; i++) {
        const qText = questionsRaw[i];
        
        // Extract topic
        const qLines = qText.split('\n').map(l => l.trim()).filter(l => l);
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
        const statementMatch = textContent.match(/([\s\S]*?)\n[A-Z]\./);
        const statement = statementMatch ? statementMatch[1].trim() : textContent.substring(0, 150);
        
        // Extract options
        const options = [];
        const letters = ['A', 'B', 'C', 'D', 'E'];
        for (const letter of letters) {
            // Updated regex to handle ✅ character which might be represented in OCR as a space or something else
            const optRegex = new RegExp(`^${letter}\\.\\s*([\\s\\S]*?)(?=\\n[A-E]\\.|\\n[^\\n]*Respuesta correcta|$)`, 'im');
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
        const correctMatch = textContent.match(/Respuesta correcta[:\s]*([A-E])/i);
        const correctOptionId = correctMatch ? correctMatch[1].toUpperCase() : "A";
        
        // Extract "Lo que debes saber para el examen"
        const loQueMatch = textContent.match(/Lo que debes saber para el examen([\s\S]*?)Tema:/i);
        let loQueDebesSaber = loQueMatch ? loQueMatch[1].trim() : "";
        if (!loQueMatch) {
             const alternativeMatch = textContent.match(/Lo que debes saber para el examen([\s\S]*?)EXPLICACI[OÓ]N/i);
             loQueDebesSaber = alternativeMatch ? alternativeMatch[1].trim() : "";
        }

        // Extract Dr Q explanation
        const drQMatch = textContent.match(/EXPLICACI[OÓ]N DEL PROFE:? BY DR Q([\s\S]*)/i);
        const drQText = drQMatch ? drQMatch[1].trim() : "";
        
        const explanationParts = [];
        if (loQueDebesSaber) {
            explanationParts.push(`**Lo que debes saber para el examen:**\n${loQueDebesSaber}`);
        }
        
        let fullDrQ = `EXPLICACIÓN DEL PROFE BY DR Q\n\n${drQText}`;
        if (!drQText && !loQueDebesSaber) {
             const remainderMatch = textContent.match(/Respuesta correcta.*?\n([\s\S]*)/i);
             if (remainderMatch) fullDrQ = remainderMatch[1].trim();
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
            keyPoints: [],
            theoryContent: fullDrQ
        });
    }

    const tsContent = `import type { TrainingQuestion } from "@/lib/questions/types";\n\nexport const DR_Q_EVAL_1_QUESTIONS: TrainingQuestion[] = ${JSON.stringify(parsedQuestions, null, 2)};\n`;

    const outputPath = "d:\\ProyectosDeveloper\\Metodoq\\src\\data\\evaluaciones\\evaluacion-dr-q.ts";
    fs.writeFileSync(outputPath, tsContent, "utf8");

    console.log(`Successfully extracted ${parsedQuestions.length} questions to ${outputPath}`);
}).catch(err => {
    console.error("PDF parsing failed:", err);
});
