import type { TrainingQuestion } from "@/lib/questions/types";
import {
  buildSubjectRadarFromSession,
  buildSubjectRadarFromStats,
  getQuestionSubjectKey,
} from "@/lib/diagnostic/question-subject";
import { supportsDedicatedDiagnosticBattery } from "@/lib/diagnostic/university-match";

/** Ejes del examen unificado (Medicina Interna — UNAL / UdeA). */
export const MI_EXAM_RADAR_AXES = [
  "Medicina Interna",
  "Cirugía",
  "Ginecología",
  "Pediatría",
  "Salud Pública / Tropical",
  "Urgencias",
  "Legislación / Ética",
] as const;

export type MiExamRadarAxis = (typeof MI_EXAM_RADAR_AXES)[number];

const RADAR_DISPLAY_LABELS: Record<MiExamRadarAxis, string> = {
  "Medicina Interna": "Med. Interna",
  Cirugía: "Cirugía",
  Ginecología: "Ginecología",
  Pediatría: "Pediatría",
  "Salud Pública / Tropical": "S. Pública",
  Urgencias: "Urgencias",
  "Legislación / Ética": "Legislación",
};

export type RadarChartPoint = {
  subject: string;
  /** Clave estable de la asignatura (agrupación). */
  key?: string;
  axis?: MiExamRadarAxis;
  A: number;
  fullMark: number;
  correct?: number;
  wrong?: number;
  total?: number;
};

export function mapExamAreaToRadarAxis(examArea: string): MiExamRadarAxis {
  const n = examArea.toLowerCase();

  if (n.includes("cirug")) return "Cirugía";
  if (n.includes("ginec") || n.includes("obstetr")) return "Ginecología";
  if (n.includes("pediatr")) return "Pediatría";
  if (n.includes("legisl") || n.includes("ética") || n.includes("etica") || n.includes("bioética")) {
    return "Legislación / Ética";
  }
  if (n.includes("cardiología") || n.includes("endocrin") || n.includes("nefrolog") || n.includes("neumolog")) {
    return "Medicina Interna";
  }
  if (n.includes("toxicolog")) return "Urgencias";
  if (n.includes("infectología") && n.includes("viral")) return "Urgencias";
  if (
    n.includes("salud pública") ||
    n.includes("tropical") ||
    n.includes("infectología respiratoria") ||
    (n.includes("infectología") && n.includes("salud pública"))
  ) {
    return "Salud Pública / Tropical";
  }
  if (n.includes("urgencias")) return "Urgencias";

  return "Medicina Interna";
}

export function getPerformanceStatsKey(
  question: Pick<TrainingQuestion, "examArea" | "topic">,
): string {
  return getQuestionSubjectKey(question);
}

function emptyAxisCounts(): Record<MiExamRadarAxis, { correct: number; wrong: number }> {
  return MI_EXAM_RADAR_AXES.reduce(
    (acc, axis) => {
      acc[axis] = { correct: 0, wrong: 0 };
      return acc;
    },
    {} as Record<MiExamRadarAxis, { correct: number; wrong: number }>,
  );
}

function countsToRadarPoints(
  counts: Record<MiExamRadarAxis, { correct: number; wrong: number }>,
): RadarChartPoint[] {
  return MI_EXAM_RADAR_AXES.map((axis) => {
    const { correct, wrong } = counts[axis];
    const total = correct + wrong;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    return {
      axis,
      subject: RADAR_DISPLAY_LABELS[axis],
      A: percentage,
      fullMark: 100,
    };
  });
}

/** Radar a partir de la sesión respondida (máxima precisión). */
export function buildRadarFromSession(
  questions: TrainingQuestion[],
  answersByQuestionId: Record<string, string>,
): RadarChartPoint[] {
  const counts = emptyAxisCounts();

  for (const question of questions) {
    const selected = answersByQuestionId[question.id];
    if (!selected) continue;

    const axis = mapExamAreaToRadarAxis(question.examArea ?? question.topic);
    const isCorrect = selected === question.correctOptionId;
    if (isCorrect) counts[axis].correct += 1;
    else counts[axis].wrong += 1;
  }

  return countsToRadarPoints(counts);
}

/** Radar a partir de contadores guardados (dashboard / historial). */
export function buildRadarFromStats(
  correctTopics: Record<string, number>,
  wrongTopics: Record<string, number>,
): RadarChartPoint[] {
  const counts = emptyAxisCounts();

  const allKeys = new Set([...Object.keys(correctTopics), ...Object.keys(wrongTopics)]);
  for (const key of allKeys) {
    const axis = MI_EXAM_RADAR_AXES.includes(key as MiExamRadarAxis)
      ? (key as MiExamRadarAxis)
      : mapExamAreaToRadarAxis(key);
    counts[axis].correct += correctTopics[key] ?? 0;
    counts[axis].wrong += wrongTopics[key] ?? 0;
  }

  return countsToRadarPoints(counts);
}

export function buildRadarChartData({
  university,
  specialty,
  correctTopics = {},
  wrongTopics = {},
  sessionQuestions,
  answersByQuestionId,
}: {
  university?: string | null;
  specialty?: string | null;
  correctTopics?: Record<string, number>;
  wrongTopics?: Record<string, number>;
  sessionQuestions?: TrainingQuestion[];
  answersByQuestionId?: Record<string, string>;
}): RadarChartPoint[] {
  if (
    sessionQuestions &&
    sessionQuestions.length > 0 &&
    answersByQuestionId &&
    Object.keys(answersByQuestionId).length > 0
  ) {
    return buildSubjectRadarFromSession(sessionQuestions, answersByQuestionId);
  }

  const subjectRadar = buildSubjectRadarFromStats(correctTopics, wrongTopics);
  if (subjectRadar.length > 0) {
    return subjectRadar;
  }

  const useBlueprint = supportsDedicatedDiagnosticBattery(university, specialty);
  if (useBlueprint) {
    return buildRadarFromStats(correctTopics, wrongTopics);
  }

  return buildRadarFromDynamicTopics(correctTopics, wrongTopics);
}

/** Entrenamiento genérico: temas dinámicos sin ejes del examen. */
function buildRadarFromDynamicTopics(
  correctTopics: Record<string, number>,
  wrongTopics: Record<string, number>,
): RadarChartPoint[] {
  const allKeys = new Set([...Object.keys(correctTopics), ...Object.keys(wrongTopics)]);
  if (allKeys.size === 0) {
    return [];
  }

  return Array.from(allKeys)
    .map((topic) => {
      const correct = correctTopics[topic] ?? 0;
      const wrong = wrongTopics[topic] ?? 0;
      const total = correct + wrong;
      const label = topic.length > 22 ? `${topic.slice(0, 20)}…` : topic;
      return {
        axis: "Medicina Interna" as MiExamRadarAxis,
        subject: label,
        A: total > 0 ? Math.round((correct / total) * 100) : 0,
        fullMark: 100,
      };
    })
    .slice(0, 6);
}

export function getTopicLossesFromRadar(
  radarData: RadarChartPoint[],
  wrongTopics: Record<string, number> = {},
): { name: string; loss: number; wrong: number }[] {
  if (radarData.length > 0 && radarData.some((point) => point.wrong !== undefined)) {
    return radarData
      .map((point) => {
        const wrong = point.wrong ?? 0;
        return {
          name: point.subject,
          wrong,
          loss: wrong * 35,
        };
      })
      .filter((t) => t.wrong > 0)
      .sort((a, b) => b.loss - a.loss)
      .slice(0, 3);
  }

  if (radarData.length > 0 && radarData[0].axis) {
    return radarData
      .map((point) => {
        const wrong = wrongTopics[point.axis ?? ""] ?? 0;
        return {
          name: point.subject,
          wrong,
          loss: wrong * 35,
        };
      })
      .filter((t) => t.wrong > 0)
      .sort((a, b) => b.loss - a.loss)
      .slice(0, 3);
  }

  return Object.entries(wrongTopics)
    .map(([name, wrong]) => ({
      name: name.length > 22 ? `${name.slice(0, 20)}…` : name,
      wrong,
      loss: wrong * 35,
    }))
    .filter((t) => t.wrong > 0)
    .sort((a, b) => b.loss - a.loss)
    .slice(0, 3);
}
