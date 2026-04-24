"use client";

import { Clock, Search, Zap, Trophy, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function ScenarioSection() {
  const steps = [
    {
      title: "Estudias, pero no avanzas",
      description: "Lees horas… pero en el examen fallas lo mismo.",
      icon: Clock,
      color: "text-red-400",
      glow: "group-hover:shadow-[0_0_20px_rgba(248,113,113,0.3)]",
      border: "group-hover:border-red-400/30"
    },
    {
      title: "Te pierdes en información",
      description: "Guías, PDFs, cursos… todo menos lo que importa.",
      icon: Search,
      color: "text-orange-400",
      glow: "group-hover:shadow-[0_0_20px_rgba(251,146,60,0.3)]",
      border: "group-hover:border-orange-400/30"
    },
    {
      title: "Empiezas a entender por fin",
      description: "Detectas tus errores y corriges lo que sí te baja puntos.",
      icon: Zap,
      color: "text-mq-accent",
      glow: "group-hover:shadow-[0_0_20px_rgba(0,209,255,0.3)]",
      border: "group-hover:border-mq-accent/30"
    },
    {
      title: "Llegas listo al examen",
      description: "Sin adivinar. Sin ansiedad. Con seguridad real.",
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
            De fallar el examen… a <span className="text-mq-accent">dominarlo.</span>
          </p>
          <p className="mt-6 text-lg leading-relaxed text-mq-muted font-medium">
            No es que no estudies. Es que estás estudiando mal.
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

        {/* Dashboard Preview Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 relative"
        >
          <div className="absolute inset-0 bg-mq-accent/5 blur-[100px] rounded-full -z-10" />
          
          <div className="relative mx-auto max-w-4xl rounded-3xl border border-mq-border-strong bg-mq-surface/50 backdrop-blur-sm p-4 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.7)]">
            {/* Fake Dashboard UI */}
            <div className="rounded-2xl bg-[#0B1221] overflow-hidden border border-mq-border/30">
              <div className="flex items-center justify-between px-6 py-4 border-b border-mq-border/20 bg-mq-surface/20">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-mq-accent/20 flex items-center justify-center">
                    <Zap className="h-4 w-4 text-mq-accent" />
                  </div>
                  <div className="h-2 w-24 bg-mq-border/40 rounded-full" />
                </div>
                <div className="flex gap-2">
                  <div className="h-2 w-12 bg-mq-border/20 rounded-full" />
                  <div className="h-2 w-12 bg-mq-border/20 rounded-full" />
                </div>
              </div>
              
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                  <div className="h-40 rounded-xl bg-mq-surface/30 border border-mq-border/10 p-6">
                    <div className="flex justify-between items-end h-full gap-2">
                      {[40, 70, 45, 90, 65, 80, 95].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${h}%` }}
                          transition={{ delay: i * 0.1, duration: 1 }}
                          className="w-full bg-gradient-to-t from-mq-accent/40 to-mq-accent rounded-t-md relative group"
                        >
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-mq-accent text-[10px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            {h}%
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 rounded-xl bg-mq-surface/20 border border-mq-border/10" />
                    <div className="h-20 rounded-xl bg-mq-surface/20 border border-mq-border/10" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl border border-mq-accent/20 bg-mq-accent/5">
                    <div className="flex items-center gap-3 mb-4">
                      <Trophy className="h-5 w-5 text-yellow-500" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">Logros</span>
                    </div>
                    <div className="space-y-3">
                      <div className="h-1.5 w-full bg-mq-border/20 rounded-full overflow-hidden">
                        <div className="h-full w-[85%] bg-yellow-500" />
                      </div>
                      <div className="h-1.5 w-full bg-mq-border/20 rounded-full overflow-hidden">
                        <div className="h-full w-[40%] bg-mq-accent" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl border border-mq-border/20 bg-mq-surface/20">
                    <div className="h-2 w-full bg-mq-border/20 rounded-full mb-3" />
                    <div className="h-2 w-[60%] bg-mq-border/20 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Closing CTA */}
        <div className="mt-24 flex justify-center">
          <button className="group relative px-8 py-4 bg-mq-accent/10 border border-mq-accent/20 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-mq-accent hover:border-mq-accent shadow-lg hover:shadow-mq-accent/20">
            <span className="relative z-10 font-bold text-mq-accent group-hover:text-mq-accent-foreground transition-colors duration-300">
              Empieza tu entrenamiento ahora
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
