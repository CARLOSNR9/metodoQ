import type { TrainingQuestion } from "@/lib/questions/types";

export const UMNG_CONV_ED4_71_80_QUESTIONS: TrainingQuestion[] = [
  {
    id: "umng-conv-ed4-71",
    university: "UMNG",
    examArea: "TRAUMA",
    topic: "CIRUGÍA GENERAL Y ATLS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un joven de 25 años ingresa a la sala de urgencias traído por paramédicos tras sufrir una herida por arma blanca (puñalada) en el hemitórax derecho. Al evaluarlo, el paciente presenta disnea severa, cianosis y agitación. Usted retira la camisa manchada de sangre y observa una herida abierta de aproximadamente 4 centímetros en el quinto espacio intercostal. Durante la inspiración del paciente, usted escucha un sonido de succión claro (\"herida soplante\") y la sangre en los bordes burbujea. Sabiendo que el equipo de cirugía está preparando el tubo a tórax (Pleurostomía) pero tardará 5 minutos en tenerlo listo, ¿cuál es la intervención prehospitalaria o de rescate INMEDIATA de primera línea en los próximos 10 segundos, según las guías ATLS, para evitar el paro respiratorio?",
    options: [
      { id: "A", label: "A", text: "Sellar la herida con un parche de gasa vaselinada y cinta adhesiva sellando herméticamente los cuatro lados para evitar la entrada de aire." },
      { id: "B", label: "B", text: "Colocar un apósito oclusivo (plástico o gasa vaselinada) fijado con cinta adhesiva en solo TRES de sus cuatro lados, creando un mecanismo de válvula." },
      { id: "C", label: "C", text: "Realizar intubación orotraqueal de secuencia rápida y conectar a ventilación con presión positiva al 100%." },
      { id: "D", label: "D", text: "Insertar un dedo enguantado en la herida para taponar el defecto muscular y realizar toracocentesis con aguja en el segundo espacio intercostal ipsilateral." }
    ],
    correctOptionId: "B",
    explanation: "El paciente tiene un Neumotórax Abierto. Como el hueco en las costillas mide más de dos tercios del diámetro de su tráquea, al tomar aire, el pulmón prefiere \"chupar\" el aire por el hueco del cuchillo. Resultado: el pulmón se colapsa y el paciente se asfixia. La maniobra salvavidas inmediata (hasta que le pongas el tubo de tórax definitivo) es colocar un parche plástico oclusivo pegado solo por TRES LADOS. Esto crea una válvula \"flutter\" de escape: cuando el paciente toma aire (inspira), el plástico se pega al pecho y bloquea el hueco, obligando al aire a entrar por la boca. Cuando el paciente bota el aire (espira), la presión del tórax empuja el plástico, levantando el lado despegado y dejando salir el aire atrapado.\n\n**TRAMPA DEL EXAMEN:** Pegar 3 lados vs Pegar 4 lados: Si sellas la fuga por completo (4 lados), bloqueas la salida del aire que se sigue escapando del pulmón roto por dentro. Le fabricas un Neumotórax a Tensión iatrogénico. En trauma, siempre deja una puerta trasera de escape (3 lados).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., este muchacho tiene una segunda boca respirando por las costillas. La física dicta que el aire tomará el camino más fácil. Él intenta respirar por la nariz, pero el aire entra por el hueco del pecho y le colapsa el pulmón derecho. Coge el envoltorio de plástico transparente de cualquier gasa o jeringa estéril, ponlo sobre la herida y pégale cinta adhesiva arriba, a la derecha y a la izquierda. Deja el borde de abajo libre. Acabas de fabricar una válvula de escape con 100 pesos de material. Has asegurado sus signos vitales para esperar al cirujano.",
    keyPoints: [
      "Herida Torácica con Burbujeo o Sonido de Succión = Neumotórax Abierto.",
      "Manejo Inmediato (Prehospitalario): Apósito oclusivo sellado por TRES LADOS (Mecanismo de válvula).",
      "Manejo Definitivo (Hospitalario): Tubo de Tórax (Pleurostomía) colocado en un sitio distinto a la herida + Cierre quirúrgico del defecto."
    ]
  },
  {
    id: "umng-conv-ed4-72",
    university: "UMNG",
    examArea: "PEDIATRÍA",
    topic: "GASTROENTEROLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un niño de 2 años, previamente sano y con adecuado desarrollo pondoestatural, es traído de urgencia por su madre. La madre llega envuelta en pánico mostrando un pañal que contiene una cantidad masiva de sangre roja oscura, casi rutilante (hematoquecia franca), sin presencia de materia fecal visible. Al interrogar a la madre, el niño NO ha presentado fiebre, no ha vomitado y, sorprendentemente, NO parece tener ningún tipo de dolor (se encuentra tranquilo y no llora). Al examen físico en urgencias, el niño luce muy pálido, levemente taquicárdico por la pérdida de volumen, pero su abdomen es blando, depresible, sin masas palpables y no presenta defensa ni dolor. Sabiendo la regla epidemiológica de la edad y la clínica indolora, ¿cuál es el diagnóstico más probable de esta hemorragia digestiva baja severa y cuál es el estudio confirmatorio de ORO?",
    options: [
      { id: "A", label: "A", text: "Invaginación Intestinal / Ecografía abdominal." },
      { id: "B", label: "B", text: "Fisura Anal / Inspección directa del esfínter." },
      { id: "C", label: "C", text: "Divertículo de Meckel / Gammagrafía con Tecnecio-99m." },
      { id: "D", label: "D", text: "Pólipo Juvenil solitario / Colonoscopia pediátrica." }
    ],
    correctOptionId: "C",
    explanation: "El Divertículo de Meckel es la anomalía congénita más frecuente del tracto gastrointestinal. La \"Regla de los 2\" lo define: Afecta al 2% de la población, está a 2 pies de la válvula ileocecal, mide 2 pulgadas, y da síntomas a los 2 años de edad. El gran problema es que este \"apéndice falso\" contiene tejido gástrico ectópico (células de estómago viviendo en el intestino). Ese tejido produce ácido clorhídrico, el cual quema y ulcera el intestino delgado adyacente, provocando una hemorragia masiva. Como el intestino no tiene sensibilidad a ese tipo de úlcera, el sangrado es MASIVO, ROJO OSCURO Y TOTALMENTE INDOLORO. La prueba diagnóstica de oro es la Gammagrafía con pertecnetato de Tecnecio-99m (Meckel Scan), el cual es captado por las células gástricas ectópicas, haciendo \"brillar\" el divertículo en la imagen del abdomen.\n\n**TRAMPA DEL EXAMEN:** Sangre con dolor vs Sangre sin dolor en lactantes:\n- Sangrado rectal + Niño que grita encogido = Invaginación (Intususcepción).\n- Sangrado rectal masivo + Niño asintomático sin dolor = Divertículo de Meckel.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., imagínate que un pedazo del estómago de este niño se mudó a vivir a sus intestinos por un error de embriología. Ese pedazo de estómago falso fabrica ácido gástrico en una zona que no está diseñada para aguantarlo. El ácido hizo un agujero en una vena del intestino delgado, y la sangre empezó a caer libremente hasta llegar al pañal. Como los intestinos no tienen nervios para sentir una quemadura de ácido tan localizada, al niño no le duele absolutamente nada. No le hagas tactos rectales bruscos ni asumas que es una fisura. Pide la gammagrafía marcada.",
    keyPoints: [
      "Hemorragia Rectal MASIVA E INDOLORA en un niño de 2 años = Divertículo de Meckel.",
      "Fisiopatología: Ulceración ileal por secreción ácida de Tejido Gástrico Ectópico.",
      "Diagnóstico (Gold Standard): Gammagrafía con Tecnecio-99m (Scan de Meckel)."
    ]
  },
  {
    id: "umng-conv-ed4-73",
    university: "UMNG",
    examArea: "ENDOCRINOLOGÍA",
    topic: "GINECOLOGÍA Y OBSTETRICIA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Una mujer de 26 años asiste a su consulta de medicina general quejándose de fatiga extrema permanente, debilidad profunda, mareos al ponerse de pie (ortostatismo) y una gran intolerancia al frío. Al interrogar sus antecedentes ginecobstétricos, ella refiere que hace seis meses tuvo a su primer hijo mediante un parto vaginal complicado, en el cual sufrió una hemorragia posparto exanguinante masiva (Atonía uterina severa) que requirió múltiples transfusiones y manejo en UCI. Refiere con profunda tristeza que nunca logró que le saliera leche de los senos (Agalactia) para amamantar a su bebé, y que desde el parto, su menstruación nunca regresó (Amenorrea secundaria). Al examen físico, PA 90/55 mmHg, y usted documenta una llamativa pérdida del vello púbico y axilar. ¿Cuál es la fisiopatología destructiva de este síndrome endocrino clásico posparto?",
    options: [
      { id: "A", label: "A", text: "Necrosis isquémica (infarto) de la glándula pituitaria anterior secundaria a la hipovolemia severa del parto." },
      { id: "B", label: "B", text: "Infiltración linfocitaria destructiva de la glándula tiroides inducida por los autoanticuerpos del embarazo (Tiroiditis Posparto)." },
      { id: "C", label: "C", text: "Falla ovárica prematura aguda por daño inmunológico en el lecho placentario." },
      { id: "D", label: "D", text: "Apoplejía pituitaria por sangrado agudo intratumoral de un prolactinoma preexistente." }
    ],
    correctOptionId: "A",
    explanation: "El Síndrome de Sheehan es el clásico Panhipopituitarismo posparto. Durante un embarazo normal, la glándula pituitaria anterior (Adenohipófisis) duplica su tamaño normal porque tiene que fabricar muchísima prolactina y otras hormonas. Como crece tanto, requiere muchísima sangre para no asfixiarse. Cuando la madre sufre una Hemorragia Posparto Masiva, la presión arterial cae al piso (Choque hipovolémico). La pituitaria anterior, al estar tan gorda y necesitada de oxígeno, sufre un INFARTO ISQUÉMICO (Necrosis) y muere por falta de sangre. Como la glándula muere, deja de producir todas sus hormonas:\n1) Sin Prolactina = Agalactia (es incapaz de producir leche, primer síntoma clínico).\n2) Sin FSH/LH = Amenorrea secundaria.\n3) Sin ACTH = No hay cortisol ni andrógenos = Fatiga extrema, Pérdida del vello púbico y axilar, Hipotensión severa.\n4) Sin TSH = Hipotiroidismo secundario.\n\n**TRAMPA DEL EXAMEN:** Sheehan vs Apoplejía Pituitaria:\n- Isquemia por pérdida de sangre post-parto = Sheehan (Lento, no lacta).\n- Sangrado dentro de un adenoma gigante = Apoplejía (Cefalea súbita, ceguera o compromiso de pares craneales aguda).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., durante el embarazo, la glándula pituitaria en la base del cerebro de esta mujer se puso obesa trabajando turnos dobles para preparar su cuerpo para la maternidad. Como todo órgano gordo, necesitaba el triple de flujo de sangre. El día del parto, ella se desangró, su presión cayó a 60/40. El cerebro le cortó el suministro de sangre a la glándula para dárselo a otros órganos más vitales, y la pituitaria murió de asfixia (infarto). Es una tragedia endocrina total: la fábrica de señales se apagó.",
    keyPoints: [
      "Hemorragia Posparto Severa seguida meses después de AGALACTIA (No baja la leche) + Amenorrea + Fatiga/Hipotensión = Síndrome de SHEEHAN.",
      "Fisiopatología: Necrosis Isquémica de la glándula Pituitaria Anterior (Adenohipófisis)."
    ]
  },
  {
    id: "umng-conv-ed4-74",
    university: "UMNG",
    examArea: "HEMATOLOGÍA - ONCOLOGÍA",
    topic: "INFECTOLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un paciente masculino de 45 años, con diagnóstico de Leucemia Mieloide Aguda, se encuentra en su décimo día pos-quimioterapia de inducción agresiva. Es ingresado a urgencias en la madrugada porque su esposa reporta que presentó \"temblores de frío\" (escalofríos) y una temperatura en casa de 38.6°C que se mantiene al ingreso (38.5°C). Al interrogarlo y examinarlo exhaustivamente, el paciente NO refiere tos, no hay dolor para orinar, la piel no tiene abscesos y no hay enrojecimiento del catéter venoso central (Ausencia total de foco infeccioso aparente). Usted recibe el cuadro hemático de urgencia: Leucocitos totales 400 células/mm³, con Neutrófilos Absolutos (RAN) en apenas 100 células/mm³. Conociendo la extrema letalidad de este escenario oncológico-infeccioso (Neutropenia Febril), ¿cuál es el paso FARMACOLÓGICO INMEDIATO (en la primera hora), tras la toma de hemocultivos, que dictan las guías de oro de Infectología para evitar su muerte inminente?",
    options: [
      { id: "A", label: "A", text: "Iniciar Ceftriaxona + Azitromicina intravenosa para cubrir patógenos comunitarios típicos." },
      { id: "B", label: "B", text: "Iniciar Cefepime, Meropenem o Piperacilina-Tazobactam en monoterapia de amplio espectro de forma urgente." },
      { id: "C", label: "C", text: "Administrar Acetaminofén, factores estimulantes de colonias (G-CSF) y observar 12 horas hasta que los hemocultivos reporten el germen." },
      { id: "D", label: "D", text: "Iniciar Vancomicina en monoterapia exclusiva, asumiendo una infección silenciosa del catéter central por gram positivos." }
    ],
    correctOptionId: "B",
    explanation: "La Neutropenia Febril es una EMERGENCIA INFECCIOSA de tiempo crítico (Hora de oro). Como el paciente no tiene neutrófilos, no puede formar \"pus\" (por eso no ves moco en la tos, ni pus en la orina, ni placa roja en la piel). Puede estar infestado de bacterias y su único síntoma será la FIEBRE. Las bacterias que translocan desde el intestino (como Pseudomonas aeruginosa) matan al paciente en menos de 24 horas si no se detienen. Apenas llega, se toman dos tubos de hemocultivo, e inmediatamente se inicia Antibioticoterapia Empírica Antipseudomónica Intravenosa. Las tres drogas coronadas para la monoterapia inicial de oro son: Cefepime (Cefalosporina de 4ta), Piperacilina-Tazobactam o un Carbapenémico (Meropenem/Imipenem). Estas cubren casi todas las bacterias letales, incluida la Pseudomonas.\n\n**TRAMPA DEL EXAMEN:** Miedo a los antibióticos pesados: A los estudiantes les enseñan a \"guardar\" los antibióticos de reserva para no crear resistencia. En la neutropenia febril, esa regla se pausa. Al no tener defensas de neutrófilos, el antibiótico es su única barrera; debes sacar la artillería pesada en el minuto 1.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., tu paciente es una fortaleza sin guardias. La quimioterapia aniquiló su leucemia, pero también barrió hasta el último de sus neutrófilos. En este momento, una simple bacteria Pseudomonas que vivía pacíficamente en su colon puede cruzar la pared intestinal, entrar a la sangre y multiplicarse como loca porque no hay ningún glóbulo blanco patrullando. Como no tiene glóbulos blancos, su cuerpo no puede fabricar pus; no verás abscesos. La fiebre es la única alarma roja que tienes. No pierdas el tiempo; saca sangre, agarra el frasco de Cefepime o Piperacilina-Tazobactam y pásalo a chorro.",
    keyPoints: [
      "Neutropenia Febril: RAN < 500 células/mm³ + Fiebre (≥ 38.3°C o 38.0 sostenida).",
      "Conducta de la \"Hora de Oro\": Hemocultivos seguidos INMEDIATAMENTE de Cobertura Empírica Antipseudomónica.",
      "Antibióticos estrella: Cefepime, Piperacilina-Tazobactam o Meropenem."
    ]
  },
  {
    id: "umng-conv-ed4-75",
    university: "UMNG",
    examArea: "TOXICOLOGÍA",
    topic: "MEDICINA DE URGENCIAS Y NEFROLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un hombre indigente de 50 años es traído a urgencias en estado de coma arreactivo (Glasgow 3) tras ser encontrado en la calle en medio del invierno. Al examen físico, se encuentra taquicárdico (115 lpm) e hipotenso, con una respiración profunda, suspirante y acelerada (Respiración de Kussmaul). Los gases arteriales reportan un desastre ácido-base: pH de 7.10, HCO3 de 6 mEq/L, pCO2 de 20 mmHg y un Anión Gap francamente elevado (35 mEq/L). El lactato y la glucosa son normales. Sabiendo que el paciente pudo haber ingerido un alcohol tóxico, el médico ilumina la bolsa recolectora de orina del paciente con una Lámpara de Wood (Luz Ultravioleta) y la orina brilla con fluorescencia. Además, el uroanálisis microscópico revela múltiples cristales transparentes en forma de \"sobre de carta\" o pirámides. Teniendo en cuenta la falla renal oligúrica inminente que presenta el paciente, ¿cuál fue la sustancia específica ingerida, qué tóxico formó los cristales, y cuál es el antídoto?",
    options: [
      { id: "A", label: "A", text: "Metanol / Cristales de Ácido Fórmico / Antídoto: Fomepizol." },
      { id: "B", label: "B", text: "Alcohol Isopropílico / Cristales de Cetonas / Antídoto: Etanol intravenoso." },
      { id: "C", label: "C", text: "Etilenglicol (Anticongelante) / Cristales de Oxalato de Calcio / Antídoto: Fomepizol o Etanol intravenoso." },
      { id: "D", label: "D", text: "Salicilatos puros / Cristales de Ácido Úrico / Antídoto: Bicarbonato de Sodio IV." }
    ],
    correctOptionId: "C",
    explanation: "El Etilenglicol es el líquido verde fosforescente o dulzón que se usa como anticongelante en los radiadores de los carros. En el hígado, es atacado por la enzima Alcohol Deshidrogenasa y se transforma en ÁCIDO OXÁLICO. Este ácido oxálico se une al Calcio de la sangre y forma piedras microscópicas llamadas Cristales de Oxalato de Calcio (que en el microscopio se ven idénticas a un sobre de carta cerrado con una X). Estos millones de cristales viajan al riñón y taponan físicamente los túbulos renales, causando Falla Renal Aguda fulminante. Además, como el anticongelante trae un marcador fluorescente de fábrica (para ver fugas con lámparas UV), si tú pasas una lámpara de Wood sobre la orina o la cara del paciente, ¡brillará en la oscuridad! El antídoto es el mismo que para el metanol: Fomepizol o Etanol IV, para emborrachar la enzima hepática e impedir que fabrique el ácido oxálico.\n\n**TRAMPA DEL EXAMEN:** Separar las TÓXICAS GEMELAS:\n- Metanol -> Ojos (Ceguera / Ácido Fórmico).\n- Etilenglicol -> Riñón (Falla renal / Cristales \"Sobre de Carta\" / Oxalato de Calcio / Fluorescencia).\nAmbos tratados con Fomepizol/Etanol y Diálisis.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., este hombre encontró una botella de líquido refrigerante de motor y se la tomó. Su hígado transformó ese líquido inocente en un ácido corrosivo (ácido oxálico) que secuestró el calcio de su sangre. Esos dos químicos juntos formaron millones de cristales filosos, como pequeños vidrios molidos, que viajaron a sus riñones y taponaron las cañerías del tejido renal. Si miras su orina con luz ultravioleta y ves el resplandor de radiador, pide Etanol puro farmacéutico para la vena. Al inyectarle alcohol, la enzima hepática se distraerá rompiendo el Etanol y el Etilenglicol saldrá intacto a la orina.",
    keyPoints: [
      "Ingesta de líquido dulzón automotriz (Anticongelante) + Acidosis Metabólica severa + Falla Renal.",
      "Hallazgo de Laboratorio Oro: Cristales de Oxalato de Calcio en orina (Forma de Sobre de carta).",
      "Orina fosforescente con Lámpara de Wood.",
      "Antídoto: Fomepizol (o Etanol IV)."
    ]
  },
  {
    id: "umng-conv-ed4-76",
    university: "UMNG",
    examArea: "CIRUGÍA GENERAL",
    topic: "CIRUGÍA VASCULAR",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un hombre de 72 años, gran fumador (50 paquetes/año) y con hipertensión crónica en manejo, se encontraba viendo televisión en su casa cuando sintió, de manera súbita e inexplicable, un dolor abdominal profundo, desgarrador y atroz que se irradiaba directamente hacia la zona lumbar baja (espalda baja). En el servicio de urgencias, el paciente luce pálido, frío, sudoroso y confundido. Sus signos vitales demuestran un inminente choque hipovolémico: PA de 70/40 mmHg y FC 115 lpm. Al realizar la palpación del abdomen, usted nota una masa blanda, redondeada y exquisitamente PULSÁTIL expansiva ubicada a nivel del mesogastrio y flanco izquierdo. Ante la altísima sospecha diagnóstica letal que configura esta clásica TRÍADA sintomática, ¿cuál es el paso diagnóstico-terapéutico de URGENCIA que dictamina el cirujano experto en las próximas medidas?",
    options: [
      { id: "A", label: "A", text: "Solicitar Tomografía (Angio-TAC) de abdomen urgente para confirmar y medir el tamaño de la dilatación, enviando luego a observación." },
      { id: "B", label: "B", text: "Llevar INMEDIATAMENTE al quirófano para Laparotomía de Urgencia (Cirugía Vascular abierta) o sala de hemodinamia para EVAR, evitando los retrasos de la Tomografía por la inestabilidad." },
      { id: "C", label: "C", text: "Administrar Betabloqueadores intravenosos agresivos (Labetalol) para disminuir el estrés cortante a la pared vascular y esperar 12 horas." },
      { id: "D", label: "D", text: "Realizar un ecocardiograma transtorácico de cabecera y administrar heparina de bajo peso molecular a dosis plenas." }
    ],
    correctOptionId: "B",
    explanation: "Un Aneurisma de Aorta Abdominal (AAA) es la dilatación patológica del tubo mayor de sangre del abdomen (>3 cm). Los fumadores ancianos hipertensos debilitan la pared aórtica (Aterosclerosis). Si crece mucho (>5.5 cm), puede estallar sin aviso. Cuando estalla hacia el retroperitoneo, se presenta la Tríada Magistral: 1. Dolor Lumbar/Abdominal agudo, 2. Masa Pulsátil abdominal, 3. Choque Hipotensivo. El paciente se está desangrando en su propia barriga a un ritmo infernal (2 litros por minuto). Como está inestable (PA 70/40), la conducta universal exige saltarse la tomografía y llevarlo CORRIENDO DIRECTAMENTE AL QUIRÓFANO para cirugía abierta (Pinzamiento aórtico suprarrenal y prótesis) o a la sala de endovascular para implante de prótesis por catéter (EVAR). La única ecografía permitida es un Eco-FAST \"Flash\" en la camilla de reanimación si hay dudas, que dura 5 segundos, pero no se retrasa la incisión.\n\n**TRAMPA DEL EXAMEN:** Disección vs Aneurisma Roto:\n- Disección Aórtica (Pecho/Espalda en hachazo + Asimetría pulsos + HTA): REQUIERE imagen (EcoTE o Angio-TAC) y manejo de PA antes de operar.\n- Aneurisma Roto (Barriga/Lumbar + Masa pulsátil + CHOQUE severo): NO PIERDAS TIEMPO EN IMÁGENES, ve al Quirófano.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., imagínate una manguera de bomberos podrida que acaba de explotar dentro de la barriga de este pobre señor. Si tú te atreves a mandar a este paciente por el pasillo frío del hospital hasta la sala del tomógrafo \"para ver de qué tamaño era la arteria\", te garantizo que la enfermera volverá a los 3 minutos empujando la camilla dándole masaje cardíaco a un cadáver. Coge el ecógrafo portátil que tienes al lado, ponlo sobre la masa pulsátil, mira la bola gigante negra de 7 centímetros latiendo rota, asiente con la cabeza y empuja la camilla directo hasta las lámparas del quirófano.",
    keyPoints: [
      "Tríada de Aneurisma de Aorta Abdominal (AAA) ROTO:",
      "1. Dolor agudo lumbar/abdominal.",
      "2. Masa abdominal expansiva y PULSÁTIL.",
      "3. Hipotensión / Choque profundo.",
      "Manejo si está Inestable: Cirugía Inmediata (Evitar TAC). El Eco POCUS abdominal confirma en 5 segundos."
    ]
  },
  {
    id: "umng-conv-ed4-77",
    university: "UMNG",
    examArea: "PSIQUIATRÍA",
    topic: "NEUROLOGÍA Y TOXICOLOGÍA FARMACOLÓGICA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un hombre joven de 28 años, con diagnóstico reciente de Depresión Mayor Severa para la cual le prescribieron Fluoxetina (un ISRS) hace un mes a altas dosis, ingresa a urgencias en estado delirante. Su esposa relata que el paciente presentó un dolor dental fuerte hace 2 días y se automedicó pastillas de Tramadol de un familiar cada 6 horas. Al ingresar al triage, el paciente está sudando excesivamente (diaforesis) y muy ansioso y confundido. Sus signos vitales: Temperatura 39.5°C, FC 130 lpm, PA 160/100 mmHg. Al examen físico neurológico, usted nota un estado de hiperexcitabilidad motora masiva: presenta temblores finos, y lo más patognomónico, sus reflejos osteotendinosos están exacerbadísimos (Hiperreflexia 4+/4) y, al realizar dorsiflexión brusca de su pie, el paciente desencadena un Clonus aquíleo inagotable. ¿Cuál es el síndrome neuro-toxicológico que sufre este paciente debido a la mezcla de fármacos, y cuál es el antídoto específico si fallan las benzodiacepinas?",
    options: [
      { id: "A", label: "A", text: "Síndrome Neuroléptico Maligno / Tratamiento con Dantroleno Sódico y Bromocriptina." },
      { id: "B", label: "B", text: "Crisis Anticolinérgica aguda / Tratamiento con Fisostigmina intravenosa." },
      { id: "C", label: "C", text: "Hipertermia Maligna anestésica / Tratamiento con Dantroleno Sódico." },
      { id: "D", label: "D", text: "Síndrome Serotoninérgico / Tratamiento con Ciproheptadina oral." }
    ],
    correctOptionId: "D",
    explanation: "El Síndrome Serotoninérgico es un infierno autonómico. Ocurre cuando el paciente mezcla dos o más drogas que suben la Serotonina (Ej. Fluoxetina) o cuando a alguien tomando esos antidepresivos se le receta Tramadol, Linezolid o Fentanilo (potentes estimuladores serotoninérgicos). El cerebro se \"fríe\" con un cortocircuito excitador por sobrecarga de serotonina. El paciente presenta la Tríada de Hunter: 1) Disfunción autonómica (Fiebre, taquicardia, mucho SUDOR, diarrea). 2) Alteración Mental (Agitación/Delirio). 3) Disfunción Neuromuscular (Hiperreflexia tremenda y CLONUS inagotable). El manejo empieza por hidratar y dar Lorazepam/Diazepam para sedar los músculos y la mente. Si las benzodiacepinas fallan, el antídoto específico ORO es la CIPROHEPTADINA (un antihistamínico con potentes propiedades de bloqueo antagonista directo de los receptores 5-HT2A).\n\n**TRAMPA DEL EXAMEN:** La guerra de las fiebres psiquiátricas: Apúntalo en piedra.\n- Fiebre + Usó Haloperidol + Músculos RÍGIDOS (Plomo) + CPK 50.000 = Síndrome Neuroléptico Maligno.\n- Fiebre + Usó Fluoxetina/Tramadol + Músculos BRINCAN (Clonus/Hiperreflexia) = Síndrome Serotoninérgico.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., recetar Tramadol parece inofensivo hasta que chocas con el paciente psiquiátrico. El Tramadol es un opioide mentiroso; además de quitar el dolor, bloquea la recogida de serotonina en el cerebro. Como este joven ya tomaba Fluoxetina (que hace lo mismo), sus neuronas quedaron atrapadas en un mar de serotonina que las electrocutó de excitación. Sus músculos están brincando y temblando como un motor fundido; si le doblas el pie hacia arriba, el pie le empezará a temblar (Clonus) como una máquina de coser porque el cerebro no para de mandarle fuego de contracción. Relájalo primero con inyecciones de Diazepam por la vena, y si no se le apaga el ataque, disuélvele tabletas de Ciproheptadina por sonda.",
    keyPoints: [
      "Antidepresivo ISRS + Otro agente pro-serotonina (Tramadol, IMAO, MDMA/Éxtasis).",
      "Firma Clínica Absoluta: Alteración mental + Disautonomía (Sudor/Fiebre) + HIPERREFLEXIA y CLONUS saltarín.",
      "Diagnóstico: Síndrome Serotoninérgico.",
      "Antídoto Definitivo: Ciproheptadina (Antagonista Serotoninérgico)."
    ]
  },
  {
    id: "umng-conv-ed4-78",
    university: "UMNG",
    examArea: "ORTOPEDIA Y TRAUMATOLOGÍA",
    topic: "TRAUMA DE MIEMBRO SUPERIOR",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un joven de 20 años asiste al servicio de urgencias luego de sufrir una fuerte caída al resbalar montando en patineta. Relata que, al perder el equilibrio, su mecanismo de defensa fue caer apoyando fuertemente el peso de todo su cuerpo sobre la mano derecha hiperextendida. Acude quejándose de dolor en la muñeca derecha. Al examen físico, usted no observa deformidades groseras (sin dorso de tenedor), pero el paciente refiere un dolor exquisito y muy localizado cuando usted presiona fuertemente en la \"Tabaquera Anatómica\" de la mano derecha y al realizar compresión axial del pulgar. Usted sospecha una fractura específica del carpo y solicita radiografías (AP, Lateral y oblicua de muñeca). El radiólogo le informa que NO se observan líneas de fractura ni trazos agudos patológicos en el carpo (Radiografía Inicial NEGATIVA). Ante el mecanismo de trauma clásico y la semiología positiva, ¿cuál es el paso de buena praxis médica OBLIGATORIO para evitar la temida Necrosis Avascular de este hueso a pesar de la placa normal?",
    options: [
      { id: "A", label: "A", text: "Dar el alta médica con diagnóstico de esguince de muñeca, recomendar inmovilización con vendaje elástico y recetar analgésicos, citando si duele en 2 semanas." },
      { id: "B", label: "B", text: "Inmovilizar la mano y el antebrazo OBLIGATORIAMENTE con una Férula/Yeso que incluya un dedal para el pulgar (Espica de Pulgar) y citar para repetir los Rayos X en 10-14 días (o pedir RMN en su defecto)." },
      { id: "C", label: "C", text: "Infiltrar la tabaquera anatómica con anestésico local y esteroides para mitigar el dolor del tendón inflamado." },
      { id: "D", label: "D", text: "Trasladar al paciente a cirugía para colocación inmediata de un tornillo compresivo de Herbert a ciegas en el carpo." }
    ],
    correctOptionId: "B",
    explanation: "El hueso ESCAFOIDES es el hueso de la muñeca (carpo) que más se fractura. Clásicamente se rompe al caer apoyando la mano abierta. Su manifestación clínica de ORO es el dolor inconfundible al apretar el hueco de la Tabaquera Anatómica (la hendidura en la base del pulgar). Su mayor problema médico es su extraña vascularización: la sangre le llega por la punta lejana y viaja hacia atrás (irrigación retrógrada distal-proximal). Si se rompe por la mitad, el pedazo \"base\" se queda sin sangre y se muere rápidamente (Necrosis Avascular) y/o no pega (Pseudoartrosis). La perla maestra del examen de residencia es que HASTA EN UN 30% DE LOS CASOS LA RADIOGRAFÍA DEL DÍA CERO SALE NORMAL (NEGATIVA) porque el trazo de fractura es invisible o microscópico sin reabsorción ósea. La ley médica manda: \"Toda sospecha CLÍNICA de fractura de escafoides se trata como fractura REAL\". Le pones una férula dura que atrape al dedo gordo para que no se mueva (Espica de pulgar / Thumb spica splint) y lo citas en dos semanas. A los 14 días el hueso \"se descalcifica\" en los bordes de la rotura y al repetir los rayos X, la raya negra de la fractura oculta aparecerá.\n\n**TRAMPA DEL EXAMEN:** Descartar fracturas solo por Radiografías X: Nunca descartes una fractura de escafoides el mismo día del trauma basándote en la placa normal. Si duele la tabaquera anatómica, el paciente se va inmovilizado hasta que la RMN o la placa de las dos semanas diga lo contrario.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., tu paciente acaba de quebrar la pequeña piedra angular que sostiene el equilibrio de su muñeca. El escafoides es un hueso testarudo y tacaño con su circulación de sangre. Solo le entra una arteria pequeñita por la punta lejana. Al golpearse contra el suelo, el hueso se partió como un vaso de cristal al que se le hizo una grieta microscópica que la cámara de rayos X no es capaz de ver hoy. Pero si le empujas la \"tabaquera\" de su mano con el pulgar y él grita de dolor, tu clínica vale más que mil radiólogos juntos. Envuélvele toda la muñeca y el dedo pulgar en yeso o fibra de vidrio fuerte. Si lo dejas libre, la mitad del hueso se morirá volviéndose polvo por isquemia.",
    keyPoints: [
      "Caída en mano extendida + Dolor en Tabaquera Anatómica = Sospecha inminente de FRACTURA DE ESCAFOIDES.",
      "Radiografía Inicial: Puede ser Normal / Negativa en un alto porcentaje de casos tempranos.",
      "Conducta clínica: Asumir fractura y colocar INMOVILIZACIÓN CON ESPICA DE PULGAR.",
      "Complicación anatómica mortal para la mano: Necrosis Avascular del polo proximal (irrigación retrógrada)."
    ]
  },
  {
    id: "umng-conv-ed4-79",
    university: "UMNG",
    examArea: "CARDIOLOGÍA",
    topic: "MEDICINA INTERNA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un hombre joven de 28 años, sin factores de riesgo cardiovascular importantes, asiste a consulta de urgencias quejándose de un dolor torácico retroesternal de inicio súbito, el cual describe como \"agudo, como un chuzón o punzada constante en todo el centro del pecho\". Al interrogar a fondo la semiología del dolor, usted descubre una característica muy peculiar: el dolor empeora drásticamente cuando el paciente tose o toma una respiración profunda (dolor pleurítico), y al acostarse completamente bocarriba (decúbito supino), el dolor es insoportable; sin embargo, cuando el paciente se sienta inclinado hacia adelante, el dolor desaparece casi por completo. Refiere que la semana anterior padeció un resfriado común (infección viral) fuerte. Usted toma un Electrocardiograma (ECG) de 12 derivaciones, evidenciando un Supradesnivel del segmento ST cóncavo, que está generalizado de manera difusa en casi todas las derivaciones del papel, asociado a una clara DEPRESIÓN del segmento PR. Las troponinas resultan discretamente elevadas a niveles mínimos y estables, pero no en rangos catastróficos. ¿Cuál es la sospecha diagnóstica definitiva y el esquema farmacológico de ataque clásico avalado?",
    options: [
      { id: "A", label: "A", text: "Infarto Agudo de Miocardio masivo (IAMCEST Anterior y Lateral) / Activar Código Infarto, Angioplastia Primaria o Trombólisis urgente." },
      { id: "B", label: "B", text: "Pericarditis Aguda Idiopática / Viral / Terapia dual ambulatoria con AINEs (Ibuprofeno/AAS a dosis altas) + Colchicina." },
      { id: "C", label: "C", text: "Tromboembolismo Pulmonar Agudo / Anticoagulación con Heparina y pedir Angio-TAC pulmonar." },
      { id: "D", label: "D", text: "Miocarditis Aguda fulminante post-infecciosa / Corticosteroides sistémicos a dosis altas por dos semanas." }
    ],
    correctOptionId: "B",
    explanation: "La Pericarditis Aguda es la inflamación de la doble bolsa serosa que envuelve el corazón (el pericardio). En jóvenes sanos, el 90% es causada por un virus que da una gripita previa. Como las dos capas de la bolsa están rojas e hinchadas, rozan y raspan cada vez que el corazón late. La firma clínica maestra: Como la bolsa duele cuando el corazón la aplasta por gravedad, si el paciente se acuesta plano, el corazón se recuesta sobre el pericardio rasposo y duele muchísimo; si el paciente se sienta y se inclina hacia adelante (Posición Mahometana), el corazón se despega de la espalda y de la pleura tensa, y el dolor \"desaparece mágicamente\". El Electrocardiograma es un libro abierto: Al estar irritado TODO el exterior del corazón, el Supradesnivel del ST ocurre en casi todas las derivadas (difuso) pero su forma es redondita como una sonrisa (cóncava). La inflamación atípica de las aurículas hunde la línea antes de la contracción, generando la infame Depresión del segmento PR (muy patognomónico). El tratamiento no requiere UCI. Se manda a la casa con dosis fuertes de antiinflamatorios: AINEs (Ibuprofeno o Aspirina) sumado sagradamente a COLCHICINA por 3 meses (que evita recaídas).\n\n**TRAMPA DEL EXAMEN:** La forma del ST: Te exigen diferenciar la gráfica de la muerte contra la gráfica del dolor.\n- ST Triste / Convexo (Joroba, Montaña, lápida sepulcral) = INFARTO.\n- ST Feliz / Cóncavo (Sonrisa difusa) + PR Deprimido = PERICARDITIS.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., a este joven le entró un resfriado común hace una semana y el virus se fue de vacaciones al pecho, inflamando la \"bolsita\" protectora que forra su corazón. Si el paciente se acuesta bocarriba a dormir, la gravedad hace que el corazón pesado se apoye en la lija irritada de la espalda y le duela el alma. Cuando se sienta en la cama y se inclina como rezando hacia las rodillas, el corazón se balancea hacia adelante alejándose de las terminaciones nerviosas dolorosas y suspira de alivio. Dale grandes dosis de Ibuprofeno y Colchicina para \"lubricar\" e inflamar hacia abajo la bolsita del corazón, y la sonrisa regresará a su rostro.",
    keyPoints: [
      "Dolor torácico en Joven post-Gripa + Empeora acostado y MEJORA AL INCLINARSE ADELANTE = Pericarditis Aguda.",
      "ECG Clásico: Elevación ST Cóncava DIFUSA + Depresión del segmento PR.",
      "Terapia de Oro Conjunta: AINEs altas dosis + COLCHICINA."
    ]
  },
  {
    id: "umng-conv-ed4-80",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "URGENCIAS INFECCIOSAS - CIERRE DEL LOTE",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Una joven de 19 años asiste a su consulta de urgencias hospitalarias refiriendo dolor pélvico bajo (\"en el bajo vientre\") constante y sordo desde hace 5 días, acompañado de flujo vaginal amarillento muy fétido, dispareunia profunda (dolor al tener relaciones sexuales profundas) y sensación febril anoche. Al realizar el examen ginecológico bimanual, usted encuentra una exquisita sensibilidad y dolor al movilizar lateralmente el cuello uterino (Signo del candelabro positivo) y dolor a la palpación de los anexos, lo que confirma clínicamente una Enfermedad Pélvica Inflamatoria (EPI). Sus signos vitales son: PA 115/75 mmHg, Frecuencia Cardíaca 95 lpm, Temperatura en urgencias de 37.8°C. En el cuadro hemático reporta 9.500 leucocitos. Sin embargo, mientras usted se dispone a recetarle tratamiento antibiótico intramuscular y oral para ir a casa (Ceftriaxona IM dosis única + Doxiciclina oral), la paciente le comenta: \"Doctor, me preocupa mucho tomarme esas pastillas porque en las mañanas he vomitado todo, no tolero ni siquiera el agua, y además tengo una duda: mi prueba de embarazo de orina casera que me hice ayer me salió positiva\". ¿Cuál es la conducta y el cambio RADICAL Y ABSOLUTO de plan terapéutico dictado por los manuales ante este nuevo dato revelado?",
    options: [
      { id: "A", label: "A", text: "Realizar aspirado manual endouterino (AMEU) o legrado inmediato por sospecha de aborto séptico, seguido de antibióticos orales." },
      { id: "B", label: "B", text: "Suspender la Doxiciclina por ser teratogénica, enviar a casa únicamente con Ceftriaxona intramuscular y Azitromicina oral por 14 días." },
      { id: "C", label: "C", text: "Ingresar INMEDIATAMENTE a la paciente a HOSPITALIZACIÓN estricta y aplicar un esquema antibiótico mixto netamente INTRAVENOSO (Cefoxitina + Doxiciclina o Clindamicina + Gentamicina)." },
      { id: "D", label: "D", text: "Tratar a la paciente ambulatoriamente con antibióticos orales para EPI leve, pero advertirle los riesgos teratogénicos y citarla a consulta de interrupción voluntaria." }
    ],
    correctOptionId: "C",
    explanation: "La inmensa mayoría de casos de Enfermedad Pélvica Inflamatoria (EPI) se tratan de forma ambulatoria en la casa con una inyección de Ceftriaxona en el glúteo y 14 días de Doxiciclina oral. ¡PERO HAY LÍNEAS ROJAS DE HOSPITALIZACIÓN! La ACOG, la CDC y la UMNG exigen internar y usar Antibióticos Endovenosos bajo estricta observación (típicamente Cefotetan/Cefoxitina + Doxiciclina IV, o si no se puede usar Doxi en embarazo, el régimen oro de Clindamicina + Gentamicina) ante la presencia de CUALQUIERA de los siguientes criterios absolutos:\n1. EMBARAZO. (Toda gestante con EPI se hospitaliza para protegerla de sepsis fatal y ruptura de la trompa).\n2. Incapacidad para tolerar la Vía Oral (Vómitos masivos).\n3. Presencia de un Absceso Tubo-Ovárico (Detectado por examen o ecografía).\n4. Diagnóstico dudoso que simule emergencia quirúrgica (ej. no se descarta Apendicitis).\n5. Falla al tratamiento oral ambulatorio después de 72 horas.\nEsta joven, en un solo renglón de su testimonio, marcó DOS criterios rojos absolutos: Está embarazada y vomita todo. Tú cancelas la receta de la casa, le canalizas una vena y la subes a la cama del pabellón ginecológico ahora mismo.\n\n**TRAMPA DEL EXAMEN:** Minimizar los síntomas para dar de alta: El examinador adrede te pone signos vitales super \"tranquilos\" (Fiebre bajita de 37.8 y presión normal). Hace que la paciente luzca \"estable y caminadora\". Luego en la última frase te suelta la bomba de que está en embarazo. Muchos internos se comen el anzuelo de los signos vitales y marcan el alta ambulatoria. Embarazo con dolor a la movilización de cuello se gana la cama y el antibiótico por la vena, siempre.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., tu esfero estaba a punto de firmarle una receta para la farmacia cuando ella soltó las dos excusas perfectas para amarrarla a una cama de tu hospital. Las bacterias de transmisión sexual subieron por su cuello uterino y encendieron un fuego en sus trompas de Falopio. Para una joven sana no grávida, un cóctel de pastillas en casa apagaría el incendio. Pero ella tiene a un embrión vivo flotando ahí dentro y su estómago rechaza hasta el agua pura. Si le mandas pastillas de Doxiciclina a la casa, el ácido de su estómago las vomitará completas. Súbela al piso, ponle Clindamicina con Gentamicina colgando de los goteros por la vena segura.",
    keyPoints: [
      "Tratamiento AMBULATORIO de EPI: Ceftriaxona IM dosis única + Doxiciclina + Metronidazol oral x 14 d.",
      "Criterios de HOSPITALIZACIÓN en EPI (Esquemas de antibióticos IV):",
      "- Embarazada.",
      "- Absceso Tubo-Ovárico.",
      "- Intolerancia Vía Oral (vómitos severos).",
      "- Apariencia clínica TÓXICA grave."
    ]
  }
];
