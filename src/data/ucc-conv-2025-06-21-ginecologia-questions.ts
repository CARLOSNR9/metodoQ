import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición 21 jun 2025 · Bloque Ginecología y Obstetricia (#23–#30).
 * Banco exclusivo del examen oficial quincenal.
 */
export const UCC_CONV_2025_06_21_GYN_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2025-06-21-23",
    university: "UCC",
    examArea: "Ginecología y Obstetricia / Obstetricia / Urgencias",
    topic: "Obstetricia",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "ginecologia", "hemorragia_postparto", "atonia"],
    statement:
      "Multípara de 32 años, parto vaginal eutócico hace 45 minutos de recién nacido con peso de 4200 g. Durante el alumbramiento presenta sangrado vaginal abundante y persistente. Signos vitales: presión arterial 90/55 mmHg, frecuencia cardíaca 118 lpm, temperatura 36.8 °C. Al examen: útero palpable 3 cm por encima del ombligo, blando y no retraído; se observa coágulos en sábanas y sangrado activo al retirar compresas. Loquios rubros profusos. ¿Cuál es la conducta inmediata MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Masaje uterino bimanual vigoroso, administración de oxitocina intravenosa y revisión del canal del parto para descartar laceraciones.",
      },
      {
        id: "B",
        label: "B",
        text: "Traslado inmediato a quirófano para histerectomía de urgencia sin intentar medidas médicas iniciales.",
        distractorProfile: "histerectomia_sin_manejo_medico",
        incorrectFeedback:
          "La histerectomía es rescate en hemorragia refractaria; la primera línea en atonía uterina es masaje uterino y uterotónicos.",
      },
      {
        id: "C",
        label: "C",
        text: "Administrar ácido tranexámico oral y observar 2 horas antes de valorar uterotónicos.",
        distractorProfile: "delay_uterotonics_pph",
        incorrectFeedback:
          "En hemorragia posparto activa con hipotensión y útero blando se deben iniciar uterotónicos y masaje de inmediato; no retrasar.",
      },
      {
        id: "D",
        label: "D",
        text: "Realizar curetaje uterino de urgencia asumiendo retención de restos placentarios como única causa.",
        distractorProfile: "curetaje_sin_evaluar_atonia",
        incorrectFeedback:
          "El útero blando y alto sugiere atonía como causa principal; el curetaje no sustituye masaje y oxitocina, y no está indicado sin sospecha de restos.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Hemorragia posparto inmediata con útero blando y alto: causa más probable atonía uterina (factor de riesgo: macrosomía). Manejo inicial: masaje uterino, oxitocina IV/IM, ácido tranexámico según protocolo, revisión de canal del parto y restos placentarios.",
    keyPoints: [
      "PPH + útero blando → pensar atonía; masaje + oxitocina primero.",
      "Revisar laceraciones cervicovaginales y restos placentarios.",
      "Histerectomía solo si fallan medidas escalonadas.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-24",
    university: "UCC",
    examArea: "Ginecología y Obstetricia / Obstetricia / Hipertensión gestacional",
    topic: "Obstetricia",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "ginecologia", "preeclampsia", "eclampsia", "magnesio"],
    statement:
      "Primigesta de 28 años con embarazo de 34 semanas consulta por cefalea pulsátil intensa, epigastralgia y visión borrosa de 6 horas de evolución. Signos vitales: presión arterial 172/112 mmHg, frecuencia cardíaca 92 lpm, frecuencia respiratoria 18 rpm. Reflejos osteotendinosos profundos exaltados con clonus patelar sostenido. Paraclínicos: proteína en orina 24 h 420 mg, plaquetas 98000/mm³, AST 186 U/L, creatinina 1.3 mg/dL. ¿Cuál es el manejo inicial MÁS apropiado?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar nifedipino sublingual en dosis repetidas como única medida y dar de alta con control ambulatorio en 48 horas.",
        distractorProfile: "alta_preeclampsia_severa",
        incorrectFeedback:
          "Criterios de preeclampsia con síntomas de gravedad y laboratorio alterado requieren hospitalización, sulfato de magnesio y plan de resolución; no manejo ambulatorio.",
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar sulfato de magnesio intravenoso, antihipertensivo de acción rápida (labetalol o hidralazina) y planear interrupción del embarazo según edad gestacional y condiciones maternas-fetales.",
      },
      {
        id: "C",
        label: "C",
        text: "Inducir parto vaginal de inmediato sin profilaxis anticonvulsiva ni control de presión arterial.",
        distractorProfile: "induccion_sin_magnesio",
        incorrectFeedback:
          "Antes de la resolución del embarazo debe estabilizarse a la paciente con magnesio (prevención de eclampsia) y control de PA; la vía del parto depende de condiciones obstétricas.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar heparina de bajo peso molecular profiláctica y diferir antihipertensivos hasta confirmar proteinuria en muestra única.",
        distractorProfile: "heparina_preeclampsia_severa",
        incorrectFeedback:
          "La heparina no es tratamiento de preeclampsia severa; la proteinuria ya está documentada y hay criterios de gravedad que exigen magnesio y antihipertensivos.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Preeclampsia con criterios de gravedad (PA ≥160/110, síntomas cerebrales, epigastralgia, plaquetopenia, transaminitis): sulfato de magnesio para prevención de eclampsia, antihipertensivo IV si PA persistentemente elevada e interrupción del embarazo una vez estabilizada.",
    keyPoints: [
      "Preeclampsia severa: MgSO₄ + control PA + resolver embarazo.",
      "Clonus sostenido y síntomas neurológicos = alto riesgo de eclampsia.",
      "No alta ambulatoria ni retrasar magnesio.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-25",
    university: "UCC",
    examArea: "Ginecología y Obstetricia / Obstetricia / Embarazo pretérmino",
    topic: "Obstetricia",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "ginecologia", "rpm_pretérmino", "corticoides"],
    statement:
      "Gestante de 30 años, primigesta, embarazo de 31 semanas por ecografía temprana, consulta porque desde hace 4 horas presenta salida continua de líquido claro por vagina en cantidad moderada. Signos vitales: presión arterial 118/72 mmHg, frecuencia cardíaca 88 lpm, temperatura 36.9 °C. Al examen especular se confirma salida de líquido amniótico por orificio cervical; cuello cerrado, longitud cervical 28 mm. Frecuencia cardíaca fetal 148 lpm, sin deceleraciones. No hay signos clínicos de corioamnionitis. ¿Cuál es la conducta MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Inducir parto de inmediato con oxitocina por riesgo de infección intrauterina inevitable.",
        distractorProfile: "induccion_rpm_sin_criterios",
        incorrectFeedback:
          "Sin corioamnionitis ni sufrimiento fetal, entre 24–34 semanas se favorece manejo expectante con vigilancia; la inducción no es automática.",
      },
      {
        id: "B",
        label: "B",
        text: "Hospitalizar, administrar ciclo único de corticoide antenatal (betametasona), iniciar profilaxis antibiótica según protocolo (ej. ampicilina + azitromicina) y vigilancia materno-fetal.",
      },
      {
        id: "C",
        label: "C",
        text: "Dar de alta con reposo absoluto en casa y control ambulatorio semanal sin antibióticos ni corticoides.",
        distractorProfile: "alta_rpm_pretérmino",
        incorrectFeedback:
          "La RPM pretérmina requiere hospitalización inicial, maduración pulmonar fetal con corticoides y profilaxis/ tratamiento antibiótico según edad gestacional y riesgo infeccioso.",
      },
      {
        id: "D",
        label: "D",
        text: "Realizar cerclaje cervical de urgencia para prolongar el embarazo.",
        distractorProfile: "cerclaje_rpm",
        incorrectFeedback:
          "El cerclaje está indicado en incompetencia cervical, no en ruptura prematura de membranas; aumentaría riesgo infeccioso.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "RPM pretérmina a las 31 semanas sin corioamnionitis: manejo expectante hospitalizado con corticoides antenatales para maduración pulmonar, antibiótico profiláctico (protocolo de 7 días según guías) y vigilancia de signos de infección o trabajo de parto.",
    keyPoints: [
      "RPM 24–34 sem: expectante si no hay infección ni sufrimiento fetal.",
      "Betametasona antenatal mejora outcomes pulmonares neonatales.",
      "Profilaxis ATB según protocolo; no cerclaje en RPM.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-26",
    university: "UCC",
    examArea: "Ginecología y Obstetricia / Obstetricia / Trabajo de parto pretérmino",
    topic: "Obstetricia",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "ginecologia", "tpp", "tocolisis", "corticoides"],
    statement:
      "Gestante de 26 años, embarazo de 30 semanas, ingresa a urgencias con contracciones uterinas regulares cada 3 minutos, dilatación cervical de 2 cm y borramiento del 50%. Frecuencia cardíaca fetal 152 lpm, movimientos fetales presentes. Signos vitales maternos estables, temperatura 37.0 °C, sin RPM ni sangrado. Test de fibronectina fetal positivo. No hay signos de corioamnionitis. ¿Cuál es la conducta MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar ciclo de betametasona antenatal, iniciar tocolisis (nifedipino o indometacina según edad gestacional) por 48 horas para completar maduración pulmonar y trasladar a centro con UCI neonatal.",
      },
      {
        id: "B",
        label: "B",
        text: "Inducir parto activo de inmediato por edad gestacional limítrofe sin tocolisis ni corticoides.",
        distractorProfile: "parto_inmediato_30_semanas",
        incorrectFeedback:
          "Entre 24–34 semanas, con TPP sin contraindicaciones, se administra corticoide y tocolisis a corto plazo para ganar tiempo de maduración y traslado.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar tocolisis prolongada por 4 semanas en domicilio sin corticoides ni vigilancia hospitalaria.",
        distractorProfile: "tocolisis_prolongada_ambulatoria",
        incorrectFeedback:
          "La tocolisis prolongada no mejora desenlaces neonatales; se usa a corto plazo (48 h) para permitir corticoides y traslado, idealmente hospitalizado.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar sulfato de magnesio como tocolítico de primera línea en lugar de nifedipino o indometacina.",
        distractorProfile: "magnesio_como_tocolitico",
        incorrectFeedback:
          "El sulfato de magnesio en obstetricia se usa para neuroprotección fetal (<32 sem) o eclampsia, no como tocolítico de elección en TPP.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Trabajo de parto pretérmino entre 24–34 semanas sin corioamnionitis: betametasona antenatal, tocolisis a corto plazo (48 h) con nifedipino o indometacina (<32 sem), considerar sulfato de magnesio para neuroprotección si <32 sem, y traslado a centro con neonatología.",
    keyPoints: [
      "TPP 24–34 sem: corticoides + tocolisis corta (48 h).",
      "Tocolisis no prolongada; objetivo: maduración y traslado.",
      "MgSO₄ = neuroprotección/eclampsia, no tocolítico de elección.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-27",
    university: "UCC",
    examArea: "Ginecología y Obstetricia / Obstetricia / Primer trimestre",
    topic: "Obstetricia",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "ginecologia", "hemorragia_primer_trimestre", "embarazo_ectopico"],
    statement:
      "Mujer de 24 años, ciclos irregulares, consulta por sangrado vaginal leve y dolor en fosa ilíaca derecha de 2 días. Última menstruación hace 7 semanas. Signos vitales: presión arterial 110/70 mmHg, frecuencia cardíaca 96 lpm, temperatura 36.7 °C. Examen: abdomen con dolor a la palpación en cuadrante inferior derecho sin defensa. β-hCG cuantitativa 3200 mUI/mL. Ecografía transvaginal: ausencia de saco gestacional intrauterino; masa anexial derecha de 2.5 cm con halo hiperecogénico; pequeña cantidad de líquido libre en fondo de saco. ¿Cuál es la conducta MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Indicar reposo absoluto, progesterona vaginal y control de β-hCG en 48 horas asumiendo amenaza de aborto.",
        distractorProfile: "reposo_aborto_incompleto",
        incorrectFeedback:
          "Con masa anexial y β-hCG > discriminatory zone sin saco intrauterino, la sospecha principal es embarazo ectópico, no aborto amenazado.",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar metotrexato intramuscular de inmediato sin confirmar estabilidad hemodinámica ni valoración de contraindicaciones.",
        distractorProfile: "mtx_sin_evaluacion_completa",
        incorrectFeedback:
          "El metotrexato requiere criterios estrictos (estable, no rotura, β-hCG acotada, masa pequeña, sin actividad cardiaca fetal); debe confirmarse elegibilidad antes de administrar.",
      },
      {
        id: "C",
        label: "C",
        text: "Hospitalizar, solicitar β-hCG seriada, valorar metotrexato si cumple criterios o cirugía laparoscópica si hay inestabilidad o contraindicación al tratamiento médico.",
      },
      {
        id: "D",
        label: "D",
        text: "Realizar legrado uterino de urgencia para evacuar productos de retención.",
        distractorProfile: "legrado_sin_saco_intrauterino",
        incorrectFeedback:
          "No hay saco intrauterino confirmado; el legrado no trata embarazo ectópico y puede retrasar el manejo correcto.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Embarazo ectópico probable (β-hCG 3200, sin saco intrauterino, masa anexial). Paciente estable: confirmar con β-hCG seriada y evaluar metotrexato si elegible; cirugía si inestabilidad, rotura, contraindicación a MTX o falla del tratamiento médico.",
    keyPoints: [
      "β-hCG en zona discriminativa + masa anexial sin saco IU → ectópico.",
      "Metotrexato solo si criterios de elegibilidad estrictos.",
      "Cirugía urgente si inestabilidad hemodinámica o rotura.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-28",
    university: "UCC",
    examArea: "Ginecología y Obstetricia / Obstetricia / Control prenatal",
    topic: "Obstetricia",
    difficulty: "easy",
    tags: ["ucc", "convocatoria", "2025_06_21", "ginecologia", "control_prenatal", "tamizaje"],
    statement:
      "Primigesta de 22 años, embarazo de 11 semanas confirmado por ecografía (longitud céfalo-cóccix 45 mm, frecuencia cardíaca fetal 165 lpm), acude a su primera consulta prenatal. Signos vitales normales, IMC pregestacional 23 kg/m², sin comorbilidades. Niega sangrado, dolor pélvico o antecedente de infecciones de transmisión sexual. ¿Cuál es el tamizaje prenatal MÁS apropiado a solicitar en esta consulta?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Solo hemograma y glicemia en ayunas; diferir todos los tamizajes infecciosos al tercer trimestre.",
        distractorProfile: "delay_infectious_screening",
        incorrectFeedback:
          "El tamizaje de VIH, sífilis, hepatitis B y tipificación sanguinea debe iniciarse en el primer trimestre según guías de control prenatal.",
      },
      {
        id: "B",
        label: "B",
        text: "Hemograma, glicemia, tipificación sanguínea y anticuerpos irregulares, tamizaje de VIH, sífilis (VDRL/RPR), hepatitis B (HBsAg) y urocultivo.",
      },
      {
        id: "C",
        label: "C",
        text: "Mamografía bilateral y colonoscopia como tamizaje de rutina en embarazo.",
        distractorProfile: "screening_inapropiado_embarazo",
        incorrectFeedback:
          "Mamografía y colonoscopia no son tamizajes de rutina en el primer trimestre del embarazo; los tamizajes obstétricos iniciales son laboratoriales e infecciosos.",
      },
      {
        id: "D",
        label: "D",
        text: "Prueba de tolerancia oral a la glucosa de 75 g en ayunas para descartar diabetes gestacional.",
        distractorProfile: "ttog_primer_trimestre_rutina",
        incorrectFeedback:
          "El tamizaje universal de diabetes gestacional con TTOG se realiza entre 24–28 semanas (o antes si factores de riesgo), no rutinariamente a las 11 semanas.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Primera consulta prenatal (primer trimestre): hemograma, tipificación sanguínea y anticuerpos irregulares, glicemia, tamizaje obligatorio de VIH, sífilis, hepatitis B, urocultivo y evaluación según riesgo (rubéola, toxoplasma según contexto). TTOG para diabetes gestacional entre 24–28 semanas.",
    keyPoints: [
      "Primer trimestre: VIH, sífilis, HBsAg, tipificación, hemograma, urocultivo.",
      "TTOG diabetes gestacional: 24–28 sem (no a las 11 sem rutinario).",
      "Tamizajes infecciosos no se difieren al tercer trimestre.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-29",
    university: "UCC",
    examArea: "Ginecología y Obstetricia / Ginecología / Planificación familiar",
    topic: "Ginecología",
    difficulty: "easy",
    tags: ["ucc", "convocatoria", "2025_06_21", "ginecologia", "anticoncepcion", "migrana"],
    statement:
      "Mujer de 34 años, multípara, consulta por deseo de anticoncepción. Refiere cefalea pulsátil con aura visual (escotomas) 2–3 veces al mes, bien caracterizada por neurología como migraña con aura. No fuma. Presión arterial 118/74 mmHg. Antecedente de trombosis venosa profunda en embarazo previo hace 3 años (tratada 6 meses con anticoagulación, actualmente sin anticoagulación). ¿Cuál es el método anticonceptivo MÁS apropiado según criterios de elegibilidad médica (OMS)?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Anticonceptivos orales combinados (estrógeno + progestágeno) en dosis baja.",
        distractorProfile: "aco_combinados_migrana_aura_tvp",
        incorrectFeedback:
          "Los ACO combinados están contraindicados (categoría 4 OMS) en migraña con aura y en antecedente de TVP; aumentan riesgo trombótico.",
      },
      {
        id: "B",
        label: "B",
        text: "Dispositivo intrauterino de levonorgestrel o DIU de cobre / implante subdérmico de etonogestrel / anticoncepción solo con progestágeno.",
      },
      {
        id: "C",
        label: "C",
        text: "Anillo vaginal combinado por vía no oral, lo que reduce el riesgo trombótico respecto a la píldora.",
        distractorProfile: "anillo_combinado_migrana",
        incorrectFeedback:
          "El anillo vaginal es anticoncepción combinada; comparte contraindicaciones de estrógeno (migraña con aura, TVP previa).",
      },
      {
        id: "D",
        label: "D",
        text: "Inyectable mensual combinado (estrógeno + progestágeno) por vía intramuscular.",
        distractorProfile: "inyectable_combinado_contraindicado",
        incorrectFeedback:
          "Los combinados inyectables mensuales contienen estrógeno y están contraindicados en migraña con aura y antecedente trombótico.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Migraña con aura y antecedente de TVP: contraindicación absoluta (OMS 4) para métodos combinados con estrógeno. Opciones seguras: DIU de cobre, DIU-LNG, implante, inyectable solo progestágeno o minipíldora.",
    keyPoints: [
      "Migraña con aura → no estrógenos (OMS categoría 4).",
      "Antecedente TVP → evitar combinados.",
      "Progestágeno solo o DIU cobre son alternativas seguras.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-30",
    university: "UCC",
    examArea: "Ginecología y Obstetricia / Ginecología / Oncología",
    topic: "Ginecología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_06_21", "ginecologia", "cancer_cervicouterino", "tamizaje", "vph"],
    statement:
      "Mujer de 38 años acude a control ginecológico. Vida sexual activa desde los 18 años, pareja única actual. Refiere haber recibido esquema completo de vacuna nonavalente contra VPH a los 15 años. Citología cervicovaginal (Papanicolaou) reporta: células escamosas atípicas de significado indeterminado, no se puede descartar lesión de alto grado (ASC-H). Colposcopia: zona de transformación tipo 1 completamente visible, acetoblanco denso en cuadrante posterior, patrones vasculares atípicos y mosaico. ¿Cuál es la conducta MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Repetir citología convencional en 12 meses dado el antecedente de vacunación completa contra VPH.",
        distractorProfile: "repeat_pap_asc_h",
        incorrectFeedback:
          "ASC-H tiene alto rendimiento para lesión de alto grado (CIN2+); no se debe diferir un año. Requiere evaluación colposcópica con biopsia dirigida.",
      },
      {
        id: "B",
        label: "B",
        text: "Realizar biopsia dirigida de la lesión colposcópica y conización si confirma neoplasia intraepitelial de alto grado según histopatología.",
      },
      {
        id: "C",
        label: "C",
        text: "Indicar histerectomía total de inmediato por el riesgo de cáncer invasor.",
        distractorProfile: "histerectomia_sin_histologia",
        incorrectFeedback:
          "Sin diagnóstico histológico de lesión invasora o CIN3, la histerectomía no es primera línea; el algoritmo exige biopsia y tratamiento escisional según resultado.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar vacuna nonavalente de refuerzo y control citológico en 6 meses sin biopsia.",
        distractorProfile: "vacuna_sin_biopsia_asch",
        incorrectFeedback:
          "La vacuna no trata lesiones ya establecidas; ASC-H con colposcopia anormal requiere biopsia, no observación.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "ASC-H requiere colposcopia con biopsia dirigida. Hallazgos colposcópicos de alto grado (acetoblanco denso, mosaico, vasos atípicos): biopsiar y, si CIN2+, tratar con escisión (conización/LEEP) según histología y deseo reproductivo.",
    keyPoints: [
      "ASC-H → colposcopia + biopsia; no repetir Papan en 12 meses.",
      "Vacuna VPH no excluye tamizaje ni biopsia en citología anormal.",
      "Tratamiento escisional según histología (CIN2+), no histerectomía de entrada.",
    ],
  },
];
