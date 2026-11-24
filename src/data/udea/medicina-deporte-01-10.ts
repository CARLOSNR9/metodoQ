import { buildUdeaQuestion as q } from "./build-question";

/**
 * Ruta Medicina del Deporte (UdeA) · #01–#10: cardiología del deportista,
 * conmoción, calor e hidratación, evaluación preparticipación.
 */
export const UDEA_MEDICINA_DEPORTE_01_10 = [
  q({
    id: "udea-dep-01",
    examArea: "MEDICINA DEL DEPORTE",
    topic: "EVALUACIÓN PREPARTICIPACIÓN: SOPLO DINÁMICO",
    difficulty: "medium",
    tags: ["deporte", "cardiologia", "muerte-subita"],
    statement:
      "Un futbolista de 17 años de un club de Medellín asiste a su evaluación preparticipativa. Refiere un episodio de presíncope durante un sprint hace un mes. Su tío murió súbitamente a los 32 años. Al examen se ausculta un soplo sistólico en el borde esternal izquierdo que aumenta con la maniobra de Valsalva y al ponerse de pie, y disminuye en cuclillas. ¿Cuál es la conducta más adecuada?",
    options: [
      [
        "Autorizar la participación porque el soplo es funcional en un deportista joven.",
        "Un soplo funcional disminuye (no aumenta) con Valsalva y bipedestación; además hay síntoma de esfuerzo e historia familiar de muerte súbita.",
      ],
      [
        "Permitir entrenamiento a baja intensidad y repetir la auscultación en 6 meses.",
        "Con sospecha de miocardiopatía hipertrófica no se debe seguir entrenando mientras se estudia: el riesgo es la muerte súbita.",
      ],
      [
        "Suspender temporalmente la actividad competitiva y solicitar ECG y ecocardiograma.",
      ],
      [
        "Solicitar prueba de esfuerzo máxima antes de cualquier otro estudio.",
        "Hacer una prueba máxima con una posible obstrucción del tracto de salida no es el primer paso; primero ECG y ecocardiograma.",
      ],
    ],
    correct: "C",
    explanation:
      "Soplo sistólico que AUMENTA con lo que reduce la precarga (Valsalva, bipedestación) y DISMINUYE con lo que la aumenta (cuclillas) = obstrucción dinámica del tracto de salida del VI → miocardiopatía hipertrófica (MCH), principal causa de muerte súbita cardíaca en deportistas jóvenes en muchas series.\n\nSeñales de alarma de la evaluación preparticipativa (AHA 14 elementos): síncope o presíncope de esfuerzo, dolor torácico de esfuerzo, muerte súbita familiar <50 años, soplo patológico. Conducta: suspender la competencia mientras se estudia, ECG de 12 derivaciones (criterios internacionales) y ecocardiograma; RM cardíaca si hay dudas.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, soplo que sube con Valsalva = MCH hasta que el eco diga otra cosa. Presíncope en sprint + muerte súbita familiar: se para y se estudia.",
    keyPoints: [
      "Soplo de MCH: ↑ con Valsalva/bipedestación, ↓ en cuclillas.",
      "Alarmas: síncope de esfuerzo, muerte súbita familiar <50 años.",
      "Estudio: ECG + ecocardiograma; suspender competencia mientras tanto.",
    ],
  }),
  q({
    id: "udea-dep-02",
    examArea: "MEDICINA DEL DEPORTE",
    topic: "ECG DEL DEPORTISTA: CRITERIOS INTERNACIONALES",
    difficulty: "hard",
    tags: ["deporte", "cardiologia", "electrocardiograma"],
    statement:
      "Un ciclista de ruta de 22 años, asintomático y sin antecedentes familiares, se realiza un ECG de tamizaje. ¿Cuál de los siguientes hallazgos se considera ANORMAL según los criterios internacionales de interpretación del ECG en atletas y obliga a estudios adicionales?",
    options: [
      [
        "Bradicardia sinusal de 42 latidos por minuto.",
        "La bradicardia sinusal ≥30 lpm es una adaptación normal al entrenamiento de resistencia.",
      ],
      [
        "Bloqueo AV de primer grado con PR de 260 ms.",
        "El bloqueo AV de primer grado (PR hasta 400 ms) es un hallazgo normal por tono vagal en el atleta.",
      ],
      [
        "Criterio de voltaje aislado de hipertrofia ventricular izquierda.",
        "El voltaje aumentado aislado (sin otros hallazgos) es una adaptación fisiológica del corazón de atleta.",
      ],
      ["Ondas T invertidas en las derivaciones laterales V5, V6, DI y aVL."],
    ],
    correct: "D",
    explanation:
      "Criterios internacionales (Sharma/Drezner 2017):\n• NORMALES (adaptación al entrenamiento): bradicardia sinusal ≥30 lpm, arritmia sinusal, BAV de primer grado, Mobitz I, repolarización precoz, criterio de voltaje aislado de HVI o HVD, BRD incompleto, ritmo auricular ectópico; inversión de T en V1–V4 en atletas negros precedida de elevación del ST.\n• ANORMALES (estudiar): inversión de onda T en derivaciones laterales o inferolaterales (sugiere miocardiopatía hipertrófica), depresión del ST, ondas Q patológicas, BRIHH completo, QRS ≥140 ms, onda épsilon, preexcitación, QTc ≥470 ms (hombres), patrón de Brugada tipo 1, bradicardia <30 lpm, BAV de segundo grado Mobitz II o tercer grado, ≥2 extrasístoles ventriculares en 10 s.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, el corazón del atleta es lento, grande y vagotónico. Lo que no es normal es la T invertida en las laterales: piensa en miocardiopatía.",
    keyPoints: [
      "Normales en atleta: bradicardia, BAV 1.º, repolarización precoz, voltaje aislado.",
      "Anormal: T invertida lateral/inferolateral, depresión ST, Q patológicas.",
      "Hallazgo anormal → ecocardiograma (± RM cardíaca).",
    ],
  }),
  q({
    id: "udea-dep-03",
    examArea: "MEDICINA DEL DEPORTE",
    topic: "PARO CARDÍACO EN EL CAMPO DE JUEGO",
    difficulty: "easy",
    tags: ["deporte", "reanimacion", "commotio-cordis"],
    statement:
      "Durante un partido de béisbol juvenil, un jugador de 14 años recibe un pelotazo en el centro del pecho, da dos pasos y cae inconsciente. No respira con normalidad y no tiene pulso. En la cancha hay un desfibrilador externo automático (DEA). ¿Cuál es la conducta inmediata?",
    options: [
      ["Iniciar compresiones torácicas y conectar el DEA lo antes posible para analizar el ritmo."],
      [
        "Colocarlo en posición lateral de seguridad y esperar a la ambulancia.",
        "La posición lateral es para el paciente inconsciente que respira con pulso; este paciente está en paro.",
      ],
      [
        "Inmovilizar la columna cervical antes de cualquier otra maniobra.",
        "El mecanismo es un impacto precordial, no un trauma cervical; la inmovilización no debe retrasar la RCP y la desfibrilación.",
      ],
      [
        "Dar dos ventilaciones de rescate y revisar el pulso cada minuto.",
        "En el adulto/adolescente que colapsa súbitamente, la prioridad son las compresiones y la desfibrilación temprana, no las ventilaciones ni las revisiones repetidas de pulso.",
      ],
    ],
    correct: "A",
    explanation:
      "Commotio cordis: un impacto no penetrante sobre el precordio en el periodo vulnerable de la repolarización (ascenso de la onda T) desencadena fibrilación ventricular en un corazón estructuralmente sano. Es más frecuente en adolescentes varones (pared torácica más compliante) y en deportes con proyectiles (béisbol, lacrosse, hockey, artes marciales).\n\nLa supervivencia depende del tiempo hasta la desfibrilación: RCP inmediata y DEA en los primeros 3–5 minutos (supervivencia >50% con desfibrilación temprana). Por eso todo escenario deportivo debe tener un plan de acción de emergencia y un DEA accesible.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, deportista que colapsa sin pulso: comprimir y DEA ya. Cada minuto sin choque cuesta ~10% de supervivencia.",
    keyPoints: [
      "Commotio cordis: impacto precordial → FV en corazón sano.",
      "RCP inmediata + DEA en los primeros minutos.",
      "Todo evento deportivo necesita plan de emergencia y DEA.",
    ],
  }),
  q({
    id: "udea-dep-04",
    examArea: "MEDICINA DEL DEPORTE",
    topic: "CONMOCIÓN CEREBRAL DEPORTIVA",
    difficulty: "medium",
    tags: ["deporte", "neurologia", "retorno-al-juego"],
    statement:
      "Un jugador de rugby de 19 años choca cabeza con cabeza. Queda aturdido unos segundos, refiere cefalea, mareo y 'siente que está en una nube'. No perdió la conciencia y el examen neurológico es normal. Diez minutos después dice sentirse mejor y pide volver al partido. ¿Cuál es la conducta correcta?",
    options: [
      [
        "Permitir el regreso al juego porque no perdió la conciencia.",
        "La conmoción no requiere pérdida de conciencia; regresar el mismo día expone al síndrome de segundo impacto.",
      ],
      [
        "Permitir el regreso si completa una prueba de esfuerzo en la banca sin síntomas.",
        "Ante sospecha de conmoción no se regresa el mismo día, aunque los síntomas mejoren.",
      ],
      [
        "Solicitar tomografía de cráneo urgente para decidir el regreso al partido.",
        "La TC no diagnostica conmoción (es normal) y solo se pide con signos de alarma; tampoco autoriza el regreso.",
      ],
      ["Retirarlo del juego ese día e iniciar un protocolo de regreso gradual tras la resolución de síntomas."],
    ],
    correct: "D",
    explanation:
      "Conmoción cerebral relacionada con el deporte (consenso de Ámsterdam 2022/CISG): disfunción neurológica transitoria tras un impacto, con o sin pérdida de conciencia (cefalea, mareo, 'sensación de niebla', confusión, alteración del equilibrio). Herramienta de evaluación: SCAT6.\n\nRegla de oro: 'Ante la duda, fuera' — nunca regresar el mismo día. Reposo relativo 24–48 h, luego actividad física ligera que no empeore los síntomas, retorno escolar/laboral y después regreso progresivo al deporte por etapas (≥24 h cada una): actividad aeróbica → ejercicio específico del deporte → entrenamiento sin contacto → contacto pleno con autorización médica → competencia. Signos de alarma para TC: deterioro de conciencia, vómito repetido, convulsión, déficit focal, cefalea progresiva.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, con conmoción no se vuelve a la cancha ese día. El segundo golpe en un cerebro que no se ha recuperado puede ser fatal.",
    keyPoints: [
      "Conmoción: no requiere pérdida de conciencia.",
      "Nunca regreso el mismo día ('ante la duda, fuera').",
      "Regreso gradual por etapas de ≥24 h; herramienta SCAT6.",
    ],
  }),
  q({
    id: "udea-dep-05",
    examArea: "MEDICINA DEL DEPORTE",
    topic: "GOLPE DE CALOR POR ESFUERZO",
    difficulty: "medium",
    tags: ["deporte", "urgencias", "calor"],
    statement:
      "Durante una media maratón en Santa Fe de Antioquia (34 °C, humedad alta), un corredor de 28 años colapsa en el kilómetro 19. Está confuso y agresivo, con piel caliente y sudorosa, frecuencia cardíaca 140 lpm, presión arterial 100/60 mmHg y temperatura rectal de 41,2 °C. ¿Cuál es la medida más importante?",
    options: [
      [
        "Trasladarlo de inmediato al hospital más cercano y enfriarlo allá.",
        "El principio es 'enfriar primero, trasladar después': cada minuto sobre 40 °C aumenta el daño multiorgánico.",
      ],
      ["Enfriamiento inmediato en el sitio por inmersión en agua fría hasta llevar la temperatura rectal a ~38,9 °C."],
      [
        "Administrar acetaminofén intravenoso y líquidos fríos.",
        "Los antipiréticos no sirven: no hay reajuste del termostato hipotalámico como en la fiebre.",
      ],
      [
        "Aplicar compresas tibias y abanicar hasta que recupere la conciencia.",
        "Es un método mucho más lento que la inmersión; se usa solo si no hay disponibilidad de agua fría.",
      ],
    ],
    correct: "B",
    explanation:
      "Golpe de calor por esfuerzo: temperatura central >40 °C + disfunción del sistema nervioso central (confusión, agresividad, convulsión, coma) durante ejercicio en calor. A diferencia del golpe de calor clásico, el paciente suele seguir sudando.\n\nTratamiento: 'cool first, transport second'. La inmersión en agua fría (o helada) en el sitio es el método más rápido (≈0,15–0,35 °C/min) y logra supervivencia cercana al 100% si se enfría en <30 minutos. Se detiene al llegar a ~38,6–39 °C para evitar la hipotermia. Medir temperatura rectal (oral, timpánica y axilar no son confiables). Luego vigilar rabdomiólisis, falla renal, hepática y CID.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, atleta confuso y caliente: temperatura rectal y a la tina de agua fría. Se enfría en el sitio y después se traslada.",
    keyPoints: [
      "Golpe de calor por esfuerzo: >40 °C + disfunción del SNC.",
      "Inmersión en agua fría en el sitio; meta ~39 °C.",
      "Antipiréticos no sirven; medir temperatura rectal.",
    ],
  }),
  q({
    id: "udea-dep-06",
    examArea: "MEDICINA DEL DEPORTE",
    topic: "HIPONATREMIA ASOCIADA AL EJERCICIO",
    difficulty: "hard",
    tags: ["deporte", "urgencias", "hidratacion"],
    statement:
      "Una corredora recreativa de 41 años termina un maratón en 5 horas 40 minutos. Bebió agua en todas las estaciones 'para no deshidratarse'. Llega a la carpa médica con cefalea, náuseas, vómito y confusión. Ganó 1,5 kg respecto a su peso previo. El sodio en un analizador portátil es de 124 mEq/L. ¿Cuál es el tratamiento inicial?",
    options: [
      [
        "Solución salina normal 0,9% a 20 mL/kg en bolo por posible deshidratación.",
        "Es una hiponatremia por exceso de agua (ganó peso); la salina isotónica puede empeorar el cuadro y retrasa la corrección.",
      ],
      [
        "Restricción de líquidos y observación hasta que orine espontáneamente.",
        "La restricción sola es para la hiponatremia asintomática o leve; con encefalopatía es insuficiente.",
      ],
      ["Bolo de solución salina hipertónica al 3% (100 mL), repetible hasta 2 veces si persisten los síntomas."],
      [
        "Bebida deportiva con electrolitos por vía oral a libre demanda.",
        "Las bebidas deportivas son hipotónicas frente al plasma: no corrigen una hiponatremia sintomática.",
      ],
    ],
    correct: "C",
    explanation:
      "Hiponatremia asociada al ejercicio (EAH): Na <135 mEq/L durante o hasta 24 h después del ejercicio prolongado. El mecanismo principal es la ingesta de líquidos por encima de las pérdidas (aumento de peso durante la carrera), sumada a secreción inapropiada de ADH. Factores de riesgo: carreras largas (>4 h), sexo femenino, bajo peso, AINE, beber 'por horario' y no por sed.\n\nCon síntomas neurológicos (encefalopatía, vómito, confusión, convulsiones): salina hipertónica al 3%, bolo de 100 mL en 10 minutos, repetible hasta 3 veces, buscando subir 4–5 mEq/L para revertir el edema cerebral. Evitar líquidos hipotónicos o isotónicos. Prevención: beber según la sed.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, maratonista lenta que ganó peso y está confusa: no es deshidratación, es agua de más. Salina al 3% en bolo.",
    keyPoints: [
      "EAH: exceso de ingesta hídrica + ADH; el peso aumenta.",
      "Sintomática: bolo de 100 mL de salina 3% (hasta 3 veces).",
      "Prevención: beber según la sed.",
    ],
  }),
  q({
    id: "udea-dep-07",
    examArea: "MEDICINA DEL DEPORTE",
    topic: "RABDOMIÓLISIS POR EJERCICIO",
    difficulty: "medium",
    tags: ["deporte", "nefrologia"],
    statement:
      "Un estudiante de 20 años, sedentario, asiste por primera vez a una clase de entrenamiento funcional de alta intensidad con muchas sentadillas y saltos. 48 horas después consulta por dolor intenso en los muslos, debilidad y orina de color oscuro. CK: 48.000 U/L. Creatinina 1,0 mg/dL, potasio 4,5 mEq/L. Uroanálisis: sangre +++ con 0–2 eritrocitos por campo. ¿Cuál es el manejo inicial?",
    options: [
      [
        "Ibuprofeno 800 mg cada 8 horas y reposo en casa.",
        "Los AINE son nefrotóxicos y están contraindicados en rabdomiólisis.",
      ],
      ["Hidratación intravenosa con cristaloides para lograr una diuresis de 200–300 mL/h y vigilancia de electrolitos."],
      [
        "Bicarbonato de sodio y manitol como tratamiento de primera línea.",
        "No han demostrado superioridad sobre la hidratación con cristaloides y tienen riesgos; no son primera línea.",
      ],
      [
        "Hemodiálisis temprana por el valor de CK mayor de 20.000 U/L.",
        "La diálisis se indica por complicaciones (hiperkalemia refractaria, acidosis, sobrecarga, uremia), no por el valor de CK.",
      ],
    ],
    correct: "B",
    explanation:
      "Rabdomiólisis por esfuerzo: mialgia intensa, debilidad y orina oscura (mioglobinuria: tirilla positiva para sangre sin eritrocitos) tras ejercicio excéntrico intenso no habituado, con CK >5 veces el límite (habitualmente >10.000–50.000).\n\nTratamiento: hidratación IV agresiva y temprana con cristaloides (solución salina o lactato) para una diuresis de 200–300 mL/h hasta que la CK baje (<5.000) y la orina se aclare; vigilar potasio, calcio, fósforo, creatinina y síndrome compartimental. Evitar AINE. Regreso gradual al ejercicio cuando normalicen CK y síntomas; si es recurrente o desproporcionada, descartar miopatía metabólica o rasgo falciforme.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, el 'crossfit del primer día' manda gente a urgencias. Orina como Coca-Cola + CK altísima = suero a chorro, y sin AINE.",
    keyPoints: [
      "Mioglobinuria: tirilla con sangre sin eritrocitos.",
      "Cristaloides IV para diuresis 200–300 mL/h.",
      "Evitar AINE; vigilar K, Ca, función renal y síndrome compartimental.",
    ],
  }),
  q({
    id: "udea-dep-08",
    examArea: "MEDICINA DEL DEPORTE",
    topic: "PRESCRIPCIÓN DEL EJERCICIO: FÓRMULA DE KARVONEN",
    difficulty: "medium",
    tags: ["deporte", "actividad-fisica", "fisiologia"],
    statement:
      "Un hombre de 40 años, con frecuencia cardíaca en reposo de 60 lpm, inicia un programa de ejercicio aeróbico. Se desea prescribir una intensidad del 60% de la frecuencia cardíaca de reserva, estimando la frecuencia máxima con la fórmula 220 − edad. ¿Cuál es la frecuencia cardíaca objetivo?",
    options: [
      [
        "108 latidos por minuto.",
        "Es el 60% de la frecuencia máxima (180 × 0,6), no de la frecuencia de reserva.",
      ],
      [
        "120 latidos por minuto.",
        "No corresponde a ningún cálculo correcto con la fórmula de Karvonen.",
      ],
      ["132 latidos por minuto."],
      [
        "144 latidos por minuto.",
        "Corresponde al 70% de la reserva (0,7 × 120 + 60) o al 80% de la máxima.",
      ],
    ],
    correct: "C",
    explanation:
      "Fórmula de Karvonen (frecuencia cardíaca de reserva, FCR):\nFC objetivo = [(FCmáx − FCreposo) × % intensidad] + FCreposo\n• FCmáx = 220 − 40 = 180 lpm.\n• FCR = 180 − 60 = 120 lpm.\n• 60% de la FCR = 72 → 72 + 60 = 132 lpm.\n\nLa FCR se correlaciona con el %VO₂ de reserva: 40–59% = intensidad moderada; 60–89% = vigorosa (ACSM). Otras herramientas: escala de esfuerzo percibido de Borg (moderado ≈ 12–13 en la escala 6–20), METs y la 'prueba del habla'. En pacientes con betabloqueador la frecuencia cardíaca no es confiable: usar Borg.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, Karvonen: a la máxima le restas la de reposo, sacas el porcentaje y le vuelves a sumar la de reposo. No olvides sumar al final.",
    keyPoints: [
      "Karvonen: (FCmáx − FCreposo) × % + FCreposo.",
      "Moderada: 40–59% FCR; vigorosa: 60–89% FCR.",
      "Con betabloqueadores: usar escala de Borg.",
    ],
  }),
  q({
    id: "udea-dep-09",
    examArea: "MEDICINA DEL DEPORTE",
    topic: "ACTIVIDAD FÍSICA EN DIABETES TIPO 1",
    difficulty: "medium",
    tags: ["deporte", "endocrinologia", "diabetes"],
    statement:
      "Un nadador de 16 años con diabetes tipo 1, en esquema basal-bolo, va a iniciar un entrenamiento aeróbico de 60 minutos. Su glucometría previa al ejercicio es de 82 mg/dL, sin cetonas. ¿Cuál es la recomendación más adecuada?",
    options: [
      [
        "Suspender el entrenamiento ese día por riesgo de hipoglucemia.",
        "No es necesario suspender: con 82 mg/dL basta con ingerir carbohidratos antes de iniciar.",
      ],
      [
        "Aplicar un bolo de corrección de insulina rápida antes de entrar al agua.",
        "Añadir insulina antes de un ejercicio aeróbico con glucosa normal-baja provocaría hipoglucemia grave.",
      ],
      [
        "Iniciar el entrenamiento sin cambios y medir la glucosa al terminar.",
        "Con glucosa <90 mg/dL, iniciar ejercicio aeróbico sin carbohidratos expone a hipoglucemia durante la sesión.",
      ],
      ["Ingerir 10–20 g de carbohidratos de absorción rápida y posponer el inicio hasta que la glucosa supere 90 mg/dL."],
    ],
    correct: "D",
    explanation:
      "Consenso internacional sobre ejercicio en diabetes tipo 1 (Riddell, Lancet Diabetes Endocrinol 2017; ADA):\n• Glucosa <90 mg/dL: ingerir 10–20 g de carbohidratos y retrasar el ejercicio hasta >90 mg/dL.\n• 90–124 mg/dL: 10 g de carbohidratos antes del ejercicio aeróbico.\n• 126–180 mg/dL: puede iniciar.\n• 182–270 mg/dL: puede iniciar; vigilar.\n• >270 mg/dL: medir cetonas; con cetonemia ≥1,5 mmol/L no hacer ejercicio.\nEl ejercicio aeróbico baja la glucosa; el anaeróbico intenso puede subirla. Reducir el bolo de la comida previa (25–75%) y vigilar la hipoglucemia nocturna tardía.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, diabético tipo 1 con menos de 90 antes de entrenar: carbohidrato primero y esperar. Y ojo con la hipoglucemia de la madrugada.",
    keyPoints: [
      "<90 mg/dL antes del ejercicio: 10–20 g de CHO y esperar.",
      ">270 mg/dL: medir cetonas; con cetosis no entrenar.",
      "Riesgo de hipoglucemia nocturna tardía tras el ejercicio.",
    ],
  }),
  q({
    id: "udea-dep-10",
    examArea: "MEDICINA DEL DEPORTE",
    topic: "DÉFICIT ENERGÉTICO RELATIVO EN EL DEPORTE (RED-S)",
    difficulty: "medium",
    tags: ["deporte", "ginecologia", "nutricion", "osteoporosis"],
    statement:
      "Una atleta de fondo de 18 años consulta por dolor en la tibia de 3 semanas que empeora con la carrera; la radiografía es normal y la RM muestra una fractura por estrés. Refiere amenorrea desde hace 8 meses, aumentó su volumen de entrenamiento y 'cuida mucho lo que come'. IMC 17,5 kg/m², prueba de embarazo negativa. ¿Cuál es la base del tratamiento de su condición de fondo?",
    options: [
      ["Aumentar la disponibilidad energética (más ingesta y/o menos gasto) con manejo nutricional y psicológico."],
      [
        "Anticonceptivos orales combinados para recuperar la menstruación.",
        "Generan sangrados por deprivación que enmascaran el problema y no mejoran la densidad ósea; no tratan la causa.",
      ],
      [
        "Bisfosfonatos para prevenir nuevas fracturas.",
        "No están indicados en mujeres jóvenes con RED-S (teratogenicidad, permanencia en hueso) y no corrigen el déficit energético.",
      ],
      [
        "Suplementos de calcio y vitamina D sin modificar el entrenamiento.",
        "Son coadyuvantes, pero sin corregir el balance energético la pérdida ósea continúa.",
      ],
    ],
    correct: "A",
    explanation:
      "Déficit energético relativo en el deporte (RED-S; antes 'tríada de la atleta femenina'): baja disponibilidad energética (ingesta insuficiente para el gasto del entrenamiento), con o sin trastorno alimentario, que causa amenorrea hipotalámica funcional y baja densidad mineral ósea, además de efectos metabólicos, cardiovasculares, inmunológicos, psicológicos y sobre el rendimiento. Las fracturas por estrés (sobre todo en hueso trabecular: cuello femoral, sacro, pelvis) son una alerta.\n\nTratamiento: aumentar la disponibilidad energética (meta ≥45 kcal/kg de masa libre de grasa/día) aumentando la ingesta y/o reduciendo la carga, con equipo multidisciplinario (medicina del deporte, nutrición, psicología). Calcio y vitamina D como coadyuvantes. Si persiste la amenorrea pese a la intervención nutricional, estradiol transdérmico con progestágeno cíclico (no anticonceptivos orales). Densitometría si amenorrea ≥6 meses.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, atleta flaca, sin regla y con fractura por estrés: no le falta una pastilla, le faltan calorías.",
    keyPoints: [
      "RED-S: baja disponibilidad energética → amenorrea + baja DMO.",
      "Tratamiento: corregir el balance energético (equipo multidisciplinario).",
      "Anticonceptivos orales enmascaran el problema.",
    ],
  }),
];
