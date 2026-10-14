"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import {
  MIR_PEARLS,
  MIR_PEARL_CATEGORIES,
  getMirPearlOfTheDay,
  type MirPearl,
  type MirPearlCategory,
} from "@/lib/mir/colombia-spain-pearls";

export const MIR_PEARLS_HREF = "/dashboard/mir/colombia-espana";

const CATEGORY_LABEL = Object.fromEntries(MIR_PEARL_CATEGORIES.map(({ value, label }) => [value, label])) as Record<
  MirPearlCategory,
  string
>;

/** Las dos columnas «En Colombia» / «En España» y la idea para el examen. */
function PearlBody({ pearl }: { pearl: MirPearl }) {
  return (
    <>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
            <span aria-hidden>🇨🇴</span> En Colombia
          </p>
          <p className="mt-1 text-sm leading-relaxed text-slate-300">{pearl.colombia}</p>
        </div>
        <div className="rounded-xl border border-mq-premium-gold/25 bg-mq-premium-gold/[0.05] p-3">
          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-mq-premium-gold">
            <span aria-hidden>🇪🇸</span> En España
          </p>
          <p className="mt-1 text-sm leading-relaxed text-white">{pearl.spain}</p>
        </div>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-slate-300">
        <span className="font-black text-mq-premium-gold">Para el MIR:</span> {pearl.mirTip}
      </p>
    </>
  );
}

/** Tarjeta del panel: la perla del día y acceso a todas. */
export function MirPearlOfTheDayCard() {
  const pearl = getMirPearlOfTheDay();
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide text-slate-400">
          <Sparkles className="h-3.5 w-3.5 text-mq-premium-gold" aria-hidden />
          Perla del día · {CATEGORY_LABEL[pearl.category]}
        </p>
        <Link
          href={MIR_PEARLS_HREF}
          className="inline-flex items-center gap-1 text-xs font-bold text-mq-premium-gold hover:brightness-110"
        >
          Ver las {MIR_PEARLS.length} perlas
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
      <h3 className="mt-2 text-lg font-black text-white">{pearl.title}</h3>
      <PearlBody pearl={pearl} />
    </div>
  );
}

/**
 * Todas las perlas «Colombia vs España», filtrables por tema: diferencias de
 * práctica, normativa y epidemiología que cambian la respuesta en el MIR.
 */
export function MirPearlsView() {
  const [category, setCategory] = useState<MirPearlCategory | null>(null);
  const pearls = category ? MIR_PEARLS.filter((pearl) => pearl.category === category) : MIR_PEARLS;

  return (
    <div className="mx-auto w-full max-w-3xl">
      <Link
        href="/dashboard/mir"
        className="mb-6 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Volver al panel MIR
      </Link>

      <header className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
        <p className="text-[11px] font-black uppercase tracking-[0.22em] text-mq-premium-gold">
          <span aria-hidden>🇨🇴 🇪🇸</span> Perlas
        </p>
        <h1 className="mt-2 text-2xl font-black text-white sm:text-3xl">Colombia vs España</h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">
          Lo que aprendiste en Colombia no siempre es la respuesta del MIR. Estas son las diferencias de fármacos,
          cribados, vacunas, normativa y epidemiología que más se preguntan: en el examen, manda España.
        </p>
        <div className="mt-5 flex flex-wrap gap-2" aria-label="Filtrar por tema">
          {[{ value: null, label: "Todas" }, ...MIR_PEARL_CATEGORIES].map(({ value, label }) => (
            <button
              key={label}
              type="button"
              aria-pressed={category === value}
              onClick={() => setCategory(value)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition ${
                category === value
                  ? "bg-mq-premium-gold text-[#0A1F44]"
                  : "border border-white/15 text-slate-300 hover:border-white/30 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </header>

      <ul className="mt-6 space-y-4">
        {pearls.map((pearl) => (
          <li key={pearl.id} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-500">
              {CATEGORY_LABEL[pearl.category]}
            </p>
            <h2 className="mt-1 text-base font-black text-white">{pearl.title}</h2>
            <PearlBody pearl={pearl} />
          </li>
        ))}
      </ul>

      <p className="mt-6 text-[11px] leading-relaxed text-slate-500">
        Contenido orientativo para preparar el MIR, contrastado con la normativa vigente en octubre de 2026. Los
        cribados, el calendario vacunal y la legislación cambian: ante la duda, manda la fuente oficial española.
      </p>
    </div>
  );
}
