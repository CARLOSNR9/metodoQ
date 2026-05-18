import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Batería diagnóstica fija (10 ítems) — UCC Sede Pasto / Medicina Interna.
 * Estructura alineada al examen de admisión: 50% clínica, 30% epidemiología,
 * 10% Res. 3280, 10% lectura crítica (estilo MIR / saber y descartar).
 */
export const UCC_PASTO_DIAGNOSTIC_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-dx-01",
    university: "UCC Pasto",
    examArea: "Res. 3280 / Prevención primaria",
    topic: "Salud Pública",
    difficulty: "medium",
    tags: ["ucc", "diagnostico", "3280", "tamizaje", "colorrectal"],
    statement:
      "Hombre de 53 años, trabajador agrícola de Nariño, HTA controlada con losartán 50 mg/día, IMC 28.5 kg/m². Niega síntomas digestivos y antecedentes familiares de cáncer colorrectal. Examen físico normal. En consulta de medicina general, según la Resolución 3280 de 2018 (RIAS, curso de vida adultez), ¿cuál es la conducta más apropiada para tamizaje de cáncer de colon y recto?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Colonoscopia total de tamizaje inmediata por alto riesgo oncológico regional.",
        distractorProfile: "colonoscopia_primaria_riesgo_promedio",
        incorrectFeedback:
          "La colonoscopia como primera línea se reserva para alto riesgo (antecedente familiar de primer grado, síndromes polipósicos).",
      },
      {
        id: "B",
        label: "B",
        text: "Sangre oculta en materia fecal por inmunoquímica (SOMF); si es positiva, ordenar colonoscopia confirmatoria sin derivación previa a gastroenterología.",
      },
      {
        id: "C",
        label: "C",
        text: "No tiene indicación de tamizaje por ausencia de síntomas y antecedentes familiares.",
        distractorProfile: "tamizaje_condicionado_sintomas",
        incorrectFeedback:
          "El tamizaje poblacional es universal entre 50 y 75 años, independiente de síntomas.",
      },
      {
        id: "D",
        label: "D",
        text: "Antígeno carcinoembrionario (ACE) sérico como prueba de primera línea.",
        distractorProfile: "ace_tamizaje_poblacional",
        incorrectFeedback:
          "El ACE no tiene sensibilidad ni especificidad para tamizaje; se usa en seguimiento de cáncer ya diagnosticado.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Res. 3280: tamizaje de cáncer colorrectal universal en hombres y mujeres de 50 a 75 años con SOMF bienal; colonoscopia confirmatoria si positivo, ordenable por médico general.",
    keyPoints: [
      "Tamizaje universal 50–75 años con SOMF.",
      "Colonoscopia confirmatoria sin barrera de especialista.",
      "Tema: Res. 3280 — prevención oncológica en adultez.",
    ],
  },
  {
    id: "ucc-dx-02",
    university: "UCC Pasto",
    examArea: "Medicina Interna / Endocrinología",
    topic: "Urgencias",
    difficulty: "hard",
    tags: ["ucc", "diagnostico", "cad", "dm1", "bioquimica"],
    statement:
      "Mujer de 26 años con DM1, ingresa por deterioro de consciencia, poliuria, polidipsia y dolor abdominal. Omitió insulina glargina tras cuadro urinario. TA 85/55, FC 128, FR 32 (Kussmaul), mucosas secas, aliento cetósico. Glucometría >500 mg/dL. Gases: pH 7.12, HCO3 8 mEq/L, pCO2 24 mmHg. ¿Cuál es el mecanismo de la acidosis y la primera intervención más urgente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Acidosis láctica por hipoperfusión; bolo de bicarbonato intravenoso.",
        distractorProfile: "bicarbonato_cad_precoce",
        incorrectFeedback:
          "El primum movens en CAD es la cetogénesis; el bicarbonato está reservado para pH <6.9 con inestabilidad.",
      },
      {
        id: "B",
        label: "B",
        text: "Lipólisis por déficit de insulina con cuerpos cetónicos; expansión rápida con cristaloides isotónicos.",
      },
      {
        id: "C",
        label: "C",
        text: "Exceso de insulina no funcional; bolo de insulina regular 0.1 U/kg como primer paso.",
        distractorProfile: "insulina_antes_volemia",
        incorrectFeedback:
          "La causa es déficit de insulina, no exceso; la fluidoterapia precede a la insulina IV.",
      },
      {
        id: "D",
        label: "D",
        text: "Retención de H+ renal; insulina subcutánea y reposición agresiva de potasio.",
        distractorProfile: "via_sc_cad",
        incorrectFeedback:
          "En CAD severa con hipoperfusión la absorción subcutánea es errática; se requiere insulina IV tras volumen.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "CAD: déficit de insulina → beta-oxidación → cetonas → acidosis con brecha aniónica. Paso 1: cristaloides; insulina IV después de volumen y K+ seguro.",
    keyPoints: [
      "CAD: cetogénesis, no acidosis láctica primaria.",
      "Fluidos antes que insulina.",
      "Tema: Emergencias metabólicas — CAD.",
    ],
  },
  {
    id: "ucc-dx-03",
    university: "UCC Pasto",
    examArea: "Epidemiología clínica",
    topic: "Epidemiología",
    difficulty: "hard",
    tags: ["ucc", "diagnostico", "casos_controles", "or"],
    statement:
      "En Nariño se estudian 150 pacientes con adenocarcinoma de cardias (C160) y 300 controles emparejados por edad y sexo. Se aplica cuestionario retrospectivo sobre consumo de alimentos ahumados con nitritos en los últimos 20 años. ¿Qué diseño epidemiológico es y cuál es la medida de asociación apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Cohorte prospectiva; Riesgo Relativo (RR).",
        distractorProfile: "cohorte_vs_casos_controles",
        incorrectFeedback:
          "En cohorte se parte de expuestos sanos y se sigue hacia el desenlace; aquí el desenlace ya ocurrió.",
      },
      {
        id: "B",
        label: "B",
        text: "Estudio transversal; Razón de Prevalencias (RP).",
        distractorProfile: "transversal_sin_temporalidad",
        incorrectFeedback:
          "El transversal mide exposición y desenlace en un solo corte; aquí hay direccionalidad retrospectiva.",
      },
      {
        id: "C",
        label: "C",
        text: "Casos y controles; Odds Ratio (OR).",
      },
      {
        id: "D",
        label: "D",
        text: "Ensayo clínico cuasi-experimental; Reducción del Riesgo Absoluto (RRA).",
        distractorProfile: "intervencion_vs_observacional",
        incorrectFeedback:
          "No hay asignación de exposición; es observacional analítico retrospectivo.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Se selecciona por desenlace (casos vs controles) e indaga exposición en el pasado. Sin incidencia no hay RR; la medida válida es el OR.",
    keyPoints: [
      "Casos y controles: desenlace → exposición retrospectiva.",
      "OR cuando no hay incidencia.",
      "Tema: Epidemiología — diseños observacionales.",
    ],
  },
  {
    id: "ucc-dx-04",
    university: "UCC Pasto",
    examArea: "Cardiología / Farmacología",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["ucc", "diagnostico", "sraa", "trastuzumab"],
    statement:
      "Hombre de 52 años, obesidad abdominal (perímetro 108 cm), HTA esencial de novo tras fallar medidas no farmacológicas. Creatinina 0.95 mg/dL, K+ 4.3, glucosa en ayunas 118 mg/dL. Sin IC ni cardiopatía isquémica. ¿Qué combinación antihipertensiva está contraindicada por riesgo de nefrotoxicidad e hiperpotasemia, y qué fármaco oncológico exige ecocardiograma basal obligatorio?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Betabloqueadores cardioselectivos contraindicados; Tamoxifeno requiere ecocardiograma.",
        distractorProfile: "bb_sindrome_metabolico",
        incorrectFeedback:
          "Los betabloqueadores no están contraindicados de forma absoluta en síndrome metabólico; Tamoxifeno no exige eco basal por cardiotoxicidad tipo II.",
      },
      {
        id: "B",
        label: "B",
        text: "IECA contraindicados con hiperglucemia; Docetaxel requiere ecocardiograma.",
        distractorProfile: "ieca_glucemia",
        incorrectFeedback:
          "Los IECA/ARA II son de primera línea en HTA con disglucemia; Docetaxel no tiene el mismo perfil de cardiotoxicidad que trastuzumab.",
      },
      {
        id: "C",
        label: "C",
        text: "IECA + ARA II simultáneos contraindicados; Trastuzumab requiere ecocardiograma previo y seriado.",
      },
      {
        id: "D",
        label: "D",
        text: "Tiazidas contraindicadas con obesidad; Paclitaxel requiere ecocardiograma basal.",
        distractorProfile: "tiazidas_obesidad",
        incorrectFeedback:
          "Las tiazidas no están contraindicadas de forma absoluta; Paclitaxel no exige el mismo protocolo ecocardiográfico que trastuzumab.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Bloqueo dual del SRAA (IECA + ARA II) aumenta falla renal e hiperpotasemia sin beneficio adicional (ONTARGET). Trastuzumab: cardiotoxicidad tipo II reversible → FEVI basal y seriada.",
    keyPoints: [
      "Prohibido IECA + ARA II simultáneos.",
      "Trastuzumab → ecocardiograma obligatorio.",
      "Tema: Farmacología cardiovascular y oncológica.",
    ],
  },
  {
    id: "ucc-dx-05",
    university: "UCC Pasto",
    examArea: "Res. 3280 / Ruta materno-perinatal",
    topic: "Ginecología",
    difficulty: "medium",
    tags: ["ucc", "diagnostico", "3280", "sifilis", "gestacion"],
    statement:
      "Gestante de 22 años, 9 semanas, sin lesiones genitales. En primer control prenatal según Res. 3280 de 2018, ¿cuál es el algoritmo de tamizaje de sífilis gestacional en atención primaria?",
    options: [
      {
        id: "A",
        label: "A",
        text: "VDRL/RPR primero; si reactivo, confirmar con prueba treponémica y luego tratar.",
        distractorProfile: "algoritmo_clasico_obsoleto",
        incorrectFeedback:
          "El algoritmo vigente en Colombia prioriza prueba treponémica rápida en punto de atención, no VDRL inicial.",
      },
      {
        id: "B",
        label: "B",
        text: "Prueba treponémica rápida en consultorio; si positiva, tratar con penicilina de inmediato y solicitar VDRL/RPR para títulos basales.",
      },
      {
        id: "C",
        label: "C",
        text: "Microscopía de campo oscuro de flujo vaginal como tamizaje universal.",
        distractorProfile: "campo_oscuro_tamizaje",
        incorrectFeedback:
          "Campo oscuro solo en lesiones ulcerosas activas, no en gestantes asintomáticas.",
      },
      {
        id: "D",
        label: "D",
        text: "Postergar tamizaje serológico hasta el tercer trimestre.",
        distractorProfile: "tamizaje_tercer_trimestre",
        incorrectFeedback:
          "El tamizaje debe hacerse en el primer contacto prenatal para prevenir sífilis congénita.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Algoritmo reverso con prueba rápida treponémica POC: positivo → penicilina inmediata + VDRL/RPR para títulos y seguimiento.",
    keyPoints: [
      "Prueba rápida treponémica en primer contacto.",
      "Tratamiento inmediato si positiva.",
      "Tema: Res. 3280 — ruta materno-perinatal.",
    ],
  },
  {
    id: "ucc-dx-06",
    university: "UCC Pasto",
    examArea: "Ciencias básicas / Bioquímica",
    topic: "Bioquímica",
    difficulty: "easy",
    tags: ["ucc", "diagnostico", "biologia_molecular"],
    statement:
      "En una célula eucariota humana, ¿en qué compartimentos ocurren predominantemente la replicación del ADN, la transcripción y la traducción?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Replicación, transcripción y traducción ocurren en el citoplasma.",
        distractorProfile: "procariota_confusion",
        incorrectFeedback:
          "En eucariotas el ADN está en el núcleo; la traducción es citoplasmática.",
      },
      {
        id: "B",
        label: "B",
        text: "Replicación y traducción en núcleo; transcripción en citoplasma.",
        distractorProfile: "compartimentos_invertidos",
        incorrectFeedback:
          "La traducción ocurre en ribosomas citoplasmáticos, no en el núcleo.",
      },
      {
        id: "C",
        label: "C",
        text: "Replicación y transcripción en el núcleo; traducción en el citoplasma (ribosomas).",
      },
      {
        id: "D",
        label: "D",
        text: "Transcripción en citoplasma; replicación y traducción en núcleo.",
        distractorProfile: "dogma_invertido",
        incorrectFeedback:
          "Viola el dogma central de la biología molecular en células eucariotas.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Dogma central: replicación y transcripción nucleares; ARNm maduro exportado al citosol para traducción en ribosomas.",
    keyPoints: [
      "ADN → núcleo; proteínas → citoplasma.",
      "Puntos accesibles del 10% de ciencias básicas.",
      "Tema: Bioquímica — expresión génica.",
    ],
  },
  {
    id: "ucc-dx-07",
    university: "UCC Pasto",
    examArea: "Medicina Interna / Neumología",
    topic: "Neumología",
    difficulty: "medium",
    tags: ["ucc", "diagnostico", "epoc", "anthonisen"],
    statement:
      "Hombre de 68 años, tabaquismo 40 paquetes/año, exacerbación de EPOC: disnea mMRC 2→4 en 48 h, mayor volumen y purulencia del esputo (verdoso), taquipnea 30 rpm, uso de musculatura accesoria, SatO2 84% al aire, sibilancias difusas. ¿Cuál es la justificación más robusta para antibióticos empíricos?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Todo paciente hospitalizado por exacerbación de EPOC debe recibir antibióticos.",
        distractorProfile: "hospitalizacion_sola",
        incorrectFeedback:
          "La hospitalización no es criterio aislado; se usan los criterios clínicos de Anthonisen.",
      },
      {
        id: "B",
        label: "B",
        text: "Cumple criterios de Anthonisen (≥2 de 3, uno de ellos aumento de purulencia del esputo).",
      },
      {
        id: "C",
        label: "C",
        text: "Solo si leucocitos >15 000/mm³ o fiebre >38.5°C.",
        distractorProfile: "biomarcadores_aislados",
        incorrectFeedback:
          "Leucocitosis y fiebre son inespecíficos; Anthonisen es fenomenológico.",
      },
      {
        id: "D",
        label: "D",
        text: "Solo si hay aislamiento previo de Pseudomonas en esputo ambulatorio.",
        distractorProfile: "cultivo_previo_obligatorio",
        incorrectFeedback:
          "No se requiere cultivo previo para indicar antibióticos en exacerbación tipo I de Anthonisen.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Presenta los 3 criterios de Anthonisen (disnea, volumen y purulencia del esputo) → exacerbación tipo I → antibióticos indicados (GOLD).",
    keyPoints: [
      "Anthonisen: disnea, volumen, purulencia.",
      "Purulencia obligatoria si solo 2 criterios.",
      "Tema: EPOC — exacerbación infecciosa.",
    ],
  },
  {
    id: "ucc-dx-08",
    university: "UCC Pasto",
    examArea: "Medicina Interna / Reumatología",
    topic: "Reumatología",
    difficulty: "medium",
    tags: ["ucc", "diagnostico", "les", "autoanticuerpos"],
    statement:
      "Mujer de 32 años, astenia, poliartralgias matutinas simétricas en manos, fotosensibilidad, edema perimaleolar, rash malar que respeta surcos nasogenianos. Pancitopenia leve, proteinuria 1.5 g/24 h con hematuria y acantocitos. ANA 1:640 homogéneo. ¿Qué anticuerpos confirman LES y se asocian a nefritis lúpica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Anti-Ro (SSA) y anti-La (SSB).",
        distractorProfile: "sjogren_vs_lupus",
        incorrectFeedback:
          "Anti-Ro/La son típicos de Sjögren y lupus cutáneo subagudo, no los más específicos para LES sistémico.",
      },
      {
        id: "B",
        label: "B",
        text: "Anti-péptido cíclico citrulinado (Anti-CCP).",
        distractorProfile: "artritis_reumatoide",
        incorrectFeedback:
          "Anti-CCP es específico de artritis reumatoide.",
      },
      {
        id: "C",
        label: "C",
        text: "Anti-DNA de doble cadena (anti-dsDNA) y anti-Smith (anti-Sm).",
      },
      {
        id: "D",
        label: "D",
        text: "Anti-centrómero y anti-Scl-70.",
        distractorProfile: "esclerosis_sistemica",
        incorrectFeedback:
          "Estos anticuerpos orientan a esclerosis sistémica.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Anti-Sm: máxima especificidad para LES. Anti-dsDNA: específico y correlaciona con actividad y nefritis lúpica.",
    keyPoints: [
      "ANA sensible, anti-Sm y anti-dsDNA específicos.",
      "Anti-dsDNA y nefritis lúpica.",
      "Tema: Reumatología — LES.",
    ],
  },
  {
    id: "ucc-dx-09",
    university: "UCC Pasto",
    examArea: "Epidemiología clínica / Bioestadística",
    topic: "Epidemiología",
    difficulty: "medium",
    tags: ["ucc", "diagnostico", "sensibilidad", "validez"],
    statement:
      "Nueva prueba para resistencia a la insulina vs clamp euglucémico (gold standard) en 1000 adultos: VP=400, FN=100, FP=50, VN=450. ¿Cuál es la sensibilidad de la prueba?",
    options: [
      {
        id: "A",
        label: "A",
        text: "80%.",
      },
      {
        id: "B",
        label: "B",
        text: "90%.",
        distractorProfile: "especificidad_confundida",
        incorrectFeedback:
          "90% es la especificidad (450/500), no la sensibilidad.",
      },
      {
        id: "C",
        label: "C",
        text: "88%.",
        distractorProfile: "vpp_confundido",
        incorrectFeedback:
          "88% aproxima el valor predictivo positivo (400/450), no la sensibilidad.",
      },
      {
        id: "D",
        label: "D",
        text: "75%.",
        distractorProfile: "denominador_incorrecto",
        incorrectFeedback:
          "Sensibilidad = VP / (VP + FN) = 400/500 = 80%.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Sensibilidad = VP / (VP + FN) = 400 / (400 + 100) = 80%. Evalúa la columna de enfermos en la tabla 2×2.",
    keyPoints: [
      "Sensibilidad = VP / (VP + FN).",
      "No confundir con especificidad ni VPP.",
      "Tema: Epidemiología — validez de pruebas.",
    ],
  },
  {
    id: "ucc-dx-10",
    university: "UCC Pasto",
    examArea: "Medicina Interna / Geriatría",
    topic: "Medicina Interna",
    difficulty: "medium",
    tags: ["ucc", "diagnostico", "osteoporosis", "bifosfonatos"],
    statement:
      "Mujer de 65 años, HTA, madre con fractura de cuello femoral. DEXA: T-score -2.8 columna lumbar y -2.6 cuello femoral. Se prescribe alendronato 70 mg semanal oral. ¿Qué instrucción posológica es obligatoria para prevenir esofagitis por bifosfonato?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Tomar con desayuno y leche o yogur para mejorar absorción y proteger la mucosa.",
        distractorProfile: "calcio_quelacion",
        incorrectFeedback:
          "El calcio quelata el bifosfonato y anula su absorción; debe tomarse en ayuno solo con agua.",
      },
      {
        id: "B",
        label: "B",
        text: "Ayuno, solo con agua abundante, y permanecer erguida 30–60 minutos antes de acostarse.",
      },
      {
        id: "C",
        label: "C",
        text: "Tomar en la noche antes de dormir para reducir náuseas y reflujo.",
        distractorProfile: "decubito_esofagitis",
        incorrectFeedback:
          "El decúbito inmediato aumenta el riesgo de esofagitis por reflujo del fármaco.",
      },
      {
        id: "D",
        label: "D",
        text: "Suspender si hay dolor óseo leve; sugiere osteonecrosis femoral temprana.",
        distractorProfile: "onc_necrosis_temprana",
        incorrectFeedback:
          "La osteonecrosis de mandíbula/fémur atípica es rara y de uso prolongado, no de las primeras dosis.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Bifosfonatos orales: ayuno, agua, bipedestación 30–60 min para evitar retención esofágica y esofagitis/úlcera.",
    keyPoints: [
      "Ayuno + agua + erguido 30–60 min.",
      "Evitar calcio/lácteos en la toma.",
      "Tema: Osteoporosis — bifosfonatos orales.",
    ],
  },
];

export function getUccPastoDiagnosticSession(): TrainingQuestion[] {
  return [...UCC_PASTO_DIAGNOSTIC_QUESTIONS];
}
