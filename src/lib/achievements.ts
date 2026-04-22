import { doc, getDoc, updateDoc, arrayUnion, serverTimestamp, addDoc, collection } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import { getUserAccumulatedStats } from "@/lib/results";

export type AchievementId = "FIRST_MOCK" | "STREAK_7" | "QUESTIONS_100";

export interface Achievement {
  id: AchievementId;
  title: string;
  description: string;
}

export const ACHIEVEMENTS: Record<AchievementId, Achievement> = {
  FIRST_MOCK: {
    id: "FIRST_MOCK",
    title: "Primer simulacro completado",
    description: "Has dado tu primer paso hacia el éxito.",
  },
  STREAK_7: {
    id: "STREAK_7",
    title: "7 días seguidos",
    description: "Tu constancia es admirable.",
  },
  QUESTIONS_100: {
    id: "QUESTIONS_100",
    title: "100 preguntas respondidas",
    description: "Ya dominas lo básico, ¡sigue así!",
  },
};

export async function checkAchievements(userId: string) {
  const db = getFirebaseDb();
  const userRef = doc(db, "users", userId);
  const userSnap = await getDoc(userRef);
  
  if (!userSnap.exists()) return [];

  const userData = userSnap.data();
  const currentAchievements = new Set(userData.achievements || []);
  const newlyUnlocked: AchievementId[] = [];

  const stats = await getUserAccumulatedStats(userId);
  const currentStreak = userData.streakCount || 0;

  // 1. Primer simulacro
  if (!currentAchievements.has("FIRST_MOCK") && stats.totalQuestions > 0) {
    newlyUnlocked.push("FIRST_MOCK");
  }

  // 2. 7 días seguidos
  if (!currentAchievements.has("STREAK_7") && currentStreak >= 7) {
    newlyUnlocked.push("STREAK_7");
  }

  // 3. 100 preguntas
  if (!currentAchievements.has("QUESTIONS_100") && stats.totalQuestions >= 100) {
    newlyUnlocked.push("QUESTIONS_100");
  }

  if (newlyUnlocked.length > 0) {
    await updateDoc(userRef, {
      achievements: arrayUnion(...newlyUnlocked),
      lastAchievementAt: serverTimestamp(),
    });

    // Registrar notificación en una colección (opcional, pero útil para la UI)
    for (const achievementId of newlyUnlocked) {
      await addDoc(collection(db, "notifications"), {
        userId,
        type: "ACHIEVEMENT",
        achievementId,
        message: `¡Logro desbloqueado: ${ACHIEVEMENTS[achievementId].title}!`,
        read: false,
        createdAt: serverTimestamp(),
      });
    }
  }

  return newlyUnlocked;
}
