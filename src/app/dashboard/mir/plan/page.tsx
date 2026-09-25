"use client";

import { MirAccessGate } from "@/components/dashboard/mir-access-gate";
import { MirStudyPlanView } from "@/components/dashboard/mir-study-plan";

export default function MirStudyPlanPage() {
  return <MirAccessGate>{(userId) => <MirStudyPlanView userId={userId} />}</MirAccessGate>;
}
