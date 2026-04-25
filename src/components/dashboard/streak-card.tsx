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

import { Flame } from "lucide-react";

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
    <section className="mq-glass group overflow-hidden rounded-3xl p-6 transition-all hover:border-orange-500/50">
      <div className="flex items-center gap-4">
        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-500 ${streakCount > 0 ? "bg-orange-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.4)]" : "bg-white/5 text-mq-muted"}`}>
          <Flame size={24} className={streakCount > 0 ? "animate-pulse" : ""} fill={streakCount > 0 ? "currentColor" : "none"} />
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-mq-muted">Racha Actual</p>
          <p className="text-xl font-bold text-white">
            {isLoading ? "Sincronizando..." : `${streakCount} días`}
          </p>
        </div>
      </div>
      {streakCount === 0 && !isLoading && (
        <p className="mt-4 text-xs text-mq-muted">
          ¡Empieza tu racha hoy mismo! El éxito depende de la constancia.
        </p>
      )}
    </section>
  );
}
