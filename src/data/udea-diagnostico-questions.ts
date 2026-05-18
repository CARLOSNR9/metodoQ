import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Batería diagnóstica fija (10 ítems) — Universidad de Antioquia / Medicina Interna.
 * Orden estable; ponderación alineada al examen unificado de posgrados clínicos.
 */
export const UDEA_DIAGNOSTIC_QUESTIONS: TrainingQuestion[] = [
  {
    id: "udea-dx-01",
    university: "UdeA",
    examArea: "Medicina Interna / Infectología / Medicina Tropical",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["udea", "diagnostico", "malaria", "msps", "tropical"],
    statement:
      "Paciente masculino de 34 años de edad, de ocupación agricultor, procedente de zona rural del municipio de Murindó (Urabá Antioqueño), ingresa al servicio de urgencias trasladado desde un centro de atención primaria de primer nivel tras presentar 5 días de evolución de fiebre intermitente de alto grado, escalofríos severos, diaforesis profusa y un deterioro progresivo del estado de consciencia en las últimas 12 horas. A la exploración física de ingreso se evidencia: presión arterial de 85/50 mmHg, frecuencia cardíaca de 125 latidos por minuto, frecuencia respiratoria de 28 respiraciones por minuto, temperatura de 39.5°C y saturación de oxígeno del 92% al ambiente. Se evidencia una marcada palidez mucocutánea generalizada, ictericia escleral franca y hepatomegalia dolorosa a la palpación profunda. Los paraclínicos de ingreso revelan: Hemoglobina 4.8 g/dL, Hematocrito 14%, Plaquetas 45,000/µL, Bilirrubina total 6.5 mg/dL (con franco predominio directo) y Creatinina sérica 2.1 mg/dL. El reporte urgente de la gota gruesa documenta la presencia de formas asexuadas de Plasmodium falciparum (+++). El paciente tiene un peso corporal verificado de 70 kg. Según los lineamientos técnicos de atención clínica del Ministerio de Salud y Protección Social de Colombia, ¿cuál es el abordaje farmacológico inicial y posológico más apropiado y de primera línea para revertir este cuadro clínico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar de inmediato cloroquina por vía oral a una dosis de 10 mg/kg de peso, seguida de la administración de primaquina para asegurar la erradicación y evitar recaídas hepáticas.",
        distractorProfile: "confusion_diagnostica_guia_obsoleta",
        incorrectFeedback:
          "La cloroquina es obsoleta para P. falciparum en Colombia y no debe usarse por vía oral en un paciente hemodinámicamente inestable con alteración del sensorio.",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar artesunato inyectable por vía intravenosa calculando una dosis de 3.0 mg/kg de peso en el momento del ingreso (hora cero), repitiendo la dosis a las 12 horas y a las 24 horas.",
        distractorProfile: "deficit_farmacometria_urgencias",
        incorrectFeedback:
          "Identificas artesunato correctamente, pero 3.0 mg/kg está reservada para pacientes con peso < 20 kg. Este adulto de 70 kg requiere 2.4 mg/kg.",
      },
      {
        id: "C",
        label: "C",
        text: "Administrar artesunato inyectable por vía intravenosa calculando una dosis de 2.4 mg/kg de peso en el momento del ingreso (hora cero), repitiendo la dosis a las 12 horas y a las 24 horas.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar infusión intravenosa de sulfato de quinina asociado obligatoriamente a un antibiótico como clindamicina o doxiciclina debido a la sospecha de coinfección bacteriana grave.",
        distractorProfile: "vulnerabilidad_actualizacion_normativa",
        incorrectFeedback:
          "La quinina IV fue desplazada por artesunato como estándar inicial en malaria grave por mayor eficacia y menor toxicidad.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Malaria grave por P. falciparum con criterios de gravedad (Hb < 5 g/dL, alteración del sensorio, falla renal, colestasis). Primera línea: artesunato IV 2.4 mg/kg en T0, 12 h y 24 h para pacientes ≥ 20 kg.",
    keyPoints: [
      "Malaria grave exige artesunato IV, no cloroquina ni quinina de primera línea.",
      "Dosis 2.4 mg/kg (≥ 20 kg); 3.0 mg/kg solo si peso < 20 kg.",
      "Tema: Infectología tropical y lineamientos MSPS — malaria complicada.",
    ],
  },
  {
    id: "udea-dx-02",
    university: "UdeA",
    examArea: "Urgencias Médicas / Toxicología / Salud Pública",
    topic: "Toxicología",
    difficulty: "medium",
    tags: ["udea", "diagnostico", "ofidico", "ins"],
    statement:
      'Una paciente femenina de 45 años de edad, sin antecedentes médicos patológicos de importancia conocidos, ingresa a la sala de reanimación del servicio de urgencias tras ser remitida desde una zona selvática rural. La paciente sufrió una mordedura de serpiente en el tercio distal del miembro inferior derecho hace aproximadamente 6 horas. Durante el interrogatorio clínico, los acompañantes refieren que el ofidio causante presentaba una cabeza marcadamente triangular, poseía foseta loreal (termorreceptora) y mostraba un patrón geométrico en forma de "X" o "M" a lo largo del dorso. A la exploración física minuciosa se observa: paciente somnolienta, hipotensa con presión arterial de 90/60 mmHg y taquicárdica con 110 latidos por minuto. El miembro inferior derecho presenta un edema indurado y masivo que abarca desde el dorso del pie hasta la región inguinal ipsilateral, acompañado de la formación de flictenas hemorrágicas, zonas de necrosis incipiente tisular y un sangrado activo, continuo y en capa por los sitios anatómicos de venopunción reciente. Se documenta la presencia de oliguria severa (con un volumen urinario recolectado de apenas 10 cc por hora en las últimas 3 horas) y hematuria macroscópica evidente en la sonda vesical. Las pruebas de coagulación solicitadas de urgencia reportan tiempos de protrombina y tromboplastina infinitos (sangre incoagulable). Basándose en el protocolo integral de vigilancia y manejo del Instituto Nacional de Salud (INS), ¿cuál es la conducta terapéutica sistémica inicial y exacta más adecuada para neutralizar este envenenamiento?',
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar inmediatamente 4 frascos viales de suero antiofídico polivalente diluidos cuidadosamente en solución salina normal para evitar la sobrecarga hídrica.",
        distractorProfile: "error_estratificacion_riesgo",
        incorrectFeedback:
          "4 viales corresponden a accidente botrópico leve. Este cuadro con oliguria, sangrado sistémico e incoagulabilidad es severo.",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar una carga de 6 frascos viales de suero antiofídico polivalente y solicitar paralelamente una valoración urgente por el servicio de cirugía general para la realización de una fasciotomía descompresiva profiláctica.",
        distractorProfile: "subdosificacion_fasciotomia_contraindicada",
        incorrectFeedback:
          "6 viales suelen usarse en severidad moderada. La fasciotomía profiláctica está proscrita con coagulopatía activa por riesgo de exanguinación.",
      },
      {
        id: "C",
        label: "C",
        text: "Administrar una dosis inicial masiva de 10 frascos viales de suero antiofídico polivalente producido por el INS, asegurando paralelamente una agresiva reanimación e hidratación parenteral para proteger el riñón.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar la administración sistémica de heparina de bajo peso molecular a dosis plenas para revertir el consumo masivo de factores de coagulación secundario a la toxina, e iniciar la infusión lenta de 8 viales de suero antiofídico.",
        distractorProfile: "falta_comprension_fisiopatologia",
        incorrectFeedback:
          "La coagulopatía es por consumo de factores; anticoagulantes sistémicos están contraindicados y empeoran el sangrado.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Accidente ofídico botrópico severo: edema masivo, sangrado sistémico, incoagulabilidad y falla renal. INS: 10 viales de antiveneno polivalente + hidratación agresiva.",
    keyPoints: [
      "Botrópico severo = 10 viales IV + reanimación hídrica.",
      "No fasciotomía profiláctica con coagulopatía activa.",
      "Tema: Toxicología clínica y protocolos INS.",
    ],
  },
  {
    id: "udea-dx-03",
    university: "UdeA",
    examArea: "Medicina Interna / Infectología Respiratoria / Salud Pública",
    topic: "Salud Pública",
    difficulty: "medium",
    tags: ["udea", "diagnostico", "tuberculosis", "resolucion-227"],
    statement:
      "Un paciente masculino de 56 años de edad, en condición de vulnerabilidad y habitabilidad de calle, es conducido al servicio de urgencias por trabajadores sociales tras presentar un cuadro clínico de 4 semanas de evolución progresiva. La sintomatología se caracteriza por la presencia de tos persistente acompañada de expectoración hemoptoica, episodios recurrentes de diaforesis nocturna profusa, astenia, adinamia y una pérdida involuntaria y documentada de aproximadamente 8 kg de peso corporal. Ante la alta sospecha epidemiológica, se le realiza de urgencia una baciloscopia seriada de esputo que reporta un resultado fuertemente positivo (+++). Simultáneamente, se procesa una prueba molecular rápida (GeneXpert MTB/RIF) que confirma la detección genética de Mycobacterium tuberculosis e indica que la cepa no presenta resistencia al fármaco rifampicina. El paciente no presenta ningún antecedente conocido de haber recibido tratamientos antituberculosos en el pasado. De acuerdo con el marco normativo establecido en la Resolución 227 de 2020 expedida por el Ministerio de Salud y Protección Social de Colombia, en lo referente a las políticas de salud pública y el inicio de la fase intensiva del esquema de tratamiento, ¿cuál es la conducta terapéutica empírica inicial que debe seguirse obligatoriamente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar esquema terapéutico con un régimen triple compuesto por Isoniazida, Rifampicina y Pirazinamida debido a que el paciente es virgen al tratamiento y no presenta historial previo de fracaso terapéutico o abandono.",
        distractorProfile: "esquema_historico_descontinuado",
        incorrectFeedback:
          "El esquema triple en fase intensiva fue eliminado en Colombia por alta resistencia primaria a isoniazida (~9,5%).",
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar un esquema agresivo de 4 fármacos simultáneos (Isoniazida, Rifampicina, Pirazinamida y Etambutol), prescribiendo preferiblemente el uso de tabletas de dosis fija combinadas para minimizar el error humano y asegurar la adherencia terapéutica.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar un tratamiento de inducción exclusivo empleando Isoniazida y Rifampicina durante los primeros 2 meses de la fase intensiva, agregando Etambutol y Pirazinamida de forma posterior en la fase de continuación o consolidación.",
        distractorProfile: "fases_farmacologicas_invertidas",
        incorrectFeedback:
          "IR corresponde a la fase de continuación, no al tratamiento empírico inicial ante alta carga bacilar.",
      },
      {
        id: "D",
        label: "D",
        text: "Diferir temporalmente el inicio del tratamiento farmacológico sistémico y mantener aislamiento respiratorio hasta lograr obtener el reporte definitivo del cultivo microbiológico en medio sólido (Lowenstein-Jensen) para confirmar con exactitud la sensibilidad global a los fármacos de primera línea.",
        distractorProfile: "diferimiento_tratamiento_contagioso",
        incorrectFeedback:
          "Con baciloscopia +++ y GeneXpert positivo no se posterga el inicio; el cultivo orienta ajustes, no retrasa la terapia empírica.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "TB pulmonar nueva: fase intensiva con HRZE (4 fármacos) por resistencia primaria a H > 4% en Colombia. Preferir dosis fija combinada (Res. 227/2020).",
    keyPoints: [
      "Fase intensiva empírica: HRZE simultáneo.",
      "Dosis fija combinada mejora adherencia y reduce errores.",
      "Tema: Tuberculosis y normativa MSPS — Resolución 227 de 2020.",
    ],
  },
  {
    id: "udea-dx-04",
    university: "UdeA",
    examArea: "Medicina Interna / Urgencias / Infectología Viral",
    topic: "Medicina Interna",
    difficulty: "medium",
    tags: ["udea", "diagnostico", "dengue", "etv"],
    statement:
      "Un paciente adulto joven, masculino de 22 años, acude al servicio de urgencias refiriendo un cuadro de 4 días de evolución de fiebre continua no cuantificada, mialgias incapacitantes generalizadas, artralgias severas y un dolor retroocular pulsátil. En las últimas 12 horas, la curva térmica ha caído (la fiebre ha cedido por completo), sin embargo, en lugar de experimentar mejoría, el paciente reporta la aparición repentina de un dolor abdominal intenso, continuo y sostenido localizado en el cuadrante superior derecho, el cual se ha acompañado de tres episodios eméticos abundantes de contenido alimentario y biliar. A la exploración física dirigida se registra: frecuencia cardíaca de 105 lpm, presión arterial de 100/70 mmHg, frecuencia respiratoria de 22 rpm, evidentes signos de deshidratación en las mucosas orales y un dolor agudo a la palpación profunda del lecho hepático, sugiriendo hepatomegalia. Los exámenes de laboratorio iniciales solicitados muestran: un recuento leucocitario de 2,500/µL, un recuento plaquetario disminuido a 85,000/µL, y un incremento brusco del valor del Hematocrito del 20% con respecto a su valor basal estimado. De acuerdo con el algoritmo y la Guía de Atención Clínica Integral del paciente con Dengue del territorio nacional, ¿en qué categoría exacta de intervención institucional se debe ubicar al paciente y cuál es la conducta médica de reanimación inmediata?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Categoría de intervención A (Dengue sin signos de alarma). El manejo indicado es de naturaleza ambulatoria, basándose en la prescripción de acetaminofén para la analgesia, hidratación oral estricta en el hogar y reposo en cama.",
        distractorProfile: "falta_identificacion_signos_alarma",
        incorrectFeedback:
          "El dolor abdominal continuo, vómitos persistentes y hemoconcentración descartan manejo ambulatorio sin alarma.",
      },
      {
        id: "B",
        label: "B",
        text: "Categoría de intervención B1 (Dengue sin signos de alarma en paciente con comorbilidades). El protocolo demanda la hospitalización en sala general para vigilancia clínica estrecha y reposición hídrica estricta por vía oral.",
        distractorProfile: "categoria_b1_inaplicable",
        incorrectFeedback:
          "B1 es para pacientes sin signos de alarma pero con factores de riesgo; este paciente ya tiene signos de alarma.",
      },
      {
        id: "C",
        label: "C",
        text: "Categoría de intervención B2 (Dengue con signos de alarma inminente). La conducta mandatoria es la hospitalización y el inicio de una reposición hídrica inmediata con cristaloides isotónicos intravenosos (Lactato de Ringer o Solución Salina Normal al 0.9%).",
      },
      {
        id: "D",
        label: "D",
        text: "Categoría de intervención C (Dengue grave). Se requiere el ingreso inminente a una Unidad de Cuidados Intensivos (UCI) e inicio temprano de transfusión de hemoderivados profilácticos debido a la trombocitopenia profunda y el riesgo de choque hemorrágico inminente.",
        distractorProfile: "sobreestratificacion_transfusion_innecesaria",
        incorrectFeedback:
          "Aún no hay choque ni sangrado grave; el pilar es reanimación con cristaloides, no transfusión profiláctica de plaquetas.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Fase crítica con defervescencia, dolor abdominal, vómitos, hepatomegalia dolorosa y hemoconcentración = Grupo B2. Manejo: hospitalización + cristaloides IV guiados por metas.",
    keyPoints: [
      "Signos de alarma en fase crítica = categoría B2.",
      "Reposición IV con cristaloides; no plaquetas profilácticas.",
      "Tema: Dengue — algoritmo MSPS y fase crítica.",
    ],
  },
  {
    id: "udea-dx-05",
    university: "UdeA",
    examArea: "Medicina Interna / Cardiología / Urgencias",
    topic: "Cardiología",
    difficulty: "hard",
    tags: ["udea", "diagnostico", "eap", "emergencia-hipertensiva"],
    statement:
      "Un paciente masculino de 70 años de edad, portador de antecedentes crónicos de hipertensión arterial de muy difícil control farmacológico e historia de un infarto agudo de miocardio antiguo en la pared anterior, consulta de emergencia al servicio de urgencias por la instauración súbita de un cuadro de disnea severa en reposo absoluto, acompañada de ortopnea marcada, sensación de asfixia y tos productiva que genera una expectoración rosada y espumosa. A la inspección visual física general se evidencia un paciente en franca dificultad respiratoria, marcadamente diaforético, con facies de angustia extrema, empleando toda la musculatura accesoria y con tirajes intercostales y supraclaviculares evidentes. Sus signos vitales al monitor revelan un estado alarmante: Presión arterial sistémica disparada a 210/110 mmHg, frecuencia cardíaca de 115 lpm, taquipnea de 32 rpm, y una saturación de oxígeno desplomada al 86% respirando aire ambiente. Durante la maniobra de auscultación pulmonar se auscultan con nitidez estertores crepitantes gruesos y finos bilaterales que ascienden desde las bases hasta los ápices pulmonares. La auscultación cardíaca revela un ritmo de galope característico inducido por la presencia de un tercer ruido (S3). El registro del electrocardiograma de 12 derivaciones descarta isquemia aguda en curso, pero evidencia taquicardia sinusal refleja, signos crónicos de hipertrofia ventricular izquierda e inversión simétrica de las ondas T en las derivaciones precordiales laterales (V5 y V6). Teniendo en cuenta la inestabilidad fisiopatológica inminente, ¿cuál es el régimen terapéutico inicial combinado de elección absoluta para revertir la carga hemodinámica aguda que compromete la vida de este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar infusión continua de agentes betabloqueadores intravenosos (tales como Metoprolol o Esmolol) para reducir urgentemente la frecuencia cardíaca, deprimiendo así la taquicardia secundaria y disminuyendo el excesivo consumo miocárdico de oxígeno en el ventrículo izquierdo hipertrófico.",
        distractorProfile: "betabloqueador_en_descompensacion",
        incorrectFeedback:
          "Los betabloqueadores IV están contraindicados en EAP agudo descompensado; pueden precipitar choque cardiogénico.",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar agentes vasodilatadores de acción rápida por vía intravenosa (como la Nitroglicerina) asociados concomitantemente a potentes diuréticos de asa (Furosemida IV), mientras se provee simultáneamente un soporte ventilatorio de oxigenación aplicando presión positiva continua a las vías aéreas (CPAP/BiPAP).",
      },
      {
        id: "C",
        label: "C",
        text: "Administrar adenosina intravenosa en bolo rápido para frenar y abortar el circuito de la taquicardia de forma instantánea, estabilizando subsecuentemente el gasto cardíaco y permitiendo un mayor tiempo de llenado diastólico.",
        distractorProfile: "adenosina_inapropiada",
        incorrectFeedback:
          "La adenosina es para taquicardias supraventriculares por reentrada, no para taquicardia sinusal compensatoria en EAP.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar un plan de hidratación rápida y expansiva administrando bolos de 1,000 cc de solución salina normal al 0.9% para optimizar e incrementar la precarga ventricular izquierda, basándose en la taquicardia como indicador de hipovolemia subyacente.",
        distractorProfile: "volumen_en_sobrecarga_pulmonar",
        incorrectFeedback:
          "El paciente tiene sobrecarga hidrostática pulmonar; más volumen es iatrogénico y potencialmente letal.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "EAP cardiogénico por emergencia hipertensiva: vasodilatadores IV + diurético de asa + CPAP/BiPAP para reducir precarga/postcarga y mejorar oxigenación.",
    keyPoints: [
      "EAP hipertensivo: nitroglicerina + furosemida + presión positiva.",
      "Evitar betabloqueadores y volumen en descompensación aguda.",
      "Tema: Cardiología crítica — edema agudo de pulmón.",
    ],
  },
  {
    id: "udea-dx-06",
    university: "UdeA",
    examArea: "Medicina Interna / Endocrinología / Cuidados Críticos",
    topic: "Medicina Interna",
    difficulty: "hard",
    tags: ["udea", "diagnostico", "cad", "endocrinologia"],
    statement:
      "Un paciente varón adulto de 24 años de edad, con un diagnóstico firmemente establecido de Diabetes Mellitus tipo 1 desde la infancia, es llevado a las salas de reanimación de urgencias por sus familiares debido a un evidente y severo estado de confusión mental de instauración progresiva en el transcurso de las últimas 48 horas. Durante el proceso de la anamnesis, la madre del paciente relata que el joven abandonó abruptamente el uso de su insulina basal glargina debido al malestar general ocasionado por una gastroenteritis viral contraída recientemente. A la valoración médica y el examen físico inicial resaltan: hallazgos de mucosa oral extremadamente seca, pérdida total de la turgencia cutánea, un patrón respiratorio compensatorio de taquipnea anormalmente profunda, laboriosa y rítmica (respiración clásica de Kussmaul), y un marcado aliento fétido con olor característico cetónico (afrutado). Los resultados de los laboratorios iniciales procesados en máquina de gases y química reportan: Glucemia capilar de 450 mg/dL, pH venoso de 7.15, bicarbonato sérico desplomado a 10 mEq/L, una brecha aniónica (Anión Gap) ampliamente aumentada de 24 mEq/L, Sodio sérico de 132 mEq/L, un Potasio sérico central de 3.3 mEq/L, y tirillas reactivas de orina confirmando cetonuria masiva (+++). Frente a este complejo y florido escenario de descompensación endocrinológica vital, ¿cuál debe ser la medida terapéutica médica prioritaria de primer nivel que se debe instaurar obligatoriamente en la primera hora clínica de reanimación?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar inmediatamente un bolo rápido intravenoso de 10 Unidades Internacionales de Insulina Regular de acción rápida, cuyo objetivo es detener y bloquear instantáneamente el ciclo patológico de la lipólisis y la cetogénesis hepática, iniciando tempranamente la corrección de la hiperglucemia.",
        distractorProfile: "insulina_antes_de_reposicion",
        incorrectFeedback:
          "La insulina antes de volumen y con K+ 3.3 mEq/L precipita hipopotasemia fatal; primero reanimación hídrica y corrección de potasio.",
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar de forma agresiva una bomba de infusión continua de bicarbonato de sodio en formulación isotónica al 1.4%, fundamentado en la justificación de que el paciente cursa con una acidosis metabólica de brecha amplia profunda y amenazante para la viabilidad celular miocárdica.",
        distractorProfile: "bicarbonato_obsoleto",
        incorrectFeedback:
          "El bicarbonato rutinario en CAD está desaconsejado salvo pH extremos (< 6.9); aumenta riesgo de edema cerebral y acidosis intracelular.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar el pilar de reanimación hídrica agresiva mediante la infusión amplia de solución cristaloides (solución salina normal o NaCl al 0.9%) a una veloz razón empírica de 1,000 a 1,500 mL por hora, e instaurar paralelamente una cuidadosa reposición de potasio intravenoso de manera imperativa y previa al uso definitivo y posterior de cualquier tipo de insulina intravenosa.",
      },
      {
        id: "D",
        label: "D",
        text: "Solicitar una interconsulta médica de prioridad extrema a la unidad de cuidado intensivo general e iniciar todos los preparativos logísticos para instaurar una sesión de hemodiálisis de urgencia o terapia de reemplazo continuo que corrija mecánicamente el peligroso desequilibrio ácido-base instaurado.",
        distractorProfile: "dialisis_innecesaria",
        incorrectFeedback:
          "La CAD se maneja con fluidos, potasio e insulina en goteo; la diálisis no es primera línea salvo complicaciones renales extremas.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "CAD severa: prioridad en la primera hora = expansión con cristaloides + reposición de K+ antes de insulina IV (especialmente si K+ ≤ 3.3 mEq/L).",
    keyPoints: [
      "Orden: volumen → potasio seguro → insulina en infusión.",
      "No bolo de insulina ni bicarbonato rutinario al inicio.",
      "Tema: Cetoacidosis diabética — protocolo de urgencias.",
    ],
  },
  {
    id: "udea-dx-07",
    university: "UdeA",
    examArea: "Cirugía General",
    topic: "Cirugía",
    difficulty: "medium",
    tags: ["udea", "diagnostico", "abdomen-agudo", "apendicitis"],
    statement:
      "Un paciente masculino de 28 años de edad, previamente sano, consulta al servicio de urgencias por dolor abdominal de 18 horas de evolución, inicialmente periumbilical y posteriormente migrado al cuadrante inferior derecho, acompañado de anorexia, náuseas y un episodio de vómito. Refiere fiebre subjetiva en las últimas 6 horas. Al examen físico presenta temperatura de 38.2°C, frecuencia cardíaca de 102 lpm y presión arterial de 118/76 mmHg. El abdomen es blando con dolor máximo en fosa ilíaca derecha, signo de Blumberg positivo y signo de Rovsing positivo. Los paraclínicos reportan leucocitosis de 16,200/µL con desviación a la izquierda y proteína C reactiva de 48 mg/L. La ecografía abdominal confirma apéndice no compresible de 9 mm con borramiento de la grasa periapendicular y líquido libre periappendicular, sin colecciones organizadas. ¿Cuál es la conducta quirúrgica y antibiótica inicial más apropiada según las guías actuales para apendicitis aguda no complicada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar manejo exclusivamente médico con antibióticos de amplio espectro por 14 días y reevaluar en 72 horas, reservando la apendicectomía solo si persiste la fiebre.",
        distractorProfile: "manejo_medico_inapropiado",
        incorrectFeedback:
          "En apendicitis aguda confirmada con signos peritoneales, el tratamiento estándar es quirúrgico, no antibiótico exclusivo ambulatorio.",
      },
      {
        id: "B",
        label: "B",
        text: "Realizar apendicectomía laparoscópica de urgencia con profilaxis antibiótica preoperatoria de espectro gramnegativo y anaerobio (por ejemplo, ceftriaxona + metronidazol o monodroga según protocolo institucional).",
      },
      {
        id: "C",
        label: "C",
        text: "Solicitar tomografía de abdomen con contraste antes de cualquier intervención y diferir cirugía hasta obtener el informe definitivo en 48 horas, manteniendo solo analgesia.",
        distractorProfile: "diferimiento_quirurgico_innecesario",
        incorrectFeedback:
          "Con ecografía diagnóstica y cuadro clínico típico no se retrasa la apendicectomía; demorar aumenta riesgo de perforación.",
      },
      {
        id: "D",
        label: "D",
        text: "Indicar apendicectomía abierta de emergencia con ileostomía de protección profiláctica por el riesgo de fístula enteroentérica.",
        distractorProfile: "sobretratamiento_quirurgico",
        incorrectFeedback:
          "La apendicitis no complicada no requiere ileostomía; la vía laparoscópica es el estándar cuando hay experiencia.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Apendicitis aguda no complicada confirmada: apendicectomía laparoscópica urgente + antibiótico profiláctico/preoperatorio con cobertura entérica y anaerobia.",
    keyPoints: [
      "Apendicitis confirmada → cirugía, no solo antibióticos.",
      "Laparoscopia es vía preferida en casos no complicados.",
      "Tema: Cirugía general — abdomen agudo (apendicitis).",
    ],
  },
  {
    id: "udea-dx-08",
    university: "UdeA",
    examArea: "Ginecología y Obstetricia",
    topic: "Ginecología",
    difficulty: "medium",
    tags: ["udea", "diagnostico", "preeclampsia", "obstetricia"],
    statement:
      "Gestante de 34 años, primigesta con embarazo de 36 semanas por ecografía, es remitida a urgencias por cefalea pulsátil intensa, epigastralgia y visión borrosa de 12 horas de evolución. Signos vitales: presión arterial 168/112 mmHg en dos mediciones separadas, frecuencia cardíaca 96 lpm. Exploración: edema facial y en extremidades, reflejos osteotendinosos exaltados con clonus patelar sostenido. Paraclínicos: proteinuria en tira reactiva 3+, plaquetas 98,000/µL, AST 186 U/L, ALT 210 U/L, creatinina 1.4 mg/dL. La monitoría fetal muestra patrón reactivo. ¿Cuál es la conducta obstétrica y antihipertensiva inmediata más adecuada para esta paciente con preeclampsia con criterios de severidad?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar solo reposo relativo, dieta hiposódica y control ambulatorio semanal, postergando el parto hasta la semana 40.",
        distractorProfile: "manejo_ambulatorio_contraindicado",
        incorrectFeedback:
          "Con criterios de severidad y síntomas neurológicos no es seguro el manejo ambulatorio ni diferir el parto.",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar sulfato de magnesio para profilaxis y tratamiento de eclampsia, controlar presión arterial con labetalol o hidralazina IV según protocolo, y planificar finalización del embarazo una vez estabilizada (parto es el tratamiento definitivo).",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar nifedipino sublingual en dosis repetidas sin monitorización y alta a domicilio si la presión arterial desciende por debajo de 140/90 mmHg.",
        distractorProfile: "antihipertensivo_oral_sin_vigilancia",
        incorrectFeedback:
          "La preeclampsia severa requiere hospitalización, magnesio y preparación para parto; no alta con nifedipino sublingual repetido.",
      },
      {
        id: "D",
        label: "D",
        text: "Indicar betabloqueadores orales como primera línea y suspender toda medicación antihipertensiva intravenosa para evitar hipotensión fetal.",
        distractorProfile: "betabloqueador_como_primera_linea_obstetrica",
        incorrectFeedback:
          "El manejo incluye magnesio y antihipertensivos IV de elección obstétrica; no se suspende el control agudo de PA.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Preeclampsia con criterios de severidad (síntomas, PA ≥ 160/110, plaquetopenia, transaminitis): MgSO4 + antihipertensivo IV + finalización del embarazo tras estabilización.",
    keyPoints: [
      "Magnesio es pilar ante riesgo de eclampsia.",
      "El parto es el tratamiento definitivo de la preeclampsia.",
      "Tema: Ginecobstetricia — preeclampsia severa.",
    ],
  },
  {
    id: "udea-dx-09",
    university: "UdeA",
    examArea: "Pediatría",
    topic: "Pediatría",
    difficulty: "medium",
    tags: ["udea", "diagnostico", "aiepi", "deshidratacion"],
    statement:
      "Lactante masculino de 11 meses de edad es llevado al servicio de urgencias por cuadro de 2 días de diarrea acuosa (8 deposiciones/día) y vómitos ocasionales. La madre refiere que dejó de tomar líquidos en las últimas 8 horas. Al examen: letárgico, ojos hundidos, pliegue cutáneo que se retrae en más de 2 segundos, mucosas secas y fontanela anterior hundida. Peso actual 8 kg (peso habitual registrado 8.5 kg). Frecuencia cardíaca 160 lpm, pulsos periféricos débiles, tiempo de llenado capilar 3 segundos. ¿Según el esquema AIEPI/MSPS de manejo de enfermedad diarreica aguda, cuál es la clasificación de deshidratación y la conducta de rehidratación inmediata?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Sin deshidratación (Plan A). Continuar lactancia materna, aumentar líquidos en casa y administrar sales de rehidratación oral después de cada deposición sin observación hospitalaria.",
        distractorProfile: "subclasificacion_plan_a",
        incorrectFeedback:
          "Letargia, ojos hundidos, pliegue prolongado y fontanela hundida descartan Plan A.",
      },
      {
        id: "B",
        label: "B",
        text: "Deshidratación moderada (Plan B). Iniciar terapia de rehidratación oral supervisada en la unidad con aproximadamente 75 mL/kg de sales de rehidratación oral en 4 horas.",
      },
      {
        id: "C",
        label: "C",
        text: "Deshidratación severa (Plan C). Iniciar de inmediato expansión con cristaloides IV (solución salina o Ringer lactato) 100 mL/kg en 3–6 horas (o 30 mL/kg en 30 min según protocolo de choque), reevaluando signos vitales continuamente.",
      },
      {
        id: "D",
        label: "D",
        text: "Deshidratación moderada (Plan B) con alta inmediata y antibiótico empírico de amplio espectro por la diarrea acuosa.",
        distractorProfile: "antibiotico_innecesario_plan_b",
        incorrectFeedback:
          "Los antibióticos no son rutina en diarrea acuosa viral; además este lactante requiere Plan C, no alta con Plan B.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Signos de deshidratación severa/choque (letargia, pulsos débiles, TRC prolongado, fontanela hundida): Plan C con cristaloides IV, no rehidratación oral exclusiva.",
    keyPoints: [
      "Plan C = deshidratación severa con líquidos IV urgentes.",
      "AIEPI prioriza rehidratación antes que antibióticos empíricos.",
      "Tema: Pediatría — enfermedad diarreica aguda (AIEPI).",
    ],
  },
  {
    id: "udea-dx-10",
    university: "UdeA",
    examArea: "Legislación y Ética Médica",
    topic: "Salud Pública",
    difficulty: "medium",
    tags: ["udea", "diagnostico", "ley-100", "bioetica"],
    statement:
      "Un médico general adscrito a una IPS del régimen contributivo recibe a un paciente de 62 años con enfermedad renal crónica estadio 5 no dializable por comorbilidades, quien solicita acceso inmediato a diálisis. La EPS niega el procedimiento argumentando que el paciente no cumple criterios de inclusión del plan de beneficios y remite el caso a auditoría. El paciente manifiesta que cotizó de forma continua durante 25 años. El médico debe orientar el caso según el marco normativo colombiano. ¿Cuál es el principio y mecanismo jurídico-administrativo más adecuado para proteger los derechos del paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "El médico debe abstenerse de intervenir porque la relación contractual es exclusiva entre el paciente y la EPS; no existe deber de reporte ni acción institucional.",
        distractorProfile: "abstencion_medica_indebida",
        incorrectFeedback:
          "El profesional tiene deberes éticos y de vigilancia; la Ley 100 y la Constitución protegen el derecho fundamental a la salud.",
      },
      {
        id: "B",
        label: "B",
        text: "Activar la tutela por vulneración del derecho fundamental a la salud ante la negación injustificada de un servicio incluido en el PBS, documentando la indicación médica y la continuidad en la prestación.",
      },
      {
        id: "C",
        label: "C",
        text: "Solicitar al paciente que pague de forma particular el tratamiento y posteriormente demandar civilmente a la EPS por daños, sin usar mecanismos de protección inmediata.",
        distractorProfile: "via_civil_lenta",
        incorrectFeedback:
          "La tutela es el mecanismo preferente y célere para servicios de salud con riesgo vital; el pago particular no es el primer paso obligatorio.",
      },
      {
        id: "D",
        label: "D",
        text: "Remitir al paciente al régimen subsidiado cambiando su afiliación de forma unilateral para que otro plan asuma la diálisis sin trámite jurídico.",
        distractorProfile: "cambio_regimen_unilateral",
        incorrectFeedback:
          "El cambio de régimen tiene requisitos legales; no sustituye la protección inmediata ante negación de servicios en el régimen contributivo.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Negación de servicios del PBS con indicación médica y riesgo vital: mecanismo constitucional de tutela por derecho fundamental a la salud (Ley 100 y jurisprudencia constitucional).",
    keyPoints: [
      "La salud es derecho fundamental; tutela es vía célere.",
      "Documentar indicación médica y continuidad de cuidado.",
      "Tema: Legislación sanitaria — Ley 100 y acceso a servicios.",
    ],
  },
];

export function getUdeaDiagnosticSession(): TrainingQuestion[] {
  return [...UDEA_DIAGNOSTIC_QUESTIONS];
}
