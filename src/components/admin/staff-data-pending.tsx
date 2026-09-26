/**
 * Se muestra en lugar de los datos del panel cuando la petición no trae una
 * sesión de staff válida en servidor. No contiene datos: el guard de cliente
 * crea la sesión y refresca la página, o pide iniciar sesión.
 */
export function StaffDataPending() {
  return (
    <div role="status" className="flex min-h-[40vh] items-center justify-center">
      <div className="flex items-center gap-3 text-sm text-slate-500">
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-mq-accent border-t-transparent" />
        Verificando sesión…
      </div>
    </div>
  );
}
