/**
 * Configuración del módulo "Simulacro MIR" — producto de pago único,
 * independiente de los planes mensuales (FREE/BASICO/PRO/RESIDENTE).
 */

export const MIR_PRODUCT_CODE = "MIR_SIMULACRO";

/**
 * Fecha oficial del examen MIR (Orden SND/854/2026, BOE 10 ago 2026):
 * sábado 23 de enero de 2027. 200 preguntas + 10 de reserva, 9.676 plazas
 * de Medicina.
 */
export const MIR_EXAM_DATE = "2027-01-23";

/** Días restantes hasta el examen (0 si ya pasó). */
export function getDaysUntilMirExam(today: Date = new Date()): number {
  const examDate = new Date(`${MIR_EXAM_DATE}T00:00:00`);
  const startOfToday = new Date(today);
  startOfToday.setHours(0, 0, 0, 0);
  const diffMs = examDate.getTime() - startOfToday.getTime();
  return Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
}

export function getMirStripePriceId(): string | undefined {
  return process.env.STRIPE_PRICE_MIR;
}

/**
 * No mostramos precio: el acceso se negocia por WhatsApp mientras no haya
 * un precio de venta definido.
 */
const MIR_WHATSAPP_NUMBER = "573146950198";

export function getMirWhatsAppUrl(): string {
  const message = "Hola, quiero información sobre el módulo Simulacro MIR de Método Q.";
  return `https://wa.me/${MIR_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
