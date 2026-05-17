"use server";

import { revalidatePath } from "next/cache";
import { UserPlan } from "@/lib/auth";
import { calculatePlanExpiration } from "@/lib/plans/config";
import { canAssignRole, verifyStaffCaller } from "@/lib/server/verify-staff";
import { getFirebaseAdminAuth, getFirebaseAdminDb } from "@/lib/server/firebase-admin";
import { normalizeUserRole } from "@/lib/roles";

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

  try {
    const auth = getFirebaseAdminAuth();
    const db = getFirebaseAdminDb();

    const userRecord = await auth.createUser({
      email,
      password,
      displayName,
    });

    const now = new Date();
    const hasPaidPlan = plan !== "FREE";
    const defaultCycle = 3 as const;
    const planExpiresAt =
      hasPaidPlan ? calculatePlanExpiration(now, defaultCycle) : null;

    const userDoc = {
      uid: userRecord.uid,
      email: userRecord.email,
      displayName,
      plan,
      role,
      createdAt: now.toISOString(),
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
      planStartedAt: hasPaidPlan ? now.toISOString() : null,
      planExpiresAt,
      lastActiveAt: now.toISOString(),
      achievements: [],
      onboardingCompleted: true,
      emailOptIn: true,
    };

    await db.collection("users").doc(userRecord.uid).set(userDoc);

    revalidatePath("/admin");
    revalidatePath("/profesor");
    return { success: true, uid: userRecord.uid };
  } catch (error: unknown) {
    console.error("Error creating user:", error);
    const message = error instanceof Error ? error.message : "Error al crear el usuario.";
    return { error: message };
  }
}
