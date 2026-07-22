import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #3 (19 jul 2025) Â· Preguntas #41”“#50.
 * Banco exclusivo del examen oficial quincenal Pro.
 */
export const UCC_CONV_2025_07_19_41_50_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2025-07-19-41",
    university: "UCC",
    examArea: "Medicina Interna / Neumología / Oncología",
    topic: "Neumología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "neumologia", "oncologia"],
    statement: "Hombre de 65 años, fumador activo (índice tabáquico de 45 paquetes/año), a quien se le realiza una Tomografía Computarizada (TC) de tórax de baja dosis como parte de un programa de tamizaje. Se documenta el hallazgo incidental de un nódulo pulmonar sólido de 16 mm de diámetro en el lóbulo superior derecho, de contornos marcadamente espiculados y con retracción pleural adyacente. No se evidencian calcificaciones en su interior ni adenopatías mediastínicas significativas por tamaño (>10 mm). El paciente se encuentra asintomático, con pruebas de función pulmonar que muestran un VEF1 del 85% del predicho. Según las guías de la Fleischner Society y el ACCP, ¿cuál es la conducta diagnóstica MÁS apropiada a seguir en este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Solicitar una Tomografía por Emisión de Positrones (PET-CT) con FDG para estadificación regional y caracterización metabólica previa a la intervención tisular."
      },
      {
        id: "B",
        label: "B",
        text: "Programar de inmediato una toracotomía abierta o resección en cuña por videotoracoscopia (VATS) por presentar criterios radiológicos absolutos de malignidad.",
        distractorProfile: "premature_invasive_surgery",
        incorrectFeedback: "La resección directa (VATS) se reserva para pacientes con alta probabilidad de malignidad en quienes el PET-CT previo ha descartado diseminación ganglionar mediastínica o enfermedad a distancia."
      },
      {
        id: "C",
        label: "C",
        text: "Realizar seguimiento radiológico exclusivo con una nueva TC de tórax de alta resolución en 3 meses para evaluar el tiempo de duplicación del volumen.",
        distractorProfile: "deadly_watch_and_wait",
        incorrectFeedback: "Vigilar un nódulo >8 mm con alta probabilidad pretest de malignidad es negligencia; el seguimiento a 3 meses aplica estrictamente para nódulos de bajo a moderado riesgo donde la intervención agresiva supera el beneficio."
      },
      {
        id: "D",
        label: "D",
        text: "Realizar una broncoscopia flexible con lavado broncoalveolar para citología, difiriendo técnicas invasivas transtorácicas.",
        distractorProfile: "low_yield_diagnostic_tool",
        incorrectFeedback: "La broncoscopia flexible convencional sin navegación electromagnética falla en alcanzar la inmensa mayoría de nódulos periféricos, generando falsos negativos que retrasan la atención."
      }
    ],
    correctOptionId: "A",
    explanation: "El paciente presenta un Nódulo Pulmonar Solitario (NPS) con características de alto riesgo de malignidad (tamaño >8 mm, espiculado, retracción pleural, paciente añoso, fumador pesado). La probabilidad pretest de cáncer supera el 65%. Según las directrices para nódulos sólidos > 8 mm de alto riesgo, la conducta mandatoria es la evaluación metabólica y de estadificación ganglionar mediante PET-CT antes de proceder a una biopsia (o resección quirúrgica directa si el PET es captante). El PET-CT es vital para descartar enfermedad metastásica oculta o compromiso ganglionar mediastínico (N2/N3) no visible en la TC simple, lo cual cambiaría radicalmente el enfoque de quirúrgico curativo a oncológico sistémico.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** En oncología torácica, Colega, \"nunca cortes sin iluminar primero\". Aunque el nódulo grita cáncer (16 mm, espiculado), someter al paciente a una lobectomía inmediata (Opción B) es un error gravísimo si no sabes si el tumor ya sembró micrometástasis en los ganglios paratraqueales. Si operas y el ganglio sale positivo, operaste en vano y sometiste al paciente a morbilidad sin beneficio curativo. El PET-CT te traza el mapa de guerra. La broncoscopia sola (Opción D) tiene un rendimiento diagnóstico paupérrimo (<30%) para nódulos periféricos menores a 2 cm.",
    keyPoints: [
      "Nódulo pulmonar sólido mayor a 8 mm con factores radiológicos de alto riesgo (espiculado, lóbulo superior, no calcificado).",
      "Paciente con factores demográficos de riesgo (tabaquismo, edad > 50 años).",
      "Toma de decisión entre vigilar, biopsiar o imagen avanzada.",
      "Estadificación metabólica con PET-CT. No se opera un nódulo altamente sospechoso sin antes descartar metástasis ocultas o compromiso mediastínico que contraindiquen la cirugía de primera línea.",
      "Tema: Nódulo Pulmonar Solitario / Cáncer de Pulmón."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-42",
    university: "UCC",
    examArea: "Pediatría / Gastroenterología / Alergología",
    topic: "Pediatría",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "gastroenterologia", "alergologia"],
    statement: "Lactante masculino de 6 meses de edad es traído a urgencias en estado de letargia profunda y palidez intensa. La madre refiere que hace exactamente 2 horas le dio a probar por primera vez una papilla de arroz. Cincuenta minutos después de la ingesta, el niño comenzó con vómitos incoercibles (más de 10 episodios), palidez y decaimiento progresivo hasta la somnolencia actual. Al examen físico: hipotenso (PA 60/35 mmHg), taquicárdico, hipotérmico, pero NO presenta sibilancias, ronchas, eritema ni edema facial (ausencia de signos cutáneos o respiratorios). Se asume choque y se administran cristaloides a 20 cc/kg. ¿Cuál es el diagnóstico fisiopatológico MÁS probable y el medicamento específico que bloquea el mecanismo emético central en este síndrome?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Anafilaxia mediada por IgE; requiere administración inmediata de Epinefrina intramuscular.",
        distractorProfile: "wrong_allergic_mechanism",
        incorrectFeedback: "La anafilaxia clásica cursa casi invariablemente con compromiso cutáneo (urticaria/angioedema) o respiratorio; el choque del FPIES es hipovolémico por secuestro entérico y no responde a la epinefrina de la misma forma que el choque distributivo anafiláctico."
      },
      {
        id: "B",
        label: "B",
        text: "Síndrome de Enterocolitis Inducida por Proteínas de los Alimentos (FPIES); el fármaco de elección es el Ondansetrón intravenoso."
      },
      {
        id: "C",
        label: "C",
        text: "Invaginación intestinal aguda desencadenada por nuevos alimentos; el manejo analgésico es con Hioscina y remisión quirúrgica.",
        distractorProfile: "surgical_overlap",
        incorrectFeedback: "Aunque la invaginación intestinal produce letargia y dolor, su presentación suele incluir dolor paroxístico agudo, llanto intermitente y posteriormente deposiciones en jalea de grosella, pero rara vez debuta con vómito profuso casi fulminante a los minutos de comer algo nuevo."
      },
      {
        id: "D",
        label: "D",
        text: "Sepsis fulminante de origen entérico; requiere administración empírica de Ceftriaxona.",
        distractorProfile: "sepsis_mimic_trap",
        incorrectFeedback: "La sepsis es el principal diagnóstico diferencial, pero la relación temporal estricta (1-4h) con la introducción de un alimento específico (arroz) en un lactante previamente perfecto sin fiebre apunta a una reacción inmune entérica aguda."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un Síndrome de Enterocolitis Inducida por Proteínas de los Alimentos (FPIES, por sus siglas en inglés), una alergia alimentaria **no mediada por IgE** (mediada por células T). La presentación aguda patognomónica es hiperaguda y brutal: vómitos profusos, letargia profunda, palidez y choque hipotensivo (en el 15-20% de los casos) que inicia estrictamente de 1 a 4 horas tras la ingesta del alimento agresor (clásicamente leche de vaca, soya o cereales como el arroz o la avena en la fase de ablactación). La clave clínica es la AUSENCIA de síntomas cutáneos (urticaria) o respiratorios, diferenciándolo de la anafilaxia típica. El manejo de urgencia exige reanimación hídrica intensiva y el uso de **Ondansetrón** IV (antagonista 5-HT3), el cual ejerce un efecto casi milagroso al detener los vómitos y revertir la cascada neuroentérica que sostiene el choque.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** El FPIES es el \"gran simulador de la sepsis\" en urgencias pediátricas. El residente novato ve un bebé pálido, hipotenso y letárgico e inicia el protocolo de sepsis con punción lumbar y antibióticos. El residente astuto interroga: \"¿qué comió hace dos horas?\". Si es arroz, avena o fórmula nueva, y no tiene ronchas, es FPIES. La trampa (Opción A) es pensar que toda reacción alérgica severa es anafilaxia. En el FPIES no hay IgE, no hay histamina libre, por lo que la Epinefrina y los corticoides no sirven para detener el mecanismo de base; el secreto está en bloquear la serotonina intestinal masiva con Ondansetrón.",
    keyPoints: [
      "Lactante que inicia alimentación complementaria (típicamente arroz o avena).",
      "Vómitos intratables, palidez cadavérica y letargo/choque de 1 a 4 horas post-ingesta.",
      "Ausencia total de ronchas, estridor o sibilancias.",
      "FPIES agudo. Reanimación hídrica intensa (20 cc/kg) + Ondansetrón IV. La epinefrina no tiene rol primario aquí por no ser un cuadro mediado por IgE o degranulación de mastocitos.",
      "Tema: Alergología Pediátrica / FPIES."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-43",
    university: "UCC",
    examArea: "Medicina Interna / Gastroenterología / Cuidado Intensivo",
    topic: "Gastroenterología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "gastroenterologia", "cuidado_intensivo"],
    statement: "Hombre de 45 años, con antecedente de alcoholismo, se encuentra en su tercera semana de hospitalización en la UCI por Pancreatitis Aguda Necrotizante Severa. Venía presentando mejoría clínica y tolerancia a la nutrición enteral, pero en las últimas 72 horas desarrolla fiebre sostenida (39.2°C), taquicardia y leucocitosis progresiva de 22,000/mmÂ³. Una Tomografía Computarizada (TC) de abdomen con contraste revela una colección de necrosis amurallada (Walled-off Necrosis) de 10 cm en el retroperitoneo, con presencia de múltiples burbujas de gas en su interior. El paciente se encuentra hemodinámicamente estable (PA 115/75 mmHg), apoyado con cristaloides y sin requerimiento de vasopresores. ¿Cuál es el abordaje terapéutico de elección en el escenario actual?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Realizar una laparotomía exploratoria de urgencia para necrosectomía abierta y lavado de la cavidad abdominal.",
        distractorProfile: "obsolete_aggressive_surgery",
        incorrectFeedback: "La necrosectomía abierta primaria (sin intentar drenajes percutáneos previos) somete al paciente a estrés fisiológico letal, altas tasas de sangrado retroperitoneal y morbilidad severa (fístulas pancreáticas)."
      },
      {
        id: "B",
        label: "B",
        text: "Instaurar el protocolo \"Step-up approach\" iniciando con drenaje percutáneo o endoscópico transgástrico de la colección necrótica."
      },
      {
        id: "C",
        label: "C",
        text: "Mantener tratamiento conservador con Imipenem/Cilastatina IV exclusivo, evitando cualquier invasión mientras el paciente no presente choque séptico.",
        distractorProfile: "insufficient_medical_therapy",
        incorrectFeedback: "Aunque los carbapenémicos penetran bien el tejido necrótico, el tratamiento médico aislado de un absceso/colección purulenta estructurada con gas en su interior fracasa siempre por falta de esterilización mecánica y limpieza del tejido muerto."
      },
      {
        id: "D",
        label: "D",
        text: "Punción aspiración con aguja fina (PAAF) de la colección guiada por TAC para enviar a Gram y cultivo, difiriendo intervenciones adicionales.",
        distractorProfile: "redundant_diagnostic_puncture",
        incorrectFeedback: "La punción aspiración (PAAF) se indica únicamente cuando existe deterioro séptico pero el TAC NO muestra gas, para diferenciar entre necrosis estéril (SIRS prolongado) y necrosis infectada. Si hay gas, la infección está confirmada por imagen."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con Necrosis Pancreática Infectada, confirmada radiológicamente (burbujas de gas dentro de la colección necrótica en la tercera semana son un signo inequívoco de infección por bacterias formadoras de gas, obviando la necesidad de PAAF). Las guías internacionales (consenso de Atlanta y panel IAP/APA) han revolucionado el manejo: la necrosectomía quirúrgica abierta temprana acarrea una morbilidad y mortalidad prohibitivas. El estándar de oro es el \"Step-up Approach\" (enfoque escalonado minimamente invasivo). Consiste en iniciar primero con un drenaje percutáneo guiado por imagen o un drenaje transluminal endoscópico (transgástrico/transduodenal). Solo si este drenaje inicial fracasa en controlar la sepsis tras días de lavado, se escala a un desbridamiento retroperitoneal videoasistido (VARD) o necrosectomía endoscópica directa.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Colega, en la pancreatitis necrosante el cirujano es la última carta, no la primera. Hace 20 años el cirujano abría la barriga y \"barría\" el páncreas podrido (Opción A), pero los pacientes morían por sangrado masivo o fístulas interminables. Hoy sabemos que meter un catéter por endoscopia directamente desde el estómago al páncreas permite drenar el pus de forma segura. Ojo con la Opción D (la PAAF): si el TAC ya te muestra gas adentro de la colección, la infección es un hecho al 100%, puncionar solo para confirmar es una pérdida de tiempo; se punciona para drenar directamente.",
    keyPoints: [
      "Paciente en 2da o 3ra semana de pancreatitis aguda severa que hace fiebre nueva y deterioro clínico.",
      "TAC que evidencia burbujas de gas dentro del páncreas/necrosis (Signo de infección).",
      "Decisión quirúrgica vs mínimamente invasiva.",
      "Necrosis Pancreática Infectada confirmada. El estándar terapéutico es el \"Step-Up Approach\" (Drenaje endoscópico o percutáneo como primer paso), evitando siempre la cirugía abierta si es posible.",
      "Tema: Complicaciones de Pancreatitis / Necrosis Infectada."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-44",
    university: "UCC",
    examArea: "Pediatría / Hematología",
    topic: "Hematología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "hematologia"],
    statement: "Un escolar masculino de 7 años, con diagnóstico conocido de Hemofilia A Severa (actividad del Factor VIII < 1%), acude al servicio de urgencias por presentar, tras una caída leve, aumento de volumen, rubor, calor e intenso dolor limitante en la rodilla derecha (hemartrosis aguda). El paciente se encontraba en terapia profiláctica con factor VIII recombinante, pero su hematólogo oncólogo infantil reportó en la última consulta la presencia de una alta titulación de inhibidores (Anticuerpos anti-Factor VIII séricos cuantificados en 12 Unidades Bethesda). ¿Cuál es la intervención farmacológica hemostática INMEDIATA de elección para detener el sangrado intraarticular en este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar Factor VIII recombinante a dosis masivas (3 a 5 veces la dosis habitual) para sobrepasar y saturar a los anticuerpos inhibidores.",
        distractorProfile: "treatment_for_low_responders",
        incorrectFeedback: "La administración de dosis altas de factor deficiente funciona únicamente si el paciente es un \"bajo respondedor\" (<5 Unidades Bethesda). En los altos respondedores, la memoria inmunológica destruye masivamente el factor infundido, persistiendo el sangrado."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar Acetato de Desmopresina (DDAVP) endovenoso para liberar el Factor VIII endógeno almacenado en el endotelio.",
        distractorProfile: "wrong_severity_application",
        incorrectFeedback: "La desmopresina (DDAVP) libera Factor VIII y von Willebrand de los cuerpos de Weibel-Palade endoteliales; es útil en Hemofilia A LEVE (>5% de actividad), pero es completamente ineficaz en la hemofilia severa (<1%), donde las reservas endoteliales son virtualmente nulas."
      },
      {
        id: "C",
        label: "C",
        text: "Infundir un agente puente o de *bypass* coagulatorio (como el Factor VII activado recombinante [rFVIIa] o el Complejo Protrombínico Activado [aPCC])."
      },
      {
        id: "D",
        label: "D",
        text: "Realizar artrocentesis evacuadora inmediata e infundir ácido tranexámico intraarticular y sistémico.",
        distractorProfile: "invasive_danger",
        incorrectFeedback: "La artrocentesis en una articulación hemofílica que sangra activamente (sin haber restablecido la hemostasia primero) está absolutamente contraindicada, pues exacerbará el daño sinovial y aumentará la hemorragia mecánica local."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente cursa con una hemartrosis aguda en el contexto de una Hemofilia A complicada por el desarrollo de INHIBIDORES de alta respuesta (> 5 Unidades Bethesda). Los inhibidores son aloanticuerpos IgG neutralizantes dirigidos contra el Factor VIII exógeno. Cuando el título es alto (>5 UB), la administración de Factor VIII (por más altas que sean las dosis) será neutralizada instantáneamente por los anticuerpos y no detendrá el sangrado. Para tratar la hemorragia, las guías internacionales (WFH) exigen saltarse (bypass) la vía intrínseca defectuosa bloqueada y activar directamente la cascada común. Esto se logra mediante Agentes de Bypass: el Factor VII activado recombinante (rFVIIa), que estimula la vía extrínseca y la generación de trombina local, o el Concentrado de Complejo Protrombínico Activado (FEIBA).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** El desarrollo de inhibidores es la pesadilla del hemofílico, Colega. Si el paciente tiene un título BAJO de inhibidores (< 5 UB), la estrategia es la Opción A: inundar el sistema con Factor VIII masivo para que una fracción logre escapar del anticuerpo y tape la herida. Pero la viñeta es clara: el niño tiene 12 Unidades Bethesda (alta respuesta). Aquí el anticuerpo destruye el factor VIII tan rápido como entra a la vena. Tienes que usar el \"Plan B\" fisiológico: el Factor VIIa (rFVIIa), que activa al Factor X directamente sobre la plaqueta activada en la rodilla, ignorando por completo la ausencia del factor VIII.",
    keyPoints: [
      "Paciente con Hemofilia A o B severa con sangrado activo.",
      "Dato paraclínico crítico: Titulación de inhibidores ALTA (> 5 Unidades Bethesda).",
      "El Factor deficiente ya NO sirve. Se requiere un agente puente/Bypass (Factor VIIa recombinante o aPCC) para generar trombina directa.",
      "Tema: Trastornos de Coagulación / Hemofilia con Inhibidores."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-45",
    university: "UCC",
    examArea: "Medicina Interna / Cardiología / Urgencias",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "cardiologia", "urgencias"],
    statement: "Mujer de 72 años, con antecedente de infarto de miocardio antiguo e insuficiencia cardíaca con fracción de eyección reducida (FEVI 35%), es traída por el servicio prehospitalario tras presentar un síncope. Al ingreso, la paciente se queja de palpitaciones severas, opresión torácica y diaforesis. Su monitor muestra una taquicardia de complejos QRS anchos (140 ms), regular, a una frecuencia de 165 lpm. Los complejos QRS son monomórficos y no se distinguen ondas P claras. Signos vitales: PA 85/55 mmHg, FC 165 lpm, SatO2 93%, paciente obnubilada. ¿Cuál es la terapia INMEDIATA obligatoria de primer orden según los protocolos de reanimación (ACLS)?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Cardioversión eléctrica sincronizada (iniciando a 100 Joules)."
      },
      {
        id: "B",
        label: "B",
        text: "Desfibrilación eléctrica no sincronizada de alta energía (200 Joules bifásicos o 360 monofásicos).",
        distractorProfile: "wrong_electrical_mode",
        incorrectFeedback: "La desfibrilación NO sincronizada se reserva estrictamente para pacientes en parada cardíaca (Fibrilación Ventricular o TV sin pulso). En la TV monomórfica con pulso, un choque no sincronizado corre el altísimo riesgo de generar un fenómeno R sobre T y matar al paciente."
      },
      {
        id: "C",
        label: "C",
        text: "Administrar Amiodarona intravenosa en bolo de 150 mg lento durante 10 minutos.",
        distractorProfile: "stable_management_applied_to_unstable",
        incorrectFeedback: "La amiodarona es el fármaco de elección de primera línea para la TV monomórfica CON ESTABILIDAD hemodinámica. Usarla en presencia de hipotensión y choque retrasará el tratamiento curativo inmediato (eléctrico) y agravará el compromiso hemodinámico."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar Adenosina 6 mg IV rápido para descartar que se trate de una TSV con conducción aberrante.",
        distractorProfile: "dangerous_diagnostic_delay",
        incorrectFeedback: "La Adenosina es útil solo en taquicardias de QRS ancho regulares si el paciente está ESTABLE y el QRS es monomórfico, para desenmascarar taquicardias supraventriculares aberrantes. En choque, la adenosina es fútil y peligrosa."
      }
    ],
    correctOptionId: "A",
    explanation: "La paciente presenta una Taquicardia Ventricular (TV) Monomórfica, evidenciada por la taquicardia regular de QRS ancho en el contexto de una cardiopatía isquémica estructural previa. La decisión clínica pivote en las taquicardias radica en el estado de perfusión del paciente. Al presentar PA 85/55 mmHg (hipotensión), opresión torácica, síncope previo y alteración del sensorio (obnubilada), cumple los criterios estrictos de INESTABILIDAD HEMODINÁMICA. El protocolo de Soporte Vital Cardiovascular Avanzado (ACLS) dicta que cualquier taquicardia (ancha o estrecha) que cause inestabilidad debe tratarse con Cardioversión Eléctrica Sincronizada inmediata (el desfibrilador debe buscar la onda R para entregar el choque y no caer en el período vulnerable de la onda T, lo cual causaría fibrilación ventricular).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Regla inquebrantable de urgencias, Colega: paciente inestable por arritmia = electricidad. La amiodarona (Opción C) o la procainamida son excelentes para la Taquicardia Ventricular, pero SOLO si el paciente está estable (te saluda, presión normal, buena perfusión). Si pasas amiodarona a esta mujer que ya tiene 85 de sistólica, el efecto vasodilatador intrínseco de la infusión la pondrá en parada cardíaca. La desfibrilación no sincronizada (Opción B) solo se reserva para ritmos sin pulso (FV o TV sin pulso) o taquicardias polimórficas irregulares donde la máquina no logra leer la onda R.",
    keyPoints: [
      "Paciente con taquicardia sintomática (QRS ancho o estrecho).",
      "Signos de inestabilidad: Hipotensión, alteración aguda del sensorio, signos de choque, dolor isquémico o falla cardíaca aguda.",
      "La electricidad siempre le gana a la farmacología. Si el pulso es medible pero el paciente está inestable, el paso es Cardioversión Sincronizada.",
      "Tema: Arritmias / Soporte Vital Avanzado (ACLS)."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-46",
    university: "UCC",
    examArea: "Medicina Interna / Nefrología / Hematología",
    topic: "Nefrología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "nefrologia", "hematologia"],
    statement: "Hombre de 68 años acude a urgencias por astenia marcada, dolor lumbar óseo crónico y confusión de 48 horas de evolución. Al examen físico: palidez generalizada, hidratación mucosa límite. Laboratorios urgentes: Hemoglobina 8.5 g/dL, Creatinina sérica de 4.2 mg/dL (falla renal aguda sobre una basal desconocida). Calcio sérico corregido de 14.5 mg/dL (Hipercalcemia severa). Proteínas totales séricas de 10 g/dL con Albúmina de 3.2 g/dL (brecha albúmino-globulina ensanchada masivamente). En el parcial de orina convencional, el reporte de proteinuria es Trazas (ausente). Un frotis de sangre periférica muestra marcada formación de los eritrocitos en \"pilas de monedas\" (Rouleaux). Se establece alta sospecha de Mieloma Múltiple complicado con nefropatía por cilindros (Myeloma Cast Nephropathy). ¿Cuál es la intervención patogénica sistémica MÁS urgente para preservar la función renal, además de la hidratación vigorosa?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administración de pulsos de ciclofosfamida sistémica e inicio de hemodiálisis con filtros de alto corte (High cut-off).",
        distractorProfile: "obsolete_renal_intervention",
        incorrectFeedback: "Aunque la plasmaféresis o la hemodiálisis con filtros especiales se utilizaban para barrer cadenas ligeras, los ensayos recientes (MYRE y EuLITE) demostraron que NO ofrecen un beneficio claro sobre la quimioterapia intensa con Bortezomib y no deben retrasar esta última."
      },
      {
        id: "B",
        label: "B",
        text: "Inicio de quimioterapia dirigida anti-plasmática de acción rápida con Bortezomib y Dexametasona a altas dosis."
      },
      {
        id: "C",
        label: "C",
        text: "Tratamiento exclusivo de la hipercalcemia mediante infusión de bisfosfonatos intravenosos (Ácido Zoledrónico) y calcitonina subcutánea, difiriendo la quimioterapia.",
        distractorProfile: "symptomatic_focus_ignoring_etiology",
        incorrectFeedback: "Tratar la hipercalcemia aisladamente mejora la perfusión, pero si no se frena la tormenta de cadenas ligeras que taponan el riñón mediante quimioterapia, el daño tubular se vuelve esclerótico e irreversible."
      },
      {
        id: "D",
        label: "D",
        text: "Alcalinización de la orina con infusión continua de bicarbonato de sodio para aumentar la solubilidad de la proteína de Bence Jones.",
        distractorProfile: "pathophysiological_trap",
        incorrectFeedback: "A diferencia del Síndrome de Lisis Tumoral (donde la alcalinización sí se consideraba históricamente para el urato), las cadenas ligeras del mieloma no se benefician de la alcalinización; precipitan con la proteína de Tamm-Horsfall sin importar el pH, y dar bicarbonato sobrecarga al paciente de sodio."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un debut catastrófico de Mieloma Múltiple (CRAB positivo: Calcium alto, Renal failure, Anemia, Bone pain). La insuficiencia renal aguda en el mieloma se debe clásicamente a la \"nefropatía por cilindros\": cadenas ligeras libres filtradas que se unen a la proteína de Tamm-Horsfall en el túbulo distal, formando precipitados cristalinos que obstruyen la nefrona y generan inflamación. Aunque la hidratación agresiva (para mantener alto el flujo tubular) y el control del calcio son críticos, la medida terapéutica que impacta definitiva y radicalmente en la recuperación renal es detener la producción de estas proteínas tóxicas en la fábrica medular. Esto se logra instaurando tratamiento quimioterapéutico inmediato, siendo de elección el esquema basado en Dexametasona a altas dosis (rápido efecto linfo-tóxico) y Bortezomib (inhibidor del proteasoma de acción ultrarrápida contra las células plasmáticas).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Pura fisiopatología. La trampa (Opción C) radica en creer que la falla renal es solo por la hipercalcemia. Aunque el calcio deshidrata, el asesino del riñón del mieloma es la cadena ligera que atasca el tubo. De nada sirve hidratar o dar calcitonina si los plasmocitos malignos siguen escupiendo cadenas Kappa o Lambda a la sangre. Tienes que apagar la fábrica hoy mismo con el Bortezomib. Otro truco: el parcial de orina normal te engaña, las tiras de urianálisis en urgencias solo reaccionan químicamente a la albúmina; para ver la proteinuria del mieloma debes pedir cuantificación de proteínas en 24h o cadenas ligeras libres en suero y orina.",
    keyPoints: [
      "Anciano con dolor óseo, falla renal, hipercalcemia y \"brecha de proteínas\" grande (globulinas altas y albúmina normal).",
      "Orina que no marca proteínas en la tira reactiva común (las tiras detectan albúmina, no cadenas ligeras de Bence Jones).",
      "Frotis en fenómeno de Rouleaux (pilas de monedas).",
      "Mieloma Múltiple. El manejo de la falla renal por cilindros exige HIDRATACIÓN masiva y QUIMIOTERAPIA urgente (Bortezomib/Dexametasona) para cortar la fuente de la toxicidad tubular.",
      "Tema: Nefropatía por Mieloma / Hematología."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-47",
    university: "UCC",
    examArea: "Pediatría / Infectología / Preventiva",
    topic: "Infectología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "infectologia", "preventiva"],
    statement: "Un niño de 4 años, previamente sano y con esquema de vacunación completo, asiste regularmente a un jardín infantil. Ayer, uno de sus compañeros de aula (niño de 5 años) fue hospitalizado en la UCI pediátrica y se confirmó un diagnóstico de Meningitis por *Neisseria meningitidis* (Meningococo) serogrupo B. La profesora del aula, una mujer de 28 años que se encuentra en su primer trimestre de embarazo (semana 10 de gestación), acude al centro de salud profundamente angustiada, solicitando indicaciones sobre el riesgo de contagio para ella y para el niño de 4 años, ya que ambos comparten el salón de clases cerrado durante 6 horas diarias. ¿Cuál es el esquema de Quimioprofilaxis post-exposición (PEP) MÁS apropiado y seguro para ambos contactos íntimos?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Al niño prescribirle Rifampicina oral por 2 días; a la profesora gestante administrarle una dosis única de Ceftriaxona intramuscular."
      },
      {
        id: "B",
        label: "B",
        text: "A ambos prescribirles una dosis única de Ciprofloxacino oral, ya que la FDA lo avala como seguro y profiláctico en el embarazo precoz.",
        distractorProfile: "teratogenic_drug_in_pregnancy",
        incorrectFeedback: "El Ciprofloxacino es excelente para adultos, pero las fluoroquinolonas tienen potencial de toxicidad sobre el desarrollo del cartílago articular en el feto y están contraindicadas rutinariamente durante el embarazo temprano."
      },
      {
        id: "C",
        label: "C",
        text: "Al niño prescribirle Azitromicina en dosis única; a la profesora gestante no se le recomienda profilaxis por el alto riesgo teratogénico de los antibióticos sistémicos.",
        distractorProfile: "passive_and_deadly_negligence",
        incorrectFeedback: "Negar la quimioprofilaxis a un contacto estrecho adulto expuesto al meningococo por miedo al embarazo es una mala praxis absoluta, exponiendo a la madre a un choque séptico que causará la muerte materna y fetal; existen opciones seguras como la Ceftriaxona."
      },
      {
        id: "D",
        label: "D",
        text: "Al niño aplicarle la vacuna tetravalente antimeningocócica conjugada de urgencia; a la profesora administrarle Rifampicina por 4 días.",
        distractorProfile: "prophylactic_timing_error",
        incorrectFeedback: "La vacuna meningocócica tarda semanas en inducir inmunidad efectiva; es útil para frenar brotes institucionales a largo plazo, pero la quimioprofilaxis antibiótica es vital para la protección y erradicación del estado de portador faríngeo en las primeras horas."
      }
    ],
    correctOptionId: "A",
    explanation: "La infección invasiva por Meningococo requiere obligatoriamente Quimioprofilaxis post-exposición temprana (idealmente < 24 horas) a todos los \"contactos íntimos\" (personas que conviven en el mismo techo, contactos en guarderías/preescolares que comparten el mismo cuarto más de 4 horas diarias, o personal de salud expuesto directamente a secreciones nasofaríngeas). Para la población general y niños, los regímenes de primera línea son: Rifampicina oral (2 días, 4 dosis en total) o Ceftriaxona IM dosis única o Ciprofloxacino oral dosis única (solo en adultos). SIN EMBARGO, en el escenario crítico de una mujer embarazada (como la profesora), la Rifampicina está desaconsejada y las fluoroquinolonas (Ciprofloxacino) están **contraindicadas**. El único fármaco universalmente seguro y recomendado de primera línea para profilaxis meningocócica en el embarazo es la **Ceftriaxona intramuscular en dosis única**.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Epidemiología pura y dura aplicada a pediatría de guardería. El meningococo causa pánico colectivo con justa razón. A los niños pequeños les encanta la Rifampicina en jarabe, pero recuérdale a los padres que la orina y las lágrimas del niño se teñirán de color rojo/naranja fosforescente, para que no regresen infartados a urgencias. En la gestante, las quinolonas destrozan el cartílago fetal y la rifampicina interfiere severamente, por lo que la aguja con Ceftriaxona en el glúteo es la única vía segura que mata al meningococo en la faringe de la profesora sin dañar al embrión.",
    keyPoints: [
      "Exposición confirmada a Meningococo (guardería, familia).",
      "Selección de Quimioprofilaxis de Contactos según el grupo poblacional.",
      "Niños / Adultos sanos: Rifampicina oral por 2 días o Ciprofloxacino/Ceftriaxona dosis única.",
      "Mujeres Embarazadas: Ceftriaxona IM dosis única, de forma mandatoria.",
      "Tema: Enfermedad Meningocócica / Profilaxis."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-48",
    university: "UCC",
    examArea: "Medicina Interna / Cardiología / Cuidado Intensivo",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "cardiologia", "cuidado_intensivo"],
    statement: "Mujer de 64 años, quien sufrió un Infarto Agudo de Miocardio con elevación del ST (IAMCEST) de cara anteroseptal extenso hace 4 días y no recibió terapia de reperfusión temprana por llegada tardía. Hoy, encontrándose hospitalizada en sala general, la paciente presenta súbitamente deterioro respiratorio extremo, obnubilación y choque. Al examen físico: pálida, mal perfundida, PA 75/40 mmHg, FC 125 lpm. Se palpa un \"frémito\" (thrill) precordial y se ausculta la aparición súbita de un soplo holosistólico en maquinaria áspero, de intensidad V/VI, localizado predominantemente en el borde esternal inferior izquierdo (quinto espacio intercostal), el cual no irradia a la axila. Los campos pulmonares presentan crepitantes bilaterales hasta los ápices. ¿Cuál es la complicación mecánica subyacente MÁS probable y cuál es la terapia temporal mientras se prepara para el quirófano?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Ruptura de músculo papilar con insuficiencia mitral aguda masiva; se debe estabilizar con colocación de Balón de Contrapulsación Intraaórtico (BCIA).",
        distractorProfile: "wrong_mechanical_complication",
        incorrectFeedback: "La ruptura del músculo papilar causa insuficiencia mitral aguda; su soplo se ausculta mejor en el ápex cardíaco, irradia a la axila y característicamente carece de frémito táctil, a diferencia de la ruptura septal."
      },
      {
        id: "B",
        label: "B",
        text: "Ruptura de la pared libre del ventrículo izquierdo con taponamiento cardíaco; el soporte urgente es la pericardiocentesis evacuadora inmediata.",
        distractorProfile: "pericardial_vs_septal_rupture",
        incorrectFeedback: "La ruptura de pared libre sangra hacia el pericardio causando taponamiento cardíaco (silencio auscultatorio, ingurgitación yugular y pulso paradójico), pero no produce un soplo holosistólico áspero nuevo."
      },
      {
        id: "C",
        label: "C",
        text: "Ruptura del septo interventricular (Comunicación Interventricular adquirida); el soporte es la reducción de la postcarga ventricular (BCIA o vasodilatadores si la PA lo permite) antes del cierre quirúrgico urgente."
      },
      {
        id: "D",
        label: "D",
        text: "Expansión isquémica del ventrículo derecho con disfunción sistólica pura; el manejo médico es con bolos de cristaloides para asegurar precarga óptima.",
        distractorProfile: "wrong_pathology_and_treatment",
        incorrectFeedback: "El infarto derecho causa choque, pero produce pulmones claros (no crepitantes apicales) e hipotensión al quitarle la precarga, careciendo del violento soplo septal recién adquirido."
      }
    ],
    correctOptionId: "C",
    explanation: "La paciente cursa con una complicación mecánica letal del infarto agudo de miocardio (que ocurre clásicamente entre los días 3 y 7 post-IAM). La Ruptura del Septo Interventricular (CIV adquirida) es una complicación temida, principalmente de los infartos de cara anterior. Su signo patognomónico semiológico es la aparición abrupta de un soplo holosistólico muy áspero, acompañado de frémito (thrill) palpable en el borde paraesternal izquierdo bajo (zona septal), con deterioro hemodinámico inmediato debido al masivo cortocircuito de sangre del VI al VD (sobrecarga de volumen pulmonar y caída del gasto cardíaco sistémico). La única salvación es la cirugía de parche septal, pero la estabilización puente requiere Balón de Contrapulsación Intraaórtico (BCIA) para bajar la resistencia a la salida aórtica (postcarga) y promover el flujo sistémico, reduciendo el escape de sangre hacia el ventrículo derecho.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Semiología de la vieja escuela para tomar decisiones de alta complejidad. Las tres complicaciones fatales post-infarto que rompen el corazón entre el día 3 y 7 son: pared libre, músculo papilar y septo. La pared libre rompe hacia el pericardio y da disociación electromecánica súbita o taponamiento masivo (sin soplo). El músculo papilar (más típico de infartos de pared inferior) daña la válvula mitral, causando un soplo suave en el ápice que irradia a axila. El septo roto (esta paciente, por su infarto anterior extenso) bota sangre a presión altísima del VI al VD, de ahí que el soplo sea ruidoso, áspero y que la turbulencia se sienta con la mano en el pecho (frémito paraesternal).",
    keyPoints: [
      "Paciente entre el día 3 y 7 post-infarto que se deteriora bruscamente y cae en choque.",
      "Auscultación de un soplo holosistólico nuevo con frémito en borde esternal izquierdo.",
      "Comunicación Interventricular (Ruptura Septal). Diferenciarlo de la Ruptura de Músculo Papilar, que da un soplo suave/musical en el ápex irradiado a la axila (sin frémito). Ambas exigen BCIA y cirugía inmediata.",
      "Tema: Complicaciones Mecánicas del Infarto."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-49",
    university: "UCC",
    examArea: "Medicina Interna / Endocrinología / Ginecología",
    topic: "Endocrinología",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "endocrinologia", "ginecologia"],
    statement: "Mujer de 28 años, en su primer trimestre de embarazo (9 semanas de gestación), acude a consulta externa refiriendo palpitaciones, diaforesis, pérdida de peso a pesar de hiperfagia y labilidad emocional severa. Al examen físico se documenta un bocio difuso, exoftalmos leve bilateral, temblor fino en las manos y una FC de 115 lpm. Los paraclínicos confirman el diagnóstico de Enfermedad de Graves-Basedow: TSH < 0.01 mUI/L, T4 libre francamente elevada y Anticuerpos Anti-Receptor de TSH (TRABs) fuertemente positivos. ¿Cuál es el tratamiento antitiroideo MÁS indicado y seguro durante esta etapa específica del embarazo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Propiltiouracilo (PTU) por vía oral durante el primer trimestre, considerando transición a Metimazol en el segundo trimestre."
      },
      {
        id: "B",
        label: "B",
        text: "Metimazol por vía oral a bajas dosis continuas a lo largo de todo el embarazo debido a la toxicidad hepática fulminante del PTU.",
        distractorProfile: "teratogenic_trap",
        incorrectFeedback: "El uso de Metimazol durante el primer trimestre (semanas de organogénesis) se asocia al desarrollo de \"embriopatía por metimazol\", que incluye aplasia cutis congénita y anomalías del conducto onfalomesentérico (atresia coanal/esofágica)."
      },
      {
        id: "C",
        label: "C",
        text: "Tratamiento definitivo e inmediato con Iodo radiactivo (I-131) para controlar la toxicidad sistémica y proteger el corazón materno.",
        distractorProfile: "absolute_pregnancy_contraindication",
        incorrectFeedback: "El uso de Iodo Radiactivo en el embarazo está absoluta y estrictamente contraindicado, ya que el isótopo cruza la barrera placentaria y destruye por completo el tejido tiroideo fetal en desarrollo, provocando hipotiroidismo congénito irreversible."
      },
      {
        id: "D",
        label: "D",
        text: "Manejo médico paliativo exclusivamente con Propranolol hasta la finalización del embarazo, contraindicando las tionamidas en la gestación.",
        distractorProfile: "insufficient_medical_control",
        incorrectFeedback: "El propranolol mejora la taquicardia temporalmente, pero no suprime la síntesis exagerada de tiroxina por la glándula estimulada; dejar a la paciente hipertiroidea sin bloqueo enzimático induce tormenta tiroidea, preeclampsia precoz, parto pretérmino y aborto."
      }
    ],
    correctOptionId: "A",
    explanation: "El manejo del hipertiroidismo autoinmune (Enfermedad de Graves) en el embarazo es altamente estricto según las guías de la Asociación Americana de Tiroides (ATA). Durante el **primer trimestre** del embarazo, el Metimazol está absolutamente contraindicado, debido a que se asocia fuertemente con una embriopatía teratogénica rara pero grave (Aplasia cutis congénita y atresia de coanas/esofágica). Por lo tanto, el **Propiltiouracilo (PTU)** es la tionamida obligatoria y de elección durante los primeros tres meses. Sin embargo, el PTU acarrea un riesgo no despreciable de hepatotoxicidad fulminante para la madre, por lo que una vez que finaliza la organogénesis fetal (inicio del segundo trimestre), la recomendación es realizar una transición rápida al Metimazol para proteger el hígado materno durante el resto del embarazo.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Esta es una regla mnemotécnica inviolable para tu práctica. La \"P\" de Propiltiouracilo es para la \"P\" del Primer Trimestre. La \"M\" de Metimazol es para la \"M\" de Mitad (y final) del embarazo. Dar yodo radiactivo (Opción C) a una paciente embarazada es una negligencia catastrófica porque el isótopo cruza la placenta a partir de la semana 10, y el yodo se concentrará en la glándula tiroides del feto en desarrollo, ablándola por completo y causándole un cretinismo atrogénico irreversible.",
    keyPoints: [
      "Mujer embarazada con Hipertiroidismo Franco (Enfermedad de Graves).",
      "Necesidad de terapia antitiroidea específica según trimestre.",
      "1er Trimestre (Semanas 1-13) = PROPILTIOURACILO (PTU). (El metimazol causa embriopatía).",
      "2do y 3er Trimestre = METIMAZOL. (El PTU daña el hígado materno).",
      "Tema: Endocrinología Gestacional / Enfermedad de Graves."
    ]
  },
  {
    id: "ucc-conv-2025-07-19-50",
    university: "UCC",
    examArea: "Pediatría / Urgencias / Toxicología",
    topic: "Pediatría",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_07_19", "pediatria", "urgencias", "toxicologia"],
    statement: "Un preescolar de 3 años, residente en una vivienda campesina sin acceso a servicios públicos regulares, es traído de urgencia tras haber ingerido accidentalmente el contenido de un frasco de limpiador de hornos artesanal altamente alcalino (Hidróxido de Sodio - Sosa Cáustica pura) hace 45 minutos. Los padres encontraron al niño llorando junto a la botella abierta. Al ingreso, el paciente se encuentra alerta, hemodinámicamente estable (PA 90/60 mmHg, FC 110 lpm, SatO2 98%), pero con babeo profuso (sialorrea) y marcado edema, eritema y escaras blancas en los labios, comisuras bucales y lengua. No se observan signos de dificultad respiratoria y el murmullo vesicular es normal. Con el fin de evaluar y tratar el daño corrosivo del tracto digestivo superior, ¿cuál es el abordaje MÁS adecuado e inmediato en este momento?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Instaurar ayuno, administrar analgésicos intravenosos y programar una Endoscopia Digestiva Alta temprana (idealmente en las primeras 12 a 24 horas) para estadificar la lesión."
      },
      {
        id: "B",
        label: "B",
        text: "Colocar de inmediato una sonda nasogástrica bajo visión indirecta para realizar un lavado gástrico exhaustivo y evitar la absorción sistémica de la base fuerte.",
        distractorProfile: "destructive_mechanical_procedure",
        incorrectFeedback: "Colocar sondas nasogástricas a ciegas en un esófago con necrosis de licuefacción es la causa principal de perforación esofágica iatrogénica directa, con consecuente mediastinitis química fulminante."
      },
      {
        id: "C",
        label: "C",
        text: "Administrar carbón activado en dosis múltiples a través de una jeringa bucal e iniciar neutralización química ingiriendo un ácido débil (jugo de limón o vinagre).",
        distractorProfile: "lethal_exothermic_reaction_and_useless_intervention",
        incorrectFeedback: "La administración de un neutralizante ácido provoca una reacción química que libera un inmenso calor (reacción exotérmica), agravando el daño con una quemadura térmica agregada; además, el carbón activado no absorbe los agentes cáusticos."
      },
      {
        id: "D",
        label: "D",
        text: "Diferir cualquier examen endoscópico por al menos 3 semanas debido al inmenso riesgo de perforar el esófago inflamado, vigilando el dolor con analgésicos comunes.",
        distractorProfile: "loss_of_diagnostic_window",
        incorrectFeedback: "La endoscopia es obligatoria y altamente segura en las primeras 24 horas para definir el riesgo de estenosis y necesidad de alimentación parenteral; se vuelve muy riesgosa entre los días 5 y 15 debido a la fase de granulación hiper-friable del tejido."
      }
    ],
    correctOptionId: "A",
    explanation: "La ingesta de sustancias cáusticas (especialmente los álcalis fuertes como la sosa cáustica) produce una **necrosis por licuefacción** altamente destructiva y profunda que deshace rápidamente las capas de la mucosa y muscular del esófago y estómago. En el abordaje urgente de estas intoxicaciones, están estricta y absolutamente prohibidos tres métodos clásicos de la toxicología general: 1) NO inducir el vómito (quemaría de regreso), 2) NO realizar lavado gástrico ni colocar sondas a ciegas (alto riesgo de perforación instrumental de un esófago licuado), y 3) NO usar neutralizantes ni carbón activado. La intervención clínica protocolizada es estabilizar, administrar analgesia, inhibidores de bomba de protones y programar una Endoscopia Digestiva Alta en las primeras 12 a 24 horas (idealmente no después de 48 horas) para visualizar directamente y estadificar el daño (Clasificación de Zargar), lo cual dictará el pronóstico de desarrollo de estenosis esofágica tardía.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Colega, en quemaduras por cáusticos los errores se pagan con perforación mediastínica letal. El carbón activado (Opción C) no se une a los ácidos ni a las bases fuertes, no hace nada útil, pero sí pintará el esófago quemado de color negro carbón, haciendo que cuando baje el endoscopista, no logre ver absolutamente nada. Ponerle un \"neutralizante\" (jugo de limón o leche) genera una reacción química de neutralización exotérmica en el estómago, la cual libera un calor inmenso (quemadura térmica) que se suma al daño químico previo. La endoscopia (Opción A) es el jefe en las primeras horas antes de que la pared del esófago empiece a remodelarse y afilarse (entre los días 5 a 15, fase donde la endoscopia sí está contraindicada por riesgo altísimo de ruptura).",
    keyPoints: [
      "Paciente (niño o adulto) con ingesta de sustancias cáusticas (álcalis de horno o ácidos).",
      "Quemaduras en la boca, sialorrea y disfagia.",
      "Ayuno estricto + Analgesia IV + Endoscopia temprana (12-24h). Nunca inducir vómito, nunca colocar sondas a ciegas, nunca usar carbón ni neutralizantes.",
      "Tema: Intoxicación por Cáusticos / Urgencias Pediátricas."
    ]
  }
];

