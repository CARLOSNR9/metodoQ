import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UMNG — Edición #1 (26 jul 2026) · Preguntas #61–#70.
 */
export const UMNG_CONV_2026_07_26_61_70_QUESTIONS: TrainingQuestion[] = [
  {
    id: "umng-conv-2026-07-26-61",
    university: "UMNG",
    examArea: "TRAUMA / CIRUGÍA GENERAL",
    topic: "CIRUGÍA GENERAL",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un hombre de 28 años es traído a urgencias tras sufrir una herida por arma blanca en el mesogastrio durante un asalto. A su ingreso, el paciente se encuentra alerta, quejándose de dolor. Signos vitales: PA 120/80 mmHg, FC 85 lpm, FR 18 rpm. Al retirar los apósitos prehospitalarios, usted observa un segmento de epiplón (omento mayor) de aproximadamente 5 cm protruyendo a través de la herida abdominal. El paciente está completamente ESTABLE hemodinámicamente y el abdomen no presenta signos de irritación peritoneal generalizada. Según las guías del ATLS (10a edición), ¿cuál es la conducta MÁS ADECUADA a seguir?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Reducir cuidadosamente el epiplón eviscerado hacia la cavidad, suturar la piel y observar por 24 horas.",
        distractorProfile: "fatal_contamination",
        incorrectFeedback: "Reintroducir tejido eviscerado en la sala de urgencias está absolutamente contraindicado. Empuja bacterias y contaminantes de la piel directamente a la cavidad peritoneal, garantizando una peritonitis letal."
      },
      {
        id: "B",
        label: "B",
        text: "Solicitar un FAST (Evaluación Ecosonográfica Focalizada para Trauma) para decidir si requiere cirugía.",
        distractorProfile: "delay_definitive_care",
        incorrectFeedback: "El FAST busca líquido libre en el paciente inestable. Un paciente eviscerado tiene indicación de cirugía inmediata; retrasarla por hacer una ecografía es innecesario y riesgoso."
      },
      {
        id: "C",
        label: "C",
        text: "Realizar Tomografía Computarizada (TC) de abdomen con triple contraste para evaluar lesión de víscera hueca.",
        distractorProfile: "unnecessary_imaging",
        incorrectFeedback: "El manejo selectivo no operatorio (que usa TAC) aplica para heridas penetrantes SIN evisceración."
      },
      {
        id: "D",
        label: "D",
        text: "Cubrir el tejido expuesto con gasas estériles húmedas y trasladar inmediatamente a quirófano para Laparotomía Exploratoria."
      }
    ],
    correctOptionId: "D",
    explanation: "Según el ATLS, en el trauma de abdomen penetrante existen 3 indicaciones absolutas para Laparotomía Exploratoria Inmediata, independientemente de si el paciente está estable: 1) Inestabilidad hemodinámica (Choque). 2) Peritonitis franca. 3) EVISCERACIÓN (protrusión de omento o asas). El peritoneo fue violado de manera amplia y la lesión de órganos internos es altísima. Se debe cubrir con compresas tibias y húmedas y llamar al cirujano.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., si la grasa del abdomen te está mirando desde afuera de la piel, ¡no hay nada que pensar! No la empujes con el dedo porque la infectas, no pidas TAC porque pierdes tiempo. Cúbrela con suero tibio para que no se seque y se isquemice, y sube al paciente a pabellón. El cirujano tiene que entrar, lavar todo, revisar los 6 metros de intestino delgado por si el cuchillo perforó un asa, y cerrar formalmente.",
    keyPoints: [
      "Cuando veas:",
      "• Trauma abdominal penetrante + Evisceración (Omento o asas protruyendo).",
      "Debes pensar en:",
      "Indicación ABSOLUTA de Laparotomía Exploratoria Inmediata, sin importar la estabilidad hemodinámica.",
      "Tema: ATLS / Trauma de Abdomen."
    ]
  },
  {
    id: "umng-conv-2026-07-26-62",
    university: "UMNG",
    examArea: "PEDIATRÍA / CIRUGÍA PEDIÁTRICA",
    topic: "PEDIATRÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un lactante varón de 4 semanas de vida es traído por su madre debido a episodios de vómito. La madre refiere que el niño toma el biberón con mucha avidez (está hambriento), pero a los pocos minutos presenta vómito en proyectil, explosivo, de contenido puramente lácteo (no bilioso). Esto viene ocurriendo en los últimos 4 días. Al examen físico, se nota pérdida de peso, leve deshidratación y se palpa una masa firme del tamaño de una aceituna en el cuadrante superior derecho. Los gases arteriales reportan: pH 7.52, HCO3 32 mEq/L, PCO2 45 mmHg. Electrolitos: Na 133 mEq/L, K 2.8 mEq/L, Cl 88 mEq/L. Teniendo en cuenta la patología de base, ¿cuál es la conducta INMEDIATA MÁS IMPORTANTE antes del tratamiento definitivo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Solicitar ecografía abdominal de urgencia y trasladar a quirófano en menos de 2 horas para Piloromiotomía de Ramstedt.",
        distractorProfile: "rushed_surgical_intervention",
        incorrectFeedback: "Meter a quirófano a un bebé con un potasio en 2.8 y un pH de 7.52 es condenarlo a una apnea postoperatoria o a sufrir una arritmia mortal inducida por la anestesia."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar reanimación hídrica agresiva y corrección de las alteraciones hidroelectrolíticas y ácido-base (Solución Salina + KCl)."
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar infusión de bloqueadores H2 o IBP intravenosos para disminuir la inflamación de la mucosa pilórica.",
        distractorProfile: "ineffective_medical_therapy",
        incorrectFeedback: "Los IBPs no curan la hipertrofia del músculo liso pilórico."
      },
      {
        id: "D",
        label: "D",
        text: "Pasar sonda nasogástrica, dejar en ayuno y administrar antibióticos profilácticos para peritonitis inminente.",
        distractorProfile: "misdiagnosis_of_surgical_abdomen",
        incorrectFeedback: "No hay riesgo de peritonitis en esta patología, es un engrosamiento muscular extrínseco. El problema inmediato es la alcalosis hipopotasémica."
      }
    ],
    correctOptionId: "B",
    explanation: "El diagnóstico es Estenosis Hipertrófica del Píloro (EHP), la cual produce un vómito de ácido estomacal puro (pérdida de Hidrógeno y Cloro), generando la clásica Alcalosis Metabólica Hipoclorémica e Hipopotasémica. La EHP es una urgencia MÉDICA, no una urgencia quirúrgica. La conducta innegociable y salvavidas inicial es reponer el volumen intravascular, el Cloro y el Potasio. La cirugía (Piloromiotomía) sólo se hace cuando la química sanguínea esté normalizada (HCO3 < 30 y Cl > 100).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., grábate esto: 'Nadie se muere de un píloro cerrado, pero se mueren por la deshidratación y por los anestesiólogos'. Si tú le llevas este bebé al anestesiólogo pediatra con Cloro en 88 y Potasio en 2.8, te va a sacar a gritos del quirófano. La alcalosis severa suprime el centro respiratorio; si lo duermen, no volverá a respirar por sí solo. Tienes todo el tiempo del mundo para hidratarlo. Pásale suerito con potasio, tómale laboratorios mañana y, cuando esté perfecto, lo operas.",
    keyPoints: [
      "Cuando veas:",
      "• Lactante con vómitos en proyectil no biliosos + Masa en oliva + Alcalosis metabólica hipoclorémica hipopotasémica.",
      "Debes pensar en:",
      "Estenosis Hipertrófica del Píloro. El 1er paso ES MÉDICO: Reanimación hídrica y electrolítica antes de la cirugía.",
      "Tema: Cirugía Pediátrica / EHP."
    ]
  },
  {
    id: "umng-conv-2026-07-26-63",
    university: "UMNG",
    examArea: "UROLOGÍA / ONCOLOGÍA",
    topic: "UROLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un hombre de 26 años acude a consulta por notar un \"bulto\" en su testículo derecho desde hace un mes. Refiere que la masa es completamente indolora, pero siente el testículo \"más pesado\". Al examen físico, se palpa una masa sólida, pétrea, dependiente del parénquima testicular derecho, que no transilumina. La ecografía escrotal revela una masa intratesticular hipoecoica vascularizada de 3 cm. Marcadores tumorales: Alfa-fetoproteína (AFP) y beta-hCG se encuentran marcadamente elevados. Ante la altísima sospecha de una neoplasia testicular de células germinales, ¿cuál es la conducta INMEDIATA de elección para establecer el diagnóstico histológico y terapéutico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Biopsia por incisión transescrotal para confirmar el diagnóstico antes de extirpar el órgano.",
        distractorProfile: "fatal_oncologic_violation_incision",
        incorrectFeedback: "Cualquier incisión a través del escroto siembra células tumorales en los ganglios inguinales."
      },
      {
        id: "B",
        label: "B",
        text: "Biopsia por aspiración con aguja fina (BACAF) percutánea de la masa testicular.",
        distractorProfile: "fatal_oncologic_violation_fnac",
        incorrectFeedback: "Hacer BACAF del testículo está PROSCRITO en oncología, por el riesgo de diseminación a lo largo del trayecto de la aguja hacia el escroto."
      },
      {
        id: "C",
        label: "C",
        text: "Orquiectomía radical a través de un abordaje inguinal (incisión en región inguinal)."
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar quimioterapia empírica sistémica con esquema BEP para reducir la masa antes de operar.",
        distractorProfile: "chemo_without_tissue_diagnosis",
        incorrectFeedback: "La quimioterapia no se inicia sin el diagnóstico histopatológico definitivo que provee la pieza quirúrgica."
      }
    ],
    correctOptionId: "C",
    explanation: "Ante la alta sospecha clínica, ecográfica y bioquímica de cáncer de testículo, la regla de oro es realizar Orquiectomía Radical Inguinal. Realizar CUALQUIER tipo de punción, aspiración (BACAF) o incisión a través de la piel del escroto está absolutamente PROSCRITO, ya que el testículo normalmente drena a los ganglios retroperitoneales, pero violar el escroto siembra células tumorales en la pared escrotal, diseminando la enfermedad a los ganglios inguinales.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nSi alguna vez le metes una aguja a un cáncer de testículo a través de la bolsa escrotal, el oncólogo te va a querer demandar. Acabas de 'ensuciar' un campo linfático limpio. El testículo baja desde el abdomen cuando somos fetos y se lleva consigo sus propios vasos linfáticos hacia arriba. Se saca cortando en la ingle, jalando el 'cable' (cordón espermático) hacia arriba como si sacaras un pez con una caña de pescar. ¡El escroto ni se toca!",
    keyPoints: [
      "Cuando veas:",
      "• Masa testicular sólida, pétrea, indolora en un varón joven.",
      "Debes pensar en:",
      "Cáncer Testicular. Diagnóstico y Terapia: Orquiectomía Radical Inguinal. ¡PROHIBIDO PUNCIONAR/BIOPSIAR EL ESCROTO!",
      "Tema: Urología Oncológica / Cáncer Testicular."
    ]
  },
  {
    id: "umng-conv-2026-07-26-64",
    university: "UMNG",
    examArea: "MEDICINA INTERNA / CARDIOLOGÍA",
    topic: "CARDIOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un hombre de 62 años, hipertenso no adherente al tratamiento, ingresa a urgencias refiriendo un dolor torácico retroesternal \"desgarrador\" de inicio súbito, irradiado hacia la región interescapular (espalda). El paciente se muestra angustiado y diaforético. Signos vitales: PA en brazo derecho 210/115 mmHg, PA en brazo izquierdo 150/90 mmHg, FC 110 lpm. A la auscultación cardiaca se ausculta un soplo diastólico nuevo en foco aórtico. Un electrocardiograma (ECG) descarta elevación del segmento ST. Mientras el equipo prepara al paciente para una Angio-TC de tórax, ¿cuál debe ser la intervención farmacológica de PRIMERA LÍNEA para el manejo agudo de esta crisis?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Infusión de Nitroprusiato de Sodio intravenoso de inmediato para bajar la presión sistólica < 120 mmHg.",
        distractorProfile: "fatal_reflex_tachycardia",
        incorrectFeedback: "Si inicias un vasodilatador puro sin bloquear el corazón primero, se produce una taquicardia refleja. El aumento de fuerza y frecuencia del latido aumenta el estrés de cizallamiento (dP/dt), desgarrando la aorta fatalmente."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar Labetalol o Esmolol intravenoso seguido de un vasodilatador si es necesario."
      },
      {
        id: "C",
        label: "C",
        text: "Administrar Clopidogrel 300 mg y Heparina de bajo peso molecular por probable Síndrome Coronario Agudo.",
        distractorProfile: "fatal_anticoagulation_in_bleeding",
        incorrectFeedback: "Dar antiagregantes/anticoagulantes a una aorta disecada causará hemorragia masiva hacia el mediastino o pericardio."
      },
      {
        id: "D",
        label: "D",
        text: "Infusión de Noradrenalina para mantener la perfusión de órganos diana ante isquemia inminente.",
        distractorProfile: "worsening_hypertension",
        incorrectFeedback: "Los vasopresores elevarían aún más la presión, rompiendo la aorta."
      }
    ],
    correctOptionId: "B",
    explanation: "El cuadro es un Síndrome Aórtico Agudo (Disección Aórtica tipo A). La regla de oro en su manejo farmacológico es BAJAR LA FRECUENCIA CARDÍACA PRIMERO y LUEGO LA PRESIÓN. El medicamento ideal es un betabloqueador puro de acción corta (Esmolol) o un alfa/beta mixto (Labetalol) IV. El objetivo es reducir la FC < 60 lpm y disminuir la fuerza de contracción del ventrículo izquierdo (disminuir el dP/dt), frenando la propagación del desgarro. Solo después del betabloqueo se añade un vasodilatador como Nitroprusiato.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nLa aorta de este paciente está pelándose por dentro como si fuera una cebolla. Cada latido a 110 por minuto actúa como un chorro de hidrolavadora empujando la pared. Si le das Nitroprusiato primero, la presión baja, pero el cerebro detecta eso y le dice al corazón: '¡Bombea más rápido!'. Ese latido fuerte reflejo termina de rasgar la aorta. Métele un freno de mano al corazón con Labetalol; cuando esté sedita a 55 latidos por minuto, relaja las arterias.",
    keyPoints: [
      "Cuando veas:",
      "• Dolor desgarrador irradiado a espalda + Asimetría de PA en brazos + Soplo de IA.",
      "Debes pensar en:",
      "Disección Aórtica. Manejo Médico 1er paso: Betabloqueadores (Esmolol/Labetalol) ANTES que vasodilatadores.",
      "Tema: Cardiología / Urgencias Cardiovasculares."
    ]
  },
  {
    id: "umng-conv-2026-07-26-65",
    university: "UMNG",
    examArea: "PEDIATRÍA / NEONATOLOGÍA",
    topic: "NEONATOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Recién nacido de término (39 semanas), obtenido por parto vaginal de urgencia sin control prenatal. Inmediatamente al nacimiento, presenta dificultad respiratoria extrema, cianosis y retracciones torácicas severas. A la inspección, usted nota un abdomen marcadamente excavado (abdomen escafoide) y asimetría torácica. A la auscultación, no hay murmullo vesicular en el hemitórax izquierdo y se escuchan ruidos hidroaéreos en esa misma área. La frecuencia cardíaca cae rápidamente a 80 lpm. ¿Qué intervención de reanimación neonatal está ABSOLUTAMENTE CONTRAINDICADA en este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Intubación orotraqueal inmediata.",
        distractorProfile: "indicated_gold_standard",
        incorrectFeedback: "La intubación temprana es el estándar de oro en estos pacientes para oxigenarlos sin meter aire al tracto gastrointestinal."
      },
      {
        id: "B",
        label: "B",
        text: "Paso de una sonda orogástrica de grueso calibre.",
        distractorProfile: "indicated_decompression",
        incorrectFeedback: "El paso rápido de una sonda orogástrica es mandatorio para descomprimir el aire que el bebé ya tragó y evitar mayor colapso pulmonar."
      },
      {
        id: "C",
        label: "C",
        text: "Ventilación a presión positiva (VPP) con bolsa-mascarilla (ambú)."
      },
      {
        id: "D",
        label: "D",
        text: "Administración de surfactante pulmonar a través de tubo endotraqueal.",
        distractorProfile: "neutral_but_not_contraindicated_first_step",
        incorrectFeedback: "Aunque la etiología primaria es hipoplasia y no déficit de surfactante en un término, no es una contraindicación letal aguda frente a la VPP."
      }
    ],
    correctOptionId: "C",
    explanation: "El neonato cursa con una Hernia Diafragmática Congénita (HDC). Dar Ventilación a Presión Positiva (VPP) con bolsa-mascarilla está ESTRICTAMENTE CONTRAINDICADO. Cuando se ventila con mascarilla, el aire infla el estómago y los intestinos (que están anormalmente dentro del tórax). Estos se expanden, comprimen el corazón y colapsan el poco tejido pulmonar sano (hipoplasia), causando paro cardiaco obstructivo rápido. Se debe INTUBAR de inmediato y pasar Sonda Orogástrica de descompresión.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., si empiezas a darle ambú a este bebé en la cuna térmica, literalmente estás inflando su intestino dentro del pecho. El corazón se queda sin espacio para latir y el pulmón derecho se aplasta. La panza hundida (escafoide) te está gritando que el contenido abdominal está donde no debe. Agarra el laringoscopio de una, mete el tubo en la tráquea para que el aire vaya SOLO al pulmón, y ponle una sonda gástrica para desinflar 'la llanta' metida en el mediastino.",
    keyPoints: [
      "Cuando veas:",
      "• Neonato con dificultad respiratoria grave + Abdomen escafoide + Ruidos intestinales en tórax.",
      "Debes pensar en:",
      "Hernia Diafragmática Congénita. Contraindicación: VPP con Bolsa-Mascarilla. Conducta: Intubar.",
      "Tema: Neonatología / Reanimación Neonatal Avanzada."
    ]
  },
  {
    id: "umng-conv-2026-07-26-66",
    university: "UMNG",
    examArea: "MEDICINA INTERNA / NEUROLOGÍA",
    topic: "NEUROLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un hombre de 65 años con antecedente de tabaquismo y fibrilación auricular es traído a urgencias por su esposa, quien refiere que hace 90 minutos notó que el paciente torció la comisura labial, dejó de mover el brazo derecho y perdió la capacidad de hablar de forma comprensible (afasia). A su ingreso, el TAC de cráneo simple es estrictamente normal (no hay hemorragia ni signos tempranos de isquemia). Signos vitales: PA 195/105 mmHg, FC 88 lpm, SatO2 96%. Su nivel de glucosa capilar es de 110 mg/dL. Teniendo en cuenta el tiempo de evolución y cumpliendo todos los criterios de inclusión, ¿cuál es el paso a seguir de manera INMEDIATA en el abordaje agudo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Reducir la presión arterial con Labetalol intravenoso a valores < 140/90 mmHg antes de cualquier terapia.",
        distractorProfile: "excessive_bp_lowering",
        incorrectFeedback: "Bajar drásticamente la PA a <140/90 mmHg reducirá la presión de perfusión en la penumbra isquémica, expandiendo el infarto."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar Alteplasa (rt-PA) intravenosa para trombólisis farmacológica del infarto isquémico agudo."
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar ASA 300 mg y Clopidogrel 300 mg, y observar durante 24 hours.",
        distractorProfile: "passive_management_in_window",
        incorrectFeedback: "Dar antiagregantes y observar es negarle la oportunidad de curación a un paciente candidato ideal a trombolisis."
      },
      {
        id: "D",
        label: "D",
        text: "Programar únicamente para Trombectomía mecánica urgente, ya que la terapia endovenosa está contraindicada por la hipertensión.",
        distractorProfile: "false_contraindication",
        incorrectFeedback: "La trombectomía mecánica no reemplaza la trombolisis IV. Además, la PA de 195 no es contraindicación absoluta, se puede bajar levemente en urgencias."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta un ACV Isquémico Agudo dentro de la ventana terapéutica (90 min, límite 4.5 h) y TAC negativo para hemorragia. El tratamiento mandatorio es la Trombólisis con Alteplasa (rt-PA) intravenosa. El límite de Presión Arterial para aplicar Alteplasa es < 185/110 mmHg. Al tener 195/105, solo requiere una titulación leve con Labetalol o Nicardipina para cruzar el umbral y trombolizar INMEDIATAMENTE. (No se debe bajar la PA agresivamente).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., 'Tiempo es cerebro'. Este señor lleva 1 hora y media, tiene medio cerebro asfixiándose, pero salvable (penumbra). La presión alta que trae es su cuerpo intentando meter sangre por la arteria tapada. Bájasela suavecito un par de puntos hasta llegar justo debajo de 185, pásale el 'destapacañerías' (Alteplasa) y mira cómo vuelve a hablar en un par de horas.",
    keyPoints: [
      "Cuando veas:",
      "• ACV Isquémico agudo, ventana < 4.5 hrs, TAC normal.",
      "Debes pensar en:",
      "Trombólisis IV (Alteplasa). Si la PA está ligeramente por encima del límite (185/110), titular PA suavemente a meta y aplicar el trombolítico.",
      "Tema: Neurología / ACV Isquémico."
    ]
  },
  {
    id: "umng-conv-2026-07-26-67",
    university: "UMNG",
    examArea: "TOXICOLOGÍA / PSIQUIATRÍA",
    topic: "TOXICOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Mujer de 32 años es traída a urgencias tras haber sido encontrada ingiriendo aproximadamente tres frascos de sus pastillas antidepresivas (Amitriptilina) en un intento suicida. Al examen físico: paciente profundamente comatosa, Glasgow 3. Presenta mucosas muy secas, midriasis paralítica y piel caliente y rubicunda. Signos vitales: PA 80/50 mmHg, FC 135 lpm. Se solicita un ECG de inmediato, el cual evidencia taquicardia sinusal, y el complejo QRS se encuentra francamente ensanchado, midiendo 160 milisegundos. ¿Cuál es el tratamiento específico salvavidas para evitar la inminente fibrilación ventricular por toxicidad cardíaca?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Flumazenil intravenoso.",
        distractorProfile: "fatal_seizure_induction",
        incorrectFeedback: "El Flumazenil precipitará un estatus epiléptico intratable en intoxicaciones por tricíclicos."
      },
      {
        id: "B",
        label: "B",
        text: "Sulfato de Magnesio intravenoso para el manejo de las arritmias.",
        distractorProfile: "wrong_arrhythmia_treatment",
        incorrectFeedback: "Indicado para Torsades de Pointes (QT prolongado), pero no es primario para el ensanchamiento del QRS por bloqueo de canales de sodio."
      },
      {
        id: "C",
        label: "C",
        text: "Fisostigmina intravenosa para revertir el síndrome anticolinérgico severo.",
        distractorProfile: "fatal_asystole_induction",
        incorrectFeedback: "La Fisostigmina está ESTRICTAMENTE CONTRAINDICADA en la intoxicación por Tricíclicos (causa asístole/paro)."
      },
      {
        id: "D",
        label: "D",
        text: "Bicarbonato de Sodio intravenoso en bolos rápidos."
      }
    ],
    correctOptionId: "D",
    explanation: "La paciente cursa con una Intoxicación Grave por Antidepresivos Tricíclicos (Amitriptilina), que presentan síndrome anticolinérgico (seca, roja, midriática) y Cardiotoxicidad. Bloquean los canales rápidos de sodio miocárdicos, ensanchando el QRS. Un QRS > 160 ms predice arritmias ventriculares letales inminentes. El antídoto salvavidas es el Bicarbonato de Sodio IV. Sobrecarga el torrente con Sodio (empujando al fármaco fuera del canal por competencia) y alcaliniza la sangre.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., los tricíclicos son veneno puro para el corazón. Tapan la puerta de entrada del sodio a la célula del miocardio. El corazón se vuelve lento para conducir (QRS ancho) y termina en taquicardia ventricular. El Bicarbonato de Sodio funciona a la fuerza bruta: lanza millones de iones de sodio contra el corazón, pateando a la Amitriptilina del canal y destapando la puerta. El QRS se angosta en segundos en el monitor.",
    keyPoints: [
      "Cuando veas:",
      "• Intoxicación por Amitriptilina (Tricíclicos) + ECG con QRS Ancho (>100ms).",
      "Debes pensar en:",
      "Antídoto: Bicarbonato de Sodio IV en bolos. (CONTRAINDICADA la Fisostigmina).",
      "Tema: Toxicología / Antidepresivos Tricíclicos."
    ]
  },
  {
    id: "umng-conv-2026-07-26-68",
    university: "UMNG",
    examArea: "TOXICOLOGÍA",
    topic: "TOXICOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Una joven de 19 años es traída a urgencias por su padre a las 11:00 AM tras ingerir 30 tabletas de 500 mg de Acetaminofén (Paracetamol), equivalente a 15 gramos. Ella ingirió las pastillas a las 8:00 AM (hace 3 horas). Actualmente se encuentra asintomática, lúcida y con signos vitales normales. Usted no cuenta con disponibilidad del nivel sérico de paracetamol en su hospital primario por las próximas 24 horas. ¿Cuál es el paso terapéutico correcto para evitar la falla hepática fulminante?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar Carbón Activado por sonda nasogástrica exclusivamente y vigilar pruebas de función hepática.",
        distractorProfile: "insufficient_therapy_alone",
        incorrectFeedback: "A las 3 horas, el carbón no basta. El tóxico ya está en el hígado produciendo NAPQI."
      },
      {
        id: "B",
        label: "B",
        text: "Esperar 1 hora más para que se cumplan las 4 horas desde la ingesta e iniciar la N-acetilcisteína si hay síntomas.",
        distractorProfile: "dangerous_delay_for_symptoms",
        incorrectFeedback: "El daño inicial del acetaminofén es ASINTOMÁTICO. Esperar síntomas de falla hepática es esperar a que sea irreversible."
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar el protocolo de antídoto con N-Acetilcisteína (NAC) de inmediato, sin esperar niveles ni síntomas."
      },
      {
        id: "D",
        label: "D",
        text: "Remitir urgentemente para diálisis extracorpórea, ya que la dosis letal supera los 10 gramos.",
        distractorProfile: "wrong_clearance_modality",
        incorrectFeedback: "El paracetamol no se maneja con diálisis. Su antídoto metabólico (NAC) es extremadamente efectivo."
      }
    ],
    correctOptionId: "C",
    explanation: "La dosis tóxica del paracetamol aguda es >7.5 gramos. La paciente consumió 15 g. La ventana dorada para el antídoto (N-Acetilcisteína) es dentro de las primeras 8 horas post-ingesta (previene la necrosis 100%). Ante una ingesta comprobada masiva en un centro sin recursos para medir niveles (nomograma de Rumack-Matthew inútil por logística), la indicación internacional es iniciar el antídoto empírico INMEDIATAMENTE.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el Acetaminofén mata más hígados que el vodka. El metabolito NAPQI es como ácido para los hepatocitos. La chica se ve bien ahorita, pero si la dejas ir a casa, volverá en tres días amarilla como un taxi y necesitará un trasplante urgente. La N-Acetilcisteína repone el glutatión. Ponle su esquema y le salvarás el órgano.",
    keyPoints: [
      "Cuando veas:",
      "• Sobredosis letal de Acetaminofén (>7.5g) con presentación temprana (< 8h) sin laboratorio rápido.",
      "Debes pensar en:",
      "Iniciar N-Acetilcisteína (NAC) empírica INMEDIATA. No esperar a que haya síntomas.",
      "Tema: Toxicología / Falla Hepática."
    ]
  },
  {
    id: "umng-conv-2026-07-26-69",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Gestante de 32 semanas ingresa a urgencias por presentar salida de líquido claro por vagina desde hace 48 horas. A su ingreso: PA 110/70 mmHg, Temperatura de 38.9°C, FC materna 118 lpm, FC Fetal sostenida en 175 lpm (taquicardia fetal). Al examen físico se observa salida de líquido amniótico por orificio cervical con un olor fétido característico, y dolor a la palpación uterina. Laboratorios: Leucocitosis 19.000. Usted diagnostica Corioamnionitis Clínica (Infección intraamniótica). Teniendo en cuenta la edad gestacional (32 semanas, pretérmino), ¿cuál es el manejo DEFINITIVO correcto para esta paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Terapia antibiótica intravenosa, tocolíticos para frenar contracciones y corticoides para maduración pulmonar.",
        distractorProfile: "fatal_tocolysis_in_infection",
        incorrectFeedback: "Retener un feto dentro de un útero infectado con tocolíticos causará sepsis materna y fetal fulminante. Prohibidos en corioamnionitis."
      },
      {
        id: "B",
        label: "B",
        text: "Inducción inmediata del trabajo de parto por vía vaginal asociada a antibióticos de amplio espectro."
      },
      {
        id: "C",
        label: "C",
        text: "Cesárea de emergencia inmediata bajo anestesia general por indicación de infección intrauterina, para evitar sepsis neonatal.",
        distractorProfile: "unnecessary_c_section_spillage",
        incorrectFeedback: "La Corioamnionitis NO ES INDICACIÓN DE CESÁREA de entrada. Cortar el útero infectado derrama el pus a la cavidad abdominal provocando peritonitis materna severa."
      },
      {
        id: "D",
        label: "D",
        text: "Lavado amnioinfusional urgente con solución salina estéril más antibióticos intraamnióticos.",
        distractorProfile: "ineffective_local_therapy",
        incorrectFeedback: "La amnioinfusión se usa para oligohidramnios o compresiones de cordón (desaceleraciones variables), no cura una infección tisular placentaria."
      }
    ],
    correctOptionId: "B",
    explanation: "El cuadro clínico corresponde a Corioamnionitis Clínica (Criterios de Gibbs: Fiebre, taquicardia fetal/materna, líquido fétido, útero doloroso, leucocitosis). La cura definitiva de la Corioamnionitis es siempre EVACUAR EL ÚTERO, independientemente de la edad gestacional. La vía de parto de elección es la VAGINAL (con inducción), asociada a antibióticos intravenosos. La cesárea profiláctica aumenta masivamente el riesgo de peritonitis y sepsis puerperal.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoctor, si un apéndice tiene pus, lo sacas. Si un útero tiene pus, sacas al bebé. Mantener a ese feto prematuro ahí adentro es cocinarlo en caldo de cultivo. Y ten cuidado: los residentes quieren meter a la paciente al quirófano a hacer cesárea. ¡Error! Cortar un útero purulento contamina toda la barriga de la mamá. Ponle oxitocina, antibióticos a chorro, y que nazca por el canal vaginal.",
    keyPoints: [
      "Cuando veas:",
      "• RPM + Fiebre + Taquicardia Fetal + Líquido fétido/Útero doloroso.",
      "Debes pensar en:",
      "Corioamnionitis Clínica. Manejo: Antibióticos IV y Evacuación Uterina Inmediata (Inducción Vía Vaginal preferida).",
      "Tema: Obstetricia / Infecciones Perinatales."
    ]
  },
  {
    id: "umng-conv-2026-07-26-70",
    university: "UMNG",
    examArea: "TOXICOLOGÍA / INFECTOLOGÍA",
    topic: "TOXICOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un trabajador agrícola de 45 años es llevado a urgencias por sus familiares, quienes lo encontraron en el campo con una lesión necrótica en el muslo derecho. Él cuenta que hace 5 días sintió que un insecto lo picó de forma imperceptible (\"no dolió en el momento\"), pero a las pocas horas la zona se puso roja, luego azul-grisácea y ahora tiene un centro completamente negro, hundido y necrosado, con un borde eritematoso (Placa Livedoide). Hoy el paciente se torna severamente ictérico, y refiere estar orinando de color \"vino tinto oscuro\" (hemoglobinuria). Los laboratorios muestran Hematocrito del 22%, Reticulocitos elevados y Creatinina de 2.8 mg/dL. ¿Cuál es el diagnóstico clínico y el artrópodo responsable de esta catástrofe tóxico-hemolítica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Accidente ofídico por Micrurus mipartitus (Coral) / Mordedura neurotóxica.",
        distractorProfile: "wrong_toxin_type_snake",
        incorrectFeedback: "El veneno de la Coral es puramente neurotóxico (parálisis flácida, ptosis). No produce necrosis ni hemólisis masiva."
      },
      {
        id: "B",
        label: "B",
        text: "Picadura por Loxosceles laeta (Araña parda / violinista) / Loxoscelismo Viscerocutáneo."
      },
      {
        id: "C",
        label: "C",
        text: "Picadura por Latrodectus mactans (Viuda negra) / Latrodectismo sistémico.",
        distractorProfile: "wrong_spider_toxin",
        incorrectFeedback: "La Viuda Negra produce un síndrome neurotóxico (Latrodectismo) con espasmos musculares dolorosos (abdomen en tabla), NO produce necrosis local ni hemólisis."
      },
      {
        id: "D",
        label: "D",
        text: "Infección cutánea por Bacillus anthracis (Ántrax) / Carbunco hemolítico.",
        distractorProfile: "infectious_eschar_mimic",
        incorrectFeedback: "El ántrax cutáneo produce una escara negra indolora, pero con gran edema y adenopatías, y no se caracteriza por crisis hemolíticas intravasculares severas."
      }
    ],
    correctOptionId: "B",
    explanation: "El cuadro es un clásico Loxoscelismo Viscerocutáneo. La araña Loxosceles (del rincón o violinista) posee un veneno rico en esfingomielinasa-D. Inicialmente indolora, genera una lesión necrótica isquémica (Placa Livedoide o Signo de la Bandera Francesa). En el 10-15% de casos, el veneno produce Hemólisis Intravascular masiva sistémica, evidenciada por ictericia, anemia aguda, orina oscura (hemoglobinuria) y posterior falla renal aguda secundaria al daño tubular por hemoglobina.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., esta arañita es tímida, te pica al ponerte un zapato o una chaqueta guardada. Como no duele, el paciente ni se entera. A los 3 días llega con un hueco negro en la piel. Pero cuando el veneno cruza a la sangre, disuelve los eritrocitos como si fueran globos de agua. El paciente empieza a orinar \"Coca-cola\" (hemoglobina libre). A estos pacientes hay que inundarlos de líquido intravenoso para que esa hemoglobina no se solidifique en los túbulos del riñón.",
    keyPoints: [
      "Cuando veas:",
      "• Picadura indolora que evoluciona a Placa Necrótica Negra (Livedoide).",
      "• Complicada con Ictericia + Anemia + Orina Oscura (Hemólisis intravascular).",
      "Debes pensar en:",
      "Loxoscelismo Viscerocutáneo (Araña Loxosceles).",
      "Tema: Toxicología / Accidentes por Animales Ponzoñosos."
    ]
  }
];
