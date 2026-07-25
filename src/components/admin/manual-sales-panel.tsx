import { formatCOP } from "@/lib/plans/config";
import { getRecentManualSales } from "@/lib/server/manual-sales-admin";
import { ManualSalesTable } from "@/components/admin/manual-sales-table";

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
    <section className="rounded-xl border border-slate-200 bg-white-raised p-6 shadow-xl">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Ventas internas (negociadores)</h2>
          <p className="mt-1 text-sm text-slate-500">
            Últimos acuerdos registrados al crear usuarios con plan de pago manual. Puedes editar o
            eliminar registros de prueba.
          </p>
        </div>
        {sales.length > 0 ? (
          <p className="text-sm text-slate-500">
            Mostrando <span className="font-semibold text-slate-900">{sales.length}</span> ventas · Total
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
        <p className="mt-6 text-sm text-slate-500">
          Aún no hay ventas registradas. Al crear un usuario con plan Básico, Pro o Residente y
          precio negociado, aparecerá aquí.
        </p>
      ) : (
        <div className="mt-6">
          <ManualSalesTable sales={sales} />
        </div>
      )}
    </section>
  );
}
