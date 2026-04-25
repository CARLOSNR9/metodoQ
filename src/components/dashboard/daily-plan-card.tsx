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

import { Calendar, CheckCircle2, Circle, ArrowRight } from "lucide-react";

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

  return (
    <section className="mq-glass relative overflow-hidden rounded-[2rem] p-8 sm:p-10">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-mq-accent/10 text-mq-accent">
          <Calendar size={20} />
        </div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-mq-muted">Plan de Entrenamiento</p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-end">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white">Objetivos para hoy:</h2>
          
          <ul className="space-y-4">
            {isLoading ? (
              <li className="flex items-center gap-3 text-mq-muted animate-pulse">
                <Circle size={18} className="text-white/20" />
                <span>Calculando tu ruta óptima...</span>
              </li>
            ) : (
              <>
                {plan.topicTasks.map((task) => (
                  <li key={task.topic} className="flex items-center gap-3 text-white">
                    {hasTrainingToday ? (
                      <CheckCircle2 size={18} className="text-emerald-500" />
                    ) : (
                      <Circle size={18} className="text-mq-accent" />
                    )}
                    <span className="font-medium">{task.questions} preguntas de <span className="text-mq-accent capitalize">{task.topic}</span></span>
                  </li>
                ))}
                {plan.includeMockExam && (
                  <li className="flex items-center gap-3 text-white">
                    {hasTrainingToday ? (
                      <CheckCircle2 size={18} className="text-emerald-500" />
                    ) : (
                      <Circle size={18} className="text-mq-accent" />
                    )}
                    <span className="font-medium">1 simulacro corto de refuerzo</span>
                  </li>
                )}
                <li className="flex items-center gap-3 text-mq-muted">
                  <Circle size={18} className="text-white/10" />
                  <span className="text-sm">Revisión de errores y explicaciones</span>
                </li>
              </>
            )}
          </ul>
        </div>

        <div className="space-y-4">
          <div className={`rounded-2xl p-4 text-sm font-medium ${hasTrainingToday ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-mq-accent/10 text-mq-accent border border-mq-accent/20"}`}>
            {hasTrainingToday ? "¡Excelente! Has cumplido con los objetivos de hoy." : "Aún no has empezado tu entrenamiento diario."}
          </div>
          
          <Link
            href="/demo"
            className="group flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-mq-accent px-8 text-sm font-bold text-mq-accent-foreground transition-all hover:scale-[1.02] active:scale-95"
          >
            <span>{hasTrainingToday ? "Seguir entrenando" : "Comenzar ahora"}</span>
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
      
      <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-mq-accent/5 blur-3xl" />
    </section>
  );
}
