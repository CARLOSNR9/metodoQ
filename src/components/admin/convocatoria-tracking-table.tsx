"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CheckCircle2, Clock, Search } from "lucide-react";
import { getPlanDisplayName } from "@/lib/plans/config";
import { getRoleLabel, normalizeUserRole, USER_ROLES, type UserRole } from "@/lib/roles";
import type {
  AdminConvocatoriaRow,
  AdminConvocatoriaSummary,
} from "@/lib/server/convocatoria-admin";

type StatusFilter = "all" | "completed" | "pending";
type RoleFilter = "all" | UserRole;

const STATUS_FILTERS: { key: StatusFilter; label: string }[] = [
  { key: "all", label: "Todos" },
  { key: "completed", label: "Completaron" },
  { key: "pending", label: "Pendientes" },
];

const ROLE_FILTERS: { key: RoleFilter; label: string }[] = [
  { key: "all", label: "Todos los roles" },
  ...USER_ROLES.map((role) => ({
    key: role as RoleFilter,
    label: getRoleLabel(role),
  })),
];

function formatDate(iso: string | null) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("es-CO", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function exportCsv(rows: AdminConvocatoriaRow[], editionLabel: string) {
  const header = [
    "Email",
    "Nombre",
    "Rol",
    "Plan",
    "Estado",
    "Puntaje %",
    "Correctas",
    "Incorrectas",
    "Fecha",
  ];
  const lines = rows.map((row) =>
    [
      row.email,
      row.displayName,
      getRoleLabel(normalizeUserRole(row.role)),
      getPlanDisplayName(row.plan),
      row.status === "completed" ? "Completó" : "Pendiente",
      row.scorePercentage ?? "",
      row.correctAnswers ?? "",
      row.wrongAnswers ?? "",
      row.completedAt ?? "",
    ]
      .map((value) => `"${String(value).replace(/"/g, '""')}"`)
      .join(","),
  );

  const blob = new Blob([[header.join(","), ...lines].join("\n")], {
    type: "text/csv;charset=utf-8;",
  });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `convocatoria-${editionLabel.replace(/\s+/g, "-").toLowerCase()}.csv`;
  anchor.click();
  URL.revokeObjectURL(url);
}

type ConvocatoriaTrackingTableProps = {
  summary: AdminConvocatoriaSummary;
  rows: AdminConvocatoriaRow[];
};

export function ConvocatoriaTrackingTable({
  summary,
  rows,
}: ConvocatoriaTrackingTableProps) {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [roleFilter, setRoleFilter] = useState<RoleFilter>("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return rows.filter((row) => {
      if (statusFilter !== "all" && row.status !== statusFilter) return false;
      if (roleFilter !== "all" && normalizeUserRole(row.role) !== roleFilter) {
        return false;
      }
      if (!q) return true;
      return (
        row.email.toLowerCase().includes(q) ||
        row.displayName.toLowerCase().includes(q)
      );
    });
  }, [rows, statusFilter, roleFilter, search]);

  const counts = useMemo(
    () => ({
      all: rows.length,
      completed: rows.filter((row) => row.status === "completed").length,
      pending: rows.filter((row) => row.status === "pending").length,
    }),
    [rows],
  );

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <article className="rounded-xl border border-mq-border-strong bg-mq-surface-raised p-5 shadow-lg">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-mq-muted">
            Completaron
          </p>
          <p className="mt-3 text-3xl font-semibold text-white">
            {summary.completedCount}
            <span className="ml-2 text-lg text-mq-muted">/ {summary.totalUsers}</span>
          </p>
          <p className="mt-1 text-xs text-mq-muted">{summary.completionRate}% del directorio</p>
        </article>
        <article className="rounded-xl border border-mq-border-strong bg-mq-surface-raised p-5 shadow-lg">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-mq-muted">
            Pendientes
          </p>
          <p className="mt-3 text-3xl font-semibold text-amber-300">{summary.pendingCount}</p>
        </article>
        <article className="rounded-xl border border-mq-border-strong bg-mq-surface-raised p-5 shadow-lg">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-mq-muted">
            Promedio
          </p>
          <p className="mt-3 text-3xl font-semibold text-white">
            {summary.averageScore != null ? `${summary.averageScore}%` : "—"}
          </p>
          <p className="mt-1 text-xs text-mq-muted">Solo quienes completaron</p>
        </article>
        <article className="rounded-xl border border-mq-border-strong bg-mq-surface-raised p-5 shadow-lg">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-mq-muted">
            Examen
          </p>
          <p className="mt-3 text-lg font-semibold text-white">
            {summary.questionCount} preguntas
          </p>
          <p className="mt-1 text-xs text-mq-muted">1 intento por usuario</p>
        </article>
      </div>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative max-w-md flex-1">
          <Search
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-mq-muted"
          />
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Buscar por email o nombre…"
            className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-mq-muted focus:border-mq-accent/50 focus:outline-none"
          />
        </div>
        <button
          type="button"
          onClick={() => exportCsv(filtered, summary.editionLabel)}
          className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/[0.06]"
        >
          Exportar CSV ({filtered.length})
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {STATUS_FILTERS.map((filter) => (
          <button
            key={filter.key}
            type="button"
            onClick={() => setStatusFilter(filter.key)}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
              statusFilter === filter.key
                ? "bg-mq-accent text-mq-accent-foreground"
                : "bg-white/[0.05] text-mq-muted hover:text-white"
            }`}
          >
            {filter.label} ({counts[filter.key]})
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {ROLE_FILTERS.map((filter) => (
          <button
            key={filter.key}
            type="button"
            onClick={() => setRoleFilter(filter.key)}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
              roleFilter === filter.key
                ? "bg-violet-500/20 text-violet-200"
                : "bg-white/[0.05] text-mq-muted hover:text-white"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto rounded-xl border border-mq-border-strong bg-mq-surface-raised shadow-xl">
        <table className="w-full min-w-[880px] text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-mq-muted">
              <th className="px-4 py-3">Usuario</th>
              <th className="px-4 py-3">Rol</th>
              <th className="px-4 py-3">Plan</th>
              <th className="px-4 py-3">Estado</th>
              <th className="px-4 py-3">Resultado</th>
              <th className="px-4 py-3">Fecha</th>
              <th className="px-4 py-3">Detalle</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-4 py-8 text-center text-mq-muted">
                  No hay usuarios que coincidan con los filtros.
                </td>
              </tr>
            ) : (
              filtered.map((row) => (
                <tr key={row.uid} className="border-b border-white/5">
                  <td className="px-4 py-3">
                    <p className="font-medium text-white">
                      {row.displayName !== "—" ? row.displayName : row.email.split("@")[0]}
                    </p>
                    <p className="text-xs text-mq-muted">{row.email}</p>
                  </td>
                  <td className="px-4 py-3 text-mq-muted">
                    {getRoleLabel(normalizeUserRole(row.role))}
                  </td>
                  <td className="px-4 py-3 text-mq-muted">
                    {getPlanDisplayName(row.plan)}
                  </td>
                  <td className="px-4 py-3">
                    {row.status === "completed" ? (
                      <span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-emerald-300">
                        <CheckCircle2 size={12} />
                        Completó
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-md border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-xs font-semibold text-amber-300">
                        <Clock size={12} />
                        Pendiente
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {row.status === "completed" ? (
                      <div>
                        <p className="font-semibold text-white">{row.scorePercentage}%</p>
                        <p className="text-xs text-mq-muted">
                          {row.correctAnswers}✓ / {row.wrongAnswers}✗
                        </p>
                      </div>
                    ) : (
                      <span className="text-mq-muted">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-mq-muted">
                    {formatDate(row.completedAt)}
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/admin/usuarios/${row.uid}`}
                      className="text-xs font-semibold text-mq-accent hover:underline"
                    >
                      Ver actividad
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-mq-muted">
        Mostrando {filtered.length} de {rows.length} usuarios registrados (últimos{" "}
        {summary.totalUsers} por fecha de creación).
      </p>
    </div>
  );
}
