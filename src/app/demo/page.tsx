"use client";

import { onAuthStateChanged, type User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useRef, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  AttemptHistory,
  FinalResultsScreen,
  FreePlanPaywall,
  QuestionCard,
  type QuestionOption,
  Act2PredictiveDashboard
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
import { motion } from "framer-motion";
import { Zap, Target } from "lucide-react";
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
    topic: "Medicina Interna",
    statement:
      "Un paciente masculino de doce años es ingresado a la sala de reanimación por un cuadro clínico de veinticuatro horas de evolución consistente en poliuria masiva, polidipsia, episodios eméticos repetidos y deterioro progresivo del estado de alerta. Al examen físico, el paciente se encuentra somnoliento, presenta signos de deshidratación grado tres, respiración profunda y laboriosa, una frecuencia cardíaca de ciento treinta y cinco latidos por minuto y una presión arterial de noventa sobre cincuenta y cinco milímetros de mercurio. Los paraclínicos de ingreso reportan una glicemia de cuatrocientos cincuenta miligramos por decilitro, un pH venoso de siete punto cero cinco, bicarbonato sérico de ocho miliequivalentes por litro, cetonemia fuertemente positiva, sodio de ciento treinta y dos miliequivalentes por litro y potasio de tres punto cuatro miliequivalentes por litro. De acuerdo con las guías de práctica clínica consensuadas y actualizadas, ¿cuál es la intervención terapéutica primaria y prioritaria a instaurar durante la primera hora de atención hospitalaria?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar una infusión intravenosa de insulina regular a cero punto un unidades por kilogramo por hora de forma inmediata y administrar un bolo compensatorio de bicarbonato de sodio.",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar un bolo rápido de cristaloides isotónicos, preferiblemente solución salina al cero punto nueve por ciento, durante veinte a treinta minutos para restituir el volumen circulante.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar simultáneamente la infusión de insulina regular a cero punto cero cinco unidades por kilogramo por hora y reponer potasio a veinte miliequivalentes por litro.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar de manera urgente cristaloides hipotónicos, como solución salina al cero punto cuarenta y cinco por ciento, en bolo rápido para prevenir la hipernatremia.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "En el manejo de la cetoacidosis diabética (CAD), especialmente en pediatría, las guías establecen que la rehidratación inicial es la prioridad absoluta y debe instaurarse antes que la insulina. Se indica un bolo de expansión para restaurar la perfusión tisular y normalizar la filtración glomerular. Iniciar insulina simultáneamente con la expansión incrementa drásticamente el gradiente osmótico, principal factor del edema cerebral secundario, una complicación altamente letal.",
    keyPoints: [
      "Priorizar la rehidratación inicial con cristaloides isotónicos antes de la insulinoterapia.",
      "Evitar el uso rutinario de bicarbonato y el inicio simultáneo de insulina para prevenir el edema cerebral.",
      "Tema: Protocolos de manejo hídrico y electrolítico en CAD y prevención de edema cerebral.",
    ],
  },
  {
    id: "q2",
    topic: "Salud Pública",
    statement:
      "Una paciente femenina de veinticinco años, residente en un área urbana endémica en Colombia, acude a urgencias en su quinto día de enfermedad febril. La fiebre cedió hace doce horas, pero hoy inició con dolor abdominal generalizado, intenso y continuo. Al examen físico presenta FC 110 lpm, TA 100/70 mmHg, hepatomegalia a 3 cm del reborde costal y petequias en extremidades inferiores. ¿Cuál es la clasificación clínica exacta y el grupo de intervención institucional según los lineamientos del Ministerio de Salud?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Dengue grave (Grupo C), requiere remisión inmediata a UCI para soporte inotrópico.",
      },
      {
        id: "B",
        label: "B",
        text: "Dengue sin signos de alarma (Grupo A), manejo ambulatorio con hidratación oral estricta.",
      },
      {
        id: "C",
        label: "C",
        text: "Dengue con signos de alarma (Grupo B2), requiere hospitalización inmediata para hidratación endovenosa y monitoreo.",
      },
      {
        id: "D",
        label: "D",
        text: "Dengue sin signos de alarma con factores de riesgo (Grupo B1), requiere hospitalización preventiva por riesgo de sangrado.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "El caso describe la fase crítica del dengue tras la caída de la fiebre (defervescencia). El dolor abdominal intenso y la hepatomegalia >2cm son signos de alarma que indican extravasación de plasma inminente. Según el Ministerio de Salud y la OPS, la presencia de un solo signo de alarma clasifica el caso en el Grupo B2, obligando a hospitalización y reanimación con cristaloides IV para evitar la progresión al choque.",
    keyPoints: [
      "Identificar signos de alarma (dolor abdominal, hepatomegalia) en la fase crítica tras la caída de la fiebre.",
      "El Grupo B2 requiere hospitalización inmediata y reanimación con cristaloides IV.",
      "Tema: Clasificación de severidad del Dengue y fisiopatología de la extravasación plasmática.",
    ],
  },
  {
    id: "q3",
    topic: "Cirugía General",
    statement:
      "Paciente masculino de treinta y cuatro años ingresa por colisión en motocicleta. Se encuentra pálido, confuso, FC 130 lpm, TA 80/40 mmHg y FR 28 rpm. Se detecta inestabilidad mecánica del anillo pélvico (maniobra de compresión medial). El FAST es negativo para líquido libre abdominal. Siguiendo los principios de reanimación de control de daños y ATLS 11ª edición, ¿cuál es la intervención inmediata de mayor impacto en la sobrevida?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar una infusión rápida de 2000 ml de Lactato de Ringer calentado para normalizar la TA sistólica >110 mmHg.",
      },
      {
        id: "B",
        label: "B",
        text: "Trasladar inmediatamente a tomografía (TAC) con contraste para identificar el origen arterial del sangrado.",
      },
      {
        id: "C",
        label: "C",
        text: "Colocar faja pélvica a nivel de trocánteres mayores, activar protocolo de transfusión masiva y administrar ácido tranexámico.",
      },
      {
        id: "D",
        label: "D",
        text: "Preparar quirófano para laparotomía exploratoria de urgencia por sospecha de lesión vascular inadvertida.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "El paciente presenta choque hemorrágico grado III-IV por fractura pélvica inestable. Las directrices actuales (ATLS 11ª) priorizan el control mecánico con faja pélvica para reducir el volumen pélvico y facilitar el taponamiento del plexo venoso presacro. Se debe activar el protocolo de transfusión masiva y administrar ácido tranexámico temprano, evitando grandes volúmenes de cristaloides (hipotensión permisiva) para prevenir la coagulopatía.",
    keyPoints: [
      "El control mecánico con faja pélvica es prioritario en fracturas inestables de pelvis.",
      "Aplicar principios de reanimación de control de daños: ácido tranexámico y transfusión balanceada temprana.",
      "Tema: Hipotensión permisiva y abordaje mecánico de inestabilidad pélvica en ATLS 11ª.",
    ],
  },
  {
    id: "q4",
    topic: "Ginecología",
    statement:
      "Paciente de veintiocho años tras parto vaginal instrumentado. Inicia sangrado masivo, rojo rutilante. Presenta palidez severa, diaforesis, frialdad y estado mental confuso (FC 140 lpm, TA 75/40 mmHg). El útero se palpa por encima de la cicatriz umbilical, reblandecido y atónico. Según la estrategia 'Código Rojo', ¿cuál es el grado de choque y la conducta obligatoria en los primeros 20 minutos?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Choque moderado. Administrar 500 ml de cristaloides e iniciar goteo de oxitocina profiláctica.",
      },
      {
        id: "B",
        label: "B",
        text: "Choque severo. Garantizar dos accesos venosos, bolos de cristaloides calentados y transfusión inmediata de sangre O negativo o específica.",
      },
      {
        id: "C",
        label: "C",
        text: "Choque leve. Realizar masaje uterino bimanual, administrar misoprostol intrarrectal y observar diuresis.",
      },
      {
        id: "D",
        label: "D",
        text: "Choque severo. Traslado inmediato a quirófano para histerectomía de control de daños sin estabilización previa.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "La paciente presenta choque hipovolémico grado severo (>30-40% de volemia) por atonía uterina, evidenciado por compromiso de conciencia, taquicardia extrema e hipotensión. El protocolo Código Rojo exige en los primeros 20 minutos: acceso venoso múltiple, cristaloides calentados y transfusión urgente (sin esperar pruebas cruzadas si es necesario) para restaurar la capacidad de transporte de oxígeno.",
    keyPoints: [
      "El estado mental (confusión/agitación) es definitorio de choque severo en obstetricia.",
      "La transfusión inmediata es mandatoria en el choque severo dentro del protocolo Código Rojo.",
      "Tema: Clasificación de pérdida sanguínea y lineamientos de transfusión en Código Rojo.",
    ],
  },
  {
    id: "q5",
    topic: "Pediatría",
    statement:
      "Recién nacido a término (39 sem) con antecedente de RPM de 22 horas sin profilaxis antibiótica. A las 12 horas de vida presenta rechazo a la succión, temperatura de 37.8°C y letargia sutil. ¿Cuál es el enfoque diagnóstico y terapéutico más adecuado según la Guía de Práctica Clínica de Colombia?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Observación clínica estricta y diferir antibióticos por ser una alteración térmica leve sin dificultad respiratoria.",
      },
      {
        id: "B",
        label: "B",
        text: "Solicitar urocultivo, punción lumbar y hemograma, e iniciar monoterapia con cefotaxima.",
      },
      {
        id: "C",
        label: "C",
        text: "Toma inmediata de hemocultivos y comenzar antibioticoterapia empírica con ampicilina y gentamicina.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar antipiréticos y dar egreso hospitalario con signos de alarma estrictos para la madre.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Se trata de una sepsis neonatal temprana (antes de 72h) con factores de riesgo (RPM >18h) y síntomas clínicos (rechazo succión, letargia). La guía nacional ordena toma de hemocultivos e inicio inmediato de esquema empírico (Ampicilina + Aminoglucósido) para cubrir S. agalactiae y Gram negativos. La observación expectante solo aplica si el neonato está totalmente asintomático.",
    keyPoints: [
      "RPM >18h es un factor de riesgo mayor que obliga a intervención ante cualquier signo clínico.",
      "El esquema de primera línea en sepsis temprana es Ampicilina + Gentamicina.",
      "Tema: Estratificación de riesgo y antibioticoterapia en sepsis neonatal temprana.",
    ],
  },
  {
    id: "q6",
    topic: "Cirugía General",
    statement:
      "Paciente de setenta y ocho años con demencia vascular presenta dolor abdominal cólico, ausencia de flatos/heces y distensión masiva de 3 días. Abdomen timpánico sin irritación peritoneal; ampolla rectal vacía. La radiografía muestra el signo del 'grano de café' que emerge de la pelvis. ¿Cuál es el diagnóstico y la intervención primaria de elección?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Cáncer colorrectal oclusivo; requiere colostomía tipo Hartmann urgente.",
      },
      {
        id: "B",
        label: "B",
        text: "Vólvulo de sigmoides; requiere descompresión y devolvulación por colonoscopia o rectosigmoidoscopia.",
      },
      {
        id: "C",
        label: "C",
        text: "Vólvulo de ciego; requiere hemicolectomía derecha de extrema urgencia.",
      },
      {
        id: "D",
        label: "D",
        text: "Íleo paralítico severo; requiere sonda nasogástrica y procinéticos.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "El signo del 'grano de café' es patognomónico del vólvulo de sigmoides. Dado que no hay signos de peritonitis o isquemia, el estándar de cuidado inicial es la devolvulación endoscópica, que permite resolver la obstrucción de forma no operatoria. El vólvulo cecal suele proyectarse al cuadrante superior izquierdo y siempre requiere cirugía.",
    keyPoints: [
      "El signo del grano de café (asa en omega) identifica el vólvulo de sigmoides.",
      "La devolvulación endoscópica es el tratamiento de elección inicial si no hay compromiso isquémico.",
      "Tema: Diagnóstico diferencial radiológico y manejo de obstrucción intestinal colónica.",
    ],
  },
  {
    id: "q7",
    topic: "Toxicología",
    statement:
      "Hombre de cuarenta y cinco años con mordedura de serpiente Mapaná. Presenta edema masivo de toda la extremidad, sangrado activo por colmillos, hematuria y gingivorragia. Tiempos de coagulación incoagulables. ¿Cuál es el manejo específico indicado según el protocolo del INS?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Accidente micrúrico grave; aplicar dosis repetidas de suero antielapídico.",
      },
      {
        id: "B",
        label: "B",
        text: "Accidente botrópico grave; administrar dosis completa de suero antiofídico polivalente IV, sin ajuste por peso.",
      },
      {
        id: "C",
        label: "C",
        text: "Accidente botrópico leve; aplicar dos viales de suero antiofídico por vía intramuscular perilesional.",
      },
      {
        id: "D",
        label: "D",
        text: "Corregir coagulopatía con plasma fresco congelado y vitamina K antes de administrar el antiveneno.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "El accidente botrópico grave (vipéridos como Bothrops) causa edema proteolítico y coagulopatía de consumo sistémica. El tratamiento es la infusión IV urgente de suero antiofídico polivalente. La dosis se dicta por la gravedad clínica y NO se ajusta por peso (el veneno inoculado es independiente del tamaño del paciente). La vía IM es ineficaz y el plasma es inútil sin neutralizar primero las toxinas.",
    keyPoints: [
      "La dosis de suero antiofídico depende de la gravedad del envenenamiento, no del peso corporal.",
      "La vía intramuscular está proscrita; el antiveneno requiere distribución sistémica intravenosa.",
      "Tema: Fisiopatología del veneno botrópico y protocolos de dosificación del INS.",
    ],
  },
  {
    id: "q8",
    topic: "Ginecología",
    statement:
      "Gestante de 34 semanas con cefalea persistente, fosfenos e hiperreflexia rotuliana (+++/++++). TA 170/115 mmHg y proteinuria positiva. ¿Cuál es la estrategia de intervención dual inicial más apropiada según las guías para reducir la morbimortalidad?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Manejo expectante con reposo y líquidos endovenosos, difiriendo fármacos hasta tener laboratorios séricos.",
      },
      {
        id: "B",
        label: "B",
        text: "Infusión de sulfato de magnesio para neuroprotección y terapia antihipertensiva rápida (nifedipino o labetalol).",
      },
      {
        id: "C",
        label: "C",
        text: "Cesárea de emergencia inmediata sin estabilización previa para interrumpir la gestación.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar diazepam IV para prevenir convulsiones y enalapril oral para descenso tensional sostenido.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "El cuadro es una preeclampsia con criterios de severidad (hipertensión severa y síntomas de vasoespasmo). La prioridad es prevenir la eclampsia con sulfato de magnesio (estabilizador de membrana neuronal superior a benzodiacepinas) y controlar la crisis hipertensiva con fármacos seguros (nifedipino/labetalol). Los IECA están contraindicados por teratogenicidad y toxicidad renal fetal.",
    keyPoints: [
      "El sulfato de magnesio es el estándar de oro para prevenir convulsiones en preeclampsia severa.",
      "Se debe estabilizar la TA antes de cualquier intervención quirúrgica para evitar ACV.",
      "Tema: Diagnóstico y manejo farmacológico de trastornos hipertensivos del embarazo.",
    ],
  },
  {
    id: "q9",
    topic: "Pediatría",
    statement:
      "Niño de cinco años (Chocó) con fiebre de 40°C, ictericia y palidez profunda. Hemoglobina 6 g/dL y gota gruesa positiva para P. falciparum (parasitemia 8%). El paciente está letárgico y rechaza la vía oral. ¿Qué esquema debe instaurarse perentoriamente según el protocolo nacional?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Cloroquina oral por tres días más primaquina por catorce días.",
      },
      {
        id: "B",
        label: "B",
        text: "Artemeter y lumefantrina oral (terapia combinada) con manejo ambulatorio.",
      },
      {
        id: "C",
        label: "C",
        text: "Manejo intrahospitalario con terapia parenteral de primera línea (Artesunato IV).",
      },
      {
        id: "D",
        label: "D",
        text: "Monoterapia con sulfadoxina y pirimetamina para frenar la replicación parasitaria.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "La malaria por P. falciparum con hiperparasitemia (>5%), anemia severa y postración se clasifica como grave/complicada. El protocolo del Ministerio de Salud prioriza el uso de derivados de artemisinina parenterales (Artesunato IV) para depurar rápidamente el parásito. La cloroquina no se usa en falciparum por alta resistencia genética documentada en Colombia.",
    keyPoints: [
      "La malaria grave requiere hospitalización y tratamiento parenteral inmediato.",
      "El artesunato IV es el tratamiento de elección para malaria complicada en Colombia y por la OMS.",
      "Tema: Diferenciación de malaria grave y perfiles de resistencia de Plasmodium.",
    ],
  },
  {
    id: "q10",
    topic: "Cardiología",
    statement:
      "Hombre de 65 años con dolor torácico opresivo e irradiado de 45 min. EKG muestra elevación del ST de 3mm en V2-V4. Está en un centro de primer nivel sin hemodinamia y el traslado tardará >3 horas. ¿Cuál es la estrategia de reperfusión de elección?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Manejo médico conservador (AAS, clopidogrel, estatinas) y remisión no urgente a medicina interna.",
      },
      {
        id: "B",
        label: "B",
        text: "Omitir terapia agresiva y trasladar para angioplastia primaria pese a que el tiempo puerta-balón será >180 min.",
      },
      {
        id: "C",
        label: "C",
        text: "Administrar terapia fibrinolítica sistémica IV (alteplasa/estreptoquinasa) en los primeros 30 min y luego trasladar.",
      },
      {
        id: "D",
        label: "D",
        text: "Esperar confirmación de troponinas de alta sensibilidad antes de decidir sobre la trombólisis.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Ante un IAMCEST, si el tiempo puerta-balón estimado para angioplastia supera los 120 minutos, la guía clínica ordena fibrinólisis (puerta-aguja <30 min). El diagnóstico es clínico y eléctrico; esperar biomarcadores o retrasar la reperfusión por un traslado prolongado condena al miocardio a necrosis irreversible.",
    keyPoints: [
      "Fibrinólisis es la elección si la angioplastia no es posible en menos de 120 minutos.",
      "El tiempo es músculo: no se deben esperar troponinas para iniciar la reperfusión en IAMCEST.",
      "Tema: Algoritmos de reperfusión miocárdica y métricas de tiempo en urgencias.",
    ],
  },
];

function DemoContent() {
  const searchParams = useSearchParams();
  const source = searchParams.get("source");
  const urlUniversity = searchParams.get("university");
  const urlSpecialty = searchParams.get("specialty");
  const isAct1 = source === "act1";

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
  const [totalSeconds, setTotalSeconds] = useState(0);
  const hasTrackedFinishDemoRef = useRef(false);

  const effectivePlan = plan ?? "FREE";
  const isFreePlan = effectivePlan === "FREE";
  const hasUnlimitedAccess = effectivePlan === "PRO" || effectivePlan === "PRO_PLUS";
  const plannedQuestionCount = Math.min(10, demoQuestions.length);
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

  // Auto-start si viene de Act 1
  useEffect(() => {
    if (isAct1 && !hasStarted && !isLoadingPlan && !isCheckingAuth) {
      startAdaptiveSession();
    }
  }, [isAct1, hasStarted, isLoadingPlan, isCheckingAuth]);

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
    if (!hasStarted || isResultsStep) {
      return;
    }

    const interval = setInterval(() => {
      setTotalSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [hasStarted, isResultsStep]);

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
    setTotalSeconds(0);
    trackStartDemo({ userId: user?.uid });
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
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
                  <div className="flex items-center gap-4">
                    <p className="inline-flex min-h-10 items-center rounded-lg border border-mq-border-strong bg-white/[0.03] px-3 text-xs font-semibold text-mq-muted sm:text-sm">
                      Modo invitado
                    </p>
                    {hasStarted && !isResultsStep && (
                      <div className="flex items-center gap-2 rounded-lg border border-mq-accent/20 bg-mq-accent/5 px-3 py-1.5 text-sm font-bold text-mq-accent">
                        <span className="h-2 w-2 rounded-full bg-mq-accent animate-pulse" />
                        {formatTime(totalSeconds)}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </header>

        {!hasStarted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-12 flex flex-col items-center"
          >
            <div className="relative w-full max-w-2xl rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl shadow-[0_32px_120px_-20px_rgba(0,209,255,0.15)] sm:p-12 text-center overflow-hidden">
              {/* Decorative background glow */}
              <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-mq-accent/10 blur-[80px]" />
              <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-mq-accent/5 blur-[80px]" />

              <header className="relative z-10 flex flex-col items-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-mq-accent/30 bg-mq-accent/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-mq-accent sm:text-xs">
                  <span className="flex h-2 w-2 rounded-full bg-mq-accent animate-ping" />
                  Evaluación de Nivel Médico
                </div>
                
                <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {isAct1 
                    ? <>Diagnóstico <span className="text-red-500">Alta Presión</span></>
                    : <>Simulacro <span className="text-mq-accent">Diagnóstico</span></>
                  }
                </h1>
                
                <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-mq-muted sm:text-lg">
                  {isAct1
                    ? `Escenario real para ${urlSpecialty} en la ${urlUniversity}. 15 minutos que definirán tu futuro.`
                    : <>Mide tu capacidad real frente al examen de residencia con <span className="text-white font-semibold">10 casos clínicos de alta complejidad</span> en solo <span className="text-white font-semibold">5 minutos</span>.</>
                  }
                </p>
              </header>

              <div className="relative z-10 mt-12 grid gap-4 sm:grid-cols-2 text-left">
                <div className="group flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-all hover:bg-white/[0.06] hover:border-white/10">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mq-accent/10 text-mq-accent group-hover:scale-110 transition-transform">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Análisis en tiempo real</h3>
                    <p className="mt-1 text-xs leading-relaxed text-mq-muted">Retroalimentación inmediata basada en el método activo.</p>
                  </div>
                </div>
                
                <div className="group flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-all hover:bg-white/[0.06] hover:border-white/10">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
                    <Target className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Preguntas tipo examen</h3>
                    <p className="mt-1 text-xs leading-relaxed text-mq-muted">Contenido curado para medir tu capacidad de respuesta real.</p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-10 flex flex-col items-center gap-4">
                <button
                  type="button"
                  onClick={startAdaptiveSession}
                  className="group relative inline-flex h-16 w-full items-center justify-center overflow-hidden rounded-2xl bg-mq-accent px-8 text-lg font-bold text-mq-accent-foreground shadow-[0_0_40px_-10px_rgba(0,209,255,0.6)] transition-all hover:scale-[1.02] active:scale-[0.98] sm:w-auto sm:min-w-[300px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  Comenzar Evaluación Ahora
                </button>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-mq-muted/60">
                  10 preguntas • Sin registro • 100% gratuito
                </p>
              </div>
            </div>

            {/* Trust badge */}
            <p className="mt-8 text-center text-xs font-medium text-mq-muted/50">
              Únete a más de <span className="text-mq-accent/60">500 médicos</span> que han medido su nivel esta semana.
            </p>
          </motion.div>
        ) : isResultsStep ? (
          <>
            <FinalResultsScreen
              scorePercentage={scorePercentage}
              correctAnswers={correctAnswers}
              wrongAnswers={wrongAnswers}
              totalSeconds={totalSeconds}
              avgResponseTime={avgResponseTime}
              onRepeatDemo={() => {
                startAdaptiveSession();
              }}
              source={source}
              university={urlUniversity}
              specialty={urlSpecialty}
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
                  {isAct1 ? "EVALUACIÓN DE SUPERVIVENCIA" : "Pregunta"} {currentQuestionIndex + 1} de {totalQuestions}
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
                isLocked={isAct1 && currentQuestionIndex > 0}
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

export default function DemoPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center bg-[#0A1F44]">
        <p className="text-mq-accent animate-pulse font-bold tracking-widest uppercase">Cargando Diagnóstico...</p>
      </div>
    }>
      <DemoContent />
    </Suspense>
  );
}
