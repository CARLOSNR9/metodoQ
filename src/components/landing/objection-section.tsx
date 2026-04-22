"use client";

import { CheckCircle2, XCircle } from "lucide-react";

export function ObjectionSection() {
  const comparisons = [
    {
      title: "Vs. ChatGPT",
      bad: "Escupe paredes de texto genéricas, requiere prompts complejos y a veces alucina información.",
      good: "IA pre-configurada que aplica la Técnica de Feynman. Te obliga a practicar y razonar, no solo a leer pasivamente.",
    },
    {
      title: "Vs. YouTube y Google",
      bad: "Pierdes 40 minutos buscando un buen video, te frustras y terminas distrayéndote con el algoritmo.",
      good: "Ve directo a la práctica. Simula exámenes en segundos y descubre exactamente qué parte no entiendes.",
    },
    {
      title: "Vs. Cursos Tradicionales",
      bad: "Te obligan a seguir un temario lineal, pagando por horas de contenido que ya dominas o no necesitas.",
      good: "Ruta hiper-personalizada. Si te equivocas, la IA asume el rol de un tutor experto. Pagas por resultados, no por horas.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-mq-surface/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-bold uppercase tracking-wider text-mq-accent">
            Sin rodeos
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            ¿Por qué no usar simplemente ChatGPT o Google?
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {comparisons.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col rounded-3xl border border-mq-border bg-background/50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-mq-accent/30 hover:shadow-[0_0_30px_rgba(0,209,255,0.05)]"
            >
              <h3 className="mb-6 text-xl font-bold text-white text-center border-b border-mq-border/50 pb-4">
                {item.title}
              </h3>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-3">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400/80" />
                  <p className="text-sm leading-relaxed text-mq-muted/80">
                    <span className="font-semibold text-red-200/80 block mb-1">El problema:</span>
                    {item.bad}
                  </p>
                </div>
                
                <div className="flex items-start gap-3 rounded-2xl bg-mq-accent/5 p-4 border border-mq-accent/10">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-mq-accent" />
                  <p className="text-sm leading-relaxed text-mq-muted">
                    <span className="font-semibold text-white block mb-1">La ventaja Q:</span>
                    {item.good}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-4 rounded-full border border-mq-border bg-white/[0.02] px-6 py-3 text-sm font-medium text-mq-muted backdrop-blur-sm">
            <span>¿Aún tienes dudas sobre cómo funciona?</span>
            <a href="#como-funciona" className="font-bold text-white hover:text-mq-accent transition">
              Mira el método en acción →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
