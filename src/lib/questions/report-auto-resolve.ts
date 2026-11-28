import type { ResolvedQuestionReport } from "@/data/resolved-question-reports";

type ReportLike = {
  questionId: string;
  status: string;
  createdAt: string;
  reportsList?: { createdAt: string }[];
};

/** Fecha del reporte de estudiante más reciente de una pregunta. */
export function latestStudentReportAt(report: ReportLike): string {
  const dates = (report.reportsList ?? []).map((r) => r.createdAt);
  dates.push(report.createdAt);
  return dates.sort().at(-1) ?? report.createdAt;
}

/**
 * Reportes pendientes que ya quedaron resueltos por una corrección en el
 * código: la pregunta está en el registro y nadie la reportó después.
 */
export function selectReportsToAutoResolve<T extends ReportLike>(
  reports: T[],
  registry: Record<string, ResolvedQuestionReport>,
): T[] {
  return reports.filter((report) => {
    if (report.status !== "pending") return false;
    const fix = registry[report.questionId];
    return Boolean(fix) && latestStudentReportAt(report) <= fix.resolvedAt;
  });
}
