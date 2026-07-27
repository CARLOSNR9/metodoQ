import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UMNG — Edición #1 (26 jul 2026) · Preguntas #51–#60.
 */
export const UMNG_CONV_2026_07_26_51_60_QUESTIONS: TrainingQuestion[] = [
  {
    id: "umng-conv-2026-07-26-51",
    university: "UMNG",
    examArea: "TRAUMA / CIRUGÍA GENERAL",
    topic: "CIRUGÍA GENERAL",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un hombre de 32 años es traído a urgencias con una herida por arma blanca en el cuello. La herida se localiza en la cara lateral derecha, a nivel del cartílago cricoides y por debajo del ángulo de la mandíbula (Zona II del cuello). Al examen físico, el paciente presenta estridor inspiratorio leve, pero el hallazgo más alarmante es un hematoma de crecimiento rápido y expansivo debajo de la herida, asociado a un sangrado externo pulsátil. El paciente se encuentra pálido, con PA 85/50 mmHg y FC 125 lpm. Según los protocolos actuales de trauma cervical penetrante, ¿cuál es la conducta INMEDIATA de elección?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Solicitar una Angio-TC (Tomografía Computarizada con contraste angiográfico) de cuello de urgencia para definir la trayectoria y el vaso lesionado.",
        distractorProfile: "inappropriate_imaging_in_shock",
        incorrectFeedback: "La Angio-TAC se usa para pacientes ESTABLES con 'signos blandos'. En un paciente chocado con un hematoma creciendo, el TAC retrasa el manejo salvavidas."
      },
      {
        id: "B",
        label: "B",
        text: "Traslado inmediato a quirófano para cervicotomía exploratoria bajo anestesia general."
      },
      {
        id: "C",
        label: "C",
        text: "Realizar compresión directa prolongada y solicitar interconsulta a radiología intervencionista para embolización.",
        distractorProfile: "delay_definitive_airway",
        incorrectFeedback: "La embolización retrasa el control definitivo de la vía aérea (el hematoma lo asfixiará) y el empaquetamiento definitivo en quirófano."
      },
      {
        id: "D",
        label: "D",
        text: "Exploración digital y con pinzas hemostáticas ciegas en la sala de urgencias para pinzar el vaso sangrante.",
        distractorProfile: "fatal_blind_exploration",
        incorrectFeedback: "JAMÁS se debe explorar una herida penetrante de cuello con los dedos o pinzas en urgencias. Puede desalojar el coágulo y causar exanguinación masiva."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta Trauma cervical penetrante con 'Signos Duros' de lesión vascular (sangrado activo pulsátil, hematoma expansivo, choque). Según el ATLS y consensos de trauma, ante la presencia de CUALQUIER signo duro, la conducta innegociable es la exploración quirúrgica inmediata (cervicotomía). No hay tiempo para estudios de imagen en pacientes inestables.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nSi a este paciente lo acuestas en el tubo del tomógrafo (TAC), el hematoma va a seguir creciendo hasta aplastar la tráquea, o el sangrado lo va a exanguinar. En trauma de cuello, la decisión es binaria: ¿Está estable o se está muriendo? Si se está muriendo (signos duros), la única 'placa' que necesitas es la luz de la lámpara del quirófano para abrir el platisma, reparar la carótida y salvarle el cerebro.",
    keyPoints: [
      "Cuando veas:",
      "• Trauma penetrante de cuello + Signos Duros (Sangrado a chorro, Hematoma expansivo, Choque, Burbujeo).",
      "Debes pensar en:",
      "QUIRÓFANO Inmediato (Cervicotomía exploratoria).",
      "Tema: ATLS / Trauma de Cuello."
    ]
  },
  {
    id: "umng-conv-2026-07-26-52",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Una paciente de 25 años, G1P1, acaba de dar a luz a un recién nacido macrosómico de 4.200 g tras un trabajo de parto prolongado (fase expulsiva de 2 horas). Durante el manejo activo del alumbramiento, el médico interno tracciona firmemente el cordón umbilical mientras presiona el fondo uterino. Súbitamente, la paciente refiere un dolor pélvico lancinante, el cordón \"se alarga\" rápidamente, y a la inspección vaginal se observa una masa rojo-violácea y carnosa asomando a través del introito. Inmediatamente después, la paciente presenta sangrado masivo, entra en choque severo (PA 60/40 mmHg) desproporcionado al volumen de sangre perdido. A la palpación abdominal, el útero no se encuentra. ¿Cuál es el paso INICIAL MÁS CRÍTICO en la maniobra de rescate de esta paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Desprender manualmente la placenta adherida a la masa para reducir el volumen y luego reintroducir el útero.",
        distractorProfile: "fatal_premature_placental_removal",
        incorrectFeedback: "Error fatal. La placenta invertida actúa como 'tapón' de los senos venosos. Si la arrancas antes de devolver el útero a la cavidad abdominal, desatarás una hemorragia masiva incontrolable."
      },
      {
        id: "B",
        label: "B",
        text: "Realizar de inmediato la Maniobra de Johnson (presión manual en el fondo de la masa) SIN retirar la placenta."
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar infusión de Oxitocina a altas dosis para contraer la masa y facilitar su reducción.",
        distractorProfile: "wrong_timing_for_uterotonic",
        incorrectFeedback: "Si das oxitocina ahora, el cérvix y el útero se contraerán fuertemente estando invertidos, haciendo físicamente imposible reintroducir el útero por la vagina."
      },
      {
        id: "D",
        label: "D",
        text: "Preparar a la paciente para histerectomía abdominal de urgencia debido a la ruptura uterina.",
        distractorProfile: "premature_surgical_intervention",
        incorrectFeedback: "La histerectomía es el último recurso si fallan las maniobras manuales (vía Huntington o Haultain), no el paso inicial."
      }
    ],
    correctOptionId: "B",
    explanation: "El cuadro es de Inversión Uterina Aguda (Tríada: Masa carnosa en vagina + Choque desproporcionado + Fondo uterino no palpable en abdomen). La Maniobra de Johnson consiste en usar el puño para empujar el fondo uterino invertido hacia arriba, de vuelta a su posición anatómica, INMEDIATAMENTE. Regla de oro: LA PLACENTA NO SE QUITA HASTA QUE EL ÚTERO ESTÉ EN SU LUGAR, para no destapar los senos venosos uterinos.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la inversión uterina es el terror de las salas de parto. Métete el guante, haz un puño, apóyalo en el fondo de esa masa carnosa y empuja hacia el ombligo como si no hubiera un mañana. Si le quitas la placenta ahí afuera, los vasos uterinos abiertos rociarán el techo de sangre. ¡Cálmalo, devuélvelo y luego sí, que sangre adentro donde se puede contraer!",
    keyPoints: [
      "Cuando veas:",
      "• Tracción excesiva de cordón + Masa vaginal + No se palpa útero + Choque severo.",
      "Debes pensar en:",
      "Inversión Uterina. Paso 1: Maniobra de Johnson INMEDIATA. Regla: NO quitar placenta hasta reducir el útero.",
      "Tema: Ginecología y Obstetricia / Emergencias del Parto."
    ]
  },
  {
    id: "umng-conv-2026-07-26-53",
    university: "UMNG",
    examArea: "TOXICOLOGÍA / CARDIOLOGÍA",
    topic: "TOXICOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un hombre de 65 años, hipertenso y con cardiopatía isquémica, ingresa al servicio de urgencias letárgico tras haber ingerido un puñado de sus medicamentos en un intento de suicidio hace 2 horas. Al examen físico: PA 70/40 mmHg, FC 38 lpm (bradicardia extrema), SatO2 95%. El ECG muestra bradicardia sinusal con un intervalo PR prolongado (bloqueo AV de primer grado) y complejos QRS estrechos. Como parte del abordaje toxicológico, se solicita una glucometría que reporta 45 mg/dL (Hipoglucemia). A pesar de administrar 2 litros de cristaloides y Atropina IV, el paciente persiste chocado y bradicárdico. ¿Cuál es el antídoto farmacológico de elección en este cuadro toxicológico específico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Gluconato de Calcio intravenoso.",
        distractorProfile: "calcium_channel_blocker_antidote",
        incorrectFeedback: "El Gluconato de Calcio es el antídoto para intoxicación por Bloqueadores de Calcio, los cuales causan bradicardia + hipotensión, pero con HIPERGLUCEMIA (por bloqueo de insulina)."
      },
      {
        id: "B",
        label: "B",
        text: "Glucagón intravenoso a altas dosis."
      },
      {
        id: "C",
        label: "C",
        text: "Emulsión lipídica intravenosa al 20% (Intralipid).",
        distractorProfile: "local_anesthetic_toxicity_rescue",
        incorrectFeedback: "El Intralipid es terapia de rescate para toxicidad por anestésicos locales, no primera línea aquí."
      },
      {
        id: "D",
        label: "D",
        text: "Infusión continua de Bicarbonato de Sodio.",
        distractorProfile: "tca_toxicity_antidote",
        incorrectFeedback: "El Bicarbonato es antídoto para ensanchamiento del QRS (Antidepresivos Tricíclicos), pero aquí el QRS es estrecho."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta intoxicación por Betabloqueadores (ej. Metoprolol, Propranolol). La clave diferencial con los calcioantagonistas (que dan la misma clínica cardiovascular) es la HIPOGLUCEMIA (al bloquear los receptores Beta-2 en el hígado, impiden la glucogenólisis). El antídoto específico es el Glucagón, el cual tiene un efecto inotrópico y cronotrópico positivo directo (aumentando AMPc) que puentea el receptor beta bloqueado.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nSi el receptor beta del corazón es una cerradura tapada con un chicle (el tóxico), la atropina o la adrenalina no podrán entrar a subir la frecuencia cardiaca. Necesitas abrir la puerta por otro lado. El Glucagón es esa 'llave maestra' que entra por la puerta trasera de la célula miocárdica (su propio receptor) y prende el motor de la adenilato ciclasa. Además, revierte la hipoglucemia al instante.",
    keyPoints: [
      "Cuando veas:",
      "• Bradicardia profunda + Choque + QRS estrecho + HIPOGLUCEMIA.",
      "Debes pensar en:",
      "Intoxicación por Betabloqueadores. Antídoto: Glucagón.",
      "Tema: Toxicología / Fármacos Cardiovasculares."
    ]
  },
  {
    id: "umng-conv-2026-07-26-54",
    university: "UMNG",
    examArea: "CIRUGÍA / ATLS / QUEMADOS",
    topic: "CIRUGÍA GENERAL",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un paciente masculino de 70 kg es rescatado de un incendio doméstico y traído a urgencias. Presenta quemaduras de espesor parcial y total (2do y 3er grado) que comprometen: todo el tronco anterior y toda la extremidad inferior derecha. El paciente no presenta compromiso de vía aérea. Siguiendo las directrices más actualizadas de la 10a Edición del ATLS para reanimación hídrica en quemados térmicos adultos, ¿qué volumen de Lactato de Ringer debe administrarse durante las **primeras 8 horas**?",
    options: [
      {
        id: "A",
        label: "A",
        text: "1.260 mL.",
        distractorProfile: "miscalculated_surface_area",
        incorrectFeedback: "Este volumen representaría el cálculo para solo un 18% de SCQ, asumiendo solo el tronco o la pierna."
      },
      {
        id: "B",
        label: "B",
        text: "2.520 mL."
      },
      {
        id: "C",
        label: "C",
        text: "5.040 mL.",
        distractorProfile: "outdated_parkland_formula",
        incorrectFeedback: "Este es el volumen que se pasaría en 8 horas si usarás la antigua (y peligrosa) fórmula de 4 mL de Parkland (4 x 70 x 36 = 10.080 / 2 = 5.040). El ATLS 10a bajó a 2 mL."
      },
      {
        id: "D",
        label: "D",
        text: "3.150 mL.",
        distractorProfile: "incorrect_pediatric_multiplier",
        incorrectFeedback: "Representa el uso del multiplicador de 3 mL (usado en pediatría)."
      }
    ],
    correctOptionId: "B",
    explanation: "Primero, calcular la SCQ (Regla de los 9): Tronco anterior completo (18%) + Extremidad inferior derecha (18%) = 36% SCQ. Segundo, aplicar fórmula ATLS 10a edición para adultos (quemadura térmica): 2 mL x kg x %SCQ. Total = 2 x 70 x 36 = 5.040 mL en 24 horas. Tercero, la administración es del 50% en las primeras 8 horas: 5.040 / 2 = 2.520 mL.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., olvídate del 4 mL en el adulto que se quemó con la estufa o el incendio de la casa. La medicina de trauma se volvió más cautelosa con los fluidos (fluid creep). Si le metes 5 litros de agua en las primeras 8 horas, su abdomen se hinchará tanto que comprimirá la vena cava, hará falla renal y los pulmones se llenarán de agua. Arranca con 2 mL, y si orina bien (0.5 cc/kg/h), déjalo ahí.",
    keyPoints: [
      "Cuando veas:",
      "• Reanimación en quemado térmico adulto (ATLS 10).",
      "Debes pensar en:",
      "Fórmula: 2 mL x kg x %SCQ. Dar 50% en primeras 8 horas.",
      "Tema: ATLS / Quemaduras."
    ]
  },
  {
    id: "umng-conv-2026-07-26-55",
    university: "UMNG",
    examArea: "PEDIATRÍA / CARDIOLOGÍA",
    topic: "PEDIATRÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un lactante de 8 meses con diagnóstico no corregido de Tetralogía de Fallot es traído a urgencias. La madre refiere que, tras un ataque prolongado de llanto intenso, el niño se tornó profundamente cianótico (\"morado\"), con respiración muy rápida e irritable. Al examen físico, se nota cianosis peribucal y distal severa, y llama la atención que el soplo sistólico eyectivo que normalmente se le escucha en el borde esternal izquierdo ha disminuido drásticamente de intensidad. SatO2 65%. ¿Cuál es la primera maniobra FÍSICA de rescate que debe realizarse inmediatamente en el box de urgencias mientras se preparan los medicamentos?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Realizar maniobra de Heimlich por sospecha de aspiración de cuerpo extraño durante el llanto.",
        distractorProfile: "misinterpretation_of_cyanosis",
        incorrectFeedback: "El cuadro no es respiratorio obstructivo (no hay estridor), es un cortocircuito cardíaco hipóxico (Tet Spell)."
      },
      {
        id: "B",
        label: "B",
        text: "Colocar al niño en posición genupectoral (rodillas al pecho)."
      },
      {
        id: "C",
        label: "C",
        text: "Aplicar oxígeno a alto flujo mediante cánula nasal y dejar al paciente en decúbito supino estricto.",
        distractorProfile: "ineffective_posturing",
        incorrectFeedback: "El oxígeno se debe administrar, pero el decúbito supino mantiene bajas las resistencias sistémicas, prolongando el cortocircuito de derecha a izquierda."
      },
      {
        id: "D",
        label: "D",
        text: "Realizar compresiones torácicas inmediatas por desaturación crítica (RCP).",
        distractorProfile: "premature_cpr",
        incorrectFeedback: "El niño está oxigenando poco, pero su corazón está latiendo rápido y compensando (no está en paro). Iniciar compresiones es inapropiado."
      }
    ],
    correctOptionId: "B",
    explanation: "El niño presenta una Crisis Hipóxica (Tet Spell) secundaria a Tetralogía de Fallot. Ocurre un espasmo infundibular (cierra salida a pulmones) y la sangre desoxigenada hace un cortocircuito derecha-izquierda masivo por la CIV hacia la aorta. (Por eso DESAPARECE EL SOPLO estenótico pulmonar). Al colocar las rodillas contra el pecho (genupectoral), se ocluyen las arterias femorales, aumentando masivamente la Resistencia Vascular Sistémica (RVS). Esto aumenta la presión aórtica y frena el escape de sangre desoxigenada por la CIV, forzándola al pulmón.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., los niños con Fallot son sabios. Cuando caminan en el parque y se sienten cansados y cianóticos, ellos solitos se ponen de cuclillas ('squatting'). Instintivamente 'doblan las mangueras' de las piernas para que la sangre no se vaya al cuerpo sin oxígeno, y obligan al corazón derecho a empujar la sangre hacia los pulmones. Si te llega un bebé así, dobla sus piernitas contra la barriga. Verás cómo en 30 segundos vuelve a ponerse rosado.",
    keyPoints: [
      "Cuando veas:",
      "• Niño con Tetralogía de Fallot + Llanto + Cianosis severa + Disminución de soplo.",
      "Debes pensar en:",
      "Crisis Hipóxica (Tet Spell). Maniobra física: Posición Genupectoral (rodillas al pecho).",
      "Tema: Pediatría / Cardiopatías Congénitas."
    ]
  },
  {
    id: "umng-conv-2026-07-26-56",
    university: "UMNG",
    examArea: "MEDICINA INTERNA / NEUMOLOGÍA - URGENCIAS",
    topic: "NEUMOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Mujer de 22 años asiste a urgencias por presentar crisis asmática aguda. Relata estar usando su inhalador de salbutamol en casa desde hace 3 días sin mejoría. Al ingreso, se encuentra alerta pero ansiosa, con disnea de reposo y hablando en frases cortas. Se auscultan sibilancias inspiratorias y espiratorias, uso de músculos accesorios y SatO2 del 91%. Usted inicia nebulizaciones continuas con salbutamol, bromuro de ipratropio y administra 50 mg de hidrocortisona IV. A la hora de manejo, la paciente se torna somnolienta, el tórax apenas se mueve y las sibilancias, que antes eran ruidosas, ahora son inaudibles (tórax silente). Los gases arteriales de control reportan: pH 7.28, PaO2 60 mmHg, PaCO2 42 mmHg. Ante esta gasometría, ¿cuál es la conducta INMEDIATA de mayor prioridad?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Dar de alta a la paciente ya que el PaCO2 es normal (42 mmHg), lo que indica compensación fisiológica exitosa.",
        distractorProfile: "misinterpretation_of_pseudonormal_gas",
        incorrectFeedback: "En asma agudo severo, un asmático taquipneico debería barrer el CO2 (hipocapnia). Si el PaCO2 es 'normal' (40-45 mmHg), indica fatiga respiratoria catastrófica."
      },
      {
        id: "B",
        label: "B",
        text: "Suspender los broncodilatadores nebulizados por toxicidad y administrar Sulfato de Magnesio intravenoso exclusivamente.",
        distractorProfile: "inadequate_escalation",
        incorrectFeedback: "El sulfato de magnesio es adyuvante, pero no revierte el paro respiratorio inminente (fatiga diafragmática) ya instaurado."
      },
      {
        id: "C",
        label: "C",
        text: "Preparar a la paciente para Intubación Orotraqueal y Ventilación Mecánica Invasiva."
      },
      {
        id: "D",
        label: "D",
        text: "Añadir Aminofilina endovenosa y aumentar el flujo de oxígeno suplementario a 15 L/min con mascarilla de no reinhalación.",
        distractorProfile: "proscribed_drug_use",
        incorrectFeedback: "Las metilxantinas (Aminofilina) están proscritas en urgencias por su toxicidad arrítmica y dar oxígeno no arregla el problema de falla de la bomba ventilatoria."
      }
    ],
    correctOptionId: "C",
    explanation: "El cuadro clínico es un Asma Casi Fatal (Status Asthmaticus). La combinación clínica de somnolencia, tórax silente (el bronquio está tan cerrado y hay tan poco flujo que ya no silba) y un PaCO2 que empieza a subir o es 'normal', es la indicación universal para Intubación Orotraqueal de urgencia. El PaCO2 normal en este contexto significa agotamiento diafragmático; el paciente hará paro respiratorio en minutos.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., un asmático en crisis es un corredor de maratón sin oxígeno. Respira a 35 por minuto. Con esa velocidad, debería tener el CO2 por el piso (alcalosis respiratoria). Si el CO2 de repente sube a rangos 'normales', es porque la máquina se rompió. El diafragma dijo 'no doy más' y se está deteniendo. El paciente se queda dormido por la narcosis de CO2 y el pulmón ya no hace ruido porque no entra aire. Agarra el laringoscopio y el tubo 7.5 de una vez.",
    keyPoints: [
      "Cuando veas:",
      "• Crisis asmática + Somnolencia + Tórax silente + PaCO2 Normal o Elevado.",
      "Debes pensar en:",
      "Fatiga de Músculos Respiratorios / Paro Inminente. Conducta: INTUBAR.",
      "Tema: Urgencias / Status Asthmaticus."
    ]
  },
  {
    id: "umng-conv-2026-07-26-57",
    university: "UMNG",
    examArea: "INFECTOLOGÍA / NEUROLOGÍA",
    topic: "INFECTOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Hombre de 42 años, portador de VIH con mala adherencia al tratamiento antirretroviral, acude a urgencias quejándose de cefalea insidiosa, opresiva y progresiva de 3 semanas de evolución, asociada a fotofobia y episodios esporádicos de desorientación. El recuento de CD4 es 45 células/mm³. Se realiza una punción lumbar: el LCR presenta una presión de apertura elevada (30 cmH2O), leve pleocitosis mononuclear, y la tinción de Tinta China revela levaduras encapsuladas. Ante el diagnóstico confirmado, ¿cuál es el esquema de tratamiento farmacológico OBLIGATORIO para la fase de INDUCCIÓN según las guías internacionales?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Fluconazol intravenoso altas dosis en monoterapia por 14 días.",
        distractorProfile: "suboptimal_induction_monotherapy",
        incorrectFeedback: "El Fluconazol se reserva para la fase de consolidación y mantenimiento. Como monoterapia de inducción en LCR, la mortalidad es mayor al ser fungistático."
      },
      {
        id: "B",
        label: "B",
        text: "Trimetoprim-Sulfametoxazol (Cotrimoxazol) intravenoso asociado a esteroides.",
        distractorProfile: "wrong_opportunistic_infection_tx",
        incorrectFeedback: "Es el tratamiento para Neumonía por P. jirovecii o Toxoplasma, no para hongos levaduriformes."
      },
      {
        id: "C",
        label: "C",
        text: "Anfotericina B Liposomal asociada a Flucitosina por 14 días."
      },
      {
        id: "D",
        label: "D",
        text: "Aciclovir intravenoso y Pirimetamina.",
        distractorProfile: "viral_and_protozoal_mix",
        incorrectFeedback: "El Aciclovir es para encefalitis viral (Herpes) y la Pirimetamina para Toxoplasmosis."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta Meningitis Criptocócica (Cryptococcus neoformans), confirmada por Tinta China positiva. El estándar de oro mundial (Guías IDSA/OMS) para la fase de inducción (las primeras 2 semanas) es la terapia combinada fungicida: Anfotericina B (Liposomal preferida) + Flucitosina (5-FC). Esto elimina masivamente la carga fúngica en el cerebro.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nEl hongo Cryptococcus tiene una cápsula tan gruesa que el sistema inmune ni lo ve. Crece en los ventrículos y tapa las vellosidades que absorben el LCR. El paciente no muere de infección, muere porque la cabeza le va a explotar de presión. El tratamiento real, además de Anfotericina B y Flucitosina, son las Punciones Lumbares Evacuatorias diarias para bajar la presión a lo normal.",
    keyPoints: [
      "Cuando veas:",
      "• VIH con CD4 <100 + Cefalea indolente + Tinta China (+) en LCR.",
      "Debes pensar en:",
      "Meningitis Criptocócica. Inducción (14d): Anfotericina B + Flucitosina.",
      "Tema: Infectología / Infecciones Oportunistas SNC."
    ]
  },
  {
    id: "umng-conv-2026-07-26-58",
    university: "UMNG",
    examArea: "UROLOGÍA / INFECTOLOGÍA",
    topic: "UROLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un hombre de 62 años consulta al servicio de urgencias por un cuadro de 3 días de fiebre de 39°C, escalofríos, mialgias y disuria severa. El día de hoy presenta imposibilidad absoluta para orinar (retención urinaria aguda) y dolor intenso, sordo y profundo en el periné y la región suprapúbica. A su ingreso: PA 100/60 mmHg, FC 115 lpm. Usted sospecha fuertemente de una Prostatitis Bacteriana Aguda. ¿Qué maniobra diagnóstica o terapéutica está ESTRICTAMENTE CONTRAINDICADA en este momento y debe evitarse a toda costa?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Canalizar vena para administrar un bolo de cristaloides e inicio empírico de Ceftriaxona.",
        distractorProfile: "indicated_sepsis_management",
        incorrectFeedback: "La reanimación inicial y el antibiótico endovenoso precoz son mandatorios, NO están contraindicados."
      },
      {
        id: "B",
        label: "B",
        text: "Realizar un tacto rectal vigoroso con masaje prostático para obtener secreción y cultivarla."
      },
      {
        id: "C",
        label: "C",
        text: "Realizar una ecografía pélvica de vía urinaria para documentar el volumen de orina retenida.",
        distractorProfile: "indicated_noninvasive_imaging",
        incorrectFeedback: "La ecografía es segura, no invasiva y necesaria para confirmar el globo vesical."
      },
      {
        id: "D",
        label: "D",
        text: "Solicitar interconsulta a Urología para colocación de cistostomía suprapúbica.",
        distractorProfile: "indicated_safe_drainage",
        incorrectFeedback: "Es la conducta terapéutica correcta para derivar la orina en esta patología, evitando tocar la próstata."
      }
    ],
    correctOptionId: "B",
    explanation: "En una Prostatitis Bacteriana AGUDA, la glándula está masivamente inflamada y llena de microabscesos. Realizar un masaje prostático o palpación vigorosa 'exprime' bacterias (E. coli) al torrente sanguíneo, provocando Bacteriemia Masiva y Choque Séptico. El tacto rectal, si se hace, debe ser EXTREMADAMENTE suave; el masaje prostático está CONTRAINDICADO de forma absoluta.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la próstata infectada es como un grano gigante a punto de estallar, pero rodeado de venas de grueso calibre. Si metes el dedo por el recto y 'masajeas' esa próstata para que bote pus por la uretra, el 90% de ese pus se meterá en las venas pélvicas. En 20 minutos el paciente estará en choque séptico. Tacto gentil, antibiótico IV y cistostomía suprapúbica para sacar la orina.",
    keyPoints: [
      "Cuando veas:",
      "• Prostatitis Aguda (Fiebre + Dolor perineal + Disuria severa).",
      "Debes pensar en:",
      "CONTRAINDICADO: Masaje prostático (Riesgo de Sepsis) y Sondaje Uretral a ciegas.",
      "Tema: Urología / Prostatitis Aguda."
    ]
  },
  {
    id: "umng-conv-2026-07-26-59",
    university: "UMNG",
    examArea: "PSIQUIATRÍA / NEUROLOGÍA",
    topic: "PSIQUIATRÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un hombre de 26 años con diagnóstico reciente de Esquizofrenia paranoide fue ingresado a la sala de agudos psiquiátricos hace 3 días por un episodio de agitación psicomotora violenta, para lo cual se instauró terapia con Haloperidol intramuscular repetido. Hoy el paciente es transferido a la UCI médica porque es encontrado en cama, despierto pero mudo, con diaforesis profusa y fiebre de 40.8°C. Al examen físico: PA 170/110 mmHg fluctuante, FC 135 lpm. Presenta una rigidez muscular generalizada severa (\"rigidez en tubo de plomo\"). Los laboratorios reportan Leucocitosis de 18.000 y una Creatina Cinasa (CPK) disparada en 22.000 U/L. ¿Cuál es el diagnóstico sindrómico más preciso y el tratamiento farmacológico de rescate?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Síndrome Serotoninérgico / Ciproheptadina oral.",
        distractorProfile: "similar_syndrome_hyperreflexia",
        incorrectFeedback: "El Síndrome Serotoninérgico presenta HIPERREFLEXIA y mioclonías/clonus, a diferencia del SNM que presenta RIGIDEZ EXTREMA (plomo) e hiporreflexia."
      },
      {
        id: "B",
        label: "B",
        text: "Síndrome Neuroléptico Maligno / Dantroleno intravenoso o Bromocriptina."
      },
      {
        id: "C",
        label: "C",
        text: "Hipertermia Maligna por anestésicos / Dantroleno intravenoso de inmediato.",
        distractorProfile: "genetic_anesthetic_reaction",
        incorrectFeedback: "La clínica es idéntica, pero la hipertermia maligna es desencadenada EXCLUSIVAMENTE por anestésicos inhalados halogenados o Succinilcolina en quirófano, no por psicofármacos."
      },
      {
        id: "D",
        label: "D",
        text: "Catatonía Letal Aguda / Terapia Electroconvulsiva (TEC) sin necesidad de medicamentos.",
        distractorProfile: "psychiatric_nonpharmacologic_extreme",
        incorrectFeedback: "La TEC se reserva si el cuadro no responde al manejo médico, pero no es el tratamiento primario inicial de esta emergencia médica."
      }
    ],
    correctOptionId: "B",
    explanation: "El cuadro clínico corresponde al Síndrome Neuroléptico Maligno (SNM), secundario al bloqueo dopaminérgico por Haloperidol. La triada patognomónica es Rigidez extrema (tubo de plomo), fiebre severa y CPK muy alta. El tratamiento exige soporte UCI, enfriamiento, suspender el fármaco e iniciar Bromocriptina (agonista dopaminérgico) o Dantroleno (relajante muscular periférico).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., cuando un psiquiatra te pasa un paciente a la UCI porque 'se quedó tieso', es un código rojo. El Haloperidol le bloqueó la dopamina en el cerebro con tanta fuerza, que el 'termostato' (hipotálamo) se rompió (fiebre) y los ganglios basales trancaron todos los músculos (rigidez). Esa rigidez rompe el músculo, bota mioglobina (CPK de 22,000) y le tapa los riñones, causando insuficiencia renal aguda.",
    keyPoints: [
      "Cuando veas:",
      "• Antipsicótico típico + Rigidez en tubo de plomo + Fiebre + CPK Alta.",
      "Debes pensar en:",
      "Síndrome Neuroléptico Maligno. Tratamiento: Bromocriptina o Dantroleno.",
      "Tema: Psiquiatría / Emergencias Toxicológicas."
    ]
  },
  {
    id: "umng-conv-2026-07-26-60",
    university: "UMNG",
    examArea: "MEDICINA INTERNA / ENDOCRINOLOGÍA",
    topic: "ENDOCRINOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un paciente masculino de 50 años, asintomático, acude a revisión de resultados de laboratorio de rutina solicitados en el chequeo laboral anual. Usted revisa el perfil bioquímico y encuentra un nivel de Calcio sérico francamente elevado en 12.5 mg/dL (Normal 8.5-10.5). El paciente no tiene antecedentes de malignidad ni toma diuréticos. Al examinar el nivel de hormona paratiroidea (PTH) intacta en sangre, esta se reporta marcadamente elevada (110 pg/mL). El fósforo sérico está bajo (2.0 mg/dL). No hay síntomas de hipercalcemia aguda (no poliuria, no alteración mental). Ante la sospecha de un Hiperparatiroidismo Primario, ¿cuál es el examen diagnóstico de elección en este instante para confirmar la etiología estructural de esta patología?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Tomografía por Emisión de Positrones (PET-CT) de cuerpo entero.",
        distractorProfile: "excessive_malignancy_workup",
        incorrectFeedback: "Si la hipercalcemia fuera de origen maligno, la PTH estaría inhibida (BAJA). Como la PTH está ALTA, la causa es primaria en la paratiroides (Adenoma)."
      },
      {
        id: "B",
        label: "B",
        text: "Biopsia por Aspiración con Aguja Fina (BACAF) de la glándula tiroides.",
        distractorProfile: "wrong_anatomic_gland_biopsy",
        incorrectFeedback: "La tiroides NO es la culpable; el problema está en las paratiroides. Punzar la tiroides no sirve de nada."
      },
      {
        id: "C",
        label: "C",
        text: "Gammagrafía de paratiroides con Sestamibi-Tc99m o Ecografía de cuello por experto."
      },
      {
        id: "D",
        label: "D",
        text: "Densitometría ósea y radiografías de cráneo buscando lesiones líticas 'en sal y pimienta'.",
        distractorProfile: "evaluating_complications_not_etiology",
        incorrectFeedback: "Estos evalúan el daño a órgano blanco crónico, pero NO confirman la localización anatómica del adenoma paratiroideo para su extracción."
      }
    ],
    correctOptionId: "C",
    explanation: "El patrón de Calcio Alto, Fósforo Bajo y PTH Alta confirma el Hiperparatiroidismo Primario (causado usualmente por un Adenoma Paratiroideo único). Una vez diagnosticado bioquímicamente, el paso para 'encontrar al culpable' (Localización preoperatoria) es la Gammagrafía de paratiroides con Sestamibi-Tc99m, pues el radioisótopo es absorbido ávidamente por el adenoma hiperfuncionante.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nBioquímica básica que no perdona, colega. Si una paratiroides se vuelve tumor (adenoma), se enloquece y tira PTH sin freno. La PTH saca calcio de los huesos al plasma y bota el fósforo por la orina. Por eso Calcio arriba, Fósforo abajo. El cirujano te pedirá el Sestamibi, que funciona como un francotirador: ilumina el adenoma exacto para poder abrir el cuello y sacarlo sin lastimar las otras tres glándulas.",
    keyPoints: [
      "Cuando veas:",
      "• Calcio ALTO + Fósforo BAJO + PTH ALTA.",
      "Debes pensar en:",
      "Hiperparatiroidismo Primario (Adenoma). Estudio para localizarlo: Gammagrafía con Sestamibi-Tc99m.",
      "Tema: Endocrinología / Alteraciones del Calcio."
    ]
  }
];
