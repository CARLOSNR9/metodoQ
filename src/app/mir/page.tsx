import Link from "next/link";
import { CheckCircle2, ClipboardCheck, Globe2, Target } from "lucide-react";
import { getMirWhatsAppUrl } from "@/lib/mir/config";
import { MirHeroIllustration } from "@/components/landing/mir-hero-illustration";

/**
 * Landing de venta del módulo "Simulacro MIR". Tema visual oscuro/dorado,
 * deliberadamente distinto del resto de Método Q (enfocado en exámenes
 * colombianos), para señalar que este es un módulo aparte: preparación
 * para el examen MIR (España), un examen internacional.
 *
 * El acceso se negocia por WhatsApp (sin precio ni checkout público
 * mientras no haya precio definido).
 *
 * TODO(negocio/marketing): completar copy y testimonios antes de publicar.
 * No hay contenido inventado de AMIR ni de terceros aquí.
 */
const FAQ_ITEMS = [
  {
    question: "¿Este módulo reemplaza mi plan actual de Método Q?",
    answer:
      "No. Es un módulo independiente que se suma a tu cuenta, sin afectar tu plan mensual para exámenes de universidades colombianas.",
  },
  {
    question: "¿Cuánto cuesta y cómo lo compro?",
    answer:
      "Escríbenos por WhatsApp y te contamos las condiciones de acceso para la convocatoria del examen MIR.",
  },
  {
    question: "¿Puedo probarlo antes de contactarlos?",
    answer:
      "Sí, puedes acceder a una demo gratuita con una muestra limitada de preguntas antes de escribirnos.",
  },
];

export default function MirLandingPage() {
  const whatsappUrl = getMirWhatsAppUrl();

  return (
    <main className="flex flex-1 flex-col bg-[#0A1F44]">
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div className="text-center lg:text-left">
            <p className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em] text-mq-premium-gold">
              <Globe2 className="h-3.5 w-3.5" />
              Método Q · Módulo internacional
            </p>
            <h1 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
              Prepárate para el examen MIR con Método Q
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base font-medium text-slate-300 sm:text-lg lg:mx-0">
              Banco de preguntas de examen, simulacros cronometrados y seguimiento de tu
              progreso, en un módulo dedicado dentro de tu dashboard de Método Q.
            </p>
            <p className="mx-auto mt-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold text-slate-200 lg:mx-0">
              Examen MIR: sábado 23 de enero de 2027
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-mq-premium-gold px-8 text-sm font-black text-[#0A1F44] transition hover:brightness-110"
              >
                Contáctanos por WhatsApp
              </a>
              <Link
                href="/mir/demo"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 px-8 text-sm font-bold text-white transition hover:border-white/40"
              >
                Probar demo gratuita
              </Link>
            </div>
          </div>

          <MirHeroIllustration />
        </div>
      </section>

      <section className="border-t border-white/10 py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 sm:grid-cols-3 sm:px-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center">
            <ClipboardCheck className="mx-auto h-8 w-8 text-mq-premium-gold" />
            <h3 className="mt-4 text-sm font-black text-white">Banco de preguntas</h3>
            <p className="mt-2 text-sm text-slate-300">
              Práctica basada en convocatorias oficiales del examen.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center">
            <Target className="mx-auto h-8 w-8 text-mq-premium-gold" />
            <h3 className="mt-4 text-sm font-black text-white">Simulacros cronometrados</h3>
            <p className="mt-2 text-sm text-slate-300">
              Condiciones similares al examen real, con resultados por tema.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center">
            <CheckCircle2 className="mx-auto h-8 w-8 text-mq-premium-gold" />
            <h3 className="mt-4 text-sm font-black text-white">Seguimiento de progreso</h3>
            <p className="mt-2 text-sm text-slate-300">
              Identifica tus fortalezas y debilidades por área.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-[11px] font-black uppercase tracking-[0.22em] text-mq-premium-gold">
            Módulo MIR
          </p>
          <h2 className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">
            Preguntas frecuentes
          </h2>
          <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.04]">
            {FAQ_ITEMS.map((item) => (
              <details key={item.question} className="group px-5 py-0 sm:px-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-sm font-semibold text-white sm:py-5 sm:text-base [&::-webkit-details-marker]:hidden">
                  <span>{item.question}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-mq-premium-gold transition duration-200 group-open:rotate-45">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="pb-5 pr-2 text-sm leading-relaxed text-slate-300 sm:text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
