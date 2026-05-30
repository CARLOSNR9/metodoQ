import { DIAGNOSTIC_THEORY_PILLS } from "@/data/diagnostic-theory-pills";
import { QUESTION_THEORY_PILLS } from "@/data/question-theory-pills";
import type { TrainingQuestion } from "@/lib/questions/types";

const ALL_THEORY_PILLS: Record<string, string> = {
  ...QUESTION_THEORY_PILLS,
  ...DIAGNOSTIC_THEORY_PILLS,
};

export function enrichQuestionWithTheoryPill(
  question: TrainingQuestion,
): TrainingQuestion {
  if (question.theoryContent?.trim()) {
    return question;
  }

  const pill = ALL_THEORY_PILLS[question.id];
  if (!pill) {
    return question;
  }

  return { ...question, theoryContent: pill };
}

export function enrichQuestionsWithTheoryPills(
  questions: TrainingQuestion[],
): TrainingQuestion[] {
  return questions.map(enrichQuestionWithTheoryPill);
}

export function hasTheoryPill(questionId: string): boolean {
  return Boolean(ALL_THEORY_PILLS[questionId]);
}
