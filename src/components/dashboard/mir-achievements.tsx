"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Lock, Trophy, X } from "lucide-react";
import {
  MIR_ACHIEVEMENTS,
  evaluateMirAchievements,
  type MirAchievementStatus,
  type MirAchievementsResult,
} from "@/lib/training/mir-achievements";
import { MirDoctorMascot } from "./mir-doctor-mascot";

const TOAST_DURATION_MS = 8000;

function formatUnlockDate(iso: string): string {
  return new Date(iso).toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" });
}

function useMirAchievements(userId: string): MirAchievementsResult | null {
  const [result, setResult] = useState<MirAchievementsResult | null>(null);
  useEffect(() => {
    let cancelled = false;
    evaluateMirAchievements(userId)
      .then((evaluated) => {
        if (!cancelled) setResult(evaluated);
      })
      .catch((error) => {
        console.error("No se pudieron evaluar los logros MIR.", error);
      });
    return () => {
      cancelled = true;
    };
  }, [userId]);
  return result;
}

/** Aviso de la doctora cuando se desbloquea uno o varios logros. */
export function MirAchievementToast({
  items,
  onClose,
}: {
  items: MirAchievementStatus[];
  onClose: () => void;
}) {
  useEffect(() => {
    const timer = window.setTimeout(onClose, TOAST_DURATION_MS);
    return () => window.clearTimeout(timer);
  }, [onClose]);

  const [first, ...rest] = items;
  if (!first) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-x-4 bottom-6 z-50 mx-auto max-w-sm animate-in fade-in slide-in-from-bottom-6 sm:right-6 sm:left-auto sm:mx-0"
    >
      <div className="relative flex items-end gap-3 rounded-2xl border border-mq-premium-gold/40 bg-[#11285a] p-4 shadow-2xl shadow-black/40">
        <MirDoctorMascot className="h-20 w-[3.75rem] shrink-0" />
        <div className="min-w-0 pb-1">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-mq-premium-gold">
            ¡Logro desbloqueado!
          </p>
          <p className="mt-1 text-sm font-black text-white">
            <span aria-hidden className="mr-1">
              {first.emoji}
            </span>
            {first.title}
          </p>
          <p className="text-xs text-slate-300">
            {rest.length > 0
              ? `Y ${rest.length} ${rest.length === 1 ? "logro más" : "logros más"}. ¡Qué orgullo!`
              : first.description}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar aviso"
          className="absolute right-2 top-2 rounded-lg p-1 text-slate-400 hover:bg-white/10 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function ProgressBar({ item }: { item: MirAchievementStatus }) {
  const percent = (item.progress / item.target) * 100;
  return (
    <div
      className="h-1.5 overflow-hidden rounded-full bg-white/[0.08]"
      role="meter"
      aria-label={`Progreso de ${item.title}`}
      aria-valuemin={0}
      aria-valuemax={item.target}
      aria-valuenow={Math.floor(item.progress)}
    >
      <div className="h-full rounded-full bg-mq-premium-gold" style={{ width: `${percent}%` }} />
    </div>
  );
}

function formatProgress(item: MirAchievementStatus): string {
  return `${Math.floor(item.progress)}/${item.target}`;
}

/** El logro pendiente más cercano a conseguirse (mayor % de progreso). */
function getNextAchievement(achievements: MirAchievementStatus[]): MirAchievementStatus | null {
  return (
    achievements
      .filter((item) => !item.unlocked)
      .sort((a, b) => b.progress / b.target - a.progress / a.target)[0] ?? null
  );
}

/** Resumen de logros para el panel MIR; muestra el aviso si hay logros nuevos. */
export function MirAchievementsCard({ userId }: { userId: string }) {
  const result = useMirAchievements(userId);
  const [isToastDismissed, setIsToastDismissed] = useState(false);
  const closeToast = useCallback(() => setIsToastDismissed(true), []);
  const toastItems = !isToastDismissed && result?.newlyUnlocked.length ? result.newlyUnlocked : null;

  if (!result) {
    return <div className="h-40 animate-pulse rounded-2xl border border-white/10 bg-white/[0.03]" />;
  }

  const unlocked = result.achievements
    .filter((item) => item.unlocked)
    .sort((a, b) => (b.unlockedAt ?? "").localeCompare(a.unlockedAt ?? ""));
  const next = getNextAchievement(result.achievements);

  return (
    <>
      <div className="grid gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6 lg:grid-cols-[1fr_1.3fr] lg:items-center">
        <div className="flex items-center gap-4">
          <MirDoctorMascot className="h-24 w-[4.5rem] shrink-0" />
          <div>
            <p className="text-3xl font-black text-white">
              {unlocked.length}
              <span className="text-base font-bold text-slate-400"> / {MIR_ACHIEVEMENTS.length}</span>
            </p>
            <p className="text-xs font-semibold text-slate-400">logros conseguidos</p>
            {unlocked.length > 0 ? (
              <p className="mt-2 text-2xl" aria-label={`Últimos logros: ${unlocked.slice(0, 5).map((item) => item.title).join(", ")}`}>
                {unlocked.slice(0, 5).map((item) => (
                  <span key={item.id} title={item.title} className="mr-1">
                    {item.emoji}
                  </span>
                ))}
              </p>
            ) : null}
          </div>
        </div>

        <div>
          {next ? (
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">Siguiente logro</p>
              <p className="mt-1 text-sm font-black text-white">
                <span aria-hidden className="mr-1">
                  {next.emoji}
                </span>
                {next.title}
              </p>
              <p className="text-xs text-slate-400">{next.description}</p>
              <div className="mt-3 flex items-center gap-3">
                <div className="flex-1">
                  <ProgressBar item={next} />
                </div>
                <span className="text-xs font-bold text-slate-300">{formatProgress(next)}</span>
              </div>
            </div>
          ) : (
            <p className="text-sm font-semibold text-white">¡Has conseguido todos los logros! 🏆</p>
          )}
          <Link
            href="/dashboard/mir/logros"
            className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-mq-premium-gold hover:underline"
          >
            Ver todos los logros
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
      {toastItems ? <MirAchievementToast items={toastItems} onClose={closeToast} /> : null}
    </>
  );
}

export function MirAchievementBadge({ item }: { item: MirAchievementStatus }) {
  return (
    <article
      className={`flex flex-col rounded-2xl border p-4 ${
        item.unlocked
          ? "border-mq-premium-gold/40 bg-mq-premium-gold/[0.07]"
          : "border-white/10 bg-white/[0.03]"
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <span aria-hidden className={`text-3xl ${item.unlocked ? "" : "opacity-40 grayscale"}`}>
          {item.emoji}
        </span>
        {item.unlocked ? (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-mq-premium-gold">
            <Trophy className="h-3.5 w-3.5" />
            Conseguido
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-400">
            <Lock className="h-3.5 w-3.5" />
            Pendiente
          </span>
        )}
      </div>
      <h3 className={`mt-3 text-sm font-black ${item.unlocked ? "text-white" : "text-slate-200"}`}>{item.title}</h3>
      <p className="mt-1 flex-1 text-xs leading-relaxed text-slate-400">{item.description}</p>
      {item.unlocked ? (
        item.unlockedAt ? (
          <p className="mt-3 text-[11px] font-semibold text-slate-300">{formatUnlockDate(item.unlockedAt)}</p>
        ) : null
      ) : (
        <div className="mt-3 flex items-center gap-2">
          <div className="flex-1">
            <ProgressBar item={item} />
          </div>
          <span className="text-[11px] font-bold text-slate-300">{formatProgress(item)}</span>
        </div>
      )}
    </article>
  );
}

function getMascotMessage(unlockedCount: number): string {
  if (unlockedCount === 0) return "Cada logro es una prueba de tu esfuerzo. ¡Vamos a por el primero!";
  if (unlockedCount === MIR_ACHIEVEMENTS.length) return "¡Los tienes todos! Esa constancia es la que da una plaza MIR.";
  return `Llevas ${unlockedCount} de ${MIR_ACHIEVEMENTS.length} logros. ¡Estoy muy orgullosa de tu progreso!`;
}

/** Página de logros MIR (/dashboard/mir/logros). */
export function MirAchievementsView({ userId }: { userId: string }) {
  const result = useMirAchievements(userId);
  const [isToastDismissed, setIsToastDismissed] = useState(false);
  const closeToast = useCallback(() => setIsToastDismissed(true), []);
  const toastItems = !isToastDismissed && result?.newlyUnlocked.length ? result.newlyUnlocked : null;

  if (!result) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-mq-premium-gold border-t-transparent" />
      </div>
    );
  }

  const unlockedCount = result.achievements.filter((item) => item.unlocked).length;
  const ordered = [...result.achievements].sort((a, b) => Number(b.unlocked) - Number(a.unlocked));

  return (
    <div className="mx-auto w-full max-w-4xl">
      <Link
        href="/dashboard/mir"
        className="mb-6 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Volver al panel MIR
      </Link>

      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-9">
        <p className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.22em] text-mq-premium-gold">
          <Trophy className="h-3.5 w-3.5" />
          Logros de la doctora
        </p>
        <div className="mt-4 flex items-end gap-3">
          <MirDoctorMascot className="h-32 w-24 shrink-0" />
          <div className="rounded-2xl rounded-bl-none border border-white/10 bg-white/[0.06] px-4 py-3">
            <p className="text-sm leading-relaxed text-slate-200">{getMascotMessage(unlockedCount)}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {ordered.map((item) => (
          <MirAchievementBadge key={item.id} item={item} />
        ))}
      </div>
      {toastItems ? <MirAchievementToast items={toastItems} onClose={closeToast} /> : null}
    </div>
  );
}
