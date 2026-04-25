"use client";

import { usePathname, useRouter } from "next/navigation";
import { useAuthGuard } from "@/hooks/use-auth-guard";
import { logoutUser } from "@/lib/auth";
import { AchievementNotification } from "./achievement-notification";
import { LayoutDashboard, GraduationCap, History, User, LogOut } from "lucide-react";

type DashboardShellProps = {
  children: React.ReactNode;
};

const navigationItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Entrenar", href: "/demo", icon: GraduationCap },
  { label: "Historial", href: "/dashboard/historial", icon: History },
  { label: "Perfil", href: "/dashboard/perfil", icon: User },
];

export function DashboardShell({ children }: DashboardShellProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, isCheckingAuth } = useAuthGuard("/login");

  if (isCheckingAuth) {
    return (
      <main className="flex min-h-screen flex-1 items-center justify-center bg-[#0A1F44] px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-mq-accent border-t-transparent" />
          <p className="text-sm font-medium text-mq-muted">Sincronizando con el servidor...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-1 flex-col bg-[#0A1F44] md:flex-row">
      <aside className="relative z-20 w-full border-b border-mq-border-strong bg-white/[0.02] p-4 md:min-h-full md:w-64 md:border-b-0 md:border-r md:p-6">
        <div className="mb-8 hidden md:block">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-mq-accent">
              <span className="text-xl font-bold text-mq-accent-foreground">Q</span>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-mq-accent">
                Método Q
              </p>
              <h2 className="text-sm font-semibold text-white">Panel de Control</h2>
            </div>
          </div>
        </div>

        <nav className="flex gap-2 overflow-x-auto pb-2 md:flex-col md:overflow-visible">
          {navigationItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard" && pathname.startsWith(item.href));
            
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex min-h-11 shrink-0 items-center gap-3 rounded-xl px-4 text-sm font-semibold transition-all duration-300 md:w-full ${
                  isActive
                    ? "bg-mq-accent text-mq-accent-foreground shadow-[0_8px_20px_-8px_rgb(0_209_255/0.8)]"
                    : "text-mq-muted hover:bg-white/[0.05] hover:text-white"
                }`}
              >
                <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                <span className="md:inline">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      <section className="flex min-w-0 flex-1 flex-col">
        <header className="mq-glass sticky top-0 z-10 flex h-16 items-center justify-between px-4 sm:px-8">
          <div className="flex items-center gap-3">
            <div className="hidden h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-mq-accent to-indigo-500 text-xs font-bold text-white sm:flex">
              {user?.email?.[0].toUpperCase()}
            </div>
            <p className="text-xs font-medium text-mq-muted sm:text-sm">
              <span className="hidden sm:inline">Sesión de </span>
              <span className="text-white">{user?.email}</span>
            </p>
          </div>
          
          <button
            type="button"
            onClick={async () => {
              await logoutUser();
              router.replace("/login");
            }}
            className="group flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold text-mq-muted transition-colors hover:bg-red-500/10 hover:text-red-400"
          >
            <LogOut size={14} className="transition-transform group-hover:translate-x-0.5" />
            <span>Salir</span>
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-8 sm:py-10">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </div>
      </section>
      <AchievementNotification userId={user?.uid ?? ""} />
    </main>
  );
}
