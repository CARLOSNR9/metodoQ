import { buildUnivalleQuestion as q } from "./build-question";

/**
 * Diagnóstico Univalle (10 preguntas). Refleja el examen real: medicina general
 * de todas las áreas, con salud pública/normatividad y patología regional del
 * Valle y el Pacífico, más un ítem de dermatología.
 */
export const UNIVALLE_DIAGNOSTICO = [
  q({
    id: "univalle-diag-01",
    examArea: "MEDICINA INTERNA - ENDOCRINOLOGÍA",
    topic: "CETOACIDOSIS DIABÉTICA",
    difficulty: "medium",
    tags: ["diagnostico"],
    statement:
      "Una mujer de 22 años con diabetes tipo 1 llega a urgencias con vómito, dolor abdominal y respiración profunda. Glucemia 480 mg/dL, pH 7,12, HCO₃ 9 mEq/L, cetonas positivas, potasio 4,6 mEq/L, creatinina 1,3 mg/dL. Está taquicárdica y con mucosas secas. ¿Cuál es el primer paso del tratamiento?",
    options: [
      [
        "Bicarbonato de sodio IV para corregir el pH.",
        "El bicarbonato no está indicado con pH mayor de 6,9; no mejora el desenlace y aumenta el riesgo de hipokalemia.",
      ],
      [
        "Insulina IV en bolo antes de cualquier líquido.",
        "Sin reposición de volumen, la insulina puede empeorar la hipotensión al desplazar agua y potasio al interior celular.",
      ],
      [
        "Reanimación con solución salina al 0,9% (1–1,5 L en la primera hora) y verificar el potasio antes de la insulina.",
      ],
      [
        "Restricción de líquidos por riesgo de edema cerebral.",
        "La paciente está deshidratada; la reposición de volumen es el primer paso.",
      ],
    ],
    correct: "C",
    explanation:
      "Enfermedad: Cetoacidosis diabética grave (pH < 7,0–7,24 y HCO₃ < 10).\n\nOrden del tratamiento: 1) líquidos (SSN 0,9%, 15–20 mL/kg en la primera hora); 2) potasio: si K < 3,3 mEq/L, reponer y diferir la insulina; si está entre 3,3 y 5,2, añadir potasio a los líquidos; 3) insulina IV en infusión (0,1 U/kg/h); 4) cuando la glucemia baje a ~200–250 mg/dL, añadir dextrosa y continuar la insulina hasta cerrar la brecha aniónica.\n\n**Trampa del examen:** empezar por la insulina o por el bicarbonato.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, en cetoacidosis el orden es AGUA, POTASIO, INSULINA. El que se salta el potasio, mata al paciente con una arritmia.",
    keyPoints: [
      "CAD: líquidos → potasio → insulina.",
      "K < 3,3: reponer antes de la insulina.",
      "Bicarbonato solo si pH < 6,9.",
    ],
  }),
  q({
    id: "univalle-diag-02",
    examArea: "PEDIATRÍA",
    topic: "BRONQUIOLITIS",
    difficulty: "easy",
    tags: ["diagnostico"],
    statement:
      "Un lactante de 4 meses, previamente sano, presenta rinorrea de 3 días seguida de tos, taquipnea leve (52 rpm), sibilancias y crépitos difusos. Saturación de 94% al aire ambiente, se alimenta bien y no tiene signos de dificultad respiratoria grave. ¿Cuál es el manejo recomendado?",
    options: [
      [
        "Medidas de soporte: lavados nasales, fraccionar la alimentación, signos de alarma y control.",
      ],
      [
        "Salbutamol inhalado cada 4 horas y prednisolona oral.",
        "Los broncodilatadores y los corticoides no mejoran los desenlaces de la bronquiolitis y no se recomiendan de rutina.",
      ],
      [
        "Amoxicilina oral por 7 días.",
        "Es una infección viral (VSR, la más frecuente); los antibióticos no están indicados sin sobreinfección bacteriana.",
      ],
      [
        "Radiografía de tórax y hemograma en todos los casos.",
        "El diagnóstico es clínico; los paraclínicos rutinarios no cambian el manejo en el caso típico.",
      ],
    ],
    correct: "A",
    explanation:
      "Enfermedad: Bronquiolitis aguda leve (primer episodio de sibilancias en menor de 2 años, precedido de cuadro catarral).\n\nEl tratamiento es de soporte: permeabilidad nasal, hidratación y alimentación fraccionada, oxígeno si la saturación es menor de 90–92% y educación sobre signos de alarma (dificultad respiratoria, rechazo de la vía oral, apneas). Factores de riesgo de gravedad: prematuridad, menos de 3 meses, cardiopatía, enfermedad pulmonar crónica e inmunodeficiencia.\n\n**Trampa del examen:** 'si sibila, nebulizar'.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, bronquiolitis = nariz limpia, tetero fraccionado y ojo de mamá. Menos es más.",
    keyPoints: [
      "Bronquiolitis: manejo de soporte.",
      "No salbutamol, corticoides ni antibióticos de rutina.",
      "Oxígeno si saturación < 90–92%.",
    ],
  }),
  q({
    id: "univalle-diag-03",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "PREECLAMPSIA CON CRITERIOS DE SEVERIDAD",
    difficulty: "medium",
    tags: ["diagnostico"],
    statement:
      "Una primigestante de 35 semanas consulta por cefalea intensa y fosfenos. PA 168/112 mmHg confirmada en dos tomas, proteinuria positiva, plaquetas 140.000/µL, transaminasas normales. Feto con monitoría reactiva. ¿Cuál es la medida prioritaria para prevenir convulsiones?",
    options: [
      [
        "Diazepam IV profiláctico.",
        "Las benzodiacepinas no son la profilaxis de elección de la eclampsia.",
      ],
      [
        "Fenitoína IV.",
        "La fenitoína es inferior al sulfato de magnesio para prevenir y tratar la eclampsia.",
      ],
      [
        "Furosemida IV.",
        "Los diuréticos no previenen las convulsiones y pueden empeorar la hipoperfusión placentaria.",
      ],
      [
        "Sulfato de magnesio (impregnación y mantenimiento), junto con antihipertensivo y planear la finalización del embarazo.",
      ],
    ],
    correct: "D",
    explanation:
      "Enfermedad: Preeclampsia con criterios de severidad (PA ≥160/110 y síntomas neurológicos).\n\nManejo: sulfato de magnesio (impregnación de 4–6 g IV y mantenimiento de 1–2 g/h) para prevenir la eclampsia, antihipertensivo para llevar la PA por debajo de 160/110 (labetalol, hidralazina o nifedipino), y finalizar el embarazo una vez estabilizada la madre (en ≥34 semanas). Vigilar toxicidad del magnesio: reflejos, frecuencia respiratoria y diuresis; el antídoto es el gluconato de calcio.\n\n**Trampa del examen:** usar anticonvulsivantes distintos al magnesio.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, en preeclampsia severa: magnesio, bajar la presión y sacar al bebé. Y revisa los reflejos de la mamá cada hora.",
    keyPoints: [
      "Profilaxis de eclampsia: sulfato de magnesio.",
      "Antihipertensivo si PA ≥160/110.",
      "Antídoto del magnesio: gluconato de calcio.",
    ],
  }),
  q({
    id: "univalle-diag-04",
    examArea: "CIRUGÍA GENERAL",
    topic: "COLECISTITIS AGUDA",
    difficulty: "easy",
    tags: ["diagnostico"],
    statement:
      "Una mujer de 45 años consulta por dolor en hipocondrio derecho de 30 horas, fiebre de 38,2 °C y signo de Murphy positivo. Leucocitos 13.500/µL, bilirrubinas y transaminasas normales. La ecografía muestra cálculos, pared vesicular de 5 mm y líquido perivesicular. No tiene disfunción orgánica. ¿Cuál es el manejo más adecuado?",
    options: [
      [
        "Antibiótico y colecistectomía laparoscópica temprana durante la misma hospitalización.",
      ],
      [
        "Antibiótico y colecistectomía programada en 3 meses.",
        "La colecistectomía tardía aumenta las reconsultas y complicaciones; en colecistitis leve o moderada se prefiere la cirugía temprana.",
      ],
      [
        "CPRE urgente.",
        "La CPRE está indicada en coledocolitiasis o colangitis; aquí la vía biliar y las pruebas hepáticas son normales.",
      ],
      [
        "Colecistostomía percutánea.",
        "Se reserva para pacientes graves o de alto riesgo quirúrgico que no toleran la cirugía.",
      ],
    ],
    correct: "A",
    explanation:
      "Enfermedad: Colecistitis aguda litiásica (Tokio grado I-II).\n\nDiagnóstico: signos locales (Murphy, dolor en hipocondrio derecho) + signos sistémicos (fiebre, leucocitosis) + imagen compatible. El tratamiento de elección en pacientes sin contraindicación es la colecistectomía laparoscópica temprana (idealmente en las primeras 72 horas y dentro de la primera semana), con antibiótico. La colecistostomía percutánea es para pacientes graves no aptos para cirugía.\n\n**Trampa del examen:** diferir la cirugía 'hasta que se enfríe'.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, vesícula inflamada en paciente que tolera cirugía = se opera en esa misma hospitalización.",
    keyPoints: [
      "Colecistitis aguda: colecistectomía laparoscópica temprana.",
      "CPRE solo si hay coledocolitiasis o colangitis.",
      "Colecistostomía para pacientes graves de alto riesgo.",
    ],
  }),
  q({
    id: "univalle-diag-05",
    examArea: "URGENCIAS",
    topic: "ANAFILAXIA",
    difficulty: "easy",
    tags: ["diagnostico"],
    statement:
      "Un hombre de 30 años presenta, 10 minutos después de recibir una dosis IM de penicilina, habones generalizados, disnea con sibilancias, edema de labios y PA de 80/50 mmHg. ¿Cuál es el tratamiento de primera línea?",
    options: [
      [
        "Hidrocortisona IV como medida inicial única.",
        "Los corticoides tardan horas en actuar y no tratan la anafilaxia aguda.",
      ],
      [
        "Adrenalina 0,5 mg IM en la cara anterolateral del muslo, repetible cada 5–15 minutos.",
      ],
      [
        "Difenhidramina IV y observación.",
        "Los antihistamínicos alivian síntomas cutáneos, pero no revierten el choque ni el broncoespasmo.",
      ],
      [
        "Adrenalina 1 mg IV en bolo.",
        "La dosis IV en bolo de 1 mg es la del paro cardíaco; en un paciente con pulso puede causar arritmias graves.",
      ],
    ],
    correct: "B",
    explanation:
      "Enfermedad: Anafilaxia con compromiso respiratorio y cardiovascular.\n\nPrimera línea: adrenalina IM 0,01 mg/kg (máximo 0,5 mg en el adulto) en la cara anterolateral del muslo, repetible cada 5–15 minutos. Además: posición en decúbito con piernas elevadas, oxígeno, líquidos IV si hay hipotensión. Antihistamínicos y corticoides son coadyuvantes. Observar al paciente por riesgo de reacción bifásica.\n\n**Trampa del examen:** retrasar la adrenalina por usar primero antihistamínicos o corticoides.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, anafilaxia = adrenalina al muslo. Todo lo demás es acompañamiento.",
    keyPoints: [
      "Anafilaxia: adrenalina IM 0,01 mg/kg (máx. 0,5 mg) en el muslo.",
      "Antihistamínicos y corticoides son coadyuvantes.",
      "Vigilar reacción bifásica.",
    ],
  }),
  q({
    id: "univalle-diag-06",
    examArea: "SALUD PÚBLICA - TROPICAL",
    topic: "DENGUE CON SIGNOS DE ALARMA",
    difficulty: "medium",
    tags: ["diagnostico", "tropical"],
    statement:
      "Una mujer de 26 años de Cali tiene fiebre de 4 días, mialgias y cefalea retroocular. Hoy la fiebre cedió, pero aparece dolor abdominal intenso y continuo, y ha vomitado 4 veces. PA 110/70 mmHg, FC 98 lpm. Hematocrito en aumento con plaquetas de 85.000/µL. ¿Cuál es la conducta correcta?",
    options: [
      [
        "Manejo ambulatorio con acetaminofén y control en 48 horas.",
        "Los signos de alarma obligan a hospitalizar; el periodo de defervescencia es la fase crítica.",
      ],
      [
        "Ibuprofeno para el dolor y transfusión de plaquetas.",
        "Los AINE están contraindicados en dengue y la transfusión de plaquetas no está indicada solo por el recuento.",
      ],
      [
        "Hospitalizar e iniciar cristaloides IV con vigilancia estricta del hematocrito, la diuresis y los signos vitales (grupo B2).",
      ],
      [
        "Iniciar ceftriaxona por sospecha de sepsis abdominal.",
        "El cuadro es típico de dengue con signos de alarma; el antibiótico no está indicado.",
      ],
    ],
    correct: "C",
    explanation:
      "Enfermedad: Dengue con signos de alarma (grupo B2).\n\nSignos de alarma: dolor abdominal intenso y continuo, vómito persistente, acumulación de líquidos, sangrado de mucosas, letargo o irritabilidad, hepatomegalia y aumento del hematocrito con descenso rápido de plaquetas. Aparecen típicamente en la defervescencia (fase crítica). Manejo: hospitalización, cristaloides IV (lactato de Ringer o SSN 0,9%) a 10 mL/kg en la primera hora con reevaluación, control de hematocrito y diuresis. Solo acetaminofén; no AINE ni inyecciones IM.\n\n**Trampa del examen:** tranquilizarse porque la fiebre cedió.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, en el Valle el dengue es endémico: cuando baja la fiebre empieza el peligro. Dolor abdominal + vómito = hospitaliza.",
    keyPoints: [
      "Signos de alarma → hospitalizar (grupo B2) y cristaloides IV.",
      "Fase crítica: defervescencia.",
      "No AINE; solo acetaminofén.",
    ],
  }),
  q({
    id: "univalle-diag-07",
    examArea: "URGENCIAS - TOXICOLOGÍA",
    topic: "ACCIDENTE OFÍDICO BOTRÓPICO",
    difficulty: "medium",
    tags: ["diagnostico", "tropical"],
    statement:
      "Un agricultor de 40 años de zona rural de Buenaventura fue mordido en el pie por una serpiente 'equis' hace 3 horas. Presenta edema que llega a la rodilla, dolor intenso, sangrado por los orificios de la mordedura y gingivorragia. El tiempo de coagulación en tubo seco es prolongado. ¿Cuál es el tratamiento específico?",
    options: [
      [
        "Torniquete, incisión y succión del veneno.",
        "Estas maniobras están contraindicadas: aumentan la necrosis, la infección y el sangrado.",
      ],
      [
        "Suero antiofídico (antiveneno) polivalente IV en dosis según la gravedad, en un centro con capacidad de manejo.",
      ],
      [
        "Plasma fresco congelado y vitamina K como tratamiento único.",
        "No neutralizan el veneno; la coagulopatía se corrige con el antiveneno.",
      ],
      [
        "Corticoide IV y antihistamínico como tratamiento específico.",
        "Pueden usarse como premedicación en casos seleccionados, pero no son el tratamiento del envenenamiento.",
      ],
    ],
    correct: "B",
    explanation:
      "Enfermedad: Envenenamiento botrópico moderado (Bothrops asper, 'equis' o 'mapaná', la causa más frecuente de accidente ofídico en Colombia).\n\nEl veneno es proteolítico, hemorrágico y coagulante: produce edema, dolor, necrosis local y coagulopatía de consumo con sangrados. El tratamiento específico es el suero antiofídico polivalente IV, cuya dosis depende de la gravedad (leve, moderado o grave) y no del peso. Además: retirar anillos, inmovilizar la extremidad, analgesia, profilaxis antitetánica, vigilar síndrome compartimental y falla renal. Es un evento de notificación obligatoria.\n\n**Trampa del examen:** las medidas tradicionales (torniquete, incisión, succión).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, en el Pacífico vas a ver muchas mordeduras de 'equis'. El único tratamiento es el antiveneno; lo demás es folclor que mata.",
    keyPoints: [
      "Bothrops: edema, necrosis y coagulopatía.",
      "Tratamiento: suero antiofídico polivalente según gravedad.",
      "Nunca torniquete, incisión ni succión.",
    ],
  }),
  q({
    id: "univalle-diag-08",
    examArea: "DERMATOLOGÍA",
    topic: "ERISIPELA",
    difficulty: "easy",
    tags: ["diagnostico", "dermatologia"],
    statement:
      "Una mujer de 58 años con obesidad y linfedema crónico presenta desde hace 24 horas fiebre y una placa roja brillante, caliente y dolorosa en la pierna derecha, sobreelevada y con bordes netamente delimitados respecto a la piel sana. Tiene intertrigo en los espacios interdigitales del pie. ¿Cuál es el agente más probable y el tratamiento de elección?",
    options: [
      [
        "Pseudomonas aeruginosa; ciprofloxacina.",
        "Pseudomonas no es una causa habitual de erisipela.",
      ],
      [
        "Staphylococcus aureus resistente a meticilina; vancomicina como primera elección.",
        "El agente típico de la erisipela es el estreptococo; la vancomicina no es la primera elección sin factores de riesgo para SARM.",
      ],
      [
        "Streptococcus pyogenes; penicilina, y tratar el intertrigo como puerta de entrada.",
      ],
      [
        "Herpes simple; aciclovir.",
        "El herpes produce vesículas agrupadas, no una placa eritematosa de borde neto con fiebre.",
      ],
    ],
    correct: "C",
    explanation:
      "Enfermedad: Erisipela (infección de la dermis superficial y los linfáticos).\n\nDato decisivo: placa eritematosa, brillante, sobreelevada y de bordes NETOS (a diferencia de la celulitis, de bordes difusos), con fiebre de inicio brusco.\n\nAgente: Streptococcus pyogenes (estreptococo beta hemolítico del grupo A). Tratamiento: penicilina (oral o parenteral según la gravedad); en alérgicos, clindamicina o un macrólido. Factores de riesgo: linfedema, obesidad, insuficiencia venosa y puertas de entrada como el intertrigo o la tiña pedis, que deben tratarse para evitar recurrencias.\n\n**Trampa del examen:** confundirla con celulitis o tratarla con antibióticos de amplio espectro innecesarios.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, borde que puedes trazar con un marcador = erisipela = estreptococo = penicilina. Y mírale los dedos del pie: ahí está la puerta.",
    keyPoints: [
      "Erisipela: borde neto y sobreelevado; celulitis: borde difuso.",
      "Agente: Streptococcus pyogenes → penicilina.",
      "Tratar la puerta de entrada (intertrigo, tiña pedis).",
    ],
  }),
  q({
    id: "univalle-diag-09",
    examArea: "LEGISLACIÓN Y ÉTICA MÉDICA",
    topic: "AUTONOMÍA: RECHAZO DE TRANSFUSIÓN",
    difficulty: "medium",
    tags: ["diagnostico", "normatividad", "etica"],
    statement:
      "Un hombre de 45 años, testigo de Jehová, plenamente consciente y capaz, con hemorragia digestiva y hemoglobina de 7 g/dL, hemodinámicamente estable, rechaza de forma informada cualquier transfusión de sangre. ¿Cuál es la conducta ética y legal correcta?",
    options: [
      [
        "Transfundir de todos modos, porque el deber del médico es salvar la vida por encima de la voluntad del paciente.",
        "En un adulto capaz, transfundir contra su voluntad expresa vulnera su autonomía y su libertad de cultos.",
      ],
      [
        "Pedir a la familia que firme el consentimiento en su lugar.",
        "La familia no puede sustituir la decisión de un adulto capaz.",
      ],
      [
        "Darle de alta por negarse al tratamiento.",
        "Rechazar una intervención no es rechazar toda la atención; se deben ofrecer alternativas.",
      ],
      [
        "Respetar su decisión, documentarla en el consentimiento o disentimiento informado y ofrecer alternativas terapéuticas (control endoscópico del sangrado, hierro IV, eritropoyetina, entre otras).",
      ],
    ],
    correct: "D",
    explanation:
      "Principio evaluado: autonomía del paciente adulto capaz.\n\nEn Colombia, un adulto capaz puede rechazar un tratamiento, incluso si es necesario para salvar su vida, cuando su decisión es libre e informada (Ley 23 de 1981 y jurisprudencia de la Corte Constitucional sobre autonomía y libertad de cultos). El médico debe informar los riesgos, documentar el disentimiento informado, ofrecer las alternativas disponibles y seguir atendiendo al paciente. La situación es distinta en menores de edad, donde prima el interés superior del niño.\n\n**Trampa del examen:** creer que el médico puede imponer el tratamiento a un adulto capaz.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, adulto capaz e informado decide sobre su cuerpo. Tu trabajo es informar bien, buscar alternativas y no abandonarlo.",
    keyPoints: [
      "Adulto capaz puede rechazar tratamientos (disentimiento informado).",
      "La familia no sustituye la decisión de un adulto capaz.",
      "Ofrecer alternativas y continuar la atención.",
    ],
  }),
  q({
    id: "univalle-diag-10",
    examArea: "PEDIATRÍA - SALUD PÚBLICA",
    topic: "PAI: VACUNAS DEL RECIÉN NACIDO",
    difficulty: "easy",
    tags: ["diagnostico", "salud-publica"],
    statement:
      "Nace en el Hospital Universitario del Valle un recién nacido a término, sano, de 3.200 g, hijo de madre con serología negativa para hepatitis B. Según el esquema del Programa Ampliado de Inmunizaciones (PAI) de Colombia, ¿qué vacunas debe recibir antes del egreso?",
    options: [
      [
        "BCG y hepatitis B.",
      ],
      [
        "Pentavalente y polio.",
        "La pentavalente y la polio se aplican desde los 2 meses de edad.",
      ],
      [
        "Triple viral (sarampión, rubéola, paperas).",
        "La triple viral se aplica al año de edad.",
      ],
      [
        "Ninguna; las vacunas inician a los 2 meses.",
        "En el recién nacido se aplican BCG y hepatitis B.",
      ],
    ],
    correct: "A",
    explanation:
      "Principio evaluado: esquema nacional de vacunación (PAI Colombia).\n\nRecién nacido: BCG (previene las formas graves de tuberculosis, como la meníngea y la miliar) y hepatitis B (idealmente en las primeras 12 horas de vida). A los 2, 4 y 6 meses: pentavalente (o hexavalente), polio, rotavirus (2 y 4 meses) y neumococo. Al año: triple viral, varicela, hepatitis A y refuerzo de neumococo; a los 18 meses, fiebre amarilla y refuerzos.\n\n**Trampa del examen:** pensar que la vacunación empieza a los 2 meses.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, todo bebé sale del hospital con dos vacunas: BCG en el brazo y hepatitis B en el muslo.",
    keyPoints: [
      "Recién nacido: BCG + hepatitis B.",
      "Hepatitis B idealmente en las primeras 12 horas.",
      "Pentavalente y polio desde los 2 meses.",
    ],
  }),
];
