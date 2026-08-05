import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UMNG — Edición #2 (Simulacro 2) · Preguntas #81–#90.
 */
export const UMNG_CONV_ED2_81_90_QUESTIONS: TrainingQuestion[] = [
  {
    id: "umng-conv-ed2-81",
    university: "UMNG",
    examArea: "TRAUMA",
    topic: "QUEMADOS Y NEFROLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un trabajador de la construcción de 25 años sufre un accidente laboral al tocar accidentalmente un cable de alta tensión (10.000 voltios). Es lanzado a varios metros de distancia. Al ingresar a urgencias, el paciente está confuso pero hemodinámicamente estable. Presenta una herida de entrada carbonizada en la mano derecha y una herida de salida en el pie derecho. No hay quemaduras térmicas extensas en la piel (SCQ < 5%). Sin embargo, la extremidad superior derecha está dura, tensa y edematizada. Se le coloca una sonda vesical, obteniendo orina de color \"café oscuro\" o rojo vino (positivo para sangre en la tira reactiva, pero sin eritrocitos en el sedimento). Usted inicia reanimación hídrica agresiva. A diferencia de las quemaduras térmicas (por fuego), ¿cuál es el OJETIVO EXACTO de diuresis horaria (gasto urinario) que usted debe alcanzar en este paciente para evitar la falla renal por mioglobinuria masiva?",
    options: [
      {
        id: "A",
        label: "A",
        text: "0.5 mL / kg / hora (aproximadamente 30 a 50 mL/h).",
        distractorProfile: "thermal_burn_goal",
        incorrectFeedback: "Esa es la meta dorada para quemaduras por FUEGO (térmicas). En quemadura eléctrica, 50 cc/h estancará la mioglobina en el riñón causando falla anúrica irreversible."
      },
      {
        id: "B",
        label: "B",
        text: "1 a 1.5 mL / kg / hora (aproximadamente 75 a 100 mL/h)."
      },
      {
        id: "C",
        label: "C",
        text: "Mantener la oliguria permisiva para evitar sobrecarga del ventrículo derecho por daño miocárdico eléctrico.",
        distractorProfile: "fatal_fluid_restriction",
        incorrectFeedback: "La oliguria en rabdomiólisis es el primer paso hacia la muerte por hiperkalemia y falla renal fulminante."
      },
      {
        id: "D",
        label: "D",
        text: "3 mL / kg / hora con infusión de Furosemida en bomba continua.",
        distractorProfile: "loop_diuretic_error",
        incorrectFeedback: "La Furosemida deshidrata el lecho intravascular; secará los túbulos y concentrará más la mioglobina en el riñón. El 'lavado' se hace con cristaloides."
      }
    ],
    correctOptionId: "B",
    explanation: "La quemadura eléctrica (alto voltaje) cursa con el \"efecto iceberg\": piel casi normal, pero destrucción masiva de músculo profundo (Rabdomiólisis). Esto libera mioglobina (orina color coca-cola), que es nefrotóxica. El protocolo ATLS 10a Edición dicta que las quemaduras eléctricas (a diferencia de las térmicas) exigen un objetivo de diuresis del doble: 1 a 1.5 mL/kg/h (idealmente 100 mL/h en el adulto) hasta que la orina aclare (lavado tubular).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., este muchacho está asado por dentro. Sus músculos muertos están botando un pantano de proteínas oscuras hacia el riñón. Si mantienes la diuresis floja de un quemado térmico (30 cc), esa mioglobina se atasca como lodo en los túbulos renales. Abre la llave de líquidos a tope hasta conseguir una diuresis de 100 cc por hora, forzando a orinar para lavar esos túbulos, hasta que su orina pase de Coca-Cola a Limonada.",
    keyPoints: [
      "Meta diuresis Quemadura Térmica: 0.5 mL/kg/h.",
      "Meta diuresis Quemadura Eléctrica (Rabdomiólisis): 1 a 1.5 mL/kg/h (100 mL/hora).",
      "Indicador: Orina café oscura (Mioglobinuria). El lavado exige volumen, no diuréticos puros de inicio."
    ]
  },
  {
    id: "umng-conv-ed2-82",
    university: "UMNG",
    examArea: "PEDIATRÍA",
    topic: "ENDOCRINOLOGÍA - URGENCIAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Una niña de 8 años, con diagnóstico reciente de Diabetes Mellitus tipo 1, es traída a urgencias por presentar cuadro de poliuria, polidipsia, dolor abdominal y vómitos desde hace 2 días. Al ingreso: estuporosa, con respiración de Kussmaul profunda y aliento afrutado. Glucometría: 550 mg/dL, pH 7.05, HCO3 6 mEq/L. Usted diagnostica Cetoacidosis Diabética (CAD) severa e inicia la reanimación hídrica. Dos horas después de haber infundido grandes volúmenes de cristaloides isotónicos rápidos y haber iniciado la insulina, la paciente, que había empezado a despertar, súbitamente se queja de cefalea intensísima, presenta vómito en proyectil, bradicardia (FC 50 lpm) y cae en coma, presentando una pupila derecha dilatada y arreactiva. ¿Cuál fue la complicación iatrogénica más letal de la reanimación y cuál es el tratamiento INMEDIATO para salvar su cerebro?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Trombosis del seno venoso dural por deshidratación severa / Anticoagulación con Heparina.",
        distractorProfile: "thrombotic_mimic",
        incorrectFeedback: "Aunque hay hipercoagulabilidad en la CAD, la tríada aguda pos-reanimación hídrica es clásica del edema osmótico."
      },
      {
        id: "B",
        label: "B",
        text: "Hipoglucemia aguda por insulina / Bolos de Dextrosa al 50%.",
        distractorProfile: "hypoglycemic_coma",
        incorrectFeedback: "La hipoglucemia da convulsiones o coma, pero no da bradicardia ni midriasis unilateral fija, signos de herniación cerebral de Cushing."
      },
      {
        id: "C",
        label: "C",
        text: "Edema Cerebral secundario a cambios osmóticos rápidos / Manitol intravenoso o Solución Salina Hipertónica al 3%."
      },
      {
        id: "D",
        label: "D",
        text: "Meningitis bacteriana fulminante por inmunosupresión / Ceftriaxona y Dexametasona.",
        distractorProfile: "infectious_meningitis",
        incorrectFeedback: "No es un cuadro febril ni con meningismo clásico; esto estalló bruscamente en 2 horas tras administrar los líquidos intravenosos."
      }
    ],
    correctOptionId: "C",
    explanation: "El Edema Cerebral es la primera causa de mortalidad en CAD pediátrica. Su detonante suele ser una caída brusca de la osmolaridad sérica debido a una reanimación con líquidos muy rápida o caída acelerada de la glucosa (>100 mg/dL/h). El cerebro \"absorbe\" agua, se hincha, y desencadena la Tríada de Cushing (bradicardia, hipertensión, alteración respiratoria) con compromiso pupilar (herniación uncal). El rescate es INMEDIATO: elevar cabecera y pasar bolo de Manitol o Solución Salina Hipertónica (3%) sin esperar neuroimágenes.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el cerebro de esta niña estaba acostumbrado a la sangre 'melotuda' (dulce y espesa). Al meterle litros de suero e insulina a chorro, volviste la sangre 'aguada'. Su cerebro chupó esa agua como una esponja y se aplastó contra el cráneo. Ahora está comprimiendo el tallo y la pupila. Necesitas sacarle esa agua del cerebro mágicamente, usando Sodio hiperconcentrado (al 3%) o Manitol. Y recuerda: en niños con CAD, NUNCA hidratas a chorro como en un adulto, hidratas lento en 48 horas.",
    keyPoints: [
      "Complicación letal de CAD en niños: Edema Cerebral Osmótico (por líquidos rápidos/caída de glucosa brusca).",
      "Clínica: Cefalea aguda + Vómito proyectil + Bradicardia + Midriasis fija (2-12h post-reanimación).",
      "Antídoto de urgencia: Manitol IV o Solución Salina al 3% inmediato."
    ]
  },
  {
    id: "umng-conv-ed2-83",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "HEMATOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Una mujer de 25 años, G2P1, acude al servicio de urgencias refiriendo ausencia de movimientos fetales desde hace dos semanas. No había asistido a control prenatal reciente por vivir en área rural lejana. La ecografía transabdominal confirma un feto único con ausencia de latido cardíaco y signos de maceración, con una edad gestacional estimada de 34 semanas por biometría. Usted le explica el diagnóstico de Óbito Fetal (Muerte Fetal Intrauterina). Durante la entrevista, usted nota que la paciente presenta sangrado activo por las encías (gingivorragia) y varias equimosis de aparición espontánea en los brazos. Se toman laboratorios urgentes que reportan: Plaquetas 40.000, Fibrinógeno 50 mg/dL (Severamente disminuido), y Tiempos de Coagulación (PT y PTT) prolongados al doble de lo normal. Teniendo en cuenta la inestabilidad hematológica y el diagnóstico, ¿cuál es la conducta MÁS ADECUADA a seguir?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Inducir el trabajo de parto de inmediato con Misoprostol u Oxitocina para evacuar la causa del problema.",
        distractorProfile: "premature_evacuation",
        incorrectFeedback: "Inducir el parto en una CID activa sin fibrinógeno terminará en sangrado masivo por desgarros y el lecho placentario. Morirá en el expulsivo."
      },
      {
        id: "B",
        label: "B",
        text: "Realizar Cesárea de emergencia bajo anestesia general.",
        distractorProfile: "fatal_surgery",
        incorrectFeedback: "Meter un bisturí en una paciente sin factores de coagulación es una sentencia de exanguinación fulminante."
      },
      {
        id: "C",
        label: "C",
        text: "Estabilizar a la paciente mediante la transfusión de Crioprecipitados y/o Plasma Fresco Congelado ANTES de realizar la evacuación uterina."
      },
      {
        id: "D",
        label: "D",
        text: "Esperar la instauración espontánea del trabajo de parto con vigilancia clínica estricta, ya que el parto vaginal ocurrirá naturalmente.",
        distractorProfile: "watchful_waiting_fatal",
        incorrectFeedback: "Esperar mientras tiene hemorragias espontáneas solo agotará más sus factores de coagulación."
      }
    ],
    correctOptionId: "C",
    explanation: "El tejido fetal macerado libera altas dosis de Tromboplastina a la circulación materna, causando una Coagulación Intravascular Diseminada (CID), consumiendo plaquetas y Fibrinógeno. El dogma en obstetricia manda: frente a una CID, PRIMERO SE CORRIGE LA COAGULOPATÍA y luego se evacúa el útero. Se deben transfundir Crioprecipitados (ricos en fibrinógeno) hasta lograr >150 mg/dL, para que la sangre coagule. Una vez estabilizada la sangre, se induce el parto vaginal (vía de elección en óbitos).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la intuición dicta 'saca el feto podrido para curarla'. Pero la fisiología dice 'si cortas o si pones a parir a una paciente sin fibrinógeno, se desangrará en tus manos'. La madre se gastó todas las 'curitas' (plaquetas/fibrina) de su sangre. Tu orden médica uno es pedir Crioprecipitados al banco de sangre; con eso recargas el tanque, y ahora sí, arranca el Misoprostol con total seguridad.",
    keyPoints: [
      "Óbito fetal retenido (>3 sem) = Alto riesgo de CID (Coagulación Intravascular Diseminada).",
      "Manifestaciones de CID: Fibrinógeno muy bajo, PT/PTT prolongados, plaquetopenia y sangrado.",
      "Manejo dogmático: Reponer factores PRIMERO (Crioprecipitados/PFC) antes de la evacuación del útero."
    ]
  },
  {
    id: "umng-conv-ed2-84",
    university: "UMNG",
    examArea: "CARDIOLOGÍA",
    topic: "CIRUGÍA CARDIOVASCULAR",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un hombre de 45 años, usuario de drogas intravenosas (UDIV), se encuentra hospitalizado en su décimo día de tratamiento con Vancomicina por una Endocarditis Infecciosa de la válvula aórtica secundaria a Staphylococcus aureus. La fiebre había cedido, pero el día de hoy el paciente presenta un deterioro súbito: reaparición de fiebre alta (39.5°C), disnea de reposo y un nuevo soplo diastólico aspirativo intenso en el foco aórtico. Usted solicita un Electrocardiograma (ECG) de urgencia y observa un nuevo Bloqueo Auriculoventricular (AV) de primer grado (intervalo PR de 0.28 segundos) que no estaba en su ingreso. Teniendo en cuenta la fisiopatología valvular, ¿cuál es la complicación más probable que ha surgido y que requiere cirugía de reemplazo valvular de emergencia?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Embolismo séptico hacia la arteria descendente anterior izquierda.",
        distractorProfile: "coronary_embolism",
        incorrectFeedback: "Daría un IAM con supradesnivel ST o dolor precordial severo, no un alargamiento del PR ni un soplo diastólico nuevo agudo."
      },
      {
        id: "B",
        label: "B",
        text: "Perforación de la valva aórtica con prolapso hacia el ventrículo izquierdo.",
        distractorProfile: "valve_perforation_only",
        incorrectFeedback: "Daría la insuficiencia aórtica nueva, pero NO alteraría el sistema de conducción eléctrica (Nodo AV / Haz de His)."
      },
      {
        id: "C",
        label: "C",
        text: "Absceso del anillo perivalvular aórtico (Absceso de raíz aórtica)."
      },
      {
        id: "D",
        label: "D",
        text: "Miocarditis difusa por toxina estafilocócica.",
        distractorProfile: "diffuse_myocarditis",
        incorrectFeedback: "Causa disfunción contráctil difusa, no un daño eléctrico tan focalizado con insuficiencia valvular abrupta concomitante."
      }
    ],
    correctOptionId: "C",
    explanation: "La válvula aórtica y el sistema de conducción (Haz de His) son vecinos adyacentes en el tabique membranoso. Si un paciente con Endocarditis (especialmente S. aureus) prolonga su intervalo PR (Bloqueo AV de Novo), significa que la infección ya no está solo en la válvula, sino que cavitó la raíz y formó un ABSCESO que está aplastando el Haz de His. Es indicación absoluta e inmediata de cirugía cardiaca; los antibióticos no curan abscesos paravalvulares estructurados.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el estafilococo no solo muerde las 'puertitas' de la válvula, muerde los marcos y hace cavernas de pus. Si esa caverna empuja los cables eléctricos que pasan justo por detrás, el electrocardiograma te avisa alargando el PR. Un residente estrella mira el electro y diagnostica el absceso de raíz aórtica antes de que el ecocardiografista llegue. Si demoras, el absceso corta el cable y el paciente cae en paro cardíaco (Bloqueo completo). A quirófano de inmediato.",
    keyPoints: [
      "Endocarditis Infecciosa (Aórtica) + Bloqueo AV Nuevo (PR largo) = Absceso Perivalvular Aórtico.",
      "Conducta innegociable: Cirugía de urgencia (recambio valvular y desbridamiento).",
      "Agente típico letal: Staphylococcus aureus."
    ]
  },
  {
    id: "umng-conv-ed2-85",
    university: "UMNG",
    examArea: "HEMATOLOGÍA",
    topic: "URGENCIAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un hombre de 72 años es traído a urgencias tras sufrir una caída desde su propia altura con golpe directo en la cabeza. Su esposa trae sus medicamentos y refiere que toma \"una pastillita para la arritmia\" y Warfarina todos los días. Al ingreso, el paciente se encuentra estuporoso, con Glasgow 10, y una hemiparesia izquierda. El TAC de cráneo revela un gran hematoma subdural agudo derecho con desplazamiento de la línea media. Se toman laboratorios urgentes que reportan un INR en 4.5 (marcadamente elevado). El neurocirujano indica craneotomía de emergencia para drenar el hematoma. Teniendo en cuenta la hemorragia intracraneal activa amenazante de la vida, ¿cuál es el tratamiento combinado de elección para revertir INMEDIATAMENTE el efecto de la Warfarina antes de entrar al quirófano?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Concentrado de Complejo Protrombínico (CCP) intravenoso + Vitamina K (Fitomenadiona) intravenosa lenta."
      },
      {
        id: "B",
        label: "B",
        text: "Plasma Fresco Congelado (PFC) a 15 mL/kg de forma rápida.",
        distractorProfile: "outdated_plasma_therapy",
        incorrectFeedback: "El plasma requiere pasar 2 litros de volumen para igualar al CCP; tarda horas y causa edema pulmonar (TACO). No es la primera línea en sangrado crítico intracraneal."
      },
      {
        id: "C",
        label: "C",
        text: "Idarucizumab o Andexanet alfa intravenoso en dosis única.",
        distractorProfile: "doac_antidotes",
        incorrectFeedback: "Estos son antídotos específicos para Nuevos Anticoagulantes Orales (Dabigatrán, Rivaroxabán), son inútiles contra la Warfarina."
      },
      {
        id: "D",
        label: "D",
        text: "Vitamina K oral a altas dosis y esperar 12 horas a que se formen los nuevos factores.",
        distractorProfile: "delay_fatal",
        incorrectFeedback: "Esperar 12 horas para un paciente con herniación cerebral inminente es homicidio por omisión."
      }
    ],
    correctOptionId: "A",
    explanation: "El tratamiento Gold Standard para revertir rápidamente la Warfarina en sangrados mayores (intracraneales) es el Concentrado de Complejo Protrombínico (CCP - Beriplex/Octaplex) + Vitamina K IV. El CCP tiene los factores listos (II, VII, IX, X) en bajo volumen y normaliza el INR en 15 minutos (Efecto Inmediato). La Vitamina K se administra al mismo tiempo porque el hígado demorará 6-12 horas en usarla para crear nuevos factores (Efecto Sostenido). El Plasma Fresco (PFC) se relega por demorar horas en transfundir y causar sobrecarga hídrica.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el neurocirujano no tocará esa cabeza con un bisturí si el INR está en 4.5; el paciente se desangraría por la herida capilar. Si usas Plasma, debes pedirlo, descongelarlo y colgar 5 bolsas; cuando termines, el paciente ya estará con muerte cerebral. El Complejo Protrombínico es un vial chiquito en la nevera de urgencias, se pasa en 5 minutos y PUM, el INR de 4.5 cae a 1.0 en frente de tus ojos. Esa es la verdadera reanimación moderna.",
    keyPoints: [
      "Hemorragia mayor por Warfarina (Vitamina K antagonista): Antídoto ultrarrápido = Concentrado de Complejo Protrombínico (CCP) IV.",
      "Terapia obligatoria de sostén: Vitamina K Intravenosa lenta (empalma el efecto a largo plazo).",
      "Ventaja del CCP vs Plasma Fresco: Rapidez extrema (minutos vs horas) y previene sobrecarga de volumen (edema agudo)."
    ]
  },
  {
    id: "umng-conv-ed2-86",
    university: "UMNG",
    examArea: "MEDICINA INTERNA",
    topic: "GASTROENTEROLOGÍA / INFECTOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Una mujer de 75 años se encuentra en su octavo día de hospitalización tras una cirugía de prótesis de cadera, complicada con una infección del sitio operatorio para la cual ha recibido Clindamicina intravenosa durante una semana. El día de hoy inicia con un cuadro de diarrea acuosa profusa (12 deposiciones al día), dolor abdominal tipo cólico, fiebre de 38.5°C y distensión abdominal. Los exámenes reportan un hemograma con una leucocitosis de 22.000 cél/mm³ y Creatinina de 2.0 mg/dL (basal de 0.8 mg/dL). Usted confirma el diagnóstico de colitis por Clostridioides difficile mediante la toxina en heces. De acuerdo a las guías actualizadas de la Sociedad Americana de Enfermedades Infecciosas (IDSA), ¿cuál es el tratamiento oral de primera línea que debe instaurarse para esta paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Metronidazol 500 mg vía oral cada 8 horas.",
        distractorProfile: "outdated_guideline",
        incorrectFeedback: "Metronidazol fue retirado como 1ra línea por la IDSA en 2017 por sus altas fallas terapéuticas; usarlo en colitis severa está contraindicado."
      },
      {
        id: "B",
        label: "B",
        text: "Vancomicina 125 mg vía oral cada 6 horas o Fidaxomicina oral."
      },
      {
        id: "C",
        label: "C",
        text: "Loperamida a dosis de titulación para detener la pérdida de fluidos, sin necesidad de suspender antibióticos.",
        distractorProfile: "fatal_antidiarrheal",
        incorrectFeedback: "Los antidiarreicos paralizan el intestino y atrapan las toxinas, induciendo muerte por Megacolon Tóxico."
      },
      {
        id: "D",
        label: "D",
        text: "Vancomicina intravenosa a dosis de 15 mg/kg cada 12 horas.",
        distractorProfile: "wrong_route",
        incorrectFeedback: "La vancomicina por la vena (IV) NO se secreta a la luz del intestino; no matará a los clostridios pegados en el colon. Siempre debe ser VÍA ORAL."
      }
    ],
    correctOptionId: "B",
    explanation: "Las guías IDSA/SHEA actuales abolieron el Metronidazol oral de la primera línea. El tratamiento universal primario para cualquier episodio de Clostridioides difficile (leve o severo) es VANCOMICINA ORAL o FIDAXOMICINA. (El caso de la viñeta es Severo por Leucocitosis >15,000 y falla renal, reafirmando esto). La Vancomicina dada por vía oral no se absorbe a la sangre; se queda secuestrada 100% en la luz colónica atacando directamente las bacterias.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., olvídate del Metronidazol, es cosa del pasado. Y por favor, jamás de los jamases cometas el error de prescribir 'Vancomicina Intravenosa' para una diarrea. Si la pones por la vena, limpia la sangre, pero no le llega ni un gramo al intestino, el Clostridium seguirá de fiesta. Rompe la ampolla líquida que tienes en urgencias, sírvesela a la paciente en un vasito de agua y dásela tragada (Vía oral). Bajarán litros del antibiótico como detergente, barriendo todo lo que encuentre en las paredes del colon.",
    keyPoints: [
      "Infección por C. difficile (Colitis Pseudomembranosa): Diarrea acuosa secundaria a antibióticos previos (Clindamicina, Cefalosporinas).",
      "Primera Línea de tratamiento MUNDIAL (IDSA): Vancomicina ORAL o Fidaxomicina.",
      "Contraindicación estricta: Antidiarreicos (Loperamida), precipitan megacolon tóxico."
    ]
  },
  {
    id: "umng-conv-ed2-87",
    university: "UMNG",
    examArea: "MEDICINA INTERNA",
    topic: "NEUROLOGÍA E INFECTOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un joven de 24 años es traído por sus compañeros de universidad tras presentar fiebre de 39°C de dos días de evolución y dolor de cabeza intenso. En las últimas 12 horas, sus amigos notan que está profundamente desorientado, ha presentado alucinaciones consistentes en \"percibir fuertes olores a goma quemada\" (alucinaciones olfatorias) y finalmente presentó una crisis epiléptica focal motora en su brazo izquierdo que progresó a secundaria generalizada. A la exploración neurológica no hay franca rigidez de nuca ni rash. Se realiza una Punción Lumbar (LCR) que reporta: 150 leucocitos (90% linfocitos), Glucosa de 65 mg/dL (sérica de 90 mg/dL), proteínas levemente elevadas y la presencia de 1.500 eritrocitos/mm³ en un líquido que NO fue traumático. ¿Cuál es el diagnóstico más probable y la terapia antiviral específica que debe instaurarse de INMEDIATO de forma empírica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Meningitis aséptica por Enterovirus / Manejo de soporte y analgésicos.",
        distractorProfile: "meningitis_vs_encephalitis",
        incorrectFeedback: "La meningitis viral pura no altera el estado mental. La presencia de psicosis, alucinaciones y convulsiones localiza la infección dentro de la masa encefálica (Encefalitis)."
      },
      {
        id: "B",
        label: "B",
        text: "Encefalitis Viral por Herpes Simple tipo 1 (VHS-1) / Aciclovir intravenoso."
      },
      {
        id: "C",
        label: "C",
        text: "Absceso cerebral estafilocócico secundario a consumo de drogas / Cefepime + Vancomicina.",
        distractorProfile: "bacterial_abscess",
        incorrectFeedback: "Un absceso daría LCR bacteriano purulento (Neutrófilos altos y Glucosa consumida <40 mg/dL). Aquí hay linfocitos y glucosa normal (patrón viral)."
      },
      {
        id: "D",
        label: "D",
        text: "Neurocisticercosis en fase racemosa / Praziquantel y Dexametasona.",
        distractorProfile: "parasitic_mimic",
        incorrectFeedback: "Da convulsiones, pero es subaguda-crónica, no se presenta con fiebre aguda destructiva temporal de 2 días."
      }
    ],
    correctOptionId: "B",
    explanation: "El VHS-1 causa la encefalitis viral fatal más frecuente. Su firma distintiva es la necrosis hemorrágica de los Lóbulos Temporales (y frontales inferiores). Como afecta el temporal, los pacientes debutan con amnesia, alucinaciones extrañas (olfatorias/gustativas), alteraciones severas de la personalidad y convulsiones focales. El LCR muestra pleocitosis Linfocitaria, PERO característicamente presenta Eritrocitos (glóbulos rojos) por la destrucción del cerebro, con glucosa normal. Todo paciente con sospecha clínica y LCR viral DEBE recibir Aciclovir Intravenoso a dosis plenas empírico sin esperar el resultado de la PCR.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el Herpes se sube al cerebro por el nervio olfatorio o trigémino y se va directo a licuar el lóbulo temporal. El muchacho convulsiona, se vuelve psicótico y huele llantas quemadas donde no las hay. Cuando sacas el líquido de su columna, te asustas porque sale rojo; es la sangre de su lóbulo que se está necrosando. Tienes que colgar el goteo de Aciclovir IV en urgencias. Cada hora que pierdas dudando o esperando exámenes, el virus destruirá otro millón de neuronas de la memoria de forma irreversible.",
    keyPoints: [
      "Encefalitis vs Meningitis: En la Encefalitis hay estado mental alterado o convulsiones focalizadas (afectación parenquimatosa).",
      "Encefalitis por VHS-1: Tropismo Lóbulo Temporal (alucinaciones olfatorias, psicosis). LCR con Eritrocitos.",
      "Terapia salvavidas empírica innegociable: Aciclovir IV inmediato."
    ]
  },
  {
    id: "umng-conv-ed2-88",
    university: "UMNG",
    examArea: "PEDIATRÍA",
    topic: "ENDOCRINOLOGÍA - TAMIZAJE",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Usted se encuentra en la consulta de primer nivel revisando a un lactante masculino de 5 semanas (1 mes) de vida, procedente de un resguardo indígena lejano, cuya madre no tuvo controles prenatales ni le realizó exámenes al nacer (no tiene tamizaje neonatal). La madre refiere que es \"el mejor bebé del mundo porque nunca llora, duerme 20 horas al día y es muy tranquilo\", aunque admite que tiene problemas para amamantarlo porque succiona muy débil y lleva estreñido dos semanas. Al examen físico, usted nota un bebé francamente letárgico, con piel seca y manchada (ictericia prolongada), llanto ronco, una lengua enorme y gruesa que protruye de la boca (macroglosia), fontanelas anterior y posterior excesivamente amplias, y una hernia umbilical de 4 cm. ¿Cuál es el diagnóstico clínico evidente y cuál es la consecuencia devastadora e irreversible si no se inicia el tratamiento hormonal en los próximos días?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Síndrome de Down (Trisomía 21) / Retraso psicomotor genéticamente determinado.",
        distractorProfile: "genetic_phenotype_mimic",
        incorrectFeedback: "El Down da macroglosia, pero sus rasgos faciales son universales y no es clásicamente asociado a llanto ronco, ictericia extrema, hernia umbilical gigante y letargia profunda tratable."
      },
      {
        id: "B",
        label: "B",
        text: "Hipotiroidismo Congénito / Discapacidad intelectual profunda y permanente (Cretinismo)."
      },
      {
        id: "C",
        label: "C",
        text: "Síndrome de Beckwith-Wiedemann / Desarrollo precoz de tumor de Wilms o Hepatoblastoma.",
        distractorProfile: "macroglossia_mimic",
        incorrectFeedback: "Da macroglosia y onfalocele, pero cursa con hipoglucemia y crecimiento exagerado (macrosomía), no ictericia y apatía."
      },
      {
        id: "D",
        label: "D",
        text: "Mucopolisacaridosis (Síndrome de Hurler) / Muerte temprana por afectación cardiorrespiratoria por depósito de GAGs.",
        distractorProfile: "metabolic_mimic",
        incorrectFeedback: "Aparece clínicamente visible después de varios meses o el primer año de vida, no en la semana 4 letárgica."
      }
    ],
    correctOptionId: "B",
    explanation: "El Hipotiroidismo Congénito primario en recién nacidos se detecta mediante el tamizaje neonatal porque al nacer lucen normales (usan hormonas maternas transplacentarias). Cuando éstas se agotan hacia el primer mes, desarrollan la clínica clásica: \"el buen bebé que duerme demasiado\" (letargia profunda), Macroglosia, Hernia umbilical, piel moteada e ictericia. La hormona tiroidea es INDISPENSABLE para la mielinización neuronal precoz; si no se inicia Levotiroxina antes de los primeros 1-2 meses de vida, el cerebro no madura, causando Discapacidad Intelectual (Retraso Mental) profundo y para toda la vida (Cretinismo).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., esta viñeta te aprieta el corazón en la vida real. La mamá que cree que el niño es un 'angelito tranquilito' que no molesta. La verdad es que su cerebro se está apagando. El tamizaje con punción del talón mundial existe esencialmente para no saltarse esto. Tienes una ventana diminuta de pocas semanas. Si le recubres Levotiroxina hoy, el niño puede ser ingeniero y brillante. Si lo despachas como \"sano\", el daño cerebral será irreversible; lo condenaste al cretinismo.",
    keyPoints: [
      "Clínica clásica del mes de nacido: Letargia extrema + Macroglosia + Hernia Umbilical + Constipación.",
      "Falla en el diagnóstico precoz = Cretinismo (Discapacidad intelectual permanente e intratable).",
      "Medida de prevención universal: Tamizaje neonatal (TSH de cordón o talón) a todos los recién nacidos."
    ]
  },
  {
    id: "umng-conv-ed2-89",
    university: "UMNG",
    examArea: "MEDICINA INTERNA",
    topic: "INFECTOLOGÍA Y EPIDEMIOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un hombre de 28 años, recientemente diagnosticado con Infección por VIH (CD4 en 150 células/mm³), asiste a su consulta de control tosiendo esputo hemoptoico desde hace un mes, con fiebre nocturna y gran pérdida de peso. Usted solicita una radiografía de tórax que evidencia un infiltrado cavitado en el lóbulo superior derecho. Teniendo una alta sospecha de Tuberculosis Pulmonar, usted solicita tres muestras de esputo para Baciloscopia (Tinción de Ziehl-Neelsen o ácido-alcohol resistente). El laboratorio reporta las TRES baciloscopias como NEGATIVAS (-). Teniendo en cuenta su condición de inmunosupresión y las guías de la OMS, ¿cuál es la prueba de biología molecular OBLIGATORIA y prioritaria que usted debe solicitar en la muestra de esputo para confirmar el diagnóstico y guiar la terapia en pocas horas?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Cultivo de esputo en medio sólido de Löwenstein-Jensen.",
        distractorProfile: "too_slow_gold_standard",
        incorrectFeedback: "El cultivo es muy sensible, pero toma entre 4 a 8 SEMANAS en crecer. Un paciente con SIDA avanzará rápido. No es la prueba RÁPIDA molecular solicitada."
      },
      {
        id: "B",
        label: "B",
        text: "Prueba de Tuberculina (PPD) o QuantiFERON-TB Gold en sangre.",
        distractorProfile: "latent_tb_test",
        incorrectFeedback: "PPD o IGRA detectan exposición pasada (TB Latente). No diagnostican si la tos/cavitación de hoy es por tuberculosis activa."
      },
      {
        id: "C",
        label: "C",
        text: "Prueba Xpert MTB/RIF (Prueba Molecular Rápida / Reacción en Cadena de Polimerasa)."
      },
      {
        id: "D",
        label: "D",
        text: "Broncoscopia urgente con Lavado broncoalveolar para baciloscopia.",
        distractorProfile: "unnecessary_invasive",
        incorrectFeedback: "La broncoscopia es invasiva; primero debes agotar la sensibilidad abrumadora de la PCR molecular (GeneXpert) en el mismo esputo antes de invadir."
      }
    ],
    correctOptionId: "C",
    explanation: "Los pacientes inmunosuprimidos (VIH/SIDA) no logran formar buenas lesiones necróticas pulmonares que arrojen billones de bacterias, haciéndolos Paucibacilares (muy pocos bacilos en saliva). Esto hace que la Baciloscopia con microscopio humano sea falsamente negativa en >50% de los casos de VIH. La OMS revolucionó el mundo indicando la Prueba Rápida Molecular (Xpert MTB/RIF) como de elección inicial universal: toma una muestra de esputo, extrae ADN del bacilo, da resultado confirmatorio en 2 HORAS y, simultáneamente, avisa si la cepa es resistente a Rifampicina (fármaco maestro de la TB).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., leer una baciloscopia a ojo limpio es duro, y en un paciente con SIDA es casi adivinar. El GeneXpert (Xpert MTB/RIF) es la maravilla moderna. Tú colocas el esputo en un cartuchito de la máquina, te vas a tomar tinto y en 2 horas la pantalla te escupe dos joyas: '¡Sí hay ADN de tuberculosis, y agárrese porque es multirresistente!'. Salvó al paciente de morir 8 semanas esperando el viejo cultivo de Löwenstein, y salvó a la comunidad del contagio.",
    keyPoints: [
      "Pacientes VIH con sospecha clínica de TB = Falsos Negativos en Baciloscopia (Paucibacilares).",
      "Prueba de oro inicial y molecular: Xpert MTB/RIF en esputo.",
      "Beneficio 2 en 1: Alta sensibilidad y diagnóstico simultáneo de Resistencia a Rifampicina en 2 horas."
    ]
  },
  {
    id: "umng-conv-ed2-90",
    university: "UMNG",
    examArea: "PSIQUIATRÍA",
    topic: "ÉTICA MÉDICA Y LEGAL",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un joven de 20 años es traído al servicio de urgencias por sus padres después de que lo encontraron en el balcón del apartamento con un cinturón anudado al cuello, a punto de saltar. El paciente fue bajado a la fuerza por el padre y no presenta lesiones físicas. En la evaluación inicial, el joven es hostil, diagnosticado previamente con Trastorno Depresivo Mayor, y le declara a usted fríamente: \"No me quiero quedar en este hospital inútil. En cuanto salga de aquí, voy a encontrar otra soga, no fallaré y por fin me quitaré la vida, no hay nada que ustedes puedan hacer\". Los padres, asustados pero manipulados por la ira del muchacho, le ruegan a usted: \"Doctor, fírmenos el alta voluntaria bajo nuestra responsabilidad legal, nosotros nos lo llevamos a la casa, lo encerramos en el cuarto y no lo dejamos salir, lo cuidaremos bien\". Frente a la normativa ética y de salud mental en Colombia (Ley 1616), ¿cuál DEBE ser su proceder clínico inquebrantable?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Aceptar y firmar el alta voluntaria a los padres, ya que ellos asumen el riesgo como acudientes legales, dándole cita por psiquiatría prioritaria.",
        distractorProfile: "fatal_legal_omission",
        incorrectFeedback: "Un 'alta bajo responsabilidad' en un suicida activo carece de validez legal. Si se mata afuera, eres jurídicamente responsable por abandono de paciente y homicidio culposo."
      },
      {
        id: "B",
        label: "B",
        text: "Negar la salida, aplicar sedación mecánica o química (contención) e indicar una Hospitalización Involuntaria Psiquiátrica bajo el marco legal de riesgo inminente para sí mismo."
      },
      {
        id: "C",
        label: "C",
        text: "Convencer al paciente de firmar un \"Contrato de No Suicidio\" por escrito; si él acepta, puede ser dado de alta con sus padres.",
        distractorProfile: "pseudo_psychiatry",
        incorrectFeedback: "Los contratos de no suicidio son nulos médico-legalmente en la fase de letalidad alta aguda."
      },
      {
        id: "D",
        label: "D",
        text: "Contactar a la policía para que el paciente sea trasladado a un calabozo policial hasta que ceda su agresividad e ideación suicida.",
        distractorProfile: "criminalizing_mental_illness",
        incorrectFeedback: "El suicidio es una urgencia de salud, el hospital no puede deshacerse de su función enviándolo al calabozo."
      }
    ],
    correctOptionId: "B",
    explanation: "El Paternalismo Médico Justificado es un derecho y obligación del médico general en urgencias (amparado en leyes de salud mental ej. Ley 1616 Colombia). Cuando un paciente se constituye en Peligro inminente para sí mismo (ideación suicida letal y planificada) o para terceros (homicida), su autonomía se suspende legalmente. El médico DEBE retenerlo en el hospital contra su voluntad (Hospitalización Involuntaria) recurriendo a contención física/química si fuese necesario. Los familiares no pueden firmar un \"alta voluntaria\", ya que no tienen autorización legal para secundar la muerte inminente del joven.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el papelógrafo de 'salida voluntaria (AMA)' sirve si el paciente se quiere ir con una uña encarnada, pero es basura legal si se lo das a un suicida franco o a un infartado. Los padres pueden rogarte llevárselo y prometer 'cuidarlo mucho'. Si tú lo despachas y mañana amanece colgado en el clóset de su casa, la fiscalía te abrirá un proceso penal por omisión. Eres el garante de la vida en ese hospital. Llama al guardia, utiliza medicamentos de sedación suave (haloperidol, diazepam), sujétalo con protocolo y di firmemente 'nadie sale de urgencias hasta que lo autorice psiquiatría'.",
    keyPoints: [
      "Amenaza inminente contra la propia vida = Supresión legal temporal de la autonomía del paciente.",
      "Conducta clínica mandatoria: Hospitalización Involuntaria (Apoyada en sedación y contención).",
      "Documentos de 'Alta bajo responsabilidad propia/familiar' son NULOS legalmente ante este riesgo inminente."
    ]
  }
];
