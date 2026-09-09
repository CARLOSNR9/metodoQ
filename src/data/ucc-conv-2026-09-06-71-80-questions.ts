import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #7 (6 sep 2026) · Preguntas #71–#80.
 * Banco exclusivo del examen oficial.
 */
export const UCC_CONV_2026_09_06_71_80_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2026-09-06-71",
    university: "UCC",
    examArea: "GINECOLOGÍA Y OBSTETRICIA - URGENCIAS",
    topic: "Emergencias Obstétricas Catastróficas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","emergencias-obst-tricas-catastr-ficas","emergencias","obst","tricas","catastr","ficas"],
    statement: "Una mujer de 34 años, en trabajo de parto activo avanzado, presenta súbitamente disnea intensa, cianosis, e hipotensión severa (PA 60/40 mmHg) inmediatamente después de la ruptura espontánea de membranas con salida abundante de líquido amniótico. Al examen: agitación seguida rápidamente de pérdida de conciencia, con convulsiones tónico-clónicas. El monitor muestra bradicardia fetal severa. Minutos después, la paciente presenta sangrado vaginal masivo y difuso, con sangre que no coagula adecuadamente en los tubos de laboratorio recién extraídos. ¿Cuál es el diagnóstico de esta catástrofe obstétrica de instalación súbita, y cuál es el manejo PRIORITARIO inmediato ante la inestabilidad multiorgánica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Eclampsia; el manejo prioritario es Sulfato de Magnesio intravenoso como tratamiento único inicial.",
        distractorProfile: "wrong_diagnosis_missing_coagulopathy",
        incorrectFeedback: "Aunque la Eclampsia también causa convulsiones, no explica el colapso cardiorrespiratorio súbito inmediatamente tras la ruptura de membranas ni la coagulopatía masiva de instalación rápida; este patrón combinado es característico de la Embolia de Líquido Amniótico, que requiere soporte multisistémico agresivo, no solo Sulfato de Magnesio.",
      },
      {
        id: "B",
        label: "B",
        text: "Embolia de Líquido Amniótico; manejo con reanimación cardiopulmonar agresiva multidisciplinaria, soporte hemodinámico/respiratorio inmediato, y corrección agresiva de la Coagulación Intravascular Diseminada asociada.",
      },
      {
        id: "C",
        label: "C",
        text: "Tromboembolismo Pulmonar por trombosis venosa profunda preexistente; manejo con anticoagulación inmediata en dosis plena.",
        distractorProfile: "dangerous_treatment_worsening_coagulopathy",
        incorrectFeedback: "Anticoagular a una paciente que está desarrollando una coagulopatía de consumo severa con sangrado activo sería catastrófico; el cuadro de colapso súbito multisistémico con convulsiones y CID temprana es mucho más característico de la Embolia de Líquido Amniótico que de un TEP aislado.",
      },
      {
        id: "D",
        label: "D",
        text: "Ruptura Uterina; manejo exclusivamente con laparotomía sin necesidad de soporte hemodinámico o respiratorio previo.",
        distractorProfile: "incomplete_management_missing_systemic_support",
        incorrectFeedback: "La Ruptura Uterina no explica típicamente el colapso respiratorio súbito ni la secuencia de convulsiones seguida de coagulopatía masiva difusa; independientemente del diagnóstico exacto, ir directo a cirugía sin estabilización respiratoria y hemodinámica previa en una paciente en colapso multisistémico sería inadecuado.",
      },
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta una **Embolia de Líquido Amniquíotico**, una de las complicaciones obstétricas más catastróficas y de instalación más súbita, en la que líquido amniótico (con células fetales y material trofoblástico) entra a la circulación materna, típicamente durante el trabajo de parto activo o inmediatamente posparto, desencadenando una reacción anafilactoide/inflamatoria sistémica devastadora. El cuadro clásico progresa en fases: **colapso cardiorrespiratorio súbito** (disnea, cianosis, hipotensión, a veces paro cardíaco), seguido de **alteración neurológica** (agitación, convulsiones, coma), y posteriormente una **Coagulación Intravascular Diseminada (CID)** severa con hemorragia masiva difusa e incoercible. No existe un tratamiento específico que revierta el proceso causal; el manejo es fundamentalmente de **soporte agresivo multidisciplinario**: reanimación cardiopulmonar según sea necesario, soporte respiratorio (oxigenación/ventilación), soporte hemodinámico (líquidos, vasopresores), y **corrección agresiva de la coagulopatía** con hemoderivados (plasma fresco congelado, crioprecipitado, plaquetas) guiada por el cuadro clínico y de laboratorio, mientras se procede a la finalización urgente del parto si el feto aún no ha nacido.",
    keyPoints: [
    "Colapso cardiorrespiratorio SÚBITO durante el trabajo de parto (frecuentemente tras ruptura de membranas) + Alteración neurológica + Coagulopatía masiva de instalación rápida.",
    "Embolia de Líquido Amniótico. NO hay tratamiento específico causal; manejo de SOPORTE AGRESIVO multidisciplinario (reanimación + soporte respiratorio/hemodinámico + corrección de CID con hemoderivados). Es impredecible y de alta mortalidad.",
    "Emergencias Obstétricas Catastróficas / Embolia de Líquido Amniótico."
],
  },
  {
    id: "ucc-conv-2026-09-06-72",
    university: "UCC",
    examArea: "MEDICINA INTERNA - CUIDADO CRÍTICO / HEMATOLOGÍA",
    topic: "Hematología de Cuidado Crítico",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","hematolog-a-de-cuidado-cr-tico","hematolog","a","de","cuidado","cr","tico"],
    statement: "Un hombre de 65 años, hospitalizado en UCI por choque séptico de origen abdominal, presenta en su tercer día de hospitalización sangrado espontáneo en los sitios de punción venosa, petequias generalizadas, y sangrado gastrointestinal leve por sonda nasogástrica. Los laboratorios muestran: Plaquetas 42.000/mm³ (en descenso progresivo), TP y TPTa marcadamente prolongados, Fibrinógeno bajo (85 mg/dL), y Dímero-D masivamente elevado. El frotis de sangre periférica muestra **esquistocitos**. ¿Cuál es el diagnóstico de esta coagulopatía, cuál es su mecanismo fisiopatológico central, y cuál es el pilar fundamental del tratamiento?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Púrpura Trombocitopénica Trombótica; tratamiento con Plasmaféresis urgente como pilar fundamental.",
        distractorProfile: "wrong_diagnosis_despite_shared_schistocytes",
        incorrectFeedback: "Aunque ambas condiciones comparten esquistocitos en el frotis, en la PTT el TP, el TPTa y el fibrinógeno son característicamente NORMALES; en esta viñeta están claramente alterados (prolongados y bajo respectivamente), lo que confirma un consumo generalizado de la cascada de coagulación propio de la CID, no de la PTT.",
      },
      {
        id: "B",
        label: "B",
        text: "Coagulación Intravascular Diseminada (CID); mecanismo: activación descontrolada y simultánea de la coagulación y la fibrinólisis, consumiendo factores y plaquetas; el pilar fundamental del tratamiento es TRATAR LA CAUSA SUBYACENTE (en este caso, controlar la sepsis), además de reponer hemoderivados según sangrado activo.",
      },
      {
        id: "C",
        label: "C",
        text: "Hemofilia adquirida; tratamiento con Factor VIII recombinante en dosis altas como pilar fundamental exclusivo.",
        distractorProfile: "wrong_diagnosis_narrow_factor_deficiency",
        incorrectFeedback: "La Hemofilia adquirida es un déficit aislado de un solo factor (típicamente el VIII) por autoanticuerpos, sin trombocitopenia ni consumo generalizado de fibrinógeno; el patrón multifactorial descrito (plaquetas bajas + TP/TPTa alterados + fibrinógeno bajo + Dímero-D elevado) en un paciente séptico crítico es característico de CID, no de un déficit factorial aislado.",
      },
      {
        id: "D",
        label: "D",
        text: "Trombocitopenia Inducida por Heparina; tratamiento con suspensión de heparina e inicio de Argatrobán como pilar fundamental.",
        distractorProfile: "wrong_diagnosis_missing_coagulation_factor_pattern",
        incorrectFeedback: "El HIT típicamente cursa con trombosis (no sangrado predominante) y sin alteración significativa del TP/TPTa/fibrinógeno; el cuadro clínico de sangrado activo generalizado con consumo global de la coagulación en un paciente séptico es característico de CID.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con **Coagulación Intravascular Diseminada (CID)**, un síndrome adquirido en el que un proceso subyacente grave (más frecuentemente sepsis, pero también trauma masivo, complicaciones obstétricas o neoplasias) desencadena una **activación sistémica y descontrolada de la cascada de coagulación**, generando microtrombosis difusa en la microvasculatura que **consume masivamente** plaquetas y factores de coagulación (incluyendo fibrinógeno), mientras simultáneamente se activa un proceso de **fibrinólisis secundaria** para intentar disolver esos microtrombos, generando productos de degradación de fibrina (reflejados en el Dímero-D masivamente elevado). El resultado paradójico es que el paciente tiene **microtrombosis Y sangrado simultáneamente**: los esquistocitos reflejan el daño mecánico de los glóbulos rojos al pasar por la microvasculatura llena de fibrina, mientras el consumo de plaquetas y factores (TP/TPTa prolongados, fibrinógeno bajo) explica el sangrado clínico evidente. El pilar terapéutico **más importante y verdaderamente causal** es **identificar y tratar agresivamente la condición subyacente que desencadenó la CID** (en este caso, controlar la fuente séptica); sin resolver la causa de fondo, cualquier reposición de hemoderivados será solo transitoriamente efectiva, ya que el proceso de consumo continuará mientras persista el desencadenante.",
    keyPoints: [
    "Paciente crítico (sepsis, trauma, complicación obstétrica) con Sangrado difuso + Plaquetas bajas + TP/TPTa PROLONGADOS + Fibrinógeno BAJO + Dímero-D MUY elevado + Esquistocitos.",
    "Coagulación Intravascular Diseminada (CID). Diferencia clave con PTT: en CID, TP/TPTa están ALTERADOS y el fibrinógeno está BAJO (a diferencia de PTT, donde ambos son normales). Pilar del tratamiento: TRATAR LA CAUSA SUBYACENTE, más soporte con hemoderivados según sangrado activo.",
    "Hematología de Cuidado Crítico / Coagulación Intravascular Diseminada."
],
  },
  {
    id: "ucc-conv-2026-09-06-73",
    university: "UCC",
    examArea: "MEDICINA INTERNA - CUIDADO CRÍTICO / NEUMOLOGÍA",
    topic: "Cuidado Crítico",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","cuidado-cr-tico","cuidado","cr","tico"],
    statement: "Un hombre de 45 años, con antecedente de pancreatitis aguda severa por cálculos biliares hospitalizado hace 3 días, presenta empeoramiento progresivo de la disnea con hipoxemia severa refractaria al oxígeno suplementario. Al examen físico: taquipnea marcada, uso de músculos accesorios, y crepitantes difusos bilaterales a la auscultación. Los gases arteriales muestran PaO2/FiO2 de 110 (relación marcadamente reducida). Una radiografía de tórax muestra infiltrados alveolares bilaterales difusos, sin cardiomegalia significativa, y un ecocardiograma descarta disfunción cardíaca izquierda significativa como causa de estos hallazgos (el edema NO es de origen cardiogénico). ¿Cuál es el síndrome respiratorio que describe este cuadro, y cuál es la estrategia ventilatoria que ha demostrado reducir la mortalidad en esta condición?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Edema Pulmonar Cardiogénico; la estrategia ventilatoria de elección es maximizar el volumen corriente para mejorar el reclutamiento alveolar.",
        distractorProfile: "wrong_diagnosis_and_wrong_ventilator_strategy",
        incorrectFeedback: "El ecocardiograma ya descartó disfunción cardíaca izquierda significativa como causa, lo que descarta el edema cardiogénico; además, maximizar el volumen corriente en un pulmón con SDRA aumenta el riesgo de volutrauma y empeora, en lugar de mejorar, el pronóstico según la evidencia disponible.",
      },
      {
        id: "B",
        label: "B",
        text: "Síndrome de Dificultad Respiratoria Aguda (SDRA); la estrategia ventilatoria que reduce la mortalidad es la ventilación con BAJOS volúmenes corrientes (protección pulmonar), aceptando cierta hipercapnia permisiva.",
      },
      {
        id: "C",
        label: "C",
        text: "Neumonía Adquirida en el Hospital simple; el manejo prioritario es exclusivamente antibioticoterapia de amplio espectro, sin necesidad de ajuste ventilatorio específico.",
        distractorProfile: "incomplete_management_missing_ventilator_strategy",
        incorrectFeedback: "Aunque debe descartarse una neumonía sobreagregada, el patrón de infiltrados bilaterales difusos con hipoxemia severa tras un desencadenante extrapulmonar conocido (pancreatitis) corresponde a SDRA, cuyo manejo requiere específicamente una estrategia ventilatoria protectora, no solo tratamiento antibiótico.",
      },
      {
        id: "D",
        label: "D",
        text: "Tromboembolismo Pulmonar bilateral masivo; la estrategia prioritaria es trombólisis sistémica inmediata sin necesidad de ajustes en la ventilación mecánica.",
        distractorProfile: "wrong_diagnosis_wrong_imaging_pattern",
        incorrectFeedback: "El TEP bilateral masivo típicamente no genera infiltrados alveolares bilaterales difusos en la radiografía de tórax como los descritos, que son característicos de un proceso inflamatorio parenquimatoso difuso como el SDRA secundario a pancreatitis severa.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un **Síndrome de Dificultad Respiratoria Aguda (SDRA)**, definido por la combinación de: inicio agudo (dentro de una semana de un desencadenante clínico conocido, en este caso la pancreatitis severa, una causa extrapulmonar clásica), infiltrados bilaterales en la imagen de tórax no explicados completamente por sobrecarga de volumen o insuficiencia cardíaca, e hipoxemia severa (relación PaO2/FiO2 reducida, que clasifica la severidad del SDRA). El mecanismo fisiopatológico central es una lesión difusa de la membrana alveolo-capilar (por la respuesta inflamatoria sistémica del proceso subyacente), generando edema pulmonar de permeabilidad no cardiogénico. La intervención terapéutica con la **evidencia más sólida para reducir la mortalidad** en el SDRA es la **estrategia de ventilación mecánica protectora con BAJOS volúmenes corrientes** (típicamente 4-6 mL/kg de peso corporal predicho, en contraste con los volúmenes más altos usados tradicionalmente), que reduce el barotrauma/volutrauma sobre un pulmón ya lesionado y frágil, aceptando como consecuencia cierto grado de **hipercapnia permisiva** (elevación tolerada del CO2) como compromiso razonable para proteger el parénquima pulmonar de mayor daño.",
    keyPoints: [
    "Desencadenante agudo (sepsis, pancreatitis, trauma, aspiración) + Infiltrados bilaterales NO cardiogénicos + Hipoxemia severa (PaO2/FiO2 reducida).",
    "Síndrome de Dificultad Respiratoria Aguda (SDRA). Intervención que REDUCE MORTALIDAD (basada en evidencia sólida): Ventilación mecánica con BAJOS volúmenes corrientes (protección pulmonar), aceptando hipercapnia permisiva. Contrario a la intuición de \"más volumen = mejor oxigenación\".",
    "Cuidado Crítico / Síndrome de Dificultad Respiratoria Aguda."
],
  },
  {
    id: "ucc-conv-2026-09-06-74",
    university: "UCC",
    examArea: "MEDICINA INTERNA - CIRUGÍA VASCULAR",
    topic: "Emergencias Vasculares",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","emergencias-vasculares","emergencias","vasculares"],
    statement: "Un hombre de 72 años, fumador crónico e hipertenso, es traído a urgencias por dolor abdominal y lumbar súbito e intensísimo, asociado a un episodio sincopal breve. Al examen físico: PA 78/50 mmHg, FC 128 lpm, palidez marcada y diaforesis. Se palpa una **masa abdominal pulsátil** en la región periumbilical, dolorosa a la palpación. El paciente refiere que hace 6 meses le mencionaron incidentalmente en una ecografía \"algo dilatado\" en la aorta abdominal, sin haber recibido seguimiento posterior. Dada la alta sospecha diagnóstica y la inestabilidad hemodinámica del paciente, ¿cuál es la conducta a seguir, evitando cualquier estudio que retrase la intervención definitiva?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Tomografía computarizada abdominal contrastada urgente para confirmar el diagnóstico antes de cualquier decisión quirúrgica.",
        distractorProfile: "dangerous_delay_in_unstable_patient",
        incorrectFeedback: "En un paciente hemodinámicamente inestable con la tríada clásica de ruptura de AAA, solicitar una tomografía antes de la cirugía retrasa peligrosamente el control del sangrado activo; la TAC solo debe considerarse en el paciente estable para planificar el abordaje quirúrgico específico.",
      },
      {
        id: "B",
        label: "B",
        text: "Traslado INMEDIATO a quirófano para reparación quirúrgica de emergencia (abierta o endovascular según disponibilidad), sin retrasar el procedimiento por estudios de imagen adicionales dado el compromiso hemodinámico.",
      },
      {
        id: "C",
        label: "C",
        text: "Manejo médico con control estricto de la presión arterial y analgesia, con reevaluación en 6 horas antes de considerar cirugía.",
        distractorProfile: "dangerously_passive_management",
        incorrectFeedback: "El manejo médico exclusivo no detiene la hemorragia activa de una ruptura aórtica; retrasar la cirugía 6 horas en un paciente inestable prácticamente garantiza el fallecimiento por exsanguinación antes de esa reevaluación.",
      },
      {
        id: "D",
        label: "D",
        text: "Ecografía abdominal ambulatoria programada en las próximas 48-72 horas para confirmar el tamaño exacto del aneurisma.",
        distractorProfile: "catastrophically_inadequate_timeline",
        incorrectFeedback: "Un manejo ambulatorio programado en días es completamente incompatible con la gravedad de una ruptura aórtica activa con inestabilidad hemodinámica; el paciente requiere intervención quirúrgica de emergencia en cuestión de minutos, no un estudio ambulatorio diferido.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta una **Ruptura de Aneurisma de Aorta Abdominal (AAA)**, una emergencia vascular catastrófica con mortalidad extremadamente alta si no se interviene de inmediato. La **tríada clásica** de dolor abdominal/lumbar súbito e intenso, **masa abdominal pulsátil**, e **hipotensión/choque**, en un paciente con factores de riesgo conocidos (edad avanzada, tabaquismo, hipertensión, y en este caso, el antecedente confirmado de un aneurisma ya conocido sin seguimiento), es prácticamente diagnóstica por sí sola. En un paciente **hemodinámicamente inestable** con esta presentación clásica, la conducta correcta es el **traslado inmediato a quirófano**, sin retrasar la intervención con estudios de imagen adicionales (como una TAC), ya que cada minuto de retraso en un paciente que se está desangrando activamente hacia el retroperitoneo (o la cavidad peritoneal) reduce dramáticamente sus probabilidades de supervivencia. La reparación puede ser abierta (clampeo aórtico y reemplazo con injerto) o endovascular (EVAR) según la disponibilidad institucional y la anatomía del paciente, pero el principio fundamental es no demorar el control quirúrgico del sangrado.",
    keyPoints: [
    "Paciente mayor con factores de riesgo vascular + Dolor abdominal/lumbar súbito intenso + Masa abdominal PULSÁTIL + Hipotensión/Choque.",
    "Ruptura de Aneurisma de Aorta Abdominal. En paciente INESTABLE: Cirugía de emergencia INMEDIATA (abierta o EVAR), SIN retrasar por estudios de imagen adicionales. La TAC solo se justifica en el paciente ESTABLE para planear el abordaje.",
    "Emergencias Vasculares / Ruptura de Aneurisma de Aorta Abdominal."
],
  },
  {
    id: "ucc-conv-2026-09-06-75",
    university: "UCC",
    examArea: "PEDIATRÍA - GASTROENTEROLOGÍA / CIRUGÍA",
    topic: "Cirugía Pediátrica",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","cirug-a-pedi-trica","cirug","a","pedi","trica"],
    statement: "Una lactante de 6 semanas de vida consulta por ictericia persistente desde las 2 semanas de vida (inicialmente atribuida a \"ictericia fisiológica prolongada\"), que no ha mejorado y progresivamente se ha acompañado de **heces acólicas (color blanco/grisáceo)** y **orina oscura**. Al examen físico hay ictericia franca de piel y escleras, con hepatomegalia firme a la palpación. Los laboratorios muestran Bilirrubina Total elevada con **predominio de la fracción DIRECTA (conjugada)**, y las transaminasas están levemente elevadas. Una ecografía hepatobiliar muestra ausencia o hipoplasia de la vesícula biliar, sin poder visualizar claramente la vía biliar extrahepática. ¿Cuál es el diagnóstico que debe descartarse con MÁXIMA urgencia dado que el pronóstico depende directamente de la edad al momento de la intervención quirúrgica, y cuál es esta intervención?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Ictericia por lactancia materna prolongada; manejo expectante con continuación de la lactancia, sin necesidad de estudios adicionales urgentes.",
        distractorProfile: "dangerous_missed_diagnosis_of_time_critical_condition",
        incorrectFeedback: "La ictericia por lactancia materna es de predominio INDIRECTO y no se asocia a heces acólicas ni orina oscura; el patrón de bilirrubina directa elevada con heces acólicas descrito en esta viñeta exige descartar urgentemente Atresia Biliar, dado que cada semana de retraso empeora significativamente el pronóstico quirúrgico.",
      },
      {
        id: "B",
        label: "B",
        text: "Atresia de Vías Biliares; requiere confirmación urgente (colangiografía intraoperatoria) y realización de Portoenterostomía de Kasai IDEALMENTE antes de las 8 semanas de vida, ya que el pronóstico se deteriora significativamente después de este punto.",
      },
      {
        id: "C",
        label: "C",
        text: "Hepatitis Neonatal Idiopática; manejo exclusivamente de soporte, sin necesidad de intervención quirúrgica en ningún caso.",
        distractorProfile: "wrong_diagnosis_and_dangerous_assumption",
        incorrectFeedback: "Aunque la Hepatitis Neonatal Idiopática es un diagnóstico diferencial real de colestasis neonatal, no puede asumirse sin descartar activa y urgentemente la Atresia Biliar mediante los estudios apropiados, ya que confundir ambas condiciones y retrasar la cirugía de Kasai en un caso real de atresia tiene consecuencias devastadoras e irreversibles.",
      },
      {
        id: "D",
        label: "D",
        text: "Quiste de Colédoco simple; manejo expectante con seguimiento ecográfico seriado sin urgencia quirúrgica particular.",
        distractorProfile: "wrong_diagnosis_missing_key_ultrasound_finding",
        incorrectFeedback: "El hallazgo ecográfico descrito de ausencia o hipoplasia de la vesícula biliar es más característico de Atresia de Vías Biliares que de un Quiste de Colédoco (que típicamente se visualiza como una dilatación quística focal de la vía biliar); además, el manejo expectante sin urgencia sería peligroso si el diagnóstico real es Atresia Biliar.",
      },
    ],
    correctOptionId: "B",
    explanation: "La lactante presenta un cuadro altamente sugestivo de **Atresia de Vías Biliares**, una condición progresiva en la que existe obliteración fibrótica de los conductos biliares extrahepáticos, impidiendo el flujo normal de bilis desde el hígado hacia el intestino. La clave diagnóstica fundamental, que todo médico debe reconocer con urgencia, es la **ictericia de predominio DIRECTO (conjugado)** que persiste más allá de las 2 semanas de vida —a diferencia de la ictericia fisiológica o por lactancia materna, que es de predominio indirecto y se resuelve espontáneamente—, acompañada de **heces acólicas** (por ausencia de bilis llegando al intestino) y **orina oscura** (por excreción renal de la bilirrubina conjugada que no puede eliminarse por la vía biliar obstruida). Esta es una **verdadera emergencia diagnóstica y terapéutica pediátrica** porque el pronóstico de la cirugía correctiva (**Portoenterostomía de Kasai**, que conecta quirúrgicamente el hígado directamente al intestino, evitando la vía biliar obliterada) depende **críticamente de la edad del paciente al momento de la intervención**: los mejores resultados se obtienen cuando la cirugía se realiza **antes de las 8 semanas de vida**, con un deterioro progresivo y significativo del pronóstico (mayor daño hepático irreversible, mayor probabilidad de requerir trasplante hepático eventual) cuanto más se retrasa el diagnóstico y tratamiento.",
    keyPoints: [
    "Lactante con ictericia persistente >2 semanas + Bilirrubina de predominio DIRECTO + Heces ACÓLICAS + Orina oscura.",
    "Atresia de Vías Biliares (emergencia diagnóstica pediátrica). REGLA DE ORO: la Portoenterostomía de Kasai debe realizarse IDEALMENTE antes de las 8 semanas de vida; el pronóstico se deteriora dramáticamente con cada semana de retraso. Toda ictericia neonatal >2 semanas requiere medir bilirrubina DIRECTA, no solo total.",
    "Cirugía Pediátrica / Atresia de Vías Biliares."
],
  },
  {
    id: "ucc-conv-2026-09-06-76",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEFROLOGÍA / REUMATOLOGÍA",
    topic: "Trombofilias Autoinmunes",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","trombofilias-autoinmunes","trombofilias","autoinmunes"],
    statement: "Una mujer de 32 años, con antecedente de dos pérdidas gestacionales recurrentes inexplicadas en el segundo trimestre y un episodio previo de trombosis venosa profunda no provocada hace 2 años, consulta por dolor y edema súbito en la pierna izquierda de 2 días de evolución. Un Doppler venoso confirma una nueva trombosis venosa profunda extensa. Los laboratorios muestran anticuerpos Anticardiolipina positivos a título alto y Anticoagulante Lúpico positivo, confirmados en dos determinaciones separadas por 12 semanas. ¿Cuál es el diagnóstico que explica tanto las pérdidas gestacionales recurrentes como los eventos trombóticos venosos, y cuál es el manejo a LARGO PLAZO tras el evento agudo actual?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Trombofilia por Déficit de Proteína C; manejo a largo plazo con Aspirina en dosis baja exclusivamente, sin necesidad de anticoagulación prolongada.",
        distractorProfile: "wrong_diagnosis_and_insufficient_treatment",
        incorrectFeedback: "El perfil serológico específico (Anticardiolipina y Anticoagulante Lúpico positivos, confirmados en dos determinaciones) confirma Síndrome Antifosfolípido, no un déficit de Proteína C; además, la Aspirina sola es insuficiente tras un evento trombótico venoso confirmado en esta condición, que requiere anticoagulación plena e indefinida.",
      },
      {
        id: "B",
        label: "B",
        text: "Síndrome de Anticuerpos Antifosfolípidos; manejo a largo plazo con anticoagulación INDEFINIDA (típicamente con Warfarina, no anticoagulantes orales directos), dado el alto riesgo de recurrencia trombótica.",
      },
      {
        id: "C",
        label: "C",
        text: "Enfermedad de Von Willebrand; manejo con Desmopresina (DDAVP) previo a procedimientos, sin necesidad de anticoagulación crónica.",
        distractorProfile: "wrong_diagnosis_opposite_clinical_direction",
        incorrectFeedback: "La Enfermedad de Von Willebrand es un trastorno hemorrágico (predispone a SANGRADO, no a trombosis), completamente opuesto al cuadro clínico protrombótico descrito en esta paciente con trombosis venosa recurrente y pérdidas gestacionales, característico del Síndrome Antifosfolípido.",
      },
      {
        id: "D",
        label: "D",
        text: "Deficiencia de Antitrombina III; manejo exclusivamente con concentrado de Antitrombina durante los episodios agudos, sin necesidad de profilaxis prolongada.",
        distractorProfile: "wrong_diagnosis_and_incomplete_longterm_management",
        incorrectFeedback: "El perfil serológico específico de anticuerpos antifosfolípidos positivos confirma el diagnóstico de SAF, no una deficiencia congénita de Antitrombina III; independientemente de la trombofilia específica, un paciente con trombosis recurrente y trombofilia confirmada requiere anticoagulación a largo plazo, no solo manejo del episodio agudo.",
      },
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con **Síndrome de Anticuerpos Antifosfolípidos (SAF)**, una trombofilia autoinmune adquirida caracterizada por la presencia persistente (confirmada en dos determinaciones separadas por al menos 12 semanas) de autoanticuerpos (Anticoagulante Lúpico, Anticuerpos Anticardiolipina, y/o Anti-Beta2-Glicoproteína I) asociados clínicamente a **eventos trombóticos** (venosos o arteriales, en cualquier sitio) y/o **morbilidad obstétrica** característica (pérdidas gestacionales recurrentes, especialmente en el segundo/tercer trimestre, preeclampsia severa temprana, o insuficiencia placentaria). El mecanismo trombogénico involucra la interacción de estos anticuerpos con proteínas de la membrana celular (particularmente unidas a fosfolípidos), activando plaquetas y el endotelio hacia un estado protrombótico. Tras un evento trombótico confirmado en el contexto de SAF, el manejo estándar a largo plazo es la **anticoagulación indefinida**, típicamente con **Warfarina** (los anticoagulantes orales directos han mostrado en estudios específicos menor eficacia y mayor riesgo de recurrencia trombótica en esta población particular, especialmente en pacientes con perfil de anticuerpos triple positivo o con eventos arteriales previos), dado el riesgo sustancialmente elevado de recurrencia si se suspende el tratamiento.",
    keyPoints: [
    "Mujer con Pérdidas gestacionales recurrentes (especialmente 2do/3er trimestre) + Trombosis venosa o arterial + Anticuerpos Antifosfolípidos positivos (persistentes en 2 determinaciones separadas por 12 semanas).",
    "Síndrome de Anticuerpos Antifosfolípidos. Manejo tras evento trombótico: Anticoagulación INDEFINIDA con Warfarina (preferida sobre anticoagulantes orales directos en esta población). Puede ser primario o secundario (asociado a Lupus u otras enfermedades autoinmunes).",
    "Trombofilias Autoinmunes / Síndrome de Anticuerpos Antifosfolípidos."
],
  },
  {
    id: "ucc-conv-2026-09-06-77",
    university: "UCC",
    examArea: "PEDIATRÍA - ORTOPEDIA",
    topic: "Ortopedia Pediátrica",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","ortopedia-pedi-trica","ortopedia","pedi","trica"],
    statement: "Una lactante femenina de 3 meses, primer hijo, nacida por parto en presentación podálica (de nalgas), es llevada a su control pediátrico de rutina. Al examen físico, el pediatra realiza la maniobra de Barlow (aducción y presión posterior de la cadera flexionada) y percibe un \"clunk\" palpable de la cabeza femoral saliendo del acetábulo, y con la maniobra de Ortolani (abducción con elevación) percibe el \"clunk\" de reingreso de la cabeza femoral al acetábulo. Se observa también asimetría de los pliegues cutáneos glúteos e inguinales, y limitación leve de la abducción de la cadera izquierda. ¿Cuál es el diagnóstico, y cuál es el estudio de imagen de elección para la evaluación inicial en este grupo etario específico (menor de 6 meses), dado que las radiografías simples tienen limitaciones significativas a esta edad?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Fractura de cadera obstétrica; radiografía simple de cadera como estudio de elección a cualquier edad.",
        distractorProfile: "wrong_diagnosis_and_wrong_universal_imaging_rule",
        incorrectFeedback: "No hay antecedente de trauma obstétrico significativo ni hallazgos compatibles con fractura aguda; los hallazgos de maniobras de Barlow/Ortolani positivas con factores de riesgo clásicos (presentación podálica) son específicos de Displasia del Desarrollo de la Cadera, y la radiografía simple tiene limitaciones significativas antes de los 6 meses por la falta de osificación del núcleo femoral.",
      },
      {
        id: "B",
        label: "B",
        text: "Displasia del Desarrollo de la Cadera; Ecografía de cadera como estudio de elección en menores de 6 meses (antes de la osificación del núcleo epifisario femoral, que limita la utilidad de la radiografía).",
      },
      {
        id: "C",
        label: "C",
        text: "Sinovitis Transitoria de Cadera; Resonancia Magnética como estudio de elección inicial en todos los casos.",
        distractorProfile: "wrong_diagnosis_wrong_age_and_imaging",
        incorrectFeedback: "La Sinovitis Transitoria es típica de niños mayores (3-8 años) con cojera aguda dolorosa, no de lactantes con maniobras de inestabilidad de cadera positivas al nacer; además, la Resonancia Magnética no es el estudio de tamizaje inicial estándar para displasia de cadera en lactantes, siendo la ecografía la herramienta de elección en este grupo etario.",
      },
      {
        id: "D",
        label: "D",
        text: "Enfermedad de Legg-Calvé-Perthes; Gammagrafía ósea como estudio inicial de elección independientemente de la edad.",
        distractorProfile: "wrong_diagnosis_wrong_age_group",
        incorrectFeedback: "La Enfermedad de Legg-Calvé-Perthes ocurre típicamente en niños de 4-8 años, no en lactantes de 3 meses; el cuadro clínico descrito con maniobras específicas de inestabilidad de cadera al nacer corresponde a Displasia del Desarrollo de la Cadera, evaluada con ecografía en este grupo etario.",
      },
    ],
    correctOptionId: "B",
    explanation: "La lactante presenta **Displasia del Desarrollo de la Cadera (DDC)**, un espectro de anomalías en el desarrollo de la articulación coxofemoral que va desde la inestabilidad leve hasta la luxación franca, con factores de riesgo clásicos que incluyen la **presentación podálica** (como en este caso), el sexo femenino, y el antecedente familiar. Las maniobras de **Barlow** (que busca provocar la luxación de una cadera inestable) y **Ortolani** (que busca reducir una cadera ya luxada) son las pruebas clínicas clásicas de tamizaje en los primeros meses de vida, apoyadas por hallazgos como la asimetría de pliegues cutáneos y la limitación de la abducción. El estudio de imagen de elección para la evaluación inicial en lactantes **menores de 6 meses** es la **Ecografía de cadera**, ya que a esta edad el núcleo de osificación de la cabeza femoral aún no se ha desarrollado completamente (aparece típicamente entre los 4-6 meses), lo que limita significativamente la capacidad de la radiografía simple para evaluar adecuadamente la relación anatómica entre la cabeza femoral (aún predominantemente cartilaginosa) y el acetábulo. Después de los 6 meses de edad, una vez que el núcleo de osificación es visible, la **radiografía simple de cadera** se convierte en el estudio de elección.",
    keyPoints: [
    "Lactante (especialmente presentación podálica, sexo femenino) con maniobras de Barlow/Ortolani positivas + asimetría de pliegues + limitación de abducción.",
    "Displasia del Desarrollo de la Cadera. Estudio de elección según EDAD: Menores de 6 meses → ECOGRAFÍA de cadera. Mayores de 6 meses → RADIOGRAFÍA simple (una vez osificado el núcleo epifisario femoral).",
    "Ortopedia Pediátrica / Displasia del Desarrollo de la Cadera."
],
  },
  {
    id: "ucc-conv-2026-09-06-78",
    university: "UCC",
    examArea: "MEDICINA INTERNA - ENDOCRINOLOGÍA",
    topic: "Tumores Neuroendocrinos",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","tumores-neuroendocrinos","tumores","neuroendocrinos"],
    statement: "Un hombre de 52 años consulta por diarrea crónica intermitente (con episodios de enrojecimiento facial súbito asociado, \"flushing\"), disnea con sibilancias episódicas sin antecedente de asma, y palpitaciones. Al examen físico se ausculta un soplo sistólico en el foco tricuspídeo. Refiere que estos episodios de enrojecimiento facial se han vuelto más frecuentes en el último año, especialmente después de consumir alcohol o alimentos con alto contenido de tiramina. Los niveles urinarios de Ácido 5-Hidroxiindolacético (5-HIAA) en orina de 24 horas están marcadamente elevados. Una tomografía abdominal identifica una masa en el íleon terminal con metástasis hepáticas múltiples. ¿Cuál es el diagnóstico, y por qué la afectación cardíaca en esta condición predomina característicamente en el lado DERECHO del corazón?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Feocromocitoma con metástasis hepáticas; el compromiso cardíaco predomina en el lado izquierdo por la hipertensión sostenida asociada.",
        distractorProfile: "wrong_diagnosis_wrong_symptom_pattern",
        incorrectFeedback: "El Feocromocitoma se caracteriza por crisis hipertensivas paroxísticas, cefalea y palpitaciones, no por el patrón específico de flushing, diarrea y broncoespasmo con 5-HIAA elevado descrito en esta viñeta, que es característico y específico del Síndrome Carcinoide.",
      },
      {
        id: "B",
        label: "B",
        text: "Síndrome Carcinoide (Tumor Neuroendocrino con metástasis hepáticas); el compromiso cardíaco (Enfermedad Cardíaca Carcinoide) predomina en el lado DERECHO porque las sustancias vasoactivas liberadas por el tumor son metabolizadas/inactivadas al pasar por los pulmones, protegiendo relativamente al corazón izquierdo.",
      },
      {
        id: "C",
        label: "C",
        text: "Mastocitosis Sistémica; el compromiso cardíaco es exclusivamente izquierdo por depósito directo de triptasa en el endocardio ventricular izquierdo.",
        distractorProfile: "wrong_diagnosis_wrong_marker_and_mechanism",
        incorrectFeedback: "La Mastocitosis Sistémica se asocia a triptasa sérica elevada (no 5-HIAA urinario) y no tiene el patrón característico de compromiso valvular predominantemente derecho descrito; el 5-HIAA elevado con masa ileal y metástasis hepáticas es diagnóstico específico de Síndrome Carcinoide.",
      },
      {
        id: "D",
        label: "D",
        text: "Hipertiroidismo por Enfermedad de Graves; el compromiso cardíaco predomina en el lado derecho por hipertensión pulmonar secundaria directa a la tirotoxicosis.",
        distractorProfile: "wrong_diagnosis_wrong_biomarker",
        incorrectFeedback: "El hipertiroidismo no explica el 5-HIAA urinario elevado ni la masa ileal con metástasis hepáticas; estos hallazgos son específicos y diagnósticos de un tumor neuroendocrino productor de serotonina (Síndrome Carcinoide), no de una tirotoxicosis.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta un **Síndrome Carcinoide**, causado por un **Tumor Neuroendocrino** (más frecuentemente originado en el intestino delgado, como el íleon terminal en este caso) que secreta sustancias vasoactivas, predominantemente **serotonina**, además de otras sustancias como histamina y bradiquininas. Es importante entender que el síndrome carcinoide clínico típicamente **solo se manifiesta cuando existen metástasis hepáticas** (como en este paciente): mientras el tumor primario está confinado al intestino, las sustancias vasoactivas que libera son metabolizadas eficientemente por el hígado a través de la circulación portal antes de alcanzar la circulación sistémica; una vez que hay metástasis hepáticas, estas sustancias son liberadas directamente a las venas hepáticas, evitando el primer paso metabólico y causando los síntomas sistémicos clásicos (flushing, diarrea, broncoespasmo). La **Enfermedad Cardíaca Carcinoide** afecta característicamente las válvulas del **lado DERECHO del corazón** (tricúspide y pulmonar, generando fibrosis y disfunción valvular), porque la sangre venosa cargada de serotonina y otras sustancias vasoactivas llega primero al corazón derecho; al pasar por la circulación pulmonar, estas sustancias son en gran parte **metabolizadas/inactivadas por enzimas pulmonares** (como la monoaminooxidasa), de modo que la sangre que llega al corazón izquierdo tiene concentraciones mucho menores de estas sustancias tóxicas para el endocardio, protegiéndolo relativamente (salvo en presencia de un foramen oval permeable o metástasis pulmonares que alteren este mecanismo protector).",
    keyPoints: [
    "Flushing episódico + Diarrea crónica + Broncoespasmo + Soplo cardíaco derecho, con 5-HIAA urinario elevado y masa intestinal con metástasis HEPÁTICAS.",
    "Síndrome Carcinoide. El síndrome clínico requiere metástasis hepáticas (evita el metabolismo hepático de primer paso). Enfermedad Cardíaca Carcinoide predomina en válvulas DERECHAS (tricúspide/pulmonar), porque el pulmón metaboliza las sustancias vasoactivas antes de llegar al corazón izquierdo.",
    "Tumores Neuroendocrinos / Síndrome Carcinoide."
],
  },
  {
    id: "ucc-conv-2026-09-06-79",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEFROLOGÍA",
    topic: "Nefrología",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","nefrolog-a","nefrolog","a"],
    statement: "Un hombre de 68 años, con antecedente de Enfermedad Arterial Coronaria, es sometido a un cateterismo cardíaco con administración de contraste yodado para evaluación de angina inestable. A las 48 horas del procedimiento, se documenta un aumento de la Creatinina sérica de 0.9 mg/dL (basal) a 1.6 mg/dL, sin otra causa identificable (sin hipotensión perioperatoria significativa, sin uso de otros nefrotóxicos, sin obstrucción documentada). El paciente no presenta síntomas urinarios ni edema significativo, y su diuresis se ha mantenido conservada. ¿Cuál es el diagnóstico de esta lesión renal, cuál es su curso clínico TÍPICO, y cuál es la estrategia MÁS efectiva y respaldada para prevenirla en pacientes de alto riesgo antes de un procedimiento similar futuro?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Necrosis Tubular Aguda isquémica irreversible; requiere hemodiálisis de reemplazo renal permanente en la mayoría de los casos.",
        distractorProfile: "overly_pessimistic_prognosis",
        incorrectFeedback: "La Nefropatía Inducida por Contraste, a diferencia de la necrosis tubular aguda isquémica prolongada por hipoperfusión severa sostenida, es característicamente autolimitada en la mayoría de los pacientes, con recuperación funcional en 1-3 semanas; la necesidad de diálisis permanente es infrecuente y se reserva para casos severos en pacientes con función renal basal ya muy comprometida.",
      },
      {
        id: "B",
        label: "B",
        text: "Nefropatía Inducida por Contraste; curso típicamente AUTOLIMITADO con recuperación de la función renal en 1-3 semanas; la estrategia preventiva más respaldada es la HIDRATACIÓN adecuada con Solución Salina antes y después del procedimiento, además de usar la menor dosis posible de contraste.",
      },
      {
        id: "C",
        label: "C",
        text: "Glomerulonefritis Rápidamente Progresiva inducida por contraste; requiere inmunosupresión urgente con Ciclofosfamida y Corticoides.",
        distractorProfile: "wrong_diagnosis_wrong_treatment",
        incorrectFeedback: "El contraste yodado no causa glomerulonefritis rápidamente progresiva (un proceso inmunomediado con hallazgos de sedimento urinario activo, hematuria y cilindros); el patrón temporal descrito (elevación de creatinina en 48-72 horas tras contraste, sin otros hallazgos) es característico de nefropatía por contraste, que no requiere inmunosupresión.",
      },
      {
        id: "D",
        label: "D",
        text: "Nefritis Intersticial Aguda por hipersensibilidad al contraste; requiere biopsia renal urgente y corticoides sistémicos como tratamiento de primera línea.",
        distractorProfile: "unnecessary_invasive_workup",
        incorrectFeedback: "La Nefritis Intersticial Aguda típicamente se asocia a fármacos con mecanismo de hipersensibilidad diferido (antibióticos, AINEs) y cursa con eosinofilia/eosinofiluria y otros hallazgos de hipersensibilidad, no con el patrón temporal directo tras contraste descrito; la biopsia renal no está indicada de rutina en la nefropatía por contraste típica, que se maneja de forma expectante.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta una **Nefropatía Inducida por Contraste**, definida como el deterioro de la función renal (típicamente un aumento de la creatinina sérica de al menos 0.5 mg/dL o 25% respecto al valor basal) que ocurre dentro de las 48-72 horas siguientes a la administración de un medio de contraste yodado intravascular, en ausencia de otra causa identificable de lesión renal. El mecanismo involucra una combinación de vasoconstricción renal (isquemia medular) y toxicidad tubular directa del contraste. El curso clínico típico es **autolimitado**, con un pico de creatinina generalmente entre el día 3-5 y **recuperación progresiva de la función renal en 1-3 semanas** en la mayoría de los pacientes, aunque puede ser más prolongado o incompleto en pacientes con enfermedad renal crónica preexistente significativa. La estrategia preventiva con la **evidencia más sólida y consistente** en pacientes de alto riesgo (enfermedad renal crónica preexistente, diabetes, edad avanzada, uso de grandes volúmenes de contraste) es la **hidratación adecuada con Solución Salina Isotónica** administrada antes y después del procedimiento, además de minimizar la dosis de contraste utilizada y evitar, cuando sea posible, la administración de otros agentes nefrotóxicos concomitantes en ese periodo.",
    keyPoints: [
    "Aumento de la Creatinina dentro de las 48-72 horas tras administración de contraste yodado, sin otra causa evidente.",
    "Nefropatía Inducida por Contraste. Curso típico: AUTOLIMITADO, recuperación en 1-3 semanas. Prevención más respaldada: Hidratación con Solución Salina antes/después del procedimiento + minimizar dosis de contraste, en pacientes de alto riesgo.",
    "Nefrología / Nefropatía Inducida por Contraste."
],
  },
  {
    id: "ucc-conv-2026-09-06-80",
    university: "UCC",
    examArea: "PEDIATRÍA - INFECTOLOGÍA",
    topic: "Hepatopatías Pediátricas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","hepatopat-as-pedi-tricas","hepatopat","as","pedi","tricas"],
    statement: "Un niño de 5 años, con antecedente de varicela hace 4 días (en resolución, con lesiones costrosas), a quien la madre le administró Aspirina para la fiebre (por recomendación de un familiar, sin indicación médica), presenta ahora vómito persistente e intenso, seguido de confusión progresiva y comportamiento agresivo inusual, sin fiebre significativa en este momento. Al examen físico: letárgico, con signos de hipertensión intracraneal incipiente (papiledema leve). Los laboratorios muestran transaminasas marcadamente elevadas (AST 850 U/L, ALT 720 U/L), con **Bilirrubina Total NORMAL**, tiempos de coagulación prolongados, y **amonio sérico marcadamente elevado**. Una biopsia hepática (si se realizara) mostraría infiltración grasa microvesicular difusa sin necrosis hepatocelular significativa ni inflamación. ¿Cuál es el diagnóstico de este síndrome asociado clásicamente al uso de Aspirina durante infecciones virales en niños, y cuál es el hallazgo bioquímico que lo diferencia de una hepatitis viral aguda típica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Hepatitis A fulminante; se diferencia porque la Bilirrubina está característicamente muy elevada, a diferencia de la hepatitis viral típica.",
        distractorProfile: "wrong_diagnosis_reversed_bilirubin_logic",
        incorrectFeedback: "Esta opción invierte incorrectamente la lógica diagnóstica: es precisamente la Bilirrubina elevada la que se esperaría en una Hepatitis A fulminante típica, mientras que la Bilirrubina NORMAL a pesar de transaminasas muy altas es el hallazgo específico que apunta al Síndrome de Reye, no a una hepatitis viral clásica.",
      },
      {
        id: "B",
        label: "B",
        text: "Síndrome de Reye; se diferencia de la hepatitis viral típica porque la Bilirrubina permanece NORMAL a pesar de las transaminasas muy elevadas, y predomina la encefalopatía hiperamonémica sin ictericia significativa.",
      },
      {
        id: "C",
        label: "C",
        text: "Enfermedad de Wilson descompensada; se diferencia por la presencia de Anillos de Kayser-Fleischer visibles en el examen oftalmológico.",
        distractorProfile: "wrong_diagnosis_missing_context",
        incorrectFeedback: "La Enfermedad de Wilson es una condición crónica de acumulación de cobre que se presenta típicamente en adolescentes o adultos jóvenes con manifestaciones neuropsiquiátricas progresivas y hepatopatía crónica, no con el antecedente agudo de infección viral reciente y uso de Aspirina descrito en este niño pequeño, característico del Síndrome de Reye.",
      },
      {
        id: "D",
        label: "D",
        text: "Hepatitis Autoinmune fulminante; se diferencia por la positividad de anticuerpos antinucleares y antimúsculo liso.",
        distractorProfile: "wrong_diagnosis_missing_trigger",
        incorrectFeedback: "La Hepatitis Autoinmune fulminante no está clásicamente asociada al uso de Aspirina durante una infección viral reciente; el antecedente específico descrito (varicela + Aspirina) junto con el patrón bioquímico de bilirrubina normal con transaminasas y amonio muy elevados es característico y específico del Síndrome de Reye.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta **Síndrome de Reye**, una encefalopatía hepática aguda grave y poco frecuente en la actualidad (gracias a la disminución del uso de Aspirina en niños), clásicamente asociada al uso de **Ácido Acetilsalicílico durante una infección viral** (típicamente varicela o influenza) en niños. El mecanismo involucra una **disfunción mitocondrial hepática aguda**, que causa acumulación de grasa microvesicular en el hígado (sin la necrosis hepatocelular ni la inflamación típicas de una hepatitis viral verdadera) y una alteración severa del ciclo de la urea, generando **hiperamonemia** marcada, que es la responsable directa de la encefalopatía progresiva (desde vómito y confusión hasta coma y herniación cerebral en casos graves). El hallazgo bioquímico clave que **diferencia** este síndrome de una hepatitis viral aguda típica es que, a pesar de las transaminasas marcadamente elevadas (reflejando el daño hepatocelular agudo), la **Bilirrubina permanece característicamente NORMAL o solo mínimamente elevada**, ya que el problema es predominantemente una disfunción metabólica mitocondrial aguda con esteatosis microvesicular, no una colestasis o necrosis hepatocelular masiva con liberación de bilirrubina como ocurriría en una hepatitis viral fulminante clásica. El manejo es de soporte intensivo, dirigido principalmente al control de la presión intracraneal y la corrección de la hiperamonemia.",
    keyPoints: [
    "Niño con infección viral reciente (varicela/influenza) + uso de ASPIRINA + Vómito persistente + Encefalopatía progresiva SIN fiebre significativa ni ictericia.",
    "Síndrome de Reye. Hallazgo diferenciador clave: Transaminasas muy elevadas + Bilirrubina NORMAL + Amonio muy elevado (a diferencia de la hepatitis viral típica, que sí eleva la bilirrubina). Es la razón por la que la Aspirina está CONTRAINDICADA en niños con infecciones virales.",
    "Hepatopatías Pediátricas / Síndrome de Reye."
],
  }
];
