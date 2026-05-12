"use server";

import { getFirebaseAdminAuth, getFirebaseAdminDb } from "@/lib/server/firebase-admin";
import { UserPlan } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function createUserAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const displayName = formData.get("displayName") as string;
  const plan = (formData.get("plan") as UserPlan) || "FREE";

  if (!email || !password || !displayName) {
    return { error: "Faltan campos obligatorios." };
  }

  try {
    const auth = getFirebaseAdminAuth();
    const db = getFirebaseAdminDb();

    // 1. Crear usuario en Firebase Auth
    const userRecord = await auth.createUser({
      email,
      password,
      displayName,
    });

    // 2. Crear documento de usuario en Firestore
    const userDoc = {
      uid: userRecord.uid,
      email: userRecord.email,
      displayName,
      plan,
      createdAt: new Date().toISOString(),
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
      planStartedAt: plan !== "FREE" ? new Date().toISOString() : null,
      planExpiresAt: null,
      lastActiveAt: new Date().toISOString(),
      achievements: [],
      onboardingCompleted: true,
    };

    await db.collection("users").doc(userRecord.uid).set(userDoc);

    revalidatePath("/admin");
    return { success: true, uid: userRecord.uid };
  } catch (error: any) {
    console.error("Error creating user:", error);
    return { error: error.message || "Error al crear el usuario." };
  }
}
