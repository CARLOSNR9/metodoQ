"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AttemptHistory,
  FinalResultsScreen,
  QuestionCard,
  type QuestionOption,
} from "@/components/demo";
import { useAuthGuard } from "@/hooks/use-auth-guard";
import { logoutUser } from "@/lib/auth";
import { saveDemoResult } from "@/lib/results";

type DemoQuestion = {
  id: string;
  statement: string;
  options: QuestionOption[];
  correctOptionId: string;
  explanation: string;
  keyPoints: string[];
};

const demoQuestions: DemoQuestion[] = [
  {
    id: "q1",
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
  const { user, isCheckingAuth } = useAuthGuard("/login");
  const [hasStarted, setHasStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answersByQuestionId, setAnswersByQuestionId] = useState<
    Record<string, string>
  >({});
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [hasSavedCurrentAttempt, setHasSavedCurrentAttempt] = useState(false);
  const [historyRefreshKey, setHistoryRefreshKey] = useState(0);

  const totalQuestions = demoQuestions.length;
  const isResultsStep = currentQuestionIndex === totalQuestions;
  const currentQuestion = isResultsStep
    ? null
    : demoQuestions[currentQuestionIndex];
  const selectedOptionId = currentQuestion
    ? answersByQuestionId[currentQuestion.id]
    : null;
  const hasAnsweredCurrentQuestion = Boolean(selectedOptionId);
  const hasNextQuestion =
    !isResultsStep && currentQuestionIndex < totalQuestions - 1;
  const scorePercentage = Math.round((correctAnswers / totalQuestions) * 100);
  const progressPercent = Math.round(
    ((currentQuestionIndex + (hasAnsweredCurrentQuestion ? 1 : 0)) / totalQuestions) *
      100,
  );

  useEffect(() => {
    if (!isResultsStep || !user || hasSavedCurrentAttempt) {
      return;
    }

    void saveDemoResult({
      userId: user.uid,
      scorePercentage,
      correctAnswers,
      wrongAnswers,
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
  ]);

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

    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
    } else {
      setWrongAnswers((prev) => prev + 1);
    }
  };

  return (
    <main className="flex flex-1 flex-col bg-[#0A1F44]">
      <section className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {isCheckingAuth ? (
          <div className="flex min-h-[45vh] items-center justify-center">
            <p className="text-sm text-mq-muted sm:text-base">
              Verificando sesion...
            </p>
          </div>
        ) : (
          <>
            <header className="max-w-2xl">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs text-mq-muted sm:text-sm">
                  Sesion activa: {user?.email}
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
              </div>
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Demo Metodo Q
              </h1>
              <p className="mt-4 text-base leading-relaxed text-mq-muted sm:text-lg">
                Responde algunas preguntas y mide tu nivel
              </p>
            </header>

        {!hasStarted ? (
          <div className="mt-10">
            <button
              type="button"
              onClick={() => setHasStarted(true)}
              className="inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-mq-accent px-6 text-base font-semibold text-mq-accent-foreground shadow-[0_12px_36px_-16px_rgb(0_209_255/0.6)] transition duration-200 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mq-accent sm:w-auto sm:min-w-56"
            >
              Comenzar demo
            </button>
          </div>
        ) : isResultsStep ? (
          <FinalResultsScreen
            scorePercentage={scorePercentage}
            correctAnswers={correctAnswers}
            wrongAnswers={wrongAnswers}
            onRepeatDemo={() => {
              setCurrentQuestionIndex(0);
              setAnswersByQuestionId({});
              setCorrectAnswers(0);
              setWrongAnswers(0);
              setHasSavedCurrentAttempt(false);
            }}
          />
        ) : (
          <div className="mt-10">
            <div className="mb-5 space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mq-accent">
                  Pregunta {currentQuestionIndex + 1} de {demoQuestions.length}
                </p>
                <p className="text-xs font-medium text-mq-muted">
                  {currentQuestionIndex + 1}/{demoQuestions.length} preguntas
                </p>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-mq-accent transition-[width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ width: `${progressPercent}%` }}
                  aria-hidden
                />
              </div>
            </div>

            <div className="mq-fade-up">
              <QuestionCard
                key={currentQuestion!.id}
                question={currentQuestion!.statement}
                options={currentQuestion!.options}
                correctOptionId={currentQuestion!.correctOptionId}
                explanation={currentQuestion!.explanation}
                keyPoints={currentQuestion!.keyPoints}
                onAnswerSelect={handleAnswerSelect}
              />
            </div>

            {hasNextQuestion ? (
              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() =>
                    setCurrentQuestionIndex((prev) => prev + 1)
                  }
                  disabled={!hasAnsweredCurrentQuestion}
                  className="touch-manipulation inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-mq-accent px-6 text-sm font-semibold text-mq-accent-foreground transition duration-150 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mq-accent sm:w-auto sm:text-base"
                >
                  Siguiente pregunta
                </button>
              </div>
            ) : (
              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setCurrentQuestionIndex(totalQuestions)}
                  disabled={!hasAnsweredCurrentQuestion}
                  className="touch-manipulation inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-mq-accent px-6 text-sm font-semibold text-mq-accent-foreground transition duration-150 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mq-accent sm:w-auto sm:text-base"
                >
                  Ver resultados
                </button>
              </div>
            )}
          </div>
        )}
            {user ? (
              <AttemptHistory userId={user.uid} refreshKey={historyRefreshKey} />
            ) : null}
          </>
        )}
      </section>
    </main>
  );
}
