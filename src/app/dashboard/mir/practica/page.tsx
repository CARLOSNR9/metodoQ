"use client";

import { Suspense } from "react";
import { MirAccessGate } from "@/components/dashboard/mir-access-gate";
import { MirPracticeView } from "@/components/dashboard/mir-practice-view";

export default function MirPracticePage() {
  return (
    <MirAccessGate>
      {(userId) => (
        // MirPracticeView lee ?especialidad= con useSearchParams.
        <Suspense fallback={null}>
          <MirPracticeView userId={userId} />
        </Suspense>
      )}
    </MirAccessGate>
  );
}
