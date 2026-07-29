"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Mail, EyeOff, Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import { loginWithEmail, loginWithGoogle } from "@/lib/auth";
import { sendWelcomeEmailIfPossible } from "@/lib/client/send-welcome-email";
import { Logo } from "@/components/ui/logo";

interface AuthDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

function GoogleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export function AuthDrawer({ isOpen, onClose }: AuthDrawerProps) {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

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

  const handleSocialLogin = async (provider: "google") => {
    setError("");
    setIsLoading(true);
    try {
      const { credential, isNewUser } = await loginWithGoogle();
      if (isNewUser) {
        await sendWelcomeEmailIfPossible(credential.user.displayName);
      }
      const { resolvePostLoginPath } = await import("@/lib/client/post-login");
      const path = await resolvePostLoginPath(credential.user.uid, credential.user.email);
      router.push(path);
      onClose();
    } catch (err: any) {
      console.error("Error completo de login social:", err);
      const errorMessage = err.message || "Error al iniciar sesión con redes sociales.";
      setError(errorMessage);
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
        try {
          const credential = await loginWithEmail(email.trim(), password);
          const { resolvePostLoginPath } = await import("@/lib/client/post-login");
          const path = await resolvePostLoginPath(credential.user.uid, credential.user.email);
          router.push(path);
          onClose();
        } catch (err: any) {
          setMode("register");
          setError("No pudimos validar tus datos. Si eres nuevo, ¡crea tu cuenta aquí mismo!");
        }
      } else {
        try {
          const { registerWithEmail: registerFn } = await import("@/lib/auth");
          const credential = await registerFn(email.trim(), password);
          const { resolvePostLoginPath } = await import("@/lib/client/post-login");
          const path = await resolvePostLoginPath(credential.user.uid, credential.user.email);
          router.push(path);
          onClose();
        } catch (err: any) {
          if (err.code === "auth/email-already-in-use") {
            setMode("login");
            setError("Este correo ya tiene una cuenta activa. Por favor, verifica tu contraseña.");
          } else if (err.code === "auth/weak-password") {
            setError("La contraseña es muy corta. Usa al menos 6 caracteres.");
          } else {
            setError(err.message || "Error al crear la cuenta.");
          }
        }
      }
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
        className={`fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-[2px] transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div
        className={`fixed inset-y-0 right-0 z-[70] w-full max-w-[480px] bg-white shadow-2xl transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col p-8 sm:p-12 overflow-y-auto">
          {/* Header */}
          <div className="flex justify-between items-start mb-12">
            <div className="transform transition duration-500 hover:scale-105">
              <Logo className="h-8 w-auto text-slate-900" />
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors -mr-2"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="mb-10">
            <h2 className="text-[2.2rem] font-bold text-slate-900 leading-tight tracking-tight mb-3">
              {mode === "login" ? "Comienza tu entrenamiento" : "Crea tu cuenta"}
            </h2>
            <p className="text-[15px] font-medium text-slate-500">
              {mode === "login" 
                ? "Inicia sesión o crea una cuenta con:" 
                : "Únete a Método Q para comenzar."}
            </p>
          </div>

          {/* Social Logins */}
          <button
            type="button"
            onClick={() => handleSocialLogin("google")}
            disabled={isLoading}
            className="flex h-[3.5rem] w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-4 text-[15px] font-bold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:shadow active:scale-[0.98] disabled:opacity-50"
          >
            <GoogleIcon />
            Continuar con Google
          </button>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-xs font-medium text-slate-400">
              <span className="bg-white px-4">
                o continúa con email
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-800">
                {mode === "login" ? "Correo o usuario" : "Email"}
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  type={mode === "login" ? "text" : "email"}
                  autoComplete={mode === "login" ? "username" : "email"}
                  required
                  placeholder={
                    mode === "login" ? "nombre@ejemplo.com" : "nombre@ejemplo.com"
                  }
                  className="h-[3.25rem] w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 text-slate-900 font-medium placeholder-slate-400 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-800">
                {mode === "login" ? "Contraseña" : "Crea tu contraseña"}
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  className="h-[3.25rem] w-full rounded-xl border border-slate-200 bg-white px-4 pr-12 text-slate-900 font-medium placeholder-slate-400 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 tracking-widest"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {mode === "login" && (
              <div className="flex items-center justify-between mt-1 mb-2">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <div className="relative flex items-center justify-center w-5 h-5 border border-slate-300 rounded group-hover:border-blue-500 transition-colors">
                    <input 
                      type="checkbox" 
                      className="peer sr-only"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    {rememberMe && <div className="w-3 h-3 bg-blue-600 rounded-sm" />}
                  </div>
                  <span className="text-[13px] font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Recuérdame</span>
                </label>
                <button type="button" className="text-[13px] font-bold text-blue-600 hover:text-blue-700 transition-colors">
                  ¿Olvidaste tu contraseña?
                </button>
              </div>
            )}

            {error && (
              <div className={`mt-2 rounded-xl p-4 text-center text-[13px] font-medium border animate-shake ${
                mode === "register" && error.includes("No pudimos validar")
                  ? "bg-blue-50 text-blue-700 border-blue-200"
                  : "bg-red-50 text-red-600 border-red-200"
              }`}>
                {error.includes("offline") 
                  ? "Error de conexión. Por favor, intenta de nuevo en unos segundos." 
                  : error.includes("popup-blocked")
                  ? "El navegador bloqueó la ventana emergente de Google. Por favor, actívala."
                  : error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="mt-2 flex h-[3.5rem] w-full items-center justify-center rounded-xl bg-blue-600 text-[15px] font-bold text-white shadow-[0_8px_20px_-8px_rgba(37,99,235,0.6)] transition-all hover:bg-blue-700 hover:shadow-[0_8px_25px_-5px_rgba(37,99,235,0.6)] active:scale-[0.98] disabled:opacity-50"
            >
              {isLoading ? "Procesando..." : mode === "login" ? "CONTINUAR" : "CREAR CUENTA"}
            </button>

            <div className="mt-6 text-center text-[13px] font-medium text-slate-500">
              {mode === "login" ? (
                <>
                  ¿No tienes cuenta?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setMode("register");
                      setError("");
                    }}
                    className="font-bold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Regístrate gratis
                  </button>
                </>
              ) : (
                <>
                  ¿Ya tienes cuenta?{" "}
                  <button
                    type="button"
                    onClick={() => {
                      setMode("login");
                      setError("");
                    }}
                    className="font-bold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Ingresa aquí
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </>,
    document.body
  );
}
