"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuthGuard } from "@/hooks/use-auth-guard";
import { logoutUser } from "@/lib/auth";

type DashboardShellProps = {
  children: React.ReactNode;
};

const navigationItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Demo / Entrenar", href: "/demo" },
  { label: "Historial", href: "/dashboard/historial" },
  { label: "Perfil", href: "/dashboard/perfil" },
];

export function DashboardShell({ children }: DashboardShellProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, isCheckingAuth } = useAuthGuard("/login");

  if (isCheckingAuth) {
    return (
      <main className="flex min-h-[70vh] flex-1 items-center justify-center bg-[#0A1F44] px-4">
        <p className="text-sm text-mq-muted sm:text-base">Verificando sesion...</p>
      </main>
    );
  }

  return (
    <main className="flex min-h-[70vh] flex-1 flex-col bg-[#0A1F44] md:flex-row">
      <aside className="w-full border-b border-mq-border-strong bg-white/[0.03] p-4 md:min-h-full md:w-72 md:border-b-0 md:border-r md:p-6">
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mq-accent">
            Metodo Q
          </p>
          <h2 className="mt-2 text-xl font-semibold text-white">Panel</h2>
        </div>

        <nav className="flex gap-2 overflow-x-auto pb-1 md:flex-col md:overflow-visible">
          {navigationItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex min-h-12 shrink-0 items-center rounded-xl px-4 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 md:w-full ${
                  isActive
                    ? "bg-mq-accent text-mq-accent-foreground shadow-[0_12px_30px_-16px_rgb(0_209_255/0.95)]"
                    : "border border-transparent bg-white/[0.02] text-mq-muted hover:border-mq-border-strong hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      <section className="flex min-w-0 flex-1 flex-col">
        <header className="flex flex-col gap-3 border-b border-mq-border-strong px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="text-sm text-mq-muted sm:text-base">
            Hola, <span className="font-medium text-white">{user?.email}</span>
          </p>
          <button
            type="button"
            onClick={async () => {
              await logoutUser();
              router.replace("/login");
            }}
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-mq-border-strong bg-white/[0.03] px-5 text-sm font-semibold text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.07]"
          >
            Cerrar sesion
          </button>
        </header>

        <div className="flex-1 px-4 py-6 sm:px-6 sm:py-8">{children}</div>
      </section>
    </main>
  );
}
