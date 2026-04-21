"use client";

import { useState } from "react";
import { QuestionCard, type QuestionOption } from "@/components/demo";

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
  const [hasStarted, setHasStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answersByQuestionId, setAnswersByQuestionId] = useState<
    Record<string, string>
  >({});
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  const currentQuestion = demoQuestions[currentQuestionIndex];
  const selectedOptionId = currentQuestion
    ? answersByQuestionId[currentQuestion.id]
    : undefined;
  const hasAnsweredCurrentQuestion = Boolean(selectedOptionId);
  const hasNextQuestion = currentQuestionIndex < demoQuestions.length - 1;
  const isDemoCompleted = !hasNextQuestion && hasAnsweredCurrentQuestion;
  const totalQuestions = demoQuestions.length;
  const incorrectAnswersCount = totalQuestions - correctAnswersCount;
  const levelPercentage = Math.round((correctAnswersCount / totalQuestions) * 100);
  const progressPercent = Math.round(
    ((currentQuestionIndex + (hasAnsweredCurrentQuestion ? 1 : 0)) / totalQuestions) *
      100,
  );

  const handleAnswerSelect = (optionId: string, isCorrect: boolean) => {
    const previousOptionId = answersByQuestionId[currentQuestion.id];
    const wasCorrect = previousOptionId === currentQuestion.correctOptionId;

    setAnswersByQuestionId((prev) => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));

    setCorrectAnswersCount((prev) => {
      if (!previousOptionId) {
        return isCorrect ? prev + 1 : prev;
      }

      if (wasCorrect && !isCorrect) {
        return prev - 1;
      }

      if (!wasCorrect && isCorrect) {
        return prev + 1;
      }

      return prev;
    });
  };

  return (
    <main className="flex flex-1 flex-col bg-[#0A1F44]">
      <section className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <header className="max-w-2xl">
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
        ) : isDemoCompleted ? (
          <div className="mq-fade-up mt-10 flex justify-center">
            <article className="w-full max-w-2xl rounded-2xl border border-mq-border-strong bg-mq-surface-raised p-6 text-center shadow-[0_24px_60px_-34px_rgb(0_209_255/0.45)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mq-accent">
                Resultado final
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                Tu nivel actual: {levelPercentage}%
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-emerald-400/40 bg-emerald-500/10 p-4">
                  <p className="text-sm text-emerald-200">Aciertos</p>
                  <p className="mt-1 text-2xl font-semibold text-emerald-300">
                    {correctAnswersCount}
                  </p>
                </div>
                <div className="rounded-xl border border-rose-400/40 bg-rose-500/10 p-4">
                  <p className="text-sm text-rose-200">Errores</p>
                  <p className="mt-1 text-2xl font-semibold text-rose-300">
                    {incorrectAnswersCount}
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-mq-border bg-background/50 p-5 text-left">
                <p className="text-sm font-semibold text-mq-accent">
                  🎯 Recomendacion
                </p>
                <p className="mt-2 text-sm leading-relaxed text-mq-muted sm:text-base">
                  Debes reforzar temas de shock y antibioticos para mejorar tu
                  precision en escenarios de urgencias.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setCurrentQuestionIndex(0);
                  setAnswersByQuestionId({});
                  setCorrectAnswersCount(0);
                }}
                className="touch-manipulation mt-7 inline-flex min-h-14 items-center justify-center rounded-xl bg-mq-accent px-7 text-sm font-semibold text-mq-accent-foreground transition duration-150 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mq-accent sm:text-base"
              >
                Seguir entrenando
              </button>
            </article>
          </div>
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
                key={currentQuestion.id}
                question={currentQuestion.statement}
                options={currentQuestion.options}
                correctOptionId={currentQuestion.correctOptionId}
                explanation={currentQuestion.explanation}
                keyPoints={currentQuestion.keyPoints}
                onAnswerSelect={handleAnswerSelect}
              />
            </div>

            {hasNextQuestion ? (
              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() =>
                    setCurrentQuestionIndex((prev) =>
                      Math.min(prev + 1, demoQuestions.length - 1),
                    )
                  }
                  disabled={!hasAnsweredCurrentQuestion}
                  className="touch-manipulation inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-mq-accent px-6 text-sm font-semibold text-mq-accent-foreground transition duration-150 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mq-accent sm:w-auto sm:text-base"
                >
                  Siguiente pregunta
                </button>
              </div>
            ) : null}
          </div>
        )}
      </section>
    </main>
  );
}
