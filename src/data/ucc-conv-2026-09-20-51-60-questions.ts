import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #8 (20 sep 2026) · Preguntas #51–#60.
 * Banco exclusivo del examen oficial.
 */
export const UCC_CONV_2026_09_20_51_60_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2026-09-20-51",
    university: "UCC",
    examArea: "CIRUGÍA GENERAL - GASTROENTEROLOGÍA",
    topic: "Apendicitis Aguda",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "apendicitis-aguda"],
    statement:
      "Un hombre de 24 años, previamente sano, consulta a urgencias por dolor abdominal de 18 horas de evolución que inició como un dolor difuso periumbilical de tipo cólico, asociado a anorexia y náuseas, y que en las últimas 6 horas se ha localizado e intensificado en la fosa ilíaca derecha, haciéndose constante. Refiere un episodio de vómito y febrícula subjetiva. Al examen físico: temperatura 38.1°C, FC 96 lpm, abdomen con dolor intenso a la palpación profunda en el punto de McBurney, defensa muscular voluntaria localizada, signo de Rovsing positivo y signo del psoas positivo; no hay masas palpables ni signos de irritación peritoneal generalizada. Los laboratorios muestran leucocitosis de 14.200/mm³ con 82% de neutrófilos y desviación a la izquierda; la PCR está moderadamente elevada. El score de Alvarado calculado es de 9/10. No hay comorbilidades ni contraindicaciones quirúrgicas. ¿Cuál es la conducta MÁS APROPIADA en este momento?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Llevar al paciente directamente a apendicectomía (preferiblemente laparoscópica) de urgencia, sin requerir estudios de imagen adicionales, dado el alto puntaje de Alvarado y la presentación clínica clásica.",
      },
      {
        id: "B",
        label: "B",
        text: "Solicitar tomografía computarizada de abdomen con contraste de forma sistemática antes de decidir el manejo, independientemente de la probabilidad clínica pretest.",
        distractorProfile: "unnecessary_imaging_in_high_pretest_probability",
        incorrectFeedback:
          "En pacientes con presentación clínica clásica y un score de Alvarado alto (≥7-9), la probabilidad de apendicitis es tan elevada que la imagen sistemática solo retrasa el tratamiento sin cambiar la conducta; la TAC se reserva para casos con presentación atípica, score intermedio o diagnóstico dudoso (por ejemplo, en mujeres en edad fértil para descartar patología ginecológica).",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar manejo exclusivamente antibiótico ambulatorio (sin cirugía), dado que existe evidencia de que la apendicitis no complicada puede resolverse solo con antibióticos.",
        distractorProfile: "overextension_of_nonoperative_trial_evidence",
        incorrectFeedback:
          "Aunque algunos ensayos han explorado el tratamiento antibiótico exclusivo en apendicitis no complicada seleccionada (sin apendicolito, sin signos de perforación, en centros con seguimiento estricto), este NO es el estándar de manejo ni debe ofrecerse de forma ambulatoria sin observación hospitalaria; la apendicectomía continúa siendo el tratamiento de elección por su menor tasa de recurrencia y de fracaso terapéutico.",
      },
      {
        id: "D",
        label: "D",
        text: "Dar salida con analgesia y control ambulatorio en 48 horas, ya que el paciente está hemodinámicamente estable.",
        distractorProfile: "dangerous_outpatient_discharge_of_surgical_abdomen",
        incorrectFeedback:
          "Un paciente con signos claros de apendicitis aguda (Alvarado 9/10, defensa localizada, leucocitosis con neutrofilia) tiene riesgo inminente de progresar a perforación si no se trata; darlo de alta retrasa la cirugía y aumenta significativamente el riesgo de apendicitis complicada, peritonitis y sepsis.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "El paciente cursa con una **Apendicitis Aguda no complicada**, la causa quirúrgica más frecuente de abdomen agudo. La secuencia clásica —dolor periumbilical difuso que migra y se localiza en fosa ilíaca derecha, anorexia, náuseas, febrícula— junto con los signos de McBurney, Rovsing y psoas positivos, y la leucocitosis con neutrofilia, configuran un cuadro de altísima probabilidad clínica, reflejado en un score de Alvarado ≥7-9 (que predice apendicitis aguda con alta sensibilidad y especificidad). En pacientes con esta presentación clásica y sin factores que generen duda diagnóstica (edad, sexo, comorbilidad, atipia clínica), las guías actuales NO recomiendan imagen sistemática, porque no modifica la conducta y solo retrasa la cirugía, aumentando el riesgo de progresión a perforación. El tratamiento estándar continúa siendo la **apendicectomía**, preferiblemente por vía laparoscópica por su menor morbilidad, menor estancia hospitalaria y mejor recuperación, salvo contraindicación específica.",
    keyPoints: [
      "Dolor periumbilical que migra y se localiza en fosa ilíaca derecha + anorexia + signos de McBurney/Rovsing/psoas positivos.",
      "Apendicitis Aguda no complicada. Con score de Alvarado alto y presentación clásica, la imagen NO es obligatoria: el manejo definitivo es la apendicectomía (preferiblemente laparoscópica) sin retraso.",
      "Apendicitis Aguda / Abdomen Agudo Quirúrgico.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-52",
    university: "UCC",
    examArea: "CIRUGÍA GENERAL - GASTROENTEROLOGÍA",
    topic: "Colecistitis Aguda",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "colecistitis-aguda"],
    statement:
      "Una mujer de 47 años, con antecedente de colelitiasis conocida, consulta por dolor en hipocondrio derecho de 30 horas de evolución, de tipo cólico que se ha vuelto constante, asociado a fiebre de 38.6°C y vómito. Al examen físico presenta signo de Murphy positivo, sin signos de irritación peritoneal generalizada. Laboratorios: leucocitos 15.800/mm³, PCR elevada, función hepática y bilirrubinas normales. La ecografía abdominal muestra vesícula biliar con pared engrosada (5 mm), líquido pericolecístico y múltiples cálculos, sin dilatación de la vía biliar. Según los Criterios de Tokio (TG18), se clasifica como Colecistitis Aguda Grado I-II (leve a moderada), sin disfunción orgánica. La paciente no tiene comorbilidades significativas y es candidata quirúrgica de bajo riesgo. ¿Cuál es la conducta MÁS APROPIADA respecto al momento de la cirugía?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Manejo exclusivamente médico con antibióticos durante 6 semanas, difiriendo la colecistectomía a un tiempo electivo posterior para permitir que 'se enfríe' la inflamación.",
        distractorProfile: "outdated_delayed_surgery_paradigm",
        incorrectFeedback:
          "El enfoque de diferir la cirugía 6 semanas ('cooling-off period') es una práctica antigua; la evidencia actual demuestra que la colecistectomía temprana es segura, reduce la estancia hospitalaria total y el riesgo de recurrencia de eventos biliares (colecistitis recurrente, coledocolitiasis, pancreatitis) sin aumentar la tasa de conversión a cirugía abierta ni de complicaciones cuando se realiza en la ventana adecuada.",
      },
      {
        id: "B",
        label: "B",
        text: "Colecistectomía abierta programada de forma obligatoria, evitando el abordaje laparoscópico por el riesgo de conversión en el contexto agudo.",
        distractorProfile: "unnecessary_open_approach",
        incorrectFeedback:
          "La vía laparoscópica es el abordaje de elección incluso en colecistitis aguda temprana, con menor dolor postoperatorio, menor estancia y recuperación más rápida; la conversión a cirugía abierta se reserva para casos con anatomía difícil o hallazgos intraoperatorios que la justifiquen, no debe indicarse de entrada como obligatoria.",
      },
      {
        id: "C",
        label: "C",
        text: "Colecistectomía laparoscópica temprana, idealmente dentro de las primeras 72 horas desde el inicio de los síntomas (y en todo caso antes de 7-10 días), dado que la paciente es candidata quirúrgica de bajo riesgo con colecistitis grado I-II.",
      },
      {
        id: "D",
        label: "D",
        text: "Colecistostomía percutánea guiada por imagen como tratamiento definitivo, seguida de manejo antibiótico ambulatorio sin cirugía posterior.",
        distractorProfile: "wrong_indication_for_percutaneous_drainage",
        incorrectFeedback:
          "La colecistostomía percutánea es un procedimiento de rescate reservado para pacientes de alto riesgo quirúrgico o falla de manejo médico (grado III o comorbilidad severa que contraindique la cirugía), no para una paciente joven, de bajo riesgo y candidata a colecistectomía definitiva; además, no reemplaza a la colecistectomía como tratamiento definitivo, ya que la vesícula permanece in situ y expuesta a recurrencia.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "La paciente cursa con una **Colecistitis Aguda Litiásica**, diagnosticada según los **Criterios de Tokio (TG18)**, que combinan signos locales de inflamación (Murphy positivo, masa/dolor/defensa en hipocondrio derecho), signos sistémicos de inflamación (fiebre, leucocitosis, PCR elevada) y hallazgos ecográficos característicos (engrosamiento de pared vesicular ≥4 mm, líquido pericolecístico, cálculo impactado). La severidad se clasifica en Grado I (leve), Grado II (moderada: leucocitosis >18.000, masa palpable dolorosa, duración >72h, o inflamación marcada) y Grado III (severa: con disfunción orgánica asociada). En pacientes sin disfunción orgánica y con bajo riesgo quirúrgico-anestésico, la evidencia actual (respaldada por las guías TG18 y múltiples ensayos aleatorizados) favorece firmemente la **colecistectomía laparoscópica temprana**, idealmente dentro de las primeras 72 horas del inicio de síntomas, ya que reduce la estancia hospitalaria global, evita el riesgo de recurrencia o complicación mientras se espera la cirugía electiva, y no incrementa la morbimortalidad comparada con la cirugía diferida.",
    keyPoints: [
      "Murphy positivo + fiebre + leucocitosis + hallazgos ecográficos de pared vesicular engrosada y líquido pericolecístico = Colecistitis Aguda por Criterios de Tokio (TG18).",
      "En pacientes de bajo riesgo sin disfunción orgánica (Grado I-II): Colecistectomía laparoscópica TEMPRANA (idealmente <72h). La colecistostomía percutánea se reserva para pacientes de alto riesgo quirúrgico o Grado III.",
      "Colecistitis Aguda / Criterios de Tokio y Momento Quirúrgico.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-53",
    university: "UCC",
    examArea: "CIRUGÍA GENERAL - GASTROENTEROLOGÍA",
    topic: "Obstrucción Intestinal por Bridas",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "obstruccion-intestinal-por-bridas"],
    statement:
      "Una mujer de 56 años, con antecedente de histerectomía abdominal hace 12 años, consulta por dolor abdominal tipo cólico de 24 horas de evolución, distensión abdominal progresiva, múltiples episodios de vómito bilioso y ausencia de deposiciones y flatos en las últimas 18 horas. Al examen físico: abdomen distendido, timpánico, con ruidos hidroaéreos de lucha (aumentados, tipo metálico), dolor difuso leve a la palpación sin defensa ni signos de irritación peritoneal, sin masas ni cicatrices con eventración. Signos vitales normales, sin fiebre. Laboratorios: leucocitos 9.200/mm³, sin acidosis ni elevación de lactato. La radiografía de abdomen en bipedestación muestra múltiples asas de intestino delgado dilatadas con niveles hidroaéreos escalonados, sin aire libre subdiafragmático y con ausencia de gas en el colon distal. Ante la sospecha de obstrucción intestinal por bridas/adherencias postquirúrgicas, y en ausencia de signos de estrangulación, ¿cuál es la conducta INICIAL más apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Laparotomía exploratoria inmediata, dado que el antecedente quirúrgico confirma que la causa es adherencial y requiere lisis quirúrgica de las bridas sin demora.",
        distractorProfile: "unnecessary_surgery_without_trial_of_conservative_management",
        incorrectFeedback:
          "En ausencia de signos de estrangulación (fiebre, taquicardia, defensa/irritación peritoneal, acidosis, leucocitosis marcada o elevación de lactato), la mayoría de las obstrucciones por bridas se resuelven con manejo conservador; operar de entrada expone a la paciente a los riesgos de una laparotomía innecesaria y a la formación de nuevas adherencias.",
      },
      {
        id: "B",
        label: "B",
        text: "Colonoscopia descompresiva urgente para aliviar la distensión y resolver la obstrucción.",
        distractorProfile: "wrong_procedure_for_wrong_anatomic_level",
        incorrectFeedback:
          "La colonoscopia descompresiva está indicada en obstrucción colónica (por ejemplo, vólvulo de sigmoides o pseudo-obstrucción colónica/Ogilvie), no en obstrucción de intestino delgado; los hallazgos radiológicos (asas de delgado dilatadas, ausencia de gas colónico distal) confirman que el nivel de obstrucción es el intestino delgado, donde este procedimiento no tiene ningún rol.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar nutrición parenteral total de inmediato, sin intentar previamente la descompresión con sonda nasogástrica ni el reposo intestinal.",
        distractorProfile: "premature_intervention_skipping_first_line_measures",
        incorrectFeedback:
          "La nutrición parenteral total no es el primer paso en el manejo de una obstrucción intestinal no complicada; antes de considerarla se debe intentar la descompresión nasogástrica y el reposo intestinal, reservando el soporte nutricional avanzado para obstrucciones prolongadas que no resuelven.",
      },
      {
        id: "D",
        label: "D",
        text: "Manejo conservador inicial: descompresión con sonda nasogástrica, reposo intestinal (nada por vía oral), corrección hidroelectrolítica con líquidos IV y vigilancia clínica estrecha, reservando la cirugía para falla del manejo conservador (usualmente evaluada a las 48-72 horas) o aparición de signos de estrangulación.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "La paciente cursa con una **Obstrucción Intestinal Mecánica de Intestino Delgado**, cuya causa más frecuente en adultos con cirugía abdominal previa son las **bridas/adherencias postquirúrgicas**. El cuadro clínico clásico incluye dolor cólico, distensión, vómito y detención del tránsito intestinal, con hallazgos radiológicos de asas de delgado dilatadas con niveles hidroaéreos y ausencia de gas distal. La distinción crítica es diferenciar una obstrucción **simple** (sin compromiso vascular) de una **complicada/estrangulada** (con isquemia intestinal), esta última sugerida por fiebre, taquicardia, dolor desproporcionado o constante, defensa/irritación peritoneal, leucocitosis marcada y elevación de lactato. En ausencia de estos signos de alarma, como en este caso, el manejo inicial estándar es **conservador**: sonda nasogástrica para descompresión, ayuno, reposición hidroelectrolítica adecuada y observación clínica seriada, ya que hasta el 70-80% de las obstrucciones adherenciales simples resuelven sin cirugía. Si no hay mejoría en 48-72 horas, o si en cualquier momento aparecen signos de estrangulación, está indicada la laparotomía/laparoscopia exploratoria.",
    keyPoints: [
      "Antecedente de cirugía abdominal previa + dolor cólico + distensión + vómito + detención de tránsito, sin signos de irritación peritoneal ni marcadores de isquemia.",
      "Obstrucción Intestinal por Bridas no complicada: manejo conservador inicial (SNG + NPO + líquidos IV + vigilancia 48-72h). Cirugía si falla el manejo conservador o aparecen signos de estrangulación (fiebre, taquicardia, defensa, lactato elevado).",
      "Obstrucción Intestinal / Bridas y Adherencias Postquirúrgicas.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-54",
    university: "UCC",
    examArea: "CIRUGÍA GENERAL - GASTROENTEROLOGÍA",
    topic: "Úlcera Péptica Perforada",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "ulcera-peptica-perforada"],
    statement:
      "Un hombre de 57 años, con antecedente de uso crónico de AINES por osteoartritis, consulta por dolor epigástrico súbito e intenso que en las últimas 3 horas se ha generalizado a todo el abdomen. Al examen físico luce pálido y diaforético, con abdomen 'en tabla' (rigidez generalizada involuntaria), dolor a la descompresión difuso, y ruidos intestinales ausentes. Signos vitales: PA 95/60 mmHg, FC 118 lpm, temperatura 37.8°C. Una radiografía de tórax en bipedestación muestra aire libre subdiafragmático bilateral. Los laboratorios muestran leucocitosis de 17.500/mm³. Ante el diagnóstico de perforación de víscera hueca por úlcera péptica, ¿cuál es la conducta MÁS APROPIADA?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Manejo conservador (método de Taylor, no quirúrgico) con sonda nasogástrica, inhibidor de bomba de protones y antibióticos, sin cirugía, dado que el paciente tolera el dolor.",
        distractorProfile: "nonoperative_management_misapplied_to_diffuse_peritonitis",
        incorrectFeedback:
          "El manejo no quirúrgico (método de Taylor) es una opción válida solo en pacientes seleccionados, hemodinámicamente estables, SIN signos de peritonitis generalizada, y en quienes un estudio con contraste hidrosoluble confirma que la perforación está sellada; este paciente tiene abdomen en tabla con irritación peritoneal difusa y aire libre masivo, lo que obliga a manejo quirúrgico urgente.",
      },
      {
        id: "B",
        label: "B",
        text: "Reanimación con líquidos IV, antibióticos de amplio espectro e inhibidor de bomba de protones IV, seguidos de cirugía urgente (laparoscópica o abierta) para reparación de la perforación (parche de epiplón u omental/Graham) y lavado peritoneal exhaustivo.",
      },
      {
        id: "C",
        label: "C",
        text: "Realizar endoscopia digestiva alta de urgencia para localizar y confirmar directamente el sitio de la úlcera antes de cualquier otra intervención.",
        distractorProfile: "contraindicated_endoscopy_in_perforation",
        incorrectFeedback:
          "La endoscopia digestiva alta está CONTRAINDICADA en la sospecha de perforación de víscera hueca, ya que la insuflación de aire necesaria para el procedimiento puede aumentar el neumoperitoneo, empeorar la contaminación peritoneal y agravar el cuadro; el diagnóstico ya está confirmado clínica y radiológicamente, por lo que se debe proceder directamente al manejo quirúrgico.",
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar tratamiento erradicador de Helicobacter pylori de forma ambulatoria, ya que es la causa más probable de la úlcera, sin necesidad de manejo hospitalario inmediato.",
        distractorProfile: "outpatient_management_of_surgical_emergency",
        incorrectFeedback:
          "El tratamiento erradicador de H. pylori es relevante para el manejo a largo plazo de la enfermedad ulcerosa péptica, pero es completamente irrelevante como conducta inicial ante una perforación con peritonitis generalizada, que constituye una emergencia quirúrgica que amenaza la vida del paciente en el corto plazo.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "El paciente cursa con una **Úlcera Péptica Perforada**, complicación grave favorecida por el uso crónico de AINES (que alteran la producción de prostaglandinas protectoras de la mucosa gástrica). El cuadro de dolor epigástrico súbito e intenso que se generaliza, junto con abdomen 'en tabla', ausencia de ruidos intestinales y aire libre subdiafragmático en la radiografía, es diagnóstico de **perforación de víscera hueca con peritonitis química/bacteriana secundaria**, una verdadera emergencia quirúrgica. El manejo requiere reanimación hemodinámica agresiva, antibioticoterapia de amplio espectro (cobertura de flora gastrointestinal), inhibidor de bomba de protones IV para reducir la secreción ácida, y **cirugía urgente**: el procedimiento estándar es el cierre primario de la perforación reforzado con un parche de epiplón (técnica de Graham), asociado a lavado peritoneal exhaustivo para reducir la carga de contaminación. La endoscopia está contraindicada en este contexto agudo, y el manejo conservador (Taylor) solo se reserva para casos muy seleccionados, estables, sin peritonitis generalizada y con perforación sellada confirmada por imagen.",
    keyPoints: [
      "Dolor epigástrico súbito que se generaliza + abdomen 'en tabla' + aire libre subdiafragmático en radiografía = Perforación de víscera hueca (abdomen agudo perforativo).",
      "Úlcera Péptica Perforada. Manejo: Reanimación + Antibiótico de amplio espectro + IBP IV + Cirugía urgente (parche de Graham/omental + lavado peritoneal). Endoscopia CONTRAINDICADA en fase aguda; el manejo no quirúrgico solo aplica a casos seleccionados sin peritonitis.",
      "Úlcera Péptica Perforada / Abdomen Agudo Perforativo.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-55",
    university: "UCC",
    examArea: "CIRUGÍA GENERAL",
    topic: "Hernia Inguinal Estrangulada",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "hernia-inguinal-estrangulada"],
    statement:
      "Un hombre de 71 años, con antecedente conocido de hernia inguinal derecha reducible desde hace varios años (nunca operada por decisión propia), consulta por dolor intenso y súbito en la región inguinal derecha de 8 horas de evolución, asociado a náuseas y dos episodios de vómito. Refiere que, a diferencia de otras ocasiones, esta vez no ha logrado reducir la protrusión él mismo. Al examen físico se palpa una masa inguinal derecha tensa, exquisitamente dolorosa, irreductible, con eritema y cambio de coloración violácea de la piel suprayacente. El paciente está febril (38.3°C), taquicárdico (FC 112 lpm) y los laboratorios muestran leucocitosis de 16.900/mm³ con desviación a la izquierda. ¿Cuál es la conducta MÁS APROPIADA?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Cirugía de urgencia (exploración quirúrgica inmediata) sin intentar maniobras de reducción manual, dada la alta sospecha de estrangulación herniaria con compromiso vascular intestinal.",
      },
      {
        id: "B",
        label: "B",
        text: "Intentar reducción manual forzada bajo sedación y analgesia en el servicio de urgencias, y si se logra reducir, dar salida con cita ambulatoria para reparación electiva.",
        distractorProfile: "dangerous_forced_reduction_en_masse",
        incorrectFeedback:
          "Ante signos claros de estrangulación (eritema, cambio de coloración de la piel, fiebre, leucocitosis), la reducción manual forzada está contraindicada: puede producir una 'reducción en masa' (reintroducir a la cavidad abdominal un asa ya necrótica sin resolver la isquemia, ocultando el problema) o perforar un segmento friable de intestino comprometido, retrasando el diagnóstico y empeorando el pronóstico.",
      },
      {
        id: "C",
        label: "C",
        text: "Programar reparación quirúrgica electiva en 2 a 3 semanas, una vez el paciente esté afebril, dado que ya tiene el diagnóstico de hernia conocido desde hace años.",
        distractorProfile: "dangerous_delay_of_surgical_emergency",
        incorrectFeedback:
          "Los signos de irreductibilidad aguda, cambios de coloración de la piel, fiebre y leucocitosis indican una hernia ESTRANGULADA, una emergencia quirúrgica con riesgo de necrosis intestinal progresiva y perforación; diferir la cirugía semanas pone en riesgo inminente la vida del paciente.",
      },
      {
        id: "D",
        label: "D",
        text: "Manejo expectante con analgesia, aplicación de frío local y reevaluación en 24 horas si el dolor no mejora.",
        distractorProfile: "false_reassurance_delaying_care",
        incorrectFeedback:
          "Observar durante 24 horas a un paciente con signos francos de estrangulación (piel violácea, fiebre, taquicardia, leucocitosis) permite que progrese la isquemia hacia necrosis y perforación intestinal franca, con peritonitis y sepsis; este cuadro requiere intervención quirúrgica inmediata, no observación.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "El paciente cursa con una **Hernia Inguinal Estrangulada**, la complicación más grave de una hernia no reparada. Cuando el contenido herniario (típicamente asa intestinal) queda atrapado (hernia 'atascada' o incarcerada) y se compromete su irrigación sanguínea, progresa a **estrangulación**, con isquemia y riesgo inminente de necrosis y perforación. Las claves clínicas que distinguen la estrangulación de una simple incarceración son el dolor desproporcionado y de inicio súbito, la irreductibilidad AGUDA (en un paciente que previamente reducía su hernia sin problema), los cambios inflamatorios/isquémicos de la piel suprayacente (eritema, coloración violácea o necrótica), y los signos sistémicos de toxicidad (fiebre, taquicardia, leucocitosis). Ante estos hallazgos, la reducción manual está formalmente contraindicada por el riesgo de 'reducción en masa' de tejido necrótico, y la conducta correcta es la **exploración quirúrgica de urgencia**, para liberar el contenido herniario, evaluar su viabilidad y resecar el segmento intestinal si está necrótico, junto con la reparación de la hernia.",
    keyPoints: [
      "Hernia previamente reducible que se vuelve irreductible de forma AGUDA, con dolor intenso, cambios de coloración de la piel suprayacente y signos sistémicos (fiebre, taquicardia, leucocitosis).",
      "Hernia Inguinal Estrangulada. NUNCA intentar reducción manual forzada ante signos de estrangulación (riesgo de reducción en masa de tejido necrótico). Conducta: cirugía de urgencia inmediata.",
      "Hernia Inguinal Complicada / Estrangulación Herniaria.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-56",
    university: "UCC",
    examArea: "CIRUGÍA GENERAL - GASTROENTEROLOGÍA",
    topic: "Pancreatitis Aguda Biliar",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "pancreatitis-aguda-biliar"],
    statement:
      "Una mujer de 38 años consulta por dolor epigástrico intenso irradiado en banda hacia la espalda, de 24 horas de evolución, asociado a náuseas y vómito. Los laboratorios muestran lipasa sérica 5 veces el límite superior normal, transaminasas levemente elevadas (patrón sugestivo de origen biliar), y bilirrubinas normales. La ecografía abdominal confirma colelitiasis múltiple, con vía biliar de calibre normal y sin evidencia de coledocolitiasis ni dilatación de la vía biliar. Se calcula un puntaje de severidad bajo (sin criterios de gravedad) y la paciente evoluciona favorablemente con manejo médico (líquidos IV, analgesia, ayuno inicial con reinicio temprano de la vía oral), encontrándose asintomática y tolerando dieta al cuarto día de hospitalización, previo al alta. ¿Cuál es la conducta MÁS APROPIADA respecto al manejo definitivo de la colelitiasis?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Dar de alta sin cirugía y programar colecistectomía electiva en 6 semanas, una vez la inflamación pancreática se haya resuelto completamente.",
        distractorProfile: "unnecessary_delay_increasing_recurrence_risk",
        incorrectFeedback:
          "Diferir la colecistectomía varias semanas después del alta aumenta significativamente el riesgo de recurrencia de eventos biliares (nueva pancreatitis, colecistitis o cólico biliar) mientras la paciente espera la cirugía electiva; la evidencia actual respalda realizar la colecistectomía en la misma hospitalización una vez resuelto el cuadro agudo.",
      },
      {
        id: "B",
        label: "B",
        text: "Manejo exclusivamente médico a largo plazo con ácido ursodesoxicólico para disolver los cálculos, sin necesidad de cirugía.",
        distractorProfile: "ineffective_medical_therapy_for_definitive_management",
        incorrectFeedback:
          "El ácido ursodesoxicólico tiene un rol limitado (cálculos de colesterol pequeños, pacientes no candidatos a cirugía) y una tasa de recurrencia alta tras suspenderlo; no es el tratamiento definitivo estándar para prevenir la recurrencia de pancreatitis biliar en una paciente que es candidata quirúrgica.",
      },
      {
        id: "C",
        label: "C",
        text: "Realizar únicamente CPRE con esfinterotomía biliar, sin colecistectomía posterior, ya que al liberar la vía biliar se elimina el riesgo de nueva pancreatitis.",
        distractorProfile: "incomplete_treatment_leaving_gallbladder_source_intact",
        incorrectFeedback:
          "La CPRE con esfinterotomía está indicada solo si hay evidencia de coledocolitiasis o colangitis concomitante (ausente en este caso, con vía biliar normal); además, aunque se realizara, la vesícula con cálculos permanece como fuente potencial de nuevos episodios de pancreatitis, colecistitis o migración de cálculos, por lo que la colecistectomía sigue siendo necesaria.",
      },
      {
        id: "D",
        label: "D",
        text: "Realizar colecistectomía laparoscópica durante la MISMA hospitalización, una vez resuelto el cuadro agudo de pancreatitis y antes del alta, para prevenir la recurrencia de eventos biliares.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "La paciente cursa con una **Pancreatitis Aguda de origen Biliar**, confirmada por la elevación de lipasa (>3 veces el límite superior normal) junto con evidencia ecográfica de colelitiasis y un patrón bioquímico hepático sugestivo de origen biliar, sin evidencia de coledocolitiasis que justifique CPRE urgente. En los casos de pancreatitis biliar **leve, sin criterios de severidad**, que resuelven rápidamente con manejo médico de soporte, la evidencia actual (respaldada por múltiples guías internacionales) recomienda realizar la **colecistectomía laparoscópica durante la MISMA hospitalización**, idealmente antes del alta, una vez el paciente esté clínicamente estable y tolerando vía oral. Diferir la cirugía para un tiempo electivo posterior (por ejemplo, 6 semanas) se asocia a un riesgo significativamente mayor de recurrencia de eventos biliares (nueva pancreatitis, colecistitis aguda, cólico biliar o coledocolitiasis) mientras el paciente espera la cirugía, sin ningún beneficio demostrado que justifique el retraso.",
    keyPoints: [
      "Pancreatitis aguda + colelitiasis en la ecografía + patrón hepático sugestivo de origen biliar, sin coledocolitiasis = Pancreatitis Aguda Biliar.",
      "En pancreatitis biliar LEVE que resuelve rápido: Colecistectomía laparoscópica en la MISMA hospitalización (antes del alta), no diferida semanas después, para reducir el riesgo de recurrencia.",
      "Pancreatitis Aguda Biliar / Momento de la Colecistectomía.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-57",
    university: "UCC",
    examArea: "CIRUGÍA / TRAUMA - CIRUGÍA GENERAL",
    topic: "Trauma Abdominal Cerrado",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "trauma-abdominal-cerrado"],
    statement:
      "Un hombre de 26 años es traído a urgencias tras sufrir un accidente en motocicleta con impacto directo del manubrio contra el abdomen. Al ingreso está confuso, pálido y diaforético. Signos vitales: PA 82/54 mmHg, FC 128 lpm, FR 24 rpm. A pesar de un bolo inicial de 1.000 mL de cristaloides, la presión arterial mejora mínimamente (a 88/58 mmHg) y la frecuencia cardíaca permanece elevada. El abdomen está distendido y difusamente doloroso a la palpación, con defensa muscular. Se realiza un FAST (Focused Assessment with Sonography for Trauma) a la cabecera del paciente, que muestra líquido libre abundante en el espacio hepatorrenal (bolsa de Morrison) y en la pelvis. No hay otras lesiones evidentes que expliquen la inestabilidad hemodinámica. ¿Cuál es la conducta MÁS APROPIADA e inmediata?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Solicitar tomografía computarizada de abdomen con contraste para caracterizar completamente las lesiones antes de decidir el manejo definitivo.",
        distractorProfile: "dangerous_delay_seeking_imaging_in_unstable_patient",
        incorrectFeedback:
          "La TAC requiere trasladar al paciente fuera del área de reanimación y tiempo de adquisición/interpretación; en un paciente hemodinámicamente INESTABLE con FAST positivo, este retraso es peligroso y puede ser fatal. La TAC se reserva para pacientes que responden adecuadamente a la reanimación inicial (estables o 'respondedores transitorios' sin FAST claramente positivo).",
      },
      {
        id: "B",
        label: "B",
        text: "Laparotomía exploratoria de urgencia inmediata, sin necesidad de estudios de imagen adicionales, dado que el paciente está hemodinámicamente inestable con FAST positivo para líquido libre intraabdominal.",
      },
      {
        id: "C",
        label: "C",
        text: "Realizar lavado peritoneal diagnóstico (LPD) en lugar del FAST, por considerarse una prueba más precisa, antes de decidir la necesidad de cirugía.",
        distractorProfile: "unnecessary_redundant_test_delaying_definitive_care",
        incorrectFeedback:
          "El FAST ya es positivo y el paciente está inestable; realizar un LPD adicional es un paso redundante e invasivo que solo retrasa el traslado a quirófano sin aportar información que cambie la conducta, que ya está establecida: laparotomía urgente.",
      },
      {
        id: "D",
        label: "D",
        text: "Ingresar a la unidad de cuidados intensivos para observación con exámenes abdominales seriados y nuevo FAST en 6 horas.",
        distractorProfile: "dangerous_observation_of_unstable_trauma_patient",
        incorrectFeedback:
          "Observar a un paciente que permanece inestable pese a la reanimación inicial, con evidencia de hemoperitoneo en el FAST, retrasa el control quirúrgico de un sangrado activo que puede ser rápidamente exanguinante; este cuadro exige cirugía inmediata, no observación.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "El paciente cursa con un **Trauma Abdominal Cerrado con hemoperitoneo** (sospecha de lesión de víscera sólida, como bazo o hígado, o lesión mesentérica/vascular), manifestado por inestabilidad hemodinámica que no responde adecuadamente a la reanimación inicial con líquidos ('no respondedor' o 'respondedor transitorio'). El **FAST** es un estudio ecográfico rápido, no invasivo, realizado a la cabecera del paciente, que busca líquido libre en cuatro ventanas (pericárdica, hepatorrenal/Morrison, esplenorrenal y pélvica); su alta especificidad para hemoperitoneo en el contexto de trauma lo convierte en una herramienta clave para la toma de decisiones inmediatas. En un paciente **hemodinámicamente inestable con FAST positivo**, el algoritmo ATLS (Advanced Trauma Life Support) establece que la conducta es el traslado INMEDIATO a **laparotomía exploratoria de urgencia** para lograr control del sangrado, sin retrasar la cirugía con estudios adicionales como la TAC (reservada para pacientes estables o que responden a la reanimación) ni el lavado peritoneal diagnóstico (en gran medida reemplazado por el FAST).",
    keyPoints: [
      "Trauma abdominal cerrado + inestabilidad hemodinámica que no responde adecuadamente a la reanimación inicial + FAST positivo para líquido libre.",
      "Trauma Abdominal Cerrado con hemoperitoneo. Paciente inestable + FAST positivo = Laparotomía exploratoria de urgencia INMEDIATA, sin esperar TAC ni otros estudios. La TAC se reserva para pacientes estables o que responden a la reanimación.",
      "Trauma Abdominal Cerrado / Criterios de Laparotomía de Urgencia.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-58",
    university: "UCC",
    examArea: "CIRUGÍA VASCULAR",
    topic: "Isquemia Arterial Aguda de Miembro Inferior",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "isquemia-arterial-aguda-de-miembro-inferior"],
    statement:
      "Un hombre de 74 años, con fibrilación auricular conocida sin anticoagulación adecuada (suspendida hace 3 meses por decisión propia), consulta por dolor súbito e intenso en la pierna izquierda de 5 horas de evolución. Refiere que la extremidad se ha vuelto progresivamente más pálida y fría, y en la última hora ha notado disminución de la sensibilidad en el pie y dificultad para mover los dedos. Al examen físico: extremidad inferior izquierda pálida, fría, con llenado capilar muy enlentecido; pulso femoral izquierdo palpable, pero pulsos poplíteo, tibial posterior y pedio izquierdos ausentes al Doppler; hay disminución de la sensibilidad táctil en el pie y debilidad incipiente para la flexión dorsal de los dedos, sin parálisis completa. La extremidad contralateral es normal. Se clasifica el cuadro como isquemia aguda estadio Rutherford IIb (amenazante, con déficit sensitivo-motor incipiente). ¿Cuál es la conducta MÁS APROPIADA e inmediata?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar anticoagulación con heparina IV como único tratamiento, sin necesidad de revascularización quirúrgica, ya que la anticoagulación restaurará el flujo de forma gradual.",
        distractorProfile: "insufficient_therapy_for_threatened_limb",
        incorrectFeedback:
          "La anticoagulación sola previene la propagación del trombo y nuevos eventos embólicos, pero NO restaura el flujo arterial ya ocluido; en un miembro con déficit sensitivo-motor incipiente (Rutherford IIb, isquemia 'amenazante'), se requiere revascularización urgente para evitar la pérdida irreversible de la extremidad.",
      },
      {
        id: "B",
        label: "B",
        text: "Solicitar una angiografía diagnóstica completa de forma electiva en las próximas 24-48 horas para planear con calma la estrategia de revascularización.",
        distractorProfile: "dangerous_delay_in_threatened_limb",
        incorrectFeedback:
          "Un miembro con isquemia amenazante (Rutherford IIb) tiene una ventana de horas, no de días, antes de que el daño neuromuscular se vuelva irreversible; diferir la revascularización 24-48 horas para 'planear con calma' pone en riesgo inminente la viabilidad de la extremidad.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar heparinización sistémica IV de inmediato y proceder a revascularización quirúrgica o endovascular urgente (por ejemplo, embolectomía con catéter de Fogarty), sin retrasar la intervención por estudios adicionales, dado el déficit sensitivo-motor incipiente.",
      },
      {
        id: "D",
        label: "D",
        text: "Trombolisis dirigida por catéter como tratamiento de elección único, dado su buen perfil de seguridad comparado con la cirugía.",
        distractorProfile: "wrong_first_line_for_threatened_limb_with_neuro_deficit",
        incorrectFeedback:
          "La trombolisis dirigida por catéter es una opción válida en isquemia aguda Rutherford I o IIa (viable o marginalmente amenazada, SIN déficit neurológico), pero requiere horas para lograr la reperfusión; en un miembro con déficit sensitivo-motor ya presente (Rutherford IIb), el tiempo hasta la reperfusión debe ser el más corto posible, por lo que la revascularización quirúrgica/endovascular urgente es de elección sobre la trombolisis.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "El paciente cursa con una **Isquemia Arterial Aguda de Miembro Inferior**, muy probablemente de origen **embólico** dado el antecedente de fibrilación auricular sin anticoagulación (fuente cardioembólica clásica desde la aurícula izquierda/orejuela). El cuadro clínico clásico se resume en las '6 P': *Pain* (dolor), *Pallor* (palidez), *Pulselessness* (ausencia de pulsos), *Paresthesia* (parestesias), *Poikilothermia* (frialdad) y *Paralysis* (parálisis, signo tardío y de mal pronóstico). La **clasificación de Rutherford** estratifica la urgencia: estadio I (viable, sin déficit, no urgente inmediato), IIa (marginalmente amenazado, salvable si se trata pronto, sin déficit sensitivo-motor), IIb (**inmediatamente amenazado**, con déficit sensitivo-motor incipiente, requiere revascularización urgente en horas) y III (irreversible, con daño neuromuscular profundo, indicación de amputación primaria). Este paciente, en estadio IIb, requiere **heparinización sistémica inmediata** (para prevenir propagación del trombo y nuevos émbolos) seguida sin demora de **revascularización urgente** (embolectomía quirúrgica con catéter de Fogarty, o trombectomía/trombolisis endovascular en centros especializados con capacidad de intervención rápida), ya que el tiempo hasta la reperfusión es el determinante más importante de la viabilidad de la extremidad.",
    keyPoints: [
      "Fibrilación auricular sin anticoagulación + inicio súbito de dolor, palidez, frialdad y pérdida de pulsos distales en una extremidad = Isquemia Arterial Aguda (probable origen embólico).",
      "Clasificación de Rutherford: la presencia de déficit sensitivo-motor incipiente (IIb, 'amenaza inmediata') exige heparinización IV + revascularización urgente (quirúrgica o endovascular) en horas, sin retrasar por estudios electivos.",
      "Isquemia Arterial Aguda de Miembro Inferior / Clasificación de Rutherford.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-59",
    university: "UCC",
    examArea: "CIRUGÍA GENERAL - GASTROENTEROLOGÍA",
    topic: "Diverticulitis Aguda",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "diverticulitis-aguda"],
    statement:
      "Una mujer de 64 años, con antecedente de enfermedad diverticular conocida, consulta por dolor en fosa ilíaca izquierda de 3 días de evolución, asociado a fiebre de 38.4°C y cambio en el hábito intestinal. Al examen físico hay dolor localizado en fosa ilíaca izquierda con defensa leve, sin signos de irritación peritoneal generalizada ni masa palpable claramente definida. Laboratorios: leucocitos 13.100/mm³, PCR elevada. Una tomografía de abdomen y pelvis con contraste muestra engrosamiento de la pared del colon sigmoide con inflamación pericólica y una colección líquida loculada de 3 cm adyacente al sigmoides, sin aire libre ni líquido libre generalizado en la cavidad. Se clasifica el cuadro como Diverticulitis Aguda Hinchey Ib (absceso pericólico pequeño y contenido). La paciente está hemodinámicamente estable, tolera vía oral y no tiene signos de sepsis. ¿Cuál es la conducta MÁS APROPIADA?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Manejo conservador con antibioticoterapia de amplio espectro (IV u oral según tolerancia) y reposo intestinal, con seguimiento clínico e imagenológico estrecho; considerar drenaje percutáneo guiado por imagen si el absceso aumenta de tamaño (>4 cm) o no hay mejoría clínica, reservando la cirugía urgente para Hinchey III/IV o falla del manejo médico.",
      },
      {
        id: "B",
        label: "B",
        text: "Realizar resección sigmoidea de urgencia con colostomía terminal (procedimiento de Hartmann) de inmediato, dado que ya existe un absceso documentado por tomografía.",
        distractorProfile: "unnecessary_emergency_surgery_for_contained_small_abscess",
        incorrectFeedback:
          "Un absceso pericólico pequeño (<4 cm), contenido, en una paciente estable sin peritonitis generalizada (Hinchey Ib), responde en la gran mayoría de los casos a manejo médico con antibióticos; la cirugía de urgencia con colostomía es un sobretratamiento que expone a la paciente a morbilidad innecesaria y se reserva para Hinchey III (peritonitis purulenta) o IV (peritonitis fecal), o para falla del manejo conservador/percutáneo.",
      },
      {
        id: "C",
        label: "C",
        text: "Realizar colonoscopia durante el episodio agudo para confirmar el diagnóstico y descartar malignidad de forma inmediata.",
        distractorProfile: "contraindicated_endoscopy_during_acute_inflammation",
        incorrectFeedback:
          "La colonoscopia está CONTRAINDICADA durante el episodio agudo de diverticulitis por el riesgo de perforación asociado a la insuflación en un colon inflamado; debe diferirse 6-8 semanas después de la resolución del cuadro agudo para descartar neoplasia subyacente u otras causas, salvo que exista duda diagnóstica que amerite un estudio alternativo más seguro.",
      },
      {
        id: "D",
        label: "D",
        text: "Manejo ambulatorio exclusivamente con antibióticos orales, sin necesidad de ningún seguimiento clínico ni imagenológico posterior, dado que ya se tiene el diagnóstico.",
        distractorProfile: "insufficient_followup_for_documented_abscess",
        incorrectFeedback:
          "Aunque el manejo puede iniciarse con antibióticos, la presencia de un absceso documentado en la tomografía obliga a un seguimiento clínico estrecho (y frecuentemente imagenológico) para confirmar la resolución y detectar oportunamente signos de progresión, crecimiento del absceso o falla terapéutica que requieran drenaje percutáneo o cirugía; omitir todo seguimiento es una conducta insegura.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "La paciente cursa con una **Diverticulitis Aguda Complicada** con un pequeño absceso pericólico, clasificada según la **Clasificación de Hinchey** (modificada), que estratifica la severidad de la diverticulitis complicada: Hinchey Ia (flemón/inflamación pericólica localizada), Ib (absceso pericólico pequeño y contenido), II (absceso pélvico o a distancia, más grande o de difícil acceso), III (peritonitis purulenta generalizada por rotura de un absceso) y IV (peritonitis fecal generalizada por perforación libre). El manejo depende directamente de esta clasificación y de la estabilidad clínica: los estadios **Ia/Ib** y los abscesos pequeños (generalmente <3-4 cm) en pacientes estables se manejan de forma **conservadora** con antibióticos de amplio espectro y reposo intestinal, reservando el **drenaje percutáneo guiado por imagen** para abscesos más grandes (>4 cm) o que no responden al manejo médico. La **cirugía de urgencia** (habitualmente procedimiento de Hartmann u otra resección) se reserva para los estadios **III y IV** (peritonitis generalizada) o para la falla del manejo conservador/percutáneo. La colonoscopia debe diferirse 6-8 semanas tras la resolución del cuadro agudo, tanto por el riesgo de perforación durante la inflamación activa como para descartar neoplasia u otra patología colónica subyacente una vez resuelto el episodio.",
    keyPoints: [
      "Dolor en fosa ilíaca izquierda + fiebre + leucocitosis + hallazgo tomográfico de absceso pericólico pequeño y contenido = Diverticulitis Aguda Complicada, Hinchey Ib.",
      "Absceso pequeño (<4 cm) y paciente estable: manejo conservador con antibióticos ± drenaje percutáneo si crece o no mejora. Cirugía urgente reservada para Hinchey III/IV (peritonitis generalizada) o falla del manejo médico/percutáneo. Colonoscopia diferida 6-8 semanas.",
      "Diverticulitis Aguda / Clasificación de Hinchey y Manejo Escalonado.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-60",
    university: "UCC",
    examArea: "ONCOLOGÍA QUIRÚRGICA - CIRUGÍA GENERAL",
    topic: "Cáncer Colorrectal Obstructivo",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "cancer-colorrectal-obstructivo"],
    statement:
      "Un hombre de 69 años consulta por un cuadro de 3 meses de estreñimiento progresivo, disminución del calibre de las heces y pérdida de peso no intencionada de 6 kg, que en las últimas 24 horas ha progresado a detención completa de la eliminación de heces y gases, distensión abdominal marcada y dolor tipo cólico. Al examen físico: abdomen muy distendido, timpánico, con dolor difuso leve sin defensa ni signos de irritación peritoneal, ruidos hidroaéreos aumentados. Signos vitales estables, sin fiebre. Una tomografía de abdomen y pelvis muestra una lesión estenosante de aspecto neoplásico ('en corazón de manzana') en el colon sigmoide, con dilatación masiva del colon proximal (ciego de 11 cm) y del intestino delgado, sin evidencia de perforación ni neumoperitoneo. El paciente está hemodinámicamente estable pero con obstrucción colónica completa que no ha respondido a medidas conservadoras (sonda rectal, enemas). ¿Cuál es la conducta MÁS APROPIADA?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Manejo domiciliario con laxantes osmóticos y enemas, programando una colonoscopia ambulatoria en la próxima semana para tomar biopsias.",
        distractorProfile: "dangerous_outpatient_management_of_complete_obstruction",
        incorrectFeedback:
          "Una obstrucción colónica COMPLETA, con un ciego ya dilatado a 11 cm (cercano al umbral de riesgo de perforación cecal, típicamente considerado ≥12 cm), es una emergencia quirúrgica; manejarla de forma ambulatoria con laxantes retrasa el tratamiento necesario y expone al paciente a un riesgo inminente de perforación cecal, peritonitis fecal y sepsis potencialmente mortal.",
      },
      {
        id: "B",
        label: "B",
        text: "Realizar resección del segmento comprometido con anastomosis primaria inmediata, sin ostomía de protección, dado que el paciente está hemodinámicamente estable.",
        distractorProfile: "unsafe_primary_anastomosis_in_unprepared_dilated_bowel",
        incorrectFeedback:
          "Aunque el paciente esté estable hemodinámicamente, realizar una anastomosis primaria sobre un colon masivamente dilatado, edematoso y no preparado (sin limpieza mecánica previa) conlleva un riesgo considerablemente mayor de dehiscencia anastomótica; en el contexto de obstrucción completa de urgencia, el abordaje más seguro y estandarizado es la resección con colostomía terminal, difiriendo la anastomosis para un segundo tiempo.",
      },
      {
        id: "C",
        label: "C",
        text: "Colocar una endoprótesis metálica autoexpandible (stent) por vía endoscópica como tratamiento único y definitivo, sin necesidad de cirugía posterior.",
        distractorProfile: "stent_as_definitive_rather_than_bridge_therapy",
        incorrectFeedback:
          "En un paciente operable con un cáncer colorrectal potencialmente curable, el stent colónico se utiliza como puente temporal para descomprimir el colon y permitir una preparación intestinal adecuada antes de la cirugía oncológica definitiva (o como manejo paliativo exclusivo en pacientes no candidatos a cirugía o con enfermedad metastásica irresecable), pero NO sustituye a la resección oncológica definitiva en un paciente candidato a cirugía curativa.",
      },
      {
        id: "D",
        label: "D",
        text: "Manejo quirúrgico de urgencia con resección del segmento colónico comprometido y colostomía terminal (procedimiento de Hartmann), difiriendo la anastomosis primaria dado el colon proximal masivamente dilatado y no preparado.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "El paciente cursa con una **Obstrucción Intestinal Mecánica secundaria a Cáncer Colorrectal** (lesión estenosante 'en corazón de manzana' en el sigmoides), una complicación relativamente frecuente de los tumores del colon izquierdo, que suelen debutar con un cuadro subagudo de cambio del hábito intestinal, disminución del calibre de las heces y pérdida de peso, hasta progresar a obstrucción completa. La dilatación cecal marcada (aquí 11 cm, cercana al umbral crítico de riesgo de perforación) convierte este cuadro en una **emergencia quirúrgica**, ya que el ciego, por la ley de Laplace, es el segmento con mayor riesgo de perforación ante una obstrucción distal con válvula ileocecal competente. Ante la falla del manejo conservador y sin respuesta a medidas no invasivas, la conducta estándar en un colon proximal masivamente dilatado, edematoso y **no preparado** es la **resección del segmento comprometido con colostomía terminal (procedimiento de Hartmann)**, difiriendo la anastomosis primaria y la posible reversión de la ostomía para un segundo tiempo quirúrgico electivo, una vez resuelto el cuadro agudo y con el paciente en mejores condiciones generales. La colocación de un stent colónico es útil como puente a la cirugía electiva en casos seleccionados con menor grado de dilatación y sin signos de sufrimiento cecal inminente, pero no sustituye la resección oncológica definitiva, y la anastomosis primaria inmediata conlleva un riesgo inaceptablemente alto de dehiscencia en este contexto de urgencia con intestino no preparado.",
    keyPoints: [
      "Cambio progresivo del hábito intestinal + disminución del calibre de las heces + pérdida de peso, que progresa a obstrucción completa con dilatación cecal marcada = Cáncer Colorrectal Complicado con Obstrucción Intestinal.",
      "Obstrucción colónica completa por neoplasia, sin respuesta a manejo conservador: Cirugía de urgencia con resección + colostomía terminal (Hartmann), difiriendo la anastomosis primaria por el colon dilatado y no preparado. El stent es puente a cirugía electiva en casos seleccionados, no tratamiento definitivo en pacientes operables.",
      "Cáncer Colorrectal / Obstrucción Intestinal Neoplásica y Manejo Quirúrgico de Urgencia.",
    ],
  },
];
