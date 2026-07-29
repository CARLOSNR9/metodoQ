import { getFirebaseAdminDb } from "@/lib/server/firebase-admin";
import { resolveActivityStatus, type ActivityStatus } from "@/lib/activity-status";

export type UserAcquisitionSource = "free" | "stripe" | "manual";

export type AdminUserRow = {
  uid: string;
  email: string;
  displayName: string;
  plan: string;
  role: string;
  source: UserAcquisitionSource;
  planExpiresAt: string | null;
  planStartedAt: string | null;
  createdAt: string | null;
  negotiatedPriceCOP: number | null;
  planBillingCycle: number | null;
  lastActiveAt: string | null;
  streakCount: number;
  totalQuestionsAnswered: number;
  cumulativeScore: number | null;
  activityStatus: ActivityStatus;
  university: string | null;
};

function resolveSource(data: Record<string, unknown>): UserAcquisitionSource {
  const plan = String(data.plan ?? "FREE");
  if (!plan || plan === "FREE") {
    return "free";
  }
  if (data.lastPaymentProvider === "stripe") {
    return "stripe";
  }
  if (data.manualSale) {
    return "manual";
  }
  return "manual";
}

export async function getAdminUserDirectory(limit = 150): Promise<AdminUserRow[]> {
  const snap = await getFirebaseAdminDb()
    .collection("users")
    .orderBy("createdAt", "desc")
    .limit(limit)
    .get();

  return snap.docs.map((doc) => {
    const data = doc.data();
    const manualSale = data.manualSale as { negotiatedPriceCOP?: number } | undefined;
    const created = data.createdAt;
    let createdAt: string | null = null;
    if (typeof created === "string") {
      createdAt = created;
    } else if (created?.toDate) {
      createdAt = created.toDate().toISOString();
    }

    const lastActive = data.lastActiveAt;
    let lastActiveAt: string | null = null;
    if (typeof lastActive === "string") {
      lastActiveAt = lastActive;
    } else if (lastActive?.toDate) {
      lastActiveAt = lastActive.toDate().toISOString();
    }

    return {
      uid: doc.id,
      email: String(data.email ?? ""),
      displayName: String(data.displayName ?? "—"),
      plan: String(data.plan ?? "FREE"),
      role: String(data.role ?? "student"),
      source: resolveSource(data),
      planExpiresAt: data.planExpiresAt ? String(data.planExpiresAt) : null,
      planStartedAt: data.planStartedAt ? String(data.planStartedAt) : null,
      createdAt,
      negotiatedPriceCOP:
        typeof manualSale?.negotiatedPriceCOP === "number"
          ? manualSale.negotiatedPriceCOP
          : null,
      planBillingCycle:
        typeof data.planBillingCycle === "number" ? data.planBillingCycle : null,
      lastActiveAt,
      streakCount: Number(data.streakCount ?? 0),
      totalQuestionsAnswered: Number(data.totalQuestionsAnswered ?? 0),
      cumulativeScore:
        typeof data.cumulativeScore === "number" ? data.cumulativeScore : null,
      activityStatus: resolveActivityStatus(lastActiveAt),
      university: typeof data.goalUniversity === "string" ? data.goalUniversity : (typeof data.university === "string" ? data.university : null),
    };
  });
}
