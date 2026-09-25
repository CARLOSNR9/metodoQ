"use client";

import { MirAccessGate } from "@/components/dashboard/mir-access-gate";
import { MirAchievementsView } from "@/components/dashboard/mir-achievements";

export default function MirAchievementsPage() {
  return <MirAccessGate>{(userId) => <MirAchievementsView userId={userId} />}</MirAccessGate>;
}
