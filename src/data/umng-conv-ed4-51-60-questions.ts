import type { TrainingQuestion } from "@/lib/questions/types";

export const UMNG_CONV_ED4_51_60_QUESTIONS: TrainingQuestion[] = [
  {
    id: "umng-conv-ed4-51",
    university: "UMNG",
    examArea: "CIRUGÍA GENERAL",
    topic: "TRAUMA DE TÓRAX",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un hombre de 32 años es traído por la policía a la sala de reanimación tras sufrir una herida por arma de blanca (cuchillo) en el cuarto espacio intercostal derecho, línea axilar media. A su ingreso, el paciente se encuentra pálido, diaforético y en estado de choque (PA 70/40 mmHg, FC 135 lpm). A la auscultación, hay ausencia total de murmullo vesicular en el hemitórax derecho y matidez a la percusión. Usted diagnostica un Hemotórax Masivo y procede inmediatamente a insertar un Tubo a Tórax (Pleurostomía) número 32 Fr. Al conectar el tubo a la trampa de agua (Pleurovac), sale una cantidad inicial abrupta de 1.600 mL de sangre roja rutilante fresca en el primer minuto, tras lo cual el sangrado disminuye a un goteo. La presión arterial del paciente sube transitoriamente a 90/60 mmHg con la reanimación hídrica. Siguiendo el protocolo estricto del ATLS (Soporte Vital Avanzado en Trauma), ¿cuál es la conducta quirúrgica OBLIGATORIA a seguir en este momento?",
    options: [
      { id: "A", label: "A", text: "Pinzar el tubo a tórax temporalmente para crear un efecto de \"taponamiento hemostático\" interno y transfundir glóbulos rojos." },
      { id: "B", label: "B", text: "Observación estricta en UCI; solo se opera si el sangrado continúa a más de 500 mL por hora en las siguientes 4 horas." },
      { id: "C", label: "C", text: "Traslado INMEDIATO a quirófano para Toracotomía de Urgencia (Exploración torácica abierta)." },
      { id: "D", label: "D", text: "Retirar el tubo y realizar una Toracoscopia Videoasistida (VATS) para lavar el coágulo residual." }
    ],
    correctOptionId: "C",
    explanation: "El Hemotórax Masivo se define como la acumulación rápida de más de 1.500 mL de sangre en la cavidad pleural. Las guías ATLS son dogmáticas. Hay dos indicaciones absolutas para abrir el pecho de emergencia (Toracotomía) después de poner un tubo: 1. Salida INICIAL de más de 1.500 mL de sangre al momento de colocar el tubo. (Esto indica que un vaso arterial de gran calibre -arteria intercostal, mamaria interna o vaso hiliar- está seccionado). 2. Salida continua de > 200 mL por hora durante 2 a 4 horas consecutivas. Como nuestro paciente drenó 1.600 mL de un solo \"chorro\" al poner la manguera, significa que perdió más de un tercio de su volemia total directamente en el tórax. Su arteria no dejará de sangrar sola. Debe ir corriendo al quirófano para que el cirujano de tórax abra las costillas con un separador de Finochietto, encuentre el vaso cortado y lo ligue.\n\n**TRAMPA DEL EXAMEN:** La trampa de los números: Aprende a diferenciar el volumen inicial del volumen sostenido. 1.500 mL de golpe = Cirugía. 200 mL por hora en 3 horas = Cirugía. No te dejes engañar porque el sangrado \"disminuyó a un goteo\" después del chorro inicial; el criterio de los 1.5 Litros ya sentenció la toracotomía.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., un hemitórax humano puede esconder hasta 3 litros de sangre sin que se note una gota por fuera. La puñalada de este joven cortó de tajo una arteria intercostal que está bombeando sangre a presión directa de la aorta. Al meter el tubo de tórax, le quitaste el tapón a la bañera y los 1.600 centímetros cúbicos de sangre cayeron al frasco de vidrio en un abrir y cerrar de ojos. El error de los novatos es suspirar aliviados diciendo \"ya le saqué la sangre, ya respira mejor\". ¡Falso! Le sacaste la sangre de la cavidad, pero la arteria sigue rota botando sangre. Si te relajas, en media hora volverá a caer en choque. Llama al cirujano general o de tórax de inmediato, porque hay que abrir ese esternón, buscar la manguera rota con el dedo y suturarla de por vida.",
    keyPoints: [
      "Indicaciones de Toracotomía de Urgencia por Hemotórax (ATLS):",
      "Drenaje Inmediato: > 1.500 mL al colocar el tubo.",
      "Drenaje Sostenido: > 200 mL/hora por 2 a 4 horas."
    ]
  },
  {
    id: "umng-conv-ed4-52",
    university: "UMNG",
    examArea: "MEDICINA INTERNA",
    topic: "INFECTOLOGÍA GERIÁTRICA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un hombre de 75 años, en tratamiento con quimioterapia por Leucemia Linfocítica Crónica, es traído a urgencias por fiebre de 39°C, alteración profunda del estado de conciencia y convulsiones focales de nuevo inicio. A la exploración física, hay franca rigidez de nuca (Meningismo positivo). Usted diagnostica Meningitis Bacteriana Aguda. Procede a realizar una punción lumbar que reporta un líquido purulento con pleocitosis neutrofílica, hiperproteinorraquia e hipoglucorraquia. Dada la edad del paciente y su estado de inmunosupresión, usted sabe que el esquema empírico clásico de Ceftriaxona + Vancomicina deja un \"hueco mortal\" en la cobertura antibiótica. ¿Qué bacteria específica está amenazando a este paciente y qué antibiótico DEBE agregar obligatoriamente al esquema inicial?",
    options: [
      { id: "A", label: "A", text: "Pseudomonas aeruginosa / Debe agregar Cefepime o Meropenem." },
      { id: "B", label: "B", text: "Listeria monocytogenes / Debe agregar Ampicilina intravenosa." },
      { id: "C", label: "C", text: "Cryptococcus neoformans / Debe agregar Anfotericina B." },
      { id: "D", label: "D", text: "Haemophilus influenzae tipo b / Debe agregar Dexametasona y Cloranfenicol." }
    ],
    correctOptionId: "B",
    explanation: "El esquema estándar de oro para Meningitis Bacteriana en adultos de la comunidad es Ceftriaxona + Vancomicina. SIN EMBARGO, si el paciente tiene más de 50 años, es inmunosuprimido (Cáncer, VIH, esteroides), es una embarazada o es un neonato (<1 mes), su sistema de inmunidad celular está débil. Esto los hace la presa perfecta para la Listeria monocytogenes. El gran peligro es que la Listeria es NATURALMENTE RESISTENTE A TODAS LAS CEFALOSPORINAS. Si no le agregas AMPICILINA al combo inicial, la bacteria devorará el tallo cerebral del anciano causándole romboencefalitis, parálisis de pares craneales y muerte.\n\n**TRAMPA DEL EXAMEN:** Creer que las cefalosporinas de 3ra generación matan todo. El residente receta Ceftriaxona con los ojos cerrados para cualquier infección en la cabeza. El tribunal médico te demanda si el paciente era mayor de 50 años o un bebé y olvidaste la vieja y barata ampolla de Ampicilina.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la Listeria es una bacteria ninja. Se esconde dentro de las células y se ríe en la cara de las cefalosporinas modernas de un millón de pesos. Este abuelo con leucemia se comió un sándwich con queso fresco contaminado, y como su sistema inmune está apagado por la quimioterapia, la bacteria cruzó directo a su cerebro. Si le das el \"combo estándar\" de urgencias, liquidarás al Neumococo, pero la Listeria seguirá comiéndose su bulbo raquídeo impunemente. La única droga capaz de perforar su armadura intracelular y fulminarla es la vieja, confiable y barata Ampicilina de 500 pesos.",
    keyPoints: [
      "Meningitis Empírica en Edades Extremas (< 1 mes o > 50 años) o Inmunosupresión: AGREGAR AMPICILINA.",
      "Patógeno Oculto a cubrir: Listeria monocytogenes (Causa Romboencefalitis, resistente a Cefalosporinas)."
    ]
  },
  {
    id: "umng-conv-ed4-53",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "CARDIOLOGÍA FETAL",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Una primigestante de 22 años, cursando su semana 31 de gestación, ingresa a la sala de partos con diagnóstico de Amenaza de Parto Pretérmino (APP). Presenta contracciones uterinas regulares cada 5 minutos y modificaciones cervicales leves. Su médico de cabecera en el centro de salud rural le administró unas pastillas cada 6 horas durante los últimos tres días para \"frenar las contracciones\", pero la paciente olvidó el nombre del fármaco. Al realizar el ecocardiograma fetal de control al ingreso en su hospital, el perinatólogo observa alarmado que el feto cursa con hipertrofia ventricular derecha masiva, insuficiencia tricúspidea y cierre prematuro del conducto arterioso (Ductus Arterioso), lo cual ha desencadenado una insuficiencia cardíaca fetal aguda severa in utero. ¿Cuál fue el medicamento TOCOLÍTICO iatrogénico exacto que el médico rural le prescribió erróneamente en esta etapa de la gestación?",
    options: [
      { id: "A", label: "A", text: "Nifedipino (Calcioantagonista)." },
      { id: "B", label: "B", text: "Terbutalina (Agonista Beta-2 adrenérgico)." },
      { id: "C", label: "C", text: "Indometacina (Inhibidor de las prostaglandinas AINE)." },
      { id: "D", label: "D", text: "Atosibán (Antagonista de receptores de Oxitocina)." }
    ],
    correctOptionId: "C",
    explanation: "La Indometacina es un AINE muy potente. Es un tocolítico excelente porque inhibe la síntesis de prostaglandinas (las sustancias que hacen contraer el útero). PERO, el feto necesita esas mismas prostaglandinas fetales altas en la sangre para mantener ABIERTO el Conducto Arterioso. Si le das Indometacina a la madre, cruza la placenta, tumba las prostaglandinas fetales y CIERRA la tubería. La sangre choca contra los pulmones cerrados del bebé, el lado derecho del corazón se infarta de la fuerza que tiene que hacer y el feto hace hidrops y muere. La regla mundial es: La Indometacina ESTÁ ESTRICTAMENTE CONTRAINDICADA después de la SEMANA 32 de gestación, y si se usa entre las 24 y 32 semanas, JAMÁS debe darse por más de 48-72 horas seguidas para evitar este desastre cardíaco u oligohidramnios.\n\n**TRAMPA DEL EXAMEN:** Olvidar los plazos fetales: El estudiante recita los tocolíticos (Nifedipino, Indometacina, Atosibán) y cree que todos sirven igual. El examen evalúa los efectos letales dependientes del tiempo. Indometacina + Embarazo avanzado = Falla Cardíaca Derecha fetal.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., darle Indometacina por días a una mujer con 31 semanas de embarazo para que no dé a luz es sellar la sentencia de muerte cardiovascular de su bebé. La naturaleza diseñó el corazón del feto con una válvula de escape maravillosa que se mantiene abierta a punta de prostaglandinas fetales puras. La pastillita que el médico del pueblo le dio \"para calmar el cólico\" secó esas prostaglandinas. La válvula de escape se cerró con llave dentro del útero. El ventrículo derecho del bebé se infló como un globo. Suspende el medicamento inmediatamente.",
    keyPoints: [
      "Tocolítico INDOMETACINA (AINE): Inhibe Prostaglandinas.",
      "Efectos fetales graves: Cierre Prematuro del Conducto Arterioso y Oligohidramnios.",
      "Contraindicación Absoluta: Después de la Semana 32. (Uso máximo seguro: 48h en <32 semanas)."
    ]
  },
  {
    id: "umng-conv-ed4-54",
    university: "UMNG",
    examArea: "PEDIATRÍA",
    topic: "CARDIOLOGÍA - REUMATOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un niño de 10 años es llevado a la consulta médica por sus padres, quienes están alarmados porque el niño ha empezado a realizar movimientos rápidos, descoordinados e involuntarios de los brazos, las piernas y la cara, que parecen un \"baile raro\" (Corea). La madre anota que este comportamiento inició hace un par de semanas y ha notado además que al niño le salieron unos \"bultitos duros pero que no le duelen\" (nódulos subcutáneos) en los codos y rodillas. Usted revisa la historia clínica y confirma que el niño sufrió una Faringoamigdalitis purulenta severa no tratada hace 3 meses. Al auscultarlo, usted percibe un claro soplo holosistólico en el foco mitral irradiado a la axila. Teniendo en cuenta los Criterios de Jones, usted diagnostica el primer episodio de una Fiebre Reumática Aguda. ¿Cuál es el tratamiento de ELECCIÓN OBLIGATORIO que debe iniciarse y mantenerse de manera profiláctica prolongada para evitar la destrucción total de sus válvulas cardíacas en el futuro?",
    options: [
      { id: "A", label: "A", text: "Corticoides a altas dosis orales por un mes y suspender." },
      { id: "B", label: "B", text: "Penicilina G Benzatínica intramuscular cada 3 a 4 semanas por un mínimo de 10 años o hasta la adultez temprana." },
      { id: "C", label: "C", text: "Tratamiento exclusivo con Ácido Acetilsalicílico (Aspirina) para la corea y los nódulos." },
      { id: "D", label: "D", text: "Reemplazo de la válvula mitral quirúrgico preventivo antes de los 15 años de edad." }
    ],
    correctOptionId: "B",
    explanation: "La Fiebre Reumática es una reacción autoinmune letal cruzada. La bacteria infectó la garganta hace 3 meses. El cuerpo hizo anticuerpos contra la proteína M de la bacteria. Trágicamente, esa proteína M es \"idéntica\" a las células del corazón, cerebro y articulaciones del niño (Mimetismo molecular). Los anticuerpos atacan el corazón (Carditis mitral), atacan el cerebro (Corea de Sydenham o Baile de San Vito) y atacan la piel (Nódulos subcutáneos y Eritema Marginado). El peligro inmenso es que cada vez que el niño vuelva a tener una gripita por estreptococo en el futuro, el ataque al corazón será el triple de agresivo hasta destruir las válvulas por completo (Estenosis Mitral). Para evitar que cualquier estreptococo se le acerque en su vida, el niño DEBE recibir Profilaxis Secundaria con PENICILINA G BENZATÍNICA 1.200.000 UI Inyectada en la nalga cada 21 a 28 días. Si ya tiene daño cardíaco, la inyección mensual se pone mínimo durante 10 años o hasta que cumpla 21-25 años de edad.\n\n**TRAMPA DEL EXAMEN:** Manejo de la fase aguda vs Profilaxis: Te pondrán Aspirina como trampa brillante. La aspirina solo apaga la fiebre y el dolor de las rodillas HOY. Pero la pregunta te pide cómo EVITAR la destrucción valvular a FUTURO. La única respuesta es esterilizar al niño de por vida contra el Estreptococo.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., esa \"gripita de la garganta\" mal cuidada le costó caro a este niño. Su sistema inmune está confundido; fabricó un batallón de anticuerpos que no saben distinguir entre la bacteria del Estreptococo y las cuerdas de su válvula Mitral o las neuronas de su cerebro. Tu deber es firmarle una sentencia de 120 inyecciones en los glúteos por la próxima década. Cada mes, sagradamente, recibirá su dosis de Penicilina Benzatínica. Es la única armadura química que impedirá que termine en una sala de cirugía a corazón abierto a los 20 años.",
    keyPoints: [
      "Criterios MAYORES de Jones (CÁNCER): Carditis, Artritis, Nódulos, Corea, Eritema Marginado.",
      "Profilaxis Secundaria obligatoria: Penicilina G Benzatínica IM cada 3 a 4 semanas.",
      "Duración si hubo carditis: Mínimo 10 años o hasta los 21 años de edad."
    ]
  },
  {
    id: "umng-conv-ed4-55",
    university: "UMNG",
    examArea: "TOXICOLOGÍA",
    topic: "MEDICINA URGENCIAS Y TROPICAL",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Una mujer de 24 años es llevada a urgencias en estado de pánico severo tras ser mordida en la cara interna del muslo mientras limpiaba el armario de una casa vieja. Trae en un frasco al artrópodo agresor: una pequeña araña de color pardo (café) con un dibujo en su espalda que asimila a la forma de un \"Violín\". Han pasado 12 horas desde la mordedura. La paciente refiere que en el momento del pinchazo el dolor fue levísimo, casi imperceptible. Sin embargo, la lesión en su muslo ha evolucionado dramáticamente: presenta una placa isquémica central pálida y hundida, rodeada de un halo azulado y un anillo eritematoso más externo (Placa Livedoide o Signo de la Bandera Francesa). Además del intenso daño local, los laboratorios actuales muestran que la paciente acaba de orinar sangre oscura, la bilirrubina indirecta y la LDH están altas (Hemólisis intravascular franca) y la creatinina subió a 2.5 mg/dL en pocas horas. ¿Qué toxina arañil produjo este cuadro necrótico y hemolítico letal?",
    options: [
      { id: "A", label: "A", text: "Alfa-Latrotoxina (Araña Viuda Negra)." },
      { id: "B", label: "B", text: "Esfingomielinasa-D (Araña Loxosceles / Araña de Rincón o Violinista)." },
      { id: "C", label: "C", text: "Toxina de escorpión bloqueadora de sodio (Tityus sp)." },
      { id: "D", label: "D", text: "Fosfolipasa A2 (Araña Phoneutria / Araña Bananera)." }
    ],
    correctOptionId: "B",
    explanation: "La araña de los rincones sucios o roperos viejos (Loxosceles) es famosa por tener un violín dibujado en la cabeza. Su característica maestra es que la mordida NO DUELE AL PRINCIPIO. La toxina letal es la enzima Esfingomielinasa-D. Esta enzima literalmente disuelve y funde las membranas de las células endoteliales y los glóbulos rojos. En la piel, esto destruye las arterias diminutas, causando necrosis de la carne (Placa Livedoide). En el 10-15% de los casos (la forma Visceral), la toxina viaja por la sangre y \"licúa\" todos los glóbulos rojos (Hemólisis intravascular severa). Los pedazos de glóbulos rojos atoran el riñón y lo apagan (Falla renal aguda, que es la causa real de la muerte).\n\n**TRAMPA DEL EXAMEN:** Asesinos silenciosos: Si dice \"me picó algo y no me dolió pero ahora está negro\": Loxosceles. Si dice \"me picó algo, grité de dolor y ahora tengo calambres y me duele la barriga durísimo\": Viuda negra (Latrodectus). Mnemotecnia personal: Loxosceles = Licúa (Necrosis). Latrodectus = Latigazo (Nervioso).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., esta arañita cobarde guarda en sus colmillos una tijera química destructora. La toxina (Esfingomielinasa-D) actúa como ácido de batería inyectado debajo de la piel. La anestesió al picarla, pero ahora esa carne se está pudriendo porque sus vasos sanguíneos se desintegraron. Lo grave no es la pierna. Lo grave es que el veneno saltó a la sangre y está reventando sus glóbulos rojos como si fueran bombas de agua. Al reventarse, toda la hemoglobina libre viaja a los riñones y los calcina por dentro.",
    keyPoints: [
      "Loxoscelismo (Araña de Rincón / Violinista): Toxina implicada: Esfingomielinasa-D.",
      "Clínica: Mordida indolora inicial -> Placa Livedoide (Necrosis) -> Loxoscelismo Visceral (Hemólisis masiva y Falla Renal)."
    ]
  },
  {
    id: "umng-conv-ed4-56",
    university: "UMNG",
    examArea: "NEUROLOGÍA",
    topic: "OFTALMOLOGÍA E INMUNOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Una mujer de 26 años de edad, previamente sana, se presenta a urgencias refiriendo pérdida progresiva y dolorosa de la visión en su ojo izquierdo de dos días de evolución. Describe que \"los colores se ven apagados, como despintados\" y el dolor empeora notablemente al mover el ojo hacia los lados. Al examen neurológico, usted evalúa sus reflejos pupilares con la luz de una linterna (swinging flashlight test) y documenta un Defecto Pupilar Aferente Relativo claro (DAPR o Pupila de Marcus Gunn). Al fondo de ojo, la papila óptica se ve ligeramente inflamada pero la retina está normal. Al ampliar el interrogatorio, la paciente recuerda que hace aproximadamente un año sintió \"corrientazos\" (parestesias) y entumecimiento en las piernas que duraron un mes y desaparecieron solos. Para investigar este cuadro clínico diseminado \"en tiempo y espacio\", usted ordena una Punción Lumbar (LCR) y una Resonancia Magnética (RMN) cerebral. ¿Qué hallazgo patognomónico inmunológico DEBE aparecer en el Líquido Cefalorraquídeo para confirmar este diagnóstico devastador en la paciente joven?",
    options: [
      { id: "A", label: "A", text: "Disociación albúmino-citológica franca con células nulas." },
      { id: "B", label: "B", text: "Presencia de Bandas Oligoclonales de Inmunoglobulina G (IgG) exclusivas en el LCR, ausentes en suero." },
      { id: "C", label: "C", text: "Proteína 14-3-3 elevada fuertemente en el LCR." },
      { id: "D", label: "D", text: "Xantocromía severa sostenida tras centrifugación." }
    ],
    correctOptionId: "B",
    explanation: "La paciente tiene el cuadro clásico de libro de la Esclerosis Múltiple (EM). El sistema inmune ataca la mielina del Sistema Nervioso CENTRAL. Su presentación debut más célebre en el examen es la Neuritis Óptica Dolorosa (el nervio de la visión se inflama, duele al mover el ojo y la señal no pasa bien, dando la Pupila de Marcus Gunn). En la EM las lesiones ocurren esparcidas \"en el tiempo y en el espacio anatómico\" (Hoy el ojo, hace un año las piernas). En la Punción Lumbar (LCR), la confirmación diagnóstica mundial son las Bandas Oligoclonales de IgG. Estas bandas significan que un grupo pequeño de Linfocitos B se encerró permanentemente a vivir adentro del cerebro y está fabricando anticuerpos allá adentro sin parar. Por eso las bandas aparecen en el LCR pero en suero NO ESTÁN.\n\n**TRAMPA DEL EXAMEN:** Neuritis vs Trombosis:\n- Pérdida de visión UNILATERAL + DOLOROSA al mover el ojo + Mujer Joven = Neuritis Óptica (Piense en Esclerosis Múltiple).\n- Pérdida de visión UNILATERAL + INDOLORA + Anciano hipertenso = Oclusión Vascular (Cereza en mácula).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., esta mujer de 26 años está sufriendo un \"sabotaje interno\" de la fibra óptica de su cerebro. Sus propios anticuerpos descubrieron la receta para destruir la cubierta de los nervios de su sistema central. La inflamación de hoy le quemó el cable del nervio óptico izquierdo. Al mover el ojo, el nervio hinchado raspa contra el hueso de la órbita y ella aúlla de dolor; su cerebro recibe los colores en blanco y negro porque el cable no transmite bien la señal. Para atrapar a los culpables, metes la aguja de punción lumbar. El laboratorio hará una electroforesis y verá unas líneas gruesas de proteínas IgG brillando: los anticuerpos que el enemigo está fabricando oculto dentro de sus meninges.",
    keyPoints: [
      "Mujer joven + Brotes neurológicos separados en el tiempo/espacio + Neuritis Óptica (dolor visual) = Esclerosis Múltiple.",
      "Diagnóstico de LCR Definitivo: Bandas Oligoclonales de IgG positivas en LCR, negativas en suero.",
      "Tratamiento del brote agudo: Pulsos de Esteroides IV (Metilprednisolona)."
    ]
  },
  {
    id: "umng-conv-ed4-57",
    university: "UMNG",
    examArea: "INFECTOLOGÍA",
    topic: "CARDIOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un paciente masculino de 50 años, con antecedente de consumo esporádico de drogas intravenosas, acude a urgencias por referir 3 semanas de fiebre persistente (38.2°C), sudoración profunda y pérdida de 5 kg de peso. A la auscultación cardíaca, se evidencia un soplo diastólico aspirativo nuevo en el borde esternal izquierdo que no conocía tener. Al examinar minuciosamente sus manos y extremidades, usted detecta dos hallazgos dermatológicos altamente sugestivos: pequeñas líneas rojizas oscuras longitudinales debajo de las uñas de sus manos (hemorragias en astilla) y unas lesiones maculares eritematosas, planas y COMPLETAMENTE INDOLORAS en las palmas de las manos y plantas de los pies. Teniendo en cuenta la clínica y el diagnóstico inminente de Endocarditis Infecciosa (criterios de Duke), ¿cómo se denominan estas lesiones planas indoloras en las palmas y qué otra lesión cutánea DOLOROSA clásica podría buscar en la yema de los dedos?",
    options: [
      { id: "A", label: "A", text: "Nódulos de Osler (planos e indoloros) / Podría buscar Lesiones de Janeway (nódulos dolorosos)." },
      { id: "B", label: "B", text: "Manchas de Roth (planos e indoloros) / Podría buscar Xantomas tendinosos." },
      { id: "C", label: "C", text: "Lesiones de Janeway (máculas planas e indoloras) / Podría buscar Nódulos de Osler (nódulos duros y exquisitamente dolorosos)." },
      { id: "D", label: "D", text: "Eritema Nudoso (plano e indoloro) / Podría buscar Púrpura de Henoch-Schönlein palpable dolorosa." }
    ],
    correctOptionId: "C",
    explanation: "El paciente tiene Endocarditis Infecciosa. Las bacterias destruyeron su válvula cardiaca. Esa infección escupe pequeños coágulos de bacterias y pedazos de sistema inmune reaccionando hacia el torrente sanguíneo, los cuales se estrellan en los capilares microscópicos de la piel de todo el cuerpo. Esto genera estigmas de libro de medicina: 1) Hemorragias en astilla. 2) Lesiones de Janeway: Son máculas planas (rojizas) en las palmas y plantas. Son INDOLORAS. Se producen por micro-abscesos sépticos directos. 3) Nódulos de Osler: Son nódulos violáceos levantados, típicamente en los \"pulpejos\" (yemas de los dedos). Tienen un depósito de complejos inmunes que irrita terminales nerviosas, por lo que son EXQUISITAMENTE DOLOROSOS.\n\n**TRAMPA DEL EXAMEN:** Janeway vs Osler (La Mnemotecnia Gringa Oculta): Para no olvidarlo jamás:\n- Osler = Ouch! (Duele). Nódulos en yemas de los dedos.\n- Janeway = J (No hay \"O\" de Ouch). Son planas y no duelen. Palmas y plantas.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., tu paciente te entregó el diagnóstico en las palmas de sus manos como si fuera un mapa. Ese soplo nuevo en el pecho significa que una colonia de estafilococos o estreptococos se comió la válvula de su corazón. El corazón late y ametralla los capilares de las yemas de sus dedos con bolas de pus. Como esas bolitas de pus tapan los nervios de las puntas de los dedos (Nódulos de Osler), si le das un apretón de manos fuerte, el tipo pegará un brinco de dolor gritando \"¡Ouch!\". Tómale tres series de frascos de hemocultivos y arranca con Vancomicina.",
    keyPoints: [
      "Estigmas periféricos de Endocarditis Infecciosa:",
      "Nódulos de Osler: Levas, Yemas de dedos, DOLOROSOS.",
      "Lesiones de Janeway: Planas, Palmas/Plantas, INDOLORAS.",
      "Manchas de Roth: Ojo (Retina), Exudados con centro blanco."
    ]
  },
  {
    id: "umng-conv-ed4-58",
    university: "UMNG",
    examArea: "UROLOGÍA ONCOLÓGICA",
    topic: "URGENCIAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un hombre de 70 años, con un cuadro de meses de síntomas urinarios bajos obstructivos progresivos (nigturia, chorro débil, dificultad para iniciar la micción), fue traído hoy al hospital por su familia. El paciente refiere un dolor insoportable en la zona de la columna torácica baja y lumbar que inició ayer y que hoy lo despertó impidiéndole caminar. Al evaluar al anciano en la camilla, usted documenta un globo vesical severo. Lo más alarmante es el examen neurológico: el paciente tiene parálisis motora aguda de ambas piernas (paraplejía 1/5) y abolición del control del esfínter anal. El examen de sangre revela un Antígeno Prostático Específico (PSA) de 1.250 ng/mL (marcadamente elevado). Se realiza una RMN de urgencia que confirma metástasis osteoblásticas múltiples en la columna vertebral que están invadiendo y comprimiendo críticamente el canal medular espinal. Teniendo en cuenta la inminencia de daño neurológico permanente, ¿cuál es el paso FARMACOLÓGICO INMEDIATO OBLIGATORIO de reanimación, además de la valoración por radioterapia o neurocirugía descompresiva urgente?",
    options: [
      { id: "A", label: "A", text: "Administrar Analgésicos opioides potentes en goteo continuo (Fentanilo) y esperar remisión oncológica." },
      { id: "B", label: "B", text: "Administrar Dosis masivas de Corticosteroides sistémicos (Dexametasona intravenosa)." },
      { id: "C", label: "C", text: "Administrar Agonistas de la Hormona Liberadora de Gonadotropina (GnRH como Leuprolide) en el mismo instante en urgencias." },
      { id: "D", label: "D", text: "Realizar Terapia con Bifosfonatos (Ácido Zoledrónico) para disolver el calcio de la masa que oprime la médula." }
    ],
    correctOptionId: "B",
    explanation: "La Compresión Medular Aguda es LA URGENCIA ONCOLÓGICA máxima de la neurología. Las metástasis vertebrales (comunísimas en Cáncer de Próstata y Mama) crecen e invaden el espacio cerrado de la columna. El tumor en sí mismo causa compresión, pero lo que realmente destruye los nervios de la médula espinal en 24 horas es el Edema Vasogénico Peritumoral masivo. Si no desinflamas esto HOY, los nervios mueren por isquemia. La orden mundial número uno es aplicar ALTAS DOSIS DE CORTICOSTEROIDES (Ej. Dexametasona 10 a 16 mg IV seguidos de dosis cada 6 horas) ANTES INCLUSO de subirlo a la Resonancia o enviarlo a cirugía. La dexametasona drena el edema milagrosamente en horas, aliviando la presión mecánica y salvando la capacidad de volver a caminar del abuelo.\n\n**TRAMPA DEL EXAMEN:** La ceguera por la glándula: Lees PSA de 1200 y Cáncer de Próstata. El urólogo que llevas dentro grita \"Orquiectomía o Leuprolide\" (Opción C). ¡Detente! La urgencia vital de hoy no es la próstata, es el cable de su columna espinal ahorcándose. El antiinflamatorio (Dexametasona) es el superhéroe del neuroeje. El cáncer se ataca mañana.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la próstata de este abuelo, de tanto no revisarla, mandó semillas tumorales por la sangre que hicieron un nido óseo en las vértebras de su espalda. Ese tumor dentro del hueso actuó como una esponja venenosa que se hinchó de agua inflamatoria. Esa agua en este preciso segundo está estrangulando la médula espinal de su columna a una presión aterradora, como un puño cerrado asfixiando una manguera. A la médula le quedan literalmente 12 horas antes de que la falta de oxígeno le pudra los nervios motores permanentemente. No pienses en la quimioterapia oncológica hoy. Pide ampollas de Dexametasona a las 3:00 AM, inyéctalas a chorro por la vena, el edema se evaporará como magia y le devolverás la capacidad de mover las piernas.",
    keyPoints: [
      "Dolor en Columna + Déficit Neurológico Agudo (pierde fuerza de piernas/esfínteres) en paciente con CÁNCER conocido = Compresión Medular Maligna.",
      "Paso farmacológico INMEDIATO (Salvavidas neuronal): DEXAMETASONA IV a dosis altas."
    ]
  },
  {
    id: "umng-conv-ed4-59",
    university: "UMNG",
    examArea: "GASTROENTEROLOGÍA",
    topic: "RADIOLOGÍA CLÍNICA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un hombre de 45 años, previamente sano y sin factores de riesgo conocidos, asiste a consulta refiriendo historia de varios meses de dificultad para tragar (disfagia progresiva). El síntoma cardinal que más llama su atención es que el paciente relata de manera contundente que \"me atoro exactamente por igual tanto con los alimentos sólidos (carnes) como con los LÍQUIDOS (sopa, agua)\". Refiere además episodios de regurgitación de alimentos sin digerir no ácidos por las noches y halitosis severa (mal aliento crónico). Se descarta malignidad estructural alta. Usted solicita un Esofagograma con Tránsito de Bario. El radiólogo entrega la placa en la cual usted observa un esófago supremamente dilatado en toda su porción torácica (megaesófago tortuoso) que finaliza bruscamente en el esfínter esofágico inferior, adoptando una forma radiológica clásica, afilada y simétrica, descrita como \"Signo del Pico de Pájaro o Punta de Lápiz\". Teniendo en cuenta la clínica motora paradójica y la imagen, ¿cuál es el diagnóstico fisiopatológico exacto de esta entidad que impide el vaciamiento gástrico?",
    options: [
      { id: "A", label: "A", text: "Cáncer de Esófago distal (Adenocarcinoma) por estenosis circunferencial maligna." },
      { id: "B", label: "B", text: "Espasmo Esofágico Difuso por contracciones descordinadas simultáneas de alta presión." },
      { id: "C", label: "C", text: "Acalasia esofágica / Pérdida del plexo mientérico inhibitorio de Auerbach impidiendo la relajación del esfínter." },
      { id: "D", label: "D", text: "Estenosis péptica por Enfermedad por Reflujo Gastroesofágico (ERGE) crónico." }
    ],
    correctOptionId: "C",
    explanation: "La Acalasia es el trastorno MOTOR primario del esófago por excelencia. Al paciente se le degeneran los ganglios nerviosos inhibidores (Plexo Mientérico de Auerbach) que viven en la capa muscular del esófago. Sin esos nervios, ocurren dos desgracias: 1) El cuerpo del esófago queda \"paralizado\" y no hace movimientos de ordeño (Aperistalsis). 2) La compuerta de abajo (el Esfínter Esofágico Inferior - EEI) NO SE PUEDE ABRIR O RELAJAR cuando tragas, queda perpetuamente cerrado a la fuerza. Como es un problema de movimiento, el paciente se atora con Sólidos y Líquidos AL MISMO TIEMPO desde el día 1. El esófago se llena de comida atrapada y se ensancha como un globo por años. En el Tránsito de Bario, el líquido baja grueso, y al estrellarse contra el esfínter inferior que no abre bien, el contraste dibuja un cono afilado fino hacia el estómago, conocido como \"Pico de Pájaro\".\n\n**TRAMPA DEL EXAMEN:** Sólidos vs Sólidos y Líquidos: Esta es la regla de Descartes de Gastroenterología:\n- Disfagia a SÓLIDOS primero, LÍQUIDOS después = Obstrucción Mecánica (Tumor, Anillo, Estenosis).\n- Disfagia a SÓLIDOS Y LÍQUIDOS al Mismo Tiempo = Trastorno MOTOR Neurológico (Acalasia o Espasmo).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., imagínate una manguera conectada a una llave cerrada de fábrica. El tubo de este paciente no tiene cáncer, tiene los cables de la electricidad cortados. Las neuronas de Auerbach, que son las encargadas de decirle a la puerta del estómago \"ábrete, sesamo\" cada vez que cae comida, se murieron hace 5 años. Todo lo que él traga choca contra esa puerta de acero y se va amontonando en una torre de comida de un metro de alto hacia su garganta. Si le pides que se acueste, toda esa sopa vieja saldrá por su boca apestando horrible. Pídele al paciente que beba Bario de radiología; si ves que el contraste dibuja la forma del pico afilado y tieso de un águila en la punta inferior del esófago, llama al cirujano general para que entre con el laparoscopio y taje ese músculo espástico testarudo (Heller), y el paciente volverá a poder tragarse un vaso de agua en paz.",
    keyPoints: [
      "Trastorno Motor: Disfagia a Sólidos y Líquidos Simultáneos + Halitosis + Regurgitación comida no ácida.",
      "Signo Radiológico: PICO DE PÁJARO o Punta de Lápiz en el Esfínter Inferior.",
      "Diagnóstico: ACALASIA. (Fisiopatología: Pérdida del Plexo Mientérico de Auerbach, no relaja el EEI)."
    ]
  },
  {
    id: "umng-conv-ed4-60",
    university: "UMNG",
    examArea: "ÉTICA MÉDICA Y SALUD SEXUAL",
    topic: "LEGISLACIÓN COLOMBIANA - ¡EL CIERRE!",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Usted es el médico de consulta externa en un centro de salud del nivel primario. A su consultorio ingresa sola y sin acompañante una adolescente mujer de 14 años de edad. Durante la consulta, la paciente relata que tiene vida sexual activa desde hace 6 meses. Le manifiesta con evidente angustia que, a pesar de usar preservativo a veces, teme quedar embarazada porque se le rompió uno recientemente (sin embarazo actual confirmado). Ella le solicita de manera directa, consciente e informada, la inserción de un Implante Subdérmico Anticonceptivo (tipo Jadelle o Implanon) para planificación familiar de largo plazo a partir de hoy mismo. Sin embargo, ella le advierte de manera vehemente: \"Doctor, le prohíbo terminantemente llamar a mis papás. Si usted los llama o si me obliga a venir con mi mamá para que ella firme, ellos me matan a golpes o me echan de la casa porque no saben que tengo novio\". Teniendo en cuenta el juramento de Beneficencia, las leyes de menores y la Resolución 3280 de 2018 del Ministerio de Salud (Colombia) sobre derechos sexuales y reproductivos de la infancia y adolescencia, ¿cuál es su conducta inquebrantable OBLIGATORIA y blindada legalmente en este escenario de consultorio?",
    options: [
      { id: "A", label: "A", text: "Negarse rotundamente a aplicar el método invasivo hormonal sin que exista una firma de la patria potestad (Madre o Padre biológico) en el consentimiento informado de la historia clínica, ya que es menor de edad y usted se expone a demandas y delitos de lesiones personales al intervenirla sola." },
      { id: "B", label: "B", text: "Exigir la presencia del novio mayor de edad, ya que al ser emancipada sexualmente, el compañero puede fungir como adulto responsable firmante del procedimiento ginecológico menor, eximiendo la presencia paterna." },
      { id: "C", label: "C", text: "Insertarle el implante anticonceptivo subdérmico HOY MISMO amparado en el secreto profesional, ya que las y los adolescentes mayores de 14 años gozan de autonomía jurídica plena y suficiente para acceder de forma autónoma y secreta a servicios de anticoncepción sin la firma ni presencia de terceros." },
      { id: "D", label: "D", text: "Negar el implante por su alta carga hormonal en una menor en desarrollo, recomendando métodos de barrera e informando el caso al ICBF (Bienestar Familiar) por encontrarse en posible situación de abandono parental." }
    ],
    correctOptionId: "C",
    explanation: "El mito legal más peligroso y demandable de la medicina general actual. Creer que un menor de 18 años siempre requiere papá para cualquier intervención. Según el Minsalud y las Altas Cortes colombianas, en temas de Salud Sexual y Reproductiva, la edad del \"menor maduro\" (edad de consentimiento sexual) es de 14 años. A partir de los 14 años, todo adolescente tiene CAPACIDAD JURÍDICA ABSOLUTA para recibir asesoría, pruebas de VIH/ETS, abortos legales (IVE) y, por supuesto, aplicación o entrega de cualquier método anticonceptivo (incluyendo invasivos como implantes, DIU T de Cobre, inyecciones) SIN NECESIDAD ALGUNA DE QUE UN PADRE ESTÉ PRESENTE O FIRME NINGÚN DOCUMENTO. Poner una barrera de acceso exigiendo firmas adultas es causal de investigación disciplinaria en Colombia y violación de derechos fundamentales. El médico debe realizar una asesoría clínica impecable, descartar embarazo, evaluar contraindicaciones médicas y pedirle A LA PROPIA PACIENTE DE 14 AÑOS que firme el formato de Consentimiento Informado del hospital con su nombre y huella. Acto seguido, en ese mismo momento en el consultorio, se lava las manos, le pone anestesia local en el brazo e inyecta las barras del Implante Subdérmico.\n\n**TRAMPA DEL EXAMEN:** Asustar al médico con demandas de los padres: Si en la viñeta aparece \"El papá te amenaza con denunciarte\", el médico novato se asusta y cede. El juez colombiano SIEMPRE absolverá al médico que puso un DIU a una niña de 14 años a escondidas del padre violento, y condenará al médico que se lo negó \"por pedirle una firmita\" y resultó en un embarazo indeseado en la sala de la casa.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., guarda el miedo al papá furioso en un rincón y ponte la bata de médico del siglo XXI. El Estado no considera a esta joven de 14 años como una \"niñita indefensa\" frente a su útero; la considera dueña absoluta de sus ovarios. Tu trabajo no es ser el padre moralista del pueblo, sino prevenir la catástrofe de un niño criando a otro niño en la miseria. Abre el paquete estéril del Implanon, inyéctaselo en el brazo izquierdo frente a ella y sonríele con la tranquilidad de que acabas de aplicarle un seguro de vida invencible para los próximos 3 años. Lo que ella habla contigo, se sepulta en la historia clínica. Si mañana su mamá llama histérica a preguntar si tú le pusiste eso a su \"bebé\", le contestas con cortesía pero frialdad legal: \"Señora, el secreto profesional me prohíbe darle información sobre el cuerpo de mi paciente sin su consentimiento previo\". Fin de la jugada y blindaje maestro.",
    keyPoints: [
      "Anticoncepción en Adolescentes (Resolución 3280 Colombia):",
      "Todo o toda adolescente de 14 AÑOS EN ADELANTE tiene Plena Autonomía.",
      "Puede solicitar y recibir CUALQUIER método anticonceptivo de manera Autónoma y en SECRETO (Sin compañía ni firma de padres/acudientes)."
    ]
  }
];
