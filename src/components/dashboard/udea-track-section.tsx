"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BookOpenCheck,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  Landmark,
  Scale,
  Sparkles,
} from "lucide-react";
import {
  getCurrentUdeaPhase,
  getDaysUntilUdeaExam,
  UDEA_EXAM_INFO,
  UDEA_PHASES,
  UDEA_REAL_EXAM_BLUEPRINT,
} from "@/lib/diagnostic/udea-track";
import { isMedicinaDeporteSpecialty } from "@/lib/diagnostic/university-match";
import { getFeaturedConvocatoriaEditionForUser } from "@/lib/training/udea-convocatoria";

type UdeaTrackSectionProps = {
  specialty?: string | null;
  planStartedAt?: string | null;
  /** Ya presentó el diagnóstico UdeA: se marca en la hoja de ruta. */
  diagnosticDone?: boolean;
};

export const UDEA_SPORTS_PRACTICE_HREF = `/dashboard/entrenar?topic=${encodeURIComponent("medicina del deporte")}&count=10`;
export const UDEA_PEDIATRICS_PRACTICE_HREF = `/dashboard/entrenar?topic=${encodeURIComponent("pediatría")}&count=10`;

/** Encabezado y hoja de ruta del espacio UdeA (Medellín). */
export function UdeaTrackSection({
  specialty,
  planStartedAt,
  diagnosticDone = false,
}: UdeaTrackSectionProps) {
  const today = new Date();
  const daysLeft = getDaysUntilUdeaExam(today);
  const weeksLeft = Math.max(1, Math.round(daysLeft / 7));
  const phase = getCurrentUdeaPhase(today);
  const featured = getFeaturedConvocatoriaEditionForUser(planStartedAt, today);
  const isSports = isMedicinaDeporteSpecialty(specialty);
  const specialtyLabel = specialty || "tu especialidad";

  return (
    <section id="udea" className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-[1.75rem] border border-emerald-200 bg-gradient-to-br from-white via-white to-emerald-50 p-6 shadow-sm sm:p-8"
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-600/10 blur-3xl" />

        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700">
              <Landmark size={12} />
              Universidad de Antioquia · Medellín
            </span>
            <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              Tu camino a {specialtyLabel} en la UdeA
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              En la UdeA todas las especialidades clínicas presentan el <strong>mismo examen de
              medicina general</strong>. Por eso tu entrenamiento cubre todas las áreas, empezando
              por un <strong>examen real de admisión de la UdeA</strong>, y suma una ruta de{" "}
              {isSports ? "medicina del deporte" : specialtyLabel.toLowerCase()} para la entrevista
              y para mantener viva tu motivación.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-4 rounded-2xl border border-emerald-200 bg-white px-5 py-4 shadow-sm">
            <CalendarClock size={28} className="text-emerald-700" />
            <div>
              <p className="text-3xl font-black leading-none text-slate-900">{daysLeft}</p>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                días al examen
              </p>
              <p className="text-[11px] text-slate-500">
                ≈ {weeksLeft} semanas · {UDEA_EXAM_INFO.estimatedExamLabel}
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <ActionCard
            href="/dashboard/convocatorias"
            icon={<ClipboardCheck size={18} />}
            title={featured ? `${featured.label} disponible` : "Simulacros UdeA"}
            subtitle="70 preg en 105 min"
            primary
          />
          <ActionCard
            href="/dashboard/entrenar"
            icon={<GraduationCap size={18} />}
            title="Medicina general"
            subtitle="Entrenamiento adaptativo diario"
          />
          <ActionCard
            href={UDEA_PEDIATRICS_PRACTICE_HREF}
            icon={<Scale size={18} />}
            title="Pediatría y normas MSPS"
            subtitle="Dengue, desnutrición, tamizajes, AIEPI"
          />
          <ActionCard
            href={UDEA_SPORTS_PRACTICE_HREF}
            icon={<Activity size={18} />}
            title="Ruta Medicina del Deporte"
            subtitle="Muerte súbita, conmoción, lesiones, METs"
          />
        </div>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm lg:col-span-3 lg:self-start">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700">
            Hoja de ruta · Fase {phase.id} de {UDEA_PHASES.length}
          </p>
          <h3 className="mt-1 text-xl font-black text-slate-900">{phase.title}</h3>
          <p className="text-sm text-slate-500">
            {phase.window} · {phase.focus}
          </p>
          <ul className="mt-4 space-y-2">
            {phase.goals.map((goal) => {
              const done = diagnosticDone && /diagn[oó]stico/i.test(goal);
              return (
                <li
                  key={goal}
                  className={`flex items-start gap-2 text-sm ${done ? "text-emerald-700" : "text-slate-700"}`}
                >
                  {done ? (
                    <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-emerald-600" />
                  ) : (
                    <Sparkles size={14} className="mt-0.5 shrink-0 text-emerald-600" />
                  )}
                  <span className={done ? "line-through decoration-emerald-400" : ""}>{goal}</span>
                </li>
              );
            })}
          </ul>
          <ol className="mt-6 space-y-3 border-t border-slate-100 pt-5">
            {UDEA_PHASES.map((item) => {
              const isCurrent = item.id === phase.id;
              const isDone = item.id < phase.id;
              return (
                <li key={item.id} className="flex gap-3">
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-black ${
                      isCurrent
                        ? "bg-emerald-700 text-white"
                        : isDone
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {item.id}
                  </span>
                  <div className="min-w-0">
                    <p className={`text-sm font-bold ${isCurrent ? "text-emerald-800" : "text-slate-800"}`}>
                      {item.title}
                      <span className="font-medium text-slate-500"> · {item.window}</span>
                      {isCurrent ? (
                        <span className="ml-2 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-emerald-700">
                          Estás aquí
                        </span>
                      ) : null}
                    </p>
                    <p className="text-xs text-slate-500">{item.focus}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <BookOpenCheck size={18} className="text-emerald-700" />
              <h3 className="text-base font-black text-slate-900">Así es el examen</h3>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-slate-500">
              Reparto por área del examen real de la UdeA ({UDEA_EXAM_INFO.realExamQuestions}{" "}
              preguntas):
            </p>
            <ul className="mt-3 space-y-1.5">
              {UDEA_REAL_EXAM_BLUEPRINT.map((item) => (
                <li key={item.area} className="flex items-center gap-3 text-sm text-slate-600">
                  <span className="w-40 shrink-0 truncate">{item.area}</span>
                  <span className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                    <span
                      className="block h-full rounded-full bg-emerald-500"
                      style={{ width: `${Math.round((item.count / 14) * 100)}%` }}
                    />
                  </span>
                  <span className="w-6 text-right text-xs font-bold text-slate-700">{item.count}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-slate-500">
              Selección múltiple con única respuesta (3 o 4 opciones), casos clínicos largos y
              normas recientes del Ministerio de Salud. Inscripciones:{" "}
              {UDEA_EXAM_INFO.estimatedInscriptionsLabel}. Confirma siempre la fecha en la
              convocatoria oficial de posgrados en udea.edu.co.
            </p>
            <p className="mt-2 rounded-xl bg-amber-50 px-3 py-2 text-xs leading-relaxed text-amber-800">
              La UdeA sanciona el ingreso de celulares, relojes inteligentes y cualquier dispositivo
              electrónico al examen. Practica los simulacros sin nada a la mano.
            </p>
          </div>

          {isSports ? (
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700">Tu meta</p>
              <h3 className="mt-1 text-base font-black text-slate-900">Medicina del Deporte</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                El examen es de medicina general, pero tu área sí aparece: en el examen real hay
                preguntas de prescripción del ejercicio con METs, esguince de tobillo y luxación
                acromioclavicular. Tu ruta suma cardiología del deportista, conmoción, golpe de
                calor, fracturas por estrés, dopaje y RED-S.
              </p>
              <Link
                href="/dashboard/ultra-resumenes?categoria=medicina-deporte"
                className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-emerald-700 hover:underline"
              >
                Ultra resumen de medicina del deporte
                <ArrowRight size={14} />
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function ActionCard({
  href,
  icon,
  title,
  subtitle,
  primary = false,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  primary?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group flex items-center gap-3 rounded-2xl border px-4 py-3 transition-all hover:-translate-y-0.5 hover:shadow-md ${
        primary
          ? "border-emerald-700 bg-emerald-700 text-white"
          : "border-slate-200 bg-white text-slate-900 hover:border-emerald-200"
      }`}
    >
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
          primary ? "bg-white/15 text-white" : "bg-emerald-50 text-emerald-700"
        }`}
      >
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-black">{title}</span>
        <span className={`block text-xs leading-snug ${primary ? "text-white/80" : "text-slate-500"}`}>
          {subtitle}
        </span>
      </span>
    </Link>
  );
}
