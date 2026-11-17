import { buildUnivalleQuestion as q } from "./build-question";

/** Ruta Dermatología Univalle · #11–#20 (oncología cutánea, ampollas y farmacodermias). */
export const UNIVALLE_DERMATOLOGIA_11_20 = [
  q({
    id: "univalle-derm-11",
    examArea: "DERMATOLOGÍA",
    topic: "MELANOMA LENTIGINOSO ACRAL",
    difficulty: "medium",
    tags: ["dermatologia", "oncologia"],
    statement:
      "Una mujer de 61 años, afrodescendiente, consulta por una 'mancha' en la planta del pie derecho que notó hace un año y que ha crecido. Mide 14 mm, es asimétrica, de bordes irregulares, con tonos marrón, negro y azul grisáceo. En la dermatoscopia se observa un patrón de crestas paralelas. No hay adenopatías palpables. ¿Cuál es la conducta inicial más adecuada?",
    options: [
      [
        "Crioterapia de la lesión y control dermatoscópico en 6 meses.",
        "Nunca se destruye una lesión pigmentada sospechosa sin diagnóstico histológico: se pierde la posibilidad de medir el espesor de Breslow.",
      ],
      [
        "Biopsia por raspado superficial (shave) del área más oscura.",
        "El shave superficial puede cortar la lesión en profundidad y subestimar el Breslow, que define el pronóstico y los márgenes.",
      ],
      [
        "Ampliación directa con margen de 2 cm y ganglio centinela.",
        "Los márgenes definitivos y la indicación de ganglio centinela dependen del Breslow; primero hay que confirmar el diagnóstico y medirlo.",
      ],
      [
        "Biopsia escisional completa con margen de 1 a 3 mm.",
      ],
    ],
    correct: "D",
    explanation:
      "Enfermedad sospechada: Melanoma lentiginoso acral.\n\nDato decisivo: lesión pigmentada plantar con criterios ABCDE (asimetría, bordes irregulares, varios colores, diámetro mayor de 6 mm, evolución) y patrón de crestas paralelas en la dermatoscopia.\n\nEn personas de fototipos altos (afrodescendientes, mestizos, asiáticos) el melanoma acral es el subtipo proporcionalmente más frecuente, y no se relaciona con el sol. La conducta inicial ante una lesión sospechosa es la biopsia escisional completa con margen de 1 a 3 mm, que permite medir el Breslow. Con ese dato se planea la ampliación de márgenes y la biopsia de ganglio centinela.\n\n**Trampa del examen:** decidir márgenes de 1–2 cm antes de tener el Breslow, o hacer un shave.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, en Colombia y en el Pacífico, revisa las plantas y las uñas. El melanoma de nuestros pacientes se esconde donde no da el sol.",
    keyPoints: [
      "Melanoma acral: subtipo más frecuente en fototipos altos; no depende del sol.",
      "Lesión sospechosa → biopsia escisional con margen de 1–3 mm.",
      "Breslow define márgenes de ampliación y ganglio centinela.",
    ],
  }),
  q({
    id: "univalle-derm-12",
    examArea: "DERMATOLOGÍA",
    topic: "MELANOMA: MÁRGENES Y GANGLIO CENTINELA",
    difficulty: "hard",
    tags: ["dermatologia", "oncologia"],
    statement:
      "A un hombre de 50 años se le realizó biopsia escisional de una lesión pigmentada en la espalda. El reporte es: melanoma de extensión superficial, Breslow de 1,6 mm, sin ulceración, márgenes laterales comprometidos mínimamente. No hay adenopatías palpables ni síntomas sistémicos. ¿Cuál es la conducta recomendada?",
    options: [
      [
        "Ampliación a 1–2 cm de margen y ganglio centinela.",
      ],
      [
        "Ampliación a 5 mm de margen y control clínico semestral.",
        "Un margen de 0,5–1 cm corresponde al melanoma in situ; con 1,6 mm de Breslow se necesita más margen y estadificación ganglionar.",
      ],
      [
        "Vaciamiento ganglionar axilar e inguinal profiláctico.",
        "No se hacen vaciamientos profilácticos sin evidencia de compromiso ganglionar; para eso existe el ganglio centinela.",
      ],
      [
        "Radioterapia del lecho quirúrgico, sin más cirugía.",
        "El tratamiento del melanoma primario es quirúrgico; la radioterapia no reemplaza la ampliación de márgenes.",
      ],
    ],
    correct: "A",
    explanation:
      "Principio evaluado: el espesor de Breslow guía el margen de ampliación y la estadificación ganglionar del melanoma.\n\nMárgenes recomendados: in situ 0,5–1 cm; Breslow ≤1 mm: 1 cm; 1,01–2 mm: 1–2 cm; >2 mm: 2 cm. La biopsia de ganglio centinela se considera desde 0,8 mm de Breslow o si hay ulceración (T1b) y se recomienda en tumores de más de 1 mm (T2 en adelante). Este paciente (1,6 mm, pT2a) necesita ampliación de 1 a 2 cm y ganglio centinela.\n\n**Trampa del examen:** creer que una biopsia escisional ya es el tratamiento definitivo. La biopsia diagnostica; la ampliación trata.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, memoriza la escalera de márgenes: in situ medio centímetro, hasta 1 mm un centímetro, 1 a 2 mm uno a dos, más de 2 mm dos centímetros. Y centinela: se considera desde 0,8 mm o con úlcera, y se recomienda por encima de 1 mm.",
    keyPoints: [
      "Breslow 1–2 mm → margen de 1–2 cm.",
      "Ganglio centinela: considerar desde 0,8 mm o ulceración; recomendado >1 mm.",
      "Sin vaciamientos profilácticos.",
    ],
  }),
  q({
    id: "univalle-derm-13",
    examArea: "DERMATOLOGÍA",
    topic: "CARCINOMA BASOCELULAR",
    difficulty: "easy",
    tags: ["dermatologia", "oncologia"],
    statement:
      "Un agricultor de 68 años, de piel clara, consulta por una lesión en el ala nasal izquierda de 2 años de evolución. Es una pápula de 8 mm, de aspecto perlado, con telangiectasias arborizantes en la superficie y una pequeña úlcera central que sangra con facilidad. No tiene adenopatías. ¿Cuál de las siguientes afirmaciones es correcta?",
    options: [
      [
        "Es un carcinoma escamocelular con alto riesgo de metástasis ganglionares tempranas; requiere vaciamiento cervical.",
        "El borde perlado con telangiectasias arborizantes es típico del basocelular; el escamocelular suele ser queratósico y tiene más riesgo de metástasis.",
      ],
      [
        "Es el cáncer de piel más frecuente y casi nunca da metástasis; en la nariz se prefiere la cirugía de Mohs.",
      ],
      [
        "Es un melanoma amelanótico nodular y requiere ampliación con margen de 2 cm y ganglio centinela.",
        "El melanoma amelanótico es raro y no tiene la morfología perlada con telangiectasias de largo tiempo de evolución.",
      ],
      [
        "Es una queratosis seborreica irritada y no requiere manejo distinto a la observación periódica.",
        "La queratosis seborreica es una lesión 'pegada', verrugosa, sin borde perlado ni úlcera.",
      ],
    ],
    correct: "B",
    explanation:
      "Enfermedad sospechada: Carcinoma basocelular nodular-ulcerado (ulcus rodens).\n\nDato decisivo: pápula perlada con telangiectasias arborizantes y úlcera central en una zona fotoexpuesta de la cara.\n\nEs el cáncer más frecuente en humanos. Las metástasis son excepcionales, pero puede invadir y destruir cartílago y hueso. Las lesiones en la zona 'H' de la cara (nariz, párpados, labios, orejas) son de alto riesgo de recidiva y en ellas la cirugía de Mohs ofrece la mayor tasa de curación preservando tejido. En lesiones de bajo riesgo: escisión con margen de 4 mm.\n\n**Trampa del examen:** asumir que todo cáncer de piel da metástasis tempranas.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, perla + vasitos como ramas de árbol = basocelular. No mata por metástasis, mata por descuido: se come la nariz.",
    keyPoints: [
      "Basocelular: pápula perlada con telangiectasias arborizantes.",
      "Cáncer más frecuente; metástasis excepcionales, destrucción local.",
      "Zona H de la cara → cirugía de Mohs.",
    ],
  }),
  q({
    id: "univalle-derm-14",
    examArea: "DERMATOLOGÍA",
    topic: "QUERATOSIS ACTÍNICA",
    difficulty: "easy",
    tags: ["dermatologia", "oncologia"],
    statement:
      "Un cortero de caña de 63 años, de piel clara, consulta por varias lesiones ásperas al tacto en el dorso de las manos y la frente, de 2 a 6 mm, eritematosas, con escama adherente, que se palpan mejor de lo que se ven. No hay induración ni ulceración. ¿Cuál es el significado clínico de estas lesiones?",
    options: [
      [
        "Son lesiones benignas del fotoenvejecimiento, sin potencial maligno; basta con hidratación.",
        "Las queratosis actínicas son lesiones premalignas: una fracción progresa a carcinoma escamocelular.",
      ],
      [
        "Son precursoras del carcinoma basocelular nodular y deben resecarse con márgenes de 4 mm.",
        "El precursor asociado a las queratosis actínicas es el carcinoma escamocelular, no el basocelular.",
      ],
      [
        "Son premalignas (precursoras del carcinoma escamocelular); se tratan con crioterapia o 5-FU tópico.",
      ],
      [
        "Son lesiones de melanoma in situ y requieren ampliación quirúrgica con margen de 1 cm.",
        "El melanoma in situ es una lesión pigmentada, no una placa áspera queratósica.",
      ],
    ],
    correct: "C",
    explanation:
      "Enfermedad sospechada: Queratosis actínicas (campo de cancerización).\n\nDato decisivo: lesiones ásperas, 'de lija', en zonas fotoexpuestas de una persona con exposición solar crónica laboral.\n\nSon proliferaciones de queratinocitos atípicos confinadas a la epidermis y se consideran lesiones precursoras del carcinoma escamocelular. Tratamiento: lesiones aisladas con crioterapia; campo de cancerización con 5-fluorouracilo tópico, imiquimod o terapia fotodinámica. La fotoprotección diaria es la base. Si una lesión se indura, crece rápido, duele o se ulcera, se biopsia para descartar carcinoma escamocelular invasor.\n\n**Trampa del examen:** asociarlas al basocelular.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, los trabajadores del sol del Valle (corteros, agricultores) llegan con las manos llenas de estas 'lijas'. Trátalas y enséñales el sombrero de ala ancha y el bloqueador.",
    keyPoints: [
      "Queratosis actínica = lesión premaligna del carcinoma escamocelular.",
      "Tratamiento: crioterapia, 5-FU, imiquimod, terapia fotodinámica.",
      "Induración, crecimiento o úlcera → biopsia.",
    ],
  }),
  q({
    id: "univalle-derm-15",
    examArea: "DERMATOLOGÍA",
    topic: "SÍNDROME DE STEVENS-JOHNSON / NET",
    difficulty: "medium",
    tags: ["dermatologia", "urgencias", "farmacodermia"],
    statement:
      "Una mujer de 32 años inició carbamazepina hace 3 semanas por neuralgia del trigémino. Consulta a urgencias por fiebre, odinofagia y ardor ocular, seguidos de máculas purpúricas en tronco y cara que confluyen y forman ampollas flácidas. El signo de Nikolsky es positivo y el desprendimiento epidérmico compromete cerca del 35% de la superficie corporal. Tiene erosiones en la mucosa oral, conjuntival y genital. ¿Cuál es la medida inicial más importante?",
    options: [
      [
        "Prednisona 1 mg/kg/día y continuar la carbamazepina para evitar el dolor.",
        "Continuar el fármaco culpable empeora el pronóstico; su retiro inmediato es la medida que más impacta la mortalidad.",
      ],
      [
        "Suspender la carbamazepina y trasladar a unidad de quemados o UCI.",
      ],
      [
        "Dicloxacilina IV por sospecha de síndrome de piel escaldada estafilocócica.",
        "El síndrome de piel escaldada respeta las mucosas y afecta sobre todo a niños pequeños; aquí hay compromiso mucoso extenso y un fármaco desencadenante.",
      ],
      [
        "Antihistamínico oral, emolientes y control ambulatorio en 48 horas.",
        "Es una urgencia dermatológica potencialmente mortal; no se maneja ambulatoriamente.",
      ],
    ],
    correct: "B",
    explanation:
      "Enfermedad sospechada: Necrólisis epidérmica tóxica (NET) por carbamazepina.\n\nDato decisivo: desprendimiento de más del 30% de la superficie corporal + compromiso de dos o más mucosas + fármaco de alto riesgo iniciado 1 a 4 semanas antes.\n\nEspectro: síndrome de Stevens-Johnson (<10% de superficie), superposición (10–30%) y NET (>30%). Fármacos de alto riesgo: carbamazepina, lamotrigina, fenitoína, alopurinol, sulfonamidas, nevirapina y AINE oxicams. La medida más importante es retirar de inmediato el fármaco culpable y dar soporte como a un gran quemado: líquidos, control térmico, cuidado de heridas sin desbridar, analgesia y valoración oftalmológica temprana. La escala SCORTEN estima la mortalidad.\n\n**Trampa del examen:** confundir NET con el síndrome de piel escaldada estafilocócica, que respeta las mucosas y es de niños.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, piel que se cae en sábanas + mucosas destruidas + fármaco nuevo = suspende el fármaco ya mismo y piensa en ese paciente como un quemado.",
    keyPoints: [
      "SJS <10%, superposición 10–30%, NET >30% de superficie corporal.",
      "Medida clave: retirar el fármaco culpable de inmediato.",
      "Manejo de soporte en unidad de quemados o UCI + valoración oftalmológica.",
    ],
  }),
  q({
    id: "univalle-derm-16",
    examArea: "DERMATOLOGÍA",
    topic: "DRESS",
    difficulty: "hard",
    tags: ["dermatologia", "farmacodermia"],
    statement:
      "Un hombre de 45 años inició alopurinol hace 5 semanas por gota. Consulta por fiebre de 39 °C, exantema morbiliforme generalizado que progresa a eritrodermia, edema facial marcado y adenopatías cervicales y axilares. No tiene ampollas ni erosiones mucosas. Laboratorios: leucocitos 16.000/µL con eosinófilos de 2.100/µL, linfocitos atípicos, ALT 420 U/L y creatinina de 1,9 mg/dL (basal 0,9). ¿Cuál es el diagnóstico más probable?",
    options: [
      [
        "Exantema viral por mononucleosis infecciosa con hepatitis reactiva.",
        "La mononucleosis puede dar linfocitos atípicos y adenopatías, pero no explica la eosinofilia marcada, el edema facial y la latencia tras un fármaco nuevo.",
      ],
      [
        "Necrólisis epidérmica tóxica en fase inicial, previa a las ampollas.",
        "La NET produce desprendimiento epidérmico y compromiso mucoso con latencia más corta (1–4 semanas); aquí no hay ampollas ni erosiones.",
      ],
      [
        "Reacción a fármaco con eosinofilia y síntomas sistémicos (DRESS).",
      ],
      [
        "Urticaria aguda alérgica generalizada con angioedema facial.",
        "La urticaria aparece en minutos u horas, con habones evanescentes, sin compromiso hepático ni renal.",
      ],
    ],
    correct: "C",
    explanation:
      "Enfermedad sospechada: DRESS (reacción a fármacos con eosinofilia y síntomas sistémicos).\n\nDato decisivo: latencia larga (2 a 8 semanas) tras alopurinol + fiebre + exantema extenso + edema facial + adenopatías + eosinofilia + compromiso de órgano (hígado y riñón).\n\nFármacos típicos: anticonvulsivantes aromáticos (carbamazepina, fenitoína, lamotrigina), alopurinol, sulfonamidas, minociclina y vancomicina. El órgano más afectado es el hígado. Manejo: retirar el fármaco, corticoides sistémicos en formas con compromiso orgánico significativo y desmonte lento, porque puede haber recaídas por reactivación de herpesvirus (VHH-6). Se usa la escala RegiSCAR para el diagnóstico.\n\n**Trampa del examen:** pensar en una virosis por los linfocitos atípicos.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, si le ves la cara 'de luna' hinchada, fiebre y eosinófilos después de un fármaco nuevo hace un mes, pide transaminasas y creatinina: es DRESS.",
    keyPoints: [
      "DRESS: latencia de 2–8 semanas, eosinofilia, edema facial y daño de órgano.",
      "Fármacos: anticonvulsivantes aromáticos, alopurinol, sulfas.",
      "Manejo: retirar el fármaco + corticoides sistémicos con desmonte lento.",
    ],
  }),
  q({
    id: "univalle-derm-17",
    examArea: "DERMATOLOGÍA",
    topic: "PENFIGOIDE AMPOLLOSO",
    difficulty: "medium",
    tags: ["dermatologia", "ampollosas"],
    statement:
      "Un hombre de 79 años, con antecedente de diabetes tratada con un inhibidor de DPP-4, consulta por prurito intenso de 2 meses y, desde hace 2 semanas, ampollas grandes y tensas, de contenido claro, sobre placas urticariformes en abdomen y caras internas de los muslos. No tiene lesiones en mucosas. El signo de Nikolsky es negativo. ¿Qué se espera encontrar en la biopsia con inmunofluorescencia directa?",
    options: [
      [
        "Ampolla intraepidérmica suprabasal con depósito intercelular de IgG en 'panal de abejas'.",
        "Ese patrón corresponde al pénfigo vulgar, que produce ampollas flácidas, Nikolsky positivo y compromiso de mucosas.",
      ],
      [
        "Ampolla subcorneal con depósitos de IgA en las papilas dérmicas.",
        "Los depósitos granulares de IgA en las papilas son de la dermatitis herpetiforme, asociada a enfermedad celíaca y vesículas agrupadas.",
      ],
      [
        "Ampolla subepidérmica con depósito lineal de IgG y C3 en la membrana basal.",
      ],
      [
        "Necrosis epidérmica de espesor total sin depósitos de inmunoglobulinas.",
        "Ese hallazgo es típico de la necrólisis epidérmica tóxica, no de una enfermedad autoinmune ampollosa crónica.",
      ],
    ],
    correct: "C",
    explanation:
      "Enfermedad sospechada: Penfigoide ampolloso (posiblemente inducido por gliptinas).\n\nDato decisivo: anciano + prurito que precede a las ampollas + ampollas TENSAS sobre base urticariforme + mucosas respetadas + Nikolsky negativo.\n\nEs la enfermedad ampollosa autoinmune más frecuente. Los autoanticuerpos IgG van contra BP180 y BP230 de los hemidesmosomas, por eso la ampolla es subepidérmica y el techo resiste (ampolla tensa). Inmunofluorescencia directa: depósito lineal de IgG y C3 en la membrana basal. Tratamiento: corticoide tópico de alta potencia (clobetasol) en todo el cuerpo o corticoide sistémico; considerar suspender el inhibidor de DPP-4.\n\n**Trampa del examen:** confundirlo con pénfigo vulgar.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, PENFIGOIDE = viejito, ampolla Tensa, sin mucosas, lineal. PÉNFIGO = adulto medio, ampolla flácida, boca destruida, en panal.",
    keyPoints: [
      "Penfigoide: anciano, prurito, ampollas tensas, Nikolsky negativo.",
      "IFD: depósito lineal de IgG/C3 en la membrana basal (BP180/BP230).",
      "Asociación con gliptinas (inhibidores de DPP-4).",
    ],
  }),
  q({
    id: "univalle-derm-18",
    examArea: "DERMATOLOGÍA",
    topic: "PÉNFIGO VULGAR",
    difficulty: "medium",
    tags: ["dermatologia", "ampollosas"],
    statement:
      "Una mujer de 44 años consulta por erosiones dolorosas en la mucosa oral de 3 meses de evolución que le impiden comer, y desde hace 3 semanas ampollas flácidas que se rompen con facilidad en cuero cabelludo, tronco y axilas, dejando erosiones extensas. Al frotar la piel sana perilesional se desprende la epidermis. ¿Contra qué antígeno van dirigidos principalmente los autoanticuerpos?",
    options: [
      [
        "Desmogleína 3 (± desmogleína 1).",
      ],
      [
        "BP180 y BP230 del hemidesmosoma.",
        "BP180 es el antígeno del penfigoide ampolloso, que produce ampollas tensas sin compromiso mucoso relevante.",
      ],
      [
        "Colágeno tipo VII de las fibrillas de anclaje.",
        "El colágeno VII es el blanco de la epidermólisis ampollosa adquirida y de la forma distrófica hereditaria.",
      ],
      [
        "Transglutaminasa epidérmica (tipo 3).",
        "La transglutaminasa epidérmica se relaciona con la dermatitis herpetiforme.",
      ],
    ],
    correct: "A",
    explanation:
      "Enfermedad sospechada: Pénfigo vulgar.\n\nDato decisivo: inicio en la mucosa oral + ampollas flácidas + Nikolsky positivo.\n\nLos anticuerpos IgG contra la desmogleína 3 (expresada sobre todo en mucosas) y, en la forma mucocutánea, también contra la desmogleína 1, rompen la unión entre queratinocitos (acantólisis suprabasal). La inmunofluorescencia directa muestra un depósito intercelular de IgG ('en red' o 'panal de abejas'). Sin tratamiento tiene alta mortalidad. Tratamiento: corticoides sistémicos más rituximab como primera línea en formas moderadas a graves.\n\n**Trampa del examen:** el pénfigo foliáceo (solo desmogleína 1) NO afecta mucosas; el vulgar empieza casi siempre por la boca.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, desmogleína 3 = mucosa ('3 de boca'); desmogleína 1 = piel. Boca destrozada por meses antes de la piel: pénfigo vulgar.",
    keyPoints: [
      "Pénfigo vulgar: inicio oral, ampollas flácidas, Nikolsky positivo.",
      "Anticuerpos contra desmogleína 3 (± 1); acantólisis suprabasal.",
      "Tratamiento: corticoide sistémico + rituximab.",
    ],
  }),
  q({
    id: "univalle-derm-19",
    examArea: "DERMATOLOGÍA",
    topic: "PSORIASIS",
    difficulty: "medium",
    tags: ["dermatologia", "farmacologia"],
    statement:
      "Un hombre de 38 años con psoriasis en placas de 10 años de evolución, controlada con corticoides tópicos, consulta a urgencias con fiebre, malestar y una erupción súbita de pústulas estériles de 1 a 2 mm sobre piel muy eritematosa en tronco y extremidades. Hace 3 semanas un médico le formuló prednisona oral por un brote extenso y la suspendió de forma abrupta hace 5 días. ¿Cuál es el diagnóstico y qué lo desencadenó?",
    options: [
      [
        "Pustulosis exantemática generalizada aguda causada por la prednisona.",
        "La pustulosis exantemática aguda aparece días después de un fármaco nuevo (típicamente antibióticos), no tras retirar un corticoide en un psoriásico conocido.",
      ],
      [
        "Foliculitis bacteriana diseminada que requiere oxacilina IV.",
        "Las pústulas son estériles y no foliculares; el contexto de suspensión de esteroide en psoriasis apunta a psoriasis pustulosa.",
      ],
      [
        "Psoriasis guttata desencadenada por una faringitis estreptocócica.",
        "La psoriasis guttata produce pápulas descamativas 'en gota', no pústulas con fiebre.",
      ],
      [
        "Psoriasis pustulosa generalizada por suspender el corticoide oral.",
      ],
    ],
    correct: "D",
    explanation:
      "Enfermedad sospechada: Psoriasis pustulosa generalizada (von Zumbusch).\n\nDato decisivo: paciente con psoriasis que recibe corticoide oral y lo suspende abruptamente → fiebre y pústulas estériles generalizadas (efecto rebote).\n\nPor eso los corticoides sistémicos están contraindicados en la psoriasis. Otros desencadenantes o agravantes de la psoriasis: litio, betabloqueadores, antipalúdicos (cloroquina), interferón, infecciones estreptocócicas (forma guttata), estrés y alcohol. La forma pustulosa generalizada es una urgencia: hospitalización, hidratación, y tratamiento sistémico (acitretina, ciclosporina, metotrexato o biológicos, por ejemplo anti-IL-36 como spesolimab).\n\n**Trampa del examen:** creer que 'más esteroide' es la solución en un brote de psoriasis.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, en psoriasis el esteroide oral es un préstamo con intereses de usurero: al suspenderlo, la piel cobra en pústulas.",
    keyPoints: [
      "Corticoides sistémicos contraindicados en psoriasis (rebote pustuloso).",
      "Agravantes: litio, betabloqueadores, antipalúdicos, estreptococo.",
      "Psoriasis pustulosa generalizada = urgencia con tratamiento sistémico.",
    ],
  }),
  q({
    id: "univalle-derm-20",
    examArea: "DERMATOLOGÍA",
    topic: "ACNÉ E ISOTRETINOÍNA",
    difficulty: "easy",
    tags: ["dermatologia", "farmacologia"],
    statement:
      "Una mujer de 19 años tiene acné nodulo-quístico en cara y espalda con cicatrices, que no mejoró tras 4 meses de doxiciclina oral más peróxido de benzoílo y adapaleno tópicos. Se decide iniciar isotretinoína oral. ¿Cuál es el requisito indispensable antes de empezar?",
    options: [
      [
        "Ecografía hepática, biopsia de piel y perfil hormonal androgénico.",
        "No se necesitan biopsia ni ecografía; se piden perfil lipídico y transaminasas basales.",
      ],
      [
        "Prueba de embarazo negativa y anticoncepción eficaz hasta un mes después.",
      ],
      [
        "Mantener la doxiciclina junto con la isotretinoína para potenciar el efecto.",
        "Tetraciclinas + isotretinoína aumentan el riesgo de hipertensión intracraneal idiopática (pseudotumor cerebri); su combinación está contraindicada.",
      ],
      [
        "Densitometría ósea y audiometría basal antes de la primera dosis.",
        "No son estudios requeridos de rutina para iniciar isotretinoína.",
      ],
    ],
    correct: "B",
    explanation:
      "Principio evaluado: seguridad de la isotretinoína.\n\nIndicaciones: acné nodulo-quístico, acné con cicatrices o acné moderado que no responde a antibiótico oral más tópicos.\n\nEs altamente teratogénica (malformaciones craneofaciales, cardíacas y del sistema nervioso central). Antes de iniciar: prueba de embarazo negativa, anticoncepción eficaz (idealmente dos métodos) desde un mes antes, durante y hasta un mes después, y pruebas mensuales de embarazo. Laboratorios basales y de control: perfil lipídico (hipertrigliceridemia) y transaminasas. Efectos frecuentes: queilitis y xerosis. Está contraindicada su combinación con tetraciclinas por riesgo de pseudotumor cerebri.\n\n**Trampa del examen:** mantener la doxiciclina 'para potenciar'.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, isotretinoína en mujer: primero la prueba de embarazo y la anticoncepción, después la cápsula. Y nunca con doxiciclina.",
    keyPoints: [
      "Isotretinoína: teratógeno mayor; prueba de embarazo + anticoncepción eficaz.",
      "Control de lípidos y transaminasas.",
      "No combinar con tetraciclinas (pseudotumor cerebri).",
    ],
  }),
];
