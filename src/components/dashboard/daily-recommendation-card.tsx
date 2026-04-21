"use client";

import Link from "next/link";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useMemo, useState } from "react";
import { getFirebaseDb } from "@/lib/firebase";

type DailyRecommendationCardProps = {
  userId: string;
};

type UserRecommendationProfile = {
  weaknesses?: string[];
  lastScore?: number;
};

function buildRecommendation(weaknesses: string[], lastScore?: number) {
  if (weaknesses.length > 0) {
    const mainWeakness = weaknesses[0];
    const secondaryWeakness = weaknesses[1];

    if (secondaryWeakness) {
      return `Practica ${mainWeakness} (tu punto debil) y refuerza ${secondaryWeakness}.`;
    }

    return `Practica ${mainWeakness} (tu punto debil).`;
  }

  if (typeof lastScore === "number" && lastScore >= 80) {
    return "Haz un simulacro corto para mantener tu nivel.";
  }

  return "Haz un simulacro corto y revisa tus errores al terminar.";
}

export function DailyRecommendationCard({ userId }: DailyRecommendationCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [weaknesses, setWeaknesses] = useState<string[]>([]);
  const [lastScore, setLastScore] = useState<number | undefined>(undefined);

  useEffect(() => {
    const userRef = doc(getFirebaseDb(), "users", userId);

    const unsubscribe = onSnapshot(
      userRef,
      (snapshot) => {
        const data = snapshot.data() as UserRecommendationProfile | undefined;
        setWeaknesses(data?.weaknesses ?? []);
        setLastScore(data?.lastScore);
        setIsLoading(false);
      },
      (error) => {
        console.error("No se pudo cargar la recomendacion diaria.", error);
        setWeaknesses([]);
        setLastScore(undefined);
        setIsLoading(false);
      },
    );

    return () => {
      unsubscribe();
    };
  }, [userId]);

  const recommendationMessage = useMemo(() => {
    if (isLoading) {
      return "Analizando tu perfil...";
    }

    return buildRecommendation(weaknesses, lastScore);
  }, [isLoading, lastScore, weaknesses]);

  return (
    <section className="rounded-2xl border border-indigo-400/35 bg-indigo-500/10 p-5 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-indigo-200">
        Recomendacion para hoy
      </p>
      <p className="mt-2 text-base font-semibold text-white sm:text-lg">{recommendationMessage}</p>
      <Link
        href="/demo"
        className="mt-4 inline-flex min-h-11 items-center justify-center rounded-xl bg-mq-accent px-4 text-sm font-semibold text-mq-accent-foreground transition duration-150 hover:brightness-110"
      >
        Empezar entrenamiento
      </Link>
    </section>
  );
}
