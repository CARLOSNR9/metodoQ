import type { TrainingQuestion } from "@/lib/questions/types";
import type { RadarChartPoint } from "@/lib/diagnostic/exam-blueprint";

/** Núcleos Res. Rectoral 108/2022 — UCC Pasto Medicina Interna. */
export const UCC_RES108_AXES = [
  "Ciencias Básicas",
  "Clínica Adulto",
  "APS y Urgencias",
  "Comprensión Lectora",
] as const;

export type UccRes108Axis = (typeof UCC_RES108_AXES)[number];

export const UCC_RES108_WEIGHTS: Record<UccRes108Axis, number> = {
  "Ciencias Básicas": 20,
  "Clínica Adulto": 50,
  "APS y Urgencias": 20,
  "Comprensión Lectora": 10,
};

const RES108_LABELS: Record<UccRes108Axis, string> = {
  "Ciencias Básicas": "Básicas",
  "Clínica Adulto": "Clínica",
  "APS y Urgencias": "APS/Urg.",
  "Comprensión Lectora": "Lectura",
};

export function mapQuestionToRes108Axis(
  question: Pick<TrainingQuestion, "examArea" | "topic" | "tags">,
): UccRes108Axis {
  const area = (question.examArea ?? question.topic).toLowerCase();
  const tags = (question.tags ?? []).join(" ").toLowerCase();
  const blob = `${area} ${tags}`;

  if (
    blob.includes("lectura") ||
    blob.includes("comprensión") ||
    blob.includes("comprension") ||
    blob.includes("deontolog") ||
    blob.includes("ética") ||
    blob.includes("etica") ||
    blob.includes("mbb") ||
    blob.includes("evidencia")
  ) {
    return "Comprensión Lectora";
  }

  if (
    blob.includes("epidemiolog") ||
    blob.includes("bioestad") ||
    blob.includes("3280") ||
    blob.includes("salud pública") ||
    blob.includes("salud publica") ||
    blob.includes("prevención") ||
    blob.includes("prevencion") ||
    blob.includes("tamizaje") ||
    blob.includes("rias")
  ) {
    return "APS y Urgencias";
  }

  if (
    blob.includes("farmac") ||
    blob.includes("inmunolog") ||
    blob.includes("bioquím") ||
    blob.includes("bioquim") ||
    blob.includes("fisiolog") ||
    blob.includes("molecular") ||
    blob.includes("celular") ||
    blob.includes("básicas") ||
    blob.includes("basicas")
  ) {
    return "Ciencias Básicas";
  }

  return "Clínica Adulto";
}

function emptyRes108Counts(): Record<UccRes108Axis, { correct: number; wrong: number }> {
  return UCC_RES108_AXES.reduce(
    (acc, axis) => {
      acc[axis] = { correct: 0, wrong: 0 };
      return acc;
    },
    {} as Record<UccRes108Axis, { correct: number; wrong: number }>,
  );
}

function toRadarPoints(
  counts: Record<UccRes108Axis, { correct: number; wrong: number }>,
): RadarChartPoint[] {
  return UCC_RES108_AXES.map((axis) => {
    const { correct, wrong } = counts[axis];
    const total = correct + wrong;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    return {
      axis: axis as RadarChartPoint["axis"],
      subject: RES108_LABELS[axis],
      A: percentage,
      fullMark: 100,
    };
  });
}

export function buildRes108RadarFromStats(
  correctTopics: Record<string, number>,
  wrongTopics: Record<string, number>,
): RadarChartPoint[] {
  const counts = emptyRes108Counts();
  const allKeys = new Set([...Object.keys(correctTopics), ...Object.keys(wrongTopics)]);

  for (const key of allKeys) {
    const axis = UCC_RES108_AXES.includes(key as UccRes108Axis)
      ? (key as UccRes108Axis)
      : mapQuestionToRes108Axis({ examArea: key, topic: key });
    counts[axis].correct += correctTopics[key] ?? 0;
    counts[axis].wrong += wrongTopics[key] ?? 0;
  }

  return toRadarPoints(counts);
}

export function buildRes108RadarFromSession(
  questions: TrainingQuestion[],
  answersByQuestionId: Record<string, string>,
): RadarChartPoint[] {
  const counts = emptyRes108Counts();

  for (const question of questions) {
    const selected = answersByQuestionId[question.id];
    if (!selected) continue;
    const axis = mapQuestionToRes108Axis(question);
    if (selected === question.correctOptionId) counts[axis].correct += 1;
    else counts[axis].wrong += 1;
  }

  return toRadarPoints(counts);
}

export type Res108NucleusStatus = {
  axis: UccRes108Axis;
  label: string;
  weight: number;
  score: number;
  questions: number;
  status: "strong" | "ok" | "weak" | "empty";
};

export function buildRes108NucleusStatus(
  correctTopics: Record<string, number>,
  wrongTopics: Record<string, number>,
): Res108NucleusStatus[] {
  const radar = buildRes108RadarFromStats(correctTopics, wrongTopics);
  const counts = emptyRes108Counts();
  const allKeys = new Set([...Object.keys(correctTopics), ...Object.keys(wrongTopics)]);

  for (const key of allKeys) {
    const axis = UCC_RES108_AXES.includes(key as UccRes108Axis)
      ? (key as UccRes108Axis)
      : mapQuestionToRes108Axis({ examArea: key, topic: key });
    counts[axis].correct += correctTopics[key] ?? 0;
    counts[axis].wrong += wrongTopics[key] ?? 0;
  }

  return UCC_RES108_AXES.map((axis, index) => {
    const { correct, wrong } = counts[axis];
    const total = correct + wrong;
    const score = radar[index]?.A ?? 0;

    let status: Res108NucleusStatus["status"] = "empty";
    if (total >= 5) {
      if (score >= 70) status = "strong";
      else if (score >= 55) status = "ok";
      else status = "weak";
    } else if (total > 0) {
      status = "ok";
    }

    return {
      axis,
      label: RES108_LABELS[axis],
      weight: UCC_RES108_WEIGHTS[axis],
      score,
      questions: total,
      status,
    };
  });
}
