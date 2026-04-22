"use client";

import { CheckCircle2, XCircle } from "lucide-react";

export function ObjectionSection() {
  const comparisons = [
    {
      question: "¿Es mejor que ChatGPT?",
      answer: "Sí, porque ChatGPT te da mucha información. Método Q la filtra, la estructura y te la explica usando una técnica de aprendizaje real. Menos ruido, más claridad.",
    },
    {
      question: "¿Por qué no usar Google o YouTube?",
      answer: "En Google pierdes horas saltando de link en link. En Método Q tienes la respuesta exacta y fácil de entender en segundos. Ahorras tiempo, ganas comprensión.",
    },
    {
      question: "¿Realmente funciona para temas complejos?",
      answer: "Absolutamente. Desde física cuántica hasta una receta de cocina. Nuestra IA está entrenada para simplificar lo más difícil sin perder la esencia.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-mq-surface/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-bold uppercase tracking-wider text-mq-accent">
            Sin dudas
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Respondemos lo que estás pensando
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {comparisons.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col rounded-2xl border border-mq-border bg-background/50 p-8 shadow-sm transition-all duration-300 hover:border-mq-accent/30 hover:shadow-mq-accent/5"
            >
              <h3 className="text-lg font-bold text-white">
                {item.question}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-mq-muted">
                {item.answer}
              </p>
              
              <div className="mt-8 flex items-center gap-2 text-sm font-bold text-mq-accent">
                <CheckCircle2 className="h-5 w-5" />
                Método Q lo resuelve
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-4 rounded-full border border-mq-border bg-white/[0.02] px-6 py-3 text-sm font-medium text-mq-muted">
            <span>¿Más dudas?</span>
            <a href="#faq" className="font-bold text-white hover:text-mq-accent transition">
              Lee las preguntas frecuentes →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
