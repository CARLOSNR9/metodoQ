import { buildUdeaQuestion as q } from "./build-question";

/** Examen real de admisión UdeA · preguntas 51–60 (clave Método Q). */
export const UDEA_EXAMEN_REAL_51_60 = [
  q({
    id: "udea-real-51",
    examArea: "MEDICINA DEL DEPORTE",
    topic: "LUXACIÓN ACROMIOCLAVICULAR",
    difficulty: "hard",
    tags: ["examen-real", "ortopedia", "lesiones-deportivas"],
    statement:
      "Hombre de 19 años quien sufrió caída desde una bicicleta, con trauma directo sobre el hombro derecho. Ingresa al servicio de urgencias con dolor, deformidad y escoriación superficial en la parte superior del hombro. Manifiesta dolor en la zona de deformidad. Se ordenan analgésicos. Radiografía anteroposterior verdadera de hombro, lateral de escapula y axial de hombro: se observa pérdida de la relación articular entre la clavícula y acromion, con desplazamiento y se descartan líneas de fractura. ¿Cuál de las siguientes es la conducta más adecuada?",
    options: [
      [
        "Inmovilización con cabestrillo durante 2 semanas e iniciar rehabilitación precoz",
        "Es el manejo de los grados I–II (y de muchos III), pero con deformidad y desplazamiento hay que clasificar primero: los grados IV–VI son quirúrgicos.",
      ],
      ["Inmovilización con cabestrillo y remisión urgente a ortopedia"],
      [
        "Reducción e inmovilización con férula hasta la zona acromioclavicular y remisión a ortopedia",
        "La reducción cerrada de la articulación acromioclavicular no se mantiene con férulas; no es un manejo recomendado.",
      ],
    ],
    correct: "B",
    explanation:
      "Luxación acromioclavicular (caída sobre el vértice del hombro con el brazo en aducción, típica del ciclismo, el rugby y el fútbol). Clasificación de Rockwood:\n• I: esguince AC. • II: ruptura AC, coracoclaviculares (CC) intactos. • III: ruptura AC + CC, desplazamiento 25–100%. • IV: clavícula posterior (trapecio). • V: desplazamiento >100–300%. • VI: clavícula subcoracoidea.\nI–II: cabestrillo y rehabilitación. III: conservador en la mayoría, quirúrgico en deportistas de lanzamiento o trabajadores manuales. IV–VI: cirugía.\n\nCon deformidad clínica y desplazamiento radiológico (≥ grado III), el médico general inmoviliza con cabestrillo para el dolor y remite a ortopedia para clasificar (proyección de Zanca, axial) y decidir.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, hombro con 'escalón' después de una caída de bici: cabestrillo y ortopedia. Rockwood decide quién va a cirugía.\n\n*Clave elaborada por el equipo Método Q (el examen no trae respuestas). En el material original solo se leen tres opciones.*",
    keyPoints: [
      "Rockwood I–II: conservador; III: individualizar; IV–VI: cirugía.",
      "Mecanismo: caída sobre el vértice del hombro.",
      "Deformidad/desplazamiento → cabestrillo y valoración por ortopedia.",
    ],
  }),
  q({
    id: "udea-real-52",
    examArea: "MEDICINA INTERNA",
    topic: "RINOSINUSITIS CRÓNICA",
    difficulty: "medium",
    tags: ["examen-real", "otorrino"],
    statement:
      "Hombre de 23 años. Consulta por 6 meses de evolución de aumento de rinorrea hialina bilateral, ocasionalmente mucopurulenta, asociada a escurrimiento posterior, cefalea frontofacial, obstrucción nasal intermitente e hiposmia. Antecedente: otitis media recurrente que requirió adenoidectomía y tubos de ventilación a los 5 años; rinitis alérgica desde los 8 años, tratada con esteroide nasal, antihistamínicos e inmunoterapia. Presentó gran mejoría de síntomas durante la adolescencia, por lo que suspendió el tratamiento. Tomografía de senos paranasales simple: ocupación de senos maxilares, etmoidales y esfenoidales bilaterales con engrosamiento mucoso de los senos frontal. ¿Cuál de los siguientes es el diagnóstico más probable?",
    options: [
      [
        "Disquinecia ciliar primaria",
        "Daría síntomas desde el periodo neonatal (distrés, rinorrea continua), bronquiectasias y a veces situs inversus; este paciente mejoró en la adolescencia.",
      ],
      [
        "Mucormicosis nasosinusal",
        "Es una infección aguda, agresiva y necrosante en inmunosuprimidos (cetoacidosis diabética, neutropenia).",
      ],
      [
        "Papiloma invertido nasosinusal",
        "Suele ser unilateral, con masa visible y obstrucción unilateral; la ocupación aquí es pansinusal bilateral.",
      ],
      ["Rinosinusitis crónica"],
    ],
    correct: "D",
    explanation:
      "Criterios de rinosinusitis crónica (EPOS 2020): ≥12 semanas con dos o más síntomas, uno de ellos obstrucción/congestión nasal o rinorrea (anterior o posterior), más dolor/presión facial o hiposmia; confirmada por endoscopia o TC (engrosamiento mucoso, ocupación sinusal). El paciente cumple todo y tiene un factor de riesgo: rinitis alérgica no tratada.\n\nTratamiento: lavados nasales con solución salina de alto volumen + corticoide intranasal; si falla, cirugía endoscópica funcional; biológicos (dupilumab) en fenotipo tipo 2 con pólipos refractarios.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, más de 12 semanas, nariz tapada o mocos, más dolor facial u olfato perdido, y la TAC lo confirma: rinosinusitis crónica.",
    keyPoints: [
      "RSC: ≥12 semanas, ≥2 síntomas (uno obstrucción o rinorrea) + TC/endoscopia.",
      "Tratamiento: lavados salinos + corticoide intranasal.",
      "Unilateral o masa → descartar tumor (papiloma invertido).",
    ],
  }),
  q({
    id: "udea-real-53",
    examArea: "PEDIATRÍA",
    topic: "TRASTORNO DEL DESARROLLO DE LA COORDINACIÓN",
    difficulty: "medium",
    tags: ["examen-real", "neurodesarrollo"],
    statement:
      "Niño de 6 años, la madre refiere que tiene problemas para la escritura y se cae o se choca frecuentemente, coge mal el lápiz y se le dificultad la precisión en algunos trazos, no salta el lazo y le da mucha dificultad para amarrarse los zapatos. Tiene buen rendimiento escolar. Antecedentes: crecimiento y desarrollo acorde a su edad, sin antecedentes prenatales anormales. Examen físico: sobrepeso y ligera disminución del tono muscular. ¿Cuál de los siguientes es el diagnóstico más probable?",
    options: [
      [
        "Parálisis cerebral infantil hipotónica leve",
        "La parálisis cerebral se manifiesta desde los primeros meses con retraso de hitos motores; este niño tuvo desarrollo normal.",
      ],
      [
        "Retardo simple del área motora fina",
        "El compromiso no es solo fino: también hay torpeza motora gruesa (caídas, no salta lazo).",
      ],
      [
        "Trastorno del aprendizaje especialmente en escritura",
        "El rendimiento escolar es bueno; la dificultad es motora (grafomotricidad), no de la expresión escrita.",
      ],
      ["Trastorno del desarrollo de la coordinación"],
    ],
    correct: "D",
    explanation:
      "Trastorno del desarrollo de la coordinación (dispraxia, DSM-5): adquisición y ejecución de habilidades motoras coordinadas muy por debajo de lo esperado para la edad (torpeza, caídas, mala escritura, dificultad para atarse los zapatos, saltar lazo o deportes), que interfiere con la vida diaria, inicia en la infancia y no se explica por discapacidad intelectual, visual o enfermedad neurológica (parálisis cerebral, distrofias).\n\nAfecta al 5–6% de los escolares, se asocia a TDAH y a sobrepeso por evitar la actividad física. Tratamiento: terapia ocupacional y física orientada a tareas (CO-OP, NTT) y fomentar la actividad física adaptada.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, niño 'torpe' con inteligencia normal y desarrollo normal = trastorno de la coordinación. La actividad física guiada es parte del tratamiento.",
    keyPoints: [
      "TDC: torpeza motora fina y gruesa con inteligencia normal.",
      "Se asocia a TDAH, sobrepeso y evitación del deporte.",
      "Tratamiento: terapia orientada a tareas + actividad física adaptada.",
    ],
  }),
  q({
    id: "udea-real-54",
    examArea: "PEDIATRÍA",
    topic: "MICRONUTRIENTES EN POLVO",
    difficulty: "easy",
    tags: ["examen-real", "nutricion", "salud-publica"],
    statement:
      "Niña de 3 años. En una consulta de valoración integral, se decide suministrarle micronutrientes en polvo ¿Cuál de las siguientes recomendaciones se le debe dar a la madre con respecto a esos micronutrientes?",
    options: [
      [
        "Agregarlos a alimentos líquidos o bebidas",
        "En líquidos el polvo flota o se adhiere al recipiente, cambia el sabor y el color, y la dosis no se consume completa.",
      ],
      ["Agregarlos a un puré, sopa espesa, papillas o frutas maceradas"],
      [
        "Agregarlos durante la preparación de las comidas",
        "El calor de la cocción altera los micronutrientes y el recubrimiento lipídico del hierro; se agregan al alimento ya servido y tibio.",
      ],
      [
        "Suspenderlos si la niña presenta diarrea",
        "No se suspenden por diarrea leve; solo se ajustan durante el tratamiento de enfermedades específicas (p. ej., malaria) o si recibe otro suplemento con hierro.",
      ],
    ],
    correct: "B",
    explanation:
      "Fortificación casera con micronutrientes en polvo (hierro, zinc, vitamina A, C, ácido fólico) — estrategia de la OMS y de la Ruta de Promoción y Mantenimiento de la Salud (Resolución 3280 de 2018) para niños de 6 a 23 meses y de 24 a 59 meses.\n\nRecomendaciones a la familia: mezclar el sobre con una porción pequeña (2–3 cucharadas) de alimento SEMISÓLIDO (puré, papilla, sopa espesa, fruta macerada), ya servido y tibio, y que el niño se lo coma primero, en los 30 minutos siguientes. No agregarlo a líquidos ni durante la cocción; no compartir el sobre. Las heces pueden oscurecerse (normal).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, el sobrecito va en la papilla ya servida y tibia, nunca en el tetero ni en la olla.",
    keyPoints: [
      "MNP: en alimento semisólido servido y tibio.",
      "No en líquidos ni durante la cocción.",
      "Res. 3280/2018: fortificación casera en primera infancia.",
    ],
  }),
  q({
    id: "udea-real-55",
    examArea: "PEDIATRÍA",
    topic: "DENGUE SIN SIGNOS DE ALARMA",
    difficulty: "hard",
    tags: ["examen-real", "infectologia", "tropical", "salud-publica"],
    statement:
      "Niño de 3 años, residente en Medellín. Consultó en un primer nivel de atención por cuatro días de evolución de fiebre, malestar general y exantema macular eritematoso. Tuvo dos episodios de vómito durante los dos primeros días de la fiebre y dolor abdominal intermitente. Está recibiendo vía oral. Antecedentes negativos. Examen físico: sin alteración del triángulo de evaluación pediátrica, temperatura 38.7°C, frecuencia cardiaca 146 lat/min. Resto sin hallazgos anormales. Laboratorio: Leucocitos 3200/mm3, de predominio linfocitario, hemoglobina 12.5 g/dL, hematocrito 38% y plaquetas 109000 /mm3, dengue antígeno NS1 positivo, IgM e IgG para dengue negativos. Además de las medidas para prevenir transmisión por vectores ¿Cuál de las siguientes es la conducta para seguir con este paciente según los criterios de OPS/OMS y el Ministerio de Salud?",
    options: [
      ["Dar alta con recomendaciones y signos de peligro, reposo en cama, abundantes líquidos orales, acetaminofén, realizar control de hemograma en 24-48 horas con control médico"],
      [
        "Hospitalizar y remitir a segundo nivel, suministrar líquidos endovenosos a 3 a 5 mL/Kg/hora y acetaminofén, realizar hemograma cada 6 horas y medir función renal y hepática",
        "Corresponde a otro escenario: el niño no tiene signos de alarma ni condición asociada que obligue a hospitalizar.",
      ],
      [
        "Hospitalizar y remitir a tercer nivel, suministrar líquidos endovenosos inicialmente a 10 mL/Kg/hora, realizar hemograma y medir función renal y hepática",
        "Los 10 mL/kg/h son para dengue CON signos de alarma (grupo B2); este niño no los tiene.",
      ],
      [
        "Hospitalizar, suministrar abundantes líquidos orales, cristaloides endovenosos a 2 mL/Kg/hora y acetaminofén, realizar hemograma seriado y medir función renal y hepática",
        "Es el manejo del grupo B1 (sin signos de alarma pero con condición médica o riesgo social), que este paciente no tiene.",
      ],
    ],
    correct: "A",
    explanation:
      "Dengue (NS1 positivo, día 4) sin signos de alarma: los 2 vómitos de los primeros días no son 'vómito persistente' (≥3 en 1 hora o ≥4 en 6 horas), el dolor abdominal es intermitente (el signo de alarma es intenso y continuo), tolera la vía oral, sin sangrado, letargia, hepatomegalia >2 cm, acumulación de líquidos ni aumento del hematocrito con caída rápida de plaquetas. La taquicardia se explica por la fiebre.\n\nSin condiciones asociadas (menor de 1 año, embarazo, obesidad, comorbilidades) ni riesgo social → GRUPO A: manejo ambulatorio con reposo, líquidos orales abundantes, acetaminofén (NO AINE ni ASA), educación en signos de alarma y control clínico y de hemograma diario o cada 24–48 horas, sobre todo durante la fase crítica (días 3–7).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, sin signos de alarma y sin condición de riesgo = casa con líquidos, acetaminofén y control diario. Lo que define el grupo son los signos de alarma, no las plaquetas.",
    keyPoints: [
      "Grupo A: sin signos de alarma, tolera vía oral, sin condición de riesgo → ambulatorio.",
      "B1: condición asociada/riesgo social; B2: signos de alarma (10 mL/kg/h).",
      "Nunca AINE ni ASA en dengue.",
    ],
  }),
  q({
    id: "udea-real-56",
    examArea: "PEDIATRÍA",
    topic: "MALARIA POR P. VIVAX NO COMPLICADA",
    difficulty: "easy",
    tags: ["examen-real", "infectologia", "tropical"],
    statement:
      "Niña de 6 años, procedente del Chocó, consulta por una semana de fiebre hasta 39.5ºC, malestar general, mialgias, diaforesis nocturna y tres episodios eméticos. Examen físico: frecuencia cardíaca 118 lat/min, frecuencia respiratoria 23/min, presión arterial 102/50 mmHg, saturación de oxígeno 97 % al ambiente, temperatura 39.7°C. Glasgow 15/15, no está deshidratada. No se encuentran signos de alarma. Laboratorio: leucocitos 14600/mm³, neutrófilos 65 %, linfocitos 26 %, hemoglobina 11 g/dL, hematocrito 33 %, plaquetas 250000, Proteína C reactiva 3.2 mg/dL, VSG 35 mm/h. Gota gruesa: 1500 formas de Plasmodium vivax. ¿Cuál de los siguientes es el tratamiento de elección?",
    options: [
      [
        "Arteméter lumefantrina por tres días más una dosis única de primaquina",
        "Es el esquema para P. falciparum no complicada (la dosis única de primaquina es gametocida); en vivax la primaquina va 14 días.",
      ],
      [
        "Artesunato endovenoso por 24 horas más cloroquina por tres días",
        "El artesunato IV es para malaria complicada; esta niña no tiene signos de gravedad.",
      ],
      [
        "Artesunato por 24 horas y posteriormente artemeter lumefantrina por tres días",
        "Es el esquema de la malaria grave por falciparum.",
      ],
      ["Cloroquina por tres días más primaquina por catorce días"],
    ],
    correct: "D",
    explanation:
      "Malaria por P. vivax no complicada (sin signos de peligro ni de malaria complicada; parasitemia baja). Guía del Ministerio de Salud de Colombia:\n• Cloroquina 3 días (10 mg/kg el día 1 y 7,5 mg/kg los días 2 y 3): cura clínica (esquizonticida sanguíneo).\n• Primaquina 0,25 mg/kg/día por 14 días: cura radical (elimina hipnozoítos hepáticos y evita recaídas).\nLa primaquina está contraindicada en embarazadas, menores de 6 meses y en déficit de G6PD.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, vivax = cloroquina 3 días + primaquina 14 días. Falciparum no complicada = arteméter-lumefantrina + primaquina dosis única.",
    keyPoints: [
      "P. vivax: cloroquina 3 días + primaquina 14 días.",
      "P. falciparum no complicada: arteméter-lumefantrina + primaquina dosis única.",
      "Malaria complicada: artesunato IV.",
    ],
  }),
  q({
    id: "udea-real-57",
    examArea: "PEDIATRÍA",
    topic: "VIH EN EL LACTANTE EXPUESTO",
    difficulty: "medium",
    tags: ["examen-real", "infectologia"],
    statement:
      "Lactante de 6 meses, primogénita de madre adolescente sin pareja estable, sin controles prenatales y con antecedente de parto en casa. En la consulta de valoración integral le realizaron una prueba de ELISA para virus de inmunodeficiencia humana (VIH) con un resultado positivo. ¿Cuál de las siguientes es la conducta más adecuada?",
    options: [
      [
        "Considerar un diagnóstico confirmado",
        "En menores de 18 meses un anticuerpo positivo puede ser materno (transplacentario); solo confirma exposición.",
      ],
      [
        "Ordenar inmediatamente Western blot confirmatorio",
        "El Western blot también detecta anticuerpos, así que tiene el mismo problema de los anticuerpos maternos.",
      ],
      ["Ordenar una carga viral para el VIH"],
      [
        "Repetir la prueba de anticuerpos por otra técnica diferente a ELISA",
        "Cualquier prueba de anticuerpos puede ser positiva por anticuerpos maternos hasta los 18 meses.",
      ],
    ],
    correct: "C",
    explanation:
      "Los anticuerpos IgG maternos atraviesan la placenta y pueden persistir hasta los 18 meses. Por eso, en menores de 18 meses el diagnóstico de VIH se hace con pruebas virológicas: carga viral (ARN) o PCR de ADN proviral.\n\nGuía colombiana: dos cargas virales detectables en muestras diferentes confirman la infección; si la primera es positiva se repite de inmediato. Mientras tanto: inicio de TAR según resultado, profilaxis con TMP-SMX, suspender lactancia materna y estudiar a la madre.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, en menores de 18 meses los anticuerpos pueden ser de la mamá: lo que diagnostica es el virus (carga viral), no los anticuerpos.",
    keyPoints: [
      "<18 meses: anticuerpos positivos = exposición, no infección.",
      "Diagnóstico con carga viral/PCR (dos positivas confirman).",
      ">18 meses: algoritmo de anticuerpos como en adultos.",
    ],
  }),
  q({
    id: "udea-real-58",
    examArea: "PEDIATRÍA",
    topic: "TAMIZAJE DE CARDIOPATÍA CONGÉNITA CRÍTICA",
    difficulty: "hard",
    tags: ["examen-real", "neonatologia", "normatividad"],
    statement:
      "Recién nacido de 24 horas. Fruto de la segunda gestación de 37 semanas, sin complicaciones. Tamizaje de cardiopatía neonatal congénita crítica del recién nacido de manera adecuada y con el pulso-oxímetro correcto: saturación preductal de 94 % y posductal de 90 %; una hora después se repite y se obtiene saturación preductal de 92 % y posductal de 97 %. De acuerdo con lo establecido en la resolución número 207 de 2024 ¿Cuál de las siguientes es la conducta correcta?",
    options: [
      ["Hospitalizar e iniciar proceso de remisión urgente para la realización de un ecocardiograma y valoración por cardiología pediátrica"],
      [
        "Realizar electrocardiograma y radiografía de tórax previa a la remisión a cardiología pediátrica y la realización de ecocardiograma",
        "El ECG y la radiografía no descartan una cardiopatía crítica y retrasan el ecocardiograma.",
      ],
      [
        "Repetir nuevamente el tamizaje en 1 hora",
        "Ya se repitió una vez y sigue alterado; el algoritmo vigente considera positivo un segundo resultado anormal.",
      ],
      [
        "Solicitar un electrocardiograma y una radiografía de tórax y según el resultado definir remisión a cardiología pediátrica",
        "Condicionar la remisión a estudios que no descartan la cardiopatía es inseguro.",
      ],
    ],
    correct: "A",
    explanation:
      "Tamizaje de cardiopatía congénita crítica con oximetría pre (mano derecha) y posductal (cualquier pie), después de 24 horas (Resolución 207 de 2024, que actualiza los tamizajes neonatales en Colombia, en línea con el algoritmo AAP 2020):\n• NEGATIVO: ≥95% en ambas extremidades con diferencia ≤3%.\n• POSITIVO: <90% en cualquier extremidad.\n• REPETIR (una sola vez, en 1 hora): 90–94% en ambas o diferencia >3%.\nSi la repetición vuelve a no cumplir el criterio de normalidad → POSITIVO.\n\nAquí la primera medición (94/90, diferencia 4%) obliga a repetir, y la segunda (92/97: preductal <95% y diferencia 5%) sigue anormal → positivo: hospitalizar, ecocardiograma y valoración por cardiología pediátrica, sin darlo de alta.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, <90 positivo de una; 90–94 o diferencia >3% se repite una sola vez; si sigue mal, ecocardiograma.",
    keyPoints: [
      "Negativo: ≥95% en ambas y diferencia ≤3%.",
      "Positivo: <90%, o dos mediciones anormales.",
      "Positivo → ecocardiograma y cardiología pediátrica antes del alta.",
    ],
  }),
  q({
    id: "udea-real-59",
    examArea: "PEDIATRÍA",
    topic: "TOS FERINA EN EL LACTANTE",
    difficulty: "easy",
    tags: ["examen-real", "infectologia", "salud-publica"],
    statement:
      "Lactante de 3 meses, llevada a consulta porque 8 días antes inició obstrucción nasal, rinorrea hialina y posteriormente tos húmeda esporádica. En las últimas 24 horas presenta episodios prolongados de tos, con vómito posterior a la tos, con un episodio que se acompañó de cianosis central y estridor inspiratorio. Antecedentes: negativos. Vacunas: las de recién nacido y de los 2 meses. Examen físico: buenas condiciones generales, frecuencia respiratoria 40/ min, frecuencia cardiaca 126 lat/min, saturación 96 % ambiente. Se ve de buen color, sin retracciones subcostales y la auscultación cardiopulmonar es normal. Laboratorio: hemograma sin anemia, leucocitos 18000/mm³, neutrófilos 15 %, linfocitos 80 %, monocitos 5%. ¿Cuál de los siguientes es el tratamiento más recomendado?",
    options: [
      [
        "Amoxicilina 90 mg/kg día por 7 días",
        "La amoxicilina no es activa contra Bordetella pertussis.",
      ],
      ["Azitromicina 10 mg/kg día por 5 días"],
      [
        "Trimetoprim-sulfametoxazol 8 mg/kg día por 10 días",
        "Es la alternativa si hay alergia o intolerancia a macrólidos, y solo en mayores de 2 meses; no es la primera opción.",
      ],
    ],
    correct: "B",
    explanation:
      "Tos ferina: pródromo catarral de 1–2 semanas seguido de tos paroxística emetizante, con cianosis y 'gallo' inspiratorio, y leucocitosis con linfocitosis marcada. El lactante con un esquema incompleto (solo una dosis de pentavalente) es el de mayor riesgo de complicaciones (apnea, hipertensión pulmonar, muerte).\n\nTratamiento de elección: azitromicina 10 mg/kg/día por 5 días (en <6 meses; en mayores 10 mg/kg el día 1 y 5 mg/kg los días 2–5). Es el macrólido preferido en <1 mes (eritromicina se asocia a estenosis hipertrófica del píloro). Profilaxis a contactos, notificación obligatoria al SIVIGILA. Los menores de 3–4 meses con apneas o cianosis se hospitalizan.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, tos en accesos + vómito + linfocitosis = tos ferina. Azitromicina 5 días y notifica.",
    keyPoints: [
      "Tos ferina: paroxismos, emesis postusiva, gallo, linfocitosis.",
      "Azitromicina 5 días; TMP-SMX si alergia (>2 meses).",
      "Notificación obligatoria y profilaxis de contactos.",
    ],
  }),
  q({
    id: "udea-real-60",
    examArea: "PEDIATRÍA",
    topic: "DESNUTRICIÓN AGUDA (RESOLUCIÓN 2350 DE 2020)",
    difficulty: "medium",
    tags: ["examen-real", "nutricion", "normatividad"],
    statement:
      "Lactante de 12 meses. Evaluado en una brigada extramural en una vereda. La madre refiere que ha estado bien de salud. No tiene antecedentes patológicos de importancia, nunca ha sido llevado al médico. Las vacunas están al día con esquema de vacunación para su edad. Examen físico: peso 7,8 kg, no hay infantómetro adecuado para evaluarlo, perímetro del brazo de 11,4 cm, sin otras alteraciones. ¿Cuál de las siguientes es la clasificación nutricional de este niño?",
    options: [
      ["Desnutrición aguda grave"],
      [
        "Desnutrición aguda moderada",
        "La moderada corresponde a un perímetro braquial entre 11,5 y 12,5 cm; 11,4 cm ya es grave.",
      ],
      [
        "Riesgo de desnutrición aguda",
        "El riesgo se clasifica con indicadores entre −1 y −2 DE; un perímetro braquial <11,5 cm es desnutrición grave.",
      ],
    ],
    correct: "A",
    explanation:
      "Resolución 2350 de 2020 (lineamiento de manejo integrado de la desnutrición aguda en menores de 5 años, Colombia): en niños de 6 a 59 meses, el perímetro braquial (PB) clasifica por sí solo, incluso si no se puede medir la talla:\n• PB <11,5 cm → desnutrición aguda GRAVE.\n• PB 11,5 a <12,5 cm → desnutrición aguda moderada.\nTambién: peso para la talla <−3 DE = grave; −2 a −3 DE = moderada; edema bilateral = grave.\n\nConducta: valorar complicaciones y prueba de apetito; si no hay complicaciones y pasa la prueba, manejo ambulatorio con fórmula terapéutica lista para consumir (FTLC), y notificación al SIVIGILA (evento 113).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, cinta braquial: rojo <11,5 cm = grave; amarillo 11,5–12,5 = moderada. No necesitas infantómetro para clasificarlo.",
    keyPoints: [
      "PB <11,5 cm (6–59 meses) = desnutrición aguda grave.",
      "PB 11,5–12,5 cm = moderada.",
      "Res. 2350/2020: prueba de apetito, FTLC y notificación.",
    ],
  }),
];
