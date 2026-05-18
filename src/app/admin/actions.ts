"use server";

import { revalidatePath } from "next/cache";
import { UserPlan } from "@/lib/auth";
import {
  discountPercent,
  parseManualSaleFromForm,
  type ManualSaleRecord,
} from "@/lib/plans/manual-sale";
import { canAssignRole, verifyStaffCaller } from "@/lib/server/verify-staff";
import { getFirebaseAdminAuth, getFirebaseAdminDb } from "@/lib/server/firebase-admin";
import { isUccPastoUniversity } from "@/lib/diagnostic/university-match";
import { normalizeUserRole } from "@/lib/roles";
import type { BillingCycle } from "@/lib/plans/config";

export async function createUserAction(formData: FormData) {
  const idToken = formData.get("idToken") as string | null;
  const caller = await verifyStaffCaller(idToken);

  if (!caller.ok) {
    return { error: caller.error };
  }

  if (!caller.isAdmin) {
    return { error: "Solo administradores pueden crear usuarios manualmente." };
  }

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const displayName = formData.get("displayName") as string;
  const plan = (formData.get("plan") as UserPlan) || "FREE";
  const role = normalizeUserRole(formData.get("role") as string);
  const goalUniversity = (formData.get("goalUniversity") as string)?.trim() || "";
  const goalSpecialty = (formData.get("goalSpecialty") as string)?.trim() || "";
  const resolvedSpecialty =
    goalSpecialty ||
    (goalUniversity && isUccPastoUniversity(goalUniversity) ? "Medicina Interna" : "");

  if (!email || !password || !displayName) {
    return { error: "Faltan campos obligatorios." };
  }

  if (!canAssignRole(caller.isAdmin, role)) {
    return { error: "No tienes permiso para asignar rol de administrador." };
  }

  const validPlans: UserPlan[] = ["FREE", "BASICO", "PRO", "RESIDENTE"];
  if (!validPlans.includes(plan)) {
    return { error: "Plan no válido." };
  }

  const hasPaidPlan = plan !== "FREE";
  let planBillingCycle: BillingCycle | null = null;
  let planStartedAt: string | null = null;
  let planExpiresAt: string | null = null;
  let manualSale: ManualSaleRecord | null = null;

  if (hasPaidPlan) {
    const sale = parseManualSaleFromForm(formData, plan);
    if (!sale.ok) {
      return { error: sale.error };
    }
    planBillingCycle = sale.cycle;
    planStartedAt = sale.planStartedAt;
    planExpiresAt = sale.planExpiresAt;
    manualSale = {
      negotiatedPriceCOP: sale.negotiatedPriceCOP,
      listPriceCOP: sale.listPriceCOP,
      negotiatorName: sale.negotiatorName,
      notes: sale.notes,
      recordedAt: new Date().toISOString(),
      recordedByUid: caller.uid,
    };
  }

  try {
    const auth = getFirebaseAdminAuth();
    const db = getFirebaseAdminDb();

    const userRecord = await auth.createUser({
      email,
      password,
      displayName,
    });

    const now = new Date().toISOString();

    const userDoc = {
      uid: userRecord.uid,
      email: userRecord.email,
      displayName,
      plan,
      role,
      planBillingCycle,
      createdAt: now,
      streakCount: 0,
      streakLastTrainingDate: null,
      strengths: [],
      weaknesses: [],
      avgResponseTime: 0,
      lastScore: null,
      attemptsCount: 0,
      topicStats: {},
      referralCode: Math.random().toString(36).substring(2, 8).toUpperCase(),
      referredBy: null,
      planStartedAt,
      planExpiresAt,
      manualSale,
      lastActiveAt: now,
      achievements: [],
      onboardingCompleted: Boolean(goalUniversity),
      emailOptIn: true,
      ...(goalUniversity ? { goalUniversity } : {}),
      ...(resolvedSpecialty ? { goalSpecialty: resolvedSpecialty } : {}),
    };

    await db.collection("users").doc(userRecord.uid).set(userDoc);

    if (hasPaidPlan && manualSale && planBillingCycle && planStartedAt && planExpiresAt) {
      await db.collection("manual_sales").add({
        userId: userRecord.uid,
        email: userRecord.email,
        displayName,
        plan,
        billingCycle: planBillingCycle,
        listPriceCOP: manualSale.listPriceCOP,
        negotiatedPriceCOP: manualSale.negotiatedPriceCOP,
        discountPercent: discountPercent(
          manualSale.listPriceCOP,
          manualSale.negotiatedPriceCOP,
        ),
        planStartedAt,
        planExpiresAt,
        negotiatorName: manualSale.negotiatorName,
        notes: manualSale.notes,
        createdByUid: caller.uid,
        createdAt: now,
      });
    }

    revalidatePath("/admin");
    revalidatePath("/profesor");
    return {
      success: true,
      uid: userRecord.uid,
      planExpiresAt,
    };
  } catch (error: unknown) {
    console.error("Error creating user:", error);
    const message = error instanceof Error ? error.message : "Error al crear el usuario.";
    return { error: message };
  }
}
