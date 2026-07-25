"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getFirebaseAuth } from "@/lib/firebase";
import { trackClickUpgrade } from "@/lib/analytics/events";
import type { BillingCycle, PlanDefinition } from "@/lib/plans/config";

type PlanCtaButtonProps = {
  plan: PlanDefinition;
  cycle: BillingCycle;
  className?: string;
  label?: string;
  children?: React.ReactNode;
  onDemoClick?: () => void;
};

export function PlanCtaButton({
  plan,
  cycle,
  className = "",
  label,
  children,
  onDemoClick,
}: PlanCtaButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const content = children || (label ?? plan.cta);

  if (plan.id === "FREE") {
    return (
      <Link href="/register" className={className}>
        {content}
      </Link>
    );
  }

  if (plan.id === "RESIDENTE") {
    return (
      <Link href="/residente" className={className}>
        {content}
      </Link>
    );
  }

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const user = getFirebaseAuth().currentUser;
      if (!user) {
        router.push(`/register?redirect=/checkout?plan=${plan.slug}&cycle=${cycle}`);
        return;
      }

      trackClickUpgrade({ userId: user.uid });
      router.push(`/checkout?plan=${plan.slug}&cycle=${cycle}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCheckout}
      disabled={isLoading}
      className={`${className} disabled:cursor-not-allowed disabled:opacity-60`}
    >
      {isLoading ? "Cargando..." : content}
    </button>
  );
}
