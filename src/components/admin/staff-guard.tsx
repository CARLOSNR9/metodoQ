"use client";

import { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  type User,
} from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebase";
import { resolveLoginIdentifier } from "@/lib/resolve-login-identifier";
import { useUserRole } from "@/hooks/use-user-role";
import {
  getRoleLabel,
  isAdminUser,
  isModeratorUser,
  isProfessorUser,
  type UserRole,
} from "@/lib/roles";
import { StaffPanelHeader } from "@/components/admin/staff-panel-header";

type StaffGuardProps = {
  children: React.ReactNode;
  /** Roles permitidos además del admin legacy por correo */
  allowedRoles: UserRole[];
  title: string;
  subtitle: string;
};

function hasAccess(
  role: UserRole,
  email: string | null,
  allowedRoles: UserRole[],
): boolean {
  if (isAdminUser(role, email) && allowedRoles.includes("admin")) {
    return true;
  }
  if (isProfessorUser(role) && allowedRoles.includes("professor")) {
    return true;
  }
  if (isModeratorUser(role) && allowedRoles.includes("moderator")) {
    return true;
  }
  // Administradores pueden entrar a paneles de staff para supervisión
  if (isAdminUser(role, email) && allowedRoles.includes("professor")) {
    return true;
  }
  if (isAdminUser(role, email) && allowedRoles.includes("moderator")) {
    return true;
  }
  return false;
}

export function StaffGuard({
  children,
  allowedRoles,
  title,
  subtitle,
}: StaffGuardProps) {
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const { role, email, loading: isLoadingRole } = useUserRole();
  const [loginEmail, setLoginEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    const auth = getFirebaseAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setAuthUser(currentUser);
      setIsCheckingAuth(false);
    });
    return () => unsubscribe();
  }, []);

  const isLoading = isCheckingAuth || (authUser && isLoadingRole);
  const canEnter = authUser && hasAccess(role, email, allowedRoles);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setIsLoggingIn(true);

    try {
      const auth = getFirebaseAuth();
      await signInWithEmailAndPassword(
        auth,
        resolveLoginIdentifier(loginEmail),
        password,
      );
    } catch {
      setError("Credenciales inválidas o error de conexión.");
    } finally {
      setIsLoggingIn(false);
    }
  }

  useEffect(() => {
    if (!authUser || isLoadingRole) {
      return;
    }
    if (!hasAccess(role, email, allowedRoles)) {
      setError(
        `Tu cuenta tiene rol ${getRoleLabel(role)}. No tienes acceso a este panel.`,
      );
      getFirebaseAuth().signOut();
    }
  }, [authUser, role, email, allowedRoles, isLoadingRole]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0A1F44]">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-mq-accent border-t-transparent" />
      </div>
    );
  }

  if (!canEnter) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0A1F44] px-4">
        <div className="w-full max-w-md rounded-2xl border border-mq-border-strong bg-mq-surface-raised p-8 shadow-2xl">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-mq-accent/10 text-mq-accent">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h1 className="mt-4 text-2xl font-bold text-white">{title}</h1>
            <p className="mt-2 text-sm text-mq-muted">{subtitle}</p>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-mq-muted">
                  Correo o usuario
                </label>
                <input
                  type="text"
                  autoComplete="username"
                  placeholder="nombre@ejemplo.com"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-mq-border bg-mq-surface px-4 py-2.5 text-white outline-none focus:border-mq-accent"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-mq-muted">
                  Contraseña
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-mq-border bg-mq-surface px-4 py-2.5 text-white outline-none focus:border-mq-accent"
                  required
                />
              </div>
            </div>

            {error ? <p className="text-sm text-rose-400">{error}</p> : null}

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full rounded-lg bg-mq-accent py-3 font-bold text-[#0A1F44] transition-all hover:brightness-110 disabled:opacity-50"
            >
              {isLoggingIn ? "Verificando..." : "Acceder al panel"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <>
      <StaffPanelHeader user={authUser} />
      {children}
    </>
  );
}
