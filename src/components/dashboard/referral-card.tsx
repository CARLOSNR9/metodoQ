"use client";

import { useState } from "react";
import Link from "next/link";
import { trackReferralLinkShared } from "@/lib/analytics/events";
import { normalizeUserPlan, type StoredUserPlan } from "@/lib/plans/access";
import { Sparkles, Users, Gift, Check, Copy, ArrowRight } from "lucide-react";

export type ReferralCardVariant = "unlock-pro" | "residente-upsell" | "ambassador";

interface ReferralCardProps {
  referralCode: string | null;
  referralCount: number;
  loading: boolean;
  /** Si se omite, se infiere de userPlan. */
  variant?: ReferralCardVariant;
  userPlan?: StoredUserPlan | null;
}

function resolveVariant(
  variant: ReferralCardVariant | undefined,
  userPlan: StoredUserPlan | null | undefined,
): ReferralCardVariant {
  if (variant) return variant;
  const plan = normalizeUserPlan(userPlan ?? undefined);
  if (plan === "RESIDENTE") return "ambassador";
  if (plan === "PRO") return "residente-upsell";
  return "unlock-pro";
}

function getReferralCopy(cardVariant: ReferralCardVariant) {
  switch (cardVariant) {
    case "residente-upsell":
      return {
        badge: "Programa embajador PRO",
        title: (
          <>
            Invita a 3 colegas y accede a{" "}
            <span className="text-mq-premium-purple">evaluación prioritaria Residente</span>
          </>
        ),
        description:
          "Ya tienes plan PRO activo. Cuando 3 amigos completen su primer diagnóstico, el equipo te contactará para conocer el plan Residente con condiciones preferenciales.",
        missionComplete: "¡Listo! Revisa el plan Residente",
        showResidenteLink: true,
      };
    case "ambassador":
      return {
        badge: "Embajador Método Q",
        title: (
          <>
            Comparte el método con tu{" "}
            <span className="text-mq-premium-purple">promoción</span>
          </>
        ),
        description:
          "Tu plan Residente ya incluye acompañamiento 1 a 1. Invita colegas para que descubran el diagnóstico adaptativo y fortalezcan su preparación.",
        missionComplete: "¡Gracias por difundir el método!",
        showResidenteLink: false,
      };
    default:
      return {
        badge: "Misión: Desbloquear PRO",
        title: (
          <>
            Invita a 3 colegas y obtén acceso{" "}
            <span className="text-mq-premium-purple">PRO Gratis</span>
          </>
        ),
        description:
          "Comparte tu link personal. Cuando 3 amigos se registren y hagan su primer diagnóstico, tu cuenta se activará automáticamente como PRO.",
        missionComplete: "¡Misión cumplida!",
        showResidenteLink: false,
      };
  }
}

export function ReferralCard({
  referralCode,
  referralCount,
  loading,
  variant,
  userPlan,
}: ReferralCardProps) {
  const [copied, setCopied] = useState(false);

  if (loading) {
    return (
      <div className="h-56 animate-pulse rounded-[2rem] border border-slate-200 bg-white/[0.04]" />
    );
  }

  if (!referralCode) {
    return null;
  }

  const referralLink =
    typeof window !== "undefined"
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
  const cardVariant = resolveVariant(variant, userPlan);
  const copy = getReferralCopy(cardVariant);

  return (
    <article className="relative overflow-hidden rounded-[2rem] border border-mq-premium-purple/30 bg-gradient-to-br from-mq-premium-purple/20 via-transparent to-transparent p-5 shadow-2xl sm:p-6">
      <div className="pointer-events-none absolute -right-10 -top-10 text-mq-premium-purple/10">
        <Gift className="h-40 w-40 rotate-12 sm:h-48 sm:w-48" />
      </div>

      <div className="relative z-10 flex min-w-0 flex-col gap-6">
        <div className="min-w-0 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-mq-premium-purple/20 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-mq-premium-purple">
            <Sparkles size={12} />
            {copy.badge}
          </div>
          <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">{copy.title}</h2>
          <p className="text-sm leading-relaxed text-slate-500 sm:text-base">{copy.description}</p>
        </div>

        <div className="min-w-0 rounded-3xl bg-white/[0.03] p-4 backdrop-blur-md sm:p-5">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mq-premium-purple/20 text-mq-premium-purple">
                <Users size={20} />
              </div>
              <span className="text-sm font-bold text-slate-900">{currentCount} de 3 referidos</span>
            </div>
            {remaining > 0 ? (
              <span className="shrink-0 text-xs font-medium text-slate-500">
                Faltan {remaining} colegas
              </span>
            ) : (
              <span className="shrink-0 text-xs font-bold text-mq-premium-purple">
                {copy.missionComplete}
              </span>
            )}
          </div>

          <div className="mb-5 h-3 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full bg-mq-premium-purple transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(168,85,247,0.5)]"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          <div className="flex min-w-0 flex-col gap-3">
            <div className="min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-black/20 px-4 py-3">
              <p className="truncate font-mono text-xs text-slate-500">{referralLink}</p>
            </div>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex h-12 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-bold text-mq-accent-foreground transition-all hover:brightness-110 active:scale-95"
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

          {copy.showResidenteLink && remaining === 0 ? (
            <Link
              href="/residente"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-mq-premium-purple/30 bg-mq-premium-purple/10 text-xs font-bold text-slate-900 transition-all hover:bg-mq-premium-purple/20"
            >
              Postular a Residente
              <ArrowRight size={14} />
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
