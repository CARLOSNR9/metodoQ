import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #8 (20 sep 2026) · Preguntas #01–#10.
 * Banco exclusivo del examen oficial.
 */
export const UCC_CONV_2026_09_20_01_10_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2026-09-20-01",
    university: "UCC",
    examArea: "MEDICINA INTERNA - CARDIOLOGÍA / URGENCIAS",
    topic: "Síndrome Coronario Agudo",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "sindrome-coronario-agudo"],
    statement:
      "Un hombre de 62 años consulta al servicio de urgencias de un hospital rural por dolor torácico opresivo retroesternal irradiado a brazo izquierdo, asociado a diaforesis, de 90 minutos de evolución. El electrocardiograma muestra elevación del segmento ST de 3 mm en DII, DIII y aVF, con depresión especular en DI y aVL, compatible con infarto agudo de miocardio con elevación del ST (IAMCEST) de cara inferior. El hospital donde se encuentra el paciente NO cuenta con sala de hemodinamia, y el centro con capacidad de angioplastia primaria más cercano está a 2 horas y 30 minutos de traslado por carretera, por lo que el tiempo estimado desde el primer contacto médico hasta la angioplastia superaría ampliamente los 120 minutos recomendados. El paciente no tiene contraindicaciones para trombolisis (sin antecedente de hemorragia intracraneal, cirugía reciente, sangrado activo ni cifras tensionales elevadas). ¿Cuál es la estrategia de reperfusión MÁS APROPIADA en este momento?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Trasladar de inmediato al paciente hacia el centro con hemodinamia, sin administrar fibrinolítico, para realizar angioplastia primaria apenas llegue, aunque el tiempo total supere las 2 horas.",
        distractorProfile: "excessive_delay_ignoring_guideline_window",
        incorrectFeedback:
          "Cuando el tiempo estimado puerta-balón (desde el primer contacto médico) supera los 120 minutos, la angioplastia primaria deja de ser la estrategia de elección; retrasar la reperfusión más de 2 horas aumenta significativamente el tamaño del infarto, el riesgo de falla cardiaca y la mortalidad. En este escenario la fibrinolisis inmediata es superior a esperar un traslado tan prolongado.",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar un fibrinolítico (por ejemplo, tenecteplase) de inmediato en el hospital actual, siguiendo doble antiagregación y anticoagulación según protocolo, y trasladar al paciente para angiografía coronaria (estrategia fármaco-invasiva) entre 3 y 24 horas después, o antes si hay signos de falla de reperfusión.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar únicamente doble antiagregación plaquetaria y anticoagulación, sin fibrinolítico ni traslado urgente, y reevaluar la evolución clínica en las próximas 6 horas antes de decidir la estrategia de reperfusión.",
        distractorProfile: "omission_of_reperfusion_therapy",
        incorrectFeedback:
          "En un IAMCEST con menos de 12 horas de evolución, la reperfusión (farmacológica o mecánica) es obligatoria y tiempo-dependiente; omitirla y solo antiagregar/anticoagular deja la arteria ocluida, perpetuando la necrosis miocárdica activa. Diferir la decisión 6 horas equivale a negar tratamiento en la ventana donde más beneficio se obtiene.",
      },
      {
        id: "D",
        label: "D",
        text: "Solicitar troponina seriada cada 3 horas y esperar la curva de ascenso para confirmar el diagnóstico antes de decidir cualquier estrategia de reperfusión.",
        distractorProfile: "unnecessary_delay_awaiting_biomarker",
        incorrectFeedback:
          "El diagnóstico de IAMCEST es electrocardiográfico y clínico, no depende de la troponina para iniciar reperfusión; esperar horas para una curva de biomarcadores en un paciente con elevación del ST clara e inequívoca retrasa fatalmente un tratamiento tiempo-dependiente.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "El paciente cursa con un **Infarto Agudo de Miocardio con Elevación del ST (IAMCEST) de cara inferior**. La piedra angular del manejo es la reperfusión lo más precoz posible, y la elección entre angioplastia primaria y fibrinolisis depende fundamentalmente del **tiempo estimado hasta la angioplastia**: si el primer contacto médico a balón puede lograrse en menos de 120 minutos, la angioplastia primaria es preferida; si ese tiempo se prevé mayor a 120 minutos (como en este caso, con un traslado de 2 horas y 30 minutos), la **fibrinolisis inmediata** (idealmente dentro de los primeros 30 minutos desde el diagnóstico) es la estrategia de elección, siempre que no existan contraindicaciones. Tras la fibrinolisis exitosa, el paciente debe trasladarse a un centro con hemodinamia para realizar **angiografía coronaria de rutina entre 3 y 24 horas después** (estrategia fármaco-invasiva), o de forma inmediata (angioplastia de rescate) si hay signos de fallo de reperfusión (persistencia del dolor, ausencia de resolución >50% del ST a los 60-90 minutos, inestabilidad eléctrica o hemodinámica).",
    keyPoints: [
      "IAMCEST con tiempo estimado puerta-balón mayor a 120 minutos: la fibrinolisis inmediata es preferible a esperar un traslado prolongado para angioplastia primaria.",
      "Síndrome Coronario Agudo con Elevación del ST. Estrategia fármaco-invasiva: fibrinolítico dentro de los primeros 30 minutos + angiografía coronaria de rutina entre 3-24h después, o angioplastia de rescate inmediata si hay falla de reperfusión.",
      "Síndrome Coronario Agudo / Estrategias de Reperfusión en IAMCEST.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-02",
    university: "UCC",
    examArea: "MEDICINA INTERNA - CARDIOLOGÍA / URGENCIAS",
    topic: "Arritmias Cardíacas",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "fibrilacion-auricular-rvr"],
    statement:
      "Una mujer de 74 años, hipertensa, consulta por palpitaciones y disnea súbita de 2 horas de evolución. Al ingreso se encuentra diaforética y con confusión leve; PA 80/55 mmHg, FC 168 lpm irregular, SpO2 89% con crépitos bibasales a la auscultación pulmonar. El electrocardiograma muestra un ritmo irregularmente irregular, sin ondas P identificables, con complejos QRS estrechos, compatible con fibrilación auricular con respuesta ventricular rápida. No se conoce el tiempo exacto de inicio de la arritmia. ¿Cuál es la conducta INMEDIATA más apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Cardioversión eléctrica sincronizada inmediata bajo sedación, sin retrasar el procedimiento para administrar anticoagulación previa ni para realizar ecocardiograma transesofágico.",
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar metoprolol intravenoso para control de frecuencia cardiaca y reevaluar la respuesta clínica en 30 minutos antes de considerar otras medidas.",
        distractorProfile: "rate_control_prioritized_over_unstable_patient",
        incorrectFeedback:
          "El control farmacológico de frecuencia es apropiado en un paciente ESTABLE; en presencia de hipotensión, edema pulmonar y alteración del estado mental (signos de inestabilidad), esperar la respuesta a un betabloqueador retrasa el tratamiento definitivo y expone al paciente a deterioro hemodinámico progresivo, incluso paro cardiorrespiratorio.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar anticoagulación con heparina y diferir la cardioversión hasta realizar un ecocardiograma transesofágico que descarte trombo en la aurícula izquierda, dado el riesgo de embolismo sistémico.",
        distractorProfile: "elective_protocol_misapplied_to_unstable_patient",
        incorrectFeedback:
          "El protocolo de descartar trombo auricular antes de cardiovertir (o de tiempo de fibrilación auricular menor a 48 horas) aplica a la cardioversión ELECTIVA en pacientes estables; cuando hay inestabilidad hemodinámica franca, la cardioversión eléctrica es inmediata y no debe retrasarse por estos estudios, aceptando el riesgo embólico ante la amenaza vital inmediata.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar una infusión de carga de amiodarona intravenosa y esperar la respuesta farmacológica antes de considerar la cardioversión eléctrica.",
        distractorProfile: "pharmacologic_approach_delays_definitive_treatment_in_unstable_patient",
        incorrectFeedback:
          "La amiodarona puede usarse en pacientes estables o como adyuvante posterior a la cardioversión, pero su inicio de acción es lento; en un paciente inestable, esperar su efecto retrasa el tratamiento que realmente revierte la arritmia de forma inmediata: la cardioversión eléctrica sincronizada.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "La paciente cursa con una **Fibrilación Auricular con Respuesta Ventricular Rápida Hemodinámicamente Inestable**. Los signos de inestabilidad —hipotensión sintomática, signos de edema pulmonar agudo (crépitos, hipoxemia) y alteración del estado mental— definen la conducta: cuando una taquiarritmia genera inestabilidad hemodinámica, el tratamiento de elección es la **cardioversión eléctrica sincronizada inmediata**, independientemente del tiempo de evolución de la arritmia o del estado de anticoagulación. El riesgo teórico de embolismo sistémico (si la fibrilación auricular lleva más de 48 horas o tiempo desconocido) se acepta y se maneja posteriormente con anticoagulación, porque la amenaza vital inmediata del choque cardiogénico o el edema pulmonar franco prima sobre ese riesgo diferido. El control farmacológico de frecuencia (betabloqueadores, calcioantagonistas) y los antiarrítmicos como la amiodarona quedan reservados para pacientes hemodinámicamente ESTABLES.",
    keyPoints: [
      "Taquiarritmia + hipotensión, edema pulmonar o alteración del estado mental = inestabilidad hemodinámica que exige cardioversión eléctrica inmediata, sin esperar anticoagulación previa.",
      "Fibrilación Auricular con RVR inestable. Manejo: cardioversión eléctrica sincronizada de inmediato. En pacientes ESTABLES sí aplica el control de frecuencia y la evaluación de riesgo embólico/anticoagulación antes de cardiovertir.",
      "Arritmias Cardíacas / Fibrilación Auricular Inestable.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-03",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEUMOLOGÍA / URGENCIAS",
    topic: "Tromboembolismo Pulmonar",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "tromboembolismo-pulmonar"],
    statement:
      "Un hombre de 55 años, en el noveno día de postoperatorio de una artroplastia de rodilla, presenta disnea súbita y dolor torácico pleurítico. Al examen: FC 118 lpm, FR 26 rpm, SpO2 91% con oxígeno suplementario por cánula nasal, PA 118/76 mmHg (normotenso). La angiotomografía de tórax confirma tromboembolismo pulmonar bilateral. El ecocardiograma transtorácico muestra dilatación del ventrículo derecho con movimiento septal paradójico (signos de disfunción del VD), y la troponina I está levemente elevada (0.08 ng/mL). El paciente se encuentra alerta, sin signos de choque. ¿Cuál es la clasificación de riesgo y la conducta terapéutica INICIAL más apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Trombólisis sistémica inmediata con alteplasa, dado que el ecocardiograma demuestra disfunción del ventrículo derecho.",
        distractorProfile: "thrombolysis_in_hemodynamically_stable_patient",
        incorrectFeedback:
          "La trombólisis sistémica se reserva para el TEP de alto riesgo (masivo), definido por choque o hipotensión sostenida (PAS <90 mmHg). Este paciente está normotenso, por lo que se clasifica como riesgo intermedio-alto (disfunción de VD + biomarcador positivo); administrar trombolítico de entrada expone a un riesgo de sangrado mayor, incluyendo hemorragia intracraneal, que no está justificado en ausencia de choque.",
      },
      {
        id: "B",
        label: "B",
        text: "Manejo ambulatorio con un anticoagulante oral directo, dado que la presión arterial es normal y el paciente está clínicamente estable.",
        distractorProfile: "underestimating_risk_ignoring_rv_dysfunction",
        incorrectFeedback:
          "Aunque la presión arterial es normal, la combinación de disfunción del ventrículo derecho por ecocardiograma y troponina positiva clasifica al paciente como TEP de riesgo intermedio-alto, que requiere hospitalización con monitorización estrecha por el riesgo de deterioro hemodinámico súbito; el manejo ambulatorio está reservado para el TEP de bajo riesgo (sin disfunción de VD ni biomarcadores positivos).",
      },
      {
        id: "C",
        label: "C",
        text: "Anticoagulación sistémica con heparina (no fraccionada o de bajo peso molecular) y hospitalización en una unidad con monitorización hemodinámica estrecha, reservando la trombólisis de rescate para un eventual deterioro clínico u hemodinámico.",
      },
      {
        id: "D",
        label: "D",
        text: "Colocación de un filtro de vena cava inferior como primera medida terapéutica, sin iniciar anticoagulación sistémica.",
        distractorProfile: "unnecessary_ivc_filter_without_anticoagulation_contraindication",
        incorrectFeedback:
          "El filtro de vena cava inferior se reserva para pacientes con contraindicación absoluta para la anticoagulación o con TEP recurrente a pesar de anticoagulación adecuada; este paciente no tiene ninguna contraindicación, por lo que la anticoagulación sistémica sigue siendo la base del tratamiento y el filtro no está indicado como primera línea.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "El paciente cursa con un **Tromboembolismo Pulmonar de Riesgo Intermedio-Alto (submasivo)**. La estratificación de riesgo en TEP no depende solo de la presión arterial: un paciente **normotenso** (sin choque, por lo que se excluye el riesgo alto/masivo) pero con evidencia de **disfunción del ventrículo derecho** (por imagen: dilatación de VD, movimiento septal paradójico) MÁS un **biomarcador cardíaco positivo** (troponina o péptido natriurético elevados) se clasifica como riesgo intermedio-alto. En este grupo, el tratamiento inicial es la **anticoagulación sistémica** con hospitalización y **monitorización estrecha** (idealmente en una unidad de cuidados intermedios o intensivos), ya que existe riesgo de deterioro hemodinámico en las primeras 24-72 horas. La trombólisis sistémica se reserva para el TEP de alto riesgo (con choque/hipotensión) o como terapia de rescate si el paciente de riesgo intermedio se deteriora hemodinámicamente durante la observación.",
    keyPoints: [
      "TEP con presión arterial normal pero disfunción de VD por imagen + biomarcador cardíaco positivo = riesgo intermedio-alto (submasivo), no bajo riesgo.",
      "Tromboembolismo Pulmonar de riesgo intermedio-alto. Manejo: anticoagulación sistémica + hospitalización con monitorización estrecha; trombólisis reservada para TEP de alto riesgo (choque) o como rescate ante deterioro.",
      "Tromboembolismo Pulmonar / Estratificación de Riesgo.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-04",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEUMOLOGÍA / URGENCIAS",
    topic: "Exacerbación de EPOC",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "exacerbacion-epoc"],
    statement:
      "Un hombre de 68 años, con enfermedad pulmonar obstructiva crónica (EPOC) grave conocida y fumador activo, consulta por aumento de la disnea basal, incremento del volumen y cambio en el color del esputo (ahora purulento) de 3 días de evolución. Al ingreso: FR 28 rpm, uso de músculos accesorios de la respiración, sibilancias difusas espiratorias, SpO2 88% con aire ambiente. La gasometría arterial muestra: pH 7.30, PaCO2 62 mmHg, PaO2 55 mmHg, bicarbonato 28 mEq/L (acidosis respiratoria aguda sobre crónica con retención de CO2). El paciente está alerta y colaborador, sin contraindicaciones para ventilación no invasiva. ¿Cuál es la conducta terapéutica INICIAL más apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Intubación orotraqueal inmediata y ventilación mecánica invasiva, dado que la gasometría muestra acidosis respiratoria significativa.",
        distractorProfile: "premature_invasive_ventilation_skipping_niv",
        incorrectFeedback:
          "En la exacerbación de EPOC con acidosis respiratoria (pH <7.35) y un paciente alerta, colaborador y sin contraindicaciones, la ventilación mecánica no invasiva (VMNI) es la primera línea de soporte ventilatorio, ya que reduce la mortalidad, la necesidad de intubación y las complicaciones asociadas a la vía aérea invasiva. La intubación se reserva para falla o contraindicación de la VMNI, o deterioro del estado de conciencia.",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar oxígeno suplementario a alto flujo con FiO2 cercana al 100% para corregir la hipoxemia lo más rápido posible, sin necesidad de soporte ventilatorio adicional.",
        distractorProfile: "excessive_oxygen_worsening_hypercapnia",
        incorrectFeedback:
          "En pacientes con EPOC y retención crónica de CO2, administrar oxígeno a altas concentraciones sin control puede empeorar la hipercapnia (por alteración de la relación V/Q y reducción del estímulo respiratorio hipóxico), profundizando la acidosis respiratoria; el objetivo es una SpO2 entre 88-92%, con titulación cuidadosa, no la corrección agresiva de la hipoxemia a cualquier costo.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar únicamente antibiótico y broncodilatador nebulizado, sin corticosteroide sistémico ni soporte ventilatorio, dado que la saturación mejora parcialmente con oxígeno suplementario.",
        distractorProfile: "incomplete_management_ignoring_respiratory_acidosis",
        incorrectFeedback:
          "Este paciente cumple los tres criterios de Anthonisen (aumento de disnea, aumento del volumen del esputo y esputo purulento), lo que sí justifica antibiótico, pero el corticosteroide sistémico es un pilar del tratamiento de toda exacerbación moderada-grave, y la presencia de acidosis respiratoria (pH 7.30) exige soporte ventilatorio con VMNI; omitir ambos deja sin tratar la insuficiencia respiratoria aguda establecida.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar ventilación mecánica no invasiva (VMNI/BiPAP), junto con broncodilatadores de acción corta nebulizados (beta-2 agonista más anticolinérgico), corticosteroide sistémico y antibioticoterapia empírica, dado que el cuadro cumple los tres criterios de Anthonisen para exacerbación infecciosa.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "El paciente cursa con una **Exacerbación Aguda de EPOC de origen infeccioso**, evidenciada por el cumplimiento de los **tres criterios de Anthonisen** (aumento de la disnea, aumento del volumen del esputo y esputo purulento), que justifican el uso de antibiótico empírico. El pilar del tratamiento farmacológico incluye **broncodilatadores de acción corta nebulizados** (beta-2 agonista de acción corta más anticolinérgico) y **corticosteroide sistémico**, que reduce la duración de la exacerbación y el riesgo de recaída. Dado que el paciente presenta **insuficiencia respiratoria aguda hipercápnica con acidosis** (pH 7.30, PaCO2 62 mmHg), y se encuentra alerta y sin contraindicaciones, el soporte ventilatorio de elección es la **ventilación mecánica no invasiva (VMNI/BiPAP)**, que ha demostrado reducir la mortalidad, la tasa de intubación y la estancia hospitalaria en este contexto; la ventilación invasiva se reserva para la falla de la VMNI, la intolerancia, el deterioro del estado de conciencia o el paro respiratorio inminente.",
    keyPoints: [
      "Exacerbación de EPOC con los 3 criterios de Anthonisen (↑disnea + ↑volumen esputo + esputo purulento) = indicación de antibiótico. Acidosis respiratoria (pH <7.35) en paciente alerta = indicación de VMNI.",
      "Exacerbación de EPOC. Manejo: broncodilatadores nebulizados + corticosteroide sistémico + antibiótico (si cumple Anthonisen) + VMNI si hay acidosis respiratoria; intubación solo si falla o está contraindicada la VMNI. Oxígeno titulado a SpO2 88-92%, no a alto flujo indiscriminado.",
      "Exacerbación de EPOC / Manejo de Urgencias.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-05",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEFROLOGÍA / URGENCIAS",
    topic: "Lesión Renal Aguda",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "lesion-renal-aguda"],
    statement:
      "Una mujer de 75 años consulta por un cuadro de gastroenteritis aguda con vómito y diarrea abundante de 4 días de evolución, con escasa ingesta de líquidos. Al examen físico se encuentra hipotensa (PA 92/58 mmHg), taquicárdica, con mucosas secas y signo del pliegue cutáneo positivo. Los laboratorios muestran creatinina 2.4 mg/dL (basal conocido de 0.9 mg/dL hace un mes), relación BUN/creatinina elevada, fracción excretada de sodio (FENa) menor a 1%, sodio urinario menor a 20 mEq/L y densidad urinaria elevada (>1.020). El sedimento urinario no muestra cilindros ni células epiteliales tubulares. ¿Cuál es la conducta terapéutica INICIAL más apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar furosemida intravenosa para forzar la diuresis y \"proteger\" la función renal ante el ascenso de la creatinina.",
        distractorProfile: "opposite_of_correct_management_may_worsen_hypovolemia",
        incorrectFeedback:
          "En una azotemia prerrenal por depleción de volumen, administrar un diurético de asa empeora la hipovolemia subyacente y perpetúa la hipoperfusión renal, pudiendo precipitar la progresión hacia necrosis tubular aguda; los diuréticos no tienen ningún papel en el manejo inicial de esta condición.",
      },
      {
        id: "B",
        label: "B",
        text: "Reposición de volumen con cristaloides isotónicos por vía intravenosa, manejo de la causa desencadenante (gastroenteritis) y suspensión de cualquier fármaco potencialmente nefrotóxico (por ejemplo, AINEs o IECA/ARA-II, si los recibiera).",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar hemodiálisis urgente de inmediato, dado el ascenso significativo de la creatinina respecto al valor basal.",
        distractorProfile: "premature_dialysis_without_trial_of_volume_repletion",
        incorrectFeedback:
          "La hemodiálisis se reserva para indicaciones específicas (hiperkalemia refractaria, acidosis metabólica severa, sobrecarga de volumen refractaria o uremia sintomática); en una azotemia prerrenal sin estas complicaciones, la reposición de volumen suele revertir la lesión renal sin necesidad de terapia de reemplazo renal, por lo que indicarla de entrada es un sobretratamiento innecesario y riesgoso.",
      },
      {
        id: "D",
        label: "D",
        text: "Solicitar biopsia renal percutánea de forma inmediata para descartar necrosis tubular aguda antes de iniciar cualquier tratamiento.",
        distractorProfile: "unnecessary_invasive_testing_when_clinical_picture_is_clear",
        incorrectFeedback:
          "El cuadro clínico (antecedente de pérdidas gastrointestinales, hipotensión, FENa <1%, sodio urinario bajo, orina concentrada y sedimento sin cilindros ni células tubulares) ya es característico de azotemia PRERRENAL y no requiere biopsia para su diagnóstico; este procedimiento invasivo solo se reserva para casos con etiología incierta o sospecha de enfermedad glomerular/intersticial tras descartar causas prerrenales y posrenales.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "La paciente cursa con una **Lesión Renal Aguda de origen Prerrenal**, secundaria a depleción de volumen por pérdidas gastrointestinales (vómito y diarrea) con ingesta oral insuficiente. Los hallazgos de laboratorio clásicos que diferencian la azotemia prerrenal de la lesión intrínseca (necrosis tubular aguda) son: **FENa menor a 1%** (el riñón, aún funcional, retiene sodio y agua ávidamente en respuesta a la hipoperfusión), sodio urinario bajo, orina concentrada (densidad elevada) y **ausencia de cilindros granulosos pigmentados o células epiteliales tubulares** en el sedimento (que sí se observarían en necrosis tubular aguda establecida). El tratamiento de la azotemia prerrenal es restaurar la perfusión renal mediante **reposición de volumen con cristaloides isotónicos**, tratar la causa desencadenante y evitar/suspender nefrotóxicos, ya que este trastorno es potencialmente reversible por completo si se corrige tempranamente, antes de que progrese a daño tubular estructural.",
    keyPoints: [
      "Depleción de volumen (vómito, diarrea, hemorragia) + FENa <1% + sodio urinario bajo + orina concentrada + sedimento sin cilindros/células tubulares = azotemia prerrenal.",
      "Lesión Renal Aguda Prerrenal. Manejo: reposición de volumen con cristaloides isotónicos, tratar la causa desencadenante y suspender nefrotóxicos. Es reversible si se corrige tempranamente; los diuréticos y la diálisis no están indicados de entrada.",
      "Lesión Renal Aguda / Diferenciación Prerrenal vs. Intrínseca.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-06",
    university: "UCC",
    examArea: "MEDICINA INTERNA - ENDOCRINOLOGÍA / URGENCIAS",
    topic: "Cetoacidosis Diabética",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "cetoacidosis-diabetica"],
    statement:
      "Un hombre de 24 años con diabetes mellitus tipo 1 conocida, que suspendió su insulina por una gastroenteritis intercurrente, consulta por poliuria, polidipsia, dolor abdominal difuso, vómito y respiración de Kussmaul de 24 horas de evolución. Se encuentra alerta pero deshidratado. Los laboratorios muestran: glucosa 480 mg/dL, pH arterial 7.15, bicarbonato sérico 8 mEq/L, cetonas positivas en sangre y orina, y potasio sérico 3.2 mEq/L. El anión gap está elevado. Se confirma el diagnóstico de cetoacidosis diabética grave y se inicia fluidoterapia con solución salina isotónica. ¿Cuál es la conducta CORRECTA respecto al inicio de la insulinoterapia en este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Continuar la fluidoterapia con solución salina isotónica e iniciar reposición de potasio intravenoso de inmediato, RETRASANDO el inicio de la insulina hasta confirmar que el potasio sérico sea igual o mayor a 3.3 mEq/L.",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar un bolo intravenoso de insulina regular de inmediato como prioridad máxima, dada la hiperglucemia severa, sin necesidad de verificar previamente el potasio sérico.",
        distractorProfile: "insulin_before_correcting_hypokalemia",
        incorrectFeedback:
          "La insulina desplaza el potasio hacia el espacio intracelular; en un paciente con potasio sérico ya bajo-normal (3.2 mEq/L), iniciar insulina sin corregir primero el potasio puede precipitar una hipokalemia severa con riesgo de arritmias potencialmente fatales. La regla es verificar el potasio ANTES de administrar insulina, y si es menor a 3.3 mEq/L, reponerlo primero.",
      },
      {
        id: "C",
        label: "C",
        text: "Administrar bicarbonato de sodio intravenoso en bolo de inmediato para corregir la acidemia severa, antes de cualquier otra medida terapéutica.",
        distractorProfile: "unnecessary_bicarbonate_in_moderate_acidemia",
        incorrectFeedback:
          "El bicarbonato de sodio no está indicado de rutina en la cetoacidosis diabética salvo en acidemia extrema (pH <6.9), ya que su uso rutinario se asocia a edema cerebral (especialmente en jóvenes), hipokalemia de rebote y alcalosis metabólica tardía; con pH 7.15 el manejo estándar con líquidos e insulina corrige la acidosis de forma fisiológica.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar insulina subcutánea de acción rápida cada 4 horas, ya que tiene eficacia equivalente a la infusión intravenosa continua en el manejo de la cetoacidosis diabética.",
        distractorProfile: "wrong_route_and_regimen_for_dka",
        incorrectFeedback:
          "En la cetoacidosis diabética, la vía de elección es la infusión intravenosa continua de insulina regular, que permite un control más preciso y predecible de la glucemia y la resolución de la cetosis; la vía subcutánea tiene absorción errática en presencia de deshidratación/hipoperfusión periférica y no es el estándar en el manejo agudo.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "El paciente cursa con una **Cetoacidosis Diabética (CAD) grave**, definida por hiperglucemia, acidosis metabólica con anión gap elevado (pH 7.15, bicarbonato 8 mEq/L) y cetonemia/cetonuria positivas. El manejo se estructura en una secuencia estricta: (1) **fluidoterapia con solución salina isotónica** para restaurar el volumen intravascular; (2) **verificación del potasio sérico ANTES de iniciar insulina**, ya que la insulina promueve la entrada de potasio a la célula, y si el potasio es menor a 3.3 mEq/L, la insulina debe **retrasarse** hasta reponer potasio y elevarlo a un nivel seguro, para evitar hipokalemia severa con riesgo de arritmias potencialmente fatales; (3) una vez el potasio es igual o mayor a 3.3 mEq/L, se inicia la **infusión intravenosa continua de insulina regular**. El bicarbonato solo se reserva para acidemia extrema (pH <6.9), y la vía subcutánea no es apropiada en el manejo agudo de la CAD.",
    keyPoints: [
      "En cetoacidosis diabética, SIEMPRE verificar el potasio sérico antes de iniciar insulina: si K+ <3.3 mEq/L, reponer potasio primero y retrasar la insulina para evitar hipokalemia severa/arritmias.",
      "Cetoacidosis Diabética. Secuencia de manejo: líquidos IV → verificar/corregir potasio → infusión IV continua de insulina regular. Bicarbonato solo si pH <6.9; la vía subcutánea no es de elección en el manejo agudo.",
      "Cetoacidosis Diabética / Diagnóstico y Manejo Inicial.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-07",
    university: "UCC",
    examArea: "MEDICINA INTERNA - ENDOCRINOLOGÍA / URGENCIAS",
    topic: "Tormenta Tiroidea",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "tormenta-tiroidea"],
    statement:
      "Una mujer de 38 años con enfermedad de Graves mal controlada, cuatro días después de una colecistectomía, presenta fiebre de 39.5°C, taquicardia sinusal de 150 lpm con fibrilación auricular de nueva aparición, agitación psicomotora con delirium, diaforesis profusa, vómito y diarrea. Su puntaje en la escala de Burch-Wartofsky es altamente sugestivo de tormenta tiroidea. Se confirman niveles de T4 libre y T3 marcadamente elevados con TSH suprimida. Además de las medidas de soporte general (enfriamiento activo, líquidos IV, tratamiento del factor precipitante), ¿cuál es la secuencia farmacológica CORRECTA para el manejo específico de esta emergencia endocrinológica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar solución de yodo (Lugol) de inmediato como primer fármaco, seguida de propiltiouracilo.",
        distractorProfile: "wrong_order_iodine_before_thionamide",
        incorrectFeedback:
          "Administrar yodo ANTES de bloquear la síntesis hormonal con un tionamida es un error grave: el exceso de yodo puede ser utilizado por la glándula tiroides como sustrato para sintetizar aún más hormona tiroidea (efecto Jod-Basedow), empeorando la tormenta tiroidea. El yodo siempre debe administrarse DESPUÉS del tionamida, nunca antes.",
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar únicamente betabloqueador y antipirético, sin antitiroideos ni yodo, ya que el objetivo inmediato es exclusivamente controlar la frecuencia cardiaca y la fiebre.",
        distractorProfile: "incomplete_therapy_omitting_hormone_synthesis_blockade",
        incorrectFeedback:
          "El control sintomático con betabloqueador y medidas antipiréticas es necesario pero insuficiente por sí solo: sin bloquear la síntesis (tionamida) y la liberación (yodo) de hormona tiroidea, y sin bloquear la conversión periférica de T4 a T3 (glucocorticoide), la tormenta tiroidea no se resuelve y el paciente permanece en riesgo vital.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar propiltiouracilo (o metimazol) de inmediato, seguido de solución de yodo al menos una hora después, más propranolol e hidrocortisona intravenosa, además de las medidas de soporte y el tratamiento del factor precipitante.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar levotiroxina en dosis bajas para \"estabilizar\" gradualmente el eje tiroideo mientras se controla la fiebre con antipiréticos.",
        distractorProfile: "incorrect_pharmacologic_class_worsening_thyrotoxicosis",
        incorrectFeedback:
          "Administrar levotiroxina (hormona tiroidea exógena) en un paciente con tirotoxicosis severa es contrario a la fisiopatología del cuadro: aportaría más hormona tiroidea a un paciente que ya tiene un exceso circulante potencialmente letal, empeorando dramáticamente la tormenta tiroidea.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "La paciente cursa con una **Tormenta Tiroidea**, una emergencia endocrinológica potencialmente letal precipitada en este caso por el estrés quirúrgico en una paciente con hipertiroidismo mal controlado, y caracterizada por fiebre, taquiarritmia, alteración del estado mental y disfunción multisistémica. El tratamiento farmacológico específico sigue una secuencia lógica basada en la fisiopatología: primero se bloquea la **síntesis** de nueva hormona tiroidea con un tionamida (**propiltiouracilo o metimazol**); **al menos una hora después** se administra **yodo** (solución de Lugol o yoduro de potasio) para bloquear agudamente la **liberación** de la hormona ya preformada (efecto Wolff-Chaikoff), evitando administrarlo antes del tionamida para que el yodo no sea usado como sustrato de nueva síntesis; simultáneamente se usa **propranolol** para el control adrenérgico (frecuencia cardiaca, temblor, ansiedad) y además bloquea parcialmente la conversión periférica de T4 a T3; y se administra **hidrocortisona** intravenosa, que bloquea la conversión periférica de T4 a T3 y cubre una posible insuficiencia suprarrenal relativa asociada al estado hipermetabólico extremo.",
    keyPoints: [
      "Tirotoxicosis severa + fiebre + taquiarritmia + alteración del estado mental + factor precipitante (cirugía, infección) = sospechar Tormenta Tiroidea (evaluar con escala de Burch-Wartofsky).",
      "Tormenta Tiroidea. Secuencia: tionamida (propiltiouracilo/metimazol) → yodo al menos 1 hora después → propranolol + hidrocortisona IV, más enfriamiento y tratamiento del factor precipitante. Nunca dar yodo antes del tionamida ni levotiroxina.",
      "Tormenta Tiroidea / Emergencias Endocrinológicas.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-08",
    university: "UCC",
    examArea: "MEDICINA INTERNA - INFECTOLOGÍA / CUIDADO INTENSIVO",
    topic: "Sepsis y Choque Séptico",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "sepsis-choque-septico"],
    statement:
      "Un hombre de 70 años consulta a urgencias con fiebre, escalofríos y dolor en flanco derecho, con diagnóstico de pielonefritis aguda complicada. Al ingreso presenta PA 78/45 mmHg, FC 128 lpm, y alteración leve del estado de conciencia. Se toman hemocultivos y se inicia antibioticoterapia empírica de amplio espectro dentro de la primera hora, junto con reanimación con 30 mL/kg de cristaloides isotónicos en la primera hora. Al reevaluar al paciente tras completar la reanimación hídrica, persiste con PA 82/48 mmHg (PAM 59 mmHg) y lactato de control en 4.8 mmol/L (elevado), cumpliendo criterios de choque séptico. ¿Cuál es el paso siguiente más apropiado en el manejo de este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Continuar administrando bolos adicionales de cristaloides de forma indefinida hasta normalizar la presión arterial, sin iniciar vasopresores.",
        distractorProfile: "excessive_fluids_without_vasopressor_in_refractory_shock",
        incorrectFeedback:
          "Cuando la hipotensión persiste a pesar de una reanimación hídrica adecuada (30 mL/kg), continuar con líquidos ilimitados sin iniciar vasopresor retrasa la restauración de la perfusión tisular y aumenta el riesgo de sobrecarga de volumen (edema pulmonar, síndrome compartimental abdominal); en el choque séptico refractario a líquidos, el siguiente paso es iniciar un vasopresor.",
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar dopamina en \"dosis renal\" (baja dosis) con el objetivo de proteger la función renal antes de considerar otros vasopresores.",
        distractorProfile: "outdated_renal_dose_dopamine_myth",
        incorrectFeedback:
          "El concepto de \"dosis renal\" de dopamina para proteger el riñón ha sido descartado por la evidencia: no reduce la incidencia de lesión renal aguda ni mejora desenlaces, y su uso retrasa el inicio del vasopresor de primera línea recomendado en las guías actuales de sepsis.",
      },
      {
        id: "C",
        label: "C",
        text: "Esperar el resultado de los hemocultivos antes de haber iniciado o de ajustar la antibioticoterapia, para dirigir la terapia de forma más precisa.",
        distractorProfile: "dangerous_delay_of_empiric_antibiotics",
        incorrectFeedback:
          "En sepsis y choque séptico, la antibioticoterapia empírica de amplio espectro debe iniciarse dentro de la primera hora del reconocimiento, sin esperar los resultados de cultivos (que tardan 24-72 horas); cada hora de retraso en el inicio del antibiótico se asocia a un aumento medible de la mortalidad.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar norepinefrina intravenosa como vasopresor de primera línea para alcanzar una presión arterial media (PAM) igual o mayor a 65 mmHg, manteniendo la antibioticoterapia empírica de amplio espectro ya iniciada y buscando activamente el control del foco infeccioso.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "El paciente cursa con un **Choque Séptico** de origen urinario (pielonefritis complicada), definido por hipotensión persistente que requiere vasopresores para mantener una PAM ≥65 mmHg, junto con un lactato elevado (>2 mmol/L), a pesar de una reanimación hídrica adecuada. El paquete de manejo temprano de la sepsis ('sepsis bundle') incluye: obtención de hemocultivos e **inicio de antibiótico empírico de amplio espectro dentro de la primera hora** (ya realizado), reanimación inicial con cristaloides (30 mL/kg en las primeras 3 horas), medición de lactato, y, si la hipotensión persiste tras la reanimación hídrica (choque séptico refractario a líquidos), el inicio de **norepinefrina** como **vasopresor de primera línea** para restaurar una PAM adecuada y garantizar la perfusión tisular. Paralelamente, debe buscarse y controlarse activamente el foco infeccioso (en este caso, evaluar la necesidad de drenaje si hay obstrucción de la vía urinaria u absceso renal).",
    keyPoints: [
      "Hipotensión y lactato elevado que persisten tras 30 mL/kg de cristaloides = choque séptico refractario a líquidos; el siguiente paso es iniciar vasopresor, no más líquidos indefinidos.",
      "Sepsis y Choque Séptico. Paquete de reanimación temprana: hemocultivos + antibiótico empírico de amplio espectro en la primera hora + cristaloides 30 mL/kg + lactato seriado + norepinefrina (primera línea) si persiste hipotensión + control del foco infeccioso.",
      "Sepsis y Choque Séptico / Manejo Temprano.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-09",
    university: "UCC",
    examArea: "MEDICINA INTERNA - HEMATOLOGÍA / URGENCIAS",
    topic: "Anemia Hemolítica Autoinmune",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "anemia-hemolitica-autoinmune"],
    statement:
      "Una mujer de 45 años, sin antecedentes relevantes, consulta por fatiga progresiva, ictericia de piel y escleras, y orina de color oscuro de 2 semanas de evolución. Los laboratorios muestran: hemoglobina 7.2 g/dL, reticulocitos 8% (elevados), bilirrubina indirecta elevada, deshidrogenasa láctica (LDH) marcadamente elevada, y haptoglobina indetectable. El frotis de sangre periférica muestra abundantes esferocitos y policromatofilia, sin esquistocitos. Ante la sospecha de una anemia hemolítica de mecanismo autoinmune, ¿cuál es la prueba diagnóstica de PRIMERA LÍNEA que permite CONFIRMAR el mecanismo inmunomediado y orientar el estudio etiológico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Electroforesis de hemoglobina, para descartar hemoglobinopatías como causa del cuadro hemolítico.",
        distractorProfile: "wrong_test_for_suspected_mechanism",
        incorrectFeedback:
          "El patrón de hemólisis presentado (esferocitos en el frotis, sin antecedente familiar ni datos que sugieran hemoglobinopatía) orienta hacia un mecanismo inmunomediado, no estructural de la hemoglobina; la electroforesis de hemoglobina es útil para talasemias o hemoglobinopatías estructurales (como la drepanocitosis), pero no es la prueba que confirma o descarta el mecanismo autoinmune en este contexto.",
      },
      {
        id: "B",
        label: "B",
        text: "Prueba de antiglobulina directa (test de Coombs directo), que detecta la presencia de anticuerpos y/o complemento adheridos a la superficie de los eritrocitos.",
      },
      {
        id: "C",
        label: "C",
        text: "Aspirado y biopsia de médula ósea, como primer paso obligatorio para descartar un síndrome mielodisplásico subyacente.",
        distractorProfile: "unnecessary_invasive_test_as_first_step",
        incorrectFeedback:
          "El aspirado de médula ósea es un procedimiento invasivo que no es necesario como primer paso cuando el patrón periférico (reticulocitosis marcada, LDH elevada, haptoglobina indetectable, esferocitos) ya es compatible con hemólisis autoinmune extravascular; la prueba no invasiva y de mayor rendimiento inicial es el test de Coombs directo.",
      },
      {
        id: "D",
        label: "D",
        text: "Determinación de niveles séricos de vitamina B12 y ácido fólico, dado que la anemia megaloblástica es la causa más probable de este cuadro.",
        distractorProfile: "wrong_diagnostic_category_ignoring_hemolysis_markers",
        incorrectFeedback:
          "El cuadro descrito (reticulocitosis marcada, bilirrubina indirecta y LDH elevadas, haptoglobina indetectable, esferocitos en el frotis) es característico de hemólisis, con producción medular compensadora aumentada; la anemia megaloblástica por déficit de B12/folato cursa típicamente con reticulocitos bajos/inadecuados y macrocitosis con hipersegmentación de neutrófilos, un patrón distinto al presentado.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "La paciente cursa con una **Anemia Hemolítica** evidenciada por el patrón de laboratorio clásico de hemólisis: reticulocitosis (respuesta medular compensadora), elevación de bilirrubina indirecta y LDH (liberadas por la destrucción eritrocitaria), y haptoglobina indetectable (consumida al unirse a la hemoglobina libre). La presencia de **esferocitos** en el frotis de sangre periférica, sin esquistocitos (que orientarían a hemólisis microangiopática/mecánica), sugiere un mecanismo de hemólisis **extravascular mediado por anticuerpos**, en el cual los macrófagos esplénicos retiran fragmentos de membrana de los eritrocitos recubiertos de anticuerpos, dándoles su forma esférica característica. La prueba diagnóstica de primera línea para confirmar el mecanismo autoinmune es la **prueba de antiglobulina directa (test de Coombs directo)**, que detecta anticuerpos (IgG) y/o fragmentos del complemento (C3d) unidos a la membrana eritrocitaria; un resultado positivo confirma el diagnóstico de **Anemia Hemolítica Autoinmune (AHAI)** y orienta el estudio posterior hacia la búsqueda de causas secundarias (enfermedades autoinmunes sistémicas, neoplasias linfoproliferativas, fármacos o infecciones).",
    keyPoints: [
      "Anemia con reticulocitosis + bilirrubina indirecta y LDH elevadas + haptoglobina indetectable + esferocitos en frotis (sin esquistocitos) = hemólisis extravascular, sugestiva de mecanismo autoinmune.",
      "Anemia Hemolítica Autoinmune. Prueba diagnóstica de primera línea: test de Coombs directo (antiglobulina directa), que detecta IgG y/o complemento en la membrana eritrocitaria. Un resultado positivo confirma el mecanismo y orienta la búsqueda de causa secundaria.",
      "Anemia Hemolítica Autoinmune / Enfoque Diagnóstico.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-10",
    university: "UCC",
    examArea: "MEDICINA INTERNA - TOXICOLOGÍA / URGENCIAS",
    topic: "Intoxicación por Acetaminofén",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "intoxicacion-acetaminofen"],
    statement:
      "Una mujer de 32 años, con antecedente de un intento previo de autolesión, es traída a urgencias por un familiar aproximadamente 30 horas después de haber ingerido una cantidad no precisada de tabletas de acetaminofén, en al menos dos tomas separadas durante las últimas 24 a 30 horas (ingesta escalonada, sin hora exacta conocida). Al ingreso refiere dolor en hipocondrio derecho, náuseas y presenta ictericia leve de escleras. Los laboratorios muestran: AST 850 U/L, ALT 920 U/L, INR 1.8, bilirrubina total 3.2 mg/dL, y un nivel sérico de acetaminofén detectable de 15 mcg/mL. Dado que la hora exacta y el patrón de la ingesta son inciertos, el nomograma de Rumack-Matthew no puede aplicarse de forma confiable para esta paciente. ¿Cuál es la conducta terapéutica CORRECTA en este momento?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar N-acetilcisteína (NAC) por vía intravenosa de inmediato, sin necesidad de poder graficar un nivel único en el nomograma de Rumack-Matthew, dado que ya existe evidencia clínica y bioquímica de toxicidad hepática establecida (transaminasas e INR elevados, más un nivel sérico de acetaminofén todavía detectable).",
      },
      {
        id: "B",
        label: "B",
        text: "No se puede iniciar tratamiento porque el nomograma de Rumack-Matthew no es aplicable a este caso; se debe repetir un nuevo nivel sérico en un momento de tiempo conocido antes de tomar cualquier decisión terapéutica.",
        distractorProfile: "overreliance_on_nomogram_ignoring_clinical_evidence",
        incorrectFeedback:
          "El nomograma de Rumack-Matthew solo es interpretable en ingestas agudas ÚNICAS con hora de ingesta conocida; en ingestas escalonadas, de tiempo incierto, o cuando ya hay evidencia clínica/bioquímica de daño hepático (transaminasas e INR elevados), la decisión de iniciar NAC se basa en el cuadro clínico y no debe esperar un nuevo nivel, ya que cada hora de retraso reduce la eficacia hepatoprotectora del antídoto.",
      },
      {
        id: "C",
        label: "C",
        text: "Indicar carbón activado en dosis múltiples como única medida terapéutica, dado que han transcurrido más de 24 horas desde la ingesta y la N-acetilcisteína ya no tendría ninguna utilidad a estas alturas.",
        distractorProfile: "false_belief_nac_ineffective_after_24h",
        incorrectFeedback:
          "El carbón activado pierde utilidad después de la primera hora de la ingesta y no sustituye al antídoto específico. La N-acetilcisteína, aunque es más eficaz cuando se administra tempranamente, conserva un beneficio hepatoprotector demostrado incluso en presentaciones tardías con daño hepático ya establecido, por lo que debe administrarse independientemente del tiempo transcurrido.",
      },
      {
        id: "D",
        label: "D",
        text: "Remitir de inmediato para evaluación de trasplante hepático urgente, dado el patrón de daño hepatocelular con coagulopatía (INR elevado), sin haber iniciado antes ninguna otra medida.",
        distractorProfile: "premature_transplant_referral_without_first_line_therapy",
        incorrectFeedback:
          "Aunque la elevación de transaminasas y del INR son datos que deben vigilarse estrechamente (y eventualmente evaluarse con criterios pronósticos como los del King's College si progresa a falla hepática fulminante), remitir a trasplante como primera medida, sin haber iniciado la N-acetilcisteína, omite el tratamiento de primera línea que puede evitar la progresión hacia falla hepática franca.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "La paciente cursa con una **Intoxicación por Acetaminofén (Paracetamol) con hepatotoxicidad ya establecida**, en el contexto de una ingesta de tiempo incierto o escalonada, situación en la cual el **Nomograma de Rumack-Matthew NO es aplicable**, ya que este solo es válido para ingestas agudas únicas con hora de inicio conocida y niveles medidos entre las 4 y 24 horas post-ingesta. Cuando la hora de la ingesta es desconocida, es escalonada/crónica, o cuando ya existe **evidencia clínica y bioquímica de daño hepático** (transaminasas marcadamente elevadas, coagulopatía con INR prolongado, ictericia) junto con un nivel sérico de acetaminofén todavía detectable, la decisión de tratar con **N-acetilcisteína (NAC) intravenosa** se basa en estos criterios clínicos y no debe retrasarse esperando poder graficar un nivel en el nomograma. La NAC repone las reservas de glutatión hepático y neutraliza al metabolito tóxico NAPQI, y conserva beneficio hepatoprotector incluso en presentaciones tardías con daño ya establecido, por lo que su inicio inmediato es la conducta correcta, reservando la evaluación para trasplante hepático (con criterios pronósticos específicos) para los casos que progresen a falla hepática fulminante a pesar del tratamiento.",
    keyPoints: [
      "El nomograma de Rumack-Matthew solo aplica a ingesta aguda única de hora conocida; en ingestas escalonadas, de tiempo incierto, o con daño hepático ya evidente (transaminasas/INR elevados), la NAC se inicia por criterio clínico, sin esperar poder graficar un nivel.",
      "Intoxicación por Acetaminofén con hepatotoxicidad establecida. Tratamiento: N-Acetilcisteína (NAC) inmediata, que conserva beneficio incluso en presentación tardía; el trasplante hepático se reserva para falla hepática fulminante según criterios pronósticos.",
      "Intoxicación por Acetaminofén / Antídoto y Manejo según Contexto Clínico.",
    ],
  },
];
