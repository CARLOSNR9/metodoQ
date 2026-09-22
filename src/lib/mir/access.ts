export type MirAccessInfo = {
  active: boolean;
  purchasedAt: string | null;
  expiresAt: string | null;
  stripeCheckoutSessionId?: string | null;
} | null | undefined;

/** true si el usuario compró el módulo MIR y no ha vencido su acceso. */
export function hasMirAccess(mirAccess: MirAccessInfo): boolean {
  if (!mirAccess?.active) return false;
  if (!mirAccess.expiresAt) return true;
  return new Date(mirAccess.expiresAt).getTime() > Date.now();
}
