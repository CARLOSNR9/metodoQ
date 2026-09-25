import type { TrainingQuestion } from "@/lib/questions/types";

export const MIR_2026_121_130_QUESTIONS: TrainingQuestion[] = [
  {
    id: "mir-2026-121",
    university: "MIR (España)",
    examArea: "OBSTETRICIA",
    topic: "ROTURA PREMATURA DE MEMBRANAS PRETÉRMINO",
    difficulty: "hard",
    tags: ["mir", "espana", "obstetricia"],
    statement:
      "Una gestante de 30 semanas acude por salida de líquido amniótico claro confirmada. No tiene dinámica uterina, está afebril, la analítica no muestra signos de infección y el registro fetal es normal. ¿Cuál es el manejo más adecuado?",
    options: [
      { id: "A", label: "A", text: "Inducción inmediata del parto." },
      { id: "B", label: "B", text: "Alta domiciliaria con reposo y control en una semana." },
      { id: "C", label: "C", text: "Cesárea urgente para evitar la infección." },
      { id: "D", label: "D", text: "Ingreso con manejo expectante: corticoides para la maduración pulmonar, antibioterapia profiláctica y sulfato de magnesio para neuroprotección fetal si se prevé el parto." },
    ],
    correctOptionId: "D",
    explanation:
      "En la **rotura prematura de membranas pretérmino** sin infección, sin dinámica y con bienestar fetal conservado, antes de las 34 semanas se opta por un **manejo expectante hospitalario** para ganar madurez fetal: **corticoides** (maduración pulmonar), **antibioterapia profiláctica** (prolonga el periodo de latencia y reduce la infección) y **sulfato de magnesio** como **neuroprotector fetal** si el parto es inminente antes de las 32 semanas. Se vigilan signos de **corioamnionitis** (fiebre, taquicardia materna o fetal, dolor uterino, leucocitosis).\n\n**TRAMPA DEL EXAMEN:** Finalizar la gestación a las 30 semanas sin infección ni sufrimiento fetal expone al recién nacido a los riesgos de la prematuridad. El alta domiciliaria no es adecuada por el riesgo de infección y parto.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., con bolsa rota lejos del término, cada día dentro del útero cuenta. Ingrese, corticoides, antibiótico y vigile la infección como un halcón. Si aparece corioamnionitis, ya no hay nada que esperar: se finaliza, sea cual sea la edad gestacional.",
    keyPoints: [
      "RPM pretérmino < 34 semanas sin infección: manejo expectante hospitalario.",
      "Corticoides, antibioterapia profiláctica y sulfato de magnesio neuroprotector (< 32 semanas si parto inminente).",
      "La corioamnionitis obliga a finalizar la gestación.",
    ],
  },
  {
    id: "mir-2026-122",
    university: "MIR (España)",
    examArea: "GINECOLOGÍA",
    topic: "MASA ANEXIAL SOSPECHOSA DE CÁNCER DE OVARIO",
    difficulty: "medium",
    tags: ["mir", "espana", "ginecologia"],
    statement:
      "Una mujer de 63 años consulta por distensión abdominal y saciedad precoz de dos meses de evolución. La ecografía muestra una masa anexial de 9 cm, sólido-quística con tabiques gruesos, y ascitis. El CA-125 es de 850 U/ml. ¿Cuál es la actitud más adecuada?",
    options: [
      { id: "A", label: "A", text: "Estudio de extensión y cirugía por un equipo de ginecología oncológica para diagnóstico, estadificación y citorreducción." },
      { id: "B", label: "B", text: "Control ecográfico en 3 meses." },
      { id: "C", label: "C", text: "Punción aspiración del quiste por vía vaginal para citología." },
      { id: "D", label: "D", text: "Anticonceptivos orales durante 3 ciclos y reevaluar." },
    ],
    correctOptionId: "A",
    explanation:
      "Una **masa anexial compleja** (sólido-quística, tabiques gruesos) en una **mujer posmenopáusica**, con **ascitis** y **CA-125 muy elevado**, es altamente sospechosa de **cáncer de ovario epitelial**, que suele diagnosticarse en estadios avanzados por su clínica inespecífica. Tras el estudio de extensión (TC), el tratamiento se basa en la **cirugía de estadificación y citorreducción máxima** por un equipo de **ginecología oncológica**, seguida habitualmente de quimioterapia con carboplatino y paclitaxel.\n\n**TRAMPA DEL EXAMEN:** La **punción de una masa sospechosa** está **contraindicada** porque puede diseminar un tumor encapsulado. La vigilancia o los anticonceptivos solo tienen sentido en quistes funcionales simples de mujeres premenopáusicas.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el cáncer de ovario «susurra»: hinchazón, saciedad precoz, molestias vagas. Cuando en una mujer posmenopáusica ve una masa compleja con ascitis, no pinche ni espere: derive a ginecología oncológica. La calidad de la primera cirugía es uno de los factores pronósticos más importantes.",
    keyPoints: [
      "Masa anexial compleja + ascitis + CA-125 elevado en posmenopáusica: sospecha de cáncer de ovario.",
      "Tratamiento: cirugía de estadificación y citorreducción máxima + quimioterapia (carboplatino-paclitaxel).",
      "No puncionar una masa anexial sospechosa (riesgo de diseminación).",
    ],
  },
  {
    id: "mir-2026-123",
    university: "MIR (España)",
    examArea: "GINECOLOGÍA",
    topic: "ANTICONCEPCIÓN DE URGENCIA",
    difficulty: "easy",
    tags: ["mir", "espana", "ginecologia"],
    statement:
      "Una mujer de 26 años acude porque hace 90 horas tuvo una relación sexual sin protección. No desea gestación. ¿Cuál es el método de anticoncepción de urgencia más eficaz en este momento?",
    options: [
      { id: "A", label: "A", text: "Levonorgestrel 1,5 mg por vía oral." },
      { id: "B", label: "B", text: "Inserción de un dispositivo intrauterino de cobre." },
      { id: "C", label: "C", text: "Anticonceptivos orales combinados a doble dosis (método de Yuzpe)." },
      { id: "D", label: "D", text: "Ya no existe ningún método eficaz; hay que esperar a la siguiente menstruación." },
    ],
    correctOptionId: "B",
    explanation:
      "El **DIU de cobre** es el método de **anticoncepción de urgencia más eficaz**, se puede insertar hasta **5 días (120 horas)** después de la relación y sirve además como anticoncepción posterior. Entre los métodos orales, el **acetato de ulipristal** es eficaz hasta las **120 horas**, mientras que el **levonorgestrel** se recomienda en las primeras **72 horas** y su eficacia disminuye con el tiempo.\n\n**TRAMPA DEL EXAMEN:** Pensar que pasadas las 72 horas ya no hay opciones. El método de Yuzpe es menos eficaz y peor tolerado y ha quedado en desuso.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., quédese con los tiempos: levonorgestrel hasta 72 horas; ulipristal y DIU de cobre hasta 120 horas. Y si la paciente lo acepta, el DIU de cobre gana en eficacia y además le deja resuelta la anticoncepción para años. Ninguno de estos métodos es abortivo: actúan antes de la implantación.",
    keyPoints: [
      "DIU de cobre: la anticoncepción de urgencia más eficaz, hasta 120 horas.",
      "Ulipristal hasta 120 h; levonorgestrel hasta 72 h (eficacia decreciente con el tiempo).",
      "El DIU de cobre sirve además como anticoncepción a largo plazo.",
    ],
  },
  {
    id: "mir-2026-124",
    university: "MIR (España)",
    examArea: "GINECOLOGÍA",
    topic: "LESIÓN MAMARIA BI-RADS 4",
    difficulty: "medium",
    tags: ["mir", "espana", "ginecologia"],
    statement:
      "En el programa de cribado de cáncer de mama, a una mujer de 55 años se le detecta en la mamografía un nódulo espiculado de 12 mm, que se clasifica como BI-RADS 4. La exploración física es anodina. ¿Cuál es el siguiente paso?",
    options: [
      { id: "A", label: "A", text: "Repetir la mamografía en 6 meses." },
      { id: "B", label: "B", text: "Mastectomía radical sin diagnóstico histológico previo." },
      { id: "C", label: "C", text: "Biopsia con aguja gruesa guiada por imagen." },
      { id: "D", label: "D", text: "Determinar marcadores tumorales (CA 15-3) y decidir según su resultado." },
    ],
    correctOptionId: "C",
    explanation:
      "La categoría **BI-RADS 4** indica una **lesión sospechosa de malignidad**, y la **BI-RADS 5** una lesión altamente sugestiva. En ambas es obligatorio el **diagnóstico histológico** mediante **biopsia con aguja gruesa (BAG)** guiada por ecografía o estereotaxia. El resultado histológico (y la inmunohistoquímica: receptores hormonales, HER2, Ki-67) guía el tratamiento.\n\n**TRAMPA DEL EXAMEN:** El control a 6 meses corresponde a la categoría **BI-RADS 3** (probablemente benigna). Ninguna cirugía oncológica se realiza sin diagnóstico histológico. Los marcadores tumorales no sirven para el diagnóstico del cáncer de mama.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., memorice la escala BI-RADS por lo que implica: 1 y 2, cribado habitual; 3, control a corto plazo; 4 y 5, biopsia; 6, cáncer ya confirmado. Un nódulo espiculado es de los hallazgos que más asustan en una mamografía: no se queda vigilando, lo biopsia.",
    keyPoints: [
      "BI-RADS 4 y 5: lesión sospechosa → biopsia con aguja gruesa guiada por imagen.",
      "BI-RADS 3: probablemente benigna → control a corto plazo (6 meses).",
      "Los marcadores tumorales no sirven para diagnosticar el cáncer de mama.",
    ],
  },
  {
    id: "mir-2026-125",
    university: "MIR (España)",
    examArea: "PEDIATRÍA",
    topic: "ESTENOSIS HIPERTRÓFICA DE PÍLORO",
    difficulty: "easy",
    tags: ["mir", "espana", "pediatria"],
    statement:
      "Un lactante varón de 4 semanas presenta vómitos cada vez más frecuentes, «en escopetazo», no biliosos, tras las tomas, quedándose con hambre. Ha perdido peso. La gasometría muestra alcalosis metabólica con hipocloremia e hipopotasemia. ¿Cuál es la prueba diagnóstica de elección?",
    options: [
      { id: "A", label: "A", text: "Ecografía abdominal." },
      { id: "B", label: "B", text: "Tránsito esofagogastroduodenal con bario." },
      { id: "C", label: "C", text: "Endoscopia digestiva alta." },
      { id: "D", label: "D", text: "Tomografía computarizada abdominal." },
    ],
    correctOptionId: "A",
    explanation:
      "La **estenosis hipertrófica de píloro** se presenta típicamente entre las **2 y 8 semanas de vida**, más en **varones primogénitos**, con **vómitos proyectivos no biliosos** y hambre persistente. Los vómitos de contenido gástrico producen **alcalosis metabólica hipoclorémica e hipopotasémica**. La **ecografía abdominal** es la prueba de elección (engrosamiento y elongación del músculo pilórico). El tratamiento es la **piloromiotomía de Ramstedt**, **tras corregir** la deshidratación y las alteraciones hidroelectrolíticas.\n\n**TRAMPA DEL EXAMEN:** Los vómitos **biliosos** en un neonato orientan a obstrucción distal a la ampolla de Vater (por ejemplo, malrotación con vólvulo), que es una urgencia quirúrgica distinta. No se opera de urgencia sin corregir antes la alcalosis.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., lactante de un mes que vomita con fuerza, no bilioso, y se queda con hambre: piense en el píloro. La ecografía se lo confirma sin radiación. Antes de mandarlo a quirófano, corrija los líquidos y los iones; la cirugía no es tan urgente como la alcalosis.",
    keyPoints: [
      "Estenosis de píloro: 2-8 semanas, vómitos proyectivos no biliosos, lactante hambriento.",
      "Alcalosis metabólica hipoclorémica e hipopotasémica; diagnóstico por ecografía.",
      "Piloromiotomía de Ramstedt tras corregir la deshidratación y los electrolitos.",
    ],
  },
  {
    id: "mir-2026-126",
    university: "MIR (España)",
    examArea: "PEDIATRÍA",
    topic: "ENFERMEDAD DE KAWASAKI",
    difficulty: "medium",
    tags: ["mir", "espana", "pediatria"],
    statement:
      "Una niña de 3 años presenta fiebre de 6 días que no cede con antitérmicos, conjuntivitis bilateral no supurativa, labios fisurados, lengua aframbuesada, exantema polimorfo, edema de manos y pies, y una adenopatía cervical de 2 cm. ¿Cuál es el tratamiento indicado?",
    options: [
      { id: "A", label: "A", text: "Amoxicilina oral y control en 48 horas." },
      { id: "B", label: "B", text: "Inmunoglobulina intravenosa en dosis única junto con ácido acetilsalicílico." },
      { id: "C", label: "C", text: "Solo antitérmicos, porque es un cuadro viral autolimitado." },
      { id: "D", label: "D", text: "Corticoides tópicos para el exantema." },
    ],
    correctOptionId: "B",
    explanation:
      "La **enfermedad de Kawasaki** es una **vasculitis** de mediano vaso que afecta sobre todo a menores de 5 años. El diagnóstico clásico exige **fiebre ≥ 5 días** y **4 de 5 criterios**: conjuntivitis bilateral no supurativa, cambios en labios y mucosa oral, exantema polimorfo, cambios en extremidades (edema, eritema, descamación posterior) y adenopatía cervical ≥ 1,5 cm. El tratamiento es la **inmunoglobulina intravenosa** (2 g/kg en dosis única) junto con **ácido acetilsalicílico**, idealmente en los **primeros 10 días**, para reducir el riesgo de **aneurismas coronarios**. Se debe realizar un **ecocardiograma**.\n\n**TRAMPA DEL EXAMEN:** Tratarla como una infección bacteriana o viral banal. Su complicación más grave (aneurismas coronarios) es prevenible con el tratamiento precoz. El ácido acetilsalicílico es de las pocas indicaciones en niños pese al riesgo de síndrome de Reye.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., niño pequeño con fiebre que no se va y «todo rojo» (ojos, labios, piel, manos): piense en Kawasaki. Lo que está en juego es el corazón. Inmunoglobulina y aspirina a tiempo, y ecocardiograma para vigilar las coronarias.",
    keyPoints: [
      "Kawasaki: fiebre ≥ 5 días + 4 de 5 criterios (conjuntivitis, mucosa oral, exantema, extremidades, adenopatía).",
      "Tratamiento: inmunoglobulina IV + ácido acetilsalicílico en los primeros 10 días.",
      "Complicación principal: aneurismas coronarios → ecocardiograma.",
    ],
  },
  {
    id: "mir-2026-127",
    university: "MIR (España)",
    examArea: "PEDIATRÍA",
    topic: "ICTERICIA NEONATAL PATOLÓGICA",
    difficulty: "medium",
    tags: ["mir", "espana", "pediatria"],
    statement:
      "Un recién nacido a término, de madre O positivo, presenta ictericia visible a las 18 horas de vida. Está activo y se alimenta bien. ¿Cuál es la valoración correcta?",
    options: [
      { id: "A", label: "A", text: "Es una ictericia fisiológica y no precisa estudio." },
      { id: "B", label: "B", text: "Se debe suspender la lactancia materna durante 48 horas." },
      { id: "C", label: "C", text: "Es una ictericia patológica por su aparición en las primeras 24 horas y obliga a estudiar una posible hemólisis (grupo, Coombs directo, bilirrubina, hemograma)." },
      { id: "D", label: "D", text: "Debe realizarse una exanguinotransfusión inmediata." },
    ],
    correctOptionId: "C",
    explanation:
      "La **ictericia que aparece en las primeras 24 horas de vida es siempre patológica**. La causa más frecuente es la **hemólisis**, y en un hijo de madre **grupo O** hay que pensar en **incompatibilidad ABO**. Se debe determinar la **bilirrubina** (total y fraccionada), el **grupo y Rh** del recién nacido, el **test de Coombs directo** y el **hemograma con reticulocitos**, y valorar la **fototerapia** según las curvas por edad en horas.\n\n**TRAMPA DEL EXAMEN:** La ictericia **fisiológica** aparece **después de las 24 horas**, alcanza su máximo al 3.er-4.º día y no supera ciertos niveles. La lactancia materna no se suspende de forma sistemática. La exanguinotransfusión se reserva para niveles muy elevados o signos de encefalopatía.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., el reloj es el primer dato: ictericia antes de las 24 horas, estudio obligado. Madre O y niño A o B es la combinación clásica. Mida la bilirrubina, póngala en la curva de fototerapia y no deje que llegue a niveles que puedan dañar el cerebro.",
    keyPoints: [
      "Ictericia en las primeras 24 h de vida: siempre patológica (pensar en hemólisis).",
      "Madre grupo O: sospechar incompatibilidad ABO; estudiar grupo, Coombs directo, bilirrubina y hemograma.",
      "Ictericia fisiológica: aparece después de 24 h, máximo al 3.er-4.º día.",
    ],
  },
  {
    id: "mir-2026-128",
    university: "MIR (España)",
    examArea: "PEDIATRÍA",
    topic: "DISPLASIA DEL DESARROLLO DE LA CADERA",
    difficulty: "medium",
    tags: ["mir", "espana", "pediatria"],
    statement:
      "En la revisión de una recién nacida de 3 semanas, nacida en presentación de nalgas y con antecedentes familiares de displasia de cadera, la maniobra de Ortolani es positiva en la cadera izquierda. ¿Cuál es la actitud más adecuada?",
    options: [
      { id: "A", label: "A", text: "Radiografía de caderas y, si es normal, alta." },
      { id: "B", label: "B", text: "Esperar a los 6 meses para realizar cualquier estudio." },
      { id: "C", label: "C", text: "Cirugía de reducción abierta inmediata." },
      { id: "D", label: "D", text: "Ecografía de caderas y tratamiento ortopédico con arnés de Pavlik." },
    ],
    correctOptionId: "D",
    explanation:
      "La **displasia del desarrollo de la cadera** tiene como factores de riesgo el **sexo femenino**, la **presentación de nalgas** y los **antecedentes familiares**. Las maniobras de **Ortolani** (reduce una cadera luxada) y **Barlow** (luxa una cadera luxable) son el cribado clínico en el recién nacido. En los primeros meses la prueba de imagen de elección es la **ecografía** (la cabeza femoral aún no está osificada), y el tratamiento es ortopédico con **arnés de Pavlik**, que mantiene las caderas en flexión y abducción.\n\n**TRAMPA DEL EXAMEN:** La **radiografía** no es útil antes de los **4-6 meses**, cuando aparece el núcleo de osificación. Esperar empeora el pronóstico. La cirugía se reserva para diagnósticos tardíos o fracasos del tratamiento ortopédico.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., niña, nalgas y antecedentes familiares: el trío de riesgo. En el lactante pequeño la cadera es cartílago, por eso se ve con ecografía. Y cuanto antes se pone el arnés, mejor se forma la articulación.",
    keyPoints: [
      "Factores de riesgo: sexo femenino, presentación de nalgas, antecedentes familiares.",
      "Cribado: Ortolani y Barlow; imagen < 4-6 meses: ecografía (radiografía después).",
      "Tratamiento precoz: arnés de Pavlik (flexión y abducción).",
    ],
  },
  {
    id: "mir-2026-129",
    university: "MIR (España)",
    examArea: "PEDIATRÍA",
    topic: "RETRASO CONSTITUCIONAL DEL CRECIMIENTO Y DE LA PUBERTAD",
    difficulty: "hard",
    tags: ["mir", "espana", "pediatria"],
    statement:
      "Un chico de 14 años consulta por talla baja (percentil 3) y ausencia de signos puberales. Su velocidad de crecimiento ha sido normal pero siempre en percentiles bajos. El padre tuvo el «estirón» tarde. La edad ósea es de 12 años y la exploración y la analítica básica son normales. ¿Cuál es el diagnóstico más probable?",
    options: [
      { id: "A", label: "A", text: "Retraso constitucional del crecimiento y de la pubertad." },
      { id: "B", label: "B", text: "Déficit de hormona de crecimiento." },
      { id: "C", label: "C", text: "Talla baja familiar." },
      { id: "D", label: "D", text: "Hipotiroidismo adquirido." },
    ],
    correctOptionId: "A",
    explanation:
      "El **retraso constitucional del crecimiento y de la pubertad** es la causa más frecuente de talla baja con retraso puberal en varones. Se caracteriza por **velocidad de crecimiento normal**, **edad ósea retrasada** respecto a la cronológica, **pubertad tardía** y frecuentes **antecedentes familiares** de desarrollo tardío. La **talla final suele ser normal**, acorde con la talla diana familiar.\n\n**TRAMPA DEL EXAMEN:** En la **talla baja familiar** la edad ósea es **acorde** con la cronológica y la pubertad aparece a su edad. El **déficit de GH** y el **hipotiroidismo** cursan con **velocidad de crecimiento disminuida** y edad ósea muy retrasada, además de otros datos clínicos y analíticos.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., en talla baja mire siempre dos cosas: la velocidad de crecimiento y la edad ósea. Velocidad normal con edad ósea retrasada y un padre «tardío»: retraso constitucional, un niño que simplemente va con el reloj atrasado y llegará. Velocidad baja: busque una causa orgánica.",
    keyPoints: [
      "Retraso constitucional: velocidad normal, edad ósea retrasada, pubertad tardía, talla final normal.",
      "Talla baja familiar: edad ósea acorde con la cronológica y padres bajos.",
      "Velocidad de crecimiento disminuida sugiere causa orgánica (déficit de GH, hipotiroidismo).",
    ],
  },
  {
    id: "mir-2026-130",
    university: "MIR (España)",
    examArea: "PEDIATRÍA",
    topic: "FIBROSIS QUÍSTICA: CRIBADO NEONATAL Y CONFIRMACIÓN",
    difficulty: "medium",
    tags: ["mir", "espana", "pediatria"],
    statement:
      "El cribado neonatal de un recién nacido muestra una tripsina inmunorreactiva elevada. ¿Cuál es la prueba que confirma el diagnóstico de fibrosis quística?",
    options: [
      { id: "A", label: "A", text: "Repetir la tripsina inmunorreactiva a los 6 meses." },
      { id: "B", label: "B", text: "Radiografía de tórax." },
      { id: "C", label: "C", text: "Test del sudor con cloro elevado (≥ 60 mmol/l), completado con el estudio genético del gen CFTR." },
      { id: "D", label: "D", text: "Determinación de elastasa fecal como prueba diagnóstica única." },
    ],
    correctOptionId: "C",
    explanation:
      "La **fibrosis quística** es una enfermedad **autosómica recesiva** por mutaciones del gen **CFTR** (la más frecuente, F508del). El **cribado neonatal** se basa en la **tripsina inmunorreactiva** elevada, pero el diagnóstico se **confirma** con el **test del sudor**: **cloro ≥ 60 mmol/l** en dos determinaciones (30-59 es dudoso), completado con el **estudio genético**.\n\n**TRAMPA DEL EXAMEN:** La tripsina inmunorreactiva es solo una prueba de **cribado**. La **elastasa fecal** valora la **insuficiencia pancreática exocrina**, una manifestación de la enfermedad, pero no la diagnostica por sí sola.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDr., en fibrosis quística el sudor es salado porque el canal de cloro no funciona. Cribado con tripsina en la prueba del talón; confirmación con cloro en sudor por encima de 60. Y hoy la genética tiene doble valor: confirma y permite elegir los moduladores del CFTR.",
    keyPoints: [
      "Cribado neonatal de fibrosis quística: tripsina inmunorreactiva elevada.",
      "Confirmación: test del sudor con cloro ≥ 60 mmol/l + estudio genético del CFTR.",
      "Herencia autosómica recesiva; mutación más frecuente F508del.",
    ],
  },
];
