import type { TrainingQuestion } from "@/lib/questions/types";

export const UMNG_DIAGNOSTIC_QUESTIONS: TrainingQuestion[] = [
  {
    id: "umng-diag-001",
    topic: "Ciencias Básicas - Genética",
    difficulty: "hard",
    statement:
      "Una aspirante a residente de cirugía plástica evalúa a un recién nacido con labio fisurado bilateral y paladar hendido, asociado a polidactilia postaxial y microftalmia. Al solicitar un cariotipo, la alteración cromosómica más probable que explica este fenotipo es:",
    options: [
      { id: "A", label: "A", text: "Trisomía 21 (Síndrome de Down)" },
      { id: "B", label: "B", text: "Trisomía 18 (Síndrome de Edwards)" },
      { id: "C", label: "C", text: "Trisomía 13 (Síndrome de Patau)" },
      { id: "D", label: "D", text: "Deleción 5p (Síndrome de Cri du Chat)" },
      { id: "E", label: "E", text: "Microdeleción 22q11.2 (Síndrome de DiGeorge)" },
    ],
    correctOptionId: "C",
    explanation:
      "La trisomía 13 (Síndrome de Patau) se caracteriza clásicamente por defectos en la línea media, incluyendo labio fisurado/paladar hendido severo, microftalmia, polidactilia (usualmente postaxial) y defectos cardíacos. La trisomía 18 se asocia más con micrognatia, occipucio prominente y superposición de los dedos. En un examen de la UMNG, el reconocimiento preciso de fenotipos genéticos es clave para las subespecialidades pediátricas y reconstructivas.",
    keyPoints: [
      "Trisomía 13: Labio/paladar hendido, microftalmia, polidactilia.",
      "Trisomía 18: Micrognatia, occipucio prominente, manos empuñadas con superposición de dedos.",
      "Identificación clínica de alteraciones de la línea media.",
    ],
    tags: ["Ciencias Básicas", "Genética", "Reconstructiva", "UMNG-Core"],
    university: "Universidad Militar Nueva Granada (UMNG)",
  },
  {
    id: "umng-diag-002",
    topic: "Trauma - ATLS",
    difficulty: "medium",
    statement:
      "Paciente militar masculino de 25 años ingresa al Hospital Militar Central posterior a herida por artefacto explosivo. Presenta amputación traumática del miembro inferior derecho, palidez mucocutánea severa, diaforesis, frecuencia cardíaca de 145 lpm y presión arterial no detectable. Según la clasificación de choque hemorrágico (ATLS), este paciente se encuentra en:",
    options: [
      { id: "A", label: "A", text: "Choque Grado I" },
      { id: "B", label: "B", text: "Choque Grado II" },
      { id: "C", label: "C", text: "Choque Grado III" },
      { id: "D", label: "D", text: "Choque Grado IV" },
      { id: "E", label: "E", text: "Ninguna de las anteriores, corresponde a choque neurogénico" },
    ],
    correctOptionId: "D",
    explanation:
      "El paciente presenta signos clínicos de pérdida masiva de sangre (>40% del volumen sanguíneo) indicados por una taquicardia severa (>140 lpm) y ausencia de presión arterial detectable, lo cual es patognomónico de un Choque Hemorrágico Grado IV según los protocolos ATLS. Requiere activación inmediata del protocolo de transfusión masiva y reanimación hemostática de control de daños. El distractor E evalúa la seguridad en la toma de decisiones clínicas.",
    keyPoints: [
      "Choque Grado IV: Pérdida >40%, FC >140 lpm, hipotensión severa.",
      "Manejo inmediato: Reanimación hemostática (1:1:1), control mecánico del sangrado (torniquete en contexto militar).",
    ],
    tags: ["Trauma", "ATLS", "Cirugía General", "UMNG-Core"],
    university: "Universidad Militar Nueva Granada (UMNG)",
  },
  {
    id: "umng-diag-003",
    topic: "Cirugía Plástica y Reconstructiva",
    difficulty: "hard",
    statement:
      "En el manejo inicial de un paciente de 35 años con quemaduras de segundo y tercer grado que abarcan el 45% de la superficie corporal total (SCT), la reposición de líquidos se debe guiar primordialmente para mantener un gasto urinario de:",
    options: [
      { id: "A", label: "A", text: "0.1 a 0.2 ml/kg/hr" },
      { id: "B", label: "B", text: "0.5 ml/kg/hr (0.5 a 1.0 ml/kg/hr)" },
      { id: "C", label: "C", text: "1.5 a 2.0 ml/kg/hr" },
      { id: "D", label: "D", text: "Mayor a 3.0 ml/kg/hr" },
      { id: "E", label: "E", text: "La reposición se guía exclusivamente por la presión venosa central, no por el gasto urinario" },
    ],
    correctOptionId: "B",
    explanation:
      "Según las guías internacionales para el manejo del paciente gran quemado (incluyendo los lineamientos del HMC), la meta de reanimación hídrica (ej. Fórmula de Parkland ajustada) en adultos es mantener un gasto urinario en el rango de 0.5 ml/kg/hr. Un gasto menor indica reanimación insuficiente (riesgo de lesión renal aguda), y un gasto significativamente mayor indica sobre-reanimación (riesgo de edema pulmonar y síndrome compartimental abdominal o de extremidades).",
    keyPoints: [
      "Meta de gasto urinario en adulto gran quemado: 0.5 ml/kg/hr.",
      "La sobre-reanimación es tan deletérea como la sub-reanimación.",
      "El quinto distractor (E) es un error conceptual crítico que debe descartarse inmediatamente.",
    ],
    tags: ["Cirugía Plástica", "Quemados", "Fisiología", "UMNG-Core"],
    university: "Universidad Militar Nueva Granada (UMNG)",
  },
];
