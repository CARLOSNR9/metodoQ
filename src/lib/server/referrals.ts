import { getFirebaseAdminAuth, getFirebaseAdminDb } from "@/lib/server/firebase-admin";
import { roleUsesStudentSubscription } from "@/lib/roles";

/**
 * Programa de referidos: con REFERRALS_FOR_REWARD referidos válidos, el
 * referente recibe REWARD_DAYS días de PRO, una sola vez.
 *
 * El campo `users/{uid}.referredBy` lo escribe el cliente, así que no se usa
 * para contar. Cada referido se registra en servidor, una única vez por cuenta
 * referida, en `referrals/{referredUid}`, y el recuento y la recompensa viven
 * en `referral_rewards/{referrerUid}`. Ambas colecciones son solo de servidor
 * (las reglas de Firestore niegan por defecto cualquier colección no listada).
 */
export const REFERRALS_FOR_REWARD = 3;
export const REWARD_DAYS = 7;
/** Solo cuentan cuentas recién creadas: una cuenta antigua no puede "hacerse" referida. */
export const MAX_REFERRED_ACCOUNT_AGE_MS = 60 * 60 * 1000;

const REFERRAL_CODE_PATTERN = /^[A-Z0-9]{4,12}$/;

export type ReferralOutcome =
  | { status: "invalid_code" }
  | { status: "not_eligible"; reason: string }
  | { status: "already_recorded" }
  | { status: "recorded"; rewarded: boolean };

type UserData = Record<string, unknown>;

/** Plan de pago vigente: la recompensa no debe tocarlo (ni recortarlo ni sustituirlo). */
export function hasActivePaidPlan(user: UserData, now: Date): boolean {
  const plan = String(user.plan ?? "FREE");
  if (plan === "FREE") return false;
  const expiresAt = user.planExpiresAt;
  if (expiresAt == null || expiresAt === "") return true;
  const expires = new Date(String(expiresAt));
  return Number.isNaN(expires.getTime()) || expires > now;
}

export async function recordReferral(
  referredUid: string,
  rawCode: unknown,
  now: Date = new Date(),
): Promise<ReferralOutcome> {
  const code = typeof rawCode === "string" ? rawCode.trim().toUpperCase() : "";
  if (!REFERRAL_CODE_PATTERN.test(code)) {
    return { status: "invalid_code" };
  }

  const authUser = await getFirebaseAdminAuth().getUser(referredUid);
  const createdAt = new Date(authUser.metadata.creationTime);
  if (!(now.getTime() - createdAt.getTime() <= MAX_REFERRED_ACCOUNT_AGE_MS)) {
    return { status: "not_eligible", reason: "La cuenta no es nueva." };
  }

  const db = getFirebaseAdminDb();
  const referralRef = db.collection("referrals").doc(referredUid);
  const referredRef = db.collection("users").doc(referredUid);
  const referrerQuery = db.collection("users").where("referralCode", "==", code).limit(2);

  return db.runTransaction(async (tx) => {
    const [referralSnap, referredSnap, referrerSnap] = await Promise.all([
      tx.get(referralRef),
      tx.get(referredRef),
      tx.get(referrerQuery),
    ]);

    // Idempotente: cada cuenta referida cuenta una sola vez, pase lo que pase después.
    if (referralSnap.exists) {
      return { status: "already_recorded" } as const;
    }

    // El código debe corresponder a un único usuario existente.
    if (referrerSnap.size !== 1) {
      return { status: "invalid_code" } as const;
    }
    const referrerDoc = referrerSnap.docs[0];
    const referrerUid = referrerDoc.id;
    const referrer = (referrerDoc.data() ?? {}) as UserData;

    const referred = (referredSnap.data() ?? {}) as UserData;
    if (!referredSnap.exists || String(referred.referredBy ?? "").toUpperCase() !== code) {
      return { status: "not_eligible", reason: "El registro no indica ese código." } as const;
    }
    if (referrerUid === referredUid) {
      return { status: "not_eligible", reason: "No puedes referirte a ti mismo." } as const;
    }

    const rewardRef = db.collection("referral_rewards").doc(referrerUid);
    const rewardSnap = await tx.get(rewardRef);
    const reward = (rewardSnap.data() ?? {}) as UserData;
    const count = Number(reward.count ?? 0) + 1;
    const nowIso = now.toISOString();

    tx.create(referralRef, {
      referredUid,
      referrerUid,
      referralCode: code,
      createdAt: nowIso,
    });

    const alreadyRewarded = typeof reward.rewardedAt === "string";
    const canReceivePlan =
      roleUsesStudentSubscription(referrer.role as string | undefined) &&
      !hasActivePaidPlan(referrer, now);
    const rewarded = !alreadyRewarded && count >= REFERRALS_FOR_REWARD && canReceivePlan;

    if (rewarded) {
      const expiresAt = new Date(now.getTime() + REWARD_DAYS * 24 * 60 * 60 * 1000);
      tx.update(referrerDoc.ref, {
        plan: "PRO",
        planStartedAt: nowIso,
        planExpiresAt: expiresAt.toISOString(),
      });
    }

    tx.set(
      rewardRef,
      {
        referrerUid,
        count,
        updatedAt: nowIso,
        ...(rewarded ? { rewardedAt: nowIso, rewardDays: REWARD_DAYS } : {}),
      },
      { merge: true },
    );

    return { status: "recorded", rewarded } as const;
  });
}
