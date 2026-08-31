import type { TrainingQuestion } from "@/lib/questions/types";

export const UMNG_CONV_ED4_21_30_QUESTIONS: TrainingQuestion[] = [
  {
    id: "umng-conv-ed4-21",
    university: "UMNG",
    examArea: "PEDIATRÍA",
    topic: "INFECTOLOGÍA RESPIRATORIA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un niño de 3 años es traído a urgencias a las 2:00 AM por presentar dificultad respiratoria severa, fiebre de 39.5°C y una tos \"perruna\" (metálica). A su ingreso, el niño luce francamente tóxico, pálido, y presenta estridor inspiratorio y espiratorio ruidoso en reposo. Pensando en un cuadro clásico de Laringotraqueítis viral (Crup), usted administra de inmediato Dexametasona intramuscular y una nebulización con Adrenalina Racémica. Sin embargo, a los 30 minutos, el paciente NO presenta ninguna mejoría, su aspecto tóxico empeora y expectora una secreción espesa, verdosa y francamente purulenta. ¿Cuál es el diagnóstico clínico que simula un Crup pero que representa una emergencia bacteriana potencialmente mortal en este niño?",
    options: [
      { id: "A", label: "A", text: "Epiglotitis Aguda por Haemophilus influenzae." },
      { id: "B", label: "B", text: "Traqueítis Bacteriana Aguda (Crup membranoso)." },
      { id: "C", label: "C", text: "Aspiración de cuerpo extraño orgánico." },
      { id: "D", label: "D", text: "Absceso retrofaríngeo con extensión mediastínica." }
    ],
    correctOptionId: "B",
    explanation: "La **Traqueítis Bacteriana Aguda** es una infección grave de la tráquea que usualmente ocurre como una sobreinfección de un Crup viral previo. El patógeno número uno es el ***Staphylococcus aureus***. El niño empieza con tos de foca, pero se pone gravísimo, febril y tóxico. La bacteria crea unas \"membranas\" de pus espeso y costras dentro de la tráquea. Cuando tú le das Adrenalina Racémica, las arterias se contraen, pero **las membranas de pus no desaparecen**, por lo tanto, la obstrucción mecánica continúa y el niño NO mejora (esta falta de respuesta a la adrenalina es la pista maestra del examen). Si no lo pasas a Quirófano/UCI para hacerle una endoscopia/broncoscopia (que retira las membranas y permite intubar) y no le inicias Oxacilina/Vancomicina + Ceftriaxona, el niño hará un paro respiratorio por obstrucción de moco purulento.\n\n**TRAMPA DEL EXAMEN:** Mimetismo Viral vs Bacteriano: Todo estridor con tos de foca grita \"Crup Viral\". El examinador te permite creerlo en el primer renglón, y luego te demuestra que tu tratamiento falló para obligarte a pensar en el estafilococo.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., si ves a un niño con \"Crup\" que luce como si lo hubiera atropellado un camión, pálido, ojeroso, sudando fiebre y escupiendo flemas verdes espesas, no te confíes del vaporcito de la adrenalina. La tráquea de este niño está tapizada por dentro con una costra de pus pegajosa. La adrenalina desinflama la carne, pero no disuelve el pus. Ese tapón de mocos verdes se le va a atorar en las cuerdas vocales en la próxima hora y se ahogará. Consigue a un anestesiólogo pediátrico o al otorrino para que bajen un tubo, barran la costra y le pongan la artillería antibiótica pesada contra el estafilococo dorado.",
    keyPoints: [
      "Tos perruna + Estridor + Aspecto TÓXICO/Fiebre Alta + Falla al tratamiento con Adrenalina Racémica = Traqueítis Bacteriana Aguda.",
      "Agente principal: S. aureus.",
      "Manejo de vía aérea en quirófano o UCI + Antibióticos IV."
    ]
  },
  {
    id: "umng-conv-ed4-22",
    university: "UMNG",
    examArea: "MEDICINA INTERNA",
    topic: "NEFROLOGÍA Y NEUROLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un hombre de 55 años, con antecedente de alcoholismo crónico y desnutrición, ingresa a urgencias en estado de estupor, letargia severa y convulsiones focales. Los laboratorios de ingreso revelan una Hiponatremia crítica con un Sodio sérico de 110 mEq/L. El residente de turno, asustado por el riesgo de edema cerebral, decide administrar de inmediato múltiples bolos de Solución Salina Hipertónica al 3% de manera rápida, logrando subir el sodio sérico del paciente a 128 mEq/L en las primeras 12 horas. Al día siguiente, el paciente despierta transitoriamente, pero en las siguientes 48 horas presenta un deterioro neurológico aterrador: desarrolla parálisis flácida de las 4 extremidades (cuadriplejía), imposibilidad para hablar (anartria) y tragar (disfagia), quedando completamente paralizado, pero manteniendo el estado de conciencia intacto y comunicándose únicamente con movimientos verticales de los ojos. ¿Cuál fue la catástrofe iatrogénica irreversible causada por la corrección rápida de los líquidos en urgencias?",
    options: [
      { id: "A", label: "A", text: "Síndrome de Wernicke-Korsakoff fulminante por depleción de Tiamina." },
      { id: "B", label: "B", text: "Síndrome de Desmielinización Osmótica (Mielinolisis Pontina Central)." },
      { id: "C", label: "C", text: "Edema Cerebral con herniación amigdalina aguda." },
      { id: "D", label: "D", text: "Infarto isquémico agudo de la arteria cerebral media bilateral." }
    ],
    correctOptionId: "B",
    explanation: "El cerebro del paciente alcohólico llevaba semanas o meses acostumbrado a un mar diluido (Sodio en 110). Para sobrevivir, sus neuronas botaron todos sus osmolitos protectores hacia afuera para no hincharse y estallar. Si el médico llega a urgencias e inyecta toneladas de sal rápidamente (Sodio subió 18 puntos en 12 horas), la sangre se vuelve súper salada de golpe. Por ósmosis, la sangre \"chupa\" y exprime violentamente toda el agua del interior de las células del cerebro del paciente, secándolas como pasas de un segundo a otro. Esta deshidratación brutal destruye y \"despega\" la vaina de mielina de los nervios de la parte más densa del tallo cerebral: **La Protuberancia (Puente de Varolio)**. El daño corta todos los cables motores que bajan al cuerpo (causando **cuadriplejía y parálisis bulbar**), pero las vías que van a la corteza cerebral quedan intactas. El paciente queda atrapado vivo dentro de su propio cadáver, solo pudiendo mover los ojos hacia arriba (**Síndrome de Enclaustramiento**). Es una iatrogenia imperdonable y sin cura. La regla de oro es: **NO corregir el sodio más de 8 a 10 mEq/L en las primeras 24 horas**.\n\n**TRAMPA DEL EXAMEN:** Agua que entra vs Agua que sale:\n- Corregir el sodio BAJO muy RÁPIDO = Destruye la mielina del puente (Mielinolisis Pontina Central / Deshidratación neuronal).\n- Corregir el sodio ALTO muy RÁPIDO = Hincha el cerebro (Edema Cerebral / Sobrehidratación neuronal).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., te acabas de ganar la demanda civil más grande de la historia de la medicina. Salvaste el número del laboratorio, pero secaste el cerebro de este hombre. Al clavarle sal hipertónica a chorro libre a un alcohólico desnutrido, le deshidrataste el tallo cerebral hasta el punto de que los cables de sus nervios perdieron su aislamiento (mielina). El paciente hoy está acostado en su cama, completamente lúcido, escucha lo que le dices, entiende su diagnóstico, pero la señal de su cerebro no llega a sus brazos, piernas ni a su lengua. Su cuerpo es una prisión de carne. Para no cometer esta tragedia, nunca pases de 8 punticos de corrección de sodio en todo tu turno de 24 horas. ¡La paciencia es la madre de la neurología!",
    keyPoints: [
      "Hiponatremia Severa (Sodio < 120). Regla de Corrección Segura:",
      "Límite MÁXIMO: Subir solo 8 mEq/L en las primeras 24 horas (Manejo con bolos lentos).",
      "Consecuencia trágica de corrección rápida: Mielinolisis Pontina Central (Síndrome de Enclaustramiento o Locked-in)."
    ]
  },
  {
    id: "umng-conv-ed4-23",
    university: "UMNG",
    examArea: "CARDIOLOGÍA",
    topic: "CIRUGÍA CARDIOVASCULAR",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un hombre de 62 años, hipertenso no controlado y tabaquista, ingresa a urgencias llevado por su esposa, refiriendo un dolor torácico lacerante y \"desgarrador\" de instauración instantánea (como un \"hachazo\" en el pecho), que se irradia fuertemente a la zona interescapular en la espalda. El paciente luce angustiado, pálido y sudoroso. Al examen físico, PA en brazo derecho 180/100 mmHg, PA en brazo izquierdo 110/60 mmHg (asimetría franca de pulsos). Usted realiza rápidamente un Electrocardiograma (ECG) que revela un Supradesnivel del segmento ST de 4 mm en las derivaciones II, III y aVF. Llama al cardiólogo de turno solicitando autorización para iniciar Trombólisis intravenosa inmediata por un Infarto Agudo de Miocardio (IAMCEST Inferior). ¿Cuál es la sospecha anatómica letal que el cardiólogo vio en este paciente que CONTRAINDICA DE FORMA ABSOLUTA LA TROMBÓLISIS y qué examen de imagen confirmatorio se debe solicitar urgente?",
    options: [
      { id: "A", label: "A", text: "Ruptura de músculo papilar inferior con insuficiencia mitral aguda / Ecocardiograma Transtorácico de urgencia." },
      { id: "B", label: "B", text: "Disección Aórtica tipo A de Stanford que afecta el ostium de la Coronaria Derecha / Angio-TAC de Tórax (o Eco Transesofágico)." },
      { id: "C", label: "C", text: "Taponamiento cardíaco por infarto de ventrículo derecho masivo / Radiografía de tórax portátil." },
      { id: "D", label: "D", text: "Pericarditis aguda simulando un infarto / Resonancia Magnética Cardíaca." }
    ],
    correctOptionId: "B",
    explanation: "El paciente sufrió una **Disección Aórtica** (la capa interna de la aorta se rasgó, y la sangre a presión de 180 mmHg se metió creando un falso lumen, pelando la arteria por dentro). Al rasgar la aorta ascendente (**Tipo A de Stanford**), el falso lumen progresó, comprimió la arteria subclavia izquierda (causando la asimetría de presión en los brazos) y luego descendió hasta el origen (\"ostium\") de la **Arteria Coronaria Derecha**, taponándola. El ECG muestra, lógicamente, un Infarto Inferior real (porque la coronaria derecha está tapada y la pared inferior muere). Si tú, de forma mecánica, ves el ECG y le inyectas **Trombolíticos (Alteplasa) o Heparina plena**, disolverás el único coágulo que está evitando que la aorta estalle por completo. El paciente se desangrará en el tórax en 30 segundos. Si sospechas este cuadro mixto, el paso diagnóstico de ORO es detener toda anticoagulación y hacer una **Angio-TC de Tórax o Eco Transesofágico** de inmediato, y enviarlo a Cirugía de Tórax Abierto urgente (No a sala de hemodinamia percutánea).\n\n**TRAMPA DEL EXAMEN:** El electrocardiograma es ciego: El ECG te muestra la consecuencia (falta de sangre), no la causa original (pared aórtica rota). Una asimetría de presión > 20 mmHg entre los brazos en un paciente infartado DEBE detener cualquier infusión de heparina o trombolítico hasta que le mires la aorta.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., tu paciente acaba de sentir cómo la tela de su arteria Aorta se rompió por dentro desde el corazón hasta el estómago, pelándola como una cáscara de plátano. La sangre falsa apachurró la salida de su arteria coronaria derecha, infartando la parte inferior de su corazón. El electro te grita \"¡Es un infarto!\", pero el tensiómetro te susurra \"¡Es una aorta rota!\". Si en tu afán por abrir la coronaria, pides la jeringa de Trombolíticos pesados (Alteplasa) y se los pasas por la vena, la aorta rasgada perderá cualquier freno hemostático de plaquetas y reventará su pared externa, vaciando los cinco litros de sangre de su cuerpo directamente en la cavidad torácica en un solo latido. Congela a ese paciente, bájele la presión a 110 con Esmolol por vena y entregue ese desastre vivo al cirujano cardiovascular.",
    keyPoints: [
      "Dolor Torácico \"desgarrador\" hacia la espalda + Asimetría de Pulsos/Presión en los brazos = Disección Aórtica.",
      "Si asocia un IAMCEST (especialmente INFERIOR): La disección taponó la Coronaria Derecha.",
      "CONTRAINDICACIÓN ABSOLUTA: Trombolíticos y Anticoagulación Plena. (Manejo: Angio-TC y Quirófano cardiovascular de inmediato con control de presión y frecuencia)."
    ]
  },
  {
    id: "umng-conv-ed4-24",
    university: "UMNG",
    examArea: "TRAUMA",
    topic: "ORTOPEDIA Y VASCULAR",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un obrero de construcción de 30 años es ingresado a ortopedia tras sufrir una fractura diafisiaria de la tibia izquierda tratada mediante inmovilización cerrada con un yeso circunferencial hace 8 horas. El paciente toca desesperadamente el timbre, quejándose de un dolor atroz, insoportable en la pantorrilla izquierda, el cual cataloga como \"peor que el momento en que me fracturé\" y que no responde en absoluto a los analgésicos opioides (Morfina). Al evaluar el miembro inmovilizado, usted observa que los dedos del pie asoman ligeramente cianóticos y fríos. Para diferenciar si el paciente cursa con un Síndrome Compartimental Agudo inminente, ¿cuál es el signo semiológico temprano MÁS SENSIBLE que usted debe evaluar obligatoriamente antes de palpar los pulsos distales?",
    options: [
      { id: "A", label: "A", text: "La desaparición total de los pulsos pedio y tibial posterior a la palpación." },
      { id: "B", label: "B", text: "La aparición de parálisis motora completa (pie caído) y arreflexia." },
      { id: "C", label: "C", text: "El dolor agudísimo, quemante y explosivo al realizar el estiramiento PASIVO de los dedos del pie hacia la dorsiflexión." },
      { id: "D", label: "D", text: "La pérdida de la sensibilidad vibratoria en el maléolo medial del pie izquierdo." }
    ],
    correctOptionId: "C",
    explanation: "El compartimento de la pierna es una caja de fascia que no se estira. Cuando el hueso sangra y se hincha dentro del yeso duro, la presión aumenta ahogando la microcirculación (capilares) del músculo. El músculo entra en isquemia celular e inflamación masiva. El hallazgo clínico más temprano, más sensible y patognomónico es el **Dolor al Estiramiento Pasivo**. Si tú tomas los dedos del pie del paciente y los estiras/halas despacio hacia arriba (estirando el músculo isquémico de la pantorrilla por reflejo), el paciente soltará un alarido de dolor explosivo. Ese músculo está ahogándose y al estirarlo grita. Ante esto, la conducta es romper el yeso inmediatamente hasta la piel (bivalvar) y, si no mejora en 30 minutos, llevar a **Fasciotomía de emergencia** en quirófano.\n\n**TRAMPA DEL EXAMEN:** El pulso mentiroso: El examinador adora la viñeta que dice \"el paciente llora de dolor pero el pulso pedio se siente fuerte\" para tentar a los internos a decirle: \"Señor, relájese, su pie está irrigado, tómese este acetaminofén\". Las arterias mayores resisten presiones muy altas, los capilares musculares mueren con presiones bajas. Pulso presente no descarta compartimental.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la pantorrilla de este hombre se convirtió en una olla a presión sin válvula de escape. La sangre y el líquido inflamatorio de la tibia rota llenaron la funda muscular, y el yeso de fibra de vidrio no deja que se expanda hacia afuera. Por lo tanto, la presión colapsó las venas diminutas del músculo. El músculo se está infartando y soltando ácido clorhídrico y mediadores de dolor. Tócale los dedos de los pies y dóblaselos suavemente; si el hombre pega un grito que se escucha hasta la puerta de la calle, trae las tijeras de cortar yeso ya mismo. No pierdas tiempo tocándole el pulso; la arteria tibial principal es como un tubo de acero que aguantará abierto mucho más tiempo, pero cuando se cierre, lo único que le quedará a este paciente será la amputación.",
    keyPoints: [
      "Síndrome Compartimental Agudo (Fractura tibial/Yeso):",
      "Síntoma cardinal: Dolor desproporcionado que no cede a opiáceos.",
      "Signo clínico TEMPRANO más sensible: Dolor al estiramiento PASIVO de los dedos/músculo.",
      "Signos TARDÍOS (ya irreversibles): Parálisis y Ausencia de Pulsos.",
      "Manejo urgente: Retirar vendas/yeso circunferencial completo -> Fasciotomía."
    ]
  },
  {
    id: "umng-conv-ed4-25",
    university: "UMNG",
    examArea: "ENDOCRINOLOGÍA",
    topic: "GASTROENTEROLOGÍA Y ONCOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Una mujer de 45 años, previamente sana, es remitida a la consulta externa por un cuadro insidioso de 6 meses de evolución caracterizado por episodios súbitos de \"oleadas de calor\", enrojecimiento facial severo (flushing) que dura varios minutos, seguido de dolor abdominal tipo cólico, sibilancias asmáticas ocasionales y diarrea acuosa explosiva crónica (5 a 8 veces al día). La paciente ha perdido 8 kg de peso. Usted realiza un examen físico exhaustivo y, al auscultar el área cardíaca, detecta un soplo sistólico focalizado en el borde esternal izquierdo que se incrementa con la inspiración, sugestivo de Insuficiencia Tricuspídea. ¿Cuál es la prueba bioquímica no invasiva, que se toma en orina de 24 horas, que diagnostica el síndrome neoplásico subyacente y cuál es la terapia sintomática farmacológica de primera línea?",
    options: [
      { id: "A", label: "A", text: "Catecolaminas y metanefrinas fraccionadas en orina / Iniciar bloqueo alfa con Prazosina." },
      { id: "B", label: "B", text: "Ácido vainillilmandélico (VMA) en orina / Iniciar terapia con análogos de la somatostatina." },
      { id: "C", label: "C", text: "Ácido 5-hidroxiindolacético (5-HIAA) en orina / Tratamiento con análogos de la somatostatina (Octreotida o Lanreotida)." },
      { id: "D", label: "D", text: "Cromogranina A en suero y ácido úrico / Miotomía y corticoides diarios." }
    ],
    correctOptionId: "C",
    explanation: "Los **Tumores Carcinoides** son masas neuroendocrinas malignas o de bajo grado que nacen típicamente en el intestino delgado (íleon) o apéndice. Producen toneladas de sustancias químicas vasoactivas, principalmente **SEROTONINA**, histamina y bradicinina. (Perla de oro: El síndrome carcinoide ocurre ÚNICAMENTE cuando el tumor del intestino hace metástasis al HÍGADO, porque el hígado sano destruye la serotonina antes de que llegue a la sangre. Si hay síntomas, hay tumor en el hígado). La serotonina en la sangre causa enrojecimiento de la cara (*Flushing*), mueve los intestinos violentamente (*Diarrea acuosa crónica*) y cierra los bronquios (*Sibilancias*). Además, al pasar por el corazón, la serotonina actúa como un veneno que fibrosa y daña el revestimiento de las válvulas cardíacas **DERECHAS (Tricúspide y Pulmonar)**, porque el pulmón destruye la serotonina, salvando al corazón izquierdo. La serotonina se degrada en el cuerpo y se elimina por el riñón como **Ácido 5-hidroxiindolacético (5-HIAA)**. Medirlo en orina de 24h confirma el diagnóstico de oro. Para silenciar la diarrea y el enrojecimiento, se administra la droga maravilla endocrina: **Octreotida o Lanreotida** (Análogos de Somatostatina que \"cierran el grifo\" de los tumores neuroendocrinos).\n\n**TRAMPA DEL EXAMEN:** Lado izquierdo vs Lado derecho: El Síndrome Carcinoide destruye las válvulas del lado DERECHO del corazón. Las válvulas izquierdas (Mitral y Aórtica) están sanas porque la sangre pasa primero por los pulmones, donde la enzima MAO destruye toda la serotonina del tumor. Si el corazón está dañado a la izquierda, no es carcinoide de hígado.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., tu paciente tiene un nido de células mutantes del intestino viviendo en su hígado y bombardeando sus venas de serotonina y bradicinina. Esa sobredosis química en la sangre le hierve la piel de la cara como un tomate, acelera sus tripas obligándola a ir al baño 8 veces al día, y con el paso de los años le engrosó y cicatrizó la puerta de la válvula tricúspide como si la hubieran quemado con ácido. Recoge su orina de todo un día en un frasco para medir el \"cadáver\" de la serotonina (5-HIAA), pide la tomografía del hígado para confirmar los tumores y pínchala con Octreotide. Esa medicina actuará como una llave cerrando los grifos químicos de las metástasis para que vuelva a vivir sin diarrea.",
    keyPoints: [
      "Tríada de Síndrome Carcinoide: Flushing (Rubor facial) + Diarrea + Sibilancias (Broncoespasmo).",
      "Daño cardíaco tardío: Valvulopatía derecha (Insuficiencia Tricuspídea).",
      "Diagnóstico en Orina: Elevación de Ácido 5-HIAA (5-hidroxiindolacético) en 24 horas.",
      "Tratamiento médico hormonal: Octreotida (Análogo Somatostatina)."
    ]
  },
  {
    id: "umng-conv-ed4-26",
    university: "UMNG",
    examArea: "TOXICOLOGÍA",
    topic: "MEDICINA DE URGENCIAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un paciente indigente de 45 años es traído a urgencias a la 1:00 AM tras ser encontrado en la calle bebiendo de un envase plástico sin etiqueta que contenía un licor artesanal casero destilado ilegalmente (\"Guaro\" o licor adulterado). Al ingreso, el paciente se queja de un intenso dolor abdominal y cefalea. Durante la entrevista, el paciente refiere estar viendo un patrón extraño en sus ojos, manifestando: \"Doctor, no veo bien su cara, siento como si estuviera cayendo una fuerte tormenta de nieve blanca frente a mí\". Sus signos vitales son estables, pero los gases arteriales demuestran una acidosis metabólica severa con un Anión Gap francamente elevado de 32 mEq/L, sin aumento de lactato. Conociendo el perfil patognomónico oftalmológico de esta intoxicación y antes de que se instaure la ceguera permanente o la muerte, ¿cuál es el diagnóstico tóxico exacto y el tratamiento ANTÍDOTO de elección?",
    options: [
      { id: "A", label: "A", text: "Intoxicación por Etilenglicol / Bicarbonato de Sodio y Fomepizol." },
      { id: "B", label: "B", text: "Intoxicación por Alcohol Isopropílico / Lavado Gástrico y Tiamina." },
      { id: "C", label: "C", text: "Intoxicación por Metanol (Alcohol metílico) / Fomepizol o Infusión de Etanol intravenoso." },
      { id: "D", label: "D", text: "Intoxicación por Plomo contenido en el alambique / Terapia quelante con Succímero o EDTA." }
    ],
    correctOptionId: "C",
    explanation: "El **Metanol (Alcohol de madera)** es el adulterante criminal barato para las bebidas destiladas clandestinas. El hígado absorbe el metanol y, usando la enzima Alcohol Deshidrogenasa (ADH), lo convierte en **ÁCIDO FÓRMICO** (la toxina de las hormigas rojas pero a niveles masivos). Este ácido destruye y oxida rápidamente las mitocondrias de la retina y el nervio óptico del paciente. La queja cardinal antes de quedar permanentemente ciego es la pérdida de la agudeza visual descrita poéticamente como \"estar mirando a través de una tormenta de nieve\" o neblina densa blanca. A nivel sistémico, el ácido fórmico baja el pH de la sangre a niveles letales (acidosis metabólica). El tratamiento es inyectar un \"distractor químico\": **Fomepizol** (bloqueador directo de la enzima) o **Etanol puro por vía intravenosa (o nasogástrica si no hay IV)**. Al darle Etanol (el alcohol bueno), la enzima ADH del hígado prefiere metabolizar al etanol y \"suelta\" al Metanol tóxico, permitiendo que el paciente orine el veneno intacto sin fabricar el ácido de la ceguera. Además se debe iniciar Hemodiálisis urgente para lavar la sangre ácida. (Dato coadyuvante: Se da Ácido Folínico/Ácido Fólico para ayudar a eliminar los metabolitos).\n\n**TRAMPA DEL EXAMEN:** Mnemotecnia visual oftalmológica: Siempre el Metanol se distingue por la vista. Las frases del tablero son \"ojos de neblina\", \"tormenta de nieve\", \"escotoma central\". No te quedes en que ambos alcoholes dan acidosis. Busca el órgano lesionado: Ojos = Metanol. Riñón = Etilenglicol.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., los fabricantes de guaro de tienda de esquina adulteran la botella con alcohol industrial de madera para que rinda más y sea más barato. Ese veneno es el Metanol. En las horas siguientes, su cuerpo convierte ese líquido en una tina de ácido corrosivo (fórmico) que ataca exclusivamente los cables del nervio de sus ojos. Esa \"nieve cayendo\" que ve el paciente es la estática del nervio óptico desconectándose del cerebro. Si no le ordenas al jefe de enfermería inyectar \"alcohol puro bueno\" (Etanol médico) para emborrachar a su hígado, o si no usas el antídoto Fomepizol, el paciente despertará mañana en la UCI totalmente sumergido en la oscuridad eterna, con ceguera irreversible.",
    keyPoints: [
      "Licor Adulterado + Visión en \"Tormenta de Nieve\" / Ceguera + Acidosis Metabólica (Gap Alto) = Intoxicación por METANOL.",
      "Toxina real: Ácido Fórmico (destruye el nervio óptico).",
      "Antídoto de Oro: Fomepizol (inhibidor de ADH) o en su defecto Etanol intravenoso, asociado a Hemodiálisis de urgencia."
    ]
  },
  {
    id: "umng-conv-ed4-27",
    university: "UMNG",
    examArea: "UROLOGÍA",
    topic: "PEDIATRÍA Y CIRUGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un adolescente masculino de 14 años se encuentra durmiendo en su casa cuando, a las 4:00 AM, es despertado de forma repentina por un dolor en el testículo derecho de intensidad brutal, desgarradora y explosiva (\"como una patada directa\"). Asiste a urgencias una hora después vomitando del dolor. A la exploración física, el niño camina inclinado hacia adelante de dolor, no hay fiebre ni flujo uretral. Al inspeccionar la región escrotal, usted documenta que el testículo derecho se encuentra retraído muy alto en la bolsa escrotal y en posición horizontal. El aspecto más determinante del examen físico neurológico muestra que, al estimular suave y repetidamente la cara interna superior del muslo derecho del paciente, el testículo NO asciende en absoluto (Reflejo Cremastérico abolido o AUSENTE). Ante esta emergencia gonadal inminente, ¿cuál es el paso diagnóstico OBLIGATORIO que debe realizar el clínico en los próximos minutos?",
    options: [
      { id: "A", label: "A", text: "Solicitar Uroanálisis y Urocultivo para descartar Epididimitis antes de contactar al cirujano." },
      { id: "B", label: "B", text: "Solicitar de manera urgente y rutinaria una Ecografía Doppler Testicular para confirmar isquemia y operar si es positiva." },
      { id: "C", label: "C", text: "Administrar analgésicos opioides potentes y prescribir antibióticos intravenosos empíricos para la Orquiepididimitis." },
      { id: "D", label: "D", text: "Contactar de inmediato a Urología o Cirugía General para la Exploración Quirúrgica del escroto en quirófano sin esperar resultados de ecografía." }
    ],
    correctOptionId: "D",
    explanation: "El testículo se retorció sobre su propio cordón espermático ahorcando a la arteria testicular (Deformidad genética en \"badajo de campana\" o bell-clapper). El testículo está siendo estrangulado vivo. Si abres el escroto (quirófano), lo destuerces (lo giras \"abriendo el libro\" de adentro hacia afuera) y le clavas 3 puntos de sutura al escroto para que no vuelva a girar (Orquidopexia bilateral siempre, operando también el sano por prevención), en la hora 2, salvarás su fertilidad y su testículo al 100%.\n\n**TRAMPA DEL EXAMEN:** El espejismo tecnológico: En la escuela de medicina te enseñan que \"El eco Doppler diagnostica la falta de flujo\". En la práctica clínica real y el examen de residencia, te ponen al radiólogo a dormir. Marcar Eco Doppler es matar la gónada. Operar a ciegas basándose en los reflejos salva al paciente.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., \"Tiempo es testículo\". Un adolescente que te despierta a las 4 AM vomitando porque le duele el testículo como si lo hubieran pateado no tiene una infección urinaria de la vejiga, tiene una soga al cuello de su arteria gonadal. Míralo y rasca la piel interna de su muslo; si el testículo no reacciona subiendo como un ascensor y se queda frío y estático abajo, esa gónada está muriendo isquémicamente por falta de oxígeno y sangre. Si te pones a llamar al técnico de rayos X para llenar un papelito burocrático, firmaste la castración del joven en 4 horas. Despierta al urólogo y bajen al quirófano a desenredar ese cordón con sus propias manos.",
    keyPoints: [
      "Dolor Testicular EXPLOSIVO en joven/adolescente + Testículo Alto/Horizontal + REFLEJO CREMASTÉRICO AUSENTE = Torsión Testicular Verdadera.",
      "Conducta OBLIGATORIA: Exploración Quirúrgica Inmediata (< 6 horas).",
      "NO RETRASAR LA CIRUGÍA pidiendo una Ecografía Doppler si la clínica es muy alta."
    ]
  },
  {
    id: "umng-conv-ed4-28",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "URGENCIAS HEMORRÁGICAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Una mujer de 32 años (G3P3), sin antecedentes de trastornos hipertensivos ni coagulopatías previas, se encuentra en la sala de reanimación posparto. Hace 30 minutos finalizó su parto vaginal de un recién nacido macrosómico (4.800 gramos). El alumbramiento de la placenta fue espontáneo e íntegro. Súbitamente, la enfermera nota un lago de sangre en la cama de la paciente. A la revisión, usted constata una Hemorragia Posparto Temprana masiva. El útero se palpa por encima de la cicatriz umbilical, de consistencia completamente blanda y fofa (Útero \"leñoso\" o \"acartonado\" ausente, sin tono, pareciendo una masa de gelatina a la palpación profunda). No hay desgarros ni laceraciones evidentes en el cérvix a la revisión con espéculo. Usted inicia un masaje uterino bimanual vigoroso y se asegura de que el primer escalón farmacológico se infunda adecuadamente (Oxitocina IV a altas dosis). Sin embargo, el útero sigue flácido y el sangrado persiste. Como Segundo Escalón del manejo médico farmacológico, usted revisa los antecedentes de la paciente para administrar Metilergonovina o Análogos de prostaglandinas. Sabiendo que la paciente padece ASMA BRONQUIAL SEVERA crónica dependiente de esteroides, ¿qué uterotónico inyectable de segunda línea está ESTRICTAMENTE CONTRAINDICADO en esta paciente para no desencadenar un paro respiratorio?",
    options: [
      { id: "A", label: "A", text: "Carboprost Trometamina (Prostaglandina F2-alfa / Hemabate) inyección intramuscular o miometrial." },
      { id: "B", label: "B", text: "Metilergonovina (Methergin / Ergonovina) ampolla inyección intramuscular o endovenosa." },
      { id: "C", label: "C", text: "Misoprostol (Prostaglandina E1) comprimidos vía sublingual o intrarrectal." },
      { id: "D", label: "D", text: "Ácido Tranexámico ampolla intravenosa lenta (Antifibrinolítico)." }
    ],
    correctOptionId: "A",
    explanation: "El **Carboprost (Hemabate o Prostaglandina F2 alfa)** es un uterotónico poderosísimo inyectado intramuscularmente que obliga al útero a cerrarse como un puño de piedra en los casos donde la oxitocina falló. SIN EMBARGO, las Prostaglandinas F2 alfa tienen un tremendo efecto secundario sistémico: contraen con violencia al músculo liso de las vías respiratorias. Si tú le clavas esta inyección a una paciente **ASMÁTICA**, desatarás un **Broncoespasmo Masivo letal** refractario en la sala de partos. La mujer pasará de morir desangrada a morir ahogada y asfixiada frente a tus ojos en 5 minutos. Está ESTRICTAMENTE PROHIBIDO en pacientes con asma activa severa.\n\n**TRAMPA DEL EXAMEN:** Mnemotecnia farmaco-obstétrica mortal: En obstetricia siempre te pondrán a elegir entre los dos verdugos del segundo escalón de la atonía. Apréndetelo como la regla del diablo:\n- Hipertensa = **NO Ergonovina**.\n- Asmática = **NO Carboprost (PGF2a)**.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., esta joven dio a luz a un niño gigante de casi cinco kilos. El útero quedó tan estirado y cansado de empujar, que olvidó que tenía que encogerse para tapar los huecos venosos de la placenta caída. Si la oxitocina del goteo primario no logra despertar al músculo del útero, tienes que subir al siguiente nivel de ataque. Pero revisa su historia un segundo antes de romper la ampolla. Si le metes Hemabate (Prostaglandina F2a) a una asmática, los bronquios de sus pulmones se cerrarán con la misma fuerza que el útero. Ella dejará de sangrar, pero comenzará a pitar como una olla a presión y morirá por paro respiratorio de broncoespasmo. Dale las pastillas de Misoprostol o la ampolla de Metilergonovina, y el útero se cerrará dejando a sus pulmones sanos respirar en paz.",
    keyPoints: [
      "Tratamiento farmacológico de la Atonía Uterina:",
      "Escalón 1: Masaje + Oxitocina IV.",
      "Escalón 2 (Si paciente es asmática): Prohibido Carboprost (Hemabate/PGF2a). Usar Metilergonovina o Misoprostol.",
      "Escalón 2 (Si paciente es Hipertensa/Preeclámptica): Prohibida Metilergonovina. Usar Carboprost o Misoprostol."
    ]
  },
  {
    id: "umng-conv-ed4-29",
    university: "UMNG",
    examArea: "CIRUGÍA GENERAL",
    topic: "GASTROENTEROLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un hombre de 62 años asiste a urgencias refiriendo dolor constante y sordo en la fosa ilíaca izquierda de 3 días de evolución, el cual se ha agravado notablemente hoy, acompañado de fiebre (38.8°C) y malestar general, con cambios intermitentes en el hábito intestinal. Al examen físico, se encuentra taquicárdico (FC 110 lpm) pero con presión arterial normal y consciente. A la palpación de la Fosa Ilíaca Izquierda (FII), el paciente presenta dolor exquisito, defensa muscular focal, y usted palpa de forma clara una masa o \"plastrón\" firme, dolorosa, y de contornos irregulares. No hay signos francos de peritonitis generalizada y el tacto rectal es doloroso sin sangre. Una Tomografía Computarizada (TAC) de abdomen y pelvis con contraste endovenoso reporta: \"Marcado engrosamiento de la pared del colon sigmoides secundario a diverticulitis aguda. En la región pélvica adyacente al sigmoides se evidencia una colección líquida periférica rodeada de realce periférico en anillo (Absceso pélvico contenido) de 6 centímetros de diámetro mayor. No hay aire o líquido libre masivo en el peritoneo general\". Teniendo en cuenta la Clasificación de Hinchey, ¿qué estadio presenta y cuál es la terapia definitiva más recomendada para evitar la cirugía abierta a cielo abierto?",
    options: [
      { id: "A", label: "A", text: "Estadio I (Hinchey I) / Manejo médico exclusivo con antibióticos intravenosos y reposo intestinal en piso." },
      { id: "B", label: "B", text: "Estadio II (Hinchey II) / Drenaje percutáneo guiado por ecografía o TAC, asociado a antibióticos intravenosos." },
      { id: "C", label: "C", text: "Estadio III (Hinchey III) / Laparoscopia de urgencia para lavado peritoneal masivo con drenajes y cierre." },
      { id: "D", label: "D", text: "Estadio IV (Hinchey IV) / Laparotomía exploratoria inmediata, resección sigmoidea y Colostomía terminal de Hartmann." }
    ],
    correctOptionId: "B",
    explanation: "El paciente tiene un absceso retroperitoneal, pélvico o abdominal distante del colon (**Hinchey II**). Al ser un absceso grande (mayor de 4-5 cm de diámetro), los antibióticos solos fallarán miserablemente, por lo que requieres evacuar el pus contenido. Como la peritonitis está contenida en la bolsa del absceso, abrirle el abdomen al señor arriesgaría diseminar la materia fecal por todas las tripas de forma inútil. La conducta universal estandarizada de ORO es el manejo combinado: **Antibióticos intravenosos potentes** MÁS **Drenaje Percutáneo**. Se llama al radiólogo intervencionista, quien mediante el TAC y una aguja gruesa a través de la nalga o abdomen clava un catéter (pigtail) directo a la bola de pus, lavándola desde afuera. Esto salva al 80% de los pacientes de la cirugía (la cual se hace meses después para cortar el pedazo de colon enfermo cuando ya se enfrió el proceso).\n\n**TRAMPA DEL EXAMEN:** Asumir que absceso = cirugía: Antiguamente, todo absceso pélvico iba al quirófano a que le cortaran las tripas al señor (Hartmann). Hoy en día, la radiología intervencionista nos salvó la vida. Todo absceso de Hinchey II grande (>4 cm) se punciona por la piel (Percutáneo) si hay ventana radiológica.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el colon izquierdo de este abuelo, de tanto apretar por el estreñimiento de años, creó bolsitas como llantas desinfladas (divertículos). Un pedazo de heces duras cortó la pared del divertículo y las bacterias fecales saltaron a su pelvis, creando una pelota asquerosa de pus de 6 centímetros escondida en la ingle izquierda. Si te atreves a abrir el abdomen entero de este señor para sacar el pus en el quirófano, contaminarás todas las otras tripas sanas y se morirá por respuesta inflamatoria en la mesa. A este abuelo lo curas con un pinchazo. Llama al radiólogo intervencionista con su tomógrafo, él meterá una aguja larga por la nalga del paciente y secará ese pozo de bacterias lentamente por un tubito de drenaje durante tres días, dejando a la abuela o al abuelo caminando feliz en su cuarto sin bolsa de colostomía.",
    keyPoints: [
      "Clasificación de Diverticulitis (Hinchey Modificada):",
      "I (Absceso chico paracólico <3-4cm): Manejo conservador (ATB solo).",
      "II (Absceso grande distante o Pélvico >4cm): Drenaje Percutáneo por TAC + ATB.",
      "III (Peritonitis de Pus) y IV (Peritonitis de Heces): Cirugía Abierta Urgente (Procedimiento de Hartmann clásico o Lavado según caso)."
    ]
  },
  {
    id: "umng-conv-ed4-30",
    university: "UMNG",
    examArea: "TOXICOLOGÍA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Una paciente de 19 años (G1P0), nulípara de 36 semanas de gestación, se encuentra hospitalizada recibiendo infusión intravenosa continua de un medicamento protocolo como profilaxis anticonvulsivante por diagnóstico de Preeclampsia con Criterios de Severidad (PA inicial 160/110). Transcurridas seis horas de goteo continuo, la enfermera jefe lo llama alarmada desde la habitación. La paciente se encuentra francamente letárgica y desorientada, su frecuencia respiratoria cayó a apenas 8 respiraciones por minuto (bradipnea asfíctica) y el volumen urinario ha sido de solo 30 mL en las últimas 4 horas (oliguria crítica). Al examen físico, usted percute el tendón rotuliano de la paciente y documenta una arreflexia osteotendinosa absoluta en ambos miembros inferiores. ¿Cuál fue el medicamento que causó este cuadro tóxico en la paciente preeclámptica y cuál es el único ANTÍDOTO endovenoso para revertir el paro respiratorio inminente?",
    options: [
      { id: "A", label: "A", text: "Intoxicación por Fenitoína / Administrar Flumazenil intravenoso." },
      { id: "B", label: "B", text: "Intoxicación severa por Diazepam continuo / Administrar Fomepizol." },
      { id: "C", label: "C", text: "Intoxicación aguda por Sulfato de Magnesio / Administrar Gluconato de Calcio intravenoso lento." },
      { id: "D", label: "D", text: "Síndrome de Hipotensión por Labetalol endovenoso / Administrar Infusión de Dopamina." }
    ],
    correctOptionId: "C",
    explanation: "El tratamiento innegociable y obligatorio de toda Preeclampsia Severa o Eclampsia es infundir Sulfato de Magnesio (MgSO4) por la vena (4-6 gramos de bolo, luego 1-2 gramos/hora). El problema del magnesio es que su margen de seguridad es estrechísimo y se elimina única y exclusivamente por el RIÑÓN. Como la paciente hizo falla renal de eclampsia (Oliguria de 30 mL/4h), el riñón NO pudo orinar el magnesio y los niveles de la droga se acumularon hasta el veneno letal (niveles > 9-10 mEq/L). El exceso de magnesio bloquea la contracción neuromuscular. El primer signo de alarma de que la paciente se va a asfixiar es la PÉRDIDA DEL REFLEJO ROTULIANO (Arreflexia). Horas después el magnesio paraliza el diafragma y la paciente muere ahogada sin poder respirar (Bradipnea de 8 rpm). La orden vital de rescate es detener el goteo de MgSO4 e inyectar 1 gramo de Gluconato de Calcio al 10% (10 mL) por vía intravenosa lenta (3 min). El Calcio compite, destraba los canales del músculo, devuelve la respiración al diafragma y saca a la paciente del paro respiratorio inminente.\n\n**TRAMPA DEL EXAMEN:** La Secuencia Tóxica del Magnesio: En los exámenes exigen saber qué pasa primero.\n1. Desaparición del Reflejo Patelar (>9 mg/dL).\n2. Depresión Respiratoria (>12 mg/dL).\n3. Paro Cardíaco (>15 mg/dL).\nPor eso, todo interno en sala de partos tiene que ir con su martillo de reflejos cada hora a golpear la rodilla de las preeclámpticas. Si la rodilla deja de saltar, cortas la droga en el acto.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el sulfato de magnesio es el mejor amigo del ginecólogo y el peor enemigo del diafragma. Esta droga \"relaja\" tanto el cerebro y los nervios para que la mamá no convulsione, que a veces se pasa de la raya. La chica llevaba horas sin orinar y todo el magnesio se quedó trancado en su sangre, apagándole el sistema respiratorio. Si la hubieras revisado hace dos horas con el martillo en la rodilla, habrías notado que sus piernas ya no daban el clásico \"salto\" al golpe, avisándote del nivel de toxicidad. Para ella hoy, la aguja de Gluconato de Calcio actuará como un encendedor de chispas; el calcio empujará al magnesio en el músculo de su diafragma, devolviéndole la fuerza para inhalar profundo y salvándola de tener que entubarla a la fuerza en medio del parto.",
    keyPoints: [
      "Preeclámptica en goteo + Pierde Reflejos (Arreflexia) + Depresión Respiratoria = Intoxicación por Sulfato de Magnesio.",
      "Factor predisponente: Oliguria / Falla Renal (Se acumula porque no lo orina).",
      "Antídoto Salvavidas y específico: GLUCONATO DE CALCIO IV."
    ]
  }
];
