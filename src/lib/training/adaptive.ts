import type { TrainingQuestion } from "@/lib/questions/types";

type UserLearningProfile = {
  weaknesses: string[];
  strengths: string[];
  topicStats: Record<string, { correct: number; wrong: number }>;
};

function getTopicWeight(topic: string, profile: UserLearningProfile) {
  const weaknessIndex = profile.weaknesses.findIndex((item) => item === topic);
  const strengthIndex = profile.strengths.findIndex((item) => item === topic);

  let weight = 1;
  if (weaknessIndex >= 0) {
    weight += Math.max(0.2, 0.9 - weaknessIndex * 0.2);
  }
  if (strengthIndex >= 0) {
    weight -= Math.max(0.2, 0.6 - strengthIndex * 0.15);
  }
  return Math.max(0.2, weight);
}

export function selectAdaptiveQuestions(
  questions: TrainingQuestion[],
  desiredCount: number,
  profile: UserLearningProfile,
) {
  if (desiredCount >= questions.length) {
    return [...questions];
  }

  const pool = [...questions];
  const selected: TrainingQuestion[] = [];

  while (selected.length < desiredCount && pool.length > 0) {
    const weights = pool.map((question) => getTopicWeight(question.topic, profile));
    const totalWeight = weights.reduce((sum, item) => sum + item, 0);
    let pick = Math.random() * totalWeight;
    let selectedIndex = 0;

    for (let index = 0; index < pool.length; index += 1) {
      pick -= weights[index];
      if (pick <= 0) {
        selectedIndex = index;
        break;
      }
    }

    selected.push(pool[selectedIndex]);
    pool.splice(selectedIndex, 1);
  }

  return selected;
}

export function buildDynamicFeedbackMessage({
  topic,
  isCorrect,
  profile,
  currentCorrectTopics,
  currentWrongTopics,
}: {
  topic: string;
  isCorrect: boolean;
  profile: UserLearningProfile;
  currentCorrectTopics: Record<string, number>;
  currentWrongTopics: Record<string, number>;
}) {
  const historical = profile.topicStats[topic] ?? { correct: 0, wrong: 0 };
  const performance = {
    correct: historical.correct + (currentCorrectTopics[topic] ?? 0),
    wrong: historical.wrong + (currentWrongTopics[topic] ?? 0),
  };
  const isWeakTopic = profile.weaknesses.includes(topic);
  const isStrongTopic = profile.strengths.includes(topic);

  if (!isCorrect && (performance.wrong >= performance.correct + 2 || isWeakTopic)) {
    return "Estas fallando seguido en este tipo de preguntas";
  }
  if (isWeakTopic) {
    return "Este tema es clave en el examen";
  }
  if (isCorrect && (performance.correct >= performance.wrong + 3 || isStrongTopic)) {
    return "Ya estas dominando este concepto";
  }
  return "Este tema es clave en el examen";
}
