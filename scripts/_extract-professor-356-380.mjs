import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const jsonlPath =
  "C:/Users/USUARIO/.cursor/projects/d-ProyectosDeveloper-Metodoq/agent-transcripts/ff7e44b8-8459-4e8f-874c-c08d975a25f4/ff7e44b8-8459-4e8f-874c-c08d975a25f4.jsonl";

const jsonl = fs.readFileSync(jsonlPath, "utf8");
const lines = jsonl.split("\n").filter(Boolean);
let text = "";
for (const line of lines) {
  const obj = JSON.parse(line);
  if (
    obj.role === "user" &&
    obj.message?.content?.[0]?.text?.includes("otro bloque nuevo de 25 preguntas")
  ) {
    text = obj.message.content[0].text;
    break;
  }
}
if (!text) throw new Error("User message not found in transcript");

const marker = "para agregar al banco:\n\n";
const idx = text.indexOf(marker);
if (idx === -1) throw new Error("marker not found");
let content = text.slice(idx + marker.length);

const p12Incomplete =
  "por lo que el manejo consiste en vigilancia fetal\n\nPREGUNTA 13";
const p12Complete = `por lo que el manejo consiste en vigilancia fetal estrecha con Doppler y finalización del embarazo alrededor de las 37-38 semanas.
Lo que debes saber para el examen
Cuando veas:
•	Peso fetal estimado < percentil 10.
•	Doppler fetal normal.
•	Gestación ≥ 32 semanas.
Debes pensar en:
Restricción del crecimiento fetal tardía estadio I.
Tema: Restricción del crecimiento fetal.
________________________________________
EXPLICACIÓN DEL PROFE BY DR Q
Esta pregunta evalúa el diagnóstico y manejo de la restricción del crecimiento fetal (RCF) según los hallazgos Doppler.
La clave es:
Peso fetal < p10 con Doppler normal = estadio I.
El feto con peso en percentil 7 y Doppler normal corresponde a RCF tardía estadio I. El manejo es vigilancia estrecha con control Doppler y finalización alrededor de las 37-38 semanas, no interrupción inmediata.
Perlas de examen
✅ Peso fetal < percentil 10 sugiere RCF.
✅ Doppler normal indica estadio I en RCF tardía.
✅ ILA de 7 cm no es oligohidramnios severo.
✅ La finalización suele programarse cerca de las 37-38 semanas si se mantiene estable.
Referencias
• ACOG Practice Bulletin: Fetal Growth Restriction.
• ISUOG Practice Guidelines.
• Williams Obstetrics.
• UpToDate: Fetal Growth Restriction.

PREGUNTA 13`;

content = content.replace(p12Incomplete, p12Complete);

const out = path.join(__dirname, "professor-preguntas-356-380.txt");
fs.writeFileSync(out, content, "utf8");
console.log(`Wrote ${out} (${content.length} chars)`);
console.log("PREGUNTA count:", (content.match(/PREGUNTA \d+/g) || []).length);
