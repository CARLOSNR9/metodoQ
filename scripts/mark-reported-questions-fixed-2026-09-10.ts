import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { adminUpdateQuestionReportStatus } from "../src/lib/server/question-reports-admin";

function loadEnvFile(filePath: string) {
  if (!existsSync(filePath)) return;
  const content = readFileSync(filePath, "utf8");
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const separator = line.indexOf("=");
    if (separator <= 0) continue;
    const key = line.slice(0, separator).trim();
    let value = line.slice(separator + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    value = value.replace(/\\n/g, "\n");
    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

for (const fileName of [".env.local", ".env"]) {
  loadEnvFile(resolve(process.cwd(), fileName));
}

async function main() {
  const required = [
    "FIREBASE_ADMIN_PROJECT_ID",
    "FIREBASE_ADMIN_CLIENT_EMAIL",
    "FIREBASE_ADMIN_PRIVATE_KEY",
  ];
  const missing = required.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(
      `Faltan variables de entorno: ${missing.join(", ")}. Configúralas en .env.local.`,
    );
  }

  // Preguntas reportadas por retroalimentación débil, ya corregidas:
  // - dr-q-*: ya contaban con theoryContent completo en el banco de preguntas.
  // - ucc-conv-2025-06-21-* y umng-conv-ed2-81: se les agregó theoryContent
  //   completo en el PR https://github.com/CARLOSNR9/metodoQ/pull/5 (mergeado a main).
  const questionsToReview = [
    "dr-q-179",
    "dr-q-167",
    "umng-conv-ed2-81",
    "ucc-conv-2025-06-21-70",
    "ucc-conv-2025-06-21-57",
    "ucc-conv-2025-06-21-74",
    "ucc-conv-2025-06-21-69",
    "ucc-conv-2025-06-21-52",
    "ucc-conv-2025-06-21-51",
    "ucc-conv-2025-06-21-75",
    "ucc-conv-2025-06-21-58",
    "ucc-conv-2025-06-21-79",
    "ucc-conv-2025-06-21-80",
    "dr-q-83",
    "dr-q-146",
    "dr-q-113",
    "dr-q-147",
    "dr-q-159",
    "dr-q-97",
    "dr-q-207",
    "dr-q-165",
    "dr-q-234",
    "dr-q-155",
    "dr-q-218",
    "dr-q-100",
    "dr-q-166",
    "dr-q-169",
    "dr-q-240",
    "dr-q-230",
    "dr-q-02",
  ];

  console.log(`Marcando ${questionsToReview.length} preguntas reportadas como 'Revisada' (reviewed)...`);
  for (const qId of questionsToReview) {
    console.log(`Procesando ${qId}...`);
    await adminUpdateQuestionReportStatus(qId, "reviewed");
  }

  console.log("¡Todas las preguntas marcadas como 'reviewed' exitosamente!");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
