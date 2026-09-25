"use client";

import { MirAccessGate } from "@/components/dashboard/mir-access-gate";
import { MirDailyChallengeView } from "@/components/dashboard/mir-daily-challenge-view";

export default function MirDailyChallengePage() {
  return <MirAccessGate>{(userId) => <MirDailyChallengeView userId={userId} />}</MirAccessGate>;
}
