"use client";

import { DemoView } from "@/components/demo/demo-view";
import { Suspense } from "react";

export default function DashboardEntrenarPage() {
  return (
    <div className="space-y-6">
      <Suspense fallback={
        <div className="flex min-h-[400px] items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-mq-accent border-t-transparent" />
        </div>
      }>
        <DemoView isDashboard={true} />
      </Suspense>
    </div>
  );
}
