"use client";

import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { getFirebaseDb } from "@/lib/firebase";
import { getUserDemoResults } from "@/lib/results";

type DailyPlanCardProps = {
  userId: string;
};

type UserPlanProfile = {
  weaknesses?: string[];
  strengths?: string[];
  lastScore?: number;
  attemptsCount?: number;
};

type StudyPlan = {
  topicTasks: Array<{ topic: string; questions: number }>;
  includeMockExam: boolean;
};

function isToday(isoDate: string) {
  const date = new Date(isoDate);
  const now = new Date();

  return (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate()
  );
}

function getAverageScore(scores: number[]) {
  if (scores.length === 0) {
    return 0;
  }

  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}

function buildAutomaticStudyPlan({
  weaknesses,
  strengths,
  lastScore,
  attemptsCount,
  recentScores,
}: {
  weaknesses: string[];
  strengths: string[];
  lastScore: number;
  attemptsCount: number;
  recentScores: number[];
}): StudyPlan {
  const scoreBaseline = recentScores.length > 0 ? getAverageScore(recentScores) : lastScore;
  const lowPerformance = scoreBaseline < 60;
  const mediumPerformance = scoreBaseline >= 60 && scoreBaseline < 80;
  const topicTasks: Array<{ topic: string; questions: number }> = [];

  const primaryWeakness = weaknesses[0];
  const secondaryWeakness = weaknesses[1];

  if (primaryWeakness) {
    topicTasks.push({
      topic: primaryWeakness,
      questions: lowPerformance ? 15 : 12,
    });
  }

  if (secondaryWeakness) {
    topicTasks.push({
      topic: secondaryWeakness,
      questions: lowPerformance ? 10 : 8,
    });
  }

  if (!primaryWeakness && strengths[0]) {
    topicTasks.push({
      topic: strengths[0],
      questions: 6,
    });
  }

  if (topicTasks.length === 0) {
    topicTasks.push({
      topic: "temas mixtos",
      questions: mediumPerformance ? 12 : 10,
    });
  }

  const includeMockExam = attemptsCount >= 2 && !lowPerformance;

  return {
    topicTasks,
    includeMockExam,
  };
}

export function DailyPlanCard({ userId }: DailyPlanCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasTrainingToday, setHasTrainingToday] = useState(false);
  const [plan, setPlan] = useState<StudyPlan>({
    topicTasks: [],
    includeMockExam: false,
  });

  useEffect(() => {
    let isMounted = true;

    async function loadTodayProgress() {
      setIsLoading(true);

      try {
        const [results, userSnapshot] = await Promise.all([
          getUserDemoResults(userId),
          getDoc(doc(getFirebaseDb(), "users", userId)),
        ]);
        if (!isMounted) return;

        const hasTodayAttempt = results.some(
          (result) => result.fechaIso && isToday(result.fechaIso),
        );
        setHasTrainingToday(hasTodayAttempt);

        const userData = (userSnapshot.data() as UserPlanProfile | undefined) ?? {};
        const recentScores = results.slice(0, 5).map((result) => result.scorePercentage);
        const nextPlan = buildAutomaticStudyPlan({
          weaknesses: userData.weaknesses ?? [],
          strengths: userData.strengths ?? [],
          lastScore: userData.lastScore ?? 0,
          attemptsCount: userData.attemptsCount ?? 0,
          recentScores,
        });
        setPlan(nextPlan);
      } catch (error) {
        console.error("No se pudo cargar el progreso diario.", error);
        if (!isMounted) return;
        setHasTrainingToday(false);
        setPlan({
          topicTasks: [{ topic: "temas mixtos", questions: 10 }],
          includeMockExam: false,
        });
      } finally {
        if (!isMounted) return;
        setIsLoading(false);
      }
    }

    void loadTodayProgress();

    return () => {
      isMounted = false;
    };
  }, [userId]);

  const statusMessage = useMemo(() => {
    if (isLoading) {
      return "Cargando tu progreso de hoy...";
    }

    return hasTrainingToday
      ? "Vas bien, continua"
      : "Empieza tu entrenamiento diario";
  }, [hasTrainingToday, isLoading]);

  return (
    <section className="rounded-2xl border border-mq-accent/45 bg-mq-surface-raised p-5 shadow-[0_20px_48px_-28px_rgb(0_209_255/0.7)] sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mq-accent">
        Tu plan de hoy
      </p>
      <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">Hoy debes hacer:</h2>
      <ul className="mt-3 space-y-2">
        {isLoading ? (
          <li className="text-sm text-foreground sm:text-base">- calculando plan personalizado...</li>
        ) : (
          <>
            {plan.topicTasks.map((task) => (
              <li key={task.topic} className="text-sm text-foreground sm:text-base">
                - {task.questions} preguntas de {task.topic}
              </li>
            ))}
            {plan.includeMockExam ? (
              <li className="text-sm text-foreground sm:text-base">- 1 simulacro corto</li>
            ) : null}
            <li className="text-sm text-foreground sm:text-base">- repasar errores</li>
          </>
        )}
      </ul>
      <p className="mt-4 text-sm font-medium text-mq-muted sm:text-base">{statusMessage}</p>

      <Link
        href="/demo"
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-mq-accent px-6 text-sm font-semibold text-mq-accent-foreground transition duration-150 hover:brightness-110 sm:w-auto"
      >
        Entrenar ahora
      </Link>
    </section>
  );
}
