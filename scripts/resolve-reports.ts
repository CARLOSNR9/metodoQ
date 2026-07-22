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

async function run() {
  const ids = [
    'ucc-conv-2025-07-19-18',
    'ucc-conv-2025-07-19-24',
    'ucc-conv-2025-07-19-60',
    'ucc-conv-2025-07-19-88',
    'ucc-conv-2025-07-19-95'
  ];

  console.log("Resolving reports...");
  for (const id of ids) {
    try {
      await adminUpdateQuestionReportStatus(id, "reviewed");
      console.log(`Successfully reviewed question: ${id}`);
    } catch (e) {
      console.error(`Error with ${id}:`, e);
    }
  }
  console.log("Done!");
}

run().catch(console.error);
