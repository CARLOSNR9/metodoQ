import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #4 (26 jul 2026) · Preguntas #71–#80.
 */
export const UCC_CONV_2026_07_26_71_80_QUESTIONS: TrainingQuestion[] = [
  {
    "id": "ucc-conv-2026-07-26-71",
    "university": "UCC",
    "examArea": "MEDICINA INTERNA - NEUROLOGÍA",
    "topic": "MEDICINA INTERNA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Hombre de 68 años, hipertenso y diabético, es traído al servicio de urgencias por su esposa. Ella refiere que el paciente se acostó a dormir en perfecto estado de salud a las 22:00 horas. Hoy a las 06:00 horas, al intentar levantarse, la esposa notó que el paciente presentaba asimetría facial, afasia global y hemiplejía derecha densa. El paciente ingresa al triage a las 07:00 horas (PA 160/90 mmHg). Se realiza de forma hiperurgente una Tomografía Computarizada (TC) de cráneo simple que descarta cualquier hemorragia intracraneana y no muestra hipodensidades establecidas. Ante este escenario de \"ACV del despertar\" (Wake-up Stroke) con tiempo de inicio clínico desconocido, ¿cuál es el paso de neuroimagen MÁS apropiado para definir si el paciente es candidato a terapia trombolítica con Alteplase (rt-PA)?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Descartar la trombólisis definitivamente y administrar Ácido Acetilsalicílico (AAS), ya que se asume que el ACV inició a las 22:00 horas, superando la ventana de 4.5 horas.",
        "distractorProfile": "obsolete_guideline_application",
        "incorrectFeedback": "Asumir invariablemente que el ACV inició a la hora de acostarse priva de terapia de reperfusión a un grupo gigantesco de pacientes que, demostrablemente mediante neuroimagen avanzada (Mismatch DWI/FLAIR), tienen tejido cerebral completamente viable y recuperable en ventana terapéutica."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Administrar Alteplase de inmediato, asumiendo que el infarto ocurrió justo antes de despertar a las 06:00 horas al no haber signos hipodensos en la TC simple.",
        "distractorProfile": "dangerous_clinical_assumption",
        "incorrectFeedback": "Asumir clínicamente que el ACV ocurrió minutos antes de despertar es jugar a la ruleta rusa con el cerebro. Si el infarto realmente ocurrió a las 01:00 am, trombolizar a ciegas causará una transformación hemorrágica intracraneana fatal al reperfundir un tejido ya necrótico."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Solicitar una Resonancia Magnética (RMN) cerebral para buscar un desacoplamiento (Mismatch) entre las secuencias de Difusión (DWI) y FLAIR."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Realizar una punción lumbar para descartar hemorragia subaracnoidea oculta antes de decidir el uso del fibrinolítico.",
        "distractorProfile": "wrong_procedure_indication",
        "incorrectFeedback": "La punción lumbar se reserva para cefaleas \"en trueno\" con alta sospecha clínica de HSA y TC negativa. En el contexto de un déficit neurológico focal clásico (hemiplejía y afasia) indicativo de isquemia territorial, la PL solo retrasaría el manejo y agregaría un riesgo inaceptable de sangrado espinal al trombolizar."
      }
    ],
    "correctOptionId": "C",
    "explanation": "El paciente cursa con un Ataque Cerebrovascular Isquémico Agudo del despertar (\"Wake-up Stroke\"). Tradicionalmente, a estos pacientes se les negaba la trombólisis intravenosa porque, por seguridad legal y médica, la hora de inicio (Time Last Known Well) se asume como la última vez que fueron vistos sanos (las 22:00 horas del día anterior, superando por mucho las 4.5 horas de ventana). Sin embargo, el ensayo clínico WAKE-UP revolucionó la neurología: demostró que muchos de estos infartos realmente ocurren minutos antes de despertar. Para rescatar a estos pacientes se utiliza el Mismatch DWI/FLAIR en la RMN. La isquemia celular aguda brilla en la secuencia de Difusión (DWI) en minutos, pero tarda de 4 a 6 horas en aparecer (brillar) en la secuencia FLAIR. Si la lesión se ve en DWI pero no se ve en FLAIR (Mismatch positivo), significa que el infarto tiene menos de 4.5 horas de evolución real, y el paciente PUEDE y DEBE ser trombolizado.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Elizabeth, aquí te actualizan las guías. La opción A era la respuesta correcta hace 10 años, cuando condenábamos a todos los pacientes que despertaban hemipléjicos a vivir en silla de ruedas porque \"se pasó la ventana\". Hoy en día, la Resonancia Magnética actúa como un reloj molecular. El FLAIR es un reloj de arena que tarda 4.5 horas en llenarse. Si el cerebro brilla en Difusión (las células se están asfixiando AHORA), pero el FLAIR está oscuro, la isquemia acaba de suceder en la madrugada. Sálvalo con Alteplase. Si asumes ciegamente que el infarto es reciente y pones el trombolítico (Opción B) sin hacer la RMN, podrías estar trombolizando un cerebro que se infartó a las 23:00 hrs y provocarás una hemorragia intracraneal masiva.",
    "keyPoints": [
      "Cuando veas:",
      "• Paciente con ACV del despertar (Wake-up stroke) o con tiempo de inicio desconocido.",
      "• TC de cráneo inicial normal (sin sangrado ni infarto establecido).",
      "Debes pensar en:",
      "Buscar viabilidad de tejido en ventana de tiempo. Se pide RMN cerebral: Si hay lesión en DWI pero FLAIR es negativo (Mismatch), el ACV es hiperagudo (< 4.5h) y ES candidato a Alteplase.",
      "Tema: ACV Isquémico / Neurología de Urgencias."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-72",
    "university": "UCC",
    "examArea": "PEDIATRÍA - URGENCIAS / TOXICOLOGÍA",
    "topic": "PEDIATRÍA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Un niño de 2 años de edad es traído a la sala de emergencias rural por su madre en estado de pánico. Ella relata que hace 30 minutos encontró al niño tosiendo violentamente y ahogándose en la cocina junto a una botella de refresco que contenía Varsol (keroseno / disolvente de pintura) a medio consumir. A su ingreso, el niño presenta accesos de tos espasmódica, llanto, cianosis perioral leve y vómitos inducidos por el esfuerzo tusígeno. Sus ropas huelen fuertemente a hidrocarburos. Signos vitales: FC 150 lpm, FR 45 rpm, SatO2 88% al aire ambiente. A la auscultación pulmonar se detectan sibilancias y crépitos en las bases. ¿Cuál de las siguientes acciones constituye una CONTRAINDICACIÓN ABSOLUTA y una iatrogenia letal en el manejo de este paciente?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Realizar un lavado gástrico con sonda nasogástrica y administrar Carbón Activado para evitar la absorción sistémica."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Retirar inmediatamente todas las prendas de vestir contaminadas y lavar la piel expuesta con agua y jabón.",
        "distractorProfile": "correct_action_but_not_the_contraindication",
        "incorrectFeedback": "Esta es una medida correcta y esencial. Los hidrocarburos pueden absorberse por la piel y causar quemaduras cutáneas y toxicidad sistémica. Retirar la ropa olorosa es un pilar básico de la descontaminación tópica en toxicología."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Administrar oxígeno suplementario mediante máscara con reservorio para lograr metas de saturación > 94%.",
        "distractorProfile": "standard_care_support",
        "incorrectFeedback": "El paciente ya documenta signos de SDRA precoz e hipoxemia (SatO2 88%). El soporte oxigenatorio respiratorio progresivo es exactamente lo que amerita, no representando ningún peligro ni contraindicación."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Solicitar una radiografía de tórax inicial para buscar infiltrados algodonosos sugestivos de neumonitis química.",
        "distractorProfile": "standard_diagnostic_tool",
        "incorrectFeedback": "Es un paso diagnóstico obligado. La placa de tórax guiará el manejo y puede mostrar neumatocele o infiltrados de necrosis de consolidación multilobar típicos de la aspiración química del Varsol."
      }
    ],
    "correctOptionId": "A",
    "explanation": "La ingesta de hidrocarburos alifáticos (como Varsol, gasolina, keroseno o tíner) es una de las emergencias toxicológicas pediátricas donde la intuición falla. El riesgo mortal primario de estos químicos no es la toxicidad por absorción gastrointestinal (que suele ser mínima y causar solo náuseas leves), sino su altísima volatilidad y bajísima tensión superficial. Estas propiedades hacen que la sustancia se vaporice y fluya directamente hacia las vías respiratorias durante la deglución o el vómito, causando una Neumonitis Química Fulminante (destrucción del surfactante alveolar y necrosis epitelial). Debido a esto, cualquier maniobra que aumente el riesgo de aspiración, como inducir el vómito, insertar una sonda para lavado gástrico o forzar la ingesta de Carbón Activado, está ESTRICTAMENTE CONTRAINDICADA. El niño de la viñeta ya se está asfixiando por aspiración inicial (tos y desaturación); manipular su estómago precipitará una broncoaspiración secundaria masiva y letal.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** En la toxicología de hidrocarburos destilados del petróleo, el estómago es de acero pero los pulmones son de papel. Elizabeth, recuerda la regla: \"Lo que baja por el esófago, que se quede ahí\". El niño absorbió poquísimo por vía gástrica, pero al toser o vomitar, microgotas del químico se fueron a los pulmones y destrozaron el surfactante (por eso el niño está en 88% de saturación y respira a 45 por minuto). Si tú le pasas una sonda nasogástrica, el niño va a luchar, su esfínter esofágico se relajará y un torrente de varsol regurgitado inundará su tráquea, matándolo de Síndrome de Dificultad Respiratoria Aguda (SDRA). Déjalo tranquilo, ponle oxígeno (Opción C) y tómale la placa (Opción D).",
    "keyPoints": [
      "Cuando veas:",
      "• Niño pequeño que bebió hidrocarburos (gasolina, varsol, solventes) envasados en botellas de refresco.",
      "• Tos persistente, ahogo o dificultad respiratoria aguda tras la ingesta.",
      "Debes pensar en:",
      "Riesgo extremo de Neumonitis Química. El tratamiento es netamente de soporte respiratorio (Oxígeno, broncodilatadores si hay sibilancias, VMNI). PROHIBIDO el lavado gástrico, proscrito el carbón activado y los eméticos.",
      "Tema: Toxicología Pediátrica / Ingesta de Hidrocarburos."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-73",
    "university": "UCC",
    "examArea": "MEDICINA INTERNA - REUMATOLOGÍA / NEFROLOGÍA",
    "topic": "MEDICINA INTERNA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Mujer de 32 años con diagnóstico de Nefritis Lúpica Clase IV (proliferativa difusa), en tratamiento de inducción a la remisión con un esquema de pulsos mensuales de Ciclofosfamida intravenosa a dosis altas y corticosteroides. A la semana de su tercer pulso, acude a urgencias quejándose de disuria severa, polaquiuria y la aparición repentina de hematuria macroscópica masiva (orina roja brillante con múltiples coágulos), sin fiebre ni dolor lumbar. Los tiempos de coagulación y recuento de plaquetas son normales. El cultivo de orina es negativo. ¿Cuál es el metabolito tóxico responsable de esta complicación iatrogénica y cuál es el agente quimioprotector que DEBIÓ administrarse profilácticamente junto a la quimioterapia?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Daño mediado por Ácido Úrico cristalizado; el profiláctico obligado es la Rasburicasa y la hiperhidratación.",
        "distractorProfile": "tumor_lysis_overlap",
        "incorrectFeedback": "La acumulación de ácido úrico caracteriza al Síndrome de Lisis Tumoral (típico en leucemias de alta carga tratadas con citotóxicos), provocando falla renal oligúrica por taponamiento tubular, no cistitis hemorrágica pura de vejiga inferior."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Daño urotelial mediado por Acroleína; el profiláctico OBLIGATORIO es la hidratación agresiva y la administración de MESNA."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Daño mucoso por precipitación de Metotrexato; la profilaxis correcta requiere la infusión de Ácido Folínico (Leucovorina).",
        "distractorProfile": "wrong_chemo_antidote_pair",
        "incorrectFeedback": "El ácido folínico (Leucovorina) es el antídoto o \"rescate\" celular tras la administración de dosis altas de Metotrexato para prevenir la mielosupresión y mucositis masiva, pero no tiene ninguna actividad neutralizante en la vejiga frente a los agentes alquilantes."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Activación viral poliomavírica (Virus BK) en urotelio; el profiláctico de elección es Valganciclovir.",
        "distractorProfile": "infectious_hemorrhagic_cystitis",
        "incorrectFeedback": "Aunque el poliomavirus BK causa cistitis hemorrágica, es característico del contexto de trasplante renal o de médula ósea prolongado. La presentación de la viñeta (a la semana post-ciclofosfamida) es abrumadoramente indicativa de toxicidad química aguda. Además, Valganciclovir no es profiláctico estándar del virus BK."
      }
    ],
    "correctOptionId": "B",
    "explanation": "La paciente presenta una Cistitis Hemorrágica aguda, la complicación urológica más emblemática y temida del uso de Ciclofosfamida (y de la Ifosfamida), fármacos alquilantes potentes usados en nefritis lúpica y oncología. El daño no es causado por la droga original, sino por su metabolismo hepático que genera un subproducto altamente tóxico llamado Acroleína. La acroleína se concentra y acumula en la orina de la vejiga, donde quema y ulcera directamente el urotelio, provocando sangrados masivos que pueden requerir cistectomía de rescate si son intratables. Para prevenir esto, las guías de infusión exigen dos pasos ineludibles: 1) Forzar una diuresis enorme (hiperhidratación intravenosa) para que el tóxico no se estanque en la vejiga; y 2) Administrar de forma profiláctica MESNA (Mercaptoetano sulfonato de sodio), un compuesto que posee un grupo sulfhidrilo (tiol) que se une químicamente a la acroleína en la orina, neutralizándola y formando un compuesto inerte no tóxico.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Es la pareja de oro de la farmacología: \"Ciclofosfamida y MESNA\". Si formulas uno, tienes que formular el otro. El error clásico es pensar que la hematuria de la paciente es porque la nefritis lúpica \"empeoró\" y el riñón está sangrando. Pero la nefritis lúpica rara vez da orina con coágulos macroscópicos rojos; suele dar una hematuria glomerular (color coca-cola). La presencia de sangre fresca en el inodoro después del pulso de quimioterapia es la acroleína quemando las paredes de la vejiga urinaria de tu paciente.",
    "keyPoints": [
      "Cuando veas:",
      "• Paciente oncológico o reumatológico recibiendo Ciclofosfamida intravenosa.",
      "• Aparición de hematuria macroscópica masiva, disuria y coágulos (Cistitis hemorrágica).",
      "Debes pensar en:",
      "Toxicidad urotelial directa por Acroleína. Agente de prevención/rescate: Hidratación intensa + MESNA intravenoso.",
      "Tema: Complicaciones Farmacológicas / Reumatología."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-74",
    "university": "UCC",
    "examArea": "MEDICINA INTERNA - CARDIOLOGÍA",
    "topic": "MEDICINA INTERNA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Hombre de 65 años acude a su médico de familia reportando que ha sentido palpitaciones \"rápidas y caóticas\" en el pecho durante los últimos 4 días. El paciente niega disnea, dolor torácico o mareos. Al examen físico: PA 125/80 mmHg, FC 130 lpm, arrítmica, sin soplos ni estertores pulmonares. El electrocardiograma confirma el diagnóstico de Fibrilación Auricular (FA) con respuesta ventricular rápida. Ante la duración incierta y mayor a 48 horas de la arritmia, y encontrándose el paciente totalmente estable, el médico decide que es imperativo retornar al paciente a ritmo sinusal mediante cardioversión eléctrica o farmacológica ambulatoria. ¿Cuál es el protocolo de exclusión tromboembólica PREVIO OBLIGATORIO antes de intentar la cardioversión en este escenario clínico?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Realizar una Ecocardiografía Transtorácica (ETT) para evaluar la FEVI y luego proceder a la cardioversión con Amiodarona inmediatamente.",
        "distractorProfile": "inadequate_anatomical_imaging",
        "incorrectFeedback": "La ETT tiene una sensibilidad paupérrima (<40%) para detectar trombos en la orejuela auricular izquierda. Guiarse por un ETT \"limpio\" para cardiovertir es una ilusión de seguridad que termina en accidentes isquémicos cerebrovasculares."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Realizar una Ecocardiografía Transesofágica (ETE) para descartar trombos en la orejuela izquierda, O en su defecto, anticoagular plenamente al paciente durante 3 semanas previas a la cardioversión."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Solicitar niveles de Dímero-D; si resultan negativos, se descarta el riesgo tromboembólico y se cardioverte de inmediato.",
        "distractorProfile": "wrong_thrombosis_screening_tool",
        "incorrectFeedback": "El Dímero-D es excelente por su valor predictivo negativo en Tromboembolismo Venoso (TEP/TVP), pero no tiene validación ni utilidad algorítmica para descartar trombos intracavitarios auriculares en Fibrilación Auricular."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Administrar un bolo de Heparina de Bajo Peso Molecular (Enoxaparina) en la clínica e iniciar la cardioversión eléctrica a los 30 minutos.",
        "distractorProfile": "acute_anticoagulation_myth",
        "incorrectFeedback": "La anticoagulación aguda previene la aposición de fibrina nueva, pero no trombolisa un coágulo ya organizado que lleve más de 48 horas adherido. Cardiovertir inmediatamente garantizará la embolización sistémica."
      }
    ],
    "correctOptionId": "B",
    "explanation": "Este es el protocolo sagrado de seguridad de la Fibrilación Auricular (FA). Cuando un paciente presenta una FA de más de 48 horas de evolución (o de inicio temporal desconocido) y se encuentra ESTABLE, existe un altísimo riesgo de que la sangre estancada en la aurícula ya haya formado un coágulo, específicamente en la orejuela auricular izquierda. Si se revierte el ritmo a sinusal bruscamente (cardioversión), la aurícula recupera su contracción vigorosa (patada auricular) y \"dispara\" ese coágulo hacia el cerebro, causando un ACV embólico masivo. Las guías de la AHA/ACC y ESC prohíben cardiovertir ciegamente este escenario. Las dos únicas vías legales para hacerlo son: 1) Estrategia guiada por imagen: Hacer una Ecocardiografía Transesofágica (ETE) (la única que visualiza la orejuela izquierda) para confirmar que no hay trombos y cardiovertir el mismo día; o 2) Estrategia conservadora: Anticoagular al paciente con DOACs o Warfarina durante 3 semanas completas, asumiendo que si hay coágulo, este se endotelizará o se disolverá, permitiendo cardiovertir de forma segura pasado ese tiempo. (En ambos casos, la anticoagulación debe continuarse 4 semanas post-cardioversión).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Elizabeth, aquí te engañan visualmente con la ecografía \"equivocada\". La Ecografía Transtorácica (Opción A) la pones por fuera en el pecho; desde ahí es anatómicamente imposible ver bien la Orejuela Izquierda porque está escondida detrás del corazón y tapada por aire pulmonar. Solo metiendo la sonda por el esófago (ETE) estás a milímetros de la aurícula izquierda y puedes ver los coágulos. Y ojo: poner una inyección de heparina (Opción D) y chocar al paciente en la misma hora es negligencia; la heparina previene que el coágulo crezca, pero NO DISUELVE un coágulo de 4 días de evolución. Si lo chocas, el coágulo volará directo a la arteria cerebral media.",
    "keyPoints": [
      "Cuando veas:",
      "• Fibrilación Auricular estable de > 48h de duración (o desconocida).",
      "• Intención clínica de cardiovertir (volver a ritmo sinusal).",
      "Debes pensar en:",
      "Riesgo de ACV por trombo en la orejuela izquierda. Paso previo OBLIGATORIO: Descartar trombo con Eco Transesofágico (ETE) O Anticoagular 3 semanas antes del procedimiento.",
      "Tema: Cardiología / Fibrilación Auricular."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-75",
    "university": "UCC",
    "examArea": "PEDIATRÍA - INFECTOLOGÍA / NEUROLOGÍA",
    "topic": "PEDIATRÍA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Un neonato de 8 días de vida, nacido de un parto domiciliario atendido por una partera empírica en una zona rural de Linares (Nariño), es traído a urgencias. Su madre no asistió a controles prenatales ni recibió vacunas durante la gestación. El cordón umbilical fue seccionado con tijeras caseras y \"curado\" con tierra y ungüentos botánicos. El niño se encontraba alimentándose bien hasta ayer, pero hoy presenta un llanto débil, rechazo total a la succión, y un marcado endurecimiento de los músculos faciales que le confieren una expresión de sonrisa forzada (risa sardónica). Ante la mínima estimulación con la luz o el ruido, el neonato desencadena espasmos musculares dolorosos y rigidez generalizada en opistótonos. El muñón umbilical se observa fétido y purulento. ¿Cuál es el pilar de tratamiento combinada ESPECÍFICO de urgencia para contrarrestar la toxina responsable y erradicar la fuente bacteriana en este neonato?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Administración de Inmunoglobulina Antitetánica Humana (TIG) + Metronidazol intravenoso + Sedación profunda con Benzodiacepinas."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Infusión de Penicilina G cristalina intravenosa + relajantes musculares depolarizantes (Succinilcolina) de forma continua.",
        "distractorProfile": "outdated_and_dangerous_antibiotic_choice",
        "incorrectFeedback": "La penicilina es eficaz bacteriológicamente pero puede antagonizar los receptores GABA en el SNC, teóricamente empeorando los espasmos letales de la toxina; además, faltaría el pilar absoluto de neutralización de la toxina circulante con TIG."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Aplicación inmediata de la vacuna Pentavalente (DPT) + Clindamicina para eliminar la flora anaerobia.",
        "distractorProfile": "active_immunity_timing_error",
        "incorrectFeedback": "Iniciar el esquema activo (DPT) es correcto para el futuro, pero no ofrece protección en la fase aguda porque los anticuerpos tardan semanas en generarse. En un tétanos establecido, la falla en neutralizar la toxina con inmunoglobulina pasiva (TIG) asegura la mortalidad."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Intervención quirúrgica radical para excisión del ombligo y Onfalectomía inmediata, sin requerimiento de sueros heterólogos.",
        "distractorProfile": "surgical_overreaction_without_antitoxin",
        "incorrectFeedback": "Limpiar quirúrgicamente la herida infectada es vital, pero hacerlo sin administrar previamente la TIG libera un bolo sistémico de toxina a la sangre por la manipulación, lo que empeoraría de manera aguda el bloqueo inhibitorio espinal."
      }
    ],
    "correctOptionId": "A",
    "explanation": "El paciente cursa con un cuadro clásico y letal de Tétanos Neonatal, secundario a la infección del muñón umbilical por esporas de Clostridium tetani al usar herramientas no estériles, sumado a la falta de inmunidad pasiva transferida (madre no vacunada con toxoide tetánico). La toxina (Tetanospasmina) viaja por las neuronas motoras hasta la médula espinal, bloqueando la liberación de neurotransmisores inhibitorios (GABA y glicina), lo que causa los espasmos musculares incontenibles y la risa sardónica. El manejo exige un enfoque de \"tres frentes\": 1) Neutralizar la toxina circulante que aún no ha entrado al sistema nervioso mediante la Inmunoglobulina Antitetánica Humana (TIG). 2) Erradicar la bacteria de la herida (fábrica de toxinas) usando Metronidazol intravenoso (preferido sobre la penicilina por menor riesgo de convulsiones asociadas a antagonismo GABA). 3) Controlar los espasmos (que ahogan al niño por fijación de la caja torácica) utilizando sedación masiva en un ambiente oscuro y silencioso con Benzodiacepinas (Diazepam o Midazolam), apoyado con ventilación mecánica si es necesario.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Un escenario puramente epidemiológico que refleja la triste realidad del abandono de los esquemas vacunales maternos. Elizabeth, la trampa farmacológica aquí es pensar que la vacuna DPT en el momento de urgencias (Opción C) lo salvará. La vacuna tarda semanas en crear anticuerpos protectores; para cuando eso pase, el bebé habrá fallecido por asfixia y fracturas vertebrales causadas por los espasmos. Necesitas prestarle los anticuerpos ya fabricados (la Inmunoglobulina TIG). También debes tener cuidado con la Penicilina (Opción B): aunque mata al Clostridium, es un antagonista del receptor GABA, por lo que a dosis altas puede empeorar los espasmos del tétanos, de ahí que el Metronidazol es el rey anaerobio actual.",
    "keyPoints": [
      "Cuando veas:",
      "• Neonato < 2 semanas, nacido en casa / partera, con curación rural del cordón.",
      "• Trismo (quijada trabada), Risa sardónica, Opistótonos o espasmos severos ante ruidos/luz.",
      "Debes pensar en:",
      "Tétanos Neonatal. Infección por Clostridium tetani. Pilar de manejo: Inmunoglobulina Antitetánica Humana (TIG) + Metronidazol + Benzodiacepinas. (Aislar en cuarto oscuro y en silencio).",
      "Tema: Infectología Pediátrica / Tétanos Neonatal."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-76",
    "university": "UCC",
    "examArea": "MEDICINA INTERNA - GASTROENTEROLOGÍA / TOXICOLOGÍA",
    "topic": "MEDICINA INTERNA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Mujer de 25 años, estudiante universitaria, es traída por sus familiares al servicio de urgencias por un cuadro de ictericia progresiva, dolor abdominal en hipocondrio derecho y marcada alteración del estado de conciencia. Sus padres mencionan que la paciente, tras una ruptura amorosa, ingirió un puñado masivo de analgésicos de venta libre (Acetaminofén/Paracetamol) hace aproximadamente 48 horas con intención suicida, ocultándolo hasta hoy. Al examen físico: obnubilada, presenta \"flapping\" tremor (asterixis) franco. Paraclínicos: AST 7,800 U/L, ALT 8,500 U/L. pH arterial 7.25. Creatinina sérica 3.8 mg/dL. El Tiempo de Protrombina (TP) está marcadamente prolongado con un INR de 6.8. A pesar de iniciar la infusión intravenosa de N-acetilcisteína (NAC) a dosis máximas, la paciente progresa al coma hepático (Grado IV). ¿Cuál es la implicación pronóstica y la conducta a seguir, basándose en los Criterios del King's College Hospital?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Continuar N-acetilcisteína exclusivamente; la elevación transitoria del INR es esperable y el hígado de las pacientes jóvenes se regenera en el 90% de los casos.",
        "distractorProfile": "dangerous_false_reassurance",
        "incorrectFeedback": "La regeneración hepática no es posible cuando se han cruzado los umbrales de los criterios de King's College; la mortalidad con manejo médico conservador exclusivo en este punto supera el 85-90%."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Iniciar diálisis hepática extracorpórea (sistema MARS) de inmediato, contraindicándose el trasplante en intentos de suicidio.",
        "distractorProfile": "unproven_bridge_therapy_over_cure",
        "incorrectFeedback": "El sistema MARS es solo una terapia \"puente\" experimental y no sustituye la necesidad inminente de un hígado nuevo. Además, el intento autolítico agudo impulsivo no constituye una contraindicación universal absoluta para el trasplante hepático de urgencia en adultos jóvenes."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Cumple criterios estrictos de Falla Hepática Fulminante irreversible; requiere enlistamiento de urgencia absoluta (Status 1) para Trasplante Hepático."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Administrar plasma fresco congelado (PFC) masivo para revertir el INR a < 1.5 y prevenir la hemorragia intracerebral inminente.",
        "distractorProfile": "cosmetic_laboratory_correction_trap",
        "incorrectFeedback": "Administrar PFC de forma rutinaria altera y \"enmascara\" artificialmente el INR, que es el parámetro pronóstico principal para seguir el deterioro hepático natural, entorpeciendo la decisión del momento exacto del trasplante, sin impactar en la necrosis celular de base."
      }
    ],
    "correctOptionId": "C",
    "explanation": "La paciente cursa con una Falla Hepática Aguda Fulminante por intoxicación tardía por Acetaminofén/Paracetamol. Las dosis masivas saturan la vía de glucuronidación y agotan el glutatión hepático, acumulando el metabolito tóxico NAPQI, el cual causa necrosis centrolobulillar fulminante. Para decidir objetivamente cuándo un hígado está destruido \"más allá del punto de no retorno\" y requiere un órgano nuevo, se utilizan los Criterios de King's College. Para la intoxicación por paracetamol, la indicación de TRASPLANTE HEPÁTICO URGENTE se cumple si la paciente tiene pH arterial < 7.30 (aislado, independiente de otros factores) O bien, la concurrencia de los 3 siguientes: INR > 6.5 + Creatinina sérica > 3.4 mg/dL + Encefalopatía Hepática grado III o IV. Esta paciente cumple con TODOS los criterios de forma simultánea. Llegados a este punto de falla multisistémica, la N-acetilcisteína sola no salvará a la paciente de la muerte y el trasplante hepático ortotópico es la única opción de supervivencia.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** En la hepatología de urgencias, la coagulación es el verdadero espejo del hígado. El hígado enfermo deja de fabricar Factor VII, disparando el INR. El error que mataría a esta paciente en tu turno es la Opción D: si le infundes plasma fresco congelado (PFC) para \"arreglarle\" el INR en el papel de laboratorio, lo único que lograrás es ocultar el verdadero marcador pronóstico que le dice a la junta de trasplantes cuán grave está el hígado, sin haber detenido la necrosis subyacente (además de causarle sobrecarga hídrica). El intento de suicidio NO es una contraindicación absoluta para un trasplante de urgencia 0 en la mayoría de los protocolos mundiales si hay evaluación psiquiátrica de soporte.",
    "keyPoints": [
      "Cuando veas:",
      "• Intoxicación severa por Acetaminofén (> 48h o masiva).",
      "• Encefalopatía + Riñón fallando (Creatinina > 3.4) + Coagulopatía brutal (INR > 6.5) o simplemente un pH < 7.30 persistente tras reanimación.",
      "Debes pensar en:",
      "Criterios de King's College positivos. Indicación absoluta para Trasplante Hepático Urgente. La NAC se continúa como soporte, pero ya no curará el hígado necrótico.",
      "Tema: Toxicología / Falla Hepática Aguda / Trasplante."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-77",
    "university": "UCC",
    "examArea": "MEDICINA INTERNA - HEMATOLOGÍA",
    "topic": "MEDICINA INTERNA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Mujer de 35 años, previamente sana, consulta por la aparición espontánea de múltiples petequias en extremidades inferiores, sangrado gingival al cepillarse y equimosis difusas en los últimos 4 días. Niega fiebre, pérdida de peso, infecciones recientes o consumo de medicamentos nuevos. Al examen físico se encuentra hemodinámicamente estable, con signos vitales normales y NO se documenta esplenomegalia, hepatomegalia ni adenopatías. Los paraclínicos iniciales reportan: Hemoglobina 13.5 g/dL, Leucocitos 7.200/mm³ con diferencial normal, y Plaquetas en 9.000/mm³ (Trombocitopenia aislada severa). Los tiempos de coagulación son rigurosamente normales. El frotis de sangre periférica confirma la presencia de macroplaquetas, pero no se observan esquizocitos, ni blastos, ni alteraciones en los leucocitos. Ante el diagnóstico de exclusión altamente probable, ¿cuál es el tratamiento de PRIMERA LÍNEA de elección en el servicio de urgencias para esta paciente?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Transfusión empírica inmediata de 6 unidades de concentrados plaquetarios (pool de plaquetas).",
        "distractorProfile": "intuitive_but_futile_transfusion",
        "incorrectFeedback": "La transfusión de plaquetas en la PTI es ineficaz debido a que los autoanticuerpos circulantes destruirán rápidamente las plaquetas donadas en cuestión de minutos/horas. Solo se reserva como terapia de salvamento extremo en hemorragias amenazantes para la vida (ej. intracraneal activa) en paralelo con terapia inmunosupresora masiva."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Terapia con Inmunoglobulina G Intravenosa (IGIV) y/o Corticosteroides sistémicos a dosis altas (ej. Dexametasona o Prednisona)."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Realización de recambio plasmático terapéutico (Plasmaféresis) urgentes por alto riesgo de afectación del SNC.",
        "distractorProfile": "ptt_treatment_applied_to_itp",
        "incorrectFeedback": "La plasmaféresis es el pilar de supervivencia de la Púrpura Trombocitopénica Trombótica (PTT), la cual cursa con esquizontes en frotis y anemia hemolítica. En la PTI pura, la plasmaféresis no tiene rol de primera línea avalado y no frena la fagocitosis esplénica de manera eficiente comparada con la IGIV."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Administrar agonistas del receptor de Trombopoyetina (Romiplostim o Eltrombopag) y programar esplenectomía urgente.",
        "distractorProfile": "second_line_refractory_treatment",
        "incorrectFeedback": "Los TPO-RAs y la esplenectomía son la segunda y tercera línea de tratamiento reservadas para pacientes que se vuelven crónicamente refractarios o dependientes de los corticosteroides después de meses de evolución, no siendo el tratamiento de inducción para la urgencia de primera línea de novo."
      }
    ],
    "correctOptionId": "B",
    "explanation": "La paciente cursa con un cuadro clásico de Púrpura Trombocitopénica Inmunológica (PTI) primaria. En la edad adulta, se caracteriza por la producción de autoanticuerpos IgG dirigidos contra las glicoproteínas de la superficie plaquetaria (como la GPIIb/IIIa). Las plaquetas cubiertas de anticuerpos son devoradas masivamente por los macrófagos del bazo. El diagnóstico es de exclusión: trombocitopenia aislada sin anemia ni leucopenia, sin esplenomegalia al examen físico (muy importante, si el bazo está grande, pensar en otra cosa) y frotis sin esquizocitos (descarta microangiopatía trombótica como PTT). Dado que las plaquetas están en nivel crítico de sangrado espontáneo (< 10,000/mm³) asociado a hemorragia mucosa, el tratamiento OBLIGATORIO para frenar la destrucción acelerada es la inmunomodulación primaria. Esto se logra saturando el receptor Fc de los macrófagos esplénicos con IGIV o apagando la respuesta inmune linfoide con Corticosteroides a altas dosis (o la combinación de ambos en casos muy severos).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Elizabeth, aquí te tienta el pánico numérico. Si ves \"9.000 plaquetas\", tu reflejo visceral te grita \"¡Transfúndela ya!\" (Opción A). Pero transfundir a un paciente con PTI es echar filetes de carne a un estanque lleno de pirañas. Los anticuerpos circulantes y los macrófagos del bazo devorarán la bolsa de plaquetas enterita en 15 minutos, la paciente seguirá con 9.000 y tú habrás gastado recursos del banco de sangre innecesariamente y creado aloanticuerpos. Solo transfundes plaquetas en PTI si la paciente está en quirófano con el cráneo abierto o sangrando a chorros de forma letal, pero bajo la cobertura simultánea de toneladas de Inmunoglobulina para \"distraer\" a los macrófagos. Y la plasmaféresis (Opción C) resérvala para la PTT (donde el paciente tendría falla renal y esquizocitos).",
    "keyPoints": [
      "Cuando veas:",
      "• Adulto o niño con plaquetas bajísimas (< 20,000).",
      "• Resto del hemograma NORMAL (Hb y Leucocitos bien).",
      "• Frotis de sangre NORMAL (sin esquizocitos) y Bazo NO palpable.",
      "Debes pensar en:",
      "Púrpura Trombocitopénica Inmune (PTI). El tratamiento inicial SIEMPRE son Esteroides (Prednisona/Dexametasona) ± IGIV si hay sangrado severo o nivel < 10k. Las plaquetas NO se transfunden de rutina.",
      "Tema: Trastornos Plaquetarios / PTI en adultos."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-78",
    "university": "UCC",
    "examArea": "MEDICINA INTERNA - NEFROLOGÍA / RADIOLOGÍA",
    "topic": "MEDICINA INTERNA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Hombre de 68 años con antecedente de Diabetes Mellitus tipo 2 e Hipertensión Arterial, ingresa al servicio de urgencias por un cuadro de dolor abdominal tipo cólico en fosa ilíaca izquierda, irradiado a genitales. Una ecografía sugiere la presencia de una imagen litiásica en el tercio distal del uréter. Para caracterizar anatómicamente el cálculo y definir si hay malformaciones asociadas, el urólogo decide solicitar una Tomografía Computarizada (TC) de abdomen y pelvis CON contraste intravenoso y fase urográfica. Revisando el historial reciente, el paciente tiene unos laboratorios de hace un mes que reportan una Creatinina sérica de 1.8 mg/dL (Tasa de Filtrado Glomerular estimada de 38 mL/min/1.73m², Enfermedad Renal Crónica estadio 3b). Ante el riesgo de inducir Nefropatía por Contraste o injuria renal aguda, ¿cuál es la medida preventiva profiláctica con MAYOR soporte en la evidencia actual que debe ejecutarse PREVIO y POSTERIOR al estudio tomográfico?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Administrar profilácticamente altas dosis de N-acetilcisteína por vía oral el día antes y el día del procedimiento.",
        "distractorProfile": "obsolete_historical_therapy_trap",
        "incorrectFeedback": "El uso de N-acetilcisteína para la prevención de nefropatía por contraste fue desacreditado rotundamente por ensayos controlados aleatorizados masivos (ej. PRESERVE Trial), demostrando que no ofrece ningún beneficio estadísticamente significativo frente a la hidratación isotónica exclusiva."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Infusión de soluciones de Bicarbonato de Sodio intravenoso combinadas con dopamina a dosis renal.",
        "distractorProfile": "abandoned_pharmacological_myths",
        "incorrectFeedback": "La \"dosis renal de dopamina\" es un mito histórico completamente abolido por su ineficacia para preservar el filtrado glomerular y sus riesgos arritmogénicos. El uso de bicarbonato demostró no ser superior a la solución salina isotónica común y es logísticamente más complejo."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Expansión de volumen intravascular agresiva pero cuidadosa con cristaloides isotónicos (Solución Salina Normal al 0.9%) intravenosos."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Instaurar un diurético osmótico (Manitol) o diurético de asa antes del contraste para asegurar el \"lavado\" del túbulo renal.",
        "distractorProfile": "detrimental_dehydration_induction",
        "incorrectFeedback": "La administración profiláctica de diuréticos es profundamente iatrogénica; provoca depleción de volumen intravascular, empeorando drásticamente la hipoperfusión isquémica medular renal inducida por el medio de contraste y aumentando las tasas de diálisis de urgencia."
      }
    ],
    "correctOptionId": "C",
    "explanation": "El paciente tiene un alto riesgo de desarrollar una Lesión Renal Aguda inducida por Contraste (Nefropatía por Contraste - CIN) debido a su TFG < 45 mL/min y a su nefropatía diabética subyacente. El medio de contraste iodado es altamente hiperosmolar y nefrotóxico directo, causando intensa vasoconstricción de la arteriola aferente e hipoxia en la médula renal, además de citotoxicidad tubular. A pesar de años de debate sobre múltiples \"pócimas mágicas\" protectoras, múltiples estudios internacionales a gran escala (incluyendo el ensayo PRESERVE) han sepultado mitos antiguos. La única intervención con el mayor nivel de evidencia científica, validada por la guía KDIGO, capaz de prevenir la nefrotoxicidad en pacientes de riesgo es la Expansión Intravascular con fluidos isotónicos (Solución Salina Normal al 0.9% o Lactato de Ringer). Hidratar la vena dilata el sistema vascular renal, disminuye la secreción de renina-angiotensina, reduce la concentración tubular del contraste tóxico y disminuye el tiempo de contacto del iodo con el túbulo.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Esta pregunta sirve para borrar dogmas que todavía rondan los pasillos de los hospitales viejos. Si te inclinas por la Opción A (N-acetilcisteína), estás recetando algo que fue moda en el 2005. Múltiples metaanálisis modernos destruyeron el beneficio de la NAC para cuidar el riñón en contraste; ya no se recomienda de rutina en las guías mundiales de nefrología. Y la Opción D (Diuréticos) es el peor crimen que puedes cometer: si le pones furosemida al paciente antes del examen, lo vas a deshidratar (baja el volumen intravascular), contrayendo las arteriolas del riñón y garantizando que el poco contraste que pase se estanque y queme por completo los túbulos renales. ¡Agua por la vena es el secreto, solución salina pura y simple!",
    "keyPoints": [
      "Cuando veas:",
      "• Paciente con Enfermedad Renal Crónica (Creatinina alta / TFG < 45-60) que necesita un examen de contraste con yodo (Angio-TC, Cateterismo, Urotac).",
      "• Pregunta de prevención y seguridad.",
      "Debes pensar en:",
      "Hidratación agresiva con Cristaloides Isotónicos (SSN 0.9%) horas antes y después del examen. Es la única profilaxis avalada.",
      "Tema: Nefrtoxicidad por Fármacos / Nefropatía por Contraste."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-79",
    "university": "UCC",
    "examArea": "PEDIATRÍA - ENDOCRINOLOGÍA / GINECOLOGÍA",
    "topic": "PEDIATRÍA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Una paciente femenina recién nacida de 10 días de vida es traída de urgencia al hospital tras presentar vómitos intensos, pérdida de peso excesiva (caída del 20% del peso de nacimiento) y palidez profunda. Durante el interrogatorio, los padres no consanguíneos mencionan que en el parto hubo mucha confusión con la asignación del sexo, debido a que \"sus genitales se veían extraños\". Al examen físico se encuentra severamente hipotensa, aletargada, con hiperpigmentación de las areolas mamarias. El examen genital revela clitoromegalia marcada con fusión labioescrotal parcial (aspecto de falo y bolsas escrotales rugosas vacías), configurando ambigüedad genital. Paraclínicos reportan: Sodio sérico de 118 mEq/L, Potasio de 7.2 mEq/L. Un cariotipo de urgencia confirma genotipo 46,XX. Ante el inminente choque por crisis de pérdida de sal, y la sospecha del defecto enzimático MÁS común, ¿cuál es el marcador bioquímico en suero que confirmará de forma definitiva este diagnóstico genético-hormonal?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Cortisol sérico extremadamente elevado asociado a niveles de aldosterona suprimidos.",
        "distractorProfile": "wrong_end_product_hormone",
        "incorrectFeedback": "La mutación inhibe precisamente la capacidad fisiológica de sintetizar cortisol. Los pacientes cursan con niveles de cortisol en el piso (junto a la aldosterona), lo que induce la elevación de ACTH e hiperplasia glandular, y por eso el paciente cae en choque vasodilatador hipovolémico."
      },
      {
        "id": "B",
        "label": "B",
        "text": "17-Hidroxiprogesterona (17-OHP) marcadamente elevada en sangre venosa o tamizaje del talón."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Testosterona libre suprimida y niveles de Dehidroepiandrosterona (DHEA) ausentes.",
        "distractorProfile": "opposite_androgen_profile",
        "incorrectFeedback": "En la deficiencia de 21-hidroxilasa, toda la cascada esteroidogénica se desvía masivamente hacia la producción de andrógenos suprarrenales; los niveles de DHEA, androstenediona y testosterona están estratosféricamente altos, causando la ambigüedad y virilización fetal femenina."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Ausencia de actividad de la enzima 5-alfa-reductasa en el perfil metabólico de orina.",
        "distractorProfile": "different_dgs_defect",
        "incorrectFeedback": "La deficiencia de 5-alfa-reductasa impide la conversión de testosterona a dihidrotestosterona (DHT), causando feminización (ambigüedad) de genitales en fetos genéticamente VARONES (46,XY), sin comprometer la vía mineralocorticoide, por lo que nunca causan choque ni pérdida de sal (sodio/potasio perfectos)."
      }
    ],
    "correctOptionId": "B",
    "explanation": "El paciente cursa con Hiperplasia Suprarrenal Congénita (HSC) de tipo clásico con crisis perdedora de sal. Su fisiopatología radica en un defecto enzimático autosómico recesivo, siendo la deficiencia de la enzima 21-hidroxilasa (21-OH) responsable de más del 90% de los casos. La enzima 21-OH es la encargada de transformar la vía hacia la síntesis de Aldosterona y Cortisol. Al estar defectuosa, la cadena de montaje se estanca, acumulando niveles inmensos del precursor inmediato (la 17-hidroxiprogesterona o 17-OHP). Estos precursores acumulados, al no poder hacerse cortisol ni aldosterona, se desvían masivamente hacia la vía de los Andrógenos (testosterona), lo que provoca la virilización o masculinización extrema de los genitales femeninos (Cariotipo 46,XX con aspecto masculino). Simultáneamente, la falta de aldosterona causa el choque letal: los riñones botan todo el sodio (hiponatremia severa) y retienen potasio (hiperkalemia letal). La medición de 17-OHP es el test patognomónico confirmatorio de oro y se incluye rutinariamente en el tamizaje neonatal en muchos países.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Elizabeth, un clásico infaltable en el board de pediatría y neonatología. Entiende la tubería rota: como no hay 21-hidroxilasa, la glándula suprarrenal no tiene frenos (la ACTH del cerebro grita \"¡No hay cortisol, sigan fabricando!\"). Así que la glándula se agranda (hiperplasia) y toda esa materia prima acumulada (17-OHP) se derrama hacia el único tubo que no está tapado: las hormonas sexuales masculinas (andrógenos). Por eso esta pobre niña nace con un clítoris tan grande que parece un pene y el pediatra inicial le dijo \"es un niño\" a la madre. Para confirmar el diagnóstico en el papel, solo tienes que rastrear dónde ocurrió la represa de agua; y la represa se llama 17-hidroxiprogesterona (Opción B).",
    "keyPoints": [
      "Cuando veas:",
      "• Recién nacido con ambigüedad genital (niña virilizada) o varón aparentemente sano.",
      "• Semana 1 a 2 de vida con CHOQUE profundo + Hiponatremia (< 130) + Hiperkalemia (> 6.0).",
      "Debes pensar en:",
      "Crisis perdedora de sal por Hiperplasia Suprarrenal Congénita (Déficit de 21-Hidroxilasa). Marcador de oro: 17-Hidroxiprogesterona (17-OHP) masivamente elevada. Tratamiento: Solución salina 0.9% e Hidrocortisona inmediata.",
      "Tema: Endocrinología Pediátrica / Hiperplasia Suprarrenal Congénita."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-80",
    "university": "UCC",
    "examArea": "MEDICINA INTERNA - CARDIOLOGÍA / NEUMOLOGÍA",
    "topic": "MEDICINA INTERNA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Un hombre de 62 años, hipertenso y diabético, con historia de disfunción eréctil crónica para la cual utiliza ocasionalmente sildenafil, es llevado a urgencias por presentar disnea progresiva de tres días de evolución, dolor pleurítico derecho y expectoración hemoptoica. Al examen físico: taquicárdico (115 lpm), hipotenso (PA 90/60 mmHg), y SatO2 de 88% con máscara de oxígeno. Una Angio-TC de tórax reporta Tromboembolismo Pulmonar (TEP) submasivo bilateral. Se decide iniciar anticoagulación puente con Heparina No Fraccionada (HNF) intravenosa en infusión continua, dado que el paciente podría requerir procedimientos si se desestabiliza. A las 24 horas del inicio de la bomba de heparina, su presión arterial cae estrepitosamente a 75/40 mmHg. Un electrocardiograma revela taquicardia sinusal sin isquemia. Un examen de sangre revela que los tiempos de TPTa se encuentran \"inmedibles por encima de 150 segundos\" a pesar de dosis estándar de heparina, confirmando una sobredosis iatrogénica masiva accidental de heparina con hemorragia interna inminente. El médico tratante se prepara para revertir farmacológicamente a la heparina intravenosa, pero se detiene al ver el antecedente del paciente. ¿Cuál es el riesgo de la administración del antídoto universal de la HNF en este caso clínico particular que exige extrema precaución?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Administrar Fitomenadiona (Vitamina K) desencadenaría anafilaxia cruzada con los nitratos orgánicos ocultos en el sistema.",
        "distractorProfile": "wrong_antidote_mechanism",
        "incorrectFeedback": "La Vitamina K (Fitomenadiona) es el antídoto específico y lento para la intoxicación por antagonistas de vitamina K (Warfarina), no teniendo ningún tipo de actividad cruzada ni capacidad de reversión sobre los efectos directos de la heparina sobre la antitrombina III."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Infundir Idarucizumab reactivará el trombo pulmonar disolviendo la red de fibrina a alta velocidad.",
        "distractorProfile": "doac_antidote_misapplied",
        "incorrectFeedback": "El Idarucizumab es un anticuerpo monoclonal diseñado de forma exclusiva para revertir los efectos del inhibidor directo de la trombina (Dabigatrán), siendo biológicamente inútil frente a la intoxicación por heparinas (HNF o HBPM)."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Usar Sulfato de Protamina en un varón diabético con posible uso previo de insulina NPH (que contiene protamina) o posterior vasectomía conlleva un altísimo riesgo de anafilaxia fulminante y choque irreversible."
      },
      {
        "id": "D",
        "label": "D",
        "text": "La administración de Complejo Protrombínico de 4 factores interactúa con el sildenafil produciendo un secuestro letal de óxido nítrico en el cerebro.",
        "distractorProfile": "generic_procoagulant_myth",
        "incorrectFeedback": "El Complejo Protrombínico (factores II, VII, IX, X) revierte anticoagulantes orales directos (Rivaroxaban, Apixaban) y Warfarina en urgencias extremas. Aunque es potente, la heparina intravenosa (HNF) se revierte rápida, segura y económicamente con Protamina (considerando precauciones). El Sildenafil no interactúa con estos derivados plasmáticos."
      }
    ],
    "correctOptionId": "C",
    "explanation": "La intoxicación o sangrado por sobre-anticoagulación con Heparina No Fraccionada (HNF) se revierte de manera inmediata, específica y altamente efectiva con la administración intravenosa lenta de su antídoto de oro: el Sulfato de Protamina. Esta es una molécula fuertemente básica que se une electrostáticamente a la heparina (fuertemente ácida), formando una sal inactiva que es eliminada. SIN EMBARGO, el sulfato de protamina proviene del esperma de salmón, y representa un riesgo brutal de hipersensibilidad (anafilaxia). Es de altísimo y documentado riesgo en dos poblaciones específicas que están pre-sensibilizadas a la proteína: 1) Hombres con vasectomía previa (cuyos espermatozoides extravasados los han auto-sensibilizado a antígenos de la protamina espermática) y 2) Pacientes diabéticos en tratamiento crónico con insulinas de acción prolongada como la Insulina NPH (Neutral Protamine Hagedorn, la cual contiene protamina en su formulación). En este paciente diabético inestable, la inyección directa del antídoto podría precipitar un choque anafiláctico inanimable superpuesto a su choque hemorrágico, por lo que su indicación exige tener lista la epinefrina de rescate al administrarla.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Un detalle majestuoso que demuestra el dominio integral de las interacciones cruzadas en medicina interna. \"NPH\" significa Neutral Protamine Hagedorn. La insulina NPH tiene protamina de pescado añadida para que su absorción sea lenta. El sistema inmune de este diabético lleva años expuesto a la protamina de su inyección diaria, por lo que tiene anticuerpos IgG preformados listos. Si tú le empujas por la vena una ampolla gigante de Sulfato de Protamina pura para revertir la heparina, su sistema inmune hará una desgranulación mastocitaria instantánea, llevándolo a un choque anafiláctico mortal. Pasa exactamente lo mismo en hombres con vasectomía, donde su propio esperma se fugó a la sangre y los sensibilizó a su propia protamina. La solución no es no darla, es darla con sumo cuidado, a goteo lentísimo y con la ampolla de adrenalina cargada en la mano. Y por favor, recuerda: la Vitamina K revierte Warfarina, y el Idarucizumab revierte Dabigatrán; no tienen utilidad aquí.",
    "keyPoints": [
      "Cuando veas:",
      "• Intoxicación o sobre-anticoagulación peligrosa por Heparina No Fraccionada (HNF).",
      "• Necesidad de usar el Antídoto: Sulfato de Protamina.",
      "• Paciente Diabético (usuario de NPH) o Vasectomizado.",
      "Debes pensar en:",
      "Alto riesgo de anafilaxia catastrófica cruzada con el Sulfato de Protamina.",
      "Tema: Urgencias Hematológicas y Toxicológicas / Reversión de Anticoagulación."
    ]
  }
];
