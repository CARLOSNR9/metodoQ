import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UMNG — Edición #1 (26 jul 2026) · Preguntas #21–#30.
 */
export const UMNG_CONV_2026_07_26_21_30_QUESTIONS: TrainingQuestion[] = [
  {
    id: "umng-conv-2026-07-26-21",
    university: "UMNG",
    examArea: "MEDICINA TROPICAL / PEDIATRÍA",
    topic: "PEDIATRÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Niño de 8 años es traído a urgencias desde Girardot. La madre refiere que tuvo fiebre de 39.5°C por 4 días, pero el día de hoy amaneció sin fiebre (afebril). Sin embargo, desde hace 4 horas la madre lo nota intensamente decaído, presenta dolor abdominal continuo y ha vomitado 4 veces. Al examen físico: pálido, FC 120 lpm, PA 90/60 mmHg, extremidades frías, llenado capilar de 3 segundos, y el hígado se palpa a 3 cm por debajo del reborde costal derecho. Laboratorios iniciales muestran un Hematocrito del 48% (su basal hace 2 días era 38%) y plaquetas en 60,000. De acuerdo con las guías de la OMS/OPS para esta patología, ¿cuál es el paso de reanimación INMEDIATO a seguir?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Transfusión profiláctica de un pool de plaquetas debido al alto riesgo de hemorragia espontánea.",
        distractorProfile: "lab_correction_without_clinical_indication",
        incorrectFeedback: "Las guías de la OMS son tajantes: en Dengue, las plaquetas NO se transfundan de forma profiláctica, independientemente del recuento, a menos que haya hemorragia masiva que comprometa la vida."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar bolos de Lactato de Ringer o Solución Salina Normal a 10 cc/kg/hora durante 1 hora y reevaluar."
      },
      {
        id: "C",
        label: "C",
        text: "Manejo ambulatorio con Acetaminofén y suero oral, citando a control en 24 horas por ya no tener fiebre.",
        distractorProfile: "fatal_diagnostic_delay",
        incorrectFeedback: "Mandar a la casa a un paciente en la fase crítica con signos de alarma es negligencia médica; este paciente evolucionará a Choque por Dengue en cuestión de horas."
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar infusión de inotrópicos (Dopamina o Dobutamina) por signos clínicos de choque cardiogénico.",
        distractorProfile: "wrong_shock_syndrome",
        incorrectFeedback: "El choque del dengue es hipovolémico (por fuga plasmática), no cardiogénico. Los inotrópicos no tienen cabida sin haber llenado primero el tanque vascular."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente está en la \"fase crítica\" del Dengue (defervescencia: cuando cae la fiebre, días 4-5). Signos de alarma presentes: dolor abdominal continuo, vómitos persistentes (4 veces), hepatomegalia (>2 cm) y hemoconcentración rápida (Hcto sube de 38% a 48%). Los signos de hipoperfusión (llenado capilar prolongado) indican fuga capilar severa inminente. Un paciente con Dengue y signos de alarma requiere hospitalización e inicio inmediato de cristaloides isotónicos a dosis de 10 ml/kg/hora. Esta es la dosis exacta de choque inicial para reponer el plasma que se está fugando al tercer espacio, evitando el choque por Dengue.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nColega, en Colombia el Dengue no perdona. Si la mamá te dice \"doctor, ya se le quitó la fiebre pero no se quiere parar de la cama y le duele la barriga\", enciende las alarmas. El niño se está desangrando por dentro, pero no con sangre, sino con plasma. Sus vasos sanguíneos son como coladores. Mételo a reanimación, ponle un catéter y pásale Lactato de Ringer a 10 cc por kilo. ¡Y nunca mires las plaquetas para decidir transfundir, mira la clínica!",
    keyPoints: [
      "Cuando veas:",
      "• Paciente en fase crítica de Dengue (caída de la fiebre).",
      "• Signos de alarma: dolor abdominal, vómitos, letargia, hemoconcentración.",
      "Debes pensar en:",
      "Dengue con Signos de Alarma (Grupo B). El tratamiento inmediato es cristaloides isotónicos a 10 cc/kg/hora.",
      "Tema: Medicina Tropical / Dengue."
    ]
  },
  {
    id: "umng-conv-2026-07-26-22",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Mujer de 32 años, G2P2, acaba de tener un parto vaginal hace 30 minutos. Durante el embarazo fue diagnosticada con Preeclampsia sin criterios de severidad, manejada con Alfa-metildopa. Tras el alumbramiento (salida de la placenta), la enfermera reporta un sangrado vaginal profuso que ha empapado tres compresas en 5 minutos. Al examen físico: la paciente está taquicárdica (115 lpm), PA 140/90 mmHg, y a la palpación abdominal el fondo uterino se encuentra supraumbilical, flácido y \"blando como una esponja\". Se diagnostica Hemorragia Posparto (HPP) y se inicia masaje uterino bimanual y perfusión de Oxitocina IV, pero el sangrado no cede. ¿Qué medicamento uterotónico de segunda línea está ESTRICTAMENTE CONTRAINDICADO en esta paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Misoprostol intra-rectal o sublingual.",
        distractorProfile: "safe_second_line_option",
        incorrectFeedback: "El Misoprostol (análogo de prostaglandina E1) es un excelente fármaco de segunda línea, es seguro y no tiene contraindicaciones cardiovasculares mayores en esta paciente."
      },
      {
        id: "B",
        label: "B",
        text: "Metilergonovina (Methergin) intramuscular."
      },
      {
        id: "C",
        label: "C",
        text: "Ácido Tranexámico intravenoso.",
        distractorProfile: "essential_adjunct_therapy",
        incorrectFeedback: "El ácido tranexámico (antifibrinolítico) se debe administrar a toda paciente con HPP en las primeras 3 horas, independientemente de la causa (estudio WOMAN), y no está contraindicado por la hipertensión."
      },
      {
        id: "D",
        label: "D",
        text: "Carbetocina intravenosa.",
        distractorProfile: "safe_oxytocic_analog",
        incorrectFeedback: "La Carbetocina (análogo de acción prolongada de la oxitocina) puede ser usada (aunque suele preferirse profilácticamente), y no tiene las restricciones vasculares severas de la ergonovina."
      }
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con Hemorragia Posparto secundaria a Atonía Uterina. Falla la primera línea (Oxitocina y masaje), obligando a usar un uterotónico de segunda línea. La Metilergonovina es un alcaloide del cornezuelo del centeno que causa vasoconstricción periférica y coronaria potentísima. Está CONTRAINDICADA ABSOLUTAMENTE en pacientes con preeclampsia, hipertensión arterial crónica o enfermedad coronaria, ya que puede causar crisis hipertensivas fulminantes, ACV hemorrágico e infarto de miocardio.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nSalvar el útero a costa del cerebro de la madre no es buen negocio. Cuando una mujer sangra posparto, el estrés hace que el interno grite \"¡Pásenme el Methergin!\". Si haces eso en esta paciente, su presión pasará en 30 segundos de 140/90 a 220/140 y hará una hemorragia cerebral en la sala de partos. Pídele a la enfermera Misoprostol (4 a 5 pastillas por el recto) o aplica Ácido Tranexámico mientras preparas un Balón de Bakri o pasas a quirófano para suturas compresivas (B-Lynch).",
    keyPoints: [
      "Cuando veas:",
      "• Hemorragia posparto por atonía uterina.",
      "• Antecedente de preeclampsia o hipertensión.",
      "Debes pensar en:",
      "Contraindicación de Metilergonovina (Methergin).",
      "Tema: Ginecología y Obstetricia / Hemorragia Posparto."
    ]
  },
  {
    id: "umng-conv-2026-07-26-23",
    university: "UMNG",
    examArea: "TRAUMA / ORTOPEDIA",
    topic: "ORTOPEDIA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un motociclista de 28 años ingresa a urgencias tras chocar contra un muro de contención a alta velocidad. A su ingreso está pálido, frío y confuso. Signos vitales: PA 75/40 mmHg, FC 140 lpm. El FAST es negativo para líquido libre en abdomen y el tórax está limpio. A la inspección, se observa acortamiento de la extremidad inferior derecha y rotación externa. A la palpación de la pelvis, hay inestabilidad ósea franca y dolor exquisito al presionar las crestas ilíacas (pelvis en \"libro abierto\"). Mientras se inicia la transfusión masiva, ¿cuál es la medida MECÁNICA de emergencia prioritaria que se debe realizar en la sala de reanimación?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Colocar tracción esquelética trans-tibial en la pierna derecha para alinear la fractura pélvica.",
        distractorProfile: "wrong_fracture_treatment",
        incorrectFeedback: "La tracción esquelética es para fracturas de la diáfisis femoral, no cierra el anillo pélvico ni detiene el sangrado retroperitoneal."
      },
      {
        id: "B",
        label: "B",
        text: "Llevar de inmediato a quirófano para fijación interna con placas y tornillos por ortopedia.",
        distractorProfile: "definitive_care_in_shock",
        incorrectFeedback: "La fijación interna definitiva (placas) es una cirugía larga y compleja que matará al paciente chocado. El manejo quirúrgico inicial en choque es Empaquetamiento preperitoneal (Packing) o Fijador Externo rápido, no placas definitivas."
      },
      {
        id: "C",
        label: "C",
        text: "Colocar una faja pélvica (pelvic binder) o sábana envolvente a nivel de los trocánteres mayores."
      },
      {
        id: "D",
        label: "D",
        text: "Aplicar un yeso pelvipédico urgente para inmovilizar la articulación coxofemoral.",
        distractorProfile: "inappropriate_immobilization",
        incorrectFeedback: "El yeso no tiene cabida en la reanimación de trauma agudo y no ejerce compresión circunferencial en el anillo pélvico."
      }
    ],
    correctOptionId: "C",
    explanation: "El choque sin otra fuente obvia de sangrado indica que se está desangrando en el retroperitoneo (plexo venoso presacro o arterias ilíacas). El cierre del anillo pélvico reduce drásticamente el volumen de la pelvis verdadera (efecto de taponamiento) y aproxima las superficies óseas sangrantes, frenando dramáticamente la hemorragia venosa. Debe colocarse estrictamente a nivel de los trocánteres mayores, no sobre las crestas ilíacas.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nEn trauma, la pelvis es un barril sin fondo. Puedes meterle 10 unidades de sangre por la vena, y las 10 se irán al espacio retroperitoneal si el anillo óseo está abierto (caben hasta 4 litros de sangre ahí). Amarrar una sábana fuerte (o faja pélvica comercial) alrededor de las caderas, justo sobre los \"huesos de los bolsillos\" (los trocánteres), cierra el libro abierto, aprieta las venas rotas contra el hueso y le salva la vida en 1 minuto mientras preparas quirófano o angiografía.",
    keyPoints: [
      "Cuando veas:",
      "• Trauma severo + Choque hemorrágico.",
      "• FAST negativo y pelvis inestable (libro abierto).",
      "Debes pensar en:",
      "Faja pélvica a nivel de los trocánteres mayores. Es la medida salvavidas primaria antes de cualquier cirugía.",
      "Tema: ATLS / Trauma de Pelvis."
    ]
  },
  {
    id: "umng-conv-2026-07-26-24",
    university: "UMNG",
    examArea: "MEDICINA INTERNA / ENDOCRINOLOGÍA",
    topic: "ENDOCRINOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un estudiante universitario de 19 años, con diagnóstico conocido de Diabetes Mellitus tipo 1, es llevado a urgencias por sus compañeros de apartamento debido a compromiso del estado de conciencia y respiración profunda y rápida (respiración de Kussmaul). Paraclínicos iniciales: Glucometría 480 mg/dL, Gases arteriales con pH 7.10, HCO3 de 8 mEq/L, Anión Gap de 22, Cetonas en orina +++. Los electrolitos séricos reportan un Potasio (K+) de 2.9 mEq/L. Usted canaliza dos vías venosas y comienza expansión con Solución Salina Normal. ¿Cuál es el paso FARMACOLÓGICO INMEDIATO más apropiado antes de cualquier otra intervención?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar infusión de Insulina Regular a 0.1 U/kg/hora.",
        distractorProfile: "fatal_priority_error",
        incorrectFeedback: "La insulina empuja drásticamente el potasio extracelular hacia dentro de las células. Si empiezas insulina con un potasio en 2.9, este caerá a niveles letales (< 2.0) en minutos, causando paro cardíaco por fibrilación ventricular."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar bolos de Bicarbonato de Sodio intravenoso para corregir la acidosis severa.",
        distractorProfile: "outdated_bicarbonate_use",
        incorrectFeedback: "El bicarbonato solo se indica si el pH es menor de 6.9, y su uso empeora la hipokalemia porque la corrección del pH también mete potasio a la célula."
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar reposición agresiva de Cloruro de Potasio (KCl) intravenoso y retrasar el inicio de la insulina."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar insulina subcutánea rápida (Lispro) y Dextrosa al 5% para evitar hipoglucemia.",
        distractorProfile: "wrong_route_and_fluid",
        incorrectFeedback: "La insulina SC no es el manejo inicial del paciente inestable con CAD, y sigue aplicando la regla de oro: sin potasio seguro, no hay insulina."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente cursa con Cetoacidosis Diabética (CAD) severa. Según las guías de la ADA, si el potasio inicial es < 3.3 mEq/L, la INSULINA SE DEBE SUSPENDER O RETRASAR. La prioridad absoluta es reponer agresivamente el potasio por vía intravenosa (20-30 mEq/hora). Solo cuando el K+ supere 3.3 mEq/L, es seguro encender la bomba de insulina.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., esta es la causa número uno de muertes iatrogénicas en urgencias durante una cetoacidosis. Llega el muchacho con el azúcar \"Hi\" en el glucómetro y el interno desesperado prende la bomba de insulina. ¿Qué pasa? La insulina agarra las tres moléculas de potasio que le quedaban en la sangre y las mete a la fuerza a la célula. El plasma se queda sin potasio, el corazón pierde su repolarización y el paciente hace un paro irreversible. En CAD, el líquido es oro, el potasio es vida y la insulina puede esperar media hora.",
    keyPoints: [
      "Cuando veas:",
      "• Cetoacidosis Diabética (CAD).",
      "• Potasio < 3.3 mEq/L.",
      "Debes pensar en:",
      "Retrasar la infusión de insulina. Prioridad absoluta: Reposición vigorosa de Potasio.",
      "Tema: Urgencias Endocrinológicas / Cetoacidosis Diabética."
    ]
  },
  {
    id: "umng-conv-2026-07-26-25",
    university: "UMNG",
    examArea: "INFECTOLOGÍA / SALUD PÚBLICA",
    topic: "INFECTOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un soldado que se encontraba durmiendo a la intemperie en un campamento rural en el Guaviare es mordido en el lóbulo de la oreja izquierda por un murciélago (quiróptero). La lesión es pequeña (2 mm), con escaso sangrado. El soldado acude a sanidad militar 6 horas después del evento. Se realiza un lavado exhaustivo de la herida con agua y jabón. Según el protocolo de profilaxis para Rabia del Instituto Nacional de Salud de Colombia, ¿qué clasificación tiene esta exposición y qué conducta inmunológica específica e inmediata está indicada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Exposición Leve. Administrar únicamente vacuna antirrábica esquema pre-exposición.",
        distractorProfile: "underestimation_of_risk",
        incorrectFeedback: "Las exposiciones leves se limitan a lameduras en piel intacta o contactos indirectos, y los animales silvestres nunca se catalogan como leves."
      },
      {
        id: "B",
        label: "B",
        text: "Exposición Grave. Administrar Inmunoglobulina Antirrábica humana (suero) infiltrada en la herida, más el esquema completo de Vacunación antirrábica (días 0, 3, 7 y 14)."
      },
      {
        id: "C",
        label: "C",
        text: "Exposición Grave. Administrar solo Vacunación antirrábica (días 0, 3, 7 y 14) porque la herida no superó los 5 mm de diámetro.",
        distractorProfile: "omission_of_passive_immunity",
        incorrectFeedback: "Omitir el suero (Inmunoglobulina) en una exposición grave por murciélago permite que el virus viaje por los nervios periféricos antes de que la vacuna logre generar anticuerpos (lo cual tarda unos 7-14 días)."
      },
      {
        id: "D",
        label: "D",
        text: "Exposición Leve. Observar al murciélago por 10 días y solo vacunar si el animal muere o presenta signos neurológicos.",
        distractorProfile: "domestic_observation_rule_applied_to_wildlife",
        incorrectFeedback: "Nunca se puede \"observar 10 días\" a un animal silvestre o murciélago. Esa regla de observación aplica ÚNICAMENTE para perros y gatos domésticos conocidos."
      }
    ],
    correctOptionId: "B",
    explanation: "El Instituto Nacional de Salud (INS) de Colombia clasifica TODA mordedura o rasguño por murciélago (o zorro, mico, fauna silvestre) como EXPOSICIÓN GRAVE, independientemente del tamaño de la herida. Al ser exposición grave (por ser animal silvestre de altísimo riesgo y estar cerca al cerebro), es MANDATORIO administrar inmunidad pasiva inmediata (Inmunoglobulina antirrábica) infiltrando la mayor cantidad posible alrededor y dentro de la herida en el día 0, asociada al inicio de la inmunidad activa (Vacuna en músculo deltoides o anterolateral del muslo).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoctor(a), la rabia tiene una mortalidad del 99.9%. Si te equivocas aquí, el paciente muere meses después con encefalitis hidrofóbica y tú irás a la cárcel. Una mordedura de murciélago en la oreja es una pista rápida directa al cerebro. La vacuna sola no sirve a tiempo; necesitas el \"veneno contra el veneno\" (la Inmunoglobulina) aplicada ahí mismo en la oreja para bloquear al virus antes de que se trepe por el nervio facial o trigémino. ¡Todo murciélago tiene rabia hasta que el patólogo demuestre lo contrario!",
    keyPoints: [
      "Cuando veas:",
      "• Mordedura o rasguño por murciélago, zorro o mico.",
      "Debes pensar en:",
      "Exposición GRAVE a Rabia. Manejo absoluto: Inmunoglobulina infiltrada en la herida + Vacuna antirrábica.",
      "Tema: Infectología / Profilaxis Rabia."
    ]
  },
  {
    id: "umng-conv-2026-07-26-26",
    university: "UMNG",
    examArea: "MEDICINA INTERNA / CARDIOLOGÍA",
    topic: "CARDIOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Mujer de 68 años con antecedente de hipertensión arterial mal controlada es traída a urgencias a media noche por presentar disnea súbita de reposo, tos con expectoración rosada y espumosa, y agitación psicomotora. Al examen físico: sentada en el borde de la camilla usando músculos accesorios, PA 210/115 mmHg, FC 115 lpm, SatO2 82% al ambiente. A la auscultación pulmonar presenta estertores crepitantes bilaterales que ascienden hasta los ápices. Hay un tercer ruido (S3) a la auscultación cardiaca. Se inicia soporte con Ventilación Mecánica No Invasiva (CPAP). ¿Qué combinación de fármacos intravenosos constituye la primera línea de manejo médico en este escenario?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Metoprolol intravenoso + Furosemida intravenosa.",
        distractorProfile: "beta_blocker_contraindication",
        incorrectFeedback: "Los Betabloqueadores (Metoprolol) están CONTRAINDICADOS de forma absoluta en la fase aguda del edema pulmonar descompensado (perfil húmedo). Al bloquear los receptores beta, deprimen la contractilidad de un corazón que está luchando por vaciarse, agravando el choque y la congestión."
      },
      {
        id: "B",
        label: "B",
        text: "Nitroglicerina intravenosa + Furosemida intravenosa."
      },
      {
        id: "C",
        label: "C",
        text: "Nitroprusiato de Sodio intravenoso + Amiodarona intravenosa.",
        distractorProfile: "wrong_antiarrhythmic_use",
        incorrectFeedback: "El Nitroprusiato es una opción antihipertensiva, pero la Amiodarona no tiene cabida aquí (no hay arritmia letal documentada)."
      },
      {
        id: "D",
        label: "D",
        text: "Morfina intravenosa + Digoxina intravenosa.",
        distractorProfile: "obsolete_heart_failure_therapy",
        incorrectFeedback: "La morfina ya no es rutinaria por el riesgo de depresión respiratoria y necesidad de intubación. La digoxina es inútil en el manejo agudo de emergencia."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con Edema Agudo de Pulmón secundario a Emergencia Hipertensiva. El tratamiento de rescate se basa en disminuir rápidamente la \"presión de llenado\" (precarga) y la resistencia que enfrenta el ventrículo izquierdo (poscarga). La Nitroglicerina IV a dosis altas actúa como un potente vasodilatador venoso y arterial, aliviando la asfixia casi instantáneamente. Se asocia a Furosemida IV para eliminar el exceso de volumen corporal a través de la diuresis, aunque su efecto tarda unos 30 minutos en iniciar.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nEste cuadro es como una bomba de agua tratando de empujar líquido a través de una manguera tapada y rígida (vasoconstricción de PA 210/115). La presión hace que el agua retroceda e inunde los pulmones. Si le pones un betabloqueador, le quitas la fuerza al motor de la bomba y el paciente se ahoga. Con la Nitroglicerina, \"abres la manguera\" de golpe; el corazón se vacía fácilmente, el líquido sale de los pulmones y la abuela vuelve a respirar en 15 minutos.",
    keyPoints: [
      "Cuando veas:",
      "• Disnea súbita + Expectoración rosada + PA > 180/110.",
      "Debes pensar en:",
      "Edema Agudo de Pulmón Hipertensivo. Terapia base: Nitroglicerina IV + Furosemida IV.",
      "Tema: Urgencias Cardiovasculares / Falla Cardiaca Aguda."
    ]
  },
  {
    id: "umng-conv-2026-07-26-27",
    university: "UMNG",
    examArea: "TRAUMA / ORTOPEDIA",
    topic: "ORTOPEDIA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un soldado de 22 años es evacuado en helicóptero tras recibir un impacto de proyectil de arma de fuego en el muslo derecho durante un combate. En urgencias, se encuentra hemodinámicamente estable (PA 110/70). Presenta una herida con un orificio de entrada de 6 cm en la cara anterior del muslo, con tejido muscular lacerado y un fragmento de la diáfisis femoral visible y expuesto a través de la herida. No hay lesión neurovascular distal evidente. Se cubre la herida con apósitos estériles humedecidos y se inmoviliza la extremidad. Previo a su ingreso al quirófano para lavado y desbridamiento, ¿qué intervención farmacológica urgente debe iniciarse idealmente en la primera hora tras la lesión?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administración de Cefazolina (o Cefalotina) y Gentamicina intravenosas."
      },
      {
        id: "B",
        label: "B",
        text: "Tomar cultivos profundos del hueso expuesto y esperar el reporte de Gram antes de iniciar antibióticos.",
        distractorProfile: "delay_for_cultures",
        incorrectFeedback: "Los cultivos tomados en urgencias antes del lavado quirúrgico solo muestran los contaminantes de la piel o del entorno y no predicen los verdaderos patógenos. Están proscritos en la sala de urgencias; se toman en el quirófano durante el desbridamiento profundo."
      },
      {
        id: "C",
        label: "C",
        text: "Administración exclusiva de Penicilina G cristalina para prevención de mionecrosis por Clostridium.",
        distractorProfile: "incomplete_antibiotic_coverage",
        incorrectFeedback: "La penicilina G se adicionaba clásicamente si la lesión era en zona agrícola o había contaminación fecal severa (riesgo de Clostridium), pero no basta como monoterapia exclusiva."
      },
      {
        id: "D",
        label: "D",
        text: "Administración de Vancomicina y Meropenem para cubrir patógenos multirresistentes adquiridos en el campo.",
        distractorProfile: "unnecessary_broad_spectrum",
        incorrectFeedback: "Los antibióticos de ultra-amplio espectro no son profilaxis de primera línea; se reservan para infecciones instauradas en el ámbito hospitalario."
      }
    ],
    correctOptionId: "A",
    explanation: "El paciente presenta una Fractura Abierta (Expuesta) del fémur secundaria a PAF. Esto la clasifica, como mínimo, en una Gustilo-Anderson grado III. Las directrices del ATLS y ortopedia mundial establecen que la administración temprana de antibióticos (idealmente dentro de la primera hora, máximo 3 horas) es el factor pronóstico más importante para prevenir la osteomielitis. Para las fracturas Gustilo III (o por arma de fuego/granja), se requiere cobertura contra Gram positivos y Gram negativos. El esquema estándar es una Cefalosporina de 1ra generación (Cefazolina) + un Aminoglucósido (Gentamicina).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nUn hueso expuesto al aire de la calle ya está contaminado. Si tú te sientas a esperar a que el bacteriólogo te diga qué bicho creció en el cultivo (Opción B), en tres días el paciente tendrá una osteomielitis por Staphylococcus aureus que le comerá el fémur y requerirá amputación. Arranca el chorro de Cefazolina y Gentamicina apenas le rompas el pantalón al soldado. ¡La ortopedia de guerra te lo exige!",
    keyPoints: [
      "Cuando veas:",
      "• Fractura abierta (expuesta) por arma de fuego o Gustilo III.",
      "Debes pensar en:",
      "Profilaxis antibiótica INMEDIATA (Cefazolina + Gentamicina). NO tomar cultivos en urgencias.",
      "Tema: Ortopedia / Fracturas Abiertas."
    ]
  },
  {
    id: "umng-conv-2026-07-26-28",
    university: "UMNG",
    examArea: "CIRUGÍA GENERAL",
    topic: "CIRUGÍA GENERAL",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Hombre de 45 años, sin antecedentes médicos, consulta a urgencias por dolor en hemiabdomen inferior de 6 días de evolución. Refiere que el dolor inició en la \"boca del estómago\" y luego migró hacia la zona inferior derecha, asociándose a fiebre y escalofríos. Al examen físico: PA 115/75 mmHg, FC 90 lpm, T 38.2°C. A la palpación abdominal no hay signos de irritación peritoneal generalizada (Blumberg negativo en el resto del abdomen), pero en la fosa ilíaca derecha se palpa una masa firme, dolorosa, de bordes mal definidos. Un TAC de abdomen con contraste confirma una apendicitis aguda complicada con un plastrón apendicular y un absceso organizado de 5 x 6 cm. ¿Cuál es el manejo inicial de elección para este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Laparotomía exploratoria urgente por incisión mediana infraumbilical para lavado de la cavidad.",
        distractorProfile: "aggressive_surgical_error",
        incorrectFeedback: "Operar un plastrón apendicular tardío es una pesadilla quirúrgica. La anatomía está completamente distorsionada; entrar al quirófano a desenredar esa masa inflamatoria resulta invariablemente en perforación de otras asas intestinales."
      },
      {
        id: "B",
        label: "B",
        text: "Apendicectomía laparoscópica de urgencia (en las primeras 4 horas).",
        distractorProfile: "early_surgery_rule_applied_late",
        incorrectFeedback: "Operar un plastrón apendicular tardío (más de 3-5 días de evolución) es una pesadilla quirúrgica."
      },
      {
        id: "C",
        label: "C",
        text: "Drenaje percutáneo guiado por ecografía o TAC y antibioticoterapia intravenosa exclusiva."
      },
      {
        id: "D",
        label: "D",
        text: "Manejo médico ambulatorio con Ciprofloxacina + Metronidazol oral por 14 días.",
        distractorProfile: "inadequate_outpatient_care",
        incorrectFeedback: "Aunque el manejo inicial es médico, requiere ingreso hospitalario para drenaje radiológico (un absceso de 5 cm no se esteriliza solo con pastillas) y vigilancia estricta por vena."
      }
    ],
    correctOptionId: "C",
    explanation: "El estándar de oro mundial para pacientes ESTABLES con abscesos apendiculares de buen tamaño (> 3-4 cm) de evolución tardía (> 5 días) es el \"Manejo Conservador\" (estrategia de Ochsner o tratamiento no operatorio). Consiste en hospitalizar, dar antibióticos IV de amplio espectro y drenar el pus con radiología intervencionista (catéter percutáneo). Semanas/meses después, cuando la inflamación ha cedido, se puede ofrecer una apendicectomía de intervalo electiva.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nMeterse a operar un absceso apendicular de 6 días es como tratar de separar chicles derretidos pegados a un papel húmedo. Todo se desgarra, todo sangra, y el intestino se rompe. El cirujano inteligente drena la bolsa de pus con una aguja guiada por ecógrafo desde afuera, y deja que el paciente mejore en la planta. La heroica intervención de entrar a arrancar esa masa termina casi siempre en el paciente usando una colostomía de por vida. ¡El bisturí se guarda para la peritonitis generalizada!",
    keyPoints: [
      "Cuando veas:",
      "• Apendicitis tardía (> 5 días) + Masa palpable (Plastrón) + Absceso en TAC.",
      "• Paciente hemodinámicamente estable.",
      "Debes pensar en:",
      "Manejo Conservador: Drenaje percutáneo radiológico + Antibióticos IV. NO cirugía inmediata.",
      "Tema: Cirugía General / Apendicitis Complicada."
    ]
  },
  {
    id: "umng-conv-2026-07-26-29",
    university: "UMNG",
    examArea: "PEDIATRÍA / NEONATOLOGÍA",
    topic: "PEDIATRÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un recién nacido a término de 3 días de vida es traído a urgencias porque la madre lo nota \"muy dormido\", no quiere succionar el pecho desde hace 12 horas, y al tocarlo siente que está muy frío (hipotermia). Además, presenta un episodio de cianosis peribucal. La madre tuvo Ruptura Prematura de Membranas de 22 horas previas al parto y no recibió antibióticos perinatales. Al examen físico: flácido, fontanela anterior normotensa, y un llenado capilar de 4 segundos. Se toman hemocultivos y cultivos de LCR por sospecha clínica de Sepsis Neonatal Temprana. ¿Cuál es el esquema antibiótico empírico de elección que debe iniciarse de INMEDIATO en este neonato?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Ceftriaxona + Vancomicina.",
        distractorProfile: "ceftriaxone_neonatal_contraindication",
        incorrectFeedback: "La Ceftriaxona está ABSOLUTAMENTE CONTRAINDICADA en recién nacidos prematuros o a término en los primeros días de vida. Compite con la bilirrubina por la unión a la albúmina sérica, desplazándola y precipitando Kernicterus."
      },
      {
        id: "B",
        label: "B",
        text: "Ampicilina + Gentamicina (o Amikacina)."
      },
      {
        id: "C",
        label: "C",
        text: "Cefotaxima + Clindamicina.",
        distractorProfile: "incomplete_listeria_coverage",
        incorrectFeedback: "La Cefotaxima sí se puede usar en neonatos, pero ninguna de estas dos cubre a la Listeria monocytogenes, un patógeno clave en la sepsis neonatal."
      },
      {
        id: "D",
        label: "D",
        text: "Penicilina G cristalina en monoterapia.",
        distractorProfile: "inadequate_gram_negative_coverage",
        incorrectFeedback: "La Penicilina G sola dejaría desprotegido al niño frente a E. coli y otros Gram negativos agresivos."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta Sepsis Neonatal Temprana (< 72 horas). Los patógenos universales aquí son: Streptococcus agalactiae (Grupo B), Escherichia coli y Listeria monocytogenes. La Ampicilina cubre excelentemente al S. agalactiae y, lo más importante, es el único fármaco que destruye a la Listeria monocytogenes. La Gentamicina (o cualquier aminoglucósido) hace sinergia y aniquila a los Gram negativos del canal del parto como la E. coli.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoctor, grábate este esquema porque es pregunta de pase en pediatría y un salvavidas real. La Listeria es un bicho engañoso que a las cefalosporinas de 3ra (Cefotaxima, Ceftriaxona) les da risa, son naturalmente resistentes a ellas. ¡Solo la Ampicilina mata a la Listeria! Por eso, todo protocolo neonatal DEBE llevar Ampicilina de cajón. Si marcas Ceftriaxona (Opción A), aparte de que no matas a la listeria, vuelves amarillo al bebé y le causas daño neurológico permanente.",
    keyPoints: [
      "Cuando veas:",
      "• Neonato (< 7 días) con signos de sepsis (letargia, hipotermia, mala succión).",
      "Debes pensar en:",
      "Cobertura para S. agalactiae, E. coli y Listeria. Esquema: Ampicilina + Gentamicina. NUNCA Ceftriaxona.",
      "Tema: Neonatología / Sepsis Neonatal Temprana."
    ]
  },
  {
    id: "umng-conv-2026-07-26-30",
    university: "UMNG",
    examArea: "TOXICOLOGÍA",
    topic: "TOXICOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Joven de 25 años es traído a urgencias en ambulancia tras ser encontrado inconsciente en el baño de una discoteca junto a una jeringa y parafernalia de drogas intravenosas. Al ingreso: inconsciente, sin respuesta al dolor, FC 55 lpm, PA 90/60 mmHg, Temperatura 35.5°C. El hallazgo más llamativo es una Frecuencia Respiratoria de 6 respiraciones por minuto (bradipnea severa) y pupilas puntiformes bilaterales (miosis extrema). Se canaliza acceso venoso y se administra el antídoto específico (Naloxona IV). El paciente despierta bruscamente, agitado, respira normalmente y las pupilas se dilatan. ¿Cuál es el paso OBLIGATORIO que debe tomarse durante las siguientes 2 a 4 horas en la sala de urgencias?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Dar de alta al paciente inmediatamente ya que el antídoto revirtió de manera definitiva la intoxicación.",
        distractorProfile: "premature_discharge",
        incorrectFeedback: "Si das de alta al paciente a los 30 minutos, se irá caminando y se morirá asfixiado en la puerta del hospital cuando el antídoto deje de actuar."
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar sedación profunda con Midazolam para mitigar el síndrome de abstinencia precipitado agudamente.",
        distractorProfile: "harmful_sedation_post_reversal",
        incorrectFeedback: "Deprimir nuevamente su sistema nervioso con benzodiacepinas reinstaurará el riesgo de depresión respiratoria severa."
      },
      {
        id: "C",
        label: "C",
        text: "Mantener en observación estricta o iniciar infusión continua del antídoto, debido a la vida media corta del mismo."
      },
      {
        id: "D",
        label: "D",
        text: "Realizar un lavado gástrico vigoroso para extraer posibles restos de estupefacientes en el estómago.",
        distractorProfile: "useless_gastric_lavage",
        incorrectFeedback: "El lavado gástrico es inútil, primero porque la droga fue inyectada, y segundo porque en un paciente con estado mental fluctuante es un riesgo inminente de broncoaspiración."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente cursa con Intoxicación Aguda por Opioides (Heroína, Fentanilo). La vida media de la Naloxona es muy corta (30 a 60 minutos). Por el contrario, los opioides (heroína o metadona) tienen vidas medias de varias horas. Cuando la naloxona desaparece del torrente sanguíneo, el opioide residual vuelve a unirse a los receptores cerebrales y el paciente entra nuevamente en paro respiratorio (re-narcotización). La observación durante al menos 4 horas es obligatoria, y en muchos casos se requiere una bomba de infusión continua de Naloxona.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nEsta es la escena de la película \"Pulp Fiction\" pero en la vida real. Le pones la ampolla, el paciente abre los ojos y hasta te pelea para irse del hospital porque le cortaste su \"viaje\". Doctor, amárralo a la camilla si es necesario o convéncelo de quedarse. Si lo dejas salir, en 45 minutos la Naloxona se metaboliza en su hígado y el opioide que aún navega en su sangre lo manda a dormir para siempre. ¡La vigilancia debe ser total!",
    keyPoints: [
      "Cuando veas:",
      "• Tríada opioide: Miosis puntiforme + Coma + Depresión respiratoria.",
      "• Respuesta favorable a Naloxona.",
      "Debes pensar en:",
      "Riesgo altísimo de re-narcotización (la Naloxona dura menos que el opioide). Observación obligatoria > 4 horas.",
      "Tema: Toxicología / Intoxicación por Opioides."
    ]
  }
];
