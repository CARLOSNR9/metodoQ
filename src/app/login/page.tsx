"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { loginWithEmail, loginWithGoogle } from "@/lib/auth";

function getLoginErrorMessage(errorCode: string) {
  if (
    errorCode === "auth/invalid-credential" ||
    errorCode === "auth/user-not-found" ||
    errorCode === "auth/wrong-password"
  ) {
    return "Email o contraseña incorrectos.";
  }

  if (errorCode === "auth/invalid-email") {
    return "El formato del email no es válido.";
  }

  if (errorCode === "auth/too-many-requests") {
    return "Demasiados intentos. Intenta de nuevo en unos minutos.";
  }

  if (errorCode === "auth/popup-closed-by-user") {
    return "Se cerró la ventana de Google antes de completar.";
  }

  return "No se pudo iniciar sesión. Inténtalo de nuevo.";
}

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleSubmitting, setIsGoogleSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      await loginWithEmail(email.trim(), password);
      router.push("/dashboard");
    } catch (error) {
      const code = (error as { code?: string }).code ?? "";
      setErrorMessage(getLoginErrorMessage(code));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleLogin = async () => {
    setErrorMessage("");
    setIsGoogleSubmitting(true);

    try {
      await loginWithGoogle();
      router.push("/dashboard");
    } catch (error) {
      const code = (error as { code?: string }).code ?? "";
      setErrorMessage(getLoginErrorMessage(code));
    } finally {
      setIsGoogleSubmitting(false);
    }
  };

  return (
    <main className="flex flex-1 bg-[#0A1F44]">
      <section className="mx-auto flex w-full max-w-md flex-1 items-center px-4 py-12 sm:px-6">
        <article className="w-full rounded-2xl border border-mq-border-strong bg-mq-surface p-6 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] backdrop-blur-sm sm:p-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white">Bienvenido</h1>
            <p className="mt-2 text-sm text-mq-muted">
              Entrena con inteligencia y domina tu examen.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <button
              onClick={handleGoogleLogin}
              disabled={isGoogleSubmitting || isSubmitting}
              className="flex min-h-12 w-full items-center justify-center gap-3 rounded-xl border border-mq-border bg-white/[0.03] px-4 text-sm font-semibold text-white transition duration-200 hover:border-white/40 hover:bg-white/[0.07] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isGoogleSubmitting ? (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-white" />
              ) : (
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              )}
              Continuar con Google
            </button>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-mq-border/50"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase tracking-widest">
                <span className="bg-mq-surface px-3 text-mq-muted">o usa tu email</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="min-h-12 w-full rounded-xl border border-mq-border bg-white/[0.04] px-4 text-sm text-foreground outline-none transition focus:border-mq-accent focus:ring-2 focus:ring-mq-accent/20"
                  placeholder="Email"
                />
              </div>

              <div>
                <input
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="min-h-12 w-full rounded-xl border border-mq-border bg-white/[0.04] px-4 text-sm text-foreground outline-none transition focus:border-mq-accent focus:ring-2 focus:ring-mq-accent/20"
                  placeholder="Contraseña"
                />
              </div>

              {errorMessage ? (
                <p className="rounded-lg border border-rose-400/20 bg-rose-500/10 px-3 py-2 text-xs text-rose-200">
                  {errorMessage}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting || isGoogleSubmitting}
                className="touch-manipulation flex min-h-12 w-full items-center justify-center rounded-xl bg-mq-accent px-5 text-sm font-bold text-mq-accent-foreground transition duration-200 hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Ingresando..." : "Ingresar"}
              </button>
            </form>
          </div>

          <p className="mt-8 text-center text-sm text-mq-muted">
            ¿No tienes cuenta?{" "}
            <Link href="/register" className="font-bold text-mq-accent hover:underline">
              Crear cuenta
            </Link>
          </p>
        </article>
      </section>
    </main>
  );
}
