import { DIAGNOSTIC_THEORY_PILLS } from "@/data/diagnostic-theory-pills";
import { HEMATOLOGIA_BANCO_THEORY_PILLS } from "@/data/hematologia-banco-theory-pills";
import { QUESTION_THEORY_PILLS } from "@/data/question-theory-pills";
import type { TrainingQuestion } from "@/lib/questions/types";

let theoryIndexBuilt = false;
let THEORY_BY_QUESTION_ID: Record<string, string> = {};
let THEORY_BY_STATEMENT: Map<string, string> = new Map();

function statementFingerprint(statement: string): string {
  const stem = statement.trim().toLowerCase().split("¿")[0]?.trim() ?? statement.trim();
  return stem.slice(0, 120);
}

function ensureTheoryIndex(questions: TrainingQuestion[]) {
  if (theoryIndexBuilt) return;

  THEORY_BY_QUESTION_ID = {
    ...QUESTION_THEORY_PILLS,
    ...DIAGNOSTIC_THEORY_PILLS,
    ...HEMATOLOGIA_BANCO_THEORY_PILLS,
  };

  for (const question of questions) {
    const content = question.theoryContent?.trim();
    if (content) {
      THEORY_BY_QUESTION_ID[question.id] = content;
    }
  }

  THEORY_BY_STATEMENT = new Map();
  for (const question of questions) {
    const content = question.theoryContent?.trim() ?? THEORY_BY_QUESTION_ID[question.id]?.trim();
    if (content) {
      THEORY_BY_STATEMENT.set(question.statement.trim(), content);
      THEORY_BY_STATEMENT.set(statementFingerprint(question.statement), content);
    }
  }

  theoryIndexBuilt = true;
}

// removed static index build

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
  ensureTheoryIndex(questions);
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
