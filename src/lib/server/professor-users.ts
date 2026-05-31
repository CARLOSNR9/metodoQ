import { getFirebaseAdminDb } from "@/lib/server/firebase-admin";
import { normalizeUserRole } from "@/lib/roles";
import type { UserPlan } from "@/lib/auth";

export type ProfessorStudentRow = {
  uid: string;
  email: string;
  displayName: string;
  plan: UserPlan;
};

export async function getProfessorStudentDirectory(
  limit = 250,
): Promise<ProfessorStudentRow[]> {
  const snap = await getFirebaseAdminDb()
    .collection("users")
    .orderBy("createdAt", "desc")
    .limit(limit)
    .get();

  return snap.docs
    .map((doc) => {
      const data = doc.data();
      return {
        uid: doc.id,
        email: String(data.email ?? ""),
        displayName: String(data.displayName ?? "—"),
        plan: String(data.plan ?? "FREE") as UserPlan,
        role: normalizeUserRole(data.role as string | undefined),
      };
    })
    .filter((user) => user.role === "student")
    .map(({ role: _role, ...user }) => user);
}
