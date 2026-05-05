"use client";

import { DemoView } from "@/components/demo/demo-view";
import { Suspense } from "react";

export default function DemoPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-mq-accent border-t-transparent" />
      </div>
    }>
      <DemoView />
    </Suspense>
  );
}
