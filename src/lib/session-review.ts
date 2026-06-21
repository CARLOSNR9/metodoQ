import { getAllRepositoryQuestions } from "@/lib/questions/local-bank";
import type { TrainingQuestion } from "@/lib/questions/types";

export type SessionReviewItem = {
  index: number;
  question: TrainingQuestion;
  selectedOptionId: string | null;
  isCorrect: boolean;
  correctOptionLabel: string;
  selectedOptionLabel: string | null;
  incorrectFeedback: string | null;
};

const questionByIdCache = new Map<string, TrainingQuestion>();

function getQuestionLookup(): Map<string, TrainingQuestion> {
  if (questionByIdCache.size === 0) {
    for (const question of getAllRepositoryQuestions()) {
      questionByIdCache.set(question.id, question);
    }
  }
  return questionByIdCache;
}

export function resolveSessionQuestions(questionIds: string[]): TrainingQuestion[] {
  const lookup = getQuestionLookup();
  return questionIds
    .map((id) => lookup.get(id))
    .filter((question): question is TrainingQuestion => Boolean(question));
}

export function buildSessionReviewItems(
  sessionQuestions: TrainingQuestion[],
  answersByQuestionId: Record<string, string>,
): SessionReviewItem[] {
  return sessionQuestions.map((question, index) => {
    const selectedOptionId = answersByQuestionId[question.id] ?? null;
    const isCorrect = selectedOptionId === question.correctOptionId;
    const selectedOption = selectedOptionId
      ? question.options.find((option) => option.id === selectedOptionId)
      : null;
    const correctOption = question.options.find(
      (option) => option.id === question.correctOptionId,
    );

    return {
      index: index + 1,
      question,
      selectedOptionId,
      isCorrect,
      correctOptionLabel: correctOption
        ? `${correctOption.label}. ${correctOption.text}`
        : question.correctOptionId,
      selectedOptionLabel: selectedOption
        ? `${selectedOption.label}. ${selectedOption.text}`
        : null,
      incorrectFeedback:
        !isCorrect && selectedOption?.incorrectFeedback
          ? selectedOption.incorrectFeedback
          : null,
    };
  });
}

export function hasSessionReviewData(
  sessionQuestionIds?: string[] | null,
  answersByQuestionId?: Record<string, string> | null,
): boolean {
  return (
    Array.isArray(sessionQuestionIds) &&
    sessionQuestionIds.length > 0 &&
    Boolean(answersByQuestionId) &&
    Object.keys(answersByQuestionId ?? {}).length > 0
  );
}

export type SessionWrongTopicSummary = {
  topic: string;
  wrongCount: number;
  questionIds: string[];
};

export function getWrongQuestionIds(
  sessionQuestions: TrainingQuestion[],
  answersByQuestionId: Record<string, string>,
): string[] {
  return sessionQuestions
    .filter((question) => answersByQuestionId[question.id] !== question.correctOptionId)
    .map((question) => question.id);
}

export function getSessionWrongTopics(
  sessionQuestions: TrainingQuestion[],
  answersByQuestionId: Record<string, string>,
): SessionWrongTopicSummary[] {
  const byTopic = new Map<string, SessionWrongTopicSummary>();

  for (const question of sessionQuestions) {
    if (answersByQuestionId[question.id] === question.correctOptionId) continue;
    const topic = question.topic || "General";
    const existing = byTopic.get(topic);
    if (existing) {
      existing.wrongCount += 1;
      existing.questionIds.push(question.id);
    } else {
      byTopic.set(topic, {
        topic,
        wrongCount: 1,
        questionIds: [question.id],
      });
    }
  }

  return Array.from(byTopic.values()).sort((a, b) => b.wrongCount - a.wrongCount);
}

const DEFAULT_SESSION_ERRORS_COUNT = 25;
const DEFAULT_TOPIC_TRAINING_COUNT = 15;

export function buildSessionErrorsTrainingHref(options: {
  resultId?: string | null;
  questionIds?: string[];
  count?: number;
}): string {
  const params = new URLSearchParams();
  params.set("mode", "session-errors");

  if (options.resultId) {
    params.set("resultId", options.resultId);
  } else if (options.questionIds?.length) {
    params.set("ids", options.questionIds.slice(0, 40).join(","));
  }

  const count =
    options.count ??
    Math.min(
      options.questionIds?.length ?? DEFAULT_SESSION_ERRORS_COUNT,
      DEFAULT_SESSION_ERRORS_COUNT,
    );
  params.set("count", String(Math.max(1, count)));

  return `/dashboard/entrenar?${params.toString()}`;
}

export function buildTopicTrainingHref(options: {
  topic: string;
  count?: number;
}): string {
  const params = new URLSearchParams();
  params.set("topic", options.topic);
  params.set("count", String(options.count ?? DEFAULT_TOPIC_TRAINING_COUNT));
  return `/dashboard/entrenar?${params.toString()}`;
}
