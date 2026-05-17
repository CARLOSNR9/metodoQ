import { getFirebaseAdminDb } from "@/lib/server/firebase-admin";

type Application = {
  id: string;
  name: string;
  email: string;
  phone: string;
  university: string;
  status: string;
  createdAt: string | null;
};

async function getResidenteApplications(): Promise<Application[]> {
  const snap = await getFirebaseAdminDb()
    .collection("residente_applications")
    .orderBy("createdAt", "desc")
    .limit(20)
    .get();

  return snap.docs.map((doc) => {
    const data = doc.data();
    const created = data.createdAt?.toDate?.() as Date | undefined;
    return {
      id: doc.id,
      name: String(data.name ?? ""),
      email: String(data.email ?? ""),
      phone: String(data.phone ?? ""),
      university: String(data.university ?? ""),
      status: String(data.status ?? "pending"),
      createdAt: created ? created.toISOString() : null,
    };
  });
}

export async function ResidenteApplicationsPanel() {
  let applications: Application[] = [];
  try {
    applications = await getResidenteApplications();
  } catch (e) {
    console.error("residente_applications", e);
  }

  return (
    <section className="rounded-xl border border-mq-border-strong bg-mq-surface-raised p-6 shadow-xl">
      <h2 className="text-xl font-semibold text-white">Postulaciones Plan Residente</h2>
      <p className="mt-1 text-sm text-mq-muted">
        Flujo manual: contacta por WhatsApp y activa el plan desde creación de usuario.
      </p>

      {applications.length === 0 ? (
        <p className="mt-6 text-sm text-mq-muted">No hay postulaciones recientes.</p>
      ) : (
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-mq-muted">
                <th className="pb-3 pr-4">Nombre</th>
                <th className="pb-3 pr-4">Contacto</th>
                <th className="pb-3 pr-4">Universidad</th>
                <th className="pb-3 pr-4">Estado</th>
                <th className="pb-3">Fecha</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id} className="border-b border-white/5">
                  <td className="py-3 pr-4 font-medium text-white">{app.name}</td>
                  <td className="py-3 pr-4 text-mq-muted">
                    <div>{app.email}</div>
                    <div className="text-xs">{app.phone}</div>
                  </td>
                  <td className="py-3 pr-4 text-mq-muted">{app.university || "—"}</td>
                  <td className="py-3 pr-4">
                    <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-xs font-semibold text-amber-200">
                      {app.status}
                    </span>
                  </td>
                  <td className="py-3 text-xs text-mq-muted">
                    {app.createdAt
                      ? new Date(app.createdAt).toLocaleDateString("es-CO")
                      : "—"}
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
