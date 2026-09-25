"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, ChevronRight, Shuffle, Stethoscope } from "lucide-react";
import {
  MIR_MIXED_SPECIALTY,
  MIR_PRACTICE_BLOCK_SIZE,
  formatSpecialtyLabel,
  getMirSpecialties,
  pickMirPracticeQuestions,
} from "@/lib/training/mir-practice";
import { markMirSpecialtyPracticed } from "@/lib/training/mir-study-plan";
import type { TrainingQuestion } from "@/lib/questions/types";
import { MirPracticeSession } from "./mir-practice-session";

const SPECIALTIES = getMirSpecialties();

type ActiveSession = {
  specialtyKey: string;
  questions: TrainingQuestion[];
  /** Cambia en cada bloque para reiniciar la sesión. */
  runId: number;
};

function isKnownSpecialty(specialtyKey: string): boolean {
  return (
    specialtyKey === MIR_MIXED_SPECIALTY ||
    SPECIALTIES.some((specialty) => specialty.key === specialtyKey)
  );
}

function getSpecialtyTitle(specialtyKey: string): string {
  return specialtyKey === MIR_MIXED_SPECIALTY ? "Mixto" : formatSpecialtyLabel(specialtyKey);
}

/**
 * Práctica corta del módulo MIR: el estudiante elige una especialidad (o
 * mixto) y responde un bloque de hasta 10 preguntas con corrección
 * inmediata. Las falladas pasan al repaso de errores. Con
 * `?especialidad=<clave>` (p. ej. desde el mapa de dominio) arranca
 * directamente un bloque de esa especialidad.
 */
export function MirPracticeView({ userId }: { userId: string }) {
  const searchParams = useSearchParams();
  const [session, setSession] = useState<ActiveSession | null>(() => {
    const requested = searchParams.get("especialidad");
    if (!requested || !isKnownSpecialty(requested)) return null;
    return { specialtyKey: requested, questions: pickMirPracticeQuestions(requested), runId: 1 };
  });

  function startBlock(specialtyKey: string) {
    setSession((previous) => ({
      specialtyKey,
      questions: pickMirPracticeQuestions(specialtyKey),
      runId: (previous?.runId ?? 0) + 1,
    }));
    window.scrollTo({ top: 0 });
  }

  if (session) {
    return (
      <div>
        <button
          type="button"
          onClick={() => setSession(null)}
          className="mx-auto mb-6 flex w-full max-w-3xl items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Cambiar especialidad
        </button>
        <MirPracticeSession
          key={session.runId}
          userId={userId}
          questions={session.questions}
          eyebrow={`Práctica · ${getSpecialtyTitle(session.specialtyKey)}`}
          source="practice"
          saveExtra={() => markMirSpecialtyPracticed(userId, session.specialtyKey)}
          onRestart={() => startBlock(session.specialtyKey)}
          restartLabel="Otro bloque"
        />
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-3xl">
      <Link
        href="/dashboard/mir"
        className="mb-6 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Volver al panel MIR
      </Link>

      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-9">
        <p className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.22em] text-mq-premium-gold">
          <Stethoscope className="h-3.5 w-3.5" />
          Práctica por especialidad
        </p>
        <h1 className="mt-2 text-2xl font-black text-white sm:text-3xl">¿Qué estudiamos hoy?</h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          Bloques de hasta {MIR_PRACTICE_BLOCK_SIZE} preguntas con la explicación justo después de
          cada respuesta. Las que falles se guardan en tu repaso de errores para volver a verlas.
        </p>

        <button
          type="button"
          onClick={() => startBlock(MIR_MIXED_SPECIALTY)}
          className="mt-6 flex w-full items-center justify-between gap-3 rounded-2xl bg-mq-premium-gold px-5 py-4 text-left text-[#0A1F44] transition hover:brightness-110"
        >
          <span className="flex items-center gap-3">
            <Shuffle className="h-5 w-5" />
            <span>
              <span className="block text-sm font-black">Mixto</span>
              <span className="block text-xs font-semibold opacity-80">
                Preguntas al azar de todas las especialidades
              </span>
            </span>
          </span>
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {SPECIALTIES.map((specialty) => (
            <button
              key={specialty.key}
              type="button"
              onClick={() => startBlock(specialty.key)}
              className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left transition hover:border-mq-premium-gold/40 hover:bg-white/[0.06]"
            >
              <span className="text-sm font-bold text-white">{specialty.label}</span>
              <span className="shrink-0 rounded-full bg-white/[0.06] px-2.5 py-0.5 text-[11px] font-bold text-slate-400">
                {specialty.questionCount} {specialty.questionCount === 1 ? "pregunta" : "preguntas"}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
