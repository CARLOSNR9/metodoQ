"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, ChevronRight, GalleryHorizontalEnd, Loader2, RotateCcw, Shuffle } from "lucide-react";
import {
  MIR_FLASHCARDS_TO_REVIEW,
  MIR_FLASHCARD_DECK_SIZE,
  buildMirFlashcardRound,
  getMirFlashcardPool,
  getMirFlashcardStatuses,
  saveMirFlashcardStatuses,
  type MirFlashcard,
  type MirFlashcardStatus,
  type MirFlashcardStatuses,
} from "@/lib/training/mir-flashcards";
import { MIR_MIXED_SPECIALTY, formatSpecialtyLabel, getMirSpecialties } from "@/lib/training/mir-practice";
import { registerMirTrainingDay } from "@/lib/training/mir-streak";
import { MirDoctorMascot } from "./mir-doctor-mascot";

const SPECIALTIES = getMirSpecialties();
const SAVE_TIMEOUT_MS = 8000;

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) => setTimeout(() => reject(new Error("timeout")), ms)),
  ]);
}

function getDeckTitle(deckKey: string): string {
  if (deckKey === MIR_FLASHCARDS_TO_REVIEW) return "Para repasar";
  if (deckKey === MIR_MIXED_SPECIALTY) return "Mixto";
  return formatSpecialtyLabel(deckKey);
}

type Round = {
  deckKey: string;
  queue: MirFlashcard[];
  /** Tamaño de la ronda antes de devolver tarjetas al final. */
  originalLength: number;
  index: number;
  isFlipped: boolean;
  /** Última autoevaluación de cada tarjeta en esta ronda. */
  ratings: Record<string, MirFlashcardStatus>;
  /** Tarjetas ya devueltas al final de la ronda (solo una vez cada una). */
  requeued: string[];
};

type RoundResult = { deckKey: string; known: number; review: number };

/**
 * Tarjetas de repaso rápido MIR (/dashboard/mir/tarjetas): tema en el
 * anverso, puntos clave en el reverso y autoevaluación. Las marcadas como
 * "Repasar" vuelven una vez al final de la ronda y quedan en el mazo
 * "Para repasar".
 */
export function MirFlashcardsView({ userId }: { userId: string }) {
  const [statuses, setStatuses] = useState<MirFlashcardStatuses | null>(null);
  const [round, setRound] = useState<Round | null>(null);
  const [result, setResult] = useState<RoundResult | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    let cancelled = false;
    getMirFlashcardStatuses(userId).then((loaded) => {
      if (!cancelled) setStatuses(loaded);
    });
    return () => {
      cancelled = true;
    };
  }, [userId]);

  function startRound(deckKey: string) {
    if (!statuses) return;
    setResult(null);
    const queue = buildMirFlashcardRound(deckKey, statuses);
    setRound({
      deckKey,
      queue,
      originalLength: queue.length,
      index: 0,
      isFlipped: false,
      ratings: {},
      requeued: [],
    });
    window.scrollTo({ top: 0 });
  }

  const finishRound = useCallback(
    async (finished: Round) => {
      setIsSaving(true);
      const results = await Promise.allSettled([
        withTimeout(saveMirFlashcardStatuses(userId, finished.ratings), SAVE_TIMEOUT_MS),
        withTimeout(registerMirTrainingDay(userId), SAVE_TIMEOUT_MS),
      ]);
      for (const settled of results) {
        if (settled.status === "rejected") {
          console.error("No se pudo guardar la ronda de tarjetas MIR.", settled.reason);
        }
      }
      const updatedAt = new Date().toISOString();
      setStatuses((previous) => ({
        ...previous,
        ...Object.fromEntries(
          Object.entries(finished.ratings).map(([cardId, status]) => [cardId, { status, updatedAt }]),
        ),
      }));
      const ratings = Object.values(finished.ratings);
      setResult({
        deckKey: finished.deckKey,
        known: ratings.filter((status) => status === "known").length,
        review: ratings.filter((status) => status === "review").length,
      });
      setRound(null);
      setIsSaving(false);
    },
    [userId],
  );

  const flip = useCallback(() => {
    setRound((current) => (current && !current.isFlipped ? { ...current, isFlipped: true } : current));
  }, []);

  const rate = useCallback(
    (status: MirFlashcardStatus) => {
      if (!round || !round.isFlipped || isSaving) return;
      const card = round.queue[round.index];
      const shouldRequeue = status === "review" && !round.requeued.includes(card.id);
      const next: Round = {
        ...round,
        queue: shouldRequeue ? [...round.queue, card] : round.queue,
        requeued: shouldRequeue ? [...round.requeued, card.id] : round.requeued,
        ratings: { ...round.ratings, [card.id]: status },
        index: round.index + 1,
        isFlipped: false,
      };
      if (next.index >= next.queue.length) {
        void finishRound(next);
      } else {
        setRound(next);
      }
    },
    [round, isSaving, finishRound],
  );

  useEffect(() => {
    if (!round) return;
    function handleKey(event: KeyboardEvent) {
      // Botones y enlaces con foco responden solos a Enter/espacio.
      if (
        event.target instanceof HTMLElement &&
        ["INPUT", "TEXTAREA", "BUTTON", "A"].includes(event.target.tagName)
      ) {
        return;
      }
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        flip();
      } else if (event.key === "1") {
        rate("review");
      } else if (event.key === "2") {
        rate("known");
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [round, flip, rate]);

  if (!statuses) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-mq-premium-gold border-t-transparent" />
      </div>
    );
  }

  const toReviewCount = getMirFlashcardPool(MIR_FLASHCARDS_TO_REVIEW, statuses).length;

  if (round) {
    const card = round.queue[round.index];
    const isRepeat = round.index >= round.originalLength;
    return (
      <div className="mx-auto w-full max-w-2xl">
        <button
          type="button"
          onClick={() => setRound(null)}
          className="mb-6 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Salir de la ronda
        </button>

        <div className="mb-3 flex items-center justify-between text-xs font-bold text-slate-300">
          <span>
            {getDeckTitle(round.deckKey)} · Tarjeta {round.index + 1} de {round.queue.length}
          </span>
          {isRepeat ? <span className="text-amber-300">Otra vez</span> : null}
        </div>
        <div className="mb-5 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
          <div
            className="h-full rounded-full bg-mq-premium-gold transition-all"
            style={{ width: `${(round.index / round.queue.length) * 100}%` }}
          />
        </div>

        <div
          role="button"
          tabIndex={0}
          onClick={flip}
          aria-label={round.isFlipped ? "Tarjeta girada: puntos clave" : "Girar la tarjeta"}
          className="block w-full cursor-pointer text-left [perspective:1200px]"
        >
          <div
            className={`grid transition-transform duration-500 [transform-style:preserve-3d] motion-reduce:transition-none ${
              round.isFlipped ? "[transform:rotateY(180deg)]" : ""
            }`}
          >
            <div className="flex min-h-[320px] flex-col justify-between rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-7 [backface-visibility:hidden] [grid-area:1/1]">
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-mq-premium-gold">
                {card.examArea}
              </p>
              <p className="text-balance text-xl font-black leading-snug text-white sm:text-2xl">{card.topic}</p>
              <p className="text-xs text-slate-400">
                ¿Qué es lo clave de este tema? Piénsalo y toca la tarjeta para girarla.
              </p>
            </div>
            <div className="flex min-h-[320px] flex-col rounded-[2rem] border border-mq-premium-gold/30 bg-[#11285a] p-7 [backface-visibility:hidden] [grid-area:1/1] [transform:rotateY(180deg)]">
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-mq-premium-gold">
                Puntos clave
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-100">
                {card.keyPoints.map((point) => (
                  <li key={point} className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mq-premium-gold" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {round.isFlipped ? (
          <div className="mt-5 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => rate("review")}
              disabled={isSaving}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-rose-400/40 bg-rose-400/10 px-4 text-sm font-black text-rose-200 transition hover:bg-rose-400/20 disabled:opacity-60"
            >
              <RotateCcw className="h-4 w-4" />
              Repasar
            </button>
            <button
              type="button"
              onClick={() => rate("known")}
              disabled={isSaving}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-emerald-400 px-4 text-sm font-black text-[#0A1F44] transition hover:brightness-110 disabled:opacity-60"
            >
              {isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4" />}
              Lo sabía
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={flip}
            className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-mq-premium-gold px-6 text-sm font-black text-[#0A1F44] transition hover:brightness-110"
          >
            Girar tarjeta
          </button>
        )}
        <p className="mt-3 hidden text-center text-[11px] text-slate-500 sm:block">
          Teclado: espacio para girar · 1 repasar · 2 lo sabía
        </p>
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

      {result ? (
        <div className="mb-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <div className="flex items-end gap-3">
            <MirDoctorMascot className="h-32 w-24 shrink-0" />
            <div className="rounded-2xl rounded-bl-none border border-white/10 bg-white/[0.06] px-4 py-3">
              <p className="text-xs font-black text-mq-premium-gold">Ronda terminada · {getDeckTitle(result.deckKey)}</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-200">
                {result.review === 0
                  ? `¡Te sabías las ${result.known}! Cuando quieras, otra ronda.`
                  : `Te sabías ${result.known} y marcaste ${result.review} para repasar. Las tienes guardadas en "Para repasar".`}
              </p>
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => startRound(result.deckKey)}
              className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-mq-premium-gold px-5 text-sm font-black text-[#0A1F44] transition hover:brightness-110"
            >
              <RotateCcw className="h-4 w-4" />
              Otra ronda
            </button>
            {toReviewCount > 0 && result.deckKey !== MIR_FLASHCARDS_TO_REVIEW ? (
              <button
                type="button"
                onClick={() => startRound(MIR_FLASHCARDS_TO_REVIEW)}
                className="inline-flex min-h-11 flex-1 items-center justify-center rounded-xl border border-white/20 px-5 text-sm font-bold text-white transition hover:border-white/40"
              >
                Repasar las marcadas ({toReviewCount})
              </button>
            ) : null}
          </div>
        </div>
      ) : null}

      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-9">
        <p className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.22em] text-mq-premium-gold">
          <GalleryHorizontalEnd className="h-3.5 w-3.5" />
          Tarjetas de repaso rápido
        </p>
        <h1 className="mt-2 text-2xl font-black text-white sm:text-3xl">Repasa lo clave en minutos</h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          Rondas de {MIR_FLASHCARD_DECK_SIZE} tarjetas: lee el tema, recuerda lo esencial y gira la
          tarjeta para ver los puntos clave. Ideal para el móvil y los ratos libres.
        </p>

        {toReviewCount > 0 ? (
          <button
            type="button"
            onClick={() => startRound(MIR_FLASHCARDS_TO_REVIEW)}
            className="mt-6 flex w-full items-center justify-between gap-3 rounded-2xl border border-rose-400/40 bg-rose-400/10 px-5 py-4 text-left transition hover:bg-rose-400/15"
          >
            <span className="flex items-center gap-3">
              <RotateCcw className="h-5 w-5 text-rose-300" />
              <span>
                <span className="block text-sm font-black text-white">Para repasar</span>
                <span className="block text-xs font-semibold text-slate-300">
                  {toReviewCount} {toReviewCount === 1 ? "tarjeta marcada" : "tarjetas marcadas"}
                </span>
              </span>
            </span>
            <ChevronRight className="h-5 w-5 text-slate-300" />
          </button>
        ) : null}

        <button
          type="button"
          onClick={() => startRound(MIR_MIXED_SPECIALTY)}
          className="mt-4 flex w-full items-center justify-between gap-3 rounded-2xl bg-mq-premium-gold px-5 py-4 text-left text-[#0A1F44] transition hover:brightness-110"
        >
          <span className="flex items-center gap-3">
            <Shuffle className="h-5 w-5" />
            <span>
              <span className="block text-sm font-black">Mixto</span>
              <span className="block text-xs font-semibold opacity-80">Tarjetas de todas las especialidades</span>
            </span>
          </span>
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {SPECIALTIES.map((specialty) => {
            const pool = getMirFlashcardPool(specialty.key, statuses);
            const knownCount = pool.filter((card) => statuses[card.id]?.status === "known").length;
            return (
              <button
                key={specialty.key}
                type="button"
                onClick={() => startRound(specialty.key)}
                className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left transition hover:border-mq-premium-gold/40 hover:bg-white/[0.06]"
              >
                <span className="text-sm font-bold text-white">{specialty.label}</span>
                <span className="shrink-0 rounded-full bg-white/[0.06] px-2.5 py-0.5 text-[11px] font-bold text-slate-400">
                  {knownCount}/{pool.length} sabidas
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
