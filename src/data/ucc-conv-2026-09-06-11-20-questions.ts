import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #7 (6 sep 2026) · Preguntas #11–#20.
 * Banco exclusivo del examen oficial.
 */
export const UCC_CONV_2026_09_06_11_20_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2026-09-06-11",
    university: "UCC",
    examArea: "PEDIATRÍA - CARDIOLOGÍA / INFECTOLOGÍA",
    topic: "Vasculitis Pediátricas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","vasculitis-pedi-tricas","vasculitis","pedi","tricas"],
    statement: "Un niño de 3 años consulta por fiebre alta de 40°C de 6 días de evolución, sin foco infeccioso claro a pesar de múltiples estudios. Al examen físico se observan: conjuntivitis bilateral no purulenta, labios fisurados y enrojecidos (\"labios de fresa\"), lengua aframbuesada, un exantema polimorfo en tronco, eritema y edema indurado de palmas y plantas, y una adenopatía cervical única de 2 cm, no dolorosa. Los laboratorios muestran leucocitosis con neutrofilia, PCR y VSG muy elevadas, trombocitosis (plaquetas 650.000/mm³ en el día 7), y un ecocardiograma que revela dilatación leve de la arteria coronaria descendente anterior izquierda. ¿Cuál es el tratamiento de PRIMERA LÍNEA que debe administrarse en las primeras 10 días de la enfermedad para prevenir la principal complicación cardiovascular?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Antibioticoterapia empírica de amplio espectro, asumiendo una infección bacteriana oculta como causa del cuadro.",
        distractorProfile: "wrong_etiologic_category",
        incorrectFeedback: "Kawasaki es una vasculitis, no una infección bacteriana; los antibióticos no tienen ningún efecto sobre el proceso inflamatorio vascular subyacente y su uso solo retrasa el reconocimiento y tratamiento oportuno con IGIV.",
      },
      {
        id: "B",
        label: "B",
        text: "Inmunoglobulina Intravenosa (IGIV) en dosis única alta, más Ácido Acetilsalicílico (Aspirina) en dosis antiinflamatoria.",
      },
      {
        id: "C",
        label: "C",
        text: "Corticoides sistémicos en altas dosis como monoterapia, reservando la IGIV solo para los casos refractarios.",
        distractorProfile: "reversed_treatment_hierarchy",
        incorrectFeedback: "La evidencia respalda la IGIV como terapia de primera línea; los corticoides como monoterapia inicial no han demostrado la misma eficacia en prevenir aneurismas coronarios y se reservan típicamente para casos que no responden a la IGIV.",
      },
      {
        id: "D",
        label: "D",
        text: "Anticoagulación plena con Heparina, dado el hallazgo de dilatación coronaria en el ecocardiograma.",
        distractorProfile: "premature_advanced_therapy",
        incorrectFeedback: "La anticoagulación plena se reserva para aneurismas coronarios grandes o gigantes con alto riesgo trombótico documentado; una dilatación leve inicial se maneja con el tratamiento estándar (IGIV + Aspirina) y seguimiento ecocardiográfico estrecho, no con anticoagulación agresiva de entrada.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con **Enfermedad de Kawasaki**, una vasculitis sistémica pediátrica de causa desconocida que afecta preferentemente vasos de mediano calibre, siendo su complicación más temida el desarrollo de **aneurismas de las arterias coronarias**. El diagnóstico es clínico, requiriendo fiebre ≥5 días más al menos 4 de los siguientes: conjuntivitis bilateral no purulenta, cambios orofaríngeos (labios fisurados, lengua aframbuesada), exantema polimorfo, cambios en extremidades (eritema/edema palmoplantar, descamación tardía) y adenopatía cervical. El tratamiento de primera línea, administrado idealmente dentro de los primeros 10 días de fiebre, es la **Inmunoglobulina Intravenosa (IGIV) en dosis única alta**, que ha demostrado reducir dramáticamente la incidencia de aneurismas coronarios, combinada con **Aspirina** en dosis antiinflamatoria inicial (que luego se reduce a dosis antiagregante una vez resuelta la fiebre).",
    keyPoints: [
    "Niño con fiebre ≥5 días + conjuntivitis bilateral + cambios orofaríngeos + exantema + cambios en manos/pies + adenopatía cervical.",
    "Enfermedad de Kawasaki. Tratamiento de primera línea (idealmente en los primeros 10 días): IGIV en dosis única + Aspirina. Objetivo principal: prevenir aneurismas de arterias coronarias.",
    "Vasculitis Pediátricas / Enfermedad de Kawasaki."
],
  },
  {
    id: "ucc-conv-2026-09-06-12",
    university: "UCC",
    examArea: "PEDIATRÍA - CIRUGÍA / GASTROENTEROLOGÍA",
    topic: "Cirugía Pediátrica",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","cirug-a-pedi-trica","cirug","a","pedi","trica"],
    statement: "Un lactante masculino de 5 semanas de vida, previamente sano, es traído por vómito progresivo. La madre relata que inicialmente eran regurgitaciones leves, pero en los últimos 3 días el vómito se ha vuelto **\"en proyectil\"**, inmediatamente después de cada toma, de contenido no bilioso, y el niño queda con hambre inmediatamente después de vomitar. Ha perdido peso en la última semana. Al examen físico, el abdomen es blando, y a la palpación profunda en epigastrio, tras dar una toma de agua azucarada, se palpa una masa firme, móvil, del tamaño de una aceituna. Los gases arteriales muestran alcalosis metabólica hipoclorémica e hipokalémica. ¿Cuál es el manejo INICIAL prioritario ANTES de proceder al tratamiento definitivo de este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Piloromiotomía quirúrgica de urgencia inmediata, dado que es una obstrucción mecánica que no debe esperar.",
        distractorProfile: "unnecessary_surgical_urgency",
        incorrectFeedback: "A diferencia de otras obstrucciones intestinales verdaderamente urgentes, la estenosis pilórica permite y EXIGE la corrección hidroelectrolítica previa; operar con alteraciones metabólicas no corregidas aumenta significativamente el riesgo de apnea postoperatoria.",
      },
      {
        id: "B",
        label: "B",
        text: "Corrección de la deshidratación y de las alteraciones hidroelectrolíticas (alcalosis, hipokalemia) antes de cualquier cirugía.",
      },
      {
        id: "C",
        label: "C",
        text: "Prueba terapéutica con inhibidores de bomba de protones durante 2 semanas antes de considerar la cirugía.",
        distractorProfile: "wrong_pharmacologic_approach",
        incorrectFeedback: "El mecanismo de la estenosis pilórica es una obstrucción mecánica por hipertrofia de la capa muscular circular del píloro, no hiperacidez gástrica; los inhibidores de bomba no resuelven la obstrucción y solo retrasan el tratamiento definitivo.",
      },
      {
        id: "D",
        label: "D",
        text: "Ecografía abdominal urgente únicamente para confirmar el diagnóstico, sin necesidad de corregir electrolitos previamente.",
        distractorProfile: "incomplete_management_plan",
        incorrectFeedback: "Aunque la ecografía abdominal (visualizando el grosor y longitud del músculo pilórico) es el estudio confirmatorio de elección, obtenerla no exime de la corrección hidroelectrolítica obligatoria antes de la cirugía definitiva.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con **Estenosis Hipertrófica del Píloro**, la causa quirúrgica más común de vómito en lactantes, típicamente entre las 2 y 8 semanas de vida, con predominio en varones primogénitos. El vómito no bilioso \"en proyectil\" tras cada toma, con hambre persistente y la palpación de la clásica \"oliva pilórica\", son el cuadro clásico. La obstrucción mecánica genera pérdida masiva de ácido clorhídrico gástrico por el vómito repetido, produciendo una **alcalosis metabólica hipoclorémica e hipokalémica** característica. Aunque el tratamiento definitivo es quirúrgico (piloromiotomía de Ramstedt), esta **NO es una emergencia quirúrgica inmediata**: el paso prioritario e indispensable es la **corrección de la deshidratación y de las alteraciones electrolíticas** con líquidos IV antes de llevar al paciente a cirugía, ya que operar con alcalosis e hipokalemia no corregidas aumenta significativamente el riesgo de apnea postoperatoria por depresión del centro respiratorio central.",
    keyPoints: [
    "Lactante de 2-8 semanas con vómito no bilioso \"en proyectil\" + \"oliva pilórica\" palpable + alcalosis metabólica hipoclorémica/hipokalémica.",
    "Estenosis Hipertrófica del Píloro. Regla de oro: NO es una emergencia quirúrgica inmediata. Se debe corregir primero la deshidratación y el desequilibrio hidroelectrolítico, y SOLO DESPUÉS realizar la piloromiotomía.",
    "Cirugía Pediátrica / Estenosis Hipertrófica del Píloro."
],
  },
  {
    id: "ucc-conv-2026-09-06-13",
    university: "UCC",
    examArea: "CIRUGÍA GENERAL - INFECTOLOGÍA",
    topic: "Infecciones Necrotizantes de Tejidos Blandos",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","infecciones-necrotizantes-de-tejidos-blandos","infecciones","necrotizantes","de","tejidos","blandos"],
    statement: "Un hombre de 55 años, diabético mal controlado, consulta por dolor intenso y desproporcionado en la pierna derecha, que inició hace 24 horas tras una pequeña laceración con una herramienta de jardinería. Al examen físico, la piel de la pantorrilla muestra eritema mal delimitado con áreas de coloración violácea-grisácea, edema tenso, y **bullas hemorrágicas**. Llama la atención que el dolor a la palpación es desproporcionadamente intenso en relación con los hallazgos cutáneos visibles, y se palpa crepitación subcutánea en algunas zonas. El paciente está taquicárdico (FC 128 lpm), hipotenso (PA 88/55 mmHg) y confuso. Una radiografía de tejidos blandos muestra gas en el plano fascial. ¿Cuál es la intervención terapéutica MÁS URGENTE e indispensable, que no debe retrasarse por ningún estudio adicional?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Antibioticoterapia de amplio espectro exclusivamente, reservando la cirugía para si no hay mejoría en 48 horas.",
        distractorProfile: "dangerous_delay_of_surgical_source_control",
        incorrectFeedback: "El tejido necrótico avascular es prácticamente inaccesible para los antibióticos sistémicos; retrasar el desbridamiento 48 horas en un paciente con fascitis necrotizante e inestabilidad hemodinámica aumenta drásticamente la mortalidad y la extensión de la amputación necesaria.",
      },
      {
        id: "B",
        label: "B",
        text: "Desbridamiento quirúrgico radical y urgente de todo el tejido necrótico, simultáneo al inicio de antibióticos de amplio espectro y reanimación.",
      },
      {
        id: "C",
        label: "C",
        text: "Oxigenoterapia hiperbárica como tratamiento único y suficiente antes de considerar cualquier cirugía.",
        distractorProfile: "adjunct_mistaken_for_definitive_treatment",
        incorrectFeedback: "La oxigenoterapia hiperbárica, cuando se usa, es exclusivamente un tratamiento ADYUVANTE en algunos centros especializados; nunca reemplaza al desbridamiento quirúrgico, que es la única intervención que remueve físicamente el foco infeccioso necrótico.",
      },
      {
        id: "D",
        label: "D",
        text: "Tomografía computarizada de tejidos blandos para delimitar con precisión la extensión antes de decidir la conducta quirúrgica.",
        distractorProfile: "unnecessary_imaging_delay",
        incorrectFeedback: "En un paciente con signos clínicos claros de fascitis necrotizante y toxicidad sistémica, esperar una TAC retrasa peligrosamente el desbridamiento; el diagnóstico y la decisión quirúrgica deben basarse en la sospecha clínica, explorando quirúrgicamente si es necesario para confirmar.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con **Fascitis Necrotizante**, una infección de tejidos blandos rápidamente progresiva y potencialmente mortal que se disemina a lo largo de los planos fasciales. Las claves diagnósticas clásicas son el **dolor desproporcionado** en relación con los hallazgos cutáneos iniciales (que pueden parecer engañosamente leves al inicio), la progresión rápida, bullas hemorrágicas, crepitación (gas en tejidos por bacterias productoras de gas, frecuentemente polimicrobianas incluyendo anaerobios) y toxicidad sistémica con inestabilidad hemodinámica. Esta es una **emergencia quirúrgica absoluta**: el retraso en el desbridamiento se asocia directamente con aumento de la mortalidad, ya que ningún antibiótico puede penetrar adecuadamente el tejido necrótico y avascular. La conducta correcta es el **desbridamiento quirúrgico radical y urgente** (frecuentemente requiere múltiples reintervenciones), iniciado de forma simultánea con antibióticos de amplio espectro y reanimación hemodinámica agresiva, sin esperar estudios de imagen adicionales que solo retrasarían la cirugía.",
    keyPoints: [
    "Dolor DESPROPORCIONADO a los hallazgos cutáneos + progresión rápida + bullas hemorrágicas + crepitación/gas en tejidos.; Toxicidad sistémica (fiebre, taquicardia, hipotensión, confusión).",
    "Fascitis Necrotizante (emergencia quirúrgica). Manejo: Desbridamiento quirúrgico RADICAL Y URGENTE + Antibiótico de amplio espectro + Reanimación, TODO simultáneo, sin retrasos por estudios de imagen.",
    "Infecciones Necrotizantes de Tejidos Blandos / Fascitis Necrotizante."
],
  },
  {
    id: "ucc-conv-2026-09-06-14",
    university: "UCC",
    examArea: "GINECOLOGÍA Y OBSTETRICIA - URGENCIAS",
    topic: "Emergencias Obstétricas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","emergencias-obst-tricas","emergencias","obst","tricas"],
    statement: "Una mujer de 32 años, con 34 semanas de gestación, consulta a urgencias por sangrado vaginal súbito, abundante, de color rojo oscuro, acompañado de dolor abdominal intenso y continuo (no cólico), y contracciones uterinas hipertónicas. Al examen físico: útero leñoso, extremadamente doloroso a la palpación, que no se relaja entre \"contracciones\". El monitoreo fetal muestra bradicardia fetal sostenida con desaceleraciones tardías repetitivas. La paciente refiere antecedente de hipertensión gestacional mal controlada y consumo reciente de cocaína. Signos vitales maternos: PA 165/105 mmHg, FC 110 lpm. ¿Cuál es el diagnóstico más probable y la conducta INMEDIATA a seguir?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Placenta Previa; manejo expectante con reposo absoluto y vigilancia fetal continua sin necesidad de cesárea urgente.",
        distractorProfile: "wrong_diagnosis_ignoring_pain_pattern",
        incorrectFeedback: "La Placenta Previa se presenta clásicamente con sangrado INDOLORO y sin hipertonía uterina; el dolor continuo intenso y el útero \"leñoso\" descrito aquí son incompatibles con este diagnóstico y apuntan directamente al Abruptio Placentae.",
      },
      {
        id: "B",
        label: "B",
        text: "Desprendimiento Prematuro de Placenta Normoinserta (Abruptio Placentae); cesárea de urgencia inmediata dado el compromiso fetal.",
      },
      {
        id: "C",
        label: "C",
        text: "Ruptura Uterina espontánea; manejo exclusivamente expectante con analgesia, ya que el sangrado vaginal descarta ruptura completa.",
        distractorProfile: "wrong_diagnosis_and_dangerously_passive_management",
        incorrectFeedback: "Independientemente del diagnóstico exacto, ante cualquier sospecha de emergencia obstétrica con compromiso fetal agudo (bradicardia sostenida), el manejo expectante con solo analgesia está absolutamente contraindicado; se requiere intervención quirúrgica inmediata.",
      },
      {
        id: "D",
        label: "D",
        text: "Vasa Previa; manejo con amniocentesis urgente para confirmar sangre fetal antes de decidir la vía del parto.",
        distractorProfile: "wrong_diagnosis_unnecessary_delay",
        incorrectFeedback: "La Vasa Previa se presenta típicamente con sangrado indoloro asociado a la ruptura de membranas y compromiso fetal agudo por hemorragia fetal directa, sin el hallazgo característico de útero hipertónico leñoso; además, realizar una amniocentesis retrasaría peligrosamente la resolución de una emergencia con bradicardia fetal ya establecida.",
      },
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con un **Desprendimiento Prematuro de Placenta Normoinserta (Abruptio Placentae)**, una emergencia obstétrica en la que la placenta se separa de la pared uterina antes del parto, comprometiendo el intercambio de oxígeno feto-materno. Los factores de riesgo clásicos incluyen hipertensión (gestacional o crónica) y el consumo de cocaína (vasoconstrictor potente que puede desencadenar el desprendimiento súbitamente). El cuadro clínico característico es dolor abdominal intenso y CONTINUO (a diferencia del dolor intermitente del trabajo de parto normal), útero hipertónico \"leñoso\" que no se relaja, sangrado vaginal oscuro (aunque hasta un 20% puede ser un desprendimiento \"oculto\" sin sangrado externo visible), y compromiso fetal agudo evidenciado por la bradicardia sostenida. Ante el compromiso fetal documentado y la inestabilidad del cuadro, la conducta es la **cesárea de urgencia inmediata**, ya que cada minuto de retraso compromete gravemente el pronóstico fetal (y potencialmente materno, por el riesgo de coagulopatía de consumo asociada).",
    keyPoints: [
    "Sangrado vaginal + dolor abdominal CONTINUO (no cólico) + útero hipertónico \"leñoso\" que no se relaja.; Factores de riesgo: hipertensión, trauma abdominal, consumo de cocaína.",
    "Desprendimiento Prematuro de Placenta (Abruptio Placentae). Si hay compromiso fetal (bradicardia sostenida) o inestabilidad materna: Cesárea de urgencia INMEDIATA. Diferencia clave con Placenta Previa: el Abruptio duele mucho y de forma continua; la Previa clásicamente es sangrado INDOLORO.",
    "Emergencias Obstétricas / Desprendimiento Prematuro de Placenta."
],
  },
  {
    id: "ucc-conv-2026-09-06-15",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEUROLOGÍA / INFECTOLOGÍA",
    topic: "Urgencias Neurológicas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","urgencias-neurol-gicas","urgencias","neurol","gicas"],
    statement: "Un hombre de 24 años consulta por debilidad progresiva y ascendente en ambas piernas de 4 días de evolución, que comenzó como hormigueo distal y ahora le dificulta subir escaleras, y en las últimas horas ha notado dificultad para respirar profundamente. Refiere un episodio de diarrea acuosa hace 2 semanas que se resolvió espontáneamente. Al examen físico: fuerza muscular 3/5 en miembros inferiores, 4/5 en miembros superiores, con **arreflexia generalizada**, sensibilidad conservada, sin alteración de esfínteres. La capacidad vital forzada medida a la cabecera es de 18 mL/kg. ¿Cuál es el estudio complementario que, de resultar alterado, apoyaría fuertemente el diagnóstico más probable, y cuál es la conducta prioritaria dado el compromiso respiratorio incipiente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Resonancia magnética cerebral urgente; iniciar Metilprednisolona IV en altas dosis como tratamiento de elección.",
        distractorProfile: "wrong_treatment_ineffective_in_this_disease",
        incorrectFeedback: "Los corticoides sistémicos, incluida la Metilprednisolona, han demostrado NO ser efectivos en el Síndrome de Guillain-Barré en múltiples ensayos clínicos, a diferencia de otras patologías neuroinflamatorias; el estudio de elección tampoco es la resonancia cerebral, ya que el proceso afecta las raíces nerviosas periféricas, no el encéfalo.",
      },
      {
        id: "B",
        label: "B",
        text: "Punción lumbar (esperando disociación albúmino-citológica); monitorización respiratoria estrecha e inicio de Inmunoglobulina IV o plasmaféresis.",
      },
      {
        id: "C",
        label: "C",
        text: "Electromiografía únicamente como estudio confirmatorio; manejo ambulatorio con fisioterapia motora.",
        distractorProfile: "underestimating_respiratory_risk",
        incorrectFeedback: "Aunque la electromiografía es útil para apoyar el diagnóstico, el manejo ambulatorio es peligrosamente inadecuado en un paciente con debilidad progresiva y capacidad vital forzada ya reducida; este cuadro requiere hospitalización con monitorización respiratoria continua.",
      },
      {
        id: "D",
        label: "D",
        text: "Tomografía de columna lumbar; iniciar antibioticoterapia empírica asumiendo un absceso epidural.",
        distractorProfile: "wrong_diagnosis_missing_key_pattern",
        incorrectFeedback: "El absceso epidural típicamente cursa con dolor de espalda localizado intenso, fiebre y progresión rápida a paraplejía con nivel sensitivo definido, no con el patrón ascendente simétrico y arreflexia generalizada característico de Guillain-Barré; además, no hay factores de riesgo infecciosos espinales descritos en la viñeta.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con **Síndrome de Guillain-Barré**, una polirradiculoneuropatía desmielinizante aguda autoinmune, frecuentemente desencadenada 1-3 semanas después de una infección gastrointestinal o respiratoria (clásicamente *Campylobacter jejuni* tras diarrea). El cuadro característico es debilidad ASCENDENTE y simétrica con **arreflexia**, sensibilidad relativamente preservada, y el riesgo más temido es la **falla respiratoria** por compromiso de los músculos respiratorios, motivo por el cual se debe monitorizar activamente la capacidad vital forzada (un valor menor a 20 mL/kg es una señal de alarma temprana de insuficiencia respiratoria inminente). El líquido cefalorraquídeo típicamente muestra **disociación albúmino-citológica** (proteínas elevadas con celularidad normal o mínimamente elevada). El tratamiento de elección es la **Inmunoglobulina Intravenosa (IGIV)** o la **plasmaféresis**, ambas con eficacia similar, iniciadas precozmente, junto con monitorización respiratoria estrecha en una unidad con capacidad de soporte ventilatorio inmediato si se requiere.",
    keyPoints: [
    "Debilidad ASCENDENTE simétrica + ARREFLEXIA generalizada, tras infección gastrointestinal o respiratoria reciente.; Vigilar capacidad vital forzada (riesgo de falla respiratoria inminente si <20 mL/kg).",
    "Síndrome de Guillain-Barré. LCR: disociación albúmino-citológica. Tratamiento: IGIV o Plasmaféresis (eficacia similar). Los corticoides NO son efectivos en esta entidad, a diferencia de otras neuropatías inflamatorias.",
    "Urgencias Neurológicas / Síndrome de Guillain-Barré."
],
  },
  {
    id: "ucc-conv-2026-09-06-16",
    university: "UCC",
    examArea: "CIRUGÍA GENERAL - GASTROENTEROLOGÍA",
    topic: "Emergencias Gastroenterológicas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","emergencias-gastroenterol-gicas","emergencias","gastroenterol","gicas"],
    statement: "Un hombre de 48 años, con antecedente de consumo excesivo de alcohol, es traído a urgencias tras varios episodios de vómito intenso y prolongado en las últimas horas. En el último episodio, refiere dolor torácico retroesternal súbito e intensísimo, de aparición inmediatamente después del vómito, asociado a dificultad respiratoria progresiva. Al examen físico: taquicárdico (FC 130 lpm), taquipneico, con **enfisema subcutáneo palpable en la región cervical y torácica superior** (crepitación a la palpación del cuello). Una radiografía de tórax muestra neumomediastino y derrame pleural izquierdo de nueva aparición. ¿Cuál es el diagnóstico más probable y el estudio confirmatorio que debe realizarse antes de decidir la conducta quirúrgica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Infarto agudo de miocardio; electrocardiograma y troponinas seriadas como estudios prioritarios.",
        distractorProfile: "cardiac_mimic_missing_key_history",
        incorrectFeedback: "Aunque el dolor torácico agudo siempre obliga a descartar isquemia cardíaca, la secuencia clara de vómito forzado seguido inmediatamente de dolor torácico, sumada al enfisema subcutáneo cervical y al neumomediastino radiográfico, apunta de forma mucho más específica a una ruptura esofágica que a un evento coronario primario.",
      },
      {
        id: "B",
        label: "B",
        text: "Síndrome de Boerhaave (ruptura esofágica espontánea); esofagograma con contraste hidrosoluble (o TAC con contraste oral) para confirmar la perforación.",
      },
      {
        id: "C",
        label: "C",
        text: "Neumotórax espontáneo primario; colocación inmediata de tubo de tórax sin necesidad de más estudios.",
        distractorProfile: "incomplete_workup_missing_underlying_cause",
        incorrectFeedback: "El derrame pleural y el neumomediastino en este contexto clínico son secundarios a la perforación esofágica, no a un neumotórax espontáneo primario; colocar solo un tubo de tórax sin identificar y reparar la fuga esofágica deja progresar la mediastinitis subyacente, que es la verdadera amenaza vital.",
      },
      {
        id: "D",
        label: "D",
        text: "Tromboembolismo pulmonar masivo; angiotomografía de arterias pulmonares como estudio de elección.",
        distractorProfile: "wrong_diagnosis_ignoring_temporal_sequence",
        incorrectFeedback: "El TEP no explica el enfisema subcutáneo cervical ni la secuencia característica de dolor inmediatamente posterior al vómito forzado; estos hallazgos son mucho más específicos de una ruptura esofágica que de un evento tromboembólico pulmonar.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un **Síndrome de Boerhaave**, una ruptura esofágica espontánea de espesor completo, causada por un aumento súbito y masivo de la presión intraesofágica durante el vómito forzado contra un cricofaríngeo que no se relaja adecuadamente (frecuentemente en el contexto de vómito inducido por alcohol). La tríada clásica (Tríada de Mackler) es vómito seguido de dolor torácico súbito intenso y enfisema subcutáneo. El contenido gástrico y la saliva contaminan el mediastino, generando una mediastinitis química y luego bacteriana rápidamente progresiva, con altísima mortalidad si el tratamiento se retrasa. Ante la sospecha, el estudio confirmatorio de elección es un **esofagograma con contraste hidrosoluble** (como Gastrografín, evitando el bario que es irritante si escapa al mediastino) o una TAC con contraste oral, que confirman la fuga esofágica y guían la decisión quirúrgica (reparación primaria, generalmente urgente).",
    keyPoints: [
    "Vómito intenso/forzado seguido INMEDIATAMENTE de dolor torácico súbito intenso + enfisema subcutáneo cervical.; Neumomediastino en la radiografía de tórax.",
    "Síndrome de Boerhaave (Tríada de Mackler: vómito + dolor torácico + enfisema subcutáneo). Estudio confirmatorio: Esofagograma con contraste HIDROSOLUBLE (nunca bario). Es una emergencia quirúrgica por altísimo riesgo de mediastinitis.",
    "Emergencias Gastroenterológicas / Síndrome de Boerhaave."
],
  },
  {
    id: "ucc-conv-2026-09-06-17",
    university: "UCC",
    examArea: "MEDICINA INTERNA - ENDOCRINOLOGÍA / CIRUGÍA",
    topic: "Endocrinología Quirúrgica",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","endocrinolog-a-quir-rgica","endocrinolog","a","quir","rgica"],
    statement: "Una mujer de 42 años, en el segundo día del postoperatorio de una resección de una masa suprarrenal derecha (programada tras hallazgo incidental), presenta durante la manipulación quirúrgica del tumor episodios súbitos de cefalea pulsátil intensa, palpitaciones, sudoración profusa y picos hipertensivos hasta 240/130 mmHg alternados con episodios de hipotensión severa tras la ligadura de la vena suprarrenal. Previo a la cirugía, la paciente había sido preparada únicamente con un betabloqueador para controlar la taquicardia basal. ¿Cuál fue el ERROR en la preparación preoperatoria que probablemente explica esta inestabilidad hemodinámica extrema durante el procedimiento?",
    options: [
      {
        id: "A",
        label: "A",
        text: "No haberse realizado una angiotomografía suprarrenal antes de la cirugía para planear el abordaje quirúrgico.",
        distractorProfile: "wrong_category_of_error",
        incorrectFeedback: "Aunque la imagen preoperatoria es importante para la planeación quirúrgica, la inestabilidad hemodinámica extrema descrita se explica específicamente por un error farmacológico en la secuencia del bloqueo adrenérgico, no por la ausencia de un estudio de imagen.",
      },
      {
        id: "B",
        label: "B",
        text: "No haber iniciado un bloqueo alfa-adrenérgico (ej. Fenoxibenzamina) ANTES del betabloqueador, permitiendo una vasoconstricción sin oposición.",
      },
      {
        id: "C",
        label: "C",
        text: "No haber administrado corticoides de reemplazo profilácticos antes de remover la glándula suprarrenal.",
        distractorProfile: "wrong_complication_category",
        incorrectFeedback: "El reemplazo de corticoides es relevante cuando se realiza una suprarrenalectomía bilateral o hay sospecha de insuficiencia adrenal postoperatoria, pero no explica la inestabilidad hemodinámica hipertensiva-hipotensiva intraoperatoria característica del manejo inadecuado de un feocromocitoma.",
      },
      {
        id: "D",
        label: "D",
        text: "No haber realizado profilaxis antibiótica adecuada antes del procedimiento quirúrgico suprarrenal.",
        distractorProfile: "irrelevant_distractor",
        incorrectFeedback: "La profilaxis antibiótica previene infecciones del sitio quirúrgico, pero no tiene ninguna relación fisiopatológica con las crisis hipertensivas y la inestabilidad hemodinámica que ocurren por liberación de catecolaminas durante la manipulación de un feocromocitoma inadecuadamente preparado.",
      },
    ],
    correctOptionId: "B",
    explanation: "La paciente presentaba un **Feocromocitoma**, un tumor secretor de catecolaminas (adrenalina y noradrenalina) que causa crisis hipertensivas severas, especialmente durante la manipulación quirúrgica del tumor (que libera catecolaminas almacenadas de forma masiva a la circulación). La regla de oro absoluta e innegociable en la preparación preoperatoria del feocromocitoma es iniciar **primero un bloqueo alfa-adrenérgico** (típicamente con Fenoxibenzamina, un alfabloqueante no selectivo e irreversible) durante al menos 10-14 días antes de la cirugía, y **solo después** añadir un betabloqueador si es necesario para controlar la taquicardia refleja. Si se administra un betabloqueador SIN bloqueo alfa previo, se bloquean los receptores beta-2 vasodilatadores mientras los receptores alfa vasoconstrictores quedan \"sin oposición\", generando una vasoconstricción extrema y periférica que puede desencadenar una **crisis hipertensiva catastrófica**, exactamente el escenario descrito en esta paciente.",
    keyPoints: [
    "Preparación preoperatoria de un Feocromocitoma con inestabilidad hemodinámica extrema intraoperatoria.",
    "Error de secuencia: se debe bloquear PRIMERO el receptor Alfa (Fenoxibenzamina) y DESPUÉS, si es necesario, el receptor Beta. Betabloquear primero causa vasoconstricción sin oposición alfa y crisis hipertensiva severa. Regla mnemotécnica: \"Alfa antes que Beta, siempre\".",
    "Endocrinología Quirúrgica / Feocromocitoma."
],
  },
  {
    id: "ucc-conv-2026-09-06-18",
    university: "UCC",
    examArea: "PEDIATRÍA - UROLOGÍA / URGENCIAS",
    topic: "Urología Pediátrica",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","urolog-a-pedi-trica","urolog","a","pedi","trica"],
    statement: "Un adolescente de 13 años consulta a urgencias por dolor testicular derecho intenso y súbito de 4 horas de evolución, que lo despertó del sueño, asociado a náuseas y un episodio de vómito. Niega trauma, fiebre o síntomas urinarios. Al examen físico, el testículo derecho está edematizado, muy doloroso a la palpación, con posición horizontal (\"en badajo de campana\") y ascendido respecto al contralateral. El reflejo cremastérico está ausente del lado derecho, y la elevación manual del testículo NO alivia el dolor (Signo de Prehn negativo). ¿Cuál es la conducta MÁS URGENTE e indispensable, considerando el tiempo transcurrido desde el inicio de los síntomas?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Ecografía Doppler testicular urgente, y SOLO tras confirmar el diagnóstico por imagen, proceder a exploración quirúrgica.",
        distractorProfile: "unnecessary_delay_in_time_critical_condition",
        incorrectFeedback: "Aunque el Doppler testicular es útil cuando el diagnóstico es incierto, exigirlo sistemáticamente antes de la cirugía en un cuadro clínico tan característico retrasa peligrosamente la destorsión en una condición donde cada hora adicional reduce significativamente las probabilidades de salvar el testículo.",
      },
      {
        id: "B",
        label: "B",
        text: "Exploración quirúrgica urgente INMEDIATA sin retrasar el procedimiento por estudios de imagen, dado el tiempo transcurrido.",
      },
      {
        id: "C",
        label: "C",
        text: "Manejo conservador con analgesia y antiinflamatorios, con reevaluación en 24 horas si no hay mejoría.",
        distractorProfile: "dangerously_passive_management",
        incorrectFeedback: "El manejo conservador en la torsión testicular garantiza la pérdida del testículo por necrosis isquémica irreversible; esta es una emergencia quirúrgica verdadera que no admite manejo expectante bajo ninguna circunstancia.",
      },
      {
        id: "D",
        label: "D",
        text: "Antibioticoterapia empírica de amplio espectro asumiendo una epididimitis aguda como diagnóstico más probable.",
        distractorProfile: "wrong_diagnosis_missing_differentiating_signs",
        incorrectFeedback: "La epididimitis típicamente se asocia a síntomas urinarios, fiebre, y el Signo de Prehn POSITIVO (alivio del dolor al elevar el testículo); la ausencia de estos hallazgos junto con el reflejo cremastérico ausente hace mucho más probable la torsión testicular, que requiere manejo quirúrgico urgente, no antibióticos.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con una **Torsión Testicular**, una emergencia urológica verdadera en la que el cordón espermático se retuerce sobre sí mismo, comprometiendo el flujo sanguíneo arterial al testículo. El cuadro clásico es dolor testicular súbito e intenso (frecuentemente nocturno), náuseas/vómito, testículo ascendido en posición horizontal, ausencia del reflejo cremastérico, y Signo de Prehn negativo (la elevación del testículo no alivia, y a veces empeora, el dolor; a diferencia de la epididimitis, donde sí lo alivia). La **viabilidad testicular depende críticamente del tiempo de isquemia**: las tasas de salvamento testicular son excelentes dentro de las primeras 6 horas, mientras que después de 12-24 horas caen dramáticamente. Dado que este paciente ya lleva 4 horas de evolución y el cuadro clínico es altamente característico, la conducta correcta es la **exploración quirúrgica urgente inmediata** para destorsión y fijación (orquidopexia), sin retrasar el procedimiento esperando una ecografía Doppler si esto implica pérdida de tiempo valioso, ya que el diagnóstico es fundamentalmente clínico.",
    keyPoints: [
    "Dolor testicular súbito intenso (frecuentemente nocturno) + testículo ascendido horizontal + reflejo cremastérico ausente + Signo de Prehn NEGATIVO.",
    "Torsión Testicular (emergencia urológica tiempo-dependiente). Regla de oro: la viabilidad testicular cae drásticamente después de 6 horas de isquemia. Ante alta sospecha clínica, la exploración quirúrgica NO debe retrasarse esperando estudios de imagen.",
    "Urología Pediátrica / Torsión Testicular."
],
  },
  {
    id: "ucc-conv-2026-09-06-19",
    university: "UCC",
    examArea: "MEDICINA INTERNA - HEMATOLOGÍA / NEFROLOGÍA",
    topic: "Microangiopatías Trombóticas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","microangiopat-as-tromb-ticas","microangiopat","as","tromb","ticas"],
    statement: "Una mujer de 38 años consulta por un cuadro de 3 días de fiebre, confusión progresiva, y aparición de petequias generalizadas. Al examen físico está desorientada en tiempo y espacio, con palidez cutáneo-mucosa marcada y petequias difusas en tronco y extremidades, sin adenopatías ni organomegalias. Los laboratorios muestran: Hemoglobina 7.2 g/dL, Plaquetas 12.000/mm³, Creatinina 2.1 mg/dL (elevada), LDH marcadamente elevada, Bilirrubina indirecta elevada, y un frotis de sangre periférica que revela **abundantes esquistocitos** (glóbulos rojos fragmentados). El tiempo de protrombina y TPTa son NORMALES, y el fibrinógeno es normal. ¿Cuál es el tratamiento de PRIMERA LÍNEA que debe iniciarse de forma urgente, y qué intervención terapéutica está CONTRAINDICADA en este cuadro salvo sangrado activo grave?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Transfusión profiláctica de plaquetas de forma urgente; no se requiere ninguna otra intervención específica.",
        distractorProfile: "dangerous_treatment_worsening_microthrombosis",
        incorrectFeedback: "Transfundir plaquetas de forma profiláctica en PTT puede precipitar o empeorar la formación de microtrombos, aumentando el riesgo de isquemia cerebral, cardíaca o renal catastrófica; está formalmente contraindicada salvo sangrado activo potencialmente mortal.",
      },
      {
        id: "B",
        label: "B",
        text: "Plasmaféresis (recambio plasmático) urgente; la transfusión profiláctica de plaquetas está CONTRAINDICADA salvo hemorragia grave.",
      },
      {
        id: "C",
        label: "C",
        text: "Heparina en dosis terapéutica para tratar la microangiopatía trombótica subyacente; transfusión de plaquetas según necesidad.",
        distractorProfile: "wrong_mechanism_treatment",
        incorrectFeedback: "La Heparina actúa sobre la cascada de coagulación plasmática, que está preservada en la PTT; el problema aquí es la agregación plaquetaria mediada por multímeros de FvW, un mecanismo que la anticoagulación con Heparina no corrige, siendo la plasmaféresis el tratamiento causal correcto.",
      },
      {
        id: "D",
        label: "D",
        text: "Antibioticoterapia empírica de amplio espectro asumiendo sepsis con coagulación intravascular diseminada (CID).",
        distractorProfile: "wrong_diagnosis_ignoring_lab_differentiator",
        incorrectFeedback: "Los tiempos de coagulación (TP/TPTa) y el fibrinógeno normales son incompatibles con CID, donde estos parámetros están clásicamente alterados por el consumo masivo de factores; estos hallazgos de laboratorio apuntan específicamente a PTT, no a una coagulopatía séptica de consumo.",
      },
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con **Púrpura Trombocitopénica Trombótica (PTT)**, una microangiopatía trombótica caracterizada por la péntada clásica (aunque no siempre completa): anemia hemolítica microangiopática (esquistocitos, LDH elevada, bilirrubina indirecta elevada), trombocitopenia severa, alteración neurológica fluctuante, fiebre y disfunción renal. La clave diagnóstica diferencial clave frente a la CID es que en la PTT los **tiempos de coagulación (TP/TPTa) y el fibrinógeno son NORMALES**, ya que el problema no es un consumo generalizado de factores de coagulación sino una deficiencia (congénita o, más frecuentemente, autoinmune adquirida) de la enzima **ADAMTS13**, que normalmente corta los multímeros ultragrandes del Factor von Willebrand; sin ella, estos multímeros causan agregación plaquetaria espontánea y microtrombos que ocluyen la microvasculatura de múltiples órganos. El tratamiento de elección y verdaderamente salvador es la **plasmaféresis urgente** (que remueve los autoanticuerpos y los multímeros anormales, y repone ADAMTS13). Crucialmente, la **transfusión de plaquetas está CONTRAINDICADA** salvo sangrado activo potencialmente mortal, ya que puede \"alimentar\" la formación de más microtrombos y empeorar catastróficamente la isquemia de órganos, especialmente cerebral.",
    keyPoints: [
    "Anemia hemolítica microangiopática (esquistocitos) + Trombocitopenia + Alteración neurológica + Fiebre + Falla renal.; TP/TPTa y Fibrinógeno NORMALES (esto diferencia PTT de CID).",
    "Púrpura Trombocitopénica Trombótica (PTT). Tratamiento: Plasmaféresis URGENTE. Transfusión de plaquetas CONTRAINDICADA (salvo sangrado grave), porque puede empeorar la microtrombosis.",
    "Microangiopatías Trombóticas / Púrpura Trombocitopénica Trombótica."
],
  },
  {
    id: "ucc-conv-2026-09-06-20",
    university: "UCC",
    examArea: "MEDICINA INTERNA - TOXICOLOGÍA / PSIQUIATRÍA",
    topic: "Toxicología",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","toxicolog-a","toxicolog","a"],
    statement: "Un hombre de 27 años, con antecedente de depresión mayor en tratamiento con un Inhibidor Selectivo de la Recaptación de Serotonina (Sertralina), es traído a urgencias por su pareja tras notarlo agitado, confuso y con movimientos anormales, aproximadamente 6 horas después de haber tomado, por error, una dosis adicional de un suplemento de \"5-HTP\" que compró sin prescripción para mejorar su ánimo. Al examen físico: agitación psicomotora marcada, diaforesis profusa, temperatura 39.8°C, **clonus espontáneo y clonus ocular**, hiperreflexia generalizada más marcada en miembros inferiores, y rigidez muscular leve. No hay antecedente de uso de antipsicóticos. ¿Cuál es el diagnóstico más probable y el tratamiento farmacológico específico que debe considerarse en los casos moderados a severos, además de la suspensión inmediata de los agentes serotoninérgicos y las medidas de soporte?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Síndrome Neuroléptico Maligno; el tratamiento específico es Bromocriptina (agonista dopaminérgico).",
        distractorProfile: "classic_confusable_diagnosis",
        incorrectFeedback: "El Síndrome Neuroléptico Maligno se caracteriza por rigidez muscular generalizada \"en tubo de plomo\" con reflejos disminuidos o normales, se desarrolla en días (no horas) y ocurre típicamente tras el uso de antipsicóticos bloqueadores dopaminérgicos, ninguno de los cuales está presente en esta viñeta; el hallazgo de clonus e hiperreflexia apunta específicamente al Síndrome Serotoninérgico.",
      },
      {
        id: "B",
        label: "B",
        text: "Síndrome Serotoninérgico; el tratamiento específico en casos moderados-severos es Ciproheptadina (antagonista serotoninérgico).",
      },
      {
        id: "C",
        label: "C",
        text: "Hipertermia Maligna; el tratamiento específico es Dantroleno intravenoso como antídoto principal.",
        distractorProfile: "wrong_context_and_mechanism",
        incorrectFeedback: "La Hipertermia Maligna ocurre en el contexto de exposición a anestésicos inhalados o succinilcolina en pacientes con susceptibilidad genética (mutación del receptor de rianodina), un escenario completamente distinto al de este paciente, que no tuvo exposición anestésica alguna.",
      },
      {
        id: "D",
        label: "D",
        text: "Delirium por abstinencia alcohólica; el tratamiento específico son las benzodiacepinas en dosis crecientes tituladas.",
        distractorProfile: "wrong_etiology_ignoring_medication_history",
        incorrectFeedback: "No hay antecedente de consumo crónico de alcohol ni de suspensión reciente descrito en la viñeta; el antecedente claro de uso combinado de ISRS y un suplemento serotoninérgico (5-HTP), junto con el clonus característico, hace mucho más probable el Síndrome Serotoninérgico que un delirium tremens.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un **Síndrome Serotoninérgico**, causado por un exceso de actividad serotoninérgica en el sistema nervioso central, típicamente por la combinación de dos o más agentes serotoninérgicos (en este caso, un ISRS más un suplemento de 5-HTP, precursor directo de la serotonina). La tríada clásica incluye alteración del estado mental (agitación, confusión), hiperactividad autonómica (fiebre, diaforesis, taquicardia) y anormalidades neuromusculares, siendo el hallazgo más específico y distintivo el **clonus (especialmente el clonus ocular y el espontáneo) e hiperreflexia de predominio en miembros inferiores**, a diferencia del Síndrome Neuroléptico Maligno, que cursa con rigidez \"en tubo de plomo\" y reflejos habitualmente DISMINUIDOS o normales, no hiperreflexia con clonus. El manejo inicial es la suspensión inmediata de todos los agentes serotoninérgicos, medidas de soporte (hidratación, control de la hipertermia con medios físicos) y benzodiacepinas para la agitación; en casos moderados a severos, se añade **Ciproheptadina**, un antagonista de los receptores de serotonina, como tratamiento farmacológico específico.",
    keyPoints: [
    "Paciente con uso de agentes serotoninérgicos (ISRS, IMAO, tramadol, 5-HTP, triptanes) + agitación + fiebre + CLONUS/hiperreflexia (predominio en piernas).",
    "Síndrome Serotoninérgico. Diferencial clave con Síndrome Neuroléptico Maligno: el Serotoninérgico tiene CLONUS e HIPERreflexia; el Neuroléptico Maligno tiene rigidez \"en tubo de plomo\" e HIPOrreflexia, y se instala en días (no horas). Tratamiento específico: Ciproheptadina.",
    "Toxicología / Síndrome Serotoninérgico."
],
  }
];
