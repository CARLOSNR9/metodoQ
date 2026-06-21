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
  },
];
