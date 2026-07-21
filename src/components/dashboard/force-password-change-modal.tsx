"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { doc, updateDoc } from "firebase/firestore";
import { updatePassword } from "firebase/auth";
import { getFirebaseAuth, getFirebaseDb } from "@/lib/firebase";
import { Lock, AlertCircle, Eye, EyeOff, Loader2 } from "lucide-react";

interface ForcePasswordChangeModalProps {
  userId: string | undefined;
  isOpen: boolean;
}

export function ForcePasswordChangeModal({ userId, isOpen }: ForcePasswordChangeModalProps) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  if (!isOpen || !userId) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setIsSaving(true);
    try {
      const auth = getFirebaseAuth();
      const currentUser = auth.currentUser;
      
      if (!currentUser) {
        throw new Error("No hay un usuario autenticado.");
      }

      // Actualizar contraseña en Firebase Auth
      await updatePassword(currentUser, password);

      // Limpiar el flag en Firestore
      const userDocRef = doc(getFirebaseDb(), "users", userId);
      await updateDoc(userDocRef, {
        requiresPasswordChange: false,
      });

    } catch (err: any) {
      console.error("Error al actualizar la contraseña:", err);
      // Firebase specific errors mapping
      if (err.code === "auth/requires-recent-login") {
        setError("Por seguridad, debes cerrar sesión e ingresar nuevamente con tu contraseña temporal antes de cambiarla.");
      } else {
        setError("Ocurrió un error al intentar cambiar la contraseña. Intenta de nuevo.");
      }
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-md overflow-hidden bg-mq-surface border border-red-500/30 rounded-[2rem] shadow-[0_32px_64px_-16px_rgba(220,38,38,0.2)]"
      >
        <div className="absolute top-0 w-full h-32 opacity-10 -z-10 bg-gradient-to-b from-red-500 to-transparent" />

        <div className="p-8">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10 text-red-500 mb-6">
              <Lock size={32} />
            </div>
            <h2 className="text-2xl font-black text-white">Actualización de Seguridad</h2>
            <p className="mt-2 text-sm leading-relaxed text-mq-muted">
              Has iniciado sesión con una contraseña temporal. Por tu seguridad, debes crear una contraseña personal antes de continuar.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-red-400">
                <AlertCircle className="mt-0.5 shrink-0" size={18} />
                <p className="text-sm font-medium">{error}</p>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-mq-muted">
                Nueva Contraseña
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/5 p-4 pr-12 text-sm text-white placeholder:text-mq-muted focus:border-mq-accent focus:outline-none focus:ring-1 focus:ring-mq-accent"
                  placeholder="Mínimo 6 caracteres"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-mq-muted hover:text-white"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-mq-muted">
                Confirmar Contraseña
              </label>
              <input
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white placeholder:text-mq-muted focus:border-mq-accent focus:outline-none focus:ring-1 focus:ring-mq-accent"
                placeholder="Vuelve a escribir la contraseña"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSaving}
              className="w-full flex items-center justify-center min-h-[3.5rem] rounded-xl bg-mq-accent px-6 text-sm font-black text-mq-accent-foreground hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:hover:scale-100 mt-4"
            >
              {isSaving ? (
                <>
                  <Loader2 className="animate-spin mr-2" size={18} />
                  Actualizando...
                </>
              ) : (
                "Guardar Contraseña"
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
