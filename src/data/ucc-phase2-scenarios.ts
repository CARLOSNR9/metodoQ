export type UccPhase2Competency =
  | "comunicacion"
  | "equipo"
  | "decisiones"
  | "conflictos";

export type UccInterviewScenario = {
  id: string;
  competency: UccPhase2Competency;
  competencyLabel: string;
  setting: string;
  prompt: string;
  options: Array<{
    id: string;
    text: string;
    score: number;
    feedback: string;
  }>;
  bestOptionId: string;
  debrief: string;
};

export type UccPsychometricItem = {
  id: string;
  stem: string;
  options: Array<{ id: string; text: string; score: number }>;
  bestOptionId: string;
  explanation: string;
};

export const UCC_PHASE2_COMPETENCY_LABELS: Record<UccPhase2Competency, string> = {
  comunicacion: "Habilidades comunicativas",
  equipo: "Trabajo en equipo",
  decisiones: "Toma de decisiones",
  conflictos: "Resolución de conflictos",
};

export const UCC_INTERVIEW_SCENARIOS: UccInterviewScenario[] = [
  {
    id: "int-01",
    competency: "comunicacion",
    competencyLabel: "Comunicación de malas noticias",
    setting: "UCI · Hospital San Pedro · Pasto",
    prompt:
      "Paciente masculino de 68 años con EPOC terminal, falla ventilatoria progresiva. La familia exige \"hacer todo\" aunque el paciente dejó instrucciones previas de no reintubar. ¿Cuál es tu aproximación inicial?",
    options: [
      {
        id: "A",
        text: "Explicar con empatía el pronóstico, explorar valores del paciente y proponer reunión familiar con enfoque de cuidados paliativos.",
        score: 100,
        feedback: "Comunicación clara, centrada en el paciente y alineada con ética.",
      },
      {
        id: "B",
        text: "Decir a la familia que la decisión es del médico tratante y evitar la conversación emocional.",
        score: 20,
        feedback: "Autoritarismo sin exploración de valores; baja puntuación en entrevista UCC.",
      },
      {
        id: "C",
        text: "Reintubar de inmediato para evitar conflicto con la familia.",
        score: 10,
        feedback: "Ignora voluntad anticipada y no resuelve el dilema ético.",
      },
      {
        id: "D",
        text: "Derivar la conversación al psicólogo sin hablar con la familia.",
        score: 40,
        feedback: "Evita el rol del médico internista en comunicación de malas noticias.",
      },
    ],
    bestOptionId: "A",
    debrief:
      "El panel UCC valora empatía, claridad y alineación con autonomía del paciente. Practica el protocolo SPIKES.",
  },
  {
    id: "int-02",
    competency: "equipo",
    competencyLabel: "Trabajo interprofesional",
    setting: "Turno nocturno · Urgencias",
    prompt:
      "Enfermería reporta que el interno de cirugía ordenó antibiótico sin cultivo en un paciente con fiebre y neutropenia. El interno está en otro piso y no responde. ¿Qué haces?",
    options: [
      {
        id: "A",
        text: "Revisar al paciente, contactar al interno y al jefe de turno, y ajustar manejo según protocolo de neutropenia febril.",
        score: 100,
        feedback: "Colaboración activa, seguridad del paciente y comunicación ascendente.",
      },
      {
        id: "B",
        text: "Anular la orden sin consultar para demostrar autoridad clínica.",
        score: 15,
        feedback: "Rompe trabajo en equipo y genera conflicto innecesario.",
      },
      {
        id: "C",
        text: "Ignorar el reporte de enfermería porque no es tu paciente.",
        score: 0,
        feedback: "Abandono de responsabilidad compartida.",
      },
      {
        id: "D",
        text: "Esperar al día siguiente para discutirlo en la ronda.",
        score: 25,
        feedback: "Retraso inaceptable en neutropenia febril.",
      },
    ],
    bestOptionId: "A",
    debrief:
      "UCC valora liderazgo colaborativo. Enfermería es aliada, no subordinada.",
  },
  {
    id: "int-03",
    competency: "decisiones",
    competencyLabel: "Priorización clínica",
    setting: "Sala de urgencias saturada",
    prompt:
      "Llegan simultáneamente: (1) mujer 45 años con dolor torácico y DT elevado; (2) hombre 25 años con herida cortante en mano; (3) adulto mayor con FC 40 lpm y síncope. Solo hay un médico disponible. ¿A quién atiendes primero?",
    options: [
      {
        id: "A",
        text: "Mujer con dolor torácico y marcadores elevados — sospecha de SCA.",
        score: 100,
        feedback: "Priorización por riesgo de muerte inminente.",
      },
      {
        id: "B",
        text: "Herida en mano — es el caso más rápido de resolver.",
        score: 10,
        feedback: "Triage por conveniencia, no por gravedad.",
      },
      {
        id: "C",
        text: "Adulto mayor bradicárdico — atender por orden de llegada.",
        score: 60,
        feedback: "El síncope es urgente, pero el SCA tiene mayor mortalidad inmediata.",
      },
      {
        id: "D",
        text: "Atender a los tres en paralelo sin triage formal.",
        score: 20,
        feedback: "Falta estructura de pensamiento bajo presión.",
      },
    ],
    bestOptionId: "A",
    debrief:
      "El panel evalúa tu capacidad de priorizar con criterio clínico, no de velocidad.",
  },
  {
    id: "int-04",
    competency: "conflictos",
    competencyLabel: "Manejo de conflictos",
    setting: "Sala de espera · Familiares agitados",
    prompt:
      "Familiares de un paciente fallecido en UCI confrontan al personal porque \"no les avisaron a tiempo\". El ambiente es tenso y hay gritos. ¿Cuál es tu respuesta?",
    options: [
      {
        id: "A",
        text: "Bajar el tono, escuchar sin interrumpir, validar emociones y ofrecer espacio privado para explicar la cronología.",
        score: 100,
        feedback: "Resiliencia, empatía y manejo no escalatorio.",
      },
      {
        id: "B",
        text: "Llamar a seguridad de inmediato sin hablar con la familia.",
        score: 30,
        feedback: "Puede ser necesario después, pero no como primer paso.",
      },
      {
        id: "C",
        text: "Responder con el mismo tono para imponer respeto.",
        score: 0,
        feedback: "Escalada del conflicto — evaluación negativa segura.",
      },
      {
        id: "D",
        text: "Retirarte del área para evitar el estrés.",
        score: 10,
        feedback: "Evitación; el residente debe liderar la contención inicial.",
      },
    ],
    bestOptionId: "A",
    debrief:
      "Res. 108 valora respuestas adaptativas al estrés y comunicación con familiares.",
  },
  {
    id: "int-05",
    competency: "decisiones",
    competencyLabel: "Burnout y autocuidado",
    setting: "Semana 8 de residencia · 66 h/semana",
    prompt:
      "Llevas 5 noches seguidas de guardia y cometes un error de dosificación que no causa daño (detectado a tiempo). ¿Cómo lo manejas?",
    options: [
      {
        id: "A",
        text: "Reportar el incidente, notificar al supervisor, revisar protocolo y activar estrategias de descanso.",
        score: 100,
        feedback: "Honestidad, seguridad del paciente y conciencia de fatiga.",
      },
      {
        id: "B",
        text: "No decir nada porque no hubo daño.",
        score: 5,
        feedback: "Ocultamiento de error — grave en evaluación ética.",
      },
      {
        id: "C",
        text: "Renunciar verbalmente en el turno sin protocolo.",
        score: 15,
        feedback: "Impulsividad sin manejo constructivo del estrés.",
      },
      {
        id: "D",
        text: "Culpar al sistema informático y continuar sin pausa.",
        score: 20,
        feedback: "No hay aprendizaje ni autocuidado.",
      },
    ],
    bestOptionId: "A",
    debrief:
      "La residencia UCC exige 66 h/semana; el panel busca resiliencia con responsabilidad.",
  },
  {
    id: "int-06",
    competency: "comunicacion",
    competencyLabel: "Liderazgo en ronda",
    setting: "Ronda de Medicina Interna",
    prompt:
      "Durante la presentación de un caso complejo, el especialista te interrumpe dos veces señalando errores menores. ¿Cómo respondes?",
    options: [
      {
        id: "A",
        text: "Agradecer la corrección, retomar la presentación con estructura SOAP y pedir feedback al cierre.",
        score: 100,
        feedback: "Humildad académica y comunicación profesional.",
      },
      {
        id: "B",
        text: "Interrumpir al especialista para defender tu honor.",
        score: 10,
        feedback: "Falta de madurez profesional.",
      },
      {
        id: "C",
        text: "Abandonar la presentación y pedir que la haga otro.",
        score: 15,
        feedback: "Evitación; no demuestra liderazgo.",
      },
      {
        id: "D",
        text: "Ignorar las correcciones y continuar igual.",
        score: 25,
        feedback: "Cierra la comunicación bidireccional.",
      },
    ],
    bestOptionId: "A",
    debrief:
      "Comunicación asertiva sin agresividad — clave en entrevista multidisciplinaria UCC.",
  },
];

export const UCC_PSYCHOMETRIC_ITEMS: UccPsychometricItem[] = [
  {
    id: "psy-01",
    stem: "Prefiero tomar decisiones clínicas solo(a) antes que consultar al equipo.",
    options: [
      { id: "A", text: "Totalmente de acuerdo", score: 0 },
      { id: "B", text: "De acuerdo", score: 25 },
      { id: "C", text: "En desacuerdo", score: 75 },
      { id: "D", text: "Totalmente en desacuerdo", score: 100 },
    ],
    bestOptionId: "D",
    explanation: "La residencia UCC enfatiza trabajo interprofesional.",
  },
  {
    id: "psy-02",
    stem: "Ante múltiples tareas urgentes, tiendo a paralizarme antes de priorizar.",
    options: [
      { id: "A", text: "Totalmente de acuerdo", score: 0 },
      { id: "B", text: "De acuerdo", score: 20 },
      { id: "C", text: "En desacuerdo", score: 80 },
      { id: "D", text: "Totalmente en desacuerdo", score: 100 },
    ],
    bestOptionId: "D",
    explanation: "El panel busca estructuración bajo presión.",
  },
  {
    id: "psy-03",
    stem: "Me resulta cómodo comunicar malas noticias a familiares con empatía y datos claros.",
    options: [
      { id: "A", text: "Totalmente de acuerdo", score: 100 },
      { id: "B", text: "De acuerdo", score: 75 },
      { id: "C", text: "En desacuerdo", score: 25 },
      { id: "D", text: "Totalmente en desacuerdo", score: 0 },
    ],
    bestOptionId: "A",
    explanation: "Competencia comunicativa central en Fase II.",
  },
  {
    id: "psy-04",
    stem: "Cuando un colega comete un error, lo reporto primero en privado antes de escalar.",
    options: [
      { id: "A", text: "Totalmente de acuerdo", score: 80 },
      { id: "B", text: "De acuerdo", score: 100 },
      { id: "C", text: "En desacuerdo", score: 30 },
      { id: "D", text: "Totalmente en desacuerdo", score: 0 },
    ],
    bestOptionId: "B",
    explanation: "Resolución constructiva de conflictos.",
  },
  {
    id: "psy-05",
    stem: "Bajo estrés prolongado (guardias consecutivas), reconozco cuando necesito apoyo.",
    options: [
      { id: "A", text: "Totalmente de acuerdo", score: 100 },
      { id: "B", text: "De acuerdo", score: 75 },
      { id: "C", text: "En desacuerdo", score: 20 },
      { id: "D", text: "Totalmente en desacuerdo", score: 0 },
    ],
    bestOptionId: "A",
    explanation: "Autocuidado y resiliencia — crítico en jornada de 66 h/semana.",
  },
  {
    id: "psy-06",
    stem: "En situaciones ambiguas clínicas, documento mi razonamiento antes de actuar.",
    options: [
      { id: "A", text: "Totalmente de acuerdo", score: 100 },
      { id: "B", text: "De acuerdo", score: 80 },
      { id: "C", text: "En desacuerdo", score: 25 },
      { id: "D", text: "Totalmente en desacuerdo", score: 0 },
    ],
    bestOptionId: "A",
    explanation: "Toma de decisiones fundamentada — competencia evaluada en entrevista.",
  },
];

export function scoreInterviewAnswer(
  scenario: UccInterviewScenario,
  optionId: string,
): number {
  const option = scenario.options.find((o) => o.id === optionId);
  return option?.score ?? 0;
}

export function scorePsychometricAnswer(item: UccPsychometricItem, optionId: string): number {
  const option = item.options.find((o) => o.id === optionId);
  return option?.score ?? 0;
}

export function averageScores(scores: number[]): number {
  if (scores.length === 0) return 0;
  return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
}
