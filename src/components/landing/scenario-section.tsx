"use client";

import { Clock, Search, Zap, Trophy, ArrowRight } from "lucide-react";

export function ScenarioSection() {
  const steps = [
    {
      title: "La Guardia Interminable",
      description: "Son las 3 AM. Intentas repasar un tema crucial para tu examen, pero el cansancio y el texto denso de los tratados de medicina no te dejan avanzar.",
      icon: Clock,
      color: "text-red-400",
      glow: "group-hover:shadow-[0_0_20px_rgba(248,113,113,0.3)]",
      border: "group-hover:border-red-400/30"
    },
    {
      title: "El Laberinto de Guías",
      description: "Buscas en GPC y artículos médicos, pero cada texto te lleva a otro más confuso. Sientes que pierdes el tiempo en datos irrelevantes.",
      icon: Search,
      color: "text-orange-400",
      glow: "group-hover:shadow-[0_0_20px_rgba(251,146,60,0.3)]",
      border: "group-hover:border-orange-400/30"
    },
    {
      title: "Claridad al Instante",
      description: "Abres Método Q. Escribes ese concepto complejo y recibes una síntesis perfecta que finalmente 'hace clic' en segundos.",
      icon: Zap,
      color: "text-mq-accent",
      glow: "group-hover:shadow-[0_0_20px_rgba(0,209,255,0.3)]",
      border: "group-hover:border-mq-accent/30"
    },
    {
      title: "Residente de Élite",
      description: "Llegas al examen o al pase de visita con total seguridad. No solo memorizaste, ahora comprendes la lógica médica y vas a destacar.",
      icon: Trophy,
      color: "text-green-400",
      glow: "group-hover:shadow-[0_0_20px_rgba(74,222,128,0.3)]",
      border: "group-hover:border-green-400/30"
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-mq-accent/5 blur-[120px] rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-20">
          <h2 className="text-base font-bold uppercase tracking-widest text-mq-accent">
            Tu nueva realidad
          </h2>
          <p className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            De la confusión a la <span className="text-mq-accent">maestría</span>
          </p>
          <p className="mt-6 text-lg leading-relaxed text-mq-muted">
            El camino tradicional es frustrante. Con Método Q, rediseñamos tu forma de aprender para que el éxito sea inevitable.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-[4.5rem] left-0 w-full h-0.5 bg-gradient-to-r from-red-400/20 via-orange-400/20 via-mq-accent/20 to-green-400/20 hidden lg:block" />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                {/* Icon Container */}
                <div className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-mq-surface border border-mq-border transition-all duration-500 ${step.glow} ${step.border}`}>
                  <step.icon className={`h-8 w-8 ${step.color} transition-transform duration-500 group-hover:scale-110`} />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-mq-surface-light border border-mq-border text-[10px] font-bold text-white">
                    0{index + 1}
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-mq-accent">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-mq-muted transition-colors duration-300">
                    {step.description}
                  </p>
                </div>

                {/* Mobile Connector */}
                {index < steps.length - 1 && (
                  <div className="mt-8 flex justify-center lg:hidden">
                    <ArrowRight className="h-6 w-6 text-mq-border rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Closing CTA */}
        <div className="mt-24 flex justify-center">
          <button className="group relative px-8 py-4 bg-mq-accent/10 border border-mq-accent/20 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-mq-accent hover:border-mq-accent shadow-lg hover:shadow-mq-accent/20">
            <span className="relative z-10 font-bold text-mq-accent group-hover:text-mq-accent-foreground transition-colors duration-300">
              ¿Listo para cambiar tu historia? Empieza gratis
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
