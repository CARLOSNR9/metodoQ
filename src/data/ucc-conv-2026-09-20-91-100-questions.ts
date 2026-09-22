import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #8 (20 sep 2026) · Preguntas #91–#100.
 * Banco exclusivo del examen oficial.
 */
export const UCC_CONV_2026_09_20_91_100_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2026-09-20-91",
    university: "UCC",
    examArea: "HEMATOLOGÍA - ONCOLOGÍA",
    topic: "Leucemia Aguda",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "leucemia-aguda"],
    statement:
      "Un hombre de 34 años consulta por astenia progresiva, fiebre intermitente de 2 semanas de evolución, y aparición de equimosis espontáneas ante traumas mínimos. Refiere además encías sangrantes al cepillarse los dientes y dolor óseo difuso en piernas. Al examen físico hay palidez mucocutánea marcada, petequias en paladar duro, y hepatoesplenomegalia leve, sin adenopatías significativas. El hemograma muestra Hemoglobina 6.8 g/dL, Leucocitos 34.000/mm³ con 60% de blastos circulantes de aspecto inmaduro, y Plaquetas 18.000/mm³. Un frotis de sangre periférica confirma blastos de gran tamaño con núcleo prominente y citoplasma escaso; ninguno presenta bastones de Auer. ¿Cuál es la conducta INICIAL más apropiada ante este hallazgo, dado el riesgo de complicación catastrófica a corto plazo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar manejo ambulatorio con hierro oral y control hematológico en 4 semanas, dado que el paciente se encuentra hemodinámicamente estable en este momento.",
        distractorProfile: "dangerous_outpatient_management_of_oncologic_emergency",
        incorrectFeedback:
          "La pancitopenia con blastos circulantes >20% en sangre periférica es diagnóstica de leucemia aguda, una urgencia oncohematológica; el manejo ambulatorio con hierro oral retrasaría peligrosamente el diagnóstico definitivo y la corrección de las citopenias que ponen en riesgo inmediato la vida del paciente (hemorragia, infección).",
      },
      {
        id: "B",
        label: "B",
        text: "Solicitar únicamente serologías virales (VIH, hepatitis) para descartar una causa infecciosa de la pancitopenia antes de considerar cualquier otro estudio.",
        distractorProfile: "delaying_diagnosis_with_low_yield_workup",
        incorrectFeedback:
          "Aunque descartar infecciones virales es razonable dentro del estudio integral, la presencia de blastos inmaduros circulantes en un porcentaje tan alto ya es prácticamente diagnóstica de leucemia aguda; retrasar la hospitalización y el aspirado de médula ósea a la espera de serologías no acelera el diagnóstico ni protege al paciente del riesgo inminente de sangrado o infección grave.",
      },
      {
        id: "C",
        label: "C",
        text: "Hospitalizar de forma urgente para soporte transfusional inmediato (hemocomponentes), inicio de profilaxis/tratamiento antimicrobiano según hallazgos, y realización expedita de aspirado de médula ósea con estudios de inmunofenotipo y citogenética para confirmar el diagnóstico y clasificar el subtipo antes de iniciar quimioterapia.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar quimioterapia de inducción de forma inmediata en urgencias, sin esperar la confirmación por aspirado de médula ósea ni la clasificación por inmunofenotipo, dado que cada hora de retraso reduce la supervivencia.",
        distractorProfile: "premature_treatment_without_confirmatory_diagnosis",
        incorrectFeedback:
          "Aunque la leucemia aguda es una urgencia, el tratamiento quimioterápico específico depende del subtipo (mieloide vs. linfoide) y de alteraciones citogenéticas/moleculares que modifican el esquema (por ejemplo, la leucemia promielocítica requiere ácido transretinoico desde el inicio); iniciar quimioterapia sin esta caracterización expone al paciente a un tratamiento inadecuado y potencialmente dañino.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "El paciente presenta hallazgos altamente sugestivos de **Leucemia Aguda**: pancitopenia (anemia, trombocitopenia) con **blastos circulantes en un porcentaje elevado** en sangre periférica, acompañada de síntomas constitucionales, sangrado mucocutáneo (por trombocitopenia) y dolor óseo (por infiltración medular). Ante estos hallazgos, la leucemia aguda debe considerarse una **urgencia oncohematológica** por el riesgo inminente de hemorragia grave (secundaria a trombocitopenia severa, y en algunos subtipos a coagulopatía asociada), infección grave por neutropenia funcional (a pesar de la leucocitosis, los blastos no cumplen función inmune efectiva), y en casos de hiperleucocitosis marcada, leucostasis. La conducta apropiada es la **hospitalización inmediata** para iniciar soporte transfusional (concentrado de glóbulos rojos y plaquetas según necesidad), vigilancia estrecha e inicio de manejo antimicrobiano si hay evidencia de infección, mientras se realiza de forma expedita el **aspirado de médula ósea** con estudios de morfología, inmunofenotipo por citometría de flujo y citogenética/biología molecular, que son indispensables para **confirmar el diagnóstico y clasificar el subtipo** (leucemia mieloide aguda vs. linfoblástica aguda, y sus variantes de riesgo), información que determina directamente el esquema de quimioterapia de inducción a utilizar.",
    keyPoints: [
      "Paciente con síndrome anémico + síndrome purpúrico/hemorrágico + fiebre + dolor óseo, y blastos circulantes en un porcentaje elevado en el hemograma/frotis: cuadro clásico de leucemia aguda.",
      "Leucemia Aguda = urgencia oncohematológica. Conducta inicial: hospitalización, soporte transfusional y manejo de complicaciones, MIENTRAS se confirma el diagnóstico y subtipo con aspirado de médula ósea, inmunofenotipo y citogenética, antes de iniciar quimioterapia dirigida.",
      "Hematología / Leucemia Aguda.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-92",
    university: "UCC",
    examArea: "ONCOLOGÍA - NEFROLOGÍA",
    topic: "Síndrome de Lisis Tumoral",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "sindrome-de-lisis-tumoral"],
    statement:
      "Un hombre de 19 años con diagnóstico reciente de Linfoma de Burkitt (una neoplasia de alto índice proliferativo y gran masa tumoral) inicia su primer ciclo de quimioterapia de inducción. A las 24 horas presenta disminución del gasto urinario, calambres musculares y parestesias periorales. Los laboratorios muestran: Potasio 6.4 mEq/L, Ácido úrico 14 mg/dL, Fósforo 8.2 mg/dL, Calcio 6.8 mg/dL (bajo), y Creatinina en ascenso desde su valor basal. El electrocardiograma muestra ondas T picudas. ¿Cuál es el diagnóstico, y cuál es el pilar del manejo AGUDO de esta complicación, además de la corrección específica de las alteraciones electrolíticas potencialmente letales?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Síndrome de Lisis Tumoral; el pilar del manejo agudo es la hidratación intravenosa intensiva para mantener un flujo urinario alto, junto con Rasburicasa para el control rápido de la hiperuricemia y monitorización electrocardiográfica continua por el riesgo de arritmias letales por hiperpotasemia.",
      },
      {
        id: "B",
        label: "B",
        text: "Nefropatía por contraste; manejo con suspensión de la hidratación intravenosa y observación clínica exclusivamente.",
        distractorProfile: "wrong_diagnosis_and_dangerous_opposite_management",
        incorrectFeedback:
          "No hay antecedente de administración de medio de contraste yodado, y el patrón de hiperpotasemia, hiperuricemia, hiperfosfatemia e hipocalcemia tras el inicio de quimioterapia en un tumor de alta carga es diagnóstico de síndrome de lisis tumoral, que requiere HIDRATACIÓN intravenosa intensiva, no su suspensión.",
      },
      {
        id: "C",
        label: "C",
        text: "Síndrome Nefrótico secundario a infiltración renal linfomatosa; manejo con restricción hídrica estricta y diuréticos de asa en dosis altas.",
        distractorProfile: "wrong_diagnosis_missing_temporal_pattern_and_lab_profile",
        incorrectFeedback:
          "El síndrome nefrótico se caracteriza por proteinuria masiva, hipoalbuminemia y edema, hallazgos no descritos aquí; el patrón bioquímico específico (hiperpotasemia, hiperuricemia, hiperfosfatemia, hipocalcemia) apareciendo horas después del inicio de quimioterapia en un tumor de alto recambio celular es característico del síndrome de lisis tumoral, y la restricción hídrica sería contraproducente en este contexto.",
      },
      {
        id: "D",
        label: "D",
        text: "Insuficiencia Suprarrenal Aguda inducida por quimioterapia; manejo con hidrocortisona intravenosa en dosis de estrés como tratamiento único.",
        distractorProfile: "wrong_diagnosis_ignoring_metabolic_pattern",
        incorrectFeedback:
          "La insuficiencia suprarrenal aguda cursa típicamente con hiponatremia e hipoglucemia, no con el patrón específico de hiperpotasemia, hiperuricemia e hiperfosfatemia con hipocalcemia descrito; este perfil metabólico, en el contexto temporal preciso de inicio reciente de quimioterapia citorreductora, es diagnóstico de síndrome de lisis tumoral.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "El paciente presenta un **Síndrome de Lisis Tumoral (SLT)**, una urgencia oncológica metabólica que ocurre por la **destrucción masiva y súbita de células tumorales** (espontánea o, más frecuentemente, inducida por quimioterapia) en neoplasias de **alto índice proliferativo y gran masa tumoral**, como el Linfoma de Burkitt, uno de los tumores de mayor riesgo. La lisis celular libera grandes cantidades de potasio, fósforo y ácidos nucleicos (metabolizados a ácido úrico) hacia la circulación, generando la tétrada característica: **hiperpotasemia**, **hiperuricemia**, **hiperfosfatemia**, y **hipocalcemia secundaria** (por precipitación de fosfato de calcio y quelación del calcio por el exceso de fósforo). Estas alteraciones pueden causar **arritmias cardíacas letales** (por la hiperpotasemia, reflejada aquí en las ondas T picudas) y **lesión renal aguda** (por precipitación de cristales de ácido úrico y fosfato de calcio en los túbulos renales). El pilar del manejo agudo, además de la corrección específica y urgente de las alteraciones electrolíticas potencialmente letales (manejo de la hiperpotasemia con las medidas estándar), es la **hidratación intravenosa intensiva** para mantener un flujo urinario alto que favorezca la excreción de ácido úrico y fosfato y minimice su precipitación tubular, junto con el uso de **Rasburicasa** (urato oxidasa recombinante), que degrada rápida y eficazmente el ácido úrico existente, siendo superior al alopurinol en el manejo agudo de la hiperuricemia ya establecida. La **monitorización electrocardiográfica continua** es esencial por el riesgo de arritmias.",
    keyPoints: [
      "Paciente con tumor de alta carga/alto recambio celular (linfoma de Burkitt, leucemias agudas) que, horas después de iniciar quimioterapia, desarrolla hiperpotasemia + hiperuricemia + hiperfosfatemia + hipocalcemia, con riesgo de arritmia y lesión renal aguda.",
      "Síndrome de Lisis Tumoral. Manejo agudo: hidratación IV intensiva + Rasburicasa para la hiperuricemia + corrección urgente de electrolitos (especialmente potasio) + monitorización electrocardiográfica continua. La profilaxis en tumores de alto riesgo se hace ANTES de la quimioterapia con hidratación y Rasburicasa/alopurinol.",
      "Oncología / Síndrome de Lisis Tumoral.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-93",
    university: "UCC",
    examArea: "ONCOLOGÍA - NEUROLOGÍA",
    topic: "Compresión Medular Metastásica",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "compresion-medular-metastasica"],
    statement:
      "Una mujer de 58 años, con antecedente de cáncer de mama tratado hace 4 años, consulta por dolor dorsal intenso de 3 semanas de evolución, progresivo, que empeora característicamente en decúbito y durante la noche, y que en los últimos 2 días se ha acompañado de debilidad progresiva en ambas piernas y dificultad para orinar. Al examen físico hay paraparesia (fuerza 3/5 en ambos miembros inferiores), hiperreflexia patelar y aquiliana bilateral, un nivel sensitivo definido a nivel de T8, y retención urinaria (globo vesical palpable). ¿Cuál es el diagnóstico que debe sospecharse con MÁXIMA prioridad, y cuál es la conducta INMEDIATA más apropiada mientras se organiza la confirmación imagenológica y el tratamiento definitivo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Hernia discal dorsal degenerativa; manejo ambulatorio con analgésicos antiinflamatorios y fisioterapia, con resonancia magnética programada de forma electiva en las próximas semanas.",
        distractorProfile: "dangerous_delay_in_oncologic_emergency",
        incorrectFeedback:
          "El antecedente oncológico, el dolor dorsal progresivo que empeora en decúbito/nocturno, y el déficit neurológico progresivo (paraparesia, nivel sensitivo, disfunción esfinteriana) son una tríada de alarma que obliga a descartar compresión medular metastásica como urgencia; manejar esto de forma ambulatoria y diferir la resonancia retrasaría peligrosamente una intervención que debe ser inmediata para preservar la función neurológica.",
      },
      {
        id: "B",
        label: "B",
        text: "Estenosis del canal lumbar; manejo con infiltración epidural de corticoides de forma ambulatoria.",
        distractorProfile: "wrong_diagnosis_wrong_anatomic_level",
        incorrectFeedback:
          "El nivel sensitivo descrito es torácico (T8), no lumbar, y la estenosis del canal lumbar no explica un nivel sensitivo definido ni la progresión tan rápida; el antecedente oncológico y este patrón clínico obligan a descartar compresión medular metastásica torácica con estudio de imagen urgente e inicio inmediato de corticosteroides.",
      },
      {
        id: "C",
        label: "C",
        text: "Síndrome de Guillain-Barré; manejo con inmunoglobulina intravenosa como primera línea, sin necesidad de estudios de imagen de columna.",
        distractorProfile: "wrong_diagnosis_missing_upper_motor_neuron_signs",
        incorrectFeedback:
          "El Guillain-Barré típicamente causa debilidad ascendente con AREFLEXIA (no hiperreflexia) y sin un nivel sensitivo definido; los hallazgos de esta paciente (hiperreflexia, nivel sensitivo claro, antecedente oncológico) son característicos de una lesión medular compresiva por metástasis, que requiere estudio de imagen urgente, no inmunoglobulina.",
      },
      {
        id: "D",
        label: "D",
        text: "Compresión Medular Metastásica; la conducta inmediata es iniciar corticosteroides sistémicos en dosis altas (p. ej., Dexametasona) sin demora, y solicitar de forma URGENTE una resonancia magnética de toda la columna para confirmar el nivel y extensión de la compresión, con el objetivo de definir el tratamiento definitivo (radioterapia y/o cirugía descompresiva) lo antes posible.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "La paciente presenta hallazgos clásicos de **Compresión Medular Metastásica**, una verdadera **urgencia oncológica neurológica**, en la cual cada hora de retraso en el tratamiento puede traducirse en pérdida IRREVERSIBLE de función neurológica (motora, sensitiva y esfinteriana). Los elementos de alarma son: **antecedente de cáncer** (el cáncer de mama es una de las neoplasias que con mayor frecuencia metastatiza a columna), **dolor dorsal progresivo que empeora característicamente en decúbito y durante la noche** (a diferencia del dolor mecánico degenerativo, que típicamente mejora con el reposo), y la aparición de **déficit neurológico progresivo**: paraparesia con signos de motoneurona superior (hiperreflexia, ya que la lesión está por encima del cono medular), un **nivel sensitivo** que localiza el sitio de la lesión, y **disfunción esfinteriana** (retención urinaria), que indica compromiso avanzado y es un signo de mal pronóstico si no se actúa con rapidez. Ante esta sospecha clínica, la conducta **no debe esperar** la confirmación imagenológica para iniciar tratamiento: se deben administrar **corticosteroides sistémicos en dosis altas (Dexametasona)** de forma inmediata, ya que reducen el edema perilesional y pueden mejorar o estabilizar la función neurológica mientras se organiza el estudio definitivo, y simultáneamente solicitar con carácter **urgente** una **resonancia magnética de toda la columna** (dado que puede haber múltiples niveles de compresión) para definir el tratamiento definitivo, que según el caso puede ser radioterapia y/o descompresión quirúrgica.",
    keyPoints: [
      "Paciente con antecedente oncológico + dolor dorsal/espinal que empeora en decúbito/nocturno + debilidad progresiva con signos de motoneurona superior (hiperreflexia) + nivel sensitivo + disfunción esfinteriana: tríada de alarma de compresión medular metastásica.",
      "Compresión Medular Metastásica = urgencia oncológica. Conducta INMEDIATA (sin esperar imagen): Corticosteroides sistémicos en dosis altas (Dexametasona) + Resonancia magnética urgente de toda la columna para definir radioterapia y/o cirugía descompresiva.",
      "Oncología / Compresión Medular Metastásica.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-94",
    university: "UCC",
    examArea: "SALUD PÚBLICA - EPIDEMIOLOGÍA",
    topic: "Notificación Obligatoria y Vigilancia Epidemiológica",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "notificacion-obligatoria-vigilancia-epidemiologica"],
    statement:
      "Un médico general que labora en un hospital de primer nivel en un municipio colombiano atiende a un paciente de 26 años con cuadro clínico y confirmación por laboratorio de Meningitis Meningocócica, un evento de interés en salud pública de notificación inmediata según los lineamientos del Sistema de Vigilancia en Salud Pública (SIVIGILA) de Colombia. El médico está atendiendo una jornada de urgencias muy congestionada y considera reportar el caso al finalizar su turno de 24 horas, dentro del reporte semanal rutinario que envía habitualmente al SIVIGILA. ¿Cuál es la conducta CORRECTA respecto al tiempo y proceso de notificación de este evento, dada su clasificación específica dentro del sistema de vigilancia?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Es correcto incluirlo en el reporte semanal rutinario, ya que todos los eventos de notificación obligatoria en Colombia se reportan bajo la misma periodicidad semanal sin excepción.",
        distractorProfile: "incorrect_generalization_ignoring_immediate_notification_events",
        incorrectFeedback:
          "No todos los eventos de notificación obligatoria comparten la misma periodicidad; el SIVIGILA clasifica ciertos eventos de alto impacto en salud pública (brotes, enfermedades transmisibles de alto riesgo epidémico como la meningitis meningocócica) como de NOTIFICACIÓN INMEDIATA, que deben reportarse dentro de las siguientes horas al diagnóstico, no esperar el ciclo semanal rutinario.",
      },
      {
        id: "B",
        label: "B",
        text: "La Meningitis Meningocócica es un evento de notificación INMEDIATA (dentro de las primeras 24 horas tras la confirmación o sospecha fundada) dada su capacidad de generar brotes y su alta letalidad; el médico debe notificarlo sin demora a la autoridad sanitaria correspondiente, independientemente de la carga asistencial del turno, sin esperar el reporte semanal rutinario.",
      },
      {
        id: "C",
        label: "C",
        text: "La notificación es responsabilidad exclusiva del laboratorio clínico que confirmó el diagnóstico microbiológico, por lo que el médico tratante no tiene obligación legal de reportar el caso.",
        distractorProfile: "incorrect_transfer_of_legal_responsibility",
        incorrectFeedback:
          "La notificación obligatoria en el sistema de vigilancia epidemiológica colombiano es responsabilidad del equipo de salud que atiende al paciente (incluyendo al médico tratante), no exclusivamente del laboratorio; delegar esta responsabilidad únicamente al laboratorio no exime al médico de su obligación legal de notificar el evento.",
      },
      {
        id: "D",
        label: "D",
        text: "Al tratarse de un caso único y no de un brote confirmado con múltiples casos, no existe obligación de notificación hasta que se identifiquen casos adicionales relacionados.",
        distractorProfile: "incorrect_threshold_misunderstanding_of_mandatory_reporting",
        incorrectFeedback:
          "La notificación obligatoria de eventos como la meningitis meningocócica aplica desde el PRIMER caso sospechoso o confirmado, precisamente porque la vigilancia temprana de casos individuales es lo que permite detectar e intervenir brotes oportunamente; esperar a que aparezcan más casos para notificar sería contrario al objetivo mismo de la vigilancia en salud pública.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "El Sistema de Vigilancia en Salud Pública (SIVIGILA) en Colombia clasifica los eventos de interés en salud pública según su **periodicidad de notificación**, determinada por su impacto potencial, capacidad epidémica y necesidad de respuesta oportuna. La **Meningitis Meningocócica**, causada por *Neisseria meningitidis*, es un evento de **notificación INMEDIATA** debido a su capacidad de generar brotes con rapidez (transmisión respiratoria directa, alta tasa de ataque secundario en contactos cercanos) y su **alta letalidad** si no se interviene con celeridad, tanto en el manejo del caso índice como en la implementación de medidas de salud pública dirigidas a sus contactos (quimioprofilaxis, vigilancia de contactos). Esto contrasta con eventos de menor urgencia epidemiológica, que se notifican bajo la periodicidad **semanal** rutinaria del sistema. La obligación de notificar recae sobre **todo el equipo de salud** que atiende o diagnostica el caso, incluyendo al médico tratante, y debe realizarse **sin demora**, típicamente dentro de las **primeras 24 horas** tras la sospecha fundada o confirmación, comunicándose a la autoridad sanitaria local/departamental correspondiente, precisamente para permitir una respuesta de salud pública oportuna (identificación y profilaxis de contactos, búsqueda activa de casos adicionales, y control del posible brote) que puede salvar vidas más allá del paciente índice.",
    keyPoints: [
      "No todos los eventos de notificación obligatoria en Colombia comparten la misma periodicidad; algunos (como la meningitis meningocócica, brotes, y otras enfermedades de alto impacto epidémico) son de NOTIFICACIÓN INMEDIATA, no semanal.",
      "Meningitis Meningocócica: notificación inmediata (dentro de ~24 horas) al SIVIGILA/autoridad sanitaria, responsabilidad de todo el equipo de salud tratante, desde el primer caso sospechoso o confirmado, para permitir respuesta oportuna (profilaxis de contactos, control de brote).",
      "Salud Pública / Vigilancia Epidemiológica y Notificación Obligatoria (SIVIGILA).",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-95",
    university: "UCC",
    examArea: "BIOÉTICA - MEDICINA LEGAL",
    topic: "Consentimiento Informado y Confidencialidad",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "consentimiento-informado-confidencialidad"],
    statement:
      "Un hombre de 45 años, casado, es diagnosticado con infección por VIH tras un estudio solicitado por síntomas constitucionales inespecíficos. El paciente, competente para tomar decisiones y plenamente informado de su diagnóstico, expresa categóricamente al médico tratante su deseo de que esta información NO sea revelada a su esposa, con quien mantiene vida sexual activa sin protección, argumentando temor a la ruptura de su matrimonio. El médico ha intentado durante varias consultas persuadir al paciente de informar voluntariamente a su pareja o de adoptar medidas de protección, sin éxito. ¿Cuál es la conducta ÉTICAMENTE Y LEGALMENTE más apropiada en este escenario de tensión entre la confidencialidad del paciente y el riesgo a un tercero identificable?",
    options: [
      {
        id: "A",
        label: "A",
        text: "La confidencialidad médico-paciente es un principio absoluto e inviolable en toda circunstancia; el médico debe abstenerse de cualquier revelación a la esposa bajo cualquier escenario, incluso si esto implica un riesgo continuo de transmisión.",
        distractorProfile: "absolutist_misapplication_of_confidentiality_principle",
        incorrectFeedback:
          "Aunque la confidencialidad es un principio fundamental, no es absoluto en la ética y el derecho médico: existe una excepción reconocida cuando hay un riesgo grave, real e inminente para un tercero identificable (el llamado 'deber de advertir/proteger'), como ocurre en este caso con la pareja sexual del paciente ante una infección de transmisión sexual grave sin protección.",
      },
      {
        id: "B",
        label: "B",
        text: "El médico debe notificar inmediatamente a las autoridades judiciales para que inicien un proceso penal contra el paciente por posible exposición a un tercero, sin intentar previamente ninguna medida de persuasión o protección menos invasiva.",
        distractorProfile: "disproportionate_punitive_response_skipping_graduated_approach",
        incorrectFeedback:
          "El abordaje ético y clínico apropiado sigue un principio de proporcionalidad y gradualidad: primero agotar la persuasión, ofrecer apoyo y educar sobre medidas de protección, y solo si esto fracasa considerar la revelación protectora siguiendo protocolos establecidos; acudir directamente a un proceso penal sin agotar estas instancias no es la conducta médica ética inicial apropiada.",
      },
      {
        id: "C",
        label: "C",
        text: "Dado que existe un riesgo real, grave e identificable para un tercero específico (la esposa, con exposición sexual continua sin protección), y habiendo agotado razonablemente los esfuerzos para persuadir al paciente de revelar su condición o adoptar medidas de protección, está éticamente justificado que el médico, siguiendo los protocolos institucionales y legales aplicables, tome medidas para que la pareja sea informada o protegida, priorizando la prevención de un daño grave sobre la confidencialidad estricta en este escenario específico.",
      },
      {
        id: "D",
        label: "D",
        text: "El médico debe informar del diagnóstico a toda la familia extendida del paciente (padres, hermanos) para que ejerzan presión social sobre él y lo persuadan de cambiar de decisión.",
        distractorProfile: "disproportionate_breach_of_confidentiality_beyond_at_risk_party",
        incorrectFeedback:
          "La eventual revelación protectora, cuando está justificada, debe limitarse estrictamente al tercero en riesgo real e identificable (la pareja sexual), y no extenderse a otros familiares sin riesgo directo, lo cual constituiría una violación desproporcionada e injustificada de la confidencialidad del paciente.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Este caso ilustra la tensión clásica entre dos principios bioéticos fundamentales: el **respeto a la confidencialidad y autonomía del paciente**, y el **deber de no maleficencia hacia terceros** (evitar un daño grave y prevenible a otra persona). La confidencialidad médico-paciente, aunque es un pilar esencial de la relación clínica y está protegida legalmente, **no es un principio absoluto**: la ética médica y la jurisprudencia reconocen una excepción justificada cuando existe un **riesgo grave, real e inminente para un tercero identificable y específico** (no un riesgo difuso a la población general), como ocurre en este caso con la esposa del paciente, quien mantiene exposición sexual continua sin protección ante una infección de transmisión sexual con consecuencias potencialmente graves. La conducta éticamente apropiada sigue un **principio de gradualidad y proporcionalidad**: el médico debe primero **agotar razonablemente los esfuerzos de persuasión** (como se describe que ya se hizo en varias consultas), ofreciendo apoyo, educación y explorando las razones del paciente; solo si estos esfuerzos fracasan y el riesgo persiste, está justificado que el médico, **siguiendo los protocolos institucionales y el marco legal aplicable** (que en muchos contextos incluye la posibilidad de que el equipo de salud pública o el propio médico, con el debido respaldo, informe a la pareja en riesgo), tome medidas para proteger al tercero identificado, priorizando la **prevención de un daño grave y evitable** sobre una confidencialidad que, en este escenario límite específico, entra en conflicto directo con la seguridad de otra persona.",
    keyPoints: [
      "Tensión clásica bioética: confidencialidad/autonomía del paciente vs. deber de proteger a un tercero identificable ante riesgo grave y real (pareja sexual sin protección frente a infección de transmisión sexual grave).",
      "La confidencialidad NO es absoluta: existe excepción justificada cuando hay riesgo grave, real e identificable a un tercero específico. Abordaje correcto: gradualidad (persuasión primero) y, si fracasa, revelación protectora limitada al tercero en riesgo, siguiendo protocolos legales/institucionales, nunca extendida a terceros sin riesgo directo.",
      "Bioética / Consentimiento Informado, Confidencialidad y Deber de Proteger a Terceros.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-96",
    university: "UCC",
    examArea: "MEDICINA LEGAL - GINECOLOGÍA",
    topic: "Atención Inicial a Víctima de Violencia Sexual",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "atencion-inicial-victima-violencia-sexual"],
    statement:
      "Una mujer de 22 años consulta al servicio de urgencias acompañada de un familiar, refiriendo haber sido víctima de una agresión sexual hace 6 horas por parte de un desconocido. Se encuentra angustiada pero hemodinámicamente estable, sin lesiones que requieran manejo quirúrgico inmediato. Aún no ha sido valorada por Medicina Legal ni ha instaurado denuncia formal. ¿Cuál es la conducta INICIAL más apropiada del equipo de salud en urgencias, priorizando tanto la atención integral de la paciente como la preservación adecuada de la evidencia médico-legal?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Brindar atención médica integral inmediata (evaluación de lesiones, apoyo psicológico inicial, profilaxis para infecciones de transmisión sexual incluyendo VIH y hepatitis B, y anticoncepción de emergencia si aplica), preservar cuidadosamente la evidencia física sin que la paciente se bañe o cambie de ropa previamente, y activar la ruta de atención integral a víctimas de violencia sexual (incluyendo la articulación con Medicina Legal y las autoridades competentes), la cual NO requiere denuncia previa por parte de la víctima para iniciarse.",
      },
      {
        id: "B",
        label: "B",
        text: "Indicar a la paciente que debe bañarse y cambiarse de ropa antes de la valoración médica para su comodidad, y remitirla directamente a Medicina Legal sin brindar atención médica en el servicio de urgencias, ya que la evaluación forense debe realizarse primero.",
        distractorProfile: "dangerous_evidence_destruction_and_care_denial",
        incorrectFeedback:
          "Indicar a la paciente que se bañe o cambie de ropa antes de la valoración médica destruiría evidencia médico-legal crucial; además, la atención médica integral en urgencias (incluyendo profilaxis y atención de lesiones) NO debe condicionarse ni postergarse a la espera de la valoración forense, la cual puede coordinarse en paralelo o inmediatamente después según la organización institucional.",
      },
      {
        id: "C",
        label: "C",
        text: "Informar a la paciente que, al no haber instaurado aún una denuncia penal formal, el servicio de salud no puede iniciar ningún tipo de atención médica relacionada con el evento hasta que dicha denuncia se presente ante la autoridad competente.",
        distractorProfile: "incorrect_conditioning_of_healthcare_on_legal_complaint",
        incorrectFeedback:
          "La atención integral en salud a víctimas de violencia sexual es un derecho que NO está condicionado a la presentación previa de una denuncia penal formal; el sistema de salud tiene la obligación de brindar atención inmediata independientemente de si la víctima ha denunciado o decide hacerlo posteriormente.",
      },
      {
        id: "D",
        label: "D",
        text: "Limitar la atención exclusivamente a la sutura de lesiones físicas visibles, sin ofrecer profilaxis para infecciones de transmisión sexual ni anticoncepción de emergencia, ya que estas medidas solo están indicadas si la agresión es confirmada posteriormente por Medicina Legal.",
        distractorProfile: "incomplete_care_delaying_time_sensitive_prophylaxis",
        incorrectFeedback:
          "La profilaxis para infecciones de transmisión sexual (incluyendo VIH) y la anticoncepción de emergencia son medidas TIEMPO-DEPENDIENTES cuya eficacia disminuye significativamente con el retraso; deben ofrecerse desde la atención inicial en urgencias con base en el relato de la paciente, sin esperar la confirmación de Medicina Legal, cuyo dictamen tiene fines periciales distintos y no debe retrasar la atención clínica urgente.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "La atención inicial a una víctima de violencia sexual en urgencias debe seguir un enfoque de **atención integral, oportuna y centrada en la persona**, que simultáneamente proteja la salud física y mental de la paciente y preserve adecuadamente la evidencia médico-legal, sin que ambos objetivos sean excluyentes. Los elementos clave del manejo inicial incluyen: **evaluación y manejo de lesiones físicas**, **apoyo psicológico/en salud mental inicial**, y de forma **tiempo-sensible**, el inicio de **profilaxis post-exposición para infecciones de transmisión sexual** (incluyendo esquema profiláctico para VIH cuando esté indicado según el tiempo transcurrido y el tipo de exposición, y profilaxis/vacunación para hepatitis B), así como **anticoncepción de emergencia** cuando sea pertinente, medidas cuya eficacia depende críticamente de su administración temprana y que **no deben condicionarse** a la valoración forense previa. En cuanto a la **preservación de evidencia**, es fundamental **evitar que la paciente se bañe, cambie de ropa o realice higiene genital** antes de la valoración médico-legal, ya que esto puede destruir evidencia física crucial (fluidos biológicos, fibras, etc.). Un punto legal y ético central es que, en el marco de la atención integral a víctimas de violencia sexual, la **atención en salud es un derecho que NO está condicionado a la presentación previa de una denuncia penal formal**: el sistema de salud debe activar la ruta de atención de forma inmediata con base en el relato de la paciente, articulándose posteriormente (o en paralelo, según la organización institucional) con Medicina Legal y las autoridades competentes, sin que la ausencia de denuncia sea un obstáculo para brindar la atención médica que la paciente necesita.",
    keyPoints: [
      "Víctima de violencia sexual en urgencias: atención integral inmediata (lesiones, apoyo psicológico, profilaxis ITS/VIH/hepatitis B, anticoncepción de emergencia si aplica) sin condicionarla a valoración forense previa ni a denuncia penal formal.",
      "Preservación de evidencia: evitar que la paciente se bañe, cambie de ropa o realice higiene genital antes de la valoración médico-legal. La profilaxis y anticoncepción de emergencia son tiempo-dependientes: no deben retrasarse esperando confirmación forense.",
      "Medicina Legal / Atención Integral a Víctimas de Violencia Sexual.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-97",
    university: "UCC",
    examArea: "NEFROLOGÍA - MEDICINA INTERNA",
    topic: "Enfermedad Renal Crónica",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "enfermedad-renal-cronica"],
    statement:
      "Un hombre de 62 años, con antecedente de Diabetes Mellitus tipo 2 e Hipertensión Arterial de larga data, tiene diagnóstico conocido de Enfermedad Renal Crónica estadio 4 (Tasa de Filtración Glomerular estimada de 22 mL/min/1.73m²), en seguimiento por Nefrología. En su control de rutina refiere fatiga progresiva y disnea leve de esfuerzo. Los laboratorios muestran: Hemoglobina 9.2 g/dL (normocítica normocrómica), Ferritina 180 ng/mL (adecuada), Saturación de transferrina 25% (adecuada), Fósforo sérico 6.1 mg/dL (elevado), Calcio sérico 8.4 mg/dL, y Hormona Paratiroidea (PTH) intacta elevada. ¿Cuál es el manejo MÁS apropiado de estas dos alteraciones asociadas a su enfermedad renal crónica (anemia e hiperfosfatemia), considerando los depósitos de hierro ya adecuados?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar suplementación de hierro intravenoso en altas dosis como manejo único de la anemia, y no requiere ninguna intervención específica para el fósforo elevado mientras el calcio permanezca dentro de rango normal-bajo.",
        distractorProfile: "unnecessary_iron_and_ignoring_hyperphosphatemia_risk",
        incorrectFeedback:
          "Los depósitos de hierro ya son adecuados (ferritina y saturación de transferrina normales), por lo que suplementar hierro adicional no corregiría la anemia de causa predominantemente eritropoyética en este contexto; además, la hiperfosfatemia en ERC SÍ requiere manejo activo (restricción dietética y quelantes) independientemente del calcio sérico, ya que contribuye al hiperparatiroidismo secundario y a la calcificación vascular.",
      },
      {
        id: "B",
        label: "B",
        text: "No se requiere ninguna intervención específica para la anemia ni para el fósforo, ya que ambas alteraciones son hallazgos esperados y benignos en la Enfermedad Renal Crónica que no impactan el pronóstico del paciente.",
        distractorProfile: "dangerous_dismissal_of_treatable_ckd_complications",
        incorrectFeedback:
          "Tanto la anemia como la hiperfosfatemia en ERC son complicaciones TRATABLES que, si no se manejan, se asocian a mayor morbimortalidad cardiovascular, progresión del hiperparatiroidismo secundario y deterioro de la calidad de vida; ambas requieren manejo activo específico, no solo observación.",
      },
      {
        id: "C",
        label: "C",
        text: "Transfundir concentrado de glóbulos rojos de forma rutinaria cada 2 semanas como manejo estándar de la anemia en ERC, y manejar el fósforo elevado exclusivamente con diálisis de urgencia inmediata.",
        distractorProfile: "inappropriate_routine_transfusion_and_premature_dialysis",
        incorrectFeedback:
          "La transfusión rutinaria no es el manejo estándar de la anemia crónica estable en ERC (se reserva para anemia sintomática severa o refractaria, dado el riesgo de sobrecarga de hierro y sensibilización), y el paciente no tiene criterios de urgencia dialítica solo por hiperfosfatemia leve-moderada; el manejo apropiado inicial es con Agentes Estimulantes de la Eritropoyesis y quelantes orales de fósforo.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar un Agente Estimulante de la Eritropoyesis (AEE) para la anemia, dado que los depósitos de hierro ya son adecuados y la anemia en ERC avanzada se debe predominantemente a la deficiencia de eritropoyetina endógena; y para la hiperfosfatemia, iniciar restricción dietética de fósforo junto con quelantes de fósforo orales con las comidas.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "El paciente presenta dos complicaciones clásicas y frecuentes de la **Enfermedad Renal Crónica (ERC) avanzada**: **anemia** e **hiperfosfatemia con hiperparatiroidismo secundario**. La **anemia de la ERC** se debe predominantemente a la **disminución en la producción de eritropoyetina** por el riñón enfermo (el principal órgano productor de esta hormona, que estimula la eritropoyesis medular), generando una anemia típicamente **normocítica normocrómica**; en este paciente, con **depósitos de hierro ya adecuados** (ferritina y saturación de transferrina dentro de rango), la suplementación adicional de hierro no sería el manejo apropiado, y el tratamiento indicado es el inicio de un **Agente Estimulante de la Eritropoyesis (AEE)**, como la eritropoyetina recombinante o sus análogos, que corrige la anemia al suplir la deficiencia hormonal subyacente (siempre asegurando previamente depósitos de hierro adecuados, ya que un AEE sin suficiente hierro disponible sería inefectivo). Respecto a la **hiperfosfatemia**, que ocurre porque el riñón enfermo pierde su capacidad de excretar el exceso de fósforo dietético, y que es un contribuyente clave al desarrollo de **hiperparatiroidismo secundario** (el fósforo elevado estimula directamente la secreción de PTH, además de reducir la producción renal de calcitriol) y a la calcificación vascular, el manejo consiste en la **restricción dietética de fósforo** y el uso de **quelantes de fósforo orales**, administrados junto con las comidas para unirse al fósforo dietético en el tracto gastrointestinal y reducir su absorción.",
    keyPoints: [
      "ERC avanzada con anemia normocítica normocrómica y depósitos de hierro YA ADECUADOS (ferritina y saturación de transferrina normales) + hiperfosfatemia con PTH elevada (hiperparatiroidismo secundario).",
      "Anemia de ERC con hierro adecuado: manejo con Agente Estimulante de la Eritropoyesis (AEE), no con más hierro. Hiperfosfatemia de ERC: restricción dietética de fósforo + quelantes de fósforo orales con las comidas, para prevenir progresión del hiperparatiroidismo secundario y calcificación vascular.",
      "Nefrología / Complicaciones de la Enfermedad Renal Crónica (Anemia e Hiperfosfatemia).",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-98",
    university: "UCC",
    examArea: "CUIDADO CRÍTICO - ANESTESIOLOGÍA",
    topic: "Vía Aérea Difícil",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "via-aerea-dificil"],
    statement:
      "Un hombre de 48 años con obesidad severa, cuello corto, y antecedente de apnea obstructiva del sueño, ingresa a urgencias con insuficiencia respiratoria aguda que requiere manejo definitivo de la vía aérea. Durante la evaluación preintubación se identifican múltiples predictores de vía aérea difícil (Mallampati IV, distancia tiromentoniana corta, apertura oral limitada). Se procede a la inducción e intubación, pero tras el primer intento con laringoscopia directa NO se logra visualizar la glotis ni intubar al paciente, y la saturación de oxígeno comienza a descender progresivamente a pesar de intentos de ventilación con bolsa-mascarilla, que también resulta DIFÍCIL. ¿Cuál es la conducta MÁS apropiada en este escenario de vía aérea difícil ya anticipada, que ahora progresa hacia un escenario crítico de \"no intubación - no ventilación\"?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Persistir con múltiples intentos adicionales de laringoscopia directa con la misma técnica, ya que un mayor número de intentos aumenta la probabilidad estadística de éxito eventual.",
        distractorProfile: "dangerous_repeated_attempts_worsening_airway_edema_and_hypoxia",
        incorrectFeedback:
          "Persistir con múltiples intentos repetidos de laringoscopia directa con la misma técnica en un escenario de vía aérea difícil con desaturación progresiva es peligroso: cada intento fallido puede generar trauma, edema y sangrado que empeoran progresivamente la visualización y la capacidad de ventilar, además de prolongar la hipoxemia; el algoritmo de vía aérea difícil indica limitar el número de intentos y escalar rápidamente a estrategias alternativas.",
      },
      {
        id: "B",
        label: "B",
        text: "Seguir el algoritmo de vía aérea difícil: limitar el número de intentos de laringoscopia, optimizar la oxigenación/ventilación con dispositivos supraglóticos como medida puente, considerar videolaringoscopia si está disponible, y ante un escenario de \"no intubación - no ventilación\" que no responde a estas medidas, proceder sin demora a una vía aérea quirúrgica de emergencia (cricotiroidotomía).",
      },
      {
        id: "C",
        label: "C",
        text: "Suspender por completo cualquier intento adicional de manejo de la vía aérea y esperar a que el paciente recupere la ventilación espontánea de forma autónoma sin ninguna intervención activa.",
        distractorProfile: "dangerous_passive_management_during_life_threatening_hypoxia",
        incorrectFeedback:
          "Ante un escenario de hipoxemia progresiva con incapacidad de intubar y de ventilar, la conducta pasiva de esperar sin intervenir es incompatible con la supervivencia del paciente; el algoritmo de vía aérea difícil exige una escalada activa e inmediata de intervenciones, culminando en una vía aérea quirúrgica de emergencia si es necesario.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar dosis adicionales de relajante neuromuscular para profundizar la relajación y reintentar exclusivamente la laringoscopia directa, sin considerar dispositivos supraglóticos ni una eventual vía aérea quirúrgica.",
        distractorProfile: "incomplete_algorithm_omitting_escalation_options",
        incorrectFeedback:
          "Profundizar la relajación neuromuscular no resuelve por sí sola una vía aérea anatómicamente difícil, y limitar la estrategia exclusivamente a reintentos de laringoscopia directa, sin considerar dispositivos supraglóticos como puente ni la posibilidad de una vía aérea quirúrgica, contradice el algoritmo establecido para el manejo de la vía aérea difícil con desaturación progresiva.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Este paciente presenta un escenario de **Vía Aérea Difícil anticipada** (múltiples predictores identificados: Mallampati IV, distancia tiromentoniana corta, apertura oral limitada, obesidad severa, cuello corto) que progresa hacia el escenario más crítico dentro de los algoritmos de manejo de vía aérea: la situación de **\"no intubación - no ventilación\"** (o \"cannot intubate, cannot ventilate/oxygenate\"), en la cual el paciente no puede ser intubado por laringoscopia y tampoco puede ser adecuadamente ventilado/oxigenado por métodos convencionales (bolsa-mascarilla), lo que representa una **amenaza inmediata para la vida** por hipoxemia progresiva. Los algoritmos estandarizados de manejo de vía aérea difícil (como los de la Sociedad Americana de Anestesiólogos y sociedades equivalentes) indican una **escalada estructurada y rápida** de intervenciones: primero, **limitar el número de intentos de laringoscopia directa** (para evitar trauma y edema acumulativos que empeoran progresivamente la vía aérea), optimizar la oxigenación mediante **dispositivos supraglóticos** (como la máscara laríngea) como medida puente que con frecuencia permite oxigenar/ventilar temporalmente mientras se organizan alternativas, considerar la **videolaringoscopia** si está disponible (mejora la tasa de éxito de intubación en vías aéreas difíciles al mejorar la visualización), y, de manera crucial, si estas medidas fallan y persiste el escenario de \"no intubación - no ventilación\" con hipoxemia progresiva que amenaza la vida, se debe proceder **sin demora** a una **vía aérea quirúrgica de emergencia** (cricotiroidotomía), como medida de rescate final que restablece una vía aérea definitiva cuando todas las alternativas menos invasivas han fallado.",
    keyPoints: [
      "Vía aérea difícil anticipada (múltiples predictores) que progresa a escenario \"no intubación - no ventilación\" con desaturación progresiva: emergencia que amenaza la vida y exige escalada rápida y estructurada, no reintentos repetidos de la misma técnica.",
      "Algoritmo de vía aérea difícil: limitar intentos de laringoscopia → dispositivo supraglótico como puente → videolaringoscopia si disponible → si persiste \"no intubación - no ventilación\": vía aérea quirúrgica de emergencia (cricotiroidotomía) sin demora.",
      "Cuidado Crítico / Manejo de la Vía Aérea Difícil.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-99",
    university: "UCC",
    examArea: "CARDIOLOGÍA - CUIDADO CRÍTICO",
    topic: "Taponamiento Cardíaco",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "taponamiento-cardiaco"],
    statement:
      "Un hombre de 55 años, con antecedente de carcinoma pulmonar avanzado, consulta a urgencias por disnea progresiva de rápida instauración, en los últimos 2 días, asociada a sensación de plenitud torácica. Al examen físico se encuentra taquicárdico, hipotenso (PA 82/60 mmHg), con ingurgitación yugular marcada, ruidos cardíacos velados (hipofonéticos), y un pulso paradójico de 18 mmHg (descenso inspiratorio de la presión arterial sistólica mayor al normal). Un ecocardiograma transtorácico urgente confirma un derrame pericárdico de gran volumen con colapso diastólico del ventrículo derecho. ¿Cuál es el diagnóstico, y cuál es la conducta terapéutica DEFINITIVA e inmediata ante este hallazgo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Insuficiencia Cardíaca Descompensada; manejo con diuréticos de asa intravenosos en dosis altas como pilar del tratamiento inmediato.",
        distractorProfile: "dangerous_diuretic_use_reducing_preload_in_tamponade",
        incorrectFeedback:
          "La tríada de Beck (hipotensión, ingurgitación yugular, ruidos cardíacos velados) junto con el pulso paradójico y el colapso diastólico del ventrículo derecho en el ecocardiograma son diagnósticos de taponamiento cardíaco, no de insuficiencia cardíaca descompensada; los diuréticos serían PELIGROSOS en el taponamiento, ya que reducen la precarga necesaria para mantener el gasto cardíaco en un corazón ya comprimido externamente por el líquido pericárdico.",
      },
      {
        id: "B",
        label: "B",
        text: "Neumotórax a Tensión; manejo con toracostomía con aguja de urgencia en el segundo espacio intercostal.",
        distractorProfile: "wrong_diagnosis_wrong_procedure_for_confirmed_pericardial_effusion",
        incorrectFeedback:
          "El neumotórax a tensión se confirma clínicamente (ausencia unilateral de ruidos respiratorios, hiperresonancia, desviación traqueal) y no requiere ecocardiograma para su diagnóstico; en este caso el ecocardiograma confirma específicamente derrame pericárdico con colapso del ventrículo derecho, diagnóstico de taponamiento cardíaco, que requiere pericardiocentesis, no toracostomía con aguja.",
      },
      {
        id: "C",
        label: "C",
        text: "Taponamiento Cardíaco; la conducta definitiva e inmediata es la Pericardiocentesis urgente (guiada por ecocardiografía cuando sea posible) para evacuar el líquido pericárdico y aliviar la compresión cardíaca, mientras se mantiene un adecuado soporte hemodinámico con líquidos intravenosos como medida transitoria.",
      },
      {
        id: "D",
        label: "D",
        text: "Tromboembolismo Pulmonar Masivo; manejo con trombolisis sistémica inmediata como tratamiento de elección.",
        distractorProfile: "wrong_diagnosis_ignoring_echocardiographic_confirmation",
        incorrectFeedback:
          "Aunque el tromboembolismo pulmonar puede causar disnea, hipotensión y taquicardia, el ecocardiograma en este caso confirma específicamente un derrame pericárdico de gran volumen con colapso diastólico del ventrículo derecho, hallazgo diagnóstico de taponamiento cardíaco, no de tromboembolismo pulmonar; la trombolisis no es el tratamiento del taponamiento y podría ser peligrosa en este contexto.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "El paciente presenta un **Taponamiento Cardíaco**, una urgencia cardiovascular que ocurre cuando la acumulación de líquido en el espacio pericárdico (en este caso, probablemente de origen **maligno**, dado el antecedente de carcinoma pulmonar avanzado, una de las causas más frecuentes de derrame pericárdico neoplásico) genera una **compresión externa progresiva de las cámaras cardíacas**, comprometiendo el llenado diastólico y, en consecuencia, el gasto cardíaco. Los hallazgos clásicos incluyen la **tríada de Beck** (hipotensión, ingurgitación yugular, ruidos cardíacos velados/hipofonéticos), el **pulso paradójico** (descenso exagerado de la presión arterial sistólica durante la inspiración, mayor a 10 mmHg, reflejo de la interdependencia ventricular acentuada por la compresión pericárdica), y la confirmación ecocardiográfica mediante la presencia de **derrame pericárdico** con **colapso diastólico de las cámaras cardíacas de baja presión** (típicamente la aurícula derecha primero, y el ventrículo derecho en taponamiento más avanzado), signo ecocardiográfico específico de compromiso hemodinámico significativo. La conducta terapéutica **definitiva e inmediata** es la **Pericardiocentesis urgente** (idealmente guiada por ecocardiografía para mayor seguridad y precisión), que evacúa el líquido pericárdico causal y **alivia de forma inmediata** la compresión cardíaca, revirtiendo rápidamente el compromiso hemodinámico. Mientras se organiza este procedimiento, el soporte con **líquidos intravenosos** puede ayudar transitoriamente a mantener la precarga y el gasto cardíaco, pero constituye únicamente una **medida puente**, nunca un sustituto del drenaje definitivo del derrame.",
    keyPoints: [
      "Tríada de Beck (hipotensión + ingurgitación yugular + ruidos cardíacos velados) + pulso paradójico + ecocardiograma con derrame pericárdico y colapso diastólico de cámaras derechas: diagnóstico de taponamiento cardíaco.",
      "Taponamiento Cardíaco = urgencia cardiovascular. Tratamiento definitivo e inmediato: Pericardiocentesis urgente (idealmente guiada por ecografía), con líquidos IV solo como medida puente transitoria. Los diuréticos están CONTRAINDICADOS (reducen la precarga necesaria).",
      "Cardiología / Taponamiento Cardíaco.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-100",
    university: "UCC",
    examArea: "INFECTOLOGÍA - SALUD OCUPACIONAL",
    topic: "Profilaxis Postexposición Ocupacional",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "profilaxis-postexposicion-ocupacional"],
    statement:
      "Una enfermera de 27 años sufre un pinchazo accidental con una aguja hueca previamente utilizada en un paciente hospitalizado con infección conocida por VIH (carga viral no controlada) y estado serológico desconocido para hepatitis B, mientras realizaba un procedimiento en el servicio de urgencias. La enfermera completó su esquema de vacunación contra hepatitis B hace varios años, pero no cuenta con documentación de su título de anticuerpos protectores (anti-HBs). Se presenta a la Unidad de Salud Ocupacional 45 minutos después del incidente. ¿Cuál es la conducta MÁS apropiada respecto a la profilaxis postexposición, considerando el tiempo transcurrido y el estado inmunológico incierto frente a hepatitis B?",
    options: [
      {
        id: "A",
        label: "A",
        text: "No se requiere ninguna profilaxis, ya que la enfermera completó su esquema de vacunación contra hepatitis B en el pasado y el riesgo de transmisión del VIH por un pinchazo accidental es considerado despreciable.",
        distractorProfile: "dangerous_dismissal_of_significant_occupational_exposure",
        incorrectFeedback:
          "El riesgo de transmisión de VIH por pinchazo con aguja hueca de un paciente con carga viral no controlada, aunque relativamente bajo por evento individual, es clínicamente significativo y justifica profilaxis postexposición; además, sin documentación del título de anticuerpos anti-HBs, no puede asumirse protección adecuada contra hepatitis B, por lo que omitir toda profilaxis sería inapropiado.",
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar profilaxis postexposición para VIH con un esquema antirretroviral de al menos tres fármacos lo antes posible (idealmente dentro de las primeras horas, sin exceder las 72 horas), y para hepatitis B, dado que no hay documentación de anticuerpos protectores, solicitar título de anti-HBs de forma urgente y considerar inmunoglobulina antihepatitis B más refuerzo de vacuna si el título no puede confirmarse a tiempo o resulta inadecuado.",
      },
      {
        id: "C",
        label: "C",
        text: "Diferir el inicio de la profilaxis antirretroviral para VIH hasta contar con los resultados de las pruebas serológicas propias de la enfermera, ya que iniciar profilaxis sin conocer su estado basal es contraindicado.",
        distractorProfile: "dangerous_delay_reducing_prophylaxis_effectiveness",
        incorrectFeedback:
          "La profilaxis postexposición para VIH debe iniciarse LO ANTES POSIBLE, idealmente dentro de las primeras horas tras la exposición, ya que su eficacia depende críticamente de la rapidez de inicio; aunque se solicitan pruebas basales de la persona expuesta, estas no deben retrasar el inicio de la profilaxis antirretroviral, que se ajusta posteriormente según los resultados.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar únicamente un refuerzo de la vacuna contra hepatitis B sin necesidad de inmunoglobulina ni estudio de anticuerpos, y no ofrecer profilaxis para VIH dado que la exposición ocurrió con una aguja hueca de calibre pequeño.",
        distractorProfile: "incomplete_prophylaxis_ignoring_hiv_risk_and_unknown_hbv_status",
        incorrectFeedback:
          "El calibre de la aguja no elimina el riesgo de transmisión del VIH en una exposición con aguja hueca de un paciente con carga viral no controlada, por lo que omitir la profilaxis antirretroviral sería inapropiado; además, sin conocer el título de anticuerpos anti-HBs, no puede asumirse que un simple refuerzo de vacuna sea suficiente sin considerar inmunoglobulina si el título resulta inadecuado o no puede confirmarse a tiempo.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Este caso corresponde a un **accidente biológico laboral (exposición ocupacional percutánea)** con **doble riesgo infeccioso**: **VIH** (paciente fuente con infección conocida y carga viral no controlada, lo que representa un riesgo significativo) y **hepatitis B** (estado serológico del paciente fuente desconocido, y la enfermera sin documentación de anticuerpos protectores propios). Para el riesgo de **VIH**, la profilaxis postexposición (PEP) debe iniciarse **lo antes posible tras la exposición**, siendo la eficacia **tiempo-dependiente** (idealmente en las primeras horas, y en general no después de las 72 horas), utilizando un **esquema antirretroviral combinado de al menos tres fármacos**, sin esperar los resultados de pruebas basales de la persona expuesta, que se solicitan en paralelo pero no deben retrasar el inicio de la profilaxis. Para el riesgo de **hepatitis B**, dado que la enfermera fue vacunada previamente pero **no cuenta con documentación de un título protector de anticuerpos anti-HBs** (es decir, se desconoce si desarrolló o mantiene inmunidad adecuada), la conducta apropiada es **solicitar el título de anti-HBs de forma urgente**; si este no puede obtenerse a tiempo o resulta **inadecuado** (no protector), se debe considerar la administración de **inmunoglobulina específica antihepatitis B** junto con un **refuerzo de la vacuna**, ya que la combinación de ambas maximiza la protección cuando el estado inmunológico es incierto. Este abordaje dual, iniciado sin demora, es la conducta estándar recomendada ante un accidente biológico laboral con fuente de riesgo conocido para VIH y estado incierto para hepatitis B.",
    keyPoints: [
      "Accidente biológico laboral (pinchazo con aguja hueca) con paciente fuente VIH positivo (carga viral no controlada) y estado de hepatitis B desconocido, en trabajador vacunado sin documentación de anticuerpos protectores.",
      "VIH: iniciar profilaxis postexposición con esquema antirretroviral de 3 fármacos lo antes posible (idealmente horas, máximo 72h), sin esperar pruebas basales. Hepatitis B: solicitar título de anti-HBs urgente; si no se confirma a tiempo o es inadecuado, considerar inmunoglobulina antihepatitis B + refuerzo vacunal.",
      "Infectología / Profilaxis Postexposición Ocupacional (VIH y Hepatitis B).",
    ],
  },
];
