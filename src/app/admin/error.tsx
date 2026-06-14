"use client";

export default function AdminError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0A1F44] px-4">
      <section className="w-full max-w-md rounded-2xl border border-mq-border-strong bg-mq-surface-raised p-8 text-center shadow-2xl">
        <h1 className="text-xl font-semibold text-white">No se pudo cargar el panel</h1>
        <p className="mt-3 text-sm text-mq-muted">
          Revisa que las variables FIREBASE_ADMIN_* estén configuradas en Vercel y que los índices
          de Firestore estén desplegados.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="mt-6 rounded-lg bg-mq-accent px-5 py-2.5 text-sm font-bold text-[#0A1F44] hover:bg-mq-accent-hover"
        >
          Reintentar
        </button>
      </section>
    </div>
  );
}
