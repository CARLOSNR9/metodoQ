import type { TrainingQuestion } from "@/lib/questions/types";

/**
 * Convocatoria UMNG — Edición #3 (Simulacro 3) · Preguntas #61–#70.
 */
export const UMNG_CONV_ED3_61_70_QUESTIONS: TrainingQuestion[] = [
  {
    "id": "umng-conv-ed3-61",
    "university": "UMNG",
    "examArea": "TRAUMA",
    "topic": "CIRUGÍA CARDIOVASCULAR",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Un hombre de 45 años ingresa a la sala de trauma tras un accidente automovilístico frontal contra un poste a 100 km/h. Llevaba puesto el cinturón de seguridad. Al ingreso, el paciente se encuentra hemodinámicamente estable (PA 130/80 mmHg en brazo derecho) pero se queja de un dolor opresivo retroesternal que se irradia a la espalda (región interescapular). A la exploración física, usted nota un detalle sutil: la PA en el brazo izquierdo es de 90/60 mmHg y los pulsos en ambas extremidades inferiores son francamente débiles en comparación con los pulsos radiales derechos. Se toma una radiografía de tórax portátil que evidencia un ensanchamiento del mediastino superior (>8 cm), borramiento del botón aórtico y desviación de la tráquea hacia la derecha. Ante la alta sospecha de una lesión exanguinante inminente, ¿cuál es el diagnóstico más probable y el examen de Oro (Gold Standard) inmediato a solicitar en este paciente ESTABLE?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Taponamiento cardíaco tardío / Ecocardiograma Transtorácico (FAST).",
        "incorrectFeedback": "El taponamiento cardíaco cursa con choque, ingurgitación yugular y ruidos velados (Tríada de Beck). Además, no causa asimetría de pulsos ni ensancha el mediastino superior ensombreciendo el botón aórtico."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Ruptura contenida de la Aorta Torácica por desaceleración / Angio-TC de Tórax con contraste."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Contusión miocárdica severa del ventrículo derecho / Medición de Troponinas I y ECG seriado.",
        "incorrectFeedback": "La contusión miocárdica da arritmias (taquicardia sinusal o bloqueos) pero no da ensanchamiento mediastinal ni asimetría de pulsos masiva."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Disección aórtica tipo A de Stanford no traumática / Ecocardiograma Transesofágico (ETE) en quirófano.",
        "incorrectFeedback": "La disección tipo A da asimetría de pulsos y dolor, pero en este contexto el mecanismo de alta energía grita trauma (ruptura del istmo por cizallamiento), no una disección espontánea íntimal tipo Stanford."
      }
    ],
    "correctOptionId": "B",
    "explanation": "Enfermedad sospechada: Ruptura Traumática de Aorta Torácica (Contenida).\n\nDato decisivo: Mecanismo de alta energía (desaceleración brusca) + Asimetría de pulsos/presión arterial + Signos radiológicos clásicos (Ensanchamiento mediastinal, borramiento del botón aórtico, desviación traqueal).\n\nPrincipio clínico evaluado: El comportamiento clínico de la lesión aórtica en trauma romo. El 85% muere en la escena; el 15% llega vivo porque la capa externa (adventicia) sostiene temporalmente el hematoma.\n\nEl choque frontal a alta velocidad genera un efecto de desaceleración masiva. El corazón y la aorta ascendente \"rebotan\" hacia adelante, pero el arco aórtico descendente está fijado rígidamente a la columna por el Ligamento Arterioso. Esta diferencia de movimiento rasga la aorta exactamente en el Istmo Aórtico. Si el paciente llega vivo a urgencias, es porque la fina capa de la adventicia o la pleura mediastinal están aguantando la presión de la sangre (ruptura contenida). La sangre acumulada forma el hematoma que ensancha el mediastino en la Rx. El hematoma comprime la arteria subclavia izquierda (PA baja en brazo izquierdo) y bloquea el flujo hacia abajo (pulsos femorales débiles). Como el paciente está ESTABLE, el estudio de elección absoluto inmediato es la Angiotomografía Computarizada (Angio-TC) de Tórax. Si estuviera Inestable en choque, iría directo a quirófano o se usaría Eco Transesofágico si está disponible.\n\n**Trampa del examen:** Descartar la aorta por signos vitales normales: El médico ve PA 130/80 y piensa \"si la aorta estuviera rota, estaría muerto o chocado\". Falso. El 15% de las rupturas aórticas están \"contenidas\" temporalmente y los pacientes llegan hablando. Un estornudo, un exceso de líquidos o pujar puede terminar de romper la fina tela que los mantiene vivos.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., este hombre está agarrado de la vida por un hilo de telaraña. La capa muscular de su aorta se rompió por el frenazo; la sangre está empujando contra la última telita exterior de la arteria (la adventicia). En la radiografía eso se ve como una sombra gigante encima del corazón que está empujando el tubo de la respiración (tráquea) hacia la derecha. Controla su frecuencia cardíaca rápido con Esmolol o Labetalol para que el corazón no golpee tan fuerte esa tela a punto de estallar, mételo al tomógrafo con muchísimo cuidado y llama al cirujano cardiovascular para que le ponga un stent endovascular (TEVAR) de emergencia.",
    "keyPoints": [
      "Trauma por Desaceleración Frontal + Ensanchamiento Mediastinal en Rx = Ruptura de Aorta Torácica.",
      "Sitio más común de lesión: Istmo aórtico (justo distal a la subclavia izquierda, en el ligamento arterioso).",
      "Gold Standard en paciente ESTABLE: Angio-TC de Tórax."
    ]
  },
  {
    "id": "umng-conv-ed3-62",
    "university": "UMNG",
    "examArea": "PEDIATRÍA",
    "topic": "URGENCIAS PEDIÁTRICAS",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Una niña de 6 años es traída a urgencias por sus padres en estado de estupor y somnolencia profunda. La madre refiere que la niña cursó con un cuadro de Varicela (múltiples lesiones en costra y vesículas) la semana pasada. Como la niña presentaba picos febriles muy altos y malestar, la abuela le estuvo administrando \"pastillitas de ácido acetilsalicílico infantil (Aspirina)\" cada 6 horas durante los últimos 4 días. Al examen físico, la niña no responde al llamado, presenta hepatomegalia moderada, pero llama profundamente la atención que NO hay ictericia. Los laboratorios urgentes revelan una elevación masiva de las transaminasas (ALT 1.200 U/L, AST 1.100 U/L), tiempos de coagulación prolongados y un nivel de Amonio sérico marcadamente elevado (Hiperamonemia). La bilirrubina es completamente normal. ¿Cuál es el diagnóstico de este síndrome encefalopático-hepático letal precipitado por el analgésico?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Síndrome de Reye (Degeneración grasa microvesicular hepática aguda)."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Hepatitis fulminante por el virus de la Varicela Zóster (Invasión viral directa).",
        "incorrectFeedback": "La hepatitis por varicela suele presentarse en inmunosuprimidos o neonatos, y causa una necrosis hepática clásica que cursa con ictericia severa franca, no es \"anicterica\" como el Reye."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Síndrome Urémico Hemolítico secundario a uso de AINEs.",
        "incorrectFeedback": "El SUH afecta el riñón, causa anemia hemolítica microangiopática (esquistocitos) y se asocia a diarrea por E. coli, no a varicela ni a falla hepática aislada sin ictericia."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Intoxicación aguda por Salicilatos con alcalosis respiratoria en fase terminal.",
        "incorrectFeedback": "La intoxicación por Aspirina (Salicilismo puro) vimos que da hiperventilación extrema (Kussmaul), tinitus, alcalosis respiratoria y acidosis metabólica con fiebre. El Reye es una falla funcional mitocondrial y hepática, no una sobredosis de salicilatos (ocurre a dosis terapéuticas)."
      }
    ],
    "correctOptionId": "A",
    "explanation": "Enfermedad sospechada: Síndrome de Reye.\n\nDato decisivo: Infección Viral (Varicela/Influenza) + Uso de ASPIRINA en pediatría + Falla hepática aguda (Encefalopatía, Hiperamonemia, Transaminasas altas) SIN Ictericia.\n\nPrincipio clínico evaluado: La toxicidad mitocondrial idiosincrática de los salicilatos en niños durante infecciones virales específicas.\n\nEl Síndrome de Reye es una catástrofe mitocondrial sistémica de rápida evolución. Ocurre cuando se administra Ácido Acetilsalicílico (Aspirina) a un niño menor de 15 años que está cursando con una infección viral (clásicamente Varicela o Influenza). El salicilato produce un daño tóxico fulminante en las mitocondrias del hígado y el cerebro. En el hígado causa una \"Esteatosis microvesicular\" (se llena de pequeñas gotas de grasa). El hígado falla para procesar el amonio (Hiperamonemia masiva), y este amonio viaja al cerebro causando Encefalopatía Aguda y Edema Cerebral letal. El sello distintivo es la AUSENCIA DE ICTERICIA; la bilirrubina se mantiene normal a pesar de las transaminasas en las nubes. Esta es la razón mundial por la que la Aspirina está PROSCRITA en pediatría para tratar la fiebre.\n\n**Trampa del examen:** El detalle de la Ictericia: Te ponen \"falla hepática fulminante\", y el cerebro asume que el niño está amarillo. El Reye es una \"falla hepática anictérica\". El daño no es en el tubo biliar, es en el motor de energía de la célula (mitocondria). Si no hay ictericia, es Reye.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la Aspirina es un medicamento mágico para los cardiólogos, pero en pediatría es veneno si el niño tiene gripa o pintas de varicela. Cuando las células del hígado del niño están peleando contra el virus, sus mitocondrias están estresadas. Si les metes la molécula del salicilato, la mitocondria literalmente colapsa. El hígado se apaga y el Amonio (la basura de las proteínas) empieza a flotar hacia el cerebro, durmiendo a la niña y causando edema. Esa es la razón por la que en las propagandas de analgésicos dicen \"no administrar a menores de 12 años\". Pon a la niña en posición semi-fowler, manitol para el cerebro y medidas extremas para bajar el amonio, porque el coma es inminente.",
    "keyPoints": [
      "Virus (Influenza/Varicela) + Uso de ASPIRINA en niños = SÍNDROME DE REYE.",
      "Clínica: Vómitos intratables + Encefalopatía (Amonio alto) + Falla hepática SIN ICTERICIA.",
      "Única excepción para dar aspirina en niños: Enfermedad de Kawasaki."
    ]
  },
  {
    "id": "umng-conv-ed3-63",
    "university": "UMNG",
    "examArea": "GINECOLOGÍA Y OBSTETRICIA",
    "topic": "URGENCIAS",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Una gestante de 10 semanas (G2P1) ingresa a urgencias traída por su esposo, refiriendo que no tolera la vía oral desde hace casi tres semanas debido a vómitos severos e incoercibles (hasta 15 veces al día) asociados a pérdida de 7 kg de peso (Hiperémesis Gravídica). Al ingreso, la paciente luce marcadamente deshidratada y caquéctica. El médico de triage ordena canalizar una vía periférica y administrar 2 Litros de Dextrosa al 5% en Agua Destilada (DAD 5%) a chorro para \"darle energía\" y rehidratarla. Dos horas después de terminada la infusión, la paciente presenta una alteración neurológica súbita: el esposo nota que ella \"no puede caminar derecha\" (Ataxia severa), responde incoherencias (Confusión) y, al examen ocular, usted observa un nistagmo horizontal y vertical bidireccional masivo y oftalmoplejía del VI par. ¿Cuál fue el error IATROGÉNICO letal cometido en el triage que desencadenó este síndrome neurológico agudo?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Administrar líquidos hipotónicos sin sodio causó Mielinolisis Pontina Central.",
        "incorrectFeedback": "La mielinolisis ocurre por la corrección demasiado RÁPIDA de una hiponatremia severa, subiendo el sodio bruscamente, no por dar líquidos hipotónicos sin sodio."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Administrar Dextrosa sin haber infundido previamente Tiamina (Vitamina B1) en una paciente desnutrida."
      },
      {
        "id": "C",
        "label": "C",
        "text": "El volumen alto de líquidos causó Edema Cerebral por preeclampsia temprana.",
        "incorrectFeedback": "La preeclampsia en la semana 10 es excepcionalmente rara (salvo en mola hidatidiforme), y el cuadro neurológico de nistagmo y oftalmoplejía es patognomónico de daño local talámico, no edema global por HTA."
      },
      {
        "id": "D",
        "label": "D",
        "text": "La corrección rápida de la hipoglucemia causó un Síndrome de Realimentación con hipofosfatemia severa.",
        "incorrectFeedback": "El síndrome de realimentación cursa con hipofosfatemia y falla cardiaca, arritmias o debilidad respiratoria al dar nutrición parenteral, pero la oftalmoplejía aguda ligada a infusión de glucosa grita Tiamina."
      }
    ],
    "correctOptionId": "B",
    "explanation": "Enfermedad sospechada: Encefalopatía de Wernicke iatrogénica en Hiperémesis Gravídica.\n\nDato decisivo: Paciente con vómitos por 3 semanas (Desnutrición crónica) a quien se le pasa DEXTROSA a chorro, haciendo la Tríada de Wernicke (Ataxia + Confusión + Oftalmoplejía/Nistagmo) en dos horas.\n\nPrincipio clínico evaluado: La misma regla de oro del alcoholismo aplica a las embarazadas con hiperémesis: el agotamiento de los depósitos de Tiamina.\n\nLa Encefalopatía de Wernicke no es exclusiva de los alcohólicos. Le da a cualquier paciente severamente desnutrido (Anorexia, Cirugía Bariátrica, y clásicamente la Hiperémesis Gravídica severa). Al vomitar por 3 semanas, la mujer agotó todas sus reservas de Vitamina B1 (Tiamina). El médico de triaje, con buena intención pero ignorancia mortal, le pasó Dextrosa al 5%. Al introducir azúcar masiva al torrente sanguíneo, el metabolismo cerebral aceleró y exigió Tiamina para el ciclo celular. Al no haber Tiamina, se produjo necrosis inmediata en el hipotálamo, tálamo y núcleos oculomotores. El resultado es el inicio agudo de la Tríada de Wernicke. Si no le inyectas Tiamina IV ahora mismo, el daño progresará a Korsakoff irreversible o la muerte.\n\n**Trampa del examen:** Asociación excluyente: Nos enseñaron que Wernicke = Borracho. Esta trampa evalúa si entiendes por qué le da al borracho (desnutrición). Una embarazada que vomita todo un mes está igual de desnutrida que un alcohólico de calle.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., este es el clásico caso que termina en las cortes civiles arruinándole la vida a un médico joven. La embarazada llega mareada y débil, tú pides un suero DAD 5% para que \"se sienta mejor y recupere fuerzas\". Acabas de usar azúcar como un veneno neurológico. La vitamina B1 (Tiamina) dura muy poquito en las reservas del cuerpo. Tres semanas vomitando dejan esa reserva en ceros. Tienes que hidratarla primero con Lactato de Ringer o Salina Normal, y pasarle Vitamina B1 intramuscular o intravenosa de entrada. Solo cuando tengas la certeza de que el cerebro tiene su \"protector\" enzimático, ahí sí puedes colgar la bolsa de azúcar.",
    "keyPoints": [
      "Tríada (Confusión + Ataxia + Oftalmoplejía/Nistagmo) post infusión de Glucosa = Encefalopatía de Wernicke.",
      "Población vulnerable ignorada: Embarazadas con Hiperémesis Gravídica.",
      "Regla de oro: En desnutridos/vómitos severos, dar TIAMINA ANTES de los Sueros Glucosados."
    ]
  },
  {
    "id": "umng-conv-ed3-64",
    "university": "UMNG",
    "examArea": "MEDICINA INTERNA",
    "topic": "INFECTOLOGÍA Y CARDIOLOGÍA",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Un hombre de 26 años, usuario activo de drogas intravenosas (UDIV), es ingresado a urgencias refiriendo fiebre de 39°C de tres días de evolución, malestar general, dolor pleurítico derecho y tos con esputo manchado de sangre. En las radiografías de tórax de control se observan múltiples infiltrados nodulares y cavitaciones periféricas bilaterales que el radiólogo define como \"émbolos sépticos pulmonares múltiples\". Al examen físico cardiológico, usted detecta un soplo holosistólico en el borde esternal inferior izquierdo, de tono soplante, el cual tiene una característica patognomónica: AUMENTA claramente su intensidad cuando el paciente toma una inspiración profunda (Signo de Rivero-Carvallo Positivo). A la inspección de los brazos, hay múltiples marcas de pinchazos en trayectos venosos. ¿Cuál es el diagnóstico de la válvula afectada y el patógeno causal más probable en esta endocarditis infecciosa?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Válvula Mitral / Streptococcus viridans.",
        "incorrectFeedback": "La afectación de la mitral es la más común de las endocarditis en la población general, pero da émbolos sépticos hacia el cuerpo (cerebro, riñón, extremidades), no a los pulmones. El soplo mitral (soplo holosistólico en el ápex) no cambia o disminuye con la inspiración."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Válvula Tricúspide / Staphylococcus aureus resistente a meticilina (MRSA)."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Válvula Aórtica / Enterococcus faecalis.",
        "incorrectFeedback": "La aórtica daría émbolos sistémicos y soplo diastólico."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Válvula Pulmonar / Candida albicans.",
        "incorrectFeedback": "La pulmonar es rarísima (incluso en UDIV, la tricúspide es reina absoluta) y el hongo Candida es típico de pacientes con nutrición parenteral central o catéteres prolongados de quimioterapia."
      }
    ],
    "correctOptionId": "B",
    "explanation": "Enfermedad sospechada: Endocarditis Infecciosa del Corazón Derecho.\n\nDato decisivo: Usuario de Drogas IV + Émbolos sépticos en Pulmones + Soplo que aumenta con la inspiración profunda (Rivero-Carvallo).\n\nPrincipio clínico evaluado: Epidemiología de la endocarditis en toxicómanos y semiología clínica pura de los soplos del corazón derecho.\n\nLos Usuarios de Drogas Intravenosas (UDIV) se inyectan bacterias de la piel directo a la vena. La primera válvula cardíaca que se encuentra la sangre venosa contaminada al llegar al corazón es la Válvula Tricúspide. El agente etiológico universal en estos pacientes es el Staphylococcus aureus de la piel. Las bacterias forman masas gigantes (vegetaciones) en la válvula. Como la tricúspide daña su cierre (Insuficiencia Tricuspídea), al bombear el ventrículo, pedazos de la infección se desprenden y vuelan directo a los pulmones, formando las cavitaciones y neumonías múltiples descritas (Émbolos sépticos pulmonares). El sello de oro semiológico de CUALQUIER soplo del corazón DERECHO (Tricúspide o Pulmonar) es el Signo de Rivero-Carvallo: Al tomar aire profundamente, aumenta la presión negativa torácica, \"chupando\" más sangre venosa hacia el corazón derecho. Al haber más sangre turbulenta pasando por la válvula rota, el soplo suena más fuerte.\n\n**Trampa del examen:** Lateralidad pulmonar: Si lees \"émbolos en pulmón\", el coágulo infeccioso tiene que haber salido del corazón derecho. El ventrículo izquierdo escupe hacia el cuerpo entero (ej. ACV, lesiones de Janeway en los dedos), no hacia los pulmones.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., las bacterias que este joven se inyecta con su jeringa sucia no piden permiso. Viajan por la vena cava y chocan contra la puerta de entrada del corazón: la válvula tricúspide. Ahí el Estafilococo planta campamento y destruye la puerta. Cada vez que el corazón late, lanza granadas de pus hacia la arteria pulmonar, agujereando los dos pulmones del paciente con abscesos. Para confirmar que el daño está en la puerta derecha, pégale el fonendoscopio al esternón y dile al muchacho: \"Tome aire profundo y sosténgalo\". Si el ruido soplante sube el volumen, acabas de aislar topográficamente la falla en el lado derecho. Es fisiología hermosa y letal.",
    "keyPoints": [
      "Usuario Drogas IV + Neumonías Múltiples (Cavitadas) + Soplo = Endocarditis Tricuspídea.",
      "Patógeno OBLIGADO a cubrir empirícamente: Staphylococcus aureus (Añadir Vancomicina o Daptomicina).",
      "Soplo derecho: Aumenta a la Inspiración (Signo de Rivero-Carvallo)."
    ]
  },
  {
    "id": "umng-conv-ed3-65",
    "university": "UMNG",
    "examArea": "CIRUGÍA GENERAL",
    "topic": "GASTROENTEROLOGÍA",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Una mujer de 85 años, severamente delgada y multípara, acude a urgencias por referir un cuadro de obstrucción intestinal progresivo (dolor abdominal tipo cólico, distensión, vómitos repetidos y ausencia de deposiciones). Al examen físico del abdomen, no se palpan hernias inguinales, crurales o umbilicales evidentes, y no tiene cicatrices de cirugías previas en el abdomen (descarta bridas). Lo que resulta extremadamente llamativo es que la abuela se queja de un dolor neural y calambres punzantes en la cara medial del muslo derecho, los cuales se irradian hasta la rodilla derecha, exacerbándose cuando intenta extender el miembro inferior o rotarlo hacia adentro. ¿Cuál es el diagnóstico de este raro pero letal defecto anatómico oculto en esta paciente?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Hernia de Spiegel (Hernia Ventral Lateral).",
        "incorrectFeedback": "La Hernia de Spiegel sale en la intersección de la línea semilunar con la línea semicircular (borde lateral del recto abdominal por debajo del ombligo). Se palpa como una masita en la pared abdominal baja lateral."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Hernia Femoral o Crural encarcerada.",
        "incorrectFeedback": "La Hernia Femoral (Crural) es muy común en ancianas multíparas, PERO se palpa una masa justo por debajo del ligamento inguinal medial a los vasos femorales. Además, no comprime el nervio obturador de forma clásica."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Trombosis mesentérica superior diseminada.",
        "incorrectFeedback": "La trombosis mesentérica da dolor extremo generalizado \"desproporcionado\" (revisado en simulacro previo) y el lactato sube. No hay compresión nerviosa específica de la pierna."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Hernia Obturatriz encarcerada (Signo de Howship-Romberg)."
      }
    ],
    "correctOptionId": "D",
    "explanation": "Enfermedad sospechada: Hernia Obturatriz estrangulada/encarcerada.\n\nDato decisivo: Anciana muy delgada y multípara + Obstrucción intestinal (sin hernias evidentes) + Dolor en la cara interna (medial) del muslo irradiado a la rodilla.\n\nPrincipio clínico evaluado: El síndrome compresivo específico del nervio obturador en los defectos del suelo pélvico. Es el diagnóstico \"quirúrgico de culto\" en los exámenes.\n\nLa Hernia Obturatriz es rara, pero es un clásico de los exámenes (conocida como la hernia de las \"ancianas flacas\"). El canal obturador está profundo en la pelvis, tapado normalmente por una almohadilla de grasa. Al envejecer y adelgazar severamente, esa grasa desaparece, dejando el canal vacío. Un asa de intestino delgado se resbala, cae por el agujero pélvico y se atasca en la profundidad. Como no sale hacia la piel exterior, no se palpa ningún bulto en el cuerpo. Sin embargo, por ese mismo canal viaja el Nervio Obturador. El intestino hinchado aplasta al nervio contra el hueso. Esto genera el patognomónico Signo de Howship-Romberg: Dolor neurológico lancinante en la cara interna del muslo hasta la rodilla, exacerbado con la extensión y rotación medial del muslo. La paciente requiere TAC de pelvis urgente y Laparotomía inmediata porque tiene una altísima tasa de estrangulación y gangrena intestinal.\n\n**Trampa del examen:** Obstrucción abdominal sin hernias a la vista: Cuando el caso dice \"no hay cicatrices y no hay hernias afuera\", busca los huecos internos. Pélvico (Obturatriz) o Diafragmático. El dolor que viaja por el muslo es la flecha de neón apuntando al agujero obturador.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., este es el examen físico nivel Dios en cirugía. A la paciente se le cerraron las tripas por un nudo. Tú la revisas entera y no encuentras por dónde. Si no conoces el Signo de Howship-Romberg, mandarás a la abuelita al psiquiatra pensando que \"el dolor de la pierna es cuento inventado\". El intestino atrapado en el fondo de la pelvis está chillando de asfixia y estrangulando al nervio de la pierna (Nervio Obturador) que pasa junto a él por el agujero del hueso púbico. Pide una tomografía de pelvis; cuando el radiólogo te muestre el asa intestinal escondida en el piso pélvico, entrarás a quirófano sabiendo exactamente dónde ir a halar el intestino para destrabarlo.",
    "keyPoints": [
      "Anciana + Pérdida de peso + Obstrucción intestinal + Dolor en la cara INTERNA del muslo (Signo de Howship-Romberg) = Hernia Obturatriz. (Hernia pélvica profunda)."
    ]
  },
  {
    "id": "umng-conv-ed3-66",
    "university": "UMNG",
    "examArea": "NEUROLOGÍA Y TOXICOLOGÍA",
    "topic": "EFECTOS SECUNDARIOS",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Un joven de 19 años asiste a urgencias refiriendo episodios incontrolables de vómito (Gastroenteritis aguda). El médico de triage le administra una ampolla de Metoclopramida (Plasil) intravenosa para controlar las náuseas. Treinta minutos después, la enfermera llama asustada porque el paciente presenta un cuadro \"neurológico bizarro\": el joven tiene la cabeza fuertemente girada hacia atrás y a la derecha de forma involuntaria y dolorosa (Tortícolis espasmódica severa), y sus globos oculares están desviados fijamente hacia arriba, obligándolo a mirar al techo (\"Crisis Oculógiras\"). El paciente está consciente, pero llora de desesperación al no poder controlar sus músculos del cuello ni de la cara. ¿Cuál es la fisiopatología de este síndrome y cuál es la droga antídoto específica INMEDIATA que relaja al paciente en segundos?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Síndrome Extrapiramidal (Distonía Aguda) / Bloqueo Dopaminérgico. Antídoto: Difenhidramina o Biperideno intravenoso."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Síndrome Neuroléptico Maligno / Toxicidad muscarínica. Antídoto: Dantroleno Sódico.",
        "incorrectFeedback": "El Síndrome Neuroléptico Maligno (ya repasado) da fiebre letal >40°C, rigidez total en tubo de plomo, inestabilidad autonómica y CPK alta. Es raro, de días de evolución y con peligro de muerte, no es una crisis distónica focal rápida de cuello."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Reacción Anafiláctica Atípica / Degranulación de Mastocitos. Antídoto: Epinefrina Intramuscular.",
        "incorrectFeedback": "La anafilaxia es respiratoria (estridor) e hipotensiva, no da calambres de ojos hacia arriba."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Convulsiones Parciales Complejas motoras / Actividad eléctrica frontal aberrante. Antídoto: Diazepam intravenoso.",
        "incorrectFeedback": "Las convulsiones no mantienen el estado de alerta del paciente intacto con dolor y conciencia plena del espasmo sostenido."
      }
    ],
    "correctOptionId": "A",
    "explanation": "Enfermedad sospechada: Reacción Distónica Aguda Extrapiramidal.\n\nDato decisivo: Uso reciente de antiemético bloqueador de dopamina (Metoclopramida o Haloperidol) + Espasmos musculares asimétricos sostenidos (Tortícolis) + Ojos desviados hacia arriba (Crisis Oculógiras) en paciente completamente CONSCIENTE.\n\nPrincipio clínico evaluado: El equilibrio entre Dopamina y Acetilcolina en los ganglios basales. Si bloqueas la dopamina bruscamente, la acetilcolina se desborda y causa espasmo muscular distónico.\n\nLa Metoclopramida (Plasil), además de quitar las náuseas, es un poderoso antagonista de los receptores D2 de Dopamina (prima del Haloperidol). En personas jóvenes, cruza la barrera del cerebro y apaga la dopamina de los ganglios basales (los encargados de suavizar los movimientos). Al apagarse la dopamina, su contraparte, la Acetilcolina, queda libre y actúa sin freno. Esto genera Distonías Agudas (Síndrome Extrapiramidal): contracciones musculares sostenidas y dolorosas, típicamente del cuello (tortícolis), espalda (opistótonos) o los músculos de los ojos, desviándolos fijamente hacia arriba (Crisis Oculógiras). El tratamiento inmediato, casi mágico, es aplicar un fármaco Anticolinérgico para empatar el partido: Biperideno IV o Difenhidramina IV (que tiene alto poder anticolinérgico central). A los dos minutos de pasarlo, los ojos del paciente bajan y el cuello se suelta.\n\n**Trampa del examen:** Asociar Difenhidramina solo con alergias: Todos piensan en alergia al ver la difenhidramina (Benadryl). Aquí se usa por su tremendo efecto secundario anticolinérgico, no como antihistamínico. Apaga la contracción colinérgica desbocada del cuello.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., vas a enfrentar esto tu primera semana de rural. Una muchacha vomitando, le mandas Plasil, y media hora después te la entran en silla de ruedas con el cuello volteado hacia atrás y los ojos pelados mirando hacia la nuca, llorando del dolor y el susto, y los familiares gritando que \"le dio una embolia por tu inyección\". Mantén la calma de cirujano. Pide una ampolla de Biperideno o Benadryl, inyéctasela lento por la vena, y como si estuvieras desconectando un robot dañado, los ojos de la niña caerán lentamente al centro y el cuello se pondrá flojito de nuevo. No es alergia ni ACV, es tu medicina robándole la dopamina temporalmente a su cerebro medio.",
    "keyPoints": [
      "Antiemético (Metoclopramida/Plasil) o Antipsicótico + Tortícolis + Ojos fijos mirando arriba (Oculogiria) = Distonía Aguda Extrapiramidal.",
      "Antídoto de elección: Biperideno IV o Difenhidramina IV (Anticolinérgicos)."
    ]
  },
  {
    "id": "umng-conv-ed3-67",
    "university": "UMNG",
    "examArea": "ENDOCRINOLOGÍA",
    "topic": "NEFROLOGÍA Y TOXICOLOGÍA",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Un paciente psiquiátrico de 45 años, con antecedente de Trastorno Bipolar en tratamiento crónico con Carbonato de Litio desde hace 10 años, asiste a consulta refiriendo sed incontrolable (polidipsia severa) y que \"tiene que ir al baño a orinar galones de agua cada 2 horas, día y noche\" (poliuria de 8 Litros al día). Al examen, presenta signos de deshidratación moderada. Se toman laboratorios urgentes: Sodio (Na+) en 150 mEq/L (Hipernatremia) y Osmolaridad Sérica elevada (305 mOsm/kg). Llamativamente, la Osmolaridad Urinaria es bajísima (< 150 mOsm/kg, orina transparente como el agua). Durante la prueba de privación de agua (Test de Miller), el paciente continúa orinando volúmenes enormes diluidos. Usted administra Desmopresina (Análogo de ADH) intravenosa, pero la orina NO SE CONCENTRA tras 2 horas de su administración. ¿Cuál es el diagnóstico fisiopatológico definitivo?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Diabetes Insípida Central por infarto del tallo hipofisiario.",
        "incorrectFeedback": "En la Diabetes Insípida Central, el cerebro dejó de fabricar la hormona ADH. Si tú inyectas la hormona artificial (Desmopresina) por la vena, el riñón sano obedece al instante, retiene agua, y la osmolaridad urinaria aumenta un >50% rápidamente (la orina se vuelve amarilla concentrada). Aquí la prueba fue negativa."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Potomanía primaria (Polidipsia Psicógena).",
        "incorrectFeedback": "En la Polidipsia psicógena, el paciente toma litros de agua por un problema mental. El cuerpo suprime la ADH fisiológicamente. El sodio sérico estaría BAJO (Hiponatremia dilucional), no alto. Y si le restrieges el agua bajo vigilancia estricta, la orina sí se concentraría al final."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Síndrome de Secreción Inadecuada de ADH (SIADH).",
        "incorrectFeedback": "En el SIADH (revisado en Lote 6), el riñón retiene agua, dando Hiponatremia Severa y Oliguria, y orina altamente densa (concentrada). Exactamente lo contrario a este paciente."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Diabetes Insípida Nefrogénica inducida por el Litio."
      }
    ],
    "correctOptionId": "D",
    "explanation": "Enfermedad sospechada: Diabetes Insípida (Poliuria masiva con orina diluida + Hipernatremia).\n\nDato decisivo: Uso crónico de Litio + Falla del Test de Desmopresina (El riñón no obedece la orden de la hormona inyectada).\n\nPrincipio clínico evaluado: La toxicidad crónica del Litio sobre los receptores V2 en el riñón, diferenciando entre la causa cerebral y la renal.\n\nEl consumo crónico de LITIO (y de Demeclociclina) causa daño directo a las células del túbulo colector del riñón. El Litio entra a la célula y destruye los receptores V2, o bloquea la inserción de las acuaporinas. El cerebro fabrica la hormona ADH, la sangre la lleva al riñón, pero el riñón es \"sordo\" y ciego a la hormona. Por lo tanto, orina y orina agua pura (Diabetes Insípida Nefrogénica). Por más que le inyectes Desmopresina exógena extra, el riñón no responderá porque los canales están dañados químicamente por el Litio. (Tratamiento: Suspender Litio, dar diuréticos tiazídicos -paradójicamente-, o amilorida, y AINEs).\n\n**Trampa del examen:** Prueba de la Hormona: Es la regla de oro para clasificarla.\n\nTe inyecto Desmopresina y te curas (Orinas concentrado) = La culpa es de tu cerebro (Central).\n\nTe inyecto Desmopresina y sigues orinando agua pura = La culpa es del riñón sordo (Nefrogénica). Litio es el culpable universal.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el riñón de este hombre tiene \"tapones para los oídos\" hechos de Litio. La glándula hipófisis en el cerebro grita desesperada enviando hormonas para que no orine más, porque el hombre se está secando (sodio en 150), pero el riñón no escucha. Tú intentas ayudar al cerebro inyectándole hormona sintética importada, y tampoco pasa nada. La única forma de curarlo es quitar el medicamento que envenenó el riñón. Curiosamente, si no lo puedes quitar, el nefrólogo le recetará Amilorida o Diuréticos Tiazídicos (que suena loco recetar un diurético al que orina mucho), pero esos fármacos inducen una ligera depleción de volumen y forzan al cuerpo a absorber agua más arriba (en el túbulo proximal), mitigando la poliuria salvaje.",
    "keyPoints": [
      "Paciente Psiquiátrico en LITIO crónico + Poliuria (Orinar mucho) + Sodio Alto = Diabetes Insípida Nefrogénica.",
      "Prueba confirmatoria: Administrar Desmopresina (DDAVP) y la orina NO SE CONCENTRA (No hay cambio)."
    ]
  },
  {
    "id": "umng-conv-ed3-68",
    "university": "UMNG",
    "examArea": "MEDICINA INTERNA",
    "topic": "NEUMOLOGÍA - INFECTOLOGÍA",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Un paciente alcohólico crónico y en situación de calle de 50 años ingresa a urgencias con un cuadro febril y dolor torácico derecho severo de 2 semanas de evolución. En la radiografía de tórax, se observa una Neumonía franca en el lóbulo inferior derecho, pero lo más alarmante es un Derrame Pleural voluminoso ipsilateral que opaca todo el tercio medio e inferior del pulmón. Usted sospecha un Derrame Paraneumónico complicado y procede a realizar una Toracocentesis diagnóstica (extracción de líquido pleural). El líquido extraído tiene un aspecto turbio. El laboratorio de urgencias reporta el siguiente perfil citoquímico del líquido: LDH pleural de 1.500 U/L, Glucosa de 30 mg/dL, y un pH en gases de líquido pleural de 7.10. De acuerdo con estos hallazgos (Criterios patognomónicos), ¿cuál es la conducta DEFINITIVA y obligatoria que debe realizarse inmediatamente en el tórax de este paciente, además del tratamiento antibiótico sistémico?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Observación estricta y control radiológico, ya que los antibióticos venosos reabsorberán el derrame en una semana.",
        "incorrectFeedback": "En un derrame paraneumónico \"simple\" (líquido claro, pH normal 7.30, glucosa normal), los antibióticos curan el pulmón y el líquido se reabsorbe solo. Pero aquí los químicos dicen que el líquido está infectado masivamente y lleno de bacterias consumiendo azúcar y soltando ácido. No se reabsorbe solo, requiere manguera."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Insertar un Tubo de Tórax grueso de inmediato para drenaje a trampa de agua (Pleurostomía cerrada)."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Administrar diuréticos de asa (Furosemida) intravenosa altas dosis para \"secar\" la efusión exudativa.",
        "incorrectFeedback": "La Furosemida drena los derrames trasudativos (Falla Cardiaca/Cirrosis). En los exudados inflamatorios infecciosos espesos, secar la sangre del paciente solo coagulará más el pus en el tórax."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Realizar Punciones pleurales con aguja todos los días (Toracocentesis seriada) hasta agotar el líquido.",
        "incorrectFeedback": "Pincharlo mil veces para sacar pus es iatrogénico, ineficaz, doloroso y expone a colapsar el pulmón (Neumotórax secundario). Se pone un tubo fijo."
      }
    ],
    "correctOptionId": "B",
    "explanation": "Enfermedad sospechada: Empiema Pleural / Derrame Paraneumónico Complicado.\n\nDato decisivo: Criterios químicos de líquido pleural \"podrido\": pH < 7.20, Glucosa < 40 mg/dL, LDH gigantesca (más de 1000).\n\nPrincipio clínico evaluado: Criterios absolutos de intervención quirúrgica (drenaje tubular) en derrames paraneumónicos para prevenir la fibrosis encarcelada del pulmón.\n\nLos hallazgos del líquido pleural dictan si es un Empiema o un Derrame Paraneumónico Complicado. Los criterios de indicación de COLOCACIÓN DE TUBO DE TÓRAX son inamovibles:\n\n**Trampa del examen:** Memoria química de pleura: Te ponen los criterios de Light (es exudado). Pero la trampa es no saber el \"Umbral Quirúrgico\". Exudado no significa tubo. pH bajo 7.20 SI significa tubo. Siempre enfoca tu ojo al pH y la glucosa del líquido, ellos dictaminan el cuchillo.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., tu paciente tiene una piscina de yogur podrido ahogando el pulmón derecho. Las bacterias en el pleura están felices, comiéndose todo el azúcar del líquido (por eso la glucosa en 30) y defecando puro ácido láctico bacteriano (por eso el pH cayó a 7.10). Los antibióticos que pasas por la vena no penetran una caverna de pus amurallada. Esa piscina de pus es como el pegamento de cemento de contacto; en tres días se seca, y formará un caparazón de piedra que envolverá al pulmón y no lo dejará respirar jamás (Pulmón encarcelado o Fibrotórax). Agarra bisturí, abre un ojal entre sus costillas, mete la manguera y drena todo ese veneno hasta la última gota.",
    "keyPoints": [
      "Indicaciones de Tubo de Tórax en Derrame Pleural Infeccioso (Derrame Complicado/Empiema):",
      "pH < 7.20",
      "Glucosa < 60 mg/dL",
      "Pus franco a simple vista",
      "Tinción de Gram o Cultivo Positivo."
    ]
  },
  {
    "id": "umng-conv-ed3-69",
    "university": "UMNG",
    "examArea": "ORTOPEDIA INFANTIL",
    "topic": "PEDIATRÍA",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Un niño de 6 años es llevado a urgencias por su padre. El padre relata que estaban jugando en el parque y, al intentar subir al niño rápidamente tomándolo y jalándolo fuertemente por la muñeca y mano derecha, el niño lloró intensamente y desde ese instante mantiene el brazo pegado a su cuerpo, rehusándose a moverlo (impotencia funcional). Al examinar al niño, usted observa que sostiene el codo derecho en ligera flexión y el antebrazo está en pronación rígida (con la palma de la mano mirando hacia el cuerpo). El niño llora amargamente si usted intenta rotarle la palma de la mano hacia arriba (supinación). No hay equimosis, inflamación grotesca ni pulso alterado. ¿Cuál es la complicación vascular o nerviosa más frecuente en este tipo de lesión infantil, o cuál es el procedimiento terapéutico innegociable a realizar sin necesidad de radiografías previas?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Lesión del nervio mediano por fractura supracondílea oculta / Solicitar radiografías y colocar yeso.",
        "incorrectFeedback": "La fractura supracondílea del húmero se produce por un mecanismo completamente distinto: caer sobre la mano extendida con hiperextensión del codo (cayéndose del pasamanos). Es una urgencia máxima (por riesgo de atrapar la arteria braquial) que produce deformidad espantosa en el codo (\"S Itálica\"). No es un tirón por parte del papá."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Síndrome isquémico de Volkmann inminente / Realizar Fasciotomía del antebrazo.",
        "incorrectFeedback": "La contractura isquémica de Volkmann es la pesadilla final de un Síndrome Compartimental del antebrazo ignorado (típicamente tras la fractura supracondílea o yesos apretados). Causa garra isquémica e hipoperfusión. Aquí no hay fractura, no hay sangrado."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Subluxación de la cabeza del radio (Codo de Niñera) / Realizar maniobra ortopédica manual de hiper-supinación y flexión o hiper-pronación en urgencias para reducirlo."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Luxación del cúbito con fractura del radio (Lesión de Monteggia) / Reducción cerrada bajo anestesia general.",
        "incorrectFeedback": "Las luxo-fracturas de Monteggia o Galeazzi requieren traumas rotacionales aplastantes, no tirones de la mano."
      }
    ],
    "correctOptionId": "C",
    "explanation": "Enfermedad sospechada: Subluxación del ligamento anular sobre la cabeza del radio (Codo de Niñera o Pronación dolorosa).\n\nDato decisivo: Mecanismo causal patognomónico (Tracción axial fuerte del brazo extendido por parte de un adulto) + Niños entre 1 y 5 años + Antebrazo mantenido en PRONACIÓN dolorosa.\n\nPrincipio clínico evaluado: El síndrome ortopédico más común de la primera infancia donde se PROHÍBE perder tiempo tomando radiografías de entrada si la historia es perfecta, y se recompensa la maniobra manual instantánea de rescate.\n\nEl famoso \"Codo de Niñera\" (Pronación dolorosa). Los ligamentos del codo de los niños pequeños son muy laxos. Cuando el papá \"jala\" al niño del brazo bruscamente (para subirlo a un andén o columpiarlo de los brazos), el ligamento anular que envuelve el hueso del radio se \"resbala\" y se mete (subluxa) en la articulación entre el radio y el húmero. El brazo se traba en pronación. La regla mundial es: SI LA HISTORIA ES TÍPICA, NO SE PIDEN RAYOS X. Los huesos son de cartílago y no se verá nada. El médico toma la mano del niño, empuja el codo y, en un solo movimiento fuerte y seco, GIRA la palma de la mano hacia arriba (Hiper-supinación) y dobla el codo hacia el hombro del niño (Flexión). Se siente y escucha un \"clack\" mágico cuando el ligamento salta a su lugar. El niño llora por dos segundos, y a los 5 minutos está jugando y agarrando dulces con esa misma mano.\n\n**Trampa del examen:** Asustar con diagnósticos catastróficos: Puse el texto de \"complicación neurovascular\" en la pregunta para asustarte y que pensaras en la Fractura Supracondílea del húmero (que ES el terror pediátrico que lesiona la arteria braquial). Pero el mecanismo de jalar la mano y la edad lo descartan, guiándote a la patología benigna pero dolorosísima del codo de niñera.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., te prometo que esta es la maniobra que te hará ver como un dios frente a los padres asustados en el rural. El papá llega pálido creyendo que le quebró el brazo al niño por alzarlo del piso de mala manera. No lo mandes a rayos X a que lo torturen moviéndole un brazo trabado para que la placa salga normal. Distrae al niño con un juguete, agárrale el codo firme con tu mano izquierda, coge su manito derecha y gírasela como si estuviera pidiendo limosna hacia el techo, y dobla el codo. Un chasquido silencioso te avisa que lo lograste. Sal del consultorio y dile a la mamá que vuelva a entrar; encontrará al niño aplaudiendo con las dos manos. Es medicina ortopédica en estado puro.",
    "keyPoints": [
      "Tracción brusca de la mano de un niño pequeño + Brazo pegado al cuerpo en PRONACIÓN = Subluxación de la Cabeza del Radio (Codo de Niñera).",
      "Tratamiento: Reducción manual en consultorio (Maniobra de Supinación-Flexión o Hiperpronación). NO requiere inmovilización con yeso post-reducción."
    ]
  },
  {
    "id": "umng-conv-ed3-70",
    "university": "UMNG",
    "examArea": "INFECTOLOGÍA",
    "topic": "SALUD PÚBLICA Y EPIDEMIOLOGÍA",
    "difficulty": "hard",
    "tags": [
      "umng",
      "convocatoria",
      "ed3"
    ],
    "statement": "Usted se encuentra rotando en la consulta externa de Neumología y evalúa a un médico residente de cirugía de 28 años de edad, asintomático, quien por protocolo de salud ocupacional fue sometido a una prueba de Tuberculina (PPD o Test de Mantoux). A las 72 horas, la lectura de la induración en el antebrazo del médico marca 13 milímetros. Al interrogarlo, él refiere que hace 3 meses en la UCI debió intubar a un paciente sin protección adecuada N95 que posteriormente fue diagnosticado con Tuberculosis Pulmonar bacilífera. El residente no presenta tos, fiebre ni sudoración nocturna. Se le solicita una radiografía de tórax, la cual es estrictamente NORMAL, sin cavidades, sin opacidades ni derrames. ¿Cuál es el diagnóstico epidemiológico del residente y el manejo terapéutico farmacológico dictado por el Ministerio de Salud para erradicar el riesgo a futuro?",
    "options": [
      {
        "id": "A",
        "label": "A",
        "text": "Tuberculosis Pulmonar Activa subclínica / Iniciar protocolo Tetra-conjugado (Rifampicina, Isoniazida, Pirazinamida, Etambutol - HRZE) por 6 meses de inmediato.",
        "incorrectFeedback": "Iniciar el combo de cuatro antibióticos fuertes (HRZE) a un paciente que tiene una Rx de tórax normal y no tiene síntomas es un error severo, generará toxicidad hepática brutal injustificada. El HRZE es SOLO para Enfermedad ACTIVA demostrada clínica o radiológicamente."
      },
      {
        "id": "B",
        "label": "B",
        "text": "Tuberculosis Latente Infecciosa (ITBL) / Iniciar terapia preventiva con Isoniazida sola diaria durante 6 a 9 meses continuos."
      },
      {
        "id": "C",
        "label": "C",
        "text": "Reacción cruzada por vacuna de BCG infantil previa (Falso Positivo) / No administrar fármacos y observar clínicamente.",
        "incorrectFeedback": "La vacuna BCG se da al nacer en Colombia y rara vez causa PPD > 10 mm en la edad adulta (la reacción suele desvanecerse y medir <5 mm a los 10 años postvacunales). Un salto de 13 mm en un contacto demostrado no se subestima como vacuna."
      },
      {
        "id": "D",
        "label": "D",
        "text": "Estado de portador asintomático con bajo riesgo de reactivación / Repetir la PPD en un mes, si sube a > 15 mm se inicia Isoniazida.",
        "incorrectFeedback": "El riesgo en trabajadores de salud infectados de reactivación a lo largo de su vida es alto (~10%), por lo que tratar la ITBL en el área médica es una obligación epidemiológica para protegerlo a él y a los pacientes vulnerables que atiende a diario."
      }
    ],
    "correctOptionId": "B",
    "explanation": "Enfermedad sospechada: Infección por Tuberculosis Latente (ITBL).\n\nDato decisivo: Médico con contacto de altísimo riesgo (intubación de tuberculoso) + PPD mayor a 10 mm (Límite para trabajadores de la salud y riesgo moderado) + PACIENTE ASINTOMÁTICO y Rx TÓRAX NORMAL.\n\nPrincipio clínico evaluado: La diferencia monumental en salud pública entre tener el \"bacilo dormido\" (Latente) vs tener la enfermedad destructiva (Activa).\n\nEl médico inhaló el bacilo de Koch durante la intubación. Sus macrófagos rodearon la bacteria y la \"encarcelaron\" en los ganglios del pulmón. La bacteria está viva, pero \"dormida\" y bajo custodia (Infección Tuberculosis Latente). La PPD positiva de 13 mm demuestra que los linfocitos T la reconocen. El límite de positividad depende de quién seas: si tienes VIH es positiva con > 5 mm. Si eres trabajador de la salud o vives en prisiones, > 10 mm es positiva. Si no tienes factores de riesgo, se toma positiva > 15 mm. Como la Rx es NORMAL y él no tose, sabemos al 100% que la bacteria no ha roto la cárcel y no está destrozando el pulmón (No hay enfermedad activa). Para evitar que en un futuro este médico se inmunosuprima y la bacteria despierte, se da Terapia Preventiva (Quimioprofilaxis). El esquema universal colombiano es Isoniazida en monoterapia (300 mg/día) durante 6 a 9 meses continuos, lo que esteriliza el cuerpo y erradica a los bacilos latentes. (Asociado siempre a piridoxina/Vit B6 para que no le dé neuropatía).\n\n**Trampa del examen:** PPD Positivo = HRZE: La trampa que hace caer a medio curso. El médico ve PPD \"Reactiva\" y manda los cuatro frascos del DOTS. Detente. ¿La placa está normal? ¿El paciente está sano? Es LATENTE, no está tosiendo, dale solo una pastillita (Isoniazida) para matar a los bacilos dormidos.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., meterle el laringoscopio a un paciente con TBC en la madrugada, en un cuarto sin presión negativa, es una \"ducha de bacilos de Koch\" directa a tu cara. Este R1 acaba de tragarse al enemigo. Gracias a Dios, su sistema inmune joven reaccionó rápido y le construyó un calabozo de calcio alrededor a las bacterias (granulomas microscópicos latentes). Pero esos bacilos no están muertos, están agazapados esperando la menor oportunidad, esperando el día que el R1 se estrese, tome corticoides o se desnutra para salir y comerse su pulmón (reactivación en los ápices). La Isoniazida tomada por nueve meses es el seguro de vida; se infiltra en las prisiones de calcio y envenena a los bacilos mientras duermen. Y recuerda prescribirle Vitamina B6 para que no desarrolle hormigueos insoportables en los pies por la Isoniazida.\n\n¡LOTE 7 EJECUTADO A LA PERFECCIÓN!\nHas navegado las aguas más grises y complejas del diagnóstico clínico: radiografías de tórax de trauma y latencia microbacteriana, hasta ortopedia donde los tirones desubican un codo y toxinas botulínicas apagan a un bebé.\n\n¿Te sientes preparado para enfrentar el Lote 8 (Preguntas 71 a 80)? Hazme la señal de avance, toma aire puro y sigamos dominando esta montaña rusa del conocimiento.\n\nLote 8 (Preguntas 71 a 80)\n\n¡La marcha es imparable, colega! Ingresar al Lote 8 (Preguntas 71 a 80) demuestra que tu umbral de fatiga es digno de un jefe de residentes.\n\nEn este bloque vamos a enfrentarnos a las \"viñetas de omisión\", esas donde el diagnóstico parece tan obvio que el médico inexperto olvida buscar la complicación letal que se esconde debajo (luxaciones ocultas, efectos psiquiátricos hematológicos y neumonías atípicas). La UMNG ama poner a prueba tu malicia clínica.\n\nActivo mi modo PROMPT MAESTRO / DR. Q. ¡Prepara el bisturí mental, vamos a operar estas 10 preguntas!",
    "keyPoints": [
      "Tuberculosis Latente: PPD Positiva (+) pero paciente ASINTOMÁTICO y Radiografía de Tórax NORMAL.",
      "Tratamiento (Profilaxis para que no despierte en el futuro): Isoniazida diaria por 6 a 9 meses.",
      "Límites de positividad de la PPD:",
      "> 5 mm: VIH, trasplantados, contacto hiper-estrecho.",
      "> 10 mm: Trabajadores de salud, asilos, cárceles, diabéticos, insuficiencia renal, niños < 4 años.",
      "> 15 mm: Población sana general sin factores de riesgo."
    ]
  }
];
