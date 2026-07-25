import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición 21 jun 2025 · Bloque MI (#01–#14).
 * Banco exclusivo del examen oficial quincenal; no reutilizar en entrenamiento libre.
 */
export const UCC_CONV_2025_06_21_MI_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2025-06-21-01",
    university: "UCC",
    examArea: "Medicina Interna / Cardiología / Urgencias",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_06_21", "cardiologia", "iam", "ruptura_mitral", "choque"],
    statement:
      "Hombre de 71 años con antecedente de hipertensión arterial ingresa a urgencias por disnea progresiva de 6 horas de evolución y dolor torácico opresivo ocurrido hace 72 horas, que cedió espontáneamente y no fue valorado. Signos vitales: PA 80/50 mmHg, FC 128 lpm, FR 34 rpm, SpO2 85% al aire ambiente. Examen físico: diaforético, extremidades frías, ingurgitación yugular leve, crépitos pulmonares bilaterales hasta campos medios. Auscultación cardíaca: nuevo soplo holosistólico grado IV/VI en foco mitral con irradiación a axila. ECG: ritmo sinusal con ondas Q y elevación persistente del ST en V1–V4. Ecocardiografía en cabecera: ventrículo izquierdo con acinesia anterior extensa, fracción de eyección 40%, jet de insuficiencia mitral excéntrico dirigido a la pared posterior y movimiento anómalo del velo posterior. ¿Cuál es la conducta inmediata MÁS apropiada que modifica la mortalidad a corto plazo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar nitroglicerina intravenosa en infusión continua para reducir la poscarga y disminuir el reflujo mitral.",
        distractorProfile: "nitroglicerina_choque",
        incorrectFeedback:
          "En hipotensión franca (PA 80/50) un vasodilatador sistémico empeora el choque y el gasto cardíaco.",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar 1000 mL de solución salina al 0.9% en bolo rápido para optimizar el volumen sistólico.",
        distractorProfile: "volumen_edema_pulmonar",
        incorrectFeedback:
          "El volumen agresivo en edema pulmonar cardiogénico aumenta la congestión pulmonar y empeora la hipoxemia.",
      },
      {
        id: "C",
        label: "C",
        text: "Estabilización con oxígeno, soporte vasopresor, balón de contrapulsación intraaórtico y valoración quirúrgica cardiovascular urgente.",
      },
      {
        id: "D",
        label: "D",
        text: "Anticoagulación plena con heparina de bajo peso molecular y diferir intervención valvular hasta estabilización clínica en 48–72 horas.",
        distractorProfile: "diferir_cirugia_im_aguda",
        incorrectFeedback:
          "La insuficiencia mitral aguda por ruptura de músculo papilar en choque requiere corrección quirúrgica urgente; solo anticoagular no resuelve la falla mecánica.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "IAM anterior complicado con insuficiencia mitral aguda por ruptura del músculo papilar y choque cardiogénico. La conducta que modifica mortalidad es soporte hemodinámico (vasopresores, vía aérea si precisa) más BCIA como puente y cirugía valvular de urgencia.",
    keyPoints: [
      "Nuevo soplo + edema pulmonar post-IAM → pensar complicación mecánica.",
      "IM aguda con choque: BCIA + cirugía urgente.",
      "Evitar vasodilatadores y volumen masivo en hipotensión con congestión pulmonar.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-02",
    university: "UCC",
    examArea: "Medicina Interna / Cardiología / Insuficiencia cardíaca",
    topic: "Cardiología",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "cardiologia", "ic_aguda", "edema_pulmonar"],
    statement:
      "Mujer de 63 años con antecedente de cardiopatía isquémica crónica y fracción de eyección del 30% consulta por disnea paroxística nocturna y ortopnea de 3 días. Refiere tos con esputo rosado y no tolera el decúbito. Signos vitales: PA 168/95 mmHg, FC 112 lpm, FR 28 rpm, SpO2 90% al aire ambiente. Examen físico: crepitantes bilaterales hasta ápices, ingurgitación yugular a 45°, edema en miembros inferiores ++/+++. Rx de tórax: redistribución vascular y congestión hiliar bilateral. BNP 1850 pg/mL. Creatinina 1.4 mg/dL (basal 1.1). ¿Cuál es el manejo inicial MÁS apropiado?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar betabloqueador oral de acción prolongada en dosis plenas para controlar la taquicardia y reducir el consumo miocárdico de oxígeno.",
        distractorProfile: "bbloq_ic_aguda_descompensada",
        incorrectFeedback:
          "En IC aguda descompensada con congestión pulmonar, iniciar betabloqueador puede empeorar la falla ventilatoria y el gasto cardíaco.",
      },
      {
        id: "B",
        label: "B",
        text: "Oxígeno suplementario, diurético de asa intravenoso y vasodilatador intravenoso (nitroglicerina) con monitorización hemodinámica según respuesta.",
      },
      {
        id: "C",
        label: "C",
        text: "Intubación orotraqueal de inmediato y ventilación mecánica invasiva sin intentar medidas de descongestión previas.",
        distractorProfile: "intubacion_sin_descongestion",
        incorrectFeedback:
          "La intubación está indicada si hipoxemia refractaria o agotamiento ventilatorio; primero se descongestiona con diuréticos y vasodilatadores si la presión arterial lo permite.",
      },
      {
        id: "D",
        label: "D",
        text: "Expansión con solución salina al 0.9% 500 mL para mejorar el gasto cardíaco por el efecto Frank-Starling.",
        distractorProfile: "volumen_ic_congestiva",
        incorrectFeedback:
          "En edema pulmonar cardiogénico la sobrecarga de volumen agrava la congestión alveolar.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "IC aguda descompensada hipertensiva con edema pulmonar: manejo inicial con oxígeno, furosemida IV y nitroglicerina IV (si PA lo permite) para descongestión rápida. Betabloqueadores se reinician cuando esté euvolémica y estable.",
    keyPoints: [
      "IC aguda descompensada: descongestionar primero (diurético ± vasodilatador).",
      "Betabloqueador contraindicado al inicio de la descompensación aguda.",
      "Intubación solo si falla la terapia médica o agotamiento ventilatorio.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-03",
    university: "UCC",
    examArea: "Medicina Interna / Coagulación / Neumología",
    topic: "Medicina Interna",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "tep", "submasivo", "anticoagulacion"],
    statement:
      "Mujer de 59 años, en quinto día de posoperatorio de histerectomía abdominal por mioma uterino, consulta por disnea de inicio súbito y dolor torácico pleurítico derecho. Signos vitales: PA 118/76 mmHg, FC 118 lpm, FR 26 rpm, SpO2 91% al aire ambiente. Examen físico: taquipnea leve, sin crepitantes, pantorrilla izquierda con aumento de volumen y dolor a la palpación. D-dímero 4200 ng/mL. Troponina I 0.08 ng/mL (elevada). Ecocardiograma: ventrículo derecho dilatado, movimiento anómalo del septum interventricular, TAPSE 14 mm. Angio-TAC de tórax: defectos de repleción en arterias segmentarias bilaterales sin infarto pulmonar. ¿Cuál es la conducta MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Alta con observación ambulatoria y control con D-dímero seriado en 48 horas dado que mantiene estabilidad hemodinámica.",
        distractorProfile: "alta_tep_intermedio",
        incorrectFeedback:
          "TEP con disfunción del ventrículo derecho y troponina elevada es riesgo intermedio-alto; requiere hospitalización y anticoagulación inmediata, no observación ambulatoria.",
      },
      {
        id: "B",
        label: "B",
        text: "Trombolisis sistémica con alteplasa de inmediato por el riesgo de embolismo recurrente fatal.",
        distractorProfile: "trombolisis_tep_estable",
        incorrectFeedback:
          "La trombolisis está indicada en TEP de alto riesgo (inestabilidad hemodinámica). En TEP submasivo estable no es rutinaria.",
      },
      {
        id: "C",
        label: "C",
        text: "Anticoagulación plena inmediata (heparina no fraccionada o heparina de bajo peso molecular) y monitorización en unidad de cuidado intermedio o intensivo.",
      },
      {
        id: "D",
        label: "D",
        text: "Colocación de filtro de vena cava inferior como terapia principal y aplazamiento de la anticoagulación por riesgo de sangrado posquirúrgico.",
        distractorProfile: "filtro_vci_sin_anticoagulacion",
        incorrectFeedback:
          "El filtro de vena cava no sustituye la anticoagulación en TEP agudo confirmado; se reserva para contraindicación absoluta al anticoagulante.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "TEP agudo submasivo (estable hemodinámicamente con disfunción de VD y troponina elevada): anticoagulación plena urgente y vigilancia en UCI/UCI intermedia. Trombolisis reservada para choque o inestabilidad hemodinámica.",
    keyPoints: [
      "TEP + VD dilatado + troponina = riesgo intermedio-alto.",
      "Anticoagulación inmediata; no trombolisis si está estable.",
      "Filtro de vena cava no reemplaza anticoagulación.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-04",
    university: "UCC",
    examArea: "Medicina Interna / Neumología / Urgencias",
    topic: "Neumología",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "epoc", "exacerbacion", "vni"],
    statement:
      "Hombre de 68 años con antecedente de EPOC GOLD D (FEV1 28% predicho) y oxígeno domiciliario consulta por aumento de disnea, cambio en el color y volumen de esputo, y somnolencia diurna progresiva de 2 días. Signos vitales: PA 145/88 mmHg, FC 105 lpm, FR 32 rpm, SpO2 84% con O2 nasal a 2 L/min. Examen físico: uso de musculatura accesoria, disminución del murmullo vesicular con sibilancias difusas, flapping tremor leve. Gases arteriales (FiO2 ~0.28): pH 7.28, PaCO2 68 mmHg, PaO2 52 mmHg, HCO3 32 mEq/L. Rx de tórax sin consolidación nueva. ¿Cuál es la intervención MÁS apropiada en este momento?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Aumentar el flujo de oxígeno nasal a 6 L/min para corregir la hipoxemia sin otras medidas ventilatorias.",
        distractorProfile: "o2_alto_epoc_retenedor",
        incorrectFeedback:
          "En EPOC con hipercapnia aguda, el oxígeno en altas concentraciones puede empeorar la retención de CO2 y la acidosis respiratoria.",
      },
      {
        id: "B",
        label: "B",
        text: "Ventilación no invasiva con presión positiva (BiPAP), broncodilatadores nebulizados y corticoide sistémico, ajustando FiO2 para SpO2 objetivo 88–92%.",
      },
      {
        id: "C",
        label: "C",
        text: "Intubación orotraqueal inmediata e inicio de ventilación mecánica invasiva sin intentar ventilación no invasiva.",
        distractorProfile: "intubacion_sin_vni",
        incorrectFeedback:
          "La VNI es primera línea en exacerbación aguda de EPOC con acidosis respiratoria (pH 7.25–7.35) sin contraindicación; intubar si falla VNI o paro cardiorrespiratorio.",
      },
      {
        id: "D",
        label: "D",
        text: "Antibiótico empírico de amplio espectro como única medida terapéutica y reevaluación en 24 horas.",
        distractorProfile: "atb_sin_soporte_ventilatorio",
        incorrectFeedback:
          "Hay acidosis respiratoria aguda con signos de insuficiencia ventilatoria; requiere soporte ventilatorio no invasivo además de broncodilatadores y esteroides.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Exacerbación aguda de EPOC con acidosis respiratoria (pH 7.28, PaCO2 68) sin contraindicación: VNI (BiPAP) es tratamiento de primera línea junto con broncodilatadores, corticoides y oxígeno titulado (SpO2 88–92%).",
    keyPoints: [
      "EPOC + pH <7.35 + PaCO2 elevada → indicación de VNI.",
      "Oxígeno titulado; evitar hiperoxigenación en retenedores.",
      "Intubación si falla VNI o deterioro clínico.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-05",
    university: "UCC",
    examArea: "Medicina Interna / Neumología / Infectología",
    topic: "Neumología",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "nac", "neumonia", "sepsis"],
    statement:
      "Hombre de 58 años con diabetes mellitus tipo 2 mal controlada consulta por fiebre, escalofríos, tos productiva con esputo purulento y dolor torácico derecho de 4 días. Signos vitales: PA 92/58 mmHg, FC 124 lpm, FR 30 rpm, SpO2 89% al aire ambiente, temperatura 39.2 °C. Examen físico: paciente confuso, estertores y matidez en base pulmonar derecha. Laboratorios: leucocitos 18 500/mm³, lactato 3.8 mmol/L, creatinina 2.1 mg/dL. Rx de tórax: consolidación lobar en lóbulo inferior derecho con broncograma aéreo. CURB-65: 4 puntos. ¿Cuál es el manejo inicial MÁS apropiado?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Manejo ambulatorio con amoxicilina-ácido clavulánico oral y control en 72 horas dado que es joven y sin comorbilidades graves.",
        distractorProfile: "ambulatorio_nac_grave",
        incorrectFeedback:
          "CURB-65 de 4 puntos, hipotensión, lactato elevado y alteración del sensorio indican neumonía grave que requiere hospitalización y manejo en UCI.",
      },
      {
        id: "B",
        label: "B",
        text: "Reanimación con cristaloides, oxígeno suplementario, hemocultivos, antibiótico empírico intravenoso de amplio espectro y valoración de cuidado crítico.",
      },
      {
        id: "C",
        label: "C",
        text: "Azitromicina oral en monoterapia y observación en sala de urgencias por 6 horas antes de decidir ingreso.",
        distractorProfile: "macrolido_monoterapia_grave",
        incorrectFeedback:
          "La neumonía grave con shock séptico requiere antibiótico IV de amplio espectro de inmediato (beta-lactámico + macrólido o fluoroquinolona según guía).",
      },
      {
        id: "D",
        label: "D",
        text: "Solicitar TAC de tórax con contraste antes de iniciar antibióticos para confirmar diagnóstico etiológico.",
        distractorProfile: "retrasar_atb_por_imagen",
        incorrectFeedback:
          "En sepsis por neumonía no se debe retrasar antibióticos para estudios de imagen; la Rx ya confirma consolidación lobar.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Neumonía adquirida en comunidad grave con criterios de sepsis: reanimación con fluidos, oxígeno, cultivos previos y antibiótico IV empírico inmediato (ej. ceftriaxona + azitromicina o monoterapia con respiratoria fluoroquinolona según contexto local) e ingreso a UCI.",
    keyPoints: [
      "CURB-65 ≥3–4 o inestabilidad hemodinámica = neumonía grave.",
      "Antibiótico IV en la primera hora; no retrasar por cultivos/imagen.",
      "Reanimación séptica con cristaloides y evaluación de UCI.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-06",
    university: "UCC",
    examArea: "Medicina Interna / Infectología / Urgencias",
    topic: "Urgencias",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "sepsis", "shock_septico", "surviving_sepsis"],
    statement:
      "Mujer de 47 años consulta por fiebre alta, dolor en fosa ilíaca derecha y vómitos de 18 horas. Signos vitales: PA 88/52 mmHg, FC 132 lpm, FR 28 rpm, temperatura 39.8 °C, SpO2 94% al aire ambiente. Examen físico: abdomen con defensa en cuadrante inferior derecho, signo de Blumberg positivo. Lactato 4.2 mmol/L; leucocitos 22 000/mm³. Se confirma sospecha de sepsis de origen abdominal. ¿Cuál es el siguiente paso MÁS apropiado según el bundle de la primera hora?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Tomografía abdominal con contraste antes de cualquier intervención para confirmar apendicitis y planear cirugía electiva.",
        distractorProfile: "tac_antes_bundle",
        incorrectFeedback:
          "En shock séptico no se debe retrasar reanimación ni antibióticos para estudios de imagen; la TAC puede hacerse cuando estabilice si es necesaria.",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar antibiótico de amplio espectro, tomar hemocultivos, iniciar cristaloides 30 mL/kg en las primeras 3 horas y valorar vasopresores si persiste hipotensión.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar vasopresores con noradrenalina como primera medida antes de administrar cualquier volumen intravenoso.",
        distractorProfile: "vasopresor_sin_volumen",
        incorrectFeedback:
          "Surviving Sepsis recomienda reanimación con cristaloides primero; vasopresores si hipotensión persiste tras volumen adecuado.",
      },
      {
        id: "D",
        label: "D",
        text: "Observación con analgesia y antieméticos, diferir antibióticos hasta resultado de laboratorio de orina y hemocultivo en 24 horas.",
        distractorProfile: "diferir_atb_sepsis",
        incorrectFeedback:
          "En sepsis con hipotensión y lactato elevado, el antibiótico empírico debe administrarse en la primera hora; diferir aumenta mortalidad.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Sepsis/shock séptico: bundle de primera hora con medición de lactato, hemocultivos, antibiótico empírico IV precoz, cristaloides 30 mL/kg y vasopresores si hipotensión refractaria. Apendicitis complicada requerirá cirugía source control cuando estabilice.",
    keyPoints: [
      "Sepsis: antibiótico en la primera hora.",
      "Cristaloides 30 mL/kg antes de escalar vasopresores.",
      "No retrasar manejo por estudios de imagen en shock.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q
Esta es una pregunta mandatoria de urgencias y UCI porque evalúa tu adherencia al paquete de reanimación de la primera hora (Surviving Sepsis Campaign) en un paciente que se está chocando frente a ti.
La clave no es diagnosticar el foco quirúrgico primero.
La clave es:
Foco Infeccioso + Hipotensión/Lactato alto = Sepsis/Shock Séptico → Iniciar antibióticos y cristaloides en la primera hora SIN retrasos por imágenes.
¿Qué está ocurriendo realmente?
La paciente presenta:
• Fiebre, dolor en fosa ilíaca derecha y defensa abdominal (sospecha de apendicitis complicada / peritonitis).
• Hipotensión severa (88/52 mmHg) y taquicardia (132 lpm).
• Hiperlactatemia (4.2 mmol/L) e hiperleucocitosis (22,000).
Estos hallazgos son indicativos de:
Sepsis de origen abdominal evolucionando a choque séptico.
¿Por qué la opción B es la respuesta correcta?
Según las guías internacionales (Surviving Sepsis), el "Hour-1 Bundle" exige: medir lactato, tomar hemocultivos ANTES del antibiótico (si no retrasa su inicio), administrar antibióticos de amplio espectro e iniciar reanimación hídrica rápida con cristaloides (30 mL/kg) para la hipotensión o lactato > 4. Los vasopresores van después si el paciente no responde a los líquidos.
¿Por qué NO Tomografía abdominal primero (Opción A)?
Un paciente inestable NUNCA va al tomógrafo. La reanimación (líquidos, antibióticos) debe comenzar de inmediato. El "source control" (control quirúrgico) es fundamental, pero no debes retrasar los antibióticos y los líquidos por una imagen.
¿Por qué NO iniciar vasopresores primero (Opción C)?
La noradrenalina es el vasopresor de elección en choque séptico, pero la regla de oro de la reanimación es: "no exprimas un tanque vacío". Primero debes llenar el volumen intravascular con el bolo de cristaloides a 30 mL/kg.
¿Por qué NO diferir antibióticos (Opción D)?
Cada hora de retraso en la administración del antibiótico empírico en un paciente con choque séptico incrementa drásticamente la mortalidad (aproximadamente un 7.6% por hora). Jamás esperes cultivos para iniciar el tratamiento empírico.
¿Cuál es la trampa del examen?
Muchos estudiantes, al ver abdomen agudo, se inclinan por "Cirugía inmediata" o "Tomografía para confirmar", olvidando que el paciente se está muriendo de choque.
Sin embargo:
La estabilización inicial y el antibiótico matan a las bacterias circulantes; la cirugía vendrá muy poco tiempo después para erradicar el foco.
Perlas de examen
✅ Bundle de Sepsis de la 1° hora: Medir lactato, Hemocultivos, Antibiótico IV, Cristaloides (30 mL/kg).
✅ Meta de reanimación inicial: PAM ≥ 65 mmHg y depuración de lactato.
✅ Vasopresor de elección: Noradrenalina (solo tras o simultáneo a adecuada reanimación hídrica si hay hipotensión profunda).
✅ Nunca se deben retrasar los antibióticos por ir a imagen (TAC/Eco) en un paciente con inestabilidad hemodinámica.
Referencias
• Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock.
• UpToDate: Evaluation and management of suspected sepsis and septic shock in adults.`,
  },
  {
    id: "ucc-conv-2025-06-21-07",
    university: "UCC",
    examArea: "Medicina Interna / Nefrología",
    topic: "Nefrología",
    difficulty: "easy",
    tags: ["ucc", "convocatoria", "2025_06_21", "ira", "prerrenal", "deshidratacion"],
    statement:
      "Hombre de 78 años con antecedente de insuficiencia cardíaca e hipertensión arterial, en tratamiento con furosemida 40 mg/día y lisinopril 20 mg/día, es traído por familia por somnolencia, oliguria de 2 días y vómitos. Signos vitales: PA 98/60 mmHg, FC 102 lpm, FR 18 rpm. Examen físico: mucosas secas, turgor disminuido, ingurgitación yugular ausente, extremidades frías sin edema. Laboratorios: creatinina 2.8 mg/dL (basal 1.0), urea 98 mg/dL, sodio 148 mEq/L, potasio 4.8 mEq/L. Orina: densidad 1.030, sedimento inocuo; fracción excreción de sodio (FENa) 0.4%. ¿Cuál es la conducta inicial MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Suspender furosemida y lisinopril, e iniciar expansión cautelosa con solución salina al 0.9% con reevaluación de función renal en 24–48 horas.",
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar hemodiálisis de urgencia por criterios de uremia sintomática y hiperpotasemia inminente.",
        distractorProfile: "dialisis_ira_prerrenal",
        incorrectFeedback:
          "No hay criterios de diálisis de urgencia; la FENa <1% y el contexto clínico sugieren IRA prerrenal reversible con reposición de volumen.",
      },
      {
        id: "C",
        label: "C",
        text: "Aumentar la dosis de furosemida para forzar diuresis y corregir la oliguria.",
        distractorProfile: "diuretico_ira_prerrenal",
        incorrectFeedback:
          "En IRA prerrenal por depleción de volumen, los diuréticos empeoran la perfusión renal y la función renal.",
      },
      {
        id: "D",
        label: "D",
        text: "Biopsia renal de urgencia para determinar etiología antes de cualquier manejo médico.",
        distractorProfile: "biopsia_ira_prerrenal",
        incorrectFeedback:
          "La biopsia no está indicada en sospecha clara de IRA prerrenal; el manejo es corrección de la causa (volumen, suspender nefrotóxicos).",
      },
    ],
    correctOptionId: "A",
    explanation:
      "IRA prerrenal por depleción de volumen (vómitos, diurético, IECA, FENa <1%, urea/creatinina elevada, densidad urinaria alta): suspender fármacos que empeoran perfusión y reponer volumen con cristaloides.",
    keyPoints: [
      "FENa <1% + contexto de depleción → IRA prerrenal.",
      "Suspender diuréticos e IECA/ARA II.",
      "Cristaloides antes que diálisis o biopsia.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-08",
    university: "UCC",
    examArea: "Medicina Interna / Nefrología / Endocrinología",
    topic: "Nefrología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_06_21", "hiponatremia", "siadh", "solucion_hipertónica"],
    statement:
      "Mujer de 72 años con antecedente de carcinoma pulmonar de células pequeñas es traída por convulsión tónico-clónica generalizada en vía pública. Al recuperar conciencia refiere cefalea intensa y náuseas. Signos vitales: PA 130/80 mmHg, FC 88 lpm. Neurológico: somnolienta pero obedece órdenes, sin déficit focal. Laboratorios: sodio sérico 118 mEq/L, osmolalidad plasmática 255 mOsm/kg, sodio urinario 65 mEq/L, osmolalidad urinaria 520 mOsm/kg. Glucosa y función renal normales. ¿Cuál es el manejo inicial MÁS apropiado?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Restricción hídrica estricta como única medida y reevaluación en 48 horas.",
        distractorProfile: "restriccion_hiponatremia_severa_sintomatica",
        incorrectFeedback:
          "En hiponatremia severa sintomática (convulsión) la restricción hídrica sola es insuficiente y lenta; requiere corrección activa con solución hipertónica.",
      },
      {
        id: "B",
        label: "B",
        text: "Infusión de solución salina al 3% intravenosa en bolos guiados por síntomas, con meta de corrección limitada (≤6 mEq/L en las primeras 24 horas).",
      },
      {
        id: "C",
        label: "C",
        text: "Administrar solución salina al 0.9% en infusión rápida continua sin límite de velocidad para normalizar el sodio en menos de 6 horas.",
        distractorProfile: "correccion_rapida_mielinolisis",
        incorrectFeedback:
          "Corregir >8–10 mEq/L en 24 h aumenta el riesgo de mielinolisis pontina osmótica; en hiponatremia crónica la meta es ≤6–8 mEq/L en 24 h.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar tolvaptán oral de inmediato como primera línea en urgencias antes de cualquier solución hipertónica.",
        distractorProfile: "vaptan_urgencia_sintomatica",
        incorrectFeedback:
          "Los antagonistas de la vasopresina (vaptanes) no son primera línea en hiponatremia aguda sintomática; se usa solución hipertónica 3% en convulsión.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Hiponatremia severa sintomática (Na 118, convulsión), probable SIADH por cáncer pulmonar: bolos de solución salina al 3% para aliviar síntomas neurológicos, limitando corrección a ≤6 mEq/L en 24 h para evitar mielinolisis.",
    keyPoints: [
      "Hiponatremia sintomática (convulsión) → salina al 3%.",
      "Limitar corrección: ≤6 mEq/L en 24 h (crónica).",
      "Restricción hídrica insuficiente en emergencia sintomática.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-09",
    university: "UCC",
    examArea: "Medicina Interna / Endocrinología / Urgencias",
    topic: "Endocrinología",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "cad", "dm1", "hipokalemia"],
    statement:
      "Joven de 19 años con diabetes mellitus tipo 1 conocida consulta por poliuria, polidipsia, vómitos y dolor abdominal de 36 horas. Signos vitales: PA 100/65 mmHg, FC 118 lpm, FR 32 rpm (respiración de Kussmaul). Examen físico: deshidratación moderada, aliento cetósico. Paraclínicos: glucosa 520 mg/dL; pH 7.12, HCO3 8 mEq/L, PaCO2 22 mmHg; potasio 3.0 mEq/L; sodio 130 mEq/L; brecha aniónica 22. ¿Cuál es la conducta terapéutica INMEDIATA más apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar infusión de insulina regular intravenosa a 0.1 U/kg/h de inmediato para frenar la cetogénesis.",
        distractorProfile: "insulina_k_menor_3_3",
        incorrectFeedback:
          "Con potasio <3.3 mEq/L la insulina desplaza K+ al interior celular y puede provocar arritmias graves; debe posponerse hasta K+ ≥3.3 mEq/L.",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar bicarbonato de sodio IV porque el pH es <7.2 y existe riesgo de colapso cardiovascular inminente.",
        distractorProfile: "bicarbonato_cad_rutinario",
        incorrectFeedback:
          "El bicarbonato no se recomienda rutinariamente en CAD salvo pH <6.9; no corrige la cetosis y puede empeorar hipokalemia e edema cerebral.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar reanimación con solución salina al 0.9% y reposición de potasio, posponiendo insulina IV hasta alcanzar potasio sérico ≥3.3 mEq/L.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar insulina subcutánea de acción rápida y hidratación oral por vía enteral dado que mantiene presión arterial estable.",
        distractorProfile: "insulina_sc_cad_severa",
        incorrectFeedback:
          "En CAD severa con vómitos la absorción subcutánea es impredecible; el estándar es insulina IV tras corrección del potasio.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "CAD con K+ 3.0 mEq/L: prioridad reanimación con cristaloides y reposición de potasio; la insulina IV se inicia cuando K+ ≥3.3 mEq/L (ADA). El potasio sérico normal en CAD enmascara depleción total corporal.",
    keyPoints: [
      "K+ <3.3 mEq/L → posponer insulina en CAD.",
      "Orden: volumen → potasio → insulina IV.",
      "No bicarbonato rutinario si pH >6.9.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-10",
    university: "UCC",
    examArea: "Medicina Interna / Neurología / Urgencias",
    topic: "Neurología",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "acv", "trombolisis", "ventana_terapeutica"],
    statement:
      "Hombre de 67 años es traído a urgencias 2 horas y 15 minutos después de inicio súbito de debilidad en hemicuerpo izquierdo y desviación de la comisura labial. Antecedentes: hipertensión arterial controlada, sin anticoagulación. Signos vitales: PA 172/96 mmHg, FC 88 lpm. NIHSS 14. TAC de cráneo simple sin hemorragia; ASPECTS 8. Glucosa 110 mg/dL; plaquetas 210 000/mm³; INR 1.0. No hay cirugía mayor reciente ni sangrado activo. ¿Cuál es la conducta MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar aspirina 325 mg de carga como única terapia aguda y programar resonancia magnética ambulatoria en 48 horas.",
        distractorProfile: "aspirina_sin_trombolisis_elegible",
        incorrectFeedback:
          "En ACV isquémico agudo dentro de ventana terapéutica sin contraindicaciones, la trombolisis IV modifica el desenlace funcional; la aspirina se da después o concomitante según protocolo, no sustituye alteplasa.",
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar alteplasa intravenosa según protocolo de ACV isquémico agudo tras confirmar ausencia de hemorragia en neuroimagen.",
      },
      {
        id: "C",
        label: "C",
        text: "Reducir la presión arterial a <140/90 mmHg de inmediato con labetalol IV antes de cualquier otra intervención, aun sin iniciar trombolisis.",
        distractorProfile: "hipotension_pre_tpa",
        incorrectFeedback:
          "Antes de trombolisis se permite PA hasta 185/110 mmHg; reducir agresivamente sin indicación puede comprometer perfusión del penumbra isquémica.",
      },
      {
        id: "D",
        label: "D",
        text: "Observación clínica y repetir TAC en 24 horas porque el déficit neurológico podría corresponder a un accidente isquémico transitorio.",
        distractorProfile: "ait_vs_acv_agudo",
        incorrectFeedback:
          "NIHSS 14 a las 2 h post-inicio es ACV isquémico agudo, no AIT; dentro de ventana de 4.5 h con ASPECTS favorable es candidato a trombolisis.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "ACV isquémico agudo dentro de 4.5 h, NIHSS 14, ASPECTS 8, sin hemorragia ni contraindicaciones: indicación de trombolisis IV con alteplasa. Controlar PA si >185/110 antes/durante tPA.",
    keyPoints: [
      "Ventana trombolisis IV: ≤4.5 h desde inicio.",
      "TAC simple sin sangrado es suficiente para iniciar tPA.",
      "No retrasar por RM si cumple criterios.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-11",
    university: "UCC",
    examArea: "Medicina Interna / Gastroenterología / Hepatología",
    topic: "Gastroenterología",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "hda", "varices", "cirrosis"],
    statement:
      "Hombre de 52 años con cirrosis por enfermedad hepática alcohólica consulta por hematemesis en gran cantidad y melena de 6 horas. Signos vitales: PA 90/55 mmHg, FC 118 lpm. Examen físico: ictericia leve, ascitis grado II, esplenomegalia, telangiectasias. Laboratorios: hemoglobina 7.2 g/dL, plaquetas 68 000/mm³, INR 1.9, bilirrubina total 3.8 mg/dL, creatinina 1.0 mg/dL. Se estabiliza con cristaloides y transfusión de concentrado eritrocitario. ¿Cuál es el manejo farmacológico y de soporte MÁS apropiado mientras se organiza endoscopia urgente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Octreótido intravenoso, profilaxis antibiótica (ej. ceftriaxona) y transfusión restrictiva con meta de hemoglobina 7–8 g/dL; endoscopia en menos de 12 horas.",
        distractorProfile: "meta_hb_alta_varices",
        incorrectFeedback:
          "En HDA variceal la transfusión restrictiva (Hb ~7–8 g/dL) reduce la presión portal y re-sangrado; objetivos más altos aumentan riesgo de resangrado.",
      },
      {
        id: "B",
        label: "B",
        text: "Inhibidor de bomba de protones en dosis dobles como monoterapia principal sin vasoconstrictor esplácnico ni antibiótico.",
        distractorProfile: "ibp_solo_varices",
        incorrectFeedback:
          "El IBP es central en úlcera péptica, no en varices; en sangrado variceal se usa octreótido/terlipresina más antibiótico profiláctico.",
      },
      {
        id: "C",
        label: "C",
        text: "Transfusión agresiva hasta hemoglobina >12 g/dL, betabloqueador no selectivo IV y endoscopia diferida a 72 horas.",
        distractorProfile: "transfusion_agresiva_endoscopia_tardia",
        incorrectFeedback:
          "Transfusión liberal y betabloqueador agudo en sangrado activo empeoran el sangrado; endoscopia debe ser urgente (<12 h) en HDA variceal.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar warfarina a dosis terapéutica para prevenir trombosis portal y diferir endoscopia hasta corrección del INR.",
        distractorProfile: "anticoagulacion_hda",
        incorrectFeedback:
          "Anticoagular en hemorragia activa es contraindicado; el INR elevado se corrige con plasma/vitamina K según necesidad para procedimiento, no con warfarina.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "HDA variceal en cirrótico: octreótido (o terlipresina), antibiótico profiláctico (ceftriaxona), transfusión restrictiva y endoscopia urgente con ligadura. IBP no es tratamiento principal de varices.",
    keyPoints: [
      "Varices: octreótido + ceftriaxona + endoscopia <12 h.",
      "Transfusión restrictiva Hb 7–8 g/dL.",
      "IBP no sustituye vasoconstrictor esplácnico en varices.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-12",
    university: "UCC",
    examArea: "Medicina Interna / Infectología / Salud Pública",
    topic: "Infectología",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "dengue", "signos_alarma", "colombia"],
    statement:
      "Adolescente de 16 años del área rural del Pacífico colombiano consulta al cuarto día de enfermedad febril (39.5 °C), cefalea retroorbitaria, mialgias y dolor abdominal. Signos vitales: PA 100/65 mmHg, FC 102 lpm, FR 20 rpm. Examen físico: enantema conjuntival leve, prueba del lazo positiva, dolor a la palpación en epigastrio e hipocondrio derecho, hepatomegalia dolorosa. Laboratorios: hematocrito 46% (basal 40%), plaquetas 95 000/mm³, leucocitos 3200/mm³. Prueba NS1 positiva. ¿Cuál es la conducta MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Alta con ibuprofeno cada 8 horas, hidratación oral abundante en casa y control ambulatorio en 48 horas.",
        distractorProfile: "aine_dengue_signos_alarma",
        incorrectFeedback:
          "Los AINE están contraindicados en dengue por riesgo de sangrado; además hay signos de alarma (dolor abdominal, hepatomegalia, plaquetopenia, hematocrito en ascenso) que requieren hospitalización.",
      },
      {
        id: "B",
        label: "B",
        text: "Hospitalización, hidratación intravenosa guiada por signos vitales y hematocrito seriado, acetaminofén para fiebre y vigilancia estrecha de signos de choque.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar antibiótico empírico con ceftriaxona por sospecha de leptospirosis concomitante sin necesidad de hospitalización.",
        distractorProfile: "atb_dengue_confirmado",
        incorrectFeedback:
          "El NS1 confirma dengue; no hay indicación de antibiótico empírico rutinario. Los signos de alarma indican manejo hospitalario con líquidos IV.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar expansión agresiva con 2000 mL de cristaloides en bolo único independientemente de la presión arterial.",
        distractorProfile: "volumen_agresivo_dengue",
        incorrectFeedback:
          "En dengue la reanimación es guiada por hematocrito y signos de perfusión; la expansión agresiva ciega puede precipitar edema pulmonar y sobrecarga hídrica.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Dengue con signos de alarma (dolor abdominal, hepatomegalia, plaquetopenia, incremento de hematocrito): hospitalizar, hidratación IV titulada, paracetamol (no AINE), monitorizar hematocrito y signos de choque por extravasación plasmática.",
    keyPoints: [
      "Signos de alarma → hospitalización.",
      "No AINE en dengue; usar acetaminofén.",
      "Líquidos IV titulados; no bolos masivos ciegos.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-13",
    university: "UCC",
    examArea: "Medicina Interna / Infectología / Salud Pública",
    topic: "Infectología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_06_21", "malaria", "plasmodium_falciparum", "colombia"],
    statement:
      "Hombre de 34 años, soldado recientemente retirado del servicio en zona rural de Nariño, consulta por fiebre intermitente de 5 días, cefalea intensa, vómitos y ictericia. Signos vitales: PA 100/70 mmHg, FC 108 lpm, temperatura 39.6 °C. Examen físico: esplenomegalia dolorosa, ictericia esclerótica. Laboratorios: hemoglobina 9.8 g/dL, bilirrubina total 6.2 mg/dL, creatinina 1.8 mg/dL, plaquetas 85 000/mm³. Gota gruesa: formas trofozoítas de Plasmodium falciparum con 8% de parasitemia. ¿Cuál es el tratamiento MÁS apropiado?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Cloroquina oral en monoterapia durante 3 días según esquema clásico de malaria no complicada.",
        distractorProfile: "cloroquina_falciparum",
        incorrectFeedback:
          "P. falciparum en Colombia tiene alta resistencia a cloroquina; no debe usarse cloroquina sola para falciparum.",
      },
      {
        id: "B",
        label: "B",
        text: "Artesunato intravenoso (o derivado de artemisinina) con hospitalización y seguimiento de parasitemia, función renal y hemoglobina.",
      },
      {
        id: "C",
        label: "C",
        text: "Primaquina oral en monoterapia desde el inicio del tratamiento ambulatorio.",
        distractorProfile: "primaquina_monoterapia_aguda",
        incorrectFeedback:
          "La primaquina erradica hipnozoítos (radical curative) en vivax/ovale; en falciparum agudo grave el tratamiento de elección es artemisininas, no primaquina sola.",
      },
      {
        id: "D",
        label: "D",
        text: "Manejo sintomático con antipiréticos y observación ambulatoria, repetir gota gruesa en 7 días.",
        distractorProfile: "observacion_malaria_grave",
        incorrectFeedback:
          "Parasitemia 8% con ictericia, vómitos y disfunción renal sugiere malaria grave/complicada; requiere hospitalización y tratamiento IV urgente.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Malaria por P. falciparum con criterios de gravedad (parasitemia elevada, ictericia, insuficiencia renal): hospitalizar y tratar con artesunato IV (o artemether/lumefantrina oral si no hay disponibilidad IV en caso no grave según guía MSP). Cloroquina no es efectiva para falciparum en Colombia.",
    keyPoints: [
      "Falciparum en Colombia: no cloroquina sola.",
      "Parasitemia >5% o criterios de gravedad → artesunato IV.",
      "Primaquina no es tratamiento agudo de falciparum.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-14",
    university: "UCC",
    examArea: "Medicina Interna / Infectología / Salud Pública",
    topic: "Infectología",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "leptospirosis", "colombia", "zoonosis"],
    statement:
      "Varón de 41 años, agricultor en zona inundada del Putumayo, consulta por fiebre de 6 días, mialgias intensas, cefalea y vómitos. Refiere exposición a agua de lluvia contaminada hace 10 días. Signos vitales: PA 105/68 mmHg, FC 104 lpm, temperatura 39.0 °C. Examen físico: conjuntivas ictericia, dolor a la palpación muscular difuso, hepatomegalia dolorosa. Laboratorios: creatinina 2.4 mg/dL, bilirrubina total 8.5 mg/dL, AST 180 U/L, ALT 95 U/L, plaquetas 72 000/mm³. Rx de tórax normal. Prueba rápida de dengue negativa. ¿Cuál es la conducta MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Alta con hidratación oral y antipiréticos; solicitar serología de leptospirosis ambulatoria y reevaluar en una semana.",
        distractorProfile: "alta_leptospirosis_grave",
        incorrectFeedback:
          "Ictericia, insuficiencia renal y plaquetopenia sugieren leptospirosis de moderada a severa (síndrome de Weil); requiere hospitalización y antibiótico IV.",
      },
      {
        id: "B",
        label: "B",
        text: "Hospitalización, doxiciclina o penicilina G intravenosa según gravedad, soporte de función renal y monitorización de complicaciones (hemorragia, ARDS).",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar oseltamivir empírico por sospecha de influenza de alta virulencia en contexto de brote estacional.",
        distractorProfile: "oseltamivir_leptospirosis",
        incorrectFeedback:
          "El cuadro (ictericia, IRA, exposición hídrica rural, mialgias severas) orienta a leptospirosis, no influenza; el tratamiento es antibiótico específico.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar ceftriaxona solo si confirma leptospirosis por ELISA, diferir tratamiento hasta resultado de laboratorio en 5 días.",
        distractorProfile: "diferir_atb_leptospirosis",
        incorrectFeedback:
          "En leptospirosis moderada-severa el tratamiento empírico no debe retrasarse a confirmación serológica; iniciar antibiótico al alta sospecha clínico-epidemiológica.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Leptospirosis probable (exposición hídrica, fiebre, mialgias, ictericia, IRA): hospitalizar e iniciar doxiciclina IV o penicilina G IV según gravedad sin esperar confirmación. Soporte renal y vigilancia de complicaciones.",
    keyPoints: [
      "Exposición hídrica + fiebre + mialgias + ictericia → leptospirosis.",
      "Tratar empíricamente si sospecha alta; no esperar serología.",
      "Weil: ictericia + IRA → hospitalización + ATB IV.",
    ],
  },
];
