"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getUserWeakTopics, type WeakTopicItem } from "@/lib/results";
import { hasProFeatures, type StoredUserPlan } from "@/lib/plans/access";
import { getPlanUpgradeCta } from "@/lib/plans/upgrade-cta";
import { AlertTriangle, Lightbulb, Lock } from "lucide-react";

type WeakTopicsCardProps = {
  userId: string;
  /** Usuario con plan PRO o Residente: sin candados en temas secundarios. */
  isProUser?: boolean;
  userPlan?: StoredUserPlan | null;
};

const TOPIC_HACKS: Record<string, { title: string; content: string }> = {
  "Semiología": {
    title: "Hack de Oro: Soplos",
    content: "Para diferenciar soplos de insuficiencia mitral vs estenosis aórtica: la irradiación a la axila siempre apunta a la mitral."
  },
  "Medicina Interna": {
    title: "Tip de Supervivencia: CAD",
    content: "En Cetoacidosis Diabética, nunca inicies insulina si el potasio es < 3.3 mEq/L. Es una pregunta trampa frecuente."
  },
  "Cirugía General": {
    title: "Hack: Escala de Alvarado",
    content: "El síntoma de mayor peso en Alvarado es el dolor que migra a FID (2 puntos). Si no migra, sospecha otro diagnóstico."
  },
  "Ginecología": {
    title: "Tip: Código Rojo",
    content: "El primer paso ante hemorragia posparto con útero atónico es el masaje uterino bimanual, incluso antes de los fármacos."
  },
  "Pediatría": {
    title: "Hack: Líquidos",
    content: "Para deshidratación grado III, el bolo inicial es de 20ml/kg de cristaloides isotónicos. No uses dextrosa para expandir."
  },
  "Salud Pública": {
    title: "Tip: Dengue",
    content: "La caída de la fiebre marca el inicio de la fase crítica. Es el momento de mayor riesgo de extravasación de plasma."
  }
};

export function WeakTopicsCard({
  userId,
  isProUser: isProUserProp = false,
  userPlan,
}: WeakTopicsCardProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [topics, setTopics] = useState<WeakTopicItem[]>([]);
  const isProUser = isProUserProp || hasProFeatures(userPlan);
  const upgradeCta = getPlanUpgradeCta(userPlan);

  useEffect(() => {
    let isMounted = true;

    async function loadWeakTopics() {
      setIsLoading(true);

      try {
        const items = await getUserWeakTopics(userId);
        if (!isMounted) return;
        setTopics(items);
      } catch (error) {
        console.error("No se pudieron cargar los puntos debiles.", error);
        if (!isMounted) return;
        setTopics([]);
      } finally {
        if (!isMounted) return;
        setIsLoading(false);
      }
    }

    void loadWeakTopics();

    return () => {
      isMounted = false;
    };
  }, [userId]);

  // Si no estamos cargando y no hay temas, ocultamos el componente completamente
  if (!isLoading && topics.length === 0) {
    return null;
  }

  const mainWeakness = topics[0];
  const hack = mainWeakness ? TOPIC_HACKS[mainWeakness.topic] || TOPIC_HACKS["Medicina Interna"] : null;

  return (
    <section className="mq-glass overflow-hidden rounded-3xl p-6 transition-all hover:border-rose-500/50">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/10 text-rose-400">
          <AlertTriangle size={20} />
        </div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-mq-muted">Áreas de Mejora</p>
      </div>

      {isLoading ? (
        <div className="mt-8 flex items-center gap-3">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-rose-400 border-t-transparent" />
          <p className="text-sm text-rose-200">Sincronizando análisis...</p>
        </div>
      ) : (
        <div className="mt-6 space-y-6">
          {/* TEASER DE SUPERVIVENCIA */}
          {hack && (
            <div className="relative overflow-hidden rounded-2xl border border-mq-accent/30 bg-mq-accent/5 p-5">
              <div className="relative z-10 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Lightbulb size={16} className="text-mq-accent" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-mq-accent">Perla de Supervivencia</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">{hack.title}</h4>
                  <p className="text-xs text-mq-muted leading-relaxed">
                    {hack.content}
                  </p>
                </div>
              </div>
              <div className="absolute -right-4 -top-4 opacity-5">
                <Lightbulb size={80} />
              </div>
            </div>
          )}

          <ul className="space-y-3">
            {topics.map((item, i) => (
              <li
                key={item.topic}
                className="group flex flex-col gap-4 rounded-2xl bg-white/[0.03] p-4 transition-all hover:bg-white/[0.06] sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${i === 0 ? "bg-rose-500/20 text-rose-400" : "bg-white/5 text-mq-muted"}`}>
                    <span className="text-xs font-bold">{i + 1}</span>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-sm font-bold text-white">
                      {item.topic}
                    </p>
                    <p className="text-[10px] text-rose-400 font-medium">
                      {item.wrongCount} errores críticos
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  {i > 0 && !isProUser && (
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-mq-muted/30">
                       <Lock size={14} />
                    </div>
                  )}
                  <Link
                    href={`/dashboard/entrenar?topic=${encodeURIComponent(item.topic)}`}
                    className={`inline-flex h-9 items-center justify-center rounded-lg px-4 text-xs font-bold transition-all ${i === 0 || isProUser ? "bg-mq-accent text-mq-accent-foreground hover:scale-105" : "bg-white/10 text-white hover:bg-white/20"}`}
                  >
                    {i === 0 || isProUser ? "Reforzar ahora" : "Ver más"}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
          
          {upgradeCta ? (
            <div className="pt-2">
              <Link
                href={upgradeCta.href}
                className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-mq-muted transition-colors hover:text-mq-accent"
              >
                {upgradeCta.planId === "PRO" ? (
                  <>
                    <Lock size={12} /> Desbloquear arsenal completo de perlas
                  </>
                ) : (
                  <>Conoce el plan Residente — acompañamiento 1 a 1</>
                )}
              </Link>
            </div>
          ) : null}
        </div>
      )}
    </section>
  );
}
