import type { TrainingQuestion } from "@/lib/questions/types";
import type { RadarChartPoint } from "@/lib/diagnostic/exam-blueprint";

const SHORT_TOPIC_NAMES: Record<string, string> = {
  "Medicina Interna - Cardiología / Guías de Práctica Clínica y Farmacología Cardiovascular.":
    "Cardiología",
  "Medicina Interna - Endocrinología y Metabolismo / Farmacoterapéutica Avanzada.":
    "Endocrinología",
  "Medicina Interna - Neumología / Terapia Respiratoria Inhalada.": "Neumología",
  "Infectología / Epidemiología, Legislación y Salud Pública Colombiana.": "Salud Pública",
  "Infectología / Farmacología Clínica y Políticas Ministeriales.": "Infectología",
  "Medicina Interna - Neurología Clínica / Terapia Neurocrítica.": "Neurología",
  "Ciencias Básicas Aplicadas / Fisiología Gastrointestinal y Bioquímica.": "Ciencias Básicas",
  "Medicina Interna - Cardiología / Semiología Integrada y Fisiopatología Mecánica.":
    "Semiología",
  "Salud Pública / Epidemiología, Administración Médica y Políticas de Estado.":
    "Administración",
  "Razonamiento Abstracto y Lógico / Epidemiología, Análisis de Pruebas Diagnósticas y Bioestadística.":
    "Bioestadística",
};

const BROAD_EXAM_AREA_PREFIXES = [
  "medicina interna",
  "ciencias básicas",
  "ciencias basicas",
  "infectología",
  "infectologia",
  "salud pública",
  "salud publica",
];

function truncateLabel(label: string, max = 20): string {
  return label.length > max ? `${label.slice(0, max - 1)}…` : label;
}

function normalizeKey(value: string): string {
  return value.trim().toLowerCase();
}

function pickFromExamArea(examArea: string, topic?: string): string {
  if (!examArea.includes(" / ")) {
    return examArea.trim();
  }

  const [left, right] = examArea.split(" / ").map((part) => part.trim());
  const leftLower = left.toLowerCase();

  if (BROAD_EXAM_AREA_PREFIXES.some((prefix) => leftLower.startsWith(prefix))) {
    return right || left;
  }

  if (topic) {
    const topicLower = topic.toLowerCase();
    if (topicLower === leftLower || topicLower === right.toLowerCase()) {
      return topic;
    }
    if (leftLower.includes(topicLower) || topicLower.includes(leftLower)) {
      return topic;
    }
  }

  return left;
}

/** Asignatura estable para agrupar estadísticas (sin truncar). */
export function getQuestionSubjectKey(
  question: Pick<TrainingQuestion, "examArea" | "topic">,
): string {
  const topic = question.topic?.trim();
  const examArea = question.examArea?.trim();

  if (topic && SHORT_TOPIC_NAMES[topic]) {
    return SHORT_TOPIC_NAMES[topic];
  }

  if (examArea) {
    return pickFromExamArea(examArea, topic);
  }

  if (topic) {
    if (topic.includes(" - ")) {
      const afterDash = topic.split(" - ").slice(1).join(" - ");
      const segment = afterDash.split(" / ")[0]?.trim();
      if (segment) return segment;
    }
    if (topic.includes(" / ")) {
      return topic.split(" / ")[0]?.trim() || topic;
    }
    return topic;
  }

  return "General";
}

/** Etiqueta corta para el radar y chips del dashboard. */
export function getQuestionSubjectLabel(
  question: Pick<TrainingQuestion, "examArea" | "topic">,
): string {
  return truncateLabel(getQuestionSubjectKey(question));
}

export function formatStatsKeyAsSubject(key: string): string {
  if (SHORT_TOPIC_NAMES[key]) {
    return SHORT_TOPIC_NAMES[key];
  }
  return truncateLabel(key);
}

type SubjectCounts = Record<string, { label: string; correct: number; wrong: number }>;

function emptySubjectCounts(): SubjectCounts {
  return {};
}

function addToSubjectCounts(
  counts: SubjectCounts,
  key: string,
  label: string,
  isCorrect: boolean,
): void {
  if (!counts[key]) {
    counts[key] = { label, correct: 0, wrong: 0 };
  }
  counts[key].label = label;
  if (isCorrect) counts[key].correct += 1;
  else counts[key].wrong += 1;
}

function countsToRadarPoints(counts: SubjectCounts): RadarChartPoint[] {
  return Object.entries(counts)
    .map(([key, { label, correct, wrong }]) => {
      const total = correct + wrong;
      const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
      return {
        key,
        subject: label,
        A: percentage,
        fullMark: 100,
        correct,
        wrong,
        total,
      };
    })
    .filter((point) => point.total > 0)
    .sort((a, b) => (b.total ?? 0) - (a.total ?? 0));
}

/** Radar por asignatura a partir de la sesión respondida. */
export function buildSubjectRadarFromSession(
  questions: TrainingQuestion[],
  answersByQuestionId: Record<string, string>,
): RadarChartPoint[] {
  const counts = emptySubjectCounts();

  for (const question of questions) {
    const selected = answersByQuestionId[question.id];
    if (!selected) continue;

    const key = normalizeKey(getQuestionSubjectKey(question));
    const label = getQuestionSubjectLabel(question);
    const isCorrect = selected === question.correctOptionId;
    addToSubjectCounts(counts, key, label, isCorrect);
  }

  return countsToRadarPoints(counts);
}

/** Radar por asignatura a partir de contadores guardados. */
export function buildSubjectRadarFromStats(
  correctTopics: Record<string, number>,
  wrongTopics: Record<string, number>,
): RadarChartPoint[] {
  const counts = emptySubjectCounts();
  const allKeys = new Set([...Object.keys(correctTopics), ...Object.keys(wrongTopics)]);

  for (const rawKey of allKeys) {
    const correct = correctTopics[rawKey] ?? 0;
    const wrong = wrongTopics[rawKey] ?? 0;
    if (correct + wrong === 0) continue;

    const label = formatStatsKeyAsSubject(rawKey);
    const key = normalizeKey(label);
    if (!counts[key]) {
      counts[key] = { label, correct: 0, wrong: 0 };
    }
    counts[key].label = label;
    counts[key].correct += correct;
    counts[key].wrong += wrong;
  }

  return countsToRadarPoints(counts);
}

export type SubjectPerformanceLevel = "strong" | "ok" | "weak";

export function getSubjectPerformanceLevel(score: number): SubjectPerformanceLevel {
  if (score >= 70) return "strong";
  if (score >= 55) return "ok";
  return "weak";
}

export function getSubjectPerformanceColor(score: number): string {
  const level = getSubjectPerformanceLevel(score);
  if (level === "strong") return "#34d399";
  if (level === "ok") return "#fbbf24";
  return "#f87171";
}

export type SubjectStatus = {
  key: string;
  label: string;
  score: number;
  questions: number;
  wrong: number;
  correct: number;
  status: SubjectPerformanceLevel | "empty";
};

const STATUS_SORT_ORDER: Record<SubjectStatus["status"], number> = {
  weak: 0,
  ok: 1,
  strong: 2,
  empty: 3,
};

function resolveSubjectStatus(score: number, total: number): SubjectStatus["status"] {
  if (total === 0) return "empty";
  if (total < 5) return "ok";
  return getSubjectPerformanceLevel(score);
}

/** Barras de desempeño por asignatura (debilidades primero). */
export function buildSubjectStatusFromStats(
  correctTopics: Record<string, number>,
  wrongTopics: Record<string, number>,
  limit = 12,
): SubjectStatus[] {
  return sortSubjectStatuses(
    buildSubjectRadarFromStats(correctTopics, wrongTopics).map(radarPointToSubjectStatus),
  ).slice(0, limit);
}

function radarPointToSubjectStatus(point: RadarChartPoint): SubjectStatus {
  const total = point.total ?? (point.correct ?? 0) + (point.wrong ?? 0);
  return {
    key: point.key ?? point.subject,
    label: point.subject,
    score: point.A,
    questions: total,
    wrong: point.wrong ?? 0,
    correct: point.correct ?? 0,
    status: resolveSubjectStatus(point.A, total),
  };
}

function sortSubjectStatuses(subjects: SubjectStatus[]): SubjectStatus[] {
  return [...subjects].sort((a, b) => {
    const statusDiff = STATUS_SORT_ORDER[a.status] - STATUS_SORT_ORDER[b.status];
    if (statusDiff !== 0) return statusDiff;
    if (a.status === "weak") return a.score - b.score;
    if (a.status === "strong") return b.score - a.score;
    return b.wrong - a.wrong;
  });
}

/** Lista completa de asignaturas para paneles de desempeño (sin límite). */
export function buildSubjectStatusFromRadar(points: RadarChartPoint[]): SubjectStatus[] {
  return sortSubjectStatuses(points.map(radarPointToSubjectStatus));
}
