"use client";

import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Circle,
  Map as MapIcon,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import {
  TOPIC_MASTERY_MASTERED_FROM,
  TOPIC_MASTERY_MIN_ANSWERS,
  TOPIC_MASTERY_WEAK_BELOW,
  buildTopicMastery,
  buildTopicPracticeHref,
  getTopicOverallAccuracy,
  getWeakestTopicArea,
  type TopicAreaMastery,
  type TopicMasteryLevel,
} from "@/lib/training/topic-mastery";

type LevelMeta = { label: string; icon: LucideIcon; tone: string; tile: string };

const LEVEL_META: Record<TopicMasteryLevel, LevelMeta> = {
  weak: { label: "A reforzar", icon: AlertTriangle, tone: "text-rose-500", tile: "bg-rose-400 text-rose-950" },
  progress: { label: "En progreso", icon: TrendingUp, tone: "text-amber-500", tile: "bg-amber-300 text-amber-950" },
  mastered: { label: "Dominada", icon: CheckCircle2, tone: "text-emerald-500", tile: "bg-emerald-400 text-emerald-950" },
  not_started: { label: "Sin empezar", icon: Circle, tone: "text-slate-400", tile: "bg-slate-100 text-slate-500" },
};

/** Orden de la leyenda y de las celdas: primero lo que más conviene practicar. */
const LEVEL_ORDER: TopicMasteryLevel[] = ["weak", "progress", "not_started", "mastered"];

function sortForPractice(mastery: TopicAreaMastery[]): TopicAreaMastery[] {
  return mastery
    .map((item, index) => ({ item, index }))
    .sort((a, b) => {
      const byLevel = LEVEL_ORDER.indexOf(a.item.level) - LEVEL_ORDER.indexOf(b.item.level);
      if (byLevel !== 0) return byLevel;
      if (a.item.level === "not_started") return a.index - b.index;
      // Con pocas respuestas el % aún no es fiable: van después dentro de su nivel.
      const aReliable = a.item.answered >= TOPIC_MASTERY_MIN_ANSWERS ? 0 : 1;
      const bReliable = b.item.answered >= TOPIC_MASTERY_MIN_ANSWERS ? 0 : 1;
      return aReliable - bReliable || (a.item.accuracy ?? 0) - (b.item.accuracy ?? 0);
    })
    .map(({ item }) => item);
}

function describeTile(item: TopicAreaMastery): string {
  const label = LEVEL_META[item.level].label;
  if (item.accuracy === null) return `${item.label}: ${label.toLowerCase()}`;
  return `${item.label}: ${item.accuracy} % (${item.correct}/${item.answered} correctas) · ${label}`;
}

/**
 * Mapa de dominio por área para el panel del Método Q: una celda por área
 * coloreada por nivel, conteo por nivel y acceso directo a entrenar el área
 * más débil. Se calcula con `topicStats` del perfil, sin lecturas extra.
 */
export function TopicMasteryCard({
  topicStats,
}: {
  topicStats: Record<string, { correct?: number; wrong?: number }> | null | undefined;
}) {
  const mastery = buildTopicMastery(topicStats);
  const overall = getTopicOverallAccuracy(mastery);
  const weakest = getWeakestTopicArea(mastery);
  const counts: Record<TopicMasteryLevel, number> = { weak: 0, progress: 0, mastered: 0, not_started: 0 };
  for (const item of mastery) counts[item.level] += 1;

  return (
    <section className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-6 space-y-1">
        <div className="inline-flex items-center gap-2 rounded-full border border-mq-accent/20 bg-mq-accent/10 px-3 py-1">
          <MapIcon size={14} className="text-mq-accent" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-mq-accent">Mapa de dominio</span>
        </div>
        <h2 className="text-2xl font-black text-slate-900">Tu dominio por área</h2>
        <p className="text-sm text-slate-500">
          Toca un área para entrenarla. A reforzar: menos del {TOPIC_MASTERY_WEAK_BELOW} %. Dominada: desde el{" "}
          {TOPIC_MASTERY_MASTERED_FROM} %.
        </p>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        <div className="lg:w-52 lg:shrink-0">
          <p className="text-[11px] font-bold uppercase tracking-wide text-slate-500">Acierto global</p>
          <p className="mt-1 text-4xl font-black text-slate-900">
            {overall ?? "—"}
            {overall !== null ? <span className="text-lg font-bold text-slate-400"> %</span> : null}
          </p>
          {weakest ? (
            <div className="mt-4">
              <p className="text-xs text-slate-500">
                {weakest.level === "not_started" ? "Para empezar" : "Tu punto más débil"}
              </p>
              <p className="mt-0.5 text-sm font-bold text-slate-900">
                {weakest.label}
                {weakest.accuracy !== null ? (
                  <span className="font-semibold text-slate-500"> · {weakest.accuracy} %</span>
                ) : null}
              </p>
              <Link
                href={buildTopicPracticeHref(weakest)}
                className="mt-3 inline-flex min-h-10 items-center justify-center gap-1.5 rounded-xl bg-mq-accent px-4 text-sm font-black text-mq-accent-foreground transition hover:brightness-110"
              >
                Entrenar {weakest.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : null}
        </div>

        <div className="min-w-0 flex-1">
          <ul className="grid grid-cols-3 gap-1.5 sm:grid-cols-5 xl:grid-cols-6" aria-label="Dominio por área">
            {sortForPractice(mastery).map((item) => (
              <li key={item.key}>
                <Link
                  href={buildTopicPracticeHref(item)}
                  title={describeTile(item)}
                  aria-label={describeTile(item)}
                  className={`flex h-14 flex-col justify-between rounded-lg p-1.5 ring-mq-accent/60 transition hover:ring-2 ${LEVEL_META[item.level].tile}`}
                >
                  <span className="line-clamp-2 text-[10px] font-bold leading-tight">{item.label}</span>
                  <span className="text-xs font-black leading-none">
                    {item.accuracy !== null ? `${item.accuracy}%` : "—"}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
            {LEVEL_ORDER.map((level) => {
              const meta = LEVEL_META[level];
              const Icon = meta.icon;
              return (
                <span key={level} className="inline-flex items-center gap-1.5 text-xs text-slate-600">
                  <span className={`inline-flex items-center gap-1 text-[11px] font-bold ${meta.tone}`}>
                    <Icon className="h-3.5 w-3.5" />
                    {meta.label}
                  </span>
                  <span className="font-black text-slate-900">{counts[level]}</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
