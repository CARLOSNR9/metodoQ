import { buildUdeaQuestion as q } from "./build-question";

/** Examen real de admisión UdeA · preguntas 41–50 (clave Método Q). */
export const UDEA_EXAMEN_REAL_41_50 = [
  q({
    id: "udea-real-41",
    examArea: "NEUROLOGÍA",
    topic: "ESTADO EPILÉPTICO EN EPILEPSIA MIOCLÓNICA",
    difficulty: "hard",
    tags: ["examen-real", "epilepsia", "urgencias"],
    statement:
      "Hombre de 24 años. Llega a urgencias inconsciente, con crisis motora tónico clónica en las cuatro extremidades que inició 10 minutos antes y aún continúa. El video que traen los amigos en un teléfono celular muestra el inicio y corresponde a crisis mioclónicas. Los amigos informan que estaba ingiriendo licor, del cual aún no le notaban efecto y aseguran que no usó ninguna otra sustancia. Antecedentes: negativos. ¿Cuál de los siguientes es el medicamento indicado para tratar su crisis?",
    options: [
      ["Acido valproico venoso"],
      [
        "Fenitoína venosa",
        "La fenitoína puede empeorar las mioclonías y las epilepsias generalizadas idiopáticas como la mioclónica juvenil.",
      ],
      [
        "Fosfenitoína nasal",
        "La fosfenitoína no existe en presentación nasal y comparte el problema de la fenitoína en epilepsia mioclónica.",
      ],
    ],
    correct: "A",
    explanation:
      "Estado epiléptico (crisis ≥5 minutos) en adulto joven cuyas crisis inician con mioclonías y se generalizan, con desencadenante típico (alcohol, trasnocho) = probable epilepsia mioclónica juvenil.\n\nPrimera línea en cualquier estado epiléptico: benzodiacepina (midazolam IM/IN, lorazepam o diazepam IV) — no está entre las opciones. Segunda línea (ESETT): valproato, levetiracetam o fosfenitoína tienen eficacia similar, pero en epilepsias generalizadas con mioclonías se prefiere ÁCIDO VALPROICO IV (20–40 mg/kg), porque los bloqueadores de canales de sodio (fenitoína, carbamazepina) pueden agravarlas.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, mioclonías + alcohol + joven = mioclónica juvenil. Su droga es el valproato; la fenitoína la empeora.\n\n*En el material original solo se leen tres opciones.*",
    keyPoints: [
      "Estado epiléptico: benzodiacepina primero, luego segunda línea.",
      "Epilepsia mioclónica juvenil → valproato (o levetiracetam).",
      "Fenitoína/carbamazepina agravan mioclonías y ausencias.",
    ],
  }),
  q({
    id: "udea-real-42",
    examArea: "GINECOBSTETRICIA",
    topic: "CRISIS HIPERTENSIVA EN PREECLAMPSIA",
    difficulty: "hard",
    tags: ["examen-real", "trastornos-hipertensivos"],
    statement:
      "Mujer de 40 años, 5 hijos. Desde la semana 14 de gestación tuvo cifras de presión arterial mayores a 140/90 mmHg, tratada con alfametildopa. En la semana 34 consulta por cefalea intensa de novo, y dolor en el epigastrio, sin otros síntomas. Examen físico al ingreso: presión arterial 162/110 mmHg frecuencia cardiaca 86 lat/min, cardiopulmonar normal, fetocardia: 146/min, edema de miembros inferiores grado II. Paraclínicos: hemoglobina 17 gr/dl, hematocrito 52 %, plaquetas 145.000 mm³, AST 72 U/L, ALT 70 UI/L, LDH 400 UI/L, proteínas en orina de 24 horas: 290 mg. Se le administraron 3 bolos de labetalol de 20, 40 y 80 mg y a los 15 minutos presenta presión arterial 180/100 mmHg. En el país hay desabastecimiento de nifedipino y no se tiene hidralazina disponible. ¿Cuál de los siguientes es el antihipertensivo más adecuado para continuar con el tratamiento?",
    options: [
      [
        "Alfametildopa",
        "Es un antihipertensivo oral de mantenimiento, de inicio lento; no sirve para una crisis hipertensiva.",
      ],
      [
        "Clonidina",
        "Tiene inicio de acción relativamente lento y no es la opción de rescate recomendada en crisis refractaria del embarazo.",
      ],
      [
        "Metoprolol",
        "Agregar otro betabloqueador tras dosis plenas de labetalol no aporta y aumenta el riesgo de bradicardia materna y fetal.",
      ],
      ["Nitroprusiato"],
    ],
    correct: "D",
    explanation:
      "Hipertensión crónica con preeclampsia sobreagregada con criterios de severidad (cefalea, epigastralgia, transaminasas elevadas) y crisis hipertensiva (≥160/110) refractaria a la escalera completa de labetalol IV (20–40–80 mg). Sin nifedipino ni hidralazina disponibles.\n\nEn la hipertensión grave refractaria del embarazo, la alternativa recomendada es el nitroprusiato de sodio en infusión (0,25–5 mcg/kg/min) en UCI con monitoría estricta, por el menor tiempo posible (riesgo teórico de toxicidad fetal por cianuro con uso >4 h). Además: sulfato de magnesio para prevención de eclampsia y planear la terminación del embarazo tras estabilizar.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, crisis que no cede con labetalol y no hay nifedipino ni hidralazina: nitroprusiato en UCI, corto. Magnesio sí o sí.\n\n*Clave elaborada por el equipo Método Q (el examen no trae respuestas).*",
    keyPoints: [
      "Crisis hipertensiva del embarazo: labetalol, nifedipino o hidralazina.",
      "Refractaria/sin alternativas: nitroprusiato en UCI por tiempo corto.",
      "Preeclampsia con severidad: sulfato de magnesio y terminar el embarazo.",
    ],
  }),
  q({
    id: "udea-real-43",
    examArea: "GINECOBSTETRICIA",
    topic: "ENDOMETRITIS POSPARTO",
    difficulty: "easy",
    tags: ["examen-real", "puerperio"],
    statement:
      "Mujer de 23 años. Ocho días antes tuvo parto instrumentado por expulsivo prolongado. Consulta por urgencias por dolor pélvico y sangrado vaginal de mal olor. Examen físico: presión arterial 100/60 mmHg, frecuencia cardiaca 120 lat/min, temperatura de 39°C, útero doloroso y se palpa a nivel umbilical, con sangrado vaginal de mal olor y tacto vaginal cérvix abierto. ¿Cuál de las siguientes es la combinación más adecuada para el tratamiento?",
    options: [
      ["Clindamicina + gentamicina"],
      [
        "Meropenem+ metronidazol",
        "Espectro excesivo y redundante (el meropenem ya cubre anaerobios); se reserva para casos resistentes.",
      ],
      [
        "Penicilina cristalina + metronidazol",
        "No cubre adecuadamente los bacilos gramnegativos aerobios, parte central de la flora polimicrobiana.",
      ],
      [
        "Vancomicina + clindamicina",
        "No cubre gramnegativos; la vancomicina no es necesaria de rutina.",
      ],
    ],
    correct: "A",
    explanation:
      "Endometritis posparto: fiebre, útero doloroso y subinvolucionado, loquios fétidos, factores de riesgo (parto instrumentado, trabajo de parto prolongado). Es polimicrobiana (anaerobios, gramnegativos, estreptococos).\n\nEsquema de elección: clindamicina 900 mg IV cada 8 h + gentamicina 5 mg/kg IV cada 24 h, hasta 24–48 h afebril; si no mejora en 48–72 h, agregar ampicilina (enterococo) y buscar restos, abscesos o tromboflebitis pélvica séptica. La taquicardia y la presión limítrofe obligan a vigilar sepsis.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, endometritis posparto = clinda + genta. Si en 72 h no mejora, añade ampicilina y busca la causa.",
    keyPoints: [
      "Endometritis posparto: polimicrobiana.",
      "Clindamicina + gentamicina IV.",
      "Sin mejoría en 48–72 h: ampicilina, buscar absceso/restos/tromboflebitis.",
    ],
  }),
  q({
    id: "udea-real-44",
    examArea: "GINECOBSTETRICIA",
    topic: "RUPTURA PREMATURA DE MEMBRANAS PRETÉRMINO",
    difficulty: "medium",
    tags: ["examen-real", "rpm"],
    statement:
      "Mujer de 27 años con gestación de 29 semanas y 3 días. Acude al hospital de primer nivel porque presentó salida de líquido por vagina, con olor a \"límpido\", que aumentó al ponerse de pie. Examen físico: presión arterial 110/60 mmHg, frecuencia cardiaca 72 lat/min, frecuencia respiratoria 15/min, abdomen: útero grávido, fetocardia 160/min, sin contracciones y a la especuloscopia se observa franca salida de líquido claro por el orificio cervical externo. ¿Cuál de las siguientes conductas es correcta?",
    options: [
      [
        "Administrar bolo de 4 gr de sulfato de magnesio para uteroinhibición y neuroprotección",
        "No hay trabajo de parto: no se uteroinhibe. El magnesio para neuroprotección se da (<32 semanas) cuando el parto es inminente.",
      ],
      [
        "Aplicar protocolo de tratamiento expectante para intentar llegar a la semana 37",
        "Prolongar más allá de 34 semanas con membranas rotas aumenta el riesgo de corioamnionitis sin beneficio neonatal claro.",
      ],
      ["Iniciar protocolo de tratamiento expectante que intente llegar hasta la semana 34"],
      [
        "Realizar un tacto vaginal para determinar la dilatación y el borramiento para definir el tratamiento",
        "El tacto vaginal en RPM pretérmino sin trabajo de parto está contraindicado: aumenta el riesgo de infección.",
      ],
    ],
    correct: "C",
    explanation:
      "Ruptura prematura de membranas pretérmino (29+3 semanas) confirmada por especuloscopia, sin trabajo de parto, sin infección y con bienestar fetal.\n\nManejo expectante hasta las 34 semanas (en un nivel con UCI neonatal): corticoides para maduración pulmonar (betametasona 12 mg IM × 2), antibióticos de latencia (ampicilina + azitromicina/eritromicina), vigilancia de corioamnionitis y bienestar fetal; sulfato de magnesio para neuroprotección si el parto es inminente antes de 32 semanas. Evitar tactos vaginales.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, RPM pretérmino sin infección: espera hasta 34 con corticoide y antibiótico, y no metas los dedos.",
    keyPoints: [
      "RPMP <34 sem sin infección → expectante hasta 34 semanas.",
      "Corticoide + antibiótico de latencia; magnesio <32 sem si parto inminente.",
      "Evitar tacto vaginal.",
    ],
  }),
  q({
    id: "udea-real-45",
    examArea: "GINECOBSTETRICIA",
    topic: "FETO PEQUEÑO PARA LA EDAD GESTACIONAL",
    difficulty: "hard",
    tags: ["examen-real", "rciu"],
    statement:
      "Mujer de 25 años con embarazo de 33 semanas. Control prenatal normal. Antecedentes personales negativos. Trae una ecografía de control en la que reportan crecimiento en percentil 4, Doppler fetal y de arterias uterinas normales. ¿Cuál de las siguientes es la conducta más adecuada?",
    options: [
      ["Continuar vigilancia con Doppler y si evoluciona normal, programar terminación del embarazo en la semana 39"],
      [
        "Continuar vigilancia con Doppler y si evoluciona normal, programar terminación del embarazo en la semana 37",
        "La terminación a las 37 semanas corresponde a restricción con percentil <3 o Doppler alterado.",
      ],
      [
        "Programar para terminación del embarazo en la semana 34 mediante maduración e inducción del trabajo de parto",
        "Terminar a las 34 semanas con Doppler normal agrega morbilidad por prematuridad sin beneficio.",
      ],
      [
        "Realizar maduración pulmonar y terminar el embarazo en la semana 34",
        "Igual: no hay compromiso fetal que justifique un parto pretérmino.",
      ],
    ],
    correct: "A",
    explanation:
      "Peso fetal en percentil 4 (entre p3 y p10) a las 33 semanas con Doppler umbilical, cerebral y uterino normales: según el consenso Delphi/ISUOG corresponde a feto pequeño para la edad gestacional (PEG), no a restricción del crecimiento (que exige p<3, o p<10 con Doppler alterado).\n\nManejo: vigilancia seriada del crecimiento (cada 2 semanas) y Doppler. Si se mantiene normal, terminación a las 38–39 semanas (ACOG/SMFM: 38+0–39+6). Si el percentil cae <3 → 37 semanas; Doppler alterado → antes, según severidad.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, p3–p10 con Doppler normal = pequeño sano. Se vigila y se termina hacia las 39 semanas.\n\n*Clave elaborada por el equipo Método Q (el examen no trae respuestas).*",
    keyPoints: [
      "PEG: p3–p10 con Doppler normal.",
      "RCIU tardía: p<3, o p<10 con Doppler alterado.",
      "PEG con Doppler normal → terminar a las 38–39 semanas.",
    ],
  }),
  q({
    id: "udea-real-46",
    examArea: "OFTALMOLOGÍA",
    topic: "ABRASIÓN CORNEAL EN USUARIO DE LENTES DE CONTACTO",
    difficulty: "easy",
    tags: ["examen-real"],
    statement:
      "Hombre de 30 años quien el día anterior, luego de quitarse el lente de contacto, presentó sensación de cuerpo extraño y dolor. Ha ido mejorando, pero aún siente la molestia. No tiene secreción ni otros síntomas. Examen físico: ojo rojo, sin disminución de la visión, defecto epitelial en la córnea que tiñe con fluoresceína de aproximadamente 1 x1 mm. ¿Cuál de las siguientes es la conducta más adecuada?",
    options: [
      ["Antibiótico en gotas"],
      [
        "Antibiótico en gotas + lente de contacto blando terapéutico",
        "En usuarios de lentes de contacto se evita poner otro lente: aumenta el riesgo de queratitis por Pseudomonas.",
      ],
      [
        "Antibiótico en gotas + parche compresivo",
        "El parche no acelera la cicatrización y en usuarios de lentes favorece la infección por Pseudomonas.",
      ],
      [
        "Antibiótico en gotas + parche sin compresión",
        "El oclusor tampoco se recomienda en abrasiones de usuarios de lentes de contacto.",
      ],
    ],
    correct: "A",
    explanation:
      "Abrasión corneal pequeña (1 × 1 mm), sin infiltrado ni secreción, en usuario de lentes de contacto.\n\nManejo: antibiótico tópico con cobertura antipseudomonas (fluoroquinolona: ciprofloxacina, moxifloxacina) varias veces al día, analgesia, suspender el lente hasta curar, y control en 24–48 h. NO parche (no mejora la cicatrización y en usuarios de lentes aumenta el riesgo de úlcera infecciosa) y NO anestésicos tópicos para casa. Remitir si hay infiltrado, disminución de visión o no mejora.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, usuario de lentes con abrasión: gota antipseudomonas y nada de parches ni lentes.",
    keyPoints: [
      "Abrasión corneal: antibiótico tópico; en usuarios de LC, antipseudomonas.",
      "No parche, no lente terapéutico en usuarios de LC.",
      "Nunca formular anestésico tópico para uso en casa.",
    ],
  }),
  q({
    id: "udea-real-47",
    examArea: "OFTALMOLOGÍA",
    topic: "LEUCOCORIA",
    difficulty: "easy",
    tags: ["examen-real", "pediatria", "retinoblastoma"],
    statement:
      "Niño de 2 años. Desde 2 meses antes, en ocasiones, le notan un \"reflejo como de un gato\" en el ojo derecho, lo notan principalmente en las fotos. Sin otros síntomas. Antecedentes negativos. Examen físico: agudeza visual normal para la edad, no tiene ojo rojo ni secreciones, no se ve ningún reflejo anormal, oftalmoscopia directa aparenta ser normal. ¿Cuál de las siguientes es la conducta más adecuada?",
    options: [
      ["Valoración por oftalmología prioritaria"],
      [
        "Valoración por optometría prioritaria",
        "La leucocoria requiere fondo de ojo bajo dilatación por oftalmología (idealmente oncología ocular), no optometría.",
      ],
      [
        "Control en 3 meses para evaluar evolución y definir necesidad de remisión",
        "Esperar retrasa el diagnóstico de retinoblastoma, que compromete la visión y la vida.",
      ],
      [
        "Parchar el ojo afectado 2 horas al día y control en 3 meses",
        "La oclusión es para ambliopía; aquí no hay diagnóstico y lo que se busca es un tumor.",
      ],
    ],
    correct: "A",
    explanation:
      "Leucocoria ('ojo de gato' en las fotos) en un niño pequeño = retinoblastoma hasta demostrar lo contrario, aunque el examen en el consultorio parezca normal (la oftalmoscopia directa sin dilatar no ve la retina periférica).\n\nConducta: remisión PRIORITARIA a oftalmología para fondo de ojo bajo dilatación (y bajo anestesia si es necesario), ecografía ocular y RM. Otras causas: catarata congénita, enfermedad de Coats, toxocariasis, persistencia de vítreo primario, retinopatía del prematuro. En Colombia el retinoblastoma es un evento de interés en salud pública (cáncer infantil).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, si la mamá te muestra una foto con un ojo blanco, créele a la foto. Remisión prioritaria a oftalmología.",
    keyPoints: [
      "Leucocoria = retinoblastoma hasta demostrar lo contrario.",
      "Oftalmoscopia directa normal NO lo descarta.",
      "Remisión prioritaria a oftalmología (fondo de ojo dilatado).",
    ],
  }),
  q({
    id: "udea-real-48",
    examArea: "OFTALMOLOGÍA",
    topic: "AMBLIOPÍA Y OCLUSIÓN",
    difficulty: "medium",
    tags: ["examen-real", "pediatria", "estrabismo"],
    statement:
      "Niña de 4 años, consultan porque le notan desviación en uno de sus ojos desde 8 meses antes. Antecedentes negativos. Examen físico: visión 20/50 en ojo derecho y 20/20 en ojo izquierdo, endotropia en ojo derecho; resto de examen oftalmológico normal. ¿Cuál de las siguientes es la indicación más adecuada con respecto a la oclusión ocular mientras es evaluada por oftalmología?",
    options: [
      [
        "Ocluir el ojo derecho 12 horas al día",
        "Se ocluye el ojo sano, no el ambliope: tapar el ojo derecho empeoraría la ambliopía.",
      ],
      [
        "Ocluir el ojo derecho 2 horas al día",
        "Se ocluye el ojo sano, no el ambliope.",
      ],
      [
        "Ocluir el ojo izquierdo 12 horas al día",
        "En ambliopía moderada, 2 horas diarias son tan eficaces como 6 o más (PEDIG), con menos riesgo de ambliopía por oclusión del ojo sano.",
      ],
      ["Ocluir el ojo izquierdo 2 horas al día"],
    ],
    correct: "D",
    explanation:
      "Estrabismo (endotropia derecha) con ambliopía del ojo derecho (20/50 vs 20/20). El tratamiento de la ambliopía es penalizar el ojo SANO (izquierdo) para obligar a usar el ambliope, junto con la corrección óptica.\n\nEstudios PEDIG: en ambliopía moderada (20/40–20/80), 2 horas diarias de oclusión son tan eficaces como 6 horas; en severa, 6 horas equivalen a tiempo completo. Menos horas = mejor adherencia y menor riesgo de ambliopía inversa. La ventana de tratamiento es la infancia temprana (mejor <7 años). Remitir a oftalmología pediátrica.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, se tapa el ojo BUENO. Ambliopía moderada: 2 horas al día bastan.",
    keyPoints: [
      "Ambliopía: ocluir el ojo sano.",
      "Moderada: 2 h/día; severa: 6 h/día (PEDIG).",
      "Mejor respuesta antes de los 7 años.",
    ],
  }),
  q({
    id: "udea-real-49",
    examArea: "ORTOPEDIA",
    topic: "PIE CAVO NEUROLÓGICO (CHARCOT-MARIE-TOOTH)",
    difficulty: "hard",
    tags: ["examen-real", "pediatria", "neuromuscular"],
    statement:
      "Niño de 10 años. Consulta por 6 meses de evolución de deformidad progresiva en ambos pies. Antecedentes personales: negativos. Examen físico: marcha en progresión negativa, signo de Trendelenburg negativo, signo de Adams negativo, sin discrepancia en la longitud de las extremidades. Pie izquierdo: talón neutro, eje talón dedos neutro, aumento de arco plantar. Pie derecho: talón varo, eje talón dedos pasa por 4 espacio interdigital, aumento del arco plantar, con zona de presión en cabeza del primer metatarsiano. Examen neurológico: dorsiflexores del tobillo 4/5, invertores del pie 5/5, evertores del pie 4/5 bilateral. Reflejos osteotendinosos patelar y aquiliano +/++++ bilateral. ¿Cuál de los siguientes es el examen que se debe solicitar?",
    options: [
      ["Electromiografía y velocidad de conducción nerviosa de 4 extremidades"],
      [
        "Rayos X AP de lateral columna lumbar y AP y lateral ambos pies con apoyo",
        "Las radiografías describen la deformidad, pero no explican la debilidad ni la hiporreflexia, que orientan a una neuropatía.",
      ],
      [
        "Resonancia magnética nuclear de columna lumbar sin contraste",
        "Se pensaría en disrafismo o médula anclada con signos de motoneurona superior o asimetría marcada; aquí la debilidad es distal, simétrica e hiporrefléxica.",
      ],
    ],
    correct: "A",
    explanation:
      "Pie cavo-varo progresivo bilateral + debilidad distal de dorsiflexores y evertores (peroneos) + hiporreflexia (+/++++) = neuropatía periférica hereditaria: Charcot-Marie-Tooth (la más común, CMT1A por duplicación de PMP22).\n\nTodo pie cavo progresivo es neurológico hasta demostrar lo contrario. El estudio indicado es la electromiografía con velocidades de conducción nerviosa en las 4 extremidades (velocidad muy baja = desmielinizante CMT1; normal con amplitudes bajas = axonal CMT2), seguida de estudio genético. El prueba de Coleman define si el retropié varo es flexible.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, pie cavo que progresa + peroneos débiles + reflejos apagados = Charcot-Marie-Tooth. Pide neuroconducciones.\n\n*En el material original solo se leen tres opciones.*",
    keyPoints: [
      "Pie cavo progresivo = causa neurológica hasta demostrar lo contrario.",
      "CMT: debilidad peronea distal, hiporreflexia, pie cavo-varo.",
      "Estudio: EMG/velocidades de conducción y genética.",
    ],
  }),
  q({
    id: "udea-real-50",
    examArea: "MEDICINA DEL DEPORTE",
    topic: "ESGUINCE LATERAL DE TOBILLO",
    difficulty: "medium",
    tags: ["examen-real", "ortopedia", "lesiones-deportivas"],
    statement:
      "Hombre de 32 años quien sufrió trauma en inversión del tobillo derecho. Al llegar al servicio de urgencias se observa edema perimaleolar moderado, equimosis en cara medial y lateral del tobillo que va hasta la cara lateral y plantar del pie, marcha con cojera evitando el apoyo. Manifiesta dolor con la palpación. No hay dolor en la base del quinto metatarsiano. Radiografías anteroposterior, lateral y oblicua (mortaja): descarta fracturas. Adicional a suministrar analgesia ¿Cuál de las siguientes es la conducta adecuada?",
    options: [
      [
        "Recomendar apoyo precoz e iniciar fisioterapia de inmediato",
        "El tratamiento funcional aplica a los esguinces leves-moderados; con incapacidad para apoyar y equimosis extensa (grado III) se prefiere una inmovilización corta inicial.",
      ],
      ["Inmovilizar con férula, utilizar muletas y fisioterapia al terminar inmovilización"],
      [
        "Aplicar una férula y remitir para cirugía",
        "La cirugía no es el manejo inicial del esguince lateral, ni siquiera del grado III; se reserva para inestabilidad crónica.",
      ],
    ],
    correct: "B",
    explanation:
      "Esguince lateral de tobillo severo (probable grado III): incapacidad para apoyar, edema importante y equimosis extensa que llega al pie, con radiografías sin fractura (reglas de Ottawa aplicadas).\n\nEn esguinces severos, un periodo corto de inmovilización (férula/bota o yeso bajo la rodilla por ~10 días) con muletas mejora la recuperación frente a un vendaje simple (Lamb et al., Lancet 2009), seguido de rehabilitación funcional: rango de movimiento, fortalecimiento de peroneos y entrenamiento propioceptivo para prevenir la inestabilidad crónica. Los grados I–II se manejan con apoyo precoz y tratamiento funcional.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, esta es de medicina del deporte: el esguince que no deja apoyar se inmoviliza corto y después se rehabilita; la propiocepción es la que evita el siguiente esguince.\n\n*Clave elaborada por el equipo Método Q (el examen no trae respuestas). En el material original solo se leen tres opciones.*",
    keyPoints: [
      "Reglas de Ottawa para decidir radiografía.",
      "Esguince severo: inmovilización corta (~10 días) y luego rehabilitación.",
      "Propiocepción y peroneos: prevención de recaída e inestabilidad crónica.",
    ],
  }),
];
