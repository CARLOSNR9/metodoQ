import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import {
  adminBulkUpdateQuestionReportStatus,
  adminListQuestionReports,
} from "../src/lib/server/question-reports-admin";

/**
 * Marca como revisados los reportes pendientes de las convocatorias UCC a las
 * que les faltaba retroalimentación por opción (reportadas por Elizabeth, UCC).
 * Se corrigieron en https://github.com/CARLOSNR9/metodoQ/pull/69.
 *
 * Por defecto solo lista lo que cambiaría. Para escribir en Firestore:
 *   npx tsx scripts/mark-ucc-feedback-reports-reviewed-2026-10-23.ts --apply
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

// Ediciones cuyas opciones incorrectas no tenían retroalimentación (PR #69).
const FIXED_EDITION_PREFIXES = [
  "ucc-conv-2026-07-26-",
  "ucc-conv-2026-08-09-",
  "ucc-conv-2026-08-23-",
];

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
  const toReview = pending.filter((report) =>
    FIXED_EDITION_PREFIXES.some((prefix) => report.questionId.startsWith(prefix)),
  );

  if (toReview.length === 0) {
    console.log("No hay reportes pendientes de esas convocatorias. Nada que hacer.");
    return;
  }

  console.log(`Reportes pendientes de las convocatorias corregidas: ${toReview.length}\n`);
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
