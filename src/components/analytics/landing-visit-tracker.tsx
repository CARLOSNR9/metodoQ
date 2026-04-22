"use client";

import { useEffect } from "react";
import { trackLandingVisit } from "@/lib/analytics/events";

export function LandingVisitTracker() {
  useEffect(() => {
    trackLandingVisit();
  }, []);

  return null;
}
