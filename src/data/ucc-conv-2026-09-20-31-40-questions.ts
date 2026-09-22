import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #8 (20 sep 2026) · Preguntas #31–#40.
 * Banco exclusivo del examen oficial.
 */
export const UCC_CONV_2026_09_20_31_40_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2026-09-20-31",
    university: "UCC",
    examArea: "PEDIATRÍA - NEONATOLOGÍA",
    topic: "Sepsis Neonatal Temprana",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "sepsis-neonatal-temprana"],
    statement:
      "Un recién nacido de 38 semanas de edad gestacional, producto de parto vaginal, es hijo de una madre con fiebre intraparto de 38.6°C y ruptura prematura de membranas de 22 horas de evolución; el estado de colonización por Streptococcus agalactiae (SGB) de la madre es desconocido porque no fue tamizada durante el control prenatal. A las 3 horas de vida el neonato presenta taquipnea de 72 respiraciones por minuto, quejido espiratorio audible, temperatura axilar de 36.0°C e hipoactividad con succión débil al intento de lactancia. Se toman hemocultivos periféricos de inmediato. Mientras se procesan los cultivos y antes de contar con ningún resultado de laboratorio adicional, ¿cuál es la conducta MÁS apropiada en este momento?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar Ceftriaxona intravenosa en monoterapia como antibiótico empírico de elección en este neonato.",
        distractorProfile: "contraindicated_drug_in_neonate",
        incorrectFeedback:
          "La ceftriaxona está contraindicada en el periodo neonatal, especialmente si existe riesgo de hiperbilirrubinemia, porque desplaza la bilirrubina de la albúmina (aumentando el riesgo de kernícterus) y puede formar precipitados de sal cálcica potencialmente fatales al administrarse junto con soluciones o nutrición parenteral que contienen calcio, algo frecuente en neonatos.",
      },
      {
        id: "B",
        label: "B",
        text: "Diferir el inicio de antibióticos hasta contar con los resultados del hemograma completo y la proteína C reactiva (PCR) para confirmar el diagnóstico.",
        distractorProfile: "dangerous_diagnostic_delay",
        incorrectFeedback:
          "En la sepsis neonatal temprana la progresión clínica puede ser fulminante en pocas horas; los reactantes de fase aguda como el hemograma y la PCR tienen baja sensibilidad al inicio del cuadro y NUNCA deben usarse para retrasar el inicio de la antibioticoterapia empírica cuando ya existen factores de riesgo perinatales y signos clínicos sugestivos.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar de inmediato Ampicilina más Gentamicina intravenosas, ya que los hemocultivos fueron tomados previamente.",
      },
      {
        id: "D",
        label: "D",
        text: "Mantener manejo expectante con observación clínica estrecha exclusivamente, sin iniciar antibióticos, dado que el neonato no luce críticamente enfermo.",
        distractorProfile: "false_reassurance_from_appearance",
        incorrectFeedback:
          "Los recién nacidos con sepsis temprana pueden tener una apariencia clínica engañosamente estable en las primeras horas de evolución; ante factores de riesgo perinatales claros (fiebre materna intraparto, ruptura prematura de membranas prolongada, SGB desconocido) más signos clínicos sugestivos (taquipnea, inestabilidad térmica, hipoactividad), está indicado iniciar antibioticoterapia empírica de inmediato, no limitarse a observar.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Este neonato reúne los criterios clásicos de riesgo para **Sepsis Neonatal Temprana**: fiebre materna intraparto, ruptura prematura de membranas mayor a 18 horas y estado de colonización por SGB desconocido, sumados a signos clínicos precoces de sepsis (taquipnea, quejido, inestabilidad térmica, hipoactividad). La sepsis neonatal temprana suele adquirirse por vía vertical (ascendente o durante el paso por el canal del parto) y los patógenos más frecuentes son *Streptococcus agalactiae* (SGB), *Escherichia coli* y, con menor frecuencia, *Listeria monocytogenes*. Dado que la progresión puede ser extremadamente rápida y que los biomarcadores inflamatorios tienen baja sensibilidad en las primeras horas, la conducta estándar es tomar hemocultivos e iniciar de inmediato el esquema antibiótico empírico de primera línea: **Ampicilina más Gentamicina intravenosas**, que cubre de forma sinérgica los patógenos más probables, sin esperar ningún resultado de laboratorio adicional. La ceftriaxona se evita en el neonato por su riesgo de desplazar la bilirrubina de la albúmina y de precipitar con el calcio.",
    keyPoints: [
      "Factores de riesgo perinatales (fiebre materna intraparto, ruptura prematura de membranas prolongada, colonización por SGB desconocida o positiva) más signos clínicos precoces (taquipnea, inestabilidad térmica, hipoactividad) obligan a iniciar antibiótico empírico sin esperar paraclínicos.",
      "Sepsis Neonatal Temprana. Manejo empírico de primera línea: Ampicilina + Gentamicina IV, iniciadas de inmediato tras la toma de hemocultivos. Evitar Ceftriaxona por riesgo de kernícterus y de precipitación cálcica.",
      "Neonatología / Sepsis Neonatal Temprana.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-32",
    university: "UCC",
    examArea: "PEDIATRÍA - NEONATOLOGÍA",
    topic: "Ictericia Neonatal Patológica",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "ictericia-neonatal-patologica"],
    statement:
      "Un recién nacido a término de 39 semanas, alimentado exclusivamente con leche materna, es traído a urgencias a las 96 horas de vida por ictericia progresiva que se extiende hasta las plantas de los pies, succión débil, llanto agudo (\"estridente\") y episodios de hiperextensión del cuello y del tronco en las últimas horas. Los laboratorios muestran bilirrubina total de 26 mg/dL con bilirrubina directa de 0.8 mg/dL (predominio indirecto), test de Coombs directo positivo, grupo sanguíneo materno O positivo y del recién nacido A positivo. El neonato se encuentra bajo fototerapia intensiva desde hace 6 horas sin descenso significativo del nivel de bilirrubina. Dado el cuadro clínico y los niveles séricos, ¿cuál es la conducta terapéutica MÁS urgente en este momento?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Continuar exclusivamente con fototerapia intensiva, aumentando el número de lámparas y reevaluando el nivel de bilirrubina en 24 horas.",
        distractorProfile: "insufficient_therapy_for_encephalopathy",
        incorrectFeedback:
          "Los signos clínicos de hiperextensión del cuello y el tronco, llanto agudo y succión débil indican que ya existe encefalopatía bilirrubínica aguda en curso; continuar solo con fototerapia sin escalar la conducta retrasa la remoción rápida de bilirrubina que se necesita para prevenir el kernícterus establecido.",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar inmunoglobulina intravenosa (IGIV) como única medida terapéutica, dado que existe incompatibilidad ABO con Coombs directo positivo.",
        distractorProfile: "adjunct_mistaken_for_definitive_treatment",
        incorrectFeedback:
          "La IGIV es un tratamiento adyuvante útil en la enfermedad hemolítica isoinmune para reducir la hemólisis y disminuir la probabilidad de requerir exsanguinotransfusión, pero NO reemplaza la exsanguinotransfusión urgente cuando ya hay signos clínicos de encefalopatía bilirrubínica aguda.",
      },
      {
        id: "C",
        label: "C",
        text: "Suspender la lactancia materna de forma definitiva y sustituirla por fórmula, dado que la ictericia por leche materna es la causa más probable de este cuadro.",
        distractorProfile: "wrong_etiology_and_unsafe_delay",
        incorrectFeedback:
          "La \"ictericia por leche materna\" es un diagnóstico de exclusión que aparece después de la primera semana de vida, con bilirrubinas mucho más bajas y sin signos neurológicos; en este caso hay evidencia clara de enfermedad hemolítica isoinmune (Coombs positivo, incompatibilidad ABO) con encefalopatía aguda, que requiere manejo urgente y no solo un cambio en la alimentación.",
      },
      {
        id: "D",
        label: "D",
        text: "Exsanguinotransfusión de urgencia, manteniendo la fototerapia intensiva de forma simultánea.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "El recién nacido cursa con **Ictericia Neonatal Patológica** secundaria a **enfermedad hemolítica por incompatibilidad ABO** (madre O positivo, hijo A positivo, Coombs directo positivo), con un nivel de bilirrubina total marcadamente elevado que además se acompaña de **signos clínicos de encefalopatía bilirrubínica aguda** (succión débil, llanto agudo, hiperextensión de cuello y tronco). Estos signos neurológicos, sumados a la falla de respuesta a la fototerapia intensiva, constituyen una indicación absoluta de **exsanguinotransfusión de urgencia**, procedimiento que remueve mecánicamente la bilirrubina circulante y los anticuerpos maternos de forma mucho más rápida que la fototerapia sola. La exsanguinotransfusión se mantiene junto con fototerapia intensiva continua, y no debe retrasarse esperando IGIV, cambios en la alimentación ni nuevos controles diferidos, ya que el kernícterus establecido produce secuelas neurológicas permanentes (parálisis cerebral coreoatetósica, sordera neurosensorial, displasia dental del esmalte).",
    keyPoints: [
      "Ictericia que se extiende a las plantas de los pies más signos neurológicos (llanto agudo, hiperextensión de cuello/tronco, succión débil) equivalen a encefalopatía bilirrubínica aguda: urgencia neonatal.",
      "Ictericia Neonatal Patológica por incompatibilidad ABO. Bilirrubina muy elevada con signos de encefalopatía o falla de la fototerapia intensiva es indicación de Exsanguinotransfusión urgente, sin retrasarla por otras medidas.",
      "Neonatología / Ictericia Neonatal Patológica y Kernícterus.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-33",
    university: "UCC",
    examArea: "PEDIATRÍA - NEONATOLOGÍA",
    topic: "Enterocolitis Necrotizante",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "enterocolitis-necrotizante"],
    statement:
      "Un recién nacido pretérmino de 27 semanas de edad gestacional al nacer, actualmente con 18 días de vida (edad corregida de 29 semanas), permanece en la unidad de cuidados intensivos neonatales, alimentado con leche materna fortificada por sonda orogástrica. En las últimas 12 horas presenta distensión abdominal progresiva, residuos gástricos biliosos, deposiciones con sangre macroscópica e inestabilidad térmica con episodios de apnea. Al examen, el abdomen está distendido, tenso y con asas intestinales visibles, sin signos claros de peritonitis. Se solicita radiografía simple de abdomen en decúbito supino y en decúbito lateral izquierdo con rayo horizontal. Dado el cuadro clínico descrito, ¿cuál es el hallazgo radiográfico que CONFIRMA el diagnóstico de enterocolitis necrotizante?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Neumatosis intestinal: gas intramural lineal o \"en burbujas\" visible dentro de la pared del intestino.",
      },
      {
        id: "B",
        label: "B",
        text: "Signo de \"doble burbuja\" con ausencia de gas distal en el resto del intestino.",
        distractorProfile: "wrong_diagnosis_pattern",
        incorrectFeedback:
          "El signo de \"doble burbuja\" es característico de la atresia duodenal, una anomalía congénita obstructiva que se manifiesta con vómito bilioso desde las primeras horas de vida, no de la enterocolitis necrotizante de un prematuro con varios días de alimentación enteral tolerada previamente.",
      },
      {
        id: "C",
        label: "C",
        text: "Asas de intestino delgado difusamente dilatadas, sin otro hallazgo radiográfico asociado.",
        distractorProfile: "nonspecific_finding_not_diagnostic",
        incorrectFeedback:
          "La dilatación difusa e inespecífica de asas intestinales puede observarse en un íleo de cualquier causa (sepsis, prematuridad extrema, alteraciones electrolíticas) y por sí sola no es diagnóstica de enterocolitis necrotizante; se requiere un hallazgo más específico como la neumatosis intestinal.",
      },
      {
        id: "D",
        label: "D",
        text: "Calcificaciones intraabdominales dispersas, presentes desde el nacimiento.",
        distractorProfile: "chronic_unrelated_finding",
        incorrectFeedback:
          "Las calcificaciones intraabdominales sugieren un evento de perforación intestinal antenatal ya resuelto (peritonitis meconial), un hallazgo crónico presente desde el nacimiento, no el signo agudo que confirma una enterocolitis necrotizante en evolución activa como la descrita.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "El cuadro corresponde a una **Enterocolitis Necrotizante (ECN)**, la urgencia gastrointestinal adquirida más frecuente y grave del prematuro, favorecida por la inmadurez de la barrera intestinal, la isquemia mesentérica relativa y la colonización bacteriana anómala. La tríada clínica clásica es intolerancia alimentaria (residuos biliosos), distensión abdominal y sangre en heces, con frecuente inestabilidad térmica y episodios de apnea como manifestaciones sistémicas tempranas. El hallazgo radiográfico **patognomónico** que confirma el diagnóstico es la **neumatosis intestinal**, producida por gas generado por bacterias que invade y queda atrapado dentro de la pared intestinal necrótica. Hallazgos más avanzados como el gas portal venoso indican mayor extensión de la enfermedad, mientras que el neumoperitoneo (aire libre subdiafragmático) indica perforación intestinal y constituye indicación quirúrgica urgente. El manejo inicial ante la sospecha incluye ayuno absoluto, descompresión gástrica con sonda orogástrica, antibioticoterapia de amplio espectro con cobertura anaerobia y radiografías abdominales seriadas.",
    keyPoints: [
      "Prematuro con intolerancia alimentaria, distensión abdominal, residuos biliosos y sangre en heces hace sospechar enterocolitis necrotizante.",
      "Enterocolitis Necrotizante. Hallazgo radiológico diagnóstico: neumatosis intestinal. Manejo inicial: ayuno absoluto, descompresión gástrica, antibióticos de amplio espectro y radiografías seriadas; el aire libre subdiafragmático (perforación) es indicación de cirugía urgente.",
      "Neonatología / Enterocolitis Necrotizante.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-34",
    university: "UCC",
    examArea: "PEDIATRÍA - NEONATOLOGÍA",
    topic: "Enfermedad de Membrana Hialina",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "enfermedad-membrana-hialina"],
    statement:
      "Un recién nacido pretérmino de 30 semanas de gestación, producto de parto vaginal de una madre sin control prenatal adecuado que no recibió corticosteroides antenatales, presenta dificultad respiratoria progresiva inmediatamente después del nacimiento: taquipnea, quejido espiratorio audible, aleteo nasal y tiraje subcostal e intercostal. La saturación de oxígeno es de 84% con FiO2 de 0.5 administrado por cánula nasal de alto flujo. La radiografía de tórax muestra un patrón reticulogranular difuso (\"en vidrio esmerilado\") con broncograma aéreo y volúmenes pulmonares disminuidos. ¿Cuál es la intervención terapéutica que MÁS ha demostrado reducir la mortalidad y la severidad de esta condición cuando se administra tempranamente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Antibioticoterapia empírica de amplio espectro como tratamiento principal, dado el alto riesgo de sepsis asociado a la prematuridad.",
        distractorProfile: "wrong_primary_treatment_target",
        incorrectFeedback:
          "Aunque es razonable iniciar antibióticos empíricos mientras se descarta una sepsis concomitante (por la dificultad para diferenciarla clínicamente en el prematuro), el tratamiento que actúa directamente sobre la fisiopatología de esta enfermedad -el déficit de surfactante- es la administración de surfactante exógeno, no el antibiótico.",
      },
      {
        id: "B",
        label: "B",
        text: "Administración de surfactante exógeno por vía intratraqueal, iniciada de forma temprana.",
      },
      {
        id: "C",
        label: "C",
        text: "Ventilación mecánica invasiva con volúmenes corrientes altos para maximizar el reclutamiento alveolar de forma rápida.",
        distractorProfile: "harmful_ventilation_strategy",
        incorrectFeedback:
          "Los volúmenes corrientes altos en pulmones prematuros con déficit de surfactante aumentan el riesgo de volutrauma y de displasia broncopulmonar; se prefiere una estrategia ventilatoria protectora con volúmenes corrientes bajos y, cuando es posible, el uso de presión positiva continua (CPAP) evitando la intubación.",
      },
      {
        id: "D",
        label: "D",
        text: "Diuréticos intravenosos en dosis altas para reducir el edema pulmonar y mejorar la oxigenación.",
        distractorProfile: "wrong_mechanism_treatment",
        incorrectFeedback:
          "El problema fisiopatológico central en esta enfermedad es el déficit de surfactante pulmonar que causa colapso alveolar difuso, no una sobrecarga primaria de líquidos; los diuréticos no corrigen el defecto subyacente y no forman parte del tratamiento de primera línea.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Este prematuro de 30 semanas, sin exposición a corticosteroides antenatales, presenta el cuadro clínico y radiográfico clásico de **Enfermedad de Membrana Hialina (Síndrome de Dificultad Respiratoria del Recién Nacido)**, causada por un déficit cuantitativo y cualitativo de surfactante pulmonar propio de la inmadurez pulmonar. La ausencia de surfactante aumenta la tensión superficial alveolar, favoreciendo el colapso alveolar difuso (atelectasia), lo que explica el patrón reticulogranular (\"en vidrio esmerilado\") con broncograma aéreo y volúmenes pulmonares bajos en la radiografía. El tratamiento que actúa directamente sobre la causa y que más ha demostrado reducir la mortalidad y la severidad de la enfermedad es la **administración de surfactante exógeno por vía intratraqueal**, idealmente de forma temprana, junto con soporte respiratorio no invasivo (CPAP) cuando sea posible o ventilación mecánica protectora si se requiere. La prevención más eficaz es la administración de corticosteroides antenatales a la madre ante amenaza de parto pretérmino, que aceleran la maduración pulmonar fetal.",
    keyPoints: [
      "Prematuro sin corticosteroides antenatales con dificultad respiratoria progresiva (quejido, aleteo, retracciones) y radiografía con patrón reticulogranular y broncograma aéreo sugiere enfermedad de membrana hialina.",
      "Enfermedad de Membrana Hialina por déficit de surfactante. Tratamiento: surfactante exógeno intratraqueal temprano más soporte respiratorio (CPAP o ventilación protectora). Prevención: corticosteroides antenatales ante amenaza de parto pretérmino.",
      "Neonatología / Enfermedad de Membrana Hialina.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-35",
    university: "UCC",
    examArea: "PEDIATRÍA - CIRUGÍA NEONATAL",
    topic: "Atresia Esofágica y Fístula Traqueoesofágica",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "atresia-esofagica-fistula-traqueoesofagica"],
    statement:
      "Un recién nacido a término de 39 semanas, con antecedente de polihidramnios materno durante el tercer trimestre, presenta desde el nacimiento sialorrea excesiva (\"babeo\") con secreciones orales abundantes, y episodios de tos, cianosis y atragantamiento al intentar la primera toma de leche materna. Al intentar pasar una sonda orogástrica para alimentación, esta se enrolla y no logra avanzar más allá de los 10-12 cm, lo cual se confirma radiográficamente a nivel torácico. La radiografía de abdomen muestra aire distribuido en el estómago y en las asas intestinales. ¿Cuál es el diagnóstico MÁS probable y su manejo inmediato antes de la corrección quirúrgica definitiva?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Atresia esofágica sin fístula traqueoesofágica (tipo \"puro\"); manejo con alimentación por sonda nasogástrica forzando su paso hasta el estómago.",
        distractorProfile: "wrong_subtype_and_unsafe_maneuver",
        incorrectFeedback:
          "La presencia de aire en el estómago y en el intestino en la radiografía de abdomen descarta la atresia esofágica \"pura\" (tipo A), en la cual no debería existir aire distal porque no hay comunicación con la vía aérea; además, forzar el paso de una sonda contra un fondo de saco esofágico ciego puede perforarlo.",
      },
      {
        id: "B",
        label: "B",
        text: "Reflujo gastroesofágico severo del recién nacido; manejo con espesantes de la fórmula e inhibidores de la bomba de protones.",
        distractorProfile: "wrong_diagnosis_ignoring_key_sign",
        incorrectFeedback:
          "El hallazgo de una sonda orogástrica que no logra avanzar más allá de los 10-12 cm es diagnóstico de una obstrucción esofágica anatómica (atresia), no de un reflujo gastroesofágico funcional; el reflujo no impide físicamente el paso de la sonda hacia el estómago.",
      },
      {
        id: "C",
        label: "C",
        text: "Laringomalacia congénita; manejo expectante ambulatorio dado que la mayoría de los casos resuelve espontáneamente con el crecimiento.",
        distractorProfile: "wrong_diagnosis_dangerous_delay",
        incorrectFeedback:
          "La laringomalacia causa estridor inspiratorio por colapso de las estructuras supraglóticas, no imposibilidad de pasar una sonda orogástrica hasta el estómago; manejar de forma ambulatoria y expectante esta condición diferente retrasaría peligrosamente el diagnóstico correcto de una anomalía que requiere corrección quirúrgica.",
      },
      {
        id: "D",
        label: "D",
        text: "Atresia esofágica con fístula traqueoesofágica distal (el tipo más frecuente); manejo inicial con succión continua del fondo de saco esofágico proximal, posición semisentada y ayuno absoluto, evitando la ventilación con presión positiva con máscara antes de la cirugía.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "El cuadro es característico de **Atresia Esofágica con Fístula Traqueoesofágica distal**, la variante anatómica más frecuente (tipo C, aproximadamente 85% de los casos). El polihidramnios materno se explica porque el feto no puede deglutir adecuadamente el líquido amniótico; tras el nacimiento, la sialorrea excesiva, la incapacidad de tolerar la primera toma con atragantamiento y cianosis, y la imposibilidad de avanzar la sonda orogástrica más allá de 10-12 cm confirman la obstrucción esofágica. La presencia de aire en el estómago e intestino en la radiografía indica que existe una fístula distal entre la tráquea y el esófago inferior, que permite el paso de aire hacia el tubo digestivo. El manejo preoperatorio inmediato busca evitar la aspiración de secreciones acumuladas en el fondo de saco proximal y el reflujo de contenido gástrico hacia el pulmón a través de la fístula: **succión continua del cabo esofágico proximal (sonda de Replogle), posición semisentada, ayuno absoluto, y evitar la ventilación con presión positiva con máscara**, ya que esta última puede distender el estómago a través de la fístula y favorecer la regurgitación hacia la vía aérea. Debe además buscarse activamente anomalías asociadas del espectro VACTERL antes de la corrección quirúrgica definitiva.",
    keyPoints: [
      "Polihidramnios materno más sialorrea excesiva más atragantamiento con la primera toma más imposibilidad de pasar sonda orogástrica más allá de 10-12 cm son datos clave de atresia esofágica.",
      "Atresia Esofágica con Fístula Traqueoesofágica distal (tipo más frecuente). Manejo preoperatorio inicial: succión continua del cabo proximal (sonda de Replogle), posición semisentada, ayuno absoluto y evitar ventilación con presión positiva con máscara. Buscar anomalías asociadas (VACTERL).",
      "Cirugía Neonatal / Atresia Esofágica y Fístula Traqueoesofágica.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-36",
    university: "UCC",
    examArea: "PEDIATRÍA - CIRUGÍA NEONATAL",
    topic: "Onfalocele y Gastrosquisis",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "onfalocele-gastrosquisis"],
    statement:
      "Un recién nacido a término, hijo de una madre de 19 años sin control prenatal adecuado, nace con un defecto de la pared abdominal ubicado lateral (a la derecha) a un cordón umbilical de inserción normal, a través del cual se exteriorizan asas de intestino delgado sin ningún saco ni membrana que las recubra; las asas se observan edematizadas, engrosadas y cubiertas de un exudado fibrinoso espeso. No se identifican otras malformaciones congénitas evidentes al examen físico inicial. ¿Cuál es el manejo INMEDIATO prioritario en la sala de partos, antes del traslado a cirugía?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Cubrir las asas intestinales expuestas con un apósito estéril, no adherente y humedecido con solución salina tibia, y colocarlas dentro de una bolsa plástica intestinal estéril, evitando la desecación y la pérdida de calor.",
      },
      {
        id: "B",
        label: "B",
        text: "Reducir manualmente las asas intestinales hacia la cavidad abdominal de inmediato en la sala de partos, aplicando presión suave y continua.",
        distractorProfile: "premature_unsafe_maneuver",
        incorrectFeedback:
          "Intentar reducir manualmente las asas expuestas sin preparación quirúrgica adecuada puede causar isquemia por aumento súbito de la presión intraabdominal (síndrome compartimental abdominal) y comprometer aún más un intestino ya edematizado; la reducción debe hacerse de forma escalonada y controlada, usualmente con un silo, no de forma manual e inmediata en sala de partos.",
      },
      {
        id: "C",
        label: "C",
        text: "Realizar una ecocardiografía urgente antes de cualquier otra intervención, dado que esta condición se asocia invariablemente a cardiopatías congénitas graves.",
        distractorProfile: "wrong_association_wrong_priority",
        incorrectFeedback:
          "Las cardiopatías congénitas y otras anomalías asociadas son mucho más frecuentes en el onfalocele (defecto cubierto por saco, con el cordón insertado en su vértice) que en la gastrosquisis descrita aquí (defecto lateral sin saco); además, ninguna evaluación diagnóstica debe retrasar la protección inmediata del intestino expuesto.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar alimentación enteral temprana con leche materna para estimular la motilidad intestinal antes del cierre quirúrgico.",
        distractorProfile: "dangerous_premature_feeding",
        incorrectFeedback:
          "El recién nacido con pared abdominal expuesta requiere ayuno absoluto, descompresión gástrica y manejo quirúrgico programado; iniciar alimentación enteral antes de corregir el defecto y evaluar la función intestinal expone al paciente a aspiración y a compromiso intestinal adicional.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "El cuadro corresponde a una **Gastrosquisis**, un defecto congénito de la pared abdominal ubicado típicamente a la derecha de un cordón umbilical de inserción normal, en el cual las asas intestinales se exteriorizan SIN ningún saco que las cubra, por lo que quedan expuestas directamente al líquido amniótico durante la gestación (lo que explica el aspecto edematizado, engrosado y con exudado fibrinoso). A diferencia del onfalocele -defecto central en la base del cordón umbilical, cubierto por una membrana peritoneal, y asociado con mucha mayor frecuencia a cardiopatías congénitas y anomalías cromosómicas-, la gastrosquisis suele presentarse de forma aislada, en madres jóvenes, y su principal riesgo inmediato es la pérdida de calor y de líquidos, la desecación intestinal y la infección del intestino expuesto. Por ello, la prioridad absoluta en sala de partos es **proteger el intestino**: cubrirlo con un apósito estéril, no adherente, humedecido con solución salina tibia, y colocarlo dentro de una bolsa plástica intestinal (\"bowel bag\"), además de mantener ayuno absoluto, descompresión gástrica con sonda y reanimación con líquidos intravenosos, antes del manejo quirúrgico escalonado (cierre primario o reducción progresiva con silo según el grado de compromiso visceral).",
    keyPoints: [
      "Un defecto lateral al cordón umbilical, con inserción normal del cordón y SIN saco que cubra las asas corresponde a gastrosquisis; un defecto central en la base del cordón, CON saco o membrana, corresponde a onfalocele (más asociado a otras malformaciones).",
      "Gastrosquisis. Manejo inmediato en sala de partos: cubrir el intestino expuesto con apósito estéril húmedo y bolsa plástica intestinal, evitar la pérdida de calor y de líquidos, ayuno absoluto y descompresión gástrica, antes del manejo quirúrgico escalonado (silo).",
      "Cirugía Neonatal / Onfalocele y Gastrosquisis.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-37",
    university: "UCC",
    examArea: "PEDIATRÍA - GENÉTICA",
    topic: "Síndrome de Down",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "sindrome-de-down"],
    statement:
      "Un recién nacido a término presenta al examen físico hipotonía marcada, fisuras palpebrales oblicuas hacia arriba, epicanto bilateral, puente nasal plano, protrusión lingual, pliegue palmar único (línea simiesca) bilateral, y un espacio aumentado entre el primer y segundo dedo del pie (\"signo de la sandalia\"). Se sospecha clínicamente síndrome de Down, lo cual se confirma posteriormente mediante cariotipo que reporta trisomía 21 libre. Además de la evaluación cardiológica -dado que hasta el 50% de estos pacientes presenta cardiopatía congénita, principalmente defectos del canal auriculoventricular-, ¿cuál de las siguientes comorbilidades debe tamizarse de forma SISTEMÁTICA en TODOS los recién nacidos con este diagnóstico, independientemente de la presencia de síntomas?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Diabetes mellitus tipo 1, mediante glucemias en ayunas seriadas desde el nacimiento.",
        distractorProfile: "wrong_association_incorrect_screening",
        incorrectFeedback:
          "Aunque los pacientes con síndrome de Down tienen mayor riesgo de enfermedades autoinmunes en general, la diabetes mellitus tipo 1 no forma parte del tamizaje sistemático neonatal recomendado para esta condición; las guías se centran en otras comorbilidades más prevalentes y de mayor impacto en el periodo neonatal.",
      },
      {
        id: "B",
        label: "B",
        text: "Escoliosis, mediante radiografía de columna total, dado que es una manifestación universal desde el nacimiento.",
        distractorProfile: "wrong_timing_and_prevalence",
        incorrectFeedback:
          "Las alteraciones de columna (como la inestabilidad atlantoaxoidea) se evalúan en la infancia más tardía o antes de participar en actividades de riesgo (deportes de contacto), no mediante tamizaje radiográfico sistemático desde el periodo neonatal.",
      },
      {
        id: "C",
        label: "C",
        text: "Hipotiroidismo congénito y disfunción tiroidea, mediante determinación de TSH y T4 libre, dado el riesgo aumentado de patología tiroidea en esta población.",
      },
      {
        id: "D",
        label: "D",
        text: "Tumores de células germinales, mediante ecografía testicular o pélvica de rutina desde el nacimiento.",
        distractorProfile: "unnecessary_low_yield_screening",
        incorrectFeedback:
          "No existe recomendación de tamizaje sistemático neonatal con imágenes para tumores de células germinales en el síndrome de Down; el riesgo tumoral aumentado en esta población se relaciona principalmente con leucemias, para las cuales se recomienda vigilancia clínica y hemograma, no imágenes gonadales de rutina.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "El fenotipo descrito (hipotonía, fisuras palpebrales oblicuas, epicanto, puente nasal plano, protrusión lingual, pliegue palmar único y espacio aumentado entre el primer y segundo ortejo) es clásico del **Síndrome de Down (Trisomía 21)**. Estos pacientes tienen mayor riesgo de múltiples comorbilidades que deben buscarse activamente desde el periodo neonatal, no solo cuando aparecen síntomas: cardiopatía congénita (ecocardiograma en todos los recién nacidos, dado que hasta el 50% presenta defectos, principalmente del canal auriculoventricular), tamizaje auditivo, evaluación oftalmológica (cataratas congénitas), hemograma (por riesgo de mielopoyesis anormal transitoria y leucemia) y, de forma especialmente relevante para esta pregunta, **función tiroidea con TSH y T4 libre**, ya que estos pacientes tienen un riesgo notablemente aumentado tanto de hipotiroidismo congénito como de hipotiroidismo adquirido a lo largo de la infancia, con TSH de tamizaje recomendada al nacimiento y control periódico posterior, independientemente de la presencia de síntomas clínicos evidentes.",
    keyPoints: [
      "Hipotonía neonatal más fisuras palpebrales oblicuas más epicanto más pliegue palmar único más espacio aumentado entre el primer y segundo ortejo conforman el fenotipo clásico del síndrome de Down.",
      "Síndrome de Down (Trisomía 21). Tamizaje sistemático neonatal obligatorio: ecocardiograma (cardiopatía congénita, defectos del canal AV), función tiroidea (TSH/T4 libre) por riesgo aumentado de hipotiroidismo congénito y adquirido, tamizaje auditivo y evaluación oftalmológica.",
      "Genética Pediátrica / Síndrome de Down.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-38",
    university: "UCC",
    examArea: "PEDIATRÍA - HEMATOLOGÍA",
    topic: "Púrpura Trombocitopénica Inmune",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "purpura-trombocitopenica-inmune"],
    statement:
      "Una niña de 4 años, previamente sana, es llevada a consulta por la aparición súbita de múltiples petequias generalizadas y equimosis en las extremidades inferiores de 2 días de evolución, sin antecedente de trauma. La madre refiere que la niña tuvo un cuadro viral de vías respiratorias altas hace 2 semanas, ya resuelto. Al examen físico la niña luce en buen estado general, sin fiebre, sin hepatoesplenomegalia ni adenopatías palpables. El hemograma muestra un conteo de plaquetas de 8.000/mm³, con hemoglobina, leucocitos y diferencial completamente normales. El frotis de sangre periférica confirma trombocitopenia aislada, sin esquistocitos ni blastos. La niña no presenta sangrado activo de mucosas, epistaxis ni hematuria. ¿Cuál es la conducta MÁS apropiada en este momento?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Transfusión profiláctica de plaquetas de inmediato, dado el conteo plaquetario extremadamente bajo.",
        distractorProfile: "unnecessary_transfusion",
        incorrectFeedback:
          "En la PTI las plaquetas circulantes son destruidas rápidamente por autoanticuerpos, por lo que transfundir plaquetas de forma profiláctica en ausencia de sangrado significativo tiene un efecto transitorio y no está indicado; se reserva para sangrado activo grave o riesgo hemorrágico mayor.",
      },
      {
        id: "B",
        label: "B",
        text: "Observación clínica estrecha sin tratamiento farmacológico específico, con educación a los padres sobre signos de alarma y evitar actividades de riesgo de trauma, dado el buen estado general y la ausencia de sangrado significativo.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar quimioterapia con vincristina de inmediato como tratamiento estándar de primera línea.",
        distractorProfile: "overly_aggressive_wrong_line_therapy",
        incorrectFeedback:
          "La vincristina no es un tratamiento de primera línea para la PTI pediátrica; se reserva para casos refractarios a corticosteroides, inmunoglobulina o esplenectomía en niños con sangrado grave persistente, no como manejo inicial de un caso sin sangrado significativo.",
      },
      {
        id: "D",
        label: "D",
        text: "Esplenectomía urgente como tratamiento definitivo, dado el riesgo de sangrado con un conteo plaquetario tan bajo.",
        distractorProfile: "unnecessary_invasive_procedure_wrong_line",
        incorrectFeedback:
          "La esplenectomía se reserva para casos de PTI crónica o refractaria en niños mayores, tras el fallo de tratamientos médicos de primera y segunda línea; en un primer episodio agudo sin sangrado significativo la conducta inicial no es quirúrgica, y muchos casos resuelven espontáneamente en semanas a meses.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "La niña cursa con una **Púrpura Trombocitopénica Inmune (PTI) aguda**, típicamente desencadenada por una infección viral previa (como en este caso, 2 semanas antes), en la cual anticuerpos generados contra antígenos virales presentan reactividad cruzada con las plaquetas, acelerando su destrucción en el sistema reticuloendotelial. El patrón característico es una **trombocitopenia aislada**, con el resto del hemograma y el frotis de sangre periférica completamente normales (sin anemia, sin esquistocitos que sugieran microangiopatía, sin blastos que sugieran leucemia), y sin hepatoesplenomegalia ni adenopatías que orienten a un proceso infiltrativo. En niños con PTI y **ausencia de sangrado significativo** (solo petequias y equimosis cutáneas, sin sangrado mucoso importante), el conteo plaquetario por sí solo -por bajo que sea- NO es indicación de tratamiento farmacológico; la conducta recomendada es la **observación clínica**, con educación a los cuidadores sobre signos de alarma (cefalea intensa, sangrado de mucosas, hematuria) y evitar actividades con riesgo de trauma, ya que la mayoría de los casos en niños resuelve espontáneamente en semanas a pocos meses. El tratamiento (corticosteroides, inmunoglobulina intravenosa) se reserva para sangrado mucocutáneo significativo o alto riesgo hemorrágico.",
    keyPoints: [
      "Niña con petequias y equimosis de aparición súbita tras una infección viral reciente, con trombocitopenia AISLADA (resto del hemograma normal) y sin hepatoesplenomegalia, corresponde al patrón clásico de PTI aguda post-viral.",
      "Púrpura Trombocitopénica Inmune. En niños sin sangrado significativo, el conteo plaquetario bajo por sí solo NO es indicación de tratamiento; se recomienda observación clínica. El tratamiento (corticosteroides, IGIV) se reserva para sangrado mucocutáneo significativo o riesgo hemorrágico alto.",
      "Hematología Pediátrica / Púrpura Trombocitopénica Inmune.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-39",
    university: "UCC",
    examArea: "PEDIATRÍA - ENDOCRINOLOGÍA",
    topic: "Hipotiroidismo Congénito",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "hipotiroidismo-congenito"],
    statement:
      "Un recién nacido a término de 5 días de vida es traído a control por resultado alterado del tamizaje neonatal (prueba de talón), que reporta TSH elevada de 45 mUI/L (valor de referencia normal menor a 10-20 mUI/L según el laboratorio). Al interrogar a la madre, refiere que el neonato ha estado \"muy tranquilo\", duerme la mayor parte del día, se alimenta con dificultad y ha presentado estreñimiento con deposiciones infrecuentes. Al examen físico se observa ictericia prolongada, fontanela posterior amplia, macroglosia leve y hernia umbilical. Dado el resultado del tamizaje y estos hallazgos clínicos, ¿cuál es la conducta MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Repetir el tamizaje metabólico en 2 semanas y esperar ese resultado antes de tomar cualquier decisión terapéutica.",
        distractorProfile: "dangerous_delay_critical_window",
        incorrectFeedback:
          "El hipotiroidismo congénito no tratado durante las primeras semanas de vida causa daño neurológico irreversible; ante un tamizaje alterado con hallazgos clínicos compatibles, no se debe esperar varias semanas para confirmar el diagnóstico antes de iniciar tratamiento, porque cada día de retraso compromete el neurodesarrollo del paciente.",
      },
      {
        id: "B",
        label: "B",
        text: "Solicitar una ecografía tiroidea como único estudio confirmatorio, e iniciar tratamiento solo si se demuestra agenesia tiroidea.",
        distractorProfile: "unnecessary_imaging_before_treatment",
        incorrectFeedback:
          "La ecografía o la gammagrafía tiroidea son útiles para definir la etiología (agenesia, ectopia, dishormonogénesis) pero NO deben retrasar el inicio del tratamiento; ante una TSH elevada confirmada junto con hallazgos clínicos sugestivos, la levotiroxina se inicia de inmediato mientras se completa el estudio etiológico en paralelo.",
      },
      {
        id: "C",
        label: "C",
        text: "Confirmar con perfil tiroideo sérico (TSH y T4 libre) de inmediato e iniciar levotiroxina oral tan pronto se confirme el diagnóstico, idealmente antes de las 2 semanas de vida.",
      },
      {
        id: "D",
        label: "D",
        text: "Manejo expectante sin tratamiento, ya que los síntomas descritos son variantes normales del comportamiento neonatal durante la primera semana de vida.",
        distractorProfile: "false_reassurance_normalizing_pathology",
        incorrectFeedback:
          "El letargo excesivo, la dificultad para alimentarse, el estreñimiento, la ictericia prolongada, la fontanela posterior amplia y la hernia umbilical NO son variantes normales del recién nacido; en conjunto con un tamizaje con TSH elevada, son hallazgos clásicos de hipotiroidismo congénito, una condición que requiere confirmación y tratamiento urgentes.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "El cuadro es característico de **Hipotiroidismo Congénito**, una de las causas prevenibles más importantes de discapacidad intelectual, razón por la cual su tamizaje neonatal universal mediante TSH es obligatorio en la mayoría de los programas de salud pública. Los hallazgos clínicos clásicos (letargia, dificultad para alimentarse, estreñimiento, ictericia prolongada por inmadurez de la conjugación hepática de bilirrubina, fontanela posterior amplia, macroglosia y hernia umbilical) suelen ser sutiles o incluso estar ausentes en los primeros días de vida, por lo que el tamizaje bioquímico es la herramienta principal de detección temprana. Ante una TSH de tamizaje elevada, la conducta es **confirmar de inmediato con un perfil tiroideo sérico (TSH y T4 libre)** e iniciar **levotiroxina oral tan pronto se confirme el diagnóstico**, idealmente antes de las 2 semanas de vida, sin esperar estudios etiológicos como la ecografía o la gammagrafía tiroidea, que pueden realizarse en paralelo o después de iniciado el tratamiento. El objetivo es evitar el daño neurológico irreversible (antiguamente denominado \"cretinismo\") asociado al retraso terapéutico, dado que las hormonas tiroideas son esenciales para el desarrollo cerebral en los primeros meses de vida.",
    keyPoints: [
      "Un tamizaje neonatal con TSH elevada junto con hallazgos clínicos sutiles (letargia, estreñimiento, ictericia prolongada, fontanela posterior amplia, macroglosia, hernia umbilical) genera alta sospecha de hipotiroidismo congénito.",
      "Hipotiroidismo Congénito. El tratamiento con levotiroxina debe iniciarse lo antes posible (idealmente antes de las 2 semanas de vida) tras confirmar con perfil tiroideo, sin esperar estudios etiológicos (ecografía o gammagrafía), para prevenir daño neurológico irreversible.",
      "Endocrinología Pediátrica / Hipotiroidismo Congénito.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-40",
    university: "UCC",
    examArea: "PEDIATRÍA - NEFROLOGÍA",
    topic: "Síndrome Nefrótico",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "sindrome-nefrotico"],
    statement:
      "Un niño de 3 años consulta por edema periorbitario matutino de una semana de evolución que ha progresado a edema generalizado, incluyendo escroto y miembros inferiores, con orina \"espumosa\". No refiere fiebre, hematuria macroscópica ni antecedente de infección reciente evidente. Al examen físico hay edema con fóvea generalizado y ascitis leve, sin hipertensión arterial significativa (presión arterial en percentil 75 para la edad). Los laboratorios muestran proteínas en orina de 24 horas de 4.2 g/día (relación proteína/creatinina urinaria mayor a 2), albúmina sérica de 1.8 g/dL, colesterol total de 380 mg/dL, creatinina sérica normal para la edad, y complemento C3 normal. No hay hematuria microscópica significativa en el uroanálisis. Dado este cuadro clínico, compatible con la causa más frecuente de esta condición en la infancia, ¿cuál es el manejo de PRIMERA LÍNEA?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Corticosteroides orales (Prednisona) en dosis estándar durante varias semanas, como tratamiento empírico inicial sin necesidad de biopsia renal.",
      },
      {
        id: "B",
        label: "B",
        text: "Biopsia renal percutánea obligatoria en todos los casos, antes de iniciar cualquier tratamiento farmacológico.",
        distractorProfile: "unnecessary_invasive_procedure",
        incorrectFeedback:
          "En niños con presentación típica de síndrome nefrótico idiopático (edad entre 1 y 10 años, sin hematuria significativa, sin hipertensión relevante, complemento normal y función renal conservada), la biopsia renal NO es necesaria antes de iniciar el tratamiento empírico con corticosteroides, ya que la mayoría corresponde a enfermedad de cambios mínimos, que responde bien a los esteroides. La biopsia se reserva para casos atípicos, resistentes a esteroides o con recaídas frecuentes.",
      },
      {
        id: "C",
        label: "C",
        text: "Antibioticoterapia empírica de amplio espectro, asumiendo un origen infeccioso primario del edema y la proteinuria.",
        distractorProfile: "wrong_etiology_wrong_treatment",
        incorrectFeedback:
          "El cuadro descrito (proteinuria masiva, hipoalbuminemia, hipercolesterolemia, edema) corresponde a un síndrome nefrótico, no a un proceso infeccioso primario; los antibióticos no tratan la fisiopatología subyacente (habitualmente enfermedad de cambios mínimos) y no están indicados de forma empírica sin evidencia clara de infección concomitante.",
      },
      {
        id: "D",
        label: "D",
        text: "Restricción estricta de proteínas en la dieta como única intervención terapéutica para reducir la proteinuria.",
        distractorProfile: "harmful_dietary_restriction",
        incorrectFeedback:
          "Restringir las proteínas de la dieta en un niño con síndrome nefrótico e hipoalbuminemia puede empeorar el estado nutricional y no reduce significativamente la proteinuria de origen glomerular; el pilar del tratamiento inicial es farmacológico (corticosteroides), no dietético.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "El paciente cursa con un **Síndrome Nefrótico Idiopático**, cuya causa más frecuente en la infancia (especialmente en el rango de 1 a 10 años) es la **enfermedad de cambios mínimos**. La tétrada clásica es proteinuria masiva (mayor a 3.5 g/día en adultos, o relación proteína/creatinina urinaria mayor a 2 en niños), hipoalbuminemia, edema (que típicamente inicia periorbitario y progresa a generalizado) e hiperlipidemia/hipercolesterolemia secundaria al aumento compensatorio de la síntesis hepática de proteínas, incluidas lipoproteínas. Esta presentación se considera **típica** porque cumple los criterios de buen pronóstico para enfermedad de cambios mínimos: edad entre 1 y 10 años, ausencia de hematuria significativa, ausencia de hipertensión relevante, complemento C3 normal y función renal conservada. En estos casos, la conducta estándar es iniciar **tratamiento empírico con corticosteroides orales (Prednisona)** sin necesidad de biopsia renal previa, dado que la gran mayoría de estos pacientes responde favorablemente a los esteroides. La biopsia renal se reserva para presentaciones atípicas (edad menor a 1 año o mayor a 10 años, hematuria macroscópica, hipertensión significativa, insuficiencia renal, complemento bajo) o para casos de resistencia a esteroides tras un ciclo adecuado de tratamiento.",
    keyPoints: [
      "Edema periorbitario matutino que progresa a generalizado, orina espumosa, proteinuria masiva, hipoalbuminemia e hipercolesterolemia conforman la tétrada clásica del síndrome nefrótico.",
      "Síndrome Nefrótico Idiopático (causa más frecuente en niños: enfermedad de cambios mínimos). En presentación típica (edad de 1 a 10 años, sin hematuria significativa, sin hipertensión relevante, complemento normal), se inicia tratamiento empírico con corticosteroides sin biopsia renal previa; la biopsia se reserva para presentaciones atípicas o resistencia a esteroides.",
      "Nefrología Pediátrica / Síndrome Nefrótico.",
    ],
  },
];
