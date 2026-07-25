import { getFirebaseAdminDb } from "@/lib/server/firebase-admin";
import { ResidenteApplicationRow } from "./residente-application-row";

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

type PanelVariant = "admin" | "moderator";

export async function ResidenteApplicationsPanel({
  variant = "admin",
}: {
  variant?: PanelVariant;
}) {
  let applications: Application[] = [];
  try {
    applications = await getResidenteApplications();
  } catch (e) {
    console.error("residente_applications", e);
  }

  const activationHint =
    variant === "moderator"
      ? "Si apruebas una postulación, solicita a un administrador que active el plan en la plataforma."
      : "Para activar el plan, usa creación de usuario en admin.";

  return (
    <section className="rounded-xl border border-slate-200 bg-white-raised p-6 shadow-xl">
      <h2 className="text-xl font-semibold text-slate-900">Postulaciones Plan Residente</h2>
      <p className="mt-1 text-sm text-slate-500">
        Actualiza el estado tras contactar al candidato. {activationHint}
      </p>

      {applications.length === 0 ? (
        <p className="mt-6 text-sm text-slate-500">No hay postulaciones recientes.</p>
      ) : (
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500">
                <th className="pb-3 pr-4">Nombre</th>
                <th className="pb-3 pr-4">Contacto</th>
                <th className="pb-3 pr-4">Universidad</th>
                <th className="pb-3 pr-4">Estado</th>
                <th className="pb-3">Fecha</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <ResidenteApplicationRow key={app.id} {...app} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
