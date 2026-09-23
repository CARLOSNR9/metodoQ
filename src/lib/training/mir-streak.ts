import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import { getLocalDateKey } from "@/lib/results";

export type MirStreakInfo = {
  count: number;
  lastActiveDate: string | null;
  /** Fechas locales (YYYY-MM-DD) recientes con actividad MIR, más reciente al final. */
  activeDates: string[];
};

const EMPTY_STREAK: MirStreakInfo = { count: 0, lastActiveDate: null, activeDates: [] };
const MAX_TRACKED_DATES = 14;

export async function getMirStreakInfo(userId: string): Promise<MirStreakInfo> {
  try {
    const snap = await getDoc(doc(getFirebaseDb(), "users", userId));
    const data = snap.data();
    if (!data) return EMPTY_STREAK;
    return {
      count: Number(data.mirStreakCount ?? 0),
      lastActiveDate: typeof data.mirStreakLastActiveDate === "string" ? data.mirStreakLastActiveDate : null,
      activeDates: Array.isArray(data.mirActiveDates) ? data.mirActiveDates : [],
    };
  } catch (error) {
    console.error("No se pudo leer la racha MIR.", error);
    return EMPTY_STREAK;
  }
}

/** Registra actividad MIR de hoy y avanza la racha (día consecutivo o reinicio a 1). */
export async function registerMirTrainingDay(userId: string): Promise<MirStreakInfo> {
  const userRef = doc(getFirebaseDb(), "users", userId);
  const snap = await getDoc(userRef);
  const data = snap.data();

  const currentStreak = Number(data?.mirStreakCount ?? 0);
  const lastActiveDate =
    typeof data?.mirStreakLastActiveDate === "string" ? data.mirStreakLastActiveDate : null;
  const existingDates: string[] = Array.isArray(data?.mirActiveDates) ? data.mirActiveDates : [];

  const now = new Date();
  const todayKey = getLocalDateKey(now);

  if (lastActiveDate === todayKey) {
    return { count: currentStreak, lastActiveDate, activeDates: existingDates };
  }

  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayKey = getLocalDateKey(yesterday);

  const nextStreak = lastActiveDate === yesterdayKey ? currentStreak + 1 : 1;
  const nextDates = [...existingDates, todayKey].slice(-MAX_TRACKED_DATES);

  await setDoc(
    userRef,
    {
      mirStreakCount: nextStreak,
      mirStreakLastActiveDate: todayKey,
      mirActiveDates: nextDates,
      mirStreakUpdatedAt: serverTimestamp(),
    },
    { merge: true },
  );

  return { count: nextStreak, lastActiveDate: todayKey, activeDates: nextDates };
}
