import { buildUdeaQuestion as q } from "./build-question";

/**
 * Examen real de admisión UdeA (material entregado a Método Q por la
 * universidad) · preguntas 1–10. Enunciados y opciones literales; la clave y
 * las explicaciones las elaboró el equipo académico de Método Q.
 */
export const UDEA_EXAMEN_REAL_01_10 = [
  q({
    id: "udea-real-01",
    examArea: "PEDIATRÍA",
    topic: "RINITIS ALÉRGICA",
    difficulty: "easy",
    tags: ["examen-real", "otorrino", "alergia"],
    statement:
      "Niño de 10 años quien desde 1 año antes presenta síntomas nasales como rinorrea, obstrucción, prurito y estornudos en salvas, todos los días de la semana y le interrumpen el sueño. No se concentra en el colegio. Examen físico: hipertrofia bilateral de los cornetes inferiores con obstrucción al flujo de aire. ¿Cuál de los siguientes es el tratamiento para más adecuado?",
    options: [
      ["Esteroide tópico en spray nasal cada 24 horas"],
      [
        "Antihistamínico oral de primera generación en la noche",
        "Los antihistamínicos de primera generación sedan, empeoran el rendimiento escolar y no controlan la obstrucción nasal.",
      ],
      [
        "Antihistamínico oral de segunda generación en la noche",
        "Sirve para estornudos y prurito, pero es menos eficaz que el esteroide intranasal en la rinitis persistente moderada-grave con obstrucción.",
      ],
      [
        "Montelukast oral 5 mg cada 24 horas",
        "El montelukast es inferior al esteroide nasal y tiene alerta por efectos neuropsiquiátricos; no es primera línea.",
      ],
    ],
    correct: "A",
    explanation:
      "Diagnóstico: rinitis alérgica persistente (síntomas >4 días/semana y >4 semanas) moderada-grave (altera el sueño y el rendimiento escolar), según ARIA.\n\nEl tratamiento de elección es el corticoide intranasal (mometasona, fluticasona, budesonida) una vez al día: es el fármaco más eficaz para los cuatro síntomas, incluida la obstrucción. Si no hay control se puede asociar antihistamínico intranasal (azelastina). Los antihistamínicos orales de segunda generación son opción en formas leves o intermitentes.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, cuando la rinitis 'tapa' la nariz y quita el sueño, el rey es el esteroide nasal. El antihistamínico oral no destapa cornetes.",
    keyPoints: [
      "Rinitis persistente moderada-grave → esteroide intranasal diario.",
      "Primera generación de antihistamínicos: sedación y peor desempeño escolar.",
      "Montelukast: segunda línea, con alerta neuropsiquiátrica.",
    ],
  }),
  q({
    id: "udea-real-02",
    examArea: "DERMATOLOGÍA",
    topic: "SÍNDROME DE STEVENS-JOHNSON",
    difficulty: "medium",
    tags: ["examen-real", "farmacodermia"],
    statement:
      "Adolescente de 13 años con migraña a quien el neurólogo le inició tratamiento con carbamazepina. Tres semanas después inició malestar general, fiebre, ardor ocular y mialgias, posteriormente disfagia e inició con placas eritematosas - parduzcas pruriginosas y dolorosas. ¿Cuál de los siguientes es el diagnóstico más probable?",
    options: [
      [
        "Eritema fijo pigmentario",
        "El eritema fijo es una o pocas placas que reaparecen en el mismo sitio, sin pródromo febril ni compromiso mucoso extenso.",
      ],
      [
        "Eritema multiforme mayor",
        "Se asocia sobre todo a herpes simple, con lesiones en diana típicas de predominio acral; no a un fármaco iniciado semanas antes.",
      ],
      [
        "Erupción por medicamentos con eosinofilia y síntomas sistémicos DRESS",
        "El DRESS da exantema morbiliforme, edema facial, adenopatías, eosinofilia y hepatitis, con poco compromiso mucoso.",
      ],
      ["Síndrome de Steven Johnson"],
    ],
    correct: "D",
    explanation:
      "Fármaco de alto riesgo (carbamazepina) + 1–4 semanas de latencia + pródromo (fiebre, malestar) + mucositis (ardor ocular, disfagia) + placas dolorosas oscuras (necrosis epidérmica) = síndrome de Stevens-Johnson / necrólisis epidérmica tóxica.\n\nManejo: suspender el fármaco de inmediato, calcular la superficie desprendida (<10% SSJ; >30% NET), SCORTEN, manejo tipo quemado, valoración oftalmológica temprana. En población asiática el HLA-B*15:02 predispone con carbamazepina.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, lesión que DUELE + mucosas + fármaco nuevo = SSJ. El DRESS pica, hincha la cara y da eosinófilos; el SSJ quema las mucosas.",
    keyPoints: [
      "SSJ/NET: latencia 1–4 semanas, mucosas comprometidas, piel dolorosa.",
      "Fármacos clásicos: carbamazepina, lamotrigina, alopurinol, sulfas, AINE oxicam.",
      "Lo primero: suspender el fármaco sospechoso.",
    ],
  }),
  q({
    id: "udea-real-03",
    examArea: "PEDIATRÍA",
    topic: "ASMA EN ESCOLARES",
    difficulty: "medium",
    tags: ["examen-real", "neumologia", "gina"],
    statement:
      "Niño de 10 años con diagnóstico de asma, actualmente en tratamiento con montelukast 5 mg cada 24 horas y salbutamol para uso durante las crisis. Tuvo la última crisis de asma 6 meses antes, por lo que estuvo en observación en urgencias durante 8 horas y recibió un ciclo corto de esteroides orales. Actualmente tiene entre uno y dos despertares nocturnos semanales debido a la tos. ¿Cuál de las siguientes es la opción terapéutica más adecuada para adicionar al tratamiento?",
    options: [
      ["Beclometasona bronquial 100 mcg cada 12 horas"],
      [
        "Desloratadina 5 mg vía oral cada noche",
        "El antihistamínico no trata la inflamación bronquial ni previene crisis.",
      ],
      [
        "Beclometasona bronquial 250 mcg cada noche",
        "La beclometasona se dosifica cada 12 horas; 250 mcg en una sola dosis nocturna no es un esquema estándar para un escolar.",
      ],
      [
        "Bromuro de tiotropio bronquial 5 mcg cada 24 horas",
        "El tiotropio es complemento en pasos altos (4–5) en mayores de 6 años, no el siguiente paso de quien aún no recibe corticoide inhalado.",
      ],
    ],
    correct: "A",
    explanation:
      "El niño no está controlado: despertares nocturnos por asma y una crisis en el último año. Está con montelukast (alternativa del paso 2), es decir, sin corticoide inhalado (CI), que es la base del control.\n\nGINA (6–11 años): el siguiente paso es iniciar CI a dosis baja-media. Beclometasona 100 mcg cada 12 h (200 mcg/día) es una dosis baja para esta edad y en el esquema correcto (dos veces al día). Siempre revisar técnica inhalatoria con espaciador y adherencia.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, si el asmático se despierta de noche, le falta corticoide inhalado. El montelukast solo no protege de las crisis graves.",
    keyPoints: [
      "Despertares nocturnos o crisis en el año = asma no controlada.",
      "El corticoide inhalado es la base del control en todos los pasos.",
      "Beclometasona: dosis baja 6–11 años ≈ 100–200 mcg/día, cada 12 h.",
    ],
  }),
  q({
    id: "udea-real-04",
    examArea: "URGENCIAS",
    topic: "TOXICIDAD SISTÉMICA POR ANESTÉSICOS LOCALES",
    difficulty: "medium",
    tags: ["examen-real", "reanimacion", "toxicologia"],
    statement:
      "Hombre de 25 años quien sufrió heridas por arma corto contundente en cuero cabelludo y muslo. Se infiltró con lidocaína para proceder a la sutura. Posteriormente se quejó de sabor metálico y de escuchar un \"pitido\", lo cual fue seguido de una convulsión tónico-clónica. Luego de asegurar la vía aérea mediante una intubación, el paciente perdió el pulso y en el monitor se observa actividad eléctrica sin pulso. ¿Cuál de las siguientes es la acción inmediata más indicada?",
    options: [
      [
        "Administrar 1mg de adrenalina intravenoso",
        "La adrenalina se da en AESP, pero nunca antes de iniciar compresiones; además en LAST se prefieren dosis bajas (≤1 mcg/kg).",
      ],
      ["Iniciar compresiones torácicas"],
      [
        "Utilizar emulsión lipídica intravenosa",
        "La emulsión lipídica al 20% es el antídoto y debe darse pronto, pero sin retrasar la RCP: lo inmediato ante un paro es comprimir.",
      ],
      [
        "Verificar el ritmo de paro con el desfibrilador",
        "El ritmo ya se identificó en el monitor (AESP, no desfibrilable); verificarlo de nuevo solo retrasa la RCP.",
      ],
    ],
    correct: "B",
    explanation:
      "Toxicidad sistémica por anestésicos locales (LAST): síntomas neurológicos (sabor metálico, tinnitus, parestesias peribucales) → convulsión → colapso cardiovascular.\n\nAnte paro cardíaco (AESP) la acción inmediata es iniciar RCP de alta calidad. En paralelo: emulsión lipídica 20% (bolo 1,5 mL/kg y luego infusión 0,25 mL/kg/min), adrenalina a dosis bajas, evitar vasopresina, bloqueadores de calcio, betabloqueadores y más anestésico local. Dosis máxima de lidocaína: 4,5 mg/kg sin adrenalina; 7 mg/kg con adrenalina.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, el antídoto importa, pero sin pulso lo primero SIEMPRE es comprimir. Lípidos mientras otro comprime.",
    keyPoints: [
      "LAST: sabor metálico, tinnitus → convulsión → arritmia/paro.",
      "Sin pulso: compresiones inmediatas; emulsión lipídica 20% en paralelo.",
      "Lidocaína máx. 4,5 mg/kg (7 mg/kg con adrenalina).",
    ],
  }),
  q({
    id: "udea-real-05",
    examArea: "URGENCIAS",
    topic: "PARO CARDÍACO POR OPIOIDES",
    difficulty: "medium",
    tags: ["examen-real", "reanimacion", "toxicologia"],
    statement:
      "Hombre de 30 años, traído por el personal de atención prehospitalaria en paro cardiorrespiratorio. Al lado del paciente encontraron unas jeringas y ampollas de meperidina. Durante el traslado vino recibiendo ventilación con máscara facial y bolsa autoinflable, además de compresiones torácicas. ¿Cuál de las siguientes es la conducta inicial en servicio de urgencias?",
    options: [
      [
        "Canalizar una vena periférica calibre 18 y administrar una dosis de naloxona de 0,4 mg",
        "En paro cardíaco la naloxona no tiene beneficio demostrado; su papel es en el paciente con pulso y depresión respiratoria.",
      ],
      ["Continuar con maniobras de reanimación avanzada"],
      [
        "Descartar otras causas de paro cardiorrespiratorio",
        "Buscar las H y T es parte del soporte avanzado, pero no reemplaza ni precede la reanimación en curso.",
      ],
      [
        "Administrar atropina 1 mg y adrenalina 1 mg IV",
        "La atropina salió de los algoritmos de paro (AESP/asistolia) desde 2010.",
      ],
    ],
    correct: "B",
    explanation:
      "AHA 2020 (emergencias asociadas a opioides): en el paciente en paro cardíaco, la prioridad es la reanimación estándar (RCP de alta calidad, ventilación, adrenalina según el ritmo). La naloxona puede considerarse, pero no debe retrasar ni reemplazar las maniobras, porque en paro no hay evidencia de beneficio.\n\nLa naloxona brilla en el paciente CON pulso y depresión respiratoria (0,04–0,4 mg IV titulada, o 2 mg intranasal).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, el muerto por opioides ya no necesita antídoto: necesita RCP. La naloxona es para el que respira mal pero tiene pulso.",
    keyPoints: [
      "Paro por opioides: RCP y soporte avanzado estándar son la prioridad.",
      "Naloxona: útil con pulso y depresión respiratoria.",
      "La atropina no hace parte del algoritmo de paro.",
    ],
  }),
  q({
    id: "udea-real-06",
    examArea: "CIRUGÍA",
    topic: "TRAUMA PENETRANTE DE CUELLO",
    difficulty: "hard",
    tags: ["examen-real", "trauma"],
    statement:
      "Adolescente de 16 años, ingresa por herida en el cuello por proyectil por arma de fuego 30 minutos antes. Examen físico: presión arterial 110/70 mmHg, frecuencia cardiaca 95 lat/min, herida transfixiante en cuello, con orificio de entrada en zona II derecha y salida en zona III izquierda, con enfisema subcutáneo bilateral, hematomas no crecientes en los orificios de entrada y salida; sin sangrado activo, soplo ni frémito; buenos pulsos distales, con leve disfonía y disfagia. No presenta hematemesis, melenas, estridor, heridas soplantes ni salida de saliva por la herida. ¿Cuál de las siguientes es la conducta más adecuada en este paciente?",
    options: [
      [
        "Embolización por radiología intervencionista",
        "No hay lesión vascular demostrada; la embolización es terapéutica y requiere primero un diagnóstico por imagen.",
      ],
      [
        "Exploración cervical",
        "La exploración inmediata se reserva para signos duros (sangrado activo, hematoma expansivo, soplo/frémito, choque, burbujeo por la herida, compromiso de vía aérea).",
      ],
      [
        "Observación",
        "Con trayecto transcervical y signos blandos (enfisema, disfonía, disfagia) hay riesgo de lesión aerodigestiva o vascular oculta.",
      ],
      ["Realización de tomografía contrastada de cuello"],
    ],
    correct: "D",
    explanation:
      "Paciente estable con trauma penetrante transcervical y solo signos BLANDOS: enfisema subcutáneo, hematoma no expansivo, disfonía y disfagia leves. Sin signos duros.\n\nEl enfoque actual 'sin zonas' (no zone approach, WTA/EAST): paciente estable sin signos duros → angiotomografía (TC contrastada) de cuello, que evalúa vasos, vía aérea y trayecto; según hallazgos se completa con endoscopia/esofagograma o se lleva a cirugía. Los signos duros llevan a cirugía inmediata.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, signos duros = quirófano; signos blandos en paciente estable = angioTAC. El trayecto que cruza la línea media obliga a estudiar, no a observar.",
    keyPoints: [
      "Signos duros de lesión cervical → exploración quirúrgica inmediata.",
      "Estable con signos blandos → angiotomografía de cuello.",
      "Enfoque actual 'sin zonas': guía la clínica, no la zona anatómica.",
    ],
  }),
  q({
    id: "udea-real-07",
    examArea: "CIRUGÍA",
    topic: "DOLOR CRÓNICO POSTHERNIORRAFIA",
    difficulty: "medium",
    tags: ["examen-real", "dolor-neuropatico"],
    statement:
      "Paciente de 40 años, consulta por dolor inguinal derecho de dos meses de evolución que se irradia hacia el testículo ipsilateral y el muslo, lo describe \"como una cortada\". Informa que tiene ciertas zonas con anestesia y otras con hiperestesia en esa región. Empeora con la actividad sexual y mejora moderadamente con la flexión de la cadera. Antecedente: dos correcciones de hernia inguinal derecha por vía anterior. ¿Cuál de las siguientes es la primera línea de elección para el tratamiento de este paciente?",
    options: [
      [
        "Etoricoxib",
        "Los AINE sirven para dolor nociceptivo; este dolor es neuropático (cortante, con anestesia e hiperestesia).",
      ],
      ["Gabapentin"],
      [
        "Intervencionismo analgésico",
        "Los bloqueos y la neurectomía se reservan para dolor refractario al manejo farmacológico de primera línea.",
      ],
      [
        "Tramadol",
        "Los opioides no son primera línea en dolor neuropático crónico por su perfil de riesgo.",
      ],
    ],
    correct: "B",
    explanation:
      "Inguinodinia crónica postherniorrafia (dolor >3 meses o persistente tras reparo, aquí con dos cirugías previas) de tipo neuropático: dolor urente/cortante, territorio de los nervios ilioinguinal, iliohipogástrico o genitofemoral, con áreas de anestesia e hiperestesia, que mejora al flexionar la cadera (relaja el nervio).\n\nPrimera línea del dolor neuropático: gabapentinoides (gabapentina, pregabalina), antidepresivos tricíclicos o duales (amitriptilina, duloxetina). Si falla: bloqueos guiados, radiofrecuencia y, finalmente, triple neurectomía.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, 'como una cortada' + zonas dormidas = dolor neuropático. Y el neuropático se trata con neuromoduladores, no con AINE.",
    keyPoints: [
      "Dolor cortante/urente con anestesia e hiperestesia = neuropático.",
      "Primera línea: gabapentinoides, tricíclicos o duloxetina.",
      "Refractario: bloqueo, radiofrecuencia, neurectomía.",
    ],
  }),
  q({
    id: "udea-real-08",
    examArea: "CIRUGÍA",
    topic: "SANGRADO DIGESTIVO BAJO CON SIGNOS DE ALARMA",
    difficulty: "easy",
    tags: ["examen-real", "coloproctologia"],
    statement:
      "Hombre de 38 años, consulta por 6 meses de evolución de sangrado escaso en las deposiciones, asociado a deposiciones diarreicas intermitentes y dolor abdominal tipo cólico que no mejora con las deposiciones ni con los flatos. Ha consultado en varias oportunidades, le ordenaron antiparasitarios, sin mejoría. Pérdida de aproximadamente 3 kg de peso en los últimos 6 meses. No presenta náuseas, emesis, fiebre ni otros síntomas. Examen físico: abdomen sin hallazgos anormales, se evidencian hemorroides externas, sin masas en la ampolla rectal, el guante sale impregnado con materia fecal sin sangre. ¿Cuál de las siguientes es la conducta más adecuada?",
    options: [
      [
        "Ordenar baños de asiento",
        "Atribuir el sangrado a las hemorroides externas es la trampa: las externas casi no sangran y hay signos de alarma.",
      ],
      [
        "Ordenar cambios en la dieta",
        "No hay diagnóstico; con pérdida de peso y sangrado persistente no se puede manejar como intestino irritable.",
      ],
      [
        "Ordenar tratamiento antibiótico",
        "No hay datos de diarrea infecciosa aguda; ya recibió tratamientos empíricos sin respuesta.",
      ],
      ["Solicitar colonoscopia total"],
    ],
    correct: "D",
    explanation:
      "Sangrado rectal persistente + cambio del hábito intestinal + pérdida de peso + falla de tratamientos empíricos = signos de alarma. Obligan a colonoscopia total para descartar enfermedad inflamatoria intestinal (colitis ulcerativa, Crohn) y neoplasia colorrectal (cada vez más frecuente en menores de 50 años).\n\nLas hemorroides externas son un hallazgo incidental: no explican diarrea, dolor cólico ni pérdida de peso.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, nunca culpes a las hemorroides sin mirar todo el colon cuando hay pérdida de peso. Colonoscopia completa, siempre.",
    keyPoints: [
      "Rectorragia + cambio de hábito + pérdida de peso → colonoscopia total.",
      "Hemorroides externas: no sangran de forma crónica ni explican diarrea.",
      "Pensar en EII y cáncer colorrectal de inicio temprano.",
    ],
  }),
  q({
    id: "udea-real-09",
    examArea: "CIRUGÍA",
    topic: "APENDICITIS: MANEJO NO OPERATORIO",
    difficulty: "medium",
    tags: ["examen-real", "abdomen-agudo"],
    statement:
      "Hombre de 68 años quien consultó por de 24 horas de evolución de síntomas compatibles con apendicitis. Antecedentes negativos. Tomografía: cambios compatibles con apendicitis aguda inicial, apendicolito en su luz, estriación de la grasa pericólica y líquido perivascular, sin imágenes compatibles con absceso ni plastrón. Se programa para apendicetomía, pero el paciente solicita tratamiento no operatorio. ¿Cuál de las siguientes es el motivo para no aceptar el tratamiento no operatorio?",
    options: [
      [
        "Edad",
        "La edad avanzada obliga a descartar neoplasia, pero por sí sola no es el criterio que contraindica el manejo antibiótico en este caso.",
      ],
      [
        "Evolución menor de 48 horas",
        "Una evolución corta favorece, no contraindica, el manejo no operatorio.",
      ],
      ["Presencia de apendicolito"],
      [
        "Ser el primer episodio",
        "El manejo antibiótico se plantea justamente en el primer episodio de apendicitis no complicada.",
      ],
    ],
    correct: "C",
    explanation:
      "El manejo no operatorio con antibióticos es una opción en apendicitis aguda NO complicada confirmada por TC (guías WSES 2020, estudio CODA). El apendicolito es el principal predictor de fracaso: en CODA, los pacientes con apendicolito tuvieron más apendicectomías posteriores (~41%) y más complicaciones.\n\nPor eso, con apendicolito se recomienda cirugía.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, la piedrita en el apéndice es la que manda: con apendicolito, el antibiótico fracasa con frecuencia. Quirófano.",
    keyPoints: [
      "Manejo antibiótico: solo apendicitis no complicada por TC.",
      "Apendicolito = predictor de fracaso → apendicectomía.",
      "En mayores, la TC también busca neoplasia apendicular o cecal.",
    ],
  }),
  q({
    id: "udea-real-10",
    examArea: "ORTOPEDIA",
    topic: "SÍNDROME COMPARTIMENTAL",
    difficulty: "easy",
    tags: ["examen-real", "trauma"],
    statement:
      "Hombre de 25 años, llevado a urgencias tras un accidente en motocicleta. Presentó fractura cerrada diafisaria desplazada de cúbito y radio en el brazo derecho. Tras la reducción de la fractura, comienza a quejarse de dolor intenso que no cede con analgésicos. Además, presenta parestesias en los dedos. Examen físico: el estiramiento pasivo de los dedos le incrementa el dolor. Palidez y frialdad en la mano, pulsos radiales presentes. ¿Cuál de las siguientes es la conducta más adecuada?",
    options: [
      [
        "Iniciar tratamiento anticoagulante para prevenir complicaciones trombóticas",
        "No es un problema trombótico: el aumento de presión en el compartimento comprime músculo y nervio.",
      ],
      [
        "Medir la presión intracompartimental de manera seriada, administrar más analgésicos y monitorizar la evolución durante las siguientes 2 horas",
        "El diagnóstico es clínico; esperar 2 horas con este cuadro aumenta la necrosis muscular y el daño nervioso irreversible.",
      ],
      ["Realizar fasciotomía de emergencia"],
      [
        "Realizar una angiografía para evaluar la vascularización de la extremidad",
        "El pulso presente no descarta síndrome compartimental (la ausencia de pulso es tardía); la angiografía retrasa la descompresión.",
      ],
    ],
    correct: "C",
    explanation:
      "Síndrome compartimental agudo del antebrazo: dolor desproporcionado que no cede con analgésicos y que aumenta con el estiramiento pasivo (el signo más temprano y sensible), más parestesias. El pulso presente no lo descarta.\n\nCon un diagnóstico clínico claro se hace fasciotomía de urgencia (idealmente en <6 horas). La medición de presión (>30 mmHg o presión diferencial con la diastólica <30 mmHg) se reserva para pacientes que no pueden expresarse o casos dudosos. Retirar vendajes y yesos y dejar el miembro a la altura del corazón.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, si te duele más al estirar los dedos y la morfina no alcanza, es compartimental hasta probar lo contrario. El pulso es lo último que se pierde: no lo esperes.",
    keyPoints: [
      "Dolor desproporcionado + dolor al estiramiento pasivo = síndrome compartimental.",
      "Diagnóstico clínico → fasciotomía urgente.",
      "Pulso presente NO lo descarta.",
    ],
  }),
];
