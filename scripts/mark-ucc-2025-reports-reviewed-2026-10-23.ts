import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import {
  adminBulkUpdateQuestionReportStatus,
  adminListQuestionReports,
} from "../src/lib/server/question-reports-admin";

/**
 * Marca como revisados los reportes de las convocatorias UCC 2025 que decían
 * "no permite guardar la pregunta y retroalimentación incompleta" (casi todos de
 * Elizabeth, UCC). Esas preguntas no tenían píldora de teoría, así que no había
 * botón para guardar en Mi Estudio: ahora tienen teoría propia y la tarjeta arma
 * una píldora de respaldo cuando falta.
 *
 * Incluye también las 5 con quejas de "retroalimentación confusa" o "error de
 * redacción" (06-21-57, 06-21-69, 07-19-18, 07-19-58 y 07-19-95), corregidas
 * después junto con los caracteres mal codificados de la edición 07-19.
 *
 * Por defecto solo lista lo que cambiaría. Para escribir en Firestore:
 *   npx tsx scripts/mark-ucc-2025-reports-reviewed-2026-10-23.ts --apply
 */

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

const FIXED_QUESTION_IDS = new Set([
  "ucc-conv-2025-06-21-01", "ucc-conv-2025-06-21-02", "ucc-conv-2025-06-21-03", "ucc-conv-2025-06-21-04",
  "ucc-conv-2025-06-21-05", "ucc-conv-2025-06-21-07", "ucc-conv-2025-06-21-08", "ucc-conv-2025-06-21-09",
  "ucc-conv-2025-06-21-10", "ucc-conv-2025-06-21-13", "ucc-conv-2025-06-21-14", "ucc-conv-2025-06-21-16",
  "ucc-conv-2025-06-21-18", "ucc-conv-2025-06-21-20", "ucc-conv-2025-06-21-22", "ucc-conv-2025-06-21-23",
  "ucc-conv-2025-06-21-28", "ucc-conv-2025-06-21-29", "ucc-conv-2025-06-21-30", "ucc-conv-2025-06-21-31",
  "ucc-conv-2025-06-21-32", "ucc-conv-2025-06-21-34", "ucc-conv-2025-06-21-39", "ucc-conv-2025-06-21-40",
  "ucc-conv-2025-06-21-42", "ucc-conv-2025-06-21-43", "ucc-conv-2025-06-21-45", "ucc-conv-2025-06-21-46",
  "ucc-conv-2025-06-21-49", "ucc-conv-2025-06-21-50", "ucc-conv-2025-06-21-62", "ucc-conv-2025-06-21-71",
  "ucc-conv-2025-06-21-78", "ucc-conv-2025-06-21-81", "ucc-conv-2025-06-21-91", "ucc-conv-2025-06-21-92",
  "ucc-conv-2025-06-21-95", "ucc-conv-2025-06-21-98", "ucc-conv-2025-07-05-01", "ucc-conv-2025-07-05-05",
  "ucc-conv-2025-07-05-06", "ucc-conv-2025-07-05-07", "ucc-conv-2025-07-05-08", "ucc-conv-2025-07-05-10",
  "ucc-conv-2025-07-05-11", "ucc-conv-2025-07-05-13", "ucc-conv-2025-07-05-14", "ucc-conv-2025-07-05-15",
  "ucc-conv-2025-07-05-16", "ucc-conv-2025-07-05-17", "ucc-conv-2025-07-05-18", "ucc-conv-2025-07-05-24",
  "ucc-conv-2025-07-05-26", "ucc-conv-2025-07-05-27", "ucc-conv-2025-07-05-28", "ucc-conv-2025-07-05-30",
  "ucc-conv-2025-07-05-31", "ucc-conv-2025-07-05-33", "ucc-conv-2025-07-05-34", "ucc-conv-2025-07-05-36",
  "ucc-conv-2025-07-05-37", "ucc-conv-2025-07-05-38", "ucc-conv-2025-07-05-40", "ucc-conv-2025-07-05-41",
  "ucc-conv-2025-07-05-42", "ucc-conv-2025-07-05-43", "ucc-conv-2025-07-05-44", "ucc-conv-2025-07-05-45",
  "ucc-conv-2025-07-05-46", "ucc-conv-2025-07-05-47", "ucc-conv-2025-07-05-50", "ucc-conv-2025-07-05-52",
  "ucc-conv-2025-07-05-53", "ucc-conv-2025-07-05-55", "ucc-conv-2025-07-05-56", "ucc-conv-2025-07-05-57",
  "ucc-conv-2025-07-05-58", "ucc-conv-2025-07-05-59", "ucc-conv-2025-07-05-60", "ucc-conv-2025-07-05-62",
  "ucc-conv-2025-07-05-63", "ucc-conv-2025-07-05-64", "ucc-conv-2025-07-05-65", "ucc-conv-2025-07-05-66",
  "ucc-conv-2025-07-05-67", "ucc-conv-2025-07-05-68", "ucc-conv-2025-07-05-70", "ucc-conv-2025-07-05-71",
  "ucc-conv-2025-07-05-73", "ucc-conv-2025-07-05-74", "ucc-conv-2025-07-05-76", "ucc-conv-2025-07-05-77",
  "ucc-conv-2025-07-05-78", "ucc-conv-2025-07-05-79", "ucc-conv-2025-07-05-81", "ucc-conv-2025-07-05-82",
  "ucc-conv-2025-07-05-83", "ucc-conv-2025-07-05-84", "ucc-conv-2025-07-05-85", "ucc-conv-2025-07-05-86",
  "ucc-conv-2025-07-05-88", "ucc-conv-2025-07-05-89", "ucc-conv-2025-07-05-90", "ucc-conv-2025-07-05-92",
  "ucc-conv-2025-07-05-93", "ucc-conv-2025-07-05-94", "ucc-conv-2025-07-05-95", "ucc-conv-2025-07-05-96",
  "ucc-conv-2025-07-05-97", "ucc-conv-2025-07-05-98", "ucc-conv-2025-07-05-99", "ucc-conv-2025-07-05-100",
  "ucc-conv-2025-06-21-57", "ucc-conv-2025-06-21-69", "ucc-conv-2025-07-19-18", "ucc-conv-2025-07-19-58",
  "ucc-conv-2025-07-19-95",
]);

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

  const apply = process.argv.includes("--apply");

  const pending = await adminListQuestionReports("pending", "metodo-q");
  const toReview = pending.filter((report) => FIXED_QUESTION_IDS.has(report.questionId));

  if (toReview.length === 0) {
    console.log("No hay reportes pendientes de esas preguntas. Nada que hacer.");
    return;
  }

  console.log(`Reportes pendientes de las preguntas corregidas: ${toReview.length} de ${FIXED_QUESTION_IDS.size}\n`);
  for (const report of toReview) {
    const reporters = report.reportsList?.length
      ? report.reportsList
      : [{ userEmail: report.reportedByEmail, category: "", comments: "" }];
    console.log(`- ${report.questionId}`);
    for (const entry of reporters) {
      const detail = [entry.category, entry.comments].filter(Boolean).join(" · ");
      console.log(`    ${entry.userEmail ?? "(sin correo)"}${detail ? ` — ${detail}` : ""}`);
    }
  }

  if (!apply) {
    console.log("\nModo de prueba: no se cambió nada. Ejecuta con --apply para marcarlos como 'reviewed'.");
    return;
  }

  await adminBulkUpdateQuestionReportStatus(
    toReview.map((report) => report.questionId),
    "reviewed",
  );
  console.log(`\n${toReview.length} reportes marcados como 'reviewed'.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
