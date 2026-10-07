/** Enlace wa.me sin API externa */

export function getWhatsAppSupportUrl(message?: string): string | null {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
  if (!raw) return null;

  const base = `https://wa.me/${raw}`;
  if (!message?.trim()) return base;

  return `${base}?text=${encodeURIComponent(message.trim())}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hola, tengo una consulta sobre Método Q y la preparación para residencia médica.";

/** Número de respaldo si NEXT_PUBLIC_WHATSAPP_NUMBER no está configurado (el mismo del módulo MIR). */
const FALLBACK_WHATSAPP_NUMBER = "573146950198";

/** El plan Residente no se compra en la web: se informa y se contrata por WhatsApp. */
export function getResidenteWhatsAppUrl(): string {
  const message = "Hola, quiero más información sobre el plan Residente de Método Q.";
  return (
    getWhatsAppSupportUrl(message) ??
    `https://wa.me/${FALLBACK_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
  );
}
