import { doc, getDoc, setDoc } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import { getLocalDateKey } from "@/lib/results";
import { getTodayFailedQuestions } from "@/lib/training/failed-questions";
import { getTodayTrainingStatus } from "@/lib/training/usage";
import type { LearningTrackProfile } from "@/lib/diagnostic/ucc-pasto-track";

type DailyRepasoCierreDoc = {
  dateKey: string;
  completedAt?: string;
};

type UserRepasoDoc = {
  dailyRepasoCierre?: DailyRepasoCierreDoc;
};

export type RepasoCierreStatus = {
  missionComplete: boolean;
  failedCount: number;
  unresolvedCount: number;
  cierreCompleted: boolean;
  cierreAvailable: boolean;
  cierreLockedReason: string | null;
};

export async function isRepasoCierreCompletedToday(userId: string): Promise<boolean> {
  const todayKey = getLocalDateKey(new Date());
  const snap = await getDoc(doc(getFirebaseDb(), "users", userId));
  const data = snap.data() as UserRepasoDoc | undefined;
  const cierre = data?.dailyRepasoCierre;
  return cierre?.dateKey === todayKey && Boolean(cierre.completedAt);
}

export async function markRepasoCierreCompleted(userId: string) {
  const todayKey = getLocalDateKey(new Date());
  await setDoc(
    doc(getFirebaseDb(), "users", userId),
    {
      dailyRepasoCierre: {
        dateKey: todayKey,
        completedAt: new Date().toISOString(),
      },
    },
    { merge: true },
  );
}

export async function getRepasoCierreStatus(
  userId: string,
  profile: LearningTrackProfile | null | undefined,
  planStartedAt?: string | null,
): Promise<RepasoCierreStatus> {
  const [trainingStatus, failed, cierreCompleted] = await Promise.all([
    getTodayTrainingStatus(userId, profile, planStartedAt),
    getTodayFailedQuestions(userId),
    isRepasoCierreCompletedToday(userId),
  ]);

  const unresolved = failed.filter((item) => !item.resolved);
  const missionComplete = trainingStatus.missionComplete;
  const unresolvedCount = unresolved.length;

  let cierreLockedReason: string | null = null;
  if (!missionComplete) {
    cierreLockedReason =
      "Completa tu misión del día (bloques y meta de preguntas) para desbloquear el examen de cierre.";
  } else if (unresolvedCount === 0) {
    cierreLockedReason =
      failed.length > 0
        ? "Ya resolviste todas tus fallas de hoy. ¡Excelente trabajo!"
        : "Hoy no tienes preguntas fallidas pendientes.";
  } else if (cierreCompleted) {
    cierreLockedReason = "Ya completaste el examen de cierre de hoy.";
  }

  const cierreAvailable =
    missionComplete && unresolvedCount > 0 && !cierreCompleted;

  return {
    missionComplete,
    failedCount: failed.length,
    unresolvedCount,
    cierreCompleted,
    cierreAvailable,
    cierreLockedReason,
  };
}
