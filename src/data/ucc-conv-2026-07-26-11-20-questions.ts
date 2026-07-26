import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #4 (26 jul 2026) · Preguntas #11–#20.
 */
export const UCC_CONV_2026_07_26_11_20_QUESTIONS: TrainingQuestion[] = [
  {
    "id": "ucc-conv-2026-07-26-11",
    "university": "UCC",
    "examArea": "MEDICINA INTERNA - NEFROLOGÍA / URGENCIAS",
    "topic": "MEDICINA INTERNA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Hombre de 28 años es rescatado de los escombros tras un accidente de tránsito donde permaneció atrapado bajo un muro por 12 horas. Al ingreso a urgencias: PA 100/60 mmHg, FC 110 lpm. Presenta edema masivo y dolor extremo en ambas extremidades inferiores. La orina en la sonda vesical tiene aspecto de \"té oscuro\". Paraclínicos: Creatinina 2.8 mg/dL, Potasio 5.6 mEq/L, Fósforo 6.5 mg/dL. Creatina Quinasa (CPK) total en 65,000 U/L. El **Calcio sérico corregido es de 6.2 mg/dL (Hipocalcemia severa)**. El paciente se encuentra neurológicamente íntegro, sin tetania, reflejos de Chvostek y Trousseau negativos, y el electrocardiograma (ECG) muestra un ritmo sinusal sin prolongación del intervalo QT. ¿Cuál es el manejo MÁS apropiado para la alteración del calcio en este paciente?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Administrar Gluconato de Calcio al 10% en bolos intravenosos hasta lograr un calcio sérico > 8.0 mg/dL para prevenir arritmias inminentes."
      },
      {
        "id": "B",
        "label": "B",
        "text": "No administrar calcio intravenoso y enfocarse en la reanimación hídrica agresiva con cristaloides isotónicos."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Iniciar infusión continua de Calcitriol para movilizar el calcio desde el tejido óseo hacia el espacio intravascular."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Administrar Cloruro de Calcio por vía central asociado a Bicarbonato de Sodio para alcalinizar la orina y proteger el riñón."
      }
    ],
    "correctOptionId": "B",
    "explanation": "El paciente cursa con Rabdomiólisis severa por síndrome de aplastamiento. La hipocalcemia aguda profunda es un hallazgo clásico en la fase inicial de la rabdomiólisis. Fisiopatológicamente, el calcio plasmático precipita y se deposita masivamente en el músculo esquelético necrótico dañado. La regla de oro internacional (guías KDIGO y toxicología) establece que la hipocalcemia de la rabdomiólisis **NO DEBE TRATARSE** con calcio intravenoso a menos que el paciente presente síntomas neurológicos graves (tetania, convulsiones) o inestabilidad eléctrica comprobada en el ECG. Si se administra calcio exógeno innecesariamente, este se unirá al fósforo circulante y precipitará aún más en los túbulos renales (empeorando la falla renal) y en los músculos. Además, en la fase de recuperación (poliúrica), el calcio atrapado en el músculo se liberará de regreso a la sangre, causando una hipercalcemia de rebote que sería letal si el paciente recibió suplementos exógenos.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Elizabeth, esta es una de esas preguntas donde la inacción salva vidas. El residente ve un \"Calcio en 6.2\" y siente la necesidad imperiosa de pedir la ampolla de Gluconato. Si se la pones, los iones de calcio chocarán con la hiperfosfatemia brutal que tiene el paciente por la destrucción muscular, formando cristales de fosfato de calcio que \"petrificarán\" el riñón y los pulmones. Soporta la tentación de tratar el número en la pantalla; si el ECG está normal y no hay Chvostek, enfócate en ahogar a ese paciente en solución salina normal para que la mioglobina no destruya la nefrona.\n\n* distractorProfile: treating_the_number_not_the_patient\n* incorrectFeedback: Reponer calcio agresivamente en un paciente asintomático con rabdomiólisis agravará la calcificación metastásica de los tejidos blandos y empeorará la LRA por precipitación de cristales de fosfato cálcico intra-tubulares.\n* distractorProfile: wrong_pharmacological_mechanism\n* incorrectFeedback: El calcitriol (vitamina D activa) incrementa la absorción intestinal de calcio de forma tardía (días), siendo inútil en un trastorno de redistribución aguda tisular.\n* distractorProfile: deadly_chemical_incompatibility\n* incorrectFeedback: Nunca se debe administrar Calcio y Bicarbonato por la misma vía venosa, ya que precipitan instantáneamente formando carbonato de calcio (tiza), lo cual produce microembolias pulmonares letales; además, la alcalinización rutinaria en rabdomiólisis ya no es recomendada universalmente.",
    "keyPoints": [
      "Cuando veas:",
      "• Paciente con Rabdomiólisis severa (CPK > 10,000, orina oscura, trauma/inmovilización).",
      "• Hipocalcemia marcada pero ASINTOMÁTICA.",
      "Debes pensar en:",
      "Restricción absoluta de Calcio intravenoso. El manejo exige hidratación masiva con Solución Salina para evitar la precipitación tubular de mioglobina.",
      "Tema: Lesión Renal Aguda / Rabdomiólisis."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-12",
    "university": "UCC",
    "examArea": "PEDIATRÍA - INFECTOLOGÍA / NEONATOLOGÍA",
    "topic": "PEDIATRÍA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Recién nacido de 14 días de vida, producto de un embarazo no controlado y parto vaginal, es traído a urgencias porque la madre nota la aparición de un \"sarpullido de bombitas de agua\" en el cuero cabelludo, específicamente sobre la zona donde el obstetra le colocó un electrodo de monitorización espiral intraparto. Al examen físico: el neonato luce febrícula (37.7°C), presenta un racimo de 5 vesículas agrupadas sobre una base eritematosa en el vértex craneal, pero por lo demás se observa vigoroso, reactivo, succiona adecuadamente y no presenta dificultad respiratoria. ¿Cuál es la conducta inicial INDISPENSABLE para prevenir el daño neurológico permanente en este paciente?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Aplicar ungüento de Aciclovir tópico sobre las lesiones y programar cita control por dermatología pediátrica en 48 horas."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Iniciar Aciclovir intravenoso inmediato a dosis altas (60 mg/kg/día), realizar punción lumbar con PCR, cultivos virales de mucosas y enzimas hepáticas."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Prescribir Cefalexina oral por 7 días por diagnóstico clínico de impétigo bulloso leve del recién nacido."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Hospitalizar para observación clínica; iniciar antivirales intravenosos exclusivamente si el paciente desarrolla letargia, convulsiones o rechazo a la vía oral."
      }
    ],
    "correctOptionId": "B",
    "explanation": "El neonato cursa con una infección por el Virus del Herpes Simple (VHS) Neonatal. Clásicamente se clasifica en tres patrones: Piel, Ojos y Boca (SEM); Enfermedad del SNC (encefalitis); y Enfermedad Diseminada. Aunque el niño luce \"sano\" y vigoroso, la presencia de lesiones vesiculares en la piel de un neonato < 28 días (frecuentemente en la parte de presentación fetal o donde hubo trauma de la piel, como el electrodo) es una EMERGENCIA INFECTOLÓGICA ABSOLUTA. Hasta el 30% de los niños con enfermedad localizada en piel (SEM) tienen compromiso subclínico del Sistema Nervioso Central al momento del diagnóstico. Las guías exigen iniciar de inmediato Aciclovir INTRAVENOSO a dosis plenas e invadir al niño (Punción Lumbar, frotis oculares/orofaríngeos, pruebas hepáticas) para descartar diseminación, antes de que el virus necrose el cerebro.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Un error de triaje letal en pediatría es tratar una vesícula herpética neonatal como si fuera un simple brote viral benigno. La infección en el recién nacido no respeta las barreras corporales. Si ves la ampolla, el virus ya está en la sangre y probablemente cruzando la barrera hematoencefálica. Nunca uses Aciclovir tópico (Opción A); no tiene ninguna penetración sistémica y dejarás que el virus alcance el lóbulo temporal. Y esperar a que el niño convulsione o se ponga letárgico (Opción D) es esperar a que el daño cerebral sea irreversible; en el herpes neonatal, el tiempo es neurona.\n\n* distractorProfile: topical_inefficacy_in_systemic_threat\n* incorrectFeedback: El aciclovir tópico es ineficaz para prevenir la diseminación del virus hacia el sistema nervioso central o las vísceras; la enfermedad SEM en el neonato exige siempre terapia sistémica parenteral agresiva.\n* distractorProfile: wrong_etiology_and_inadequate_therapy\n* incorrectFeedback: Aunque el impétigo bulloso por *S. aureus* es un diferencial, en el periodo neonatal temprano cualquier lesión vesicular agrupada debe tratarse preventivamente como Herpes hasta que los cultivos y la PCR demuestren lo contrario, dada la asimetría de mortalidad.\n* distractorProfile: deadly_watch_and_wait\n* incorrectFeedback: Esperar la aparición de signos neurológicos francos (encefalitis clínica) implica que el parénquima cerebral ya ha sufrido necrosis extensa y licuefacción viral, asegurando un pronóstico de parálisis cerebral, retraso mental o muerte.",
    "keyPoints": [
      "Cuando veas:",
      "• Neonato (< 28 días) con lesiones vesiculares en la piel o mucosas.",
      "• Niño aparentemente \"sano\" o \"vigoroso\".",
      "Debes pensar en:",
      "Herpes Neonatal (Enfermedad SEM). Exige inicio de Aciclovir IV inmediato + Punción Lumbar obligatoria con PCR para VHS. Retrasar el tratamiento causa encefalitis necrotizante.",
      "Tema: Infecciones Perinatales / Herpes Neonatal."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-13",
    "university": "UCC",
    "examArea": "MEDICINA INTERNA - CARDIOLOGÍA / CUIDADO INTENSIVO",
    "topic": "MEDICINA INTERNA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Hombre de 42 años, usuario de drogas intravenosas, se encuentra en la UCI cursando el quinto día de hospitalización por una Endocarditis Infecciosa de la válvula aórtica nativa. A pesar de una respuesta inicial aceptable al tratamiento antibiótico, hoy la enfermera reporta un deterioro respiratorio súbito y profunda palidez. Al examen físico: PA 90/35 mmHg (Presión de pulso muy amplia), FC 130 lpm. Se ausculta un soplo diastólico *in decrescendo* de reciente aparición en el borde esternal izquierdo, acompañado de estertores crepitantes bilaterales hasta el tercio medio. Un ecocardiograma POCUS confirma la presencia de Insuficiencia Aórtica Aguda Severa por destrucción de una valva, con dilatación aguda del ventrículo izquierdo. ¿Cuál es el soporte hemodinámico puente OBLIGATORIO que debe iniciarse mientras se prepara el traslado de urgencia a cirugía cardiovascular?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Colocación inmediata de Balón de Contrapulsación Intraaórtico (BCIA) para mejorar la perfusión coronaria diastólica.",
        "distractorProfile": "lethal_device_contraindication",
        "incorrectFeedback": "La IA de grado moderado a severo es una contraindicación mecánica absoluta para el BCIA, ya que la inflación diastólica del balón forzará un reflujo masivo de sangre hacia el ventrículo izquierdo ya sobrecargado, provocando edema pulmonar inmediato y colapso."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Iniciar infusión de Vasodilatadores intravenosos de acción corta (como Nitroprusiato) asociados a inotrópicos (Dobutamina) si la presión lo tolera."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Administrar Betabloqueadores intravenosos (Esmolol) para prolongar la diástole y permitir un mejor llenado coronario.",
        "distractorProfile": "physiological_misunderstanding",
        "incorrectFeedback": "Prolongar la diástole en una insuficiencia aórtica aguda incrementa el tiempo de flujo regurgitante hacia el ventrículo izquierdo, aumentando agudamente la presión telediastólica y precipitando un choque obstructivo pulmonar letal."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Instaurar vasoconstrictores puros (Fenilefrina a dosis altas) para cerrar la periferia y forzar el aumento de la presión diastólica.",
        "distractorProfile": "wrong_hemodynamic_target",
        "incorrectFeedback": "Aumentar agresivamente la resistencia vascular sistémica (postcarga) con un alfa-agonista puro impedirá el flujo anterógrado, desviando todo el volumen sistólico en reversa hacia el corazón izquierdo por la válvula aórtica rota."
      }
    ],
    "correctOptionId": "B",
    "explanation": "El paciente cursa con Insuficiencia Aórtica (IA) Aguda severa, una emergencia mecánica donde la válvula aórtica se rompe súbitamente (usualmente por endocarditis o disección). A diferencia de la IA crónica, el ventrículo izquierdo no ha tenido tiempo de hipertrofiarse ni dilatarse para acomodar el volumen masivo de sangre que se regresa desde la aorta en diástole. Esto provoca un edema pulmonar fulminante y choque cardiogénico. El tratamiento puente a la cirugía exige **disminuir la postcarga** (resistencia a la salida de la sangre) y aumentar la frecuencia cardíaca (para acortar la diástole y evitar que haya mucho tiempo para que la sangre retroceda). Los vasodilatadores como el Nitroprusiato \"abren\" las arterias periféricas, forzando a que la sangre fluya hacia adelante en lugar de regresar al ventrículo, y los inotrópicos (Dobutamina) ayudan al bombeo.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Esta es una clásica trampa para el uso de dispositivos. El Balón de Contrapulsación Intraaórtico (BCIA) es maravilloso para la insuficiencia mitral aguda y el choque isquémico, pero está ABSOLUTAMENTE CONTRAINDICADO en la insuficiencia aórtica (Opción A). ¿Por qué? Porque el globo se infla en diástole dentro de la aorta para empujar sangre a las coronarias; si la válvula aórtica está rota, el globo bombeará la sangre en reversa directamente dentro del ventrículo izquierdo, estallándolo y matando al paciente. Asimismo, los Beta-bloqueadores (Opción C) son letales aquí: si frenas el corazón y prolongas la diástole, le das más tiempo a la sangre para regresar al corazón y ahogar los pulmones. Necesitas que la sangre \"escape\" hacia adelante rápido.",
    "keyPoints": [
      "Cuando veas:",
      "• Paciente con endocarditis o disección aórtica que hace edema pulmonar brusco y soplo diastólico nuevo.",
      "• Presión de pulso amplia (ej. 90/35).",
      "Debes pensar en:",
      "Insuficiencia Aórtica Aguda. Terapia de soporte: Vasodilatadores + Inotrópicos (Acortar la diástole, bajar la resistencia). Contraindicación absoluta: Balón de Contrapulsación Intraaórtico (BCIA) y Beta-bloqueadores.",
      "Tema: Urgencias Cardiovasculares / Valvulopatías Agudas."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-14",
    "university": "UCC",
    "examArea": "PEDIATRÍA - NEONATOLOGÍA / NEUMOLOGÍA",
    "topic": "PEDIATRÍA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Neonato masculino de término (39 semanas de gestación), producto de un parto por cesárea electiva programada sin trabajo de parto previo. Al nacer, el niño llora vigorosamente y tiene un Apgar de 8 y 9. Sin embargo, a la hora de vida, la enfermera nota la aparición de taquipnea sostenida (FR 85 rpm), quejido espiratorio leve y retracciones subcostales discretas. Sus signos vitales son: FC 150 lpm, T 36.8°C, SatO2 93% al aire ambiente. Se solicita una radiografía de tórax que evidencia hiperinsuflación pulmonar bilateral, aumento de la trama vascular perihiliar, y líquido atrapado en las cisuras interlobares. No se observan infiltrados reticulogranulares difusos ni patrón de vidrio esmerilado. ¿Cuál es el paso terapéutico con MAYOR evidencia y seguridad para este cuadro clínico?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Administrar de inmediato Furosemida intravenosa para forzar la reabsorción del líquido pulmonar retenido en las cisuras.",
        "distractorProfile": "physiologic_misconception_trap",
        "incorrectFeedback": "La furosemida sistémica no incrementa la absorción activa del líquido pulmonar epitelial (regulado por canales ENaC adrenérgicos) y su uso no ha demostrado acortar el tiempo de la taquipnea, pero sí induce alteraciones hidroelectrolíticas innecesarias en el neonato."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Brindar soporte respiratorio no invasivo (oxígeno por cánula o CPAP) y observación clínica; el cuadro suele resolver en 24-72 horas."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Administrar Surfactante Pulmonar exógeno a través de intubación orotraqueal técnica INSURE.",
        "distractorProfile": "wrong_respiratory_distress_pathology",
        "incorrectFeedback": "El surfactante es el tratamiento de elección para el Síndrome de Dificultad Respiratoria (Enfermedad de Membrana Hialina), propio de grandes prematuros con déficit de producción tensioactiva, el cual cursa con pulmones blancos y volumen bajo, no hiperinsuflados con líquido cisural."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Iniciar Ampicilina y Gentamicina endovenosas asumiendo neumonía neonatal atípica precoz hasta que los cultivos sean negativos.",
        "distractorProfile": "sepsis_overdiagnosis",
        "incorrectFeedback": "Aunque la sepsis neonatal temprana debe descartarse si hay factores de riesgo maternos (fiebre, RPM), un bebé vigoroso extraído por cesárea electiva con líquido claro, Apgar alto y Rx con perfil típico de TTN requiere monitorización, no antibioterapia empírica universal obligatoria."
      }
    ],
    "correctOptionId": "B",
    "explanation": "El paciente cursa con una **Taquipnea Transitoria del Recién Nacido (TTN)**. Es un trastorno respiratorio benigno y autolimitado clásico de los bebés a término (o pretérminos tardíos), característicamente asociado a nacimientos por **cesárea electiva sin trabajo de parto**. La fisiopatología radica en un retraso en la reabsorción del líquido pulmonar fetal (ya que la ausencia de contracciones uterinas y de estrés adrenérgico impide la activación de los canales de sodio epiteliales que \"secan\" el pulmón al nacer). El diagnóstico se apoya en la clínica precoz leve y una radiografía patognomónica que muestra líquido en las cisuras, \"corazón velloso\" por congestión linfática e hiperinsuflación (a diferencia del pulmón blanco y con volumen bajo de la enfermedad de membrana hialina). El manejo es estrictamente de SOPORTE (O2 o CPAP si la taquipnea es severa).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Un escenario de oro en el cunero, Elizabeth. El error más frecuente en la práctica médica es creer que porque hay \"líquido en el pulmón\" del neonato, hay que ponerle un diurético. Múltiples ensayos de Cochrane han demostrado que la Furosemida (Opción A) no acelera la curación de la TTN y solo expone al niño a hipovolemia y toxicidad renal/auditiva. El líquido pulmonar fetal no se depura por el riñón del bebé, se depura por los canales linfáticos del pulmón estimulados por la adrenalina. La paciencia, el oxígeno y el CPAP son la única receta.",
    "keyPoints": [
      "Cuando veas:",
      "• Recién nacido A TÉRMINO nacido por cesárea sin labor de parto.",
      "• Taquipnea leve-moderada que inicia en las primeras horas de vida.",
      "• Radiografía con \"líquido en las cisuras\" e hiperinsuflación, SIN patrón de vidrio esmerilado.",
      "Debes pensar en:",
      "Taquipnea Transitoria del Recién Nacido (TTN). Manejo puramente de soporte de O2; los diuréticos y el surfactante NO están indicados.",
      "Tema: Trastornos Respiratorios Neonatales / TTN."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-15",
    "university": "UCC",
    "examArea": "MEDICINA INTERNA - HEMATOLOGÍA / NEUMOLOGÍA",
    "topic": "MEDICINA INTERNA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Hombre de 54 años, con diagnóstico de Leucemia Mieloide Aguda, se encuentra en su día 14 post-quimioterapia de inducción con un recuento absoluto de neutrófilos mantenido en < 100/mm³ durante la última semana. Ha estado recibiendo Cefepime y Vancomicina por neutropenia febril desde el día 5. En las últimas 48 horas presenta reactivación de fiebre de 39°C, tos seca y dolor pleurítico derecho intenso. La tomografía computarizada (TC) de tórax de alta resolución evidencia un nódulo pulmonar denso de 2 cm en el lóbulo superior derecho, rodeado por un anillo de opacidad en vidrio esmerilado periférico (Signo del Halo). El galactomanano en suero resulta francamente positivo. ¿Cuál es el fármaco de PRIMERA LÍNEA de elección para el tratamiento de esta infección invasiva?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Anfotericina B desoxicolato intravenosa.",
        "distractorProfile": "outdated_historical_first_line",
        "incorrectFeedback": "La anfotericina B convencional fue desplazada hace años de la primera línea para Aspergilosis Invasiva por el Voriconazol, debido a la alta tasa de nefrotoxicidad y reacciones de infusión de la primera, y la superioridad demostrada en ensayos clínicos del triazol."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Voriconazol intravenoso seguido de terapia oral."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Caspofungina intravenosa a dosis de carga y mantenimiento.",
        "distractorProfile": "wrong_antifungal_class_preference",
        "incorrectFeedback": "Las equinocandinas (Caspofungina, Micafungina) son el tratamiento de primera línea para la Candidiasis Invasiva (Candidemia), pero en Aspergilosis son consideradas terapia de rescate de segunda línea o terapia de combinación salvataje en casos severos refractarios."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Adicionar un aminoglucósido (Amikacina) asumiendo resistencia de bacterias productoras de carbapenemasas.",
        "distractorProfile": "bacterial_blindness",
        "incorrectFeedback": "La presencia del signo del halo y la positividad del antígeno galactomanano sellan el diagnóstico de una infección por hongos filamentosos invasivos. Añadir amikacina destruirá la función renal sin impacto sobre el micelio fúngico activo en el parénquima pulmonar."
      }
    ],
    "correctOptionId": "B",
    "explanation": "El paciente cursa con una **Aspergilosis Pulmonar Invasiva (API)**. Es la infección fúngica oportunista más temida y clásica en pacientes con neutropenia profunda y prolongada (usualmente > 10 días). La triada diagnóstica incluye factores del huésped (leucemia/neutropenia prolongada), factores clínicos (fiebre refractaria a antibióticos de amplio espectro, dolor pleurítico) y, de manera pivotante, el hallazgo radiológico patognomónico: el **\"Signo del Halo\"** en la TC de tórax (un nódulo inflamatorio fúngico rodeado de un anillo de vidrio esmerilado que representa hemorragia por invasión y trombosis del vaso sanguíneo). La confirmación bioquímica se logra con el test de Galactomanano (antígeno de la pared del *Aspergillus*). Según las directrices conjuntas de la IDSA, el tratamiento de elección de primera línea para la Aspergilosis invasiva es el **Voriconazol**, el cual demostró una superioridad estadística significativa en supervivencia global y menos toxicidad renal frente a la antigua Anfotericina B.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Elizabeth, en oncología la imagen pulmonar te da el nombre del hongo. El *Aspergillus* es un hongo \"angioinvasivo\", le encanta meterse a las arterias y taparlas. Ese infarto pulmonar microscópico es lo que sangra alrededor del nódulo y forma el \"Halo\" que ves en la TAC, explicando además por qué el paciente tiene dolor torácico pleurítico de instauración súbita. Marcar Anfotericina B (Opción A) es un error de medicina desactualizada; hoy en día las guías internacionales prohíben someter al paciente leucémico a la nefrotoxicidad severa de la \"Anfo-terrible\" en primera instancia cuando el Voriconazol es superior y tiene la ventaja de hacer transición a pastillas para el alta temprana.",
    "keyPoints": [
      "Cuando veas:",
      "• Paciente oncológico con neutropenia prolongada (>10-14 días) y fiebre refractaria a ATB.",
      "• TC de tórax con \"Signo del Halo\" (Nódulo con vidrio esmerilado periférico) o \"Signo de la semiluna de aire\" (fase de recuperación).",
      "• Elevación del antígeno Galactomanano.",
      "Debes pensar en:",
      "Aspergilosis Pulmonar Invasiva. Fármaco de oro: Voriconazol. (La Anfotericina B ha sido desplazada a segunda línea o casos refractarios por su alta nefrotoxicidad).",
      "Tema: Infecciones Fúngicas Invasivas / Hematología."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-16",
    "university": "UCC",
    "examArea": "PEDIATRÍA - ONCOLOGÍA / NEUROLOGÍA",
    "topic": "PEDIATRÍA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Un lactante de 20 meses de edad es traído a urgencias porque en las últimas semanas ha presentado pérdida del equilibrio, irritabilidad y movimientos rápidos e involuntarios de los ojos en múltiples direcciones. Al examen físico resalta la presencia de equimosis periorbitaria bilateral (\"ojos de mapache\") sin antecedente de trauma, una masa firme e irregular palpable que cruza la línea media del abdomen, y sacudidas musculares rítmicas e irregulares del tronco y extremidades. El cuadro neuro-oftalmológico es clasificado como Síndrome de Opsoclono-Mioclono (\"dancing eyes, dancing feet\"). ¿Cuál es el tumor sólido pediátrico extracraneal MÁS probablemente asociado a este cuadro clínico paraneoplásico, y cuál es el examen bioquímico clave para apoyar el diagnóstico inicial?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Tumor de Wilms; requiere niveles de Renina plasmática y ecografía renal.",
        "distractorProfile": "classic_pediatric_mass_overlap",
        "incorrectFeedback": "El Tumor de Wilms típicamente se presenta como una masa lisa unilateral que NO cruza la línea media en un niño de apariencia sana; no se asocia a equimosis periorbitaria masiva por metástasis craneales ni causa síndromes paraneoplásicos de opsoclono-mioclono."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Neuroblastoma; requiere recolección de orina para cuantificar Ácido Vanililmandélico (VMA) y Ácido Homovanílico (HVA)."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Rabdomiosarcoma embrionario; requiere marcadores de mioglobina sérica.",
        "distractorProfile": "wrong_solid_tumor_pathogenesis",
        "incorrectFeedback": "El rabdomiosarcoma frecuentemente asienta en cabeza/cuello (orbita/parameníngeo) o tracto genitourinario (sarcoma botrioide en la vejiga/vagina), careciendo de la presentación masiva abdominal retroperitoneal catecolaminérgica descrita."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Hepatoblastoma; requiere cuantificación de Alfa-fetoproteína (AFP) sérica de urgencia.",
        "distractorProfile": "wrong_abdominal_organ_tumor",
        "incorrectFeedback": "El hepatoblastoma produce una gran masa localizada en el cuadrante superior derecho dependiente del hígado y eleva marcadamente la AFP, pero no provoca metástasis óseas craneales precoces ni alteraciones neurológicas autoinmunes mioclónicas."
      }
    ],
    "correctOptionId": "B",
    "explanation": "El paciente presenta la constelación patognomónica de un **Neuroblastoma** avanzado. El neuroblastoma es el tumor sólido extracraneal más frecuente en la primera infancia y se deriva de las células de la cresta neural (frecuentemente en la médula suprarrenal o ganglios simpáticos). Las claves clínicas supremas que lo diferencian del Tumor de Wilms son: la masa abdominal **irregular y que cruza la línea media** (el Wilms es liso y suele respetar la línea media), la presencia de metástasis óseas tempranas en el cráneo que dan la equimosis periorbitaria (\"ojos de mapache\"), y el cuadro paraneoplásico autoinmune patognomónico del **Síndrome de Opsoclono-Mioclono** (movimientos oculares sacádicos caóticos y mioclonías corporales). Al derivar del tejido simpático, el neuroblastoma secreta catecolaminas, por lo que el diagnóstico bioquímico inicial de oro es medir sus metabolitos urinarios: el Ácido Vanililmandélico (VMA) y el Ácido Homovanílico (HVA).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Para nunca dudar frente al papel. Las diferencias entre las dos grandes masas abdominales infantiles son claras. Tumor de Wilms: niño de 3 a 5 años, masa lisa, se queda en su lado (no cruza), riñón de origen, hipertensión y hematuria, y lo descubren al bañarlo. Neuroblastoma: bebé menor (1 a 2 años), niño muy enfermo, masa dura y nodular que cruza todo el abdomen (crece en retroperitoneo sobre la columna), tiene síntomas sistémicos y metástasis feas como los ojos de mapache. Y el síndrome de opsoclono-mioclono es una respuesta autoinmune donde los anticuerpos que atacan al tumor confunden al cerebelo del niño, haciéndole bailar los ojos de forma caótica. Apenas leas \"ojos de mapache\" sin maltrato infantil, pide los catecolaminos en orina (Opción B).",
    "keyPoints": [
      "Cuando veas:",
      "• Lactante (usualmente < 2 años) con masa abdominal que CRUZA la línea media.",
      "• Ojos de Mapache (equimosis periorbital no traumática).",
      "• Síndrome Opsoclono-Mioclono (\"dancing eyes, dancing feet\").",
      "Debes pensar en:",
      "Neuroblastoma suprarrenal. Células de la cresta neural. Se diagnostica midiendo VMA y HVA en orina, y se estadifica con gammagrafía con MIBG.",
      "Tema: Oncología Pediátrica / Neuroblastoma."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-17",
    "university": "UCC",
    "examArea": "MEDICINA INTERNA - GASTROENTEROLOGÍA / REUMATOLOGÍA",
    "topic": "MEDICINA INTERNA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Mujer de 22 años, previamente sana, consulta por un cuadro de instauración rápida (3 semanas) de ictericia severa, fatiga profunda y dolor articular difuso. Niega consumo de alcohol, paracetamol o uso reciente de drogas intravenosas. Al examen físico: escleras francamente ictéricas, sin ascitis ni estigmas de hepatopatía crónica. Exámenes de laboratorio: AST 1,850 U/L, ALT 1,920 U/L, Bilirrubina Total 8.5 mg/dL. Fosfatasa Alcalina en rangos normales (110 U/L). Las serologías para Hepatitis A, B y C son negativas. Un panel inmunológico reporta Anticuerpos Antinucleares (ANA) fuertemente positivos a 1:640 y **Anticuerpos Antimúsculo Liso (ASMA) francamente positivos**. Adicionalmente, el proteinograma evidencia una elevación masiva de Inmunoglobulina G (IgG) policlonal. ¿Cuál es el siguiente paso diagnóstico confirmatorio y la terapia específica inicial de PRIMERA LÍNEA obligatoria para esta patología?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Realizar Colangiopancreatografía por Resonancia Magnética (CPRM); iniciar tratamiento crónico con Ácido Ursodesoxicólico.",
        "distractorProfile": "cholangiopathy_mismatch",
        "incorrectFeedback": "La CPRM y el ácido ursodesoxicólico son el diagnóstico y tratamiento, respectivamente, de la Colangitis Esclerosante Primaria (asociada a colitis ulcerativa y patrón colestásico). Esta paciente tiene un patrón de lesión hepatocelular puro y agudo, no biliar."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Solicitar biopsia hepática percutánea para confirmar hepatitis de interfase; iniciar tratamiento con Prednisona a altas dosis asociada o no a Azatioprina."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Medir niveles de Ceruloplasmina sérica; iniciar de inmediato D-penicilamina y Zinc para quelar cobre circulante.",
        "distractorProfile": "wilson_overlap_error",
        "incorrectFeedback": "Aunque la Enfermedad de Wilson entra en el diferencial de hepatitis aguda en jóvenes, cursa con Coombs negativo/hemólisis secundaria, ceruloplasmina baja y anillos de Kayser-Fleischer, pero NO explica los títulos elevados de autoanticuerpos ASMA/ANA ni la hiper-IgG policlonal propios de la HAI."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Extraer sangre para titulación de Anticuerpos Antimitocondriales (AMA); iniciar recambio plasmático terapéutico para lavar inmunocomplejos.",
        "distractorProfile": "wrong_autoimmune_target",
        "incorrectFeedback": "Los AMA diagnostican la Colangitis Biliar Primaria, la cual produce un patrón colestásico crónico (fosfatasa alcalina alta), no hepatitis fulminante aguda; la plasmaféresis no tiene indicación primaria probada en el manejo de la hepatitis autoinmune clásica."
      }
    ],
    "correctOptionId": "B",
    "explanation": "La paciente cursa con un debut agudo (incluso fulminante) de **Hepatitis Autoinmune (HAI) Tipo 1**. El diagnóstico se sospecha firmemente ante la tríada de: 1) Elevación dramática de transaminasas con patrón hepatocelular puro (AST/ALT en los miles, sin elevación significativa de fosfatasa alcalina); 2) Hipergammaglobulinemia (IgG) policlonal llamativa; y 3) Serologías positivas para autoanticuerpos típicos del Tipo 1 (ANA y/o ASMA). A diferencia de otras hepatopatías, las guías internacionales (AASLD) exigen la realización de una **biopsia hepática** para confirmar el diagnóstico histológico patognomónico (infiltrado linfoplasmocítico portal con *hepatitis de interfase* o emperipolesis) y excluir la superposición con síndromes biliares. El tratamiento inmunosupresor es el pilar de rescate vital: se inician corticosteroides a dosis altas (Prednisona), usualmente añadiendo tempranamente Azatioprina como ahorrador de esteroides para el manejo crónico.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Elizabeth, revisa el contraste con la pregunta 68 del lote anterior. Si es una señora mayor con la Fosfatasa Alcalina en mil, con muchísima picazón y con el anticuerpo AMA (Antimitocondrial), es Colangitis Biliar Primaria (ácido ursodesoxicólico). Pero si es una chica de 20 años, sus transaminasas son las que están en mil (patrón hepatocelular que asusta), y sus anticuerpos son el ANA y el ASMA (Antimúsculo Liso), eso es Hepatitis Autoinmune. Su propio sistema inmune está devorando la placa de los hepatocitos. Si no le pones Prednisona hoy, hará una falla hepática aguda fulminante y terminará en urgencia cero para trasplante de hígado en una semana.",
    "keyPoints": [
      "Cuando veas:",
      "• Mujer joven con hepatitis aguda severa (transaminasas > 1000).",
      "• Marcador pivote: Inmunoglobulina G (IgG) muy alta y Anticuerpos Anti-Músculo Liso (ASMA) positivos.",
      "Debes pensar en:",
      "Hepatitis Autoinmune Tipo 1. Requiere biopsia confirmatoria de \"hepatitis de interfase\". El tratamiento de choque que salva el hígado es la terapia inmunosupresora (Corticoides ± Azatioprina).",
      "Tema: Hepatopatías Autoinmunes / Hepatitis Autoinmune."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-18",
    "university": "UCC",
    "examArea": "PEDIATRÍA - URGENCIAS / ENDOCRINOLOGÍA",
    "topic": "PEDIATRÍA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Un niño de 10 años, con diabetes mellitus tipo 1, fue ingresado a la unidad de cuidados intensivos pediátricos (UCIP) hace 6 horas por Cetoacidosis Diabética (CAD) severa. Al ingreso, su glucemia era de 650 mg/dL, pH 7.10 y HCO3 de 8 mEq/L (Anión Gap 24). Se inició un bolo hídrico seguido de una infusión continua de insulina intravenosa a 0.1 U/kg/h con solución salina normal a la velocidad de mantenimiento requerida. En el control de laboratorios de la hora 6, la glucemia ha caído rápidamente a **220 mg/dL**. Sin embargo, los gases venosos reportan: pH 7.20, HCO3 de 10 mEq/L y Anión Gap persistente en 18 (Acidosis metabólica de brecha amplia activa). El paciente se encuentra alerta, orientado y sin cefalea. ¿Cuál es el paso fisiológico MÁS crítico para ajustar el manejo de este paciente sin precipitar un daño metabólico mayor?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Suspender la infusión de insulina intravenosa de inmediato para prevenir hipoglucemia severa e iniciar esquema de insulina subcutánea.",
        "distractorProfile": "lethal_interruption_of_therapy",
        "incorrectFeedback": "Detener la insulina intravenosa antes de la resolución de la cetoacidosis bioquímica (Anion Gap < 12, pH > 7.30) reactivará instantáneamente la lipólisis, provocando un rebote severo de la acidosis y de los cuerpos cetónicos."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Disminuir la velocidad de la infusión de insulina a la mitad (0.05 U/kg/h) y mantener la solución salina sola.",
        "distractorProfile": "inadequate_metabolic_suppression",
        "incorrectFeedback": "Reducir sustancialmente la insulina sin aportar sustrato de glucosa enlentecerá críticamente la resolución de la acidosis y mantendrá al paciente en riesgo latente de hipoglucemia inadvertida prolongada."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Adicionar Dextrosa (Glucosa al 5% o 10%) a los líquidos intravenosos de mantenimiento y **continuar** la infusión de insulina IV a la velocidad actual o apenas reducida."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Administrar un bolo intravenoso de Bicarbonato de Sodio y administrar una colación de carbohidratos orales.",
        "distractorProfile": "harmful_adjunct_therapy",
        "incorrectFeedback": "El bicarbonato intravenoso en la CAD pediátrica está desaconsejado de rutina porque incrementa el riesgo del temido edema cerebral paradójico y retarda la corrección endógena natural de la cetosis."
      }
    ],
    "correctOptionId": "C",
    "explanation": "El manejo de la CAD exige comprender que el objetivo del tratamiento no es \"normalizar el azúcar\", sino **frenar la lipólisis y la cetogénesis** (cerrar el Anión Gap). La insulina es el único fármaco capaz de apagar la producción de cetonas ácidas por el hígado. Un fenómeno clásico en el tratamiento (como en el paciente de la viñeta) es que la glucemia cae por debajo del umbral de seguridad (250-300 mg/dL) MUCHO ANTES de que el Anión Gap logre cerrarse y el pH se normalice. La indicación protocolar absoluta de la ISPAD es que en este punto la infusión de insulina IV NUNCA debe apagarse (porque si la apagas, la cetogénesis se reactiva inmediatamente, abortando la curación de la cetoacidosis). Lo que se debe hacer es \"proteger\" al paciente de la hipoglucemia aportando azúcar exógeno (Dextrosa en los líquidos IV) para que la insulina pueda seguir limpiando el ácido de la sangre.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Un error de residente que le costará varios días más de hospitalización al pobre niño. El azúcar cae muy rápido porque la hidratación diluye la glucosa y mejora el filtrado renal para botarla por orina. Pero el ácido de la sangre (los cetoácidos) tarda horas en ser metabolizado por la insulina intracelular. Si tú apagas la bomba de insulina cuando el azúcar marca 220 (Opción A), dejas al paciente sin insulina en sangre. En cuestión de 30 minutos, su cuerpo \"pensará\" que volvió al estado de ayuno diabético absoluto y el hígado volverá a escupir cetonas masivamente. Tienes que añadirle dos frascos de DAD 10% a los líquidos para que la glucosa se mantenga entre 150 y 200, mientras la insulina a dosis altas termina el trabajo sucio de limpiar el ácido.",
    "keyPoints": [
      "Cuando veas:",
      "• Paciente en protocolo de Cetoacidosis Diabética (infusión de insulina).",
      "• El azúcar baja a metas seguras (< 250 mg/dL), pero los gases siguen ácidos (Anión Gap > 12).",
      "Debes pensar en:",
      "NO apagar la bomba de insulina. La insulina cura la acidosis, no solo baja el azúcar. Debes iniciar líquidos dextrosados (DAD 5% o 10%) para sostener la glucemia mientras la insulina sigue trabajando hasta cerrar el Anión Gap.",
      "Tema: Cetoacidosis Diabética / Líquidos y Electrolitos."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-19",
    "university": "UCC",
    "examArea": "MEDICINA INTERNA - NEFROLOGÍA / GASTROENTEROLOGÍA",
    "topic": "MEDICINA INTERNA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Hombre de 26 años acude a urgencias por debilidad muscular extrema e incapacidad para mantenerse de pie de inicio esta mañana. Tiene como antecedente consumo abusivo crónico de laxantes estimulantes durante el último año con fines de control de peso. Al examen físico se encuentra normotenso y eupneico, con marcada hipotonía en extremidades e hiporreflexia. Paraclínicos: Potasio sérico 2.1 mEq/L (Hipokalemia severa), Sodio 140 mEq/L, Cloro 115 mEq/L (Hipercloremia). Los gases arteriales revelan un pH de 7.28 y un HCO3 de 14 mEq/L (Acidosis Metabólica). El cálculo del Anión Gap sérico arroja un resultado de 11 mEq/L (Normal). Dado el dilema de una acidosis hiperclorémica, se ordena una muestra de orina en la cual se calculan los electrolitos: Sodio urinario 45 mEq/L, Potasio urinario 25 mEq/L, Cloro urinario 110 mEq/L. El **Anión Gap Urinario calculado es francamente NEGATIVO (-40 mEq/L)**. ¿Cuál es el significado fisiopatológico MÁS preciso de este Anión Gap urinario negativo en el contexto de su acidosis?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Confirma la presencia de una Acidosis Tubular Renal Tipo 1 (Distal) por fallo en la bomba de protones.",
        "distractorProfile": "opposite_urinary_anion_gap",
        "incorrectFeedback": "Las Acidosis Tubulares Renales, al implicar un daño intrínseco en el túbulo (falla en secretar ácidos), se caracterizan por una excreción mínima de amonio, lo que arroja invariablemente un Anión Gap Urinario POSITIVO (o tendiente a cero), descartando este diagnóstico de plano."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Demuestra que el riñón está respondiendo adecuadamente excretando grandes cantidades de Amonio ($NH_4^+$) para compensar una pérdida extrarrenal de bicarbonato."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Indica la presencia de aniones urinarios no medibles típicos de una cetoacidosis subclínica o intoxicación exógena aguda.",
        "distractorProfile": "wrong_serum_anion_gap_scenario",
        "incorrectFeedback": "La intoxicación por tóxicos no medibles o la cetoacidosis producen clásicamente una acidosis metabólica de anión gap sérico ELEVADO (>12), y su acumulación altera la brecha sérica primaria, no encajando en el patrón de un paciente con anión gap sérico de 11."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Sugiere una falla en la secreción tubular proximal de aniones inorgánicos, constituyendo un Síndrome de Fanconi incipiente.",
        "distractorProfile": "proximal_tubulopathy_error",
        "incorrectFeedback": "El Síndrome de Fanconi incluye la ATR tipo 2 (proximal), la cual, como todas las acidosis tubulares de origen renal en estado estacionario, cursa con un Anión Gap urinario Positivo al agotarse los tampones urinarios base, contrario al hallazgo de esta viñeta."
      }
    ],
    "correctOptionId": "B",
    "explanation": "El paciente cursa con una Acidosis Metabólica de Anión Gap (brecha aniónica sérica) Normal, la cual siempre se caracteriza por ser hiperclorémica. Las dos grandes causas de esto son las pérdidas GASTROINTESTINALES de bicarbonato (diarrea profunda o abuso de laxantes) o las pérdidas RENALES de bicarbonato (Acidosis Tubulares Renales - ATR). Para diferenciarlas con certeza matemática, se utiliza el Anión Gap Urinario (AGu = $Na^+$ urinario + $K^+$ urinario - $Cl^-$ urinario). El cloro en la orina sirve como un marcador indirecto del ión **Amonio ($NH_4^+$)**, el principal ácido que el riñón sano fabrica y excreta para deshacerse del exceso de protones (ácido sistémico). Si el AGu da un número muy NEGATIVO (como el -40 de este caso), significa que hay muchísimo Cloro urinario arrastrando consigo grandes cantidades de Amonio positivo no medible. Esto demuestra que **el riñón está totalmente sano y está luchando intensamente para botar ácido**, lo que prueba irrefutablemente que la causa de la acidosis está fuera del riñón (en el tracto GI, por la diarrea del laxante). Si el AGu fuera POSITIVO, indicaría que el riñón es incapaz de producir amonio para compensar, diagnosticando una Acidosis Tubular Renal.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** Un tema \"coco\" de la nefrología para muchos estudiantes, pero que con la mnemotecnia correcta no falla. Elizabeth, memoriza esto: \"Ne-GUT-ivo\". La palabra \"Gut\" en inglés significa intestino. Si el Anión Gap de la orina es NEGATIVO, el problema está en el \"GUT\" (diarrea o fístula intestinal) porque el riñón está haciendo su trabajo perfecto botando el ácido sistémico oculto como cloruro de amonio (por eso el cloro en orina es altísimo y vuelve la resta matemática negativa). En cambio, si el Anión Gap de la orina es POSITIVO, el riñón es el culpable (Acidosis Tubular Renal), porque su túbulo está roto y no puede generar amonio, dejando el nivel de cloro urinario bajo. Este chico pierde bicarbonato y potasio en litros por el inodoro (abuso de laxantes), pero su riñón está intacto tratando de salvarlo.",
    "keyPoints": [
      "Cuando veas:",
      "• Paciente con Acidosis Metabólica Hiperclorémica (Anion Gap Normal).",
      "• Dilema: ¿Pérdida por diarrea vs Falla del riñón (ATR)?",
      "• Anión Gap Urinario calculado NEGATIVO (p. ej. -20, -40).",
      "Debes pensar en:",
      "Pérdida Gastrointestinal de Bicarbonato. Un AG urinario Negativo significa que el riñón está excretando $NH_4^+$ adecuadamente (Ne-GUT-ivo = Gut/Intestino sano = Problema GI). Un AG urinario Positivo diagnostica ATR.",
      "Tema: Trastornos Ácido-Base / Anión Gap Urinario."
    ]
  },
  {
    "id": "ucc-conv-2026-07-26-20",
    "university": "UCC",
    "examArea": "MEDICINA INTERNA - URGENCIAS / TOXICOLOGÍA",
    "topic": "MEDICINA INTERNA",
    "difficulty": "hard",
    "tags": [
      "ucc",
      "convocatoria",
      "2026_07_26"
    ],
    "statement": "Un agricultor de 56 años de la zona rural montañosa del departamento de Nariño (Linares) es traído a urgencias en la madrugada durante el invierno. La familia reporta que, debido al intenso frío, decidieron dormir anoche con una estufa/brasero de leña encendida dentro de la habitación cerrada y sin ventanas. El paciente y dos familiares más despertaron con cefalea pulsátil severa, mareo, náuseas y confusión progresiva. Al ingreso, el paciente luce somnoliento y letárgico, pero extrañamente presenta una piel y mucosas \"color cereza\" brillante (no cianótico). La pulsioximetría de pulso periférica reporta una **SatO2 de 99%** respirando aire ambiente. Tras canalizar vena, un análisis de gases arteriales rápidos (co-oximetría) detecta unos niveles de Carboxihemoglobina sérica (COHb) del 35%. ¿Cuál es el fenómeno fisiopatológico que explica la lectura falsamente \"normal\" en el oxímetro de pulso de dedo y el tratamiento salvavidas OBLIGATORIO inmediato?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "El oxímetro convencional de dos longitudes de onda no distingue entre la oxihemoglobina y la carboxihemoglobina; se debe administrar Oxígeno suplementario al 100% por máscara de no reinhalación inmediatamente."
      },
      {
        "id": "B",
        "label": "B",
        "text": "La hipercapnia secundaria dilata los capilares del dedo aparentando una perfusión normal; se requiere administración de Naloxona y Flumazenil para revertir la letargia bulbar.",
        "distractorProfile": "wrong_toxicological_antidote",
        "incorrectFeedback": "La naloxona (opioides) y el flumazenil (benzodiacepinas) carecen de utilidad en la intoxicación por gases asfixiantes. La letargia es por hipoxia tisular directa, no por depresión del centro respiratorio por neurofármacos."
      },
      {
        "id": "C",
        "label": "C",
        "text": "El monóxido de carbono aumenta temporalmente la afinidad del oxígeno tisular local; se debe priorizar la hemodiálisis de urgencia ante la falla mitocondrial inminente.",
        "distractorProfile": "physiological_and_therapeutic_error",
        "incorrectFeedback": "El monóxido de carbono aumenta la afinidad de la hemoglobina por el oxígeno (desplaza la curva a la izquierda), impidiendo que el oxígeno se suelte en los tejidos, pero la hemodiálisis es completamente ineficaz para extraer un gas unido a la hemoglobina."
      },
      {
        "id": "D",
        "label": "D",
        "text": "La piel color cereza enmascara la lectura del láser infrarrojo del oxímetro; el manejo inicial es iniciar ventilación no invasiva a presión positiva sin alterar la FiO2 para evitar un barotrauma asfíctico.",
        "distractorProfile": "wrong_oxymetry_physics_and_management",
        "incorrectFeedback": "El error del oxímetro radica en la absorción lumínica idéntica de la carboxihemoglobina frente a la oxihemoglobina (falsa lectura interna del sensor de Hb), no en el tinte externo de la piel. Mantener una FiO2 ambiental baja perpetuará la vida media letal del CO."
      }
    ],
    "correctOptionId": "A",
    "explanation": "El paciente cursa con una **Intoxicación por Monóxido de Carbono (CO)**, un clásico de urgencias de climas fríos por calefacción a leña mal ventilada. El CO tiene una afinidad por la hemoglobina 250 veces mayor que el oxígeno, formando Carboxihemoglobina y asfixiando al tejido a nivel celular. La trampa mortal de esta intoxicación es la \"Falsa Tranquilidad\": la oximetría de pulso (saturador de dedo tradicional) funciona emitiendo dos ondas de luz, pero la carboxihemoglobina absorbe la luz roja con la *misma* longitud de onda exacta que la hemoglobina oxigenada (Oxihemoglobina). El aparato asume erróneamente que la molécula tóxica roja es oxígeno puro, reportando un falso 99-100%, cuando en realidad el paciente se está asfixiando a nivel tisular. El tratamiento innegociable es **Oxígeno normobárico al 100% mediante máscara de no reinhalación** con bolsa reservorio; el oxígeno puro a alta presión parcial compite y desplaza al CO de la hemoglobina, disminuyendo su vida media letal de 5 horas a escasos 40 minutos (y si hay coma o isquemia grave, se escala a cámara hiperbárica).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:** ¡Cuidado con la saturación en 99%, Elizabeth! El saturador de dedo básico no sabe distinguir si la hemoglobina está roja por oxígeno o por monóxido de carbono; solo ve el color rojo y asume que todo está bien. Es una trampa mortal en la clínica. Apenas sospeches de CO (brasero en cuarto cerrado), pide unos gases arteriales (co-oximetría) para medir la Carboxihemoglobina real y ponle al paciente una máscara con reservorio a 15 litros por minuto. Ni se te ocurra perder tiempo con naloxona (Opción B) o diálisis (Opción C); el único antídoto es desplazar ese gas venenoso de la sangre a pura presión de oxígeno puro.",
    "keyPoints": [
      "Cuando veas:",
      "• Familia entera o grupo que debuta simultáneamente con cefalea, náuseas y letargia en clima frío.",
      "• Piel \"color cereza\" (cherry-red skin).",
      "• Oximetría de pulso normal (SatO2 > 95%) a pesar de la hipoxia tisular.",
      "Debes pensar en:",
      "Intoxicación por Monóxido de Carbono (CO). Tratamiento innegociable: Oxígeno al 100% (desplaza el CO de la hemoglobina).",
      "Tema: Toxicología / Intoxicación por CO."
    ]
  }
];
