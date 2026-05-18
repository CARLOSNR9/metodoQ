import type { TrainingQuestion } from "@/lib/questions/types";
import type { RadarChartPoint } from "@/lib/diagnostic/exam-blueprint";

/** Ejes del examen UCC Pasto — Medicina Interna (100 preguntas / 3 h). */
export const UCC_EXAM_RADAR_AXES = [
  "Ciencias Clínicas",
  "Epidemiología",
  "Res. 3280",
  "Lectura Crítica",
] as const;

export type UccExamRadarAxis = (typeof UCC_EXAM_RADAR_AXES)[number];

const UCC_RADAR_DISPLAY_LABELS: Record<UccExamRadarAxis, string> = {
  "Ciencias Clínicas": "Clínica",
  Epidemiología: "Epidemiol.",
  "Res. 3280": "Res. 3280",
  "Lectura Crítica": "Lectura",
};

export function mapUccExamAreaToRadarAxis(examArea: string): UccExamRadarAxis {
  const n = examArea.toLowerCase();

  if (
    n.includes("3280") ||
    n.includes("prevención") ||
    n.includes("prevencion") ||
    n.includes("materno") ||
    n.includes("salud pública") ||
    n.includes("salud publica")
  ) {
    return "Res. 3280";
  }
  if (n.includes("epidemiolog") || n.includes("bioestad")) {
    return "Epidemiología";
  }
  if (n.includes("lectura") || n.includes("comprensión") || n.includes("comprension")) {
    return "Lectura Crítica";
  }

  return "Ciencias Clínicas";
}

function emptyUccAxisCounts(): Record<UccExamRadarAxis, { correct: number; wrong: number }> {
  return UCC_EXAM_RADAR_AXES.reduce(
    (acc, axis) => {
      acc[axis] = { correct: 0, wrong: 0 };
      return acc;
    },
    {} as Record<UccExamRadarAxis, { correct: number; wrong: number }>,
  );
}

function uccCountsToRadarPoints(
  counts: Record<UccExamRadarAxis, { correct: number; wrong: number }>,
): RadarChartPoint[] {
  return UCC_EXAM_RADAR_AXES.map((axis) => {
    const { correct, wrong } = counts[axis];
    const total = correct + wrong;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    return {
      axis: axis as RadarChartPoint["axis"],
      subject: UCC_RADAR_DISPLAY_LABELS[axis],
      A: percentage,
      fullMark: 100,
    };
  });
}

export function buildUccRadarFromSession(
  questions: TrainingQuestion[],
  answersByQuestionId: Record<string, string>,
): RadarChartPoint[] {
  const counts = emptyUccAxisCounts();

  for (const question of questions) {
    const selected = answersByQuestionId[question.id];
    if (!selected) continue;

    const axis = mapUccExamAreaToRadarAxis(question.examArea ?? question.topic);
    const isCorrect = selected === question.correctOptionId;
    if (isCorrect) counts[axis].correct += 1;
    else counts[axis].wrong += 1;
  }

  return uccCountsToRadarPoints(counts);
}

export function buildUccRadarFromStats(
  correctTopics: Record<string, number>,
  wrongTopics: Record<string, number>,
): RadarChartPoint[] {
  const counts = emptyUccAxisCounts();

  const allKeys = new Set([...Object.keys(correctTopics), ...Object.keys(wrongTopics)]);
  for (const key of allKeys) {
    const axis = UCC_EXAM_RADAR_AXES.includes(key as UccExamRadarAxis)
      ? (key as UccExamRadarAxis)
      : mapUccExamAreaToRadarAxis(key);
    counts[axis].correct += correctTopics[key] ?? 0;
    counts[axis].wrong += wrongTopics[key] ?? 0;
  }

  return uccCountsToRadarPoints(counts);
}
