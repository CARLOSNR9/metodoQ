export type ActivityStatus = "activo" | "riesgo" | "inactivo" | "sin_datos";

type ActivityTimestamp = Date | string | { toDate?: () => Date } | null | undefined;

function toDate(value: ActivityTimestamp): Date | null {
  if (!value) return null;
  if (value instanceof Date) return value;
  if (typeof value === "string") {
    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  }
  if (typeof value.toDate === "function") {
    return value.toDate();
  }
  return null;
}

export function resolveActivityStatus(lastActiveAt: ActivityTimestamp): ActivityStatus {
  const lastActiveDate = toDate(lastActiveAt);
  if (!lastActiveDate) return "sin_datos";

  const diffInDays =
    (Date.now() - lastActiveDate.getTime()) / (1000 * 60 * 60 * 24);

  if (diffInDays >= 5) return "inactivo";
  if (diffInDays >= 2) return "riesgo";
  return "activo";
}

export function getActivityStatusLabel(status: ActivityStatus): string {
  const labels: Record<ActivityStatus, string> = {
    activo: "Activo",
    riesgo: "En riesgo",
    inactivo: "Inactivo",
    sin_datos: "Sin actividad",
  };
  return labels[status];
}

export function formatRelativeLastActive(lastActiveAt: ActivityTimestamp): string {
  const date = toDate(lastActiveAt);
  if (!date) return "Nunca";

  const diffMs = Date.now() - date.getTime();
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMinutes < 1) return "Hace un momento";
  if (diffMinutes < 60) return `Hace ${diffMinutes} min`;
  if (diffHours < 24) return `Hace ${diffHours} h`;
  if (diffDays === 1) return "Ayer";
  if (diffDays < 7) return `Hace ${diffDays} días`;
  return date.toLocaleDateString("es-CO", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
