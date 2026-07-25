"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, StickyNote } from "lucide-react";
import { useStudyNotesCount } from "@/hooks/use-study-notes-count";
import { subscribeStudyNotes } from "@/lib/study/saved-notes";
import { useEffect, useState } from "react";

type StudyBoardPreviewCardProps = {
  userId: string;
};

export function StudyBoardPreviewCard({ userId }: StudyBoardPreviewCardProps) {
  const count = useStudyNotesCount(userId);
  const [latestTopic, setLatestTopic] = useState<string | null>(null);

  useEffect(() => {
    return subscribeStudyNotes(
      userId,
      (notes) => setLatestTopic(notes[0]?.topic ?? null),
      () => setLatestTopic(null),
    );
  }, [userId]);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="rounded-[2rem] border border-slate-200 bg-white/[0.03] p-6 shadow-xl"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mq-accent/15 text-mq-accent">
          <StickyNote size={22} />
        </div>
        {count > 0 ? (
          <span className="rounded-full bg-mq-accent/15 px-3 py-1 text-xs font-black text-mq-accent">
            {count} {count === 1 ? "nota" : "notas"}
          </span>
        ) : null}
      </div>

      <div className="mt-5 space-y-2">
        <h3 className="text-lg font-black text-slate-900">Mi Estudio</h3>
        <p className="text-sm leading-relaxed text-slate-500">
          {count > 0 && latestTopic
            ? `Última guardada: ${latestTopic}. Repasa tus píldoras de teoría cuando tengas tiempo.`
            : "Guarda píldoras de teoría al fallar preguntas en entrenamiento y repásalas aquí."}
        </p>
      </div>

      <Link
        href="/dashboard/estudio"
        className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-mq-accent/25 bg-mq-accent/10 text-sm font-bold text-mq-accent transition hover:bg-mq-accent/15"
      >
        <BookOpen className="h-4 w-4" />
        {count > 0 ? "Abrir tablero" : "Ir a Estudio"}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </motion.div>
  );
}
