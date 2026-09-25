"use client";

import { MirAccessGate } from "@/components/dashboard/mir-access-gate";
import { MirPracticeView } from "@/components/dashboard/mir-practice-view";

export default function MirPracticePage() {
  return <MirAccessGate>{(userId) => <MirPracticeView userId={userId} />}</MirAccessGate>;
}
