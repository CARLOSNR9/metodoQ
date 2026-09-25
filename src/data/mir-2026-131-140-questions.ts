import type { TrainingQuestion } from "@/lib/questions/types";

export const MIR_2026_131_140_QUESTIONS: TrainingQuestion[] = [
  {
    id: "mir-2026-131",
    university: "MIR (España)",
    examArea: "PEDIATRÍA",
    topic: "SOSPECHA DE MALTRATO INFANTIL",
    difficulty: "medium",
    tags: ["mir", "espana", "pediatria"],
    statement:
      "Un lactante de 4 meses es llevado a urgencias por irritabilidad. Los padres no refieren traumatismos. La exploración muestra hematomas en distintas fases de evolución en el tronco y la radiografía de tórax, fracturas de arcos costales posteriores en diferentes estadios de consolidación. ¿Cuál es la actitud más adecuada?",
    options: [
      { id: "A", label: "A", text: "Alta con analgesia y control por su pediatra." },
      { id: "B", label: "B", text: "Ingreso para protección del menor, serie ósea completa, fondo de ojo y neuroimagen, y comunicación a los servicios de protección y al juzgado." },
      { id: "C", label: "C", text: "Solicitar un estudio genético de osteogénesis imperfecta y esperar el resultado antes de actuar." },
      { id: "D", label: "D", text: "Confrontar a los padres y pedirles que expliquen las lesiones antes de cualquier otra medida." },
    ],
    correctOptionId: "B",
    explanation:
      "Las **fracturas costales posteriores**, las **fracturas en distintos estadios de consolidación** y los **hematomas de diferente evolución** en un lactante **sin traumatismo explicado** son muy sugestivos de **maltrato físico**. La prioridad es **proteger al menor** (ingreso hospitalario), completar el estudio (**serie ósea**, **fondo de ojo** y **neuroimagen** para descartar lesiones intracraneales, sobre todo en menores de 1 año) y **comunicarlo** obligatoriamente a los servicios de protección y a la autoridad judicial.\n\n**TRAMPA DEL EXAMEN:** Dar el alta expone al niño a nuevas lesiones. Las enfermedades que simulan maltrato (osteogénesis imperfecta, coagulopatías) deben valorarse, pero **no retrasan la protección**. El médico no investiga ni confronta: detecta, protege y comunica.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., un lactante que aún no gatea no se rompe las costillas por detrás solo. Ante una historia que no cuadra con las lesiones, su deber es proteger y notificar. No necesita certeza para comunicar una sospecha; necesita certeza de que el niño no vuelve a casa sin protección.",
    keyPoints: [
      "Sospecha de maltrato: lesiones no explicadas, fracturas costales posteriores o en distintos estadios, hematomas de diferente evolución.",
      "Proteger al menor (ingreso), serie ósea, fondo de ojo y neuroimagen en lactantes.",
      "La comunicación a protección de menores y al juzgado es obligatoria ante la sospecha.",
    ],
  },
  {
    id: "mir-2026-132",
    university: "MIR (España)",
    examArea: "PEDIATRÍA",
    topic: "DIAGNÓSTICO DE LA ENFERMEDAD CELÍACA",
    difficulty: "medium",
    tags: ["mir", "espana", "pediatria"],
    statement:
      "Una niña de 2 años presenta, desde la introducción del gluten, diarrea crónica, distensión abdominal, irritabilidad y estancamiento ponderal. Sigue una dieta normal con gluten. ¿Cuál es la primera prueba diagnóstica que se debe solicitar?",
    options: [
      { id: "A", label: "A", text: "Biopsia duodenal directamente, sin serología previa." },
      { id: "B", label: "B", text: "Retirar el gluten de la dieta y valorar la respuesta clínica." },
      { id: "C", label: "C", text: "Estudio genético HLA-DQ2/DQ8 como prueba diagnóstica única." },
      { id: "D", label: "D", text: "Anticuerpos antitransglutaminasa tisular de tipo IgA junto con la IgA sérica total." },
    ],
    correctOptionId: "D",
    explanation:
      "La primera prueba ante la sospecha de **enfermedad celíaca** son los **anticuerpos antitransglutaminasa tisular IgA (anti-TG2)**, siempre junto con la **IgA sérica total**, porque el **déficit de IgA** (más frecuente en celíacos) produce falsos negativos. En niños, si los anti-TG2 superan **10 veces el límite superior** y los **antiendomisio** son positivos en una segunda muestra, se puede diagnosticar **sin biopsia**; en el resto de casos se confirma con **biopsia duodenal**. Todo ello se hace **con gluten en la dieta**.\n\n**TRAMPA DEL EXAMEN:** Retirar el gluten antes del estudio negativiza la serología y normaliza la biopsia, lo que impide el diagnóstico. El **HLA-DQ2/DQ8** tiene un gran **valor predictivo negativo** (si es negativo, la enfermedad es muy improbable), pero un resultado positivo no diagnostica la enfermedad.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., la regla de oro: no quite el gluten hasta tener el diagnóstico. Pida antitransglutaminasa IgA con IgA total y, si la IgA total es baja, use anticuerpos de clase IgG. La genética le sirve sobre todo para descartar.",
    keyPoints: [
      "Primera prueba: anti-transglutaminasa IgA + IgA sérica total (el déficit de IgA da falsos negativos).",
      "En niños: anti-TG2 > 10 veces el límite + antiendomisio positivo → diagnóstico sin biopsia.",
      "Todo el estudio se realiza con gluten en la dieta; el HLA-DQ2/DQ8 negativo prácticamente la descarta.",
    ],
  },
  {
    id: "mir-2026-133",
    university: "MIR (España)",
    examArea: "APARATO DIGESTIVO",
    topic: "CONFIRMACIÓN DE LA ERRADICACIÓN DE HELICOBACTER PYLORI",
    difficulty: "medium",
    tags: ["mir", "espana", "digestivo"],
    statement:
      "Un paciente con úlcera duodenal e infección por Helicobacter pylori ha completado un tratamiento erradicador cuádruple con bismuto durante 10 días. ¿Cuál es la forma más adecuada de confirmar la erradicación?",
    options: [
      { id: "A", label: "A", text: "Prueba del aliento con urea marcada con C13, al menos 4 semanas después del tratamiento antibiótico y 2 semanas sin inhibidores de la bomba de protones." },
      { id: "B", label: "B", text: "Serología de Helicobacter pylori (IgG) al finalizar el tratamiento." },
      { id: "C", label: "C", text: "No es necesario confirmar la erradicación si el paciente está asintomático." },
      { id: "D", label: "D", text: "Prueba del aliento al día siguiente de terminar el tratamiento, sin suspender los inhibidores de la bomba de protones." },
    ],
    correctOptionId: "A",
    explanation:
      "Tras el tratamiento erradicador se debe **confirmar siempre la erradicación**. La prueba no invasiva de elección es la **prueba del aliento con urea marcada** (o el antígeno en heces monoclonal), realizada al menos **4 semanas después de terminar los antibióticos** y tras **2 semanas sin IBP**, para evitar falsos negativos. En España, los tratamientos de primera línea son la **cuádruple con bismuto** (10 días) o la **cuádruple concomitante sin bismuto** (14 días).\n\n**TRAMPA DEL EXAMEN:** La **serología** permanece positiva durante meses tras la erradicación y **no sirve para el control**. Los **IBP** y los antibióticos recientes reducen la carga bacteriana y producen **falsos negativos**. Estar asintomático no garantiza la erradicación.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., con el Helicobacter no basta con tratar: hay que comprobar. Y hay que hacerlo bien: un mes sin antibióticos y dos semanas sin omeprazol. Si no respeta los tiempos, la prueba puede salir negativa aunque la bacteria siga ahí.",
    keyPoints: [
      "Confirmar siempre la erradicación de H. pylori: prueba del aliento con urea o antígeno en heces.",
      "Realizarla ≥ 4 semanas tras los antibióticos y ≥ 2 semanas sin IBP (evitar falsos negativos).",
      "La serología no sirve para el control de la erradicación.",
    ],
  },
  {
    id: "mir-2026-134",
    university: "MIR (España)",
    examArea: "APARATO DIGESTIVO",
    topic: "DIFERENCIAS ENTRE ENFERMEDAD DE CROHN Y COLITIS ULCEROSA",
    difficulty: "medium",
    tags: ["mir", "espana", "digestivo"],
    statement:
      "Un joven de 22 años presenta diarrea crónica, dolor en fosa ilíaca derecha y pérdida de peso. En la colonoscopia se observan úlceras aftoides con afectación segmentaria y mucosa normal entre las lesiones, que alcanzan el íleon terminal. ¿Qué hallazgo histológico apoyaría más el diagnóstico de enfermedad de Crohn?",
    options: [
      { id: "A", label: "A", text: "Inflamación limitada a la mucosa, continua desde el recto." },
      { id: "B", label: "B", text: "Abscesos crípticos como único hallazgo." },
      { id: "C", label: "C", text: "Granulomas no caseificantes con afectación transmural." },
      { id: "D", label: "D", text: "Depleción de mucina en las células caliciformes." },
    ],
    correctOptionId: "C",
    explanation:
      "La **enfermedad de Crohn** puede afectar a cualquier tramo del tubo digestivo (sobre todo **íleon terminal**), con **afectación segmentaria** («en saltos»), **transmural** (lo que explica las **fístulas**, abscesos y estenosis) y **granulomas no caseificantes**, que son característicos aunque no aparecen en todos los casos. La **colitis ulcerosa** afecta solo al **colon**, de forma **continua desde el recto**, y limitada a la **mucosa**.\n\n**TRAMPA DEL EXAMEN:** Los **abscesos crípticos** y la **depleción de mucina** son más típicos de la colitis ulcerosa, aunque pueden verse en ambas. La afectación continua desde el recto y limitada a la mucosa es propia de la colitis ulcerosa.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., para distinguirlas piense en la profundidad y la continuidad. Crohn: de la boca al ano, a saltos, atraviesa toda la pared y hace fístulas. Colitis ulcerosa: solo colon, empieza en el recto, continua y superficial. Y el tabaco: empeora el Crohn, pero «protege» de la colitis ulcerosa.",
    keyPoints: [
      "Crohn: cualquier tramo (íleon terminal), segmentaria, transmural, fístulas y granulomas no caseificantes.",
      "Colitis ulcerosa: solo colon, continua desde el recto, limitada a la mucosa.",
      "El tabaco empeora el Crohn y se asocia inversamente a la colitis ulcerosa.",
    ],
  },
  {
    id: "mir-2026-135",
    university: "MIR (España)",
    examArea: "APARATO DIGESTIVO",
    topic: "INTERPRETACIÓN DE LA SEROLOGÍA DE HEPATITIS B",
    difficulty: "medium",
    tags: ["mir", "espana", "digestivo"],
    statement:
      "En el estudio preoperatorio de un paciente de 50 años se obtiene la siguiente serología de hepatitis B: HBsAg negativo, anti-HBs positivo y anti-HBc total positivo. Las transaminasas son normales. ¿Cuál es la interpretación correcta?",
    options: [
      { id: "A", label: "A", text: "Vacunación previa frente a la hepatitis B, sin contacto con el virus." },
      { id: "B", label: "B", text: "Infección pasada por el virus de la hepatitis B, resuelta, con inmunidad natural." },
      { id: "C", label: "C", text: "Hepatitis B crónica activa." },
      { id: "D", label: "D", text: "Hepatitis B aguda en periodo ventana." },
    ],
    correctOptionId: "B",
    explanation:
      "El **anti-HBc** solo aparece tras el **contacto con el virus** (la vacuna contiene únicamente HBsAg). **HBsAg negativo + anti-HBs positivo + anti-HBc positivo** indica una **infección pasada resuelta con inmunidad natural**. En la **vacunación** aparece **solo anti-HBs** (anti-HBc negativo). En la **infección crónica** el **HBsAg persiste más de 6 meses**. En el **periodo ventana** de la infección aguda, el HBsAg ya ha desaparecido y el anti-HBs aún no es detectable, siendo el **anti-HBc IgM** el único marcador positivo.\n\n**TRAMPA DEL EXAMEN:** Confundir la inmunidad natural con la vacunal: la clave es el anti-HBc. Recuerde además que estos pacientes pueden **reactivar** el virus con tratamientos inmunosupresores potentes (por ejemplo, rituximab), por lo que requieren vigilancia o profilaxis.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el anti-HBc es la «huella» de que el virus pasó por ahí; la vacuna no la deja. Anti-HBs solo: vacunado. Anti-HBs y anti-HBc: se curó solo. HBsAg positivo más de seis meses: crónico.",
    keyPoints: [
      "Anti-HBc positivo = contacto con el virus (la vacuna solo genera anti-HBs).",
      "HBsAg (−), anti-HBs (+), anti-HBc (+): infección pasada resuelta; solo anti-HBs (+): vacunado.",
      "Periodo ventana: anti-HBc IgM como único marcador; riesgo de reactivación con inmunosupresión.",
    ],
  },
  {
    id: "mir-2026-136",
    university: "MIR (España)",
    examArea: "APARATO DIGESTIVO",
    topic: "HEMOCROMATOSIS HEREDITARIA",
    difficulty: "medium",
    tags: ["mir", "espana", "digestivo"],
    statement:
      "Un varón de 45 años con astenia, artralgias en las segundas y terceras articulaciones metacarpofalángicas y diabetes de reciente diagnóstico presenta ferritina de 1.800 ng/ml y un índice de saturación de transferrina del 78%. ¿Cuál es el siguiente paso diagnóstico y el tratamiento de elección si se confirma?",
    options: [
      { id: "A", label: "A", text: "Biopsia hepática obligatoria en todos los casos y quelantes orales del hierro." },
      { id: "B", label: "B", text: "Suplementos de vitamina C y dieta rica en carne roja." },
      { id: "C", label: "C", text: "Resonancia cardíaca y trasplante hepático." },
      { id: "D", label: "D", text: "Estudio genético del gen HFE (mutación C282Y) y tratamiento con flebotomías periódicas." },
    ],
    correctOptionId: "D",
    explanation:
      "La **hemocromatosis hereditaria** (autosómica recesiva, gen **HFE**, homocigosis **C282Y** en la mayoría) produce sobrecarga de hierro con afectación **hepática** (cirrosis, hepatocarcinoma), **pancreática** (diabetes), **cutánea** (hiperpigmentación), **cardíaca** (miocardiopatía), **articular** (artropatía de 2.ª-3.ª metacarpofalángicas) y **gonadal**. Ante un **índice de saturación de transferrina > 45%** y ferritina elevada, se solicita el **estudio genético HFE**. El tratamiento de elección son las **flebotomías** periódicas hasta normalizar los depósitos.\n\n**TRAMPA DEL EXAMEN:** La **biopsia hepática** ya no es obligatoria: se reserva para valorar la fibrosis (por ejemplo, ferritina > 1.000 ng/ml o transaminasas elevadas). Los **quelantes** se usan en las sobrecargas secundarias (por ejemplo, en talasemias) o cuando no son posibles las flebotomías. La **vitamina C** aumenta la absorción de hierro.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., saturación de transferrina alta es la primera pista (la ferritina sola se eleva por muchas causas inflamatorias). Confirme con la genética y trate con sangrías: es un tratamiento barato, eficaz y que, si se inicia antes de la cirrosis, normaliza la esperanza de vida.",
    keyPoints: [
      "Hemocromatosis: IST > 45% + ferritina elevada → estudio genético HFE (C282Y).",
      "Tratamiento de elección: flebotomías periódicas; quelantes en sobrecargas secundarias.",
      "Biopsia hepática solo para valorar fibrosis (ferritina > 1.000 o transaminasas elevadas).",
    ],
  },
  {
    id: "mir-2026-137",
    university: "MIR (España)",
    examArea: "APARATO DIGESTIVO",
    topic: "CRIBADO POBLACIONAL DE CÁNCER COLORRECTAL",
    difficulty: "easy",
    tags: ["mir", "espana", "digestivo"],
    statement:
      "Un hombre de 58 años, sin síntomas digestivos ni antecedentes familiares de cáncer colorrectal, participa en el programa de cribado poblacional de su comunidad autónoma. La prueba de sangre oculta en heces inmunológica resulta positiva. ¿Cuál es el siguiente paso?",
    options: [
      { id: "A", label: "A", text: "Colonoscopia completa." },
      { id: "B", label: "B", text: "Repetir la prueba de sangre oculta en 2 años." },
      { id: "C", label: "C", text: "TC abdominal con contraste." },
      { id: "D", label: "D", text: "Determinación de CEA y, si es normal, no hacer nada." },
    ],
    correctOptionId: "A",
    explanation:
      "El **cribado poblacional de cáncer colorrectal** en España se dirige a personas de **50 a 69 años** sin factores de riesgo, con la **prueba de sangre oculta en heces inmunológica (SOHi)** cada **2 años**. Un **resultado positivo** obliga a realizar una **colonoscopia completa**, que permite diagnosticar y extirpar pólipos.\n\n**TRAMPA DEL EXAMEN:** Repetir la SOH tras un positivo retrasa un posible diagnóstico. El **CEA** es un marcador de seguimiento, no de diagnóstico ni de cribado. La TC no sustituye a la colonoscopia en el cribado.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., cribado de colon: de 50 a 69 años, sangre oculta cada dos años y, si sale positiva, colonoscopia. Los pacientes con antecedentes familiares o síndromes hereditarios no entran en este programa: siguen su propio protocolo de alto riesgo con colonoscopias.",
    keyPoints: [
      "Cribado de cáncer colorrectal en España: 50-69 años, SOH inmunológica cada 2 años.",
      "SOH positiva → colonoscopia completa.",
      "Alto riesgo (antecedentes familiares, síndromes hereditarios): protocolo específico con colonoscopia.",
    ],
  },
  {
    id: "mir-2026-138",
    university: "MIR (España)",
    examArea: "APARATO DIGESTIVO",
    topic: "ESÓFAGO DE BARRETT SIN DISPLASIA",
    difficulty: "medium",
    tags: ["mir", "espana", "digestivo"],
    statement:
      "Un varón de 55 años con reflujo gastroesofágico de larga evolución se somete a una gastroscopia, que muestra mucosa de aspecto asalmonado de 4 cm por encima de la unión gastroesofágica. Las biopsias confirman metaplasia intestinal sin displasia. ¿Cuál es la actitud más adecuada?",
    options: [
      { id: "A", label: "A", text: "Esofaguectomía." },
      { id: "B", label: "B", text: "Ablación endoscópica por radiofrecuencia de inmediato." },
      { id: "C", label: "C", text: "Tratamiento con inhibidores de la bomba de protones y vigilancia endoscópica con biopsias periódicas." },
      { id: "D", label: "D", text: "No precisa seguimiento, ya que no hay displasia." },
    ],
    correctOptionId: "C",
    explanation:
      "El **esófago de Barrett** es la sustitución del epitelio escamoso esofágico por **epitelio columnar con metaplasia intestinal**, consecuencia del **reflujo crónico**, y es el principal factor de riesgo del **adenocarcinoma de esófago**. **Sin displasia**, el manejo es **IBP** y **vigilancia endoscópica** con biopsias periódicas (cada **3-5 años** según la longitud del segmento). La **displasia de alto grado** o el cáncer intramucoso se tratan con **resección endoscópica y ablación**.\n\n**TRAMPA DEL EXAMEN:** La esofaguectomía y la ablación no están indicadas en el Barrett sin displasia. Pero sí necesita seguimiento, porque puede progresar a displasia y adenocarcinoma.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el Barrett es una alarma temprana, no un cáncer. Sin displasia: omeprazol y endoscopias periódicas. Lo que decide el tratamiento es la displasia, y la de alto grado se trata por vía endoscópica antes de que se convierta en adenocarcinoma.",
    keyPoints: [
      "Esófago de Barrett: metaplasia intestinal por reflujo crónico; riesgo de adenocarcinoma de esófago.",
      "Sin displasia: IBP y vigilancia endoscópica cada 3-5 años.",
      "Displasia de alto grado o cáncer intramucoso: resección endoscópica y ablación.",
    ],
  },
  {
    id: "mir-2026-139",
    university: "MIR (España)",
    examArea: "APARATO DIGESTIVO",
    topic: "PERITONITIS BACTERIANA ESPONTÁNEA",
    difficulty: "hard",
    tags: ["mir", "espana", "digestivo"],
    statement:
      "Un paciente con cirrosis hepática y ascitis ingresa por febrícula y dolor abdominal difuso. En la paracentesis diagnóstica el líquido ascítico tiene 480 polimorfonucleares/mm³ y el cultivo está pendiente. ¿Cuál es el tratamiento adecuado?",
    options: [
      { id: "A", label: "A", text: "Esperar al resultado del cultivo antes de iniciar antibióticos." },
      { id: "B", label: "B", text: "Cefalosporina de tercera generación intravenosa (por ejemplo, cefotaxima) y albúmina intravenosa." },
      { id: "C", label: "C", text: "Laparotomía exploradora urgente." },
      { id: "D", label: "D", text: "Paracentesis evacuadora total sin antibióticos." },
    ],
    correctOptionId: "B",
    explanation:
      "La **peritonitis bacteriana espontánea** se diagnostica con **≥ 250 polimorfonucleares/mm³** en el líquido ascítico, **sin esperar al cultivo** (a menudo negativo). El tratamiento empírico es una **cefalosporina de tercera generación** (cefotaxima o ceftriaxona) y **albúmina intravenosa** (días 1 y 3), que **reduce el síndrome hepatorrenal y la mortalidad**. Tras el episodio está indicada la **profilaxis secundaria** (norfloxacino u otras alternativas).\n\n**TRAMPA DEL EXAMEN:** Esperar al cultivo retrasa un tratamiento vital. La **laparotomía** es propia de la **peritonitis secundaria** (perforación), que se sospecha con líquido muy rico en proteínas, glucosa baja, LDH alta o flora polimicrobiana.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., a todo cirrótico con ascitis que ingresa, paracentesis diagnóstica. Si tiene 250 o más neutrófilos, trate ya: cefalosporina de tercera y albúmina. La albúmina no es un adorno: protege el riñón.",
    keyPoints: [
      "PBE: ≥ 250 PMN/mm³ en líquido ascítico (no esperar al cultivo).",
      "Tratamiento: cefalosporina de 3.ª generación + albúmina IV (reduce síndrome hepatorrenal y mortalidad).",
      "Profilaxis secundaria tras el episodio; sospechar peritonitis secundaria si hay datos de perforación.",
    ],
  },
  {
    id: "mir-2026-140",
    university: "MIR (España)",
    examArea: "MEDICINA PREVENTIVA",
    topic: "NIVELES DE PREVENCIÓN: PREVENCIÓN CUATERNARIA",
    difficulty: "easy",
    tags: ["mir", "espana", "preventiva"],
    statement:
      "Un médico de familia decide no solicitar una densitometría ni un PSA a un paciente de 80 años asintomático con demencia avanzada, al considerar que los posibles daños superan a los beneficios. ¿Qué nivel de prevención está aplicando?",
    options: [
      { id: "A", label: "A", text: "Prevención primaria." },
      { id: "B", label: "B", text: "Prevención secundaria." },
      { id: "C", label: "C", text: "Prevención terciaria." },
      { id: "D", label: "D", text: "Prevención cuaternaria." },
    ],
    correctOptionId: "D",
    explanation:
      "La **prevención cuaternaria** consiste en **evitar la sobremedicalización** y los daños de intervenciones innecesarias (pruebas, cribados o tratamientos cuyo balance beneficio-riesgo es desfavorable). La **primaria** evita la aparición de la enfermedad (vacunas, abandono del tabaco); la **secundaria** busca el diagnóstico precoz en fase asintomática (**cribados**); y la **terciaria** reduce las secuelas y complicaciones de una enfermedad ya establecida (rehabilitación).\n\n**TRAMPA DEL EXAMEN:** Confundir la prevención cuaternaria con la secundaria porque se habla de pruebas de cribado. Aquí la decisión es **no** hacerlas para proteger al paciente de daños.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., más medicina no siempre es mejor medicina. Un PSA en un paciente de 80 años con demencia avanzada puede desencadenar biopsias y tratamientos que solo añaden sufrimiento. Saber cuándo no hacer también es prevenir: eso es la prevención cuaternaria.",
    keyPoints: [
      "Primaria: evitar la enfermedad (vacunas); secundaria: diagnóstico precoz (cribados).",
      "Terciaria: reducir secuelas y complicaciones (rehabilitación).",
      "Cuaternaria: evitar la sobremedicalización y el daño de intervenciones innecesarias.",
    ],
  },
];
