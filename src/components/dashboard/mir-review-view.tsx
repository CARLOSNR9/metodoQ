"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarClock, Layers, Trophy } from "lucide-react";
import { getMirQuestionsByIds } from "@/lib/training/mir-practice";
import {
  MIR_REVIEW_INTERVAL_DAYS,
  getDueMirReviewIds,
  getMirReviewDeck,
  type MirReviewDeck,
} from "@/lib/training/mir-review";
import type { TrainingQuestion } from "@/lib/questions/types";
import { MirDoctorMascot } from "./mir-doctor-mascot";
import { MirPracticeSession } from "./mir-practice-session";

/** Máximo de preguntas por sesión de repaso, para que sea abarcable en un rato. */
const MAX_REVIEW_SESSION = 20;

function formatDueDate(dateKey: string): string {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

/**
 * Repaso de errores MIR: muestra las preguntas falladas que tocan hoy
 * según la repetición espaciada (ver src/lib/training/mir-review.ts).
 */
export function MirReviewView({ userId }: { userId: string }) {
  const [deck, setDeck] = useState<MirReviewDeck | null>(null);
  const [sessionQuestions, setSessionQuestions] = useState<TrainingQuestion[] | null>(null);

  const loadDeck = useCallback(() => {
    getMirReviewDeck(userId).then(setDeck);
  }, [userId]);

  useEffect(() => {
    loadDeck();
  }, [loadDeck]);

  if (sessionQuestions) {
    return (
      <MirPracticeSession
        userId={userId}
        questions={sessionQuestions}
        eyebrow="Repaso de errores"
        source="review"
        onRestart={() => setSessionQuestions(null)}
        restartLabel="Volver al repaso"
        onSaved={loadDeck}
      />
    );
  }

  if (!deck) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-mq-premium-gold border-t-transparent" />
      </div>
    );
  }

  const dueIds = getDueMirReviewIds(deck);
  const deckSize = Object.keys(deck.entries).length;
  const nextDueDate = Object.values(deck.entries)
    .map((entry) => entry.dueDate)
    .sort()[0];

  let mascotMessage: string;
  if (dueIds.length > 0) {
    mascotMessage = `Hoy te tocan ${dueIds.length} ${dueIds.length === 1 ? "pregunta" : "preguntas"} que fallaste. ¡Vamos a convertirlas en aciertos!`;
  } else if (deckSize > 0 && nextDueDate) {
    mascotMessage = `¡Todo al día! Tu próximo repaso es el ${formatDueDate(nextDueDate)}.`;
  } else {
    mascotMessage =
      "Aún no tienes errores guardados. Cuando falles una pregunta en la práctica o en el simulacro, aparecerá aquí.";
  }

  function startReview() {
    setSessionQuestions(getMirQuestionsByIds(dueIds.slice(0, MAX_REVIEW_SESSION)));
    window.scrollTo({ top: 0 });
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
          <Layers className="h-3.5 w-3.5" />
          Repaso de errores
        </p>

        <div className="mt-4 flex items-end gap-3">
          <MirDoctorMascot className="h-32 w-24 shrink-0" />
          <div className="rounded-2xl rounded-bl-none border border-white/10 bg-white/[0.06] px-4 py-3">
            <p className="text-sm leading-relaxed text-slate-200">{mascotMessage}</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          <div className="rounded-xl border border-mq-premium-gold/25 bg-mq-premium-gold/[0.06] p-4 text-center">
            <p className="text-2xl font-black text-mq-premium-gold">{dueIds.length}</p>
            <p className="text-[11px] font-semibold text-slate-400">para hoy</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
            <p className="text-2xl font-black text-white">{deckSize}</p>
            <p className="text-[11px] font-semibold text-slate-400">en tu mazo</p>
          </div>
          <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] p-4 text-center">
            <p className="flex items-center justify-center gap-1.5 text-2xl font-black text-emerald-400">
              <Trophy className="h-4 w-4" />
              {deck.masteredCount}
            </p>
            <p className="text-[11px] font-semibold text-slate-400">dominadas</p>
          </div>
        </div>

        {dueIds.length > 0 ? (
          <button
            type="button"
            onClick={startReview}
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-mq-premium-gold px-6 text-sm font-black text-[#0A1F44] transition hover:brightness-110"
          >
            Repasar {Math.min(dueIds.length, MAX_REVIEW_SESSION)}{" "}
            {Math.min(dueIds.length, MAX_REVIEW_SESSION) === 1 ? "pregunta" : "preguntas"}
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <Link
            href="/dashboard/mir/practica"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/20 px-6 text-sm font-bold text-white transition hover:border-white/40"
          >
            Practicar por especialidad
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}

        <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4">
          <CalendarClock className="mt-0.5 h-4 w-4 shrink-0 text-mq-premium-gold" />
          <p className="text-xs leading-relaxed text-slate-400">
            Cada pregunta fallada vuelve a los {MIR_REVIEW_INTERVAL_DAYS.join(", ").replace(/, (\d+)$/, " y $1")}{" "}
            días. Si la aciertas en el repaso, sube al siguiente intervalo; tras acertarla{" "}
            {MIR_REVIEW_INTERVAL_DAYS.length} veces seguidas queda dominada. Si la fallas, vuelve a
            empezar.
          </p>
        </div>
      </div>
    </div>
  );
}
