"use client";

import { Target, Zap, Layout } from "lucide-react";

const benefits = [
  {
    title: "Domina la práctica, no la teoría",
    description: "No pierdas tiempo leyendo pdfs interminables. Enfrenta simulaciones reales y afianza el conocimiento un 300% más rápido.",
    icon: Target,
    color: "text-mq-accent",
    bg: "bg-mq-accent/10",
  },
  {
    title: "IA como tu tutor personal 24/7",
    description: "Cada error es una lección. Nuestra IA detecta tus puntos débiles y te explica el 'por qué' al instante, sin frustraciones.",
    icon: Zap,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  {
    title: "Elimina el relleno, aprueba antes",
    description: "Ruta de aprendizaje hiper-personalizada. Estudia estrictamente lo que necesitas para tu examen y recupera tu tiempo libre.",
    icon: Layout,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
];

export function BenefitsSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Optimiza tu aprendizaje al <span className="text-mq-accent">máximo</span>
          </h2>
          <p className="mt-4 text-lg text-mq-muted max-w-2xl mx-auto">
            Diseñado para personas que no tienen tiempo que perder y buscan resultados reales.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center p-8 rounded-3xl border border-mq-border bg-mq-surface/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-mq-surface hover:border-mq-accent/20"
            >
              <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${benefit.bg} ${benefit.color} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                <benefit.icon className="h-8 w-8" />
              </div>
              
              <h3 className="mb-4 text-xl font-bold text-white text-center">
                {benefit.title}
              </h3>
              
              <p className="text-center text-mq-muted leading-relaxed">
                {benefit.description}
              </p>

              {/* Decorative hover effect */}
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-b from-mq-accent/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 bg-mq-accent/5 blur-[120px]" />
    </section>
  );
}
