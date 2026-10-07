import Link from "next/link";
import { ArrowRight, BookOpenCheck, MessageCircle, RotateCcw, Timer } from "lucide-react";
import { getMirWhatsAppUrl, MIR_PRICE_LABEL } from "@/lib/mir/config";
import { MIR_OFFICIAL_QUESTIONS } from "@/lib/training/mir-convocatoria";

const formatCount = (value: number) => new Intl.NumberFormat("es-ES").format(value);

/**
 * Bloque destacado del examen MIR en la portada: el MIR es en enero y es la
 * prioridad comercial. Dos acciones claras: probar gratis o hablar con un
 * médico por WhatsApp.
 */
export function MirSpotlightSection() {
  const years = new Set(MIR_OFFICIAL_QUESTIONS.map((question) => question.officialExam?.year));
  const highlights = [
    {
      icon: BookOpenCheck,
      title: `${formatCount(MIR_OFFICIAL_QUESTIONS.length)} preguntas reales`,
      text: `De los ${years.size} últimos exámenes MIR (2016-2025), con explicación de cada una.`,
    },
    {
      icon: Timer,
      title: "Simulacros cronometrados",
      text: "Al ritmo real del examen y con tu nota en netas.",
    },
    {
      icon: RotateCcw,
      title: "Repaso de tus fallos",
      text: "Tus errores vuelven a los 1, 3 y 7 días hasta que los domines.",
    },
  ];

  return (
    <section id="mir" className="bg-[#0A1F44] py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-mq-premium-gold/40 bg-mq-premium-gold/10 px-3 py-1 text-[11px] font-black uppercase tracking-widest text-mq-premium-gold">
            Examen MIR · 23 de enero de 2027
          </span>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-5xl">
            ¿Te presentas al MIR? <span className="text-mq-premium-gold">Entrena con el examen real.</span>
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">
            Preguntas oficiales de los últimos años, explicadas por médicos, para que llegues a enero
            sabiendo exactamente qué te van a preguntar.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
          {highlights.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <Icon className="h-6 w-6 text-mq-premium-gold" />
              <p className="mt-3 text-lg font-bold text-white">{title}</p>
              <p className="mt-1 text-sm text-slate-300">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/mir/demo"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-mq-premium-gold px-6 text-base font-black text-[#0A1F44] transition hover:brightness-110"
            >
              Prueba 10 preguntas gratis
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={getMirWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/25 px-6 text-base font-bold text-white transition hover:border-white/50"
            >
              <MessageCircle className="h-4 w-4" />
              Habla con un médico
            </a>
          </div>
          <p className="text-sm text-slate-400">
            Acceso MIR: <span className="font-bold text-white">{MIR_PRICE_LABEL}</span> · 6 meses, pago único ·{" "}
            <Link href="/mir" className="font-semibold text-mq-premium-gold hover:underline">
              Ver el módulo MIR
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
