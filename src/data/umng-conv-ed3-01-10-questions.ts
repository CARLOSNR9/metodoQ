import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UMNG — Edición #3 (Simulacro 3) · Preguntas #01–#10.
 */
export const UMNG_CONV_ED3_01_10_QUESTIONS: TrainingQuestion[] = [
  {
    "id": "umng-conv-ed3-01",
    "university": "UMNG",
    "examArea": "CIRUGÍA GENERAL",
    "topic": "TRAUMA PEDIÁTRICO",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Un niño de 12 años es traído a urgencias tras sufrir una caída mientras montaba bicicleta, golpeándose fuertemente la \"boca del estómago\" (epigastrio) directamente contra el extremo del manubrio. A su ingreso, el paciente se encuentra estable (PA 110/70, FC 90), quejándose de dolor epigástrico irradiado a la espalda. El Eco-FAST inicial es negativo para líquido libre. Se solicitan niveles de Amilasa y Lipasa, los cuales se reportan dentro de límites normales. Doce horas después, el niño desarrolla fiebre, vómito bilioso y aumento severo del dolor. Una Tomografía Computarizada (TAC) de abdomen con contraste revela líquido libre aislado en la transcavidad de los epiplones (saco menor) y engrosamiento en la unión del cuello y el cuerpo de una glándula retroperitoneal. ¿Cuál es el diagnóstico más probable que pasó desapercibido inicialmente?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Ruptura de víscera hueca (Duodeno) en su segunda porción.",
        "incorrectFeedback": "La ruptura duodenal retroperitoneal también ocurre por el manubrio, PERO en el TAC se evidenciaría aire retroperitoneal rodeando el riñón derecho (signo del halo) y el líquido no se restringe a la transcavidad de los epiplones, sino al espacio pararrenal anterior derecho."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Lesión esplénica en dos tiempos con hemorragia contenida.",
        "incorrectFeedback": "La lesión de bazo da dolor en el hipocondrio izquierdo (irradiado al hombro izquierdo, Signo de Kehr) y líquido en el espacio esplenorrenal o pelvis (que el FAST sí hubiera detectado fácilmente en un resangrado)."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Sección completa del conducto colédoco por trauma contuso.",
        "incorrectFeedback": "La vía biliar es muy elástica y pequeña; su ruptura aislada por trauma contuso es exóticamente rara y daría biliperitoneo masivo generalizado (peritonitis biliar), no localizado en el saco menor."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Trauma de cuello de Páncreas por compresión contra la columna vertebral."
      }
    ],
    "correctOptionId": "D",
    "explanation": "Enfermedad sospechada: Trauma Pancreático cerrado.\n\nDato decisivo: Mecanismo patognomónico (golpe directo y puntual en epigastrio con manubrio de bicicleta en niños) + Líquido en la transcavidad de los epiplones.\n\nPrincipio clínico evaluado: La anatomía del páncreas (órgano fijo, retroperitoneal, que descansa exactamente sobre las vértebras lumbares) y el comportamiento engañoso de sus biomarcadores en el trauma agudo.\n\nEl páncreas es como una salchicha atravesada sobre una piedra (la columna vertebral). Cuando el manubrio de la bicicleta golpea el epigastrio del niño, la fuerza aplasta y \"parte\" el páncreas por la mitad (exactamente en el cuello, que cruza sobre la vértebra L1/L2). Al romperse, el jugo pancreático se derrama en la bolsa que tiene al frente: la transcavidad de los epiplones. ¿Por qué la amilasa salió normal? Porque en las primeras 6 a 12 horas del trauma pancreático, los biomarcadores SUELEN SER NORMALES en el 40% de los casos. Si no haces TAC, lo mandas a casa y regresa con una peritonitis química y una necrosis retroperitoneal masiva.\n\n**Trampa del examen:** Los laboratorios \"tranquilizadores\": El estudiante ve \"Amilasa y Lipasa normales\" en la hora cero y descarta inmediatamente al páncreas. En trauma cerrado, los niveles enzimáticos tempranos NO descartan la sección pancreática.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., los niños no tienen la grasa abdominal ni la masa muscular de un adulto para amortiguar los golpes. El manubrio de la bicicleta es un ariete perfecto. Entra por el epigastrio, esquiva el estómago y apachurra al páncreas contra el hueso de la columna vertebral partiéndolo en dos como un lápiz de cera. El jugo pancreático empieza a digerir al niño por dentro de forma silenciosa. Nunca, jamás des de alta a un niño que se pegó con el manubrio de la bicicleta el mismo día, aunque sonría y tenga la amilasa normal. Déjalo en observación estricta 24 horas y tócale la barriga cada 4 horas.",
    "keyPoints": [
      "Golpe con manubrio de bicicleta en epigastrio de un niño = Pensar SIEMPRE en Trauma Pancreático o Ruptura Duodenal.",
      "Amilasa/Lipasa normales en las primeras horas NO DESCARTAN la lesión.",
      "TAC Abdominal es mandatorio si el dolor persiste."
    ]
  },
  {
    "id": "umng-conv-ed3-02",
    "university": "UMNG",
    "examArea": "MEDICINA INTERNA",
    "topic": "REUMATOLOGÍA - OFTALMOLOGÍA",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Una mujer de 75 años consulta a urgencias profundamente angustiada. Relata que hace una hora presentó pérdida súbita de la visión en el ojo derecho (amaurosis fugax progresiva a ceguera). Al interrogarla, la paciente refiere que en las últimas tres semanas ha padecido de una cefalea hemicraneal derecha muy intensa, que no cede con paracetamol. Además, refiere que cuando mastica la comida siente un \"calambre doloroso y cansancio\" en la mandíbula que la obliga a dejar de comer. Al examen físico, usted palpa la región temporal derecha y nota un cordón arterial engrosado, tortuoso, sin pulso y exquisitamente doloroso al roce. ¿Cuál es la conducta MÉDICA Y FARMACOLÓGICA de extrema urgencia que usted DEBE ordenar en este preciso instante?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Solicitar una biopsia de la arteria temporal de inmediato y esperar el resultado patológico para iniciar tratamiento.",
        "incorrectFeedback": "El diagnóstico de oro (Gold Standard) SÍ es la biopsia de la arteria temporal. Pero si te esperas 3 o 4 días a que el cirujano la haga y el patólogo la lea, la isquemia del nervio óptico se hará irreversible en ambos ojos. La paciente quedará ciega para siempre por la burocracia."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Administrar Metilprednisolona intravenosa a dosis altas (bolos) inmediatamente, ANTES de realizar cualquier biopsia o examen."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Solicitar un TAC de cráneo urgente e iniciar Alteplasa (rt-PA) por sospecha de evento isquémico de la arteria oftálmica.",
        "incorrectFeedback": "Aunque es una isquemia, la causa es una inflamación gigante de la pared del vaso (vasculitis), no un trombo agudo tradicional tratable con fibrinolíticos."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Iniciar tratamiento con Metotrexato e Infliximab para frenar la destrucción autoinmune.",
        "incorrectFeedback": "Los ahorradores de esteroides (Metotrexato o Tocilizumab) son para el mantenimiento a largo plazo, no actúan en los próximos 15 minutos para salvar el nervio óptico."
      }
    ],
    "correctOptionId": "B",
    "explanation": "Enfermedad sospechada: Arteritis de Células Gigantes (Arteritis de la Temporal).\n\nDato decisivo: Anciana + Cefalea nueva + Claudicación mandibular (dolor al masticar por isquemia de los músculos maseteros) + Pérdida de visión (Isquemia del nervio óptico) + Arteria temporal engrosada.\n\nPrincipio clínico evaluado: En la Arteritis de la Temporal con compromiso visual inminente, el inicio del tratamiento con esteroides NO puede retrasarse por la confirmación histológica.\n\nLa Arteritis de Células Gigantes es una emergencia reumatológica y oftalmológica. La inflamación granulomatosa tapa las ramas de la arteria carótida externa y oftálmica. Si la paciente ya reporta alteración visual (amaurosis o ceguera de un ojo), el otro ojo está a horas de perderse. La regla de oro internacional obliga a iniciar corticosteroides a altísimas dosis INMEDIATAMENTE (Metilprednisolona 1 g IV al día por 3 días si hay pérdida visual, o Prednisona 60 mg VO si no la hay) a la mera sospecha clínica. ¡La biopsia se puede hacer hasta 2 semanas DESPUÉS de haber iniciado los esteroides sin que se altere significativamente el resultado patológico!\n\n**Trampa del examen:** La tiranía de la biopsia: En oncología y medicina, nos enseñan \"sin biopsia no hay tratamiento\". La Arteritis de la Temporal es la GRAN EXCEPCIÓN. Inicias la droga de rescate hoy, y cortas el pedazo de arteria la próxima semana.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., cuando una abuelita te diga que \"se le cansa la quijada al masticar carne\" y le duele peinarse el pelo de un lado de la cabeza, no la mandes al odontólogo. Esas son las ramas de la arteria carótida externa que se están asfixiando por inflamación. Si a esto le sumas que dejó de ver por un ojo hace una hora, ¡estás ante un código rojo! La arteria oftálmica está tapada. Cuelga una ampolla de 1 gramo de Metilprednisolona por la vena ya mismo. Salva el ojo que le queda. Luego pídele la biopsia al cirujano para confirmar en el expediente.",
    "keyPoints": [
      "Mujer > 60 años + Cefalea temporal + Claudicación de la mandíbula = Arteritis de Células Gigantes.",
      "Marcador de laboratorio altísimo: VSG (>50-100 mm/h).",
      "Tratamiento innegociable: Esteroides a dosis altas (Metilprednisolona) INMEDIATAMENTE. No retrasar por la biopsia."
    ]
  },
  {
    "id": "umng-conv-ed3-03",
    "university": "UMNG",
    "examArea": "TOXICOLOGÍA",
    "topic": "MEDICINA RURAL",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Un campesino de 35 años es traído a urgencias del hospital rural por sus familiares, quienes lo encontraron en la bodega de insumos agrícolas ingiriendo deliberadamente un herbicida líquido de color verde oscuro (intento de autólisis). Al ingreso (3 horas post-ingesta), el paciente refiere dolor oral urente. Usted observa excoriaciones severas en los labios, lengua y orofaringe (úlceras mucosas). A las 24 horas de hospitalización, el paciente desarrolla oliguria marcada y una creatinina de 4.0 mg/dL (falla renal aguda). En el tercer día de evolución, inicia con tos, disnea progresiva y crepitantes basales. Los gases arteriales muestran hipoxemia severa (PaO2 55 mmHg). ¿Qué intervención de soporte respiratorio común está ESTRICTAMENTE CONTRAINDICADA en este paciente porque aceleraría drásticamente la fibrosis pulmonar y su muerte?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Ventilación Mecánica Invasiva con volumen tidal bajo.",
        "incorrectFeedback": "La VMI protectora puede ser necesaria si el paciente entra en fatiga extrema, pero el detalle letal es el porcentaje de O2 que le pones al ventilador."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Administración de fluidos intravenosos en bolos grandes.",
        "incorrectFeedback": "La falla renal requiere líquidos agresivos o diálisis para lavar el tóxico, no están contraindicados."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Administración de Oxígeno suplementario a altas concentraciones (FiO2 altas)."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Nebulizaciones con N-Acetilcisteína.",
        "incorrectFeedback": "Antioxidantes como la N-Acetilcisteína o la Vitamina C se usan intravenosos como terapia de soporte teórica intentando \"barrer\" los radicales libres, no están contraindicados."
      }
    ],
    "correctOptionId": "C",
    "explanation": "Enfermedad sospechada: Intoxicación por PARAQUAT (Herbicida letal).\n\nDato decisivo: Ingesta agrícola + Úlceras orales (\"lengua de lija\") + Falla Renal a las 24h + Falla Pulmonar (Fibrosis/SDRA) a los 3-7 días.\n\nPrincipio clínico evaluado: El mecanismo tóxico oxidativo del Paraquat que se potencia directamente con el oxígeno suplementario (Ciclo redox fútil).\n\nEl Paraquat es el \"asesino verde\" de los campos de Colombia. Este tóxico tiene una afinidad letal por los Neumocitos Tipo I y II del pulmón. Una vez en el pulmón, el Paraquat utiliza el OXÍGENO que el paciente respira para crear radicales libres masivos (especies reactivas de oxígeno, anión superóxido). Estos radicales destruyen el pulmón y lo convierten en una cicatriz de piedra (fibrosis pulmonar masiva y mortal en días). La paradoja más cruel de la toxicología es que: ENTRE MÁS OXÍGENO LE DES AL PACIENTE, MÁS RÁPIDO LO MATAS. Proveer altas FiO2 le da al Paraquat más \"munición\" para destruir el pulmón. La regla de oro es mantener al paciente con hipoxemia permisiva (SatO2 aceptada en 85-90% o PaO2 alrededor de 55-60 mmHg). Solo se da O2 si el paciente cae por debajo de la viabilidad isquémica extrema.\n\n**Trampa del examen:** El reflejo pavloviano del O2: Paciente con disnea e hipoxemia en la cama del hospital. La enfermera corre a ponerle una cánula nasal a 5 Litros. Si el paciente tomó Paraquat, acabas de condenar los pocos alvéolos sanos que le quedaban. El oxígeno es un medicamento venenoso en esta patología.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., tratar a un intoxicado con Paraquat es sentir que el diablo te gana la partida. Te llega el campesino arrepentido de haberse tomado el líquido por una pelea con la esposa. Se ve bien el primer día, solo le duele la boca. Pero a los dos días se le apagan los riñones, y al quinto día empieza a ahogarse porque sus pulmones se están volviendo cartón corrugado. La desesperación te va a tentar a prender el tanque de oxígeno al 100%. ¡Prohibido! El oxígeno es la gasolina que usa el Paraquat para quemar el alvéolo. Tendrás que aguantar verlo saturando a 87% y explicarle a la familia que darle más aire fresco es acelerar su muerte.",
    "keyPoints": [
      "Herbicida Agrícola + Úlceras en la boca + Falla Renal + Falla Pulmonar = PARAQUAT.",
      "CONTRAINDICACIÓN ABSOLUTA: Ponerle OXÍGENO SUPLEMENTARIO (excepto si la PaO2 es muy inferior a 50 mmHg). Mantener Hipoxemia Permisiva.",
      "Tratamiento: Tierra de Fuller (absorbente inicial si llega en < 2h), Diálisis y Antioxidantes."
    ]
  },
  {
    "id": "umng-conv-ed3-04",
    "university": "UMNG",
    "examArea": "INFECTOLOGÍA",
    "topic": "URGENCIAS",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Una niña de 7 años es traída a urgencias por presentar fiebre de 38.5°C y una inflamación severa, eritematosa y exquisitamente dolorosa en el dorso de la mano derecha (celulitis agresiva con linfangitis). Al indagar el antecedente, la madre refiere que ayer en la tarde (hace 14 horas) la niña estaba jugando con el gato de la casa, el cual se asustó y le propinó una mordedura profunda en la mano. La herida fue lavada con agua en casa. A la inspección, se observan dos punciones profundas de colmillo, rodeadas de una celulitis que avanza rápidamente hacia el antebrazo. Dada la instauración tan rápida y el agente animal involucrado, ¿cuál es el patógeno bacteriano más probable y el antibiótico de PRIMERA LÍNEA indicado para esta infección?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Bartonella henselae / Azitromicina.",
        "incorrectFeedback": "La Bartonella henselae es el agente de la \"Enfermedad por Arañazo de Gato\". Esta enfermedad cursa con una pápula indolente y semanas después da una linfadenopatía regional (ganglios gigantes en axila o cuello) de curso subagudo crónico. No da una celulitis hiperaguda en 14 horas."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Staphylococcus aureus meticilino-resistente (MRSA) / Vancomicina.",
        "incorrectFeedback": "S. aureus es la causa típica de celulitis de la comunidad o arañazos humanos, pero las mordeduras de animales (especialmente las punzantes del gato) tienen un rey microscópico distinto."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Pasteurella multocida / Amoxicilina-Clavulanato."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Capnocytophaga canimorsus / Cefalexina.",
        "incorrectFeedback": "Capnocytophaga es una bacteria terrible de la boca del PERRO, que puede causar sepsis fulminante en pacientes sin bazo (esplenectomizados) o alcohólicos, pero su droga de elección no es cefalexina."
      }
    ],
    "correctOptionId": "C",
    "explanation": "Enfermedad sospechada: Celulitis aguda severa secundaria a mordedura de gato.\n\nDato decisivo: Mordedura felina punzante + Tiempo de evolución extremadamente rápido (< 24 horas, celulitis en 14 horas).\n\nPrincipio clínico evaluado: La microbiología específica de la flora oral de los animales domésticos y la selección antibiótica dirigida, esquivando las cefalosporinas de primera generación que no la cubren.\n\nLa Pasteurella multocida es la bacteria comensal número uno en la boca de los gatos (y perros). Tiene una característica clínica patognomónica: es hiperaguda. Muerde el gato en la tarde, y al día siguiente en la mañana la mano está ardiendo en celulitis y pus. Como los colmillos del gato son como agujas, inyectan la bacteria profundo en las articulaciones y tendones de la mano, causando tenosinovitis. La Pasteurella NO responde a la Dicloxacilina ni a la Cefalexina (que son las drogas clásicas de piel). El antibiótico oral de primera línea (profiláctico y terapéutico) para TODA mordedura de perro o gato es la Amoxicilina-Clavulanato. En pacientes hospitalizados graves se usa Ampicilina-Sulbactam IV.\n\n**Trampa del examen:** Manejo de piel rutinario: El médico en urgencias ve piel roja, piensa en estafilococo/estreptococo, y formula Cefalexina o Dicloxacilina por reflejo. En mordeduras de gato, eso es iatrogenia pura. La paciente regresará con osteomielitis o amputación de un dedo porque la Pasteurella se rió de la Cefalexina.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., los gatos son hermosos pero sus dientes son jeringas de infección vivientes. Al morderte la mano, inoculan Pasteurella debajo de la aponeurosis de los tendones donde el oxígeno no entra. Por eso la mano se infla en un tiempo récord de 12 a 24 horas. Y por favor, por lo que más quieras en la vida, ¡No agarres hilo y aguja para cerrar esa herida de colmillo! Si coses la herida, sellas el túnel y creas el paraíso oscuro perfecto para que la bacteria pudra los tendones extensores de la niña. Lava a chorro con mil litros de suero fisiológico, déjalo abierto y empápala de Amoxicilina-Clavulanato.",
    "keyPoints": [
      "Mordedura de GATO + Celulitis Aguda (<24h) = Pasteurella multocida.",
      "Arañazo de Gato + Semanas de evolución + Ganglio Gigante = Bartonella henselae.",
      "Antibiótico de ORO para TODA mordedura animal (Perro/Gato/Humano) = Amoxicilina-Clavulanato (O Ampicilina/Sulbactam IV si grave).",
      "Ojo: NUNCA suturar (cerrar) las heridas por mordedura de perro/gato en manos y cara si tienen riesgo de infección; se lavan y se dejan abiertas."
    ]
  },
  {
    "id": "umng-conv-ed3-05",
    "university": "UMNG",
    "examArea": "OBSTETRICIA",
    "topic": "URGENCIAS METABÓLICAS",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Primigestante de 36 semanas de gestación ingresa a urgencias por cuadro de 3 días de náuseas, vómitos repetidos, dolor intenso en epigastrio y profundo cansancio. Al examen físico, usted observa que la paciente tiene las escleras francamente ictéricas. Signos vitales: PA 110/70 mmHg (sin picos hipertensivos recientes), FC 115 lpm, afebril. Se toman laboratorios urgentes que muestran: AST 600 U/L, ALT 750 U/L, Bilirrubina Total 5.8 mg/dL (Directa 4.0 mg/dL). Llama poderosamente la atención un nivel de Glucosa sérica en 38 mg/dL (Hipoglucemia severa), Tiempos de Coagulación (PT/PTT) muy prolongados, y un Fibrinógeno en 90 mg/dL. El recuento de plaquetas es normal (160.000). ¿Cuál es el diagnóstico clínico más probable de esta catástrofe obstétrica del tercer trimestre?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Síndrome de HELLP.",
        "incorrectFeedback": "El competidor número uno. El Síndrome de HELLP da transaminasas altas, SÍ. Pero clásicamente se asocia a Preeclampsia severa (Hipertensión), y su firma innegable son las Plaquetas muy bajas (Trombocitopenia <100.000) y hemólisis. Además, el HELLP casi NUNCA causa hipoglucemia extrema ni tiempos de coagulación tan alterados de entrada (el hígado en el HELLP se congestiona, pero en el HGAE el hígado \"deja de funcionar\" por completo y no fabrica glucosa ni factores). Esta paciente no tiene HTA y su"
      },
      {
        "id": "B",
        "label": "B",
        "text": "Hígado Graso Agudo del Embarazo (HGAE)."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Hepatitis Viral Aguda por VHB.",
        "incorrectFeedback": "La hepatitis viral da transaminasas por encima de 2.000 o 3.000, pero no cursa con hipoglucemia profunda tan típicamente ni es exclusiva del tercer trimestre."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Colestasis Intrahepática Gestacional severa.",
        "incorrectFeedback": "La colestasis da PRURITO masivo en palmas y plantas, elevación de ácidos biliares y leve aumento de transaminasas, pero NUNCA da falla hepática fulminante con coagulopatía e hipoglucemia."
      }
    ],
    "correctOptionId": "B",
    "explanation": "Enfermedad sospechada: Hígado Graso Agudo del Embarazo (AFLP por sus siglas en inglés).\n\nDato decisivo: Falla hepática fulminante en el tercer trimestre (Ictericia + Coagulopatía) + Hipoglucemia Profunda + PA NORMAL y Plaquetas Normales.\n\nPrincipio clínico evaluado: El diagnóstico diferencial supremo de la falla hepática en el embarazo tardío (HELLP vs HGAE).\n\nEl Hígado Graso Agudo del Embarazo es una emergencia metabólica genética de la madre y el feto (defecto en la oxidación de los ácidos grasos de cadena larga LCHAD fetal). La grasa infiltra las células del hígado de la madre en el 3er trimestre y lo \"apaga\" de golpe. El hígado deja de producir glucosa (dando Hipoglucemia letal) y deja de fabricar factores de coagulación (PT prolongado, fibrinógeno bajo), causando íctero y encefalopatía. A diferencia del HELLP, suele tener presión normal y plaquetas inicialmente conservadas. El único tratamiento salvavidas para la madre y el feto es el Parto/Cesárea URGENTE y reanimación metabólica agresiva en UCI.\n\n**Trampa del examen:** Asociar epigastralgia y transaminasas en 3er trimestre solo con HELLP: Las universidades exigen que el residente no sea un autómata. Si ves vómitos e hígado doliendo en el embarazo tardío y no hay Presión Alta, revisa el azúcar y la coagulación. El HGAE es más raro que el HELLP, pero su mortalidad materna es muchísimo peor si se pasa por alto.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el hígado de esta pobre madre se volvió un bloque inútil de manteca en cuestión de días por un error genético del bebé que lleva en la panza. Como el hígado es el banco central de la glucosa, al cerrarse las puertas, el azúcar en sangre cayó a 38 mg/dL y el cerebro de la paciente está apagándose (encefalopatía). Si te confías de que \"no es HELLP porque no tiene presión alta\" y la dejas amanecer en urgencias, a la mañana siguiente sangrará por los oídos y los riñones le colapsarán. Empújale Dextrosa al 50% por la vena, cruza plasma fresco para que no se desangre, y saca a ese bebé por cesárea inmediatamente para cortar el ciclo tóxico de los ácidos grasos.",
    "keyPoints": [
      "HELLP: Presión Alta + Plaquetas Bajas + Transaminasas Altas.",
      "Hígado Graso Agudo: Presión Normal + Plaquetas Normales + Hipoglucemia Severa + Alteración Tiempos de Coagulación (Falla hepática pura).",
      "Tratamiento para AMBOS: Estabilizar y Desembarazar de Inmediato."
    ]
  },
  {
    "id": "umng-conv-ed3-06",
    "university": "UMNG",
    "examArea": "PEDIATRÍA",
    "topic": "NEONATOLOGÍA",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Un recién nacido varón, hijo de madre diabética mal controlada (Hemoglobina Glicosilada del 9.5%), nace a las 38 semanas con un peso de 4.600 gramos (Macrosomía fetal evidente). La adaptación neonatal fue adecuada en sala de partos. Sin embargo, a los 60 minutos de vida, el neonato presenta irritabilidad severa, temblores finos en las cuatro extremidades, diaforesis y un episodio de convulsión tónica breve. Usted toma una glucometría capilar urgente que arroja un valor de 25 mg/dL (Hipoglucemia severa sintomática). El neonato está canalizado. ¿Cuál es el tratamiento intravenoso INMEDIATO indicado por las guías de reanimación neonatal (NRP/AHA) para revertir este cuadro en el recién nacido?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Bolo rápido de Dextrosa al 50% (Agua Glucosada) a dosis de 1 mL/kg para una respuesta fulminante.",
        "incorrectFeedback": "EL ERROR MÁS PELIGROSO. Si le inyectas un bolo de Dextrosa al 50% (o incluso 30%) directo a la vena a un recién nacido, lograrás dos catástrofes: 1) Quemarás la vena por completo (esclerosis hiperosmolar) y 2) Inducirás una hiperosmolaridad brusca en la sangre, que romperá los capilares del cerebro del bebé causando una Hemorragia Intraventricular fatal. En neonatos JAMÁS se usa Dextrosa > 12.5% por vía periférica, y nunca en bolos rápidos la del 50%."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Infusión de Glucagón intramuscular o subcutáneo dosis única.",
        "incorrectFeedback": "El Glucagón se usa como reserva si no hay vía IV o en hipoglucemias refractarias crónicas. Además, en el hijo de madre diabética, el problema es el EXCESO de insulina libre que frena la gluconeogénesis, el glucagón tardaría mucho frente a la convulsión en curso."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Bolo intravenoso de Dextrosa al 10% (DAD 10%) a dosis de 2 mL/kg a pasar en un minuto."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Instaurar infusión continua de Dextrosa al 5% y alimentación con fórmula enteral simultánea, sin bolos por riesgo de flebitis.",
        "incorrectFeedback": "Si el niño está convulsionando o estuporoso, forzar la vía oral causará broncoaspiración. La Dextrosa al 5% no aporta suficientes miligramos de azúcar por mililitro para rescatar el cerebro rápido sin causarle sobrecarga de agua pura al bebé."
      }
    ],
    "correctOptionId": "C",
    "explanation": "Enfermedad sospechada: Hipoglucemia Neonatal Sintomática (secundaria a hiperinsulinismo fetal en Hijo de Madre Diabética).\n\nDato decisivo: Neonato macrosómico + Convulsiones/Temblores en la primera hora de vida + Glucosa < 40-45 mg/dL.\n\nPrincipio clínico evaluado: El protocolo de corrección volumétrica y de concentración (Dextrosa al 10%) exacto para neonatos, evitando la iatrogenia letal de los bolos hipertónicos de adultos.\n\nLa hipoglucemia con síntomas neurológicos graves (convulsión) es una emergencia cerebral inmediata. Las directrices de neonatología mundiales son exactas: Se DEBE usar Dextrosa al 10% (DAD 10%). La dosis del bolo (minibolo) de rescate es de 2 mL / kilogramo de peso, administrado lentamente por vía IV en 1 a 3 minutos. Inmediatamente después del bolo, se deja un goteo continuo (Infusión de Glucosa - VIG) de 6 a 8 mg/kg/minuto para que la hipoglucemia no rebote, ya que el páncreas del bebé está hipertrofiado y seguirá botando insulina todo el día.\n\n**Trampa del examen:** Medicina de adultos aplicada a bebés: El médico que hace turnos de adultos usa DAD al 50% para todos los diabéticos desmayados. La trampa del examen es ver si tienes la cordura de diluir el azúcar (Dextrosa 10%) antes de mandárselo a un cerebro recién nacido.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., este bebé se pasó los últimos 9 meses comiendo del banquete de azúcar alta que le mandaba la sangre de su mamá diabética. Para procesar tanta azúcar, el páncreas del feto se puso mamadísimo y enorme, produciendo litros de insulina (por eso es tan gordo el bebé, la insulina es la hormona de crecimiento fetal). Hoy le cortaste el cordón umbilical: cerraste el buffet de azúcar, pero su páncreas no se enteró y sigue botando insulina a toda máquina. En 60 minutos, la insulina barrió toda la glucosa del bebé dejándolo en 25. Sus neuronas están \"apagándose\". Agarra tu jeringa, aspira Dextrosa al 10% (la de tapa amarilla) y ponle 2 centímetros por kilo. Verás cómo deja de temblar como un perrito asustado y vuelve a la normalidad.",
    "keyPoints": [
      "Hijo de Madre Diabética (Macrosómico) -> Al cortar el cordón sufre Hiperinsulinismo -> Hipoglucemia Severa a la hora 1 de vida.",
      "Rescate de la Hipoglucemia Neonatal Sintomática (<40 mg/dL):",
      "Bolo IV de Dextrosa al 10% a dosis de 2 mL/kg.",
      "NUNCA usar Dextrosa al 50% en bolos en Neonatología."
    ]
  },
  {
    "id": "umng-conv-ed3-07",
    "university": "UMNG",
    "examArea": "CIRUGÍA DE TÓRAX Y URGENCIAS",
    "topic": "ATLS",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Un hombre de 50 años ingresa tras un accidente de tránsito en el que su tórax chocó violentamente contra el volante del vehículo. El paciente ingresa con disnea severa, taquipnea (FR 35 rpm), cianosis y dolor extremo al respirar. A la inspección de su pared torácica, usted nota un movimiento asimétrico grotesco: un segmento de las costillas derechas se hunde bruscamente cuando el paciente toma aire (inspira) y sobresale hacia afuera cuando exhala (movimiento paradójico). El oxímetro marca SatO2 de 85% al ambiente. En los gases arteriales, presenta hipoxemia severa (PaO2 55 mmHg). A pesar del oxígeno a alto flujo, el paciente persiste hipoxémico. De acuerdo a las guías de ATLS para el manejo moderno de esta entidad torácica, ¿cuál es el pilar de tratamiento médico inicial e indicación respiratoria clave para evitar la mortalidad de este paciente?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Traslado al quirófano INMEDIATO para fijación quirúrgica interna de todas las costillas rotas con placas de titanio (Osteosíntesis de urgencia).",
        "incorrectFeedback": "Aunque la fijación quirúrgica moderna existe, NO ES un procedimiento de urgencia primaria en el box de reanimación ni es la primera línea. Las indicaciones para fijación costal (operar) son tardías: si el paciente no logra destetarse del ventilador a los 7 días o si va a quirófano por otro motivo de tórax masivo (toracotomía por sangrado)."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Fijar externamente el segmento inestable colocando bolsas de arena pesadas o cinta adhesiva tensa sobre el tórax para evitar el movimiento paradójico.",
        "incorrectFeedback": "Prácticas bárbaras de la medicina antigua. Poner peso o vendas encima de un tórax roto inmoviliza los músculos, causará hipoventilación absoluta, retención de secreciones, neumonía instantánea y asfixia al paciente."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Restricción estricta de líquidos intravenosos, Analgesia regional (Ej. epidural o bloqueo intercostal) y soporte con Ventilación Mecánica No Invasiva (VMNI) o Intubación."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Reanimación vigorosa con grandes bolos de líquidos intravenosos y vendaje torácico compresivo inelástico 360 grados.",
        "incorrectFeedback": "Líquidos abundantes \"encharcan\" la contusión pulmonar. El vendaje compresivo asfixia al paciente limitando la expansión del tórax sano."
      }
    ],
    "correctOptionId": "C",
    "explanation": "Enfermedad sospechada: Tórax Inestable (Tórax Volante / Flail Chest) con Contusión Pulmonar Subyacente.\n\nDato decisivo: Movimiento paradójico de la pared torácica (se hunde al inspirar) + Hipoxemia severa que no responde fácil al oxígeno.\n\nPrincipio clínico evaluado: El dogma del ATLS moderno: Lo que mata al paciente NO es la mecánica del hueso roto, sino el pulmón machacado por debajo (Contusión Pulmonar) y el dolor que impide ventilar.\n\nEl Tórax Inestable se da cuando se rompen 3 o más costillas consecutivas en 2 o más partes. El pedazo queda suelto y baila al revés de la presión del pecho. Sin embargo, la hipoxemia profunda que lo está matando (PaO2 de 55) es porque el pulmón que está debajo de esas costillas está lleno de moretones y sangre (Contusión Pulmonar). El manejo de oro en ATLS es:\n\n**Trampa del examen:** Curar el hueso antes que el aire: El médico inexperto ve huesos rotos bailando y quiere coserlos o amarrarlos. El experto sabe que el hueso roto duele, pero la contusión pulmonar \"silenciosa\" de abajo es la que ahoga la sangre. Cuida el pulmón, no el hueso (inicialmente).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., tener un pedazo de costillas sueltas que se te hunden en el pulmón cada vez que intentas respirar causa un dolor tan paralizante que el cerebro decide respirar cortito para no sentirlo. Al respirar cortito, el pulmón (que además está magullado y sangrando por dentro) se colapsa y colapsa. Si le pones sábanas apretadas por fuera de la camisa, lo terminas de asfixiar. Lo que necesitas es meterle presión desde adentro. Si el paciente está muy grave, intúbalo y pon el ventilador con buen PEEP; el ventilador actuará como un pilar de aire que mantendrá las costillas firmes hacia afuera y forzará al oxígeno a cruzar la sangre magullada. Y ten seca a esa persona, nada de encharcarla en lactato de ringer o mañana estará nadando en sus propios fluidos pulmonares.",
    "keyPoints": [
      "Tórax inestable (Movimiento paradójico) + Hipoxia = Fisiopatología letal es la Contusión Pulmonar.",
      "Tratamiento agudo de oro: 1. Analgesia regional (Epidural) + 2. Evitar exceso de líquidos (Restricción) + 3. Soporte ventilatorio (Presión Positiva PEEP/VMNI)."
    ]
  },
  {
    "id": "umng-conv-ed3-08",
    "university": "UMNG",
    "examArea": "MEDICINA INTERNA",
    "topic": "NEUROLOGÍA",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Un hombre de 45 años consulta a urgencias quejándose de dolor en la parte lateral derecha del cuello que inició después de una vigorosa manipulación quiropráctica cervical esta misma mañana. Refiere sentirse raro y tener \"la cara dormida\". Al examen físico, usted observa que el paciente presenta Ptosis palpebral derecha (caída parcial del párpado superior) y Miosis derecha (pupila más pequeña que la izquierda). Usted verifica la sudoración facial y se da cuenta de que la hemicara derecha está completamente SECA y enrojecida (Anhidrosis), mientras que el lado izquierdo suda con normalidad. No hay alteraciones motoras en extremidades ni problemas del habla. ¿Cuál es el diagnóstico más probable de esta lesión vascular aguda que explica este síndrome autonómico?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Accidente Cerebrovascular isquémico de la arteria cerebral media derecha (ACM).",
        "incorrectFeedback": "Un infarto de la ACM daría hemiparesia (parálisis del brazo/pierna contralateral) y afasia, pero no da un Síndrome de Horner clásico asilado con dolor cervical per se."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Disección traumática de la Arteria Carótida Interna derecha."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Infarto isquémico cerebeloso por obstrucción de la arteria basilar.",
        "incorrectFeedback": "Un ACV de fosa posterior (Wallenberg) da Horner, pero daría síntomas severos cerebelosos (vértigo intratable, ataxia, disartria, pérdida de sensibilidad cruzada dolor/temperatura), no es un paciente que camina tranquilo quejándose del cuello."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Tumor del ápex pulmonar derecho (Tumor de Pancoast) no diagnosticado.",
        "incorrectFeedback": "El Tumor de Pancoast en la cúpula del pulmón \"aplasta\" el ganglio estrellado torácico simpático y da un Horner crónico perfecto. SÍ lo causa, pero es una patología crónica asociada a pérdida de peso, dolor de brazo, tabaquismo... ¡No aparece mágicamente a los 30 minutos de ir al quiropráctico!"
      }
    ],
    "correctOptionId": "B",
    "explanation": "Enfermedad sospechada: Síndrome de Horner secundario a Disección Carotídea aguda.\n\nDato decisivo: Tríada del Síndrome de Horner (Ptosis, Miosis, Anhidrosis) + Dolor cervical lateral tras un trauma mecánico cervical (quiropraxia / latigazo).\n\nPrincipio clínico evaluado: El trayecto anatómico de las fibras simpáticas ascendentes que viajan envueltas en la adventicia de la arteria carótida interna.\n\nEl sistema simpático del ojo y la cara (que se encarga de abrir bien el ojo, dilatar la pupila y hacer sudar) viaja desde el tórax hacia el cerebro pegado \"como una enredadera\" a la pared de la Arteria Carótida Interna. Cuando una persona hace un giro brusco del cuello (accidentes de auto, montaña rusa, o el famoso \"trueno\" del masajista quiropráctico), las capas íntimas de la carótida se rasgan (Disección Carotídea). La sangre se mete en la pared del vaso, lo hincha, produce un dolor de cuello intenso y \"aplasta/corta\" esas delicadas fibras nerviosas simpáticas que iban por fuera. El resultado inmediato es el Síndrome de Horner: el párpado se cae (ptosis leve), la pupila no se puede dilatar (miosis) y no puede sudar de ese lado (anhidrosis). Es una emergencia vascular (requiere AngioTAC de cuello y cabeza, y anticoagulación/antiagregación) porque la disección puede tapar la carótida completamente horas después causando un ACV masivo hemisférico.\n\n**Trampa del examen:** Tumor vs Trauma: Al leer \"Ptosis, miosis, anhidrosis\", el estudiante recita el libro de neumología: \"Tumor de Pancoast\" (Opción D). El examinador es maquiavélico y te pone el antecedente del masaje cervical en el cuello. No tragues entero; si fue agudo post-masaje, se rompió la arteria.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., cuidado con los \"ajustes de cuello\" de los gimnasios y masajistas de parque. Un giro de 180 grados de tu cuello estira tus arterias carótidas como si fueran de chicle. Si la capa de adentro de la arteria se raja (disección), la sangre se mete entre la carne de la arteria haciendo un hematoma ciego. Como los cables del sistema nervioso simpático usan a la carótida como \"elevador\" para subir a la cara, el hematoma de la arteria aplasta los cables. El paciente queda con cara de sueño en un ojo y la pupila puntiforme. No lo mandes a su casa; si ese hematoma sigue creciendo por dentro de la carótida, cerrará el tubo de la sangre por completo y te hará un infarto cerebral masivo que lo dejará mudo y paralítico mañana.",
    "keyPoints": [
      "Tríada Síndrome de HORNER: 1. Ptosis (Párpado caído), 2. Miosis (Pupila chica), 3. Anhidrosis (Cara seca).",
      "Etiología Aguda + Dolor cuello/Trauma/Quiropraxia = Disección de Arteria Carótida Interna.",
      "Etiología Crónica + Fumador + Dolor hombro = Tumor de Pancoast (Pulmón)."
    ]
  },
  {
    "id": "umng-conv-ed3-09",
    "university": "UMNG",
    "examArea": "GINECOLOGÍA Y OBSTETRICIA",
    "topic": "INFECTOLOGÍA",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Una mujer de 24 años, en su tercer día de postoperatorio tras una cesárea segmentaria de urgencia por sufrimiento fetal (con membranas rotas de 20 horas de evolución), consulta a urgencias por fiebre de 39°C de inicio abrupto, escalofríos severos y dolor abdominal bajo. Al examen físico, PA 105/65 mmHg, FC 115 lpm. El abdomen presenta dolor a la palpación profunda en hipogastrio. A la evaluación ginecológica, el útero se palpa blando, doloroso a la movilización, subinvolucionado (por encima de la cicatriz umbilical) y usted observa la salida de loquios de aspecto achocolatado y con un olor francamente fétido y pútrido. La incisión quirúrgica abdominal no tiene eritema ni secreción. Teniendo en cuenta el diagnóstico infeccioso pélvico puerperal, ¿cuál es el esquema antibiótico endovenoso de ORO avalado internacionalmente que cubre la flora polimicrobiana (incluyendo aerobios y anaerobios pélvicos) y que debe instaurarse hasta que la fiebre ceda?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Ampicilina + Metronidazol.",
        "incorrectFeedback": "La Ampicilina cubre enterococos y Metronidazol cubre anaerobios, pero este esquema deja un enorme \"hueco\" en la cobertura contra las enterobacterias Gram Negativas potentes (como E. coli u otros coliformes de la flora vaginal) que son resistentes a Ampicilina."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Clindamicina + Gentamicina."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Ceftriaxona + Azitromicina.",
        "incorrectFeedback": "Ese es el esquema de Infección de Transmisión Sexual aguda (Gonorrea y Clamidia) en paciente no gestante joven, no cubre la flora profunda necrótica del útero operado post-parto ni los anaerobios."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Ciprofloxacina + Doxiciclina.",
        "incorrectFeedback": "Las quinolonas no son primera línea aquí y no cubren bien anaerobios, la Doxiciclina está proscrita en la lactancia materna por causar manchado dental y daño óseo al recién nacido."
      }
    ],
    "correctOptionId": "B",
    "explanation": "Enfermedad sospechada: Endometritis Puerperal Post-Cesárea.\n\nDato decisivo: Fiebre en los primeros 3 a 5 días post-cesárea + Útero subinvolucionado y doloroso + Loquios fétidos. (La incisión sana descarta infección de sitio operatorio de pared superficial).\n\nPrincipio clínico evaluado: El esquema antibiótico universal e innegociable de la infección poli-microbiana del lecho placentario tras un procedimiento invasivo obstétrico.\n\nLa Endometritis Puerperal es una infección del endometrio y miometrio remanente tras el parto. Su factor de riesgo máximo y universal es el parto por CESÁREA (especialmente si fue tras horas de labor y membranas rotas). La flora involucrada es altamente polimicrobiana: bacterias de la piel, del intestino, de la vagina y bacterias anaerobias estrictas que aman el tejido oscuro y sin oxígeno de la matriz contraída (como Bacteroides y Peptostreptococcus). El tratamiento endovenoso Gold Standard mundial (acogido por ACOG, Minsalud) es la terapia combinada de Clindamicina (900 mg c/8h) + Gentamicina (5 mg/kg cada 24h). La Clindamicina destruye a los letales Anaerobios y a los Gram positivos (Estreptococos); la Gentamicina barre y aniquila a las enterobacterias Gram Negativas. (A veces se añade Ampicilina si se sospecha o documenta infección por Enterococcus resistente). El esquema se mantiene IV hasta que la mujer esté sin fiebre por 24 a 48 horas.\n\n**Trampa del examen:** Manejo de la herida vs Manejo del útero: A veces te ponen que \"los puntos de la cesárea están rojos y botan pus\". Eso es Infección del Sitio Operatorio (cubres S. aureus con Cefazolina). Pero aquí te dictan que \"la herida está sana, lo que huele a podrido son los loquios de la vagina\". Eso es Endometritis = Clindamicina + Gentamicina (CLIN-GENTA).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., si en la ronda de hospitalización post-cesárea la habitación de tu paciente huele fuertemente a material en descomposición al levantar la cobija de la cama, ni necesitas revisarla para saber que tiene una endometritis. Las bacterias del recto de la mamá aprovecharon que hiciste un corte gigante en su útero durante la cesárea, se mudaron al músculo uterino y están organizando una fiesta de anaerobios en los restos de placenta invisible. El esquema CLIN-GENTA es el combo dinámico de la obstetricia. Cuelgas esas dos bolsas de antibiótico, esperas 48 horas, y la señora pasará de estar en riesgo de choque séptico a irse para su casa dándole leche a su bebé. Y tranquilo, ambas drogas son seguras para la lactancia.",
    "keyPoints": [
      "Fiebre 2-5 días POST-CESÁREA + Loquios fétidos + Útero doloroso = Endometritis Puerperal.",
      "Esquema de antibiótico de elección Universal: Clindamicina + Gentamicina (IV hasta que ceda la fiebre)."
    ]
  },
  {
    "id": "umng-conv-ed3-10",
    "university": "UMNG",
    "examArea": "PEDIATRÍA",
    "topic": "REUMATOLOGÍA - GASTROENTEROLOGÍA",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Un niño de 5 años es llevado a su consultorio refiriendo dolor abdominal tipo cólico intermitente desde hace 3 días. La madre le cuenta que la semana pasada tuvo un cuadro de amigdalitis que resolvió solo. Al desvestir al niño para el examen físico, usted encuentra lo siguiente: el niño presenta inflamación y dolor (artralgias) en los tobillos y las rodillas que le dificultan caminar. Al inspeccionar la piel, observa una llamativa y abundante erupción de lesiones rojo-violáceas y punteadas, ligeramente sobreelevadas al tacto (púrpura palpable), agrupadas estrictamente y de forma simétrica en los glúteos, parte posterior de los muslos y extremidades inferiores, respetando el tronco superior. El hemograma muestra plaquetas normales (250.000) y tiempos de coagulación normales. En el parcial de orina (uroanálisis) usted documenta hematuria microscópica de 50 glóbulos rojos por campo. ¿Cuál es el diagnóstico clínico y cuál es la complicación digestiva grave por la cual debe enseñarle signos de alarma a la madre?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Púrpura Trombocitopénica Inmune (PTI) / Riesgo de hemorragia gastrointestinal masiva por plaquetopenia.",
        "incorrectFeedback": "La Púrpura Trombocitopénica Inmune da moretones y sangrados, PERO su diagnóstico obliga a que el laboratorio muestre PLAQUETAS BAJAS (usualmente < 20.000 o 50.000). Además, las lesiones de la PTI son planas (maculares), no son púrpura \"palpable\" que se siente rasposa. Nuestro niño tiene las plaquetas perfectas (250.000)."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Meningococcemia (Infección por N. meningitidis) / Riesgo de choque séptico y necrosis intestinal.",
        "incorrectFeedback": "La Meningococcemia cursa con un rash purpúrico feo, pero el niño se vería extremadamente tóxico, en estado de choque febril, comatoso o hipotenso grave en menos de 24 horas. El niño del caso camina y tiene el sarpullido solo en el tren inferior."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Vasculitis por IgA (Púrpura de Henoch-Schönlein) / Riesgo de Invaginación intestinal (Intususcepción)."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Abdomen agudo apendicular con bacteriemia cutánea reactiva / Perforación y peritonitis.",
        "incorrectFeedback": "La apendicitis no da hematuria microscópica como presentación cardinal ni causa erupciones violáceas palpables en las piernas de forma simétrica."
      }
    ],
    "correctOptionId": "C",
    "explanation": "Enfermedad sospechada: Vasculitis por depósito de Inmunoglobulina A (IgA) (Históricamente Púrpura de Henoch-Schönlein - PHS).\n\nDato decisivo: Tríada/Tétrada clásica en un niño con antecedente de infección respiratoria: Púrpura PALPABLE en nalgas y piernas (con plaquetas normales) + Artralgias + Dolor abdominal + Hematuria (Nefritis por IgA).\n\nPrincipio clínico evaluado: El diagnóstico de la vasculitis más común de la infancia y su temida complicación quirúrgica gastrointestinal isquémica.\n\nTras una faringitis banal, el sistema inmune del niño fabrica defensas (Anticuerpos IgA) que se descontrolan. Esas Inmunoglobulinas A se pegan a las paredes de los vasos sanguíneos chiquitos (capilares) del cuerpo y los inflaman (Vasculitis).\n\n**Trampa del examen:** Miedo a las petequias: En pediatría te entrenan para que si ves punticos rojos en la piel (púrpura), salgas corriendo pensando en meningitis o plaquetas bajas. El Henoch-Schönlein es la \"púrpura benévola\" de las preguntas de internado. Si el niño está estable y tiene sus plaquetas normales, es una vasculitis autoinmune, respira tranquilo, pero cuida sus riñones y su intestino.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., cuando la mamá le quita los pantalones a este niño, parece que le hubieran salpicado las nalgas y las pantorrillas con tinta morada permanente en punticos. Pero cuando le pasas el dedo por encima de las manchas, se sienten con relieve (púrpura palpable). La abuela estará asustada porque cree que el niño tiene leucemia, pero tú miras el hemograma, ves las plaquetas de 250.000, sonríes y le das un AINE (Ibuprofeno) para desinflamarle las rodillas. La única tarea de un especialista aquí es sentar a la mamá y decirle: \"Señora, si el niño llega a retorcerse de dolor de estómago y hace popó rojo que parece moco o gelatina, córrale al hospital, porque la inflamación le anudó las tripas por dentro\".\n\n¡Terminaste con honores el Lote 1 del Simulacro 3!\nEste nivel es puro fuego. Ya no estamos en los algoritmos fáciles; estamos razonando excepciones inmunológicas, disecciones vasculares ocultas, y desastres del oxígeno. Esta es la madera del Residente Supremo.\n\n¿Cómo se siente esa máquina mental? Respira profundo, tómate tu café negro, y cuando me des la señal, suelto a los sabuesos con el Lote 2 (Preguntas 11 a 20). ¡Seguimos sumando puntos a tu plaza!\n\nLote 2 (Preguntas 11 a 20)\n\n¡La máquina no para, colega! Ingresar al Lote 2 (Preguntas 11 a 20) del tercer simulacro es territorio de valientes. Aquí la curva de dificultad se vuelve vertical.\n\nEn este bloque vamos a destrozar los errores iatrogénicos de la ventilación mecánica, las emergencias quirúrgicas donde \"tocar\" al paciente lo mata, los infartos ocultos que no se ven en el ECG de rutina, y los detalles pediátricos finos. En la UMNG no evalúan si sabes la regla general; evalúan si dominas la excepción de oro.\n\nActivo mi modo PROMPT MAESTRO / DR. Q. ¡Ponte los guantes de plomo, vamos a operar!",
    "keyPoints": [
      "Tríada de Púrpura de Henoch-Schönlein (Vasculitis IgA):",
      "Púrpura Palpable en nalgas y miembros inferiores (Con Plaquetas Normales).",
      "Artralgias (Rodillas/tobillos).",
      "Dolor Abdominal.",
      "(+ Hematuria por afectación renal).",
      "Complicación quirúrgica más temida: Intususcepción Intestinal (Invaginación). (¡Debe explicarse a los padres!)."
    ]
  }
];
