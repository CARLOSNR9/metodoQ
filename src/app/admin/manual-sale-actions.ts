"use server";

import { revalidatePath } from "next/cache";
import {
  buildManualPlanDates,
  discountPercent,
  getCatalogListPrice,
  parseNegotiatedPrice,
  parsePlanStartDate,
} from "@/lib/plans/manual-sale";
import { parseBillingCycle, parsePaidPlanId } from "@/lib/plans/config";
import { getFirebaseAdminAuth, getFirebaseAdminDb } from "@/lib/server/firebase-admin";
import { verifyStaffCaller } from "@/lib/server/verify-staff";

async function requireAdmin(idToken: string | null | undefined) {
  const caller = await verifyStaffCaller(idToken);
  if (!caller.ok) return { ok: false as const, error: caller.error };
  if (!caller.isAdmin) {
    return { ok: false as const, error: "Solo administradores pueden gestionar ventas internas." };
  }
  return { ok: true as const, caller };
}

export async function updateManualSaleAction(formData: FormData) {
  const auth = await requireAdmin(formData.get("idToken") as string | null);
  if (!auth.ok) return { error: auth.error };

  const saleId = String(formData.get("saleId") ?? "");
  if (!saleId) return { error: "Venta no válida." };

  const negotiatedPriceCOP = parseNegotiatedPrice(
    String(formData.get("negotiatedPriceCOP") ?? ""),
  );
  if (negotiatedPriceCOP === null) {
    return { error: "Precio negociado no válido." };
  }

  const cycle = parseBillingCycle(String(formData.get("planBillingCycle") ?? ""));
  if (!cycle) return { error: "Período no válido." };

  const startDate = parsePlanStartDate(String(formData.get("planStartDate") ?? ""));
  if (!startDate) return { error: "Fecha de inicio no válida." };

  const negotiatorName =
    String(formData.get("negotiatorName") ?? "").trim() || null;
  const notes = String(formData.get("saleNotes") ?? "").trim() || null;

  try {
    const db = getFirebaseAdminDb();
    const saleRef = db.collection("manual_sales").doc(saleId);
    const saleSnap = await saleRef.get();
    if (!saleSnap.exists) {
      return { error: "No se encontró la venta." };
    }

    const sale = saleSnap.data()!;
    const planId = parsePaidPlanId(String(sale.plan));
    if (!planId) {
      return { error: "Plan de la venta no válido." };
    }
    const listPriceCOP = getCatalogListPrice(planId, cycle);
    const dates = buildManualPlanDates(startDate, cycle);
    const discount = discountPercent(listPriceCOP, negotiatedPriceCOP);
    const userId = String(sale.userId);

    const manualSale = {
      negotiatedPriceCOP,
      listPriceCOP,
      negotiatorName,
      notes,
      recordedAt: String(sale.createdAt ?? new Date().toISOString()),
      recordedByUid: auth.caller.uid,
      updatedAt: new Date().toISOString(),
      updatedByUid: auth.caller.uid,
    };

    await saleRef.set(
      {
        billingCycle: cycle,
        listPriceCOP,
        negotiatedPriceCOP,
        discountPercent: discount,
        planStartedAt: dates.planStartedAt,
        planExpiresAt: dates.planExpiresAt,
        negotiatorName,
        notes,
        updatedAt: new Date().toISOString(),
      },
      { merge: true },
    );

    if (userId) {
      await db
        .collection("users")
        .doc(userId)
        .set(
          {
            plan: planId,
            planBillingCycle: cycle,
            planStartedAt: dates.planStartedAt,
            planExpiresAt: dates.planExpiresAt,
            manualSale,
          },
          { merge: true },
        );
    }

    revalidatePath("/admin");
    return { success: true };
  } catch (e) {
    console.error(e);
    return { error: "No se pudo actualizar la venta." };
  }
}

export async function deleteManualSaleAction(
  saleId: string,
  idToken: string | null | undefined,
  options?: { deleteUser?: boolean },
) {
  const auth = await requireAdmin(idToken);
  if (!auth.ok) return { error: auth.error };

  if (!saleId) return { error: "Venta no válida." };

  const deleteUser = options?.deleteUser !== false;

  try {
    const db = getFirebaseAdminDb();
    const authAdmin = getFirebaseAdminAuth();
    const saleRef = db.collection("manual_sales").doc(saleId);
    const saleSnap = await saleRef.get();

    if (!saleSnap.exists) {
      return { error: "No se encontró la venta." };
    }

    const userId = String(saleSnap.data()?.userId ?? "");

    await saleRef.delete();

    if (deleteUser && userId) {
      try {
        await authAdmin.deleteUser(userId);
      } catch (e) {
        console.warn("Auth user may already be deleted", e);
      }
      await db.collection("users").doc(userId).delete();
    } else if (userId) {
      await db.collection("users").doc(userId).set(
        {
          plan: "FREE",
          planBillingCycle: null,
          planStartedAt: null,
          planExpiresAt: null,
          manualSale: null,
        },
        { merge: true },
      );
    }

    revalidatePath("/admin");
    return { success: true };
  } catch (e) {
    console.error(e);
    return { error: "No se pudo eliminar la venta." };
  }
}
