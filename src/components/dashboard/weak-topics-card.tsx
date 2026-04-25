"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getUserWeakTopics, type WeakTopicItem } from "@/lib/results";

type WeakTopicsCardProps = {
  userId: string;
};

import { AlertTriangle, Microscope } from "lucide-react";

export function WeakTopicsCard({ userId }: WeakTopicsCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [topics, setTopics] = useState<WeakTopicItem[]>([]);

  useEffect(() => {
    let isMounted = true;

    async function loadWeakTopics() {
      setIsLoading(true);

      try {
        const items = await getUserWeakTopics(userId);
        if (!isMounted) return;
        setTopics(items);
      } catch (error) {
        console.error("No se pudieron cargar los puntos debiles.", error);
        if (!isMounted) return;
        setTopics([]);
      } finally {
        if (!isMounted) return;
        setIsLoading(false);
      }
    }

    void loadWeakTopics();

    return () => {
      isMounted = false;
    };
  }, [userId]);

  return (
    <section className="mq-glass overflow-hidden rounded-3xl p-6 transition-all hover:border-rose-500/50">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/10 text-rose-400">
          <AlertTriangle size={20} />
        </div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-mq-muted">Áreas de Mejora</p>
      </div>

      {isLoading ? (
        <div className="mt-8 flex items-center gap-3">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-rose-400 border-t-transparent" />
          <p className="text-sm text-rose-200">Sincronizando análisis...</p>
        </div>
      ) : topics.length === 0 ? (
        <div className="mt-8 flex flex-col items-center gap-4 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-500/5">
            <Microscope size={32} className="text-rose-500/20" />
          </div>
          <p className="max-w-xs text-sm text-mq-muted">
            Aún no tenemos datos de tus fallos. Sigue entrenando para detectar tus debilidades.
          </p>
        </div>
      ) : (
        <ul className="mt-6 space-y-3">
          {topics.map((item) => (
            <li
              key={item.topic}
              className="group flex flex-col gap-4 rounded-2xl bg-white/[0.03] p-4 transition-all hover:bg-white/[0.06] sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="space-y-1">
                <p className="text-sm font-bold text-white">
                  {item.topic}
                </p>
                <p className="text-[10px] text-rose-400 font-medium">
                  {item.wrongCount} errores detectados
                </p>
              </div>
              <Link
                href={`/demo?topic=${encodeURIComponent(item.topic)}`}
                className="inline-flex h-9 items-center justify-center rounded-lg bg-white/10 px-4 text-xs font-bold text-white transition-all hover:bg-mq-accent hover:text-mq-accent-foreground"
              >
                Reforzar
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
