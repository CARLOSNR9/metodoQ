import { NextResponse } from "next/server";
import { getFirebaseAdminDb } from "@/lib/server/firebase-admin";

export const runtime = "nodejs";
export const revalidate = 3600;

export async function GET() {
  try {
    const db = getFirebaseAdminDb();
    const [usersSnap, resultsSnap] = await Promise.all([
      db.collection("users").get(),
      db.collection("results").get(),
    ]);

    const registeredUsers = usersSnap.size;
    const completedSessions = resultsSnap.size;

    return NextResponse.json({
      registeredUsers,
      completedSessions,
      /** Mínimo mostrado en marketing cuando el conteo es bajo */
      displayUsers: Math.max(registeredUsers, 50),
    });
  } catch (error) {
    console.error("public/stats", error);
    return NextResponse.json({
      registeredUsers: 0,
      completedSessions: 0,
      displayUsers: 50,
    });
  }
}
