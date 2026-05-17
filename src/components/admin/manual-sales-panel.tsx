import { formatCOP, getPlanDisplayName } from "@/lib/plans/config";
import { getRecentManualSales } from "@/lib/server/manual-sales-admin";

function formatDate(iso: string) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("es-CO", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export async function ManualSalesPanel() {
  let sales: Awaited<ReturnType<typeof getRecentManualSales>> = [];
  let loadError: string | null = null;

  try {
    sales = await getRecentManualSales(30);
  } catch (e) {
    console.error("[admin] manual_sales", e);
    loadError =
      "No se pudieron cargar las ventas internas. Si es la primera vez, crea un usuario con plan de pago.";
  }

  const totalNegotiated = sales.reduce((sum, s) => sum + s.negotiatedPriceCOP, 0);

  return (
    <section className="rounded-xl border border-mq-border-strong bg-mq-surface-raised p-6 shadow-xl">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">Ventas internas (negociadores)</h2>
          <p className="mt-1 text-sm text-mq-muted">
            Últimos acuerdos registrados al crear usuarios con plan de pago manual.
          </p>
        </div>
        {sales.length > 0 ? (
          <p className="text-sm text-mq-muted">
            Mostrando <span className="font-semibold text-white">{sales.length}</span> ventas · Total
            negociado:{" "}
            <span className="font-semibold text-mq-accent">{formatCOP(totalNegotiated)}</span>
          </p>
        ) : null}
      </div>

      {loadError ? (
        <p className="mt-6 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-100">
          {loadError}
        </p>
      ) : sales.length === 0 ? (
        <p className="mt-6 text-sm text-mq-muted">
          Aún no hay ventas registradas. Al crear un usuario con plan Básico, Pro o Residente y precio
          negociado, aparecerá aquí.
        </p>
      ) : (
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[960px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-mq-muted">
                <th className="pb-3 pr-3">Registro</th>
                <th className="pb-3 pr-3">Usuario</th>
                <th className="pb-3 pr-3">Plan</th>
                <th className="pb-3 pr-3">Lista</th>
                <th className="pb-3 pr-3">Negociado</th>
                <th className="pb-3 pr-3">Dto.</th>
                <th className="pb-3 pr-3">Negociador</th>
                <th className="pb-3 pr-3">Vigencia</th>
                <th className="pb-3">Notas</th>
              </tr>
            </thead>
            <tbody>
              {sales.map((sale) => (
                <tr key={sale.id} className="border-b border-white/5 align-top">
                  <td className="py-3 pr-3 text-xs text-mq-muted whitespace-nowrap">
                    {formatDate(sale.createdAt)}
                  </td>
                  <td className="py-3 pr-3">
                    <p className="font-medium text-white">{sale.displayName}</p>
                    <p className="text-xs text-mq-muted">{sale.email}</p>
                  </td>
                  <td className="py-3 pr-3 whitespace-nowrap">
                    <span className="font-medium text-white">
                      {getPlanDisplayName(sale.plan)}
                    </span>
                    <span className="text-mq-muted"> · {sale.billingCycle}m</span>
                  </td>
                  <td className="py-3 pr-3 text-mq-muted whitespace-nowrap">
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
                      <span className="text-mq-muted">—</span>
                    )}
                  </td>
                  <td className="py-3 pr-3 text-mq-muted">
                    {sale.negotiatorName ?? "—"}
                  </td>
                  <td className="py-3 pr-3 text-xs text-mq-muted whitespace-nowrap">
                    {formatDate(sale.planStartedAt)}
                    <span className="text-white/40"> → </span>
                    {formatDate(sale.planExpiresAt)}
                  </td>
                  <td className="py-3 max-w-[140px] truncate text-xs text-mq-muted" title={sale.notes ?? ""}>
                    {sale.notes ?? "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
