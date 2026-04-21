"use client";

import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getFirebaseDb } from "@/lib/firebase";

type StreakCardProps = {
  userId: string;
};

type UserStreakData = {
  streakCount?: number;
};

export function StreakCard({ userId }: StreakCardProps) {
  const [streakCount, setStreakCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadStreak() {
      setIsLoading(true);

      try {
        const userRef = doc(getFirebaseDb(), "users", userId);
        const userSnapshot = await getDoc(userRef);
        if (!isMounted) return;

        const userData = userSnapshot.data() as UserStreakData | undefined;
        setStreakCount(userData?.streakCount ?? 0);
      } catch (error) {
        console.error("No se pudo cargar la racha del usuario.", error);
        if (!isMounted) return;
        setStreakCount(0);
      } finally {
        if (!isMounted) return;
        setIsLoading(false);
      }
    }

    void loadStreak();

    return () => {
      isMounted = false;
    };
  }, [userId]);

  return (
    <section className="rounded-2xl border border-orange-400/35 bg-orange-500/10 p-5 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-300">
        Racha activa
      </p>
      <p className="mt-2 text-lg font-semibold text-white sm:text-xl">
        {isLoading ? "Cargando racha..." : `🔥 Llevas ${streakCount} dias seguidos entrenando`}
      </p>
    </section>
  );
}
