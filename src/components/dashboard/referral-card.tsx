"use client";

import { trackReferralLinkShared } from "@/lib/analytics/events";
import { Sparkles, Users } from "lucide-react";

interface ReferralCardProps {
  referralCode: string | null;
  referralCount: number;
  loading: boolean;
}

export function ReferralCard({ referralCode, referralCount, loading }: ReferralCardProps) {
  const [copied, setCopied] = useState(false);

  if (loading || !referralCode) {
    return (
      <div className="h-56 animate-pulse rounded-[2rem] border border-mq-border-strong bg-white/[0.04]" />
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
  
  const progressPercentage = (currentCount / 3) * 100;

  return (
    <article className="relative overflow-hidden rounded-[2rem] border border-mq-premium-purple/30 bg-gradient-to-br from-mq-premium-purple/20 via-transparent to-transparent p-8 sm:p-10 shadow-2xl">
      <div className="absolute -right-10 -top-10 text-mq-premium-purple/10">
        <Gift className="h-48 w-48 rotate-12" />
      </div>
      
      <div className="relative z-10 grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-mq-premium-purple/20 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-mq-premium-purple">
            <Sparkles size={12} />
            Misión: Desbloquear PRO
          </div>
          <h2 className="text-3xl font-bold text-white">
            Invita a 3 colegas y obtén acceso <span className="text-mq-premium-purple">PRO Gratis</span>
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-mq-muted sm:text-base">
            Comparte tu link personal. Cuando 3 amigos se registren y hagan su primer diagnóstico, tu cuenta se activará automáticamente como PRO.
          </p>
        </div>

        <div className="rounded-3xl bg-white/[0.03] p-6 backdrop-blur-md">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mq-premium-purple/20 text-mq-premium-purple">
                <Users size={20} />
              </div>
              <span className="text-sm font-bold text-white">{currentCount} de 3 referidos</span>
            </div>
            {remaining > 0 ? (
              <span className="text-xs font-medium text-mq-muted">Faltan {remaining} colegas</span>
            ) : (
              <span className="text-xs font-bold text-mq-premium-purple">¡Misión cumplida!</span>
            )}
          </div>
          
          <div className="relative mb-8 h-3 w-full overflow-hidden rounded-full bg-white/10">
            <div 
              className="h-full bg-mq-premium-purple transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(168,85,247,0.5)]" 
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="flex-1 truncate rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-xs font-mono text-mq-muted">
              {referralLink}
            </div>
            <button
              onClick={handleCopy}
              className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-bold text-mq-accent-foreground transition-all hover:scale-105 active:scale-95 sm:w-auto"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-emerald-500" /> 
                  <span className="text-emerald-600">Copiado</span>
                </>
              ) : (
                <>
                  <Copy size={16} /> 
                  <span>Copiar link</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
