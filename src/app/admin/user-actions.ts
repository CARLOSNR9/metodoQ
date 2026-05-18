"use server";

import { revalidatePath } from "next/cache";
import type { UserPlan } from "@/lib/auth";
import {
  buildManualPlanDates,
  discountPercent,
  getCatalogListPrice,
  parseNegotiatedPrice,
  parsePlanStartDate,
} from "@/lib/plans/manual-sale";
import { parseBillingCycle } from "@/lib/plans/config";
import { canAssignRole, verifyStaffCaller } from "@/lib/server/verify-staff";
import { getFirebaseAdminAuth, getFirebaseAdminDb } from "@/lib/server/firebase-admin";
import {
  deleteFirebaseAuthUser,
  deleteUserFirestoreData,
} from "@/lib/server/delete-user-cascade";
import { normalizeUserRole } from "@/lib/roles";

const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL ?? "admin@gmail.com";

async function requireAdmin(idToken: string | null | undefined) {
  const caller = await verifyStaffCaller(idToken);
  if (!caller.ok) return { ok: false as const, error: caller.error };
  if (!caller.isAdmin) {
    return { ok: false as const, error: "Solo administradores pueden gestionar usuarios." };
  }
  return { ok: true as const, caller };
}

export async function deleteUserAction(
  userId: string,
  idToken: string | null | undefined,
) {
  const auth = await requireAdmin(idToken);
  if (!auth.ok) return { error: auth.error };

  if (!userId) return { error: "Usuario no válido." };

  if (userId === auth.caller.uid) {
    return { error: "No puedes eliminar tu propia cuenta de administrador." };
  }

  try {
    const db = getFirebaseAdminDb();
    const authAdmin = getFirebaseAdminAuth();
    const userSnap = await db.collection("users").doc(userId).get();
    const email = userSnap.data()?.email as string | undefined;

    if (email === ADMIN_EMAIL) {
      return {
        error: "No se puede eliminar la cuenta administrador principal del sistema.",
      };
    }

    const cascade = await deleteUserFirestoreData(db, userId, email);
    await deleteFirebaseAuthUser(authAdmin, userId, email);
    await db.collection("users").doc(userId).delete();

    revalidatePath("/admin");
    return {
      success: true,
      deleted: cascade,
    };
  } catch (e) {
    console.error("[deleteUserAction]", e);
    const code = (e as { code?: string }).code;
    if (code === "auth/user-not-found") {
      return {
        error:
          "Se borraron los datos en Firestore, pero no había cuenta en Authentication con ese UID.",
      };
    }
    return { error: "No se pudo eliminar el usuario por completo. Revisa la consola del servidor." };
  }
}

export async function updateUserAction(formData: FormData) {
  const auth = await requireAdmin(formData.get("idToken") as string | null);
  if (!auth.ok) return { error: auth.error };

  const userId = String(formData.get("userId") ?? "");
  const displayName = String(formData.get("displayName") ?? "").trim();
  const plan = (formData.get("plan") as UserPlan) || "FREE";
  const role = normalizeUserRole(formData.get("role") as string);

  if (!userId || !displayName) {
    return { error: "Nombre y usuario son obligatorios." };
  }

  if (!canAssignRole(auth.caller.isAdmin, role)) {
    return { error: "No tienes permiso para asignar rol de administrador." };
  }

  const validPlans: UserPlan[] = ["FREE", "BASICO", "PRO", "RESIDENTE"];
  if (!validPlans.includes(plan)) {
    return { error: "Plan no válido." };
  }

  try {
    const db = getFirebaseAdminDb();
    const userRef = db.collection("users").doc(userId);
    const userSnap = await userRef.get();
    if (!userSnap.exists) {
      return { error: "Usuario no encontrado." };
    }

    const existing = userSnap.data()!;
    const email = String(existing.email ?? "");
    const update: Record<string, unknown> = {
      displayName,
      plan,
      role,
    };

    if (plan === "FREE") {
      update.planBillingCycle = null;
      update.planStartedAt = null;
      update.planExpiresAt = null;
    } else {
      const cycle = parseBillingCycle(String(formData.get("planBillingCycle") ?? "3"));
      if (!cycle) {
        return { error: "Período no válido para plan de pago." };
      }

      const startDate =
        parsePlanStartDate(String(formData.get("planStartDate") ?? "")) ??
        (existing.planStartedAt
          ? new Date(String(existing.planStartedAt))
          : new Date());

      const dates = buildManualPlanDates(startDate, cycle);
      update.planBillingCycle = cycle;
      update.planStartedAt = dates.planStartedAt;
      update.planExpiresAt = dates.planExpiresAt;

      const negotiated = parseNegotiatedPrice(
        String(formData.get("negotiatedPriceCOP") ?? ""),
      );
      if (negotiated !== null) {
        const listPriceCOP = getCatalogListPrice(plan, cycle);
        const manualSale = {
          ...(typeof existing.manualSale === "object" && existing.manualSale
            ? existing.manualSale
            : {}),
          negotiatedPriceCOP: negotiated,
          listPriceCOP,
          recordedAt:
            (existing.manualSale as { recordedAt?: string })?.recordedAt ??
            new Date().toISOString(),
          recordedByUid: auth.caller.uid,
          updatedAt: new Date().toISOString(),
          updatedByUid: auth.caller.uid,
        };
        update.manualSale = manualSale;

        const salesSnap = await db
          .collection("manual_sales")
          .where("userId", "==", userId)
          .limit(1)
          .get();

        if (!salesSnap.empty) {
          await salesSnap.docs[0].ref.set(
            {
              plan,
              billingCycle: cycle,
              listPriceCOP,
              negotiatedPriceCOP: negotiated,
              discountPercent: discountPercent(listPriceCOP, negotiated),
              planStartedAt: dates.planStartedAt,
              planExpiresAt: dates.planExpiresAt,
              displayName,
              updatedAt: new Date().toISOString(),
            },
            { merge: true },
          );
        }
      }
    }

    if (userId === auth.caller.uid && role !== "admin" && email !== ADMIN_EMAIL) {
      return { error: "No puedes quitarte el rol de administrador a ti mismo." };
    }

    await userRef.set(update, { merge: true });

    try {
      await getFirebaseAdminAuth().updateUser(userId, { displayName });
    } catch (e) {
      console.warn("Could not update Auth displayName", e);
    }

    revalidatePath("/admin");
    return { success: true };
  } catch (e) {
    console.error(e);
    return { error: "No se pudo actualizar el usuario." };
  }
}
