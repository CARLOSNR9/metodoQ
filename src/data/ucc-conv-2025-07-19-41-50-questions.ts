import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC â€” EdiciÃ³n #3 (19 jul 2025) Â· Preguntas #41â€“#50.
 * Banco exclusivo del examen oficial quincenal Pro.
 */
export const UCC_CONV_2025_07_19_41_50_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2025-07-19-41",
    university: "UCC",
    examArea: "Medicina Interna / NeumologÃ­a / OncologÃ­a",
    topic: "NeumologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "neumologia", "oncologia"],
    statement: "Hombre de 65 aÃ±os, fumador activo (Ã­ndice tabÃ¡quico de 45 paquetes/aÃ±o), a quien se le realiza una TomografÃ­a Computarizada (TC) de tÃ³rax de baja dosis como parte de un programa de tamizaje. Se documenta el hallazgo incidental de un nÃ³dulo pulmonar sÃ³lido de 16 mm de diÃ¡metro en el lÃ³bulo superior derecho, de contornos marcadamente espiculados y con retracciÃ³n pleural adyacente. No se evidencian calcificaciones en su interior ni adenopatÃ­as mediastÃ­nicas significativas por tamaÃ±o (>10 mm). El paciente se encuentra asintomÃ¡tico, con pruebas de funciÃ³n pulmonar que muestran un VEF1 del 85% del predicho. SegÃºn las guÃ­as de la Fleischner Society y el ACCP, Â¿cuÃ¡l es la conducta diagnÃ³stica MÃS apropiada a seguir en este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Solicitar una TomografÃ­a por EmisiÃ³n de Positrones (PET-CT) con FDG para estadificaciÃ³n regional y caracterizaciÃ³n metabÃ³lica previa a la intervenciÃ³n tisular."
      },
      {
        id: "B",
        label: "B",
        text: "Programar de inmediato una toracotomÃ­a abierta o resecciÃ³n en cuÃ±a por videotoracoscopia (VATS) por presentar criterios radiolÃ³gicos absolutos de malignidad.",
        distractorProfile: "premature_invasive_surgery",
        incorrectFeedback: "La resecciÃ³n directa (VATS) se reserva para pacientes con alta probabilidad de malignidad en quienes el PET-CT previo ha descartado diseminaciÃ³n ganglionar mediastÃ­nica o enfermedad a distancia."
      },
      {
        id: "C",
        label: "C",
        text: "Realizar seguimiento radiolÃ³gico exclusivo con una nueva TC de tÃ³rax de alta resoluciÃ³n en 3 meses para evaluar el tiempo de duplicaciÃ³n del volumen.",
        distractorProfile: "deadly_watch_and_wait",
        incorrectFeedback: "Vigilar un nÃ³dulo >8 mm con alta probabilidad pretest de malignidad es negligencia; el seguimiento a 3 meses aplica estrictamente para nÃ³dulos de bajo a moderado riesgo donde la intervenciÃ³n agresiva supera el beneficio."
      },
      {
        id: "D",
        label: "D",
        text: "Realizar una broncoscopia flexible con lavado broncoalveolar para citologÃ­a, difiriendo tÃ©cnicas invasivas transtorÃ¡cicas.",
        distractorProfile: "low_yield_diagnostic_tool",
        incorrectFeedback: "La broncoscopia flexible convencional sin navegaciÃ³n electromagnÃ©tica falla en alcanzar la inmensa mayorÃ­a de nÃ³dulos perifÃ©ricos, generando falsos negativos que retrasan la atenciÃ³n."
      }
    ],
    correctOptionId: "A",
    explanation: "El paciente presenta un NÃ³dulo Pulmonar Solitario (NPS) con caracterÃ­sticas de alto riesgo de malignidad (tamaÃ±o >8 mm, espiculado, retracciÃ³n pleural, paciente aÃ±oso, fumador pesado). La probabilidad pretest de cÃ¡ncer supera el 65%. SegÃºn las directrices para nÃ³dulos sÃ³lidos > 8 mm de alto riesgo, la conducta mandatoria es la evaluaciÃ³n metabÃ³lica y de estadificaciÃ³n ganglionar mediante PET-CT antes de proceder a una biopsia (o resecciÃ³n quirÃºrgica directa si el PET es captante). El PET-CT es vital para descartar enfermedad metastÃ¡sica oculta o compromiso ganglionar mediastÃ­nico (N2/N3) no visible en la TC simple, lo cual cambiarÃ­a radicalmente el enfoque de quirÃºrgico curativo a oncolÃ³gico sistÃ©mico.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** En oncologÃ­a torÃ¡cica, Colega, \"nunca cortes sin iluminar primero\". Aunque el nÃ³dulo grita cÃ¡ncer (16 mm, espiculado), someter al paciente a una lobectomÃ­a inmediata (OpciÃ³n B) es un error gravÃ­simo si no sabes si el tumor ya sembrÃ³ micrometÃ¡stasis en los ganglios paratraqueales. Si operas y el ganglio sale positivo, operaste en vano y sometiste al paciente a morbilidad sin beneficio curativo. El PET-CT te traza el mapa de guerra. La broncoscopia sola (OpciÃ³n D) tiene un rendimiento diagnÃ³stico paupÃ©rrimo (<30%) para nÃ³dulos perifÃ©ricos menores a 2 cm.",
    keyPoints: [
      "NÃ³dulo pulmonar sÃ³lido mayor a 8 mm con factores radiolÃ³gicos de alto riesgo (espiculado, lÃ³bulo superior, no calcificado).",
      "Paciente con factores demogrÃ¡ficos de riesgo (tabaquismo, edad > 50 aÃ±os).",
      "Toma de decisiÃ³n entre vigilar, biopsiar o imagen avanzada.",
      "EstadificaciÃ³n metabÃ³lica con PET-CT. No se opera un nÃ³dulo altamente sospechoso sin antes descartar metÃ¡stasis ocultas o compromiso mediastÃ­nico que contraindiquen la cirugÃ­a de primera lÃ­nea.",
      "Tema: NÃ³dulo Pulmonar Solitario / CÃ¡ncer de PulmÃ³n."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-42",
    university: "UCC",
    examArea: "PediatrÃ­a / GastroenterologÃ­a / AlergologÃ­a",
    topic: "PediatrÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "gastroenterologia", "alergologia"],
    statement: "Lactante masculino de 6 meses de edad es traÃ­do a urgencias en estado de letargia profunda y palidez intensa. La madre refiere que hace exactamente 2 horas le dio a probar por primera vez una papilla de arroz. Cincuenta minutos despuÃ©s de la ingesta, el niÃ±o comenzÃ³ con vÃ³mitos incoercibles (mÃ¡s de 10 episodios), palidez y decaimiento progresivo hasta la somnolencia actual. Al examen fÃ­sico: hipotenso (PA 60/35 mmHg), taquicÃ¡rdico, hipotÃ©rmico, pero NO presenta sibilancias, ronchas, eritema ni edema facial (ausencia de signos cutÃ¡neos o respiratorios). Se asume choque y se administran cristaloides a 20 cc/kg. Â¿CuÃ¡l es el diagnÃ³stico fisiopatolÃ³gico MÃS probable y el medicamento especÃ­fico que bloquea el mecanismo emÃ©tico central en este sÃ­ndrome?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Anafilaxia mediada por IgE; requiere administraciÃ³n inmediata de Epinefrina intramuscular.",
        distractorProfile: "wrong_allergic_mechanism",
        incorrectFeedback: "La anafilaxia clÃ¡sica cursa casi invariablemente con compromiso cutÃ¡neo (urticaria/angioedema) o respiratorio; el choque del FPIES es hipovolÃ©mico por secuestro entÃ©rico y no responde a la epinefrina de la misma forma que el choque distributivo anafilÃ¡ctico."
      },
      {
        id: "B",
        label: "B",
        text: "SÃ­ndrome de Enterocolitis Inducida por ProteÃ­nas de los Alimentos (FPIES); el fÃ¡rmaco de elecciÃ³n es el OndansetrÃ³n intravenoso."
      },
      {
        id: "C",
        label: "C",
        text: "InvaginaciÃ³n intestinal aguda desencadenada por nuevos alimentos; el manejo analgÃ©sico es con Hioscina y remisiÃ³n quirÃºrgica.",
        distractorProfile: "surgical_overlap",
        incorrectFeedback: "Aunque la invaginaciÃ³n intestinal produce letargia y dolor, su presentaciÃ³n suele incluir dolor paroxÃ­stico agudo, llanto intermitente y posteriormente deposiciones en jalea de grosella, pero rara vez debuta con vÃ³mito profuso casi fulminante a los minutos de comer algo nuevo."
      },
      {
        id: "D",
        label: "D",
        text: "Sepsis fulminante de origen entÃ©rico; requiere administraciÃ³n empÃ­rica de Ceftriaxona.",
        distractorProfile: "sepsis_mimic_trap",
        incorrectFeedback: "La sepsis es el principal diagnÃ³stico diferencial, pero la relaciÃ³n temporal estricta (1-4h) con la introducciÃ³n de un alimento especÃ­fico (arroz) en un lactante previamente perfecto sin fiebre apunta a una reacciÃ³n inmune entÃ©rica aguda."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un SÃ­ndrome de Enterocolitis Inducida por ProteÃ­nas de los Alimentos (FPIES, por sus siglas en inglÃ©s), una alergia alimentaria **no mediada por IgE** (mediada por cÃ©lulas T). La presentaciÃ³n aguda patognomÃ³nica es hiperaguda y brutal: vÃ³mitos profusos, letargia profunda, palidez y choque hipotensivo (en el 15-20% de los casos) que inicia estrictamente de 1 a 4 horas tras la ingesta del alimento agresor (clÃ¡sicamente leche de vaca, soya o cereales como el arroz o la avena en la fase de ablactaciÃ³n). La clave clÃ­nica es la AUSENCIA de sÃ­ntomas cutÃ¡neos (urticaria) o respiratorios, diferenciÃ¡ndolo de la anafilaxia tÃ­pica. El manejo de urgencia exige reanimaciÃ³n hÃ­drica intensiva y el uso de **OndansetrÃ³n** IV (antagonista 5-HT3), el cual ejerce un efecto casi milagroso al detener los vÃ³mitos y revertir la cascada neuroentÃ©rica que sostiene el choque.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** El FPIES es el \"gran simulador de la sepsis\" en urgencias pediÃ¡tricas. El residente novato ve un bebÃ© pÃ¡lido, hipotenso y letÃ¡rgico e inicia el protocolo de sepsis con punciÃ³n lumbar y antibiÃ³ticos. El residente astuto interroga: \"Â¿quÃ© comiÃ³ hace dos horas?\". Si es arroz, avena o fÃ³rmula nueva, y no tiene ronchas, es FPIES. La trampa (OpciÃ³n A) es pensar que toda reacciÃ³n alÃ©rgica severa es anafilaxia. En el FPIES no hay IgE, no hay histamina libre, por lo que la Epinefrina y los corticoides no sirven para detener el mecanismo de base; el secreto estÃ¡ en bloquear la serotonina intestinal masiva con OndansetrÃ³n.",
    keyPoints: [
      "Lactante que inicia alimentaciÃ³n complementaria (tÃ­picamente arroz o avena).",
      "VÃ³mitos intratables, palidez cadavÃ©rica y letargo/choque de 1 a 4 horas post-ingesta.",
      "Ausencia total de ronchas, estridor o sibilancias.",
      "FPIES agudo. ReanimaciÃ³n hÃ­drica intensa (20 cc/kg) + OndansetrÃ³n IV. La epinefrina no tiene rol primario aquÃ­ por no ser un cuadro mediado por IgE o degranulaciÃ³n de mastocitos.",
      "Tema: AlergologÃ­a PediÃ¡trica / FPIES."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-43",
    university: "UCC",
    examArea: "Medicina Interna / GastroenterologÃ­a / Cuidado Intensivo",
    topic: "GastroenterologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "gastroenterologia", "cuidado_intensivo"],
    statement: "Hombre de 45 aÃ±os, con antecedente de alcoholismo, se encuentra en su tercera semana de hospitalizaciÃ³n en la UCI por Pancreatitis Aguda Necrotizante Severa. VenÃ­a presentando mejorÃ­a clÃ­nica y tolerancia a la nutriciÃ³n enteral, pero en las Ãºltimas 72 horas desarrolla fiebre sostenida (39.2Â°C), taquicardia y leucocitosis progresiva de 22,000/mmÂ³. Una TomografÃ­a Computarizada (TC) de abdomen con contraste revela una colecciÃ³n de necrosis amurallada (Walled-off Necrosis) de 10 cm en el retroperitoneo, con presencia de mÃºltiples burbujas de gas en su interior. El paciente se encuentra hemodinÃ¡micamente estable (PA 115/75 mmHg), apoyado con cristaloides y sin requerimiento de vasopresores. Â¿CuÃ¡l es el abordaje terapÃ©utico de elecciÃ³n en el escenario actual?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Realizar una laparotomÃ­a exploratoria de urgencia para necrosectomÃ­a abierta y lavado de la cavidad abdominal.",
        distractorProfile: "obsolete_aggressive_surgery",
        incorrectFeedback: "La necrosectomÃ­a abierta primaria (sin intentar drenajes percutÃ¡neos previos) somete al paciente a estrÃ©s fisiolÃ³gico letal, altas tasas de sangrado retroperitoneal y morbilidad severa (fÃ­stulas pancreÃ¡ticas)."
      },
      {
        id: "B",
        label: "B",
        text: "Instaurar el protocolo \"Step-up approach\" iniciando con drenaje percutÃ¡neo o endoscÃ³pico transgÃ¡strico de la colecciÃ³n necrÃ³tica."
      },
      {
        id: "C",
        label: "C",
        text: "Mantener tratamiento conservador con Imipenem/Cilastatina IV exclusivo, evitando cualquier invasiÃ³n mientras el paciente no presente choque sÃ©ptico.",
        distractorProfile: "insufficient_medical_therapy",
        incorrectFeedback: "Aunque los carbapenÃ©micos penetran bien el tejido necrÃ³tico, el tratamiento mÃ©dico aislado de un absceso/colecciÃ³n purulenta estructurada con gas en su interior fracasa siempre por falta de esterilizaciÃ³n mecÃ¡nica y limpieza del tejido muerto."
      },
      {
        id: "D",
        label: "D",
        text: "PunciÃ³n aspiraciÃ³n con aguja fina (PAAF) de la colecciÃ³n guiada por TAC para enviar a Gram y cultivo, difiriendo intervenciones adicionales.",
        distractorProfile: "redundant_diagnostic_puncture",
        incorrectFeedback: "La punciÃ³n aspiraciÃ³n (PAAF) se indica Ãºnicamente cuando existe deterioro sÃ©ptico pero el TAC NO muestra gas, para diferenciar entre necrosis estÃ©ril (SIRS prolongado) y necrosis infectada. Si hay gas, la infecciÃ³n estÃ¡ confirmada por imagen."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con Necrosis PancreÃ¡tica Infectada, confirmada radiolÃ³gicamente (burbujas de gas dentro de la colecciÃ³n necrÃ³tica en la tercera semana son un signo inequÃ­voco de infecciÃ³n por bacterias formadoras de gas, obviando la necesidad de PAAF). Las guÃ­as internacionales (consenso de Atlanta y panel IAP/APA) han revolucionado el manejo: la necrosectomÃ­a quirÃºrgica abierta temprana acarrea una morbilidad y mortalidad prohibitivas. El estÃ¡ndar de oro es el \"Step-up Approach\" (enfoque escalonado minimamente invasivo). Consiste en iniciar primero con un drenaje percutÃ¡neo guiado por imagen o un drenaje transluminal endoscÃ³pico (transgÃ¡strico/transduodenal). Solo si este drenaje inicial fracasa en controlar la sepsis tras dÃ­as de lavado, se escala a un desbridamiento retroperitoneal videoasistido (VARD) o necrosectomÃ­a endoscÃ³pica directa.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Colega, en la pancreatitis necrosante el cirujano es la Ãºltima carta, no la primera. Hace 20 aÃ±os el cirujano abrÃ­a la barriga y \"barrÃ­a\" el pÃ¡ncreas podrido (OpciÃ³n A), pero los pacientes morÃ­an por sangrado masivo o fÃ­stulas interminables. Hoy sabemos que meter un catÃ©ter por endoscopia directamente desde el estÃ³mago al pÃ¡ncreas permite drenar el pus de forma segura. Ojo con la OpciÃ³n D (la PAAF): si el TAC ya te muestra gas adentro de la colecciÃ³n, la infecciÃ³n es un hecho al 100%, puncionar solo para confirmar es una pÃ©rdida de tiempo; se punciona para drenar directamente.",
    keyPoints: [
      "Paciente en 2da o 3ra semana de pancreatitis aguda severa que hace fiebre nueva y deterioro clÃ­nico.",
      "TAC que evidencia burbujas de gas dentro del pÃ¡ncreas/necrosis (Signo de infecciÃ³n).",
      "DecisiÃ³n quirÃºrgica vs mÃ­nimamente invasiva.",
      "Necrosis PancreÃ¡tica Infectada confirmada. El estÃ¡ndar terapÃ©utico es el \"Step-Up Approach\" (Drenaje endoscÃ³pico o percutÃ¡neo como primer paso), evitando siempre la cirugÃ­a abierta si es posible.",
      "Tema: Complicaciones de Pancreatitis / Necrosis Infectada."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-44",
    university: "UCC",
    examArea: "PediatrÃ­a / HematologÃ­a",
    topic: "HematologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "hematologia"],
    statement: "Un escolar masculino de 7 aÃ±os, con diagnÃ³stico conocido de Hemofilia A Severa (actividad del Factor VIII < 1%), acude al servicio de urgencias por presentar, tras una caÃ­da leve, aumento de volumen, rubor, calor e intenso dolor limitante en la rodilla derecha (hemartrosis aguda). El paciente se encontraba en terapia profilÃ¡ctica con factor VIII recombinante, pero su hematÃ³logo oncÃ³logo infantil reportÃ³ en la Ãºltima consulta la presencia de una alta titulaciÃ³n de inhibidores (Anticuerpos anti-Factor VIII sÃ©ricos cuantificados en 12 Unidades Bethesda). Â¿CuÃ¡l es la intervenciÃ³n farmacolÃ³gica hemostÃ¡tica INMEDIATA de elecciÃ³n para detener el sangrado intraarticular en este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar Factor VIII recombinante a dosis masivas (3 a 5 veces la dosis habitual) para sobrepasar y saturar a los anticuerpos inhibidores.",
        distractorProfile: "treatment_for_low_responders",
        incorrectFeedback: "La administraciÃ³n de dosis altas de factor deficiente funciona Ãºnicamente si el paciente es un \"bajo respondedor\" (<5 Unidades Bethesda). En los altos respondedores, la memoria inmunolÃ³gica destruye masivamente el factor infundido, persistiendo el sangrado."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar Acetato de Desmopresina (DDAVP) endovenoso para liberar el Factor VIII endÃ³geno almacenado en el endotelio.",
        distractorProfile: "wrong_severity_application",
        incorrectFeedback: "La desmopresina (DDAVP) libera Factor VIII y von Willebrand de los cuerpos de Weibel-Palade endoteliales; es Ãºtil en Hemofilia A LEVE (>5% de actividad), pero es completamente ineficaz en la hemofilia severa (<1%), donde las reservas endoteliales son virtualmente nulas."
      },
      {
        id: "C",
        label: "C",
        text: "Infundir un agente puente o de *bypass* coagulatorio (como el Factor VII activado recombinante [rFVIIa] o el Complejo ProtrombÃ­nico Activado [aPCC])."
      },
      {
        id: "D",
        label: "D",
        text: "Realizar artrocentesis evacuadora inmediata e infundir Ã¡cido tranexÃ¡mico intraarticular y sistÃ©mico.",
        distractorProfile: "invasive_danger",
        incorrectFeedback: "La artrocentesis en una articulaciÃ³n hemofÃ­lica que sangra activamente (sin haber restablecido la hemostasia primero) estÃ¡ absolutamente contraindicada, pues exacerbarÃ¡ el daÃ±o sinovial y aumentarÃ¡ la hemorragia mecÃ¡nica local."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente cursa con una hemartrosis aguda en el contexto de una Hemofilia A complicada por el desarrollo de INHIBIDORES de alta respuesta (> 5 Unidades Bethesda). Los inhibidores son aloanticuerpos IgG neutralizantes dirigidos contra el Factor VIII exÃ³geno. Cuando el tÃ­tulo es alto (>5 UB), la administraciÃ³n de Factor VIII (por mÃ¡s altas que sean las dosis) serÃ¡ neutralizada instantÃ¡neamente por los anticuerpos y no detendrÃ¡ el sangrado. Para tratar la hemorragia, las guÃ­as internacionales (WFH) exigen saltarse (bypass) la vÃ­a intrÃ­nseca defectuosa bloqueada y activar directamente la cascada comÃºn. Esto se logra mediante Agentes de Bypass: el Factor VII activado recombinante (rFVIIa), que estimula la vÃ­a extrÃ­nseca y la generaciÃ³n de trombina local, o el Concentrado de Complejo ProtrombÃ­nico Activado (FEIBA).\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** El desarrollo de inhibidores es la pesadilla del hemofÃ­lico, Colega. Si el paciente tiene un tÃ­tulo BAJO de inhibidores (< 5 UB), la estrategia es la OpciÃ³n A: inundar el sistema con Factor VIII masivo para que una fracciÃ³n logre escapar del anticuerpo y tape la herida. Pero la viÃ±eta es clara: el niÃ±o tiene 12 Unidades Bethesda (alta respuesta). AquÃ­ el anticuerpo destruye el factor VIII tan rÃ¡pido como entra a la vena. Tienes que usar el \"Plan B\" fisiolÃ³gico: el Factor VIIa (rFVIIa), que activa al Factor X directamente sobre la plaqueta activada en la rodilla, ignorando por completo la ausencia del factor VIII.",
    keyPoints: [
      "Paciente con Hemofilia A o B severa con sangrado activo.",
      "Dato paraclÃ­nico crÃ­tico: TitulaciÃ³n de inhibidores ALTA (> 5 Unidades Bethesda).",
      "El Factor deficiente ya NO sirve. Se requiere un agente puente/Bypass (Factor VIIa recombinante o aPCC) para generar trombina directa.",
      "Tema: Trastornos de CoagulaciÃ³n / Hemofilia con Inhibidores."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-45",
    university: "UCC",
    examArea: "Medicina Interna / CardiologÃ­a / Urgencias",
    topic: "CardiologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "cardiologia", "urgencias"],
    statement: "Mujer de 72 aÃ±os, con antecedente de infarto de miocardio antiguo e insuficiencia cardÃ­aca con fracciÃ³n de eyecciÃ³n reducida (FEVI 35%), es traÃ­da por el servicio prehospitalario tras presentar un sÃ­ncope. Al ingreso, la paciente se queja de palpitaciones severas, opresiÃ³n torÃ¡cica y diaforesis. Su monitor muestra una taquicardia de complejos QRS anchos (140 ms), regular, a una frecuencia de 165 lpm. Los complejos QRS son monomÃ³rficos y no se distinguen ondas P claras. Signos vitales: PA 85/55 mmHg, FC 165 lpm, SatO2 93%, paciente obnubilada. Â¿CuÃ¡l es la terapia INMEDIATA obligatoria de primer orden segÃºn los protocolos de reanimaciÃ³n (ACLS)?",
    options: [
      {
        id: "A",
        label: "A",
        text: "CardioversiÃ³n elÃ©ctrica sincronizada (iniciando a 100 Joules)."
      },
      {
        id: "B",
        label: "B",
        text: "DesfibrilaciÃ³n elÃ©ctrica no sincronizada de alta energÃ­a (200 Joules bifÃ¡sicos o 360 monofÃ¡sicos).",
        distractorProfile: "wrong_electrical_mode",
        incorrectFeedback: "La desfibrilaciÃ³n NO sincronizada se reserva estrictamente para pacientes en parada cardÃ­aca (FibrilaciÃ³n Ventricular o TV sin pulso). En la TV monomÃ³rfica con pulso, un choque no sincronizado corre el altÃ­simo riesgo de generar un fenÃ³meno R sobre T y matar al paciente."
      },
      {
        id: "C",
        label: "C",
        text: "Administrar Amiodarona intravenosa en bolo de 150 mg lento durante 10 minutos.",
        distractorProfile: "stable_management_applied_to_unstable",
        incorrectFeedback: "La amiodarona es el fÃ¡rmaco de elecciÃ³n de primera lÃ­nea para la TV monomÃ³rfica CON ESTABILIDAD hemodinÃ¡mica. Usarla en presencia de hipotensiÃ³n y choque retrasarÃ¡ el tratamiento curativo inmediato (elÃ©ctrico) y agravarÃ¡ el compromiso hemodinÃ¡mico."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar Adenosina 6 mg IV rÃ¡pido para descartar que se trate de una TSV con conducciÃ³n aberrante.",
        distractorProfile: "dangerous_diagnostic_delay",
        incorrectFeedback: "La Adenosina es Ãºtil solo en taquicardias de QRS ancho regulares si el paciente estÃ¡ ESTABLE y el QRS es monomÃ³rfico, para desenmascarar taquicardias supraventriculares aberrantes. En choque, la adenosina es fÃºtil y peligrosa."
      }
    ],
    correctOptionId: "A",
    explanation: "La paciente presenta una Taquicardia Ventricular (TV) MonomÃ³rfica, evidenciada por la taquicardia regular de QRS ancho en el contexto de una cardiopatÃ­a isquÃ©mica estructural previa. La decisiÃ³n clÃ­nica pivote en las taquicardias radica en el estado de perfusiÃ³n del paciente. Al presentar PA 85/55 mmHg (hipotensiÃ³n), opresiÃ³n torÃ¡cica, sÃ­ncope previo y alteraciÃ³n del sensorio (obnubilada), cumple los criterios estrictos de INESTABILIDAD HEMODINÃMICA. El protocolo de Soporte Vital Cardiovascular Avanzado (ACLS) dicta que cualquier taquicardia (ancha o estrecha) que cause inestabilidad debe tratarse con CardioversiÃ³n ElÃ©ctrica Sincronizada inmediata (el desfibrilador debe buscar la onda R para entregar el choque y no caer en el perÃ­odo vulnerable de la onda T, lo cual causarÃ­a fibrilaciÃ³n ventricular).\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Regla inquebrantable de urgencias, Colega: paciente inestable por arritmia = electricidad. La amiodarona (OpciÃ³n C) o la procainamida son excelentes para la Taquicardia Ventricular, pero SOLO si el paciente estÃ¡ estable (te saluda, presiÃ³n normal, buena perfusiÃ³n). Si pasas amiodarona a esta mujer que ya tiene 85 de sistÃ³lica, el efecto vasodilatador intrÃ­nseco de la infusiÃ³n la pondrÃ¡ en parada cardÃ­aca. La desfibrilaciÃ³n no sincronizada (OpciÃ³n B) solo se reserva para ritmos sin pulso (FV o TV sin pulso) o taquicardias polimÃ³rficas irregulares donde la mÃ¡quina no logra leer la onda R.",
    keyPoints: [
      "Paciente con taquicardia sintomÃ¡tica (QRS ancho o estrecho).",
      "Signos de inestabilidad: HipotensiÃ³n, alteraciÃ³n aguda del sensorio, signos de choque, dolor isquÃ©mico o falla cardÃ­aca aguda.",
      "La electricidad siempre le gana a la farmacologÃ­a. Si el pulso es medible pero el paciente estÃ¡ inestable, el paso es CardioversiÃ³n Sincronizada.",
      "Tema: Arritmias / Soporte Vital Avanzado (ACLS)."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-46",
    university: "UCC",
    examArea: "Medicina Interna / NefrologÃ­a / HematologÃ­a",
    topic: "NefrologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "nefrologia", "hematologia"],
    statement: "Hombre de 68 aÃ±os acude a urgencias por astenia marcada, dolor lumbar Ã³seo crÃ³nico y confusiÃ³n de 48 horas de evoluciÃ³n. Al examen fÃ­sico: palidez generalizada, hidrataciÃ³n mucosa lÃ­mite. Laboratorios urgentes: Hemoglobina 8.5 g/dL, Creatinina sÃ©rica de 4.2 mg/dL (falla renal aguda sobre una basal desconocida). Calcio sÃ©rico corregido de 14.5 mg/dL (Hipercalcemia severa). ProteÃ­nas totales sÃ©ricas de 10 g/dL con AlbÃºmina de 3.2 g/dL (brecha albÃºmino-globulina ensanchada masivamente). En el parcial de orina convencional, el reporte de proteinuria es Trazas (ausente). Un frotis de sangre perifÃ©rica muestra marcada formaciÃ³n de los eritrocitos en \"pilas de monedas\" (Rouleaux). Se establece alta sospecha de Mieloma MÃºltiple complicado con nefropatÃ­a por cilindros (Myeloma Cast Nephropathy). Â¿CuÃ¡l es la intervenciÃ³n patogÃ©nica sistÃ©mica MÃS urgente para preservar la funciÃ³n renal, ademÃ¡s de la hidrataciÃ³n vigorosa?",
    options: [
      {
        id: "A",
        label: "A",
        text: "AdministraciÃ³n de pulsos de ciclofosfamida sistÃ©mica e inicio de hemodiÃ¡lisis con filtros de alto corte (High cut-off).",
        distractorProfile: "obsolete_renal_intervention",
        incorrectFeedback: "Aunque la plasmafÃ©resis o la hemodiÃ¡lisis con filtros especiales se utilizaban para barrer cadenas ligeras, los ensayos recientes (MYRE y EuLITE) demostraron que NO ofrecen un beneficio claro sobre la quimioterapia intensa con Bortezomib y no deben retrasar esta Ãºltima."
      },
      {
        id: "B",
        label: "B",
        text: "Inicio de quimioterapia dirigida anti-plasmÃ¡tica de acciÃ³n rÃ¡pida con Bortezomib y Dexametasona a altas dosis."
      },
      {
        id: "C",
        label: "C",
        text: "Tratamiento exclusivo de la hipercalcemia mediante infusiÃ³n de bisfosfonatos intravenosos (Ãcido ZoledrÃ³nico) y calcitonina subcutÃ¡nea, difiriendo la quimioterapia.",
        distractorProfile: "symptomatic_focus_ignoring_etiology",
        incorrectFeedback: "Tratar la hipercalcemia aisladamente mejora la perfusiÃ³n, pero si no se frena la tormenta de cadenas ligeras que taponan el riÃ±Ã³n mediante quimioterapia, el daÃ±o tubular se vuelve esclerÃ³tico e irreversible."
      },
      {
        id: "D",
        label: "D",
        text: "AlcalinizaciÃ³n de la orina con infusiÃ³n continua de bicarbonato de sodio para aumentar la solubilidad de la proteÃ­na de Bence Jones.",
        distractorProfile: "pathophysiological_trap",
        incorrectFeedback: "A diferencia del SÃ­ndrome de Lisis Tumoral (donde la alcalinizaciÃ³n sÃ­ se consideraba histÃ³ricamente para el urato), las cadenas ligeras del mieloma no se benefician de la alcalinizaciÃ³n; precipitan con la proteÃ­na de Tamm-Horsfall sin importar el pH, y dar bicarbonato sobrecarga al paciente de sodio."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un debut catastrÃ³fico de Mieloma MÃºltiple (CRAB positivo: Calcium alto, Renal failure, Anemia, Bone pain). La insuficiencia renal aguda en el mieloma se debe clÃ¡sicamente a la \"nefropatÃ­a por cilindros\": cadenas ligeras libres filtradas que se unen a la proteÃ­na de Tamm-Horsfall en el tÃºbulo distal, formando precipitados cristalinos que obstruyen la nefrona y generan inflamaciÃ³n. Aunque la hidrataciÃ³n agresiva (para mantener alto el flujo tubular) y el control del calcio son crÃ­ticos, la medida terapÃ©utica que impacta definitiva y radicalmente en la recuperaciÃ³n renal es detener la producciÃ³n de estas proteÃ­nas tÃ³xicas en la fÃ¡brica medular. Esto se logra instaurando tratamiento quimioterapÃ©utico inmediato, siendo de elecciÃ³n el esquema basado en Dexametasona a altas dosis (rÃ¡pido efecto linfo-tÃ³xico) y Bortezomib (inhibidor del proteasoma de acciÃ³n ultrarrÃ¡pida contra las cÃ©lulas plasmÃ¡ticas).\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Pura fisiopatologÃ­a. La trampa (OpciÃ³n C) radica en creer que la falla renal es solo por la hipercalcemia. Aunque el calcio deshidrata, el asesino del riÃ±Ã³n del mieloma es la cadena ligera que atasca el tubo. De nada sirve hidratar o dar calcitonina si los plasmocitos malignos siguen escupiendo cadenas Kappa o Lambda a la sangre. Tienes que apagar la fÃ¡brica hoy mismo con el Bortezomib. Otro truco: el parcial de orina normal te engaÃ±a, las tiras de urianÃ¡lisis en urgencias solo reaccionan quÃ­micamente a la albÃºmina; para ver la proteinuria del mieloma debes pedir cuantificaciÃ³n de proteÃ­nas en 24h o cadenas ligeras libres en suero y orina.",
    keyPoints: [
      "Anciano con dolor Ã³seo, falla renal, hipercalcemia y \"brecha de proteÃ­nas\" grande (globulinas altas y albÃºmina normal).",
      "Orina que no marca proteÃ­nas en la tira reactiva comÃºn (las tiras detectan albÃºmina, no cadenas ligeras de Bence Jones).",
      "Frotis en fenÃ³meno de Rouleaux (pilas de monedas).",
      "Mieloma MÃºltiple. El manejo de la falla renal por cilindros exige HIDRATACIÃ“N masiva y QUIMIOTERAPIA urgente (Bortezomib/Dexametasona) para cortar la fuente de la toxicidad tubular.",
      "Tema: NefropatÃ­a por Mieloma / HematologÃ­a."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-47",
    university: "UCC",
    examArea: "PediatrÃ­a / InfectologÃ­a / Preventiva",
    topic: "InfectologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "infectologia", "preventiva"],
    statement: "Un niÃ±o de 4 aÃ±os, previamente sano y con esquema de vacunaciÃ³n completo, asiste regularmente a un jardÃ­n infantil. Ayer, uno de sus compaÃ±eros de aula (niÃ±o de 5 aÃ±os) fue hospitalizado en la UCI pediÃ¡trica y se confirmÃ³ un diagnÃ³stico de Meningitis por *Neisseria meningitidis* (Meningococo) serogrupo B. La profesora del aula, una mujer de 28 aÃ±os que se encuentra en su primer trimestre de embarazo (semana 10 de gestaciÃ³n), acude al centro de salud profundamente angustiada, solicitando indicaciones sobre el riesgo de contagio para ella y para el niÃ±o de 4 aÃ±os, ya que ambos comparten el salÃ³n de clases cerrado durante 6 horas diarias. Â¿CuÃ¡l es el esquema de Quimioprofilaxis post-exposiciÃ³n (PEP) MÃS apropiado y seguro para ambos contactos Ã­ntimos?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Al niÃ±o prescribirle Rifampicina oral por 2 dÃ­as; a la profesora gestante administrarle una dosis Ãºnica de Ceftriaxona intramuscular."
      },
      {
        id: "B",
        label: "B",
        text: "A ambos prescribirles una dosis Ãºnica de Ciprofloxacino oral, ya que la FDA lo avala como seguro y profilÃ¡ctico en el embarazo precoz.",
        distractorProfile: "teratogenic_drug_in_pregnancy",
        incorrectFeedback: "El Ciprofloxacino es excelente para adultos, pero las fluoroquinolonas tienen potencial de toxicidad sobre el desarrollo del cartÃ­lago articular en el feto y estÃ¡n contraindicadas rutinariamente durante el embarazo temprano."
      },
      {
        id: "C",
        label: "C",
        text: "Al niÃ±o prescribirle Azitromicina en dosis Ãºnica; a la profesora gestante no se le recomienda profilaxis por el alto riesgo teratogÃ©nico de los antibiÃ³ticos sistÃ©micos.",
        distractorProfile: "passive_and_deadly_negligence",
        incorrectFeedback: "Negar la quimioprofilaxis a un contacto estrecho adulto expuesto al meningococo por miedo al embarazo es una mala praxis absoluta, exponiendo a la madre a un choque sÃ©ptico que causarÃ¡ la muerte materna y fetal; existen opciones seguras como la Ceftriaxona."
      },
      {
        id: "D",
        label: "D",
        text: "Al niÃ±o aplicarle la vacuna tetravalente antimeningocÃ³cica conjugada de urgencia; a la profesora administrarle Rifampicina por 4 dÃ­as.",
        distractorProfile: "prophylactic_timing_error",
        incorrectFeedback: "La vacuna meningocÃ³cica tarda semanas en inducir inmunidad efectiva; es Ãºtil para frenar brotes institucionales a largo plazo, pero la quimioprofilaxis antibiÃ³tica es vital para la protecciÃ³n y erradicaciÃ³n del estado de portador farÃ­ngeo en las primeras horas."
      }
    ],
    correctOptionId: "A",
    explanation: "La infecciÃ³n invasiva por Meningococo requiere obligatoriamente Quimioprofilaxis post-exposiciÃ³n temprana (idealmente < 24 horas) a todos los \"contactos Ã­ntimos\" (personas que conviven en el mismo techo, contactos en guarderÃ­as/preescolares que comparten el mismo cuarto mÃ¡s de 4 horas diarias, o personal de salud expuesto directamente a secreciones nasofarÃ­ngeas). Para la poblaciÃ³n general y niÃ±os, los regÃ­menes de primera lÃ­nea son: Rifampicina oral (2 dÃ­as, 4 dosis en total) o Ceftriaxona IM dosis Ãºnica o Ciprofloxacino oral dosis Ãºnica (solo en adultos). SIN EMBARGO, en el escenario crÃ­tico de una mujer embarazada (como la profesora), la Rifampicina estÃ¡ desaconsejada y las fluoroquinolonas (Ciprofloxacino) estÃ¡n **contraindicadas**. El Ãºnico fÃ¡rmaco universalmente seguro y recomendado de primera lÃ­nea para profilaxis meningocÃ³cica en el embarazo es la **Ceftriaxona intramuscular en dosis Ãºnica**.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** EpidemiologÃ­a pura y dura aplicada a pediatrÃ­a de guarderÃ­a. El meningococo causa pÃ¡nico colectivo con justa razÃ³n. A los niÃ±os pequeÃ±os les encanta la Rifampicina en jarabe, pero recuÃ©rdale a los padres que la orina y las lÃ¡grimas del niÃ±o se teÃ±irÃ¡n de color rojo/naranja fosforescente, para que no regresen infartados a urgencias. En la gestante, las quinolonas destrozan el cartÃ­lago fetal y la rifampicina interfiere severamente, por lo que la aguja con Ceftriaxona en el glÃºteo es la Ãºnica vÃ­a segura que mata al meningococo en la faringe de la profesora sin daÃ±ar al embriÃ³n.",
    keyPoints: [
      "ExposiciÃ³n confirmada a Meningococo (guarderÃ­a, familia).",
      "SelecciÃ³n de Quimioprofilaxis de Contactos segÃºn el grupo poblacional.",
      "NiÃ±os / Adultos sanos: Rifampicina oral por 2 dÃ­as o Ciprofloxacino/Ceftriaxona dosis Ãºnica.",
      "Mujeres Embarazadas: Ceftriaxona IM dosis Ãºnica, de forma mandatoria.",
      "Tema: Enfermedad MeningocÃ³cica / Profilaxis."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-48",
    university: "UCC",
    examArea: "Medicina Interna / CardiologÃ­a / Cuidado Intensivo",
    topic: "CardiologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "cardiologia", "cuidado_intensivo"],
    statement: "Mujer de 64 aÃ±os, quien sufriÃ³ un Infarto Agudo de Miocardio con elevaciÃ³n del ST (IAMCEST) de cara anteroseptal extenso hace 4 dÃ­as y no recibiÃ³ terapia de reperfusiÃ³n temprana por llegada tardÃ­a. Hoy, encontrÃ¡ndose hospitalizada en sala general, la paciente presenta sÃºbitamente deterioro respiratorio extremo, obnubilaciÃ³n y choque. Al examen fÃ­sico: pÃ¡lida, mal perfundida, PA 75/40 mmHg, FC 125 lpm. Se palpa un \"frÃ©mito\" (thrill) precordial y se ausculta la apariciÃ³n sÃºbita de un soplo holosistÃ³lico en maquinaria Ã¡spero, de intensidad V/VI, localizado predominantemente en el borde esternal inferior izquierdo (quinto espacio intercostal), el cual no irradia a la axila. Los campos pulmonares presentan crepitantes bilaterales hasta los Ã¡pices. Â¿CuÃ¡l es la complicaciÃ³n mecÃ¡nica subyacente MÃS probable y cuÃ¡l es la terapia temporal mientras se prepara para el quirÃ³fano?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Ruptura de mÃºsculo papilar con insuficiencia mitral aguda masiva; se debe estabilizar con colocaciÃ³n de BalÃ³n de ContrapulsaciÃ³n IntraaÃ³rtico (BCIA).",
        distractorProfile: "wrong_mechanical_complication",
        incorrectFeedback: "La ruptura del mÃºsculo papilar causa insuficiencia mitral aguda; su soplo se ausculta mejor en el Ã¡pex cardÃ­aco, irradia a la axila y caracterÃ­sticamente carece de frÃ©mito tÃ¡ctil, a diferencia de la ruptura septal."
      },
      {
        id: "B",
        label: "B",
        text: "Ruptura de la pared libre del ventrÃ­culo izquierdo con taponamiento cardÃ­aco; el soporte urgente es la pericardiocentesis evacuadora inmediata.",
        distractorProfile: "pericardial_vs_septal_rupture",
        incorrectFeedback: "La ruptura de pared libre sangra hacia el pericardio causando taponamiento cardÃ­aco (silencio auscultatorio, ingurgitaciÃ³n yugular y pulso paradÃ³jico), pero no produce un soplo holosistÃ³lico Ã¡spero nuevo."
      },
      {
        id: "C",
        label: "C",
        text: "Ruptura del septo interventricular (ComunicaciÃ³n Interventricular adquirida); el soporte es la reducciÃ³n de la postcarga ventricular (BCIA o vasodilatadores si la PA lo permite) antes del cierre quirÃºrgico urgente."
      },
      {
        id: "D",
        label: "D",
        text: "ExpansiÃ³n isquÃ©mica del ventrÃ­culo derecho con disfunciÃ³n sistÃ³lica pura; el manejo mÃ©dico es con bolos de cristaloides para asegurar precarga Ã³ptima.",
        distractorProfile: "wrong_pathology_and_treatment",
        incorrectFeedback: "El infarto derecho causa choque, pero produce pulmones claros (no crepitantes apicales) e hipotensiÃ³n al quitarle la precarga, careciendo del violento soplo septal reciÃ©n adquirido."
      }
    ],
    correctOptionId: "C",
    explanation: "La paciente cursa con una complicaciÃ³n mecÃ¡nica letal del infarto agudo de miocardio (que ocurre clÃ¡sicamente entre los dÃ­as 3 y 7 post-IAM). La Ruptura del Septo Interventricular (CIV adquirida) es una complicaciÃ³n temida, principalmente de los infartos de cara anterior. Su signo patognomÃ³nico semiolÃ³gico es la apariciÃ³n abrupta de un soplo holosistÃ³lico muy Ã¡spero, acompaÃ±ado de frÃ©mito (thrill) palpable en el borde paraesternal izquierdo bajo (zona septal), con deterioro hemodinÃ¡mico inmediato debido al masivo cortocircuito de sangre del VI al VD (sobrecarga de volumen pulmonar y caÃ­da del gasto cardÃ­aco sistÃ©mico). La Ãºnica salvaciÃ³n es la cirugÃ­a de parche septal, pero la estabilizaciÃ³n puente requiere BalÃ³n de ContrapulsaciÃ³n IntraaÃ³rtico (BCIA) para bajar la resistencia a la salida aÃ³rtica (postcarga) y promover el flujo sistÃ©mico, reduciendo el escape de sangre hacia el ventrÃ­culo derecho.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** SemiologÃ­a de la vieja escuela para tomar decisiones de alta complejidad. Las tres complicaciones fatales post-infarto que rompen el corazÃ³n entre el dÃ­a 3 y 7 son: pared libre, mÃºsculo papilar y septo. La pared libre rompe hacia el pericardio y da disociaciÃ³n electromecÃ¡nica sÃºbita o taponamiento masivo (sin soplo). El mÃºsculo papilar (mÃ¡s tÃ­pico de infartos de pared inferior) daÃ±a la vÃ¡lvula mitral, causando un soplo suave en el Ã¡pice que irradia a axila. El septo roto (esta paciente, por su infarto anterior extenso) bota sangre a presiÃ³n altÃ­sima del VI al VD, de ahÃ­ que el soplo sea ruidoso, Ã¡spero y que la turbulencia se sienta con la mano en el pecho (frÃ©mito paraesternal).",
    keyPoints: [
      "Paciente entre el dÃ­a 3 y 7 post-infarto que se deteriora bruscamente y cae en choque.",
      "AuscultaciÃ³n de un soplo holosistÃ³lico nuevo con frÃ©mito en borde esternal izquierdo.",
      "ComunicaciÃ³n Interventricular (Ruptura Septal). Diferenciarlo de la Ruptura de MÃºsculo Papilar, que da un soplo suave/musical en el Ã¡pex irradiado a la axila (sin frÃ©mito). Ambas exigen BCIA y cirugÃ­a inmediata.",
      "Tema: Complicaciones MecÃ¡nicas del Infarto."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-49",
    university: "UCC",
    examArea: "Medicina Interna / EndocrinologÃ­a / GinecologÃ­a",
    topic: "EndocrinologÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "endocrinologia", "ginecologia"],
    statement: "Mujer de 28 aÃ±os, en su primer trimestre de embarazo (9 semanas de gestaciÃ³n), acude a consulta externa refiriendo palpitaciones, diaforesis, pÃ©rdida de peso a pesar de hiperfagia y labilidad emocional severa. Al examen fÃ­sico se documenta un bocio difuso, exoftalmos leve bilateral, temblor fino en las manos y una FC de 115 lpm. Los paraclÃ­nicos confirman el diagnÃ³stico de Enfermedad de Graves-Basedow: TSH < 0.01 mUI/L, T4 libre francamente elevada y Anticuerpos Anti-Receptor de TSH (TRABs) fuertemente positivos. Â¿CuÃ¡l es el tratamiento antitiroideo MÃS indicado y seguro durante esta etapa especÃ­fica del embarazo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Propiltiouracilo (PTU) por vÃ­a oral durante el primer trimestre, considerando transiciÃ³n a Metimazol en el segundo trimestre."
      },
      {
        id: "B",
        label: "B",
        text: "Metimazol por vÃ­a oral a bajas dosis continuas a lo largo de todo el embarazo debido a la toxicidad hepÃ¡tica fulminante del PTU.",
        distractorProfile: "teratogenic_trap",
        incorrectFeedback: "El uso de Metimazol durante el primer trimestre (semanas de organogÃ©nesis) se asocia al desarrollo de \"embriopatÃ­a por metimazol\", que incluye aplasia cutis congÃ©nita y anomalÃ­as del conducto onfalomesentÃ©rico (atresia coanal/esofÃ¡gica)."
      },
      {
        id: "C",
        label: "C",
        text: "Tratamiento definitivo e inmediato con Iodo radiactivo (I-131) para controlar la toxicidad sistÃ©mica y proteger el corazÃ³n materno.",
        distractorProfile: "absolute_pregnancy_contraindication",
        incorrectFeedback: "El uso de Iodo Radiactivo en el embarazo estÃ¡ absoluta y estrictamente contraindicado, ya que el isÃ³topo cruza la barrera placentaria y destruye por completo el tejido tiroideo fetal en desarrollo, provocando hipotiroidismo congÃ©nito irreversible."
      },
      {
        id: "D",
        label: "D",
        text: "Manejo mÃ©dico paliativo exclusivamente con Propranolol hasta la finalizaciÃ³n del embarazo, contraindicando las tionamidas en la gestaciÃ³n.",
        distractorProfile: "insufficient_medical_control",
        incorrectFeedback: "El propranolol mejora la taquicardia temporalmente, pero no suprime la sÃ­ntesis exagerada de tiroxina por la glÃ¡ndula estimulada; dejar a la paciente hipertiroidea sin bloqueo enzimÃ¡tico induce tormenta tiroidea, preeclampsia precoz, parto pretÃ©rmino y aborto."
      }
    ],
    correctOptionId: "A",
    explanation: "El manejo del hipertiroidismo autoinmune (Enfermedad de Graves) en el embarazo es altamente estricto segÃºn las guÃ­as de la AsociaciÃ³n Americana de Tiroides (ATA). Durante el **primer trimestre** del embarazo, el Metimazol estÃ¡ absolutamente contraindicado, debido a que se asocia fuertemente con una embriopatÃ­a teratogÃ©nica rara pero grave (Aplasia cutis congÃ©nita y atresia de coanas/esofÃ¡gica). Por lo tanto, el **Propiltiouracilo (PTU)** es la tionamida obligatoria y de elecciÃ³n durante los primeros tres meses. Sin embargo, el PTU acarrea un riesgo no despreciable de hepatotoxicidad fulminante para la madre, por lo que una vez que finaliza la organogÃ©nesis fetal (inicio del segundo trimestre), la recomendaciÃ³n es realizar una transiciÃ³n rÃ¡pida al Metimazol para proteger el hÃ­gado materno durante el resto del embarazo.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Esta es una regla mnemotÃ©cnica inviolable para tu prÃ¡ctica. La \"P\" de Propiltiouracilo es para la \"P\" del Primer Trimestre. La \"M\" de Metimazol es para la \"M\" de Mitad (y final) del embarazo. Dar yodo radiactivo (OpciÃ³n C) a una paciente embarazada es una negligencia catastrÃ³fica porque el isÃ³topo cruza la placenta a partir de la semana 10, y el yodo se concentrarÃ¡ en la glÃ¡ndula tiroides del feto en desarrollo, ablÃ¡ndola por completo y causÃ¡ndole un cretinismo atrogÃ©nico irreversible.",
    keyPoints: [
      "Mujer embarazada con Hipertiroidismo Franco (Enfermedad de Graves).",
      "Necesidad de terapia antitiroidea especÃ­fica segÃºn trimestre.",
      "1er Trimestre (Semanas 1-13) = PROPILTIOURACILO (PTU). (El metimazol causa embriopatÃ­a).",
      "2do y 3er Trimestre = METIMAZOL. (El PTU daÃ±a el hÃ­gado materno).",
      "Tema: EndocrinologÃ­a Gestacional / Enfermedad de Graves."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-50",
    university: "UCC",
    examArea: "PediatrÃ­a / Urgencias / ToxicologÃ­a",
    topic: "PediatrÃ­a",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "urgencias", "toxicologia"],
    statement: "Un preescolar de 3 aÃ±os, residente en una vivienda campesina sin acceso a servicios pÃºblicos regulares, es traÃ­do de urgencia tras haber ingerido accidentalmente el contenido de un frasco de limpiador de hornos artesanal altamente alcalino (HidrÃ³xido de Sodio - Sosa CÃ¡ustica pura) hace 45 minutos. Los padres encontraron al niÃ±o llorando junto a la botella abierta. Al ingreso, el paciente se encuentra alerta, hemodinÃ¡micamente estable (PA 90/60 mmHg, FC 110 lpm, SatO2 98%), pero con babeo profuso (sialorrea) y marcado edema, eritema y escaras blancas en los labios, comisuras bucales y lengua. No se observan signos de dificultad respiratoria y el murmullo vesicular es normal. Con el fin de evaluar y tratar el daÃ±o corrosivo del tracto digestivo superior, Â¿cuÃ¡l es el abordaje MÃS adecuado e inmediato en este momento?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Instaurar ayuno, administrar analgÃ©sicos intravenosos y programar una Endoscopia Digestiva Alta temprana (idealmente en las primeras 12 a 24 horas) para estadificar la lesiÃ³n."
      },
      {
        id: "B",
        label: "B",
        text: "Colocar de inmediato una sonda nasogÃ¡strica bajo visiÃ³n indirecta para realizar un lavado gÃ¡strico exhaustivo y evitar la absorciÃ³n sistÃ©mica de la base fuerte.",
        distractorProfile: "destructive_mechanical_procedure",
        incorrectFeedback: "Colocar sondas nasogÃ¡stricas a ciegas en un esÃ³fago con necrosis de licuefacciÃ³n es la causa principal de perforaciÃ³n esofÃ¡gica iatrogÃ©nica directa, con consecuente mediastinitis quÃ­mica fulminante."
      },
      {
        id: "C",
        label: "C",
        text: "Administrar carbÃ³n activado en dosis mÃºltiples a travÃ©s de una jeringa bucal e iniciar neutralizaciÃ³n quÃ­mica ingiriendo un Ã¡cido dÃ©bil (jugo de limÃ³n o vinagre).",
        distractorProfile: "lethal_exothermic_reaction_and_useless_intervention",
        incorrectFeedback: "La administraciÃ³n de un neutralizante Ã¡cido provoca una reacciÃ³n quÃ­mica que libera un inmenso calor (reacciÃ³n exotÃ©rmica), agravando el daÃ±o con una quemadura tÃ©rmica agregada; ademÃ¡s, el carbÃ³n activado no absorbe los agentes cÃ¡usticos."
      },
      {
        id: "D",
        label: "D",
        text: "Diferir cualquier examen endoscÃ³pico por al menos 3 semanas debido al inmenso riesgo de perforar el esÃ³fago inflamado, vigilando el dolor con analgÃ©sicos comunes.",
        distractorProfile: "loss_of_diagnostic_window",
        incorrectFeedback: "La endoscopia es obligatoria y altamente segura en las primeras 24 horas para definir el riesgo de estenosis y necesidad de alimentaciÃ³n parenteral; se vuelve muy riesgosa entre los dÃ­as 5 y 15 debido a la fase de granulaciÃ³n hiper-friable del tejido."
      }
    ],
    correctOptionId: "A",
    explanation: "La ingesta de sustancias cÃ¡usticas (especialmente los Ã¡lcalis fuertes como la sosa cÃ¡ustica) produce una **necrosis por licuefacciÃ³n** altamente destructiva y profunda que deshace rÃ¡pidamente las capas de la mucosa y muscular del esÃ³fago y estÃ³mago. En el abordaje urgente de estas intoxicaciones, estÃ¡n estricta y absolutamente prohibidos tres mÃ©todos clÃ¡sicos de la toxicologÃ­a general: 1) NO inducir el vÃ³mito (quemarÃ­a de regreso), 2) NO realizar lavado gÃ¡strico ni colocar sondas a ciegas (alto riesgo de perforaciÃ³n instrumental de un esÃ³fago licuado), y 3) NO usar neutralizantes ni carbÃ³n activado. La intervenciÃ³n clÃ­nica protocolizada es estabilizar, administrar analgesia, inhibidores de bomba de protones y programar una Endoscopia Digestiva Alta en las primeras 12 a 24 horas (idealmente no despuÃ©s de 48 horas) para visualizar directamente y estadificar el daÃ±o (ClasificaciÃ³n de Zargar), lo cual dictarÃ¡ el pronÃ³stico de desarrollo de estenosis esofÃ¡gica tardÃ­a.\n\n**EXPLICACIÃ“N DEL PROFE BY DR Q:** Colega, en quemaduras por cÃ¡usticos los errores se pagan con perforaciÃ³n mediastÃ­nica letal. El carbÃ³n activado (OpciÃ³n C) no se une a los Ã¡cidos ni a las bases fuertes, no hace nada Ãºtil, pero sÃ­ pintarÃ¡ el esÃ³fago quemado de color negro carbÃ³n, haciendo que cuando baje el endoscopista, no logre ver absolutamente nada. Ponerle un \"neutralizante\" (jugo de limÃ³n o leche) genera una reacciÃ³n quÃ­mica de neutralizaciÃ³n exotÃ©rmica en el estÃ³mago, la cual libera un calor inmenso (quemadura tÃ©rmica) que se suma al daÃ±o quÃ­mico previo. La endoscopia (OpciÃ³n A) es el jefe en las primeras horas antes de que la pared del esÃ³fago empiece a remodelarse y afilarse (entre los dÃ­as 5 a 15, fase donde la endoscopia sÃ­ estÃ¡ contraindicada por riesgo altÃ­simo de ruptura).",
    keyPoints: [
      "Paciente (niÃ±o o adulto) con ingesta de sustancias cÃ¡usticas (Ã¡lcalis de horno o Ã¡cidos).",
      "Quemaduras en la boca, sialorrea y disfagia.",
      "Ayuno estricto + Analgesia IV + Endoscopia temprana (12-24h). Nunca inducir vÃ³mito, nunca colocar sondas a ciegas, nunca usar carbÃ³n ni neutralizantes.",
      "Tema: IntoxicaciÃ³n por CÃ¡usticos / Urgencias PediÃ¡tricas."
    ]
  }
];

