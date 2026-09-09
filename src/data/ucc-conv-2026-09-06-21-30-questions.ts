import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #7 (6 sep 2026) · Preguntas #21–#30.
 * Banco exclusivo del examen oficial.
 */
export const UCC_CONV_2026_09_06_21_30_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2026-09-06-21",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEUMOLOGÍA / URGENCIAS",
    topic: "Urgencias Respiratorias",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","urgencias-respiratorias","urgencias","respiratorias"],
    statement: "Un hombre de 26 años, alto y delgado, sin antecedentes patológicos, es traído a urgencias por dificultad respiratoria súbita y dolor torácico pleurítico derecho intensos, que iniciaron mientras dormía. Al ingreso: taquipnea marcada (FR 34 rpm), SatO2 82% con aire ambiente, hipotensión progresiva (PA 78/50 mmHg), taquicardia (FC 138 lpm), y **desviación traqueal hacia la izquierda**, con ausencia total de ruidos respiratorios en el hemitórax derecho y timpanismo a la percusión. Las venas yugulares están distendidas. ¿Cuál es la conducta terapéutica INMEDIATA que debe realizarse ANTES de obtener cualquier estudio de imagen, dado el compromiso hemodinámico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Radiografía de tórax urgente para confirmar el diagnóstico antes de cualquier intervención.",
        distractorProfile: "dangerous_diagnostic_delay_in_clinical_diagnosis",
        incorrectFeedback: "El neumotórax a tensión es un diagnóstico clínico que no debe esperar confirmación radiológica; el paciente puede sufrir un paro cardiorrespiratorio por colapso circulatorio mientras se traslada y se espera el resultado de la placa.",
      },
      {
        id: "B",
        label: "B",
        text: "Descompresión con aguja (toracocentesis con aguja) en el segundo espacio intercostal línea medioclavicular, de inmediato.",
      },
      {
        id: "C",
        label: "C",
        text: "Intubación orotraqueal inmediata como primera prioridad, seguida de ventilación mecánica.",
        distractorProfile: "wrong_priority_worsening_mechanism",
        incorrectFeedback: "Intubar y ventilar con presión positiva sin descomprimir primero el neumotórax a tensión puede empeorar catastróficamente la acumulación de aire a presión en el tórax, precipitando un colapso hemodinámico aún más severo; la descompresión siempre precede a la vía aérea definitiva en este escenario específico.",
      },
      {
        id: "D",
        label: "D",
        text: "Administración de un broncodilatador nebulizado de acción rápida, asumiendo una crisis asmática severa.",
        distractorProfile: "wrong_diagnosis_missing_asymmetry",
        incorrectFeedback: "La asimetría marcada de los ruidos respiratorios, la desviación traqueal y las yugulares distendidas no son compatibles con una crisis asmática (que típicamente es bilateral y simétrica); estos hallazgos son específicos de un proceso compresivo unilateral como el neumotórax a tensión.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un **Neumotórax a Tensión**, una emergencia respiratoria y hemodinámica inmediatamente mortal. Ocurre cuando el aire entra a la cavidad pleural a través de un mecanismo valvular unidireccional (que permite la entrada pero no la salida de aire), acumulando presión positiva progresiva que colapsa el pulmón, desplaza el mediastino hacia el lado contralateral (desviación traqueal) y comprime la vena cava, reduciendo drásticamente el retorno venoso al corazón (explicando la hipotensión y las yugulares distendidas). Este es un **diagnóstico exclusivamente CLÍNICO** que exige tratamiento inmediato sin esperar confirmación radiológica: la **descompresión con aguja** en el segundo espacio intercostal, línea medioclavicular (o en algunos protocolos actuales, el quinto espacio intercostal, línea axilar anterior) convierte el neumotórax a tensión en uno simple, aliviando la presión intratorácica de forma inmediata, y posteriormente se coloca un tubo de tórax definitivo.",
    keyPoints: [
    "Dificultad respiratoria súbita + hipotensión + desviación traqueal CONTRALATERAL + ausencia de ruidos respiratorios + yugulares distendidas.",
    "Neumotórax a Tensión (diagnóstico CLÍNICO, no radiológico). Tratamiento inmediato: Descompresión con aguja (2do espacio intercostal, línea medioclavicular), SIN esperar radiografía. Después: tubo de tórax definitivo.",
    "Urgencias Respiratorias / Neumotórax a Tensión."
],
  },
  {
    id: "ucc-conv-2026-09-06-22",
    university: "UCC",
    examArea: "MEDICINA INTERNA - CARDIOLOGÍA / URGENCIAS",
    topic: "Arritmias Cardíacas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","arritmias-card-acas","arritmias","card","acas"],
    statement: "Una mujer de 31 años, con antecedente conocido de Síndrome de Wolff-Parkinson-White (documentado por electrocardiograma previo con onda delta), consulta por palpitaciones súbitas e intensas de 30 minutos de evolución, asociadas a mareo. El electrocardiograma muestra una taquicardia de complejo QRS ancho, irregularmente irregular, con frecuencia variable entre 180-250 lpm, y morfología cambiante latido a latido. La paciente está consciente, con PA 100/65 mmHg. Ante este hallazgo de Fibrilación Auricular preexcitada, ¿qué grupo farmacológico está ABSOLUTAMENTE CONTRAINDICADO en este contexto por el riesgo de precipitar Fibrilación Ventricular?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Antiarrítmicos de clase IC (como Procainamida), que deben evitarse en cualquier taquiarritmia de complejo ancho.",
        distractorProfile: "overgeneralized_wrong_contraindication",
        incorrectFeedback: "La Procainamida es en realidad uno de los fármacos de elección en la fibrilación auricular preexcitada estable, porque actúa enlenteciendo la conducción por la vía accesoria misma, a diferencia de los bloqueadores del nodo AV que son los verdaderamente peligrosos en este contexto.",
      },
      {
        id: "B",
        label: "B",
        text: "Bloqueadores del nodo AV: Adenosina, Betabloqueadores, Calcioantagonistas no dihidropiridínicos y Digoxina.",
      },
      {
        id: "C",
        label: "C",
        text: "Cardioversión eléctrica sincronizada, que está contraindicada en cualquier paciente con preexcitación ventricular.",
        distractorProfile: "wrong_contraindication_of_safe_therapy",
        incorrectFeedback: "La cardioversión eléctrica sincronizada es segura y es el tratamiento de elección en el paciente INESTABLE con fibrilación auricular preexcitada, independientemente del mecanismo subyacente; no existe contraindicación por la presencia de una vía accesoria.",
      },
      {
        id: "D",
        label: "D",
        text: "Amiodarona intravenosa, que está formalmente contraindicada en todas las taquiarritmias con QRS ancho.",
        distractorProfile: "overgeneralized_wrong_contraindication",
        incorrectFeedback: "Aunque la Amiodarona intravenosa tiene cierto efecto bloqueador del nodo AV (y por eso algunos expertos también la evitan en preexcitación, prefiriendo Procainamida), no es la opción con el riesgo más claro y absoluto de precipitar fibrilación ventricular como sí lo son los bloqueadores puros del nodo AV (Adenosina, Betabloqueadores, Calcioantagonistas no-DHP y Digoxina).",
      },
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con una **Fibrilación Auricular Preexcitada** en el contexto de un Síndrome de Wolff-Parkinson-White, donde existe una vía accesoria (Haz de Kent) que conecta aurículas y ventrículos evitando el nodo AV. En la fibrilación auricular, los impulsos auriculares caóticos normalmente son \"filtrados\" y enlentecidos por el nodo AV; pero cuando existe una vía accesoria, los impulsos pueden conducirse directamente a los ventrículos SIN ese filtro protector, a frecuencias extremadamente altas. Los **bloqueadores del nodo AV (Adenosina, Betabloqueadores, Verapamilo/Diltiazem, Digoxina) están absolutamente CONTRAINDICADOS** en este escenario específico, porque al bloquear el nodo AV (la vía \"lenta\" normal), fuerzan a que TODA la conducción caótica auricular pase exclusivamente por la vía accesoria (la vía \"rápida\"), lo que puede acelerar paradójicamente la respuesta ventricular hasta degenerar en **Fibrilación Ventricular** y muerte súbita. El manejo en el paciente inestable es la cardioversión eléctrica sincronizada; en el estable, se prefieren antiarrítmicos que actúan sobre la vía accesoria como la Procainamida o la Ibutilida.",
    keyPoints: [
    "Fibrilación Auricular con QRS ANCHO, IRREGULAR, de frecuencia muy alta y variable, en paciente con WPW conocido.",
    "Fibrilación Auricular Preexcitada. REGLA DE ORO: NUNCA bloquear el nodo AV (nada de Adenosina, Betabloqueadores, Calcioantagonistas no-DHP ni Digoxina) porque puede precipitar Fibrilación Ventricular. Si inestable: Cardioversión eléctrica. Si estable: Procainamida.",
    "Arritmias Cardíacas / Fibrilación Auricular Preexcitada en WPW."
],
  },
  {
    id: "ucc-conv-2026-09-06-23",
    university: "UCC",
    examArea: "PEDIATRÍA - GASTROENTEROLOGÍA / NEONATOLOGÍA",
    topic: "Urgencias Neonatales",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","urgencias-neonatales","urgencias","neonatales"],
    statement: "Un recién nacido pretérmino de 29 semanas de gestación, en su día 12 de vida en la Unidad de Cuidados Intensivos Neonatales, alimentado con fórmula láctea, presenta intolerancia alimentaria progresiva con distensión abdominal, residuos gástricos biliosos, y un episodio de deposición con sangre franca. Al examen físico: abdomen distendido, tenso, con eritema de la pared abdominal y ruidos intestinales disminuidos. El neonato presenta episodios de apnea y letargia. Una radiografía de abdomen simple muestra **neumatosis intestinal** (gas dentro de la pared intestinal) y dilatación de asas. ¿Cuál es el manejo INICIAL prioritario ante este cuadro, antes de considerar la intervención quirúrgica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar alimentación enteral con leche materna exclusiva, ya que mejora directamente la integridad de la mucosa intestinal dañada.",
        distractorProfile: "dangerous_continuation_of_offending_stimulus",
        incorrectFeedback: "Aunque la leche materna es protectora para PREVENIR la ECN, una vez que el diagnóstico ya está establecido con neumatosis intestinal, cualquier alimentación enteral (incluida la leche materna) debe suspenderse completamente para dar reposo al intestino inflamado y evitar progresión a necrosis o perforación.",
      },
      {
        id: "B",
        label: "B",
        text: "Suspender TODA alimentación enteral (reposo intestinal absoluto), descompresión con sonda orogástrica, antibióticos de amplio espectro y soporte hemodinámico.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar procinéticos (como Metoclopramida) para estimular el tránsito intestinal y resolver la distensión.",
        distractorProfile: "wrong_pharmacologic_approach",
        incorrectFeedback: "Los procinéticos aumentan la actividad motora de un intestino que ya está isquémico e inflamado, lo cual puede empeorar el daño de la pared intestinal comprometida; el manejo correcto es el reposo intestinal absoluto, no la estimulación de la motilidad.",
      },
      {
        id: "D",
        label: "D",
        text: "Laparotomía exploratoria inmediata en todos los casos, independientemente del estado clínico o hemodinámico del neonato.",
        distractorProfile: "unnecessary_universal_surgical_approach",
        incorrectFeedback: "La mayoría de los casos de ECN, especialmente en estadios tempranos sin perforación, responden favorablemente al manejo médico; la cirugía se reserva para perforación confirmada o deterioro clínico refractario al tratamiento médico máximo, no como conducta universal inicial.",
      },
    ],
    correctOptionId: "B",
    explanation: "El neonato cursa con **Enterocolitis Necrotizante (ECN)**, una emergencia gastrointestinal grave típica de prematuros, caracterizada por isquemia e inflamación de la pared intestinal que puede progresar a necrosis transmural y perforación. Los hallazgos clave son intolerancia alimentaria (residuos biliosos), distensión abdominal, sangre en heces, y el hallazgo radiológico patognomónico de **neumatosis intestinal** (gas producido por bacterias dentro de la propia pared intestinal dañada). El manejo INICIAL, en ausencia de perforación confirmada (neumoperitoneo) o inestabilidad que requiera cirugía inmediata, es **estrictamente médico**: suspensión completa de la alimentación enteral para dar \"reposo intestinal\", descompresión gástrica con sonda orogástrica en aspiración continua, inicio de antibióticos de amplio espectro con cobertura para gérmenes entéricos y anaerobios, soporte hemodinámico y nutrición parenteral total, con vigilancia radiológica y clínica seriada estrecha para detectar signos de perforación que sí requerirían cirugía urgente.",
    keyPoints: [
    "Prematuro con intolerancia alimentaria + distensión abdominal + sangre en heces + Neumatosis intestinal en radiografía.",
    "Enterocolitis Necrotizante (ECN). Manejo inicial: Reposo intestinal absoluto (NADA por vía oral) + Descompresión con SOG + Antibióticos de amplio espectro + Soporte. Cirugía SOLO si hay perforación (neumoperitoneo) o deterioro clínico refractario.",
    "Urgencias Neonatales / Enterocolitis Necrotizante."
],
  },
  {
    id: "ucc-conv-2026-09-06-24",
    university: "UCC",
    examArea: "GINECOLOGÍA - URGENCIAS",
    topic: "Urgencias Ginecológicas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","urgencias-ginecol-gicas","urgencias","ginecol","gicas"],
    statement: "Una mujer de 24 años consulta a urgencias por dolor pélvico derecho súbito e intenso, de tipo cólico, que inició hace 3 horas mientras hacía ejercicio, asociado a náuseas y un episodio de vómito. Refiere que tiene un quiste ovárico derecho conocido de 6 cm, diagnosticado incidentalmente hace 2 meses. Al examen físico: dolor intenso a la palpación en fosa ilíaca derecha, con defensa muscular leve, sin fiebre. Al tacto vaginal hay dolor a la movilización del anexo derecho, con una masa palpable dolorosa. La ecografía Doppler muestra un ovario derecho aumentado de tamaño (8 cm), edematoso, con **ausencia de flujo Doppler venoso y arterial disminuido/ausente**, y líquido libre escaso en fondo de saco. La prueba de embarazo es negativa. ¿Cuál es la conducta terapéutica MÁS URGENTE ante este cuadro?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Manejo expectante con analgesia y control ecográfico en 24 horas, dado que la paciente no tiene fiebre ni signos de peritonitis franca.",
        distractorProfile: "dangerously_passive_management_time_critical",
        incorrectFeedback: "La ausencia de fiebre no descarta la urgencia del cuadro; la torsión ovárica es tiempo-dependiente para la viabilidad del órgano, y esperar 24 horas para reevaluar aumenta significativamente el riesgo de necrosis irreversible y pérdida definitiva del ovario.",
      },
      {
        id: "B",
        label: "B",
        text: "Laparoscopia exploratoria urgente para detorsión ovárica (y preservación del ovario si es viable), sin retrasar el procedimiento.",
      },
      {
        id: "C",
        label: "C",
        text: "Antibioticoterapia empírica de amplio espectro asumiendo un absceso tubo-ovárico como diagnóstico principal.",
        distractorProfile: "wrong_diagnosis_missing_vascular_findings",
        incorrectFeedback: "La ausencia de fiebre y el hallazgo Doppler de flujo vascular ausente o marcadamente disminuido son incompatibles con un absceso tubo-ovárico (que cursaría con fiebre, leucocitosis marcada y flujo Doppler generalmente aumentado por la hiperemia inflamatoria); estos hallazgos apuntan directamente a un compromiso vascular por torsión.",
      },
      {
        id: "D",
        label: "D",
        text: "Aspiración percutánea guiada por ecografía del quiste ovárico como tratamiento definitivo y suficiente.",
        distractorProfile: "incomplete_treatment_missing_the_actual_problem",
        incorrectFeedback: "El problema central no es el tamaño del quiste sino la torsión del pedículo vascular ovárico; aspirar el quiste no destuerce el ovario ni restaura el flujo sanguíneo, dejando al tejido ovárico progresando hacia la necrosis isquémica.",
      },
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con una **Torsión Anexial (Torsión de Ovario)**, una emergencia ginecológica en la que el ovario (frecuentemente aumentado de tamaño por un quiste, como en este caso) rota sobre su pedículo vascular, comprometiendo primero el retorno venoso (de menor presión, se ocluye primero) y posteriormente el flujo arterial, generando isquemia progresiva del tejido ovárico. El dolor súbito, frecuentemente asociado a un desencadenante como el ejercicio o el cambio de posición, junto con los hallazgos ecográficos de ausencia de flujo Doppler, son altamente sugestivos. Al igual que en la torsión testicular, la **viabilidad del ovario depende del tiempo de isquemia**, por lo que la conducta correcta es la **laparoscopia exploratoria urgente** para realizar la detorsión manual del pedículo, evaluar la viabilidad del tejido, y preservar el ovario siempre que sea posible (incluso si su aspecto inicial parece comprometido, muchos ovarios recuperan viabilidad tras la detorsión), sin retrasar el procedimiento por estudios adicionales.",
    keyPoints: [
    "Dolor pélvico unilateral súbito e intenso + masa/quiste ovárico conocido + Doppler con flujo ausente o disminuido.",
    "Torsión Anexial (Torsión de Ovario). Emergencia quirúrgica tiempo-dependiente. Conducta: Laparoscopia urgente para DETORSIÓN (preservando el ovario siempre que sea posible), sin retrasos innecesarios.",
    "Urgencias Ginecológicas / Torsión Anexial."
],
  },
  {
    id: "ucc-conv-2026-09-06-25",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEUROLOGÍA / URGENCIAS",
    topic: "Urgencias Neurológicas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","urgencias-neurol-gicas","urgencias","neurol","gicas"],
    statement: "Un hombre de 40 años, con antecedente de epilepsia en tratamiento irregular con Ácido Valproico (refiere haber suspendido la medicación hace una semana por \"olvido\"), es traído a urgencias en convulsión tónico-clónica generalizada activa desde hace 8 minutos según testigos, sin recuperación de la conciencia entre episodios. Al ingreso continúa convulsionando. Se administra Lorazepam intravenoso en dosis adecuada, sin lograr el cese de la actividad convulsiva a los 5 minutos de la administración. Se procede a cargar Fenitoína o Levetiracetam intravenosos, sin embargo, la convulsión persiste 20 minutos después del inicio del cuadro. ¿Cómo se denomina esta condición y cuál es el siguiente paso terapéutico indicado dado el fallo a dos líneas de tratamiento?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Estado Epiléptico Refractario; iniciar anestesia general con infusión continua de Midazolam, Propofol o Pentobarbital, con intubación y monitoreo EEG continuo.",
      },
      {
        id: "B",
        label: "B",
        text: "Estado de mal epiléptico no convulsivo; solicitar un electroencefalograma urgente antes de cualquier tratamiento adicional.",
        distractorProfile: "wrong_subtype_missing_visible_convulsion",
        incorrectFeedback: "El estado epiléptico no convulsivo se caracteriza por alteración persistente del estado de conciencia SIN actividad motora tónico-clónica visible; este paciente tiene convulsiones motoras evidentes y continuas, lo que corresponde a un estado epiléptico convulsivo (ahora refractario), no a la variante no convulsiva.",
      },
      {
        id: "C",
        label: "C",
        text: "Pseudocrisis (crisis no epiléptica psicógena); suspender todo tratamiento farmacológico y solicitar valoración psiquiátrica urgente.",
        distractorProfile: "dangerous_misattribution_to_psychogenic_cause",
        incorrectFeedback: "Asumir un origen psicógeno en un paciente con antecedente conocido de epilepsia, suspensión reciente de su medicación antiepiléptica (un desencadenante clásico) y actividad convulsiva objetivamente documentada es peligroso y puede retrasar fatalmente el tratamiento de una verdadera emergencia neurológica.",
      },
      {
        id: "D",
        label: "D",
        text: "Crisis epiléptica simple prolongada; continuar únicamente con observación clínica sin escalar el tratamiento farmacológico.",
        distractorProfile: "dangerously_passive_underestimation_of_severity",
        incorrectFeedback: "Una convulsión continua de 20 minutos que ya falló a dos líneas de tratamiento adecuadamente administradas constituye por definición un estado epiléptico refractario, no una \"crisis simple\"; no escalar el tratamiento en este punto expone al paciente a daño neuronal progresivo e irreversible.",
      },
    ],
    correctOptionId: "A",
    explanation: "El paciente cursa con un **Estado Epiléptico Refractario**, definido como la actividad convulsiva continua que persiste a pesar de haber recibido una benzodiacepina de primera línea (Lorazepam o Diazepam) Y un segundo agente antiepiléptico de carga (Fenitoína, Levetiracetam o Ácido Valproico intravenosos) en dosis adecuadas. El estado epiléptico en sí mismo (definido operacionalmente como convulsión continua ≥5 minutos, o convulsiones recurrentes sin recuperación de conciencia entre ellas) es una emergencia neurológica que causa daño neuronal progresivo cuanto más se prolonga. Cuando falla el segundo escalón terapéutico, se considera \"refractario\" y el siguiente paso es la **anestesia general con infusión continua** de un agente como Midazolam, Propofol o Pentobarbital, requiriendo intubación orotraqueal para protección de la vía aérea y monitoreo electroencefalográfico continuo para confirmar la supresión de la actividad eléctrica epileptiforme, típicamente en una Unidad de Cuidados Intensivos.",
    keyPoints: [
    "Convulsión continua o recurrente sin recuperación de conciencia, que NO cede tras Benzodiacepina + segundo antiepiléptico IV de carga.",
    "Estado Epiléptico Refractario. Manejo: Anestesia general (Midazolam/Propofol/Pentobarbital en infusión) + Intubación + Monitoreo EEG continuo en UCI. Secuencia: 1º Benzodiacepina → 2º Antiepiléptico de carga (Fenitoína/Levetiracetam/Valproato) → 3º Anestesia general si persiste.",
    "Urgencias Neurológicas / Estado Epiléptico Refractario."
],
  },
  {
    id: "ucc-conv-2026-09-06-26",
    university: "UCC",
    examArea: "CIRUGÍA GENERAL / ORTOPEDIA - URGENCIAS",
    topic: "Urgencias Ortopédicas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","urgencias-ortop-dicas","urgencias","ortop","dicas"],
    statement: "Un hombre de 22 años sufre una fractura cerrada de tibia y peroné tras un accidente en motocicleta, tratada con reducción cerrada e inmovilización con férula rígida circunferencial. Seis horas después, refiere dolor intensísimo y progresivo en la pierna, **desproporcionado** en relación con la lesión y que no cede con los analgésicos opioides administrados a dosis adecuadas. Al examen físico: la pierna está tensa, edematizada, y el dolor se exacerba intensamente con la extensión pasiva de los dedos del pie. Los pulsos distales (pedio y tibial posterior) aún son palpables, aunque algo disminuidos, y hay disminución de la sensibilidad en el primer espacio interdigital. ¿Cuál es la conducta a seguir, considerando que la presencia de pulsos distales palpables NO descarta el diagnóstico sospechado?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Esperar a que desaparezcan los pulsos distales para confirmar el diagnóstico antes de intervenir quirúrgicamente.",
        distractorProfile: "dangerous_reliance_on_late_sign",
        incorrectFeedback: "Esperar la desaparición de los pulsos distales significa esperar a que el daño tisular ya sea extenso e irreversible; los pulsos palpables no descartan el síndrome compartimental porque la presión que compromete la microcirculación muscular es mucho menor que la necesaria para ocluir arterias mayores.",
      },
      {
        id: "B",
        label: "B",
        text: "Retirar INMEDIATAMENTE toda inmovilización circunferencial y medir la presión intracompartimental; si se confirma, fasciotomía urgente.",
      },
      {
        id: "C",
        label: "C",
        text: "Elevar la extremidad por encima del nivel del corazón y aplicar hielo local, reevaluando en 6 horas adicionales.",
        distractorProfile: "dangerous_delay_with_worsening_maneuver",
        incorrectFeedback: "Elevar la extremidad por encima del nivel del corazón en sospecha de síndrome compartimental reduce aún más la presión de perfusión arterial hacia el compartimento comprometido, empeorando la isquemia tisular; el manejo correcto es mantener la extremidad al nivel del corazón y actuar de inmediato, no reevaluar horas después.",
      },
      {
        id: "D",
        label: "D",
        text: "Solicitar una resonancia magnética urgente de la pierna para confirmar el diagnóstico antes de cualquier intervención.",
        distractorProfile: "unnecessary_imaging_delay",
        incorrectFeedback: "El síndrome compartimental agudo es un diagnóstico clínico apoyado por la medición directa de la presión intracompartimental a la cabecera del paciente; solicitar una resonancia magnética retrasa peligrosamente la fasciotomía en una condición donde el tejido muscular tiene una ventana de viabilidad de apenas horas.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un **Síndrome Compartimental Agudo**, una emergencia ortopédica en la que el aumento de la presión dentro de un compartimento muscular cerrado e inextensible (frecuentemente tras fracturas, especialmente de tibia) compromete progresivamente la perfusión tisular, pudiendo llevar a necrosis muscular y nerviosa irreversible en pocas horas. La clave clínica más importante y frecuentemente subestimada es el **dolor desproporcionado** a la lesión aparente, que se exacerba con el **estiramiento pasivo** de los músculos del compartimento afectado (en este caso, la extensión pasiva de los dedos exacerba el dolor del compartimento anterior). Es fundamental entender que los **pulsos distales palpables NO descartan el síndrome compartimental**, ya que la presión necesaria para colapsar arterias de mediano/gran calibre es mucho mayor que la presión que ya compromete la microcirculación capilar y venular, causando isquemia tisular progresiva mucho antes de que los pulsos desaparezcan. La conducta inmediata es **retirar toda inmovilización circunferencial** (que puede estar contribuyendo a la presión) y medir la presión intracompartimental; si se confirma el diagnóstico (clínicamente o por presión elevada), se requiere **fasciotomía quirúrgica urgente** para descomprimir el compartimento y salvar el tejido.",
    keyPoints: [
    "Dolor DESPROPORCIONADO a la lesión, que empeora con el estiramiento PASIVO de los músculos del compartimento.; Pulsos distales AÚN PALPABLES (esto NO descarta el diagnóstico).",
    "Síndrome Compartimental Agudo. Regla de oro: los pulsos palpables NO excluyen el diagnóstico; la presión que compromete la microcirculación es mucho menor que la necesaria para ocluir pulsos mayores. Conducta: Retirar inmovilización + medir presión + Fasciotomía urgente si se confirma.",
    "Urgencias Ortopédicas / Síndrome Compartimental Agudo."
],
  },
  {
    id: "ucc-conv-2026-09-06-27",
    university: "UCC",
    examArea: "MEDICINA INTERNA - ENDOCRINOLOGÍA / URGENCIAS",
    topic: "Urgencias Endocrinológicas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","urgencias-endocrinol-gicas","urgencias","endocrinol","gicas"],
    statement: "Una mujer de 45 años, con antecedente de hipertiroidismo por Enfermedad de Graves en tratamiento irregular con Metimazol, es traída a urgencias tres días después de una extracción dental complicada con infección local. Presenta fiebre de 40°C, taquicardia marcada (FC 165 lpm) con Fibrilación Auricular de nueva aparición, agitación psicomotora severa con confusión, temblor fino generalizado, diaforesis profusa, náuseas y vómito, y diarrea. Al examen físico se palpa bocio difuso y hay exoftalmos bilateral. Los laboratorios muestran TSH suprimida y T4 libre marcadamente elevada. ¿Cuál es el tratamiento farmacológico de PRIMERA LÍNEA, y qué medicamento antitiroideo debe administrarse ANTES que el Yodo (Lugol) para evitar que este último empeore la síntesis hormonal?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar Yodo (Solución de Lugol) inmediatamente, ya que es el tratamiento más rápido y efectivo por sí solo.",
        distractorProfile: "reversed_treatment_sequence",
        incorrectFeedback: "Administrar Yodo antes de bloquear la síntesis hormonal con una tionamida puede proporcionar sustrato adicional para la producción de más hormona tiroidea, empeorando paradójicamente la tormenta tiroidea en lugar de controlarla.",
      },
      {
        id: "B",
        label: "B",
        text: "Propiltiouracilo (PTU) o Metimazol en altas dosis administrado PRIMERO, seguido 1 hora después de Yodo (Lugol), más Propranolol y Corticoides.",
      },
      {
        id: "C",
        label: "C",
        text: "Radioyodo terapéutico de urgencia como tratamiento definitivo inmediato del hipertiroidismo descompensado.",
        distractorProfile: "wrong_timing_of_definitive_therapy",
        incorrectFeedback: "El radioyodo es un tratamiento definitivo a mediano-largo plazo del hipertiroidismo, no un tratamiento de la emergencia aguda; además, está contraindicado administrarlo mientras la glándula está hiperactiva de forma descompensada, ya que puede liberar aún más hormona preformada a la circulación.",
      },
      {
        id: "D",
        label: "D",
        text: "Levotiroxina en dosis de reemplazo, para estabilizar rápidamente el eje tiroideo alterado.",
        distractorProfile: "opposite_of_correct_treatment",
        incorrectFeedback: "La paciente tiene un EXCESO de hormona tiroidea, no un déficit; administrar Levotiroxina (que se usa para el hipotiroidismo) agregaría aún más hormona tiroidea exógena a un cuadro ya de por sí tirotóxico severo, siendo directamente contraproducente y peligroso.",
      },
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con una **Tormenta Tiroidea (Crisis Tirotóxica)**, la descompensación aguda y potencialmente mortal del hipertiroidismo, frecuentemente desencadenada por un estrés fisiológico agudo (en este caso, una infección dental). El cuadro incluye fiebre alta, taquiarritmias, alteración del estado mental y síntomas gastrointestinales, cumpliendo criterios de gravedad (Escala de Burch-Wartofsky). El tratamiento requiere múltiples frentes simultáneos: **Tionamidas (PTU o Metimazol)** para bloquear la síntesis de nueva hormona tiroidea, seguidas (crucialmente **después**, con al menos 1 hora de diferencia) de **Yodo inorgánico (Solución de Lugol)**, que bloquea la liberación de hormona preformada mediante el efecto Wolff-Chaikoff, pero que si se administra ANTES de la tionamida, puede ser utilizado como sustrato adicional para sintetizar aún MÁS hormona tiroidea (empeorando paradójicamente la tormenta). Se complementa con **Propranolol** (control de la frecuencia cardíaca y bloqueo de la conversión periférica de T4 a T3) y **Corticoides** (reducen la conversión periférica de T4 a T3 y tratan la posible insuficiencia adrenal relativa asociada al estado hipermetabólico).",
    keyPoints: [
    "Paciente con hipertiroidismo conocido + desencadenante agudo (infección, cirugía, trauma) + fiebre alta + taquiarritmia + alteración mental.",
    "Tormenta Tiroidea. Secuencia terapéutica OBLIGATORIA: 1º Tionamida (PTU/Metimazol) → 1 hora después, Yodo (Lugol) → + Propranolol + Corticoides. Invertir el orden (Yodo antes que la tionamida) empeora la tormenta al aportar sustrato para más síntesis hormonal.",
    "Urgencias Endocrinológicas / Tormenta Tiroidea."
],
  },
  {
    id: "ucc-conv-2026-09-06-28",
    university: "UCC",
    examArea: "PEDIATRÍA - OFTALMOLOGÍA / ONCOLOGÍA",
    topic: "Oncología Pediátrica",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","oncolog-a-pedi-trica","oncolog","a","pedi","trica"],
    statement: "Una niña de 18 meses es llevada a control pediátrico de rutina. La madre, revisando fotografías familiares recientes tomadas con flash, notó que en varias imágenes el ojo izquierdo de la niña muestra un reflejo blanquecino en lugar del típico \"ojo rojo\" que sí se observa en el ojo derecho. Al examen físico oftalmológico con oftalmoscopio directo, se confirma la ausencia del reflejo rojo normal en el ojo izquierdo, siendo reemplazado por un reflejo blanco-amarillento (leucocoria). No hay antecedentes familiares conocidos de patología ocular. La niña no presenta dolor ocular evidente ni otros síntomas sistémicos. ¿Cuál es el diagnóstico que debe descartarse con MÁXIMA prioridad ante este hallazgo, dado su potencial de amenazar la vida si no se diagnostica a tiempo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Catarata congénita simple, que es la causa más frecuente y benigna de leucocoria y no requiere estudio urgente.",
        distractorProfile: "assuming_benign_cause_without_workup",
        incorrectFeedback: "Aunque la catarata congénita es una causa común de leucocoria, asumir esta etiología sin descartar activamente el retinoblastoma mediante evaluación oftalmológica especializada urgente pone en riesgo un diagnóstico oncológico tiempo-dependiente que puede amenazar la vida y la visión del niño.",
      },
      {
        id: "B",
        label: "B",
        text: "Retinoblastoma; requiere evaluación oftalmológica especializada urgente con examen bajo anestesia y estudios de extensión.",
      },
      {
        id: "C",
        label: "C",
        text: "Retinopatía del prematuro, que es la causa esperable en cualquier lactante con leucocoria unilateral.",
        distractorProfile: "wrong_epidemiologic_context",
        incorrectFeedback: "La retinopatía del prematuro es una consideración relevante específicamente en neonatos prematuros con antecedente de oxigenoterapia prolongada; no hay datos en esta viñeta que sugieran prematuridad, por lo que esta no es la principal etiología a priorizar en el diagnóstico diferencial de esta leucocoria.",
      },
      {
        id: "D",
        label: "D",
        text: "Conjuntivitis viral con secreción que simula el reflejo blanquecino, resuelto con manejo tópico ambulatorio.",
        distractorProfile: "trivializing_a_serious_sign",
        incorrectFeedback: "La conjuntivitis produce secreción ocular externa visible, no una alteración del reflejo pupilar rojo normal (leucocoria), que es un signo específico de patología intraocular; confundir estos hallazgos retrasa peligrosamente el diagnóstico de una condición potencialmente maligna.",
      },
    ],
    correctOptionId: "B",
    explanation: "La niña presenta **Leucocoria** (reflejo pupilar blanco en lugar del reflejo rojo normal), un signo de alarma oftalmológico pediátrico cuya causa más importante a descartar, por su potencial de amenazar la vida, es el **Retinoblastoma**, el tumor intraocular maligno más frecuente en la infancia, típicamente diagnosticado antes de los 2 años. Aunque existen causas benignas de leucocoria (como la catarata congénita), **ninguna leucocoria debe asumirse como benigna sin una evaluación oftalmológica especializada urgente**, que típicamente incluye un examen bajo anestesia con oftalmoscopia indirecta y, si se confirma, estudios de imagen (ecografía ocular, resonancia magnética de órbitas y cerebro) para evaluar extensión local, invasión del nervio óptico y descartar compromiso bilateral o del sistema nervioso central (en las formas hereditarias asociadas a mutaciones del gen RB1). El diagnóstico y tratamiento tempranos (que puede incluir quimioterapia, terapia focal con láser/crioterapia, o en casos avanzados enucleación) son fundamentales tanto para la supervivencia como para la preservación visual.",
    keyPoints: [
    "Lactante o niño pequeño con Leucocoria (reflejo blanco pupilar, frecuentemente notado primero en fotografías con flash).",
    "Retinoblastoma hasta demostrar lo contrario. Requiere evaluación oftalmológica urgente especializada (examen bajo anestesia). Es el tumor intraocular maligno más frecuente en la infancia; el diagnóstico temprano es clave para supervivencia y preservación ocular/visual.",
    "Oncología Pediátrica / Retinoblastoma."
],
  },
  {
    id: "ucc-conv-2026-09-06-29",
    university: "UCC",
    examArea: "MEDICINA INTERNA - CARDIOLOGÍA / TOXICOLOGÍA",
    topic: "Toxicología Cardiovascular",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","toxicolog-a-cardiovascular","toxicolog","a","cardiovascular"],
    statement: "Un hombre de 74 años, en tratamiento crónico con Digoxina por Fibrilación Auricular, consulta por náuseas, vómito, visión borrosa con **halos amarillo-verdosos alrededor de las luces (xantopsia)**, y confusión leve de 2 días de evolución. Refiere haber iniciado hace una semana un nuevo diurético (que no recuerda el nombre) prescrito por otro médico para edema en piernas. El electrocardiograma muestra un ritmo con **taquicardia auricular con bloqueo AV variable** y extrasístoles ventriculares frecuentes. Los laboratorios muestran Potasio sérico de 5.8 mEq/L, Creatinina levemente elevada, y un nivel sérico de Digoxina de 4.2 ng/mL (muy por encima del rango terapéutico). Ante la hiperkalemia significativa asociada a esta intoxicación, ¿cuál es el tratamiento ESPECÍFICO y de elección para revertir la toxicidad digitálica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Gluconato de Calcio intravenoso para tratar la hiperkalemia, como en cualquier otra causa de potasio elevado.",
        distractorProfile: "dangerous_generalization_of_standard_protocol",
        incorrectFeedback: "A diferencia de otras causas de hiperkalemia, en la toxicidad digitálica el Calcio intravenoso se ha asociado tradicionalmente con el riesgo de precipitar arritmias ventriculares malignas por sobrecarga adicional de calcio intracelular (\"corazón de piedra\"), por lo que debe evitarse o usarse con extrema precaución, prefiriendo la neutralización directa con Fab antidigoxina.",
      },
      {
        id: "B",
        label: "B",
        text: "Fragmentos de Anticuerpos Antidigoxina (Fab específicos, DigiFab), que neutralizan directamente la Digoxina circulante.",
      },
      {
        id: "C",
        label: "C",
        text: "Diálisis de emergencia, ya que es el método más rápido para remover la Digoxina y corregir el potasio simultáneamente.",
        distractorProfile: "ineffective_removal_method",
        incorrectFeedback: "La Digoxina tiene un volumen de distribución enorme (se une extensamente a tejidos, especialmente músculo esquelético y cardíaco) y no se elimina eficazmente por hemodiálisis convencional; el tratamiento específico y verdaderamente efectivo es la neutralización directa con anticuerpos Fab.",
      },
      {
        id: "D",
        label: "D",
        text: "Suspender la Digoxina exclusivamente y esperar su eliminación renal espontánea en las próximas 24-48 horas sin tratamiento adicional.",
        distractorProfile: "dangerously_passive_in_severe_toxicity",
        incorrectFeedback: "Ante arritmias significativas e hiperkalemia marcada como en este paciente, esperar la eliminación espontánea sin tratamiento específico expone al riesgo de arritmias ventriculares potencialmente fatales; los criterios de gravedad (arritmia significativa, hiperkalemia, inestabilidad) indican tratamiento inmediato con Fab antidigoxina.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con **Intoxicación Digitálica (Toxicidad por Digoxina)**, probablemente precipitada por la adición de un diurético (muchos diuréticos causan depleción de potasio y magnesio, y algunos como la Espironolactona pueden alterar la depuración de Digoxina, o simplemente la deshidratación asociada redujo el aclaramiento renal del fármaco de estrecho margen terapéutico). Los hallazgos clásicos incluyen síntomas gastrointestinales, alteraciones visuales características (**xantopsia**, la visión de halos amarillo-verdosos), arritmias cardíacas variadas (la combinación de taquiarritmia auricular CON bloqueo AV es particularmente sugestiva de toxicidad digitálica) y, de forma paradójica e importante, **hiperkalemia** (a diferencia de la hipokalemia que predispone a la toxicidad digitálica, la intoxicación aguda establecida causa hiperkalemia por inhibición de la bomba Na+/K+-ATPasa). El tratamiento específico y de elección, especialmente ante arritmias significativas, alteración hemodinámica o hiperkalemia marcada, son los **fragmentos de anticuerpos antidigoxina (Fab, DigiFab)**, que se unen directamente a las moléculas de Digoxina circulante, neutralizándolas y permitiendo su eliminación como complejo antígeno-anticuerpo.",
    keyPoints: [
    "Paciente en tratamiento con Digoxina + síntomas GI + alteraciones visuales (xantopsia) + arritmia (típicamente taquiarritmia CON bloqueo AV) + HIPERkalemia.",
    "Intoxicación por Digoxina. Tratamiento específico: Fragmentos Fab Antidigoxina (DigiFab). Precaución: el Gluconato de Calcio para tratar la hiperkalemia asociada está tradicionalmente CONTRAINDICADO o debe usarse con extrema cautela en este contexto específico, por riesgo teórico de precipitar arritmias letales (\"corazón de piedra\").",
    "Toxicología Cardiovascular / Intoxicación Digitálica."
],
  },
  {
    id: "ucc-conv-2026-09-06-30",
    university: "UCC",
    examArea: "MEDICINA INTERNA - HEPATOLOGÍA",
    topic: "Hepatología",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","hepatolog-a","hepatolog","a"],
    statement: "Una mujer de 29 años consulta por astenia progresiva, ictericia leve y artralgias de 2 meses de evolución. Refiere antecedente personal de Tiroiditis de Hashimoto. Al examen físico hay ictericia escleral leve, sin estigmas de hepatopatía crónica avanzada ni hepatoesplenomegalia significativa. Los laboratorios muestran AST 480 U/L, ALT 520 U/L, Bilirrubina total 3.2 mg/dL, Gammaglobulinas marcadamente elevadas en la electroforesis de proteínas, Anticuerpos Antinucleares (ANA) positivos a título alto (1:640), y Anticuerpos Anti-Músculo Liso (ASMA) positivos. Las serologías virales para Hepatitis A, B y C son negativas, y no hay antecedente de consumo de alcohol ni de fármacos hepatotóxicos. Una biopsia hepática muestra hepatitis de interfase con infiltrado linfoplasmocitario. ¿Cuál es el tratamiento de PRIMERA LÍNEA para esta condición?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Interferón pegilado más Ribavirina, el esquema estándar para hepatitis virales crónicas no tipificadas.",
        distractorProfile: "wrong_etiologic_category_treatment",
        incorrectFeedback: "Las serologías virales para Hepatitis A, B y C ya fueron reportadas como negativas en esta paciente; el interferón y la ribavirina son tratamientos antivirales específicos que no tienen ningún rol en una hepatopatía de origen autoinmune, donde el problema es una respuesta inmunológica anómala, no una infección viral activa.",
      },
      {
        id: "B",
        label: "B",
        text: "Corticoides sistémicos (Prednisona), solos o combinados con Azatioprina, como inmunosupresión de primera línea.",
      },
      {
        id: "C",
        label: "C",
        text: "Trasplante hepático inmediato, dado el patrón de daño hepatocelular agudo grave evidenciado en la biopsia.",
        distractorProfile: "premature_definitive_intervention",
        incorrectFeedback: "El trasplante hepático se reserva para casos de falla hepática fulminante que no responde a inmunosupresión, o para cirrosis descompensada en etapas avanzadas; esta paciente tiene un cuadro inicial sin signos de falla hepática aguda grave ni cirrosis establecida, por lo que el tratamiento inmunosupresor de primera línea es la conducta apropiada inicial.",
      },
      {
        id: "D",
        label: "D",
        text: "Ácido Ursodesoxicólico como tratamiento único, similar al manejo de la colangitis biliar primaria.",
        distractorProfile: "wrong_disease_treatment_confusion",
        incorrectFeedback: "El Ácido Ursodesoxicólico es el tratamiento de primera línea específicamente para la Colangitis Biliar Primaria (una enfermedad colestásica autoinmune distinta, con anticuerpos antimitocondriales característicos), no para la Hepatitis Autoinmune, cuyo pilar terapéutico son los corticoides e inmunosupresores.",
      },
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con **Hepatitis Autoinmune**, una enfermedad hepática crónica inflamatoria mediada por mecanismos inmunológicos, que predomina en mujeres y frecuentemente se asocia a otras enfermedades autoinmunes concomitantes (como la Tiroiditis de Hashimoto en este caso). El cuadro típico incluye elevación de transaminasas, hipergammaglobulinemia, autoanticuerpos característicos (ANA y/o Anti-Músculo Liso en el tipo 1, el más frecuente; Anti-LKM1 en el tipo 2), y el hallazgo histológico característico de **hepatitis de interfase** con infiltrado linfoplasmocitario, tras haber excluido causas virales, tóxicas y otras etiologías. El tratamiento de primera línea es la **inmunosupresión con Corticoides sistémicos (Prednisona)**, frecuentemente combinados con **Azatioprina** como ahorrador de esteroides para el mantenimiento a largo plazo, logrando remisión bioquímica e histológica en la mayoría de los pacientes cuando se diagnostica y trata oportunamente, evitando así la progresión a cirrosis.",
    keyPoints: [
    "Mujer con hepatitis crónica + hipergammaglobulinemia + ANA y/o Anti-Músculo Liso positivos + otra enfermedad autoinmune asociada.; Serologías virales negativas, sin causa tóxica identificable.",
    "Hepatitis Autoinmune. Hallazgo histológico clave: Hepatitis de interfase con infiltrado linfoplasmocitario. Tratamiento de primera línea: Corticoides (Prednisona) +/- Azatioprina.",
    "Hepatología / Hepatitis Autoinmune."
],
  }
];
