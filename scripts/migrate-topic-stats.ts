import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { migrateAllUsersTopicStatsAdmin } from "../src/lib/server/migrate-topic-stats-admin";

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

  console.log("Iniciando migración topicStats → asignaturas...");
  const result = await migrateAllUsersTopicStatsAdmin();
  console.log("Migración completada:", result);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
