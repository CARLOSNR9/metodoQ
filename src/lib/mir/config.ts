/**
 * Configuración del módulo "Simulacro MIR" — producto de pago único,
 * independiente de los planes mensuales (FREE/BASICO/PRO/RESIDENTE).
 */

export const MIR_PRODUCT_CODE = "MIR_SIMULACRO";

/**
 * TODO(negocio): precio definitivo pendiente de decisión comercial.
 * Este valor solo se usa para mostrar el precio en la landing/checkout;
 * el cobro real lo determina el Price configurado en Stripe (STRIPE_PRICE_MIR).
 */
export const MIR_DISPLAY_PRICE_COP = 0;

/**
 * TODO(negocio): confirmar fecha oficial de la convocatoria MIR con el
 * Ministerio de Sanidad antes de publicar la landing.
 */
export const MIR_EXAM_DATE: string | null = null;

export function getMirStripePriceId(): string | undefined {
  return process.env.STRIPE_PRICE_MIR;
}
