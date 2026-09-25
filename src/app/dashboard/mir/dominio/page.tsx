"use client";

import { MirAccessGate } from "@/components/dashboard/mir-access-gate";
import { MirMasteryView } from "@/components/dashboard/mir-mastery-map";

export default function MirMasteryPage() {
  return <MirAccessGate>{(userId) => <MirMasteryView userId={userId} />}</MirAccessGate>;
}
