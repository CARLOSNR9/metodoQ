/**
 * Ranking semanal MIR: preguntas respondidas de lunes a domingo entre los
 * alumnos que se han unido voluntariamente (`users/{uid}.mirRankingOptIn`),
 * cada uno con el alias que elige (`mirRankingAlias`). Se calcula en el
 * servidor (src/app/actions/mir-ranking-actions.ts) y al cliente solo le
 * llegan alias y totales: nunca uid, nombre ni correo.
 *
 * Los recuentos salen de `mirAnsweredByDay`, que escribe el propio cliente;
 * por eso se acota lo que cuenta cada día.
 */

export const MIR_RANKING_TOP_SIZE = 10;
/** Respuestas como máximo por día que cuentan para el ranking. */
export const MIR_RANKING_MAX_PER_DAY = 500;
export const MIR_RANKING_ALIAS_MIN = 2;
export const MIR_RANKING_ALIAS_MAX = 24;

const DATE_KEY_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

export function isValidDateKey(value: unknown): value is string {
  if (typeof value !== "string" || !DATE_KEY_PATTERN.test(value)) return false;
  const date = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

/** Los 7 días (YYYY-MM-DD) de la semana que empieza en `mondayKey`. */
export function getWeekDateKeys(mondayKey: string): string[] {
  const monday = new Date(`${mondayKey}T00:00:00Z`);
  return Array.from({ length: 7 }, (_, index) => {
    const day = new Date(monday);
    day.setUTCDate(monday.getUTCDate() + index);
    return day.toISOString().slice(0, 10);
  });
}

/**
 * Alias seguro para mostrar: espacios normalizados, solo letras, números,
 * espacios y . _ -; null si queda demasiado corto.
 */
export function sanitizeMirRankingAlias(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const cleaned = raw
    .normalize("NFC")
    .replace(/[^\p{L}\p{N} ._-]/gu, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, MIR_RANKING_ALIAS_MAX)
    .trim();
  return cleaned.length >= MIR_RANKING_ALIAS_MIN ? cleaned : null;
}

/** Alias por defecto, estable por alumno y sin revelar nada de él. */
export function getDefaultMirRankingAlias(uid: string): string {
  let hash = 0;
  for (let i = 0; i < uid.length; i += 1) hash = (Math.imul(hash, 31) + uid.charCodeAt(i)) >>> 0;
  return `Residente ${String(hash % 10000).padStart(4, "0")}`;
}

export type MirRankingParticipant = {
  uid: string;
  alias: unknown;
  answeredByDay: unknown;
};

export type MirRankingEntry = { rank: number; alias: string; total: number; isMe: boolean };

export type MirWeeklyRanking = {
  /** Los primeros con al menos una respuesta esta semana. */
  top: MirRankingEntry[];
  /** Posición propia (también si está fuera del top); null si aún no suma esta semana. */
  me: MirRankingEntry | null;
  /** Participantes con al menos una respuesta esta semana. */
  activeCount: number;
};

export function getWeekTotal(answeredByDay: unknown, weekKeys: string[]): number {
  if (!answeredByDay || typeof answeredByDay !== "object") return 0;
  const byDay = answeredByDay as Record<string, unknown>;
  return weekKeys.reduce((sum, key) => {
    const count = Number(byDay[key]);
    return sum + (Number.isFinite(count) ? Math.min(MIR_RANKING_MAX_PER_DAY, Math.max(0, Math.floor(count))) : 0);
  }, 0);
}

/** Ranking de competición (1, 2, 2, 4): empatados comparten puesto; a igualdad, por alias. */
export function buildMirWeeklyRanking(
  participants: MirRankingParticipant[],
  callerUid: string,
  weekKeys: string[],
  topSize: number = MIR_RANKING_TOP_SIZE,
): MirWeeklyRanking {
  const scored = participants
    .map((participant) => ({
      uid: participant.uid,
      alias: sanitizeMirRankingAlias(participant.alias) ?? getDefaultMirRankingAlias(participant.uid),
      total: getWeekTotal(participant.answeredByDay, weekKeys),
    }))
    .filter((participant) => participant.total > 0)
    .sort((a, b) => b.total - a.total || a.alias.localeCompare(b.alias, "es") || a.uid.localeCompare(b.uid));

  let previousTotal = -1;
  let previousRank = 0;
  const ranked = scored.map((participant, index) => {
    const rank = participant.total === previousTotal ? previousRank : index + 1;
    previousTotal = participant.total;
    previousRank = rank;
    return { rank, alias: participant.alias, total: participant.total, isMe: participant.uid === callerUid };
  });

  return {
    top: ranked.slice(0, topSize),
    me: ranked.find((entry) => entry.isMe) ?? null,
    activeCount: ranked.length,
  };
}
