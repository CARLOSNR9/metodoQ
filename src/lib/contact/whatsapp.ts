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
