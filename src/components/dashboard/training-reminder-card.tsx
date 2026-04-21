"use client";

import { useEffect, useMemo, useState } from "react";
import { getUserDemoResults } from "@/lib/results";

type TrainingReminderCardProps = {
  userId: string;
};

function getStartOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function getDaysSince(isoDate: string) {
  const target = new Date(isoDate);
  if (Number.isNaN(target.getTime())) {
    return null;
  }

  const todayStart = getStartOfDay(new Date()).getTime();
  const targetStart = getStartOfDay(target).getTime();
  const diffMs = todayStart - targetStart;

  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

export function TrainingReminderCard({ userId }: TrainingReminderCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [daysWithoutTraining, setDaysWithoutTraining] = useState<number | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadReminderData() {
      setIsLoading(true);

      try {
        const results = await getUserDemoResults(userId);
        if (!isMounted) return;

        const latest = results[0];
        if (!latest?.fechaIso) {
          setDaysWithoutTraining(999);
          return;
        }

        const days = getDaysSince(latest.fechaIso);
        setDaysWithoutTraining(days);
      } catch (error) {
        console.error("No se pudieron cargar los recordatorios de entrenamiento.", error);
        if (!isMounted) return;
        setDaysWithoutTraining(null);
      } finally {
        if (!isMounted) return;
        setIsLoading(false);
      }
    }

    void loadReminderData();

    return () => {
      isMounted = false;
    };
  }, [userId]);

  const reminderMessage = useMemo(() => {
    if (isLoading) {
      return "Revisando tu actividad de hoy...";
    }

    if (daysWithoutTraining === null) {
      return "No pudimos calcular tu recordatorio ahora. Intenta nuevamente.";
    }

    if (daysWithoutTraining <= 0) {
      return "Hoy ya entrenaste. Mantén el ritmo.";
    }

    if (daysWithoutTraining === 1) {
      return "Aun no has entrenado hoy";
    }

    return `Hace ${daysWithoutTraining} dias no entrenas`;
  }, [daysWithoutTraining, isLoading]);

  return (
    <section className="rounded-2xl border border-amber-400/35 bg-amber-500/10 p-5 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-200">
        Recordatorio
      </p>
      <p className="mt-2 text-base font-semibold text-white sm:text-lg">{reminderMessage}</p>
    </section>
  );
}
