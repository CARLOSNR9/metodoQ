import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UMNG — Edición #1 (26 jul 2026) · Preguntas #01–#10.
 */
export const UMNG_CONV_2026_07_26_01_10_QUESTIONS: TrainingQuestion[] = [
  {
    id: "umng-conv-2026-07-26-01",
    university: "UMNG",
    examArea: "TRAUMA / CIRUGÍA GENERAL",
    topic: "CIRUGÍA GENERAL",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un soldado profesional de 25 años es traído al servicio de urgencias tras sufrir una herida por proyectil de arma de fuego en el abdomen (flanco izquierdo). A su ingreso, está pálido, diaforético, con FC 135 lpm, PA 70/40 mmHg y FR 28 rpm. Responde al llamado pero está confuso. Ruidos respiratorios conservados. Abdomen distendido y doloroso. Se inician maniobras de reanimación. Siguiendo los lineamientos del ATLS (10a edición) en reanimación de control de daños, ¿cuál es el enfoque inicial de fluidoterapia más adecuado antes del control quirúrgico de la hemorragia?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Infusión rápida de 2 litros de cristaloides isotónicos calentados.",
        distractorProfile: "obsolete_guideline_trap",
        incorrectFeedback: "Corresponde a las recomendaciones antiguas del ATLS (8a edición y anteriores). Hoy se sabe que la reanimación masiva con cristaloides antes del control del sangrado aumenta significativamente la mortalidad por coagulopatía dilucional."
      },
      {
        id: "B",
        label: "B",
        text: "Transfusión masiva inmediata guiada por tromboelastografía y cristaloides a necesidad para mantener PAS > 100 mmHg.",
        distractorProfile: "wrong_hemodynamic_target",
        incorrectFeedback: "Aunque la transfusión masiva y la tromboelastografía son ideales en control de daños, el objetivo de PAS > 100 mmHg es erróneo y peligroso. Romperá los coágulos precarios formados en el sitio de la lesión vascular."
      },
      {
        id: "C",
        label: "C",
        text: "Reanimación hipotensiva con bolos pequeños de cristaloides (250-500 cc) o hemoderivados buscando mantener una PAS de 80-90 mmHg."
      },
      {
        id: "D",
        label: "D",
        text: "Administración de vasopresores (noradrenalina) tempranamente para mantener una perfusión cerebral adecuada (PAM > 65 mmHg) mientras se transfunden glóbulos rojos.",
        distractorProfile: "lethal_pharmacological_intervention",
        incorrectFeedback: "Los vasopresores están CONTRAINDICADOS de forma absoluta en el choque hemorrágico traumático inicial. Exprimir un sistema vascular vacío agrava severamente la isquemia tisular, empeora el lactato y puede causar necrosis intestinal o renal."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta un choque hemorrágico severo (Clase III/IV) secundario a un trauma penetrante de abdomen. El concepto fundamental del ATLS en su 10a edición para el trauma penetrante de torso es la Reanimación Hipotensiva (o hipotensión permisiva). El objetivo NO es normalizar la presión arterial, sino mantener una perfusión cerebral mínima (presión arterial sistólica alrededor de 80-90 mmHg o una PAM de 65 mmHg) hasta que se logre el control mecánico (quirúrgico) del sangrado. Aumentar la presión arterial por encima de este nivel con volúmenes masivos \"destapona\" mecánicamente los coágulos inestables que el cuerpo está intentando formar, diluye los factores de coagulación (coagulopatía dilucional) y enfría al paciente (hipotermia), empeorando la Tríada de la Muerte.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nColega, si le metes 2 litros de agua salada a este soldado (como decían los manuales de los años 90), lo vas a desangrar por hipertensión hidrostática. La presión sube, el coágulo blando que tapaba la arteria esplénica sale volando, y la sangre es reemplazada por suero. El paciente llega al quirófano rosado, pero con la sangre convertida en jugo de mora, hipotérmico y sin plaquetas. En trauma penetrante sin trauma craneoencefálico, mantén la presión apenas suficiente para que el paciente hable (cerebro perfundido) y córrele al quirófano.",
    keyPoints: [
      "Cuando veas:",
      "• Trauma penetrante de torso (tórax/abdomen) con choque hemorrágico.",
      "• Necesidad de reanimación hídrica pre-quirúrgica.",
      "Debes pensar en:",
      "Hipotensión permisiva. El objetivo es una PAS de 80-90 mmHg administrando pequeños bolos (250-500 ml) de cristaloides o sangre. Nunca reanimación masiva agresiva temprana.",
      "Tema: ATLS / Choque Hemorrágico."
    ]
  },
  {
    id: "umng-conv-2026-07-26-02",
    university: "UMNG",
    examArea: "MEDICINA TROPICAL / INFECTOLOGÍA",
    topic: "INFECTOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un paciente masculino de 32 años, militar activo, consulta por cuadro de 5 días de evolución consistente en fiebre de 39.5°C de predominio nocturno, escalofríos intensos, cefalea y mialgias. Refiere haber regresado hace 2 semanas de un operativo en zona rural del Guaviare. Al examen físico: escleras ictéricas, palidez mucocutánea y esplenomegalia palpable a 2 cm debajo del reborde costal. Laboratorios: Hb 8.5 g/dL, Plaquetas 95.000, Bilirrubina total 4.2 mg/dL (Directa 1.0 mg/dL). Gota gruesa positiva para Plasmodium falciparum. Según la guía colombiana vigente, ¿cuál es el tratamiento de primera línea indicado?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Cloroquina + Primaquina.",
        distractorProfile: "wrong_species_treatment",
        incorrectFeedback: "Este es el esquema de primera línea en Colombia, pero EXCLUSIVAMENTE para Plasmodium vivax. Darlo en Falciparum es un error grave por las altísimas tasas de resistencia plasmódica a la cloroquina."
      },
      {
        id: "B",
        label: "B",
        text: "Arteméter/Lumefantrina."
      },
      {
        id: "C",
        label: "C",
        text: "Sulfato de Quinina + Clindamicina.",
        distractorProfile: "alternate_pregnancy_regimen",
        incorrectFeedback: "Este esquema se reserva principalmente para mujeres gestantes en el primer trimestre con malaria por falciparum, o como segunda línea si hay falla terapéutica comprobada a los derivados de la artemisinina."
      },
      {
        id: "D",
        label: "D",
        text: "Artesunato intravenoso.",
        distractorProfile: "severe_disease_overestimation",
        incorrectFeedback: "El artesunato IV es el tratamiento salvavidas de elección para la Malaria Severa o Complicada (malaria cerebral, falla renal, distrés respiratorio, parasitemia >5%). El paciente tiene hemólisis, pero no cumple criterios plenos de gravedad inminente que justifiquen saltarse la vía oral de entrada."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta un cuadro clínico y epidemiológico clásico de Malaria no complicada por Plasmodium falciparum. En Colombia, el P. falciparum es resistente a la cloroquina en todo el territorio nacional (especialmente en la región Pacífica y Amazonía/Orinoquía como el Guaviare). La guía del Ministerio de Salud estipula que el tratamiento de primera línea para la infección no complicada por P. falciparum son las Terapias Combinadas basadas en Artemisinina (ACT, por sus siglas en inglés), específicamente la combinación de Arteméter + Lumefantrina (Coartem).\nOjo al dato: Aunque el paciente tiene ictericia (Bilirrubina total > 3.0), esto es a expensas de la indirecta (hemólisis) y, según los criterios estrictos de la OMS, para catalogarla como \"Malaria Severa\", la ictericia debe estar asociada a disfunción de otros órganos (ej. falla renal) o parasitemia > 100.000/µL, dato no provisto. Se maneja de entrada como no complicada.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nEn Colombia no le das cloroquina al Falciparum, punto. Esa es regla de oro. La cloroquina quedó relegada para el Plasmodium vivax (junto con la primaquina para matar los hipnozoítos en el hígado). Si en el examen te ponen Falciparum, buscas automáticamente la opción que diga Arteméter/Lumefantrina. Si te hubiesen dicho que el paciente llegó convulsionando, en coma (Malaria cerebral) o con creatinina en 4.0, ahí sí saltas a la vía intravenosa con Artesunato.",
    keyPoints: [
      "Cuando veas:",
      "• Paciente de zona endémica (Chocó, Guaviare, Amazonas) con fiebre, escalofríos y gota gruesa positiva para P. falciparum.",
      "• Ausencia de coma, falla renal aguda, edema pulmonar o shock (criterios de gravedad).",
      "Debes pensar en:",
      "Malaria por P. falciparum no complicada. Tratamiento: Arteméter + Lumefantrina.",
      "Tema: Infectología Tropical / Malaria."
    ]
  },
  {
    id: "umng-conv-2026-07-26-03",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Primigestante de 17 años con embarazo de 36 semanas, sin controles prenatales regulares, ingresa a urgencias por cefalea global intensa, fosfenos y epigastralgia. Signos vitales: PA 165/115 mmHg, FC 90 lpm, FR 18 rpm, SatO2 96%. Monitoría fetal reactiva. Examen físico: hiperreflexia patelar (3+/4). Laboratorios: creatinina 1.1 mg/dL, AST 120 U/L, ALT 115 U/L, plaquetas 85,000. Se inicia sulfato de magnesio. ¿Cuál es el siguiente paso farmacológico inmediato más apropiado según las guías (ACOG/Fecolsog)?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar Nifedipino oral (acción corta) o Labetalol IV."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar Nitroprusiato de sodio IV.",
        distractorProfile: "toxic_anti-hypertensive",
        incorrectFeedback: "El nitroprusiato cruza la placenta y tiene riesgo de producir toxicidad fetal por cianuro. Solo se usa en el embarazo como última medida desesperada en encefalopatía hipertensiva refractaria a todas las demás drogas."
      },
      {
        id: "C",
        label: "C",
        text: "Terminar el embarazo inmediatamente por cesárea sin control antihipertensivo previo.",
        distractorProfile: "fatal_sequence_trap",
        incorrectFeedback: "La finalización del embarazo es la cura definitiva, pero realizar una intervención quirúrgica mayor (o inducción) en medio de una crisis hipertensiva no controlada expone a la madre a un ACV hemorrágico y desprendimiento de placenta. Estabilización materno-fetal siempre va primero."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar Dexametasona 6 mg IM cada 12 horas para maduración pulmonar y conducta expectante.",
        distractorProfile: "wrong_gestational_age",
        incorrectFeedback: "La maduración pulmonar con corticoides está indicada en embarazos menores de 34 semanas. A las 36 semanas los pulmones ya están maduros y el manejo expectante en una paciente con preeclampsia severa/HELLP está absolutamente contraindicado."
      }
    ],
    correctOptionId: "A",
    explanation: "La paciente tiene una Preeclampsia con Criterios de Severidad (crisis hipertensiva >160/110, síntomas premonitorios de eclampsia como cefalea y fosfenos, y alteración de paraclínicos: trombocitopenia y transaminasas elevadas compatibles con un síndrome de HELLP incipiente). El manejo simultáneo e innegociable en urgencias tiene dos pilares: 1) Profilaxis anticonvulsivante (Sulfato de Magnesio, que ya se inició) y 2) Control agudo de la presión arterial severa. Las guías de ACOG y FECOLSOG establecen que una PA ≥ 160/110 mmHg es una emergencia hipertensiva del embarazo (riesgo de ACV hemorrágico materno) y debe tratarse en los primeros 15-30 minutos con Nifedipino oral (cápsulas de liberación rápida), Labetalol IV o Hidralazina IV.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nColega, si metes a esta niña al quirófano para sacarle el bebé con la presión en 165/115 (Opción C), se te va a morir de un derrame cerebral en la mesa quirúrgica o el anestesiólogo te va a echar de la sala. El embarazo se termina, sí, porque tiene 36 semanas y criterios de severidad, pero NUNCA antes de estabilizar la presión y poner el sulfato de magnesio. Estabilizas primero, operas después.",
    keyPoints: [
      "Cuando veas:",
      "• Gestante > 20 semanas con PA ≥ 160/110 mmHg.",
      "• Presencia de cefalea, escotomas, fosfenos o dolor en epigastrio (Signos de inminencia de eclampsia).",
      "Debes pensar en:",
      "Preeclampsia Severa. Pilares inmediatos: Sulfato de Magnesio + Antihipertensivo agudo (Labetalol IV o Nifedipino oral). La meta es bajar la PA a <160/110, no normalizarla abruptamente.",
      "Tema: Trastornos Hipertensivos del Embarazo."
    ]
  },
  {
    id: "umng-conv-2026-07-26-04",
    university: "UMNG",
    examArea: "PEDIATRÍA",
    topic: "PEDIATRÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Lactante masculino de 6 meses es traído por su madre por presentar desde hace 3 días rinorrea hialina, tos seca y fiebre de 38°C. Desde hace 12 horas nota dificultad para respirar y rechazo a la vía oral. Examen físico: FC 150 lpm, FR 60 rpm, SatO2 88% al ambiente. Tirajes subcostales e intercostales marcados. A la auscultación, sibilancias espiratorias difusas y estertores finos bilaterales. No tiene antecedentes de atopias ni hospitalizaciones previas. ¿Cuál de las siguientes intervenciones tiene mayor evidencia para mejorar el curso clínico de esta enfermedad y está indicada en este momento?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Nebulizaciones con salbutamol cada 20 minutos por una hora.",
        distractorProfile: "asthma_algorithm_applied_to_bronchiolitis",
        incorrectFeedback: "El salbutamol es el pilar de la crisis asmática, pero en bronquiolitis la evidencia actual demuestra que no acorta la estancia hospitalaria, no mejora la saturación a largo plazo y sus efectos adversos superan cualquier leve beneficio transitorio."
      },
      {
        id: "B",
        label: "B",
        text: "Administración de dexametasona oral por 3 a 5 días.",
        distractorProfile: "croup_or_asthma_steroid_trap",
        incorrectFeedback: "Los corticoides sistémicos son la piedra angular del asma y del crupe (laringotraqueítis), pero en la bronquiolitis aguda han demostrado ser ineficaces para modificar el curso de la enfermedad."
      },
      {
        id: "C",
        label: "C",
        text: "Nebulizaciones con solución salina hipertónica al 3%.",
        distractorProfile: "overused_controversial_therapy",
        incorrectFeedback: "Aunque se usó mucho en la década pasada para \"deshidratar\" el moco, las guías recientes (AAP) ya no recomiendan su uso rutinario en urgencias, limitándolo a casos muy selectos en pacientes hospitalizados, pero nunca superior al oxígeno y líquidos básicos."
      },
      {
        id: "D",
        label: "D",
        text: "Oxigenoterapia para mantener SatO2 >90-92% y soporte hídrico adecuado."
      }
    ],
    correctOptionId: "D",
    explanation: "Este lactante cursa con un primer episodio de sibilancias precedido de un cuadro gripal, lo cual define clínicamente a la Bronquiolitis Aguda (el patógeno más común es el Virus Sincitial Respiratorio - VSR). El pilar del tratamiento de la bronquiolitis ha sufrido cambios drásticos. Las guías internacionales actuales (incluyendo la Academia Americana de Pediatría - AAP) son tajantes: la bronquiolitis viral NO se trata con broncodilatadores (los receptores beta-2 del lactante están inmaduros y el problema es moco/edema, no broncoespasmo puro), NO se trata con corticoides sistémicos, y NO requiere terapias respiratorias agresivas de rutina. La única intervención que ha demostrado alterar la morbilidad de manera significativa es el manejo de soporte: oxigenoterapia suplementaria (dado que está desaturado al 88%) y asegurar la hidratación (ya que está rechazando la vía oral).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nEsta es la típica pregunta donde tu corazón de interno quiere formular medicamentos para sentir que estás haciendo algo. Si marcas salbutamol (Opción A), el profesor te va a devolver al pregrado. El bronquio del bebé de 6 meses no está contraído por el músculo liso (asma), está tapado por detritos celulares virales y moco. El salbutamol lo único que le dará será taquicardia severa. Límpiale la nariz con solución salina, ponle oxígeno, hidrátalo y dale tiempo.",
    keyPoints: [
      "Cuando veas:",
      "• Niño < 2 años (típicamente < 6 meses) con primer episodio de sibilancias, pródromo viral y taquipnea.",
      "• Pregunta sobre farmacología o manejo de primera línea.",
      "Debes pensar en:",
      "Bronquiolitis. El manejo es PURAMENTE DE SOPORTE (Líquidos, oxígeno, lavados nasales, antipiréticos). No salbutamol, no corticoides, no antibióticos.",
      "Tema: Infecciones Respiratorias Pediátricas / Bronquiolitis."
    ]
  },
  {
    id: "umng-conv-2026-07-26-05",
    university: "UMNG",
    examArea: "MEDICINA INTERNA - CARDIOLOGÍA",
    topic: "MEDICINA INTERNA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Hombre de 65 años, hipertenso y diabético, acude a urgencias por dolor torácico opresivo retroesternal de 2 horas de evolución, irradiado a mandíbula, asociado a diaforesis. El ECG de los 10 minutos de ingreso muestra supradesnivel del segmento ST de 3 mm en derivadas II, III y aVF, y un infradesnivel en V1-V3. Signos vitales: PA 90/60 mmHg, FC 55 lpm, SatO2 95%. Al examen físico hay ingurgitación yugular, pero los pulmones están limpios (Killip I). ¿Qué intervención farmacológica inicial está CONTRAINDICADA en este escenario específico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Ácido acetilsalicílico 300 mg masticados.",
        distractorProfile: "mandatory_ACS_medication",
        incorrectFeedback: "La aspirina es el pilar antiagregante universal de todo Síndrome Coronario Agudo y nunca debe omitirse ni está contraindicada por el compromiso del ventrículo derecho."
      },
      {
        id: "B",
        label: "B",
        text: "Nitroglicerina sublingual."
      },
      {
        id: "C",
        label: "C",
        text: "Clopidogrel 300 mg vía oral.",
        distractorProfile: "mandatory_dual_antiplatelet",
        incorrectFeedback: "El segundo antiagregante (inhibidor P2Y12) es mandatorio en el infarto con elevación del ST, especialmente previo a angioplastia o trombólisis."
      },
      {
        id: "D",
        label: "D",
        text: "Atorvastatina 80 mg vía oral.",
        distractorProfile: "standard_pleiotropic_therapy",
        incorrectFeedback: "Las estatinas de alta intensidad tienen efecto pleiotrópico estabilizador de placa endotelial y deben administrarse precozmente en todo infarto."
      }
    ],
    correctOptionId: "B",
    explanation: "Estamos ante un paciente con un Infarto Agudo de Miocardio con elevación del ST (IAMCEST) de cara INFERIOR (derivadas II, III y aVF). El dato clínico clave es la hipotensión (90/60), la bradicardia, la ingurgitación yugular y los campos pulmonares limpios. Esta tétrada sugiere fuertemente una extensión del infarto hacia el Ventrículo Derecho (VD), lo cual se sospecha fuertemente por el infarto inferior más los cambios recíprocos/espejo en V1-V3 (o infarto posterior). El ventrículo derecho infartado se vuelve rígido y pierde su fuerza contráctil, por lo que depende ABSOLUTAMENTE de la precarga (retorno venoso) para empujar la sangre hacia el pulmón y luego al ventrículo izquierdo. Los nitratos (nitroglicerina sublingual) son venodilatadores potentes; al administrarlos, la sangre se estanca en las venas, la precarga cae a cero y el paciente entra inmediatamente en choque cardiogénico profundo e irreversible.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nSi a este paciente le das la clásica \"pastillita debajo de la lengua\" (Nitroglicerina) para quitarle el dolor del pecho, lo vas a matar en la camilla de urgencias. Su ventrículo derecho está infartado y atontado; solo bombea si le llega un torrente de sangre a presión desde las cavas. La nitroglicerina dilata las venas de las piernas, la sangre se queda allá abajo, el corazón derecho se seca, el izquierdo se queda sin llenado y el paciente hace un paro. Primero líquidos, después revascularizar. La aspirina, el clopidogrel y la estatina (Opciones A, C y D) se dan SIEMPRE, independientemente de la cara infartada.",
    keyPoints: [
      "Cuando veas:",
      "• IAM de cara INFERIOR (II, III, aVF) + Hipotensión + Ingurgitación yugular + Pulmones limpios.",
      "• Pregunta sobre qué NO HACER.",
      "Debes pensar en:",
      "Infarto de Ventrículo Derecho. Están contraindicados los nitratos (Nitroglicerina), diuréticos, morfina y betabloqueadores. El manejo inicial de rescate es expansores de volumen (Líquidos IV) para forzar la precarga.",
      "Tema: Síndromes Coronarios Agudos / Infarto de VD."
    ]
  },
  {
    id: "umng-conv-2026-07-26-06",
    university: "UMNG",
    examArea: "TOXICOLOGÍA",
    topic: "TOXICOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Campesino de 45 años es llevado a urgencias por su hijo 30 minutos después de haber sido mordido por una serpiente en su pie derecho mientras trabajaba en el campo (zona cafetera). Traen la serpiente muerta y usted identifica que es una Bothrops asper (Talla X). El paciente refiere dolor intenso. Al examen: edema que compromete todo el pie y tercio distal de la pierna, flictenas hemorrágicas alrededor de la mordedura y sangrado activo por el sitio de la herida. Gingivorragia leve. ¿Cuál es la piedra angular del tratamiento inicial?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Aplicación de torniquete proximal y succión del veneno.",
        distractorProfile: "mythical_first_aid_trap",
        incorrectFeedback: "Prácticas absolutamente proscritas. El torniquete isquemiza la extremidad y concentra la acción necrosante del veneno (asegurando la amputación), y la succión no extrae veneno, pero sí inocula bacterias de la boca humana causando infección severa."
      },
      {
        id: "B",
        label: "B",
        text: "Administración de suero antiofídico polivalente sin esperar laboratorios."
      },
      {
        id: "C",
        label: "C",
        text: "Fasciotomía profiláctica inmediata por alto riesgo de síndrome compartimental.",
        distractorProfile: "premature_surgical_intervention",
        incorrectFeedback: "El veneno bothrópico causa un edema masivo que simula un síndrome compartimental clínico, pero es un edema subcutáneo y muscular inflamatorio. La fasciotomía temprana en un paciente coagulopático causará una hemorragia incontrolable. El suero revierte el edema en la mayoría de casos."
      },
      {
        id: "D",
        label: "D",
        text: "Administración de plasma fresco congelado y vitamina K para corregir la coagulopatía antes del suero.",
        distractorProfile: "futile_coagulation_correction",
        incorrectFeedback: "El veneno circulante destruirá instantáneamente cualquier factor de coagulación infundido. Los hemoderivados solo se administran SI persiste sangrado masivo o riesgo vital DESPUÉS de haber neutralizado completamente el veneno con las ampollas de suero antiofídico."
      }
    ],
    correctOptionId: "B",
    explanation: "Estamos frente a un Accidente Ofídico Bothrópico (el 90-95% de los accidentes en Colombia). El veneno de la Bothrops tiene propiedades proteolíticas (causa edema severo, ampollas, mionecrosis) y coagulantes/hemorrágicas (consume fibrinógeno, causando sangrado local y sistémico como la gingivorragia). La presencia de flictenas hemorrágicas, progresión rápida del edema y sangrado a distancia (gingivorragia) clasifica el accidente como Moderado a Severo. La regla fundamental de la toxicología clínica en ofidismo es que la única intervención que salva la extremidad y la vida es la neutralización temprana del veneno con Suero Antiofídico (Antiveneno). Retrasar el suero esperando los tiempos de coagulación es una negligencia absoluta cuando la clínica de envenenamiento sistémico es tan florida.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nEn ofidismo hay dos tipos de médicos: los que piden laboratorios y miran cómo el paciente sangra, y los que canalizan dos venas y pasan el suero antiofídico. Si el paciente ya está sangrando por las encías, sus factores de coagulación están en cero. Ponerle un torniquete (Opción A) es garantizarle una amputación: concentras todo el veneno destructor de músculo en el pie. Y ojo con las transfusiones (Opción D): si le pasas plasma fresco sin haber neutralizado primero el veneno con el suero, las toxinas activas de la serpiente simplemente se \"comerán\" los factores de coagulación nuevos que le acabas de transfundir.",
    keyPoints: [
      "Cuando veas:",
      "• Mordedura por víbora (Bothrops, Mapana, Talla X, Cuatro Narices).",
      "• Edema que progresa rápido, dolor urente, flictenas y/o sangrado.",
      "Debes pensar en:",
      "Aplicación inmediata de Suero Antiofídico Polivalente. Ninguna otra maniobra médica reemplaza al antiveneno.",
      "Tema: Toxicología / Accidente Ofídico."
    ]
  },
  {
    id: "umng-conv-2026-07-26-07",
    university: "UMNG",
    examArea: "CIRUGÍA GENERAL / GASTROENTEROLOGÍA",
    topic: "CIRUGÍA GENERAL",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Mujer de 72 años consulta por dolor abdominal de 48 horas de evolución, localizado inicialmente en epigastrio y ahora focalizado en fosa ilíaca izquierda, asociado a fiebre de 38.5°C y constipación. Signos vitales estables. Al examen físico hay dolor a la palpación profunda en cuadrante inferior izquierdo con defensa muscular localizada. Se solicita un TAC de abdomen contrastado que reporta engrosamiento de la pared del colon sigmoides, alteración de la grasa perocólica y un absceso pélvico de 5 cm (Hinchey II). ¿Cuál es la conducta terapéutica de elección inicial?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Resección de sigmoides con anastomosis primaria y colostomía de protección (Procedimiento de Hartmann).",
        distractorProfile: "overzealous_surgical_intervention",
        incorrectFeedback: "El procedimiento de Hartmann (resección con estoma) es el estándar de oro para los estadios Hinchey III y IV (peritonitis libre), o en pacientes con Hinchey II que cursan con inestabilidad hemodinámica (sepsis) severa o fallan al drenaje. No es la primera línea en un absceso aislado estable."
      },
      {
        id: "B",
        label: "B",
        text: "Lavado peritoneal laparoscópico y drenaje.",
        distractorProfile: "wrong_surgical_indication",
        incorrectFeedback: "Esta técnica controversial se ha propuesto para el estadio Hinchey III (peritonitis purulenta) con el objetivo de evitar el estoma, pero no tiene cabida en un absceso confinado (Hinchey II) que puede resolverse sin entrar al quirófano mediante radiología intervencionista."
      },
      {
        id: "C",
        label: "C",
        text: "Drenaje percutáneo guiado por ecografía o TAC y antibioticoterapia intravenosa."
      },
      {
        id: "D",
        label: "D",
        text: "Manejo médico exclusivo con antibióticos intravenosos de amplio espectro, sin drenaje.",
        distractorProfile: "insufficient_therapy_trap",
        incorrectFeedback: "Los antibióticos solos penetran muy pobremente dentro de una cavidad purulenta encapsulada de gran tamaño (> 4 cm). Tratar un Hinchey II solo con medicamentos tiene un alto riesgo de falla terapéutica y ruptura inminente del absceso a peritonitis."
      }
    ],
    correctOptionId: "C",
    explanation: "El cuadro corresponde a una Enfermedad Diverticular Complicada (Diverticulitis Aguda) clasificada imagenológicamente como Hinchey II (absceso pélvico, retroperitoneal o distante). El algoritmo de manejo quirúrgico mundial para la diverticulitis se basa en la clasificación de Hinchey.\n\nHinchey I (flemón o absceso pericólico pequeño < 4 cm): Manejo médico con antibióticos IV.\n\nHinchey II (absceso pélvico > 4-5 cm): Drenaje percutáneo radiológico + Antibióticos.\n\nHinchey III (peritonitis purulenta generalizada): Cirugía (Hartmann o lavado laparoscópico).\n\nHinchey IV (peritonitis fecaloidea generalizada): Cirugía de urgencia (Procedimiento de Hartmann).\nComo la paciente tiene un absceso de 5 cm pero está hemodinámicamente estable y no tiene signos de peritonitis generalizada (solo defensa localizada), la cirugía mayor abierta de resección (Hartmann) es excesiva como primera línea. El drenaje percutáneo salva a la paciente de la colostomía aguda en el 80% de los casos.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nSi a esta abuelita estable le haces un Hartmann de entrada (Opción A), la condenas a llevar una bolsa de materia fecal en la barriga (colostomía) que, siendo estadísticamente realistas, a sus 72 años tiene altísimas chances de ser permanente. El cirujano moderno drena ese saco de pus con una aguja guiada por TAC, le da antibióticos por vena y la manda a casa. En dos meses, cuando el colon está desinflamado y sano, entra y le quita el pedazo enfermo conectando todo en un solo tiempo quirúrgico.",
    keyPoints: [
      "Cuando veas:",
      "• Paciente con dolor en fosa ilíaca izquierda, fiebre y TAC que muestra absceso > 4 cm (Hinchey II).",
      "• Paciente ESTABLE sin peritonitis generalizada.",
      "Debes pensar en:",
      "Drenaje percutáneo radiológico guiado + Antibióticos. Es la terapia puente estándar para enfriar el proceso y operar de forma electiva semanas después sin necesidad de colostomía.",
      "Tema: Cirugía General / Diverticulitis Aguda."
    ]
  },
  {
    id: "umng-conv-2026-07-26-08",
    university: "UMNG",
    examArea: "MEDICINA INTERNA - NEFROLOGÍA",
    topic: "MEDICINA INTERNA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Hombre de 55 años, con antecedente de enfermedad renal crónica estadio 3b por nefropatía diabética, asiste a urgencias por debilidad generalizada, parestesias y palpitaciones. Se toma un electrocardiograma (ECG) que evidencia ondas T picudas y simétricas, y complejo QRS ancho. Los paraclínicos reportan un Potasio sérico de 7.5 mEq/L. ¿Cuál es el tratamiento de primerísima línea que debe administrarse inmediatamente para proteger al paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Gluconato de calcio intravenoso."
      },
      {
        id: "B",
        label: "B",
        text: "Insulina cristalina + Dextrosa al 50%.",
        distractorProfile: "secondary_step_confused_as_primary",
        incorrectFeedback: "La combinación (solución polarizante) es el tratamiento más rápido para desplazar el potasio desde el plasma hacia el interior de la célula, reduciendo los niveles séricos. Sin embargo, no actúa tan rápido como el calcio y se usa como el segundo paso en el algoritmo, justo después de estabilizar el corazón."
      },
      {
        id: "C",
        label: "C",
        text: "Resinas de intercambio iónico (Patiromer o Kayexalate) por vía oral.",
        distractorProfile: "slow_chronic_therapy",
        incorrectFeedback: "Las resinas quelantes de potasio eliminan el electrolito por vía fecal, pero tardan de horas a días en iniciar su acción, haciéndolas inútiles frente a una emergencia eléctrica aguda."
      },
      {
        id: "D",
        label: "D",
        text: "Furosemida intravenosa a dosis altas.",
        distractorProfile: "ineffective_in_advanced_ckd",
        incorrectFeedback: "Aunque los diuréticos de asa botan potasio por la orina, el paciente tiene Enfermedad Renal Crónica basal, por lo que su tasa de filtración glomerular está reducida, limitando gravemente el efecto kaliurético del fármaco en el escenario agudo."
      }
    ],
    correctOptionId: "A",
    explanation: "Este paciente enfrenta una Hiperpotasemia Severa (K > 6.5 mEq/L) con repercusión electrocardiográfica inminente de paro cardíaco (ondas T picudas y QRS ancho). La elevación aguda del potasio altera gravemente el potencial de reposo de la membrana celular de los cardiomiocitos, predisponiéndolos a arritmias letales (Fibrilación Ventricular o Asistolia). El paso vital, absoluto y primordial en urgencias NO es bajar el potasio primero; es estabilizar la membrana cardíaca. El Gluconato de Calcio (o Cloruro de Calcio) IV restablece el gradiente eléctrico y actúa en minutos para prevenir el paro cardíaco. Su efecto dura apenas 30-60 minutos, tiempo que compras para ahora sí administrar medicamentos que \"escondan\" o eliminen el potasio.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nNunca te confundas en esto. El Calcio NO baja ni una décima el nivel de potasio en la sangre. Es un simple escudo protector temporal para el corazón. Si marcas insulina con dextrosa (Opción B) de primero, mientras preparan la infusión y hace efecto (se demora 15-30 minutos en actuar), el paciente entra en fibrilación ventricular en tu cara. Primero pones la coraza (Calcio) y después le sacas el potasio de la sangre con la insulina, las resinas o la diálisis.",
    keyPoints: [
      "Cuando veas:",
      "• Potasio > 6.5 mEq/L O CUALQUIER nivel elevado de potasio con cambios en el ECG (T picudas, QRS ancho, pérdida de onda P).",
      "• Pregunta por \"primera medida\", \"fármaco más urgente\" o \"para proteger\".",
      "Debes pensar en:",
      "Gluconato de Calcio. Estabiliza el miocardio. (Nota: Si el caso aclara que el paciente toma digital/Digoxina, preferir cloruro de magnesio o usar calcio con extrema cautela).",
      "Tema: Urgencias Metabólicas / Hiperkalemia."
    ]
  },
  {
    id: "umng-conv-2026-07-26-09",
    university: "UMNG",
    examArea: "URGENCIAS / NEUROLOGÍA",
    topic: "NEUROLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Mujer de 28 años ingresa al servicio de urgencias en estado de crisis epiléptica tónico-clónica generalizada. El familiar refiere que lleva convulsionando ininterrumpidamente durante unos 10 minutos desde que salieron de casa. No tiene antecedentes médicos conocidos. Signos vitales: PA 130/80 mmHg, FC 120 lpm, SatO2 90%. Se canaliza acceso venoso periférico de inmediato. ¿Cuál es el medicamento de elección inicial (primera línea) para abortar la crisis en este estatus epiléptico según los algoritmos actuales?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Fenitoína intravenosa a 20 mg/kg.",
        distractorProfile: "second_line_confused_as_first_line",
        incorrectFeedback: "Constituye la segunda línea de tratamiento (Fase de control temprano, 10-30 min). Se administra INMEDIATAMENTE DESPUÉS de las benzodiacepinas para prevenir la recurrencia, pero su lenta velocidad de infusión la hace inútil para abortar la crisis en el instante."
      },
      {
        id: "B",
        label: "B",
        text: "Levetiracetam intravenoso.",
        distractorProfile: "modern_second_line_trap",
        incorrectFeedback: "Al igual que la Fenitoína, es una excelente droga antiepiléptica de segunda fase (con menos efectos secundarios que la fenitoína), pero no es un abortivo agudo de primera línea según los protocolos de soporte vital neurológico."
      },
      {
        id: "C",
        label: "C",
        text: "Ácido valproico intravenoso.",
        distractorProfile: "alternative_second_line",
        incorrectFeedback: "Otra droga de segunda línea avalada para el estatus epiléptico, ideal si el paciente tiene alergia a la fenitoína, pero subordinada siempre a las benzodiacepinas como primer paso."
      },
      {
        id: "D",
        label: "D",
        text: "Lorazepam (o Diazepam/Midazolam) intravenoso."
      }
    ],
    correctOptionId: "D",
    explanation: "La paciente está cursando con un Estatus Epiléptico Convulsivo (definido clínicamente como crisis continua > 5 minutos, o dos o más crisis sin recuperación de la conciencia entre ellas). El algoritmo de la Sociedad Americana de Epilepsia divide el manejo en fases. La Fase de Intervención Inicial (0 a 10 minutos) está monopolizada por una única familia de medicamentos: Las Benzodiacepinas. Al unirse al receptor GABA-A y potenciar la inhibición neuronal, son los fármacos más rápidos y potentes para cortar el circuito eléctrico convulsivo agudo. El Lorazepam IV es la opción número uno en el mundo por su vida media cerebral prolongada. Si no hay Lorazepam (muy común en Colombia), el Diazepam IV o el Midazolam IM/IV son la alternativa directa.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nEn neurología de urgencias, si el cerebro echa chispas, le echas agua con GABA. Ese \"agua\" son las benzodiacepinas. Muchos estudiantes fallan aquí marcando Fenitoína (Opción A). La Fenitoína tarda hasta 20 o 30 minutos en infundirse de forma segura (porque si la pasas rápido causas arritmias mortales y necrosis del tejido venoso). Mientras esos 30 minutos pasan, el cerebro de la paciente se \"sancocha\" por la toxicidad excitatoria del estatus epiléptico. Primero le apagas el fuego con Diazepam/Lorazepam y, ya controlada, le dejas la Fenitoína (o Levetiracetam) para evitar que la crisis vuelva.",
    keyPoints: [
      "Cuando veas:",
      "• Paciente convulsionando en urgencias de forma continua (>5 minutos).",
      "• Acceso venoso disponible.",
      "Debes pensar en:",
      "Primera línea universal para abortar la crisis: Benzodiacepinas (Lorazepam, Diazepam, Midazolam). Las drogas antiepilépticas formales vienen DESPUÉS.",
      "Tema: Urgencias Neurológicas / Estatus Epiléptico."
    ]
  },
  {
    id: "umng-conv-2026-07-26-10",
    university: "UMNG",
    examArea: "SALUD PÚBLICA / INMUNIZACIÓN COLOMBIA",
    topic: "SALUD PÚBLICA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Usted se encuentra realizando su año rural y recibe en consulta de niño sano a un lactante de 6 meses de edad cumplidos. Revisando su carné de vacunación, el niño tiene completo su esquema al nacer, a los 2 meses y a los 4 meses según el PAI (Programa Ampliado de Inmunizaciones) de Colombia. ¿Qué vacunas le corresponden aplicar obligatoriamente hoy en esta visita de los 6 meses?",
    options: [
      {
        id: "A",
        label: "A",
        text: "BCG, Hepatitis B y Polio.",
        distractorProfile: "newborn_schedule_confusion",
        incorrectFeedback: "La BCG es la vacuna del recién nacido. La Hepatitis B como dosis única independiente también se da al nacer (a los 6 meses se da, pero incluida dentro de la jeringa de la Pentavalente)."
      },
      {
        id: "B",
        label: "B",
        text: "Pentavalente, Polio y Neumococo.",
        distractorProfile: "logical_but_false_continuation",
        incorrectFeedback: "El distractor más frecuente. En algunos países el neumococo sí tiene 3 dosis primarias (2, 4, 6), pero el Ministerio de Salud de Colombia adoptó el esquema 2+1, por lo que el refuerzo de neumococo se aplica hasta los 12 meses, no a los 6."
      },
      {
        id: "C",
        label: "C",
        text: "Pentavalente, Polio, Influenza estacional y primera dosis de Sarampión-Rubeola-Paperas (SRP).",
        distractorProfile: "wrong_age_for_live_vaccine",
        incorrectFeedback: "La vacuna Triple Viral (SRP) contiene virus vivos atenuados y su aplicación está programada a los 12 meses (1 año) de edad (con refuerzo a los 18 meses). Aplicarla a los 6 meses resultaría en ineficacia por neutralización con los anticuerpos maternos circulantes."
      },
      {
        id: "D",
        label: "D",
        text: "Pentavalente, Polio e Influenza estacional."
      }
    ],
    correctOptionId: "D",
    explanation: "La pregunta exige memoria estricta del esquema PAI de Colombia. A los 6 meses de edad, a todo lactante se le debe administrar la TERCERA dosis de las vacunas que se iniciaron a los 2 meses (con excepción del Rotavirus y Neumococo que tienen esquemas diferentes).\nLas vacunas que tocan son:\n\nPolio (Tercera dosis, habitualmente oral - VOP, excepto si es población de riesgo).\n\nPentavalente (Tercera dosis que incluye DPT, Haemophilus influenzae tipo b y Hepatitis B).\n\nInfluenza Estacional (Primera dosis pediátrica).\nEl Neumococo (que se puso a los 2 y 4 meses) hace un salto y su refuerzo NO se pone a los 6 meses, sino al año de edad (12 meses).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nLas preguntas del PAI en Colombia son regaladas si tienes la tabla en la mente. El truco clásico de los comités de exámenes es querer hacerte poner el Neumococo y el Rotavirus a los 6 meses (Opción B) solo porque suenan \"lógicos\" luego de darlos a los 2 y a los 4. ¡Falso! En Colombia, el Neumococo es 2, 4 y 12 meses (esquema 2+1). El Rotavirus se acabó a los 4 meses. A los 6 meses se remata con el clásico \"Polio-Penta\" y se suma la Influenza. Memoriza las excepciones, porque de ahí salen las preguntas.",
    keyPoints: [
      "Cuando veas:",
      "• Lactante sano de 6 meses de edad.",
      "• Esquema de vacunación del PAI colombiano.",
      "Debes pensar en:",
      "Tercera dosis de Polio, Tercera dosis de Pentavalente + Primera de Influenza. (Nunca neumococo a los 6 meses, ni fiebre amarilla, ni Triple viral).",
      "Tema: Salud Pública / PAI Colombia."
    ]
  }
];
