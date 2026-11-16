"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { doc, updateDoc } from "firebase/firestore";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  signOut,
  updatePassword,
} from "firebase/auth";
import { getFirebaseAuth, getFirebaseDb } from "@/lib/firebase";
import { AlertCircle, CheckCircle2, Circle, Eye, EyeOff, KeyRound, Loader2 } from "lucide-react";
import { evaluatePasswordRules, isPasswordAcceptable } from "@/lib/password-policy";

interface ForcePasswordChangeModalProps {
  userId: string | undefined;
  isOpen: boolean;
  /** Nombre para el saludo (opcional). */
  greetingName?: string | null;
}

const inputClassName =
  "w-full rounded-xl border border-slate-200 bg-slate-50 p-4 pr-12 text-sm text-slate-900 placeholder:text-slate-400 focus:border-mq-accent focus:outline-none focus:ring-1 focus:ring-mq-accent";

export function ForcePasswordChangeModal({
  userId,
  isOpen,
  greetingName,
}: ForcePasswordChangeModalProps) {
  const [temporaryPassword, setTemporaryPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  if (!isOpen || !userId) return null;

  const rules = evaluatePasswordRules(password, temporaryPassword);
  const passwordsMatch = confirmPassword.length > 0 && password === confirmPassword;
  const canSubmit =
    temporaryPassword.length > 0 &&
    isPasswordAcceptable(password, temporaryPassword) &&
    passwordsMatch &&
    !isSaving;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!isPasswordAcceptable(password, temporaryPassword)) {
      setError("Tu nueva contraseña aún no cumple todos los requisitos.");
      return;
    }
    if (!passwordsMatch) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setIsSaving(true);
    try {
      const auth = getFirebaseAuth();
      const currentUser = auth.currentUser;
      if (!currentUser?.email) {
        throw new Error("No hay un usuario autenticado.");
      }

      // Reautenticar con la contraseña temporal evita el error
      // "requires-recent-login" si la sesión lleva rato abierta.
      const credential = EmailAuthProvider.credential(currentUser.email, temporaryPassword);
      await reauthenticateWithCredential(currentUser, credential);
      await updatePassword(currentUser, password);

      await updateDoc(doc(getFirebaseDb(), "users", userId), {
        requiresPasswordChange: false,
        passwordChangedAt: new Date().toISOString(),
      });
    } catch (err: unknown) {
      console.error("Error al actualizar la contraseña:", err);
      const code = (err as { code?: string }).code;
      if (code === "auth/wrong-password" || code === "auth/invalid-credential") {
        setError("La contraseña temporal no es correcta. Usa la misma con la que acabas de ingresar.");
      } else if (code === "auth/too-many-requests") {
        setError("Demasiados intentos. Espera unos minutos y vuelve a intentarlo.");
      } else if (code === "auth/weak-password") {
        setError("Esa contraseña es demasiado débil. Prueba con una más larga.");
      } else {
        setError("No pudimos cambiar la contraseña. Intenta de nuevo en un momento.");
      }
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-900/70 p-4 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative my-8 w-full max-w-md overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="force-password-title"
      >
        <div className="p-7 sm:p-8">
          <div className="mb-6 flex flex-col items-center text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-mq-accent/10 text-mq-accent">
              <KeyRound size={28} />
            </div>
            <h2 id="force-password-title" className="text-2xl font-black text-slate-900">
              {greetingName ? `Hola, ${greetingName}` : "Crea tu contraseña personal"}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              Ingresaste con una contraseña temporal. Antes de empezar, crea una que solo tú
              conozcas. Te tomará menos de un minuto.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error ? (
              <div className="flex items-start gap-3 rounded-xl border border-rose-200 bg-rose-50 p-4 text-rose-700">
                <AlertCircle className="mt-0.5 shrink-0" size={18} />
                <p className="text-sm font-medium">{error}</p>
              </div>
            ) : null}

            <div className="space-y-1.5">
              <label htmlFor="temp-password" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Contraseña temporal
              </label>
              <input
                id="temp-password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                value={temporaryPassword}
                onChange={(e) => setTemporaryPassword(e.target.value)}
                className={inputClassName}
                placeholder="La que te enviamos"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="new-password" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Nueva contraseña
              </label>
              <div className="relative">
                <input
                  id="new-password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={inputClassName}
                  placeholder="Ej: Dermato2027"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Ocultar contraseñas" : "Mostrar contraseñas"}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-900"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <ul className="grid gap-1 pt-1 sm:grid-cols-2">
                {rules.map((rule) => (
                  <li
                    key={rule.id}
                    className={`flex items-center gap-1.5 text-xs ${rule.ok ? "text-emerald-700" : "text-slate-500"}`}
                  >
                    {rule.ok ? <CheckCircle2 size={14} /> : <Circle size={14} />}
                    {rule.label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="confirm-password" className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Confirmar nueva contraseña
              </label>
              <input
                id="confirm-password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={inputClassName}
                placeholder="Escríbela de nuevo"
                required
              />
              {confirmPassword.length > 0 && !passwordsMatch ? (
                <p className="text-xs text-rose-600">Aún no coinciden.</p>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={!canSubmit}
              className="mt-2 flex min-h-[3.5rem] w-full items-center justify-center rounded-xl bg-mq-accent px-6 text-sm font-black text-mq-accent-foreground transition-transform hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
            >
              {isSaving ? (
                <>
                  <Loader2 className="mr-2 animate-spin" size={18} />
                  Guardando...
                </>
              ) : (
                "Guardar y entrar a mi espacio"
              )}
            </button>

            <button
              type="button"
              onClick={() => void signOut(getFirebaseAuth())}
              className="w-full text-center text-xs font-semibold text-slate-400 hover:text-slate-600"
            >
              Cerrar sesión
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
