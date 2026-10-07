"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, BookMarked, ChevronDown, Layers, XCircle, CheckCircle2 } from "lucide-react";
import { MIR_QUESTIONS } from "@/lib/training/mir-convocatoria";
import { formatSpecialtyLabel, getQuestionSpecialtyKeys } from "@/lib/training/mir-practice";
import { getMirReviewDeck } from "@/lib/training/mir-review";
import { buildMirStudyItems, getMirStudyLog, type MirStudyItem } from "@/lib/training/mir-study-log";
import { MirQuestionReviewCard } from "./mir-question-review-card";

const PAGE_SIZE = 20;
const QUESTIONS_BY_ID = new Map(MIR_QUESTIONS.map((question) => [question.id, question]));

type StudyFilter = "wrong" | "all";

function formatShortDate(iso: string): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("es-ES", { day: "numeric", month: "short" });
}

/**
 * «Mi estudio» MIR: todas las preguntas que el alumno ha contestado, con su
 * respuesta, la correcta y la explicación, para repasar leyendo. Por defecto
 * muestra los fallos; se puede ver todo y filtrar por especialidad.
 */
export function MirStudyView({ userId }: { userId: string }) {
  const [items, setItems] = useState<MirStudyItem[] | null>(null);
  const [filter, setFilter] = useState<StudyFilter>("wrong");
  const [specialty, setSpecialty] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);
  const [visible, setVisible] = useState(PAGE_SIZE);

  useEffect(() => {
    let cancelled = false;
    Promise.all([getMirStudyLog(userId), getMirReviewDeck(userId)]).then(([log, deck]) => {
      if (cancelled) return;
      setItems(
        buildMirStudyItems(log, deck.entries).filter((item) => QUESTIONS_BY_ID.has(item.questionId)),
      );
    });
    return () => {
      cancelled = true;
    };
  }, [userId]);

  const specialties = useMemo(() => {
    const counts = new Map<string, number>();
    for (const item of items ?? []) {
      for (const key of getQuestionSpecialtyKeys(QUESTIONS_BY_ID.get(item.questionId)!)) {
        counts.set(key, (counts.get(key) ?? 0) + 1);
      }
    }
    return [...counts.keys()].sort((a, b) => a.localeCompare(b, "es"));
  }, [items]);

  if (!items) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-mq-premium-gold border-t-transparent" />
      </div>
    );
  }

  const wrongCount = items.filter((item) => item.isWrong).length;
  const filtered = items.filter(
    (item) =>
      (filter === "all" || item.isWrong) &&
      (!specialty ||
        getQuestionSpecialtyKeys(QUESTIONS_BY_ID.get(item.questionId)!).includes(specialty)),
  );

  function changeFilter(next: StudyFilter) {
    setFilter(next);
    setVisible(PAGE_SIZE);
    setOpenId(null);
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
          <BookMarked className="h-3.5 w-3.5" />
          Mi estudio
        </p>
        <h1 className="mt-3 text-2xl font-black text-white sm:text-3xl">Repasa tus preguntas</h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">
          Todas las preguntas que has contestado en práctica, repaso y simulacros, con tu respuesta,
          la correcta y la explicación.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
            <p className="text-2xl font-black text-white">{items.length}</p>
            <p className="text-[11px] font-semibold text-slate-400">contestadas</p>
          </div>
          <div className="rounded-xl border border-rose-400/20 bg-rose-400/[0.06] p-4 text-center">
            <p className="text-2xl font-black text-rose-400">{wrongCount}</p>
            <p className="text-[11px] font-semibold text-slate-400">para repasar</p>
          </div>
        </div>

        {items.some((item) => item.inReview) ? (
          <Link
            href="/dashboard/mir/repaso"
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-mq-premium-gold hover:underline"
          >
            <Layers className="h-3.5 w-3.5" />
            Ponte a prueba con tus fallos en el repaso de errores
          </Link>
        ) : null}
      </div>

      {items.length === 0 ? (
        <p className="mt-8 rounded-xl border border-dashed border-white/15 p-6 text-center text-sm text-slate-400">
          Aún no has contestado preguntas. Cuando hagas un bloque de práctica o un simulacro, aparecerán
          aquí para que las repases.
        </p>
      ) : (
        <div className="mt-8">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {(
              [
                ["wrong", `Fallos (${wrongCount})`],
                ["all", `Todas (${items.length})`],
              ] as const
            ).map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => changeFilter(value)}
                className={`rounded-full px-4 py-1.5 text-xs font-bold transition ${
                  filter === value
                    ? "bg-mq-premium-gold text-[#0A1F44]"
                    : "border border-white/15 text-slate-300 hover:border-white/30"
                }`}
              >
                {label}
              </button>
            ))}
            <select
              value={specialty}
              onChange={(event) => {
                setSpecialty(event.target.value);
                setVisible(PAGE_SIZE);
                setOpenId(null);
              }}
              aria-label="Filtrar por especialidad"
              className="min-h-8 rounded-full border border-white/15 bg-[#0A1F44] px-3 text-xs font-bold text-slate-200"
            >
              <option value="">Todas las especialidades</option>
              {specialties.map((key) => (
                <option key={key} value={key}>
                  {formatSpecialtyLabel(key)}
                </option>
              ))}
            </select>
          </div>

          {filtered.length === 0 ? (
            <p className="rounded-xl border border-dashed border-white/15 p-6 text-center text-sm text-slate-400">
              No hay preguntas con este filtro.
            </p>
          ) : (
            <ul className="space-y-2">
              {filtered.slice(0, visible).map((item) => {
                const question = QUESTIONS_BY_ID.get(item.questionId)!;
                const isOpen = openId === item.questionId;
                return (
                  <li key={item.questionId}>
                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? null : item.questionId)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left transition hover:border-white/25"
                    >
                      {item.isWrong ? (
                        <XCircle className="h-4 w-4 shrink-0 text-rose-400" />
                      ) : (
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                      )}
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-bold text-white">{question.topic}</span>
                        <span className="block truncate text-[11px] text-slate-400">
                          {question.examArea}
                          {question.officialExam
                            ? ` · MIR ${question.officialExam.year} · P. ${question.officialExam.number}`
                            : ""}
                          {item.lastAt ? ` · ${formatShortDate(item.lastAt)}` : ""}
                          {item.timesWrong > 1 ? ` · fallada ${item.timesWrong} veces` : ""}
                        </span>
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-slate-400 transition ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isOpen ? (
                      <div className="mt-2">
                        <MirQuestionReviewCard
                          question={question}
                          given={item.answer}
                          wasWrong={item.isWrong}
                        />
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          )}

          {filtered.length > visible ? (
            <button
              type="button"
              onClick={() => setVisible((count) => count + PAGE_SIZE)}
              className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-white/20 text-sm font-bold text-white transition hover:border-white/40"
            >
              Ver más ({filtered.length - visible} restantes)
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
}
