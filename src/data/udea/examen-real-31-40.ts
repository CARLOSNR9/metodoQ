import { buildUdeaQuestion as q } from "./build-question";

/** Examen real de admisión UdeA · preguntas 31–40 (clave Método Q). */
export const UDEA_EXAMEN_REAL_31_40 = [
  q({
    id: "udea-real-31",
    examArea: "MEDICINA INTERNA",
    topic: "INSUFICIENCIA CARDÍACA CON FEVI REDUCIDA",
    difficulty: "hard",
    tags: ["examen-real", "cardiologia"],
    statement:
      "Hombre de 61 años. Consulta por disnea y bendopnea de varios meses de evolución que no han empeorado recientemente. Toma enalapril, espironolactona, empagliflozina 25 mg, metoprolol tartrato y furosemida intermitente a necesidad. Antecedente: infarto del miocardio 3 años antes. Examen físico: frecuencia cardiaca 109/min, pulso 89/min, hepatomegalia, edema bilateral con fóvea en extremidades inferiores. Laboratorio: potasio 3,3 mmol/L, creatinina 0,7 mg/dL, BNP elevado, Hb glicada 5 %. EKG: RR variable, QRS 100 mseg. Ecocardiograma: FEVI 35%. De acuerdo con las guías AHA y ESC ¿Cuál de las siguientes es la modificación a la terapia médica recomendada para disminuir la probabilidad de presentar eventos cardiovasculares en este paciente?",
    options: [
      [
        "Adicionar digoxina oral, cambiar a metoprolol a bisoprolol y suspender espironolactona",
        "La digoxina no reduce mortalidad y suspender la espironolactona quita uno de los cuatro pilares (el potasio bajo, de hecho, favorece mantenerla).",
      ],
      [
        "Aumentar furosemida, continuar metoprolol tartrato y enalapril",
        "El diurético alivia la congestión pero no reduce eventos; el metoprolol tartrato no es un betabloqueador con evidencia en IC.",
      ],
      ["Cambiar a metoprolol succinato, cambiar enalapril por sacubitril valsartan y disminuir empagliflozina a 10 mg"],
      [
        "Cambiar a nevibolol, cambiar IECA por ARA2 y suspender empagliflozina y remitir para terapia de resincronización",
        "El ARA2 solo se usa si no se tolera IECA/ARNI; suspender el iSGLT2 quita un pilar, y con QRS de 100 ms no hay indicación de resincronización.",
      ],
    ],
    correct: "C",
    explanation:
      "Insuficiencia cardíaca con FEVI reducida (35%), sintomática (NYHA II–III), con probable fibrilación auricular (RR variable, déficit de pulso). Los cuatro pilares que reducen mortalidad y hospitalización:\n1. ARNI (sacubitril-valsartán): superior al IECA (PARADIGM-HF) → reemplazar enalapril (lavado de 36 h).\n2. Betabloqueador con evidencia: metoprolol SUCCINATO, bisoprolol o carvedilol (el tartrato no la tiene).\n3. ARM: espironolactona (mantener; además corrige la hipocalemia).\n4. iSGLT2: empagliflozina 10 mg es la dosis para IC; 25 mg es la dosis glucémica y este paciente no es diabético (HbA1c 5%).\nTerapia de resincronización: QRS ≥130–150 ms con BRIHH.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, los cuatro fantásticos: ARNI, betabloqueador correcto, espironolactona y gliflozina 10 mg.",
    keyPoints: [
      "4 pilares en ICFEr: ARNI/IECA, BB con evidencia, ARM, iSGLT2.",
      "BB con evidencia: metoprolol succinato, bisoprolol, carvedilol, nebivolol (>70 años).",
      "Empagliflozina/dapagliflozina 10 mg en IC.",
    ],
  }),
  q({
    id: "udea-real-32",
    examArea: "MEDICINA INTERNA",
    topic: "HIPERCOLESTEROLEMIA FAMILIAR E INTOLERANCIA A ESTATINAS",
    difficulty: "hard",
    tags: ["examen-real", "cardiologia", "lipidos"],
    statement:
      "Mujer de 55 años. Asiste a cita de control cardiovascular. Antecedente: obesidad y dislipidemia a temprana edad, en tratamiento con ezetimibe 25 mg día. Ha tomado atorvastatina y rosuvastatina que generaron intensas mialgias. Puntuación de la Red Holandesa de Clínicas de Lípidos (Score Holandés) con alta probabilidad de hipercolesterolemia familiar. Examen físico: sin xantomas o xantelasmas. Laboratorio colesterol total 250 mg/dL, triglicéridos 100 mg/dL, HDL 30 mg/dL, creatinfosfoquinasa 566 UI/L, ALT 76 UI/L. ¿Cuál de los siguientes es el esquema de tratamiento recomendado para esta paciente?",
    options: [
      ["Alirocumab"],
      [
        "Inclisiran y ácido bempedoico",
        "Son opciones de segunda línea con menos evidencia en desenlaces duros que los anticuerpos anti-PCSK9 en hipercolesterolemia familiar.",
      ],
      [
        "Orlistat y aumentar dosis de ezetimibe",
        "La dosis de ezetimibe es 10 mg/día (no se aumenta) y el orlistat no trata la hipercolesterolemia familiar.",
      ],
      [
        "Simvastatina",
        "Ya presentó intolerancia muscular a dos estatinas, con CK elevada; reintentar otra no es el esquema recomendado.",
      ],
    ],
    correct: "A",
    explanation:
      "Hipercolesterolemia familiar probable (Dutch Lipid Clinic Network) con intolerancia a estatinas (mialgias con dos estatinas, CK elevada). LDL calculado (Friedewald): 250 − 30 − 100/5 = 200 mg/dL, muy por encima de la meta (<100, o <70/<55 según el riesgo), pese a ezetimibe.\n\nCuando no se pueden usar estatinas y el LDL sigue alto con ezetimibe, el paso recomendado son los anticuerpos monoclonales anti-PCSK9 (alirocumab o evolocumab), que bajan el LDL ~50–60% y reducen eventos (ODYSSEY OUTCOMES, FOURIER).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, HF que no tolera estatinas y sigue con LDL de 200: anti-PCSK9. Y recuerda, ezetimibe es 10 mg, no se sube.",
    keyPoints: [
      "Friedewald: LDL = CT − HDL − TG/5.",
      "Intolerancia a estatinas + LDL alto con ezetimibe → anti-PCSK9.",
      "Dutch Lipid Clinic Network: score para HF.",
    ],
  }),
  q({
    id: "udea-real-33",
    examArea: "CIRUGÍA",
    topic: "ENFERMEDAD ARTERIAL PERIFÉRICA",
    difficulty: "medium",
    tags: ["examen-real", "vascular"],
    statement:
      "Mujer de 77 años con dolor en las pantorrillas al caminar que mejora con el reposo. Antecedente: 4 hijos, dislipidemia e infarto del miocardio 10 años antes. Examen físico: dilatación varicosa tortuosa en cara interna de ambas piernas. Edema bilateral y pigmentación cutánea en tercio distal de las piernas, pulsos tibiales posteriores y pedios disminuidos. ¿Cuál de las siguientes es la conducta más adecuada?",
    options: [
      [
        "Iniciar daflón oral y escleroterapia venosa",
        "Trata la insuficiencia venosa, pero la claudicación con pulsos disminuidos es arterial y debe estudiarse primero.",
      ],
      [
        "Iniciar medias de gradiente de presión",
        "La compresión está contraindicada (o debe ajustarse) en enfermedad arterial significativa: primero hay que medir la perfusión.",
      ],
      ["Realizar doppler arterial miembros inferiores"],
      [
        "Realizar pletismografía miembros inferiores",
        "Aporta información venosa; no es el estudio inicial de la claudicación arterial.",
      ],
    ],
    correct: "C",
    explanation:
      "La paciente tiene dos enfermedades: insuficiencia venosa crónica (várices, edema, pigmentación) y enfermedad arterial periférica (claudicación intermitente que cede con el reposo + pulsos distales disminuidos + aterosclerosis conocida).\n\nLa claudicación con pulsos disminuidos obliga a estudiar la circulación arterial: índice tobillo-brazo (ITB <0,9) y ecografía Doppler arterial. Esto además es imprescindible antes de prescribir compresión (contraindicada si el ITB <0,5–0,6). Tratamiento de la EAP: ejercicio supervisado, estatina, antiagregante, dejar de fumar, cilostazol.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, si le duele al caminar y se le alivia al parar, es arterial aunque tenga várices. Mide el ITB/Doppler antes de ponerle medias.",
    keyPoints: [
      "Claudicación intermitente + pulsos disminuidos = EAP.",
      "Estudio: ITB y Doppler arterial.",
      "Medias de compresión: contraindicadas si hay isquemia significativa.",
    ],
  }),
  q({
    id: "udea-real-34",
    examArea: "MEDICINA INTERNA",
    topic: "DIAGNÓSTICO DE FIBRILACIÓN AURICULAR",
    difficulty: "easy",
    tags: ["examen-real", "cardiologia", "arritmias"],
    statement:
      "Hombre de 68 años, consulta por episodios recurrentes de palpitaciones rápidas y cansancio generalizado durante las últimas semanas. Usa un smartwatch con capacidad de monitoreo del ritmo cardíaco. Durante una caminata recibió una alerta de ritmo cardíaco irregular, con el siguiente reporte: frecuencia cardiaca promedio: 125 lat/min, duración del episodio: 3 minutos, variabilidad del ritmo cardíaco: alta irregularidad. Antecedentes: hipertensión arterial y diabetes mellitus tipo 2, controladas. No refiere antecedentes de otras enfermedades cardiovasculares ni eventos cerebrovasculares. ¿Cuál de las siguientes es la conducta inicial más adecuada para confirmar el diagnóstico?",
    options: [
      [
        "Aceptar el diagnóstico de fibrilación auricular sugerido por el smartwatch",
        "La alerta por fotopletismografía es solo un tamizaje; el diagnóstico exige un registro electrocardiográfico.",
      ],
      [
        "Indicar un ecocardiograma transtorácico",
        "El ecocardiograma se pide después de confirmar la FA, para evaluar estructura y función; no la diagnostica.",
      ],
      ["Realizar un electrocardiograma durante un episodio sospechoso"],
      [
        "Solicitar una prueba de esfuerzo con ejercicio",
        "No es el método para documentar una arritmia paroxística.",
      ],
    ],
    correct: "C",
    explanation:
      "ESC 2020/2024: el diagnóstico de fibrilación auricular requiere documentación electrocardiográfica — ECG de 12 derivaciones o trazado de una derivación ≥30 segundos — sin ondas P discernibles y con RR irregular. Las alertas de relojes por fotopletismografía son tamizaje; un ECG de una derivación generado por el propio dispositivo puede servir si es interpretado por un médico.\n\nPara episodios paroxísticos: ECG durante los síntomas, Holter 24–48 h o monitor de eventos. Luego: CHA₂DS₂-VASc (este paciente: HTA 1 + DM 1 + edad 65–74 1 = 3 → anticoagular) y ecocardiograma.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, el reloj avisa, pero el que diagnostica es el electro. Sin ECG no hay FA.",
    keyPoints: [
      "FA se confirma con ECG (12 derivaciones o ≥30 s en una derivación).",
      "Paroxística: Holter o monitor de eventos.",
      "CHA₂DS₂-VASc ≥2 en hombres → anticoagular.",
    ],
  }),
  q({
    id: "udea-real-35",
    examArea: "MEDICINA INTERNA",
    topic: "SÍNDROME DE GILBERT",
    difficulty: "easy",
    tags: ["examen-real", "hepatologia"],
    statement:
      "Hombre de 25 años, consulta porque desde hace muchos años nota episodios intermitentes de ictericia en escleras, que usualmente aparecían con los resfriados. Recientemente, desde que inició ayuno intermitente, los episodios han aparecido más frecuentemente. No ha tenido dolor abdominal, ni acolia, su peso ha estado estable. Antecedentes: migraña, toma acetaminofén intermitentemente, máximo 2 g al día. Examen físico: hidratado, tinte ictérico en las escleras, sin ictericia en otras regiones corporales, no tiene hepatomegalia ni estigmas de enfermedad hepática. Laboratorio: bilirrubina total 4.5 mg/dL, bilirrubina directa 0.6 mg/dL, fosfatasa alcalina 90 UI/L, gammaglutamil transferasa 20 UI/L, AST 23 UI/L, ALT 28 UI/L, hemoglobina 15 g/dL, deshidrogenasa láctica 120 UI/L, haptoglobina 124 mg/dL (referencia 41 a 165 mg/dL). Ecografía abdominal normal. ¿Cuál de las siguientes condiciones explica mejor los síntomas de este paciente?",
    options: [
      [
        "Hemólisis",
        "La hemoglobina, la LDH y la haptoglobina son normales: no hay hemólisis.",
      ],
      [
        "Hepatitis B crónica",
        "Las transaminasas son normales y la hiperbilirrubinemia es indirecta; no hay daño hepatocelular.",
      ],
      [
        "Hepatotoxicidad por acetaminofén",
        "Con ≤2 g/día no se espera toxicidad, y daría elevación marcada de transaminasas.",
      ],
      ["Síndrome de Gilbert"],
    ],
    correct: "D",
    explanation:
      "Hiperbilirrubinemia INDIRECTA aislada (directa <20% del total), con transaminasas, fosfatasa alcalina, GGT y ecografía normales y sin hemólisis (Hb, LDH y haptoglobina normales), que aparece con el ayuno, las infecciones, el estrés o el ejercicio intenso = síndrome de Gilbert.\n\nEs una deficiencia leve de la UDP-glucuronosiltransferasa (gen UGT1A1), benigna, presente en 3–7% de la población. No requiere tratamiento; solo tranquilizar. Ojo con fármacos que se glucuronidan (irinotecán).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, joven con ictericia leve cuando ayuna o se enferma, todo normal excepto la indirecta: Gilbert. Se tranquiliza y punto.",
    keyPoints: [
      "Gilbert: hiperbilirrubinemia indirecta aislada, sin hemólisis.",
      "Desencadenantes: ayuno, infecciones, estrés, ejercicio.",
      "Benigno; no requiere tratamiento.",
    ],
  }),
  q({
    id: "udea-real-36",
    examArea: "MEDICINA INTERNA",
    topic: "HIPERPARATIROIDISMO PRIMARIO",
    difficulty: "medium",
    tags: ["examen-real", "endocrinologia"],
    statement:
      "Mujer de 58 años quien asiste a consulta de control de riesgo cardiovascular. Solo describe constipación en los últimos 3 meses. Antecedentes: Hipertensión diagnosticada 2 años antes. Toma irbesartán 300 mg al día, amlodipino 10 mg al día, espironolactona 25 mg/día y carvedilol 25 mg cada 12 horas. Examen físico: presión arterial 160 /90 mmHg (promedio de 3 mediciones), frecuencia cardiaca 78 lat/min, resto del examen sin hallazgos anormales. Laboratorio: calcio 12 mg/dL, potasio 4.0 mEq/L; sodio 138 mEq/L, creatinina 1,5 mg/dL, hemoglobina 13,5 g/dL, 25 hidroxi-vitamina D 36 ng/mL (ref: 30 – 40 ng/mL) y hormona paratiroidea 176 pg/dL (ref: 10 a 55 pg/dL). ¿Cuál de los siguientes es el diagnóstico correcto?",
    options: [
      [
        "Enfermedad renal crónica con hiperparatiroidismo secundario",
        "En el secundario el calcio es normal o bajo; aquí está alto.",
      ],
      [
        "Hipercalcemia por diuréticos",
        "Las tiazidas pueden subir el calcio, pero ella toma espironolactona; y la PTH estaría suprimida.",
      ],
      ["Hiperparatiroidismo primario"],
      [
        "Neoplasia oculta con hipercalcemia maligna",
        "La hipercalcemia maligna (PTHrP, metástasis) suprime la PTH.",
      ],
    ],
    correct: "C",
    explanation:
      "Hipercalcemia (12 mg/dL) con PTH ELEVADA (inapropiada) y vitamina D normal = hiperparatiroidismo primario (adenoma paratiroideo en ~85%). Clínica: 'huesos, piedras, quejidos abdominales (constipación) y gemidos psíquicos'; la HTA resistente y la disfunción renal pueden asociarse.\n\nIndicaciones de paratiroidectomía en asintomáticos: calcio >1 mg/dL sobre el límite superior, TFG <60, osteoporosis o fracturas vertebrales, nefrolitiasis/hipercalciuria, edad <50 años. Esta paciente cumple (calcio 12 y creatinina 1,5). Localizar con gammagrafía sestamibi y ecografía.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, calcio alto + PTH alta = primario. Calcio alto + PTH baja = maligno o vitamina D. Calcio normal/bajo + PTH alta = secundario.",
    keyPoints: [
      "Calcio ↑ + PTH ↑ = hiperparatiroidismo primario.",
      "Calcio ↑ + PTH ↓ = maligno (PTHrP), vitamina D, granulomas.",
      "Cirugía si Ca >1 mg/dL sobre límite, TFG <60, osteoporosis, litiasis, <50 años.",
    ],
  }),
  q({
    id: "udea-real-37",
    examArea: "NEUROLOGÍA",
    topic: "HEMATOMA EPIDURAL",
    difficulty: "medium",
    tags: ["examen-real", "trauma-craneoencefalico"],
    statement:
      "Hombre de 30 años quien bajo efectos del alcohol sufrió accidente de moto. Examen físico: Glasgow 13, lateropulsión, amnesia del evento. Herida de 5 cm en región temporal, con fractura lineal. ¿Cuál de los siguientes es el diagnóstico más probable?",
    options: [
      [
        "Contusión temporal",
        "Es posible, pero la fractura temporal apunta a la complicación clásica por lesión de la arteria meníngea media.",
      ],
      [
        "Daño axonal difuso",
        "Se asocia a mecanismos de aceleración-desaceleración con coma profundo desde el inicio (Glasgow bajo), no a Glasgow 13.",
      ],
      ["Hematoma epidural agudo"],
      [
        "Hematoma subdural",
        "Típico de ancianos y alcohólicos crónicos por ruptura de venas puente; no se asocia específicamente a fractura temporal.",
      ],
    ],
    correct: "C",
    explanation:
      "Fractura lineal de la escama temporal + trauma de alta energía en adulto joven = riesgo de lesión de la arteria meníngea media → hematoma epidural agudo (90% asociado a fractura).\n\nClínica clásica: pérdida breve de conciencia, intervalo lúcido y deterioro rápido con anisocoria (herniación uncal). En TC: lesión biconvexa (lente) que no cruza suturas. Tratamiento: craneotomía urgente si >30 cm³, >15 mm de espesor, desviación >5 mm o deterioro. El alcohol puede enmascarar la caída del Glasgow.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, fractura temporal = arteria meníngea media = epidural. Lente biconvexa que no cruza suturas.",
    keyPoints: [
      "Epidural: arteria meníngea media, fractura temporal, intervalo lúcido.",
      "TC: biconvexo, no cruza suturas.",
      "Subdural: venas puente, semiluna, ancianos y alcohólicos.",
    ],
  }),
  q({
    id: "udea-real-38",
    examArea: "NEUROLOGÍA",
    topic: "ABSCESO CEREBRAL Y EDEMA VASOGÉNICO",
    difficulty: "medium",
    tags: ["examen-real", "neuroinfeccion"],
    statement:
      "Hombre de 18 años quien tuvo episodio de sinusitis tratado parcialmente por farmaceuta. Después de interrogarlo y examinarlo, el médico considera que tiene un síndrome de hipertensión endocraneana. TAC simple y contrastada de cráneo: presencia de imagen compatible con absceso intracerebral frontal, marcado edema vasogénico. Además de la cirugía ¿Cuál de las siguientes es la mejor opción para tratarle el edema?",
    options: [
      [
        "Acetazolamida",
        "Reduce la producción de LCR (útil en hipertensión intracraneal idiopática), no el edema vasogénico.",
      ],
      ["Dexametasona"],
      [
        "Manitol",
        "Es un osmótico de rescate para herniación inminente, no el tratamiento del edema vasogénico perilesional.",
      ],
      [
        "Solución salina hipertónica",
        "Igual que el manitol: terapia osmótica temporal para crisis de hipertensión intracraneal.",
      ],
    ],
    correct: "B",
    explanation:
      "El edema VASOGÉNICO (ruptura de la barrera hematoencefálica alrededor de tumores y abscesos) responde a corticoides: dexametasona (10 mg IV de carga, luego 4 mg cada 6 h), que estabiliza la barrera. En absceso se usa cuando hay efecto de masa importante o riesgo de herniación, por el tiempo más corto posible (puede reducir la penetración del antibiótico y la cápsula).\n\nLos osmóticos (manitol, salina hipertónica) son para crisis de hipertensión intracraneal o herniación. El edema CITOTÓXICO (isquemia) no responde a esteroides.\n\nAbsceso frontal tras sinusitis: flora estreptocócica y anaerobia → ceftriaxona + metronidazol + drenaje.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, edema vasogénico (tumor, absceso) = dexametasona. Edema citotóxico (infarto) = no esteroides.",
    keyPoints: [
      "Edema vasogénico → dexametasona.",
      "Manitol/salina hipertónica → herniación inminente.",
      "Absceso por sinusitis: ceftriaxona + metronidazol + drenaje.",
    ],
  }),
  q({
    id: "udea-real-39",
    examArea: "NEUROLOGÍA",
    topic: "DAÑO AXONAL DIFUSO",
    difficulty: "medium",
    tags: ["examen-real", "trauma-craneoencefalico"],
    statement:
      "Hombre de 32 años llevado a urgencias porque sufrió trauma encéfalo craneano grave al caer de un tercer piso. Examen físico: Glasgow 4/15, anisocoria por midriasis derecha. Después de dos días de estancia en UCI no recupera su estado neurológico. Tomografía de cráneo al segundo día: normal. ¿Cuál de los siguientes es el diagnóstico más probable?",
    options: [
      [
        "Contusión del mesencéfalo",
        "Una contusión de tronco con este compromiso suele ser visible o asociarse a otras lesiones en la TC.",
      ],
      ["Daño axonal difuso"],
      [
        "Disección de la arteria carótida",
        "Daría un infarto territorial visible a las 48 horas en la TC y déficit focal, no coma con TC normal.",
      ],
      [
        "Edema hidrostático",
        "No es una entidad que explique coma persistente con TC normal tras trauma grave.",
      ],
    ],
    correct: "B",
    explanation:
      "Trauma de alta energía (aceleración-desaceleración-rotación) + coma profundo desde el inicio (Glasgow 4) + TC normal o casi normal que no explica el estado neurológico = daño axonal difuso.\n\nLas fuerzas de cizallamiento lesionan los axones en la unión sustancia gris-blanca, cuerpo calloso y tronco. La RM (secuencias de susceptibilidad SWI/GRE y difusión) es el estudio de elección y muestra microhemorragias. Pronóstico reservado; tratamiento de soporte y prevención de lesión secundaria.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, coma profundo con TAC 'limpia' = daño axonal difuso. Pide RM con SWI.",
    keyPoints: [
      "DAD: coma desde el inicio, TC normal o con petequias.",
      "Mecanismo: aceleración-desaceleración rotacional.",
      "Diagnóstico: RM (SWI, difusión).",
    ],
  }),
  q({
    id: "udea-real-40",
    examArea: "NEUROLOGÍA",
    topic: "ACV CEREBELOSO",
    difficulty: "hard",
    tags: ["examen-real", "acv"],
    statement:
      "Mujer de 40 años. Después de despertar en la mañana inició con vértigo, gran dificultad para sostenerse sentada o de pie porque se lateraliza, tuvo vómito y fue incapaz de abotonarse la camisa y ponerse los aretes porque no tenía la precisión para hacerlo. Una hora después inició cefalea occipital opresiva, intensidad de 6 /10 en la escala análoga visual del dolor, irradiada a toda la cabeza, la cual empeoró con el vómito y fue llevada a urgencias. Antecedente: migraña sin aura, resto negativo. Examen físico: presión arterial 176/108 mmHg, frecuencia cardiaca 90/minuto, frecuencia respiratoria 16/minuto, afebril. Minimental 30, sin alteración del habla, ni lenguaje. Fuerza 5 en las cuatro extremidades, no reportó alteración sensitiva, reflejos miotendinosos pendulares, sin alteración en los movimientos oculares, ni en campos visuales, cara simétrica, ataxia, disdiadococinesia. ¿Cuál de las siguientes es el tratamiento recomendado?",
    options: [
      [
        "Reducir la presión arterial 15%",
        "En ACV isquémico sin trombólisis se permite hipertensión hasta 220/120 mmHg; reducir 15% se indica solo por encima de ese umbral.",
      ],
      [
        "Realizar hemodilución con solución salina",
        "La hemodilución no ha demostrado beneficio en ACV isquémico.",
      ],
      ["Administrar ácido acetilsalicílico 300mg"],
      [
        "Iniciar alteplase 0.9 mg / kg",
        "ACV al despertar: la hora de inicio es desconocida (último momento visto normal = al acostarse); sin estudios de imagen avanzados no cumple la ventana.",
      ],
    ],
    correct: "C",
    explanation:
      "Síndrome cerebeloso agudo (vértigo, lateropulsión, ataxia, dismetría, disdiadococinesia, reflejos pendulares) al despertar = ACV isquémico de circulación posterior (cerebelo), en mujer joven: pensar también en disección vertebral.\n\nComo es un 'ACV del despertar', la hora de inicio es desconocida y queda fuera de ventana para alteplasa (salvo selección por RM con mismatch DWI-FLAIR). Tras descartar hemorragia con TC, el tratamiento es antiagregación con ASA 160–325 mg (300 mg) en las primeras 24–48 h. Presión permisiva hasta 220/120. Vigilar edema cerebeloso e hidrocefalia (puede requerir craniectomía suboccipital).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, si no sabes a qué hora empezó (se despertó así), no hay trombolítico sin imagen avanzada: TAC sin sangre → aspirina. Y no bajes la presión si está <220/120.\n\n*Clave elaborada por el equipo Método Q (el examen no trae respuestas).*",
    keyPoints: [
      "ACV al despertar = hora de inicio desconocida.",
      "Sin trombólisis: ASA 160–325 mg en 24–48 h.",
      "Presión permisiva hasta 220/120 si no se trombolisa.",
    ],
  }),
];
