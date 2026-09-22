import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #8 (20 sep 2026) · Preguntas #61–#70.
 * Banco exclusivo del examen oficial.
 */
export const UCC_CONV_2026_09_20_61_70_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2026-09-20-61",
    university: "UCC",
    examArea: "ORTOPEDIA - TRAUMATOLOGÍA / GERIATRÍA",
    topic: "Fractura de Cadera en el Adulto Mayor",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "fractura-de-cadera-adulto-mayor"],
    statement:
      "Mujer de 84 años, con antecedente de hipertensión arterial y osteoporosis, es traída a urgencias tras una caída desde su propia altura en el baño de su casa. Refiere dolor intenso en la cadera derecha e incapacidad para deambular o soportar peso desde el momento del evento. Al examen físico, el miembro inferior derecho se encuentra acortado, en rotación externa y aducción, con dolor intenso a la movilización pasiva de la cadera; no hay heridas ni deformidad angular del muslo. Los pulsos distales están conservados y no hay déficit neurológico. Una radiografía de cadera confirma una fractura desplazada del cuello femoral derecho (Garden III). Sus signos vitales son estables y sus comorbilidades están controladas con el tratamiento habitual. ¿Cuál es la conducta MÁS ADECUADA con respecto al momento de la intervención quirúrgica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Manejo conservador con reposo absoluto en cama y analgesia, difiriendo la cirugía de forma indefinida por tratarse de una paciente anciana con riesgo anestésico.",
        distractorProfile: "nonoperative_management_increases_mortality",
        incorrectFeedback:
          "El reposo prolongado en cama en el adulto mayor incrementa drásticamente el riesgo de neumonía, infección urinaria, úlceras por presión, trombosis venosa profunda, delirium y sarcopenia, elevando la mortalidad global. Salvo contraindicación quirúrgica absoluta, la cirugía es la conducta estándar incluso en pacientes muy ancianos, porque restaura la movilidad precoz y reduce las complicaciones sistémicas de la inmovilización.",
      },
      {
        id: "B",
        label: "B",
        text: "Cirugía tras una breve optimización médica preoperatoria, idealmente dentro de las primeras 24 a 48 horas posteriores al ingreso.",
      },
      {
        id: "C",
        label: "C",
        text: "Tracción cutánea prolongada durante 4 a 6 semanas como puente terapéutico antes de definir el manejo quirúrgico definitivo.",
        distractorProfile: "prolonged_traction_outdated_practice",
        incorrectFeedback:
          "La tracción prolongada como puente antes de la cirugía es una práctica obsoleta sin beneficio demostrado sobre el dolor ni el desenlace funcional; por el contrario, prolonga la inmovilización y expone al paciente a las mismas complicaciones que se buscan evitar con la cirugía temprana.",
      },
      {
        id: "D",
        label: "D",
        text: "Esperar hasta que la paciente esté completamente libre de cualquier comorbilidad médica antes de programar la cirugía, sin un límite de tiempo definido.",
        distractorProfile: "unlimited_delay_awaiting_perfect_status",
        incorrectFeedback:
          "Retrasar la cirugía más allá de 48 horas se asocia a mayor mortalidad a 30 días y a más complicaciones perioperatorias. La optimización médica debe ser rápida y dirigida a corregir alteraciones agudas y corregibles (anemia severa, alteraciones electrolíticas, descompensación cardiaca aguda), no un proceso sin límite temporal que persiga un estado médico \"perfecto\".",
      },
    ],
    correctOptionId: "B",
    explanation:
      "La paciente presenta una **Fractura de Cadera (cuello femoral desplazado, Garden III)**, una de las causas más frecuentes de morbimortalidad en el adulto mayor. La evidencia es consistente en que la **cirugía temprana, dentro de las primeras 24-48 horas** tras una optimización médica breve y dirigida (corrección de anemia sintomática, trastornos hidroelectrolíticos o descompensaciones cardiopulmonares agudas), reduce la mortalidad a 30 días y un año, disminuye el dolor, acorta la estancia hospitalaria y favorece la recuperación funcional. El manejo conservador o la espera prolongada, en cambio, perpetúan la inmovilización, que es en sí misma un factor de riesgo independiente para neumonía, tromboembolismo venoso, úlceras por presión y delirium en el anciano. La elección entre osteosíntesis y artroplastia depende del tipo de fractura (intra o extracapsular), el grado de desplazamiento y la edad/funcionalidad basal del paciente, pero el principio del **momento quirúrgico precoz** aplica en la gran mayoría de los casos.",
    keyPoints: [
      "Caída en el adulto mayor + acortamiento, rotación externa y aducción del miembro afectado = sospecha clínica de fractura de cadera, confirmada por radiografía.",
      "Manejo: cirugía temprana (idealmente <24-48 horas) tras optimización médica breve; el reposo prolongado y la espera indefinida aumentan la mortalidad y las complicaciones sistémicas de la inmovilización.",
      "Ortopedia - Traumatología / Fractura de Cadera en el Adulto Mayor.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-62",
    university: "UCC",
    examArea: "ORTOPEDIA - TRAUMATOLOGÍA / URGENCIAS",
    topic: "Síndrome Compartimental Agudo",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "sindrome-compartimental-agudo"],
    statement:
      "Un hombre de 24 años sufre una fractura de tibia y peroné derechos en un accidente de motocicleta, tratada inicialmente con reducción cerrada e inmovilización con un yeso circular. Seis horas después, refiere dolor intenso en la pierna que ha ido en aumento progresivo, desproporcionado en intensidad respecto a la lesión inicial, y que no cede a pesar de dosis adecuadas de opioides intravenosos. Al retirar parcialmente el vendaje, la pierna está muy tensa a la palpación, con dolor intenso a la extensión pasiva de los dedos del pie y parestesias en el dorso del pie. Los pulsos pedio y tibial posterior aún son palpables, aunque algo disminuidos, y el llenado capilar es de 3 segundos. ¿Cuál es la conducta MÁS APROPIADA en este momento?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Elevar la extremidad por encima del nivel del corazón y reevaluar en 6 horas, dado que los pulsos distales aún son palpables.",
        distractorProfile: "delayed_reassessment_missing_urgency",
        incorrectFeedback:
          "Elevar la extremidad por encima del nivel del corazón reduce la presión de perfusión tisular y puede empeorar la isquemia muscular en un compartimento ya hipertenso. Además, esperar 6 horas para reevaluar arriesga daño muscular y nervioso irreversible; el síndrome compartimental es una urgencia tiempo-dependiente que no admite reevaluaciones diferidas.",
      },
      {
        id: "B",
        label: "B",
        text: "Solicitar un Doppler arterial para confirmar la ausencia de pulsos distales antes de decidir cualquier conducta.",
        distractorProfile: "overreliance_on_pulses_diagnosis",
        incorrectFeedback:
          "Los pulsos distales suelen permanecer palpables hasta etapas MUY tardías del síndrome compartimental, cuando el daño muscular y nervioso ya es extenso o irreversible. Esperar la pérdida de pulsos para actuar retrasa fatalmente el diagnóstico y el tratamiento; este es un diagnóstico eminentemente clínico.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar manejo médico conservador con manitol intravenoso para reducir el edema muscular del compartimento.",
        distractorProfile: "unproven_medical_therapy_substituting_surgery",
        incorrectFeedback:
          "No existe ninguna terapia farmacológica que sustituya la descompresión mecánica del compartimento; el manitol no es un tratamiento estándar del síndrome compartimental y su uso aquí solo retrasa la intervención que realmente revierte la isquemia.",
      },
      {
        id: "D",
        label: "D",
        text: "Retirar de inmediato el yeso y todo vendaje constrictivo, y realizar fasciotomía urgente si el dolor y la tensión no mejoran de forma inmediata tras la descompresión externa.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "El cuadro es compatible con un **Síndrome Compartimental Agudo**, una emergencia ortopédica en la que el aumento de la presión dentro de un compartimento osteofascial cerrado compromete la perfusión muscular y nerviosa. El signo más temprano y sensible es el **dolor desproporcionado a la lesión que empeora con la extensión pasiva de los dedos**, seguido de parestesias por compromiso nervioso; los pulsos distales y la palidez son hallazgos **tardíos** y su presencia NO descarta el diagnóstico. La conducta inmediata es **retirar cualquier elemento constrictivo** (yeso, vendajes) para intentar descomprimir externamente el compartimento; si el dolor y la tensión no mejoran de inmediato, se debe proceder a **fasciotomía quirúrgica urgente**, idealmente dentro de las primeras 6 horas desde el inicio de los síntomas, para evitar necrosis muscular irreversible y la temida contractura isquémica de Volkmann.",
    keyPoints: [
      "Dolor desproporcionado que empeora con la extensión pasiva de los dedos, tras una fractura o un vendaje/yeso apretado, es el signo más temprano y sensible de síndrome compartimental.",
      "Manejo: retirar de inmediato cualquier vendaje o yeso constrictivo; si no hay mejoría inmediata, fasciotomía urgente (<6 horas). No esperar la ausencia de pulsos, que es un signo tardío.",
      "Ortopedia - Traumatología / Síndrome Compartimental Agudo.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-63",
    university: "UCC",
    examArea: "ORTOPEDIA PEDIÁTRICA - TRAUMATOLOGÍA",
    topic: "Fractura Supracondílea de Húmero",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "fractura-supracondilea-de-humero"],
    statement:
      "Un niño de 7 años sufre una caída de su bicicleta con el brazo izquierdo en hiperextensión. Presenta dolor intenso, edema importante y deformidad en \"S itálica\" del codo izquierdo. Una radiografía confirma una fractura supracondílea de húmero tipo III de Gartland (desplazamiento completo posterior). Al examen físico, el pulso radial está ausente, pero la mano se encuentra rosada, tibia, con llenado capilar menor a 2 segundos, y el niño mueve activamente los dedos y tiene sensibilidad conservada en el territorio del nervio mediano. ¿Cuál es la conducta MÁS APROPIADA en este momento?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Reducción cerrada y fijación percutánea con agujas de Kirschner de manera urgente, reevaluando la perfusión de la mano inmediatamente después del procedimiento.",
      },
      {
        id: "B",
        label: "B",
        text: "Realizar una angiografía urgente antes de cualquier intervención ortopédica, para localizar con precisión el sitio de la lesión vascular.",
        distractorProfile: "unnecessary_imaging_delay",
        incorrectFeedback:
          "En la \"mano rosada sin pulso\", la reducción cerrada urgente suele liberar el atrapamiento o angulación de la arteria braquial y restaurar el pulso; solicitar angiografía antes de reducir solo retrasa el tratamiento que con mayor frecuencia resuelve el problema, y se reserva para cuando la mano permanece mal perfundida después de la reducción y fijación.",
      },
      {
        id: "C",
        label: "C",
        text: "Realizar exploración quirúrgica vascular inmediata de la arteria braquial, sin intentar previamente la reducción ortopédica de la fractura.",
        distractorProfile: "premature_vascular_exploration",
        incorrectFeedback:
          "Ante una \"mano rosada sin pulso\" (bien perfundida clínicamente pese a la ausencia de pulso palpable), el primer paso es intentar la reducción cerrada y fijación de la fractura, ya que el atrapamiento o el acodamiento de la arteria por el fragmento óseo desplazado es la causa más frecuente; la exploración vascular se reserva para cuando persiste isquemia franca (mano pálida, fría, sin pulso) después de la reducción.",
      },
      {
        id: "D",
        label: "D",
        text: "Manejo conservador con férula en extensión y observación ambulatoria, dado que la mano está rosada y bien perfundida.",
        distractorProfile: "false_reassurance_delaying_definitive_treatment",
        incorrectFeedback:
          "Una fractura supracondílea desplazada tipo III de Gartland requiere reducción y fijación quirúrgica urgente independientemente del estado de perfusión de la mano; inmovilizar en extensión y dar manejo ambulatorio no es apropiado para una fractura inestable y desplazada, y retrasa el tratamiento definitivo mientras persiste el riesgo neurovascular.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "El paciente presenta una **Fractura Supracondílea de Húmero tipo III de Gartland**, la fractura de codo más frecuente en la infancia, con riesgo de lesión de la arteria braquial y del nervio mediano (especialmente su rama interósea anterior) por el desplazamiento del fragmento proximal hacia anterior. El hallazgo de una **\"mano rosada sin pulso\"** (pink pulseless hand) —perfundida clínicamente (rosada, tibia, con buen llenado capilar) pero sin pulso radial palpable— sugiere que la arteria está atrapada, angulada o en espasmo por el desplazamiento óseo, más que seccionada. La conducta indicada es la **reducción cerrada y fijación percutánea urgente**, ya que en la mayoría de los casos esto libera la compresión vascular y restaura el pulso; si tras la reducción la mano persiste mal perfundida (pálida, fría, sin pulso — \"mano blanca sin pulso\"), entonces sí está indicada la exploración quirúrgica vascular.",
    keyPoints: [
      "Caída con el codo en hiperextensión en un niño + deformidad en \"S itálica\" = fractura supracondílea de húmero; vigilar siempre el pulso radial y la función del nervio mediano/interóseo anterior.",
      "Manejo: reducción cerrada y fijación percutánea urgente. La \"mano rosada sin pulso\" se reevalúa después de la reducción y no requiere exploración vascular inmediata, a diferencia de la \"mano blanca sin pulso\".",
      "Ortopedia Pediátrica / Fractura Supracondílea de Húmero.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-64",
    university: "UCC",
    examArea: "UROLOGÍA - URGENCIAS",
    topic: "Cólico Renoureteral",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "colico-renoureteral"],
    statement:
      "Un hombre de 38 años consulta a urgencias por dolor tipo cólico de inicio súbito en el flanco derecho, irradiado hacia la región inguinal, asociado a náuseas y un episodio de vómito. Se encuentra muy inquieto, cambiando constantemente de posición en la camilla sin encontrar alivio. No tiene fiebre ni escalofríos. El examen físico muestra puñopercusión renal derecha levemente positiva, sin defensa abdominal ni signos de irritación peritoneal. El parcial de orina muestra hematuria microscópica sin leucocituria ni nitritos. Una tomografía computarizada de abdomen sin contraste confirma un cálculo de 4 mm en la unión ureterovesical derecha, con mínima dilatación pielocalicial y sin datos de obstrucción significativa ni infección asociada. ¿Cuál es el manejo INICIAL más adecuado del dolor y del cálculo en este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Hospitalización inmediata para litotricia extracorpórea de urgencia, dado que ya se confirmó el diagnóstico por imagen.",
        distractorProfile: "unnecessary_invasive_intervention_for_small_stone",
        incorrectFeedback:
          "Los cálculos pequeños (≤5 mm) ubicados en la unión ureterovesical tienen una probabilidad muy alta de expulsión espontánea. La litotricia urgente no está indicada en ausencia de obstrucción significativa, infección, dolor refractario o cálculos con baja probabilidad de paso espontáneo; su uso aquí somete al paciente a un procedimiento innecesario.",
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar opioides intravenosos como analgésico de primera línea, reservando los antiinflamatorios no esteroideos (AINES) únicamente para el dolor leve.",
        distractorProfile: "wrong_first_line_analgesic",
        incorrectFeedback:
          "Los AINES (por ejemplo, ketorolaco o diclofenaco) son la analgesia de PRIMERA línea en el cólico renoureteral, con eficacia igual o superior a los opioides y menos efectos adversos (náusea, sedación, depresión respiratoria); los opioides se reservan para dolor no controlado con AINES o cuando estos están contraindicados.",
      },
      {
        id: "C",
        label: "C",
        text: "Manejo ambulatorio con analgesia a base de AINES, hidratación adecuada y terapia expulsiva con un alfabloqueante (tamsulosina), con seguimiento clínico e imagenológico para confirmar la expulsión del cálculo.",
      },
      {
        id: "D",
        label: "D",
        text: "Colocación de urgencia de un catéter doble J como manejo definitivo, independientemente del tamaño del cálculo o de la presencia de complicaciones.",
        distractorProfile: "unnecessary_stent_placement",
        incorrectFeedback:
          "La derivación urinaria con catéter doble J (o nefrostomía) se reserva para obstrucción con infección urinaria concomitante, riñón único funcional, obstrucción bilateral, dolor refractario o deterioro de la función renal; no está indicada en un cálculo pequeño, no complicado, con alta probabilidad de expulsión espontánea.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "El paciente presenta un **Cólico Renoureteral** secundario a litiasis ureteral. El cuadro clínico típico incluye dolor cólico de inicio súbito, irradiado según la localización del cálculo, con un paciente inquieto que no encuentra posición antálgica (a diferencia del paciente con abdomen agudo peritonítico, que permanece inmóvil). La tomografía sin contraste es el estudio de elección para confirmar el diagnóstico y localizar el cálculo. El manejo se estratifica según el tamaño, la localización y la presencia de complicaciones: en cálculos pequeños (generalmente ≤10 mm, y especialmente ≤5 mm como en este caso), sin fiebre, sin obstrucción significativa ni deterioro de la función renal, el manejo es **ambulatorio**, con **AINES como analgesia de primera línea**, hidratación adecuada y **terapia médica expulsiva con un alfabloqueante (tamsulosina)**, que relaja la musculatura lisa ureteral y aumenta significativamente la tasa de expulsión espontánea del cálculo, con seguimiento clínico e imagenológico para confirmarla.",
    keyPoints: [
      "Dolor cólico en el flanco irradiado a la ingle, en un paciente inquieto que no encuentra posición antálgica = cólico renoureteral; la tomografía sin contraste es el estudio de elección.",
      "Manejo ambulatorio para cálculos pequeños no complicados: AINES como analgesia de primera línea + hidratación + alfabloqueante (tamsulosina) como terapia expulsiva.",
      "Urología - Urgencias / Cólico Renoureteral y Litiasis Urinaria.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-65",
    university: "UCC",
    examArea: "UROLOGÍA - URGENCIAS",
    topic: "Torsión Testicular",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "torsion-testicular"],
    statement:
      "Un adolescente de 14 años consulta a urgencias por dolor testicular izquierdo de inicio súbito e intenso, de 3 horas de evolución, asociado a náuseas y un episodio de vómito. No refiere trauma ni síntomas urinarios previos. Al examen físico, el testículo izquierdo está edematizado, ascendido y en posición horizontal (\"transversa\") respecto al derecho; el reflejo cremastérico izquierdo está ausente y el signo de Prehn es negativo (la elevación manual del testículo no alivia el dolor). No hay fiebre ni eritema escrotal. ¿Cuál es la conducta MÁS APROPIADA en este momento?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Solicitar una ecografía Doppler testicular urgente antes de tomar cualquier decisión quirúrgica, siempre que no se retrase más de 6 horas la evaluación.",
        distractorProfile: "imaging_delay_when_clinical_suspicion_high",
        incorrectFeedback:
          "Cuando la sospecha clínica es alta (presentación clásica y corto tiempo de evolución), la exploración quirúrgica no debe retrasarse esperando estudios de imagen; el Doppler se reserva para casos con presentación atípica o diagnóstico incierto, y nunca debe demorar la intervención dentro de la ventana crítica de salvamento testicular.",
      },
      {
        id: "B",
        label: "B",
        text: "Realizar exploración quirúrgica urgente, dentro de las primeras horas, sin retrasar la intervención por estudios adicionales, dado el cuadro clínico clásico y el corto tiempo de evolución.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar manejo conservador con antiinflamatorios y reposo, con reevaluación ambulatoria en 24 a 48 horas si el dolor no mejora.",
        distractorProfile: "dangerous_delay_risking_testicular_loss",
        incorrectFeedback:
          "La torsión testicular es una urgencia quirúrgica tiempo-dependiente; la tasa de salvamento testicular cae drásticamente después de 6-8 horas de evolución. Un manejo conservador ambulatorio con reevaluación diferida arriesga la pérdida completa del testículo por infarto isquémico.",
      },
      {
        id: "D",
        label: "D",
        text: "Administrar antibióticos de amplio espectro, asumiendo una epididimitis aguda como el diagnóstico más probable.",
        distractorProfile: "wrong_diagnosis_missing_surgical_emergency",
        incorrectFeedback:
          "La epididimitis aguda suele tener un inicio más gradual, asociarse a síntomas urinarios (disuria) o fiebre, y conservar el reflejo cremastérico con un signo de Prehn positivo (el dolor mejora con la elevación testicular); tratar este cuadro como epididimitis retrasa el diagnóstico de torsión y arriesga la pérdida del testículo en pocas horas.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "El paciente presenta una **Torsión Testicular**, una verdadera urgencia urológica más frecuente en adolescentes y adultos jóvenes, favorecida en muchos casos por una anomalía anatómica (\"deformidad en badajo de campana\"). Los hallazgos clave son el dolor testicular súbito e intenso, la **ausencia del reflejo cremastérico** (el signo aislado más sensible), el **signo de Prehn negativo** (a diferencia de la epididimitis, donde suele ser positivo) y la posición horizontalizada y ascendida del testículo. La tasa de salvamento testicular es cercana al 90-100% si la detorsión quirúrgica se realiza dentro de las primeras 6 horas, mientras que cae por debajo del 50% después de 12 horas y es cercana a 0% después de 24 horas. Por esta razón, cuando la sospecha clínica es alta y el tiempo de evolución es corto, la conducta correcta es proceder directamente a la **exploración quirúrgica urgente sin retrasar la cirugía esperando una ecografía Doppler**, que además puede dar falsos negativos y hace perder un tiempo crítico.",
    keyPoints: [
      "Dolor testicular súbito e intenso + reflejo cremastérico ausente + signo de Prehn negativo + testículo horizontalizado y ascendido = torsión testicular.",
      "Manejo: exploración quirúrgica urgente sin retrasar por estudios de imagen cuando la sospecha clínica es alta; la ventana de salvamento testicular es de aproximadamente 6 horas.",
      "Urología - Urgencias / Torsión Testicular.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-66",
    university: "UCC",
    examArea: "UROLOGÍA - URGENCIAS",
    topic: "Retención Urinaria Aguda por Hiperplasia Prostática Benigna",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "retencion-urinaria-aguda-hpb"],
    statement:
      "Un hombre de 72 años, con antecedente de hiperplasia prostática benigna sintomática manejada con tamsulosina de forma irregular, consulta a urgencias por incapacidad súbita para orinar de 8 horas de evolución, asociada a dolor suprapúbico intenso y progresivo. Al examen físico se palpa un globo vesical tenso y doloroso a la palpación, sin fiebre ni signos de irritación peritoneal. El paciente no ha logrado orinar desde el inicio del dolor a pesar de varios intentos. ¿Cuál es la conducta INICIAL más adecuada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Realizar cateterismo vesical (sonda Foley) de manera urgente para lograr la descompresión inmediata de la vejiga.",
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar tamsulosina oral de inmediato como única medida, esperando la resolución espontánea de la retención en las próximas horas.",
        distractorProfile: "medical_therapy_without_decompression",
        incorrectFeedback:
          "Los alfabloqueantes son útiles como terapia complementaria para facilitar un retiro exitoso de la sonda posteriormente, pero NO resuelven de forma inmediata una retención urinaria aguda ya establecida; la vejiga distendida y dolorosa debe descomprimirse primero mediante sondaje, no dejarse a la espera del efecto de un medicamento oral.",
      },
      {
        id: "C",
        label: "C",
        text: "Realizar una cistostomía suprapúbica quirúrgica como primera opción en todos los casos de retención urinaria aguda.",
        distractorProfile: "unnecessary_invasive_first_line",
        incorrectFeedback:
          "La cistostomía suprapúbica se reserva para cuando el cateterismo uretral falla o está contraindicado (por ejemplo, trauma uretral, estenosis infranqueable o prostatitis aguda severa); el sondaje uretral es la primera línea por ser menos invasivo y habitualmente exitoso.",
      },
      {
        id: "D",
        label: "D",
        text: "Solicitar una ecografía renal y vesical antes de cualquier intento de sondaje, para confirmar el diagnóstico de retención urinaria.",
        distractorProfile: "unnecessary_imaging_before_decompression",
        incorrectFeedback:
          "El diagnóstico de retención urinaria aguda es fundamentalmente clínico (globo vesical palpable, doloroso, con incapacidad para orinar); en un cuadro tan característico, no se debe retrasar el alivio de una vejiga claramente distendida y dolorosa esperando una confirmación imagenológica.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "El paciente presenta una **Retención Urinaria Aguda**, una complicación frecuente de la hiperplasia prostática benigna, que se manifiesta con incapacidad súbita para orinar, dolor suprapúbico intenso y un globo vesical palpable y doloroso. El diagnóstico es clínico y la conducta INMEDIATA es el **cateterismo vesical (sonda Foley) urgente** para descomprimir la vejiga, aliviar el dolor y prevenir el daño renal por presión retrógrada sostenida (uronefrosis). Después de la descompresión inicial, se debe evaluar el volumen drenado, vigilar la posible diuresis postobstructiva, y considerar un **ensayo de retiro de sonda (TWOC)** en los días siguientes, frecuentemente apoyado con un alfabloqueante como la tamsulosina para mejorar la probabilidad de éxito. La cistostomía suprapúbica queda reservada para los casos en que el sondaje uretral no es posible.",
    keyPoints: [
      "Hombre mayor con hiperplasia prostática benigna + incapacidad súbita para orinar + globo vesical palpable y doloroso = retención urinaria aguda.",
      "Manejo inicial: cateterismo vesical urgente para descompresión inmediata; posteriormente considerar un alfabloqueante para facilitar el retiro exitoso de la sonda.",
      "Urología - Urgencias / Retención Urinaria Aguda e Hiperplasia Prostática Benigna.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-67",
    university: "UCC",
    examArea: "TRAUMA - NEUROCIRUGÍA / URGENCIAS",
    topic: "Trauma Craneoencefálico y Escala de Glasgow",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "trauma-craneoencefalico-glasgow"],
    statement:
      "Un hombre de 27 años es traído a urgencias tras un accidente de motocicleta sin uso de casco. Al ingreso, no abre los ojos ante ningún estímulo (apertura ocular = 1), emite sonidos incomprensibles ante el dolor (respuesta verbal = 2) y retira la extremidad ante un estímulo doloroso (respuesta motora = 4), para una puntuación total en la Escala de Coma de Glasgow de 7/15. Presenta respiración irregular y saturación de oxígeno de 89% con oxígeno suplementario por cánula nasal. No hay otras lesiones evidentes en la evaluación primaria. ¿Cuál es la conducta INMEDIATA prioritaria en el manejo de este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Solicitar una tomografía craneal simple de inmediato como primer paso, antes de cualquier otra intervención.",
        distractorProfile: "imaging_before_airway_management",
        incorrectFeedback:
          "En un trauma craneoencefálico severo (Glasgow ≤8), el paciente no puede proteger su propia vía aérea y está en riesgo de hipoxia, hipercapnia y broncoaspiración; según el enfoque ABCDE, la vía aérea debe asegurarse ANTES de trasladar al paciente a tomografía o de cualquier otra intervención diagnóstica.",
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar hiperventilación profiláctica sostenida para reducir la presión intracraneal de manera preventiva.",
        distractorProfile: "harmful_prophylactic_hyperventilation",
        incorrectFeedback:
          "La hiperventilación sostenida y profiláctica provoca vasoconstricción cerebral excesiva, que puede reducir el flujo sanguíneo cerebral y empeorar la isquemia; solo se utiliza de forma breve y transitoria ante signos francos de herniación cerebral inminente, nunca como estrategia preventiva de rutina.",
      },
      {
        id: "C",
        label: "C",
        text: "Administrar manitol intravenoso en bolo como primera medida terapéutica, sin necesidad de asegurar previamente la vía aérea.",
        distractorProfile: "skipping_airway_before_treating_icp",
        incorrectFeedback:
          "Las medidas dirigidas a reducir la presión intracraneal, como el manitol, son complementarias y se indican una vez aseguradas la vía aérea, la ventilación y la circulación, o ante signos específicos de herniación; no sustituyen ni preceden a la protección de la vía aérea en un paciente en coma con riesgo de hipoxia y broncoaspiración.",
      },
      {
        id: "D",
        label: "D",
        text: "Realizar intubación orotraqueal para protección de la vía aérea, dado que un Glasgow ≤8 indica incapacidad del paciente para protegerla por sí mismo.",
      },
    ],
    correctOptionId: "D",
    explanation:
      "El paciente cursa con un **Trauma Craneoencefálico Severo**, definido por una puntuación en la Escala de Coma de Glasgow ≤8, asociado además a hipoxemia y patrón respiratorio irregular. La regla mnemotécnica clásica **\"Glasgow 8, intuba\"** resume el principio de que estos pacientes pierden la capacidad de proteger su vía aérea, con alto riesgo de hipoventilación (que eleva el CO2 y empeora la presión intracraneal), hipoxia y broncoaspiración, todos ellos determinantes mayores de **lesión cerebral secundaria**. Por ello, siguiendo el enfoque ABCDE del trauma, la prioridad inmediata es la **intubación orotraqueal para asegurar la vía aérea**, antes de proceder a la tomografía craneal o a otras medidas específicas para el manejo de la presión intracraneal. El objetivo global del manejo inicial del TCE severo es evitar activamente la hipoxia y la hipotensión, los dos factores más asociados a peor pronóstico neurológico.",
    keyPoints: [
      "El TCE severo se define por una Escala de Coma de Glasgow ≤8 al momento de la evaluación inicial (\"Glasgow 8, intuba\").",
      "Manejo: asegurar la vía aérea (intubación orotraqueal) ANTES de la neuroimagen o de medidas específicas para la presión intracraneal; evitar activamente la hipoxia y la hipotensión (lesión cerebral secundaria).",
      "Trauma - Neurocirugía / Trauma Craneoencefálico y Escala de Glasgow.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-68",
    university: "UCC",
    examArea: "TRAUMA - ORTOPEDIA / CUIDADO CRÍTICO",
    topic: "Trauma Raquimedular y Shock Neurogénico",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "trauma-raquimedular-shock-neurogenico"],
    statement:
      "Un hombre de 32 años se lanzó de cabeza a una piscina poco profunda y sufrió un golpe directo en la cabeza, con posterior incapacidad para mover las cuatro extremidades. Es trasladado con inmovilización espinal completa. Al ingreso presenta debilidad flácida en las cuatro extremidades, priapismo, y signos vitales de PA 78/45 mmHg con FC 52 lpm (bradicardia relativa). Al examen, las extremidades están tibias y bien perfundidas, sin palidez ni sudoración. No hay evidencia de sangrado activo externo ni hallazgos que sugieran otra fuente de hemorragia en la evaluación primaria. Ante esta hipotensión con bradicardia relativa y extremidades calientes, ¿cuál es la interpretación y conducta MÁS APROPIADA?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Asumir un shock hipovolémico por hemorragia oculta y administrar grandes volúmenes de cristaloides de forma agresiva, sin otras consideraciones.",
        distractorProfile: "misdiagnosis_as_hypovolemic_shock",
        incorrectFeedback:
          "La bradicardia y las extremidades calientes/vasodilatadas son inconsistentes con un shock hipovolémico clásico, que típicamente cursa con taquicardia compensadora y piel fría y pálida por vasoconstricción periférica; una reanimación agresiva y no guiada con líquidos, asumiendo hipovolemia, no aborda el mecanismo real (pérdida del tono simpático) y puede provocar sobrecarga de volumen y edema pulmonar.",
      },
      {
        id: "B",
        label: "B",
        text: "Iniciar atropina de forma rutinaria, sin evaluar previamente si la bradicardia genera compromiso hemodinámico o síntomas de bajo gasto.",
        distractorProfile: "unnecessary_routine_treatment",
        incorrectFeedback:
          "La atropina se reserva para la bradicardia sintomática con compromiso hemodinámico significativo, no se administra de forma rutinaria en todo paciente con bradicardia relativa; su uso indiscriminado puede favorecer taquiarritmias sin abordar la causa de fondo del shock.",
      },
      {
        id: "C",
        label: "C",
        text: "Reconocer un shock neurogénico secundario a una lesión medular alta, con manejo mediante reposición cuidadosa de líquidos y, si la hipotensión persiste, vasopresores (por ejemplo, norepinefrina) para preservar la presión de perfusión medular.",
      },
      {
        id: "D",
        label: "D",
        text: "Descartar el diagnóstico de shock neurogénico porque el paciente aún no cuenta con una lesión medular alta confirmada por estudios de imagen.",
        distractorProfile: "premature_diagnostic_exclusion",
        incorrectFeedback:
          "El diagnóstico de shock neurogénico es fundamentalmente clínico, basado en el mecanismo de trauma sugestivo de lesión medular alta junto con la tríada de bradicardia, hipotensión y extremidades calientes/vasodilatadas; no requiere confirmación por imagen para iniciar el tratamiento, y excluirlo prematuramente retrasa un manejo hemodinámico adecuado.",
      },
    ],
    correctOptionId: "C",
    explanation:
      "El mecanismo de trauma (zambullida en agua poco profunda con golpe cefálico) y la tetraplejía flácida con priapismo son altamente sugestivos de una **lesión medular alta (cervical)**. La combinación de **bradicardia, hipotensión y extremidades calientes/vasodilatadas** define el **Shock Neurogénico**, causado por la interrupción del tono simpático descendente por debajo del nivel de la lesión, con predominio vagal (bradicardia) y vasodilatación periférica sostenida (a diferencia del shock hipovolémico, que cursa con taquicardia y vasoconstricción/piel fría). El manejo consiste en mantener la inmovilización espinal, administrar líquidos con precaución (evitando la sobrecarga), y añadir **vasopresores como la norepinefrina** si la hipotensión persiste, con el objetivo de preservar una adecuada presión de perfusión medular y limitar la lesión secundaria. Es fundamental recordar que, en el paciente politraumatizado, siempre debe descartarse activamente una hemorragia concomitante antes de atribuir todo el shock exclusivamente al componente neurogénico.",
    keyPoints: [
      "Trauma con sospecha de lesión medular alta + hipotensión con bradicardia relativa + extremidades calientes (vasoplejía) = shock neurogénico, distinto del shock hipovolémico (taquicardia, piel fría).",
      "Manejo: inmovilización espinal, reposición cuidadosa de líquidos, y vasopresores (norepinefrina) si persiste la hipotensión, para preservar la perfusión medular; siempre descartar hemorragia concomitante en el politraumatizado.",
      "Trauma - Ortopedia / Trauma Raquimedular y Shock Neurogénico.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-69",
    university: "UCC",
    examArea: "UROLOGÍA - INFECTOLOGÍA",
    topic: "Pielonefritis Aguda Complicada",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "pielonefritis-aguda-complicada"],
    statement:
      "Una mujer de 52 años, con diabetes mellitus tipo 2 mal controlada, ha recibido tratamiento ambulatorio adecuado con un antibiótico de espectro apropiado durante las últimas 72 horas por un diagnóstico de pielonefritis aguda no complicada. Consulta nuevamente a urgencias porque persiste con fiebre de 39°C, dolor intenso en el flanco derecho, y ahora presenta deterioro clínico con PA 88/55 mmHg y FC 118 lpm. Al examen hay puñopercusión renal derecha intensamente positiva, sin otros hallazgos abdominales relevantes. Dado que la paciente no ha mejorado tras 72 horas de antibiótico adecuado y ahora muestra signos de deterioro, ¿cuál es la conducta MÁS APROPIADA?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Continuar el mismo esquema antibiótico ambulatorio sin cambios, ya que es habitual que la fiebre persista hasta 5 a 7 días en la pielonefritis.",
        distractorProfile: "normalizing_treatment_failure",
        incorrectFeedback:
          "La persistencia de fiebre o el deterioro clínico después de 48-72 horas de antibiótico adecuado NO es un curso esperado y constituye una señal de alarma que obliga a buscar activamente una complicación (absceso, obstrucción, pielonefritis enfisematosa); no debe interpretarse como algo normal ni manejarse sin más estudios.",
      },
      {
        id: "B",
        label: "B",
        text: "Solicitar una tomografía abdominal contrastada de urgencia para descartar complicaciones (absceso renal o perinéfrico, obstrucción con pionefrosis, pielonefritis enfisematosa) y hospitalizar a la paciente.",
      },
      {
        id: "C",
        label: "C",
        text: "Cambiar empíricamente a un antibiótico oral de otra familia farmacológica, sin realizar estudios de imagen adicionales.",
        distractorProfile: "empiric_switch_without_source_control_workup",
        incorrectFeedback:
          "Cambiar el antibiótico sin buscar activamente una complicación anatómica (absceso u obstrucción) no resuelve el problema de fondo cuando existe una colección o una vía urinaria obstruida que requiere drenaje; la paciente diabética tiene mayor riesgo de pielonefritis complicada, por lo que el estudio de imagen es indispensable.",
      },
      {
        id: "D",
        label: "D",
        text: "Indicar manejo domiciliario con hidratación oral abundante y reevaluación clínica en una semana.",
        distractorProfile: "dangerous_outpatient_delay",
        incorrectFeedback:
          "El deterioro hemodinámico (hipotensión, taquicardia) en una paciente diabética que no responde al antibiótico indica una infección grave y potencialmente complicada que requiere hospitalización y estudio urgente, no manejo domiciliario expectante durante una semana.",
      },
    ],
    correctOptionId: "B",
    explanation:
      "La paciente presenta una **Pielonefritis Aguda Complicada**. La diabetes mellitus es un factor de riesgo bien reconocido para complicaciones de la pielonefritis, incluyendo absceso renal o perinéfrico, obstrucción de la vía urinaria con pionefrosis, y la temida **pielonefritis enfisematosa** (infección necrotizante productora de gas, de alta mortalidad, más frecuente en diabéticos). La regla clínica clave es que la **persistencia de fiebre o el deterioro clínico después de 48-72 horas** de un antibiótico empírico adecuado y bien seleccionado debe hacer sospechar activamente una de estas complicaciones, y obliga a solicitar una **tomografía abdominal contrastada urgente** para identificarlas, junto con la hospitalización de la paciente. Si se documenta una obstrucción con pionefrosis, el manejo antibiótico por sí solo es insuficiente y se requiere **drenaje urgente** (nefrostomía percutánea o catéter ureteral doble J) además de la antibioticoterapia.",
    keyPoints: [
      "La persistencia de fiebre o el deterioro clínico tras 48-72 horas de antibiótico adecuado para pielonefritis obliga a sospechar una complicación (absceso, obstrucción, pielonefritis enfisematosa), especialmente en pacientes diabéticos.",
      "Manejo: tomografía contrastada urgente + hospitalización; si hay obstrucción con pionefrosis, se requiere drenaje urgente (nefrostomía percutánea o catéter doble J) además del antibiótico.",
      "Urología - Infectología / Pielonefritis Aguda Complicada.",
    ],
  },
  {
    id: "ucc-conv-2026-09-20-70",
    university: "UCC",
    examArea: "ORTOPEDIA PEDIÁTRICA - INFECTOLOGÍA",
    topic: "Osteomielitis Aguda Hematógena",
    difficulty: "hard",
    tags: ["ucc", "convocatoria", "2026_09_20", "osteomielitis-aguda-hematogena"],
    statement:
      "Un niño de 5 años consulta por fiebre de 3 días de evolución y dolor intenso, bien localizado, en el tercio distal del fémur derecho, sin antecedente traumático claro. Ha dejado de apoyar el peso sobre esa pierna y presenta cojera marcada. Al examen físico hay edema, calor local y dolor a la palpación sobre la región metafisaria distal del fémur, con leve limitación del rango de movimiento de la rodilla, pero sin derrame articular evidente. Los laboratorios muestran leucocitosis con neutrofilia, PCR y VSG marcadamente elevadas. Una radiografía simple de la extremidad afectada es normal, sin lesiones óseas visibles. Dado que la radiografía simple es normal en esta etapa temprana, ¿cuál es la conducta diagnóstica MÁS APROPIADA?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Realizar resonancia magnética con contraste de la extremidad afectada, el estudio más sensible para detectar los cambios tempranos de osteomielitis (edema de médula ósea, absceso subperióstico).",
      },
      {
        id: "B",
        label: "B",
        text: "Repetir la radiografía simple en 2 semanas, ya que los cambios óseos característicos de la osteomielitis tardan en aparecer y constituyen el único método diagnóstico confiable.",
        distractorProfile: "overreliance_on_delayed_plain_radiograph",
        incorrectFeedback:
          "Los cambios radiográficos característicos de osteomielitis (reacción perióstica, lesiones líticas) suelen aparecer solo después de 10 a 14 días de evolución; esperar y repetir la radiografía retrasa el diagnóstico y el inicio del tratamiento, permitiendo que progrese un daño óseo y articular potencialmente irreversible.",
      },
      {
        id: "C",
        label: "C",
        text: "Iniciar antibiótico empírico por vía oral de manera ambulatoria, sin estudios adicionales, dado que el cuadro clínico es suficiente para el diagnóstico definitivo.",
        distractorProfile: "skipping_confirmatory_workup_and_wrong_route",
        incorrectFeedback:
          "En la osteomielitis aguda hematógena, se debe complementar el cuadro clínico con estudios de imagen confirmatorios (idealmente antes de iniciar antibiótico, junto con hemocultivos) para definir la extensión y descartar un absceso que requiera drenaje quirúrgico; además, el tratamiento inicial en niños es típicamente por vía intravenosa, no oral ambulatoria.",
      },
      {
        id: "D",
        label: "D",
        text: "Realizar una gammagrafía ósea con tecnecio-99 como único estudio necesario, evitando la resonancia magnética por su mayor costo.",
        distractorProfile: "suboptimal_imaging_choice",
        incorrectFeedback:
          "La gammagrafía ósea es útil en ciertos contextos (por ejemplo, cuando el sitio afectado no está claro o la resonancia no está disponible), pero tiene menor resolución espacial y especificidad que la resonancia magnética, la cual diferencia mejor la osteomielitis de un absceso asociado y define con mayor precisión la extensión de la infección para planear una eventual cirugía.",
      },
    ],
    correctOptionId: "A",
    explanation:
      "El paciente presenta una **Osteomielitis Aguda Hematógena**, infección ósea frecuente en la infancia originada por siembra hematógena de bacterias en la región metafisaria, altamente vascularizada, de los huesos largos (fémur distal y tibia proximal son las localizaciones más comunes). El cuadro típico incluye fiebre, dolor óseo focal, cojera o rechazo a la marcha, y elevación de reactantes de fase aguda (leucocitosis, PCR y VSG). Un punto clave es que la **radiografía simple suele ser normal durante la primera a segunda semana**, mostrando solo edema de tejidos blandos de forma temprana, mientras que las lesiones líticas o la reacción perióstica aparecen tardíamente. La **resonancia magnética con contraste** es el estudio de imagen más sensible y específico para el diagnóstico temprano, ya que detecta el edema de médula ósea y permite identificar un absceso subperióstico o de partes blandas asociado, información fundamental para decidir si se requiere drenaje quirúrgico además del tratamiento antibiótico intravenoso empírico (dirigido principalmente contra *Staphylococcus aureus*, el patógeno más frecuente).",
    keyPoints: [
      "Niño con fiebre + dolor óseo focal + cojera o rechazo a la marcha + reactantes de fase aguda elevados, con radiografía inicial normal, obliga a sospechar osteomielitis aguda hematógena.",
      "La resonancia magnética con contraste es el estudio de imagen más sensible en la etapa temprana (antes de que aparezcan cambios en la radiografía simple) y guía la decisión de antibiótico intravenoso empírico (cobertura de S. aureus) y de drenaje quirúrgico si hay absceso.",
      "Ortopedia Pediátrica / Osteomielitis Aguda Hematógena.",
    ],
  },
];
