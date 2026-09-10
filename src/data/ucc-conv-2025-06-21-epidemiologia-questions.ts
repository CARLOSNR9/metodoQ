import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición 21 jun 2025 · Epidemiología y salud pública (#51–#80).
 */
export const UCC_CONV_2025_06_21_EPI_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2025-06-21-51",
    university: "UCC",
    examArea: "Epidemiología / Medidas de frecuencia",
    topic: "Epidemiología",
    difficulty: "easy",
    tags: ["ucc", "convocatoria", "2025_06_21", "epidemiologia", "prevalencia", "incidencia"],
    statement:
      "En un municipio de 100 000 habitantes se realiza un estudio transversal en enero de 2025 y se encuentran 800 personas con diabetes mellitus tipo 2. Durante el mismo año se diagnosticaron 120 casos nuevos de diabetes en la población general. ¿Cuál afirmación describe CORRECTAMENTE estas medidas?",
    options: [
      {
        id: "A",
        label: "A",
        text: "800 casos corresponden a la incidencia acumulada y 120 a la prevalencia puntual del año.",
        distractorProfile: "invertir_prevalencia_incidencia",
        incorrectFeedback:
          "La incidencia cuenta casos nuevos en un periodo; la prevalencia es el total de existentes en un momento o periodo.",
      },
      {
        id: "B",
        label: "B",
        text: "800 casos corresponden a la prevalencia y 120 a la incidencia del periodo 2025.",
      },
      {
        id: "C",
        label: "C",
        text: "Ambas cifras miden lo mismo porque provienen del mismo año.",
        distractorProfile: "prevalencia_igual_incidencia",
        incorrectFeedback:
          "Prevalencia e incidencia son medidas distintas: existentes vs nuevos.",
      },
      {
        id: "D",
        label: "D",
        text: "120 casos representan la prevalencia porque son los diagnosticados en consulta.",
        distractorProfile: "diagnosticados_son_prevalencia",
        incorrectFeedback:
          "Los casos diagnosticados por primera vez en un año definen incidencia, no prevalencia total.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Prevalencia = casos existentes (800 en estudio transversal). Incidencia = casos nuevos en un periodo (120 en 2025).",
    keyPoints: [
      "Prevalencia: casos existentes / población.",
      "Incidencia: casos nuevos / población en riesgo / tiempo.",
      "No confundir diagnósticos nuevos con prevalencia total.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de epidemiología básica porque evalúa la diferencia entre dos medidas de frecuencia que los estudiantes confunden con facilidad: prevalencia e incidencia.

La clave no es de dónde salen los números ni en qué año se recogieron.
La clave es:
Prevalencia = casos existentes en un momento dado. Incidencia = casos nuevos que aparecen durante un periodo.

¿Qué está ocurriendo realmente?
El escenario presenta:
• Población de 100 000 habitantes.
• Estudio transversal en enero de 2025 (una "fotografía" del momento): 800 personas con diabetes tipo 2 ya diagnosticada, sin importar cuándo se diagnosticaron.
• Durante todo el año 2025: 120 casos nuevos diagnosticados.

Recordemos prevalencia vs incidencia:
• Prevalencia: número de casos existentes (nuevos + antiguos) / población total, medida en un punto o periodo. Aquí: 800 casos existentes en el corte transversal de enero.
• Incidencia (acumulada): número de casos nuevos / población en riesgo, durante un periodo definido. Aquí: 120 casos nuevos diagnosticados a lo largo de 2025.
• La prevalencia depende de la incidencia y de la duración de la enfermedad (una enfermedad crónica como la diabetes acumula muchos casos prevalentes aunque la incidencia anual sea baja).

Por lo tanto:
800 = prevalencia (casos existentes en el corte transversal); 120 = incidencia del año 2025 (casos nuevos).

¿Por qué la opción B es la respuesta correcta?
Asigna correctamente cada cifra a su medida: 800 (existentes, estudio transversal) = prevalencia; 120 (nuevos diagnósticos en el año) = incidencia.

¿Por qué fallan las otras opciones?
Opción A (invierte los términos): confunde el número mayor de casos existentes con incidencia y el de casos nuevos con prevalencia puntual; es exactamente al revés.
Opción C (ambas miden lo mismo): prevalencia e incidencia son conceptualmente distintas (existentes vs. nuevos) aunque provengan del mismo año calendario.
Opción D (120 = prevalencia): los diagnosticados por primera vez en un periodo son, por definición, casos incidentes, no la prevalencia total de la enfermedad.

¿Cuál es la trampa del examen?
Muchos estudiantes ven el número más grande (800) y asumen que corresponde a "más eventos ocurriendo", asociándolo erróneamente con incidencia.
Pero el examen exige distinguir:
Un corte transversal (foto fija) mide prevalencia; un seguimiento durante un periodo que cuenta solo diagnósticos nuevos mide incidencia.
El dato decisivo es:
"Estudio transversal en enero" (prevalencia) vs. "durante el mismo año se diagnosticaron" (incidencia).

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar si la medición es un corte puntual (prevalencia) o un seguimiento temporal (incidencia).
2. Prevalencia = casos existentes / población, en un momento o periodo corto.
3. Incidencia = casos nuevos / población en riesgo, durante un periodo definido.
4. No confundir "número grande" con incidencia ni "diagnóstico nuevo" con prevalencia total.

Perlas de examen
✅ Prevalencia: fotografía de casos existentes en un momento.
✅ Incidencia: casos nuevos durante un periodo de seguimiento.
✅ En enfermedades crónicas, la prevalencia > incidencia porque los casos se acumulan.
✅ Estudio transversal → prevalencia; estudio de seguimiento → incidencia.
✅ Prevalencia ≈ Incidencia × duración de la enfermedad (en estado estable).

Referencias
• Gordis — Epidemiology.
• Fletcher & Fletcher — Clinical Epidemiology: The Essentials.
• CDC — Principles of Epidemiology in Public Health Practice.`,
  },
  {
    id: "ucc-conv-2025-06-21-52",
    university: "UCC",
    examArea: "Epidemiología / Medidas de asociación",
    topic: "Epidemiología",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "epidemiologia", "odds_ratio", "casos_controles"],
    statement:
      "En un estudio de casos y controles sobre cáncer de pulmón, se obtiene que el odds ratio (OR) de exposición al tabaco es 8.5 (IC 95%: 4.2–17.1). ¿Cuál es la interpretación MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Los expuestos al tabaco tienen 8.5 veces más probabilidad de ser casos que los no expuestos, comparados mediante odds.",
      },
      {
        id: "B",
        label: "B",
        text: "El 8.5% de los fumadores desarrollará cáncer de pulmón.",
        distractorProfile: "or_como_riesgo_absoluto",
        incorrectFeedback:
          "El OR es una medida de asociación relativa, no un riesgo absoluto ni un porcentaje de incidencia.",
      },
      {
        id: "C",
        label: "C",
        text: "No hay asociación porque el intervalo de confianza es amplio.",
        distractorProfile: "ic_amplio_sin_asociacion",
        incorrectFeedback:
          "El IC 95% no incluye 1 (4.2–17.1), por lo que la asociación es estadísticamente significativa.",
      },
      {
        id: "D",
        label: "D",
        text: "El OR demuestra causalidad definitiva del tabaco en cáncer de pulmón.",
        distractorProfile: "or_demuestra_causalidad",
        incorrectFeedback:
          "El OR mide asociación; la causalidad requiere criterios adicionales (temporalidad, consistencia, etc.).",
      },
    ],
    correctOptionId: "A",
    explanation:
      "OR = 8.5 indica que las odds de exposición entre casos son 8.5 veces las de controles. IC excluye 1 → asociación significativa, no implica causalidad por sí sola.",
    keyPoints: [
      "OR compara odds de exposición en casos vs controles.",
      "IC que no incluye 1 → significancia estadística.",
      "Asociación ≠ causalidad automática.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de bioestadística/epidemiología porque evalúa la interpretación correcta del odds ratio (OR) en un estudio de casos y controles, distinguiendo asociación de riesgo absoluto y de causalidad.

La clave no es convertir el OR en un porcentaje de riesgo individual.
La clave es:
El OR es una medida de asociación relativa entre exposición y desenlace (odds en casos vs. odds en controles), no un riesgo absoluto ni una prueba de causalidad por sí sola.

¿Qué está ocurriendo realmente?
El escenario presenta:
• Estudio de casos y controles sobre cáncer de pulmón.
• OR de exposición al tabaco = 8.5.
• IC 95%: 4.2-17.1 (no incluye el valor nulo 1).

Recordemos qué mide el OR en casos y controles:
• Se parte del desenlace (casos vs. controles) y se compara la frecuencia de exposición pasada entre ambos grupos.
• OR = (odds de exposición en casos) / (odds de exposición en controles).
• Un OR = 8.5 significa que las odds de haber estado expuesto al tabaco son 8.5 veces mayores entre los casos que entre los controles.
• El IC 95% informa la precisión de la estimación: si no incluye 1, la asociación es estadísticamente significativa a α = 0.05.
• Asociación estadística ≠ causalidad: causalidad requiere además temporalidad, consistencia, gradiente biológico, plausibilidad, entre otros criterios (Bradford Hill).

Por lo tanto:
El OR = 8.5 expresa cuántas veces más probables son las odds de exposición al tabaco entre los casos frente a los controles; el IC que excluye 1 confirma significancia estadística, pero no equivale a un riesgo absoluto ni demuestra causalidad por sí solo.

¿Por qué la opción A es la respuesta correcta?
Interpreta el OR como lo que realmente es: una comparación de odds de exposición entre casos y controles, sin convertirlo en riesgo absoluto ni en prueba definitiva de causa-efecto.

¿Por qué fallan las otras opciones?
Opción B (8.5% de los fumadores...): confunde el OR con una incidencia o riesgo absoluto; el OR no da información directa sobre el riesgo absoluto individual, especialmente en casos y controles donde no se puede calcular incidencia.
Opción C (no hay asociación por IC amplio): el IC 95% (4.2-17.1) no incluye 1, por lo que sí hay significancia estadística, aunque el intervalo sea amplio (indica menor precisión, no ausencia de asociación).
Opción D (el OR demuestra causalidad definitiva): la asociación estadística es un paso necesario pero no suficiente para causalidad; se requieren criterios adicionales (temporalidad, consistencia, plausibilidad biológica, relación dosis-respuesta).

¿Cuál es la trampa del examen?
Muchos estudiantes convierten automáticamente cualquier medida de asociación en un porcentaje de riesgo absoluto o, en el extremo opuesto, exigen un IC estrecho para aceptar que existe asociación.
Pero el examen exige reconocer:
El OR compara odds relativas entre grupos definidos por el desenlace; la significancia se define por si el IC excluye 1, no por la amplitud del intervalo ni por convertir el OR en porcentaje.
El dato decisivo es:
IC 95% 4.2-17.1 no cruza 1 → asociación significativa, interpretada como comparación de odds, no como riesgo absoluto ni causalidad automática.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar que el diseño es de casos y controles (se calcula OR, no riesgo relativo directo).
2. Interpretar el OR como razón de odds de exposición entre casos y controles.
3. Revisar el IC 95%: si no incluye 1, hay significancia estadística.
4. No traducir el OR en un porcentaje de riesgo absoluto.
5. Recordar que asociación estadística no equivale automáticamente a causalidad.

Perlas de examen
✅ OR = odds de exposición en casos / odds de exposición en controles.
✅ IC 95% que no incluye 1 → asociación estadísticamente significativa.
✅ El OR no es un riesgo absoluto ni un porcentaje de incidencia.
✅ Asociación ≠ causalidad; se requieren criterios de Bradford Hill adicionales.
✅ En casos y controles no se calcula incidencia directa, solo OR como aproximación al RR (válida si la enfermedad es rara).

Referencias
• Gordis — Epidemiology.
• Rothman — Modern Epidemiology.
• Hill AB — The Environment and Disease: Association or Causation?`,
  },
  {
    id: "ucc-conv-2025-06-21-53",
    university: "UCC",
    examArea: "Epidemiología / Medidas de asociación",
    topic: "Epidemiología",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "epidemiologia", "riesgo_relativo", "rar"],
    statement:
      "Un ensayo clínico reporta que el riesgo de infarto en el grupo tratamiento es 2% y en placebo 5%. ¿Cuál es la reducción absoluta del riesgo (RAR) y el riesgo relativo (RR)?",
    options: [
      {
        id: "A",
        label: "A",
        text: "RAR = 3%; RR = 0.4 (reducción relativa del 60%).",
      },
      {
        id: "B",
        label: "B",
        text: "RAR = 60%; RR = 2.5.",
        distractorProfile: "confundir_rar_rr",
        incorrectFeedback:
          "RAR = 5% − 2% = 3%. RR = 2%/5% = 0.4. No invertir las medidas.",
      },
      {
        id: "C",
        label: "C",
        text: "RAR = 3%; RR = 2.5.",
        distractorProfile: "rr_invertido",
        incorrectFeedback:
          "RR = riesgo tratamiento / riesgo control = 0.02/0.05 = 0.4, no 2.5.",
      },
      {
        id: "D",
        label: "D",
        text: "RAR = 2%; RR = 0.6.",
        distractorProfile: "rar_solo_riesgo_tratamiento",
        incorrectFeedback:
          "RAR es la diferencia absoluta entre grupos (5% − 2% = 3%), no el riesgo del tratamiento solo.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "RAR = 5% − 2% = 3%. RR = 2%/5% = 0.4 (reducción relativa 60%). RAR es clínicamente útil para NNT.",
    keyPoints: [
      "RAR = riesgo control − riesgo tratamiento.",
      "RR = riesgo tratamiento / riesgo control.",
      "RR 0.4 = 60% de reducción relativa.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-54",
    university: "UCC",
    examArea: "Epidemiología / Medidas de asociación",
    topic: "Epidemiología",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "epidemiologia", "nnt", "rar"],
    statement:
      "Un estudio muestra que un fármaco reduce el riesgo de stroke de 4% a 1% en 5 años. ¿Cuál es el número necesario a tratar (NNT) para prevenir un stroke en 5 años?",
    options: [
      {
        id: "A",
        label: "A",
        text: "NNT ≈ 33 (RAR 3%).",
      },
      {
        id: "B",
        label: "B",
        text: "NNT ≈ 3 porque el riesgo baja de 4 a 1.",
        distractorProfile: "nnt_division_invertida",
        incorrectFeedback:
          "NNT = 1/RAR = 1/0.03 ≈ 33, no 3.",
      },
      {
        id: "C",
        label: "C",
        text: "NNT ≈ 25 (RAR 4%).",
        distractorProfile: "rar_riesgo_inicial",
        incorrectFeedback:
          "RAR = 4% − 1% = 3%, no 4%. NNT = 1/0.03 ≈ 33.",
      },
      {
        id: "D",
        label: "D",
        text: "NNT no puede calcularse sin intervalo de confianza.",
        distractorProfile: "nnt_requiere_ic",
        incorrectFeedback:
          "NNT se calcula como 1/RAR con los riesgos absolutos del estudio.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "RAR = 4% − 1% = 3% = 0.03. NNT = 1/0.03 ≈ 33 pacientes tratados 5 años para prevenir un stroke.",
    keyPoints: [
      "NNT = 1 / RAR.",
      "RAR = riesgo control − riesgo intervención.",
      "NNT bajo = mayor beneficio clínico.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-55",
    university: "UCC",
    examArea: "Epidemiología / Diagnóstico",
    topic: "Epidemiología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_06_21", "epidemiologia", "sensibilidad", "especificidad", "vpp"],
    statement:
      "Una prueba de VIH tiene sensibilidad 99% y especificidad 95%. En una población con prevalencia de VIH del 1%, ¿cuál afirmación es CORRECTA sobre el valor predictivo positivo (VPP)?",
    options: [
      {
        id: "A",
        label: "A",
        text: "El VPP será bajo (~16%) porque, aunque la especificidad es alta, la baja prevalencia genera muchos falsos positivos relativos.",
      },
      {
        id: "B",
        label: "B",
        text: "El VPP será ~99% porque la sensibilidad de la prueba es 99%.",
        distractorProfile: "vpp_igual_sensibilidad",
        incorrectFeedback:
          "El VPP depende de sensibilidad, especificidad y prevalencia; no es igual a la sensibilidad.",
      },
      {
        id: "C",
        label: "C",
        text: "El VPP será ~95% porque la especificidad es 95%.",
        distractorProfile: "vpp_igual_especificidad",
        incorrectFeedback:
          "El VPP no es igual a la especificidad; con baja prevalencia hay más falsos positivos de los que intuitivamente se espera.",
      },
      {
        id: "D",
        label: "D",
        text: "El VPP será ~50% porque la prevalencia es 1%.",
        distractorProfile: "vpp_igual_prevalencia",
        incorrectFeedback:
          "El VPP no es igual a la prevalencia; debe calcularse con sensibilidad y especificidad (Bayes).",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Con prevalencia baja (1%), incluso alta especificidad deja muchos falsos positivos vs pocos verdaderos positivos; VPP ≈ 16%. Por eso el tamizaje requiere confirmación.",
    keyPoints: [
      "VPP sube con mayor prevalencia.",
      "Alta sensibilidad ≠ alto VPP si prevalencia es baja.",
      "Tamizaje positivo debe confirmarse.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-56",
    university: "UCC",
    examArea: "Epidemiología / Diagnóstico",
    topic: "Epidemiología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_06_21", "epidemiologia", "curva_roc", "punto_corte"],
    statement:
      "Se compara dos puntos de corte de una prueba diagnóstica para diabetes. El punto A maximiza la sensibilidad (98%) pero tiene especificidad 70%. El punto B maximiza la especificidad (95%) con sensibilidad 75%. ¿Cuál es la elección MÁS apropiada para tamizaje poblacional en adultos asintomáticos?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Punto A, porque en tamizaje se prioriza alta sensibilidad para minimizar falsos negativos.",
      },
      {
        id: "B",
        label: "B",
        text: "Punto B, porque en tamizaje siempre se prioriza especificidad sobre sensibilidad.",
        distractorProfile: "especificidad_en_tamizaje",
        incorrectFeedback:
          "En tamizaje se prioriza sensibilidad (SnNout) para no perder casos; la especificidad alta deja pasar más enfermos no detectados.",
      },
      {
        id: "C",
        label: "C",
        text: "Cualquier punto es equivalente si el área bajo la curva ROC es la misma.",
        distractorProfile: "auc_unico_criterio",
        incorrectFeedback:
          "Misma AUC no implica mismo rendimiento clínico; el punto de corte define sensibilidad/especificidad según objetivo (tamizaje vs confirmación).",
      },
      {
        id: "D",
        label: "D",
        text: "Ninguno sirve; la prueba debe tener sensibilidad y especificidad ambas >99%.",
        distractorProfile: "perfeccion_imposible_tamizaje",
        incorrectFeedback:
          "Ninguna prueba real alcanza perfección; el tamizaje busca sensibilidad alta aceptando más falsos positivos confirmables.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Tamizaje: priorizar sensibilidad alta (punto A) para detectar la mayoría de enfermos; falsos positivos se filtran con prueba confirmatoria. Punto B sería más útil para confirmación.",
    keyPoints: [
      "Tamizaje: alta sensibilidad (SnNout).",
      "Confirmación: alta especificidad (SpPin).",
      "Punto de corte depende del objetivo clínico.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-57",
    university: "UCC",
    examArea: "Epidemiología / Diseños de estudio",
    topic: "Epidemiología",
    difficulty: "easy",
    tags: ["ucc", "convocatoria", "2025_06_21", "epidemiologia", "eca", "ensayo_clinico"],
    statement:
      "¿Cuál es la principal ventaja metodológica de un ensayo clínico aleatorizado (ECA) frente a un estudio de cohorte observacional al evaluar una nueva intervención?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Permite controlar factores de confusión mediante la asignación aleatoria de la exposición.",
      },
      {
        id: "B",
        label: "B",
        text: "Requiere menos participantes que cualquier otro diseño.",
        distractorProfile: "eca_menor_muestra",
        incorrectFeedback:
          "Los ECA suelen requerir muestras grandes y son costosos; no son necesariamente los más pequeños.",
      },
      {
        id: "C",
        label: "C",
        text: "Garantiza que todos los participantes reciban el tratamiento más efectivo.",
        distractorProfile: "eca_garantiza_mejor_tratamiento",
        incorrectFeedback:
          "En ECA se compara intervención vs control/placebo; no se garantiza el mejor tratamiento al inicio.",
      },
      {
        id: "D",
        label: "D",
        text: "Elimina el sesgo de memoria porque siempre es retrospectivo.",
        distractorProfile: "eca_retrospectivo",
        incorrectFeedback:
          "Los ECA son prospectivos; la aleatorización reduce confusión, no son retrospectivos.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "La aleatorización equilibra factores conocidos y desconocidos entre grupos, minimizando confusión y permitiendo inferencia causal más sólida que cohortes observacionales.",
    keyPoints: [
      "ECA: aleatorización → control de confusión.",
      "Diseño prospectivo con intervención controlada.",
      "Estándar de oro para eficacia de tratamientos.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de diseños de estudio porque evalúa por qué el ensayo clínico aleatorizado (ECA) es considerado el estándar de oro para evaluar eficacia frente a diseños observacionales como la cohorte.

La clave no es el tamaño de muestra ni la "garantía" de recibir el mejor tratamiento.
La clave es:
La asignación aleatoria de la exposición (aleatorización) distribuye de forma equilibrada los factores de confusión conocidos y desconocidos entre los grupos comparados.

¿Qué está ocurriendo realmente?
El escenario plantea:
• Comparación metodológica entre un ECA y una cohorte observacional para evaluar una nueva intervención.
• Se pregunta por la principal ventaja del ECA sobre el diseño observacional.

Recordemos ECA vs. cohorte observacional:
• Cohorte observacional: el investigador no asigna la exposición; los propios sujetos (o su entorno clínico) determinan quién se expone y quién no, lo que deja espacio para confusión y sesgo de indicación.
• ECA: el investigador asigna aleatoriamente la exposición (intervención vs. control/placebo), de modo que, en promedio, los grupos quedan balanceados tanto en variables conocidas (edad, comorbilidades) como en variables desconocidas o no medidas.
• Este balance permite atribuir las diferencias de desenlace a la intervención con mayor confianza causal.
• Los ECA son prospectivos, controlados, y generalmente requieren cálculo de tamaño de muestra basado en el efecto esperado (no son "los más pequeños").

Por lo tanto:
La principal ventaja del ECA es controlar la confusión mediante la aleatorización, permitiendo una inferencia causal más robusta que un estudio de cohorte observacional.

¿Por qué la opción A es la respuesta correcta?
Identifica correctamente que la aleatorización distribuye de forma equitativa los factores de confusión (medidos y no medidos) entre los grupos comparados, lo que constituye la fortaleza metodológica central del ECA.

¿Por qué fallan las otras opciones?
Opción B (requiere menos participantes): los ECA suelen requerir muestras grandes calculadas por poder estadístico y son costosos y prolongados; no son el diseño con menor tamaño muestral.
Opción C (garantiza el mejor tratamiento a todos): en un ECA los participantes se asignan a intervención o control/placebo precisamente porque no se sabe de antemano cuál es superior; no hay garantía de recibir el "mejor" tratamiento.
Opción D (elimina sesgo de memoria porque es retrospectivo): los ECA son diseños prospectivos, no retrospectivos; el control de la confusión se logra por aleatorización, no por evitar el recall bias (propio de diseños retrospectivos como casos y controles).

¿Cuál es la trampa del examen?
Muchos estudiantes asocian "ECA = mejor diseño" con ventajas genéricas (menor muestra, mejor tratamiento garantizado) sin identificar el mecanismo real de su superioridad.
Pero el examen exige precisar:
La ventaja específica del ECA es la aleatorización como herramienta de control de confusión, no el tamaño muestral ni la temporalidad retrospectiva.
El dato decisivo es:
"Asignación aleatoria de la exposición" como diferenciador frente al diseño observacional de cohorte.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Reconocer que en la cohorte observacional la exposición no es controlada por el investigador.
2. Identificar que el ECA asigna aleatoriamente la intervención.
3. Entender que la aleatorización balancea factores de confusión conocidos y desconocidos.
4. Concluir que esto permite una inferencia causal más fuerte que la cohorte observacional.

Perlas de examen
✅ ECA: aleatorización → control de confusión conocida y desconocida.
✅ ECA es diseño prospectivo y experimental, no retrospectivo.
✅ ECA no garantiza menor tamaño de muestra ni el mejor tratamiento a todos.
✅ Cohorte observacional: mayor riesgo de confusión y sesgo de indicación.
✅ ECA = estándar de oro para evaluar eficacia de intervenciones.

Referencias
• Gordis — Epidemiology.
• Fletcher & Fletcher — Clinical Epidemiology: The Essentials.
• CONSORT Statement — Randomized Controlled Trials.`,
  },
  {
    id: "ucc-conv-2025-06-21-58",
    university: "UCC",
    examArea: "Epidemiología / Diseños de estudio",
    topic: "Epidemiología",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "epidemiologia", "casos_controles", "sesgo_memoria"],
    statement:
      "Un investigador quiere estudiar la asociación entre exposición a pesticidas y leucemia en adultos, enfermedad poco frecuente con latencia larga. ¿Cuál diseño es MÁS apropiado y cuál es su principal limitación?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Estudio de casos y controles; limitación principal: sesgo de memoria (recall bias) en la exposición retrospectiva.",
      },
      {
        id: "B",
        label: "B",
        text: "Estudio transversal; limitación principal: no puede calcular incidencia.",
        distractorProfile: "transversal_enfermedad_rara",
        incorrectFeedback:
          "El transversal es poco eficiente para enfermedades raras y no establece temporalidad adecuada para exposiciones remotas.",
      },
      {
        id: "C",
        label: "C",
        text: "Cohorte prospectiva de toda la población general; sin limitaciones metodológicas.",
        distractorProfile: "cohorte_sin_limitaciones",
        incorrectFeedback:
          "Cohorte prospectiva sería ideal metodológicamente pero impracticable (enfermedad rara, latencia larga, costo/tiempo enorme).",
      },
      {
        id: "D",
        label: "D",
        text: "Serie de casos; permite estimar riesgo relativo con alta validez.",
        distractorProfile: "serie_casos_rr",
        incorrectFeedback:
          "Serie de casos no tiene grupo comparativo; no estima medidas de asociación como RR u OR válidas.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Casos y controles es eficiente para enfermedades raras; se parte del desenlace. Limitación clásica: sesgo de memoria al indagar exposiciones pasadas.",
    keyPoints: [
      "Casos-controles: eficiente para enfermedades raras.",
      "Retrospectivo en exposición → recall bias.",
      "Calcula OR, no incidencia directa.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de diseños de estudio porque evalúa la selección del diseño más eficiente para investigar una enfermedad poco frecuente con periodo de latencia largo, junto con su principal limitación metodológica.

La clave no es elegir el diseño "ideal" en teoría sin considerar su factibilidad.
La clave es:
Para enfermedades raras con latencia larga, el estudio de casos y controles es el más eficiente, a costa del sesgo de memoria al indagar exposiciones pasadas.

¿Qué está ocurriendo realmente?
El escenario presenta:
• Exposición de interés: pesticidas.
• Desenlace: leucemia en adultos, descrita como enfermedad poco frecuente con latencia larga.
• Se pregunta el diseño más apropiado y su principal limitación.

Recordemos casos y controles vs. otros diseños en enfermedades raras:
• Casos y controles: parte del desenlace (identifica casos con leucemia y controles sin ella) e indaga retrospectivamente la exposición pasada a pesticidas. Es eficiente en tiempo, costo y tamaño de muestra para enfermedades raras.
• Cohorte prospectiva de la población general: metodológicamente atractiva (permite calcular incidencia y RR directamente), pero impracticable aquí por el bajo número de eventos esperados y la latencia larga, que exigiría seguir a poblaciones enormes durante muchos años.
• Estudio transversal: mide prevalencia en un punto del tiempo; ineficiente para enfermedades raras y no distingue adecuadamente la secuencia temporal exposición-enfermedad en exposiciones remotas.
• Serie de casos: describe únicamente pacientes con el desenlace, sin grupo comparativo, por lo que no permite calcular medidas de asociación válidas (RR, OR).

Por lo tanto:
El diseño de casos y controles es el más apropiado para esta situación, con el sesgo de memoria (recall bias) como su limitación característica al reconstruir retrospectivamente la exposición a pesticidas.

¿Por qué la opción A es la respuesta correcta?
Selecciona el diseño más eficiente para una enfermedad rara de latencia larga (casos y controles) e identifica correctamente su limitación clásica: el sesgo de memoria en la exposición retrospectiva.

¿Por qué fallan las otras opciones?
Opción B (transversal, limitación = no calcula incidencia): además de esa limitación real, el transversal es poco eficiente para enfermedades raras y no establece bien la temporalidad de exposiciones remotas, por lo que no es el diseño más apropiado aquí.
Opción C (cohorte prospectiva sin limitaciones): ninguna cohorte prospectiva está "libre de limitaciones"; además, para una enfermedad rara con latencia larga sería impracticable por el tiempo, costo y tamaño de muestra necesarios.
Opción D (serie de casos con alta validez para RR): la serie de casos carece de grupo control, por lo que no puede calcular RR ni OR con validez; solo describe características clínicas de los casos.

¿Cuál es la trampa del examen?
Muchos estudiantes eligen el diseño "más fuerte" en jerarquía de evidencia (cohorte prospectiva o incluso ECA) sin considerar la factibilidad práctica frente a una enfermedad rara y de latencia larga.
Pero el examen exige correlacionar:
Enfermedad rara + latencia larga = diseño eficiente que parte del desenlace (casos y controles), aceptando su limitación característica (recall bias) como costo metodológico.
El dato decisivo es:
"Enfermedad poco frecuente con latencia larga", que hace impracticable la cohorte prospectiva poblacional.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar que la enfermedad es rara y de latencia larga.
2. Reconocer que la cohorte prospectiva poblacional es impracticable en este escenario.
3. Seleccionar casos y controles como diseño eficiente (parte del desenlace).
4. Anticipar el sesgo de memoria como limitación principal al indagar exposición pasada.

Perlas de examen
✅ Casos y controles: diseño de elección para enfermedades raras.
✅ Limitación clásica de casos y controles: sesgo de memoria (recall bias).
✅ Cohorte prospectiva es ideal en teoría, pero impracticable en enfermedades raras de latencia larga.
✅ Serie de casos no permite calcular medidas de asociación (sin grupo control).
✅ Casos y controles estima OR, no incidencia directa.

Referencias
• Gordis — Epidemiology.
• Rothman — Modern Epidemiology.
• Fletcher & Fletcher — Clinical Epidemiology: The Essentials.`,
  },
  {
    id: "ucc-conv-2025-06-21-59",
    university: "UCC",
    examArea: "Epidemiología / Diseños de estudio",
    topic: "Epidemiología",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "epidemiologia", "cohorte", "confusion"],
    statement:
      "En una cohorte prospectiva de 10 000 trabajadores expuestos a polvo de sílice se comparan con 10 000 no expuestos durante 20 años. Se observa mayor riesgo de silicosis en expuestos, pero los expuestos también fumaban más tabaco. ¿Cuál es la principal amenaza a la validez y cómo se aborda?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Confusión por tabaquismo; se aborda estratificando o ajustando por consumo de tabaco en el análisis.",
      },
      {
        id: "B",
        label: "B",
        text: "Sesgo de selección; se aborda aumentando el tamaño muestral únicamente.",
        distractorProfile: "tamano_muestral_confusion",
        incorrectFeedback:
          "El tabaco es un factor de confusión porque se asocia con exposición y desenlace; aumentar n no elimina confusión.",
      },
      {
        id: "C",
        label: "C",
        text: "Sesgo de información; se aborda cegando a los participantes.",
        distractorProfile: "cegamiento_confusion",
        incorrectFeedback:
          "El cegamiento reduce sesgo de información en intervenciones, no controla confusión en cohortes observacionales.",
      },
      {
        id: "D",
        label: "D",
        text: "No hay amenaza porque la cohorte prospectiva elimina toda confusión.",
        distractorProfile: "cohorte_sin_confusion",
        incorrectFeedback:
          "Las cohortes observacionales siguen susceptibles a confusión si no se ajusta por covariables.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Tabaquismo confunde la relación sílice-silicosis (asociado a ambos). Solución: estratificación, regresión multivariable o matching en diseño.",
    keyPoints: [
      "Confusión: factor asociado a exposición y desenlace.",
      "Cohorte observacional no elimina confusión automáticamente.",
      "Ajuste multivariable o estratificación.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-60",
    university: "UCC",
    examArea: "Epidemiología / Revisiones sistemáticas",
    topic: "Epidemiología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_06_21", "epidemiologia", "metaanalisis", "heterogeneidad"],
    statement:
      "Un metaanálisis de 12 ensayos sobre un fármaco para insuficiencia cardíaca muestra beneficio global significativo, pero el test de heterogeneidad I² = 78% (p <0.001) y los intervalos de confianza de los estudios no se superponen ampliamente. ¿Cuál es la interpretación y conducta MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Hay heterogeneidad clínica/metodológica sustancial; explorar fuentes (subgrupos, calidad, dosis) y considerar no presentar un efecto combinado único sin análisis de sensibilidad.",
      },
      {
        id: "B",
        label: "B",
        text: "Ignorar heterogeneidad y reportar solo el efecto combinado porque es significativo.",
        distractorProfile: "ignorar_heterogeneidad",
        incorrectFeedback:
          "Alta heterogeneidad (I² >75%) cuestiona la validez de un efecto único; combinar estudios muy distintos puede ser engañoso.",
      },
      {
        id: "C",
        label: "C",
        text: "Descartar todos los estudios porque I² alto invalida necesariamente cada ensayo individual.",
        distractorProfile: "invalidar_estudios_individuales",
        incorrectFeedback:
          "I² alto indica variabilidad entre estudios, no invalida automáticamente cada ensayo.",
      },
      {
        id: "D",
        label: "D",
        text: "Concluir que el fármaco no funciona en ninguna población.",
        distractorProfile: "conclusion_absoluta_metaanalisis",
        incorrectFeedback:
          "Heterogeneidad sugiere que el efecto varía entre subpoblaciones o diseños, no ausencia universal de efecto.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "I² = 78% indica heterogeneidad importante. Debe investigarse (análisis de subgrupos, meta-regresión, sensibilidad) antes de generalizar un efecto pooled único.",
    keyPoints: [
      "I² >50–75% → heterogeneidad relevante.",
      "Explorar causas antes de combinar efectos.",
      "Significancia global no justifica ignorar heterogeneidad.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-61",
    university: "UCC",
    examArea: "Epidemiología / Sesgos",
    topic: "Epidemiología",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "epidemiologia", "sesgo_seleccion"],
    statement:
      "Un estudio sobre obesidad y diabetes recluta participantes mediante anuncio en gimnasio de barrio alto. Los resultados muestran baja asociación obesidad-diabetes comparada con estudios poblacionales. ¿Cuál sesgo es MÁS probable?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Sesgo de selección: la muestra no representa la población general (personas más saludables/conscientes), subestimando la asociación.",
      },
      {
        id: "B",
        label: "B",
        text: "Sesgo de información por encuesta telefónica exclusiva.",
        distractorProfile: "sesgo_informacion_no_descrito",
        incorrectFeedback:
          "El problema principal es cómo se reclutó la muestra (gimnasio barrio alto), no el instrumento de medición descrito.",
      },
      {
        id: "C",
        label: "C",
        text: "Sesgo de confusión por edad exclusivamente.",
        distractorProfile: "confusion_edad_sola",
        incorrectFeedback:
          "La confusión por edad podría existir, pero el reclutamiento en gimnasio es sesgo de selección clásico.",
      },
      {
        id: "D",
        label: "D",
        text: "Sesgo de publicación porque solo se publican estudios negativos.",
        distractorProfile: "publicacion_estudio_unico",
        incorrectFeedback:
          "Sesgo de publicación afecta revisiones sistemáticas, no explica un diseño de reclutamiento sesgado en un estudio.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Reclutamiento en gimnasio de barrio alto selecciona personas más activas y de mayor SES, probablemente menos obesas/diabéticas → sesgo de selección que subestima la asociación.",
    keyPoints: [
      "Sesgo de selección: muestra no representativa.",
      "Voluntarios en gimnasio ≠ población general.",
      "Puede subestimar o sobrestimar asociaciones.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-62",
    university: "UCC",
    examArea: "Epidemiología / Sesgos",
    topic: "Epidemiología",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "epidemiologia", "sesgo_informacion"],
    statement:
      "En un estudio de casos y controles sobre cáncer gástrico, los casos (enfermos) son entrevistados inmediatamente post-cirugía y los controles en su hogar. Los casos reportan mayor consumo previo de alimentos ultraprocesados. ¿Cuál sesgo de información es MÁS probable?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Sesgo de memoria diferencial (recall bias): los casos recuerdan o reportan exposiciones de forma distinta a los controles.",
      },
      {
        id: "B",
        label: "B",
        text: "Sesgo de selección por matching inadecuado.",
        distractorProfile: "matching_recall",
        incorrectFeedback:
          "El escenario describe diferencia en la recolección de exposición entre casos y controles, típico de sesgo de información/recall.",
      },
      {
        id: "C",
        label: "C",
        text: "Sesgo de confusión por nivel educativo únicamente.",
        distractorProfile: "confusion_educacion_recall",
        incorrectFeedback:
          "La educación puede confundir, pero el patrón descrito (casos post-cirugía vs controles sanos en casa) sugiere recall bias.",
      },
      {
        id: "D",
        label: "D",
        text: "Sesgo de publicación porque el estudio es observacional.",
        distractorProfile: "publicacion_observacional",
        incorrectFeedback:
          "Ser observacional no implica sesgo de publicación; ese sesgo afecta la literatura disponible, no la entrevista.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Casos enfermos tienden a buscar causas y recordar exposiciones de forma diferente (recall bias), especialmente con entrevistas en momentos distintos → sesgo de información diferencial.",
    keyPoints: [
      "Recall bias clásico en casos-controles.",
      "Casos buscan explicaciones → sobre-reporte de exposiciones.",
      "Estandarizar entrevistas y tiempos reduce sesgo.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-63",
    university: "UCC",
    examArea: "Epidemiología / Causalidad",
    topic: "Epidemiología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_06_21", "epidemiologia", "hill", "causalidad"],
    statement:
      "Se observa fuerte asociación entre exposición ocupacional al asbesto y mesotelioma, con gradiente biológico de dosis-respuesta, temporalidad adecuada y evidencia biológica de fibrogénesis, pero la enfermedad es rara en no expuestos. ¿Cuál afirmación sobre causalidad es MÁS apropiada según criterios de Hill?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Los criterios de Hill apoyan relación causal probable; la fuerza de asociación, temporalidad, dosis-respuesta y plausibilidad biológica convergen.",
      },
      {
        id: "B",
        label: "B",
        text: "No puede haber causalidad porque mesotelioma es raro.",
        distractorProfile: "rareza_impide_causalidad",
        incorrectFeedback:
          "La rareza del desenlace no impide causalidad; de hecho refuerza la especificidad de la asociación con asbesto.",
      },
      {
        id: "C",
        label: "C",
        text: "Solo un ensayo clínico aleatorizado puede establecer causalidad en enfermedades ocupacionales.",
        distractorProfile: "eca_unico_criterio_causalidad",
        incorrectFeedback:
          "En exposiciones tóxicas éticamente no randomizables, la evidencia observacional con criterios de causalidad es aceptada (asbesto-mesotelioma).",
      },
      {
        id: "D",
        label: "D",
        text: "La asociación es espuria porque no se midió confusión por tabaquismo.",
        distractorProfile: "confusion_descarta_asbesto",
        incorrectFeedback:
          "El tabaco no explica la especificidad mesotelioma-asbesto; múltiples líneas de evidencia sustentan causalidad.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Asbesto y mesotelioma cumplen criterios de Hill: fuerza, consistencia, temporalidad, gradiente biológico, plausibilidad. Causalidad aceptada sin ECA por razones éticas.",
    keyPoints: [
      "Hill: fuerza, temporalidad, dosis-respuesta, plausibilidad.",
      "ECA no es único camino a causalidad.",
      "Asbesto-mesotelioma: ejemplo clásico de causalidad.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-64",
    university: "UCC",
    examArea: "Epidemiología / Brotes",
    topic: "Epidemiología",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "epidemiologia", "brotes", "definicion_caso"],
    statement:
      "En un municipio aparecen 15 personas con diarrea aguda y fiebre en 72 horas tras un almuerzo comunitario. El equipo de salud pública llega a investigar el brote. ¿Cuál es el PRIMER paso metodológico en la investigación del brote?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Establecer una definición de caso (clínica y/o confirmación laboratorial) y contar casos que la cumplan.",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar antibióticos masivos a toda la población del municipio.",
        distractorProfile: "atb_masivo_sin_diagnostico",
        incorrectFeedback:
          "La profilaxis/ tratamiento masivo requiere hipótesis etiológica; primero se define y cuenta casos.",
      },
      {
        id: "C",
        label: "C",
        text: "Publicar conclusiones sobre el agente causal antes de recolectar datos.",
        distractorProfile: "conclusion_antes_datos",
        incorrectFeedback:
          "Sin definición de caso y recolección sistemática, las conclusiones serían especulativas.",
      },
      {
        id: "D",
        label: "D",
        text: "Realizar encuesta de riesgo alimentario solo en los 3 casos más graves.",
        distractorProfile: "encuesta_subgrupo_sin_definicion",
        incorrectFeedback:
          "La encuesta de exposición viene después de definir casos y confirmar el brote; incluir todos los casos definidos.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Primer paso en investigación de brotes (10 pasos CDC): verificar existencia, establecer definición de caso operativa, identificar y contar casos, luego caracterizar en tiempo/lugar/persona.",
    keyPoints: [
      "Definición de caso = primer paso operativo.",
      "Luego: línea temporal, curva epidémica, hipótesis.",
      "No tratar masivamente sin diagnóstico.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-65",
    university: "UCC",
    examArea: "Epidemiología / Brotes",
    topic: "Epidemiología",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "epidemiologia", "curva_epidemica", "fuente_comun"],
    statement:
      "Durante un brote de intoxicación alimentaria, la curva epidémica muestra pico único estrecho con todos los casos ocurriendo en un intervalo de 6 horas. ¿Cuál patrón de transmisión es MÁS probable?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Exposición a fuente común puntual (common source), típica de intoxicación alimentaria por toxina preformada.",
      },
      {
        id: "B",
        label: "B",
        text: "Transmisión persona a persona con serial interval prolongado.",
        distractorProfile: "propagacion_lenta_pico_estrecho",
        incorrectFeedback:
          "Transmisión propagada produce curvas con múltiples oleadas o cola prolongada, no pico estrecho único.",
      },
      {
        id: "C",
        label: "C",
        text: "Enfermedad endémica de base sin brote agudo.",
        distractorProfile: "endemica_pico_agudo",
        incorrectFeedback:
          "Endémica no explica pico agudo concentrado en 6 horas.",
      },
      {
        id: "D",
        label: "D",
        text: "Exposición continua a fuente común durante meses.",
        distractorProfile: "continua_pico_estrecho",
        incorrectFeedback:
          "Fuente común continua produce curva extendida en el tiempo, no pico estrecho.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Pico estrecho único = exposición simultánea o casi simultánea a fuente común (banquete, agua contaminada puntual). Toxinas preformadas (S. aureus, B. cereus) tienen incubación corta.",
    keyPoints: [
      "Pico estrecho → fuente común puntual.",
      "Curva propagada → múltiples generaciones de casos.",
      "Incubación corta = pico rápido.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-66",
    university: "UCC",
    examArea: "Epidemiología / Vigilancia / Salud pública Colombia",
    topic: "Epidemiología",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "epidemiologia", "sivigila", "vigilancia", "colombia"],
    statement:
      "Un médico en IPS de Nariño diagnostica un caso de dengue con criterios clínicos y de laboratorio según protocolo MSP. ¿Cuál es la conducta MÁS apropiada respecto a vigilancia epidemiológica en Colombia?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Registrar y notificar el caso oportunamente al SIVIGILA según la resolución vigente, dentro del plazo establecido para enfermedades de notificación obligatoria.",
      },
      {
        id: "B",
        label: "B",
        text: "Notificar solo si el paciente requiere hospitalización.",
        distractorProfile: "notificacion_solo_grave",
        incorrectFeedback:
          "El dengue es evento de notificación obligatoria en Colombia independientemente de la gravedad.",
      },
      {
        id: "C",
        label: "C",
        text: "Archivar el diagnóstico en historia clínica sin reporte externo por confidencialidad.",
        distractorProfile: "sin_notificacion_sivigila",
        incorrectFeedback:
          "La vigilancia epidemiológica obliga a notificar eventos de interés en salud pública; no es opcional.",
      },
      {
        id: "D",
        label: "D",
        text: "Notificar al SIVIGILA al alta del paciente sin importar plazo.",
        distractorProfile: "notificacion_tardia_indiferente",
        incorrectFeedback:
          "La notificación debe ser oportuna (inmediata o semanal según evento); retrasar compromete respuesta en brotes.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Dengue es enfermedad de notificación obligatoria en Colombia (SIVIGILA). El prestador debe registrar y notificar oportunamente según Resolución 3280/2018 y normas MSP vigentes.",
    keyPoints: [
      "SIVIGILA: sistema de vigilancia en salud pública Colombia.",
      "Dengue = notificación obligatoria oportuna.",
      "Notificación no depende solo de hospitalización.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-67",
    university: "UCC",
    examArea: "Epidemiología / Conceptos básicos",
    topic: "Epidemiología",
    difficulty: "easy",
    tags: ["ucc", "convocatoria", "2025_06_21", "epidemiologia", "endemia", "epidemia", "pandemia"],
    statement:
      "¿Cuál es la diferencia CORRECTA entre endemia, epidemia y pandemia?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Endemia: presencia constante en región; epidemia: incremento claro sobre lo esperado en región; pandemia: epidemia extendida a múltiples países/continentes.",
      },
      {
        id: "B",
        label: "B",
        text: "Endemia siempre es más grave que pandemia.",
        distractorProfile: "endemia_mas_grave",
        incorrectFeedback:
          "Endemia describe frecuencia basal en región, no gravedad clínica.",
      },
      {
        id: "C",
        label: "C",
        text: "Pandemia es cualquier brote con más de 100 casos.",
        distractorProfile: "pandemia_por_numero",
        incorrectFeedback:
          "Pandemia se define por extensión geográfica global, no por número arbitrario de casos.",
      },
      {
        id: "D",
        label: "D",
        text: "Epidemia y endemia son sinónimos en salud pública.",
        distractorProfile: "epidemia_endemia_sinonimo",
        incorrectFeedback:
          "Endemia es basal; epidemia es exceso sobre lo endémico esperado.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Endemia: nivel habitual en área. Epidemia: exceso de casos sobre endémico esperado. Pandemia: epidemia en escala global.",
    keyPoints: [
      "Endemia = línea basal regional.",
      "Epidemia = exceso sobre lo esperado.",
      "Pandemia = propagación internacional.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-68",
    university: "UCC",
    examArea: "Epidemiología / Determinantes sociales",
    topic: "Epidemiología",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "epidemiologia", "determinantes_sociales", "equidad"],
    statement:
      "En una ciudad, la mortalidad por COVID-19 es 3 veces mayor en barrios con hacinamiento, acceso limitado a agua potable y alta proporción de trabajadores informales. ¿Cuál concepto epidemiológico explica MEJOR esta disparidad?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Determinantes sociales de la salud: condiciones estructurales (vivienda, empleo, acceso a servicios) que modulan exposición, vulnerabilidad y desenlaces.",
      },
      {
        id: "B",
        label: "B",
        text: "Sesgo de información en el certificado de defunción únicamente.",
        distractorProfile: "sesgo_certificado_unico",
        incorrectFeedback:
          "Aunque puede haber sesgo de registro, el patrón refleja inequidades estructurales reales, no solo error de codificación.",
      },
      {
        id: "C",
        label: "C",
        text: "Confusión biológica porque el virus afecta genéticamente distinto a cada barrio.",
        distractorProfile: "genetica_por_barrio",
        incorrectFeedback:
          "Las disparidades por barrio se explican por condiciones sociales y acceso, no por genética poblacional por vecindario.",
      },
      {
        id: "D",
        label: "D",
        text: "Endemia de COVID-19 sin implicaciones de equidad.",
        distractorProfile: "endemia_sin_equidad",
        incorrectFeedback:
          "Diferencias marcadas entre barrios reflejan inequidad en determinantes sociales, no solo endemia homogénea.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Hacinamiento, acceso al agua y empleo informal son determinantes sociales que aumentan exposición y gravedad (comorbilidades, retraso en atención) → disparidad en mortalidad.",
    keyPoints: [
      "Determinantes sociales: estructurales, no solo individuales.",
      "Modulan exposición, acceso y desenlace.",
      "Salud pública debe abordar equidad, no solo biología.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-69",
    university: "UCC",
    examArea: "Epidemiología / Prevención",
    topic: "Epidemiología",
    difficulty: "easy",
    tags: ["ucc", "convocatoria", "2025_06_21", "epidemiologia", "prevencion", "niveles"],
    statement:
      "¿Cuál ejemplo corresponde CORRECTAMENTE a prevención secundaria?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Tamizaje de cáncer de cuello uterino con citología en mujeres asintomáticas en edad objetivo.",
      },
      {
        id: "B",
        label: "B",
        text: "Vacunación contra hepatitis B en recién nacidos.",
        distractorProfile: "vacunacion_primaria",
        incorrectFeedback:
          "La vacunación es prevención primaria (evita aparición de enfermedad).",
      },
      {
        id: "C",
        label: "C",
        text: "Rehabilitación cardíaca tras infarto de miocardio.",
        distractorProfile: "rehabilitacion_terciaria",
        incorrectFeedback:
          "Rehabilitación post-evento es prevención terciaria (limita discapacidad/complicaciones).",
      },
      {
        id: "D",
        label: "D",
        text: "Educación sobre dieta saludable en escolares sin enfermedad.",
        distractorProfile: "promocion_primaria",
        incorrectFeedback:
          "Promoción/educación en sanos es prevención primaria.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Prevención secundaria: detección precoz en fase asintomática (tamizaje). Primaria = evitar enfermedad. Terciaria = reducir secuelas de enfermedad establecida.",
    keyPoints: [
      "Primaria: evitar enfermedad (vacunas, promoción).",
      "Secundaria: tamizaje/diagnóstico precoz.",
      "Terciaria: rehabilitación, evitar complicaciones.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de salud pública porque evalúa la clasificación correcta de los niveles de prevención: primaria, secundaria y terciaria.

La clave no es si la intervención "suena preventiva" en general.
La clave es:
La prevención secundaria interviene en la fase preclínica/asintomática de la enfermedad, mediante detección precoz (tamizaje), antes de que aparezcan síntomas.

¿Qué está ocurriendo realmente?
El escenario plantea cuatro ejemplos de intervenciones en salud y pide identificar cuál corresponde a prevención secundaria:
• Tamizaje con citología cervicouterina en mujeres asintomáticas.
• Vacunación contra hepatitis B en recién nacidos.
• Rehabilitación cardíaca tras un infarto de miocardio.
• Educación sobre dieta saludable en escolares sin enfermedad.

Recordemos los niveles de prevención:
• Prevención primaria: actúa antes de que la enfermedad aparezca, evitando su ocurrencia (vacunación, promoción de hábitos saludables, educación en población sana).
• Prevención secundaria: detecta la enfermedad en fase preclínica o asintomática mediante tamizaje o diagnóstico precoz, para tratarla antes de que progrese (citologías, mamografías, tamizaje de hipertensión).
• Prevención terciaria: actúa sobre la enfermedad ya establecida para limitar complicaciones, secuelas o discapacidad (rehabilitación, control de complicaciones crónicas).

Por lo tanto:
El tamizaje de cáncer de cuello uterino con citología en mujeres asintomáticas es el único ejemplo de prevención secundaria; los demás corresponden a prevención primaria (vacunación, educación en sanos) o terciaria (rehabilitación post-infarto).

¿Por qué la opción A es la respuesta correcta?
Corresponde a la detección precoz de una enfermedad en fase asintomática mediante una prueba de tamizaje poblacional, definición exacta de prevención secundaria.

¿Por qué fallan las otras opciones?
Opción B (vacunación hepatitis B en recién nacidos): evita la aparición de la enfermedad antes de la exposición; es prevención primaria.
Opción C (rehabilitación cardíaca post-infarto): interviene sobre una enfermedad ya establecida para reducir complicaciones y mejorar el pronóstico funcional; es prevención terciaria.
Opción D (educación sobre dieta en escolares sanos): promueve hábitos saludables en población sin enfermedad, para evitar su aparición futura; es prevención primaria.

¿Cuál es la trampa del examen?
Muchos estudiantes asumen que cualquier actividad "de salud pública" o "programada" equivale a prevención secundaria.
Pero el examen exige distinguir:
Si la persona está sana y la intervención busca evitar la enfermedad → primaria; si está asintomática pero se busca detectar la enfermedad ya presente → secundaria; si la enfermedad ya está establecida y se busca limitar el daño → terciaria.
El dato decisivo es:
"Mujeres asintomáticas en edad objetivo" sometidas a una prueba diagnóstica (citología) = detección precoz = secundaria.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Determinar si la persona está sana, asintomática con enfermedad subclínica, o ya enferma.
2. Sano + intervención para evitar enfermedad = prevención primaria.
3. Asintomático + tamizaje/diagnóstico precoz = prevención secundaria.
4. Enfermedad establecida + limitar secuelas/discapacidad = prevención terciaria.

Perlas de examen
✅ Primaria: vacunación, promoción de hábitos saludables en sanos.
✅ Secundaria: tamizaje y diagnóstico precoz en fase asintomática.
✅ Terciaria: rehabilitación y control de complicaciones de enfermedad ya establecida.
✅ La palabra clave de secundaria es "detección precoz en asintomáticos".
✅ No confundir "programa poblacional" con nivel de prevención específico; depende del objetivo de la intervención.

Referencias
• Leavell & Clark — Preventive Medicine for the Doctor in His Community (niveles de prevención).
• OPS/OMS — Marco de niveles de prevención en salud pública.
• Gordis — Epidemiology.`,
  },
  {
    id: "ucc-conv-2025-06-21-70",
    university: "UCC",
    examArea: "Epidemiología / Tamizaje",
    topic: "Epidemiología",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "epidemiologia", "tamizaje", "wilson_jung"],
    statement:
      "Al evaluar si implementar tamizaje poblacional de una enfermedad rara pero grave, ¿cuál criterio de Wilson-Jung NO se cumple si la prueba disponible tiene baja especificidad y alta tasa de falsos positivos en población joven de bajo riesgo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "La enfermedad debe ser suficientemente frecuente y el beneficio del tamizaje debe superar los daños de falsos positivos y sobrediagnóstico.",
      },
      {
        id: "B",
        label: "B",
        text: "Debe existir tratamiento efectivo para la fase preclínica.",
        distractorProfile: "tratamiento_efectivo_criterio",
        incorrectFeedback:
          "El enunciado se refiere a baja especificidad y bajo riesgo poblacional, que afecta balance beneficio/daño y frecuencia, no necesariamente ausencia de tratamiento.",
      },
      {
        id: "C",
        label: "C",
        text: "Debe existir prueba aceptable con alta sensibilidad y especificidad razonable para la población objetivo.",
        distractorProfile: "prueba_aceptable_no_mencionada",
        incorrectFeedback:
          "El escenario describe baja especificidad, incumpliendo el criterio de prueba aceptable y balance riesgo/beneficio.",
      },
      {
        id: "D",
        label: "D",
        text: "El costo del tamizaje nunca importa en salud pública.",
        distractorProfile: "costo_irrelevante",
        incorrectFeedback:
          "Costo-efectividad es consideración en tamizaje; no es el foco del escenario pero sí importa.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "En enfermedad rara en población joven de bajo riesgo con prueba poco específica, el tamizaje genera muchos falsos positivos y daño (ansiedad, procedimientos) sin beneficio poblacional claro → falla criterio de beneficio neto y frecuencia suficiente.",
    keyPoints: [
      "Wilson-Jung: beneficio tamizaje > daños.",
      "Baja especificidad + baja prevalencia = muchos falsos positivos.",
      "Enfermedad rara en bajo riesgo cuestiona tamizaje universal.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de tamizaje poblacional porque evalúa el dominio de los criterios de Wilson-Jung para decidir si conviene implementar un programa de detección precoz.

La clave no es memorizar los diez criterios de forma aislada.
La clave es:
El beneficio neto del tamizaje (beneficio > daño) depende de la frecuencia de la enfermedad y del desempeño de la prueba (sensibilidad y especificidad) en la población objetivo; una prueba poco específica en población de bajo riesgo genera más daño que beneficio.

¿Qué está ocurriendo realmente?
El escenario plantea:
• Enfermedad rara pero grave.
• Prueba de tamizaje con baja especificidad y alta tasa de falsos positivos.
• Aplicación en población joven de bajo riesgo.
• Se pregunta qué criterio de Wilson-Jung NO se cumple en este contexto.

Recordemos los criterios de Wilson-Jung relevantes:
• La enfermedad debe representar un problema de salud importante y suficientemente frecuente en la población tamizada.
• Debe existir una prueba de tamizaje aceptable, con sensibilidad y especificidad adecuadas para la población a la que se aplica.
• Debe existir tratamiento efectivo disponible para la fase preclínica detectada.
• El beneficio esperado del tamizaje (detección y tratamiento precoz) debe superar los daños potenciales (falsos positivos, sobrediagnóstico, ansiedad, procedimientos invasivos innecesarios) y ser costo-efectivo.

Por lo tanto:
Al aplicar una prueba de baja especificidad en una población joven de bajo riesgo para una enfermedad rara, se generan muchos falsos positivos y procedimientos innecesarios sin un beneficio poblacional proporcional, incumpliendo el criterio de que el beneficio del tamizaje debe superar los daños (y que la enfermedad sea suficientemente frecuente en esa población para justificar el cribado masivo).

¿Por qué la opción A es la respuesta correcta?
Identifica el criterio central que se rompe en el escenario: la necesidad de que la enfermedad sea suficientemente frecuente y que el beneficio del tamizaje supere los daños derivados de los falsos positivos y el sobrediagnóstico, algo que no ocurre al tamizar una enfermedad rara en población de bajo riesgo con una prueba poco específica.

¿Por qué fallan las otras opciones?
Opción B (tratamiento efectivo en fase preclínica): el enunciado no menciona ausencia de tratamiento; el problema descrito es la baja especificidad y el bajo riesgo poblacional, no la falta de terapia.
Opción C (prueba aceptable con especificidad razonable): aunque también podría verse afectado, el enunciado ya señala explícitamente "baja especificidad", por lo que el criterio que mejor engloba la consecuencia poblacional descrita es el del balance beneficio/daño y la frecuencia de la enfermedad (opción A), la formulación más completa del problema.
Opción D (el costo nunca importa): esto es falso como enunciado general; el costo-efectividad sí es una consideración relevante en cualquier programa de tamizaje, aunque no sea el foco central de este escenario.

¿Cuál es la trampa del examen?
Muchos estudiantes buscan automáticamente el criterio de "prueba con alta sensibilidad y especificidad" como respuesta, sin conectar el dato de baja especificidad con su consecuencia poblacional real: el balance beneficio-daño se rompe cuando se tamiza una enfermedad rara en bajo riesgo.
Pero el examen exige integrar:
Baja especificidad + baja prevalencia (enfermedad rara en población joven de bajo riesgo) = valor predictivo positivo bajo = muchos falsos positivos = el daño supera el beneficio esperado.
El dato decisivo es:
"Enfermedad rara" + "población joven de bajo riesgo" + "alta tasa de falsos positivos", que en conjunto rompen el criterio de beneficio neto positivo del tamizaje.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Evaluar si la enfermedad es suficientemente frecuente en la población que se va a tamizar.
2. Evaluar el desempeño de la prueba (sensibilidad y especificidad) en esa población específica.
3. Calcular el valor predictivo positivo esperado según la prevalencia real.
4. Comparar el beneficio esperado (detección y tratamiento precoz) contra el daño potencial (falsos positivos, sobrediagnóstico, ansiedad, costos).
5. Si el daño supera el beneficio, el tamizaje universal no está justificado en ese grupo.

Perlas de examen
✅ Wilson-Jung exige que el beneficio del tamizaje supere los daños potenciales.
✅ Baja especificidad + baja prevalencia = bajo valor predictivo positivo = muchos falsos positivos.
✅ Tamizar enfermedades raras en poblaciones de bajo riesgo suele generar más daño que beneficio.
✅ Los criterios de Wilson-Jung también exigen prueba aceptable y tratamiento efectivo disponible.
✅ El costo-efectividad es parte del balance beneficio-daño de cualquier programa de tamizaje.

Referencias
• Wilson JMG, Jungner G. — Principles and Practice of Screening for Disease, OMS, 1968.
• Gordis — Epidemiology.
• U.S. Preventive Services Task Force — Criteria for screening recommendations.`,
  },
  {
    id: "ucc-conv-2025-06-21-71",
    university: "UCC",
    examArea: "Epidemiología / Inmunizaciones / Colombia",
    topic: "Epidemiología",
    difficulty: "easy",
    tags: ["ucc", "convocatoria", "2025_06_21", "epidemiologia", "vacunacion", "adulto", "colombia"],
    statement:
      "Varón de 65 años, sin esquema de vacunación documentado, consulta para actualización de vacunas según esquema adulto en Colombia. No tiene contraindicaciones. ¿Cuál recomendación es MÁS apropiada según lineamientos del PAI?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Aplicar vacuna contra influenza estacional anual y evaluar esquema de neumococo conjugada según edad y condiciones de riesgo.",
      },
      {
        id: "B",
        label: "B",
        text: "No vacunar adultos mayores si no viajan al extranjero.",
        distractorProfile: "no_vacunar_adulto_mayor",
        incorrectFeedback:
          "Adultos mayores son prioridad para influenza y neumococo por mayor riesgo de complicaciones.",
      },
      {
        id: "C",
        label: "C",
        text: "Aplicar triple viral (SRP) de rutina en todos los adultos de 65 años sin revisar inmunidad previa.",
        distractorProfile: "srp_rutina_65_sin_criterio",
        incorrectFeedback:
          "SRP en adultos se indica según situación de riesgo o esquema incompleto documentado, no rutinariamente en todos los >65.",
      },
      {
        id: "D",
        label: "D",
        text: "Solo aplicar vacuna COVID-19; las demás vacunas del adulto no son necesarias.",
        distractorProfile: "solo_covid_adulto",
        incorrectFeedback:
          "El esquema adulto incluye influenza anual y neumococo según edad/riesgo, además de otras según condición.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Adulto ≥65 años en Colombia: influenza anual recomendada; neumococo conjugada según esquema vigente PAI/MSP; evaluar Td/Tdpa, hepatitis B y otras según riesgo.",
    keyPoints: [
      "≥65 años: influenza anual prioritaria.",
      "Neumococo según esquema PAI y factores de riesgo.",
      "Vacunación adulto no depende de viajes.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-72",
    university: "UCC",
    examArea: "Epidemiología / Prevención / Diabetes",
    topic: "Epidemiología",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "epidemiologia", "diabetes", "prevencion_secundaria"],
    statement:
      "Paciente con diabetes mellitus tipo 2 diagnosticada hace 5 años, sin complicaciones conocidas. ¿Cuál intervención corresponde a prevención secundaria/terciaria de complicaciones crónicas?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Tamizaje anual con fondo de ojo, microalbuminuria en orina y evaluación de pies para detectar complicaciones en fase preclínica.",
      },
      {
        id: "B",
        label: "B",
        text: "Campaña de alimentación saludable en población escolar sin diabetes.",
        distractorProfile: "primaria_poblacion_escolar",
        incorrectFeedback:
          "Educación en población sana es prevención primaria poblacional, no del paciente diabético ya diagnosticado.",
      },
      {
        id: "C",
        label: "C",
        text: "Evitar todo control glucémico para no generar hipoglucemias.",
        distractorProfile: "omitir_control_dm",
        incorrectFeedback:
          "El control glucémico y PA/lípidos es esencial; omitirlo aumenta complicaciones.",
      },
      {
        id: "D",
        label: "D",
        text: "Amputación profiláctica de extremidades inferiores en todo diabético.",
        distractorProfile: "amputacion_profilactica",
        incorrectFeedback:
          "La amputación es tratamiento de complicación avanzada, no prevención rutinaria.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "En DM2 establecida, tamizaje de retinopatía, nefropatía (microalbuminuria) y pie diabético es prevención secundaria (detección precoz) para evitar progresión a ceguera, ERC terminal o amputación (terciaria).",
    keyPoints: [
      "DM2: tamizaje anual ojo, riñón, pie.",
      "Detectar complicaciones antes de síntomas.",
      "Control metabólico + tamizaje = prevención de progresión.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-73",
    university: "UCC",
    examArea: "Epidemiología / Prevención / Hipertensión",
    topic: "Epidemiología",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "epidemiologia", "hta", "prevencion_secundaria"],
    statement:
      "Hombre de 58 años con hipertensión arterial esencial, PA 158/96 mmHg en consulta, sin antecedente de evento cardiovascular. ¿Cuál estrategia de prevención de complicaciones (ACV, IAM) es MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Control estricto de presión arterial con meta <130/80 mmHg según guías, evaluación de riesgo cardiovascular global y modificación de estilo de vida.",
      },
      {
        id: "B",
        label: "B",
        text: "No tratar PA elevada si el paciente es asintomático.",
        distractorProfile: "hta_asintomatica_no_tratar",
        incorrectFeedback:
          "La HTA es asintomática pero de alto riesgo; el tratamiento reduce ACV e IAM.",
      },
      {
        id: "C",
        label: "C",
        text: "Usar solo fitoterapia sin antihipertensivos ni seguimiento.",
        distractorProfile: "solo_fitoterapia_hta",
        incorrectFeedback:
          "Fitoterapia no sustituye manejo basado en evidencia con metas de PA documentadas.",
      },
      {
        id: "D",
        label: "D",
        text: "Limitar sodio solo el día de la consulta sin medicación ni control.",
        distractorProfile: "dieta_puntual_sin_medicacion",
        incorrectFeedback:
          "Modificación de estilo de vida complementa pero no reemplaza tratamiento antihipertensivo cuando PA persistentemente elevada.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Prevención secundaria en HTA: control sostenido de PA, estratificación de riesgo CV, estatinas/antiagregación según indicación, cambios de estilo de vida para prevenir ACV e IAM.",
    keyPoints: [
      "HTA asintomática requiere tratamiento.",
      "Meta PA según guías reduce eventos CV.",
      "Riesgo global guía estatina y AAS.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-74",
    university: "UCC",
    examArea: "Epidemiología / Prevención / Profilaxis post-exposición",
    topic: "Epidemiología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_06_21", "epidemiologia", "pep", "vih", "profilaxis"],
    statement:
      "Estudiante de medicina sufre pinchazo con aguja hueca usada en paciente con VIH conocido, carga viral indetectable en tratamiento. El accidente ocurrió hace 2 horas. ¿Cuál es la conducta MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar profilaxis post-exposición (PEP) antirretroviral de inmediato, idealmente dentro de las primeras 72 horas (mejor <4 h), por 28 días, y realizar serología basal y seguimiento.",
      },
      {
        id: "B",
        label: "B",
        text: "No iniciar PEP porque el paciente fuente tiene carga viral indetectable; solo observar.",
        distractorProfile: "no_pep_vl_indetectable",
        incorrectFeedback:
          "Carga indetectable reduce riesgo pero no elimina transmisión; PEP sigue indicada en exposición percutánea de alto riesgo según protocolo.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar PEP solo si el paciente fuente confirma no adherencia verbal; esperar 7 días para iniciar.",
        distractorProfile: "retrasar_pep_7_dias",
        incorrectFeedback:
          "PEP debe iniciarse lo antes posible (ideal <4 h, máximo 72 h); retrasar 7 días invalida eficacia.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar vacuna contra hepatitis B como única medida.",
        distractorProfile: "solo_hepatitis_b_pep",
        incorrectFeedback:
          "Evaluar hepatitis B según inmunidad del expuesto, pero la prioridad en exposición VIH percutánea es PEP antirretroviral.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Exposición percutánea a sangre de paciente VIH: PEP ARV dentro de 72 h (ideal <4 h) por 28 días, evaluación de riesgo, serologías basales y seguimiento. Carga indetectable reduce pero no anula riesgo.",
    keyPoints: [
      "PEP VIH: iniciar <72 h, ideal <4 h.",
      "Duración 28 días en exposición de riesgo.",
      "Carga indetectable no contraindica PEP de forma absoluta.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de salud ocupacional/infectología porque evalúa el manejo inmediato de la exposición percutánea a sangre de un paciente con VIH conocido.

La clave no es la carga viral indetectable del paciente fuente.
La clave es:
Toda exposición percutánea de alto riesgo a sangre VIH positiva requiere profilaxis post-exposición (PEP) lo antes posible, idealmente dentro de las primeras horas y sin exceder las 72 horas, durante 28 días.

¿Qué está ocurriendo realmente?
El escenario presenta:
• Estudiante de medicina con pinchazo por aguja hueca usada en paciente VIH positivo conocido.
• Paciente fuente con carga viral indetectable en tratamiento antirretroviral.
• El accidente ocurrió hace 2 horas (dentro de la ventana óptima de actuación).

Recordemos el manejo de exposición ocupacional a VIH:
• Evaluar el tipo de exposición (percutánea con aguja hueca y sangre visible = alto riesgo) y el estado serológico del paciente fuente.
• Iniciar PEP antirretroviral lo antes posible: idealmente en las primeras 4 horas, y siempre antes de las 72 horas, ya que después de ese plazo la eficacia de la profilaxis disminuye drásticamente.
• Duración estándar de la PEP: 28 días con esquema de al menos tres antirretrovirales.
• Realizar serologías basales (VIH, hepatitis B y C) en el trabajador expuesto y programar seguimiento serológico.
• Una carga viral indetectable en el paciente fuente reduce el riesgo de transmisión, pero no lo elimina por completo (posible viremia residual, variabilidad de la prueba, o fallas de adherencia recientes no conocidas), por lo que no contraindica la PEP en una exposición percutánea de alto riesgo.

Por lo tanto:
Debe iniciarse PEP antirretroviral de inmediato (dentro de las primeras horas, nunca después de 72 h), completar 28 días de tratamiento, y realizar serología basal y seguimiento del estudiante expuesto.

¿Por qué la opción A es la respuesta correcta?
Cumple con el protocolo estándar de manejo post-exposición ocupacional a VIH: inicio inmediato de PEP dentro de la ventana eficaz, duración de 28 días, y estudios basales con seguimiento.

¿Por qué fallan las otras opciones?
Opción B (no PEP por carga indetectable): la carga viral indetectable disminuye pero no anula el riesgo de transmisión; en exposición percutánea de alto riesgo la PEP sigue estando indicada según los protocolos vigentes.
Opción C (esperar 7 días o confirmación verbal de no adherencia): la eficacia de la PEP depende críticamente de iniciarla lo antes posible; retrasarla 7 días anula prácticamente su utilidad.
Opción D (solo vacuna de hepatitis B): la hepatitis B debe evaluarse según el estado de inmunización del expuesto, pero no reemplaza la prioridad de la PEP antirretroviral ante una exposición a sangre VIH positiva.

¿Cuál es la trampa del examen?
Muchos estudiantes leen "carga viral indetectable" y concluyen que no hay riesgo de transmisión, por lo que omiten la PEP.
Pero el examen exige recordar:
Carga viral indetectable disminuye el riesgo, pero el protocolo de exposición ocupacional percutánea de alto riesgo sigue indicando PEP inmediata, independientemente del estado virológico reportado del paciente fuente.
El dato decisivo es:
Exposición percutánea con aguja hueca (alto riesgo) + accidente hace solo 2 horas (ventana óptima para iniciar PEP).

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Clasificar el tipo y riesgo de la exposición (percutánea con aguja hueca = alto riesgo).
2. Iniciar PEP antirretroviral cuanto antes, idealmente <4 h y siempre <72 h.
3. Completar el esquema de PEP durante 28 días.
4. Solicitar serologías basales (VIH, VHB, VHC) del expuesto.
5. Programar seguimiento clínico y serológico posterior.

Perlas de examen
✅ PEP VIH: iniciar lo antes posible, ideal <4 h, límite 72 h.
✅ Duración estándar de la PEP: 28 días.
✅ Carga viral indetectable reduce pero no elimina el riesgo de transmisión.
✅ No se debe esperar confirmación adicional del paciente fuente para iniciar PEP en exposición de alto riesgo.
✅ Evaluar también hepatitis B y C, pero sin retrasar la PEP antirretroviral.

Referencias
• CDC — Updated U.S. Public Health Service Guidelines for the Management of Occupational Exposures to HIV.
• OMS — Guidelines on Post-Exposure Prophylaxis for HIV.
• Ministerio de Salud de Colombia — Guía de manejo de accidentes de riesgo biológico.`,
  },
  {
    id: "ucc-conv-2025-06-21-75",
    university: "UCC",
    examArea: "Epidemiología / Bioestadística",
    topic: "Epidemiología",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "epidemiologia", "intervalo_confianza", "or"],
    statement:
      "Un estudio reporta OR = 2.4 para asociación entre sedentarismo y diabetes, IC 95%: 1.1–5.2. ¿Cuál interpretación es CORRECTA?",
    options: [
      {
        id: "A",
        label: "A",
        text: "La asociación es estadísticamente significativa al 95% porque el intervalo de confianza no incluye 1.",
      },
      {
        id: "B",
        label: "B",
        text: "No hay significancia porque el OR es solo 2.4.",
        distractorProfile: "or_magnitud_sin_ic",
        incorrectFeedback:
          "La significancia se evalúa con el IC respecto al valor nulo (OR=1), no con la magnitud del OR sola.",
      },
      {
        id: "C",
        label: "C",
        text: "Hay significancia porque el límite inferior es 1.1, muy cercano a 1.",
        distractorProfile: "cercania_a_1_no_significancia",
        incorrectFeedback:
          "Mientras el IC no cruce 1, la asociación es significativa a α=0.05, aunque el límite inferior esté cerca de 1.",
      },
      {
        id: "D",
        label: "D",
        text: "El IC indica que el OR verdadero es exactamente 2.4 con 95% de certeza.",
        distractorProfile: "ic_punto_exacto",
        incorrectFeedback:
          "El IC sugiere rango plausible para el OR verdadero, no certeza del valor puntual 2.4.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Para OR/RR, IC 95% que excluye 1 implica p<0.05. Aquí 1.1–5.2 no incluye 1 → asociación significativa, aunque imprecisa (amplio IC).",
    keyPoints: [
      "IC de OR/RR: significativo si no incluye 1.",
      "IC amplio = estimación imprecisa.",
      "IC ≠ valor exacto del estimador.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de bioestadística porque evalúa la interpretación correcta del intervalo de confianza (IC) de un odds ratio (OR).

La clave no es la magnitud del OR aislada ni la cercanía de un límite al valor nulo.
La clave es:
Para OR (o RR), la asociación es estadísticamente significativa al nivel elegido (aquí 95%) cuando el intervalo de confianza NO incluye el valor nulo 1, sin importar qué tan cerca esté alguno de sus límites de ese valor.

¿Qué está ocurriendo realmente?
El escenario presenta:
• OR = 2.4 para la asociación entre sedentarismo y diabetes.
• IC 95%: 1.1 - 5.2.
• Se pregunta cuál es la interpretación correcta de este resultado.

Recordemos la interpretación del IC en medidas de asociación (OR/RR):
• El valor nulo para OR y RR es 1 (indica ausencia de asociación).
• Si el IC 95% no incluye 1, la asociación es estadísticamente significativa (equivalente a p < 0.05).
• Si el IC incluye 1, no se puede descartar que la verdadera asociación sea nula.
• La amplitud del IC refleja la precisión de la estimación (relacionada con el tamaño de muestra): un IC amplio indica menor precisión, no necesariamente ausencia de significancia.
• El IC ofrece un rango de valores plausibles para el parámetro poblacional verdadero, no una certeza de que el valor puntual observado (2.4) sea el valor exacto.

Por lo tanto:
Como el IC 95% (1.1-5.2) no incluye 1, la asociación entre sedentarismo y diabetes es estadísticamente significativa al 95%, aunque la estimación sea relativamente imprecisa (intervalo amplio).

¿Por qué la opción A es la respuesta correcta?
Aplica correctamente la regla de interpretación: IC 95% que excluye 1 en una medida de asociación tipo OR indica significancia estadística.

¿Por qué fallan las otras opciones?
Opción B (no hay significancia por la magnitud del OR): la significancia estadística no depende del tamaño del OR en sí, sino de si el IC excluye el valor nulo 1; un OR de 2.4 con IC que excluye 1 sí es significativo.
Opción C (el límite inferior está "cerca de 1", por lo que no hay significancia real): mientras el IC no cruce el valor 1, la asociación se considera significativa al nivel de confianza elegido, independientemente de qué tan cerca esté el límite inferior de 1.
Opción D (el IC indica certeza del valor exacto 2.4): el IC no afirma que el valor verdadero sea exactamente 2.4 con 95% de certeza; describe un rango de valores plausibles para el parámetro poblacional dado el muestreo.

¿Cuál es la trampa del examen?
Muchos estudiantes creen que un límite inferior del IC "cercano a 1" invalida la significancia, o que solo un OR "grande" puede ser significativo.
Pero el examen exige aplicar la regla exacta:
Basta con que el intervalo no cruce (no incluya) el valor 1 para declarar significancia estadística, independientemente de la magnitud del OR o de qué tan cerca esté un límite del valor nulo.
El dato decisivo es:
El rango 1.1-5.2 no contiene el número 1.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Identificar el valor nulo de la medida de asociación (1 para OR/RR, 0 para diferencias de medias).
2. Verificar si el IC 95% incluye o no ese valor nulo.
3. Si no lo incluye → asociación estadísticamente significativa.
4. Evaluar la amplitud del IC como indicador de precisión, no de significancia.
5. No confundir el IC con la certeza del valor puntual observado.

Perlas de examen
✅ Valor nulo de OR/RR = 1; de diferencia de medias = 0.
✅ IC que no incluye el valor nulo → significativo al nivel de confianza usado.
✅ Un IC amplio indica menor precisión, no ausencia de asociación.
✅ La magnitud del OR no determina por sí sola la significancia estadística.
✅ El IC describe un rango plausible, no el valor exacto del parámetro poblacional.

Referencias
• Gordis — Epidemiology.
• Altman DG — Practical Statistics for Medical Research.
• Rothman — Modern Epidemiology.`,
  },
  {
    id: "ucc-conv-2025-06-21-76",
    university: "UCC",
    examArea: "Epidemiología / Bioestadística",
    topic: "Epidemiología",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "epidemiologia", "valor_p", "significancia"],
    statement:
      "Un ensayo reporta reducción de mortalidad con p = 0.03 pero diferencia absoluta de mortalidad de 0.5% (20.0% vs 19.5%). ¿Cuál interpretación es MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "La diferencia es estadísticamente significativa pero clínicamente puede ser de poco impacto; evaluar NNT y relevancia clínica además del valor p.",
      },
      {
        id: "B",
        label: "B",
        text: "El resultado no es significativo porque p > 0.01.",
        distractorProfile: "p_menor_001",
        incorrectFeedback:
          "Significancia convencional es p<0.05; 0.03 es significativo.",
      },
      {
        id: "C",
        label: "C",
        text: "El valor p demuestra causalidad y obliga a adoptar la intervención en toda la población.",
        distractorProfile: "p_implica_causalidad_obligatoria",
        incorrectFeedback:
          "p mide evidencia contra hipótesis nula, no magnitud clínica ni obligatoriedad universal.",
      },
      {
        id: "D",
        label: "D",
        text: "Con muestra grande, p siempre es clínicamente relevante.",
        distractorProfile: "p_grande_siempre_relevante",
        incorrectFeedback:
          "Muestras grandes detectan diferencias pequeñas significativas sin relevancia clínica (RAR 0.5%).",
      },
    ],
    correctOptionId: "A",
    explanation:
      "p=0.03 indica significancia estadística, pero RAR 0.5% implica NNT=200 → relevancia clínica cuestionable. Siempre interpretar p junto a magnitud del efecto.",
    keyPoints: [
      "Significancia estadística ≠ relevancia clínica.",
      "Evaluar RAR, NNT, no solo p.",
      "Muestras grandes: p pequeño con efecto mínimo.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-77",
    university: "UCC",
    examArea: "Epidemiología / Bioestadística",
    topic: "Epidemiología",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "epidemiologia", "error_tipo_i_ii"],
    statement:
      "Un ensayo con α = 0.05 y potencia del 80% concluye que un fármaco no es superior al placebo (p = 0.12), pero en realidad el fármaco sí reduce eventos. ¿Qué tipo de error ocurrió?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Error tipo II (falso negativo): no rechazar H₀ siendo falsa.",
      },
      {
        id: "B",
        label: "B",
        text: "Error tipo I (falso positivo): rechazar H₀ siendo verdadera.",
        distractorProfile: "error_tipo_i_negativo",
        incorrectFeedback:
          "Error tipo I es concluir efecto cuando no lo hay; aquí se concluyó ausencia de efecto cuando sí existe.",
      },
      {
        id: "C",
        label: "C",
        text: "Sesgo de confusión exclusivamente.",
        distractorProfile: "confusion_error_estadistico",
        incorrectFeedback:
          "El escenario describe error de inferencia estadística (potencia insuficiente), no confusión.",
      },
      {
        id: "D",
        label: "D",
        text: "No hubo error porque p > 0.05 prueba ausencia de efecto.",
        distractorProfile: "p_alto_prueba_ausencia",
        incorrectFeedback:
          "p>0.05 no prueba ausencia de efecto; puede ser falta de potencia (error tipo II).",
      },
    ],
    correctOptionId: "A",
    explanation:
      "No detectar diferencia real = error tipo II (β). p=0.12 no demuestra equivalencia; puede ser muestra pequeña o efecto pequeño con potencia 80%.",
    keyPoints: [
      "Error tipo I: falso positivo (α).",
      "Error tipo II: falso negativo (β).",
      "p>0.05 ≠ prueba de no efecto.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-78",
    university: "UCC",
    examArea: "Epidemiología / Bioestadística",
    topic: "Epidemiología",
    difficulty: "easy",
    tags: ["ucc", "convocatoria", "2025_06_21", "epidemiologia", "media", "mediana"],
    statement:
      "En un estudio de ingresos mensuales de 200 trabajadores de salud, la media es $8.5 millones pero la mediana es $4.2 millones. ¿Cuál interpretación es CORRECTA?",
    options: [
      {
        id: "A",
        label: "A",
        text: "La distribución probablemente es asimétrica con valores extremos altos; la mediana representa mejor el ingreso típico.",
      },
      {
        id: "B",
        label: "B",
        text: "Media y mediana siempre deben ser iguales en muestras grandes.",
        distractorProfile: "media_mediana_iguales",
        incorrectFeedback:
          "Solo coinciden en distribuciones simétricas; valores extremos separan media y mediana.",
      },
      {
        id: "C",
        label: "C",
        text: "La mediana es siempre mayor que la media.",
        distractorProfile: "mediana_siempre_mayor",
        incorrectFeedback:
          "Con asimetría positiva (cola derecha), la media supera la mediana, no al revés.",
      },
      {
        id: "D",
        label: "D",
        text: "Debe usarse solo la media para reportar ingresos porque es más precisa.",
        distractorProfile: "solo_media_asimetrica",
        incorrectFeedback:
          "Con asimetría, la media se arrastra por outliers; la mediana es más representativa del centro.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Media >> mediana indica asimetría positiva (pocos ingresos muy altos). Para datos asimétricos, mediana describe mejor el valor central típico.",
    keyPoints: [
      "Media > mediana → asimetría positiva.",
      "Mediana robusta a valores extremos.",
      "Ingresos suelen reportarse con mediana.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-79",
    university: "UCC",
    examArea: "Epidemiología / Bioestadística",
    topic: "Epidemiología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_06_21", "epidemiologia", "tabla_2x2", "or"],
    statement:
      "En un estudio de casos y controles: expuestos con enfermedad 40, no expuestos con enfermedad 10; expuestos sin enfermedad 20, no expuestos sin enfermedad 30. ¿Cuál es el odds ratio (OR) aproximado?",
    options: [
      {
        id: "A",
        label: "A",
        text: "OR ≈ 6.0 (odds exposición en casos / odds en controles = 2.0 / 0.33).",
      },
      {
        id: "B",
        label: "B",
        text: "OR ≈ 2.0 porque 40/20 = 2.",
        distractorProfile: "or_solo_casos",
        incorrectFeedback:
          "OR compara odds de exposición en casos vs controles: (40/10)/(20/30), no solo casos expuestos/no expuestos.",
      },
      {
        id: "C",
        label: "C",
        text: "OR ≈ 0.17 porque hay más controles no expuestos.",
        distractorProfile: "or_invertido",
        incorrectFeedback:
          "OR = (40×30)/(10×20) = 1200/200 = 6; la inversión daría 0.17 pero no es la definición correcta.",
      },
      {
        id: "D",
        label: "D",
        text: "OR no puede calcularse en estudios de casos y controles.",
        distractorProfile: "or_imposible_cc",
        incorrectFeedback:
          "Casos-controles estiman OR mediante tabla 2×2: (a×d)/(b×c).",
      },
    ],
    correctOptionId: "A",
    explanation:
      "OR = (40/10)/(20/30) = 4/0.667 ≈ 6. También (a×d)/(b×c) = (40×30)/(10×20) = 6. Mayor odds de exposición en casos.",
    keyPoints: [
      "OR casos-controles: (a/b)/(c/d) o (a×d)/(b×c).",
      "Tabla 2×2: a,b casos; c,d controles.",
      "OR=6 → fuerte asociación exposición-enfermedad.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de bioestadística porque evalúa el cálculo correcto del odds ratio (OR) a partir de una tabla 2×2 en un estudio de casos y controles.

La clave no es dividir directamente los expuestos entre los no expuestos dentro de un solo grupo.
La clave es:
El OR se calcula como el producto cruzado de la tabla 2×2: (a × d) / (b × c), es decir, la razón entre las odds de exposición en casos y en controles.

¿Qué está ocurriendo realmente?
El escenario presenta la siguiente tabla 2×2:
• Expuestos con enfermedad (casos expuestos, a) = 40.
• No expuestos con enfermedad (casos no expuestos, c) = 10.
• Expuestos sin enfermedad (controles expuestos, b) = 20.
• No expuestos sin enfermedad (controles no expuestos, d) = 30.

Recordemos la estructura de la tabla 2×2 y el cálculo del OR:
Enfermedad (+): Expuesto a = 40, No expuesto c = 10.
Enfermedad (−): Expuesto b = 20, No expuesto d = 30.
• Odds de exposición en casos = a/c = 40/10 = 4.
• Odds de exposición en controles = b/d = 20/30 ≈ 0.667.
• OR = (a/c) / (b/d) = 4 / 0.667 ≈ 6.
• Equivalente por producto cruzado: OR = (a × d) / (b × c) = (40 × 30) / (10 × 20) = 1200 / 200 = 6.

Por lo tanto:
El OR ≈ 6.0, indicando que las odds de exposición son 6 veces mayores entre los casos que entre los controles, lo que sugiere una asociación fuerte entre la exposición y la enfermedad.

¿Por qué la opción A es la respuesta correcta?
Aplica correctamente la fórmula del OR en casos y controles, comparando las odds de exposición en casos (40/10) frente a las odds de exposición en controles (20/30), obteniendo un resultado de aproximadamente 6.0.

¿Por qué fallan las otras opciones?
Opción B (OR ≈ 2.0 porque 40/20 = 2): esto calcula erróneamente la razón entre expuestos y no expuestos dentro del grupo de casos únicamente, ignorando por completo el grupo control, lo cual no corresponde a la definición de OR.
Opción C (OR ≈ 0.17): esta es la inversa del cálculo correcto (1/6 ≈ 0.17); surge de invertir el orden de los productos cruzados, cambiando el sentido de la asociación.
Opción D (el OR no puede calcularse en casos y controles): es falso; el OR es precisamente la medida de asociación estándar y apropiada para estudios de casos y controles, calculada mediante la tabla 2×2.

¿Cuál es la trampa del examen?
Muchos estudiantes dividen cifras dentro de una misma fila o columna de la tabla (por ejemplo, expuestos con enfermedad entre expuestos sin enfermedad) en lugar de comparar las odds de exposición entre los dos grupos definidos por el desenlace (casos vs. controles).
Pero el examen exige aplicar:
OR = (odds de exposición en casos) / (odds de exposición en controles) = (a/c)/(b/d) = (a×d)/(b×c).
El dato decisivo es:
Construir correctamente la tabla 2×2 con casos y controles en las columnas y exposición en las filas antes de calcular la razón.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Organizar los datos en una tabla 2×2: filas = exposición, columnas = enfermedad (casos/controles).
2. Calcular las odds de exposición en casos (a/c) y en controles (b/d).
3. Dividir ambas odds, o aplicar el producto cruzado (a×d)/(b×c).
4. Interpretar el resultado como razón de odds de exposición entre casos y controles.

Perlas de examen
✅ OR en casos y controles = (a×d)/(b×c), producto cruzado de la tabla 2×2.
✅ No confundir con dividir filas o columnas dentro de un mismo grupo.
✅ OR = 6 indica asociación fuerte entre exposición y enfermedad.
✅ Invertir el orden del producto cruzado invierte el sentido de la asociación (6 vs. 0.17).
✅ El OR es la medida de asociación apropiada y calculable en casos y controles.

Referencias
• Gordis — Epidemiology.
• Rothman — Modern Epidemiology.
• Fletcher & Fletcher — Clinical Epidemiology: The Essentials.`,
  },
  {
    id: "ucc-conv-2025-06-21-80",
    university: "UCC",
    examArea: "Epidemiología / Revisiones sistemáticas",
    topic: "Epidemiología",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "epidemiologia", "sesgo_publicacion"],
    statement:
      "En un funnel plot de metaanálisis, los estudios pequeños con resultados negativos no publicados no aparecen en la literatura revisada. ¿Qué sesgo es MÁS probable y qué efecto tiene?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Sesgo de publicación; puede sobreestimar el efecto del tratamiento al omitir estudios pequeños negativos.",
      },
      {
        id: "B",
        label: "B",
        text: "Sesgo de selección en reclutamiento de participantes del metaanálisis.",
        distractorProfile: "seleccion_participantes_metaanalisis",
        incorrectFeedback:
          "El escenario describe estudios no publicados (publication bias), no reclutamiento de sujetos.",
      },
      {
        id: "C",
        label: "C",
        text: "Sesgo de memoria en estudios retrospectivos incluidos.",
        distractorProfile: "recall_metaanalisis",
        incorrectFeedback:
          "Recall bias afecta estudios primarios retrospectivos, no explica ausencia de estudios pequeños negativos en literatura.",
      },
      {
        id: "D",
        label: "D",
        text: "No afecta el metaanálisis si el test de heterogeneidad es no significativo.",
        distractorProfile: "heterogeneidad_anula_publicacion",
        incorrectFeedback:
          "Sesgo de publicación distorsiona el efecto combinado independientemente de heterogeneidad.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Publication bias: estudios pequeños con resultados no significativos/negativos menos likely publicados → funnel plot asimétrico → metaanálisis puede sobreestimar beneficio.",
    keyPoints: [
      "Publication bias: resultados positivos más publicados.",
      "Funnel plot asimétrico sugiere sesgo.",
      "Registro previo de ensayos (ClinicalTrials.gov) mitiga sesgo.",
    ],
    theoryContent: `EXPLICACIÓN DEL PROFE BY DR Q.

Esta es una pregunta clásica de metaanálisis y medicina basada en evidencia porque evalúa el reconocimiento del sesgo de publicación y su efecto sobre la estimación combinada de un tratamiento.

La clave no es un problema de reclutamiento de pacientes ni de memoria de los participantes.
La clave es:
Los estudios pequeños con resultados negativos o no significativos tienen menor probabilidad de publicarse, lo que genera un funnel plot asimétrico (sesgo de publicación) y puede sobreestimar el efecto real del tratamiento en el metaanálisis.

¿Qué está ocurriendo realmente?
El escenario presenta:
• Un funnel plot de un metaanálisis.
• Ausencia de estudios pequeños con resultados negativos en la literatura revisada (no fueron publicados).
• Se pregunta el sesgo más probable y su efecto sobre el resultado combinado.

Recordemos el sesgo de publicación y el funnel plot:
• El funnel plot grafica el tamaño del efecto de cada estudio (eje X) frente a una medida de su precisión o tamaño de muestra (eje Y, habitualmente el error estándar invertido).
• En ausencia de sesgo, los estudios pequeños (menos precisos) se dispersan simétricamente a ambos lados del efecto combinado, formando un "embudo" simétrico.
• Cuando faltan estudios pequeños con resultados negativos o no significativos (porque no se publicaron, no se sometieron a revista, o quedaron en el "cajón del investigador"), el funnel plot se vuelve asimétrico.
• Esta ausencia selectiva de estudios negativos infla artificialmente el efecto combinado del metaanálisis, sobreestimando el beneficio real del tratamiento.
• Estrategias para mitigarlo: búsqueda exhaustiva de literatura gris, registro previo de ensayos clínicos (ClinicalTrials.gov), pruebas estadísticas de asimetría (test de Egger), y métodos de corrección (trim-and-fill).

Por lo tanto:
La ausencia de estudios pequeños negativos en la literatura revisada es característica del sesgo de publicación, que puede sobreestimar el efecto real del tratamiento evaluado en el metaanálisis.

¿Por qué la opción A es la respuesta correcta?
Identifica correctamente el sesgo de publicación como la explicación del funnel plot asimétrico y reconoce su efecto esperado: sobreestimación del efecto del tratamiento al excluir sistemáticamente estudios pequeños negativos.

¿Por qué fallan las otras opciones?
Opción B (sesgo de selección en el reclutamiento de participantes): ese sesgo ocurre dentro de los estudios primarios al seleccionar sujetos, no explica la ausencia de estudios completos negativos en la literatura publicada.
Opción C (sesgo de memoria en estudios retrospectivos incluidos): el recall bias afecta la recolección de datos de exposición en estudios primarios retrospectivos, no la decisión editorial de publicar o no un estudio completo.
Opción D (no afecta si la heterogeneidad no es significativa): el sesgo de publicación distorsiona la estimación combinada independientemente del resultado de las pruebas de heterogeneidad entre los estudios incluidos.

¿Cuál es la trampa del examen?
Muchos estudiantes buscan sesgos "dentro" de los estudios individuales (selección de participantes, memoria) en lugar de reconocer un sesgo que ocurre a nivel de la literatura disponible para el metaanálisis.
Pero el examen exige identificar:
La asimetría del funnel plot por ausencia de estudios pequeños negativos es la firma característica del sesgo de publicación, un problema del cuerpo de evidencia disponible, no de cada estudio en particular.
El dato decisivo es:
"Estudios pequeños con resultados negativos no publicados" ausentes de la literatura revisada.

Entonces, ¿qué debe recordarse?
La secuencia correcta es:
1. Reconocer el funnel plot como herramienta para detectar asimetría en la evidencia de un metaanálisis.
2. Identificar que la ausencia de estudios pequeños negativos sugiere sesgo de publicación.
3. Entender que este sesgo tiende a sobreestimar el efecto real del tratamiento.
4. Recordar las estrategias de mitigación: registro previo de ensayos, búsqueda de literatura gris, pruebas de asimetría (Egger), trim-and-fill.

Perlas de examen
✅ Sesgo de publicación: los estudios con resultados positivos se publican más que los negativos.
✅ Funnel plot asimétrico sugiere sesgo de publicación.
✅ El sesgo de publicación tiende a sobreestimar el efecto del tratamiento en el metaanálisis.
✅ El registro previo de ensayos clínicos (ClinicalTrials.gov) ayuda a mitigarlo.
✅ No confundir sesgo de publicación con sesgos internos de los estudios primarios (selección, memoria).

Referencias
• Egger M, et al. — Bias in meta-analysis detected by a simple, graphical test. BMJ.
• Higgins JPT, et al. — Cochrane Handbook for Systematic Reviews of Interventions.
• Sterne JAC, et al. — Recommendations for examining and interpreting funnel plot asymmetry.`,
  },
];
