"use client";

import { useMemo, useState } from "react";
import { formatCOP, getPlanDisplayName } from "@/lib/plans/config";
import { getRoleLabel, normalizeUserRole } from "@/lib/roles";
import type { AdminUserRow, UserAcquisitionSource } from "@/lib/server/users-admin";

type FilterKey = "all" | UserAcquisitionSource | "paid";

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "Todos" },
  { key: "free", label: "Gratis" },
  { key: "stripe", label: "Stripe (web)" },
  { key: "manual", label: "Negociador" },
  { key: "paid", label: "Con plan de pago" },
];

const SOURCE_LABELS: Record<UserAcquisitionSource, string> = {
  free: "Registro gratis",
  stripe: "Compra web",
  manual: "Venta interna",
};

const SOURCE_STYLES: Record<UserAcquisitionSource, string> = {
  free: "bg-white/10 text-mq-muted",
  stripe: "bg-violet-500/15 text-violet-300",
  manual: "bg-mq-accent/15 text-mq-accent",
};

function formatDate(iso: string | null) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("es-CO", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

type UsersDirectoryTableProps = {
  users: AdminUserRow[];
};

export function UsersDirectoryTable({ users }: UsersDirectoryTableProps) {
  const [filter, setFilter] = useState<FilterKey>("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return users.filter((user) => {
      if (filter === "paid" && user.plan === "FREE") return false;
      if (filter !== "all" && filter !== "paid" && user.source !== filter) return false;
      if (!q) return true;
      return (
        user.email.toLowerCase().includes(q) ||
        user.displayName.toLowerCase().includes(q)
      );
    });
  }, [users, filter, search]);

  const counts = useMemo(
    () => ({
      all: users.length,
      free: users.filter((u) => u.source === "free").length,
      stripe: users.filter((u) => u.source === "stripe").length,
      manual: users.filter((u) => u.source === "manual").length,
      paid: users.filter((u) => u.plan !== "FREE").length,
    }),
    [users],
  );

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                filter === f.key
                  ? "bg-mq-accent text-[#0A1F44]"
                  : "border border-mq-border text-mq-muted hover:text-white"
              }`}
            >
              {f.label} ({counts[f.key]})
            </button>
          ))}
        </div>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar por correo o nombre..."
          className="w-full rounded-lg border border-mq-border bg-[#0f2744] px-4 py-2 text-sm text-white placeholder:text-mq-muted/50 sm:max-w-xs"
        />
      </div>

      <p className="mt-3 text-xs text-mq-muted">
        {filtered.length} usuario{filtered.length === 1 ? "" : "s"} · Stripe = pagó en la plataforma ·
        Negociador = creado manualmente en admin
      </p>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[880px] text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-mq-muted">
              <th className="pb-3 pr-3">Registro</th>
              <th className="pb-3 pr-3">Usuario</th>
              <th className="pb-3 pr-3">Origen</th>
              <th className="pb-3 pr-3">Plan</th>
              <th className="pb-3 pr-3">Rol</th>
              <th className="pb-3 pr-3">Vigencia</th>
              <th className="pb-3 pr-3">Negociado</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-8 text-center text-mq-muted">
                  No hay usuarios con este filtro.
                </td>
              </tr>
            ) : (
              filtered.map((user) => (
                <tr key={user.uid} className="border-b border-white/5">
                  <td className="py-3 pr-3 text-xs text-mq-muted whitespace-nowrap">
                    {formatDate(user.createdAt)}
                  </td>
                  <td className="py-3 pr-3">
                    <p className="font-medium text-white">{user.displayName}</p>
                    <p className="text-xs text-mq-muted">{user.email || "—"}</p>
                  </td>
                  <td className="py-3 pr-3">
                    <span
                      className={`inline-flex rounded-md px-2 py-0.5 text-xs font-medium ${SOURCE_STYLES[user.source]}`}
                    >
                      {SOURCE_LABELS[user.source]}
                    </span>
                  </td>
                  <td className="py-3 pr-3 font-medium text-white whitespace-nowrap">
                    {getPlanDisplayName(user.plan)}
                  </td>
                  <td className="py-3 pr-3 text-mq-muted whitespace-nowrap">
                    {getRoleLabel(normalizeUserRole(user.role))}
                  </td>
                  <td className="py-3 pr-3 text-xs text-mq-muted whitespace-nowrap">
                    {user.plan === "FREE" ? (
                      "—"
                    ) : (
                      <>
                        {formatDate(user.planStartedAt)}
                        <span className="text-white/40"> → </span>
                        {formatDate(user.planExpiresAt)}
                      </>
                    )}
                  </td>
                  <td className="py-3 pr-3 text-mq-muted whitespace-nowrap">
                    {user.negotiatedPriceCOP != null
                      ? formatCOP(user.negotiatedPriceCOP)
                      : "—"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

