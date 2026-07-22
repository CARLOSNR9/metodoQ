import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #3 (19 jul 2025) Â· Preguntas #01”“#10.
 * Banco exclusivo del examen oficial quincenal Pro.
 */
export const UCC_CONV_2025_07_19_01_10_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2025-07-19-01",
    university: "UCC",
    examArea: "Medicina Interna / Cardiología / Toxicología",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "cardiologia", "toxicologia"],
    statement: "Hombre de 32 años es traído a urgencias por presentar dolor retroesternal opresivo de intensidad 9/10, diaforesis profusa y agitación psicomotriz. Sus amigos refieren consumo intensivo de cocaína intranasal hace una hora. Al examen físico: midriasis bilateral reactiva, PA 190/115 mmHg, FC 135 lpm, FR 24 rpm. El electrocardiograma de ingreso evidencia una taquicardia sinusal con infradesnivel del segmento ST de 2 mm en las derivaciones V2 a V5. Se administran de inmediato dosis repetidas de Lorazepam intravenoso y Nitroglicerina sublingual, pero el paciente persiste con dolor torácico severo, taquicardia y cifras tensionales de 185/110 mmHg tras 20 minutos de manejo. ¿Cuál es la conducta farmacológica MÁS apropiada a continuación?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar Labetalol intravenoso en bolos para controlar de forma dual la presión arterial y la frecuencia cardíaca.",
        distractorProfile: "contraindicated_in_cocaine_use",
        incorrectFeedback: "Está ABSOLUTAMENTE CONTRAINDICADO el uso de bloqueadores beta (incluso los mixtos como el Labetalol) debido al fenómeno de 'estimulación alfa sin oposición', que agrava el vasoespasmo coronario."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar infusión de Esmolol para disminuir el consumo miocárdico de oxígeno mediante un bloqueo beta-1 ultra corto.",
        distractorProfile: "contraindicated_in_cocaine_use",
        incorrectFeedback: "El uso de beta-bloqueadores (incluso selectivos o de corta acción) en isquemia por cocaína puede desencadenar estimulación alfa no opuesta y muerte."
      },
      {
        id: "C",
        label: "C",
        text: "Administrar Fentaminilo intravenoso e iniciar infusión de Phentolamina (o Nitroprusiato) para control vascular periférico."
      },
      {
        id: "D",
        label: "D",
        text: "Activar el código infarto y administrar Tenecteplase por sospecha de oclusión coronaria aguda trombótica.",
        distractorProfile: "wrong_pathophysiology",
        incorrectFeedback: "La causa principal de la isquemia es el vasoespasmo adrenérgico, no una oclusión trombótica primaria. Los trombolíticos no son la primera línea en este contexto sin evidencia de IAMCEST persistente tras vasodilatadores."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta un síndrome coronario agudo inducido por cocaína. La fisiopatología se basa en un vasoespasmo coronario severo mediado por receptores alfa-adrenérgicos, asociado a aumento de la demanda miocárdica (taquicardia, hipertensión) y un estado protrombótico. La primera línea de manejo son las benzodiacepinas (Lorazepam/Diazepam) para disminuir el tono simpático central, junto con Nitroglicerina. Si hay refractariedad, el uso de vasodilatadores puros o bloqueadores alfa puros (Phentolamina) es el paso a seguir. Está ABSOLUTAMENTE CONTRAINDICADO el uso de bloqueadores beta (incluso los mixtos como el Labetalol según las guías de la AHA) debido al fenómeno de 'estimulación alfa sin oposición', el cual agrava el vasoespasmo coronario y la hipertensión sistémica de forma letal.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Colega, esta es una trampa clásica de ACLS/AHA. El estudiante ve a un paciente hipertenso y taquicárdico infartándose y su reflejo medular es poner un beta-bloqueador para bajar el doble producto. En el contexto de cocaína, si bloqueas los receptores beta-2 (que vasodilatan), dejas a las catecolaminas actuando libremente sobre los receptores alfa-1, cerrando las coronarias como una guillotina. Las guías más recientes de la AHA mantienen la contraindicación de TODOS los beta-bloqueadores (incluso el Labetalol) en las primeras 24 horas del consumo de cocaína.",
    keyPoints: [
      "Paciente joven con dolor torácico agudo + signos de hiperactividad simpática (midriasis, agitación, HTA) + consumo de cocaína.",
      "Refractariedad a benzodiacepinas y nitratos.",
      "Vasoespasmo coronario adrenérgico. Los Beta-bloqueadores (incluyendo Labetalol y Carvedilol) están formalmente proscritos en la fase aguda.",
      "Tema: SCA por Cocaína / Toxicología Cardíaca."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-02",
    university: "UCC",
    examArea: "Medicina Interna / Nefrología",
    topic: "Nefrología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "nefrologia", "litio"],
    statement: "Hombre de 45 años, con antecedente de Trastorno Afectivo Bipolar en manejo crónico con Carbonato de Litio desde hace 8 años, consulta por un cuadro de poliuria masiva (orina hasta 7 litros al día) y polidipsia extrema. Se documenta una hipernatremia de 155 mEq/L. La osmolaridad urinaria reporta 120 mOsm/kg H2O (orina muy diluida) con una osmolaridad plasmática de 320 mOsm/kg. Se realiza una prueba de privación de agua seguida de la administración de Desmopresina (DDAVP) exógena subcutánea. Tras 2 horas de la inyección, la osmolaridad urinaria se mantiene en 125 mOsm/kg H2O (ausencia de respuesta). ¿Cuál es la estrategia farmacológica a largo plazo MÁS adecuada para corregir este trastorno, asumiendo que el psiquiatra suspende el Litio?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Reiniciar Desmopresina en aerosol nasal a dosis más altas de forma permanente.",
        distractorProfile: "wrong_diagnosis_central_di",
        incorrectFeedback: "La ausencia de respuesta a la prueba de privación de agua con DDAVP descarta la diabetes insípida central. Administrar más hormona no solucionará la resistencia tubular."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar Amilorida por vía oral y prescribir una dieta baja en sodio."
      },
      {
        id: "C",
        label: "C",
        text: "Prescribir Tolvaptán oral para bloquear los receptores de vasopresina y regular el volumen libre.",
        distractorProfile: "wrong_indication_tolvaptan",
        incorrectFeedback: "El Tolvaptán (antagonista V2) exacerbaría la poliuria e hipernatremia, ya que bloquea el efecto antidiurético restante."
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar suplementación agresiva con Cloruro de Potasio y suspender de inmediato el aporte de agua libre.",
        distractorProfile: "dangerous_intervention_water_deprivation",
        incorrectFeedback: "Suspender el aporte de agua libre en un paciente con DIN y poliuria masiva causará una hipernatremia letal rápidamente."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta una Diabetes Insípida Nefrogénica (DIN) clásica, en este caso inducida por la toxicidad crónica del Litio. La falta de respuesta a la desmopresina exógena (el riñón no concentra la orina) confirma que el problema no es central (falta de hormona), sino tubular (resistencia a la ADH). El litio entra a las células principales del túbulo colector a través de los canales de sodio epiteliales (ENaC), donde interfiere con la inserción de las acuaporinas. El tratamiento farmacológico específico es la Amilorida, un diurético ahorrador de potasio que bloquea directamente el canal ENaC, impidiendo que el litio penetre en la célula tubular y permitiendo la recuperación progresiva de la sensibilidad a la ADH. Se asocia con dieta baja en sodio para disminuir la carga osmolar distal.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Aquí el detalle fino es la farmacología renal. Uno pensaría que dar un diurético (Amilorida o Tiazidas) a alguien que orina 7 litros al día es una locura. Sin embargo, en la DIN, inducir una leve depleción de volumen en el túbulo proximal fuerza al riñón a reabsorber más agua de forma pasiva al principio de la nefrona, reduciendo el volumen que llega al túbulo colector enfermo. La Amilorida tiene el 'superpoder' adicional de cerrar la puerta (ENaC) por donde el litio entra a intoxicar la célula.",
    keyPoints: [
      "Paciente psiquiátrico (usuario de litio) con poliuria y polidipsia + Hipernatremia.",
      "Prueba de Desmopresina NEGATIVA (la orina sigue diluida).",
      "Diabetes Insípida Nefrogénica por Litio. El tratamiento fisiopatológico es suspender el tóxico y administrar Amilorida.",
      "Tema: Trastornos del Sodio / Diabetes Insípida."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-03",
    university: "UCC",
    examArea: "Pediatría / Cirugía / Gastroenterología",
    topic: "Pediatría",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "cirugia"],
    statement: "Lactante masculino de 3 semanas de vida, previamente sano y con ganancia de peso normal, es traído a urgencias por presentar hace 4 horas episodios súbitos de llanto inconsolable y vómitos explosivos de color verde oscuro (biliosos). Al examen físico: luce críticamente enfermo, pálido, taquicárdico (FC 185 lpm), llenado capilar de 4 segundos. El abdomen se encuentra marcadamente distendido, tenso y muy doloroso a la palpación profunda; no se auscultan ruidos intestinales. Al tacto rectal se evidencia moco sanguinolento. Una radiografía simple de abdomen de pie muestra una evidente escasez de gas en el resto del intestino con una burbuja gástrica dilatada. ¿Cuál es el paso INMEDIATO de mayor impacto para la supervivencia de este paciente tras la reanimación inicial?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Solicitar una serie de vías digestivas altas (SEGD) con bario para confirmar la posición del ángulo de Treitz.",
        distractorProfile: "diagnostic_delay_in_unstable_patient",
        incorrectFeedback: "Este estudio es el estándar de oro, pero solo en el paciente estable. En un lactante chocado con isquemia intestinal aguda, llevarlo a imagenología retrasa la laparotomía salvavidas."
      },
      {
        id: "B",
        label: "B",
        text: "Llevar de forma urgente a quirófano para laparotomía exploratoria por sospecha de vólvulo de intestino medio."
      },
      {
        id: "C",
        label: "C",
        text: "Realizar una ecografía abdominal enfocada para buscar el signo de la 'diana' o el 'pseudoriñón'.",
        distractorProfile: "wrong_suspicion_intussusception",
        incorrectFeedback: "Ese signo es sugestivo de intususcepción (más típica en > 6 meses) y retrasa el diagnóstico de vólvulo que requiere cirugía inmediata."
      },
      {
        id: "D",
        label: "D",
        text: "Instaurar manejo médico con sonda nasogástrica y antibióticos de amplio espectro, difiriendo la cirugía hasta lograr estabilidad hemodinámica total.",
        distractorProfile: "fatal_delay_source_control",
        incorrectFeedback: "La isquemia mesentérica en evolución continuará empeorando el estado de choque; la cirugía es en sí misma parte de la reanimación (control de daños)."
      }
    ],
    correctOptionId: "B",
    explanation: "El cuadro clínico es el de una catástrofe abdominal neonatal: Vómitos biliosos en un neonato/lactante menor deben considerarse Malrotación Intestinal con Vólvulo de Intestino Medio hasta que se demuestre lo contrario. La presencia de inestabilidad hemodinámica (choque), abdomen tenso (peritonitis) y moco sanguinolento (isquemia mucosa) indica que el intestino ya está estrangulado y sufriendo necrosis. En este escenario crítico, está CONTRAINDICADO perder tiempo en estudios de imagen diagnósticos (como las vías digestivas altas, que es el gold standard solo en el paciente estable). La laparotomía de extrema urgencia es obligatoria para destorcer el vólvulo (Procedimiento de Ladd) antes de que se necrose todo el intestino delgado (intestino corto irreversible).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Colega, en cirugía pediátrica, 'vómito bilioso en el neonato = vólvulo hasta que se pruebe lo contrario'. El cirujano tiene una ventana de escasas horas para evitar que ese bebé pierda todo su intestino delgado. La trampa (Opción A) es el estudio con contraste: es el estándar de oro, sí, pero solo si el niño te sonríe y está estable. Si el niño está chocado y sangrando, pasarlo a la sala de rayos X es una condena a muerte. El diagnóstico se hace con el bisturí en la sala de cirugía.",
    keyPoints: [
      "Neonato/Lactante menor (< 1 mes) con vómitos biliosos súbitos.",
      "Signos de isquemia intestinal (choque, abdomen agudo, sangrado rectal).",
      "Vólvulo de intestino medio por malrotación. Si está inestable: Laparotomía urgente inmediata. Si está estable: Serie de vías digestivas altas.",
      "Tema: Abdomen Agudo Neonatal / Vólvulo."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-04",
    university: "UCC",
    examArea: "Medicina Interna / Gastroenterología / Infectología",
    topic: "Gastroenterología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "gastroenterologia", "cirrosis"],
    statement: "Hombre de 62 años, con cirrosis hepática alcohólica (Child-Pugh C) y ascitis crónica refractaria, ingresa a urgencias por fiebre de 39°C, dolor abdominal generalizado intenso y vómitos biliosos. Al examen físico se documenta un abdomen en tabla, con signo de rebote (Blumberg) francamente positivo. Se realiza una paracentesis diagnóstica urgente que reporta: Líquido de aspecto purulento, Leucocitos 5,500/mmÂ³ con 90% de polimorfonucleares (PMN). Proteínas totales en líquido de 3.8 g/dL, Glucosa en líquido de 25 mg/dL, LDH en líquido de 850 U/L. El Gram preliminar reporta cocos Gram positivos, bacilos Gram negativos y abundantes levaduras. ¿Cuál es el diagnóstico más probable y la conducta a seguir?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Peritonitis Bacteriana Espontánea (PBE); iniciar Ceftriaxona IV a dosis de 2 g/día y administrar albúmina humana al 20%.",
        distractorProfile: "misdiagnosis_pbe",
        incorrectFeedback: "La PBE típicamente es monomicrobiana, con líquido con baja proteína (< 1 g/dL) y glucosa normal (no consumida). Los hallazgos descartan PBE."
      },
      {
        id: "B",
        label: "B",
        text: "Peritonitis Secundaria (perforación de víscera hueca); solicitar TC de abdomen urgente, iniciar Piperacilina/Tazobactam + Fluconazol y solicitar valoración por cirugía general."
      },
      {
        id: "C",
        label: "C",
        text: "Ascitis neutrocítica con cultivo negativo; iniciar ciprofloxacino oral y dar de alta con pautas de alarma.",
        distractorProfile: "inappropriate_discharge",
        incorrectFeedback: "Este cuadro es de alta letalidad y urgencia quirúrgica. Un abdomen en tabla y Gram positivo no corresponde a ascitis neutrocítica de manejo ambulatorio."
      },
      {
        id: "D",
        label: "D",
        text: "Peritonitis tuberculosa; aislar al paciente, enviar prueba de GeneXpert en líquido e iniciar terapia antifímica empírica (HRZE).",
        distractorProfile: "wrong_etiology",
        incorrectFeedback: "La peritonitis tuberculosa suele presentar predominio linfocitario crónico y el Gram no evidenciaría flora entérica mixta y levaduras."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cirrótico presenta una infección del líquido ascítico, pero los hallazgos bioquímicos y microbiológicos descartan categóricamente una Peritonitis Bacteriana Espontánea (PBE). Según los Criterios de Runyon, se sospecha una Peritonitis Secundaria (ruptura o perforación de víscera intraabdominal) si el líquido cumple al menos dos de los siguientes tres criterios: Proteínas totales > 1 g/dL, Glucosa < 50 mg/dL o LDH superior al límite sérico normal. Este paciente cumple los tres. Además, el Gram polimicrobiano (incluyendo levaduras, típicas del tracto GI) es el sello de una perforación intestinal. El manejo de la PBE es médico, pero el de la peritonitis secundaria es QUIRÚRGICO, requiriendo cobertura de ultra-amplio espectro y cirugía urgente de control de daños.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Esta es la trampa suprema del paciente hepatópata. Todo el mundo asume que si el PMN es > 250 en un cirrótico, es PBE. Pero la PBE es monomicrobiana (usualmente E. coli) y no consume glucosa ni altera drásticamente las proteínas. Si ves hongos (levaduras) o múltiples tipos de bacterias flotando en el ascítico, el intestino se rompió y derramó su contenido a la cavidad. Ponerle Ceftriaxona (Opción A) y dejarlo en el piso de medicina interna resultará en la muerte del paciente por sepsis intrabdominal no controlada; hay que llamar al cirujano.",
    keyPoints: [
      "Cirrótico con líquido ascítico infectado (PMN > 250).",
      "Líquido con proteínas altas, glucosa muy baja y flora mixta/polimicrobiana en el Gram.",
      "Peritonitis Secundaria (Víscera perforada). Criterios de Runyon positivos. El manejo no es con ceftriaxona, es cirugía urgente y ATB de amplio espectro.",
      "Tema: Complicaciones de Cirrosis / Peritonitis Secundaria."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-05",
    university: "UCC",
    examArea: "Medicina Interna / Neumología / Hematología",
    topic: "Neumología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "neumologia", "trombosis", "cancer"],
    statement: "Hombre de 68 años, con antecedente de Adenocarcinoma Gástrico metastásico actualmente en quimioterapia paliativa. Consulta a urgencias por disnea de inicio súbito, dolor pleurítico derecho y taquicardia. El examen físico revela un miembro inferior izquierdo edematizado y doloroso a la palpación del trayecto venoso profundo. Se realiza una Angio-TC de tórax que confirma un Tromboembolismo Pulmonar (TEP) agudo segmentario y subsegmentario en el lóbulo inferior derecho. Sus signos vitales son estables (PA 130/80 mmHg, FC 98 lpm) y el ecocardiograma no muestra disfunción del ventrículo derecho. Las plaquetas se encuentran en 180,000/mmÂ³ y la depuración de creatinina es de 65 mL/min. ¿Cuál es el tratamiento anticoagulante ambulatorio de PRIMERA LÍNEA MÁS apropiado para este paciente según la evidencia actual?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Apixabán 10 mg cada 12 horas por 7 días, seguido de 5 mg cada 12 horas (Anticoagulante oral directo).",
        distractorProfile: "contraindicated_in_gi_cancer",
        incorrectFeedback: "Aunque de primera línea para muchos cánceres, los DOACs están contraindicados en tumores gastrointestinales luminales por riesgo masivo de hemorragia."
      },
      {
        id: "B",
        label: "B",
        text: "Warfarina oral con un INR objetivo de 2.0 a 3.0, tras una terapia puente de 5 días con heparina.",
        distractorProfile: "suboptimal_in_cancer",
        incorrectFeedback: "La warfarina tiene peores desenlaces (más trombosis recurrente y más sangrado) en cáncer activo y ya no es de primera línea."
      },
      {
        id: "C",
        label: "C",
        text: "Enoxaparina subcutánea a dosis terapéuticas (1 mg/kg cada 12 horas) de forma extendida (al menos 6 meses)."
      },
      {
        id: "D",
        label: "D",
        text: "Inserción de un filtro de vena cava inferior como terapia única debido a la contraindicación de anticoagulación en cáncer digestivo.",
        distractorProfile: "wrong_indication_ivc_filter",
        incorrectFeedback: "No hay contraindicación absoluta para anticoagular. El filtro de vena cava se reserva para pacientes que sí tienen contraindicación absoluta o TEP recurrente pese a anticoagulación plena."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta una Trombosis Asociada a Cáncer (CAT, por sus siglas en inglés). Durante décadas, las Heparinas de Bajo Peso Molecular (HBPM como la Enoxaparina o Dalteparina) fueron el único estándar de oro. Recientemente, las guías de CHEST y ASCO han incorporado a los Anticoagulantes Orales Directos (DOACs, como Apixabán o Rivaroxabán) como primera línea para la mayoría de los cánceres. SIN EMBARGO, existe una advertencia/excepción crítica: los DOACs se asocian a un riesgo inaceptablemente alto de sangrado mayor intraluminal en pacientes con tumores gastrointestinales luminales activos (especialmente gástricos y esofágicos) o genitourinarios. En este grupo específico (cáncer gástrico activo), la Enoxaparina subcutánea sigue siendo estrictamente la terapia de elección, ya que es significativamente más segura respecto al sangrado luminal.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Colega, en los últimos años las guías cambiaron y ahora a casi todo cáncer que hace trombosis se le puede dar DOAC (pastillas, mucha más calidad de vida). Pero la trampa del examen es ponerte el caso exacto de la 'excepción a la regla'. El tejido tumoral del estómago friable expuesto al ácido sangrará a chorros si bloqueas el Factor Xa de forma directa con la pastilla. Si el tumor fuera de mama o de pulmón, el Apixabán (Opción A) sería la respuesta correcta. Con estómago, pincha la barriga (Enoxaparina).",
    keyPoints: [
      "Trombosis Venosa o TEP en un paciente con cáncer activo.",
      "Tumor primario localizado en la luz del tracto gastrointestinal (Gástrico, Esofágico) o genitourinario (Vejiga).",
      "Heparina de Bajo Peso Molecular (Enoxaparina) como primera línea. Los DOACs (Apixabán, Rivaroxabán) están fuertemente desaconsejados por riesgo de hemorragia intratumoral masiva.",
      "Tema: Trombosis Asociada a Cáncer / TEP."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-06",
    university: "UCC",
    examArea: "Pediatría / Neurología",
    topic: "Pediatría",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "neurologia"],
    statement: "Lactante masculino de 6 meses, nacido a término sin complicaciones perinatales, es traído por su madre debido a que desde hace una semana presenta episodios repentinos en los que 'tira la cabeza hacia adelante, flexiona el tronco y eleva los brazos', durando de 1 a 2 segundos cada uno. Estos movimientos ocurren en salvas (grupos de 10 a 15) especialmente al momento de despertar. Al examen físico, se documentan 4 máculas hipocrómicas (en forma de hoja de fresno) en el tronco y el dorso. Un electroencefalograma (EEG) tomado en vigilia muestra un patrón caótico de ondas lentas de alto voltaje mezcladas con espigas multifocales desorganizadas (Hipsarritmia). Con el diagnóstico de Síndrome de West y sospecha firme de la enfermedad genética subyacente, ¿cuál es el tratamiento farmacológico de PRIMERA LÍNEA de elección?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Hormona Adrenocorticotropa (ACTH) intramuscular.",
        distractorProfile: "standard_but_wrong_for_this_subtype",
        incorrectFeedback: "Es la terapia estándar para West idiopático, pero superada por Vigabatrina cuando hay Esclerosis Tuberosa subyacente."
      },
      {
        id: "B",
        label: "B",
        text: "Vigabatrina por vía oral."
      },
      {
        id: "C",
        label: "C",
        text: "Ácido Valproico en jarabe a dosis altas.",
        distractorProfile: "suboptimal_for_infantile_spasms",
        incorrectFeedback: "El ácido valproico no es el tratamiento de primera línea para revertir los espasmos infantiles ni la hipsarritmia."
      },
      {
        id: "D",
        label: "D",
        text: "Prednisolona oral en pulsos descendentes.",
        distractorProfile: "alternative_not_preferred",
        incorrectFeedback: "Los corticoides se usan si no hay ACTH en casos idiopáticos, pero no es la elección frente a Vigabatrina en Esclerosis Tuberosa."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta Espasmos Infantiles (Síndrome de West), caracterizados por la tríada: espasmos en flexión/extensión, patrón de hipsarritmia en el EEG y detención/regresión del neurodesarrollo. La etiología más frecuente de los espasmos infantiles sintomáticos es el Complejo Esclerosis Tuberosa (CET), el cual se sospecha clínicamente en este paciente por las máculas hipomelanóticas en hoja de fresno (ash-leaf spots). Aunque el tratamiento general de primera línea para el Síndrome de West idiopático es la ACTH o los corticosteroides a altas dosis, las guías internacionales establecen de forma unánime que cuando el Síndrome de West es secundario a Esclerosis Tuberosa, el fármaco de elección absoluta y de primera línea es la Vigabatrina, por tener una eficacia drásticamente superior en este subgrupo genético.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Otra 'perla de oro' pediátrica. El evaluador quiere ver si diferencias la epilepsia mioclónica común del síndrome sindrómico. El ACTH (Opción A) es el estándar general, pero la Vigabatrina (un inhibidor de la GABA-transaminasa) tiene un efecto casi mágico, dirigido y específico sobre los tuberes corticales de la esclerosis tuberosa. Eso sí, recuerda para tu práctica que la vigabatrina tiene como efecto adverso temido la constricción del campo visual irreversible, por lo que requiere controles estrictos de oftalmología pediátrica.",
    keyPoints: [
      "Lactante con espasmos en salvas al despertar + EEG con Hipsarritmia = Síndrome de West.",
      "Manchas hipocrómicas en 'hoja de fresno' = Esclerosis Tuberosa.",
      "Dilema terapéutico entre ACTH y Vigabatrina. Si NO hay Esclerosis Tuberosa = ACTH/Corticoides. Si SÍ hay Esclerosis Tuberosa = Vigabatrina.",
      "Tema: Epilepsia Pediátrica / Síndrome de West."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-07",
    university: "UCC",
    examArea: "Medicina Interna / Endocrinología / Urgencias",
    topic: "Endocrinología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "endocrinologia", "urgencias"],
    statement: "Hombre de 78 años, diabético tipo 2 mal controlado, es traído de un asilo por un cuadro de alteración profunda del estado de conciencia de instalación progresiva en la última semana, tras haber padecido una gastroenteritis viral. Al examen físico: estuporoso, marcadamente deshidratado (mucosas orales cuarteadas, ojos hundidos), PA 85/50 mmHg (choque hipovolémico), FC 115 lpm. Paraclínicos: Glucemia central 950 mg/dL, Sodio sérico 152 mEq/L, Potasio 3.9 mEq/L, Creatinina 2.8 mg/dL (prerrenal), pH 7.34, HCO3 20 mEq/L, Cetonas en suero negativas, Osmolaridad plasmática efectiva de 365 mOsm/kg. ¿Cuál debe ser la primera conducta terapéutica INMEDIATA a instaurar en urgencias?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar infusión de insulina regular IV a 0.1 U/kg/h en solución salina al 0.45% para corregir simultáneamente la hiperglucemia y la hipernatremia.",
        distractorProfile: "premature_insulin",
        incorrectFeedback: "Iniciar insulina antes que corregir la hipovolemia puede causar desplazamiento brusco de agua al espacio intracelular y precipitar colapso cardiovascular."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar bolos agresivos de Solución Salina Normal (NaCl al 0.9%) a razón de 1-2 Litros en la primera hora hasta revertir la hipotensión y recuperar la perfusión."
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar infusión de Solución Salina al 0.45% (Hipotónica) desde el minuto cero para disminuir de forma gradual la hipernatremia y evitar edema cerebral.",
        distractorProfile: "wrong_fluid_in_shock",
        incorrectFeedback: "Los fluidos hipotónicos se distribuyen rápido fuera del espacio intravascular, no sirviendo para revertir el choque hipovolémico agudo."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar bolos de Dextrosa al 5% en agua destilada (DAD 5%) combinada con Insulina rápida para normalizar la osmolaridad de forma fisiológica.",
        distractorProfile: "dangerous_osmotic_shift",
        incorrectFeedback: "La DAD empeoraría agudamente la hiperglucemia y el desplazamiento del agua no corregirá la hipovolemia intravascular."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un Estado Hiperosmolar Hiperglucémico (EHH) puro (glucosa >600, osmolaridad >320, sin acidosis ni cetosis significativa), complicado con choque hipovolémico por depleción masiva de agua libre (diuresis osmótica). Aunque el paciente presenta una hipernatremia grave y una osmolaridad plasmática crítica que sugieren el uso de fluidos hipotónicos, la REGLA DE ORO en cualquier emergencia endocrina (CAD o EHH) asociada a inestabilidad hemodinámica es: restaurar primero la perfusión tisular. Independientemente del nivel de sodio, si el paciente está chocado (PA 85/50), la reanimación hídrica inicial debe hacerse SIEMPRE con cristaloides isotónicos (Solución Salina Normal 0.9% o Lactato de Ringer) hasta que la presión arterial y la perfusión se estabilicen. Solo después de alcanzar estabilidad hemodinámica, se debe cambiar a solución salina hipotónica (0.45%) si el sodio corregido persiste elevado.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Colega, aquí el miedo a la hipernatremia o al edema cerebral te puede hacer marcar la Opción C (Salina al 0.45%). Si le pasas una solución hipotónica (agua libre) a un paciente chocado, el agua no se va a quedar en el vaso sanguíneo para subirle la presión arterial, se va a ir directamente al tercer espacio y al interior de las células, el paciente seguirá en choque y hará un paro cardíaco. Primero se salva la presión arterial llenando el tanque vascular (SSN 0.9%), y en el segundo paso corregimos la deshidratación intracelular (SSN 0.45%).",
    keyPoints: [
      "Paciente con EHH (Estado Hiperosmolar) o CAD, con hipernatremia y osmolaridad elevadas.",
      "Hipotensión o signos de choque manifiesto.",
      "El sodio no importa en la primera hora si hay choque. La reanimación inicial es con Solución Salina al 0.9% para expandir el volumen intravascular; las soluciones hipotónicas se dejan para la fase de mantenimiento.",
      "Tema: Urgencias Endocrinológicas / EHH."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-08",
    university: "UCC",
    examArea: "Pediatría / Infectología / Neumología",
    topic: "Pediatría",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "infectologia", "sarampion"],
    statement: "Lactante masculino de 11 meses, con esquema de vacunación retrasado por decisión de los padres, es traído por un cuadro de fiebre de 39.8°C de 6 días de evolución, tos intensa, congestión nasal mucopurulenta y marcada inyección conjuntival bilateral. La madre refiere que hace dos días presentó unas 'manchitas blancas como granos de sal' en la mucosa oral interna, las cuales desaparecieron. Hoy inició con una erupción cutánea maculopapular eritematosa que comenzó detrás de las orejas y en la línea de implantación del cabello, diseminándose hacia el tronco. Durante la evaluación actual, el niño se nota taquipneico (FR 55 rpm), con tirajes intercostales y crépitos en bases pulmonares. La radiografía de tórax confirma neumonía intersticial. ¿Qué intervención terapéutica sistémica específica ha demostrado reducir la morbimortalidad y la severidad de este cuadro?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar Ribavirina en aerosol de forma temprana.",
        distractorProfile: "rare_use_antiviral",
        incorrectFeedback: "La ribavirina es muy tóxica y costosa, reservada solo para inmunosuprimidos graves. No es la terapia recomendada de rutina."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar dosis altas de Vitamina A (Retinol) por dos días consecutivos."
      },
      {
        id: "C",
        label: "C",
        text: "Prescribir terapia empírica con Aciclovir intravenoso.",
        distractorProfile: "wrong_antiviral_target",
        incorrectFeedback: "El aciclovir es para Herpesviridae, no tiene efecto en Paramyxoviridae (virus del sarampión)."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar Inmunoglobulina G intravenosa (IGIV) a 2 g/kg en infusión continua.",
        distractorProfile: "wrong_indication_ivig",
        incorrectFeedback: "La inmunoglobulina se usaría como profilaxis posexposición en algunos grupos, no como tratamiento primario en la fase de estado con neumonía."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta el cuadro patognomónico del Sarampión: pródromo con la triple catarro (tos, coriza, conjuntivitis), fiebre alta, manchas de Koplik previas en la mucosa yodular (exantema patognomónico), y el exantema maculopapular con progresión céfalo-caudal centrífuga clásica. Su complicación actual, y la principal causa de muerte por sarampión en lactantes, es la neumonía. Las guías de la OMS establecen de forma mandataria la administración de dosis altas de Vitamina A (50.000 a 200.000 UI según la edad, administradas en los días 1 y 2 del diagnóstico) para todos los niños con sarampión clínico severo o complicado. La vitamina A modula la respuesta inmune epitelial, revierte la descamación epitelial del pulmón y la córnea, y ha demostrado en grandes metaanálisis reducir drásticamente la mortalidad, ceguera y severidad de las complicaciones respiratorias.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Un error muy común es creer que, por ser viral, el sarampión solo tiene manejo de soporte de líquidos (o buscar antivirales costosos como la Ribavirina, opción A, que solo se reserva para casos anecdóticos muy críticos o inmunosuprimidos). En pediatría infecciosa, el sarampión y la vitamina A van de la mano. El virus del sarampión agota violentamente las reservas hepáticas de retinol del niño; sin vitamina A, el epitelio respiratorio se necrosa. Suplir la vitamina es el verdadero tratamiento de rescate epitelial.",
    keyPoints: [
      "Lactante no vacunado con exantema céfalo-caudal, triple catarro y manchas de Koplik.",
      "Sarampión complicado con neumonía, crupe o desnutrición.",
      "Administración de Vitamina A; es la única intervención sistémica 'antiviral' comprobada que cambia el pronóstico de supervivencia.",
      "Tema: Enfermedades Inmunoprevenibles / Sarampión."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-09",
    university: "UCC",
    examArea: "Medicina Interna / Hematología / Neurología",
    topic: "Hematología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "hematologia", "neurologia"],
    statement: "Hombre de 72 años con antecedente de fibrilación auricular no valvular en manejo crónico con Warfarina (dosis de 5 mg diarios) es traído a urgencias tras sufrir una caída desde su propia altura con trauma craneoencefálico leve hace 3 horas. Al ingreso, el paciente presenta deterioro súbito del estado de conciencia, afasia y hemiplejía derecha. Una tomografía (TC) de cráneo simple de urgencia evidencia una extensa hemorragia intraparenquimatosa témporo-parietal izquierda con efecto de masa y desplazamiento de la línea media. Los laboratorios de ingreso reportan un Tiempo de Protrombina (TP) marcadamente prolongado con un INR de 4.1. ¿Cuál es el tratamiento de reversión MÁS adecuado e inmediato para salvar la vida del paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar Vitamina K (Fitomenadiona) intravenosa lenta y esperar 6 a 8 horas para control.",
        distractorProfile: "insufficient_speed",
        incorrectFeedback: "La Vitamina K tarda demasiado en actuar (horas) y el paciente puede morir o extender su hemorragia en ese periodo de tiempo."
      },
      {
        id: "B",
        label: "B",
        text: "Suspender la warfarina y transfundir exclusivamente 4 unidades de Plasma Fresco Congelado (PFC) de forma acelerada.",
        distractorProfile: "inferior_alternative",
        incorrectFeedback: "El PFC requiere gran volumen (riesgo de sobrecarga) y tarda en ser preparado y transfundido. Ya no es de primera línea."
      },
      {
        id: "C",
        label: "C",
        text: "Administrar Complejo Protrombínico de 4 factores (PCC) intravenoso asociado a Vitamina K (Fitomenadiona) intravenosa."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar Idarucizumab intravenoso inmediato asociado a Ácido Tranexámico.",
        distractorProfile: "wrong_antidote",
        incorrectFeedback: "El Idarucizumab es el antídoto específico para el Dabigatrán (DOAC), no sirve para revertir antagonistas de vitamina K (Warfarina)."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente cursa con una hemorragia intracraneana masiva y que pone en peligro la vida, desencadenada/exacerbada por un estado de supra-anticoagulación por Warfarina (INR > 4). La reversión debe ser instantánea. El Concentrado de Complejo Protrombínico (PCC) de 4 factores (que contiene factores II, VII, IX y X altamente concentrados) es el agente de reversión de elección (gold standard). Logra normalizar el INR a un valor <1.5 en menos de 15 minutos con un volumen mínimo de infusión, limitando la expansión del hematoma. Sin embargo, su vida media es corta (horas), por lo que siempre debe acompañarse de la administración de Vitamina K endovenosa lenta (la cual tardará 12-24 horas en actuar, pero mantendrá el efecto de reversión a largo plazo cuando el PCC se agote).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Colega, actualiza tu arsenal mental de urgencias. Antes pasábamos 'Plasma a chorro' (Opción B), pero el plasma es un desastre en este escenario: requiere descongelarse (tarda 45 minutos), para revertir un INR de 4 necesitas pasar casi 2 litros de plasma (causando sobrecarga hídrica masiva o TACO en un anciano) y su eficacia es errática. El PCC (Octaplex/Beriplex) viene en un frasco de 50 mL, se prepara en 1 minuto y cierra el 'grifo' del sangrado de inmediato. Y recuerda, Idarucizumab (Opción D) es el antídoto específico del Dabigatrán, no de la Warfarina.",
    keyPoints: [
      "Paciente anticoagulado con Warfarina (antagonista vitamina K).",
      "Hemorragia mayor amenazante para la vida (Intracraneal, retroperitoneal, digestiva masiva).",
      "Reversión inmediata con Concentrado de Complejo Protrombínico (PCC) + Vitamina K IV. El plasma fresco congelado (PFC) quedó como segunda línea si el PCC no está disponible.",
      "Tema: Urgencias Hematológicas / Reversión de Anticoagulación."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-10",
    university: "UCC",
    examArea: "Pediatría / Cardiología / Neonatología",
    topic: "Pediatría",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "cardiologia", "neonatologia"],
    statement: "Recién nacido de 12 horas de vida, a término, producto de embarazo mal controlado, inicia con cianosis generalizada profunda que no mejora tras la administración de oxígeno suplementario al 100% (prueba de hiperoxia fallida, con PaO2 que no supera los 40 mmHg). Al examen físico: taquipneico, cianótico, con un soplo sistólico eyectivo suave en borde esternal izquierdo. La radiografía de tórax evidencia un mediastino superior estrecho ('silueta cardíaca en forma de huevo colgado de un hilo') y una vascularización pulmonar normal o levemente aumentada. Un ecocardiograma confirma la discordancia ventrículo-arterial, estableciendo el diagnóstico de Transposición de las Grandes Arterias (TGA) simple. El paciente luce severamente hipóxico y acidótico (pH 7.15). ¿Cuál es la intervención farmacológica de rescate INMEDIATA MÁS apropiada antes de los procedimientos invasivos?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar surfactante pulmonar a través de intubación orotraqueal para reclutar alvéolos.",
        distractorProfile: "wrong_pathophysiology_respiratory",
        incorrectFeedback: "El problema no es pulmonar primario (enfermedad de membrana hialina), sino un cortocircuito cardíaco donde la sangre oxigenada no llega a la aorta."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar infusión intravenosa de Prostaglandina E1 (Alprostadil) de forma urgente."
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar infusión de Indometacina o Ibuprofeno lisina intravenoso para cerrar los cortocircuitos fetales.",
        distractorProfile: "fatal_intervention",
        incorrectFeedback: "Cerrar el conducto arterioso en una TGA simple causaría asfixia y muerte en minutos, ya que bloquea la única vía de mezcla sanguínea vital."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar Óxido Nítrico Inhalado (iNO) para dilatar el lecho vascular pulmonar y promover la oxigenación.",
        distractorProfile: "wrong_target",
        incorrectFeedback: "El iNO trata la hipertensión pulmonar primaria, no es el rescate para la cianosis por TGA que depende de mantener los shunts anatómicos abiertos."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con Transposición de Grandes Arterias (TGA), la cardiopatía congénita cianógena más común del periodo neonatal inmediato. En la TGA, la circulación sistémica y pulmonar operan en paralelo en lugar de en serie (la aorta sale del VD y la arteria pulmonar del VI). Esta disposición es 100% letal tras el nacimiento, a menos que exista un sitio de mezcla de sangre oxigenada (comunicación interauricular, interventricular o el Ductus Arteriosus). Como se trata de una TGA 'simple' (sin comunicación interventricular obvia que permita buena mezcla), el bebé depende absolutamente de que el conducto arterioso fetal permanezca abierto para permitir que algo de sangre oxigenada cruce hacia la aorta. El paso salvavidas crítico inicial es iniciar una infusión de Prostaglandina E1 (Alprostadil) para mantener permeable el Ductus Arteriosus, seguido posteriormente de una septostomía auricular de Rashkind si persiste la hipoxia, y finalmente la cirugía de switch arterial (Jatene).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** En cardiología pediátrica, 'cianosis que no mejora con oxígeno' es igual a cortocircuito de derecha a izquierda o en paralelo. El corazón 'en forma de huevo' (por atrofia del timo y el pedículo vascular estrecho al estar los vasos superpuestos anteroposteriormente) es el sello de la TGA. La trampa fisiopatológica de la opción C es fatal: si usas Indometacina, cierras el ductus, suprimes el único sitio de mezcla de sangre que le queda al bebé y precipitas una muerte hipóxica en escasos minutos. La prostaglandina relaja el músculo liso del ductus, dándote el puente para operarlo.",
    keyPoints: [
      "Recién nacido con cianosis profunda en las primeras 24h, refractario a oxígeno al 100%.",
      "Radiografía con corazón en forma de 'huevo colgado de una cuerda/hilo'.",
      "Transposición de Grandes Arterias (lesión dependiente del ductus para la mezcla). El rescate absoluto inicial es Prostaglandina E1.",
      "Tema: Cardiopatías Congénitas Cianógenas / TGA."
    ]
  }
];

