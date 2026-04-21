"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getUserWeakTopics, type WeakTopicItem } from "@/lib/results";

type WeakTopicsCardProps = {
  userId: string;
};

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
    <section className="rounded-2xl border border-rose-400/35 bg-rose-500/10 p-5 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-rose-200">
        Tus puntos debiles:
      </p>
      {isLoading ? (
        <p className="mt-2 text-sm text-rose-100/90">Analizando respuestas...</p>
      ) : topics.length === 0 ? (
        <p className="mt-2 text-sm text-rose-100/90">
          Aun no hay datos suficientes. Responde mas preguntas para detectar temas a reforzar.
        </p>
      ) : (
        <ul className="mt-4 space-y-3">
          {topics.map((item) => (
            <li
              key={item.topic}
              className="flex flex-col gap-3 rounded-xl border border-rose-300/25 bg-black/10 p-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <p className="text-sm font-semibold text-white">
                {item.topic} <span className="text-rose-200">({item.wrongCount})</span>
              </p>
              <Link
                href={`/demo?topic=${encodeURIComponent(item.topic)}`}
                className="inline-flex min-h-10 items-center justify-center rounded-lg bg-mq-accent px-4 text-sm font-semibold text-mq-accent-foreground transition duration-150 hover:brightness-110"
              >
                Practicar este tema
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
