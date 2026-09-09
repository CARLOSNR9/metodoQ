import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UCC — Edición #7 (6 sep 2026) · Preguntas #31–#40.
 * Banco exclusivo del examen oficial.
 */
export const UCC_CONV_2026_09_06_31_40_QUESTIONS: TrainingQuestion[] = [
  {
    id: "ucc-conv-2026-09-06-31",
    university: "UCC",
    examArea: "MEDICINA INTERNA - INFECTOLOGÍA / DERMATOLOGÍA",
    topic: "Infecciones de Piel y Tejidos Blandos",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","infecciones-de-piel-y-tejidos-blandos","infecciones","de","piel","y","tejidos","blandos"],
    statement: "Un hombre de 35 años, sin antecedentes patológicos, consulta por fiebre alta de inicio súbito (39.5°C), escalofríos intensos, y una placa eritematosa en la pierna derecha que apareció hace 12 horas y ha crecido rápidamente. Al examen físico, la lesión es una placa **eritematosa, brillante, indurada, con bordes netos y sobreelevados, claramente demarcados** del tejido sano circundante, extremadamente dolorosa y caliente al tacto, sin fluctuación ni drenaje purulento. No hay antecedente de trauma evidente, aunque el paciente menciona una micosis interdigital crónica no tratada en ese pie. Los laboratorios muestran leucocitosis marcada con neutrofilia. ¿Cuál es el diagnóstico más probable y el antibiótico de PRIMERA LÍNEA dirigido al patógeno más frecuentemente implicado?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Celulitis; tratamiento con Clindamicina exclusivamente por su cobertura contra Staphylococcus aureus resistente a meticilina.",
        distractorProfile: "wrong_diagnosis_similar_presentation",
        incorrectFeedback: "Los bordes netamente demarcados y sobreelevados, junto con el aspecto brillante de la lesión, son característicos de la Erisipela (compromiso dérmico superficial por Streptococcus), no de la Celulitis, que típicamente presenta bordes difusos mal definidos por compromiso más profundo del tejido.",
      },
      {
        id: "B",
        label: "B",
        text: "Erisipela; tratamiento de primera línea con Penicilina (o Amoxicilina), dirigido principalmente contra Streptococcus pyogenes.",
      },
      {
        id: "C",
        label: "C",
        text: "Fascitis Necrotizante; manejo quirúrgico de urgencia como única prioridad, sin necesidad de antibioticoterapia inicial.",
        distractorProfile: "overdiagnosis_of_more_severe_condition",
        incorrectFeedback: "No hay en esta viñeta dolor desproporcionado, bullas hemorrágicas, crepitación ni toxicidad sistémica extrema que sugieran fascitis necrotizante; además, incluso en ese diagnóstico, los antibióticos siempre se inician de forma simultánea a la cirugía, nunca se omiten.",
      },
      {
        id: "D",
        label: "D",
        text: "Dermatitis de contacto alérgica; manejo con corticoides tópicos de alta potencia, sin necesidad de antibióticos.",
        distractorProfile: "wrong_diagnosis_missing_systemic_toxicity",
        incorrectFeedback: "La fiebre alta de inicio súbito, los escalofríos intensos y la leucocitosis con neutrofilia son indicadores claros de un proceso infeccioso bacteriano sistémico, hallazgos ausentes en la dermatitis de contacto alérgica, que no cursa con toxicidad sistémica ni fiebre significativa.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con **Erisipela**, una infección superficial de la piel que compromete la dermis superior y los linfáticos cutáneos superficiales, causada casi exclusivamente por **Streptococcus pyogenes (Estreptococo Beta-hemolítico del grupo A)**. La clave diagnóstica diferencial frente a la celulitis (que compromete tejido más profundo, incluyendo la dermis profunda y el tejido subcutáneo, y es causada más frecuentemente por Staphylococcus aureus además de Streptococcus) es la presentación característica de la erisipela: una placa **brillante, indurada, con bordes netamente demarcados y sobreelevados** respecto a la piel sana adyacente (a diferencia de la celulitis, cuyos bordes son típicamente difusos y mal definidos), acompañada de fiebre alta de inicio súbito y toxicidad sistémica marcada desde el comienzo. La micosis interdigital crónica es un factor predisponente clásico, ya que crea una puerta de entrada para el estreptococo. El tratamiento de primera línea es la **Penicilina** (o Amoxicilina en su forma oral), dado que el estreptococo del grupo A mantiene sensibilidad universal a este antibiótico.",
    keyPoints: [
    "Placa eritematosa BRILLANTE, INDURADA, con bordes NETOS y sobreelevados, claramente demarcados de la piel sana.; Fiebre alta de inicio súbito, toxicidad sistémica marcada.",
    "Erisipela (compromiso dérmico superficial, Streptococcus pyogenes). Diferencia clave con Celulitis: bordes NETOS/demarcados (Erisipela) vs. bordes DIFUSOS/mal definidos (Celulitis, más profunda). Tratamiento: Penicilina/Amoxicilina de primera línea.",
    "Infecciones de Piel y Tejidos Blandos / Erisipela."
],
  },
  {
    id: "ucc-conv-2026-09-06-32",
    university: "UCC",
    examArea: "PEDIATRÍA - NEFROLOGÍA / INFECTOLOGÍA",
    topic: "Nefrología Pediátrica",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","nefrolog-a-pedi-trica","nefrolog","a","pedi","trica"],
    statement: "Un niño de 6 años consulta por edema periorbitario matutino progresivo de una semana de evolución, que ha avanzado hasta edema generalizado con ascitis leve, asociado a espuma abundante en la orina. Refiere un episodio de faringoamigdalitis hace 3 semanas, resuelto sin tratamiento antibiótico. Al examen físico hay edema generalizado con fóvea, sin hipertensión arterial significativa. Los laboratorios muestran: Proteínas en orina de 24 horas muy elevadas (nefróticas), Albúmina sérica 1.8 g/dL, Colesterol total 380 mg/dL, Creatinina normal, y sedimento urinario sin hematuria significativa ni cilindros celulares. El Complemento sérico (C3) es normal. ¿Cuál es el diagnóstico más probable en este grupo etario, y cuál es el tratamiento de PRIMERA LÍNEA que debe iniciarse, considerando la alta probabilidad de respuesta favorable?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Glomerulonefritis Postestreptocócica; manejo de soporte con restricción de sal y diuréticos únicamente, sin inmunosupresión.",
        distractorProfile: "wrong_diagnosis_missing_nephritic_features",
        incorrectFeedback: "La Glomerulonefritis Postestreptocócica es un síndrome NEFRÍTICO caracterizado por hematuria, hipertensión y consumo de complemento (C3 bajo), hallazgos ausentes en este paciente; el patrón puramente nefrótico con complemento normal es mucho más compatible con Enfermedad de Cambios Mínimos.",
      },
      {
        id: "B",
        label: "B",
        text: "Síndrome Nefrótico de Cambios Mínimos; tratamiento de primera línea con Corticoides sistémicos (Prednisona), dada la alta probabilidad de respuesta.",
      },
      {
        id: "C",
        label: "C",
        text: "Nefropatía por IgA; tratamiento con Inhibidores de la Enzima Convertidora de Angiotensina como única terapia inicial.",
        distractorProfile: "wrong_diagnosis_wrong_presentation_pattern",
        incorrectFeedback: "La Nefropatía por IgA típicamente se presenta con hematuria macroscópica recurrente asociada temporalmente a infecciones respiratorias altas (días, no semanas después), un patrón nefrítico distinto al síndrome puramente nefrótico descrito en esta viñeta.",
      },
      {
        id: "D",
        label: "D",
        text: "Glomeruloesclerosis Focal y Segmentaria; inicio inmediato de Ciclofosfamida como primera línea terapéutica.",
        distractorProfile: "premature_aggressive_immunosuppression",
        incorrectFeedback: "Dado el perfil clínico clásico de un niño en este grupo etario con síndrome nefrótico puro, la conducta estándar es iniciar corticoides sin biopsia previa, ya que la mayoría corresponde a Cambios Mínimos con excelente respuesta esteroidea; la Ciclofosfamida se reserva para casos corticorresistentes confirmados histológicamente, no como tratamiento empírico inicial.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con un **Síndrome Nefrótico**, definido por la tétrada de proteinuria masiva, hipoalbuminemia, edema e hiperlipidemia. En niños entre 1 y 10 años, la causa más frecuente por amplio margen es la **Enfermedad de Cambios Mínimos**, caracterizada histológicamente por glomérulos de aspecto normal en microscopía de luz, con fusión difusa de los podocitos visible solo en microscopía electrónica. Es clave notar que este cuadro cursa característicamente **sin hipertensión significativa, sin hematuria relevante ni compromiso de la función renal**, y con **complemento (C3) normal**, lo que lo diferencia de patologías glomerulares con componente nefrítico o de causa postinfecciosa/inmunocomplejo. Dada la altísima probabilidad (>90%) de respuesta favorable a esteroides en niños de este grupo etario con presentación clásica, el tratamiento de primera línea, sin necesidad de biopsia renal inicial, es un **curso de Corticoides sistémicos (Prednisona)**, reservándose la biopsia renal para los casos que no responden adecuadamente al tratamiento esteroideo (corticorresistentes) o que presentan características atípicas.",
    keyPoints: [
    "Niño de 1-10 años con edema + proteinuria masiva + hipoalbuminemia + hiperlipidemia, SIN hipertensión ni hematuria significativa, Complemento normal.",
    "Síndrome Nefrótico de Cambios Mínimos (causa más frecuente en este grupo etario). Tratamiento de primera línea: Corticoides sistémicos, SIN necesidad de biopsia renal inicial (alta probabilidad de respuesta esteroidea).",
    "Nefrología Pediátrica / Síndrome Nefrótico de Cambios Mínimos."
],
  },
  {
    id: "ucc-conv-2026-09-06-33",
    university: "UCC",
    examArea: "MEDICINA INTERNA - GASTROENTEROLOGÍA / CIRUGÍA",
    topic: "Abdomen Agudo Perforativo",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","abdomen-agudo-perforativo","abdomen","agudo","perforativo"],
    statement: "Un hombre de 60 años, con antecedente de enfermedad ulcerosa péptica conocida, consulta por dolor epigástrico súbito e intensísimo que se generalizó rápidamente a todo el abdomen en los últimos 30 minutos, tras haber suspendido su Omeprazol hace un mes por cuenta propia. Al examen físico: el paciente está inmóvil, con facies de dolor intenso, el abdomen está **rígido \"en tabla\"**, con dolor a la palpación generalizado, rebote positivo difuso, y ausencia de ruidos intestinales. Signos vitales: PA 100/65 mmHg, FC 115 lpm, taquipnea. Una radiografía de tórax en posición vertical (o abdomen en bipedestación) muestra **aire libre subdiafragmático**. ¿Cuál es la conducta terapéutica PRIORITARIA e indispensable en este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Manejo médico exclusivo con Inhibidores de Bomba de Protones IV en altas dosis y observación clínica estrecha por 24 horas.",
        distractorProfile: "dangerous_medical_only_management",
        incorrectFeedback: "El manejo médico exclusivo no cierra la perforación ni detiene la contaminación peritoneal continua; observar 24 horas en un paciente con peritonitis generalizada y neumoperitoneo confirmado permite el desarrollo de sepsis abdominal severa y aumenta dramáticamente la mortalidad.",
      },
      {
        id: "B",
        label: "B",
        text: "Reanimación hídrica, antibioticoterapia de amplio espectro, y laparotomía (o laparoscopia) exploratoria de urgencia para reparación quirúrgica.",
      },
      {
        id: "C",
        label: "C",
        text: "Endoscopia digestiva alta urgente como primer paso diagnóstico-terapéutico antes de considerar cirugía.",
        distractorProfile: "contraindicated_procedure_in_perforation",
        incorrectFeedback: "La endoscopia digestiva alta está formalmente contraindicada ante sospecha de perforación de víscera hueca, ya que la insuflación de aire necesaria para el procedimiento puede empeorar significativamente la contaminación y extensión del neumoperitoneo.",
      },
      {
        id: "D",
        label: "D",
        text: "Sonda nasogástrica en aspiración continua exclusivamente, con reevaluación en 6 horas antes de decidir cualquier intervención.",
        distractorProfile: "incomplete_management_dangerous_delay",
        incorrectFeedback: "Aunque la sonda nasogástrica es una medida complementaria útil para descomprimir el estómago y reducir la fuga continua, de ninguna manera reemplaza ni retrasa la necesidad de reparación quirúrgica urgente de la perforación confirmada.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con una **Perforación de Úlcera Péptica** (probablemente precipitada por la suspensión abrupta del inhibidor de bomba de protones que protegía la mucosa gástrica/duodenal), generando una **Peritonitis Generalizada** por salida de contenido gástrico ácido y posteriormente bacteriano hacia la cavidad peritoneal. Los hallazgos clásicos son dolor epigástrico súbito e intensísimo que se generaliza rápidamente, abdomen \"en tabla\" (rigidez involuntaria generalizada), signos de irritación peritoneal difusa, y el hallazgo radiológico confirmatorio de **neumoperitoneo (aire libre subdiafragmático)**. Esta es una emergencia quirúrgica absoluta: la conducta correcta es la **reanimación hemodinámica inmediata, inicio de antibióticos de amplio espectro** (cubriendo flora entérica) **y laparotomía o laparoscopia exploratoria de urgencia** para localizar y reparar quirúrgicamente la perforación (típicamente con parche de epiplón o \"parche de Graham\" en perforaciones duodenales), además de lavado exhaustivo de la cavidad peritoneal.",
    keyPoints: [
    "Dolor abdominal súbito intensísimo que se generaliza rápidamente + abdomen \"en tabla\" + neumoperitoneo (aire libre subdiafragmático).",
    "Perforación de Víscera Hueca (típicamente úlcera péptica). Emergencia quirúrgica absoluta. Conducta: Reanimación + Antibiótico de amplio espectro + Cirugía de urgencia (laparotomía/laparoscopia), SIN retrasos por estudios adicionales.",
    "Abdomen Agudo Perforativo / Perforación de Úlcera Péptica."
],
  },
  {
    id: "ucc-conv-2026-09-06-34",
    university: "UCC",
    examArea: "GINECOLOGÍA Y OBSTETRICIA - INFECTOLOGÍA",
    topic: "Infectología Obstétrica",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","infectolog-a-obst-trica","infectolog","a","obst","trica"],
    statement: "Una mujer de 25 años, a las 30 semanas de gestación, consulta por fiebre de 38.5°C, taquicardia materna (FC 118 lpm) y taquicardia fetal sostenida (170 lpm) en el monitoreo. Refiere ruptura de membranas hace 18 horas, con salida de líquido amniótico de aspecto turbio y de olor fétido. Al examen físico, el útero está doloroso a la palpación de forma difusa, y hay leucorrea purulenta a través del cérvix. Los laboratorios muestran leucocitosis de 19.000/mm³ con desviación izquierda y PCR elevada. ¿Cuál es el diagnóstico más probable y la conducta OBSTÉTRICA prioritaria, independientemente de la edad gestacional?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Corioamnionitis; manejo exclusivamente con antibióticos IV, con el objetivo de prolongar el embarazo el mayor tiempo posible hasta término.",
        distractorProfile: "dangerous_prolongation_of_infected_pregnancy",
        incorrectFeedback: "Intentar prolongar un embarazo con corioamnionitis confirmada, incluso con cobertura antibiótica, expone tanto a la madre como al feto a mayor riesgo de sepsis y complicaciones neurológicas; el manejo estándar es la finalización inmediata del embarazo junto con los antibióticos, no solo estos últimos.",
      },
      {
        id: "B",
        label: "B",
        text: "Corioamnionitis; inicio inmediato de antibióticos de amplio espectro IV y finalización del embarazo (inducción del parto o cesárea según indicación obstétrica), independientemente de la edad gestacional.",
      },
      {
        id: "C",
        label: "C",
        text: "Vaginosis bacteriana simple; manejo ambulatorio con Metronidazol oral y control en una semana.",
        distractorProfile: "severe_underdiagnosis_of_life_threatening_infection",
        incorrectFeedback: "La combinación de fiebre materna, taquicardia materna y fetal, sensibilidad uterina y líquido amniótico purulento constituye un cuadro sistémico grave incompatible con una simple vaginosis bacteriana ambulatoria; subestimar esta presentación retrasa peligrosamente el tratamiento de una infección intraamniótica potencialmente letal para ambos.",
      },
      {
        id: "D",
        label: "D",
        text: "Trabajo de parto pretérmino no complicado; manejo con tocolíticos para detener las contracciones y prolongar la gestación.",
        distractorProfile: "contraindicated_tocolysis_in_infection",
        incorrectFeedback: "Los tocolíticos están formalmente contraindicados en presencia de corioamnionitis confirmada o fuertemente sospechada, ya que retrasar el nacimiento en este contexto aumenta el riesgo de sepsis materna y neonatal en lugar de beneficiar al feto.",
      },
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con **Corioamnionitis**, una infección intraamniótica que constituye una emergencia obstétrica, típicamente asociada a ruptura prolongada de membranas. Los criterios clínicos clave incluyen fiebre materna, taquicardia materna y/o fetal, sensibilidad uterina, y líquido amniótico purulento o de mal olor, apoyados por marcadores inflamatorios elevados. A diferencia de otras causas de amenaza de parto pretérmino donde el objetivo es prolongar el embarazo (con tocolíticos), en la **corioamnionitis confirmada el objetivo cambia radicalmente**: prolongar el embarazo expone tanto a la madre (riesgo de sepsis materna, endometritis, bacteriemia) como al feto (sepsis neonatal, daño neurológico) a mayor daño cuanto más tiempo permanezcan en un ambiente intraamniótico infectado. Por lo tanto, la conducta es el inicio inmediato de **antibióticos de amplio espectro intravenosos** y la **finalización del embarazo**, independientemente de la edad gestacional, mediante inducción del trabajo de parto o cesárea según las indicaciones obstétricas específicas del caso.",
    keyPoints: [
    "Gestante con Ruptura Prematura de Membranas prolongada + fiebre + taquicardia materna/fetal + líquido amniótico fétido/purulento + útero doloroso.",
    "Corioamnionitis. Regla de oro: es indicación de FINALIZAR el embarazo YA, independientemente de la edad gestacional (a diferencia de otras causas de amenaza de parto pretérmino donde se busca prolongarlo). Manejo: Antibiótico de amplio espectro IV + Finalización del embarazo.",
    "Infectología Obstétrica / Corioamnionitis."
],
  },
  {
    id: "ucc-conv-2026-09-06-35",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEFROLOGÍA / CUIDADO CRÍTICO",
    topic: "Urgencias Metabólicas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","urgencias-metab-licas","urgencias","metab","licas"],
    statement: "Un hombre de 68 años, con antecedente de Diabetes Mellitus tipo 2 y Enfermedad Renal Crónica estadio 3, es traído a urgencias por debilidad muscular generalizada progresiva y palpitaciones de 6 horas de evolución, tras haber iniciado hace 3 días un suplemento de potasio oral autoprescrito. El electrocardiograma muestra **ondas T picudas y simétricas**, con **ensanchamiento progresivo del complejo QRS** y aplanamiento de las ondas P. El potasio sérico reportado es de 7.8 mEq/L. Ante este hallazgo crítico con cambios electrocardiográficos ya presentes, ¿cuál es el primer fármaco que debe administrarse de INMEDIATO, considerando que su mecanismo de acción es estabilizar la membrana cardíaca sin reducir el potasio sérico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Insulina intravenosa con Dextrosa, como primer paso antes de cualquier otra intervención.",
        distractorProfile: "correct_therapy_wrong_sequence",
        incorrectFeedback: "La Insulina con Dextrosa es efectiva para desplazar el potasio hacia el espacio intracelular, pero tarda entre 10 y 20 minutos en hacer efecto; en presencia de cambios electrocardiográficos ya establecidos, el Gluconato de Calcio debe administrarse primero porque actúa en minutos protegiendo directamente al corazón mientras las demás terapias hacen efecto.",
      },
      {
        id: "B",
        label: "B",
        text: "Gluconato de Calcio intravenoso, administrado de inmediato para estabilizar la membrana miocárdica.",
      },
      {
        id: "C",
        label: "C",
        text: "Resina de intercambio catiónico (Kayexalato) oral, como tratamiento inicial más rápido y efectivo.",
        distractorProfile: "too_slow_for_emergency",
        incorrectFeedback: "Las resinas de intercambio catiónico actúan de forma muy lenta (horas) y no tienen ningún efecto protector inmediato sobre el miocardio; en un paciente con cambios electrocardiográficos ya presentes, esta terapia es demasiado lenta para ser la primera medida.",
      },
      {
        id: "D",
        label: "D",
        text: "Furosemida intravenosa en dosis alta, como primera medida para forzar la excreción renal de potasio.",
        distractorProfile: "unreliable_and_slow_in_renal_impairment",
        incorrectFeedback: "En un paciente con Enfermedad Renal Crónica, la respuesta a diuréticos de asa para excretar potasio es poco confiable y lenta; además, ninguna medida que solo busque eliminar potasio debe preceder a la estabilización inmediata de la membrana cardíaca con Calcio cuando ya hay cambios electrocardiográficos.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con **Hiperkalemia Severa con Cambios Electrocardiográficos** (ondas T picudas, ensanchamiento del QRS, aplanamiento de onda P), una emergencia metabólica que puede progresar rápidamente a arritmias ventriculares fatales o asistolia si no se trata de inmediato. Cuando ya existen cambios electrocardiográficos, la prioridad absoluta NO es bajar el nivel de potasio (eso viene después), sino **proteger al corazón del efecto tóxico inmediato del potasio elevado sobre la conducción cardíaca**. El **Gluconato de Calcio intravenoso** actúa en minutos estabilizando el potencial de membrana del miocardio (antagonizando el efecto del potasio a nivel de los canales rápidos de sodio), reduciendo el riesgo de arritmias letales, aunque **no modifica el nivel sérico de potasio en absoluto**. Posteriormente, se procede con medidas que sí desplazan el potasio hacia el intracelular (Insulina + Dextrosa, Beta-agonistas nebulizados, Bicarbonato si hay acidosis) y finalmente con medidas que remueven el potasio del cuerpo (resinas de intercambio, diuréticos si hay función renal, o diálisis en casos refractarios/falla renal avanzada).",
    keyPoints: [
    "Hiperkalemia + Cambios electrocardiográficos (ondas T picudas, QRS ancho, aplanamiento de onda P).",
    "Hiperkalemia con toxicidad cardíaca inminente. Secuencia terapéutica: 1º Gluconato de Calcio IV (estabiliza membrana, NO baja el potasio, actúa en minutos) → 2º Insulina+Dextrosa / Beta-agonistas (desplazan el potasio al intracelular) → 3º Resinas/Diálisis (remueven el potasio del cuerpo).",
    "Urgencias Metabólicas / Hiperkalemia con Toxicidad Cardíaca."
],
  },
  {
    id: "ucc-conv-2026-09-06-36",
    university: "UCC",
    examArea: "PEDIATRÍA - INFECTOLOGÍA / DERMATOLOGÍA",
    topic: "Infectología Pediátrica",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","infectolog-a-pedi-trica","infectolog","a","pedi","trica"],
    statement: "Un niño de 5 años consulta por fiebre de 39°C de 4 días de evolución, junto con un exantema difuso de aspecto \"de lija\" (áspero al tacto), de predominio en tronco y pliegues, que respeta relativamente la región peribucal (palidez perioral). Al examen físico se observa la lengua con un aspecto característico \"aframbuesado\" (papilas hipertróficas sobre un fondo eritematoso), y líneas de hiperpigmentación acentuada en los pliegues de flexión del codo (Líneas de Pastia). Refiere odinofagia intensa los días previos. Al examen faríngeo se observan amígdalas eritematosas con exudado blanquecino. ¿Cuál es el diagnóstico más probable, y cuál es la importancia terapéutica principal de tratar esta condición con antibióticos, más allá de aliviar los síntomas agudos?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Enfermedad de Kawasaki; el tratamiento con antibióticos no tiene ningún rol, siendo la IGIV el pilar terapéutico.",
        distractorProfile: "overlapping_findings_wrong_diagnosis",
        incorrectFeedback: "Aunque Kawasaki también puede presentar lengua aframbuesada y fiebre, carece del exantema característico \"en lija\" con palidez perioral y las Líneas de Pastia, y típicamente no se asocia a un cultivo faríngeo positivo para estreptococo con exudado amigdalino como el descrito en esta viñeta.",
      },
      {
        id: "B",
        label: "B",
        text: "Escarlatina; el tratamiento con Penicilina no solo trata la infección aguda, sino que previene complicaciones no supurativas graves como la Fiebre Reumática y la Glomerulonefritis.",
      },
      {
        id: "C",
        label: "C",
        text: "Síndrome de Piel Escaldada Estafilocócica; manejo exclusivamente con cuidados de la piel y analgesia, sin necesidad de antibióticos sistémicos.",
        distractorProfile: "wrong_diagnosis_and_incomplete_treatment",
        incorrectFeedback: "El Síndrome de Piel Escaldada Estafilocócica se presenta con ampollas flácidas y desprendimiento epidérmico extenso (Signo de Nikolsky positivo), un cuadro distinto al exantema áspero descrito; además, esta condición sí requiere antibióticos sistémicos antiestafilocócicos, no solo cuidados tópicos.",
      },
      {
        id: "D",
        label: "D",
        text: "Rubéola; manejo sintomático exclusivamente, ya que es una infección viral autolimitada sin indicación de antibióticos.",
        distractorProfile: "wrong_diagnosis_missing_bacterial_features",
        incorrectFeedback: "La Rubéola cursa con un exantema maculopapular fino (no áspero \"en lija\") y adenopatías retroauriculares/occipitales características, sin el exudado amigdalino purulento ni la lengua aframbuesada descritos aquí, que apuntan a una etiología bacteriana estreptocócica tratable.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con **Escarlatina**, causada por cepas de *Streptococcus pyogenes* (Estreptococo Beta-hemolítico del grupo A) productoras de toxina eritrogénica, generalmente en el contexto de una faringoamigdalitis estreptocócica. Los hallazgos clásicos son el exantema \"en lija\" (áspero al tacto) con palidez perioral relativa, la lengua \"aframbuesada\", y las Líneas de Pastia (hiperpigmentación acentuada en pliegues de flexión). Más allá de aliviar los síntomas agudos de la faringoamigdalitis, la razón fundamental para tratar esta infección con **Penicilina** (o Amoxicilina) es la **prevención de complicaciones no supurativas graves**: la **Fiebre Reumática Aguda** (que puede causar daño valvular cardíaco permanente) y, en menor medida discutida como prevenible completamente, la **Glomerulonefritis Postestreptocócica**. El tratamiento antibiótico oportuno, incluso iniciado hasta 9 días después del inicio de los síntomas, sigue siendo eficaz para prevenir la Fiebre Reumática.",
    keyPoints: [
    "Niño con faringoamigdalitis + exantema \"en lija\" + lengua aframbuesada + palidez perioral + Líneas de Pastia.",
    "Escarlatina (por Streptococcus pyogenes). Tratamiento: Penicilina/Amoxicilina. Objetivo terapéutico clave más allá de lo sintomático: PREVENIR Fiebre Reumática Aguda (complicación no supurativa grave con daño cardíaco valvular permanente).",
    "Infectología Pediátrica / Escarlatina y Prevención de Fiebre Reumática."
],
  },
  {
    id: "ucc-conv-2026-09-06-37",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEUMOLOGÍA / ALERGOLOGÍA",
    topic: "Urgencias Alergológicas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","urgencias-alergol-gicas","urgencias","alergol","gicas"],
    statement: "Un hombre de 30 años, con antecedente de alergia severa a maní, es traído a urgencias tras ingerir accidentalmente un alimento contaminado con trazas de maní en un restaurante hace 20 minutos. Presenta urticaria generalizada de aparición súbita, edema de labios y lengua, estridor inspiratorio, dificultad respiratoria con sibilancias difusas, e hipotensión (PA 78/45 mmHg) con mareo. Se administra Epinefrina intramuscular en la cara anterolateral del muslo, con mejoría clínica notable en los siguientes 15 minutos: resolución del estridor, mejoría de la presión arterial y del broncoespasmo. El paciente es dado de alta 2 horas después, completamente asintomático, sin indicaciones adicionales de vigilancia. Ocho horas después, regresa a urgencias con una recurrencia súbita de estridor, broncoespasmo severo e hipotensión, sin nueva exposición al alérgeno. ¿Cómo se denomina este fenómeno, y cuál es la conducta que debió haberse tomado tras la resolución inicial de los síntomas para prevenirlo?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Anafilaxia refractaria primaria; debió haberse repetido la dosis de Epinefrina inmediatamente tras la primera mejoría, independientemente de los síntomas.",
        distractorProfile: "wrong_terminology_and_unnecessary_treatment",
        incorrectFeedback: "La anafilaxia refractaria se refiere a la persistencia de síntomas a pesar de múltiples dosis de epinefrina durante el episodio agudo inicial, no a una recurrencia tardía tras resolución completa; repetir epinefrina sin síntomas activos no está indicado ni hubiera prevenido este fenómeno específico.",
      },
      {
        id: "B",
        label: "B",
        text: "Reacción Bifásica; el paciente debió haber permanecido en observación médica por al menos 4-6 horas (o más, según factores de riesgo) tras la resolución de los síntomas iniciales, antes del alta.",
      },
      {
        id: "C",
        label: "C",
        text: "Reacción alérgica tardía tipo IV (hipersensibilidad celular); no existe forma de prevenirla, es un fenómeno impredecible e inevitable.",
        distractorProfile: "incorrect_mechanism_and_nihilistic_framing",
        incorrectFeedback: "La anafilaxia (incluyendo su forma bifásica) es una reacción de hipersensibilidad tipo I mediada por IgE, no tipo IV celular tardía; y aunque no es completamente predecible qué paciente la desarrollará, el periodo de observación prolongado sí reduce el riesgo de que una recaída pase desapercibida sin tratamiento oportuno.",
      },
      {
        id: "D",
        label: "D",
        text: "Angioedema hereditario recurrente; debió haberse iniciado tratamiento profiláctico con Danazol antes del alta hospitalaria.",
        distractorProfile: "wrong_diagnosis_different_disease_entity",
        incorrectFeedback: "El angioedema hereditario es una entidad genética distinta relacionada con deficiencia del inhibidor de C1-esterasa, que no se desencadena por alérgenos alimentarios ni responde a epinefrina de la misma manera; esta viñeta describe claramente una anafilaxia IgE-mediada clásica con reacción bifásica posterior.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente presentó una **Reacción Anafiláctica Bifásica**, un fenómeno en el que los síntomas de anafilaxia recurren horas después (típicamente entre 1 y 8-12 horas, aunque se han descrito casos hasta 72 horas) de la resolución aparente del episodio inicial, SIN una nueva exposición al alérgeno desencadenante. Ocurre en un subgrupo de pacientes (estimaciones variables, hasta 20% en algunas series) y su mecanismo no está completamente esclarecido, aunque se relaciona con la liberación tardía de mediadores inflamatorios. Debido a este riesgo, las guías recomiendan que todo paciente que haya presentado una anafilaxia, especialmente si fue **severa** (compromiso respiratorio o cardiovascular, como en este caso), permanezca en **observación médica por un periodo prolongado, generalmente de 4 a 6 horas como mínimo** (y hasta 24 horas o ingreso hospitalario en casos de mayor riesgo: anafilaxia severa, respuesta incompleta a la epinefrina, o necesidad de múltiples dosis), antes de considerar el alta segura, precisamente para detectar y tratar oportunamente una posible reacción bifásica.",
    keyPoints: [
    "Recurrencia de síntomas anafilácticos HORAS después de la resolución inicial, SIN nueva exposición al alérgeno.",
    "Reacción Anafiláctica Bifásica. Prevención: Observación médica prolongada (mínimo 4-6 horas, más en casos severos) tras la resolución de la anafilaxia inicial, antes de dar de alta al paciente. Todo paciente dado de alta debe egresar con Epinefrina autoinyectable y plan de acción claro.",
    "Urgencias Alergológicas / Anafilaxia Bifásica."
],
  },
  {
    id: "ucc-conv-2026-09-06-38",
    university: "UCC",
    examArea: "CIRUGÍA GENERAL - ONCOLOGÍA",
    topic: "Oncología Mamaria",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","oncolog-a-mamaria","oncolog","a","mamaria"],
    statement: "Una mujer de 45 años consulta por un área de enrojecimiento, calor y edema difuso en la mama izquierda de 3 semanas de evolución, que ha empeorado progresivamente a pesar de dos ciclos de antibióticos orales indicados por sospecha de mastitis. Al examen físico, la piel de la mama muestra un aspecto de **\"piel de naranja\" (peau d'orange)**, con eritema difuso que compromete más de un tercio de la superficie mamaria, induración generalizada, y aumento de la temperatura local, SIN una masa palpable claramente definida ni fluctuación. No hay antecedente de lactancia ni embarazo reciente. Se palpan adenopatías axilares ipsilaterales firmes. ¿Cuál es el diagnóstico que debe sospecharse con ALTA prioridad ante la falta de respuesta al tratamiento antibiótico, y cuál es el estudio confirmatorio indispensable?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Mastitis bacteriana refractaria; debe intensificarse el esquema antibiótico y añadir drenaje quirúrgico del supuesto absceso.",
        distractorProfile: "dangerous_persistence_with_wrong_diagnosis",
        incorrectFeedback: "La falta de respuesta a dos ciclos antibióticos adecuados, en una mujer no lactante, sin fluctuación que sugiera absceso verdadero, es precisamente la señal de alarma clásica para sospechar cáncer de mama inflamatorio; persistir con más antibióticos retrasa peligrosamente el diagnóstico oncológico.",
      },
      {
        id: "B",
        label: "B",
        text: "Cáncer de Mama Inflamatorio; requiere biopsia de piel (incluyendo dermis) que demuestre émbolos tumorales en los linfáticos dérmicos.",
      },
      {
        id: "C",
        label: "C",
        text: "Absceso mamario subareolar recurrente asociado a ectasia ductal; manejo con drenaje simple bajo anestesia local.",
        distractorProfile: "wrong_diagnosis_missing_key_pattern",
        incorrectFeedback: "El absceso subareolar recurrente por ectasia ductal típicamente se presenta con una colección localizada y fluctuante cerca del pezón, no con el eritema difuso extenso tipo \"piel de naranja\" que compromete un tercio o más de la mama descrito en esta viñeta.",
      },
      {
        id: "D",
        label: "D",
        text: "Dermatitis de contacto irritativa por un nuevo detergente; manejo con corticoides tópicos y suspensión del irritante sospechoso.",
        distractorProfile: "trivializing_serious_diagnosis",
        incorrectFeedback: "La dermatitis de contacto no explica la induración profunda, la falta de respuesta a antibióticos previos ni las adenopatías axilares firmes palpables, hallazgos que en conjunto son mucho más compatibles con un proceso neoplásico infiltrante que con una reacción cutánea irritativa superficial.",
      },
    ],
    correctOptionId: "B",
    explanation: "La paciente presenta un cuadro altamente sugestivo de **Cáncer de Mama Inflamatorio**, una forma agresiva y de rápida progresión de cáncer de mama que se presenta clínicamente de forma similar a una mastitis o celulitis (eritema, calor, edema), lo que frecuentemente retrasa su diagnóstico al ser inicialmente tratado con antibióticos sin respuesta. La clave clínica de sospecha es precisamente la **falta de respuesta al tratamiento antibiótico adecuado**, junto con el hallazgo característico de **\"piel de naranja\" (peau d'orange)** que compromete una porción significativa de la mama, causado por la obstrucción de los linfáticos dérmicos por émbolos tumorales, generando edema cutáneo con retracción de los folículos pilosos. A diferencia del cáncer de mama típico, frecuentemente **no hay una masa palpable claramente definida**. El diagnóstico se confirma mediante una **biopsia de piel** (no solo del tejido mamario subyacente) que demuestre la presencia de **émbolos tumorales dentro de los linfáticos dérmicos**, el hallazgo histopatológico definitorio de esta entidad, que además requiere estudio de imagen mamario y estadificación urgente dado su comportamiento biológico agresivo.",
    keyPoints: [
    "Eritema/edema mamario progresivo tipo \"piel de naranja\" que NO responde a antibióticos, SIN masa palpable clara.",
    "Cáncer de Mama Inflamatorio (regla de oro: sospechar SIEMPRE ante \"mastitis\" que no responde a antibióticos, especialmente en mujer no lactante). Diagnóstico confirmatorio: Biopsia de PIEL con émbolos tumorales en linfáticos dérmicos.",
    "Oncología Mamaria / Cáncer de Mama Inflamatorio."
],
  },
  {
    id: "ucc-conv-2026-09-06-39",
    university: "UCC",
    examArea: "MEDICINA INTERNA - NEUROLOGÍA / OFTALMOLOGÍA",
    topic: "Urgencias Neuro-oftalmológicas",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","urgencias-neuro-oftalmol-gicas","urgencias","neuro","oftalmol","gicas"],
    statement: "Una mujer de 28 años, con índice de masa corporal de 34 kg/m² (obesidad), consulta por cefalea holocraneal progresiva de 2 meses de evolución, que empeora al acostarse y con las maniobras de Valsalva, asociada a episodios transitorios de visión borrosa (\"oscurecimientos visuales\" de segundos de duración, frecuentemente al cambiar de posición) y tinnitus pulsátil bilateral. Al examen físico neurológico no hay focalización motora ni sensitiva, pero el fondo de ojo revela **papiledema bilateral**. Una resonancia magnética cerebral con venografía es normal, sin lesiones ocupantes de espacio ni trombosis venosa. Se realiza una punción lumbar con la paciente en decúbito lateral, que reporta una presión de apertura de 32 cmH2O (elevada), con citoquímico del líquido cefalorraquídeo completamente normal. ¿Cuál es el diagnóstico más probable, y cuál es el tratamiento farmacológico de PRIMERA LÍNEA?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Migraña crónica con aura visual; tratamiento profiláctico con Topiramato como primera línea.",
        distractorProfile: "wrong_diagnosis_missing_papilledema_significance",
        incorrectFeedback: "El papiledema bilateral confirmado en el fondo de ojo NO es un hallazgo de la migraña común, que no eleva la presión intracraneal; este hallazgo, junto con la presión de apertura elevada en la punción lumbar, es diagnóstico de un proceso de hipertensión intracraneal verdadera, no de una cefalea primaria.",
      },
      {
        id: "B",
        label: "B",
        text: "Hipertensión Intracraneal Idiopática (Pseudotumor Cerebri); tratamiento de primera línea con Acetazolamida, más pérdida de peso.",
      },
      {
        id: "C",
        label: "C",
        text: "Meningitis crónica de baja virulencia; inicio de tratamiento antibiótico empírico prolongado de amplio espectro.",
        distractorProfile: "wrong_diagnosis_ignoring_normal_csf_cytochemistry",
        incorrectFeedback: "El citoquímico del líquido cefalorraquídeo normal (sin pleocitosis, sin hiperproteinorraquia, sin hipoglucorraquia) descarta un proceso infeccioso meníngeo activo; la única alteración es la presión de apertura elevada, característica específica de la hipertensión intracraneal idiopática.",
      },
      {
        id: "D",
        label: "D",
        text: "Trombosis de senos venosos cerebrales; inicio inmediato de anticoagulación con Heparina.",
        distractorProfile: "wrong_diagnosis_despite_ruling_out_test",
        incorrectFeedback: "La resonancia magnética con venografía, específicamente diseñada para visualizar los senos venosos cerebrales, fue reportada como normal, descartando trombosis venosa como causa; anticoagular a esta paciente no tendría ningún fundamento diagnóstico y expondría a riesgos innecesarios de sangrado.",
      },
    ],
    correctOptionId: "B",
    explanation: "La paciente cursa con **Hipertensión Intracraneal Idiopática (Pseudotumor Cerebri)**, una condición caracterizada por presión intracraneal elevada sin una causa estructural identificable (neuroimagen normal, sin lesión ocupante de espacio ni trombosis venosa) y con líquido cefalorraquídeo de composición normal salvo por la presión de apertura elevada. Afecta predominantemente a mujeres jóvenes con obesidad, y el cuadro clásico incluye cefalea que empeora en decúbito y con Valsalva, papiledema (con riesgo de pérdida visual permanente si no se trata), oscurecimientos visuales transitorios, y tinnitus pulsátil (por transmisión de la presión elevada al sistema venoso). El diagnóstico requiere haber excluido causas secundarias (mediante neuroimagen con venografía, para descartar trombosis de senos venosos, que puede simular este cuadro) y confirmar la presión de apertura elevada por punción lumbar con citoquímico normal. El tratamiento de primera línea combina **pérdida de peso** (con impacto terapéutico directo demostrado) junto con **Acetazolamida**, un inhibidor de la anhidrasa carbónica que reduce la producción de líquido cefalorraquídeo, con el objetivo primordial de preservar la función visual, ya que el papiledema no tratado puede progresar a atrofia óptica y ceguera irreversible.",
    keyPoints: [
    "Mujer joven con obesidad + cefalea postural (peor en decúbito/Valsalva) + papiledema + tinnitus pulsátil.; Neuroimagen normal (incluyendo venografía) + Presión de apertura elevada en LCR con citoquímico normal.",
    "Hipertensión Intracraneal Idiopática (Pseudotumor Cerebri). Tratamiento de primera línea: Acetazolamida + Pérdida de peso. Objetivo prioritario: preservar la visión (riesgo de atrofia óptica/ceguera por papiledema no controlado).",
    "Urgencias Neuro-oftalmológicas / Hipertensión Intracraneal Idiopática."
],
  },
  {
    id: "ucc-conv-2026-09-06-40",
    university: "UCC",
    examArea: "PEDIATRÍA - HEMATOLOGÍA / INFECTOLOGÍA",
    topic: "Hematología Pediátrica",
    difficulty: "hard",
    tags: ["ucc","convocatoria","2026_09_06","hematolog-a-pedi-trica","hematolog","a","pedi","trica"],
    statement: "Un niño de 4 años, con diagnóstico conocido de Anemia de Células Falciformes, es traído a urgencias por fiebre de 39.5°C de 6 horas de evolución, decaimiento e irritabilidad, sin foco infeccioso claro identificable al examen físico (no hay signos meníngeos, otoscopia normal, campos pulmonares limpios, abdomen sin hallazgos). Los padres refieren que el niño se ve \"más cansado de lo habitual\" pero sin dificultad respiratoria ni dolor óseo agudo actualmente. Dado el riesgo específico de este paciente por su condición hematológica de base, ¿cuál es la conducta terapéutica que debe tomarse de forma URGENTE, sin esperar los resultados de los cultivos, dado el riesgo de sepsis fulminante por gérmenes encapsulados?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Observación clínica ambulatoria con antipiréticos, dado que el examen físico no revela un foco infeccioso claro que amerite antibióticos.",
        distractorProfile: "dangerous_underestimation_of_functional_asplenia_risk",
        incorrectFeedback: "En un niño con anemia de células falciformes, la ausencia de un foco infeccioso claro NO reduce el riesgo de sepsis fulminante por asplenia funcional; el manejo ambulatorio expectante en este contexto específico puede resultar en deterioro séptico catastrófico en cuestión de horas.",
      },
      {
        id: "B",
        label: "B",
        text: "Hemocultivos y administración INMEDIATA de antibióticos empíricos de amplio espectro con cobertura para gérmenes encapsulados (ej. Ceftriaxona).",
      },
      {
        id: "C",
        label: "C",
        text: "Transfusión de concentrado de glóbulos rojos de forma profiláctica, como primera medida ante cualquier fiebre en estos pacientes.",
        distractorProfile: "wrong_priority_treatment",
        incorrectFeedback: "La transfusión no trata el riesgo infeccioso inmediato ni previene la sepsis fulminante por gérmenes encapsulados; se reserva para indicaciones específicas como crisis aplásica, secuestro esplénico agudo o anemia sintomática severa, no como primera medida ante fiebre aislada.",
      },
      {
        id: "D",
        label: "D",
        text: "Ácido fólico oral en dosis altas, como tratamiento específico de la fiebre asociada a la anemia de base.",
        distractorProfile: "irrelevant_chronic_supplement",
        incorrectFeedback: "El ácido fólico es un suplemento de mantenimiento crónico para compensar el recambio eritrocitario acelerado en la enfermedad de células falciformes, pero no tiene ningún efecto antimicrobiano ni utilidad en el manejo agudo de la fiebre y el riesgo séptico asociado.",
      },
    ],
    correctOptionId: "B",
    explanation: "El paciente con **Anemia de Células Falciformes** presenta fiebre, lo cual constituye una **emergencia pediátrica** en este grupo específico de pacientes, independientemente de que el examen físico no revele un foco infeccioso evidente. Estos niños tienen **asplenia funcional** (el bazo se autoinfarta progresivamente por episodios repetidos de vaso-oclusión y hemólisis crónica), lo que los deja extraordinariamente vulnerables a **sepsis fulminante por gérmenes encapsulados** (especialmente *Streptococcus pneumoniae*, pero también *Haemophilus influenzae* y *Neisseria meningitidis*), que sin el filtro esplénico normal pueden multiplicarse en la sangre sin control y causar choque séptico y muerte en cuestión de horas. Por esta razón, la conducta ante CUALQUIER fiebre significativa en un niño con enfermedad de células falciformes es la obtención de **hemocultivos** seguida de la administración **inmediata** de **antibióticos empíricos de amplio espectro** (típicamente una cefalosporina de tercera generación como Ceftriaxona), sin esperar los resultados de los cultivos ni un foco clínico evidente, ya que el riesgo de deterioro fulminante es demasiado alto para adoptar una conducta expectante.",
    keyPoints: [
    "Niño con Anemia de Células Falciformes + Fiebre (independientemente de si hay o no foco infeccioso claro).",
    "Riesgo de Sepsis Fulminante por Asplenia Funcional (gérmenes encapsulados, especialmente neumococo). Conducta: Hemocultivos + Antibiótico empírico de amplio espectro INMEDIATO (ej. Ceftriaxona), sin esperar resultados ni foco claro. Es una emergencia pediátrica por definición.",
    "Hematología Pediátrica / Fiebre en Anemia de Células Falciformes."
],
  }
];
