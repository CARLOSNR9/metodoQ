import type { TrainingQuestion } from "@/lib/questions/types";

export const UMNG_CONV_ED4_11_20_QUESTIONS: TrainingQuestion[] = [
  {
    id: "umng-conv-ed4-11",
    university: "UMNG",
    examArea: "PEDIATRÍA",
    topic: "NEONATOLOGÍA Y REANIMACIÓN",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Usted asiste la cesárea de un recién nacido a término. El líquido amniótico es claro, pero al nacer, el neonato se encuentra flácido, cianótico y con un esfuerzo respiratorio severamente deprimido (gasping). Al examen físico rápido en la cuna térmica, usted nota que el abdomen del bebé está francamente \"excavado\" (hundido o escafoide) y se auscultan ruidos hidroaéreos (intestinales) en el hemitórax izquierdo, con ausencia de murmullo vesicular en ese mismo lado. El corazón se ausculta desplazado hacia la derecha. La frecuencia cardíaca cae a 80 lpm. ¿Cuál es la medida de reanimación habitual que está ESTRICTAMENTE CONTRAINDICADA en este neonato y qué procedimiento debe realizarse inmediatamente?",
    options: [
      { id: "A", label: "A", text: "Intubación Orotraqueal / Se debe realizar presión positiva continua en la vía aérea (CPAP) con máscara nasal." },
      { id: "B", label: "B", text: "Ventilación a Presión Positiva (VPP) con Bolsa-Mascarilla facial / Se debe proceder a Intubación Orotraqueal inmediata y pasar una sonda orogástrica." },
      { id: "C", label: "C", text: "Paso de Sonda Orogástrica / Se debe iniciar VPP con Bolsa-Mascarilla para expandir los pulmones hipoplásicos." },
      { id: "D", label: "D", text: "Administración de surfactante endotraqueal / Se debe realizar una toracocentesis con aguja descompresiva izquierda." }
    ],
    correctOptionId: "B",
    explanation: "El bebé tiene una **Hernia Diafragmática Congénita**. El diafragma izquierdo no se cerró en el útero, y todos los intestinos, el estómago y a veces el bazo, se subieron al tórax izquierdo. Como los intestinos están arriba, el abdomen se ve hundido (escafoide). Estos intestinos no dejaron crecer al pulmón izquierdo (Hipoplasia pulmonar). Si tú sigues el algoritmo normal de reanimación neonatal y le pones una **Bolsa-Mascarilla (Ambú) sobre la cara**, gran parte de ese aire se irá por el esófago hacia el estómago y los intestinos. Como los intestinos están dentro de la caja torácica, se inflarán como globos, aplastando el corazón y el único pulmón sano (el derecho) que le queda al bebé, causándole un paro cardíaco por choque obstructivo instantáneo. La VPP con mascarilla está **PROSCRITA**. La orden de oro es **Intubar inmediatamente la tráquea** (para asegurar que el aire solo vaya a los pulmones) y pasar una sonda gruesa al estómago para succionar y desinflar los intestinos.\n\n**TRAMPA DEL EXAMEN:** El algoritmo ciego: Todo médico sabe que \"Neonato que no respira y HR < 100 = VPP con bolsa y máscara\". Ese es el algoritmo de oro del NRP. El examinador busca al residente que sabe cuándo ROMPER el algoritmo. Si la barriga está hundida y el tórax suena a tripas, saltas directo a la intubación.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., este bebé tiene todo su paquete intestinal metido en el hemitórax izquierdo, aplastando su corazoncito contra las costillas derechas. Si en el desespero de verlo cianótico le pones la máscara en la cara y empiezas a darle ambú, el aire va a buscar el camino más fácil: el estómago. El estómago y los intestinos se llenarán de aire a presión dentro del pecho del niño. Se expandirán tanto que asfixiarán la poca vía aérea que le queda y bloquearán el retorno venoso al corazón. Agarra el laringoscopio con firmeza, métete directo a las cuerdas vocales con un tubo endotraqueal y aísla la vía respiratoria de la digestiva. Es el único acto que le garantiza llegar vivo al quirófano pediátrico.",
    keyPoints: [
      "Neonato en dificultad respiratoria + Abdomen Escafoide (Hundido) + Ruidos intestinales en el pecho = Hernia Diafragmática Congénita.",
      "Acción URGENTE: INTUBACIÓN OROTRAQUEAL + Sonda orogástrica a libre drenaje.",
      "Acción LETAL (Prohibida): Ventilación con Bolsa-Mascarilla (Ambú facial)."
    ]
  },
  {
    id: "umng-conv-ed4-12",
    university: "UMNG",
    examArea: "CARDIOLOGÍA",
    topic: "TOXICOLOGÍA DE URGENCIAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un hombre de 24 años, con antecedentes de consumo recreativo de sustancias psicoactivas, ingresa a urgencias en un estado de extrema agitación psicomotriz, diaforesis profusa y midriasis bilateral. Refiere un dolor torácico opresivo \"como una garra\" de 30 minutos de evolución, irradiado al brazo izquierdo. Signos vitales: PA 190/110 mmHg, FC 135 lpm, SatO2 98%. Se le toma un Electrocardiograma (ECG) que revela un Supradesnivel del segmento ST de 2 mm en las derivaciones V1 a V4 (Infarto anterior agudo). El paciente grita que consumió una gran cantidad de \"Perico\" (Cocaína base) hace una hora. Para manejar la taquicardia severa, la crisis hipertensiva y el vasoespasmo coronario subyacente que está infartando al paciente, ¿cuál de los siguientes grupos de medicamentos está ESTRICTAMENTE CONTRAINDICADO administrar, ya que podría causar la muerte súbita por colapso cardiovascular?",
    options: [
      { id: "A", label: "A", text: "Benzodiacepinas intravenosas (Diazepam o Lorazepam)." },
      { id: "B", label: "B", text: "Nitroglicerina sublingual o en infusión intravenosa." },
      { id: "C", label: "C", text: "Betabloqueadores puros (Propranolol o Metoprolol)." },
      { id: "D", label: "D", text: "Bloqueadores de canales de calcio (Verapamilo o Diltiazem)." }
    ],
    correctOptionId: "C",
    explanation: "La Cocaína es una bomba simpaticomimética que inunda el cuerpo de catecolaminas. Estas catecolaminas están estimulando dos receptores: los **Beta-2** (que tratan de abrir/vasodilatar las arterias periféricas para compensar) y los **Alfa-1** (que contraen y cierran las arterias con violencia). Si a este paciente le administras un **Betabloqueador puro (Metoprolol/Propranolol)** para \"bajarle la frecuencia cardiaca\", estás bloqueando a los receptores Beta. Al tapar los Beta, toda la tormenta de cocaína y adrenalina se va a ir a estrellar única y exclusivamente contra los receptores **Alfa-1 libres (Estímulo Alfa sin oposición)**. Las arterias coronarias y sistémicas sufrirán un vasoespasmo tan letal y masivo que la presión subirá a 250/140, la arteria se cerrará al 100%, y el infarto destruirá el ventrículo en segundos, matando al paciente. ¡Prohibidos los betabloqueadores en intoxicación por cocaína o anfetaminas!\n\n**TRAMPA DEL EXAMEN:** El algoritmo de Infarto a ciegas: El médico residente asume que todo IAM lleva la receta de \"Aspirina, Nitratos y Betabloqueadores\". La cocaína rompe esa regla. Un betabloqueador aquí es una inyección letal.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el corazón de este joven está atrapado en un calambre químico. Las arterias coronarias se \"apretaron\" tanto por la cocaína que no dejan pasar una gota de sangre al ventrículo, dibujando ese supradesnivel del ST tan feo en el papel. El instinto te grita que apagues esa taquicardia de 135 lpm con Metoprolol. No lo hagas. Si tapas los receptores Beta, dejarás a la cocaína sola con los receptores Alfa. Los receptores Alfa son los \"cerradores de puertas\". La coronaria pasará de estar apretada a cerrarse con llave, causando un infarto transmural irreversible y muerte súbita. Relaja su cerebro con dosis altas de Diazepam, ábrele las coronarias con Nitroglicerina, y la frecuencia cardiaca bajará sola cuando el paciente deje de pelear con las alucinaciones.",
    keyPoints: [
      "Dolor Torácico (Infarto/Vasoespasmo) + Intoxicación por COCAÍNA:",
      "Primera línea de manejo: Benzodiacepinas (Diazepam) + Nitratos.",
      "CONTRAINDICACIÓN ABSOLUTA: Betabloqueadores (Propranolol/Atenolol/Metoprolol) por riesgo de vasoespasmo mortal por estímulo Alfa sin oposición."
    ]
  },
  {
    id: "umng-conv-ed4-13",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "URGENCIAS MÁXIMAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Una mujer de 36 años, multípara (G3P2), se encuentra en la sala de labor de parto a las 38 semanas de gestación. Su control ecográfico de tercer trimestre reportó una Placenta de inserción baja con lóbulo sucenturiado y vasos cruzando sobre el orificio cervical interno. La paciente se encuentra en fase latente con 3 cm de dilatación. Repentinamente, la paciente siente un chorro de líquido caliente; las membranas amnióticas se rompen espontáneamente. Inmediatamente después de la ruptura, inicia un sangrado vaginal moderado, de sangre roja brillante, pero COMPLETAMENTE INDOLORO (la paciente no refiere cólicos ni dolor a la palpación). Al observar el monitor fetal continuo, usted se horroriza al ver que la frecuencia cardíaca fetal cae en picada instantáneamente desde 140 lpm a un patrón sinusoidal sostenido con una bradicardia terminal de 60 lpm. Teniendo en cuenta la clínica y el momento del evento, ¿cuál es el diagnóstico de esta catástrofe obstétrica y su manejo?",
    options: [
      { id: "A", label: "A", text: "Desprendimiento Prematuro de Placenta (Abruptio) / Parto vaginal instrumentado urgente." },
      { id: "B", label: "B", text: "Placenta Previa Sangrante / Cesárea de emergencia con estabilización materna." },
      { id: "C", label: "C", text: "Ruptura Uterina / Laparotomía de emergencia e histerectomía." },
      { id: "D", label: "D", text: "Ruptura de Vasa Previa / Cesárea de EMERGENCIA STAT para salvar al feto de la exanguinación." }
    ],
    correctOptionId: "D",
    explanation: "La **Vasa Previa** ocurre cuando los vasos sanguíneos del cordón umbilical no se insertan en la placenta, sino que viajan \"desnudos\" a través de las membranas amnióticas y, trágicamente, cruzan justo por encima de la puerta de salida (el orificio cervical interno). Cuando la \"fuente se rompe\" (ruptura de membranas), las membranas se rasgan y parten por la mitad a esos vasos desnudos fetales. **La sangre que sale por la vagina NO es de la madre, es la sangre del bebé**. Como un feto tiene muy poquita sangre en su cuerpo, en cuestión de minutos se desangra por completo (exanguinación fetal). Esto se detecta por un sangrado indoloro seguido de un **patrón sinusoidal** o bradicardia terminal en el monitor. El único tratamiento para evitar la muerte fetal inminente es **Cesárea URGENTE** (antes de 10 minutos si es posible) y reanimación del neonato con glóbulos rojos al nacer.\n\n**TRAMPA DEL EXAMEN:** Placenta Previa vs Vasa Previa: Ambas dan sangrado INDOLORO rojo rutilante.\n- La mamá sangra pero el bebé está bien en el monitor = Placenta Previa.\n- Rompe membranas, sangra la vagina y el bebé entra en paro en el monitor = **Vasa Previa** (El feto se desangra).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., las venas de este bebé quedaron tendidas justo en la puerta de salida del útero como cables pelados sobre el piso. En el instante exacto en que la membrana de agua se rompió por la presión del parto, los cables se trozaron. Esa sangre roja y fresca que te mancha los guantes no le pertenece a la madre, es la reserva vital del feto derramándose en la camilla. El bebé se está quedando sin volemia en tiempo real. Por eso el monitor pasó de pitar a 140 a dar una alarma plana y agónica de 60 latidos. Corre al quirófano con ella en la camilla, el anestesiólogo la dormirá en el pasillo. Abre el abdomen, saca a ese niño pálido y exige que el pediatra le pase solución salina o sangre O negativo por la vena del ombligo para recargar su tanque de vida.",
    keyPoints: [
      "Tríada de Ruptura de VASA PREVIA:",
      "1. Ruptura de membranas (Amniorrexis).",
      "2. Hemorragia Vaginal INDOLORA.",
      "3. Bradicardia Fetal / Patrón Sinusoidal agudo en el monitor.",
      "Conducta absoluta: Cesárea Emergente (Código Rojo Fetal)."
    ]
  },
  {
    id: "umng-conv-ed4-14",
    university: "UMNG",
    examArea: "MEDICINA INTERNA",
    topic: "ENDOCRINOLOGÍA Y URGENCIAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un hombre de 45 años, previamente diagnosticado con Lupus Eritematoso Sistémico y Tuberculosis tratada, es traído a urgencias en estado de obnubilación y postración extrema. Su esposa relata que en las últimas 48 horas el paciente presentó vómitos y una gastroenteritis severa. Al ingreso, usted evidencia una marcada hiperpigmentación bronceada en la mucosa de las encías, pliegues palmares y cicatrices. El paciente se encuentra en choque profundo: PA 70/40 mmHg (que no responde a dos litros de cristaloides endovenosos a chorro), FC 120 lpm. Los laboratorios urgentes reportan: Sodio 122 mEq/L (Hiponatremia severa), Potasio 6.5 mEq/L (Hiperkalemia masiva) y Glucosa de 45 mg/dL (Hipoglucemia). Ante la fisiopatología destructiva autoinmune o infecciosa de este síndrome, ¿cuál es el tratamiento INMEDIATO Y ESPECÍFICO de rescate para sacarlo de este choque resistente a volumen?",
    options: [
      { id: "A", label: "A", text: "Glucagón intramuscular y bolo de Dextrosa al 50%." },
      { id: "B", label: "B", text: "Solución Salina Hipertónica al 3% para corregir la hiponatremia, combinada con Gluconato de Calcio." },
      { id: "C", label: "C", text: "Vasopresores a dosis máximas (Noradrenalina + Vasopresina) y Hemodiálisis urgente." },
      { id: "D", label: "D", text: "Inyección intravenosa inmediata de Hidrocortisona a dosis de estrés (100 mg en bolo) sumada a la reposición de cristaloides y Dextrosa." }
    ],
    correctOptionId: "D",
    explanation: "La glándula suprarrenal de este paciente fue destruida crónicamente (Enfermedad de Addison), probablemente por la Tuberculosis antigua o autoinmunidad (Lupus). Al no tener glándula, no fabrica **Aldosterona** (el riñón tira todo el Sodio a la orina y retiene el Potasio tóxico) ni fabrica **Cortisol** (el paciente hace hipoglucemia profunda y no puede mantener la presión arterial). La hiperpigmentación ocurre porque el cerebro produce toneladas de MSH (hormona estimulante de melanocitos) junto con la ACTH al tratar de despertar a la glándula muerta. La gastroenteritis fue la \"gota que derramó el vaso\" (factor estresante). El único tratamiento salvavidas absoluto, frente al cual los vasopresores palidecen, es la reposición de la hormona faltante: **Hidrocortisona intravenosa (Bolo de 100 mg)**. Este glucocorticoide tiene un alto efecto mineralocorticoide cruzado, por lo que actúa como un enchufe maestro: devuelve la sensibilidad a las venas (la presión sube mágicamente), estimula al hígado a hacer glucosa y le ordena al riñón tirar el potasio y retener la sal de los sueros.\n\n**TRAMPA DEL EXAMEN:** Laboratorios engañosos: Puedes ver Hiponatremia y pensar en SIADH, o Hiperkalemia y pensar en Falla Renal. La combinación de Na bajo + K alto + Azúcar baja + Presión en el suelo es la partitura perfecta del Addison.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., sin Cortisol, el cuerpo humano se rinde ante el estrés. Las venas pierden su capacidad de apretar, el riñón olvida cómo guardar la sal y el hígado cierra la fábrica de azúcar. Este hombre está en quiebra metabólica total. Puedes conectar a este paciente a diez bombas de infusión de Noradrenalina, pero sin Cortisol en la sangre, los receptores de los vasos sanguíneos tienen la cerradura trabada. La inyección de 100 mg de Hidrocortisona es la llave maestra. Apenas la inyectas, destrabas los receptores, los vasos de sus piernas se contraen y el suero que le estabas pasando hace efecto de repente. Salvaste a un hombre de un \"paro misterioso\".",
    keyPoints: [
      "Tríada de Crisis Adrenal (Addisoniana):",
      "1. Choque Hipotensivo Refractario a líquidos/vasopresores.",
      "2. Hiponatremia + Hiperkalemia + Hipoglucemia.",
      "3. Antecedente de suspensión de corticoides crónicos, TB, autoinmunidad.",
      "Terapia Salvavidas: HIDROCORTISONA IV inmediata."
    ]
  },
  {
    id: "umng-conv-ed4-15",
    university: "UMNG",
    examArea: "TRAUMA",
    topic: "CIRUGÍA DE CUELLO",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un adolescente de 18 años es ingresado tras sufrir una herida por arma blanca (cuchillo) en la porción lateral izquierda del cuello, durante un asalto. La herida se encuentra ubicada exactamente 2 centímetros por encima de la clavícula y 3 cm por debajo del cartílago cricoides (Nivel bajo del cuello). A la inspección en la sala de reanimación, usted evidencia un sangrado en chorro pulsátil rojo brillante a través del defecto de la piel y el paciente cursa con un hematoma cervical que ha crecido visiblemente y se está expandiendo con rapidez. Además, a la auscultación sobre la herida se percibe un soplo o \"thrill\" evidente. Signos vitales: PA 80/50 mmHg. De acuerdo a la clasificación anatómica de las zonas del cuello y el protocolo del ATLS para traumatismos penetrantes cervicales, ¿cuál es el paso DE ORO y único correcto en la reanimación de este paciente inestable?",
    options: [
      { id: "A", label: "A", text: "Compresión digital directa y traslado INMEDIATO a Quirófano para cervicotomía exploratoria y control vascular de urgencia." },
      { id: "B", label: "B", text: "Solicitar Angio-TC de cuello para mapear la lesión arterial subclavia antes de abrir quirúrgicamente la Zona I." },
      { id: "C", label: "C", text: "Introducir pinzas hemostáticas en la herida ciega en urgencias para pinzar la arteria carótida y frenar la hemorragia." },
      { id: "D", label: "D", text: "Colocar un collarín cervical rígido, intubar y observar en la UCI esperando la estabilización del hematoma." }
    ],
    correctOptionId: "A",
    explanation: "El cuello se divide en 3 zonas. La **Zona I** va de las clavículas hasta el cartílago cricoides (esta es la zona de la viñeta). En esta zona están vasos masivos: Carótida común, Subclavia, Vena Yugular y el vértice pulmonar. Históricamente, cada zona tenía algoritmos locos de estudios. Hoy, el ATLS simplificó la regla: **No importa la Zona (I, II o III)**; si el paciente tiene \"SIGNOS DUROS\" de lesión vascular o de la vía aérea (Sangrado pulsátil, hematoma que crece frente a tus ojos, choque, soplo, estridor o burbujeo aéreo por la herida), la orden es **COMPRESIÓN DIRECTA CON EL DEDO GUANTADO Y AL QUIRÓFANO A EXPLORAR (Cervicotomía / Esternotomía)**. No hay tiempo para nada más, el paciente se va a desangrar en el pasillo hacia el tomógrafo.\n\n**TRAMPA DEL EXAMEN:** Distractor anatómico: El examinador se gasta media pregunta describiéndote milimétricamente dónde está la herida (debajo del cricoides, arriba de la clavícula) para que tu cerebro empiece a pensar \"¡Ah, es la Zona 1! ¿Qué decían las guías de la Zona 1? ¡Que es difícil de operar y necesita Angiografía!\". Trampa de oro. La zona no importa si el paciente se está desangrando (Signos duros = Bisturí).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., si este muchacho tose, el chorro de sangre roja brillante te va a manchar los lentes de seguridad. Una de sus arterias principales (probablemente la carótida común) tiene un tajo de cuchillo en la mitad. El corazón late a 120 por minuto empujando sangre por ese agujero. Si tú te pones a llamar al radiólogo para pedir un TAC \"porque es Zona I y hay que ver la subclavia\", en los 10 minutos que demore el camillero, el charco de sangre ahogará la tráquea por fuera y el paciente hará un paro hipovolémico sin retorno. ¡Ponte dos pares de guantes, mete tu dedo pulgar empujando una gasa dentro del hoyo contra la columna cervical de forma contundente y súbanlo corriendo a la sala de operaciones para que el cirujano vascular suture la cañería rota!",
    keyPoints: [
      "Trauma Penetrante de Cuello:",
      "Si hay Signos DUROS (Choque, sangrado pulsátil, hematoma que crece, estridor): QUIRÓFANO DIRECTO (Cervicotomía) sin importar la Zona.",
      "Si está ESTABLE y asintomático: Angio-TAC de Cuello.",
      "Prohibido: Pinzar vasos a ciegas en urgencias. Solo comprimir con gasas/dedos."
    ]
  },
  {
    id: "umng-conv-ed4-16",
    university: "UMNG",
    examArea: "PEDIATRÍA",
    topic: "GASTROENTEROLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un lactante masculino, primer hijo de la pareja, actualmente de 4 semanas de vida (1 mes), es llevado a la consulta de pediatría. La madre está desesperada porque desde hace una semana el bebé empezó a vomitar ocasionalmente, pero en los últimos tres días los vómitos han empeorado drásticamente: ocurren casi siempre después de comer, el vómito es explosivo y a gran distancia (\"vómito en proyectil\"), y ella recalca firmemente que es de color BLANCO, \"puro cuajo de leche\", SIN rastro de color verde o amarillo bilis. Tras vomitar, el niño llora hambriento y quiere comer más. Al examinarlo, el niño luce moderadamente deshidratado. Al palpar profundamente el abdomen en el cuadrante superior derecho, se percibe una pequeña masa móvil, del tamaño y forma de una oliva. Los laboratorios urgentes reportan un patrón gasométrico clásico de: pH 7.55, Cloro (Cl-) en 88 mEq/L (muy bajo) y Potasio (K+) en 2.8 mEq/L (bajo). ¿Cuál es el diagnóstico confirmatorio y el paso INICIAL de manejo antes de programar la cirugía?",
    options: [
      { id: "A", label: "A", text: "Vólvulo de intestino medio / Corrección de acidosis con bicarbonato de sodio." },
      { id: "B", label: "B", text: "Estenosis Hipertrófica del Píloro / Reanimación con líquidos intravenosos y corrección de la alcalosis hipoclorémica con Suero Salino Normal." },
      { id: "C", label: "C", text: "Reflujo Gastroesofágico fisiológico del lactante / Indicar a la madre leche espesada y posición antirreflujo, con alta médica." },
      { id: "D", label: "D", text: "Atresia Duodenal congénita / Descompresión nasogástrica inmediata y paso a cirugía de Kasai." }
    ],
    correctOptionId: "B",
    explanation: "El músculo del píloro (la puerta que une el estómago con el intestino) sufre una hipertrofia progresiva después de nacer, típicamente dando síntomas alrededor de las 3 a 5 semanas. El tubo se engruesa tanto que bloquea el paso de la leche al intestino. Como el estómago se llena, empuja la leche de regreso a la fuerza (**Vómito en proyectil**). Como la obstrucción está *antes* de donde desemboca el conducto de la bilis, el vómito es leche pura y ácida gástrica (**Vómito NO bilioso**). Al vomitar tanto jugo gástrico, el bebé bota todo su **Ácido Clorhídrico (H+ y Cl-)**. El cuerpo pierde ácido, por lo que la sangre se vuelve súper alcalina (**Alcalosis metabólica** con pH 7.55) y con muy poco cloro (**Hipocloremia**). El riñón, tratando de compensar, bota potasio, causando **Hipokalemia**. La masa palpable es la \"oliva\" del músculo hipertrofiado. (El eco confirma viendo el músculo > 4 mm de grosor). El tratamiento es la Cirugía de Ramstedt (Piloromiotomía), PERO el paso inicial, OBLIGATORIO por ley antes de dormirlo con anestesia, es corregir la alcalosis hidratándolo con **Solución Salina Fisiológica al 0.9%** (para devolverle el cloro) y reponiendo el potasio. Si se opera alcalótico, el bebé hará paro respiratorio postanestésico profundo por falta de estímulo ventilatorio.\n\n**TRAMPA DEL EXAMEN:** Prisa Quirúrgica: Las opciones te tentarán a decir \"Paso a quirófano urgente\". La Estenosis del Píloro **ES UNA URGENCIA MÉDICA, NO UNA EMERGENCIA QUIRÚRGICA**. Tú tienes de 24 a 48 horas para hidratar al bebé con suero salino para normalizar su pH y el cloro, y cuando esté perfecto en laboratorios, el cirujano pediatra lo abre con calma y seguridad. Operarlo deshidratado es letal.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el estómago de este bebé está haciendo un esfuerzo hercúleo para pasar la leche al intestino, pero la puerta de salida (el píloro) tiene el músculo tan inflamado y gordo que es como un muro de cemento. El estómago se rinde y empuja la leche de vuelta con tal presión que la escupe a un metro de distancia. El bebé llora porque se está muriendo de hambre; no absorbe nada. Y de tanto vomitar jugo del estómago, se ha quedado sin ácido clorhídrico y la sangre se le puso extremadamente alcalina (básica). Si no le clavas una vena y le devuelves el cloro que perdió pasándole bolsas de solución salina, la anestesia de la cirugía le detendrá el diafragma y no volverá a respirar al quitarle el tubo.",
    keyPoints: [
      "Lactante (3-6 sem) + Vómito EN PROYECTIL (No bilioso) = Estenosis Hipertrófica del Píloro.",
      "Firma en Sangre: Alcalosis Metabólica Hipoclorémica e Hipokalémica.",
      "Examen Físico/Eco: Masa en Oliva Pilórica palpable en CSD.",
      "Manejo paso 1: Corregir deshidratación/electrolitos con SSN 0.9%.",
      "Manejo paso 2: Cirugía (Piloromiotomía)."
    ]
  },
  {
    id: "umng-conv-ed4-17",
    university: "UMNG",
    examArea: "CARDIOLOGÍA",
    topic: "MEDICINA INTERNA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un hombre de 75 años, con antecedentes de Hipertensión Arterial crónica y dislipidemia, consulta al servicio de urgencias por presentar disnea, palpitaciones y un episodio de presíncope que sintió al caminar rápido hacia la tienda. Al examen físico, PA 150/90 mmHg, FC 120 lpm. Usted nota que el ritmo cardíaco es completamente irregular, con un primer ruido de intensidad variable y el pulso radial presenta la misma característica de irregularidad absoluta. Se toma un Electrocardiograma (ECG) que revela un patrón patognomónico: Ausencia total de ondas P discernibles, reemplazadas por una línea de base ondulante y caótica (ondas \"f\" finas), y un intervalo R-R completamente irregular. Dada la clara confirmación del diagnóstico de Fibrilación Auricular (FA), usted calcula el riesgo del paciente utilizando la escala CHA2DS2-VASc, obteniendo un puntaje de 3 puntos (Por edad >75 y por HTA). Según las guías internacionales, ¿cuál es la conducta terapéutica crónica obligatoria para evitar la principal complicación mortal e incapacitante de este hallazgo en este paciente?",
    options: [
      { id: "A", label: "A", text: "Aspirina 100 mg diarios como única terapia antiagregante." },
      { id: "B", label: "B", text: "Iniciar anticoagulación oral plena a largo plazo (con DOACs como Apixabán/Rivaroxabán o Warfarina)." },
      { id: "C", label: "C", text: "Administrar Amiodarona crónica para mantener el ritmo sinusal y evitar el uso de anticoagulantes." },
      { id: "D", label: "D", text: "Programar cierre de auriculilla izquierda exclusivamente, ya que la anticoagulación es muy riesgosa en mayores de 75 años." }
    ],
    correctOptionId: "B",
    explanation: "La **Fibrilación Auricular (FA)** hace que las aurículas del corazón \"tiemblen\" en lugar de bombear. La sangre se estanca (estasis venoso) en un saco del corazón llamado Orejuela Izquierda y se forman enormes coágulos. Cuando uno de esos coágulos se dispara, viaja directo al cerebro causando un Accidente Cerebrovascular (ACV o Derrame Cerebral) isquémico masivo devastador (primera causa de ACV embólico en el mundo). Para saber quién necesita protección, usamos la escala de riesgo **CHA2DS2-VASc**.\n- Un puntaje de **0 en hombres** o **1 en mujeres** = No requiere terapia.\n- Un puntaje de **≥ 2 en hombres** o **≥ 3 en mujeres** = **INDICACIÓN ABSOLUTA DE ANTICOAGULACIÓN ORAL CRÓNICA**.\nEl paciente tiene 3 puntos. OBLIGATORIAMENTE debe salir de urgencias con una receta de un Anticoagulante Oral de Acción Directa (**DOACs**, como Apixabán, Rivaroxabán o Dabigatrán, preferidos sobre la Warfarina por menor riesgo de sangrado cerebral y no requerir controles de INR), o en su defecto, Warfarina si hay limitación económica o estenosis mitral reumática.\n\n**TRAMPA DEL EXAMEN:** El espejismo de la Aspirina: Si el paciente te cuenta que solo \"toma una aspirina para el corazón\", el examinador está esperando que le grites \"¡Esa aspirina es agua bendita, lo va a matar un ACV igual!\". Las guías jubilaron a la Aspirina en FA. Solo los Anticoagulantes previenen la tragedia embólica del trombo rojo fibrinoso de la aurícula.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., las aurículas del corazón de este abuelo no están latiendo, están \"temblando\" como un flan mal batido (fibrilando). Esa vibración hace que la sangre se apose y se coagule en un rincón de la aurícula izquierda formando un coágulo gigante de gelatina roja y negra. Cualquier día de estos, mientras él tose o puja en el baño, ese coágulo se despegará, saldrá volando por la Aorta y taponará la Arteria Cerebral Media de su cerebro, dejándolo mudo y paralizado de medio lado en su propia cama. Tienes que afinarle la sangre con un anticoagulante fuerte (como Apixabán) todos los días para disolver esa amenaza. Dale el medicamento y él seguirá caminando por el parque hasta los 90 años.",
    keyPoints: [
      "Fibrilación Auricular (Ausencia de P + R-R Irregular):",
      "La meta profiláctica principal es prevenir el ACV Isquémico Embólico.",
      "Si CHA2DS2-VASc ≥ 2 en Hombres (o ≥ 3 en Mujeres): Iniciar Anticoagulación Oral (DOACs de elección, o Warfarina).",
      "(La Aspirina está PROSCRITA como monoterapia preventiva para tromboembólica en FA)."
    ]
  },
  {
    id: "umng-conv-ed4-18",
    university: "UMNG",
    examArea: "CIRUGÍA GENERAL",
    topic: "GASTROENTEROLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un hombre de 60 años, alcohólico en rehabilitación y diagnosticado con colelitiasis (cálculos en la vesícula), se presenta en el box de reanimación traído en ambulancia por sus vecinos. El cuadro inició hace 24 horas con dolor en hipocondrio derecho y fiebre, pero en las últimas 4 horas sufrió un deterioro brutal. Al ingreso, usted lo encuentra francamente somnoliento y confuso, y su piel presenta una marcada ictericia generalizada (Piel y ojos amarillos). Signos vitales críticos: PA de 75/40 mmHg, FC de 135 lpm, Fiebre de 40.2°C, FR de 28 rpm. Los laboratorios de choque muestran Leucocitosis de 25.000, Bilirrubina Total de 8 mg/dL a predominio directo, y aumento de fosfatasa alcalina y lactato en 5 mmol/L. Usted activa protocolo de sepsis. ¿Cuál es el diagnóstico sindrómico exacto respaldado por esta conjunción letal de 5 síntomas y el tratamiento quirúrgico urgente de descompresión de las vías biliares que le salvará la vida?",
    options: [
      { id: "A", label: "A", text: "Colecistitis Aguda Enfisematosa / Colecistectomía laparoscópica de urgencia inmediata en 1 hora." },
      { id: "B", label: "B", text: "Colangitis Aguda Supurativa Severa (Pentada de Reynolds) / Drenaje Biliar Urgente mediante CPRE o Drenaje Percutáneo Transhepático (CTPH)." },
      { id: "C", label: "C", text: "Absceso Hepático Amebiano Roto / Drenaje quirúrgico abierto del lóbulo derecho y metronidazol a dosis plenas." },
      { id: "D", label: "D", text: "Pancreatitis Aguda Biliar con necrosis infectada / Necrosectomía pancreática directa." }
    ],
    correctOptionId: "B",
    explanation: "Una de las piedras de la vesícula se escapó y tapó la salida principal del hígado, el conducto **Colédoco** (Coledocolitiasis). La bilis se estancó hacia arriba. Al no fluir la bilis, las bacterias del intestino subieron por el conducto y formaron pus. Ahora los conductos biliares del hígado son túneles a presión llenos de pus puro (Colangitis). La clínica inicial era la **Tríada de Charcot (Dolor + Ictericia + Fiebre)**. Pero al taparse más, el pus pasó a alta presión hacia las venas del hígado de forma retrógrada, inundando la sangre del paciente de miles de millones de enterobacterias. Esto desató un Choque Séptico severo (caída de PA a 75/40) y Encefalopatía (confusión). Esto suma los 5 signos letales: la **Péntada de Reynolds**, señal de mortalidad masiva inminente. El tratamiento antibiótico (Carbapenémicos o Pip-Tazo) es vital, PERO NO SIRVE DE NADA si el conducto sigue tapado de pus. La conducta salvavidas es el **DRENAJE BILIAR DE URGENCIA**. Típicamente se baja al endoscopista para que haga una Colangiopancreatografía Retrógrada Endoscópica (**CPRE**) que saque el cálculo desde el duodeno, o si no, el radiólogo clava un drenaje por la piel del hígado (Percutáneo Transhepático).\n\n**TRAMPA DEL EXAMEN:** Tratamiento de la Vesícula: En este caso el problema NO ES LA VESÍCULA, el problema es el TUBO PRINCIPAL (el colédoco). Si entras a cirugía a quitar la vesícula, el tubo seguirá lleno de pus y la persona morirá. Se destapa el tubo por abajo (CPRE) y si el abuelo revive y sobrevive unos días, ahí sí le quitan la vesícula fría y con calma (Colecistectomía diferida).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., tu paciente tiene un volcán de pus bajo presión a punto de hacer erupción dentro de su hígado. Una piedra bloqueó la cañería de la bilis, y todo el pus asqueroso está \"dando reversa\" para meterse directamente por las venas hepáticas hacia su cerebro y su corazón (por eso el choque y el delirio mental de hoy). La Tríada de Charcot era la alerta amarilla de ayer; la Péntada de Reynolds es el código negro de hoy, anunciándote que la septicemia ya ganó. Cuelga un antibiótico masivo (Piperacilina-Tazobactam), y dile al especialista endoscopista gastroenterólogo que saque la manguera y baje al estómago del paciente a destapar ese tubo (CPRE), o ese hombre no llegará a ver el amanecer por falla multiorgánica.",
    keyPoints: [
      "Tríada de Charcot: Dolor Hipocondrio Derecho + Ictericia + Fiebre (Colangitis).",
      "Péntada de Reynolds: Charcot + Hipotensión + Confusión Mental.",
      "Manejo Agudo: Antibióticos + DRENAJE BILIAR URGENTE (CPRE o Percutáneo)."
    ]
  },
  {
    id: "umng-conv-ed4-19",
    university: "UMNG",
    examArea: "INFECTOLOGÍA",
    topic: "NEUROLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un hombre de 40 años, habitante de calle con diagnóstico conocido de infección por VIH en etapa SIDA y pésima adherencia al tratamiento antirretroviral, es encontrado estuporoso en un parque y traído a urgencias. A la exploración física, el paciente presenta somnolencia profunda, rigidez de nuca franca (Signos de Brudzinski y Kernig positivos) y cefalea intensa a los escasos momentos de vigilia. No se aprecian lesiones en anillo (toxoplasmosis) en la Tomografía de Cráneo Simple, pero sí leve borramiento de los surcos. Ante la sospecha de meningoencefalitis, usted procede a realizar una Punción Lumbar. Al introducir el trocar, el Líquido Cefalorraquídeo (LCR) sale a borbotones disparado a altísima presión (Presión de Apertura de 350 mmH2O). El citoquímico muestra hipoglucorraquia y escasos linfocitos. Usted pide que el líquido se envíe al laboratorio urgentemente y pide a la bacterióloga que le adicione \"Tinta China\" (India Ink) a una placa al microscopio, revelando unas levaduras encapsuladas rodeadas por un halo brillante o transparente ancho. ¿Cuál es el diagnóstico, y cuál es la terapia antifúngica INICIAL INTENSIVA combinada de primera línea para esta infección?",
    options: [
      { id: "A", label: "A", text: "Histoplasmosis cerebral meningea / Itraconazol altas dosis vía oral." },
      { id: "B", label: "B", text: "Meningitis por Cryptococcus neoformans / Anfotericina B Liposomal + Flucitosina." },
      { id: "C", label: "C", text: "Toxoplasmosis del SNC difusa / Pirimetamina + Sulfadiazina + Ácido Folínico." },
      { id: "D", label: "D", text: "Meningitis Bacteriana aguda por Neumococo / Ceftriaxona + Vancomicina." }
    ],
    correctOptionId: "B",
    explanation: "El hongo Cryptococcus neoformans vive feliz en el guano (heces) de las palomas de la ciudad. El habitante de calle con SIDA lo inhala; el hongo burla las defensas de los pulmones porque tiene una \"cápsula gruesa de mucopolisacáridos\" que lo hace invencible. El hongo viaja por la sangre y se pega a las meninges del cerebro. Una característica patognomónica de este hongo es que tapona las vellosidades que absorben el LCR; esto hace que la cabeza del paciente se llene de líquido sin escape, produciendo una Hipertensión Intracraneal mortal (Presiones de apertura por las nubes en la punción lumbar, que pueden enclavar al paciente). Para diagnosticarlo rápido antes del cultivo, se pone una gota de Tinta China en el LCR; la tinta tiñe todo el líquido de negro, pero NO puede entrar a la cápsula gigante del Criptococo, viéndose al microscopio como unas esferas brillantes transparentes (halos). El tratamiento inicial o fase de inducción exige artillería pesada venosa combinada: Anfotericina B Liposomal + Flucitosina (por 2 semanas), para esterilizar el LCR, y lo MÁS IMPORTANTE, se deben hacer \"punciones lumbares evacuatorias repetidas\" (sacar 20 a 30 cc de líquido con aguja de la columna todos los días) para bajar la presión y que el paciente no quede ciego ni haga paro respiratorio.\n\n**TRAMPA DEL EXAMEN:** Antifúngico suave vs pesado: Fluconazol SE USA, pero es la fase de Mantenimiento/Consolidación a las semanas después de salvar la vida. La TRAMPA es ponerte en las opciones Fluconazol para la primera semana. En meningitis criptocócica aguda, dar pastillas de fluconazol al principio no alcanza las dosis fungicidas para esterilizar el cerebro de la cápsula gruesa; debes quemarlo con Anfotericina B primero.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., cuando le metas la aguja por la columna a este indigente, vas a ver que el líquido cefalorraquídeo no \"gotea\", sino que salta en forma de chorro violento ensuciando las baldosas. El cerebro de este paciente está flotando apretado y a punto de herniarse. Las heces de las palomas del parque le regalaron un hongo que hizo nido en sus meninges. La cápsula gelatinosa del Criptococo repele a la \"Tinta China\" bajo el microscopio, formando hermosas perlas de luz en un mar oscuro. Es poético, pero letal. Cuélgale una bomba de Anfotericina B IV para derretirle las paredes al hongo, y métele la aguja en la columna cada 24 horas sacando 30 centímetros de líquido para aliviarle el dolor de cabeza aplastante.",
    keyPoints: [
      "Meningitis en SIDA + Presión de LCR muy alta + Tinta China (+) = Cryptococcus neoformans.",
      "Fase Inducción (Aguda): Anfotericina B Liposomal + Flucitosina (14 días).",
      "Fase Consolidación/Mantenimiento: Fluconazol (Vía oral meses después).",
      "(Y manejo de HTE con Punciones lumbares evacuatorias seriadas)."
    ]
  },
  {
    id: "umng-conv-ed4-20",
    university: "UMNG",
    examArea: "ÉTICA MÉDICA Y LEGAL",
    topic: "URGENCIAS QUIRÚRGICAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un hombre de 45 años, sin familia presente, es llevado en ambulancia al servicio de urgencias del hospital luego de sufrir un accidente de tránsito frontal masivo en la carretera. Ingresa en estado de choque hipovolémico grado IV secundario a un estallido esplénico severo (Bazo roto). Su Presión Arterial es de 50/30 mmHg y tiene pulso filiforme. El cirujano general de turno indica la necesidad urgente de una Laparotomía de Rescate y un Protocolo de Transfusión Masiva para salvar su vida. En ese instante, el paciente que está semi-consciente por escasos segundos, le agarra a usted del brazo y saca con su otra mano del bolsillo de su camisa una tarjeta plástica oficial que dice: \"Soy Testigo de Jehová y por mis profundas convicciones religiosas, prohíbo estrictamente la transfusión de sangre, glóbulos rojos o plaquetas bajo cualquier circunstancia vital, incluso si mi vida corre peligro\". Tras entregar la tarjeta, el paciente pierde el conocimiento y cae en coma. De acuerdo a las Leyes de Bioética y los fallos Constitucionales en adultos competentes en Colombia, ¿cuál debe ser su proceder jurídico y médico en los próximos 10 minutos de reanimación?",
    options: [
      { id: "A", label: "A", text: "Transfundir obligatoriamente los hemoderivados amparado en el estado de coma e inconsciencia, aduciendo la Doctrina de Emergencia Médica Implícita para salvaguardar la vida." },
      { id: "B", label: "B", text: "Respetar la voluntad anticipada del paciente documentada en la tarjeta y denegar la transfusión de sangre o hemoderivados, utilizando exclusivamente reanimación con cristaloides y volumen sin células, aunque el pronóstico sea fatal." },
      { id: "C", label: "C", text: "Llamar al departamento de trabajo social y a un fiscal de turno de inmediato para solicitar la anulación de su autonomía debido a su condición psiquiátrica de choque traumático." },
      { id: "D", label: "D", text: "Transfundir a la fuerza aduciendo el juramento hipocrático de Beneficencia, ya que los documentos religiosos sin firma de un notario presente no tienen validez legal médica en una sala de trauma." }
    ],
    correctOptionId: "B",
    explanation: "En el mundo de la ética médica, el principio de Autonomía de un adulto libre de coacción derrota al principio de Beneficencia (el deseo del médico de hacer el bien). Un adulto en Colombia (Testigo de Jehová) tiene derecho a rechazar tratamientos que vayan en contra de su fe o su concepción de dignidad, INCLUSO SI ESE RECHAZO LE CAUSA LA MUERTE. La Tarjeta de Instrucciones Médicas que ellos cargan es un Documento de Voluntad Anticipada válido (Corte Constitucional T-618/12 y otras). Si el paciente cae en coma después de haber expresado su decisión clara, la decisión se mantiene firme e inquebrantable. Tu deber como médico es llevarlo al quirófano a operar su bazo (porque de pronto sobrevive), e inflar sus venas de Solución Salina, Lactato de Ringer, o ácido tranexámico. Pero si su hemoglobina cae a cero y muere en la camilla por falta de glóbulos rojos, el médico NO comete homicidio. El médico solo cumplió con el mandato de no vulnerar el cuerpo del paciente contra su fe.\n\n**TRAMPA DEL EXAMEN:** Mimetismo legal Niños vs Adultos: La trampa mortal que tumba a los residentes en los exámenes éticos.\n- Testigo de Jehová adulto (o mayor de edad de facto maduro) -> NO se transfunde, se respeta autonomía, muere bajo su ley.\n- Niño (3 años) con Papás Testigos de Jehová que dicen que no -> SE TRANSFUNDE A LA FUERZA y llamen a la policía si protestan. (El Estado protege la vida de los niños sobre la religión de los padres).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., esta es la prueba ácida donde tus principios como curador chocan contra los derechos humanos. Tu instinto te grita que colgues dos bolsas de sangre y le devuelvas el color a la cara del paciente mientras él duerme plácidamente anestesiado. Pero debes ponerle una correa a tus manos. Para este paciente, inyectarle sangre de otro ser humano es una condena al infierno y una agresión peor que la violación. Al mostrarte el papel, te quitó la cruz de su muerte de tus hombros médicos. Llévalo a quirófano, haz hemostasia como un maestro con electrobisturí, y usa cada truco de volumen a base de cristaloides que conozcas. Si la vida de su cuerpo claudica, habrás sido un gran cirujano, pero sobre todo, habrás sido un médico íntegro que protegió la soberanía del alma de ese paciente en su último aliento.",
    keyPoints: [
      "Rechazo de transfusión (Testigo de Jehová):",
      "En Adultos conscientes (o con Documento Anticipado/Tarjeta): El derecho a la Autonomía y Libre Desarrollo/Religión prima. Se debe RESPETAR LA NEGATIVA, así el pronóstico sea fatal. No se puede transfundir contra su voluntad.",
      "(Si el paciente llega solo en coma desde el principio y tú NO SABES que es Testigo, actúas por beneficencia y lo transfunde; pero aquí él avisó y mostró el papel)."
    ]
  }
];
