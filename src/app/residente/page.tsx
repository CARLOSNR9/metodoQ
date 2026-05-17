"use client";

import Link from "next/link";
import { useState } from "react";
import { getFirebaseAuth } from "@/lib/firebase";
import { PLANS } from "@/lib/plans/config";
import { getWhatsAppSupportUrl } from "@/lib/contact/whatsapp";
import { submitResidenteApplicationAction } from "@/app/residente/actions";
import { Check } from "lucide-react";

const residentePlan = PLANS.find((p) => p.id === "RESIDENTE")!;

export default function ResidentePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [university, setUniversity] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const whatsappUrl = getWhatsAppSupportUrl(
    `Hola, quiero postular al Plan Residente de Método Q. Mi nombre es ${name || "[nombre]"}.`,
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const user = getFirebaseAuth().currentUser;
      const result = await submitResidenteApplicationAction({
        name,
        email,
        phone,
        university,
        message,
        userId: user?.uid ?? null,
      });

      if (result.error) {
        setError(result.error);
        return;
      }

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError("No pudimos enviar tu postulación. Intenta de nuevo o escríbenos por WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-1 bg-[#0A1F44]">
      <section className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Postulación Plan <span className="text-mq-accent">Residente</span>
          </h1>
          <p className="mt-3 text-mq-muted max-w-2xl mx-auto">
            Acompañamiento élite con seguimiento 1 a 1. Cuéntanos sobre ti y el equipo te contactará en menos de 48 horas.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-mq-border-strong bg-mq-surface-raised p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-white">Qué incluye</h2>
            <ul className="mt-4 space-y-3">
              {residentePlan.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-mq-accent" />
                  {f}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-mq-muted">
              Desde {residentePlan.prices[1].monthly.toLocaleString("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 })} / mes
            </p>
          </article>

          <article className="rounded-2xl border border-mq-border-strong bg-mq-surface-raised p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-8">
                <p className="text-lg font-semibold text-white">¡Postulación recibida!</p>
                <p className="mt-2 text-sm text-mq-muted">
                  Revisaremos tu perfil y te escribiremos pronto al correo indicado.
                </p>
                <Link href="/dashboard" className="mt-6 inline-flex text-mq-accent font-semibold hover:underline">
                  Volver al dashboard
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold uppercase text-mq-muted">Nombre completo</label>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-mq-border bg-mq-surface px-4 py-2.5 text-white outline-none focus:border-mq-accent"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase text-mq-muted">Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-mq-border bg-mq-surface px-4 py-2.5 text-white outline-none focus:border-mq-accent"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase text-mq-muted">WhatsApp</label>
                  <input
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+57 300 000 0000"
                    className="mt-1 w-full rounded-lg border border-mq-border bg-mq-surface px-4 py-2.5 text-white outline-none focus:border-mq-accent"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase text-mq-muted">Universidad objetivo</label>
                  <input
                    required
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-mq-border bg-mq-surface px-4 py-2.5 text-white outline-none focus:border-mq-accent"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase text-mq-muted">Mensaje (opcional)</label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-mq-border bg-mq-surface px-4 py-2.5 text-white outline-none focus:border-mq-accent resize-none"
                  />
                </div>
                {error && (
                  <div className="space-y-2">
                    <p className="text-sm text-rose-400">{error}</p>
                    {whatsappUrl ? (
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-mq-accent hover:underline"
                      >
                        Escribir por WhatsApp
                      </a>
                    ) : null}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-mq-accent py-3 font-bold text-mq-accent-foreground hover:brightness-110 disabled:opacity-60"
                >
                  {isSubmitting ? "Enviando..." : "Enviar postulación"}
                </button>
              </form>
            )}
          </article>
        </div>
      </section>
    </main>
  );
}
