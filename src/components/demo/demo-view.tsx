"use client";

import { onAuthStateChanged, type User } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  AttemptHistory,
  FinalResultsScreen,
  FreePlanPaywall,
  QuestionCard,
  type QuestionOption,
  Act2PredictiveDashboard
} from "@/components/demo";
import { getTheoryLink } from "@/lib/questions/theory-link";
import { enrichQuestionWithTheoryPill } from "@/lib/questions/enrich-theory-pills";
import { logoutUser } from "@/lib/auth";
import { getFirebaseAuth, getFirebaseDb } from "@/lib/firebase";
import { useUserPlan } from "@/hooks/use-user-plan";
import { hasUnlimitedTraining } from "@/lib/plans/access";
import { getPlanUpgradeCta } from "@/lib/plans/upgrade-cta";
import {
  trackClickUpgrade,
  trackDemoQuestionAnswered,
  trackFinishDemo,
  trackStartDemo,
  trackViewPaywall,
} from "@/lib/analytics/events";
import { motion } from "framer-motion";
import { Zap, Target, ArrowRight, Sparkles } from "lucide-react";
import {
  saveDemoResult,
  registerTrainingDay,
  completeDailyPill,
} from "@/lib/results";
import { DAILY_CHALLENGES } from "@/data/daily-challenges";
import { getActiveQuestions } from "@/lib/questions/service";
import type { TrainingQuestion } from "@/lib/questions/types";
import { getTrainingLimits } from "@/lib/plans/limits";
import { normalizeUserPlan } from "@/lib/plans/access";
import {
  buildDynamicFeedbackMessage,
  selectAdaptiveQuestions,
} from "@/lib/training/adaptive";
import {
  prepareQuestionCycle,
  markQuestionSeen,
} from "@/lib/training/seen-questions";
import {
  selectAdaptiveQuestionsWithCycle,
  shouldTrackQuestionCycle,
} from "@/lib/training/question-cycle";
import { getAct1DiagnosticSession } from "@/lib/diagnostic/get-diagnostic-session";
import { getEffectiveGoalSpecialty, isUccPastoMedicinaInternaProUser } from "@/lib/diagnostic/ucc-pasto-track";
import { selectUccTrainingQuestions } from "@/lib/training/ucc-module-selection";
import { selectUccSimulacroQuestions } from "@/lib/training/ucc-simulacro-selection";
import type { UccMiBlockKind } from "@/lib/training/ucc-mi-daily-plan";
import {
  getUccBlockCompletionCTA,
  getUccMiWeekModule,
} from "@/lib/training/ucc-mi-daily-plan";
import { getPerformanceStatsKey } from "@/lib/diagnostic/exam-blueprint";
import {
  computeCumulativePerformance,
  mergeTopicStatsWithSession,
} from "@/lib/scoring/cumulative-score";
import {
  checkCanStartSession,
  recordSessionStart,
  type UsageBlockMeta,
} from "@/lib/training/usage";
import type { LearningTrackProfile } from "@/lib/diagnostic/ucc-pasto-track";
import { UCC_MI_DAILY_BONUS_MAX } from "@/lib/training/ucc-mi-daily-plan";
import {
  getTodayFailedQuestions,
  pickQuestionsFromBankByIds,
  recordFailedQuestion,
  resolveFailedQuestion,
} from "@/lib/training/failed-questions";
import { markRepasoCierreCompleted } from "@/lib/training/repaso-cierre";
import type { SessionTypeLabel } from "@/lib/results";

export type DemoQuestion = TrainingQuestion;

function calculateAverageResponseTime(responseTimes: number[]) {
  if (responseTimes.length === 0) {
    return 0;
  }

  const total = responseTimes.reduce((sum, value) => sum + value, 0);
  return Number((total / responseTimes.length).toFixed(2));
}

type UserLearningProfile = {
  weaknesses: string[];
  strengths: string[];
  topicStats: Record<string, { correct: number; wrong: number }>;
};

const EMPTY_PROFILE: UserLearningProfile = {
  weaknesses: [],
  strengths: [],
  topicStats: {},
};

export function DemoView({ isDashboard = false }: { isDashboard?: boolean }) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const preferDashboardReturn = pathname.startsWith("/dashboard/entrenar");
  const source = searchParams.get("source");
  const urlUniversity = searchParams.get("university");
  const urlSpecialty = searchParams.get("specialty");
  const isAct1 = source === "act1";
  const isDailyPill = searchParams.get("mode") === "daily-pill";
  const isBonusMode = searchParams.get("mode") === "bonus";
  const isRepasoPractice = searchParams.get("mode") === "repaso";
  const isRepasoCierre = searchParams.get("mode") === "repaso-cierre";
  const isRepasoMode = isRepasoPractice || isRepasoCierre;
  const isSimulacro = searchParams.get("mode") === "simulacro";
  const isUccSimulacro = searchParams.get("ucc") === "1";
  const blockParam = searchParams.get("block") as UccMiBlockKind | null;
  const countParam = searchParams.get("count");
  const minutesParam = searchParams.get("minutes");
  const sessionCountOverride = countParam ? Math.max(1, parseInt(countParam, 10) || 0) : null;
  const simulacroMinutesOverride = minutesParam
    ? Math.max(30, parseInt(minutesParam, 10) || 0)
    : null;

  const { plan, loading: isLoadingPlan } = useUserPlan();
  const normalizedPlan = normalizeUserPlan(plan ?? undefined);
  const limits = getTrainingLimits(normalizedPlan);
  const [user, setUser] = useState<User | null>(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answersByQuestionId, setAnswersByQuestionId] = useState<
    Record<string, string>
  >({});
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [wrongTopicsByName, setWrongTopicsByName] = useState<Record<string, number>>({});
  const [correctTopicsByName, setCorrectTopicsByName] = useState<Record<string, number>>({});
  const [responseTimes, setResponseTimes] = useState<number[]>([]);
  const [questionStartAt, setQuestionStartAt] = useState<number | null>(null);
  const [hasSavedCurrentAttempt, setHasSavedCurrentAttempt] = useState(false);
  const [historyRefreshKey, setHistoryRefreshKey] = useState(0);
  const [isFreeLimitModalOpen, setIsFreeLimitModalOpen] = useState(false);
  const [showFreePaywallTeaser, setShowFreePaywallTeaser] = useState(false);
  const [hasTriggeredFreePaywall, setHasTriggeredFreePaywall] = useState(false);
  const [hasRegisteredTrainingDay, setHasRegisteredTrainingDay] = useState(false);
  const [showProgressFeedback, setShowProgressFeedback] = useState(false);
  const [learningProfile, setLearningProfile] = useState<UserLearningProfile>(EMPTY_PROFILE);
  const [sessionQuestions, setSessionQuestions] = useState<DemoQuestion[]>([]);
  const [questionBank, setQuestionBank] = useState<DemoQuestion[]>([]);
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(true);
  const [usageBlockReason, setUsageBlockReason] = useState<string | null>(null);
  const [usageBlockMeta, setUsageBlockMeta] = useState<UsageBlockMeta>({});
  const [userTrackProfile, setUserTrackProfile] = useState<
    (LearningTrackProfile & { planStartedAt?: string | null }) | null
  >(null);
  const [liveFeedbackMessage, setLiveFeedbackMessage] = useState<string | null>(null);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const hasTrackedFinishDemoRef = useRef(false);
  const hasRecordedSessionRef = useRef(false);
  const pendingUccAutoStartRef = useRef<{ block: UccMiBlockKind; count: number } | null>(null);
  const [sessionCompletedBlockId, setSessionCompletedBlockId] =
    useState<UccMiBlockKind | null>(null);
  const effectiveSimulacroMinutes =
    isUccSimulacro && simulacroMinutesOverride
      ? simulacroMinutesOverride
      : limits.simulacroMinutes;
  const simulacroMaxSeconds = isSimulacro ? effectiveSimulacroMinutes * 60 : 0;

  const effectivePlan = plan ?? "FREE";
  const isFreePlan = effectivePlan === "FREE";
  const hasUnlimitedAccess = hasUnlimitedTraining(effectivePlan);
  const upgradeCta = getPlanUpgradeCta(effectivePlan);
  const sessionType = isSimulacro
    ? "simulacro"
    : isAct1
      ? "diagnostico"
      : "training";
  const resultSessionType: SessionTypeLabel = isDailyPill
    ? "daily-pill"
    : isRepasoCierre
      ? "repaso-cierre"
      : isRepasoPractice
        ? "repaso"
        : sessionType;
  const [repasoPendingCount, setRepasoPendingCount] = useState<number | null>(null);
  const plannedQuestionCount = isDailyPill
    ? 1
    : isRepasoMode
      ? sessionCountOverride && repasoPendingCount != null
        ? Math.min(sessionCountOverride, repasoPendingCount)
        : (repasoPendingCount ?? 0)
    : isBonusMode
      ? Math.min(
          sessionCountOverride ?? UCC_MI_DAILY_BONUS_MAX,
          UCC_MI_DAILY_BONUS_MAX,
          questionBank.length || UCC_MI_DAILY_BONUS_MAX,
        )
    : sessionCountOverride
      ? Math.min(sessionCountOverride, questionBank.length || sessionCountOverride)
    : isSimulacro
      ? Math.min(limits.simulacroQuestionCount, questionBank.length || limits.simulacroQuestionCount)
      : Math.min(limits.questionsPerSession, questionBank.length || limits.questionsPerSession);
  const totalQuestions = hasStarted ? sessionQuestions.length : plannedQuestionCount;
  const availableQuestions = hasStarted ? sessionQuestions : [];
  const isResultsStep = hasStarted && currentQuestionIndex === totalQuestions;
  const currentQuestion = isResultsStep
    ? null
    : availableQuestions[currentQuestionIndex];
  const enrichedCurrentQuestion = currentQuestion
    ? enrichQuestionWithTheoryPill(currentQuestion)
    : null;
  const selectedOptionId = currentQuestion
    ? answersByQuestionId[currentQuestion.id]
    : null;
  const hasAnsweredCurrentQuestion = Boolean(selectedOptionId);
  const hasNextQuestion =
    !isResultsStep && currentQuestionIndex < totalQuestions - 1;
  const hasReachedFreePlanLimit =
    isFreePlan &&
    hasStarted &&
    !isResultsStep &&
    currentQuestionIndex === totalQuestions - 1 &&
    hasAnsweredCurrentQuestion;
  const scorePercentage = Math.round((correctAnswers / totalQuestions) * 100);
  const projectedTopicStats = mergeTopicStatsWithSession(
    learningProfile.topicStats,
    correctTopicsByName,
    wrongTopicsByName,
  );
  const cumulativePerformance = computeCumulativePerformance(projectedTopicStats);
  const progressBase = Math.max(totalQuestions, 1);
  const progressPercent = Math.round(
    ((currentQuestionIndex + (hasAnsweredCurrentQuestion ? 1 : 0)) / progressBase) *
      100,
  );

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const uccWeekModule =
    userTrackProfile && isUccPastoMedicinaInternaProUser(userTrackProfile)
      ? getUccMiWeekModule(userTrackProfile.planStartedAt)
      : null;

  const uccBlockCompletion = useMemo(() => {
    if (!sessionCompletedBlockId) return null;
    return getUccBlockCompletionCTA(
      sessionCompletedBlockId,
      userTrackProfile?.planStartedAt,
      learningProfile.weaknesses[0] ?? null,
    );
  }, [sessionCompletedBlockId, userTrackProfile?.planStartedAt, learningProfile.weaknesses]);

  const resetSessionState = useCallback(() => {
    setHasStarted(false);
    setCurrentQuestionIndex(0);
    setAnswersByQuestionId({});
    setCorrectAnswers(0);
    setWrongAnswers(0);
    setResponseTimes([]);
    setHasSavedCurrentAttempt(false);
    setWrongTopicsByName({});
    setCorrectTopicsByName({});
    hasTrackedFinishDemoRef.current = false;
    hasRecordedSessionRef.current = false;
    setTotalSeconds(0);
    setSessionCompletedBlockId(null);
    setUsageBlockReason(null);
    setUsageBlockMeta({});
  }, []);

  const handleContinueNextUccBlock = useCallback(() => {
    const nextBlock = uccBlockCompletion?.nextBlock;
    if (!nextBlock) return;

    resetSessionState();
    pendingUccAutoStartRef.current = {
      block: nextBlock.id,
      count: nextBlock.questions,
    };
    router.replace(
      `/dashboard/entrenar?block=${nextBlock.id}&count=${nextBlock.questions}`,
    );
  }, [uccBlockCompletion, resetSessionState, router]);

  const startAdaptiveSession = async () => {
    if (user) {
      const check = await checkCanStartSession(user.uid, effectivePlan, sessionType, {
        isBonusMode,
        isDailyPill,
        isRepasoPractice,
        isRepasoCierre,
        profile: userTrackProfile,
        planStartedAt: userTrackProfile?.planStartedAt,
        uccBlockKind:
          blockParam && ["new", "review", "weak"].includes(blockParam)
            ? blockParam
            : null,
      });
      if (!check.allowed) {
        setUsageBlockReason(check.reason);
        setUsageBlockMeta({
          dayClosed: "dayClosed" in check ? check.dayClosed : undefined,
          bonusAvailable: "bonusAvailable" in check ? check.bonusAvailable : undefined,
        });
        return;
      }
      if (sessionType === "simulacro") {
        await recordSessionStart(user.uid, sessionType);
      }
    }

    hasRecordedSessionRef.current = false;

    let pool = [...questionBank];

    if (isDailyPill) {
      const streak = (learningProfile as { streak?: number })?.streak ?? 0;
      const dayIndex = streak % DAILY_CHALLENGES.length;
      pool = [DAILY_CHALLENGES[dayIndex]];
    }

    if (isRepasoMode && user) {
      const failed = await getTodayFailedQuestions(user.uid, { unresolvedOnly: true });
      const ids = failed.map((item) => item.questionId);
      pool = pickQuestionsFromBankByIds(questionBank, ids);
      if (pool.length === 0) {
        setUsageBlockReason(
          isRepasoCierre
            ? "No tienes preguntas fallidas pendientes para el examen de cierre."
            : "No tienes preguntas fallidas pendientes para repasar hoy.",
        );
        return;
      }
    }

    const count = isDailyPill
      ? 1
      : isRepasoMode
        ? Math.min(plannedQuestionCount || pool.length, pool.length)
        : plannedQuestionCount;
    const dedicatedBattery = isAct1
      ? getAct1DiagnosticSession(urlUniversity, urlSpecialty)
      : null;

    const trackCycle = shouldTrackQuestionCycle({
      isAct1: Boolean(isAct1),
      isDailyPill,
      isRepasoMode,
    });
    let seenIds: Set<string> | undefined;
    let cycleReset = false;
    if (user && trackCycle) {
      const cycle = await prepareQuestionCycle(user.uid, questionBank);
      seenIds = cycle.seenIds;
      cycleReset = cycle.cycleReset;
    }

    const cycleOptions =
      seenIds !== undefined
        ? { fullBank: questionBank, seenIds, cycleReset }
        : {};

    const isUccMiTraining =
      !isAct1 &&
      !isDailyPill &&
      !isSimulacro &&
      !isRepasoMode &&
      isUccPastoMedicinaInternaProUser(userTrackProfile);

    const isUccMiSimulacro =
      isSimulacro && isUccPastoMedicinaInternaProUser(userTrackProfile);

    const selected = isRepasoMode
      ? pool.slice(0, count)
      : dedicatedBattery
      ? dedicatedBattery
      : isUccMiSimulacro
        ? selectUccSimulacroQuestions({
            questions: pool,
            count,
            profile: learningProfile,
            ...cycleOptions,
          })
        : isUccMiTraining
          ? selectUccTrainingQuestions({
              questions: pool,
              count,
              profile: learningProfile,
              blockKind: blockParam,
              planStartedAt: userTrackProfile?.planStartedAt,
              ...cycleOptions,
            })
          : seenIds
            ? selectAdaptiveQuestionsWithCycle(
                pool,
                questionBank,
                count,
                learningProfile,
                seenIds,
                cycleReset,
              )
            : selectAdaptiveQuestions(pool, count, learningProfile);

    if (user && isAct1 && urlUniversity) {
      const goalSpecialty = getEffectiveGoalSpecialty(urlUniversity, urlSpecialty);
      void setDoc(
        doc(getFirebaseDb(), "users", user.uid),
        { goalUniversity: urlUniversity, goalSpecialty },
        { merge: true },
      );
    }
    setSessionQuestions(selected);
    setHasStarted(true);
    setTotalSeconds(0);
    setUsageBlockReason(null);
    setUsageBlockMeta({});
    trackStartDemo({
      userId: user?.uid,
      source: isDailyPill ? "daily-pill" : isSimulacro ? "simulacro" : (source ?? "direct"),
    });
  };

  useEffect(() => {
    let mounted = true;
    getActiveQuestions().then((questions) => {
      if (mounted) {
        setQuestionBank(questions);
        setIsLoadingQuestions(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (
      (isAct1 || isDailyPill || isBonusMode) &&
      !hasStarted &&
      !isLoadingPlan &&
      !isCheckingAuth &&
      !isLoadingQuestions &&
      questionBank.length > 0 &&
      user &&
      userTrackProfile
    ) {
      void startAdaptiveSession();
    }
  }, [
    isAct1,
    isDailyPill,
    isBonusMode,
    hasStarted,
    isLoadingPlan,
    isCheckingAuth,
    isLoadingQuestions,
    questionBank.length,
    user,
    userTrackProfile,
  ]);

  useEffect(() => {
    if (
      !isResultsStep ||
      !blockParam ||
      !["new", "review", "weak"].includes(blockParam) ||
      isBonusMode ||
      isDailyPill ||
      isAct1 ||
      isSimulacro ||
      isRepasoMode
    ) {
      return;
    }
    setSessionCompletedBlockId((prev) => prev ?? blockParam);
  }, [
    isResultsStep,
    blockParam,
    isBonusMode,
    isDailyPill,
    isAct1,
    isSimulacro,
    isRepasoMode,
  ]);

  useEffect(() => {
    const pending = pendingUccAutoStartRef.current;
    if (!pending || hasStarted || isLoadingQuestions || isCheckingAuth) return;
    if (blockParam !== pending.block || countParam !== String(pending.count)) return;

    pendingUccAutoStartRef.current = null;
    void startAdaptiveSession();
  }, [
    blockParam,
    countParam,
    hasStarted,
    isLoadingQuestions,
    isCheckingAuth,
    questionBank.length,
  ]);

  useEffect(() => {
    let unsubscribe: (() => void) | undefined;

    try {
      unsubscribe = onAuthStateChanged(getFirebaseAuth(), (currentUser) => {
        setUser(currentUser);
        setIsCheckingAuth(false);
      });
    } catch (error) {
      console.error("No se pudo inicializar Firebase Auth en demo.", error);
      setUser(null);
      setIsCheckingAuth(false);
    }

    return () => {
      unsubscribe?.();
    };
  }, []);

  useEffect(() => {
    if (!user) {
      setLearningProfile(EMPTY_PROFILE);
      return;
    }
    const userId = user.uid;
    let isMounted = true;

    async function loadLearningProfile() {
      try {
        const userRef = doc(getFirebaseDb(), "users", userId);
        const snapshot = await getDoc(userRef);
        if (!isMounted) return;

        const data = snapshot.data() as any;
        const rawTopicStats = data?.topicStats ?? {};
        const topicStats = Object.fromEntries(
          Object.entries(rawTopicStats).map(([topic, stats]: [string, any]) => [
            topic,
            {
              correct: stats?.correct ?? 0,
              wrong: stats?.wrong ?? 0,
            },
          ]),
        );
        setLearningProfile({
          weaknesses: data?.weaknesses ?? [],
          strengths: data?.strengths ?? [],
          topicStats,
        });
        setUserTrackProfile({
          plan: data?.plan,
          goalUniversity: data?.goalUniversity,
          goalSpecialty: data?.goalSpecialty,
          planStartedAt: data?.planStartedAt ?? null,
        });
      } catch (error) {
        console.error("No se pudo cargar el perfil adaptativo.", error);
        if (isMounted) setLearningProfile(EMPTY_PROFILE);
      }
    }
    void loadLearningProfile();
    return () => { isMounted = false; };
  }, [user]);

  useEffect(() => {
    if (!user || !isRepasoMode) {
      setRepasoPendingCount(null);
      return;
    }
    let mounted = true;
    void getTodayFailedQuestions(user.uid, { unresolvedOnly: true }).then((failed) => {
      if (mounted) setRepasoPendingCount(failed.length);
    });
    return () => {
      mounted = false;
    };
  }, [user, isRepasoMode]);

  useEffect(() => {
    if (!user || isAct1 || isDailyPill || isSimulacro || hasStarted) return;
    if (!userTrackProfile) return;

    let mounted = true;

    async function preloadUsageGate() {
      if (!user) return;
      const check = await checkCanStartSession(user.uid, effectivePlan, sessionType, {
        isBonusMode,
        isDailyPill,
        isRepasoPractice,
        isRepasoCierre,
        profile: userTrackProfile,
        planStartedAt: userTrackProfile?.planStartedAt,
        uccBlockKind:
          blockParam && ["new", "review", "weak"].includes(blockParam)
            ? blockParam
            : null,
      });
      if (!mounted) return;
      if (!check.allowed) {
        setUsageBlockReason(check.reason);
        setUsageBlockMeta({
          dayClosed: "dayClosed" in check ? check.dayClosed : undefined,
          bonusAvailable: "bonusAvailable" in check ? check.bonusAvailable : undefined,
        });
      } else {
        setUsageBlockReason(null);
        setUsageBlockMeta({});
      }
    }

    void preloadUsageGate();
    return () => {
      mounted = false;
    };
  }, [
    user,
    isAct1,
    isDailyPill,
    isSimulacro,
    hasStarted,
    effectivePlan,
    sessionType,
    isBonusMode,
    isRepasoMode,
    isRepasoPractice,
    isRepasoCierre,
    userTrackProfile,
    blockParam,
  ]);

  useEffect(() => {
    if (!hasStarted || isResultsStep || !currentQuestion) return;
    const hasAlreadyAnswered = Boolean(answersByQuestionId[currentQuestion.id]);
    if (!hasAlreadyAnswered) setQuestionStartAt(Date.now());
  }, [answersByQuestionId, currentQuestion, hasStarted, isResultsStep]);

  useEffect(() => {
    if (!hasStarted || isResultsStep) return;
    const interval = setInterval(() => {
      setTotalSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [hasStarted, isResultsStep]);

  useEffect(() => {
    if (
      !isSimulacro ||
      !hasStarted ||
      isResultsStep ||
      simulacroMaxSeconds <= 0 ||
      totalSeconds < simulacroMaxSeconds
    ) {
      return;
    }
    setCurrentQuestionIndex(totalQuestions);
  }, [hasStarted, isResultsStep, isSimulacro, simulacroMaxSeconds, totalSeconds, totalQuestions]);

  useEffect(() => {
    if (!isResultsStep || !user || hasSavedCurrentAttempt) return;
    void saveDemoResult({
      userId: user.uid,
      scorePercentage,
      correctAnswers,
      wrongAnswers,
      wrongTopics: wrongTopicsByName,
      correctTopics: correctTopicsByName,
      avgResponseTime: calculateAverageResponseTime(responseTimes),
      sessionType: resultSessionType,
      uccBlockKind:
        blockParam &&
        ["new", "review", "weak"].includes(blockParam) &&
        !isBonusMode &&
        !isDailyPill &&
        !isAct1 &&
        !isSimulacro &&
        !isRepasoMode
          ? blockParam
          : undefined,
    }).then(() => {
      setHasSavedCurrentAttempt(true);
      setHistoryRefreshKey((prev) => prev + 1);
      registerTrainingDay(user.uid).catch(console.error);
    });
  }, [blockParam, correctAnswers, hasSavedCurrentAttempt, isAct1, isDailyPill, isResultsStep, isSimulacro, resultSessionType, scorePercentage, user, wrongAnswers, correctTopicsByName, wrongTopicsByName, responseTimes]);

  useEffect(() => {
    if (!isResultsStep || !user || !isRepasoCierre || hasSavedCurrentAttempt === false) return;
    void markRepasoCierreCompleted(user.uid);
  }, [isResultsStep, user, isRepasoCierre, hasSavedCurrentAttempt]);

  useEffect(() => {
    if (!isFreePlan || !hasStarted || hasTriggeredFreePaywall || isResultsStep || currentQuestionIndex !== totalQuestions - 1 || !hasAnsweredCurrentQuestion) return;
    setHasTriggeredFreePaywall(true);
    trackViewPaywall({ userId: user?.uid, score: scorePercentage });
    setShowFreePaywallTeaser(true);
    const timeoutId = window.setTimeout(() => {
      setShowFreePaywallTeaser(false);
      setIsFreeLimitModalOpen(true);
    }, 1000);
    return () => window.clearTimeout(timeoutId);
  }, [currentQuestionIndex, hasAnsweredCurrentQuestion, hasStarted, hasTriggeredFreePaywall, isFreePlan, isResultsStep, scorePercentage, totalQuestions, user?.uid]);

  useEffect(() => {
    if (!isResultsStep || hasTrackedFinishDemoRef.current || !hasStarted) return;
    hasTrackedFinishDemoRef.current = true;
    trackFinishDemo({
      userId: user?.uid,
      score: scorePercentage,
      correct: correctAnswers,
      total: totalQuestions,
    });
    if (user && isDailyPill && !hasRegisteredTrainingDay) {
       setHasRegisteredTrainingDay(true);
       completeDailyPill(user.uid, scorePercentage === 100).catch(console.error);
    }
  }, [isResultsStep, user, scorePercentage, correctAnswers, totalQuestions, hasStarted, isDailyPill, hasRegisteredTrainingDay]);

  const handleAnswer = (optionId: string, isCorrectFromCard?: boolean) => {
    if (!currentQuestion || hasAnsweredCurrentQuestion) return;

    const isCorrect = isCorrectFromCard ?? (optionId === currentQuestion.correctOptionId);
    const now = Date.now();
    const timeTaken = questionStartAt ? (now - questionStartAt) / 1000 : 0;

    setResponseTimes((prev) => [...prev, timeTaken]);
    setAnswersByQuestionId((prev) => ({ ...prev, [currentQuestion.id]: optionId }));

    const statsKey = getPerformanceStatsKey(currentQuestion);

    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
      setCorrectTopicsByName((prev) => ({ ...prev, [statsKey]: (prev[statsKey] || 0) + 1 }));
    } else {
      setWrongAnswers((prev) => prev + 1);
      setWrongTopicsByName((prev) => ({ ...prev, [statsKey]: (prev[statsKey] || 0) + 1 }));
    }

    if (user) {
      if (
        shouldTrackQuestionCycle({
          isAct1: Boolean(isAct1),
          isDailyPill,
          isRepasoMode,
        })
      ) {
        void markQuestionSeen(user.uid, currentQuestion.id);
      }

      if (!isCorrect) {
        void recordFailedQuestion({
          userId: user.uid,
          questionId: currentQuestion.id,
          topic: currentQuestion.topic,
          statement: currentQuestion.statement,
          selectedOptionId: optionId,
          context: {
            sessionType: resultSessionType,
            uccBlockKind: blockParam,
            mode: searchParams.get("mode"),
            source,
          },
        });
      } else if (isRepasoMode) {
        void resolveFailedQuestion(user.uid, currentQuestion.id);
      }
    }

    const selectedOption = currentQuestion.options.find((o) => o.id === optionId);
    const distractorMessage =
      !isCorrect && selectedOption?.incorrectFeedback
        ? selectedOption.incorrectFeedback
        : null;
    const feedback =
      distractorMessage ??
      buildDynamicFeedbackMessage({
        topic: currentQuestion.topic,
        isCorrect,
        profile: learningProfile,
        currentCorrectTopics: correctTopicsByName,
        currentWrongTopics: wrongTopicsByName,
      });
    setLiveFeedbackMessage(feedback);
    setShowProgressFeedback(true);

    trackDemoQuestionAnswered({
      userId: user?.uid,
      questionId: currentQuestion.id,
      topic: currentQuestion.topic,
      isCorrect,
      responseTime: timeTaken,
    });

    if (user && sessionType === "training" && !hasRecordedSessionRef.current) {
      hasRecordedSessionRef.current = true;
      void recordSessionStart(user.uid, sessionType);
    }

    setTimeout(() => {
      setShowProgressFeedback(false);
      // Si es Daily Pill, pasamos automáticamente a resultados después de un breve delay
      // para que el usuario pueda ver la explicación inicial.
      if (isDailyPill) {
        handleNext();
      }
    }, isDailyPill ? 5000 : 2000);
  };

  const handleNext = () => {
    if (hasNextQuestion) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setLiveFeedbackMessage(null);
    } else {
      setCurrentQuestionIndex(totalQuestions);
    }
  };

  if (isCheckingAuth || isLoadingPlan || isLoadingQuestions) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-mq-accent border-t-transparent" />
      </div>
    );
  }

  return (
    <main className={`relative flex min-h-screen flex-col items-center bg-background ${isDashboard ? "p-0" : "px-4 py-8 sm:py-12"}`}>
      <div className="w-full max-w-4xl space-y-8">
        {isResultsStep ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <FinalResultsScreen
              correctAnswers={correctAnswers}
              wrongAnswers={wrongAnswers}
              scorePercentage={scorePercentage}
              cumulativeScorePercentage={cumulativePerformance.scorePercentage}
              totalQuestionsAnswered={cumulativePerformance.totalQuestions}
              avgResponseTime={calculateAverageResponseTime(responseTimes)}
              totalSeconds={totalSeconds}
              onRepeatDemo={resetSessionState}
              source={isDailyPill ? "daily-pill" : source}
              university={urlUniversity}
              specialty={urlSpecialty}
              sessionQuestions={sessionQuestions}
              answersByQuestionId={answersByQuestionId}
              userPlan={effectivePlan}
              uccBlockCompletion={uccBlockCompletion}
              onContinueNextUccBlock={
                uccBlockCompletion?.nextBlock ? handleContinueNextUccBlock : undefined
              }
              preferDashboardReturn={preferDashboardReturn}
            />
            {user && !isDailyPill && (
              <div className="mt-12 space-y-12">
                <AttemptHistory
                  userId={user.uid}
                  refreshKey={historyRefreshKey}
                  showSessionType={hasUnlimitedAccess}
                />
              </div>
            )}
          </div>
        ) : (
          <>
            {!isDashboard && !isDailyPill && (
              <header className="max-w-2xl">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  {user ? (
                    <>
                      <p className="text-xs text-mq-muted sm:text-sm">Sesion activa: {user.email}</p>
                      <button onClick={() => logoutUser()} className="touch-manipulation inline-flex min-h-10 items-center justify-center rounded-lg border border-mq-border-strong bg-white/[0.03] px-3 text-xs font-semibold text-foreground transition hover:border-white/30 hover:bg-white/[0.07] sm:text-sm">
                        Cerrar sesion
                      </button>
                    </>
                  ) : (
                    <div className="flex items-center gap-4">
                      <p className="inline-flex min-h-10 items-center rounded-lg border border-mq-border-strong bg-white/[0.03] px-3 text-xs font-semibold text-mq-muted sm:text-sm">Modo invitado</p>
                      {hasStarted && (
                        <div className="flex items-center gap-2 rounded-lg border border-mq-accent/20 bg-mq-accent/5 px-3 py-1.5 text-sm font-bold text-mq-accent">
                          <span className="h-2 w-2 rounded-full bg-mq-accent animate-pulse" />
                          {formatTime(totalSeconds)}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </header>
            )}

            {!hasStarted ? (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex min-h-[60vh] flex-col items-center justify-center text-center">
                <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-[2rem] bg-mq-accent/10 text-mq-accent ring-1 ring-mq-accent/20">
                  <Zap size={48} fill="currentColor" />
                </div>
                <h1 className="mb-4 text-4xl font-black tracking-tight text-white sm:text-6xl">
                  {isSimulacro ? (
                    <>Simulacro <span className="text-mq-accent">{isUccSimulacro ? "UCC Pasto" : "tipo examen"}</span></>
                  ) : isRepasoCierre ? (
                    <>Examen de <span className="text-mq-accent">cierre</span></>
                  ) : isRepasoPractice ? (
                    <>Refuerzo de <span className="text-mq-accent">fallas</span></>
                  ) : isBonusMode ? (
                    <>Modo <span className="text-mq-accent">bonus</span></>
                  ) : blockParam ? (
                    <>Bloque <span className="text-mq-accent">del día</span></>
                  ) : (
                    <>Prepárate para <span className="text-mq-accent">Ganar</span></>
                  )}
                </h1>
                <p className="mb-6 max-w-lg text-lg text-mq-muted">
                  {isSimulacro
                    ? `${plannedQuestionCount} preguntas · ${effectiveSimulacroMinutes} min máximo${isUccSimulacro ? " · Res. 108" : ""}.`
                    : isRepasoCierre
                      ? `${plannedQuestionCount} preguntas fallidas pendientes · examen final del día.`
                      : isRepasoPractice
                        ? `${plannedQuestionCount} preguntas que fallaste hoy · sin presión de misión.`
                        : isBonusMode
                      ? `Hasta ${plannedQuestionCount} preguntas extra sin presión.`
                      : blockParam
                        ? `${plannedQuestionCount} preguntas · ${blockParam === "new" ? "material nuevo" : blockParam === "review" ? "repaso espaciado" : "debilidades"}${uccWeekModule ? ` · ${uccWeekModule.label}` : ""}.`
                        : `Entrenamiento adaptativo de ${plannedQuestionCount} preguntas.`}
                </p>
                {usageBlockReason ? (
                  <div className="mb-6 max-w-md rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-100">
                    {usageBlockReason}
                    {usageBlockMeta.bonusAvailable ? (
                      <Link
                        href={`/dashboard/entrenar?mode=bonus&count=${UCC_MI_DAILY_BONUS_MAX}&block=weak`}
                        className="mt-2 block font-bold text-mq-accent hover:underline"
                      >
                        Modo bonus opcional ({UCC_MI_DAILY_BONUS_MAX} preg)
                      </Link>
                    ) : null}
                    {usageBlockMeta.dayClosed && !usageBlockMeta.bonusAvailable ? (
                      <Link
                        href="/dashboard"
                        className="mt-2 block font-bold text-mq-accent hover:underline"
                      >
                        Volver al panel
                      </Link>
                    ) : null}
                    {!usageBlockMeta.dayClosed && upgradeCta ? (
                      <Link
                        href={upgradeCta.href}
                        className="mt-2 block font-bold text-mq-accent hover:underline"
                      >
                        {upgradeCta.label}
                      </Link>
                    ) : null}
                  </div>
                ) : null}
                <button
                  type="button"
                  onClick={() => void startAdaptiveSession()}
                  disabled={
                    Boolean(usageBlockReason) ||
                    questionBank.length === 0 ||
                    (isRepasoMode && repasoPendingCount === null)
                  }
                  className="mq-premium-glow group flex h-16 items-center justify-center gap-4 rounded-2xl bg-mq-accent px-12 text-lg font-black text-mq-accent-foreground transition-all hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSimulacro
                    ? "INICIAR SIMULACRO"
                    : isRepasoCierre
                      ? "INICIAR EXAMEN DE CIERRE"
                      : isRepasoPractice
                        ? "REPASAR FALLAS"
                        : isBonusMode
                          ? "INICIAR BONUS"
                          : "COMENZAR ENTRENAMIENTO"}
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            ) : (
              <div className="space-y-8 animate-in fade-in duration-500">
                 <div className="flex items-center justify-between">
                    <div className="space-y-1">
                       <p className="text-[10px] font-black uppercase tracking-[0.2em] text-mq-accent">
                          {isDailyPill
                            ? "La Pildora del Dr. Q"
                            : isRepasoCierre
                              ? "Examen de cierre"
                              : isRepasoPractice
                                ? "Refuerzo de fallas"
                                : isSimulacro
                                  ? "Simulacro en curso"
                                  : "Entrenamiento adaptativo"}
                       </p>
                       <h2 className="text-xl font-bold text-white">Pregunta {currentQuestionIndex + 1} de {totalQuestions}</h2>
                    </div>
                    {(isDailyPill || isSimulacro) && (
                       <div
                         className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold ${
                           isSimulacro &&
                           simulacroMaxSeconds > 0 &&
                           totalSeconds >= simulacroMaxSeconds - 300
                             ? "border-amber-500/40 bg-amber-500/10 text-amber-200"
                             : "border-mq-accent/20 bg-mq-accent/5 text-mq-accent"
                         }`}
                       >
                          <Target size={14} />
                          {isSimulacro && simulacroMaxSeconds > 0
                            ? `${formatTime(totalSeconds)} / ${formatTime(simulacroMaxSeconds)}`
                            : formatTime(totalSeconds)}
                       </div>
                    )}
                 </div>

                 <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/5">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${progressPercent}%` }} className="absolute inset-y-0 left-0 bg-mq-accent shadow-[0_0_15px_rgba(0,209,255,0.5)]" />
                 </div>

                 {enrichedCurrentQuestion && (
                    <QuestionCard 
                       key={enrichedCurrentQuestion.id}
                       questionId={enrichedCurrentQuestion.id}
                       topic={enrichedCurrentQuestion.topic}
                       question={enrichedCurrentQuestion.statement}
                       options={enrichedCurrentQuestion.options}
                       correctOptionId={enrichedCurrentQuestion.correctOptionId}
                       explanation={enrichedCurrentQuestion.explanation}
                       keyPoints={enrichedCurrentQuestion.keyPoints}
                       theoryContent={enrichedCurrentQuestion.theoryContent}
                       theoryHref={getTheoryLink(enrichedCurrentQuestion)}
                       userId={user?.uid ?? null}
                       dynamicFeedback={liveFeedbackMessage}
                       incorrectAnswerDetail={
                         hasAnsweredCurrentQuestion &&
                         selectedOptionId !== enrichedCurrentQuestion.correctOptionId
                           ? enrichedCurrentQuestion.options.find((o) => o.id === selectedOptionId)
                               ?.incorrectFeedback
                           : undefined
                       }
                       examAreaLabel={enrichedCurrentQuestion.examArea}
                       onAnswerSelect={handleAnswer}
                       isLocked={
                         isDailyPill || isSimulacro
                           ? false
                           : isAct1 && currentQuestionIndex > 0 && isFreePlan
                       }
                    />
                 )}

                 {hasAnsweredCurrentQuestion && !isResultsStep && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-6 pt-4">
                       {showProgressFeedback && liveFeedbackMessage && (
                          <div className="flex items-center gap-2 rounded-full bg-mq-accent/10 px-6 py-2 border border-mq-accent/20">
                             <Sparkles size={14} className="text-mq-accent" />
                             <span className="text-xs font-bold text-mq-accent uppercase tracking-widest">{liveFeedbackMessage}</span>
                          </div>
                       )}
                       {!showProgressFeedback && !isDailyPill && (
                          <button onClick={handleNext} className="mq-premium-glow flex h-14 items-center justify-center gap-3 rounded-xl bg-mq-accent px-10 text-sm font-black text-mq-accent-foreground transition-all hover:scale-105">
                             {hasNextQuestion ? "SIGUIENTE PREGUNTA" : "VER RESULTADOS FINALES"}
                             <ArrowRight size={18} />
                          </button>
                       )}
                       {!showProgressFeedback && isDailyPill && (
                          <p className="text-xs font-bold text-mq-accent/50 animate-pulse uppercase tracking-[0.2em]">
                             Generando resultados finales...
                          </p>
                       )}
                    </motion.div>
                 )}
              </div>
            )}
          </>
        )}
      </div>

      <FreePlanPaywall 
        open={isFreeLimitModalOpen} 
        onClose={() => setIsFreeLimitModalOpen(false)} 
        scorePercentage={scorePercentage} 
      />
    </main>
  );
}
