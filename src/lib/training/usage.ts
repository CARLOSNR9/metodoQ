import { doc, getDoc, setDoc } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";
import { getLocalDateKey } from "@/lib/results";
import { getTrainingLimits } from "@/lib/plans/limits";
import { normalizeUserPlan } from "@/lib/plans/access";

type DailyUsage = {
  date: string;
  sessions: number;
};

type MonthlyUsage = {
  month: string;
  simulacros: number;
};

type UserUsageDoc = {
  daily?: DailyUsage;
  monthly?: MonthlyUsage;
};

function getMonthKey(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

export async function getUserUsage(userId: string) {
  const ref = doc(getFirebaseDb(), "users", userId);
  const snap = await getDoc(ref);
  const raw = snap.data() as { usage?: UserUsageDoc } | undefined;
  const data = raw?.usage ?? {};
  const today = getLocalDateKey(new Date());
  const month = getMonthKey(new Date());

  const daily =
    data.daily?.date === today ? data.daily : { date: today, sessions: 0 };
  const monthly =
    data.monthly?.month === month ? data.monthly : { month, simulacros: 0 };

  return { daily, monthly };
}

export type UsageCheckResult =
  | { allowed: true }
  | { allowed: false; reason: string; upgradeHref?: string };

export async function checkCanStartSession(
  userId: string,
  plan: string | null | undefined,
  sessionType: "training" | "diagnostico" | "simulacro",
): Promise<UsageCheckResult> {
  const normalized = normalizeUserPlan(plan ?? undefined);
  const limits = getTrainingLimits(normalized);
  const { daily, monthly } = await getUserUsage(userId);

  if (sessionType === "simulacro") {
    if (limits.simulacrosPerMonth === 0) {
      return {
        allowed: false,
        reason: "Los simulacros completos están disponibles en los planes Básico y Pro.",
        upgradeHref: "/dashboard/planes",
      };
    }
    if (monthly.simulacros >= limits.simulacrosPerMonth) {
      return {
        allowed: false,
        reason: `Ya usaste tus ${limits.simulacrosPerMonth} simulacro(s) de este mes.`,
        upgradeHref: "/dashboard/planes",
      };
    }
    return { allowed: true };
  }

  if (daily.sessions >= limits.sessionsPerDay) {
    return {
      allowed: false,
      reason: `Alcanzaste el límite de ${limits.sessionsPerDay} entrenamiento(s) por hoy en tu plan.`,
      upgradeHref: "/dashboard/planes",
    };
  }

  return { allowed: true };
}

export async function recordSessionStart(
  userId: string,
  sessionType: "training" | "diagnostico" | "simulacro",
) {
  const ref = doc(getFirebaseDb(), "users", userId);
  const { daily, monthly } = await getUserUsage(userId);

  const nextDaily = { ...daily, sessions: daily.sessions + 1 };
  const nextMonthly =
    sessionType === "simulacro"
      ? { ...monthly, simulacros: monthly.simulacros + 1 }
      : monthly;

  await setDoc(
    ref,
    {
      usage: {
        daily: nextDaily,
        monthly: nextMonthly,
      },
    },
    { merge: true },
  );
}
