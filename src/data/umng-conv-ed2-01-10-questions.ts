import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UMNG — Edición #2 (Simulacro 2) · Preguntas #01–#10.
 */
export const UMNG_CONV_ED2_01_10_QUESTIONS: TrainingQuestion[] = [
  {
    id: "umng-conv-ed2-01",
    university: "UMNG",
    examArea: "MEDICINA INTERNA",
    topic: "CARDIOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un hombre de 24 años, con antecedente de episodios esporádicos de taquicardia desde la adolescencia, ingresa a urgencias por palpitaciones de inicio brusco y mareo. Signos vitales: PA 110/70 mmHg, FC 210 lpm. El electrocardiograma (ECG) evidencia una taquicardia de complejos anchos (QRS > 0.12 s) de morfología variable, con un ritmo irregularmente irregular, y frecuencias auriculares que alcanzan los 300 lpm. El paciente se encuentra hemodinámicamente estable, conversando. Usted diagnostica una Fibrilación Auricular preexcitada (Síndrome de Wolff-Parkinson-White con FA). ¿Cuál de los siguientes medicamentos está ESTRICTAMENTE CONTRAINDICADO por riesgo de precipitar Fibrilación Ventricular y muerte súbita?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Procainamida intravenosa.",
        distractorProfile: "correct_but_different",
        incorrectFeedback: "La Procainamida (antiarrítmico de clase Ia) es el fármaco de elección en pacientes ESTABLES con FA preexcitada. Disminuye la conducción a través de la vía accesoria sin bloquear el nodo AV."
      },
      {
        id: "B",
        label: "B",
        text: "Amiodarona intravenosa."
      },
      {
        id: "C",
        label: "C",
        text: "Ibutilida intravenosa.",
        distractorProfile: "acceptable_alternative",
        incorrectFeedback: "La Ibutilida (clase III) es una alternativa aceptada en guías para revertir esta arritmia específica si no hay Procainamida."
      },
      {
        id: "D",
        label: "D",
        text: "Cardioversión eléctrica sincronizada.",
        distractorProfile: "rescue_treatment",
        incorrectFeedback: "Si el paciente se inestabiliza (o si hay duda diagnóstica), la cardioversión eléctrica es el tratamiento de rescate primario y más seguro."
      }
    ],
    correctOptionId: "B",
    explanation: "La Amiodarona, así como los betabloqueadores, los calcioantagonistas (Verapamilo/Diltiazem) y la Digoxina, son fármacos frenadores del nodo AV (Fármacos \"ABCD\"). Si bloqueas el nodo AV en un paciente con WPW, toda la tormenta eléctrica de la aurícula (300 lpm) se irá por la única vía que queda libre: el haz accesorio. El ventrículo recibirá 300 latidos por minuto, colapsando instantáneamente en Fibrilación Ventricular letal. Curiosamente, la Amiodarona se usaba antes, pero las guías modernas la contraindican formalmente en FA preexcitada por reportes de aceleración de la respuesta ventricular.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., este es el clásico error de pase de turno. Llega el muchacho con el corazón a mil, ves el monitor marcando 200 y dices \"¡Pónganle una ampolla de Amiodarona!\". A los 5 minutos, el paciente hace los ojos hacia atrás y el monitor hace una línea en serrucho (Fibrilación Ventricular). El nodo AV es el \"policía\" que frena los latidos locos de la aurícula. Si tú le disparas al policía con Amiodarona, los latidos se escapan por la vía de escape de los ladrones (el Haz de Kent) y te destruyen el ventrículo. Pasa electricidad o Procainamida.",
    keyPoints: [
      "Taquicardia Irregular + QRS Ancho en joven = FA con WPW (Preexcitada).",
      "Prohibidos los fármacos \"ABCD\" (Amiodarona, Betabloqueadores, Calcioantagonistas, Digoxina).",
      "Tratamiento: Estable = Procainamida. Inestable = Cardioversión Eléctrica."
    ]
  },
  {
    id: "umng-conv-ed2-02",
    university: "UMNG",
    examArea: "PEDIATRÍA",
    topic: "INFECTOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un niño de 4 años, cuyos padres son activistas antivacunas, es traído a urgencias por presentar 4 días de fiebre alta (40°C), tos intensa, rinorrea profusa y conjuntivitis bilateral con fotofobia. El día de hoy inició una erupción cutánea maculopapular eritematosa que comenzó en la línea de implantación del cabello y el rostro, y se está extendiendo hacia el tronco. Al examinar la cavidad oral, usted observa pequeñas lesiones puntiformes blancas rodeadas de un halo rojo en la mucosa de los carrillos, a la altura de los molares inferiores. Además del soporte hídrico y control térmico, ¿qué intervención farmacológica ESPECÍFICA ha demostrado reducir la morbimortalidad en esta enfermedad, particularmente previniendo secuelas oculares y respiratorias?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administración de Aciclovir intravenoso por 14 días.",
        distractorProfile: "wrong_disease_treatment",
        incorrectFeedback: "El Aciclovir es el tratamiento para la infección por el virus del Herpes Simple o Varicela Zóster grave. El Sarampión es causado por un Paramyxovirus que no responde al aciclovir."
      },
      {
        id: "B",
        label: "B",
        text: "Administración de altas dosis de Vitamina A (Retinol) en dos días consecutivos."
      },
      {
        id: "C",
        label: "C",
        text: "Inicio empírico de Ribavirina y Palivizumab.",
        distractorProfile: "experimental_or_wrong_virus",
        incorrectFeedback: "La Ribavirina se ha usado experimentalmente in vitro, y el Palivizumab es un anticuerpo monoclonal específico profiláctico para el Virus Sincitial Respiratorio (VSR) en prematuros. No tienen rol aquí."
      },
      {
        id: "D",
        label: "D",
        text: "Prescripción de Inmunoglobulina Humana Intravenosa (IGIV) de urgencia.",
        distractorProfile: "different_exanthem",
        incorrectFeedback: "La IGIV es el tratamiento de elección para la Enfermedad de Kawasaki (que da fiebre, ojo rojo, pero sin secreción, y lengua en fresa, no manchas de Koplik)."
      }
    ],
    correctOptionId: "B",
    explanation: "La OMS y la Academia Americana de Pediatría recomiendan enfáticamente la administración de Vitamina A a todos los niños con Sarampión agudo (independientemente de su estado nutricional previo). El sarampión agota drásticamente las reservas de vitamina A, provocando daño masivo en los epitelios (cornea y mucosa respiratoria). Dar 200.000 UI (en niños > 1 año) por dos días reduce significativamente el riesgo de ceguera (xeroftalmía), neumonía, diarrea severa y la mortalidad global en un 50%.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., los \"punticos blancos como granos de sal sobre fondo rojo\" adentro de los cachetes son las manchas de Koplik. Si las ves, no hay duda diagnóstica. El sarampión no mata por la fiebre; mata porque desnuda el epitelio de los pulmones dejando entrar neumococos, y destruye la córnea dejando ciego al niño. La Vitamina A funciona como un escudo regenerador exprés para estas mucosas. Denuncie epidemiológicamente el caso, aísle al paciente, y dele sus perlas de retinol.",
    keyPoints: [
      "Fiebre + Tos, Coriza, Conjuntivitis + Manchas de Koplik = Sarampión.",
      "Tratamiento que reduce la mortalidad y previene la ceguera/neumonía = Vitamina A a dosis altas."
    ]
  },
  {
    id: "umng-conv-ed2-03",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "ENDOCRINOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Mujer de 21 años, primigestante con edad gestacional calculada por FUM de 10 semanas, acude a urgencias por hiperemesis gravídica severa y sangrado vaginal escaso. Al examen físico, llama la atención una paciente agitada, sudorosa, con temblor fino distal y una frecuencia cardíaca de 135 lpm (taquicardia sinusal). Al tacto bimanual, el fondo uterino se palpa a nivel de la cicatriz umbilical (tamaño uterino discordante, mayor a la edad gestacional esperada). Se realiza ecografía transvaginal que no evidencia saco gestacional ni feto, sino una cavidad uterina ocupada por una masa hiperecogénica con múltiples áreas quísticas (patrón en \"tormenta de nieve\"). Laboratorios: beta-hCG cuantitativa > 500.000 UI/L. ¿Cuál es el mecanismo fisiopatológico que explica la taquicardia, la agitación y el temblor en esta paciente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Reacción simpaticomimética secundaria al estrés de la hiperemesis y la deshidratación aguda.",
        distractorProfile: "partial_truth",
        incorrectFeedback: "Aunque la deshidratación causa taquicardia, no explica el temblor fino, la sudoración profusa y la agitación neurológica de manera tan focal en ausencia de choque grave."
      },
      {
        id: "B",
        label: "B",
        text: "Metástasis pulmonares y cerebrales subclínicas derivadas de la proliferación trofoblástica.",
        distractorProfile: "rare_complication",
        incorrectFeedback: "El Coriocarcinoma (malignidad) puede hacer metástasis a pulmón y cerebro, pero este cuadro clínico agudo en una mola intacta de 10 semanas se explica por la endocrinología cruzada, no por metástasis."
      },
      {
        id: "C",
        label: "C",
        text: "Hipertiroidismo secundario a la homología estructural entre la subunidad alfa de la hCG y la TSH."
      },
      {
        id: "D",
        label: "D",
        text: "Síndrome de respuesta inflamatoria sistémica desencadenada por infección intraamniótica subclínica.",
        distractorProfile: "unrelated_pathology",
        incorrectFeedback: "No hay fiebre ni signos locales de infección (líquido fétido), y no concuerda con la ecografía de degeneración hidrópica de las vellosidades."
      }
    ],
    correctOptionId: "C",
    explanation: "Las hormonas glucoproteicas TSH, FSH, LH y hCG comparten exactamente la misma subunidad alfa. Cuando la hCG se eleva a niveles astronómicos (como ocurre en la Mola Hidatidiforme Completa, frecuentemente > 100.000 o 500.000 UI/L), el cuerpo se confunde. La hCG masiva se une a los receptores de TSH en la glándula tiroides, sobreestimulándola y produciendo un Hipertiroidismo clínico severo (tirotoxicosis). Por esto, antes de evacuar una mola con estos síntomas (Legrado), es obligatorio estabilizar a la paciente con betabloqueadores (Propranolol) para evitar una tormenta tiroidea letal en el quirófano.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el cuerpo de la mujer no sabe distinguir entre TSH y hCG cuando hay demasiada cantidad. Esa matriz llena de racimos de uvas (la mola) está produciendo tanta hormona del embarazo que la glándula tiroides en el cuello recibe la señal de \"¡Trabaja, trabaja, trabaja!\". La paciente empieza a sudar, tiembla y el corazón se le sale del pecho como si tuviera la enfermedad de Graves. Antes de llamar al anestesiólogo para rasparle el útero (AMEU), bájale las revoluciones con Propranolol.",
    keyPoints: [
      "Mola Hidatidiforme (\"tormenta de nieve\") -> Cursa con hCG altísima.",
      "Como la hCG es prima gemela de la TSH (misma subunidad alfa), la mola puede causar Hipertiroidismo Severo.",
      "Siempre revisar tiroides y frenar con Propranolol antes del Legrado por Aspiración."
    ]
  },
  {
    id: "umng-conv-ed2-04",
    university: "UMNG",
    examArea: "CIRUGÍA GENERAL",
    topic: "GASTROENTEROLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Mujer de 76 años, con historia de episodios recurrentes de cólico biliar que nunca fueron operados, asiste a urgencias por un cuadro de 4 días de dolor abdominal tipo cólico difuso, distensión severa, vómitos fecaloideos y ausencia de deposiciones. Al examen físico, el abdomen es globoso, doloroso, con ruidos intestinales metálicos y de lucha. Se solicita una radiografía simple de abdomen en bipedestación. Usted observa dilatación severa de asas de intestino delgado con niveles hidroaéreos múltiples. Llama la atención la presencia de aire en la vía biliar (aerobilia) en el hipocondrio derecho y una imagen radiopaca ovalada calcificada aislada en la fosa ilíaca derecha. ¿Cuál es el diagnóstico más probable que explica esta tríada radiológica?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Colangitis aguda grave por bacterias productoras de gas.",
        distractorProfile: "wrong_clinical_picture",
        incorrectFeedback: "La colangitis aguda daría fiebre de 40°C, ictericia y choque (Tríada de Charcot), pero no produce una obstrucción intestinal mecánica franca ni un cálculo calcificado flotando en la fosa ilíaca derecha."
      },
      {
        id: "B",
        label: "B",
        text: "Perforación diverticular con neumoperitoneo secundario.",
        distractorProfile: "misinterpretation",
        incorrectFeedback: "La perforación diverticular da aire libre subdiafragmático (neumoperitoneo), no aerobilia, y el cuadro suele acompañarse de peritonitis marcada, no de obstrucción simple de intestino delgado."
      },
      {
        id: "C",
        label: "C",
        text: "Íleo Biliar (Síndrome de Bouveret variante)."
      },
      {
        id: "D",
        label: "D",
        text: "Isquemia mesentérica con neumatosis portal.",
        distractorProfile: "different_finding",
        incorrectFeedback: "El gas en la isquemia mesentérica se ve en la pared del intestino (neumatosis) y viaja a la vena porta periférica del hígado, no dibuja el árbol biliar central. Y cursa con acidosis láctica letal, no un cólico obstructivo indolente de 4 días."
      }
    ],
    correctOptionId: "C",
    explanation: "Tras múltiples episodios de colecistitis crónica, la vesícula inflamada se pega al duodeno y se perfora hacia él, creando una fístula (fístula colecistoduodenal). Al existir esta fístula, un cálculo gigante (> 2.5 cm) cae al duodeno y viaja por el intestino hasta que se atasca en el punto más estrecho: la válvula ileocecal en fosa ilíaca derecha. La presencia de la fístula permite que el gas del intestino suba a la vía biliar (Aerobilia). Esto configura la clásica Tríada de Rigler. El tratamiento es la laparotomía con enterolitotomía (cortar el intestino, sacar la piedra y cerrar).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el cuerpo humano es increíblemente ingenioso. Si una vesícula está llena de rocas y su salida natural está tapada, la vesícula simplemente \"derrite\" el duodeno que tiene al lado y escupe la roca hacia el intestino para vaciarse. El problema es que esa roca viaja por todo el yeyuno hasta llegar a la \"puerta de salida\" (la válvula ileocecal) y ahí se traba, causando una obstrucción mecánica total. Como quedó un túnel abierto entre el intestino y la vesícula, el aire de los pedos se sube directo al hígado (aerobilia). Mete a la abuela al quirófano, hazle un tajo al íleon, saca la piedra y listo. (La vesícula ni la toques en esa urgencia, ya quedó fistulizada y tranquila).",
    keyPoints: [
      "Tríada de Rigler radiológica: 1. Obstrucción Intestinal + 2. Aerobilia + 3. Cálculo en fosa ilíaca derecha.",
      "Diagnóstico: Íleo Biliar.",
      "El cálculo pasó al intestino a través de una fístula colecistoduodenal."
    ]
  },
  {
    id: "umng-conv-ed2-05",
    university: "UMNG",
    examArea: "NEUROLOGÍA",
    topic: "URGENCIAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un hombre de 45 años, previamente sano y sin factores de riesgo cardiovascular, es llevado a urgencias por su esposa. Refiere que mientras levantaba unas cajas pesadas, presentó de manera súbita y explosiva el \"peor dolor de cabeza de toda su vida\" (cefalea en trueno), asociado a fotofobia y vómito. Al ingreso, el paciente se encuentra con Glasgow 15, alerta, quejándose intensamente del dolor y con leve rigidez de nuca a la exploración. Dado que ha transcurrido un lapso de 14 horas desde el inicio del dolor, usted solicita un TAC de cráneo simple de urgencia. El radiólogo reporta que el TAC es completamente NORMAL, sin evidencia de sangrado hiperdenso. Teniendo en cuenta la altísima sospecha clínica, ¿cuál es el paso de protocolo OBLIGATORIO a seguir antes de descartar el cuadro?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Solicitar una Resonancia Magnética Cerebral con gadolinio para detectar microsangrados.",
        distractorProfile: "over_investigation",
        incorrectFeedback: "La Resonancia Magnética no es de primera línea en la urgencia aguda por tiempo y poca superioridad sobre la PL en buscar productos de degradación sanguínea a las 14 horas de evolución."
      },
      {
        id: "B",
        label: "B",
        text: "Dar de alta con AINEs potentes, diagnosticando Migraña aguda refractaria.",
        distractorProfile: "lethal_error",
        incorrectFeedback: "El error más demandado en urgencias neurológicas. Dar de alta a un paciente con \"la peor cefalea de su vida\" solo porque el TAC es normal es firmar su sentencia de muerte. Hará un resangrado aneurismático en los próximos días que será fatal."
      },
      {
        id: "C",
        label: "C",
        text: "Realizar una Punción Lumbar en busca de eritrocitos y xantocromía en el LCR."
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar Nimodipino oral e interconsultar a neurocirugía de manera preventiva.",
        distractorProfile: "premature_treatment",
        incorrectFeedback: "El Nimodipino es excelente para evitar el vasoespasmo post-HSA, pero no se inicia sin haber confirmado el diagnóstico previamente."
      }
    ],
    correctOptionId: "C",
    explanation: "El TAC de cráneo tiene una sensibilidad cercana al 98% si se toma en las primeras 6 horas de la ruptura del aneurisma. Sin embargo, a medida que pasan las horas (el paciente lleva 14), la sangre en el espacio subaracnoideo se \"lava\" o se isodensa con el parénquima, haciendo que el TAC pueda salir falsamente normal. Las guías son estrictas: Si hay clínica clásica de HSA y el TAC es NEGATIVO, es OBLIGATORIO realizar una Punción Lumbar. Se busca un LCR sanguinolento que no aclare entre los tubos, o la presencia de Xantocromía (coloración amarillenta del LCR dada por la degradación de la hemoglobina a bilirrubina, la cual tarda al menos 12 horas en aparecer, por lo que es perfecta para este paciente).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., si este señor tosió o hizo fuerza y sintió que alguien le pegaba un batazo en la base del cráneo, una arteria del polígono de Willis se acaba de romper (Aneurisma). La sangre irrita las meninges y da esa rigidez de nuca. Si pasaron 14 horas, los macrófagos del líquido cefalorraquídeo ya se comieron los glóbulos rojos, por lo que el TAC no verá la sangre blanca brillante. Pero si le metes la aguja en la columna lumbar, el líquido saldrá amarillo como aceite viejo (Xantocromía). Ese es el \"cadáver\" de los glóbulos rojos. Búscalo, pide la panangiografía y llámale al neurocirujano.",
    keyPoints: [
      "\"Peor dolor de cabeza de su vida\" súbito = Hemorragia Subaracnoidea.",
      "Paso 1: TAC Cráneo Simple.",
      "Paso 2 (Si el TAC es Normal pero la clínica persiste): Punción Lumbar buscando Xantocromía o sangre."
    ]
  },
  {
    id: "umng-conv-ed2-06",
    university: "UMNG",
    examArea: "PEDIATRÍA",
    topic: "NEONATOLOGÍA - CIRUGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Inmediatamente tras un parto vaginal fortuito en el hogar atendido por parteras, una ambulancia trae a urgencias a un neonato masculino a término de 30 minutos de vida. Al desnudar al bebé en la cuna térmica, usted evidencia una malformación severa de la pared abdominal: hay asas de intestino delgado y grueso completamente evisceradas (expuestas al aire libre), a través de un defecto ubicado justo a la derecha del cordón umbilical. Las asas se ven engrosadas, edematosas, sin ninguna membrana protectora o saco que las cubra, y el cordón umbilical está insertado normalmente a la izquierda del defecto. El neonato se encuentra vigoroso, llorando y sonrosado. ¿Cuál es el cuidado médico prequirúrgico PRIORITARIO e INMEDIATO en la sala de partos/urgencias para este defecto específico?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Reducir manualmente las asas intestinales al interior del abdomen para prevenir isquemia masiva.",
        distractorProfile: "lethal_action",
        incorrectFeedback: "Reducir las asas a la fuerza en la sala de urgencias es criminal. El abdomen del bebé no está \"acostumbrado\" a tener los intestinos adentro (perdieron su derecho a domicilio). Empujarlos a la fuerza causará Síndrome Compartimental Abdominal agudo: elevación del diafragma (asfixia) y colapso de la vena cava (choque obstructivo y muerte)."
      },
      {
        id: "B",
        label: "B",
        text: "Envolver de inmediato las asas expuestas en un plástico estéril o apósitos húmedos estériles e iniciar líquidos intravenosos a altos flujos."
      },
      {
        id: "C",
        label: "C",
        text: "Administrar antibióticos profilácticos y esperar el cierre espontáneo con maduración epitelial tópica.",
        distractorProfile: "ineffective_treatment",
        incorrectFeedback: "Esto no cierra espontáneamente; requiere reducción paulatina quirúrgica o cierre primario si cabe."
      },
      {
        id: "D",
        label: "D",
        text: "Pasar una sonda orogástrica y presionar el abdomen con vendajes de compresión fuerte.",
        distractorProfile: "harmful_intervention",
        incorrectFeedback: "La compresión fuerte matará al intestino por estrangulación isquémica."
      }
    ],
    correctOptionId: "B",
    explanation: "Al no tener saco amniótico que los cubra (Gastrosquisis), los intestinos están expuestos al aire acondicionado del hospital. La pérdida de calor (hipotermia severa) y la evaporación de agua (deshidratación fulminante) es inmensa. La conducta primaria es envolver las vísceras en una bolsa de plástico estéril (Silo bag) (o gasas empapadas en suero tibio y envueltas en plástico) para mantenerlas húmedas y calientes, canalizar una vía para reanimación hídrica agresiva (doble de lo normal) y colocar sonda orogástrica para que los intestinos no se inflen con aire. Posteriormente, cirugía pediátrica las irá introduciendo lentamente en varios días usando el silo colgado sobre la cuna.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., este bebé nació con sus tripas por fuera y nadaron 9 meses en el líquido amniótico, por eso se ven engrosadas y rígidas (peritonitis química). Si las dejas expuestas a la luz de la camilla, el calor del bebé se va a evaporar por el intestino en 15 minutos. Cúbrelas rápido con una bolsa plástica estéril, ponlas \"hacia arriba\" sostenidas para que las venas mesentéricas no se ahorquen, y mándale el doble de líquidos por la vena. ¡El cirujano pediatra se encargará de hacerle \"campo\" en la panza poco a poco!",
    keyPoints: [
      "Neonato con intestino expuesto SIN saco protector = Gastrosquisis.",
      "Peligro principal inmediato: Hipotermia y Deshidratación masiva.",
      "Acción 1: Envolver en bolsa estéril (Silo) + Líquidos IV altos flujos + Sonda orogástrica a derivación."
    ]
  },
  {
    id: "umng-conv-ed2-07",
    university: "UMNG",
    examArea: "NEFROLOGÍA",
    topic: "MEDICINA INTERNA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un hombre de 50 años, con diagnóstico reciente de Síndrome Nefrótico secundario a una Nefropatía Membranosa (proteinuria de 8 gramos/24h, albúmina sérica de 2.1 g/dL, edema bimaléolar masivo), asiste de urgencia refiriendo un inicio súbito y desgarrador de dolor en fosa lumbar izquierda que se irradia hacia el flanco. Adicionalmente, el paciente nota la aparición aguda de unas venas dilatadas en su escroto izquierdo (varicocele de novo) y la orina se tornó de color rojo intenso (hematuria macroscópica). Se descarta litiasis por ecografía. ¿Cuál es el evento fisiopatológico MÁS PROBABLE que explica esta complicación catastrófica y súbita en el contexto de su patología de base?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Ruptura de quistes renales bilaterales ocultos.",
        distractorProfile: "partial_symptoms",
        incorrectFeedback: "La poliquistosis renal da dolor y hematuria, pero no produce un varicocele de novo como rasgo distintivo, ni es la complicación temida principal del síndrome nefrótico."
      },
      {
        id: "B",
        label: "B",
        text: "Trombosis Aguda de la Vena Renal izquierda por estado de hipercoagulabilidad."
      },
      {
        id: "C",
        label: "C",
        text: "Hemorragia subcapsular renal masiva por biopsia previa inadvertida.",
        distractorProfile: "wrong_etiology",
        incorrectFeedback: "Aunque la biopsia tiene riesgo de sangrado, la aparición del varicocele y el contexto sistémico hipercoagulable orientan a la oclusión vascular."
      },
      {
        id: "D",
        label: "D",
        text: "Disección aguda de la arteria renal secundaria a placas ateroscleróticas masivas por dislipidemia nefrótica.",
        distractorProfile: "arterial_vs_venous",
        incorrectFeedback: "La disección arterial renal causaría dolor isquémico agudo e hipertensión refractaria (vía renina), pero no da hematuria macroscópica franca como síntoma principal ni obstruye el retorno venoso escrotal."
      }
    ],
    correctOptionId: "B",
    explanation: "El Síndrome Nefrótico provoca la pérdida masiva de proteínas por la orina. Junto con la albúmina, el riñón pierde Antitrombina III y proteínas C y S (anticoagulantes naturales), mientras que el hígado sobreproduce fibrinógeno. Esto genera un estado Hipercoagulable. La complicación clásica vascular es la formación de un coágulo en la Vena Renal. Esta complicación es más frecuente en la Nefropatía Membranosa. ¿Por qué el varicocele izquierdo? Por anatomía básica: la vena gonadal (testicular) izquierda drena en ángulo recto directamente en la Vena Renal Izquierda. Al taparse la vena renal por el coágulo, la sangre se estanca y la presión dilata la vena del testículo izquierdo. (La vena gonadal derecha drena directo a la vena cava inferior, por lo que no se afecta).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el riñón del paciente nefrótico es como un colador roto. Se le están yendo los frenos de la coagulación por la orina (Antitrombina III). La sangre se le vuelve espesa como mermelada y forma un coágulo gigantesco en la vena que sale del riñón. Si es el lado izquierdo, recuerda tus clases de anatomía de primer semestre: la vena del testículo izquierdo viaja hacia arriba y choca contra la vena renal. Si la vena renal está tapada por el trombo, la sangre se devuelve hacia el testículo hinchando las venas (Varicocele). Pide Angio-TC y anticoagula a ese riñón.",
    keyPoints: [
      "Síndrome Nefrótico severo (Especialmente Nefropatía Membranosa) = Alto riesgo de Trombosis de Vena Renal (Por pérdida urinaria de Antitrombina III).",
      "Clínica clásica: Dolor lumbar agudo + Hematuria + Varicocele IZQUIERDO de instauración aguda.",
      "Tratamiento: Anticoagulación sistémica."
    ]
  },
  {
    id: "umng-conv-ed2-08",
    university: "UMNG",
    examArea: "TOXICOLOGÍA",
    topic: "MEDICINA INTERNA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Una paciente de 75 años con antecedente de Falla Cardíaca con FEVI reducida y Fibrilación Auricular crónica acude a urgencias quejándose de náuseas intratables, vómito constante, dolor abdominal y una extraña alteración visual (ve \"halos amarillos\" alrededor de las luces, xantopsia). Al examen físico, luce deshidratada. El monitor cardíaco muestra múltiples extrasístoles ventriculares y un bloqueo AV de segundo grado. Usted revisa sus medicamentos de casa y encuentra que toma Enalapril, Furosemida, Espironolactona y Digoxina. El panel de electrolitos reporta un nivel de Potasio sérico de 6.8 mEq/L. Confirmada la intoxicación farmacológica subyacente, ¿cuál es el antídoto o tratamiento DEFINITIVO y de primera línea?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administración de Gluconato de Calcio IV al 10% inmediato para proteger el miocardio de la hiperkalemia severa.",
        distractorProfile: "lethal_trap",
        incorrectFeedback: "LA TRAMPA MORTAL. En cualquier otra hiperkalemia severa (K=6.8), el paso número 1 es el Gluconato de Calcio. EXCEPTO EN LA INTOXICACIÓN POR DIGOXINA. La digoxina bloquea la bomba Na/K ATPasa, lo que indirectamente satura la célula de Calcio intracelular (mecanismo inotrópico). Si le pones más Calcio intravenoso a un corazón lleno de digoxina, produces una sobrecarga citoplasmática de calcio que causa el \"Corazón de Piedra\" o \"Stone Heart\": una contracción tetánica irreversible y muerte fulminante. (Nota: algunas literaturas recientes dicen que el riesgo está sobrevalorado, pero en exámenes médicos, administrar Calcio en toxicidad por Digoxina es incorrecto)."
      },
      {
        id: "B",
        label: "B",
        text: "Infusión de Insulina y Dextrosa al 50% con diuresis forzada de Furosemida.",
        distractorProfile: "treats_symptom_not_cause",
        incorrectFeedback: "Bajar el potasio está indicado, pero la hiperkalemia en toxicidad por digoxina no es la causa de muerte per se, sino un MARCADOR de qué tan envenenada está la bomba celular. Atacar solo el potasio no neutraliza la droga del corazón."
      },
      {
        id: "C",
        label: "C",
        text: "Administración de Fragmentos Fab Inmunes Específicos (Anticuerpos Anti-Digoxina)."
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar atropina intravenosa y Hemodiálisis de urgencia inmediata para extraer el medicamento.",
        distractorProfile: "ineffective_treatment",
        incorrectFeedback: "La digoxina tiene un volumen de distribución gigantesco (está metida en los tejidos profundos), por lo cual NO es dializable. La hemodiálisis no sirve."
      }
    ],
    correctOptionId: "C",
    explanation: "El único tratamiento definitivo y salvavidas para la intoxicación digitálica sintomática con hiperkalemia o arritmias amenazantes de la vida, son los Anticuerpos Específicos Fab Anti-Digoxina (Digibind). Estos anticuerpos viajan por la sangre, atrapan la molécula de digoxina, la \"arrancan\" del corazón y se eliminan en la orina. El potasio y las arritmias se corrigen solos en horas.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la digoxina es como un exprimidor de limones para el corazón cansado: lo hace latir más fuerte atrapando calcio adentro. Pero si el abuelo se intoxica (porque se deshidrató con la Furosemida), la máquina se traba. El potasio se sale a la sangre y se acumula (Hiperkalemia) y el paciente ve todo amarillo como si trajera gafas polarizadas. Si tú asustado le pones Calcio intravenoso para \"proteger\" el corazón del potasio, vas a causar que el músculo cardíaco se acalambre para siempre. Literalmente el corazón se vuelve una piedra dura y se detiene. ¡Pide los anticuerpos Fab y desconecta el veneno!",
    keyPoints: [
      "Náuseas + Halos visuales amarillos + Arritmia + Toma Digoxina = Intoxicación por Digitálicos.",
      "Marcador de gravedad extrema: Hiperkalemia.",
      "Antídoto absoluto: Fragmentos Fab Anti-Digoxina.",
      "ESTRICTAMENTE CONTRAINDICADO: Dar Calcio IV (Corazón de piedra)."
    ]
  },
  {
    id: "umng-conv-ed2-09",
    university: "UMNG",
    examArea: "TRAUMA",
    topic: "CIRUGÍA DE TÓRAX Y ABDOMEN",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un hombre de 28 años es traído a urgencias tras sufrir un accidente automovilístico a alta velocidad. Viajaba como conductor sin cinturón de seguridad y su tórax inferior/abdomen superior impactó violentamente contra el volante. A su ingreso, el paciente se queja de dolor severo en hombro izquierdo y severa dificultad para respirar. Signos vitales: PA 90/60 mmHg, FC 115 lpm, FR 28 rpm. A la auscultación torácica, se evidencia ausencia total de murmullo vesicular en el tercio inferior y medio del hemitórax IZQUIERDO; sin embargo, en esta misma área, usted escucha ruidos hidroaéreos audibles a la auscultación. El hemitórax derecho ventila normal. Al pasar una Sonda Nasogástrica para descompresión, la radiografía de tórax portátil muestra la sonda enrollada en la porción inferior del tórax izquierdo, desplazando el mediastino levemente hacia la derecha. ¿Cuál es el diagnóstico clínico y la vía de abordaje quirúrgico inmediata?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Neumotórax a tensión izquierdo / Toracotomía de emergencia.",
        distractorProfile: "similar_presentation",
        incorrectFeedback: "El neumotórax a tensión no presenta ruidos intestinales ni subiría el estómago (sonda) a la cavidad pleural. Además, la toracotomía no es la respuesta inicial del neumotórax (es la aguja y tubo)."
      },
      {
        id: "B",
        label: "B",
        text: "Hernia Diafragmática Traumática / Laparotomía exploratoria para reducción visceral y cierre del defecto."
      },
      {
        id: "C",
        label: "C",
        text: "Taponamiento cardíaco por ruptura pericárdica / Pericardiocentesis subxifoidea inmediata.",
        distractorProfile: "wrong_diagnosis",
        incorrectFeedback: "No hay tríada de Beck, hay asimetría ventilatoria y vísceras ectópicas."
      },
      {
        id: "D",
        label: "D",
        text: "Perforación esofágica traumática / Toracoscopia y reparación primaria.",
        distractorProfile: "different_trauma",
        incorrectFeedback: "La perforación de esófago (Sx de Boerhaave) da neumomediastino, crepitación subcutánea y derrame, pero no sube los intestinos ni da ruidos hidroaéreos en el pulmón."
      }
    ],
    correctOptionId: "B",
    explanation: "El estallido del diafragma por trauma cerrado (efecto de \"bolsa de papel\" aplastada) ocurre predominantemente en el lado IZQUIERDO en más del 80% de los casos, porque en el lado derecho el gran lóbulo del hígado absorbe el impacto y protege el músculo. El estómago, el bazo y el colon son succionados hacia el tórax izquierdo debido a la presión negativa torácica. La clínica de ruidos intestinales en el tórax y la sonda doblada arriba confirman que el estómago subió. La vía de abordaje AGUDA (trauma reciente) es la Laparotomía Exploratoria (abordaje por el abdomen) porque es más fácil tirar de las vísceras hacia abajo para regresarlas, y además permite revisar otras lesiones abdominales asociadas (bazo, intestino). (Nota experta: si la hernia se descubre meses o años después de forma crónica, el abordaje preferido es por el tórax -toracotomía- por las adherencias pulmonares).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., imagínate una llanta de auto vieja que choca contra un andén. La presión revienta la pared más débil de la cámara interna. Cuando el hombre se golpeó contra el volante a 80 km/h, la presión de su vientre subió tanto que el diafragma izquierdo se rasgó como un papel. Cada vez que él respira, succiona más intestino hacia el pecho. El estómago le aplasta el pulmón. ¡Si le metes un tubo de tórax al ciego perforas su colon! Mete la sonda nasogástrica, pide la placa; si ves el \"lazo\" de la manguera asomando cerca del corazón, llévatelo al quirófano, abre la barriga, jala el estómago hacia su sitio y cose el diafragma con hilo grueso.",
    keyPoints: [
      "Trauma cerrado de abdomen/tórax inferior + Ruidos intestinales en tórax IZQUIERDO = Ruptura Diafragmática.",
      "La radiografía muestra la Sonda Gástrica torcida en el hemitórax.",
      "Manejo Agudo: LAPAROTOMÍA exploratoria (jalar vísceras hacia el abdomen y suturar el diafragma)."
    ]
  },
  {
    id: "umng-conv-ed2-10",
    university: "UMNG",
    examArea: "MEDICINA TROPICAL",
    topic: "INFECTOLOGÍA URGENCIAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un paciente masculino de 5 años es llevado de madrugada al puesto de salud en zona rural del departamento del Tolima. La madre relata que el niño se despertó llorando tras sentir un \"chuzón agudo\" en el pie al ponerse un zapato en el suelo de tierra. A la media hora del evento, el niño ingresa con agitación severa, sialorrea masiva (babeando excesivamente), lagrimeo, fasciculaciones musculares y vómitos repetidos. Al examen físico: PA 140/90 mmHg, FC 160 lpm, y el hallazgo más llamativo es que presenta movimientos oculares caóticos, erráticos e involuntarios en todas direcciones (Nistagmo rotatorio/horizontal o \"roving eye\"). Mientras usted prepara al paciente para el traslado, él comienza a referir un fuerte dolor abdominal punzante en banda. ¿Cuál es el animal responsable de este envenenamiento y cuál es la complicación visceral que causa el dolor en faja?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Picadura por abeja africana (Apis mellifera) / Choque anafiláctico secundario y colitis isquémica.",
        distractorProfile: "allergic_reaction",
        incorrectFeedback: "Las abejas causan anafilaxia severa (hipotensión, broncoespasmo, edema de glotis, ronchas), pero no causan nistagmo rotatorio ni estimulación autonómica parasimpática de este tipo."
      },
      {
        id: "B",
        label: "B",
        text: "Accidente por oruga Lonomia (Gusano de fuego) / Falla renal aguda y hemorragia adrenal.",
        distractorProfile: "hemorrhagic_venom",
        incorrectFeedback: "El contacto con orugas del género Lonomia da un síndrome hemorrágico fulminante (sangrado por todas las mucosas y heridas, con fibrinógeno indetectable) que causa falla renal por la hemoglobina libre y sangrados internos cerebrales. No da nistagmo ni dolor abdominal en faja."
      },
      {
        id: "C",
        label: "C",
        text: "Mordedura por serpiente Bothrops asper / Coagulación intravascular diseminada con sangrado digestivo.",
        distractorProfile: "wrong_snake",
        incorrectFeedback: "El veneno de Bothrops da un edema monstruoso en la extremidad con necrosis, flictenas y sangrado de encías, no la descarga neurológica caótica descrita aquí sin daño local extenso."
      },
      {
        id: "D",
        label: "D",
        text: "Picadura por Escorpión (Tityus sp.) / Tormenta autonómica y Pancreatitis Aguda severa."
      }
    ],
    correctOptionId: "D",
    explanation: "Los alacranes (escorpiones) del género Tityus abundan en los valles del Tolima y Huila. Su toxina abre los canales de sodio de forma persistente, causando una liberación MASIVA y caótica de Acetilcolina (Parasimpático) y Catecolaminas (Simpático) simultáneamente. Por eso el niño llora, babea, hace vómito y tiene crisis hipertensiva al mismo tiempo. El Nistagmo errático es el signo visual más clásico. La perla máxima de este veneno es que la sobreestimulación secretora destruye el páncreas, causando Pancreatitis Aguda (el dolor abdominal severo). El manejo absoluto es la aplicación rápida del Suero Antiescorpiónico específico (Alacramyn).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., un niño picado por un alacrán tóxico parece un paciente poseído. Los ojos se le mueven como si estuvieran locos (nistagmo), bota espuma por la boca, la presión arterial se le sube por las nubes y vomita. Es un cóctel molotov de adrenalina y acetilcolina al mismo tiempo. A este pobre pelado el veneno le hizo exprimir el páncreas de golpe, y los jugos pancreáticos lo están quemando por dentro (Pancreatitis aguda escopiónica). Hidrátalo, dale su analgésico y pásale las ampollas de antiveneno escorpiónico, o hará un paro cardiaco por miocarditis fulminante.",
    keyPoints: [
      "Picadura intensa + Nistagmo errático + Sialorrea (Baba) + Fiebre/Taquicardia = Escorpionismo (Tityus).",
      "Complicaciones letales: Falla cardiaca izquierda (Miocarditis/Edema pulmonar) y Pancreatitis Aguda.",
      "Antídoto: Suero Antiescorpiónico inmediato."
    ]
  }
];
