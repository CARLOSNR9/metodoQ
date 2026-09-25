import type { TrainingQuestion } from "@/lib/questions/types";

export const MIR_2026_101_110_QUESTIONS: TrainingQuestion[] = [
  {
    id: "mir-2026-101",
    university: "MIR (España)",
    examArea: "ESTADÍSTICA Y EPIDEMIOLOGÍA",
    topic: "VALOR PREDICTIVO POSITIVO DE UNA PRUEBA DIAGNÓSTICA",
    difficulty: "medium",
    tags: ["mir", "espana", "estadistica"],
    statement:
      "Se evalúa una nueva prueba diagnóstica en 200 personas: 100 tienen la enfermedad (confirmada por el patrón oro) y 100 no la tienen. La prueba resulta positiva en 90 de los enfermos y negativa en 80 de los sanos. En esta muestra, ¿cuál es aproximadamente el valor predictivo positivo de la prueba?",
    options: [
      { id: "A", label: "A", text: "90%." },
      { id: "B", label: "B", text: "82%." },
      { id: "C", label: "C", text: "80%." },
      { id: "D", label: "D", text: "75%." },
    ],
    correctOptionId: "B",
    explanation:
      "Construyendo la tabla 2×2: **verdaderos positivos (VP) = 90**, falsos negativos = 10, **verdaderos negativos = 80** y **falsos positivos (FP) = 20**. La sensibilidad es 90/100 = 90% y la especificidad 80/100 = 80%. El **valor predictivo positivo (VPP)** es la proporción de positivos que realmente están enfermos: **VP / (VP + FP) = 90 / 110 ≈ 82%**.\n\n**TRAMPA DEL EXAMEN:** El 90% es la **sensibilidad** y el 80% la **especificidad**; son propiedades de la prueba, no valores predictivos. El VPP se calcula siempre sobre los resultados positivos (la fila de positivos), no sobre los enfermos (la columna de enfermos).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., en estadística del MIR lo que salva es dibujar la tabla 2×2 antes de hacer cualquier cuenta. Ponga enfermos y sanos en columnas y positivos y negativos en filas. La sensibilidad y la especificidad se leen por columnas (¿cuántos enfermos detecto?, ¿cuántos sanos descarto?). Los valores predictivos se leen por filas: de todos los que dieron positivo, ¿cuántos están de verdad enfermos? Aquí, 90 de 110. Recuerde además que en esta muestra la prevalencia es artificialmente del 50%; en la población real el VPP sería distinto.",
    keyPoints: [
      "VPP = VP / (VP + FP): de los positivos, qué proporción está realmente enferma.",
      "Sensibilidad y especificidad se calculan por columnas (enfermos / sanos); los valores predictivos, por filas (positivos / negativos).",
      "Dibujar siempre la tabla 2×2 antes de calcular evita confundir sensibilidad con VPP.",
    ],
  },
  {
    id: "mir-2026-102",
    university: "MIR (España)",
    examArea: "ESTADÍSTICA Y EPIDEMIOLOGÍA",
    topic: "INFLUENCIA DE LA PREVALENCIA EN LOS VALORES PREDICTIVOS",
    difficulty: "medium",
    tags: ["mir", "espana", "epidemiologia"],
    statement:
      "Una prueba de cribado con sensibilidad del 95% y especificidad del 90%, validada en consultas hospitalarias, se quiere aplicar a la población general, donde la prevalencia de la enfermedad es mucho menor. ¿Qué cabe esperar al aplicarla en la población general?",
    options: [
      { id: "A", label: "A", text: "Disminuirán tanto la sensibilidad como la especificidad de la prueba." },
      { id: "B", label: "B", text: "Aumentará el valor predictivo positivo y disminuirá el valor predictivo negativo." },
      { id: "C", label: "C", text: "Disminuirá el valor predictivo positivo y aumentará el valor predictivo negativo, sin cambios en la sensibilidad ni en la especificidad." },
      { id: "D", label: "D", text: "Los valores predictivos no se modificarán, porque dependen solo de la sensibilidad y la especificidad." },
    ],
    correctOptionId: "C",
    explanation:
      "La **sensibilidad** y la **especificidad** son propiedades intrínsecas de la prueba y **no dependen de la prevalencia**. En cambio, los **valores predictivos sí dependen de la prevalencia**: cuando esta **disminuye**, hay proporcionalmente más falsos positivos entre los positivos, por lo que **baja el VPP**, y casi todos los negativos son verdaderos negativos, por lo que **sube el VPN**.\n\n**TRAMPA DEL EXAMEN:** Pensar que la prueba «funciona peor» (que bajan sensibilidad y especificidad) al cambiar de población. Lo que cambia es la probabilidad posprueba, no la capacidad discriminativa de la prueba.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., piense en una enfermedad rarísima: aunque la prueba sea buena, la mayoría de los positivos serán falsos positivos, simplemente porque hay muchísimos más sanos que enfermos. Por eso los programas de cribado poblacional necesitan una prueba de confirmación: un positivo en población general no es un diagnóstico. Regla para el examen: prevalencia baja, VPP baja y VPN sube; prevalencia alta, al revés. Sensibilidad y especificidad, quietas.",
    keyPoints: [
      "Sensibilidad y especificidad no dependen de la prevalencia; los valores predictivos sí.",
      "Menor prevalencia → menor VPP y mayor VPN.",
      "En cribado poblacional (baja prevalencia) un positivo exige prueba de confirmación.",
    ],
  },
  {
    id: "mir-2026-103",
    university: "MIR (España)",
    examArea: "ESTADÍSTICA Y EPIDEMIOLOGÍA",
    topic: "ELECCIÓN DEL DISEÑO: ESTUDIO DE CASOS Y CONTROLES",
    difficulty: "medium",
    tags: ["mir", "espana", "epidemiologia"],
    statement:
      "Se quiere investigar si la exposición laboral al amianto se asocia al mesotelioma pleural, una enfermedad poco frecuente y con un periodo de latencia de varias décadas. Con recursos y tiempo limitados, ¿cuál es el diseño más eficiente?",
    options: [
      { id: "A", label: "A", text: "Ensayo clínico aleatorizado." },
      { id: "B", label: "B", text: "Estudio de cohortes prospectivo en trabajadores expuestos y no expuestos." },
      { id: "C", label: "C", text: "Estudio transversal de prevalencia en la población general." },
      { id: "D", label: "D", text: "Estudio de casos y controles." },
    ],
    correctOptionId: "D",
    explanation:
      "Para **enfermedades raras** y con **latencia larga**, el diseño más eficiente es el de **casos y controles**: se parte de personas con mesotelioma (casos) y sin él (controles) y se compara retrospectivamente la frecuencia de exposición al amianto. Permite estudiar varias exposiciones a la vez y se analiza con la **odds ratio (OR)**.\n\n**TRAMPA DEL EXAMEN:** Una cohorte prospectiva exigiría seguir a miles de trabajadores durante décadas para observar pocos casos. El ensayo clínico es éticamente imposible (no se puede asignar una exposición dañina) y el estudio transversal no establece la secuencia temporal exposición-enfermedad.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la regla práctica es sencilla: si la enfermedad es rara, empiece por la enfermedad (casos y controles); si la exposición es rara, empiece por la exposición (cohortes). El precio a pagar en casos y controles es la vulnerabilidad a sesgos, sobre todo de memoria y de selección de controles, y que no calcula incidencias directamente, sino la OR, que en enfermedades raras se aproxima bien al riesgo relativo.",
    keyPoints: [
      "Enfermedad rara o de latencia larga → estudio de casos y controles.",
      "Exposición rara → estudio de cohortes.",
      "Casos y controles mide la odds ratio y es especialmente vulnerable al sesgo de memoria y de selección.",
    ],
  },
  {
    id: "mir-2026-104",
    university: "MIR (España)",
    examArea: "ESTADÍSTICA Y EPIDEMIOLOGÍA",
    topic: "NÚMERO NECESARIO A TRATAR (NNT)",
    difficulty: "easy",
    tags: ["mir", "espana", "estadistica"],
    statement:
      "En un ensayo clínico, la mortalidad a un año fue del 20% en el grupo control y del 15% en el grupo tratado con un nuevo fármaco. ¿Cuántos pacientes es necesario tratar durante un año para evitar una muerte?",
    options: [
      { id: "A", label: "A", text: "20 pacientes." },
      { id: "B", label: "B", text: "5 pacientes." },
      { id: "C", label: "C", text: "25 pacientes." },
      { id: "D", label: "D", text: "4 pacientes." },
    ],
    correctOptionId: "A",
    explanation:
      "La **reducción absoluta del riesgo (RAR)** es la diferencia de riesgos: **20% − 15% = 5% (0,05)**. El **número necesario a tratar (NNT)** es su inverso: **1 / 0,05 = 20**. Hay que tratar a 20 pacientes durante un año para evitar una muerte. La **reducción relativa del riesgo** sería 5/20 = 25%.\n\n**TRAMPA DEL EXAMEN:** Calcular el NNT con la reducción relativa (1/0,25 = 4) o con el riesgo del grupo tratado. El NNT siempre se calcula con la **reducción absoluta**.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la reducción relativa del riesgo impresiona más (un 25% suena espectacular), por eso es la que suele aparecer en la publicidad de un fármaco. Pero la que le dice cuánto esfuerzo cuesta el beneficio es la absoluta: de cada 100 pacientes tratados, se evitan 5 muertes, así que necesita tratar a 20 para evitar una. Y no olvide que el NNT va unido a un periodo de tiempo: aquí, un año.",
    keyPoints: [
      "RAR = riesgo en controles − riesgo en tratados.",
      "NNT = 1 / RAR (usar la reducción absoluta, nunca la relativa).",
      "El NNT siempre se refiere a un periodo de tratamiento concreto.",
    ],
  },
  {
    id: "mir-2026-105",
    university: "MIR (España)",
    examArea: "ESTADÍSTICA Y EPIDEMIOLOGÍA",
    topic: "INTERPRETACIÓN DEL VALOR P",
    difficulty: "medium",
    tags: ["mir", "espana", "estadistica"],
    statement:
      "En un ensayo que compara dos antihipertensivos se obtiene una diferencia en la presión arterial sistólica con p = 0,03. ¿Cuál es la interpretación correcta de este resultado?",
    options: [
      { id: "A", label: "A", text: "Hay un 3% de probabilidad de que la hipótesis nula sea cierta." },
      { id: "B", label: "B", text: "Hay un 97% de probabilidad de que el nuevo fármaco sea mejor." },
      { id: "C", label: "C", text: "Si no hubiera diferencia real entre los fármacos, la probabilidad de observar una diferencia igual o mayor que la encontrada sería del 3%." },
      { id: "D", label: "D", text: "La diferencia encontrada es clínicamente relevante." },
    ],
    correctOptionId: "C",
    explanation:
      "El **valor p** es la probabilidad de obtener un resultado **igual o más extremo** que el observado **suponiendo que la hipótesis nula es cierta** (que no hay diferencia real). Con p = 0,03 < 0,05 se rechaza la hipótesis nula al nivel de significación habitual, asumiendo un **riesgo de error tipo I (α)**.\n\n**TRAMPA DEL EXAMEN:** El valor p **no** es la probabilidad de que la hipótesis nula sea cierta, ni la de que el fármaco funcione. Tampoco informa de la **relevancia clínica**: una diferencia de 1 mmHg puede ser estadísticamente significativa con una muestra enorme y carecer de importancia clínica.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el valor p responde a una pregunta muy concreta: si los dos fármacos fueran iguales, ¿qué tan raro sería ver esta diferencia por azar? Si es raro (menos de un 5%), sospechamos que no es azar. Pero significación estadística no es importancia clínica; para eso mire el tamaño del efecto y su intervalo de confianza.",
    keyPoints: [
      "Valor p: probabilidad de un resultado igual o más extremo si la hipótesis nula fuera cierta.",
      "No es la probabilidad de que H0 sea cierta ni mide la relevancia clínica.",
      "Rechazar H0 con p < α implica asumir un riesgo de error tipo I (α).",
    ],
  },
  {
    id: "mir-2026-106",
    university: "MIR (España)",
    examArea: "ESTADÍSTICA Y EPIDEMIOLOGÍA",
    topic: "ELECCIÓN DE LA PRUEBA ESTADÍSTICA: ANOVA",
    difficulty: "easy",
    tags: ["mir", "espana", "estadistica"],
    statement:
      "Se quiere comparar la hemoglobina glicada media (variable cuantitativa con distribución normal) entre tres grupos independientes de pacientes diabéticos tratados con tres fármacos distintos. ¿Qué prueba estadística es la más adecuada?",
    options: [
      { id: "A", label: "A", text: "Prueba de chi cuadrado." },
      { id: "B", label: "B", text: "Análisis de la varianza (ANOVA)." },
      { id: "C", label: "C", text: "t de Student para datos apareados." },
      { id: "D", label: "D", text: "Coeficiente de correlación de Pearson." },
    ],
    correctOptionId: "B",
    explanation:
      "Para comparar **medias** de una variable **cuantitativa normal** entre **más de dos grupos independientes** se usa el **ANOVA**. Si la variable no siguiera una distribución normal, la alternativa no paramétrica sería la **prueba de Kruskal-Wallis**. Con **dos** grupos independientes se usaría la **t de Student** (o U de Mann-Whitney si no es normal).\n\n**TRAMPA DEL EXAMEN:** La chi cuadrado compara **proporciones** (variables cualitativas), no medias. La t de Student para datos apareados se usa con **dos mediciones en los mismos sujetos**. La correlación de Pearson mide asociación lineal entre **dos variables cuantitativas**, no compara grupos.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., para elegir la prueba hágase tres preguntas: ¿qué tipo de variable comparo (cualitativa o cuantitativa)?, ¿cuántos grupos tengo?, ¿son independientes o apareados? Cuantitativa normal, tres grupos independientes: ANOVA. Y recuerde que el ANOVA le dice si hay alguna diferencia entre los grupos, no cuál; para eso necesita comparaciones post hoc.",
    keyPoints: [
      "Medias de variable cuantitativa normal en más de 2 grupos independientes → ANOVA.",
      "Si no es normal → Kruskal-Wallis; con 2 grupos → t de Student (o U de Mann-Whitney).",
      "Chi cuadrado compara proporciones de variables cualitativas.",
    ],
  },
  {
    id: "mir-2026-107",
    university: "MIR (España)",
    examArea: "ESTADÍSTICA Y EPIDEMIOLOGÍA",
    topic: "SESGO DE MEMORIA EN ESTUDIOS DE CASOS Y CONTROLES",
    difficulty: "medium",
    tags: ["mir", "espana", "epidemiologia"],
    statement:
      "En un estudio de casos y controles sobre malformaciones congénitas, las madres de niños con malformaciones recuerdan y declaran con más detalle la toma de medicamentos durante el embarazo que las madres de niños sanos. ¿Qué sesgo se está produciendo?",
    options: [
      { id: "A", label: "A", text: "Sesgo de selección por pérdidas en el seguimiento." },
      { id: "B", label: "B", text: "Factor de confusión." },
      { id: "C", label: "C", text: "Sesgo de Berkson." },
      { id: "D", label: "D", text: "Sesgo de memoria (de recuerdo), un tipo de sesgo de información." },
    ],
    correctOptionId: "D",
    explanation:
      "El **sesgo de memoria** aparece cuando los **casos recuerdan la exposición de forma distinta** que los controles: las madres de niños con malformaciones buscan una explicación y revisan con más detalle lo que tomaron. Es un **sesgo de información (clasificación diferencial)** típico de los **estudios de casos y controles**, y tiende a **sobrestimar la asociación**.\n\n**TRAMPA DEL EXAMEN:** Las pérdidas en el seguimiento son propias de los estudios de **cohortes**. El **sesgo de Berkson** es un sesgo de selección por usar casos y controles hospitalarios. Un **factor de confusión** es una tercera variable asociada a la exposición y a la enfermedad, no un error en la medición.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., póngase en el lugar de una madre cuyo hijo nació con una malformación: repasará mil veces cada pastilla que tomó. La madre de un niño sano no tiene ese motivo. Así, la exposición parece más frecuente en los casos de lo que realmente es. Para reducirlo, se usan registros objetivos (historia clínica, receta electrónica) en lugar del recuerdo.",
    keyPoints: [
      "Sesgo de memoria: los casos recuerdan la exposición de forma distinta a los controles.",
      "Es un sesgo de información típico de los estudios de casos y controles.",
      "Se minimiza con fuentes objetivas de exposición (registros clínicos, recetas).",
    ],
  },
  {
    id: "mir-2026-108",
    university: "MIR (España)",
    examArea: "ESTADÍSTICA Y EPIDEMIOLOGÍA",
    topic: "RIESGO RELATIVO Y FRACCIÓN ATRIBUIBLE EN EXPUESTOS",
    difficulty: "hard",
    tags: ["mir", "espana", "epidemiologia"],
    statement:
      "En un estudio de cohortes, 30 de cada 100 fumadores y 10 de cada 100 no fumadores desarrollan una enfermedad durante el seguimiento. ¿Qué proporción de los casos que aparecen en los fumadores puede atribuirse al tabaco?",
    options: [
      { id: "A", label: "A", text: "Aproximadamente el 67%." },
      { id: "B", label: "B", text: "El 20%." },
      { id: "C", label: "C", text: "El 33%." },
      { id: "D", label: "D", text: "El 300%." },
    ],
    correctOptionId: "A",
    explanation:
      "La incidencia en expuestos es 0,30 y en no expuestos 0,10. El **riesgo relativo** es 0,30 / 0,10 = **3**. El **riesgo atribuible** (diferencia de riesgos) es 0,30 − 0,10 = **0,20 (20%)**. La **fracción atribuible en expuestos** es la proporción de la incidencia en expuestos debida a la exposición: **(0,30 − 0,10) / 0,30 = 0,67 ≈ 67%**, equivalente a **(RR − 1) / RR = 2/3**.\n\n**TRAMPA DEL EXAMEN:** El 20% es el **riesgo atribuible** (casos en exceso por cada 100 expuestos), no la fracción atribuible. El 33% es la incidencia que se mantendría sin tabaco dividida entre la de los fumadores (0,10/0,30).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., lea bien qué le preguntan. «Cuántos casos de más por cada 100 fumadores» es el riesgo atribuible: 20. «Qué porcentaje de los casos en fumadores se debe al tabaco» es la fracción atribuible en expuestos: dos de cada tres, porque sin tabaco habrían enfermado igualmente 10 de esos 30.",
    keyPoints: [
      "RR = incidencia en expuestos / incidencia en no expuestos.",
      "Riesgo atribuible = diferencia de incidencias (casos en exceso por la exposición).",
      "Fracción atribuible en expuestos = (Ie − Io) / Ie = (RR − 1) / RR.",
    ],
  },
  {
    id: "mir-2026-109",
    university: "MIR (España)",
    examArea: "ESTADÍSTICA Y EPIDEMIOLOGÍA",
    topic: "SESGO DE ADELANTO DIAGNÓSTICO EN EL CRIBADO",
    difficulty: "hard",
    tags: ["mir", "espana", "epidemiologia"],
    statement:
      "Tras implantar un programa de cribado de un cáncer, la supervivencia a 5 años desde el diagnóstico aumenta claramente, pero la mortalidad por ese cáncer en la población no se modifica. ¿Qué explica mejor este hallazgo?",
    options: [
      { id: "A", label: "A", text: "El programa de cribado es eficaz porque mejora la supervivencia." },
      { id: "B", label: "B", text: "Sesgo de adelanto diagnóstico (lead-time bias)." },
      { id: "C", label: "C", text: "Sesgo de Berkson." },
      { id: "D", label: "D", text: "Aumento de la especificidad de la prueba de cribado." },
    ],
    correctOptionId: "B",
    explanation:
      "El **sesgo de adelanto diagnóstico** ocurre porque el cribado **adelanta el momento del diagnóstico** sin retrasar el de la muerte: el tiempo desde el diagnóstico hasta la muerte se alarga «artificialmente» y la **supervivencia parece mayor**, aunque el paciente muera en la misma fecha. Por eso la eficacia de un cribado se debe demostrar con la **reducción de la mortalidad** específica en ensayos aleatorizados, no con la supervivencia desde el diagnóstico.\n\n**TRAMPA DEL EXAMEN:** Interpretar el aumento de supervivencia como eficacia del cribado. Otros sesgos del cribado son el **sesgo de duración** (se detectan más los tumores lentos) y el **sobrediagnóstico**.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., imagine a un paciente que va a morir en 2030 haga lo que haga. Si el cáncer se le diagnostica en 2027 por síntomas, sobrevive 3 años; si se le diagnostica en 2024 por cribado, «sobrevive» 6. No vivió ni un día más: solo supo antes que estaba enfermo. Por eso, para evaluar un cribado, mire la mortalidad.",
    keyPoints: [
      "Adelanto diagnóstico: el cribado alarga la supervivencia aparente sin retrasar la muerte.",
      "La eficacia de un cribado se mide por reducción de la mortalidad, no por la supervivencia desde el diagnóstico.",
      "Otros sesgos del cribado: sesgo de duración y sobrediagnóstico.",
    ],
  },
  {
    id: "mir-2026-110",
    university: "MIR (España)",
    examArea: "ESTADÍSTICA Y EPIDEMIOLOGÍA",
    topic: "INTERPRETACIÓN DEL INTERVALO DE CONFIANZA",
    difficulty: "medium",
    tags: ["mir", "espana", "estadistica"],
    statement:
      "Un ensayo clínico que compara un nuevo fármaco con placebo obtiene un riesgo relativo de ictus de 0,80, con un intervalo de confianza del 95% de 0,62 a 1,03. ¿Cuál es la interpretación correcta?",
    options: [
      { id: "A", label: "A", text: "El fármaco reduce de forma estadísticamente significativa el riesgo de ictus en un 20%." },
      { id: "B", label: "B", text: "El fármaco aumenta el riesgo de ictus." },
      { id: "C", label: "C", text: "La diferencia no es estadísticamente significativa, porque el intervalo de confianza incluye el 1." },
      { id: "D", label: "D", text: "Queda demostrado que el fármaco no tiene ningún efecto sobre el ictus." },
    ],
    correctOptionId: "C",
    explanation:
      "En medidas de asociación relativas (RR, OR, HR), el **valor nulo es 1**. Si el **intervalo de confianza del 95% incluye el 1**, el resultado **no es estadísticamente significativo** (p > 0,05). Aquí el IC va de 0,62 (reducción del 38%) a 1,03 (aumento del 3%): los datos son compatibles tanto con un beneficio importante como con ningún efecto.\n\n**TRAMPA DEL EXAMEN:** Leer solo la estimación puntual (0,80, «reduce un 20%») e ignorar el intervalo. Tampoco se puede concluir que el fármaco no tenga efecto: **ausencia de significación no es demostración de ausencia de efecto**; quizá el estudio no tenía potencia suficiente.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., mire siempre el intervalo antes que el número central. Para riesgos relativos, el 1 es la frontera: si el intervalo cruza el 1, no hay significación. Para diferencias de medias o de riesgos, la frontera es el 0. Y un intervalo ancho como este le está diciendo que al estudio le faltaron pacientes o eventos para ser concluyente.",
    keyPoints: [
      "Para RR, OR o HR el valor nulo es 1; para diferencias, 0.",
      "IC95% que incluye el valor nulo → resultado no significativo (p > 0,05).",
      "No significativo no demuestra ausencia de efecto: puede faltar potencia estadística.",
    ],
  },
];
