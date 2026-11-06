"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState, useTransition } from "react";
import { deleteUserAction, updateUserAction } from "@/app/admin/user-actions";
import { getFirebaseAuth } from "@/lib/firebase";
import { formatCOP, getPlanDisplayName } from "@/lib/plans/config";
import { getRoleLabel, normalizeUserRole, USER_ROLES, type UserRole } from "@/lib/roles";
import type { UserPlan } from "@/lib/auth";
import {
  formatRelativeLastActive,
  getActivityStatusLabel,
  type ActivityStatus,
} from "@/lib/activity-status";
import { ActivityBadge } from "@/components/admin/student-activity-view";
import { Activity, ArrowDown, ArrowUp, ArrowUpDown, Pencil, Trash2 } from "lucide-react";
import type { AdminUserRow, UserAcquisitionSource } from "@/lib/server/users-admin";

type FilterKey = "all" | UserAcquisitionSource | "paid";
type ActivityFilterKey = "all" | ActivityStatus;

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "Todos" },
  { key: "free", label: "Gratis" },
  { key: "stripe", label: "Stripe (web)" },
  { key: "manual", label: "Negociador" },
  { key: "paid", label: "Con plan de pago" },
];

const ACTIVITY_FILTERS: { key: ActivityFilterKey; label: string }[] = [
  { key: "all", label: "Cualquier estado" },
  { key: "activo", label: "Activos" },
  { key: "riesgo", label: "En riesgo" },
  { key: "inactivo", label: "Inactivos" },
  { key: "sin_datos", label: "Sin actividad" },
];

const PLAN_OPTIONS: { value: UserPlan; label: string }[] = [
  { value: "FREE", label: "Gratis" },
  { value: "BASICO", label: "Básico" },
  { value: "PRO", label: "Pro" },
  { value: "RESIDENTE", label: "Residente" },
];

const ROLE_OPTIONS = USER_ROLES.map((role) => ({
  value: role,
  label: getRoleLabel(role),
}));

const SOURCE_LABELS: Record<UserAcquisitionSource, string> = {
  free: "Registro gratis",
  stripe: "Compra web",
  manual: "Venta interna",
};

const SOURCE_STYLES: Record<UserAcquisitionSource, string> = {
  free: "bg-slate-100 text-slate-500",
  stripe: "bg-violet-500/15 text-violet-300",
  manual: "bg-mq-accent/15 text-mq-accent",
};

type SortKey =
  | "createdAt"
  | "name"
  | "university"
  | "status"
  | "lastActive"
  | "streak"
  | "questions"
  | "source"
  | "plan"
  | "role";
type SortDir = "asc" | "desc";

/** Dirección inicial al hacer clic por primera vez en cada columna. */
const DEFAULT_SORT_DIR: Record<SortKey, SortDir> = {
  createdAt: "desc",
  name: "asc",
  university: "asc",
  status: "asc",
  lastActive: "desc",
  streak: "desc",
  questions: "desc",
  source: "asc",
  plan: "desc",
  role: "asc",
};

const STATUS_ORDER: Record<ActivityStatus, number> = {
  activo: 0,
  riesgo: 1,
  inactivo: 2,
  sin_datos: 3,
};

const PLAN_ORDER: Record<string, number> = { FREE: 0, BASICO: 1, PRO: 2, RESIDENTE: 3 };

function getDisplayName(user: AdminUserRow) {
  return user.displayName !== "—" ? user.displayName : user.email.split("@")[0];
}

function toTime(iso: string | null) {
  if (!iso) return null;
  const t = new Date(iso).getTime();
  return Number.isNaN(t) ? null : t;
}

/** Valor comparable de cada fila; null = sin dato (siempre va al final). */
function getSortValue(user: AdminUserRow, key: SortKey): string | number | null {
  switch (key) {
    case "createdAt":
      return toTime(user.createdAt);
    case "name":
      return getDisplayName(user).toLowerCase();
    case "university":
      return user.university?.trim() ? user.university.toLowerCase() : null;
    case "status":
      return STATUS_ORDER[user.activityStatus];
    case "lastActive":
      return toTime(user.lastActiveAt);
    case "streak":
      return user.streakCount > 0 ? user.streakCount : null;
    case "questions":
      return user.totalQuestionsAnswered > 0 ? user.totalQuestionsAnswered : null;
    case "source":
      return SOURCE_LABELS[user.source].toLowerCase();
    case "plan":
      return PLAN_ORDER[user.plan] ?? 0;
    case "role":
      return getRoleLabel(normalizeUserRole(user.role)).toLowerCase();
  }
}

function compareUsers(a: AdminUserRow, b: AdminUserRow, key: SortKey, dir: SortDir) {
  const av = getSortValue(a, key);
  const bv = getSortValue(b, key);
  if (av === null && bv === null) return 0;
  if (av === null) return 1;
  if (bv === null) return -1;
  const cmp =
    typeof av === "string" && typeof bv === "string"
      ? av.localeCompare(bv, "es", { sensitivity: "base" })
      : (av as number) - (bv as number);
  return dir === "asc" ? cmp : -cmp;
}

const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL ?? "admin@gmail.com";

function formatDate(iso: string | null) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("es-CO", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function toDateInput(iso: string | null) {
  if (!iso) return "";
  const d = new Date(iso);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

type UsersDirectoryTableProps = {
  users: AdminUserRow[];
};

export function UsersDirectoryTable({ users }: UsersDirectoryTableProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [filter, setFilter] = useState<FilterKey>("all");
  const [activityFilter, setActivityFilter] = useState<ActivityFilterKey>("all");
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editPlan, setEditPlan] = useState<UserPlan>("FREE");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("lastActive");
  const [sortDir, setSortDir] = useState<SortDir>("desc");

  function toggleSort(key: SortKey) {
    if (key === sortKey) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir(DEFAULT_SORT_DIR[key]);
    }
  }

  const editingUser = users.find((u) => u.uid === editingId);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    const result = users.filter((user) => {
      if (filter === "paid" && user.plan === "FREE") return false;
      if (filter !== "all" && filter !== "paid" && user.source !== filter) return false;
      if (activityFilter !== "all" && user.activityStatus !== activityFilter) return false;
      if (!q) return true;
      return (
        user.email.toLowerCase().includes(q) ||
        user.displayName.toLowerCase().includes(q)
      );
    });

    result.sort((a, b) => {
      const primary = compareUsers(a, b, sortKey, sortDir);
      if (primary !== 0) return primary;
      // Desempate estable: registro más reciente primero.
      return (toTime(b.createdAt) ?? 0) - (toTime(a.createdAt) ?? 0);
    });

    return result;
  }, [users, filter, activityFilter, search, sortKey, sortDir]);

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

  const activityCounts = useMemo(
    () => ({
      all: users.length,
      activo: users.filter((u) => u.activityStatus === "activo").length,
      riesgo: users.filter((u) => u.activityStatus === "riesgo").length,
      inactivo: users.filter((u) => u.activityStatus === "inactivo").length,
      sin_datos: users.filter((u) => u.activityStatus === "sin_datos").length,
    }),
    [users],
  );

  async function getToken() {
    return (await getFirebaseAuth().currentUser?.getIdToken()) ?? "";
  }

  function openEdit(user: AdminUserRow) {
    setError("");
    setMessage("");
    setEditingId(user.uid);
    setEditPlan(user.plan as UserPlan);
  }

  function handleDelete(user: AdminUserRow) {
    if (user.email === ADMIN_EMAIL) {
      setError("No se puede eliminar la cuenta administrador principal.");
      return;
    }

    const confirmed = window.confirm(
      `¿Eliminar a ${user.displayName || user.email}?\n\n` +
        "Se eliminará la cuenta en Authentication, el perfil en Firestore y todos sus datos " +
        "(resultados, notificaciones, ventas manuales, postulaciones Residente, etc.). " +
        "No se puede deshacer.",
    );
    if (!confirmed) return;

    setError("");
    setMessage("");
    startTransition(async () => {
      const result = await deleteUserAction(user.uid, await getToken());
      if (result.error) {
        setError(result.error);
      } else {
        setMessage("Usuario y todos sus registros eliminados de Firebase.");
        router.refresh();
      }
    });
  }

  function handleUpdate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!editingUser) return;

    setError("");
    setMessage("");
    const formData = new FormData(e.currentTarget);
    formData.set("userId", editingUser.uid);

    startTransition(async () => {
      formData.set("idToken", await getToken());
      const result = await updateUserAction(formData);
      if (result.error) {
        setError(result.error);
      } else {
        setMessage("Usuario actualizado.");
        setEditingId(null);
        router.refresh();
      }
    });
  }

  const showPaidFields = editPlan !== "FREE";

  return (
    <div>
      {error ? (
        <p className="mb-4 rounded-lg border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-sm text-rose-200">
          {error}
        </p>
      ) : null}
      {message ? (
        <p className="mb-4 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200">
          {message}
        </p>
      ) : null}

      <div className="flex flex-col gap-4">
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
                    : "border border-slate-200 text-slate-500 hover:text-slate-900"
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
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 placeholder:text-slate-500/50 sm:max-w-xs"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {ACTIVITY_FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setActivityFilter(f.key)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                activityFilter === f.key
                  ? "border border-mq-accent/50 bg-mq-accent/10 text-mq-accent"
                  : "border border-slate-200 text-slate-500 hover:text-slate-900"
              }`}
            >
              {f.key === "all" ? f.label : getActivityStatusLabel(f.key)} ({activityCounts[f.key]})
            </button>
          ))}
        </div>
      </div>

      <p className="mt-3 text-xs text-slate-500">
        {filtered.length} usuario{filtered.length === 1 ? "" : "s"} · Haz clic en el título de
        una columna para ordenar (otro clic invierte el orden)
      </p>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-left text-[13px]">
          <thead>
            <tr className="border-b border-slate-200 text-[11px] uppercase tracking-wide text-slate-500">
              <SortableHeader label="Registro" sortKey="createdAt" activeKey={sortKey} dir={sortDir} onSort={toggleSort} />
              <SortableHeader label="Usuario" sortKey="name" activeKey={sortKey} dir={sortDir} onSort={toggleSort} />
              <SortableHeader label="Universidad" sortKey="university" activeKey={sortKey} dir={sortDir} onSort={toggleSort} />
              <SortableHeader label="Estado" sortKey="status" activeKey={sortKey} dir={sortDir} onSort={toggleSort} />
              <SortableHeader label="Últ. actividad" sortKey="lastActive" activeKey={sortKey} dir={sortDir} onSort={toggleSort} />
              <SortableHeader label="Racha" sortKey="streak" activeKey={sortKey} dir={sortDir} onSort={toggleSort} />
              <SortableHeader label="Preguntas" sortKey="questions" activeKey={sortKey} dir={sortDir} onSort={toggleSort} />
              <SortableHeader label="Origen" sortKey="source" activeKey={sortKey} dir={sortDir} onSort={toggleSort} />
              <SortableHeader label="Plan" sortKey="plan" activeKey={sortKey} dir={sortDir} onSort={toggleSort} />
              <SortableHeader label="Rol" sortKey="role" activeKey={sortKey} dir={sortDir} onSort={toggleSort} />
              <th className="pb-3 text-right font-semibold">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={11} className="py-8 text-center text-slate-500">
                  No hay usuarios con este filtro.
                </td>
              </tr>
            ) : (
              filtered.map((user) => {
                const isProtectedAdmin = user.email === ADMIN_EMAIL;
                return (
                  <tr key={user.uid} className="border-b border-slate-100 align-middle hover:bg-slate-50/60">
                    <td className="py-2.5 pr-2 text-xs text-slate-500 whitespace-nowrap">
                      {formatDate(user.createdAt)}
                    </td>
                    <td className="max-w-[220px] py-2.5 pr-2">
                      <p className="truncate font-medium text-slate-900" title={getDisplayName(user)}>
                        {getDisplayName(user)}
                      </p>
                      <p className="truncate text-xs text-slate-500" title={user.email}>
                        {user.email || "—"}
                      </p>
                    </td>
                    <td className="max-w-[170px] py-2.5 pr-2 text-xs text-slate-500">
                      <span className="line-clamp-2" title={user.university ?? undefined}>
                        {user.university || "—"}
                      </span>
                    </td>
                    <td className="py-2.5 pr-2 whitespace-nowrap">
                      <ActivityBadge status={user.activityStatus} />
                    </td>
                    <td className="py-2.5 pr-2 text-xs text-slate-500 whitespace-nowrap">
                      {formatRelativeLastActive(user.lastActiveAt)}
                    </td>
                    <td className="py-2.5 pr-2 text-slate-900 whitespace-nowrap">
                      {user.streakCount > 0 ? (
                        <span>{user.streakCount} d</span>
                      ) : (
                        <span className="text-slate-500">—</span>
                      )}
                    </td>
                    <td className="py-2.5 pr-2 text-slate-500 whitespace-nowrap">
                      {user.totalQuestionsAnswered > 0 ? (
                        <span>
                          {user.totalQuestionsAnswered}
                          {user.cumulativeScore != null ? (
                            <span className="text-slate-900/40"> · {user.cumulativeScore}%</span>
                          ) : null}
                        </span>
                      ) : (
                        "—"
                      )}
                    </td>
                    <td className="py-2.5 pr-2 whitespace-nowrap">
                      <span
                        className={`inline-flex rounded-md px-1.5 py-0.5 text-[11px] font-medium ${SOURCE_STYLES[user.source]}`}
                      >
                        {SOURCE_LABELS[user.source]}
                      </span>
                    </td>
                    <td className="py-2.5 pr-2 whitespace-nowrap">
                      <p className="font-medium text-slate-900">
                        {getPlanDisplayName(user.plan)}
                        {user.mirAccessActive ? (
                          <span className="ml-1.5 inline-flex rounded-md bg-mq-premium-gold/15 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-mq-premium-gold">
                            MIR
                          </span>
                        ) : null}
                      </p>
                      {user.plan !== "FREE" ? (
                        <p className="text-[11px] text-slate-500" title="Vigencia del plan">
                          {formatDate(user.planStartedAt)}
                          <span className="text-slate-900/40"> → </span>
                          {formatDate(user.planExpiresAt)}
                        </p>
                      ) : null}
                    </td>
                    <td className="py-2.5 pr-2 text-xs text-slate-500 whitespace-nowrap">
                      {getRoleLabel(normalizeUserRole(user.role))}
                    </td>
                    <td className="py-2.5 whitespace-nowrap">
                      <div className="flex justify-end gap-1.5">
                        <Link
                          href={`/admin/usuarios/${user.uid}`}
                          title="Ver actividad de estudio"
                          aria-label="Actividad"
                          className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-mq-accent/40 text-mq-accent transition hover:bg-mq-accent/10"
                        >
                          <Activity size={14} />
                        </Link>
                        <button
                          type="button"
                          disabled={isPending}
                          onClick={() => openEdit(user)}
                          title="Editar usuario"
                          aria-label="Editar"
                          className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:border-mq-accent hover:text-mq-accent disabled:opacity-50"
                        >
                          <Pencil size={14} />
                        </button>
                        <button
                          type="button"
                          disabled={isPending || isProtectedAdmin}
                          onClick={() => handleDelete(user)}
                          title={
                            isProtectedAdmin
                              ? "Cuenta admin principal protegida"
                              : "Eliminar usuario"
                          }
                          aria-label="Eliminar"
                          className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-rose-500/40 text-rose-400 transition hover:bg-rose-500/10 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {editingUser ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <form
            onSubmit={handleUpdate}
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-slate-200 bg-[#0f2744] p-6 shadow-2xl"
          >
            <h3 className="text-lg font-semibold text-slate-900">Editar usuario</h3>
            <p className="mt-1 text-sm text-slate-500">{editingUser.email}</p>

            <div className="mt-5 space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase text-slate-500">
                  Nombre completo
                </label>
                <input
                  name="displayName"
                  type="text"
                  required
                  defaultValue={
                    editingUser.displayName !== "—" ? editingUser.displayName : ""
                  }
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase text-slate-500">Plan</label>
                  <select
                    name="plan"
                    value={editPlan}
                    onChange={(e) => setEditPlan(e.target.value as UserPlan)}
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 [color-scheme:dark]"
                  >
                    {PLAN_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-[#0f2744]">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase text-slate-500">Rol</label>
                  <select
                    name="role"
                    defaultValue={normalizeUserRole(editingUser.role)}
                    className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 [color-scheme:dark]"
                  >
                    {ROLE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-[#0f2744]">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <label className="flex items-center gap-2 rounded-lg border border-mq-premium-gold/30 bg-mq-premium-gold/5 px-3 py-2.5 text-sm text-slate-900">
                <input
                  type="checkbox"
                  name="mirAccessActive"
                  defaultChecked={editingUser.mirAccessActive}
                  className="h-4 w-4 accent-mq-premium-gold"
                />
                Acceso al módulo MIR (examen internacional, independiente del plan)
              </label>

              {showPaidFields ? (
                <div className="grid gap-4 rounded-lg border border-mq-accent/20 bg-mq-accent/5 p-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase text-slate-500">
                      Período (meses)
                    </label>
                    <select
                      name="planBillingCycle"
                      defaultValue={String(editingUser.planBillingCycle ?? 3)}
                      className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 [color-scheme:dark]"
                    >
                      <option value="1">1 mes</option>
                      <option value="3">3 meses</option>
                      <option value="6">6 meses</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase text-slate-500">
                      Fecha inicio
                    </label>
                    <input
                      name="planStartDate"
                      type="date"
                      defaultValue={toDateInput(editingUser.planStartedAt)}
                      className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 [color-scheme:dark]"
                    />
                  </div>
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-xs font-semibold uppercase text-slate-500">
                      Precio negociado (opcional)
                    </label>
                    <input
                      name="negotiatedPriceCOP"
                      type="text"
                      placeholder="Dejar vacío para no cambiar"
                      defaultValue={
                        editingUser.negotiatedPriceCOP != null
                          ? String(editingUser.negotiatedPriceCOP)
                          : ""
                      }
                      className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900"
                    />
                  </div>
                </div>
              ) : null}
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                disabled={isPending}
                onClick={() => setEditingId(null)}
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-500 hover:text-slate-900"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={isPending}
                className="rounded-lg bg-mq-accent px-4 py-2 text-sm font-semibold text-[#0A1F44] disabled:opacity-50"
              >
                {isPending ? "Guardando..." : "Guardar cambios"}
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
}

type SortableHeaderProps = {
  label: string;
  sortKey: SortKey;
  activeKey: SortKey;
  dir: SortDir;
  onSort: (key: SortKey) => void;
};

function SortableHeader({ label, sortKey, activeKey, dir, onSort }: SortableHeaderProps) {
  const active = sortKey === activeKey;
  const Icon = !active ? ArrowUpDown : dir === "asc" ? ArrowUp : ArrowDown;
  return (
    <th
      className="pb-3 pr-2 font-semibold whitespace-nowrap"
      aria-sort={active ? (dir === "asc" ? "ascending" : "descending") : "none"}
    >
      <button
        type="button"
        onClick={() => onSort(sortKey)}
        title={`Ordenar por ${label.toLowerCase()}`}
        className={`group inline-flex items-center gap-1 uppercase tracking-wide transition-colors hover:text-slate-900 ${
          active ? "text-slate-900" : ""
        }`}
      >
        {label}
        <Icon
          size={12}
          className={active ? "text-mq-accent" : "opacity-40 group-hover:opacity-80"}
        />
      </button>
    </th>
  );
}
