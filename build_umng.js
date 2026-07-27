const fs = require('fs');

let text = fs.readFileSync('src/lib/training/ucc-convocatoria.ts', 'utf-8');
text = text.replace(/Ucc/g, 'Umng').replace(/UCC_/g, 'UMNG_').replace(/ucc-/g, 'umng-');

const dataImports = `import { UMNG_CONV_2026_07_26_QUESTIONS } from "@/data/umng-conv-2026-07-26-questions";\n`;
const importStart = text.indexOf('import { UMNG_CONV_');
const importEnd = text.indexOf('import { getFirebaseDb }');
text = text.slice(0, importStart) + dataImports + text.slice(importEnd);

const editionsCode = `export const UMNG_CONVOCATORIA_EDITIONS: UmngConvocatoriaEdition[] = [
  {
    code: "UMNG-2026-07-26",
    label: "Edición #1",
    examDate: "2026-07-26",
    questionCount: 100,
    minutes: 120,
    isGlobal: true,
    stayOpenUntilNext: true,
    daysOpen: 8,
    questions: UMNG_CONV_2026_07_26_QUESTIONS,
  },
  {
    code: "UMNG-ED2",
    label: "Edición #2",
    examDate: "",
    questionCount: 100,
    minutes: 120,
    questions: [],
  },
  {
    code: "UMNG-ED3",
    label: "Edición #3",
    examDate: "",
    questionCount: 100,
    minutes: 120,
    questions: [],
  }
];\n`;

const arrayStart = text.indexOf('export const UMNG_CONVOCATORIA_EDITIONS: UmngConvocatoriaEdition[] = [');
const arrayEnd = text.indexOf('function parseLocalDate(');
text = text.slice(0, arrayStart) + editionsCode + text.slice(arrayEnd);

const parseLocalDateCode = `function parseLocalDate(dateKey: string): Date {
  if (!dateKey) return new Date(8640000000000000);
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(year, month - 1, day, 0, 0, 0, 0);
}`;
const formatEditionDateCode = `function formatEditionDate(dateKey: string): string {
  if (!dateKey) return "Fecha por definir";
  return new Intl.DateTimeFormat("es-CO", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parseLocalDate(dateKey));
}`;

text = text.replace(/function parseLocalDate\(dateKey: string\): Date \{[\s\S]*?\n\}/, parseLocalDateCode);
text = text.replace(/function formatEditionDate\(dateKey: string\): string \{[\s\S]*?\n\}/, formatEditionDateCode);

fs.writeFileSync('src/lib/training/umng-convocatoria.ts', text, 'utf-8');
console.log('done');
