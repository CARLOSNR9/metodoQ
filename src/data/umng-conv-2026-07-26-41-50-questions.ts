import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UMNG — Edición #1 (26 jul 2026) · Preguntas #41–#50.
 */
export const UMNG_CONV_2026_07_26_41_50_QUESTIONS: TrainingQuestion[] = [
  {
    id: "umng-conv-2026-07-26-41",
    university: "UMNG",
    examArea: "MEDICINA TROPICAL / INFECTOLOGÍA",
    topic: "INFECTOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un soldado de 19 años es llevado a sanidad militar tras un mes de patrullaje en zona rural de Casanare. Refiere un cuadro de 10 días de fiebre persistente, malestar general y mialgias. Al examen físico: temperatura de 38.5°C, adenopatías cervicales y un hallazgo muy llamativo en su rostro: edema palpebral unilateral derecho, violáceo, indoloro, asociado a hiperemia conjuntival y agrandamiento del ganglio preauricular homolateral. No hay secreción purulenta ocular. Un frotis de sangre periférica evidencia tripomastigotes móviles. ¿Cuál es el diagnóstico clínico y el tratamiento farmacológico de primera línea que debe iniciarse de inmediato para evitar cronicidad?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Leishmaniasis cutánea facial / Antimoniato de meglumina.",
        distractorProfile: "similar_endemic_disease",
        incorrectFeedback: "La Leishmaniasis cutánea produce úlceras crónicas de bordes elevados, no un edema palpebral agudo bipalpebral violáceo, y el frotis mostraría 'amastigotes', no tripomastigotes."
      },
      {
        id: "B",
        label: "B",
        text: "Enfermedad de Chagas aguda (Signo de Romaña) / Benznidazol o Nifurtimox."
      },
      {
        id: "C",
        label: "C",
        text: "Paludismo por Plasmodium vivax / Cloroquina + Primaquina.",
        distractorProfile: "wrong_parasite_and_signs",
        incorrectFeedback: "La malaria causa fiebre y escalofríos, pero no produce el Signo de Romaña y el frotis mostraría el parásito intracelular dentro del glóbulo rojo, no tripomastigotes nadando en el plasma."
      },
      {
        id: "D",
        label: "D",
        text: "Celulitis orbitaria bacteriana / Oxacilina + Ceftriaxona.",
        distractorProfile: "bacterial_mimic",
        incorrectFeedback: "La celulitis orbitaria es dolorosa, eritematosa, caliente y no se diagnostica con un frotis de sangre periférica."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con Tripanosomiasis Americana (Enfermedad de Chagas) en fase aguda. El complejo oftalmoganglionar o Signo de Romaña (edema palpebral unilateral violáceo e indoloro) es patognomónico de la fase aguda de la infección por Trypanosoma cruzi cuando la puerta de entrada es la conjuntiva. En la fase aguda, la parasitemia es altísima y el tratamiento tripanocida (Benznidazol de elección, o Nifurtimox) tiene tasas de curación superiores al 90%.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., diagnosticar un Chagas agudo es como ganarse la lotería en infectología, porque es el único momento en que realmente salvas al paciente. El pito pica de noche cerca del ojo, defeca, el soldado se rasca dormido y mete las heces llenas de parásitos a la conjuntiva. El ojo se hincha como si le hubieran dado un puñetazo, pero no le duele. Métele Benznidazol ya mismo. Si se te pasa este diagnóstico, estás condenando a ese joven a morir de una falla cardiaca irreversible o una arritmia mortal a los 40 años.",
    keyPoints: [
      "Cuando veas:",
      "• Edema bipalpebral UNILATERAL + Indoloro + Zona rural endémica.",
      "Debes pensar en:",
      "Signo de Romaña (Chagas Agudo). Tratamiento: Benznidazol.",
      "Tema: Medicina Tropical / Enfermedad de Chagas."
    ]
  },
  {
    id: "umng-conv-2026-07-26-42",
    university: "UMNG",
    examArea: "TRAUMA / NEUROLOGÍA",
    topic: "NEUROLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un joven de 24 años es ingresado tras caer de un andamio de 5 metros de altura, impactando sobre su espalda. Al ingreso se encuentra alerta, pero no puede mover ni sentir las piernas. Signos vitales: PA 80/40 mmHg, FC 48 lpm, FR 22 rpm. Al examen físico, las extremidades superiores tienen fuerza normal, pero las extremidades inferiores están pléjicas, arreflexicas y llamativamente calientes y rosadas. No hay sangrado externo. El FAST es negativo y la pelvis es estable. Se inician 2 litros de cristaloides isotónicos, pero a los 15 minutos la PA sigue en 82/42 mmHg y la FC en 50 lpm. ¿Cuál es el manejo farmacológico intravenoso de primera línea indicado para este tipo específico de choque?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Infusión continua de Vasopresores (Norepinefrina)."
      },
      {
        id: "B",
        label: "B",
        text: "Transfusión inmediata de 2 unidades de Glóbulos Rojos Empaquetados tipo O negativo.",
        distractorProfile: "hemorrhagic_shock_protocol",
        incorrectFeedback: "Es el manejo del choque hemorrágico. El choque hemorrágico cursa con hipotensión pero con taquicardia y extremidades frías/pálidas, no bradicardia y calor."
      },
      {
        id: "C",
        label: "C",
        text: "Infusión de altas dosis de Metilprednisolona (esquema NASCIS II).",
        distractorProfile: "outdated_steroid_use",
        incorrectFeedback: "Los macrodosis de esteroides para trauma medular agudo han sido RETIRADOS de las guías neuroquirúrgicas recientes por falta de beneficio neurológico y alto riesgo de infecciones."
      },
      {
        id: "D",
        label: "D",
        text: "Administración de Atropina seguida de marcapasos transvenoso.",
        distractorProfile: "symptomatic_bradycardia_focus",
        incorrectFeedback: "La atropina puede usarse temporalmente si la bradicardia es inminentemente mortal, pero no corrige la vasoplejía masiva (hipotensión) que es la raíz del problema distributivo."
      }
    ],
    correctOptionId: "A",
    explanation: "El paciente presenta un Choque Neurogénico secundario a trauma raquimedular (TRM). La tríada hemodinámica paradójica: Hipotensión + BRADICARDIA + Extremidades calientes/rosadas en el contexto de un trauma medular evidente es patognomónica. La sección medular corta las vías simpáticas descendentes. Los vasos sanguíneos pierden su tono y se dilatan masivamente (vasoplejía). Tras un reto de fluidos inicial fallido, el tratamiento OBLIGATORIO es usar un agonista alfa-1 para \"apretar\" los vasos nuevamente, siendo la Norepinefrina el vasopresor de elección.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nEn trauma, la regla general dice que si la presión cae, el corazón se acelera (taquicardia). Si tienes un paciente politraumatizado, chocado, pero con el corazón latiendo relajado a 48 por minuto... ¡alerta roja! Su médula espinal se desconectó. El cerebro no puede mandarle la orden de \"pánico\" a los vasos ni al corazón. Sus arterias están dilatadas como mangueras de bomberos. Tratar de subir esa presión solo con suero es inútil; usa norepinefrina para \"exprimir\" las arterias y devolver la sangre al cerebro.",
    keyPoints: [
      "Cuando veas:",
      "• Trauma + Hipotensión + Bradicardia + Piernas Calientes.",
      "Debes pensar en:",
      "Choque Neurogénico (Pérdida del tono simpático). Manejo: Norepinefrina (vasopresores).",
      "Tema: ATLS / Choque."
    ]
  },
  {
    id: "umng-conv-2026-07-26-43",
    university: "UMNG",
    examArea: "TOXICOLOGÍA / CARDIOLOGÍA",
    topic: "TOXICOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un hombre de 28 años es llevado a urgencias por la policía debido a agitación psicomotora extrema, agresividad y dolor torácico opresivo. Sus amigos confirman el consumo intranasal masivo de cocaína hace 1 hora. Al examen físico: sudoroso, midriático, PA 190/110 mmHg, FC 145 lpm. El ECG muestra isquemia subendocárdica en la pared anterior (infradesnivel del ST). Usted administra Diazepam intravenoso con buena respuesta sedante, pero el dolor torácico persiste y la taquicardia continúa. ¿Cuál de los siguientes medicamentos cardiovasculares está ESTRICTAMENTE CONTRAINDICADO y podría causar la muerte inmediata de este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Nitroglicerina intravenosa.",
        distractorProfile: "indicated_coronary_vasodilator",
        incorrectFeedback: "La Nitroglicerina es fundamental en este caso porque la cocaína causa isquemia principalmente por vasoespasmo coronario severo, y los nitratos alivian el vasoespasmo."
      },
      {
        id: "B",
        label: "B",
        text: "Propranolol o Metoprolol intravenoso."
      },
      {
        id: "C",
        label: "C",
        text: "Fentolamina (Antagonista alfa).",
        distractorProfile: "indicated_alpha_blocker",
        incorrectFeedback: "La Fentolamina (un bloqueador Alfa puro) es precisamente uno de los antídotos ideales para revertir el vasoespasmo y la crisis hipertensiva por cocaína."
      },
      {
        id: "D",
        label: "D",
        text: "Ácido Acetilsalicílico.",
        distractorProfile: "standard_acs_care",
        incorrectFeedback: "El AAS se administra de rutina porque la cocaína también es profundamente protrombótica (activa plaquetas)."
      }
    ],
    correctOptionId: "B",
    explanation: "Los Betabloqueadores (puros como propranolol o metoprolol) son letales aquí por el fenómeno de 'Estímulo Alfa sin oposición' (Unopposed Alpha Stimulation). La cocaína inunda las sinapsis de noradrenalina y adrenalina, estimulando receptores Alfa y Beta. Si bloqueas los receptores Beta, toda la tormenta de catecolaminas se irá EXCLUSIVAMENTE a los receptores Alfa libres. Esto causa un vasoespasmo coronario catastrófico y una crisis hipertensiva fulminante.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la cocaína exprime las glándulas suprarrenales. El paciente está nadando en adrenalina. Si le pones Metoprolol, le estás cerrando la única vía de escape (los receptores beta) a esa presión hiperbárica. Toda la adrenalina se irá a los receptores Alfa de los vasos sanguíneos, los cuales se contraerán con tanta violencia que la presión arterial volará a 250/150 y las arterias coronarias se cerrarán como un torniquete. Bájele la fiesta al cerebro con mucho Diazepam, y dele Nitroglicerina para abrirle las coronarias.",
    keyPoints: [
      "Cuando veas:",
      "• Intoxicación aguda por Cocaína o Anfetaminas + Dolor torácico/Crisis hipertensiva.",
      "Debes pensar en:",
      "NUNCA dar Betabloqueadores. Riesgo de Estímulo Alfa sin oposición. Manejo: Benzodiacepinas + Nitratos/Fentolamina.",
      "Tema: Toxicología / Síndromes Simpaticomiméticos."
    ]
  },
  {
    id: "umng-conv-2026-07-26-44",
    university: "UMNG",
    examArea: "CIRUGÍA GENERAL / GASTROENTEROLOGÍA",
    topic: "CIRUGÍA GENERAL",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Mujer de 65 años con antecedente de colelitiasis conocida asiste a urgencias por un cuadro de 24 horas de dolor en hipocondrio derecho, ictericia en escleras y fiebre de 39.5°C con escalofríos. En las últimas 2 horas, sus familiares la notan muy confusa, respondiendo incoherencias. Al ingreso: PA 85/50 mmHg, FC 125 lpm. Examen físico: ictericia mucocutánea franca, defensa voluntaria en hipocondrio derecho, Glasgow de 12/15. Laboratorios: Leucocitosis de 22,000, Bilirrubina total 7.5 mg/dL (Directa 6.0 mg/dL), Fosfatasa alcalina 450 U/L. Se inician líquidos intravenosos y antibióticos de amplio espectro, pero la paciente persiste hipotensa (PA 88/55 mmHg). ¿Cuál es el tratamiento DEFINITIVO y mandatorio a realizar de urgencia para evitar la muerte inminente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Colecistectomía laparoscópica de urgencia.",
        distractorProfile: "wrong_surgical_target",
        incorrectFeedback: "Sacar la vesícula biliar (colecistectomía) NO resuelve el problema agudo, porque la piedra infectada que está bloqueando el flujo y causando la sepsis está atorada 'más abajo', en el colédoco."
      },
      {
        id: "B",
        label: "B",
        text: "Descompresión biliar urgente mediante Colangiopancreatografía Retrógrada Endoscópica (CPRE)."
      },
      {
        id: "C",
        label: "C",
        text: "Laparotomía exploratoria con lavado peritoneal y colocación de Tubo en T.",
        distractorProfile: "obsolete_open_exploration",
        incorrectFeedback: "La exploración de la vía biliar abierta con Tubo en T es un procedimiento de la era antigua o un último recurso si la CPRE falla, pero no es la primera línea mundial actual por su invasividad en estado crítico."
      },
      {
        id: "D",
        label: "D",
        text: "Administración de Ácido Ursodesoxicólico y terapia vasopresora prolongada.",
        distractorProfile: "ineffective_medical_therapy",
        incorrectFeedback: "El ácido ursodesoxicólico disuelve cálculos pequeños de colesterol a largo plazo; es irrelevante en una urgencia infectológica mecánica."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con Colangitis Aguda Tóxica (Severa), caracterizada por la Péntada de Reynolds: Dolor en HCD + Fiebre + Ictericia (Tríada de Charcot) MÁS Choque (Hipotensión) y Alteración del estado mental (Confusión). El problema mecánico es pus a alta presión en el colédoco. Los antibióticos no penetran vías biliares obstruidas. El gold standard salvavidas es la CPRE urgente. El endoscopista entra por la boca, corta el esfínter de Oddi, saca la piedra y el pus drena hacia el duodeno, revirtiendo el choque.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la vía biliar obstruida e infectada es un tubo cerrado lleno de pus hirviendo bajo presión. Las bacterias pasan directamente a las venas hepáticas causando una bacteriemia masiva. Ponerle antibióticos a esta paciente es como intentar apagar un incendio forestal con una manguera de jardín si no destapas el drenaje. El endoscopista tiene que meter la guía de la CPRE, romper el esfínter y dejar que esa pus caiga al intestino. Sacar la vesícula se deja para meses después.",
    keyPoints: [
      "Cuando veas:",
      "• Tríada de Charcot (Dolor, Fiebre, Ictericia) + Choque + Confusión (Péntada de Reynolds).",
      "Debes pensar en:",
      "Colangitis Tóxica Grave. Tratamiento innegociable = Descompresión Biliar Urgente (CPRE).",
      "Tema: Cirugía General / Patología Biliar."
    ]
  },
  {
    id: "umng-conv-2026-07-26-45",
    university: "UMNG",
    examArea: "TRAUMA / CIRUGÍA DE TÓRAX",
    topic: "CIRUGÍA DE TÓRAX",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un hombre de 30 años llega a urgencias tras recibir una puñalada en el cuarto espacio intercostal izquierdo, línea medio clavicular. Se encuentra cianótico, con disnea severa. Signos vitales: PA 80/50 mmHg, FC 140 lpm. El hemitórax izquierdo no tiene ruidos respiratorios y a la percusión se encuentra marcadamente mate. Se sospecha un Hemotórax Masivo. Se realiza una toracostomía (se coloca un tubo de tórax) en el quinto espacio intercostal izquierdo. Inmediatamente al conectar el tubo a la trampa de agua (Pleurovac), drenan bruscamente 1.600 cc (1.6 Litros) de sangre fresca. Según los protocolos del ATLS, ¿cuál es el paso a seguir de forma imperativa?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Pinzar el tubo de tórax inmediatamente para evitar la exanguinación y el edema de re-expansión.",
        distractorProfile: "harmful_chest_tube_clamping",
        incorrectFeedback: "Pinzar un tubo de tórax en un sangrado activo causa que la sangre se acumule de nuevo en el pecho, generando un taponamiento o colapsando el pulmón otra vez, lo que empeora el choque. El tubo NUNCA se pinza en esta fase."
      },
      {
        id: "B",
        label: "B",
        text: "Traslado inmediato a quirófano para Toracotomía de Emergencia."
      },
      {
        id: "C",
        label: "C",
        text: "Administrar Ácido Tranexámico y vigilar el gasto del tubo de tórax durante 4 horas.",
        distractorProfile: "fatal_delay_in_massive_hemorrhage",
        incorrectFeedback: "Esperar 4 horas vigilando a un paciente que acaba de vaciar la mitad de su volemia (1.5 L) por un tubo de plástico resultará en su fallecimiento en la hora siguiente."
      },
      {
        id: "D",
        label: "D",
        text: "Instilar fibrinolíticos intrapulmonares a través del tubo para evitar que la sangre remanente se coagule.",
        distractorProfile: "wrong_indication_for_fibrinolytics",
        incorrectFeedback: "Los fibrinolíticos intrapleurales se usan días o semanas después para hemotórax retenidos coagulados, NUNCA en un sangrado agudo activo."
      }
    ],
    correctOptionId: "B",
    explanation: "El ATLS (décima edición) establece indicaciones absolutas para Toracotomía de Emergencia en hemotórax: 1) Si el drenaje inicial es ≥ 1.500 cc de sangre (como en este caso, que fueron 1.600 cc). 2) Si el drenaje inicial es menor, pero el sangrado continuo es de ≥ 200 cc/hora durante 2 a 4 horas consecutivas. Ese pulmón o los vasos intercostales mayores están rotos y no dejarán de sangrar; hay que abrir el tórax y suturar el vaso directamente.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el cuerpo humano adulto tiene unos 5 litros de sangre en total. Si al meter el tubo te sale más de un litro y medio al piso, el paciente acaba de perder el 30% de su vida por ese orificio en menos de un segundo. Eso no es un capilar sangrando, eso es una arteria intercostal, la mamaria interna o el mismísimo parénquima pulmonar rebanado. Mientras gritas \"¡sangre O negativo!\", estás llamando al cirujano de turno para que baje volando, porque hay que rajarle el esternón o la axila para agarrar esa arteria con una pinza.",
    keyPoints: [
      "Cuando veas:",
      "• Hemotórax con drenaje por tubo de tórax inicial > 1.500 mL (o > 200 mL/hr por 2-4 hrs).",
      "Debes pensar en:",
      "Indicación de Toracotomía de Emergencia.",
      "Tema: ATLS / Trauma de Tórax."
    ]
  },
  {
    id: "umng-conv-2026-07-26-46",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Una paciente primigestante de 18 años, con embarazo de 35 semanas, está hospitalizada recibiendo Sulfato de Magnesio IV para profilaxis de convulsiones por un diagnóstico de Preeclampsia Severa. En la ronda de la madrugada, usted encuentra a la paciente somnolienta, con dificultad para mantener los ojos abiertos. Al evaluarla, nota que su frecuencia respiratoria es de 8 respiraciones por minuto, y al percutir los tendones rotulianos, los reflejos osteotendinosos están totalmente ausentes (arreflexia 0/4). La diuresis de las últimas 4 horas fue de apenas 50 cc. ¿Cuál es la primera intervención terapéutica y el antídoto específico que debe administrar inmediatamente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Suspender el sulfato de magnesio, asegurar vía aérea e inyectar Gluconato de Calcio al 10% IV."
      },
      {
        id: "B",
        label: "B",
        text: "Acelerar la infusión de cristaloides e inyectar Furosemida intravenosa para barrer el magnesio por la orina.",
        distractorProfile: "delayed_clearance_strategy",
        incorrectFeedback: "Forzar la diuresis es una terapia diferida. La prioridad de los primeros minutos es revertir el paro respiratorio inminente con calcio."
      },
      {
        id: "C",
        label: "C",
        text: "Suspender el sulfato de magnesio e inyectar Naloxona intravenosa para revertir la depresión respiratoria.",
        distractorProfile: "wrong_antidote",
        incorrectFeedback: "La Naloxona es el antídoto para opioides, no antagoniza los canales de calcio/magnesio."
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar Labetalol intravenoso porque estos signos indican progresión inminente a eclampsia (convulsión).",
        distractorProfile: "misinterpretation_of_reflexes",
        incorrectFeedback: "En la preeclampsia empeorando o eclampsia inminente, la paciente presenta hiperreflexia (clonus 3+ o 4+), no arreflexia (0+)."
      }
    ],
    correctOptionId: "A",
    explanation: "El cuadro clínico corresponde a Intoxicación aguda por Sulfato de Magnesio. Tríada de toxicidad: Arreflexia + Depresión respiratoria + Oliguria. Los signos siguen un orden: Pérdida de reflejos patelares (7-10 mEq/L) -> Depresión respiratoria profunda (<12 rpm, >10 mEq/L) -> Paro cardíaco (>15 mEq/L). Ante depresión respiratoria o arreflexia, el primer paso es DETENER LA INFUSIÓN. El segundo es el antídoto fisiológico, el Gluconato de Calcio al 10%, el cual antagoniza directamente al magnesio en la placa neuromuscular.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nEl Sulfato de Magnesio es el mejor amigo del ginecólogo y la peor pesadilla del médico rural descuidado. Si la paciente tiene los riñones tocados por la preeclampsia y no orina, la dosis normal de magnesio se le acumula en dos horas. El magnesio relaja los músculos. Relaja tanto, que primero le afloja las piernas (pierde reflejos), luego le afloja el diafragma (deja de respirar a 8 por minuto) y si te vas a dormir, le afloja el corazón (paro en diástole). El Calcio es el antagonista natural; ten la ampolla pegada a la pared del box cuando uses magnesio.",
    keyPoints: [
      "Cuando veas:",
      "• Paciente en Sulfato de Magnesio con pérdida de reflejos patelares o FR < 12.",
      "Debes pensar en:",
      "Toxicidad por Magnesio. Antídoto inmediato: Gluconato de Calcio al 10% IV (deteniendo la infusión).",
      "Tema: Ginecología y Obstetricia / Preeclampsia y Toxicidad Farmacológica."
    ]
  },
  {
    id: "umng-conv-2026-07-26-47",
    university: "UMNG",
    examArea: "MEDICINA INTERNA / ENDOCRINOLOGÍA URGENCIAS",
    topic: "ENDOCRINOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Hombre de 40 años es traído a urgencias en estado de choque profundo. Familiar relata que el paciente tiene antecedente de artritis reumatoide grave para lo cual toma Prednisona oral 20 mg al día desde hace 2 años, pero debido a un viaje a zona rural hace una semana, se quedó sin sus pastillas y suspendió el medicamento abruptamente. Hace 2 días inició con vómitos severos y dolor abdominal. Al ingreso: estuporoso, PA 70/40 mmHg (que no responde tras infundir 2 Litros de Solución Salina), FC 130 lpm. Laboratorios rápidos revelan: Na+ 126 mEq/L, K+ 6.2 mEq/L, Glucosa 55 mg/dL. ¿Cuál es el tratamiento endovenoso salvavidas que cambiará de inmediato la hemodinamia de este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Hidrocortisona intravenosa a dosis de estrés (bolo de 100 mg)."
      },
      {
        id: "B",
        label: "B",
        text: "Adrenalina intravenosa en infusión continua (vasopresores).",
        distractorProfile: "vasopressor_without_substrate",
        incorrectFeedback: "Los vasopresores no van a funcionar. Si la célula muscular del vaso sanguíneo no tiene cortisol en su interior, los receptores adrenérgicos de la membrana se vuelven ciegos y sordos a las catecolaminas."
      },
      {
        id: "C",
        label: "C",
        text: "Insulina regular con Dextrosa al 50% para proteger el corazón de la hiperkalemia.",
        distractorProfile: "treating_secondary_sign",
        incorrectFeedback: "Darle insulina a un paciente que ya está hipoglucémico (55 mg/dL) es letal. Tratar la hiperkalemia es importante, pero es el síntoma secundario a la falta de aldosterona."
      },
      {
        id: "D",
        label: "D",
        text: "Bicarbonato de sodio para corregir la probable acidosis por el choque.",
        distractorProfile: "treating_acidosis_not_cause",
        incorrectFeedback: "El bicarbonato no ataca la raíz del problema, que es la deficiencia hormonal."
      }
    ],
    correctOptionId: "A",
    explanation: "El diagnóstico es Crisis Adrenal Aguda (Insuficiencia Suprarrenal Aguda). El uso prolongado de esteroides suprime el eje Hipotálamo-Hipófisis-Adrenal. Al suspender bruscamente la Prednisona, las glándulas suprarrenales son incapaces de producir cortisol y aldosterona ante el estrés. La falta de cortisol causa colapso vascular refractario. La falta de aldosterona causa hiponatremia e hiperkalemia. El ÚNICO tratamiento que salva la vida y revierte el choque en minutos es el reemplazo masivo con un glucocorticoide parenteral: Hidrocortisona bolo IV 100 mg.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., este es el \"choque de las tres H\": Hipotensión, Hiponatremia, Hiperkalemia. Sin cortisol, el sistema cardiovascular humano se desmorona como un castillo de naipes. Le puedes poner 10 litros de Lactato de Ringer y litros de noradrenalina, y la presión no va a subir de 70. Los vasos sanguíneos necesitan el cortisol para poder contraerse. Una ampolla de 100 mg de hidrocortisona por la vena en este paciente es mágica; en 30 minutos estará sentado en la cama preguntando por qué está en urgencias.",
    keyPoints: [
      "Cuando veas:",
      "• Choque refractario a líquidos + Hiponatremia + Hiperkalemia + Hipoglucemia.",
      "• Antecedente de suspensión abrupta de esteroides crónicos.",
      "Debes pensar en:",
      "Crisis Adrenal. Manejo inmediato: Bolo IV de Hidrocortisona 100 mg.",
      "Tema: Urgencias Endocrinológicas / Crisis Adrenal."
    ]
  },
  {
    id: "umng-conv-2026-07-26-48",
    university: "UMNG",
    examArea: "UROLOGÍA / ATLS",
    topic: "UROLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un hombre de 35 años sufre un accidente por aplastamiento en la cadera al caerle una carga pesada en el muelle. Al llegar a urgencias, el paciente está hemodinámicamente estable, con dolor pélvico severo. A la inspección de los genitales, usted evidencia un gran hematoma escrotal y perineal en \"alas de mariposa\" y presencia de sangre fresca en el meato uretral (uretrorragia). Al intentar realizar un tacto rectal, el cirujano reporta no palpar la próstata en su posición anatómica habitual (\"próstata flotante\" o ascendida). Ante la necesidad de monitorizar el gasto urinario y evaluar la anatomía, ¿cuál es la conducta MÁS ADECUADA a seguir?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Avanzar con delicadeza una sonda Foley calibre 16 French bien lubricada.",
        distractorProfile: "catastrophic_foley_insertion",
        incorrectFeedback: "El paso de una sonda de Foley en un paciente con una uretra parcialmente desgarrada, convertirá la lesión parcial en una ruptura uretral COMPLETA y definitiva."
      },
      {
        id: "B",
        label: "B",
        text: "Avanzar una sonda nelaton rígida guiada por una guía metálica para vencer el obstáculo.",
        distractorProfile: "aggressive_urethral_injury",
        incorrectFeedback: "Aún peor. Condena al paciente a hemorragias severas, creación de falsas vías, estenosis e impotencia irreversible."
      },
      {
        id: "C",
        label: "C",
        text: "Solicitar una Uretrografía Retrógrada diagnóstica antes de realizar cualquier intento de sondaje."
      },
      {
        id: "D",
        label: "D",
        text: "Realizar un lavado vesical continuo para destapar los coágulos uretrales.",
        distractorProfile: "harmful_irrigation",
        incorrectFeedback: "Meter líquidos a presión para lavar un conducto roto agravará la extravasación de sangre y orina al periné."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta un Trauma Uretral con la tríada clásica: Sangre en el meato + Hematoma perineal + Próstata flotante. Según el protocolo del ATLS, ante cualquier signo de lesión uretral (sangre en el meato, equimosis perineal, próstata flotante o fractura pélvica compleja), el paso mandatorio antes de vaciar la vejiga es evaluar la integridad del conducto mediante una Uretrografía Retrógrada. El sondaje vesical ciego está ABSOLUTAMENTE CONTRAINDICADO.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., si metes una sonda Foley por una uretra que está a punto de cortarse, tu plástico terminará de rasgar el conducto. La orina se saldrá al abdomen, y los nervios de la erección se cortarán. Has salvado la vida del paciente, pero lo dejaste usando pañales, con una sonda de por vida por el ombligo y sufriendo disfunción eréctil permanente. Cuando veas sangre asomando por la punta del pene en un atropellado o aplastado, grita \"¡Nadie toca esa uretra!\" y llama al urólogo.",
    keyPoints: [
      "Cuando veas:",
      "• Sangre en el meato + Trauma Pélvico / Próstata flotante.",
      "Debes pensar en:",
      "¡PROHIBIDO PASAR SONDA FOLEY! Siguiente paso obligatorio: Uretrografía Retrógrada.",
      "Tema: ATLS / Trauma Genitourinario."
    ]
  },
  {
    id: "umng-conv-2026-07-26-49",
    university: "UMNG",
    examArea: "PEDIATRÍA / INFECTOLOGÍA",
    topic: "PEDIATRÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un cadete de 18 años, residente en los alojamientos del batallón, fallece 12 horas después de ser ingresado a la UCI militar con un cuadro de fiebre de 40°C, rigidez de nuca, alteración del estado de conciencia y la aparición de un exantema petequial purpúrico que progresó rápidamente a equimosis generalizadas. El cultivo de líquido cefalorraquídeo reporta diplococos Gram negativos. Sanidad militar debe intervenir de inmediato para evitar un brote en el batallón. Para los cadetes sanos que compartían la misma habitación y el comedor con el paciente, ¿cuál es la profilaxis antibiótica post-exposición de elección recomendada por las guías para erradicar el estado de portador nasofaríngeo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Amoxicilina oral por 10 días.",
        distractorProfile: "poor_mucosal_penetration",
        incorrectFeedback: "Las penicilinas clásicas curan la enfermedad activa en el SNC, pero no logran alcanzar concentraciones altas en la mucosa nasofaríngea para erradicar el estado de portador."
      },
      {
        id: "B",
        label: "B",
        text: "Ciprofloxacina oral en dosis única, o Rifampicina oral por 2 días."
      },
      {
        id: "C",
        label: "C",
        text: "Vancomicina intravenosa en dosis única.",
        distractorProfile: "wrong_route_and_spectrum",
        incorrectFeedback: "La Vancomicina se usa en el tratamiento empírico para S. pneumoniae resistente, pero no como profilaxis oral."
      },
      {
        id: "D",
        label: "D",
        text: "Aislamiento respiratorio estricto sin necesidad de antibióticos profilácticos.",
        distractorProfile: "passive_public_health_failure",
        incorrectFeedback: "La meningococcemia es una urgencia epidémica; dejar a los contactos estrechos sin profilaxis asegura nuevos casos fatales."
      }
    ],
    correctOptionId: "B",
    explanation: "El cuadro es de Meningitis Meningocócica fulminante por Neisseria meningitidis (diplococo Gram negativo). La profilaxis está indicada ÚNICAMENTE para contactos estrechos (quienes duermen en la misma habitación, compañeros de trinchera). El objetivo es matar la bacteria en la garganta antes de que invada. Las guías recomiendan: Ciprofloxacina 500 mg PO (dosis única), Rifampicina PO (cada 12h por 2 días), o Ceftriaxona 250 mg IM (dosis única).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nEl meningococo es la bacteria que más asusta a los médicos militares y pediatras. Puede matar a un muchacho sano en menos de 12 horas haciendo un coágulo en cada vaso capilar de su piel y adrenales. Se transmite por gotitas de saliva al dormir o hablar de cerca. A los amigos del dormitorio no les das jarabe de amoxicilina; les das una pastilla de Ciprofloxacina de inmediato. ¡Ojo! Al enfermero que solo le tomó la presión arterial no le toca profilaxis; solo a los \"contactos íntimos\" respiratorios.",
    keyPoints: [
      "Cuando veas:",
      "• Meningitis + Rash petequial fulminante en ambientes cerrados.",
      "Debes pensar en:",
      "Meningococo (Neisseria meningitidis). Profilaxis contactos estrechos: Ciprofloxacina 500mg dosis única o Rifampicina por 2 días.",
      "Tema: Salud Pública / Profilaxis Meningitis."
    ]
  },
  {
    id: "umng-conv-2026-07-26-50",
    university: "UMNG",
    examArea: "PEDIATRÍA / URGENCIAS",
    topic: "PEDIATRÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Lactante masculino de 14 meses de edad es traído a urgencias desde una zona rural tras presentar 10 episodios de diarrea acuosa profusa (como \"agua de arroz\") y 5 vómitos desde hace 24 horas. Al ingreso, el niño está marcadamente letárgico, ojos severamente hundidos y fontanela deprimida. Al examen físico: PA no audible, FC 170 lpm (pulsos radiales filiformes, casi imperceptibles), llenado capilar de 5 segundos, y el pliegue cutáneo abdominal se deshace muy lentamente (Signo del pliegue positivo >2 seg). Según la estrategia AIEPI y las directrices de reanimación pediátrica, ¿cuál es la conducta hídrica OBLIGATORIA E INMEDIATA a seguir?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar Sales de Rehidratación Oral (SRO) a sorbos pequeños o por sonda nasogástrica bajo el \"Plan C\".",
        distractorProfile: "enteral_in_shock",
        incorrectFeedback: "Intentar rehidratación oral o nasogástrica en un paciente letárgico, vomitando y en CHOQUE es inútil y letal por riesgo de aspiración."
      },
      {
        id: "B",
        label: "B",
        text: "Canalizar acceso venoso/intraóseo y administrar un bolo rápido de Solución Salina Normal (o Lactato de Ringer) a 20 cc/kg."
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar infusión de Solución Salina Normal a dosis de mantenimiento (Regla de Holliday-Segar) más las pérdidas estimadas.",
        distractorProfile: "maintenance_instead_of_resuscitation",
        incorrectFeedback: "La regla de Holliday-Segar se usa para calcular el mantenimiento de 24 horas una vez que el paciente ya está reanimado y estable. No salva al paciente del choque agudo."
      },
      {
        id: "D",
        label: "D",
        text: "Canalizar acceso venoso y administrar un bolo rápido de Dextrosa al 5% en Agua Destilada a 10 cc/kg para corregir posible hipoglucemia.",
        distractorProfile: "hypotonic_fluid_in_shock",
        incorrectFeedback: "Jamás se debe hacer expansión de volumen con soluciones hipotónicas. Al no tener sodio, el agua abandona los vasos sanguíneos causando edema cerebral y no sube la presión."
      }
    ],
    correctOptionId: "B",
    explanation: "El niño está en Deshidratación Severa complicada con Choque Hipovolémico Descompensado (letargia, PA no audible, pulsos filiformes). El paso salvavidas inmediato mundial en pediatría (PALS) para un niño en choque (no cardiogénico) es la administración de bolosos rápidos de cristaloides isotónicos (SSN 0.9% o Lactato de Ringer) a dosis de 20 cc/kg de peso, pasados tan rápido como sea posible. Si no hay respuesta tras el primer bolo, se repite hasta 2 o 3 veces (60 cc/kg totales) hasta que retorne el pulso.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., si a este bebé le pasas los líquidos usando la fórmula de Holliday-Segar, gotita a gotita en la bomba de infusión, hará un paro cardiaco por corazón vacío en 15 minutos. Sus venas están secas. Tienes que meterle 20 centímetros cúbicos por cada kilo de peso, empujando la jeringa con fuerza tú mismo por el catéter. Y si no le encuentras la vena en 90 segundos porque están colapsadas, ¡no lo dudes! Agarra el taladro intraóseo, trépale la aguja en la tibia proximal y pásale el suero por la médula ósea. ¡Salva a ese niño!",
    keyPoints: [
      "Cuando veas:",
      "• Deshidratación severa CON Signos de CHOQUE (Pulsos débiles, letargia, PA inaudible).",
      "Debes pensar en:",
      "BOLO 20 ml/kg de Solución Salina Normal o Lactato de Ringer (rápido en 10-15 min). Vía IV o Intraósea.",
      "Tema: Pediatría / Reanimación Pediátrica PALS."
    ]
  }
];
