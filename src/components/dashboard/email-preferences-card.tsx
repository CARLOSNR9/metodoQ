"use client";

import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { getFirebaseDb } from "@/lib/firebase";

type EmailPreferencesCardProps = {
  userId: string;
  emailOptIn: boolean;
};

export function EmailPreferencesCard({ userId, emailOptIn }: EmailPreferencesCardProps) {
  const [optIn, setOptIn] = useState(emailOptIn);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const handleToggle = async () => {
    const next = !optIn;
    setSaving(true);
    setMessage("");
    try {
      await updateDoc(doc(getFirebaseDb(), "users", userId), { emailOptIn: next });
      setOptIn(next);
      setMessage(next ? "Recordatorios por correo activados." : "Recordatorios por correo desactivados.");
    } catch (e) {
      console.error(e);
      setMessage("No se pudo guardar la preferencia.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="rounded-2xl border border-mq-border-strong bg-mq-surface p-5 sm:p-6">
      <h2 className="text-lg font-semibold text-white">Correos de recordatorio</h2>
      <p className="mt-2 text-sm text-mq-muted">
        Recibe avisos de vencimiento de plan y recordatorios de racha de estudio (máximo uno por día de cada tipo).
      </p>
      <label className="mt-4 flex cursor-pointer items-center gap-3">
        <input
          type="checkbox"
          checked={optIn}
          disabled={saving}
          onChange={() => void handleToggle()}
          className="h-4 w-4 rounded border-mq-border accent-mq-accent"
        />
        <span className="text-sm text-foreground">Quiero recibir recordatorios por email</span>
      </label>
      {message ? <p className="mt-2 text-xs text-mq-accent">{message}</p> : null}
    </section>
  );
}
