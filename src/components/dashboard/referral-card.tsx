"use client";

import { useState } from "react";
import { Check, Copy, Gift } from "lucide-react";
import { trackReferralLinkShared } from "@/lib/analytics/events";

interface ReferralCardProps {
  referralCode: string | null;
  referralCount: number;
  loading: boolean;
}

export function ReferralCard({ referralCode, referralCount, loading }: ReferralCardProps) {
  const [copied, setCopied] = useState(false);

  if (loading || !referralCode) {
    return (
      <div className="h-48 animate-pulse rounded-2xl border border-mq-border-strong bg-white/[0.04]" />
    );
  }

  const referralLink = typeof window !== "undefined" 
    ? `${window.location.origin}/?ref=${referralCode}`
    : `metodoq.pro/?ref=${referralCode}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      trackReferralLinkShared();
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy", err);
    }
  };

  const currentCount = Math.min(referralCount, 3);
  const remaining = 3 - currentCount;
  
  let message = `Invita ${remaining} más y desbloqueas acceso PRO`;
  if (remaining === 0) {
    message = "¡Felicidades! Has desbloqueado tu acceso PRO.";
  }

  const progressPercentage = (currentCount / 3) * 100;

  return (
    <article className="relative overflow-hidden rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-950/40 to-[#0A1F44] p-5 shadow-lg">
      <div className="absolute -right-6 -top-6 text-indigo-500/10">
        <Gift className="h-32 w-32" />
      </div>
      
      <div className="relative z-10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-indigo-300">
          Recompensa
        </p>
        <h2 className="mt-2 text-xl font-semibold text-white">
          Invita y gana acceso
        </h2>
        <p className="mt-2 text-sm text-[#BFD0EC]">
          {message}
        </p>

        <div className="mt-5">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-white">Progreso</span>
            <span className="font-semibold text-indigo-300">{currentCount}/3 referidos</span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
            <div 
              className="h-full bg-indigo-400 transition-all duration-500 ease-in-out" 
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <div className="flex-1 truncate rounded-xl border border-mq-border-strong bg-white/5 px-4 py-3 text-sm font-mono text-indigo-100">
            {referralLink}
          </div>
          <button
            onClick={handleCopy}
            className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-indigo-500 px-5 text-sm font-semibold text-white transition-all hover:bg-indigo-600 active:scale-95 sm:w-auto"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4" /> Copiado
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" /> Copiar link
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
