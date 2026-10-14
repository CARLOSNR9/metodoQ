"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, ChevronRight, Shuffle, Stethoscope } from "lucide-react";
import {
  MIR_DEFAULT_PRACTICE_FILTERS,
  MIR_MIXED_SPECIALTY,
  MIR_PRACTICE_BLOCK_SIZE,
  filterMirPracticePool,
  formatSpecialtyLabel,
  getMirOfficialYears,
  getMirSpecialties,
  pickMirPracticeQuestions,
  type MirPracticeFilters,
  type MirPracticeHistory,
  type MirPracticeStatus,
} from "@/lib/training/mir-practice";
import { getMirPracticeHistory } from "@/lib/training/mir-study-log";
import type { TrainingQuestion } from "@/lib/questions/types";
import { MirPracticeSession } from "./mir-practice-session";

const SPECIALTIES = getMirSpecialties();
const YEARS = getMirOfficialYears();
const EMPTY_HISTORY: MirPracticeHistory = { seen: new Set(), wrong: new Set() };

const STATUS_OPTIONS: { value: MirPracticeStatus; label: string; param: string }[] = [
  { value: "all", label: "Todas", param: "" },
  { value: "new", label: "Nuevas", param: "nuevas" },
  { value: "wrong", label: "Falladas", param: "falladas" },
];

/** `?filtro=nuevas|falladas` y `?anio=2023` fijan los filtros iniciales. */
function readInitialFilters(searchParams: URLSearchParams): MirPracticeFilters {
  const status = STATUS_OPTIONS.find((option) => option.param && option.param === searchParams.get("filtro"));
  const year = Number(searchParams.get("anio"));
  return {
    status: status?.value ?? MIR_DEFAULT_PRACTICE_FILTERS.status,
    year: YEARS.includes(year) ? year : MIR_DEFAULT_PRACTICE_FILTERS.year,
  };
}

function describeFilters(filters: MirPracticeFilters): string {
  const parts = [
    filters.status === "new" ? "Nuevas" : filters.status === "wrong" ? "Falladas" : "",
    filters.year !== null ? `MIR ${filters.year}` : "",
  ].filter(Boolean);
  return parts.length > 0 ? ` · ${parts.join(" · ")}` : "";
}

function FilterPill({
  active,
  disabled = false,
  onClick,
  children,
}: {
  active: boolean;
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={active}
      className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition disabled:cursor-wait disabled:opacity-50 ${
        active
          ? "bg-mq-premium-gold text-[#0A1F44]"
          : "border border-white/15 text-slate-300 hover:border-white/30 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
}

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
 * inmediata. Las falladas pasan al repaso de errores. Se puede filtrar por
 * estado (todas, nuevas o falladas) y por año del examen oficial. Con
 * `?especialidad=<clave>` (p. ej. desde el mapa de dominio) arranca
 * directamente un bloque de esa especialidad.
 */
export function MirPracticeView({ userId }: { userId: string }) {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<MirPracticeFilters>(() => readInitialFilters(searchParams));
  const [history, setHistory] = useState<MirPracticeHistory | null>(null);

  const loadHistory = useCallback(() => {
    getMirPracticeHistory(userId)
      .then(setHistory)
      .catch((error) => {
        console.error("No se pudo leer el historial de práctica MIR.", error);
        setHistory(EMPTY_HISTORY);
      });
  }, [userId]);

  useEffect(() => {
    loadHistory();
  }, [loadHistory]);

  const knownHistory = history ?? EMPTY_HISTORY;
  const pool = useMemo(() => filterMirPracticePool(filters, knownHistory), [filters, knownHistory]);
  const specialties = useMemo(() => getMirSpecialties(pool), [pool]);
  const statusCounts = useMemo(
    () =>
      Object.fromEntries(
        STATUS_OPTIONS.map((option) => [
          option.value,
          filterMirPracticePool({ ...filters, status: option.value }, knownHistory).length,
        ]),
      ) as Record<MirPracticeStatus, number>,
    [filters, knownHistory],
  );

  const [session, setSession] = useState<ActiveSession | null>(() => {
    const requested = searchParams.get("especialidad");
    if (!requested || !isKnownSpecialty(requested)) return null;
    return { specialtyKey: requested, questions: pickMirPracticeQuestions(requested), runId: 1 };
  });

  function startBlock(specialtyKey: string) {
    const questions = pickMirPracticeQuestions(specialtyKey, pool);
    // Con filtros puede no quedar ninguna (p. ej. ya no quedan nuevas): vuelve a la selección.
    setSession((previous) =>
      questions.length > 0 ? { specialtyKey, questions, runId: (previous?.runId ?? 0) + 1 } : null,
    );
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
          eyebrow={`Práctica · ${getSpecialtyTitle(session.specialtyKey)}${describeFilters(filters)}`}
          source="practice"
          onRestart={() => startBlock(session.specialtyKey)}
          onSaved={loadHistory}
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
          Práctica
        </p>
        <h1 className="mt-2 text-2xl font-black text-white sm:text-3xl">¿Qué estudiamos hoy?</h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          Bloques de hasta {MIR_PRACTICE_BLOCK_SIZE} preguntas con la explicación justo después de
          cada respuesta. Las que falles se guardan en tu repaso de errores para volver a verlas.
        </p>

        <div className="mt-6 space-y-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">Preguntas</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {STATUS_OPTIONS.map((option) => (
                <FilterPill
                  key={option.value}
                  active={filters.status === option.value}
                  disabled={option.value !== "all" && history === null}
                  onClick={() => setFilters((previous) => ({ ...previous, status: option.value }))}
                >
                  {option.label}
                  <span className="ml-1 opacity-70">
                    {option.value !== "all" && history === null ? "…" : statusCounts[option.value]}
                  </span>
                </FilterPill>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">Examen oficial</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <FilterPill
                active={filters.year === null}
                onClick={() => setFilters((previous) => ({ ...previous, year: null }))}
              >
                Todos los años
              </FilterPill>
              {YEARS.map((year) => (
                <FilterPill
                  key={year}
                  active={filters.year === year}
                  onClick={() => setFilters((previous) => ({ ...previous, year }))}
                >
                  {year}
                </FilterPill>
              ))}
            </div>
          </div>
        </div>

        {pool.length === 0 ? (
          <div className="mt-4 rounded-2xl border border-dashed border-white/15 p-6 text-center">
            <p className="text-sm font-semibold text-slate-300">
              {filters.status === "wrong"
                ? "No tienes preguntas falladas con estos filtros. ¡Buen trabajo!"
                : filters.status === "new"
                  ? "Ya has contestado todas las preguntas con estos filtros."
                  : "No hay preguntas con estos filtros."}
            </p>
            <button
              type="button"
              onClick={() => setFilters(MIR_DEFAULT_PRACTICE_FILTERS)}
              className="mt-3 text-xs font-bold text-mq-premium-gold hover:brightness-110"
            >
              Quitar filtros
            </button>
          </div>
        ) : (
          <>
            <button
              type="button"
              onClick={() => startBlock(MIR_MIXED_SPECIALTY)}
              className="mt-4 flex w-full items-center justify-between gap-3 rounded-2xl bg-mq-premium-gold px-5 py-4 text-left text-[#0A1F44] transition hover:brightness-110"
            >
              <span className="flex items-center gap-3">
                <Shuffle className="h-5 w-5" />
                <span>
                  <span className="block text-sm font-black">Mixto</span>
                  <span className="block text-xs font-semibold opacity-80">
                    {filters.status === "all" && filters.year === null
                      ? "Preguntas al azar de todas las especialidades"
                      : `Al azar entre las ${pool.length} ${pool.length === 1 ? "pregunta" : "preguntas"} de estos filtros`}
                  </span>
                </span>
              </span>
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {specialties.map((specialty) => (
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
          </>
        )}
      </div>
    </div>
  );
}
