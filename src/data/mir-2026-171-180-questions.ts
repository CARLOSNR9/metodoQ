import type { TrainingQuestion } from "@/lib/questions/types";

export const MIR_2026_171_180_QUESTIONS: TrainingQuestion[] = [
  {
    id: "mir-2026-171",
    university: "MIR (España)",
    examArea: "GENÉTICA",
    topic: "HERENCIA AUTOSÓMICA RECESIVA: RIESGO DE SER PORTADOR",
    difficulty: "hard",
    tags: ["mir", "espana", "genetica"],
    statement:
      "Una pareja sana tiene un hijo con fibrosis quística (enfermedad autosómica recesiva). Su otra hija, de 20 años, está sana. ¿Cuál es la probabilidad de que esta hija sana sea portadora de la mutación?",
    options: [
      { id: "A", label: "A", text: "1/4." },
      { id: "B", label: "B", text: "2/3." },
      { id: "C", label: "C", text: "1/2." },
      { id: "D", label: "D", text: "3/4." },
    ],
    correctOptionId: "B",
    explanation:
      "Si un hijo está afectado de una enfermedad **autosómica recesiva**, ambos padres sanos son **portadores** (heterocigotos). Cada descendiente tiene un **25% de probabilidad de estar afectado**, un **50% de ser portador** y un **25% de ser sano no portador**. Pero en una hija que **sabemos que está sana**, se excluye la opción de estar afectada: de las 3 posibilidades restantes (1 sano no portador y 2 portadores), **2 de cada 3** corresponden a ser portadora: **probabilidad 2/3**.\n\n**TRAMPA DEL EXAMEN:** Responder 1/2 aplicando la probabilidad a priori sin tener en cuenta que ya sabemos que la hija no está afectada. La información disponible cambia la probabilidad (probabilidad condicionada).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., dibuje el cuadro de Punnett: AA, Aa, aA, aa. Si le dicen que el hermano está sano, tache el «aa»: quedan tres casillas y dos son portadoras. Dos tercios. Es de las preguntas de genética que más se repiten.",
    keyPoints: [
      "Hijos de dos portadores (AR): 25% afectados, 50% portadores, 25% sanos no portadores.",
      "Hermano sano de un afectado: probabilidad de ser portador 2/3.",
      "Probabilidad condicionada: descartar las opciones incompatibles con lo que ya se sabe.",
    ],
  },
  {
    id: "mir-2026-172",
    university: "MIR (España)",
    examArea: "GENÉTICA",
    topic: "SÍNDROME DEL X FRÁGIL",
    difficulty: "medium",
    tags: ["mir", "espana", "genetica"],
    statement:
      "Un niño de 8 años presenta discapacidad intelectual moderada, rasgos autistas, cara alargada, orejas grandes y hiperlaxitud articular. Un tío materno tiene un cuadro similar. ¿Cuál es el diagnóstico más probable y su mecanismo genético?",
    options: [
      { id: "A", label: "A", text: "Síndrome de Down por trisomía 21 libre de origen materno." },
      { id: "B", label: "B", text: "Síndrome de Klinefelter (cariotipo 47,XXY) con hipogonadismo." },
      { id: "C", label: "C", text: "Síndrome de Prader-Willi por deleción paterna del cromosoma 15." },
      { id: "D", label: "D", text: "Síndrome del X frágil por expansión de tripletes CGG en el gen FMR1." },
    ],
    correctOptionId: "D",
    explanation:
      "El **síndrome del X frágil** es la **causa hereditaria más frecuente de discapacidad intelectual**. Se debe a la **expansión de tripletes CGG** en el gen **FMR1** (cromosoma X), con metilación y silenciamiento del gen (mutación completa: > 200 repeticiones). Cursa con discapacidad intelectual, **rasgos autistas**, **cara alargada**, **orejas grandes**, **macroorquidismo** tras la pubertad e hiperlaxitud. Muestra **anticipación** (las premutaciones se expanden al transmitirse por vía materna). Las portadoras de premutación pueden presentar insuficiencia ovárica prematura y los varones portadores, temblor-ataxia en la edad adulta.\n\n**TRAMPA DEL EXAMEN:** El síndrome de **Down** es la causa **genética** más frecuente de discapacidad intelectual, pero **no hereditaria** en la mayoría de casos (trisomía libre). El antecedente de un tío materno afectado orienta a herencia **ligada al X**.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., varón con discapacidad intelectual, orejas grandes y un tío por parte de madre igual: X frágil. Se diagnostica con un estudio molecular del FMR1 (el cariotipo no basta). Y ofrezca consejo genético a la familia materna.",
    keyPoints: [
      "X frágil: causa hereditaria más frecuente de discapacidad intelectual; expansión CGG en FMR1.",
      "Cara alargada, orejas grandes, macroorquidismo, rasgos autistas; herencia ligada al X con anticipación.",
      "Diagnóstico molecular del FMR1; premutación: insuficiencia ovárica prematura y temblor-ataxia.",
    ],
  },
  {
    id: "mir-2026-173",
    university: "MIR (España)",
    examArea: "GERIATRÍA",
    topic: "CAÍDAS EN EL ANCIANO Y FÁRMACOS",
    difficulty: "easy",
    tags: ["mir", "espana", "geriatria"],
    statement:
      "Una mujer de 84 años ha sufrido tres caídas en los últimos 6 meses, sin pérdida de conocimiento. Toma lorazepam por la noche desde hace años, un diurético y un antihipertensivo. La prueba de «levántate y anda» cronometrada está alterada. ¿Cuál es la intervención más importante?",
    options: [
      { id: "A", label: "A", text: "Revisar la medicación, retirando de forma progresiva la benzodiacepina, e iniciar un programa de ejercicio de fuerza y equilibrio dentro de una valoración multifactorial." },
      { id: "B", label: "B", text: "Recomendar reposo y limitar la deambulación del paciente para evitar nuevas caídas, con andador para desplazamientos imprescindibles dentro del domicilio y vigilancia familiar continua." },
      { id: "C", label: "C", text: "Aumentar la dosis de lorazepam para mejorar el descanso nocturno, ya que el insomnio y el cansancio diurno son la causa principal de las caídas." },
      { id: "D", label: "D", text: "Colocar sujeciones mecánicas nocturnas y barandillas en la cama para impedir que se levante sin ayuda durante la noche." },
    ],
    correctOptionId: "A",
    explanation:
      "Las **caídas de repetición** en el anciano requieren una **valoración multifactorial**: fármacos, visión, marcha y equilibrio (prueba de **«levántate y anda»**), hipotensión ortostática, deterioro cognitivo, calzado y entorno domiciliario. Los **psicofármacos**, especialmente las **benzodiacepinas**, y los antihipertensivos que producen hipotensión ortostática son factores de riesgo modificables. Las intervenciones más eficaces son la **revisión y desprescripción** de fármacos de riesgo y los **programas de ejercicio** de fuerza y equilibrio.\n\n**TRAMPA DEL EXAMEN:** Restringir la movilidad aumenta la pérdida muscular y el riesgo de caídas. Las **sujeciones mecánicas** no previenen las caídas y producen lesiones y delirium. La benzodiacepina debe **retirarse de forma gradual** para evitar la abstinencia.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., en una anciana que se cae, mire primero la bolsa de medicamentos. Una benzodiacepina de años es sospechosa número uno. Retírela poco a poco, revise la presión de pie y ponga a la paciente a hacer ejercicio. Moverse con seguridad es mejor que no moverse.",
    keyPoints: [
      "Caídas de repetición: valoración multifactorial (fármacos, marcha, visión, ortostatismo, entorno).",
      "Benzodiacepinas y fármacos hipotensores: factores de riesgo modificables; desprescribir de forma gradual.",
      "El ejercicio de fuerza y equilibrio reduce las caídas; las sujeciones no.",
    ],
  },
  {
    id: "mir-2026-174",
    university: "MIR (España)",
    examArea: "GERIATRÍA",
    topic: "SÍNDROME DE FRAGILIDAD",
    difficulty: "medium",
    tags: ["mir", "espana", "geriatria"],
    statement:
      "Un hombre de 80 años, independiente para las actividades básicas, refiere pérdida de 5 kg en el último año sin causa aparente, cansancio, lentitud al caminar, debilidad en la prensión de la mano y escasa actividad física. El estudio no muestra enfermedad aguda. ¿Qué intervención ha demostrado mayor beneficio?",
    options: [
      { id: "A", label: "A", text: "Ingreso en una residencia de forma preventiva para garantizar los cuidados y evitar caídas, aunque el paciente todavía sea independiente." },
      { id: "B", label: "B", text: "Tratamiento con testosterona para aumentar la masa y la fuerza muscular, aunque los niveles hormonales sean normales." },
      { id: "C", label: "C", text: "Ejercicio físico multicomponente (con énfasis en la fuerza) junto con optimización nutricional y revisión de la medicación." },
      { id: "D", label: "D", text: "Reposo relativo para ahorrar energía y evitar la fatiga, junto con suplementos vitamínicos." },
    ],
    correctOptionId: "C",
    explanation:
      "El paciente cumple los **criterios de fragilidad de Fried** (≥ 3 de 5): **pérdida de peso involuntaria**, **agotamiento**, **debilidad** (fuerza de prensión baja), **lentitud de la marcha** y **baja actividad física**. La **fragilidad** es un estado de vulnerabilidad que predice discapacidad, caídas, hospitalización y muerte, pero es **potencialmente reversible**. La intervención más eficaz es el **ejercicio físico multicomponente**, especialmente de **fuerza**, junto con **soporte nutricional** (proteínas) y **revisión de fármacos**.\n\n**TRAMPA DEL EXAMEN:** El reposo acelera la sarcopenia. La institucionalización preventiva no está indicada en un anciano independiente. No hay fármacos con eficacia demostrada como tratamiento general de la fragilidad.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la fragilidad es el paso previo a la dependencia, y todavía tiene vuelta atrás. La mejor receta es ejercicio de fuerza y comer suficiente proteína. Detectarla a tiempo es una de las mejores cosas que puede hacer por un paciente mayor.",
    keyPoints: [
      "Fragilidad (Fried): pérdida de peso, agotamiento, debilidad, lentitud y baja actividad (≥ 3 de 5).",
      "Predice discapacidad, caídas, hospitalización y muerte, pero es potencialmente reversible.",
      "Intervención más eficaz: ejercicio multicomponente (fuerza) + nutrición + revisión de fármacos.",
    ],
  },
  {
    id: "mir-2026-175",
    university: "MIR (España)",
    examArea: "PSIQUIATRÍA",
    topic: "TRATAMIENTO DEL EPISODIO DEPRESIVO MAYOR",
    difficulty: "easy",
    tags: ["mir", "espana", "psiquiatria"],
    statement:
      "Una mujer de 38 años presenta desde hace 2 meses ánimo triste casi a diario, anhedonia, insomnio, pérdida de apetito, sentimientos de culpa y dificultad para concentrarse, con repercusión laboral. No hay ideación suicida ni síntomas psicóticos. Se inicia un ISRS. ¿Qué información es correcta?",
    options: [
      { id: "A", label: "A", text: "Si no mejora en 3 días, se debe cambiar de antidepresivo o aumentar la dosis, ya que la falta de respuesta inicial predice el fracaso del tratamiento." },
      { id: "B", label: "B", text: "La respuesta suele empezar a las 2-4 semanas y, tras la remisión, el tratamiento debe mantenerse al menos 6-12 meses." },
      { id: "C", label: "C", text: "Puede suspenderse bruscamente en cuanto se encuentre bien, sin retirada gradual, porque los ISRS no producen síntomas de discontinuación." },
      { id: "D", label: "D", text: "Los ISRS están contraindicados en el primer episodio depresivo, en el que debe empezarse por psicoterapia durante al menos seis meses." },
    ],
    correctOptionId: "B",
    explanation:
      "El cuadro cumple criterios de **episodio depresivo mayor** (≥ 5 síntomas durante ≥ 2 semanas, incluyendo ánimo deprimido o anhedonia, con repercusión funcional). Los **ISRS** son el tratamiento farmacológico de **primera línea**, habitualmente combinados con **psicoterapia**. El efecto antidepresivo comienza a las **2-4 semanas** y se evalúa la respuesta a las **4-8 semanas** con dosis adecuadas. Tras la remisión, se mantiene el tratamiento al menos **6-12 meses** para prevenir recaídas, y la retirada debe ser **gradual** para evitar el síndrome de discontinuación.\n\n**TRAMPA DEL EXAMEN:** Cambiar el antidepresivo a los pocos días no da tiempo a que actúe. Suspenderlo al mejorar aumenta el riesgo de recaída. En los primeros días puede aparecer inquietud: hay que vigilar, sobre todo en jóvenes, la ideación suicida.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., avise al paciente de que el antidepresivo no funciona como un analgésico: los efectos adversos llegan antes que la mejoría. Paciencia de semanas, seguimiento cercano y, cuando esté bien, meses de mantenimiento antes de retirarlo poco a poco.",
    keyPoints: [
      "Episodio depresivo mayor: ISRS de primera línea (± psicoterapia).",
      "La respuesta comienza a las 2-4 semanas; evaluar a las 4-8 semanas con dosis adecuadas.",
      "Mantener 6-12 meses tras la remisión y retirar de forma gradual.",
    ],
  },
  {
    id: "mir-2026-176",
    university: "MIR (España)",
    examArea: "PSIQUIATRÍA",
    topic: "ESQUIZOFRENIA RESISTENTE: CLOZAPINA",
    difficulty: "medium",
    tags: ["mir", "espana", "psiquiatria"],
    statement:
      "Un hombre de 27 años con esquizofrenia mantiene alucinaciones auditivas e ideas delirantes pese a haber recibido dos antipsicóticos distintos a dosis y duración adecuadas, con buena adherencia. ¿Cuál es el tratamiento indicado y qué control requiere?",
    options: [
      { id: "A", label: "A", text: "Benzodiacepinas a dosis altas en monoterapia; no requiere controles analíticos." },
      { id: "B", label: "B", text: "Litio en monoterapia a dosis plenas; control periódico de la función tiroidea." },
      { id: "C", label: "C", text: "Un tercer antipsicótico típico de alta potencia; control de la prolactina." },
      { id: "D", label: "D", text: "Clozapina; control periódico del recuento de neutrófilos por el riesgo de agranulocitosis." },
    ],
    correctOptionId: "D",
    explanation:
      "Se considera **esquizofrenia resistente** cuando persisten los síntomas tras **al menos dos antipsicóticos** diferentes a dosis y duración adecuadas y con buena adherencia. El fármaco de elección es la **clozapina**, el único antipsicótico con eficacia demostrada en la resistencia (y que reduce el riesgo suicida). Su efecto adverso más grave es la **agranulocitosis**, por lo que requiere **controles periódicos del recuento de neutrófilos** (semanales al inicio). Otros efectos: sialorrea, estreñimiento grave, aumento de peso, miocarditis y descenso del umbral convulsivo.\n\n**TRAMPA DEL EXAMEN:** Probar un tercer antipsicótico retrasa el único tratamiento con eficacia demostrada. Las benzodiacepinas y el litio no son tratamientos de base de la esquizofrenia.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., dos antipsicóticos bien hechos que no funcionan: piense en clozapina y no espere más. Funciona donde los demás fallan, pero exige hemogramas. Un paciente con clozapina y fiebre o dolor de garganta necesita un recuento de neutrófilos ese mismo día.",
    keyPoints: [
      "Esquizofrenia resistente: persistencia tras ≥ 2 antipsicóticos adecuados → clozapina.",
      "Clozapina: riesgo de agranulocitosis → control periódico de neutrófilos.",
      "Otros efectos: sialorrea, estreñimiento, aumento de peso, miocarditis, convulsiones.",
    ],
  },
  {
    id: "mir-2026-177",
    university: "MIR (España)",
    examArea: "PSIQUIATRÍA",
    topic: "INTOXICACIÓN POR LITIO",
    difficulty: "hard",
    tags: ["mir", "espana", "psiquiatria"],
    statement:
      "Una mujer de 60 años con trastorno bipolar, estable con litio, inició hace 10 días hidroclorotiazida por hipertensión y toma ibuprofeno por una lumbalgia. Acude por temblor grosero, ataxia, disartria, vómitos y somnolencia. ¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Intoxicación por litio por disminución de su eliminación renal." },
      { id: "B", label: "B", text: "Episodio maníaco con síntomas mixtos por abandono del tratamiento." },
      { id: "C", label: "C", text: "Ictus cerebeloso agudo sin relación con los fármacos que toma habitualmente." },
      { id: "D", label: "D", text: "Síndrome serotoninérgico desencadenado por el ibuprofeno." },
    ],
    correctOptionId: "A",
    explanation:
      "El **litio** tiene un **margen terapéutico estrecho** (litemia habitual 0,6-1,2 mEq/l) y se elimina por vía **renal**. Las **tiazidas**, los **AINE** y los **IECA/ARA-II**, así como la **deshidratación** o la dieta pobre en sodio, **reducen su eliminación** y pueden provocar **intoxicación**: síntomas digestivos, **temblor grosero**, **ataxia**, disartria, confusión y, en casos graves, convulsiones, arritmias y coma. Se debe determinar la **litemia**, suspender el litio y los fármacos implicados, hidratar con suero salino y valorar la **hemodiálisis** en casos graves.\n\n**TRAMPA DEL EXAMEN:** El temblor fino es un efecto adverso habitual del litio; el **temblor grosero** con síntomas cerebelosos y confusión sugiere intoxicación. El ibuprofeno no produce síndrome serotoninérgico.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., a un paciente con litio no le añada tiazidas, AINE o IECA sin pensarlo dos veces y sin controlar la litemia. Todo lo que hace que el riñón retenga sodio, retiene también litio. Temblor grueso y marcha de borracho: pida litemia urgente.",
    keyPoints: [
      "Litio: margen terapéutico estrecho (0,6-1,2 mEq/l), eliminación renal.",
      "Tiazidas, AINE, IECA/ARA-II y deshidratación aumentan la litemia.",
      "Intoxicación: temblor grosero, ataxia, disartria, confusión; hidratación y hemodiálisis si es grave.",
    ],
  },
  {
    id: "mir-2026-178",
    university: "MIR (España)",
    examArea: "NEUROLOGÍA",
    topic: "TRATAMIENTO INICIAL DE LA ENFERMEDAD DE PARKINSON",
    difficulty: "medium",
    tags: ["mir", "espana", "neurologia"],
    statement:
      "Un hombre de 76 años presenta desde hace un año temblor de reposo en la mano derecha, lentitud de movimientos y rigidez, con repercusión en sus actividades diarias. La exploración es compatible con enfermedad de Parkinson. ¿Cuál es el tratamiento inicial más adecuado?",
    options: [
      { id: "A", label: "A", text: "Haloperidol a dosis bajas para controlar el temblor y la rigidez del paciente." },
      { id: "B", label: "B", text: "Estimulación cerebral profunda del núcleo subtalámico como primera opción." },
      { id: "C", label: "C", text: "Levodopa asociada a un inhibidor de la dopa-descarboxilasa (carbidopa o benserazida)." },
      { id: "D", label: "D", text: "No tratar hasta que aparezcan caídas o una limitación funcional grave." },
    ],
    correctOptionId: "C",
    explanation:
      "La **enfermedad de Parkinson** se diagnostica por **bradicinesia** asociada a **temblor de reposo** y/o **rigidez**. Cuando los síntomas afectan a la vida diaria, se inicia tratamiento. La **levodopa** (con **carbidopa o benserazida**, que evitan su conversión periférica) es el fármaco **más eficaz** y de elección en **pacientes mayores** o con afectación funcional relevante. En pacientes jóvenes con síntomas leves pueden usarse inicialmente **agonistas dopaminérgicos** o **IMAO-B** para retrasar las complicaciones motoras. La **estimulación cerebral profunda** se reserva para pacientes seleccionados con complicaciones motoras avanzadas.\n\n**TRAMPA DEL EXAMEN:** Los **antipsicóticos típicos** como el haloperidol **empeoran** el parkinsonismo. En ancianos, los agonistas dopaminérgicos producen más confusión, alucinaciones y trastornos del control de impulsos.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., en el paciente mayor con Parkinson que le limita, levodopa sin miedo: es la que mejor funciona y la que mejor tolera. Los agonistas guárdelos para el paciente joven. Y cuidado con los fármacos que bloquean la dopamina, incluidos algunos antieméticos como la metoclopramida.",
    keyPoints: [
      "Parkinson: bradicinesia + temblor de reposo y/o rigidez.",
      "Levodopa + inhibidor de la dopa-descarboxilasa: el más eficaz; de elección en mayores o con afectación funcional.",
      "Evitar antipsicóticos típicos y metoclopramida (empeoran el parkinsonismo).",
    ],
  },
  {
    id: "mir-2026-179",
    university: "MIR (España)",
    examArea: "NEUROLOGÍA",
    topic: "ESCLEROSIS MÚLTIPLE: TRATAMIENTO DEL BROTE",
    difficulty: "medium",
    tags: ["mir", "espana", "neurologia"],
    statement:
      "Una mujer de 28 años presenta pérdida de visión del ojo izquierdo con dolor a los movimientos oculares de 4 días de evolución. Hace un año tuvo un episodio de parestesias en ambas piernas que se resolvió. La resonancia muestra múltiples lesiones desmielinizantes periventriculares y yuxtacorticales, algunas con captación de gadolinio. ¿Cuál es el tratamiento del episodio actual?",
    options: [
      { id: "A", label: "A", text: "Anticoagulación con heparina de bajo peso molecular a dosis plenas." },
      { id: "B", label: "B", text: "Metilprednisolona intravenosa a dosis altas durante 3-5 días." },
      { id: "C", label: "C", text: "Aciclovir intravenoso por sospecha de encefalitis herpética aguda." },
      { id: "D", label: "D", text: "Inmunoglobulinas intravenosas como primera elección en el brote agudo." },
    ],
    correctOptionId: "B",
    explanation:
      "La paciente presenta una **neuritis óptica** y un episodio neurológico previo, con **lesiones desmielinizantes diseminadas en espacio y en tiempo** (lesiones que captan y otras que no): **esclerosis múltiple** según los criterios de McDonald. El **brote** se trata con **corticoides a dosis altas** (metilprednisolona 1 g/día intravenosa durante 3-5 días), que **aceleran la recuperación** aunque no modifican el pronóstico a largo plazo. Además, se debe iniciar un **tratamiento modificador de la enfermedad** para reducir los brotes y la progresión. En brotes graves refractarios a corticoides se usa la **plasmaféresis**.\n\n**TRAMPA DEL EXAMEN:** Las inmunoglobulinas no son el tratamiento de primera línea del brote. El dolor con los movimientos oculares y la afectación visual unilateral en una mujer joven son típicos de la neuritis óptica desmielinizante.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., mujer joven, neuritis óptica y un episodio neurológico previo: piense en esclerosis múltiple. El brote se trata con corticoides en bolos; la enfermedad se trata con fármacos modificadores. Son dos objetivos distintos y los dos importan.",
    keyPoints: [
      "EM: lesiones desmielinizantes diseminadas en espacio y tiempo (criterios de McDonald).",
      "Brote: metilprednisolona IV a dosis altas 3-5 días; plasmaféresis si es refractario.",
      "Además, tratamiento modificador de la enfermedad para reducir brotes y progresión.",
    ],
  },
  {
    id: "mir-2026-180",
    university: "MIR (España)",
    examArea: "NEUROLOGÍA",
    topic: "CEFALEA EN RACIMOS",
    difficulty: "medium",
    tags: ["mir", "espana", "neurologia"],
    statement:
      "Un hombre de 35 años, fumador, presenta desde hace 3 semanas crisis diarias de dolor intensísimo periorbitario derecho, de 45 minutos de duración, generalmente de madrugada, con lagrimeo, rinorrea y ptosis del mismo lado. Durante las crisis está inquieto y no puede quedarse quieto. ¿Cuál es el tratamiento sintomático de elección de las crisis?",
    options: [
      { id: "A", label: "A", text: "Paracetamol oral a dosis plenas y reposo en cama durante el ataque de dolor." },
      { id: "B", label: "B", text: "Amitriptilina por la noche como tratamiento del ataque de dolor agudo." },
      { id: "C", label: "C", text: "Ibuprofeno oral y reposo en una habitación oscura y en silencio." },
      { id: "D", label: "D", text: "Oxígeno al 100% a alto flujo con mascarilla o sumatriptán subcutáneo." },
    ],
    correctOptionId: "D",
    explanation:
      "La **cefalea en racimos** afecta sobre todo a **varones**, con crisis de **dolor muy intenso, unilateral, orbitario o periorbitario**, de **15 a 180 minutos**, con frecuencia **nocturnas** y agrupadas en periodos («racimos»), acompañadas de **síntomas autonómicos homolaterales** (lagrimeo, rinorrea, ptosis, miosis) e **inquietud** motora. El tratamiento de las crisis es el **oxígeno al 100% a alto flujo** o el **sumatriptán subcutáneo** (o intranasal). El tratamiento preventivo de elección es el **verapamilo**, con corticoides como terapia de transición.\n\n**TRAMPA DEL EXAMEN:** Los analgésicos orales actúan demasiado despacio para crisis tan cortas e intensas. El paciente con **migraña** prefiere quedarse quieto en la oscuridad; el de **cefalea en racimos** está agitado y camina.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., varón que se despierta de madrugada con un «puñal» en el ojo, con el ojo lloroso y la nariz goteando, y que no puede estar quieto: racimos. Oxígeno a alto flujo o sumatriptán subcutáneo para la crisis, y verapamilo para prevenir.",
    keyPoints: [
      "Cefalea en racimos: varón, dolor orbitario unilateral intenso de 15-180 min, síntomas autonómicos, inquietud.",
      "Crisis: oxígeno al 100% a alto flujo o sumatriptán subcutáneo.",
      "Prevención: verapamilo (corticoides como transición).",
    ],
  },
];
