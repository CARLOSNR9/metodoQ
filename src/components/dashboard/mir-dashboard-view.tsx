"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Building2,
  ClipboardList,
  Dumbbell,
  Globe2,
  Layers,
  Map as MapIcon,
  MapPin,
  Stethoscope,
  Timer,
} from "lucide-react";
import { MIR_EXAM_EDITIONS, getMirAttempt, type MirExamAttempt } from "@/lib/training/mir-convocatoria";
import { getDueMirReviewIds, getMirReviewDeck } from "@/lib/training/mir-review";
import { getMirStreakInfo, type MirStreakInfo } from "@/lib/training/mir-streak";
import { getDaysUntilMirExam } from "@/lib/mir/config";
import { MirStreakStrip } from "./mir-streak-strip";
import { MirDoctorMascot } from "./mir-doctor-mascot";
import { MirMasteryCard } from "./mir-mastery-map";

type MirDashboardViewProps = {
  userId: string;
  greetingName: string;
};

function getMascotMessage(
  name: string,
  streak: MirStreakInfo,
  hasAnyActivity: boolean,
  dueReviewCount: number,
): string {
  if (dueReviewCount > 0) {
    return `¡Hola, ${name}! Hoy tienes ${dueReviewCount} ${dueReviewCount === 1 ? "error" : "errores"} para repasar. Empieza por ahí: es la forma más rápida de subir tu nota.`;
  }
  if (streak.count === 0 && !hasAnyActivity) {
    return `¡Hola, ${name}! Tu aventura MIR empieza hoy. Haz tu primer bloque de práctica y comienza tu racha de estudio.`;
  }
  if (streak.count === 0 && hasAnyActivity) {
    return `¡Hola, ${name}! Tu racha se enfrió. Haz hoy un bloque de práctica y vuelve a encenderla.`;
  }
  return `¡Vas muy bien, ${name}! Llevas ${streak.count} ${streak.count === 1 ? "día" : "días"} de racha. No la rompas hoy.`;
}

const CURIOSITIES = [
  {
    icon: ClipboardList,
    title: "9.676 plazas",
    detail: "de Medicina en la convocatoria MIR 2027 (12.850 en total, todas las áreas sanitarias).",
  },
  {
    icon: Timer,
    title: "4h 30 min",
    detail: "de examen: 200 preguntas tipo test + 10 de reserva, un único acierto por pregunta.",
  },
  {
    icon: MapPin,
    title: "+1.800 km",
    detail: "es la distancia máxima que puede separar tu plaza de Madrid: hospitales en Canarias también ofertan formación MIR.",
  },
  {
    icon: Building2,
    title: "1 examen, 1 día",
    detail: "se aplica el mismo sábado, a la misma hora, en todas las sedes de España.",
  },
];

/**
 * Dashboard del módulo MIR: bienvenida, cuenta regresiva al examen, racha,
 * datos curiosos, accesos a práctica, repaso de errores y simulacro, y el
 * mapa de dominio por especialidad. Tema oscuro/dorado, deliberadamente distinto del resto
 * de Método Q (enfocado en exámenes colombianos).
 */
export function MirDashboardView({ userId, greetingName }: MirDashboardViewProps) {
  const hasContent = MIR_EXAM_EDITIONS.some((edition) => edition.questions.length > 0);
  const daysUntilExam = getDaysUntilMirExam();

  const [streak, setStreak] = useState<MirStreakInfo>({ count: 0, lastActiveDate: null, activeDates: [] });
  const [attemptsByEdition, setAttemptsByEdition] = useState<Record<string, MirExamAttempt | null>>({});
  const [dueReviewCount, setDueReviewCount] = useState(0);
  const hasAnyAttempt = Object.values(attemptsByEdition).some((attempt) => attempt !== null);
  const hasAnyActivity = hasAnyAttempt || streak.lastActiveDate !== null;

  useEffect(() => {
    let cancelled = false;

    getMirStreakInfo(userId).then((info) => {
      if (!cancelled) setStreak(info);
    });

    getMirReviewDeck(userId).then((deck) => {
      if (!cancelled) setDueReviewCount(getDueMirReviewIds(deck).length);
    });

    Promise.all(
      MIR_EXAM_EDITIONS.map((edition) =>
        getMirAttempt(userId, edition.code).then((attempt) => [edition.code, attempt] as const),
      ),
    ).then((entries) => {
      if (!cancelled) setAttemptsByEdition(Object.fromEntries(entries));
    });

    return () => {
      cancelled = true;
    };
  }, [userId]);

  return (
    <div className="space-y-6">
      <header className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-6 sm:p-8">
        <p className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-mq-premium-gold">
          <Globe2 className="h-3.5 w-3.5" />
          Módulo internacional
          <span aria-hidden className="ml-1">🇪🇸</span>
          <span aria-hidden>🇨🇴</span>
        </p>
        <h1 className="mt-2 text-2xl font-black text-white sm:text-3xl">
          Bienvenido, {greetingName}
        </h1>
        <p className="mt-1 text-sm text-slate-300">
          De Colombia a España: este es tu centro de mando para el examen MIR.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-mq-premium-gold/25 bg-mq-premium-gold/[0.06] p-5">
            <p className="text-[11px] font-bold uppercase tracking-wide text-slate-300">
              Examen MIR 2027
            </p>
            <p className="mt-1 text-4xl font-black text-mq-premium-gold">
              {daysUntilExam}
              <span className="text-base font-bold text-slate-300"> días</span>
            </p>
            <p className="mt-1 text-xs text-slate-400">Sábado 23 de enero de 2027</p>
          </div>
          <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="min-w-0">
              <MirStreakStrip streakCount={streak.count} activeDates={new Set(streak.activeDates)} />
              <p className="mt-3 text-xs font-semibold text-slate-400">
                {streak.count === 0 ? "¡Empieza hoy tu primera sesión!" : "No rompas la racha hoy."}
              </p>
            </div>
            <MirDoctorMascot className="hidden h-24 w-[4.5rem] shrink-0 sm:block" />
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CURIOSITIES.map((fact) => (
          <div key={fact.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <fact.icon className="h-5 w-5 text-mq-premium-gold" />
            <p className="mt-3 text-lg font-black text-white">{fact.title}</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-400">{fact.detail}</p>
          </div>
        ))}
      </section>

      <section>
        <div className="mb-3 flex items-center gap-2">
          <Dumbbell className="h-4 w-4 text-mq-premium-gold" />
          <h2 className="text-sm font-black uppercase tracking-wide text-white">Entrena</h2>
        </div>
        {hasContent ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <Stethoscope className="h-5 w-5 text-mq-premium-gold" />
              <h3 className="mt-3 text-lg font-bold text-white">Práctica por especialidad</h3>
              <p className="mt-1 text-sm text-slate-300">Bloques de 10 preguntas · corrección al instante</p>
              <Link
                href="/dashboard/mir/practica"
                className="mt-4 inline-flex min-h-10 items-center justify-center rounded-xl bg-mq-premium-gold px-5 text-sm font-black text-[#0A1F44] transition hover:brightness-110"
              >
                Practicar ahora
              </Link>
              <p className="mt-2 text-[11px] text-slate-500">
                Elige Cardiología, Neumología, Pediatría… o un bloque mixto.
              </p>
            </article>
            <article
              className={`rounded-2xl border p-6 ${
                dueReviewCount > 0
                  ? "border-mq-premium-gold/40 bg-mq-premium-gold/[0.06]"
                  : "border-white/10 bg-white/[0.04]"
              }`}
            >
              <Layers className="h-5 w-5 text-mq-premium-gold" />
              <h3 className="mt-3 text-lg font-bold text-white">Repaso de errores</h3>
              <p className="mt-1 text-sm text-slate-300">
                {dueReviewCount > 0
                  ? `${dueReviewCount} ${dueReviewCount === 1 ? "pregunta pendiente" : "preguntas pendientes"} hoy`
                  : "Nada pendiente hoy"}
              </p>
              <Link
                href="/dashboard/mir/repaso"
                className={`mt-4 inline-flex min-h-10 items-center justify-center rounded-xl px-5 text-sm font-black transition ${
                  dueReviewCount > 0
                    ? "bg-mq-premium-gold text-[#0A1F44] hover:brightness-110"
                    : "border border-white/20 text-white hover:border-white/40"
                }`}
              >
                {dueReviewCount > 0 ? "Repasar ahora" : "Ver mi repaso"}
              </Link>
              <p className="mt-2 text-[11px] text-slate-500">
                Tus fallos vuelven a los 1, 3 y 7 días hasta que los domines.
              </p>
            </article>
            {MIR_EXAM_EDITIONS.map((edition) => {
              const lastAttempt = attemptsByEdition[edition.code];
              return (
                <article
                  key={edition.code}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <Timer className="h-5 w-5 text-mq-premium-gold" />
                  <h3 className="mt-3 text-lg font-bold text-white">{edition.label}</h3>
                  <p className="mt-1 text-sm text-slate-300">
                    {edition.questionCount} preguntas · {edition.minutes} min
                  </p>
                  <Link
                    href="/dashboard/mir/simulacro"
                    className="mt-4 inline-flex min-h-10 items-center justify-center rounded-xl bg-mq-premium-gold px-5 text-sm font-black text-[#0A1F44] transition hover:brightness-110"
                  >
                    {lastAttempt ? "Repetir simulacro" : "Hacer simulacro"}
                  </Link>
                  <p className="mt-2 text-[11px] text-slate-500">
                    {lastAttempt
                      ? `Último intento: ${lastAttempt.scorePercentage}% (${lastAttempt.correctAnswers}/${edition.questionCount} correctas).`
                      : "Simulacro completo y cronometrado, con revisión detallada al terminar."}
                  </p>
                </article>
              );
            })}
            <div className="flex items-end gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-6 lg:col-span-3">
              <MirDoctorMascot className="h-32 w-24 shrink-0" />
              <div className="rounded-2xl rounded-bl-none border border-white/10 bg-white/[0.06] px-4 py-3">
                <p className="text-xs font-black text-mq-premium-gold">¡Hola, {greetingName}!</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-200">
                  {getMascotMessage(greetingName, streak, hasAnyActivity, dueReviewCount)}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-[2rem] border border-dashed border-white/20 bg-white/[0.02] p-10 text-center">
            <p className="text-sm font-semibold text-slate-300">
              Tu acceso al módulo MIR está activo. El banco de preguntas se está cargando y estará
              disponible aquí en los próximos días.
            </p>
          </div>
        )}
      </section>

      {hasContent ? (
        <section>
          <div className="mb-3 flex items-center gap-2">
            <MapIcon className="h-4 w-4 text-mq-premium-gold" />
            <h2 className="text-sm font-black uppercase tracking-wide text-white">Tu dominio por especialidad</h2>
          </div>
          <MirMasteryCard userId={userId} />
        </section>
      ) : null}
    </div>
  );
}
