"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Home, LogOut, Shield } from "lucide-react";
import type { User } from "firebase/auth";
import { Logo } from "@/components/ui/logo";
import { useUserRole } from "@/hooks/use-user-role";
import { logoutUser } from "@/lib/auth";

type StaffPanelHeaderProps = {
  user: User;
};

export function StaffPanelHeader({ user }: StaffPanelHeaderProps) {
  const router = useRouter();
  const { isAdmin, loading: isLoadingRole } = useUserRole();

  async function handleLogout() {
    await logoutUser();
    router.replace("/");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-mq-border-strong bg-[#0A1F44]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-3 transition hover:opacity-90"
          title="Volver al inicio"
        >
          <Logo className="h-7 w-auto" />
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/"
            className="hidden items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold text-mq-muted transition hover:bg-white/[0.05] hover:text-white sm:inline-flex sm:text-sm"
          >
            <Home size={14} />
            Inicio
          </Link>

          <p className="hidden max-w-[12rem] truncate text-xs text-mq-muted sm:block sm:max-w-xs sm:text-sm">
            <span className="text-white">{user.email}</span>
          </p>

          {!isLoadingRole && isAdmin ? (
            <Link
              href="/admin"
              className="group flex items-center gap-2 rounded-lg border border-mq-accent/30 bg-mq-accent/10 px-3 py-1.5 text-xs font-semibold text-mq-accent transition-colors hover:bg-mq-accent/20"
            >
              <Shield size={14} className="transition-transform group-hover:-translate-x-0.5" />
              <span className="hidden sm:inline">Panel admin</span>
            </Link>
          ) : null}

          <button
            type="button"
            onClick={handleLogout}
            className="group inline-flex items-center gap-1.5 rounded-lg border border-mq-border-strong bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-mq-muted transition hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400 sm:gap-2 sm:text-sm"
          >
            <LogOut size={14} className="shrink-0" />
            <span>Cerrar sesión</span>
          </button>
        </div>
      </div>
    </header>
  );
}
