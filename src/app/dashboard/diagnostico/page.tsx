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
    topic: "Medicina Interna - Cardiología / Guías de Práctica Clínica y Farmacología Cardiovascular.",
    statement:
      "Un paciente masculino de 68 años acude a consulta externa de medicina interna refiriendo un cuadro de seis meses de evolución consistente en disnea de esfuerzo progresiva que actualmente lo limita para caminar dos cuadras en terreno plano, asociada a edema vespertino de miembros inferiores y ortopnea de dos almohadas. Dentro de sus antecedentes médicos de importancia, destaca hipertensión arterial sistémica de 15 años de evolución con pobre adherencia al tratamiento y obesidad grado I (IMC 31.5 kg/m²). Al examen físico, la presión arterial se encuentra en 145/90 mmHg, la frecuencia cardíaca es de 88 latidos por minuto con un ritmo francamente irregular, compatible con una fibrilación auricular previamente conocida. Se auscultan estertores crepitantes finos en las bases de ambos campos pulmonares y se palpa hepatomegalia leve. Se solicita un ecocardiograma transtorácico que reporta una Fracción de Eyección del Ventrículo Izquierdo (FEVI) del 55%, hipertrofia concéntrica severa del ventrículo izquierdo, dilatación de la aurícula izquierda y evidencia de aumento en las presiones de llenado ventricular. Sus niveles séricos de NT-proBNP se reportan en 1250 pg/mL (marcadamente elevados). Integrando estos hallazgos, usted establece el diagnóstico definitivo de Insuficiencia Cardíaca con Fracción de Eyección Preservada (ICFep) apoyándose en la escala H2FPEF. Teniendo en cuenta el Consenso de Expertos de la Sociedad Colombiana de Cardiología y las directrices internacionales más recientes (ESC 2023), ¿cuál de los siguientes grupos farmacológicos cuenta con recomendación Clase I y Nivel de Evidencia A para reducir de forma significativa las hospitalizaciones por descompensación y la mortalidad cardiovascular en este espectro fenotípico específico de la enfermedad?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Inhibidores de la Enzima Convertidora de Angiotensina (IECA - Enalapril).",
      },
      {
        id: "B",
        label: "B",
        text: "Inhibidores del receptor de angiotensina-neprilisina (ARNI - Sacubitrilo/Valsartán).",
      },
      {
        id: "C",
        label: "C",
        text: "Antagonistas del Receptor de Mineralocorticoides (ARM - Espironolactona).",
      },
      {
        id: "D",
        label: "D",
        text: "Inhibidores del cotransportador sodio-glucosa tipo 2 (iSGLT2 - Dapagliflozina / Empagliflozina).",
      },
    ],
    correctOptionId: "D",
    explanation:
      "La respuesta correcta es la D. Históricamente, la insuficiencia cardíaca con fracción de eyección preservada (ICFep) ha representado un desafío monumental, considerándose una condición huérfana de terapia modificadora del pronóstico. Durante décadas, los tratamientos se limitaron al control de síntomas con diuréticos de asa. Sin embargo, estudios pivotales recientes de gran envergadura (específicamente los ensayos EMPEROR-Preserved con Empagliflozina y DELIVER con Dapagliflozina) demostraron de forma inequívoca que los inhibidores del SGLT2 reducen significativamente el compuesto de hospitalizaciones por falla cardíaca y muerte cardiovascular a lo largo de todo el espectro de la fracción de eyección, independientemente de la presencia o ausencia de diabetes concurrente. Con base en esta robusta evidencia, el Consenso Colombiano establece explícitamente que los iSGLT2 son el único grupo farmacológico que ostenta una recomendación Clase I, Nivel A para el tratamiento de pacientes con ICFep e ICFelr (fracción de eyección ligeramente reducida).",
    keyPoints: [
      "Los iSGLT2 son el único grupo farmacológico que ostenta recomendación Clase I, Nivel A para ICFep.",
      "El diagnóstico del paciente se sustentó rigurosamente en la escala H2FPEF.",
      "Tema: Medicina Interna - Cardiología / Guías de Práctica Clínica y Farmacología Cardiovascular.",
    ],
  },
  {
    id: "q2",
    topic: "Medicina Interna - Endocrinología y Metabolismo / Farmacoterapéutica Avanzada.",
    statement:
      "Una paciente femenina de 52 años de edad asiste a su control trimestral rutinario en el programa institucional de riesgo cardiovascular. Fue diagnosticada con Diabetes Mellitus tipo 2 hace exactamente dos años. Actualmente, se encuentra recibiendo monoterapia con Metformina, habiendo alcanzado la dosis máxima tolerada por la paciente de 2000 mg al día, sin presentar intolerancia gastrointestinal. A pesar de reportar una adecuada adherencia farmacológica e intentos repetidos por modificar sus hábitos dietéticos, los paraclínicos de control tomados hace una semana revelan una Hemoglobina Glicosilada (HbA1c) del 8.4%. Al realizar el examen físico, los signos vitales evidencian una tensión arterial de 130/80 mmHg y se documenta un Índice de Masa Corporal (IMC) de 33 kg/m², clasificándola en el rango de obesidad grado I. La paciente no presenta antecedentes personales de enfermedad cardiovascular aterosclerótica establecida, no tiene antecedentes de falla cardíaca ni evidencia de nefropatía diabética instaurada. Con base en la actualización de la Guía de Práctica Clínica para el Tratamiento y Seguimiento de la Diabetes Mellitus Tipo 2 de la Asociación Colombiana de Endocrinología, Diabetes y Metabolismo (ACE 2025), ¿cuál es la conducta terapéutica farmacológica más apropiada a adicionar al esquema actual para lograr las metas de control glucémico y ponderal?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Adicionar una Sulfonilurea de segunda generación (ej. Gliclazida o Glibenclamida).",
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar insulinoterapia mediante la adición de un análogo de insulina basal de acción prolongada en horario nocturno.",
      },
      {
        id: "C",
        label: "C",
        text: "Adicionar un agonista del receptor del péptido similar al glucagón tipo 1 (AR GLP-1).",
      },
      {
        id: "D",
        label: "D",
        text: "Adicionar un inhibidor de la enzima dipeptidil peptidasa-4 (iDPP-4).",
      },
    ],
    correctOptionId: "C",
    explanation:
      "La respuesta correcta es la C. El manejo contemporáneo de la diabetes ha evolucionado desde un enfoque glucocéntrico exclusivo hacia un enfoque holístico que prioriza la protección de órganos diana y el control del peso corporal. De acuerdo con la reciente y exhaustiva actualización de la Asociación Colombiana de Endocrinología (ACE 2025), en aquellos pacientes que no logran alcanzar las metas glucémicas individualizadas con Metformina en monoterapia y que simultáneamente presentan un IMC indicativo de sobrepeso u obesidad (definido como un IMC >27 kg/m²), la adición de un agonista del receptor GLP-1 (AR GLP-1) constituye el siguiente paso terapéutico preferido y fuertemente recomendado. Medicamentos pertenecientes a esta clase no solo ofrecen una potente reducción de los niveles de HbA1c, sino que inducen una pérdida de peso sustancial.",
    keyPoints: [
      "El enfoque de la diabetes ha evolucionado a priorizar la protección de órganos y control de peso.",
      "La adición de AR GLP-1 es preferida en pacientes con sobrepeso/obesidad para reducir HbA1c y peso.",
      "Las guías actuales desaconsejan las sulfonilureas por riesgo de hipoglucemia y ganancia de peso.",
    ],
  },
  {
    id: "q3",
    topic: "Medicina Interna - Neumología / Terapia Respiratoria Inhalada.",
    statement:
      "Un paciente masculino de 71 años de edad, exfumador severo con un índice tabáquico calculado de 45 paquetes/año (cesación del hábito hace 3 años), cursa con un diagnóstico confirmado espirométricamente de Enfermedad Pulmonar Obstructiva Crónica (EPOC). Durante el interrogatorio en la consulta externa, el paciente refiere que durante los últimos doce meses ha presentado un deterioro clínico caracterizado por tres (3) exacerbaciones agudas de su cuadro respiratorio. Dos de estos eventos requirieron manejo ambulatorio intensivo con ciclos de corticosteroides sistémicos orales y antibióticos, mientras que el tercer evento fue de mayor severidad y ameritó hospitalización en sala general de medicina interna durante cinco días por insuficiencia respiratoria aguda sin requerimiento de ventilación mecánica. Actualmente, en fase de estabilidad clínica, refiere disnea que lo obliga a detenerse al caminar a su propio paso en terreno plano (escala mMRC grado 2). Al revisar los laboratorios recientes, se observa un recuento de eosinófilos en sangre periférica de 120 células/microL. Basado estrictamente en la adaptación colombiana (2023) del consenso de la Iniciativa Global para la Enfermedad Pulmonar Obstructiva Crónica (GOLD) y la Asociación Latinoamericana de Tórax (ALAT), ¿cuál de los siguientes esquemas farmacológicos de mantenimiento es el pilar inicial indicado para modificar sustancialmente el curso de las exacerbaciones futuras en este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Monoterapia continua con un antagonista muscarínico de acción prolongada (LAMA).",
      },
      {
        id: "B",
        label: "B",
        text: "Terapia dual broncodilatadora combinada: beta-agonista de acción prolongada y antagonista muscarínico de acción prolongada (LABA/LAMA).",
      },
      {
        id: "C",
        label: "C",
        text: "Terapia dual con un corticosteroide inhalado y un beta-agonista de acción prolongada (ICS/LABA).",
      },
      {
        id: "D",
        label: "D",
        text: "Terapia triple inhalada en un solo dispositivo: Corticosteroide inhalado, LABA y LAMA (ICS/LABA/LAMA).",
      },
    ],
    correctOptionId: "B",
    explanation:
      "La respuesta correcta es la B. La evaluación y clasificación de la EPOC ha experimentado una transformación paradigmática en los últimos años. Este paciente pertenece indudablemente al Grupo E (paciente exacerbador frecuente). La evidencia internacional dicta que la terapia inicial obligatoria para este grupo es la combinación de doble broncodilatación (LABA/LAMA). Esta potente combinación ha demostrado tener un impacto contundente en la reducción del riesgo de futuras exacerbaciones. No se justifica uso de corticosteroides inhalados porque sus eosinófilos son menores a 300.",
    keyPoints: [
      "Pacientes exacerbadores frecuentes (Grupo E) inician con terapia dual (LABA/LAMA).",
      "Los ICS quedan reservados para pacientes con fenotipo mixto asma-EPOC o eosinofilia > 300.",
      "Tema: Guías de EPOC GOLD/ALAT (2023).",
    ],
  },
  {
    id: "q4",
    topic: "Infectología / Epidemiología, Legislación y Salud Pública Colombiana.",
    statement:
      "Usted se encuentra ejerciendo como médico rural de servicio social obligatorio en un centro de atención primaria adscrito a una secretaría municipal de salud en Colombia. Durante sus labores, el equipo de epidemiología de la institución identifica un caso índice alarmante: un paciente masculino de 35 años con diagnóstico reciente de Tuberculosis Pulmonar (TB) activa, bacilífera. Las pruebas moleculares de amplificación de ácidos nucleicos (GeneXpert MTB/RIF) y las posteriores pruebas fenotípicas de sensibilidad en cultivo líquido confirman de manera definitiva que se trata de una cepa del Mycobacterium tuberculosis con resistencia genética demostrada y simultánea a Isoniacida y Rifampicina (configurando el diagnóstico de Tuberculosis Multidrogorresistente - TB MDR). Ante esta emergencia de salud pública local, se inicia de inmediato el protocolo de vigilancia epidemiológica de campo, identificando a cuatro contactos intradomiciliarios estrechos. De acuerdo con los lineamientos técnicos del Ministerio de Salud y Protección Social de Colombia (establecidos en la Circular 001 de 2013 y reforzados por resoluciones normativas del año 2023), ¿cuál es la periodicidad temporal reglamentaria y obligatoria para el seguimiento clínico y epidemiológico de estos contactos asintomáticos del paciente con TB farmacorresistente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Valoración clínica y baciloscópica mensual y obligatoria hasta que el paciente índice demuestre negativización.",
      },
      {
        id: "B",
        label: "B",
        text: "Visitas de vigilancia domiciliaria cada tres (3) meses de manera ininterrumpida hasta terminar el tratamiento del caso índice, y posteriormente, visitas de seguimiento cada seis (6) meses hasta completar un periodo de dos (2) años post-tratamiento.",
      },
      {
        id: "C",
        label: "C",
        text: "Valoración inicial única con aplicación de prueba cutánea de tuberculina (PPD) o ensayo de liberación de interferón gamma (IGRA); si el resultado es negativo, se descarta el riesgo.",
      },
      {
        id: "D",
        label: "D",
        text: "Visitas de vigilancia domiciliaria espaciadas cada seis (6) meses de forma constante durante los dos primeros años contabilizados a partir de la fecha de diagnóstico.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "La respuesta correcta es la B. La tuberculosis farmacorresistente, y particularmente la cepa MDR, constituye un problema de salud pública de dimensiones críticas. Según el Ministerio de Salud de Colombia, la norma exige que el seguimiento de los contactos domiciliarios de pacientes con TB farmacorresistente se debe repetir obligatoriamente en visitas sistemáticas cada tres (3) meses mientras el caso índice se encuentre recibiendo tratamiento. Una vez curado, los contactos deben continuar bajo vigilancia cada seis (6) meses hasta completar dos (2) años post-tratamiento.",
    keyPoints: [
      "Seguimiento de contactos asintomáticos de TB MDR es trimestral durante tratamiento del caso índice.",
      "Posteriormente debe ser semestral por 2 años.",
      "Tema: Vigilancia epidemiológica de campo, Circular 001/2013 de MinSalud Colombia.",
    ],
  },
  {
    id: "q5",
    topic: "Infectología / Farmacología Clínica y Políticas Ministeriales.",
    statement:
      "Un paciente adulto joven de 28 años, previamente sano, es diagnosticado con infección por el Virus de Inmunodeficiencia Humana (VIH) tipo 1 a raíz de una prueba rápida reactiva durante una jornada universitaria de tamizaje en salud sexual, diagnóstico posteriormente confirmado con las pruebas biológicas de rigor. En su evaluación médica inicial, el paciente se encuentra completamente asintomático, sin signos de infecciones oportunistas. Sus laboratorios de estadificación reportan un conteo de subpoblación de linfocitos T CD4+ de 450 células/mm³ y una carga viral plasmática de 85,000 copias/mL. Su función renal y hepática (creatinina, transaminasas y bilirrubinas) son estrictamente normales, su genotipificación demuestra que no porta el alelo HLA-B*5701, y se ha descartado co-infección con los virus de la Hepatitis B o C. Al estructurar y prescribir el esquema de Terapia Antirretroviral (TARV) altamente activa de primera línea, usted, como médico tratante, debe tomar en consideración no solo la eficacia clínica, sino las políticas de salud pública recientes implementadas por el Ministerio de Salud y Protección Social de Colombia (específicamente la Resolución 881 de 2023), enfocadas en la declaración de interés público y la equidad en el acceso a terapias de última generación. Basado en estos lineamientos nacionales apoyados por ONUSIDA, ¿qué fármaco inhibidor de la integrasa representa el núcleo (ancla) preferido, estandarizado y de elección imperativa en el esquema de inicio para este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Efavirenz.",
      },
      {
        id: "B",
        label: "B",
        text: "Raltegravir.",
      },
      {
        id: "C",
        label: "C",
        text: "Dolutegravir.",
      },
      {
        id: "D",
        label: "D",
        text: "Lopinavir potenciado con Ritonavir (Lopinavir/r).",
      },
    ],
    correctOptionId: "C",
    explanation:
      "La respuesta correcta es la C. El manejo farmacológico del VIH ha experimentado una revolución biotecnológica. El Dolutegravir es un inhibidor de la transferencia de hebras de la integrasa (INSTI) de segunda generación con alta barrera genética y baja toxicidad. El gobierno colombiano, a través de la Resolución 881 del año 2023, declaró oficialmente el acceso al Dolutegravir como un asunto de 'interés público' nacional, asegurando que se convierta en la columna vertebral estandarizada y de primera línea para pacientes iniciando TARV.",
    keyPoints: [
      "Dolutegravir es el pilar de primera línea para el inicio de terapia antirretroviral en Colombia.",
      "Resolución 881 de 2023 declaró Dolutegravir de interés público.",
      "Efavirenz y esquemas con lopinavir/r se consideran superados por perfiles de toxicidad.",
    ],
  },
  {
    id: "q6",
    topic: "Medicina Interna - Neurología Clínica / Terapia Neurocrítica.",
    statement:
      "En el servicio de urgencias de un hospital de tercer nivel en la ciudad de Bogotá, es ingresado y evaluado rápidamente un paciente masculino de 62 años de edad que presenta un cuadro neurológico focal de instauración súbita, caracterizado por hemiparesia derecha densa, parálisis facial central derecha y afasia de expresión (motora), con un tiempo de evolución reportado por los familiares de apenas 45 minutos. Al llegar al cubículo de reanimación, los signos vitales evidencian hipertensión (160/95 mmHg) pero estabilidad hemodinámica, y la glucometría capilar inmediata reporta 110 mg/dL (descartando hipoglucemia como simulador). Ante la alta sospecha clínica, se activa de inmediato el protocolo de 'Código Ictus' institucional para el abordaje de una probable Enfermedad Cerebrovascular Isquémica aguda. El médico residente de Medicina Interna de la Universidad Nacional se dispone a realizar un examen neurológico estandarizado y cuantitativo que permita medir objetivamente la severidad actual de los déficits neurológicos del paciente, determinar un pronóstico funcional inicial a corto plazo y servir como parámetro validado internacionalmente de inclusión o exclusión para la toma de decisiones sobre una eventual terapia de reperfusión trombolítica endovenosa. De las siguientes opciones, ¿cuál es la escala clínica estructurada que cumple con estas características metodológicas y debe ser aplicada de inmediato en este escenario agudo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Escala de ABCD2.",
      },
      {
        id: "B",
        label: "B",
        text: "Escala de evaluación prehospitalaria FAST.",
      },
      {
        id: "C",
        label: "C",
        text: "Escala del Instituto Nacional de Salud para el Accidente Cerebrovascular (NIHSS).",
      },
      {
        id: "D",
        label: "D",
        text: "Escala tomográfica ASPECTS (Alberta Stroke Program Early CT Score).",
      },
    ],
    correctOptionId: "C",
    explanation:
      "La respuesta correcta es la C. La escala NIHSS (National Institutes of Health Stroke Scale) es universalmente considerada el estándar de oro en la evaluación clínica neurológica aguda para cuantificar la severidad de los déficits producidos por un Evento Cerebrovascular (EVC) isquémico. Su cálculo es absolutamente determinante para la toma de decisiones respecto a terapias de reperfusión o trombectomía mecánica. Las demás opciones, como ABCD2 y FAST, tienen utilidades distintas o prehospitalarias, y ASPECTS es netamente imagenológica.",
    keyPoints: [
      "La escala NIHSS cuantifica objetivamente el déficit neurológico e informa decisiones trombolíticas.",
      "ABCD2 es probabilística para predecir riesgo futuro de ACV tras un AIT.",
      "ASPECTS es una puntuación radiológica topográfica sobre la TC de cráneo.",
    ],
  },
  {
    id: "q7",
    topic: "Ciencias Básicas Aplicadas / Fisiología Gastrointestinal y Bioquímica.",
    statement:
      "Durante la revista médica académica de la sala de hospitalización en el Hospital Universitario Nacional, el médico especialista a cargo discute el caso clínico de un paciente joven de 22 años con antecedente genético documentado de esferocitosis hereditaria. Actualmente, el paciente cursa con una severa crisis hemolítica aguda de origen esplénico, lo cual se encuentra evidenciado objetivamente por un hemograma que muestra una anemia normocítica severa, una médula ósea hiperactiva con reticulocitosis periférica masiva y una evidente ictericia generalizada en piel y escleras. Usted toma la palabra para explicar a los estudiantes de pregrado allí presentes que, como producto directo y proporcional a la lisis eritrocitaria masiva que ocurre en el seno del sistema reticuloendotelial, se está generando una sobreproducción dramática de un metabolito pirrólico insoluble que es el causante directo de la ictericia tisular del paciente. Teniendo en consideración la intrincada farmacocinética, la naturaleza lipofílica y la estructura bioquímica de las diversas macromoléculas orgánicas implicadas en la biología humana, ¿cuál de los siguientes enunciados describe de forma fisiológicamente correcta y precisa el mecanismo de transporte de la molécula de bilirrubina recién formada desde su sitio de origen en el lecho esplénico, a través de la circulación sistémica, hasta lograr su ingreso al hepatocito para su procesamiento enzimático?",
    options: [
      {
        id: "A",
        label: "A",
        text: "La molécula se transporta como bilirrubina conjugada (bilirrubina directa), dado que tras la lisis celular adquiere propiedades altamente hidrosolubles...",
      },
      {
        id: "B",
        label: "B",
        text: "La molécula se transporta en su conformación de bilirrubina no conjugada (bilirrubina indirecta), que por su naturaleza química altamente liposoluble, requiere unirse de forma fuerte y covalente a la albúmina plasmática para evitar su precipitación tisular.",
      },
      {
        id: "C",
        label: "C",
        text: "La molécula viaja inalterada en la forma oxidada de biliverdina unida a la glucoproteína transferrina...",
      },
      {
        id: "D",
        label: "D",
        text: "La molécula se transporta obligatoriamente como bilirrubina conjugada a través de todo el sistema de la vena porta, mediado de forma activa por la interacción con quilomicrones intestinales...",
      },
    ],
    correctOptionId: "B",
    explanation:
      "La respuesta correcta es la B. Tras la degradación del grupo hemo en el sistema reticuloendotelial esplénico, el anillo porfirínico se convierte inicialmente en biliverdina y luego se reduce a bilirrubina no conjugada. Esta es inherentemente lipofílica (liposoluble) y carece de polaridad hídrica, por lo que requiere acoplarse y viajar obligatoriamente junto a una proteína transportadora de gran capacidad, específicamente la albúmina sérica, a través del torrente circulatorio hasta alcanzar los hepatocitos para su posterior conjugación y excreción.",
    keyPoints: [
      "La bilirrubina producida inicialmente por macrófagos es NO conjugada (liposoluble).",
      "Para viajar por el plasma acuoso, la bilirrubina indirecta se une fuertemente a la albúmina.",
      "Tema: Ciencias Básicas Aplicadas / Metabolismo pirrólico y hemoglobina.",
    ],
  },
  {
    id: "q8",
    topic: "Medicina Interna - Cardiología / Semiología Integrada y Fisiopatología Mecánica.",
    statement:
      "En el marco del examen oral de residencia, el profesor titular le interroga exhaustivamente acerca de la semiología florida de un paciente geriátrico hospitalizado por una cardiomiopatía dilatada terminal de origen isquémico-necrótico, cuya fracción de eyección del ventrículo izquierdo se encuentra gravemente deprimida, estimándose en apenas un 25%. El paciente experimenta síntomas clásicos que incluyen ortopnea severa, ingurgitación venosa yugular evidente a 45 grados de inclinación, un reflejo hepatoyugular positivo persistente a la compresión abdominal y desarrollo de ascitis tensa. Aplicando el principio fundamental de 'economía del conocimiento y deducción fisiopatológica' propuesto frecuentemente como la mejor herramienta de análisis para el examen de admisión a la Universidad Nacional, donde el médico debe inferir la génesis de la sintomatología a partir de la alteración mecánica primaria en lugar de recurrir a la mera memorización enciclopédica, ¿cuál de las siguientes opciones constituye la explicación fisiopatológica mecánica que justifica de manera unívoca, directa y concluyente la aparición de este conjunto específico de signos clínicos congestivos en el paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Disminución absoluta y crítica del gasto cardíaco anterógrado celular, lo cual induce una isquemia microvascular aguda en el parénquima del pulmón y del hígado...",
      },
      {
        id: "B",
        label: "B",
        text: "Activación primaria, sostenida y exclusiva del sistema nervioso simpático autonómico, evento biológico que produce una vasoconstricción arterial periférica generalizada...",
      },
      {
        id: "C",
        label: "C",
        text: "Falla mecánica intrínseca de la bomba ventricular muscular que imposibilita el vaciamiento sistólico adecuado, lo que inexorablemente genera un aumento de las presiones telediastólicas remanentes, las cuales se transmiten de forma pasiva y retrógrada a través de las válvulas hacia los lechos venosos...",
      },
      {
        id: "D",
        label: "D",
        text: "Destrucción anatómica valvular intrínseca y permanente (insuficiencia tricuspídea primaria y estenosis mitral) originada de forma secundaria a la remodelación concéntrica severa...",
      },
    ],
    correctOptionId: "C",
    explanation:
      "La respuesta correcta es la C. Los síntomas congestivos en la insuficiencia cardíaca con fracción de eyección reducida derivan de un principio hidrostático básico: si la bomba no puede vaciarse adecuadamente hacia adelante (disminución del inotropismo), las presiones telediastólicas dentro del ventrículo aumentan y se transmiten pasiva y retrógradamente ('reflujo' mecánico). Hacia el circuito pulmonar (causando edema y ortopnea) y hacia el sistema de cavas superior e inferior (causando ingurgitación yugular y congestión hepática).",
    keyPoints: [
      "La fisiopatología congestiva de la IC se explica mecánicamente por el flujo y transmisión de presiones retrógradas.",
      "La falla inotrópica izquierda eleva presión telediastólica, que refluirá a venas pulmonares y eventualmente derechas.",
      "Esquemas de 'economía de conocimiento' priorizan deducción hidrostática vs memoria factual.",
    ],
  },
  {
    id: "q9",
    topic: "Salud Pública / Epidemiología, Administración Médica y Políticas de Estado.",
    statement:
      "En el complejo contexto de la gestión epidemiológica gubernamental en Colombia, el despacho directivo del Ministerio de Salud y Protección Social decide conformar un panel asesor interdisciplinario de expertos clínicos, epidemiólogos y economistas de la salud. La misión oficial asignada a este comité es 'planificar exhaustivamente y desarrollar acciones programáticas a gran escala destinadas a mejorar los determinantes sociales del conocimiento y promover de forma estructurada conductas saludables en la macro-población colombiana, con la finalidad imperativa e innegociable de alcanzar los objetivos fundamentales frente a los desafiantes y cambiantes patrones de morbilidad y mortalidad que impone el siglo XXI'. Desde el punto de vista del marco conceptual que rige la administración hospitalaria y la macrogrestión en salud pública nacional, ¿a qué concepto metodológico exacto corresponde la definición de este nivel de planificación prospectiva y a tan prolongado plazo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Diseño estructurado de Guías de Práctica Clínica (GPC) para adopción médica local.",
      },
      {
        id: "B",
        label: "B",
        text: "Formulación y diseño prospectivo de Políticas Públicas en Salud.",
      },
      {
        id: "C",
        label: "C",
        text: "Ejecución de planificación de carácter táctico-operativa a corto y mediano plazo.",
      },
      {
        id: "D",
        label: "D",
        text: "Elaboración de un plan integral intrahospitalario de respuesta masiva a emergencias biológicas.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "La respuesta correcta es la B. La viñeta describe un escenario de intervención de alcance macro o estatal, dirigido al cambio conductual de la 'población' en general y con miras a horizontes prolongados ('siglo XXI'). En los estudios de salud pública y epidemiología, este tipo de planificación estructural y de normatividad amplia corresponde indiscutiblemente a la formulación de Políticas Públicas en Salud. Esto difiere de la planificación táctica de un hospital o la elaboración de Guías Clínicas específicas para el binomio médico-paciente.",
    keyPoints: [
      "La intervención enfocada en determinantes de salud a nivel poblacional y a largo plazo se define como Política Pública.",
      "Planificación táctico-operativa abarca metas de eficiencia medibles a corto/mediano plazo.",
      "Tema: Administración Médica y Fundamentos Teóricos de Salud Pública Estatal.",
    ],
  },
  {
    id: "q10",
    topic: "Razonamiento Abstracto y Lógico / Epidemiología, Análisis de Pruebas Diagnósticas y Bioestadística.",
    statement:
      "Al revisar críticamente el informe técnico-médico derivado de una prueba piloto de tamizaje diagnóstico poblacional masivo (screening), orientada a la detección precoz del depósito de proteínas característico de la amiloidosis cardíaca por transtiretina en una población urbana completamente asintomática y considerada de muy bajo riesgo pre-test residente en la ciudad de Bogotá, usted nota que el fabricante de la prueba biológica certifica y reporta para la misma una 'Sensibilidad excepcional del 99% y una Especificidad elevada del 95%'. Sin embargo, tras analizar estadísticamente y cruzar los resultados de todos los pacientes ciudadanos que resultaron clasificados como positivos en dicha prueba de tamizaje, usted, como médico epidemiólogo en jefe, se sorprende intelectualmente al evidenciar que la abrumadora y gigantesca mayoría de esos individuos positivos en realidad no padecen la enfermedad (conformando un inmenso grupo de pacientes falsos positivos). Sabiendo axiomáticamente que las características intrínsecas de rendimiento del ensayo bioquímico de laboratorio (su sensibilidad y especificidad reportadas) son matemáticamente excelentes y no han sufrido alteraciones técnicas, ¿cuál es la deducción matemática fundamental y epidemiológica que explica de manera contundente el por qué el Valor Predictivo Positivo (VPP) clínico de esta prueba en este escenario urbano particular resultó ser tan extremadamente pobre y bajo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Porque el concepto estadístico del valor predictivo positivo es una métrica clínica que depende de manera absoluta e inexorable de la alta prevalencia subyacente de la patología en la población donde se aplica el test; consecuentemente, al aplicarse masivamente en una cohorte poblacional asintomática de muy bajo riesgo (con prevalencia marginal), el abultado número de ciudadanos falsamente positivos supera y diluye dramáticamente al escaso número de verdaderos positivos.",
      },
      {
        id: "B",
        label: "B",
        text: "Porque la sensibilidad reportada del 99% de la prueba biológica resultó ser numéricamente demasiado alta, lo que matemáticamente e inevitablemente fuerza a que el parámetro de especificidad pierda toda su validez e impacto bayesiano.",
      },
      {
        id: "C",
        label: "C",
        text: "Porque la aplicación del ensayo biológico se desarrolló específicamente en la ciudad de Bogotá, donde el conocido sesgo bioestadístico inducido por la elevada altura sobre el nivel del mar es capaz de alterar y desconfigurar el punto de corte fisiológico.",
      },
      {
        id: "D",
        label: "D",
        text: "Porque los parámetros del Valor Predictivo Positivo (VPP) así como el Valor Predictivo Negativo (VPN) son axiomas matemáticos totalmente invariables y blindados frente a las características epidemiológicas externas de la población testeada.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "La respuesta correcta es la A. Sensibilidad y Especificidad son propiedades intrínsecas de una prueba diagnóstica que no cambian, pero los Valores Predictivos Positivo (VPP) y Negativo (VPN) dependen matemáticamente y fuertemente del Teorema de Bayes, específicamente de la Prevalencia o la probabilidad pre-test de la enfermedad. Si se aplica un test con 95% de especificidad a una población donde la enfermedad es extremadamente rara (ej. 0.001%), el margen del 5% de falsos positivos numéricamente aplastará al grupo de los verdaderos enfermos detectados, haciendo que casi todo individuo con resultado positivo en realidad esté sano (caída drástica del VPP).",
    keyPoints: [
      "El Valor Predictivo Positivo (VPP) depende abrumadoramente de la Prevalencia de la enfermedad.",
      "Sensibilidad y Especificidad son características fijas del ensayo de laboratorio.",
      "Pruebas masivas en poblaciones de bajo riesgo siempre generarán muchos más falsos positivos que verdaderos.",
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
                <div className="flex flex-1 items-center justify-between">
                  <div>
                    {!user && (
                      <p className="inline-flex min-h-10 items-center rounded-lg border border-mq-border-strong bg-white/[0.03] px-3 text-xs font-semibold text-mq-muted sm:text-sm">
                        Modo invitado
                      </p>
                    )}
                  </div>
                  <div>
                    {hasStarted && !isResultsStep && (
                      <div className="flex items-center gap-2 rounded-lg border border-mq-accent/20 bg-mq-accent/5 px-3 py-1.5 text-sm font-bold text-mq-accent">
                        <span className="h-2 w-2 rounded-full bg-mq-accent animate-pulse" />
                        {formatTime(totalSeconds)}
                      </div>
                    )}
                  </div>
                </div>
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
              correctTopics={correctTopicsByName}
              wrongTopics={wrongTopicsByName}
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
            {user && hasUnlimitedAccess ? (
              <AttemptHistory
                userId={user.uid}
                refreshKey={historyRefreshKey}
                maxItems={10}
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
