import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UMNG — Edición #1 (26 jul 2026) · Preguntas #71–#80.
 */
export const UMNG_CONV_2026_07_26_71_80_QUESTIONS: TrainingQuestion[] = [
  {
    id: "umng-conv-2026-07-26-71",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA / URGENCIAS",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Multípara de 34 años, con embarazo de 37 semanas, se encuentra hospitalizada con diagnóstico de Preeclampsia Severa en manejo con Sulfato de Magnesio y Labetalol. Súbitamente, la paciente se queja de un dolor insoportable, desgarrador, en el epigastrio y el hipocondrio derecho, que se irradia hacia la escápula y el hombro derecho. Inmediatamente después, presenta palidez extrema, diaforesis, y su presión arterial cae drásticamente de 160/110 mmHg a 70/40 mmHg, con una frecuencia cardíaca de 135 lpm. El abdomen se torna distendido y doloroso difusamente. Los laboratorios de hace 4 horas mostraban Plaquetas en 45.000, AST 850 U/L y ALT 920 U/L. ¿Cuál es el diagnóstico más probable de esta catástrofe y la conducta inmediata a seguir?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Ruptura de un aneurisma aórtico abdominal / Traslado para Angio-TC inmediato.",
        distractorProfile: "wrong_etiology_for_context",
        incorrectFeedback: "El contexto de preeclampsia, transaminasas elevadas y el dolor focalizado en hipocondrio derecho gritan etiología hepática, no aórtica."
      },
      {
        id: "B",
        label: "B",
        text: "Ruptura uterina espontánea / Cesárea de emergencia y reparación uterina.",
        distractorProfile: "classic_obstetric_mimic",
        incorrectFeedback: "La ruptura uterina causa dolor pélvico inferior y pérdida de estación fetal, no irradiación a la escápula ni elevación extrema de transaminasas previa."
      },
      {
        id: "C",
        label: "C",
        text: "Embolismo de líquido amniótico / Intubación orotraqueal y reanimación cardiopulmonar.",
        distractorProfile: "cardiogenic_shock_mimic",
        incorrectFeedback: "El embolismo causa colapso cardiovascular y paro respiratorio, pero no explica el dolor en hipocondrio irradiado al hombro."
      },
      {
        id: "D",
        label: "D",
        text: "Ruptura de hematoma subcapsular hepático / Activación de transfusión masiva y Laparotomía de urgencia."
      }
    ],
    correctOptionId: "D",
    explanation: "La paciente cursa con Síndrome de HELLP (plaquetas bajas y transaminasas casi en 1.000) complicado con Ruptura de Hematoma Subcapsular Hepático. El dolor súbito en hipocondrio derecho irradiado al hombro (Signo de Kehr, por sangre en diafragma) asociado a choque hipovolémico fulminante es la presentación clásica. El hígado congestivo sangra bajo su cápsula y estalla vaciando sangre al peritoneo. Requiere transfusión masiva y Laparotomía inmediata para empaquetamiento hepático (Packing).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., cuando una embarazada con preeclampsia se queja de que le arde 'la boca del estómago' (epigastralgia), no le des milanta. Es su hígado hinchándose. Si esa paciente de repente grita, se pone blanca y la presión se va al suelo, su hígado acaba de estallar. Tienes 5 minutos para cruzar sangre y abrir ese abdomen. Compresas tibias, compresión (Packing) y saca al bebé rápido para que el útero no robe más sangre.",
    keyPoints: [
      "Cuando veas:",
      "• Preeclampsia/HELLP + Dolor agudo en Hipocondrio Derecho irradiado a escápula + Choque (Hipotensión).",
      "Debes pensar en:",
      "Ruptura Hepática Subcapsular. Manejo: Transfusión masiva + Laparotomía inmediata.",
      "Tema: Obstetricia / Complicaciones Preeclampsia."
    ]
  },
  {
    id: "umng-conv-2026-07-26-72",
    university: "UMNG",
    examArea: "TOXICOLOGÍA / URGENCIAS",
    topic: "TOXICOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un soldado de 40 años es traído el lunes en la mañana a sanidad militar por sus compañeros, quienes refieren que el paciente estuvo bebiendo \"licor artesanal\" (chirrinchi) durante el fin de semana. El paciente luce severamente embriagado, confuso, con respiración profunda y rápida (Kussmaul) y se queja de dolor abdominal. El síntoma que más le angustia es que \"ve como si estuviera nevando\" (visión borrosa con escotomas centelleantes). Los gases arteriales revelan: pH 6.90, HCO3 5 mEq/L, PCO2 20 mmHg. El anión gap es de 32 (marcadamente elevado). ¿Cuál es el tratamiento antidótico ESPECÍFICO e INMEDIATO indicado para evitar la ceguera permanente y la muerte?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Fomepizol o Etanol intravenoso seguido de Hemodiálisis urgente."
      },
      {
        id: "B",
        label: "B",
        text: "Infusión de Bicarbonato de Sodio y administración de Flumazenil.",
        distractorProfile: "supportive_wrong_antidote",
        incorrectFeedback: "El bicarbonato no bloquea el metabolismo del metanol. El flumazenil es para benzodiacepinas."
      },
      {
        id: "C",
        label: "C",
        text: "Naloxona y Tiamina (Vitamina B1) a dosis altas.",
        distractorProfile: "alcoholic_encephalopathy_treatment",
        incorrectFeedback: "La Tiamina previene Wernicke, pero no es antídoto para la intoxicación por metanol."
      },
      {
        id: "D",
        label: "D",
        text: "Azul de Metileno intravenoso.",
        distractorProfile: "methemoglobinemia_antidote",
        incorrectFeedback: "El Azul de Metileno es el antídoto para la metahemoglobinemia, no para los alcoholes tóxicos."
      }
    ],
    correctOptionId: "A",
    explanation: "El consumo de licor artesanal sumado a acidosis metabólica severa con anión gap alto y sintomatología visual ('tormenta de nieve') es el cuadro patognomónico de Intoxicación por Metanol. El asesino es su metabolito, el Ácido Fórmico, producido por la Alcohol Deshidrogenasa. Se debe bloquear esta enzima con Fomepizol o Etanol (que compite por la enzima). Dada la acidosis severa (pH 6.90), requiere además hemodiálisis inmediata.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., curar a un paciente emborrachándolo más es una ironía bella. Si te llega al monte y no tienes Fomepizol, dale Aguardiente o Vodka por sonda. El hígado estará tan ocupado emborrachándose con el alcohol bueno (Etanol) que no metabolizará el Metanol en ácido fórmico. Lo mantienes 'prendido' hasta que llegue a diálisis.",
    keyPoints: [
      "Cuando veas:",
      "• Consumo de licor artesanal + Acidosis metabólica profunda (Anión Gap alto) + Alteración Visual (escotomas).",
      "Debes pensar en:",
      "Intoxicación por Metanol. Antídoto: Fomepizol o Etanol. Requiere Hemodiálisis si pH <7.20.",
      "Tema: Toxicología / Alcoholes Tóxicos."
    ]
  },
  {
    id: "umng-conv-2026-07-26-73",
    university: "UMNG",
    examArea: "PEDIATRÍA / INFECTOLOGÍA",
    topic: "PEDIATRÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un niño de 3 años es llevado a urgencias por presentar fiebre de 39.5°C, irritabilidad, fotofobia y rigidez de nuca de 24 horas de evolución. Al examen físico se evidencian signos de Brudzinski y Kernig positivos. No hay lesiones en la piel. Se realiza una punción lumbar cuyo LCR es turbio, con 2.500 leucocitos (95% neutrófilos), glucosa de 15 mg/dL (sérica en 90) y proteínas de 180 mg/dL. El Gram del LCR reporta diplococos Gram positivos (Streptococcus pneumoniae). Usted decide iniciar el manejo médico. Según la evidencia actual para prevenir secuelas neurológicas severas, ¿cuál es el momento EXACTO en el que debe administrarse la Dexametasona intravenosa?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Inmediatamente DESPUÉS de haber infundido la primera dosis del esquema antibiótico.",
        distractorProfile: "late_administration_failure",
        incorrectFeedback: "Si das el antibiótico primero, estallas a las bacterias y causas inflamación masiva. El corticoide después ya no sirve para prevenir daño."
      },
      {
        id: "B",
        label: "B",
        text: "Solamente si el paciente presenta convulsiones en las primeras 48 horas de tratamiento.",
        distractorProfile: "wrong_indication_seizures",
        incorrectFeedback: "Los esteroides se usan de forma profiláctica para evitar sordera, no son anticonvulsivantes."
      },
      {
        id: "C",
        label: "C",
        text: "Entre 15 y 20 minutos ANTES, o simultáneamente con la primera dosis de antibiótico."
      },
      {
        id: "D",
        label: "D",
        text: "La Dexametasona está contraindicada en meningitis por neumococo debido a que reduce la penetración de la vancomicina al SNC.",
        distractorProfile: "theoretical_risk_over_benefit",
        incorrectFeedback: "Existe el riesgo teórico, pero el beneficio clínico sobre la prevención de secuelas supera este riesgo; se recomienda continuar."
      }
    ],
    correctOptionId: "C",
    explanation: "En la meningitis bacteriana pediátrica (especialmente por H. influenzae y S. pneumoniae), el uso de Dexametasona previene la sordera neurosensorial. Para ser efectiva, debe administrarse 15-20 minutos ANTES o CON la primera dosis de antibiótico. Esto garantiza que el antiinflamatorio esté actuando cuando el antibiótico destruya a las bacterias y libere citoquinas.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., imagínate que el cerebro del niño es una habitación llena de globos de agua sucia (bacterias). El antibiótico es un alfiler. Si pinchas los globos, el agua ensucia todo (inflamación letal). La Dexametasona es cubrir las paredes con plástico protector. Tienes que poner el plástico ANTES de explotar los globos. Si lo haces al revés, curas la meningitis pero dejas al niño sordo.",
    keyPoints: [
      "Cuando veas:",
      "• Meningitis Bacteriana Pediátrica y prescripción de Dexametasona.",
      "Debes pensar en:",
      "Aplicar 15-20 min ANTES o CON la primera dosis del antibiótico. Objetivo: Prevenir sordera neurosensorial.",
      "Tema: Pediatría / Infectología - Meningitis."
    ]
  },
  {
    id: "umng-conv-2026-07-26-74",
    university: "UMNG",
    examArea: "TRAUMA / ORTOPEDIA",
    topic: "ORTOPEDIA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un conductor de 35 años sufre un accidente de tránsito frontal al chocar su vehículo contra un árbol. Él no llevaba puesto el cinturón de seguridad y sus rodillas impactaron violentamente contra el tablero del auto (mecanismo de \"dashboard injury\"). A su ingreso a urgencias, se queja de dolor severo en la cadera derecha. Al examen físico, la extremidad inferior derecha se encuentra acortada, en rotación INTERNA y en aducción (flexionada y cruzada sobre la línea media). Los pulsos distales están presentes. ¿Cuál es el diagnóstico clínico más probable y la complicación más temida si no se resuelve antes de 6 horas?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Fractura del cuello femoral / Trombosis venosa profunda.",
        distractorProfile: "opposite_rotation_fracture",
        incorrectFeedback: "La fractura de cadera cursa con acortamiento, pero la pierna se presenta en rotación EXTERNA, no interna."
      },
      {
        id: "B",
        label: "B",
        text: "Luxación POSTERIOR de cadera / Necrosis avascular de la cabeza femoral."
      },
      {
        id: "C",
        label: "C",
        text: "Luxación ANTERIOR de cadera / Lesión de la arteria femoral.",
        distractorProfile: "anterior_luxation_wrong_stance",
        incorrectFeedback: "La luxación anterior es rara (piernas abiertas) y presenta la pierna en rotación EXTERNA."
      },
      {
        id: "D",
        label: "D",
        text: "Fractura de la diáfisis femoral / Síndrome de embolia grasa.",
        distractorProfile: "diaphyseal_fracture_mimic",
        incorrectFeedback: "Una fractura diafisiaria presentaría deformidad inestable del muslo, no esta postura articular clásica."
      }
    ],
    correctOptionId: "B",
    explanation: "El trauma por impacto de rodilla contra el tablero empuja la cabeza femoral hacia atrás (Luxación Posterior de cadera). La postura clásica es la del 'bañista púdico' (pierna acortada, aducción y rotación INTERNA). Es una urgencia ortopédica absoluta: si no se reduce en menos de 6 horas, la isquemia vascular causará Necrosis Avascular de la cabeza femoral.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., si la cadera se salió hacia atrás, se está estrangulando su propia arteria. Tienes un cronómetro de 6 horas. Nada de pedir resonancias magnéticas. Sedación profunda en urgencias, tracciona el fémur hacia el techo con todas tus fuerzas hasta que escuches el 'clack' de la cabeza volviendo al acetábulo. Acabas de salvarle su articulación.",
    keyPoints: [
      "Cuando veas:",
      "• Impacto rodilla contra tablero + Pierna acortada + Rotación INTERNA.",
      "Debes pensar en:",
      "Luxación Posterior de Cadera. Complicación temida: Necrosis Avascular. (Nervio en riesgo: Ciático).",
      "Tema: Ortopedia / Urgencias de Cadera."
    ]
  },
  {
    id: "umng-conv-2026-07-26-75",
    university: "UMNG",
    examArea: "MEDICINA INTERNA / NEUROLOGÍA - UCI",
    topic: "NEUROLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Mujer de 30 años, con diagnóstico de Miastenia Gravis en tratamiento crónico con Piridostigmina oral. Acude a urgencias por una infección urinaria para la cual el médico de triaje, por error, le prescribió Ciprofloxacina. A las 12 horas de haber tomado el antibiótico, la paciente ingresa cargada por sus familiares: presenta ptosis palpebral bilateral severa, incapacidad para deglutir (voz nasal y babeo constante por retención de secreciones) y franca dificultad respiratoria. Su patrón respiratorio es paradójico (el abdomen se hunde al inspirar) y su capacidad vital forzada (FVC) medida junto a la cama ha caído a 10 ml/kg. ¿Cuál es la conducta INMEDIATA de elección para salvar la vida de la paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar una dosis alta adicional de Piridostigmina IV o Neostigmina para revertir la debilidad diafragmática muscular.",
        distractorProfile: "fatal_cholinergic_crisis",
        incorrectFeedback: "Aumentar la Piridostigmina en crisis severa puede precipitar una 'Crisis Colinérgica' masiva, ahogando a la paciente en sus propias secreciones."
      },
      {
        id: "B",
        label: "B",
        text: "Proceder a la Intubación Orotraqueal y ventilación mecánica invasiva inmediata."
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar terapia con Inmunoglobulina Intravenosa (IGIV) y esperar respuesta en las siguientes 2 horas.",
        distractorProfile: "disease_modifying_over_airway",
        incorrectFeedback: "La IGIV es el tratamiento definitivo, pero tarda 24-72 horas. La paciente hará paro respiratorio en minutos."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar Atropina a altas dosis para secar las secreciones y evitar la broncoaspiración.",
        distractorProfile: "symptomatic_instead_of_definitive",
        incorrectFeedback: "Secar secreciones no arregla el diafragma paralizado y dificulta el destete del ventilador después."
      }
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con una Crisis Miasténica (precipitada por infección y fluoroquinolonas) y falla ventilatoria inminente por fatiga diafragmática. La respiración paradójica y la FVC < 15 ml/kg son indicaciones absolutas de INTUBACIÓN. Asegurar la vía aérea es el único paso que evita el paro. Las terapias modificadoras (IGIV o Plasmaféresis) se inician después de asegurar la ventilación.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la miastenia te apaga los músculos de arriba hacia abajo. Si la paciente ya no pasa saliva y la barriga se le hunde al respirar, se asfixia frente a ti. No llames a pedir inmunoglobulina aún; ponle un tubo endotraqueal. Ojo: avísale al anestesiólogo el diagnóstico (son muy sensibles al Rocuronio).",
    keyPoints: [
      "Cuando veas:",
      "• Crisis Miasténica + Incapacidad deglución + FVC < 15 ml/kg o respiración paradójica.",
      "Debes pensar en:",
      "Intubación Inmediata. El manejo del ABC precede al tratamiento inmunológico (Plasmaféresis/IGIV).",
      "Tema: Neurología Crítica / Crisis Miasténica."
    ]
  },
  {
    id: "umng-conv-2026-07-26-76",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA / URGENCIAS",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Multípara de 38 semanas de gestación ingresa a urgencias en trabajo de parto en fase activa (dilatación de 6 cm). Las membranas están íntegras, y por indicación obstétrica, el médico de turno procede a realizar una amniotomía (ruptura artificial de las membranas). Inmediatamente después de rasgar las bolsas, se produce una salida de líquido claro mezclado con un sangrado vaginal rojo rutilante y franco. En el mismo instante de la ruptura, el monitor fetal, que venía marcando 140 lpm con buena variabilidad, cae bruscamente a una bradicardia fetal profunda de 60 latidos por minuto y se mantiene así. La madre no refiere dolor y sus signos vitales están perfectos. ¿Cuál es el diagnóstico clínico definitivo y la acción salvavidas a realizar?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Desprendimiento prematuro de placenta (Abruptio) / Reanimación intrauterina y observación.",
        distractorProfile: "wrong_bleeding_source_abruptio",
        incorrectFeedback: "El abruptio cursa con hipertonía uterina, dolor continuo y sangrado oscuro. La paciente no tiene dolor."
      },
      {
        id: "B",
        label: "B",
        text: "Placenta Previa / Traslado inmediato a Cesárea.",
        distractorProfile: "wrong_bleeding_source_previa",
        incorrectFeedback: "En placenta previa el sangrado es indoloro, pero rara vez produce bradicardia fetal instantánea tras romper membranas."
      },
      {
        id: "C",
        label: "C",
        text: "Vasa Previa (Ruptura de vasos fetales previos) / Cesárea de emergencia INMEDIATA (Categoría I)."
      },
      {
        id: "D",
        label: "D",
        text: "Ruptura de seno marginal placentario / Terapia expectante y vigilancia estricta del monitor.",
        distractorProfile: "expectant_management_fatal",
        incorrectFeedback: "Con bradicardia de 60, si haces terapia expectante, el bebé morirá exanguinado en 5 minutos."
      }
    ],
    correctOptionId: "C",
    explanation: "El cuadro es patognomónico de Vasa Previa Rota. Al hacer la amniotomía, el médico rasgó vasos fetales que cruzaban el cérvix. El sangrado es fetal, no materno. Como el feto tiene muy poca volemia (300 ml), perder una mínima cantidad produce choque hipovolémico fulminante y bradicardia instantánea. La madre se mantiene estable y sin dolor. La intervención es CESÁREA DE EMERGENCIA STAT.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., metes el amniótomo, rasgas las bolsas para acelerar el parto, y ¡pum!, sale un charco de sangre y el monitor hace línea plana. Acabas de cortarle la yugular al bebé. La mamá está fresca como lechuga, pero su hijo se desangra hacia la camilla. Grita pidiendo el quirófano en Código Rojo fetal; tienes 5 minutos o sacarás un óbito.",
    keyPoints: [
      "Cuando veas:",
      "• Amniotomía -> Sangrado rojo indoloro -> Bradicardia Fetal Súbita.",
      "Debes pensar en:",
      "Vasa Previa Rota. El feto se está desangrando. Tratamiento: Cesárea Stat.",
      "Tema: Obstetricia / Hemorragias del Tercer Trimestre."
    ]
  },
  {
    id: "umng-conv-2026-07-26-77",
    university: "UMNG",
    examArea: "CIRUGÍA GENERAL / ATLS",
    topic: "CIRUGÍA GENERAL",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un joven de 20 años ingresa tras un accidente frontal a 80 km/h usando cinturón abdominal de \"dos puntos\". A la inspección, presenta una equimosis horizontal marcada en el abdomen inferior (Signo del Cinturón de Seguridad). El abdomen presenta defensa voluntaria y dolor a la descompresión. Se realiza FAST que es negativo. Un TAC de abdomen con contraste no evidencia lesiones en hígado ni bazo, pero reporta presencia de líquido libre en pelvis (sin sangre) y pequeñas burbujas de gas libre (neumoperitoneo extraluminal). ¿Cuál es el diagnóstico más certero y la conducta a seguir?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Laceración de vena cava inferior / Angiografía y embolización pélvica.",
        distractorProfile: "retroperitoneal_vascular_mimic",
        incorrectFeedback: "Una laceración cava produciría hemorragia masiva e inestabilidad, no líquido simple con gas."
      },
      {
        id: "B",
        label: "B",
        text: "Lesión de víscera hueca (estallido de intestino delgado) / Laparotomía exploratoria urgente."
      },
      {
        id: "C",
        label: "C",
        text: "Contusión muscular de la pared abdominal (desgarro de rectos) / Manejo médico con AINEs y faja.",
        distractorProfile: "wall_injury_only",
        incorrectFeedback: "El neumoperitoneo descarta lesión exclusiva de pared; un órgano hueco se perforó."
      },
      {
        id: "D",
        label: "D",
        text: "Lesión vascular de la arteria mesentérica superior / Observación en UCI con TAC de control en 12 horas.",
        distractorProfile: "observation_of_perforation",
        incorrectFeedback: "Observar un intestino perforado (gas en TAC) es condenar al paciente a peritonitis letal."
      }
    ],
    correctOptionId: "B",
    explanation: "El cinturón de 2 puntos en choque frontal comprime el intestino (yeyuno/íleon) contra la columna lumbar, haciéndolo estallar (Blowout injury). El FAST puede ser falsamente negativo al inicio por escaso líquido. El TAC muestra neumoperitoneo extraluminal, lo que confirma Perforación de Víscera Hueca. El manejo es Cirugía abierta inmediata (Laparotomía Exploratoria).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., si le levantas la camisa al accidentado y le ves 'tatuada' la marca roja del cinturón, asume intestino roto. Esa fuerza aplastó un globo lleno de aire y comida. Quizás el paciente llega tranquilo, con pulso de 80, porque botar jugo intestinal inicialmente no choca por hipovolemia, pero en 6 horas ese abdomen arderá en peritonitis bacteriana. ¡Ábrelo antes de que haga sepsis!",
    keyPoints: [
      "Cuando veas:",
      "• Accidente frontal + Signo del Cinturón de Seguridad + Neumoperitoneo en TAC.",
      "Debes pensar en:",
      "Perforación de Víscera Hueca (Intestino Delgado). Tratamiento: Laparotomía Exploratoria.",
      "Tema: Cirugía General / Trauma Abdominal Cerrado."
    ]
  },
  {
    id: "umng-conv-2026-07-26-78",
    university: "UMNG",
    examArea: "PSIQUIATRÍA / MEDICINA INTERNA",
    topic: "PSIQUIATRÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un hombre de 45 años, operado hace 3 días por fractura de fémur, desarrolla de forma brusca agitación extrema, sudoración profusa y desorientación. Al examen: PA 175/100 mmHg, FC 125 lpm, fiebre de 38.5°C y temblor grueso. El paciente está aterrorizado y afirma que hay \"arañas y gusanos arrastrándose por las paredes\" (alucinaciones). La familia confiesa que consume \"una botella de aguardiente diaria\" hace 10 años, pero no ha tomado desde el accidente. ¿Cuál es el tratamiento farmacológico DE PRIMERA LÍNEA para salvar la vida de este paciente en la crisis actual?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar infusión de Haloperidol intravenoso a altas dosis para controlar el delirio y las alucinaciones.",
        distractorProfile: "fatal_seizure_induction_haloperidol",
        incorrectFeedback: "El haloperidol disminuye el umbral convulsivo. En abstinencia alcohólica, causará convulsiones letales."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar Fenitoína intravenosa profiláctica para prevenir el estatus epiléptico.",
        distractorProfile: "ineffective_antiepileptic",
        incorrectFeedback: "La fenitoína no previene las convulsiones por abstinencia alcohólica."
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar Diazepam o Lorazepam intravenoso a dosis tituladas altas (protocolo CIWA-Ar) guiadas por síntomas."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar Propranolol para el control de los temblores y la hiperactividad simpática, asociado a suero glucosado.",
        distractorProfile: "wernicke_induction_glucose",
        incorrectFeedback: "Dar glucosa sin tiamina previa en un alcohólico causa Encefalopatía de Wernicke irreversible."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta Delirium Tremens (abstinencia alcohólica grave a las 72h). Hay un déficit de GABA y exceso de glutamato. El tratamiento innegociable son las Benzodiacepinas (Diazepam/Lorazepam) IV, que actúan en los receptores del alcohol, previniendo convulsiones y sedando al sistema autonómico (protocolo CIWA-Ar). El Haloperidol está contraindicado como monoterapia primaria por el alto riesgo de convulsiones.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el piso de ortopedia está lleno de alcohólicos ocultos que se rompen un hueso y a los 3 días 'se enloquecen'. No es locura, es abstinencia. Su cerebro se está friendo en adrenalina. Si le pones Haloperidol, le apagas las 'voces', pero el cerebro hará una convulsión mortal. Métele Díazepam sin miedo para lograr dormir a ese cerebro hiperestimulado.",
    keyPoints: [
      "Cuando veas:",
      "• Paciente hospitalizado (3 días) + Alucinaciones visuales + Agitación/Fiebre + Alcoholismo previo.",
      "Debes pensar en:",
      "Delirium Tremens. Tratamiento 1a Línea: Benzodiacepinas IV (Diazepam/Lorazepam).",
      "Tema: Psiquiatría / Abstinencia Alcohólica."
    ]
  },
  {
    id: "umng-conv-2026-07-26-79",
    university: "UMNG",
    examArea: "INFECTOLOGÍA / NEUROLOGÍA",
    topic: "INFECTOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un agricultor de 35 años, de zona rural aislada sin vacunas, acude a urgencias por dificultad para tragar y \"rigidez en la mandíbula\" que inició hace 48 horas. Sufrió una herida punzante en el pie con herramientas oxidadas hace 15 días. Al examen físico: paciente plenamente consciente, presenta una sonrisa forzada y rígida (risus sardonicus) y espasmos musculares masivos y dolorosos en la espalda (opistótonos). Estos espasmos se desencadenan por ruidos fuertes o luces. ¿Cuál es el mecanismo fisiopatológico del tóxico involucrado y la terapia de neutralización ESPECÍFICA de urgencia?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Inhibición de la liberación de acetilcolina en la placa neuromuscular / Antitoxina botulínica equina y Penicilina.",
        distractorProfile: "botulism_pathophysiology_mimic",
        incorrectFeedback: "El botulismo bloquea la acetilcolina causando parálisis FLÁCIDA. El paciente tiene parálisis ESPÁSTICA."
      },
      {
        id: "B",
        label: "B",
        text: "Destrucción viral del asta anterior de la médula espinal / Manejo de soporte (no hay antídoto).",
        distractorProfile: "polio_mimic",
        incorrectFeedback: "La polio destruye el asta anterior causando parálisis flácida y asimétrica."
      },
      {
        id: "C",
        label: "C",
        text: "Inhibición de la liberación de neurotransmisores inhibitorios (GABA y Glicina) en el SNC / Inmunoglobulina Antitetánica Humana (IGT)."
      },
      {
        id: "D",
        label: "D",
        text: "Antagonismo competitivo de los receptores de Glicina en la médula por veneno de serpiente / Suero Antiofídico polivalente.",
        distractorProfile: "strychnine_snake_mimic",
        incorrectFeedback: "Es la fisiopatología de la Estricnina (veneno ratas). Ninguna serpiente da este cuadro espástico clásico."
      }
    ],
    correctOptionId: "C",
    explanation: "El diagnóstico es Tétanos Generalizado. La Tetanoespasmina (toxina de C. tetani) llega al SNC por vía retrógrada y bloquea la liberación de GABA y Glicina (inhibidores). Sin el 'freno', las neuronas causan espasmos musculares brutales (trismus, opistótonos). La terapia específica de urgencia es la Inmunoglobulina Antitetánica Humana (IGT) IM, que neutraliza la toxina circulante antes de que se fije a más nervios.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el paciente con tétanos tiene el cerebro totalmente lúcido y siente un dolor indescriptible mientras sus músculos casi le rompen la columna. Si se te cae una bandeja (ruido), el espasmo trabará sus músculos respiratorios y se ahogará. Aísla, seda/relaja e intuba, y ponle la Inmunoglobulina para atrapar la toxina circulante ANTES de que cruce la barrera hematoencefálica.",
    keyPoints: [
      "Cuando veas:",
      "• Trismus (mandíbula trabada) + Opistótonos + Herida sucia previa.",
      "Debes pensar en:",
      "Tétanos. Fisiopatología: Bloqueo de GABA/Glicina. Tratamiento: IGT (Inmunoglobulina antitetánica).",
      "Tema: Infectología / Enfermedades mediadas por toxinas."
    ]
  },
  {
    id: "umng-conv-2026-07-26-80",
    university: "UMNG",
    examArea: "PEDIATRÍA / CIRUGÍA PEDIÁTRICA Y NEONATOLOGÍA",
    topic: "NEONATOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un neonato prematuro extremo de 30 semanas se encuentra en su décimo día de vida en UCIN. Ha estado recibiendo nutrición enteral progresiva. La enfermera reporta letargia y mala perfusión periférica. Al examen: abdomen severamente distendido, brillante y con eritema en la pared. Se extrajo un residuo gástrico marcadamente bilioso y el pañal tiene deposiciones con sangrado rutilante evidente. La radiografía simple de abdomen revela dilatación de asas, engrosamiento de pared y pequeñas burbujas de aire dispuestas en forma de anillos a lo largo de las paredes intestinales (Neumatosis intestinal). ¿Cuál es el diagnóstico más probable y la medida MÁS URGENTE a tomar en la primera línea de manejo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Malrotación intestinal con vólvulo de intestino medio / Tránsito intestinal con bario inmediato.",
        distractorProfile: "volvulus_wrong_population",
        incorrectFeedback: "El vólvulo ocurre en neonatos a término en los primeros días. Realizar un estudio con contraste en este estado es mortal."
      },
      {
        id: "B",
        label: "B",
        text: "Enterocolitis Necrotizante (ECN) / Suspender alimentación enteral (ayuno estricto), descomprimir con sonda orogástrica y antibióticos IV de amplio espectro."
      },
      {
        id: "C",
        label: "C",
        text: "Íleo meconial por Fibrosis Quística / Administración de enema hiperosmolar con Gastrografin para diluir el tapón meconial.",
        distractorProfile: "meconium_ileus_wrong_timing",
        incorrectFeedback: "El íleo meconial ocurre en el día 1-2, no presenta sangre fresca ni neumatosis radiológica."
      },
      {
        id: "D",
        label: "D",
        text: "Invaginación intestinal aguda / Enema neumático o hidrostático urgente bajo fluoroscopia.",
        distractorProfile: "intussusception_wrong_age",
        incorrectFeedback: "Ocurre clásicamente en lactantes mayores de 4-10 meses, es rarísima en la UCIN y no da neumatosis extensa."
      }
    ],
    correctOptionId: "B",
    explanation: "El cuadro es clásico de Enterocolitis Necrotizante (ECN): Prematuridad + Alimentación enteral + Distensión/Sangrado/Residuo Bilioso. La Neumatosis Intestinal (aire en la pared) es el signo patognomónico radiológico. El manejo salvavidas inicial es médico: Ayuno estricto (NPO), reposo gástrico con sonda abierta y antibióticos IV de amplio espectro. Solo se opera si hay perforación comprobada.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el intestino del prematuro extremo no está listo para digerir 'vacas'. Cuando le pones fórmula láctea, las bacterias fermentan el gas y destruyen la mucosa isquémica. El gas penetra la pared (neumatosis). Si a este bebé no le cortas la vía oral INMEDIATAMENTE y lo inundas de antibióticos, la pared del intestino va a estallar matándolo de choque séptico intra-abdominal.",
    keyPoints: [
      "Cuando veas:",
      "• Prematuro + Dieta enteral + Distensión/Sangre + Neumatosis en radiografía.",
      "Debes pensar en:",
      "Enterocolitis Necrotizante. Tratamiento base: Ayuno estricto, Sonda a derivación y Antibióticos IV.",
      "Tema: Neonatología / ECN."
    ]
  }
];
