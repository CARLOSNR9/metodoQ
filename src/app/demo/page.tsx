"use client";

import { onAuthStateChanged, type User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  AttemptHistory,
  FinalResultsScreen,
  FreePlanPaywall,
  QuestionCard,
  type QuestionOption,
} from "@/components/demo";
import { logoutUser } from "@/lib/auth";
import { getFirebaseAuth, getFirebaseDb } from "@/lib/firebase";
import { useUserPlan } from "@/hooks/use-user-plan";
import {
  trackClickUpgrade,
  trackDemoQuestionAnswered,
  trackFinishDemo,
  trackStartDemo,
  trackViewPaywall,
} from "@/lib/analytics/events";
import { registerTrainingDay, saveDemoResult } from "@/lib/results";

type DemoQuestion = {
  id: string;
  topic: string;
  statement: string;
  options: QuestionOption[];
  correctOptionId: string;
  explanation: string;
  keyPoints: string[];
};

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

function getTopicPerformance(
  topic: string,
  profile: UserLearningProfile,
  currentCorrectTopics: Record<string, number>,
  currentWrongTopics: Record<string, number>,
) {
  const historical = profile.topicStats[topic] ?? { correct: 0, wrong: 0 };
  return {
    correct: historical.correct + (currentCorrectTopics[topic] ?? 0),
    wrong: historical.wrong + (currentWrongTopics[topic] ?? 0),
  };
}

function buildDynamicFeedbackMessage({
  topic,
  isCorrect,
  profile,
  currentCorrectTopics,
  currentWrongTopics,
}: {
  topic: string;
  isCorrect: boolean;
  profile: UserLearningProfile;
  currentCorrectTopics: Record<string, number>;
  currentWrongTopics: Record<string, number>;
}) {
  const performance = getTopicPerformance(
    topic,
    profile,
    currentCorrectTopics,
    currentWrongTopics,
  );
  const isWeakTopic = profile.weaknesses.includes(topic);
  const isStrongTopic = profile.strengths.includes(topic);

  if (!isCorrect && (performance.wrong >= performance.correct + 2 || isWeakTopic)) {
    return "Estas fallando seguido en este tipo de preguntas";
  }

  if (isWeakTopic) {
    return "Este tema es clave en el examen";
  }

  if (isCorrect && (performance.correct >= performance.wrong + 3 || isStrongTopic)) {
    return "Ya estas dominando este concepto";
  }

  return "Este tema es clave en el examen";
}

function getTopicWeight(topic: string, profile: UserLearningProfile) {
  const weaknessIndex = profile.weaknesses.findIndex((item) => item === topic);
  const strengthIndex = profile.strengths.findIndex((item) => item === topic);

  let weight = 1;

  if (weaknessIndex >= 0) {
    weight += Math.max(0.2, 0.9 - weaknessIndex * 0.2);
  }

  if (strengthIndex >= 0) {
    weight -= Math.max(0.2, 0.6 - strengthIndex * 0.15);
  }

  return Math.max(0.2, weight);
}

function selectAdaptiveQuestions(
  questions: DemoQuestion[],
  desiredCount: number,
  profile: UserLearningProfile,
) {
  if (desiredCount >= questions.length) {
    return [...questions];
  }

  const pool = [...questions];
  const selected: DemoQuestion[] = [];

  while (selected.length < desiredCount && pool.length > 0) {
    const weights = pool.map((question) => getTopicWeight(question.topic, profile));
    const totalWeight = weights.reduce((sum, item) => sum + item, 0);
    let pick = Math.random() * totalWeight;
    let selectedIndex = 0;

    for (let index = 0; index < pool.length; index += 1) {
      pick -= weights[index];
      if (pick <= 0) {
        selectedIndex = index;
        break;
      }
    }

    selected.push(pool[selectedIndex]);
    pool.splice(selectedIndex, 1);
  }

  return selected;
}

const demoQuestions: DemoQuestion[] = [
  {
    id: "q1",
    topic: "Infectologia",
    statement:
      "Paciente con fiebre, hipotension y lactato elevado. Diagnostico mas probable?",
    options: [
      { id: "A", label: "A", text: "Shock hipovolemico" },
      { id: "B", label: "B", text: "Shock septico" },
      { id: "C", label: "C", text: "Shock cardiogenico" },
      { id: "D", label: "D", text: "Shock obstructivo" },
    ],
    correctOptionId: "B",
    explanation:
      "Shock septico se caracteriza por infeccion + disfuncion organica + lactato elevado.",
    keyPoints: [
      "La sepsis debe sospecharse en paciente con foco infeccioso e hipoperfusion.",
      "El tratamiento inicial incluye fluidos y antibiotico temprano.",
    ],
  },
  {
    id: "q2",
    topic: "Cardiologia",
    statement:
      "Varon de 68 anos con dolor toracico opresivo y elevacion del ST en cara inferior. Cual es la conducta inicial mas adecuada?",
    options: [
      { id: "A", label: "A", text: "Alta con analgesia y control ambulatorio" },
      { id: "B", label: "B", text: "Fibrinolisis o angioplastia urgente" },
      { id: "C", label: "C", text: "Solo antiinflamatorios no esteroideos" },
      { id: "D", label: "D", text: "Esperar troponina de 24 horas" },
    ],
    correctOptionId: "B",
    explanation:
      "Un IAM con elevacion del ST requiere reperfusion inmediata para reducir dano miocardico.",
    keyPoints: [
      "El tiempo puerta-balón es determinante en el pronostico.",
      "No se debe retrasar la reperfusion esperando marcadores tardios.",
    ],
  },
  {
    id: "q3",
    topic: "Antibioticos",
    statement:
      "Mujer de 24 anos con disuria, polaquiuria y fiebre de 39 C con dolor lumbar. Diagnostico mas probable?",
    options: [
      { id: "A", label: "A", text: "Cistitis no complicada" },
      { id: "B", label: "B", text: "Pielonefritis aguda" },
      { id: "C", label: "C", text: "Vaginitis candidiasica" },
      { id: "D", label: "D", text: "Colico nefritico" },
    ],
    correctOptionId: "B",
    explanation:
      "La fiebre alta con dolor lumbar y sintomas urinarios orienta a pielonefritis.",
    keyPoints: [
      "La afectacion sistemica sugiere infeccion urinaria alta.",
      "Requiere antibiotico sistemico y vigilancia de complicaciones.",
    ],
  },
  {
    id: "q4",
    topic: "Neumologia",
    statement:
      "Paciente con EPOC agudizado: pH 7.28, PaCO2 62 mmHg, FR 32. Cual es la mejor estrategia inicial?",
    options: [
      { id: "A", label: "A", text: "Oxigeno alto flujo sin monitorizacion" },
      { id: "B", label: "B", text: "Ventilacion mecanica no invasiva" },
      { id: "C", label: "C", text: "Sedacion y observacion" },
      { id: "D", label: "D", text: "Alta con broncodilatador inhalado" },
    ],
    correctOptionId: "B",
    explanation:
      "La acidosis respiratoria en agudizacion de EPOC se beneficia de ventilacion no invasiva temprana.",
    keyPoints: [
      "La VNI reduce necesidad de intubacion en pacientes seleccionados.",
      "Debe acompanarse de broncodilatadores y tratamiento etiologico.",
    ],
  },
  {
    id: "q5",
    topic: "Neurologia",
    statement:
      "Adulto mayor con inicio brusco de hemiparesia derecha y afasia de 50 minutos de evolucion. Paso prioritario?",
    options: [
      { id: "A", label: "A", text: "Iniciar anticoagulacion sin imagen" },
      { id: "B", label: "B", text: "Solicitar TAC craneal urgente" },
      { id: "C", label: "C", text: "Esperar mejoria espontanea 24 horas" },
      { id: "D", label: "D", text: "Administrar corticoides de rutina" },
    ],
    correctOptionId: "B",
    explanation:
      "Ante ictus agudo, la neuroimagen urgente define si hay hemorragia y guia reperfusion.",
    keyPoints: [
      "La ventana terapeutica obliga a actuar en minutos, no en horas.",
      "La TAC sin contraste es la prueba inicial en fase aguda.",
    ],
  },
];

export default function DemoPage() {
  const { plan, loading: isLoadingPlan } = useUserPlan();
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
  const [liveFeedbackMessage, setLiveFeedbackMessage] = useState<string | null>(null);
  const hasTrackedFinishDemoRef = useRef(false);

  const effectivePlan = plan ?? "FREE";
  const isFreePlan = effectivePlan === "FREE";
  const hasUnlimitedAccess = effectivePlan === "PRO" || effectivePlan === "PRO_PLUS";
  const plannedQuestionCount = Math.min(5, demoQuestions.length);
  const totalQuestions = hasStarted ? sessionQuestions.length : plannedQuestionCount;
  const availableQuestions = hasStarted ? sessionQuestions : [];
  const isResultsStep = hasStarted && currentQuestionIndex === totalQuestions;
  const currentQuestion = isResultsStep
    ? null
    : availableQuestions[currentQuestionIndex];
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
  const progressBase = Math.max(totalQuestions, 1);
  const progressPercent = Math.round(
    ((currentQuestionIndex + (hasAnsweredCurrentQuestion ? 1 : 0)) / progressBase) *
      100,
  );
  const avgResponseTime = calculateAverageResponseTime(responseTimes);

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
        if (!isMounted) {
          return;
        }

        const data = snapshot.data() as
          | {
              weaknesses?: string[];
              strengths?: string[];
              topicStats?: Record<string, { correct?: number; wrong?: number }>;
            }
          | undefined;
        const rawTopicStats = data?.topicStats ?? {};
        const topicStats = Object.fromEntries(
          Object.entries(rawTopicStats).map(([topic, stats]) => [
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
      } catch (error) {
        console.error("No se pudo cargar el perfil adaptativo.", error);
        if (isMounted) {
          setLearningProfile(EMPTY_PROFILE);
        }
      }
    }

    void loadLearningProfile();

    return () => {
      isMounted = false;
    };
  }, [user]);

  useEffect(() => {
    if (!hasStarted || isResultsStep || !currentQuestion) {
      return;
    }

    const hasAlreadyAnswered = Boolean(answersByQuestionId[currentQuestion.id]);
    if (!hasAlreadyAnswered) {
      setQuestionStartAt(Date.now());
    }
  }, [answersByQuestionId, currentQuestion, hasStarted, isResultsStep]);

  useEffect(() => {
    if (!isResultsStep || !user || hasSavedCurrentAttempt) {
      return;
    }

    void saveDemoResult({
      userId: user.uid,
      scorePercentage,
      correctAnswers,
      wrongAnswers,
      wrongTopics: wrongTopicsByName,
      correctTopics: correctTopicsByName,
      avgResponseTime,
    }).then(() => {
      setHasSavedCurrentAttempt(true);
      setHistoryRefreshKey((prev) => prev + 1);
    });
  }, [
    correctAnswers,
    hasSavedCurrentAttempt,
    isResultsStep,
    scorePercentage,
    user,
    wrongAnswers,
    correctTopicsByName,
    wrongTopicsByName,
    avgResponseTime,
  ]);

  useEffect(() => {
    if (
      !isFreePlan ||
      !hasStarted ||
      hasTriggeredFreePaywall ||
      isResultsStep ||
      currentQuestionIndex !== totalQuestions - 1 ||
      !hasAnsweredCurrentQuestion
    ) {
      return;
    }

    setHasTriggeredFreePaywall(true);
    trackViewPaywall({
      userId: user?.uid,
      score: scorePercentage,
    });
    setShowFreePaywallTeaser(true);

    const timeoutId = window.setTimeout(() => {
      setShowFreePaywallTeaser(false);
      setIsFreeLimitModalOpen(true);
    }, 1000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [
    currentQuestionIndex,
    hasAnsweredCurrentQuestion,
    hasStarted,
    hasTriggeredFreePaywall,
    isFreePlan,
    isResultsStep,
    scorePercentage,
    totalQuestions,
    user?.uid,
  ]);

  useEffect(() => {
    if (!isResultsStep || hasTrackedFinishDemoRef.current || !hasStarted) {
      return;
    }

    trackFinishDemo({
      userId: user?.uid,
      score: scorePercentage,
    });
    hasTrackedFinishDemoRef.current = true;
  }, [hasStarted, isResultsStep, scorePercentage, user?.uid]);

  useEffect(() => {
    if (!showProgressFeedback) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setShowProgressFeedback(false);
    }, 850);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [showProgressFeedback]);

  const handleAnswerSelect = (optionId: string, isCorrect: boolean) => {
    if (!currentQuestion) {
      return;
    }

    const previousOptionId = answersByQuestionId[currentQuestion.id];
    if (previousOptionId) {
      return;
    }

    setAnswersByQuestionId((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));
    setShowProgressFeedback(true);
    const elapsedSeconds = questionStartAt
      ? Number(((Date.now() - questionStartAt) / 1000).toFixed(2))
      : 0;
    const answeredCount = Object.keys(answersByQuestionId).length + 1;
    const nextCorrectAnswersCount = isCorrect ? correctAnswers + 1 : correctAnswers;
    const currentScore = Math.round((nextCorrectAnswersCount / answeredCount) * 100);

    // Evento liviano por respuesta para analisis de uso sin bloquear UI.
    trackDemoQuestionAnswered({
      userId: user?.uid,
      questionId: currentQuestion.id,
      questionIndex: currentQuestionIndex + 1,
      isCorrect,
      responseTimeSeconds: elapsedSeconds,
      answeredCount,
      score: currentScore,
    });

    setResponseTimes((prev) => [...prev, elapsedSeconds]);

    if (user && !hasRegisteredTrainingDay) {
      setHasRegisteredTrainingDay(true);
      void registerTrainingDay(user.uid).catch((error) => {
        console.error("No se pudo actualizar la racha diaria.", error);
      });
    }

    const nextCorrectTopics = isCorrect
      ? {
          ...correctTopicsByName,
          [currentQuestion.topic]: (correctTopicsByName[currentQuestion.topic] ?? 0) + 1,
        }
      : correctTopicsByName;
    const nextWrongTopics = isCorrect
      ? wrongTopicsByName
      : {
          ...wrongTopicsByName,
          [currentQuestion.topic]: (wrongTopicsByName[currentQuestion.topic] ?? 0) + 1,
        };

    setLiveFeedbackMessage(
      buildDynamicFeedbackMessage({
        topic: currentQuestion.topic,
        isCorrect,
        profile: learningProfile,
        currentCorrectTopics: nextCorrectTopics,
        currentWrongTopics: nextWrongTopics,
      }),
    );

    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
      setCorrectTopicsByName(nextCorrectTopics);
    } else {
      setWrongAnswers((prev) => prev + 1);
      setWrongTopicsByName(nextWrongTopics);
    }


  };

  const startAdaptiveSession = () => {
    // Seleccionamos las primeras 5 preguntas (máximo) para una demo ultra‑rápida
    const selectedQuestions = demoQuestions.slice(0, plannedQuestionCount);
    setSessionQuestions(selectedQuestions);
    setHasStarted(true);
    setCurrentQuestionIndex(0);
    setAnswersByQuestionId({});
    setCorrectAnswers(0);
    setWrongAnswers(0);
    setWrongTopicsByName({});
    setCorrectTopicsByName({});
    setResponseTimes([]);
    setQuestionStartAt(null);
    setLiveFeedbackMessage(null);
    setHasSavedCurrentAttempt(false);
    setIsFreeLimitModalOpen(false);
    setShowFreePaywallTeaser(false);
    setHasTriggeredFreePaywall(false);
    setHasRegisteredTrainingDay(false);
    hasTrackedFinishDemoRef.current = false;
    trackStartDemo({ userId: user?.uid });
  };

  return (
    <main className="flex flex-1 flex-col bg-[#0A1F44]">
      <section className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {isCheckingAuth || isLoadingPlan ? (
          <div className="flex min-h-[45vh] items-center justify-center">
            <p className="text-sm text-mq-muted sm:text-base">Cargando demo...</p>
          </div>
        ) : (
          <>
            <header className="max-w-2xl">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                {user ? (
                  <>
                    <p className="text-xs text-mq-muted sm:text-sm">
                      Sesion activa: {user.email}
                    </p>
                    <button
                      type="button"
                      onClick={async () => {
                        await logoutUser();
                      }}
                      className="touch-manipulation inline-flex min-h-10 items-center justify-center rounded-lg border border-mq-border-strong bg-white/[0.03] px-3 text-xs font-semibold text-foreground transition hover:border-white/30 hover:bg-white/[0.07] sm:text-sm"
                    >
                      Cerrar sesion
                    </button>
                  </>
                ) : (
                  <p className="inline-flex min-h-10 items-center rounded-lg border border-mq-border-strong bg-white/[0.03] px-3 text-xs font-semibold text-mq-muted sm:text-sm">
                    Modo invitado
                  </p>
                )}
              </div>
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Demo Metodo Q
              </h1>
              <p className="mt-4 text-base leading-relaxed text-mq-muted sm:text-lg">
                Responde algunas preguntas y mide tu nivel
              </p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                <p className="rounded-lg border border-indigo-300/30 bg-indigo-500/10 px-3 py-2 text-xs font-semibold text-indigo-100 sm:text-sm">
                  Te estamos ayudando a mejorar en tiempo real
                </p>
                <p className="rounded-lg border border-cyan-300/30 bg-cyan-500/10 px-3 py-2 text-xs font-semibold text-cyan-100 sm:text-sm">
                  Tu progreso es personalizado
                </p>
              </div>
              <div className="mt-4 rounded-xl border border-mq-border-strong bg-white/[0.03] px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mq-accent">
                  Plan actual: {effectivePlan}
                </p>
                {isFreePlan ? (
                  <p className="mt-1 text-sm text-mq-muted">
                    Tu plan FREE permite hasta 5 preguntas por demo y acceso limitado al
                    historial.
                  </p>
                ) : effectivePlan === "PRO_PLUS" ? (
                  <p className="mt-1 text-sm text-mq-muted">
                    Tienes acceso completo. PRO_PLUS incluye beneficios adicionales
                    proximamente.
                  </p>
                ) : (
                  <p className="mt-1 text-sm text-mq-muted">
                    Tienes acceso completo a preguntas e historial.
                  </p>
                )}
              </div>
            </header>

        {!hasStarted ? (
          <div className="mt-10">
            <button
              type="button"
              onClick={startAdaptiveSession}
              className="inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-mq-accent px-6 text-base font-semibold text-mq-accent-foreground shadow-[0_12px_36px_-16px_rgb(0_209_255/0.6)] transition duration-200 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mq-accent sm:w-auto sm:min-w-56"
            >
              Comenzar entrenamiento inteligente
            </button>
          </div>
        ) : isResultsStep ? (
          <>
            <FinalResultsScreen
              scorePercentage={scorePercentage}
              correctAnswers={correctAnswers}
              wrongAnswers={wrongAnswers}
              onRepeatDemo={() => {
                startAdaptiveSession();
              }}
            />
            {!user ? (
              <section className="mt-6 rounded-2xl border border-mq-border-strong bg-mq-surface p-5 sm:p-6">
                <p className="text-sm font-semibold text-white sm:text-base">
                  Guarda tu progreso y mejora con Metodo Q
                </p>
                <p className="mt-2 text-sm text-mq-muted">
                  Crea una cuenta para guardar tus intentos, ver tu evolucion y
                  recibir recomendaciones personalizadas.
                </p>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/register"
                    className="inline-flex min-h-12 items-center justify-center rounded-xl bg-mq-accent px-6 text-sm font-semibold text-mq-accent-foreground transition duration-150 hover:brightness-110"
                  >
                    Crear cuenta
                  </Link>
                  <Link
                    href="/login"
                    className="inline-flex min-h-12 items-center justify-center rounded-xl border border-mq-border-strong bg-white/[0.03] px-6 text-sm font-semibold text-foreground transition duration-150 hover:border-white/30 hover:bg-white/[0.07]"
                  >
                    Iniciar sesion
                  </Link>
                </div>
              </section>
            ) : null}
          </>
        ) : (
          <div className="mt-10">
            <div className="mb-5 space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mq-accent">
                  Pregunta {currentQuestionIndex + 1} de {totalQuestions}
                </p>
                <p className="text-xs font-medium text-mq-muted">
                  {currentQuestionIndex + 1}/{totalQuestions} preguntas
                </p>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className={`h-full rounded-full bg-mq-accent transition-[width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    showProgressFeedback ? "animate-pulse" : ""
                  }`}
                  style={{ width: `${progressPercent}%` }}
                  aria-hidden
                />
              </div>
            </div>
            {showProgressFeedback ? (
              <p className="mq-fade-up mb-4 inline-flex rounded-lg border border-emerald-300/45 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-200">
                +1 progreso
              </p>
            ) : null}

            <div className="mq-fade-up">
              <QuestionCard
                key={currentQuestion!.id}
                question={currentQuestion!.statement}
                options={currentQuestion!.options}
                correctOptionId={currentQuestion!.correctOptionId}
                explanation={currentQuestion!.explanation}
                keyPoints={currentQuestion!.keyPoints}
                dynamicFeedback={liveFeedbackMessage}
                onAnswerSelect={handleAnswerSelect}
              />
            </div>
            <div className="mt-6 flex justify-end">
              {hasNextQuestion ? (
                <button
                  type="button"
                  onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                  disabled={!hasAnsweredCurrentQuestion}
                  className="touch-manipulation inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-mq-accent px-6 text-sm font-semibold text-mq-accent-foreground transition duration-150 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mq-accent sm:w-auto sm:text-base"
                >
                  Continuar
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setCurrentQuestionIndex(totalQuestions)}
                  disabled={!hasAnsweredCurrentQuestion}
                  className="touch-manipulation inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-mq-accent px-6 text-sm font-semibold text-mq-accent-foreground transition duration-150 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mq-accent sm:w-auto sm:text-base"
                >
                  Ver análisis personalizado
                </button>
              )}
            </div>
          </div>
        )}
            {user ? (
              <AttemptHistory
                userId={user.uid}
                refreshKey={historyRefreshKey}
                maxItems={hasUnlimitedAccess ? 10 : 3}
                limitedMessage={
                  isFreePlan
                    ? "Plan FREE: historial limitado a tus 3 intentos mas recientes."
                    : undefined
                }
              />
            ) : null}
          </>
        )}
      </section>
      {isFreePlan ? (
        <FreePlanPaywall
          open={isFreeLimitModalOpen}
          onClose={() => setIsFreeLimitModalOpen(false)}
          onUpgradeClick={() => {
            trackClickUpgrade({
              userId: user?.uid,
              score: scorePercentage,
            });
          }}
          scorePercentage={scorePercentage}
        />
      ) : null}
    </main>
  );
}
