import { MessageCircle } from "lucide-react";
import { getMirWhatsAppUrl } from "@/lib/mir/config";

/** Botón flotante para hablar por WhatsApp con el equipo médico. */
export function WhatsAppFloat({ label = "¿Dudas? Habla con un médico" }: { label?: string }) {
  return (
    <a
      href={getMirWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="fixed bottom-4 right-4 z-[70] flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-lg shadow-black/20 transition hover:brightness-105 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}
