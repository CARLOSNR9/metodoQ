"use client";

import Link from "next/link";
import { ArrowRight, Check, GalleryHorizontalEnd, Layers, PartyPopper, Stethoscope, Target } from "lucide-react";
import type { MirDailyPlan, MirPlanStep } from "@/lib/training/mir-daily-plan";

const numberFormat = new Intl.NumberFormat("es-ES", { useGrouping: "always" });

function getTodayLabel(now: Date = new Date()): string {
  const label = now.toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long" });
  return label.charAt(0).toLocaleUpperCase("es") + label.slice(1);
}

type StepCopy = {
  icon: typeof Layers;
  title: string;
  detail: string;
  /** Progreso propio del paso (p. ej. 4/20); null si no se mide así. */
  progress: { value: number; goal: number } | null;
  cta: string;
};

function getStepCopy(step: MirPlanStep): StepCopy {
  switch (step.id) {
    case "review":
      return {
        icon: Layers,
        title: step.completed ? "Repaso de errores al día" : "Repasa tus errores",
        detail: step.completed
          ? "No te queda ningún fallo pendiente para hoy."
          : `${step.pending} ${step.pending === 1 ? "pregunta vuelve" : "preguntas vuelven"} hoy para que no se te olviden.`,
        progress: null,
        cta: "Repasar",
      };
    case "practice": {
      const { specialty } = step;
      const where = specialty ? specialty.label : "un bloque mixto";
      const why = !specialty
        ? "Preguntas de todas las especialidades."
        : specialty.accuracy === null
          ? "Aún no la has empezado."
          : `Es tu especialidad más floja (${specialty.accuracy} % de acierto).`;
      return {
        icon: Stethoscope,
        title: `Responde ${step.goal} preguntas · empieza por ${where}`,
        detail: why,
        progress: { value: step.answeredToday, goal: step.goal },
        cta: "Practicar",
      };
    }
    case "flashcards":
      return {
        icon: GalleryHorizontalEnd,
        title: `Una ronda de ${step.goal} tarjetas`,
        detail: "Puntos clave para fijar lo que ya has estudiado.",
        progress: { value: step.ratedToday, goal: step.goal },
        cta: "Repasar tarjetas",
      };
  }
}

function StepRow({ step, isNext }: { step: MirPlanStep; isNext: boolean }) {
  const copy = getStepCopy(step);
  const Icon = copy.icon;
  const percent = copy.progress ? Math.min(100, (copy.progress.value / copy.progress.goal) * 100) : 0;

  const rowClassName = `flex items-center gap-3 rounded-xl border px-4 py-3 ${
    isNext ? "border-mq-premium-gold/40 bg-mq-premium-gold/[0.06]" : "border-white/10 bg-white/[0.03]"
  }`;
  const content = (
    <>
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
          step.completed ? "bg-emerald-400/15 text-emerald-300" : "bg-white/[0.06] text-mq-premium-gold"
        }`}
      >
        {step.completed ? <Check className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
      </span>
      <div className="min-w-0 flex-1">
        <p className={`text-sm font-bold ${step.completed ? "text-slate-400 line-through decoration-slate-500" : "text-white"}`}>
          {copy.title}
        </p>
        <p className="text-xs text-slate-400">{copy.detail}</p>
        {copy.progress && !step.completed ? (
          <div className="mt-2 flex items-center gap-2">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/[0.08]">
              <div className="h-full rounded-full bg-mq-premium-gold" style={{ width: `${percent}%` }} />
            </div>
            <span className="shrink-0 text-[11px] font-bold text-slate-300">
              {Math.min(copy.progress.value, copy.progress.goal)}/{copy.progress.goal}
            </span>
          </div>
        ) : null}
      </div>
      {!step.completed ? (
        <span className="hidden shrink-0 rounded-lg border border-white/20 px-3 py-1.5 text-xs font-black text-white transition group-hover:border-white/40 sm:inline-flex">
          {copy.cta}
        </span>
      ) : null}
    </>
  );

  // Un paso pendiente es pulsable entero (en móvil no cabe el botón).
  return (
    <li>
      {step.completed ? (
        <div className={rowClassName}>{content}</div>
      ) : (
        <Link href={step.href} className={`group ${rowClassName} transition hover:bg-white/[0.06]`}>
          {content}
        </Link>
      )}
    </li>
  );
}

/**
 * «Tu plan de hoy»: los pasos que tocan hoy (repaso, práctica y tarjetas),
 * el ritmo necesario para ver todo el banco antes del examen y un único
 * botón que lleva al siguiente paso pendiente.
 */
export function MirDailyPlanCard({ plan }: { plan: MirDailyPlan | null }) {
  if (!plan) {
    return <div className="h-64 animate-pulse rounded-2xl border border-white/10 bg-white/[0.03]" />;
  }

  const { pace, steps, completedCount, nextStep } = plan;
  const allDone = nextStep === null;
  const progressPercent = (completedCount / steps.length) * 100;

  return (
    <div className="rounded-2xl border border-mq-premium-gold/25 bg-gradient-to-br from-mq-premium-gold/[0.08] to-white/[0.02] p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">{getTodayLabel()}</p>
          <h3 className="mt-1 text-xl font-black text-white">
            {allDone ? "¡Plan de hoy completado!" : "Esto es lo que toca hoy"}
          </h3>
          <p className="mt-1 flex items-start gap-1.5 text-xs text-slate-300">
            <Target className="mt-0.5 h-3.5 w-3.5 shrink-0 text-mq-premium-gold" />
            <span>
              {pace.unseenCount === 0
                ? "Ya has visto todo el banco: ahora toca afianzar con repaso y simulacros."
                : `Te quedan ${numberFormat.format(pace.unseenCount)} preguntas sin ver y ${pace.daysLeft} ${pace.daysLeft === 1 ? "día" : "días"}: unas ${pace.perDay} al día para verlas todas antes del examen.`}
            </span>
          </p>
        </div>
        <div className="w-full sm:w-44">
          <p className="text-right text-xs font-bold text-slate-300">
            {completedCount} de {steps.length} completado
          </p>
          <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/[0.08]">
            <div
              className="h-full rounded-full bg-mq-premium-gold transition-all"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      <ol className="mt-5 space-y-2">
        {steps.map((step) => (
          <StepRow key={step.id} step={step} isNext={step === nextStep} />
        ))}
      </ol>

      {nextStep === null ? (
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-3">
          <p className="flex items-center gap-2 text-sm font-semibold text-emerald-200">
            <PartyPopper className="h-4 w-4" />
            Gran trabajo. Si te quedan fuerzas, un simulacro te dirá cómo vas.
          </p>
          <Link
            href="/dashboard/mir/simulacro"
            className="inline-flex min-h-10 items-center gap-1.5 rounded-xl border border-white/20 px-4 text-sm font-black text-white transition hover:border-white/40"
          >
            Hacer un simulacro
          </Link>
        </div>
      ) : (
        <Link
          href={nextStep.href}
          className="mt-5 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-mq-premium-gold px-5 text-sm font-black text-[#0A1F44] transition hover:brightness-110"
        >
          {completedCount === 0 ? "Empezar mi sesión de hoy" : "Continuar con el plan"}
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}
