import { buildUnivalleQuestion as q } from "./build-question";

const LEGAL = "LEGISLACIÓN Y ÉTICA MÉDICA";

/** Normatividad colombiana y ética médica · #01–#10 (componente del examen Univalle). */
export const UNIVALLE_NORMATIVIDAD_01_10 = [
  q({
    id: "univalle-norma-01",
    examArea: LEGAL,
    topic: "SECRETO PROFESIONAL (LEY 23 DE 1981)",
    difficulty: "medium",
    tags: ["normatividad", "etica"],
    statement:
      "Un hombre de 30 años recibe en consulta el diagnóstico de infección por VIH. Está casado y tiene relaciones sin protección con su esposa. A pesar de varias sesiones de asesoría, se niega a informarle y a usar preservativo, y le pide al médico que no le diga nada. Según la Ley 23 de 1981, ¿qué puede hacer el médico?",
    options: [
      [
        "Nada: el secreto profesional es absoluto y no admite excepciones.",
        "El artículo 38 de la Ley 23 establece excepciones al secreto profesional; no es absoluto.",
      ],
      [
        "Informar al empleador del paciente para que tome medidas.",
        "El empleador no está entre las personas a quienes se puede revelar el secreto; hacerlo violaría la reserva.",
      ],
      [
        "Revelar la información a la esposa, que está en riesgo, porque la ley lo permite cuando una enfermedad grave infectocontagiosa pone en peligro la vida del cónyuge.",
      ],
      [
        "Denunciarlo ante la Policía por el delito de propagación de epidemia antes de cualquier otra acción.",
        "La conducta ética indicada es la asesoría y, si persiste el riesgo, la excepción al secreto a favor del cónyuge; no es la primera acción.",
      ],
    ],
    correct: "C",
    explanation:
      "Principio evaluado: excepciones al secreto profesional médico.\n\nEl artículo 38 de la Ley 23 de 1981 permite revelar el secreto profesional: a) al enfermo, en lo que estrictamente le concierne; b) a los familiares del enfermo, si la revelación es útil al tratamiento; c) a los responsables del paciente cuando es menor de edad o mentalmente incapaz; d) a las autoridades judiciales o de higiene y salud en los casos previstos por la ley; e) a los interesados, cuando por defectos físicos irremediables o enfermedades graves infectocontagiosas o hereditarias se ponga en peligro la vida del cónyuge o de su descendencia.\n\nLo correcto es insistir en la asesoría y, si el paciente persiste en exponer a su pareja, el médico puede informarle al cónyuge en riesgo, documentándolo en la historia clínica.\n\n**Trampa del examen:** creer que el secreto es absoluto.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, el secreto protege al paciente, pero no lo convierte en un arma contra otra persona. Primero educa; si no hay forma, protege al cónyuge.",
    keyPoints: [
      "Ley 23 de 1981, art. 38: excepciones al secreto profesional.",
      "Se puede revelar al cónyuge en riesgo por enfermedad grave infectocontagiosa.",
      "Documentar la asesoría y la decisión en la historia clínica.",
    ],
  }),
  q({
    id: "univalle-norma-02",
    examArea: LEGAL,
    topic: "HISTORIA CLÍNICA: RESERVA Y CONSERVACIÓN",
    difficulty: "medium",
    tags: ["normatividad"],
    statement:
      "El área de archivo de una IPS de Cali consulta cuánto tiempo debe conservar las historias clínicas de los pacientes. Según la normatividad colombiana vigente (Resolución 839 de 2017, que modificó la Resolución 1995 de 1999), ¿cuál es el tiempo mínimo de retención?",
    options: [
      [
        "5 años contados desde la apertura de la historia clínica.",
        "Era una referencia de normas anteriores; el tiempo actual es mayor y se cuenta desde la última atención.",
      ],
      [
        "15 años contados a partir de la fecha de la última atención.",
      ],
      [
        "20 años contados desde la muerte del paciente, sin excepción.",
        "No es la regla general vigente.",
      ],
      [
        "Puede destruirse a los 2 años si el paciente no ha vuelto a consultar.",
        "La historia clínica no se puede eliminar en ese plazo; hay un periodo mínimo de retención obligatorio.",
      ],
    ],
    correct: "B",
    explanation:
      "Principio evaluado: manejo de la historia clínica en Colombia.\n\nLa historia clínica es un documento privado, obligatorio y sometido a reserva (Resolución 1995 de 1999). Solo puede ser conocida por terceros con autorización del paciente o en los casos previstos por la ley. La Resolución 839 de 2017 fijó un tiempo mínimo de retención de 15 años contados a partir de la última atención (mínimo 5 años en el archivo de gestión y 10 en el archivo central). Hay reglas especiales para algunas historias (por ejemplo, víctimas de violaciones de derechos humanos o de interés histórico).\n\n**Trampa del examen:** contar el tiempo desde la apertura de la historia.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, 15 desde la última: 5 en gestión y 10 en central. Y la historia es del paciente en cuanto a su reserva: nadie la ve sin su permiso o una orden legal.",
    keyPoints: [
      "Historia clínica: documento privado, obligatorio y con reserva.",
      "Retención mínima: 15 años desde la última atención (Res. 839 de 2017).",
      "5 años en archivo de gestión + 10 en archivo central.",
    ],
  }),
  q({
    id: "univalle-norma-03",
    examArea: LEGAL,
    topic: "CONSENTIMIENTO INFORMADO EN URGENCIAS",
    difficulty: "easy",
    tags: ["normatividad", "etica", "urgencias"],
    statement:
      "Llega a urgencias del Hospital Universitario del Valle un hombre de 25 años, inconsciente, con herida por arma cortopunzante en el tórax, en choque hemorrágico. Nadie lo acompaña y no tiene documentos. El cirujano considera que necesita toracotomía inmediata. ¿Qué indica la normatividad colombiana sobre el consentimiento?",
    options: [
      [
        "No se puede operar hasta que un familiar o un juez firme el consentimiento.",
        "Esperar el consentimiento en una urgencia vital con un paciente incapaz de darlo pone en riesgo su vida; la ley exonera al médico en este caso.",
      ],
      [
        "Se debe esperar a que el paciente recupere la conciencia para que firme.",
        "En choque hemorrágico, esperar es dejarlo morir.",
      ],
      [
        "Se puede operar sin consentimiento solo si lo autoriza la EPS.",
        "La EPS no da ni sustituye el consentimiento; además, la atención de urgencias no requiere autorización administrativa previa.",
      ],
      [
        "Se procede con la cirugía: en una urgencia, con un paciente incapaz de consentir y sin allegados, el médico queda exonerado de obtener el consentimiento; se documenta en la historia clínica.",
      ],
    ],
    correct: "D",
    explanation:
      "Principio evaluado: excepciones al consentimiento informado.\n\nLa Ley 23 de 1981 (art. 15) exige pedir el consentimiento para tratamientos que puedan afectar al paciente, y su decreto reglamentario (Decreto 3380 de 1981, art. 11) exonera al médico de la advertencia del riesgo cuando el estado mental del paciente y la ausencia de parientes o allegados lo impiden, o cuando existe urgencia o emergencia para llevar a cabo el tratamiento. En estos casos se actúa en beneficio del paciente y se deja constancia detallada en la historia clínica.\n\n**Trampa del examen:** pensar que siempre se necesita una firma antes de actuar.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, en la urgencia vital con un paciente que no puede decidir, la vida va primero. Opera y escribe en la historia por qué lo hiciste sin consentimiento.",
    keyPoints: [
      "Urgencia vital + paciente incapaz de consentir + sin allegados = se actúa sin consentimiento.",
      "Ley 23 de 1981 y Decreto 3380 de 1981.",
      "Dejar constancia en la historia clínica.",
    ],
  }),
  q({
    id: "univalle-norma-04",
    examArea: LEGAL,
    topic: "LEY ESTATUTARIA DE SALUD (LEY 1751 DE 2015)",
    difficulty: "easy",
    tags: ["normatividad", "sistema-de-salud"],
    statement:
      "Una mujer de 40 años llega a urgencias de una clínica de Cali con dolor abdominal intenso y signos de irritación peritoneal. El personal administrativo informa que su EPS no tiene contrato con la clínica y sugiere remitirla sin atenderla hasta obtener una autorización. Según la Ley 1751 de 2015, ¿qué es correcto?",
    options: [
      [
        "La atención de urgencias no requiere autorización administrativa previa y no se le puede negar.",
      ],
      [
        "Debe esperar la autorización de la EPS, porque sin contrato la clínica no está obligada a atenderla.",
        "La Ley 1751 prohíbe negar la atención de urgencias y exigir autorizaciones previas para prestarla.",
      ],
      [
        "Solo se atiende si la paciente paga un depósito previo.",
        "Exigir pagos previos o depósitos para atender una urgencia está prohibido.",
      ],
      [
        "Puede atenderse solo si está afiliada al régimen contributivo.",
        "El derecho a la atención de urgencias no depende del régimen de afiliación.",
      ],
    ],
    correct: "A",
    explanation:
      "Principio evaluado: la salud como derecho fundamental autónomo.\n\nLa Ley 1751 de 2015 (Ley Estatutaria de Salud) consagra la salud como derecho fundamental autónomo e irrenunciable. Su artículo 14 prohíbe la negación de servicios y establece que, cuando se trate de atención de urgencias, no se requiere ningún tipo de autorización administrativa entre el prestador y la EPS. Después de estabilizar a la paciente, la clínica gestiona el cobro y, si es el caso, la remisión.\n\n**Trampa del examen:** priorizar el trámite administrativo sobre la atención.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, la urgencia se atiende primero y se factura después. Ningún papel vale más que un abdomen agudo.",
    keyPoints: [
      "Ley 1751 de 2015: salud = derecho fundamental autónomo.",
      "Urgencias: sin autorización administrativa previa (art. 14).",
      "Prohibida la negación de la atención de urgencias.",
    ],
  }),
  q({
    id: "univalle-norma-05",
    examArea: LEGAL,
    topic: "SGSSS: RÉGIMEN CONTRIBUTIVO Y SUBSIDIADO",
    difficulty: "easy",
    tags: ["normatividad", "sistema-de-salud"],
    statement:
      "Un diseñador gráfico de 29 años trabaja como independiente en Cali, con ingresos mensuales de 3 salarios mínimos. Pregunta en qué régimen del Sistema General de Seguridad Social en Salud debe estar afiliado. Según la Ley 100 de 1993, ¿cuál es la respuesta correcta?",
    options: [
      [
        "Régimen subsidiado, porque no tiene contrato laboral.",
        "El subsidiado es para la población sin capacidad de pago (focalizada con el SISBÉN); tener ingresos suficientes obliga a cotizar.",
      ],
      [
        "Régimen especial, como los docentes del magisterio y las fuerzas militares.",
        "Los regímenes especiales y de excepción son para grupos específicos (Fuerzas Militares, Policía, magisterio, Ecopetrol, universidades públicas), no para independientes.",
      ],
      [
        "No está obligado a afiliarse por ser independiente.",
        "La afiliación al sistema es obligatoria para todos los residentes en Colombia.",
      ],
      [
        "Régimen contributivo, como trabajador independiente con capacidad de pago.",
      ],
    ],
    correct: "D",
    explanation:
      "Principio evaluado: estructura del Sistema General de Seguridad Social en Salud (Ley 100 de 1993).\n\nRégimen contributivo: trabajadores con contrato laboral, servidores públicos, pensionados y trabajadores independientes con capacidad de pago, que cotizan sobre sus ingresos. Régimen subsidiado: población sin capacidad de pago, identificada principalmente con el SISBÉN. Existen además regímenes especiales y de excepción. La afiliación es obligatoria.\n\n**Trampa del examen:** asociar 'independiente' con 'subsidiado'. Lo que define el régimen es la capacidad de pago, no el tipo de contrato.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, ¿puede pagar? contributivo. ¿No puede pagar? subsidiado. Así de simple.",
    keyPoints: [
      "Contributivo: personas con capacidad de pago (incluye independientes).",
      "Subsidiado: población sin capacidad de pago (SISBÉN).",
      "La afiliación al SGSSS es obligatoria.",
    ],
  }),
  q({
    id: "univalle-norma-06",
    examArea: "SALUD PÚBLICA - RUTAS INTEGRALES (RES. 3280)",
    topic: "TAMIZAJE DE CÁNCER DE CUELLO UTERINO",
    difficulty: "medium",
    tags: ["normatividad", "salud-publica", "ginecologia"],
    statement:
      "Una mujer de 34 años, residente en Cali, asiste a la consulta de la Ruta de Promoción y Mantenimiento de la Salud. Nunca se ha hecho un tamizaje para cáncer de cuello uterino. Según la Resolución 3280 de 2018, ¿cuál es la prueba de tamizaje indicada y con qué periodicidad?",
    options: [
      [
        "Citología cervicovaginal anual de por vida.",
        "La citología anual no es el esquema de la Resolución 3280; para su edad la prueba indicada es otra.",
      ],
      [
        "Prueba de ADN del VPH cada 5 años si el resultado es negativo.",
      ],
      [
        "Colposcopia con biopsia como tamizaje inicial.",
        "La colposcopia es un estudio diagnóstico para pruebas de tamizaje positivas, no una prueba de tamizaje.",
      ],
      [
        "No requiere tamizaje hasta los 40 años.",
        "El tamizaje inicia desde los 25 años según la norma.",
      ],
    ],
    correct: "B",
    explanation:
      "Principio evaluado: Ruta de Promoción y Mantenimiento de la Salud (Resolución 3280 de 2018).\n\nTamizaje de cáncer de cuello uterino: de 25 a 29 años, citología en esquema 1-3-3 (si la primera es normal, se repite al año y luego cada 3 años); de 30 a 65 años, prueba de ADN del VPH cada 5 años si es negativa (las positivas se estudian con citología de triage). En zonas rurales dispersas, entre 30 y 50 años, se puede usar la inspección visual con ácido acético y lugol (técnicas VIA-VILI) con tratamiento inmediato.\n\n**Trampa del examen:** responder 'citología anual', que es un esquema antiguo.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, 25 a 29 citología 1-3-3; 30 a 65 ADN-VPH cada 5 años. La 3280 es una de las normas más preguntadas en los exámenes de residencia en Colombia.",
    keyPoints: [
      "25–29 años: citología esquema 1-3-3.",
      "30–65 años: ADN-VPH cada 5 años.",
      "Zonas rurales dispersas: VIA-VILI (30–50 años).",
    ],
  }),
  q({
    id: "univalle-norma-07",
    examArea: LEGAL,
    topic: "INTERRUPCIÓN VOLUNTARIA DEL EMBARAZO (C-055 DE 2022)",
    difficulty: "medium",
    tags: ["normatividad", "ginecologia", "etica"],
    statement:
      "Una mujer de 23 años, con embarazo de 18 semanas confirmado por ecografía, solicita la interrupción voluntaria del embarazo. No refiere violencia sexual, ni malformaciones fetales, ni riesgo para su salud. ¿Qué establece el marco jurídico colombiano vigente?",
    options: [
      [
        "Solo procede si presenta denuncia penal por violencia sexual.",
        "La denuncia solo se relaciona con la causal de violencia sexual, y aun en ese caso no se exige más allá de lo previsto; además, antes de la semana 24 no se requiere ninguna causal.",
      ],
      [
        "Tiene derecho a la interrupción sin necesidad de invocar causal, porque está antes de la semana 24 de gestación.",
      ],
      [
        "No procede porque supera las 12 semanas.",
        "El límite de 12 semanas no es el de la jurisprudencia colombiana vigente.",
      ],
      [
        "Requiere la autorización de un juez de familia.",
        "No se requiere autorización judicial; exigirla es una barrera de acceso.",
      ],
    ],
    correct: "B",
    explanation:
      "Principio evaluado: marco jurídico de la IVE en Colombia.\n\nCon la Sentencia C-055 de 2022, la Corte Constitucional despenalizó la IVE hasta la semana 24 de gestación sin necesidad de causal. A partir de la semana 24, solo procede bajo las tres causales de la Sentencia C-355 de 2006: riesgo para la vida o la salud de la mujer, malformación del feto incompatible con la vida extrauterina, o embarazo producto de violencia sexual (con denuncia), incesto o inseminación no consentida. Los prestadores deben garantizar el acceso sin barreras; la objeción de conciencia es individual y obliga a remitir.\n\n**Trampa del examen:** aplicar un límite de 12 semanas o exigir requisitos que la ley no pide.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, en Colombia: hasta la 24, decisión de la mujer; después de la 24, las tres causales. Tu opinión personal no puede convertirse en barrera.",
    keyPoints: [
      "C-055 de 2022: IVE sin causal hasta la semana 24.",
      "Después de la semana 24: tres causales de la C-355 de 2006.",
      "Sin autorización judicial ni barreras administrativas.",
    ],
  }),
  q({
    id: "univalle-norma-08",
    examArea: LEGAL,
    topic: "MUERTE DIGNA Y EUTANASIA",
    difficulty: "hard",
    tags: ["normatividad", "etica"],
    statement:
      "Un hombre de 54 años con lesión medular completa C4 por trauma hace 3 años, sin enfermedad terminal, plenamente capaz, expresa de forma reiterada, libre e informada su deseo de acceder a la eutanasia por un sufrimiento físico y psíquico intenso que considera incompatible con su idea de vida digna. ¿Qué establece la jurisprudencia constitucional colombiana actual?",
    options: [
      [
        "La eutanasia solo es posible en pacientes con enfermedad terminal y pronóstico de vida menor de 6 meses.",
        "Ese era el requisito antes de 2021; la Corte eliminó la exigencia de enfermedad terminal.",
      ],
      [
        "La eutanasia es un delito en Colombia en cualquier circunstancia.",
        "Desde la Sentencia C-239 de 1997 la Corte reconoció la muerte médicamente asistida en ciertas condiciones; no es delito si se cumplen los requisitos.",
      ],
      [
        "Puede acceder a la eutanasia, porque desde la Sentencia C-233 de 2021 no se exige enfermedad terminal si hay intenso sufrimiento por lesión corporal o enfermedad grave e incurable.",
      ],
      [
        "Solo puede acceder si un familiar lo solicita por él.",
        "El consentimiento debe ser del paciente (o mediante un documento de voluntad anticipada); no lo sustituye la familia si el paciente es capaz.",
      ],
    ],
    correct: "C",
    explanation:
      "Principio evaluado: derecho a morir dignamente en Colombia.\n\nSentencia C-239 de 1997: no hay responsabilidad penal del médico que practica la eutanasia a petición de un enfermo terminal. Sentencia C-233 de 2021: la Corte extendió el derecho a pacientes que padecen intensos sufrimientos físicos o psíquicos provenientes de lesión corporal o enfermedad grave e incurable, aunque no estén en fase terminal. Requisitos: consentimiento libre, informado e inequívoco del paciente, y verificación por un comité científico-interdisciplinario. El médico puede objetar conciencia de forma individual, pero la institución debe garantizar el procedimiento.\n\n**Trampa del examen:** quedarse con el requisito de enfermedad terminal.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, 1997 abrió la puerta para el terminal; 2021 la abrió para el sufrimiento intenso por enfermedad o lesión grave e incurable, sin exigir terminalidad.",
    keyPoints: [
      "C-239 de 1997: eutanasia en enfermo terminal.",
      "C-233 de 2021: no exige enfermedad terminal (lesión o enfermedad grave e incurable).",
      "Consentimiento del paciente + comité científico-interdisciplinario.",
    ],
  }),
  q({
    id: "univalle-norma-09",
    examArea: LEGAL,
    topic: "OBJECIÓN DE CONCIENCIA",
    difficulty: "medium",
    tags: ["normatividad", "etica"],
    statement:
      "La junta directiva de una clínica privada decide que 'como institución' objeta conciencia y no realizará ningún procedimiento de interrupción voluntaria del embarazo. Una paciente que cumple los requisitos legales solicita el procedimiento allí. ¿Qué es correcto según la jurisprudencia colombiana?",
    options: [
      [
        "La objeción de conciencia es individual: las instituciones no pueden objetar y deben garantizar el servicio o la remisión oportuna.",
      ],
      [
        "La clínica puede negarse y no tiene ninguna obligación adicional con la paciente.",
        "Ni siquiera el médico objetor queda libre de obligaciones: debe remitir a quien sí pueda practicar el procedimiento.",
      ],
      [
        "La objeción institucional es válida si está firmada por todos los médicos.",
        "La objeción de conciencia la ejercen personas naturales, de forma individual, escrita y motivada; no es colectiva ni institucional.",
      ],
      [
        "La enfermera y el personal administrativo también pueden objetar conciencia sobre la entrega de información.",
        "La objeción solo cubre la participación directa en el procedimiento, no actividades administrativas ni la información.",
      ],
    ],
    correct: "A",
    explanation:
      "Principio evaluado: objeción de conciencia en salud.\n\nSegún la Corte Constitucional (C-355 de 2006, T-388 de 2009 y jurisprudencia posterior), la objeción de conciencia: es un derecho de las personas naturales, no de las personas jurídicas; es individual, no colectiva; debe presentarse por escrito y motivada; solo la puede ejercer el personal que interviene directamente en el procedimiento; y obliga al objetor a remitir inmediatamente a otro profesional que sí lo realice. Las instituciones deben garantizar la prestación del servicio.\n\n**Trampa del examen:** aceptar la objeción 'institucional'.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, la conciencia la tienen las personas, no los edificios. Puedes objetar tú, pero tienes que remitir.",
    keyPoints: [
      "Objeción de conciencia: individual, escrita y motivada.",
      "No hay objeción institucional ni colectiva.",
      "El objetor debe remitir de inmediato.",
    ],
  }),
  q({
    id: "univalle-norma-10",
    examArea: LEGAL,
    topic: "ATENCIÓN A VÍCTIMAS DE VIOLENCIA SEXUAL",
    difficulty: "medium",
    tags: ["normatividad", "urgencias", "ginecologia"],
    statement:
      "Una joven de 19 años llega a urgencias 20 horas después de haber sido víctima de una agresión sexual por un desconocido. Está asustada y dice que todavía no quiere poner una denuncia. ¿Cuál es la conducta correcta según el protocolo colombiano (Resolución 459 de 2012)?",
    options: [
      [
        "Remitirla a la Fiscalía y atenderla solo cuando presente la denuncia.",
        "La atención en salud no puede condicionarse a la denuncia; es una urgencia médica.",
      ],
      [
        "Atenderla como urgencia médica: profilaxis para VIH e ITS, anticoncepción de emergencia, atención en salud mental y activación de la ruta de protección, sin exigir denuncia previa.",
      ],
      [
        "Darle cita prioritaria por consulta externa para la siguiente semana.",
        "La profilaxis antirretroviral es eficaz si se inicia antes de 72 horas; diferir la atención le quita esa oportunidad.",
      ],
      [
        "Hacer solo el examen forense, porque la atención médica corresponde a Medicina Legal.",
        "El sector salud debe dar atención integral; la recolección de evidencias se hace con consentimiento y no reemplaza la atención médica.",
      ],
    ],
    correct: "B",
    explanation:
      "Principio evaluado: protocolo y modelo de atención integral en salud para víctimas de violencia sexual (Resolución 459 de 2012).\n\nLa violencia sexual se atiende como una urgencia médica, independientemente del tiempo transcurrido y sin exigir denuncia previa. Incluye: profilaxis antirretroviral para VIH (idealmente en las primeras 2 horas y hasta 72 horas), profilaxis de ITS y hepatitis B, anticoncepción de emergencia, toma de muestras con consentimiento informado y cadena de custodia, atención en salud mental, información sobre la IVE y activación de la ruta de protección y justicia. Es un evento de notificación obligatoria al SIVIGILA.\n\n**Trampa del examen:** condicionar la atención a la denuncia o diferirla.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, la víctima no tiene que demostrarle nada a nadie para que la atiendas. Reloj en la mano: 72 horas para la profilaxis.",
    keyPoints: [
      "Violencia sexual = urgencia médica; no se exige denuncia previa.",
      "Profilaxis de VIH antes de 72 h; anticoncepción de emergencia.",
      "Notificación al SIVIGILA y activación de la ruta de protección.",
    ],
  }),
];
