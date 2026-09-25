"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Circle,
  Map as MapIcon,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import {
  MIR_MASTERY_MASTERED_FROM,
  MIR_MASTERY_MIN_ANSWERS,
  MIR_MASTERY_WEAK_BELOW,
  buildMirMastery,
  getMirSpecialtyStats,
  getOverallAccuracy,
  getWeakestSpecialty,
  type MirMasteryLevel,
  type MirSpecialtyMastery,
  type MirSpecialtyStats,
} from "@/lib/training/mir-mastery";
import { MirDoctorMascot } from "./mir-doctor-mascot";

type LevelMeta = {
  label: string;
  icon: LucideIcon;
  /** Color del icono y la etiqueta de estado. */
  tone: string;
  /** Relleno de la barra y de la celda del mapa. */
  fill: string;
  /** Borde/fondo suave de la ficha. */
  surface: string;
};

const LEVEL_META: Record<MirMasteryLevel, LevelMeta> = {
  weak: {
    label: "A reforzar",
    icon: AlertTriangle,
    tone: "text-rose-400",
    fill: "bg-rose-400",
    surface: "border-rose-400/25 bg-rose-400/[0.05]",
  },
  progress: {
    label: "En progreso",
    icon: TrendingUp,
    tone: "text-amber-300",
    fill: "bg-amber-300",
    surface: "border-amber-300/25 bg-amber-300/[0.05]",
  },
  mastered: {
    label: "Dominada",
    icon: CheckCircle2,
    tone: "text-emerald-400",
    fill: "bg-emerald-400",
    surface: "border-emerald-400/25 bg-emerald-400/[0.05]",
  },
  not_started: {
    label: "Sin empezar",
    icon: Circle,
    tone: "text-slate-400",
    fill: "bg-white/[0.08]",
    surface: "border-white/10 bg-white/[0.03]",
  },
};

/** Orden de la leyenda y de las fichas: primero lo que más conviene practicar. */
const LEVEL_ORDER: MirMasteryLevel[] = ["weak", "progress", "not_started", "mastered"];

export function buildMirPracticeHref(specialtyKey: string): string {
  return `/dashboard/mir/practica?especialidad=${encodeURIComponent(specialtyKey)}`;
}

function useMirMastery(userId: string) {
  const [stats, setStats] = useState<MirSpecialtyStats | null>(null);
  useEffect(() => {
    let cancelled = false;
    getMirSpecialtyStats(userId).then((result) => {
      if (!cancelled) setStats(result);
    });
    return () => {
      cancelled = true;
    };
  }, [userId]);
  return stats;
}

function countByLevel(mastery: MirSpecialtyMastery[]): Record<MirMasteryLevel, number> {
  const counts: Record<MirMasteryLevel, number> = { weak: 0, progress: 0, mastered: 0, not_started: 0 };
  for (const item of mastery) counts[item.level] += 1;
  return counts;
}

function LevelBadge({ level }: { level: MirMasteryLevel }) {
  const meta = LEVEL_META[level];
  const Icon = meta.icon;
  return (
    <span className={`inline-flex items-center gap-1 text-[11px] font-bold ${meta.tone}`}>
      <Icon className="h-3.5 w-3.5" />
      {meta.label}
    </span>
  );
}

function LevelLegend({ counts }: { counts: Record<MirMasteryLevel, number> }) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2">
      {LEVEL_ORDER.map((level) => (
        <span key={level} className="inline-flex items-center gap-1.5 text-xs text-slate-300">
          <LevelBadge level={level} />
          <span className="font-black text-white">{counts[level]}</span>
        </span>
      ))}
    </div>
  );
}

function sortForPractice(mastery: MirSpecialtyMastery[]): MirSpecialtyMastery[] {
  return [...mastery].sort((a, b) => {
    const byLevel = LEVEL_ORDER.indexOf(a.level) - LEVEL_ORDER.indexOf(b.level);
    if (byLevel !== 0) return byLevel;
    if (a.level === "not_started") return b.questionCount - a.questionCount;
    // Con pocas respuestas el % aún no es fiable: van después dentro de su nivel.
    const aReliable = a.answered >= MIR_MASTERY_MIN_ANSWERS ? 0 : 1;
    const bReliable = b.answered >= MIR_MASTERY_MIN_ANSWERS ? 0 : 1;
    return aReliable - bReliable || (a.accuracy ?? 0) - (b.accuracy ?? 0);
  });
}

function describeTile(item: MirSpecialtyMastery): string {
  const meta = LEVEL_META[item.level];
  if (item.accuracy === null) return `${item.label}: ${meta.label.toLowerCase()}`;
  return `${item.label}: ${item.accuracy} % (${item.correct}/${item.answered} correctas) · ${meta.label}`;
}

function getMascotMessage(mastery: MirSpecialtyMastery[], overall: number | null): string {
  const weakest = getWeakestSpecialty(mastery);
  if (overall !== null && !weakest) {
    return "¡Todas las especialidades dominadas! Sigue con el repaso de errores para no perder nivel.";
  }
  if (overall === null || !weakest) {
    return "Aún no tengo datos tuyos. Haz un bloque de práctica y aquí verás en qué especialidades vas fuerte y en cuáles flojeas.";
  }
  if (weakest.level === "not_started") {
    return `¡Todo lo que has practicado va bien! Siguiente reto: ${weakest.label}, que aún no has empezado.`;
  }
  return `Tu especialidad a reforzar es ${weakest.label} (${weakest.accuracy} %). Un par de bloques hoy y la subimos.`;
}

/**
 * Tarjeta resumen del mapa de dominio para el panel MIR: una celda por
 * especialidad coloreada por nivel, conteo por nivel y acceso directo a
 * practicar la especialidad más débil.
 */
export function MirMasteryCard({ userId }: { userId: string }) {
  const stats = useMirMastery(userId);
  if (!stats) {
    return <div className="h-48 animate-pulse rounded-2xl border border-white/10 bg-white/[0.03]" />;
  }
  return <MirMasteryCardContent stats={stats} />;
}

export function MirMasteryCardContent({ stats }: { stats: MirSpecialtyStats }) {
  const mastery = buildMirMastery(stats);
  const counts = countByLevel(mastery);
  const overall = getOverallAccuracy(stats);
  const weakest = getWeakestSpecialty(mastery);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        <div className="lg:w-56 lg:shrink-0">
          <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">Acierto global</p>
          <p className="mt-1 text-4xl font-black text-white">
            {overall ?? "—"}
            {overall !== null ? <span className="text-lg font-bold text-slate-400"> %</span> : null}
          </p>
          {weakest ? (
            <div className="mt-4">
              <p className="text-xs text-slate-400">
                {weakest.level === "not_started" ? "Siguiente reto" : "Tu punto más débil"}
              </p>
              <p className="mt-0.5 text-sm font-bold text-white">
                {weakest.label}
                {weakest.accuracy !== null ? (
                  <span className="font-semibold text-slate-400"> · {weakest.accuracy} %</span>
                ) : null}
              </p>
              <Link
                href={buildMirPracticeHref(weakest.key)}
                className="mt-3 inline-flex min-h-10 items-center justify-center gap-1.5 rounded-xl bg-mq-premium-gold px-4 text-sm font-black text-[#0A1F44] transition hover:brightness-110"
              >
                Practicar {weakest.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : null}
        </div>

        <div className="min-w-0 flex-1">
          <ul className="grid grid-cols-4 gap-1.5 sm:grid-cols-7" aria-label="Dominio por especialidad">
            {sortForPractice(mastery).map((item) => (
              <li key={item.key}>
                <Link
                  href={buildMirPracticeHref(item.key)}
                  title={describeTile(item)}
                  aria-label={describeTile(item)}
                  className={`flex h-12 flex-col justify-between rounded-lg p-1.5 ring-mq-premium-gold/60 transition hover:ring-2 ${
                    item.level === "not_started" ? "bg-white/[0.05]" : LEVEL_META[item.level].fill
                  }`}
                >
                  <span
                    className={`truncate text-[9px] font-bold leading-tight ${
                      item.level === "not_started" ? "text-slate-400" : "text-[#0A1F44]"
                    }`}
                  >
                    {item.label}
                  </span>
                  <span
                    className={`text-xs font-black leading-none ${
                      item.level === "not_started" ? "text-slate-500" : "text-[#0A1F44]"
                    }`}
                  >
                    {item.accuracy !== null ? `${item.accuracy}%` : "—"}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <LevelLegend counts={counts} />
            <Link
              href="/dashboard/mir/dominio"
              className="inline-flex shrink-0 items-center gap-1 text-xs font-bold text-mq-premium-gold hover:underline"
            >
              Ver mapa completo
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function MasteryTile({ item }: { item: MirSpecialtyMastery }) {
  const meta = LEVEL_META[item.level];
  return (
    <article className={`flex flex-col rounded-2xl border p-4 ${meta.surface}`}>
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm font-bold text-white">{item.label}</h3>
        <LevelBadge level={item.level} />
      </div>
      <p className="mt-3 text-2xl font-black text-white">
        {item.accuracy !== null ? (
          <>
            {item.accuracy}
            <span className="text-sm font-bold text-slate-400"> %</span>
          </>
        ) : (
          "—"
        )}
      </p>
      <div
        className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.08]"
        role="meter"
        aria-label={`Acierto en ${item.label}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={item.accuracy ?? 0}
      >
        <div className={`h-full rounded-full ${meta.fill}`} style={{ width: `${item.accuracy ?? 0}%` }} />
      </div>
      <p className="mt-2 text-[11px] text-slate-400">
        {item.answered > 0
          ? `${item.correct}/${item.answered} correctas`
          : `${item.questionCount} ${item.questionCount === 1 ? "pregunta disponible" : "preguntas disponibles"}`}
        {item.answered > 0 && item.answered < MIR_MASTERY_MIN_ANSWERS ? " · pocos datos aún" : ""}
      </p>
      <Link
        href={buildMirPracticeHref(item.key)}
        className="mt-3 inline-flex items-center gap-1 self-start text-xs font-bold text-mq-premium-gold hover:underline"
      >
        {item.level === "not_started" ? "Empezar" : "Practicar"}
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </article>
  );
}

/** Página completa del mapa de dominio MIR (/dashboard/mir/dominio). */
export function MirMasteryView({ userId }: { userId: string }) {
  const stats = useMirMastery(userId);

  if (!stats) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-mq-premium-gold border-t-transparent" />
      </div>
    );
  }
  return <MirMasteryViewContent stats={stats} />;
}

export function MirMasteryViewContent({ stats }: { stats: MirSpecialtyStats }) {
  const mastery = buildMirMastery(stats);
  const counts = countByLevel(mastery);
  const overall = getOverallAccuracy(stats);

  return (
    <div className="mx-auto w-full max-w-5xl">
      <Link
        href="/dashboard/mir"
        className="mb-6 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Volver al panel MIR
      </Link>

      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-9">
        <p className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.22em] text-mq-premium-gold">
          <MapIcon className="h-3.5 w-3.5" />
          Mapa de dominio
        </p>
        <h1 className="mt-2 text-2xl font-black text-white sm:text-3xl">¿Cómo vas por especialidad?</h1>

        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex items-end gap-3">
            <MirDoctorMascot className="h-32 w-24 shrink-0" />
            <div className="max-w-md rounded-2xl rounded-bl-none border border-white/10 bg-white/[0.06] px-4 py-3">
              <p className="text-sm leading-relaxed text-slate-200">{getMascotMessage(mastery, overall)}</p>
            </div>
          </div>
          <div className="shrink-0 md:text-right">
            <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">Acierto global</p>
            <p className="text-5xl font-black text-white">
              {overall ?? "—"}
              {overall !== null ? <span className="text-xl font-bold text-slate-400"> %</span> : null}
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 rounded-xl border border-white/10 bg-white/[0.02] p-4">
          <LevelLegend counts={counts} />
          <p className="text-[11px] leading-relaxed text-slate-400">
            A reforzar: menos del {MIR_MASTERY_WEAK_BELOW} % de acierto. En progreso: del{" "}
            {MIR_MASTERY_WEAK_BELOW} al {MIR_MASTERY_MASTERED_FROM - 1} %. Dominada: desde el{" "}
            {MIR_MASTERY_MASTERED_FROM} %. Cuenta todo lo que respondes en la práctica, el repaso y el
            simulacro.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {sortForPractice(mastery).map((item) => (
          <MasteryTile key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
}
