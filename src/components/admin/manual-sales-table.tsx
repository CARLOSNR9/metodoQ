"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import {
  deleteManualSaleAction,
  updateManualSaleAction,
} from "@/app/admin/manual-sale-actions";
import { getFirebaseAuth } from "@/lib/firebase";
import { formatCOP, getPlanDisplayName } from "@/lib/plans/config";
import type { ManualSaleRow } from "@/lib/server/manual-sales-admin";

function formatDate(iso: string) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("es-CO", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function toDateInput(iso: string) {
  if (!iso) return "";
  const d = new Date(iso);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

type ManualSalesTableProps = {
  sales: ManualSaleRow[];
};

export function ManualSalesTable({ sales }: ManualSalesTableProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const editingSale = sales.find((s) => s.id === editingId);

  async function getToken() {
    return (await getFirebaseAuth().currentUser?.getIdToken()) ?? "";
  }

  function handleDelete(sale: ManualSaleRow) {
    const confirmed = window.confirm(
      `¿Eliminar la venta de ${sale.displayName} (${sale.email})?\n\n` +
        "También se borrará el usuario de Firebase y no podrá iniciar sesión. Esta acción no se puede deshacer.",
    );
    if (!confirmed) return;

    setError("");
    setMessage("");
    startTransition(async () => {
      const result = await deleteManualSaleAction(sale.id, await getToken(), {
        deleteUser: true,
      });
      if (result.error) {
        setError(result.error);
      } else {
        setMessage("Venta y usuario eliminados.");
        setEditingId(null);
        router.refresh();
      }
    });
  }

  function handleUpdate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!editingSale) return;

    setError("");
    setMessage("");
    const formData = new FormData(e.currentTarget);
    formData.set("saleId", editingSale.id);

    startTransition(async () => {
      formData.set("idToken", await getToken());
      const result = await updateManualSaleAction(formData);
      if (result.error) {
        setError(result.error);
      } else {
        setMessage("Venta actualizada correctamente.");
        setEditingId(null);
        router.refresh();
      }
    });
  }

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

      <div className="overflow-x-auto">
        <table className="w-full min-w-[1040px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500">
              <th className="pb-3 pr-3">Registro</th>
              <th className="pb-3 pr-3">Usuario</th>
              <th className="pb-3 pr-3">Plan</th>
              <th className="pb-3 pr-3">Lista</th>
              <th className="pb-3 pr-3">Negociado</th>
              <th className="pb-3 pr-3">Dto.</th>
              <th className="pb-3 pr-3">Negociador</th>
              <th className="pb-3 pr-3">Vigencia</th>
              <th className="pb-3 pr-3">Notas</th>
              <th className="pb-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale) => (
              <tr key={sale.id} className="border-b border-white/5 align-top">
                <td className="py-3 pr-3 text-xs text-slate-500 whitespace-nowrap">
                  {formatDate(sale.createdAt)}
                </td>
                <td className="py-3 pr-3">
                  <p className="font-medium text-slate-900">{sale.displayName}</p>
                  <p className="text-xs text-slate-500">{sale.email}</p>
                </td>
                <td className="py-3 pr-3 whitespace-nowrap">
                  <span className="font-medium text-slate-900">
                    {getPlanDisplayName(sale.plan)}
                  </span>
                  <span className="text-slate-500"> · {sale.billingCycle}m</span>
                </td>
                <td className="py-3 pr-3 text-slate-500 whitespace-nowrap">
                  {formatCOP(sale.listPriceCOP)}
                </td>
                <td className="py-3 pr-3 font-semibold text-mq-accent whitespace-nowrap">
                  {formatCOP(sale.negotiatedPriceCOP)}
                </td>
                <td className="py-3 pr-3 whitespace-nowrap">
                  {sale.discountPercent > 0 ? (
                    <span className="rounded-md bg-emerald-500/15 px-2 py-0.5 text-xs font-medium text-emerald-300">
                      −{sale.discountPercent}%
                    </span>
                  ) : (
                    <span className="text-slate-500">—</span>
                  )}
                </td>
                <td className="py-3 pr-3 text-slate-500">{sale.negotiatorName ?? "—"}</td>
                <td className="py-3 pr-3 text-xs text-slate-500 whitespace-nowrap">
                  {formatDate(sale.planStartedAt)}
                  <span className="text-slate-900/40"> → </span>
                  {formatDate(sale.planExpiresAt)}
                </td>
                <td
                  className="py-3 pr-3 max-w-[120px] truncate text-xs text-slate-500"
                  title={sale.notes ?? ""}
                >
                  {sale.notes ?? "—"}
                </td>
                <td className="py-3 whitespace-nowrap">
                  <div className="flex gap-2">
                    <button
                      type="button"
                      disabled={isPending}
                      onClick={() => {
                        setError("");
                        setMessage("");
                        setEditingId(sale.id);
                      }}
                      className="rounded-lg border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-900 transition hover:border-mq-accent hover:text-mq-accent disabled:opacity-50"
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      disabled={isPending}
                      onClick={() => handleDelete(sale)}
                      className="rounded-lg border border-rose-500/40 px-2.5 py-1 text-xs font-medium text-rose-300 transition hover:bg-rose-500/10 disabled:opacity-50"
                    >
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingSale ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <form
            onSubmit={handleUpdate}
            className="w-full max-w-lg rounded-2xl border border-slate-200 bg-[#0f2744] p-6 shadow-2xl"
          >
            <h3 className="text-lg font-semibold text-slate-900">Editar venta interna</h3>
            <p className="mt-1 text-sm text-slate-500">
              {editingSale.displayName} · {editingSale.email}
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-semibold uppercase text-slate-500">
                  Precio negociado (COP)
                </label>
                <input
                  name="negotiatedPriceCOP"
                  type="text"
                  required
                  defaultValue={String(editingSale.negotiatedPriceCOP)}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase text-slate-500">
                  Período (meses)
                </label>
                <select
                  name="planBillingCycle"
                  defaultValue={String(editingSale.billingCycle)}
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
                  required
                  defaultValue={toDateInput(editingSale.planStartedAt)}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900 [color-scheme:dark]"
                />
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-semibold uppercase text-slate-500">
                  Negociador
                </label>
                <input
                  name="negotiatorName"
                  type="text"
                  defaultValue={editingSale.negotiatorName ?? ""}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900"
                />
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-semibold uppercase text-slate-500">Notas</label>
                <input
                  name="saleNotes"
                  type="text"
                  defaultValue={editingSale.notes ?? ""}
                  className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-900"
                />
              </div>
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
