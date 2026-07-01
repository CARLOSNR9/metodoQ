import { DAILY_CHALLENGES } from "@/data/daily-challenges";
import { DR_Q_BANCO_GENERAL_276_325_QUESTIONS } from "@/data/dr-q-banco-general-276-325-questions";
import { DR_Q_COEXAM_QUESTIONS } from "@/data/dr-q-coexam-questions";
import { DR_Q_HEMATOLOGIA_BANCO_GENERAL_QUESTIONS } from "@/data/dr-q-hematologia-banco-general-questions";
import { DR_Q_MULTISPECIALTY_QUESTIONS } from "@/data/dr-q-multispecialty-questions";
import { DR_Q_UNIVERSAL_QUESTIONS } from "@/data/dr-q-universal-questions";
import { DIAGNOSTIC_THEORY_PILLS } from "@/data/diagnostic-theory-pills";
import { EXTENDED_QUESTIONS } from "@/data/extended-questions";
import { FALLBACK_QUESTIONS } from "@/data/fallback-questions";
import { HEMATOLOGIA_BANCO_THEORY_PILLS } from "@/data/hematologia-banco-theory-pills";
import { QUESTION_THEORY_PILLS } from "@/data/question-theory-pills";
import { UCC_PASTO_DIAGNOSTIC_QUESTIONS } from "@/data/ucc-pasto-diagnostico-questions";
import { UCC_PASTO_PRO_QUESTIONS } from "@/data/ucc-pasto-pro-questions";
import { UDEA_DIAGNOSTIC_QUESTIONS } from "@/data/udea-diagnostico-questions";
import { UNAL_DIAGNOSTIC_QUESTIONS } from "@/data/unal-diagnostico-questions";
import type { TrainingQuestion } from "@/lib/questions/types";

const REPOSITORY_QUESTIONS: TrainingQuestion[] = [
  ...FALLBACK_QUESTIONS,
  ...EXTENDED_QUESTIONS,
  ...DR_Q_UNIVERSAL_QUESTIONS,
  ...DR_Q_MULTISPECIALTY_QUESTIONS,
  ...DR_Q_HEMATOLOGIA_BANCO_GENERAL_QUESTIONS,
  ...DR_Q_BANCO_GENERAL_276_325_QUESTIONS,
  ...DR_Q_COEXAM_QUESTIONS,
  ...DAILY_CHALLENGES,
  ...UDEA_DIAGNOSTIC_QUESTIONS,
  ...UNAL_DIAGNOSTIC_QUESTIONS,
  ...UCC_PASTO_DIAGNOSTIC_QUESTIONS,
  ...UCC_PASTO_PRO_QUESTIONS,
];

function buildTheoryIndex(): Record<string, string> {
  const index: Record<string, string> = {
    ...QUESTION_THEORY_PILLS,
    ...DIAGNOSTIC_THEORY_PILLS,
    ...HEMATOLOGIA_BANCO_THEORY_PILLS,
  };

  for (const question of REPOSITORY_QUESTIONS) {
    const content = question.theoryContent?.trim();
    if (content) {
      index[question.id] = content;
    }
  }

  return index;
}

function statementFingerprint(statement: string): string {
  const stem = statement.trim().toLowerCase().split("¿")[0]?.trim() ?? statement.trim();
  return stem.slice(0, 120);
}

function buildStatementTheoryIndex(
  theoryById: Record<string, string>,
): Map<string, string> {
  const map = new Map<string, string>();

  for (const question of REPOSITORY_QUESTIONS) {
    const content =
      question.theoryContent?.trim() ?? theoryById[question.id]?.trim();
    if (content) {
      map.set(question.statement.trim(), content);
      map.set(statementFingerprint(question.statement), content);
    }
  }

  return map;
}

const THEORY_BY_QUESTION_ID = buildTheoryIndex();
const THEORY_BY_STATEMENT = buildStatementTheoryIndex(THEORY_BY_QUESTION_ID);

function findTheoryByStatement(statement: string): string | undefined {
  const trimmed = statement.trim();
  const exact = THEORY_BY_STATEMENT.get(trimmed);
  if (exact) return exact;

  const fingerprint = statementFingerprint(trimmed);
  const byFingerprint = THEORY_BY_STATEMENT.get(fingerprint);
  if (byFingerprint) return byFingerprint;

  for (const [key, content] of THEORY_BY_STATEMENT) {
    if (key.length < 40) continue;
    if (trimmed.startsWith(key) || key.startsWith(trimmed.slice(0, key.length))) {
      return content;
    }
  }

  return undefined;
}

export function enrichQuestionWithTheoryPill(
  question: TrainingQuestion,
): TrainingQuestion {
  if (question.theoryContent?.trim()) {
    return question;
  }

  const byId = THEORY_BY_QUESTION_ID[question.id]?.trim();
  if (byId) {
    return { ...question, theoryContent: byId };
  }

  const byStatement = findTheoryByStatement(question.statement);
  if (byStatement) {
    return { ...question, theoryContent: byStatement };
  }

  return question;
}

export function enrichQuestionsWithTheoryPills(
  questions: TrainingQuestion[],
): TrainingQuestion[] {
  return questions.map(enrichQuestionWithTheoryPill);
}

export function hasTheoryPill(questionId: string): boolean {
  return Boolean(THEORY_BY_QUESTION_ID[questionId]);
}

/** Teoría vigente en el repositorio para una pregunta (id o enunciado). */
export function getTheoryContentForQuestion(
  questionId: string,
  statement?: string,
): string | undefined {
  const byId = THEORY_BY_QUESTION_ID[questionId]?.trim();
  if (byId) return byId;

  if (statement?.trim()) {
    return findTheoryByStatement(statement);
  }

  return undefined;
}
