"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Flame, Target } from "lucide-react";
import {
  MIR_DAILY_CHALLENGE_SIZE,
  completeMirDailyChallenge,
  getOrCreateMirDailyChallenge,
  type MirDailyChallenge,
} from "@/lib/training/mir-daily-challenge";
import { formatSpecialtyLabel } from "@/lib/training/mir-practice";
import type { TrainingQuestion } from "@/lib/questions/types";
import { MirDoctorMascot } from "./mir-doctor-mascot";
import { MirPracticeSession } from "./mir-practice-session";

type LoadedChallenge = {
  challenge: MirDailyChallenge;
  questions: TrainingQuestion[];
  completedCount: number;
};

function getChallengeInvite(challenge: MirDailyChallenge, questionCount: number): string {
  if (!challenge.focusSpecialty) {
    return `Hoy te reto con ${questionCount} preguntas sorpresa del MIR. ¿Aceptas?`;
  }
  return `Hoy te reto con ${questionCount} preguntas: 2 de ${formatSpecialtyLabel(challenge.focusSpecialty)}, tu especialidad foco, y el resto sorpresa. ¿Aceptas?`;
}

function getChallengeSummary(correct: number, total: number): string {
  if (correct === total) return `¡Reto perfecto! ${correct} de ${total}. Mañana te espero con otro.`;
  if (correct / total >= 0.6) {
    return `¡Reto superado con ${correct} de ${total}! Las que fallaste ya están en tu repaso. Nos vemos mañana.`;
  }
  return `Reto completado: ${correct} de ${total}. Las falladas ya están en tu repaso; mañana hay revancha.`;
}

/**
 * Reto diario de la doctora MIR (/dashboard/mir/reto): 5 preguntas fijas
 * por día. Una vez completado, muestra el resultado hasta el día siguiente.
 */
export function MirDailyChallengeView({ userId }: { userId: string }) {
  const router = useRouter();
  const [loaded, setLoaded] = useState<LoadedChallenge | null>(null);
  const [loadFailed, setLoadFailed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let cancelled = false;
    getOrCreateMirDailyChallenge(userId)
      .then((result) => {
        if (!cancelled) setLoaded(result);
      })
      .catch((error) => {
        console.error("No se pudo cargar el reto diario MIR.", error);
        if (!cancelled) setLoadFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, [userId]);

  if (loadFailed) {
    return (
      <div className="mx-auto max-w-xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center">
        <p className="text-sm text-slate-300">
          No pudimos cargar tu reto de hoy. Revisa tu conexión y vuelve a intentarlo.
        </p>
        <Link
          href="/dashboard/mir"
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-xl border border-white/20 px-6 text-sm font-bold text-white"
        >
          Volver al panel MIR
        </Link>
      </div>
    );
  }

  if (!loaded) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-mq-premium-gold border-t-transparent" />
      </div>
    );
  }

  const { challenge, questions, completedCount } = loaded;

  if (isPlaying) {
    return (
      <MirPracticeSession
        userId={userId}
        questions={questions}
        eyebrow="Reto del día"
        source="practice"
        saveExtra={({ correct, total }) => completeMirDailyChallenge(userId, challenge, correct, total)}
        summaryMessage={getChallengeSummary}
        onRestart={() => router.push("/dashboard/mir/practica")}
        restartLabel="Seguir practicando"
      />
    );
  }

  const isCompleted = Boolean(challenge.completedAt);

  return (
    <div className="mx-auto w-full max-w-2xl">
      <Link
        href="/dashboard/mir"
        className="mb-6 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Volver al panel MIR
      </Link>

      <div className="rounded-[2rem] border border-mq-premium-gold/25 bg-gradient-to-br from-mq-premium-gold/[0.08] to-white/[0.02] p-6 sm:p-9">
        <p className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.22em] text-mq-premium-gold">
          <Target className="h-3.5 w-3.5" />
          Reto del día
        </p>
        <h1 className="mt-2 text-2xl font-black text-white sm:text-3xl">
          {isCompleted ? "¡Reto de hoy completado!" : "La doctora te reta"}
        </h1>

        <div className="mt-6 flex items-end gap-3">
          <MirDoctorMascot className="h-36 w-28 shrink-0" />
          <div className="rounded-2xl rounded-bl-none border border-white/10 bg-white/[0.06] px-4 py-3">
            <p className="text-sm leading-relaxed text-slate-200">
              {isCompleted
                ? getChallengeSummary(challenge.correct ?? 0, challenge.total ?? questions.length)
                : getChallengeInvite(challenge, questions.length)}
            </p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
            <p className="text-2xl font-black text-white">
              {isCompleted ? `${challenge.correct ?? 0}/${challenge.total ?? questions.length}` : questions.length}
            </p>
            <p className="text-[11px] font-semibold text-slate-400">
              {isCompleted ? "aciertos hoy" : "preguntas"}
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
            <p className="flex items-center justify-center gap-1.5 text-2xl font-black text-white">
              <Flame className="h-5 w-5 text-mq-premium-gold" />
              {completedCount}
            </p>
            <p className="text-[11px] font-semibold text-slate-400">retos completados</p>
          </div>
        </div>

        {isCompleted ? (
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/dashboard/mir/practica"
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-mq-premium-gold px-6 text-sm font-black text-[#0A1F44] transition hover:brightness-110"
            >
              Seguir practicando
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/dashboard/mir/repaso"
              className="inline-flex min-h-12 flex-1 items-center justify-center rounded-xl border border-white/20 px-6 text-sm font-bold text-white transition hover:border-white/40"
            >
              Ir al repaso de errores
            </Link>
          </div>
        ) : (
          <>
            <button
              type="button"
              onClick={() => {
                setIsPlaying(true);
                window.scrollTo({ top: 0 });
              }}
              disabled={questions.length === 0}
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-mq-premium-gold px-6 text-sm font-black text-[#0A1F44] transition hover:brightness-110 disabled:opacity-50"
            >
              Aceptar el reto
              <ArrowRight className="h-4 w-4" />
            </button>
            <p className="mt-3 text-center text-[11px] text-slate-500">
              {MIR_DAILY_CHALLENGE_SIZE} preguntas con corrección al instante · cuenta para tu racha
            </p>
          </>
        )}
      </div>
    </div>
  );
}
