"use client";

import { MirAccessGate } from "@/components/dashboard/mir-access-gate";
import { MirReviewView } from "@/components/dashboard/mir-review-view";

export default function MirReviewPage() {
  return <MirAccessGate>{(userId) => <MirReviewView userId={userId} />}</MirAccessGate>;
}
