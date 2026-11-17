import { buildUnivalleQuestion as q } from "./build-question";

/** Ruta Dermatología Univalle · #46–#60 (sistémicas, pelo, paraneoplásicas y tropical). */
export const UNIVALLE_DERMATOLOGIA_46_60 = [
  q({
    id: "univalle-derm-46",
    examArea: "DERMATOLOGÍA",
    topic: "LUPUS DISCOIDE",
    difficulty: "medium",
    tags: ["dermatologia", "reumatologia"],
    statement:
      "Una mujer de 33 años tiene placas eritematosas en el cuero cabelludo y las orejas, con escama adherida, tapones foliculares y centro atrófico con cicatriz. En el cuero cabelludo las placas dejaron zonas sin pelo que no vuelve a salir. Empeoran con el sol. ¿Cuál es el diagnóstico y el tratamiento?",
    options: [
      ["Lupus discoide; fotoprotección e hidroxicloroquina."],
      [
        "Psoriasis del cuero cabelludo; clobetasol en champú.",
        "La psoriasis no deja cicatriz ni alopecia permanente.",
      ],
      [
        "Tiña capitis; terbinafina oral por 4 semanas.",
        "La tiña capitis en adultos es rara y no produce atrofia con tapones foliculares.",
      ],
      [
        "Alopecia areata; corticoide intralesional.",
        "La alopecia areata es una placa lisa, sin eritema ni escama, y no deja cicatriz.",
      ],
    ],
    correct: "A",
    explanation:
      "Enfermedad: Lupus eritematoso cutáneo crónico (discoide).\n\nDato decisivo: placas con escama adherida, tapones foliculares, atrofia y cicatriz, con alopecia cicatricial; fotosensibles.\n\nTratamiento: fotoprotección estricta, corticoide tópico potente o intralesional, y antipalúdicos (hidroxicloroquina) en formas extensas, con control oftalmológico por riesgo de retinopatía. El tabaco disminuye la respuesta. Solo una minoría evoluciona a lupus sistémico, pero se recomienda tamizarlo.\n\n**Trampa del examen:** confundir la alopecia cicatricial (permanente) con una no cicatricial.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, placa en el cuero cabelludo que deja cicatriz y no vuelve a salir pelo = lupus discoide. Sol fuera e hidroxicloroquina.",
    keyPoints: [
      "Lupus discoide: escama adherida, atrofia, alopecia cicatricial.",
      "Fotoprotección + corticoide + hidroxicloroquina.",
      "Hidroxicloroquina: control oftalmológico.",
    ],
  }),
  q({
    id: "univalle-derm-47",
    examArea: "DERMATOLOGÍA",
    topic: "ERITEMA MALAR DEL LES",
    difficulty: "medium",
    tags: ["dermatologia", "reumatologia"],
    statement:
      "Una mujer de 25 años consulta por eritema en 'alas de mariposa' en mejillas y dorso nasal que respeta los surcos nasolabiales y empeoró tras ir a la playa. Además tiene artralgias en manos, úlceras orales indoloras y caída difusa del cabello desde hace 2 meses. ¿Cuál es el diagnóstico más probable y el estudio inicial?",
    options: [
      [
        "Rosácea; metronidazol.",
        "La rosácea no explica las artralgias, las úlceras orales ni la alopecia.",
      ],
      ["Lupus sistémico; pedir ANA."],
      [
        "Dermatomiositis; CPK y búsqueda de cáncer.",
        "La dermatomiositis da eritema heliotropo y pápulas de Gottron, con debilidad proximal.",
      ],
      [
        "Dermatitis seborreica; ketoconazol tópico.",
        "La dermatitis seborreica compromete justamente los surcos nasolabiales, con escama grasa.",
      ],
    ],
    correct: "B",
    explanation:
      "Enfermedad: Lupus eritematoso sistémico con lupus cutáneo agudo.\n\nDato decisivo: eritema malar fotosensible que respeta los surcos nasolabiales + artralgias + úlceras orales + alopecia en una mujer joven.\n\nEstudio inicial: ANA (muy sensibles); si son positivos, anti-DNA de doble cadena y anti-Sm (específicos), complemento (C3, C4), hemograma, función renal y uroanálisis para buscar nefritis lúpica. Tratamiento base: hidroxicloroquina y fotoprotección.\n\n**Trampa del examen:** confundir el eritema malar con rosácea o dermatitis seborreica. La seborreica sí compromete los surcos nasolabiales.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, mariposa en la cara que respeta los surcos + articulaciones + boca = lupus. ANA primero y mira el riñón.",
    keyPoints: [
      "Eritema malar del LES: respeta surcos nasolabiales.",
      "ANA (sensible); anti-DNA y anti-Sm (específicos).",
      "Buscar nefritis lúpica con uroanálisis.",
    ],
  }),
  q({
    id: "univalle-derm-48",
    examArea: "DERMATOLOGÍA",
    topic: "ESCLEROSIS SISTÉMICA LIMITADA (CREST)",
    difficulty: "hard",
    tags: ["dermatologia", "reumatologia"],
    statement:
      "Una mujer de 50 años tiene fenómeno de Raynaud desde hace 8 años. Ahora presenta piel engrosada y tensa en los dedos (esclerodactilia), telangiectasias en cara y palmas, nódulos duros de calcio en los pulpejos y disfagia para sólidos. La piel del tronco es normal. ¿Qué autoanticuerpo es más característico?",
    options: [
      [
        "Anti-Scl-70 (antitopoisomerasa I).",
        "El anti-Scl-70 se asocia a la forma difusa, con compromiso del tronco y enfermedad pulmonar intersticial.",
      ],
      [
        "Anti-Jo-1 (antisintetasa).",
        "El anti-Jo-1 se asocia a miositis con enfermedad pulmonar intersticial (síndrome antisintetasa).",
      ],
      ["Anticentrómero (ACA)."],
      [
        "Anti-Sm.",
        "El anti-Sm es específico del lupus eritematoso sistémico.",
      ],
    ],
    correct: "C",
    explanation:
      "Enfermedad: Esclerosis sistémica cutánea limitada (síndrome CREST: Calcinosis, Raynaud, alteración Esofágica, eSclerodactilia, Telangiectasias).\n\nDato decisivo: Raynaud de larga evolución con compromiso cutáneo distal (dedos, cara), sin compromiso del tronco.\n\nEl anticuerpo característico es el anticentrómero. La complicación grave típica de la forma limitada es la hipertensión arterial pulmonar, que se tamiza con ecocardiograma. La forma difusa (anti-Scl-70, anti-RNA polimerasa III) se asocia a enfermedad pulmonar intersticial y crisis renal esclerodérmica.\n\n**Trampa del examen:** asociar CREST con anti-Scl-70.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, CREST = anticentrómero = vigila la presión pulmonar. Difusa = Scl-70 = vigila el pulmón y el riñón.",
    keyPoints: [
      "CREST: calcinosis, Raynaud, esófago, esclerodactilia, telangiectasias.",
      "Anticuerpo: anticentrómero.",
      "Complicación: hipertensión pulmonar (tamizar con ecocardiograma).",
    ],
  }),
  q({
    id: "univalle-derm-49",
    examArea: "DERMATOLOGÍA",
    topic: "PIODERMA GANGRENOSO",
    difficulty: "hard",
    tags: ["dermatologia", "gastroenterologia"],
    statement:
      "Un hombre de 38 años con colitis ulcerosa activa consulta por una úlcera muy dolorosa en la pierna que empezó como una pústula hace 3 semanas. Tiene borde violáceo, socavado y bien definido, y fondo purulento. Tras un desbridamiento en otro centro, la úlcera creció. Los cultivos son negativos. ¿Cuál es el diagnóstico y el manejo?",
    options: [
      [
        "Úlcera venosa; desbridamiento quirúrgico amplio.",
        "El desbridamiento empeora el pioderma (patergia), como ya ocurrió.",
      ],
      [
        "Ectima; ciprofloxacina.",
        "Los cultivos son negativos y el contexto de enfermedad inflamatoria intestinal apunta a pioderma.",
      ],
      [
        "Leishmaniasis cutánea; antimoniato de meglumina.",
        "La leishmaniasis es indolora y no se relaciona con la colitis ni empeora con el desbridamiento.",
      ],
      ["Pioderma gangrenoso; corticoide sistémico."],
    ],
    correct: "D",
    explanation:
      "Enfermedad: Pioderma gangrenoso.\n\nDato decisivo: úlcera muy dolorosa de borde violáceo socavado, en un paciente con enfermedad inflamatoria intestinal, que empeora con el trauma (fenómeno de patergia), con cultivos negativos.\n\nEs una dermatosis neutrofílica asociada a enfermedad inflamatoria intestinal, artritis reumatoide y neoplasias hematológicas. Es un diagnóstico de exclusión (biopsia del borde para descartar infección, vasculitis y cáncer). Tratamiento: corticoide sistémico o ciclosporina; anti-TNF (infliximab) si hay enfermedad inflamatoria intestinal. Se evita el desbridamiento quirúrgico.\n\n**Trampa del examen:** desbridar una úlcera que empeora con cada intervención.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, úlcera que crece cada vez que la tocas, en un paciente con colitis = pioderma. Inmunosupresión, no bisturí.",
    keyPoints: [
      "Pioderma gangrenoso: úlcera dolorosa, borde violáceo socavado, patergia.",
      "Asociado a EII, artritis reumatoide y neoplasias hematológicas.",
      "Corticoide sistémico; evitar el desbridamiento.",
    ],
  }),
  q({
    id: "univalle-derm-50",
    examArea: "DERMATOLOGÍA",
    topic: "ERITEMA MULTIFORME",
    difficulty: "medium",
    tags: ["dermatologia", "infectologia"],
    statement:
      "Un estudiante de 20 años presenta desde hace 2 días lesiones en el dorso de manos, palmas y codos, simétricas, en 'diana' típicas: centro oscuro, anillo claro y halo eritematoso. Tiene pocas erosiones en los labios. Diez días antes tuvo un 'fuego' en el labio. No toma medicamentos. ¿Cuál es el diagnóstico más probable?",
    options: [
      ["Eritema multiforme por herpes simple."],
      [
        "Síndrome de Stevens-Johnson por un fármaco.",
        "El SJS tiene máculas purpúricas o dianas atípicas, despegamiento epidérmico y compromiso mucoso extenso, casi siempre por fármacos.",
      ],
      [
        "Urticaria aguda; antihistamínico oral diario.",
        "Los habones duran menos de 24 horas y no forman dianas fijas de tres zonas.",
      ],
      [
        "Lyme; doxiciclina.",
        "El eritema migratorio es una placa única que se expande, no múltiples dianas acrales.",
      ],
    ],
    correct: "A",
    explanation:
      "Enfermedad: Eritema multiforme (menor o mayor según el compromiso mucoso).\n\nDato decisivo: lesiones en diana típicas (tres zonas), acrales y simétricas, después de un herpes labial.\n\nLa causa más frecuente es la infección por virus herpes simple; también Mycoplasma pneumoniae (sobre todo en niños). Es distinto del espectro SJS/NET, que es casi siempre por fármacos. Manejo: sintomático; en formas recurrentes, aciclovir o valaciclovir profiláctico.\n\n**Trampa del examen:** meter el eritema multiforme en el mismo saco que el Stevens-Johnson.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, dianas en las manos después de un 'fuego' en el labio = eritema multiforme por herpes. Busca el herpes, no el fármaco.",
    keyPoints: [
      "Eritema multiforme: dianas típicas acrales y simétricas.",
      "Causa principal: herpes simple (y Mycoplasma).",
      "Recurrente: aciclovir o valaciclovir profiláctico.",
    ],
  }),
  q({
    id: "univalle-derm-51",
    examArea: "DERMATOLOGÍA",
    topic: "PITIRIASIS ROSADA",
    difficulty: "easy",
    tags: ["dermatologia"],
    statement:
      "Una adolescente de 16 años notó hace 2 semanas una placa ovalada de 3 cm en el abdomen, rosada, con un collarete de escama fina en el borde. Diez días después aparecieron muchas placas ovaladas más pequeñas en el tronco, orientadas siguiendo las líneas de la piel, con prurito leve. Palmas y plantas están respetadas. ¿Cuál es el diagnóstico y el manejo?",
    options: [
      [
        "Tiña corporis múltiple; terbinafina oral.",
        "La tiña no produce una placa heraldo seguida de una erupción en patrón de 'árbol de Navidad'.",
      ],
      [
        "Psoriasis guttata; metotrexato oral.",
        "La psoriasis guttata no tiene placa heraldo y nunca empieza con metotrexato.",
      ],
      ["Pitiriasis rosada; manejo sintomático."],
      [
        "Sífilis secundaria; penicilina benzatínica.",
        "Es el diferencial clave, pero no hay placa heraldo en la sífilis y suele afectar palmas y plantas; ante la duda, se pide VDRL.",
      ],
    ],
    correct: "C",
    explanation:
      "Enfermedad: Pitiriasis rosada (asociada a reactivación de herpesvirus 6 y 7).\n\nDato decisivo: placa heraldo seguida, días después, de una erupción en el tronco orientada según las líneas de la piel ('árbol de Navidad').\n\nEs autolimitada: se resuelve en 6 a 8 semanas. Manejo: emolientes, antihistamínicos y corticoide tópico suave si hay prurito. El principal diferencial es la sífilis secundaria: si hay lesiones palmoplantares, factores de riesgo o duda, se pide VDRL. En el embarazo temprano se ha asociado a pérdida gestacional.\n\n**Trampa del examen:** no pensar en sífilis secundaria como diferencial.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, placa madre y después sus hijitas en forma de árbol de Navidad = pitiriasis rosada. Pero si toca palmas, pide VDRL.",
    keyPoints: [
      "Placa heraldo + erupción en 'árbol de Navidad' = pitiriasis rosada.",
      "Autolimitada en 6–8 semanas.",
      "Diferencial obligado: sífilis secundaria (VDRL).",
    ],
  }),
  q({
    id: "univalle-derm-52",
    examArea: "DERMATOLOGÍA",
    topic: "LIQUEN PLANO",
    difficulty: "medium",
    tags: ["dermatologia", "infectologia"],
    statement:
      "Un hombre de 47 años tiene pápulas pequeñas, planas, poligonales, violáceas y muy pruriginosas en la cara anterior de las muñecas y los tobillos. Algunas siguen el trayecto de un rasguño. En la mucosa yugal hay un retículo blanquecino en encaje. ¿Cuál es el diagnóstico y qué infección conviene descartar?",
    options: [
      [
        "Psoriasis; descartar artritis psoriásica.",
        "La psoriasis forma placas con escama plateada en zonas extensoras, sin retículo oral en encaje.",
      ],
      ["Liquen plano; descartar hepatitis C."],
      [
        "Escabiosis; tratar a todos los convivientes.",
        "La escabiosis produce surcos y pápulas excoriadas, no pápulas poligonales violáceas con lesiones orales.",
      ],
      [
        "Lupus discoide; pedir ANA.",
        "El lupus discoide deja atrofia y cicatriz; no da pápulas poligonales pruriginosas en muñecas.",
      ],
    ],
    correct: "B",
    explanation:
      "Enfermedad: Liquen plano.\n\nDato decisivo: las '6 P' (pápulas planas, poligonales, púrpuras, pruriginosas, en placas) en muñecas y tobillos, fenómeno de Koebner y estrías de Wickham (retículo blanquecino) en la mucosa oral.\n\nSe asocia a infección por virus de la hepatitis C, por lo que se recomienda tamizarla. Tratamiento: corticoide tópico potente; en formas extensas, corticoide oral o fototerapia. El liquen plano oral erosivo crónico tiene un pequeño riesgo de carcinoma escamocelular y requiere seguimiento.\n\n**Trampa del examen:** olvidar la asociación con hepatitis C.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, pápulas violetas que pican en las muñecas + encaje blanco en la boca = liquen plano. Pide hepatitis C.",
    keyPoints: [
      "Liquen plano: 6 P, Koebner, estrías de Wickham.",
      "Asociación con hepatitis C.",
      "Liquen oral erosivo: seguimiento por riesgo de carcinoma.",
    ],
  }),
  q({
    id: "univalle-derm-53",
    examArea: "DERMATOLOGÍA",
    topic: "ALOPECIA AREATA",
    difficulty: "easy",
    tags: ["dermatologia"],
    statement:
      "Una mujer de 29 años notó una zona redonda sin pelo de 3 cm en el occipucio, de aparición súbita hace 3 semanas. La piel de la placa es lisa, sin eritema, escama ni cicatriz. En el borde hay pelos cortos que se adelgazan hacia la raíz ('en signo de exclamación'). Tiene pequeñas depresiones puntiformes en las uñas. ¿Cuál es el diagnóstico y el tratamiento?",
    options: [
      ["Alopecia areata; corticoide intralesional."],
      [
        "Tiña capitis; griseofulvina oral.",
        "La tiña produce descamación, pelos rotos con hongos y suele darse en niños.",
      ],
      [
        "Tricotilomanía; terapia cognitivo-conductual.",
        "La tricotilomanía tiene pelos rotos a diferentes alturas y bordes irregulares, sin pelos en signo de exclamación.",
      ],
      [
        "Alopecia cicatricial; biopsia urgente.",
        "La placa conserva los orificios foliculares y no tiene cicatriz.",
      ],
    ],
    correct: "A",
    explanation:
      "Enfermedad: Alopecia areata.\n\nDato decisivo: placa alopécica lisa, sin inflamación ni cicatriz, con pelos 'en signo de exclamación' y piqueteado ungueal.\n\nEs una enfermedad autoinmune contra el folículo (no cicatricial, por eso el pelo puede volver a salir). Se asocia a tiroiditis autoinmune, vitíligo y atopia. Tratamiento: corticoide intralesional (triamcinolona) en placas limitadas; corticoide tópico potente; en formas extensas, inmunoterapia tópica o inhibidores de JAK.\n\n**Trampa del examen:** confundirla con tiña capitis. La areata es lisa, sin escama.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, placa lisa como una moneda con pelitos en signo de exclamación = alopecia areata. Pregunta por la tiroides.",
    keyPoints: [
      "Alopecia areata: placa lisa, pelos en signo de exclamación.",
      "No cicatricial: el pelo puede volver.",
      "Corticoide intralesional; asociar tiroiditis y vitíligo.",
    ],
  }),
  q({
    id: "univalle-derm-54",
    examArea: "DERMATOLOGÍA",
    topic: "EFLUVIO TELÓGENO",
    difficulty: "easy",
    tags: ["dermatologia", "ginecologia"],
    statement:
      "Una mujer de 31 años consulta 3 meses después del parto porque se le cae mucho cabello al peinarse y en la ducha. La caída es difusa, sin placas, sin eritema ni descamación, y la prueba de tracción suave es positiva en todo el cuero cabelludo. Está asustada. ¿Cuál es el diagnóstico más probable y qué se le explica?",
    options: [
      [
        "Alopecia androgénica; minoxidil y finasterida.",
        "La androgénica es progresiva y de patrón central, no aparece de golpe tras un parto; la finasterida está contraindicada si hay posibilidad de embarazo.",
      ],
      [
        "Alopecia areata universal; corticoide oral.",
        "La alopecia areata forma placas lisas; no es una caída difusa posparto.",
      ],
      [
        "Hipotiroidismo grave; levotiroxina inmediata.",
        "Puede pedirse una TSH si la caída persiste, pero el cuadro típico tras el parto es un efluvio y no justifica levotiroxina sin diagnóstico.",
      ],
      ["Efluvio telógeno; se recupera sola."],
    ],
    correct: "D",
    explanation:
      "Enfermedad: Efluvio telógeno posparto.\n\nDato decisivo: caída difusa y abundante 2 a 4 meses después de un desencadenante (parto, fiebre alta, cirugía, dieta estricta, estrés), con tracción positiva y sin placas.\n\nEl desencadenante pasa muchos folículos a la fase de reposo (telógeno) y se caen meses después. Es reversible y se recupera en 6 a 12 meses. Si la caída dura más de 6 meses, se piden ferritina, TSH y hemograma. Tranquilizar a la paciente es parte del tratamiento.\n\n**Trampa del examen:** tratarla como alopecia androgénica.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, se le cae el pelo 3 meses después del parto = efluvio telógeno. Calma y paciencia: vuelve a crecer.",
    keyPoints: [
      "Efluvio telógeno: caída difusa 2–4 meses tras un desencadenante.",
      "Reversible en 6–12 meses.",
      "Si persiste: ferritina, TSH y hemograma.",
    ],
  }),
  q({
    id: "univalle-derm-55",
    examArea: "DERMATOLOGÍA",
    topic: "CARCINOMA ESCAMOCELULAR DE LABIO",
    difficulty: "medium",
    tags: ["dermatologia", "oncologia"],
    statement:
      "Un agricultor de 66 años, fumador y con muchos años de exposición al sol, tiene desde hace 4 meses una úlcera de 1 cm en el labio inferior, indurada, que sangra fácilmente y no cicatriza. El bermellón del resto del labio está seco, descamativo y con bordes borrosos. ¿Cuál es el diagnóstico más probable y la conducta?",
    options: [
      [
        "Herpes labial recurrente; aciclovir tópico.",
        "El herpes cura en 1 a 2 semanas; una úlcera indurada de 4 meses no es herpes.",
      ],
      [
        "Queilitis angular; antifúngico tópico local.",
        "La queilitis angular afecta las comisuras, no forma una úlcera indurada en el bermellón.",
      ],
      ["Carcinoma escamocelular; biopsia."],
      [
        "Mucocele del labio; observación clínica.",
        "El mucocele es una lesión quística, blanda y translúcida, no una úlcera indurada.",
      ],
    ],
    correct: "C",
    explanation:
      "Enfermedad: Carcinoma escamocelular del labio inferior sobre queilitis actínica.\n\nDato decisivo: úlcera indurada que no cicatriza en el labio inferior de un hombre fumador con exposición solar crónica y queilitis actínica.\n\nEl labio inferior es el sitio típico del carcinoma escamocelular de labio (más sol). Tiene mayor riesgo de metástasis ganglionar que el escamocelular de otras zonas de la piel. Conducta: biopsia, palpar los ganglios submentonianos, submandibulares y cervicales, y escisión con márgenes adecuados. La queilitis actínica es premaligna y se trata.\n\n**Trampa del examen:** tratar como herpes una úlcera de meses.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, úlcera dura en el labio de abajo de un campesino fumador = escamocelular hasta que la biopsia diga otra cosa. Toca el cuello.",
    keyPoints: [
      "Úlcera indurada crónica en labio inferior: carcinoma escamocelular.",
      "Queilitis actínica: lesión premaligna.",
      "Biopsia y examen de ganglios cervicales.",
    ],
  }),
  q({
    id: "univalle-derm-56",
    examArea: "DERMATOLOGÍA",
    topic: "SIGNO DE LESER-TRÉLAT",
    difficulty: "hard",
    tags: ["dermatologia", "oncologia"],
    statement:
      "Un hombre de 63 años consulta porque en 2 meses le aparecieron decenas de lesiones 'pegadas' en la espalda: pápulas marrones, verrugosas, de aspecto céreo. Además refiere saciedad temprana y pérdida de 9 kg en el mismo tiempo. ¿Cuál es la conducta más importante?",
    options: [
      [
        "Crioterapia de todas las lesiones y control anual.",
        "Tratar las lesiones no resuelve lo importante: su aparición súbita puede ser paraneoplásica.",
      ],
      ["Buscar una neoplasia oculta, sobre todo gástrica."],
      [
        "Biopsia de cada lesión para descartar melanoma.",
        "Son queratosis seborreicas típicas; lo relevante es la causa de su aparición súbita.",
      ],
      [
        "Acitretina oral por queratosis múltiples.",
        "No es el manejo y omite la búsqueda del cáncer asociado.",
      ],
    ],
    correct: "B",
    explanation:
      "Enfermedad sospechada: Signo de Leser-Trélat (paraneoplásico).\n\nDato decisivo: aparición súbita de múltiples queratosis seborreicas en pocas semanas, con síntomas constitucionales y digestivos.\n\nLas queratosis seborreicas son muy frecuentes y benignas, pero su aparición eruptiva puede asociarse a adenocarcinomas, sobre todo gástricos. Con saciedad temprana y pérdida de peso, la conducta es buscar la neoplasia (endoscopia digestiva alta, entre otros estudios). Otros signos cutáneos paraneoplásicos: acantosis nigricans maligna, dermatomiositis del adulto, eritema gyratum repens.\n\n**Trampa del examen:** tratar las queratosis sin preguntarse por qué aparecieron de golpe.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, una queratosis seborreica no asusta; cincuenta en dos meses con pérdida de peso, sí. Endoscopia.",
    keyPoints: [
      "Queratosis seborreicas eruptivas = signo de Leser-Trélat.",
      "Asociado sobre todo a adenocarcinoma gástrico.",
      "Buscar la neoplasia (endoscopia digestiva alta).",
    ],
  }),
  q({
    id: "univalle-derm-57",
    examArea: "DERMATOLOGÍA",
    topic: "ACANTOSIS NIGRICANS",
    difficulty: "easy",
    tags: ["dermatologia", "endocrinologia"],
    statement:
      "Una adolescente de 14 años con obesidad consulta porque tiene 'el cuello sucio' que no se le quita al bañarse. Hay placas hiperpigmentadas, engrosadas y de aspecto aterciopelado en la nuca y las axilas. Tiene ciclos menstruales irregulares y acné. ¿Cuál es el paso más adecuado?",
    options: [
      ["Evaluar resistencia a la insulina."],
      [
        "Frotar con jabón antibacterial; es falta de higiene.",
        "No es suciedad: es un engrosamiento de la piel que no sale al lavar; culpar a la paciente es un error.",
      ],
      [
        "Biopsia y endoscopia por posible neoplasia gástrica.",
        "La acantosis maligna se sospecha en adultos delgados de inicio súbito, no en una adolescente con obesidad.",
      ],
      [
        "Antifúngico tópico por sospecha de tiña negra.",
        "La tiña negra es una mácula plana en palmas, no placas aterciopeladas en pliegues.",
      ],
    ],
    correct: "A",
    explanation:
      "Enfermedad: Acantosis nigricans asociada a resistencia a la insulina.\n\nDato decisivo: placas aterciopeladas hiperpigmentadas en nuca y axilas en una adolescente con obesidad, ciclos irregulares y acné.\n\nEs un marcador cutáneo de hiperinsulinemia. Se evalúan glucemia, HbA1c, perfil lipídico y, por los ciclos irregulares y el acné, síndrome de ovario poliquístico. El tratamiento es el de la causa: cambios en el estilo de vida, pérdida de peso y, según el caso, metformina. La forma maligna (inicio súbito, extensa, en adultos delgados, con compromiso de mucosas o palmas) se asocia a adenocarcinoma gástrico.\n\n**Trampa del examen:** decirle a la paciente que es falta de aseo.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, 'cuello sucio' que no sale con jabón = acantosis. Mide la glucosa y la insulina, no la higiene.",
    keyPoints: [
      "Acantosis nigricans: marcador de resistencia a la insulina.",
      "Evaluar glucemia, HbA1c, lípidos y SOP.",
      "Forma maligna: adulto delgado, inicio súbito, cáncer gástrico.",
    ],
  }),
  q({
    id: "univalle-derm-58",
    examArea: "DERMATOLOGÍA",
    topic: "TUNGIASIS (NIGUA)",
    difficulty: "medium",
    tags: ["dermatologia", "tropical", "pediatria"],
    statement:
      "Un niño de 9 años de una vereda de Guapi (Cauca), que suele andar descalzo en suelo arenoso, presenta en el borde de la uña del primer dedo del pie una pápula blanquecina de 6 mm con un punto negro central, dolorosa y pruriginosa. ¿Cuál es el diagnóstico y el manejo?",
    options: [
      [
        "Verruga periungueal; crioterapia semanal.",
        "La verruga no tiene un punto negro central con halo blanquecino ni aparece en días en un niño descalzo en zona endémica.",
      ],
      [
        "Paroniquia bacteriana; drenaje y dicloxacilina.",
        "La paroniquia es una inflamación del pliegue ungueal con pus, sin el nódulo con punto negro central.",
      ],
      ["Tungiasis; extracción estéril de la pulga."],
      [
        "Melanoma subungueal; biopsia escisional.",
        "El punto negro es el extremo posterior de la pulga, no una lesión pigmentada melanocítica.",
      ],
    ],
    correct: "C",
    explanation:
      "Enfermedad: Tungiasis (nigua, Tunga penetrans).\n\nDato decisivo: pápula blanquecina con punto negro central en el pie (típicamente periungueal) de alguien que anda descalzo en suelo arenoso de zona rural tropical.\n\nLa hembra de la pulga se introduce en la piel y crece con sus huevos. Manejo: extracción estéril y completa de la pulga con aguja o curetaje, antiséptico, profilaxis antitetánica y antibiótico si hay sobreinfección. Prevención: calzado cerrado y control en animales y viviendas. Es frecuente en zonas rurales del Pacífico colombiano.\n\n**Trampa del examen:** confundir el punto negro con melanoma o verruga.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, niño descalzo del Pacífico con bolita blanca y punto negro en el dedo = nigua. Sácala completa y pon la antitetánica.",
    keyPoints: [
      "Tungiasis: pápula blanca con punto negro en el pie.",
      "Extracción estéril completa + antitetánica.",
      "Prevención: calzado cerrado.",
    ],
  }),
  q({
    id: "univalle-derm-59",
    examArea: "DERMATOLOGÍA",
    topic: "LARVA MIGRANS CUTÁNEA",
    difficulty: "easy",
    tags: ["dermatologia", "tropical"],
    statement:
      "Una mujer de 28 años regresa de una semana en la playa de Ladrilleros (Buenaventura), donde caminó descalza por la arena. Desde hace 5 días tiene en la planta del pie un trayecto eritematoso, elevado y serpiginoso, muy pruriginoso, que avanza unos centímetros cada día. ¿Cuál es el diagnóstico y el tratamiento?",
    options: [
      [
        "Dermatitis por medusa; corticoide tópico.",
        "La lesión por medusa aparece de inmediato tras el contacto en el agua y no avanza día a día.",
      ],
      [
        "Tiña pedis; terbinafina tópica por 2 semanas.",
        "La tiña pedis da descamación interdigital o plantar, no un trayecto serpiginoso que avanza.",
      ],
      [
        "Escabiosis; permetrina al 5% a convivientes.",
        "La escabiosis da surcos cortos en manos y pliegues, no un trayecto largo y migratorio en el pie.",
      ],
      ["Larva migrans; albendazol o ivermectina."],
    ],
    correct: "D",
    explanation:
      "Enfermedad: Larva migrans cutánea (larvas de Ancylostoma de perros y gatos).\n\nDato decisivo: trayecto serpiginoso, pruriginoso y migratorio en la piel expuesta a arena contaminada con heces de animales (playas).\n\nEl ser humano es un huésped accidental: la larva no completa su ciclo y migra por la epidermis. Tratamiento: albendazol oral (400 mg/día por 3 a 7 días) o ivermectina en dosis única. La crioterapia no se recomienda porque la larva suele estar por delante del trayecto visible. Prevención: calzado en la arena.\n\n**Trampa del examen:** tratarla como tiña o escabiosis.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, 'gusano bajo la piel' que dibuja un camino y avanza después de ir a la playa = larva migrans. Albendazol o ivermectina.",
    keyPoints: [
      "Trayecto serpiginoso migratorio tras playa = larva migrans.",
      "Tratamiento: albendazol o ivermectina.",
      "Prevención: calzado en la arena.",
    ],
  }),
  q({
    id: "univalle-derm-60",
    examArea: "DERMATOLOGÍA",
    topic: "MIASIS FORUNCULOIDE (NUCHE)",
    difficulty: "medium",
    tags: ["dermatologia", "tropical"],
    statement:
      "Un campesino de 45 años de zona rural del Valle del Cauca tiene desde hace 3 semanas un nódulo de 1,5 cm en el cuero cabelludo, parecido a un forúnculo, con un orificio central por el que sale líquido seroso. Dice que siente 'que algo se mueve' y le da punzadas. No tiene fiebre. ¿Cuál es el diagnóstico y el manejo?",
    options: [
      [
        "Forúnculo; incisión, drenaje y antibiótico oral.",
        "No hay pus ni fluctuación típica; el orificio central con movimiento sugiere una larva.",
      ],
      ["Miasis; ocluir el orificio y extraer la larva."],
      [
        "Quiste epidérmico infectado; resección completa.",
        "El quiste no produce sensación de movimiento ni punzadas con salida serosa.",
      ],
      [
        "Leishmaniasis cutánea; antimoniato de meglumina.",
        "La leishmaniasis es una úlcera indolora, no un nódulo con orificio y movimiento.",
      ],
    ],
    correct: "B",
    explanation:
      "Enfermedad: Miasis forunculoide (Dermatobia hominis, conocida en Colombia como 'nuche' o 'tórsalo').\n\nDato decisivo: nódulo forunculoide con un orificio central (por donde respira la larva), salida serosa, punzadas y sensación de movimiento.\n\nLa mosca deposita sus huevos sobre un mosquito u otro insecto, que los lleva a la piel humana. Manejo: ocluir el orificio con vaselina o esparadrapo para que la larva asome por falta de aire y extraerla completa, o retirarla por una pequeña incisión. No se debe exprimir, porque se puede romper la larva y causar inflamación. Profilaxis antitetánica.\n\n**Trampa del examen:** tratarla como un forúnculo solo con antibiótico.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, 'forúnculo' con un hueco en el centro y algo que se mueve = nuche. Tápale la respiración y sácalo entero.",
    keyPoints: [
      "Nódulo con orificio central y movimiento = miasis forunculoide.",
      "Ocluir el orificio y extraer la larva completa.",
      "No exprimir; profilaxis antitetánica.",
    ],
  }),
];
