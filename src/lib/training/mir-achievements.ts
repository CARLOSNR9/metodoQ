import { doc, getDoc, setDoc } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import { getMirAttemptLog, type MirAttemptLogEntry } from "@/lib/training/mir-convocatoria";
import { MIR_FLASHCARDS } from "@/lib/training/mir-flashcards";
import {
  MIR_MASTERY_MIN_ANSWERS,
  buildMirMastery,
  getMirSpecialtyStats,
  type MirSpecialtyStats,
} from "@/lib/training/mir-mastery";
import { MIR_EXAM_QUESTIONS, getMirScoreSummary } from "@/lib/training/mir-scoring";

/**
 * Logros del módulo MIR («logros de la doctora»). Se calculan a partir de
 * lo que ya se guarda (racha, retos, estadísticas por especialidad,
 * simulacros, repaso y tarjetas) y los desbloqueados se guardan con su
 * fecha en `users/{uid}.mirAchievements` (id → ISO), de modo que no se
 * pierden aunque, por ejemplo, la racha se rompa después.
 */
export type MirAchievementId =
  | "first_step"
  | "streak_3"
  | "streak_7"
  | "streak_30"
  | "challenges_7"
  | "answers_100"
  | "answers_500"
  | "first_simulacro"
  | "full_simulacro"
  | "net_100"
  | "explorer_10"
  | "first_mastered"
  | "mastered_5"
  | "review_10"
  | "flashcards_50";

export type MirAchievementDefinition = {
  id: MirAchievementId;
  title: string;
  description: string;
  /** Emoji decorativo de la insignia. */
  emoji: string;
  target: number;
};

export type MirAchievementContext = {
  streakCount: number;
  hasActivity: boolean;
  dailyChallengesCompleted: number;
  totalAnswered: number;
  attemptLog: MirAttemptLogEntry[];
  specialtyStats: MirSpecialtyStats;
  reviewMastered: number;
  flashcardsKnown: number;
};

export type MirAchievementStatus = MirAchievementDefinition & {
  progress: number;
  unlocked: boolean;
  unlockedAt: string | null;
};

export const MIR_ACHIEVEMENTS: MirAchievementDefinition[] = [
  { id: "first_step", emoji: "👣", title: "Primer paso", description: "Completa tu primera sesión de estudio MIR.", target: 1 },
  { id: "streak_3", emoji: "🔥", title: "En marcha", description: "Estudia 3 días seguidos.", target: 3 },
  { id: "streak_7", emoji: "📅", title: "Una semana de racha", description: "Estudia 7 días seguidos.", target: 7 },
  { id: "streak_30", emoji: "🏅", title: "Constancia de residente", description: "Estudia 30 días seguidos.", target: 30 },
  { id: "challenges_7", emoji: "🎯", title: "Siete retos superados", description: "Completa 7 retos diarios de la doctora.", target: 7 },
  { id: "answers_100", emoji: "✍️", title: "100 respuestas", description: "Responde 100 preguntas MIR.", target: 100 },
  { id: "answers_500", emoji: "📚", title: "500 respuestas", description: "Responde 500 preguntas MIR.", target: 500 },
  { id: "first_simulacro", emoji: "⏱️", title: "Primer simulacro", description: "Entrega tu primer simulacro cronometrado.", target: 1 },
  { id: "full_simulacro", emoji: "🏁", title: "Maratón MIR", description: "Entrega un simulacro completo de 200 preguntas.", target: 1 },
  { id: "net_100", emoji: "📈", title: "Cien netas", description: "Consigue 100 netas o más (proyectadas a 200 preguntas) en un simulacro.", target: 100 },
  { id: "explorer_10", emoji: "🧭", title: "Visión de conjunto", description: "Responde preguntas de 10 especialidades distintas.", target: 10 },
  { id: "first_mastered", emoji: "🩺", title: "Primera especialidad dominada", description: `Llega al 75 % de acierto en una especialidad (con ${MIR_MASTERY_MIN_ANSWERS} respuestas o más).`, target: 1 },
  { id: "mastered_5", emoji: "🧠", title: "Cinco especialidades dominadas", description: "Domina 5 especialidades del mapa.", target: 5 },
  { id: "review_10", emoji: "♻️", title: "Errores vencidos", description: "Domina 10 preguntas en el repaso de errores.", target: 10 },
  { id: "flashcards_50", emoji: "🃏", title: "Memoria de tarjetas", description: "Marca 50 tarjetas de repaso como sabidas.", target: 50 },
];

function getProgress(id: MirAchievementId, ctx: MirAchievementContext): number {
  const mastery = buildMirMastery(ctx.specialtyStats);
  const masteredCount = mastery.filter(
    (item) => item.level === "mastered" && item.answered >= MIR_MASTERY_MIN_ANSWERS,
  ).length;
  switch (id) {
    case "first_step":
      return ctx.hasActivity ? 1 : 0;
    case "streak_3":
    case "streak_7":
    case "streak_30":
      return ctx.streakCount;
    case "challenges_7":
      return ctx.dailyChallengesCompleted;
    case "answers_100":
    case "answers_500":
      return ctx.totalAnswered;
    case "first_simulacro":
      return ctx.attemptLog.length > 0 ? 1 : 0;
    case "full_simulacro":
      return ctx.attemptLog.some((entry) => entry.total >= MIR_EXAM_QUESTIONS) ? 1 : 0;
    case "net_100":
      return Math.max(0, ...ctx.attemptLog.map((entry) => getMirScoreSummary(entry).projectedNet));
    case "explorer_10":
      return Object.values(ctx.specialtyStats).filter((tally) => tally.answered > 0).length;
    case "first_mastered":
    case "mastered_5":
      return masteredCount;
    case "review_10":
      return ctx.reviewMastered;
    case "flashcards_50":
      return ctx.flashcardsKnown;
  }
}

/** Estado de todos los logros; `unlockedAt` sale de los ya guardados. */
export function computeMirAchievements(
  ctx: MirAchievementContext,
  stored: Partial<Record<MirAchievementId, string>> = {},
): MirAchievementStatus[] {
  return MIR_ACHIEVEMENTS.map((definition) => {
    const progress = getProgress(definition.id, ctx);
    const unlockedAt = stored[definition.id] ?? null;
    return {
      ...definition,
      progress: Math.min(progress, definition.target),
      unlocked: Boolean(unlockedAt) || progress >= definition.target,
      unlockedAt,
    };
  });
}

export type MirAchievementsResult = {
  achievements: MirAchievementStatus[];
  /** Logros que se acaban de desbloquear en esta evaluación. */
  newlyUnlocked: MirAchievementStatus[];
};

/** Evalúa los logros del usuario y guarda los recién desbloqueados. */
export async function evaluateMirAchievements(userId: string): Promise<MirAchievementsResult> {
  const userRef = doc(getFirebaseDb(), "users", userId);
  const [snap, attemptLog, specialtyStats] = await Promise.all([
    getDoc(userRef),
    getMirAttemptLog(userId),
    getMirSpecialtyStats(userId),
  ]);
  const data = snap.data() ?? {};
  const stored = (data.mirAchievements ?? {}) as Partial<Record<MirAchievementId, string>>;
  const flashcards = (data.mirFlashcards ?? {}) as Record<string, { status?: string }>;
  const knownIds = new Set(MIR_FLASHCARDS.map((card) => card.id));

  const ctx: MirAchievementContext = {
    streakCount: Number(data.mirStreakCount ?? 0),
    hasActivity: typeof data.mirStreakLastActiveDate === "string" || attemptLog.length > 0,
    dailyChallengesCompleted: Number(data.mirDailyChallengesCompleted ?? 0),
    totalAnswered: Number(data.mirTotalAnswered ?? 0),
    attemptLog,
    specialtyStats,
    reviewMastered: Number(data.mirReviewMastered ?? 0),
    flashcardsKnown: Object.entries(flashcards).filter(
      ([cardId, entry]) => knownIds.has(cardId) && entry?.status === "known",
    ).length,
  };

  const achievements = computeMirAchievements(ctx, stored);
  const now = new Date().toISOString();
  const newlyUnlocked = achievements
    .filter((item) => item.unlocked && !item.unlockedAt)
    .map((item) => ({ ...item, unlockedAt: now }));

  if (newlyUnlocked.length > 0) {
    try {
      await setDoc(
        userRef,
        { mirAchievements: Object.fromEntries(newlyUnlocked.map((item) => [item.id, now])) },
        { merge: true },
      );
    } catch (error) {
      console.error("No se pudieron guardar los logros MIR.", error);
    }
  }

  const byId = new Map(newlyUnlocked.map((item) => [item.id, item]));
  return {
    achievements: achievements.map((item) => byId.get(item.id) ?? item),
    newlyUnlocked,
  };
}
