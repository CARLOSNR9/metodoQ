import type { QuestionReviewStatus } from "./types";

export const REVIEW_STATUS_LABELS: Record<QuestionReviewStatus, string> = {
  pending: "Pendiente",
  approved: "Aprobada",
  needs_changes: "Requiere cambios",
  rejected: "Rechazada",
};

export const REVIEW_STATUS_STYLES: Record<QuestionReviewStatus, string> = {
  pending: "bg-amber-500/15 text-amber-300",
  approved: "bg-emerald-500/15 text-emerald-300",
  needs_changes: "bg-orange-500/15 text-orange-300",
  rejected: "bg-rose-500/15 text-rose-300",
};
