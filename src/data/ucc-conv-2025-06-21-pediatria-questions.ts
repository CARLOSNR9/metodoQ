import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición 21 jun 2025 · Bloque Pediatría (#15–#22).
 * Banco exclusivo del examen oficial quincenal.
 */
export const UCC_CONV_2025_06_21_PEDIATRICS_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2025-06-21-15",
    university: "UCC",
    examArea: "Pediatría / Neumología / Urgencias",
    topic: "Pediatría",
    difficulty: "easy",
    tags: ["ucc", "convocatoria", "2025_06_21", "pediatria", "bronquiolitis", "lactante"],
    statement:
      "Lactante masculino de 4 meses de edad es traído a urgencias por cuadro de 3 días de rinorrea hialina y tos leve, que en las últimas 24 horas progresa a dificultad respiratoria y rechazo a la vía oral. Al examen físico: frecuencia cardíaca 150 lpm, frecuencia respiratoria 62 rpm, temperatura 37.8 °C, SpO₂ 93% al aire ambiente. Se observan aleteo nasal y tirajes subcostales moderados; a la auscultación presenta sibilancias espiratorias difusas y estertores finos bilaterales. No tiene antecedentes perinatales de importancia y su esquema de vacunación está al día. ¿Cuál es la conducta MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar nebulización con salbutamol y administrar una dosis de dexametasona intramuscular.",
        distractorProfile: "bronchodilator_steroid_routine",
        incorrectFeedback:
          "El uso rutinario de broncodilatadores y corticoides no está recomendado en bronquiolitis viral típica sin historia de atopia severa o asma previa.",
      },
      {
        id: "B",
        label: "B",
        text: "Manejo de soporte con aspiración de secreciones, oxigenoterapia si lo requiere y mantenimiento de la hidratación.",
      },
      {
        id: "C",
        label: "C",
        text: "Administrar nebulización con solución salina hipertónica al 3% e iniciar amoxicilina oral.",
        distractorProfile: "antibiotic_unproven_therapy",
        incorrectFeedback:
          "Los antibióticos no están indicados en bronquiolitis viral no complicada. La solución salina hipertónica no es de primera línea en urgencias para el manejo inicial.",
      },
      {
        id: "D",
        label: "D",
        text: "Nebulizar con adrenalina racémica y dar de alta con salbutamol inhalado condicional a la tos.",
        distractorProfile: "adrenaline_discharge_bronchiolitis",
        incorrectFeedback:
          "La adrenalina no tiene evidencia a favor para uso rutinario; además, dar de alta a un lactante con dificultad respiratoria moderada y taquipnea es inseguro.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Cuadro clásico de bronquiolitis aguda viral en lactante. Las guías (AAP, OMS) indican manejo de soporte: oxigenación (SpO₂ >90–92%), vía aérea permeable (lavados nasales) e hidratación. No se recomiendan broncodilatadores, corticoides ni antibióticos de forma rutinaria.",
    keyPoints: [
      "Bronquiolitis: soporte con oxígeno, hidratación y succión nasal.",
      "β2-agonistas y corticoides no cambian el curso y no se recomiendan de rutina.",
      "Ingreso si hipoxemia, intolerancia oral o dificultad respiratoria moderada-severa.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-16",
    university: "UCC",
    examArea: "Pediatría / Neumología / Urgencias",
    topic: "Pediatría",
    difficulty: "easy",
    tags: ["ucc", "convocatoria", "2025_06_21", "pediatria", "crupe", "estridor"],
    statement:
      "Niña de 2 años es llevada a urgencias en la madrugada por despertar súbitamente con tos perruna, disfonía y dificultad respiratoria. Su madre refiere febrícula y congestión nasal los dos días previos. Al examen físico: frecuencia cardíaca 135 lpm, frecuencia respiratoria 45 rpm, temperatura 38.0 °C, SpO₂ 94% al aire ambiente. Se evidencia estridor inspiratorio en reposo, aleteo nasal y tirajes supraclaviculares e intercostales moderados. El murmullo vesicular está conservado. ¿Cuál es el manejo inicial MÁS apropiado?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar dexametasona intramuscular y dar de alta médica inmediata.",
        distractorProfile: "steroid_without_adrenaline_observation",
        incorrectFeedback:
          "En crupe moderado-severo con estridor en reposo se requiere adrenalina nebulizada y observación de al menos 2–4 horas, no alta inmediata.",
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar terapia respiratoria con salbutamol inhalado y prednisolona oral por 5 días.",
        distractorProfile: "asthma_treatment_for_croup",
        incorrectFeedback:
          "El salbutamol es ineficaz para la obstrucción de vía aérea superior (edema subglótico) característica del crupe.",
      },
      {
        id: "C",
        label: "C",
        text: "Nebulización con adrenalina (L-epinefrina o racémica) y administración de dexametasona.",
      },
      {
        id: "D",
        label: "D",
        text: "Preparar intubación orotraqueal de secuencia rápida e iniciar hidrocortisona intravenosa.",
        distractorProfile: "premature_intubation_croup",
        incorrectFeedback:
          "La intubación es reservada para crupe inminente a falla respiratoria que no responde a terapia médica; debe intentarse manejo médico primero.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Crupe moderado-severo (estridor en reposo y tirajes): dexametasona (oral, IM o IV) más adrenalina nebulizada para reducción rápida del edema subglótico, con observación posterior.",
    keyPoints: [
      "Crupe leve (sin estridor en reposo): dexametasona dosis única ambulatoria.",
      "Crupe moderado-severo: dexametasona + adrenalina nebulizada + observación 2–4 h.",
      "Salbutamol no tiene utilidad en obstrucción laríngea por crupe.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-17",
    university: "UCC",
    examArea: "Pediatría / Gastroenterología / Urgencias",
    topic: "Pediatría",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "pediatria", "deshidratacion", "diarrea_aguda"],
    statement:
      "Lactante masculino de 18 meses, con peso de 11 kg, es traído al centro de salud por 10 episodios de deposiciones líquidas abundantes y 4 episodios de vómito en las últimas 24 horas. Al examen físico: frecuencia cardíaca 145 lpm, frecuencia respiratoria 32 rpm, temperatura 37.5 °C, SpO₂ 98%. Se encuentra irritable, llora sin lágrimas, los ojos lucen hundidos y el signo del pliegue cutáneo se deshace lentamente (aproximadamente 2 segundos). Bebe ávidamente el suero que le ofrece la madre. Llenado capilar de 2 segundos y pulsos periféricos palpables. ¿Cuál es la conducta MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar un bolo de lactato de Ringer a 20 mL/kg intravenoso en 20 minutos.",
        distractorProfile: "iv_fluids_moderate_dehydration",
        incorrectFeedback:
          "Los líquidos endovenosos (Plan C) están indicados en deshidratación grave con choque, no en un paciente con perfusión conservada.",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar sales de rehidratación oral a 50–100 mL/kg en 4 horas bajo supervisión en la clínica (Plan B).",
      },
      {
        id: "C",
        label: "C",
        text: "Dar de alta con indicaciones de manejo en casa, administrando SRO después de cada deposición (Plan A).",
        distractorProfile: "plan_a_for_moderate_dehydration",
        incorrectFeedback:
          "El Plan A es para niños sin signos de deshidratación. Este paciente tiene signos de algún grado de deshidratación (irritable, ojos hundidos, pliegue lento).",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar loperamida e hidratación oral con líquidos caseros fraccionados.",
        distractorProfile: "loperamide_in_pediatric_diarrhea",
        incorrectFeedback:
          "Los antidiarreicos como la loperamida están contraindicados en pediatría por riesgo de íleo paralítico y megacolon tóxico.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "Algún grado de deshidratación según AIEPI/OMS (irritable, ojos hundidos, bebe ávidamente, pliegue cutáneo lento): Plan B con sales de rehidratación oral 50–100 mL/kg en 4 horas bajo supervisión.",
    keyPoints: [
      "Plan A: sin deshidratación → SRO en casa post-deposición.",
      "Plan B: algún grado de deshidratación → SRO 50–100 mL/kg en 4 h supervisado.",
      "Plan C: deshidratación grave o choque → líquidos IV en bolos.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-18",
    university: "UCC",
    examArea: "Pediatría / Infectología / Neonatología",
    topic: "Pediatría",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "pediatria", "sindrome_febril", "lactante_menor"],
    statement:
      "Neonato masculino de 25 días de vida es traído a urgencias porque se siente caliente, rechaza el seno materno y está inusualmente somnoliento desde hace 12 horas. Al examen físico: frecuencia cardíaca 168 lpm, frecuencia respiratoria 55 rpm, temperatura 38.6 °C, SpO₂ 96%. Lactante irritable a la manipulación, con fontanela normotensa y sin foco infeccioso aparente al examen exhaustivo. ¿Cuál es el manejo inicial MÁS apropiado?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Dar de alta con acetaminofén en gotas y programar control ambulatorio estricto en 24 horas.",
        distractorProfile: "discharge_febrile_neonate",
        incorrectFeedback:
          "Todo neonato (≤28 días) con fiebre tiene alto riesgo de infección bacteriana grave y no debe manejarse ambulatoriamente solo con antipiréticos.",
      },
      {
        id: "B",
        label: "B",
        text: "Solicitar parcial de orina y urocultivo, e iniciar cefixima oral empíricamente mientras se obtienen resultados.",
        distractorProfile: "incomplete_workup_oral_atb",
        incorrectFeedback:
          "El estudio debe ser completo (incluyendo sangre y LCR) y el tratamiento antibiótico debe ser parenteral, no oral.",
      },
      {
        id: "C",
        label: "C",
        text: "Hospitalizar, solicitar hemograma, hemocultivo, urocultivo, punción lumbar e iniciar esquema de antibióticos intravenosos empíricos.",
      },
      {
        id: "D",
        label: "D",
        text: "Hospitalizar y solicitar estudios completos, pero diferir el inicio de antibióticos hasta tener confirmación de infección en LCR.",
        distractorProfile: "delay_antibiotics_for_csf",
        incorrectFeedback:
          "En el neonato febril el inicio de antibióticos empíricos es urgente y no debe retrasarse a la espera de resultados de cultivos o citoquímico de LCR.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "Síndrome febril sin foco en lactante ≤28 días: hospitalización, estudio completo (hemocultivo, urocultivo, punción lumbar) e inicio precoz de antibióticos IV empíricos (ampicilina + cefotaxima o aminoglucósido).",
    keyPoints: [
      "Fiebre en neonato (≤28 días) = ingreso + estudio completo + ATB IV.",
      "Nunca alta ambulatoria en neonato febril sin estudio.",
      "No retrasar antibióticos tras tomar cultivos.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-19",
    university: "UCC",
    examArea: "Pediatría / Neumología / Infectología",
    topic: "Pediatría",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "pediatria", "neumonia_adquirida_comunidad"],
    statement:
      "Niña de 4 años, previamente sana y con vacunas al día, es valorada por cuadro de 3 días de fiebre hasta 39.0 °C, tos húmeda y respiración rápida. Al examen físico: frecuencia cardíaca 125 lpm, frecuencia respiratoria 48 rpm, temperatura 38.8 °C, SpO₂ 94% al aire ambiente. Alerta, tolera la vía oral y no presenta cianosis ni tirajes marcados. A la auscultación pulmonar hay estertores crepitantes localizados en la base pulmonar derecha. ¿Cuál es la conducta MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar azitromicina oral por 5 días y manejo ambulatorio.",
        distractorProfile: "macrolide_monotherapy_typical_pneumonia",
        incorrectFeedback:
          "Los macrólidos no son primera línea para NAC típica en niños de 4 años; se reservan para sospecha de patógenos atípicos más frecuentes en escolares mayores.",
      },
      {
        id: "B",
        label: "B",
        text: "Hospitalizar e iniciar ceftriaxona intravenosa a 50 mg/kg/día.",
        distractorProfile: "unnecessary_admission_uncomplicated_pneumonia",
        incorrectFeedback:
          "No cumple criterios de gravedad (SpO₂ >92%, tolera vía oral, sin distrés severo); el manejo IV no está indicado.",
      },
      {
        id: "C",
        label: "C",
        text: "Solicitar radiografía de tórax y diferir antibiótico hasta obtener panel viral respiratorio.",
        distractorProfile: "delay_treatment_viral_panel",
        incorrectFeedback:
          "Fiebre alta y crépitos focales sugieren neumonía bacteriana típica; no se debe retrasar el antibiótico empírico.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar amoxicilina oral a dosis altas (90 mg/kg/día) y dar manejo ambulatorio con signos de alarma.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "NAC no complicada de probable etiología bacteriana típica (Streptococcus pneumoniae) sin criterios de gravedad: manejo ambulatorio con amoxicilina a altas dosis (80–90 mg/kg/día).",
    keyPoints: [
      "Amoxicilina alta dosis es primera línea en NAC típica ambulatoria.",
      "Hospitalizar si SpO₂ <92%, distrés severo, intolerancia oral o lactante muy pequeño.",
      "Macrólidos si sospecha de neumonía atípica (escolar mayor).",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-20",
    university: "UCC",
    examArea: "Pediatría / Urgencias / Neumología",
    topic: "Pediatría",
    difficulty: "medium",
    tags: ["ucc", "convocatoria", "2025_06_21", "pediatria", "asma_severa", "estado_asmatico"],
    statement:
      "Niño de 7 años con diagnóstico de asma moderada persistente ingresa a urgencias por exacerbación severa de 12 horas de evolución. Durante la primera hora recibió oxígeno suplementario, tres dosis de salbutamol e ipratropio inhalado con cámara espaciadora, y una dosis de metilprednisolona intravenosa. A la reevaluación persiste somnoliento, con frecuencia cardíaca 155 lpm, frecuencia respiratoria 45 rpm y SpO₂ 88% con O₂ por cánula nasal a 2 L/min. Presenta tirajes subcostales y supraclaviculares severos, con silencio auscultatorio bilateral. ¿Cuál es la conducta MÁS apropiada en este momento?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar sulfato de magnesio intravenoso y mantener soporte de oxigenoterapia y broncodilatadores.",
      },
      {
        id: "B",
        label: "B",
        text: "Continuar nebulizaciones continuas con salbutamol cada 20 minutos y observar por 2 horas adicionales.",
        distractorProfile: "delay_escalation_severe_asthma",
        incorrectFeedback:
          "Hay falla respiratoria inminente (somnolencia, silencio auscultatorio, hipoxemia refractaria); retrasar la escalada terapéutica es peligroso.",
      },
      {
        id: "C",
        label: "C",
        text: "Proceder a intubación orotraqueal inmediata y ventilación mecánica invasiva sin otras medidas.",
        distractorProfile: "premature_intubation_asthma",
        incorrectFeedback:
          "Antes de intubar en asma severa refractaria se debe escalar con sulfato de magnesio IV junto con soporte ventilatorio y broncodilatadores.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar una dosis de carga de aminofilina intravenosa como broncodilatador de rescate primario.",
        distractorProfile: "aminophylline_first_line_refractory",
        incorrectFeedback:
          "La aminofilina ha sido desplazada del escalón agudo por su perfil de toxicidad y menor eficacia frente al sulfato de magnesio IV.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Estado asmático severo refractario a SABA, anticolinérgicos y corticoide sistémico: agregar sulfato de magnesio IV como terapia adyuvante antes de ventilación mecánica invasiva.",
    keyPoints: [
      "Asma severa refractaria: SABA + corticoide + MgSO₄ IV.",
      "Falla inminente: silencio auscultatorio, somnolencia, hipoxemia refractaria.",
      "Aminofilina no es rescate de primera línea.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-21",
    university: "UCC",
    examArea: "Pediatría / Neonatología / Infectología",
    topic: "Pediatría",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_06_21", "pediatria", "meningitis_neonatal", "sepsis"],
    statement:
      "Neonato masculino de 10 días de vida, nacido a término (38 semanas) sin complicaciones perinatales documentadas, es ingresado a la unidad de cuidados intensivos neonatales por letargia profunda, fiebre de 38.8 °C, rechazo alimentario y abombamiento de la fontanela anterior. La punción lumbar revela líquido cefalorraquídeo turbio, con 1200 leucocitos/mm³ (90% polimorfonucleares), glucosa 20 mg/dL (glucemia sérica simultánea 95 mg/dL) y proteínas 180 mg/dL. A la espera de tinción de Gram y cultivos, ¿cuál es el esquema antibiótico empírico MÁS apropiado?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar ceftriaxona y vancomicina intravenosa a dosis meníngeas.",
        distractorProfile: "ceftriaxone_in_neonate_kernicterus",
        incorrectFeedback:
          "La ceftriaxona está contraindicada en neonatos por riesgo de kernicterus y no cubre Listeria.",
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar meropenem y aciclovir intravenoso.",
        distractorProfile: "overly_broad_empirical_without_hx",
        incorrectFeedback:
          "Los carbapenémicos no son primera línea empírica salvo brotes de BLEE. El aciclovir se añade si hay sospecha clínica de HSV.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar cefotaxima y clindamicina intravenosa.",
        distractorProfile: "inadequate_listeria_coverage",
        incorrectFeedback:
          "La clindamicina no cubre Listeria monocytogenes ni coliformes entéricos, patógenos clave en sepsis neonatal.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar ampicilina y cefotaxima (o ampicilina y gentamicina) intravenosa.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "Meningitis bacteriana neonatal: patógenos frecuentes GBS, E. coli y Listeria. Esquema empírico: ampicilina + cefotaxima o ampicilina + gentamicina. Evitar ceftriaxona en el primer mes de vida.",
    keyPoints: [
      "Patógenos neonatales: GBS, E. coli, Listeria.",
      "Esquema: ampicilina + cefotaxima o gentamicina.",
      "Ceftriaxona contraindicada en neonatos.",
    ],
  },
  {
    id: "ucc-conv-2025-06-21-22",
    university: "UCC",
    examArea: "Pediatría / Toxicología",
    topic: "Pediatría",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2025_06_21", "pediatria", "intoxicacion", "acetaminofen", "paracetamol"],
    statement:
      "Adolescente femenina de 14 años, con peso de 50 kg, es traída a urgencias por haber ingerido 20 tabletas de acetaminofén de 500 mg (total 10 g) en un intento de suicidio hace exactamente 6 horas. Refiere náuseas leves y un episodio emético. Hemodinámicamente estable, consciente y orientada. Los niveles séricos de acetaminofén a la hora 6 post-ingesta reportan 110 µg/mL, por encima de la línea de tratamiento del nomograma de Rumack-Matthew modificado. ¿Cuál es la conducta MÁS apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar N-acetilcisteína intravenosa u oral según protocolo institucional.",
      },
      {
        id: "B",
        label: "B",
        text: "Administrar una dosis de carbón activado a 1 g/kg y reevaluar niveles en 4 horas.",
        distractorProfile: "charcoal_too_late_omit_nac",
        incorrectFeedback:
          "El carbón activado tiene máxima utilidad en la primera o segunda hora; a las 6 horas no exime del antídoto si los niveles son tóxicos.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar N-acetilcisteína únicamente si las pruebas de función hepática (AST/ALT) muestran elevación.",
        distractorProfile: "wait_for_liver_damage_nac",
        incorrectFeedback:
          "Esperar transaminasas elevadas permite daño hepatocelular; la NAC debe iniciarse precozmente para prevenir hepatotoxicidad.",
      },
      {
        id: "D",
        label: "D",
        text: "Solicitar valoración urgente por nefrología pediátrica para inicio de hemodiálisis temprana.",
        distractorProfile: "hemodialysis_paracetamol_ineffective",
        incorrectFeedback:
          "El tratamiento estándar es N-acetilcisteína, no hemodiálisis rutinaria.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "Intoxicación tóxica (200 mg/kg) con nivel a las 6 h por encima de la línea de tratamiento: iniciar N-acetilcisteína IV u oral de inmediato. La eficacia disminuye si se retrasa más allá de 8–10 horas post-ingesta.",
    keyPoints: [
      "Dosis tóxica única habitual: >150 mg/kg.",
      "Nomograma Rumack-Matthew guía NAC desde 4 h post-ingesta.",
      "NAC precoz previene hepatotoxicidad; no esperar transaminasas.",
    ],
  },
];
