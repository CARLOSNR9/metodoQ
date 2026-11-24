import { buildUdeaQuestion as q } from "./build-question";

/** Examen real de admisión UdeA · preguntas 11–20 (clave Método Q). */
export const UDEA_EXAMEN_REAL_11_20 = [
  q({
    id: "udea-real-11",
    examArea: "ORTOPEDIA",
    topic: "TENOSINOVITIS INFECCIOSA DE LOS FLEXORES",
    difficulty: "medium",
    tags: ["examen-real", "mano"],
    statement:
      "Hombre de 45 años quien sufrió una lesión punzante en la base del cuarto dedo derecho 48 horas antes. Presenta dolor intenso a la extensión de la articulación interfalángica proximal y edema y eritema a lo largo del dedo hasta la región medio palmar. ¿Cuáles de los siguientes son el diagnóstico más probable y el tratamiento inicial más adecuado?",
    options: [
      [
        "Absceso subcutáneo; drenaje quirúrgico y antibióticos orales",
        "El absceso es una colección localizada y fluctuante; aquí el compromiso sigue la vaina de todo el dedo hasta la palma.",
      ],
      [
        "Celulitis; antibióticos tópicos y férula de inmovilización",
        "La celulitis no causa dolor intenso a la extensión pasiva, y los antibióticos tópicos no tratan infecciones profundas.",
      ],
      [
        "Infección superficial; antibióticos orales y observación",
        "Subestimar la infección de la vaina lleva a necrosis tendinosa y rigidez del dedo.",
      ],
      ["Tenosinovitis infecciosa; antibióticos intravenosos y desbridamiento quirúrgico"],
    ],
    correct: "D",
    explanation:
      "Signos de Kanavel: (1) dedo en semiflexión, (2) edema fusiforme simétrico, (3) dolor a lo largo de la vaina flexora y (4) dolor intenso a la extensión pasiva (el más sensible). Herida punzante en la cara volar + estos signos = tenosinovitis infecciosa del flexor.\n\nEs una urgencia quirúrgica: antibiótico intravenoso (cubrir S. aureus y estreptococo; considerar SAMR) y lavado/desbridamiento de la vaina. Solo en presentaciones muy tempranas (<24–48 h) se intenta antibiótico IV con vigilancia estricta.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, dedo hinchado entero que grita cuando lo estiras = Kanavel. Va a quirófano con antibiótico IV.",
    keyPoints: [
      "Signos de Kanavel: flexión, edema fusiforme, dolor en la vaina y a la extensión pasiva.",
      "Tratamiento: antibiótico IV + lavado quirúrgico de la vaina.",
      "Complicación: necrosis tendinosa y diseminación a espacios palmares.",
    ],
  }),
  q({
    id: "udea-real-12",
    examArea: "PEDIATRÍA",
    topic: "LABIO Y PALADAR HENDIDO",
    difficulty: "easy",
    tags: ["examen-real", "cirugia-plastica"],
    statement:
      "Recién nacido en casa a quien traen a evaluación porque le identifican un defecto en el labio. Examen físico: fisura labiopalatina unilateral completa. Los padres solicitan orientación sobre el momento en que le deben realizar la cirugía. ¿Cuál de los siguientes es el mejor momento para realizar la reparación quirúrgica para optimizar los resultados funcionales y estéticos?",
    options: [
      [
        "A los 12 meses de edad",
        "Alrededor de los 9–12 meses se cierra el paladar (antes del desarrollo del habla), no el labio.",
      ],
      ["A los 3 meses de edad"],
      [
        "A los 6 meses de edad",
        "Esperar más allá de los 3 meses no mejora el resultado del labio y retrasa la reparación estética y funcional.",
      ],
      [
        "En ese momento",
        "La cirugía neonatal inmediata tiene más riesgo anestésico y peores resultados; primero se optimiza la alimentación y el ortopédico prequirúrgico.",
      ],
    ],
    correct: "B",
    explanation:
      "Secuencia habitual del manejo de la fisura labiopalatina:\n• Queiloplastia (labio): ~3 meses — 'regla de los 10': 10 semanas, 10 libras, hemoglobina 10 g/dL.\n• Palatoplastia: 9–12 meses, antes de que el niño empiece a hablar.\n• Injerto óseo alveolar: 7–11 años (dentición mixta).\n• Rinoplastia/ortognática: tras el crecimiento.\nMientras tanto: alimentación con biberones especiales, ortopedia prequirúrgica (moldeamiento nasoalveolar) y manejo multidisciplinario.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, regla de los 10 para el labio (~3 meses) y el paladar antes del año para que hable bien.",
    keyPoints: [
      "Labio: ~3 meses (regla de los 10).",
      "Paladar: 9–12 meses, antes del habla.",
      "Injerto alveolar: dentición mixta (7–11 años).",
    ],
  }),
  q({
    id: "udea-real-13",
    examArea: "CIRUGÍA",
    topic: "FRACTURA DE MANDÍBULA",
    difficulty: "hard",
    tags: ["examen-real", "trauma-facial", "cirugia-plastica"],
    statement:
      "Hombre de 30 años, consulta al servicio de urgencias tras recibir un golpe directo en la mandíbula durante un partido de fútbol. Refiere dolor y dificultad para la apertura oral. Examen físico: trismus, maloclusión y equimosis en el piso de la boca. Radiografías oblicuas de mandíbula y Towne invertida: fractura del ángulo mandibular derecho, favorable, sin desplazamiento significativo. ¿Cuál de las siguientes es la conducta más apropiada?",
    options: [
      ["Administrar antibióticos y analgesia, con remisión para tratamiento quirúrgico diferido"],
      [
        "Ordenar analgésico, dieta líquida estricta y seguimiento ambulatorio con cirujano plástico",
        "Omite el antibiótico: la fractura del ángulo con dientes en el trazo se considera abierta a la cavidad oral, y la maloclusión exige fijación.",
      ],
      [
        "Ordenar tratamiento con analgesia y reposo mandibular",
        "Con maloclusión no basta el reposo; además, falta la cobertura antibiótica de una fractura abierta a boca.",
      ],
      [
        "Realizar reducción cerrada con fijación intermaxilar inmediata",
        "La fijación no es una urgencia inmediata; además, el ángulo se trata preferiblemente con reducción abierta y osteosíntesis, de forma diferida y programada.",
      ],
    ],
    correct: "A",
    explanation:
      "Las fracturas mandibulares que comprometen el área dentada (ángulo con tercer molar, cuerpo, sínfisis) se consideran abiertas a la cavidad oral: requieren antibiótico (p. ej. ampicilina-sulbactam o clindamicina) y analgesia.\n\nLa maloclusión indica que la fractura altera la oclusión y debe fijarse: el estándar en el ángulo es reducción abierta y fijación interna (placa de Champy), de manera programada (idealmente en los primeros días). La equimosis del piso de la boca es un signo clásico de fractura mandibular.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, fractura de mandíbula con dientes = fractura abierta → antibiótico. Si muerde mal, necesita cirugía; no se resuelve con reposo.",
    keyPoints: [
      "Fractura mandibular en zona dentada = fractura abierta → antibiótico.",
      "Maloclusión → indicación de reducción y fijación.",
      "Ángulo: osteosíntesis programada (placa de Champy).",
    ],
  }),
  q({
    id: "udea-real-14",
    examArea: "ORTOPEDIA",
    topic: "LESIÓN DEL PLEXO BRAQUIAL",
    difficulty: "hard",
    tags: ["examen-real", "trauma", "nervio-periferico"],
    statement:
      "Hombre de 32 años, acude al servicio de urgencias después de un accidente de tránsito. Examen físico: hombro derecho caído, incapacidad para abducir el brazo y flexionar el codo, pérdida de la sensibilidad táctil en la cara lateral del brazo. Radiografía: sin fracturas. ¿Cuál de las siguientes es la conducta más adecuada?",
    options: [
      [
        "Cirugía exploratoria de emergencia",
        "La exploración inmediata se reserva para heridas penetrantes limpias o lesión vascular asociada, no para la tracción cerrada.",
      ],
      ["Evaluación quirúrgica diferida y electromiografía a las 3 semanas"],
      [
        "Fisioterapia temprana y analgésicos",
        "La fisioterapia se da, pero sin estudio electrofisiológico ni seguimiento quirúrgico se pierde la ventana para reconstruir (ideal antes de 3–6 meses).",
      ],
      [
        "Inmovilización y electromiografía",
        "La EMG inmediata no sirve: la degeneración walleriana tarda ~3 semanas en manifestarse; la inmovilización prolongada causa rigidez.",
      ],
    ],
    correct: "B",
    explanation:
      "Lesión del tronco superior del plexo braquial (C5–C6, tipo Erb) por tracción cerrada: falla de abducción (deltoides, supraespinoso) y flexión del codo (bíceps), anestesia en la cara lateral del brazo.\n\nManejo: fisioterapia para mantener arcos de movimiento, y estudio electrodiagnóstico (EMG/velocidades de conducción) a las 3–4 semanas, cuando ya se ve la denervación. Si no hay recuperación clínica o electromiográfica, se reconstruye (neurólisis, injertos, transferencias nerviosas) idealmente antes de 3–6 meses. La RM ayuda a detectar avulsiones radiculares.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, la EMG antes de 3 semanas sale 'mentirosa'. Tracción cerrada = esperar, rehabilitar y estudiar a las 3 semanas.",
    keyPoints: [
      "C5–C6: no abduce el hombro ni flexiona el codo; anestesia lateral del brazo.",
      "EMG útil a las 3–4 semanas (degeneración walleriana).",
      "Sin recuperación → cirugía antes de 3–6 meses.",
    ],
  }),
  q({
    id: "udea-real-15",
    examArea: "GINECOBSTETRICIA",
    topic: "COLESTASIS INTRAHEPÁTICA DEL EMBARAZO",
    difficulty: "easy",
    tags: ["examen-real", "dermatosis-embarazo"],
    statement:
      "Mujer de 25 años. Primigestante en el tercer trimestre. Comenzó con prurito intenso en las palmas y las plantas que luego se generalizó. Sin lesiones primarias en piel. ¿Cuál de los siguientes es el diagnóstico más probable?",
    options: [
      ["Colestasis intrahepática del embarazo"],
      [
        "Erupción atópica del embarazo",
        "Suele iniciar antes (primer y segundo trimestre) con lesiones eccematosas o papulares en flexuras.",
      ],
      [
        "Penfigoide gestacional",
        "Inicia con pápulas y placas urticariformes periumbilicales que evolucionan a ampollas: sí hay lesiones primarias.",
      ],
      [
        "Prurigo simple del embarazo",
        "Presenta pápulas excoriadas en superficies extensoras, no prurito aislado sin lesiones.",
      ],
    ],
    correct: "A",
    explanation:
      "Prurito sin lesiones primarias (solo excoriaciones secundarias), de predominio palmoplantar y nocturno, en el tercer trimestre = colestasis intrahepática del embarazo.\n\nDiagnóstico: ácidos biliares séricos >10 µmol/L (y transaminasas elevadas). Riesgo fetal: muerte fetal, parto pretérmino, meconio; el riesgo sube con ácidos biliares ≥100 µmol/L. Tratamiento: ácido ursodesoxicólico y terminación del embarazo según el nivel de ácidos biliares (36–39 semanas). Desaparece tras el parto.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, piquiña en palmas y plantas sin brotes en el tercer trimestre: pide ácidos biliares. La que arriesga es el bebé.",
    keyPoints: [
      "Prurito palmoplantar sin lesiones primarias en el 3.er trimestre.",
      "Ácidos biliares >10 µmol/L confirman.",
      "Ácido ursodesoxicólico y terminación según ácidos biliares.",
    ],
  }),
  q({
    id: "udea-real-16",
    examArea: "SALUD PÚBLICA",
    topic: "INTERPRETACIÓN DEL VALOR P",
    difficulty: "medium",
    tags: ["examen-real", "epidemiologia", "bioestadistica"],
    statement:
      "Un ensayo clínico, doble ciego, aleatorizado y controlado con placebo con asignación 1:1, evaluó el efecto de tirzepatida sobre la muerte por causas cardiovasculares en pacientes con insuficiencia cardiaca. Se encontró una disminución en la frecuencia de muerte por causas cardiovasculares en el grupo de tirzepatida en comparación con el placebo, resultado con un valor p de 0.03. ¿Cuál de los siguientes enunciados es la interpretación correcta de este resultado?",
    options: [
      [
        "El fármaco sí es efectivo porque el valor p es menor a 0.05",
        "Un p <0,05 indica significancia estadística, no prueba la eficacia ni dice nada del tamaño o la relevancia clínica del efecto.",
      ],
      ["El valor p no prueba que el fármaco sea la causa de la reducción de la muerte"],
      [
        "Existe una probabilidad del 97% de que el fármaco sea efectivo",
        "Error clásico: el valor p no es la probabilidad de que la hipótesis sea verdadera.",
      ],
      [
        "No existe evidencia en contra de la hipótesis nula del estudio",
        "Al contrario: un p de 0,03 sí aporta evidencia en contra de la hipótesis nula (permite rechazarla con α = 0,05).",
      ],
    ],
    correct: "B",
    explanation:
      "El valor p es la probabilidad de observar un resultado igual o más extremo que el obtenido SI la hipótesis nula fuera cierta. p = 0,03 significa que, sin efecto real, un resultado así ocurriría el 3% de las veces: hay evidencia para rechazar H0 con α = 0,05.\n\nLo que NO significa: que haya 97% de probabilidad de que el fármaco funcione, ni que el efecto sea grande o clínicamente importante, ni que esté 'probada' la causalidad. Para eso se miran el tamaño del efecto, el intervalo de confianza, la validez del diseño y la replicación (declaración de la ASA sobre el valor p).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, el valor p no prueba nada: solo dice qué tan raro sería tu resultado si el fármaco no sirviera.",
    keyPoints: [
      "Valor p = P(datos igual o más extremos | H0 cierta).",
      "No es la probabilidad de que H1 sea verdadera.",
      "Significancia estadística ≠ relevancia clínica ni prueba causal.",
    ],
  }),
  q({
    id: "udea-real-17",
    examArea: "GINECOBSTETRICIA",
    topic: "QUISTE SIMPLE DE OVARIO",
    difficulty: "hard",
    tags: ["examen-real", "masa-anexial"],
    statement:
      "Mujer de 32 años, consulta por dolor pélvico poco intenso, intermitente, sin otros síntomas asociados. Ecografía transvaginal: quiste simple de 8 cm en ovario izquierdo, útero y ovario derecho normales. Marcadores tumorales (entre paréntesis el valor de referencia): Ca 125: 24 UI/ml (<35UI/ml), antígeno carcinoembrionario: 1.18 ng/ml (<5 ng/ml), alfafetoproteína: 0.15 UI/mL (<5 UI/mL), deshidrogenasa láctica: 180 UI/L (<350 UI/L), βHCG: 0.02 mUI/mL (0 – 5 mUI/mL). ¿Cuál de las siguientes es la conducta más adecuada?",
    options: [
      [
        "Cirugía electiva para resección del quiste de ovario",
        "En una premenopáusica, un quiste simple <10 cm con marcadores normales tiene riesgo de malignidad casi nulo; la cirugía se reserva si persiste, crece o da síntomas importantes.",
      ],
      [
        "Cirugía inmediata para resección del quiste de ovario",
        "La cirugía urgente es para torsión o ruptura con hemoperitoneo; el dolor es leve e intermitente.",
      ],
      [
        "Tomografía de abdomen y pelvis para caracterizar mejor la lesión",
        "La TC no caracteriza mejor que la ecografía las lesiones anexiales; si hiciera falta otra imagen, sería la resonancia.",
      ],
      ["Vigilancia con ecografía transvaginal cada 3 meses esperando involución"],
    ],
    correct: "D",
    explanation:
      "Quiste simple (unilocular, anecoico, pared delgada, sin componente sólido ni flujo) en mujer premenopáusica = O-RADS 2 (riesgo de malignidad <1%). Con marcadores normales (incluidos los de células germinales por la edad), el manejo es expectante: la mayoría son funcionales y desaparecen.\n\nO-RADS/ACOG: quistes simples entre 5 y <10 cm en premenopáusicas → control ecográfico (8–12 semanas). Se opera si persiste o crece, si llega a ≥10 cm, si aparecen componentes sólidos o si hay complicación (torsión, ruptura). Advertir a la paciente los signos de torsión.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, quiste simple en mujer joven con marcadores normales: se vigila. La mayoría se van solos.\n\n*Clave elaborada por el equipo Método Q (el examen no trae respuestas).*",
    keyPoints: [
      "Quiste simple premenopáusico <10 cm = O-RADS 2 → vigilancia.",
      "Operar si persiste, crece, ≥10 cm, tiene sólido o se complica.",
      "Imagen complementaria: resonancia, no tomografía.",
    ],
  }),
  q({
    id: "udea-real-18",
    examArea: "GINECOBSTETRICIA",
    topic: "ENDOMETRIOMA EN LA PERIMENOPAUSIA",
    difficulty: "hard",
    tags: ["examen-real", "masa-anexial"],
    statement:
      "Mujer 48 años, asintomática, en control de riesgo cardiovascular. Revisión por sistemas y antecedentes negativos. Examen físico: masa de 7 cm en hipogastrio, resto normal. Ecografía transvaginal: imagen sugestiva de endometrioma. Marcadores tumorales (entre paréntesis el valor de referencia): Ca 125: 40 UI/ml (<35 UI/ml), antígeno carcinoembrionario: 1.05 ng/ml (<5 ng/ml). ¿Cuál de las siguientes es la conducta más adecuada?",
    options: [
      ["Cirugía para resección del quiste de ovario"],
      [
        "Completar estudio con βHCG, alfafetoproteína y deshidrogenasa láctica",
        "Los marcadores de células germinales son útiles en niñas, adolescentes y mujeres jóvenes, no a los 48 años.",
      ],
      [
        "Tomografía de abdomen y pelvis para caracterizar mejor la lesión",
        "La TC no caracteriza mejor una masa anexial que la ecografía; ya hay indicación quirúrgica.",
      ],
      [
        "Vigilancia con ecografía cada 3 meses en espera de involución",
        "Los endometriomas no involucionan, y a esta edad, con 7 cm y CA-125 elevado, aumenta el riesgo de transformación maligna (carcinoma de células claras o endometrioide).",
      ],
    ],
    correct: "A",
    explanation:
      "A diferencia del quiste funcional, el endometrioma no desaparece. En la perimenopausia (≥45 años), un endometrioma grande (>6–7 cm) se asocia a mayor riesgo de malignización (carcinoma de células claras y endometrioide), y la ESHRE recomienda resección quirúrgica para estudio histológico. El CA-125 discretamente elevado puede deberse a la endometriosis, pero no tranquiliza.\n\nLa vía usual es laparoscópica (quistectomía o anexectomía según edad y deseo reproductivo; a los 48 años suele preferirse la anexectomía).\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, endometrioma grande cerca de la menopausia = pieza para patología. No se vigila esperando que se vaya.\n\n*Clave elaborada por el equipo Método Q (el examen no trae respuestas).*",
    keyPoints: [
      "El endometrioma no involuciona con vigilancia.",
      "Perimenopausia + endometrioma grande → cirugía (riesgo de malignidad).",
      "Marcadores germinales: solo en pacientes jóvenes.",
    ],
  }),
  q({
    id: "udea-real-19",
    examArea: "GINECOBSTETRICIA",
    topic: "ANTICONCEPCIÓN DE EMERGENCIA",
    difficulty: "medium",
    tags: ["examen-real", "planificacion"],
    statement:
      "Mujer de 38 años, separada, 2 hijos. Consulta porque 4 días antes tuvo relación sexual sin protección y no desea un embarazo. Refiere ciclos regulares y su última menstruación fue 10 días antes. Antecedentes: hipertensión arterial en tratamiento con losartán, fumadora de 10 cigarrillos al día hace 20 años. Examen físico: presión arterial 150/95 mmHg, peso 76 kg, talla 154 cm. Con respecto a los métodos hormonales de emergencia ¿cuál de las siguientes es la mejor alternativa para ella?",
    options: [
      [
        "Levonorgestrel",
        "Su eficacia es máxima en las primeras 72 horas y cae con un IMC >30 (ella tiene 32 kg/m²).",
      ],
      [
        "Levonorgestrel + etinil estradiol",
        "El método combinado es menos eficaz, más emetizante y contiene estrógeno.",
      ],
      [
        "Método Yuzpe",
        "Es el mismo esquema combinado con estrógeno: menos eficaz y menos tolerado.",
      ],
      ["Ulipristal"],
    ],
    correct: "D",
    explanation:
      "Datos clave: han pasado 96 horas (4 días), la paciente tiene obesidad (IMC = 76 / 1,54² ≈ 32 kg/m²) y está a mitad de ciclo (día 10, cerca de la ovulación).\n\nEl acetato de ulipristal 30 mg es eficaz hasta 120 horas, mantiene mejor la eficacia al acercarse la ovulación y pierde menos eficacia con la obesidad que el levonorgestrel. El método no hormonal más eficaz es el DIU de cobre (hasta 5 días), pero la pregunta pide métodos hormonales. La emergencia hormonal de una sola toma no tiene contraindicación por HTA o tabaquismo, aunque el esquema Yuzpe (estrógenos) es menos eficaz.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, después de 72 horas o con IMC >30, el hormonal ganador es el ulipristal. Si te dejan escoger cualquiera, DIU de cobre.",
    keyPoints: [
      "Ulipristal: hasta 120 h, mejor eficacia periovulatoria y en obesidad.",
      "Levonorgestrel: ideal <72 h; eficacia baja si IMC >30.",
      "DIU de cobre: el más eficaz de todos (hasta 5 días).",
    ],
  }),
  q({
    id: "udea-real-20",
    examArea: "GINECOBSTETRICIA",
    topic: "SANGRADO UTERINO ANORMAL",
    difficulty: "medium",
    tags: ["examen-real", "palm-coein"],
    statement:
      "Mujer de 30 años, soltera, consulta porque desde 8 meses antes presenta menstruaciones más frecuentes y abundantes asociado a aparición de dolor pélvico. Sin vida sexual activa en el último año. Actualmente no tiene ningún tratamiento. ¿Cuáles de los siguientes exámenes se deben solicitar?",
    options: [
      [
        "Biopsia endometrial, hemograma y TSH",
        "La biopsia de endometrio se reserva para ≥45 años o menores con factores de riesgo (obesidad, anovulación crónica, falla terapéutica).",
      ],
      [
        "Ecografía pélvica transabdominal, hemograma, ferritina",
        "Tener o no vida sexual reciente no contraindica la vía transvaginal, que es más precisa; además falta la TSH.",
      ],
      ["Ecografía pélvica transvaginal, hemograma, TSH"],
      [
        "TAC simple de pelvis, TSH y hemograma",
        "La TC no es el estudio para evaluar útero y endometrio.",
      ],
    ],
    correct: "C",
    explanation:
      "Sangrado uterino anormal (más frecuente y abundante) con dolor pélvico en mujer de 30 años. El estudio inicial según PALM-COEIN (FIGO):\n• Prueba de embarazo (si aplica).\n• Hemograma (anemia) ± ferritina.\n• TSH (disfunción tiroidea = causa ovulatoria/endocrina).\n• Ecografía transvaginal: identifica pólipos, adenomiosis, miomas (la 'PALM' estructural), y el dolor sugiere adenomiosis o endometriosis.\nLa paciente ha tenido vida sexual, así que la vía transvaginal es aceptable y más precisa. Biopsia solo con ≥45 años o factores de riesgo.\n\n**EXPLICACIÓN DEL PROFE BY DR Q:**\nDoc, sangrado anormal: hemograma, TSH y ecografía transvaginal. La biopsia es para la que tiene ≥45 años o riesgo.",
    keyPoints: [
      "SUA: hemograma, TSH, β-hCG y ecografía transvaginal.",
      "Biopsia endometrial: ≥45 años o factores de riesgo.",
      "Dolor + sangrado abundante: pensar adenomiosis/miomas/endometriosis.",
    ],
  }),
];
