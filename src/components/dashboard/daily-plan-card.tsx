"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getUserDemoResults } from "@/lib/results";
import { Calendar, ArrowRight } from "lucide-react";

type DailyPlanCardProps = {
  userId: string;
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

export function DailyPlanCard({ userId }: DailyPlanCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasTrainingToday, setHasTrainingToday] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadTodayProgress() {
      setIsLoading(true);

      try {
        const results = await getUserDemoResults(userId);
        if (!isMounted) return;

        const hasTodayAttempt = results.some(
          (result) => result.fechaIso && isToday(result.fechaIso),
        );
        setHasTrainingToday(hasTodayAttempt);
      } catch (error) {
        console.error("No se pudo cargar el progreso diario.", error);
        if (!isMounted) return;
        setHasTrainingToday(false);
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
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Plan de Entrenamiento</p>
      </div>

      <div className="mt-8 max-w-md space-y-4">
        <div className={`rounded-2xl p-4 text-sm font-medium ${hasTrainingToday ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-mq-accent/10 text-mq-accent border border-mq-accent/20"}`}>
          {isLoading
            ? "Revisando tu progreso de hoy..."
            : hasTrainingToday
              ? "¡Excelente! Ya entrenaste hoy."
              : "Aún no has empezado tu entrenamiento diario."}
        </div>

        <Link
          href="/demo"
          className="group flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-mq-accent px-8 text-sm font-bold text-mq-accent-foreground transition-all hover:scale-[1.02] active:scale-95"
        >
          <span>{hasTrainingToday ? "Seguir entrenando" : "Comenzar ahora"}</span>
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-mq-accent/5 blur-3xl" />
    </section>
  );
}
