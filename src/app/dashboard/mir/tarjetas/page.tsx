"use client";

import { MirAccessGate } from "@/components/dashboard/mir-access-gate";
import { MirFlashcardsView } from "@/components/dashboard/mir-flashcards-view";

export default function MirFlashcardsPage() {
  return <MirAccessGate>{(userId) => <MirFlashcardsView userId={userId} />}</MirAccessGate>;
}
