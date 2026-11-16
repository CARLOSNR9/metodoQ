"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpenCheck,
  CalendarClock,
  ClipboardCheck,
  GraduationCap,
  Landmark,
  Microscope,
  Scale,
  Sparkles,
} from "lucide-react";
import {
  getCurrentUnivallePhase,
  getDaysUntilUnivalleExam,
  UNIVALLE_DERMATOLOGY_PROGRAM,
  UNIVALLE_EXAM_INFO,
  UNIVALLE_PHASES,
} from "@/lib/diagnostic/univalle-track";
import { isDermatologiaSpecialty } from "@/lib/diagnostic/university-match";
import { getFeaturedConvocatoriaEditionForUser } from "@/lib/training/univalle-convocatoria";

type UnivalleTrackSectionProps = {
  specialty?: string | null;
  planStartedAt?: string | null;
};

export const UNIVALLE_DERMATOLOGY_PRACTICE_HREF = `/dashboard/entrenar?topic=${encodeURIComponent("dermatología")}&count=10`;
export const UNIVALLE_NORMATIVIDAD_PRACTICE_HREF = `/dashboard/entrenar?topic=${encodeURIComponent("legislación")}&count=10`;

/** Encabezado y hoja de ruta del espacio Univalle (Cali). */
export function UnivalleTrackSection({ specialty, planStartedAt }: UnivalleTrackSectionProps) {
  const today = new Date();
  const daysLeft = getDaysUntilUnivalleExam(today);
  const weeksLeft = Math.max(1, Math.round(daysLeft / 7));
  const phase = getCurrentUnivallePhase(today);
  const featured = getFeaturedConvocatoriaEditionForUser(planStartedAt, today);
  const isDerm = isDermatologiaSpecialty(specialty);
  const specialtyLabel = specialty || "tu especialidad";

  return (
    <section id="univalle" className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-[1.75rem] border border-red-200 bg-gradient-to-br from-white via-white to-red-50 p-6 shadow-sm sm:p-8"
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-red-600/10 blur-3xl" />

        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-red-700">
              <Landmark size={12} />
              Universidad del Valle · Cali
            </span>
            <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              Tu camino a {isDerm ? "Dermatología" : specialtyLabel} en Univalle
            </h2>
            <p className="text-sm leading-relaxed text-slate-600">
              En Univalle todos los aspirantes presentan el <strong>mismo examen de medicina
              general</strong>, sin importar la especialidad. Por eso tu entrenamiento cubre todas las
              áreas, con un bloque propio de normatividad colombiana y una ruta de{" "}
              {isDerm ? "dermatología" : specialtyLabel.toLowerCase()} para la entrevista y para
              mantener viva tu motivación.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-4 rounded-2xl border border-red-200 bg-white px-5 py-4 shadow-sm">
            <CalendarClock size={28} className="text-red-700" />
            <div>
              <p className="text-3xl font-black leading-none text-slate-900">{daysLeft}</p>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                días al examen
              </p>
              <p className="text-[11px] text-slate-500">≈ {weeksLeft} semanas · {UNIVALLE_EXAM_INFO.estimatedExamLabel}</p>
            </div>
          </div>
        </div>

        <div className="relative mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <ActionCard
            href="/dashboard/convocatorias"
            icon={<ClipboardCheck size={18} />}
            title={featured ? `${featured.label} disponible` : "Simulacros Univalle"}
            subtitle="100 preg en 150 min"
            primary
          />
          <ActionCard
            href="/dashboard/entrenar"
            icon={<GraduationCap size={18} />}
            title="Medicina general"
            subtitle="Entrenamiento adaptativo diario"
          />
          <ActionCard
            href={UNIVALLE_NORMATIVIDAD_PRACTICE_HREF}
            icon={<Scale size={18} />}
            title="Normatividad colombiana"
            subtitle="Ley 23, 1751, 3280, IVE, triage…"
          />
          <ActionCard
            href={UNIVALLE_DERMATOLOGY_PRACTICE_HREF}
            icon={<Microscope size={18} />}
            title="Ruta Dermatología"
            subtitle="Tropical, cáncer de piel, ampollas"
          />
        </div>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm lg:col-span-3 lg:self-start">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-700">
            Hoja de ruta · Fase {phase.id} de {UNIVALLE_PHASES.length}
          </p>
          <h3 className="mt-1 text-xl font-black text-slate-900">{phase.title}</h3>
          <p className="text-sm text-slate-500">
            {phase.window} · {phase.focus}
          </p>
          <ul className="mt-4 space-y-2">
            {phase.goals.map((goal) => (
              <li key={goal} className="flex items-start gap-2 text-sm text-slate-700">
                <Sparkles size={14} className="mt-0.5 shrink-0 text-red-600" />
                {goal}
              </li>
            ))}
          </ul>
          <ol className="mt-6 space-y-3 border-t border-slate-100 pt-5">
            {UNIVALLE_PHASES.map((item) => {
              const isCurrent = item.id === phase.id;
              const isDone = item.id < phase.id;
              return (
                <li key={item.id} className="flex gap-3">
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-black ${
                      isCurrent
                        ? "bg-red-700 text-white"
                        : isDone
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {item.id}
                  </span>
                  <div className="min-w-0">
                    <p className={`text-sm font-bold ${isCurrent ? "text-red-800" : "text-slate-800"}`}>
                      {item.title}
                      <span className="font-medium text-slate-500"> · {item.window}</span>
                      {isCurrent ? (
                        <span className="ml-2 rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-red-700">
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
              <BookOpenCheck size={18} className="text-red-700" />
              <h3 className="text-base font-black text-slate-900">Así es el examen</h3>
            </div>
            <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
              {UNIVALLE_EXAM_INFO.examAreas.map((area) => (
                <li key={area}>• {area}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {UNIVALLE_EXAM_INFO.weighting.map((item) => (
                <span
                  key={item.label}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700"
                >
                  {item.label}: {item.value}
                </span>
              ))}
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate-500">
              Selección múltiple con única respuesta. Aspirantes reportan{" "}
              {UNIVALLE_EXAM_INFO.reportedQuestionsRange} preguntas en{" "}
              {UNIVALLE_EXAM_INFO.reportedDurationRange}. Inscripciones:{" "}
              {UNIVALLE_EXAM_INFO.estimatedInscriptionsLabel}. Confirma siempre la convocatoria
              oficial en admisiones.univalle.edu.co.
            </p>
            <p className="mt-2 rounded-xl bg-amber-50 px-3 py-2 text-xs leading-relaxed text-amber-800">
              El inglés y la cultura general no están en el banco de Método Q. Te sugerimos 15
              minutos diarios de lectura de artículos médicos en inglés y seguir noticias
              nacionales.
            </p>
          </div>

          {isDerm ? (
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-700">Tu meta</p>
              <h3 className="mt-1 text-base font-black text-slate-900">
                {UNIVALLE_DERMATOLOGY_PROGRAM.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {UNIVALLE_DERMATOLOGY_PROGRAM.durationYears} años en el{" "}
                {UNIVALLE_DERMATOLOGY_PROGRAM.hospital}, donde el programa nació en{" "}
                {UNIVALLE_DERMATOLOGY_PROGRAM.foundedYear} bajo la dirección del{" "}
                {UNIVALLE_DERMATOLOGY_PROGRAM.founder}, pionero mundial de la cirugía del vitíligo.
                Atiende pacientes de todo el suroccidente colombiano.
              </p>
              <Link
                href="/dashboard/ultra-resumenes?categoria=dermatologia"
                className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-red-700 hover:underline"
              >
                Ultra resumen de dermatología
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
          ? "border-red-700 bg-red-700 text-white"
          : "border-slate-200 bg-white text-slate-900 hover:border-red-200"
      }`}
    >
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
          primary ? "bg-white/15 text-white" : "bg-red-50 text-red-700"
        }`}
      >
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-black">{title}</span>
        <span className={`block truncate text-xs ${primary ? "text-white/80" : "text-slate-500"}`}>
          {subtitle}
        </span>
      </span>
    </Link>
  );
}
