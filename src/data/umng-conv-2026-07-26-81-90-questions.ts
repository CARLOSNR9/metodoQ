import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UMNG — Edición #1 (26 jul 2026) · Preguntas #81–#90.
 */
export const UMNG_CONV_2026_07_26_81_90_QUESTIONS: TrainingQuestion[] = [
  {
    id: "umng-conv-2026-07-26-81",
    university: "UMNG",
    examArea: "CIRUGÍA GENERAL / GASTROENTEROLOGÍA",
    topic: "CIRUGÍA GENERAL",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un hombre de 78 años, residente de un asilo (institucionalizado) y con antecedente de estreñimiento crónico severo y demencia de Alzheimer, es traído a urgencias por distensión abdominal progresiva de 3 días de evolución, ausencia de flatos, dolor abdominal tipo cólico y vómitos de contenido fecaloide. Al examen físico: PA 110/70 mmHg, FC 95 lpm. El abdomen está masivamente distendido, timpánico a la percusión, sin signos de irritación peritoneal (no hay rebote ni rigidez). Se solicita una radiografía simple de abdomen que muestra una enorme asa dilatada que ocupa casi toda la cavidad abdominal, desde la pelvis hasta el cuadrante superior derecho, adoptando una forma de \"grano de café\" o \"U invertida\". Teniendo en cuenta que el paciente se encuentra hemodinámicamente estable y sin signos de peritonitis franca, ¿cuál es el tratamiento INICIAL de elección?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Laparotomía exploratoria inmediata con resección del intestino afectado (Procedimiento de Hartmann).",
        distractorProfile: "unnecessary_emergency_surgery",
        incorrectFeedback: "La cirugía de emergencia de entrada en un anciano estable sin isquemia/peritonitis aumenta injustificadamente la mortalidad."
      },
      {
        id: "B",
        label: "B",
        text: "Descompresión y devolvulación mediante Colonoscopia o rectosigmoidoscopia flexible."
      },
      {
        id: "C",
        label: "C",
        text: "Administración de enemas evacuadores de fosfato y laxantes osmóticos vía oral a altas dosis.",
        distractorProfile: "fatal_perforation_risk",
        incorrectFeedback: "Los enemas a presión en un colon severamente dilatado y torcido pueden causar perforación iatrogénica letal."
      },
      {
        id: "D",
        label: "D",
        text: "Descompresión descompresiva con paso de Sonda Nasogástrica gruesa y observación médica exclusiva por 48 horas.",
        distractorProfile: "ineffective_decompression",
        incorrectFeedback: "La sonda nasogástrica no logra descomprimir un intestino grueso distal bloqueado por torsión mecánica completa (asa cerrada)."
      }
    ],
    correctOptionId: "B",
    explanation: "El cuadro es clásico de Vólvulo de Sigmoides (anciano asilar, distensión masiva, imagen en \"Grano de café\"). Al estar hemodinámicamente estable y SIN peritonitis, el estándar de oro terapéutico primario es la devolvulación endoscópica (Colonoscopia o sonda rectal rígida/flexible). La cirugía de urgencia (Hartmann) solo se indica de entrada si hay inestabilidad, peritonitis, sangre en heces o falla de la endoscopia.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., imagínate un globo largo de cumpleaños retorcido en el medio. Esa torsión no deja que el gas escape. Si lo metes a quirófano de entrada, estarás operando sobre heces bajo presión y el paciente puede no resistir. El gastroenterólogo le pasa el tubo negro por el recto y, cuando logra pasar el nudo, vas a ver cómo literalmente el abdomen del abuelito se desinfla como llanta pinchada. Te da días para prepararlo y operarlo electivamente con calma.",
    keyPoints: [
      "Cuando veas:",
      "• Anciano asilar + Constipación + Rx en 'Grano de Café' + Estable sin peritonitis.",
      "Debes pensar en:",
      "Vólvulo de Sigmoides. Tratamiento inicial de elección: Descompresión/devolvulación endoscópica.",
      "Tema: Cirugía General / Obstrucción Intestinal Baja."
    ]
  },
  {
    id: "umng-conv-2026-07-26-82",
    university: "UMNG",
    examArea: "MEDICINA INTERNA / INFECTOLOGÍA",
    topic: "INFECTOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Un hombre de 35 años, recién diagnosticado con Infección por VIH en fase SIDA (recuento de CD4 en 90 células/mm³), asiste a consulta externa quejándose de tos seca y disnea progresiva de esfuerzo desde hace 3 semanas. No ha iniciado terapia antirretroviral (TARV). Al examen físico: T 38.1°C, FC 110 lpm, FR 28 rpm. La auscultación pulmonar es normal, sin crepitantes evidentes. La radiografía de tórax revela infiltrados retículo-nodulares bilaterales simétricos en patrón de \"vidrio esmerilado\", respetando los ápices. Los gases arteriales respirando aire ambiente reportan: pH 7.42, PaO2 55 mmHg, PaCO2 32 mmHg. Se establece la alta sospecha clínica de Neumonía por Pneumocystis jirovecii (PCP) y se decide iniciar Trimetoprim-Sulfametoxazol (Cotrimoxazol) a altas dosis de inmediato. ¿Qué otro fármaco sistémico es OBLIGATORIO adicionar a la terapia empírica en las próximas 72 horas para mejorar la sobrevida de este paciente específico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Azitromicina oral o intravenosa para cubrir patógenos atípicos de forma empírica.",
        distractorProfile: "wrong_adjunct_antibiotic",
        incorrectFeedback: "La prioridad aquí no es cubrir patógenos atípicos (MAC requeriría CD4 < 50), sino controlar la inflamación pulmonar letal de la PCP."
      },
      {
        id: "B",
        label: "B",
        text: "Corticosteroides sistémicos (Prednisona o Metilprednisolona)."
      },
      {
        id: "C",
        label: "C",
        text: "Anfotericina B intravenosa como cobertura empírica antifúngica dual.",
        distractorProfile: "wrong_antifungal_pcp",
        incorrectFeedback: "Pneumocystis es filogenéticamente un hongo, pero NO responde a Anfotericina B porque carece de ergosterol normal."
      },
      {
        id: "D",
        label: "D",
        text: "Terapia Antirretroviral (TARV) de Gran Actividad de forma inmediata el mismo día.",
        distractorProfile: "fatal_iris_risk",
        incorrectFeedback: "Iniciar TARV el primer día en PCP severa puede causar Síndrome Inflamatorio de Reconstitución Inmune (SIRI) pulmonar catastrófico."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente cursa con Neumonía por Pneumocystis jirovecii (PCP) moderada a grave. Al iniciar el antibiótico (Cotrimoxazol), los hongos se lisan y liberan antígenos masivos, causando una tormenta inflamatoria que empeora drásticamente la hipoxemia y puede ser letal. Las guías indican que si la PaO2 es < 70 mmHg (el paciente tiene 55) o el Gradiente A-a ≥ 35 mmHg, es obligatorio iniciar CORTICOIDES sistémicos (ej. Prednisona) preferiblemente antes o junto con el antibiótico, reduciendo la mortalidad marcadamente.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., si a este paciente con SIDA y oxígeno por el piso le das solo Cotrimoxazol, a las 48 horas te estarán llamando de la UCI para pedirte el consentimiento de intubación. Los hongos destruidos actúan como granadas de humo en los pulmones. Los esteroides son la máscara antigás para los alvéolos. La regla es numérica: si miras la tirilla de gases y el PaO2 empieza por 6 o por 5 (ej. 68, 55 mmHg), ¡ponle Prednisona de una!",
    keyPoints: [
      "Cuando veas:",
      "• VIH (CD4 <200) + Rx Vidrio esmerilado + Hipoxemia severa (PaO2 < 70).",
      "Debes pensar en:",
      "PCP (Neumonía por Pneumocystis). Tratamiento: Cotrimoxazol + CORTICOIDES ADYUVANTES.",
      "Tema: Infectología / Infecciones Oportunistas VIH."
    ]
  },
  {
    id: "umng-conv-2026-07-26-83",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA / URGENCIAS",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Usted se encuentra atendiendo un parto vaginal en zona rural. Quince minutos después del alumbramiento completo, la paciente presenta hemorragia vaginal profusa. El útero se encuentra atónico. PA 90/50, FC 120 lpm. Usted ya administró 40 U de Oxitocina IV, Metilergonovina IM, 800 mcg de Misoprostol y realizó masaje uterino continuo por 15 min sin obtener contracción (Atonía refractaria a uterotónicos). Mientras coordina el traslado de 2 horas a un hospital de tercer nivel, ¿cuál es el paso MECÁNICO INMEDIATO de elección que debe instaurar en el consultorio para detener el sangrado durante el viaje?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Realizar revisión instrumentada de la cavidad uterina (curetaje) para descartar retención de restos ocultos.",
        distractorProfile: "perforation_risk_atony",
        incorrectFeedback: "El alumbramiento fue completo y el diagnóstico es atonía. Curetaje a ciegas en útero atónico es riesgo de perforación letal."
      },
      {
        id: "B",
        label: "B",
        text: "Colocación de un balón de taponamiento intrauterino (Balón de Bakri o sonda Foley intrauterina artesanal) inflado con solución salina."
      },
      {
        id: "C",
        label: "C",
        text: "Pinzamiento vaginal de las arterias uterinas (Técnica de Zea) bajo visión directa de forma exclusiva.",
        distractorProfile: "secondary_mechanical_option",
        incorrectFeedback: "La técnica de Zea requiere mayor destreza y es menos efectiva globalmente que el taponamiento intrauterino con balón."
      },
      {
        id: "D",
        label: "D",
        text: "Realizar Laparotomía exploratoria de urgencia para aplicar suturas compresivas de B-Lynch antes de remitir.",
        distractorProfile: "surgery_in_primary_care",
        incorrectFeedback: "Un médico general no debe abrir un abdomen sin anestesia ni soporte transfusional en zona rural; morirá en la mesa."
      }
    ],
    correctOptionId: "B",
    explanation: "Frente a una Hemorragia Posparto (HPP) por atonía que no responde al masaje ni a TODOS los uterotónicos (Oxitocina, Methergin, Misoprostol), el segundo paso en el Código Rojo de la OMS/FIGO es el Taponamiento Intrauterino. Se usa el Balón de Bakri (o artesanal con condón/Foley). El balón inflado dentro del útero ejerce presión hidrostática directa contra el miometrio sangrante, deteniendo el sangrado y permitiendo el transporte seguro.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., si estás en tu año rural en la selva y el útero no responde, se va a morir desangrada en la ambulancia. Los medicamentos ya no sirvieron. Consigue una sonda, árrancale un preservativo al dispensario, amárralo a la sonda, méteselo en el útero e ínflalo con 500 cc de agua destilada. Ese simple globo de látex te detiene el sangrado a presión y te compra las 2 horas que necesitas de viaje.",
    keyPoints: [
      "Cuando veas:",
      "• HPP por Atonía refractaria a masaje bimanual y a TODOS los uterotónicos.",
      "Debes pensar en:",
      "Taponamiento Intrauterino con Balón (Bakri o artesanal). Siguiente paso antes de cirugía.",
      "Tema: Obstetricia / Hemorragia Posparto Código Rojo."
    ]
  },
  {
    id: "umng-conv-2026-07-26-84",
    university: "UMNG",
    examArea: "PEDIATRÍA / NEONATOLOGÍA",
    topic: "NEONATOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Recién nacido masculino de término (40 sem). A las 2 horas de vida presenta cianosis central profunda sin dificultad respiratoria evidente. Se instaura oxígeno por cánula, pero SatO2 persiste en 60%. En la Prueba de Hiperoxia (Oxígeno 100% por 10 min), la PaO2 es de 35 mmHg (ausencia total de respuesta). La radiografía de tórax muestra un corazón con morfología de \"huevo colgado de un cordel\" y pedículo estrecho. Ante la sospecha de una cardiopatía congénita cianozante ductus-dependiente, ¿cuál es la infusión farmacológica salvavidas de elección inmediata?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Indometacina intravenosa o Ibuprofeno para cerrar el ductus.",
        distractorProfile: "fatal_ductus_closure",
        incorrectFeedback: "La Indometacina Cierra el ductus. En esta patología, si cierras el ductus, el bebé asfixia y muere instantáneamente."
      },
      {
        id: "B",
        label: "B",
        text: "Infusión continua de Prostaglandina E1 (Alprostadil)."
      },
      {
        id: "C",
        label: "C",
        text: "Administración de Oxígeno en cámara hiperbárica para forzar la oxigenación hística.",
        distractorProfile: "oxygen_closes_ductus",
        incorrectFeedback: "El exceso de oxígeno fisiológicamente constriñe y cierra el ductus arterioso, empeorando fatalmente el cuadro mecánico."
      },
      {
        id: "D",
        label: "D",
        text: "Furosemida intravenosa y restricción hídrica severa para manejo de la falla cardíaca.",
        distractorProfile: "wrong_hf_therapy",
        incorrectFeedback: "No resuelve el cortocircuito obligatorio ductus-dependiente ni la isquemia sistémica masiva."
      }
    ],
    correctOptionId: "B",
    explanation: "El neonato presenta Transposición de Grandes Arterias (TGA) (cianosis, prueba de hiperoxia negativa, Rx en 'huevo colgado de un cordel'). En esta patología (y otras cardiopatías cianozantes severas), la vida del paciente depende de que se mantenga abierto el Conducto Arterioso para mezclar sangre venosa y arterial. La Prostaglandina E1 (Alprostadil) IV es la única medida farmacológica que mantiene el ductus abierto, siendo la terapia puente salvavidas hacia la cirugía.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el oxígeno es la respuesta pavloviana ante la cianosis. Pero el oxígeno 'cierra' el ductus arterioso. Si este bebé azul se pone más azul cuando le pones el tanque al máximo, ¡apágalo! Le estás cerrando la única puerta que mezcla sangre oxigenada hacia el cuerpo. Llama a la enfermera y dile que conecte una bomba de Prostaglandina E1 de inmediato para mantener ese 'caño' abierto, o se morirá asfixiado.",
    keyPoints: [
      "Cuando veas:",
      "• Neonato Cianótico + NO responde a Oxígeno (Hiperoxia negativa) + Rx en Huevo.",
      "Debes pensar en:",
      "Cardiopatía ductus-dependiente (TGA). Terapia salva vidas: Prostaglandina E1 (Alprostadil).",
      "Tema: Neonatología / Cardiopatías Congénitas."
    ]
  },
  {
    id: "umng-conv-2026-07-26-85",
    university: "UMNG",
    examArea: "CIRUGÍA GENERAL / QUEMADOS Y ATLS",
    topic: "CIRUGÍA GENERAL",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Hombre de 45 años rescatado de casa en llamas. Ingresa con quemaduras 20% SCQ (rostro, cuello). Se encuentra agitado, expectorando esputo carbonáceo. Evidencian vibrisas nasales chamuscadas y quemaduras en labios. El paciente presenta un estridor inspiratorio que ha ido en aumento en los últimos 15 minutos, y su voz se nota francamente ronca y apagada. SatO2 96% con oxígeno por mascarilla. PA 130/80 mmHg. ¿Cuál es el manejo INMEDIATO que define la supervivencia en las próximas horas de este paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Reanimación hídrica agresiva guiada por la fórmula de ATLS (2 mL x Kg x SCQ) y observación de la vía aérea en UCI.",
        distractorProfile: "delayed_airway_focus_circulation",
        incorrectFeedback: "La reanimación hídrica (C) es vital, pero la (A) de vía aérea prima. Los líquidos empeorarán el edema glótico inminente."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar corticoides intravenosos (Dexametasona altas dosis) para reducir el edema glótico agudo.",
        distractorProfile: "ineffective_steroids_burns",
        incorrectFeedback: "Los corticoides sistémicos no previenen el edema inflamatorio por quemadura térmica directa y aumentan el riesgo de sepsis."
      },
      {
        id: "C",
        label: "C",
        text: "Realizar Intubación Orotraqueal (IOT) temprana antes de que la inflamación progresiva impida ver la vía aérea."
      },
      {
        id: "D",
        label: "D",
        text: "Realizar una traqueostomía percutánea de emergencia en la sala de urgencias.",
        distractorProfile: "wrong_surgical_airway",
        incorrectFeedback: "Si no se pudiera intubar, la de urgencia es Cricotiroidotomía quirúrgica, pero primero se intenta IOT profiláctica temprana."
      }
    ],
    correctOptionId: "C",
    explanation: "El paciente presenta signos inequívocos de Lesión Inhalatoria Térmica de Vía Aérea (esputo carbonáceo, vibrisas quemadas). La presencia de ronquera o ESTRIDOR es el signo ominoso final pre-obstrucción. El edema térmico de la supraglotis es progresivo y masivo. La conducta mandatoria por ATLS es la Intubación Orotraqueal profiláctica TEMPRANA, antes de que el edema impida visualizar las cuerdas vocales (lo que obligaría a vía aérea quirúrgica de emergencia).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nSi este paciente tiene estridor y ronquera, su laringe se está cerrando rápido. El oxímetro marca 96% (falsa seguridad). Si le dices al paciente 'vamos a esperar un ratico', en media hora cuando le empiece a faltar el aire y metas el laringoscopio, solo vas a ver una masa roja, gelatinosa y sangrante sin ninguna anatomía reconocible. Ni tubo, ni laringoscopio. Intúbalo AHORA, cuando el tejido todavía te permite ver.",
    keyPoints: [
      "Cuando veas:",
      "• Gran quemado (rostro/cuello) + Estridor/Voz ronca/Esputo carbonáceo.",
      "Debes pensar en:",
      "Quemadura de Vía Aérea. Manejo mandatorio: Intubación Orotraqueal Profiláctica Temprana.",
      "Tema: ATLS / Paciente Quemado."
    ]
  },
  {
    id: "umng-conv-2026-07-26-86",
    university: "UMNG",
    examArea: "MEDICINA INTERNA / NEFROLOGÍA",
    topic: "NEFROLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Una mujer de 75 años ingresa convulsionando. Lleva 2 días con vómitos; hace 1 semana inició Hidroclorotiazida. Está estuporosa con mioclonías. El Sodio (Na+) sérico agudo es de 112 mEq/L. Usted decide iniciar tratamiento con Solución Salina Hipertónica al 3%. Teniendo en cuenta la gravedad neurológica, ¿cuál es el objetivo máximo de corrección del nivel de Sodio sérico durante las primeras 24 horas para evitar daño iatrogénico neurológico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Aumentar el nivel de sodio entre 4 y 8 mEq/L (máximo absoluto de 8-10 mEq/L) en las primeras 24 horas."
      },
      {
        id: "B",
        label: "B",
        text: "Elevar rápidamente el sodio a su valor normal bajo de 135 mEq/L en las primeras 12 a 24 horas para frenar el edema cerebral.",
        distractorProfile: "fatal_overcorrection",
        incorrectFeedback: "Subir 23 mEq/L en un día deshidratará masivamente las neuronas y causará Mielinólisis Pontina Central (daño cerebral irreversible)."
      },
      {
        id: "C",
        label: "C",
        text: "Aumentar el nivel de sodio a razón de 2 mEq/L por hora durante todo el primer día.",
        distractorProfile: "too_fast_hourly_rate",
        incorrectFeedback: "2 mEq/L/h son 48 mEq/L en 24h. Muerte neurológica segura."
      },
      {
        id: "D",
        label: "D",
        text: "Reponer la mitad del déficit de sodio en las primeras 8 horas y el resto en las 16 horas siguientes.",
        distractorProfile: "maintenance_fluid_formula",
        incorrectFeedback: "Esa es la regla para reponer déficit de agua en hipernatremia, no para hiponatremia severa sintomática."
      }
    ],
    correctOptionId: "A",
    explanation: "En la Hiponatremia Sintomática Aguda Grave (Na 112, convulsiones), el tratamiento es SS Hipertónica al 3% para salvar la vida del edema cerebral agudo. Sin embargo, el límite de seguridad (Regla de Oro) es subir el Sodio sérico NO MÁS DE 8 a 10 mEq/L en las primeras 24 horas (idealmente 4 a 6 mEq/L son suficientes para frenar las convulsiones). Si se sobrecorrige (se sube a 135 rápido), se produce el Síndrome de Desmielinización Osmótica (Mielinólisis Pontina Central) causando parálisis irreversible.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., curar la hiponatremia es como sacar a un buzo del fondo marino. Si lo sacas muy rápido (hasta 135 en un día), las burbujas destruirán su cerebro (desmielinización). Ponle el sodio al 3%. Cuando su nivel llegue a 118 o 120 (subió 6-8 puntos), sus convulsiones pararán y abrirá los ojos. ¡Ahí frenas la velocidad! No intentes llevarlo a 135 hoy. Mañana será otro día.",
    keyPoints: [
      "Cuando veas:",
      "• Hiponatremia < 120 con Convulsiones/Coma.",
      "Debes pensar en:",
      "Tratamiento: Sol. Salina 3%. LÍMITE ABSOLUTO: No aumentar más de 8-10 mEq/L en 24 horas (Previene Desmielinización Osmótica).",
      "Tema: Nefrología / Trastornos del Sodio."
    ]
  },
  {
    id: "umng-conv-2026-07-26-87",
    university: "UMNG",
    examArea: "TRAUMA / ORTOPEDIA / NEUROLOGÍA",
    topic: "ORTOPEDIA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Estudiante de 22 años ingresa quejándose de dolor y deformidad en el brazo derecho tras encontrarse \"echando pulsos\" (vencidas). A la inspección, presenta fractura espiroidea de la diáfisis humeral. Al realizar valoración neurológica, usted le pide que intente levantar la muñeca y los dedos hacia arriba (dorsiflexión); el paciente es totalmente incapaz de hacerlo, presentando la mano flácida caída (\"drop hand\"), y refiere anestesia en el dorso de la mano. ¿Qué nervio periférico ha resultado lesionado debido a su estrecha relación anatómica con el sitio de la fractura?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Nervio Cubital.",
        distractorProfile: "medial_epicondyle_nerve",
        incorrectFeedback: "El cubital se lesiona en fracturas del epicóndilo medial del codo y produce mano en garra y anestesia del meñique."
      },
      {
        id: "B",
        label: "B",
        text: "Nervio Mediano.",
        distractorProfile: "supracondylar_nerve",
        incorrectFeedback: "Se lesiona en fracturas supracondíleas (niños) y da la mano de predicador o pérdida del signo de OK."
      },
      {
        id: "C",
        label: "C",
        text: "Nervio Radial."
      },
      {
        id: "D",
        label: "D",
        text: "Nervio Músculocutáneo.",
        distractorProfile: "biceps_flexion_nerve",
        incorrectFeedback: "Inerva el bíceps braquial (flexión de codo). Rara vez se lesiona por fracturas humerales aisladas."
      }
    ],
    correctOptionId: "C",
    explanation: "El nervio radial desciende abrazando estrechamente el tercio medio/distal de la diáfisis del húmero por el canal de torsión. Las fracturas de la diáfisis humeral (especialmente las espiroideas por torsión, como al hacer 'vencidas' o lesión de Holstein-Lewis) lesionan frecuentemente este nervio (neuropraxia). El nervio radial inerva todos los extensores de la extremidad superior. Su parálisis clásica se manifiesta como la imposibilidad de dorsiflexionar la muñeca y los dedos, conocido como 'Mano Caída'.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\n'Echar pulsos' es la causa del 90% de las parálisis del radial en jóvenes. El húmero se tuerce, estalla por la mitad, y las esquirlas pellizcan al nervio radial. Pídele al paciente que haga la seña de 'pare' (extender la palma hacia atrás); la mano no va a responder, va a caer flácida. Afortunadamente, casi siempre es neuropraxia; ponle una férula y en 2-4 meses volverá a moverla.",
    keyPoints: [
      "Cuando veas:",
      "• Fractura Diáfisis Humeral + Mano Caída (No extiende muñeca).",
      "Debes pensar en:",
      "Lesión del Nervio Radial.",
      "Tema: Ortopedia / Fracturas y Lesiones Nerviosas Periféricas."
    ]
  },
  {
    id: "umng-conv-2026-07-26-88",
    university: "UMNG",
    examArea: "CARDIOLOGÍA / URGENCIAS",
    topic: "CARDIOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Mujer de 78 años ingresa tras sufrir síncope. Consciente pero refiere mareos y dolor en pecho. PA 85/50 mmHg, FC de 32 lpm (bradicardia profunda). El ECG revela: Ondas P rítmicas a una frecuencia de 85 lpm, Complejos QRS ensanchados a una frecuencia regular de 32 lpm. No hay absolutamente ninguna relación constante entre las ondas P y los complejos QRS (disociación AV completa). ¿Cuál es el diagnóstico electrocardiográfico y la conducta terapéutica INMEDIATA más apropiada?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Bloqueo AV de segundo grado Mobitz I (Wenckebach) / Administración de Amiodarona intravenosa.",
        distractorProfile: "wrong_block_wrong_drug",
        incorrectFeedback: "El Mobitz I sí tiene relación P-QRS (PR alargándose). Además, Amiodarona agrava los bloqueos."
      },
      {
        id: "B",
        label: "B",
        text: "Taquicardia Ventricular Lenta / Cardioversión Eléctrica Sincronizada urgente.",
        distractorProfile: "fatal_shock_for_escape",
        incorrectFeedback: "Los QRS anchos a 30 lpm son el ritmo de escape vital del ventrículo. Si cardioviertes, causarás asistolia."
      },
      {
        id: "C",
        label: "C",
        text: "Bloqueo AV de tercer grado (Completo) / Iniciar marcapasos transcutáneo de urgencia asociado a sedación/analgesia."
      },
      {
        id: "D",
        label: "D",
        text: "Enfermedad del Nodo Sinusal / Observación clínica estricta y prueba de esfuerzo mañana.",
        distractorProfile: "fatal_observation_unstable",
        incorrectFeedback: "Observar un Bloqueo de 3er grado sintomático hipotenso = Muerte súbita."
      }
    ],
    correctOptionId: "C",
    explanation: "El ECG describe Disociación Auriculoventricular completa (las P van a 85 lpm y los QRS anchos van lentos a 32 lpm, sin 'hablarse' entre sí), esto es el sello del Bloqueo AV de Tercer Grado Completo. Al presentar criterios de inestabilidad (PA 85/50, síncope, dolor precordial), la guía ACLS de Bradicardia manda iniciar Marcapasos Transcutáneo (parches) URGENTE, mientras se preparan los vasopresores y se coordina marcapasos transvenoso (Atropina rara vez sirve en bloqueos infranodales de QRS ancho).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el nodo sinusal da la orden de atacar a 85 por minuto, pero cortaron los cables (bloqueo completo). El ventrículo, desesperado sin órdenes, toca el tambor lento y desordenado a 30 latidos (QRS ancho). Es el ritmo de escape; es lo único que mantiene con vida a la abuelita. No intentes 'corregir' el ritmo con choques ni con Atropina. Pega los parches del DEA en el pecho, oprime 'Pacer' (Marcapasos), y dale un corrientazo regulado para que lata a 60.",
    keyPoints: [
      "Cuando veas:",
      "• ECG: Disociación AV completa (P y QRS divorciados) + Inestabilidad Hemodinámica.",
      "Debes pensar en:",
      "Bloqueo AV Completo (3er Grado). Conducta INMEDIATA: Marcapasos Transcutáneo.",
      "Tema: Cardiología / ACLS Bradicardia."
    ]
  },
  {
    id: "umng-conv-2026-07-26-89",
    university: "UMNG",
    examArea: "MEDICINA TROPICAL / TOXICOLOGÍA",
    topic: "TOXICOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Niño de 8 años mordido por serpiente hace 3 horas. La foto muestra patrón R-A-N-A (Rojo-Amarillo-Negro-Amarillo). El sitio de la mordedura apenas presenta dos marcas de punción sin edema masivo ni flictenas, con mínimo dolor. Sin embargo, el niño ingresa con dificultad respiratoria, sialorrea masiva (incapacidad para tragar), parálisis flácida de los brazos y caída pesada de ambos párpados superiores (ptosis palpebral masiva, facies miasténica). ¿Cuál es el diagnóstico clínico y toxicológico inminente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Accidente ofídico Bothrópico severo con diseminación sistémica / Riesgo de coagulopatía y sangrado masivo inminente.",
        distractorProfile: "bothrops_mimic_wrong_toxin",
        incorrectFeedback: "El veneno de Bothrops (Mapana) causa edema gigantesco, flictenas y sangrado. El niño tiene la mano intacta."
      },
      {
        id: "B",
        label: "B",
        text: "Accidente ofídico Elapídico (Coral) / Parálisis bulbar y paro respiratorio neurotóxico inminente."
      },
      {
        id: "C",
        label: "C",
        text: "Accidente ofídico por Lachesis (Verrugosa) / Falla renal aguda y choque vagal.",
        distractorProfile: "lachesis_mimic_wrong_toxin",
        incorrectFeedback: "Lachesis produce necrosis masiva y excitación parasimpática (sudor, diarrea extremas)."
      },
      {
        id: "D",
        label: "D",
        text: "Mordedura de Crotálido (Cascabel) exclusiva / Mioglobinuria masiva y parálisis renal.",
        distractorProfile: "crotalus_mimic_myotoxic",
        incorrectFeedback: "Crotalus sí da ptosis, pero tiene un componente miotóxico brutal (dolor muscular generalizado y orina oscura). El patrón anillado lo excluye."
      }
    ],
    correctOptionId: "B",
    explanation: "El patrón R-A-N-A identifica a la Coral (Micrurus, familia Elapidae). El veneno de la Coral verdadera es PURAMENTE NEUROTÓXICO (alfa-neurotoxinas que bloquean el receptor de acetilcolina en la placa motora, como el curare). No produce edema ni dolor severo local, lo que retrasa la consulta. A las horas produce parálisis flácida descendente: Ptosis palpebral (facies miasténica), disfagia y sialorrea (parálisis bulbar), progresando rápidamente a Parálisis Respiratoria y muerte asfíctica. Requiere Intubación inmediata y Suero Anticoral específico.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., las corales colombianas no destrozan la carne; apagan los músculos. Cuando este niñito llegó babeando sin poder pasar saliva, con los ojos cerrados ('facies de Rosenfeld') y ahogándose, su diafragma está claudicando. No pierdas tiempo mirándole la minúscula marca en la mano. Pásale un tubo a la tráquea inmediatamente o hará paro asfíctico en cinco minutos, y ponle el suero Anticoral.",
    keyPoints: [
      "Cuando veas:",
      "• Mordedura de serpiente (anillos) + Ausencia de edema local + Ptosis palpebral/Facies Miasténica/Disnea.",
      "Debes pensar en:",
      "Accidente Elapídico (Coral). Veneno neurotóxico (parálisis flácida respiratoria). Manejo: Soporte ventilatorio y Suero Anticoral.",
      "Tema: Toxicología / Accidente Ofídico."
    ]
  },
  {
    id: "umng-conv-2026-07-26-90",
    university: "UMNG",
    examArea: "MEDICINA DE URGENCIAS / TOXICOLOGÍA",
    topic: "TOXICOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "2026_07_26"],
    statement: "Paciente de 19 años es ingresado inconsciente tras intento suicida con un frasco entero de Aspirina (Ácido Acetilsalicílico). En urgencias, está estuporoso, febril (39°C) y con patrón respiratorio soplante y muy rápido (Kussmaul). Los gases arteriales reportan: pH de 7.30, PaO2 95 mmHg, PaCO2 18 mmHg, HCO3 8 mEq/L, Anión Gap 26 mEq/L. ¿Cuál es el tratamiento específico (Gold Standard de depuración) que se debe instaurar agresivamente una vez resucitado con líquidos?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Fomepizol o Etanol intravenoso para frenar la producción ácida.",
        distractorProfile: "wrong_acid_antidote",
        incorrectFeedback: "Estos sirven para metanol o etilenglicol, bloqueando enzimas, no aclaran el ácido salicílico ya formado."
      },
      {
        id: "B",
        label: "B",
        text: "Infusión IV continua de Bicarbonato de Sodio (Alcalinización urinaria y plasmática)."
      },
      {
        id: "C",
        label: "C",
        text: "Aplicar dosis múltiples de Fisostigmina intravenosa hasta recuperar el sensorio.",
        distractorProfile: "wrong_toxidrome_antidote",
        incorrectFeedback: "Fisostigmina es para el síndrome anticolinérgico, que no causa acidosis anión gap alta ni respiración de Kussmaul profunda."
      },
      {
        id: "D",
        label: "D",
        text: "Intubación Orotraqueal inmediata fijando el ventilador mecánico a baja frecuencia para retener el CO2 y mejorar la alcalosis.",
        distractorProfile: "fatal_ventilatory_management",
        incorrectFeedback: "¡Trampa mortal! Si bajan la FR y retienen el CO2, el mecanismo compensatorio se pierde, el pH caerá a niveles incompatibles con la vida (muerte en minutos)."
      }
    ],
    correctOptionId: "B",
    explanation: "La intoxicación masiva por Salicilatos presenta un trastorno mixto clásico: primero estimula el centro respiratorio (Alcalosis respiratoria hiperventilatoria extrema, pCO2 18), y luego desacopla la fosforilación oxidativa generando acidosis láctica/cetónica (Acidosis metabólica de Anión Gap gigante, HCO3 8, pH 7.30). El tratamiento salvavidas de eliminación es la ALCALINIZACIÓN URINARIA con Bicarbonato de Sodio IV. Al elevar el pH de la orina >7.5, el salicilato se 'ioniza' y queda atrapado (Atrapamiento Iónico) en los túbulos, sin poder reabsorberse, excretándose masivamente.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el salicilato le rompió la mitocondria al muchacho; la energía es puro calor (fiebre). Jadea a 40 por minuto porque el ácido lo patea y el pulmón trata de limpiarlo compensando. Pásale Bicarbonato IV. Tu misión no es curar el pH de la sangre, es lograr orina alcalina para que las pastillas salgan arrastradas ('atrapamiento iónico'). Y OJO: si lo intubas y 'bajas' la frecuencia respiratoria de la máquina, le quitas la hiperventilación compensatoria y el cerebro será ácido puro; ¡se muere al instante!",
    keyPoints: [
      "Cuando veas:",
      "• Intoxicación por Aspirina + Hiperventilación + Trastorno ácido-base Mixto (Alcalosis Resp. + Acidosis Met.).",
      "Debes pensar en:",
      "Tratamiento Base: Alcalinización Urinaria con Bicarbonato de Sodio (Atrapamiento Iónico). NUNCA frenar la hiperventilación compensatoria.",
      "Tema: Toxicología / Analgésicos y AINEs."
    ]
  }
];
