"use client";

import { MirAccessGate } from "@/components/dashboard/mir-access-gate";
import { MirStudyView } from "@/components/dashboard/mir-study-view";

export default function MirStudyPage() {
  return <MirAccessGate>{(userId) => <MirStudyView userId={userId} />}</MirAccessGate>;
}
