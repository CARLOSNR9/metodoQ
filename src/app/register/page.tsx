"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { registerWithEmail } from "@/lib/auth";

function getRegisterErrorMessage(errorCode: string) {
  if (errorCode === "auth/email-already-in-use") {
    return "Este email ya esta registrado.";
  }

  if (errorCode === "auth/invalid-email") {
    return "El formato del email no es valido.";
  }

  if (errorCode === "auth/weak-password") {
    return "La contrasena debe tener al menos 6 caracteres.";
  }

  return "No se pudo crear la cuenta. Intentalo de nuevo.";
}

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      await registerWithEmail(email.trim(), password);
      router.push("/demo");
    } catch (error) {
      const code = (error as { code?: string }).code ?? "";
      setErrorMessage(getRegisterErrorMessage(code));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex flex-1 bg-[#0A1F44]">
      <section className="mx-auto flex w-full max-w-md flex-1 items-center px-4 py-12 sm:px-6">
        <article className="w-full rounded-2xl border border-mq-border-strong bg-mq-surface p-6 shadow-[0_24px_60px_-36px_rgb(0_209_255/0.45)] sm:p-8">
          <h1 className="text-2xl font-semibold text-white">Crear cuenta</h1>
          <p className="mt-2 text-sm text-mq-muted">
            Crea tu usuario para empezar a entrenar con Metodo Q.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-foreground">
                Email
              </span>
              <input
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="min-h-12 w-full rounded-xl border border-mq-border bg-white/[0.04] px-4 text-foreground outline-none transition focus:border-mq-accent focus:ring-2 focus:ring-mq-accent/30"
                placeholder="tu@email.com"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-foreground">
                Password
              </span>
              <input
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="min-h-12 w-full rounded-xl border border-mq-border bg-white/[0.04] px-4 text-foreground outline-none transition focus:border-mq-accent focus:ring-2 focus:ring-mq-accent/30"
                placeholder="Minimo 6 caracteres"
              />
            </label>

            {errorMessage ? (
              <p className="rounded-lg border border-rose-400/30 bg-rose-500/10 px-3 py-2 text-sm text-rose-200">
                {errorMessage}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="touch-manipulation inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-mq-accent px-5 text-sm font-semibold text-mq-accent-foreground transition duration-150 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Creando cuenta..." : "Crear cuenta"}
            </button>
          </form>

          <p className="mt-5 text-sm text-mq-muted">
            Ya tienes cuenta?{" "}
            <Link href="/login" className="font-semibold text-mq-accent">
              Ingresar
            </Link>
          </p>
        </article>
      </section>
    </main>
  );
}
