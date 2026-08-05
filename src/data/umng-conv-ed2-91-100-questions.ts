import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UMNG — Edición #2 (Simulacro 2) · Preguntas #91–#100.
 */
export const UMNG_CONV_ED2_91_100_QUESTIONS: TrainingQuestion[] = [
  {
    id: "umng-conv-ed2-91",
    university: "UMNG",
    examArea: "TRAUMA",
    topic: "ORTOPEDIA Y CIRUGÍA GENERAL",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un hombre de 45 años es ingresado a la sala de reanimación tras sufrir un aplastamiento por maquinaria pesada. A la exploración, presenta inestabilidad severa del anillo pélvico (\"pelvis en libro abierto\"). Su presión arterial es de 60/40 mmHg y la FC de 135 lpm. Siguiendo el protocolo ATLS, se coloca inmediatamente una faja pélvica a nivel de los trocánteres mayores y se inicia la transfusión masiva de hemoderivados (relación 1:1:1). Se realiza un Eco-FAST que resulta NEGATIVO (sin líquido libre intraabdominal). A pesar de la faja pélvica y la transfusión activa de 4 unidades de glóbulos rojos, el paciente persiste profundamente chocado (PA 65/40 mmHg). Teniendo en cuenta que no hay sangrado en tórax, abdomen ni extremidades, ¿cuál es el siguiente procedimiento INMEDIATO de elección para detener la exanguinación pélvica en este paciente inestable?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Retirar la faja pélvica y aplicar tracción esquelética bilateral con pesas.",
        distractorProfile: "femur_traction_mimic",
        incorrectFeedback: "La tracción esquelética estabiliza fracturas de fémur, no aporta hemostasia en el anillo pélvico destrozado. Retirar la faja empeora el sangrado."
      },
      {
        id: "B",
        label: "B",
        text: "Laparotomía exploratoria urgente para explorar y ligar los vasos ilíacos internos de forma directa.",
        distractorProfile: "fatal_laparotomy",
        incorrectFeedback: "Error clásico y fatal. Abrir la cavidad peritoneal libera el poco efecto de taponamiento natural. El paciente se desangrará masivamente del plexo venoso presacro incontrolable."
      },
      {
        id: "C",
        label: "C",
        text: "Empaquetamiento Pélvico Preperitoneal (Packing Pélvico) en quirófano o Angioembolización pélvica inmediata."
      },
      {
        id: "D",
        label: "D",
        text: "Realizar un lavado peritoneal diagnóstico (LPD) para confirmar micro-sangrados abdominales ocultos.",
        distractorProfile: "obsolete_diagnostic_delay",
        incorrectFeedback: "El FAST ya descartó un sangrado abdominal masivo. El paciente muere de sangrado pélvico retroperitoneal. Un LPD solo retrasa el salvamento."
      }
    ],
    correctOptionId: "C",
    explanation: "En fracturas de pelvis inestables con choque hemorrágico refractario (FAST Negativo, significa que la hemorragia es retroperitoneal), la faja pélvica cierra el anillo y disminuye el volumen pélvico taponando el sangrado venoso oseo/plexo. Si la faja no funciona, la hemorragia venosa es masiva o hay sangrado arterial. La conducta de salvamento absoluta es: Angioembolización pélvica (ideal para arterial si hay hemodinamia rápida) o Empaquetamiento Pélvico Preperitoneal (Packing: embutir compresas en el espacio de Retzius sin abrir el peritoneo hacia las vísceras) para detener la hemorragia venosa por compresión directa mecánica.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el sangrado pélvico es un monstruo que se esconde detrás del peritoneo. Nunca, escúchame bien, nunca dejes que el cirujano abra la barriga (Laparotomía) de forma convencional buscando ese sangrado; al abrir, la presión de aire chupa la sangre y el paciente muere desangrado en segundos. La solución es mecánica: haces un cortecito por encima del pubis, metes tu mano entre el hueso y la bolsa del peritoneo (sin romperla) y le metes compresas a presión (Packing preperitoneal) taponando las venas destrozadas. Si el sangrado es de una arteria, el radiólogo entra por la ingle y le dispara pegante a la arteria (Angioembolización).",
    keyPoints: [
      "Choque hemorrágico + Fractura de Pelvis Inestable + FAST Negativo = Hemorragia Pélvica Retroperitoneal refractaria.",
      "Maniobra inicial: Faja pélvica (cierre del anillo).",
      "Maniobras definitivas salvavidas: Empaquetamiento (Packing) Pélvico Preperitoneal o Angioembolización Pélvica. NUNCA laparotomía exploratoria tradicional."
    ]
  },
  {
    id: "umng-conv-ed2-92",
    university: "UMNG",
    examArea: "PEDIATRÍA",
    topic: "TOXICOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un niño de 3 años es traído por su madre a urgencias. Ella refiere que encontró al niño tosiendo vigorosamente en el garaje junto a una botella de plástico (reciclada de gaseosa) que contenía gasolina (Keroseno / Hidrocarburos) utilizada para limpiar herramientas. El niño huele a gasolina y tiene restos del líquido en su camiseta. Al ingreso, el paciente está asustado, con una FR de 40 rpm, SatO2 91% al ambiente, y a la auscultación presenta estertores crepitantes gruesos en la base pulmonar derecha. La madre le exige ansiosamente que \"le saque el veneno del estómago para que no se muera\". ¿Qué intervención está ESTRICTAMENTE CONTRAINDICADA y sería letal en este escenario toxicológico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar Oxígeno suplementario y realizar radiografía de tórax.",
        distractorProfile: "correct_action_mimic",
        incorrectFeedback: "Esta acción es correcta e indicada (Soporte respiratorio). La pregunta pide la acción contraindicada."
      },
      {
        id: "B",
        label: "B",
        text: "Inducir el vómito con jarabe de Ipecacuana o realizar un lavado gástrico vigoroso."
      },
      {
        id: "C",
        label: "C",
        text: "Retirar la ropa contaminada y lavar la piel del niño con agua y jabón.",
        distractorProfile: "correct_action_mimic",
        incorrectFeedback: "Esta acción es correcta para evitar quemaduras cutáneas y absorción. La pregunta pide la contraindicada."
      },
      {
        id: "D",
        label: "D",
        text: "Dejar al paciente en observación y ayuno estricto (NPO).",
        distractorProfile: "correct_action_mimic",
        incorrectFeedback: "Esta acción es correcta (NPO previene el vómito espontáneo). La pregunta pide la contraindicada."
      }
    ],
    correctOptionId: "B",
    explanation: "Los hidrocarburos (gasolina, kerosene, thinner) poseen toxicidad sistémica/gastrointestinal mínima. Su peligro absoluto radica en su bajísima viscosidad y alta volatilidad, lo que les permite resbalar hacia la vía aérea (broncoaspiración) y causar una Neumonitis Química fulminante (disolución del surfactante pulmonar). Inducir el vómito, dar carbón activado o meter sondas nasogástricas provoca que el hidrocarburo regrese por el esófago, garantizando una segunda broncoaspiración masiva letal. Está absolutamente CONTRAINDICADO el vaciamiento gástrico en intoxicación por hidrocarburos no halogenados.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., no importa cuánto te grite y te llore la mamá exigiendo un lavado. La gasolina en el estómago de ese niño es inocua, saldrá en las heces. Pero si tú le provocas el vómito o le empujas una manguera por la nariz, vas a hacer que él regurgite la gasolina. Esa gasolina vomitada va a patinar directo hacia su tráquea y disolverá todos los pulmones por dentro, induciendo una falla respiratoria mortal. Ponlo en posición cómoda, quítale la ropa mojada, dale oxígeno por cánula y espera a que la inflamación pulmonar (por la microgota que ya aspiró) pase con los días.",
    keyPoints: [
      "Tóxico ingerido: Hidrocarburos (Gasolina, Kerosene, Límpido).",
      "Peligro principal: Broncoaspiración y Neumonitis Química temprana.",
      "Regla universal: CONTRAINDICADO el lavado gástrico, la inducción del vómito y el carbón activado."
    ]
  },
  {
    id: "umng-conv-ed2-93",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "CARDIOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Una mujer de 29 años, cursando su semana 28 de gestación, ingresa a urgencias quejándose de inicio súbito de disnea de reposo, dolor torácico pleurítico y palpitaciones. A la exploración física, destaca la presencia de una pierna izquierda edematizada y eritematosa. Sus signos vitales: PA 110/70 mmHg, FC 115 lpm, SatO2 88% al ambiente. Se realiza un Angio-TAC de tórax pulmonar (bajo protocolo de protección fetal) que confirma un Tromboembolismo Pulmonar (TEP) en la arteria pulmonar principal derecha. La paciente se encuentra hemodinámicamente ESTABLE y no cursa con falla cardiaca derecha. ¿Cuál es la terapia anticoagulante de PRIMERA LÍNEA obligatoria que debe instaurarse para esta paciente embarazada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Warfarina oral (Antagonista de la Vitamina K) a dosis terapéuticas.",
        distractorProfile: "teratogenic_anticoagulant",
        incorrectFeedback: "La Warfarina es altamente teratogénica (hipoplasia nasal, condrodisplasia) y causa hemorragia fetal masiva. Contraindicada en embarazo."
      },
      {
        id: "B",
        label: "B",
        text: "Rivaroxabán o Apixabán oral (Anticoagulantes de Acción Directa - DOACs).",
        distractorProfile: "doac_pregnancy",
        incorrectFeedback: "Los DOACs cruzan la placenta y no son seguros en el embarazo."
      },
      {
        id: "C",
        label: "C",
        text: "Heparina de Bajo Peso Molecular (HBPM) como Enoxaparina en dosis terapéuticas subcutáneas."
      },
      {
        id: "D",
        label: "D",
        text: "Trombólisis sistémica con Alteplasa (rt-PA) intravenosa.",
        distractorProfile: "thrombolysis_stable",
        incorrectFeedback: "La trombólisis sistémica está reservada solo para TEP masivo (Inestable / Choque 60/40 mmHg). La paciente de la viñeta está hemodinámicamente estable (PA normal)."
      }
    ],
    correctOptionId: "C",
    explanation: "El embarazo es un estado hipercoagulable nato. Si una gestante hace TEP/TVP y está estable, el Gold Standard de anticoagulación internacional son las Heparinas de Bajo Peso Molecular (HBPM - Enoxaparina/Dalteparina). La maravilla farmacológica de las heparinas es que sus moléculas son grandes y polarizadas, por lo que NO cruzan la barrera placentaria y son 100% seguras para el feto. Se usan durante todo el embarazo hasta el puerperio. (La Warfarina y los DOACs cruzan la placenta y son tóxicos/teratogénicos).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el filtro de la placenta de esta mamá dejará pasar a las pastillas anticoagulantes modernas (DOACs) y a la vieja Warfarina. Si le das esas pastillas, el feto morirá desangrado o nacerá con la nariz y los huesos deshechos. En cambio, la Heparina es una molécula inmensamente gorda; rebota contra la barrera placentaria y jamás toca al bebé. Pínchala en su barriga con Enoxaparina cada 12 horas hasta que dé a luz y ambas vivirán.",
    keyPoints: [
      "Anticoagulante de elección en el embarazo (TVP/TEP): Heparinas de Bajo Peso Molecular (HBPM) o Heparina No Fraccionada.",
      "Justificación: NO cruzan la barrera placentaria (Ausencia total de teratogenicidad).",
      "Anticoagulantes orales (Warfarina/DOACs) están contraindicados de rutina en el embarazo por riesgo teratogénico y hemorrágico fetal."
    ]
  },
  {
    id: "umng-conv-ed2-94",
    university: "UMNG",
    examArea: "MEDICINA INTERNA",
    topic: "CARDIOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un hombre de 65 años ingresó hace 4 días a la Unidad de Cuidados Coronarios con diagnóstico de Infarto Agudo de Miocardio con elevación del ST (IAMCEST) de pared inferior, el cual no pudo ser reperfundido a tiempo debido a consulta muy tardía (>24h). El día de hoy, el paciente presenta un deterioro súbito: disnea severa progresiva, edema agudo de pulmón (crepitantes audibles hasta los ápices) y choque cardiogénico (PA 75/50 mmHg). Al auscultarlo, usted detecta un soplo holosistólico nuevo, fuerte, rudo, irradiado a la axila izquierda, que no estaba presente al ingreso, y que se escucha de mayor intensidad en el vértice cardíaco (foco mitral). ¿Cuál es la complicación mecánica catastrófica que acaba de ocurrir?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Ruptura de la pared libre del ventrículo izquierdo con taponamiento cardíaco.",
        distractorProfile: "free_wall_rupture",
        incorrectFeedback: "Causa disociación electromecánica súbita y Taponamiento, sin soplo holosistólico radiado a la axila. La sangre va al pericardio, no en reversa."
      },
      {
        id: "B",
        label: "B",
        text: "Ruptura del músculo papilar posteromedial con insuficiencia mitral aguda severa."
      },
      {
        id: "C",
        label: "C",
        text: "Ruptura del tabique interventricular (CIV post-infarto).",
        distractorProfile: "vsd_rupture",
        incorrectFeedback: "También da un soplo holosistólico, pero en el borde esternal izquierdo (irradiado a derecha) con frémito palpable, y se asocia predominantemente a IAM de pared Anterior."
      },
      {
        id: "D",
        label: "D",
        text: "Formación de un pseudoaneurisma ventricular izquierdo agudo.",
        distractorProfile: "pseudoaneurysm_chronic",
        incorrectFeedback: "Ocurre meses después y no causa edema pulmonar agudo y soplo sistólico mitral franco al día 4."
      }
    ],
    correctOptionId: "B",
    explanation: "Las complicaciones mecánicas del infarto ocurren entre el día 3 y el 14 post-IAM cuando el tejido muscular necrótico está en su punto más blando por la infiltración de macrófagos. El músculo papilar posteromedial sostiene la válvula mitral, pero tiene una irrigación única y frágil proveniente de la Coronaria Derecha. Si el paciente tuvo un IAM Inferior tardío, este músculo muere, se rompe y las valvas mitrales quedan 'sueltas' (Insuficiencia Mitral Aguda masiva). Esto produce un soplo holosistólico fuerte clásico en el ápex irradiado a la Axila y un Edema Agudo de Pulmón fulminante al devolverse toda la sangre a los pulmones. Requiere cirugía de reemplazo valvular urgente.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el corazón post-infarto es como mantequilla blanda. El pilar de carne que agarra las cuerdas del paracaídas (la válvula mitral) se pudrió y se cortó por la base. En cada latido del ventrículo izquierdo, el paracaídas se voltea al revés y bota toda la presión de sangre en reversa hacia los pulmones, inundándolos al instante. Por eso el paciente tose espuma y se asfixia en segundos. El soplo que escuchas yéndose hacia la axila de este infartado es el latigazo de la sangre devolviéndose. La furosemida no sella válvulas; el cirujano cardiovascular sí.",
    keyPoints: [
      "Complicación IAM Inferior (Día 3 a 5) + Edema Pulmonar Súbito + Soplo a la Axila = Ruptura Papilar Posteromedial.",
      "Diferencial: Complicación IAM Anterior + Soplo borde esternal + Frémito = Ruptura Septo (CIV).",
      "Tratamiento: Balón de Contrapulsación Intraaórtico de urgencia (puente) y Cirugía de reemplazo valvular mitral inmediata."
    ]
  },
  {
    id: "umng-conv-ed2-95",
    university: "UMNG",
    examArea: "TOXICOLOGÍA",
    topic: "MEDICINA TROPICAL E INFECTOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un agricultor de 30 años se encuentra limpiando el granero oscuro de su finca cuando siente un \"pinchazo\" leve en el antebrazo. Él no le da importancia. Treinta minutos después, empieza a experimentar un dolor exquisito y un calambre muscular violento en el antebrazo, que rápidamente progresa hacia todo el cuerpo. Al llegar a urgencias, el paciente luce angustiado, sudando a mares (hiperhidrosis extrema) y presenta fasciculaciones generalizadas. Lo más alarmante es que cursa con un dolor abdominal tipo cólico espantoso, con el abdomen contraído y duro como una tabla, simulando una peritonitis aguda. Su presión arterial es de 180/110 mmHg. ¿Cuál de los siguientes arácnidos es el responsable de este cuadro tóxico y cuál es la toxina involucrada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Araña Loxosceles laeta (Araña de rincón) / Esfingomielinasa-D.",
        distractorProfile: "loxoscelism_mimic",
        incorrectFeedback: "Loxosceles produce una lesión dermo-necrótica progresiva (placa livedoide o escara negra dolorosa a los días) y hemólisis sistémica, no calambres espásticos masivos ni abdomen en tabla."
      },
      {
        id: "B",
        label: "B",
        text: "Araña Phoneutria sp. (Oruga asesina) / Toxinas procoagulantes.",
        distractorProfile: "phoneutria_mimic",
        incorrectFeedback: "Phoneutria causa un dolor local desgarrador insoportable inmediato y priapismo clásico en hombres."
      },
      {
        id: "C",
        label: "C",
        text: "Escorpión Centruroides sp. / Toxinas bloqueadoras de potasio.",
        distractorProfile: "scorpion_mimic",
        incorrectFeedback: "Da dolor neuropático, nistagmo (ojos locos) y salivación masiva/vómitos pancreáticos, pero no una rigidez abdominal puramente en 'tabla' engañosa."
      },
      {
        id: "D",
        label: "D",
        text: "Araña Latrodectus mactans (Viuda negra) / Alfa-Latrotoxina."
      }
    ],
    correctOptionId: "D",
    explanation: "El Latrodectismo (por picadura de Viuda Negra, género Latrodectus mactans) es un síndrome neurotóxico puro causado por la Alfa-Latrotoxina. Esta toxina ataca la membrana presináptica neuronal formando poros que provocan una degranulación y vaciamiento masivo exocitótico de los neurotransmisores (Acetilcolina y Norepinefrina) en la placa motora. La lluvia masiva de Acetilcolina causa contracciones y calambres musculares brutales; clásicamente los músculos rectos abdominales se tensan creando un 'Abdomen en tabla' que engaña a los cirujanos imitando una peritonitis quirúrgica. La liberación de Norepinefrina dispara una tormenta adrenérgica (hipertensión, sudoración masiva, piloerección). Se trata con benzodiacepinas, analgésicos opioides y/o antiveneno.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el veneno de la Viuda Negra exprime a las neuronas como un limón. Todo tu cableado de movimiento se dispara a la vez. El paquete de los abdominales se contrae con un calambre tan salvaje que el abdomen se vuelve una pared de ladrillo. Si el paciente te oculta la picadura (porque a veces ni sienten la aguja inicial), el cirujano palpa la barriga y lo opera de urgencia buscando un apéndice perforado. Pregúntale si sudó como nunca en su vida y si estaba en el granero. Trátalo con Valium para apagar esos músculos eléctricos y dale Morfina para el dolor de los espasmos.",
    keyPoints: [
      "Latrodectismo (Viuda Negra): Toxina neurotóxica masiva presináptica (Alfa-latrotoxina).",
      "Tormenta Colinérgica (Calambres potentes): Abdomen en tabla que simula abdomen agudo quirúrgico.",
      "Tormenta Adrenérgica concomitante: Sudoración profusa e hipertensión severa."
    ]
  },
  {
    id: "umng-conv-ed2-96",
    university: "UMNG",
    examArea: "CIRUGÍA GENERAL",
    topic: "COLOPROCTOLOGÍA URGENCIAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un hombre de 38 años, taxista de profesión, acude a consulta por presentar un dolor intenso, constante y lacerante en la región perianal, de 24 horas de evolución. El dolor apareció tras un esfuerzo defecatorio por estreñimiento y ha ido en aumento, dificultándole sentarse para conducir. No tiene fiebre ni sangrado importante. A la inspección de los márgenes anales, usted no observa fisuras ni abscesos purulentos, pero nota una tumoración violácea, tensa, de 1.5 cm de diámetro, indurada y exquisitamente dolorosa al mínimo tacto, recubierta por piel (en el borde externo del esfínter anal). El tacto rectal es imposible de realizar por el dolor. Dado el tiempo de evolución menor de 48 horas y la presentación típica, ¿cuál es la conducta definitiva y curativa más recomendada a realizar de inmediato en el consultorio o sala de pequeños procedimientos?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Fibrinolíticos tópicos y baños de asiento tibios exclusivamente por 14 días.",
        distractorProfile: "late_conservative_management",
        incorrectFeedback: "El manejo conservador se elige SOLO si el paciente acude pasadas las 72 horas, cuando el coágulo ya se organizó y el dolor va cediendo. En las primeras 48h, dejarlo sufrir es ineficiente."
      },
      {
        id: "B",
        label: "B",
        text: "Incisión de la masa bajo anestesia local, extracción del coágulo (trombectomía) y dejar herida abierta."
      },
      {
        id: "C",
        label: "C",
        text: "Ligadura con banda de caucho (Rubber band ligation) de la base de la masa.",
        distractorProfile: "internal_hemorrhoid_treatment",
        incorrectFeedback: "La ligadura es exclusiva para las hemorroides INTERNAS (por encima de la línea dentada, donde no hay dolor sensitivo). Ligar un paquete EXTERNO causa un dolor insoportable."
      },
      {
        id: "D",
        label: "D",
        text: "Hemorroidectomía tipo Milligan-Morgan en quirófano bajo anestesia raquídea.",
        distractorProfile: "overtreatment_radical_surgery",
        incorrectFeedback: "Una hemorroidectomía formal se reserva para enfermedad hemorroidal crónica y sintomática extensa (Grado III o IV generalizada). No para una trombosis externa solitaria."
      }
    ],
    correctOptionId: "B",
    explanation: "Una tumoración violácea y dolorosa recubierta de piel (borde externo del ano) es una Hemorroide Externa Trombosada (un coágulo de sangre a tensión atrapado bajo la piel inervada del plexo externo). Genera un dolor isquémico agudo. Si el paciente se presenta TEMPRANO (menos de 48 a 72 horas de inicio del dolor severo), el tratamiento de oro curativo y sintomático es la Trombectomía Hemorroidal: bajo anestesia local en consultorio, se hace una pequeña incisión elíptica (bisturí 11 o 15), se eviscera el coágulo oscuro y duro, y se deja la herida abierta. El alivio del dolor es instantáneo por liberación de la presión subdérmica.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., esta es la queja anal más frecuente y agradecida de urgencias. Imagina tener un balín de plomo morado y a presión atorado en el esfínter anal. Al paciente le duele respirar y hasta parpadear. Como lleva apenas 24 horas sufriendo, no lo mandes a su casa con cremas mágicas y agua de manzanilla. Ponle 1 cc de lidocaína (va a doler un segundo), pincha el bulto y exprime ese coágulo negro oscuro. Cuando el coágulo salga volando, el paciente te va a adorar de por vida porque el dolor isquémico desaparece ipso facto.",
    keyPoints: [
      "Regla de la línea dentada: Hemorroides internas = Sangran pero NO duelen. Hemorroides Externas = DUELEN intensamente, no suelen sangrar.",
      "Hemorroide Externa Trombosada aguda (<72 hrs): Tratamiento = Trombectomía (Incisión y drenaje del coágulo en consultorio).",
      "Hemorroide Externa Trombosada tardía (>72 hrs o dolor bajando): Manejo conservador sintomático."
    ]
  },
  {
    id: "umng-conv-ed2-97",
    university: "UMNG",
    examArea: "ÉTICA MÉDICA Y BIOÉTICA",
    topic: "LEGISLACIÓN Y URGENCIA VITAL",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un hombre de 65 años, con diagnóstico de Cáncer de Pulmón en estadio IV metastásico a cerebro e hígado, ingresa al servicio de urgencias en paro cardiorrespiratorio presenciado en la ambulancia. El paciente presenta asistolia en el monitor. Inmediatamente al llegar, su esposa y su abogado se interponen frente al equipo de reanimación y entregan un documento formal, legalmente notariado y firmado por el paciente hace 3 meses en pleno uso de sus facultades mentales, denominado \"Documento de Voluntad Anticipada (Testamento Vital)\". En este documento, el paciente estipula explícita, clara e inequívocamente su deseo de \"No recibir maniobras de Reanimación Cardiopulmonar (RCP), intubación ni soporte ventilatorio mecánico bajo ninguna circunstancia de colapso\". El residente de turno, argumentando que su deber es salvar vidas, empieza las compresiones torácicas. De acuerdo a la jurisprudencia de la Corte Constitucional y la ética médica colombiana (Ley 1733 y Resolución 2665), ¿quién está actuando correctamente y cuál es su obligación bioética fundamental en este instante?",
    options: [
      {
        id: "A",
        label: "A",
        text: "El residente de turno, ya que en el contexto de urgencia vital inminente (código azul), el derecho a la vida es irrenunciable y prima sobre cualquier papel notariado.",
        distractorProfile: "paternalism_mimic",
        incorrectFeedback: "Falso en el contexto de un documento legal y terminal. El derecho a la vida es un derecho, no una obligación de supervivencia artificial agónica. Violar esto es agresión legal (lesiones/trato cruel)."
      },
      {
        id: "B",
        label: "B",
        text: "La familia, porque el Documento de Voluntad Anticipada es de obligatorio cumplimiento ético y legal, y reanimar al paciente constituye Obstinación Terapéutica o Ensañamiento."
      },
      {
        id: "C",
        label: "C",
        text: "El residente, porque las Voluntades Anticipadas solo aplican si el paciente está sufriendo dolores intratables, no en la asfixia o paro agudo.",
        distractorProfile: "dva_scope_error",
        incorrectFeedback: "Las voluntades anticipadas dictan las preferencias precisas sobre RCP y soporte vital intensivo en el momento de colapso respiratorio/cardiaco; ese es su propósito principal."
      },
      {
        id: "D",
        label: "D",
        text: "La institución, debiendo reanimarlo, conectarlo a un ventilador y luego llamar al comité de bioética para que ellos autoricen extubarlo mañana.",
        distractorProfile: "post_facto_ethics",
        incorrectFeedback: "Intervenir para luego 'deshacer' cuando hay una directriz clara y validada ex ante, es violar el testamento vital e inducir un trauma injustificado en el paciente y la familia."
      }
    ],
    correctOptionId: "B",
    explanation: "El Documento de Voluntad Anticipada (DVA) es una expresión jurídica de rango constitucional amparada en la Ley de Cuidados Paliativos y jurisprudencia moderna. Permite materializar el principio bioético de la Autonomía: el derecho del paciente a decidir qué tratamientos médicos invasivos rechaza al final de su vida, especialmente cuando pierde la competencia comunicativa. El médico está OBLIGADO ética y legalmente a acatar el documento si es válido, explícito y aplicable a la situación clínica (cáncer terminal en paro irreversible). Iniciar una reanimación contra la voluntad expresa notariada se considera \"Distanasia\" (Encarnizamiento u Obstinación Terapéutica) e incluso podría interpretarse como agresión/lesiones frente a la ley.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el residente inexperto siente que romperle costillas a un abuelo terminal para reanimarlo a una existencia de agonía es 'ser un buen médico'. La UMNG quiere que entiendas que el buen médico sabe cuándo parar. Ese papel que la esposa te entrega no es una sugerencia; es un mandato legal. El paciente, conociendo el infierno de su cáncer, ejerció su autonomía y te pidió compasión. Intubarlo y reanimarlo ahora, violando su testamento vital, es un acto de crueldad punible. Apaga el código azul, permite el duelo, y respeta la dignidad de la muerte natural.",
    keyPoints: [
      "Documento de Voluntad Anticipada (DVA) válido = Deber absoluto de obediencia ética y legal por el médico.",
      "Si el DVA rechaza la RCP, aplicarla constituye Distanasia u Obstinación Terapéutica.",
      "Bioética: La autonomía del paciente prima sobre el paternalismo médico (salvamento ciego en fase terminal)."
    ]
  },
  {
    id: "umng-conv-ed2-98",
    university: "UMNG",
    examArea: "PEDIATRÍA",
    topic: "NEONATOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un recién nacido varón nace a las 29 semanas de gestación por cesárea urgente debido a preeclampsia severa materna. La madre no alcanzó a recibir corticoides prenatales (esquema incompleto de Betametasona de apenas 6 horas). Al nacer, el neonato presenta dificultad respiratoria extrema (Silverman-Andersen 8/10), con aleteo nasal intenso, quejido espiratorio constante y cianosis generalizada. Se procede a intubación orotraqueal en la sala de partos. En la Unidad de Cuidados Intensivos Neonatales, la radiografía de tórax evidencia: infiltrado reticulogranular difuso y bilateral en \"vidrio esmerilado\", y se observan claros \"broncogramas aéreos\" silueteados hasta la periferia, con volúmenes pulmonares disminuidos (pulmones pequeños). ¿Cuál es la fisiopatología fundamental que explica esta catástrofe respiratoria y cuál es la terapia farmacológica salvavidas de rescate inmediato que debe instilarse?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Aspiración masiva de meconio intrauterino / Lavado broncoalveolar con solución salina estéril.",
        distractorProfile: "sam_mimic",
        incorrectFeedback: "El SAM cursa en recién nacidos a término/postérmino, y la Rx muestra infiltrados algodonosos gruesos e hiperinsuflación. Este es un prematuro (29s) con hipoinsuflación y vidrio esmerilado."
      },
      {
        id: "B",
        label: "B",
        text: "Retardo en la absorción del líquido pulmonar fetal / Oxígeno suplementario y diuréticos (furosemida).",
        distractorProfile: "ttrn_mimic",
        incorrectFeedback: "La TTRN se da por cesáreas A TÉRMINO sin trabajo de parto. La radiografía da pulmones grandes con líquido en cisuras, no vidrio esmerilado clásico de colapso prematuro."
      },
      {
        id: "C",
        label: "C",
        text: "Infección intraamniótica por Streptococcus del Grupo B (Sepsis) / Ampicilina + Gentamicina endovenosas exclusivas.",
        distractorProfile: "pneumonia_overlap",
        incorrectFeedback: "La neumonía neonatal puede simular la placa de membrana hialina, pero el insulto primario y fisiopatológico del prematuro crudo de 29s sin corticoides es SIEMPRE la falta de surfactante que requiere reposición inicial."
      },
      {
        id: "D",
        label: "D",
        text: "Déficit cuantitativo y cualitativo de Surfactante pulmonar / Administración endotraqueal de Surfactante exógeno."
      }
    ],
    correctOptionId: "D",
    explanation: "El Síndrome de Dificultad Respiratoria del Recién Nacido (Enfermedad de Membrana Hialina) es la principal causa de falla respiratoria en el prematuro (< 34-35 semanas). Los neumocitos tipo II aún no han madurado para fabricar surfactante pulmonar abundante. Sin surfactante, la tensión superficial es insuperable; los alvéolos colapsan inmediatamente tras exhalar (microatelectasias masivas) generando un esfuerzo respiratorio titánico. La placa clásica muestra tres signos: infiltrado difuso en \"vidrio esmerilado\" (alvéolos colapsados), broncograma aéreo (vía aérea llena de gas destacada contra el colapso) e hipoinsuflación (volúmenes pulmonares deprimidos). El manejo innegociable es la reposición de Surfactante Exógeno inyectado o instilado directamente a los pulmones a través de una sonda en el tubo endotraqueal.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el bebé de 29 semanas trata de inflar sus pulmones, pero por dentro son como bolsitas empapadas en miel, se pegan apenas suelta el aire. Ese colapso global alveolar pinta sus pulmones de blanco (vidrio esmerilado) en los Rayos X. Los bronquios sí conservan aire, por eso resaltan negros en la placa (broncograma). La cura mágica de la ciencia moderna es coger una jeringa con un extracto de surfactante bovino/porcino y empujarlo directamente hacia los pulmones del bebé; esto lubrica y rompe la fricción, abriendo la malla alveolar inmediatamente.",
    keyPoints: [
      "Enfermedad de Membrana Hialina = Insuficiencia de Surfactante en RN Prematuro (<34 semanas).",
      "Radiografía típica: Hipoinsuflación + Vidrio esmerilado + Broncograma Aéreo.",
      "Manejo salvavidas activo: CPAP temprano / Intubación + Administración directa de Surfactante endotraqueal."
    ]
  },
  {
    id: "umng-conv-ed2-99",
    university: "UMNG",
    examArea: "MEDICINA TROPICAL",
    topic: "CARDIOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un hombre de 55 años, campesino oriundo del departamento del Casanare, ingresa a la consulta de cardiología de la Universidad Nacional remitido por falla cardíaca congestiva progresiva. El paciente se queja de disnea de medianos esfuerzos, edema de miembros inferiores y palpitaciones ocasionales de años de evolución. Durante la anamnesis, refiere que en su infancia vivía en una choza de adobe y palma, donde \"lo picaron muchos pitos\". Al realizarle el Electrocardiograma (ECG), el cardiólogo documenta un Bloqueo Completo de Rama Derecha (BRD) asociado a un Hemibloqueo Fascicular Anterior Izquierdo (HBAI), así como frecuentes extrasístoles ventriculares. Se le realiza un Ecocardiograma transtorácico que evidencia una fracción de eyección del 35% y un hallazgo estructural patognomónico: adelgazamiento extremo y dilatación aneurismática del vértice (ápex) del ventrículo izquierdo. Teniendo en cuenta la clínica y la historia epidemiológica, ¿cuál es el agente etiológico específico y la fase de la enfermedad que cursa este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Leishmania braziliensis / Leishmaniasis mucocutánea diseminada.",
        distractorProfile: "vector_confusion",
        incorrectFeedback: "La leishmaniasis se da por un 'pito' o plumilla (Lutzomyia), pero no daña el corazón (afecta piel y cartílagos orofaciales)."
      },
      {
        id: "B",
        label: "B",
        text: "Trypanosoma cruzi / Enfermedad de Chagas en fase crónica miocardiopática."
      },
      {
        id: "C",
        label: "C",
        text: "Plasmodium vivax / Paludismo complicado crónico residual.",
        distractorProfile: "malaria_mimic",
        incorrectFeedback: "La malaria da fiebre cíclica y anemia/ictericia aguda; no es un invasor del músculo cardíaco con secuelas tardías dilatadas estructurales de 30 años."
      },
      {
        id: "D",
        label: "D",
        text: "Mycobacterium tuberculosis / Pericarditis constrictiva tuberculosa crónica.",
        distractorProfile: "constrictive_mimic",
        incorrectFeedback: "Da falla cardíaca predominantemente derecha (coraza cálcica), pero no forma Aneurismas Apicales y no daña característicamente la Rama Derecha eléctrica."
      }
    ],
    correctOptionId: "B",
    explanation: "El escenario epidemiológico (chozas de adobe y pitos/vinchucas en Casanare/Orinoquía) orienta a Trypanosoma cruzi (Enfermedad de Chagas). La enfermedad aguda pasa desapercibida (fiebre) o con el signo de Romaña. El parásito se incrusta en el miocardio. Unos 20 a 30 años después, la Fase Crónica Miocardiopática inicia un daño inmunológico autodestructivo del miocardio. La tarjeta de presentación eléctrica clásica y excluyente en cardiología es: Bloqueo de Rama Derecha + Hemibloqueo Anterior (BRD + HBAI) + Arritmias ventriculares letales. La tarjeta de presentación ecográfica y patognomónica es el Aneurisma Apical del Ventrículo Izquierdo (adelgazamiento bestial del ápex, donde a menudo se anidan trombos). Su tratamiento es sintomático y con marcapasos / cardiodesfibriladores, o trasplante en fase terminal.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el Chagas es un asesino lento y silencioso. El chinche picó a este señor en su casa de barro hace 40 años. El parásito se metió en las células del músculo cardíaco a hibernar. Lo que matará al señor no es el parásito agudo; es su propio sistema inmune devorándose la pared del corazón durante cuatro décadas. Le rompió el cableado eléctrico de la derecha (BRD) y le licuó la pared de la punta del corazón, formando ese aneurisma apical clásico que parece un globo a punto de reventar en la ecografía. Falla Cardiaca en un campesino colombiano = Chagas hasta que demuestres lo contrario.",
    keyPoints: [
      "Factor de Riesgo: Picadura de Pito (Rhodnius prolixus) / Trypanosoma cruzi / Choza de adobe o llanos.",
      "Electrocardiograma Clásico (Fase Crónica): Bloqueo Completo de Rama Derecha (BRD) + Hemibloqueo Anterior.",
      "Ecocardiograma Patognomónico (Fase Crónica): Aneurisma Apical del Ventrículo Izquierdo."
    ]
  },
  {
    id: "umng-conv-ed2-100",
    university: "UMNG",
    examArea: "URGENCIAS",
    topic: "REANIMACIÓN Y TOXICOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Una joven de 18 años, con diagnóstico conocido de asma bronquial leve y alergia a múltiples alimentos, ingresa al servicio de urgencias de la universidad corriendo, sosteniéndose la garganta y visiblemente aterrada tras haber comido en un restaurante asiático (pasta con salsa de maní). Al ingreso, usted observa habones urticariales gigantes, muy pruriginosos, en su cuello y pecho. La paciente tiene un estridor laringeo ruidoso (pitido al intentar tomar aire), cianosis peribucal y su voz es un susurro apagado. Se desploma en la camilla; la presión arterial es indetectable (0/0 mmHg, sin pulso radial), FC de 135 lpm filiforme. SatO2 75%. Usted activa la alarma de código de reanimación por un Choque Anafiláctico severo inminente. Sin dudar un milisegundo, usted saca de su bolsillo la ampolla de Epinefrina. De acuerdo con las Guías Universales de Resucitación, ¿cuál es la dosis farmacológica exacta, la dilución de la ampolla, y la ruta de administración salvavidas INMEDIATA que se debe usar en la extremidad de la paciente antes de intentar canalizar una vena?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Epinefrina (Adrenalina) 0.3 a 0.5 mg de la ampolla pura diluida al 1:1.000 (1 mg/mL), administrada por vía Intramuscular (IM) profunda en la cara anterolateral del muslo."
      },
      {
        id: "B",
        label: "B",
        text: "Epinefrina (Adrenalina) 1 mg de la ampolla diluida al 1:1.000, administrada por vía Subcutánea (SC) en la región deltoidea del brazo.",
        distractorProfile: "wrong_route_sc",
        incorrectFeedback: "La vía subcutánea se absorbe de forma errática y extremadamente lenta en un choque cardiovascular; inaceptable en anafilaxia severa."
      },
      {
        id: "C",
        label: "C",
        text: "Epinefrina (Adrenalina) 1 mg (ampolla de 1:10.000) administrada directamente por vía intravenosa rápida (Bolo IV).",
        distractorProfile: "fatal_iv_bolus",
        incorrectFeedback: "El bolo IV masivo (ampolla de paro 1:10.000) en un paciente que AÚN TIENE PULSO puede precipitar una fibrilación ventricular fatal o un espasmo coronario."
      },
      {
        id: "D",
        label: "D",
        text: "Hidrocortisona 200 mg intravenosa seguida de Difenhidramina, esperando la reversión de la histamina antes de usar adrenalina.",
        distractorProfile: "fatal_delay",
        incorrectFeedback: "Ninguno de los dos medicamentos tiene efecto vasoconstrictor ni broncodilatador inmediato (la hidrocortisona tarda horas). La paciente se asfixiará esperando su efecto."
      }
    ],
    correctOptionId: "A",
    explanation: "El pilar central del tratamiento inicial de la anafilaxia severa sistémica es la ADRENALINA (Epinefrina) administrada Vía Intramuscular en el muslo (Vasto Lateral, su rica vascularización garantiza rápida absorción). La dosis es de 0.3 a 0.5 mg utilizando la ampolla CONCENTRADA de 1:1.000 (1mg / 1mL). Nunca usar la dilución 1:10.000 o vía intravenosa rápida en un paciente con pulso (reservada para código azul cardíaco verdadero), ni usar primero corticosteroides; solo la adrenalina abre la vía aérea rápida y revierte la fuga y choque circulatorio masivo.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., cierra los ojos e imagínate la escena. Una chica de 18 años se está ahogando en la puerta de urgencias de tu turno. Su garganta está del tamaño de un alfiler y se está cerrando. Las venas de sus brazos colapsaron (está sin presión arterial) y la enfermera te grita desesperada que no puede canalizarle una vena. Si tú te pones a buscar una vía central o te pones a preparar corticoides, la niña se te muere ahogada en el pasillo. La medicina de urgencias se reduce a un solo acto de reflejo: le arrancas la ampolla de adrenalina de 1 mg a la jefa, aspiras LA MITAD de la ampolla pura 1:1000 (0.5 cc) en una jeringa de insulina, le bajas el pantalón o a través de la tela misma, y le clavas la aguja profundo en el muslo. Esa bala de plata revierte el choque en segundos y le devuelve el aire. Jamás lo olvides: Anafilaxia es Adrenalina IM 1:1.000.",
    keyPoints: [
      "Choque anafiláctico / Anafilaxia = Droga de elección: Adrenalina (Epinefrina).",
      "Vía obligatoria inicial: Intramuscular (IM) en la cara anterolateral del muslo.",
      "Dilución específica: 1:1.000 (Concentrada). Dosis típica 0.3 a 0.5 mg.",
      "Contraindicaciones letales iniciales: Bolos IV rápidos en paciente con pulso / Perder el tiempo con corticoides primero."
    ]
  }
];
