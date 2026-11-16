import { buildUnivalleQuestion as q } from "./build-question";

/** Ruta Dermatología Univalle · #21–#30 (pediatría, inflamatorias y piel en enfermedad sistémica). */
export const UNIVALLE_DERMATOLOGIA_21_30 = [
  q({
    id: "univalle-derm-21",
    examArea: "DERMATOLOGÍA",
    topic: "DERMATITIS ATÓPICA",
    difficulty: "easy",
    tags: ["dermatologia", "pediatria"],
    statement:
      "Un lactante de 7 meses tiene desde hace 2 meses placas eritematosas, exudativas y muy pruriginosas en las mejillas y las superficies extensoras de los brazos, que respetan la zona del pañal. Duerme mal por el rascado. La madre tiene asma y rinitis alérgica. No hay signos de sobreinfección. ¿Cuál es el manejo inicial más adecuado?",
    options: [
      [
        "Emolientes diarios, baños cortos con syndet, y corticoide tópico de baja potencia en los brotes.",
      ],
      [
        "Dieta de eliminación de leche, huevo y trigo a la madre lactante.",
        "Las dietas de eliminación empíricas no se recomiendan sin una alergia alimentaria demostrada; pueden comprometer la nutrición.",
      ],
      [
        "Prednisolona oral por 10 días.",
        "Los corticoides sistémicos no se usan en el manejo habitual de la dermatitis atópica por el rebote y los efectos adversos.",
      ],
      [
        "Clobetasol tópico en cara dos veces al día por 4 semanas.",
        "Un corticoide de muy alta potencia en la cara de un lactante produce atrofia, telangiectasias y absorción sistémica.",
      ],
    ],
    correct: "A",
    explanation:
      "Enfermedad sospechada: Dermatitis atópica del lactante.\n\nDato decisivo: prurito + distribución típica por edad (mejillas y zonas extensoras en el lactante, respetando el pañal) + antecedente familiar de atopia.\n\nLa base del tratamiento es reparar la barrera cutánea: emolientes diarios (aun sin brote), baños cortos con agua tibia y limpiadores sin jabón. Los brotes se tratan con corticoide tópico de potencia adecuada a la zona y la edad (baja potencia en cara y pliegues), y los inhibidores de calcineurina tópicos son alternativa en cara. La terapia 'proactiva' (corticoide 2 veces por semana en zonas de recaída) disminuye los brotes. Las formas graves refractarias se manejan con fototerapia, inmunosupresores o biológicos (dupilumab).\n\n**Trampa del examen:** creer que la dermatitis atópica es una alergia alimentaria y retirar alimentos.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, en atopia, la crema humectante es el medicamento. El esteroide apaga el incendio, el emoliente evita el siguiente.",
    keyPoints: [
      "Lactante: mejillas y extensoras; niño mayor: flexuras.",
      "Pilar: emolientes diarios y cuidado de la barrera.",
      "Brotes: corticoide tópico de potencia adecuada a la zona.",
    ],
  }),
  q({
    id: "univalle-derm-22",
    examArea: "DERMATOLOGÍA",
    topic: "HEMANGIOMA INFANTIL",
    difficulty: "medium",
    tags: ["dermatologia", "pediatria"],
    statement:
      "Una lactante de 10 semanas presenta una lesión roja brillante, sobreelevada y lobulada, de 2,5 cm, en el párpado superior derecho, que no estaba al nacer y ha crecido rápidamente en el último mes. Ya cubre parcialmente el eje visual. ¿Cuál es la conducta más adecuada?",
    options: [
      [
        "Observación, porque todos los hemangiomas involucionan solos.",
        "La mayoría involuciona, pero los periorbitarios que obstruyen el eje visual pueden causar ambliopía permanente; requieren tratamiento temprano.",
      ],
      [
        "Resección quirúrgica urgente de la lesión.",
        "La cirugía en una lactante y en el párpado no es la primera línea; el propranolol es muy eficaz y menos mórbido.",
      ],
      [
        "Propranolol oral, con valoración pediátrica previa y control oftalmológico.",
      ],
      [
        "Láser ablativo de CO₂ inmediato.",
        "El láser (de colorante pulsado) se reserva para lesiones superficiales o secuelas; no es el tratamiento de una lesión proliferativa que amenaza la visión.",
      ],
    ],
    correct: "C",
    explanation:
      "Enfermedad sospechada: Hemangioma infantil en fase proliferativa con riesgo funcional.\n\nDato decisivo: lesión ausente al nacer, que crece rápido en las primeras semanas (la mayor proliferación ocurre antes de los 3–5 meses), en el párpado y obstruyendo el eje visual.\n\nIndicaciones de tratamiento: riesgo funcional (ojo, vía aérea, alimentación), ulceración, riesgo de desfiguración (nariz, labio) o hemangiomas múltiples con riesgo hepático. El tratamiento de elección es el propranolol oral (≈2–3 mg/kg/día), iniciado cuanto antes, vigilando hipoglucemia, bradicardia, hipotensión y broncoespasmo. Los hemangiomas segmentarios grandes de la cara obligan a descartar síndrome PHACE.\n\n**Trampa del examen:** 'todos involucionan, solo observar'. Un ojo tapado durante semanas en un lactante pierde visión para siempre.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, hemangioma que tapa el ojo, la nariz o la vía aérea = propranolol ya. El reloj de la ambliopía corre en semanas.",
    keyPoints: [
      "Hemangioma infantil: aparece después del nacimiento y prolifera en los primeros meses.",
      "Tratar si hay riesgo funcional, úlcera o desfiguración.",
      "Primera línea: propranolol oral.",
    ],
  }),
  q({
    id: "univalle-derm-23",
    examArea: "DERMATOLOGÍA",
    topic: "SÍNDROME DE PIEL ESCALDADA ESTAFILOCÓCICA",
    difficulty: "medium",
    tags: ["dermatologia", "pediatria", "infectologia"],
    statement:
      "Un niño de 3 años presenta fiebre, irritabilidad y eritema doloroso que inició alrededor de la boca y en los pliegues, y en 24 horas evolucionó a ampollas flácidas que se desprenden en grandes láminas dejando una superficie húmeda. Tiene costras alrededor de la boca y la nariz. El signo de Nikolsky es positivo. La mucosa oral y las conjuntivas están respetadas. ¿Cuál es el mecanismo y el tratamiento?",
    options: [
      [
        "Necrosis de la epidermis por reacción a medicamento; suspender fármacos e inmunoglobulina IV.",
        "La NET compromete las mucosas y la necrosis es de espesor total; aquí las mucosas están respetadas y hay un foco estafilocócico.",
      ],
      [
        "Toxinas exfoliativas de Staphylococcus aureus que rompen la desmogleína 1; antibiótico antiestafilocócico IV y cuidados de soporte.",
      ],
      [
        "Autoanticuerpos contra desmogleína 3; corticoide sistémico.",
        "Eso describe el pénfigo vulgar, raro en niños y con compromiso mucoso.",
      ],
      [
        "Infección por virus coxsackie; manejo sintomático ambulatorio.",
        "La enfermedad mano-pie-boca da vesículas pequeñas en manos, pies y boca, no desprendimiento laminar de la piel.",
      ],
    ],
    correct: "B",
    explanation:
      "Enfermedad sospechada: Síndrome de piel escaldada estafilocócica (SSSS).\n\nDato decisivo: niño menor de 5 años + eritema doloroso periorificial y de pliegues + desprendimiento superficial + Nikolsky positivo + mucosas respetadas.\n\nLas toxinas exfoliativas A y B de S. aureus (desde un foco a distancia, como un impétigo o una conjuntivitis) cortan la desmogleína 1 en la capa granulosa. Por eso el despegamiento es superficial (subcorneal) y no afecta las mucosas (que expresan sobre todo desmogleína 3). Es más frecuente en niños pequeños y en adultos con falla renal (no depuran la toxina). Tratamiento: antibiótico antiestafilocócico IV (oxacilina o cefazolina; vancomicina si se sospecha SARM), líquidos, analgesia y cuidado de la piel.\n\n**Trampa del examen:** confundirlo con NET. Clave: mucosas respetadas y edad pediátrica = SSSS.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, niño que parece quemado con agua hirviendo, pero con la boca por dentro sana = estafilococo y su toxina. Antibiótico, no esteroide.",
    keyPoints: [
      "SSSS: toxinas exfoliativas de S. aureus contra desmogleína 1.",
      "Mucosas respetadas (diferencia con NET).",
      "Tratamiento: antiestafilocócico IV + soporte.",
    ],
  }),
  q({
    id: "univalle-derm-24",
    examArea: "DERMATOLOGÍA",
    topic: "HERPES ZÓSTER OFTÁLMICO",
    difficulty: "medium",
    tags: ["dermatologia", "infectologia", "oftalmologia"],
    statement:
      "Una mujer de 72 años presenta desde hace 36 horas dolor urente en la frente izquierda, seguido de vesículas agrupadas sobre base eritematosa en la frente, el párpado superior izquierdo y la punta de la nariz. Las lesiones no cruzan la línea media. ¿Cuál es la conducta más adecuada?",
    options: [
      [
        "Aciclovir tópico y analgésico; no requiere más estudios.",
        "El tratamiento tópico no es suficiente y la lesión en la punta nasal obliga a evaluar el ojo.",
      ],
      [
        "Corticoide oral solo, para prevenir la neuralgia postherpética.",
        "El corticoide sin antiviral no está indicado; el antiviral es el tratamiento principal.",
      ],
      [
        "Esperar a que las vesículas se costricen antes de iniciar cualquier tratamiento.",
        "El antiviral es más útil en las primeras 72 horas; no se debe retrasar.",
      ],
      [
        "Antiviral oral (valaciclovir o aciclovir) de inmediato y valoración oftalmológica urgente.",
      ],
    ],
    correct: "D",
    explanation:
      "Enfermedad sospechada: Herpes zóster oftálmico (rama V1 del trigémino) con signo de Hutchinson.\n\nDato decisivo: vesículas en la punta de la nariz (nervio nasociliar), que predicen compromiso ocular (queratitis, uveítis).\n\nTratamiento: antiviral oral dentro de las 72 horas (valaciclovir 1 g cada 8 horas o aciclovir 800 mg 5 veces al día, por 7 días), analgesia y valoración oftalmológica urgente. En inmunosuprimidos o con compromiso ocular grave puede requerirse aciclovir IV. La vacuna recombinante contra el zóster previene el cuadro y la neuralgia postherpética en mayores de 50 años.\n\n**Trampa del examen:** tratar la piel y olvidar el ojo.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, vesícula en la punta de la nariz = mira el ojo. Hutchinson te está avisando que el nasociliar también está tomado.",
    keyPoints: [
      "Signo de Hutchinson (punta nasal) = riesgo de compromiso ocular.",
      "Antiviral oral en las primeras 72 horas.",
      "Valoración oftalmológica urgente.",
    ],
  }),
  q({
    id: "univalle-derm-25",
    examArea: "DERMATOLOGÍA",
    topic: "FASCITIS NECROSANTE",
    difficulty: "hard",
    tags: ["dermatologia", "cirugia", "urgencias"],
    statement:
      "Un hombre de 56 años con diabetes mal controlada consulta por dolor intenso en la pierna izquierda de 18 horas, tras una pequeña herida con alambre. Hay eritema mal definido y edema, pero el dolor es desproporcionado para lo que se ve, y se extiende más allá del eritema. Se palpa crepitación y hay una ampolla violácea. Presión arterial 88/54 mmHg, FC 124 lpm, temperatura 38,9 °C. ¿Cuál es la conducta prioritaria?",
    options: [
      [
        "Cefalexina oral, elevación de la pierna y control en 48 horas.",
        "Un manejo ambulatorio de celulitis es inadecuado ante signos de infección necrosante y choque séptico.",
      ],
      [
        "Esperar el resultado de la resonancia magnética antes de decidir la cirugía.",
        "Las imágenes no deben retrasar la cirugía cuando la sospecha clínica es alta; el retraso aumenta la mortalidad.",
      ],
      [
        "Reanimación, antibióticos IV de amplio espectro y desbridamiento quirúrgico urgente.",
      ],
      [
        "Drenaje con aguja de la ampolla y antibiótico tópico.",
        "La infección está en la fascia; el manejo local de la ampolla no la trata.",
      ],
    ],
    correct: "C",
    explanation:
      "Enfermedad sospechada: Fascitis necrosante con choque séptico.\n\nDato decisivo: dolor desproporcionado a los hallazgos, crepitación, ampollas violáceas o hemorrágicas, e inestabilidad hemodinámica en un paciente diabético.\n\nEs una urgencia quirúrgica. El tratamiento definitivo es el desbridamiento quirúrgico agresivo y temprano (con revisiones a las 24–48 horas), junto con reanimación y antibióticos de amplio espectro (por ejemplo, piperacilina-tazobactam o carbapenémico + vancomicina + clindamicina para bloquear la producción de toxinas). La escala LRINEC puede apoyar, pero no descarta.\n\n**Trampa del examen:** tratarla como una celulitis o esperar imágenes.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, cuando el paciente se queja mucho más de lo que tú ves, cree en el paciente. Dolor desproporcionado + crepitación = quirófano, no consultorio.",
    keyPoints: [
      "Dolor desproporcionado + crepitación + ampollas violáceas = fascitis necrosante.",
      "Tratamiento: desbridamiento quirúrgico urgente + antibióticos de amplio espectro.",
      "No retrasar la cirugía por imágenes.",
    ],
  }),
  q({
    id: "univalle-derm-26",
    examArea: "DERMATOLOGÍA",
    topic: "ANGIOEDEMA POR IECA",
    difficulty: "medium",
    tags: ["dermatologia", "urgencias", "farmacologia"],
    statement:
      "Un hombre de 60 años, hipertenso, en tratamiento con enalapril desde hace 2 años, consulta por edema de labios y lengua de 4 horas de evolución, sin habones ni prurito. Está estable, sin estridor ni dificultad respiratoria. Recibió en otro centro difenhidramina e hidrocortisona sin mejoría. ¿Cuál es el mecanismo y la medida más importante?",
    options: [
      [
        "Liberación de histamina por mastocitos; aumentar la dosis de antihistamínico.",
        "La ausencia de habones y prurito, y la falta de respuesta a antihistamínicos y corticoides, apuntan a un mecanismo no histaminérgico.",
      ],
      [
        "Acumulación de bradicinina; suspender definitivamente el IECA y vigilar la vía aérea.",
      ],
      [
        "Reacción de hipersensibilidad tipo IV; corticoide tópico.",
        "Las reacciones tipo IV son tardías y eccematosas, no producen angioedema agudo de labios y lengua.",
      ],
      [
        "Déficit adquirido de IgE; cambiar a otro IECA de vida media más corta.",
        "El efecto es de clase: ningún IECA es seguro después de un angioedema por IECA.",
      ],
    ],
    correct: "B",
    explanation:
      "Enfermedad sospechada: Angioedema por inhibidores de la enzima convertidora de angiotensina (IECA).\n\nDato decisivo: angioedema sin urticaria ni prurito, en un paciente con IECA (puede aparecer incluso años después de iniciarlo), sin respuesta a antihistamínicos ni corticoides.\n\nLa ECA también degrada la bradicinina; al inhibirla, la bradicinina se acumula y produce angioedema. Manejo: asegurar la vía aérea (es lo que mata), suspender el IECA de por vida y cambiar de familia de antihipertensivo. Los antihistamínicos, corticoides y la adrenalina sirven poco. En casos graves se han usado icatibant (antagonista del receptor B2 de bradicinina) o plasma fresco congelado.\n\n**Trampa del examen:** tratarlo como una urticaria alérgica.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, boca hinchada sin ronchas en un hipertenso con 'pril' = bradicinina. Quita el IECA y vigila la vía aérea.",
    keyPoints: [
      "Angioedema sin habones + IECA = mediado por bradicinina.",
      "No responde a antihistamínicos ni corticoides.",
      "Suspender el IECA de por vida; vigilar la vía aérea.",
    ],
  }),
  q({
    id: "univalle-derm-27",
    examArea: "DERMATOLOGÍA",
    topic: "ERITEMA NUDOSO",
    difficulty: "medium",
    tags: ["dermatologia", "medicina-interna"],
    statement:
      "Una mujer de 28 años presenta nódulos eritematosos, calientes y dolorosos en ambas regiones pretibiales, de 2 semanas de evolución, que no se ulceran. Tuvo faringitis hace 3 semanas. Tiene artralgias en los tobillos. Toma anticonceptivos orales. ¿Cuál de los siguientes estudios es más importante solicitar para el enfoque etiológico?",
    options: [
      [
        "Radiografía de tórax, además de ASLO, frotis faríngeo y prueba de tuberculina o IGRA.",
      ],
      [
        "Biopsia de médula ósea.",
        "No está indicada en el estudio inicial del eritema nudoso.",
      ],
      [
        "Anticuerpos anti-Ro y anti-La.",
        "Se asocian a lupus cutáneo subagudo y síndrome de Sjögren, no son estudio de rutina del eritema nudoso.",
      ],
      [
        "Ecografía Doppler venoso de miembros inferiores como único estudio.",
        "Puede descartar trombosis si hay dudas, pero no aclara la causa del eritema nudoso.",
      ],
    ],
    correct: "A",
    explanation:
      "Enfermedad sospechada: Eritema nudoso (paniculitis septal sin vasculitis).\n\nDato decisivo: nódulos pretibiales dolorosos, bilaterales, que no se ulceran y se resuelven sin cicatriz.\n\nEs una reacción de hipersensibilidad. Causas: infección estreptocócica (la más frecuente), tuberculosis, sarcoidosis (síndrome de Löfgren: eritema nudoso + adenopatías hiliares bilaterales + artritis de tobillos), enfermedad inflamatoria intestinal, embarazo, anticonceptivos orales, sulfas, y en nuestro medio micosis endémicas e incluso lepra (eritema nudoso leproso). La radiografía de tórax es clave: busca adenopatías hiliares (sarcoidosis) o tuberculosis. Tratamiento: el de la causa, reposo, elevación y AINE.\n\n**Trampa del examen:** omitir la radiografía de tórax.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, nudos dolorosos en las espinillas = radiografía de tórax siempre. Ahí aparecen la tuberculosis y la sarcoidosis.",
    keyPoints: [
      "Eritema nudoso: paniculitis septal, nódulos pretibiales, sin úlcera ni cicatriz.",
      "Causas: estreptococo, TB, sarcoidosis, EII, embarazo, ACO.",
      "Radiografía de tórax obligatoria (Löfgren, TB).",
    ],
  }),
  q({
    id: "univalle-derm-28",
    examArea: "DERMATOLOGÍA",
    topic: "DERMATOMIOSITIS",
    difficulty: "hard",
    tags: ["dermatologia", "reumatologia", "oncologia"],
    statement:
      "Una mujer de 57 años consulta por dificultad para subir escaleras y peinarse de 2 meses de evolución. Presenta eritema violáceo en ambos párpados superiores con edema, pápulas eritemato-violáceas sobre las articulaciones metacarpofalángicas e interfalángicas, y eritema en 'V' del escote. La CPK está en 2.800 U/L. Además de iniciar el tratamiento, ¿qué estudio es indispensable en esta paciente?",
    options: [
      [
        "Búsqueda de neoplasia oculta (incluida la evaluación de ovario, mama, pulmón y tracto gastrointestinal).",
      ],
      [
        "Electroencefalograma.",
        "No aporta al enfoque de una miopatía inflamatoria.",
      ],
      [
        "Prueba de sudor con cloruros.",
        "Es una prueba para fibrosis quística, sin relación con este cuadro.",
      ],
      [
        "Biopsia de piel para descartar lupus discoide como único estudio.",
        "El cuadro clínico ya es característico de dermatomiositis; el estudio indispensable en el adulto es la búsqueda de cáncer.",
      ],
    ],
    correct: "A",
    explanation:
      "Enfermedad sospechada: Dermatomiositis del adulto.\n\nDato decisivo: debilidad muscular proximal + CPK elevada + eritema heliotropo + pápulas de Gottron + signo de la 'V' o del chal.\n\nEn el adulto la dermatomiositis puede ser paraneoplásica (riesgo aumentado de cáncer en los primeros años, sobre todo de ovario, pulmón, mama, páncreas, colon y estómago). Por eso se debe buscar una neoplasia oculta al diagnóstico y durante el seguimiento. También hay que evaluar el compromiso pulmonar intersticial (los anti-MDA5 se asocian a enfermedad pulmonar rápidamente progresiva). Tratamiento: corticoides sistémicos con un ahorrador (metotrexato, azatioprina, micofenolato) e inmunoglobulina IV en casos refractarios.\n\n**Trampa del examen:** tratar la piel y el músculo y olvidar el cáncer.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, párpados morados + nudillos con pápulas + no puede peinarse = dermatomiositis. En el adulto, la siguiente pregunta siempre es: ¿dónde está el tumor?",
    keyPoints: [
      "Heliotropo + Gottron + debilidad proximal + CPK alta = dermatomiositis.",
      "En el adulto: búsqueda de neoplasia oculta.",
      "Evaluar enfermedad pulmonar intersticial (anti-MDA5).",
    ],
  }),
  q({
    id: "univalle-derm-29",
    examArea: "DERMATOLOGÍA",
    topic: "PITIRIASIS VERSICOLOR",
    difficulty: "easy",
    tags: ["dermatologia", "micosis-superficial"],
    statement:
      "Un estudiante de 20 años, de Cali, consulta por manchas hipocrómicas y algunas color café claro, en el tronco y los hombros, que se hicieron más notorias después de ir a la playa. Tienen una descamación fina que se evidencia al rascar con la uña (signo de la uñada). El examen con KOH muestra hifas cortas y levaduras agrupadas en 'espagueti con albóndigas'. ¿Cuál es el agente y el tratamiento de primera línea?",
    options: [
      [
        "Trichophyton rubrum; terbinafina oral por 12 semanas.",
        "Trichophyton causa tiñas (con borde activo), no este patrón; el esquema de 12 semanas corresponde a onicomicosis.",
      ],
      [
        "Candida albicans; nistatina oral.",
        "Candida afecta pliegues y mucosas; la nistatina oral no se absorbe y no trata la piel del tronco.",
      ],
      [
        "Malassezia spp.; antifúngico tópico (ketoconazol, sulfuro de selenio o un azol) y explicar que la pigmentación tarda en normalizarse.",
      ],
      [
        "Corynebacterium minutissimum; eritromicina oral.",
        "Corynebacterium causa el eritrasma de los pliegues (fluorescencia rojo coral), no esta imagen en el KOH.",
      ],
    ],
    correct: "C",
    explanation:
      "Enfermedad sospechada: Pitiriasis versicolor (Malassezia spp.).\n\nDato decisivo: máculas hipo o hipercrómicas con descamación fina en el tronco de un adulto joven, en clima cálido y húmedo, con la imagen de 'espagueti con albóndigas' en el KOH.\n\nEs muy frecuente en climas cálidos como el del Valle del Cauca. Tratamiento: antifúngicos tópicos (champú de ketoconazol o de sulfuro de selenio aplicado en el cuerpo, o cremas azólicas). En formas extensas o recurrentes: azoles orales (itraconazol o fluconazol). La hipopigmentación puede persistir semanas a meses aunque el hongo ya se haya erradicado; eso no es falla del tratamiento. Las recaídas son frecuentes: se puede hacer profilaxis tópica periódica.\n\n**Trampa del examen:** confundirla con vitíligo (en el vitíligo la mancha es acrómica, sin descamación) o pensar que persiste la infección porque persiste la mancha.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, manchas en la espalda que 'aparecen' después del sol en un paciente de tierra caliente = Malassezia. Rasca con la uña: si descama, es versicolor.",
    keyPoints: [
      "Pitiriasis versicolor: Malassezia; 'espagueti con albóndigas' en el KOH.",
      "Primera línea: antifúngico tópico; extensas: azol oral.",
      "La hipopigmentación residual no es fracaso del tratamiento.",
    ],
  }),
  q({
    id: "univalle-derm-30",
    examArea: "DERMATOLOGÍA",
    topic: "ÚLCERA DE MARJOLIN",
    difficulty: "hard",
    tags: ["dermatologia", "oncologia", "cirugia"],
    statement:
      "Un hombre de 64 años tiene en la pierna una cicatriz de quemadura de la infancia. Desde hace 8 meses presenta en ella una úlcera que no cicatriza a pesar de curaciones, con bordes evertidos e indurados, tejido friable y sangrado fácil. Se palpa una adenopatía inguinal ipsilateral de 2 cm. ¿Cuál es el diagnóstico más probable y el paso siguiente?",
    options: [
      [
        "Úlcera venosa; vendaje compresivo y control en 3 meses.",
        "Las úlceras venosas suelen localizarse en el maléolo medial con dermatitis ocre; no tienen bordes evertidos ni indurados ni adenopatía.",
      ],
      [
        "Carcinoma escamocelular sobre cicatriz crónica (úlcera de Marjolin); biopsia de la úlcera, incluyendo el borde.",
      ],
      [
        "Pioderma gangrenoso; corticoide sistémico sin biopsia.",
        "El pioderma gangrenoso tiene bordes socavados y violáceos; además, una úlcera crónica con estas características debe biopsiarse antes de inmunosuprimir.",
      ],
      [
        "Leishmaniasis cutánea; antimoniales.",
        "No hay antecedente epidemiológico y el contexto de cicatriz por quemadura con bordes evertidos sugiere malignidad.",
      ],
    ],
    correct: "B",
    explanation:
      "Enfermedad sospechada: Úlcera de Marjolin (carcinoma escamocelular sobre cicatriz o úlcera crónica).\n\nDato decisivo: úlcera que aparece años o décadas después sobre una cicatriz de quemadura, con bordes evertidos e indurados, sangrado fácil y adenopatía regional.\n\nLas cicatrices de quemaduras, las úlceras crónicas, las fístulas de osteomielitis y las lesiones de enfermedades crónicas (como la cromoblastomicosis antigua) pueden malignizarse. El carcinoma escamocelular que surge allí es más agresivo y da metástasis ganglionares con más frecuencia. Ante toda úlcera crónica que no cicatriza o cambia de aspecto, se biopsia el borde (en varias zonas). El tratamiento es la escisión amplia y el manejo de la enfermedad ganglionar.\n\n**Trampa del examen:** seguir haciendo curaciones meses a una úlcera que no cierra.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, úlcera que no cierra en 3 meses = biopsia del borde. Sobre una cicatriz vieja de quemadura, piensa en Marjolin.",
    keyPoints: [
      "Úlcera crónica sobre cicatriz de quemadura = descartar carcinoma escamocelular (Marjolin).",
      "Biopsia del borde de toda úlcera crónica que no cicatriza.",
      "Es más agresivo y da metástasis ganglionares.",
    ],
  }),
];
