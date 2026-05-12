"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, type User } from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebase";

const ADMIN_EMAIL = "admin@gmail.com";

export function AdminGuard({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isChecking, setIsChecking] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    const auth = getFirebaseAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser && currentUser.email === ADMIN_EMAIL) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setIsChecking(false);
    });
    return () => unsubscribe();
  }, []);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setIsLoggingIn(true);

    try {
      const auth = getFirebaseAuth();
      const credential = await signInWithEmailAndPassword(auth, email, password);
      
      if (credential.user.email !== ADMIN_EMAIL) {
        setError("Este usuario no tiene permisos de administrador.");
        await auth.signOut();
      }
    } catch (err: any) {
      setError("Credenciales inválidas o error de conexión.");
    } finally {
      setIsLoggingIn(false);
    }
  }

  if (isChecking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0A1F44]">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-mq-accent border-t-transparent" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0A1F44] px-4">
        <div className="w-full max-w-md rounded-2xl border border-mq-border-strong bg-mq-surface-raised p-8 shadow-2xl">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-mq-accent/10 text-mq-accent">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="mt-4 text-2xl font-bold text-white">Panel de Admin</h1>
            <p className="mt-2 text-sm text-mq-muted">Ingresa tus credenciales maestras</p>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-mq-muted">Correo</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-mq-border bg-mq-surface px-4 py-2.5 text-white outline-none focus:border-mq-accent"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-mq-muted">Contraseña</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-mq-border bg-mq-surface px-4 py-2.5 text-white outline-none focus:border-mq-accent"
                  required
                />
              </div>
            </div>

            {error && <p className="text-sm text-rose-400">{error}</p>}

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full rounded-lg bg-mq-accent py-3 font-bold text-[#0A1F44] transition-all hover:bg-mq-accent-hover disabled:opacity-50"
            >
              {isLoggingIn ? "Verificando..." : "Acceder al Panel"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
