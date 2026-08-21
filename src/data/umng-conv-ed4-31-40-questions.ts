import type { TrainingQuestion } from "@/lib/questions/types";

export const UMNG_CONV_ED4_31_40_QUESTIONS: TrainingQuestion[] = [
  {
    id: "umng-conv-ed4-31",
    university: "UMNG",
    examArea: "URGENCIAS Y TRAUMA",
    topic: "INFECTOLOGÍA PREVENTIVA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un campesino de 45 años ingresa a urgencias de un hospital rural tras sufrir una herida punzante profunda en la planta del pie derecho al pisar un clavo oxidado cubierto de estiércol de vaca mientras trabajaba en el establo. La herida sangró moderadamente y está contaminada con tierra. Al interrogarlo sobre sus antecedentes de vacunación, el paciente afirma que \"nunca en su vida le han puesto una inyección\" (estado de vacunación completamente desconocido o nulo). Tras lavar y desbridar agresivamente la herida, ¿cuál es la profilaxis inmunológica OBLIGATORIA e inmediata que debe recibir este paciente para prevenir una muerte por neurotoxina espástica?",
    options: [
      { id: "A", label: "A", text: "Administrar solo la Vacuna Toxoide Tetánico (Td) para crear memoria inmunológica." },
      { id: "B", label: "B", text: "Administrar solo Inmunoglobulina Antitetánica Humana (IGT) para neutralizar la toxina de la herida actual." },
      { id: "C", label: "C", text: "Administrar simultáneamente la Vacuna Toxoide Tetánico (Td) en un brazo y la Inmunoglobulina Antitetánica Humana (IGT) en el otro." },
      { id: "D", label: "D", text: "Lavar la herida con peróxido de hidrógeno y administrar Penicilina Benzatínica intramuscular; la vacuna se programa por consulta externa." }
    ],
    correctOptionId: "C",
    explanation: "El *Clostridium tetani* vive en las heces de los animales y la tierra. La herida es catalogada como **Sucia/Mayor**. Como el paciente tiene un esquema de vacunación de **menos de 3 dosis (o desconocido)**, su riesgo de tétanos es absoluto. La conducta mundial inquebrantable exige terapia combinada:\n1) Se le inyecta la **Inmunoglobulina Tetánica (IGT)** (Anticuerpos preformados) en un brazo para que \"cacen y neutralicen\" inmediatamente cualquier toxina que la bacteria suelte hoy. (Inmunidad Pasiva).\n2) Simultáneamente, en el brazo opuesto, se le inyecta el **Toxoide Tetánico (Td o DPT)**, para que su sistema inmune empiece a fabricar sus propias defensas a largo plazo. (Inmunidad Activa).\n\n**TRAMPA DEL EXAMEN:** La regla de la herida limpia vs sucia:\n- Herida LIMPIA + No vacunado = **SOLO Vacuna**.\n- Herida SUCIA + No vacunado = **Vacuna + Inmunoglobulina**.\n- Herida SUCIA + Vacunado hace < 5 años = No se hace nada (Lavar y ya).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., este campesino tiene una bomba de tiempo en el talón. La herida del clavo se selló en la piel, creando una cueva sin oxígeno perfecta para que el bacilo del Tétanos fermente y suelte la Tetanospasmina. Esta toxina viaja por los nervios hasta la médula y corta los frenos musculares; todos los músculos del paciente se contraerán hasta romperle sus propios huesos. Tú tienes que darle \"sicarios\" inmediatos (Inmunoglobulina) para que maten a la toxina que ya está en su sangre, y darle la \"escuela de entrenamiento\" (Vacuna) para que su propio ejército aprenda a pelear para el próximo clavo que pise. Pónselas en brazos distintos para que no se neutralicen entre sí.",
    keyPoints: [
      "Herida Contaminada (Tierra, heces, metales oxidados, saliva) + Esquema de Vacunación Incompleto/Desconocido:",
      "Conducta profiláctica OBLIGATORIA: Toxoide Tetánico (Vacuna) MÁS Inmunoglobulina Antitetánica (IGT)."
    ]
  },
  {
    id: "umng-conv-ed4-32",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "URGENCIAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Una mujer de 22 años, G1P0, con 38 semanas de gestación, ingresa a la sala de urgencias refiriendo salida de líquido claro por vagina desde hace 24 horas (Ruptura Prematura de Membranas Prolongada). Al evaluarla, la paciente se queja de contracciones irregulares dolorosas. Sus signos vitales maternos son: PA 110/70 mmHg, Temperatura de 39.0°C, y Frecuencia Cardíaca de 125 lpm. Al monitorizar al feto, se evidencia una Taquicardia Fetal sostenida de 175 lpm. A la especuloscopia, el líquido amniótico es de color purulento y con olor fétido. A la palpación, el útero es muy doloroso. Confirmado el diagnóstico de Corioamnionitis Clínica severa, y habiendo iniciado antibióticos de amplio espectro (Ampicilina + Gentamicina), ¿cuál es la conducta obstétrica INMEDIATA de elección?",
    options: [
      { id: "A", label: "A", text: "Realizar Cesárea de Emergencia inmediatamente, ya que el feto está infectado y la vía vaginal es muy lenta." },
      { id: "B", label: "B", text: "Inducir o acelerar el Parto Vaginal con Oxitocina, independientemente de la dilatación, ya que la infección no es indicación absoluta de cesárea." },
      { id: "C", label: "C", text: "Mantener tratamiento antibiótico y esperar a que la fiebre ceda antes de inducir el parto para proteger al feto del estrés infeccioso." },
      { id: "D", label: "D", text: "Realizar Amnioinfusión intrauterina con solución salina fría para lavar el pus y disminuir la fiebre fetal." }
    ],
    correctOptionId: "B",
    explanation: "El tratamiento definitivo de la Corioamnionitis es **LA EVACUACIÓN DEL ÚTERO (Desembarazar)**. La vía de elección mundial, la más segura para la madre infectada, es la **VÍA VAGINAL**. Como hay que vaciar el útero lo más pronto posible de forma segura, se debe iniciar **Inducción o Conducción del parto con Oxitocina** (o maduración si el cérvix es inmaduro). El parto vaginal \"exprime\" el pus de forma natural hacia afuera, protegiendo la cavidad abdominal de la madre. Obviamente, el antibiótico IV (Ampicilina + Gentamicina) se pasa a chorro desde el diagnóstico para proteger al feto en el tránsito.\n\n**TRAMPA DEL EXAMEN:** Cesárea Mágica: El estrés de ver \"taquicardia fetal y pus\" te empuja a marcar Cesárea. Recuerda: La Corioamnionitis por sí sola **NO** es indicación de cesárea. El útero se vacía por abajo con Oxitocina.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la matriz de esta mujer se volvió una incubadora de bacterias. El bebé está literalmente tragando y respirando líquido amniótico podrido. Su corazón late a 175 por minuto intentando combatir la fiebre. Tu instinto de héroe te pide llevarla al quirófano y cortarle el abdomen. Si haces eso, todo ese litro de pus se derramará entre sus intestinos y ella terminará en la UCI con peritonitis fecal y el útero mutilado. La ruta más sana es la natural. Ponle antibióticos a la vena para que le lleguen al cordón umbilical del bebé, abre la válvula de Oxitocina para que el útero se apriete fuerte, y saca al niño por el canal vaginal. El pediatra lo estará esperando con los brazos y los antibióticos abiertos.",
    keyPoints: [
      "Tríada de Corioamnionitis: Fiebre Materna + Taquicardia Fetal (>160 lpm) + Líquido fétido/Útero doloroso.",
      "Tratamiento farmacológico: Ampicilina + Gentamicina IV.",
      "Conducta Obstétrica: INDUCCIÓN DEL PARTO VAGINAL (No hacer cesárea de rutina)."
    ]
  },
  {
    id: "umng-conv-ed4-33",
    university: "UMNG",
    examArea: "HEMATOLOGÍA",
    topic: "CUIDADO INTENSIVO",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Una mujer de 35 años, previamente sana, es llevada a urgencias por su esposo debido a un cuadro de confusión profunda, desorientación y letargia de inicio rápido. Adicionalmente, reporta que la paciente ha tenido picos febriles intermitentes. Al examen físico, se observan múltiples petequias en el tórax y las extremidades inferiores. En los laboratorios de urgencia, usted halla una Plaquetopenia severa de 15.000 cél/mm³, una Hemoglobina de 7.2 g/dL, y una Creatinina elevada de 2.5 mg/dL. Los Tiempos de Coagulación (PT y PTT) son absolutamente NORMALES. El frotis de sangre periférica solicitado de emergencia reporta abundantes Esquistocitos (glóbulos rojos fragmentados). ¿Cuál es la terapia salvavidas INMEDIATA Y OBLIGATORIA que debe instaurarse en esta paciente antes de que ocurra muerte cerebral?",
    options: [
      { id: "A", label: "A", text: "Transfusión masiva de un pool de 6 unidades de plaquetas." },
      { id: "B", label: "B", text: "Intercambio Plasmático Terapéutico (Plasmaféresis) de urgencia." },
      { id: "C", label: "C", text: "Infusión de Heparina No Fraccionada para detener la coagulación diseminada." },
      { id: "D", label: "D", text: "Pulsos de Metilprednisolona y Esplenectomía de urgencia." }
    ],
    correctOptionId: "B",
    explanation: "La **Púrpura Trombocitopénica Trombótica (PTT)** se debe a una deficiencia adquirida (anticuerpos) de la enzima **ADAMTS13**. Esta enzima funciona como una \"tijera\" que recorta el Factor de von Willebrand. Al no haber tijera, el Factor se vuelve una cadena pegajosa kilométrica que atrapa todas las plaquetas del cuerpo, formando millones de coágulos en los capilares. Los glóbulos rojos, al intentar pasar por los capilares taponados, se rebanan por la mitad (**Esquistocitos**). El tratamiento universal que reduce la mortalidad del 90% a menos del 10% es la **Plasmaféresis (Intercambio Plasmático)** urgente. Al filtrar su sangre en la máquina, barres los anticuerpos malos y repones plasma fresco que contiene la enzima ADAMTS13 sana (las \"tijeras\" nuevas).\n\n**TRAMPA DEL EXAMEN:** Diferenciar PTT de CID:\n- Sangra + Plaquetas bajas + Esquistocitos + **PT/PTT Prolongados** = **CID** (Coagulación Intravascular Diseminada).\n- Sangra + Plaquetas bajas + Esquistocitos + **PT/PTT NORMALES** = **PTT**. (Terapia: Plasmaféresis).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la sangre de esta paciente se volvió un bosque de zarzas pegajosas. Al fallar su \"tijera\" enzimática, unas cuerdas largas de pegamento (von Willebrand) se atascaron en los vasos de su cerebro. Las plaquetas se adhirieron como moscas al pegamento, creando coágulos microscópicos en todo su lóbulo frontal (por eso está confusa y letárgica). Y cada vez que un glóbulo rojo intenta cruzar el vaso, se estrella contra la pared de plaquetas y se corta en pedazos (Esquistocitos). Si tú le inyectas una bolsa de plaquetas de un donante, le estás dando más moscas para que se peguen al pegamento, y el infarto cerebral la matará. Llévala al banco de sangre, conéctala a la máquina de plasmaféresis para sacar su plasma defectuoso y métele plasma fresco nuevo que tenga las \"tijeras\" intactas para cortar esa telaraña vascular.",
    keyPoints: [
      "Tríada o Péntada de PTT (Púrpura Trombocitopénica Trombótica): Anemia hemolítica (esquistocitos) + Plaquetas Bajas + Trastorno Neurológico.",
      "Causa: Deficiencia de enzima ADAMTS13.",
      "Tratamiento absoluto: PLASMAFÉRESIS (Recambio plasmático).",
      "Prohibido: Transfundir plaquetas."
    ]
  },
  {
    id: "umng-conv-ed4-34",
    university: "UMNG",
    examArea: "NEUROLOGÍA",
    topic: "URGENCIAS Y REHABILITACIÓN",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un hombre de 40 años, parapléjico tras sufrir una sección medular completa a nivel de la vértebra dorsal T4 hace dos años, ingresa a urgencias traído por su cuidador. Refiere que súbitamente presentó un dolor de cabeza pulsátil estallante (\"siento que la cabeza me va a explotar\"). Al examen físico, usted constata una crisis hipertensiva extrema con PA de 220/130 mmHg. Llama la atención que la piel del paciente desde el pecho hacia la cabeza está intensamente enrojecida, caliente y sudando a mares (diaforesis masiva), mientras que de la cintura hacia abajo la piel está pálida y fría. Su frecuencia cardíaca es de 45 lpm (Bradicardia severa). Sabiendo la fisiopatología del nivel de su lesión medular, ¿cuál es la primera maniobra diagnóstica y terapéutica que DEBE realizar usted, antes de siquiera pensar en formular un antihipertensivo intravenoso?",
    options: [
      { id: "A", label: "A", text: "Solicitar TAC de cráneo por sospecha de ACV hemorrágico agudo por la hipertensión." },
      { id: "B", label: "B", text: "Sentar al paciente, aflojarle la ropa y realizar palpación abdominal / pasar una sonda vesical de inmediato." },
      { id: "C", label: "C", text: "Administrar Atropina IV inmediata para revertir la bradicardia parasimpática letal." },
      { id: "D", label: "D", text: "Acostar al paciente en posición de Trendelenburg e infundir Nitroprusiato de Sodio." }
    ],
    correctOptionId: "B",
    explanation: "La **Disreflexia Autonómica** ocurre en pacientes con lesiones medulares a nivel de **T6 o más arriba**. Funciona así: Un estímulo doloroso o irritante ocurre debajo del nivel de la lesión (en el 85% de los casos es la **Vejiga urinaria a punto de estallar** porque la sonda se tapó, o un fecaloma gigante en el recto). El dolor intenta viajar al cerebro, pero choca contra la médula seccionada en T4. Al chocar, se desata un \"cortocircuito\" simpático reflejo masivo hacia abajo: todos los vasos sanguíneos de las piernas y el abdomen se cierran brutalmente, disparando la presión arterial a 220/130 (Palidez inferior). El cerebro detecta esta presión asesina y manda dos órdenes: 1) Baja la frecuencia cardiaca con el Nervio Vago (Bradicardia de 45 lpm) y 2) Abre las arterias para bajar la presión. PERO esta orden vasodilatadora no puede bajar de T4. Así que solo se dilatan y sudan los vasos del pecho, cuello y cabeza (Rubor y sudor superior). ¡El primer paso de oro es **revisar la sonda vesical** para ver si está acodada y destaparla, o pasar una sonda nueva para vaciar la vejiga! Al salir la orina, la presión arterial se normaliza mágicamente en 2 minutos sin necesidad de drogas intravenosas. (También se le debe sentar a 90 grados para que la gravedad baje la presión de la cabeza).\n\n**TRAMPA DEL EXAMEN:** Tratar el síntoma, no la causa: Un paciente hipertenso a 220 tienta a cualquier médico a inyectar Labetalol. Si le das antihipertensivos pero dejas la vejiga llena de aullidos silenciosos, la crisis rebotará. Siempre revisa la ropa apretada, el pañal, las úlceras o la sonda.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., tu paciente no siente sus piernas, pero su médula espinal sí. La bolsa de su vejiga urinaria está llena a reventar y le está gritando de dolor a la médula baja. Como ese grito no puede llegar al cerebro por el muro de la cicatriz en su espalda alta (T4), la médula espinal \"se enloquece\" y suelta una bomba de adrenalina de la cintura para abajo, contrayendo todas las venas. La presión de la sangre es tan brutal que está a punto de romperle los vasos del cerebro. El cuerpo intenta abrir las venas de la cara y sudar para aliviar la presión de la tubería superior. Todo este infierno tecnológico de urgencias se soluciona simplemente destapando la manguerita de plástico de la sonda urinaria que tenía aplastada debajo del muslo, o vaciando su vejiga. Aliviada la vejiga, apagada la crisis.",
    keyPoints: [
      "Lesión Medular T6 o superior + Cefalea + Hipertensión + Sudor por ARRIBA y Palidez por ABAJO de la lesión = Disreflexia Autonómica.",
      "Conducta inicial: Sentar al paciente a 90° + Eliminar el estímulo irritante (El #1 es Vacíar la Vejiga / Pasar Sonda Foley, el #2 es Impactación Fecal)."
    ]
  },
  {
    id: "umng-conv-ed4-35",
    university: "UMNG",
    examArea: "CIRUGÍA GENERAL",
    topic: "GASTROENTEROLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un joven de 24 años con diagnóstico reciente de Colitis Ulcerativa en manejo irregular, acude a urgencias por diarrea con sangre y moco (15 deposiciones al día) desde hace una semana. En las últimas 12 horas, la diarrea se detuvo bruscamente, pero el paciente presenta un deterioro dramático de su estado general. Al ingreso, luce intensamente deshidratado, taquicárdico (135 lpm), febril (39.5°C) y con alteraciones del sensorio. Su abdomen se encuentra severamente distendido, timpánico (suena como tambor) y presenta defensa muscular generalizada (rigidez). Ante la sospecha clínica de una complicación letal de su enfermedad Inflamatoria Intestinal, ¿cuál es el examen de imagen RÁPIDO y de primera línea para confirmar el diagnóstico y qué intervención endoscópica está ABSOLUTAMENTE PROHIBIDA?",
    options: [
      { id: "A", label: "A", text: "Tomografía de abdomen contrastada / Prohibida la Colangiopancreatografía." },
      { id: "B", label: "B", text: "Radiografía simple de abdomen en supino / Prohibida la Colonoscopia total." },
      { id: "C", label: "C", text: "Ecografía abdominal rastreando el marco cólico / Prohibida la Rectosigmoidoscopia rígida." },
      { id: "D", label: "D", text: "Gammagrafía con glóbulos rojos marcados / Prohibida la ecografía con compresión." }
    ],
    correctOptionId: "B",
    explanation: "El **Megacolon Tóxico** ocurre cuando la inflamación severa de la mucosa del colon (por la Colitis Ulcerativa, o a veces por *Clostridioides difficile*) penetra hasta la capa muscular del intestino. El músculo se paraliza y el colon pierde su tono. La caca y los gases fermentados inflan el intestino grueso como un globo gigante de feria. El paciente entra en Sepsis fulminante y el colon está a minutos de estallar. El diagnóstico confirmatorio más rápido y universal se hace con una simple **Radiografía de Abdomen en Supino (KUB)**: se visualizará el colon transverso dilatado masivamente **> 6 centímetros de diámetro**, con pérdida de las haustras y pseudopólipos. En este paciente, intentar meter aire a presión para realizar una **Colonoscopia Total** está **ESTRICTAMENTE PROHIBIDO**, porque la pared del colon es como papel mojado podrido; el endoscopio o el aire la perforarán instantáneamente causando peritonitis fecal mortal. El manejo es médico intensivo (Corticoides IV a dosis altas + Cipro/Metronidazol), y si no mejora en 24-48 horas o si se perfora, requiere Colectomía Subtotal de urgencia.\n\n**TRAMPA DEL EXAMEN:** La Colonoscopia Diagnóstica: A cualquier paciente con sangrado y moco en las heces se le debe hacer colonoscopia para tomar biopsia. PERO, el Megacolon Tóxico es la **excepción absoluta a la regla**. Un abdomen distendido rígido con fiebre es señal de \"No pasar la manguera\".\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., tu paciente tiene una manguera de 6 centímetros de ancho a punto de explotar en su barriga. El sistema inmunológico de su Colitis Ulcerativa atacó tan fuerte el colon que le destruyó los nervios motores. Al no poder contraerse, el colon se quedó paralizado y acumuló todo el gas de las bacterias. La pared intestinal está estirada a su máxima capacidad y es más delgada que el papel celofán. Si tú llamas al gastroenterólogo para que le meta la cámara por el recto, el poquito gas que el endoscopio inyecta para \"poder ver\", va a ser la gota que derrame el vaso. El colon estallará con un ruido seco, regando un litro de heces infectadas en el peritoneo. Tómale una placa de rayos X para confirmar el diámetro, empápalo de esteroides por vena y llama al cirujano general por si la manguera no cede.",
    keyPoints: [
      "Colitis Ulcerativa/C. Difficile + Toxicidad Sistémica (Fiebre/Taquicardia) + Distensión Masiva = Megacolon Tóxico.",
      "Diagnóstico Rápido Inicial: Radiografía simple de abdomen (Colon transverso > 6 cm).",
      "Contraindicación absoluta: COLONOSCOPIA y enemas de bario (Riesgo brutal de perforación)."
    ]
  },
  {
    id: "umng-conv-ed4-36",
    university: "UMNG",
    examArea: "CARDIOLOGÍA",
    topic: "CIRUGÍA CARDIOVASCULAR",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un hombre de 65 años con antecedente de Tuberculosis pulmonar tratada hace 20 años y múltiples episodios de radioterapia en el tórax por un linfoma en la juventud, acude a su consulta por presentar disnea progresiva, cansancio y pesadez en las extremidades. Al examen físico, usted encuentra al paciente con hepatomegalia palpable, edema grado III en miembros inferiores, ascitis marcada y una distensión severa de las venas yugulares. Un hallazgo semiológico en el cuello llama poderosamente su atención: La ingurgitación yugular del paciente AUMENTA visiblemente (se hincha más) cuando el paciente toma una inspiración profunda. A la auscultación cardíaca, usted percibe un ruido protodiastólico de tono alto, breve y sordo tras el segundo ruido. El ecocardiograma descarta insuficiencia cardíaca primaria (FEVI 55%). ¿Cuál es el diagnóstico más certero y qué nombre recibe el signo de la vena yugular al inspirar?",
    options: [
      { id: "A", label: "A", text: "Taponamiento cardíaco crónico / Pulso paradójico." },
      { id: "B", label: "B", text: "Pericarditis Constrictiva / Signo de Kussmaul." },
      { id: "C", label: "C", text: "Cor Pulmonale severo / Signo de Rivero-Carvallo." },
      { id: "D", label: "D", text: "Estenosis de la válvula Tricúspide / Onda \"A\" cañón." }
    ],
    correctOptionId: "B",
    explanation: "La **Pericarditis Constrictiva** es el resultado de la cicatrización. La tuberculosis, la radioterapia o una cirugía de corazón abierto previa, causaron tanta inflamación que el saco del pericardio se volvió una \"coraza de piedra dura\" y calcificada alrededor del corazón. El corazón se contrae bien (FEVI 55%), pero **NO PUEDE RELAJARSE (No puede llenarse en diástole)** porque la coraza rígida no cede. La sangre que intenta llegar de las venas choca contra un muro, regresándose al hígado (hepatomegalia/ascitis) y a los pies (edema masivo). El **Signo de Kussmaul** es la prueba reina: Al tomar aire (inspiración profunda), el pecho succiona sangre hacia el corazón; pero como el corazón derecho está encerrado en piedra y no puede abrirse para recibirla, toda esa sangre extra \"rebota\" y se represa hacia arriba en el cuello, **inflando más la vena yugular a la vista**. Ese \"golpe sordo\" auscultado (Knock pericárdico) es el ruido que hace el ventrículo al golpear súbitamente contra su jaula de piedra en la diástole. El tratamiento curativo es arrancar la piedra con bisturí (Pericardiectomía quirúrgica).\n\n**TRAMPA DEL EXAMEN:** Mnemotecnias que cruzan cables:\n- Presión de sangre que cae >10 mmHg al tomar aire = **Pulso Paradójico** -> Piensa en Taponamiento Cardíaco (Líquido/Agua).\n- Vena Yugular del cuello que sube al tomar aire = **Signo de Kussmaul** -> Piensa en Pericarditis Constrictiva (Cicatriz/Piedra).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el corazón de este anciano está metido dentro de un coco de cemento. Se calcificó porque la Tuberculosis de hace 20 años cicatrizó muy feo en esa zona. Cuando el paciente mete aire a los pulmones, está llamando a la sangre desde las piernas para que llene su corazón. La sangre corre feliz por la Vena Cava hacia arriba, pero se estrella contra las paredes de cemento rígido del atrio derecho. Como el corazón no cedió ni un milímetro de espacio, todo ese volumen de sangre rebota en choque inverso hacia el cuello, haciendo que la vena yugular se infle como un tubo de llanta frente a tus propios ojos (Signo de Kussmaul). Tienes que mandarlo al cirujano cardiovascular, abrir el pecho, y \"pelar/descabezar\" el corazón cortando el cemento hasta que la carne roja pueda volver a latir y expandirse libremente.",
    keyPoints: [
      "Antecedentes clásicos: TB antigua, Radioterapia, Cirugía a corazón abierto.",
      "Falla Cardíaca Derecha + Signo de KUSSMAUL (Yugulares se hinchan en la inspiración) + Golpe Pericárdico = Pericarditis Constrictiva.",
      "(El diagnóstico de imagen Gold Standard para medir el grosor y calcio pericárdico es la Resonancia Magnética Cardiaca o TAC)."
    ]
  },
  {
    id: "umng-conv-ed4-37",
    university: "UMNG",
    examArea: "TRAUMA",
    topic: "CIRUGÍA DE URGENCIAS - ACTUALIZACIÓN ATLS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un paciente de 25 años es ingresado a trauma luego de recibir una herida por arma de fuego en el hemitórax derecho. A los 5 minutos de su llegada, el paciente entra en franco choque hipovolémico y respiratorio (PA 60/40 mmHg, SatO2 80%), las venas yugulares del cuello están ingurgitadas a tensión y la tráquea está desviada hacia la izquierda. Al auscultar el hemitórax derecho, los ruidos respiratorios están abolidos y a la percusión se evidencia timpanismo. Ante el diagnóstico clínico de un Neumotórax a Tensión de extrema gravedad inminente de paro, usted decide realizar una Descompresión Torácica con Aguja (Toracocentesis) inmediata, mientras preparan el tubo a tórax. Según la última actualización de las guías ATLS (10a Edición), ¿cuál es el sitio anatómico de ELECCIÓN en el paciente ADULTO para insertar la aguja o el catéter grueso de descompresión?",
    options: [
      { id: "A", label: "A", text: "En el 2° espacio intercostal, línea medio-clavicular ipsilateral, borde superior de la tercera costilla." },
      { id: "B", label: "B", text: "En el 5° espacio intercostal, ligeramente anterior a la línea axilar media ipsilateral." },
      { id: "C", label: "C", text: "En el 4° espacio intercostal, línea axilar posterior ipsilateral, debajo de la escápula." },
      { id: "D", label: "D", text: "En el 7° espacio intercostal, línea medio-clavicular contralateral para equilibrar presiones." }
    ],
    correctOptionId: "B",
    explanation: "Las guías **ATLS 10a Edición** establecieron que el nuevo sitio OBLIGATORIO de elección primaria para descomprimir un Neumotórax a Tensión con aguja en ADULTOS es el **5° espacio intercostal, levemente por delante de la línea axilar media ipsilateral**. ¿Por qué? Porque en la línea axilar (el costado del pecho, a nivel del pezón), la pared de músculo y grasa es anatómica y estadísticamente **MÁS DELGADA**. Las agujas alcanzan la pleura con un 100% de éxito, garantizando que el aire a presión escape en el primer intento salvavidas. (Siempre pasando por encima del borde superior de la costilla inferior para no lastimar el paquete neurovascular VAN).\n\n**TRAMPA DEL EXAMEN:** Leyes viejas vs Medicina Actualizada: El 90% de los médicos generales que presentan el examen responden instintivamente \"Segundo espacio medioclavicular\". El comité de preguntas de la Nacional AMA esta actualización. Cambia tu disco duro: Adultos van a la axila (5to espacio), Niños van arriba (2do espacio).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., ¿cuántas veces en la vieja escuela clavaron un yelco naranja de catéter periférico en el pecho de un físico culturista chocado y no escucharon el soplido de aire? ¡Cientos de veces! La aguja se quedaba clavada en los tres centímetros de músculo pectoral mayor sin asomarse a la pleura, y el paciente moría en paro obstructivo. El ATLS se dio cuenta de esto. Si le clavas la aguja de lado, por el sobaco (línea axilar media a la altura de la tetilla), solo hay un par de milímetros de costilla y piel. Aseguras el drenaje del aire a presión de inmediato y le devuelves el retorno venoso al corazón de ese joven abriendo la puerta a su recuperación. Siempre actualizado, doctor.",
    keyPoints: [
      "Descompresión con aguja en Neumotórax a Tensión (ATLS 10ma Edición):",
      "ADULTOS: 5° Espacio Intercostal, Línea Axilar Media (ligeramente anterior).",
      "NIÑOS PEDIÁTRICOS: 2° Espacio Intercostal, Línea Medio-clavicular."
    ]
  },
  {
    id: "umng-conv-ed4-38",
    university: "UMNG",
    examArea: "PEDIATRÍA",
    topic: "GASTROENTEROLOGÍA Y GENÉTICA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un recién nacido a término es valorado a las 36 horas de vida debido a que no ha expulsado la primera deposición de meconio. El neonato cursa con distensión abdominal severa y ha empezado a presentar vómitos biliosos. Al examen físico táctil del esfínter anal, NO se produce ninguna expulsión explosiva de gas o heces (Tacto Rectal NEGATIVO para Signo del Chorro/Squirt). Se solicita un enema de contraste soluble en agua (Gastrografín), el cual evidencia un colon de calibre y tamaño diminuto en forma de cinta (\"Microcolon\") y un íleon terminal obstruido por un tapón de múltiples gránulos densos de meconio endurecido que parecen \"burbujas de jabón\" o \"vidrio esmerilado\" (Signo de Neuhauser). Dada la etiología más frecuente de esta obstrucción intestinal neonatal y su base genética, ¿cuál es el diagnóstico de base y qué examen de laboratorio confirmatorio OBLIGATORIO deberá hacérsele a este niño a futuro?",
    options: [
      { id: "A", label: "A", text: "Enfermedad de Hirschsprung / Biopsia de succión rectal." },
      { id: "B", label: "B", text: "Íleo Meconial por Fibrosis Quística / Prueba de Cloro en Sudor (Iontoforesis)." },
      { id: "C", label: "C", text: "Atresia Intestinal Múltiple por consumo materno de cocaína / Cariotipo genético estándar." },
      { id: "D", label: "D", text: "Hipotiroidismo Congénito Severo / Niveles de TSH y T4L en sangre." }
    ],
    correctOptionId: "B",
    explanation: "El **Íleo Meconial** es la manifestación gastrointestinal inicial en el 20% de los pacientes con **Fibrosis Quística**. El defecto del gen CFTR hace que no haya transporte de cloro ni agua en los canales. Sin agua, el meconio (la caca fetal) se vuelve un cemento pegajoso como alquitrán o chicle. Este alquitrán se atora en la última parte del intestino delgado (íleon). El colon, al no recibir heces, se queda chiquito y flaco (\"Microcolon\" en el enema). Las burbujitas de aire mezcladas con el alquitrán grueso se ven como \"burbujas de jabón\" en los rayos X (Signo de Neuhauser). El Enema de Gastrografín (que es hiperosmolar) a menudo funciona como **tratamiento** chupando agua al intestino y logrando destrabar el chicle meconial (si falla, requiere cirugía). Todo niño con Íleo Meconial TIENE FIBROSIS QUÍSTICA hasta que se demuestre lo contrario. La prueba de oro a pedir semanas después es la **Prueba de Iontoforesis de Cloruros en Sudor** y panel genético de CFTR (mutación Delta F508).\n\n**TRAMPA DEL EXAMEN:** Mnemotecnia del Microcolon: Siempre que leas **Microcolon (Colon no usado y chiquito)**, el trancón ocurrió arriba (en el íleon terminal). La causa reina es el **Íleo Meconial**. El Hirschsprung tiene el diámetro del colon en transición (megacolon arriba del defecto).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., si tú crees que tu paciente está estreñido, imagina a este bebé que tiene todo su tubo digestivo relleno con masilla para ventanas que se secó al sol. Al fallarle el gen de la Fibrosis Quística, su cuerpo no sabe cómo botar agua hacia la luz del intestino para aflojar el popó fetal. El meconio es literalmente alquitrán negro pegado a las paredes del íleon. Meterle el dedo por el recto es inútil porque la masa de cemento está medio metro más arriba de tu dedo. Aquí el radiólogo es tu salvador; inyecta un medio de contraste líquido y super salado por el ano, de modo que atraiga el agua a la fuerza de las paredes del intestino y diluya el chicle negro. Si funciona, el bebé evacuará. Y prepárate, porque estarás firmando su remisión al neumólogo por la pesadilla pulmonar que se le viene en su niñez.",
    keyPoints: [
      "Retraso Meconial (>48h) + Tacto Rectal Vacío (No explosivo) + Microcolon en el enema de bario = Íleo Meconial.",
      "Enfermedad genética causante >90% de los casos: FIBROSIS QUÍSTICA.",
      "Prueba a pedir a futuro: Cloruros en Sudor."
    ]
  },
  {
    id: "umng-conv-ed4-39",
    university: "UMNG",
    examArea: "TOXICOLOGÍA",
    topic: "PEDIATRÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un niño de 3 años de edad, previamente sano, es llevado a urgencias por sus padres. Refieren que hace 3 horas el niño se encerró en el cuarto de sus abuelos y encontraron en el suelo un frasco de pastillas dispersas en el piso. El envase no tenía la etiqueta original. El niño ingresa vomitando activamente un material oscuro, tipo cuncho de café (hematemesis), y además ha presentado diarrea negruzca. Al examen físico: el niño está letárgico y severamente hipotenso (PA 60/40 mmHg) y pálido (choque). Usted solicita de inmediato una Radiografía Simple de Abdomen, en la que observa asombrado la presencia de múltiples pequeñas pastillas o grageas RADIOPACAS (blancas, circulares) distribuidas en la cavidad gástrica e intestinal. Los gases arteriales reportan una Acidosis Metabólica severa con Anión Gap elevado. ¿Cuál es el compuesto causal de esta catástrofe tóxica y cuál es el antídoto INTRAVENOSO OBLIGATORIO que tiñe la orina de rojo vino al excretar el tóxico?",
    options: [
      { id: "A", label: "A", text: "Intoxicación por Fenobarbital / Antídoto: Flumazenil y diuresis forzada alcalina." },
      { id: "B", label: "B", text: "Intoxicación por Ácido Acetilsalicílico (Aspirina) / Antídoto: Bicarbonato de Sodio IV." },
      { id: "C", label: "C", text: "Intoxicación por Sales de Hierro (Vitaminas) / Antídoto: Deferoxamina (Desferroxamina) intravenosa." },
      { id: "D", label: "D", text: "Intoxicación por Plomo contenido en juguetes o chumbos / Antídoto: Dimercaprol (BAL)." }
    ],
    correctOptionId: "C",
    explanation: "Las \"chispitas de hierro\" o las **pastillas prenatales de sulfato ferroso** son de color rojo dulce y los abuelos suelen dejarlas en las mesitas de noche. Los niños las tragan como dulces. El **Hierro** es un metal de doble filo. En cantidades tóxicas, actúa primero como un CAÚSTICO potente en el estómago (quemando la mucosa y causando dolor, úlceras y vómito de sangre - hematemesis). Luego, el hierro se absorbe, entra a las células y actúa como veneno mitocondrial interfiriendo en el ciclo celular, induciendo una **Acidosis láctica y Choque cardiogénico masivo**. La joya diagnóstica en toxicología es que las pastillas de metal se ven como **monedas brillantes (radiopacas) en la radiografía de barriga** de los niños. El único salvavidas biológico que la ciencia ofrece es la **DEFEROXAMINA**, un quelante intravenoso que busca al hierro libre en la sangre, lo \"abraza\" firmemente (formando ferrioxamina) y lo elimina por el riñón. Esa sustancia eliminada tiñe la orina del paciente de color rojo o \"vino rosado/vin-rosé\", lo cual te avisa que el medicamento está funcionando perfecto.\n*(Nota: El Lavado Intestinal Total con PEG es la terapia de limpieza física porque el hierro no se une al carbón activado).*\n\n**TRAMPA DEL EXAMEN:** Mnemotecnia CHIPES de Radiopacidad Abdominal: Son muy pocas pastillas o drogas las que brillan en una Rx simple de abdomen. Aprende la frase **\"CHIPES\"**:\n- **C**loral (Hidrato de).\n- **H**eavy metals (Metales pesados: Plomo, Zinc, Bario).\n- **I**ron (**HIERRO**).\n- **P**henothiazines (Fenotiazinas).\n- **E**nteric coated (Pastillas con cubierta entérica gruesa).\n- **S**olventes halogenados.\nSi la viñeta de pediatría dice \"pastillas blancas brillantes en la Rx\", el diagnóstico es **Hierro**.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., un niño tragándose las pastillas para la anemia de la abuela es un niño que literalmente se ha tragado ácido ardiente para metales. El hierro suelto le \"derritió\" la capa interna de su estómago, por eso las sábanas de urgencias están rojas del vómito. Si le metes Carbón Activado, el carbón rodará inútil por el intestino, porque al carbón no le \"gusta\" pegarse a los metales pesados o cationes. Pídele al radiólogo que le tome una placa al abdomen, si ves los punticos blancos, prepara galones de Suero PEG por una sonda nasogástrica (para que salgan en la deposición como balas). Al mismo tiempo inyecta dosis continuas de Deferoxamina por las venas para lavar la sangre de este metal asesino.",
    keyPoints: [
      "Píldoras desconocidas + Hematemesis + Choque + Pastillas en la Radiografía = Intoxicación por HIERRO.",
      "El Carbón Activado es INÚTIL contra el Hierro.",
      "Antídoto Quelante de Oro: DEFEROXAMINA (Desferroxamina) IV. (Seño de acción: orina rojo vino)."
    ]
  },
  {
    id: "umng-conv-ed4-40",
    university: "UMNG",
    examArea: "PSIQUIATRÍA",
    topic: "URGENCIAS Y TOXICOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Usted es el residente de urgencias durante la noche. Ingresa un hombre de 45 años, sin hogar y con diagnóstico de trastorno por consumo de alcohol severo. El paciente fue ingresado hace 72 horas por una pancreatitis aguda leve secundaria a una borrachera masiva (se le suspendió la vía oral y, obviamente, el acceso al alcohol). Esta noche, la enfermera lo llama aterrorizada a la habitación: el paciente está en un estado de agitación y delirio incontrolable. Suda a mares, está profundamente desorientado, y grita despavorido asegurando que \"las paredes de la habitación están cubiertas de cucarachas y arañas gigantes que le caminan por la cara\" (Alucinaciones visuales y táctiles terroríficas). Al evaluarlo, usted documenta PA 180/110 mmHg, FC 135 lpm, fiebre de 38.5°C y un temblor grueso y brusco en sus manos. Dada la evolución cronológica y la presentación hiper-adrenérgica, ¿cuál es el diagnóstico psiquiátrico vital y la conducta farmacológica INTRAVENOSA de primera elección para abortar este cuadro letal?",
    options: [
      { id: "A", label: "A", text: "Síndrome de Wernicke inminente / Infusión rápida de Haloperidol y Tiamina a megadosis." },
      { id: "B", label: "B", text: "Delirium Tremens (Abstinencia Alcohólica Grave) / Diazepam o Lorazepam intravenoso a dosis altas y tituladas." },
      { id: "C", label: "C", text: "Psicosis Esquizofrénica de inicio tardío / Ziprasidona intramuscular y contención física." },
      { id: "D", label: "D", text: "Intoxicación por Cocaína de diseño cruzada con la abstinencia / Labetalol intravenoso directo." }
    ],
    correctOptionId: "B",
    explanation: "El cerebro del alcohólico está \"bañado\" todo el tiempo en un líquido que lo deprime y lo apaga (el alcohol potencia el GABA). Para mantenerse despierto, el cerebro fabricó muchísimos receptores excitatorios (Glutamato) extra. Al hospitalizarlo por la pancreatitis, tú le cortaste el alcohol. Sin freno GABA y con un exceso brutal de Glutamato excitador, el cerebro hace \"cortocircuito\". A las 6h de dejar de beber hay temblor, a las 24h puede haber convulsiones (Rum fits), pero a los 2 a 4 días (48-96h) entra el demonio maestro: El Delirium Tremens. El sistema nervioso simpático colapsa: el paciente hierve en fiebre sin estar infectado, el corazón late a 140 lpm y experimenta las famosas alucinaciones terroríficas de ver \"bichos caminando\" (Microzoopsias). El Delirium Tremens MATA a casi un 15% de los pacientes por arritmias letales o colapso vascular si no se frena de inmediato. La única forma de apagar el cerebro es darle una droga \"prima\" del alcohol que reemplace su efecto en el receptor GABA: Las BENZODIACEPINAS (Diazepam, Lorazepam o Clordiazepóxido). Se ponen en inyecciones fuertes por la vena hasta que el paciente duerma plácidamente. (Si el hígado está dañado se usa Lorazepam porque no daña más).\n\n**TRAMPA DEL EXAMEN:** Asociar locura con antipsicóticos: El error imperdonable de urgencias es ver a un tipo gritando y tirando golpes por las alucinaciones y decir: \"Póngale Haloperidol, está psicótico\". En el Delirium Tremens, si tú le pones Haloperidol, bajarás el umbral del cerebro y lo harás convulsionar hasta el estatus epiléptico y la muerte. Las Benzodiacepinas son el ÚNICO camino de oro.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., tu paciente lleva tres días \"seco\" en la camilla de cirugía y su cerebro acaba de rebelarse. Literalmente sus neuronas están siendo fritadas por un tsunami de Glutamato sin nadie que lo controle. Las arañas y los murciélagos que él ve trepando por el techo son tan reales para él como tú o como yo. Tu paciente está a minutos de sufrir un infarto miocárdico o un paro convulsivo por la adrenalina. No traigas drogas de psiquiatra (Haloperidol). Ve al carro de paro, rompe varias ampollas de Diazepam, conéctalo al monitor, y empújale esa medicina milagrosa por el catéter hasta que el hombre cierre los ojos, los signos vitales se tranquilicen y empiece a roncar. Tú lo salvaste del \"mono en la espalda\" de la peor droga legal del mundo.",
    keyPoints: [
      "Alcohólico hospitalizado + Empieza con temblores y locura a las 48-72h + Alucinaciones Visuales/Táctiles (Insectos) + Hipertensión y Fiebre = DELIRIUM TREMENS.",
      "Es una emergencia médica con mortalidad intrínseca alta.",
      "Único tratamiento avalado de oro: Altas dosis de Benzodiacepinas (Diazepam / Lorazepam IV)."
    ]
  }
];
