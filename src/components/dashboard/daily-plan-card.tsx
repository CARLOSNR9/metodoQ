"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Stethoscope } from "lucide-react";
import { getUserDemoResults } from "@/lib/results";
import { getTodayMissionQuestionsCount } from "@/lib/training/daily-activity";

type DailyPlanCardProps = {
  userId: string;
  dailyTarget?: number;
  weakTopic?: string | null;
  universityLabel?: string | null;
  trainHref?: string;
  needsDiagnostic?: boolean;
  onStartDiagnostic?: () => void;
  isTrial?: boolean;
};

export function DailyPlanCard({
  userId,
  dailyTarget = 10,
  weakTopic,
  universityLabel,
  trainHref = "/dashboard/entrenar",
  needsDiagnostic = false,
  onStartDiagnostic,
  isTrial = false,
}: DailyPlanCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [todayCount, setTodayCount] = useState(0);

  useEffect(() => {
    let isMounted = true;

    async function loadTodayProgress() {
      setIsLoading(true);

      try {
        const results = await getUserDemoResults(userId);
        if (!isMounted) return;
        setTodayCount(getTodayMissionQuestionsCount(results));
      } catch (error) {
        console.error("No se pudo cargar el progreso diario.", error);
        if (!isMounted) return;
        setTodayCount(0);
      } finally {
        if (!isMounted) return;
        setIsLoading(false);
      }
    }

    void loadTodayProgress();

    return () => {
      isMounted = false;
    };
  }, [userId]);

  const remaining = Math.max(dailyTarget - todayCount, 0);
  const done = !needsDiagnostic && remaining === 0 && todayCount > 0;
  const progressPct = needsDiagnostic
    ? 0
    : Math.min(100, Math.round((todayCount / Math.max(dailyTarget, 1)) * 100));
  const plaza = universityLabel
    ? `tu plaza en ${universityLabel}`
    : "tu residencia";

  let title: string;
  let body: string;
  let cta: string;

  if (needsDiagnostic) {
    title = "Hoy: diagnóstico de 10 preguntas";
    body = `Antes de entrenar a ciegas, calibra tu nivel rumbo a ${plaza}. En 10 preguntas vemos qué temas te pueden dejar por fuera el día del examen.`;
    cta = "Empezar diagnóstico";
  } else if (done) {
    title = "Meta de hoy cerrada";
    body = weakTopic
      ? `Ya cumpliste las ${dailyTarget} preguntas. Si te queda energía, refuerza ${weakTopic}: es el tema que más te está costando.`
      : `Ya cumpliste las ${dailyTarget} preguntas. Una sesión extra consolida lo que viste hoy, que es lo que cuenta en el simulacro.`;
    cta = "Seguir entrenando";
  } else {
    const topicBit = weakTopic ? ` de ${weakTopic}` : "";
    title =
      todayCount > 0
        ? `Hoy: te faltan ${remaining} pregunta${remaining === 1 ? "" : "s"}${topicBit}`
        : `Hoy: ${dailyTarget} preguntas${topicBit}`;
    body = isTrial
      ? `Practica el método con una sesión corta rumbo a ${plaza}. El cupo se gana cerrando preguntas, no leyendo más capítulos.`
      : `Cierra el cupo diario rumbo a ${plaza}. En residencia no gana quien más leyó; gana quien llega al simulacro con las brechas tapadas.`;
    cta = todayCount > 0 ? "Continuar entrenamiento" : "Entrenar ahora";
  }

  const ctaClassName =
    "group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-mq-accent px-6 text-sm font-black text-mq-accent-foreground transition-all hover:brightness-110 active:scale-[0.98] sm:w-auto";

  return (
    <section className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-mq-accent/10 text-mq-accent">
          <Stethoscope size={20} />
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
            Misión de hoy
          </p>
          <p className="text-xs font-medium text-slate-500">
            {universityLabel ?? "Examen de residencia"}
          </p>
        </div>
      </div>

      <div className="mt-5 space-y-4">
        <h2 className="text-2xl font-black tracking-tight text-slate-900">{title}</h2>
        <p className="max-w-xl text-sm leading-relaxed text-slate-600">{body}</p>

        {!needsDiagnostic ? (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500">
              <span>Cupo diario</span>
              <span className={done ? "text-emerald-600" : "text-slate-900"}>
                {isLoading ? "…" : `${todayCount}/${dailyTarget}`}
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className={`h-full rounded-full transition-all ${done ? "bg-emerald-500" : "bg-mq-accent"}`}
                style={{ width: `${isLoading ? 0 : progressPct}%` }}
              />
            </div>
          </div>
        ) : null}

        {needsDiagnostic && onStartDiagnostic ? (
          <button type="button" onClick={onStartDiagnostic} className={ctaClassName}>
            <span>{cta}</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        ) : (
          <Link href={needsDiagnostic ? "/dashboard/diagnostico?source=act1" : trainHref} className={ctaClassName}>
            <span>{cta}</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    </section>
  );
}
