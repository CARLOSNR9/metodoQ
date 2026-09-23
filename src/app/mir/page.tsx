import Link from "next/link";
import { CheckCircle2, ClipboardCheck, Target } from "lucide-react";
import { FAQSection } from "@/components/landing/faq-section";
import { getMirWhatsAppUrl } from "@/lib/mir/config";

/**
 * Landing de venta del módulo "Simulacro MIR". El acceso se negocia por
 * WhatsApp (sin precio ni checkout público mientras no haya banco de
 * preguntas ni precio definidos).
 *
 * TODO(negocio/marketing): completar copy y testimonios antes de publicar.
 * No hay contenido inventado de AMIR ni de terceros aquí.
 */
export default function MirLandingPage() {
  const whatsappUrl = getMirWhatsAppUrl();

  return (
    <main className="flex flex-1 flex-col bg-background">
      <section className="mx-auto w-full max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <p className="text-[11px] font-black uppercase tracking-[0.25em] text-mq-accent">
          Método Q · Módulo especial
        </p>
        <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
          Prepárate para el examen MIR con Método Q
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base font-medium text-slate-500 sm:text-lg">
          Banco de preguntas de examen, simulacros cronometrados y seguimiento de tu
          progreso, en un módulo dedicado dentro de tu dashboard de Método Q.
        </p>
        <p className="mx-auto mt-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-bold text-slate-600">
          Examen MIR: sábado 23 de enero de 2027
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-mq-accent px-8 text-sm font-black text-mq-accent-foreground transition hover:brightness-110"
          >
            Contáctanos por WhatsApp
          </a>
          <Link
            href="/demo"
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-200 px-8 text-sm font-bold text-slate-600 transition hover:border-slate-300"
          >
            Probar demo gratuita
          </Link>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 sm:grid-cols-3 sm:px-6">
          <div className="text-center">
            <ClipboardCheck className="mx-auto h-8 w-8 text-mq-accent" />
            <h3 className="mt-4 text-sm font-black text-slate-900">Banco de preguntas</h3>
            <p className="mt-2 text-sm text-slate-500">
              Práctica basada en convocatorias oficiales del examen.
            </p>
          </div>
          <div className="text-center">
            <Target className="mx-auto h-8 w-8 text-mq-accent" />
            <h3 className="mt-4 text-sm font-black text-slate-900">Simulacros cronometrados</h3>
            <p className="mt-2 text-sm text-slate-500">
              Condiciones similares al examen real, con resultados por tema.
            </p>
          </div>
          <div className="text-center">
            <CheckCircle2 className="mx-auto h-8 w-8 text-mq-accent" />
            <h3 className="mt-4 text-sm font-black text-slate-900">Seguimiento de progreso</h3>
            <p className="mt-2 text-sm text-slate-500">
              Identifica tus fortalezas y debilidades por área.
            </p>
          </div>
        </div>
      </section>

      <FAQSection
        eyebrow="Módulo MIR"
        title="Preguntas frecuentes sobre el módulo MIR"
        items={[
          {
            question: "¿Este módulo reemplaza mi plan actual de Método Q?",
            answer:
              "No. Es un módulo independiente que se suma a tu cuenta, sin afectar tu plan mensual.",
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
        ]}
      />
    </main>
  );
}
