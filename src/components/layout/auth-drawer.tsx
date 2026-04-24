"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Mail, Facebook, Chrome } from "lucide-react";
import { useRouter } from "next/navigation";
import { loginWithEmail, loginWithGoogle, loginWithFacebook } from "@/lib/auth";
import { Logo } from "@/components/ui/logo";

interface AuthDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthDrawer({ isOpen, onClose }: AuthDrawerProps) {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Prevent scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSocialLogin = async (provider: "google" | "facebook") => {
    setError("");
    setIsLoading(true);
    try {
      if (provider === "google") {
        await loginWithGoogle();
      } else {
        await loginWithFacebook();
      }
      router.push("/dashboard");
      onClose();
    } catch (err: any) {
      setError(err.message || "Error al iniciar sesión con redes sociales.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      if (mode === "login") {
        await loginWithEmail(email.trim(), password);
        router.push("/dashboard");
      } else {
        router.push("/register");
      }
      onClose();
    } catch (err: any) {
      setError(err.message || "Ocurrió un error al intentar ingresar.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!mounted) return null;

  return createPortal(
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/85 backdrop-blur-md transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div
        className={`fixed inset-y-0 right-0 z-[70] w-full max-w-md border-l border-mq-accent/20 bg-mq-surface shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) sm:max-w-[440px] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Accent Glow Line */}
        <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-mq-accent to-transparent opacity-50" />
        <div className="flex h-full flex-col p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <Logo />
            <button
              onClick={onClose}
              className="rounded-full p-2 text-mq-muted transition hover:bg-white/5 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-12 flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold text-white">
              {mode === "login" ? "Inicia sesión" : "Crea tu cuenta"}
            </h2>
            <p className="mt-2 text-mq-muted">
              {mode === "login"
                ? "Accede para continuar tu entrenamiento."
                : "Únete a la comunidad de Método Q."}
            </p>
          </div>

          {/* Social Logins */}
          <div className="mt-10 grid grid-cols-2 gap-4">
            <button
              onClick={() => handleSocialLogin("google")}
              disabled={isLoading}
              className="flex h-12 items-center justify-center gap-3 rounded-xl border border-mq-border bg-white/[0.04] px-4 text-sm font-semibold text-white transition hover:bg-white/[0.08] disabled:opacity-50"
            >
              <Chrome className="h-5 w-5" />
              Google
            </button>
            <button
              onClick={() => handleSocialLogin("facebook")}
              disabled={isLoading}
              className="flex h-12 items-center justify-center gap-3 rounded-xl border border-mq-border bg-white/[0.04] px-4 text-sm font-semibold text-white transition hover:bg-white/[0.08] disabled:opacity-50"
            >
              <Facebook className="h-5 w-5 fill-current" />
              Facebook
            </button>
          </div>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-mq-border/50"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-mq-surface px-4 text-mq-muted">o con tu email</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-mq-muted">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-mq-muted/50" />
                <input
                  type="email"
                  required
                  placeholder="nombre@ejemplo.com"
                  className="h-12 w-full rounded-xl border border-mq-border bg-white/[0.04] pl-12 pr-4 text-white outline-none transition focus:border-mq-accent focus:ring-1 focus:ring-mq-accent/30"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-mq-muted">
                Contraseña
              </label>
              <input
                type="password"
                required
                placeholder="••••••••"
                className="h-12 w-full rounded-xl border border-mq-border bg-white/[0.04] px-4 text-white outline-none transition focus:border-mq-accent focus:ring-1 focus:ring-mq-accent/30"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && (
              <p className="rounded-lg bg-red-500/10 p-3 text-xs font-medium text-red-400 border border-red-500/20">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="mt-4 flex h-12 w-full items-center justify-center rounded-xl bg-mq-accent text-sm font-bold text-mq-accent-foreground shadow-[0_0_20px_rgba(0,209,255,0.3)] transition hover:brightness-110 active:scale-[0.98] disabled:opacity-50"
            >
              {isLoading ? "Cargando..." : mode === "login" ? "Entrar ahora" : "Registrarme"}
            </button>
          </form>

          {/* Footer Toggle */}
          <div className="mt-auto pt-8 text-center text-sm text-mq-muted">
            {mode === "login" ? (
              <>
                ¿No tienes una cuenta?{" "}
                <button
                  onClick={() => setMode("register")}
                  className="font-bold text-mq-accent hover:underline"
                >
                  Regístrate gratis
                </button>
              </>
            ) : (
              <>
                ¿Ya tienes una cuenta?{" "}
                <button
                  onClick={() => setMode("login")}
                  className="font-bold text-mq-accent hover:underline"
                >
                  Inicia sesión
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}
