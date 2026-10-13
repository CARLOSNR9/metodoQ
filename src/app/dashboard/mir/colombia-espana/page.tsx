"use client";

import { MirAccessGate } from "@/components/dashboard/mir-access-gate";
import { MirPearlsView } from "@/components/dashboard/mir-pearls";

export default function MirColombiaSpainPage() {
  return <MirAccessGate>{() => <MirPearlsView />}</MirAccessGate>;
}
