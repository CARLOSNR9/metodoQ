import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UMNG — Edición #2 (Simulacro 2) · Preguntas #51–#60.
 */
export const UMNG_CONV_ED2_51_60_QUESTIONS: TrainingQuestion[] = [
  {
    id: "umng-conv-ed2-51",
    university: "UMNG",
    examArea: "TRAUMA",
    topic: "CIRUGÍA GENERAL",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un joven de 24 años ingresa a urgencias tras recibir una herida por arma blanca en el 6° espacio intercostal izquierdo, línea axilar anterior. A su ingreso, el paciente se encuentra hemodinámicamente ESTABLE (PA 120/80 mmHg, FC 85 lpm), sin dificultad respiratoria. A la auscultación, el murmullo vesicular es normal y simétrico. La radiografía de tórax es normal, sin hemoneumotórax. El FAST (Evaluación Ecosonográfica Focalizada) es negativo para líquido libre. Se le realiza exploración local de la herida en urgencias, comprobando que el arma penetró la aponeurosis muscular. Teniendo en cuenta la anatomía topográfica del \"área toracoabdominal\", ¿cuál es la conducta MÁS INDICADA en este paciente estable para evitar una complicación tardía letal?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Dar de alta con analgésicos y cita a control por consulta externa en 7 días, ya que el paciente y la radiografía están estables.",
        distractorProfile: "false_security_discharge",
        incorrectFeedback: "Si das de alta a este paciente sin mirar el diafragma, puede desarrollar una hernia diafragmática tardía complicada con estrangulación intestinal."
      },
      {
        id: "B",
        label: "B",
        text: "Realizar una Laparoscopia diagnóstica de urgencia."
      },
      {
        id: "C",
        label: "C",
        text: "Realizar Toracotomía de reanimación inmediata por riesgo de lesión cardíaca oculta.",
        distractorProfile: "over_resuscitation",
        incorrectFeedback: "La toracotomía de reanimación es exclusiva para pacientes in extremis (paro presenciado), no para alguien estable hemodinámicamente."
      },
      {
        id: "D",
        label: "D",
        text: "Instalar un tubo de tórax profiláctico y observar en piso.",
        distractorProfile: "prophylactic_chest_tube",
        incorrectFeedback: "Poner un tubo de tórax profiláctico a un pulmón sano no repara el diafragma roto y expone al paciente a infecciones."
      }
    ],
    correctOptionId: "B",
    explanation: "El \"Área Toracoabdominal\" comprende entre el 4° espacio intercostal anterior y el reborde costal inferior. Una herida penetrante aquí obliga a descartar lesión diafragmática. En un paciente ESTABLE, el estándar de oro para descartar/reparar la lesión del diafragma izquierdo es la Laparoscopia Diagnóstica, ya que el FAST y la radiografía tienen baja sensibilidad para pequeños orificios diafragmáticos.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., un hueco de 1 cm en el diafragma izquierdo es una bomba de tiempo. El hígado tapa el lado derecho, pero el izquierdo está libre. El tórax succiona y el abdomen empuja. Ese tajo se agrandará y aspirará estómago e intestinos. Mete un laparoscopio por el ombligo, mira el techo del abdomen y si ves un hueco, dale puntos; salvaste a un hombre de morir estrangulado por sus propias vísceras en un mes.",
    keyPoints: [
      "Herida penetrante en Área Toracoabdominal + Paciente ESTABLE = Laparoscopia diagnóstica.",
      "Objetivo: Descartar o reparar Lesión Diafragmática Izquierda.",
      "Ni el FAST ni la Rx de tórax descartan una lesión diafragmática pequeña."
    ]
  },
  {
    id: "umng-conv-ed2-52",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "INFECTOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Una gestante de 20 semanas asiste a su primer control prenatal. Los laboratorios de rutina reportan una prueba treponémica VDRL reactiva con títulos altos (1:32) y una prueba FTA-ABS positiva confirmatoria. Usted diagnostica Sífilis Gestacional. Al indagar sobre sus antecedentes, la paciente refiere enfáticamente ser severamente alérgica a la Penicilina, relatando que hace 5 años sufrió un choque anafiláctico documentado (broncoespasmo e hipotensión) tras una inyección de Penicilina Benzatínica. Teniendo en cuenta el alto riesgo de Sífilis Congénita para el feto, ¿cuál es el manejo OBLIGATORIO en esta gestante?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Tratar con Eritromicina vía oral durante 14 días.",
        distractorProfile: "macrolide_failure",
        incorrectFeedback: "La eritromicina cura a la madre pero NO cruza la barrera placentaria en niveles bactericidas, el feto continuará infectado."
      },
      {
        id: "B",
        label: "B",
        text: "Tratar con Ceftriaxona intramuscular (Cefalosporina de tercera generación) ya que el riesgo de reacción cruzada es bajo.",
        distractorProfile: "cephalosporin_cross_reactivity",
        incorrectFeedback: "En pacientes con anafilaxia confirmada a penicilina, el riesgo de choque cruzado con ceftriaxona sigue siendo inaceptable en un centro primario."
      },
      {
        id: "C",
        label: "C",
        text: "Ingresar a la paciente a UCI, realizar Desensibilización con Penicilina y luego administrar Penicilina G Benzatínica."
      },
      {
        id: "D",
        label: "D",
        text: "Tratar con Doxiciclina vía oral por 14 días, suspendiendo solo en el último trimestre.",
        distractorProfile: "teratogenic_antibiotic",
        incorrectFeedback: "La Doxiciclina es teratogénica (Categoría D), altera el esmalte dental y los huesos del feto. Está proscrita en el embarazo."
      }
    ],
    correctOptionId: "C",
    explanation: "El único medicamento que cura la sífilis materna y cruza la placenta para curar al feto es la Penicilina G. Por directriz mundial, una gestante con sífilis y alergia grave a la penicilina DEBE SER DESENSIBILIZADA en UCI (dosis microscópicas crecientes para agotar mastocitos) y luego recibir la Penicilina G Benzatínica intramuscular.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., este es el único escenario donde darás a un paciente el veneno que casi lo mata. Si le das Eritromicina, la madre se cura, pero el Treponema en la placenta se ríe. El bebé nacerá con huesos cariados y dientes mellados. Mete a la paciente a UCI, prepara adrenalina y dale gotitas de penicilina diluida hasta que el cuerpo se rinda. Es agresivo, pero es por la vida del niño.",
    keyPoints: [
      "Gestante con Sífilis + Alergia severa a la Penicilina = DESENSIBILIZACIÓN a Penicilina.",
      "NUNCA dar Eritromicina (No cura al feto).",
      "NUNCA dar Doxiciclina (Es teratogénica)."
    ]
  },
  {
    id: "umng-conv-ed2-53",
    university: "UMNG",
    examArea: "MEDICINA INTERNA",
    topic: "NEFROLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un hombre de 68 años con hipertensión, dislipidemia e hipertrofia prostática benigna, fue sometido hace una semana a un cateterismo cardíaco (angioplastia con stent) por un infarto agudo de miocardio. Ingresa hoy a consulta quejándose de lesiones extrañas en la piel y dolor en las piernas. Al examen físico, usted observa una decoloración violácea en patrón de red (livedo reticularis) en ambas extremidades inferiores y los dedos de los pies presentan un color azulado y están fríos (síndrome del dedo azul), a pesar de que los pulsos pedio y tibial posterior están presentes y fuertes. Los laboratorios de control muestran una creatinina de 3.5 mg/dL (basal de 1.0 mg/dL hace 7 días) y un hemograma con eosinofilia marcada. ¿Cuál es el diagnóstico más probable de esta falla renal aguda aguda y cutánea?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Nefropatía inducida por medio de contraste.",
        distractorProfile: "contrast_nephropathy",
        incorrectFeedback: "La nefropatía por contraste ocurre en 24-48h, y no causa livedo reticularis, dedo azul ni eosinofilia."
      },
      {
        id: "B",
        label: "B",
        text: "Enfermedad Ateroembólica (Embolismo de cristales de colesterol)."
      },
      {
        id: "C",
        label: "C",
        text: "Falla renal obstructiva por retención urinaria aguda posquirúrgica.",
        distractorProfile: "obstructive_uropathy",
        incorrectFeedback: "La obstrucción prostática da falla postrenal, pero no causa lesiones violáceas purpúricas en las piernas ni eosinofilia."
      },
      {
        id: "D",
        label: "D",
        text: "Trombosis arterial aguda por catéter femoral.",
        distractorProfile: "arterial_thrombosis",
        incorrectFeedback: "La trombosis causaría una pierna fría y blanca SIN pulsos. Aquí los pulsos están presentes, la obstrucción es microvascular."
      }
    ],
    correctOptionId: "B",
    explanation: "El paso del catéter por la aorta desprende cristales de colesterol de placas ateroescleróticas. Estos cristales viajan y tapan arteriolas distales (livedo reticularis, \"dedo azul\") y renales (falla renal progresiva). Como el colesterol es un cuerpo extraño, induce inflamación y eosinofilia. El inicio suele ser subagudo (días a semanas post-cateterismo).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., meter un catéter por una aorta vieja es como pasar un cepillo de alambre por tubería oxidada. La costra de colesterol sale volando a piernas y riñones. Las arterias grandes tienen pulso, pero los deditos se tapan con diamantes de grasa dura. El pie se pone morado, se ve la red venosa y el riñón se atrofia. No hay destapacañerías, solo soporte.",
    keyPoints: [
      "Falla Renal a los 7-14 días post-cateterismo + Livedo Reticularis + Dedo Azul + Eosinofilia = Embolismo por Cristales de Colesterol.",
      "A diferencia de la nefropatía por contraste, que ocurre en 24-48 horas y no tiene signos cutáneos."
    ]
  },
  {
    id: "umng-conv-ed2-54",
    university: "UMNG",
    examArea: "PEDIATRÍA",
    topic: "CARDIOLOGÍA - REUMATOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Una mujer de 30 años con antecedente de Lupus Eritematoso Sistémico (LES) activo asiste a su ecografía de control fetal a las 24 semanas de gestación. El ginecólogo detecta un ritmo cardíaco fetal sostenido de 55 latidos por minuto y signos de hidropesía fetal incipiente. No se observan malformaciones estructurales en la anatomía del corazón del feto. Se sospecha un Bloqueo Auriculoventricular (AV) Completo Congénito. ¿Cuál es la prueba diagnóstica serológica en la sangre MATERNA que confirma el mecanismo fisiopatológico de esta condición letal en el feto?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Anticuerpos Anticardiolipina y Anticoagulante Lúpico positivos.",
        distractorProfile: "antiphospholipid_syndrome",
        incorrectFeedback: "Estos son del SAF, que causa trombosis placentaria y abortos o preeclampsia, pero no ataca el sistema eléctrico del corazón fetal."
      },
      {
        id: "B",
        label: "B",
        text: "Anticuerpos anti-Ro (SSA) y anti-La (SSB) positivos."
      },
      {
        id: "C",
        label: "C",
        text: "Anticuerpos anti-DNA de doble cadena positivos a títulos muy altos.",
        distractorProfile: "lupus_nephritis_marker",
        incorrectFeedback: "Los anti-DNA ds son específicos para el Lupus materno (nefritis), pero no cruzan la placenta para causar bloqueo cardíaco."
      },
      {
        id: "D",
        label: "D",
        text: "Anticuerpos Anti-Smith (Sm) y Anti-RNP positivos.",
        distractorProfile: "specific_lupus_marker",
        incorrectFeedback: "Los Anti-Sm son específicos para LES, pero no tienen asociación patogénica con la destrucción del tejido de conducción fetal."
      }
    ],
    correctOptionId: "B",
    explanation: "El Lupus Neonatal se produce cuando anticuerpos IgG maternos, específicamente los anti-Ro (SSA) y anti-La (SSB), cruzan la placenta. Tienen un tropismo exclusivo por el sistema de conducción cardiaca del feto. Inflaman y fibrosan el Nodo AV (semanas 16-24), causando Bloqueo AV de tercer grado (bradicardia extrema e hidrops fetal).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la mamá puede estar asintomática, pero los Anti-Ro son asesinos que cruzan la placenta y bombardean el 'cableado eléctrico' del corazón de su hijo. Reemplazan el nervio del Nodo AV por tejido cicatricial inútil. El corazón cae a 50 lpm, se encharca (hidrops) y el feto fallece. A toda mujer embarazada con LES/Sjögren hay que medirle Ro/La y hacer ecocardiograma fetal cada semana entre la 16 y 26.",
    keyPoints: [
      "Madre con Lupus/Sjögren + Feto con Bradicardia (Bloqueo AV completo) = Lupus Neonatal.",
      "Anticuerpos causales: Anti-Ro (SSA) y Anti-La (SSB) que cruzan la placenta y fibrosan el nodo AV."
    ]
  },
  {
    id: "umng-conv-ed2-55",
    university: "UMNG",
    examArea: "INFECTOLOGÍA",
    topic: "NEUROLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un joven de 25 años, de oficio agricultor, procedente de una zona endémica rural, acude al puesto de salud tras presentar un episodio de crisis convulsiva tónico-clónica generalizada de novo. Él es previamente sano y niega consumo de sustancias. En urgencias se realiza una Tomografía Computarizada (TAC) de cráneo simple y contrastada que reporta \"múltiples lesiones quísticas dispersas en el parénquima cerebral; la mayoría de los quistes miden 1 cm y presentan en su interior una pequeña imagen nodular hiperdensa excéntrica (Signo del punto excéntrico). Además, se observan dos lesiones nodulares finamente calcificadas\". El paciente se encuentra estable y neurológicamente íntegro en este momento. Teniendo en cuenta el diagnóstico imagenológico inequívoco, ¿cuál es el esquema terapéutico médico de primera línea que debe instaurarse?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Anfotericina B Liposomal y derivación ventrículo-peritoneal urgente.",
        distractorProfile: "fungal_treatment",
        incorrectFeedback: "La Anfotericina B es para infecciones fúngicas profundas (ej. Criptococo), no tiene efecto en cestodos."
      },
      {
        id: "B",
        label: "B",
        text: "Antibioticoterapia empírica prolongada con Ceftriaxona y Metronidazol por ser abscesos incipientes.",
        distractorProfile: "brain_abscess_treatment",
        incorrectFeedback: "Los abscesos bacterianos dan clínica tóxica y realce en anillo, no el signo del 'punto excéntrico' que es patognomónico de parásito vivo."
      },
      {
        id: "C",
        label: "C",
        text: "Albendazol asociado a Dexametasona sistémica, junto con fármacos antiepilépticos."
      },
      {
        id: "D",
        label: "D",
        text: "Tratamiento exclusivamente con antiepilépticos (Fenitoína) y observación, ya que las drogas parasiticidas están contraindicadas si hay quistes calcificados.",
        distractorProfile: "partial_treatment",
        incorrectFeedback: "Si SÓLO hubieran quistes calcificados, no se da antiparasitario. Pero la viñeta describe quistes viables (con escólex/punto excéntrico) que exigen tratamiento con Albendazol."
      }
    ],
    correctOptionId: "C",
    explanation: "El \"signo del punto excéntrico\" en un quiste corresponde al escólex de la larva de *Taenia solium*, indicando Neurocisticercosis con quistes viables. El esquema absoluto requiere 1) Albendazol, 2) Dexametasona (para prevenir el edema masivo cerebral cuando el parásito muere), y 3) Antiepilépticos para las crisis. \n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., este agricultor tiene la cabeza llena de bolsitas de agua donde flotan cabezas de lombrices. Si das la pastilla de Albendazol sola, el veneno mata al parásito, la bolsita se pudre y el cerebro se inflama brutalmente. Si no pones Dexametasona para apagar el fuego, el edema causado por los gusanos muertos lo meterá en un estatus epiléptico letal. Nunca des Albendazol sin corticoides.",
    keyPoints: [
      "Convulsiones + TAC con quistes con \"punto excéntrico\" = Neurocisticercosis.",
      "Quistes viables exigen tratamiento antiparasitario (Albendazol).",
      "Siempre asociar Dexametasona para prevenir el edema cerebral secundario a la muerte del parásito."
    ]
  },
  {
    id: "umng-conv-ed2-56",
    university: "UMNG",
    examArea: "TOXICOLOGÍA",
    topic: "MEDICINA INTERNA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un paciente en situación de calle es traído en estado de embriaguez profunda, confuso y letárgico tras haber sido encontrado bebiendo un líquido viscoso verdoso de una botella en un taller mecánico (Anticongelante). En la evaluación inicial en urgencias: el paciente respira de forma rápida y profunda. Los gases arteriales muestran una acidosis metabólica severa (pH 7.15) con Anión Gap marcadamente elevado (35 mEq/L) y un Gap Osmolar también elevado. Unas horas más tarde, el paciente desarrolla retención de azoados progresiva, indicando Falla Renal Aguda oligúrica. Al examinar el sedimento urinario microscópico de urgencia, usted evidencia la abundante presencia de cristales translúcidos que tienen forma de \"sobre de carta\" o pirámides bifacetadas. ¿Cuál es el compuesto tóxico exacto que causó esta intoxicación y cuál es su antídoto?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Intoxicación por Etanol masiva / Hemodiálisis y Tiamina.",
        distractorProfile: "ethanol_poisoning",
        incorrectFeedback: "El etanol puro no causa este anión gap masivo inicial ni tapona el riñón con cristales."
      },
      {
        id: "B",
        label: "B",
        text: "Intoxicación por Isopropanol / Lavado gástrico y Benzodiacepinas.",
        distractorProfile: "isopropanol_poisoning",
        incorrectFeedback: "El isopropanol da cetosis SIN acidosis severa, y no daña el riñón con cristales."
      },
      {
        id: "C",
        label: "C",
        text: "Intoxicación por Etilenglicol / Fomepizol o Etanol intravenoso."
      },
      {
        id: "D",
        label: "D",
        text: "Intoxicación por Metanol / Fomepizol o Etanol intravenoso.",
        distractorProfile: "methanol_poisoning",
        incorrectFeedback: "El metanol da acidosis con anión gap alto, pero ataca la retina (ceguera) y no produce cristales de oxalato ni tapona el riñón."
      }
    ],
    correctOptionId: "C",
    explanation: "El Etilenglicol (anticongelante) es metabolizado por la Alcohol Deshidrogenasa (ADH) a ácido oxálico. Este ácido se une al calcio formando cristales de Oxalato de Calcio (\"sobre de carta\" al microscopio) que taponan los túbulos renales causando Falla Renal Aguda. El antídoto (Fomepizol o Etanol) inhibe competitivamente a la ADH.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el etilenglicol es dulce. En el hígado se convierte en miles de agujas de cristal de calcio que destrozan los filtros del riñón apagando la orina. La orina brilla bajo el microscopio con esos diamantes en forma de sobre. Tienes que emborrachar el hígado con Etanol (o Fomepizol) para que no fabrique más cristales, y pasarlo a hemodiálisis urgente.",
    keyPoints: [
      "Anticongelante + Acidosis Gap Alto + Cristales en \"Sobre de Carta\" = Intoxicación por Etilenglicol.",
      "Daño principal: Falla Renal Aguda por obstrucción por Oxalato de Calcio.",
      "Diferenciar de Metanol: Metanol causa ceguera; Etilenglicol daña el riñón."
    ]
  },
  {
    id: "umng-conv-ed2-57",
    university: "UMNG",
    examArea: "TRAUMA",
    topic: "ORTOPEDIA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un joven de 24 años consulta a urgencias quejándose de dolor en la mano derecha. Relata que hace unas horas, mientras patinaba, sufrió una caída apoyando todo el peso de su cuerpo sobre la palma de la mano derecha extendida (\"caída con hiperextensión de la muñeca\" o FOOSH). A la inspección no hay deformidad grosera, pero el paciente presenta dolor punzante en la cara lateral de la muñeca. Al examen físico, hay dolor exquisito a la palpación profunda en el fondo de la \"Tabaquera Anatómica\" (espacio triangular entre los tendones del extensor largo y corto del pulgar). Usted sospecha una fractura. Se solicitan 4 proyecciones radiológicas de la muñeca (incluyendo proyección específica para escafoides), pero el radiólogo le informa que los Rayos X son completamente normales y no hay trazo de fractura visible. ¿Cuál es el paso OBLIGATORIO en el manejo de este paciente en el box de urgencias?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Descartar fractura por la radiografía normal, inmovilizar con vendaje blando y dar de alta con diagnóstico de esguince de muñeca severo.",
        distractorProfile: "false_security_imaging",
        incorrectFeedback: "Hasta el 20% de fracturas de escafoides no se ven el primer día. Tratarlo como esguince dejará el hueso móvil y se necrosará."
      },
      {
        id: "B",
        label: "B",
        text: "Infiltrar la tabaquera anatómica con corticoides de depósito para mitigar la tendinitis aguda por impacto.",
        distractorProfile: "inappropriate_steroid",
        incorrectFeedback: "Infiltrar corticoides en trauma agudo está proscrito, inhibe la consolidación ósea."
      },
      {
        id: "C",
        label: "C",
        text: "Colocar una inmovilización rígida que incluya el pulgar (Férula en espica del pulgar) y citar para repetir la radiografía en 1 a 2 semanas."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar analgésicos intravenosos y derivar a terapia física al día siguiente para recuperación funcional.",
        distractorProfile: "premature_rehab",
        incorrectFeedback: "La fisioterapia en un hueso fracturado sin inmovilizar causa seudoartrosis dolorosa crónica."
      }
    ],
    correctOptionId: "C",
    explanation: "El dogma ortopédico es: \"Dolor en tabaquera anatómica tras caída es fractura de escafoides hasta demostrar lo contrario\". Aún con Rayos X normales inicialmente, la conducta inamovible es colocar una férula en espica del pulgar e inmovilizar a ciegas. A los 10-14 días, la descalcificación hace visible la línea de fractura en una nueva Rx.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la sangre le entra al escafoides \"al revés\" (desde arriba hacia abajo). Si se parte por la cintura y no lo inmovilizas, el polo proximal se queda sin irrigación y muere (necrosis avascular). La radiografía no ve la grieta el primer día porque los pedazos están apretados por la inflamación. Si no pones el yeso, el joven volverá en 6 meses con la muñeca crujiendo requiriendo injerto óseo. El dolor en tabaquera se enyesa; la máquina se equivoca, tu mano no.",
    keyPoints: [
      "Caída apoyando mano + Dolor Tabaquera Anatómica = Fractura de Escafoides presuntiva.",
      "Conducta inicial con Rx NORMAL = Férula Espica del Pulgar + Repetir Rx en 10-14 días.",
      "Complicación letal del escafoides: Necrosis avascular del polo proximal."
    ]
  },
  {
    id: "umng-conv-ed2-58",
    university: "UMNG",
    examArea: "CIRUGÍA GENERAL",
    topic: "UCI POSTQUIRÚRGICA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un hombre de 45 años, politraumatizado masivo tras un aplastamiento, fue llevado hace 24 horas a quirófano para una Laparotomía de Control de Daños debido a choque hemorrágico severo, requiriendo transfusión masiva de 15 unidades de glóbulos rojos y 10 litros de cristaloides. Actualmente está en la UCI sedado, relajado y conectado a ventilación mecánica. El intensivista nota un deterioro súbito: el paciente presenta oliguria extrema (10 cc/hora), la presión pico de la vía aérea en el ventilador se ha disparado a 45 cmH2O (requiriendo altísima presión para meter el aire), y la pared abdominal está dura y a tensión masiva. Usted solicita al personal de enfermería que mida la presión intravesical (Presión Intraabdominal - PIA) mediante la sonda Foley, reportando un valor sostenido de 30 mmHg (Normal 5-7 mmHg). ¿Cuál es el diagnóstico sindrómico confirmatorio y la única terapia de rescate definitiva recomendada en este momento?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Peritonitis química oculta post-operatoria / Iniciar Meropenem y observar 24 horas.",
        distractorProfile: "wrong_diagnosis_peritonitis",
        incorrectFeedback: "La peritonitis no causa una PIA de 30 mmHg de forma aislada sin edema visceral, y los antibióticos no resuelven la isquemia inminente."
      },
      {
        id: "B",
        label: "B",
        text: "Síndrome Compartimental Abdominal / Traslado INMEDIATO a quirófano para Laparotomía Descompresiva (Abrir el abdomen)."
      },
      {
        id: "C",
        label: "C",
        text: "Edema Agudo de Pulmón iatrogénico por sobrecarga hídrica / Infusión de Diuréticos y Dextrotar el ventilador mecánico.",
        distractorProfile: "diuretic_mismanagement",
        incorrectFeedback: "Diuréticos empeoran el flujo renal asfixiado por presión hidrostática y no resuelven el problema mecánico que aplasta el diafragma."
      },
      {
        id: "D",
        label: "D",
        text: "Falla Renal Aguda prerenal por hipovolemia / Infundir un nuevo bolo de 2 litros de Solución Salina rápido.",
        distractorProfile: "dangerous_fluid_bolus",
        incorrectFeedback: "Infundir más líquidos en un compartimento que explotó de líquidos agrava brutalmente la hipertensión intraabdominal."
      }
    ],
    correctOptionId: "B",
    explanation: "El exceso de líquidos por reanimación genera gran edema visceral (tercer espacio), elevando la Presión Intraabdominal (PIA > 20 mmHg) y causando el Síndrome Compartimental Abdominal (SCA) cuando hay disfunción de órganos: compresión de riñones (oliguria) y compresión del diafragma hacia el tórax (presión pico alta en el ventilador). La terapia única de rescate es mecánica: Laparotomía Descompresiva (Abdomen Abierto).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el abdomen es un cilindro rígido. Los intestinos hinchados empujan asfixiando riñones (cero orina) y aplastando pulmones (ventilador piteando). Si la PIA por sonda vesical marca más de 20 mmHg, no pierdas tiempo con pastillas. Busca el bisturí y corta los puntos para que los intestinos salgan (bolsa de Bogotá). En dos minutos, el riñón orinará a chorros.",
    keyPoints: [
      "Reanimación masiva + Oliguria + Dificultad ventilatoria + Abdomen a tensión = SCA.",
      "Diagnóstico: Presión Intravesical (PIA) > 20 mmHg con falla orgánica.",
      "Tratamiento salvavidas: Laparotomía Descompresiva (Abdomen abierto)."
    ]
  },
  {
    id: "umng-conv-ed2-59",
    university: "UMNG",
    examArea: "SALUD PÚBLICA",
    topic: "INFECTOLOGÍA OCUPACIONAL",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un residente de primer año de Cirugía General sufre un accidente laboral al pincharse el dedo índice con una aguja hueca manchada de sangre mientras canalizaba a un paciente que ingresó por trauma cerrado. El paciente fuente (el accidentado) se encuentra en coma, pero entre sus pertenencias se encuentra una historia clínica que reporta positividad para Antígeno de Superficie de Hepatitis B (HBsAg POSITIVO) de hace dos semanas. El residente accidentado busca desesperadamente su propio carné de vacunación y se da cuenta de que NUNCA ha recibido ninguna dosis de la vacuna contra la Hepatitis B (Estado inmune negativo o no vacunado). De acuerdo a los protocolos ocupacionales internacionales, ¿cuál es la conducta de profilaxis Post-Exposición específica que debe instaurarse de INMEDIATO en el médico residente para este virus?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar una dosis inicial de la Vacuna contra la Hepatitis B y repetir serología en 6 meses.",
        distractorProfile: "incomplete_passive_immunity",
        incorrectFeedback: "La vacuna tarda semanas en crear anticuerpos. Darla sola en exposición inminente es inútil, el virus invadirá el hígado antes."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar profilaxis con Tenofovir o Entecavir vía oral por 28 días.",
        distractorProfile: "hiv_pep_confusion",
        incorrectFeedback: "Esta es la profilaxis para el VIH, no se usan antivirales para prevenir Hepatitis B tras pinchazo ocupacional."
      },
      {
        id: "C",
        label: "C",
        text: "Administrar Inmunoglobulina Humana de Hepatitis B (HBIG) + Iniciar el esquema completo de la Vacuna contra Hepatitis B."
      },
      {
        id: "D",
        label: "D",
        text: "Lavar la herida con solución antiséptica, ya que el riesgo de transmisión de Hepatitis B por pinchazo es mínimo (<1%).",
        distractorProfile: "false_security_risk",
        incorrectFeedback: "Falso. El virus de Hepatitis B es altamente transmisible por pinchazo (~30%), cien veces más que el VIH."
      }
    ],
    correctOptionId: "C",
    explanation: "El riesgo de transmisión de VHB por pinchazo de aguja de fuente positiva es alto (hasta 30%). A un paciente no vacunado con exposición a fuente confirmada se le debe otorgar inmunidad pasiva-activa. 1) Inmunoglobulina (HBIG): anticuerpos que atrapan el virus circulante de inmediato. 2) Vacuna simultánea (esquema 0, 1, 6 meses): para crear defensas a largo plazo.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., ser médico y no estar vacunado (con Anti-HBs > 10) para Hepatitis B es caminar por un campo minado descalzo. El VHB sobrevive semanas en sangre seca y es 100 veces más infeccioso que el VIH. La prevención aquí no es con pastillas. Tienes que inyectar los anticuerpos prefabricados (HBIG) como 'sicarios' para barrer el virus hoy, y vacunar la otra nalga para que tu cuerpo aprenda para la próxima.",
    keyPoints: [
      "Pinchazo aguja fuente VHB+ en Médico NO vacunado = Inmunoglobulina HBIG + Vacunación completa.",
      "El VHB es el virus de transmisión sanguínea ocupacional de mayor riesgo (~30% vs 0.3% del VIH)."
    ]
  },
  {
    id: "umng-conv-ed2-60",
    university: "UMNG",
    examArea: "ENDOCRINOLOGÍA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Una mujer de 29 años acude a consulta externa refiriendo astenia profunda, intolerancia al frío, pérdida de vello púbico y axilar, y amenorrea secundaria ininterrumpida desde hace 8 meses. Al indagar sobre su historia clínica, destaca que hace exactamente 8 meses dio a luz a su primer hijo mediante parto vaginal domiciliario. Durante dicho evento presentó un sangrado vaginal profuso que la llevó a la pérdida de conciencia, requiriendo traslado al hospital donde permaneció intubada y fue transfundida con 6 unidades de hemoderivados por choque hipovolémico grado IV severo. La paciente también refiere que, tras el alta hospitalaria de ese evento, nunca logró producir leche materna (agalactia). ¿Cuál es el diagnóstico sindrómico subyacente que unifica todo este cuadro clínico posparto?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Síndrome de Ovarios Poliquísticos con resistencia a la insulina oculta.",
        distractorProfile: "wrong_endocrine_disease",
        incorrectFeedback: "El SOP da hirsutismo (exceso de vello) no pérdida del mismo. Tampoco guarda relación etiológica con un choque hemorrágico."
      },
      {
        id: "B",
        label: "B",
        text: "Síndrome de Asherman secundario a sinequias intrauterinas por isquemia.",
        distractorProfile: "uterine_synechiae",
        incorrectFeedback: "Asherman causa amenorrea por cicatrices uterinas, pero la lactancia y el vello están intactos (el eje hormonal funciona bien)."
      },
      {
        id: "C",
        label: "C",
        text: "Síndrome de Sheehan (Necrosis isquémica hipofisiaria posparto)."
      },
      {
        id: "D",
        label: "D",
        text: "Tiroiditis de Hashimoto de inicio posparto agresiva.",
        distractorProfile: "autoimmune_thyroid",
        incorrectFeedback: "Causa frío y astenia, pero la tiroides no influye directamente en la pérdida de la lactancia, de la regla y del vello."
      }
    ],
    correctOptionId: "C",
    explanation: "El Síndrome de Sheehan es el infarto de la glándula pituitaria (hipófisis) por choque hipovolémico durante el parto. La hipófisis, que crece fisiológicamente en el embarazo, es muy sensible a la isquemia. La necrosis pituitaria causa panhipopituitarismo: pérdida de Prolactina (agalactia temprana patognomónica), de FSH/LH (amenorrea), de TSH (hipotiroidismo) y de ACTH (insuficiencia suprarrenal con pérdida de vello).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., cuando la mamá se choca desangrándose, su glándula pituitaria hipertrofiada paga el precio de no recibir oxígeno y se infarta. La alarma suena rápido: 'Doctor, no me sale ni gota de leche'. Es el anuncio de que esa mujer no menstruará más, y vivirá fría (sin TSH) y sin vello (sin ACTH) a menos que le recetes píldoras de reemplazo hormonal de por vida. Ojo con Asherman: ahí sí hay leche, porque el daño está en la matriz, no en el cerebro.",
    keyPoints: [
      "Hemorragia posparto (Choque) + Agalactia + Amenorrea + Caída de vello = Síndrome de Sheehan.",
      "Fisiopatología: Panhipopituitarismo por necrosis isquémica hipofisiaria.",
      "Diagnóstico diferencial con Asherman: En Asherman SÍ hay producción de leche materna."
    ]
  }
];
