import json
import re
import os

transcript_path = r"C:\Users\CARLO\.gemini\antigravity-ide\brain\e99ec606-e376-48a2-bbac-cdeb8c9bbd94\.system_generated\logs\transcript_full.jsonl"

user_input = ""
with open(transcript_path, 'r', encoding='utf-8') as f:
    for line in f:
        data = json.loads(line)
        if data.get("type") == "USER_INPUT":
            # Let's check if it contains "Pregunta 1 – Cardiología"
            if "Pregunta 1 – Cardiología" in data.get("content", ""):
                user_input = data["content"]
                break

if not user_input:
    print("Could not find user input in transcript.")
    exit(1)

# Now let's parse it
# Split by "Pregunta " followed by a number
questions_raw = re.split(r'Pregunta \d+\s*[-–]\s*', user_input)
questions_raw = [q for q in questions_raw if q.strip()]

parsed_questions = []
for i, q_text in enumerate(questions_raw):
    # Skip if it doesn't look like a question
    if len(q_text) < 50:
        continue
    
    # Extract topic
    lines = q_text.split('\n')
    header_line = lines[0]
    
    # Topic is usually "Cardiología / Reanimación Cardiopulmonar (alta)"
    topic_match = re.match(r'(.*?)\s*\((.*?)\)', header_line)
    if topic_match:
        topic = topic_match.group(1).strip()
        difficulty_raw = topic_match.group(2).strip()
    else:
        topic = header_line.strip()
        difficulty_raw = "alta"
    
    difficulty = "hard"
    if "media" in difficulty_raw.lower(): difficulty = "medium"
    if "baja" in difficulty_raw.lower(): difficulty = "easy"

    # Rest of the text
    text_content = '\n'.join(lines[1:])
    
    # Extract statement (everything before A.)
    statement_match = re.search(r'(.*?)\nA\.', text_content, re.DOTALL)
    statement = statement_match.group(1).strip() if statement_match else ""
    
    # Extract options
    options_dict = {}
    for letter in ['A', 'B', 'C', 'D', 'E']:
        opt_match = re.search(rf'{letter}\.\s*(.*?)(?=\n[A-E]\.|\n✅|$)', text_content, re.DOTALL)
        if opt_match:
            options_dict[letter] = opt_match.group(1).strip()
            
    # Extract correct option
    correct_match = re.search(r'✅\s*Respuesta correcta[:\s]*([A-E])', text_content)
    correct_option = correct_match.group(1) if correct_match else "A"
    
    # Extract "Lo que debes saber para el examen"
    lo_que_debes_saber_match = re.search(r'Lo que debes saber para el examen(.*?)Tema:', text_content, re.DOTALL)
    lo_que_debes_saber = lo_que_debes_saber_match.group(1).strip() if lo_que_debes_saber_match else ""
    
    # Extract Dr Q explanation
    dr_q_match = re.search(r'EXPLICACIÓN DEL PROFE BY DR Q(.*)', text_content, re.DOTALL)
    dr_q_text = dr_q_match.group(1).strip() if dr_q_match else ""
    
    # Build explanation string
    explanation_parts = []
    if lo_que_debes_saber:
        explanation_parts.append(f"**Lo que debes saber para el examen:**\n{lo_que_debes_saber}")
    
    options = []
    for k, v in options_dict.items():
        options.append({
            "id": k,
            "label": k,
            "text": v
        })
        
    parsed_questions.append({
        "id": f"dr-q-eval1-{i+1}",
        "examArea": topic,
        "topic": topic,
        "difficulty": difficulty,
        "tags": ["dr-q", "evaluacion-1", "pro"],
        "statement": statement,
        "options": options,
        "correctOptionId": correct_option,
        "explanation": "\n\n".join(explanation_parts),
        "theoryContent": f"EXPLICACIÓN DEL PROFE BY DR Q\n\n{dr_q_text}"
    })

# Output to TS file
ts_content = f"""import type {{ TrainingQuestion }} from "@/lib/questions/types";

export const DR_Q_EVAL_1_QUESTIONS: TrainingQuestion[] = {json.dumps(parsed_questions, indent=2, ensure_ascii=False)};
"""

output_path = r"d:\ProyectosDeveloper\Metodoq\src\data\evaluaciones\evaluacion-dr-q.ts"
with open(output_path, "w", encoding="utf-8") as f:
    f.write(ts_content)

print(f"Successfully extracted {len(parsed_questions)} questions to {output_path}")
