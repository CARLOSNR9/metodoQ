import type { TrainingQuestion } from "@/lib/questions/types";

/** Preguntas adicionales para seed incremental (IDs estables en Firestore). */
export const EXTENDED_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ext-ped-01",
    topic: "Pediatría",
    statement:
      "Lactante de 8 meses con fiebre de 39 °C, llanto inconsolable y abducción de la pierna derecha. Al examen la cadera está en flexión y rotación externa. ¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Artritis séptica de cadera" },
      { id: "B", label: "B", text: "Enfermedad de Legg-Calvé-Perthes" },
      { id: "C", label: "C", text: "Displasia del desarrollo de cadera" },
      { id: "D", label: "D", text: "Sinovitis transitoria de cadera" },
    ],
    correctOptionId: "A",
    explanation:
      "Fiebre alta + postura antálgica + limitación de movimiento en lactante sugieren artritis séptica hasta demostrar lo contrario. Requiere punción articular urgente.",
    keyPoints: ["Artritis séptica es emergencia en pediatría", "Postura en flexión-rotación externa"],
    difficulty: "medium",
  },
  {
    id: "ext-gin-01",
    topic: "Ginecología",
    statement:
      "Mujer de 28 años, amenorrea de 9 semanas, dolor pélvico unilateral y sangrado vaginal escaso. β-hCG positiva. Ecografía: saco gestacional intrauterino ausente y masa anexial con embrión sin actividad cardíaca. ¿Diagnóstico?",
    options: [
      { id: "A", label: "A", text: "Aborto incompleto" },
      { id: "B", label: "B", text: "Embarazo ectópico" },
      { id: "C", label: "C", text: "Mola hidatiforme" },
      { id: "D", label: "D", text: "Embarazo viable con retraso" },
    ],
    correctOptionId: "B",
    explanation:
      "Embarazo ectópico: β-hCG positiva sin saco intrauterino y hallazgos anexiales. Riesgo de ruptura; estabilizar y definir manejo médico o quirúrgico.",
    keyPoints: ["Ausencia de saco intrauterino + masa anexial", "Emergencia ginecológica"],
    difficulty: "medium",
  },
  {
    id: "ext-urg-01",
    topic: "Urgencias",
    statement:
      "Paciente politraumatizado con Glasgow 8, hipotensión y pupilas midriáticas bilaterales. ¿Cuál es la primera medida?",
    options: [
      { id: "A", label: "A", text: "TAC de cráneo antes de mover al paciente" },
      { id: "B", label: "B", text: "Vía aérea definitiva y ventilación controlada" },
      { id: "C", label: "C", text: "Inicio de manitol endovenoso" },
      { id: "D", label: "D", text: "Reposición con cristaloides exclusivamente" },
    ],
    correctOptionId: "B",
    explanation:
      "En trauma con compromiso neurológico severo, priorizar ABC: asegurar vía aérea y oxigenación antes de estudios de imagen o fármacos específicos.",
    keyPoints: ["ABCDE en trauma", "Glasgow ≤8 indica intubación"],
    difficulty: "easy",
  },
  {
    id: "ext-farm-01",
    topic: "Farmacología",
    statement:
      "Paciente con fibrilación auricular permanente inicia warfarina. ¿Qué parámetro se debe monitorizar para ajuste de dosis?",
    options: [
      { id: "A", label: "A", text: "TTPa" },
      { id: "B", label: "B", text: "INR" },
      { id: "C", label: "C", text: "Tiempo de protrombina sin normalizar" },
      { id: "D", label: "D", text: "Anti-Xa" },
    ],
    correctOptionId: "B",
    explanation: "La warfarina inhibe la síntesis de factores vitamina K-dependientes; el INR es el estándar de monitorización (meta habitual 2-3).",
    keyPoints: ["Warfarina → INR", "Evitar interacciones y alimentos ricos en vitamina K"],
    difficulty: "easy",
  },
  {
    id: "ext-epi-01",
    topic: "Epidemiología",
    statement:
      "En un estudio de cohorte se compara la incidencia de diabetes en fumadores vs no fumadores. ¿Qué medida resume el riesgo relativo entre expuestos y no expuestos?",
    options: [
      { id: "A", label: "A", text: "Razón de momios" },
      { id: "B", label: "B", text: "Riesgo atribuible" },
      { id: "C", label: "C", text: "Riesgo relativo" },
      { id: "D", label: "D", text: "Número necesario a tratar" },
    ],
    correctOptionId: "C",
    explanation: "El riesgo relativo (RR) en cohortes compara la incidencia en expuestos vs no expuestos: RR = Ie / Ine.",
    keyPoints: ["Cohorte → riesgo relativo", "Caso-control → razón de momios"],
    difficulty: "easy",
  },
  {
    id: "ext-neu-01",
    topic: "Neurología",
    statement:
      "Hombre de 62 años con inicio súbito de hemiparesia derecha y afasia. TA 180/100 mmHg. TAC simple sin hemorragia. ¿Conducta inicial en ventana de reperfusión?",
    options: [
      { id: "A", label: "A", text: "Anticoagulación con heparina de bajo peso molecular" },
      { id: "B", label: "B", text: "Evaluar elegibilidad para trombólisis IV" },
      { id: "C", label: "C", text: "Solo observación y control de TA" },
      { id: "D", label: "D", text: "Doble antiagregación inmediata sin estudio" },
    ],
    correctOptionId: "B",
    explanation:
      "Ictus isquémico agudo sin hemorragia: valorar trombólisis según tiempo, contraindicaciones y criterios clínicos. La TA elevada no contraindica sola la evaluación.",
    keyPoints: ["Código ictus", "Trombólisis según ventana y criterios"],
    difficulty: "medium",
  },
  {
    id: "ext-nef-01",
    topic: "Nefrología",
    statement:
      "Paciente con creatinina 3.2 mg/dL, potasio 6.8 mEq/L y ondas T picudas en ECG. ¿Tratamiento inmediato del hiperkalemia sintomática?",
    options: [
      { id: "A", label: "A", text: "Furosemida oral exclusivamente" },
      { id: "B", label: "B", text: "Gluconato de calcio IV" },
      { id: "C", label: "C", text: "Restricción hídrica únicamente" },
      { id: "D", label: "D", text: "Bicarbonato oral como única medida" },
    ],
    correctOptionId: "B",
    explanation:
      "Hiperkalemia con cambios ECG: estabilizar membrana con gluconato de calcio IV; luego medidas para reducir potasio (insulina-dextrosa, resinas, diálisis si indicada).",
    keyPoints: ["Cambios ECG → calcio IV primero", "Emergencia metabólica"],
    difficulty: "medium",
  },
  {
    id: "ext-inf-01",
    topic: "Infectología",
    statement:
      "Adulto joven con fiebre, exudado amigdalino y adenopatías; prueba rápida heterófilo positiva. ¿Agente etiológico más probable?",
    options: [
      { id: "A", label: "A", text: "Streptococcus pyogenes" },
      { id: "B", label: "B", text: "Virus de Epstein-Barr" },
      { id: "C", label: "C", text: "Coxsackie A" },
      { id: "D", label: "D", text: "Neisseria gonorrhoeae" },
    ],
    correctOptionId: "B",
    explanation:
      "Mononucleosis infecciosa por EBV: faringitis, adenopatías y prueba de Paul-Bunnell (Monospot) positiva. Evitar ampicilina por riesgo de rash.",
    keyPoints: ["Monospot positivo → EBV", "No usar ampicilina"],
    difficulty: "easy",
  },
  {
    id: "ext-end-01",
    topic: "Endocrinología",
    statement:
      "Paciente con poliuria, polidipsia, glucosa 420 mg/dL, pH 7.1 y cetonas en orina. ¿Diagnóstico y manejo inicial?",
    options: [
      { id: "A", label: "A", text: "Estado hiperosmolar; solo hidratación oral" },
      { id: "B", label: "B", text: "Cetoacidosis diabética; cristaloides e insulina IV" },
      { id: "C", label: "C", text: "Hipoglucemia; dextrosa al 5%" },
      { id: "D", label: "D", text: "Síndrome metabólico; metformina única" },
    ],
    correctOptionId: "B",
    explanation:
      "Cetoacidosis diabética: hiperglucemia, acidosis y cetosis. Manejo con líquidos IV, insulina y corrección electrolítica (potasio).",
    keyPoints: ["CAD = líquidos + insulina", "Vigilar potasio"],
    difficulty: "medium",
  },
  {
    id: "ext-derm-01",
    topic: "Dermatología",
    statement:
      "Lesión pigmentada de 8 mm con bordes irregulares, múltiples colores y crecimiento reciente en espalda. ¿Siguiente paso más apropiado?",
    options: [
      { id: "A", label: "A", text: "Crema de corticoide por 2 semanas" },
      { id: "B", label: "B", text: "Biopsia o excisión para histopatología" },
      { id: "C", label: "C", text: "Observación sin intervención" },
      { id: "D", label: "D", text: "Crioterapia sin diagnóstico" },
    ],
    correctOptionId: "B",
    explanation:
      "Criterios ABCDE y cambios recientes sugieren melanoma hasta probar lo contrario. Requiere biopsia o excisión con estudio histológico.",
    keyPoints: ["ABCDE del melanoma", "Biopsia ante sospecha"],
    difficulty: "easy",
  },
];
