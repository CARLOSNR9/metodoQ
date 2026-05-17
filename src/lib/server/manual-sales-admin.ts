import { getFirebaseAdminDb } from "@/lib/server/firebase-admin";

export type ManualSaleRow = {
  id: string;
  userId: string;
  email: string;
  displayName: string;
  plan: string;
  billingCycle: number;
  listPriceCOP: number;
  negotiatedPriceCOP: number;
  discountPercent: number;
  planStartedAt: string;
  planExpiresAt: string;
  negotiatorName: string | null;
  notes: string | null;
  createdAt: string;
};

export async function getRecentManualSales(limit = 25): Promise<ManualSaleRow[]> {
  const snap = await getFirebaseAdminDb()
    .collection("manual_sales")
    .orderBy("createdAt", "desc")
    .limit(limit)
    .get();

  return snap.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      userId: String(data.userId ?? ""),
      email: String(data.email ?? ""),
      displayName: String(data.displayName ?? ""),
      plan: String(data.plan ?? ""),
      billingCycle: Number(data.billingCycle ?? 0),
      listPriceCOP: Number(data.listPriceCOP ?? 0),
      negotiatedPriceCOP: Number(data.negotiatedPriceCOP ?? 0),
      discountPercent: Number(data.discountPercent ?? 0),
      planStartedAt: String(data.planStartedAt ?? ""),
      planExpiresAt: String(data.planExpiresAt ?? ""),
      negotiatorName: data.negotiatorName ? String(data.negotiatorName) : null,
      notes: data.notes ? String(data.notes) : null,
      createdAt: String(data.createdAt ?? ""),
    };
  });
}
