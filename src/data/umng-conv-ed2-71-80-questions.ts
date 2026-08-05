import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UMNG — Edición #2 (Simulacro 2) · Preguntas #71–#80.
 */
export const UMNG_CONV_ED2_71_80_QUESTIONS: TrainingQuestion[] = [
  {
    id: "umng-conv-ed2-71",
    university: "UMNG",
    examArea: "ENDOCRINOLOGÍA",
    topic: "CIRUGÍA GENERAL",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un hombre de 35 años asiste a consulta refiriendo episodios severos de dolor de cabeza, sudoración profusa (diaforesis) y palpitaciones que duran unos 15 minutos y desaparecen. Durante uno de estos ataques en urgencias, se documentó una PA de 220/120 mmHg. Una Tomografía Computarizada (TAC) de abdomen incidental revela una masa suprarrenal derecha de 5 cm. Los niveles de metanefrinas fraccionadas en orina de 24 horas y catecolaminas plasmáticas se encuentran elevados en 4 veces su valor normal. Se decide programar al paciente para una Adrenalectomía Laparoscópica. ¿Cuál es la regla FARMACOLÓGICA PREOPERATORIA absolutamente innegociable en este paciente para evitar la muerte en la mesa de cirugía?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar bloqueadores Beta-adrenérgicos (Propranolol) durante 14 días y, posteriormente, iniciar bloqueadores Alfa (Prazosina).",
        distractorProfile: "fatal_order_error",
        incorrectFeedback: "¡Error fatal! Dar Beta bloqueador primero bloquea la vasodilatación B2. La adrenalina estimula masivamente a los Alfa-1 libres, causando vasoconstricción letal y crisis hipertensiva."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar bloqueadores Alfa-adrenérgicos (Fenoxibenzamina o Prazosina) durante 10 a 14 días y SOLO DESPUÉS adicionar bloqueadores Beta."
      },
      {
        id: "C",
        label: "C",
        text: "Suspender todos los antihipertensivos 48 horas antes de la cirugía para evitar el choque hipotensivo pos-extirpación.",
        distractorProfile: "lack_of_blockade",
        incorrectFeedback: "Si no hay bloqueo activo, el cirujano, al tocar el tumor, liberará adrenalina masiva matando al paciente en la mesa por crisis hipertensiva."
      },
      {
        id: "D",
        label: "D",
        text: "Iniciar glucocorticoides a dosis de estrés 24 horas antes para prevenir la crisis suprarrenal aguda.",
        distractorProfile: "wrong_cortical_steroid",
        incorrectFeedback: "Los esteroides se dan si extirpan la corteza completa de forma bilateral, pero en el feocromocitoma el problema es la médula adrenal (catecolaminas)."
      }
    ],
    correctOptionId: "B",
    explanation: "El Feocromocitoma produce catecolaminas en masa. La regla dogmática inquebrantable de preparación preoperatoria es: \"ALFA ANTES QUE BETA\". Se DEBE bloquear primero el receptor Alfa-1 (con Fenoxibenzamina o Prazosina) por 10-14 días, lo que relaja los vasos y reexpande el volumen. Solo cuando los receptores Alfa están blindados, se puede agregar un Betabloqueador (para la taquicardia). Hacerlo al revés deja el estímulo Alfa \"sin oposición\", desencadenando una crisis hipertensiva letal.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., este tumor es una granada de adrenalina. Si das Propranolol primero, cierras la válvula de escape del corazón. Toda esa adrenalina va a estrangular las arterias del cerebro y riñones, disparando la presión a 300 mmHg. Tienes que tapar los receptores Alfa (los que cierran vasos) dos semanas antes. Así, cuando la bomba de adrenalina explote al tocar el tumor en el quirófano, las arterias estarán blindadas y no se inmutarán. Siempre 'A' antes que 'B'.",
    keyPoints: [
      "Feocromocitoma preoperatorio: Bloqueo ALFA primero (Fenoxibenzamina / Prazosina).",
      "Bloqueo BETA segundo (solo después del bloqueo Alfa, para controlar taquicardia).",
      "Riesgo: Betabloqueo aislado causa crisis hipertensiva por estímulo Alfa sin oposición."
    ]
  },
  {
    id: "umng-conv-ed2-72",
    university: "UMNG",
    examArea: "PEDIATRÍA",
    topic: "CIRUGÍA PEDIÁTRICA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un neonato masculino a término (40 semanas) de 3 días de vida aún se encuentra hospitalizado porque no ha logrado evacuar el meconio desde su nacimiento. Las enfermeras reportan que el bebé rechaza el alimento, presenta vómitos de contenido bilioso (verde) y su abdomen se observa progresivamente distendido y tenso. Al examen físico, usted introduce cuidadosamente la yema de su dedo meñique lubricado a través del esfínter anal del bebé. Al retirar su dedo, ocurre una explosión inmediata y masiva de gases y heces fétidas líquidas a alta presión que manchan la camilla (Signo del \"squirt\" o chorro). El abdomen del bebé se desinflama al instante. ¿Cuál es el examen diagnóstico confirmatorio (Gold Standard) para la patología subyacente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Ecografía abdominal en busca de invaginación.",
        distractorProfile: "older_infant_disease",
        incorrectFeedback: "La invaginación da heces en jalea de grosella en lactantes >6 meses, no falta de meconio en un neonato de 3 días."
      },
      {
        id: "B",
        label: "B",
        text: "Prueba de cloruros en sudor (Iontoforesis).",
        distractorProfile: "cystic_fibrosis_ileus",
        incorrectFeedback: "El íleo meconial por Fibrosis Quística da tacto rectal VACÍO/meconio como masilla, NO da explosión de gases, ya que todo el colon es un 'microcolon' por falta de uso."
      },
      {
        id: "C",
        label: "C",
        text: "Biopsia por succión rectal."
      },
      {
        id: "D",
        label: "D",
        text: "Tránsito de vías digestivas altas con bario.",
        distractorProfile: "upper_gi_study_for_lower",
        incorrectFeedback: "Evalúa malrotación (vómito verde SIN distensión masiva baja), pero para un problema colónico distal se requiere biopsia rectal o enema (por debajo)."
      }
    ],
    correctOptionId: "C",
    explanation: "La ausencia de evacuación meconial + distensión + \"Tacto rectal explosivo\" es la presentación clásica de la Enfermedad de Hirschsprung (Aganglionosis colónica congénita). El recto carece de plexos nerviosos (Meissner y Auerbach), por lo que se mantiene paralizado y cerrado, acumulando heces por encima. Al meter el dedo, franqueas mecánicamente esa zona espástica, soltando el gas a presión. El Gold Standard es la biopsia por succión rectal, que demostrará la ausencia de células ganglionares e hipertrofia de filetes nerviosos.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., imagina una autopista donde el último kilómetro es barro seco sin asfalto. Las heces vienen volando por el colon sano y se estrellan en el recto paralizado, atascando todo. Cuando tú metes el dedo por el ano, actúas como grúa abriendo el camino a la fuerza. ¡Toda esa presión contenida sale volando hacia tu bata! Tras limpiarte, pide al cirujano que muerda con una pinza especial un pedacito de la mucosa rectal para probar que nacieron sin nervios en ese tramo.",
    keyPoints: [
      "Retraso meconio (>48h) + Distensión + Tacto Rectal Explosivo (Squirt sign) = Enf. de Hirschsprung.",
      "Fisiopatología: Ausencia de plexos nerviosos intramurales en el segmento distal (recto-sigma).",
      "Diagnóstico (Gold Standard): Biopsia por succión rectal (Patología)."
    ]
  },
  {
    id: "umng-conv-ed2-73",
    university: "UMNG",
    examArea: "TRAUMA",
    topic: "CIRUGÍA VASCULAR Y GENERAL",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un hombre de 40 años recibe un impacto de bala en el mesogastrio (abdomen central). Es llevado de inmediato a quirófano por inestabilidad hemodinámica para una Laparotomía Exploratoria. Al abrir la cavidad abdominal, el cirujano controla rápidamente un sangrado de una arteria mesentérica y repara dos perforaciones en el yeyuno. Sin embargo, al inspeccionar el fondo de la cavidad, se observa un gran Hematoma Retroperitoneal expansivo localizado en la Zona 1 (Zona Central o Supramesocólica), justo por encima y alrededor del páncreas. La fascia retroperitoneal está intacta pero el hematoma late y crece visiblemente. De acuerdo con las normas del ATLS para el manejo de hematomas retroperitoneales penetrantes, ¿cuál debe ser la conducta del cirujano en el siguiente minuto?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Empacar el hematoma con compresas, cerrar temporalmente el abdomen y trasladar a UCI (Control de daños).",
        distractorProfile: "ineffective_packing",
        incorrectFeedback: "Empacar sobre la fascia retroperitoneal no ejerce compresión sobre una aorta herida. El sangrado masivo posterior matará al paciente."
      },
      {
        id: "B",
        label: "B",
        text: "Explorar INMEDIATAMENTE el hematoma (abrir el retroperitoneo) para obtener control vascular primario de la lesión."
      },
      {
        id: "C",
        label: "C",
        text: "Dejar el hematoma intacto sin abrirlo, ya que la fascia de Gerota está ejerciendo taponamiento natural.",
        distractorProfile: "generalizing_pelvic_hematomas",
        incorrectFeedback: "Esa es la regla para hematomas cerrados ZONA 3 (pelvis). En Zona 1, dejar una aorta latiendo sin control es una sentencia de muerte (exanguinación diferida)."
      },
      {
        id: "D",
        label: "D",
        text: "Realizar una sutura perimetral alrededor del hematoma para reforzar la fascia retroperitoneal.",
        distractorProfile: "futile_gesture",
        incorrectFeedback: "La presión sistémica de la aorta desgarrará cualquier sutura en la delgada capa peritoneal parietal."
      }
    ],
    correctOptionId: "B",
    explanation: "El ATLS dicta reglas claras sobre hematomas retroperitoneales. La Zona 1 (Central, donde habitan la Aorta, VCI y tronco celíaco) requiere EXPLORACIÓN QUIRÚRGICA INMEDIATA y obligatoria SIEMPRE, ya sea trauma cerrado o penetrante. El cirujano debe abrir el retroperitoneo y reparar la lesión vascular de los grandes vasos. (Por el contrario, la Zona 3 [pelvis] en trauma cerrado nunca se explora, y la Zona 2 [renal] solo se explora si es penetrante o crece).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el centro del abdomen es la supercarretera del cuerpo. Si hay un bulto morado que crece latiendo detrás del páncreas, la bala le hizo un hueco a la Aorta o la Cava. Esa capita delgada de peritoneo parietal es lo único que impide que la sangre salpique el techo. No le pongas compresitas calientes encima. Pide sangre a gritos, agarra el bisturí y abre esa fascia para clavarle un clamp (pinza vascular) a la aorta. Así se salva vidas en trauma profundo.",
    keyPoints: [
      "Hematoma Retroperitoneal ZONA 1 (Central): Exploración SIEMPRE obligatoria.",
      "Hematoma Retroperitoneal ZONA 2 (Flancos): Explorar SI es penetrante o expansivo.",
      "Hematoma Retroperitoneal ZONA 3 (Pelvis): NO EXPLORAR en trauma cerrado (Empacar o Embolizar)."
    ]
  },
  {
    id: "umng-conv-ed2-74",
    university: "UMNG",
    examArea: "MEDICINA INTERNA",
    topic: "INFECTOLOGÍA TROPICAL",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Una mujer de 35 años consulta a urgencias en la ciudad de Cali, refiriendo un cuadro de dolor articular insoportable en ambas manos, muñecas y tobillos que le impide caminar. Al interrogarla, relata que hace aproximadamente 2 meses viajó al departamento del Tolima, donde padeció un cuadro agudo de fiebre alta repentina de 39°C, sarpullido generalizado y poliartralgias severas que la obligaron a encorvarse de dolor. La fiebre desapareció en 5 días, pero el dolor y la inflamación articular en sus manos (poliartritis simétrica) han persistido ininterrumpidamente hasta el día de hoy, generándole gran discapacidad matutina. ¿Cuál es la entidad viral MÁS PROBABLE que explique este síndrome crónico y cuál es su vector transmisor?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Virus del Dengue / Aedes aegypti.",
        distractorProfile: "acute_arbovirus_mimic",
        incorrectFeedback: "El Dengue da fiebre rompehuesos aguda, pero no produce una artritis/artralgia simétrica que dura meses o años (no cronifica el dolor articular)."
      },
      {
        id: "B",
        label: "B",
        text: "Virus del Zika / Aedes albopictus.",
        distractorProfile: "teratogenic_arbovirus",
        incorrectFeedback: "El Zika causa conjuntivitis, fiebre leve y microcefalia o Guillain-Barré, pero rara vez da artritis grave o crónica discapacitante."
      },
      {
        id: "C",
        label: "C",
        text: "Virus Chikungunya / Aedes aegypti y Aedes albopictus."
      },
      {
        id: "D",
        label: "D",
        text: "Fiebre Amarilla / Haemagogus y Sabethes.",
        distractorProfile: "hepatic_viral_fever",
        incorrectFeedback: "Da ictericia, sangrado y Faget, pero no artritis crónica incapacitante."
      }
    ],
    correctOptionId: "C",
    explanation: "El virus del Chikungunya (en lengua makonde, \"aquel que se encorva\") es famoso por su secuela a largo plazo: un porcentaje significativo (hasta 40%) desarrolla una poliartritis crónica simétrica altamente incapacitante que simula Artritis Reumatoide y dura meses o años posinfección. A diferencia del Dengue (peligro: choque hemorrágico) o Zika (peligro: Guillain-Barré/microcefalia), el marcador clínico diferencial del Chikungunya es la persistencia inflamatoria articular crónica. Transmitido por Aedes spp.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., si una paciente dice 'empecé con artritis reumatoide hace 3 meses tras ir a tierra caliente y tener fiebre rompehuesos', es el fantasma del Chikungunya. El virus ya no está en su sangre, pero dejó la membrana sinovial de sus articulaciones destrozada e inflamada. El Chikungunya te dobla de dolor en el episodio agudo y no suelta las articulaciones por años. Darás AINEs y a veces, hasta inmunosupresores como Metotrexato.",
    keyPoints: [
      "Arbovirosis con fiebre aguda + Poliartritis incapacitante residual crónica (meses/años) = Chikungunya.",
      "Se distingue del Dengue (agudo, choque) y del Zika (conjuntivitis, secuelas neurológicas).",
      "Vector compartido: Aedes aegypti / albopictus."
    ]
  },
  {
    id: "umng-conv-ed2-75",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "CIRUGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Una mujer de 35 años (G3P2), con antecedente de dos cesáreas segmentarias previas, ingresa para la atención de su tercer parto, el cual fue programado por cesárea electiva debido a su historial. La ecografía prenatal de la semana 32 reportaba una Placenta Previa Total. En el quirófano, tras la extracción de un recién nacido vivo y vigoroso, el obstetra intenta el alumbramiento de la placenta. Pese a aplicar tracción controlada del cordón y administración de oxitocina, la placenta no se desprende. Al intentar la extracción manual, el obstetra nota que no existe plano de clivaje (no hay separación) entre los cotiledones placentarios y el miometrio; de hecho, la placenta parece estar invadiendo y fusionada con la vejiga urinaria en el segmento inferior. Se desata una hemorragia masiva al intentar desprenderla. ¿Cuál es el diagnóstico de esta catástrofe y la conducta quirúrgica SALVAVIDAS que debió haberse planeado o que debe ejecutarse inmediatamente?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Inversión uterina aguda / Maniobra de Johnson y restitución.",
        distractorProfile: "misdiagnosed_obstetric_emergency",
        incorrectFeedback: "La inversión es voltear el útero como un calcetín al traccionar. Aquí la placenta echó raíces biológicas profundas, no es un problema de posición."
      },
      {
        id: "B",
        label: "B",
        text: "Retención de restos placentarios por anillo de contracción / Legrado instrumental cortante.",
        distractorProfile: "fatal_curettage",
        incorrectFeedback: "¡Mortal! Raspar una placenta invasiva (acretismo) arrancará jirones del útero y la vejiga. La paciente morirá de hemorragia incontrolable."
      },
      {
        id: "C",
        label: "C",
        text: "Atonía uterina severa / Taponamiento con Balón de Bakri y misoprostol.",
        distractorProfile: "atonic_mimic",
        incorrectFeedback: "El balón comprime para la atonía, pero no despega una placenta unida al músculo pélvico como concreto."
      },
      {
        id: "D",
        label: "D",
        text: "Acretismo Placentario (Placenta Percreta) / Histerectomía obstétrica con la placenta in situ."
      }
    ],
    correctOptionId: "D",
    explanation: "El factor de riesgo inquebrantable: Placenta Previa + Antecedente de Cesáreas = altísimo riesgo de Acretismo Placentario (las vellosidades invaden profundamente porque la cicatriz no sirve de barrera). En este caso, invadió vejiga (Percreta). La regla de oro en quirófano: Si confirmas acretismo, NUNCA intentar despegar la placenta por la fuerza. Se saca al bebé, se deja la placenta in situ adherida al útero, y se hace una Histerectomía Total Obstétrica de salvamento.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., esta placenta se incrustó, devoró el útero y echó raíces hasta en la vejiga materna. Es como querer arrancar un árbol del asfalto con tus manos. Si jalas, arrancarás las venas maternas y perderás 5 litros de sangre en minutos. Detente. Saca al feto sano. Luego, deja esa placenta pegada al útero, pinza los vasos y extirpa la matriz completa (Histerectomía). El útero se pierde, pero la mamá sale viva para criar a sus tres hijos.",
    keyPoints: [
      "Cesárea(s) previa(s) + Placenta Previa actual = Alta sospecha de ACRETISMO Placentario.",
      "Grados de invasión: Accreta (toca miometrio), Increta (invade miometrio), Percreta (traspasa miometrio a otros órganos).",
      "Tratamiento salvavidas: Histerectomía obstétrica SIN intentar remover la placenta."
    ]
  },
  {
    id: "umng-conv-ed2-76",
    university: "UMNG",
    examArea: "PEDIATRÍA",
    topic: "CIRUGÍA PEDIÁTRICA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un neonato de 10 días de vida es traído a urgencias porque hace 4 horas inició con episodios de irritabilidad extrema seguidos de letargia, acompañados de vómitos de contenido francamente bilioso (verde oscuro). A su ingreso, el niño luce pálido, hipotenso (choque temprano), con taquicardia de 180 lpm. A la exploración, el abdomen se encuentra distendido, sensible, y no hay signos de peritonitis franca. Teniendo en cuenta la edad del paciente y la naturaleza biliosa del vómito de instauración aguda, ¿cuál es el examen diagnóstico INICIAL de elección (Gold Standard) para confirmar la catástrofe quirúrgica intestinal que lo tiene en peligro inminente de muerte?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Tránsito de vías digestivas altas (Radiografía con contraste oral)."
      },
      {
        id: "B",
        label: "B",
        text: "Ecografía abdominal buscando el signo de la \"oliva pilórica\".",
        distractorProfile: "non_bilious_mimic",
        incorrectFeedback: "La estenosis hipertrófica de píloro clásica NO TIENE vómito bilioso, y suele ocurrir de la tercera semana al mes, no a los 10 días en choque agudo."
      },
      {
        id: "C",
        label: "C",
        text: "Biopsia por succión rectal.",
        distractorProfile: "distal_obstruction_mimic",
        incorrectFeedback: "Esto es para Hirschsprung (falta crónica de meconio/distensión); aquí hay isquemia aguda por obstrucción proximal violenta."
      },
      {
        id: "D",
        label: "D",
        text: "Tomografía Computarizada (TAC) de abdomen con triple contraste.",
        distractorProfile: "unnecessary_radiation_delay",
        incorrectFeedback: "En neonatos, un TAC demora mucho y da alta radiación; la fluoroscopia (tránsito VDA) es el estándar específico para la malrotación."
      }
    ],
    correctOptionId: "A",
    explanation: "El axioma pediátrico: \"Vómito bilioso (verde) en un neonato es un Vólvulo de Intestino Medio (por Malrotación) hasta demostrar lo contrario\". Es una emergencia isquémica fulminante; el intestino delgado gira y estrangula su propia irrigación mesentérica. El estudio Gold Standard para confirmarlo (si el paciente soporta los 10 minutos para hacerlo) es el Tránsito de Vías Digestivas Altas con contraste oral, el cual mostrará el bloqueo a nivel del duodeno con la clásica imagen en \"sacacorchos\" (el remolino del intestino). Requiere cirugía urgente (Procedimiento de Ladd).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el color del vómito es la vida o la muerte en neonatos. Leche cortada (blanca) es píloro (no te apresures). Bilis (verde oscuro) te grita que los intestinos giran sobre sí mismos cerrando toda circulación sanguínea. Si no desamarras ese nudo de corbata en el quirófano ya mismo, todo su intestino morirá, volviéndose incompatible con la vida (Sd. Intestino Corto). Pide el tránsito digestivo alto para ver el sacacorchos en la placa y llama al cirujano.",
    keyPoints: [
      "Vómito BILIOSO agudo en neonato + Choque = Malrotación y Vólvulo de Intestino Medio.",
      "Estudio de elección confirmatorio: Tránsito Vías Digestivas Altas (TGI Superior).",
      "Imagen clásica: Contraste que no pasa duodeno / Signo de Sacacorchos.",
      "Si el paciente está chocado severamente, se lleva directamente a Laparotomía (Proc. de Ladd)."
    ]
  },
  {
    id: "umng-conv-ed2-77",
    university: "UMNG",
    examArea: "ANESTESIOLOGÍA",
    topic: "TOXICOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un hombre de 25 años, sano, ingresa a quirófano para una reparación electiva de una hernia inguinal. El anestesiólogo induce la anestesia general administrando Propofol y Succinilcolina (un relajante muscular despolarizante), manteniendo el plano con Sevoflurano. A los 10 minutos de iniciar la cirugía, el monitor de capnografía muestra un aumento súbito y masivo del Dióxido de Carbono espirado (ETCO2 de 45 a 85 mmHg). Simultáneamente, el paciente presenta taquicardia extrema (160 lpm), cianosis moteada y su temperatura corporal empieza a subir rápidamente a un ritmo de 1°C cada 5 minutos, marcando ahora 40.5°C. El cirujano reporta que los músculos abdominales y los maseteros (mandíbula) están rígidos como una tabla. ¿Cuál es el medicamento salvavidas de elección inmediata para neutralizar este defecto de los canales de calcio intracelulares?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Bromocriptina intravenosa a dosis altas.",
        distractorProfile: "nms_mimic_antidote",
        incorrectFeedback: "Es el antídoto para el Síndrome Neuroléptico Maligno por haloperidol. El cuadro es similar, pero esto ocurre agudamente en quirófano tras usar succinilcolina/gases."
      },
      {
        id: "B",
        label: "B",
        text: "Fisostigmina intravenosa.",
        distractorProfile: "anticholinergic_antidote",
        incorrectFeedback: "La fisostigmina es para el delirio por anticolinérgicos (atropina/escopolamina), que cursa caliente y loco, pero sin ETCO2 masivo ni rigidez extrema muscular."
      },
      {
        id: "C",
        label: "C",
        text: "Dantroleno intravenoso."
      },
      {
        id: "D",
        label: "D",
        text: "Haloperidol y enfriamiento externo masivo.",
        distractorProfile: "wrong_indication_antipsychotic",
        incorrectFeedback: "El haloperidol puede causar el SNM, su uso en esta catástrofe no ataca el problema del receptor de Rianodina."
      }
    ],
    correctOptionId: "C",
    explanation: "La Hipertermia Maligna es una crisis farmacogenética letal de los receptores de Rianodina musculares, desencadenada por relajantes (Succinilcolina) o halogenados (Sevoflurano). Todos los canales de calcio del músculo se atascan abiertos: los músculos se contraen sin parar (rigidez), quemando todo el O2, generando toneladas de CO2 (ETCO2 sube brutalmente en la máquina, signo muy temprano) y el cuerpo se cocina a 42°C. El único antídoto es el Dantroleno IV, que inhibe la salida de calcio del retículo sarcoplásmico, \"apagando\" la contracción destructora.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el paciente entra sano por una hernia y en 10 minutos se convierte en un horno microondas cerrado derritiendo su propio cerebro. El primer signo no es la temperatura, es la máquina de anestesia gritando que sale mucho Dióxido de Carbono. Los músculos del masetero están de hierro. Apaguen los gases y pasen las ampollas naranjas de Dantroleno. El Dantroleno entra a la célula muscular y cierra las compuertas de calcio a la fuerza.",
    keyPoints: [
      "Quirófano + Succinilcolina/Gases + ETCO2 alto disparado + Rigidez maseterina = Hipertermia Maligna.",
      "Patogenia: Mutación del receptor de Rianodina (fuga de Ca++ sostenida).",
      "Antídoto y salvavidas específico: Dantroleno Sódico IV (fuerza relajación muscular directa)."
    ]
  },
  {
    id: "umng-conv-ed2-78",
    university: "UMNG",
    examArea: "MEDICINA INTERNA",
    topic: "NEFROLOGÍA PREVENTIVA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un hombre de 65 años, con antecedente de Diabetes Mellitus tipo 2 de larga data e Insuficiencia Renal Crónica estadio 3b (Creatinina de 2.1 mg/dL, TFG 35 ml/min), ingresa a urgencias con isquemia aguda de extremidad inferior. El cirujano vascular determina que requiere con carácter de urgencia una Angiografía (Angio-TC o Arteriografía periférica con medio de contraste yodado intravenoso) para planear la revascularización. Ante el inminente riesgo de causar un daño renal irreversible por el tóxico (Nefropatía Inducida por Contraste), ¿cuál es la medida farmacológica PROFILÁCTICA con mayor nivel de evidencia científica que usted DEBE instaurar en las horas previas y posteriores al estudio?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Administrar altas dosis de N-Acetilcisteína oral o intravenosa la noche previa y el día del estudio.",
        distractorProfile: "outdated_practice",
        incorrectFeedback: "Aunque fue famosa por años, los mega-ensayos (PRESERVE) concluyeron que la N-Acetilcisteína NO aporta mayor protección renal que el placebo."
      },
      {
        id: "B",
        label: "B",
        text: "Infusión intravenosa de Solución Salina Isotónica (0.9% NaCl) antes, durante y después del procedimiento radiológico."
      },
      {
        id: "C",
        label: "C",
        text: "Infusión intravenosa de Diuréticos de asa (Furosemida) inmediatamente después de inyectar el contraste para forzar su eliminación.",
        distractorProfile: "dangerous_dehydration",
        incorrectFeedback: "Dar furosemida y deshidratar el lecho vascular concentra aún más el medio de contraste dentro de los túbulos renales, precipitando necrosis masiva."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar corticoides y antihistamínicos sistémicos para evitar la nefritis alérgica cruzada al yodo.",
        distractorProfile: "allergy_vs_toxicity",
        incorrectFeedback: "Útil si tiene alergia/anafilaxia al yodo, pero no sirve para evitar la toxicidad isquémica y tubular directa del material de contraste pesado."
      }
    ],
    correctOptionId: "B",
    explanation: "La Nefropatía por Contraste se produce por isquemia y toxicidad tubular del hiperosmolar medio yodado. La única intervención avalada con grado de evidencia máxima para disminuir el riesgo es la Expansión de Volumen Intravascular con líquidos isotónicos (Solución Salina 0.9% o Bicarbonato). El riñón hidratado mantiene las arteriolas dilatadas y arrastra rápido el tóxico por los túbulos.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., inyectar contraste en un diabético añoso y renal crónico es como echar melaza espesa por un tubo de alcantarilla viejo y seco. Si no llenas las tuberías con agua de antemano, el tóxico va a quedarse pegado a las paredes tubulares asfixiando al riñón. Olvida la mítica N-Acetilcisteína, la evidencia la destronó. Pide Solución Salina Normal generosa desde antes y horas después, así orinará rápido y a salvo el yodo.",
    keyPoints: [
      "Profilaxis de Nefropatía por Contraste Yodado en riesgo alto: Expansión agresiva de Volumen con Suero Salino 0.9%.",
      "Prácticas Inútiles/Desaconsejadas: N-Acetilcisteína de rutina.",
      "Prácticas Letales/Contraindicadas: Uso profiláctico de Furosemida en riesgo de contraste."
    ]
  },
  {
    id: "umng-conv-ed2-79",
    university: "UMNG",
    examArea: "NEUMOLOGÍA",
    topic: "CIRUGÍA DE TÓRAX",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un hombre de 45 años, previamente sano y sin antecedentes de tabaquismo, asiste a urgencias por dolor torácico pleurítico derecho y disnea aguda. Se le toma una radiografía de tórax que evidencia un Neumotórax espontáneo grande (colapso del 40% del pulmón derecho). El cirujano general de turno le coloca un tubo de tórax con trampa de agua (Pleurovac) en el quinto espacio intercostal línea axilar media. Inmediatamente tras colocar el tubo, el pulmón se re-expande bruscamente en su totalidad a la pared torácica, y el paciente reporta alivio. Sin embargo, 20 minutos después, el paciente inicia súbitamente con tos incontrolable, disnea severa progresiva, taquicardia de 130 lpm, y SatO2 cae a 75%. El paciente expulsa un esputo abundante, rosado y espumoso. La nueva radiografía de tórax muestra el pulmón derecho bien expandido (sin neumotórax), pero ahora presenta un infiltrado algodonoso masivo difuso (\"pulmón blanco\") exclusivamente en el lado DERECHO. ¿Cuál es el diagnóstico de esta complicación aguda secundaria al procedimiento?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Hemorragia intra-alveolar masiva por punción errónea del parénquima con el trocar del tubo.",
        distractorProfile: "physical_trauma_misinterpretation",
        incorrectFeedback: "Pinchar un pulmón sano produce fístula broncopleural (burbujeo masivo en la trampa) o sangrado focal, no un encharcamiento alveolar masivo de todo el pulmón en 20 minutos."
      },
      {
        id: "B",
        label: "B",
        text: "Síndrome de Edema Pulmonar de Re-expansión (Edema Ex Vacuo)."
      },
      {
        id: "C",
        label: "C",
        text: "Tromboembolismo pulmonar agudo desencadenado por el reposo en cama.",
        distractorProfile: "pe_mimic",
        incorrectFeedback: "El TEP agudo no da infiltrados alveolares algodonosos puros unilaterales (Rx suele estar normal con disnea severa), y no se encadena justo al instante de abrir el drenaje."
      },
      {
        id: "D",
        label: "D",
        text: "Neumonía nosocomial fulminante por contaminación del sistema de drenaje.",
        distractorProfile: "infection_timeframe_impossible",
        incorrectFeedback: "Ninguna neumonía nosocomial genera pulmón blanco y expectoración rosada a los 20 minutos de introducir un tubo."
      }
    ],
    correctOptionId: "B",
    explanation: "El Edema Pulmonar de Re-expansión (Edema Ex-Vacuo) ocurre cuando un pulmón colapsado se vuelve a expandir de forma repentina y violenta, a menudo agravado por succión negativa excesiva en el tubo de tórax o por drenajes mayores a 1.5 litros rápidos. El cambio súbito de presión \"chupa\" los fluidos intravasculares hacia el intersticio de un capilar que estaba isquémico y frágil. Se produce un edema alveolar masivo no cardiogénico (esputo rosado espumoso) ÚNICAMENTE del lado afectado. El tratamiento es soporte oxigenatorio/VMNI urgente.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., tu pulmón es una esponja. Si estuvo aplastada por semanas, sus vasitos se volvieron rígidos. Si el cirujano coloca el tubo y prende el vacío a máxima potencia en la pared, esa esponja seca se expande con tal furia que todos los capilares estallan internamente. El paciente pasa de la alegría por el tubo, a estar botando espuma roja por la boca como mar bravo, con un infiltrado radiológico solo del lado derecho. Para evitarlo: drena despacio y evita el vacío activo inmediato en pulmones largamente colapsados.",
    keyPoints: [
      "Drenaje brusco de pulmón colapsado + Tos + Esputo Rosado Espumoso + Infiltrado UNILATERAL = Edema Pulmonar de Re-expansión.",
      "Fisiopatología: Fuga capilar masiva por cambio súbito de presión pleural.",
      "Prevención: Evitar drenar >1-1.5 L en bolos inmediatos; no forzar succión negativa brusca."
    ]
  },
  {
    id: "umng-conv-ed2-80",
    university: "UMNG",
    examArea: "MEDICINA INTERNA",
    topic: "NEUROLOGÍA Y TOXICOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed2"],
    statement: "Un paciente de 55 años, habitante de calle con diagnóstico conocido de alcoholismo crónico severo y desnutrición, es traído a urgencias por la policía tras encontrarlo deambulando desnudo y francamente confuso. Al examen físico, usted documenta la siguiente tríada neurológica: 1) Estado mental marcadamente alterado (desorientado en las tres esferas y apático), 2) Incapacidad para caminar en línea recta, caminando con una amplia base de sustentación (Ataxia de la marcha severa), y 3) Al evaluar los pares craneales, el paciente presenta un Nistagmo horizontal bidireccional y una parálisis bilateral del VI par craneal (imposibilidad para desviar los ojos hacia afuera / Oftalmoplejía). Ante esta tríada, usted sabe que debe administrar un cofactor vitamínico urgente para revertir el daño. ¿Cuál es el orden FARMACOLÓGICO ABSOLUTO para administrar los tratamientos de rescate en este paciente y evitar una lesión cerebral amnésica irreversible?",
    options: [
      {
        id: "A",
        label: "A",
        text: "Iniciar bolo de Glucosa hipertónica (Dextrosa al 50%) de inmediato para proteger el cerebro, seguido de Tiamina intravenosa a las 2 horas.",
        distractorProfile: "fatal_order_error",
        incorrectFeedback: "¡El error toxicológico por excelencia! Dar Glucosa antes que Tiamina agota la poca vitamina B1 libre, acumula ácido láctico masivo y quema los cuerpos mamilares para siempre."
      },
      {
        id: "B",
        label: "B",
        text: "Administrar Tiamina (Vitamina B1) a altas dosis intravenosa o intramuscular ANTES o simultáneamente con cualquier infusión de Glucosa/Dextrosa."
      },
      {
        id: "C",
        label: "C",
        text: "Administrar Haloperidol o Diazepam intramuscular para la agitación, seguido de infusión de Solución Salina Normal, sin requerir glucosa ni vitaminas.",
        distractorProfile: "sedation_without_treatment",
        incorrectFeedback: "Sedar a un paciente que tiene el cerebro muriéndose por déficit vitamínico no cura la causa subyacente y empeora el pronóstico."
      },
      {
        id: "D",
        label: "D",
        text: "Administrar Cianocobalamina (Vitamina B12) intramuscular debido al cuadro de degeneración combinada subaguda.",
        distractorProfile: "wrong_vitamin_deficiency",
        incorrectFeedback: "La B12 da degeneración combinada (ataxia y sensibilidad espinal). Pero la confusión aguda + oftalmoplejía en un alcohólico es marca registrada del déficit de B1 (Tiamina)."
      }
    ],
    correctOptionId: "B",
    explanation: "El paciente presenta Encefalopatía de Wernicke (Ataxia + Confusión + Oftalmoplejía), causada por déficit grave de Tiamina (B1), usual en alcohólicos. La Tiamina es cofactor obligatorio para que el cerebro metabolice la glucosa en el ciclo de Krebs. El axioma de oro es \"TIAMINA ANTES DE GLUCOSA\". Si se administra un bolo de Dextrosa a un cerebro sin Tiamina, la glucosa no puede entrar a la ruta aeróbica; produce neurotoxicidad por ácido láctico y destruye hemorrágicamente los cuerpos mamilares del hipotálamo y tálamo. Esto transforma la encefalopatía aguda reversible en un Síndrome de Korsakoff (amnesia permanente irreversible). Nunca colgar glucosa a un alcohólico sin haberle inyectado Tiamina 100 mg antes.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., esta regla es sagrada. Tu indigente hipoglucémico necesita azúcar, sí. Pero el azúcar no se quema solo en el cerebro; necesita Tiamina como chispa. Si tú avientas leña (glucosa) en un cerebro cerrado y sin chispa aerobia (sin Tiamina), se ahogará en el humo del ácido láctico. Literalmente le freirás los centros de la memoria de forma irreversible. Enfermería siempre cuelga la ampolla de Tiamina amarilla, y ahí sí, dale todo el azúcar que quieras.",
    keyPoints: [
      "Tríada Wernicke: Confusión, Ataxia, Nistagmo/Oftalmoplejía.",
      "Regla mundial: Tiamina SIEMPRE antes (o en simultáneo) de administrar Glucosa en alcohólicos.",
      "Complicación de invertir el orden: Síndrome de Korsakoff amnésico permanente (necrosis cuerpos mamilares)."
    ]
  }
];
