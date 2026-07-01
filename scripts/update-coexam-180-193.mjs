import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const coexamPath = path.join(__dirname, "../src/data/dr-q-coexam-questions.ts");

const questions = [
  {
    "id": 180,
    "examArea": "REUMATOLOGÍA",
    "topic": "REUMATOLOGÍA",
    "slug": "reumatologia",
    "difficulty": "medium",
    "correctOptionId": "C",
    "explanation": "La paciente presenta una reactivación leve del lupus eritematoso sistémico manifestada por compromiso mucocutáneo y articular, sin evidencia de afectación orgánica mayor. En este escenario, el manejo recomendado consiste en optimizar la terapia de base e iniciar glucocorticoides a dosis bajas según la intensidad de los síntomas.",
    "keyPoints": [
      "Cuando veas: Lupus eritematoso sistémico. Rash malar. Artralgias. Ausencia de compromiso orgánico mayor. Paciente estable.",
      "Debes pensar en: Brote leve de lupus.",
      "Tema: Manejo de las exacerbaciones del lupus eritematoso sistémico."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa la clasificación de los brotes de lupus según su gravedad.\nLa clave no es el antecedente de lupus.\nLa clave es:\nLa ausencia de compromiso de órgano mayor.\n¿Qué está ocurriendo realmente?\nLa paciente presenta:\n• Rash malar.\n• Artralgias.\n• Estabilidad hemodinámica.\n• Ausencia de fiebre.\n• Sin evidencia de daño orgánico significativo.\nEsto corresponde a:\nUn brote leve de lupus eritematoso sistémico.\n¿Cómo se clasifican los brotes de lupus?\nDe manera general pueden clasificarse en:\n• Leves.\n• Moderados.\n• Graves.\nLa clasificación depende del compromiso orgánico y del riesgo vital.\n¿Qué caracteriza un brote leve?\nGeneralmente incluye:\n• Artralgias.\n• Artritis leve.\n• Rash malar.\n• Fotosensibilidad.\n• Lesiones cutáneas limitadas.\nSin compromiso de:\n• Riñón.\n• Sistema nervioso central.\n• Corazón.\n• Pulmón.\n• Sistema hematológico severo.\n¿Por qué la hidroxicloroquina es fundamental?\nLa hidroxicloroquina constituye el tratamiento base del lupus porque:\n• Disminuye la actividad de la enfermedad.\n• Reduce recaídas.\n• Mejora manifestaciones cutáneas y articulares.\n• Disminuye el daño acumulado.\nPor ello:\nDebe mantenerse salvo contraindicación.\n¿Por qué utilizar glucocorticoides a dosis bajas?\nPermiten:\n• Controlar rápidamente la actividad inflamatoria.\n• Mejorar síntomas articulares.\n• Disminuir la actividad cutánea.\nEn brotes leves:\nLas dosis bajas suelen ser suficientes.\n¿Por qué NO utilizar ciclofosfamida?\nLa ciclofosfamida se reserva para:\nManifestaciones graves.\nPor ejemplo:\n• Nefritis lúpica proliferativa.\n• Neuro-lupus.\n• Vasculitis severa.\n• Hemorragia alveolar.\nNo existe ninguna de estas situaciones en el caso.\n¿Por qué NO administrar pulsos de metilprednisolona?\nLos pulsos intravenosos están indicados en:\nBrotes graves con amenaza para órganos mayores.\nLa paciente presenta:\nCompromiso exclusivamente mucocutáneo y articular.\n¿Por qué NO requiere UCI?\nNo presenta:\n• Inestabilidad hemodinámica.\n• Falla orgánica.\n• Sepsis.\n• Compromiso neurológico.\nPor tanto:\nNo existe indicación de manejo intensivo.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Lupus eritematoso sistémico.\"\nY responden:\nInmunosupresión agresiva.\nSin embargo:\nEl manejo depende de la gravedad del brote.\nEl dato decisivo es:\nLa ausencia de compromiso orgánico mayor.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar el brote lúpico.\n2.\tDeterminar órganos comprometidos.\n3.\tClasificar la gravedad.\n4.\tSi el brote es leve, optimizar tratamiento de base.\n5.\tUtilizar glucocorticoides a dosis bajas según necesidad.\nPerlas de examen\n✅ La hidroxicloroquina es el tratamiento de base del lupus eritematoso sistémico.\n✅ El rash malar es una manifestación clásica del lupus.\n✅ Las artralgias son frecuentes durante las exacerbaciones leves.\n✅ La presencia de compromiso renal cambia completamente el enfoque terapéutico.\n✅ Los pulsos de metilprednisolona se reservan para brotes graves.\n✅ La ciclofosfamida se utiliza en manifestaciones severas con riesgo de daño orgánico.\n✅ La gravedad del brote determina la intensidad del tratamiento.\nReferencias\n• EULAR Recommendations for the Management of Systemic Lupus Erythematosus.\n• American College of Rheumatology Guidelines.\n• Harrison's Principles of Internal Medicine.\n• Kelley and Firestein's Textbook of Rheumatology.\n• UpToDate: Treatment and Prognosis of Systemic Lupus Erythematosus.",
    "statement": "Mujer de 30 años con antecedente de lupus eritematoso sistémico consulta por cuadro clínico de una semana de evolución consistente en artralgias y aparición de rash malar. Al examen físico se encuentra hemodinámicamente estable, afebril, sin criterios de respuesta inflamatoria sistémica y sin evidencia de compromiso renal, neurológico, hematológico o cardiopulmonar.\n¿Cuál es el enfoque terapéutico más adecuado?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Iniciar pulsos de metilprednisolona intravenosa."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Iniciar ciclofosfamida intravenosa."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Optimizar tratamiento con hidroxicloroquina y administrar glucocorticoides a dosis bajas."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Ingreso a unidad de cuidados intensivos para inmunosupresión agresiva."
      }
    ]
  },
  {
    "id": 181,
    "examArea": "CIRUGÍA GENERAL",
    "topic": "CIRUGÍA GENERAL",
    "slug": "cirugia_general",
    "difficulty": "easy",
    "correctOptionId": "A",
    "explanation": "El paciente presenta la tríada clásica de obstrucción intestinal: dolor abdominal cólico, vómitos y distensión abdominal. La presencia de niveles hidroaéreos en la radiografía abdominal apoya fuertemente este diagnóstico.",
    "keyPoints": [
      "Cuando veas: Dolor abdominal tipo cólico. Vómitos. Distensión abdominal. Niveles hidroaéreos.",
      "Debes pensar en: Obstrucción intestinal.",
      "Tema: Oclusión intestinal."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa el reconocimiento clínico de la obstrucción intestinal.\nLa clave no es el dolor abdominal.\nLa clave es:\nLa combinación de síntomas y la radiografía.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Dolor abdominal cólico.\n• Vómitos.\n• Distensión abdominal.\n• Niveles hidroaéreos.\nEste conjunto de hallazgos es altamente sugestivo de:\nObstrucción intestinal mecánica.\n¿Por qué el dolor es cólico?\nEn la obstrucción intestinal el intestino intenta vencer el obstáculo mediante:\nContracciones peristálticas intensas.\nEsto produce:\nDolor intermitente tipo cólico.\n¿Qué producen los vómitos?\nLa acumulación de contenido intestinal proximal a la obstrucción genera:\n• Náuseas.\n• Vómitos.\n• Alteraciones hidroelectrolíticas.\n¿Por qué aparece la distensión abdominal?\nLa obstrucción provoca acumulación de:\n• Líquidos.\n• Gas intestinal.\nComo consecuencia:\nSe desarrolla distensión progresiva.\n¿Qué significan los niveles hidroaéreos?\nSon uno de los hallazgos radiológicos clásicos de:\nObstrucción intestinal.\nRepresentan:\nAcumulación simultánea de aire y líquido dentro de asas intestinales dilatadas.\n¿Por qué NO es apendicitis?\nLa apendicitis suele presentarse con:\n• Dolor localizado en fosa ilíaca derecha.\n• Signos apendiculares.\n• Fiebre.\nAdemás:\nLos niveles hidroaéreos no son un hallazgo característico.\n¿Por qué NO es pancreatitis?\nLa pancreatitis típicamente produce:\n• Dolor epigástrico irradiado a espalda.\n• Elevación de amilasa y lipasa.\n• Íleo reflejo ocasional.\nSin embargo:\nLa radiografía descrita orienta mucho más a obstrucción mecánica.\n¿Por qué NO es peritonitis?\nLa peritonitis suele acompañarse de:\n• Defensa abdominal.\n• Rigidez.\n• Signos de irritación peritoneal.\nEl caso especifica:\nAusencia de signos peritoneales.\n¿Cuál es la trampa de examen?\nMuchos estudiantes observan:\n\"Dolor abdominal y vómitos.\"\nY responden:\nPancreatitis o apendicitis.\nSin embargo:\nEl dato decisivo es:\nLa presencia de niveles hidroaéreos.\nEste hallazgo es clásico de:\nObstrucción intestinal.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar dolor cólico.\n2.\tReconocer vómitos y distensión.\n3.\tRevisar la radiografía.\n4.\tIdentificar niveles hidroaéreos.\n5.\tDiagnosticar obstrucción intestinal mecánica.\nPerlas de examen\n✅ La tríada clásica es dolor cólico, vómitos y distensión abdominal.\n✅ Los niveles hidroaéreos son un hallazgo característico de obstrucción intestinal.\n✅ El dolor suele ser intermitente al inicio.\n✅ La ausencia de irritación peritoneal sugiere ausencia de perforación.\n✅ Las adherencias posquirúrgicas son la causa más frecuente de obstrucción intestinal mecánica.\n✅ La tomografía abdominal ayuda a identificar el sitio y la causa de la obstrucción.\n✅ La aparición de signos peritoneales obliga a sospechar isquemia o perforación intestinal.\nReferencias\n• Schwartz's Principles of Surgery.\n• Sabiston Textbook of Surgery.\n• World Society of Emergency Surgery Guidelines.\n• UpToDate: Mechanical Small Bowel Obstruction in Adults.\n• Townsend: Sabiston Textbook of Surgery.",
    "statement": "Hombre de 70 años es llevado al servicio de urgencias por cuadro de dolor abdominal tipo cólico, vómitos y distensión abdominal de varias horas de evolución. Al examen físico presenta distensión abdominal y dolor a la palpación en mesogastrio, sin signos de irritación peritoneal. No presenta signos apendiculares. Se realiza radiografía simple de abdomen que evidencia múltiples niveles hidroaéreos.\n¿Cuál es el diagnóstico más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Obstrucción intestinal mecánica."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Apendicitis aguda."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Pancreatitis aguda."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Peritonitis secundaria."
      }
    ]
  },
  {
    "id": 182,
    "examArea": "CIRUGÍA GENERAL",
    "topic": "CIRUGÍA GENERAL",
    "slug": "cirugia_general",
    "difficulty": "medium",
    "correctOptionId": "D",
    "explanation": "La paciente presenta una hernia inguinal encarcelada, definida por la imposibilidad de reducir el contenido herniario. Aunque aún no existen signos claros de estrangulación intestinal, el riesgo de progresión a compromiso vascular intestinal obliga a realizar manejo quirúrgico urgente.",
    "keyPoints": [
      "Cuando veas: Masa inguinal. Dolor súbito. Hernia irreductible. Ausencia de signos peritoneales.",
      "Debes pensar en: Hernia encarcelada.",
      "Tema: Complicaciones de las hernias de la pared abdominal."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa las complicaciones agudas de las hernias abdominales.\nLa clave no es el dolor.\nLa clave es:\nLa irreductibilidad.\n¿Qué está ocurriendo realmente?\nLa paciente presenta:\n• Masa inguinal.\n• Dolor agudo.\n• Imposibilidad para reducir la hernia.\n• Ausencia de datos de perforación.\nEsto corresponde a:\nHernia encarcelada.\n¿Qué es una hernia encarcelada?\nEs aquella en la que:\nEl contenido herniario queda atrapado fuera de la cavidad abdominal.\nComo consecuencia:\nNo puede reducirse espontáneamente ni mediante maniobras simples.\n¿Por qué es una urgencia?\nPorque puede progresar hacia:\nHernia estrangulada.\nCuando esto ocurre aparece:\n• Compromiso vascular.\n• Isquemia intestinal.\n• Necrosis.\n• Perforación.\nPor ello:\nLa corrección quirúrgica no debe retrasarse.\n¿Cuál es la diferencia entre encarcelamiento y estrangulación?\nHernia encarcelada:\n• Irreductible.\n• Sin compromiso vascular demostrado.\nHernia estrangulada:\n• Irreductible.\n• Isquemia intestinal.\n• Riesgo de necrosis.\n• Mayor urgencia quirúrgica.\n¿Qué hallazgos sugieren estrangulación?\n• Eritema local.\n• Cambios violáceos de la piel.\n• Fiebre.\n• Taquicardia.\n• Irritación peritoneal.\n• Obstrucción intestinal avanzada.\nEstos datos no aparecen en el caso.\n¿Por qué NO realizar observación?\nLa irreductibilidad implica:\nRiesgo elevado de progresión a estrangulación.\nRetrasar el tratamiento aumenta la morbimortalidad.\n¿Por qué NO programar cirugía electiva?\nLas hernias reductibles pueden repararse electivamente.\nSin embargo:\nUna hernia encarcelada requiere intervención urgente.\n¿Por qué NO dar egreso?\nLa paciente presenta una complicación quirúrgica establecida.\nNo es candidata a manejo ambulatorio.\n¿Cuál es la trampa de examen?\nMuchos estudiantes observan:\n\"No hay cambios de coloración.\"\nY concluyen:\n\"No es urgente.\"\nSin embargo:\nEl dato decisivo es:\nLa irreductibilidad de la hernia.\nEsto define:\nHernia encarcelada y necesidad de cirugía urgente.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar la masa herniaria.\n2.\tDeterminar si es reductible.\n3.\tReconocer el encarcelamiento.\n4.\tBuscar signos de estrangulación.\n5.\tRealizar corrección quirúrgica urgente.\nPerlas de examen\n✅ La irreductibilidad define una hernia encarcelada.\n✅ La estrangulación implica compromiso vascular del contenido herniario.\n✅ Toda hernia encarcelada requiere valoración quirúrgica urgente.\n✅ Los cambios cutáneos sugieren progresión a estrangulación.\n✅ La demora terapéutica aumenta el riesgo de necrosis intestinal.\n✅ Las hernias reductibles suelen manejarse de forma electiva.\n✅ La evaluación temprana mejora el pronóstico quirúrgico.\nReferencias\n• Schwartz's Principles of Surgery.\n• Sabiston Textbook of Surgery.\n• European Hernia Society Guidelines.\n• World Society of Emergency Surgery Guidelines.\n• UpToDate: Management of Inguinal and Femoral Hernias.",
    "statement": "Paciente femenina de 45 años consulta por dolor de inicio súbito en la región inguinal derecha de 24 horas de evolución. Al examen físico se evidencia una masa inguinal palpable, irreductible y dolorosa. No presenta cambios en la coloración de la piel suprayacente ni signos de perforación intestinal. Se encuentra hemodinámicamente estable.\n¿Cuál es la conducta más adecuada?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Intentar reducción manual y dar egreso con seguimiento ambulatorio."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Solicitar tomografía abdominal contrastada y observar evolución."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Programar reparación quirúrgica electiva en los próximos meses."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Realizar valoración quirúrgica urgente y herniorrafia de urgencia."
      }
    ]
  },
  {
    "id": 183,
    "examArea": "CIRUGÍA GENERAL",
    "topic": "CIRUGÍA GENERAL",
    "slug": "cirugia_general",
    "difficulty": "medium",
    "correctOptionId": "B",
    "explanation": "La presencia de equimosis periumbilical corresponde al signo de Cullen, un hallazgo asociado a hemorragia retroperitoneal. En el contexto de dolor epigástrico irradiado a la espalda, náuseas y vómitos, orienta fuertemente hacia pancreatitis aguda grave, especialmente de tipo necrohemorrágico.",
    "keyPoints": [
      "Cuando veas: Dolor epigástrico intenso. Irradiación a espalda. Náuseas y vómitos. Equimosis periumbilical.",
      "Debes pensar en: Signo de Cullen y pancreatitis aguda grave.",
      "Tema: Pancreatitis aguda."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa signos semiológicos de gravedad en pancreatitis aguda.\nLa clave no es el dolor.\nLa clave es:\nLa equimosis periumbilical.\n¿Qué está ocurriendo realmente?\nLa paciente presenta:\n• Dolor epigástrico intenso.\n• Irradiación dorsal.\n• Náuseas.\n• Vómitos.\n• Equimosis periumbilical.\nEstos hallazgos son altamente sugestivos de:\nPancreatitis aguda grave.\n¿Qué es el signo de Cullen?\nEs la presencia de:\nEquimosis alrededor del ombligo.\nSe produce por:\nExtravasación de sangre hacia el tejido celular subcutáneo periumbilical.\nGeneralmente indica:\nHemorragia retroperitoneal o intraabdominal significativa.\n¿Con qué patologías se asocia?\nClásicamente con:\n• Pancreatitis aguda necrohemorrágica.\n• Embarazo ectópico roto.\n• Hemoperitoneo.\n• Trauma abdominal severo.\nSin embargo:\nEn los exámenes suele asociarse principalmente a pancreatitis aguda grave.\n¿Por qué el dolor irradia a la espalda?\nLa localización retroperitoneal del páncreas favorece:\nLa irradiación posterior del dolor.\nEste es uno de los hallazgos clínicos más característicos de la enfermedad.\n¿Qué indica la presencia del signo de Cullen?\nSugiere:\n• Mayor gravedad.\n• Necrosis pancreática.\n• Compromiso hemorrágico.\n• Mayor morbimortalidad.\nPor ello requiere:\nEvaluación y manejo hospitalario inmediato.\n¿Qué es el signo de Grey Turner?\nEs otro signo de hemorragia retroperitoneal.\nSe caracteriza por:\nEquimosis en los flancos.\nLa diferencia clásica es:\n• Cullen → periumbilical.\n• Grey Turner → flancos.\n¿Cuál es la trampa de examen?\nMuchos estudiantes recuerdan:\n\"Equimosis abdominal.\"\nPero confunden:\nSigno de Cullen con signo de Grey Turner.\nEl dato decisivo es:\nLa localización periumbilical.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar dolor epigástrico irradiado a espalda.\n2.\tReconocer signos de pancreatitis.\n3.\tObservar la localización de la equimosis.\n4.\tIdentificar signo de Cullen.\n5.\tSospechar pancreatitis aguda grave o necrohemorrágica.\nPerlas de examen\n✅ El signo de Cullen corresponde a equimosis periumbilical.\n✅ El signo de Grey Turner corresponde a equimosis en los flancos.\n✅ Ambos sugieren hemorragia retroperitoneal.\n✅ El dolor irradiado a espalda es típico de pancreatitis aguda.\n✅ La pancreatitis necrohemorrágica se asocia a mayor mortalidad.\n✅ La presencia de signos cutáneos indica enfermedad grave.\n✅ Cullen y Grey Turner son hallazgos clásicos de examen médico.\nReferencias\n• Atlanta Classification of Acute Pancreatitis.\n• Harrison's Principles of Internal Medicine.\n• Sabiston Textbook of Surgery.\n• Schwartz's Principles of Surgery.\n• UpToDate: Clinical Manifestations and Diagnosis of Acute Pancreatitis.",
    "statement": "Femenina de 60 años consulta por dolor abdominal epigástrico intenso de inicio súbito, irradiado hacia la espalda, acompañado de náuseas y vómitos. Al examen físico presenta dolor a la palpación en epigastrio y una equimosis importante a nivel periumbilical.\n¿A qué hallazgo semiológico corresponde este signo y cuál es el diagnóstico más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Signo de Grey Turner; colecistitis aguda."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Signo de Cullen; pancreatitis aguda grave."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Signo de Cullen; perforación de úlcera péptica."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Signo de Grey Turner; obstrucción intestinal."
      }
    ]
  },
  {
    "id": 184,
    "examArea": "CIRUGÍA GENERAL",
    "topic": "CIRUGÍA GENERAL",
    "slug": "cirugia_general",
    "difficulty": "medium",
    "correctOptionId": "C",
    "explanation": "El paciente presenta trauma abdominal penetrante asociado a signos de irritación peritoneal y FAST positivo para hemoperitoneo. Estos hallazgos constituyen indicación de exploración quirúrgica urgente debido a la alta probabilidad de lesión visceral significativa.",
    "keyPoints": [
      "Cuando veas: Trauma abdominal penetrante. Signo de Blumberg positivo. FAST positivo. Taquicardia. Tendencia a inestabilidad hemodinámica.",
      "Debes pensar en: Laparotomía exploratoria urgente.",
      "Tema: Trauma abdominal penetrante."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa las indicaciones absolutas de cirugía en trauma abdominal.\nLa clave no es la herida por arma blanca.\nLa clave es:\nLa presencia de peritonitis.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Trauma abdominal penetrante.\n• Dolor abdominal progresivo.\n• Taquicardia.\n• Signo de Blumberg positivo.\n• FAST positivo para líquido libre.\nEstos hallazgos sugieren:\nLesión intraabdominal con probable compromiso visceral.\n¿Qué significa el signo de Blumberg?\nCorresponde a:\nDolor a la descompresión brusca.\nEs un signo clásico de:\nIrritación peritoneal.\nEn trauma abdominal:\nLa presencia de peritonitis constituye indicación quirúrgica.\n¿Qué aporta el FAST?\nEl FAST demuestra:\n• Líquido libre en espacio de Morrison.\n• Líquido libre en pelvis.\nEn el contexto de trauma penetrante:\nDebe asumirse hemoperitoneo hasta demostrar lo contrario.\n¿Por qué la cirugía es la mejor conducta?\nLa combinación de:\n• Peritonitis.\n• Hemoperitoneo.\n• Trauma penetrante.\nIndica una probabilidad muy alta de:\n• Lesión intestinal.\n• Lesión hepática.\n• Lesión vascular.\n• Lesión mesentérica.\nPor ello:\nLa exploración quirúrgica no debe retrasarse.\n¿Por qué NO solicitar tomografía?\nLa tomografía es útil en pacientes:\n• Hemodinámicamente estables.\n• Sin signos de irritación peritoneal.\nSin embargo:\nLa presencia de peritonitis cambia completamente el algoritmo.\nLa cirugía es prioritaria.\n¿Por qué NO observar?\nLa observación puede ser apropiada en algunos pacientes seleccionados con trauma penetrante.\nPero nunca cuando existe:\n• Peritonitis.\n• Hemoperitoneo documentado.\n¿Por qué NO realizar lavado peritoneal diagnóstico?\nSu utilidad actual es limitada debido a:\n• Disponibilidad de FAST.\n• Disponibilidad de tomografía.\nAdemás:\nEl paciente ya presenta criterios quirúrgicos claros.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Normotenso.\"\nY responden:\nTomografía abdominal.\nSin embargo:\nEl dato decisivo es:\nSigno de Blumberg positivo.\nLa peritonitis constituye una indicación de cirugía independientemente de la presión arterial.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tEvaluar estabilidad hemodinámica.\n2.\tBuscar signos de irritación peritoneal.\n3.\tRealizar FAST.\n4.\tIdentificar hemoperitoneo.\n5.\tIndicar laparotomía exploratoria urgente.\nPerlas de examen\n✅ La peritonitis es una indicación absoluta de laparotomía exploratoria.\n✅ El FAST positivo identifica líquido libre intraabdominal.\n✅ En trauma penetrante el líquido libre suele corresponder a hemoperitoneo.\n✅ La taquicardia puede ser un signo temprano de choque hemorrágico.\n✅ No todo trauma penetrante requiere cirugía inmediata.\n✅ La presencia de irritación peritoneal modifica completamente la conducta.\n✅ La tomografía está indicada principalmente en pacientes estables sin peritonitis.\nReferencias\n• Advanced Trauma Life Support (ATLS) 11th Edition.\n• Eastern Association for the Surgery of Trauma (EAST) Guidelines.\n• Western Trauma Association Critical Decisions in Trauma.\n• Sabiston Textbook of Surgery.\n• UpToDate: Initial Evaluation and Management of Penetrating Abdominal Trauma.",
    "statement": "Paciente masculino de 25 años es llevado al servicio de urgencias tras sufrir una herida por arma blanca en el abdomen durante un intento de atraco. Refiere dolor abdominal progresivo y náuseas. Al examen físico presenta signo de Blumberg positivo. La ecografía FAST evidencia líquido libre intraabdominal.\n¿Cuál es la conducta más adecuada?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Solicitar tomografía abdominal contrastada."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Observación clínica seriada durante 24 horas."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Laparotomía exploratoria urgente."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Lavado peritoneal diagnóstico."
      }
    ]
  },
  {
    "id": 185,
    "examArea": "GASTROENTEROLOGÍA",
    "topic": "GASTROENTEROLOGÍA",
    "slug": "gastroenterologia",
    "difficulty": "hard",
    "correctOptionId": "B",
    "explanation": "El paciente presenta dispepsia persistente pese a tratamiento con inhibidores de bomba de protones y tiene más de 50 años. En este contexto está indicada la realización de endoscopia digestiva alta para descartar patología estructural del tracto gastrointestinal superior.",
    "keyPoints": [
      "Cuando veas: Dolor epigástrico crónico. Dispepsia persistente. Edad mayor de 50 años. Falta de respuesta a IBP.",
      "Debes pensar en: Endoscopia digestiva alta.",
      "Tema: Dispepsia."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa el algoritmo diagnóstico de la dispepsia.\nLa clave no es el antecedente de colecistectomía.\nLa clave es:\nLa edad y la persistencia de los síntomas.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Dolor epigástrico crónico.\n• Relación con la ingesta.\n• Ausencia de respuesta al tratamiento antisecretor.\n• Edad de 50 años.\nEsto corresponde a:\nSíndrome dispéptico en estudio.\n¿Qué es la dispepsia?\nEs un conjunto de síntomas originados en el tracto gastrointestinal superior, incluyendo:\n• Dolor epigástrico.\n• Ardor epigástrico.\n• Saciedad precoz.\n• Plenitud posprandial.\n¿Cuándo está indicada la endoscopia?\nLas guías recomiendan realizar endoscopia en presencia de:\n• Edad ≥50-60 años (según la guía).\n• Síntomas persistentes.\n• Falta de respuesta al tratamiento inicial.\n• Signos de alarma.\nEste paciente cumple:\nEdad de riesgo y persistencia sintomática.\n¿Qué busca la endoscopia?\nPermite identificar:\n• Úlcera gástrica.\n• Úlcera duodenal.\n• Gastritis erosiva.\n• Neoplasias gástricas.\n• Esofagitis.\n• Otras lesiones estructurales.\n¿Por qué NO continuar únicamente IBP?\nEl paciente ya recibió:\nTratamiento empírico.\nLa persistencia de síntomas obliga a:\nContinuar el estudio diagnóstico.\n¿Por qué NO solicitar colonoscopia?\nLa sintomatología corresponde al:\nTracto digestivo superior.\nNo existen datos que sugieran patología colónica.\n¿Por qué NO realizar únicamente observación?\nLa persistencia del cuadro requiere:\nDescartar enfermedad orgánica.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"No tiene pérdida de peso.\"\nY responden:\nContinuar IBP.\nSin embargo:\nEl dato decisivo es:\nEdad de 50 años y falta de respuesta al tratamiento inicial.\nEsto justifica:\nEndoscopia digestiva alta.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar síntomas dispépticos.\n2.\tEvaluar edad del paciente.\n3.\tBuscar signos de alarma.\n4.\tValorar respuesta al tratamiento inicial.\n5.\tSolicitar endoscopia digestiva alta cuando esté indicada.\nPerlas de examen\n✅ La dispepsia persistente requiere evaluación etiológica.\n✅ La endoscopia digestiva alta es el estudio de elección para descartar patología estructural.\n✅ La falta de respuesta a IBP obliga a reconsiderar el diagnóstico.\n✅ La edad mayor de 50 años modifica el algoritmo diagnóstico.\n✅ La ausencia de pérdida de peso no excluye enfermedad orgánica.\n✅ La úlcera péptica y las neoplasias deben descartarse en pacientes seleccionados.\n✅ La endoscopia permite diagnóstico y toma de biopsias cuando sea necesario.\nReferencias\n• American College of Gastroenterology Guidelines on Dyspepsia.\n• British Society of Gastroenterology Guidelines.\n• Harrison's Principles of Internal Medicine.\n• Sleisenger and Fordtran's Gastrointestinal and Liver Disease.\n• UpToDate: Approach to the Adult with Dyspepsia.",
    "statement": "Paciente masculino de 50 años con antecedente de colecistectomía laparoscópica consulta por dolor epigástrico de varios meses de evolución. Refiere que el dolor aparece posterior al consumo de alimentos y ha sido progresivo en frecuencia. Niega pérdida de peso, disfagia, odinofagia, melena, hematemesis o consumo frecuente de antiinflamatorios no esteroideos. Recibió tratamiento con inhibidor de bomba de protones durante 3 semanas sin mejoría clínica.\n¿Cuál es la conducta más adecuada?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Continuar inhibidor de bomba de protones por otros 6 meses."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Solicitar endoscopia digestiva alta."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Solicitar colonoscopia total."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Realizar manejo sintomático y control en un año."
      }
    ]
  },
  {
    "id": 186,
    "examArea": "CARDIOLOGÍA",
    "topic": "CARDIOLOGÍA",
    "slug": "cardiologia",
    "difficulty": "medium",
    "correctOptionId": "B",
    "explanation": "Los pacientes con fibrilación auricular asociada a miocardiopatía hipertrófica presentan un riesgo tromboembólico elevado independientemente del puntaje CHA₂DS₂-VA. Las guías actuales recomiendan anticoagulación oral crónica en todos estos pacientes, siendo los anticoagulantes orales directos la estrategia preferida en ausencia de contraindicaciones.",
    "keyPoints": [
      "Cuando veas: Miocardiopatía hipertrófica. Fibrilación auricular. CHA₂DS₂-VA bajo. Ausencia de eventos embólicos previos.",
      "Debes pensar en: Anticoagulación obligatoria.",
      "Tema: Fibrilación auricular en miocardiopatía hipertrófica."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa una excepción importante en el manejo de la fibrilación auricular.\nLa clave no es el CHA₂DS₂-VA.\nLa clave es:\nLa presencia de miocardiopatía hipertrófica.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Miocardiopatía hipertrófica.\n• Fibrilación auricular.\n• CHA₂DS₂-VA de 0.\nEn la mayoría de los pacientes con fibrilación auricular:\nUn puntaje de 0 implica riesgo embólico bajo.\nSin embargo:\nLa miocardiopatía hipertrófica constituye una excepción.\n¿Por qué aumenta el riesgo tromboembólico?\nLa miocardiopatía hipertrófica favorece:\n• Dilatación auricular izquierda.\n• Estasis sanguínea.\n• Remodelado auricular.\n• Mayor carga arrítmica.\nComo consecuencia:\nExiste incremento significativo del riesgo de accidente cerebrovascular.\n¿Qué recomiendan las guías actuales?\nTodo paciente con:\n• Miocardiopatía hipertrófica.\n• Fibrilación auricular.\nDebe recibir:\nAnticoagulación oral crónica.\nIndependientemente del CHA₂DS₂-VA.\n¿Por qué elegir apixabán?\nLos anticoagulantes orales directos han demostrado:\n• Eficacia comparable o superior.\n• Menor riesgo de hemorragia intracraneal.\n• Mayor facilidad de uso.\nPor ello:\nActualmente son la estrategia preferida en la mayoría de estos pacientes.\n¿Por qué NO utilizar warfarina?\nLa warfarina sigue siendo eficaz.\nSin embargo:\nLos anticoagulantes orales directos son actualmente la opción preferida cuando no existen contraindicaciones.\nPor ello:\nApixabán es la mejor respuesta.\n¿Por qué NO dejarlo sin anticoagulación?\nLa miocardiopatía hipertrófica anula el valor predictivo habitual del CHA₂DS₂-VA.\nPor lo tanto:\nLa ausencia de factores clásicos de riesgo no excluye la necesidad de anticoagulación.\n¿Por qué NO utilizar aspirina?\nLa aspirina:\nNo proporciona protección adecuada frente al riesgo cardioembólico asociado a fibrilación auricular.\nNo se considera una alternativa válida a la anticoagulación.\n¿Cuál es la trampa de examen?\nMuchos estudiantes observan:\n\"CHA₂DS₂-VA = 0.\"\nY responden:\n\"No anticoagular.\"\nSin embargo:\nLa pregunta incluye un dato decisivo.\nLa presencia de:\nMiocardiopatía hipertrófica.\nEsto cambia completamente la conducta.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar la fibrilación auricular.\n2.\tBuscar condiciones especiales.\n3.\tReconocer la miocardiopatía hipertrófica.\n4.\tRecordar el alto riesgo tromboembólico.\n5.\tIniciar anticoagulación oral crónica.\nPerlas de examen\n✅ La miocardiopatía hipertrófica aumenta significativamente el riesgo tromboembólico.\n✅ La fibrilación auricular es una complicación frecuente de la miocardiopatía hipertrófica.\n✅ El CHA₂DS₂-VA no guía la anticoagulación en estos pacientes.\n✅ Los anticoagulantes orales directos son actualmente la estrategia preferida.\n✅ La aspirina no previene adecuadamente el cardioembolismo en fibrilación auricular.\n✅ La anticoagulación debe mantenerse de forma indefinida salvo contraindicación.\n✅ La prevención del accidente cerebrovascular es uno de los pilares del tratamiento.\nReferencias\n• ESC Guidelines for the Management of Atrial Fibrillation.\n• AHA/ACC Guideline for the Diagnosis and Treatment of Hypertrophic Cardiomyopathy.\n• ACC/AHA/HRS Guideline for Atrial Fibrillation.\n• Braunwald's Heart Disease.\n• UpToDate: Atrial Fibrillation in Hypertrophic Cardiomyopathy.",
    "statement": "Paciente masculino de 30 años con antecedente de miocardiopatía hipertrófica consulta para seguimiento de fibrilación auricular no valvular. No tiene antecedentes de accidente cerebrovascular ni otros eventos embólicos. El cálculo del puntaje CHA₂DS₂-VA es de 0 puntos.\n¿Cuál es el siguiente paso más adecuado en el manejo?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Iniciar anticoagulación con warfarina."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Iniciar anticoagulación con apixabán."
      },
      {
        "id": "C",
        "label": "C",
        "text": "No iniciar anticoagulación."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Iniciar aspirina."
      }
    ]
  },
  {
    "id": 187,
    "examArea": "NEUROLOGÍA",
    "topic": "NEUROLOGÍA",
    "slug": "neurologia",
    "difficulty": "medium",
    "correctOptionId": "C",
    "explanation": "El paciente presentó una crisis convulsiva autolimitada que ya ha finalizado y actualmente se encuentra en fase posictal. En ausencia de actividad convulsiva persistente o estatus epiléptico, la conducta inicial consiste en estabilización, monitorización, búsqueda de causas precipitantes y estudio diagnóstico.",
    "keyPoints": [
      "Cuando veas: Crisis convulsiva única. Duración corta. Resolución espontánea. Fase posictal. Paciente estable.",
      "Debes pensar en: Medidas de soporte y estudio etiológico.",
      "Tema: Primera crisis epiléptica."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa el manejo inicial de una primera crisis convulsiva.\nLa clave no es la convulsión.\nLa clave es:\nQue la crisis ya terminó.\n¿Qué está ocurriendo realmente?\nEl paciente presentó:\n• Crisis tónico-clónica generalizada.\n• Duración aproximada de 2 minutos.\n• Resolución espontánea.\n• Estado posictal.\nEsto corresponde a:\nPrimera crisis epiléptica en estudio.\n¿Qué es la fase posictal?\nEs el período posterior a la convulsión caracterizado por:\n• Somnolencia.\n• Confusión.\n• Cefalea.\n• Fatiga.\nGeneralmente:\nSe resuelve espontáneamente.\n¿Por qué no administrar benzodiacepinas?\nLas benzodiacepinas son el tratamiento de elección cuando existe:\n• Convulsión activa.\n• Estatus epiléptico.\nSin embargo:\nLa crisis ya finalizó.\nPor tanto:\nNo están indicadas inicialmente.\n¿Por qué no administrar fenitoína?\nLos anticonvulsivantes intravenosos se utilizan en:\n• Estatus epiléptico.\n• Convulsiones persistentes.\n• Prevención de recurrencia inmediata en escenarios específicos.\nNo constituyen la primera medida tras una crisis aislada ya resuelta.\n¿Qué debe hacerse inicialmente?\nLas prioridades son:\n• ABCDE.\n• Monitorización.\n• Glucemia capilar.\n• Electrolitos.\n• Evaluación neurológica.\n• Identificación de causas precipitantes.\nPosteriormente se consideran estudios como:\n• Neuroimagen.\n• Electroencefalograma.\n• Estudios metabólicos.\n¿Por qué NO intubar?\nLa intubación se reserva para:\n• Compromiso de la vía aérea.\n• Convulsiones prolongadas.\n• Estatus epiléptico refractario.\nNada de esto ocurre en el caso.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Crisis epiléptica.\"\nY responden:\nLorazepam o fenitoína.\nSin embargo:\nLa pregunta especifica que el paciente se encuentra en:\nFase posictal.\nEl dato decisivo es:\nAusencia de actividad convulsiva activa.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tConfirmar que la crisis terminó.\n2.\tRealizar estabilización inicial.\n3.\tBuscar causas reversibles.\n4.\tIniciar estudio etiológico.\n5.\tDeterminar posteriormente la necesidad de tratamiento antiepiléptico.\nPerlas de examen\n✅ La primera medida siempre es asegurar ABCDE.\n✅ La glucemia capilar debe evaluarse en toda crisis convulsiva.\n✅ Las benzodiacepinas son el tratamiento de elección de la convulsión activa.\n✅ La fase posictal puede durar minutos u horas.\n✅ No toda primera crisis epiléptica requiere anticonvulsivantes permanentes.\n✅ El estudio etiológico es fundamental en pacientes sin antecedentes.\n✅ El estatus epiléptico se define por actividad convulsiva prolongada o repetitiva sin recuperación de conciencia.\nReferencias\n• American Academy of Neurology Guidelines.\n• Neurocritical Care Society Guidelines for Status Epilepticus.\n• Harrison's Principles of Internal Medicine.\n• Adams and Victor's Principles of Neurology.\n• UpToDate: Evaluation After a First Seizure in Adults.",
    "statement": "Paciente masculino de 20 años es llevado al servicio de urgencias tras presentar una crisis epiléptica tónico-clónica generalizada de aproximadamente 2 minutos de duración. A su llegada se encuentra en fase posictal con somnolencia progresivamente reversible. No presenta actividad convulsiva activa. Niega antecedentes de epilepsia, consumo de sustancias psicoactivas o factores desencadenantes evidentes. Los signos vitales se encuentran dentro de límites normales.\n¿Cuál es el tratamiento inicial de elección en este paciente?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Iniciar fenitoína intravenosa de inmediato."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Administrar lorazepam intravenoso."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Medidas de soporte, evaluación diagnóstica y observación clínica."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Intubación orotraqueal e inducción de coma farmacológico."
      }
    ]
  },
  {
    "id": 188,
    "examArea": "NEUMOLOGÍA",
    "topic": "NEUMOLOGÍA",
    "slug": "neumologia",
    "difficulty": "medium",
    "correctOptionId": "B",
    "explanation": "El paciente presenta un neumotórax a tensión. Su fisiopatología consiste en la entrada de aire al espacio pleural mediante un mecanismo valvular que permite el ingreso de aire durante la inspiración pero impide su salida durante la espiración, generando aumento progresivo de la presión intratorácica, colapso pulmonar y compromiso hemodinámico.",
    "keyPoints": [
      "Cuando veas: Disnea súbita. Dolor torácico. Hipotensión. Timpanismo. Ausencia de ruidos respiratorios.",
      "Debes pensar en: Neumotórax a tensión.",
      "Tema: Neumotórax a tensión."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa una de las emergencias respiratorias más importantes.\nLa clave no es la disnea.\nLa clave es:\nLa hipotensión asociada a ausencia de ruidos respiratorios.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Dolor torácico súbito.\n• Disnea aguda.\n• Hipotensión.\n• Taquicardia.\n• Timpanismo.\n• Silencio auscultatorio unilateral.\nEsto corresponde a:\nNeumotórax a tensión.\n¿Qué ocurre fisiopatológicamente?\nSe desarrolla una comunicación entre:\n• Pulmón.\n• Espacio pleural.\nEsta lesión funciona como:\nUna válvula unidireccional.\nDurante la inspiración:\nEl aire entra al espacio pleural.\nDurante la espiración:\nEl aire no puede salir.\nComo consecuencia:\nLa presión intrapleural aumenta progresivamente.\n¿Qué efectos produce?\nEl aumento progresivo de presión genera:\n• Colapso pulmonar ipsilateral.\n• Desplazamiento mediastinal.\n• Compresión pulmonar contralateral.\n• Disminución del retorno venoso.\n¿Por qué aparece la hipotensión?\nLa presión intratorácica elevada comprime:\n• Vena cava superior.\n• Vena cava inferior.\nEsto reduce:\nEl retorno venoso al corazón.\nComo consecuencia:\nDisminuye el gasto cardíaco y aparece choque obstructivo.\n¿Por qué hay timpanismo?\nLa acumulación de aire en el espacio pleural produce:\nHipersonoridad o timpanismo a la percusión.\nEs uno de los hallazgos clásicos del examen físico.\n¿Por qué desaparecen los ruidos respiratorios?\nEl pulmón colapsado:\nPierde ventilación efectiva.\nPor ello:\nLos ruidos respiratorios disminuyen o desaparecen.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Dolor torácico súbito y disnea.\"\nY responden:\nTromboembolismo pulmonar.\nSin embargo:\nEl dato decisivo es:\nTimpanismo más ausencia unilateral de ruidos respiratorios.\nEste hallazgo es prácticamente diagnóstico de:\nNeumotórax a tensión.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar disnea súbita.\n2.\tBuscar compromiso hemodinámico.\n3.\tDetectar timpanismo.\n4.\tIdentificar ausencia de ruidos respiratorios.\n5.\tReconocer neumotórax a tensión.\n6.\tComprender el mecanismo valvular unidireccional.\nPerlas de examen\n✅ El neumotórax a tensión es una emergencia médica.\n✅ Produce choque obstructivo por disminución del retorno venoso.\n✅ El mecanismo fisiopatológico es una válvula unidireccional.\n✅ El timpanismo es un hallazgo clásico.\n✅ La ausencia unilateral de ruidos respiratorios orienta al diagnóstico.\n✅ No debe retrasarse el tratamiento para obtener imágenes.\n✅ La descompresión inmediata salva la vida del paciente.\nReferencias\n• Advanced Trauma Life Support (ATLS) 11th Edition.\n• Harrison's Principles of Internal Medicine.\n• Murray & Nadel's Textbook of Respiratory Medicine.\n• Tintinalli's Emergency Medicine.\n• UpToDate: Tension Pneumothorax.",
    "statement": "Paciente masculino de 30 años consulta por disnea súbita y dolor torácico intenso en el hemitórax derecho de inicio brusco. Al examen físico presenta hipotensión, taquicardia, timpanismo a la percusión y ausencia de ruidos respiratorios en el hemitórax derecho.\n¿Cuál es la fisiopatología más probable de este cuadro?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Acumulación de líquido en el espacio pleural con colapso pulmonar progresivo."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Entrada de aire al espacio pleural con mecanismo valvular unidireccional que aumenta progresivamente la presión intratorácica."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Obstrucción arterial pulmonar secundaria a tromboembolismo venoso profundo."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Inflamación alveolar difusa con alteración de la membrana alveolocapilar."
      }
    ]
  },
  {
    "id": 189,
    "examArea": "GINECOLOGÍA Y OBSTETRICIA",
    "topic": "GINECOLOGÍA Y OBSTETRICIA",
    "slug": "ginecologia_y_obstetricia",
    "difficulty": "easy",
    "correctOptionId": "B",
    "explanation": "La combinación de dolor pélvico agudo, sangrado vaginal, amenorrea incierta, masa anexial y líquido libre intraperitoneal es altamente sugestiva de embarazo ectópico roto, una emergencia ginecológica potencialmente mortal.",
    "keyPoints": [
      "Cuando veas: Mujer en edad fértil. Dolor pélvico agudo. Sangrado vaginal. Masa anexial. Líquido libre en pelvis.",
      "Debes pensar en: Embarazo ectópico roto.",
      "Tema: Embarazo ectópico."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa una de las emergencias ginecológicas más importantes.\nLa clave no es el sangrado.\nLa clave es:\nLa presencia simultánea de masa anexial y líquido libre.\n¿Qué está ocurriendo realmente?\nLa paciente presenta:\n• Dolor pélvico súbito.\n• Sangrado vaginal.\n• Ausencia de anticoncepción.\n• Fecha de última menstruación incierta.\n• Masa anexial compleja.\n• Líquido libre intraperitoneal.\nEstos hallazgos orientan fuertemente a:\nEmbarazo ectópico complicado.\n¿Por qué sospechar embarazo ectópico?\nToda mujer en edad fértil con:\n• Dolor abdominal o pélvico.\n• Sangrado vaginal.\nDebe considerarse embarazada hasta demostrar lo contrario.\nLa presencia de masa anexial aumenta aún más la sospecha.\n¿Qué significa el líquido libre?\nEn este contexto el líquido libre corresponde probablemente a:\nHemoperitoneo.\nLo cual sugiere:\nRotura tubárica y sangrado intraabdominal.\n¿Qué hallazgos ecográficos son clásicos?\n• Ausencia de saco gestacional intrauterino.\n• Masa anexial.\n• Líquido libre en pelvis.\nEsta combinación es altamente sugestiva de:\nEmbarazo ectópico.\n¿Por qué NO es enfermedad inflamatoria pélvica?\nLa enfermedad inflamatoria pélvica suele asociarse con:\n• Fiebre.\n• Secreción vaginal.\n• Dolor a la movilización cervical.\nAdemás:\nNo suele producir hemoperitoneo importante.\n¿Por qué NO es un quiste ovárico simple?\nLos quistes simples generalmente presentan:\nContenido anecoico homogéneo.\nNo suelen asociarse con:\nSangrado vaginal y masa anexial compleja en este contexto.\n¿Por qué NO es aborto incompleto?\nEn el aborto incompleto suele existir:\nEvidencia de gestación intrauterina previa.\nLa masa anexial compleja orienta más hacia:\nGestación ectópica.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Sangrado vaginal.\"\nY responden:\nAborto.\nSin embargo:\nEl dato decisivo es:\nLa masa anexial asociada a líquido libre.\nEsto es prácticamente una bandera roja para:\nEmbarazo ectópico roto.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar mujer en edad fértil.\n2.\tReconocer dolor pélvico y sangrado vaginal.\n3.\tBuscar datos de embarazo.\n4.\tIdentificar masa anexial.\n5.\tDetectar líquido libre.\n6.\tDiagnosticar embarazo ectópico roto.\nPerlas de examen\n✅ Toda mujer en edad fértil con dolor abdominal debe considerarse embarazada hasta demostrar lo contrario.\n✅ La tríada clásica es dolor abdominal, amenorrea y sangrado vaginal.\n✅ La masa anexial es un hallazgo característico del embarazo ectópico.\n✅ El líquido libre puede corresponder a hemoperitoneo.\n✅ La ruptura tubárica constituye una emergencia quirúrgica.\n✅ La β-hCG es fundamental en el estudio diagnóstico.\n✅ El embarazo ectópico es una causa importante de mortalidad materna en el primer trimestre.\nReferencias\n• Williams Obstetrics.\n• ACOG Practice Bulletin: Tubal Ectopic Pregnancy.\n• Novak's Gynecology.\n• UpToDate: Ectopic Pregnancy Clinical Manifestations and Diagnosis.\n• Gabbe's Obstetrics: Normal and Problem Pregnancies.",
    "statement": "Paciente femenina de 25 años consulta por sangrado vaginal abundante y dolor pélvico de inicio súbito. No utiliza métodos anticonceptivos y no recuerda la fecha de su última menstruación debido a ciclos irregulares. La ecografía transvaginal evidencia una masa anexial compleja asociada a líquido libre en cavidad peritoneal.\n¿Cuál es el diagnóstico más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Enfermedad inflamatoria pélvica."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Embarazo ectópico roto."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Quiste ovárico simple."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Aborto incompleto."
      }
    ]
  },
  {
    "id": 190,
    "examArea": "GINECOLOGÍA Y OBSTETRICIA",
    "topic": "GINECOLOGÍA Y OBSTETRICIA",
    "slug": "ginecologia_y_obstetricia",
    "difficulty": "medium",
    "correctOptionId": "A",
    "explanation": "La paciente presenta una amenaza de aborto. La presencia de sangrado vaginal durante el primer trimestre con embrión viable, actividad cardíaca fetal presente y cuello uterino cerrado indica un embarazo potencialmente viable que requiere vigilancia clínica y seguimiento obstétrico.",
    "keyPoints": [
      "Cuando veas: Sangrado vaginal en primer trimestre. Feto viable. Latidos cardíacos presentes. Cuello uterino cerrado.",
      "Debes pensar en: Amenaza de aborto.",
      "Tema: Hemorragia del primer trimestre."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa el diagnóstico diferencial de los sangrados del primer trimestre.\nLa clave no es el sangrado.\nLa clave es:\nLa viabilidad fetal.\n¿Qué está ocurriendo realmente?\nLa paciente presenta:\n• Embarazo de 12 semanas.\n• Sangrado vaginal leve.\n• Ausencia de dolor importante.\n• Cuello uterino cerrado.\n• Actividad cardíaca fetal presente.\nEstos hallazgos corresponden a:\nAmenaza de aborto.\n¿Qué es una amenaza de aborto?\nSe define como:\nSangrado vaginal antes de las 20 semanas de gestación con:\n• Cuello uterino cerrado.\n• Producto gestacional viable.\nEn estos casos:\nEl embarazo aún puede evolucionar normalmente.\n¿Qué aporta la ecografía?\nLa ecografía confirma:\n• Embarazo intrauterino.\n• Viabilidad fetal.\n• Ausencia de signos de aborto en curso.\nLa presencia de actividad cardíaca fetal es:\nUn factor pronóstico favorable.\n¿Cuál es el manejo?\nLa conducta habitual incluye:\n• Observación.\n• Educación sobre signos de alarma.\n• Seguimiento obstétrico.\n• Control ecográfico según evolución.\nNo existe indicación de evacuación uterina.\n¿Por qué NO realizar legrado?\nEl legrado está indicado en:\n• Aborto incompleto.\n• Aborto retenido.\n• Algunas pérdidas gestacionales no viables.\nLa paciente presenta:\nEmbarazo viable.\n¿Por qué NO administrar misoprostol?\nEl misoprostol se utiliza para:\n• Interrupción del embarazo.\n• Aborto retenido.\n• Evacuación uterina.\nNo está indicado cuando existe:\nViabilidad fetal demostrada.\n¿Por qué NO requiere cirugía urgente?\nNo existen datos de:\n• Inestabilidad hemodinámica.\n• Hemorragia severa.\n• Aborto inevitable.\n• Embarazo ectópico.\n¿Cuál es la trampa de examen?\nMuchos estudiantes leen:\n\"Sangrado vaginal.\"\nY responden:\nLegrado o misoprostol.\nSin embargo:\nEl dato decisivo es:\nLatidos cardíacos fetales presentes.\nEsto indica:\nEmbarazo viable.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tConfirmar embarazo intrauterino.\n2.\tEvaluar viabilidad fetal.\n3.\tRevisar estado cervical.\n4.\tDiagnosticar amenaza de aborto.\n5.\tRealizar observación y seguimiento.\nPerlas de examen\n✅ La amenaza de aborto cursa con sangrado vaginal y cuello uterino cerrado.\n✅ La presencia de actividad cardíaca fetal indica viabilidad gestacional.\n✅ No todo sangrado del primer trimestre implica pérdida del embarazo.\n✅ El legrado no está indicado en embarazos viables.\n✅ El misoprostol está contraindicado cuando se desea continuar la gestación.\n✅ La ecografía transvaginal es fundamental para el diagnóstico.\n✅ El seguimiento obstétrico es la conducta estándar en pacientes estables.\nReferencias\n• Williams Obstetrics.\n• ACOG Practice Bulletin: Early Pregnancy Loss.\n• Gabbe's Obstetrics: Normal and Problem Pregnancies.\n• Novak's Gynecology.\n• UpToDate: Threatened Miscarriage.",
    "statement": "Paciente femenina de 27 años, primigesta, con embarazo de 12 semanas confirmado por ecografía, consulta por sangrado vaginal leve de 12 horas de evolución. Niega dolor abdominal significativo. La ecografía transvaginal evidencia un embarazo intrauterino viable con actividad cardíaca fetal presente.\n¿Cuál es la conducta más adecuada?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Observación y seguimiento."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Legrado uterino."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Administración de misoprostol."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Derivación inmediata a quirófano de urgencias."
      }
    ]
  },
  {
    "id": 191,
    "examArea": "PSIQUIATRÍA",
    "topic": "PSIQUIATRÍA",
    "slug": "psiquiatria",
    "difficulty": "easy",
    "correctOptionId": "A",
    "explanation": "El paciente presenta un episodio maníaco caracterizado por disminución de la necesidad de sueño, aumento de energía, verborrea, fuga de ideas, conductas de riesgo y deterioro funcional. La presencia de un episodio maníaco es suficiente para establecer el diagnóstico de trastorno bipolar tipo I.",
    "keyPoints": [
      "Cuando veas: Disminución de la necesidad de sueño. Aumento de energía. Conductas riesgosas. Gastos excesivos. Verborrea. Fuga de ideas.",
      "Debes pensar en: Episodio maníaco.",
      "Tema: Trastorno bipolar."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa el reconocimiento clínico de la manía.\nLa clave no es la irritabilidad.\nLa clave es:\nLa disminución de la necesidad de dormir.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Elevación patológica de la energía.\n• Menor necesidad de sueño.\n• Conductas impulsivas.\n• Verborrea.\n• Fuga de ideas.\n• Aumento de actividades dirigidas a objetivos.\nEsto corresponde a:\nEpisodio maníaco.\n¿Qué caracteriza a la manía?\nLos síntomas clásicos incluyen:\n• Estado de ánimo elevado o irritable.\n• Aumento de energía.\n• Grandiosidad.\n• Disminución de la necesidad de sueño.\n• Verborrea.\n• Fuga de ideas.\n• Distractibilidad.\n• Conductas de riesgo.\nLa presencia de estos síntomas genera:\nDeterioro funcional significativo.\n¿Por qué el sueño es tan importante?\nEn la manía el paciente:\nNo siente necesidad de dormir.\nNo se trata de insomnio.\nEl paciente duerme poco y:\nSe siente descansado.\nEste es uno de los hallazgos más característicos del diagnóstico.\n¿Qué es la fuga de ideas?\nCorresponde a:\nCambio rápido entre múltiples temas relacionados o no relacionados.\nProduce la sensación de que:\nEl pensamiento corre más rápido de lo normal.\n¿Por qué los gastos excesivos son importantes?\nLas conductas impulsivas son frecuentes durante la manía:\n• Compras innecesarias.\n• Inversiones arriesgadas.\n• Juegos de azar.\n• Conductas sexuales de riesgo.\nEstos comportamientos pueden generar:\nConsecuencias económicas y sociales importantes.\n¿Por qué NO es depresión mayor?\nLa depresión mayor se caracteriza por:\n• Tristeza persistente.\n• Anhedonia.\n• Fatiga.\n• Disminución de energía.\nEste paciente presenta exactamente lo contrario.\n¿Por qué NO es trastorno de ansiedad?\nAunque puede existir inquietud:\nLa ansiedad no produce típicamente:\n• Disminución de la necesidad de sueño.\n• Grandiosidad.\n• Gastos excesivos.\n• Fuga de ideas.\n¿Por qué NO es esquizofrenia?\nLa esquizofrenia se caracteriza principalmente por:\n• Delirios.\n• Alucinaciones.\n• Síntomas negativos.\n• Desorganización persistente.\nEl cuadro descrito es predominantemente afectivo.\n¿Cuál es la trampa de examen?\nMuchos estudiantes observan:\n\"Irritabilidad.\"\nY responden:\nAnsiedad.\nSin embargo:\nEl dato decisivo es:\nLa disminución de la necesidad de sueño asociada a aumento de energía.\nEsto es altamente sugestivo de:\nManía.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar aumento patológico de energía.\n2.\tBuscar disminución de la necesidad de sueño.\n3.\tReconocer conductas impulsivas.\n4.\tDetectar fuga de ideas y verborrea.\n5.\tDiagnosticar episodio maníaco.\n6.\tConcluir trastorno bipolar tipo I.\nPerlas de examen\n✅ Un episodio maníaco establece el diagnóstico de trastorno bipolar tipo I.\n✅ La disminución de la necesidad de sueño es un síntoma cardinal de manía.\n✅ La verborrea y la fuga de ideas son hallazgos clásicos.\n✅ Las conductas de riesgo son frecuentes durante los episodios maníacos.\n✅ La irritabilidad puede reemplazar al ánimo eufórico.\n✅ El deterioro funcional ayuda a diferenciar manía de hipomanía.\n✅ Siempre debe descartarse consumo de sustancias como causa secundaria.\nReferencias\n• DSM-5-TR.\n• Kaplan & Sadock's Synopsis of Psychiatry.\n• Stahl's Essential Psychopharmacology.\n• American Psychiatric Association Practice Guideline for Bipolar Disorder.\n• UpToDate: Clinical Features and Diagnosis of Bipolar Disorder in Adults.",
    "statement": "Paciente masculino de 24 años, estudiante universitario, consulta acompañado por su madre debido a cambios de comportamiento de aproximadamente tres semanas de evolución. Refiere sentirse \"lleno de energía\", con disminución importante de la necesidad de sueño, durmiendo apenas 3 horas por noche sin presentar fatiga durante el día. Además, manifiesta múltiples proyectos de negocios simultáneos, planes de inversión de alto riesgo y gastos excesivos en apuestas en línea y compras innecesarias. La familia refiere que habla de manera acelerada, cambia constantemente de tema durante las conversaciones y se muestra más irritable de lo habitual. Niega antecedentes psiquiátricos previos, consumo de sustancias psicoactivas o síntomas depresivos recientes.\n¿Cuál es el diagnóstico más probable?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Trastorno bipolar."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Depresión mayor."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Trastorno de ansiedad."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Esquizofrenia."
      }
    ]
  },
  {
    "id": 192,
    "examArea": "PSIQUIATRÍA",
    "topic": "PSIQUIATRÍA",
    "slug": "psiquiatria",
    "difficulty": "medium",
    "correctOptionId": "A",
    "explanation": "El paciente presenta un primer episodio psicótico compatible con esquizofrenia. El tratamiento inicial de elección consiste en antipsicóticos de segunda generación debido a su eficacia sobre los síntomas psicóticos y su mejor perfil de efectos adversos extrapiramidales.",
    "keyPoints": [
      "Cuando veas: Alucinaciones auditivas. Delirios persecutorios. Pensamiento desorganizado. Afecto aplanado. Deterioro funcional.",
      "Debes pensar en: Esquizofrenia.",
      "Tema: Tratamiento inicial de la esquizofrenia."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa el reconocimiento y tratamiento del primer episodio psicótico.\nLa clave no es la agitación.\nLa clave es:\nLa presencia de síntomas psicóticos positivos y negativos.\n¿Qué está ocurriendo realmente?\nEl paciente presenta:\n• Alucinaciones auditivas.\n• Delirios persecutorios.\n• Pensamiento desorganizado.\n• Aislamiento social.\n• Afecto aplanado.\n• Deterioro funcional.\nEstos hallazgos son altamente sugestivos de:\nEsquizofrenia.\n¿Cuáles son los síntomas positivos?\nLos síntomas positivos corresponden a fenómenos que aparecen y no deberían estar presentes.\nIncluyen:\n• Alucinaciones.\n• Delirios.\n• Pensamiento desorganizado.\n• Conducta desorganizada.\nEste paciente presenta varios de ellos.\n¿Cuáles son los síntomas negativos?\nLos síntomas negativos corresponden a pérdida o disminución de funciones normales.\nIncluyen:\n• Afecto aplanado.\n• Aislamiento social.\n• Abulia.\n• Anhedonia.\nTambién están presentes en el caso.\n¿Cuál es el tratamiento inicial?\nLos antipsicóticos de segunda generación son el tratamiento de elección.\nEntre ellos:\n• Risperidona.\n• Olanzapina.\n• Quetiapina.\n• Aripiprazol.\n• Paliperidona.\nEstos medicamentos actúan principalmente mediante:\nBloqueo dopaminérgico.\n¿Por qué NO utilizar sertralina?\nLa sertralina es un antidepresivo.\nEstá indicada para:\n• Depresión.\n• Trastornos de ansiedad.\nNo controla adecuadamente:\nLos síntomas psicóticos.\n¿Por qué NO utilizar litio?\nEl litio se utiliza principalmente en:\n• Trastorno bipolar.\nNo constituye el tratamiento de primera línea para esquizofrenia.\n¿Por qué NO utilizar clonazepam?\nLas benzodiacepinas pueden ayudar a controlar:\n• Agitación.\n• Ansiedad.\nSin embargo:\nNo tratan la psicosis subyacente.\n¿Cuál es la trampa de examen?\nMuchos estudiantes observan:\n\"Irritabilidad y agitación.\"\nY responden:\nBenzodiacepinas.\nSin embargo:\nEl dato decisivo es:\nLa presencia de alucinaciones auditivas y delirios persecutorios.\nEstos hallazgos definen:\nPsicosis.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar síntomas psicóticos.\n2.\tReconocer síntomas positivos y negativos.\n3.\tDiagnosticar esquizofrenia.\n4.\tIniciar antipsicótico de segunda generación.\n5.\tRealizar seguimiento psiquiátrico integral.\nPerlas de examen\n✅ Las alucinaciones auditivas son el síntoma psicótico más frecuente en esquizofrenia.\n✅ Los delirios persecutorios son una manifestación clásica.\n✅ El afecto aplanado corresponde a un síntoma negativo.\n✅ Los antipsicóticos de segunda generación son el tratamiento inicial de elección.\n✅ El deterioro funcional es fundamental para el diagnóstico.\n✅ Siempre debe descartarse consumo de sustancias como causa secundaria.\n✅ La intervención temprana mejora el pronóstico a largo plazo.\nReferencias\n• DSM-5-TR.\n• Kaplan & Sadock's Synopsis of Psychiatry.\n• American Psychiatric Association Practice Guideline for Schizophrenia.\n• Stahl's Essential Psychopharmacology.\n• UpToDate: Schizophrenia in Adults: Clinical Features, Assessment and Diagnosis.",
    "statement": "Paciente masculino de 26 años, sin antecedentes médicos de importancia, es llevado por su familia debido a cambios progresivos de comportamiento durante los últimos tres meses, caracterizados por aislamiento social, deterioro del autocuidado y dificultades en su desempeño laboral. En la última semana ha manifestado escuchar voces que le indican que no confíe en sus familiares porque están conspirando en su contra.\n¿Cuál es el tratamiento de primera línea para esta condición?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Iniciar antipsicótico de segunda generación."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Iniciar sertralina."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Iniciar el litio."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Iniciar clonazepam en monoterapia."
      }
    ]
  },
  {
    "id": 193,
    "examArea": "EPIDEMIOLOGÍA Y BIOESTADÍSTICA",
    "topic": "EPIDEMIOLOGÍA Y BIOESTADÍSTICA",
    "slug": "epidemiologia_y_bioestadistica",
    "difficulty": "medium",
    "correctOptionId": "A",
    "explanation": "El riesgo relativo compara la incidencia de un evento entre un grupo expuesto y un grupo no expuesto. Un RR de 15 indica que los individuos expuestos al factor de riesgo presentan una probabilidad 15 veces mayor de desarrollar el desenlace estudiado.",
    "keyPoints": [
      "Cuando veas: Estudio de cohorte. Riesgo relativo (RR). RR > 1.",
      "Debes pensar en: Asociación positiva entre exposición y enfermedad.",
      "Tema: Interpretación del riesgo relativo."
    ],
    "theoryContent": "EXPLICACIÓN DEL PROFE BY DR Q\nEsta es una pregunta clásica porque evalúa la interpretación de una de las medidas epidemiológicas más utilizadas.\nLa clave no es el tabaquismo.\nLa clave es:\nEl valor del riesgo relativo.\n¿Qué está ocurriendo realmente?\nEl estudio compara:\n• Expuestos (fumadores).\n• No expuestos (no fumadores).\nPosteriormente evalúa:\nLa aparición de cáncer de pulmón.\nEl resultado obtenido fue:\nRR = 15.\n¿Qué es el riesgo relativo?\nEl riesgo relativo es una medida de asociación que compara:\nLa incidencia de enfermedad en expuestos\nvs\nLa incidencia de enfermedad en no expuestos.\nSu fórmula es:\nRR = Incidencia en expuestos / Incidencia en no expuestos\n¿Cómo se interpreta un RR de 15?\nSignifica que:\nLos fumadores presentan 15 veces más riesgo de desarrollar cáncer de pulmón que los no fumadores.\nTambién puede decirse que:\nExiste una asociación positiva muy fuerte entre la exposición y la enfermedad.\n¿Qué significa un RR igual a 1?\nIndica:\nAusencia de asociación.\nLa exposición no modifica el riesgo.\n¿Qué significa un RR mayor de 1?\nIndica:\nLa exposición aumenta el riesgo de enfermedad.\nEjemplos:\n• RR = 2 → el riesgo se duplica.\n• RR = 5 → el riesgo es cinco veces mayor.\n• RR = 15 → el riesgo es quince veces mayor.\n¿Qué significa un RR menor de 1?\nIndica:\nEfecto protector.\nPor ejemplo:\nRR = 0.5 significa una reducción aproximada del 50% del riesgo.\n¿Por qué la opción B es incorrecta?\nUn RR de 15 no significa:\n15% más riesgo.\nSignifica:\n1500% del riesgo observado en los no expuestos o, dicho de manera práctica para el examen, 15 veces más riesgo.\n¿Por qué la opción C es incorrecta?\nLa ausencia de asociación ocurre cuando:\nRR = 1.\nNo es el caso.\n¿Por qué la opción D es incorrecta?\nUn riesgo menor implicaría:\nRR < 1.\nEl valor encontrado es:\nRR = 15.\n¿Cuál es la trampa de examen?\nMuchos estudiantes confunden:\n\"15 veces más riesgo\"\ncon\n\"15% más riesgo\".\nEl dato decisivo es:\nEl riesgo relativo expresa una razón, no un porcentaje.\nEntonces, ¿qué debe recordarse?\nLa secuencia correcta es:\n1.\tIdentificar el tipo de medida.\n2.\tRevisar si RR es mayor, menor o igual a 1.\n3.\tInterpretar la dirección de la asociación.\n4.\tCuantificar la magnitud del efecto.\n5.\tConcluir la relación entre exposición y enfermedad.\nPerlas de examen\n✅ El riesgo relativo se calcula en estudios de cohorte.\n✅ RR = 1 indica ausencia de asociación.\n✅ RR > 1 indica factor de riesgo.\n✅ RR < 1 indica efecto protector.\n✅ Mientras más se aleje de 1, mayor es la fuerza de asociación.\n✅ El riesgo relativo compara incidencias.\n✅ No debe confundirse una razón con un porcentaje.\nReferencias\n• Gordis Epidemiology.\n• Rothman Epidemiology: An Introduction.\n• Fletcher & Fletcher Clinical Epidemiology.\n• Essentials of Medical Statistics.\n• UpToDate: Measures of Association in Epidemiologic Studies.",
    "statement": "En un estudio de cohorte realizado en una población adulta se evaluó la relación entre el tabaquismo y el desarrollo de cáncer de pulmón. Tras un seguimiento de 7 años, se encontró que el riesgo relativo (RR) de desarrollar cáncer de pulmón en fumadores comparado con no fumadores fue de 15.\n¿Cómo se interpreta este resultado?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Los fumadores tienen 15 veces más riesgo de desarrollar cáncer de pulmón que los no fumadores."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Los fumadores tienen un 15% más de riesgo de desarrollar cáncer de pulmón."
      },
      {
        "id": "C",
        "label": "C",
        "text": "No hay asociación entre fumar y cáncer de pulmón."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Los fumadores tienen un riesgo 15 veces menor de desarrollar cáncer de pulmón."
      }
    ]
  }
];

function escapeTemplate(str) {
  return str.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

function renderQuestion(q) {
  const options = q.options
    .map(
      (opt) =>
        `      { id: "${opt.id}", label: "${opt.label}", text: ${JSON.stringify(opt.text)} },`,
    )
    .join("\n");

  const keyPoints = q.keyPoints
    .map((kp) => `      ${JSON.stringify(kp)},`)
    .join("\n");

  const tags = [
    "dr-q",
    "universal",
    "metodoq",
    "univalle",
    "udea",
    "caldas",
    "ucc_pasto",
    "unimilitar",
    q.slug,
  ]
    .map((t) => JSON.stringify(t))
    .join(",");

  return `  {
    id: "dr-q-${q.id}",
    examArea: ${JSON.stringify(q.examArea)},
    topic: ${JSON.stringify(q.topic)},
    difficulty: ${JSON.stringify(q.difficulty)},
    tags: [${tags}],
    statement: ${JSON.stringify(q.statement)},
    options: [
${options}
    ],
    correctOptionId: "${q.correctOptionId}",
    explanation: ${JSON.stringify(q.explanation)},
    keyPoints: [
${keyPoints}
    ],
    theoryContent: \`${escapeTemplate(q.theoryContent)}\`,
  }`;
}

const content = fs.readFileSync(coexamPath, "utf8");
const startMatch = content.match(/  \{\r?\n    id: "dr-q-180"/);
const endMatch = content.match(/  \{\r?\n    id: "dr-q-194"/);
if (!startMatch || !endMatch) {
  throw new Error("Could not find patch boundaries in dr-q-coexam-questions.ts");
}
const startIdx = startMatch.index;
const endIdx = endMatch.index;
if (startIdx === -1 || endIdx === -1) {
  throw new Error("Could not find patch boundaries in dr-q-coexam-questions.ts");
}

const rendered = questions.map(renderQuestion).join(",\n") + ",\n";
const newContent = content.slice(0, startIdx) + rendered + content.slice(endIdx);
fs.writeFileSync(coexamPath, newContent, "utf8");
console.log(`Patched dr-q-180 through dr-q-193 (${questions.length} questions) in ${coexamPath}`);
