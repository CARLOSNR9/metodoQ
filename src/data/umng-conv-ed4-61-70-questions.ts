import type { TrainingQuestion } from "@/lib/questions/types";

export const UMNG_CONV_ED4_61_70_QUESTIONS: TrainingQuestion[] = [
  {
    id: "umng-conv-ed4-61",
    university: "UMNG",
    examArea: "TOXICOLOGÍA",
    topic: "MEDICINA DE URGENCIAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Una joven de 19 años es traída a urgencias por sus amigos tras haber ingerido un frasco entero de pastillas desconocidas hace 4 horas en un intento suicida. Al ingreso, la paciente está confusa, febril (38.5°C), sudorosa y se queja de un zumbido intenso en los oídos (tinnitus). Llamativamente, la paciente presenta una frecuencia respiratoria de 35 respiraciones por minuto (Taquipnea profunda). Se solicitan unos gases arteriales de urgencia a nivel del mar, los cuales reportan el siguiente trastorno ácido-base paradójico: pH 7.42 (Normal), pCO2 20 mmHg (muy bajo), HCO3 12 mEq/L (muy bajo) y un Anión Gap elevado de 22 mEq/L. Teniendo en cuenta la firma tóxica y el trastorno mixto, ¿cuál fue el medicamento ingerido y cuál es el pilar de tratamiento intravenoso para facilitar su excreción?",
    options: [
      { id: "A", label: "A", text: "Intoxicación por Acetaminofén / N-Acetilcisteína intravenosa." },
      { id: "B", label: "B", text: "Intoxicación por Ácido Acetilsalicílico (Aspirina) / Bicarbonato de Sodio intravenoso para alcalinizar la orina." },
      { id: "C", label: "C", text: "Intoxicación por Metanol / Etanol o Fomepizol." },
      { id: "D", label: "D", text: "Intoxicación por Benzodiacepinas / Flumazenil y asistencia ventilatoria." }
    ],
    correctOptionId: "B",
    explanation: "La Aspirina en dosis tóxicas hace dos cosas letales. Primero: estimula directamente el centro respiratorio, obligando al paciente a hiperventilar (Alcalosis Respiratoria). Segundo: entra a las células y desacopla la fosforilación oxidativa, obligando al cuerpo a producir ácido láctico y cetoácidos (Acidosis Metabólica con Anión Gap Elevado). Como la paciente tiene una alcalosis respiratoria \"jalando el pH hacia arriba\" y una acidosis metabólica \"jalando el pH hacia abajo\", el pH final suele salir NORMAL (ej. 7.42), engañando al médico novato. El tinnitus es el síntoma neurológico temprano patognomónico. El tratamiento salvavidas consiste en administrar Bicarbonato de Sodio Intravenoso para Alcalinizar la Orina (pH urinario > 7.5). Al volver la orina alcalina, el ácido salicílico se ioniza (atrapamiento iónico), no puede regresar a la sangre y se excreta masivamente por los riñones.\n\n**TRAMPA DEL EXAMEN:** El pH Normal en gases arteriales: En toxicología, un pH normal con un pCO2 bajísimo y un Bicarbonato bajísimo grita Trastorno Mixto Letal. Es la firma inconfundible de la sobredosis de Aspirina.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el cerebro de esta muchacha recibió la orden química de respirar a 35 por minuto, agotándola. Mientras tanto, sus células se están asando por dentro porque la fábrica de energía se averió, produciendo fiebre alta y ácido láctico a mares. Si miras su pH de 7.42 y dices \"está perfecta, pasémosla a psiquiatría\", la chica hará un paro respiratorio por agotamiento muscular. Cuélgale una bomba de Bicarbonato de Sodio para que su orina se vuelva básica; el veneno de la aspirina quedará \"atrapado\" eléctricamente en los túbulos del riñón y lo desechará al inodoro.",
    keyPoints: [
      "Tríada Tóxica del Salicilismo (Aspirina):",
      "1. Tinnitus (Zumbido en oídos) + Vértigo.",
      "2. Hiperventilación central (Alcalosis Respiratoria).",
      "3. Desacople celular con fiebre (Acidosis Metabólica de Anión Gap alto).",
      "Tratamiento de excreción: Alcalinización de la orina con Bicarbonato de Sodio IV."
    ]
  },
  {
    id: "umng-conv-ed4-62",
    university: "UMNG",
    examArea: "NEONATOLOGÍA",
    topic: "PEDIATRÍA INTENSIVA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un neonato de 41 semanas de gestación nace por parto vaginal complicado debido a la presencia de líquido amniótico \"espeso como puré de guisantes\" (Líquido meconial espeso). Al nacer, el niño no llora, está cianótico y requiere intubación orotraqueal tras ventilarlo. En la UCIN, la radiografía de tórax muestra hiperinsuflación pulmonar masiva, aplanamiento de los hemidiafragmas y parches de infiltrados algodonosos difusos gruesos. A pesar de estar intubado con un FiO2 del 100%, el neonato persiste con una cianosis profunda. Usted toma dos oximetrías de pulso simultáneas: el oxímetro en la mano derecha marca 92%, mientras que el oxímetro en el pie izquierdo marca 75%. ¿Cuál es el diagnóstico de la complicación hemodinámica fatal que explica esta diferencia de oxigenación y qué gas inhalado es la terapia de rescate?",
    options: [
      { id: "A", label: "A", text: "Enfermedad de Membrana Hialina / Surfactante endotraqueal." },
      { id: "B", label: "B", text: "Hipertensión Pulmonar Persistente del Recién Nacido (HPPN) / Óxido Nítrico Inhalado (iNO)." },
      { id: "C", label: "C", text: "Coartación de la Aorta / Prostaglandina E1 intravenosa." },
      { id: "D", label: "D", text: "Transposición de Grandes Vasos / Septostomía auricular de Rashkind." }
    ],
    correctOptionId: "B",
    explanation: "El bebé aspiró el meconio denso (SAM). Este meconio taponó los bronquios actuando como \"válvulas\" y causa una neumonitis química severa. Por culpa de la hipoxia brutal, las arterias de los pulmones del bebé hacen un espasmo violento y se cierran (Hipertensión Pulmonar Persistente - HPPN). Al cerrarse, la presión en el lado derecho del corazón supera a la del lado izquierdo. La sangre azul (desoxigenada) del ventrículo derecho no puede entrar a los pulmones, así que \"se escapa\" por el Conducto Arterioso (Ductus) abierto directo hacia la Aorta Descendente, para ir a las piernas. Por eso, la Mano Derecha (Pre-ductal), que recibe sangre antes del conducto arterioso, tiene oxígeno del 92%. Pero el Pie (Post-ductal), que recibe la sangre azul que se coló por el ductus, marca 75%. Esta diferencia de >10% es la firma diagnóstica de la HPPN. El salvavidas absoluto es el Óxido Nítrico Inhalado (iNO), que es un gas vasodilatador pulmonar ultra-potente.\n\n**TRAMPA DEL EXAMEN:** Mano derecha vs Pie: Si lees esto en neonatología, el examinador te está midiendo el cortocircuito (Shunt). Si la mano derecha está mejor que el pie, hay un cable \"trampa\" (el ductus) metiendo sangre azul a la mitad inferior del cuerpo. Eso es Hipertensión Pulmonar o Shunt derecha-izquierda.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., los pulmones de este bebé están tapados con alquitrán fetal (meconio). Se asfixió tanto en el parto que las arterias de sus pulmones se asustaron y se cerraron con llave. Su corazón derecho está empujando sangre contra un muro. Como la sangre es perezosa, encontró una puerta trasera abierta (el conducto arterioso) y se escapó directo hacia la Aorta que va a las piernas. Por eso su brazo derecho tiene sangre medianamente decente, pero sus piernas reciben pura sangre azul desoxigenada. Métele gas de Óxido Nítrico por el tubo del ventilador para relajar las arterias pulmonares.",
    keyPoints: [
      "Aspiración de Meconio (Bebé a término) + Oximetría Mano Derecha > Pie Izquierdo (Diferencia >10%) = Hipertensión Pulmonar Persistente (HPPN).",
      "Tratamiento médico rescatador: Óxido Nítrico Inhalado (iNO)."
    ]
  },
  {
    id: "umng-conv-ed4-63",
    university: "UMNG",
    examArea: "NEFROLOGÍA",
    topic: "MEDICINA INTERNA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un hombre de 25 años consulta a urgencias por presentar un cuadro de orina \"de color rojizo\" (hematuria macroscópica franca) desde esta mañana. Al indagar en sus antecedentes, el paciente menciona que hace exactamente 2 días empezó con malestar general, dolor de garganta y fiebre baja (Infección de Vías Respiratorias Altas en curso). No presenta edemas, y su presión arterial es de 125/80 mmHg. Los laboratorios de urgencia muestran una función renal conservada (Creatinina 1.0 mg/dL), y el panel de complemento sérico reporta niveles de C3 y C4 estrictamente NORMALES. El uroanálisis confirma incontables eritrocitos dismórficos y cilindros eritrocitarios. ¿Cuál es el diagnóstico clínico más probable de esta glomerulopatía aguda en el paciente joven?",
    options: [
      { id: "A", label: "A", text: "Glomerulonefritis Postestreptocócica (GNPE)." },
      { id: "B", label: "B", text: "Nefropatía por IgA (Enfermedad de Berger)." },
      { id: "C", label: "C", text: "Síndrome de Alport." },
      { id: "D", label: "D", text: "Glomerulonefritis Membranoproliferativa (Enfermedad de Goodpasture)." }
    ],
    correctOptionId: "B",
    explanation: "La Nefropatía por IgA (Enfermedad de Berger) es la glomerulonefritis primaria más frecuente en el mundo. El paciente tiene un defecto en su Inmunoglobulina A. Cuando pilla un virus o bacteria en la garganta hoy, su cuerpo produce toneladas de IgA defectuosa. Esos anticuerpos IgA bajan inmediatamente al riñón y se incrustan en el centro de los glomérulos (Depósitos en el mesangio). Por esto, la sangre en la orina aparece A LOS 1-3 DÍAS de la gripa (Hematuria Sinfaringítica). Como la IgA activa otra vía del complemento distinta a la clásica, los niveles de C3 en la sangre del paciente aparecen siempre NORMALES.\n\n**TRAMPA DEL EXAMEN:** Dolor de garganta = Postestreptococo: La UMNG utiliza esta asociación mental para hacerte fallar. Tienes que leer \"CUÁNDO\" orinó sangre.\n- Orinó sangre a los 2 días de la gripa y C3 Normal = Berger (IgA).\n- Orinó sangre a las 3 semanas de la gripa y C3 Bajo = Postestreptocócica.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., tu paciente tiene un problema de fabricación de anticuerpos. Cada vez que le da una gripita banal, su cuerpo produce ejércitos de defensas \"IgA\" deformes. Esas defensas defectuosas viajan por la sangre y se van al fondo de la \"cañería\" de su riñón, tapándola. La presión rompe los vasitos capilares y la orina se le tiñe de rojo en apenas 48 horas de haber empezado a toser. Míralo bien: no está hinchado, su presión es de un deportista y su nivel de complemento en sangre está intacto. No le mandes penicilina creyendo que es el estreptococo de la infancia.",
    keyPoints: [
      "Joven + Hematuria SINFARINGÍTICA (Ocurre al mismo tiempo o <3 días que la infección respiratoria).",
      "Marcador de laboratorio crucial: COMPLEMENTO C3 NORMAL.",
      "Diagnóstico: Nefropatía por IgA (Enfermedad de Berger)."
    ]
  },
  {
    id: "umng-conv-ed4-64",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "URGENCIAS QUIRÚRGICAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Una mujer de 33 años, G3P2 (con un parto gemelar previo y un parto a término), con un embarazo actual de 36 semanas de gestación, es ingresada de urgencia. Fue encontrada por su esposo retorciéndose en el piso del baño tras haber consumido base de cocaína inhalada hace 3 horas. Al examen físico, la paciente grita de dolor refiriendo un cólico abdominal que \"no se le quita ni un segundo\". A la palpación, el útero está extremadamente rígido, duro y doloroso, sin relajación entre las contracciones (Útero leñoso o Hipertonía uterina severa). Presenta un sangrado vaginal oscuro, escaso, de mal aspecto. En el monitor, el feto presenta una bradicardia severa sostenida de 80 lpm. Se pasa la paciente inmediatamente a quirófano para cesárea de emergencia. Al abrir la cavidad abdominal, el cirujano encuentra un útero de color violáceo, azulado-negruzco e infiltrado de sangre en toda su pared muscular. ¿Cuál es el diagnóstico principal y qué nombre recibe este hallazgo anatómico patognomónico observado en el útero?",
    options: [
      { id: "A", label: "A", text: "Ruptura Uterina / Signo de Bandl." },
      { id: "B", label: "B", text: "Placenta Accreta masiva / Útero de Sheehan." },
      { id: "C", label: "C", text: "Desprendimiento Prematuro de Placenta Normoinserta (Abruptio) / Útero de Couvelaire." },
      { id: "D", label: "D", text: "Infarto Uterino por isquemia cocaínica / Útero de Bumm." }
    ],
    correctOptionId: "C",
    explanation: "El Desprendimiento Prematuro de Placenta (Abruptio Placentae) es la separación de la placenta antes del nacimiento del bebé. El principal factor de riesgo adquirido mortal es el consumo de cocaína o la Preeclampsia severa, los cuales causan un vasoespasmo brutal y rompen los vasos que unen la placenta al útero. La sangre se acumula a altísima presión DETRÁS de la placenta. Esta presión extrema obliga al útero a contraerse de forma tetánica e ininterrumpida (Hipertonía uterina / Útero de madera o leñoso), que es la causa del dolor insoportable continuo. A veces la sangre no sale por la vagina (abruptio oculto), sino que la presión de la sangre es tan absurda que se mete y rompe las propias fibras musculares del miometrio, tiñendo al útero por dentro de un color azul-morado como un moretón gigante. A esto se le conoce como Útero de Couvelaire (Apoplejía uteroplacentaria).\n\n**TRAMPA DEL EXAMEN:** Mimetismo entre hemorragias del 3er trimestre:\n- Útero RELAJADO + Sangrado ROJO brillante + NO HAY DOLOR = Placenta Previa.\n- Útero DURO (Leñoso) + Sangrado OSCURO + MUCHO DOLOR continuo = Abruptio Placentae.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la dosis de cocaína que esta madre aspiró cerró las arterias de su placenta como una guillotina. La placenta se despegó del muro del útero y un lago de sangre a presión empezó a formarse entre el bebé y la pared. Como la sangre no tiene por dónde salir bien, empezó a meterse a la fuerza entre las fibras del músculo de la matriz, \"tatuándolo\" de color negro púrpura y envenenándolo (Útero de Couvelaire). La barriga de la señora está dura como una piedra y no se relaja ni un segundo. Si no haces la incisión de cesárea en menos de 5 minutos, sacarás a un feto óbito y la madre te hará un Coagulación Intravascular Diseminada en la mesa.",
    keyPoints: [
      "Abruptio Placentae Severo (Dolor + Hipertonía + Sangrado oscuro + Cocaína/HTA).",
      "Complicación anatómica quirúrgica: Útero de COUVELAIRE (Útero amoratado, atónico, infiltrado por sangre).",
      "Manejo: Cesárea EMERGENTE."
    ]
  },
  {
    id: "umng-conv-ed4-65",
    university: "UMNG",
    examArea: "CIRUGÍA GENERAL",
    topic: "UROLOGÍA Y TRAUMA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un hombre de 35 años ingresa a urgencias tras haber sido atropellado por un camión. A la evaluación inicial, el paciente se encuentra quejándose de dolor severo en la pelvis y no ha logrado orinar desde el accidente. Signos vitales: PA 115/75 mmHg, FC 100 lpm. Usted evidencia una marcada deformidad en la pelvis y la radiografía confirma una fractura compleja de las ramas isquiopúbicas bilaterales (Anillo pélvico inestable). El paciente NO presenta sangre en el meato uretral (se descarta lesión de uretra), por lo que se procede a insertar una sonda Foley, obteniendo orina densamente hemática. Para descartar una lesión vesical, se realiza una Cistografía Retrograda por TAC. El reporte del radiólogo indica: \"Extravasación de medio de contraste que se acumula confinada al espacio perivesical (espacio de Retzius) en forma de 'llamas' o 'estrías' a los lados de la pelvis. No hay contraste delineando las asas intestinales.\" Sabiendo el tipo de ruptura vesical, ¿cuál es el tratamiento definitivo MÁS ADECUADO en este paciente que se encuentra hemodinámicamente estable?",
    options: [
      { id: "A", label: "A", text: "Laparotomía exploratoria urgente para cierre en dos planos de la cúpula vesical con sutura reabsorbible." },
      { id: "B", label: "B", text: "Manejo médico exclusivo mediante el drenaje continuo con la Sonda Foley (Tubo uretral) durante 10 a 14 días." },
      { id: "C", label: "C", text: "Colocación de catéteres de nefrostomía percutánea bilaterales para derivar la orina antes de que llegue a la vejiga." },
      { id: "D", label: "D", text: "Empaquetamiento preperitoneal pélvico inmediato debido a la extravasación radiológica." }
    ],
    correctOptionId: "B",
    explanation: "El 80% de las rupturas de vejiga son EXTRAPERITONEALES. Ocurren cuando un hueso roto de la pelvis fracturada actúa como una daga y corta la pared inferior de la vejiga. La orina se fuga, pero se queda atrapada en el tejido adiposo de la pelvis (Espacio de Retzius), viéndose en el TAC como un manchón feo en \"forma de llamarada\". Al estar por fuera del saco peritoneal, la orina NO toca los intestinos, por lo que no hace peritonitis urinosa química letal. Si el paciente no va a quirófano por otro motivo ortopédico, el tratamiento de oro dictado por urología es CONSERVADOR (NO OPERATORIO). Se le deja la Sonda Foley metida drenando la orina por 10 a 14 días. Al vaciar el globo de la vejiga constantemente, el \"hueco\" se desinfla, se pega y cicatriza mágicamente por sí solo.\n\n**TRAMPA DEL EXAMEN:** Operar toda vejiga rota: El estudiante lógico piensa \"Hueco que gotea = Hueco que se cose\". En urología, el poder de cicatrización de la vejiga inferior es milagroso si la mantienes vacía. No caigas en la trampa del bisturí.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., tu paciente tiene el hueso púbico partido en astillas. Una de esas astillas rasguñó la base de su vejiga. Si metes un cuchillo ahí para intentar coser ese pequeño desgarro, vas a destapar el nido de venas rotas que están detrás de su hueso fracturado y el hombre se desangrará. Deja la naturaleza actuar. El piso de la vejiga cicatriza más rápido que cualquier otro tejido si le quitas la presión de encima. Con solo dejarle la sonda de la orina puesta, la vejiga quedará totalmente plana y desinflada. Los bordes del hueco se juntarán solitos.",
    keyPoints: [
      "Contraste baña intestinos = Ruptura INTRAPERITONEAL -> LAPAROTOMÍA y Sutura. (Asociado a cinturón de seguridad y vejiga llena).",
      "Contraste confinado a pelvis (\"Llamarada\") = Ruptura EXTRAPERITONEAL -> Sonda Foley por 10-14 días (NO OPERATORIO). (Asociado a fractura de pelvis)."
    ]
  },
  {
    id: "umng-conv-ed4-66",
    university: "UMNG",
    examArea: "MEDICINA INTERNA",
    topic: "CARDIOLOGÍA DE URGENCIAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un paciente de 75 años acude al servicio de urgencias acompañado de su hija tras presentar dos episodios de síncope (\"desmayos\") esta mañana, asociados a debilidad progresiva y disnea de esfuerzos en los últimos meses. Al examinar los signos vitales, el paciente está bradicárdico (FC de 55 lpm), pero normotenso. A la palpación del pulso arterial carotídeo, usted percibe un pulso que asciende muy lentamente y se siente de baja amplitud (Pulso parvus et tardus). A la auscultación cardíaca en el foco aórtico (segundo espacio intercostal derecho), usted identifica de inmediato un soplo sistólico eyectivo, rudo, con patrón en \"diamante\" (crescendo-decrescendo), que se irradia fuertemente hacia ambas arterias carótidas en el cuello. ¿Cuál es el diagnóstico clínico evidente y cuál es la TRÍADA sintomática clásica que marca el inicio de la alta mortalidad en esta valvulopatía?",
    options: [
      { id: "A", label: "A", text: "Estenosis Mitral severa / Tríada de hemoptisis, disfonía y fibrilación auricular." },
      { id: "B", label: "B", text: "Insuficiencia Aórtica aguda / Tríada de pulso saltón de Corrigan, danza carotídea y soplo diastólico." },
      { id: "C", label: "C", text: "Miocardiopatía Hipertrófica Obstructiva / Tríada de soplo que aumenta al pujar, síncope y dolor precordial." },
      { id: "D", label: "D", text: "Estenosis Valvular Aórtica severa / Tríada de Angina, Síncope y Disnea (SAD)." }
    ],
    correctOptionId: "D",
    explanation: "La Estenosis Aórtica senil o degenerativa es el endurecimiento por calcio de la válvula de salida del corazón. El ventrículo izquierdo tiene que empujar la sangre a través de un hueco duro y estrecho. La sangre sale con tanta fricción que raspa las paredes, creando el famoso Soplo Sistólico (en forma de rombo o crescendo-decrescendo) que se irradia hacia arriba a las carótidas del cuello. Como a la sangre le cuesta tanto salir, el pulso que le llega al doctor a los dedos se siente flojo y se demora en aparecer tras el latido: Pulso Parvus et Tardus (Pequeño y Tardío). El paciente puede vivir 20 años asintomático, pero el día que presenta uno de los signos de la Tríada \"SAD\" (Síncope, Angina, Disnea o Falla Cardíaca), su mortalidad a 3 años escala al 50%. Debe enviarse a cirugía de reemplazo valvular o TAVI (implante percutáneo) antes de que haga muerte súbita.\n\n**TRAMPA DEL EXAMEN:** Mnemotecnia visual y auditiva: En el cuello se sienten los soplos Aórticos (porque el cuello está arriba, hacia donde sale la sangre). En la axila se sienten los soplos Mitrales (porque la axila está al lado del ventrículo). ¡Aórtico Sube, Mitral se esconde en la Axila!\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la puerta principal del corazón de este abuelo se volvió un bloque de cemento viejo y calcificado. El ventrículo se está matando empujando sangre para que el cuerpo del paciente siga andando, pero el agujero de la puerta es tan pequeño que la presión no da abasto. El día de hoy el cerebro del abuelo no recibió suficiente oxígeno y ¡Pum!, se desmayó en la calle. Tócale el pulso de la muñeca; verás que se siente como un hilito de agua perezoso, porque la presión se perdió en la puerta cerrada (Parvus et tardus). Ponle el fonendoscopio en el cuello y olerás el problema: un soplo furioso como un motor ahogado raspándole las carótidas.",
    keyPoints: [
      "Estenosis Aórtica: Soplo Sistólico, foco aórtico, Irradiado al Cuello (Carótidas).",
      "Pulso: Parvus et tardus (Pobre y Lento).",
      "Tríada de Mortalidad (SAD): Síncope, Angina, Disnea (Falla cardiaca). Implica Reemplazo Valvular inminente."
    ]
  },
  {
    id: "umng-conv-ed4-67",
    university: "UMNG",
    examArea: "HEMATOLOGÍA",
    topic: "PEDIATRÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un niño de 7 años de raza negra, con diagnóstico previo de Anemia de Células Falciformes (Drepanocitosis) en seguimiento pediátrico, es traído de urgencia al hospital rural. La madre refiere que el niño lleva 3 días con un cansancio extremo, se niega a jugar, y nota que \"se está poniendo blanco como el papel\". Al interrogar a la madre, ella comenta que hace dos semanas, la hermanita menor del paciente cursó con una enfermedad viral leve caracterizada por una erupción en la piel que la hacía ver como si le hubieran \"dado dos bofetadas\" en las mejillas (Eritema Infeccioso). Al examen del niño actual, palidez mucocutánea severa, taquicardia de 140 lpm y no hay ictericia ni esplenomegalia palpable. El hemograma muestra una caída brutal de la Hemoglobina a 4.0 g/dL (basal de 8.5 g/dL). Usted solicita un recuento de Reticulocitos, el cual se reporta en 0.1% (indetectables). Teniendo en cuenta la enfermedad de la hermana y el laboratorio, ¿cuál es el agente patógeno etiológico de esta crisis letal de la sangre?",
    options: [
      { id: "A", label: "A", text: "Virus del Epstein-Barr (EBV) / Mononucleosis Infecciosa." },
      { id: "B", label: "B", text: "Virus de la Inmunodeficiencia Humana (VIH) tipo 1." },
      { id: "C", label: "C", text: "Parvovirus B19 / Crisis Aplásica Transitoria." },
      { id: "D", label: "D", text: "Citomegalovirus (CMV) / Hemólisis intravascular fulminante." }
    ],
    correctOptionId: "C",
    explanation: "El Parvovirus B19 es el virus que causa la Quinta Enfermedad (Eritema Infeccioso) en los niños sanos, la famosa enfermedad del sarpullido en la cara que parece \"mejilla abofeteada\". En un niño sano, esto es una gripita banal de 3 días. PERO, el Parvovirus B19 tiene una afinidad letal: ataca e invade a los pronormoblastos de la médula ósea y las \"apaga\" por 1 a 2 semanas. Un niño sano normal no lo nota, porque sus glóbulos rojos viven 120 días. Pero un niño con Anemia Falciforme (sus glóbulos rojos deformes solo duran 15 días vivos) depende de su médula trabajando al 1000% las 24 horas del día. Si tú le \"apagas\" la fábrica de glóbulos rojos por una semana, el niño pierde toda su sangre y la hemoglobina se desploma a niveles mortales (Hemoglobina 4.0 g/dL). Como la médula está apagada, la perla maestra del examen de sangre es el Recuento de Reticulocitos bajísimo (< 1%). Esto se llama Crisis Aplásica Transitoria.\n\n**TRAMPA DEL EXAMEN:** Crisis de secuestro vs Crisis Aplásica: ¡Ojo! Los falciformes hacen dos crisis de palidez masiva.\n- Anemia brutal + BAZO GIGANTE doloroso + Reticulocitos ALTOS = Crisis de Secuestro Esplénico.\n- Anemia brutal + No hay bazo palpable + Reticulocitos en CERO = Crisis Aplásica por Parvovirus B19.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la hermanita menor trajo un caballo de Troya a la casa. El virus viajó al interior del tuétano de los huesos del niño y apretó el botón de \"Apagado\" de la fábrica de sangre. Como los glóbulos de este niño tienen forma de hoz y son frágiles, mueren rapidísimo. Y como el cuerpo no puede reponerlos porque el virus apagó la máquina (por eso ves Reticulocitos en CERO, no hay \"sangre joven\" en el reporte), el tanque de vida de este niño quedó vacío. Pide dos bolsas de sangre tipo O Negativo de inmediato.",
    keyPoints: [
      "Enfermo de Anemia Falciforme/Esferocitosis + Anemia aguda severa + RETICULOCITOS INDETECTABLES (<1%) = Crisis Aplásica.",
      "Agente Causal OBLIGADO: Parvovirus B19 (El virus del Eritema Infeccioso o Enfermedad de la Bofetada)."
    ]
  },
  {
    id: "umng-conv-ed4-68",
    university: "UMNG",
    examArea: "CIRUGÍA GENERAL",
    topic: "GASTROENTEROLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un hombre de 45 años, con antecedente de alcoholismo severo de fin de semana, llega a urgencias tras una borrachera de 3 días con un dolor abdominal epigástrico, transfictivo, taladrante e irradiado a la espalda \"en cinturón\". Presenta vómitos biliares incoercibles. Los laboratorios revelan una Lipasa de 3.500 U/L (criterio diagnóstico de Pancreatitis Aguda confirmado). Usted ingresa al paciente a sala de reanimación y lo desnuda completamente para su exploración física. Al examinar el abdomen y el tronco, usted detecta una gran mancha de color violáceo-amarillento (equimosis franca) alrededor y en el fondo del ombligo, y una extensa decoloración morada-parda en ambos flancos laterales del abdomen. ¿A qué epónimos quirúrgicos corresponden respectivamente estos dos hallazgos cutáneos y qué implican sobre la severidad local de la pancreatitis?",
    options: [
      { id: "A", label: "A", text: "Signo de Rovsing y Signo de Psoas / Implican necrosis aséptica del colon transverso." },
      { id: "B", label: "B", text: "Signo de Kehr y Signo de Boas / Indican formación temprana de pseudoquiste pancreático estéril." },
      { id: "C", label: "C", text: "Signo de Cullen y Signo de Grey-Turner / Indican una Pancreatitis Aguda Hemorrágica severa con sangrado retroperitoneal." },
      { id: "D", label: "D", text: "Signo de Murphy y Signo de Courvoisier-Terrier / Significan obstrucción litiásica de la vía biliar distal obligatoria." }
    ],
    correctOptionId: "C",
    explanation: "El páncreas está escondido detrás de todos los órganos (es Retroperitoneal). Cuando sufre una inflamación tan severa que las propias enzimas pancreáticas (lipasa, proteasa, elastasa) literalmente \"disuelven y digieren\" las paredes de las arterias del cuerpo del páncreas, este empieza a desangrarse masivamente por dentro (Pancreatitis Aguda Hemorrágica o Necrotizante severa). Esa sangre se acumula en la espalda (retroperitoneo) y busca salidas hacia la piel del paciente viajando por debajo de los músculos fasciales. 1. Cuando la sangre viaja por el ligamento redondo del hígado y se asoma como una \"mancha morada alrededor del ombligo\", se llama el Signo de Cullen. 2. Cuando la sangre viaja por detrás de los riñones y se asoma como unos \"moretones gigantes en los flancos/costados del abdomen\", se llama el Signo de Grey-Turner. Ver estos signos en un paciente con dolor abdominal significa mortalidad elevadísima inminente y requiere la UCI por sangrado masivo no contenido y shock.\n\n**TRAMPA DEL EXAMEN:** Mnemotecnias infantiles pero efectivas:\n- Cullen = Centro (Ombligo).\n- Grey-TURNer = TURN (Date la vuelta/Costados o Flancos).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., tu paciente tiene un autolavado corrosivo por dentro. Las enzimas del páncreas se regresaron y están digiriendo sus propias venas pancreáticas. Este hombre tiene una hemorragia interna escondida en la espalda. Como a los médicos no nos dan gafas de rayos X, la naturaleza nos regaló dos faros de advertencia. Si le levantas la camisa y le ves la barriga y los costados manchados de morado o amarillo como si le hubieran dado una paliza, ¡No asumas que se golpeó borracho! Esa es la sangre del páncreas que se filtró por debajo de la piel durante dos días, tiñendo el ombligo (Cullen) y los flancos (Grey-Turner). Ese hombre entrará en choque cardiovascular en menos de 2 horas. Pídele cama en UCI.",
    keyPoints: [
      "Pancreatitis Aguda Severa Hemorrágica (Retroperitoneal):",
      "Equimosis/Moretón Periumbilical (en el centro): Signo de CULLEN.",
      "Equimosis/Moretón en Flancos (costados): Signo de GREY-TURNER.",
      "Denotan alto riesgo de Choque hemorrágico, CID y Necrosis pancreática complicada."
    ]
  },
  {
    id: "umng-conv-ed4-69",
    university: "UMNG",
    examArea: "NEUROLOGÍA",
    topic: "URGENCIAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Una mujer de 30 años, con diagnóstico de Miastenia Gravis en tratamiento con Piridostigmina oral diaria, es traída por su esposo a urgencias en estado crítico. La paciente refiere que hace 3 días presentó ardor al orinar y automedicó pastillas de Ciprofloxacina (una fluoroquinolona). Hoy, la paciente no puede abrir los ojos completamente (ptosis palpebral severa), presenta voz nasal muy débil (disartria) y, lo más grave, tiene incapacidad para tragar su propia saliva (disfagia bulbar) y evidente fatiga respiratoria (tirajes intercostales, respiración superficial a 35 rpm y sudoración de angustia). Al ingreso, los gases arteriales muestran un pH de 7.25 y una PaCO2 de 60 mmHg (Hipercapnia) con hipoxemia moderada. Ante este colapso neurológico mortal, y habiendo suspendido el antibiótico que disparó el cuadro, ¿cuál es el paso de soporte innegociable seguido de la terapia curativa inmunológica OBLIGATORIA?",
    options: [
      { id: "A", label: "A", text: "Administrar Edrofonio (Test de Tensilon) para verificar el diagnóstico y aumentar la dosis de Piridostigmina al doble para mejorar la debilidad muscular." },
      { id: "B", label: "B", text: "Proceder a Intubación Orotraqueal inmediata y ventilación mecánica, seguido de inicio urgente de Plasmaféresis o Inmunoglobulina Intravenosa (IGIV)." },
      { id: "C", label: "C", text: "Iniciar megadosis de Corticoesteroides sistémicos y administrar Atropina IV para secar las secreciones bulbares y revertir la asfixia." },
      { id: "D", label: "D", text: "Realizar Timectomía (extirpación del timo) de emergencia en el quirófano y usar relajantes musculares (Succinilcolina) de larga duración para estabilizar las placas." }
    ],
    correctOptionId: "B",
    explanation: "La paciente tiene Miastenia Gravis. Ciertos medicamentos en la vida están ESTRICTAMENTE PROHIBIDOS para los miasténicos porque \"bloquean\" la poca energía que les queda: Fluoroquinolonas (Ciprofloxacina), Aminoglucósidos, Betabloqueadores y Magnesio. Al tomar el antibiótico, ella indujo un \"apago total\" de su fuerza. La falla bulbar (no tragar) y la retención de CO2 (PaCO2 de 60 mmHg) te avisan que su músculo DIAFRAGMA se acalambró y fracasó (Crisis Miasténica). No debes \"intentar que respire solita\". El manejo mundial exige: 1. SOPORTE MECÁNICO INMEDIATO: Intubación Orotraqueal para que el ventilador mecánico respire por ella. 2. TERAPIA MODULADORA RÁPIDA: Hay que lavar la sangre de esos anticuerpos locos que causaron la crisis. Se usa la Plasmaféresis (limpia el plasma) O la Inmunoglobulina Intravenosa (IGIV), ambas igual de efectivas.\n\n**TRAMPA DEL EXAMEN:** Tratar el pulmón como si fuera Asma: El interno ve CO2 alto y dificultad respiratoria, e intenta \"Puff de salbutamol\" o drogas que no sirven. En la miastenia los pulmones están inmaculados y sanos, el que se rindió fue el MÚSCULO DIAFRAGMA que es la bomba. Trata al músculo. \n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., tu paciente se automedicó un antibiótico que cortó los \"cables de bujía\" de la poca electricidad que le llegaba a sus músculos. Al quedarse sin fuerza en la garganta, la propia saliva de su boca se convirtió en un charco donde se está ahogando. Mírale el pecho: se le hunden las costillas pero no mete aire, y su sangre ya acumuló 60 mm de gas carbónico venenoso. Ella está paralizada, no en coma. Si le das una pastilla para la debilidad, le tomará horas hacer efecto y morirá asfixiada viéndote a la cara en 15 minutos. Duérmela con los anestésicos adecuados, clávale el tubo endotraqueal y respira por ella con el ventilador mientras llamas a que bajen la máquina de plasmaféresis.",
    keyPoints: [
      "Miastenia Gravis + Disnea Severa + Retención de CO2 (Hipoventilación) y Falla Bulbar = Crisis Miasténica.",
      "Gatillos clásicos evitables: Fluoroquinolonas (Ciprofloxacino), Aminoglucósidos (Gentamicina).",
      "Tratamiento innegociable de la Crisis: Intubación Temprana + PLASMAFÉRESIS o IGIV."
    ]
  },
  {
    id: "umng-conv-ed4-70",
    university: "UMNG",
    examArea: "ÉTICA MÉDICA Y JURISPRUDENCIA",
    topic: "PEDIATRÍA URGENCIAS - ¡EL CLÍMAX DEL LOTE!",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un niño de 6 años es llevado en código rojo a la sala de trauma del hospital universitario tras sufrir un choque frontal violento en el automóvil familiar donde iba como pasajero sin cinturón de seguridad. En la evaluación primaria por el cirujano general, se diagnostica un traumatismo abdominal cerrado masivo con estallido del bazo y hemoperitoneo grado IV. El niño está profundamente hipotenso (PA 60/30 mmHg), pálido, y su hemoglobina ingresó en 4.5 g/dL y cayendo rápidamente (choque hemorrágico exanguinante). Usted ordena la transfusión masiva inmediata de 2 unidades de Glóbulos Rojos Empaquetados O negativo y el traslado directo a quirófano para salvar su vida. En ese instante, ambos padres (quienes sufrieron rasguños menores en el accidente) se interponen físicamente entre usted y el niño. Gritos mediante, declaran: \"¡No permitimos que le inyecten esa sangre impura! Somos Testigos de Jehová, preferimos que nuestro hijo muera bajo las leyes de Dios antes que contaminar su alma con sangre de otro humano\". Según la jurisprudencia de la Corte Constitucional de Colombia y los deberes del médico, ¿cuál es la única conducta jurídico-clínica obligatoria que el médico debe tomar en este instante crítico y caótico?",
    options: [
      { id: "A", label: "A", text: "Ceder inmediatamente y suspender la transfusión, ya que la patria potestad y la libertad de culto de los padres es absoluta y de rango constitucional superior frente a la intromisión médica del Estado en menores." },
      { id: "B", label: "B", text: "Informar a los padres que se respetará su decisión, procediendo a utilizar alternativas como eritropoyetina y coloides cristaloides, dejando al niño bajo cuidado paliativo hasta que fallezca." },
      { id: "C", label: "C", text: "Solicitar una orden escrita urgente del Instituto Colombiano de Bienestar Familiar (ICBF) y del juez de familia de turno, deteniendo cualquier acción invasiva hasta recibir el fallo legal por escrito de las autoridades." },
      { id: "D", label: "D", text: "Pasar por alto la voluntad de los padres utilizando la fuerza de seguridad hospitalaria si es necesario, y TRANSFUNDIR AL MENOS OBLIGATORIAMENTE PARA SALVAR SU VIDA, amparado en que el Derecho a la Vida del niño es inalienable y superior a las creencias paternas." }
    ],
    correctOptionId: "D",
    explanation: "Tu obligación inquebrantable, ética, legal y moral, es llamar a los guardias de seguridad del hospital, apartar a los padres del camino, conectar la sangre a la vena del niño y llevarlo volando al quirófano a detener el estallido de su bazo. Tú estás actuando en reemplazo del Estado defendiendo el Derecho inalienable a la Vida del niño, que aplasta cualquier argumento de libertad religiosa parental. En la historia clínica anotas: \"Transfusión forzosa amparada por protección del menor ante urgencia vital inminente en negativa parental\". Ese párrafo te vuelve intocable ante cualquier demanda.\n\n**TRAMPA DEL EXAMEN:** La confusión del respeto moral: A los médicos nos lavan el cerebro con la \"autonomía y el respeto por el paciente\". La trampa es olvidar a QUIÉN se respeta. El niño es el paciente, no los padres. A los padres no se les permite escoger el martirio biológico de un ciudadano menor. Nunca sacrifiques a un niño por miedo a un abogado.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., tu empatía termina donde empieza la sangre derramada de un niño inocente de seis años. Este muchacho no entiende de teología ni de prohibiciones de sangre divina; él entiende que tiene un bazo destrozado y su corazón no tiene sangre para bombear al cerebro. Sus padres, en su desespero y fanatismo por la fe, están dispuestos a verlo expirar en la camilla de trauma creyendo que salvan su alma. Pero tú eres el guardián de su biología frente a la ley de Colombia. Los padres te van a insultar y amenazarán con llamar hasta al presidente para demandarte. Míralos con frialdad y calma clínica, llama a la seguridad del hospital para que los retiren del box de reanimación, cuelga la bolsa roja espesa de O Negativo, abre la llave de paso al máximo y entra a quirófano. Tu consciencia dormirá en paz esa noche sabiendo que ese niño irá a primer grado la próxima semana.",
    keyPoints: [
      "Transfusión de Sangre en Testigos de Jehová:",
      "Paciente ADULTO consciente: SE RESPETA LA DECISIÓN (Se deja morir sin sangre amparado en su autonomía religiosa y voluntad anticipada).",
      "Paciente NIÑO/MENOR DE EDAD: SE TRANSFUNDE OBLIGATORIAMENTE A LA FUERZA. (El derecho a la vida del menor prevalece absolutamente sobre la patria potestad o libertad de cultos de los padres)."
    ]
  }
];
