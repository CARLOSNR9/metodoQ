import { buildUnivalleQuestion as q } from "./build-question";

const LEGAL = "LEGISLACIÓN Y ÉTICA MÉDICA";
const EPI = "SALUD PÚBLICA - EPIDEMIOLOGÍA";

/** Normatividad, salud pública y epidemiología · #11–#20 (componente del examen Univalle). */
export const UNIVALLE_NORMATIVIDAD_11_20 = [
  q({
    id: "univalle-norma-11",
    examArea: LEGAL,
    topic: "CERTIFICADO DE DEFUNCIÓN EN MUERTE VIOLENTA",
    difficulty: "easy",
    tags: ["normatividad", "medicina-legal"],
    statement:
      "Un hombre de 31 años ingresa sin signos vitales al servicio de urgencias de un hospital de Cali con múltiples heridas por proyectil de arma de fuego. Se confirma el fallecimiento. La familia le pide al médico de turno que firme el certificado de defunción para llevarse el cuerpo. ¿Cuál es la conducta correcta?",
    options: [
      [
        "Firmar el certificado indicando 'paro cardiorrespiratorio' como causa básica.",
        "El paro cardiorrespiratorio es un mecanismo, no una causa de muerte; además, en muertes violentas el médico tratante no expide el certificado.",
      ],
      [
        "Entregar el cuerpo a la familia sin certificado, porque es una muerte evidente.",
        "En una muerte violenta el cuerpo queda a disposición de las autoridades para la necropsia médico-legal.",
      ],
      [
        "No expedir el certificado: informar a la autoridad (policía judicial) para la inspección del cadáver y la necropsia médico-legal en Medicina Legal.",
      ],
      [
        "Realizar una necropsia clínica en el hospital antes de entregar el cuerpo.",
        "La necropsia de una muerte violenta es médico-legal y la realiza el Instituto Nacional de Medicina Legal, no una necropsia clínica hospitalaria.",
      ],
    ],
    correct: "C",
    explanation:
      "Principio evaluado: manejo del cadáver y certificación de la muerte.\n\nEn una muerte natural, el médico que atendió al paciente expide el certificado de defunción (indicando la causa básica, no el mecanismo como 'paro cardiorrespiratorio'). En las muertes violentas (homicidio, suicidio, accidente) o en investigación, se informa a la autoridad competente para la inspección técnica del cadáver, y la necropsia médico-legal la realiza el Instituto Nacional de Medicina Legal y Ciencias Forenses, que expide el certificado.\n\n**Trampa del examen:** firmar el certificado de una muerte violenta o poner 'paro cardiorrespiratorio' como causa.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, muerte violenta = no firmas, avisas. Y nunca escribas 'paro cardiorrespiratorio': todos morimos en paro.",
    keyPoints: [
      "Muerte violenta: se informa a la autoridad; necropsia médico-legal.",
      "El médico tratante solo certifica muertes naturales.",
      "'Paro cardiorrespiratorio' no es una causa de muerte.",
    ],
  }),
  q({
    id: "univalle-norma-12",
    examArea: "SALUD PÚBLICA - VIGILANCIA",
    topic: "SIVIGILA: NOTIFICACIÓN INMEDIATA",
    difficulty: "medium",
    tags: ["salud-publica"],
    statement:
      "En un centro de salud de Cali se atiende a un niño de 4 años sin vacunas, con fiebre, exantema maculopapular generalizado, tos, coriza y conjuntivitis. ¿Cuál es la conducta de vigilancia en salud pública correcta?",
    options: [
      [
        "Notificarlo de forma inmediata como caso sospechoso de sarampión, tomar muestras e iniciar la investigación de campo.",
      ],
      [
        "Incluirlo en la notificación semanal de rutina.",
        "El sarampión es un evento de notificación inmediata por su potencial epidémico y por estar en eliminación.",
      ],
      [
        "No notificarlo hasta tener confirmación por laboratorio.",
        "Se notifica el caso sospechoso; esperar la confirmación retrasa las acciones de control.",
      ],
      [
        "Notificarlo solo si hay más de 3 casos en el mismo barrio.",
        "Un solo caso sospechoso de sarampión es suficiente para la notificación inmediata.",
      ],
    ],
    correct: "A",
    explanation:
      "Principio evaluado: vigilancia en salud pública (SIVIGILA, Instituto Nacional de Salud).\n\nCaso sospechoso de sarampión: fiebre + exantema maculopapular, con tos, coriza o conjuntivitis. Es un evento de notificación inmediata individual (al igual que la parálisis flácida aguda, la rabia humana y el cólera, entre otros) por ser un evento en eliminación y de alto potencial epidémico. Se toman muestras (suero, hisopado y orina), se aísla al paciente, se hace la investigación epidemiológica de campo, la búsqueda de contactos y el bloqueo vacunal. Otros eventos, como la tuberculosis o el VIH, se notifican semanalmente.\n\n**Trampa del examen:** esperar la confirmación del laboratorio para notificar.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, fiebre + brote + las 'tres C' (tos, coriza, conjuntivitis) en un niño sin vacunas = llamas ya. En vigilancia se notifica el sospechoso, no el confirmado.",
    keyPoints: [
      "Sarampión: notificación inmediata del caso sospechoso.",
      "Fiebre + exantema + tos/coriza/conjuntivitis = caso sospechoso.",
      "Aislamiento, muestras, investigación de campo y bloqueo vacunal.",
    ],
  }),
  q({
    id: "univalle-norma-13",
    examArea: EPI,
    topic: "VALOR PREDICTIVO POSITIVO",
    difficulty: "medium",
    tags: ["epidemiologia"],
    statement:
      "Se aplica una prueba de tamizaje a 1.000 personas de una población donde la prevalencia de la enfermedad es del 10%. La prueba tiene una sensibilidad del 90% y una especificidad del 80%. ¿Cuál es aproximadamente el valor predictivo positivo?",
    options: [
      [
        "90%",
        "Esa es la sensibilidad: la probabilidad de que la prueba sea positiva en un enfermo, no la de estar enfermo con una prueba positiva.",
      ],
      [
        "80%",
        "Esa es la especificidad.",
      ],
      [
        "97%",
        "Ese valor se acerca al valor predictivo negativo (720/730), no al positivo.",
      ],
      [
        "33%",
      ],
    ],
    correct: "D",
    explanation:
      "Cálculo con tabla 2 × 2:\n- Enfermos: 10% de 1.000 = 100. Verdaderos positivos = 90% de 100 = 90; falsos negativos = 10.\n- Sanos: 900. Verdaderos negativos = 80% de 900 = 720; falsos positivos = 180.\n- Positivos totales = 90 + 180 = 270.\n- VPP = 90 / 270 = 0,33 (33%).\n- VPN = 720 / 730 ≈ 98,6%.\n\nCon una prevalencia baja, incluso una prueba sensible produce muchos falsos positivos, y el VPP cae.\n\n**Trampa del examen:** confundir sensibilidad con VPP.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, en el examen no adivines: dibuja la tabla 2 × 2 con 1.000 personas. Toma 40 segundos y no falla nunca.",
    keyPoints: [
      "VPP = VP / (VP + FP).",
      "Dibujar la tabla 2 × 2 con una población de 1.000.",
      "Baja prevalencia → VPP bajo.",
    ],
  }),
  q({
    id: "univalle-norma-14",
    examArea: EPI,
    topic: "EFECTO DE LA PREVALENCIA EN LOS VALORES PREDICTIVOS",
    difficulty: "easy",
    tags: ["epidemiologia"],
    statement:
      "Una prueba diagnóstica para dengue, validada en un hospital de Cali durante un brote, se empieza a usar en una ciudad donde la enfermedad es mucho menos frecuente. Si la prueba es la misma, ¿qué ocurrirá con sus indicadores?",
    options: [
      [
        "Disminuirán la sensibilidad y la especificidad.",
        "La sensibilidad y la especificidad son propiedades intrínsecas de la prueba y no dependen de la prevalencia.",
      ],
      [
        "El valor predictivo positivo disminuirá y el valor predictivo negativo aumentará; la sensibilidad y la especificidad no cambian.",
      ],
      [
        "El valor predictivo positivo aumentará.",
        "Ocurre lo contrario: con menor prevalencia hay proporcionalmente más falsos positivos.",
      ],
      [
        "Ningún indicador cambiará.",
        "Los valores predictivos sí dependen de la prevalencia.",
      ],
    ],
    correct: "B",
    explanation:
      "Principio evaluado: propiedades de las pruebas diagnósticas.\n\nLa sensibilidad y la especificidad son propiedades de la prueba: no cambian con la prevalencia. Los valores predictivos sí dependen de ella. Cuando la prevalencia disminuye, el VPP disminuye (más falsos positivos en proporción) y el VPN aumenta. Por eso una prueba que funciona bien en un brote puede producir muchos falsos positivos fuera de él.\n\n**Trampa del examen:** creer que la sensibilidad cambia con la población.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, sensibilidad y especificidad viajan con la prueba; los valores predictivos viven en la población.",
    keyPoints: [
      "Sensibilidad y especificidad no dependen de la prevalencia.",
      "↓ Prevalencia → ↓ VPP y ↑ VPN.",
    ],
  }),
  q({
    id: "univalle-norma-15",
    examArea: EPI,
    topic: "NÚMERO NECESARIO A TRATAR (NNT)",
    difficulty: "medium",
    tags: ["epidemiologia"],
    statement:
      "En un ensayo clínico, la incidencia de evento cerebrovascular a 5 años fue del 20% en el grupo placebo y del 15% en el grupo que recibió el medicamento. ¿Cuántos pacientes hay que tratar durante 5 años para prevenir un evento?",
    options: [
      [
        "5",
        "Corresponde a confundir el NNT con la reducción absoluta expresada en porcentaje.",
      ],
      [
        "25",
        "No corresponde a 1/RAR con estos datos.",
      ],
      [
        "20",
      ],
      [
        "4",
        "Corresponde a 1/0,25, que sería usar la reducción relativa en lugar de la absoluta.",
      ],
    ],
    correct: "C",
    explanation:
      "Cálculo:\n- Riesgo en controles = 0,20; riesgo en tratados = 0,15.\n- Reducción absoluta del riesgo (RAR) = 0,20 − 0,15 = 0,05.\n- NNT = 1 / RAR = 1 / 0,05 = 20.\n- Reducción relativa del riesgo (RRR) = 0,05 / 0,20 = 25%.\n\nEl NNT siempre se calcula con la reducción ABSOLUTA y se refiere al tiempo de seguimiento del estudio.\n\n**Trampa del examen:** usar la reducción relativa (25%), que da un NNT erróneo de 4.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, NNT = 1 dividido por la resta de los riesgos. La reducción relativa vende el medicamento; la absoluta dice la verdad.",
    keyPoints: [
      "NNT = 1 / reducción absoluta del riesgo.",
      "RAR = riesgo en controles − riesgo en tratados.",
      "No usar la reducción relativa para el NNT.",
    ],
  }),
  q({
    id: "univalle-norma-16",
    examArea: EPI,
    topic: "DISEÑO DE CASOS Y CONTROLES",
    difficulty: "easy",
    tags: ["epidemiologia"],
    statement:
      "Un grupo de investigadores de Cali quiere estudiar si la exposición a pesticidas en cultivos de caña se asocia con un tipo raro de leucemia. Seleccionan 80 pacientes con la leucemia y 160 personas sin ella, y comparan la exposición previa a pesticidas en ambos grupos. ¿Qué diseño es y qué medida de asociación se calcula?",
    options: [
      [
        "Estudio de cohortes; riesgo relativo.",
        "En una cohorte se parte de la exposición y se sigue en el tiempo hasta la aparición de la enfermedad.",
      ],
      [
        "Estudio de casos y controles; odds ratio (razón de oportunidades).",
      ],
      [
        "Estudio transversal; razón de prevalencias.",
        "El estudio transversal mide exposición y enfermedad en un mismo momento en una muestra de la población, no selecciona por la enfermedad.",
      ],
      [
        "Ensayo clínico; reducción absoluta del riesgo.",
        "No hay intervención asignada por el investigador.",
      ],
    ],
    correct: "B",
    explanation:
      "Principio evaluado: diseños de investigación epidemiológica.\n\nEn un estudio de casos y controles se selecciona a los participantes según tengan (casos) o no (controles) la enfermedad, y se compara la exposición previa. Es el diseño ideal para enfermedades raras o de latencia larga. Como no se conoce la incidencia, no se puede calcular el riesgo relativo; la medida de asociación es el odds ratio. Su principal debilidad es el sesgo de memoria (recuerdo).\n\n**Trampa del examen:** calcular riesgo relativo en un estudio de casos y controles.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, ¿partiste de la enfermedad y miraste hacia atrás? casos y controles, odds ratio. ¿Partiste de la exposición y miraste hacia adelante? cohorte, riesgo relativo.",
    keyPoints: [
      "Casos y controles: se parte de la enfermedad; ideal para enfermedades raras.",
      "Medida de asociación: odds ratio.",
      "Cohorte: se parte de la exposición; riesgo relativo.",
    ],
  }),
  q({
    id: "univalle-norma-17",
    examArea: EPI,
    topic: "SESGOS EN INVESTIGACIÓN",
    difficulty: "medium",
    tags: ["epidemiologia"],
    statement:
      "En un estudio de casos y controles sobre malformaciones congénitas, las madres de niños con malformaciones reportaron con más frecuencia haber tomado medicamentos durante el embarazo que las madres de niños sanos, porque han pensado mucho más en las posibles causas. ¿Qué sesgo describe esta situación?",
    options: [
      [
        "Sesgo de memoria (recuerdo).",
      ],
      [
        "Sesgo de selección por pérdidas en el seguimiento.",
        "Las pérdidas en el seguimiento afectan sobre todo a las cohortes y los ensayos clínicos.",
      ],
      [
        "Sesgo de tiempo de anticipación (lead-time).",
        "Es propio de los estudios de tamizaje: la sobrevida parece mayor solo porque el diagnóstico se adelantó.",
      ],
      [
        "Falacia ecológica.",
        "Se refiere a inferir asociaciones individuales a partir de datos agregados de poblaciones.",
      ],
    ],
    correct: "A",
    explanation:
      "Principio evaluado: sesgos de información.\n\nEl sesgo de memoria (o de recuerdo) es un sesgo de información típico de los estudios de casos y controles: los casos (o sus familias) recuerdan y reportan las exposiciones de forma diferente a los controles, lo que sobreestima la asociación. Se reduce usando registros objetivos (historias clínicas, fórmulas médicas) en lugar de autorreporte, o eligiendo controles con otra enfermedad.\n\n**Trampa del examen:** confundirlo con sesgos de selección.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, la mamá del niño enfermo recuerda todo lo que tomó; la del niño sano no. Eso es sesgo de memoria.",
    keyPoints: [
      "Sesgo de memoria: típico de casos y controles.",
      "Es un sesgo de información; sobreestima la asociación.",
      "Se controla con registros objetivos.",
    ],
  }),
  q({
    id: "univalle-norma-18",
    examArea: LEGAL,
    topic: "MALTRATO INFANTIL: OBLIGACIÓN DE REPORTE",
    difficulty: "medium",
    tags: ["normatividad", "pediatria"],
    statement:
      "Un lactante de 8 meses es llevado a urgencias por 'no mover el brazo'. La radiografía muestra una fractura de húmero y fracturas costales posteriores en diferentes estadios de consolidación. Los padres dicen que se cayó de la cama. ¿Cuál es la conducta correcta?",
    options: [
      [
        "Inmovilizar el brazo y dar de alta con los padres, porque explicaron el mecanismo.",
        "Fracturas costales posteriores y en distintos estadios en un lactante no se explican por una caída de la cama; son altamente sugestivas de maltrato.",
      ],
      [
        "Pedir el consentimiento de los padres antes de reportar el caso.",
        "El reporte de sospecha de maltrato es obligatorio y no requiere autorización de los padres.",
      ],
      [
        "Esperar a la próxima consulta para confirmar el maltrato antes de reportar.",
        "Se reporta la sospecha; esperar expone al niño a nuevas agresiones.",
      ],
      [
        "Hospitalizar para proteger al niño, completar el estudio (serie ósea, fondo de ojo, neuroimagen) y reportar a la autoridad competente (ICBF o Comisaría de Familia) y al SIVIGILA.",
      ],
    ],
    correct: "D",
    explanation:
      "Principio evaluado: protección integral de niños, niñas y adolescentes (Ley 1098 de 2006, Código de la Infancia y la Adolescencia).\n\nLos hallazgos sugestivos de maltrato incluyen fracturas costales posteriores, fracturas metafisarias 'en asa de balde', fracturas en distintos estadios de consolidación y un mecanismo que no explica las lesiones. El médico tiene la obligación de reportar la SOSPECHA a las autoridades de protección (ICBF, Comisaría de Familia) y notificar al SIVIGILA (evento de violencia de género e intrafamiliar). Se hospitaliza al niño para protegerlo y completar el estudio (serie ósea, fondo de ojo, neuroimagen según el caso). El interés superior del niño prevalece.\n\n**Trampa del examen:** aceptar la explicación de los padres o esperar la certeza antes de reportar.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, un bebé que no gatea no se rompe las costillas por detrás. Tú no tienes que probar el maltrato: tienes que proteger al niño y reportar la sospecha.",
    keyPoints: [
      "Fracturas costales posteriores y de distinta antigüedad = sospecha de maltrato.",
      "Reporte obligatorio de la sospecha (ICBF/Comisaría) + SIVIGILA.",
      "Hospitalizar para proteger y completar el estudio.",
    ],
  }),
  q({
    id: "univalle-norma-19",
    examArea: LEGAL,
    topic: "ACCIDENTE DE TRABAJO (LEY 1562 DE 2012)",
    difficulty: "easy",
    tags: ["normatividad", "salud-ocupacional"],
    statement:
      "Una operaria de un ingenio azucarero del Valle sufre una fractura de radio cuando el bus que la empresa suministra para llevar a los trabajadores desde Cali hasta la planta tiene un accidente en la vía, antes de iniciar su turno. ¿Cómo se clasifica este evento?",
    options: [
      [
        "Accidente común, porque aún no había iniciado su jornada laboral.",
        "La ley incluye como laboral el traslado cuando el transporte lo suministra el empleador.",
      ],
      [
        "Enfermedad laboral.",
        "La enfermedad laboral resulta de la exposición a factores de riesgo del trabajo a lo largo del tiempo, no de un suceso repentino.",
      ],
      [
        "Accidente de trabajo, porque ocurrió durante el traslado en un transporte suministrado por el empleador.",
      ],
      [
        "Accidente de tránsito cubierto solo por el SOAT, sin relación laboral.",
        "El SOAT cubre la atención inicial de víctimas de tránsito, pero el evento también se reconoce como accidente de trabajo para la ARL.",
      ],
    ],
    correct: "C",
    explanation:
      "Principio evaluado: definición de accidente de trabajo en el Sistema General de Riesgos Laborales.\n\nLa Ley 1562 de 2012 define el accidente de trabajo como todo suceso repentino que sobrevenga por causa o con ocasión del trabajo y que produzca una lesión orgánica, perturbación funcional o psiquiátrica, invalidez o muerte. Incluye expresamente el que se produce durante el traslado de los trabajadores desde su residencia al lugar de trabajo o viceversa, cuando el transporte lo suministra el empleador. Debe reportarse a la ARL dentro de los 2 días hábiles siguientes.\n\n**Trampa del examen:** pensar que solo cuenta lo que ocurre dentro de la planta o del horario.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, si el bus es de la empresa, el accidente es de trabajo.",
    keyPoints: [
      "Ley 1562 de 2012: definición de accidente de trabajo.",
      "El traslado en transporte suministrado por el empleador es accidente de trabajo.",
      "Reporte a la ARL dentro de 2 días hábiles.",
    ],
  }),
  q({
    id: "univalle-norma-20",
    examArea: LEGAL,
    topic: "TRIAGE EN URGENCIAS (RES. 5596 DE 2015)",
    difficulty: "easy",
    tags: ["normatividad", "urgencias"],
    statement:
      "Según la Resolución 5596 de 2015, que reglamenta el triage en los servicios de urgencias en Colombia, ¿cuál de las siguientes afirmaciones es correcta?",
    options: [
      [
        "El triage tiene 3 categorías y solo puede hacerlo un médico especialista.",
        "La norma establece 5 categorías, y el triage lo puede realizar un médico general o un profesional de enfermería.",
      ],
      [
        "El triage II corresponde a condiciones que pueden deteriorarse rápidamente, y la atención debe darse en un máximo de 30 minutos; el triage I requiere atención inmediata.",
      ],
      [
        "Los pacientes de triage IV y V pueden ser devueltos sin ninguna orientación.",
        "Aun en triage IV y V se debe informar al paciente y orientarlo sobre dónde y cuándo puede ser atendido.",
      ],
      [
        "El triage define la prioridad según el orden de llegada.",
        "El triage prioriza según la gravedad clínica, no según el orden de llegada.",
      ],
    ],
    correct: "B",
    explanation:
      "Principio evaluado: triage en Colombia.\n\nLa Resolución 5596 de 2015 establece 5 categorías: triage I, atención inmediata (riesgo vital inminente: paro, choque, vía aérea comprometida); triage II, condición que puede evolucionar rápidamente a riesgo vital o a secuelas, atención en máximo 30 minutos; triage III, requiere estudios o procedimientos, sin riesgo vital inmediato; triage IV, condición sin compromiso del estado general; triage V, problema agudo o crónico sin evidencia de deterioro. Lo realiza un médico general o un profesional de enfermería, y en las categorías IV y V se debe orientar al paciente a la red adecuada.\n\n**Trampa del examen:** confundir el triage con el orden de llegada o pensar que cualquier paciente de triage bajo puede ser despachado sin información.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, triage I: ya mismo. Triage II: menos de 30 minutos. Los demás se atienden por prioridad, pero nadie sale sin orientación.",
    keyPoints: [
      "Res. 5596 de 2015: 5 categorías de triage.",
      "Triage I inmediato; triage II ≤30 minutos.",
      "Lo realiza médico general o enfermería.",
    ],
  }),
];
