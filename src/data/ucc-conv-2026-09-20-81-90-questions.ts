import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #8 (20 sep 2026) · Preguntas #81–#90.
 * Banco exclusivo del examen oficial.
 */
export const UCC_CONV_2026_09_20_81_90_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2026-09-20-81",
    university: "UCC",
    examArea: "PSIQUIATRÍA - URGENCIAS",
    topic: "Riesgo Suicida",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "riesgo-suicida"],
    statement:
      "Una mujer de 34 años es traída a urgencias por su hermana tras encontrarla escribiendo una \"carta de despedida\". Tiene antecedente de trastorno depresivo mayor y un intento de suicidio hace 2 años (sobreingesta medicamentosa que requirió manejo en UCI). Refiere anhedonia, insomnio y sentimientos de desesperanza de 3 semanas de evolución, coincidiendo con una separación conyugal reciente. Al interrogatorio dirigido, reconoce ideación suicida activa con un plan estructurado (ya compró los medicamentos que planea ingerir) y una fecha definida para llevarlo a cabo; afirma que \"no ve razones para vivir\" y que \"sería un alivio para todos\". Niega consumo de sustancias. Al examen mental: contacto visual pobre, afecto restringido congruente con el discurso, sin alteración del juicio de realidad ni síntomas psicóticos. ¿Cuál es la conducta MÁS apropiada en este momento?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Formalizar un compromiso verbal de no autolesionarse (\"contrato de no suicidio\") y dar egreso con control ambulatorio de psiquiatría en una semana, dado que la paciente colaboró adecuadamente durante la entrevista.",
        distractorProfile: "reliance_on_ineffective_no_suicide_contract",
        incorrectFeedback:
          "Los \"contratos de no suicidio\" carecen de respaldo en evidencia como medida de seguridad y no reemplazan la contención de un riesgo agudo; esta paciente reúne los cuatro elementos de mayor riesgo inminente (plan estructurado, medios ya adquiridos, intención declarada y antecedente de intento previo), por lo que un egreso ambulatorio expone a un desenlace fatal.",
      },
      {
        id: "B",
        label: "B",
        text: "Hospitalización psiquiátrica inmediata (voluntaria o involuntaria si la paciente se niega), con supervisión continua y remoción del acceso a los medios letales identificados, e iniciar una evaluación exhaustiva del riesgo.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar tratamiento ambulatorio con un inhibidor selectivo de la recaptación de serotonina (ISRS) y programar seguimiento telefónico diario por trabajo social, ya que el antidepresivo controlará rápidamente los síntomas.",
        distractorProfile: "overreliance_on_delayed_pharmacologic_effect",
        incorrectFeedback:
          "Los ISRS tardan entre 2 y 4 semanas en alcanzar su efecto antidepresivo pleno, e incluso pueden asociarse a activación conductual transitoria en las primeras semanas; iniciar únicamente un antidepresivo no atiende el riesgo inminente que exige contención inmediata en este momento.",
      },
      {
        id: "D",
        label: "D",
        text: "Dar egreso con indicación a la familia de retirar el arma o los medicamentos del hogar, sin hospitalización, dado que no hay alteración del juicio de realidad ni síntomas psicóticos.",
        distractorProfile: "underestimating_risk_absent_psychosis",
        incorrectFeedback:
          "La ausencia de psicosis no reduce el riesgo suicida agudo; la presencia de un plan estructurado, medios ya adquiridos y una fecha definida constituye el perfil de mayor riesgo independientemente del estado psicótico, y la restricción de medios sin supervisión directa es insuficiente para garantizar la seguridad de la paciente.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "La paciente presenta el perfil de **riesgo suicida agudo/inminente**: ideación suicida activa con plan estructurado, medios ya adquiridos, intención declarada, fecha definida y antecedente de intento previo grave, sobre un trastorno depresivo mayor descompensado por un estresor psicosocial reciente (separación conyugal) y sentimientos de desesperanza. Ante esta combinación de factores, ningún manejo ambulatorio —por bien intencionado que sea— es seguro. La conducta indicada es la **hospitalización psiquiátrica inmediata**, voluntaria si la paciente acepta o involuntaria si se niega y el riesgo lo justifica, con supervisión continua (idealmente observación 1:1), remoción activa del acceso a los medios letales identificados y una evaluación estructurada del riesgo que oriente el plan de tratamiento posterior. Los \"contratos de no suicidio\" no tienen respaldo en evidencia como medida de seguridad y jamás deben usarse como sustituto de la contención del riesgo.",
    keyPoints: [
      "La combinación de ideación suicida activa con plan estructurado, medios ya adquiridos, intención declarada y antecedente de intento previo define el perfil de mayor riesgo suicida inminente.",
      "Riesgo suicida alto/inminente: la conducta indicada es hospitalización psiquiátrica (voluntaria o involuntaria si rechaza) con supervisión continua y restricción del acceso a medios letales; los contratos de no suicidio no sustituyen la contención del riesgo.",
      "Psiquiatría de Urgencias / Evaluación del Riesgo Suicida.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-82",
    university: "UCC",
    examArea: "PSIQUIATRÍA - URGENCIAS / NEUROLOGÍA",
    topic: "Síndrome Neuroléptico Maligno",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "sindrome-neuroleptico-maligno"],
    statement:
      "Un hombre de 45 años con esquizofrenia, al cual se le aumentó la dosis de haloperidol hace 4 días por una reagudización psicótica, es traído a urgencias por fiebre de 39.5°C, rigidez muscular generalizada descrita como \"en tubo de plomo\", alteración del estado de conciencia (estuporoso, con respuesta pobre a estímulos), diaforesis profusa e inestabilidad autonómica (presión arterial fluctuante, frecuencia cardíaca de 130 lpm). Los laboratorios muestran CPK de 12.000 U/L, leucocitosis y deterioro de la función renal. Se descartan infección concurrente y consumo de sustancias. ¿Cuál es el diagnóstico más probable y la conducta terapéutica INICIAL indispensable, además de las medidas de soporte?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Síndrome serotoninérgico secundario al haloperidol; iniciar ciproheptadina como antídoto específico.",
        distractorProfile: "wrong_diagnosis_similar_presentation",
        incorrectFeedback:
          "El síndrome serotoninérgico se asocia a fármacos serotoninérgicos (ISRS, IMAO, tramadol, entre otros), no a antipsicóticos típicos, y se caracteriza por hiperreflexia, clonus y mioclonías (hiperactividad neuromuscular), a diferencia de la rigidez \"en tubo de plomo\" y la hiporreflexia del síndrome neuroléptico maligno; la ciproheptadina no trata esta entidad.",
      },
      {
        id: "B",
        label: "B",
        text: "Hipertermia maligna anestésica; administrar dantroleno de inmediato asumiendo una exposición reciente a anestésicos halogenados.",
        distractorProfile: "wrong_trigger_context",
        incorrectFeedback:
          "La hipertermia maligna se desencadena por anestésicos halogenados o succinilcolina en pacientes con predisposición genética (mutación del receptor de rianodina), no por antipsicóticos; aunque el dantroleno puede usarse como adyuvante en casos severos de síndrome neuroléptico maligno, el diagnóstico de fondo aquí no depende de exposición anestésica.",
      },
      {
        id: "C",
        label: "C",
        text: "Catatonia maligna primaria del trastorno psicótico de base; iniciar terapia electroconvulsiva urgente sin suspender el antipsicótico.",
        distractorProfile: "dangerous_continuation_of_causative_drug",
        incorrectFeedback:
          "Aunque la catatonia maligna es un diagnóstico diferencial relevante, continuar el antipsicótico causante ante la sospecha de síndrome neuroléptico maligno perpetúa el cuadro; el primer paso indispensable en cualquiera de los dos escenarios es SIEMPRE suspender el fármaco desencadenante antes de considerar otras terapias.",
      },
      {
        id: "D",
        label: "D",
        text: "Síndrome Neuroléptico Maligno; suspender de inmediato el antipsicótico, iniciar medidas de soporte agresivas (enfriamiento activo, hidratación intravenosa vigorosa) y considerar bromocriptina o dantroleno según la severidad.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "El paciente cursa con un **Síndrome Neuroléptico Maligno (SNM)**, una reacción idiosincrática potencialmente mortal a los antipsicóticos (particularmente los de alta potencia como el haloperidol), que suele aparecer días a semanas después de iniciar o aumentar la dosis. La tétrada clásica es fiebre, rigidez muscular generalizada \"en tubo de plomo\", alteración del estado mental e inestabilidad autonómica, con CPK marcadamente elevada por rabdomiólisis (con el consiguiente riesgo de lesión renal aguda por mioglobinuria). El paso indispensable e inmediato es **suspender el antipsicótico causante**, junto con medidas de soporte agresivas: enfriamiento activo para controlar la hipertermia, hidratación IV vigorosa para prevenir la falla renal, y benzodiacepinas para la agitación; en casos moderados a severos se añade **bromocriptina** (agonista dopaminérgico) o **dantroleno** (relajante muscular). Debe diferenciarse del síndrome serotoninérgico (hiperreflexia y clonus, inicio más rápido, exposición a fármacos serotoninérgicos) y de la hipertermia maligna (ligada a anestésicos).",
    keyPoints: [
      "Fiebre + rigidez muscular generalizada \"en tubo de plomo\" + alteración de conciencia + disautonomía, en un paciente que inició o aumentó recientemente la dosis de un antipsicótico de alta potencia.",
      "Síndrome Neuroléptico Maligno. Manejo: SUSPENDER el antipsicótico de inmediato + soporte agresivo (enfriamiento, hidratación IV, benzodiacepinas) + bromocriptina o dantroleno en casos moderados a severos.",
      "Psiquiatría / Neurología - Síndrome Neuroléptico Maligno.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-83",
    university: "UCC",
    examArea: "PSIQUIATRÍA / NEUROLOGÍA - GERIATRÍA",
    topic: "Delirium vs Demencia",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "delirium-vs-demencia"],
    statement:
      "Una mujer de 78 años, con antecedente de deterioro cognitivo leve documentado hace 8 meses (olvidos ocasionales, funcional para actividades básicas), es traída a urgencias por su hija porque en las últimas 48 horas presenta cambios bruscos: en algunas horas está agitada y desorientada, gritando que hay personas en su habitación (alucinaciones visuales), y en otras horas está somnolienta y apenas responde. La hija refiere que hace 4 días inició tratamiento antibiótico por una infección urinaria. Al examen: afebril, taquicárdica leve, desorientada en tiempo y lugar, con dificultad marcada para mantener la atención (no logra recitar los meses del año en orden inverso) y un curso claramente fluctuante durante la entrevista. La glicemia es normal. ¿Cuál es la característica clínica que MEJOR diferencia el cuadro actual de un proceso demencial neurodegenerativo y orienta al diagnóstico correcto?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Inicio agudo/subagudo (horas a días) con curso fluctuante a lo largo del día y compromiso marcado de la atención, hallazgos característicos del delirium y no de la demencia.",
      },
      {
        id: "B",
        label: "B",
        text: "La presencia de alucinaciones visuales, ya que estas son exclusivas del delirium y nunca se observan en pacientes con demencia.",
        distractorProfile: "overgeneralized_symptom_not_pathognomonic",
        incorrectFeedback:
          "Las alucinaciones visuales pueden presentarse tanto en el delirium como en ciertas demencias (por ejemplo, la demencia por cuerpos de Lewy); no son un hallazgo exclusivo ni el criterio diferenciador principal. El elemento clave sigue siendo el inicio agudo, el curso fluctuante y el compromiso de la atención.",
      },
      {
        id: "C",
        label: "C",
        text: "La edad avanzada de la paciente, que por sí sola es más compatible con un proceso demencial que con un delirium.",
        distractorProfile: "irrelevant_demographic_factor",
        incorrectFeedback:
          "La edad avanzada es un factor de riesgo compartido por ambas entidades (de hecho es uno de los principales factores de riesgo para desarrollar delirium), pero no las diferencia entre sí; el patrón temporal y el compromiso atencional son los verdaderos criterios distintivos.",
      },
      {
        id: "D",
        label: "D",
        text: "El deterioro de la memoria a largo plazo, que está preservado en la demencia pero siempre alterado en el delirium.",
        distractorProfile: "incorrect_memory_pattern",
        incorrectFeedback:
          "La memoria, tanto reciente como remota, puede afectarse en ambas condiciones, por lo que no es el dominio cognitivo que mejor las distingue. Lo característico y más sensible para el delirium es la alteración aguda y fluctuante de la ATENCIÓN y del nivel de conciencia, más que un patrón específico de memoria.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "El cuadro descrito corresponde a un **Delirium**, probablemente superpuesto a un deterioro cognitivo leve previo, desencadenado por una infección urinaria (y potencialmente agravado por el antibiótico reciente). A diferencia de la demencia, que tiene un inicio insidioso, curso progresivo y crónico, con la atención relativamente preservada hasta etapas avanzadas, el delirium se define por un **inicio agudo o subagudo, un curso fluctuante a lo largo del día (empeora típicamente al anochecer, el llamado \"sundowning\") y un compromiso marcado y fluctuante de la atención y el nivel de conciencia**, criterios centrales del Método de Evaluación de la Confusión (CAM): inicio agudo y curso fluctuante, más inatención, más pensamiento desorganizado o alteración del nivel de conciencia. El manejo prioritario es identificar y tratar la causa desencadenante (en este caso, la infección urinaria), evitar fármacos deliriogénicos y aplicar medidas no farmacológicas de reorientación y soporte.",
    keyPoints: [
      "Curso agudo/subagudo y fluctuante a lo largo del día, con compromiso marcado de la atención, es el sello distintivo del delirium (criterios CAM), a diferencia del curso insidioso y progresivo de la demencia.",
      "Delirium, posiblemente superpuesto a deterioro cognitivo leve previo. Manejo: buscar y tratar la causa desencadenante (aquí, la infección urinaria), evitar fármacos deliriogénicos y aplicar reorientación y medidas de soporte.",
      "Psiquiatría / Neurología - Delirium vs Demencia.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-84",
    university: "UCC",
    examArea: "TOXICOLOGÍA - URGENCIAS",
    topic: "Intoxicación por Organofosforados",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "intoxicacion-organofosforados"],
    statement:
      "Un hombre de 50 años, trabajador agrícola, es traído a urgencias tras una exposición accidental a un plaguicida durante la fumigación de un cultivo, sin uso de equipo de protección personal. Presenta sialorrea abundante, diaforesis profusa, lagrimeo, broncorrea con dificultad respiratoria, miosis puntiforme bilateral, dolor abdominal tipo cólico con diarrea, y fasciculaciones musculares generalizadas. Al examen: bradicardia de 48 lpm, sibilancias difusas y secreciones orales abundantes que dificultan el manejo de la vía aérea. ¿Cuál es el manejo antidotal de PRIMERA LÍNEA, titulado hasta lograr el \"secado\" de las secreciones?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Naloxona intravenosa en bolos repetidos, dado el compromiso del estado de conciencia y la dificultad respiratoria.",
        distractorProfile: "wrong_antidote_wrong_toxidrome",
        incorrectFeedback:
          "La naloxona revierte la toxicidad por opioides, no el síndrome colinérgico por organofosforados; no tiene ningún efecto sobre las secreciones ni la broncoconstricción de este cuadro y retrasa el inicio del tratamiento específico.",
      },
      {
        id: "B",
        label: "B",
        text: "Fisostigmina intravenosa para revertir el efecto anticolinérgico central del tóxico.",
        distractorProfile: "opposite_pharmacologic_mechanism",
        incorrectFeedback:
          "La fisostigmina es un inhibidor de la acetilcolinesterasa, usado para el síndrome ANTIcolinérgico (por ejemplo, por atropina o antidepresivos tricíclicos); administrarla en una intoxicación por organofosforados, que ya cursa con exceso de acetilcolina por inhibición de la colinesterasa, empeoraría catastróficamente el cuadro colinérgico.",
      },
      {
        id: "C",
        label: "C",
        text: "Atropina intravenosa en dosis tituladas y repetidas (duplicando la dosis cada 3-5 minutos si es necesario) hasta lograr el secado de las secreciones bronquiales, asociada a Pralidoxima intravenosa para reactivar la acetilcolinesterasa.",
      },
      {
        id: "D",
        label: "D",
        text: "Descontaminación cutánea únicamente con abundante agua y jabón, sin necesidad de tratamiento farmacológico sistémico si el paciente está hemodinámicamente estable.",
        distractorProfile: "decontamination_without_definitive_antidote",
        incorrectFeedback:
          "La descontaminación es una medida esencial y temprana (incluyendo retirar la ropa contaminada y proteger al personal de salud), pero NO sustituye el tratamiento antidotal sistémico; un paciente con broncorrea, bradicardia y fasciculaciones tiene toxicidad colinérgica activa que requiere atropina y pralidoxima de inmediato.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "El paciente presenta una **Intoxicación por Organofosforados**, plaguicidas que inhiben de forma irreversible la acetilcolinesterasa, causando acumulación de acetilcolina en los receptores muscarínicos y nicotínicos. Esto genera el clásico **síndrome colinérgico** (mnemónicos SLUDGE/DUMBELS): salivación, lagrimeo, diaforesis, broncorrea, bradicardia, miosis, diarrea y, por efecto nicotínico, fasciculaciones y debilidad muscular. El tratamiento antidotal de primera línea es la **atropina intravenosa**, titulada NO según la frecuencia cardíaca sino hasta lograr el **secado de las secreciones bronquiales** (el objetivo terapéutico real, dado que la broncorrea es la principal causa de muerte por insuficiencia respiratoria), duplicando la dosis cada 3-5 minutos según sea necesario. Se asocia **pralidoxima (2-PAM)**, que reactiva la acetilcolinesterasa antes de que ocurra el fenómeno de \"envejecimiento\" enzimático (unión irreversible), siendo más eficaz cuanto antes se administre.",
    keyPoints: [
      "Exposición ocupacional a plaguicidas con síndrome colinérgico florido: miosis, sialorrea, broncorrea, bradicardia, diaforesis, diarrea y fasciculaciones (mnemónico DUMBELS/SLUDGE).",
      "Intoxicación por Organofosforados. Antídoto de primera línea: Atropina IV titulada hasta el secado de las secreciones (no según la frecuencia cardíaca) + Pralidoxima para reactivar la acetilcolinesterasa antes de que ocurra el envejecimiento enzimático.",
      "Toxicología - Intoxicación por Organofosforados.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-85",
    university: "UCC",
    examArea: "TOXICOLOGÍA - URGENCIAS / PSIQUIATRÍA",
    topic: "Síndrome de Abstinencia Alcohólica",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "sindrome-abstinencia-alcoholica"],
    statement:
      "Un hombre de 48 años con antecedente de consumo crónico de alcohol (aproximadamente 15 años, ingesta diaria) es hospitalizado por una fractura de cadera hace 3 días y no ha consumido alcohol desde su ingreso. Al tercer día de hospitalización presenta agitación psicomotora marcada, temblor distal grueso, diaforesis profusa, taquicardia de 128 lpm, hipertensión arterial, fiebre de 38.3°C, y alucinaciones visuales vívidas (refiere ver \"insectos caminando por las paredes\"), con desorientación en tiempo y lugar. Hace 24 horas presentó un episodio convulsivo tónico-clónico generalizado, autolimitado. ¿Cuál es el tratamiento farmacológico de PRIMERA LÍNEA para este cuadro?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Haloperidol intravenoso como monoterapia, por su eficacia para controlar tanto la agitación como las alucinaciones.",
        distractorProfile: "wrong_first_line_lowers_seizure_threshold",
        incorrectFeedback:
          "El haloperidol puede usarse como adyuvante para la agitación o las alucinaciones refractarias, pero como monoterapia disminuye el umbral convulsivo (un riesgo relevante en un paciente que ya convulsionó) y no trata el mecanismo de fondo (hipofunción del GABA); las benzodiacepinas son el pilar del tratamiento.",
      },
      {
        id: "B",
        label: "B",
        text: "Benzodiacepinas intravenosas en dosis tituladas según la respuesta clínica (por ejemplo, mediante un protocolo guiado por escalas como el CIWA-Ar), además de tiamina intravenosa administrada antes de cualquier aporte de glucosa.",
      },
      {
        id: "C",
        label: "C",
        text: "Fenitoína intravenosa como profilaxis anticonvulsivante de elección, dado el antecedente de la crisis convulsiva reciente.",
        distractorProfile: "ineffective_anticonvulsant_for_this_etiology",
        incorrectFeedback:
          "La fenitoína no ha demostrado ser eficaz para prevenir las convulsiones por abstinencia alcohólica, cuyo mecanismo fisiopatológico (hipofunción GABAérgica e hiperactividad glutamatérgica) responde específicamente a las benzodiacepinas, que además tratan el resto del cuadro de abstinencia.",
      },
      {
        id: "D",
        label: "D",
        text: "Solución glucosada intravenosa al 5% en infusión continua como primera medida, para corregir el estado catabólico del paciente antes de cualquier otro fármaco.",
        distractorProfile: "dangerous_glucose_before_thiamine",
        incorrectFeedback:
          "Administrar glucosa sin haber repuesto previamente tiamina puede precipitar o agravar una Encefalopatía de Wernicke en un paciente con reservas de tiamina depletadas por alcoholismo crónico; la tiamina siempre debe administrarse antes o junto con la glucosa, nunca después.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "El paciente cursa con **Delirium Tremens**, la manifestación más severa del síndrome de abstinencia alcohólica, que típicamente aparece entre las 48 y 96 horas tras el último consumo en pacientes con uso crónico e intenso. Se caracteriza por hiperactividad autonómica marcada (taquicardia, hipertensión, fiebre, diaforesis), agitación, alucinaciones (frecuentemente visuales o táctiles), desorientación y riesgo de convulsiones, con una mortalidad significativa si no se trata. El tratamiento de primera línea son las **benzodiacepinas intravenosas tituladas según la respuesta clínica** (protocolo CIWA-Ar), ya que la abstinencia alcohólica resulta de una hipofunción del receptor GABA-A (por down-regulation crónica) y una hiperactividad glutamatérgica compensatoria; las benzodiacepinas, agonistas GABAérgicos con tolerancia cruzada al alcohol, tratan el mecanismo fisiopatológico de fondo, controlan la agitación y previenen o tratan las convulsiones. Debe administrarse **tiamina IV antes de cualquier aporte de glucosa** para prevenir la precipitación de una Encefalopatía de Wernicke.",
    keyPoints: [
      "Paciente con consumo crónico de alcohol que suspende abruptamente la ingesta (por ejemplo, por hospitalización) y a las 48-96 horas desarrolla hiperactividad autonómica marcada, alucinaciones y desorientación, con o sin convulsiones.",
      "Delirium Tremens. Tratamiento de primera línea: Benzodiacepinas IV tituladas (protocolo CIWA-Ar) + Tiamina IV administrada ANTES de la glucosa, para prevenir la Encefalopatía de Wernicke.",
      "Toxicología / Psiquiatría - Síndrome de Abstinencia Alcohólica.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-86",
    university: "UCC",
    examArea: "ENDOCRINOLOGÍA - URGENCIAS",
    topic: "Crisis Addisoniana",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "crisis-addisoniana"],
    statement:
      "Una mujer de 39 años con antecedente de enfermedad de Addison (insuficiencia suprarrenal primaria autoinmune) en tratamiento crónico con hidrocortisona oral, consulta a urgencias por un cuadro de gastroenteritis aguda de 2 días de evolución con vómito y diarrea, que le ha impedido tomar su medicación habitual. Ingresa con debilidad extrema, confusión leve, dolor abdominal difuso e hipotensión severa (PA 72/40 mmHg) que no responde adecuadamente a la primera carga de cristaloides. Los laboratorios muestran sodio de 124 mEq/L, potasio de 6.1 mEq/L y glicemia de 52 mg/dL. ¿Cuál es la conducta terapéutica de MAYOR prioridad, además de continuar la reanimación con líquidos intravenosos?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar Fludrocortisona oral en dosis altas como reemplazo mineralocorticoide urgente, dado el patrón de hiponatremia e hiperkalemia.",
        distractorProfile: "wrong_route_and_wrong_priority_hormone",
        incorrectFeedback:
          "La vía oral no es confiable en una paciente con vómito y diarrea activos y en choque; además, en la crisis addisoniana el reemplazo urgente prioritario es la HIDROCORTISONA intravenosa en dosis de estrés (que también tiene actividad mineralocorticoide a dosis altas), no la fludrocortisona, que se reserva para el mantenimiento ambulatorio.",
      },
      {
        id: "B",
        label: "B",
        text: "Corrección rápida y agresiva de la hiponatremia con solución salina hipertónica al 3%, priorizando la normalización inmediata del sodio sérico.",
        distractorProfile: "dangerous_overcorrection_wrong_priority",
        incorrectFeedback:
          "La corrección rápida de la hiponatremia conlleva riesgo de síndrome de desmielinización osmótica; en la crisis addisoniana la hiponatremia mejora progresivamente con la reposición de hidrocortisona (que restaura la capacidad de excretar agua libre) y con cristaloides isotónicos, sin requerir solución hipertónica como prioridad.",
      },
      {
        id: "C",
        label: "C",
        text: "Insulina intravenosa en infusión para el manejo urgente de la hiperkalemia, previo a cualquier otra intervención hormonal.",
        distractorProfile: "treating_lab_abnormality_over_root_cause",
        incorrectFeedback:
          "La hiperkalemia en la crisis addisoniana es secundaria al déficit de cortisol y aldosterona; aunque puede requerir manejo específico si es severa o hay cambios electrocardiográficos, la intervención prioritaria y causal es la reposición de hidrocortisona IV, que corrige el trastorno electrolítico de raíz.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar Hidrocortisona intravenosa en dosis de estrés (bolo inmediato seguido de dosis repetidas o infusión continua), sin esperar la confirmación hormonal de laboratorio.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "La paciente cursa con una **Crisis Addisoniana (Insuficiencia Suprarrenal Aguda)**, precipitada por un factor estresante (la gastroenteritis, que además le impidió tomar su hidrocortisona oral) en una paciente con insuficiencia suprarrenal primaria conocida. Los hallazgos típicos son hipotensión refractaria a líquidos, hiponatremia e hiperkalemia (por el déficit concomitante de aldosterona, propio de la insuficiencia primaria), hipoglicemia, dolor abdominal y alteración del estado mental. Esta es una emergencia endocrinológica en la que el tratamiento **nunca debe retrasarse esperando confirmación hormonal de laboratorio**: la conducta prioritaria es administrar **Hidrocortisona intravenosa en dosis de estrés** de inmediato, junto con reanimación agresiva con cristaloides isotónicos que contengan dextrosa para corregir la hipoglicemia. La hiponatremia y la hiperkalemia se corrigen de forma progresiva con la reposición hormonal y la fluidoterapia, sin requerir medidas adicionales de urgencia en la mayoría de los casos.",
    keyPoints: [
      "Paciente con insuficiencia suprarrenal conocida (o sospechada) que enfrenta un factor estresante (infección, vómito o diarrea que impide la toma de esteroides orales) y desarrolla hipotensión refractaria a líquidos, hiponatremia, hiperkalemia e hipoglicemia.",
      "Crisis Addisoniana (Insuficiencia Suprarrenal Aguda). Tratamiento: Hidrocortisona IV en dosis de estrés DE INMEDIATO, sin esperar confirmación hormonal, más reanimación con cristaloides isotónicos con dextrosa.",
      "Endocrinología - Crisis Addisoniana.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-87",
    university: "UCC",
    examArea: "ENDOCRINOLOGÍA - CIRUGÍA",
    topic: "Feocromocitoma",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "feocromocitoma"],
    statement:
      "Un hombre de 44 años consulta por episodios paroxísticos recurrentes, de varios meses de evolución, caracterizados por la tríada de cefalea pulsátil intensa, palpitaciones y diaforesis profusa, cada uno con duración de 15-20 minutos y resolución espontánea. Durante las crisis ha documentado en casa picos de presión arterial hasta 220/120 mmHg, con cifras normales-altas entre episodios, y refiere palidez y temblor durante las crisis, sin relación con el ejercicio. Los niveles de metanefrinas fraccionadas en plasma están marcadamente elevados, y una tomografía abdominal confirma una masa suprarrenal derecha de 3.5 cm. Se programa manejo quirúrgico. ¿Cuál es la conducta de PRIMERA LÍNEA en la preparación prequirúrgica de este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar bloqueo alfa-adrenérgico (por ejemplo, con fenoxibenzamina) al menos 10-14 días antes de la cirugía, agregando posteriormente bloqueo beta-adrenérgico si es necesario para controlar la taquicardia refleja.",
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar bloqueo beta-adrenérgico (por ejemplo, propranolol) como primer fármaco, dado que la taquicardia es el síntoma predominante y de mayor riesgo cardiovascular inmediato.",
        distractorProfile: "dangerous_reversed_blockade_sequence",
        incorrectFeedback:
          "Iniciar un betabloqueador antes de establecer un bloqueo alfa adecuado deja sin oposición la estimulación alfa-adrenérgica de las catecolaminas circulantes, lo que precipita una crisis hipertensiva grave por vasoconstricción periférica sin la vasodilatación compensatoria beta-mediada; el bloqueo alfa siempre debe iniciarse primero.",
      },
      {
        id: "C",
        label: "C",
        text: "Programar la cirugía de forma expedita sin preparación farmacológica previa, dado que el tumor es pequeño (3.5 cm) y el riesgo de crisis intraoperatoria es bajo.",
        distractorProfile: "underestimating_intraoperative_risk",
        incorrectFeedback:
          "El tamaño tumoral no predice de forma confiable el riesgo de liberación catecolaminérgica masiva durante la manipulación quirúrgica; sin un bloqueo alfa adecuado, la manipulación del tumor puede desencadenar una crisis hipertensiva potencialmente letal, independientemente del tamaño.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar un inhibidor de la enzima convertidora de angiotensina (IECA) como antihipertensivo de elección para el control prequirúrgico.",
        distractorProfile: "wrong_drug_class_for_mechanism",
        incorrectFeedback:
          "Los IECA no bloquean el efecto de las catecolaminas circulantes, mecanismo fisiopatológico central del feocromocitoma, y no previenen la crisis hipertensiva intraoperatoria por manipulación tumoral; el bloqueo alfa-adrenérgico específico es indispensable y no puede sustituirse por otras clases de antihipertensivos.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "El paciente cursa con un **Feocromocitoma**, un tumor secretor de catecolaminas originado en la médula suprarrenal, que se manifiesta con la tríada clásica de cefalea episódica, palpitaciones y diaforesis, acompañada de hipertensión arterial paroxística severa; se confirma con metanefrinas fraccionadas elevadas y se localiza por imagen (masa suprarrenal en la tomografía). El tratamiento definitivo es la resección quirúrgica, pero la **preparación farmacológica prequirúrgica es obligatoria** para prevenir una crisis hipertensiva catastrófica por la liberación masiva de catecolaminas durante la manipulación del tumor. La secuencia correcta es iniciar **bloqueo alfa-adrenérgico** (clásicamente con fenoxibenzamina, un antagonista alfa no selectivo e irreversible; también se usan alfa-1 selectivos como doxazosina) entre 10 y 14 días antes de la cirugía, lo que permite además la expansión de volumen en pacientes crónicamente vasoconstreñidos, y **solo después** agregar bloqueo beta-adrenérgico si aparece taquicardia refleja, nunca antes del bloqueo alfa.",
    keyPoints: [
      "Tríada clásica de cefalea, palpitaciones y diaforesis en episodios paroxísticos, con hipertensión arterial episódica severa; se confirma con metanefrinas fraccionadas elevadas.",
      "Feocromocitoma. Preparación prequirúrgica: Bloqueo ALFA-adrenérgico primero (10-14 días antes) para permitir expansión de volumen, y solo después agregar bloqueo BETA si hay taquicardia refleja; nunca iniciar el betabloqueador antes del bloqueo alfa.",
      "Endocrinología - Feocromocitoma.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-88",
    university: "UCC",
    examArea: "MEDICINA INTERNA - ENDOCRINOLOGÍA / URGENCIAS",
    topic: "Hipoglucemia Severa",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "hipoglucemia-severa"],
    statement:
      "Un hombre de 68 años con diabetes mellitus tipo 2 de larga data, en tratamiento con glibenclamida y metformina, es encontrado por su esposa confundido, diaforético y con lenguaje incoherente, sin respuesta adecuada a estímulos verbales. Durante el traslado, el paramédico confirma una glucometría capilar de 38 mg/dL y el paciente presenta una convulsión breve autolimitada. Al llegar a urgencias persiste con Glasgow 10/15 y no colabora para recibir alimentos o líquidos por vía oral. ¿Cuál es la conducta terapéutica INMEDIATA más apropiada en este momento?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar gel de glucosa por vía oral en la mucosa bucal, ya que es rápido, efectivo y no requiere acceso venoso.",
        distractorProfile: "unsafe_oral_route_altered_consciousness",
        incorrectFeedback:
          "En un paciente con alteración significativa del estado de conciencia (Glasgow 10) que no colabora, la administración oral, incluso en la mucosa bucal, conlleva un riesgo alto de broncoaspiración por reflejos protectores de la vía aérea comprometidos; se requiere una vía parenteral.",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar Glucagón intramuscular como única medida, dado que es igualmente eficaz que la dextrosa intravenosa y no requiere canalización venosa.",
        distractorProfile: "incomplete_treatment_for_sulfonylurea_hypoglycemia",
        incorrectFeedback:
          "El glucagón es una alternativa útil cuando no hay acceso IV disponible, pero en la hipoglucemia por sulfonilureas (como la glibenclamida) su eficacia es limitada y de menor duración, porque depende de las reservas de glucógeno hepático y además estimula la liberación de insulina endógena, lo que puede perpetuar la hipoglucemia; una vez logrado el acceso IV, la dextrosa es la terapia de elección.",
      },
      {
        id: "C",
        label: "C",
        text: "Canalizar acceso venoso y administrar un bolo de Dextrosa al 10% o 50% intravenosa de inmediato, seguido de una infusión de mantenimiento con monitoreo estrecho de la glucometría durante al menos 24 horas, dado el riesgo de hipoglucemia recurrente y prolongada por la vida media larga de la glibenclamida.",
      },
      {
        id: "D",
        label: "D",
        text: "Suspender el monitoreo continuo una vez que la glucometría se normalice tras el bolo inicial de dextrosa, dado que el episodio agudo ya fue resuelto.",
        distractorProfile: "premature_discontinuation_of_monitoring",
        incorrectFeedback:
          "Las sulfonilureas de vida media prolongada, como la glibenclamida, pueden causar hipoglucemia recurrente y prolongada horas después de la corrección inicial; suspender el monitoreo tras la primera normalización expone al paciente a una recaída hipoglucémica grave no detectada, por lo que se requiere observación y glucometrías seriadas por al menos 24 horas, frecuentemente con hospitalización.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "El paciente presenta una **Hipoglucemia Severa** con compromiso neuroglucopénico (confusión, convulsión, alteración del estado de conciencia), secundaria al uso de **glibenclamida**, una sulfonilurea que estimula la secreción endógena de insulina de forma independiente de la glicemia. En un paciente con alteración del estado de conciencia que no puede recibir vía oral de forma segura, el tratamiento de elección es la **dextrosa intravenosa** en bolo (D10 o D50), no la vía oral (por el riesgo de broncoaspiración). El glucagón es una alternativa razonable únicamente cuando no hay acceso IV disponible, pero es menos confiable en la hipoglucemia por sulfonilureas. El punto clave de esta viñeta es que la **glibenclamida tiene una vida media prolongada**, lo que genera un riesgo real de hipoglucemia **recurrente** horas después de la corrección inicial; por ello, tras el bolo de dextrosa se requiere una infusión de mantenimiento y glucometrías seriadas con observación (con frecuencia hospitalaria) durante al menos 24 horas, sin suspender el monitoreo de forma prematura.",
    keyPoints: [
      "Hipoglucemia severa con alteración de conciencia y convulsión en un paciente que usa sulfonilureas (glibenclamida): requiere corrección INMEDIATA con dextrosa intravenosa, no por vía oral, dado el riesgo de broncoaspiración.",
      "Hipoglucemia Severa por Sulfonilureas. Manejo: bolo de dextrosa IV + infusión de mantenimiento + glucometrías seriadas y observación prolongada (24 horas o más), por el riesgo de hipoglucemia recurrente debido a la vida media larga del fármaco.",
      "Medicina Interna - Hipoglucemia Severa.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-89",
    university: "UCC",
    examArea: "PSIQUIATRÍA / CARDIOLOGÍA - URGENCIAS",
    topic: "Trastorno de Pánico vs Síndrome Coronario Agudo",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "panico-vs-sca"],
    statement:
      "Una mujer de 29 años, sin antecedentes cardiovasculares ni factores de riesgo coronario, consulta a urgencias por un episodio súbito de dolor torácico opresivo, palpitaciones, disnea, sensación de \"muerte inminente\", parestesias periorales y en las manos, mareo y diaforesis, que alcanzó su máxima intensidad en menos de 10 minutos y ha cedido parcialmente tras 20 minutos en la sala de espera. Refiere episodios similares en las últimas semanas, siempre autolimitados, y que desde entonces evita salir sola por miedo a que le \"vuelva a dar\". El electrocardiograma es normal, sin cambios dinámicos del segmento ST, y una troponina de alta sensibilidad tomada al ingreso y repetida a las 2 horas permanece indetectable en ambas mediciones. ¿Cuál es la conducta MÁS apropiada en este momento?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Dar de alta de inmediato sin más evaluación, asumiendo que la troponina negativa descarta cualquier causa orgánica del dolor torácico.",
        distractorProfile: "premature_closure_without_addressing_underlying_condition",
        incorrectFeedback:
          "Aunque la troponina negativa seriada y el electrocardiograma normal descartan razonablemente un síndrome coronario agudo, el cuadro clínico (episodios recurrentes con miedo anticipatorio y evitación) sugiere un trastorno de pánico que requiere reconocimiento, orientación diagnóstica y un plan de manejo o remisión adecuados, no un alta sin explicación ni seguimiento.",
      },
      {
        id: "B",
        label: "B",
        text: "Solicitar cateterismo cardiaco urgente a pesar de la troponina negativa y el electrocardiograma normal, dado que los síntomas son indistinguibles de un evento coronario.",
        distractorProfile: "unnecessary_invasive_testing_low_pretest_probability",
        incorrectFeedback:
          "En una paciente joven, sin factores de riesgo cardiovascular, con electrocardiograma normal y troponinas seriadas negativas, la probabilidad pretest de síndrome coronario agudo es baja; el cateterismo urgente es un procedimiento invasivo innecesario en este contexto y no es el siguiente paso indicado.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar un betabloqueador de forma indefinida como tratamiento de primera línea del cuadro de base, sin necesidad de otras intervenciones.",
        distractorProfile: "wrong_first_line_treatment_for_panic_disorder",
        incorrectFeedback:
          "Los betabloqueadores no son el tratamiento de primera línea para el trastorno de pánico; el manejo basado en evidencia incluye psicoterapia (terapia cognitivo-conductual) y/o inhibidores selectivos de la recaptación de serotonina, reservando las benzodiacepinas para el manejo puntual y a corto plazo de crisis agudas.",
      },
      {
        id: "D",
        label: "D",
        text: "Una vez razonablemente descartado el síndrome coronario agudo (electrocardiograma normal + troponinas seriadas negativas), orientar el cuadro hacia un probable Trastorno de Pánico, explicar el diagnóstico a la paciente y remitir para evaluación por psiquiatría/psicología con inicio de manejo específico (terapia cognitivo-conductual y/o inhibidores selectivos de la recaptación de serotonina).",
      },
    ],
    correctOptionId: "D",
    explanation:
      "El cuadro de la paciente corresponde a un **Trastorno de Pánico**, que puede simular de forma muy convincente un síndrome coronario agudo: dolor torácico, palpitaciones, disnea, diaforesis y sensación de muerte inminente, con parestesias por hiperventilación, inicio súbito y pico de intensidad en menos de 10 minutos, y resolución espontánea. Los elementos que orientan lejos del síndrome coronario agudo son la edad joven sin factores de riesgo cardiovascular, el electrocardiograma normal, las **troponinas de alta sensibilidad seriadas negativas** (con un altísimo valor predictivo negativo) y, sobre todo, la naturaleza recurrente de los episodios con **evitación anticipatoria** (agorafobia incipiente), característica del trastorno de pánico. Una vez descartado razonablemente el origen coronario, no basta con dar de alta sin explicación: se debe **orientar activamente el diagnóstico**, informar a la paciente y remitir para manejo basado en evidencia, que incluye terapia cognitivo-conductual y/o ISRS como primera línea, reservando las benzodiacepinas para el alivio puntual de crisis agudas.",
    keyPoints: [
      "Dolor torácico + palpitaciones + disnea + sensación de muerte inminente + parestesias, de inicio súbito y pico en menos de 10 minutos, con episodios recurrentes y evitación anticipatoria; el electrocardiograma normal y las troponinas seriadas negativas alejan el síndrome coronario agudo.",
      "Trastorno de Pánico. Una vez descartado razonablemente el SCA, se debe explicar el diagnóstico e iniciar manejo basado en evidencia: terapia cognitivo-conductual y/o ISRS; las benzodiacepinas se reservan para el manejo puntual de crisis agudas.",
      "Psiquiatría / Cardiología - Trastorno de Pánico vs Síndrome Coronario Agudo.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-90",
    university: "UCC",
    examArea: "TOXICOLOGÍA - URGENCIAS",
    topic: "Intoxicación por Monóxido de Carbono",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "intoxicacion-monoxido-carbono"],
    statement:
      "Una familia completa (padre, madre y dos hijos) es traída a urgencias tras ser encontrados inconscientes en su vivienda; los vecinos reportan que usaban un calentador a gas defectuoso en un espacio cerrado durante la noche, sin ventilación adecuada. El padre, de 45 años, ingresa somnoliento, con cefalea intensa, náuseas y confusión, pero con una SpO2 de 98% en el oxímetro de pulso, sin cianosis evidente. Una gasometría arterial con cooximetría reporta carboxihemoglobina (COHb) de 28%. ¿Por qué la oximetría de pulso NO es confiable para evaluar la oxigenación real en este paciente, y cuál es el tratamiento inmediato de elección?",
    options: [
      {
        id: "A",
        label: "A",
        text: "La oximetría de pulso subestima falsamente la saturación real porque la carboxihemoglobina interfiere con la señal luminosa, por lo que el tratamiento de elección es la transfusión de concentrado de glóbulos rojos para mejorar el transporte de oxígeno.",
        distractorProfile: "wrong_mechanism_and_wrong_treatment",
        incorrectFeedback:
          "El error apunta en la dirección opuesta: la oximetría de pulso SOBREESTIMA la saturación (no la subestima), porque no distingue la carboxihemoglobina de la oxihemoglobina. Además, el problema no es una anemia ni falta de hemoglobina transportadora, sino que la hemoglobina disponible está bloqueada por el monóxido de carbono, por lo que la transfusión no es el tratamiento indicado.",
      },
      {
        id: "B",
        label: "B",
        text: "La oximetría de pulso convencional no puede diferenciar la carboxihemoglobina de la oxihemoglobina, ya que ambas absorben luz de forma similar, por lo que SOBREESTIMA falsamente la saturación real de oxígeno; el tratamiento inmediato de elección es oxígeno al 100% con mascarilla de no reinhalación (o intubación con FiO2 de 100% si hay compromiso de la vía aérea), considerando oxígeno hiperbárico en los casos severos.",
      },
      {
        id: "C",
        label: "C",
        text: "La oximetría de pulso es completamente precisa en la intoxicación por monóxido de carbono y refleja correctamente la oxigenación tisular; el tratamiento de elección es la administración de azul de metileno intravenoso.",
        distractorProfile: "wrong_antidote_for_wrong_condition",
        incorrectFeedback:
          "La oximetría de pulso NO es confiable en esta intoxicación, ya que sobreestima la saturación, y el azul de metileno es el tratamiento de la metahemoglobinemia, una entidad distinta con un mecanismo fisiopatológico diferente; no tiene ningún rol en la intoxicación por monóxido de carbono.",
      },
      {
        id: "D",
        label: "D",
        text: "La discrepancia se debe a que el paciente presenta una anemia severa subyacente no diagnosticada; el tratamiento de elección es hierro intravenoso para corregir la causa de fondo.",
        distractorProfile: "irrelevant_unrelated_diagnosis",
        incorrectFeedback:
          "No hay evidencia de anemia en la viñeta, y esta no explica la discrepancia entre la oximetría de pulso normal y la hipoxia tisular real; el mecanismo correcto es la interferencia de la carboxihemoglobina con la lectura del oxímetro, y el tratamiento es oxígeno suplementario a alta concentración, no hierro intravenoso.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "La familia presenta una **Intoxicación por Monóxido de Carbono (CO)**, un gas incoloro e inodoro producido por combustión incompleta (calentadores, generadores o incendios en espacios cerrados sin ventilación), que explica el compromiso simultáneo de varios miembros del hogar. El CO se une a la hemoglobina con una afinidad aproximadamente 200 veces mayor que el oxígeno, formando carboxihemoglobina (COHb), que desplaza la curva de disociación de la oxihemoglobina hacia la izquierda (dificultando la liberación de oxígeno a los tejidos) y reduce la capacidad real de transporte de oxígeno, generando hipoxia tisular. La **oximetría de pulso convencional (de dos longitudes de onda) no puede diferenciar la carboxihemoglobina de la oxihemoglobina**, por lo que **sobreestima falsamente** la saturación, mostrando cifras normales o casi normales pese a una hipoxia tisular significativa; el diagnóstico se confirma con cooximetría, que sí mide la COHb de forma directa. El tratamiento inmediato es **oxígeno al 100% con mascarilla de no reinhalación** (o intubación con FiO2 de 100% si hay compromiso de la vía aérea), lo cual acorta drásticamente la vida media del CO; se considera **oxígeno hiperbárico** en casos severos (COHb elevada, pérdida de conciencia, compromiso neurológico o cardíaco, o embarazo).",
    keyPoints: [
      "Múltiples personas del mismo hogar con síntomas inespecíficos (cefalea, náuseas, confusión) tras exposición a fuentes de combustión en espacios cerrados; la oximetría de pulso NORMAL no descarta la intoxicación, ya que sobreestima falsamente la saturación al no diferenciar carboxihemoglobina de oxihemoglobina.",
      "Intoxicación por Monóxido de Carbono. Diagnóstico confirmado por cooximetría (COHb). Tratamiento inmediato: oxígeno al 100% con mascarilla de no reinhalación, que acelera la eliminación del CO; oxígeno hiperbárico en casos severos (COHb alta, pérdida de conciencia, compromiso neurológico o cardíaco, o embarazo).",
      "Toxicología - Intoxicación por Monóxido de Carbono.",
    ],
  },
];
