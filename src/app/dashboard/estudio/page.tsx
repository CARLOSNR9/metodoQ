"use client";

import { StickyNote } from "lucide-react";
import { useAuthGuard } from "@/hooks/use-auth-guard";
import { StudyNotesBoard } from "@/components/dashboard/study-notes-board";

export default function EstudioPage() {
  const { user, isCheckingAuth } = useAuthGuard("/login");

  if (isCheckingAuth) {
    return (
      <div className="flex min-h-[320px] items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-mq-accent border-t-transparent" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-mq-accent">
          <StickyNote className="h-3.5 w-3.5" />
          Mi Estudio
        </p>
        <h1 className="text-2xl font-black text-white sm:text-3xl">
          Tablero de notas
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-mq-muted">
          Aquí quedan las píldoras de teoría que guardaste al entrenar. Repásalas
          cuando tengas tiempo para profundizar en los temas donde fallaste.
        </p>
      </header>

      <StudyNotesBoard userId={user.uid} />
    </div>
  );
}
