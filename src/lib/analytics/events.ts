import { trackEvent } from "@/lib/analytics/gtag";

type EventPayload = {
  userId?: string;
  score?: number;
};

type DemoQuestionAnsweredPayload = EventPayload & {
  questionId: string;
  questionIndex: number;
  isCorrect: boolean;
  responseTimeSeconds: number;
  answeredCount: number;
};

function trackInternalEvent(eventName: string, payload?: Record<string, unknown>) {
  if (typeof window === "undefined") {
    return;
  }

  const body = JSON.stringify({
    eventName,
    ...payload,
  });
  const endpoint = "/api/internal-analytics";

  try {
    if (navigator.sendBeacon) {
      const blob = new Blob([body], { type: "application/json" });
      navigator.sendBeacon(endpoint, blob);
      return;
    }
  } catch {
    // Ignora errores del beacon y continua con fetch keepalive.
  }

  void fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
    keepalive: true,
  }).catch(() => {
    // Evita impacto en UX si falla el registro interno.
  });
}

function trackFunnelEvent(eventName: string, payload?: EventPayload) {
  trackEvent(eventName, payload);
  trackInternalEvent(eventName, payload);
}

export function trackClickDemo(payload?: EventPayload) {
  trackFunnelEvent("click_demo", payload);
}

export function trackLandingVisit(payload?: EventPayload) {
  trackFunnelEvent("landing_visit", payload);
}

export function trackStartDemo(payload?: EventPayload) {
  trackFunnelEvent("start_demo", payload);
}

export function trackDemoQuestionAnswered(payload: DemoQuestionAnsweredPayload) {
  trackEvent("demo_question_answered", payload);
  trackInternalEvent("demo_question_answered", payload);
}

export function trackFinishDemo(payload?: EventPayload) {
  trackFunnelEvent("finish_demo", payload);
}

export function trackViewPaywall(payload?: EventPayload) {
  trackFunnelEvent("view_paywall", payload);
}

export function trackClickUpgrade(payload?: EventPayload) {
  trackFunnelEvent("click_upgrade", payload);
}

export function trackPayment(payload?: EventPayload) {
  trackFunnelEvent("payment", payload);
}

export function trackHeroVariantA(payload?: EventPayload) {
  trackFunnelEvent("hero_variant_A", payload);
}

export function trackHeroVariantB(payload?: EventPayload) {
  trackFunnelEvent("hero_variant_B", payload);
}

// Eventos de referidos
export function trackReferralLinkShared(payload?: EventPayload) {
  trackFunnelEvent("referral_link_shared", payload);
}

export function trackReferralSignup(payload?: EventPayload & { referralCode?: string }) {
  trackFunnelEvent("referral_signup", payload);
}

export function trackRewardUnlocked(payload?: EventPayload & { rewardType?: string }) {
  trackFunnelEvent("reward_unlocked", payload);
}
