import { buildUnivalleQuestion as q } from "./build-question";

/** Ruta Dermatología Univalle · #31–#45 (infecciones, eccemas, acné y anexos). */
export const UNIVALLE_DERMATOLOGIA_31_45 = [
  q({
    id: "univalle-derm-31",
    examArea: "DERMATOLOGÍA",
    topic: "IMPÉTIGO NO AMPOLLOSO",
    difficulty: "easy",
    tags: ["dermatologia", "pediatria", "infectologia"],
    statement:
      "Un niño de 5 años, afebril y en buen estado general, presenta desde hace 4 días tres lesiones alrededor de la nariz y la boca: erosiones superficiales cubiertas por costras amarillentas 'color miel'. No hay adenopatías ni otras lesiones. ¿Cuál es el tratamiento más adecuado?",
    options: [
      [
        "Cefalexina IV hospitalaria por 10 días con aislamiento.",
        "Un impétigo localizado, sin fiebre ni compromiso sistémico, no requiere hospitalización ni antibiótico IV.",
      ],
      ["Mupirocina tópica tres veces al día por 5 días e higiene."],
      [
        "Aciclovir oral por sospecha de herpes simple perioral.",
        "El herpes produce vesículas agrupadas sobre base eritematosa; las costras color miel son típicas del impétigo.",
      ],
      [
        "Corticoide tópico de baja potencia por dermatitis perioral.",
        "El corticoide empeora una infección bacteriana superficial.",
      ],
    ],
    correct: "B",
    explanation:
      "Enfermedad: Impétigo no ampolloso (S. aureus y/o Streptococcus pyogenes).\n\nDato decisivo: costras melicéricas ('color miel') periorificiales en un niño sin compromiso sistémico.\n\nEn formas localizadas el tratamiento es tópico: mupirocina o ácido fusídico por 5 días, con lavado de las costras. Se reserva el antibiótico oral (cefalexina, dicloxacilina) para lesiones extensas, múltiples o con síntomas sistémicos. La glomerulonefritis postestreptocócica puede seguir a un impétigo y el antibiótico no la previene.\n\n**Trampa del examen:** tratar con antibiótico sistémico un impétigo de pocas lesiones.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, costras color miel en la nariz de un niño = impétigo. Pocas lesiones: crema. Muchas o con fiebre: pastillas.",
    keyPoints: [
      "Costras melicéricas periorificiales = impétigo.",
      "Localizado: mupirocina o ácido fusídico tópico.",
      "Extenso o sistémico: antibiótico oral antiestafilocócico.",
    ],
  }),
  q({
    id: "univalle-derm-32",
    examArea: "DERMATOLOGÍA",
    topic: "ABSCESO CUTÁNEO",
    difficulty: "easy",
    tags: ["dermatologia", "cirugia", "infectologia"],
    statement:
      "Un hombre de 30 años consulta por un nódulo doloroso en el glúteo de 5 días. Al examen hay una masa de 4 cm, eritematosa, caliente y fluctuante, con un halo de eritema de 1 cm. Está afebril y sin comorbilidades. ¿Cuál es el manejo principal?",
    options: [
      [
        "Dicloxacilina oral por 10 días, sin drenar la colección.",
        "Un absceso fluctuante no se resuelve solo con antibiótico: el pus debe evacuarse.",
      ],
      [
        "Compresas frías y observación hasta que drene solo.",
        "Esperar el drenaje espontáneo prolonga el dolor y aumenta el riesgo de extensión.",
      ],
      [
        "Penicilina benzatínica IM, dosis única de 2,4 M UI.",
        "La penicilina benzatínica no cubre bien S. aureus, el agente habitual de los abscesos.",
      ],
      ["Incisión y drenaje, con cultivo del material purulento."],
    ],
    correct: "D",
    explanation:
      "Enfermedad: Absceso cutáneo (S. aureus, con frecuencia resistente a meticilina en la comunidad).\n\nDato decisivo: masa fluctuante.\n\nEl tratamiento principal es la incisión y el drenaje. Se agrega antibiótico (por ejemplo trimetoprim-sulfametoxazol o clindamicina, que cubren SARM de la comunidad) si hay celulitis extensa, fiebre o síntomas sistémicos, inmunosupresión, abscesos múltiples, edades extremas o una zona difícil de drenar. El cultivo orienta el tratamiento en recurrencias.\n\n**Trampa del examen:** dar solo antibiótico a una colección fluctuante.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, donde hay pus, hay que drenar. El antibiótico es acompañante, no protagonista.",
    keyPoints: [
      "Absceso fluctuante: incisión y drenaje.",
      "Antibiótico si hay celulitis extensa, fiebre o inmunosupresión.",
      "Pensar en SARM de la comunidad (TMP-SMX, clindamicina).",
    ],
  }),
  q({
    id: "univalle-derm-33",
    examArea: "DERMATOLOGÍA",
    topic: "ONICOMICOSIS",
    difficulty: "medium",
    tags: ["dermatologia", "micosis-superficial"],
    statement:
      "Un hombre de 52 años con diabetes tipo 2 consulta porque tres uñas de los pies están engrosadas, amarillentas, quebradizas y con detritos debajo, desde hace 2 años. Quiere 'unas pastillas' para curarlas. ¿Cuál es el paso más adecuado antes de iniciar tratamiento oral?",
    options: [
      [
        "Iniciar terbinafina oral 12 semanas sin más estudios.",
        "Hasta la mitad de las uñas distróficas no son micosis (psoriasis, trauma); el tratamiento oral prolongado debe justificarse con diagnóstico confirmado.",
      ],
      ["Confirmarla con KOH y cultivo de la uña."],
      [
        "Avulsión quirúrgica de las uñas.",
        "La avulsión quirúrgica no es el primer paso y no reemplaza el diagnóstico.",
      ],
      [
        "Esmalte de ciclopirox por 2 semanas y suspender.",
        "Las lacas tópicas requieren meses de uso; dos semanas no tratan una onicomicosis.",
      ],
    ],
    correct: "B",
    explanation:
      "Enfermedad sospechada: Onicomicosis subungueal distal (Trichophyton rubrum, el más frecuente).\n\nPrincipio evaluado: confirmar antes de tratar.\n\nMuchas distrofias ungueales no son micóticas (psoriasis, liquen plano, trauma por calzado). Como el tratamiento oral es largo y tiene efectos adversos (hepatotoxicidad, interacciones), se confirma con examen directo con KOH y cultivo (o histología de la uña). Tratamiento de elección: terbinafina oral (uñas de los pies, 12 semanas). En el diabético la onicomicosis es puerta de entrada a celulitis, así que vale la pena tratarla.\n\n**Trampa del examen:** tratar 'a ciegas' toda uña engrosada.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, no toda uña fea es hongo. Primero el KOH, después la terbinafina.",
    keyPoints: [
      "Confirmar onicomicosis con KOH y cultivo antes del tratamiento oral.",
      "Elección: terbinafina oral (pies: 12 semanas).",
      "En diabéticos es puerta de entrada a infecciones.",
    ],
  }),
  q({
    id: "univalle-derm-34",
    examArea: "DERMATOLOGÍA",
    topic: "TIÑA INCÓGNITA",
    difficulty: "medium",
    tags: ["dermatologia", "micosis-superficial"],
    statement:
      "Una mujer de 35 años tiene una placa anular en el muslo de 2 meses, con borde eritematoso y descamativo que avanza y centro más claro. En la farmacia le vendieron una crema de betametasona con clotrimazol: mejoró el picor, pero la placa se extendió y perdió el borde nítido. ¿Cuál es el diagnóstico más probable y la conducta?",
    options: [
      [
        "Granuloma anular; corticoide local.",
        "El granuloma anular no descama ni pica; su borde está formado por pápulas.",
      ],
      [
        "Psoriasis anular; subir la potencia del corticoide.",
        "Subir el corticoide empeoraría una infección por dermatofitos.",
      ],
      ["Tiña incógnita; antifúngico sin corticoide."],
      [
        "Eritema migratorio; doxiciclina por enfermedad de Lyme.",
        "No hay antecedente de garrapata y la descamación del borde apunta a dermatofito.",
      ],
    ],
    correct: "C",
    explanation:
      "Enfermedad: Tiña corporis modificada por corticoide (tiña incógnita).\n\nDato decisivo: placa anular con borde activo descamativo que se extiende al aplicar una crema con corticoide.\n\nEl corticoide tópico disminuye la inflamación y el picor, pero facilita el crecimiento del dermatofito y borra los signos típicos. Conducta: suspender el corticoide, confirmar con KOH y tratar con antifúngico tópico (terbinafina o un azol) por 2 a 4 semanas; si es extensa, antifúngico oral. Las cremas combinadas con corticoide no se recomiendan para las tiñas.\n\n**Trampa del examen:** creer que la mejoría del picor confirma que la crema funciona.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, crema 'triple' en una tiña es gasolina para el hongo. Suspende el corticoide y raspa el borde.",
    keyPoints: [
      "Corticoide tópico sobre una tiña = tiña incógnita.",
      "Suspender el corticoide, KOH y antifúngico.",
      "Evitar cremas combinadas corticoide-antifúngico en tiñas.",
    ],
  }),
  q({
    id: "univalle-derm-35",
    examArea: "DERMATOLOGÍA",
    topic: "CANDIDIASIS INTERTRIGINOSA",
    difficulty: "easy",
    tags: ["dermatologia", "micosis-superficial"],
    statement:
      "Una mujer de 58 años, obesa y con diabetes mal controlada, consulta en Cali por ardor en el pliegue inframamario. Hay una placa roja intensa, brillante y húmeda que ocupa el pliegue, con pequeñas pústulas y pápulas 'satélite' por fuera del borde. ¿Cuál es el diagnóstico y el manejo?",
    options: [
      ["Candidiasis; azol tópico y mantener el pliegue seco."],
      [
        "Eritrasma; eritromicina oral por 14 días.",
        "El eritrasma es una placa marrón seca, sin satélites, con fluorescencia rojo coral a la luz de Wood.",
      ],
      [
        "Psoriasis invertida; clobetasol tópico cada 12 horas.",
        "La psoriasis invertida es eritematosa y bien delimitada, pero sin pústulas satélite; el clobetasol empeoraría una candidiasis.",
      ],
      [
        "Tiña cruris; griseofulvina oral por 6 semanas.",
        "Las tiñas tienen borde activo descamativo y centro aclarado, sin lesiones satélite.",
      ],
    ],
    correct: "A",
    explanation:
      "Enfermedad: Intertrigo candidiásico (Candida albicans).\n\nDato decisivo: lesiones satélite (pápulas y pústulas por fuera del borde) en un pliegue húmedo, en una paciente obesa y diabética.\n\nTratamiento: antifúngico tópico (clotrimazol, miconazol, ketoconazol o nistatina), secar el pliegue y separarlo (gasas o polvos), bajar de peso y controlar la glucemia. En formas extensas o recurrentes, fluconazol oral. El clima cálido y húmedo de Cali favorece estos cuadros.\n\n**Trampa del examen:** confundirla con tiña. Las lesiones satélite son de Candida.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, pliegue rojo, brillante y con 'satélites' = Candida. Seca el pliegue y controla el azúcar, o vuelve.",
    keyPoints: [
      "Lesiones satélite en un pliegue = candidiasis.",
      "Azol tópico, pliegue seco, control de la glucemia.",
      "Diferencial: tiña (borde activo) y eritrasma (luz de Wood).",
    ],
  }),
  q({
    id: "univalle-derm-36",
    examArea: "DERMATOLOGÍA",
    topic: "MOLUSCO CONTAGIOSO",
    difficulty: "easy",
    tags: ["dermatologia", "pediatria", "infectologia"],
    statement:
      "Un niño de 6 años con dermatitis atópica tiene desde hace 2 meses unas 15 pápulas de 2 a 4 mm en el tronco y los pliegues, del color de la piel, perladas, con una pequeña depresión central. No le duelen. ¿Cuál es el diagnóstico y qué se le explica a la familia?",
    options: [
      [
        "Varicela; aciclovir oral por 7 días y aislamiento.",
        "La varicela es aguda, febril, con vesículas en diferentes estadios; no dura 2 meses.",
      ],
      [
        "Verrugas planas; crioterapia de todas las lesiones.",
        "Las verrugas planas son pápulas aplanadas, sin la umbilicación central típica.",
      ],
      [
        "Criptococosis cutánea; anfotericina B IV.",
        "La criptococosis puede imitar molusco, pero en inmunosuprimidos graves; este es un niño sano.",
      ],
      ["Molusco contagioso; suele resolver solo en meses."],
    ],
    correct: "D",
    explanation:
      "Enfermedad: Molusco contagioso (poxvirus).\n\nDato decisivo: pápulas perladas umbilicadas en un niño, favorecidas por la dermatitis atópica.\n\nEs autolimitado: se resuelve en meses (a veces 1 a 2 años) sin cicatriz. Se puede tratar si hay muchas lesiones, molestias o por razones estéticas: curetaje, crioterapia o cantaridina. Se recomienda no rascar ni compartir toallas. En adultos, el molusco genital es una ITS, y el molusco extenso o gigante obliga a descartar VIH.\n\n**Trampa del examen:** tratar agresivamente a todos los niños.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, perlita con ombligo = molusco. En un niño, paciencia. En un adulto con muchas lesiones, pide VIH.",
    keyPoints: [
      "Pápulas perladas umbilicadas = molusco contagioso.",
      "En niños es autolimitado; tratar solo si hay razones.",
      "Molusco extenso en adultos: descartar VIH.",
    ],
  }),
  q({
    id: "univalle-derm-37",
    examArea: "DERMATOLOGÍA",
    topic: "VERRUGA PLANTAR",
    difficulty: "easy",
    tags: ["dermatologia", "infectologia"],
    statement:
      "Una estudiante de 19 años, nadadora, tiene una lesión dolorosa de 6 mm en la planta del pie. Al examen interrumpe las líneas de la piel (dermatoglifos), duele más al pellizcarla lateralmente que al presionarla de frente y, al rebajarla con bisturí, aparecen puntos negros y sangrado puntiforme. ¿Cuál es el diagnóstico y el manejo?",
    options: [
      [
        "Callo por presión; plantillas y cambiar el calzado.",
        "El callo conserva los dermatoglifos, duele a la presión directa y no tiene puntos negros al rebajarlo.",
      ],
      [
        "Melanoma acral; biopsia escisional urgente del pie.",
        "Los puntos negros son capilares trombosados de la verruga, no pigmento melanocítico.",
      ],
      ["Verruga plantar; queratolíticos o crioterapia."],
      [
        "Poroqueratosis; resección quirúrgica amplia.",
        "La poroqueratosis tiene un borde queratósico fino característico; no es este cuadro.",
      ],
    ],
    correct: "C",
    explanation:
      "Enfermedad: Verruga plantar (virus del papiloma humano, tipos 1, 2 y 4).\n\nDato decisivo: interrumpe los dermatoglifos y muestra puntos negros (capilares trombosados) al rebajarla; duele al pellizcarla.\n\nTratamiento: queratolíticos (ácido salicílico) con oclusión, crioterapia con nitrógeno líquido o combinación. Muchas se resuelven solas. Las piscinas y duchas comunes facilitan el contagio.\n\n**Trampa del examen:** confundirla con un callo. El callo conserva las líneas de la piel.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, si al rebajar ves puntitos negros que sangran, es verruga. El callo es liso y sigue las huellas de la piel.",
    keyPoints: [
      "Verruga plantar: interrumpe dermatoglifos y tiene puntos negros.",
      "Callo: conserva dermatoglifos y duele a la presión directa.",
      "Tratamiento: ácido salicílico o crioterapia.",
    ],
  }),
  q({
    id: "univalle-derm-38",
    examArea: "DERMATOLOGÍA",
    topic: "ECCEMA HERPÉTICO",
    difficulty: "hard",
    tags: ["dermatologia", "pediatria", "urgencias"],
    statement:
      "Un niño de 3 años con dermatitis atópica mal controlada presenta desde hace 2 días fiebre de 38,9 °C, irritabilidad y lesiones en la cara: vesículas agrupadas y múltiples erosiones redondeadas, del mismo tamaño, 'en sacabocado', sobre las placas de eccema. ¿Cuál es el diagnóstico y la conducta?",
    options: [
      ["Eccema herpético; aciclovir sistémico de inmediato."],
      [
        "Impétigo ampolloso; mupirocina tópica en casa.",
        "El impétigo da costras melicéricas o ampollas flácidas, sin erosiones monomorfas en sacabocado ni tanta fiebre.",
      ],
      [
        "Brote de dermatitis atópica; subir el corticoide tópico.",
        "Subir el corticoide sobre una infección herpética diseminada puede empeorarla.",
      ],
      [
        "Varicela; manejo sintomático y no ir al colegio.",
        "La varicela es generalizada y en diferentes estadios; aquí las lesiones se concentran sobre el eccema.",
      ],
    ],
    correct: "A",
    explanation:
      "Enfermedad: Eccema herpético (erupción variceliforme de Kaposi) por virus herpes simple.\n\nDato decisivo: niño atópico con fiebre y erosiones monomorfas en sacabocado sobre las placas de eccema.\n\nEs una urgencia dermatológica: puede diseminarse, comprometer el ojo y causar viremia. Tratamiento: aciclovir sistémico de inmediato (IV si está comprometido o es pequeño), cobertura de la sobreinfección bacteriana si la hay y valoración oftalmológica si hay lesiones periorbitarias.\n\n**Trampa del examen:** tratarlo como un brote de eccema con más corticoide.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, niño atópico con fiebre y 'huequitos' iguales en la cara = herpes encima del eccema. Aciclovir ya.",
    keyPoints: [
      "Atopia + fiebre + erosiones en sacabocado = eccema herpético.",
      "Aciclovir sistémico inmediato.",
      "Valorar el ojo si hay lesiones periorbitarias.",
    ],
  }),
  q({
    id: "univalle-derm-39",
    examArea: "DERMATOLOGÍA",
    topic: "VARICELA",
    difficulty: "easy",
    tags: ["dermatologia", "pediatria", "infectologia"],
    statement:
      "Un niño de 7 años, sano y sin vacuna contra varicela, tiene fiebre de 38,5 °C y desde hace 2 días una erupción pruriginosa en tronco y cara con máculas, pápulas, vesículas 'en gota de rocío' y costras al mismo tiempo. ¿Cuál de los siguientes medicamentos está contraindicado?",
    options: [
      [
        "Acetaminofén para la fiebre.",
        "El acetaminofén es el antipirético de elección en la varicela.",
      ],
      ["Ácido acetilsalicílico oral."],
      [
        "Loratadina oral para el prurito.",
        "Los antihistamínicos son útiles para el prurito.",
      ],
      [
        "Loción de calamina tópica.",
        "Es una medida local segura para el prurito.",
      ],
    ],
    correct: "B",
    explanation:
      "Enfermedad: Varicela (virus varicela-zóster).\n\nDato decisivo: lesiones en diferentes estadios evolutivos al mismo tiempo ('cielo estrellado').\n\nEn niños sanos el manejo es sintomático: acetaminofén, antihistamínicos, uñas cortas e higiene. El ácido acetilsalicílico está contraindicado por el riesgo de síndrome de Reye (encefalopatía y falla hepática). Los AINE se asocian a infecciones graves de piel y tejidos blandos y se evitan. El aciclovir oral se considera en mayores de 12 años, en enfermedades crónicas de piel o pulmón, o en convivientes secundarios; IV en inmunosuprimidos.\n\n**Trampa del examen:** olvidar el síndrome de Reye.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, niño con varicela: acetaminofén sí, aspirina jamás.",
    keyPoints: [
      "Varicela: lesiones en diferentes estadios.",
      "Contraindicado el ácido acetilsalicílico (síndrome de Reye).",
      "Evitar AINE; aciclovir en grupos de riesgo.",
    ],
  }),
  q({
    id: "univalle-derm-40",
    examArea: "DERMATOLOGÍA",
    topic: "URTICARIA CRÓNICA ESPONTÁNEA",
    difficulty: "medium",
    tags: ["dermatologia", "inmunologia"],
    statement:
      "Una mujer de 34 años tiene desde hace 4 meses habones pruriginosos casi diarios que duran menos de 24 horas y desaparecen sin dejar marca. No identifica alimentos, fármacos ni otros desencadenantes. Toma cetirizina 10 mg/día sin control suficiente. ¿Cuál es el siguiente paso?",
    options: [
      [
        "Prednisona oral continua durante 3 meses.",
        "Los corticoides sistémicos solo se usan en ciclos cortos para exacerbaciones, no de forma continua.",
      ],
      [
        "Dieta de exclusión y panel de 100 alérgenos IgE.",
        "La urticaria crónica espontánea rara vez es alérgica; los paneles extensos no se recomiendan.",
      ],
      [
        "Cambiar a difenhidramina oral cada 6 horas.",
        "Los antihistamínicos de primera generación sedan y no son la recomendación.",
      ],
      ["Antihistamínico H1 hasta 4 veces la dosis."],
    ],
    correct: "D",
    explanation:
      "Enfermedad: Urticaria crónica espontánea (habones por más de 6 semanas sin desencadenante identificable).\n\nEscalera terapéutica (guías internacionales):\n1. Antihistamínico H1 de segunda generación a dosis estándar.\n2. Si no hay control en 2 a 4 semanas, subir hasta 4 veces la dosis.\n3. Si persiste, añadir omalizumab.\n4. Luego, ciclosporina.\nLos corticoides orales se reservan para ciclos cortos en exacerbaciones. Los estudios se limitan a hemograma, PCR o VSG y, según el caso, función tiroidea.\n\n**Trampa del examen:** buscar una alergia alimentaria en toda urticaria crónica.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, urticaria crónica: antes de pensar en exámenes raros, sube el antihistamínico hasta cuatro veces.",
    keyPoints: [
      "Urticaria crónica: >6 semanas.",
      "Escalera: antiH1 2ª generación → x4 dosis → omalizumab → ciclosporina.",
      "Rara vez es alérgica; evitar paneles extensos.",
    ],
  }),
  q({
    id: "univalle-derm-41",
    examArea: "DERMATOLOGÍA",
    topic: "DERMATITIS DE CONTACTO ALÉRGICA",
    difficulty: "medium",
    tags: ["dermatologia", "inmunologia"],
    statement:
      "Una mujer de 27 años presenta desde hace meses una placa eccematosa, pruriginosa y descamativa debajo del ombligo, justo donde apoya el botón metálico de sus jeans. También le pican los lóbulos de las orejas con aretes de fantasía. ¿Cuál es el mecanismo y el estudio confirmatorio?",
    options: [
      [
        "Tipo I al níquel; IgE específica sérica.",
        "La hipersensibilidad tipo I produce urticaria inmediata, no eccema crónico.",
      ],
      [
        "Dermatitis irritativa; no requiere ningún estudio.",
        "La relación con un metal concreto en dos sitios sugiere alergia, no irritación inespecífica.",
      ],
      ["Tipo IV al níquel; prueba de parche."],
      [
        "Tiña; examen con KOH.",
        "La localización exacta bajo el metal y el antecedente con aretes apuntan a contacto, no a hongos.",
      ],
    ],
    correct: "C",
    explanation:
      "Enfermedad: Dermatitis de contacto alérgica al níquel.\n\nDato decisivo: eccema en el sitio exacto de contacto con un objeto metálico (botón del jean, aretes).\n\nEs una hipersensibilidad tipo IV (retardada, mediada por linfocitos T). Se confirma con prueba de parche (epicutánea), leída a las 48 y 96 horas. El níquel es el alérgeno de contacto más frecuente. Manejo: evitar el alérgeno (cubrir el botón, aretes hipoalergénicos) y corticoide tópico en los brotes.\n\n**Trampa del examen:** pedir IgE (tipo I) para un eccema de contacto.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, eccema con la forma del botón del jean = níquel. Prueba de parche, no IgE.",
    keyPoints: [
      "Dermatitis de contacto alérgica: hipersensibilidad tipo IV.",
      "Se confirma con prueba de parche.",
      "Níquel: alérgeno de contacto más frecuente.",
    ],
  }),
  q({
    id: "univalle-derm-42",
    examArea: "DERMATOLOGÍA",
    topic: "DERMATITIS SEBORREICA SEVERA",
    difficulty: "hard",
    tags: ["dermatologia", "vih"],
    statement:
      "Un hombre de 24 años consulta por una dermatitis seborreica de inicio reciente, extensa y resistente: placas eritematosas con escama grasa en cara, cuero cabelludo, región preesternal y axilas. Además tiene placas blanquecinas en la lengua que se desprenden al raspar y ha perdido 6 kg. ¿Cuál es el estudio prioritario?",
    options: [
      ["Solicitar una prueba de VIH."],
      [
        "Biopsia por lupus.",
        "El cuadro clínico es típico de dermatitis seborreica; la clave es su gravedad y el contexto.",
      ],
      [
        "Iniciar isotretinoína oral de inmediato.",
        "No es un acné y la isotretinoína no es el paso diagnóstico.",
      ],
      [
        "Medir el zinc sérico por acrodermatitis.",
        "La acrodermatitis enteropática afecta zonas periorificiales y acras, con diarrea y alopecia.",
      ],
    ],
    correct: "A",
    explanation:
      "Enfermedad sospechada: Infección por VIH, con dermatitis seborreica severa y candidiasis oral.\n\nDato decisivo: dermatitis seborreica de inicio súbito, extensa y resistente en un adulto joven, junto con candidiasis oral y pérdida de peso.\n\nLa dermatitis seborreica es muy frecuente en la infección por VIH y puede ser su primera manifestación. También es más frecuente en enfermedad de Parkinson. Ante un cuadro atípico por su gravedad, se ofrece la prueba de VIH con asesoría.\n\n**Trampa del examen:** tratarla solo con ketoconazol sin buscar la causa.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, dermatitis seborreica 'de más' en un joven + candidiasis oral = pide VIH.",
    keyPoints: [
      "Dermatitis seborreica severa de inicio súbito: pensar en VIH.",
      "Candidiasis oral y pérdida de peso refuerzan la sospecha.",
      "También se asocia a Parkinson.",
    ],
  }),
  q({
    id: "univalle-derm-43",
    examArea: "DERMATOLOGÍA",
    topic: "ROSÁCEA",
    difficulty: "easy",
    tags: ["dermatologia"],
    statement:
      "Una mujer de 41 años consulta por enrojecimiento persistente de mejillas, nariz y mentón, con telangiectasias y episodios de 'calor' en la cara que empeoran con el sol, el alcohol, el café y las comidas picantes. Hay pápulas y pústulas, pero no comedones. ¿Cuál es el diagnóstico y el tratamiento tópico de elección?",
    options: [
      [
        "Acné vulgar; peróxido de benzoílo y adapaleno.",
        "La ausencia de comedones y el eritema con telangiectasias descartan el acné vulgar.",
      ],
      ["Rosácea; ivermectina o metronidazol tópico."],
      [
        "Lupus agudo; hidroxicloroquina.",
        "El eritema malar del lupus no tiene pústulas ni empeora con alcohol o picante.",
      ],
      [
        "Dermatitis seborreica; ketoconazol en champú.",
        "La dermatitis seborreica tiene escama grasa en surcos nasogenianos y cejas, sin pústulas.",
      ],
    ],
    correct: "B",
    explanation:
      "Enfermedad: Rosácea papulopustulosa.\n\nDato decisivo: eritema centrofacial persistente con telangiectasias, flushing con desencadenantes (sol, alcohol, picante, calor) y pápulas-pústulas SIN comedones.\n\nTratamiento: evitar desencadenantes, fotoprotección, ivermectina tópica o metronidazol o ácido azelaico; en formas moderadas a graves, doxiciclina a dosis bajas. Los corticoides tópicos están contraindicados: empeoran la rosácea. Puede comprometer los ojos (blefaritis) y, en hombres, causar rinofima.\n\n**Trampa del examen:** llamarla 'acné del adulto'. Sin comedones no es acné.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, cara roja con granitos pero sin puntos negros = rosácea. Y nada de corticoide en la cara.",
    keyPoints: [
      "Rosácea: eritema, telangiectasias, flushing, sin comedones.",
      "Tópicos: ivermectina, metronidazol o ácido azelaico.",
      "El corticoide tópico la empeora.",
    ],
  }),
  q({
    id: "univalle-derm-44",
    examArea: "DERMATOLOGÍA",
    topic: "ACNÉ COMEDONIANO",
    difficulty: "easy",
    tags: ["dermatologia"],
    statement:
      "Un adolescente de 15 años consulta por 'espinillas' en la frente y la nariz desde hace un año. Al examen hay numerosos comedones abiertos (puntos negros) y cerrados (puntos blancos), sin pápulas inflamatorias, pústulas, nódulos ni cicatrices. ¿Cuál es el tratamiento de primera línea?",
    options: [
      [
        "Doxiciclina oral durante 3 meses.",
        "Los antibióticos actúan sobre el componente inflamatorio; aquí no lo hay.",
      ],
      [
        "Isotretinoína oral.",
        "La isotretinoína se reserva para acné grave, nodular o con cicatrices.",
      ],
      ["Adapaleno tópico en la noche."],
      [
        "Anticonceptivo oral con ciproterona.",
        "Es una opción hormonal en mujeres, no en un adolescente varón.",
      ],
    ],
    correct: "C",
    explanation:
      "Enfermedad: Acné comedoniano leve.\n\nPrincipio evaluado: tratamiento escalonado del acné según su tipo y gravedad.\n\nLos retinoides tópicos (adapaleno, tretinoína) son comedolíticos y son la primera línea del acné comedoniano. En el acné inflamatorio leve se combinan con peróxido de benzoílo; en el moderado se añade antibiótico oral (siempre con peróxido de benzoílo para evitar resistencias, por un tiempo limitado); en el grave o con cicatrices, isotretinoína.\n\n**Trampa del examen:** dar antibiótico oral a un acné solo comedoniano.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, puntos negros y blancos sin inflamación = retinoide tópico. El antibiótico es para lo inflamado.",
    keyPoints: [
      "Acné comedoniano: retinoide tópico de primera línea.",
      "Inflamatorio leve: retinoide + peróxido de benzoílo.",
      "Grave o con cicatrices: isotretinoína.",
    ],
  }),
  q({
    id: "univalle-derm-45",
    examArea: "DERMATOLOGÍA",
    topic: "HIDRADENITIS SUPURATIVA",
    difficulty: "medium",
    tags: ["dermatologia"],
    statement:
      "Una mujer de 26 años, fumadora y con obesidad, tiene desde hace 3 años nódulos dolorosos recurrentes en axilas e ingles que drenan material purulento y dejan trayectos fistulosos interconectados y cicatrices en puente. Ha recibido varios ciclos de antibiótico con recaídas. ¿Cuál es el diagnóstico más probable?",
    options: [
      [
        "Forunculosis recurrente por S. aureus.",
        "Los forúnculos no forman trayectos fistulosos ni cicatrices en puente en zonas de pliegues de forma crónica.",
      ],
      [
        "Tuberculosis cutánea (escrofuloderma).",
        "El escrofuloderma drena desde un ganglio o hueso subyacente, sin este patrón en pliegues.",
      ],
      [
        "Linfogranuloma venéreo.",
        "El linfogranuloma produce bubones inguinales, pero no compromete axilas ni deja este patrón crónico.",
      ],
      ["Hidradenitis supurativa."],
    ],
    correct: "D",
    explanation:
      "Enfermedad: Hidradenitis supurativa.\n\nDato decisivo: nódulos dolorosos recurrentes, trayectos fistulosos y cicatrices en zonas de pliegues (axilas, ingles, región perianal), en una persona fumadora y con obesidad.\n\nEs una enfermedad inflamatoria crónica del folículo, no una infección primaria. Manejo: dejar de fumar, bajar de peso, clindamicina tópica en formas leves; en formas moderadas, tetraciclinas o clindamicina con rifampicina; en graves, biológicos (adalimumab) y cirugía. Se clasifica con la escala de Hurley.\n\n**Trampa del examen:** tratarla como forúnculos repetidos con ciclos de antibiótico sin más.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, 'forúnculos' que vuelven siempre al mismo pliegue y dejan túneles = hidradenitis. Pregunta por el cigarrillo.",
    keyPoints: [
      "Hidradenitis: nódulos, fístulas y cicatrices en pliegues.",
      "Factores: tabaco y obesidad.",
      "Graves: adalimumab y cirugía.",
    ],
  }),
];
