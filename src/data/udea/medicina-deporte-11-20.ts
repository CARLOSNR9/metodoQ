import { buildUdeaQuestion as q } from "./build-question";

/**
 * Ruta Medicina del Deporte (UdeA) · #11–#20: lesiones musculoesqueléticas,
 * dopaje y ayudas ergogénicas.
 */
export const UDEA_MEDICINA_DEPORTE_11_20 = [
  q({
    id: "udea-dep-11",
    examArea: "MEDICINA DEL DEPORTE",
    topic: "FRACTURA POR ESTRÉS DEL CUELLO FEMORAL",
    difficulty: "hard",
    tags: ["deporte", "ortopedia", "fractura-estres"],
    statement:
      "Un militar de 21 años que entrena para una prueba de 10 km consulta por dolor inguinal derecho de 4 semanas, que empeora con la carrera y ahora aparece al caminar. Tiene dolor en la rotación interna de la cadera y en el salto monopodal. La radiografía es normal. La RM muestra una línea de fractura por estrés en la cortical superolateral del cuello femoral. ¿Cuál es la conducta más adecuada?",
    options: [
      ["Suspender el apoyo con muletas de inmediato y remitir a ortopedia para fijación quirúrgica."],
      [
        "Reposo relativo de la carrera por 4 semanas y regreso progresivo.",
        "Ese manejo sirve para fracturas de bajo riesgo (tibia posteromedial, metatarsianos 2–4), no para el lado de tensión del cuello femoral.",
      ],
      [
        "Continuar entrenando a menor volumen con AINE y control en 6 semanas.",
        "Seguir cargando una fractura de alto riesgo puede llevar a desplazamiento y necrosis avascular de la cabeza femoral.",
      ],
      [
        "Bota ortopédica y apoyo según tolerancia.",
        "La bota es para fracturas por estrés del pie; aquí el riesgo es el desplazamiento del cuello femoral.",
      ],
    ],
    correct: "A",
    explanation:
      "Fracturas por estrés de ALTO riesgo (tienden a no consolidar o desplazarse): cuello femoral lado de tensión (superolateral), cortical anterior de la tibia ('la temida línea negra'), maléolo medial, navicular, base del 5.º metatarsiano (zona 2–3, Jones), sesamoideos, astrágalo.\n\nLa fractura del cuello femoral en el lado de tensión es una urgencia ortopédica: suspender el apoyo de inmediato y fijación quirúrgica (tornillos canulados), por el riesgo de desplazamiento, necrosis avascular y pseudoartrosis. Las del lado de compresión (inferomedial) pueden manejarse sin apoyo y vigilancia estricta si son pequeñas. Siempre buscar RED-S, déficit de vitamina D y errores de entrenamiento.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, dolor inguinal en corredor con Rx normal: pide RM. Si la fractura está en el lado de tensión del cuello femoral, muletas ya y cirugía.",
    keyPoints: [
      "Alto riesgo: cuello femoral (tensión), tibia anterior, navicular, 5.º MTT, maléolo medial.",
      "Cuello femoral lado de tensión → sin apoyo + fijación quirúrgica.",
      "RM: estudio de elección cuando la radiografía es normal.",
    ],
  }),
  q({
    id: "udea-dep-12",
    examArea: "MEDICINA DEL DEPORTE",
    topic: "LESIÓN DEL LIGAMENTO CRUZADO ANTERIOR",
    difficulty: "easy",
    tags: ["deporte", "ortopedia", "rodilla"],
    statement:
      "Una basquetbolista de 23 años cae de un salto con la rodilla en valgo y rotación, siente un 'pop' y no puede continuar. En las siguientes 2 horas presenta un derrame importante (hemartrosis). ¿Cuál es la maniobra clínica más sensible para confirmar la lesión más probable?",
    options: [
      [
        "Prueba de McMurray.",
        "Evalúa lesión meniscal, no la estabilidad anteroposterior de la rodilla.",
      ],
      ["Prueba de Lachman."],
      [
        "Prueba del cajón posterior.",
        "Evalúa el ligamento cruzado posterior, que se lesiona con golpe en la tibia con la rodilla flexionada.",
      ],
      [
        "Estrés en valgo a 30° de flexión.",
        "Evalúa el ligamento colateral medial, no el cruzado anterior.",
      ],
    ],
    correct: "B",
    explanation:
      "Mecanismo sin contacto (aterrizaje o pivote con valgo y rotación) + 'pop' + hemartrosis rápida (<2–12 h) = lesión del ligamento cruzado anterior (LCA) en ~70% de los casos. Las mujeres tienen 2–8 veces más riesgo.\n\nLa prueba de Lachman (rodilla a 20–30° de flexión, traslación anterior de la tibia) es la más sensible (~85%); el pivot shift es la más específica, y el cajón anterior es menos sensible en la fase aguda. La RM confirma y evalúa meniscos y cartílago. Tratamiento: rehabilitación y, en deportistas de pivote, reconstrucción. La prevención (programas neuromusculares como FIFA 11+) reduce el riesgo ~50%.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, 'pop' + rodilla hinchada en 2 horas = LCA. La maniobra estrella es Lachman. Y la prevención con FIFA 11+ es tema de examen.",
    keyPoints: [
      "Pop + hemartrosis temprana = LCA hasta demostrar lo contrario.",
      "Lachman: la más sensible; pivot shift: la más específica.",
      "Prevención: programas neuromusculares (FIFA 11+).",
    ],
  }),
  q({
    id: "udea-dep-13",
    examArea: "MEDICINA DEL DEPORTE",
    topic: "TENDINOPATÍA AQUILIANA",
    difficulty: "medium",
    tags: ["deporte", "tendon"],
    statement:
      "Un corredor aficionado de 38 años consulta por dolor y rigidez en el tendón de Aquiles derecho, 4 cm por encima de la inserción, de 4 meses de evolución; es peor por la mañana y al inicio de la carrera. El tendón está engrosado y doloroso a la palpación; la prueba de Thompson es normal. ¿Cuál es el tratamiento con mejor evidencia?",
    options: [
      ["Programa de ejercicios de carga progresiva (excéntricos o de carga pesada lenta) durante 12 semanas."],
      [
        "Infiltración de corticoide en el tendón.",
        "La infiltración intratendinosa del Aquiles aumenta el riesgo de ruptura y no tiene beneficio a largo plazo.",
      ],
      [
        "Inmovilización con bota por 6 semanas.",
        "El tendón necesita carga para remodelarse; la inmovilización empeora la capacidad del tendón.",
      ],
      [
        "Cirugía de desbridamiento como primera opción.",
        "La cirugía se reserva para casos refractarios a 3–6 meses de tratamiento conservador bien hecho.",
      ],
    ],
    correct: "A",
    explanation:
      "Tendinopatía aquiliana de porción media (2–6 cm de la inserción): dolor y rigidez matinal, dolor al inicio de la actividad, engrosamiento fusiforme. Es una tendinopatía degenerativa por sobrecarga, no una 'tendinitis' inflamatoria. Thompson normal descarta ruptura.\n\nTratamiento de primera línea: ejercicio de carga progresiva — protocolo excéntrico de Alfredson (3 × 15, dos veces al día, 12 semanas) o carga pesada lenta (HSR), con ajuste del volumen de carrera según el dolor (dolor ≤3–5/10 permitido). Coadyuvantes: ondas de choque. Evitar corticoides intratendinosos y las fluoroquinolonas (riesgo de ruptura).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, el tendón se cura con carga, no con reposo ni con corticoide. 12 semanas de excéntricos o carga lenta pesada.",
    keyPoints: [
      "Tendinopatía = degenerativa por sobrecarga.",
      "Primera línea: ejercicio de carga progresiva (Alfredson, HSR) 12 semanas.",
      "Evitar corticoide intratendinoso y fluoroquinolonas.",
    ],
  }),
  q({
    id: "udea-dep-14",
    examArea: "MEDICINA DEL DEPORTE",
    topic: "ESPONDILÓLISIS EN ADOLESCENTES",
    difficulty: "medium",
    tags: ["deporte", "columna", "pediatria"],
    statement:
      "Una gimnasta de 14 años refiere dolor lumbar bajo de 2 meses que empeora con las hiperextensiones y los arcos hacia atrás. No tiene síntomas neurológicos. El dolor se reproduce al pararse en una pierna e hiperextender la columna (prueba de la cigüeña). ¿Cuál es el diagnóstico más probable?",
    options: [
      [
        "Hernia discal lumbar L5–S1.",
        "La hernia discal da dolor con la flexión y suele acompañarse de radiculopatía; es menos frecuente en adolescentes.",
      ],
      ["Espondilólisis de la pars interarticular."],
      [
        "Lumbalgia mecánica inespecífica.",
        "En el adolescente deportista con dolor en extensión de más de 2–3 semanas, la espondilólisis es la causa específica más frecuente y debe estudiarse.",
      ],
      [
        "Enfermedad de Scheuermann.",
        "Produce cifosis torácica rígida con dolor dorsal, no dolor lumbar con la extensión.",
      ],
    ],
    correct: "B",
    explanation:
      "Espondilólisis: fractura por estrés de la pars interarticular (L5 en ~85–95%), causa más común de dolor lumbar de más de 2 semanas en adolescentes deportistas, especialmente en deportes con hiperextensión y rotación repetidas (gimnasia, clavados, ballet, lanzadores de críquet, fútbol).\n\nClínica: dolor lumbar que empeora con la extensión; prueba de la cigüeña (extensión en apoyo monopodal) positiva. Estudio: RM sin contraste (detecta edema óseo sin radiación) o TC para ver consolidación. Tratamiento: suspender la actividad que provoca dolor (6–12 semanas), fisioterapia de estabilización (core), ± corsé; la mayoría vuelve al deporte. Puede progresar a espondilolistesis.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, adolescente que hace arcos y le duele la espalda al extenderse: espondilólisis. La flexión duele en el disco; la extensión, en la pars.",
    keyPoints: [
      "Dolor lumbar en extensión en adolescente deportista = espondilólisis.",
      "Prueba de la cigüeña; RM para diagnóstico temprano.",
      "Tratamiento: reposo deportivo relativo + estabilización lumbopélvica.",
    ],
  }),
  q({
    id: "udea-dep-15",
    examArea: "MEDICINA DEL DEPORTE",
    topic: "SÍNDROME COMPARTIMENTAL CRÓNICO POR ESFUERZO",
    difficulty: "hard",
    tags: ["deporte", "ortopedia"],
    statement:
      "Un corredor de 24 años refiere dolor tipo presión en la cara anterolateral de ambas piernas que aparece siempre a los 15 minutos de correr, se acompaña de parestesias en el dorso del pie y desaparece 20 minutos después de detenerse. En reposo el examen es normal y la radiografía también. ¿Cuál es el estudio que confirma el diagnóstico más probable?",
    options: [
      [
        "Gammagrafía ósea trifásica.",
        "Sirve para fracturas por estrés o periostitis, cuyo dolor persiste en reposo y se localiza en el hueso.",
      ],
      [
        "Electromiografía en reposo.",
        "En reposo suele ser normal; no confirma el aumento de presión inducido por el ejercicio.",
      ],
      ["Medición de la presión intracompartimental antes y después del ejercicio."],
      [
        "Doppler arterial en reposo.",
        "El atrapamiento de la arteria poplítea se estudia con maniobras de provocación, y aquí las parestesias en el dorso del pie orientan a compresión del compartimento anterior.",
      ],
    ],
    correct: "C",
    explanation:
      "Síndrome compartimental crónico por esfuerzo: dolor 'a presión' reproducible que aparece a un tiempo/distancia fija de ejercicio, cede con el reposo (minutos), bilateral en ~70–80%, con parestesias por compresión nerviosa (compartimento anterior: peroneo profundo → dorso del pie, 1.er espacio). Examen en reposo normal.\n\nDiagnóstico: presión intracompartimental (criterios de Pedowitz): ≥15 mmHg en reposo, ≥30 mmHg 1 minuto después o ≥20 mmHg 5 minutos después del ejercicio. Diferenciales: síndrome de estrés tibial medial (dolor posteromedial difuso), fractura por estrés (dolor focal óseo), atrapamiento de la arteria poplítea. Tratamiento: modificar la actividad (técnica de carrera con antepié) y, si falla, fasciotomía.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, dolor que aparece siempre al mismo minuto de correr y se va al parar = compartimental crónico. Se mide la presión después del ejercicio.",
    keyPoints: [
      "Dolor reproducible a la misma carga, cede en reposo, bilateral.",
      "Pedowitz: ≥15 reposo, ≥30 a 1 min o ≥20 a 5 min postejercicio.",
      "Refractario: fasciotomía.",
    ],
  }),
  q({
    id: "udea-dep-16",
    examArea: "MEDICINA DEL DEPORTE",
    topic: "LUXACIÓN GLENOHUMERAL ANTERIOR",
    difficulty: "medium",
    tags: ["deporte", "ortopedia", "hombro"],
    statement:
      "Un jugador de fútbol de 19 años cae con el brazo en abducción y rotación externa; presenta dolor intenso, hombro 'en charretera' y el brazo en rotación externa. Tras radiografías que confirman luxación anterior sin fractura, se reduce con éxito. Es su primer episodio. ¿Cuál es la afirmación correcta sobre su manejo?",
    options: [
      [
        "La inmovilización en rotación interna por 6 semanas elimina el riesgo de recurrencia.",
        "La inmovilización prolongada no ha demostrado reducir la recurrencia y aumenta la rigidez.",
      ],
      [
        "No requiere control radiográfico después de la reducción si recuperó la movilidad.",
        "La radiografía posreducción confirma la congruencia y descarta fracturas asociadas (Hill-Sachs, Bankart óseo, troquíter).",
      ],
      [
        "Debe verificarse el nervio radial porque es el que más se lesiona.",
        "El nervio más lesionado es el axilar (sensibilidad del 'parche' deltoideo y función del deltoides).",
      ],
      ["Por su edad y deporte tiene alto riesgo de recurrencia; debe valorarse la estabilización quirúrgica."],
    ],
    correct: "D",
    explanation:
      "Luxación glenohumeral anterior (95% de las luxaciones de hombro): mecanismo en abducción + rotación externa. Antes y después de la reducción: radiografías y examen neurovascular, sobre todo del nervio axilar.\n\nEl principal factor de riesgo de recurrencia es la EDAD: en menores de 20–25 años con deportes de contacto o de lanzamiento la recurrencia tras un primer episodio manejado de forma conservadora es del 50–90%, por lesión de Bankart (labrum anteroinferior). Por eso, en el deportista joven se considera la estabilización artroscópica tras el primer episodio. Manejo conservador: cabestrillo corto (1–3 semanas) y rehabilitación de manguito y escapulares.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, hombro luxado en un joven deportista se vuelve a salir: refiérelo para valorar cirugía. Y siempre revisa el nervio axilar.",
    keyPoints: [
      "Luxación anterior: abducción + rotación externa; revisar nervio axilar.",
      "<20–25 años + deporte de contacto: recurrencia muy alta.",
      "Joven deportista: considerar estabilización artroscópica temprana.",
    ],
  }),
  q({
    id: "udea-dep-17",
    examArea: "MEDICINA DEL DEPORTE",
    topic: "ANTIDOPAJE Y AUTORIZACIÓN DE USO TERAPÉUTICO",
    difficulty: "medium",
    tags: ["deporte", "dopaje", "wada"],
    statement:
      "Un pesista de 34 años, de selección departamental, tiene hipertensión arterial y su médico general le formuló hidroclorotiazida. Compite en un mes en un evento con control antidopaje. Según el código de la Agencia Mundial Antidopaje (AMA/WADA), ¿cuál es la recomendación correcta?",
    options: [
      [
        "Puede usarla libremente porque es un medicamento formulado por un médico.",
        "Tener fórmula médica no exime: la sustancia está prohibida y el atleta es responsable de lo que hay en su cuerpo (responsabilidad estricta).",
      ],
      ["Los diuréticos están prohibidos en todo momento; debe cambiarse a un antihipertensivo permitido o solicitar una autorización de uso terapéutico."],
      [
        "Solo está prohibida fuera de competencia, así que debe suspenderla durante el evento.",
        "Es al revés: los diuréticos están prohibidos en todo momento (en y fuera de competencia).",
      ],
      [
        "Está permitida si la dosis es menor de 25 mg al día.",
        "No existe un umbral permitido para los diuréticos; cualquier cantidad es un resultado analítico adverso.",
      ],
    ],
    correct: "B",
    explanation:
      "Lista de prohibiciones WADA: los diuréticos y agentes enmascarantes (S5) están prohibidos EN TODO MOMENTO, porque pueden diluir la orina y ocultar otras sustancias, o ayudar a dar el peso en deportes por categorías.\n\nPrincipio de responsabilidad estricta: el atleta responde por cualquier sustancia prohibida encontrada en su muestra, aunque haya sido formulada. Opciones: usar un antihipertensivo permitido (IECA, ARA II, calcioantagonista; los betabloqueadores están prohibidos en algunos deportes de precisión como el tiro y el tiro con arco) o tramitar una Autorización de Uso Terapéutico (AUT/TUE) si no hay alternativa razonable. Ojo: salbutamol inhalado está permitido hasta 1.600 mcg/24 h.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, al deportista que compite, antes de formular revisa la lista WADA. Diurético = prohibido siempre.",
    keyPoints: [
      "Diuréticos: prohibidos en todo momento (agentes enmascarantes).",
      "Responsabilidad estricta del atleta.",
      "Si no hay alternativa: Autorización de Uso Terapéutico (AUT).",
    ],
  }),
  q({
    id: "udea-dep-18",
    examArea: "MEDICINA DEL DEPORTE",
    topic: "AYUDAS ERGOGÉNICAS: CREATINA",
    difficulty: "easy",
    tags: ["deporte", "nutricion", "suplementos"],
    statement:
      "Un velocista universitario de 20 años pregunta qué suplemento tiene la mejor evidencia para mejorar el rendimiento en esfuerzos repetidos de alta intensidad y corta duración y la ganancia de fuerza con el entrenamiento. ¿Cuál es la respuesta correcta?",
    options: [
      ["Monohidrato de creatina."],
      [
        "Aminoácidos de cadena ramificada (BCAA).",
        "Con una ingesta adecuada de proteína no aportan beneficio demostrado en el rendimiento.",
      ],
      [
        "Glutamina.",
        "No ha demostrado mejorar el rendimiento ni la fuerza en deportistas sanos.",
      ],
      [
        "Precursores de testosterona (DHEA, androstenediona).",
        "Están prohibidos por la WADA y no tienen beneficio demostrado; además con frecuencia contaminan suplementos.",
      ],
    ],
    correct: "A",
    explanation:
      "Según el consenso del Comité Olímpico Internacional (2018) y el Instituto Australiano del Deporte (grupo A), los suplementos con evidencia sólida de mejora del rendimiento son: creatina, cafeína, nitratos (jugo de remolacha), beta-alanina y bicarbonato de sodio.\n\nEl monohidrato de creatina aumenta la fosfocreatina muscular, mejora los esfuerzos repetidos de alta intensidad (sprints, levantamientos) y potencia la ganancia de fuerza y masa magra. Dosis: 3–5 g/día (o carga de 20 g/día por 5–7 días). Efecto adverso común: ganancia de peso por agua; no daña el riñón sano a dosis habituales. Riesgo general de suplementos: contaminación con sustancias prohibidas → preferir productos certificados.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, si te preguntan por el ergogénico con más evidencia para potencia, es la creatina. Y advierte sobre suplementos contaminados.",
    keyPoints: [
      "Evidencia sólida: creatina, cafeína, nitratos, beta-alanina, bicarbonato.",
      "Creatina: 3–5 g/día; mejora esfuerzos repetidos y fuerza.",
      "Suplementos contaminados: causa frecuente de doping positivo.",
    ],
  }),
  q({
    id: "udea-dep-19",
    examArea: "MEDICINA DEL DEPORTE",
    topic: "DOLOR PATELOFEMORAL",
    difficulty: "easy",
    tags: ["deporte", "rodilla", "rehabilitacion"],
    statement:
      "Una corredora de 26 años consulta por dolor difuso en la cara anterior de ambas rodillas, que empeora al bajar escaleras, al hacer sentadillas y al permanecer sentada mucho tiempo con las rodillas flexionadas. No hay derrame, inestabilidad ni bloqueo. Se observa valgo dinámico de rodilla al hacer sentadilla monopodal. ¿Cuál es el tratamiento con mejor evidencia?",
    options: [
      [
        "Artroscopia para regularizar el cartílago rotuliano.",
        "La cirugía no tiene papel en el dolor patelofemoral sin lesión estructural.",
      ],
      [
        "Reposo deportivo completo por 3 meses.",
        "El reposo absoluto desacondiciona; se modifica la carga, no se suspende toda actividad.",
      ],
      ["Ejercicios de fortalecimiento de cadera y cuádriceps, con educación y ajuste de la carga."],
      [
        "Infiltración intraarticular de corticoide.",
        "No hay sinovitis ni artrosis que lo justifique; no está recomendada.",
      ],
    ],
    correct: "C",
    explanation:
      "Síndrome de dolor patelofemoral: dolor anterior difuso alrededor de la rótula que empeora con actividades que cargan la articulación en flexión (escaleras, sentadillas, correr, 'signo del cine'). Muy frecuente en corredoras. Factores: debilidad de abductores y rotadores externos de cadera y de cuádriceps, valgo dinámico, aumento brusco de la carga.\n\nConsenso internacional (Crossley, 2016): el tratamiento con mejor evidencia es el ejercicio terapéutico combinado de cadera y rodilla, más educación y modificación de la carga. Coadyuvantes a corto plazo: ortesis plantares prefabricadas, vendaje rotuliano, movilización. Sin indicación de cirugía ni infiltración.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, rodilla que duele al bajar escaleras en una corredora: glúteo medio y cuádriceps. La rodilla se arregla desde la cadera.",
    keyPoints: [
      "Dolor patelofemoral: peor en escaleras, sentadillas y sedestación prolongada.",
      "Tratamiento: fortalecimiento de cadera + cuádriceps, educación.",
      "Cirugía e infiltración no están indicadas.",
    ],
  }),
  q({
    id: "udea-dep-20",
    examArea: "MEDICINA DEL DEPORTE",
    topic: "ENFERMEDAD DE OSGOOD-SCHLATTER",
    difficulty: "easy",
    tags: ["deporte", "pediatria", "apofisitis"],
    statement:
      "Un futbolista de 12 años, en pleno estirón puberal, consulta por dolor en ambas rodillas de 2 meses, localizado en la tuberosidad anterior de la tibia, que empeora al correr, saltar y arrodillarse. La tuberosidad está prominente y dolorosa a la palpación. No hay derrame ni síntomas sistémicos. ¿Cuál es el manejo más adecuado?",
    options: [
      [
        "Inmovilización con yeso inguinopédico por 6 semanas.",
        "La inmovilización no está indicada y produce atrofia y rigidez.",
      ],
      [
        "Resección quirúrgica del osículo de la tuberosidad.",
        "Solo se considera en adultos con osículo sintomático persistente tras el cierre fisario.",
      ],
      [
        "Resonancia magnética urgente para descartar tumor óseo.",
        "El cuadro es típico, bilateral y sin signos de alarma (dolor nocturno, síntomas sistémicos, masa); no requiere RM urgente.",
      ],
      ["Manejo conservador: ajustar la carga deportiva según el dolor, hielo, estiramientos de cuádriceps e isquiotibiales y educación sobre su curso benigno."],
    ],
    correct: "D",
    explanation:
      "Enfermedad de Osgood-Schlatter: apofisitis por tracción del tendón rotuliano sobre la tuberosidad tibial anterior en adolescentes en crecimiento rápido que practican deportes de salto y carrera (fútbol, baloncesto, voleibol). Bilateral en 20–30%. Diagnóstico clínico; la radiografía puede mostrar fragmentación.\n\nEs autolimitada (resuelve con el cierre de la fisis, 12–24 meses). Manejo conservador: modificar la carga según el dolor (no reposo absoluto), hielo y analgesia, estiramiento de cuádriceps e isquiotibiales, fortalecimiento, protectores de rodilla. Equivalente en el talón: enfermedad de Sever (apofisitis calcánea).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, niño que está creciendo, juega fútbol y le duele el 'huesito' debajo de la rodilla: Osgood. Se ajusta la carga y se tranquiliza a la familia.",
    keyPoints: [
      "Osgood-Schlatter: apofisitis de la tuberosidad tibial en adolescentes.",
      "Autolimitada; manejo conservador y ajuste de carga.",
      "Sever: equivalente en el calcáneo.",
    ],
  }),
];
