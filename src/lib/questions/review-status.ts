import type { QuestionReviewStatus } from "./types";

const REVIEW_STATUS_PRIORITY: Record<QuestionReviewStatus, number> = {
  approved: 4,
  needs_changes: 3,
  rejected: 2,
  pending: 1,
};

export function normalizeReviewStatus(value: unknown): QuestionReviewStatus {
  const raw = String(value ?? "pending").trim().toLowerCase();
  if (raw === "approved" || raw === "aprobada" || raw === "aprobado") return "approved";
  if (raw === "needs_changes" || raw === "requiere_cambios" || raw === "needs-changes") {
    return "needs_changes";
  }
  if (raw === "rejected" || raw === "rechazada" || raw === "rechazado") return "rejected";
  return "pending";
}

export function reviewStatusPriority(status: QuestionReviewStatus): number {
  return REVIEW_STATUS_PRIORITY[status];
}
