"use client";

import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { Bell } from "lucide-react";
import { getFirebaseDb } from "@/lib/firebase";
import { requestBrowserNotificationPermission } from "@/hooks/use-ucc-browser-reminder";

type EmailPreferencesCardProps = {
  userId: string;
  emailOptIn: boolean;
  browserNudgeOptIn?: boolean;
  isUccMiPro?: boolean;
};

export function EmailPreferencesCard({
  userId,
  emailOptIn,
  browserNudgeOptIn = false,
  isUccMiPro = false,
}: EmailPreferencesCardProps) {
  const [optIn, setOptIn] = useState(emailOptIn);
  const [browserOptIn, setBrowserOptIn] = useState(browserNudgeOptIn);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const handleEmailToggle = async () => {
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

  const handleBrowserToggle = async () => {
    const next = !browserOptIn;
    setSaving(true);
    setMessage("");
    try {
      if (next) {
        const permission = await requestBrowserNotificationPermission();
        if (permission !== "granted") {
          setMessage(
            permission === "denied"
              ? "Activa las notificaciones en la configuración del navegador."
              : "Tu navegador no soporta notificaciones.",
          );
          setSaving(false);
          return;
        }
      }
      await updateDoc(doc(getFirebaseDb(), "users", userId), {
        browserNudgeOptIn: next,
      });
      setBrowserOptIn(next);
      setMessage(
        next
          ? "Avisos del navegador activados (1 por día al abrir Método Q)."
          : "Avisos del navegador desactivados.",
      );
    } catch (e) {
      console.error(e);
      setMessage("No se pudo guardar la preferencia.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="rounded-2xl border border-mq-border-strong bg-mq-surface p-5 sm:p-6">
      <h2 className="text-lg font-semibold text-white">Recordatorios de estudio</h2>
      <p className="mt-2 text-sm text-mq-muted">
        Avisos de vencimiento de plan, racha de estudio
        {isUccMiPro
          ? ", misión diaria UCC y simulacros programados (máximo uno de cada tipo por día)."
          : " (máximo uno por día de cada tipo)."}
      </p>

      <label className="mt-4 flex cursor-pointer items-center gap-3">
        <input
          type="checkbox"
          checked={optIn}
          disabled={saving}
          onChange={() => void handleEmailToggle()}
          className="h-4 w-4 rounded border-mq-border accent-mq-accent"
        />
        <span className="text-sm text-foreground">Recibir recordatorios por email</span>
      </label>

      {isUccMiPro && (
        <label className="mt-3 flex cursor-pointer items-center gap-3">
          <input
            type="checkbox"
            checked={browserOptIn}
            disabled={saving}
            onChange={() => void handleBrowserToggle()}
            className="h-4 w-4 rounded border-mq-border accent-mq-accent"
          />
          <span className="flex items-center gap-2 text-sm text-foreground">
            <Bell size={14} className="text-mq-accent" />
            Avisos del navegador al abrir el panel (misión y simulacro)
          </span>
        </label>
      )}

      {message ? <p className="mt-2 text-xs text-mq-accent">{message}</p> : null}
    </section>
  );
}
