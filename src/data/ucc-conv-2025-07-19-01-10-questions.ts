import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC â€” EdiciÃ³n #3 (19 jul 2025) Â· Preguntas #01â€“#10.
 * Banco exclusivo del examen oficial quincenal Pro.
 */
export const UCC_CONV_2025_07_19_01_10_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2025-07-19-01",
    university: "UCC",
    examArea: "Medicina Interna / CardiologÃ­a / ToxicologÃ­a",
    topic: "CardiologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "cardiologia", "toxicologia"],
    statement: "Hombre de 32 aÃ±os es traÃ­do a urgencias por presentar dolor retroesternal opresivo de intensidad 9/10, diaforesis profusa y agitaciÃ³n psicomotriz. Sus amigos refieren consumo intensivo de cocaÃ­na intranasal hace una hora. Al examen fÃ­sico: midriasis bilateral reactiva, PA 190/115 mmHg, FC 135 lpm, FR 24 rpm. El electrocardiograma de ingreso evidencia una taquicardia sinusal con infradesnivel del segmento ST de 2 mm en las derivaciones V2 a V5. Se administran de inmediato dosis repetidas de Lorazepam intravenoso y Nitroglicerina sublingual, pero el paciente persiste con dolor torÃ¡cico severo, taquicardia y cifras tensionales de 185/110 mmHg tras 20 minutos de manejo. Â¿CuÃ¡l es la conducta farmacolÃ³gica MÃS apropiada a continuaciÃ³n?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar Labetalol intravenoso en bolos para controlar de forma dual la presiÃ³n arterial y la frecuencia cardÃ­aca.",
        distractorProfile: "contraindicated_in_cocaine_use",
        incorrectFeedback: "EstÃ¡ ABSOLUTAMENTE CONTRAINDICADO el uso de bloqueadores beta (incluso los mixtos como el Labetalol) debido al fenÃ³meno de 'estimulaciÃ³n alfa sin oposiciÃ³n', que agrava el vasoespasmo coronario."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar infusiÃ³n de Esmolol para disminuir el consumo miocÃ¡rdico de oxÃ­geno mediante un bloqueo beta-1 ultra corto.",
        distractorProfile: "contraindicated_in_cocaine_use",
        incorrectFeedback: "El uso de beta-bloqueadores (incluso selectivos o de corta acciÃ³n) en isquemia por cocaÃ­na puede desencadenar estimulaciÃ³n alfa no opuesta y muerte."
      },
      {
        id: "C",
        label: "C",
        text: "Administrar Fentaminilo intravenoso e iniciar infusiÃ³n de Phentolamina (o Nitroprusiato) para control vascular perifÃ©rico."
      },
      {
        id: "D",
        label: "D",
        text: "Activar el cÃ³digo infarto y administrar Tenecteplase por sospecha de oclusiÃ³n coronaria aguda trombÃ³tica.",
        distractorProfile: "wrong_pathophysiology",
        incorrectFeedback: "La causa principal de la isquemia es el vasoespasmo adrenÃ©rgico, no una oclusiÃ³n trombÃ³tica primaria. Los trombolÃ­ticos no son la primera lÃ­nea en este contexto sin evidencia de IAMCEST persistente tras vasodilatadores."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta un sÃ­ndrome coronario agudo inducido por cocaÃ­na. La fisiopatologÃ­a se basa en un vasoespasmo coronario severo mediado por receptores alfa-adrenÃ©rgicos, asociado a aumento de la demanda miocÃ¡rdica (taquicardia, hipertensiÃ³n) y un estado protrombÃ³tico. La primera lÃ­nea de manejo son las benzodiacepinas (Lorazepam/Diazepam) para disminuir el tono simpÃ¡tico central, junto con Nitroglicerina. Si hay refractariedad, el uso de vasodilatadores puros o bloqueadores alfa puros (Phentolamina) es el paso a seguir. EstÃ¡ ABSOLUTAMENTE CONTRAINDICADO el uso de bloqueadores beta (incluso los mixtos como el Labetalol segÃºn las guÃ­as de la AHA) debido al fenÃ³meno de 'estimulaciÃ³n alfa sin oposiciÃ³n', el cual agrava el vasoespasmo coronario y la hipertensiÃ³n sistÃ©mica de forma letal.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Colega, esta es una trampa clÃ¡sica de ACLS/AHA. El estudiante ve a un paciente hipertenso y taquicÃ¡rdico infartÃ¡ndose y su reflejo medular es poner un beta-bloqueador para bajar el doble producto. En el contexto de cocaÃ­na, si bloqueas los receptores beta-2 (que vasodilatan), dejas a las catecolaminas actuando libremente sobre los receptores alfa-1, cerrando las coronarias como una guillotina. Las guÃ­as mÃ¡s recientes de la AHA mantienen la contraindicaciÃ³n de TODOS los beta-bloqueadores (incluso el Labetalol) en las primeras 24 horas del consumo de cocaÃ­na.",
    keyPoints: [
      "Paciente joven con dolor torÃ¡cico agudo + signos de hiperactividad simpÃ¡tica (midriasis, agitaciÃ³n, HTA) + consumo de cocaÃ­na.",
      "Refractariedad a benzodiacepinas y nitratos.",
      "Vasoespasmo coronario adrenÃ©rgico. Los Beta-bloqueadores (incluyendo Labetalol y Carvedilol) estÃ¡n formalmente proscritos en la fase aguda.",
      "Tema: SCA por CocaÃ­na / ToxicologÃ­a CardÃ­aca."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-02",
    university: "UCC",
    examArea: "Medicina Interna / NefrologÃ­a",
    topic: "NefrologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "nefrologia", "litio"],
    statement: "Hombre de 45 aÃ±os, con antecedente de Trastorno Afectivo Bipolar en manejo crÃ³nico con Carbonato de Litio desde hace 8 aÃ±os, consulta por un cuadro de poliuria masiva (orina hasta 7 litros al dÃ­a) y polidipsia extrema. Se documenta una hipernatremia de 155 mEq/L. La osmolaridad urinaria reporta 120 mOsm/kg H2O (orina muy diluida) con una osmolaridad plasmÃ¡tica de 320 mOsm/kg. Se realiza una prueba de privaciÃ³n de agua seguida de la administraciÃ³n de Desmopresina (DDAVP) exÃ³gena subcutÃ¡nea. Tras 2 horas de la inyecciÃ³n, la osmolaridad urinaria se mantiene en 125 mOsm/kg H2O (ausencia de respuesta). Â¿CuÃ¡l es la estrategia farmacolÃ³gica a largo plazo MÃS adecuada para corregir este trastorno, asumiendo que el psiquiatra suspende el Litio?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Reiniciar Desmopresina en aerosol nasal a dosis mÃ¡s altas de forma permanente.",
        distractorProfile: "wrong_diagnosis_central_di",
        incorrectFeedback: "La ausencia de respuesta a la prueba de privaciÃ³n de agua con DDAVP descarta la diabetes insÃ­pida central. Administrar mÃ¡s hormona no solucionarÃ¡ la resistencia tubular."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar Amilorida por vÃ­a oral y prescribir una dieta baja en sodio."
      },
      {
        id: "C",
        label: "C",
        text: "Prescribir TolvaptÃ¡n oral para bloquear los receptores de vasopresina y regular el volumen libre.",
        distractorProfile: "wrong_indication_tolvaptan",
        incorrectFeedback: "El TolvaptÃ¡n (antagonista V2) exacerbarÃ­a la poliuria e hipernatremia, ya que bloquea el efecto antidiurÃ©tico restante."
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar suplementaciÃ³n agresiva con Cloruro de Potasio y suspender de inmediato el aporte de agua libre.",
        distractorProfile: "dangerous_intervention_water_deprivation",
        incorrectFeedback: "Suspender el aporte de agua libre en un paciente con DIN y poliuria masiva causarÃ¡ una hipernatremia letal rÃ¡pidamente."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta una Diabetes InsÃ­pida NefrogÃ©nica (DIN) clÃ¡sica, en este caso inducida por la toxicidad crÃ³nica del Litio. La falta de respuesta a la desmopresina exÃ³gena (el riÃ±Ã³n no concentra la orina) confirma que el problema no es central (falta de hormona), sino tubular (resistencia a la ADH). El litio entra a las cÃ©lulas principales del tÃºbulo colector a travÃ©s de los canales de sodio epiteliales (ENaC), donde interfiere con la inserciÃ³n de las acuaporinas. El tratamiento farmacolÃ³gico especÃ­fico es la Amilorida, un diurÃ©tico ahorrador de potasio que bloquea directamente el canal ENaC, impidiendo que el litio penetre en la cÃ©lula tubular y permitiendo la recuperaciÃ³n progresiva de la sensibilidad a la ADH. Se asocia con dieta baja en sodio para disminuir la carga osmolar distal.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** AquÃ­ el detalle fino es la farmacologÃ­a renal. Uno pensarÃ­a que dar un diurÃ©tico (Amilorida o Tiazidas) a alguien que orina 7 litros al dÃ­a es una locura. Sin embargo, en la DIN, inducir una leve depleciÃ³n de volumen en el tÃºbulo proximal fuerza al riÃ±Ã³n a reabsorber mÃ¡s agua de forma pasiva al principio de la nefrona, reduciendo el volumen que llega al tÃºbulo colector enfermo. La Amilorida tiene el 'superpoder' adicional de cerrar la puerta (ENaC) por donde el litio entra a intoxicar la cÃ©lula.",
    keyPoints: [
      "Paciente psiquiÃ¡trico (usuario de litio) con poliuria y polidipsia + Hipernatremia.",
      "Prueba de Desmopresina NEGATIVA (la orina sigue diluida).",
      "Diabetes InsÃ­pida NefrogÃ©nica por Litio. El tratamiento fisiopatolÃ³gico es suspender el tÃ³xico y administrar Amilorida.",
      "Tema: Trastornos del Sodio / Diabetes InsÃ­pida."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-03",
    university: "UCC",
    examArea: "PediatrÃ­a / CirugÃ­a / GastroenterologÃ­a",
    topic: "PediatrÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "cirugia"],
    statement: "Lactante masculino de 3 semanas de vida, previamente sano y con ganancia de peso normal, es traÃ­do a urgencias por presentar hace 4 horas episodios sÃºbitos de llanto inconsolable y vÃ³mitos explosivos de color verde oscuro (biliosos). Al examen fÃ­sico: luce crÃ­ticamente enfermo, pÃ¡lido, taquicÃ¡rdico (FC 185 lpm), llenado capilar de 4 segundos. El abdomen se encuentra marcadamente distendido, tenso y muy doloroso a la palpaciÃ³n profunda; no se auscultan ruidos intestinales. Al tacto rectal se evidencia moco sanguinolento. Una radiografÃ­a simple de abdomen de pie muestra una evidente escasez de gas en el resto del intestino con una burbuja gÃ¡strica dilatada. Â¿CuÃ¡l es el paso INMEDIATO de mayor impacto para la supervivencia de este paciente tras la reanimaciÃ³n inicial?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Solicitar una serie de vÃ­as digestivas altas (SEGD) con bario para confirmar la posiciÃ³n del Ã¡ngulo de Treitz.",
        distractorProfile: "diagnostic_delay_in_unstable_patient",
        incorrectFeedback: "Este estudio es el estÃ¡ndar de oro, pero solo en el paciente estable. En un lactante chocado con isquemia intestinal aguda, llevarlo a imagenologÃ­a retrasa la laparotomÃ­a salvavidas."
      },
      {
        id: "B",
        label: "B",
        text: "Llevar de forma urgente a quirÃ³fano para laparotomÃ­a exploratoria por sospecha de vÃ³lvulo de intestino medio."
      },
      {
        id: "C",
        label: "C",
        text: "Realizar una ecografÃ­a abdominal enfocada para buscar el signo de la 'diana' o el 'pseudoriÃ±Ã³n'.",
        distractorProfile: "wrong_suspicion_intussusception",
        incorrectFeedback: "Ese signo es sugestivo de intususcepciÃ³n (mÃ¡s tÃ­pica en > 6 meses) y retrasa el diagnÃ³stico de vÃ³lvulo que requiere cirugÃ­a inmediata."
      },
      {
        id: "D",
        label: "D",
        text: "Instaurar manejo mÃ©dico con sonda nasogÃ¡strica y antibiÃ³ticos de amplio espectro, difiriendo la cirugÃ­a hasta lograr estabilidad hemodinÃ¡mica total.",
        distractorProfile: "fatal_delay_source_control",
        incorrectFeedback: "La isquemia mesentÃ©rica en evoluciÃ³n continuarÃ¡ empeorando el estado de choque; la cirugÃ­a es en sÃ­ misma parte de la reanimaciÃ³n (control de daÃ±os)."
      }
    ],
    correctOptionId: "B",
    explanation: "El cuadro clÃ­nico es el de una catÃ¡strofe abdominal neonatal: VÃ³mitos biliosos en un neonato/lactante menor deben considerarse MalrotaciÃ³n Intestinal con VÃ³lvulo de Intestino Medio hasta que se demuestre lo contrario. La presencia de inestabilidad hemodinÃ¡mica (choque), abdomen tenso (peritonitis) y moco sanguinolento (isquemia mucosa) indica que el intestino ya estÃ¡ estrangulado y sufriendo necrosis. En este escenario crÃ­tico, estÃ¡ CONTRAINDICADO perder tiempo en estudios de imagen diagnÃ³sticos (como las vÃ­as digestivas altas, que es el gold standard solo en el paciente estable). La laparotomÃ­a de extrema urgencia es obligatoria para destorcer el vÃ³lvulo (Procedimiento de Ladd) antes de que se necrose todo el intestino delgado (intestino corto irreversible).\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Colega, en cirugÃ­a pediÃ¡trica, 'vÃ³mito bilioso en el neonato = vÃ³lvulo hasta que se pruebe lo contrario'. El cirujano tiene una ventana de escasas horas para evitar que ese bebÃ© pierda todo su intestino delgado. La trampa (OpciÃ³n A) es el estudio con contraste: es el estÃ¡ndar de oro, sÃ­, pero solo si el niÃ±o te sonrÃ­e y estÃ¡ estable. Si el niÃ±o estÃ¡ chocado y sangrando, pasarlo a la sala de rayos X es una condena a muerte. El diagnÃ³stico se hace con el bisturÃ­ en la sala de cirugÃ­a.",
    keyPoints: [
      "Neonato/Lactante menor (< 1 mes) con vÃ³mitos biliosos sÃºbitos.",
      "Signos de isquemia intestinal (choque, abdomen agudo, sangrado rectal).",
      "VÃ³lvulo de intestino medio por malrotaciÃ³n. Si estÃ¡ inestable: LaparotomÃ­a urgente inmediata. Si estÃ¡ estable: Serie de vÃ­as digestivas altas.",
      "Tema: Abdomen Agudo Neonatal / VÃ³lvulo."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-04",
    university: "UCC",
    examArea: "Medicina Interna / GastroenterologÃ­a / InfectologÃ­a",
    topic: "GastroenterologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "gastroenterologia", "cirrosis"],
    statement: "Hombre de 62 aÃ±os, con cirrosis hepÃ¡tica alcohÃ³lica (Child-Pugh C) y ascitis crÃ³nica refractaria, ingresa a urgencias por fiebre de 39Â°C, dolor abdominal generalizado intenso y vÃ³mitos biliosos. Al examen fÃ­sico se documenta un abdomen en tabla, con signo de rebote (Blumberg) francamente positivo. Se realiza una paracentesis diagnÃ³stica urgente que reporta: LÃ­quido de aspecto purulento, Leucocitos 5,500/mmÂ³ con 90% de polimorfonucleares (PMN). ProteÃ­nas totales en lÃ­quido de 3.8 g/dL, Glucosa en lÃ­quido de 25 mg/dL, LDH en lÃ­quido de 850 U/L. El Gram preliminar reporta cocos Gram positivos, bacilos Gram negativos y abundantes levaduras. Â¿CuÃ¡l es el diagnÃ³stico mÃ¡s probable y la conducta a seguir?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Peritonitis Bacteriana EspontÃ¡nea (PBE); iniciar Ceftriaxona IV a dosis de 2 g/dÃ­a y administrar albÃºmina humana al 20%.",
        distractorProfile: "misdiagnosis_pbe",
        incorrectFeedback: "La PBE tÃ­picamente es monomicrobiana, con lÃ­quido con baja proteÃ­na (< 1 g/dL) y glucosa normal (no consumida). Los hallazgos descartan PBE."
      },
      {
        id: "B",
        label: "B",
        text: "Peritonitis Secundaria (perforaciÃ³n de vÃ­scera hueca); solicitar TC de abdomen urgente, iniciar Piperacilina/Tazobactam + Fluconazol y solicitar valoraciÃ³n por cirugÃ­a general."
      },
      {
        id: "C",
        label: "C",
        text: "Ascitis neutrocÃ­tica con cultivo negativo; iniciar ciprofloxacino oral y dar de alta con pautas de alarma.",
        distractorProfile: "inappropriate_discharge",
        incorrectFeedback: "Este cuadro es de alta letalidad y urgencia quirÃºrgica. Un abdomen en tabla y Gram positivo no corresponde a ascitis neutrocÃ­tica de manejo ambulatorio."
      },
      {
        id: "D",
        label: "D",
        text: "Peritonitis tuberculosa; aislar al paciente, enviar prueba de GeneXpert en lÃ­quido e iniciar terapia antifÃ­mica empÃ­rica (HRZE).",
        distractorProfile: "wrong_etiology",
        incorrectFeedback: "La peritonitis tuberculosa suele presentar predominio linfocitario crÃ³nico y el Gram no evidenciarÃ­a flora entÃ©rica mixta y levaduras."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cirrÃ³tico presenta una infecciÃ³n del lÃ­quido ascÃ­tico, pero los hallazgos bioquÃ­micos y microbiolÃ³gicos descartan categÃ³ricamente una Peritonitis Bacteriana EspontÃ¡nea (PBE). SegÃºn los Criterios de Runyon, se sospecha una Peritonitis Secundaria (ruptura o perforaciÃ³n de vÃ­scera intraabdominal) si el lÃ­quido cumple al menos dos de los siguientes tres criterios: ProteÃ­nas totales > 1 g/dL, Glucosa < 50 mg/dL o LDH superior al lÃ­mite sÃ©rico normal. Este paciente cumple los tres. AdemÃ¡s, el Gram polimicrobiano (incluyendo levaduras, tÃ­picas del tracto GI) es el sello de una perforaciÃ³n intestinal. El manejo de la PBE es mÃ©dico, pero el de la peritonitis secundaria es QUIRÃšRGICO, requiriendo cobertura de ultra-amplio espectro y cirugÃ­a urgente de control de daÃ±os.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Esta es la trampa suprema del paciente hepatÃ³pata. Todo el mundo asume que si el PMN es > 250 en un cirrÃ³tico, es PBE. Pero la PBE es monomicrobiana (usualmente E. coli) y no consume glucosa ni altera drÃ¡sticamente las proteÃ­nas. Si ves hongos (levaduras) o mÃºltiples tipos de bacterias flotando en el ascÃ­tico, el intestino se rompiÃ³ y derramÃ³ su contenido a la cavidad. Ponerle Ceftriaxona (OpciÃ³n A) y dejarlo en el piso de medicina interna resultarÃ¡ en la muerte del paciente por sepsis intrabdominal no controlada; hay que llamar al cirujano.",
    keyPoints: [
      "CirrÃ³tico con lÃ­quido ascÃ­tico infectado (PMN > 250).",
      "LÃ­quido con proteÃ­nas altas, glucosa muy baja y flora mixta/polimicrobiana en el Gram.",
      "Peritonitis Secundaria (VÃ­scera perforada). Criterios de Runyon positivos. El manejo no es con ceftriaxona, es cirugÃ­a urgente y ATB de amplio espectro.",
      "Tema: Complicaciones de Cirrosis / Peritonitis Secundaria."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-05",
    university: "UCC",
    examArea: "Medicina Interna / NeumologÃ­a / HematologÃ­a",
    topic: "NeumologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "neumologia", "trombosis", "cancer"],
    statement: "Hombre de 68 aÃ±os, con antecedente de Adenocarcinoma GÃ¡strico metastÃ¡sico actualmente en quimioterapia paliativa. Consulta a urgencias por disnea de inicio sÃºbito, dolor pleurÃ­tico derecho y taquicardia. El examen fÃ­sico revela un miembro inferior izquierdo edematizado y doloroso a la palpaciÃ³n del trayecto venoso profundo. Se realiza una Angio-TC de tÃ³rax que confirma un Tromboembolismo Pulmonar (TEP) agudo segmentario y subsegmentario en el lÃ³bulo inferior derecho. Sus signos vitales son estables (PA 130/80 mmHg, FC 98 lpm) y el ecocardiograma no muestra disfunciÃ³n del ventrÃ­culo derecho. Las plaquetas se encuentran en 180,000/mmÂ³ y la depuraciÃ³n de creatinina es de 65 mL/min. Â¿CuÃ¡l es el tratamiento anticoagulante ambulatorio de PRIMERA LÃNEA MÃS apropiado para este paciente segÃºn la evidencia actual?",
    options: [
      {
        id: "A",
        label: "A",
        text: "ApixabÃ¡n 10 mg cada 12 horas por 7 dÃ­as, seguido de 5 mg cada 12 horas (Anticoagulante oral directo).",
        distractorProfile: "contraindicated_in_gi_cancer",
        incorrectFeedback: "Aunque de primera lÃ­nea para muchos cÃ¡nceres, los DOACs estÃ¡n contraindicados en tumores gastrointestinales luminales por riesgo masivo de hemorragia."
      },
      {
        id: "B",
        label: "B",
        text: "Warfarina oral con un INR objetivo de 2.0 a 3.0, tras una terapia puente de 5 dÃ­as con heparina.",
        distractorProfile: "suboptimal_in_cancer",
        incorrectFeedback: "La warfarina tiene peores desenlaces (mÃ¡s trombosis recurrente y mÃ¡s sangrado) en cÃ¡ncer activo y ya no es de primera lÃ­nea."
      },
      {
        id: "C",
        label: "C",
        text: "Enoxaparina subcutÃ¡nea a dosis terapÃ©uticas (1 mg/kg cada 12 horas) de forma extendida (al menos 6 meses)."
      },
      {
        id: "D",
        label: "D",
        text: "InserciÃ³n de un filtro de vena cava inferior como terapia Ãºnica debido a la contraindicaciÃ³n de anticoagulaciÃ³n en cÃ¡ncer digestivo.",
        distractorProfile: "wrong_indication_ivc_filter",
        incorrectFeedback: "No hay contraindicaciÃ³n absoluta para anticoagular. El filtro de vena cava se reserva para pacientes que sÃ­ tienen contraindicaciÃ³n absoluta o TEP recurrente pese a anticoagulaciÃ³n plena."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta una Trombosis Asociada a CÃ¡ncer (CAT, por sus siglas en inglÃ©s). Durante dÃ©cadas, las Heparinas de Bajo Peso Molecular (HBPM como la Enoxaparina o Dalteparina) fueron el Ãºnico estÃ¡ndar de oro. Recientemente, las guÃ­as de CHEST y ASCO han incorporado a los Anticoagulantes Orales Directos (DOACs, como ApixabÃ¡n o RivaroxabÃ¡n) como primera lÃ­nea para la mayorÃ­a de los cÃ¡nceres. SIN EMBARGO, existe una advertencia/excepciÃ³n crÃ­tica: los DOACs se asocian a un riesgo inaceptablemente alto de sangrado mayor intraluminal en pacientes con tumores gastrointestinales luminales activos (especialmente gÃ¡stricos y esofÃ¡gicos) o genitourinarios. En este grupo especÃ­fico (cÃ¡ncer gÃ¡strico activo), la Enoxaparina subcutÃ¡nea sigue siendo estrictamente la terapia de elecciÃ³n, ya que es significativamente mÃ¡s segura respecto al sangrado luminal.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Colega, en los Ãºltimos aÃ±os las guÃ­as cambiaron y ahora a casi todo cÃ¡ncer que hace trombosis se le puede dar DOAC (pastillas, mucha mÃ¡s calidad de vida). Pero la trampa del examen es ponerte el caso exacto de la 'excepciÃ³n a la regla'. El tejido tumoral del estÃ³mago friable expuesto al Ã¡cido sangrarÃ¡ a chorros si bloqueas el Factor Xa de forma directa con la pastilla. Si el tumor fuera de mama o de pulmÃ³n, el ApixabÃ¡n (OpciÃ³n A) serÃ­a la respuesta correcta. Con estÃ³mago, pincha la barriga (Enoxaparina).",
    keyPoints: [
      "Trombosis Venosa o TEP en un paciente con cÃ¡ncer activo.",
      "Tumor primario localizado en la luz del tracto gastrointestinal (GÃ¡strico, EsofÃ¡gico) o genitourinario (Vejiga).",
      "Heparina de Bajo Peso Molecular (Enoxaparina) como primera lÃ­nea. Los DOACs (ApixabÃ¡n, RivaroxabÃ¡n) estÃ¡n fuertemente desaconsejados por riesgo de hemorragia intratumoral masiva.",
      "Tema: Trombosis Asociada a CÃ¡ncer / TEP."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-06",
    university: "UCC",
    examArea: "PediatrÃ­a / NeurologÃ­a",
    topic: "PediatrÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "neurologia"],
    statement: "Lactante masculino de 6 meses, nacido a tÃ©rmino sin complicaciones perinatales, es traÃ­do por su madre debido a que desde hace una semana presenta episodios repentinos en los que 'tira la cabeza hacia adelante, flexiona el tronco y eleva los brazos', durando de 1 a 2 segundos cada uno. Estos movimientos ocurren en salvas (grupos de 10 a 15) especialmente al momento de despertar. Al examen fÃ­sico, se documentan 4 mÃ¡culas hipocrÃ³micas (en forma de hoja de fresno) en el tronco y el dorso. Un electroencefalograma (EEG) tomado en vigilia muestra un patrÃ³n caÃ³tico de ondas lentas de alto voltaje mezcladas con espigas multifocales desorganizadas (Hipsarritmia). Con el diagnÃ³stico de SÃ­ndrome de West y sospecha firme de la enfermedad genÃ©tica subyacente, Â¿cuÃ¡l es el tratamiento farmacolÃ³gico de PRIMERA LÃNEA de elecciÃ³n?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Hormona Adrenocorticotropa (ACTH) intramuscular.",
        distractorProfile: "standard_but_wrong_for_this_subtype",
        incorrectFeedback: "Es la terapia estÃ¡ndar para West idiopÃ¡tico, pero superada por Vigabatrina cuando hay Esclerosis Tuberosa subyacente."
      },
      {
        id: "B",
        label: "B",
        text: "Vigabatrina por vÃ­a oral."
      },
      {
        id: "C",
        label: "C",
        text: "Ãcido Valproico en jarabe a dosis altas.",
        distractorProfile: "suboptimal_for_infantile_spasms",
        incorrectFeedback: "El Ã¡cido valproico no es el tratamiento de primera lÃ­nea para revertir los espasmos infantiles ni la hipsarritmia."
      },
      {
        id: "D",
        label: "D",
        text: "Prednisolona oral en pulsos descendentes.",
        distractorProfile: "alternative_not_preferred",
        incorrectFeedback: "Los corticoides se usan si no hay ACTH en casos idiopÃ¡ticos, pero no es la elecciÃ³n frente a Vigabatrina en Esclerosis Tuberosa."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta Espasmos Infantiles (SÃ­ndrome de West), caracterizados por la trÃ­ada: espasmos en flexiÃ³n/extensiÃ³n, patrÃ³n de hipsarritmia en el EEG y detenciÃ³n/regresiÃ³n del neurodesarrollo. La etiologÃ­a mÃ¡s frecuente de los espasmos infantiles sintomÃ¡ticos es el Complejo Esclerosis Tuberosa (CET), el cual se sospecha clÃ­nicamente en este paciente por las mÃ¡culas hipomelanÃ³ticas en hoja de fresno (ash-leaf spots). Aunque el tratamiento general de primera lÃ­nea para el SÃ­ndrome de West idiopÃ¡tico es la ACTH o los corticosteroides a altas dosis, las guÃ­as internacionales establecen de forma unÃ¡nime que cuando el SÃ­ndrome de West es secundario a Esclerosis Tuberosa, el fÃ¡rmaco de elecciÃ³n absoluta y de primera lÃ­nea es la Vigabatrina, por tener una eficacia drÃ¡sticamente superior en este subgrupo genÃ©tico.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Otra 'perla de oro' pediÃ¡trica. El evaluador quiere ver si diferencias la epilepsia mioclÃ³nica comÃºn del sÃ­ndrome sindrÃ³mico. El ACTH (OpciÃ³n A) es el estÃ¡ndar general, pero la Vigabatrina (un inhibidor de la GABA-transaminasa) tiene un efecto casi mÃ¡gico, dirigido y especÃ­fico sobre los tuberes corticales de la esclerosis tuberosa. Eso sÃ­, recuerda para tu prÃ¡ctica que la vigabatrina tiene como efecto adverso temido la constricciÃ³n del campo visual irreversible, por lo que requiere controles estrictos de oftalmologÃ­a pediÃ¡trica.",
    keyPoints: [
      "Lactante con espasmos en salvas al despertar + EEG con Hipsarritmia = SÃ­ndrome de West.",
      "Manchas hipocrÃ³micas en 'hoja de fresno' = Esclerosis Tuberosa.",
      "Dilema terapÃ©utico entre ACTH y Vigabatrina. Si NO hay Esclerosis Tuberosa = ACTH/Corticoides. Si SÃ hay Esclerosis Tuberosa = Vigabatrina.",
      "Tema: Epilepsia PediÃ¡trica / SÃ­ndrome de West."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-07",
    university: "UCC",
    examArea: "Medicina Interna / EndocrinologÃ­a / Urgencias",
    topic: "EndocrinologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "endocrinologia", "urgencias"],
    statement: "Hombre de 78 aÃ±os, diabÃ©tico tipo 2 mal controlado, es traÃ­do de un asilo por un cuadro de alteraciÃ³n profunda del estado de conciencia de instalaciÃ³n progresiva en la Ãºltima semana, tras haber padecido una gastroenteritis viral. Al examen fÃ­sico: estuporoso, marcadamente deshidratado (mucosas orales cuarteadas, ojos hundidos), PA 85/50 mmHg (choque hipovolÃ©mico), FC 115 lpm. ParaclÃ­nicos: Glucemia central 950 mg/dL, Sodio sÃ©rico 152 mEq/L, Potasio 3.9 mEq/L, Creatinina 2.8 mg/dL (prerrenal), pH 7.34, HCO3 20 mEq/L, Cetonas en suero negativas, Osmolaridad plasmÃ¡tica efectiva de 365 mOsm/kg. Â¿CuÃ¡l debe ser la primera conducta terapÃ©utica INMEDIATA a instaurar en urgencias?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar infusiÃ³n de insulina regular IV a 0.1 U/kg/h en soluciÃ³n salina al 0.45% para corregir simultÃ¡neamente la hiperglucemia y la hipernatremia.",
        distractorProfile: "premature_insulin",
        incorrectFeedback: "Iniciar insulina antes que corregir la hipovolemia puede causar desplazamiento brusco de agua al espacio intracelular y precipitar colapso cardiovascular."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar bolos agresivos de SoluciÃ³n Salina Normal (NaCl al 0.9%) a razÃ³n de 1-2 Litros en la primera hora hasta revertir la hipotensiÃ³n y recuperar la perfusiÃ³n."
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar infusiÃ³n de SoluciÃ³n Salina al 0.45% (HipotÃ³nica) desde el minuto cero para disminuir de forma gradual la hipernatremia y evitar edema cerebral.",
        distractorProfile: "wrong_fluid_in_shock",
        incorrectFeedback: "Los fluidos hipotÃ³nicos se distribuyen rÃ¡pido fuera del espacio intravascular, no sirviendo para revertir el choque hipovolÃ©mico agudo."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar bolos de Dextrosa al 5% en agua destilada (DAD 5%) combinada con Insulina rÃ¡pida para normalizar la osmolaridad de forma fisiolÃ³gica.",
        distractorProfile: "dangerous_osmotic_shift",
        incorrectFeedback: "La DAD empeorarÃ­a agudamente la hiperglucemia y el desplazamiento del agua no corregirÃ¡ la hipovolemia intravascular."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un Estado Hiperosmolar HiperglucÃ©mico (EHH) puro (glucosa >600, osmolaridad >320, sin acidosis ni cetosis significativa), complicado con choque hipovolÃ©mico por depleciÃ³n masiva de agua libre (diuresis osmÃ³tica). Aunque el paciente presenta una hipernatremia grave y una osmolaridad plasmÃ¡tica crÃ­tica que sugieren el uso de fluidos hipotÃ³nicos, la REGLA DE ORO en cualquier emergencia endocrina (CAD o EHH) asociada a inestabilidad hemodinÃ¡mica es: restaurar primero la perfusiÃ³n tisular. Independientemente del nivel de sodio, si el paciente estÃ¡ chocado (PA 85/50), la reanimaciÃ³n hÃ­drica inicial debe hacerse SIEMPRE con cristaloides isotÃ³nicos (SoluciÃ³n Salina Normal 0.9% o Lactato de Ringer) hasta que la presiÃ³n arterial y la perfusiÃ³n se estabilicen. Solo despuÃ©s de alcanzar estabilidad hemodinÃ¡mica, se debe cambiar a soluciÃ³n salina hipotÃ³nica (0.45%) si el sodio corregido persiste elevado.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Colega, aquÃ­ el miedo a la hipernatremia o al edema cerebral te puede hacer marcar la OpciÃ³n C (Salina al 0.45%). Si le pasas una soluciÃ³n hipotÃ³nica (agua libre) a un paciente chocado, el agua no se va a quedar en el vaso sanguÃ­neo para subirle la presiÃ³n arterial, se va a ir directamente al tercer espacio y al interior de las cÃ©lulas, el paciente seguirÃ¡ en choque y harÃ¡ un paro cardÃ­aco. Primero se salva la presiÃ³n arterial llenando el tanque vascular (SSN 0.9%), y en el segundo paso corregimos la deshidrataciÃ³n intracelular (SSN 0.45%).",
    keyPoints: [
      "Paciente con EHH (Estado Hiperosmolar) o CAD, con hipernatremia y osmolaridad elevadas.",
      "HipotensiÃ³n o signos de choque manifiesto.",
      "El sodio no importa en la primera hora si hay choque. La reanimaciÃ³n inicial es con SoluciÃ³n Salina al 0.9% para expandir el volumen intravascular; las soluciones hipotÃ³nicas se dejan para la fase de mantenimiento.",
      "Tema: Urgencias EndocrinolÃ³gicas / EHH."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-08",
    university: "UCC",
    examArea: "PediatrÃ­a / InfectologÃ­a / NeumologÃ­a",
    topic: "PediatrÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "infectologia", "sarampion"],
    statement: "Lactante masculino de 11 meses, con esquema de vacunaciÃ³n retrasado por decisiÃ³n de los padres, es traÃ­do por un cuadro de fiebre de 39.8Â°C de 6 dÃ­as de evoluciÃ³n, tos intensa, congestiÃ³n nasal mucopurulenta y marcada inyecciÃ³n conjuntival bilateral. La madre refiere que hace dos dÃ­as presentÃ³ unas 'manchitas blancas como granos de sal' en la mucosa oral interna, las cuales desaparecieron. Hoy iniciÃ³ con una erupciÃ³n cutÃ¡nea maculopapular eritematosa que comenzÃ³ detrÃ¡s de las orejas y en la lÃ­nea de implantaciÃ³n del cabello, diseminÃ¡ndose hacia el tronco. Durante la evaluaciÃ³n actual, el niÃ±o se nota taquipneico (FR 55 rpm), con tirajes intercostales y crÃ©pitos en bases pulmonares. La radiografÃ­a de tÃ³rax confirma neumonÃ­a intersticial. Â¿QuÃ© intervenciÃ³n terapÃ©utica sistÃ©mica especÃ­fica ha demostrado reducir la morbimortalidad y la severidad de este cuadro?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar Ribavirina en aerosol de forma temprana.",
        distractorProfile: "rare_use_antiviral",
        incorrectFeedback: "La ribavirina es muy tÃ³xica y costosa, reservada solo para inmunosuprimidos graves. No es la terapia recomendada de rutina."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar dosis altas de Vitamina A (Retinol) por dos dÃ­as consecutivos."
      },
      {
        id: "C",
        label: "C",
        text: "Prescribir terapia empÃ­rica con Aciclovir intravenoso.",
        distractorProfile: "wrong_antiviral_target",
        incorrectFeedback: "El aciclovir es para Herpesviridae, no tiene efecto en Paramyxoviridae (virus del sarampiÃ³n)."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar Inmunoglobulina G intravenosa (IGIV) a 2 g/kg en infusiÃ³n continua.",
        distractorProfile: "wrong_indication_ivig",
        incorrectFeedback: "La inmunoglobulina se usarÃ­a como profilaxis posexposiciÃ³n en algunos grupos, no como tratamiento primario en la fase de estado con neumonÃ­a."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta el cuadro patognomÃ³nico del SarampiÃ³n: prÃ³dromo con la triple catarro (tos, coriza, conjuntivitis), fiebre alta, manchas de Koplik previas en la mucosa yodular (exantema patognomÃ³nico), y el exantema maculopapular con progresiÃ³n cÃ©falo-caudal centrÃ­fuga clÃ¡sica. Su complicaciÃ³n actual, y la principal causa de muerte por sarampiÃ³n en lactantes, es la neumonÃ­a. Las guÃ­as de la OMS establecen de forma mandataria la administraciÃ³n de dosis altas de Vitamina A (50.000 a 200.000 UI segÃºn la edad, administradas en los dÃ­as 1 y 2 del diagnÃ³stico) para todos los niÃ±os con sarampiÃ³n clÃ­nico severo o complicado. La vitamina A modula la respuesta inmune epitelial, revierte la descamaciÃ³n epitelial del pulmÃ³n y la cÃ³rnea, y ha demostrado en grandes metaanÃ¡lisis reducir drÃ¡sticamente la mortalidad, ceguera y severidad de las complicaciones respiratorias.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Un error muy comÃºn es creer que, por ser viral, el sarampiÃ³n solo tiene manejo de soporte de lÃ­quidos (o buscar antivirales costosos como la Ribavirina, opciÃ³n A, que solo se reserva para casos anecdÃ³ticos muy crÃ­ticos o inmunosuprimidos). En pediatrÃ­a infecciosa, el sarampiÃ³n y la vitamina A van de la mano. El virus del sarampiÃ³n agota violentamente las reservas hepÃ¡ticas de retinol del niÃ±o; sin vitamina A, el epitelio respiratorio se necrosa. Suplir la vitamina es el verdadero tratamiento de rescate epitelial.",
    keyPoints: [
      "Lactante no vacunado con exantema cÃ©falo-caudal, triple catarro y manchas de Koplik.",
      "SarampiÃ³n complicado con neumonÃ­a, crupe o desnutriciÃ³n.",
      "AdministraciÃ³n de Vitamina A; es la Ãºnica intervenciÃ³n sistÃ©mica 'antiviral' comprobada que cambia el pronÃ³stico de supervivencia.",
      "Tema: Enfermedades Inmunoprevenibles / SarampiÃ³n."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-09",
    university: "UCC",
    examArea: "Medicina Interna / HematologÃ­a / NeurologÃ­a",
    topic: "HematologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "hematologia", "neurologia"],
    statement: "Hombre de 72 aÃ±os con antecedente de fibrilaciÃ³n auricular no valvular en manejo crÃ³nico con Warfarina (dosis de 5 mg diarios) es traÃ­do a urgencias tras sufrir una caÃ­da desde su propia altura con trauma craneoencefÃ¡lico leve hace 3 horas. Al ingreso, el paciente presenta deterioro sÃºbito del estado de conciencia, afasia y hemiplejÃ­a derecha. Una tomografÃ­a (TC) de crÃ¡neo simple de urgencia evidencia una extensa hemorragia intraparenquimatosa tÃ©mporo-parietal izquierda con efecto de masa y desplazamiento de la lÃ­nea media. Los laboratorios de ingreso reportan un Tiempo de Protrombina (TP) marcadamente prolongado con un INR de 4.1. Â¿CuÃ¡l es el tratamiento de reversiÃ³n MÃS adecuado e inmediato para salvar la vida del paciente?",
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
        incorrectFeedback: "El PFC requiere gran volumen (riesgo de sobrecarga) y tarda en ser preparado y transfundido. Ya no es de primera lÃ­nea."
      },
      {
        id: "C",
        label: "C",
        text: "Administrar Complejo ProtrombÃ­nico de 4 factores (PCC) intravenoso asociado a Vitamina K (Fitomenadiona) intravenosa."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar Idarucizumab intravenoso inmediato asociado a Ãcido TranexÃ¡mico.",
        distractorProfile: "wrong_antidote",
        incorrectFeedback: "El Idarucizumab es el antÃ­doto especÃ­fico para el DabigatrÃ¡n (DOAC), no sirve para revertir antagonistas de vitamina K (Warfarina)."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente cursa con una hemorragia intracraneana masiva y que pone en peligro la vida, desencadenada/exacerbada por un estado de supra-anticoagulaciÃ³n por Warfarina (INR > 4). La reversiÃ³n debe ser instantÃ¡nea. El Concentrado de Complejo ProtrombÃ­nico (PCC) de 4 factores (que contiene factores II, VII, IX y X altamente concentrados) es el agente de reversiÃ³n de elecciÃ³n (gold standard). Logra normalizar el INR a un valor <1.5 en menos de 15 minutos con un volumen mÃ­nimo de infusiÃ³n, limitando la expansiÃ³n del hematoma. Sin embargo, su vida media es corta (horas), por lo que siempre debe acompaÃ±arse de la administraciÃ³n de Vitamina K endovenosa lenta (la cual tardarÃ¡ 12-24 horas en actuar, pero mantendrÃ¡ el efecto de reversiÃ³n a largo plazo cuando el PCC se agote).\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Colega, actualiza tu arsenal mental de urgencias. Antes pasÃ¡bamos 'Plasma a chorro' (OpciÃ³n B), pero el plasma es un desastre en este escenario: requiere descongelarse (tarda 45 minutos), para revertir un INR de 4 necesitas pasar casi 2 litros de plasma (causando sobrecarga hÃ­drica masiva o TACO en un anciano) y su eficacia es errÃ¡tica. El PCC (Octaplex/Beriplex) viene en un frasco de 50 mL, se prepara en 1 minuto y cierra el 'grifo' del sangrado de inmediato. Y recuerda, Idarucizumab (OpciÃ³n D) es el antÃ­doto especÃ­fico del DabigatrÃ¡n, no de la Warfarina.",
    keyPoints: [
      "Paciente anticoagulado con Warfarina (antagonista vitamina K).",
      "Hemorragia mayor amenazante para la vida (Intracraneal, retroperitoneal, digestiva masiva).",
      "ReversiÃ³n inmediata con Concentrado de Complejo ProtrombÃ­nico (PCC) + Vitamina K IV. El plasma fresco congelado (PFC) quedÃ³ como segunda lÃ­nea si el PCC no estÃ¡ disponible.",
      "Tema: Urgencias HematolÃ³gicas / ReversiÃ³n de AnticoagulaciÃ³n."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-10",
    university: "UCC",
    examArea: "PediatrÃ­a / CardiologÃ­a / NeonatologÃ­a",
    topic: "PediatrÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "cardiologia", "neonatologia"],
    statement: "ReciÃ©n nacido de 12 horas de vida, a tÃ©rmino, producto de embarazo mal controlado, inicia con cianosis generalizada profunda que no mejora tras la administraciÃ³n de oxÃ­geno suplementario al 100% (prueba de hiperoxia fallida, con PaO2 que no supera los 40 mmHg). Al examen fÃ­sico: taquipneico, cianÃ³tico, con un soplo sistÃ³lico eyectivo suave en borde esternal izquierdo. La radiografÃ­a de tÃ³rax evidencia un mediastino superior estrecho ('silueta cardÃ­aca en forma de huevo colgado de un hilo') y una vascularizaciÃ³n pulmonar normal o levemente aumentada. Un ecocardiograma confirma la discordancia ventrÃ­culo-arterial, estableciendo el diagnÃ³stico de TransposiciÃ³n de las Grandes Arterias (TGA) simple. El paciente luce severamente hipÃ³xico y acidÃ³tico (pH 7.15). Â¿CuÃ¡l es la intervenciÃ³n farmacolÃ³gica de rescate INMEDIATA MÃS apropiada antes de los procedimientos invasivos?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar surfactante pulmonar a travÃ©s de intubaciÃ³n orotraqueal para reclutar alvÃ©olos.",
        distractorProfile: "wrong_pathophysiology_respiratory",
        incorrectFeedback: "El problema no es pulmonar primario (enfermedad de membrana hialina), sino un cortocircuito cardÃ­aco donde la sangre oxigenada no llega a la aorta."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar infusiÃ³n intravenosa de Prostaglandina E1 (Alprostadil) de forma urgente."
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar infusiÃ³n de Indometacina o Ibuprofeno lisina intravenoso para cerrar los cortocircuitos fetales.",
        distractorProfile: "fatal_intervention",
        incorrectFeedback: "Cerrar el conducto arterioso en una TGA simple causarÃ­a asfixia y muerte en minutos, ya que bloquea la Ãºnica vÃ­a de mezcla sanguÃ­nea vital."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar Ã“xido NÃ­trico Inhalado (iNO) para dilatar el lecho vascular pulmonar y promover la oxigenaciÃ³n.",
        distractorProfile: "wrong_target",
        incorrectFeedback: "El iNO trata la hipertensiÃ³n pulmonar primaria, no es el rescate para la cianosis por TGA que depende de mantener los shunts anatÃ³micos abiertos."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con TransposiciÃ³n de Grandes Arterias (TGA), la cardiopatÃ­a congÃ©nita cianÃ³gena mÃ¡s comÃºn del periodo neonatal inmediato. En la TGA, la circulaciÃ³n sistÃ©mica y pulmonar operan en paralelo en lugar de en serie (la aorta sale del VD y la arteria pulmonar del VI). Esta disposiciÃ³n es 100% letal tras el nacimiento, a menos que exista un sitio de mezcla de sangre oxigenada (comunicaciÃ³n interauricular, interventricular o el Ductus Arteriosus). Como se trata de una TGA 'simple' (sin comunicaciÃ³n interventricular obvia que permita buena mezcla), el bebÃ© depende absolutamente de que el conducto arterioso fetal permanezca abierto para permitir que algo de sangre oxigenada cruce hacia la aorta. El paso salvavidas crÃ­tico inicial es iniciar una infusiÃ³n de Prostaglandina E1 (Alprostadil) para mantener permeable el Ductus Arteriosus, seguido posteriormente de una septostomÃ­a auricular de Rashkind si persiste la hipoxia, y finalmente la cirugÃ­a de switch arterial (Jatene).\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** En cardiologÃ­a pediÃ¡trica, 'cianosis que no mejora con oxÃ­geno' es igual a cortocircuito de derecha a izquierda o en paralelo. El corazÃ³n 'en forma de huevo' (por atrofia del timo y el pedÃ­culo vascular estrecho al estar los vasos superpuestos anteroposteriormente) es el sello de la TGA. La trampa fisiopatolÃ³gica de la opciÃ³n C es fatal: si usas Indometacina, cierras el ductus, suprimes el Ãºnico sitio de mezcla de sangre que le queda al bebÃ© y precipitas una muerte hipÃ³xica en escasos minutos. La prostaglandina relaja el mÃºsculo liso del ductus, dÃ¡ndote el puente para operarlo.",
    keyPoints: [
      "ReciÃ©n nacido con cianosis profunda en las primeras 24h, refractario a oxÃ­geno al 100%.",
      "RadiografÃ­a con corazÃ³n en forma de 'huevo colgado de una cuerda/hilo'.",
      "TransposiciÃ³n de Grandes Arterias (lesiÃ³n dependiente del ductus para la mezcla). El rescate absoluto inicial es Prostaglandina E1.",
      "Tema: CardiopatÃ­as CongÃ©nitas CianÃ³genas / TGA."
    ]
  }
];

