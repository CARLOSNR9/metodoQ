import type { TrainingQuestion } from "@/lib/questions/types";

export const UMNG_CONV_ED4_81_90_QUESTIONS: TrainingQuestion[] = [
  {
    id: "umng-conv-ed4-81",
    university: "UMNG",
    examArea: "PEDIATRÍA",
    topic: "GASTROENTEROLOGÍA Y CIRUGÍA PEDIÁTRICA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un lactante masculino de 4 semanas de vida es traído a consulta de control y crecimiento. Nació a término, sin complicaciones, y fue dado de alta a los 2 días de nacido con un ligero tono amarillo en la piel que la madre asumió como \"ictericia fisiológica\". Hoy, la madre refiere que el niño está muy irritable, y ha notado que los pañales del bebé siempre tienen deposiciones de color blanco arcilla (acolia fecal masiva), y la orina mancha el pañal de un color oscuro intenso (coluria). Al examen físico, usted constata una ictericia generalizada verdínica y palpa una hepatomegalia firme de 3 cm por debajo del reborde costal. Los laboratorios muestran una Bilirrubina Total de 12 mg/dL, a expensas de la Bilirrubina Directa (Conjugada) en 9.5 mg/dL. ¿Cuál es el diagnóstico confirmatorio más probable y cuál es el procedimiento quirúrgico OBLIGATORIO que debe realizarse idealmente antes de los 60 días de vida para evitar una cirrosis biliar letal?",
    options: [
      { id: "A", label: "A", text: "Quiste del Colédoco / Resección del quiste y derivación hepatoyeyunal en Y de Roux." },
      { id: "B", label: "B", text: "Atresia de Vías Biliares Extrahepáticas / Procedimiento de Kasai (Hepatoportoenterostomía)." },
      { id: "C", label: "C", text: "Hepatitis Ictérica Fisiológica prolongada / Fototerapia intensiva y fenobarbital." },
      { id: "D", label: "D", text: "Galactosemia congénita / Retiro absoluto de lactancia materna e inicio de fórmulas de soya." }
    ],
    correctOptionId: "B",
    explanation: "La Atresia de Vías Biliares es una enfermedad fibro-obliterativa donde los conductos biliares externos del bebé se fibrosan, se cierran y desaparecen. El hígado produce la bilis perfectamente, pero esta se queda atrapada adentro. Como la bilis no llega al intestino, el popó del bebé no se tiñe de marrón y sale blanco como la masilla (Acolia). Como la bilis se represa a la sangre, la bilirrubina directa sube masivamente y se orina de color oscuro (Coluria). Es una carrera contra el reloj: si la bilis ácida se queda en el hígado, lo destruye causando Cirrosis Biliar irreversible a los 3 meses de vida. El tratamiento es el Procedimiento de Kasai (el cirujano corta los conductos fibróticos inútiles y pega una porción del intestino delgado directamente al lecho del hígado para que la bilis drene directamente a la tripa). Si esto no se hace ANTES de los 60 a 90 días de vida, el daño hepático es irreversible y el niño requerirá un trasplante de hígado urgente.\n\n**TRAMPA DEL EXAMEN:** Minimizar la ictericia del primer mes: La trampa es creer que \"todo bebé amarillo está bien con un poco de sol\". La regla de oro en pediatría: Ictericia de más de 2 semanas obliga a tomar niveles. Si la bilirrubina DIRECTA es > 20% del total, es PATOLÓGICA (obstructiva) y requiere ecografía urgente buscando el \"Signo de la cuerda triangular\" en el hilio hepático.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., este bebé tiene la cañería del hígado sellada con cemento genético. El hígado está fabricando bilis verde y corrosiva todos los días, pero al no tener puerta de salida hacia el intestino, la bilis se devuelve y quema los hepatocitos como ácido. Si tú le dices a esa madre \"póngalo al solete en la ventana que eso se le pasa\", estás firmando la orden de muerte de ese hígado. Revisa el pañal; si el popó parece yeso blanco o arcilla, la bilis no está pasando. Llama al cirujano pediatra inmediatamente para que haga la cirugía de Kasai, conectando un tubo de tripa viva directo a la base del hígado antes de que la cirrosis lo destruya para siempre.",
    keyPoints: [
      "Ictericia neonatal prolongada (>2 semanas) + Acolia (Popó blanco) + Bilirrubina DIRECTA alta = Atresia Biliar.",
      "Ventana terapéutica: Cirugía antes de los 60 días (2 meses).",
      "Cirugía de rescate: Hepatoportoenterostomía de KASAI."
    ]
  },
  {
    id: "umng-conv-ed4-82",
    university: "UMNG",
    examArea: "ONCOLOGÍA",
    topic: "URGENCIAS METABÓLICAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un niño de 12 años, recientemente diagnosticado con un Linfoma de Burkitt de altísima carga tumoral abdominal, ingresa a la Unidad de Cuidados Intensivos Pediátricos tras recibir su primer ciclo de quimioterapia intensiva de inducción hace 24 horas. La enfermera lo llama de urgencia porque el niño presenta arritmias cardíacas en el monitor, letargia profunda y espasmos musculares severos (tetania carpopedal). Al revisar los laboratorios STAT tomados hace 15 minutos, usted documenta un desastre metabólico generalizado que amenaza con bloquear por completo la función renal del paciente. Teniendo en cuenta la destrucción celular masiva provocada por la quimioterapia, ¿cuál es el patrón de los cuatro iones clásicos que define este síndrome letal?",
    options: [
      { id: "A", label: "A", text: "Hipercalcemia, Hiperpotasemia, Hipernatremia, Hipouricemia." },
      { id: "B", label: "B", text: "Hipopotasemia, Hiperfosfatemia, Hipercalcemia, Hiperuricemia." },
      { id: "C", label: "C", text: "Hiperpotasemia, Hiperfosfatemia, Hiperuricemia, Hipocalcemia." },
      { id: "D", label: "D", text: "Hipofosfatemia, Hipocalcemia, Hipopotasemia, Hiperuricemia." }
    ],
    correctOptionId: "C",
    explanation: "El Síndrome de Lisis Tumoral es la emergencia metabólica por excelencia del oncólogo. Cuando la quimioterapia ataca a un cáncer muy sensible y gigante (Linfoma de Burkitt, LLA), millones de células cancerígenas \"estallan\" al mismo tiempo. Al estallar, vomitan todo lo que tenían adentro directo a la sangre del paciente.\n1. Las células están llenas de Potasio = Hiperpotasemia (Arritmias mortales).\n2. Las células están llenas de Fósforo = Hiperfosfatemia.\n3. El ADN de las células se desintegra en purinas, que se convierten en Ácido Úrico = Hiperuricemia (Tapa los riñones).\n4. ¿Y el calcio? El altísimo nivel de Fósforo en la sangre se une ávidamente al Calcio libre y lo precipita en forma de cristales insolubles en los tejidos, robándolo de la sangre = HIPOCALCEMIA (Espasmos, tetania, prolongación del QT).\nLa prevención es fundamental: Hiperhidratación vigorosa, Alopurinol o Rasburicasa antes de la quimioterapia para manejar el ácido úrico.\n\n**TRAMPA DEL EXAMEN:** El juego del Calcio: Muchos estudiantes creen que \"si todo sube, todo sube\". Recuerda la excepción inquebrantable: En la Lisis Tumoral TODO SUBE (Potasio, Fósforo, Ácido Úrico), pero EL CALCIO CAE AL PISO.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., administrarle quimioterapia a este niño con Linfoma de Burkitt es como tirar una bomba atómica sobre una ciudad muy poblada. Las células cancerígenas reventaron por millones. Al reventarse, vaciaron sus basureros directamente en las venas del niño. El potasio se disparó a 7.0 parándole el corazón, y el ácido úrico se precipitó como piedras afiladas taponándole los riñones por completo (Nefropatía por uratos). El Fósforo que salió a volar se abrazó al Calcio de la sangre, robándoselo y dejando a los músculos del niño acalambrados por la hipocalcemia. Si no preparaste a este paciente inundándolo de suero fisiológico y Rasburicasa 24 horas antes del primer ciclo de quimioterapia, el tratamiento oncológico matará al niño mucho más rápido que el propio cáncer.",
    keyPoints: [
      "Síndrome de Lisis Tumoral (Post-Quimio en Burkitt o Leucemias): La célula explota y libera su contenido.",
      "ALTO: Potasio, Fósforo, Ácido Úrico.",
      "BAJO: Calcio (Secuestrado por el Fósforo).",
      "Manejo preventivo: Hidratación abundante + Alopurinol o Rasburicasa (Uricolítico)."
    ]
  },
  {
    id: "umng-conv-ed4-83",
    university: "UMNG",
    examArea: "ORTOPEDIA Y TRAUMATOLOGÍA",
    topic: "TRAUMA DE MIEMBRO SUPERIOR",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un joven de 25 años acude a urgencias sujetándose el brazo derecho, llorando de dolor. Relata que mientras jugaba un partido de fútbol, cayó al piso con el brazo extendido, apoyado hacia atrás y separado del cuerpo (abducción y rotación externa), y otro jugador le cayó encima de ese brazo. Al examen físico, usted observa una pérdida dramática de la redondez del hombro derecho; el hombro se ve cuadrado y \"escalonado\" (Deformidad en charretera), y usted puede palpar un hueco bajo el acromion, mientras que la cabeza humeral se palpa hacia adelante, cerca de la clavícula. Antes de proceder a cualquier maniobra ortopédica de reducción, usted debe realizar un examen neurológico riguroso de la sensibilidad y movilidad en el brazo ipsilateral. ¿Cuál es el nervio periférico que sufre el MAYOR riesgo de estiramiento y lesión en este trauma específico, y cómo evalúa su función sensitiva rápidamente?",
    options: [
      { id: "A", label: "A", text: "Nervio Radial / Evaluando la sensibilidad en el dorso del primer espacio interdigital de la mano." },
      { id: "B", label: "B", text: "Nervio Musculocutáneo / Evaluando la sensibilidad en la cara lateral del antebrazo." },
      { id: "C", label: "C", text: "Nervio Axilar (Circunflejo) / Evaluando la sensibilidad en la cara lateral del hombro sobre el músculo deltoides." },
      { id: "D", label: "D", text: "Nervio Mediano / Evaluando la sensibilidad en la yema del dedo índice." }
    ],
    correctOptionId: "C",
    explanation: "La Luxación Anterior de Hombro es la luxación articular más común del cuerpo humano. Ocurre por el clásico mecanismo de brazo en Abducción + Rotación Externa. La cabeza del húmero se sale de su sitio hacia adelante, dejando el músculo deltoides \"colgando\" y formando un ángulo recto en el hombro (Hombro en Charretera militar). El gran problema es que el Nervio Axilar (o Circunflejo) abraza el cuello quirúrgico del húmero justo en esa articulación. Al salirse la cabeza, el nervio se estira violentamente. Este nervio motoriza al músculo Deltoides (no puede separar el brazo) y le da sensibilidad a un parche de piel redondo justo en la parte lateral superior del hombro, donde iría la insignia de un soldado en el uniforme (\"Regimental badge area\"). Tienes que pincharle esa zona de piel con una aguja antes de acomodarle el brazo; si no siente, el nervio está lastimado. Se reduce con tracción suave (ej. Maniobra de Kocher o Hipócrates).\n\n**TRAMPA DEL EXAMEN:** Mnemotecnia Ortoneurológica Clásica:\n- Hombro luxado / Cuello del Húmero -> Nervio Axilar.\n- Diáfisis (Cuerpo) del Húmero -> Nervio Radial (Mano caída).\n- Codo (Epicóndilo Medial) -> Nervio Cubital (Mano en garra).\n- Muñeca -> Nervio Mediano.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el brazo de este muchacho se salió de su cuenca hacia adelante como si le hubieran arrancado una palanca. Al hacerlo, el hueso del húmero jaló un cable eléctrico muy delicado que envuelve el cuello de su hombro: el nervio axilar. Tienes que ser muy cuidadoso aquí. Si le metes un tirón salvaje para intentar meter el hueso a la mala sin anestesiarlo, terminarás de arrancar el nervio. Pellízcale la piel justo donde lleva el parche del músculo deltoides. Si el paciente no te siente, anótalo en la historia clínica (\"Ingresa con neuropraxia del axilar secundaria al trauma\"). Si omites este examen, se lo reduces y mañana el muchacho no puede levantar el brazo, el abogado del paciente dirá que la culpa no fue del partido de fútbol, sino de que tú le arrancaste el nervio en la camilla al jalarlo. Protégete examinando antes.",
    keyPoints: [
      "Luxación Anterior de Hombro:",
      "Signo clínico: Deformidad en Charretera.",
      "Nervio en Peligro: NERVIO AXILAR (Circunflejo).",
      "Examen clínico: Pérdida de sensibilidad sobre el músculo deltoides y debilidad para abducir el brazo."
    ]
  },
  {
    id: "umng-conv-ed4-84",
    university: "UMNG",
    examArea: "GINECOLOGÍA Y OBSTETRICIA",
    topic: "URGENCIAS MÁXIMAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Una gestante de 32 años (G2P1), cursando la semana 40 de su embarazo, se encuentra en trabajo de parto activo y vigoroso. Su embarazo previo culminó en una cesárea hace tres años. Durante el expulsivo, la paciente presenta una contracción muy prolongada seguida de un grito desgarrador, tras lo cual el dolor abdominal se hace constante y generalizado, perdiendo la forma clásica del útero contráctil. La matrona nota un cese abrupto de las contracciones uterinas. Simultáneamente, el feto, que ya se encontraba coronando, desaparece de la vista y ya no es palpable en el tacto vaginal (Pérdida de la estación fetal). El monitor fetal muestra una bradicardia súbita de 60 lpm sostenida. A la palpación abdominal, usted puede sentir claramente \"partes fetales (un codo y un pie)\" directamente debajo de la piel materna, con enorme facilidad. ¿Cuál es el diagnóstico de esta tragedia obstétrica y el manejo inmediato?",
    options: [
      { id: "A", label: "A", text: "Desprendimiento Prematuro de Placenta (Abruptio) / Cesárea de emergencia." },
      { id: "B", label: "B", text: "Ruptura Uterina / Código rojo, reanimación y Laparotomía inmediata para Cesárea y posible Histerectomía." },
      { id: "C", label: "C", text: "Embolia de Líquido Amniótico / Soporte ventilatorio, RCP y cesárea perimortem si entra en paro." },
      { id: "D", label: "D", text: "Distocia de Hombros / Maniobra de McRoberts urgente y presión suprapúbica." }
    ],
    correctOptionId: "B",
    explanation: "La Ruptura Uterina es la catástrofe que aterra a todo obstetra al permitir un parto vaginal después de una cesárea previa (TOLAC/VBA2C). La pared del útero que fue cortada hace 3 años es una cicatriz fibrótica débil. Cuando el útero hace fuerzas contráctiles masivas, la cicatriz estalla como una llanta vieja. Al romperse la pared del útero, toda la presión contráctil desaparece (el útero se vuelve fofo y deja de empujar). El bebé \"se sale\" por el hueco y cae flotando libremente entre los intestinos de la madre en la cavidad abdominal. Por eso, al tacto vaginal ya no le tocas la cabeza (Pérdida de estación) y al tocar la barriga de la mamá, sientes el bracito y la pierna del bebé asomando debajo de la pura piel materna (Fuera de la matriz). Al romperse los vasos masivos uterinos, la madre hace un choque exanguinante masivo y el feto hace bradicardia letal. El manejo es abrir el abdomen INMEDIATAMENTE de un machetazo, sacar al bebé que flota en el peritoneo, frenar el sangrado masivo, y usualmente extirpar el útero destrozado (Histerectomía) para salvar a la madre.\n\n**TRAMPA DEL EXAMEN:** El útero que se rinde: Cese abrupto de contracciones no es sinónimo de que \"el útero descansó\". En una mujer con cesárea previa, que de la nada el útero deje de empujar y le duela el peritoneo, es el aviso de que el músculo se partió en dos pedazos.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., tu paciente acaba de sufrir una explosión interna. La vieja cicatriz que tenía en la base de la matriz no aguantó los 100 milímetros de mercurio de presión de este parto y cedió de golpe. Todo el útero se rasgó por la mitad. El bebé, que estaba empujando con la cabeza en el canal vaginal, encontró una puerta inmensa abierta hacia la parte de arriba y se escurrió hacia los intestinos de la madre, huyendo hacia la cavidad libre peritoneal. Por eso metes la mano por la vagina y no encuentras nada. Esa mujer se está desangrando a un ritmo de dos litros por minuto hacia su propia barriga. Abrela por la línea media abdominal en 30 segundos; saca a ese feto del mar de sangre e intestinos para pasárselo al pediatra, y concéntrate en pinzar las arterias uterinas rotas para que el corazón de la mamá no se vacíe de vida en la plancha metálica.",
    keyPoints: [
      "Tríada Siniestra de la Ruptura Uterina:",
      "1. Trabajo de parto vigoroso (Usualmente con Cesárea Previa).",
      "2. Cese abrupto de contracciones (Dolor severo generalizado).",
      "3. Pérdida de Estación Fetal / Partes fetales palpables bajo la piel abdominal.",
      "Conducta absoluta: Laparotomía Emergente Salvavidas."
    ]
  },
  {
    id: "umng-conv-ed4-85",
    university: "UMNG",
    examArea: "SALUD PÚBLICA",
    topic: "TOXICOLOGÍA AMBIENTAL",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un niño de 4 años es llevado a la consulta de pediatría por sus padres, quienes se acaban de mudar a una casona antigua construida en los años 1950, que están remodelando. Los padres refieren que el niño presenta un cuadro de meses de irritabilidad, pérdida de apetito, vómitos esporádicos e insomnio. El padre señala que el niño tiene problemas de aprendizaje recientes y que \"le duele mucho la barriga como en cólicos\". Al examen físico, el niño presenta palidez mucocutánea y una línea de pigmentación oscura, negro-azulada, en el borde de las encías a lo largo de los dientes. Usted sospecha un envenenamiento crónico ambiental por las pinturas descascaradas que el niño muerde. En el frotis de sangre periférica, el patólogo le reporta un hallazgo clásico de Punteado Basófilo en los glóbulos rojos, confirmando una anemia microcítica severa. ¿Cuál es el metal pesado causante de este toxíndrome pediátrico y cuál es el medicamento quelante de elección para limpiar su sangre?",
    options: [
      { id: "A", label: "A", text: "Intoxicación Crónica por Mercurio / Tratamiento con Penicilamina." },
      { id: "B", label: "B", text: "Intoxicación por Hierro / Tratamiento con Deferoxamina intravenosa." },
      { id: "C", label: "C", text: "Intoxicación por Arsénico / Tratamiento con BAL (Dimercaprol)." },
      { id: "D", label: "D", text: "Intoxicación Crónica por Plomo (Saturnismo) / Tratamiento con Succímero (DMSA) oral o EDTA cálcico disódico IV." }
    ],
    correctOptionId: "D",
    explanation: "El Plomo (Saturnismo) era el ingrediente principal de las pinturas de las casas antes de 1970. Al descascararse, la pintura vieja tiene un sabor dulce. Los niños con Pica (o jugando en el polvo de remodelación) ingieren el plomo a diario. El plomo hace dos desastres: 1) Destruye irreversiblemente la mielina en el cerebro en desarrollo del niño (causando retraso mental, letargia y problemas de aprendizaje para toda la vida), y en nervios periféricos causa la famosa \"mano caída\". 2) Bloquea las enzimas que fabrican el grupo Hem de la sangre (ALA dehidratasa), por lo que el niño hace una Anemia Microcítica Hipocrómica. El ribosoma atascado en el glóbulo rojo se precipita formando el patognomónico \"Punteado Basófilo\" visible al microscopio. En cuadros severos, el plomo se deposita en las encías por reacción bacteriana formando la línea negra/azul oscura (Línea de Burton). El tratamiento es retirar al niño de la casa de inmediato y dar terapia quelante (para \"agarrar\" el plomo de la sangre y botarlo en orina) usando Succímero (DMSA) oral para casos moderados, o EDTA cálcico IV / Dimercaprol (BAL) en casos severos con encefalopatía.\n\n**TRAMPA DEL EXAMEN:** Microcítica hipocrómica confusa: Muchos ven Anemia microcítica en un niño y le formulan Hierro por meses asumiendo desnutrición. Si el niño está en un ambiente viejo o si la hemoglobina no sube con las gotas, hay que pedir un frotis de sangre. Si dice \"Punteado basófilo\", te estrellaste contra el plomo.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., esta familia se fue a vivir a una casa con pintura tóxica de los años 50. El niño, al raspar la pared con las uñas y meterse los dedos a la boca, lleva tres meses comiendo virutas de plomo. Ese metal pesado apagó las enzimas de su médula ósea que hacen la sangre; por eso los glóbulos rojos salen deformes y llenos de puntos de basura de ARN sin procesar (el punteado basófilo). Y lo más triste: el metal se está asentando en la corteza frontal de su cerebro, borrando lentamente su capacidad de aprendizaje. La línea azulosa asquerosa que bordea sus dientes es la evidencia del sulfuro de plomo acumulado. Trata a ese niño con Quelantes para limpiar sus venas urgentemente y prohíbele a la familia volver a pisar esa casa sin una remodelación profesional, o la pérdida de inteligencia del niño será irrecuperable en un año.",
    keyPoints: [
      "Tríada de Intoxicación por PLOMO (Saturnismo) en Niños (Casas Viejas/Pinturas):",
      "1. Dolor Abdominal Cólico severo + Estreñimiento.",
      "2. Neuropatía Periférica (Ej. Caída de muñeca) + Afectación cognitiva.",
      "3. Anemia Microcítica con PUNTEADO BASÓFILO. (Signo físico raro: Línea de Burton en encías).",
      "Antídotos: Succímero, EDTA o BAL."
    ]
  },
  {
    id: "umng-conv-ed4-86",
    university: "UMNG",
    examArea: "CARDIOLOGÍA",
    topic: "MEDICINA DE URGENCIAS",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un hombre de 45 años, con antecedente de insuficiencia renal crónica terminal en hemodiálisis (la cual abandonó esta semana), es llevado a la sala de reanimación por debilidad masiva. El paciente se encuentra somnoliento, sudoroso, con una PA de 80/50 mmHg. Usted instala el monitor cardiaco e imprime un Electrocardiograma (ECG) de 12 derivaciones, evidenciando un hallazgo terrorífico: Frecuencia cardíaca de 30 lpm, ausencia total de ondas P (No hay ritmo sinusal), un complejo QRS extremadamente ancho y deforme (0.22 segundos) que se funde directamente con unas ondas T picudas, simétricas, de base estrecha y gigantescas en casi todas las precordiales (Patrón en onda sinusoidal). Sabiendo que el nivel de potasio en sangre es letalmente alto, usted administra de forma OBLIGATORIA el estabilizador de membrana cardiaca (Gluconato de Calcio intravenoso). Sin embargo, usted necesita reducir agresivamente los niveles circulantes de potasio metiéndolos dentro de la célula en la próxima media hora. ¿Cuál de las siguientes terapias metabólicas logrará la redistribución intracelular de potasio más rápida y sostenida en este paciente con falla renal?",
    options: [
      { id: "A", label: "A", text: "Infusión de Resinas de intercambio iónico (Poliestireno sulfonato sódico/Kayexalate) por enema rectal o vía oral." },
      { id: "B", label: "B", text: "Administración de un bolo de Insulina Regular (10 Unidades) mezclada con una infusión de 50 mL de Dextrosa al 50% intravenosa (Solución Polarizante)." },
      { id: "C", label: "C", text: "Aplicación inmediata de Hemodiálisis de urgencia con baño bajo en potasio." },
      { id: "D", label: "D", text: "Administración de altas dosis de Furosemida intravenosa (Diurético de asa)." }
    ],
    correctOptionId: "B",
    explanation: "La Hiperkalemia Severa despolariza el músculo cardíaco haciéndolo flácido y lento (QRS ancho, bradicardia). El paso 1 fue magistral: Gluconato de Calcio para \"teflonar\" o blindar el corazón (protege, pero no baja el potasio). El Paso 2 (que es lo que pide la pregunta) es Esconder el potasio RÁPIDO metiéndolo a la célula (Redistribución transcelular). La llave más poderosa y efectiva de medicina interna para obligar al potasio a entrar a las células musculares es la Terapia de Insulina-Glucosa (Solución Polarizante). Al inyectar Insulina Regular por la vena, la insulina estimula a la bomba Sodio-Potasio ATPasa de las células, forzándolas a \"tragarse\" todo el potasio flotante de la sangre hacia su interior en menos de 15 a 30 minutos. Simultáneamente, debes inyectar la Dextrosa al 50%, NO para el potasio, sino para que la inyección de insulina no mate al paciente de una hipoglucemia severa. Esta terapia le compra al paciente de 4 a 6 horas de vida estabilizando la sangre. (También se pueden nebulizar megadosis de Salbutamol para ayudar).\n\n**TRAMPA DEL EXAMEN:** Confundir el rol de cada antídoto del Potasio:\n- El Calcio NO BAJA el potasio, solo protege al corazón.\n- La Insulina/Salbutamol NO BOTAN el potasio del cuerpo, solo lo \"esconden\" en la célula por un par de horas.\n- La Diálisis / Diuréticos / Resinas SÍ ELIMINAN permanentemente el potasio del cuerpo. Tienes que aplicar los tres pasos en orden.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., tu paciente renal tiene tanta basura retenida que su sangre se volvió un caldo concentrado de potasio. El potasio excesivo arruinó la batería eléctrica del corazón; la electricidad va tan lento en el ventrículo que el monitor te dibuja esas montañas anchas, gordas y lentas. Ya hiciste lo de Oro que fue inyectarle la ampolla de Calcio para que el músculo cardiaco aguante el golpe, pero esa protección se desvanecerá en 30 minutos. Necesitas \"barrer\" ese potasio de la sangre urgentemente. Carga la jeringa con 10 unidades de Insulina y métela por la vena. La insulina le dará la orden a todos los músculos esqueléticos del paciente de abrir sus compuertas y \"tragarse\" el potasio de emergencia, sacándolo de las venas para que el corazón vuelva a latir rápido y delgado en el monitor. Envía el chicharrón a la UCI para que le metan la máquina de diálisis con calma en un par de horas.",
    keyPoints: [
      "Tratamiento de la Hiperkalemia Severa (con cambios en el ECG):",
      "1. Estabilizador de Membrana (Paso 1, 2-3 min): Gluconato de Calcio IV.",
      "2. Redistribución Rápida (Paso 2, 15-30 min): Insulina Regular + Dextrosa al 50% IV (y/o Salbutamol nebulizado, Bicarbonato si hay acidosis).",
      "3. Eliminación Real (Paso 3, Horas): Hemodiálisis (Si es paciente renal) o Furosemida (si el riñón sirve)."
    ]
  },
  {
    id: "umng-conv-ed4-87",
    university: "UMNG",
    examArea: "PEDIATRÍA",
    topic: "CIRUGÍA PEDIÁTRICA Y GASTROENTEROLOGÍA",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un recién nacido a término es evaluado a las 36 horas de vida. La enfermera de la sala de maternidad le reporta que el bebé no ha presentado la expulsión de su primera deposición de meconio. El neonato se encuentra eutrófico, sin signos de infección, pero su abdomen se encuentra progresivamente distendido y globoso. Además, el bebé ha empezado a presentar vómitos biliosos. Al realizar el examen físico, usted le practica un tacto rectal cuidadoso con el dedo meñique enguantado; inmediatamente después de retirar el dedo, el neonato presenta una expulsión ruidosa, explosiva, a presión, masiva y fétida de gas y meconio líquido que mancha por completo los pañales y la camilla (\"Signo del Chorro\" o Squirt Sign). La radiografía de abdomen muestra una gran dilatación del colon proximal y ausencia de gas en el recto. ¿Cuál es la entidad patológica neuroentérica causante de esta obstrucción intestinal y cómo se realiza su diagnóstico definitivo o estándar de oro?",
    options: [
      { id: "A", label: "A", text: "Íleo Meconial por Fibrosis Quística / Se confirma mediante Iontoforesis del sudor." },
      { id: "B", label: "B", text: "Enfermedad de Hirschsprung (Megacolon Agangliónico Congénito) / Se confirma mediante Biopsia de succión rectal evidenciando ausencia de células ganglionares." },
      { id: "C", label: "C", text: "Atresia Duodenal congénita / Se confirma mediante Radiografía simple de abdomen buscando el signo de la doble burbuja." },
      { id: "D", label: "D", text: "Vólvulo de intestino medio por malrotación / Se confirma mediante Enema de contraste con colon desplazado a la izquierda." }
    ],
    correctOptionId: "B",
    explanation: "La Enfermedad de Hirschsprung (Megacolon Agangliónico) es un error del embarazo. Las células de la cresta neural deben migrar de arriba hacia abajo para colonizar los intestinos y crear el plexo mientérico (Auerbach y Meissner) que permite la relajación. En este niño, la migración \"se detuvo a mitad de camino\". El Recto y el Colon Sigmoides nacieron sin células nerviosas (Aganglionosis). Como no tienen nervios que les den la orden de \"relajarse\", estos tubos se quedan permanentemente contraídos a la fuerza, como un anillo de acero. El meconio intenta bajar, pero choca contra el tubo rígido del recto. El intestino de arriba se dilata intentando empujar (Megacolon), produciendo vómitos y distensión.\n¿Qué pasa en urgencias? Cuando el médico mete un dedo por el ano, el dedo actúa como una sonda dilatadora que vence el espasmo rígido a la fuerza. Al abrir el tapón con el dedo, todos los gases a alta presión y el líquido retenidos arriba estallan como un cañón hacia la cara del médico (Signo del Chorro o Blast Sign). Para el diagnóstico definitivo de oro, no bastan los rayos X; hay que hacer una Biopsia por succión del Recto para enviarla al microscopio, demostrando histológicamente que NO HAY NINGÚN GANGLIO en ese tejido y hay hipertrofia de fibras nerviosas. La cura es quirúrgica: resecar (cortar) el segmento inútil que no tiene nervios y empatar el colon sano con el ano.\n\n**TRAMPA DEL EXAMEN:** La guerra de las explosiones rectales: La frase \"explosión al tacto rectal\" es un regalo del cielo en los exámenes de pediatría.\n- Tapón pegajoso de chicle sin explosión = Íleo Meconial (Fibrosis Quística).\n- Anillo duro que explota materia fecal al dilatarlo = Hirschsprung.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., ponte la máscara y bata de bioseguridad completa antes de revisarle la colita a este bebé. Todo el gas y la primera caquita verde negra de los últimos nueve meses están estancados porque el tubo del recto de este niño nació sin cables eléctricos. Ese músculo final del colon no sabe \"cómo soltar\" y se quedó trabado como un tapón de corcho en una botella de champaña a presión. Cuando tú pones un poquito de lubricante y metes el dedo meñique suavemente por el ano, funcionas como un abridor de botellas: logras destrabar el esfínter paralizado por pura fuerza bruta. La explosión de gas te bañará los guantes hasta el codo. Le has aliviado el dolor momentáneamente, pero tienes que llamar al cirujano para que corte ese último metro de tripa inútil antes de que la presión le estalle la barriga al niño.",
    keyPoints: [
      "Retraso Meconial (>48 horas) + Distensión abdominal masiva.",
      "Examen Clave: Tacto Rectal con Salida Explosiva de Heces/Gas (Squirt Sign) = Enfermedad de Hirschsprung.",
      "Diagnóstico Definitivo / Gold Standard: Biopsia Rectal (Demuestra Aganglionosis del plexo mientérico)."
    ]
  },
  {
    id: "umng-conv-ed4-88",
    university: "UMNG",
    examArea: "CIRUGÍA GENERAL",
    topic: "VÍAS BILIARES",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Una mujer de 75 años acude a urgencias quejándose de dolor cólico abdominal recurrente, distensión masiva, y vómitos alimentarios profusos que se han vuelto de contenido fecaloide en las últimas 12 horas. Al examen físico, su abdomen está distendido, francamente timpánico, sin defensa peritoneal, pero hiperactivo (ruidos metálicos de lucha aumentados). Llama la atención que la abuela ha perdido peso en el último año y cuenta con historia de cuadros biliares crónicos que se negó a operar por miedo. Usted solicita una Radiografía Simple de Abdomen (KUB). El radiólogo describe con entusiasmo académico el hallazgo de la Tríada de Rigler. ¿Cuáles son los tres hallazgos radiológicos simultáneos que conforman este epónimo clásico y cuál es la fisiopatología que provocó la obstrucción intestinal mecánica de esta paciente anciana?",
    options: [
      { id: "A", label: "A", text: "Niveles hidroaéreos múltiples, collar de perlas y gas en la vena porta / Trombosis isquémica de los vasos de la arteria mesentérica inferior." },
      { id: "B", label: "B", text: "Ciego > 10 cm, apéndice calcificado y líquido libre masivo / Oclusión litiásica y estallido apendicular contenido en ancianos." },
      { id: "C", label: "C", text: "Aire delineando el árbol biliar (Neumobilia), Obstrucción del intestino delgado (Niveles hidroaéreos) y un cálculo radiopaco ectópico en la fosa ilíaca derecha / Un cálculo gigante erosionó la vesícula y formó una fístula hacia el duodeno (Íleo biliar)." },
      { id: "D", label: "D", text: "Engrosamiento de la pared intestinal (thumbprinting), pérdida de haustras y megacolon / Colitis pseudomembranosa por Clostridioides fulminante." }
    ],
    correctOptionId: "C",
    explanation: "El Íleo Biliar es una trampa etimológica: No es un \"íleo paralítico del intestino\", es una Obstrucción Mecánica genuina del intestino delgado por una piedra dura. La fisiopatología es fascinante: A la abuelita nunca le operaron las piedras grandes de la vesícula. Durante años de inflamación (colecistitis crónica), una piedra gigante del tamaño de una ciruela estuvo rozando la pared de la vesícula pegada contra la primera porción del intestino (Duodeno). De tanto rozar, la pared se pudrió, se fusionó y se perforó, creando un túnel ciego (Fístula Colecistoduodenal). La piedra gigante escapó por el hueco y se metió al intestino, dejando la vesícula comunicada con el duodeno. La gran piedra rodó suavemente por metros y metros de intestino delgado, hasta que llegó a la \"puerta más estrecha\" de todo el abdomen, justo al final: La Válvula Ileocecal (en la Fosa Ilíaca Derecha). Ahí se atascó como un corcho.\nEn los Rayos X de Abdomen verás la famosa Tríada de Rigler:\n1. Neumobilia: Como el intestino y la vesícula quedaron conectados por el hueco de la fístula, el aire de los gases gástricos se sube a los conductos biliares del hígado dibujándolos de color negro en la placa.\n2. Obstrucción del Intestino Delgado: Los clásicos niveles hidroaéreos con distensión difusa porque la tripa está tapada.\n3. Cálculo Radiopaco Ectópico: En la zona baja derecha de la placa (íleon), se ve la inmensa piedra de calcio blanca brillando lejos de la vesícula.\nEl tratamiento es llevar a la abuela a Laparotomía urgente; abrir la tripa ileal de un corte, ordeñar y sacar la piedra gorda (Enterotomía), cerrar la tripa, y... ¡dejar la vesícula quieta si la abuela está grave! (El cierre de fístula se hace meses después).\n\n**TRAMPA DEL EXAMEN:** Manejo quirúrgico heroico: La trampa típica es preguntar \"cuál es el manejo de elección\". Tú crees que como el hueco original está en la vesícula, debes quitar la vesícula y cerrar la fístula en la misma cirugía. ¡Falso! Las abuelitas no resisten una cirugía de 4 horas bilio-intestinal combinada. La máxima de cirugía general para el íleo biliar es: \"Entra, abre la tripa, saca la piedra y sal\". Resolviste la obstrucción. De la vesícula te encargarás el próximo año.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., esta abuela es un museo anatómico de los daños crónicos. Como le tenía miedo al cirujano de joven, conservó una roca de calcio en su vesícula por veinte años. La piedra creó su propio túnel secreto horadando la pared de la vesícula directamente hacia el estómago/duodeno para escapar a la libertad. El aire del estómago de la señora aprovechó el túnel vacío para viajar hacia el hígado, dándote esas ramitas de aire negro en la radiografía alta (Neumobilia). La piedra rodó felizmente por todo el laberinto de sus intestinos delgados hasta que, justo en la salida hacia el colon ciego, era demasiado gorda para cruzar la puerta de la válvula de la ingle derecha y trancó todo el sistema digestivo de regreso a la boca de la señora. Abre su barriga baja, saca la roca de 5 centímetros de la tripa y mándala viva a su cuarto. Esa fístula biliar vieja se puede quedar ahí sin matar a nadie por ahora.",
    keyPoints: [
      "Íleo Biliar: Obstrucción intestinal mecánica en ancianas con colelitiasis crónica.",
      "Fisiopatología: Cálculo gigante escapa por una Fístula Colecistoduodenal y se atasca en el Íleon Terminal (Válvula ileocecal).",
      "Signo Radiológico: TRÍADA DE RIGLER (Neumobilia + Niveles hidroaéreos + Cálculo biliar en fosa ilíaca derecha).",
      "Manejo agudo: Solo Enterolitotomía (Extracción de la piedra intestinal)."
    ]
  },
  {
    id: "umng-conv-ed4-89",
    university: "UMNG",
    examArea: "NEUROLOGÍA Y GASTROENTEROLOGÍA",
    topic: "INFECTOLOGÍA TROPICAL",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un hombre de 35 años, que emigró hace cinco años desde una zona rural del norte del Perú a Bogotá, es ingresado de urgencias al presentar una convulsión tónico-clónica generalizada (primera vez en su vida). Al interrogar a su familia, refieren que en el último año ha presentado fuertes dolores de cabeza ocasionales. Como antecedente patológico relevante, la familia recuerda que durante su niñez y juventud en su país natal, él fue tratado y desparasitado en varias ocasiones porque botaba \"gusanos blancos planos y muy largos\" por las heces. Al ingreso, usted solicita una Resonancia Magnética (RMN) Cerebral. El neurorradiólogo le reporta la presencia de múltiples lesiones quísticas dispersas en el parénquima cerebral (córtex y ganglios basales), encontrándose estas lesiones en diversos estadios de evolución: algunas tienen forma de quistes de agua pura con un punto brillante excéntrico en su interior (estadio vesicular con escólex), y otras son simplemente calcificaciones redondeadas como un perdigón. Teniendo en cuenta el agente etiológico de estas convulsiones, ¿cuál es el mecanismo exacto de transmisión biológica por el cual este paciente adquirió las lesiones cerebrales quísticas?",
    options: [
      { id: "A", label: "A", text: "Por comer carne de cerdo cruda o mal cocida infestada directamente con las larvas quísticas (Cisticercos)." },
      { id: "B", label: "B", text: "Por contacto directo y mordeduras profundas de perros callejeros con rabia silvestre asintomática." },
      { id: "C", label: "C", text: "Por ingestión directa de los HUEVOS embrionados de Taenia solium depositados en el agua, alimentos contaminados o vía fecal-oral (autoinfección)." },
      { id: "D", label: "D", text: "Por penetración activa percutánea a través de los pies descalzos de las larvas uncinarias viajando por la vena cava." }
    ],
    correctOptionId: "C",
    explanation: "La Neurocisticercosis es la principal causa de epilepsia adquirida en adultos en los países en vías de desarrollo. La tragedia ocurre por la vía Fecal-Oral humana. Un ser humano que tiene la Lombriz Solitaria (Tenia) en sus intestinos, defeca miles de HUEVOS microscópicos al campo o al agua. Si otra persona (o la misma persona al no lavarse las manos) se bebe o se come esos HUEVOS de Taenia solium, la historia cambia: los ácidos del estómago rompen la cápsula del huevo, y de adentro sale una diminuta oncósfera (embrioncito). Este embrión no se queda en el intestino: atraviesa la pared, se mete a la sangre y nada buscando el tejido más rico en oxígeno y sangre del cuerpo, anidándose masivamente en el CEREBRO (o en los músculos). Al llegar al cerebro, fabrica una bolsa de agua a su alrededor (el quiste) y se esconde adentro en forma de bolita blanca (el escólex), viviendo ahí tranquilamente. Años después, la larva vieja se muere y calcifica, generando una cicatriz que irrita las neuronas circundantes y desata las furiosas convulsiones epilépticas (foco irritable).\n\n**TRAMPA DEL EXAMEN:** La biología del cerdo vs el humano: Todo médico general se confunde.\n- Comer Cerdo Mal Cocido (Larvas) = Teniasis Intestinal (Lombriz solitaria en la barriga).\n- Comer Comida Contaminada con Heces (Huevos de Tenia) = Neurocisticercosis (Quistes en el cerebro).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., deshazte de ese cuento de abuelas que dice que si el joven se comió un chicharrón callejero se le fue la lombriz para el cerebro. Si él se come la carne cruda, solo criará en su barriga una serpiente plana de diez metros. Pero este joven hizo algo peor. Él o algún campesino que cocinó la comida, tenía esa tenia y defecó los huevecillos en la lechuga o en el agua del río sin hervir. El joven se tomó un vaso de esa agua infestada de huevos. El cuerpo humano se confundió, y al romper el huevo en su barriga, el parásito creyó que era un cerdito y migró por su sangre hasta enquistarse en el lóbulo frontal de su cabeza para esperar la muerte. El quiste de agua se pudrió 5 años después y se volvió una piedra de calcio que rayó el motor eléctrico del cerebro, haciéndolo convulsionar en el suelo.",
    keyPoints: [
      "Inmigrante/Rural + Convulsiones + RMN con \"Quistes con Escólex\" (Punto central) y Calcificaciones = NEUROCISTICERCOSIS.",
      "Transmisión OBLIGATORIA: Ingestión de HUEVOS de Taenia solium (Agua/fecal-oral), NO por comer cerdo.",
      "Tratamiento para Quistes Viables/Activos: Albendazol (+ Corticoides para evitar edema al morir el parásito). (Las lesiones ya calcificadas solo se tratan con antiepilépticos)."
    ]
  },
  {
    id: "umng-conv-ed4-90",
    university: "UMNG",
    examArea: "UROLOGÍA",
    topic: "CIRUGÍA GENERAL Y MEDICINA INTERNA - CIERRE LOTE 9",
    difficulty: "hard",
    tags: ["umng", "convocatoria", "ed4"],
    statement: "Un hombre obeso y diabético de 65 años consulta a urgencias de un hospital periférico por referir un dolor sordo y ardor perianal de 3 días de evolución, asociado a picos febriles altísimos que hoy progresaron a escalofríos severos. Al interrogarlo, no reporta sangrado rectal previo, pero sí dificultad para orinar en el último día. En el box de revisión clínica, usted desviste al paciente para el examen físico perineal. A la inspección visual, usted detecta un hallazgo alarmante: una inmensa placa necrótica y eritemato-violácea que abarca toda la piel del perineo, el escroto (que está gigante y edematizado) y se extiende hasta la base del pene y la región inferior de la pared abdominal. Al palpar el escroto engrosado con el dedo enguantado, usted siente y escucha un crujido asqueroso como si estuviera apretando \"nieve fresca\" o envoltorio de burbujas (crepitación por enfisema subcutáneo) debajo de la piel. El paciente gime de dolor con solo rozarlo. Signos vitales: PA 85/50 mmHg, FC 120 lpm. ¿Cuál es el diagnóstico de esta catástrofe quirúrgica urológica y cuál es el único pilar de tratamiento que reducirá su alta mortalidad inminente?",
    options: [
      { id: "A", label: "A", text: "Epididimitis Aguda supurativa complicada / Administrar fluoroquinolonas intravenosas por 14 días y reposo escrotal." },
      { id: "B", label: "B", text: "Cáncer de Próstata avanzado con infiltración pélvica linfática / Colocación urgente de sonda Foley y terapia de privación androgénica inmediata." },
      { id: "C", label: "C", text: "Gangrena de Fournier (Fascitis Necrotizante Perineal) / Traslado directo y EMERGENTE a Quirófano para desbridamiento radical amplio y escisión de todos los tejidos muertos, junto a antibióticos de amplio espectro." },
      { id: "D", label: "D", text: "Absceso isquiorrectal simple oculto / Drenaje por aspiración con aguja fina en el cuarto de urgencias y alta con Clindamicina oral." }
    ],
    correctOptionId: "C",
    explanation: "La Gangrena de Fournier es una Fascitis Necrotizante Polimicrobiana ultrarrápida y letal de la zona urogenital y perianal (Típicamente por mezcla de E. coli, Klebsiella, estreptococos y Bacteroides anaerobios). Ocurre casi exclusivamente en Hombres diabéticos, obesos, alcohólicos o inmunosuprimidos, que tuvieron una microherida en la región anal (una fisurita, un absceso en el glúteo o una rasurada). Las bacterias penetran y viajan quemando como pólvora la fascia profunda (Fascia de Colles y Scarpa). Las bacterias fermentan la carne y producen Gas (Gas Sulfhídrico Metano). Por eso, el escroto se hincha como un melón negro, y si le aprietas la piel oscura, sientes las burbujas de gas explotando bajo tus dedos (Crepitación o Enfisema Subcutáneo). ¡Esto es un código rojo universal! Los antibióticos por la vena jamás penetrarán ese tejido muerto y necrótico que no tiene venas intactas. El ÚNICO pase a la salvación es llamar al cirujano general/urólogo y correr a la mesa de operaciones (no importa la hora). El cirujano hará un Desbridamiento Quirúrgico Radical Agresivo y Amplio: cortará con bisturí toda la piel, grasa y músculo negro putrefacto del escroto y el abdomen hasta llegar a carne roja viva y sangrante, dejándolo sin piel en los genitales temporalmente.\n\n**TRAMPA DEL EXAMEN:** Miedo a cortar a lo bestia: La psique del médico dice \"Pobrecito, no lo desfiguren, denle Vancomicina fuerte primero\". En la Fascitis Necrotizante/Fournier, se opera el 100% de las veces. La mortalidad sin cirugía se acerca al 100%; la supervivencia exige cortar trozos inmensos de piel infectada de entrada. El antibiótico es solo el acompañante del bisturí.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., cierra los ojos e imagínate un pedazo de carne de res dejado al sol y atacado por bacterias anaerobias carnívoras que la deshacen y producen gas de alcantarilla. Eso es el escroto y la entrepierna de este paciente diabético hoy. Una herida microscópica al limpiarse en el baño le abrió la puerta a una flora asquerosa que viajó sin obstáculos por la grasa de su pelvis apagando los vasos sanguíneos. Las burbujas de gas que sientes al aplastarle el escroto con el dedo enguantado te confirman la gangrena muerta debajo. Ni el antibiótico más fino del mundo fabricado en Suiza cruzará la frontera de carne muerta para curarlo. Necesitas acero. Abre las puertas del quirófano a las 3:00 AM, exige el bisturí eléctrico, y quítale todo el tejido podrido, desde la ingle hasta la barriga si es necesario, despellejando la zona sin compasión quirúrgica hasta que encuentres músculo rojo que sangre. Solo así el paciente no se consumirá en choque séptico esta madrugada.",
    keyPoints: [
      "Hombre Diabético/Inmunosuprimido + Edema y Necrosis en Escroto/Periné + CREPITACIÓN (Burbujas de Gas al tacto) = Gangrena de FOURNIER.",
      "Terapia Inicial Salva-Vidas Obligatoria: Desbridamiento Quirúrgico Abierto, Amplio y Radical de Emergencia en Quirófano + Antibióticos Amplio Espectro (Carbapenémicos + Clindamicina/Vancomicina)."
    ]
  }
];
