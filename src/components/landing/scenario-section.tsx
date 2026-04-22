"use client";

import { Clock, Search, BookOpen, CheckCircle } from "lucide-react";

export function ScenarioSection() {
  const steps = [
    {
      title: "El Estrés",
      description: "Tienes un examen mañana. Abres tus apuntes... y no entiendes absolutamente nada. El pánico empieza a subir.",
      icon: Clock,
      color: "text-red-400",
    },
    {
      title: "La Confusión",
      description: "Buscas en Google, ves 5 videos de YouTube de 20 minutos cada uno. Terminas más confundido que al principio.",
      icon: Search,
      color: "text-orange-400",
    },
    {
      title: "El Momento Q",
      description: "Entras a Método Q. Escribes tu duda. En 5 segundos recibes una explicación que 'hace clic' en tu cabeza.",
      icon: BookOpen,
      color: "text-mq-accent",
    },
    {
      title: "La Claridad",
      description: "Lo entiendes. Puedes explicarlo con tus propias palabras. Vas al examen con confianza. Lo lograste.",
      icon: CheckCircle,
      color: "text-green-400",
    },
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-bold uppercase tracking-wider text-mq-accent">
            Tu nueva realidad
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            De la confusión a la claridad en segundos
          </p>
          <p className="mt-6 text-lg leading-relaxed text-mq-muted">
            Todos hemos pasado por esto. Método Q es la pieza que faltaba en tu forma de aprender.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-start rounded-2xl border border-mq-border bg-mq-surface p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.04]"
              >
                <div className={`rounded-lg bg-background p-3 shadow-sm ${step.color}`}>
                  <step.icon className="h-6 w-6" />
                </div>
                
                <h3 className="mt-6 text-xl font-bold text-white group-hover:text-mq-accent transition">
                  {step.title}
                </h3>
                
                <p className="mt-4 text-sm leading-relaxed text-mq-muted">
                  {step.description}
                </p>
                
                {index < steps.length - 1 && (
                  <div className="absolute -right-2 top-1/2 hidden h-px w-4 bg-mq-border lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
